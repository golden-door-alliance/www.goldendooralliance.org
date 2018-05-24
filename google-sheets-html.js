google.load('visualization', '1', {
  packages: ['table']
});
var visualization;

function drawVisualization() {
  var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1Y-4tShsgHIu5aC-6aE9exWsMkpxWYsvBz41VzH62cMY&usp=sharing');
  query.setQuery('SELECT A, B, C, D, E, F, G, H, I label A "State", B "District", C "Candidate", D "Party", E "1", F "2", G "3", H "4", I "5"');
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('There was an error: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  visualization = new google.visualization.Table(document.getElementById('candidates-table'));
  visualization.draw(data, {
    allowHtml: true,
    legend: 'bottom'
  });
}
google.setOnLoadCallback(drawVisualization);
