w.on("chatmod", (e) => {
    if(e.message.startsWith("w.ship") && !e.hide) {
        let shipArray = e.message.split(" ").splice(1);
        socket.send(JSON.stringify({
            kind: "chat",
            nickname: "w.ship bot",
            message: `${shipArray.join(" x ")} is ${Math.round(Math.random() * 100)}% likely to work`,
            location: 1,
            color: "#FF0000"
        }));
    };
});
