function addManager(name, color, message) {
    name = `[ ${name} ]`;
    if(color.startsWith("#") == false) {
        color = `#${color}`
    }
    addChat(null, 0, "user", name, message, name, false, false, false, color, getDate())
}
