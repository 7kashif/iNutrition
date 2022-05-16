function setUpScrollingWithButtons() {
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');
    const buttonRightFruits = document.getElementById('slideRightFruits');
    const buttonLeftFruits = document.getElementById('slideLeftFruits');
    const buttonRightMeats = document.getElementById('slideRightMeats');
    const buttonLeftMeats = document.getElementById('slideLeftMeats');
    const buttonRightDrinks = document.getElementById('slideRightDrinks');
    const buttonLeftDrinks = document.getElementById('slideLeftDrinks');

    buttonRight.onclick = function () {
        document.getElementById('vegetableItems').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
        document.getElementById('vegetableItems').scrollLeft -= 300;
    };
    buttonRightFruits.onclick = function () {
        document.getElementById('fruitsItems').scrollLeft += 300;
    };
    buttonLeftFruits.onclick = function () {
        document.getElementById('fruitsItems').scrollLeft -= 300;
    };
    buttonRightMeats.onclick = function () {
        document.getElementById('meatsItems').scrollLeft += 300;
    };
    buttonLeftMeats.onclick = function () {
        document.getElementById('meatsItems').scrollLeft -= 300;
    };
    buttonRightDrinks.onclick = function () {
        document.getElementById('drinksItems').scrollLeft += 300;
    };
    buttonLeftDrinks.onclick = function () {
        document.getElementById('drinksItems').scrollLeft -= 300;
    };
}

window.addEventListener('load', setUpScrollingWithButtons, false)
