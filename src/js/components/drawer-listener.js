// To slide the drawer

let menuButton = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav-links");
let pushed = false;
menuButton.addEventListener("click", function (e) {
    if (pushed) {
        navLinks.style.left = "-100vw";
        pushed = false;
    } else {
        pushed = true;
        navLinks.style.left = "0"
    }
});

menuButton.addEventListener("mouseout", function (e) {
console.log(e.target);
    navLinks.style.left = "-100vw"
    pushed = false;
});