const http = require("http")
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("Hello node")
})

server.listen(3000)