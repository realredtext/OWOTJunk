function FPChat(message) {
    addChat(null, 6955, "user", "fp", message, "fp", true, true, true, "#33f", getDate())
};

client_commands.fpchat = (args) => {
    FPChat(args[0]);
};
