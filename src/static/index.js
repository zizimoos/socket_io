// eslint-disable-next-line no-undef
const socket = io("/");

function setNickname(nickname){
    socket.emit("setNickname", {nickname:nickname})
}

function sendMessage(message){
    socket.emit("newMessage",{
        message:message
    })
    console.log(`you :${message}`)
}


socket.on("messageNotif", ({message, nickname})=> console.log(`${nickname} say : ${message}`))