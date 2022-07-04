function main() {
    setUpResponsiveNavBar()
    setUpScrollingWithButtons()
    toggleLoginDialog()
}

function setUpResponsiveNavBar() {
    const menuButton = document.getElementById('menuButton');
    const navOptions = document.getElementsByClassName('navOptions')[0];

    menuButton.addEventListener('click', () => {
        navOptions.classList.toggle('active');
    })
}

function toggleLoginDialog() {
    const modal = document.querySelector("#loginDialog");
    const openModal = document.querySelector(".profileButton");
    const closeModal = document.querySelector(".continueButton");

    openModal.addEventListener("click", () => {
        modal.showModal();
    });

    closeModal.addEventListener("click", () => {
        modal.close();
    });
}

function setUpScrollingWithButtons() {
    const buttonRightVegetables = document.getElementById('slideRight');
    const buttonLeftVegetables = document.getElementById('slideLeft');
    const buttonRightFruits = document.getElementById('slideRightFruits');
    const buttonLeftFruits = document.getElementById('slideLeftFruits');
    const buttonRightMeats = document.getElementById('slideRightMeats');
    const buttonLeftMeats = document.getElementById('slideLeftMeats');
    const buttonRightDrinks = document.getElementById('slideRightDrinks');
    const buttonLeftDrinks = document.getElementById('slideLeftDrinks');

    buttonRightVegetables.onclick = function () {
        document.getElementById('vegetableItems').scrollLeft += 300;
    };
    buttonLeftVegetables.onclick = function () {
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

window.addEventListener('load', main, false)

