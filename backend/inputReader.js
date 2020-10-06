function inputReader() {
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    if (varName == '') varName = 'Sem nome';

    let varValues = document.getElementById('varValues').value;
    let varScope = document.querySelector('input[name="varScope"]:checked').value
    
    //Values for measures of position calculation
    let varMeasureType = document.getElementById('measureSel').value;
    let varMeasurePart = document.getElementById('partMeasure').value;

    //Formats the values, removing blank spaces
    varValues = organize(varValues);

    //Counting the number of occurrences of each value.
    let valuesFi = simpleFrequencies(varValues);
    let varType = type(valuesFi);
    
    //Merge all the variables values and properties in a single object called varData
    let varData = variableData(varName, varType, varValues, valuesFi, varScope, varMeasureType, varMeasurePart);

    return varData
}