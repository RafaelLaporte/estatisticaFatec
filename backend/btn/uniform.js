function btnUniform() {

    //Reset variables
    document.getElementById('uniform-result').innerHTML = ''
    document.getElementById('probability-values').innerHTML = ''

    //alterar nomes confusos de variáveis (max e valueMax)
    let min = Number(document.getElementById('uniform-min').value);
    let max = Number(document.getElementById('uniform-max').value);
    let value = Number(document.getElementById('uniform-value-min').value);
    let valueMax = Number(document.getElementById('uniform-value-max').value);
    let type = document.getElementById('uniform-select').value;

    if (max <= min){
        document.getElementById('uniform-result').innerHTML = 
        `O valor mínimo da distribuição deve ser menor que o seu máximo`
    } 

    else if (value < min || value > max){
        document.getElementById('uniform-result').innerHTML = `
        O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`
    }

    else {
        let probability

        let distribution = 1/(max - min);
        let mean = (min + max)/2
        let standardDeviation = Math.sqrt(Math.pow(max - min, 2)/12);
        let variance = standardDeviation/mean

        if (type == 'between') {
            if (valueMax < min || valueMax > max) {
                document.getElementById('uniform-result').innerHTML = `
                O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`
            }
    
            else if(valueMax < value) {
                document.getElementById('uniform-result').innerHTML = 
                `O valor mínimo do intervalo deve ser menor que seu valor máximo`
            }

            else probability = (valueMax - value)*distribution
        } 

        if(type == 'higherThan') probability = (value - min)*distribution
        if(type == 'lesserThan') probability = (max - value)*distribution

        if(probability) {
            probabilityElements()
            document.getElementById('uniform-result').innerHTML = ``
            document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(2)}%`
            document.getElementById('mean').innerHTML = `Média: ${mean}`
            document.getElementById('standardDeviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
            document.getElementById('variance').innerHTML = `Variância: ${(variance*100).toFixed(2)}%`
        }
    }

    return false
}