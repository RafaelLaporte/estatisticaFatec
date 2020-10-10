//Prints the statistical values in the HTML
function statisticalVariables(variable, btnOrganize = false) {
    let newMean = mean(variable.type);
    let newMode = mode(variable.type);
    let newMedian = median(variable.type);
    let newMeasuresOfPosition = measuresOfPosition(variable.type, variable.measureType, variable.measurePart);
    let newStandardDeviation = standardDeviation(newMean, variable.type, variable.scope);
    let newVariance = variance(newStandardDeviation, newMean);

    document.getElementById('mean').innerHTML += `Média: ${newMean}`
    document.getElementById('mode').innerHTML += `Moda: ${newMode}`

    if (btnOrganize == false) {
        document.getElementById('median').innerHTML += `Mediana: ${newMedian}`
        document.getElementById('measure').innerHTML += `Medida separatriz: ${newMeasuresOfPosition}`
    } 

    document.getElementById('standard-deviation').innerHTML += `Desvio Padrão: ${newStandardDeviation}`  
    document.getElementById('variance').innerHTML += `Variância: ${newVariance}`
}