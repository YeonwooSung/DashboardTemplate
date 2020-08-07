(function ($) {
    $(document).on('ready', function () {
        var chart;
        var data = {
            labels: [
                new Date('2020-08-03 5:00'),
                new Date('2020-08-03 6:00'),
                new Date('2020-08-03 7:00'),
                new Date('2020-08-03 8:00'),
                new Date('2020-08-03 9:00'),
                new Date('2020-08-03 10:00'),
                new Date('2020-08-03 11:00'),
                new Date('2020-08-03 12:00'),
                new Date('2020-08-03 13:00'),
                new Date('2020-08-03 14:00'),
                new Date('2020-08-03 15:00'),
                new Date('2020-08-03 16:00'),
                new Date('2020-08-03 17:00'),
                new Date('2020-08-03 18:00'),
                new Date('2020-08-03 19:00'),
                new Date('2020-08-03 20:00'),
                new Date('2020-08-03 21:00'),
                new Date('2020-08-03 22:00'),
                new Date('2020-08-03 23:00'),
            ],
            datasets: [{
                label: '전력 데이터',
                backgroundColor: [
                    'red',
                    'red',
                    'green',
                    'green',
                    'green',
                    'orange',
                    'yellow',
                    'green',
                    'green',
                    'lightgreen',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb',
                    '#f3f5fb'
                ],
                data: [
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                ]
            }],
        };
        var options = {
            legend: false,
            circumference: 1 * Math.PI,
            rotation: 1 * Math.PI,
            cutoutPercentage: 80,
            scales: {
                xAxes: [{
                    type: 'time',
                    gridLines: {
                        display: false, // make x axis invisible
                    },
                }],
            },
        };

        $('.js-gauge-chart').each(function (i, el) {
            chart = new Chart(el, {
                type: 'doughnut',
                data: data,
                options: options
            });

            window.gaugeChart = chart;

            $(el).addClass('initialized');
        });
    });
})(jQuery)