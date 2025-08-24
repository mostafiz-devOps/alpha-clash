
function hideElement(element) {
  const playHome = document.getElementById(element);
  playHome.classList.add("hidden");

}

function showElement(element) {
  const playGround = document.getElementById(element);
  playGround.classList.remove("hidden");
}

function gameOver() {
  hideElement("play-ground");
  showElement("score-section");
  const lastScore = getElementValue("score");
  setElementValue("final-score", lastScore);
}

function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = element.innerText;
  const value = parseInt(elementValue);
  return value;
}
function setElementValue(elementId, value) {
  const setElement = document.getElementById(elementId);
  setElement.innerText = value;
}

function generateRandomAlphabet() {
  // Generate random alphabet.
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetArray = alphabet.split("");
    const randomIndex = Math.floor(Math.random() * alphabetArray.length);
    return alphabetArray[randomIndex];
}
// set the keyboard bgm color
function setKeyboardBgmColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}

function resetKeyboardBgmColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}
