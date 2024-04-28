function doFirst() {
  // //product sidebar close
  let fit_ness = document.querySelector(".fit_ness");
  let fitness = document.querySelector(".fitness_equipment_product");
  let proteins = document.querySelector(".proteins");
  let protein = document.querySelector(".protein_powder_product");
  let healths = document.querySelector(".healths");
  let health = document.querySelector(".health_Supplements_product");
  let fits = document.querySelector(".fits");
  let fit = document.querySelector(".fit_gear_product");
  // let plusbtn = document.querySelector(".plusbtn");
  let fe = document.querySelector(".fitness_equipment");
  let pp = document.querySelector(".protein_powder");
  let hs = document.querySelector(".health_supplments");
  let fg = document.querySelector(".fit_gear");

  fit_ness.addEventListener("click", () => {
    fitness.style.display =
      fitness.style.display === "block" ? "none" : "block";
    fe.classList.toggle("plus");
  });

  proteins.addEventListener("click", () => {
    protein.style.display =
      protein.style.display === "block" ? "none" : "block";
    pp.classList.toggle("plus");
  });
  healths.addEventListener("click", () => {
    health.style.display = health.style.display === "block" ? "none" : "block";
    hs.classList.toggle("plus");
  });

  fits.addEventListener("click", () => {
    fit.style.display = fit.style.display === "block" ? "none" : "block";
    fg.classList.toggle("plus");
  });

  // //cartnumber
  // document.querySelector(".car_number").innerText =
  //   localStorage.getItem("count");
}
function searchProducts() {
  document.getElementById("search").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase().trim();
    let products = document.querySelectorAll(".products li");
    // console.log(products);

    products.forEach((product) => {
      let productName = product.querySelector("h4").textContent.toLowerCase();
      if (productName.includes(searchValue)) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  });
}

window.addEventListener("load", doFirst);
