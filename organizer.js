function funcao() {   

    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;
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
}