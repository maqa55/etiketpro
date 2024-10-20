"use strict";

const nav=document.querySelector("#header .nav")
const ul=document.querySelector("#header ul")

nav.addEventListener("click",function(){
    ul.classList.toggle("activ")
})