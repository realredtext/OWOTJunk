let addedRanks = {
    /*someUsername: {
        content: "EEEEEEE",
        color: "#ff00ff"
    }
    */
};

client_commands.addrank = ([username, color, ...content]) => { //TODO: integrate Managers.js
    if(!username || !color) {
        return addChat(null, 0, "user", "[ Rank Manager ]", "No username/color given", "Rank Manager",0,0,0, "#DDDD00", Date.now());
    }
    addedRanks[username] = {
        color: color,
        content: content.join(" ")
    };
    addChat(null, 0, "user", "[ Rank Manager ]", `Rank Added: ${username}: ${color} ${content.join(" ")}`, "[ Rank Manager ]", false, false, false, "#DDDD00", getDate())
};

w.on("chatmod", (e) => {
    if(addedRanks[e.realUsername]) {
        e.dataObj.rankName = addedRanks[e.realUsername].content;
        e.dataObj.rankColor = addedRanks[e.realUsername].color;
    }
})