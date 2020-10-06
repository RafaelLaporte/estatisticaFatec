function mean(varType) {

    let values = [];
    let frequencies = [];
    let mean = 0;
    let N = 0;

    //CRIAR FUNÇÃO PARA LER LINHA 'I' DA TABELA
    $('tbody td:nth-child(1)').each(function (index) {
        let value = ($(this).text())
        values.push(value);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let frequency = ($(this).text())
        frequencies.push(frequency);
    });

    if (['qualitativaNominal','qualitativaOrdinal'].includes(varType)) {
        return 'Não consta'
    }

    if (varType === 'quantitativaDiscreta') {
        for (i = 0; i < values.length; i++) {
            mean += Number(values[i])*Number(frequencies[i]);
            N += Number(frequencies[i]);
        }

        mean = (mean/N).toFixed(2);

        return mean
    }

    //If the variable is continuous, the mean is calculated by taking the mean of each class interval as value.
    if (varType === 'quantitativaContinua') {
        for (i = 0; i < values.length; i++) {
            let stringList = values[i].split(' ')
            let intervalStart = Number(stringList[0]);
            let intervalEnding = Number(stringList[stringList.length - 1]);
            values[i] = (intervalStart + intervalEnding)/2;

            mean += Number(values[i])*Number(frequencies[i]);
            N += Number(frequencies[i]);
        }

        mean = (mean/N).toFixed(2);
        
        return mean
    }
}