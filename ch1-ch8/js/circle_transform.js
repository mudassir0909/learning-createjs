window.onload = function () {
	var angle = 0;
	window.ball;
	var canvas = document.getElementById( 'canvas' );
	var stage = new createjs.Stage( canvas );

	var ball = new createjs.Shape();
	ball.graphics.beginFill( '#FF0000' ).drawCircle( 0, 0, 50 );

	ball.x = 200;
	ball.y = 200;

	stage.addChild( ball );

	function tick ( evt ) {
		angle += 0.025;
		var scale = Math.cos( angle );

		ball.setTransform( ball.x, ball.y, scale, scale );
		stage.update( evt );
	}

	createjs.Ticker.addEventListener( 'tick', tick );
}