function standardDeviation(mean, varType, varScope) {

    let values = [];
    let frequencies = [];
    let fac = [];
    let standardDeviation = 0;
    
    //Taking the table values of interest
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

    //Taking the highest Fac value
    let maxFac = fac[0]
    for (i = 0; i < fac.length; i++) {
        if(maxFac < fac[i]) maxFac = fac[i]
    }

    //If the varScope is 'amostra', we need to subtract the maxFac by 1
    if(varScope == 'amostra') maxFac = maxFac - 1

    //Calculating the standard deviation for each type of statistical variable
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

    /*If the variable is qualitative, it's impossible to do the calculations above, so the standardDeviation
    would be undefined or isNaN*/
    standardDeviation == undefined || isNaN(standardDeviation) ? standardDeviation = "Não consta" : 
                        standardDeviation = standardDeviation.toFixed(2);
    
    return standardDeviation
}

//Calculates the variance
function variance(standardDeviation, mean) {
    if(standardDeviation == 'Não consta') return 'Não consta'

    return `${((standardDeviation/mean)*100).toFixed(2)}%`
}