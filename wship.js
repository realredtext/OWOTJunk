w.on("chatmod", (e) => {
    if(e.message.includes("w.ship")) {
        let shipArray = e.message.split(" ");
        socket.send(JSON.stringify({
    kind: "chat",
    nickname: "w.ship bot",
    message: `${shipArray[1]} x ${shipArray[2]} is ${Math.round(Math.random() * 100)}% likely to be realistic`,
    location: 1,
    color: "#FF0000"
}))
    }
})
