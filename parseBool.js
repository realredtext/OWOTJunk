function parseBool(str) {
    str+="";
    str = str.toLowerCase();
    
    if(!(str in {"true":1,"false": 0})) return;
    
    return str === "true";
};
