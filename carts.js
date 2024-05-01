function doFirst() {
  //cart count number
  let btn1 = document.querySelector(".btn1");
  let btn2 = document.querySelector(".btn2");
  let n = document.querySelector("#number");
  let priceValue = document.querySelector(".price p");
  let unit = 1190;
  let quantity = parseInt(n.value);

  // console.log(btn1);

  function updatePrice() {
    let total = unit * quantity;
    priceValue.textContent = `$${total}`;
    console.log(total);
  }

  btn2.addEventListener("click", () => {
    // console.log(btn2);
    let nplus = parseInt(n.value);
    nplus++;
    n.value = nplus;
    quantity = nplus;
    updatePrice();
  });
  btn1.addEventListener("click", () => {
    let nminus = parseInt(n.value);
    if (nminus > 0) {
      nminus--;
      n.value = nminus;
      quantity = nminus;
      updatePrice();
    }
  });

  let products = localStorage.getItem("product");
  let carIcon = document.querySelector(".car_number");

  if (products) {
    products = JSON.parse(products);
    carIcon.innerText = products.length;
    let items = document.querySelector(".items");
    for (let i = 0; i < products.length; i++) {
      //----------------------------------------------------------
      //li
      let li = document.createElement("li");

      //<div class="img">
      let imgDiv = document.createElement("div");
      imgDiv.classList = "img";
      let img = document.createElement("img");
      img.src = "./fitness_environment_img/PRODUCTS/dumbbell12.png";
      img.alt = "";
      imgDiv.appendChild(img);
      li.appendChild(imgDiv);

      //  <div class="item_name">
      let itemNameDiv = document.createElement("div");
      itemNameDiv.className = "item_name";
      let itemNameH2 = document.createElement("h2");
      itemNameH2.textContent = products[i].name;
      itemNameDiv.appendChild(itemNameH2);
      li.appendChild(itemNameDiv);

      //  <div class="quantity_btn">
      let quantityBtnDiv = document.createElement("div");
      quantityBtnDiv.className = "quantity_btn";

      //<div class="quantity_btn">
      let minusBtn = document.createElement("button");
      minusBtn.className = "btn1";
      let minusIcon = document.createElement("i");
      minusIcon.className = "fa-solid fa-minus fa-lg";
      minusIcon.style.color = "#1e1e1e";
      minusBtn.appendChild(minusIcon);
      quantityBtnDiv.appendChild(minusBtn);

      //<div class="quantity_btn">
      let input = document.createElement("input");
      input.type = "number";
      input.value = products[i].count;
      input.id = "number";
      quantityBtnDiv.appendChild(input);

      // <div class="quantity_btn">
      let plusBtn = document.createElement("button");
      plusBtn.className = "btn2";
      let plusIcon = document.createElement("i");
      plusIcon.className = "fa-solid fa-plus fa-lg";
      plusIcon.style.color = "#1e1e1e";
      plusBtn.appendChild(plusIcon);
      quantityBtnDiv.appendChild(plusBtn);

      //<div class="quantity_btn">
      li.appendChild(quantityBtnDiv);

      //<div class="price">
      let priceDiv = document.createElement("div");
      priceDiv.className = "price";
      let priceP = document.createElement("p");
      priceP.textContent = products[i].price;
      priceDiv.appendChild(priceP);
      li.appendChild(priceDiv);

      // <div class="trashbtn">
      let trashbtnDiv = document.createElement("div");
      trashbtnDiv.className = "trashbtn";
      let trashBtn = document.createElement("button");
      let trashIcon = document.createElement("i");
      trashIcon.className = "fa-solid fa-trash-can fa-lg";
      trashIcon.style.color = "#e00000";
      trashBtn.appendChild(trashIcon);
      trashbtnDiv.appendChild(trashBtn);
      li.appendChild(trashbtnDiv);

      // <li>
      items.appendChild(li);
    }

    let trashbtns = document.querySelectorAll(".trashbtn button");
    trashbtns.forEach((trash, index) => {
      let itemToRemove = document.querySelectorAll(".items li")[index];
      trash.addEventListener("click", () => {
        itemToRemove.classList.add("fade_out");
        setTimeout(() => {
          itemToRemove.remove();
        }, 500);
      });
    });
  }
}

window.addEventListener("load", doFirst);

const carts = [
  {
    img: "./fitness_environment_img/PRODUCTS/dumbbell12.png",
    name: "Dumbbell 12Kg",
  },
];
