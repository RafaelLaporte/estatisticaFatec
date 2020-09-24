function calculateButton() {   

    //Resets when click on the button
    resetHTML();

    //Reads the inputs
    let variable = inputReader();

    //Generates the frequencies table
    generateTable(variable);

    //Generates the variable graphs
    createChart(variable.type);

    //Generates Mean, Mode and Median
    document.getElementById('mean').innerHTML += `Média: ${mean(variable.type)}`
    document.getElementById('mode').innerHTML += `Moda: ${mode(variable.type)}`
    median(variable.type);
    document.getElementById('measure').innerHTML += `Medida separatriz: ${measure(variable.type)}`
}