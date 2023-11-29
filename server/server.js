const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

io.on("connection", socket => {
    socket.on("message", body => {
        socket.broadcast.emit("message", {
            body,
            from: socket.id.slice(3)
        })
    })
})

server.listen(3000, console.log("Puerto 3000"))