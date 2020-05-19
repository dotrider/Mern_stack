const mongoose = require('mongoose');


const trailSchema = mongoose.Schema({
    name: String,
    location: String,
    dificulty: String,
    review: String,
    imageUrl: String,
    date: {type:Date, default: Date.now}
})

module.exports = mongoose.model('Trails', trailSchema)