//the tag book is best used with tampermonkey installed
function addRank(user, color, content) {
OWOT.on("chatMod",function(evt) {
if(evt.realUsername.includes(user)) {
evt.dataObj.rankColor=color;evt.dataObj.rankName=content
}
});

};

menu.addOption("Add Rank",function() {
var rankUser = prompt("Who to rank:")
var rankColor = prompt("Color")
var rankContent = prompt("Rank Content")
addRank(rankUser, rankColor, rankContent)
alert(`Add to Tag Book: "${rankUser}": ["${rankContent}", "${rankColor}"]`)
})

//the tag book

var ranks = {
    "realredtext-": ["-_-", "#dd0000"],
    "_Pippin_": ["Town Retard", "#cccccc"],
    "ChromicQuanta": [":D", "#0000ff"],
    "helloyanis": ["Scripter++", "#d300ea"],
    "yagton": ["Scripter++", "#d300ea"]
};

function addRank(user, color, content) {
    ranks[user] = [content, color];
}

w.on("chatmod", (e) => {
    if (typeof ranks[e.realUsername] !== "undefined") {
        [e.dataObj.rankName, e.dataObj.rankColor] = ranks[e.realUsername];
    }
});
