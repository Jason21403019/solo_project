const text = document.querySelectorAll(".thePaths");

console.log(text[0].getTotalLength());
for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#eleventh");
const animations = document.querySelector(".logo_animations");

lastWord.addEventListener("animationend", () => {
  animations.style = "transition: all 3s ease; opacity:0; pointer-events:none;";
});
