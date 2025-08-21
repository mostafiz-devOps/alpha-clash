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
  console.log("pressed Key:", pressedKey);

  const currentKey = document.getElementById("random-alphabet");
  const currentKeyText = currentKey.innerText.toLowerCase();
  console.log(currentKeyText, pressedKey);

  if (pressedKey === currentKeyText) {
    console.log("Correct Key Pressed!");
    
    resetKeyboardBgmColor(currentKeyText);
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