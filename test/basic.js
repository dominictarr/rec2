
var Rec2 = require('../')
var Vec2 = require('vec2')

var rec = new Rec2(1, 0, 10, 10)

console.log(Object.hasOwnProperty(r, 'x'), this.x, this.y)
console.log(rec)

function r () {
  return Math.random() * 1000
}

var l = 1000
while (l--) {
  var rec = new Rec2(r(), r(), r(), r())
  rec.size.set(r(), r())
  rec.set(r(), r())
  console.log(rec)
}
