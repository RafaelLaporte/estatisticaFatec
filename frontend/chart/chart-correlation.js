function correlationChart(finalExpression, b, a, points, xValues) {

    let ctx = document.getElementById('chart-correlation').getContext('2d');

    if(window.bar != undefined) window.bar.destroy();

    let fct = []

    let minValue = Math.floor(Math.min(...xValues) - 1)
    let maxValue = Math.floor(Math.max(...xValues) + 1)

    for (i = minValue; i < maxValue; i ++) {
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
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    scaleLabel:{
                        display: true,
                        labelString: 'Y'
                    },
                    ticks: {
                        //min: Math.floor(a) - 10,
                        //max: Math.floor(b*maxValue + a) + 12
                    }
                }],
                xAxes: [{
                    type: 'linear',
                    scaleLabel:{
                        display: true,
                        labelString: 'X'
                    },
                    ticks: {
                       // min: minValue,
                        //max: maxValue
                    }
                }]
            }
        }
    });
}