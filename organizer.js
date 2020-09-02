function calculate() {   

    document.getElementById("thead").innerHTML = "";
    document.getElementById("tbody").innerHTML = "";

    let varName = document.getElementById('varName').value;

    //Reading Variables
    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
    let dataList
    //let varScope = document.querySelector('input[name="varScope"]:checked').value;
    varValue.split(/\s*;\s*/) == '' || undefined || null ? alert('Erro de digitação das variáveis') : dataList =  varValue.split(/\s*;\s*/); 
    let valuesQuantity = {};
    

    if (["quantitativaDiscreta", "quantitativaContinua"].includes(varType)) {
        for (i = 0; i < dataList.length; i++) {
            console.log(typeof dataList[i])
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
    document.getElementById("thead").innerHTML = 
            `<tr>
            <td>${varName}</td>
            <td>Frequência</td>
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
        
    } else if(varType == "quantitativaContinua"){

        let xMin = Math.min(...Object.keys(valuesQuantity))  
        let xMax = Math.max(...Object.keys(valuesQuantity))
        let amplitude = xMax - xMin 
        let k = 0
        for (key in dataList) {
        k += Number(dataList[key])
    }
     k = Math.round(Math.sqrt(k)) 
     let intervalo = Math.ceil(amplitude/k)
       console.log(intervalo)
       let xMaxParcial = xMin
       while (xMaxParcial <= xMax) { 
           let frequency = 0
            frequency = dataList.filter(value => value < xMaxParcial + intervalo && value >= xMaxParcial).length

           document.getElementById("tbody").innerHTML += 
        `<tr>
        <td>${xMaxParcial} &vdash; ${xMaxParcial += intervalo}</td>
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
                </tr>`
        }
    }
}

/*  document.getElementById("tbody").innerHTML += 
        `<tr>
        <td>${xMaxParcial} &vdash; ${xMaxParcial += intervalo}</td>
        <td>${valuesQuantity[key]}</td>
        </tr>` 
        */
