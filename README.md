# rec2

Rectangle from Vec2.

## example

``` js

var Rec2 = require('rec2')
var r = new Rec2(0, 0, 100, 100) //x, y, width, height

//r is a subclass of Vec2, but with
//a .size property (a Vec2)
//and a bounds property a vec2.
//.bounds is the absolute position of the other corner.
```

## API

### new Rec2(x, y, w, h)

create a `Rec2` instance with given dimensions.
all dimensions default to 0.

If size must >= 0 or an error will be thrown.

### Rec2#contains(point)

return true if the given point is within the rectangle.

### Rec2#collides(rec2)

returns true if the given rectangle intersects with this rectangle.

### Rec2#area()

returns the area of the rectangle.

## License

MIT
