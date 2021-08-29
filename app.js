let menuOverlay = document.querySelector(".menu_overlay"),
  hamburgerIcon = document.querySelector(".hamburger-icon"),
  closeBtn = document.querySelector(".menu_top_bar .close_btn");

function toggleMenu() {
  if (menuOverlay.classList.contains("active_menu")) {
    menuOverlay.classList.remove("active_menu");
  } else {
    menuOverlay.classList.add("active_menu");
  }
}

hamburgerIcon.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
