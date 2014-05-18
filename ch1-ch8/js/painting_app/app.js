window.onload = function () {
	function init () {
		canvas = document.getElementById( 'canvas' );
		index = 0;
		colors = ["#828b20", "#b0ac31", "#cbc53d", "#fad779", "#f9e4ad",
       				  "#faf2db", "#563512", "#9b4a0b", "#d36600", "#fe8a00", "#f9a71f"];

       	stage = new createjs.Stage( canvas );
       	stage.autoClear = false;
       	stage.enableDOMEvents( true );

       	createjs.Touch.enable( stage );
       	createjs.Ticker.setFPS( 24 );
       	drawingCanvas = new createjs.Shape();

       	stage.addEventListener( 'stagemousedown', handleMouseDown );
       	stage.addEventListener( 'stagemouseup', handleMouseUp );

       	stage.addChild( drawingCanvas );
       	stage.update();
	}

	function handleMouseDown ( event ) {
		color = colors[ ( index++ ) % colors.length ];
		stroke = Math.round( Math.random() * 30 + 10 );
		oldPt = new createjs.Point( stage.mouseX, stage.mouseY );
		oldMidPt = oldPt;
		stage.addEventListener( 'stagemousemove', handleMouseMove );
	}

	function handleMouseMove ( event ) {
		var midPt = new createjs.Point( oldPt.x + stage.mouseX>> 1, oldPt.y + stage.mouseY>> 1 );

		drawingCanvas.graphics.clear()
							  .setStrokeStyle( stroke, 'round', 'round' )
							  .beginStroke( color )
							  .moveTo( midPt.x, midPt.y )
							  .curveTo( oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y );

		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;

		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;

		stage.update();
	}

	function handleMouseUp ( event ) {
		stage.removeEventListener( 'stagemousemove', handleMouseMove );
	}

	init();
}