
const para=document.getElementById("para")

function myfunction(){
    para.style.display='block'
}
function myfunction1(){
    para.style.display='none'
}

const mousemove=document.getElementById("move")

function myProject(){
    mousemove.style.display='block'
}
function myProject1(){
    mousemove.style.display='none'
}

let bar=document.querySelector('.bar');

let sidebar=document.querySelector('.sidebar');

bar.addEventListener('click',()=>{

    sidebar.style.cssText=` transform:translateX(0%);`
})


let cancel=document.querySelector('.cancel')

cancel.addEventListener('click',()=>{

    sidebar.style.cssText=`transform:translate(-100%)`;
})