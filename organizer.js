function funcao() {   

    let varValue = document.getElementById('varValue').value;
    let varType = document.querySelector('input[name="varType"]:checked').value;

    let dataList = [1,10,5,20,30,5,8,7,6]
    //varValue.split(/\s*;\s*/); //isolates each value

    console.log(dataList);

    dataList.sort((a, b) => a < b ? -1 : a > b ? 1 : 0) //organizes by crescent order

    console.log(dataList);

    dataList.sort((a,b) => b - a);

    console.log(dataList);

    var testObject = {}
    dataList.forEach(i => {
        !(i in testObject) ? testObject[i] = 1 :  testObject[i] += 1 //counter
    });
    //console.log(testObject);
}