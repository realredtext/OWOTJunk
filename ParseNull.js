let parseNull = (str) => {
    str+="";
    str = str.toUpperCase();
    
    if(! str in {"null": null}) return;
    
    return null;
 };
