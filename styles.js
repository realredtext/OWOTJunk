unobstructCursor = true;
menu._SPEED = 500;
defaultCoordLinkColor = "#DD0000";
chatGreenText = false;
const chatTab = document.getElementById("chat_open");
chatTab.style.backgroundColor = "#880000";
chatTab.onmouseover = () => {
    chatTab.style.backgroundColor = "#AA0000";
};

chatTab.onmouseleave = () => {
    chatTab.style.backgroundColor = "#880000"
};

const closeChatBtn = byId("chat_close");
closeChatBtn.onmouseover = () => {
    closeChatBtn.style.backgroundColor = "#FF6666";
};

closeChatBtn.onmouseleave = () => {
    closeChatBtn.style.backgroundColor = "#FF0000";
};
