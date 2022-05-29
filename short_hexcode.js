function int_to_short_hexcode(val) {
    return `#${val.toString(16).padStart(3, 0)}`
}
