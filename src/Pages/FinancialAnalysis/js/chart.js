import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export default function chart() {
    const datasets = [
    {
        data: [10, 20, 50, 70, 30, 40, 50, 90, 50, 20, 60, 70, 50, 20, 30],
        borderColor: "blue",
        fill: false,
        radius: 0,
        borderWidth: 1,
        yAxisID: 'expenses',
    },
    {
        data: [40, 50, 90, 50, 20, 60, 70, 10, 20, 50, 70, 200, 50, 70, 200],
        borderColor: '#FFC000',
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'cancellation',
    },
    {
        data: [50, 20, 70, 70, 70, 40, 50, 90, 50, 20, 60, 70, 50, 20, 30],
        borderColor: "#B2F162",
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'ordersRub',
    },
    {
        data: [60, 70, 190, 150, 120, 610, 70, 10, 20, 150, 170, 100, 10, 70, 200],
        borderColor: '#FF5959',
        fill: false,
        radius: 0,
        borderWidth: 1,
        yAxisID: 'ordersParts',
    },
    {
        data: [20, 70, 70, 700, 50, 40, 50, 90, 50, 20, 60, 70, 50, 20, 30],
        borderColor: "#3182CC",
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'expensesCPO',
    },
    {
        data: [240, 320, 120, 150, 420, 760, 710, 110, 20, 70, 70, 700, 50, 70, 200],
        borderColor: '#ACD0D2',
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'expensesCPM',
    }
    ,
    {
        data: [240, 320, 120, 150, 350, 760, 790, 110, 60, 60, 70, 700, 50, 70, 200],
        borderColor: '#00dce7',
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'zero',
    }
    ,
    {
        data: [240, 320, 180, 750, 420, 760, 710, 510, 20, 70, 70, 700, 50, 70, 200],
        borderColor: '#00ac72',
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'one',
    }
    ,
    {
        data: [240, 320, 120, 70, 70, 150, 420, 760, 710, 110, 20, 700, 50, 70, 200],
        borderColor: '#d46aba',
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'two',
    }
    ,
    {
        data: [280, 320, 20, 150, 70, 70, 900, 150, 170, 200, 420, 760, 710, 110, 20],
        borderColor: '#7500a3',
        fill: false,
        radius: 0,
        borderWidth: 0,
        yAxisID: 'three',
    }
]

const optionsCtx = {
    type: 'line',
    data: {
        labels: [
            '01.06',
            '02.06',
            '03.06',
            '04.06',
            '05.06',
            '06.06',
            '07.06',
            '08.06',
            '09.06',
            '10.06',
            '11.06',
            '12.06',
            '13.06',
            '14.06',
            '15.06',
        ],
        datasets
    },
    options: {
        responsive: true,
        scaleBeginAtZero: true,
        tension: 0.5,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            xAxes: {
                grid: {
                    color: 'white'
                },
                ticks: {
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    },
                },
            },
            expenses: {
                display: true,
                type: 'linear',
                position: 'left',
                grid: {
                    color: 'white',
                    borderColor: 'blue',
                },
                ticks: {
                    color: 'blue',
                    backdropColor: 'blue',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    },
                },
            },
            cancellation: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#FFC000',
                },
                ticks: {
                    color: '#FFC000',
                    textStrokeColor: '#FFC000',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            ordersRub: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#B2F162',
                },
                ticks: {
                    color: '#B2F162',
                    textStrokeColor: '#B2F162',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            ordersParts: {
                display: true,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#FF5959',
                },
                ticks: {
                    color: '#FF5959',
                    textStrokeColor: '#FF5959',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            expensesCPO: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#3182CC',
                },
                ticks: {
                    color: '#3182CC',
                    textStrokeColor: '#3182CC',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            expensesCPM: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: ' #ACD0D2',
                },
                ticks: {
                    color: ' #ACD0D2',
                    textStrokeColor: ' #ACD0D2',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            zero: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#00dce7',
                },
                ticks: {
                    color: '#00dce7',
                    textStrokeColor: '#00dce7',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            one: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#00ac72',
                },
                ticks: {
                    color: '#00ac72',
                    textStrokeColor: '#00ac72',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            two: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#d46aba',
                },
                ticks: {
                    color: '#d46aba',
                    textStrokeColor: '#d46aba',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
            three: {
                display: false,
                type: 'linear',
                position: 'right',
                grid: {
                    color: 'white',
                    borderColor: '#7500a3',
                },
                ticks: {
                    color: '#7500a3',
                    textStrokeColor: '#7500a3',
                    font: {
                        size: 10,
                        family: 'Montserrat',
                    }
                }
            },
        }
    }
}

// Экземпляр класса_______________

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, optionsCtx);

// Перерисовка графика_____________

function draw() {
    myChart.destroy();
    myChart = new Chart(ctx, optionsCtx)
}


window.addEventListener("resize", draw) // Перерисовка графика при смене размера окна
}
