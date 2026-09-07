(function () {
  function collectLinks() {
    return Array.prototype.slice.call(
      document.head.querySelectorAll('link[rel*="icon"]')
    );
  }

  function applyLink(source, target) {
    target.setAttribute('type', source.getAttribute('type'));
    target.setAttribute('href', source.getAttribute('href'));
  }

  function initSwitcher(delay) {
    if (typeof window.matchMedia !== 'function') {
      return function noop() {};
    }

    var links = collectLinks();
    var current = document.createElement('link');
    var previousMedia;

    current.setAttribute('rel', 'shortcut icon');
    document.head.appendChild(current);

    function applyMatchingFavicon() {
      var matched;

      links.forEach(function (link) {
        if (window.matchMedia(link.media).matches) {
          matched = link;
        }
      });

      if (matched && matched.media !== previousMedia) {
        previousMedia = matched.media;
        applyLink(matched, current);
      }
    }

    var intervalId = setInterval(applyMatchingFavicon, delay || 300);

    function unsubscribe() {
      clearInterval(intervalId);
      links.forEach(function (link) {
        document.head.appendChild(link);
      });
    }

    applyMatchingFavicon();
    links.forEach(function (link) {
      document.head.removeChild(link);
    });

    return unsubscribe;
  }

  initSwitcher();
})();
