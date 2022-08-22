/* slider script */
//calc container width
let containerWidth = document.getElementById('container').offsetWidth;
let sliderOffset = 0;
//slider items container
let sliderItems = document.querySelectorAll('.review__item');
//slider dots container
let sliderDots = document.querySelector('.review-rate__dots');
//create dot
let dot = document.createElement('div');
//slider icon
let sliderIcon = document.querySelector('.review-media__click-icon');
//max slider width
let maxWidth = sliderItems.length * containerWidth;
//media query < 560px
const mediaQuery = window.matchMedia('(max-width: 560px)')
if (mediaQuery.matches) {
    for (i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.minWidth = containerWidth + 'px';
    }
    //start auto slide function
    autoSlide();
}
//slider animation function
function sliderClick() {
    if (containerWidth * (sliderOffset - 1) > -(sliderItems.length * containerWidth)) {
        sliderOffset--;
        document.querySelector('.review-inner').style.transform = "translateX(" + (containerWidth + 16) * sliderOffset + "px)";
    }
    else {
        sliderOffset = 0;
        document.querySelector('.review-inner').style.transform = "translateX(" + (containerWidth + 16) * sliderOffset + "px)";
    };
    //start active dot function
    getActiveDot();
};
//animation function on click
sliderIcon.onclick = sliderClick;
//array for dots
var dotArray = [];
//auto slide function
function autoSlide() {
    setTimeout(function () {
        sliderClick();
        autoSlide();
    }, 4000);
};
//create dots function
function createDots() {
    for (i = 0; i < sliderItems.length; i++) {
        var div = document.createElement('div');
        sliderDots.appendChild(div);
        div.classList.add('review-rate__dot');
        dotArray[i] = div;
        dotArray[0].classList.add('review-rate__dot--active');
    };
};
//active dot function
function getActiveDot() {
    //delete "--active" item modifier
    for (i = 0; i < dotArray.length; i++) {
        dotArray[i].classList.remove('review-rate__dot--active');
    };
    //add"--active" item modifier
    dotArray[-sliderOffset].classList.add('review-rate__dot--active');
};
//start create dots function
createDots();