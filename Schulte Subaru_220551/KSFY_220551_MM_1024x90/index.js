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



(lib.ALTL2026_Logo_HorizontalLockup = function() {
	this.initialize(img.ALTL2026_Logo_HorizontalLockup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1426,337);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.Logo2 = function() {
	this.initialize(img.Logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,53);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Logo2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Logo2();
	this.instance.setTransform(-88,-37,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2_1, new cjs.Rectangle(-88,-37,176.9,35.3), null);


(lib.Logo_Love = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ALTL2026_Logo_HorizontalLockup();
	this.instance.setTransform(-63,-42,0.0777,0.0777);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-42,110.8,26.2);


(lib.F4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(150.4,2.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_1.setTransform(146.025,-1.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgoQAAgKgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAKIAAAoIgTAAIAAhKIATAAIAAAKQAEgFAGgEQAGgCAGAAQANAAAIAJQAJAIAAAPIAAArg");
	this.shape_2.setTransform(139.075,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_3.setTransform(130.375,-0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAmIgbhLIAUAAIASA5IATg5IAUAAIgcBLg");
	this.shape_4.setTransform(122.175,-0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_5.setTransform(114.625,-1.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(103.575,-0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAmIgbhLIAUAAIASA5IATg5IAUAAIgcBLg");
	this.shape_7.setTransform(95.375,-0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_8.setTransform(87.025,-0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_9.setTransform(79.95,-1.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(69.025,-0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_11.setTransform(62.075,-1.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_12.setTransform(53.675,-1.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_13.setTransform(46.825,-0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_14.setTransform(39.75,-1.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZAvIgGgSIglAAIgGASIgUAAIAihdIAVAAIAiBdgAAOAOIgOgmIgNAmIAbAAg");
	this.shape_15.setTransform(28.35,-1.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_16.setTransform(15.825,-0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAFgEQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_17.setTransform(9,-0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgKQAFgIAIgFQAIgEAJgBQAIAAAGAEQAGADAEAFIAAgLIATAAIAABLIgTAAIAAgMQgEAGgGADQgHAEgHAAQgKgBgHgEgAgIgTQgFADgDAFQgCAFAAAGQAAAGACAGQADAEAFAEQAEACAEAAQAGAAAEgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgDQgEgCgGAAQgEAAgEACg");
	this.shape_18.setTransform(1.2,-0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAwQgGgEgEgFIAAALIgTAAIAAhkIATAAIAAAlQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(-7.45,-1.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_20.setTransform(-16.775,-0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAtQgIgDgFgHQgEgGAAgIIAUAAQAAAFAEAEQAEADAFAAQAHAAAEgDQAEgEAAgEQAAgFgDgCQgDgDgDgCIgKgDIgPgFQgGgCgEgFQgEgGAAgJQAAgIAEgHQAEgGAIgDQAIgDAJgBQAOABAJAHQAJAHABAMIgVAAQAAgEgEgEQgEgCgFAAQgGgBgDADQgDADAAAFQAAAEACADQADADADABIAKAEQAJACAGADQAGABAEAGQAEAFAAAJQAAAIgEAGQgEAHgHADQgIAFgKAAQgJgBgIgDg");
	this.shape_21.setTransform(-25.225,-1.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_22.setTransform(-36.725,-0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_23.setTransform(-45.275,-1.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAvIAAhOIgYAAIAAgPIBDAAIAAAPIgZAAIAABOg");
	this.shape_24.setTransform(-53.65,-1.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F4, new cjs.Rectangle(-60.4,-13.7,215.8,24.7), null);


(lib.F3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAAEADQACADAAAEQAAAFgCADQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(127.65,2.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgJAIgFQAIgEAKAAQAGAAAGADQAHADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgHADgGAAQgKAAgIgFgAgIgGQgFACgDAEQgDAFABAHQgBAHADAFQADAFAFADQAEACAEAAQAFAAAFgCQAFgDADgFQACgFAAgHQAAgHgCgFQgDgEgFgCQgFgDgFAAQgEAAgEADg");
	this.shape_1.setTransform(121.1,-1.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_2.setTransform(112.575,-0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAmIgbhLIAUAAIASA5IATg5IAUAAIgcBLg");
	this.shape_3.setTransform(104.375,-0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_4.setTransform(96.025,-0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQACgFAHgEQAFgDAIAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_5.setTransform(89.3,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAEAJQAFAJAAALQAAAMgFAHQgEAJgIAGQgIAEgKAAQgGAAgHgDQgGgEgEgFIAAAvgAgJgkQgEADgDAFQgDAEAAAHQAAAHADAFQADAFAEACQAEACAFAAQAFAAAFgCQAEgCACgFQAEgFAAgHQAAgGgEgFQgCgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_6.setTransform(82,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgGAHgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAJAAALQAAAMgEAHQgFAJgIAGQgIAEgKAAQgGAAgHgDQgHgEgDgFIAAAvgAgJgkQgFADgDAFQgCAEAAAHQAAAHACAFQADAFAFACQAFACAEAAQAFAAAFgCQAEgCADgFQACgFAAgHQAAgGgCgFQgDgFgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_7.setTransform(72.85,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgKQAFgIAIgFQAIgEAKgBQAGAAAHAEQAGADAEAFIAAgLIATAAIAABLIgTAAIAAgMQgEAGgGADQgHAEgHAAQgJgBgIgEgAgJgTQgEADgDAFQgCAFgBAGQABAGACAGQADAEAEAEQAFACAEAAQAGAAAEgCQAEgDADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgEgCgGAAQgEAAgFACg");
	this.shape_8.setTransform(63.25,-0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAxQgKgHgCgNIATAAQACAFAFADQAFADAFAAQAJAAAFgFQAFgFAAgKIAAgMQgDAGgHADQgHADgGABQgKgBgIgEQgIgFgFgJQgEgIAAgMQAAgKAEgKQAFgIAIgFQAIgEAKgBQAGAAAHAEQAHADADAFIAAgLIATAAIAABLQAAAKgEAJQgFAIgHAEQgJAGgMAAQgPAAgKgIgAgIglQgFADgDAFQgDAFABAGQgBAHADAGQADAEAFADQAEACAEAAQAFAAAFgCQAFgCADgFQACgFAAgHQAAgHgCgFQgDgFgFgDQgFgCgFAAQgEAAgEACg");
	this.shape_9.setTransform(50.9,1.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(42.275,-0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAhAAQAOAAAMAGQALAFAGALQAHALAAANQAAAOgHALQgGALgLAFQgMAGgOAAgAgVAfIANAAQANAAAJgIQAIgIAAgPQAAgOgIgIQgJgIgNAAIgNAAg");
	this.shape_11.setTransform(33.35,-1.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(23.3,2.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgJAIgFQAIgEAKAAQAGAAAGADQAHADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgHADgGAAQgKAAgIgFgAgJgGQgEACgDAEQgCAFAAAHQAAAHACAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_13.setTransform(16.8,-1.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_14.setTransform(8.275,-0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_15.setTransform(1.475,-1.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgDgGQgFgGAAgGIATAAQABAEADADQAEADAFAAQAFAAADgCQADgCAAgEQAAgDgEgCIgLgFIgNgDQgGgCgDgEQgEgFgBgHQAAgHAEgFQAEgFAGgDQAHgCAIgBQAOABAHAGQAJAHAAALIgSAAQAAgEgDgDQgEgDgFABQgFgBgCACQgDACAAAEQAAADAEACIAKAEIAOAEQAFACAEAEQAEAFAAAHQAAAHgDAFQgEAFgHADQgGACgJABQgJAAgHgEg");
	this.shape_16.setTransform(-4.75,-0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_17.setTransform(-12.575,-0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_18.setTransform(-19.375,-1.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAxQgLgHgBgNIATAAQACAFAEADQAFADAGAAQAJAAAFgFQAFgFAAgKIAAgMQgEAGgGADQgHADgGABQgKgBgIgEQgIgFgFgJQgEgIAAgMQAAgKAEgKQAFgIAIgFQAIgEAKgBQAGAAAHAEQAGADAEAFIAAgLIATAAIAABLQAAAKgEAJQgFAIgHAEQgJAGgMAAQgPAAgKgIgAgJglQgEADgDAFQgCAFgBAGQABAHACAGQADAEAEADQAFACAEAAQAGAAAEgCQAEgCADgFQADgFAAgHQAAgHgDgFQgDgFgEgDQgEgCgGAAQgEAAgFACg");
	this.shape_19.setTransform(-29.9,1.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_20.setTransform(-38.575,-0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAiAAQAOAAALAGQALAFAGALQAHALgBANQABAOgHALQgGALgLAFQgLAGgOAAgAgWAfIAOAAQAOAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgOAAIgOAAg");
	this.shape_21.setTransform(-47.5,-1.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-55.5,-13.7,191.3,24.7), null);


(lib.F2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgJAIgFQAHgEAKAAQAHAAAHADQAGADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgGADgIAAQgKAAgHgFgAgIgGQgFACgDAEQgDAFAAAHQAAAHADAFQADAFAFADQAEACAEAAQAGAAAEgCQAFgDADgFQACgFAAgHQAAgHgCgFQgDgEgFgCQgEgDgGAAQgEAAgEADg");
	this.shape.setTransform(167.05,-2.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA1IAAhKIASAAIAABKgAgIghQgDgEAAgEQAAgFADgDQAEgDAEAAQAFAAADADQADADABAFQgBAEgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(160.9,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAGgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAJIAAAmg");
	this.shape_2.setTransform(156.65,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAHAAAMQAAALgFAJQgEAJgIAFQgIAFgJAAQgIAAgGgDgAgJgGQgFACgDAEQgCAFAAAHQAAAHACAFQADAFAFADQAEACAFAAQAFAAAEgCQAFgDACgFQADgFABgHQgBgHgDgFQgCgEgFgCQgEgDgFAAQgFAAgEADg");
	this.shape_3.setTransform(149.3,-2.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA3IAQglIgehIIAVAAIATA0IATg0IAUAAIgtBtg");
	this.shape_4.setTransform(140.375,0.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAvIAAgoIgnAAIAAAoIgTAAIAAhdIATAAIAAAnIAnAAIAAgnIATAAIAABdg");
	this.shape_5.setTransform(131.425,-1.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAyIgYggIAAAgIgTAAIAAhjIATAAIAAA4IAYgfIAYAAIghAlIAiAlg");
	this.shape_6.setTransform(119.9,-2.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_7.setTransform(111.325,-0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQACgHAHgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAJIAAAmg");
	this.shape_8.setTransform(104.8,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_9.setTransform(99.075,-1.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAkQgHgEgFgFQgEgHAAgGIATAAQABAEADADQAEADAEAAQAGAAADgDQADgCAAgDQAAgEgEgCIgKgDIgPgFQgFgCgEgDQgDgEAAgJQAAgFADgFQAEgGAGgDQAHgCAIAAQAOgBAIAHQAHAGACAMIgTAAQAAgEgEgDQgDgDgFAAQgFAAgDACQgCACAAADQAAAEADACIAMAEIANAFQAFABAEAEQAEAFAAAHQAAAHgEAFQgDAFgHADQgHADgJgBQgHAAgIgCg");
	this.shape_10.setTransform(92.85,-0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAkQgIgEgEgFQgEgHAAgGIATAAQAAAEAEADQAEADAEAAQAGAAADgDQADgCAAgDQAAgEgEgCIgKgDIgPgFQgFgCgEgDQgDgEAAgJQgBgFAEgFQAEgGAGgDQAHgCAIAAQAOgBAHAHQAIAGABAMIgSAAQAAgEgDgDQgEgDgFAAQgEAAgEACQgCACAAADQAAAEADACIAMAEIANAFQAFABAEAEQAEAFAAAHQAAAHgEAFQgDAFgHADQgGADgKgBQgHAAgIgCg");
	this.shape_11.setTransform(85.55,-0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_12.setTransform(77.575,-0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_13.setTransform(70.9,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAqQgKgGgHgLQgGgLAAgOQAAgNAGgLQAHgLAKgGQALgHANAAQAQAAAMAJQAMAIAEAPIgWAAQgDgIgGgDQgGgDgHAAQgIAAgGAEQgGADgEAHQgDAIAAAIQAAAJADAIQAEAHAGAEQAGADAIAAQAHABAGgEQAGgEADgGIAWAAQgEAOgMAIQgMAIgQAAQgNAAgLgGg");
	this.shape_14.setTransform(62.55,-1.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgJQgEAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_15.setTransform(49.775,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_16.setTransform(43,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgKAIgEQAIgFAKABQAGAAAHACQAGAEAEAFIAAgKIATAAIAABJIgTAAIAAgKQgDAFgHAEQgGACgIAAQgJABgIgFgAgIgSQgFACgDAFQgDAFABAGQgBAGADAFQADAGAFACQAEADAEAAQAFAAAFgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgFgDgFAAQgEAAgEADg");
	this.shape_17.setTransform(35.15,-0.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAHAAAMQAAALgFAJQgEAJgIAFQgIAFgJAAQgIAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDACgFQAEgFAAgHQAAgHgEgFQgCgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_18.setTransform(26.55,-2.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgJQgEAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_19.setTransform(17.225,-0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAtQgIgEgFgFQgEgHAAgJIAUAAQAAAGAEADQAEAEAFAAQAHAAAEgEQAEgCAAgGQAAgEgDgDQgDgCgDgCIgKgDIgPgGQgGgBgEgGQgEgFAAgJQAAgJAEgFQAEgHAIgDQAIgEAJAAQAOAAAJAIQAJAHABAMIgVAAQAAgEgEgDQgEgEgFAAQgGABgDACQgDADAAAFQAAAEACACQADADADACIAKADQAJADAGADQAGACAEAFQAEAFAAAJQAAAIgEAGQgEAHgHAEQgIADgKAAQgJABgIgEg");
	this.shape_20.setTransform(8.725,-1.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAvIgShCIgSBCIgWAAIgZhdIAUAAIARBIIAThIIAUAAIASBIIARhIIAUAAIgaBdg");
	this.shape_21.setTransform(-5.525,-1.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_22.setTransform(-15.925,-1.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAvIgphAIAABAIgTAAIAAhdIATAAIApBAIAAhAIATAAIAABdg");
	this.shape_23.setTransform(-24.525,-1.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_24.setTransform(-36.875,-0.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_25.setTransform(-45.425,-2.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAvIAAhOIgZAAIAAgPIBEAAIAAAPIgZAAIAABOg");
	this.shape_26.setTransform(-53.8,-1.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-60.6,-14.2,235.7,24.7), null);


(lib.F1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(113.5,2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAyIgYggIAAAgIgUAAIAAhjIAUAAIAAA4IAXgfIAZAAIghAlIAhAlg");
	this.shape_1.setTransform(108.25,-1.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgoQAAgKgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgEAGgEQAGgCAGAAQANAAAIAIQAJAJAAAPIAAArg");
	this.shape_2.setTransform(99.475,-0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgKAIgEQAHgFAKABQAIAAAGADQAGADAEAFIAAgKIATAAIAABKIgTAAIAAgLQgDAFgHAEQgHACgHAAQgKAAgHgEgAgIgSQgFACgDAFQgCAFAAAGQAAAGACAFQADAFAFAEQAEACAEAAQAGAAAEgCQAEgDAEgFQACgFAAgHQAAgGgCgFQgEgFgEgCQgEgDgGAAQgEAAgEADg");
	this.shape_3.setTransform(90.2,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_4.setTransform(83.175,-1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAFgEQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_5.setTransform(75.05,-0.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgIQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(67.825,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgGAHgDQAGgDAIAAQAJAAAIAFQAIAEAEAJQAFAIAAAMQAAAMgFAIQgEAIgIAFQgIAFgJAAQgIAAgGgDQgHgDgDgGIAAAvgAgJgkQgEADgDAEQgDAFAAAHQAAAHADAGQADAEAEACQAEACAFABQAFgBAFgCQAEgCACgFQAEgFAAgHQAAgHgEgFQgCgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_7.setTransform(59.4,1.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAkQgHgEgEgFQgFgHAAgGIATAAQABAEADADQAEADAFAAQAFAAADgDQADgCAAgDQAAgDgEgCIgLgEIgNgFQgGgCgDgDQgFgEAAgJQABgFADgFQADgGAIgDQAGgCAIAAQANgBAJAHQAHAGACAMIgTAAQAAgFgEgCQgDgCgFgBQgEABgDABQgDACAAADQAAAEAEACIALAEIANAFQAFABAEAEQAEAFAAAHQAAAHgDAFQgEAFgHADQgHADgIgBQgIAAgIgCg");
	this.shape_8.setTransform(47.7,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgIQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_9.setTransform(39.875,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAyIAAhjIASAAIAABjg");
	this.shape_10.setTransform(33.9,-1.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA1IAAhKIASAAIAABKgAgIghQgCgDAAgFQAAgFACgDQAEgDAEAAQAFAAAEADQACADAAAFQAAAFgCADQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(30.2,-2.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArAmIAAgoQAAgKgEgEQgFgEgIAAQgHAAgFAEQgFAEABAKIAAAoIgSAAIAAgoQAAgKgFgEQgFgEgHAAQgIAAgFAEQgEAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgEAFgEQAGgCAHAAQAJAAAGADQAHAFADAGQAEgGAHgEQAHgEAIAAQAOAAAJAIQAIAJAAAPIAAArg");
	this.shape_12.setTransform(21.35,-0.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAxIAkhRIgtAAIAAgQIBAAAIAAAOIgjBTg");
	this.shape_13.setTransform(7.35,-1.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgDgHQgEgGAAgHIARAAQABAFAEAEQAEADAGAAQAIAAAEgHQADgHAAgQQgCAEgHADQgFACgGAAQgIAAgHgEQgHgDgEgHQgEgGAAgLQAAgPAJgIQAIgKAQABQATAAAHAMQAIAMAAAZQAAAQgDAMQgDALgHAGQgHAFgOABQgIgBgHgDgAgLgdQgEAEAAAIQAAAHAEAFQAEAFAHgBQAHABAFgFQADgEAAgIQAAgHgDgFQgFgFgHABQgHgBgEAFg");
	this.shape_14.setTransform(-0.55,-1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqQgJgIgCgMIATAAQABAFAEAEQAFACAFAAQAIAAAEgEQAEgGAAgIQAAgIgEgEQgEgEgIAAQgFAAgDACQgEACgCAFIgSAAIAAg5IA8AAIAAARIgrAAIAAAXQADgDAGgCQAFgCAFAAQALgBAHAFQAGAFAEAHQADAGAAAJQAAAQgJAJQgJAKgQAAQgPgBgJgHg");
	this.shape_15.setTransform(-9.025,-1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgIQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAIAAALQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_16.setTransform(-21.025,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_17.setTransform(-27.975,-1.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAFQAIAEAFAJQAEAIAAAMQAAAMgEAIQgFAIgIAFQgIAFgKAAQgGAAgHgDQgGgDgEgGIAAAvgAgJgkQgEADgDAEQgDAFAAAHQAAAHADAGQADAEAEACQAEACAFABQAFgBAFgCQAEgCADgFQADgFAAgHQAAgHgDgFQgDgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_18.setTransform(-38.05,1.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAsQgIgFgFgIQgFgIAAgMIAAg6IATAAIAAA6QAAAJAFAFQAFAFAIAAQAJAAAFgFQAFgFAAgJIAAg6IATAAIAAA6QAAAMgFAIQgFAIgJAFQgJAEgKAAQgKAAgJgEg");
	this.shape_19.setTransform(-47.575,-1.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-55.2,-13.9,173.7,24.700000000000003), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAOAmIgOg1IgOA1IgSAAIgUhLIAQAAIANA6IAQg6IAQAAIAOA5IAOg5IAQAAIgVBLg");
	this.shape.setTransform(24.15,-0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAIAFQAJAFAFAJQAGAJAAAKQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgLgVQgGADgCAFQgDAHAAAGQAAAIADAFQACAGAGADQAFADAGAAQAHAAAFgDQAFgDADgGQADgFAAgIQAAgGgDgHQgDgFgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(14.375,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAmIghgzIAAAzIgPAAIAAhLIAPAAIAhAzIAAgzIAPAAIAABLg");
	this.shape_2.setTransform(6.125,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAmIAAhLIAbAAQAIAAAGADQAHADACAGQAEAFAAAHQAAAGgEAFQgCAEgHADQgGAEgIAAIgNAAIAAAdgAgMgDIAMAAQAGAAADgCQADgDAAgFQAAgMgMAAIgMAAg");
	this.shape_3.setTransform(-3.5,-0.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAIAFQAJAFAFAJQAGAJAAAKQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgLgVQgGADgCAFQgDAHAAAGQAAAIADAFQACAGAGADQAFADAGAAQAHAAAFgDQAFgDADgGQADgFAAgIQAAgGgDgHQgDgFgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_4.setTransform(-11.225,-0.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAmIAAggIgfAAIAAAgIgPAAIAAhLIAPAAIAAAfIAfAAIAAgfIAPAAIAABLg");
	this.shape_5.setTransform(-19.375,-0.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAkQgGgDgDgEQgEgGgBgHIARAAQAAAFADACQADAEAFAAQAEgBADgCQAEgDAAgEQAAgEgCgCIgGgDIgHgDIgMgEQgEgBgEgFQgDgDAAgIQAAgHADgEQAEgFAGgDQAFgCAIAAQALgBAIAGQAGAGABAKIgQAAQgBgEgDgDQgCgCgFAAQgEAAgDACQgCADgBAEQAAADACACIAGADIAHADIAMAEQAEABAEAEQAEAFAAAHQAAAGgEAGQgDAFgGADQgGACgIAAQgIABgGgDg");
	this.shape_6.setTransform(-26.55,-0.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmPBvQgUAAAAgUIAAi1QAAgUAUAAIMfAAQAUAAAAAUIAAC1QAAAUgUAAg");
	this.shape_7.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-42,-11.1,84,22.299999999999997), null);


(lib.BG_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(-150,-125,1024,90), null);


(lib.ad_animatedLayers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_359 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(948.75,45.7,0.3354,0.3354,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({regX:0,regY:0,scaleX:1.1738,scaleY:1.1738,x:948.7,y:45.65,alpha:1},9,cjs.Ease.get(1)).wait(318));

	// Layer_2
	this.instance_1 = new lib.Logo_Love("synched",0);
	this.instance_1.setTransform(796.65,116.4,1.3546,1.3546,0,0,0,-0.6,-27.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:66.4,alpha:1},9).wait(327));

	// Logo2
	this.instance_2 = new lib.Logo2_1();
	this.instance_2.setTransform(662.8,50.95,1.1738,1.1738);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:780.2,alpha:1},9,cjs.Ease.get(1)).wait(332));

	// The_Subaru_A_Lot_to_Love_Event_
	this.instance_3 = new lib.F4();
	this.instance_3.setTransform(252.85,48.05,1.7282,1.7282,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).to({x:131.9,alpha:1},9,cjs.Ease.get(1)).wait(62));

	// Dog_tested__Dog_approved__
	this.instance_4 = new lib.F3();
	this.instance_4.setTransform(244.35,48.05,1.7282,1.7282,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({x:123.3,alpha:1},9,cjs.Ease.get(1)).to({_off:true},86).wait(71));

	// The_NEW_Subaru_Crosstrek_Hybrid
	this.instance_5 = new lib.F2();
	this.instance_5.setTransform(253.15,48.05,1.7282,1.7282,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({x:132.15,alpha:1},9,cjs.Ease.get(1)).to({_off:true},66).wait(166));

	// Up_to_597_miles_per_tank_
	this.instance_6 = new lib.F1();
	this.instance_6.setTransform(243.8,48.05,1.7282,1.7282,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({regX:0,x:122.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},101).wait(241));

	// BG
	this.instance_7 = new lib.BG_1();
	this.instance_7.setTransform(150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9,cjs.Ease.get(1)).wait(351));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,132.8);


// stage content:
(lib.KSFY_220551_MM_1024x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ad_border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP6gG8MCf1AAAIAAN5Mif1AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_animated_layers
	this.ad_animatedLayers = new lib.ad_animatedLayers();
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511.5,44.5,513,46);
// library properties:
lib.properties = {
	id: 'F371D3A7E6314BA89506CCB8E3749DB9',
	width: 1024,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"ALTL2026_Logo_HorizontalLockup.png", id:"ALTL2026_Logo_HorizontalLockup"},
		{src:"BG.jpg", id:"BG"},
		{src:"Logo2.png", id:"Logo2"}
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
an.compositions['F371D3A7E6314BA89506CCB8E3749DB9'] = {
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