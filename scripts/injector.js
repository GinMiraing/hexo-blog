hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyBegin.raw('default', '<div id="web-bg"></div><div id="web-mask"></div>');
});