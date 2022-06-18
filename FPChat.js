function FPChat(message) {
    addChat(null, 6955, "user", "fp", message, "<b>fp</b>", true, true, true, "#0000ff", getDate())
}

client_commands.fpchat = (args) => {
    FPChat(args[0])
}
