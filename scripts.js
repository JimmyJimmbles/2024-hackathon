// const fuckYeah = document.querySelector("#uniqueSelector");
const fuckYeahs = document.querySelectorAll(".click-class");

for (const element of fuckYeahs) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log({ event });
    alert("YO you clicked my button");
  });
}
