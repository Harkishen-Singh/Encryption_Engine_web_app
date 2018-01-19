# Encryption_Engine_web_app
This is a web based application for Encryption_Engine, whose original code was written in python.
<h3>Stable version has been released, and now can be used in day to day application.</h3>
 following 256-bit encryption mechanism<br/> using one-time pad technique.
 <h4>Record Maintainance has been developed using MySql. </h4>
 <h5>For successfully using the Databse part, There are some prerequirests:</h5>
 Install MYSQL first.
 Then, After installing run using the command
 <code> mysql -u root -p </code>
 then. manually, create a database named <strong>Encryption_Engine</strong> 
There after, open the source code of strong>app.js</strong> and edit the followings  according to the settings to <br/>resective computer:
    host: "localhost", // keep it as the IP if you are using it over a network.
    user: <your-mysql-username / if no username is set then, keep it as "root">,
    password: <your-mysql-password>,
    database: "Encryption_Engine"
    
to know the IP of the network you are conected, if using linux or mac
type <code>ifconfig</code>
if windows <code>ipconfig</code>

<h4>feel free to share any other problems related to installation or any other thing.</h4>
