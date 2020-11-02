function correlation() {
    //Reading data
    let xValues = organize(document.getElementById('xValues').value);
    let yValues = organize(document.getElementById('yValues').value);

    //Declaring Variables
    let N = xValues.length
    let xMean = 0
    let yMean = 0

    let points = []

    // y = b.x + a + e
    let b = 0
    let a = 0
    let finalExpression
    let topExpression = 0
    let bottomExpression = 0

    //Generating the means
    for (i = 0; i < N; i++) {
        //Turn the values into numbers
        xValues[i] = Number(xValues[i]);
        yValues[i] = Number(yValues[i]);

        //Calculating the sum for mean
        xMean += xValues[i];
        yMean += yValues[i];

        //Object of points
        points.push({
            x: xValues[i],
            y: yValues[i]
        })
    }

    xMean = xMean/N
    yMean = yMean/N

    //Calculating the coeficients
    for (i = 0; i < N; i++) {
        topExpression += (xValues[i] - xMean)*(yValues[i] - yMean)
        bottomExpression += Math.pow(xValues[i] - xMean,2)
    }

    b = topExpression/bottomExpression;
    a = yMean - b*xMean

    finalExpression = a > 0 ? `y(x) = ${b.toFixed(3)}x + ${a.toFixed(3)}` : 
                              `y(x) = ${b.toFixed(3)}x - ${-a.toFixed(3)}`
    
    document.getElementById('correlation-result').innerHTML = finalExpression

    correlationChart(finalExpression, b, a, points, xValues);
    //chartTest();

    return false
}