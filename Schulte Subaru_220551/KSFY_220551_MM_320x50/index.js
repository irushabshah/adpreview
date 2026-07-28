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
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


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
	this.instance.setTransform(-103,-12,0.4655,0.4655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2_1, new cjs.Rectangle(-103,-12,123.8,24.7), null);


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
	this.instance.setTransform(-75,-39,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-39,136.9,32.4);


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
	this.shape.setTransform(33.35,13.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_1.setTransform(28.975,9.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgpQAAgIgFgFQgEgFgIAAQgHAAgEAFQgFAFAAAIIAAApIgTAAIAAhKIATAAIAAAKQAEgGAGgCQAGgDAGAAQANAAAIAIQAJAJAAAPIAAArg");
	this.shape_2.setTransform(22.025,10.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgJAAgMQAAgKAEgJQAFgKAJgEQAIgEAKgBQALABAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOABQgJAAgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_3.setTransform(13.325,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAlIgbhKIAUAAIASA5IATg5IAUAAIgcBKg");
	this.shape_4.setTransform(5.125,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_5.setTransform(-2.425,9.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgJAAgMQAAgKAEgJQAFgKAJgEQAIgEAKgBQALABAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOABQgJAAgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_6.setTransform(-13.475,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAlIgbhKIAUAAIASA5IATg5IAUAAIgcBKg");
	this.shape_7.setTransform(-21.675,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgJAAgMQAAgKAFgJQAFgJAJgFQAJgEAKgBQALABAJAEQAIAFAFAJQAGAJAAAKQAAAMgGAJQgFAIgJAFQgJAFgKAAQgKAAgJgFgAgNgQQgFAHAAAJQAAALAFAFQAFAGAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_8.setTransform(-30.025,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_9.setTransform(-37.1,9.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgJAAgMQAAgKAFgJQAFgJAJgFQAJgEAKgBQALABAJAEQAIAFAFAJQAGAJAAAKQAAAMgGAJQgFAIgJAFQgJAFgKAAQgKAAgJgFgAgNgQQgFAHAAAJQAAALAFAFQAFAGAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_10.setTransform(-48.025,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_11.setTransform(-54.975,9.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_12.setTransform(53.675,-6.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgIQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAIAAALQAAALgGAJQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_13.setTransform(46.825,-5.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_14.setTransform(39.75,-6.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZAvIgGgSIglAAIgGASIgUAAIAihdIAVAAIAiBdgAAOAOIgOgmIgNAmIAbAAg");
	this.shape_15.setTransform(28.35,-6.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgJQgEAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_16.setTransform(15.825,-5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAKIAAAlg");
	this.shape_17.setTransform(9,-5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgKAIgEQAIgFAJABQAIAAAGACQAGAEAEAFIAAgKIATAAIAABJIgTAAIAAgLQgEAGgGADQgHADgHAAQgKABgHgFgAgIgSQgFACgDAFQgCAFAAAGQAAAHACAEQADAGAFACQAEADAEAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgEAAgEADg");
	this.shape_18.setTransform(1.2,-5.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAwQgGgEgEgFIAAALIgTAAIAAhkIATAAIAAAlQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(-7.45,-6.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgJQgEAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_20.setTransform(-16.775,-5.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAtQgIgEgFgFQgEgHAAgJIAUAAQAAAGAEADQAEAEAFAAQAHAAAEgEQAEgCAAgGQAAgEgDgCQgDgEgDgBIgKgDIgPgGQgGgBgEgGQgEgFAAgJQAAgJAEgGQAEgGAIgDQAIgDAJAAQAOgBAJAIQAJAHABANIgVAAQAAgGgEgCQgEgEgFAAQgGAAgDADQgDADAAAGQAAADACACQADADADACIAKADQAJADAGADQAGABAEAGQAEAGAAAIQAAAHgEAHQgEAHgHAEQgIADgKAAQgJABgIgEg");
	this.shape_21.setTransform(-25.225,-6.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgIQAFgKAJgEQAIgFAKABQALgBAJAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_22.setTransform(-36.725,-5.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_23.setTransform(-45.275,-6.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAvIAAhOIgYAAIAAgPIBDAAIAAAPIgZAAIAABOg");
	this.shape_24.setTransform(-53.65,-6.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F4, new cjs.Rectangle(-60.4,-18.7,119.9,40.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(46.8,10.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgJAIgFQAHgEAKAAQAHAAAHADQAGADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgGADgIAAQgKAAgHgFgAgIgGQgFACgDAEQgCAFAAAHQAAAHACAFQADAFAFADQAEACAEAAQAGAAAEgCQAEgDAEgFQACgFAAgHQAAgHgCgFQgEgEgEgCQgEgDgGAAQgEAAgEADg");
	this.shape_1.setTransform(40.25,6.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_2.setTransform(31.775,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAmIgbhLIAUAAIASA5IATg5IAUAAIgcBLg");
	this.shape_3.setTransform(23.525,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgLAFgJQAFgIAJgFQAJgFAKAAQALAAAJAFQAIAFAFAIQAGAJAAALQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_4.setTransform(15.175,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgGAFgDQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_5.setTransform(8.45,8.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAJAAALQAAALgFAIQgEAKgIAFQgIAEgJAAQgIAAgGgDQgHgEgDgFIAAAvgAgJgkQgEADgEAFQgCAFAAAGQAAAHACAFQAEAFAEACQAFADAEAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgHgDgEQgCgFgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_6.setTransform(1.15,9.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAEAJQAFAJAAALQAAALgFAIQgEAKgIAFQgIAEgKAAQgGAAgHgDQgGgEgEgFIAAAvgAgJgkQgEADgDAFQgDAFAAAGQAAAHADAFQADAFAEACQAEADAFAAQAFAAAFgDQAEgCACgFQAEgFAAgHQAAgHgEgEQgCgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(-8,9.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgKQAFgIAIgFQAIgFAJAAQAHAAAHAEQAGADAEAFIAAgLIATAAIAABLIgTAAIAAgLQgEAFgGAEQgGADgIAAQgJgBgIgEgAgIgTQgFADgDAFQgDAFABAGQgBAHADAFQADAFAFADQAEACAEAAQAFAAAFgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgDQgFgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(-17.6,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAxQgLgHgBgNIATAAQACAFAEADQAFADAGAAQAJAAAFgFQAFgFAAgKIAAgLQgEAFgGADQgHADgGABQgKgBgIgEQgIgFgFgJQgEgIAAgLQAAgLAEgKQAFgIAIgFQAIgFAKAAQAGAAAHAEQAGADAEAFIAAgLIATAAIAABLQAAAKgEAJQgFAIgHAEQgJAGgMAAQgPgBgKgHgAgJglQgEADgDAFQgCAFgBAHQABAHACAFQADAFAEACQAFACAEAAQAGAAAEgCQAEgCADgFQADgFAAgHQAAgHgDgFQgDgFgEgDQgEgCgGAAQgEAAgFACg");
	this.shape_9.setTransform(-29.9,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgLAFgJQAFgIAJgFQAJgFAKAAQALAAAJAFQAIAFAFAIQAGAJAAALQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(-38.575,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAiAAQAOAAALAGQALAFAGALQAHALgBANQABAOgHALQgGALgLAFQgLAGgOAAgAgWAfIAOAAQAOAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgOAAIgOAAg");
	this.shape_11.setTransform(-47.5,7.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(23.3,-5.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgJAIgFQAIgEAKAAQAGAAAGADQAHADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgHADgGAAQgKAAgIgFgAgJgGQgEACgDAEQgCAFAAAHQAAAHACAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_13.setTransform(16.8,-8.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgJAAgMQAAgKAEgKQAFgJAJgEQAIgEAKgBQALABAJAEQAIAEAFAJQAEAIAAALIAAAGIg2AAQABAJAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOABQgJAAgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_14.setTransform(8.275,-7.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_15.setTransform(1.475,-8.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgDgGQgFgFAAgHIATAAQABAEADADQAEADAFAAQAFAAADgCQADgCAAgEQAAgEgEgBIgLgFIgNgDQgGgCgDgEQgEgFgBgHQAAgGAEgGQAEgFAGgDQAHgCAIgBQAOABAHAGQAJAGAAAMIgSAAQAAgEgDgDQgEgDgFABQgFgBgCACQgDACAAAEQAAADAEACIAKAEIAOAEQAFACAEAEQAEAFAAAHQAAAHgDAFQgEAFgHADQgGADgJAAQgJAAgHgEg");
	this.shape_16.setTransform(-4.75,-7.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgJAAgMQAAgKAEgKQAFgJAJgEQAIgEAKgBQALABAJAEQAIAEAFAJQAEAIAAALIAAAGIg2AAQABAJAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOABQgJAAgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_17.setTransform(-12.575,-7.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_18.setTransform(-19.375,-8.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAxQgLgHgBgNIATAAQACAFAEADQAFADAGAAQAJAAAFgFQAFgFAAgKIAAgMQgEAGgGADQgHAEgGAAQgKAAgIgFQgIgFgFgJQgEgIAAgMQAAgKAEgKQAFgJAIgEQAIgEAKgBQAGAAAHADQAGAEAEAFIAAgLIATAAIAABLQAAAKgEAJQgFAIgHAEQgJAFgMABQgPAAgKgIgAgJglQgEADgDAFQgCAFgBAGQABAHACAGQADAEAEADQAFACAEAAQAGAAAEgCQAEgCADgFQADgFAAgHQAAgHgDgFQgDgFgEgDQgEgCgGAAQgEAAgFACg");
	this.shape_19.setTransform(-29.9,-5.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgJAAgMQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAAMgGAJQgFAIgJAFQgJAFgKAAQgKAAgJgFgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_20.setTransform(-38.575,-7.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAiAAQAOAAALAGQALAFAGALQAHALgBANQABAOgHALQgGALgLAFQgLAGgOAAgAgWAfIAOAAQAOAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgOAAIgOAAg");
	this.shape_21.setTransform(-47.5,-8.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-55.5,-21.1,110.4,40.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgJAIgFQAIgEAKAAQAGAAAGADQAHADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgHADgGAAQgKAAgIgFgAgJgGQgEACgDAEQgCAFAAAHQAAAHACAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape.setTransform(51.9,7.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA1IAAhKIASAAIAABKgAgHghQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAAEADQACADAAAFQAAAFgCADQgEADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(45.75,7.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAGgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAKIAAAlg");
	this.shape_2.setTransform(41.45,8.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgFACgCAEQgDAFAAAHQAAAHADAFQACAFAFADQAFACAEAAQAFAAAFgCQAEgDADgFQACgFAAgHQAAgHgCgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_3.setTransform(34.15,7.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA3IAQglIgehIIAVAAIATA0IATg0IAUAAIgtBtg");
	this.shape_4.setTransform(25.175,10.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAvIAAgoIgnAAIAAAoIgTAAIAAhdIATAAIAAAnIAnAAIAAgnIATAAIAABdg");
	this.shape_5.setTransform(16.275,7.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAyIgYggIAAAgIgTAAIAAhjIATAAIAAA4IAYgfIAYAAIghAlIAiAlg");
	this.shape_6.setTransform(4.7,7.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgJAAgMQAAgKAEgKQAFgJAJgEQAIgEAKAAQALAAAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOABQgJAAgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_7.setTransform(-3.825,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQACgHAHgCQAFgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAKIAAAlg");
	this.shape_8.setTransform(-10.4,8.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_9.setTransform(-16.075,7.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgDgGQgFgFAAgHIATAAQABAEADADQAEADAFAAQAFAAADgCQADgCAAgEQAAgDgEgDIgLgEIgNgDQgGgDgDgDQgEgEgBgJQAAgFAEgGQAEgFAGgDQAHgCAIAAQAOAAAHAGQAJAHAAALIgSAAQAAgEgDgDQgEgCgFAAQgFAAgCABQgDACAAADQAAAEAEACIAKAEIAOAFQAFABAEAEQAEAFAAAHQAAAGgDAGQgEAFgHADQgGADgJAAQgJgBgHgDg");
	this.shape_10.setTransform(-22.3,8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgEgGQgEgFAAgHIATAAQAAAEAEADQAEADAEAAQAGAAADgCQADgCAAgEQAAgDgEgDIgKgEIgPgDQgFgDgEgDQgDgEAAgJQgBgFAEgGQAEgFAGgDQAHgCAIAAQAOAAAHAGQAIAHABALIgSAAQAAgEgEgDQgDgCgFAAQgEAAgEABQgCACAAADQAAAEADACIAMAEIANAFQAFABAEAEQAEAFAAAHQAAAGgEAGQgDAFgHADQgGADgKAAQgHgBgIgDg");
	this.shape_11.setTransform(-29.65,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgJAAgMQAAgKAFgKQAFgIAJgFQAJgEAKAAQALAAAJAEQAIAFAFAIQAGAKAAAKQAAAMgGAJQgFAIgJAFQgJAFgKAAQgKAAgJgFgAgNgQQgFAHAAAJQAAALAFAFQAFAGAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_12.setTransform(-37.575,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAKIAAAlg");
	this.shape_13.setTransform(-44.3,8.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAqQgKgGgHgLQgGgLAAgOQAAgNAGgLQAHgLAKgGQALgGAMAAQAQAAAMAIQAMAIAFAOIgVAAQgEgGgGgEQgGgDgIAAQgGAAgHADQgGAEgEAHQgDAIgBAIQABAJADAHQAEAIAGADQAHAFAGAAQAIAAAGgEQAGgDAEgIIAVAAQgFAPgMAIQgMAJgQAAQgMAAgLgHg");
	this.shape_14.setTransform(-52.6,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgJQgEAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_15.setTransform(49.775,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAKIAAAlg");
	this.shape_16.setTransform(43,-7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgKAIgEQAIgFAKABQAGAAAHACQAGAEAEAFIAAgKIATAAIAABJIgTAAIAAgKQgDAFgHADQgGADgIAAQgJABgIgFgAgIgSQgFACgDAFQgDAFABAGQgBAHADAEQADAGAFACQAEADAEAAQAFAAAFgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgFgDgFAAQgEAAgEADg");
	this.shape_17.setTransform(35.15,-7.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAHAAAMQAAALgFAJQgEAJgIAFQgIAFgJAAQgIAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDACgFQAEgFAAgHQAAgHgEgFQgCgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_18.setTransform(26.55,-8.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgJQgEAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_19.setTransform(17.225,-7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAtQgIgEgFgFQgEgHAAgJIAUAAQAAAGAEADQAEAEAFAAQAHAAAEgEQAEgCAAgGQAAgEgDgCQgDgEgDgBIgKgDIgPgGQgGgBgEgGQgEgFAAgJQAAgJAEgFQAEgHAIgDQAIgDAJAAQAOgBAJAIQAJAHABANIgVAAQAAgGgEgCQgEgEgFAAQgGAAgDADQgDADAAAGQAAADACACQADADADACIAKADQAJADAGADQAGABAEAGQAEAGAAAIQAAAHgEAHQgEAHgHAEQgIADgKAAQgJABgIgEg");
	this.shape_20.setTransform(8.725,-8.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAvIgShCIgSBCIgWAAIgZhdIAUAAIARBIIAThIIAUAAIASBIIARhIIAUAAIgaBdg");
	this.shape_21.setTransform(-5.525,-8.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_22.setTransform(-15.925,-8.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAvIgphAIAABAIgTAAIAAhdIATAAIApBAIAAhAIATAAIAABdg");
	this.shape_23.setTransform(-24.525,-8.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgIQAFgKAJgEQAIgFAKABQALgBAJAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_24.setTransform(-36.875,-7.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_25.setTransform(-45.425,-8.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAvIAAhOIgZAAIAAgPIBEAAIAAAPIgZAAIAABOg");
	this.shape_26.setTransform(-53.8,-8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-60.6,-20.5,120.5,40.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(6.65,9.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAyIgYggIAAAgIgTAAIAAhjIATAAIAAA4IAYgfIAYAAIghAlIAhAlg");
	this.shape_1.setTransform(1.45,5.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhKIATAAIAAAJQAEgEAGgDQAGgDAGAAQANAAAIAIQAJAJAAAPIAAArg");
	this.shape_2.setTransform(-7.375,6.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgKAIgEQAHgFAKABQAIAAAGACQAGAEAEAFIAAgKIATAAIAABJIgTAAIAAgLQgDAGgHAEQgGACgIAAQgJABgIgFgAgJgSQgEACgDAFQgDAFAAAGQAAAHADAEQADAGAEACQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_3.setTransform(-16.65,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_4.setTransform(-23.625,5.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAGgEAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAKIAAAlg");
	this.shape_5.setTransform(-31.8,6.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgIQAFgKAJgEQAIgFAKABQALgBAJAFQAIAFAFAIQAEAJAAALIAAAGIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(-38.975,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgFAHgEQAGgDAIAAQAJAAAIAFQAIAEAEAJQAFAIAAAMQAAALgFAJQgEAIgIAFQgIAFgJAAQgIAAgGgDQgHgDgDgFIAAAugAgJgkQgEADgEAEQgCAGAAAHQAAAGACAGQAEAEAEACQAFACAEAAQAFAAAEgCQAFgCACgFQADgFAAgHQAAgGgDgGQgCgEgFgDQgEgCgFgBQgEABgFACg");
	this.shape_7.setTransform(-47.45,8.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAkQgHgEgEgFQgFgHAAgGIATAAQABAEADADQAEADAFAAQAFAAADgDQADgCAAgDQAAgDgEgDIgLgDIgNgFQgGgCgDgDQgFgEAAgJQABgFADgFQADgGAIgDQAGgCAIAAQANgBAJAHQAHAGACAMIgTAAQAAgFgEgCQgDgCgFgBQgEABgDABQgDACAAADQAAAEAEACIALAEIANAFQAFABAEAEQAEAFAAAHQAAAHgDAFQgEAFgHADQgHADgIgBQgIAAgIgCg");
	this.shape_8.setTransform(47.7,-9.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgJAAgLQAAgLAEgIQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAFIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJAAgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_9.setTransform(39.875,-9.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAyIAAhjIASAAIAABjg");
	this.shape_10.setTransform(33.9,-10.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA1IAAhKIASAAIAABKgAgIghQgCgDAAgFQAAgFACgDQAEgDAEAAQAFAAAEADQACADAAAFQAAAFgCADQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(30.2,-10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArAmIAAgoQAAgKgEgEQgFgEgIAAQgHAAgFAEQgFAEABAKIAAAoIgSAAIAAgoQAAgKgFgEQgFgEgHAAQgIAAgFAEQgEAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgEAFgEQAGgCAHAAQAJAAAGADQAHAFADAGQAEgGAHgEQAHgEAIAAQAOAAAJAIQAIAJAAAPIAAArg");
	this.shape_12.setTransform(21.35,-9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAxIAkhRIgtAAIAAgQIBAAAIAAAOIgjBTg");
	this.shape_13.setTransform(7.35,-10.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgDgHQgEgGAAgHIARAAQABAFAEAEQAEADAGAAQAIAAAEgHQADgHAAgQQgCAEgHADQgFACgGAAQgIAAgHgEQgHgDgEgHQgEgGAAgLQAAgPAJgIQAIgKAQABQATAAAHAMQAIAMAAAZQAAAQgDAMQgDALgHAGQgHAFgOAAQgIAAgHgDgAgLgdQgEAEAAAIQAAAHAEAFQAEAFAHgBQAHABAFgFQADgEAAgIQAAgHgDgFQgFgFgHABQgHgBgEAFg");
	this.shape_14.setTransform(-0.55,-10.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqQgJgIgCgMIATAAQABAFAEAEQAFACAFAAQAIAAAEgEQAEgGAAgIQAAgIgEgEQgEgEgIAAQgFAAgDACQgEACgCAFIgSAAIAAg5IA8AAIAAARIgrAAIAAAXQADgDAGgCQAFgCAFAAQALgBAHAFQAGAFAEAHQADAGAAAJQAAAQgJAJQgJAJgQAAQgPAAgJgHg");
	this.shape_15.setTransform(-9.025,-10.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgIQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAIAAALQAAALgGAJQgFAJgJAFQgJAEgKAAQgKAAgJgEgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_16.setTransform(-21.025,-9.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_17.setTransform(-27.975,-10.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAFQAIAEAFAJQAEAIAAAMQAAAMgEAIQgFAIgIAFQgIAFgKAAQgGAAgHgDQgGgDgEgGIAAAvgAgJgkQgEADgDAEQgDAFAAAHQAAAHADAGQADAEAEACQAEACAFABQAFgBAFgCQAEgCADgFQADgFAAgHQAAgHgDgFQgDgEgEgDQgFgDgFABQgFgBgEADg");
	this.shape_18.setTransform(-38.05,-7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAsQgIgFgFgIQgFgIAAgMIAAg6IATAAIAAA6QAAAJAFAFQAFAFAIAAQAJAAAFgFQAFgFAAgJIAAg6IATAAIAAA6QAAAMgFAIQgFAIgJAFQgJAEgKAAQgKAAgJgEg");
	this.shape_19.setTransform(-47.575,-10.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-55.2,-22.5,109.80000000000001,40.7), null);


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
	this.shape.setTransform(24.15,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAIAFQAJAFAFAJQAGAJAAAKQAAALgGAJQgFAJgJAFQgJAFgKgBQgKABgJgFgAgLgVQgGADgCAGQgDAFAAAHQAAAHADAHQACAFAGADQAFADAGAAQAHAAAFgDQAFgDADgFQADgHAAgHQAAgHgDgFQgDgGgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_1.setTransform(14.375,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAmIghgzIAAAzIgPAAIAAhLIAPAAIAhAzIAAgzIAPAAIAABLg");
	this.shape_2.setTransform(6.125,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAmIAAhLIAbAAQAIAAAGADQAHADACAGQAEAFAAAHQAAAGgEAFQgCAEgHADQgGAEgIAAIgNAAIAAAdgAgMgDIAMAAQAGAAADgCQADgDAAgFQAAgMgMAAIgMAAg");
	this.shape_3.setTransform(-3.5,0.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAIAFQAJAFAFAJQAGAJAAAKQAAALgGAJQgFAJgJAFQgJAFgKgBQgKABgJgFgAgLgVQgGADgCAGQgDAFAAAHQAAAHADAHQACAFAGADQAFADAGAAQAHAAAFgDQAFgDADgFQADgHAAgHQAAgHgDgFQgDgGgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_4.setTransform(-11.225,0.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAmIAAggIgfAAIAAAgIgPAAIAAhLIAPAAIAAAfIAfAAIAAgfIAPAAIAABLg");
	this.shape_5.setTransform(-19.375,0.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAkQgGgDgDgFQgEgFgBgHIARAAQAAAFADADQADADAFAAQAEgBADgCQAEgDAAgEQAAgEgCgCIgGgDIgHgCIgMgFQgEgBgEgFQgDgDAAgIQAAgGADgFQAEgFAGgDQAFgDAIABQALgBAIAGQAGAFABALIgQAAQgBgEgDgDQgCgCgFAAQgEAAgDACQgCACgBAFQAAADACACIAGADIAHADIAMAEQAEACAEAEQAEAEAAAHQAAAGgEAFQgDAFgGAEQgGACgIAAQgIAAgGgCg");
	this.shape_6.setTransform(-26.55,0.05);

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

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(-150,-125,320,50), null);


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
	this.frame_434 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(434).call(this.frame_434).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(271.5,25.1,0.6,0.6,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(373).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(53));

	// Layer_2
	this.instance_1 = new lib.Logo_Love("synched",0);
	this.instance_1.setTransform(214,24.45,0.576,0.576,0,0,0,-0.7,-28.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(364).to({_off:false},0).to({x:184,alpha:1},9,cjs.Ease.get(1)).wait(62));

	// Logo2
	this.instance_2 = new lib.Logo2_1();
	this.instance_2.setTransform(11.45,27.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(359).to({_off:false},0).to({x:111.45,alpha:1},9,cjs.Ease.get(1)).wait(67));

	// The_Subaru_A_Lot_to_Love_Event_
	this.instance_3 = new lib.F4();
	this.instance_3.setTransform(140.35,25.2,0.9222,0.9222);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).to({x:75.8,alpha:1},9,cjs.Ease.get(1)).to({_off:true},61).wait(76));

	// Dog_tested__Dog_approved__
	this.instance_4 = new lib.F3();
	this.instance_4.setTransform(135.8,25.2,0.9222,0.9222);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({x:71.25,alpha:1},9,cjs.Ease.get(1)).to({_off:true},86).wait(146));

	// The_NEW_Subaru_Crosstrek_Hybrid
	this.instance_5 = new lib.F2();
	this.instance_5.setTransform(140.6,25.3,0.9222,0.9222,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({regX:0,regY:0,x:75.95,y:25.2,alpha:1},9,cjs.Ease.get(1)).to({_off:true},66).wait(241));

	// Up_to_597_miles_per_tank_
	this.instance_6 = new lib.F1();
	this.instance_6.setTransform(135.55,25.2,0.9222,0.9222);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({regX:0.1,regY:0.1,x:71.05,y:25.3,alpha:1},9,cjs.Ease.get(1)).to({_off:true},101).wait(316));

	// BG
	this.instance_7 = new lib.BG_1();
	this.instance_7.setTransform(150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9,cjs.Ease.get(1)).to({_off:true},350).wait(76));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(435));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,0,411.5,50);


// stage content:
(lib.KSFY_220551_MM_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(435));

	// ad_animated_layers
	this.ad_animatedLayers = new lib.ad_animatedLayers("synched",0);
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(435));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(68.5,24.5,252,26);
// library properties:
lib.properties = {
	id: 'FC6BD045346D4FFF93D22CB35183B1BE',
	width: 320,
	height: 50,
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
an.compositions['FC6BD045346D4FFF93D22CB35183B1BE'] = {
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