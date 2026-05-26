window.onload = function () {
    alert("Welcome to CRETWRLD.CO - Your Ultimate Streetwear Destination! 🛍️");
};

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Product Added Successfully To Cart! 🛒");

    });

});

let productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "scale(1)";

    });

});

let socialIcons = document.querySelectorAll(".social-links img");

socialIcons.forEach(icon => {

    icon.addEventListener("mouseenter", function () {

        icon.style.transform = "rotate(10deg) scale(1.2)";
        icon.style.transition = "0.3s";

    });

    icon.addEventListener("mouseleave", function () {

        icon.style.transform = "rotate(0deg) scale(1)";

    });

});

const heroButton = document.querySelector(".btn");

heroButton.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });

});

setInterval(function () {

    document.title = "CRETWRLD.CO";

    setTimeout(function () {

        document.title = "CRETWRLD.CO";

    }, 1000);

}, 2000);