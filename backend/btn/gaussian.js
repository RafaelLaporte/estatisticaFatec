// verificar valores
function btnGaussian() {
    let value = Number(document.getElementById('varValue').value);
    let valueMax = Number(document.getElementById('varValueMax').value);
    let standardDeviation = Number(document.getElementById('standard-deviation').value);
    let mean = Number(document.getElementById('mean-gaussian').value);
    let type = document.getElementById('gaussianValues-select').value;
    let probability
    let probabilityMax

    if(value >= valueMax) document.getElementById('gaussian-result').innerHTML = `O valor inicial deve ser menor que o valor final`

    probability = zScore(value, mean, standardDeviation)
    probabilityMax = zScore(valueMax, mean, standardDeviation)

    if(type == 'higherThan') probability = 1 - probability  
    if(type == 'between') probability = probabilityMax - probability
        
    probabilityElements()

    document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(4)}%`
 
    return false
}

function zScore(x, mean, standardDeviation) {
    let pi = Math.PI;
    z = (x - mean)/standardDeviation
    let result = 0

    for (n = 0; n < 50; n++) {
        result += Math.pow(-1, n)*Math.pow(z, 2*n+1)/(Math.pow(2,n)*fatorial(n)*(2*n+1))
    }

    return 0.5 + result/(Math.sqrt(2*pi))
}
