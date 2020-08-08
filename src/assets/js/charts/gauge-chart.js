var gaugeChart;

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center && chart.config.options.elements.type == 'gaugeChart') {
            gaugeChart = chart;

            drawCenterText_gauge(chart);
        }
    }
});

(function ($) {
    $(document).on('ready', function () {
        var chart;
        var data = {
            labels: [
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
            ],
            datasets: [{
                label: '전력 데이터',
                backgroundColor: [
                    'red',
                    'orange',
                    'lightgreen',
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
                    ticks: {
                        display: false
                    }
                }],
            },
            tooltips: {
                enabled: false,
                position: 'nearest',
                custom: function (tooltipModel) {
                    // Tooltip Element
                    var tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.classList.add('u-chartjs-tooltip-wrap');
                        tooltipEl.innerHTML = '<div class="u-chartjs-tooltip"></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    if (tooltipModel.opacity == 0) {
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
                        var titleLines = tooltipModel.title || [];
                        var bodyLines = tooltipModel.body.map(getBody);

                        var innerHtml = '<header class="u-chartjs-tooltip-header">';
                        titleLines.forEach(function (title) {
                            innerHtml += title;
                        });
                        console.log(titleLines);
                        innerHtml += '</header><div class="u-chartjs-tooltip-body"><table><tbody>';

                        bodyLines.forEach(function (body, i) {
                            var colors = tooltipModel.labelColors[i];

                            var style = 'background: ' + colors;
                            style += ('; border-color:' + colors);
                            style += '; border-width: 2px';

                            var span = '<span class="chartjs-tooltip-key" style="' + style + `"></span>`;

                            // redraw the center text
                            //redrawCenterText(body);
                            var newVal = (Math.round(Math.random() * (50 - 10) + 10)) + '%';
                            redrawCenterText(newVal);

                            innerHtml += ('<tr><td>' + span + body + '</td></tr>');
                        });

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
            elements: {
                center: {
                    text: '45%',
                    color: '#36A2EB',        //Default black
                    fontStyle: 'Helvetica',  //Default Arial
                    fontStyle: 'Helvetica',  //Default Arial
                },
                type: 'gaugeChart'
            }
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


function drawCenterText_gauge(chart) {
    //Get ctx
    var ctx = chart.chart.ctx;

    //Get options from the center object in options
    var centerConfig = chart.config.options.elements.center;
    var fontStyle = centerConfig.fontStyle || 'Arial';
    var txt = centerConfig.text;
    var color = centerConfig.color || '#000';
    var sidePadding = centerConfig.sidePadding || 20;
    var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

    //Start with a base font of 30px
    ctx.font = "50px " + fontStyle;

    // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
    var stringWidth = ctx.measureText(txt).width;
    var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

    // Find out how much the font can grow in width.
    var widthRatio = elementWidth / stringWidth;
    var newFontSize = Math.floor(30 * widthRatio);
    var elementHeight = (chart.innerRadius * 2);

    // Pick a new font size so it will not be larger than the height of label.
    var fontSizeToUse = Math.min(newFontSize, elementHeight);

    //Set font settings to draw it correctly.
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
    var centerY = ((chart.chartArea.top + chart.chartArea.bottom) * 0.7);
    ctx.font = fontSizeToUse + "px " + fontStyle;
    ctx.fillStyle = color;

    var rect_x = centerX - (elementWidth / 2);
    var rect_y = centerY - (elementHeight / 2);
    ctx.clearRect(rect_x, rect_y, elementWidth, elementHeight);

    //Draw text in center
    ctx.fillText(txt, centerX, centerY);
}

function redrawCenterText(text) {
    if (gaugeChart == undefined) return;

    gaugeChart.config.options.elements.center.text = text;
    drawCenterText(gaugeChart);
}
