(function () {
  const menuButton = document.querySelector(".menu-button");
  const header = document.querySelector("header");
  const menu = document.querySelector(".menu");

  menuButton?.addEventListener("click", (e) => {
    e.preventDefault();
    header?.classList.toggle("open");
    menu?.classList.toggle("open");
  });
})();
