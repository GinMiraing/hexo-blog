'use strict';

const fs = require('fs');
const path = require('path');

// generate categories Page
hexo.extend.generator.register('_categories', function(locals) {
  if (this.theme.config.category.enable !== false) {
    return {
      path  : 'categories/index.html',
      data  : locals.theme,
      layout: 'categories'
    };
  }
});

// generate links page
hexo.extend.generator.register('_links', function(locals) {
  if (this.theme.config.links.enable !== false) {
    return {
      path  : 'links/index.html',
      data  : locals.theme,
      layout: 'links'
    };
  }
});
