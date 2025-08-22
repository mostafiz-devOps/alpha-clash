// function togglePlayGround() {
//   const playGround = document.querySelector('.play-ground');
//   const homeSection = document.querySelector('.home');
//   const scoreSection = document.querySelector('.score');

//   if (playGround.classList.contains('hidden')) {
//     playGround.classList.remove('hidden');
//     homeSection.classList.add('hidden');
//     scoreSection.classList.add('hidden');
//   } else {
//     playGround.classList.add('hidden');
//     homeSection.classList.remove('hidden');
//     scoreSection.classList.remove('hidden');
//   }
// }

function keyPress(event) {
  const pressedKey = event.key;

  const currentKey = document.getElementById("random-alphabet");
  const currentKeyText = currentKey.innerText.toLowerCase();

  if (pressedKey === currentKeyText) {
    console.log("You got a point!");
    const currentScore = document.getElementById("score");
    const score = parseInt(currentScore.innerText) + 1;
    currentScore.innerText = score;
    
    resetKeyboardBgmColor(pressedKey);
    continueGame();
  } else {
    console.log("Incorrect Key Pressed!");
  }
}
document.addEventListener("keyup", keyPress);

function continueGame() {
  // Generate random alphabet.
  const alphabet = generateRandomAlphabet();
  const alphabetElement = document.getElementById("random-alphabet");
  alphabetElement.innerText = alphabet;
  // Set the keyboard background color
  setKeyboardBgmColor(alphabet.toLowerCase());
}

function togglePlay() {
  hideElement("home");
  showElement("play-ground");
  continueGame();
}