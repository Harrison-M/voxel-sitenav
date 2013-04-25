var createGame = require('voxel-engine')
var player = require('voxel-player')
var texturePath = require('painterly-textures')(__dirname)
var redirect = require('./')

var game = createGame({
  texturePath: texturePath,
  generate: function(x, y, z) {
    if(y === 0) {
      if(Math.abs(x) === 10 || Math.abs(z) === 10)
        return 2
      return 1
    }
  }
})
var container = document.body
game.appendTo(container)
redirect(game, {
  topBnd: 10,
  topHref: 'http://voxeljs.com'
})

//Here's what you're wanting
var avatar = player(game)()
avatar.possess()
avatar.yaw.position.set(0,5,5)
