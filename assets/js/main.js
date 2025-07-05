document.addEventListener("DOMContentLoaded", () => {
  // Typed.js effect for the hero subtitle
  const typed = new Typed(".typed-text", {
    strings: [
      "Data Scientist",
      "AI Engineer",
      "Problem Solver",
      "Analytics Expert"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });

  // Hamburger toggle for mobile menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Animate sections on scroll
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationName = "fadeInUp";
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((el) => observer.observe(el));

  // Contact form submit handler
  document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const status = document.getElementById('form-status');
  const form = event.target;

  const data = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString()
  })
  .then(() => {
    status.style.color = 'green';
    status.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  })
  .catch(() => {
    status.style.color = 'red';
    status.textContent = 'Oops! There was a problem submitting your form.';
  });
});

});
