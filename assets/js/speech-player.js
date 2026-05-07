(function() {
  'use strict';

  if (!('speechSynthesis' in window)) {
    var container = document.querySelector('[data-speech-player]');
    if (container) container.style.display = 'none';
    return;
  }

  var synth = window.speechSynthesis;
  var utterance = null;
  var isPlaying = false;
  var currentText = '';

  var player = document.querySelector('[data-speech-player]');
  var toggle = document.querySelector('[data-speech-toggle]');
  var controls = document.querySelector('[data-speech-controls]');
  var playBtn = document.querySelector('[data-speech-play]');
  var pauseBtn = document.querySelector('[data-speech-pause]');
  var speedSelect = document.querySelector('[data-speech-speed]');
  var statusEl = document.querySelector('[data-speech-status]');

  function getPostText() {
    var text = '';
    var header = document.querySelector('.post-header');
    var content = document.querySelector('.post-content');
    
    if (header) {
      var title = header.querySelector('.post-header__title');
      if (title) text += title.textContent.trim() + '. ';
      
      var meta = header.querySelector('.post-header__meta');
      if (meta) text += meta.textContent.trim() + '. ';
    }
    
    if (content) {
      var paragraphs = content.querySelectorAll('p, h2, h3, h4, h5, h6, li, blockquote');
      paragraphs.forEach(function(el) {
        var t = el.textContent.trim();
        if (t) text += t + '. ';
      });
    }
    
    return text;
  }

  function toggleControls() {
    var hidden = controls.hasAttribute('hidden');
    if (hidden) {
      controls.removeAttribute('hidden');
      toggle.classList.add('speech-player__toggle--active');
    } else {
      controls.setAttribute('hidden', '');
      toggle.classList.remove('speech-player__toggle--active');
    }
  }

  function play() {
    if (isPlaying) return;
    
    currentText = getPostText();
    if (!currentText) {
      updateStatus('No text available');
      return;
    }
    
    utterance = new SpeechSynthesisUtterance(currentText);
    utterance.rate = parseFloat(speedSelect.value) || 1;
    utterance.onstart = function() {
      isPlaying = true;
      playBtn.setAttribute('hidden', '');
      pauseBtn.removeAttribute('hidden');
      updateStatus('Playing');
    };
    utterance.onend = function() {
      isPlaying = false;
      pauseBtn.setAttribute('hidden', '');
      playBtn.removeAttribute('hidden');
      updateStatus('');
    };
    utterance.onerror = function(e) {
      isPlaying = false;
      pauseBtn.setAttribute('hidden', '');
      playBtn.removeAttribute('hidden');
      if (e.error !== 'canceled') {
        updateStatus('Error: ' + e.error);
      }
    };
    
    synth.speak(utterance);
  }

  function pause() {
    if (!isPlaying) return;
    synth.pause();
    isPlaying = false;
    pauseBtn.setAttribute('hidden', '');
    playBtn.removeAttribute('hidden');
    updateStatus('Paused');
  }

  function resume() {
    if (isPlaying || !utterance) return;
    synth.resume();
    isPlaying = true;
    playBtn.setAttribute('hidden', '');
    pauseBtn.removeAttribute('hidden');
    updateStatus('Playing');
  }

  function stop() {
    synth.cancel();
    isPlaying = false;
    if (pauseBtn) pauseBtn.setAttribute('hidden', '');
    if (playBtn) playBtn.removeAttribute('hidden');
    updateStatus('');
  }

  function updateStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  if (toggle) toggle.addEventListener('click', toggleControls);
  
  if (playBtn) playBtn.addEventListener('click', function() {
    if (synth.paused) {
      resume();
    } else {
      play();
    }
  });
  
  if (pauseBtn) pauseBtn.addEventListener('click', pause);
  
  if (speedSelect) {
    speedSelect.addEventListener('change', function() {
      if (utterance && isPlaying) {
        stop();
        play();
      }
    });
  }

  window.addEventListener('beforeunload', stop);
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) stop();
  });

})();