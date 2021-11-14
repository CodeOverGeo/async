const BASE_URL = 'http://numbersapi.com';

// 1.
const favNumber = 74;
$.getJSON(`${BASE_URL}/${favNumber}?json`).then((data) => {
  $('body').append(`<p>${data.text}</p>`);
});

// 2.
const favNumbers = [15, 85, 1138];
$.getJSON(`${BASE_URL}/${favNumbers}?json`).then((data) => {
  for (let i = 0; i < favNumbers.length; i++) {
    $('body').append(`<p>${data[favNumbers[i]]}</p>`);
  }
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${BASE_URL}/${favNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => {
    $('body').append(`<p>${data.text}</p>`);
  });
});
