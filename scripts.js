const body = document.getElementById("body");

let testInterval;
let speed = 0;

function speedPlus() {
  if (speed === 0) {
    return speed++;
  }
}

function speedMinus() {
  if (speed === 1) {
    return speed--;
  }
}

function color() {
  body.classList.toggle("red");
}

body.addEventListener("click", function () {
  console.log(speed);
  if (speed === 0) {
    speedPlus();
    return (testInterval = setInterval(color, 300));
  } else {
    speedMinus();
    return clearInterval(testInterval);
  }
});
