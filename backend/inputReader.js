function inputReader() {
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    let varValues = document.getElementById('varValues').value;
    let varScope = document.querySelector('input[name="varScope"]:checked').value

    varValues = organize(varValues);

    //Counting
    let valuesFi = simpleFrequencies(varValues);
    let varType = type(valuesFi);

    valuesFi = sort(valuesFi, varType);
    
    let varData = variableData(varName, varType, varValues, valuesFi, varScope);
    //return {data: varData, measures: varMeasures}
    return varData
}