const Random = {
    Integer: function(rangeMin, rangeMax) {
        let x = Math.round(Math.random() * rangeMax);
        if(x < rangeMin) {
            x = (Math.round(Math.random() * rangeMax)) + rangeMin;
        return x;
        }

        else {
        return x;
        }
    },
    Float: function(rangeMin, rangeMax) {
        let x = Math.random() * rangeMax;
        if(x < rangeMin) {
            x += rangeMin;
            return x;
        } else {
            return x;
        }
    }
}
