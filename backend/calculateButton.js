function calculateButton() {   

    let varMeasureType = document.getElementById('measureSel').value;
    let varMeasurePart = document.getElementById('partMeasure').value;

    //Resets when click on the button
    resetHTML();

    //Reads the inputs
    let variable = inputReader();
    //let input = inputReader()

    //Generates the frequencies table
    //generateTable(input.data)
    generateTable(variable);

    //Generates the variable graphs
    //createChart(input.data.type)
    createChart(variable.type);

    //Generates Mean, Mode and Median (ARRUMAR ESSA QUESTÃO DO newNOME)
    let newMean = mean(variable.type);
    let newMode = mode(variable.type);
    let newMedian = median(variable.type);
    let newMeasuresOfPosition = measuresOfPosition(variable.type, varMeasureType, varMeasurePart);
    let newStandardDeviation = standardDeviation(newMean, variable.type, variable.scope);
    let newVariance = variance(newStandardDeviation, newMean);

    document.getElementById('mean').innerHTML += `Média: ${newMean}`
    document.getElementById('mode').innerHTML += `Moda: ${newMode}`
    document.getElementById('median').innerHTML += `Mediana: ${newMedian}`
    document.getElementById('measure').innerHTML += `Medida separatriz: ${newMeasuresOfPosition}`
    document.getElementById('standard-deviation').innerHTML += `Desvio Padrão: ${newStandardDeviation}  
    Coeficiente de Variância: ${newVariance}`
  
}