var express = require('express');
var app = express();

// routes

app.use(express.static(__dirname + '/public'));


app.get('/dashboard', function(request, response){
    console.log('GET request received at /dashboard');
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
