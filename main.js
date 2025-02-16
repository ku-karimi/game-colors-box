const td = document.getElementsByTagName("td");
const btn = document.getElementById("btn") ;
let random ;
let scour ;
let num ;
let colorBlue ; let colorGreen ; let colorRed ;

function game() {
    colorRed = Math.floor(Math.random() * 255) ;
    colorGreen = Math.floor(Math.random() * 255) ;
    colorBlue = Math.floor(Math.random() * 255) ;
    for(let x of td){
        x.style.background = `rgb(${colorRed} , ${colorGreen} , ${colorBlue})`;
        x.style.opacity = "1" ;
    }
    tdRandom() ;
}

function tdRandom() {
    let ops ;
     random = Math.floor(Math.random() * td.length) ;
    if(scour <=3 ){
        ops = "0.6" ;
    }else if(scour > 3 && scour <= 6){
        ops = "0.7" ;
    }else if(scour > 6 && scour < 9){
        ops = "0.8" ;
    }else if(scour == 9){
        ops = "0.9" ;
    }else{
        return ;
    }
    td[random].style.opacity = ops ;
}

function handleClick(event) {
    if (scour < 10) {
        if (td[random] === event.target) {
            num++;
        }
        scour++;
        if (scour < 10) {
            game();
        } else {
            btn.style.display = "block";
            btn.style.background = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
            btn.innerHTML = num;
        }
    }
}



for(let x of td){
   x.addEventListener("click" , handleClick) ;
}

function startGane(){
    btn.style.display = "none" ;
    num = 0 ;
    scour = 0 ;
    game() ;
}

btn.addEventListener("click" , startGane)