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
  var totalWords = 0;
  var currentWordIndex = 0;
  var startTime = null;
  var estimatedDuration = 0;
  var restartTimeout = null;
  
  var player = document.querySelector('[data-speech-player]');
  var playBtn = document.querySelector('[data-speech-play]');
  var progressEl = document.querySelector('[data-speech-progress]');
  var timeEl = document.querySelector('[data-speech-time]');
  var durationEl = document.querySelector('[data-speech-duration]');
  var speedSelect = document.querySelector('[data-speech-speed]');
  var volumeSlider = document.querySelector('[data-speech-volume]');

  function getPostText() {
    var text = '';
    var header = document.querySelector('.post-header');
    var content = document.querySelector('.post-content');
    var title, meta, paragraphs, i;
    
    if (header) {
      title = header.querySelector('.post-header__title');
      if (title) text += title.textContent.trim() + '. ';
      
      meta = header.querySelector('.post-header__meta');
      if (meta) text += meta.textContent.trim() + '. ';
    }
    
    if (content) {
      paragraphs = content.querySelectorAll('p, h2, h3, h4, h5, h6, li, blockquote');
      for (i = 0; i < paragraphs.length; i++) {
        var t = paragraphs[i].textContent.trim();
        if (t) text += t + ' ';
      }
    }
    
    return text;
  }

  function countWords(text) {
    return text.trim().split(/\s+/).length;
  }

  function formatTime(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  function updateProgress() {
    if (totalWords === 0) return;
    var percent = (currentWordIndex / totalWords) * 100;
    progressEl.style.width = percent + '%';
    
    if (startTime && estimatedDuration > 0) {
      var elapsed = (Date.now() - startTime) / 1000;
      var adjustedElapsed = elapsed * (parseFloat(speedSelect.value) || 1);
      timeEl.textContent = formatTime(adjustedElapsed);
    }
  }

  function play() {
    if (isPlaying) return;
    currentText = getPostText();
    if (!currentText) return;
    
    totalWords = countWords(currentText);
    currentWordIndex = 0;
    startTime = Date.now();
    estimatedDuration = (totalWords / 150) * 60;
    
    durationEl.textContent = formatTime(estimatedDuration);
    
    utterance = new SpeechSynthesisUtterance(currentText);
    utterance.rate = parseFloat(speedSelect.value) || 1;
    utterance.volume = parseFloat(volumeSlider.value) || 1;
    
    utterance.onboundary = function(event) {
      if (event.name === 'word') {
        currentWordIndex = event.charIndex;
        updateProgress();
      }
    };
    
    utterance.onstart = function() {
      isPlaying = true;
      playBtn.setAttribute('aria-label', 'Pause');
      startTime = Date.now();
    };
    
    utterance.onend = function() {
      isPlaying = false;
      playBtn.setAttribute('aria-label', 'Play');
      progressEl.style.width = '100%';
    };
    
    utterance.onerror = function(e) {
      if (e.error !== 'canceled') {
        isPlaying = false;
        playBtn.setAttribute('aria-label', 'Play');
      }
    };
    
    synth.speak(utterance);
  }

  function pause() {
    if (!isPlaying) return;
    synth.pause();
    isPlaying = false;
    playBtn.setAttribute('aria-label', 'Play');
  }

  function resume() {
    if (!isPlaying) {
      synth.resume();
      isPlaying = true;
      playBtn.setAttribute('aria-label', 'Pause');
    }
  }

  function toggle() {
    var isPaused = playBtn.getAttribute('aria-label') === 'Play';
    if (isPaused) {
      if (synth.paused) {
        resume();
      } else {
        play();
      }
    } else {
      pause();
    }
  }

  function stop() {
    if (restartTimeout) {
      clearTimeout(restartTimeout);
      restartTimeout = null;
    }
    synth.cancel();
    isPlaying = false;
    playBtn.setAttribute('aria-label', 'Play');
    progressEl.style.width = '0%';
    timeEl.textContent = '0:00';
  }

  playBtn.addEventListener('click', toggle);
  
  if (speedSelect) {
    speedSelect.addEventListener('change', function() {
      if (isPlaying || synth.paused) {
        stop();
        restartTimeout = setTimeout(function() { play(); }, 100);
      }
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener('input', function() {
      if (isPlaying || synth.paused) {
        stop();
        restartTimeout = setTimeout(function() { play(); }, 100);
      }
    });
  }

  window.addEventListener('beforeunload', stop);
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) stop();
  });

})();
