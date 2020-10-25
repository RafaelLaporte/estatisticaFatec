//Generate Charts
function createChart(varType) {

    // let graphTitle = document.createElement('div')
    // graphTitle.className = 'graph-title'
    // graphTitle.innerHTML = 'Gráfico:'
    // document.getElementById('results-title').appendChild(graphTitle);

    let ctx = document.getElementById('chart').getContext('2d');

    if(window.bar != undefined)
        window.bar.destroy();

    let type = '';
    let labelsList = readTable(1);
    let frequencies = readTable(2);
    let fiPercent = readTable(3);
    let backgroundColor = ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Pink', 'Turquoise', 'Orange', 
    'Darkblue', 'bisque', 'forestgreen', 'maroon'];

    varType == 'qualitativaOrdinal' ? type = 'pie': type = 'bar'

    window.bar = new Chart(ctx, {
        type: type,
        data: { 
            labels: labelsList,
            datasets: [{
                label: 'Representação Gráfica',
                data: frequencies,
                backgroundColor: backgroundColor,
                hoverBackgroundColor: '#d9dac0'
            }]
        },

            options: chartOptions(varType, fiPercent)
    });
}