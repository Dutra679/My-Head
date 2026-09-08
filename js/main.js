const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
const menuLinks = document.querySelectorAll(".nav-links a");
const spinningImage = document.querySelector("#spinning-head");
const spinButton = document.querySelector(".spin-toggle");
const spinLabel = document.querySelector(".spin-label");
const spinIcon = document.querySelector(".pause-icon");
const year = document.querySelector("#current-year");

const closeMenu = () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
};

menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

spinButton.addEventListener("click", () => {
    const isPaused = spinningImage.classList.toggle("paused");
    spinButton.setAttribute("aria-pressed", String(isPaused));
    spinLabel.textContent = isPaused ? "Continuar rotação" : "Pausar rotação";
    spinIcon.textContent = isPaused ? "▶" : "Ⅱ";
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

year.textContent = new Date().getFullYear();
