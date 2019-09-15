var express = require('express');
var app = express();

var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: "https://owedough-531a7.firebaseio.com/"
});

  // Get a reference to the database service
  var database = firebase.database();

app.use(express.static(__dirname + '/public'));


app.get('/dashboard', function(request, response){
    console.log('GET request received at /dashboard');
})

app.get('/submit', function(req, response){
    var first_name = req.query.first_name;
    var last_name = req.query.last_name;
    var amount = Math.abs(Number(req.query.amount));
    var date = req.query.date;
    var desc = req.query.desc;
    console.log(first_name);
    console.log(last_name);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});