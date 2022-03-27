function addOperator(newOperator) {
    w.on("chatMod", function(e) {
        if(e.realUsername == newOperator) {
            e.op = true
        }
    });
    clientChatResponse(`${newOperator} is now (OP).`)
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
    clientChatResponse(`${user} is no longer (OP).`)
}
menu.addOption("Remove Operator", function() {
    let unOperator = prompt("Who to remove from OP:");
    removeOperator(unOperator)
})
