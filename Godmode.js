menu.addCheckboxOption("God Mode", function() {
    w.on("chatMod", function(e) {
        if(e.nickname == YourWorld.Nickname) {
            e.op = true;
            e.admin = true;
            e.staff = true
        }
    })
    state.userModel.is_member = true;
    state.userModel.is_operator = true;
    state.userModel.is_owner = true;
    state.userModel.is_staff = true;
    state.userModel.is_superuser = true;
    state.worldModel.show_cursor = 0;
}, function() {
    w.on("chatMod", function(e) {
        if(e.nickname == YourWorld.Nickname) {
            e.op = false;
            e.admin = false;
            e.staff = false
        }
    })
    state.userModel.is_member = false;
    state.userModel.is_operator = false;
    state.userModel.is_owner = false;
    state.userModel.is_staff = false;
    state.userModel.is_superuser = false;
    state.worldModel.show_cursor = -1;
}, false)
