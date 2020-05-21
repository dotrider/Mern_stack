const Trails = require('../models/trails');


module.exports = {

    addTrail: async(req, res) => {
        const { name, location, difficulty, review, imageUrl} = req.body;
        console.log('add', req.body)
        //Creating new Trail
        const newTrail = new Trails({name, location, difficulty, review, imageUrl})
        //Saving trail to db
        let savedTrail = await newTrail.save()
        //sending response to client
        savedTrail = await Trails.find()
        res.status(200).json(savedTrail)
    },

    getTrails: async(req, res) => {
        const { id } = req.params;
        console.log('hit')
            
        const trail = await Trails.findById(id);
        const trails = await Trails.find();

        if(id){
            console.log('single', trail)
            res.status(200).json(trail)
        }else{
            console.log('all', trails)
            res.status(200).json(trails)
        }
    },

    deleteTrail: async(req, res) => {
        const { id } = req.params;

        let trail = await Trails.deleteOne({_id: id});
        trail = await Trails.find()
        res.status(200).json(trail)
    },

    updateTrail: async(req, res) => {
        const { name, location, difficulty, review, imageUrl } = req.body;
        const { id } = req.params;
        console.log('update', id, req.body)

        let updatedTrail = await Trails.findOneAndUpdate({_id: id},
             {$set: {name, location, difficulty, review, imageUrl}}, {new:true});
        updatedTrail = await Trails.find()     
             
        res.status(200).json(updatedTrail)
    }
}