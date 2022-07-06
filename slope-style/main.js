function collectAnimals(a , b,  ...rest){
   console.log(a, b, ...rest)
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "monkey")

// NUMBER 2
// function combineFruit(fruit, sweets, vegetables){
//    return {}
// }

// combineFruit(["apple", "pear"],
//             ["cake", "pie"],
//             ["carrot"])
// //=> 
// {
//        fruit: ["apple", "pear"],
//        sweets: ["cake", "pie"],
//        vegetables: ["carrot"]
//     }


// NUMBER 3
const group1 = [10,20,30,40]
const group2 = [50,60,70,80]
const group3 = [90,100,120,130]

function arrOfNumbers( a, b, ...rest){
   console.log (a, b, ...rest)
}

arrOfNumbers(...group1, ...group2, ...group3)

console.log(arrOfNumbers)

// NUMBER4
// let numbers = [a,b,c,d,e];

// function product(numbers) {
// return numbers.reduce((acc, number) => acc * number
//    , 1)
//  }
// console.log(numbers)

//  NUMBER5
function unshift(array, a, b, ...rest ){
   console.log( a, b, ...rest, ...array)
 }
 
//  NUMBER6
const populatePeople = (names) => names.map((name) => {
   name = name.split(" ");
   ({firstName, lastName} = {firstName: name[0], lastName: name[1]})
  return {
           firstName: firstName,
           lastName: lastName
       }  
});
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))