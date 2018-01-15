var express = require('express');
var html = require('html');
var sql = require('sql');
var fs = require('fs');
var app= express();

app.get('/', Introduction);

function Introduction(req, res){
  res.sendFile(__dirname + '/intro.html');
  res.end();

}
var db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "hsinghbb"
});
/*
db.connect(function(err){
  if(err)
    {console.log('Some error occured'); break;}
  else {
        var cmd = " create database Encryption_engine";
        db.query(cmd, function(err){
          if(err) throw err;
          else {
            console.log("Database named Encryption_engine successfully created");
          }
        });

    }
});


// creating table for Encryption_engine
db.connect(function(err){
  if(err) {console.log('Some error occured'); break;}
  else {
    var cmd= "create table Used_people_record (
      Person Id int,
      Name varchar(50),
      Email Id varchar(100),)
    )";

  }
});
*/
app.get('/asking', function(req, res){
  res.sendFile(__dirname + "/input_val.html");

})
var data="";
app.get('/receive_form', function(req, res){
  data= req.query.code ;
  console.log('Got the source as \n:' + data);
});

// processing starts from Below
 // python code below to be optimized for [python]
var ch= "";
var val= "";
/* '''
       alpha is an array used for the storing of random values for alphabets
       in form of a secret code
       '''
       # where it is declared from 1 to 26 as reserved for the alphabets
       #  after which it can be used for teh storing for numeric codes*/

var al = new Array();
function code_allocation2(){
       for(var i=33; i<3000; i++){
           var a = new Array(4);
           var b = new Array(4);
           var ch="", val="";
           for(var j=1; j<5; j++)
           {
             var temp = Math.floor(Math.random * 61);
            a[j] = String.fromCharCode(65 + temp );
             }
           for(var j=1; j<5; j++)
               ch = ch + a[j];

           for(var j=1; j<5; j++){
               var temp= Math.floor(Math.random * 10);
               b[j] = String(temp);
             }
           for j in range(1,5)
               val = val + b[j];

           alpha[i]= ch+val;
           ch="";
           val="";
         }
       }
   var r = Math.floor(Math.random * 1001);

  function file_saving(){
       var x=Math.floor(Math.random * 1001);
       wx=String(x);

       wr= String(r) +"_encryptCode_"+wx+".txt"; //use this variable to get the file of encrypted code
       var fw= fs.open(wr, 'w', function(err){
         if(err) throw err;
         else {
           console.log('File Created with name ' + wr);
         }
       });
       for i in range(0,len(alpha))
       for(var i=0; i< alpha.length; i++)
           fs.appendFile(wr, alpha[i] + "\n", function(err){
             if(err) console.log("Error Occured while appending the file created earlier");
           });

}
  function dic_alpha_assign(){
       for(var i=33;i<3000;i++)
          al[i] = String.fromCharCode(i);
}
var dic= [];

function dic_assign(){

       for i in range(2967): # clever to check this..!!!!
       for(var i=0;i<2967;i++){
           dic.push({
             key: al[i],
             value: alpha[i]
           });
         }
}
var new_file = "";
var new_ch = "";

  /* '''def open_file(self):
       # self.name = input("Enter the name of the file you want to encrypt ")
       self.name = self.name + ".txt"
       file = open(self.name, 'r')
       text = file.read()
       length = len(text)
       for i in range(length):
           ch = text[i]

           for j,k in dic.items():

               if ch == j :
                   self.new_file = self.new_file + k + " "
                   break
       self.name_new = str(self.r) + "__encrypted_doc_" + self.name
       file_write = open(self.name_new, 'w')
       file_write.write(self.new_file + "\n")
       file_write.close()
   '''*/
  /*
class Continued(Encryption): #binary form conersion ,, not necessary

   digit =0
   ascii = 0
   def convert(self, ascii):

       num=0
       d=0
       c=0
       temp = ascii
       while temp != 0:
           d = temp % 2
           num +=  d*(10**c)
           c +=1
           temp = temp // 2 # use double slash for int division

       return num

   def ascii_conversion(self):
       ran2 = random.randrange(1,1000)
       ran2_str= str(ran2)

       binary = open(str(self.r)+"_binary_"+".txt" , 'w')

       text = self.new_file

       binary_string=""
       for i in text :
           ascii = ord(i)
           got = self.convert(ascii)
           binary_string = str(got)
           # sizing to the correct 8 length

           # calculating the length of the num
           temp2 = binary_string
           d=0
           len_binary = len(temp2)
           if len_binary != 16 :
               d = 16 - len_binary
               for i in range(d):
                   binary_string = "0" + binary_string
           print(binary_string)

           binary.write(binary_string)
       print("Operation Successfull")
      */
