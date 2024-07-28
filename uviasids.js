let uviasIDs = JSON.parse(localStorage.getItem("uvias_ids")) || {};
if(!localStorage.uvias_ids) localStorage.setItem("uvias_ids", "{}");

w.on("cmd", (data) => {
    if(!data.id || !data.username) return;
    if(uviasIDs[data.username]) return;

    uviasIDs[data.username] = data.id;
    localStorage.setItem("uvias_ids", JSON.stringify(uviasIDs));

    clientChatResponse(`Registered ID ${data.id} as user ${data.username}`);
});

setTimeout(network.cmd_opt, 10000); //avoid transmission error

client_commands.uviasids = () => { //TODO: integrate Managers.js
    let string = "";
    for(var i in uviasIDs) {
        string += `${i}: ${uviasIDs[i]}<br>`
    };

    clientChatResponse(string);
};
