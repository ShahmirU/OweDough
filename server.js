var express = require('express');
var app = express();

//var firebase = require("firebase-admin");
//var serviceAccount = require("./serviceAccountKey.json");

//firebase.initializeApp({
//        credential: firebase.credential.cert(serviceAccount),
//        databaseURL: https://owedough-531a7.firebaseio.com/
//});


// routes

app.use(express.static(__dirname + '/public'));


app.get('/dashboard', function(request, response){
    console.log('GET request received at /dashboard');
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
