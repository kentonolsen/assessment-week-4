


const formSubmit = document.querySelector('form')
const baseURL = 'http://localhost:5500/api/names'
const namesBtn = document.querySelector('#get-names')
const webBody = document.querySelector('body')
const nameField = document.querySelector(('#name-text'))

const submitFunction = function(e) {
    e.preventDefault()
    let body = nameField.value
    axios.post(baseURL, body)
    .then(sendNames)
}
console.log('working')

const namesFunction = function(e) {
    axios.get(baseURL)
    .then(sendNames)
}
const sendNames = function(arr) {
    let namesArr = arr.data
    let newPara = document.createElement('p')
    newPara.innerHTML = `<p>${namesArr}</p>`
    webBody.appendChild(newPara)

    
    }

namesBtn.addEventListener('click', namesFunction)
formSubmit.addEventListener('submit', submitFunction)