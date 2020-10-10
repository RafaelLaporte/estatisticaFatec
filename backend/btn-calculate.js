function btnCalculate(variable = undefined, btnOrganize = false) {   
    //Resets when click on the button
    resetHTML(btnOrganize);

    //Reads the inputs
    variable == undefined ? variable = inputReader() : variable = variable
    
    //Generates the frequencies table
    generateTable(variable);

    //Generates the variable graphs
    createChart(variable.type);

    //Generates Mean, Mode and Median
    statisticalVariables(variable, btnOrganize)
}