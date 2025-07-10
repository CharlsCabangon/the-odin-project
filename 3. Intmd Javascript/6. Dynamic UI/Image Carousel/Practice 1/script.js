// Select all buttons that have the attribute [data-carousel-button] (i.e., the navigation arrows)
const buttons = document.querySelectorAll("[data-carousel-button]");

// For each of those buttons (left and right arrows)
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Determine direction:
    // If the button's data attribute is "next", move forward (1)
    // If it's "prev", move backward (-1)
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // Find the nearest carousel container relative to the clicked button,
    // then find the slide list (<ul>) inside that carousel
    const slides = button
      .closest("[data-carousel]") // go up to the closest carousel container
      .querySelector("[data-slides]"); // find the slides list within it

    // Find the currently active slide (marked with data-active)
    const activeSlide = slides.querySelector("[data-active]");

    // Calculate the new index based on the direction clicked
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // If we go past the first slide (index < 0), wrap around to the last
    if (newIndex < 0) newIndex = slides.children.length - 1;

    // If we go past the last slide, wrap around to the first (index 0)
    if (newIndex >= slides.children.length) newIndex = 0;

    // Add data-active to the new slide so it's shown
    slides.children[newIndex].dataset.active = true;

    // Remove data-active from the current slide so it's hidden
    delete activeSlide.dataset.active;
  });
});