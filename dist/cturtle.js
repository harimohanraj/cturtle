(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cturtle"] = factory();
	else
		root["cturtle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Turtle = function () {
		function Turtle() {
			var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
			var angle = arguments.length <= 2 || arguments[2] === undefined ? 90 : arguments[2];
	
			_classCallCheck(this, Turtle);
	
			this.x = x;
			this.y = y;
			this.angle = angle;
			this.lineWidth = 1;
			this.strokeStyle = "#000";
		}
	
		_createClass(Turtle, [{
			key: "forward",
			value: function forward(length) {
				console.log(this.x, this.y);
				this.x += length * Math.cos(Math.radians(this.angle));
				this.y += length * Math.sin(Math.radians(this.angle));
				console.log(this.x, this.y);
			}
		}, {
			key: "backward",
			value: function backward(length) {
				this.x -= length * Math.cos(Math.radians(this.angle));
				this.y -= length * Math.sin(Math.radians(this.angle));
			}
		}, {
			key: "left",
			value: function left(angle) {
				console.log(this.angle);
				this.angle += angle;
				this.angle = this.angle.mod(360);
				console.log(this.angle);
			}
		}, {
			key: "right",
			value: function right(angle) {
				console.log(this.angle);
				this.angle -= angle;
				this.angle = this.angle.mod(360);
				console.log(this.angle);
			}
		}, {
			key: "pensize",
			value: function pensize(size) {
				this.lineWidth = size;
			}
		}, {
			key: "pencolor",
			value: function pencolor(color) {
				this.strokeStyle = color;
			}
		}]);
	
		return Turtle;
	}();
	
	// CTurtle
	
	
	var CTurtle = exports.CTurtle = function (_Turtle) {
		_inherits(CTurtle, _Turtle);
	
		function CTurtle() {
			var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
			var angle = arguments.length <= 2 || arguments[2] === undefined ? 90 : arguments[2];
			var mem = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
			var ctx = arguments[4];
	
			_classCallCheck(this, CTurtle);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CTurtle).call(this, x, y, angle));
	
			_this.ctx = ctx;
			_this.mem = mem;
			_this.tape = [];
			return _this;
		}
	
		_createClass(CTurtle, [{
			key: "forward",
			value: function forward(length) {
				var fromX = this.x;
				var fromY = this.y;
	
				_get(Object.getPrototypeOf(CTurtle.prototype), "forward", this).call(this, length);
				var toX = this.x;
				var toY = this.y;
	
				var log = { command: "FORWARD",
					args: [[fromX, fromY], [toX, toY]]
				};
				this.mem && this.tape.push(log);
			}
		}, {
			key: "backward",
			value: function backward(length) {
				var fromX = this.x;
				var fromY = this.y;
	
				_get(Object.getPrototypeOf(CTurtle.prototype), "backward", this).call(this, length);
				var toX = this.x;
				var toY = this.y;
	
				var log = { command: "FORWARD",
					args: [[fromX, fromY], [toX, toY]]
				};
				this.mem && this.tape.push(log);
			}
		}, {
			key: "pensize",
			value: function pensize(size) {
				_get(Object.getPrototypeOf(CTurtle.prototype), "pensize", this).call(this, size);
				this.mem && this.tape.push({ command: "PENSIZE", args: size });
			}
		}, {
			key: "pencolor",
			value: function pencolor(color) {
				_get(Object.getPrototypeOf(CTurtle.prototype), "pencolor", this).call(this, color);
				this.mem && this.tape.push({ command: "PENCOLOR", args: color });
			}
		}, {
			key: "render",
			value: function render() {
				var tape = this.tape.slice();
				while (tape.length > 0) {
					var instr = tape.shift();
					if (instr.command == "FORWARD" || instr.command == "BACKWARD") {
						this.ctx.beginPath();
						this.ctx.moveTo(instr.args[0][0], instr.args[0][1]);
						this.ctx.lineTo(instr.args[1][0], instr.args[1][1]);
						this.ctx.stroke();
						this.ctx.closePath();
					} else if (instr.command == "PENSIZE") {
						this.ctx.strokeWidth = instr.args;
					} else if (instr.command == "PENCOLOR") {
						this.ctx.strokeStyle = instr.args;
					}
				}
			}
		}, {
			key: "animate",
			value: function animate() {
				var tape = this.tape.slice();
				var mem = this.mem;
				var ctx = this.ctx;
				window.requestAnimationFrame(innerAnimate);
	
				function innerAnimate() {
					if (mem && tape.length > 0) {
						var instr = tape.shift();
						if (instr.command == "FORWARD" || instr.command == "BACKWARD") {
							ctx.beginPath();
							ctx.moveTo(instr.args[0][0], instr.args[0][1]);
							ctx.lineTo(instr.args[1][0], instr.args[1][1]);
							ctx.stroke();
							ctx.closePath();
						} else if (instr.command == "PENSIZE") {
							ctx.strokeWidth = instr.args;
						} else if (instr.command == "PENCOLOR") {
							ctx.strokeStyle = instr.args;
						}
						window.requestAnimationFrame(innerAnimate);
					}
				}
			}
		}]);
	
		return CTurtle;
	}(Turtle);
	
	// Trignometry utilities
	
	
	Number.prototype.mod = function (n) {
		return (this % n + n) % n;
	};
	
	Math.radians = function (degrees) {
		return degrees * Math.PI / 180;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cturtle.js.map