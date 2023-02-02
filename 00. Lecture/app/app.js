const http = require('http');

const port = 8080;

http
    .createServer((req, res) => {
        res.writeHeader(200, {
            "Content-Type": "text/html"
        });
        res.write("Hi");
        res.end();
    })
    .listen(port);

console.log(`Server listening on port ${port}`);