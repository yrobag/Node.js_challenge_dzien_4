const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Someone is trying to connect with this server');
    res.end('Hello World from back-end :)');
});

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});