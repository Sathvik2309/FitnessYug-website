// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
// Join Us CTA Button Animation
document.querySelector('.cta').addEventListener('click', function() {
  alert("Thank you for joining us! We'll get in touch with you shortly.");
});
// JavaScript for counting animation when the section is in view
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.count');
    const triggerPoint = 0.8; // Percentage of the section visible to start counting
  
    // Function to animate the count
    function countUp(element, target) {
      let current = 0;
      const increment = target / 100;
  
      function animate() {
        if (current < target) {
          current += increment;
          element.textContent = Math.floor(current);
          requestAnimationFrame(animate);
        } else {
          element.textContent = target;
        }
      }
  
      animate();
    }
  
    // Check if element is in view
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      stats.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= windowHeight * triggerPoint && !stat.classList.contains('animated')) {
          stat.classList.add('animated'); // Prevent re-triggering the animation
          const target = parseInt(stat.getAttribute('data-target'), 10);
          countUp(stat, target);
        }
      });
    }
  
    // Listen for scroll events to trigger count animation
    window.addEventListener('scroll', checkVisibility);
  
    // Initial check in case the section is already in view on page load
    checkVisibility();
  });
  

 // Select all elements with the data-scroll attribute
const scrollElements = document.querySelectorAll("[data-scroll]");

const scrollAnimation = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("data-scroll-in-view");
    } else {
      entry.target.classList.remove("data-scroll-in-view");
    }
  });
};

// Intersection Observer setup
const observer = new IntersectionObserver(scrollAnimation, {
  threshold: 0.3, // Trigger when 30% of the element is visible
});

scrollElements.forEach((el) => {
  observer.observe(el);
});
