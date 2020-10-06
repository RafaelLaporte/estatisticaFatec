function btnCalculate() {   
    //Resets when click on the button
    resetHTML();

    //Reads the inputs
    let variable = inputReader();
    //let input = inputReader()
    
    //Generates the frequencies table
    generateTable(variable);

    document.getElementById('btn-organize').innerHTML = `
    <button type="button" class="btn" onclick="btnOrganize()"> Organizar por Fi </button>`

    //Generates the variable graphs
    //createChart(input.data.type)
    createChart(variable.type);

    //Generates Mean, Mode and Median
    statisticalVariables(variable)
}