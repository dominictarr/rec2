
var Rec2 = require('../')
var Vec2 = require('vec2')

var r = new Rec2(1, 0, 10, 10)

console.log(Object.hasOwnProperty(r, 'x'), this.x, this.y)
console.log(r)
