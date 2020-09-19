function chartOptions(varType, percentage) {

    if (varType === "quantitativaContinua") {
        let options = {
                plugins: {
                    labels: {
                        render: (args) => {return percentage[args.index]},
                        position: 'outside',
                        fontStyle: 'bold'
                    }
                },
        
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
                        },
                    }],
                    xAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 1.0
                    }]
                }
            }

            return options
        }

    if (varType === 'quantitativaDiscreta') {
        let options = {
            plugins: {
                labels: {
                    render: (args) => {return percentage[args.index]},
                    position: 'outside',
                    fontStyle: 'bold'
                }
            },
    
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
                }],
            }
        }

        return options
    }

    if(varType === 'qualitativaNominal' || varType === 'qualitativaOrdinal') {
        let options = {
                plugins: {
                    labels: {
                        render: (args) => {return percentage[args.index]},
                        position: 'outside',
                        fontStyle: 'bold'
                    }
                },

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

            return options
    }
}