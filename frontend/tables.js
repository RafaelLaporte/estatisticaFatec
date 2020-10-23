//Creates a line in table containing the variable value, fi, percentualFi, fac and percentual Fac
function createLine(variable) {
    let lineContent = `
        <td>${variable.value}</td>
        <td>${variable.fi}</td>
        <td>${variable.percentualFi}</td>
        <td>${variable.fac}</td>
        <td>${variable.percentualFac}</td>
    `

    let line = document.createElement('tr')
    line.innerHTML = lineContent

    return line
}

//Creates the Table header
function createHeader(variable) {
    let headerContent = `
        <td>${variable.name}</td>
        <td>Frequência Simples(Fi)</td>
        <td>Frequência Simples % (Fi%)</td>
        <td>Frequência acumulada (Fac)</td>
        <td>Frequência acumulada % (Fac%)</td>
        </tr>
    `

    let header = document.createElement('tr')
    header.innerHTML = headerContent

    return header
}

function generateTable(variable) {
    let tableHead = document.createElement('thead');
    tableHead.id = 'table_head'
    let tableBody = document.createElement('tbody');
    tableBody.id = 'table_body'

    document.getElementById('results').appendChild(tableHead)
    document.getElementById('results').appendChild(tableBody)

    //Generates the organize button
    document.getElementById('btn-organize').innerHTML = `
    <button type="button" class="btn" onclick="btnOrganize()"> Ordenar por Fi </button>`

    //Generates the Table Style (CSS FILE LATER)
    let style = `table, th, td {border: 2px solid black; text-align: center; table-layout: auto; width: 50%;}`    
    document.getElementById("style").innerHTML = style;

    //Generates the Header.
    document.getElementById('table_head').appendChild(
        createHeader(variable)
    ); 

    //Generate all lines of the table.    
    variable.data.forEach(valueData => {
        document.getElementById("table_body").appendChild(
            createLine(valueData)
        ); 
    });

    //Create sortable property for qualitative ordinal variable.
    if (variable.type == "qualitativaOrdinal")  {
        document.getElementById("explanation").innerHTML = 
        "<b style='font-size: 20px;'>Clique e arraste para trocar a posição das linhas.</b>"

        //When change the lines of table, updates everything according.
        $('tbody').sortable({
            disabled: false,
            update: function () {
                let fi = readTable(2);
                let percentualFi = [];
                let fac = 0;
                let percentualFac = 0;

                //Takes all percentual Fi's removing the '%' symbol.
                $('tbody td:nth-child(3)').each(function (index) {
                    let value = $(this).text();
                    value = Number(value.slice(0, value.length - 1));
                    percentualFi.push(value);
                });
 
                //Updates fac
                $('tbody td:nth-child(4)').each(function (index) {
                    fac += fi[index];
                    $(this).text(fac);
                });

                //Updates percentualFac
                $('tbody td:nth-child(5)').each(function (index) {
                    percentualFac += percentualFi[index]
                    if (percentualFac > 99.5) percentualFac = 100;
                    $(this).text(`${percentualFac.toFixed(2)}%`)
                });  

                //Updates the median and measureOfPosition
                document.getElementById("measure").innerHTML = `Medida Separatriz: ${measuresOfPosition(variable.type, variable.measureType, variable.measurePart)}`
                document.getElementById("median").innerHTML = `Mediana: ${median(variable.type)}`

                //Updates the chart
                createChart(variable.type);
            }
        });      
    }
}