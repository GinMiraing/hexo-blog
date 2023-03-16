Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.billboard();
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerScrollTopArrowEvent();
  Fluid.events.registerIziToast();
  Fluid.events.registerImageLoadedEvent();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
});
