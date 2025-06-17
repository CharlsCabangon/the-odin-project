import craveyLogo from "../assets/logos/cravey-wordmark-red.svg";
import iconStarburst from "../assets/elements/element-4.svg";
import mascotBurger from "../assets/elements/mascot-burger.svg";
import mascotPizza from "../assets/elements/mascot-pizza.svg";

export function loadHome() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';

    // --- LEFT PANEL ---
    const heroLeft = document.createElement('div');
    heroLeft.className = 'hero__panel hero__panel--left';

    const logo = document.createElement('img');
    logo.src = craveyLogo;
    logo.alt = 'Cravey logo';
    logo.className = 'cravey__logo';

    const textGroup = document.createElement('div');
    textGroup.className = 'hero__text-group';

    const slogan = document.createElement('p');
    slogan.className = 'cravey__slogan';
    slogan.textContent = 'You crave it, we serve it!';

    const description = document.createElement('p');
    description.className = 'cravey__description';
    description.textContent = 'Where cravings don’t wait, and neither should you! Your go-to retro diner for bold bites, big vibes, and just the right amount of sass.';

    // Group slogan and description
    textGroup.appendChild(slogan);
    textGroup.appendChild(description);

    const ctaBtn = document.createElement('button');
    ctaBtn.className = 'btn btn--cta';
    ctaBtn.textContent = 'Order now!';

    // Assemble left panel
    heroLeft.appendChild(logo);
    heroLeft.appendChild(textGroup);
    heroLeft.appendChild(ctaBtn);

    // --- RIGHT PANEL ---
    const heroRight = document.createElement('div');
    heroRight.className = 'hero__side hero__panel--right';

    const decor1 = document.createElement('img');
    decor1.src = iconStarburst;
    decor1.alt = 'Icon';
    decor1.className = 'decor__icon decor__icon--starburst1';

    const burgerMascot = document.createElement('img');
    burgerMascot.src = mascotBurger;
    burgerMascot.alt = 'Burger mascot';
    burgerMascot.className = 'decor__mascot decor__mascot--burger';

    const pizzaMascot = document.createElement('img');
    pizzaMascot.src = mascotPizza;
    pizzaMascot.alt = 'Pizza mascot';
    pizzaMascot.className = 'decor__mascot decor__mascot--pizza';

    const decor2 = document.createElement('img');
    decor2.src = iconStarburst;
    decor2.alt = 'Icon';
    decor2.className = 'decor__icon decor__icon--starburst2';

    // Assemble right panel
    heroRight.appendChild(decor1);
    heroRight.appendChild(burgerMascot);
    heroRight.appendChild(pizzaMascot);
    heroRight.appendChild(decor2);

    // Append both panels to the home container
    homeContainer.appendChild(heroLeft);
    homeContainer.appendChild(heroRight);

    // --- Footer Background ---
    const footerBg = document.createElement('div');
    footerBg.className = 'footer__background';

    // Append all to #content
    content.appendChild(homeContainer);
    content.appendChild(footerBg);
};