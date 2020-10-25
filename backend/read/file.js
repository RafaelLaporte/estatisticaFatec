function readFile(btnOrganize = false) {
    //Resets when click on the button
    resetDescriptive(btnOrganize);

    let input = document.getElementById('input-file');
    let file = input.files[0];
    
    if ((file.name).slice(file.name.length - 3) != 'csv') {
        document.getElementById('explanation').innerHTML = 'Formato de arquivo inválido.'
    }

    else if (file) {
        let reader = new FileReader()
        reader.readAsText(file);

        reader.onload = function() {
            let variable = inputReader(reader.result)

            if (btnOrganize) {
                quickSort(variable.data, (a,b) => {
                    if (a.fi == b.fi) {
                        return a.value < b.value
                    } else {
                        return a.fi < b.fi
                    }
                });
            }
            
            //Generates the frequencies table
            generateTable(variable);

            //Generates the variable graphs
            createChart(variable.type);

            //Generates Mean, Mode and Median
            statisticalVariables(variable, btnOrganize);
        }
    }

    return false
}