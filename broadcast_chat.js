network.cmd_opt();
let cmdColor = "#"+(1*localStorage.chatcolor).toString(16);

//copies below, cant be modified after running
const username = state.userModel.username;
const id = w.clientId.toString(10);
const authenticated = state.userModel.authenticated;
const socketChannel = w.socketChannel;

w.on("cmd", (e) => {
    if(e.data.startsWith("cmdc")) {
        const msgData = JSON.parse(e.data.substring(4)); //name, message, color
        console.log(`%c${msgData.name}:`,
                    `color:${msgData.color};font-weight:bold;text-decoration:underline;`,
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

const broadcastChat = (msg) => {
    msg += "";
    let cmdName = `${canChat?(authenticated?username:"["+id+"]"):(authenticated?username:socketChannel)}`
    w.broadcastCommand("cmdc"+JSON.stringify({
        color: cmdColor,
        name: cmdName,
        message: msg
    }));
};
