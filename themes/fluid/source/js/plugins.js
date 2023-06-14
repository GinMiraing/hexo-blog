HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.plugins = {

  fancyBox: function(selector) {
    if (!('fancybox' in jQuery)) { return; };

    jQuery(selector || '.markdown-body :not(a) > img, .markdown-body > img').each(function() {
      var $image = jQuery(this);
      if ($image.is('.hastarget')) { return };
      var imageUrl = $image.attr('data-src') || $image.attr('src') || '';
      if (CONFIG.image_zoom.img_url_replace) {
        var rep = CONFIG.image_zoom.img_url_replace;
        var r1 = rep[0] || '';
        var r2 = rep[1] || '';
        if (r1) {
          if (/^re:/.test(r1)) {
            r1 = r1.replace(/^re:/, '');
            var reg = new RegExp(r1, 'gi');
            imageUrl = imageUrl.replace(reg, r2);
          } else {
            imageUrl = imageUrl.replace(r1, r2);
          };
        };
      };
      var $imageWrap = $image.wrap(`
        <a class="fancybox fancybox.image" href="${imageUrl}"
          itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`
      ).parent('a');
      if ($imageWrap.length !== 0) {
        if ($image.is('.group-image-container img')) {
          $imageWrap.attr('data-fancybox', 'group').attr('rel', 'group');
        } else {
          $imageWrap.attr('data-fancybox', 'default').attr('rel', 'default');
        };

        var imageTitle = $image.attr('title') || $image.attr('alt');
        if (imageTitle) {
          $imageWrap.attr('title', imageTitle).attr('data-caption', imageTitle);
        };
      };
      $image.attr('class', 'hastarget');
    });

    jQuery.fancybox.defaults.hash = false;
    jQuery('.fancybox').fancybox({
      loop: true,
      infobar: false,
      buttons: [
        'close'
      ],
    });
  },

  imageCaption: function(selector) {
    if (!CONFIG.image_caption.enable) { return; };

    jQuery(selector || `.markdown-body > p > img, .markdown-body > figure > img,
      .markdown-body > p > a.fancybox, .markdown-body > figure > a.fancybox`).each(function() {
      var $target = jQuery(this);
      var $figcaption = $target.next('figcaption');
      if ($figcaption.length !== 0) {
        $figcaption.addClass('image-caption');
      } else {
        var imageTitle = $target.attr('title') || $target.attr('alt');
        if (imageTitle) {
          $target.after(`<figcaption aria-hidden="true" class="image-caption">${imageTitle}</figcaption>`);
        };
      };
    });
  },

  twikooOn: function() {
    var twikooContent = jQuery('#twikoo');
    if (twikooContent.length === 0) {
      return;
    };
    twikoo.init({
      envId: 'https://twikoo.zengjunyin.com',
      el: '#twikoo',
      path: window.location.pathname,
      onCommentLoaded: function () {
        Fluid.plugins.fancyBox('.tk-content img:not(.tk-owo-emotion)');
      }
    });
  },

  lazyloadImage: function() {
    if (!CONFIG.lazyload.enable) { return; };
    for (const each of document.querySelectorAll('img[lazyload]')) {
      Fluid.utils.waitElementVisible(each, function() {
        each.removeAttribute('srcset');
        each.removeAttribute('lazyload');
      }, CONFIG.lazyload.offset_factor);
    };
  },

  anchors: function() {
    window.anchors.options = {
      placement: CONFIG.anchorjs.placement,
      visible: CONFIG.anchorjs.visible
    };
    if (CONFIG.anchorjs.icon) {
      window.anchors.options.icon = CONFIG.anchorjs.icon;
    }
    var el = (CONFIG.anchorjs.element || 'h1,h2,h3,h4,h5,h6').split(',');
    var res = [];
    for (var item of el) {
      res.push('.markdown-body > ' + item.trim());
    }
    if (CONFIG.anchorjs.placement === 'left') {
      window.anchors.options.class = 'anchorjs-link-left';
    }
    window.anchors.add(res.join(', '));
  }
};
