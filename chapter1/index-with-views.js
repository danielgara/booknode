const http = require("http")
const fs = require("fs")
const homePage = fs.readFileSync("index.html")
const contactPage = fs.readFileSync("contact.html")
const notFoundPage = fs.readFileSync("notfound.html")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end(homePage)
    }else if (req.url === "/contact"){
        res.end(contactPage)
    }else{
        res.writeHead(404)
        res.end(notFoundPage)
    }
})

server.listen(3000)