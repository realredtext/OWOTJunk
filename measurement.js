function measurementOut(text) {
	addChat(null, 0, "user", "[ Measurer ]", text, "Measurer", true, true, true, "#FFFF00", getDate());
};

/* Measurement structure:
	Coordinates:
		X: x length,
		Y: y length
	Tiles:
		X: x length,
		Y: y length
	Chars:
		X: x length,
		Y: y length
*/

/* Conversions:
	1 Y coordinate right = 4 tiles up = 32 chars up
	1 X coordinate right = 4 tiles right = 64 chars right
*/

var tileMeasurer = new RegionSelection();
tileMeasurer.charColor = "#FFFF00";
tileMeasurer.color = "rgba(128, 128, 0, 0.1)";
tileMeasurer.tiled = true;
tileMeasurer.init();

tileMeasurer.onselection(function(coordA, coordB, regWidth, regHeight) {
    var minTileX = coordA[0];
    var minTileY = coordA[1];
    var maxTileX = coordB[0];
    var maxTileY = coordB[1];
	var measuredXTiles = (maxTileX - minTileX) + 1;
	var measuredYTiles = (maxTileY - minTileY) + 1;
	var measuredXChars = measuredXTiles * 16;
	var measuredYChars = measuredYTiles * 8;
	var measuredXCoords = measuredXTiles / 4;
	var measuredYCoords = measuredYTiles / 4;
	measurementOut(`Coordinates:<br>&#9;X: ${measuredXCoords},<br>&#9;Y: ${measuredYCoords}<br>Tiles:<br>&#9;X: ${measuredXTiles},<br>&#9;Y: ${measuredYTiles}<br>Chars:<br>&#9;X: ${measuredXChars},<br>&#9;Y: ${measuredYChars}`)
});

var charMeasurer = new RegionSelection();
charMeasurer.charColor = "#00FFFF";
charMeasurer.color = "rgba(0, 128, 128, 0.1)";
charMeasurer.init();

charMeasurer.onselection(function(coordA, coordB, regWidth, regHeight) {
	var measuredXTiles = regWidth / 16;
	var measuredYTiles = regHeight / 8;
	measurementOut(`Chars:<br>&#9;X: ${regWidth},<br>&#9;Y: ${regHeight}<br>Tiles:<br>&#9;X: ${measuredXTiles},<br>&#9;Y: ${measuredYTiles}`);
});

var measurementSubcommands = {
	"help": () => {
		measurementOut("Use the \"tile\" or \"char\" subcommands to measure");
	},
	"tile": () => {
		measurementOut("Tile measurement started");
		tileMeasurer.startSelection();
	},
	"char": () => {
		measurementOut("Character measurement started");
		charMeasurer.startSelection();
	}
}

client_commands.measure = ([subcommand]) => {
	if(!subcommand) {
		measurementOut("No subcommand, use /measure help");
		return;
	};

	if(!measurementSubcommands[subcommand]) {
		measurementOut("Invalid subcommand");
		return;
	};

	measurementSubcommands[subcommand]();
};
