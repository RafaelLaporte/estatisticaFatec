// arrumar verificação de valores 

function btnBinomial() {
    let p = Number(document.getElementById('sucess').value); //Sucess rate
    let n = Number(document.getElementById('sample').value); //Sample Length
    let data = document.getElementById('ocurrences').value; //Number of ocurrences desired
    let verifier = 0

    data = organize(data)

    probabilityElements();

    verifier = verification(p, n, verifier)

    // if(verifier != 0) document.getElementById('result').innerHTML = `${result}`
    if (verifier == 0 && data.length == 1) {

        k = Number(data[0])

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

        console.log(mean)


        document.getElementById('probability').innerHTML = `Probabilidade de se obter ${k} eventos: ${(probability*100).toFixed(4)}%`
        document.getElementById('minimum-probability').innerHTML = `Probabilidade de se obter no mínimo ${k} eventos: ${(minProbability*100).toFixed(4)}%`
        document.getElementById('maximum-probability').innerHTML = `Probabilidade de se obter no máximo ${k} eventos: ${(maxProbability*100).toFixed(4)}%`
        document.getElementById('mean').innerHTML = `Média: ${mean.toFixed(4)}`
        document.getElementById('standardDeviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
    }

    if(data.length > 1){

      
        p = (p/100); //Turning percentage in decimal

        let q = 1 - p //Failure rate
        let probability = 0
        data.forEach(k => {

            k = Number(k)

            probability += combination(n,k)*Math.pow(p, k)*Math.pow(q, n-k)


        })

        let mean = n*p //Mean calculation
        let standardDeviation = Math.sqrt(n*p*q) //Standard Deviation calculation

        document.getElementById('probability').innerHTML = `Probabilidade: ${(probability*100).toFixed(2)} %`
        document.getElementById('mean').innerHTML = `Média: ${mean.toFixed(4)}`
        document.getElementById('standardDeviation').innerHTML = `Desvio Padrão: ${standardDeviation.toFixed(2)}`
    }

    return false
}

function verification(p, n, verifier){

    let probability = 0
    let result

    // for(i = 0; i < data.length; i++){

    //     if(isNaN(data[i])) verifier = 1

    //     if(data[i] > n) verifier = 2

    //     k = Number(data[i])

    //     probability += combination(n,k)*Math.pow(p, k)*Math.pow(q, n-k)
    // }


    if(p > 100 || p < 0) verifier = 3

    if(n < 0 || Number.isInteger(n) == false) verifier = 4

    if(probability > n) verifier = 5

    switch(verifier){
        case(verifier == 0):
        result = 0;
            break;
        case(verifier == 1):
        result = 'Insira somente números como eventos';
            break;
        case(verifier == 2):
        result = 'A probabilidade de ocorrência deve ser um número entre 0 e 100'
            break;
        case(verifier == 3):
        result =  'O tamanho da amostra deve ser um número inteiro positivo.'
            break;
        case(verifier == 4):
        result =  'O número de ocorrências deve ser um número inteiro menor ou igual ao tamanho da amostra'
            break;
        case(verifier == 5):
        result = 'O número de eventos deve ser menor que o tamanho da amostra'
            break;
        default: 
        result = 0; 
    }

    console.log(result)
    console.log(verifier)


    return result
}