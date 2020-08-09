(function ($) {
    $(document).on('ready', function () {
        var chart;
        var data = {
            datasets: [{
                type: 'line',
                labels: [
                    new Date('2020-08-03 9:00'),
                    new Date('2020-08-03 13:00'),
                    new Date('2020-08-03 17:00'),
                    new Date('2020-08-03 19:00')
                ],
                data: [
                    {x: new Date('2020-08-03 9:00'), y: 0.70}, 
                    {x: new Date('2020-08-03 9:10'), y:0.75}, 
                    {x: new Date('2020-08-03 9:20'), y:0.95}, 
                    {x: new Date('2020-08-03 9:30'), y:1.00},
                    {x: new Date('2020-08-03 9:40'), y:1.03},
                    {x: new Date('2020-08-03 9:50'), y:1.20},
                    {x: new Date('2020-08-03 10:00'), y:1.31},
                    {x: new Date('2020-08-03 10:10'), y:1.40},
                    {x: new Date('2020-08-03 10:20'), y:1.50},
                    {x: new Date('2020-08-03 10:30'), y:1.80},
                    {x: new Date('2020-08-03 10:40'), y:2.30},
                    {x: new Date('2020-08-03 10:50'), y:2.50},
                    {x: new Date('2020-08-03 11:00'), y:2.51},
                    {x: new Date('2020-08-03 11:10'), y:2.53},
                    {x: new Date('2020-08-03 11:20'), y:2.55},
                    {x: new Date('2020-08-03 11:30'), y:3.00},
                    {x: new Date('2020-08-03 11:40'), y:3.13},
                    {x: new Date('2020-08-03 11:50'), y:3.21},
                    {x: new Date('2020-08-03 12:00'), y:3.33},
                    {x: new Date('2020-08-03 12:10'), y:3.52},
                    {x: new Date('2020-08-03 12:20'), y:3.60},
                    {x: new Date('2020-08-03 12:30'), y:3.50},
                    {x: new Date('2020-08-03 12:40'), y:4.00},
                    {x: new Date('2020-08-03 12:50'), y:4.50},
                    {x: new Date('2020-08-03 13:00'), y:5.00},
                    {x: new Date('2020-08-03 13:10'), y:5.20},
                    {x: new Date('2020-08-03 13:20'), y:5.50},
                    {x: new Date('2020-08-03 13:30'), y:6.00},
                    {x: new Date('2020-08-03 13:40'), y:6.50},
                    {x: new Date('2020-08-03 13:50'), y:7.50},
                    {x: new Date('2020-08-03 14:00'), y:7.80},
                    {x: new Date('2020-08-03 14:10'), y:8.10},
                    {x: new Date('2020-08-03 14:20'), y:8.30},
                    {x: new Date('2020-08-03 14:30'), y:8.50},
                    {x: new Date('2020-08-03 14:40'), y:9.00},
                    {x: new Date('2020-08-03 14:50'), y:9.50},
                    {x: new Date('2020-08-03 15:00'), y:9.60},
                    {x: new Date('2020-08-03 15:10'), y:10.00},
                    {x: new Date('2020-08-03 15:20'), y:10.15},
                    {x: new Date('2020-08-03 15:30'), y:10.20},
                    {x: new Date('2020-08-03 15:40'), y:10.15},
                    {x: new Date('2020-08-03 15:50'), y:10.00},
                    {x: new Date('2020-08-03 16:00'), y:9.20},
                    {x: new Date('2020-08-03 16:10'), y:9.10},
                    {x: new Date('2020-08-03 16:20'), y:8.80},
                    {x: new Date('2020-08-03 16:30'), y:8.20},
                    {x: new Date('2020-08-03 16:40'), y:8.00},
                    {x: new Date('2020-08-03 16:50'), y:7.80},
                    {x: new Date('2020-08-03 17:00'), y:7.60},
                    {x: new Date('2020-08-03 17:10'), y:7.50},
                    {x: new Date('2020-08-03 17:20'), y:7.40},
                    {x: new Date('2020-08-03 17:30'), y:7.10},
                    {x: new Date('2020-08-03 17:40'), y:6.80},
                    {x: new Date('2020-08-03 17:50'), y:6.35},
                    {x: new Date('2020-08-03 18:00'), y:6.20},
                    {x: new Date('2020-08-03 18:10'), y:6.11},
                    {x: new Date('2020-08-03 18:20'), y:5.83},
                    {x: new Date('2020-08-03 18:30'), y:5.38},
                    {x: new Date('2020-08-03 18:40'), y:4.89},
                    {x: new Date('2020-08-03 18:50'), y:4.47},
                ],

                borderColor: '#dfcd9d',
                backgroundColor: 'rgba(223, 205, 157, .1)',

                pointBackgroundColor: '#dfcd9d',
                pointRadius: 1,
            }, {
                type: 'line',
                labels: [
                    new Date('2020-08-03 9:00'),
                    new Date('2020-08-03 13:00'),
                    new Date('2020-08-03 17:00'),
                    new Date('2020-08-03 19:00')
                ],
                data: [
                    {x: new Date('2020-08-03 9:00'), y: 0.30}, 
                    {x: new Date('2020-08-03 9:10'), y:0.35}, 
                    {x: new Date('2020-08-03 9:20'), y:0.45}, 
                    {x: new Date('2020-08-03 9:30'), y:0.60},
                    {x: new Date('2020-08-03 9:40'), y:0.65},
                    {x: new Date('2020-08-03 9:50'), y:0.70},
                    {x: new Date('2020-08-03 10:00'), y:0.75},
                    {x: new Date('2020-08-03 10:10'), y:0.80},
                    {x: new Date('2020-08-03 10:20'), y:0.90},
                    {x: new Date('2020-08-03 10:30'), y:1.00},
                    {x: new Date('2020-08-03 10:40'), y:1.50},
                    {x: new Date('2020-08-03 10:50'), y:2.00},
                    {x: new Date('2020-08-03 11:00'), y:2.10},
                    {x: new Date('2020-08-03 11:10'), y:2.20},
                    {x: new Date('2020-08-03 11:20'), y:2.30},
                    {x: new Date('2020-08-03 11:30'), y:2.40},
                    {x: new Date('2020-08-03 11:40'), y:2.60},
                    {x: new Date('2020-08-03 11:50'), y:2.80},
                    {x: new Date('2020-08-03 12:00'), y:3.00},
                    {x: new Date('2020-08-03 12:10'), y:3.10},
                    {x: new Date('2020-08-03 12:20'), y:3.30},
                    {x: new Date('2020-08-03 12:30'), y:3.50},
                    {x: new Date('2020-08-03 12:40'), y:3.80},
                    {x: new Date('2020-08-03 12:50'), y:4.00},
                    {x: new Date('2020-08-03 13:00'), y:4.10},
                    {x: new Date('2020-08-03 13:10'), y:4.50},
                    {x: new Date('2020-08-03 13:20'), y:4.80},
                    {x: new Date('2020-08-03 13:30'), y:5.00},
                    {x: new Date('2020-08-03 13:40'), y:5.30},
                    {x: new Date('2020-08-03 13:50'), y:5.60},
                    {x: new Date('2020-08-03 14:00'), y:6.00},
                    {x: new Date('2020-08-03 14:10'), y:6.10},
                    {x: new Date('2020-08-03 14:20'), y:6.40},
                    {x: new Date('2020-08-03 14:30'), y:6.60},
                    {x: new Date('2020-08-03 14:40'), y:7.00},
                    {x: new Date('2020-08-03 14:50'), y:7.20},
                    {x: new Date('2020-08-03 15:00'), y:7.30},
                    {x: new Date('2020-08-03 15:10'), y:7.60},
                    {x: new Date('2020-08-03 15:20'), y:8.00},
                    {x: new Date('2020-08-03 15:30'), y:8.10},
                    {x: new Date('2020-08-03 15:40'), y:8.40},
                    {x: new Date('2020-08-03 15:50'), y:8.20},
                    {x: new Date('2020-08-03 16:00'), y:8.00},
                    {x: new Date('2020-08-03 16:10'), y:7.50},
                    {x: new Date('2020-08-03 16:20'), y:6.30},
                    {x: new Date('2020-08-03 16:30'), y:6.00},
                    {x: new Date('2020-08-03 16:40'), y:5.50},
                    {x: new Date('2020-08-03 16:50'), y:5.20},
                    {x: new Date('2020-08-03 17:00'), y:5.10},
                    {x: new Date('2020-08-03 17:10'), y:5.00},
                    {x: new Date('2020-08-03 17:20'), y:4.80},
                    {x: new Date('2020-08-03 17:30'), y:4.70},
                    {x: new Date('2020-08-03 17:40'), y:4.30},
                    {x: new Date('2020-08-03 17:50'), y:4.25},
                    {x: new Date('2020-08-03 18:00'), y:4.20},
                    {x: new Date('2020-08-03 18:10'), y:3.85},
                    {x: new Date('2020-08-03 18:20'), y:3.35},
                    {x: new Date('2020-08-03 18:30'), y:3.00},
                    {x: new Date('2020-08-03 18:40'), y:2.80},
                    {x: new Date('2020-08-03 18:50'), y:2.40}
                ],

                borderColor: '#fdde86',
                backgroundColor: 'rgba(253, 222, 134, .1)',

                pointBackgroundColor: '#fdde86',
                pointRadius: 1,
            }, {
                type: 'bar',
                labels: [
                    new Date('2020-08-03 9:00'),
                    new Date('2020-08-03 13:00'),
                    new Date('2020-08-03 17:00'),
                    new Date('2020-08-03 19:00')
                ],
                data: [
                    {x: new Date('2020-08-03 9:00'), y: 0.30}, 
                    {x: new Date('2020-08-03 9:30'), y:0.60},
                    {x: new Date('2020-08-03 10:00'), y:0.75},
                    {x: new Date('2020-08-03 10:30'), y:1.00},
                    {x: new Date('2020-08-03 11:00'), y:2.10},
                    {x: new Date('2020-08-03 11:30'), y:2.40},
                    {x: new Date('2020-08-03 12:00'), y:3.00},
                    {x: new Date('2020-08-03 12:30'), y:3.50},
                    {x: new Date('2020-08-03 13:00'), y:4.10},
                    {x: new Date('2020-08-03 13:30'), y:5.00},
                    {x: new Date('2020-08-03 14:00'), y:6.00},
                    {x: new Date('2020-08-03 14:30'), y:6.60},
                    {x: new Date('2020-08-03 15:00'), y:7.30},
                    {x: new Date('2020-08-03 15:30'), y:8.10},
                    {x: new Date('2020-08-03 16:00'), y:8.00},
                    {x: new Date('2020-08-03 16:30'), y:6.00},
                    {x: new Date('2020-08-03 17:00'), y:5.10},
                    {x: new Date('2020-08-03 17:30'), y:4.70},
                    {x: new Date('2020-08-03 18:00'), y:4.20},
                    {x: new Date('2020-08-03 18:30'), y:3.00}
                ],

                borderColor: 'rgba(253, 222, 134, 0.5)',
                backgroundColor: 'rgba(253, 222, 134, 0.5)',
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
                    type: 'time'
                }],
            },
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    id: 'upperLimit_hline1',
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: '9',
                    borderColor: 'orange',
                    borderWidth: 2,
                    borderDash: [4, 2],  //[가로 (점선 길이), 세로 (굵기)]
                    label: {
                        backgroundColor: '#ffffff',
                        fontColor: 'orange',
                        fontSize: 10,
                        fontFamily: "sans-serif",
                        position: 'right',
                        xPadding: 6,
                        yPadding: 6,
                        content: '전일',
                        enabled: true
                    },
                }, {
                    drawTime: 'afterDatasetsDraw',
                    id: 'upperLimit_hline2',
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: '13',
                    borderColor: 'red',
                    borderWidth: 2,
                    borderDash: [8, 2], //[가로 (점선 길이), 세로 (굵기)]
                    label: {
                        backgroundColor: '#ffffff',
                        fontColor: 'red',
                        fontSize: 10,
                        fontFamily: "sans-serif",
                        position: 'right',
                        xPadding: 6,
                        yPadding: 6,
                        content: '연간',
                        enabled: true
                    },
                }]
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                intersect: false,
                custom: function (tooltipModel) {
                    // Tooltip Element
                    var tooltipEl = document.getElementById('chartjsAreaTooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjsAreaTooltip';
                        tooltipEl.classList.add('u-chartjs-tooltip-wrap');
                        tooltipEl.innerHTML = '<div class="u-chartjs-tooltip"></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        var titleLines = tooltipModel.title || [],
                            bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '<header class="u-chartjs-tooltip-header">';

                        titleLines.forEach(function (title) {
                            innerHtml += title;
                        });

                        innerHtml += '</header><div class="u-chartjs-tooltip-body"><table><tbody>';

                        bodyLines.forEach(function (body, i) {
                            // to prevent unexpected error
                            if (i > 1) return;

                            var colors = i != 0 ? '#fdde86' : '#dfcd9d';

                            var style = 'background: ' + colors;
                            style += ('; border-color:' + colors);
                            style += '; border-width: 2px';

                            var span = '<span class="chartjs-tooltip-key" style="' + style + `"></span>`;

                            innerHtml += ('<tr><td>' + span + body + '</td></tr>');
                        });

                        innerHtml += '</tbody></table></div>';

                        var tooltipRoot = tooltipEl.querySelector('.u-chartjs-tooltip');
                        tooltipRoot.innerHTML = innerHtml;
                    }

                    // `this` will be the overall tooltip
                    var position = this._chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - (tooltipEl.offsetWidth / 2) - 3 + 'px';
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.offsetHeight - 25 + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            },
            plugins: {
                labels: {
                    render: (args) => ''
                }
            },
        };

        $('.js-daily-chart').each(function (i, el) {
            chart = new Chart(el, {
                type: 'bar',
                data: data,
                options: options
            });

            window.dailyChart = chart;

            $(el).addClass('initialized');
        });
    });
})(jQuery);
