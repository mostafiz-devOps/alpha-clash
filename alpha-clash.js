
function hideElement(element) {
  const playHome = document.getElementById(element);
  playHome.classList.add("hidden");
}

function showElement(element) {
  const playGround = document.getElementById(element);
  playGround.classList.remove("hidden");
}
