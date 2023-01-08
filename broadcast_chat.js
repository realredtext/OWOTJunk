network.cmd_opt();
let cmdChatColor = "#FF0000";

w.on("cmd", (e) => {
    if(!e.data.startsWith("nametag;pos;")) {
        const msgData = JSON.parse(e.data); //name, message, color
        console.log(`%c${msgData.name}:`,
                    `color:${msgData.color};font-weight:bold;`,
                    msgData.message
                   );
    };
});

/*naming scheme:
    can chat:
        authenticated: username
        unauthenticated: chat ID
    cant chat:
        authenticated: username
        unauthenticated: socket channel
*/

let broadcastChat = (msg) => {
    msg += "";
    let cmdName = `${canChat?(state.userModel.authenticated?state.userModel.username:"["+w.clientId+"]"):(state.userModel.authenticated?state.userModel.username:w.socketChannel)}`
    w.broadcastCommand(JSON.stringify({
        color: cmdChatColor,
        name: cmdName,
        message: msg
    }));
};
