let writeString = (string, MoveCursor) => {
    var i;
    for (i = 0; i < string.length; i++) { 
          var lastChar = string.charAt(i);
          writeChar(lastChar);
    }

    for (i = 0; i < string.length; i++) { 
    if (MoveCursor == false) { moveCursor("left"); }
    }
}
//not by me, no clue who made it
