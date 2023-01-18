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

//game colors
let boardColor = "#FFFFFF";

//draw board
function drawBoard() {
  context.fillStyle = boardColor;
  context.fillRect(0, 0, width, height);
}

//loop
function frame() {
  drawBoard();
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
