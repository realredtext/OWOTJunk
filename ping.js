let pingTone = new Audio("https://upload.wikimedia.org/wikipedia/commons/transcoded/5/58/Zip_tone.ogg/Zip_tone.ogg.mp3");

w.on("chatmod", (e) => {
    if(e.message.includes(`(@${state.userModel.username})`)) {
        pingTone.time = 0;
        pingTone.play();
    };
});
