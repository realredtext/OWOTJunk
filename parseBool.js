function parseBool(x) {
    let s = x.toLowerCase();
    if(s == "true") {
        return true
    }

    else if(s == "false") {
        return false
    }

    else {
        throw TypeError()
    }
}
