require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const { PORT_NUM } = process.env;
const app = express();


app.use(express.json());

app.listen(PORT_NUM, () => console.log(`server running wild on ${PORT_NUM}`))


