/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
});


/* =========================
   STICKY NAV EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


/* =========================
   COUNTDOWN TIMER
   (PROMO SECTION)
========================= */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const targetDate = new Date("December 31, 2026 23:59:59").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = days;
    if (hoursEl) hoursEl.innerText = hours;
    if (minutesEl) minutesEl.innerText = minutes;
    if (secondsEl) secondsEl.innerText = seconds;

}

setInterval(updateCountdown, 1000);
updateCountdown();


/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "0.5s";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 800);
    }

});


/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});


/* =========================
   SMOOTH SCROLL NAV
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =========================
   CLOSE MOBILE MENU ON CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
    });

});


/* =========================
   SIMPLE FADE-IN ON SCROLL
   (LIGHTWEIGHT VERSION)
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.1
});

document.querySelectorAll(".section, .feature-card, .menu-card, .about-card, .testimonial-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* =========================
   ADD SCROLL ANIMATION STYLE
   (INJECTED JS STYLE)
========================= */

const style = document.createElement("style");

style.innerHTML = `
.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:0.8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}
`;

document.head.appendChild(style);


/* =========================
   BUTTON CLICK EFFECT
========================= */

document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);

    });

});