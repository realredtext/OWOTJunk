function multiReplace(string, searchVals, replaceVals) { //string, array, array
    for(let i = 0; i < searchVals.length; i++) {
        string = string.replaceAll(searchVals[i], replaceVals[i]);
    };

    return string;
};
