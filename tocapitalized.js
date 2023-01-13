String.prototype.toCapitalized = function() {
    if(this[0].toUpperCase() === this[0]) return;
    return this.replace(this[0], this[0].toUpperCase());
};
