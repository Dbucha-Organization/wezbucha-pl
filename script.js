
const modal = document.querySelector('.modal');
const modalButtonYes = document.querySelector('#yes');
const modalButtonNo = document.querySelector('#no');
const hamburger = document.getElementById('hamburger');
const navClose = document.getElementById('nav-close');
const headerNavTop = document.querySelector('.header-nav-top');

if (hamburger && headerNavTop) {
    hamburger.addEventListener('click', () => {
        headerNavTop.classList.add('active');
    });
}

if (navClose && headerNavTop) {
    navClose.addEventListener('click', () => {
        headerNavTop.classList.remove('active');
    });
}

// Close menu when clicking outside (on backdrop)
if (headerNavTop) {
    headerNavTop.addEventListener('click', (e) => {
        if (e.target === headerNavTop) {
            headerNavTop.classList.remove('active');
        }
    });
}
window.addEventListener("load", () => {
    if (localStorage.getItem("ageConfirmed") != "true") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
});
modalButtonYes.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem('ageConfirmed', 'true');
});

modalButtonNo.addEventListener('click', () => {
    modal.style.display = 'none';
    localStorage.setItem('ageConfirmed', 'false');
    window.location.href = 'https://google.com';
});

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Arrow navigation
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(index);
    });
});

// Auto-play slider (optional - remove if not needed)
setInterval(nextSlide, 5000);

// Brands Expanded Content Toggle
const toggleBrandsBtn = document.getElementById('toggle-brands');
const brandsExpandedContent = document.getElementById('brands-expanded-content');

if (toggleBrandsBtn && brandsExpandedContent) {
    toggleBrandsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        brandsExpandedContent.classList.toggle('show');

        if (brandsExpandedContent.classList.contains('show')) {
            toggleBrandsBtn.textContent = 'Mniej';
        } else {
            toggleBrandsBtn.textContent = 'Więcej';
            // Scroll back to the start of the section for better UX when closing
            document.querySelector('.brands-advantages').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}

function updateLinks() {
  if (window.innerWidth > 768) {
    document.querySelectorAll('a').forEach(link => {
      link.href = "https://merrymi.pl/";
    });
  }
}

window.addEventListener("load", updateLinks);
window.addEventListener("resize", updateLinks);