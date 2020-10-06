function mode(varType) {

    let values = [];
    let frequencies = [];
    let mode = [];

    //Taking the table values of interest
    $('tbody td:nth-child(1)').each(function (index) {
        let value = ($(this).text())
        values.push(value);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let frequency = ($(this).text())
        frequencies.push(frequency);
    }); 

    //Determining the higher frequency value
    let maxFrequency = Math.max(...frequencies);

    //Determining the value(s) that has the highest frequency calculed before
    for(i = 0; i < frequencies.length; i++) {
        if (frequencies[i] == maxFrequency) {
            mode.push(values[i])
        }
    }

    //If there isn't a lowest value, there's no mode
    if (mode.length == values.length) return 'Não existe moda'

    //If the variable is '''continuous''', calculates the mode by verifying the mean of each class interval
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