(function() {
  (function($) {
    var scroller;
    var windowHeight;

    $.initialize = function(debug) {
      scroller = null;
      windowHeight = window.innerHeight || 460;

      // prevent native scroll on pages
      document.body.addEventListener('touchmove', function(e) {
        return e.preventDefault();
      });

      // handle orientation changes
      window.onorientationchange = doOnOrientationChange;

      // Initial execution
      doOnOrientationChange();

      // start less css if debug mode
      if (debug && window.less) {
        less.watch();
      }

      return $('body');
    };
    $.setupScroll = function(element) {
      var scrollable;
      if (!element) {
        element = null;
      }
      if (typeof iScroll === 'undefined') {
        return;
      }
      if (scroller) {
        scroller.destroy();
        scroller = null;
      }
      if (!element) {
        element = $('body > div:first-child');
      }
      scrollable = element.find('.wrapper')[0];
      if (scrollable) {
        setTimeout(function() {
          setWrapperHeight(element);
          scroller = new iScroll(scrollable);
        }, 0);
        return scroller;
      }
    };
    $.refreshScroll = function() {
      setTimeout(function() {
        if (scroller) {
          scroller.refresh();
        } else {
          $.setupScroll();
        }
      }, 0);
    };
    function setWrapperHeight(element) {
      var height = windowHeight;
      height -= _.reduce(element.find('.toolbar'), function(h, elt) {
        return h += $(elt).outerHeight();
      }, 0);
      return element.find('.wrapper').css('height', height + 'px');
    }
    function doOnOrientationChange() {
      switch(window.orientation) {
      case -90:
      case 90:
        $('body').addClass('landscape');
        break;
      default:
        $('body').removeClass('landscape');
        break;
      }
    }
  })(jQuery);
}).call(this);
