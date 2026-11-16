
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// APERTURA E CHIUSURA MENU
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    const isOpen = menu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Chiudi menu" : "Apri menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CHIUSURA MENU DOPO IL CLICK
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Apri menu");
    });
});

// ANIMAZIONI DELLE SEZIONI
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
