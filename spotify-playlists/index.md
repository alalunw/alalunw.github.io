---
layout: page
title: Spotify Playlists
subtitle: A collection of my curated and maintained playlists
permalink: /spotify-playlists/
---

<div class="playlist-intro">
I'm a bit particular about how my Spotify music library operates, so I thought this might be of use to someone...

This is a hub for all the Spotify playlists I'm curating and maintaining! A mix of my favourites from any particular year, Live tracks, spotlighting particular artists, and some genre-related playlists.
</div>

<!-- Lightweight JS for smooth offset scrolling with fixed header -->
<script>
document.addEventListener('DOMContentLoaded', function(){
function headerHeight(){
var h = 0;
var header = document.querySelector('.site-header');
if(header){ h = header.offsetHeight; }
return h;
}
var links = document.querySelectorAll('.playlist-subnav a');
links.forEach(function(a){
a.addEventListener('click', function(e){
var href = this.getAttribute('href');
if(!href || href.charAt(0) !== '#') return;
var target = document.querySelector(href);
if(!target) return;
e.preventDefault();
var y = window.pageYOffset + target.getBoundingClientRect().top - headerHeight() - 8;
window.scrollTo({ top: y, behavior: 'smooth' });
});
});
});
</script>

<!-- Hidden anchor for All Time Favourites section (header target) -->
<div id="all-time-favourites" aria-hidden="true" style="position:absolute; left:-9999px; top:0; width:1px; height:1px; overflow:hidden;"></div>

<!-- Interactive Subnav for subsections -->
<div class="playlist-subnav" id="playlist-subnav" role="navigation" aria-label="Playlist categories">
<a href="#all-time-favourites" class="playlist-subnav__item playlist-subnav__item--primary">All Time Favourites</a>
<a href="#sessions" class="playlist-subnav__item">Sessions</a>
<a href="#spotlight" class="playlist-subnav__item">Spotlight</a>
<a href="#live-favourites" class="playlist-subnav__item">Live Favourites</a>
<a href="#genres" class="playlist-subnav__item">Genres</a>
<a href="#annual-favourites" class="playlist-subnav__item">Annual Favourites</a>
</div>

<!-- Sessions Section -->
<div id="sessions" class="playlist-section">
<h2 class="playlist-section__title">Sessions</h2>
<p class="playlist-section__description">These are journeys into a particular genre, mood, time period etc...</p>
</div>

<div class="playlist-grid">
<div class="playlist-card">
<div class="playlist-card__icon">🌊</div>
<h3 class="playlist-card__title">Chicago House vs Detroit Techno</h3>
<a href="https://open.spotify.com/playlist/2kG2yZjqM6VOvdLAJTaf2u?si=d3e359a323554de4" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🌊</div>
<h3 class="playlist-card__title">The Scott Burns Era</h3>
<a href="https://open.spotify.com/playlist/1aweBxZBFYn0ZdDinPYkPl?si=20e12d1e85d3498e" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🌊</div>
<h3 class="playlist-card__title">M.E.M.P.H.I.S</h3>
<a href="https://open.spotify.com/playlist/3gAijkXEd063Mq8KEX4ado?si=c28be7597fad42a6" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🌊</div>
<h3 class="playlist-card__title">Prog Odyssey</h3>
<a href="https://open.spotify.com/playlist/6i2oC4ipUee3hAUqJKU6M4?si=99c39af5bc3a44c0" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>
</div>

<!-- Spotlight Section -->
<div id="spotlight" class="playlist-section">
<h2 class="playlist-section__title">Spotlight</h2>
<p class="playlist-section__description">These are focused on spotlighting my favourite musicians</p>
</div>

<div class="playlist-grid">
<div class="playlist-card">
<div class="playlist-card__icon">🎸</div>
<h3 class="playlist-card__title">Spotlight John McLaughlin</h3>
<a href="https://open.spotify.com/playlist/0r1KHgMILXuilr3RUdsjRx?si=37c8b0a04251454e" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎸</div>
<h3 class="playlist-card__title">Spotlight Brent Hinds</h3>
<a href="https://open.spotify.com/playlist/1ILi01GfWlnMYbLYF8TzUl" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎸</div>
<h3 class="playlist-card__title">Spotlight Matt Pike</h3>
<a href="https://open.spotify.com/playlist/0Ri2oAAQfpHblFcBapoTzz?si=OBPNbUFEQ8a59VgWAQsEbQ" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎸</div>
<h3 class="playlist-card__title">Spotlight Ozzy Osbourne</h3>
<a href="https://open.spotify.com/playlist/6nAWKjBmJo6b8CNVZflwx0?si=76c2f429603a43c4" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎸</div>
<h3 class="playlist-card__title">Spotlight Frank Zappa</h3>
<a href="https://open.spotify.com/playlist/6sy93LhMxXPcoXlnMDrlJg?si=860dc7abde164c05" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎸</div>
<h3 class="playlist-card__title">Spotlight Fredrik Thordendal</h3>
<a href="https://open.spotify.com/playlist/53dlhklSHWgBxmk1sfYZnU?si=08dc60913ba44e64" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight Pharrell</h3>
<a href="https://open.spotify.com/playlist/0t9hg0gXcD1vaS3z3o8UlW?si=c113979fe8e84aca" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight DJ Paul and Juicy J</h3>
<a href="https://open.spotify.com/playlist/0TQwNiBnWFdAj6kXOwZs8U?si=f5a09e2a0f3a453c" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight DJ Premier</h3>
<a href="https://open.spotify.com/playlist/6xlUAktGh8DVq04DNZ0leN?si=6f885059922442c0" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight Pete Rock</h3>
<a href="https://open.spotify.com/playlist/0YGhMP8gfOciMRQwsklssS?si=e87a94b51aeb4802" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight 9th Wonder</h3>
<a href="https://open.spotify.com/playlist/6T2y9tzBXFbV8uan7tmDjo?si=1ab0e94220c84024" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight J Dilla</h3>
<a href="https://open.spotify.com/playlist/4PjA0o2QYc8G1C6atLJtCQ?si=3a84f06a7ad74f8b" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight Q-Tip</h3>
<a href="https://open.spotify.com/playlist/2CZPQfOCTvWrlZqDR8cIl0?si=cc0dcc9a616348b4" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">🎹</div>
<h3 class="playlist-card__title">Spotlight The Alchemist</h3>
<a href="https://open.spotify.com/playlist/6Bt587hj7lBB6DN8sEZFpn?si=50f8099ac8984da0" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

  <div class="playlist-card">
  <div class="playlist-card__icon">🎹</div>
  <h3 class="playlist-card__title">Spotlight RZA</h3>
  <a href="https://open.spotify.com/playlist/5X5M6LgSgvMetTx12WqdIA?si=a14eb76f9f694646" class="playlist-card__link">
  Listen on Spotify
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  </a>
  </div>

  <div class="playlist-card">
  <div class="playlist-card__icon">🎹</div>
  <h3 class="playlist-card__title">Spotlight Lex Luger</h3>
  <a href="https://open.spotify.com/playlist/4CsttEdKMOsGiV05qNbrWY" class="playlist-card__link">
  Listen on Spotify
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  </a>
  </div>
</div>

<!-- Live Favourites Section -->
<div id="live-favourites" class="playlist-section">
<h2 class="playlist-section__title">Live Favourites</h2>
</div>

<div class="playlist-grid">
<div class="playlist-card playlist-card--featured">
<div class="playlist-card__icon">🎚️</div>
<h3 class="playlist-card__title">Live Favourites</h3>
<a href="https://open.spotify.com/playlist/29XMNNuNLsZvretqTzmSdv?si=ef82fb1ca5134063" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>
</div>

<!-- Genres Section -->
<div id="genres" class="playlist-section">
<h2 class="playlist-section__title">Genres</h2>
</div>

<div class="playlist-grid">
<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Soul/Funk</h3>
<a href="https://open.spotify.com/playlist/1CLisCk5hLAjmaEkUKfENh" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Rock</h3>
<a href="https://open.spotify.com/playlist/17yfN8m7osAJcAzBvMkCnD" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Hip Hop</h3>
<a href="https://open.spotify.com/playlist/6XXkBUKI8skMtxwquA8LZX" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">R&B</h3>
<a href="https://open.spotify.com/playlist/5lZHypGRV11SlJlogIXyfS" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Metal</h3>
<a href="https://open.spotify.com/playlist/3SNDB6oDvpGZ3V6XOLCM7l" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Classical</h3>
<a href="https://open.spotify.com/playlist/61fSoiMiIlLsbJFdSpyL8G" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Movie OST</h3>
<a href="https://open.spotify.com/playlist/5FcTGZqp3TFhWhiHtmf5Yr" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Jazz</h3>
<a href="https://open.spotify.com/playlist/1hCktuJRZR6OZVOZl5wSAT" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Prog</h3>
<a href="https://open.spotify.com/playlist/2FZAHXCSrnCYvaHt5N3mAp" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">D&B</h3>
<a href="https://open.spotify.com/playlist/0PcqOIXb3G2tRmQ2H0SiZ1" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Dance/House/Boogie</h3>
<a href="https://open.spotify.com/playlist/01qc9M0B23LhjxErbaBbhv" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Trap</h3>
<a href="https://open.spotify.com/playlist/6QvQh8YYmjDRFE5lmOA6pt" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">K Pop</h3>
<a href="https://open.spotify.com/playlist/37O08LwRMmNsU6qOGXuSFt" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card playlist-card--compact">
<div class="playlist-card__icon">🎵</div>
<h3 class="playlist-card__title">Reggae/Dub</h3>
<a href="https://open.spotify.com/playlist/6rUuCnb14lnkUnkLHOYuqy" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>
</div>

<!-- Annual Favourites Section -->
<div id="annual-favourites" class="playlist-section">
<h2 class="playlist-section__title">Annual Favourites</h2>
</div>

<div class="playlist-grid">
<div class="playlist-card playlist-card--featured">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2026 Favourites</h3>
<a href="https://open.spotify.com/playlist/1mkmXZxsKG0s2DwlG1yk7D" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2025 Favourites</h3>
<a href="https://open.spotify.com/playlist/6hU7fymh4bIAB3LJ2Lh5JD" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2024 Favourites</h3>
<a href="https://open.spotify.com/playlist/5f2SqgeHA1im9EAZeEQPb4?si=b0deecf7b654415a" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2023 Favourites</h3>
<a href="https://open.spotify.com/playlist/07o1Re1MM5RkIpN1FPZ2jC" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2022 Favourites</h3>
<a href="https://open.spotify.com/playlist/66DOLii5EzUtBWUP6f0ykU" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2021 Favourites</h3>
<a href="https://open.spotify.com/playlist/0yFlzvxwXXq2EShNX6cmfo" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2020 Favourites</h3>
<a href="https://open.spotify.com/playlist/6HcGCg4e0e2YGC2uufEBN1" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2019 Favourites</h3>
<a href="https://open.spotify.com/playlist/2drNLhi0vGUWJzHj1T3CDD" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>

<div class="playlist-card">
<div class="playlist-card__icon">⭐</div>
<h3 class="playlist-card__title">2018 Favourites</h3>
<a href="https://open.spotify.com/playlist/0o29K6RZdYg7b8ZOH04WXg" class="playlist-card__link">
Listen on Spotify
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
</a>
</div>
</div>
