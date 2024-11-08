const btnSwitch = document.querySelector("#switch");
const navigationLinks = document.querySelectorAll(".navigation__links");
const card = document.querySelector(".card");
const cardSocial = document.querySelectorAll(".card__list-social");

const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");


btnSwitch.addEventListener("click", () => {
    if (sunIcon.style.display === "none") {
        sunIcon.style.display = "inline"; 
        moonIcon.style.display = "none";   
    } else {
        sunIcon.style.display = "none"; 
        moonIcon.style.display = "inline"; 
    }

    document.body.classList.toggle("dark")
    card.classList.toggle("dark");

    cardSocial.forEach(link => {
       link.classList.toggle("dark");
    });
    navigationLinks.forEach(link => {
        link.classList.toggle("dark");
    });
});