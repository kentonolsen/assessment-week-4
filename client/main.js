


const formSubmit1 = document.querySelector('#form-1-submit')
const formSubmit2 = document.querySelector('#form-2-submit')
const baseURL = 'http://localhost:5500/api/names'
const namesBtn = document.querySelector('#get-names')
const webBody = document.querySelector('body')
const nameField = document.querySelector(('#name-text'))
const nameUpdate = document.querySelector('#update-name')
const nameId = document.querySelector('#delete-field')
const deleteBtn = document.querySelector('#delete-submit')
const currentName = document.querySelector('#current-name')

const submitFunction = function(e) {
    e.preventDefault()
    let body = {
        name: nameField.value
    }
    axios.post('/api/names', body)
    .then(sendNames)
}
const updateFunction = function(e) {
    e.preventDefault()
    let nameTime = currentName.value
    let updatedName = {
        name: nameUpdate.value
    }
    console.log(nameUpdate.value)
    axios.put(`/api/names/${nameTime}`, updatedName)
    .then()
}
console.log('working')

const namesFunction = function(e) {
    axios.get('/api/names')
    .then(sendNames)
}
const sendNames = function(arr) {
    let namesArr = arr.data
    let newPara = document.createElement('p')
    newPara.innerHTML = `<p>${namesArr}</p>`
    webBody.appendChild(newPara)
}
const deleteFunction = function(e){
    e.preventDefault()
    let idNumber = nameId.value
    axios.delete(`/api/names/${idNumber}`)
}

namesBtn.addEventListener('click', namesFunction)
formSubmit1.addEventListener('click', submitFunction)
formSubmit2.addEventListener('click', updateFunction)
deleteBtn.addEventListener('click', deleteFunction)
