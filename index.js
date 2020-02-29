/* eslint-disable quotes */

function moveEyeball() {
  const balls = document.getElementsByClassName("ball");
  document.onmousemove = function() {
    let x = (event.clientX * 100) / window.innerWidth + "%";
    let y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 1; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = "Translate(-" + x + ",-" + y + ")";
    }
  };
}

function handlePage() {
  moveEyeball();
}

$(handlePage);
