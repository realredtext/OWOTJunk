    function Manager(color, name) {
    if(!name) return;
    if(!color) color = "#000000";
    this.name = `[ ${name} ]`;
    this.color = color;

    this.send = function(message) {
        addChat(null, 0, "user", this.name, message, this.name.replace(/[\[\]]/gm, ""), false, false, false, this.color, getDate())
    };
    
    return this;
};

function ManagerCommandWrapper(name, color, functions, keyPhrase) {
    let top = this;

    this.name = name || "Manager";
    this.color = color || "#000000";
    this.keyPhrase = keyPhrase.toLowerCase() || name.toLowerCase();
    this.functions = {
        ...functions,
        help: function() {
            return top.core.send(`Available subcommands: ${Object.keys(top.functions).join(", ")}`);
        }
    };

    this.core = new Manager(this.color, this.name);

    client_commands[keyPhrase] = function([subcommand, ...params]) { //TODO: integrate with register_chat_command
        if(!subcommand && !params.length) subcommand = "default";
        subcommand = subcommand.toLowerCase();
        if(!subcommand || !(subcommand in top.functions)) {
            return top.core.send(`Invalid subcommand "${subcommand||''}", refer to /${top.keyPhrase} help`);
        } else if(subcommand === "help") {
            return top.functions.help();
        } else {
            return top.core.send(top.functions[subcommand](...params));
        }
    };
};

return {
    ManagerCommandWrapper,
    Manager
}
