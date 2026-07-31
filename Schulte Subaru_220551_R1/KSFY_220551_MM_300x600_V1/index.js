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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,116);// helper functions:

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


(lib.Logo2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo2();
	this.instance.setTransform(-59,-26,0.6784,0.6784);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-59,-26,117.1,21.3), null);


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
	this.instance.setTransform(-87,-14,0.108,0.108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-14,154,36.4);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEAAQAFAAAEADQACADAAAEQAAAFgCADQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(44.6,8.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_1.setTransform(40.225,4.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgoQAAgKgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgEAGgEQAGgCAGAAQANAAAIAIQAJAJAAAPIAAArg");
	this.shape_2.setTransform(33.225,5.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_3.setTransform(24.575,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAlIgbhJIAUAAIASA4IATg4IAUAAIgcBJg");
	this.shape_4.setTransform(16.375,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_5.setTransform(8.775,4.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(-2.225,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAlIgbhJIAUAAIASA4IATg4IAUAAIgcBJg");
	this.shape_7.setTransform(-10.425,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_8.setTransform(-18.825,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_9.setTransform(-25.85,4.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_10.setTransform(-36.775,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_11.setTransform(-43.725,4.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_12.setTransform(54.325,-11.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgJQAFgIAJgFQAJgFAKAAQALAAAJAFQAIAFAFAIQAGAJAAALQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgNgPQgFAFAAAKQAAAKAFAHQAFAFAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_13.setTransform(47.475,-10.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_14.setTransform(40.45,-11.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZAvIgGgSIglAAIgGASIgUAAIAihdIAVAAIAiBdgAANAOIgNgmIgNAmIAaAAg");
	this.shape_15.setTransform(29,-11.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_16.setTransform(16.475,-10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAFgEQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_17.setTransform(9.7,-10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgKQAFgIAIgFQAIgFAKAAQAGABAHADQAGADAEAFIAAgKIATAAIAABKIgTAAIAAgLQgDAFgHAEQgGACgIAAQgJAAgIgEgAgIgSQgFACgDAFQgDAFABAGQgBAHADAFQADAEAFAEQAEACAEAAQAFAAAFgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgFgDgFAAQgEAAgEADg");
	this.shape_18.setTransform(1.85,-10.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgFACgDAEQgCAFAAAHQAAAHACAFQADAFAFADQAFACAEAAQAFAAAFgCQAEgDADgFQACgFAAgHQAAgHgCgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_19.setTransform(-6.8,-11.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_20.setTransform(-16.125,-10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAtQgIgDgFgGQgEgHAAgIIAUAAQAAAFAEAEQAEADAFAAQAHAAAEgDQAEgEAAgEQAAgFgDgDQgDgDgDgBIgKgDIgPgFQgGgCgEgFQgEgGAAgJQAAgJAEgFQAEgHAIgDQAIgDAJgBQAOAAAJAIQAJAHABAMIgVAAQAAgEgEgEQgEgDgFAAQgGABgDACQgDADAAAFQAAAEACADQADADADABIAKAEQAJACAGADQAGABAEAGQAEAGAAAIQAAAHgEAHQgEAHgHAEQgIADgKAAQgJAAgIgDg");
	this.shape_21.setTransform(-24.575,-11.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_22.setTransform(-36.075,-10.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_23.setTransform(-44.625,-11.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAvIAAhOIgZAAIAAgPIBDAAIAAAPIgYAAIAABOg");
	this.shape_24.setTransform(-53,-11.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F4, new cjs.Rectangle(-59.9,-23.5,119.9,40.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(48.8,8.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgJAIgFQAHgEALAAQAGAAAHADQAGADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgGADgHAAQgLAAgHgFgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_1.setTransform(42.3,4.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_2.setTransform(33.775,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAlIgbhJIAUAAIASA4IATg4IAUAAIgcBJg");
	this.shape_3.setTransform(25.575,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_4.setTransform(17.225,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAGgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAJIAAAmg");
	this.shape_5.setTransform(10.5,5.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgFAHgEQAGgDAIAAQAJAAAIAFQAIAEAEAJQAFAIAAAMQAAAMgFAIQgEAIgIAFQgIAFgJAAQgIAAgGgDQgHgDgDgGIAAAvgAgJgkQgEADgDAEQgDAFAAAHQAAAHADAGQADAEAEACQAEACAFABQAFgBAFgCQAEgCACgFQAEgFAAgHQAAgHgEgFQgCgEgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_6.setTransform(3.15,7.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgFAHgEQAGgDAIAAQAJAAAIAFQAIAEAEAJQAFAIAAAMQAAAMgFAIQgEAIgIAFQgIAFgJAAQgIAAgGgDQgHgDgDgGIAAAvgAgJgkQgFADgDAEQgCAFAAAHQAAAHACAGQADAEAFACQAEACAFABQAFgBAEgCQAFgCACgFQADgFABgHQgBgHgDgFQgCgEgFgDQgEgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(-5.95,7.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgKAIgEQAIgFAKABQAGAAAHACQAGAEAEAFIAAgKIATAAIAABJIgTAAIAAgKQgEAFgGAEQgHACgHAAQgKABgHgFgAgJgSQgEACgDAFQgCAFgBAGQABAGACAFQADAGAEACQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_8.setTransform(-15.6,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAxQgKgIgCgNIATAAQABAGAFADQAGADAGAAQAHAAAGgFQAFgFAAgKIAAgLQgDAEgHAEQgGAEgIgBQgKABgHgFQgIgFgEgJQgFgIAAgLQAAgMAFgIQAEgKAIgEQAHgFAKABQAIAAAGACQAHAEADAFIAAgKIATAAIAABKQAAAKgEAIQgEAJgJAFQgIAEgMAAQgPAAgKgHgAgJgkQgEACgDAFQgDAFAAAHQAAAGADAFQADAGAEABQAFADAEAAQAFAAAFgDQAEgBADgFQADgFAAgHQAAgHgDgFQgDgFgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_9.setTransform(-27.9,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_10.setTransform(-36.525,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoAvIAAhdIAhAAQAOAAAKAGQAMAFAGALQAGALAAANQAAAOgGALQgGALgMAFQgKAGgOAAgAgWAfIANAAQAPAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgPAAIgNAAg");
	this.shape_11.setTransform(-45.45,4.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQACADAAAEQAAAFgCADQgEADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(37.1,-7.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgJAIgFQAIgEAJAAQAGAAAHADQAHADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgEAFgGAEQgHADgHAAQgJAAgIgFgAgIgGQgFACgDAEQgDAFABAHQgBAHADAFQADAFAFADQAEACAEAAQAFAAAFgCQAFgDADgFQACgFAAgHQAAgHgCgFQgDgEgFgCQgFgDgFAAQgEAAgEADg");
	this.shape_13.setTransform(30.55,-11.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_14.setTransform(22.075,-10.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_15.setTransform(15.225,-11.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAkQgHgEgEgFQgFgHAAgGIATAAQABAEADADQAEADAFAAQAFAAADgDQADgCAAgDQAAgDgEgCIgLgFIgNgEQgGgCgDgDQgFgFAAgHQABgHADgEQADgGAIgDQAGgDAIAAQANAAAJAHQAHAGACAMIgTAAQAAgFgEgCQgDgCgFgBQgEABgDABQgDACAAAEQAAADAEACIAKAEIAOAEQAFACAEAEQAEAEAAAIQAAAGgDAGQgEAFgHADQgHACgIAAQgIAAgIgCg");
	this.shape_16.setTransform(9,-10.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_17.setTransform(1.175,-10.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_18.setTransform(-5.625,-11.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAxQgKgIgCgMIATAAQACAFAFADQAFADAFAAQAJAAAFgFQAFgFAAgKIAAgLQgDAFgHADQgHADgGAAQgKAAgIgEQgIgFgFgJQgEgIAAgLQAAgLAEgKQAFgIAIgFQAIgFAKAAQAGABAHADQAHADADAFIAAgKIATAAIAABKQAAAKgEAJQgFAIgHAEQgJAGgMgBQgPAAgKgHgAgJgkQgEACgDAFQgDAFABAHQgBAHADAEQADAFAEADQAFACAEAAQAFAAAFgCQAFgCACgFQADgFAAgHQAAgHgDgFQgCgFgFgCQgFgDgFAAQgEAAgFADg");
	this.shape_19.setTransform(-16.15,-8.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgJQAFgIAJgFQAJgFAKAAQALAAAJAFQAIAFAFAIQAGAJAAALQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgNgPQgFAFAAAKQAAAKAFAHQAFAFAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_20.setTransform(-24.825,-10.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoAvIAAhdIAhAAQAOAAAKAGQAMAFAGALQAGALAAANQAAAOgGALQgGALgMAFQgKAGgOAAgAgWAfIANAAQAPAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgPAAIgNAAg");
	this.shape_21.setTransform(-33.75,-11.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-55.2,-23.5,110.4,40.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgJAIgFQAHgEAKAAQAHAAAHADQAGADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgGADgIAAQgKAAgHgFgAgIgGQgFACgDAEQgCAFAAAHQAAAHACAFQADAFAFADQAEACAEAAQAGAAAEgCQAEgDAEgFQACgFAAgHQAAgHgCgFQgEgEgEgCQgEgDgGAAQgEAAgEADg");
	this.shape.setTransform(52.4,4.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA1IAAhKIASAAIAABKgAgIghQgDgEAAgEQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(46.25,4.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAGgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAJIAAAmg");
	this.shape_2.setTransform(42,5.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAHAAAMQAAALgFAJQgEAJgIAFQgIAFgJAAQgIAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDACgFQAEgFAAgHQAAgHgEgFQgCgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_3.setTransform(34.65,4.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA3IAQglIgehIIAVAAIATA0IATg0IAUAAIgtBtg");
	this.shape_4.setTransform(25.675,7.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAvIAAgoIgnAAIAAAoIgTAAIAAhdIATAAIAAAnIAnAAIAAgnIATAAIAABdg");
	this.shape_5.setTransform(16.775,4.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAyIgZggIAAAgIgSAAIAAhjIASAAIAAA4IAZgfIAYAAIghAlIAiAlg");
	this.shape_6.setTransform(5.25,4.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_7.setTransform(-3.325,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_8.setTransform(-9.9,5.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_9.setTransform(-15.575,4.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAkQgHgEgFgFQgEgHAAgGIATAAQABAEADADQAEADAEAAQAGAAADgDQADgCAAgDQAAgEgEgCIgLgDIgOgFQgFgCgEgDQgEgEAAgJQABgFADgFQADgGAIgDQAGgCAIAAQANgBAJAHQAHAGACAMIgTAAQAAgEgEgDQgDgDgFAAQgEAAgEACQgCACAAADQAAAEADACIAMAEIANAFQAFABAEAEQAEAFAAAHQAAAHgEAFQgDAFgHADQgHADgJgBQgHAAgIgCg");
	this.shape_10.setTransform(-21.8,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAkQgHgEgEgFQgFgHAAgGIATAAQABAEADADQAEADAFAAQAFAAADgDQADgCAAgDQAAgEgEgCIgLgDIgNgFQgGgCgDgDQgFgEAAgJQAAgFAEgFQADgGAIgDQAGgCAIAAQANgBAIAHQAJAGAAAMIgSAAQAAgEgDgDQgEgDgFAAQgFAAgCACQgDACAAADQAAAEAEACIAKAEIAOAFQAFABAEAEQAEAFAAAHQAAAHgDAFQgEAFgHADQgHADgIgBQgJAAgHgCg");
	this.shape_11.setTransform(-29.15,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_12.setTransform(-37.075,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQACgHAHgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAJIAAAmg");
	this.shape_13.setTransform(-43.8,5.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgHANAAQAPAAANAJQAMAIAEAPIgWAAQgDgIgGgDQgGgDgHAAQgIAAgGAEQgHADgDAIQgEAHABAIQgBAJAEAIQADAHAHAEQAGADAIAAQAHABAGgEQAGgEADgGIAWAAQgEAOgMAIQgNAIgPAAQgNAAgLgGg");
	this.shape_14.setTransform(-52.1,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_15.setTransform(51.525,-10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQACgFAHgEQAFgDAIAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_16.setTransform(44.75,-10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgEgJQgFgJAAgLQAAgKAFgKQAEgIAIgFQAHgFALAAQAHABAGADQAGADAEAFIAAgKIATAAIAABKIgTAAIAAgLQgDAFgHAEQgGACgIAAQgJAAgIgEgAgJgSQgEACgDAFQgDAFAAAGQAAAHADAFQADAEAEAEQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgGgDgFQgDgFgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_17.setTransform(36.9,-10.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgFACgCAEQgDAFAAAHQAAAHADAFQACAFAFADQAFACAEAAQAFAAAEgCQAFgDADgFQACgFAAgHQAAgHgCgFQgDgEgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_18.setTransform(28.3,-11.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_19.setTransform(18.925,-10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAtQgIgDgFgGQgEgHAAgIIAUAAQAAAFAEAEQAEADAFAAQAHAAAEgDQAEgEAAgEQAAgFgDgDQgDgDgDgBIgKgDIgPgFQgGgCgEgFQgEgGAAgJQAAgJAEgFQAEgHAIgDQAIgDAJgBQAOAAAJAIQAJAHABAMIgVAAQAAgEgEgEQgEgDgFAAQgGABgDACQgDADAAAFQAAAEACADQADADADABIAKAEQAJACAGADQAGABAEAGQAEAGAAAIQAAAHgEAHQgEAHgHAEQgIADgKAAQgJAAgIgDg");
	this.shape_20.setTransform(10.475,-11.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAvIgShCIgSBCIgWAAIgZhdIAUAAIARBIIAThIIAUAAIASBIIARhIIAUAAIgaBdg");
	this.shape_21.setTransform(-3.775,-11.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_22.setTransform(-14.175,-11.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAvIgphAIAABAIgTAAIAAhdIATAAIApBAIAAhAIATAAIAABdg");
	this.shape_23.setTransform(-22.825,-11.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_24.setTransform(-35.125,-10.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_25.setTransform(-43.675,-11.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAvIAAhOIgZAAIAAgPIBEAAIAAAPIgZAAIAABOg");
	this.shape_26.setTransform(-52.05,-11.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-60.1,-23.5,120.30000000000001,40.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(28.6,8.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAyIgZggIAAAgIgTAAIAAhjIATAAIAAA4IAZgfIAYAAIghAlIAiAlg");
	this.shape_1.setTransform(23.35,4.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgoQAAgKgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgEAGgEQAGgCAGAAQANAAAIAIQAJAJAAAPIAAArg");
	this.shape_2.setTransform(14.575,5.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgKAIgEQAHgFALABQAGAAAHACQAGAEAEAFIAAgKIATAAIAABJIgTAAIAAgKQgEAFgGAEQgGACgIAAQgJABgIgFgAgJgSQgEACgDAFQgCAFgBAGQABAGACAFQADAGAEACQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_3.setTransform(5.3,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_4.setTransform(-1.725,4.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAGgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAJIAAAmg");
	this.shape_5.setTransform(-9.85,5.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(-17.075,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAIAFQAIAEAEAJQAFAIAAAMQAAAMgFAIQgEAIgIAFQgIAFgJAAQgIAAgGgDQgGgDgEgGIAAAvgAgJgkQgFADgDAEQgCAFAAAHQAAAHACAGQADAEAFACQAFACAEABQAFgBAEgCQAFgCACgFQADgFAAgHQAAgHgDgFQgCgEgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_7.setTransform(-25.5,7.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAkQgIgEgDgFQgFgHAAgGIATAAQAAAEAEADQAEADAEAAQAGAAADgDQADgCAAgDQAAgDgEgCIgKgFIgPgEQgFgCgEgDQgDgFAAgHQgBgHAEgEQAEgGAGgDQAHgDAIAAQAOAAAHAHQAJAGAAAMIgSAAQAAgFgDgCQgEgCgFgBQgEABgEABQgCACAAAEQAAADADACIALAEIAOAEQAFACAEAEQAEAEAAAIQAAAGgDAGQgEAFgHADQgGACgKAAQgIAAgHgCg");
	this.shape_8.setTransform(48.1,-10.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_9.setTransform(40.325,-10.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAyIAAhjIASAAIAABjg");
	this.shape_10.setTransform(34.35,-11.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA1IAAhKIARAAIAABKgAgIghQgCgDAAgFQAAgFACgDQAEgDAEAAQAFAAAEADQACADAAAFQAAAFgCADQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(30.65,-11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArAmIAAgoQAAgKgEgEQgFgFgIABQgHgBgFAFQgFAEABAKIAAAoIgSAAIAAgoQAAgKgFgEQgFgFgHABQgIgBgFAFQgEAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgFAFgDQAGgCAHAAQAJAAAGADQAHAFADAGQAEgGAHgEQAHgEAIAAQAOAAAJAJQAIAIAAAPIAAArg");
	this.shape_12.setTransform(21.8,-10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAxIAkhRIgtAAIAAgQIBAAAIAAAOIgjBTg");
	this.shape_13.setTransform(7.8,-11.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgDgHQgEgGAAgHIARAAQABAFAEAEQAEADAGAAQAIAAAEgHQADgHAAgQQgCAEgHADQgFACgGAAQgIAAgHgEQgHgDgEgHQgEgGAAgLQAAgPAJgIQAIgJAQAAQATAAAHAMQAIAMAAAZQAAAQgDAMQgDALgHAGQgHAFgOABQgIgBgHgDgAgLgdQgEAFAAAHQAAAHAEAFQAEAEAHAAQAHAAAFgEQADgEAAgIQAAgHgDgFQgFgFgHAAQgHAAgEAFg");
	this.shape_14.setTransform(-0.1,-11.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqQgJgIgCgMIATAAQABAFAEAEQAFACAFAAQAIAAAEgEQAEgGAAgIQAAgIgEgEQgEgEgIAAQgFAAgDACQgEACgCAFIgSAAIAAg4IA8AAIAAAQIgrAAIAAAXQADgDAGgCQAFgCAFgBQALAAAHAFQAGAFAEAHQADAGAAAJQAAAQgJAJQgJAKgQAAQgPgBgJgHg");
	this.shape_15.setTransform(-8.575,-11.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgJQAFgIAJgFQAJgFAKAAQALAAAJAFQAIAFAFAIQAGAJAAALQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgNgPQgFAFAAAKQAAAKAFAHQAFAFAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_16.setTransform(-20.575,-10.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_17.setTransform(-27.575,-11.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAJAAALQAAAMgEAHQgFAKgIAFQgIAEgKAAQgGAAgHgDQgGgEgEgFIAAAvgAgJgkQgEADgDAFQgDAFAAAGQAAAHADAGQADAEAEACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgHgDgEQgDgFgEgDQgFgDgFABQgFgBgEADg");
	this.shape_18.setTransform(-37.6,-8.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAsQgIgFgFgIQgFgIAAgMIAAg6IATAAIAAA6QAAAJAFAFQAFAFAIAAQAJAAAFgFQAFgFAAgJIAAg6IATAAIAAA6QAAAMgFAIQgFAIgJAFQgJAEgKAAQgKAAgJgEg");
	this.shape_19.setTransform(-47.125,-11.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-54.8,-23.5,109.69999999999999,40.7), null);


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
	this.shape.setTransform(24.15,8.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgEAKgBQALABAIAEQAJAFAFAJQAGAJAAAKQAAALgGAJQgFAJgJAFQgJAFgKAAQgKAAgJgFgAgLgVQgGADgCAGQgDAFAAAHQAAAHADAHQACAFAGADQAFADAGAAQAHAAAFgDQAFgDADgFQADgHAAgHQAAgHgDgFQgDgGgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(14.375,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAmIghgzIAAAzIgPAAIAAhLIAPAAIAhAzIAAgzIAPAAIAABLg");
	this.shape_2.setTransform(6.125,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAmIAAhLIAbAAQAIAAAGADQAHADACAGQAEAFAAAHQAAAGgEAFQgCAEgHADQgGAEgIAAIgNAAIAAAdgAgMgDIAMAAQAGAAADgCQADgDAAgFQAAgMgMAAIgMAAg");
	this.shape_3.setTransform(-3.5,8.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgEAKgBQALABAIAEQAJAFAFAJQAGAJAAAKQAAALgGAJQgFAJgJAFQgJAFgKAAQgKAAgJgFgAgLgVQgGADgCAGQgDAFAAAHQAAAHADAHQACAFAGADQAFADAGAAQAHAAAFgDQAFgDADgFQADgHAAgHQAAgHgDgFQgDgGgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_4.setTransform(-11.225,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAmIAAggIgfAAIAAAgIgPAAIAAhLIAPAAIAAAfIAfAAIAAgfIAPAAIAABLg");
	this.shape_5.setTransform(-19.375,8.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAkQgGgCgDgFQgEgGgBgHIARAAQAAAFADADQADACAFAAQAEAAADgCQAEgDAAgEQAAgDgCgCIgGgEIgHgCIgMgFQgEgBgEgEQgDgFAAgGQAAgHADgGQAEgEAGgDQAFgCAIgBQALABAIAFQAGAGABAKIgQAAQgBgEgDgCQgCgDgFAAQgEAAgDACQgCADgBAEQAAADACACIAGADIAHADIAMAEQAEACAEAEQAEAEAAAHQAAAGgEAFQgDAGgGACQgGAEgIAAQgIAAgGgDg");
	this.shape_6.setTransform(-26.55,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmPBvQgUAAAAgUIAAi1QAAgUAUAAIMfAAQAUAAAAAUIAAC1QAAAUgUAAg");
	this.shape_7.setTransform(0,7.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-42,-3.1,84,22.200000000000003), null);


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

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(-150,-125,300,600), null);


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
	this.instance.setTransform(149.25,552.8,0.4138,0.4138,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({regX:0,regY:0,scaleX:1.4485,scaleY:1.4485,x:149.2,y:552.75,alpha:1},9,cjs.Ease.get(1)).wait(318));

	// Logo_Love
	this.instance_1 = new lib.Logo_Love("synched",0);
	this.instance_1.setTransform(119.05,516.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:162.55,alpha:1},9,cjs.Ease.get(1)).wait(327));

	// Logo2
	this.instance_2 = new lib.Logo2();
	this.instance_2.setTransform(5,496.85,1.4485,1.4485);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:149.85,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// The_Subaru_A_Lot_to_Love_Event_
	this.instance_3 = new lib.F4();
	this.instance_3.setTransform(287.75,97.7,1.9742,1.9742,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).to({x:149.55,alpha:1},9,cjs.Ease.get(1)).wait(62));

	// Dog_tested__Dog_approved__
	this.instance_4 = new lib.F3();
	this.instance_4.setTransform(288,97.7,1.9742,1.9742,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({x:149.75,alpha:1},9,cjs.Ease.get(1)).to({_off:true},86).wait(71));

	// The_NEW_Subaru_Crosstrek_Hybrid
	this.instance_5 = new lib.F2();
	this.instance_5.setTransform(288.05,97.7,1.9742,1.9742,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({x:149.8,alpha:1},9,cjs.Ease.get(1)).to({_off:true},66).wait(166));

	// Up_to_597_miles_per_tank_
	this.instance_6 = new lib.F1();
	this.instance_6.setTransform(287.25,93.4,1.9742,1.9742,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({regX:0.1,x:149.2,alpha:1},9,cjs.Ease.get(1)).to({_off:true},101).wait(241));

	// BG
	this.instance_7 = new lib.BG_1();
	this.instance_7.setTransform(150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9,cjs.Ease.get(1)).wait(351));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.4,0,487.1,600);


// stage content:
(lib.KSFY_220551_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Layer_1
	this.ad_animatedLayers = new lib.ad_animatedLayers("synched",0);
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(69.6,299.5,337.1,301);
// library properties:
lib.properties = {
	id: '125FDAB91C6649508DFD09A6272340B1',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"ALTL2026_Logo_HorizontalLockup.png", id:"ALTL2026_Logo_HorizontalLockup"},
		{src:"BG.jpg", id:"BG"},
		{src:"logo2.png", id:"logo2"}
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
an.compositions['125FDAB91C6649508DFD09A6272340B1'] = {
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