function btnUniform() {

    let min = Number(document.getElementById('varMin').value);
    let max = Number(document.getElementById('varMax').value);
    let value = Number(document.getElementById('varValue').value);
    let valueMax = Number(document.getElementById('varValueMax').value);
    let type = document.getElementById('uniformValues-select').value;

    if (value < min || value > max){
      document.getElementById('result').innerHTML = `
      O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`
    } 
    else if (max <= min){
      document.getElementById('result').innerHTML = 
      `O valor mínimo da distribuição deve ser menor que o valor máximo da distribuição`
    } 
    else if (type == 'between'){

      if(valueMax < value){
        document.getElementById('result').innerHTML = 
        `O valor mínimo do intervalo deve ser menor que o valor máximo do intervalo`
      } 
      if(valueMax < min || valueMax > max){
        document.getElementById('result').innerHTML = `
        O valor a ser analisado deve se encontrar no intervalo [min, max] estabelecido`
      }
    }
    else {
        
        let probability
        let distribution = 1/(max - min);
        let minProbability = (max - value)*distribution;
        let maxProbability = (value - min)*distribution;
        let probabilityBetween = (valueMax - value)*distribution;       
        let mean = (min + max)/2
        let standardDeviation = Math.sqrt(Math.pow(max - min, 2)/12);
        let variance = standardDeviation/mean

        if(type == 'higherThan') probability = (minProbability*100).toFixed(2)
        if(type == 'lessThan') probability = (maxProbability*100).toFixed(2)
        if(type == 'between') probability = (probabilityBetween*100).toFixed(2)


        probabilityElements()
        document.getElementById('result').innerHTML = ``
        document.getElementById('probability').innerHTML = `Probabilidade: ${probability}%`
        document.getElementById('mean').innerHTML = `Média: ${mean}`
        document.getElementById('standard-deviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
        document.getElementById('variance').innerHTML = `Variância: ${(variance*100).toFixed(2)}`
    }

    return false
}