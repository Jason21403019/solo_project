function doFirst() {
  //cart count number
  let btn1 = document.querySelector(".btn1");
  let btn2 = document.querySelector(".btn2");
  let n = document.querySelector("#number");

  btn2.addEventListener("click", () => {
    // console.log(btn2);
    let nplus = parseInt(n.value);
    nplus++;
    n.value = nplus;
  });
  btn1.addEventListener("click", () => {
    let nminus = parseInt(n.value);
    if (nminus > 0) {
      nminus--;
      n.value = nminus;
    }
  });

  document.querySelector(".car_number").innerText =
    localStorage.getItem("count");
}

window.addEventListener("load", doFirst);

const carts = [
  {
    img: "./fitness_environment_img/PRODUCTS/dumbbell12.png",
    name: "Dumbbell 12Kg",
  },
];
