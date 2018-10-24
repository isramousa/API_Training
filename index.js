const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

app.listen(process.env.port || 4000, () =>{
    console.log("listening to request")
})

