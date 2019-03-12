const express = require('express');
var app = express();
var path = require('path');

function pet(name, age, type) {
  this.name = name;
  this.age = age;
  this.type = type;
}

var cage = [{"name":"Spot","age":3,"type":"dog"},
            {"name":"Empress","age":9,"type":"cat"},
            {"name":"Tango Mango","age":5,"type":"dog"},
            {"name":"King","age":1,"type":"hamster"}];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/hello.html'))
});

app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname + '/info.html'))
});

app.get('/pictures', (req, res) => {
  res.sendFile(path.join(__dirname + '/pictures.html'))
});

app.get('/data', (req, res) => {
  for (var key in cage) {
    res.json(cage)
  }
});

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/javascript', express.static(path.join(__dirname, 'javascript')));

app.listen(process.env.PORT || 8080)
