window.onload = function () {
	var canvas = document.getElementById( 'canvas' );
	var stage = new createjs.Stage( canvas );

	var ball = new createjs.Shape();
	ball.graphics.beginFill( '#FF0000' ).drawCircle( 0, 0, 50 );

	ball.x = 200;
	ball.y = -50;

	var tween = createjs.Tween.get( ball ).to({
		y: 300
	}, 1500, createjs.Ease.bounceOut );

	stage.addChild( ball );
	createjs.Ticker.addEventListener( 'tick', stage );
}