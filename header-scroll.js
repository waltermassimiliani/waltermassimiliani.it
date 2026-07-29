// Effetto header allo scroll — leggero, non invasivo (stile Apple)
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var threshold = 24;
  function onScroll() {
    if (window.scrollY > threshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
