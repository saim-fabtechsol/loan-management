$(document).ready(function () {
    $(".tem-bar-btn").click(function () {
        $(".template-left").toggle();
    });
});


const ctx = document.getElementById('myChart');
const linecolor = 'rgba(140, 87, 255, 1)';
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [0, 10, 5, 15, 11, 20],
            borderWidth: 2,
            borderColor: linecolor,
            pointRadius: 0,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false  // Disable the legend
            }
        },
        scales: {

            x: {
                ticks: {
                    display: false
                },
                border: {
                    display: false,
                    dash: [7],
                }
            },
            y: {
                display: false,
                beginAtZero: true
            }
        }
    }
});



const ctx2 = document.getElementById('total-loan-graph').getContext('2d');
const linecolor1 = 'rgba(11, 178, 212, 1)';
const fillgradient = ctx2.createLinearGradient(0, 0, 600, 0);
fillgradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
fillgradient.addColorStop(1, 'rgba(11, 178, 212, 0.8)');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'],
        datasets: [{
            label: 'Amount in $',
            data: [20, 110, 80, 80, 150, 150, 145, 300],
            borderWidth: 1,
            fill: true,
            tension: 0.2,
            backgroundColor: fillgradient,
            pointRadius: 0,
            pointHoverRadius: 5,
            borderColor: linecolor1,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                ticks: {
                    stepSize: 100,
                    callback: function (value, index, ticks) {
                        return '$' + value;
                    }
                },
                border: {
                    display: false,
                    dash: [7],
                },
                beginAtZero: true,
            }
        }
    }
});


