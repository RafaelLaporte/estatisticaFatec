function correlation() {

    //Reading data
    let xValues = organize(document.getElementById('xValues').value);
    let yValues = organize(document.getElementById('yValues').value);

    //Declaring Variables
    let N = xValues.length
    let xMean = 0
    let yMean = 0

    let points = []
    let xTeste = []

    // y = b.x + a + e
    let b = 0
    let a = 0
    let finalExpression
    let cima = 0
    let baixo = 0

    //Generating the means
    for (i = 0; i < N; i++) {
        xTeste.push(Number(xValues[i]))
        xMean += Number(xValues[i]);
        yMean += Number(yValues[i]);
        points.push({
            x: Number(xValues[i]),
            y: Number(yValues[i])
        })
    }

    xMean = xMean/N
    yMean = yMean/N

    //Calculating the coeficients
    for (i = 0; i < N; i++) {
        cima += (Number(xValues[i]) - xMean)*(Number(yValues[i]) - yMean)
        baixo += Math.pow((Number(xValues[i]) - xMean),2)
    }

    b = cima/baixo;
    a = yMean - b*xMean

    finalExpression = a > 0 ? `y(x) = ${b.toFixed(3)}x + ${a.toFixed(3)}` : `y(x) = ${b.toFixed(3)}x - ${-a.toFixed(3)}`
    
    document.getElementById('correlation-result').innerHTML = finalExpression

    correlationChart(finalExpression, b, a, points, xTeste);
    //chartTest(finalExpression, b, a, points, xTeste);

    return false
}