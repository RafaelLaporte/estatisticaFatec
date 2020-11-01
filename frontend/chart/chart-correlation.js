function correlationChart(finalExpression, b, a, points, xTeste) {

    let ctx = document.getElementById('chart-correlation').getContext('2d');

    if(window.bar != undefined) window.bar.destroy();

    let fct = []

    let minValue = Math.floor(Math.min(...xTeste) - 1)
    let maxValue = Math.floor(Math.max(...xTeste) + 1)

    for (i= minValue; i < maxValue; i ++) {
        fct.push({
            x: i,
            y: b*i + a
        })
    }

    let data = { 
        datasets: [{
            label: finalExpression,
            data: fct,
            borderColor: "Black",
            pointRadius: 0,
            fill: false,
            type: 'line'
        }, 
        {
            data: points,
            pointBackgroundColor: 'Red',
            pointRadius: 5,
            fill: false,
            showLine: false,
        }]
    }

    window.bar = new Chart(ctx, {
        type: 'line',
        data: data,
        options: { 
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        min: Math.floor(Math.min(a))
                    }
                }],
                xAxes: [{
                    type: 'linear',
                    ticks: {
                        min: Math.floor(Math.min(...xTeste)),
                    }
                }]
            }
        }
    });
}