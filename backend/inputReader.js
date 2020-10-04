function inputReader() {
    
    //Reading Variables
    let varName = document.getElementById('varName').value;
    if (varName == '') varName = 'Sem nome';

    let varValues = document.getElementById('varValues').value;
    let varScope = document.querySelector('input[name="varScope"]:checked').value



    varValues = organize(varValues);

    //Counting
    let valuesFi = simpleFrequencies(varValues);
    let varType = type(valuesFi);
    
    let varData = variableData(varName, varType, varValues, valuesFi, varScope);

    return varData
}