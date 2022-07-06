arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = arr.filter(num => num >= 5)
console.log(result)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNum = numbers.filter(num => num % 2 ===0)
console.log(evenNum)

const colors = ["purple", "red", "black", "orange", "pink", "yellow"]

const fiveCharater = colors.filter(function(color){
    if(color.length <= 5)
    return colors
})
console.log(fiveCharater)

const allMembers = [ 
{ name: "Angelina Jolie", member: true },
{ name: "Eric Jones", member: false },
{ name: "Paris Hilton", member: true },
{ name: "Kayne West", member: false },
{ name: "Bob Ziroll", member: true }
]

const clubMembers = allMembers.filter(allMember => allMember.member === false)
console.log(clubMembers)

const oldMembers = [ 
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 25 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 18 },
    { name: "Bob Ziroll", age: 9 }
    ]

const oldEnough = oldMembers.filter(old => old.age >=18)
console.log(oldEnough)