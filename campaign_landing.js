// Navigation and Footer Components
const headerContent = `
<div class="logo">
    <a href="index.html"><img src="logo NGO KDH.png" alt="Kita dan Haid Logo"></a>
</div>
<nav>
    <ul>
        <li><a href="about_us.html" id="nav-about">About Us</a></li>
        <li><a href="programs.html" id="nav-programs">Our Programs</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Donate Now</a></li>
    </ul>
</nav>
<a href="#" class="btn-partnership">Donate Now</a>
`;

const footerContent = `
<div class="footer-grid">
    <div class="footer-info">
        <img src="logo NGO KDH.png" alt="Kita dan Haid Logo" class="footer-logo">
        <p>Empowering girls, breaking taboos, and ending period poverty across the globe. Join us in making a difference for a better tomorrow.</p>
    </div>
    <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
            <li><a href="about_us.html">About Us</a></li>
            <li><a href="programs.html">Our Programs</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Donate Now</a></li>
        </ul>
    </div>
    <div class="footer-social">
        <h4>Follow Us</h4>
        <div class="social-icons">
            <a href="#" class="social-icon">IG</a>
            <a href="#" class="social-icon">FB</a>
            <a href="#" class="social-icon">IN</a>
        </div>
    </div>
</div>
<div class="footer-bottom">
    <p onclick="accessAdmin()" style="cursor: pointer;">&copy; 2024 Pertubuhan Kita dan Haid. All rights reserved.</p>
</div>
`;

// Function to inject components
function injectComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = headerContent;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerContent;

    // Highlight active nav link
    const currentPage = window.location.pathname.split("/").pop();
    const navAbout = document.getElementById('nav-about');
    const navPrograms = document.getElementById('nav-programs');

    if (navAbout && navPrograms) {
        if (currentPage === "about_us.html") {
            navAbout.classList.add('active');
        } else if (currentPage === "programs.html") {
            navPrograms.classList.add('active');
        } else if (currentPage === "index.html" || currentPage === "") {
            navPrograms.classList.remove('active'); // Just being explicit
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    initAnimations();
});

function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Horizontal scroll for the goal container
    const container = document.getElementById('goalContainer');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (nextBtn && prevBtn && container) {
        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: 410, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -410, behavior: 'smooth' });
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (header) {
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Parallax effect for hero image
        const heroImg = document.querySelector('.hero-banner img');
        if (heroImg) {
            heroImg.style.transform = `scale(${1 + scrolled * 0.0002}) translateY(${scrolled * 0.1}px)`;
        }
    });
}

function accessAdmin() {
    const password = prompt("Enter Admin Password:");
    if (password === 'iman') {
        window.location.href = 'admin.html';
    } else {
        alert("Incorrect Password!");
    }
}
