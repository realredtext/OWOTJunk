var isOperator = false;

w.on("chatmod", (e) => {
    if(isOperator && (w.clientId === e.id)) {
        [e.op, e.admin, e.staff] = [1,1,1];
    }
});

menu.addCheckboxOption("Bypass Mode", () => {
    isOperator = true;
    for(var i in state.userModel) {
        if(typeof state.userModel[i] == "boolean") state.userModel[i] = !0;
    };
}, () => {
    isOperator = false;
    for(var i in state.userModel) {
        if(typeof state.userModel[i] == "boolean") state.userModel[i] = !1;
    };
    state.userModel.authenticated = !!state.userModel.username;
}, false);
