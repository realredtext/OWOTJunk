class Manager {
    constructor(color, name) {
        if(!name) return;
        if(!color) color = "#000000";
        this.name = `[ ${name} ]`;
        this.color = color;
    };

    name = this.name;
    color = this.color;

    send(message, op) {
        addChat(null, 0, "user", this.name, message, this.name.replace(/[\[\]]/gm, ""), op, false, false, this.color, getDate())
    };
};
