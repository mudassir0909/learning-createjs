window.onload = function () {
	var stage = new createjs.Stage( document.getElementById( 'canvas' ) );
	var ss = new createjs.SpriteSheet({
		animations: {
			'run': [ 0, 9 ]
		},
		'images': ['images/MonsterARun.png'],
		'frames': {
			'height': 64,
			'width': 64,
			'regX': 0,
			'regY': 0,
			'count': 10
		}
	});

	var grant = new createjs.Sprite( ss, 'run' );

	stage.addChild( grant );
	createjs.Ticker.setFPS( 10 );
	createjs.Ticker.addEventListener( 'tick', stage );
}