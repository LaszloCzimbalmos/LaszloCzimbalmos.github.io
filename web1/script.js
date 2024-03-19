let userScore = 0;
let computerScore = 0;
let draws = 0 ;

const drawsSpan = document.getElementById("draws");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.querySelector("#message");
const resetButton = document.getElementById("reset-button")

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


const getComputerChoice = () => {
  const choiceList = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random()*3);
  return (choiceList[randomNumber]);
};


const convertToUp = (word) => {
  switch(word) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors";
      break;
  }
};

const win = (userChoice, computerChoice) => {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  const randomWin = ["beats", "smashes", "destroys", "obliterates"];
  const randomNumber = Math.floor(Math.random() * 4);
  const winEmojis = ["🤠","🎉", "✨","🎊","🤩","👌"]
  const randomNumberEmoji = Math.floor(Math.random() * 6);

  resultDiv.innerHTML = `Nyertél! ${winEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('win-border')
  setTimeout(() => document.getElementById(userChoice).classList.remove('win-border'), 600);
};

const lose = (userChoice, computerChoice) => {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  const loseEmojis = ["😩", "😥 ", "😭","😵‍💫","😔", "🤦🏽"]
  const randomNumberEmoji = Math.floor(Math.random() * 6);
  resultDiv.innerHTML = `Vesztettél! ${loseEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('lose-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('lose-border'), 600);

};

const tie = (userChoice, computerChoice) => {
  draws++;
  drawsSpan.innerHTML = draws ;  
  const tieEmojis = ["🤔", " 😱", "🙈", "🧐", "🙀", "🙃"];
  const randomNumberEmoji = Math.floor(Math.random() * 6);
  resultDiv.innerHTML = `Döntetlen! ${tieEmojis[randomNumberEmoji]}`;

  document.getElementById(userChoice).classList.add('tie-border');
  setTimeout(() => document.getElementById(userChoice).classList.remove('tie-border'), 600);
};




const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }

};


const resetScores = () => {
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore
  userScore = 0;
  userScoreSpan.innerHTML = userScore;
  draws = 0;
  drawsSpan.innerHTML = draws ;
  resultDiv.innerHTML = 'A következő játék!';
};

const main = () => {
  rockDiv.addEventListener('click', () => game("rock"));

  paperDiv.addEventListener('click', () => game("paper"));

  scissorsDiv.addEventListener('click', () => game("scissors"));

  resetButton.addEventListener('click', () => resetScores());
};


main();
