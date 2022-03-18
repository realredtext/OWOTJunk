var music1 = new Audio("https://cdn.discordapp.com/attachments/373803780505862147/942639235389861938/Marshi_I_UCK_Albanian_War_Song.mp3");
w.on("chatmod", function(e) {

    if(e.message.includes("!PM1")) {music1.play()}

});

w.on("chatmod", function(e) {

    if(e.message.includes("!SM1")) {music1.pause()}

});
var music2 = new Audio("https://cdn.discordapp.com/attachments/373803780505862147/942643886692659210/The_Heroes_of_Kosovo_UCK_Song.mp3");
w.on("chatmod", function(e) {

    if(e.message.includes("!PM2")) {music2.play()}

});

w.on("chatmod", function(e) {

    if(e.message.includes("!SM2")) {music2.pause()}

});
var music3 = new Audio("https://cdn.discordapp.com/attachments/373803780505862147/942881395955625984/My_Dad_is_a_War_Criminal.mp3");
w.on("chatmod", function(e) {

    if(e.message.includes("!PM3")) {music3.play()}

});

w.on("chatmod", function(e) {

    if(e.message.includes("!SM3")) {music3.pause()}

});
