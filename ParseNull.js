let parseNull = (str) => {
    str+="";
    str = str.toUpperCase();
    
    if(! str in {"null": null}) throw new TypeError();
    
    return null;
 };
