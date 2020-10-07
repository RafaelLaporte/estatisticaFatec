function btnOrganize() {
    //Read the necessary values
    let variable = inputReader();
    let fiList = [];
    let newData = []

    //Taking all the fi's
    for(object of variable.data) fiList.push(object.fi);

    //Organizing the fi's by crescent order
    fiList = mergeSort(fiList, (a,b) => a < b);

    //Making a newData object, where the the values were displayed by fi's crescent order.
    for(i = 0; i < fiList.length; i++) {
        for (j = 0; j < variable.data.length; j ++) {
            if(variable.data[j].fi == fiList[i]){
                newData.push(variable.data[j])
                variable.data.splice(j, 1);
                j--
            }
        }
    }

    //Updates the variable.data property
    variable.data = newData;

    //From here, we are updating all values in html.
    btnCalculate(variable);
}