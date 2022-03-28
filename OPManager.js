function addOperator(newOperator) {
    w.on("chatMod", function(e) {
        if(e.realUsername == newOperator) {
            e.op = true
        }
    });
    addChat(null, 0, "user", "[ Operator Manager ]", `${newOperator} is now (OP).`, "[ Operator Manager ]", false, false, false, "#0033CC", getDate())
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
    addChat(null, 0, "user", "[ Operator Manager ]", `${user} is now (OP).`, "[ Operator Manager ]", false, false, false, "#0033CC", getDate())
}
menu.addOption("Remove Operator", function() {
    let unOperator = prompt("Who to remove from OP:");
    removeOperator(unOperator)
})
