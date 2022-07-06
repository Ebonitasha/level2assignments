
const owner = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 1; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log(owner)
    return petObjects
}

runForLoop(["cat", "dog"])

// TASK1
const carrots = ["bright orange", "ripe", "rotten"]
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
//
const mapVegetables = carrots.map(function type(carrot){
    return {name: 'carrot', type: carrot}
})
   console.log(mapVegetables)


// TASK2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filter = people.filter(person => person.friendly === true)
console.log(filter)

// TASK3 
// function doMathSum(a, b) {
//     return a + b
// }
const doMathSum = (a, b) => a + b
console.log(doMathSum(1, 6))


// var produceProduct = function(a, b) {
//     return a * b
// }
const produceProduct = (a, b) => a * b
console.log(produceProduct(10, 6))

// TASK4
const user = [
{
    firstName: "Allie",
    lastName: "Willis",
    age: 100
}
]
// const printString = function parseSentence({firstName, lastName, age}){
//     return "Hi' ${firstname} "
// }
const printString = user.map(user => "Hi" + ' ' + user.firstName + ' ' + user.lastName + ' ' + "how dose it feel to be" + ' ' + user.age)
    
console.log(printString)
