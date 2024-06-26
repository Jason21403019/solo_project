function doFirst() {
  //product_info add to car number
  let q_minusbtn = document.querySelector(".quantity_minusBtn");
  let q_plusbtn = document.querySelector(".quantity_plusBtn");
  let q_number = document.querySelector("#quantity_number");

  q_plusbtn.addEventListener("click", () => {
    // console.log(btn2);
    let nplus = parseInt(q_number.value);

    nplus++;
    q_number.value = nplus;
  });
  q_minusbtn.addEventListener("click", () => {
    let nminus = parseInt(q_number.value);

    if (nminus > 0) {
      nminus--;
      q_number.value = nminus;
    }
  });
  // add to car
  let addToCar = document.querySelector(".add_to_cart");
  let carIcon = document.querySelector(".car_number");
  let productsArray = [];
  addToCar.addEventListener("click", () => {
    let numberUP = parseInt(carIcon.textContent);
    carIcon.textContent = numberUP + 1;
    // console.log(carIcon);
    localStorage.setItem("count", carIcon.textContent);
    let productName = document.querySelector(".info_content h1").textContent;
    let productPrice = document.querySelector(
      ".info_content h2 span"
    ).textContent;
    let productCount = document.querySelector("#quantity_number").value;

    const product = {
      name: productName,
      price: productPrice,
      count: productCount,
    };
    productsArray.push(product);
    localStorage.setItem("product", JSON.stringify(productsArray));
  });

  //shopping info and return info
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
}
function changeMainImg(newSrc) {
  document.getElementById("mainImg").src = newSrc;
}

window.addEventListener("load", doFirst);
