document.addEventListener("DOMContentLoaded", () => {
  // Typed.js effect for the hero subtitle
  const typed = new Typed(".typed-text", {
    strings: [
      "a Data Scientist",
      "an AI Engineer",
      "a Problem Solver",
      "an Analytics Expert"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });

  document.addEventListener('DOMContentLoaded', function () {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');

      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
    });

  // Hamburger toggle for mobile menu
 const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
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

 
});
