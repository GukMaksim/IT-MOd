export function cardsModule() {
  let cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      let cardFace = this.querySelector('.card-face');
      let cardBack = this.querySelector('.card-back');

      cardFace.classList.toggle('hidden');
      cardBack.classList.toggle('hidden');
    });
  });
}