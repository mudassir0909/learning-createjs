window.onload = function () {
	var stage = new createjs.Stage( 'demoCanvas' );
	var circle = new createjs.Shape();
	circle.graphics.beginFill( 'red' ).drawCircle( 0, 0, 50 );
	circle.x = 100;
	circle.y = 100;

	circle.addEventListener( 'click', function ( event ){
		event.target.x += 10;
		stage.update();
	})

	circle.on( 'mousedown', function ( mousedownEvent ) {
		console.log( 'pressed' );
		circle.on( 'pressmove', function ( moveEvent ) {
			console.log( 'mouse moved: ' + moveEvent.stageX + ', ' + moveEvent.stageY );
		})
	})

	stage.addChild( circle );
	stage.update();
}