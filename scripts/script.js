'use strict'

const $gridSize = document.querySelector('#grid-size'),
  $board = document.querySelector('#board');

$gridSize.addEventListener('click', () => {
  let grid = Number(prompt('Grid Size')),
    $children = [];

  // Validations
  if (Number.isInteger(grid) === false) return alert('Enter a valid Number between 2 and 100');
  if (grid <= 1 || grid > 100) return alert('The Grid Size must be between 2 and 100');

  $board.style.cssText = `width: 960px; height: 960px;`;

  for (let i = 0; i < (grid * grid); i++) {

    // Create a new element
    let $square = document.createElement("div")
    $square.setAttribute('class', 'square');
    $square.style.cssText = `width: ${960 / grid}px; height: ${960 / grid}px;`;

    // Insert the new element before the first child
    $children.push($square);
  }
  $board.replaceChildren(...$children);
});

// Event that paints the squares of the board
$board.addEventListener('mouseenter', () => {
  const $display = $board.childNodes;
  $display.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.setAttribute('class', 'square passed');
    });
  });
});