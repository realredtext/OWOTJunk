w.on("chatMod", function(e) {
    if(e.message.includes("FP,")) {
        let x = Math.round(Math.random() * 100)

        if(x<50) {
            x = 0
        }

        else {
            x = 1
        }

        if(x == 1) {
            OWOT.chat.send(":fplikeaaa:")
        }

        else {
            OWOT.chat.send(":fpdislikeaaa:")
        }
    }
})
