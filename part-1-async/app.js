const BASE_URL = 'http://numbersapi.com';

// 1.
const favNumber = 74;
async function oneNumber() {
  let data = await $.getJSON(`${BASE_URL}/${favNumber}?json`);
  console.log(data);
}
oneNumber();

// 2.
const favNumbers = [15, 85, 1138];
async function multNumbers() {
  let data = await $.getJSON(`${BASE_URL}/${favNumbers}?json`);
  console.log(data);
}
multNumbers();

// 3.
async function multFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${BASE_URL}/${favNumber}?json`))
  );
  facts.forEach((data) => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
multFacts();
