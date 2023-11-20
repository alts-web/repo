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
import serveStatic from
 
"serve-static";

// The following message MAY NOT be removed
console.log("Hypertabs\nThis program comes with ABSOLUTELY NO WARRANTY.\nThis is free software, and you are welcome to redistribute it\nunder the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nYou should have received a copy of the GNU General Public License\nalong with this program. If not, see <https://www.gnu.org/licenses/>.\n");

const bare = createBareServer("/bare/");
const serve = serveStatic(fileURLToPath(new URL("../static/", import.meta.url)), { fallthrough: false });
var server;
if (existsSync("../ssl/key.pem") && existsSync("../ssl/cert.pem")) {
  server = createHttpsServer({
    key: readFileSync("../ssl/key.pem"),
    cert: readFileSync("../ssl/cert.pem"),
  });
} else server = createHttpServer();

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/home', file: 'index.html' }, // Added '/home' route for redirection
  { path: '/games', file: '/games/index.html' },
  { path: '/events', file: 'games.html' },
];

// Handle request for `/home` before reaching `serve-static`
server.on("request", (req, res) => {
  for (const route of routes) {
    if (req.url === route.path) {
      res.sendFile(path.join(__dirname, '../static', route.file));
      return; // Stop processing further routes if a match is found
    }
  }

  // If no matching route is found, let the `serve-static` middleware handle the request
  if (bare.shouldRoute(req)) bare.routeRequest(req, res); else {
    serve(req, res, (err) => {
      res.writeHead(err?.statusCode || 500, null, {
        "Content-Type": "text/plain",
      });
      res.end('Error');
    });
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) bare.routeUpgrade(req, socket, head); else socket.end();
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
  } catch (err) { /* Can't find LAN interface */ };
  if (process.env.REPL_SLUG && process.env.REPL_OWNER) console.log(`Replit: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});

server.listen({ port: (process.env.PORT || 8080) });
