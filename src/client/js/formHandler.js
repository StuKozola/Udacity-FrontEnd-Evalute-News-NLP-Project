const fetch = require('node-fetch');

// Form variables (global)
const results = document.getElementById('results');
const score = document.getElementById('score');
const subjectivity = document.getElementById('subjectivity');
const irony = document.getElementById('irony');
const text = document.getElementById('text');

async function handleSubmit(event) {
    event.preventDefault()

    // clear prior results
    results.innerHTML = '';
    score.innerHTML = '';
    subjectivity.innerHTML = '';
    irony.innerHTML = '';
    text.innerHTML = '';

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText) // easter egg for Star Trek fans

    // If a vailid url, submit for NLP analysis
    if ( Client.checkForURL(formText) ) {
        console.log("::: Form Submitted :::", formText)
        results.innerHTML = "Processing url for sentiment..."
        await fetch('/url',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'text/plain'},
            body: formText
        })
        .then(res => res.json())
        .then(res => {
            console.log('NLP response: ', res);
            const data = res;
            results.innerHTML = `URL: ${formText}`;
            score.innerHTML = `Sentimenet Score: ${sentiment(data.score_tag)}`;
            subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
            irony.innerHTML = `Irony: ${data.irony}`;
            text.innerHTML = `Text Sample: ${data.sentence_list[0].text}`;
        })
    } else {
        // output an error message
        console.log('Invalid URL submitted');
        results.innerHTML = 'URL is invalid.  Please update and resubmit.';
    }
    
/*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
*/
}

// function for sentiment score processing
function sentiment(tag) {
    switch (tag) {
        case "P+":
            return "P+ (Strong positive)";
        case "P":
            return "P (Positive)";
        case "NEU":
            return "NEU (Neutral)";
        case "N":
            return "N (Negative)";
        case "N+":
            return "N+ (Strong negative)";
        case "NONE":
            return "NONE (Without sentiment)";
        default:
            return "No data";
    }
}

export { handleSubmit, sentiment }
