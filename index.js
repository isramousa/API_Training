const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',require('./routes/api'));
app.use((err, req, res, next) => {
    res.send({error:err.message})
})

app.listen(process.env.port || 4000, () =>{
    console.log("listening to request")
})

