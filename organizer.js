function funcao() {   

    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
    let dataList = varValue.split(/\s*;\s*/); 

    let valuesQuantity = {};

    if (["Quantitativa Discreta", "Quantitativa Contínua"].includes(varType)) {
        for (i = 0; i < dataList.length; i++) {
            dataList[i] = Number(dataList[i]);
        }
        dataList.sort((a,b) => a - b);
    } else {
        dataList.sort();
    }

    
    dataList.forEach(key => {
        !(key in valuesQuantity) ? valuesQuantity[key] = 1 :  valuesQuantity[key] += 1
    });

    console.log(valuesQuantity);
}