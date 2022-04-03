//credit goes to FP for the chat command part

client_commands.addop = function(args) {
    w.on("chatmod", (e) => {
        if(e.realUsername == args[0]) {
            e.op = true;
        }
    });
    addChat(null, 0, "user", "[ (OP) Manager ]", `${args[0]} is now (OP)`, "[ (OP) Manager ]", false, false, false, "#0033CC", getDate())
}

client_commands.removeop = function(args) {
    w.on("chatmod", (e) => {
        if(e.realUsername == args[0]) {
            e.op = false;
        }
    });
    addChat(null, 0, "user", "[ (OP) Manager ]", `${args[0]} is no longer (OP)`, "[ (OP) Manager ]", false, false, false, "#0033CC", getDate())
}
