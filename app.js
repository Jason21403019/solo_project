document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.querySelector(".btn1");
  let btn2 = document.querySelector(".btn2");
  let n = document.querySelector("#number");

  btn2.addEventListener("click", () => {
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
});

document.addEventListener("DOMContentLoaded", function () {});

document.addEventListener("DOMContentLoaded", function () {
  let fit_ness = document.querySelector(".fit_ness");
  let fitness = document.querySelector(".fitness_equipment_product");
  let proteins = document.querySelector(".proteins");
  let protein = document.querySelector(".protein_powder_product");
  let healths = document.querySelector(".healths");
  let health = document.querySelector(".health_Supplements_product");
  let fits = document.querySelector(".fits");
  let fit = document.querySelector(".fit_gear_product");

  fit_ness.addEventListener("click", () => {
    fitness.style.display =
      fitness.style.display === "block" ? "none" : "block";
  });

  proteins.addEventListener("click", () => {
    protein.style.display =
      protein.style.display === "block" ? "none" : "block";
  });
  healths.addEventListener("click", () => {
    health.style.display = health.style.display === "block" ? "none" : "block";
  });

  fits.addEventListener("click", () => {
    fit.style.display = fit.style.display === "block" ? "none" : "block";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let shipping = document.querySelector(".shipping_info");
  let shipping_p = document.querySelector(".shipping_info_p");
  let return_info = document.querySelector(".return_info");
  let return_info_p = document.querySelector(".return_info_p");

  let isVisible = false;
  shipping.addEventListener("click", () => {
    if (isVisible) {
      shipping_p.style.display = "none";
    } else {
      shipping_p.style.display = "block";
    }
    isVisible = !isVisible;
  });
  return_info.addEventListener("click", () => {
    if (isVisible) {
      return_info_p.style.display = "none";
    } else {
      return_info_p.style.display = "block";
    }
    isVisible = !isVisible;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let ularray = document.querySelector(".days_ul");
  // console.log(ularray);
  let buttons = ularray.querySelectorAll("button");
  // console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("changebgc");
      });
      button.classList.add("changebgc");
    });
  });
});
