const form = document['travel']
const submit = document.getElementById("submit")

function formAlert(event){
event.preventDefault()
const firstName = form.firstName.value;
const lastName = form.lastName.value;
const age = form.age.value
const gender = form.gender.value
const location = form.location.value
const foodSelection = form.dietary
let foodChoice = []
for (let i=0; i < form.dietary.length; i++){
    if(foodSelection[i].checked){
        foodChoice.push(foodSelection[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + foodChoice);

}
submit.addEventListener("click", formAlert);
