// =====================================================================
// Avoid console errors in browsers that lack a console.
// =====================================================================

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// =====================================================================
// Place jQuery/helper plugins below.
// ---------------------------------------------------------------------
// If you're using jQuery plugins, make sure they're inside of a
//      (function($){
//          ...
//      })(jQuery);
// closure to keep them in the jQuery namespace safety blanket.
//
// Otherwise, make sure non-jQuery plugins are inside of a
//      (function (){
//          ...
//      })();
// closure for the same benefit.
// =====================================================================

