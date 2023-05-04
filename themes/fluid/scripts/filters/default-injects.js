'use strict';

const path = require('path');

hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('default', path.join(hexo.theme_dir, 'layout/_partials/header.ejs'));
  injects.footer.file('default', path.join(hexo.theme_dir, 'layout/_partials/footer.ejs'));

  injects.postMetaTop.file('default', path.join(hexo.theme_dir, 'layout/_partials/post/meta-top.ejs'));
  injects.postMetaBottom.file('default', path.join(hexo.theme_dir, 'layout/_partials/post/meta-bottom.ejs'));
  if (hexo.theme.config.post.copyright.enable) {
    injects.postCopyright.file('default', path.join(hexo.theme_dir, 'layout/_partials/post/copyright.ejs'));
  }

  injects.pageComments.file('default', path.join(hexo.theme_dir, 'layout/_partials/comments.ejs'));
}, -99);
