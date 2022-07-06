let nums = [5, 9, 18, 20, 4, 2, 7]

let result = nums.reduce((final, num) => final + num, 0);
console.log(result)

//  ARRY OF #'S INTO STRING OF ALL NUMBERS'

// let joinNums = nums.join("")
// console.log(joinNums)

// let string = nums.reduce((acc, num) => {
// num = joinNums
// acc = num
// return acc + ""
// }, [])
// console.log(string)

let str = nums.reduce(function(finalString, num){
    finalString = finalString + num
    // "59" = "59" + 18
    // "5918"
    return finalString
}, "")  // "591820427"
console.log(str)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voteCount = voters.reduce((all, voter) => {
if(voter.voted){
    all++
}
return all
}, 0)
console.log(voteCount)

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const cantAfford = wishlist.reduce((acc, wishlist) => acc + wishlist.price, 0)
console.log(cantAfford)

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let allArray = arrays.reduce((three, array) =>  {
three.push(...array)
return three
}, [])
console.log(allArray)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterObj = voters.reduce(function (final, voter){
    if(voter.age <= 25){
        final.numYoungPeople++
        //if(voter.voted) final.numYoungVotes++
    }else if (voter.age >= 26 && voter.age <= 35){
        final.numMidsPeople++
    }else if(voter.age >= 36 && voter.age <= 55){
        final.numOldsPeople++
    }
    
    if(voter.age <= 25 && voter.voted){
        final.numYoungVotes++
    }else if(voter.age >= 26 && voter.age <= 35 && voter.voted){
        final.numMidVotesPeople++
    }else if(voter.age >= 36 && voter.age <= 55 && voter.voted){
        final.numOldVotesPeople++
    }
    return final
}, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople:0, numMidsPeople: 0, numOldVotesPeople:0, numOldsPeople:0})

console.log(voterObj)