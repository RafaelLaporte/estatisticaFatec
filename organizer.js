function calculate() {   

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
function calcFac(valuesQuantity, sortable=false) {
    if (sortable == true) {
        let count = 0;
        let values = [];
        let acumulatedList = [];
    
        $('tbody td:nth-child(2)').each(function (index) {
            values.push(Number($(this).text()));
        });
    
        values.forEach(value => {
            count += value
            acumulatedList.push(count);
        });
    
        return acumulatedList

    } else {
        let acumulated = 0
        let acumulatedObj = {}

        for (key in valuesQuantity) {
            acumulated += valuesQuantity[key];
            acumulatedObj[key] = acumulated;
        }

        return acumulatedObj
    }
}

//Calcula a frequência acumulada percentual
function calcPercentFac(percentFr, sortable=false) {

    if (sortable == true) {
        let count = 0;
        let values = [];
        let acumulatedList = []

        $('tbody td:nth-child(3)').each(function (index) {
            let simpleFreq = ($(this).text()).slice(0,-1);
            values.push(Number(simpleFreq));
        });

        for (value of values) {
            count += value;

            if (count > 99.95) count = 100;
            acumulatedList.push(`${count.toFixed(2)}%`);
        }

        return acumulatedList
    }

    else {
        acumulated = 0;
        acumulatedObj = {}
    
        for (key in percentFr) {
            acumulated += Number((percentFr[key]).slice(0,-1));
    
            if (acumulated > 99.95) acumulated = 100
            acumulatedObj[key] = `${acumulated.toFixed(2)}%`;
        }

        return acumulatedObj
    }
}

//Generate Charts
function createChart() {
    let ctx = document.getElementById('chart').getContext('2d');
    let labelsList = [];
    let valuesList = [];
    let backgroundColor = ['Red', 'Blue', 'Orange', 'Yellow', 'Green', 'Pink', 'Turquoise', 'Black'];

    $('tbody td:nth-child(1)').each(function (index) {
        let label = ($(this).text())
        labelsList.push(label);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let value = ($(this).text())
        valuesList.push(Number(value));
    });

    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsList,
            datasets: [{
                label: 'Representação Gráfica',
                data: valuesList,
                backgroundColor: backgroundColor,
                borderWidth: 1
            }]
        },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem) {
                               return tooltipItem.yLabel;
                        }
                     }
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
    });
}

//Generate Tables
function generateTable(varName, varType, dataList, valuesQuantity) {

    document.getElementById("style").innerHTML = 
    `table, th, td {border: 2px solid black; text-align: center; table-layout: fixed; width: 50%;}`

    document.getElementById("thead").innerHTML = 
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
            document.getElementById("tbody").innerHTML += 
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

                createChart();
            }
        });      

    } else if(varType == "quantitativaContinua"){
        let xMin = Math.min(...Object.keys(valuesQuantity));  
        let xMax = Math.max(...Object.keys(valuesQuantity));
        let amplitude = xMax - xMin 
        let k = 0

        for (value of dataList) k += Number(value);
        
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
            document.getElementById("tbody").innerHTML += 
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

    createChart();
}