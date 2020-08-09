var activation_donut_chart;

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center && chart.config.options.elements.type == 'activationDonutChart') {
            activation_donut_chart = chart;

            drawCenterText(chart);
        }
    }
});

(function ($) {
    $(document).on('ready', function () {
        var chart;
        var chartClass = '.js-activation-doughnut-chart';
        var data = {
            datasets: [{
                data: [30, 15, 15, 10, 30],
                backgroundColor: ['#008000', '#444bf8', '#2cd2f6', '#00ed96', '#f3f5fb'],
                hoverBackgroundColor: ['#008000', '#444bf8', '#2cd2f6', '#00ed96', '#f3f5fb'],
                borderWidth: 0
            }],
            labels: ['냉방', '조명', '수송', '쇼케이스', '기타']
        };

        var options = {
            responsive: true,
            legend: false,
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

                        innerHtml += '</header><div class="u-chartjs-tooltip-body"><table><tbody>';

                        bodyLines.forEach(function (body, i) {
                            var colors = tooltipModel.labelColors[i];

                            body += '%';

                            var style = 'background: ' + colors;
                            style += ('; border-color:' + colors);
                            style += '; border-width: 2px';

                            var span = '<span class="chartjs-tooltip-key" style="' + style + `"></span>`;

                            // redraw the center text
                            redrawText(body);

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
            cutoutPercentage: 50,
            elements: {
                center: {
                    text: data.labels[0] + ': ' + data.datasets[0].data[0] + '%',
                    color: '#36A2EB', //Default black
                    fontStyle: 'Helvetica', //Default Arial
                    fontStyle: 'Helvetica', //Default Arial
                },
                type: 'activationDonutChart'
            },
            plugins: {
                labels: {
                    render: (args) => ''
                }
            },
        };

        $(chartClass).each(function (i, el) {

            chart = new Chart(el, {
                type: 'doughnut',
                data: data,
                options: options
            });

            window.donutChart = chart;

            $(el).addClass('initialized');

        });

        generateDonutChartLengends(data.labels, data.datasets[0].backgroundColor);
    });
})(jQuery);

function redrawText(textVal) {
    if (activation_donut_chart == undefined) return;

    activation_donut_chart.config.options.elements.center.text = textVal;
    drawCenterText(activation_donut_chart);
}

function drawCenterText(chart) {
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
    ctx.font = "40px " + fontStyle;

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
    var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
    ctx.font = fontSizeToUse + "px " + fontStyle;
    ctx.fillStyle = color;

    var rect_x = centerX - (elementWidth / 2);
    var rect_y = centerY - (elementHeight / 2);
    ctx.clearRect(rect_x, rect_y, elementWidth, elementHeight);

    //Draw text in center
    ctx.fillText(txt, centerX, centerY);
}

function generateDonutChartLengends(labels, colors) {
    var root = document.getElementById('js-activation-doughnut-chart-legends-container');

    for (var i = 0; i < labels.length; i++) {
        var label = labels[i];
        var color = colors[i];

        var li = document.createElement('li');
        li.className = 'mr-3'

        var div = document.createElement('div');
        div.style.flexDirection = 'row';

        var colorDiv = document.createElement('div');
        colorDiv.className = 'chartjs-donut-legend-key'
        colorDiv.style.background = color;
        colorDiv.style.borderColor = color;
        colorDiv.style.borderWidth = '1px';

        var textContainer = document.createElement('div');
        textContainer.innerHTML = label;

        div.appendChild(colorDiv);
        div.appendChild(textContainer);

        li.appendChild(div);
        root.appendChild(li);
    }
}
