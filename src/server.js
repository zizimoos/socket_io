import express from "express";
import socketIO from "socket.io";
import { join } from "path";
import logger from "morgan";
import socketController from "./socketController";
import events from "./event";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);
const handleListenning = () => {
  console.log(`✅ server connected : http://localhost:${PORT} `);
};
const server = app.listen(PORT, handleListenning);

const io = socketIO(server);

io.on("connection", (socket) => socketController(socket));
