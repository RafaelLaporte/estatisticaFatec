function funcao(){   
let varValue = document.getElementById("varValue").value;
let varType = document.querySelector('input[name="varType"]:checked').value;
let dataList = varValue.split(/\s*;\s*/); //isolates each value
dataList.sort((a, b) => a < b ? -1 : a > b ? 1 : 0) //organizes by crescent order
var testObject = {}
dataList.forEach(i => {
    !(i in testObject) ? testObject[i] = 1 :  testObject[i] += 1 //counter
});
console.log(testObject);
}

