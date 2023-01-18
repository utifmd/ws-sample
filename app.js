const express = require("express")
const http = require("http")
const socketIo = require("socket.io")

const app = express()
const server = http.Server(app)
const io = socketIo(server)
let port = process.env.PORT || 5000

app.get(`/`, (req, resp) => {
    resp.sendFile('index.html', {root: __dirname})
})
io.on('connection', socket => {
    console.log(`A user connected`)
    
    socket.on('disconnect', () => {
        
        console.log(`A user disconnected`)
    })
})
server.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
