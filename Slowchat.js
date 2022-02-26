menu.addOption('prep', function() {
    document.getElementById("chat_lower").remove(); 
})

menu.addOption('slowchat', function() {
    inputtext=prompt("input text:");OWOT.chat.send(`${inputtext}`); 
})
