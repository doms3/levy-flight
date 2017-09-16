var particle;
var initPos;
	
function setup() {
	createCanvas( 600, 600 );
	background( 51 );
	
	initPos = createVector( width/2, height/2 );
    
	particle = {
		pos: initPos.copy(),
        oldPos: initPos.copy(),
	};
}

function draw() {
	while( true ) {
		let speed = p5.Vector.random2D();
		let mag = getMag();
	
		let pos = particle.pos;
		
		speed.setMag( mag );
	
		particle.oldPos.set( pos );
		pos.add( speed );
		
		if( pos.x < width && pos.x > 0 && pos.y < height && pos.y > 0 )
			break;
		
		pos.sub( speed );
	}
	
	stroke( 255 );
	line( particle.pos.x, particle.pos.y, particle.oldPos.x, particle.oldPos.y );
	
	var resetSketch = function() {
		background( 51 );
		particle = {
			pos: initPos.copy(),
			oldPos: initPos.copy(),
		};
	}
	
	var button = select("#resetbutton");
	button.mouseClicked( resetSketch );
}



// A levy flight chooses magnitude of velocity via the probability distribution function: u^(-D), this is reflected below where y is the inverse function
function getMag() {
	var x = random( 1 );
	var D = 1.4;
	
	y = pow( 1 - x, - 1 / D );

	return y;
}