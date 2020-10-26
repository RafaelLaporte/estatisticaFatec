//Calculates the simples frequency (number of occurrences) of each value.
function simpleFrequencies(varValues) {
    let simpleFrequencies = {};

    varValues.forEach(value => {
        !(value in simpleFrequencies) ? simpleFrequencies[value] = 1 :  simpleFrequencies[value] += 1
    });

    return simpleFrequencies;
}

//Generates the final variable object.
function variableData(varName, varType, varValues, valuesFi, varScope, varMeasureType, varMeasurePart) {    
    let frequencies = [];
    let fac = 0;
    let numberOfValues = varValues.length;
    let orderedKeys = Object.keys(valuesFi);

    if (varType === 'quantitativaContinua') {
        //Max and Min values
        let min = Math.min(...varValues);
        let max = Math.max(...varValues);

        //Calculating the classInterval
        let amplitude = max - min       
        let k = Math.round(Math.sqrt(numberOfValues)); 
        let classInterval = Math.ceil(amplitude/k);

        //Constructing the new valuesFi values, counting how many values are in each classInterval
        let countinuousFi = {}
        
        //Creating a new object, counting how many values are in each defined interval
        for(let i = min; i <= max; i += classInterval){
            let key = `${i} &vdash; ${i + classInterval}`;
            countinuousFi[key] = varValues.filter(value => value >= i && value < i + classInterval).length
        }

        //Updating the values
        valuesFi = countinuousFi;
        orderedKeys = Object.keys(valuesFi);
    }

    //Order the values if varType == 'quantitativaDiscreta'
    if (varType == 'quantitativaDiscreta') {
        for (let i = 0; i < orderedKeys.length; i++) {
            orderedKeys[i] = Number(orderedKeys[i]);
        }
    } 
    
    //Sort the values in crescent order
    if (varType != 'quantitativaContinua') quickSort(orderedKeys, (a,b) => a < b);

    //Making the data proprierty of the object, contaning all statistical values.
    for (key of orderedKeys) {
        let fi = valuesFi[key];
        fac += fi;

        frequencies.push({
            value: key,
            fi: fi,
            percentualFi: `${(100*fi/numberOfValues).toFixed(2)}%`,
            fac: fac,
            /*We are rounded all values, so, we need to verify if the final percentage is above 100%. 
            The error margin were defined as 0.5%*/
            percentualFac: 100*fac/numberOfValues > 99.5 ? `100.00%` : `${(100*fac/numberOfValues).toFixed(2)}%`
        });
    }

    //Final Object
    return {
            name: varName, 
            type: varType, 
            scope: varScope, 
            data: frequencies, 
            keys: orderedKeys, 
            measurePart: varMeasurePart, 
            measureType: varMeasureType
    };
}
