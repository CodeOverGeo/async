const BASE_URL = 'https://deckofcardsapi.com/api/deck';
let firstCard;
let secondCard;
let deckId;
const $btn = $('button');
const $cardArea = $('#card-area');

1;
async function singleCard() {
  let data = await $.getJSON(`${BASE_URL}/new/draw`);
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}
singleCard();

// 2.
async function twoCard() {
  firstCard = await $.getJSON(`${BASE_URL}/new/draw`);
  deckId = firstCard.deck_id;
  secondCard = await $.getJSON(`${BASE_URL}/${deckId}/draw`);
  [firstCard, secondCard].forEach((card) => {
    let { suit, value } = card.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  });
}
twoCard();

// 3.
async function drawCard() {
  let data = await $.getJSON(`${BASE_URL}/new/shuffle`);
  $btn.on('click', async function () {
    let newCardData = await $.getJSON(`${BASE_URL}/${data.deck_id}/draw`);
    let cardImg = newCardData.cards[0].image;
    $cardArea.append(
      $('<img>', {
        src: cardImg,
      })
    );
    if (newCardData.remaining === 0) $btn.remove();
  });
}

drawCard();
