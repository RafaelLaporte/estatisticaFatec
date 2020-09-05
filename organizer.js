function calculate() {   

    document.getElementById("thead").innerHTML = "";
    document.getElementById("tbody").innerHTML = "";

    let valuesQuantity = {};

    //Reading Variables
    let varName = document.getElementById('varName').value;
    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
    let dataList = varValue.split(/\s*;\s*/);

    for (i = 0; i < dataList.length; i++) {
        if (dataList[i] === "") {
            dataList.splice(i,1);
            i--
        }
    }
    //let varScope = document.querySelector('input[name="varScope"]:checked').value;
    
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

    let percentFr = calcPercentFr(dataList, valuesQuantity);
    let fac = calcFac(valuesQuantity);
    let percentFac = calcPercentFac(percentFr);

    //Generating Tables
    document.getElementById("thead").innerHTML = 
            `<tr>
            <td>${varName}</td>
            <td>Frequência Simples (Fi)</td>
            <td>Frequência Simples % (Fr%)</td>
            <td>Frequência acumulada (Fac)</td>
            <td>Frequência acumulada % (Fac%)</td>
            </tr>`               

    if (varType == "qualitativaOrdinal")  {

        document.getElementById("explanation").innerHTML = 
        "<b style='font-size: 20px;'>Clique e arraste para trocar a posição das linhas.</b>"

        for (key in valuesQuantity) {
            document.getElementById("tbody").innerHTML += 
                `<tr>
                <td>${key}</td>
                <td>${valuesQuantity[key]}</td>
                <td>${percentFr[key]}</td>
                <td>${fac[key]}</td>
                <td>${percentFac[key]}</td>
                </tr>`
        }

        document.getElementById("tableScript").innerHTML = "$('tbody').sortable();"      

    } else if(varType == "quantitativaContinua"){

        let xMin = Math.min(...Object.keys(valuesQuantity));  
        let xMax = Math.max(...Object.keys(valuesQuantity));
        let amplitude = xMax - xMin 
        let k = 0

        for (value of dataList) k += Number(value);
    
        k = Math.round(Math.sqrt(k)); 
        let range = Math.ceil(amplitude/k);
       ///console.log(intervalo)
        let xMaxParcial = xMin

        while (xMaxParcial <= xMax) { 
            let frequency = 0
            frequency = dataList.filter(value => value < xMaxParcial + range && value >= xMaxParcial).length

           document.getElementById("tbody").innerHTML += 
                `<tr>
                <td>${xMaxParcial} &vdash; ${xMaxParcial += range}</td>
                <td>${frequency}</td>
                </tr>` 
        } 
      
    }
    else {
        for (key in valuesQuantity) {
            document.getElementById("tbody").innerHTML += 
            `<tr>
            <td>${key}</td>
            <td>${valuesQuantity[key]}</td>
            <td>${percentFr[key]}</td>
            <td>${fac[key]}</td>
            <td>${percentFac[key]}</td>
            </tr>`
        }
    }

}

//Calcula a porcentagem das frequências
function calcPercentFr(dataList, valuesQuantity) {
    let total = dataList.length;
    let frObject = {};

    for (key in valuesQuantity) {
        frObject[key] = `${((valuesQuantity[key]/total)*100).toFixed(2)}%`
    }

    return frObject
}

//Calcula a frequência acumulada
function calcFac(valuesQuantity) {
    acumulated = 0
    acumulatedObj = {}

    for (key in valuesQuantity) {
        acumulated += valuesQuantity[key];
        acumulatedObj[key] = acumulated;
    }

    return acumulatedObj
}

//Calcula a frequência acumulada percentual
function calcPercentFac(percentFr) {
    acumulated = 0;
    acumulatedObj = {}

    for (key in percentFr) {
        acumulated += Number((percentFr[key]).slice(0,-1));

        if (acumulated > 99.95) acumulated = 100
        acumulatedObj[key] = `${acumulated.toFixed(2)}%`;
    }

    return acumulatedObj
}

/*  document.getElementById("tbody").innerHTML += 
        `<tr>
        <td>${xMaxParcial} &vdash; ${xMaxParcial += intervalo}</td>
        <td>${valuesQuantity[key]}</td>
        </tr>` 
        */