//Generate Charts
function createChart(varType) {
    let ctx = document.getElementById('chart').getContext('2d');

    if(window.bar != undefined)
        window.bar.destroy();

    let type = '';
    let labelsList = [];
    let valuesList = [];
    let backgroundColor = ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Pink', 'Turquoise', 'Black'];

    $('tbody td:nth-child(1)').each(function (index) {
        let label = ($(this).text())
        labelsList.push(label);
    });

    $('tbody td:nth-child(2)').each(function (index) {
        let value = ($(this).text())
        valuesList.push(Number(value));
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
                borderWidth: 1
            }]
        },
            options: {
                legend: {
                    display: true
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem) {
                               return tooltipItem.yLabel;
                        }
                     }
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
    });
}