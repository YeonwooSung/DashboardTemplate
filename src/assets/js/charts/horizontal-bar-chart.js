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
            borderColor: 'lightgreen',
            backgroundColor: 'lightgreen',

            pointBackgroundColor: 'lightgreen',
            pointRadius: 1,
        }]
    };

    data3 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6', '기기 7'],
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

    data4 = {
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

    data5 = {
        labels: ['기기 1', '기기 2', '기기 3', '기기 4', '기기 5', '기기 6', '기기 7', '기기 8', '기기 9'],
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
}
