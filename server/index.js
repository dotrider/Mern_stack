require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const { PORT_NUM, CONNECTION_DB} = process.env;
const Ctr = require('./controller/controller')

const app = express();

//Middleware
app.use(cors())
app.use(express.json());


//Connecting to DB
mongoose.connect(CONNECTION_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}, () => console.log('Connected to DB'));


//* FULL *
//** C **
app.post('/api/trails', Ctr.addTrail);
//** R **
app.get('/api/trails', Ctr.getTrails);
//** U **
app.put('/api/trails/:id', Ctr.updateTrail);
//** D **
app.delete('/api/trails/:id', Ctr.deleteTrail);

app.listen(PORT_NUM, () => console.log(`server running wild on ${PORT_NUM}`))
