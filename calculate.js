function calculate() {   

    //Reset when click on the button
    $('tbody').sortable({disabled: true});
    document.getElementById("thead").innerHTML = "";
    document.getElementById("tbody").innerHTML = "";
    document.getElementById("explanation").innerHTML = "";

    let valuesQuantity = {};
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
    let dataList = varValue.split(/\s*;\s*/);
   
    //Removing blank elements
    for (i = 0; i < dataList.length; i++) {
        if (dataList[i] === "") {
            dataList.splice(i,1);
            i--
        }
    }
   
    //let varScope = document.querySelector('input[name="varScope"]:checked').value; 

    //Insert the variable data in an array and sorts it (crescent order if number or alphabetical if string).
    if (["quantitativaDiscreta", "quantitativaContinua"].includes(varType)) {
        for (i = 0; i < dataList.length; i++) {
            dataList[i] = Number(dataList[i]);
        }
        dataList.sort((a,b) => a - b);
    } else {
        dataList.sort();
    }

    //Counting
    dataList.forEach(key => {
        !(key in valuesQuantity) ? valuesQuantity[key] = 1 :  valuesQuantity[key] += 1
    });

    generateTable(varName, varType, dataList, valuesQuantity);
}