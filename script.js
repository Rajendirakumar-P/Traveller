let mobile_header = document.querySelector(".header");
let hamburger = document.querySelector(".mobile_nav");

hamburger.addEventListener("click",function(){
    mobile_header.classList.toggle("active");
})