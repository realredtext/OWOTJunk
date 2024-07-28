//all done by FP, with no assistance or suggestions from me
keyConfig.cursorUp = "";
keyConfig.cursorDown = "";
keyConfig.cursorLeft = "";
keyConfig.cursorRight = "";
var backpressureX = 0;
var backpressureY = 0;
var velocityX = 0;
var velocityY = 0;
var keyLeft = false;
var keyRight = false;
var keyUp = false;
document.addEventListener("keydown", function(e) {
    if(checkKeyPress(e, "UP")) {
        keyUp = true;
    }
    if(checkKeyPress(e, "LEFT")) {
        keyLeft = true;
    }
    if(checkKeyPress(e, "RIGHT")) {
        keyRight = true;
    }
});
document.addEventListener("keyup", function(e) {
    if(checkKeyPress(e, "UP")) {
        keyUp = false;
    }
    if(checkKeyPress(e, "LEFT")) {
        keyLeft = false;
    }
    if(checkKeyPress(e, "RIGHT")) {
        keyRight = false;
    }
});
function tick() {
    backpressureY += velocityY + 0.7;
    velocityY /= 1.2;
    backpressureX += velocityX;
    velocityX /= 1.2;
    if(keyLeft) velocityX -= 2;
    if(keyRight) velocityX += 2;
    if(keyUp) {
        moveCursor("down");
        var char = getChar();
        moveCursor("up");
        if(char != " ") {
            velocityY -= 3;
        }
    }
    if(!keyLeft && !keyRight && Math.abs(velocityX) > 0.5) velocityX = 0;

    if(backpressureY >= 1) {
        backpressureY %= 1;
        moveCursor("down");
        if(getChar() != " ") {
            moveCursor("up");
            velocityY = 0;
        }
    } else if(backpressureY <= -1) {
        backpressureY %= 1;
        moveCursor("up");
        if(getChar() != " ") {
            moveCursor("down");
            velocityY = 0;
        }
    }
    if(backpressureX >= 1) {
        backpressureX %= 1;
        moveCursor("right");
        if(getChar() != " ") {
            velocityX = 0;
            moveCursor("left");
        }
    } else if(backpressureX <= -1) {
        backpressureX %= 1;
        moveCursor("left");
        if(getChar() != " ") {
            velocityX = 0;
            moveCursor("right");
        }
    }
}
setInterval(tick, 1000 / 30);
