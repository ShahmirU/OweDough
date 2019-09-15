var express = require('express');
var app = express();

var firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyDhlB_9CPCoQJprIgdxdqpFoPdC44ZEN3I",
  authDomain: "owedough-531a7.firebaseapp.com",
  databaseURL: "https://owedough-531a7.firebaseio.com",
  projectId: "owedough-531a7",
  storageBucket: "owedough-531a7.appspot.com",
  messagingSenderId: "663489815687",
  appID: "1:663489815687:web:d17457c555a7a8d3004422",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// routes
app.use(express.static(__dirname + '/public'));

app.get('/dashboard', function (request, response) {
  console.log('GET request received at /dashboard');
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});