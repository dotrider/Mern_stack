const Trails = require('../models/trails');


module.exports = {

    addTrail: async(req, res) => {
        const { name, location, difficulty, review, imageUrl} = req.body;
        console.log('add', req.body)
        //Creating new Trail
        const newTrail = new Trails({name, location, difficulty, review, imageUrl})
        //Saving trail to db
        savedTrail = await newTrail.save()
        //sending response to client
        res.status(200).json(savedTrail)
    },

    getTrails: async(req, res) => {

        const trails = await Trails.find();
        res.status(200).json(trails)

    },

    deleteTrail: async(req, res) => {
        const { id } = req.params;

        const trail = await Trails.remove({_id: id});
        res.status(200).json(trail)
    },

    updateTrail: async(req, res) => {
        const { name, location, difficulty, review, imageUrl } = req.body;
        const { id } = req.params;
        console.log('update', req.body)

        const updatedTrail = await Trails.findOneAndUpdate({_id: id},
             {$set: {name, location, difficulty, review, imageUrl}}, {new:true});
             
        res.status(200).json(updatedTrail)
    }
}