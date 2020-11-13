/**
 * It calculates and shows the output from correlation form
 * @param {Boolean} future It verifies if the user is using the future-form. Default is false
 */
function btnCorrelation(future = false) {

    //It verifies if the future-form is being used, and returns the correspondent result
    if(future) {
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
            result.style = 'border: solid; width: 100px; margin: auto'
            result.innerHTML = `y = ${(angular*value + linear).toFixed(2)}`;
            return false
        }

        //The independent variable value for some Y value inputed.
        if(variable == "Y") {
            result.style = 'border: solid; width: 100px; margin: auto'
            result.innerHTML = `x = ${((value - linear)/angular).toFixed(2)}`;
            return false
        } 

        //It verifies if the user filled the inputs to use the future-form
        if(!variable || !value) {
            result.innerHTML = 'Tem que colocar alguma coisa ali';
            return false
        }
    }

    //Reading data
    let xName = document.getElementById('x-name').value;
    let xValues = csvToArray(document.getElementById('xValues').value);

    let yName = document.getElementById('y-name').value;
    let yValues = csvToArray(document.getElementById('yValues').value);

    //Declaring variables
    let r = 0;
    let rType = '';
    let N = xValues.length;
    let xSum = 0;
    let ySum = 0;
    let productSum = 0;

    let xSquareSum = 0;
    let ySquareSum = 0;

    let points = []

    // The final function has the form y = a.x + b
    let b = 0
    let a = 0
    let finalExpression

    /*In this method, the expression to calculate the linear coefficient 'a' is given by two independent 
    big expressions, one divided by the other. So this calculates the coefficient by calculating each 
    expression and doing 'topExpression/bottomExpreesion'at the end. The same will be applied to the
    correlation coefficient 'r' .
    */
    let topExpression = 0; 
    let bottomExpression = 0;
    let rTop = 0;
    let rBottom = 0;

    //Generating the mean
    for (i = 0; i < N; i++) {
        //Turning inputs in numbers
        xValues[i] = Number(xValues[i]);
        yValues[i] = Number(yValues[i]);

        //Calculating the necessary sums
        xSum += xValues[i];
        ySum += yValues[i];
        productSum += xValues[i]*yValues[i]
        xSquareSum += Math.pow(xValues[i], 2);
        ySquareSum += Math.pow(yValues[i], 2);
        

        //Point's object
        points.push({
            x: xValues[i],
            y: yValues[i]
        })
    }

    //Calculating the mean and the correlation coefficient.
    xMean = xSum/N
    yMean = ySum/N
    rTop = N*productSum - xSum*ySum
    rBottom = Math.sqrt((N*xSquareSum - Math.pow(xSum,2))*(N*ySquareSum - Math.pow(ySum,2)))
    r = rTop/rBottom;
    rType = correlationVerifier(r);

    //Calculating the top and bottom expressions of the linear coefficient 'a'
    for (i = 0; i < N; i++) {
        topExpression += (xValues[i] - xMean)*(yValues[i] - yMean)
        bottomExpression += Math.pow(xValues[i] - xMean,2)
    }

    //Calculating the coefficients
    a = topExpression/bottomExpression;
    b = yMean - a*xMean

    //Putting the values in the DOM so they can be used later in the future-form
    document.getElementById('angular').innerHTML = a
    document.getElementById('linear').innerHTML = b

    //It verifies the signal of the linear coefficient to print the correct function at the end
    finalExpression = b > 0 ? `Y(x) = ${a.toFixed(2)}X + ${b.toFixed(2)}` : 
                              `Y(x) = ${a.toFixed(2)}X - ${-b.toFixed(2)}`
    
    //Output
    document.getElementById('correlation-result').innerHTML = `Função de Correlação: ${finalExpression}
    <br> Grau de Correlação: ${r.toFixed(2)} <br> Tipo de Correlação: ${rType}`
    document.getElementById('correlation-result').style = "border: solid; width: 400px; margin: auto;"

    correlationChart(finalExpression, a, b, points, xValues, xName, yName);

    // document.getElementByClassName('chart-container').style = 'border: solid'
    document.getElementById('future-form').style = "display: ''"

    return false
}

/**
 * It verifies the how correlated the variables are.
 * @param {Number} r Correlation coefficient
 */
function correlationVerifier(r) {   
        if(r == 1) return 'Perfeita positiva';            
        if(r == -1) return 'Perfeita negativa';            
        if(r == 0) return 'Variáveis não correlacionadas';           
        if(0 < Math.abs(r) && Math.abs(r) < 0.3) return 'Fraca';            
        if(0.3 < Math.abs(r) && Math.abs(r) < 0.7) return 'Moderada'            
        if(0.7 < Math.abs(r) && Math.abs(r) < 1) return 'Forte';            
}