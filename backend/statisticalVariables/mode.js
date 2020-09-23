function mode(varType) {

    let values = [];
    let frequencies = [];
    let count = 0;
    let mode;

    $('tbody td:nth-child(1)').each(function (index) {
        let value = ($(this).text())
        values.push(value);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let frequency = ($(this).text())
        frequencies.push(frequency);
    }); 

    let maxFrequency = Math.max(...frequencies);

    for(i = 0; i < frequencies.length; i++) {
        if (frequencies[i] == maxFrequency) count++
        if (count > 1) return "Não existe moda"
    }

    let index = frequencies.indexOf(maxFrequency.toString());

    if (varType === 'quantitativaContinua') {
        let stringList = values[index].split(' ')
        let intervalStart = Number(stringList[0]);
        let intervalEnding = Number(stringList[stringList.length - 1]);

        mode = (intervalStart + intervalEnding)/2
        return mode.toFixed(2);
    }

    if (['qualitativaDiscreta, qualitativaContinua'].includes(varType)) {
        mode = values[index];
        return mode
    }

    else {
        mode = Number(values[index]);
        return mode.toFixed(2);
    }
}