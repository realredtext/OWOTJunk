//dev console tool to chat for worlds without a chat
w.broadcastReceive(1);
w.on("cmd", (e) => {
    console.log(e.data);
});

let broadcastChat = (msg) => {
    msg += "";
    let chatString = `${state.userModel.authenticated?state.userModel.username:(canChat?w.clientId:w.socketChannel)}: ${msg}`;
    w.broadcastCommand(chatString);
};
