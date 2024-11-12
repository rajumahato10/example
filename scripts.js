// Scroll Animation
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 1.3;
  
    sections.forEach((section) => {
      if (scrollPosition > section.offsetTop) {
        section.classList.add("visible");
      }
    });
  });
  
  // Optional smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  