/**
 * MessageController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function(req, res) {
		res.send("Hello there!")
	},

	bye: function(req, res) {
		res.redirect("http://google.com")
	}
};
