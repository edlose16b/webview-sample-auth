const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = "/index.html"; // or any file format

    console.log(__dirname);


    // read file from file system
    fs.readFile(__dirname + filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(`Error getting the file: ${err}.`);
        } else {
            res.setHeader('Content-type', 'text/html');
            res.end(data);
        }
    }
    );

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});