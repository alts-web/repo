import createBareServer from
 
'@tomphttp/bare-server-node';
import { fileURLToPath } from
 
"url";
import { createServer as createHttpsServer } from
 
"node:https";
import { createServer as createHttpServer } from
 
"node:http";
import { readFileSync, existsSync } from
 
"node:fs";
import { resolve } from "path";
import express from 'express';

const { __dirname } = fileURLToPath(new URL('.', import.meta.url));

const bare = createBareServer("/bare/");
const serveStatic = express.static(resolve(__dirname, "../static"));
var server;

if (existsSync(resolve(__dirname, "../ssl/key.pem")) && existsSync(resolve(__dirname, "../ssl/cert.pem"))) {
  server = createHttpsServer({
    key: readFileSync(resolve(__dirname, "../ssl/key.pem")),
    cert: readFileSync(resolve(__dirname, "../ssl/cert.pem")),
  });
} else {
  server = createHttpServer();
}

const app = express();
app.use(serveStatic);

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/gaming', file: 'gaming.html' },
];

routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(resolve(__dirname, `../static/${route.file}`));
  });
});

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
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

  /* Code for listing IPS from website-aio */

  
console.log(`Local: http://${addr.family === 'IPv6' ? `[${addr.address}]` : addr.address}:${addr.port}`);

  try {
    console.log(`On Your Network: http://${address.ip()}:${addr.port}`);
  } catch (err) {
    /* Can't find LAN interface */
  }

  if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
    console.log(`Replit: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
  }
});

server.listen({ port: (process.env.PORT || 8080) });
