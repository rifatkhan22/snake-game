//select canvas

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//add a border to cvs
canvas.style.border = "1px solid #fff";

//canvas dimensions
const width = canvas.width;
const height = canvas.height;

//game vars
const fps = 1000 / 15; //15 frames per sec
let gameLoop;
const squareSize = 20;
let gameStarted = false;

//game colors
let boardColor = "#000000";
let headColor = "#03c03c";
let bodyColor = "#95baf7";

//direction
let currentDirection = "";
const directions = {
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
};

//draw board
function drawBoard() {
  context.fillStyle = boardColor;
  context.fillRect(0, 0, width, height);
}

//draw square
function drawSquare(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);

  context.strokeStyle = boardColor;
  context.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
}

//snake
let snake = [
  { x: 2, y: 0 }, //head of the snake
  { x: 1, y: 0 }, //body of the snake
  { x: 0, y: 0 }, //tail of the snake
];

function drawSnake() {
  snake.forEach((square, index) => {
    const color = index === 0 ? headColor : bodyColor;
    drawSquare(square.x, square.y, color);
  });
}

function moveSnake() {
  if (!gameStarted) return;
  //get head position
  const headPosition = { ...snake[0] };

  //change head position
  switch (currentDirection) {
    case directions.RIGHT:
      headPosition.x += 1;
      break;
    case directions.LEFT:
      headPosition.x -= 1;
      break;
    case directions.UP:
      headPosition.y -= 1;
      break;
    case directions.DOWN:
      headPosition.y += 1;
      break;
  }
  //remove tail
  snake.pop();

  //unshift the new head
  snake.unshift(headPosition);
}

//keyup event listener
document.addEventListener("keyup", setDirection);
function setDirection(event) {
  const newDirection = event.key;

  if (!gameStarted) {
    gameStarted = true;
    gameLoop = setInterval(frame, fps);
  }

  currentDirection = newDirection;
}

//number of vertical/horizontal squares
const horizontalSquare = width / squareSize; //400/20 =>20
const verticalSquare = height / squareSize; //400/20 =>20
//food
let food = createFood(); //{return x and y positions}

function createFood() {
  let food = {
    x: Math.floor(Math.random() * horizontalSquare),
    y: Math.floor(Math.random() * verticalSquare),
  };
  while (snake.some((square) => square.x === food.x && square.y === food.y)) {
    food = {
      x: Math.floor(Math.random() * horizontalSquare),
      y: Math.floor(Math.random() * verticalSquare),
    };
  } //keep generating the food using the while loop as long food item and snake have the same position
  return food;
}

function drawFood() {
  drawSquare(food.x, food.y, "red");
}
//loop
function frame() {
  drawBoard();
  drawFood();
  moveSnake();
  drawSnake();
  //   displayScore();

  //   if (hitWall() || hitSelf()) {
  //     clearInterval(gameLoop);
  //     gameOver();
  //   }
}
frame();
