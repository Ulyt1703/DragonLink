// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

let navigationScroll = document.querySelector(".Navbar")
hamburger.addEventListener("click", function(){
    if(navigationScroll.className === "Navbar"){
        navigationScroll.classList.add("new-Navbar")
    }
    else{
        navigationScroll.classList.remove("new-Navbar")
    }
})


let cardName = document.querySelector(".name__user")
let inputName = document.querySelector(".registration__username")
inputName.addEventListener("input", function(){
    let inputNameValue = inputName.value
    cardName.innerHTML = inputNameValue
})
let cardSurname = document.querySelector(".surname__user")
let inputSurname = document.querySelector(".registration__Surname")
inputSurname.addEventListener("input", function(){
    let inputSurnameValue = inputSurname.value
    cardSurname.innerHTML = inputSurnameValue
})

let cardRegister = document.querySelector(".card__register")
let cardBack = document.querySelector(".card__back")

let cardNumber = document.querySelector(".number__card")
let numberButton = document.querySelector(".registration__button-2")
numberButton.addEventListener("click", function(event){
    event.preventDefault()
    let randomOne = Math.floor(Math.random()*9000)+1000
    let randomTwo = Math.floor(Math.random()*9000)+1000
    let randomThree = Math.floor(Math.random()*9000)+1000
    let randomFour = Math.floor(Math.random()*9000)+1000
    cardNumber.innerHTML = `${randomOne} ${randomTwo} ${randomThree} ${randomFour}`
})

let cardCvv = document.querySelector(".CVV__code")
let formCVV = document.querySelector(".registration__button")
formCVV.addEventListener("click", function(event){
    event.preventDefault()
    cardRegister.style.display = "none"
    cardBack.style.display = "block"
    let randomCVV = Math.floor(Math.random()*900)+100
    cardCvv.innerHTML = `CVV  -  ${randomCVV}`
    
    setTimeout(function(){
        cardRegister.style.display = "block"
        cardBack.style.display = "none"
    },4400)
    return
})

let formDate = document.querySelector(".form-date")
let cardDate = document.querySelector(".card__date")
formDate.addEventListener("change", function(){
    let inputDateValue = formDate.value
    let dateSelected = inputDateValue.split("-")
    if(dateSelected.length === 3){
        let year = dateSelected[0]
        let years = Number(year) + 5
        let month = dateSelected[1]
        let day = dateSelected[2]
        cardDate.innerHTML = `${month} / ${years}`
    }
})

let inputLabel = document.querySelector(".Placeholder__text")
let fatherInputs = document.querySelector(".user__box")
inputName.addEventListener("input", function(){
    if(inputLabel.className === "user__box"){
        fatherInputs.classList.remove("Placeholder__text")
        inputLabel.classList.add("Placeholder__text__new")
    }
    else{
        inputLabel.classList.remove("Placeholder__text__new")
        inputLabel.classList.add("Placeholder__text")
    }
})

inputSurname.addEventListener("input", function(){
    if(inputSurname.className === "user__box"){
        fatherInputs.classList.remove("Placeholder__text")
        inputLabel.classList.add("Placeholder__text__new")
    }
    else{
        inputLabel.classList.remove("Placeholder__text__new")
        inputLabel.classList.add("Placeholder__text")
    }
})


document.getElementById("registration-name").setAttribute('autocomplete', 'off')
document.getElementById("registration-surname").setAttribute('autocomplete', 'off')