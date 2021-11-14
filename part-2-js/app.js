const BASE_URL = 'https://deckofcardsapi.com/api/deck';
let firstCard;
let secondCard;
let deckId;
const $btn = $('button');
const $cardArea = $('#card-area');

1;
$.getJSON(`${BASE_URL}/new/draw/`).then((data) => {
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

// 2.

$.getJSON(`${BASE_URL}/new/draw/`)
  .then((data) => {
    firstCard = data.cards[0];
    deckId = data.deck_id;
    return $.getJSON(`${BASE_URL}/${deckId}/draw/`);
  })
  .then((data) => {
    secondCard = data.cards[0];
    [firstCard, secondCard].forEach((card) => {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  });

// 3.

$.getJSON(`${BASE_URL}/new/shuffle/`).then((data) => {
  deckId = data.deck_id;
});

$btn.on('click', function () {
  $.getJSON(`${BASE_URL}/${deckId}/draw`).then((data) => {
    let cardImg = data.cards[0].image;
    $cardArea.append(
      $('<img>', {
        src: cardImg,
      })
    );
    if (data.remaining === 0) $btn.remove();
  });
});
