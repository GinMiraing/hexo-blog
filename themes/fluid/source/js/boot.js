Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerImageLoadedEvent();
};

Fluid.boot.registerPlugins = function() {
  Fluid.plugins.fancyBox();
  Fluid.plugins.imageCaption();
  Fluid.plugins.twikooOn();
  Fluid.plugins.lazyloadImage();
  Fluid.plugins.anchors();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});

document.addEventListener('pjax:complete', function() {
  Fluid.boot.registerEvents();
  Fluid.boot.registerPlugins();
  console.log('pjax complete');
});

window.addEventListener('load', function() {
  Fluid.boot.registerPlugins();
  const pjax = new Pjax({
    elements: "a:not([data-fancybox]):not([aria-label])",
    selectors: [
        'title',
        'meta[name=description]',
        '.container'
    ],
    scrollTo: true,
    cacheBust: false,
    analytics: false,
    scrollRestoration: false,
  });

  console.log('Powered by Hexo\nTheme Fluid https://git.io/JqpVD\nModified by Yin');
})
