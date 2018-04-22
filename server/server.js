import http from 'http';


const host = '127.0.0.1';
const port = 8080;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, host);

console.log(`server running at {} port {} `, host, port)
