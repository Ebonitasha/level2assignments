const numbers = [25, 12, 9, 50, 80, 15, 74, 2, 34]

numbers.sort((a, b) => a - b)

console.log(numbers)

numbers.sort((a, b) => b - a)
console.log(numbers)



let animals = ["dog", "cat", "worn", "mouse", "rooster", "turtle", "frog"]
animals.sort((a, b) => a.length - b.length)
console.log(animals)


animals.sort()
console.log(animals)

const byAge =[
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

function compare(a, b){
return a.age - b.age
}
byAge.sort(compare)
console.log(byAge)
