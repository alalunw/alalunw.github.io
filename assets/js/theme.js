(function () {
  var STORAGE_KEY = 'tit-theme';
  var DARK = 'dark';
  var LIGHT = 'light';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function getStoredPreference() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    if (theme === DARK) {
      document.documentElement.setAttribute('data-theme', DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function initTheme() {
    var stored = getStoredPreference();
    var theme = stored || getSystemPreference();
    applyTheme(theme);
  }

  initTheme();

  window.__toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme') === DARK ? DARK : LIGHT;
    var next = current === DARK ? LIGHT : DARK;
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!getStoredPreference()) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  });
})();

(function () {
  function initNavDropdowns() {
    var ddEls = document.querySelectorAll('.site-nav__dropdown');
    ddEls.forEach(function(dd) {
      dd.style.position = 'relative';
      var menu = dd.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'none';
      }
      dd.addEventListener('click', function(e) {
        // If the click originated on an anchor inside the dd, allow navigation
        if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'a') {
          return;
        }
        e.preventDefault();
        var open = dd.classList.toggle('open');
        if (menu) menu.style.display = open ? 'block' : 'none';
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initNavDropdowns);
})();

(function () {
  var observer = null;

  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (observer) observer.disconnect();

    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initScrollReveal, 100);
  });
})();

(function () {
  function initReadingProgress() {
    var bar = document.querySelector('[data-reading-progress]');
    if (!bar) return;

    function update() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReadingProgress);
  } else {
    initReadingProgress();
  }
})();

(function () {
  function initExternalLinks() {
    var origin = window.location.origin;
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
      if (link.href.indexOf(origin) !== 0) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExternalLinks);
  } else {
    initExternalLinks();
  }
})();
