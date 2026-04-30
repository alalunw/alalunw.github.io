/**
 * Thoughts In Tremolo - Theme & Interaction Script
 * Minimalist refinements with smooth interactions
 */

// Theme Management
class ThemeManager {
  constructor() {
    this.theme = this.getPreferredTheme();
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.bindEvents();
    this.updateToggleButtonText();
  }

  getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.updateToggleButtonText();
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  bindEvents() {
    // Theme toggle button
    const toggleBtn = document.querySelector('[data-theme-toggle]');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    // System preference change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  updateToggleButtonText() {
    const toggleBtn = document.querySelector('[data-theme-toggle]');
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('[data-icon]');
      if (icon) {
        icon.innerHTML = this.theme === 'dark' 
          ? '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'
          : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      }
    }
  }
}

// Scroll Animations
class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.setupObserver();
      this.observeElements();
    }
  }

  setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
  }

  observeElements() {
    const elements = document.querySelectorAll('.animate-on-scroll, .post-item');
    elements.forEach((el) => this.observer.observe(el));
  }
}

// Reading Progress
class ReadingProgress {
  constructor() {
    this.progressBar = null;
    this.init();
  }

  init() {
    this.progressBar = document.querySelector('[data-reading-progress]');
    if (this.progressBar) {
      window.addEventListener('scroll', () => this.update());
    }
  }

  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    this.progressBar.style.width = `${progress}%`;
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new ScrollAnimations();
  new ReadingProgress();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // External links - add icon
  document.querySelectorAll('a[href^="http"]:not([href^="' + window.location.origin + '"])').forEach((link) => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
});

// Service Worker registration (if needed)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker not available or failed to register
    });
  });
}
