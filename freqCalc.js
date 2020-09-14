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