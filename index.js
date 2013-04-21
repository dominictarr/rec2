var Vec2 = require('vec2')

var inherits = require('util').inherits

inherits(Rec2, Vec2)

module.exports = Rec2

function Rec2 (x, y, w, h) {
  if(!(this instanceof Rec2)) return new Rec2(x, y, w, h)
  x = x || 0
  y = y || 0
  w = w || 0
  h = h || 0
  console.log(x, y, w, h)
  this.set(0, 0)
  var self = this
  var size = this.size = new Vec2(w, h)
  var bound = this.bound = new Vec2(x + w)
  size.change(function (x, y) {
    bound.set(self.x + size.x, self.y + size.y)
  })
  bound.change(function (x, y) {
    size.set(bound.x - self.x, bound.y - self.y)
  })

}

var R = Rec2.prototype

R.contained = function (point) {
  return (
    this.x <= point.x && point.x <= this.bound.x 
  &&
    this.y <= point.y && point.y <= this.bound.y   
  )
}

R.collide = function (box) {
  return (
      (this.x <= box.x       && box.x       <= this.bound.x
    || this.x <= box.bound.x && box.bound.x <= this.bound.x)
    &&(this.y <= box.y       &&       box.y <= this.bound.y
    || this.y <= box.bound.y && box.bound.y <= this.bound.y)
  )
}
