let gamseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game is started");
    started = true;
    level = 0;
    gamseq = [];
    levup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let rdn = Math.floor(Math.random() * 4); // Changed from 3 to 4
  let rdncolor = btns[rdn];
  let rndbut = document.querySelector(`.${rdncolor}`);
  gamseq.push(rdncolor);

  btnflash(rndbut);
}

function checkAns(indx) {
  if (gamseq[indx] === userseq[indx]) {
    if (userseq.length === gamseq.length) {
      setTimeout(levup, 500); // Wait a bit before next level
    }
  } else {
    h2.innerText = `Game Over! Press any key to restart.`;
    document.body.classList.add("game-over");
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);

    resetGame();
  }
}

function btnpress() {
  let bttn = this;
  btnflash(bttn);
  let usercol = bttn.getAttribute("id");
  userseq.push(usercol);
  checkAns(userseq.length - 1);
}

function resetGame() {
  started = false;
  gamseq = [];
  userseq = [];
  level = 0;
}

let allbtns = document.querySelectorAll(".btn");
for (let btnss of allbtns) {
  btnss.addEventListener("click", btnpress);
}
