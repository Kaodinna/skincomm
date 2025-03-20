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

document.querySelectorAll('.toggle-answer').forEach(item => {
  let targetId = item.getAttribute('data-bs-target'); // Get the target ID
  let answerDiv = document.querySelector(targetId); // Select the corresponding answer div
  let toggleBtn = item.querySelector('#show-ans-btn'); // Select the toggle button

  // Listen for when the collapse is shown
  answerDiv.addEventListener('shown.bs.collapse', () => {
    toggleBtn.textContent = '-';
  });

  // Listen for when the collapse is hidden
  answerDiv.addEventListener('hidden.bs.collapse', () => {
    toggleBtn.textContent = '+';
  });
});
