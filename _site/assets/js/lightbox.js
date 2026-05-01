(function(){
  function openLightbox(src, caption){
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role','dialog');
    overlay.setAttribute('aria-label', caption || 'Image');
    overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,.92); display:flex; align-items:center; justify-content:center; z-index:9999;';
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '85vh';
    img.style.objectFit = 'contain';
    overlay.appendChild(img);
    function close(){
      document.body.removeChild(overlay);
      window.removeEventListener('keydown', onKey);
    }
    function onKey(e){
      if (e.key === 'Escape') close();
    }
    window.addEventListener('keydown', onKey);
    overlay.addEventListener('click', (ev)=>{ if (ev.target === overlay) close(); });
    document.body.appendChild(overlay);
  }
  document.addEventListener('click', function(e){
    const t = e.target;
    if (t && t.tagName === 'IMG' && t.classList.contains('lightboxable') && !t.closest('.lightbox-overlay') && !t.hasAttribute('data-no-lightbox')){
      const src = t.currentSrc || t.src;
      const caption = t.alt || '';
      openLightbox(src, caption);
    }
  }, true);
})();
