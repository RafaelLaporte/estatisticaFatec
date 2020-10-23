//Prints the statistical values in the HTML
function statisticalVariables(variable, btnOrganize = false) {
    let dataMean = mean(variable.type);
    let dataMode = mode(variable.type);
    let dataMedian = median(variable.type);
    let dataMeasuresOfPosition = measuresOfPosition(variable.type, variable.measureType, variable.measurePart);
    let dataStandardDeviation = standardDeviation(dataMean, variable.type, variable.scope);
    let dataVariance = variance(dataStandardDeviation, dataMean);

    document.getElementById('mean').innerHTML += `Média: ${dataMean}`
    document.getElementById('mode').innerHTML += `Moda: ${dataMode}`

    if (!btnOrganize) {
        document.getElementById('median').innerHTML += `Mediana: ${dataMedian}`
        document.getElementById('measure').innerHTML += `Medida separatriz: ${dataMeasuresOfPosition}`
    } 

    document.getElementById('standard-deviation').innerHTML += `Desvio Padrão: ${dataStandardDeviation}`  
    document.getElementById('variance').innerHTML += `Variância: ${dataVariance}`
}