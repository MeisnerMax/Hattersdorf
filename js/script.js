// Einfacher Fade-In-Effekt für die Seite beim Laden
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
});

// Dynamische Anpassung von Bildern (Lazy Loading)
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// "Zurück nach oben"-Button anzeigen, wenn gescrollt wird
document.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Smooth Scroll für "Zurück nach oben"-Button
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
