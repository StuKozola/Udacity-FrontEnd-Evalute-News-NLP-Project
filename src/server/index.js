// load secrets and config information
const dotenv = require('dotenv');
dotenv.config();

// set express and app defaults
var path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')

// sentiment api from MeaningCloud
const MC_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = process.env.API_KEY;

// ports from .env
const PORT = process.env.PORT;

const app = express()

app.use(cors());
app.use(express.static('dist'))
app.use(bodyParser.text())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`)
})

// test request
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//POST method for url and processing of an article for sentiment analysis
app.post('/url', async (req,res) => {
    const data = req.body;
    const url = `${MC_URL}?key=${apiKey}&url=${data}`;
    console.log('URL: ', url);
    const response = await fetch(url);
    //console.log('Response: ', response);
    try {
        const data = await response.json();
        //console.log('Data: ', data);
        res.send(data);
    } catch (error){
        console.log('ERROR:', error)
    }
});
