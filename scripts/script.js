'use strict'

const $board = document.querySelector('#board'),
  $children = [];

for (let i = 0; i < 256; i++) {

  // Create a new element
  let $square = document.createElement("div")
  $square.setAttribute('class', 'square');
  $square.style.cssText = `width: 32px; height: 32px;`

  // Creating a tree of elements
  $children.push($square);
}

// Adding the tree of elements to the parent container
$board.replaceChildren(...$children);

const $square = document.querySelectorAll('.square');

$square.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    element.setAttribute('class', 'square passed');
  });
});