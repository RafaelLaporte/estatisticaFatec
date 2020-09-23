function inputReader() {
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    let varValues = document.getElementById('varValues').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;

    //let varScope = document.querySelector('input[name="varScope"]:checked').value; 

    varValues = organizeAndSort(varValues, varType);

    //Counting
    let valuesFi = simpleFrequencies(varValues);
    let varData = variableData(varName, varType, varValues, valuesFi);

    return varData
}

