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

//game colors
let boardColor = "#000000";
let headColor = "#03c03c";
let bodyColor = "#95baf7";

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

//loop
function frame() {
  drawBoard();
  //   drawFood();
  //   moveSnake();
  drawSnake();
  //   displayScore();

  //   if (hitWall() || hitSelf()) {
  //     clearInterval(gameLoop);
  //     gameOver();
  //   }
}
gameLoop = setInterval(frame, fps);
