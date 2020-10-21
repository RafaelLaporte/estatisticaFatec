function btnBinomial() {

    document.getElementById('result').innerHTML = ''
    let verifier = 0

    let p = Number(document.getElementById('sucess').value); //Sucess rate
    let n = Number(document.getElementById('sample').value); //Sample Length
    let k = Number(document.getElementById('ocurrences').value); //Number of ocurrences desired

    if (p > 100 || p < 0) document.getElementById('result').innerHTML = '<br> O chance de Sucesso deve ser um número entre 0 e 100'
    else verifier++

    if (n < 0 || Number.isInteger(n) == false) document.getElementById('result').innerHTML += '<br> O tamanho da amostra deve ser um número inteiro positivo.'
    else verifier++

    if (k > n) document.getElementById('result').innerHTML += '<br> O número de ocorrências deve ser um número inteiro menor ou igual ao tamanho da amostra'
    else verifier++
    
    if (verifier == 3) {
        p = (p/100); //Turning percentage in decimal

        let q = 1 - p //Failure rate
        let probability = 0 //Probability desired

        for(i = k; i <= n; i++) {
            console.log(`Combinação de ${n} e ${i}: ${combination(n,i)}`);
            console.log(probability);
            probability += combination(n, i)*Math.pow(p, i)*Math.pow(q, n-i)
        }

        let mean = n*p //Mean calculation
        let standardDeviation = Math.sqrt(n*p*q).toFixed(2) //Standard Deviation calculation
      
        document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(2)}%`
        document.getElementById('mean').innerHTML = `Média: ${mean}`
        document.getElementById('standard-deviation').innerHTML = `Devio Padrão: ${standardDeviation}`
    }
}