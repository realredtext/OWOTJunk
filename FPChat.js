function FPChat(message) {
    addChat(null, 6955, "user", "fp", message, "<b>fp</b>", true, true, true, "#0000ff", getDate())
}

menu.addOption("FP Chat", () => {
    var fpMsg = prompt("Send:");
    FPChat(fpMsg)
})
