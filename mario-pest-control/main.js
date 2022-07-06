const form = document['baddies']

const submit = document.getElementById("submit")

submit.addEventListener('click', function(event){
event.preventDefault()
let cheep = form.pest1.value * 11
let bobombs = form.pest2.value * 7
let goombas = form.pest3.value * 5
let pestTotal = Number(cheep) + Number(bobombs) + Number(goombas)
const result = document.getElementById("result")
result.textContent = pestTotal

})

