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