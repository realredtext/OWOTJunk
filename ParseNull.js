//for fp
function parseNull(x) {
    let s = x.toLowerCase();
    if(s == "null") {
        return null
    } else {
        throw TypeError()
    }
}
