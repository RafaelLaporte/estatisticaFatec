function measuresOfPosition(varType, varMeasureType, varMeasurePart) {

    //Sets in how many parts the dataset we'll be divided
    if(varMeasureType == '' || varMeasurePart == '') return 'Especifique um valor para as medidas separatrizes'
    if(varMeasureType == 'quartil') varMeasureType = 4
    if(varMeasureType == 'quintil') varMeasureType = 5
    if(varMeasureType == 'decil') varMeasureType = 10
    if(varMeasureType == 'percentil') varMeasureType = 100

    let part = Number(varMeasurePart);

    //Taking the table values of interest
    let varNames = readTable(1);
    let frequencies = readTable(2);
    let fac = readTable(4);
    let facAnterior;

    //Declaring the variables of interest.
    let numberOfValues = fac[fac.length -1]
    let position = Math.round((numberOfValues/varMeasureType)*part)
    let i = 0 
 
    //Calculates the highest position of the defined division.
    while(position > fac[i]) i++ 
    
    let measure = varNames[i];

    /*Verifies if the fac is the first value in the table. So the 'previous fac' doesn't exist, 
    so it need to be set to 0.*/
    i == 0 ? facAnterior = 0 : facAnterior = fac[i - 1]
    let fi = frequencies[i]
    

    //Calculates the measure of position for each type of variable
    if (varType == 'quantitativaContinua') { 
        let varName = varNames[i].split(' ')
        let intervalStart = Number(varName[0]);
        let intervalEnd = Number(varName[2])
        let classInterval = intervalEnd - intervalStart;
       
        measure = intervalStart + ((position-facAnterior)/fi)*classInterval
        measure = measure.toFixed(2);

    /*If we were taking the median of the dataset, we need to verify if this has a even number of elements to take the
    mean between the middle values, in discrete case, or print these two in the qualitative case*/
    } else if(numberOfValues % 2 == 0 && position + 1 > fac[i] && part/varMeasureType == 1/2){
        if (varType == 'quantitativaDiscreta'){ 
            measure = (Number(varNames[i]) + Number(varNames[i + 1]))/2
            measure = measure.toFixed(2); 

        } else{
            measure = [varNames[i], varNames[i + 1]];
        }
    } 

    return measure == undefined ? "Não consta" : measure
}