function FPChat(message) {
    addChat(null, Math.round(Math.random() * 9999), "user", "fp", message, "<b>fp</b>", true, true, true, "#0000ff", getDate())
}

menu.addOption("FP Chat",function() {
var fpMsg = prompt("Send:");FPChat(fpMsg)
})
