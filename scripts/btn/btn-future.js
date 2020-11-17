/**
 * It uses the linear correlation function to predict values
 */
function btnFuture() {
    //Reseting the styles
    let result = document.getElementById('future-result')
    result.style = ''

    //Taking the variables
    let linear = Number(document.getElementById('linear').innerHTML);
    let angular = Number(document.getElementById('angular').innerHTML);

    let variable = document.getElementById('future-select').value;
    let value = Number(document.getElementById('future-value').value);

    //The dependent variable value for some X value inputed.
    if(variable == "X") {
        
        result.innerHTML = `<h3> y = ${(angular*value + linear).toFixed(2)} </h3>`;
        return false
    }

    //The independent variable value for some Y value inputed.
    if(variable == "Y") {
        if(angular == 0) {
            
            result.innerHTML = `<h3> Reais </h3>`;
        }

        else {
          
            result.innerHTML = `<h3> x = ${((value - linear)/angular).toFixed(2)} </h3>`;
            return false
        }
    } 

    //It verifies if the user filled the inputs to use the future-form
    if(!variable || !value) {
        result.innerHTML = '<h3> Insira a variável desejada </h3>';
        return false
    }
}