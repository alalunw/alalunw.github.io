(function(){
function openLightbox(src, caption) {
// Prevent body scroll
document.body.style.overflow = 'hidden';

const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
overlay.setAttribute('role', 'dialog');
overlay.setAttribute('aria-label', caption || 'Image viewer');

// Create image wrapper for better layout
const imageWrapper = document.createElement('div');
imageWrapper.className = 'lightbox-overlay__image-wrapper';

const img = document.createElement('img');
img.src = src;
img.alt = caption || '';
img.className = 'lightboxable';

imageWrapper.appendChild(img);
overlay.appendChild(imageWrapper);

// Add caption if available
if (caption) {
const captionEl = document.createElement('div');
captionEl.className = 'lightbox-overlay__caption';
captionEl.textContent = caption;
overlay.appendChild(captionEl);
}

function close() {
overlay.style.opacity = '0';
overlay.style.transition = 'opacity 0.3s ease';
setTimeout(() => {
if (document.body.contains(overlay)) {
document.body.removeChild(overlay);
}
}, 300);
document.body.style.overflow = '';
window.removeEventListener('keydown', onKey);
}

function onKey(e) {
if (e.key === 'Escape') {
close();
}
}

window.addEventListener('keydown', onKey);

// Close on overlay click (but not image click)
overlay.addEventListener('click', (ev) => {
if (ev.target === overlay) {
close();
}
});

// Prevent image click from closing
img.addEventListener('click', (ev) => {
ev.stopPropagation();
});

document.body.appendChild(overlay);
}

document.addEventListener('click', function(e) {
const t = e.target;
if (t && t.tagName === 'IMG' && t.classList.contains('lightboxable') && !t.closest('.lightbox-overlay') && !t.hasAttribute('data-no-lightbox')) {
const src = t.currentSrc || t.src;
const caption = t.alt || '';
openLightbox(src, caption);
}
}, true);
})();
