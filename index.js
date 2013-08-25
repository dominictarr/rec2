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
  this.set(0, 0)
  var self = this
  var size = this.size = new Vec2(w, h)
  var bound = this.bound = new Vec2(x + w)
  var UPDATE = true
  size.change(function (x, y) {
    if(!UPDATE) return
    if(x < 0 || y < 0)
      throw new Error('size must be positive')
    UPDATE = false
    bound.set(self.x + size.x, self.y + size.y)
    UPDATE = true
  })
  bound.change(function (x, y) {
    if(!UPDATE) return
    UPDATE = false
    size.set(bound.x - self.x, bound.y - self.y)
    UPDATE = true
  })
  this.change(function (x, y) {
    bound.set(self.x + self.size.x, self.y + self.size.y)
  })
}

var R = Rec2.prototype

R.contains = function (point) {
  return (
    this.x <= point.x && point.x <= this.bound.x 
  &&
    this.y <= point.y && point.y <= this.bound.y   
  )
}

R.collides = function (box) {
  return (
      (this.x <= box.x       && box.x       <= this.bound.x
    || this.x <= box.bound.x && box.bound.x <= this.bound.x)
    &&(this.y <= box.y       &&       box.y <= this.bound.y
    || this.y <= box.bound.y && box.bound.y <= this.bound.y)
  )
}

R.area = function () {
  return this.size.x * this.size.y
}
