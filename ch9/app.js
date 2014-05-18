window.onload = function () {
	var canvas, stage, drawingCanvas, oldPt, oldMidPt, bgLayer, brushColor,
		brushSize, bgColor, brushStyle, mouseMoveFn;

	function init () {
		canvas = document.getElementById( 'pStage' );

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight - 73;

		// set default colors
		brushColor = '#004358';
		bgColor = '#FCFFF5';
		brushSize = 12;
		brushStyle = 'round';

		for ( var i = document.getElementsByClassName( 'sphexbrushColor' ).length; i > 0; i-- ) {
			var item = document.getElementsByClassName( 'sphexbrushColor' )[ i - 1 ];

			item.onclick = function () {
				brushColor = document.querySelector( '#colorPicker.fill' ).style.backgroundColor = this.style.backgroundColor;
			}
		}

		stage = new createjs.Stage( canvas );
		stage.autoClear = false;

		createjs.Touch.enable( stage );

		stage.on( 'stagemousedown', mouseDownCallback );
		stage.on( 'stagemouseup', mouseUpCallback );

		bgLayer = new createjs.Shape();
		bgLayer.graphics.beginFill( bgColor ).drawRect( 0, 0, canvas.windth, canvas.height );
		stage.addChild( bgLayer );

		drawingCanvas = new createjs.Shape();
		stage.addChild( drawingCanvas );
		stage.update();
	}

	function mouseDownCallback () {
		oldMidPt = oldPt = new createjs.Point( stage.mouseX, stage.mouseY );
		mouseMoveFn = stage.on( 'stagemousemove', mouseMoveCallback );
	}

	function mouseMoveCallback () {
		var midPt = new createjs.Point( Math.floor( ( oldPt.x + stage.mouseX ) / 2 ),
										Math.floor( ( oldPt.y + stage.mouseY ) / 2 ) );

		drawingCanvas.graphics.setStrokeStyle( brushSize, brushStyle )
							  .beginStroke( brushColor )
							  .moveTo( midPt.x, midPt.y )
							  .curveTo( oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y );

		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;

		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;

		stage.update();
	}

	function mouseUpCallback () {
		stage.off( 'stagemousemove', mouseMoveFn );
	}

	function exportToImage () {
		var datetime = new Date();

		obj.href = canvas.toDataURL();
		obj.download = "paint_" + dateTime.getHours() + "-" +
					   dateTime.getMinutes() + "-" + dateTime.getSeconds();

	}

	init();
}