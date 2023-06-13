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

Fluid.boot.registerThemeButton = function() {
  const theme_button_1 = document.querySelector('#color-toggle-btn');
  if (theme_button_1) {
    theme_button_1.addEventListener('click', function() {
      applyCustomColorSchemaSettings(toggleCustomColorSchema());
    });
  };
  const back2top_button_1 = document.querySelector('#scroll-top-button');
  if (back2top_button_1) {
    back2top_button_1.addEventListener('click', function() {
      document.body.scrollTop = 0;
    });
  };
  const theme_button_2 = document.querySelector('#navbar-theme-btn');
  if (theme_button_2) {
    theme_button_2.addEventListener('click', function() {
      applyCustomColorSchemaSettings(toggleCustomColorSchema());
    });
  };
  const back2top_button_2 = document.querySelector('#navbar-top-button');
  if (back2top_button_2) {
    back2top_button_2.addEventListener('click', function() {
      document.body.scrollTop = 0;
    });
  };
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});

document.addEventListener('pjax:complete', function() {
  Fluid.boot.registerEvents();
  Fluid.boot.registerPlugins();
  Fluid.boot.registerThemeButton();
  console.log('pjax complete');
});

window.addEventListener('load', function() {
  Fluid.boot.registerPlugins();
  Fluid.boot.registerThemeButton();

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
