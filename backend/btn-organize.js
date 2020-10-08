//The median and measure of position can't be different by ordering the table.
function btnOrganize() {
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

    //From here, we are updating all values in html.
    btnCalculate(variable);
}