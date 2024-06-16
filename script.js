const menu = document.querySelector("#menu");
const showMenu = document.querySelector("#showMenu");

let flag = true;
menu.addEventListener("click", () => {
  if (flag) {
    menu.src = "./images/close.svg";
    showMenu.style.display = "block";
    flag = false;
  } else {
    menu.src = "./images/menu.svg";
    showMenu.style.display = "none";
    flag = true;
  }
});
