const exploreCards = document.querySelectorAll('.explore__card');

exploreCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');  // Toggles flipped class on click
  });
});