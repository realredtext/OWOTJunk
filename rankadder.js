client_commands.addrank = (args) => {
    w.on("chatmod", (e) => {
        if(e.realUsername == args[0]) {
            e.dataObj.rankName = args[1];
            e.dataObj.rankColor = args[2]
        }
    })
}
