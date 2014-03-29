js-loading
=====================

Prevents [FOUC][fouc] (flash of unstyled content), or "unbehaviored" content,
until JavaScript loads and executes,
by providing classes to hide specified elements.

## Install

Via bower as `js-loading`.

```sh
bower install --save js-loading
```

## Usage

Example:

```html
<html class="no-js js-loading">
  <head>
    <script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
    <link rel="stylesheet" type="text/css" href="dist/js-loading.min.css" />
  </head>
  <body>
    <div class="js-loading-invisible">
      <!-- contents will have {visibility: hidden} until JS loads -->
    </div>
    <div class="js-loading-hidden">
      <!-- contents will have {display: none} until JS loads -->
    </div>

    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="dist/js-loading.min.js"></script>
    <script>
      // do stuff, then finally...
      jsLoading.loaded();
    </script>
  </body>
</html>
```

Credit to Paul Irish for the [`.no-js` to `.js` trick](http://www.paulirish.com/2009/avoiding-the-fouc-v3/).

## LESS API

See `src/js-loading-mixin.less`.

[fouc]: http://en.wikipedia.org/wiki/Flash_of_unstyled_content