// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Simple contact form validation & feedback
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = "Thank you for contacting us!";
    form.reset();
  });
}