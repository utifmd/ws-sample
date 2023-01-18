const express = require("express")
const http = require("http")

const app = express()
const server = http.Server(app)
let port = process.env.PORT || 5000

app.get(`/`, (req, resp) => {
    resp.sendFile('index.html', {root: __dirname})
})

server.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
