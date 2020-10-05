function measuresOfPosition(varType, varMeasureType, varMeasurePart) {
    
    let values = [];
    let frequencies = [];
    let fac = [];
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
        fac.push(Number(frequencyAc));
    });

    let numberOfValues = fac[fac.length -1]
    let position;
    position = Math.round((numberOfValues/varMeasureType)*part)
    let i = 0 
 
    while(position > fac[i]) i++ 
    
    measure = values[i]
    let facAnterior 
    i == 0 ? facAnterior = 0 : facAnterior = fac[i - 1]
    let fi = frequencies[i]
    
    if (varType == 'quantitativaContinua') { 
        let valList = values[i].split(' ')
        let init = Number(valList[0]);
        let interval = Number(valList[2]) - init;

        //console.log(varMeasureType)
       
        measure = init + ((position - facAnterior)/ fi) * interval
        measure = measure.toFixed(2);

    } else if(fac[i] > numberOfValues/position){
        if (varType == 'quantitativaDiscreta'){ 
            measure = (Number(values[i]) + Number(values[i + 1]))/2
            measure = measure.toFixed(2); 

        } else{
            measure = [values[i], values[i + 1]];
        }
    } 

    return measure == undefined ? "Não consta" : measure
}
    