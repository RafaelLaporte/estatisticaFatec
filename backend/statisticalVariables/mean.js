function mean(varType) {
    
    //Taking the interest variables
    let fiSum = 0;
    let varNames = readTable(1);
    let frequencies = readTable(2);
    let fac = readTable(4);
    let numberOfValues = fac[fac.length - 1];

    //It's not possible to calculate the mean of a qualitative variable
    if (varType == 'qualitativaOrdinal') return 'Não consta'

    if (varType === 'quantitativaDiscreta') {
        for (i = 0; i < varNames.length; i++) {
            fiSum += Number(varNames[i])*frequencies[i];
        }
    
        let meanValue = (fiSum/numberOfValues).toFixed(2);

        return meanValue
    }

    //If the variable is continuous, the mean is calculated by taking the mean of each class interval as value.
    if (varType === 'quantitativaContinua') {
        for (i = 0; i < varNames.length; i++) {
            let varName = varNames[i].split(' ')
            let intervalStart = Number(varName[0]);
            let intervalEnd = Number(varName[varName.length - 1]);

            varNames[i] = (intervalStart + intervalEnd)/2;
            sum += Number(varNames[i])*frequencies[i];
        }

        meanValue = (sum/maxFac).toFixed(2);
        
        return meanValue
    }
}