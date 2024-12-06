const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead("200", "text/html");
    res.end("<h1>Hello World</h1>");
});

server.listen(3000);

// TODO: Index Page

// TODO: About Page

// TODO: Contact Page

// TODO: 404 Page
