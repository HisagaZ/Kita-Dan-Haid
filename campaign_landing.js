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
        const adminPath = window.location.pathname.includes('/programs/') ? '../admin.html' : 'admin.html';
        window.location.href = adminPath;
    } else {
        alert("Incorrect Password!");
    }
}
