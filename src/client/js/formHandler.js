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
        await fetch('/url',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'text/plain',
                'charset': 'UTF-8'
            },
            body: formText
        })
        .then(res => res.json())
        .then(res => {
            console.log('NLP response: ', res);
            updateResults(res);
        })
    } else {
        // output an error message\
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

export { handleSubmit }
