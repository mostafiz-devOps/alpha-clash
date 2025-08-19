
function hideElement(element) {
  const playHome = document.getElementById(element);
  playHome.classList.add("hidden");
}

function showElement(element) {
  const playGround = document.getElementById(element);
  playGround.classList.remove("hidden");
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
