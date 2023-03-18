var Pokemon = require('./Pokemon');
var {db}=require('../../db/index.js')

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  const newPokemon=new Pokemon({ 
    number:req.body.number,
    name:req.body.name,
    types:req.body.types,
    imageUrl:req.body.imageUrl
 });
  newPokemon.save(function (err) {
    if (err) return handleError(err);
      })
      res.send()
};

exports.retrieve = function (req, res) {
Pokemon.find({})
.then((pokemons)=>{
res.status(200).json(pokemons)
})
};

exports.retrieveOne = function (req, res) {
Pokemon.findOne({'number':req.params.number})
.then((pokemon)=>{
res.status(200).json(pokemon)
})
};

exports.updateOne = function (req, res) {
Pokemon.findOneAndUpdate({number:req.params.number,
    name:req.params.name,
    type:req.params.type,
    imageUrl:req.params.imageUrl
}).then((pokemon)=>{
    console.log('pokemon updated')
    res.status(201).json(pokemon)
}).catch((err)=>{
    console.log(err)
    res.send(err)
})
};


exports.deleteAll = function (req, res) {
    Pokemon.deleteMany({},(err,result)=>{
        if(err){console.log(err)}
    })
    res.send("pokemons deleted")
    };

exports.deleteOne = function (req, res) {
Pokemon.findOneAndRemove({number:req.params.number},(err,result)=>{
    if(err){console.log(err)}
})
res.send("pokemon deleted")
};