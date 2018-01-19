var express = require('express');
var html = require('html');
var mysql = require('mysql');
var fs = require('fs');
var app= express();

app.get('/', Introduction);
var count =1;
function Introduction(req, res){
  res.sendFile(__dirname + '/intro.html');
  console.log('User requested File transfer' + count);
  count++;


}
// server creation Below

var server = app.listen(8000, '0.0.0.0', function(err){
  if(err) throw err;
  else {
    console.log('Server listening at port : ' + server.address().port);
    console.log('Server listening at address : '+ server.address().address);
  }
});
var data="";
var name="";
var new_file = ""; // contains the encrypted code
var user_name="";
var user_emailId="";





app.get('/receive_form', function(req, res){
  /* getting data from forms */
  data= req.query.code ;
  user_name= req.query.user_name;
  user_emailId = req.query.emailId;
  console.log(user_name +"\t"+user_emailId);
  console.log('Got the source as \n:' + data);
  code_allocation2();
  res.render(__dirname +"/output.ejs", { uff: new_file});

  /* sends the file to the user from the server */
  var sending = fs.createReadStream(__dirname +"/" + name);
  sending.pipe(res);
  //res.sendFile(__dirname + "/"+name); // bombarding files to teh user from the Server
  Database_handling();
  res.end();
});
function Database_handling(){
  var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hsinghbb",
    database: "Encryption_Engine"
  });

  db.connect(function(err){
    if(err)
      {console.log('Some error occured');}
    else {
      console.log(user_name +"\t"+user_emailId);
          var cmd = " insert into Records(name, emailId) values(\""+user_name+"\",\""+user_emailId+"\");";
          db.query(cmd, function(err){
            if(err){throw err;console.log('Error occured while Inserting into the Database');}
            else {
              console.log("Insertion into the database sccessfully done!");
            }
          });

      }
  });
}

/* passing the input form to the user below */
app.get('/values', function(req, res){
  res.sendFile(__dirname + "/input_val.html");

});




app.get('/result', output);
/* below functions is useless, just kept like that*/
function output(req, res){

  res.render(__dirname + '/output.ejs', {
    uff: new_file
  });
  new_file="";
  console.log('Runing Ejs file on browser parsing from Server');
}

// processing starts from Below
 // python code below to be optimized for [python]
var ch= "";
var val= "";
/*
       alpha is an array used for the storing of random values for alphabets
       in form of a secret code

       # where it is declared from 1 to 26 as reserved for the alphabets
       #  after which it can be used for teh storing for numeric codes
*/
var alpha = new Array(3000- 33);
var al = [];
function code_allocation2(){
       for(var i=33; i<3000; i++){
           var a = new Array(4);
           var b = new Array(4);
           var ch="", val="";
           for(var j=1; j<5; j++)
           {
             var temp = Math.floor(Math.random() * 61);
            a[j] = String.fromCharCode(65 + temp );
          //  console.log(' a[j] at j '+j+' is '+a[j] );
             }
           for(var j=1; j<5; j++)
               ch = ch + a[j];

           for(var j=1; j<5; j++){
               var temp= Math.floor(Math.random() * 10);
               b[j] = String(temp);
            //   console.log(' b[j] at j '+j+' is '+b[j] );
             }
           for(var j=1; j<5; j++)
               val = val + b[j];

           alpha[i-33]= ch+val;
          // console.log('Value of cal + val at count '+ i + ' is : ' + (ch+val));
           ch="";
           val="";
         }
         file_saving();

       }


  function file_saving(){
    var r = Math.floor(Math.random() * 1001);
       var x=Math.floor(Math.random() * 1001);
       var wx=String(x);
       //console.log("value of wx : " + wx);
       wr= wx +"_encryptCode_"+wx+".txt"; //use this variable to get the file of encrypted code
       var fw= fs.open(wr, 'w', function(err){
         if(err) console.log('Error occured while creating a new file with name '+ wr);
         else {
           console.log('File Created with name ' + wr);
         }
       });
       for(var i=0; i< alpha.length; i++)
           fs.appendFile(wr,i + ". " +  alpha[i] + "\n", function(err){
             if(err) console.log("Error Occured while appending the file created earlier"); // creating the encrypted key
           });
           dic_alpha_assign();


}
  function dic_alpha_assign(){
       for(var i=33;i<3000;i++)
          al[i-33] = String.fromCharCode(i);
      dic_assign();
}
var dic= [];

function dic_assign(){
       for(var i=0;i<2967;i++){
           dic.push({
             key: al[i],
             value: alpha[i]
           });
         }
         open_file();

}
var new_ch = "";

function open_file(){
  var code1 = data;

  for(var i=0;i< data.length; i++){
    var ch = data.charAt(i);
    for(var j=0;j< dic.length; j++){
      if(ch == dic[j].key){
        new_file = new_file + dic[j].value;
        //console.log('dic['+i+'] key :' + dic[j].key);
        //console.log('dic['+i+'] value :' + dic[j].value);
        break;
      }
    }
  }
  createEncryptedFile();
  //console.log('The Encrypted Code is below :\n\n' + new_file);
  //new_file="";

}
function createEncryptedFile(){
  var ran = String(Math.floor(Math.random() * 100));
  name= ran +"Encrypted_file_source.txt";
  fs.open(name, 'w', function(err){
    if(err) console.log('Error occured while making he excrypted file source');

  });
  fs.appendFile(name, new_file, function(err){
    if(err) console.log('Error occured hile appending the FIle created for the source');
  });

}
