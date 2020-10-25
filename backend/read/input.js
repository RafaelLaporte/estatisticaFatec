function inputReader(reader = false) {

    let varName
    let varValues
    let varMeasurePart
    let varMeasureType
    let varScope
    
    if (reader) {
        let fileValues = organize(reader)
        varName = fileValues[0];
        varValues = fileValues.slice(1, fileValues.length);   
        varMeasurePart = document.getElementById('filePartMeasure').value;
        varMeasureType = document.getElementById('fileMeasures').value;
        varScope = document.querySelector('input[name="fileScope"]:checked').value
                    
    }

    else {
        //Reading Variables
        varName = document.getElementById('varName').value;
        if (varName == '') varName = 'Sem nome';
        varValues = document.getElementById('varValues').value;

        //Formats the values, removing blank spaces
         varValues = organize(varValues);

         //Values for measures of position calculation
         varMeasurePart = document.getElementById('handPartMeasure').value;
         varMeasureType = document.getElementById('handMeasures').value;

         //Scope of the variable
         varScope = document.querySelector('input[name="handScope"]:checked').value
    }    

    //Counting the number of occurrences of each value.
    let valuesFi = simpleFrequencies(varValues);
    let varType = type(valuesFi);
    
    //Merge all the variables values and properties in a single object called varData
    let varData = variableData(varName, varType, varValues, valuesFi, varScope, varMeasureType, varMeasurePart);

    return varData
}