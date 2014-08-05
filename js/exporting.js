$("#download").click(function(){
var chart = $('#container').highcharts();
chart.exportChart();
});

$("#print").click(function(){
var chart = $('#container').highcharts();
chart.print();
});