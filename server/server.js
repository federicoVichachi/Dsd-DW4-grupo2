const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
const mysql = require("mysql")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "genteunion"
})

db.connect(err => {
    if(err){
        console.log(err)
    }else{
        console.log("Conexion exitosa")
    }
})

app.get("/publicaciones", (req, res) => {
    db.query("SELECT * FROM publicaciones", (err, result) =>{
        if(err) throw err
        res.json(result)
    })
})

app.post("/publicaciones", (req, res) => {
    const {nombre, descripcion, imagen} = req.body
    db.query("INSERT INTO publicaciones (nombre, descripcion, imagen) VALUES (?, ?, ?)", [nombre, descripcion, imagen], (err, result) => {
        if (err) throw err
        res.json({message: "Publicacion agregada exitosamente"})
    })
})

io.on("connection", socket => {
    socket.on("message", body => {
        socket.broadcast.emit("message", {
            body,
            from: socket.id.slice(3)
        })
    })
})

app.listen(3000, console.log("Puerto 3000"))