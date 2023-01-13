function Manager(color, name) {
    if(!name) return;
    if(!color) color = "#000000";
    this.name = `[ ${name} ]`;
    this.color = color;

    this.send(message, op=true) {
        addChat(null, 0, "user", this.name, message, this.name.replace(/[\[\]]/gm, ""), op, false, false, this.color, getDate())
    };
};
