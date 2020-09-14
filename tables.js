//Generate Tables
function generateTable(varName, varType, dataList, valuesQuantity) {

    document.getElementById("style").innerHTML = 
    `table, th, td {border: 2px solid black; text-align: center; table-layout: fixed; width: 50%;}`

    document.getElementById("table_head").innerHTML = 
    `<tr>
    <td>${varName}</td>
    <td>Frequência Simples (Fi)</td>
    <td>Frequência Simples % (Fr%)</td>
    <td>Frequência acumulada (Fac)</td>
    <td>Frequência acumulada % (Fac%)</td>
    </tr>`    

    let percentFr = calcPercentFr(dataList, valuesQuantity);
    let fac = calcFac(valuesQuantity, varType);
    let percentFac = calcPercentFac(percentFr);

    if (varType == "qualitativaOrdinal")  {

        document.getElementById("explanation").innerHTML = 
        "<b style='font-size: 20px;'>Clique e arraste para trocar a posição das linhas.</b>"

        let keys = Object.keys(valuesQuantity);
        keys.forEach((key, i) => {
            document.getElementById("table_body").innerHTML += 
            `<tr>
            <td>${key}</td>
            <td>${valuesQuantity[key]}</td>
            <td>${percentFr[key]}</td>
            <td id=fac${i}>${fac[key]}</td>
            <td id=percentFac${i}>${percentFac[key]}</td>
            </tr>`  
        });

        $('tbody').sortable({
            disabled: false,
            update: function () {
                let newFac = calcFac(valuesQuantity, true);
                let newPercentFac = calcPercentFac(percentFr, true);
 
                $('tbody td:nth-child(4)').each(function (index) {
                    $(this).text(newFac[index]);
                });

                $('tbody td:nth-child(5)').each(function (index) {
                    $(this).text(newPercentFac[index]);
                });  

                createChart(varType);
            }
        });      

    } else if(varType == "quantitativaContinua"){
        let xMin = Math.min(...Object.keys(valuesQuantity));  
        let xMax = Math.max(...Object.keys(valuesQuantity));
        let amplitude = xMax - xMin 
        let k = dataList.length
        
        k = Math.round(Math.sqrt(k)); 
        let range = Math.ceil(amplitude/k);
        let newValuesQuantity = {}
        
        for(let xMaxParcial = xMin; xMaxParcial <= xMax; xMaxParcial += range){
            let key = `${xMaxParcial} &vdash; ${xMaxParcial + range}`;
            newValuesQuantity[key] = dataList.filter(value => value < xMaxParcial + range && value >= xMaxParcial).length
        }

        let percentFr = calcPercentFr(dataList, newValuesQuantity);
        let fac = calcFac(newValuesQuantity);
        let percentFac = calcPercentFac(percentFr);
            
        for (key in newValuesQuantity){ 
            document.getElementById("table_body").innerHTML += 
                `<tr>
                <td>${key}</td>
                <td>${newValuesQuantity[key]}</td>
                <td>${percentFr[key]}</td>
                <td>${fac[key]}</td>
                <td>${percentFac[key]}</td>
                </tr>`  
        }
    }
    else {
        for (key in valuesQuantity) {
            document.getElementById("table_body").innerHTML += 
            `<tr>
            <td>${key}</td>
            <td>${valuesQuantity[key]}</td>
            <td>${percentFr[key]}</td>
            <td>${fac[key]}</td>
            <td>${percentFac[key]}</td>
            </tr>`
        }
    }

    createChart(varType);
}