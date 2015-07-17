/**
 * baseline-element - JavaScript library to fix responsive images in vertical rhythm environments
 * @version v1.0.2
 * @link https://github.com/betsol/baseline-element
 * @license MIT
 *
 * @author Slava Fomin II <s.fomin@betsol.ru>
 * @author Vladimir Gaintsev <gaintsev@gmail.com>
 */
(function (window, $) {

  'use strict';

  var items = [];
  var initialized = false;

  /**
   * Exposing library to the global context.
   */
  window.baselineElement = baselineElement;

  /**
   * Adding jQuery/Zepto support.
   */
  if ($ && $.fn) {
    $.fn.baselineElement = function(baseline) {
      var $collection = this;
      $collection.each(function (key, element) {
        baselineElement(element, baseline);
      });
      return $collection;
    };
  }


  /**
   * This is an entry point for a plugin.
   *
   * @param {Element} element
   * @param {int} baseline
   */
  function baselineElement (element, baseline) {
    if (!initialized) {
      initialize();
    }
    element.style.display = 'block';
    element.style.objectFit = 'cover';
    element.style.width = '100%';
    var item = {
      aspectRatio: (element.offsetWidth / element.offsetHeight),
      element: element,
      baseline: baseline
    };
    items.push(item);
    resizeItem(item);
  }

  /**
   * Initializes the plugin.
   * Binds throttled resize event listener.
   */
  function initialize () {
    throttleEvent('resize', 'throttledResize');
    window.addEventListener('throttledResize', onResize);
    initialized = true;
  }

  /**
   * Window resize event handler.
   * Iterating all items and resizing each of them.
   */
  function onResize () {
    for (var key in items) {
      if (!items.hasOwnProperty(key)) {
        continue;
      }
      resizeItem(items[key]);
    }
  }

  /**
   * Resizes passed item according to it's aspect ratio, parent container width and baseline.
   *
   * @param {object} item
   */
  function resizeItem (item) {

    var element = item.element;
    var baseline = item.baseline;
    var parent = element.parentElement;

    var newHeight = (parent.offsetWidth / item.aspectRatio);

    var leftover = (newHeight % baseline);

    if (leftover >= baseline / 2) {
      newHeight += (baseline - leftover);
    } else {
      newHeight -= leftover;
    }

    element.style.height = newHeight + 'px';
  }

  /**
   * This function listens for specified event type on a specified object and
   * triggers yet another throttled event with the specified name.
   * This helps with performance of rapidly firing events like `resize`.
   * Taken from MDN: https://developer.mozilla.org/en-US/docs/Web/Events/resize
   *
   * @param {string} type
   * @param {string} name
   * @param {undefined|object} [obj=window]
   */
  function throttleEvent (type, name, obj) {
    obj = (obj || window);
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  }

})(window, window.jQuery || window.Zepto || undefined);
