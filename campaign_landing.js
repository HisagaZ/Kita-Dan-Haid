const basePath = window.location.pathname.includes('/programs/') ? '../' : '';

const headerContent = `
<div class="logo">
    <a href="${basePath}index.html"><img src="${basePath}logo NGO KDH.png" alt="Kita dan Haid Logo"></a>
</div>
<button class="hamburger" id="hamburger-btn" aria-label="Open Menu">
    <span></span><span></span><span></span>
</button>
<nav id="main-nav">
    <ul>
        <li><a href="${basePath}about_us.html" id="nav-about">About Us</a></li>
        <li><a href="${basePath}programs.html" id="nav-programs">Our Programs</a></li>
        <li><a href="${basePath}achievement.html" id="nav-achievement">Achievement</a></li>
        <li><a href="${basePath}stories.html" id="nav-stories">Stories</a></li>
        <li><a href="${basePath}partnership.html" id="nav-partnership">Partnership</a></li>
        <li><a href="${basePath}contact_us.html" id="nav-contact">Contact Us</a></li>
    </ul>
    <a href="${basePath}join.html" class="btn-partnership mobile-member-btn">Member</a>
</nav>
<a href="${basePath}join.html" class="btn-partnership desktop-member-btn">Member</a>
`;

const footerContent = `
<div class="footer-grid">
    <div class="footer-info">
        <img src="${basePath}logo NGO KDH.png" alt="Kita dan Haid Logo" class="footer-logo">
        <p>Empowering girls, breaking taboos, and ending period poverty across the globe. Join us in making a difference for a better tomorrow.</p>
    </div>
    <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
            <li><a href="${basePath}about_us.html">About Us</a></li>
            <li><a href="${basePath}programs.html">Our Programs</a></li>
            <li><a href="${basePath}stories.html">Stories</a></li>
            <li><a href="#">Donate Now</a></li>
        </ul>
    </div>
    <div class="footer-social">
        <h4>Follow Us</h4>
        <div class="social-icons">
            <a href="https://instagram.com/helloqweenhq" class="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.3V6.8c0-.72.48-.9.82-.9H17V2.1L14 2c-3.34 0-4.1 2.5-4.1 4.1v2.2H7.3v3.95h2.6V22H14v-9.75h3.22l.43-3.95H14Z"/></svg>
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.98H3V21h3.94V8.98ZM4.97 3A2.28 2.28 0 1 0 5 7.56 2.28 2.28 0 0 0 4.97 3Zm16.02 11.12c0-3.23-1.72-5.31-4.55-5.31-2.09 0-3.03 1.15-3.55 1.96V8.98H9.12V21h3.93v-5.95c0-1.57.3-3.09 2.24-3.09 1.91 0 1.94 1.79 1.94 3.19V21h3.76v-6.88Z"/></svg>
            </a>
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

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            hamburgerBtn.classList.toggle('is-active');
        });
        // Close nav when a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav-open');
                hamburgerBtn.classList.remove('is-active');
            });
        });
    }

    // Highlight active nav link
    const currentPage = window.location.pathname.split("/").pop();
    const navAbout = document.getElementById('nav-about');
    const navPrograms = document.getElementById('nav-programs');
    const navAchievement = document.getElementById('nav-achievement');
    const navStories = document.getElementById('nav-stories');
    const navPartnership = document.getElementById('nav-partnership');
    const navContact = document.getElementById('nav-contact');

    if (navAbout) navAbout.classList.remove('active');
    if (navPrograms) navPrograms.classList.remove('active');
    if (navAchievement) navAchievement.classList.remove('active');
    if (navStories) navStories.classList.remove('active');
    if (navPartnership) navPartnership.classList.remove('active');
    if (navContact) navContact.classList.remove('active');

    if (currentPage === "about_us.html" && navAbout) {
        navAbout.classList.add('active');
    } else if (currentPage === "programs.html" && navPrograms) {
        navPrograms.classList.add('active');
    } else if (currentPage === "achievement.html" && navAchievement) {
        navAchievement.classList.add('active');
    } else if (currentPage === "stories.html" && navStories) {
        navStories.classList.add('active');
    } else if (currentPage === "partnership.html" && navPartnership) {
        navPartnership.classList.add('active');
    } else if (currentPage === "contact_us.html" && navContact) {
        navContact.classList.add('active');
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
    let lastScrollY = window.pageYOffset;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const mainNav = document.getElementById('main-nav');
        const isMenuOpen = mainNav && mainNav.classList.contains('nav-open');
        
        if (header) {
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (!isMenuOpen && scrolled > 120 && scrolled > lastScrollY + 6) {
                header.classList.add('header-hidden');
            } else if (scrolled < lastScrollY - 6 || scrolled <= 120 || isMenuOpen) {
                header.classList.remove('header-hidden');
            }
        }

        lastScrollY = Math.max(scrolled, 0);

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
        const adminPath = window.location.pathname.includes('/programs/') ? '../admin.html' : 'admin.html';
        window.location.href = adminPath;
    } else {
        alert("Incorrect Password!");
    }
}
