const header = document.querySelector(".header");
const navWorks = document.querySelector(".navi-first__li__works");
const naviSecond = document.querySelector('.navi-second')


function slideMenu(){
    naviSecond.classList.toggle("navi-second__slide-on");
}
navWorks.addEventListener('click', slideMenu)

