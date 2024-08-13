let boxColor = document.querySelector(".box")
window.addEventListener("scroll", function(){
    if(this.scrollY > 700){
        boxColor.classList.add("new")
    }
    else{
        boxColor.classList.remove("new")
    }
})

let buttonWindow = document.querySelector(".registration__button")
window.addEventListener("load", function(){
    buttonWindow.classList.add("load-btn")
})

let buttonFinish = document.querySelector(".registration__button-3")
buttonFinish.addEventListener("click", function(){
    let nameModal = document.querySelector(".registration__username")
    let surnameModal = document.querySelector(".registration__Surname")
    let buttonNumber = document.querySelector(".registration__button-2")

    let nameModalValue = nameModal.value
    let surnameModalValue = surnameModal.value
    
    
    if(nameModalValue.length === 0 || nameModal.value[0] != nameModal.value[0].toLocaleUpperCase() ){
        let firstModal = document.querySelector(".modal-name")
        if(firstModal.className === "modal-name"){
            firstModal.classList.add("false-modal")
            nameModal.style.border = "3px solid red"
            nameModal.style.borderRadius = "15px"
        }
        setTimeout(function(){
            firstModal.classList.remove("false-modal")
        },5500)
        return
    }
    else if(surnameModalValue.length === 0 || surnameModal.value[0] != surnameModal.value[0].toLocaleUpperCase() ){
        nameModal.style.border = "none"
        nameModal.style.borderRadius = "0px"
        nameModal.style.borderBottom = "1px solid lime"
    }
    else{
        window.location.href = "../HTML/finish.html"
    }
})