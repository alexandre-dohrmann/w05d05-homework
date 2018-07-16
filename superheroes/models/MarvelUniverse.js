const mongoose = require('mongoose');


const marvelsuperSchema = new mongoose.Schema({
    name: String,
    img: String,
    height: String,
    weight: String,
    attacks: [String],
    bio: String,
});

module.exports = mongoose.model('MarvelSuperheroes', marvelsuperSchema);
