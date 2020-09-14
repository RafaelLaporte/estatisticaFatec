//Generate Charts
function createChart(varType) {
    let ctx = document.getElementById('chart').getContext('2d');

    if(window.bar != undefined)
        window.bar.destroy();

    let type = '';
    let labelsList = [];
    let valuesList = [];
    let percentage = [];
    let backgroundColor = ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Pink', 'Turquoise', 'Black', 'mauve', 
    'steelblue', 'bisque', 'forestgreen', 'maroon'];

    $('tbody td:nth-child(1)').each(function (index) {
        let label = ($(this).text())
        labelsList.push(label);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let value = ($(this).text())
        valuesList.push(Number(value));
    });

    $('tbody td:nth-child(3)').each(function (index) {
        let value = ($(this).text())
        percentage.push(value);
    });

    ["qualitativaNominal", "qualitativaOrdinal"].includes(varType) ? type = 'pie': type = 'bar'

    window.bar = new Chart(ctx, {
        type: type,
        data: {
            labels: labelsList,
            datasets: [{
                label: 'Representação Gráfica',
                data: valuesList,
                backgroundColor: backgroundColor,
                borderWidth: 0,
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)'
            }]
        },

            options: chartOptions(varType, percentage)
    });
}