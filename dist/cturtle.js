!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.cturtle=e():t.cturtle=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,e){"use strict";function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function c(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:c(i,e,o)}if("value"in n)return n.value;var r=n.get;if(void 0!==r)return r.call(o)},a=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),s=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],o=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?90:arguments[2];i(this,t),this.x=e,this.y=o,this.angle=n,this.lineWidth=1,this.strokeStyle="#000"}return a(t,[{key:"forward",value:function(t){console.log(this.x,this.y),this.x+=t*Math.cos(Math.radians(this.angle)),this.y+=t*Math.sin(Math.radians(this.angle)),console.log(this.x,this.y)}},{key:"backward",value:function(t){this.x-=t*Math.cos(Math.radians(this.angle)),this.y-=t*Math.sin(Math.radians(this.angle))}},{key:"left",value:function(t){console.log(this.angle),this.angle+=t,this.angle=this.angle.mod(360),console.log(this.angle)}},{key:"right",value:function(t){console.log(this.angle),this.angle-=t,this.angle=this.angle.mod(360),console.log(this.angle)}},{key:"pensize",value:function(t){this.lineWidth=t}},{key:"pencolor",value:function(t){this.strokeStyle=t}}]),t}();e.CTurtle=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?90:arguments[2],a=arguments.length<=3||void 0===arguments[3]?!0:arguments[3],s=arguments[4];i(this,e);var c=o(this,Object.getPrototypeOf(e).call(this,t,n,r));return c.ctx=s,c.mem=a,c.tape=[],c}return n(e,t),a(e,[{key:"forward",value:function(t){var o=this.x,n=this.y;r(Object.getPrototypeOf(e.prototype),"forward",this).call(this,t);var i=this.x,a=this.y,s={command:"FORWARD",args:[[o,n],[i,a]]};this.mem&&this.tape.push(s)}},{key:"backward",value:function(t){var o=this.x,n=this.y;r(Object.getPrototypeOf(e.prototype),"backward",this).call(this,t);var i=this.x,a=this.y,s={command:"FORWARD",args:[[o,n],[i,a]]};this.mem&&this.tape.push(s)}},{key:"pensize",value:function(t){r(Object.getPrototypeOf(e.prototype),"pensize",this).call(this,t),this.mem&&this.tape.push({command:"PENSIZE",args:t})}},{key:"pencolor",value:function(t){r(Object.getPrototypeOf(e.prototype),"pencolor",this).call(this,t),this.mem&&this.tape.push({command:"PENCOLOR",args:t})}},{key:"render",value:function(){for(var t=this.tape.slice();t.length>0;){var e=t.shift();"FORWARD"==e.command||"BACKWARD"==e.command?(this.ctx.beginPath(),this.ctx.moveTo(e.args[0][0],e.args[0][1]),this.ctx.lineTo(e.args[1][0],e.args[1][1]),this.ctx.stroke(),this.ctx.closePath()):"PENSIZE"==e.command?this.ctx.strokeWidth=e.args:"PENCOLOR"==e.command&&(this.ctx.strokeStyle=e.args)}}},{key:"animate",value:function(){function t(){if(o&&e.length>0){var i=e.shift();"FORWARD"==i.command||"BACKWARD"==i.command?(n.beginPath(),n.moveTo(i.args[0][0],i.args[0][1]),n.lineTo(i.args[1][0],i.args[1][1]),n.stroke(),n.closePath()):"PENSIZE"==i.command?n.strokeWidth=i.args:"PENCOLOR"==i.command&&(n.strokeStyle=i.args),window.requestAnimationFrame(t)}}var e=this.tape.slice(),o=this.mem,n=this.ctx;window.requestAnimationFrame(t)}}]),e}(s);Number.prototype.mod=function(t){return(this%t+t)%t},Math.radians=function(t){return t*Math.PI/180}}])});
//# sourceMappingURL=cturtle.js.map