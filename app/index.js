const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/azure_truck_logo.png', (req, res) => {
  res.sendFile(__dirname + '/azure_truck_logo.png')
});

app.get('/aks.png', (req, res) => {
  res.sendFile(__dirname + '/aks.png')
});

var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});

