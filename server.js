var express = require('express');
var app = express();

<<<<<<< HEAD
// var firebase = require("firebase-admin");
// var serviceAccount = require("./serviceAccountKey.json");

//firebase.initializeApp({
  //      credential: firebase.credential.cert(serviceAccount),
    //    databaseURL: https://owedough-531a7.firebaseio.com/
// });
=======
//var firebase = require("firebase-admin");
//var serviceAccount = require("./serviceAccountKey.json");

//firebase.initializeApp({
//        credential: firebase.credential.cert(serviceAccount),
//        databaseURL: https://owedough-531a7.firebaseio.com/
//});
>>>>>>> f3f4dbc71f80b096d71d7b0667ee50d0df135687


// Set the configuration for your app
  // TODO: Replace with your project's config object
//  var config = {
  //  apiKey: "AIzaSyDhlB_9CPCoQJprIgdxdqpFoPdC44ZEN3I",
<<<<<<< HEAD
   // authDomain: "owedough-531a7.firebaseapp.com",
   // databaseURL: "https://owedough-531a7.firebaseio.com",
   // storageBucket: "owedough-531a7.appspot.com"
 // };

//  firebase.initializeApp(config);

  // Get a reference to the database service
 // var database = firebase.database();
=======
    //authDomain: "owedough-531a7.firebaseapp.com",
    //databaseURL: "https://owedough-531a7.firebaseio.com",
    //storageBucket: "owedough-531a7.appspot.com"
  //};

  //firebase.initializeApp(config);

  // Get a reference to the database service
  //var database = firebase.database();
>>>>>>> f3f4dbc71f80b096d71d7b0667ee50d0df135687

// routes

app.use(express.static(__dirname + '/public'));


app.get('/dashboard', function(request, response){
    console.log('GET request received at /dashboard');
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
