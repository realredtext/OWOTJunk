function measurementOut(text) {
	addChat(null, 0, "user", "[ Measurer ]", text, "Measurer", true, true, true, "#000000", getDate());
};

/* Measurement structure:
	Coordinates:
		X: x length,
		Y: y length,
        x*y coords²
	Tiles:
		X: x length,
		Y: y length,
        x*y tiles²
	Chars:
		X: x length,
		Y: y length,
        x*y chars²
*/

/* Conversions:
	1 Y coordinate up = 4 tiles up = 32 chars up
	1 X coordinate right = 4 tiles right = 64 chars right
    1 coord² = 16 tiles² = 2048 chars²
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
    var measuredCoordArea = measuredXCoords * measuredYCoords;
	measurementOut(`<br>Coordinates:<br>X: ${measuredXCoords},<br>Y: ${measuredYCoords}<br>Area: ${measuredCoordArea} coords²<br>Tiles:<br>X: ${measuredXTiles},<br>Y: ${measuredYTiles}<br>Area: ${measuredCoordArea*16} tiles²<br>Chars:<br>X: ${measuredXChars},<br>Y: ${measuredYChars}<br>Area: ${measuredCoordArea*16*128} chars²`)
});

var charMeasurer = new RegionSelection();
charMeasurer.charColor = "#00FFFF";
charMeasurer.color = "rgba(0, 128, 128, 0.1)";
charMeasurer.init();

charMeasurer.onselection(function(coordA, coordB, regWidth, regHeight) {
	var measuredXTiles = regWidth / 16;
	var measuredYTiles = regHeight / 8;
    var measuredTileArea = measuredXTiles * measuredYTiles;
	measurementOut(`<br>Chars:<br>X: ${regWidth},<br>Y: ${regHeight}<br>Area: ${measuredTileArea*128} chars²<br>Tiles:<br>X: ${measuredXTiles},<br>Y: ${measuredYTiles}<br>Area: ${measuredTileArea} tiles²`);
});

var measurementSubcommands = { //TODO: integrate Managers.js
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
