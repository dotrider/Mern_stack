require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { PORT_NUM, CONNECTION_DB} = process.env;
const app = express();

//Middleware
app.use(express.json());

//Connecting to DB
mongoose.connect(CONNECTION_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}, () => console.log('Connected to DB'))

app.listen(PORT_NUM, () => console.log(`server running wild on ${PORT_NUM}`))


