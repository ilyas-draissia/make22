const menuBtn=document.querySelector(".menu-btn");
const burger=document.querySelector(".menu-btn__burger");
const nav=document.querySelector(".nav");

let showMenu=false;

const toggle = ()=>{
  burger.classList.toggle("open");
  nav.classList.toggle("open");
};

menuBtn.addEventListener("click",()=>{
  if(!showMenu){
    toggle();
    showMenu=!showMenu;
  }else{
    toggle();
    showMenu;
  }
})