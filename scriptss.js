document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('sip-chart', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Systematic Investment Plan (SIP) Growth Chart'
        },
        xAxis: {
            categories: Array.from({length: 15}, (_, i) => i + 1),
            title: {
                text: 'Years'
            }
        },
        yAxis: {
            title: {
                text: 'Growth Value'
            }
        },
        series: [{
            name: 'Future Value',
            data: [0, 10000, 25000, 50000, 75000, 100000, 150000, 200000, 300000, 400000, 600000, 800000, 1000000, 1200000, 1995416]
        }, {
            name: 'Total Invested',
            data: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 900000]
        }]
    });
});