import express from "express"
import socketIO from "socket.io"
import { join } from "path"
import logger from "morgan"


const app = express()
app.set("view engine", "pug")
app.set("views", join(__dirname,"views"))
app.use(express.static(join(__dirname,"static")))
app.use(logger("dev"))
app.get("/", (req,res) => res.render("home"))
const server = app.listen(4000, () => console.log(`✅ server connected : http://localhost:4000 `))

const io = socketIO(server)

let sockets = []
io.on("connection", (socket)=> {
    sockets.push(socket.id)
})
console.log(sockets)