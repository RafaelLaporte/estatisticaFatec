function standardDeviation(mean, varType, varScope) {

    let values = [];
    let frequencies = [];
    let fac = [];
    let standardDeviation = 0;
    
    $('tbody td:nth-child(1)').each(function (index) {
        let value = ($(this).text())
        values.push(value);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let frequency = ($(this).text())
        frequencies.push(Number(frequency));
    });

    $('tbody td:nth-child(4)').each(function (index) {
        let value = ($(this).text())
        fac.push(Number(value));
    });

    let maxFac = fac[fac.length - 1];

    if(varScope == 'amostra') maxFac = maxFac - 1

    if (varType === 'quantitativaContinua') {
        for (i = 0; i < values.length; i++) {
            let stringList = values[i].split(' ')
            let intervalStart = Number(stringList[0]);
            let intervalEnding = Number(stringList[stringList.length - 1]);

            values[i] = (intervalStart + intervalEnding)/2;

            standardDeviation += frequencies[i]*Math.pow(values[i] - Number(mean), 2) 
        }
    }

    else {
        for (i = 0; i < values.length; i++) {
            standardDeviation += frequencies[i]*Math.pow(Number(values[i]) - Number(mean) , 2);
        }
    }

    standardDeviation = Math.sqrt(standardDeviation/maxFac);
    standardDeviation == undefined || standardDeviation == isNaN ? standardDeviation = "Não consta" : standardDeviation = standardDeviation.toFixed(2);
    
    return standardDeviation

}

function variance(standardDeviation, mean) {
    return `${((standardDeviation/mean)*100).toFixed(2)}%`
}