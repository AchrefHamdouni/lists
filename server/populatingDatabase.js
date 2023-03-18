var {db}=require('./index.js')
var Pokemon= require('./resources/pokemon/Pokemon.js')
// Fill in the definition of insertAllPokemon so that when 
var sampleData=require('../data/pokemon.json')
var populatingDatabase = function() {
Pokemon.create(sampleData)
.then(()=>{
    console.log("database populated")
}).catch((error)=>{
    console.log('populating data base failed',error)
    }).finally(()=>{
        db.close() })
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
populatingDatabase();