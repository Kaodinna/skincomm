document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");

  function toggleMenu() {
    if (window.innerWidth <= 768) { // Adjust breakpoint as needed
      menu.classList.toggle("hidden");
    }
  }

  menuIcon.addEventListener("click", toggleMenu);

  // Ensure menu is always visible on desktop resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.classList.remove("hidden");
    }
  });
});
