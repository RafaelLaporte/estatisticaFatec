function start() {
    document.getElementById('varName').addEventListener("input", () => {
        document.querySelectorAll('input[name="varType"]').forEach(radio => {
            radio.disabled = false;
        });
    });

    document.querySelectorAll('input[name="varType"]').forEach(radio => {
        radio.addEventListener("change", () =>{
            document.getElementById("varValue").disabled = false
        });
    });

    document.getElementById('varValue').addEventListener("input", () => {
        document.querySelectorAll('input[name="varScope"]').forEach(radio => {
            radio.disabled = false
        });
    });
}

function calculate() {   
    let varName = document.getElementById('varName').value;

    if (varName.length == 0) {
        alert("Por favor, preencha todos os campos corretamente");
    } else {

        //Reading Variables
        let varValue = document.getElementById('varValue').value;
        let varType = document.querySelector('input[name="varType"]:checked').value;
        //let varScope = document.querySelector('input[name="varScope"]:checked').value;
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


        //Counting
        dataList.forEach(key => {
            !(key in valuesQuantity) ? valuesQuantity[key] = 1 :  valuesQuantity[key] += 1
        });


        //Generating Tables
        document.getElementById("tabela").innerHTML += `<tr>
            <th>Nome da Variável</th>
            <th>Frequência</th>
            </tr>`

        for (key in valuesQuantity) {
            document.getElementById("tabela").innerHTML += `<tr>
            <td>${key}</td>
            <td>${valuesQuantity[key]}</td>
            </tr>`
        }

        if (varType == "Quantitativa Ordinal") {
            document.getElementById("moveRows").innerHTML += `<p>Selecione a linha e use os botões a seguir para 
                                                                move-las.</p>`
            document.getElementById("moveRows").innerHTML += `<button onlick='moveRows()'>&#x21E7</button>`
            document.getElementById("moveRows").innerHTML += `<button onlick='moveRows()'>&#x21E8</button>`
        } 
    }   
}
