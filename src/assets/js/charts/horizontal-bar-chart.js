(function ($) {
    $(document).on('ready', function () {
        setData();

        var chart;
        $('.js-horizontal-bar-chart').each(function (i, el) {
            chart = new Chart(el, {
                type: 'horizontalBar',
                data: data1,
                options: horizontal_bar_chart_options
            });

            window.horizontalBarChart = chart;
            $(el).addClass('initialized');
        });
    });
})(jQuery);

var data1;
var data2;
var data3;
var data4;
var data5;

var horizontal_bar_chart_options = {
    reponsive: true,
    legend: false,
    scales: {
        xAxes: [{
            ticks: {
                min: 0
            }
        }],
    },
    elements: {
        rectangle: {
            borderWidth: 2
        }
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

                innerHtml += '</header><div class="u-chartjs-tooltip-body"><table><tbody>';

                bodyLines.forEach(function (body, i) {
                    var colors = tooltipModel.labelColors[i];

                    body += 'W';
                    body = body.replace(':', '').trim()

                    var style = 'background: ' + colors;
                    style += ('; border-color:' + colors);
                    style += '; border-width: 2px';

                    innerHtml += ('<tr><td>' + body + '</td></tr>');
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
    }
}

var radios = document.forms['horizontal-chart-radio-button-form'].elements['chk_info'];
var dataList = [];
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
        var index = parseInt(this.value);
        console.log(dataList[index]);
        window.horizontalBarChart.data = dataList[index];
        window.horizontalBarChart.update();
    }
}

function setData() {
    data1 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6', '기기 7', '기기 8'],
        datasets: [{
            data: [
                37, 20, 33, 49, 50, 21, 34, 40
            ],
            borderColor: 'lightgreen',
            backgroundColor: 'lightgreen',

            pointBackgroundColor: 'lightgreen',
            pointRadius: 1,
        }]
    };

    data2 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6'],
        datasets: [{
            data: [
                37, 20, 33, 49, 50, 21, 34, 40
            ],
            borderColor: 'lightblue',
            backgroundColor: 'lightblue',

            pointBackgroundColor: 'lightblue',
            pointRadius: 1,
        }]
    };

    data3 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6', '기기 7'],
        datasets: [{
            data: [
                37, 20, 33, 49, 50, 21, 34, 40
            ],
            borderColor: 'green',
            backgroundColor: 'green',

            pointBackgroundColor: 'green',
            pointRadius: 1,
        }]
    };

    data4 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6', '기기 7', '기기 8'],
        datasets: [{
            data: [
                37, 20, 33, 49, 50, 21, 34, 40
            ],
            borderColor: 'blue',
            backgroundColor: 'blue',

            pointBackgroundColor: 'blue',
            pointRadius: 1,
        }]
    };

    data5 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6', '기기 7', '기기 8', '기기 9'],
        datasets: [{
            data: [
                37, 20, 33, 49, 50, 21, 34, 40, 28
            ],
            borderColor: 'darkblue',
            backgroundColor: 'darkblue',

            pointBackgroundColor: 'darkblue',
            pointRadius: 1,
        }]
    };

    dataList = [data1, data2, data3, data4, data5];
}
