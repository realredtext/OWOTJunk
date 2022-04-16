document.getElementById("chat_lower").remove()
menu.addOption("Chat", () => {
    let x = prompt("Send:");
    w.chat.send(x) 
})
