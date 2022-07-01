google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Material', 'Quantity by Type of Material'],
    ['Lâmpadas',     11],
    ['Pilhas e Baterias',      2],
    ['Papéis e Papelão',  2],
    ['Resíduos Eletrônicos', 2],
    ['Resíduos Orgânicos',    7],
    ['Òleo de Cozinha',    7]
  ]);

  var options = {
    title: 'Proporção de Materiais Coletados Pelos Pontos de Coleta da Região'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}