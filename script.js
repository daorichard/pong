import Ball from "./Ball.js";
import Paddle from "./Paddle.js";
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

let lastTime;
function update(time) {
  if (lastTime) {
    const delta = time - lastTime;
    // update code
    // ball.update(delta);
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}

// mouse movement with player paddle
document.addEventListener("mousemove", (e) => {
  playerPaddle.position = e.y;
});
window.requestAnimationFrame(update);
