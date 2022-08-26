// Form variables (global)
const score = document.getElementById('score');
const subjectivity = document.getElementById('subjectivity');
const irony = document.getElementById('irony');
const text = document.getElementById('text');

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
