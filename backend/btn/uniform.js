function btnUniform() {

    let min = Number(document.getElementById('varMin').value);
    let max = Number(document.getElementById('varMax').value);
    let value = Number(document.getElementById('varValue').value);

    if (value < min || value > max) document.getElementById('result').innerHTML = `
    O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`

    else {
        let distribution = 1/(max - min);
        let minProbability = (max - value)*distribution;
        let maxProbability = (value - min)*distribution;
        let probability = value*distribution;
        let mean = (min + max)/2
        let standardDeviation = Math.sqrt(Math.pow(max - min, 2)/12);
        let variance = standardDeviation/mean

        probabilityElements()

        // document.getElementById('probability').innerHTML = `Probabilidade de se obter o valor ${value}: ${(probability*100).toFixed(2)}%`
        document.getElementById('minimum-probability').innerHTML = `Probabilidade de se obter no mínimo ${value}: ${(minProbability*100).toFixed(2)}%`
        document.getElementById('maximum-probability').innerHTML = `Probabilidade de se obter no máximo ${value}: ${(maxProbability*100).toFixed(2)}%`
        document.getElementById('mean').innerHTML = `Média: ${mean}`
        document.getElementById('standard-deviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
        document.getElementById('variance').innerHTML = `Variância: ${(variance*100).toFixed(2)}`
    }

    return false
}