(function ($) {
    $(document).on('ready', function () {
        var chart;
        var data = {
            labels: [
                new Date('2020-08-01'),
                new Date('2020-08-05'),
                new Date('2020-08-10'),
                new Date('2020-08-15'),
                new Date('2020-08-20'),
                new Date('2020-08-25'),
                new Date('2020-08-30')
            ],
            datasets: [
            {
                type: 'bar',
                backgroundColor: '#008000',
                label: '냉방',
                data: [
                    {x: new Date('2020-08-01'), y: 4},
                    {x: new Date('2020-08-02'), y: 10},
                    {x: new Date('2020-08-03'), y: 14}
                ]
            }, {
                type: 'bar',
                backgroundColor: '#444bf8',
                label: '조명',
                data: [
                    {x: new Date('2020-08-01'), y:3},
                    {x: new Date('2020-08-02'), y:4},
                    {x: new Date('2020-08-03'), y: 5}
                ]
            }, {
                type: 'bar',
                backgroundColor: '#2cd2f6',
                label: '수송',
                data: [
                    {x: new Date('2020-08-01'), y:1},
                    {x: new Date('2020-08-02'), y:3},
                    {x: new Date('2020-08-03'), y: 3}
                ]
            }, {
                type: 'bar',
                backgroundColor: '#00ed96',
                label: '쇼케이스',
                data: [
                    {x: new Date('2020-08-01'), y:0},
                    {x: new Date('2020-08-02'), y:1},
                    {x: new Date('2020-08-03'), y: 5}
                ]
            }, {
                type: 'bar',
                backgroundColor: '#f3f5fb',
                label: '기타',
                data: [
                    {x: new Date('2020-08-01'), y:1},
                    {x: new Date('2020-08-02'), y:3},
                    {x: new Date('2020-08-03'), y: 3}
                ]
            }, {
                type: 'line',
                data: [
                    {x: new Date('2020-08-01'), y: 0},
                    {x: new Date('2020-08-30'), y: 250}
                ],

                borderColor: '#dfcd9d',
                backgroundColor: 'rgba(223, 205, 157, .1)',

                pointBackgroundColor: '#dfcd9d',
                pointRadius: 1,
            }]
        };
        var options = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    stacked: true
                }],
                yAxes: [{
                    //id: "bar-y-axis",
                    stacked: true,
                    display: true, //optional
                    type: 'linear'
                }]
            },
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    id: 'upperLimit_hline1',
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: '180',
                    borderColor: 'red',
                    borderWidth: 2,
                    label: {
                        backgroundColor: '#ffffff',
                        fontColor: 'red',
                        fontSize: 10,
                        fontFamily: "sans-serif",
                        position: 'left',
                        xPadding: 6,
                        yPadding: 6,
                        content: '경영 계획',
                        enabled: true
                    },
                }]
            }
        };

        $('.js-monthly-chart').each(function (i, el) {
            chart = new Chart(el, {
                type: 'bar',
                data: data,
                options: options
            });

            window.monthlyChart = chart;

            $(el).addClass('initialized');
        });
    });
})(jQuery);
