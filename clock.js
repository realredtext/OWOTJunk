function getReadableDate() {
    let initialDate = Date().slice(0, 24).split(" ");
    let time = initialDate[4].split(":");

    const dayList = {
        "Mon": "day",
        "Tue": "sday",
        "Wed": "nesday",
        "Thu": "rsday",
        "Fri": "day",
        "Sat": "urday",
        "Sun": "day"
    };
    const monthList = {
        "Jan": "uary",
        "Feb": "ruary",
        "Mar": "ch",
        "Apr": "il",
        "Jun": "e",
        "Jul": "y",
        "Aug": "ust",
        "Sep": "tember",
        "Oct": "ober",
        "Nov": "ember",
        "Dec": "ember"
    };
    initialDate[0] += dayList[initialDate[0]]+",";
    if(initialDate[1] !== "May") initialDate[1] += monthList[initialDate[1]];
    
    time[0] = +time[0];
    if(time[0] > 12) {
        time[0] -= 12;
        time[2] += " PM";
    } else {
        time[2] += " AM";
    };

    time[0] += "";
    time = time.join(":")
    initialDate[4] = time;

    return initialDate.join(" ");
};

setInterval(()=>{w.doAnnounce(getReadableDate())},1000);
