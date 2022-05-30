client_commands.addrank = (args) => {
    w.on("chatmod", (e) => {
        if(e.realUsername == args[0]) {
            e.dataObj.rankName = args[1];
            e.dataObj.rankColor = args[2]
        }
    });
    addChat(null, 0, "user", "[ Rank Manager ]", `Rank Added: ${args[0]}: ${args[1]} ${args[2]}`, "[ Rank Manager ]", false, false, false, "#DDDD00", getDate())
}
