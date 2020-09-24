function measuresCalc(varType, partType) {
    
    let values = [];
    let frequencies = [];
    let frequenciesAc = [];
    let measure;

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
    totalElements % 2 == 0 ?
        percent = totalElements/partType :
        percent = (totalElements + 1)/partType
    
    if (varType === 'quantitativaContinua') {

    } else{

        let i = 0
       
        while(percent > frequenciesAc[i]) i++ 

        measure = values[i]

        if(totalElements % 2 == 0 && percent + 1 > frequenciesAc[i]){

            varType == 'quantitativaDiscreta' ? 
            measure = (Number(values[i]) + Number(values[i + 1]))/2 :
            measure = [values[i], values[i + 1]]
        }
       return measure 
    }
}