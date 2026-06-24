(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.frame1 = function() {
	this.initialize(img.frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,136);


(lib.frame2 = function() {
	this.initialize(img.frame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,104);


(lib.frame3 = function() {
	this.initialize(img.frame3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,106);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.text_bg = function() {
	this.initialize(img.text_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,144);


(lib.water_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.water();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,1024,144);


(lib.t3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBIQgGgGAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAFgJAAQgIAAgGgFgAgPAXIgEhjIAmAAIgEBjg");
	this.shape.setTransform(344.275,-86.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgHgLQgJgJAAgPIAmAAQABAIAFAEQAFAEAHABQAIAAAFgEQAEgEAAgGQAAgGgDgDIgJgGIgPgFQgOgFgJgEQgJgEgGgIQgIgJAAgNQABgVAPgMQAOgMAYAAQAYAAAOAMQAQAMAAAVIgmAAQAAgIgGgDQgEgFgHAAQgGAAgEAEQgEADAAAHQAAAHAGAEQAHAEANAFIAYAJQAJADAGAIQAHAJgBANQABAMgHALQgGALgMAFQgNAHgQAAQgPgBgNgFg");
	this.shape_1.setTransform(333.7,-86.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BKIAAiTIA5AAQASAAAMAGQAMAHAGAKQAGALAAAOQAAANgGAKQgGAKgMAGQgMAHgSAAIgVAAIAAA1gAgTgHIATAAQAKAAAFgFQAFgEAAgJQAAgJgFgFQgFgFgKAAIgTAAg");
	this.shape_2.setTransform(321.075,-86.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwBKIAAhYIghBYIgcAAIgihYIAABYIgkAAIAAiTIArAAIAoBlIAphlIArAAIAACTg");
	this.shape_3.setTransform(304.55,-86.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBDQgOgGgIgOQgIgOAAgUIAAhXIAkAAIAABXQAAAOAHAHQAGAHAMAAQAMAAAHgHQAHgHAAgOIAAhXIAkAAIAABXQAAAUgJAOQgIANgOAHQgPAIgQAAQgRAAgOgIg");
	this.shape_4.setTransform(287.525,-86.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BKIAAiTIA5AAQASAAAMAGQAMAHAGAKQAGALAAAOQAAANgGAKQgGAKgMAGQgMAHgSAAIgVAAIAAA1gAgTgHIATAAQAKAAAFgFQAFgEAAgJQAAgJgFgFQgFgFgKAAIgTAAg");
	this.shape_5.setTransform(273.925,-86.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BKIAAiTIA5AAQASAAAMAGQAMAHAGAKQAGALAAAOQAAANgGAKQgGAKgMAGQgMAHgSAAIgVAAIAAA1gAgTgHIATAAQAKAAAFgFQAFgEAAgJQAAgJgFgFQgFgFgKAAIgTAAg");
	this.shape_6.setTransform(256.375,-86.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBKIAAhYIgiBYIgbAAIgihYIAABYIgkAAIAAiTIArAAIApBlIAohlIArAAIAACTg");
	this.shape_7.setTransform(239.85,-86.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBDQgOgGgIgOQgIgOAAgUIAAhXIAkAAIAABXQAAAOAHAHQAGAHAMAAQAMAAAHgHQAHgHAAgOIAAhXIAkAAIAABXQAAAUgJAOQgIANgOAHQgPAIgQAAQgRAAgOgIg");
	this.shape_8.setTransform(222.825,-86.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgHgLQgJgJABgPIAlAAQABAIAFAEQAFAEAHABQAIAAAFgEQAEgEAAgGQAAgGgDgDIgJgGIgPgFQgOgFgJgEQgJgEgGgIQgIgJABgNQAAgVAPgMQAOgMAZAAQAXAAAOAMQAPAMABAVIgmAAQAAgIgGgDQgEgFgHAAQgGAAgEAEQgEADAAAHQAAAHAHAEQAGAEANAFIAYAJQAJADAGAIQAHAJgBANQABAMgHALQgGALgMAFQgMAHgRAAQgPgBgNgFg");
	this.shape_9.setTransform(208.95,-86.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAkAAIAAB3IAtAAIAAAcg");
	this.shape_10.setTransform(388.35,-106.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAkAAIAAB3IAtAAIAAAcg");
	this.shape_11.setTransform(378.35,-106.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBKIgJgaIg2AAIgJAaIglAAIA1iTIApAAIA1CTgAASAUIgSg1IgRA1IAjAAg");
	this.shape_12.setTransform(365.2,-106.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBKIAAh2IgnAAIAAgdIBxAAIAAAdIgnAAIAAB2g");
	this.shape_13.setTransform(351.25,-106.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgIgKQgHgKAAgPIAmAAQABAIAEAEQAFAFAHAAQAIgBAEgDQAFgEAAgGQAAgGgEgDIgJgGIgOgGQgOgDgJgFQgJgEgHgIQgGgJAAgOQAAgUAOgMQAPgMAZAAQAXAAAPAMQAPAMABAUIgnAAQgBgGgEgFQgFgEgHAAQgGAAgEAEQgEADAAAHQAAAHAHAEQAGAEAOAEIAWAJQAJAEAHAJQAGAIABANQgBAMgGALQgGALgNAFQgLAHgRgBQgQAAgMgFg");
	this.shape_14.setTransform(338.6,-106.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBKIg7haIAABaIgkAAIAAiTIAkAAIA7BbIAAhbIAkAAIAACTg");
	this.shape_15.setTransform(324.3,-106.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRBKIAAiTIAjAAIAACTg");
	this.shape_16.setTransform(313.35,-106.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1BHQgNgGgGgKQgHgKAAgOQAAgNAHgMQAIgKAPgIQgFgGgDgGQgCgHAAgHQAAgLAFgIQAFgJALgEQAKgGAPAAQANABALAFQAJAFAFAJQAGAJgBAKIggAAQAAgFgDgDQgEgEgEAAQgFAAgEAEQgEADAAAEQABAFADAEIAJAMIAjAiIABgDIABgDIAIgNIAkAAIgKARQgGANgIALIAkAjIgpAAIgPgNQgTAPgcAAQgRAAgNgFgAgtAdQAAAHAHAGQAGAFALAAQAOABAKgJIgggfQgQAHAAAOg");
	this.shape_17.setTransform(297.8,-106.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAkAAIAAB3IAuAAIAAAcg");
	this.shape_18.setTransform(280.05,-106.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBKIAAiTIAkAAIAAB3IAvAAIAAAcg");
	this.shape_19.setTransform(270.05,-106.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsBKIAAiTIBZAAIAAAdIg1AAIAAAeIAvAAIAAAbIgvAAIAAAgIA1AAIAAAdg");
	this.shape_20.setTransform(259.075,-106.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgIgKQgHgKAAgPIAmAAQABAIAEAEQAFAFAHAAQAIgBAEgDQAFgEAAgGQAAgGgEgDIgJgGIgOgGQgOgDgJgFQgJgEgHgIQgGgJAAgOQAAgUAOgMQAPgMAZAAQAXAAAPAMQAPAMABAUIgnAAQgBgGgEgFQgFgEgHAAQgGAAgEAEQgEADAAAHQAAAHAHAEQAGAEAOAEIAWAJQAJAEAHAJQAGAIABANQgBAMgGALQgGALgNAFQgLAHgRgBQgQAAgMgFg");
	this.shape_21.setTransform(246.8,-106.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsBKIAAiTIBZAAIAAAdIg1AAIAAAeIAvAAIAAAbIgvAAIAAAgIA1AAIAAAdg");
	this.shape_22.setTransform(230.375,-106.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYBKIgYhgIgXBgIgsAAIgliTIAmAAIAVBrIAahrIAnAAIAZBrIAWhrIAnAAIgnCTg");
	this.shape_23.setTransform(213.55,-106.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.5,-123.5,234.60000000000002,53.8);


(lib.t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBIQgGgGAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAFgJAAQgIAAgGgFgAgPAXIgEhjIAmAAIgEBjg");
	this.shape.setTransform(442.375,-51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBDQgOgGgIgOQgIgNAAgVIAAhXIAkAAIAABXQAAAOAHAHQAGAHAMAAQAMAAAHgHQAHgHAAgOIAAhXIAkAAIAABXQAAAVgJANQgIAOgOAGQgPAIgQAAQgRAAgOgIg");
	this.shape_1.setTransform(430.875,-50.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBCQgRgKgKgRQgLgRAAgWQAAgVALgRQAKgRARgKQARgKAUAAQAVAAARAKQARAKAKARQALARgBAVQABAWgLARQgKARgRAKQgRAKgVAAQgUAAgRgKgAgbgfQgLAMAAATQAAAUALALQAKALARAAQASAAALgLQAKgMAAgTQAAgSgKgNQgLgLgSAAQgRAAgKALg");
	this.shape_2.setTransform(415.2,-50.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBKIAAgxIgzhiIAoAAIAcA+IAdg+IAoAAIgzBiIAAAxg");
	this.shape_3.setTransform(399.95,-50.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBKIAAiTIBZAAIAAAdIg1AAIAAAeIAvAAIAAAbIgvAAIAAAgIA1AAIAAAdg");
	this.shape_4.setTransform(382.925,-50.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BKIAAiTIBCAAQAWAAANALQANAKAAASQAAANgHAIQgHAJgMADQANACAIAKQAIAKAAANQAAASgNALQgNALgXAAgAgWAtIAaAAQAJAAAFgEQAFgEAAgIQAAgIgGgEQgFgFgJAAIgZAAgAgWgNIAXAAQAJAAAEgEQAFgEAAgHQAAgIgFgEQgEgEgJAAIgXAAg");
	this.shape_5.setTransform(370.475,-50.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgHgKQgJgLABgOIAlAAQACAIAEAEQAFAFAHAAQAIAAAFgEQAEgDAAgHQAAgGgDgDIgJgGIgPgFQgOgEgJgFQgJgEgGgIQgIgJABgOQgBgUAQgMQAPgMAYAAQAXAAAOAMQAPAMACAUIgnAAQgBgHgFgDQgEgFgHAAQgGAAgEAEQgEADAAAHQAAAHAHAEQAGAEANAEIAYAJQAIAEAHAIQAGAJAAANQAAAMgGALQgGALgNAFQgLAHgRAAQgQgBgMgFg");
	this.shape_6.setTransform(352.4,-50.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBKIAAiTIAjAAIAACTg");
	this.shape_7.setTransform(342.9,-50.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBKIAAg9Ig3AAIAAA9IgkAAIAAiTIAkAAIAAA6IA3AAIAAg6IAkAAIAACTg");
	this.shape_8.setTransform(332.125,-50.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBKIAAh2IgnAAIAAgdIBxAAIAAAdIgnAAIAAB2g");
	this.shape_9.setTransform(318.25,-50.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBKIAAh2IgnAAIAAgdIBxAAIAAAdIgnAAIAAB2g");
	this.shape_10.setTransform(301.4,-50.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsBKIAAiTIBZAAIAAAdIg1AAIAAAeIAvAAIAAAbIgvAAIAAAgIA1AAIAAAdg");
	this.shape_11.setTransform(289.675,-50.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBKIAAiTIAkAAIAAB3IAuAAIAAAcg");
	this.shape_12.setTransform(279.3,-50.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBKIAAh2IgnAAIAAgdIBxAAIAAAdIgnAAIAAB2g");
	this.shape_13.setTransform(263.2,-50.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAcIALg3IAkAAIgYA3g");
	this.shape_14.setTransform(253.875,-55.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBKIg7haIAABaIgkAAIAAiTIAkAAIA7BbIAAhbIAkAAIAACTg");
	this.shape_15.setTransform(242.6,-50.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglBCQgRgKgLgRQgJgRgBgWQABgVAJgRQALgRARgKQASgKATAAQAVAAASAKQAQAKALARQAKARAAAVQAAAWgKARQgLARgQAKQgSAKgVAAQgTAAgSgKgAgcgfQgKAMAAATQAAAUAKALQAMALAQAAQASAAALgLQAKgMAAgTQAAgSgKgNQgLgLgSAAQgQAAgMALg");
	this.shape_16.setTransform(226.45,-50.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhBBKIAAiTIA3AAQAWAAASAKQARAJAKAQQAJARAAAVQAAAWgJAQQgKARgRAKQgSAJgWAAgAgdArIARAAQATAAALgLQAMgMAAgUQAAgTgMgMQgLgLgTAAIgRAAg");
	this.shape_17.setTransform(210.875,-50.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201,-67.5,250.39999999999998,33.4);


(lib.t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#780031").s().p("AgrBvQgJgIAAgNQAAgMAJgJQAJgJAPAAQAOAAAIAJQAJAJAAAMQAAANgJAIQgIAJgOAAQgPAAgJgJgAgsAlIgCg7IAUAAQAYAAAMgGQANgGAAgQQAAgLgGgHQgGgGgLAAQgKAAgHAGQgGAHAAALIg0AAQAAgTAIgQQAJgQASgJQARgJAYAAQAiAAAVASQAUASAAAhQAAAegTARQgUAPghABIgBAYg");
	this.shape.setTransform(150.9486,-24.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgaBwIAAhKIhOiVIA+AAIArBeIArheIA9AAIhOCVIAABKg");
	this.shape_1.setTransform(131.725,-23.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AhkBwIAAjfIBUAAQAjAAAaAOQAbAOAOAZQAPAaAAAgQAAAhgPAaQgOAZgbAOQgbAOgiAAgAgtBBIAaAAQAeAAARgRQARgRAAgfQAAgegRgRQgRgSgeAAIgaAAg");
	this.shape_2.setTransform(109.825,-23.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AA3BwIgNgnIhTAAIgNAnIg6AAIBSjfIA+AAIBRDfgAAbAeIgbhRIgbBRIA2AAg");
	this.shape_3.setTransform(86,-23.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AhEBwIAAjfICJAAIAAArIhSAAIAAAuIBIAAIAAApIhIAAIAAAxIBSAAIAAAsg");
	this.shape_4.setTransform(65.775,-23.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AAbBwIguhVIgOAAIAABVIg2AAIAAjfIBaAAQAcAAASAJQASAJAKAQQAJARAAATQAAAXgNARQgMARgZAHIA0BZgAghgKIAhAAQAQAAAHgIQAIgHgBgNQABgNgIgIQgHgHgQAAIghAAg");
	this.shape_5.setTransform(46.85,-23.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AhVBwIAAjfIBYAAQAbAAATAJQASAJAJARQAJAQAAAVQABATgKARQgJAPgSAKQgTAKgbAAIghAAIAABQgAgegLIAeAAQAOAAAIgHQAIgIAAgNQAAgOgIgHQgIgHgOAAIgeAAg");
	this.shape_6.setTransform(19.9,-23.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("ABJBwIAAiFIgzCFIgrAAIgyiGIAACGIg3AAIAAjfIBBAAIA+CaIA+iaIBAAAIAADfg");
	this.shape_7.setTransform(-5.3,-23.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AgwBnQgVgKgMgVQgMgVAAgeIAAiFIA3AAIAACFQgBAUAKALQALALASAAQATAAAKgLQALgLAAgUIAAiFIA2AAIAACFQAAAegNAVQgMAUgWALQgWAKgaAAQgaAAgVgKg");
	this.shape_8.setTransform(-31.25,-23.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AhUBwIAAjfIBXAAQAbAAATAJQASAJAJARQAKAQAAAVQgBATgIARQgJAPgTAKQgSAKgcAAIghAAIAABQgAgegLIAeAAQAPAAAHgHQAIgIAAgNQAAgOgIgHQgHgHgPAAIgeAAg");
	this.shape_9.setTransform(-51.95,-23.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AhUBwIAAjfIBXAAQAbAAASAJQATAJAJARQAKAQAAAVQgBATgIARQgKAPgSAKQgSAKgcAAIghAAIAABQgAgegLIAeAAQAPAAAHgHQAIgIAAgNQAAgOgIgHQgHgHgPAAIgeAAg");
	this.shape_10.setTransform(152.15,-54.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("ABIBwIAAiFIgyCFIgrAAIgyiGIAACGIg3AAIAAjfIBAAAIA+CaIA/iaIBAAAIAADfg");
	this.shape_11.setTransform(126.95,-54.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AgwBnQgVgKgMgVQgMgVAAgeIAAiFIA2AAIAACFQABAUAJALQAKALATAAQATAAAKgLQAKgLAAgUIAAiFIA3AAIAACFQAAAegNAVQgNAUgVALQgVAKgaAAQgbAAgVgKg");
	this.shape_12.setTransform(101,-54.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgoBrQgUgHgLgRQgMgPgBgWIA6AAQACANAHAGQAHAHALAAQAMAAAIgGQAHgGAAgKQAAgIgGgFQgGgGgIgDIgWgIQgWgHgOgHQgNgGgKgNQgKgNAAgVQAAgfAXgSQAWgSAlAAQAkAAAXASQAWASACAfIg7AAQgBgKgHgHQgIgGgKAAQgKAAgGAFQgGAGAAAJQAAAMAKAFQAKAGAVAHQAWAIANAGQAOAHAKAMQAKANAAAUQAAAUgKAPQgKAQgSAJQgTAJgZAAQgYAAgTgIg");
	this.shape_13.setTransform(79.875,-54.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AAaBwIgthVIgOAAIAABVIg2AAIAAjfIBbAAQAbAAASAJQATAJAJAQQAJARAAATQAAAXgNARQgMARgZAHIA0BZgAghgKIAhAAQAQAAAHgIQAIgHAAgNQAAgNgIgIQgHgHgQAAIghAAg");
	this.shape_14.setTransform(53.25,-54.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AgwBnQgVgKgMgVQgMgVAAgeIAAiFIA3AAIAACFQgBAUALALQAKALASAAQATAAAKgLQALgLAAgUIAAiFIA2AAIAACFQAAAegNAVQgNAUgVALQgWAKgZAAQgbAAgVgKg");
	this.shape_15.setTransform(31.2,-54.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("Ag5BlQgagPgQgbQgPgaAAghQAAggAPgaQAQgaAagPQAbgPAeAAQAgAAAaAPQAbAPAPAaQAPAaAAAgQAAAhgPAaQgPAbgbAPQgaAOggAAQgeAAgbgOgAgqgvQgQASAAAdQAAAeAQARQAQASAaAAQAbAAAQgSQARgRAAgeQAAgcgRgTQgQgSgbAAQgaAAgQASg");
	this.shape_16.setTransform(7.325,-54.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgaBwIAAhKIhOiVIA+AAIArBeIArheIA9AAIhOCVIAABKg");
	this.shape_17.setTransform(-15.975,-54.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AgoBrQgUgHgLgRQgMgPgBgWIA6AAQACANAHAGQAHAHALAAQAMAAAIgGQAHgGAAgKQAAgIgGgFQgGgGgIgDIgWgIQgWgHgOgHQgNgGgKgNQgKgNAAgVQAAgfAXgSQAWgSAlAAQAkAAAXASQAWASACAfIg7AAQgBgKgHgHQgIgGgKAAQgKAAgGAFQgGAGAAAJQAAAMAKAFQAKAGAVAHQAWAIANAGQAOAHAKAMQAKANAAAUQAAAUgKAPQgKAQgSAJQgTAJgZAAQgYAAgTgIg");
	this.shape_18.setTransform(-43.275,-54.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgaBwIAAjfIA1AAIAADfg");
	this.shape_19.setTransform(-57.775,-54.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-79,229.6,79.6);


(lib.Logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Logo();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,1024,90);


(lib.frame3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frame3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,1024,106);


(lib.frame2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frame2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,1024,104);


(lib.frame1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frame1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,1024,136);


(lib.CTA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CTA();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,1024,90);


(lib.BG_png = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,728,90);


// stage content:
(lib.WBAY_218541_MM_1024x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP/gHBMCf/AAAIAAODMif/AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(199));

	// CTA_png
	this.instance = new lib.CTA_1("synched",0);
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199));

	// Logo_png
	this.instance_1 = new lib.Logo_1("synched",0);
	this.instance_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199));

	// t3
	this.instance_2 = new lib.t3("synched",0);
	this.instance_2.setTransform(386.95,55,0.5,0.5,0,0,0,307,-99);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({regX:306.9,scaleX:1,scaleY:1,x:386.9,alpha:1},13,cjs.Ease.get(1)).wait(61));

	// frame3_png
	this.instance_3 = new lib.frame3_1("synched",0);
	this.instance_3.setTransform(80,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(125).to({_off:false},0).to({alpha:1},13).wait(61));

	// water_png
	this.instance_4 = new lib.water_1("synched",0);
	this.instance_4.setTransform(80,334);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({y:300},18).wait(33).to({startPosition:0},0).to({y:344},13).to({_off:true},1).wait(74));

	// t2
	this.instance_5 = new lib.t2("synched",0);
	this.instance_5.setTransform(406.15,22.9,0.5,0.5,0,0,0,326.2,-50.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({scaleX:1,scaleY:1,x:406.2,alpha:1},13).wait(139));

	// frame2_png
	this.instance_6 = new lib.frame2_1("synched",0);
	this.instance_6.setTransform(80,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).to({alpha:1},13).wait(139));

	// t1
	this.instance_7 = new lib.t1("synched",0);
	this.instance_7.setTransform(123.75,45.5,0.5,0.5,0,0,0,43.8,-38.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:123.8,alpha:1},14,cjs.Ease.get(1)).wait(185));

	// frame1_png
	this.instance_8 = new lib.frame1_1("synched",0);
	this.instance_8.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(199));

	// text_bg_png
	this.instance_9 = new lib.text_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199));

	// BG_png
	this.instance_10 = new lib.BG_png("synched",0);
	this.instance_10.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(199));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511,44,514,144);
// library properties:
lib.properties = {
	id: '1B2175A397DA418A911C8D25A6AE7677',
	width: 1024,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"CTA.png", id:"CTA"},
		{src:"frame1.png", id:"frame1"},
		{src:"frame2.png", id:"frame2"},
		{src:"frame3.png", id:"frame3"},
		{src:"Logo.png", id:"Logo"},
		{src:"text_bg.png", id:"text_bg"},
		{src:"water.png", id:"water"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1B2175A397DA418A911C8D25A6AE7677'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;