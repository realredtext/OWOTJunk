//basically a beefed up version of chatlogger
let chatList = {
    page: {},
    global: {}
};
let chatIndex = {
    page: 1,
    global: 1,
};

w.on("chatmod", (e) => {
    if(!e.hide) {
        chatList[e.location][`msg_${chatIndex[e.location]}`] = e;
        chatIndex[e.location]++;
    };
});
