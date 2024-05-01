function doFirst() {
  const cart_count = localStorage.getItem("count");
  console.log(cart_count);
  // if (cart_count) {
  //   document.querySelector(".car_number").innerText =
  //     localStorage.getItem("count");
  // } else {
  //   document.querySelector(".car_number").innerText = "0";
  // }

  //-------------- navbar sticky -----------------------
  headers = document.querySelector(".header");
  headerA = document.querySelectorAll(".header ul li a");
  yellow_logo = document.querySelector(".yellow-logo");

  window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
      headers.style.backgroundColor = "rgba(0,0,0,0.5)";
      headers.classList.remove("offset-0");
    } else {
      headers.classList.add("offset-0");
      yellow_logo.style.display = "block";
    }
  });

  //--------------- hamburger active ----------------------
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector("nav");
  const navA = document.querySelectorAll("nav ul li a");
  //收合展開navBar

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("nav_show");
  });

  navA.forEach((n) =>
    n.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navUl.classList.remove("nav_show");
    })
  );
}
//------------- navbar sticky -----------------------
let headerA = document.querySelectorAll("header__nav-ul-a");
let logo = document.querySelector("#logo");
let hamgurger = document.querySelectorAll(".bar");
let carts_icon = document.querySelectorAll(".fa-cart-shopping");
let right_to_bracket = document.querySelectorAll(".fa-arrow-right-to-bracket");

// console.log(hamgurger);
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    hamgurger.forEach((ham) => {
      ham.style.backgroundColor = "#f6f6f6";
    });
    carts_icon.forEach((icon) => (icon.style.color = "#f6f6f6"));
    right_to_bracket.forEach((icon) => (icon.style.color = "#f6f6f6"));
  } else {
    headers.style = "";
    hamgurger.forEach((ham) => {
      ham.style.backgroundColor = "#f6f6f6";
    });
    carts_icon.forEach((icon) => (icon.style.color = "#f6f6f6"));
    right_to_bracket.forEach((icon) => (icon.style.color = "#f6f6f6"));
  }
});

//----------------- smooth a tags ----------------------
window.addEventListener("scroll", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
function animation() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hideElement = document.querySelectorAll(".hide");
  hideElement.forEach((el) => {
    observer.observe(el);
  });

  const slideRight = document.querySelectorAll(".slide-right");
  slideRight.forEach((el) => {
    observer.observe(el);
  });

  const slideLeft = document.querySelectorAll(".slide-left");
  slideLeft.forEach((el) => {
    observer.observe(el);
  });

  const slideUp = document.querySelectorAll(".slide-up");
  slideUp.forEach((el) => {
    observer.observe(el);
  });

  const slideDown = document.querySelectorAll(".slide-down");
  slideDown.forEach((el) => {
    observer.observe(el);
  });
}
//----------------- animation ---------------------------
document.addEventListener("DOMContentLoaded", function () {
  animation();
});

window.addEventListener("load", doFirst);

// let lastScrollTop = 0;
// window.addEventListener("scroll", () => {
//   let currentTop = window.scrollY || document.documentElement.scrollTop;

//   if (currentTop > lastScrollTop) {
//     headers.classList.add("hide_nav");
//     headers.style.position = "sticky";
//     headers.style.opacity = 1;
//     headers.style.transition = "all 0.5s ease";
//   } else {
//     // headers.classList.remove("hide-nav");
//     headers.style.opacity = 0;
//     headers.style.transition = "all 0.5s ease";
//     headers.style.position = "static";
//   }
//   lastScrollTop = currentTop <= 0 ? 0 : currentTop;
// });
