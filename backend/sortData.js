function organizeAndSort(data, varType) {
    //Creating the data array
    data = data.split(/\s*;\s*/);

    //Removing blank elements
    for (i = 0; i < data.length; i++) {
        if (data[i] === "") {
            data.splice(i,1);
            i--
        }
    }    

    //Sorts the data array (crescent order if number or alphabetical if string).
    if (["quantitativaDiscreta", "quantitativaContinua"].includes(varType)) {
        for (i = 0; i < data.length; i++) {
            data[i] = Number(data[i]);
        }
        data.sort((a,b) => a - b);
    } else {
        data.sort();
    }

    return data
}


