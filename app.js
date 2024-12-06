const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    let path = "./views/";
    let status = 200;

    switch (req.url) {
        case "/":
            path += "index.html";
            break;

        case "/about":
            path += "about.html";
            break;

        case "/contact-me":
            path += "contact.html";
            break;

        default:
            path += "404.html";
            status = 400;
    }

    fs.readFile(path, (err, data) => {
        if (err) throw err;

        res.writeHead(status, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(3000);
