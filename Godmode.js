menu.addCheckboxOption("God Mode", () => {
    w.on("chatmod", (e) => {
        if(e.realUsername == state.userModel.username) {
            e.op = true;
            e.admin = true;
            e.staff = true;
            e.dataObj.rankColor = "#0033CC";
            e.dataObj.rankName = "OP";
        };
    });
    for(const i of Object.keys(state.userModel)) {
        if(typeof state.userModel[i] === "boolean") {
            state.userModel[i] = true;
        };
    ;}
}, () => {
    w.on("chatmod", (e) => {
        if(e.realUsername == state.userModel.username) {
            e.op = false;
            e.admin = false;
            e.staff = false;
            e.dataObj.rankColor = "";
            e.dataObj.rankName = ""
        }
    })
    for(const i of Object.keys(state.userModel)) {
        if(typeof state.userModel[i] === "boolean" && i !== "authenticated") {
            state.userModel[i] = false;
        };
    };
}, false);
