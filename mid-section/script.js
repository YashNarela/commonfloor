
let btn=document.querySelector(".btn")

let slider=document.querySelector(".slider")
let slider1=document.querySelector(".slider1")

btn.addEventListener('click',()=>{
    
    slider.style.cssText=`transform:translateX(0%)`
     slider1.style.cssText=`transform:translateX(-100%)`
})

let btn1=document.querySelector(".btn1")

btn1.addEventListener('click',()=>{

    slider.style.cssText=`transform:translateX(100%)`
     slider1.style.cssText=`transform:translateX(0%)`
})