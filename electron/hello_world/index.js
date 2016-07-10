// Cat picture setup
var picture = require('cat-picture');
var src = picture.src
picture.remove()

// picture processing
var image = require('lightning-image-poly');
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

// saving as pdf
var remote = require('electron').remote
var fs = require('fs')

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function(err, data){
    fs.writeFile('annotation.pdf', data, function(err){
      if(err) alert('Error generating your pdf file $(err.message)')
      else
        alert('Filed saved')
    })
  })
}

window.addEventListener('keydown', function(e){
  if(e.keyCode == 80) save()
})
