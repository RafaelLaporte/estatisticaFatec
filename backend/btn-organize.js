function btnOrganize() {

    let dataType = document.getElementById('import-select').value;
    
    if (dataType == 'file') readFile(true)
    
    else {
        //Read the necessary values
        let variable = inputReader();

        //Organizing the fi's by crescent order
        quickSort(variable.data, (a,b) => {
            if (a.fi == b.fi) {
                return a.value < b.value
            } else {
                return a.fi < b.fi
            }
        });

        //From here, we are updating all values in html. The median and measures of position can't change by ordering.
        btnCalculate(variable, true);
    }
}