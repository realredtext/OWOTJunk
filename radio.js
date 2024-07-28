let tunedChannel = "100"; //channel you send AND receive from, big risk to separate the 2
let messageName = `[${tunedChannel}]`;

//TODO: integrate Managers.js
client_commands.tune = ([setting]) => { 
    if(typeof parseFloat(setting) == typeof 1) {
        tunedChannel = setting;
        messageName = `[${tunedChannel}]`;
        addChat(null, 0, "user", "[Radio]", `Tuned to ${setting}`, "e", 0,0,0, "#DD0000", getDate());
    } else {
        addChat(null, 0, "user", "[Radio]", "Invalid tuning setting!", "e", 0,0,0, "#DD0000", getDate());
    };
};

network.cmd_opt();
w.on("cmd", (e) => {
    if(JSON.parse(e.data)) {
        let msg = JSON.parse(e.data); //message, frequency
        if(tunedChannel === msg.frequency) {
            addChat(null, 0, "user", messageName, msg.message, "e", 0,0,0, "#DD0000", getDate());
        };
    }
});

client_commands.bc = (args) => {
    let message = args.join(" ");
    const identification = state.userModel.username||("["+w.clientId+"]");
    message = identification+": "+message;
    w.broadcastCommand(JSON.stringify({
        message,
        frequency: tunedChannel
    }), false);
    addChat(null, 0, "user", messageName, `Sent ${message} to ${tunedChannel}`, "e", 0,0,0, "#DD0000", getDate());
};
