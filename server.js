// Serveur statique minimal : sert index.html.
// Lancer : node server.js  ->  http://localhost:3003
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(3003, () => console.log('Liste de courses sur http://localhost:3003'));
