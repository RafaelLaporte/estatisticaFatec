function measuresOfPosition(varType, varMeasureType, varMeasurePart) {
    
    let values = [];
    let frequencies = [];
    let fac = [];
    let measure;
    let part = Number(varMeasurePart)

    //Sets in how many parts the dataset we'll be divided
    if(varMeasureType == '' || varMeasurePart == '') return 'Especifique um valor para as medidas separatrizes'
    if(varMeasureType == 'quartil') varMeasureType = 4
    if(varMeasureType == 'quintil') varMeasureType = 5
    if(varMeasureType == 'decil') varMeasureType = 10
    if(varMeasureType == 'percentil') varMeasureType = 100

    //Taking the table values of interest
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

    //Declaring the variables of interest.
    let numberOfValues = fac[fac.length -1]
    let position;
    position = Math.round((numberOfValues/varMeasureType)*part)
    let i = 0 
 
    //Calculates the highest position of the defined division.
    while(position > fac[i]) i++ 
    
    measure = values[i]
    let facAnterior 

    /*Verifies if the fac is the first value in the table. So the 'previous fac' doesn't exist, 
    so it need to be set to 0.*/
    i == 0 ? facAnterior = 0 : facAnterior = fac[i - 1]
    let fi = frequencies[i]
    

    //Calculates the measure of position for each type of variable
    if (varType == 'quantitativaContinua') { 
        let valList = values[i].split(' ')
        let init = Number(valList[0]);
        let interval = Number(valList[2]) - init;
       
        measure = init + ((position - facAnterior)/ fi) * interval
        measure = measure.toFixed(2);

    /*If we were taking the median of the dataset, we need to verify if this has a even number of elements to take the
    mean between the middle values, in discrete case, or print these two in the qualitative case*/
    } else if(numberOfValues % 2 == 0 && position + 1 > fac[i] && part/varMeasureType == 1/2){
        if (varType == 'quantitativaDiscreta'){ 
            measure = (Number(values[i]) + Number(values[i + 1]))/2
            measure = measure.toFixed(2); 

        } else{
            measure = [values[i], values[i + 1]];
        }
    } 

    return measure == undefined ? "Não consta" : measure
}