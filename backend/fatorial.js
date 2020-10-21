function fatorial(n) {
    if (n < 0) return 'Não é possível calcular o fatorial de um número negativo'
    if (n <= 1) return 1
    if (n > 1) return n*fatorial(n-1) 
}

function combination(n, k) {
    return fatorial(n)/(fatorial(k)*fatorial(n-k))
}