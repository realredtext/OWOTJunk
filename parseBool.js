function parseBool(str) {
    let lc = str.toLowerCase();
    switch (lc) {
        case "true":
            return true;
            break;
        case "false":
            return false;
            break;
        default:
            throw TypeError()
    }
}
