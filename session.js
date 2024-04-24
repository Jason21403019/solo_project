function doFirst() {
  const session_section = document.querySelector(".session_list");
  const sessionUl = document.querySelector(".session_content");
  // console.log(session_section);
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
      const list = session.filter((item) => item.date == button.dataset.mon);
      console.log(list);
      sessionUl.innerHTML = "";
      for (let item of list) {
        sessionUl.insertAdjacentHTML(
          "beforeend",
          `<li class="slide-right">
             <div class="session_name">
               <img
                  src="./fitness_environment_img/TRAINER/trainer8.jpg"
                  alt=""
               />
          <div class="session_title">
            <h2>${item.name}</h2>
            <div class="title_info">
              <p>${item.time}</p>
              <p>
                <i
                  class="fa-solid fa-location-dot fa-sm"
                  style="color: #1e1e1e"
                ></i
                >${item.place}
              </p>
              <p>
                <i
                  class="fa-solid fa-user fa-sm"
                  style="color: #1e1e1e"
                ></i>
                ${item.instructor}
              </p>
            </div>
          </div>
        </div>
        <div class="check_btndiv">
          <a href="" class="check_btn">Add</a>
        </div>
        </li>`
        );
      }
    });
  });

  //show_month
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
  document.querySelector(".month").selectedIndex = month;

  // let d1 = document.querySelector("#d1");
  // d1.addEventListener("click", () => {
  //   const targetItem = session.filter((item) => item.date == "4/29");
  //   console.log(targetItem);
  // });

  // let date = document.querySelector("#d1");
  // date.addEventListener("click", (e) => {
  //   let d = e.target.dataset.mon;
  //   console.log(d);
  // });
}
window.addEventListener("load", doFirst);
