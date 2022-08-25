const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// sentiment api from MeaningCloud
const MC_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = process.env.API_KEY;

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// test request
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//POST method for url and processing of an article for sentiment analysis
app.post('/url', async (req,resp) => {
    const response = await fetch(`{$MC_URL}?key={$apiKey}&url={$req.body}`);
    console.log('url:', response);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error){
        console.log('ERROR:', error)
    }
});
