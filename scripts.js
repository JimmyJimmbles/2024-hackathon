// const fuckYeah = document.querySelector("#uniqueSelector");
const fuckYeahs = document.querySelectorAll(".click-class");

for (const element of fuckYeahs) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log({ event });
    alert("YO you clicked my button");
  });
}

// JavaScript to trigger the glitch effect
// const glitchText = document.querySelector(".glitch-text");

// setInterval(() => {
//   glitchText.style.animation = "none";
//   setTimeout(() => (glitchText.style.animation = ""), 10);
// }, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const glitches = document.querySelectorAll(".glitch-text");

  for (const glitch of glitches) {
    const glitchText = glitch.getAttribute("data-text");

    setInterval(() => {
      const randomChar = String.fromCharCode(33 + Math.random() * 94);
      const glitchIndex = Math.floor(Math.random() * glitchText.length);
      const newText =
        glitchText.substr(0, glitchIndex) +
        randomChar +
        glitchText.substr(glitchIndex + 1);
      glitch.textContent = newText;
      setTimeout(() => (glitch.textContent = glitchText), 100);
    }, 500);
  }
});
