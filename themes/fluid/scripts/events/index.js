'use strict';

hexo.on('generateBefore', () => {
  require('./lib/merge-configs')(hexo);
  require('./lib/injects')(hexo);
  require('./lib/lazyload')(hexo);
  require('./lib/footnote')(hexo);
});
