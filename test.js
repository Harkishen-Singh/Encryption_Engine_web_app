var express = require('express');
var html = require('html');
var sql = require('sql');
var fs = require('fs');
var app= express();
var Random = require('random-js');

/*app.get('/', Introduction);
var count =1;
function Introduction(req, res){
  res.sendFile(__dirname + '/intro.html');
  console.log('User requested File transfer' + count);
  count++;


}*/
// server creation Below

var server = app.listen(8000, '0.0.0.0', function(err){
  if(err) throw err;
  else {
    console.log('Server listening at port : ' + server.address().port);
    console.log('Server listening at address : '+ server.address().address);
  }
});

app.get('/values', function(req, res){
  res.sendFile(__dirname + "/input_val.html");

});
app.get('/', function(req, res){
  /*for(var i=0;i< 100; i++){
    console.log('value of i : ' + i);       // working code
    var s = String.fromCharCode(i);
    console.log('Dependent variable on i ascii : ' + s);

  }*/
  var min = 1, max = 11;
  var temp = random_value(min, max);
  console.log('Value of random fun : '+ temp);

  var t = Math.random();
  console.log('Value of random : ' + t);

});

function random_value(min, max){
  return Math.floor(Math.random() * (max-min+1)); // between 0 and 10
}
