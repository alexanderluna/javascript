var myModule = require('./module.js')

var path = process.argv[2]
var extention = process.argv[3]

function callback (err, data) {
	if (err) return console.error(err)

	data.forEach(function(i){
		console.log(i)
	})
}

myModule(path, extention, callback)
