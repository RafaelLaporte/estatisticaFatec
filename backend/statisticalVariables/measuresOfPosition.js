function measuresOfPosition(varType, varMeasureType, varMeasurePart) {
    
    let values = [];
    let frequencies = [];
    let frequenciesAc = [];
    let measure;
    let part = Number(varMeasurePart)
    
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
        frequencies.push(frequency);
    });

    $('tbody td:nth-child(4)').each(function (index) {
        let frequencyAc = ($(this).text())
        frequenciesAc.push(Number(frequencyAc));
    });

    let totalElements = frequenciesAc[frequenciesAc.length -1]
    let percent;
    percent = Math.round((totalElements/varMeasureType)*part)
    
    if (varType === 'quantitativaContinua') {

    } else{
        let i = 0
       
        while(percent > frequenciesAc[i]) i++ 

        measure = values[i]

        if(totalElements % 2 == 0){
            varType == 'quantitativaDiscreta' ? 
            measure = (Number(values[i]) + Number(values[i + 1]))/2 : measure = [values[i], values[i + 1]]      
        }
    }

    return measure == undefined ? "Fudeu" : measure
}