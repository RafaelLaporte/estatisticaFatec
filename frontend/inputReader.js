function inputReader() {
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    let varValues = document.getElementById('varValues').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;

    /*let varMeasureType = document.getElementById('measureSel').value;
    let varMeasurePart = document.getElementById('partMeasure').value;
        varMeasures = { type: varMeasureType , part: varMeasurePart}*/
    
    //let varScope = document.querySelector('input[name="varScope"]:checked').value; 

    varValues = organizeAndSort(varValues, varType);

    //Counting
    let valuesFi = simpleFrequencies(varValues);
    let varData = variableData(varName, varType, varValues, valuesFi);
    //return {data: varData, measures: varMeasures}
    return varData
}