Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerImageLoadedEvent();
};

Fluid.boot.registerPlugins = function() {
  Fluid.plugins.fancyBox();
  Fluid.plugins.imageCaption();
  Fluid.plugins.twikooOn();
  Fluid.plugins.lazyloadImage();
  Fluid.plugins.anchors();
};

Fluid.boot.registerThemeButton = function() {
  var button = document.querySelector('#color-toggle-btn');
  if (button) {
    button.addEventListener('click', function() {
      applyCustomColorSchemaSettings(toggleCustomColorSchema());
    });
    var icon = document.querySelector(colorToggleIconSelector);
    if (icon) {
      button.addEventListener('mouseenter', function() {
        var current = icon.getAttribute('data');
        icon.classList.replace(getIconClass(invertColorSchemaObj[current]), getIconClass(current));
      });
      button.addEventListener('mouseleave', function() {
        var current = icon.getAttribute('data');
        icon.classList.replace(getIconClass(current), getIconClass(invertColorSchemaObj[current]));
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});

document.addEventListener('pjax:complete', function() {
  Fluid.boot.registerEvents();
  Fluid.boot.registerPlugins();
  Fluid.boot.registerThemeButton();
});

window.addEventListener('load', function() {
  Fluid.boot.registerPlugins();
  Fluid.boot.registerThemeButton();

  const pjax = new Pjax({
    elements: "a:not([data-fancybox]), a:not([aria-label])",
    selectors: [
        'title',
        'meta[name=description]',
        '.container'
    ],
    history: true,
    debug: false,
    cacheBust: false,
    timeout: 0,
    analytics: false,
    currentUrlFullReload: false,
    scrollRestoration: false,
  });

  console.log('Powered by Hexo\nTheme Fluid https://git.io/JqpVD\nModified by Yin');
})
