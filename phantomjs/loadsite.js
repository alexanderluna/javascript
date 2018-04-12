var site = ''
if ( typeof(phantom) !== "undefined" ) {
	var page = require('webpage').create();

	page.onConsoleMessage = function(msg) {
		list = msg.split(',');
		for (var i = 0; i < list.length; i++) {
			console.log(list[i]);
		}
		phantom.exit();
	};

	page.onLoadFinished = function() {
		page.injectJs("loadsite.js");
	}

	page.open(site)
} else {
	if (typeof(lstImages) !== 'undefined') {
		console.log(lstImages);
	}
}
