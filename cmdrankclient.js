network.cmd_opt();

let localRanks = {};

w.on("cmd", (data) => {
	if(!data.data.startsWith("Update_")) return;
	let msg = JSON.parse(data.data.slice(7));
	console.log(msg);

	if(Array.isArray(msg)) {
		localRanks[msg[0]] = [msg[1], msg[2]];
	} else {
		localRanks = msg; //whole-object transmission
	}
	
});

w.on("chatmod", (e) => {
	if(Object.keys(localRanks).includes(e.realUsername)) {
		[e.dataObj.rankName, e.dataObj.rankColor] = localRanks[e.realUsername];
	};
});
