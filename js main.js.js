// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        menuToggle.innerHTML = isOpen ? '✕' : '&#9776;';
    });
}

// ===== FERMER LE MENU AU CLIC SUR UN LIEN (mobile) =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('open');
            menuToggle.innerHTML = '&#9776;';
        }
    });
});

// ===== ANCRES DOUCES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANNÉE DYNAMIQUE DANS LE FOOTER =====
const yearEl = document.querySelector('.footer-bottom p');
if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.innerHTML = yearEl.innerHTML.replace('2026', currentYear);
}

console.log('🚀 CNRL - Révolution Linguistique du Burkina Faso');
console.log('📖 Gomd-Peogo · Rombagraphe · Syllabaire Romba');
console.log('✦ « Une langue qui s\'écrit est une langue qui vit. »');