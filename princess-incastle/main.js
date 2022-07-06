
class Player{
constructor(name, totalCoins, status, hasStar, gameActive){
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    this.gameActive = gameActive
}


setName(namePicked) {
   let randomSetName = Math.floor(Math.random()*2)
    if (randomSetName === 0){
        namePicked = 'Mario'
    }else if(randomSetName === 1){
        namePicked = 'Luigi'
}       
this.name = namePicked
}

// status = ["Small", "Big", "PowerUp", "Dead"]


gotHit(){
    console.log("got hit") 
 if(this.status === "star"){
     this.status = "PowerUp"
     this.hasStar = false
}else if(this.status === "PowerUp"){
    this.status = "Big"
} else if(this.status === "Big"){
    this.status = "Small"
}else if(this.status === "Small"){
    this.status = "Dead"
    this.gameActive = false
    console.log("GAME OVER")
}

}
gotPowerup(){
   console.log("got power") 
   if(this.status === "PowerUp"){
       this.status = "star"
       this.hasStar = true
   }else if(this.status === "Big"){
       this.status = "PowerUp"
   }else if(this.status === "Small"){
       this.status = "Big"
   }else if(this.status === "dead"){
       
   }
}
addCoins(){
    // this.totalCoins = 1
    // if(this.totalCoins >= 1){
        this.totalCoins ++
// }
}
   
getStar(){
    this.hasStar = 1
    if(this.hasStar >= 1){
        this.hasStar ++
        console.log('You get a Star')
    }
}    
// SET INTERVALS

print(){
    console.log(`\n Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`);
    } 
    
// STOP PLAYER CLASS FROM RUNNING 
// endGame() {
//     this.gameActive = false  
//     console.log("You lost the game, You died")
//     console.log("GAME OVER")
//     // console.log(`Your final score is ${totalCoins}`)
//     clearInterval(runTime)
// }
}
// constructor(name = "", totalCoins, status = "Small", hasStar, gameActive = true){
Player = new Player( "" , 0, "Big", false,)
Player.setName("Mario")


function marioCondition(){
    let randomRange = Math.floor(Math.random()*3)
    if(randomRange === 0){
    Player.gotHit()
    Player.print()
    }else if(randomRange === 1){
    Player.gotPowerup()
    Player.print()
    }else if(randomRange === 2){
    Player.addCoins()   
    Player.print()    
}
 if(Player.gameActive === false){
     clearInterval(intervalId)
     console.log("You lost the game, You died")
 }

} 
const intervalId =setInterval(marioCondition, 3000)

