(function (document) {
  var viewportMeta = document.querySelector('meta[name="viewport"]');

  if (!viewportMeta || !navigator.userAgent.match(/iPhone/i)) {
    return;
  }

  function setViewport(content) {
    viewportMeta.content = content;
  }

  function initialize() {
    setViewport('width=device-width, minimum-scale=1.0, maximum-scale=1.0');
  }

  function handleGestureStart() {
    setViewport('width=device-width, minimum-scale=0.25, maximum-scale=1.6');
  }

  initialize();
  document.addEventListener('touchstart', handleGestureStart, false);
  document.addEventListener(
    'touchend',
    function () {
      initialize();
    },
    false
  );
})(document);
