function funcao() {   

    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
<<<<<<< HEAD
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
=======
    let dataList = varValue.split(/\s*;\s*/); //isolates each value

    console.log(dataList);
    if (varType == "Quantitativa Discreta" || "Quantitativa Contínua") {
        for (i = 0; i < dataList.length; i++) {
            dataList[i] = Number(dataList[i]);
        }
        dataList.sort((a,b)=> a - b);
    }  else{
        dataList.sort() //organizes by crescent order
    }

    console.log(dataList);
    var testObject = {}
    dataList.forEach(i => {
        !(i in testObject) ? testObject[i] = 1 :  testObject[i] += 1 //counter
        //testObject[i] = !(testObject[i]) ? testObject[i] = 1 : testObject[i] +=1
    });
    console.log(testObject);
>>>>>>> 112be84bdfe7f8d723aeec4174eff165fa7b2428
}