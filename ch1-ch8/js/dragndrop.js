window.onload = function () {
	var stage = new createjs.Stage( 'demoCanvas' );

	stage.mouseMoveOutside = true;

	var circle = new createjs.Shape();
   	circle.graphics.beginFill( 'red' ).drawCircle( 100, 100, 50 );
   	stage.addChild( circle );

   	circle.on( 'mousedown', function ( evt ) {
   		var offset = {
   			x: evt.target.x - evt.stageX,
   			y: evt.target.y - evt.stageY
   		};

   		circle.on( 'pressmove', function ( evt ) {
   			evt.target.x = evt.stageX + offset.x;
   			evt.target.y = evt.stageY + offset.y;
   			stage.update();
   		})
   	});

   	stage.update();
}