let int_to_short_hexcode = (val) => {
    val = val % 4096; //#1000 made impossible
    return `#${val.toString(16).padStart(3, 0)}`
}
