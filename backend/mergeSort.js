//MELHORAR ESCRITA DESTE MERGESORT (TROCAR PARA INGLÊS).

function mergeSort(vetor){
    function mesclaValores(vetEsq, vetDir){
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            if (vetEsq[posEsq] < vetDir[posDir]){
                vetRes.push(vetEsq[posEsq])
                posEsq++
            } else {
                vetRes.push(vetDir[posDir]) 
                posDir++           
            }
        }
    
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
        else sobra = vetDir.slice(posDir)

        return vetRes.concat(sobra)
    }   

    if(vetor.length > 1){
        let meio = Math.floor(vetor.length / 2);
        let vetEsq = vetor.slice(0, meio);
        let vetDir = vetor.slice(meio);
        vetEsq = mergeSort(vetEsq);
        vetDir = mergeSort(vetDir);
        let vetorFinal = mesclaValores(vetEsq, vetDir);
        return vetorFinal
    }
    
    return vetor
}