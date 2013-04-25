module.exports = function(game, opts) {
  if(!opts.rightBnd) opts.rightBnd = opts.topBnd
  if(!opts.bottomBnd) opts.bottomBnd = opts.topBnd * -1
  if(!opts.leftBnd) opts.leftBnd = opts.rightBnd * -1
  if(!opts.rightHref) opts.rightHref = opts.topHref
  if(!opts.bottomHref) opts.bottomHref = opts.topHref
  if(!opts.leftHref) opts.leftHref = opts.rightHref

  game.voxelRegion.on('change', function(pos) {
    if(pos[2] > opts.topBnd) window.location = opts.topHref
    if(pos[2] < opts.bottomBnd) window.location = opts.bottomHref
    if(pos[0] > opts.rightBnd) window.location = opts.rightHref
    if(pos[0] < opts.leftBnd) window.location = opts.leftHref
    console.log(pos)
  })
}
