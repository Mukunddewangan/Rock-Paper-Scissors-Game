let comp_score = 0;
let user_score = 0;

let msg = document.querySelector("#msg");
let compScore = document.getElementById("comp-score");
let userScore = document.getElementById("user-score");

const getCompChoise = () => {
  let option = ["Rock", "Paper", "Scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "It's a draw, Play agin!";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, UserChoise, compChoise) => {
  if (userWin) {
    user_score++;
    userScore.innerText = user_score;
    console.log("You Win!");
    msg.innerText = `You Win! your ${UserChoise} beats ${compChoise}`;
    msg.style.backgroundColor = "green";
  } else {
    comp_score++;
    compScore.innerText = comp_score;
    console.log("You lose!");
    msg.innerText = `You lost! ${compChoise} beats your ${UserChoise}`;
    msg.style.backgroundColor = "red";
  }
};

const PlayGame = (UserChoise) => {
  console.log("User choosed = ", UserChoise);
  let compChoise = getCompChoise();
  console.log("Comp choosed = ", compChoise);
  if (compChoise === UserChoise) {
    drawGame();
  } else {
    let userWin = true;
    if (UserChoise === "Rock") {
      //sciccors, paper
      userWin = compChoise === "Paper" ? false : true;
    } else if (UserChoise === "Paper") {
      userWin = compChoise === "Rock" ? true : false;
    } else {
      userWin = compChoise === "Rock" ? false : true;
    }
    showWinner(userWin, UserChoise, compChoise);
  }
};

const choises = document.querySelectorAll(".choise");
choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    const UserChoise = choise.getAttribute("id");
    PlayGame(UserChoise);
  });
});
