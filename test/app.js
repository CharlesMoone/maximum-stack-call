import http from 'http';
import fs from 'fs';

const port = 1208;

const server = http.createServer(async (req, res) => {
  const uri = req.url.slice(1);
  try {
    let file = '';
    res.statusCode = 200;

    if (/\.(js|mjs)$/.test(uri)) {
      file = fs.readFileSync(`./lib/${uri}`);
      res.setHeader('Content-Type', 'text/javascript');

      res.end(file);
    } else if (/\.ico$/.test(uri)) {
      file = fs.readFileSync(`./test/${uri}`);
      res.setHeader('Content-Type', 'image/x-icon');

      res.end(file);
    } else if (!uri) {
      file = fs.readFileSync('./test/index.html');
      res.setHeader('Content-Type', 'text/html');

      res.end(file);
    } else {
      throw new Error('error');
    }
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.end("{ code: 9, msg: 'error' }");
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`);
});
