function sum(x, y){
    if ((isNaN)(x) || (isNaN)(y)){
        throw "you must use a number"
    }else
        return x + y
}
try {
    console.log(sum("1","2"))

}
catch (err){
console.log(err)
}

var user ={
    username : "sam",
    password : "123abc"
};

 let login = (username, password) => {
    if(username != "sam"){
        throw "username is incorrect"
    }else if(isNaN(password)){
        throw "password is incorrect"
    }else 
    console.log("log in successful")
}

try {
    console.log(login("sam", 123456))

}
catch(err){
    console.log(err)
}

try {
    console.log(login(123, "sam"))

}
catch(err){
    console.log(err)
}