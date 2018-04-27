if ( typeof(phantom) !== "undefined" ) {
	var page = require('webpage').create();
	var system = require('system');
	var fs = require('fs');

	if (system.args.length < 2) {
		console.log("Missing arguments");
		phantom.exit();
	}

	page.onConsoleMessage = function(msg) {
		console.log('Creating file: ', system.args[2]);
		fs.write(system.args[2], msg, 'w');
		phantom.exit();
	};

	page.onLoadFinished = function() {
		page.injectJs("loadsite.js");
	}
	page.open(system.args[1])
} else {
	if (typeof(lstImages) !== 'undefined') {
		console.log(lstImages);
	}
}
