function btnBinomial() {
    document.getElementById('result').innerHTML = ''
    let verifier = 0

    let p = Number(document.getElementById('sucess').value); //Sucess rate
    let n = Number(document.getElementById('sample').value); //Sample Length
    let data = document.getElementById('ocurrences').value; //Number of ocurrences desired

    function organize(data) {
        //Creating the data array
        data = data.split(/\s*;\s*/);
    
        //Removing blank elements from input
        for (i = 0; i < data.length; i++) {
            if(isNaN(data[i])) verifier += 1
            if (data[i] === "") {
                data.splice(i,1);
                i--
            }
        }
    
        return data.length
    }

    let k = organize(data)

   

    if(verifier == 1) document.getElementById('result').innerHTML = 'Insira somente números como eventos'

    if (p > 100 || p < 0) document.getElementById('result').innerHTML = 'A probabilidade de ocorrência deve ser um número entre 0 e 100'
    else verifier++

    if (n < 0 || Number.isInteger(n) == false) document.getElementById('result').innerHTML += 'O tamanho da amostra deve ser um número inteiro positivo.'
    else verifier++

    if (k > n) document.getElementById('result').innerHTML += 'O número de ocorrências deve ser um número inteiro menor ou igual ao tamanho da amostra'
    else verifier++
    
    
    if (verifier == 3) {
        probabilityElements();

        p = (p/100); //Turning percentage in decimal

        let q = 1 - p //Failure rate
        let minProbability = 0 //Minimum probability desired
        let maxProbability = 0
        let probability = combination(n,k)*Math.pow(p, k)*Math.pow(q, n-k)

        for(i = k; i <= n; i++) {
            minProbability += combination(n, i)*Math.pow(p, i)*Math.pow(q, n-i)
        }
        
        maxProbability = 1 - minProbability + probability

        let mean = n*p //Mean calculation
        let standardDeviation = Math.sqrt(n*p*q) //Standard Deviation calculation
    
        document.getElementById('probability').innerHTML = `Probabilidade de se obter ${k} eventos: ${(probability*100).toFixed(4)}%`
        document.getElementById('minimum-probability').innerHTML = `Probabilidade de se obter no mínimo ${k} eventos: ${(minProbability*100).toFixed(4)}%`
        document.getElementById('maximum-probability').innerHTML = `Probabilidade de se obter no máximo ${k} eventos: ${(maxProbability*100).toFixed(4)}%`
        document.getElementById('mean').innerHTML = `Média: ${mean.toFixed(4)}`
        document.getElementById('standard-deviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
    }

    return false
}