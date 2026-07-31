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
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


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
	this.instance.setTransform(-85,-19,1.0108,1.0108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-85,-19,168,30.5), null);


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
	this.shape.setTransform(33.35,10.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_1.setTransform(28.975,7.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgoQAAgKgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAKIAAAoIgTAAIAAhKIATAAIAAAJQAEgEAGgEQAGgCAGAAQANAAAIAIQAJAJAAAPIAAArg");
	this.shape_2.setTransform(22.025,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_3.setTransform(13.325,8.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAlIgbhJIAUAAIASA4IATg4IAUAAIgcBJg");
	this.shape_4.setTransform(5.125,8.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_5.setTransform(-2.425,7.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgFAKABQALgBAJAFQAIAEAFAJQAEAJAAALIAAAGIg2AAQABAIAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOgBQgJABgJgFgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(-13.475,8.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAlIgbhJIAUAAIASA4IATg4IAUAAIgcBJg");
	this.shape_7.setTransform(-21.675,8.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_8.setTransform(-30.025,8.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_9.setTransform(-37.1,7.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgFAKABQALgBAJAFQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAHQAFAFAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_10.setTransform(-48.025,8.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_11.setTransform(-54.975,7.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_12.setTransform(53.675,-10.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgLAFgJQAFgIAJgFQAJgFAKAAQALAAAJAFQAIAFAFAIQAGAJAAALQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_13.setTransform(46.825,-9.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIATAAIAABOIAeAAIAAAPg");
	this.shape_14.setTransform(39.75,-10.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZAvIgGgSIglAAIgGASIgUAAIAihdIAVAAIAiBdgAAOAOIgOgmIgNAmIAbAAg");
	this.shape_15.setTransform(28.35,-10.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_16.setTransform(15.825,-9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgGAFgDQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAJIAAAmg");
	this.shape_17.setTransform(9,-9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgKQAFgIAIgFQAIgFAJAAQAIAAAGAEQAGADAEAFIAAgLIATAAIAABLIgTAAIAAgLQgEAFgGAEQgHADgHAAQgKgBgHgEgAgIgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFADQAEACAEAAQAGAAAEgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgDQgEgCgGAAQgEAAgEACg");
	this.shape_18.setTransform(1.2,-9.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAwQgGgEgEgFIAAALIgTAAIAAhkIATAAIAAAlQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_19.setTransform(-7.45,-10.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAiQgHgDgEgIQgEgHAAgKIAAgrIATAAIAAApQAAAIAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgIIAAgpIATAAIAABKIgTAAIAAgKQgEAFgGADQgGADgFAAQgJAAgHgEg");
	this.shape_20.setTransform(-16.775,-9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAtQgIgDgFgHQgEgGAAgIIAUAAQAAAFAEAEQAEADAFAAQAHAAAEgDQAEgDAAgFQAAgFgDgDQgDgDgDgBIgKgDIgPgFQgGgCgEgFQgEgGAAgJQAAgJAEgFQAEgHAIgDQAIgDAJgBQAOABAJAHQAJAHABAMIgVAAQAAgFgEgDQgEgCgFAAQgGgBgDADQgDADAAAFQAAAEACADQADADADABIAKAEQAJACAGADQAGABAEAGQAEAGAAAIQAAAHgEAHQgEAHgHADQgIAFgKAAQgJgBgIgDg");
	this.shape_21.setTransform(-25.225,-10.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgLAEgJQAFgIAJgFQAIgFAKAAQALAAAJAFQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAGQgJAIgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_22.setTransform(-36.725,-9.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_23.setTransform(-45.275,-10.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAvIAAhOIgYAAIAAgPIBDAAIAAAPIgZAAIAABOg");
	this.shape_24.setTransform(-53.65,-10.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F4, new cjs.Rectangle(-60.4,-22.7,119.9,42.2), null);


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
	this.shape.setTransform(46.8,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgEgJQgFgJAAgLQAAgLAFgIQAEgJAIgFQAHgEAKAAQAHAAAHADQAGADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgGADgIAAQgKAAgHgFgAgIgGQgFACgDAEQgCAFAAAHQAAAHACAFQADAFAFADQAEACAEAAQAGAAAEgCQAEgDAEgFQACgFAAgHQAAgHgCgFQgEgEgEgCQgEgDgGAAQgEAAgEADg");
	this.shape_1.setTransform(40.25,6.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_2.setTransform(31.775,7.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAmIgbhLIAUAAIASA5IATg5IAUAAIgcBLg");
	this.shape_3.setTransform(23.525,7.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_4.setTransform(15.175,7.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAFgEQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAKIAAAlg");
	this.shape_5.setTransform(8.45,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAJAAALQAAAMgFAHQgEAJgIAGQgIAEgJAAQgIAAgGgDQgHgEgDgEIAAAugAgJgkQgEADgEAFQgCAEAAAIQAAAGACAFQAEAFAEACQAFACAEAAQAFAAAEgCQAFgCACgFQADgFAAgHQAAgGgDgFQgCgFgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_6.setTransform(1.15,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAEQAIAFAEAJQAFAJAAALQAAAMgFAHQgEAJgIAGQgIAEgKAAQgGAAgHgDQgGgEgEgEIAAAugAgJgkQgEADgDAFQgDAEAAAIQAAAGADAFQADAFAEACQAEACAFAAQAFAAAFgCQAEgCACgFQAEgFAAgHQAAgGgEgFQgCgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(-8,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgKQAFgIAIgFQAIgEAJgBQAHAAAHAEQAGADAEAFIAAgLIATAAIAABLIgTAAIAAgMQgEAGgGADQgGAEgIAAQgJgBgIgEgAgIgTQgFADgDAFQgDAFABAGQgBAGADAGQADAEAFAEQAEACAEAAQAFAAAFgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgDQgFgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(-17.6,7.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAxQgLgHgBgNIATAAQACAFAEADQAFADAGAAQAJAAAFgFQAFgFAAgKIAAgMQgEAGgGADQgHADgGABQgKgBgIgEQgIgFgFgJQgEgIAAgMQAAgKAEgKQAFgIAIgFQAIgEAKgBQAGAAAHAEQAGADAEAFIAAgLIATAAIAABLQAAAKgEAJQgFAIgHAEQgJAGgMAAQgPAAgKgIgAgJglQgEADgDAFQgCAFgBAGQABAHACAGQADAEAEADQAFACAEAAQAGAAAEgCQAEgCADgFQADgFAAgHQAAgHgDgFQgDgFgEgDQgEgCgGAAQgEAAgFACg");
	this.shape_9.setTransform(-29.9,9.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(-38.575,7.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAiAAQAOAAALAGQALAFAGALQAHALgBANQABAOgHALQgGALgLAFQgLAGgOAAgAgWAfIAOAAQAOAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgOAAIgOAAg");
	this.shape_11.setTransform(-47.5,6.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(23.3,-7.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAuQgIgFgFgJQgEgJAAgLQAAgLAEgIQAFgJAIgFQAIgEAKAAQAGAAAGADQAHADAEAFIAAgkIATAAIAABkIgTAAIAAgLQgDAFgHAEQgHADgGAAQgKAAgIgFgAgJgGQgEACgDAEQgCAFAAAHQAAAHACAFQADAFAEADQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgHgDgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_13.setTransform(16.8,-10.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgEAKAAQALAAAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_14.setTransform(8.275,-9.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_15.setTransform(1.475,-10.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgDgGQgFgFAAgHIATAAQABAEADADQAEADAFAAQAFAAADgCQADgDAAgDQAAgEgEgCIgLgDIgNgFQgGgBgDgEQgEgEgBgJQAAgGAEgFQAEgFAGgDQAHgDAIABQAOAAAHAGQAJAHAAALIgSAAQAAgEgDgDQgEgCgFAAQgFAAgCABQgDACAAADQAAAEAEACIAKAEIAOAFQAFABAEAEQAEAEAAAIQAAAGgDAGQgEAFgHADQgGACgJAAQgJAAgHgDg");
	this.shape_16.setTransform(-4.75,-9.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgEAKAAQALAAAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_17.setTransform(-12.575,-9.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_18.setTransform(-19.375,-10.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAxQgLgHgBgOIATAAQACAGAEADQAFADAGAAQAJAAAFgFQAFgFAAgKIAAgMQgEAFgGAEQgHADgGAAQgKABgIgFQgIgFgFgJQgEgIAAgMQAAgKAEgJQAFgKAIgEQAIgEAKAAQAGAAAHACQAGAEAEAFIAAgLIATAAIAABLQAAALgEAHQgFAJgHAFQgJAEgMAAQgPABgKgIgAgJgkQgEACgDAFQgCAFgBAGQABAIACAEQADAGAEABQAFADAEAAQAGAAAEgDQAEgBADgFQADgFAAgHQAAgHgDgFQgDgFgEgCQgEgDgGAAQgEAAgFADg");
	this.shape_19.setTransform(-29.9,-7.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgEAKAAQALAAAJAEQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAGQAFAGAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_20.setTransform(-38.575,-9.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAvIAAhdIAiAAQAOAAALAGQALAFAGALQAHALgBANQABAOgHALQgGALgLAFQgLAGgOAAgAgWAfIAOAAQAOAAAHgIQAJgIAAgPQAAgOgJgIQgHgIgOAAIgOAAg");
	this.shape_21.setTransform(-47.5,-10.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-55.5,-23.1,110.4,42.2), null);


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
	this.shape.setTransform(51.9,6.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA1IAAhKIASAAIAABKgAgHghQgDgEAAgEQAAgFADgDQADgDAEAAQAFAAAEADQACADAAAFQAAAEgCAEQgEADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(45.75,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAGgEQAFgDAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAKIAAAlg");
	this.shape_2.setTransform(41.45,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAHgDAGAAQAKAAAIAEQAIAFAFAJQAEAHAAAMQAAALgEAJQgFAJgIAFQgIAFgKAAQgHAAgGgDgAgJgGQgFACgCAEQgDAFAAAHQAAAHADAFQACAFAFADQAFACAEAAQAFAAAFgCQAEgDADgFQACgFAAgHQAAgHgCgFQgDgEgEgCQgFgDgFAAQgEAAgFADg");
	this.shape_3.setTransform(34.15,6.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZA3IAQglIgehIIAVAAIATA0IATg0IAUAAIgtBtg");
	this.shape_4.setTransform(25.175,9.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAvIAAgoIgnAAIAAAoIgTAAIAAhdIATAAIAAAnIAnAAIAAgnIATAAIAABdg");
	this.shape_5.setTransform(16.275,6.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAyIgYggIAAAgIgTAAIAAhjIATAAIAAA4IAYgfIAYAAIghAlIAiAlg");
	this.shape_6.setTransform(4.7,6.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_7.setTransform(-3.825,7.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQACgFAHgEQAFgDAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAKIAAAlg");
	this.shape_8.setTransform(-10.4,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_9.setTransform(-16.075,6.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgDgGQgFgGAAgGIATAAQABAEADADQAEADAFAAQAFAAADgCQADgCAAgEQAAgDgEgCIgLgFIgNgDQgGgCgDgEQgEgFgBgHQAAgGAEgGQAEgFAGgDQAHgCAIgBQAOABAHAGQAJAHAAALIgSAAQAAgEgDgDQgEgDgFABQgFgBgCACQgDACAAAEQAAADAEACIAKAEIAOAEQAFACAEAEQAEAFAAAHQAAAHgDAFQgEAFgHADQgGACgJABQgJAAgHgEg");
	this.shape_10.setTransform(-22.3,7.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgEgGQgEgGAAgGIATAAQAAAEAEADQAEADAEAAQAGAAADgCQADgCAAgEQAAgDgEgCIgKgFIgPgDQgFgCgEgEQgDgFAAgHQgBgGAEgGQAEgFAGgDQAHgCAIgBQAOABAHAGQAIAHABALIgSAAQAAgEgEgDQgDgDgFABQgEgBgEACQgCACAAAEQAAADADACIAMAEIANAEQAFACAEAEQAEAFAAAHQAAAHgEAFQgDAFgHADQgGACgKABQgHAAgIgEg");
	this.shape_11.setTransform(-29.65,7.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgIQgFgKAAgLQAAgKAFgKQAFgIAJgFQAJgEAKgBQALABAJAEQAIAFAFAIQAGAKAAAKQAAALgGAKQgFAIgJAFQgJAEgKABQgKgBgJgEgAgNgPQgFAFAAAKQAAALAFAFQAFAGAIAAQAFAAAEgCQAFgDACgFQADgFAAgHQAAgKgGgFQgFgGgIAAQgHAAgGAGg");
	this.shape_12.setTransform(-37.575,7.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAFgEQAHgDAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAKIAAAlg");
	this.shape_13.setTransform(-44.3,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAqQgKgGgHgLQgGgLAAgOQAAgNAGgLQAHgLAKgGQALgGAMAAQAQAAAMAIQAMAIAFAOIgVAAQgEgGgGgEQgGgDgIAAQgGAAgHADQgGAFgEAHQgDAGgBAJQABAKADAGQAEAIAGADQAHAFAGAAQAIgBAGgDQAGgDAEgIIAVAAQgFAPgMAIQgMAJgQAAQgMgBgLgGg");
	this.shape_14.setTransform(-52.6,6.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgJQgEAEgGADQgGADgFAAQgJAAgHgEg");
	this.shape_15.setTransform(49.775,-9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAAMQADgHAFgCQAHgEAHAAIAAAUIgFAAQgJAAgEAEQgEAEAAAKIAAAlg");
	this.shape_16.setTransform(43,-9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgFgJQgEgJAAgLQAAgKAEgJQAFgKAIgEQAIgEAKAAQAGAAAHACQAGAEAEAFIAAgLIATAAIAABKIgTAAIAAgLQgDAGgHADQgGADgIAAQgJABgIgFgAgIgSQgFACgDAFQgDAFABAGQgBAHADAEQADAGAFACQAEADAEAAQAFAAAFgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgFgDgFAAQgEAAgEADg");
	this.shape_17.setTransform(35.15,-9.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAwQgHgEgDgFIAAALIgTAAIAAhkIATAAIAAAlQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAHAAAMQAAALgFAJQgEAJgIAFQgIAFgJAAQgIAAgGgDgAgJgGQgEACgDAEQgDAFAAAHQAAAHADAFQADAFAEADQAEACAFAAQAFAAAFgCQAEgDACgFQAEgFAAgHQAAgHgEgFQgCgEgEgCQgFgDgFAAQgFAAgEADg");
	this.shape_18.setTransform(26.55,-10.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAiQgHgEgEgHQgEgHAAgKIAAgrIATAAIAAAoQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgoIATAAIAABKIgTAAIAAgJQgEAEgGADQgGADgFAAQgJAAgHgEg");
	this.shape_19.setTransform(17.225,-9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAtQgIgEgFgGQgEgGAAgJIAUAAQAAAGAEADQAEAEAFAAQAHAAAEgEQAEgCAAgGQAAgEgDgCQgDgEgDgBIgKgDIgPgGQgGgBgEgGQgEgFAAgJQAAgIAEgHQAEgGAIgDQAIgEAJABQAOgBAJAIQAJAHABANIgVAAQAAgGgEgCQgEgDgFgBQgGAAgDADQgDADAAAGQAAADACACQADAEADABIAKADQAJADAGADQAGACAEAFQAEAGAAAIQAAAHgEAHQgEAHgHADQgIAEgKAAQgJAAgIgDg");
	this.shape_20.setTransform(8.725,-10.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAvIgShCIgSBCIgWAAIgZhdIAUAAIARBIIAThIIAUAAIASBIIARhIIAUAAIgaBdg");
	this.shape_21.setTransform(-5.525,-10.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIA1AAIAAAPIgiAAIAAAYIAeAAIAAAOIgeAAIAAAZIAiAAIAAAPg");
	this.shape_22.setTransform(-15.925,-10.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAVAvIgphAIAABAIgTAAIAAhdIATAAIApBAIAAhAIATAAIAABdg");
	this.shape_23.setTransform(-24.525,-10.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgEAKAAQALAAAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_24.setTransform(-36.875,-9.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAyIAAgpQAAgJgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAJIAAApIgTAAIAAhjIATAAIAAAjQAEgFAGgDQAGgDAGAAQAJAAAHAEQAGAEAEAHQAEAHAAAJIAAAsg");
	this.shape_25.setTransform(-45.425,-11.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAvIAAhOIgZAAIAAgPIBEAAIAAAPIgZAAIAABOg");
	this.shape_26.setTransform(-53.8,-10.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-60.6,-23.1,120.5,42.2), null);


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
	this.shape.setTransform(6.65,10.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKAyIgYggIAAAgIgTAAIAAhjIATAAIAAA4IAYgfIAYAAIghAlIAhAlg");
	this.shape_1.setTransform(1.45,6.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAmIAAgoQAAgKgFgEQgEgFgIAAQgHAAgEAFQgFAEAAAKIAAAoIgTAAIAAhKIATAAIAAAKQAEgFAGgDQAGgDAGAAQANAAAIAJQAJAIAAAPIAAArg");
	this.shape_2.setTransform(-7.375,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAiQgIgFgEgJQgFgJAAgLQAAgKAFgKQAEgIAIgFQAHgEAKgBQAIAAAGAEQAGADAEAFIAAgLIATAAIAABLIgTAAIAAgMQgDAGgHADQgGAEgIAAQgJgBgIgEgAgJgTQgEADgDAFQgDAFAAAGQAAAGADAGQADAEAEAEQAFACAEAAQAFAAAFgCQAEgDADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(-16.65,7.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_4.setTransform(-23.625,6.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIATAAIAAALQADgFAFgEQAGgDAIAAIAAAUIgFAAQgJAAgFAEQgDAEAAAKIAAAlg");
	this.shape_5.setTransform(-31.8,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgIQgFgKAAgLQAAgKAEgKQAFgIAJgFQAIgEAKgBQALABAJAEQAIAFAFAIQAEAJAAAKIAAAGIg2AAQABAJAFAFQAFAEAGAAQALAAAEgJIAUAAQgDALgJAHQgJAHgOAAQgJgBgJgEgAASgGQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAFgBAHIAjAAIAAAAg");
	this.shape_6.setTransform(-38.975,7.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQADgGAHgDQAGgDAIAAQAJAAAIAEQAIAFAEAJQAFAJAAALQAAAMgFAHQgEAJgIAGQgIAEgJAAQgIAAgGgDQgHgEgDgEIAAAugAgJgkQgEADgEAFQgCAEAAAIQAAAGACAFQAEAFAEACQAFACAEAAQAFAAAEgCQAFgCACgFQADgFAAgHQAAgGgDgFQgCgFgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_7.setTransform(-47.45,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAjQgHgDgEgGQgFgFAAgHIATAAQABAEADADQAEADAFAAQAFAAADgCQADgDAAgDQAAgEgEgCIgLgDIgNgFQgGgBgDgEQgFgEAAgJQABgGADgFQADgFAIgDQAGgDAIABQANAAAJAGQAHAHACALIgTAAQAAgEgEgDQgDgCgFAAQgEAAgDABQgDACAAADQAAAEAEACIALAEIANAFQAFABAEAEQAEAEAAAIQAAAGgDAGQgEAFgHADQgHACgIAAQgIAAgIgDg");
	this.shape_8.setTransform(47.7,-9.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAiQgJgFgEgJQgFgIAAgMQAAgKAEgJQAFgKAJgEQAIgEAKAAQALAAAJAEQAIAFAFAIQAEAIAAALIAAAHIg2AAQABAIAFAEQAFAFAGAAQALAAAEgJIAUAAQgDALgJAHQgJAGgOAAQgJABgJgFgAASgGQAAgIgGgEQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_9.setTransform(39.875,-9.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAyIAAhjIASAAIAABjg");
	this.shape_10.setTransform(33.9,-11.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA1IAAhKIASAAIAABKgAgIghQgCgEAAgEQAAgFACgDQAEgDAEAAQAFAAAEADQACADAAAFQAAAEgCAEQgEADgFAAQgEAAgEgDg");
	this.shape_11.setTransform(30.2,-11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArAmIAAgpQAAgIgEgFQgFgEgIgBQgHABgFAEQgFAFABAIIAAApIgSAAIAAgpQAAgIgFgFQgFgEgHgBQgIABgFAEQgEAFAAAIIAAApIgTAAIAAhKIATAAIAAAJQAEgEAFgDQAGgDAHAAQAJAAAGAEQAHAEADAGQAEgGAHgEQAHgEAIAAQAOAAAJAIQAIAJAAAPIAAArg");
	this.shape_12.setTransform(21.35,-9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAxIAkhRIgtAAIAAgQIBAAAIAAAOIgjBTg");
	this.shape_13.setTransform(7.35,-10.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgDgGQgEgHAAgIIARAAQABAHAEADQAEADAGAAQAIAAAEgHQADgHAAgRQgCAFgHACQgFADgGAAQgIAAgHgEQgHgEgEgGQgEgGAAgKQAAgQAJgJQAIgJAQAAQATAAAHANQAIAMAAAZQAAAQgDAMQgDALgHAGQgHAGgOgBQgIABgHgEgAgLgdQgEAFAAAHQAAAHAEAFQAEAFAHAAQAHAAAFgFQADgFAAgGQAAgJgDgEQgFgEgHAAQgHAAgEAEg");
	this.shape_14.setTransform(-0.55,-11.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqQgJgIgCgNIATAAQABAGAEADQAFADAFABQAIgBAEgFQAEgEAAgJQAAgIgEgFQgEgDgIAAQgFAAgDACQgEADgCAFIgSAAIAAg6IA8AAIAAARIgrAAIAAAYQADgEAGgDQAFgBAFAAQALAAAHAEQAGAFAEAHQADAGAAAJQAAAPgJAKQgJAJgQAAQgPABgJgIg");
	this.shape_15.setTransform(-9.025,-10.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgIAAgMQAAgKAFgJQAFgJAJgFQAJgEAKAAQALAAAJAEQAIAFAFAJQAGAJAAAKQAAAMgGAIQgFAJgJAFQgJAFgKgBQgKABgJgFgAgNgQQgFAHAAAJQAAAKAFAGQAFAGAIAAQAFAAAEgDQAFgCACgFQADgFAAgHQAAgJgGgHQgFgFgIAAQgHAAgGAFg");
	this.shape_16.setTransform(-21.025,-9.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAvQgXAAAAgYIAAgjIgJAAIAAgPIAJAAIAAgTIASAAIAAATIAQAAIAAAPIgQAAIAAAkQAAADACACQABACAFAAIAIAAIAAAQg");
	this.shape_17.setTransform(-27.975,-10.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA4IAAhuIATAAIAAALQAEgGAGgDQAHgDAGAAQAKAAAIAFQAIAEAFAJQAEAJAAALQAAALgEAJQgFAJgIAEQgIAFgKAAQgGAAgHgDQgGgDgEgFIAAAugAgJgkQgEACgDAFQgDAGAAAHQAAAGADAFQADAFAEACQAEADAFgBQAFABAFgDQAEgCADgFQADgFAAgHQAAgGgDgGQgDgFgEgCQgFgCgFgBQgFABgEACg");
	this.shape_18.setTransform(-38.05,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAsQgIgFgFgIQgFgIAAgMIAAg6IATAAIAAA6QAAAJAFAFQAFAFAIAAQAJAAAFgFQAFgFAAgJIAAg6IATAAIAAA6QAAAMgFAIQgFAIgJAFQgJAEgKAAQgKAAgJgEg");
	this.shape_19.setTransform(-47.575,-10.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-55.2,-23.1,109.80000000000001,42.2), null);


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

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(-150,-125,728,90), null);


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
	this.instance.setTransform(668,68.1,0.6,0.6,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(320));

	// Layer_2
	this.instance_1 = new lib.Logo_Love("synched",0);
	this.instance_1.setTransform(567.95,104.95,0.6911,0.6911,0,0,0,-0.7,-28);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({y:64.95,alpha:1},9,cjs.Ease.get(1)).wait(329));

	// Logo2
	this.instance_2 = new lib.Logo2();
	this.instance_2.setTransform(554.45,30.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:614.45,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// The_Subaru_A_Lot_to_Love_Event_
	this.instance_3 = new lib.F4();
	this.instance_3.setTransform(246.3,46.8,1.5729,1.5729);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).to({x:136.2,alpha:1},9,cjs.Ease.get(1)).wait(62));

	// Dog_tested__Dog_approved__
	this.instance_4 = new lib.F3();
	this.instance_4.setTransform(238.65,46.95,1.5729,1.5729,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({regX:0,regY:0,x:128.4,y:46.8,alpha:1},9,cjs.Ease.get(1)).to({_off:true},86).wait(71));

	// The_NEW_Subaru_Crosstrek_Hybrid
	this.instance_5 = new lib.F2();
	this.instance_5.setTransform(246.6,46.8,1.5729,1.5729);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({x:136.45,alpha:1},9,cjs.Ease.get(1)).to({_off:true},66).wait(166));

	// Up_to_597_miles_per_tank_
	this.instance_6 = new lib.F1();
	this.instance_6.setTransform(238.15,46.95,1.5729,1.5729,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:128.05,alpha:1},9,cjs.Ease.get(1)).to({_off:true},101).wait(241));

	// BG
	this.instance_7 = new lib.BG_1();
	this.instance_7.setTransform(150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9,cjs.Ease.get(1)).wait(351));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,119.7);


// stage content:
(lib.KSFY_220551_MM_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_animated_layers
	this.ad_animatedLayers = new lib.ad_animatedLayers();
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,365,46);
// library properties:
lib.properties = {
	id: 'C9EB94080FDD49149EB33434FCA94495',
	width: 728,
	height: 90,
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
an.compositions['C9EB94080FDD49149EB33434FCA94495'] = {
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