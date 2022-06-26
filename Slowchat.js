byId("chat_lower").remove();

const chatBtn = document.createElement("button");

chatBtn.innerText = "Chat";
chatBtn.onclick = () => {
    //a prompt is used to make this as slow as possible, this is SLOWchat for a reason
    let msg = prompt("Send:");
    api_chat_send(msg)
};

const upperChat = byId("chat_upper");
upperChat.appendChild(chatBtn);
