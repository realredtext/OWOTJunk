let aud = new Audio("https://cdn.discordapp.com/attachments/437380766444552202/962882758458376232/Random_Beep_Noise.....mp3")
let rareUsers = ["fp", "InfraRaven"]
let rareNicks = ["ay", "domo"]
w.on("chatmod", (e) => {
    if(rareUsers.includes(e.realUsername) || rareNicks.includes(e.nickname)) {
        aud.play()
    }
})
