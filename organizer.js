function calculate() {   

    document.getElementById("thead").innerHTML = "";
    document.getElementById("tbody").innerHTML = "";

    let varName = document.getElementById('varName').value;

    //Reading Variables
    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
    //let varScope = document.querySelector('input[name="varScope"]:checked').value;
    let dataList = varValue.split(/\s*;\s*/); 
    let valuesQuantity = {};

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


    //Generating Tables
    document.getElementById("tbody").innerHTML = `<br>
            <tr>
            <th>${varName}</th>
            <th>Frequência</th>
            </tr>`

    if (varType == "qualitativaOrdinal")  {

        document.getElementById("explanation").innerHTML = 
        "<b style='font-size: 20px;'>Clique e arraste para trocar a posição das linhas.</b>"

        for (key in valuesQuantity) {
            document.getElementById("tbody").innerHTML += 
                `<tr>
                <td>${key}</td>
                <td>${valuesQuantity[key]}</td>
                </tr>`
        }

        document.getElementById("tableScript").innerHTML = "$('tbody').sortable();"
        
    } else {
        for (key in valuesQuantity) {
            document.getElementById("tbody").innerHTML += 
                `<tr>
                <td>${key}</td>
                <td>${valuesQuantity[key]}</td>
                </tr>`
        }
    }
}
