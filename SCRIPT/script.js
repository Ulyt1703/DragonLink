let titleScroll = document.querySelector(".title-info")
window.addEventListener("scroll", function(){
    if(this.scrollY > 300){
        titleScroll.classList.add("new-title")
    }
    else{
        titleScroll.classList.remove("new-title")
    }
})

/* let pillButton = document.querySelector(".green-pill")
window.addEventListener("load", function(){
    pillButton.classList.add("new-button")
}) */

let navbarScroll = document.querySelector(".Navbar")
window.addEventListener("load", function(){
    navbarScroll.classList.add("new-navbar")
})

let titleAbout = document.querySelector(".title-about")
window.addEventListener("scroll", function(){
    if(scrollY > 1600){
        titleAbout.classList.add("new-about")
    }
    else{
        titleAbout.classList.remove("new-about")
    }
})

let footerInfo = document.querySelector(".info-footer")
window.addEventListener("scroll", function(){
    if(scrollY > 3100){
        footerInfo.classList.add("lime-text")
    }
    else{
        footerInfo.classList.remove("lime-text")
    }
})

/* let cardScroll = document.querySelector(".link-card")
window.addEventListener("scroll", function(){
    if(scrollY > 1350){
        cardScroll.classList.add("new-card")
    }
    else{
        cardScroll.classList.remove("new-card")
    }
}) */