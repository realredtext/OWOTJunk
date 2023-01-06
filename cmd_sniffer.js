network.cmd_opt();
w.on("cmd", (e) => {
    if(e.sender !== w.socketChannel) console.table({
        ...e,
        time: Date().slice(0, 24)
    });
});
