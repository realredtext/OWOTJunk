let addManager = (nick, color, message) => {
    nick = `[ ${nick} ]`;
    if(color.startsWith("#") == false) {
        color = `#${color}`
    };
    addChat(null, 0, "user", nick, message, nick, false, false, false, color, getDate())
}
