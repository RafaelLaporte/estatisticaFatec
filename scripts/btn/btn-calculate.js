/**
 * It calculates and shows the output's descriptive statistical form
 * @param {Object} variable Descriptive data object variable. Default is set to undefined
 * @param {Boolean} btnOrganize It verifies if btnOrganize button were clicked
 */
function btnCalculate(variable = undefined, btnOrganize = false) {  
    
    document.getElementById('graph-and-values').style = "display: ''"
    
    //It reads when click on the button
    resetDescriptive(btnOrganize);

    //It reads inputs and generates the variable object if it wasn't given
    variable == undefined ? variable = readInput() : variable = variable
    
    //It generates the frequencies table
    generateTable(variable);

    //It generates mean, mode and median
    statisticalVariables(variable, btnOrganize)

    //It generates the variable graphs
    descriptiveChart(variable.type);

    document.getElementById('search-form').style = ''
    //Generating the organize button
    document.getElementById('btn-organize').innerHTML = `
    <button type="button" class="btn" onclick="btnOrganize()"> Ordenar por Fi </button>` 
    return false
}