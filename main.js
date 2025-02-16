const td = document.getElementsByTagName("td");
const btn = document.getElementById("btn") ;
let scour = 0 ;
let num = 0 ;

function game() {
    let colorRed = Math.floor(Math.random() * 255) ;
    let colorGreen = Math.floor(Math.random() * 255) ;
    let colorBlue = Math.floor(Math.random() * 255) ;
    for(let x of td){
        x.style.background = `rgb(${colorRed} , ${colorGreen} , ${colorBlue})`;
        x.style.opacity = "1" ;
    }
}

function tdRandom() {
    let ops ;
    let random = Math.floor(Math.random() * td.length) ;
    if()
    td[random].style.opacity = ops ;
}

function startGane(){
    btn.style.display = "none" ;
    game() ;
}

btn.addEventListener("click" , startGane)