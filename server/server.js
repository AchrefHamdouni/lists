var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter=require('./resources/pokemon/pokemonRouter')
// Create the Express application:
var app=express();
morgan=pokemonRouter;
app.use(morgan);
// Attach middleware:

// Import the pokemonRouter and assign it to the correct route:
app.get('/:number',pokemonRouter);
app.post('/',pokemonRouter);
app.get('/', function (req, res) {
    res.send("hello server")
});
app.post('/',function(req,res){
    res.json(req.body)
})
module.exports = app;