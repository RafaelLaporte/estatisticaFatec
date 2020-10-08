function standardDeviation(mean, varType, varScope) {

    if (varType == 'qualitativaOrdinal') return 'Não consta'

    //Taking the table values of interest
    let varNames = readTable(1);
    let frequencies = readTable(2);
    let fac = readTable(4);
    let standardDeviation = 0;
    
    //Taking the highest Fac value
    let maxFac = fac[0]
    for (i = 0; i < fac.length; i++) {
        if(maxFac < fac[i]) maxFac = fac[i]
    }

    //If the varScope is 'amostra', we need to subtract the maxFac by 1
    if(varScope == 'amostra') maxFac = maxFac - 1

    //Calculates the standard deviation for each type of statistical variable
    if (varType === 'quantitativaContinua') {
        for (i = 0; i < varNames.length; i++) {
            let stringList = varNames[i].split(' ')
            let intervalStart = Number(stringList[0]);
            let intervalEnding = Number(stringList[stringList.length - 1]);

            varNames[i] = (intervalStart + intervalEnding)/2;

            standardDeviation += frequencies[i]*Math.pow(varNames[i] - Number(mean), 2) 
        }
    } else {
        for (i = 0; i < varNames.length; i++) {
            standardDeviation += frequencies[i]*Math.pow(Number(varNames[i]) - Number(mean) , 2);
        }
    };

    standardDeviation = Math.sqrt(standardDeviation/maxFac).toFixed(2);
    
    return standardDeviation
}

//Calculates the variance
function variance(standardDeviation, mean) {
    if(standardDeviation == 'Não consta') return 'Não consta'

    return `${((standardDeviation/mean)*100).toFixed(2)}%`
}