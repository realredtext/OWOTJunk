function parseBool(str) {
    str+="";
    str = str.toLowerCase();
    
    if(!(str in {"true": 1, "false": 0})) return; //string validation (only "true" and "false" remain)
    
    return str === "true";
}
