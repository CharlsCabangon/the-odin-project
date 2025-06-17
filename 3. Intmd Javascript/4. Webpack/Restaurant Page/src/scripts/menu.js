import imgChickenBurger from "../images/chicken-burger.png";

import addIcon from "../assets/elements/add-icon.svg";

export function loadMenu() {
    const content = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    // MENU CARD
    const menuCard = document.createElement("div")
    menuCard.className = "menu__card";

    // MENU CARD IMAGE
    const menuCardImage = document.createElement("div")
    menuCardImage.className = "menu__card-image";
    const chickenBurger = document.createElement("img");
    chickenBurger.src = imgChickenBurger;
    chickenBurger.className = "menu__image";

    menuCardImage.appendChild(chickenBurger);
    menuCard.appendChild(menuCardImage);

    // MENU CARD BODY
    const menuCardBody = document.createElement("div");
    menuCardBody.className = "menu__card-body";
    const menuCardText = document.createElement("div");
    menuCardText.className = "menu__card-text"

    const menuCardTitle = document.createElement("p");
    menuCardTitle.className = "menu__card-title";
    menuCardTitle.textContent = "Chicken Burger";
    const menuCardPrice =document.createElement("p");
    menuCardPrice.className = "menu__card-price";
    menuCardPrice.textContent = "110.00";

    menuCardText.appendChild(menuCardTitle);
    menuCardText.appendChild(menuCardPrice);
    menuCardBody.appendChild(menuCardText);

    const menuCardAction = document.createElement("div");
    menuCardAction.className = "menu__card-action";
    const btnIconAdd = document.createElement("img");
    btnIconAdd.src = addIcon;
    btnIconAdd.className = "btn__icon-add";

    menuCardAction.appendChild(btnIconAdd)
    menuCardBody.appendChild(menuCardAction);
    menuCard.appendChild(menuCardBody);

    // final appends
    menuContainer.appendChild(menuCard);
    content.appendChild(menuContainer);

};