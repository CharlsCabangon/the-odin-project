import imgChickenburger from "../images/chicken-burger.png";
import imgCheeseburger from "../images/cheeseburger.png";
import imgFries from "../images/fries.png";

import addIcon from "../assets/elements/add-icon.svg";

const menuItems = [
    {
        name: "Chicken Burger",
        price: "₱110.00",
        image: imgChickenburger
    },
    {
        name: "Cheeseburger",
        price: "₱110.00",
        image: imgCheeseburger
    },
    {
        name: "Fries",
        price: "₱100.00",
        image: imgFries
    }
]

const content = document.getElementById("content");

export function loadMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    menuItems.forEach(item => {
        menuContainer.appendChild(createMenu(item));
    });

    content.appendChild(menuContainer);
};

function createMenu({ name, price, image }) {
    // MENU CARD
    const menuCard = document.createElement("div")
    menuCard.className = "menu__card";

    // MENU CARD IMAGE
    const menuCardImage = document.createElement("div")
    menuCardImage.className = "menu__card-img";
    const img = document.createElement("img");
    img.src = image;
    img.className = "menu__image";

    menuCardImage.appendChild(img);
    menuCard.appendChild(menuCardImage);

    // MENU CARD BODY
    const menuCardBody = document.createElement("div");
    menuCardBody.className = "menu__card-body";
    const menuCardText = document.createElement("div");
    menuCardText.className = "menu__card-text"

    const menuCardTitle = document.createElement("p");
    menuCardTitle.className = "menu__card-title";
    menuCardTitle.textContent = name;
    const menuCardPrice =document.createElement("p");
    menuCardPrice.className = "menu__card-price";
    menuCardPrice.textContent = price;

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

    return menuCard;
}