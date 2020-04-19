import React, { Component } from 'react';

class Spirals extends Component {
	updateDimensions() {
		var myCanvasResize = document.getElementById('animation-canvas');
		if (myCanvasResize) {
			myCanvasResize.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			myCanvasResize.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		}
	}

	componentWillMount(){
		this.updateDimensions();
	}

    componentDidMount() {
        var bg_number_of_curves = 50;
        var myCanvas = document.getElementById('animation-canvas');
        var sprialCanvas = myCanvas.getContext('2d');

        window.requestAnimationFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var curves_array = [];
        var curve = function(abc1x, abc1y, abc2x, abc2y, x, y, abc1xvx, abc1xvy, abc1yvx, abc1yvy, abc2xvx, abc2xvy, abc2yvx, abc2yvy) {
            this.abc1x = abc1x;
            this.abc1y = abc1y;
            this.abc2x = abc2x;
            this.abc2y = abc2y;
            this.x = x;
            this.y = y;

            this.abc1xvx = abc1xvx;
            this.abc1xvy = abc1xvy;
            this.abc1yvx = abc1yvx;
            this.abc1yvy = abc1yvy;

            this.abc2xvx = abc2xvx;
            this.abc2xvy = abc2xvy;
            this.abc2yvx = abc2yvx;
            this.abc2yvy = abc2yvy;
        };

        function bgCanvasResize() {
            myCanvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            myCanvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }

        function bgCanvasInit() {
            for (var i = 0; i < bg_number_of_curves; i++) {
                var abc1x = Math.random() * myCanvas.width;
                var abc1y = Math.random() * myCanvas.height;
                var abc2x = Math.random() * myCanvas.width;
                var abc2y = Math.random() * myCanvas.height;
                var x = 0;
                var y = 0;

                var abc1xvx = Math.random() * 2 - 1;
                var abc1xvy = Math.random() * 2 - 1;

                var abc1yvx = Math.random() * 2 - 1;
                var abc1yvy = Math.random() * 2 - 1;

                var abc2xvx = Math.random() * 2 - 1;
                var abc2xvy = Math.random() * 2 - 1;

                var abc2yvx = Math.random() * 2 - 1;
                var abc2yvy = Math.random() * 2 - 1;

                curves_array.push(
                    new curve(
                        abc1x, abc1y, abc2x, abc2y,
                        x, y,
                        abc1xvx, abc1xvy, abc1yvx, abc1yvy,
                        abc2xvx, abc2xvy, abc2yvx, abc2yvy
                    )
                );
            }
        }

        function bgCanvasDraw() {
            sprialCanvas.clearRect(0, 0, myCanvas.width, myCanvas.height);

            sprialCanvas.lineWidth = 1;
            sprialCanvas.strokeStyle = '#ffffff';

            for (var i = 0; i < curves_array.length; i++) {

                sprialCanvas.beginPath();
                sprialCanvas.moveTo(-100, myCanvas.height + 100);
                sprialCanvas.bezierCurveTo(
                    curves_array[i].abc1x, curves_array[i].abc1y,
                    curves_array[i].abc2x, curves_array[i].abc2y,
                    myCanvas.width + 100, curves_array[i].y - 100
                );
                sprialCanvas.stroke();

                if (curves_array[i].abc1x < 0 || curves_array[i].abc1x > myCanvas.width) {
                    curves_array[i].abc1x -= curves_array[i].abc1xvx;
                    curves_array[i].abc1xvx *= -1;
                }
                if (curves_array[i].abc1y < 0 || curves_array[i].abc1y > myCanvas.height) {
                    curves_array[i].abc1y -= curves_array[i].abc1yvy;
                    curves_array[i].abc1yvy *= -1;
                }

                if (curves_array[i].abc2x < 0 || curves_array[i].abc2x > myCanvas.width) {
                    curves_array[i].abc2x -= curves_array[i].abc2xvx;
                    curves_array[i].abc2xvx *= -1;
                }
                if (curves_array[i].abc2y < 0 || curves_array[i].abc2y > myCanvas.height) {
                    curves_array[i].abc2y -= curves_array[i].abc2yvy;
                    curves_array[i].abc2yvy *= -1;
                }
                curves_array[i].abc1y += curves_array[i].abc1yvy;
                curves_array[i].abc1x += curves_array[i].abc1xvx;
                curves_array[i].abc2x += curves_array[i].abc2xvx;
            }
            requestAnimationFrame(bgCanvasDraw);
        }

        function bgCanvas() {
            bgCanvasResize();
            bgCanvasInit();
            bgCanvasDraw();
        }
        bgCanvas();
    	window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return ( 
        	<canvas ref="canavs" className="Spirals" id="animation-canvas"></canvas>
        );
    }
}

export default Spirals;