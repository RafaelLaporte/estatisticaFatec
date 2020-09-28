function measuresOfPosition(varType, varMeasureType, varMeasurePart) {
    
    let values = [];
    let frequencies = [];
    let frequenciesAc = [];
    let measure;
    let part = Number(varMeasurePart)

    if(varMeasureType == '' || varMeasurePart == '') return 'Especifique um valor para as medidas separatrizes'
    if(varMeasureType == 'quartil') varMeasureType = 4
    if(varMeasureType == 'quintil') varMeasureType = 5
    if(varMeasureType == 'decil') varMeasureType = 10
    if(varMeasureType == 'percentil') varMeasureType = 100

    $('tbody td:nth-child(1)').each(function (index) {
        let value = ($(this).text())
        values.push(value);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let frequency = ($(this).text())
        frequencies.push(Number(frequency));
    });

    $('tbody td:nth-child(4)').each(function (index) {
        let frequencyAc = ($(this).text())
        frequenciesAc.push(Number(frequencyAc));
    });

    let totalElements = frequenciesAc[frequenciesAc.length -1]
    let percent;
    percent = Math.round((totalElements/varMeasureType)*part)
    let i = 0 
 
    while(percent > frequenciesAc[i]) i++ 
    
    measure = values[i]
    let freqAcAnterior 
    i == 0 ? freqAcAnterior = 0 : freqAcAnterior = frequenciesAc[i - 1]
    let freqSimpl = frequencies[i]
    
    if (varType == 'quantitativaContinua') { 
        let valList = values[i].split(' ')
        let init = Number(valList[0]);
        let interval = Number(valList[2]) - init;

        
        console.log(varMeasureType)
       
        measure = init + ((percent - freqAcAnterior)/ freqSimpl) * interval

    } else if(totalElements % 2 == 0 && percent + 1 > frequenciesAc[i]){
        if (varType == 'quantitativaDiscreta'){ 
            measure = (Number(values[i]) + Number(values[i + 1]))/2
            measure = measure.toFixed(2) 

        } else{
            measure = [values[i], values[i + 1]];
        }
    } 

    return measure == undefined ? "Não consta" : measure
}
    