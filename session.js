function doFirst() {
  //session date bgc change
  let ularray = document.querySelector(".days_ul");
  // console.log(ularray);
  let buttons = document.querySelectorAll("button");
  // console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("changebgc");
      });
      button.classList.add("changebgc");
      // console.log(buttons);
    });
  });
}
window.addEventListener("load", doFirst);
