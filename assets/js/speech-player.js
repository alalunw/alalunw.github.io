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
  var fullText = '';
  var words = [];
  var boundaryOffsets = [];
  var currentWordIndex = 0;
  var seekWordIndex = 0;
  var restartTimeout = null;
  var isDragging = false;

  var playBtn = document.querySelector('[data-speech-play]');
  var progressEl = document.querySelector('[data-speech-progress]');
  var progressBar = document.querySelector('[data-speech-progress-bar]');
  var speedSelect = document.querySelector('[data-speech-speed]');
  var volumeSlider = document.querySelector('[data-speech-volume]');

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
      for (var i = 0; i < paragraphs.length; i++) {
        var t = paragraphs[i].textContent.trim();
        if (t) text += t + ' ';
      }
    }

    return text;
  }

  function buildWordMap(text) {
    words = text.match(/\S+/g) || [];
    boundaryOffsets = [];
    var pos = 0;
    for (var i = 0; i < words.length; i++) {
      var idx = text.indexOf(words[i], pos);
      if (idx === -1) idx = pos;
      boundaryOffsets.push(idx);
      pos = idx + words[i].length;
    }
  }

  function updateProgress() {
    if (words.length === 0) return;
    var percent = (currentWordIndex / words.length) * 100;
    progressEl.style.width = percent + '%';
  }

  function playFromWord(startWord) {
    synth.cancel();
    isPlaying = false;

    if (startWord < 0) startWord = 0;
    if (startWord >= words.length) startWord = words.length - 1;
    seekWordIndex = startWord;

    var charPos = boundaryOffsets[startWord] || 0;
    var textToSpeak = fullText.substring(charPos);

    if (!textToSpeak.trim()) return;

    utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = parseFloat(speedSelect.value) || 1;
    utterance.volume = parseFloat(volumeSlider.value) || 1;

  var charOffset = boundaryOffsets[startWord] || 0;

  utterance.onboundary = function(event) {
    if (event.name === 'word') {
      var absChar = charOffset + event.charIndex;
      var wordIdx = startWord;
      for (var i = startWord + 1; i < boundaryOffsets.length; i++) {
        if (boundaryOffsets[i] <= absChar) {
          wordIdx = i;
        } else {
          break;
        }
      }
      currentWordIndex = wordIdx;
      if (currentWordIndex > words.length) currentWordIndex = words.length;
      updateProgress();
    }
  };

    utterance.onstart = function() {
      isPlaying = true;
      playBtn.setAttribute('aria-label', 'Pause');
      currentWordIndex = startWord;
      updateProgress();
    };

    utterance.onend = function() {
      isPlaying = false;
      playBtn.setAttribute('aria-label', 'Play');
      progressEl.style.width = '100%';
      currentWordIndex = words.length;
    };

    utterance.onerror = function(e) {
      if (e.error !== 'canceled') {
        isPlaying = false;
        playBtn.setAttribute('aria-label', 'Play');
      }
    };

    synth.speak(utterance);
  }

  function play() {
    if (isPlaying) return;
    if (!fullText) {
      fullText = getPostText();
      if (!fullText) return;
      buildWordMap(fullText);
    }
    playFromWord(seekWordIndex);
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
    seekWordIndex = 0;
    currentWordIndex = 0;
    playBtn.setAttribute('aria-label', 'Play');
    progressEl.style.width = '0%';
  }

  function getSeekPosition(e) {
    var rect = progressBar.getBoundingClientRect();
    var x = (e.clientX || (e.touches && e.touches[0].clientX) || 0) - rect.left;
    var percent = Math.max(0, Math.min(1, x / rect.width));
    return Math.round(percent * words.length);
  }

  function handleSeekStart(e) {
    if (words.length === 0) return;
    e.preventDefault();
    isDragging = true;
    var targetWord = getSeekPosition(e);
    seekWordIndex = targetWord;
    currentWordIndex = targetWord;
    updateProgress();
  }

  function handleSeekMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    var targetWord = getSeekPosition(e);
    seekWordIndex = targetWord;
    currentWordIndex = targetWord;
    updateProgress();
  }

  function handleSeekEnd() {
    if (!isDragging) return;
    isDragging = false;
    playFromWord(seekWordIndex);
  }

  playBtn.addEventListener('click', toggle);

  if (progressBar) {
    progressBar.addEventListener('mousedown', handleSeekStart);
    progressBar.addEventListener('touchstart', handleSeekStart, { passive: false });
  }

  document.addEventListener('mousemove', handleSeekMove);
  document.addEventListener('touchmove', handleSeekMove, { passive: false });
  document.addEventListener('mouseup', handleSeekEnd);
  document.addEventListener('touchend', handleSeekEnd);

  if (speedSelect) {
    speedSelect.addEventListener('change', function() {
      if (isPlaying || synth.paused) {
        var resumeWord = currentWordIndex;
        synth.cancel();
        isPlaying = false;
        restartTimeout = setTimeout(function() { playFromWord(resumeWord); }, 100);
      }
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener('input', function() {
      if (isPlaying || synth.paused) {
        var resumeWord = currentWordIndex;
        synth.cancel();
        isPlaying = false;
        restartTimeout = setTimeout(function() { playFromWord(resumeWord); }, 100);
      }
    });
  }

  window.addEventListener('beforeunload', stop);
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) stop();
  });

})();
