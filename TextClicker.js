alert("This game is menu-based and will close if you do not pin the menu, pin the menu by clicking the menu button")
let Chars = 0
let Price = 100
let Price2 = 500
menu.addOption("Type a character", function() {
    ++Chars; w.doAnnounce(`${Chars} Chars Typed`)
})

menu.addOption("Keyboard Monkey", function() {
    if (Chars<Price) {
        alert(`Not enough text! (${Price} chars required)`)
    }

    else {
    Chars = Chars - Price; Price = Price+(Math.round(Price/17));
    Math.round(Chars); Math.round(Price);
    w.doAnnounce(`${Chars} Chars Typed`);
    setInterval(() => {++Chars; w.doAnnounce(`${Chars} Chars Typed`)},500)
    }
})

menu.addOption("Extra Board", function() {
    if (Chars<Price2) {
        alert(`Not enough text! (${Price2} chars required)`)
    }

    else {
        Chars = Chars - Price2;
        Price2 = Price2+(Math.round(Price/17));
        Math.round(Chars); Math.round(Price2);
        w.doAnnounce(`${Chars} Chars typed`);
        setInterval(() => {++Chars; ++Chars; w.doAnnounce(`${Chars} Chars Typed`)},300)
    }
})
