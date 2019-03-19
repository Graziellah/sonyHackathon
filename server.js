const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["papier", "lion", "sourie", "poule rat"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/src/index.js'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);