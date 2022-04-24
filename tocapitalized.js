function toCapitalized(str) {
    let strToArray = str.split("");
    strToArray[0] = strToArray[0].toUpperCase();
    let capitalizedStr = (strToArray.toString()).replaceAll(",", "");
    return capitalizedStr
}
