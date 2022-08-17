let messageSniffers = [];

class wsMessageSniffer {
    constructor(type, cb) {
        this.msgType = type;
        this.msgCallback = cb;
        messageSniffers.push(this);
    };
};

socket.onmessage = (msg) => {
    var data = JSON.parse(msg.data);
    var kind = data.kind;
    messageSniffers.forEach((sniffer) => {
        if(kind == sniffer.msgType) sniffer.msgCallback(data);
    });
    if(ws_functions[kind]) {
        ws_functions[kind](data);
    };
};
