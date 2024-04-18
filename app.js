function doFirst() {
  //navbar sticky
  headers = document.querySelector("header");
  headerA = document.querySelectorAll("header ul li a");
  logo = document.querySelector("#logo");

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

  // //product sidebar close
  // let fit_ness = document.querySelector(".fit_ness");
  // let fitness = document.querySelector(".fitness_equipment_product");
  // let proteins = document.querySelector(".proteins");
  // let protein = document.querySelector(".protein_powder_product");
  // let healths = document.querySelector(".healths");
  // let health = document.querySelector(".health_Supplements_product");
  // let fits = document.querySelector(".fits");
  // let fit = document.querySelector(".fit_gear_product");
  // // let plusbtn = document.querySelector(".plusbtn");
  // let fe = document.querySelector(".fitness_equipment");
  // let pp = document.querySelector(".protein_powder");
  // let hs = document.querySelector(".health_supplments");
  // let fg = document.querySelector(".fit_gear");

  // fit_ness.addEventListener("click", () => {
  //   fitness.style.display =
  //     fitness.style.display === "block" ? "none" : "block";
  //   fe.classList.toggle("plus");
  // });

  // proteins.addEventListener("click", () => {
  //   protein.style.display =
  //     protein.style.display === "block" ? "none" : "block";
  //   pp.classList.toggle("plus");
  // });
  // healths.addEventListener("click", () => {
  //   health.style.display = health.style.display === "block" ? "none" : "block";
  //   hs.classList.toggle("plus");
  // });

  // fits.addEventListener("click", () => {
  //   fit.style.display = fit.style.display === "block" ? "none" : "block";
  //   fg.classList.toggle("plus");
  // });

  // window.addEventListener("scroll", () => {
  //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //     anchor.addEventListener("click", function (e) {
  //       e.preventDefault();

  //       document.querySelector(this.getAttribute("href")).scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     });
  //   });
  // });
}

window.addEventListener("load", doFirst);

//cart count number
document.addEventListener("DOMContentLoaded", function () {
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
});
//product_info add to car number
document.addEventListener("DOMContentLoaded", function () {
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
});

//plus btn
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector(".nav-ul");
  const navA = document.querySelectorAll(".nav-a");
  //收合展開navBar
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
  });

  navA.forEach((n) =>
    n.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navUl.classList.toggle("active");
    })
  );
});

//product sidebar close
// document.addEventListener("DOMContentLoaded", function () {
//   let fit_ness = document.querySelector(".fit_ness");
//   let fitness = document.querySelector(".fitness_equipment_product");
//   let proteins = document.querySelector(".proteins");
//   let protein = document.querySelector(".protein_powder_product");
//   let healths = document.querySelector(".healths");
//   let health = document.querySelector(".health_Supplements_product");
//   let fits = document.querySelector(".fits");
//   let fit = document.querySelector(".fit_gear_product");
//   // let plusbtn = document.querySelector(".plusbtn");
//   let fe = document.querySelector(".fitness_equipment");
//   let pp = document.querySelector(".protein_powder");
//   let hs = document.querySelector(".health_supplments");
//   let fg = document.querySelector(".fit_gear");

//   fit_ness.addEventListener("click", () => {
//     fitness.style.display =
//       fitness.style.display === "block" ? "none" : "block";
//     fe.classList.toggle("plus");
//   });

//   proteins.addEventListener("click", () => {
//     protein.style.display =
//       protein.style.display === "block" ? "none" : "block";
//     pp.classList.toggle("plus");
//   });
//   healths.addEventListener("click", () => {
//     health.style.display = health.style.display === "block" ? "none" : "block";
//     hs.classList.toggle("plus");
//   });

//   fits.addEventListener("click", () => {
//     fit.style.display = fit.style.display === "block" ? "none" : "block";
//     fg.classList.toggle("plus");
//   });
// });

//shopping info and return info
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

//session date bgc change
document.addEventListener("DOMContentLoaded", function () {
  let ularray = document.querySelector(".days_ul");
  console.log(ularray);
  let buttons = document.querySelectorAll("button");
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("changebgc");
      });
      button.classList.add("changebgc");
      // console.log(buttons);
    });
  });
});

//navbar sticky
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
    let currentTop = window.scrollY || document.documentElement.scrollTop;

    if (currentTop > lastScrollTop) {
      headers.classList.add("hide_nav");
      headers.style.position = "sticky";
      headers.style.opacity = 1;
      headers.style.transition = "all 0.3s ";
    } else {
      // headers.classList.remove("hide-nav");
      headers.style.opacity = 0;
      headers.style.transition = "all 0.3s ";
      headers.style.position = "static";
    }
    lastScrollTop = currentTop <= 0 ? 0 : currentTop;
  });
});

// //smooth a tags
// window.addEventListener("scroll", () => {
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });
// });
//animation
document.addEventListener("DOMContentLoaded", function () {
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

//add to car
document.addEventListener("DOMContentLoaded", function () {
  let addToCar = document.querySelector(".add_to_cart");
  let carIcon = document.querySelector(".car_number");

  // console.log(addToCar);
  // console.log(carIcon.textContent);
  addToCar.addEventListener("click", () => {
    let numberUP = parseInt(carIcon.textContent);
    carIcon.textContent = numberUP + 1;
    // console.log(carIcon);
    localStorage.setItem("count", carIcon.textContent);
  });
});
