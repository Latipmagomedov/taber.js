const body = document.body;

body.addEventListener("click", (e) => {
  const target = e.target;
  const attribute = target.getAttribute("data-open-tab");

  const tabBtnRemove = document.querySelectorAll(`[data-open-tab]`);
  const tabBtn = document.querySelector(`[data-open-tab='${attribute}']`);

  const tabRemove = document.querySelectorAll(`[data-tab]`);
  const tab = document.querySelector(`[data-tab='${attribute}']`);

  if (target.getAttribute("data-open-tab")) {
    tabRemove.forEach((item, index) => {
      tabBtnRemove[index].classList.remove("tabs-btns__btn_active");
      item.classList.remove("tabs__tab_active");
    });

    tabBtn.classList.add("tabs-btns__btn_active");
    tab.classList.add("tabs__tab_active");
  }
});
