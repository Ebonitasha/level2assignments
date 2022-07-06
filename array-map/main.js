
const arr = [10, 20, 30, 40, 50]

const result = arr.map(function doubleNumbers(arr){
    return arr * 2
})
console.log(result)

const arr1 = [10, 20, 30, 40, 50]

const result1 = arr1.map(function stringItUp(arr1){
    return arr1 + ""
})
console.log(result1)

let arr2 = ["allie", "robert", "jacuqeline", "eriyah", "zara"]

let toCaps = x => x[0].toUpperCase() + x.slice(1).toLowerCase()
let caps = arr2.map(toCaps)
console.log(caps)

let user = [
{
    name: "Robert Willis",
    age: 75
    },
{
    name: "Allie Willis",
    age: 74
    },
 {
    name: "Jackie Willis",
    age: 53
    },
{
    name: "Eriyah Williams",
    age: 11
    },
{
    name: "Zara Robertson",
    age: 5
    }]
const result2 = user.map(function(user){
    return user.name
})
console.log(result2)

const canGo = user.map(user => user.age >= 18 ? user.name  +  "Can go see Matrix": user.name +  "Can not go see the Matrix")
console.log(canGo)

const names = user.map(user => "<h1>" + user.name + "</h1>")
console.log(names)




