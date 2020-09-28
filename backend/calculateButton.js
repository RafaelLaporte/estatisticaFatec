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

    //Generates Mean, Mode and Median
    let newMean = mean(variable.type);
    let newMode = mode(variable.type);
    let newMedian = median(variable.type);

    document.getElementById('mean').innerHTML += `Média: ${newMean}`
    document.getElementById('mode').innerHTML += `Moda: ${mode(variable.type)}`
    document.getElementById('median').innerHTML += `Mediana: ${median(variable.type)}`
    document.getElementById('measure').innerHTML += `Medida separatriz: ${measuresOfPosition(variable.type, varMeasureType, varMeasurePart)}`
  //  document.getElementById('standard-deviation').innerHTML += `Desvio Padrão: ${standardDeviation(newMean, variable.type)}`
}