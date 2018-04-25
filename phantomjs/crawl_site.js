var site = 'http://kissmanga.com/Manga/Mujaki-no-Rakuen'
var name = "mujaki-no-rakuen"

if ( typeof(phantom) !== "undefined" ) {
  var page = require('webpage').create();

  page.onError = function(msg) {
    return
  }
  page.onConsoleMessage = function(msg) {
    var chapters = msg.split(',')
    for (var i = 0; i < chapters.length; i++) {
      console.log(chapters[i]);
    }
    phantom.exit();
  };
  page.onLoadFinished = function() {
    page.injectJs("crawl_site.js");
  }
  page.open(site)

} else {
  // polyfill for includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
          return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }
        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }

  if (document.body.innerHTML.length > 10000) {
    var aNodes = document.getElementsByTagName('a');
    var chapters = [];
    for(var i  = 0; i < aNodes.length; i++) {
      var link = aNodes[i].href;
      if (link.match(/\\?id=/) && !chapters.includes(link)) {
        chapters.push(link);
      }
      console.log(chapters);
    }
  }
}
