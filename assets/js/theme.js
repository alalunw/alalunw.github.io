(function () {
  var STORAGE_KEY = 'tit-theme';
  var DARK = 'dark';
  var LIGHT = 'light';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function getStoredPreference() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function applyTheme(theme) {
    if (theme === DARK) {
      document.documentElement.setAttribute('data-theme', DARK);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  applyTheme(getStoredPreference() || getSystemPreference());

  window.__toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme') === DARK ? DARK : LIGHT;
    var next = current === DARK ? LIGHT : DARK;
    applyTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  };

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!getStoredPreference()) applyTheme(e.matches ? DARK : LIGHT);
  });
})();

(function () {
  function initNavDropdowns() {
    var ddEls = document.querySelectorAll('.site-nav__dropdown');
    ddEls.forEach(function(dd) {
      var trigger = dd.querySelector('.site-nav__link[aria-haspopup]');
      var menu = dd.querySelector('.dropdown-menu');

      function openMenu() {
        dd.classList.add('open');
        if (menu) menu.style.display = 'block';
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
      }

      function closeMenu() {
        dd.classList.remove('open');
        if (menu) menu.style.display = 'none';
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }

      dd.addEventListener('mouseenter', openMenu);
      dd.addEventListener('mouseleave', closeMenu);

      if (trigger) {
        trigger.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
            e.preventDefault();
            openMenu();
            var firstItem = menu ? menu.querySelector('.dropdown-item') : null;
            if (firstItem) firstItem.focus();
          }
        });
      }

      if (menu) {
        menu.addEventListener('keydown', function(e) {
          var items, idx;
          if (e.key === 'Escape') { closeMenu(); if (trigger) trigger.focus(); return; }
          items = Array.from(menu.querySelectorAll('.dropdown-item'));
          idx = items.indexOf(document.activeElement);
          if (e.key === 'ArrowDown') { e.preventDefault(); if (idx < items.length - 1) items[idx + 1].focus(); }
          if (e.key === 'ArrowUp') { e.preventDefault(); if (idx > 0) items[idx - 1].focus(); }
        });
      }
    });

    document.addEventListener('click', function(e) {
      ddEls.forEach(function(dd) {
        if (!dd.contains(e.target)) {
          dd.classList.remove('open');
          var m = dd.querySelector('.dropdown-menu');
          var t = dd.querySelector('.site-nav__link[aria-haspopup]');
          if (m) m.style.display = 'none';
          if (t) t.setAttribute('aria-expanded', 'false');
        }
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
})();

(function () {
  function initReadingProgress() {
    var bar = document.querySelector('[data-reading-progress]');
    if (!bar) return;
    window.addEventListener('scroll', function() {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docHeight > 0 ? ((window.scrollY / docHeight) * 100) + '%' : '0';
    }, { passive: true });
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
