// This file is used to include components

// Function to load components dynamically
function loadComponent(elementId, filePath) {
  fetch(filePath)
  .then(response => response.text())
  .then(data => document.getElementById(elementId).innerHTML = data)
  .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load head
loadComponent("head", "components/head.html");
// Load header
loadComponent("header", "components/header.html");
// Load footer
loadComponent("footer", "components/footer.html");
// Load partner brand
loadComponent("partner-brand", "components/partner-brand.html");
// Load related
loadComponent("related", "components/related.html");
