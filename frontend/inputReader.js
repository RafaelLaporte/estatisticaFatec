function inputReader() {
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    let varValues = document.getElementById('varValues').value;
    let varType

    
    varValues = organizeAndSort(varValues, varType);

    varValues.some(isNaN) ? varType = 'qualitativaOrdinal' :
    varValues.length < 10 ? varType = 'quantitativaDiscreta':
    varType = 'quantitativaContinua'
       

    //Counting
    let valuesFi = simpleFrequencies(varValues);
    let varData = variableData(varName, varType, varValues, valuesFi);
    //return {data: varData, measures: varMeasures}
    return varData
}