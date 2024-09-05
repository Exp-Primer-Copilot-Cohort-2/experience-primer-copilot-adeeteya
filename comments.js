// Create web server
var express = require('express');
var app = express();

// Create a route for the home page
app.get('/', function(req, res) {
    res.send('Welcome to the home page!');
});

// Create a route for the about page
app.get('/about', function(req, res) {
    res.send('Welcome to the about page!');
});

// Create a route for the contact page
app.get('/contact', function(req, res) {
    res.send('Welcome to the contact page!');
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});