selectedChatTab = 0;

w.showChat();

let cs_functions = {
    chat: (data) => {
        var type = chatType(data.registered, data.nickname, data.realUsername);
        w.emit("chat", {
            location: data.location,
            id: data.id,
            type,
            nickname: data.nickname,
            message: data.message,
            realUsername: data.realUsername,
            op: data.op,
            admin: data.admin,
            staff: data.staff,
            date: data.date,
            dataObj: data,
            hide: false
        });
    },

    chathistory: (data) => {
        if(data.error) return;
        
        var global_prev = data.global_chat_prev;
		var page_prev = data.page_chat_prev;
		for(var g = 0; g < global_prev.length; g++) {
			var chat = global_prev[g];
			var type = chatType(chat.registered, chat.nickname, chat.realUsername);
			addChat(chat.location, chat.id, type, chat.nickname,
				chat.message, chat.realUsername, chat.op, chat.admin, chat.staff, chat.color, chat.date, chat);
		}
		for(var p = 0; p < page_prev.length; p++) {
			var chat = page_prev[p];
			var type = chatType(chat.registered, chat.nickname, chat.realUsername);
			addChat(chat.location, chat.id, type, chat.nickname,
				chat.message, chat.realUsername, chat.op, chat.admin, chat.staff, chat.color, chat.date, chat);
		}
    },
    channel: (data) => {
        w.userCount = data.initial_user_count;
        updateUserCount();
    },
    user_count: (data) => {
        let count = data.count;
        w.emit("userCount", count);
        w.userCount = count;
        updateUserCount();
    }
};

let chatSocket = new WebSocket(`wss://ourworldoftext.com/w/${state.worldModel.name}/ws/`);

chatSocket.onopen = () => {
    chatSocket.send(JSON.stringify({
        kind: "chathistory"
    }));
};

chatSocket.onmessage = (msg) => {
    let data = JSON.parse(msg.data);
    let kind = data.kind;
    if(cs_functions[kind]) cs_functions[kind](data);
};

network.chat = (message, location, nickname, color) => {
    chatSocket.send(JSON.stringify({
        kind: "chat",
        nickname,
        message,
        location,
        color
    }))
}

w.on("chat", (e) => {
    w.emit("chatmod", e);
    if(e.hide) return;
    event_on_chat(e)
});

elm.chat_page_tab.onclick = function() {
    selectedChatTab = 0;
};
