let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let arrayOfPpl = peopleArray.reduce(function (final, person) {
if (person.age >= 18){
    final.push(person)     
}
return final
}, [])
console.log(arrayOfPpl)



arrayOfPpl.sort((a,b)=>{
    if(a.lastName > b.lastName)
        return 1
    else if (a.lastName < b.lastName)
        return -1
    else if (a.lastName===b.lastName)
        return 0
})
console.log(arrayOfPpl)

let li = arrayOfPpl.map(array => "<li>"  + array.firstName + " " + array.lastName + " is " + array.age + "</li>")
console.log(li)
