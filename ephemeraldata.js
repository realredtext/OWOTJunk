function EphemeralDataRegistry(defaults /*object*/) {
    let top = this;
    this.defaults = defaults;
    this.data = defaults;

    this.setValue = function(key, value) {
        if(key in top.data) {
            delete top.data[key];
            top.data[key] = value; //blank obj/array
            return true;
        }
        return false;
    };

    this.resetValue = function(key) {
        if(key in top.data) {
            delete top.data[key];
            top.data[key] = top.defaults[key];
            return true;
        };
        return false;
    };

    this.resetAll = function() {
        for(var key in top.defaults) {
            delete top.data[key];
            top.data[key] = top.defaults[key];
        }
        return true;
    };

    return this;
}

return {
    EphemeralDataRegistry
}
