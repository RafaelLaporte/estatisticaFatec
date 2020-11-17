/**
 * It prints on HTML the descriptive statistical output
 * @param {Object} variable Descriptive variable's data
 * @param {Booelan} btnOrganize Verifies if the calculation was pushed
 */



function btnSearch(){

    let variable = readInput();
    let input = Number(document.getElementById("search-value").value)

    //Organizing the frequencies by crescent order
    quickSort(variable.data, (a,b) => {
        if (a.fi == b.fi) {
            return a.value < b.value
        } else {
            return a.fi < b.fi
        }
    });


    let search = binarySearch(variable.data, input, (obj, busca) => {
        if(obj.value === busca) return 0
        else if(busca < obj.value) return -1
        else return 1
    })

    console.log(variable.data[search])

    document.getElementById('search-result').style = 'display:""'
    document.getElementById('search-result-value').innerHTML = `Posição: ${search}`
    document.getElementById('search-result-fi').innerHTML = `Frequência simples: ${variable.data[search].fi}`
    document.getElementById('search-result-percentualFi').innerHTML = `Frequência simples (%): ${variable.data[search].percentualFi} %`
    document.getElementById('search-result-fac').innerHTML = `Frequência Acumulada: ${variable.data[search].fac}`
    document.getElementById('search-result-percentualFac').innerHTML = `Frequência Acumulada(%): ${variable.data[search].percentualFac}`
}