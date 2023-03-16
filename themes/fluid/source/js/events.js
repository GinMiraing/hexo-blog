HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.events = {

  registerNavbarEvent: function() {
    var navbar = jQuery('#navbar');
    if (navbar.length === 0) {
      return;
    }
    jQuery('#navbar-toggler-btn').on('click', function() {
      jQuery('.animated-icon').toggleClass('open');
      jQuery('#navbar').toggleClass('navbar-col-show');
    });
  },

  registerScrollTopArrowEvent: function() {
    var topArrow = jQuery('#scroll-top-button');
    if (topArrow.length === 0) {
      return;
    }
    var board = jQuery('#board');
    var cardcontent = jQuery('#card-content');
    if (board.length === 0 && cardcontent.length === 0) {
      return;
    }
    var posDisplay = false;
    var scrollDisplay = false;
    // Position
    var setTopArrowPos = function() {
      var boardRight;
      if (board.length === 0) {
        boardRight = cardcontent[0].getClientRects()[0].right;
      } else {
        boardRight = board[0].getClientRects()[0].right;
      }
      var bodyWidth = document.body.offsetWidth;
      var right = bodyWidth - boardRight;
      posDisplay = right >= 50;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px',
        'right' : right - 64 + 'px'
      });
    };
    setTopArrowPos();
    jQuery(window).resize(setTopArrowPos);
    // Display
    var headerHeight;
    if (board.length === 0) {
      headerHeight = cardcontent.offset().top;
    } else {
      headerHeight = board.offset().top;
    }
    Fluid.utils.listenScroll(function() {
      var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
      scrollDisplay = scrollHeight >= headerHeight;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px'
      });
    });
    // Click
    topArrow.on('click', function() {
      jQuery('body,html').animate({
        scrollTop: 0,
        easing   : 'swing'
      });
    });
  },

  registerImageLoadedEvent: function() {
    if (!('NProgress' in window)) { return; }

    var bg = document.getElementById('banner');
    if (bg) {
      var src = bg.style.backgroundImage;
      var url = src.match(/\((.*?)\)/)[1].replace(/(['"])/g, '');
      var img = new Image();
      img.onload = function() {
        window.NProgress && window.NProgress.inc(0.2);
      };
      img.src = url;
      if (img.complete) { img.onload(); }
    }

    var notLazyImages = jQuery('main img:not([lazyload])');
    var total = notLazyImages.length;
    for (const img of notLazyImages) {
      const old = img.onload;
      img.onload = function() {
        old && old();
        window.NProgress && window.NProgress.inc(0.5 / total);
      };
      if (img.complete) { img.onload(); }
    }
  },

  registerIziToast: function() {
    var iziToastState = sessionStorage.getItem('iziToastState');
    if (iziToastState === null) {
      iziToast.show({
        message: '推荐使用高版本 Chrome 或 Edge 浏览本站...',
        messageColor: 'var(--text-color)',
        backgroundColor: 'var(--board-bg-color)',
        close: false,
        closeOnClick: true,
        position: 'bottomLeft',
        progressBarColor: '#eea2a4',
        timeout: 6000,
      });
      sessionStorage.setItem('iziToastState', 'true');
    };
  },

  billboard: function() {
    if (!('console' in window)) {
      return;
    }
    console.log('Powered by Hexo\nTheme Fluid https://git.io/JqpVD\nModified by Yin');
  }
};
