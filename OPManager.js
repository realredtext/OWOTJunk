function addOperator(newOperator) {
    w.on("chatMod", function(e) {
        if(e.realUsername == newOperator) {
            e.op = true
        }
    });
    addChat(null, 0, "user", "[ OP Manager ]", `${newOperator} is now (OP).`, "[ OP Manager ]", false, false, false, "#0033CC", getDate())
}
menu.addOption("Add Operator", function() {
    let operator = prompt("Who to add as OP:");
    addOperator(operator)
})

function removeOperator(user) {
    w.on("chatMod", function(e) {
        if(e.realUsername == user) {
            e.op = false
        }
    })
    addChat(null, 0, "user", "[ OP ]", `${user} is now (OP).`, "[ OP Manager ]", false, false, false, "#0033CC", getDate())
}
menu.addOption("Remove Operator", function() {
    let unOperator = prompt("Who to remove from OP:");
    removeOperator(unOperator)
})
