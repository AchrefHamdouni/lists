const mongoose = require("mongoose");
const { db } = require("../resources/pokemon/Pokemon");

// Connect Mongoose to our local MongoDB via URI specified above and export it below

mongoose.connect('mongodb://127.0.0.1:27017/Pokemon',
() =>{console.log("successfully connected to the DB")})

module.exports = db;
