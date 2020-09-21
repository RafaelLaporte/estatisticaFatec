function mode(varType) {

    let values = [];
    let frequencies = [];
    let mode = [];

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
        if (frequencies[i] == maxFrequency) {
            mode.push(values[i])
        }
    }

    if (mode.length == values.length) return 'Não existe moda'

    if (varType === 'quantitativaContinua') {

        for(i = 0; i < mode.length; i++) {

            let stringList = mode[i].split(' ')
            let intervalStart = Number(stringList[0]);
            let intervalEnding = Number(stringList[stringList.length - 1]);

            mode[i] = ((intervalStart + intervalEnding)/2).toFixed(2);
        }

        return mode;

    } else return mode;
}
