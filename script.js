const langToggle = document.getElementById("langToggle");
let currentLang = "es";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  document.title = lang === "es" ? "Portafolio | Ingeniería Mecatrónica" : "Portfolio | Mechatronics Engineering";
}

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "es" ? "en" : "es");
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".desktop-nav a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));
