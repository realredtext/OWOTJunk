let uviasIDs = localStorage.getItem("uvias_ids") || {}; //uvias ids dont mean shit, dont abuse their reporting, theyre not dumb

w.on("cmd", (data) => {
    if(!data.id || !data.username) return;
    if(uviasIDs[data.username]) return;

    uviasIDs[data.username] = data.id;
    localStorage.setItem("uvias_ids", JSON.stringify(uviasIDs));

    clientChatResponse(`Registered ID ${data.id} as user ${data.username}`);
});

network.cmd_opt();

client_commands.uviasids = () => {
    let string = "";
    for(var i in uviasIDs) {
        string += `${i}: ${i.id}<br>`
    };

    clientChatResponse(string);
};
