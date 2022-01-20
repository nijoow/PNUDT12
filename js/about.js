const sectionLetterFront = document.querySelector('.section__letter-front');
const letterFrontTop = document.querySelector('.letter-front__Top');
const letterFrontMiddle = document.querySelector('.letter-front__Middle');
const letterFrontBottom = document.querySelector('.letter-front__Bottom');
const letterEndList = document.querySelectorAll('.letter-end__blur');
const letterEndRowList = document.querySelectorAll('.letter-end-row');

let moveFrontTop, moveFrontMiddle, moveFrontBottom;
let moryAlpha, ryAlpha;
function textAnimation(){
    moveFrontTop = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/3;
    moveFrontMiddle = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/10;
    moveFrontBottom = (sectionLetterFront.offsetLeft - sectionLetterFront.getBoundingClientRect().left)/2;
    letterFrontTop.style.transform = `translateX(` + -moveFrontTop +`px)`;
    letterFrontMiddle.style.transform = `translateX(` + -moveFrontMiddle +`px)`;
    letterFrontBottom.style.transform = `translateX(` + -moveFrontBottom +`px)`;

}
function blurOn(){
    this.classList.add('blurOn');
    for(let i=0; i<Math.floor(Math.random()*5+4);i++){
    letterEndList[Math.floor(Math.random()*23)].classList.add('blurOn');
    }
}
function blurOff(){
    for(let i = 0;i<letterEndList.length;i++){
        letterEndList[i].classList.remove('blurOn');
    }
}
window.addEventListener('wheel', textAnimation,true);
window.addEventListener('keydown',textAnimation,true);
window.addEventListener('scroll',textAnimation,true);

for(let i=0;i<letterEndList.length;i++){
    letterEndList[i].addEventListener('mouseenter', blurOn);
    letterEndList[i].addEventListener('mouseleave', blurOff);
}

