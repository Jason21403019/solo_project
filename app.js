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
  let plusbtn = document.querySelector(".plusbtn");
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

document.addEventListener("DOMContentLoaded", function () {
  let headers = document.querySelector("header");
  let headerA = document.querySelectorAll("header ul li a");
  let logo = document.querySelector("#logo");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
      headers.style.backgroundColor = "rgba(246,246,246,0.9)";
      headers.style.color = "#f6f6f6";
      headerA.forEach((a) => {
        a.style.color = "#1e1e1e";
        logo.src = "./Logo_Img/black_logo.svg";
      });
    } else {
      headers.style = "";
      headerA.forEach((a) => {
        a.style.color = "#f6f6f6";
      });
      logo.src = "./Logo_Img/yellow_logo.svg";
    }
  });

  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    let currentTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentTop > lastScrollTop) {
      headers.classList.add("hide_nav");
    } else {
      headers.classList.remove("hide-nav");
    }
    lastScrollTop = currentTop <= 0 ? 0 : currentTop;
  });
});

//smooth a tags
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
document.addEventListener("DOMContentLoaded", function () {
  //animation
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
});

// document.addEventListener("DOMContentLoaded", function () {
//   let navbar = document.querySelector("header");
//   let lastScrollTop = 0;
//   window.addEventListener("scroll", () => {
//     let currentTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentTop > lastScrollTop) {
//       navbar.classList.add(".hide_nav");
//     } else {
//       navbar.classList.remove(".hide-nav");
//     }
//     lastScrollTop = currentTop <= 0 ? 0 : currentTop;
//   });
// });
