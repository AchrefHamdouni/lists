const express = require("express");
const app = express();
const cors=require('cors')
const pokemonRouter = require("./resources/pokemon/pokemonRouter")

const db = require("./db")
const mongoose = require("mongoose");
const Pokemon = require("./resources/pokemon/Pokemon");
const res = require("express/lib/response");

//app.use('/api/pokemon/:number',pokemonRouter)
app.use(cors())
app.use(express.json());
app.use(pokemonRouter)
app.use('/pokemons', pokemonRouter);
app.use('/', pokemonRouter);
app.use('/:number',pokemonRouter)

app.listen(8000, () => {
    console.log("started listening for resquests on port 8000");
})