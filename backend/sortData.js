function organize(data) {
    //Creating the data array
    data = data.split(/\s*;\s*/);

    //Removing blank elements
    for (i = 0; i < data.length; i++) {
        if (data[i] === "") {
            data.splice(i,1);
            i--
        }
    }

    return data
}    
    
//Sorts the data array (crescent order if number or alphabetical if string).
function sort(dataObject, varType) {

    let keys = Object.keys(dataObject);
    let sortedObject = {};

    if (["quantitativaDiscreta", "quantitativaContinua"].includes(varType)) {
        for (i = 0; i < keys.length; i++) {
            keys[i] = Number(keys[i]);
        }
        keys.sort((a,b) => a - b);
    } else {
        keys.sort();
    }

    for (key of keys) {
        sortedObject[key] = dataObject[key]
    }

    return sortedObject
}