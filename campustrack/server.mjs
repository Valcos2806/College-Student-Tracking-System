import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filePath = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
    if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    const content = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream' });
    response.end(content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`CampusTrack is running at http://localhost:${port}`);
});
