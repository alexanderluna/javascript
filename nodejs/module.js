var fs = require('fs')
var ext = require('path')

module.exports = function (path, extention, callback) {
  fs.readdir(path, function(error, list) {

    if (error) return callback(error)

    var item = list.filter(function(i) {
      return ext.extname(i) === '.' + extention
    })

    return callback(null, item)
  })
}
