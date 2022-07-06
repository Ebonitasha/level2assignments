const form = document['input']

const addButton = document.getElementById("add")

addButton.addEventListener('click', function(event){
    event.preventDefault()
    const add1 = form.addFormOne.value
    const add2 = form.addFormTwo.value
    let addTotal = (Number(add1) + Number(add2))
    const result = document.getElementById('result')    
    result.textContent = addTotal
    const add =result.append(result)
})
const subButton = document.getElementById("sub")

subButton.addEventListener("click", function(event){
    event.preventDefault()
    const sub1= form.subFormOne.value
    const sub2 = form.subFormTwo.value
    let subTotal = (Number(sub1) - Number(sub2))
    const result = document.getElementById("result")
    result.textContent = subTotal
    const sub = result.append(result)
})
const multiButton = document.getElementById("multi")

multiButton.addEventListener("click", function(event){
    event.preventDefault()
    const mult1 = form.mulFormOne.value
    const mult2 = form.mulFormTwo.value
    let multTotal = Number(mult1) * Number(mult2)
    const result = document.getElementById("result")
    result.textContent = multTotal
    const mul = result.append(result)
})





