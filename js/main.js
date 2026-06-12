// 1. Initialize AOS Animation
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// 2. Navbar Scroll Effect & Mobile Menu Toggle
const navbar = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if(navLinks.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});

// 3. WhatsApp Ordering Function (Menu Cards)
function orderWA(product) {
    const text = `Halo Abah Kebab,%0A%0ASaya ingin memesan:%0AProduk: ${product}%0AJumlah: 1%0A%0AMohon info total dan cara pembayarannya.`;
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
}

// 4. Promo Countdown Timer (Simulated 12 hours)
let time = 12 * 3600 + 30 * 60 + 45; // 12h 30m 45s in seconds
setInterval(() => {
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = time % 60;
    document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0'+s : s;
    if(time > 0) time--;
}, 1000);

// 5. Price Calculator Logic
const calcProduct = document.getElementById('calc-product');
const calcQty = document.getElementById('calc-qty');
const outSubtotal = document.getElementById('out-subtotal');
const outDiscount = document.getElementById('out-discount');
const outTotal = document.getElementById('out-total');
const btnCalcOrder = document.getElementById('btn-calc-order');

function updateCalculator() {
    const price = parseInt(calcProduct.value);
    const qty = parseInt(calcQty.value) || 1;
    const productName = calcProduct.options[calcProduct.selectedIndex].text.split(' - ')[0];
    
    const subtotal = price * qty;
    let discount = 0;
    
    // Dummy discount logic: 10% if qty >= 5
    if(qty >= 5) {
        discount = subtotal * 0.1;
    }
    
    const total = subtotal - discount;

    // Format Rupiah
    const formatRp = (num) => 'Rp ' + num.toLocaleString('id-ID');
    
    outSubtotal.innerText = formatRp(subtotal);
    outDiscount.innerText = formatRp(discount);
    outTotal.innerText = formatRp(total);

    // Update WA Link
    const waText = `Halo Abah Kebab,%0A%0ASaya ingin memesan:%0AProduk: ${productName}%0AJumlah: ${qty}%0ATotal Estimasi: ${formatRp(total)}%0A%0AMohon proses pesanan saya.`;
    btnCalcOrder.onclick = () => window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
}

calcProduct.addEventListener('change', updateCalculator);
calcQty.addEventListener('input', updateCalculator);
updateCalculator(); // init

// 6. Initialize Swiper for Testimonials
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// 7. FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(faq => faq.classList.remove('active')); // close all
        if(!isActive) item.classList.add('active'); // open clicked
    });
});

// 8. Contact Form to WhatsApp
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const msg = document.getElementById('contact-msg').value;
    const waText = `Halo Abah Kebab,%0A%0ANama: ${name}%0APesan: ${msg}`;
    window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
});