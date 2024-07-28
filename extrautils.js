//not all related to owot
function IntRange(min, max) {
    if(min > max) throw new RangeError("Minimun is greater than maximum!");
    
    let list = [];
    
    for(let i = min; i <= max; i++) {
        list.push(i);
    };

    return list;
};

function average(...members) {
    return (members.reduce((a, b) => a+b)/members.length);
};

const onmouseswipe = (elmnt, mouseover, mouseleave) => {
    elmnt.onmouseover = mouseover;
    elmnt.onmouseleave = mouseleave;
};
