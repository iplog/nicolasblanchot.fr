(function() {
  (function($) {
    var scroller;
    var windowHeight;

    $.initialize = function() {
      scroller = null;
      windowHeight = window.innerHeight || 460;
      document.body.addEventListener('touchmove', function(e) {
        return e.preventDefault();
      });

      return $('body');
    };
    $.setupIScroll = function(element) {
      var scrollable;
      if (element == null) {
        element = null;
      }
      if (typeof iScroll === "undefined") {
        return;
      }
      if (scroller) {
        scroller.destroy();
        scroller = null;
      }
      if (element == null) {
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
        if (scroller) scroller.refresh();
        else $.refreshScroll();
      }, 10);

    };
    function setWrapperHeight(element) {
      var height;
      height = windowHeight;
      height -= _.reduce(element.find('.navigationBar'), function(h, elt) {
        return h += $(elt).height();
      }, 0);
      return element.find(".wrapper").css("height", height + "px");
    }
  })(jQuery);
}).call(this);
