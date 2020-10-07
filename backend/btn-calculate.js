function btnCalculate(variable = undefined) {   
    //Resets when click on the button
    resetHTML();

    //Reads the inputs
    variable == undefined ? variable = inputReader() : variable = variable
    
    //Generates the frequencies table
    generateTable(variable);

    //Generates the variable graphs
    createChart(variable.type);

    //Generates Mean, Mode and Median
    statisticalVariables(variable)
}