import express from "express"
import socketIO from "socket.io"
import { join } from "path"
import logger from "morgan"

const PORT = 4000
const app = express()
app.set("view engine", "pug")
app.set("views", join(__dirname,"views"))
app.use(logger("dev"))
app.use(express.static(join(__dirname,"static")))
app.get("/", (req,res) => res.render("home"))
const handleListenning = () => {
    console.log(`✅ server connected : http://localhost:${PORT} `)
}
const server = app.listen(PORT, handleListenning)

const io = socketIO(server)
let sockets=[]
io.on("connection", (socket)=> {
    // socket.broadcast.emit("hello")
    socket.on("hello Guys", () => console.log("the client said hello"))
})