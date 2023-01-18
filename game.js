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

//loop
function frame() {
  drawBoard();
  drawSquare(10, 2, "#FFFFFF");
  drawSquare(10, 3, "#FFFFFF");
  //   drawFood();
  //   moveSnake();
  //   drawSnake();
  //   displayScore();

  //   if (hitWall() || hitSelf()) {
  //     clearInterval(gameLoop);
  //     gameOver();
  //   }
}
gameLoop = setInterval(frame, fps);
