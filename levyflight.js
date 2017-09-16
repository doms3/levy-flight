var particle;

function setup() {
	createCanvas( 600, 600 );
	background( 51 );
	
    var initPos = createVector( width/2, height/2 );
    
	particle = {
		pos: initPos,
        oldPos: initPos.copy(),
	};
}

function draw() {
	while( true ) {
		var speed = p5.Vector.random2D();
		var mag = getMag();
	
		var pos = particle.pos;
		
		speed.setMag( mag );
	
		particle.oldPos.set( particle.pos );
		particle.pos.add( speed );
		
		if( pos.x < width && pos.x > 0 && pos.y < height && pos.y > 0 )
			break;
		
		particle.pos.sub( speed );
	}
	
	stroke( 255 );
	line( particle.pos.x, particle.pos.y, particle.oldPos.x, particle.oldPos.y );
}

function getMag() {
	var x = random( 1 );
	var D = 1.4;
	
	y = pow( 1 - x, - 1 / D );

	return y;
}