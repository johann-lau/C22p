class bob {
	constructor(posX) {
		this.posX = posX
	}

	atw() {
		this.bob = Bodies.circle(this.posX,550,15,{restitution:0.9, friction:0, frictionAir:0});
		World.add(world,this.bob);
	}

	display() {
		ellipse(this.bob.position.x, this.bob.position.y, 15)
	}
}

class bobx {
	constructor(posX) {
		this.posX = posX
	}

	atw() {
		this.bob = Bodies.circle(this.posX,550,15,{restitution:0, friction:0, frictionAir:0});
		World.add(world,this.bob);
	}

	display() {
		ellipse(this.bob.position.x, this.bob.position.y, 15)
	}
}