import createBareServer from '@tomphttp/bare-server-node';
import { fileURLToPath } from 'url';
import { createServer as createHttpsServer } from 'https';
import { createServer as createHttpServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import serveStatic from 'serve-static';
import path from 'path';

const routes = [
  { path: '/games', file: 'games.html', directory: 'static' },
];

const bare = createBareServer('/bare/');
const serve = serveStatic(fileURLToPath(new URL('../static/', import.meta.url)), { fallthrough: false });

const server = existsSync('../ssl/key.pem') && existsSync('../ssl/cert.pem')
  ? createHttpsServer({
      key: readFileSync('../ssl/key.pem'),
      cert: readFileSync('../ssl/cert.pem'),
    })
  : createHttpServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    for (const route of routes) {
      if (req.url === route.path && req.method === 'GET') {
        const filePath = path.join(__dirname, route.directory, route.file);
        if (existsSync(filePath)) {
          try {
            const fileContents = readFileSync(filePath, 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
            return;
          } catch (error) {
            console.error('Error reading file:', error);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
          }
        }
      }
    }

    serve(req, res, (err) => {
      res.writeHead(err?.statusCode || 500, null, {
        'Content-Type': 'text/plain',
      });
      res.end('Error');
    });
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on('listening', () => {
  const addr = server.address();

  console.log(`Server running on port ${addr.port}`);
  console.log('');
  console.log('You can now view it in your browser.');
  console.log(
    `Local: http://${addr.family === 'IPv6' ? `[${addr.address}]` : addr.address}:${addr.port}`
  );
  try {
    console.log(`On Your Network: http://${address.ip()}:${addr.port}`);
  } catch (err) {
    /* Can't find LAN interface */
  }
  if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
    console.log(`Replit: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
  }
});

server.listen({ port: process.env.PORT || 8080 });
