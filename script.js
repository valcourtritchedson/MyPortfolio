// ==================== THEME TOGGLE LOGIC ====================

// Initialize theme from localStorage or system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = savedTheme !== 'light' ? savedTheme : systemPreference === 'dark' ? 'dark' : 'light';
  
  setTheme(theme);
}

function setTheme(theme) {
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (themeToggle) {
      themeToggle.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  } else {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    if (themeToggle) {
      themeToggle.classList.remove('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Theme toggle button event listener
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// ==================== MOBILE MENU LOGIC ====================

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  navLinks.classList.add('active');
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (menuBtn) {
  menuBtn.addEventListener('click', openMenu);
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeMenu);
}

// Close menu when overlay is clicked
if (menuOverlay) {
  menuOverlay.addEventListener('click', closeMenu);
}

// Close menu when a navigation link is clicked
if (navLinks) {
  document.querySelectorAll('.nav-links .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    closeMenu();
  }
});

// ==================== SMOOTH SCROLLING ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== SCROLL ANIMATIONS ====================

// Add animation to elements when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// ==================== NAVBAR SCROLL EFFECT ====================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== ACTIVE NAV LINK HIGHLIGHT ====================

window.addEventListener('scroll', function() {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
      link.style.color = '#00d4ff';
    } else {
      link.style.color = 'white';
    }
  });
});

// ==================== PARALLAX EFFECT ====================

const hero = document.querySelector('.hero');
window.addEventListener('scroll', function() {
  if (hero) {
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
  }
});

// ==================== SKILL BAR ANIMATION ====================

const skillBars = document.querySelectorAll('.skill-level');
const skillObserverOptions = {
  threshold: 0.5
};

const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
      skillObserver.unobserve(entry.target);
    }
  });
}, skillObserverOptions);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// ==================== HOVER EFFECTS ====================

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Skill card hover effect
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) rotateZ(1deg)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) rotateZ(0deg)';
  });
});

// ==================== BUTTON RIPPLE EFFECT ====================

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ==================== DYNAMIC ANIMATIONS ====================

document.addEventListener('DOMContentLoaded', function() {
  // Add stagger animation to section titles
  document.querySelectorAll('.section-title').forEach((title, index) => {
    title.style.animation = `fadeIn 0.8s ease-out ${0.2 * index}s backwards`;
  });
});

// ==================== IMAGE PRELOADING ====================

function preloadImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      const preloadImg = new Image();
      preloadImg.src = src;
    }
  });
}

window.addEventListener('load', preloadImages);

console.log('Portfolio loaded successfully!');
