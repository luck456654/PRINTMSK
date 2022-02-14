let burger=document.querySelector(".header__burger");
let nav=document.querySelector(".print__nav");
burger.addEventListener("click",openburger);
document.addEventListener("resize",openburger);
let i=0;

function openburger(){
   
    if(i==0){
    nav.style.transform="translateX(411px)";
    nav.style.transition="transform 2s linear";
    burger.src="img/burger-close.png";
    i=1;
    }
    else{
        burger.src="img/burger-icon.png";
        i=0;
    nav.style.transform="translateX(-411px)";
    nav.style.transition="transform 2s linear";    
    }
}


