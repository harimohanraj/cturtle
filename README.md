# cturtle

A tiny, simple version of turtle graphics for the web, written in ES6 and using Canvas.

## API 

```javascript
// create a canvas context for the turtle
var ctx = document.getElementById("example").getContext("2d");

/* create new turtle object
 * @param x: x-coordinate on canvas, where turtle starts
 * @param y: y-coordinate on canvas, where turtle starts
 * @param angle: orientation, in degrees, of turtle
 * @param memory: should turtle remember previous moves? 
 * @param context: canvas context on which turtle draws
 */
var t1 = new cturtle.CTurtle(5, 5, 90, true, ctx);

// instruct the little guy!
t1.forward(100);
t1.right(20);
t1.forward(13);
t1.pencolor("green");
t1.forward(20);
t1.left(30);
t1.forward(12);

// render turtle as static image
t1.render();

// ... or render turtle as animated image
t1.animate();
```

<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322972/9e553260-910b-11e5-8de9-a5bf00c352ef.png' height='59px'/></a>
