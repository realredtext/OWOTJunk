client_commands.promote = (args) => {
    // /promote (user) (rank)
    let validRanks = {
        "staff": "staff",
        "admin": "admin",
        "op": "op"
    };

    let rankTags = {
        "staff": {rankName: "M", rankColor: "#009933"},
        "admin": {rankName: "A", rankColor: "#FF0000"},
        "op": {rankName: "OP", rankColor: "#0033CC"}
    }
    if(! args[1] in validRanks) {
        clientChatResponse(`${args[1]} is not a valid type!`)
    };
    w.on("chatmod", (e) => {
        if(e.realUsername === args[0]) {
            e[validRanks[args[1]]] = true;
            e.dataObj = rankTags[validRanks[args[1]]]
        }
    });
    clientChatResponse(`${args[0]} promoted to ${args[1]}`)
};

client_commands.demote = (args) => {
    w.on("chatmod", (e) => {
        if(e.realUsername === args[0]) {
            e.staff = false;
            e.admin = false;
            e.op = false
        }
    });
    clientChatResponse(`${args[0]} demoted to normal user`)
}
