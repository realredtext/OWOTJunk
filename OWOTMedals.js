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

/* BADGES:
☆: Founder (redtext),
A: Administrator (admins),
B: (not used),
C: Crawler (visits many worlds),
D: (not used),
E: Eraser (clears the filth),
F: Fighter ([SHH]),
G: Greatest (isnt annoying),
H: Hoarder (collects worlds),
I: Independent (does not talk to others),
J: (not used),
K: (not used),
L: Longtimer (since 2017),
M: Member,
N: Non-user (frequently inactive),
O: Occasional (is not always the badge after it),
P: Profanity master,
Q: (not used),
R: Red (has chatcolor of #ff0000),
S: Scripter,
T: Trollboxer,
U: Unverified (badge next to it is not fact),
V: (not used),
W: (not used),
X: (not used),
Y: (not used),
Z: (not used)
*/

var ranks = {
    "realredtext-": ["☆CEFRST", "#dd0000"],
    "_Pippin_": ["FLT", "#cccccc"],
    "ChromicQuanta": ["NORS", "#0000ff"],
    "helloyanis": ["NLS", "#d300ea"],
    "yagton": ["FNS", "#d300ea"],
    "theawesomepikachu20": ["FM", "#008000"],
    "cv": ["CS", "#FFA200"]
};

function addRank(user, color, content) {
    ranks[user] = [content, color];
}

w.on("chatmod", (e) => {
    if (typeof ranks[e.realUsername] !== "undefined") {
        [e.dataObj.rankName, e.dataObj.rankColor] = ranks[e.realUsername];
    }
});
