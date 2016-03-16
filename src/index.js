




class Turtle {

	constructor(x=0, y=0, angle=90) {
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.lineWidth = 1;
		this.strokeStyle = "#000";
	}

	forward(length) {
		console.log(this.x, this.y)
		this.x += length * Math.cos(Math.radians(this.angle));
		this.y += length * Math.sin(Math.radians(this.angle));
		console.log(this.x, this.y)
	}

	backward(length) {
		this.x -= length * Math.cos(Math.radians(this.angle));
		this.y -= length * Math.sin(Math.radians(this.angle));
	}

	left(angle) {
		console.log(this.angle)
		this.angle += angle;
		this.angle = this.angle.mod(360);
		console.log(this.angle)
	}

	right(angle) {
		console.log(this.angle)
		this.angle -= angle;
		this.angle = this.angle.mod(360);
		console.log(this.angle)
	}

	pensize(size) {
		this.lineWidth = size;
	}

	pencolor(color) {
		this.strokeStyle = color;
	}
}

// CTurtle
export class CTurtle extends Turtle {

	constructor(x=0, y=0, angle=90, mem=true, ctx) {
		super(x, y, angle);
		this.ctx = ctx;
		this.mem = mem;
		this.tape = [];
	}

	forward(length) {
		let [fromX, fromY] = [this.x, this.y];
		super.forward(length);
		let [toX, toY] = [this.x, this.y];
		let log = { command: "FORWARD",
					args: [[fromX, fromY], 
						   [toX, toY]
					]
				  };
		this.mem && this.tape.push(log); 
	}

	backward(length) {
		let [fromX, fromY] = [this.x, this.y];
		super.backward(length);
		let [toX, toY] = [this.x, this.y];
		let log = { command: "FORWARD",
					args: [[fromX, fromY], 
						   [toX, toY]
					]
				  };
		this.mem && this.tape.push(log); 
	}

	pensize(size) {
		super.pensize(size);
		this.mem && this.tape.push({ command: "PENSIZE", args: size }); 
	}

	pencolor(color) {
		super.pencolor(color)
		this.mem && this.tape.push({ command: "PENCOLOR", args: color }); 
	}

	render() {
		let tape = this.tape.slice();
		while (tape.length > 0) {
			let instr = tape.shift();
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

	animate() {
		let tape = this.tape.slice(); 
		let mem = this.mem;
		let ctx = this.ctx;
		window.requestAnimationFrame(innerAnimate);

		function innerAnimate() {
			if (mem && tape.length > 0) {
				let instr = tape.shift();
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
}


// Trignometry utilities
Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

