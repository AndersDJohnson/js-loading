/*! MIT licensed by https://github.com/AndersDJohnson/js-loading */
(function (root, factory) {
  var name = 'jsLoading';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function ($) {
        // Also create a global in case some scripts
        // that are loaded still are looking for
        // a global even when an AMD loader is in use.
        return (root[name] = factory($));
    });
  } else {
    // Browser globals
    root[name] = factory(root.jQuery);
  }
}(this, function ($) {

  var jsLoading = {};

  jsLoading.defaults = {
    prefix: 'js',
    containerSelector: 'html, body',
    container: null,
    $container: null
  };

  jsLoading.loaded = function (options) {
    options = $.extend({}, jsLoading.defaults, options);
    $(function () {
      var $container;
      if (options.$container) {
        $container = options.$container;
      }
      else if (options.container) {
        $container = $(options.container);
      }
      else {
        $container = $(options.containerSelector);
      }
      $container.removeClass(prefix + '-loading');
    });
  };

  return jsLoading;
}));
