var express = require('express');
var app = express();
var public = require('path').join(__dirname, '/public');

app.use(express.static(public));
app.get('/', (req, res) => {
  res.render('./public/index.html');
});

app.listen(3000, () => {
  console.log('Dev app listening on port 3000');
});
