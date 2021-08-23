class rope {
	constructor(xOffset, bodyB) {
		this.point = xOffset
		this.bob = bodyB
		this.options = {
			isStatic:true,
			bodyA:roof,
			pointA:{x:this.point, y:0},
			bodyB:this.bob,
			pointB:{x:0,y:0},
			length:450,
			stiffness:0.1
		}
	}

	atw() {
		this.con = Matter.Constraint.create(this.options)
		World.add(world,this.con);
	}

	display() {
		line(400+this.point, 100, this.bob.position.x, this.bob.position.y)
	}
}