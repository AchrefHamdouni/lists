const express = require('express');
const mongoose = require('mongoose');
const router=express.Router()
const cors= require('cors')
var pokemonRouter = require('express').Router();
pokemonRouter.use(express.json())
pokemonRouter.use(cors())
var pokemonController = require('./pokemonController.js');

const Pokemon=require('./Pokemon.js')
// Create route handlers for each of the six  in pokemonControllermethods

pokemonRouter.get('/pokemons',pokemonController.retrieve)
pokemonRouter.post('/pokemon',pokemonController.createOne)
pokemonRouter.get('/:number',pokemonController.retrieveOne)
pokemonRouter.put('/:number',pokemonController.updateOne)
pokemonRouter.delete('/',pokemonController.deleteAll)
pokemonRouter.delete('/:number',pokemonController.deleteOne);

module.exports = pokemonRouter;