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



(lib.Ace_Logo = function() {
	this.initialize(img.Ace_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,57);


(lib.BG1 = function() {
	this.initialize(img.BG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1384,778);


(lib.BG2 = function() {
	this.initialize(img.BG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1384,778);


(lib.Cloud1 = function() {
	this.initialize(img.Cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,795,315);


(lib.Cloud2 = function() {
	this.initialize(img.Cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,795,315);


(lib.Cooper = function() {
	this.initialize(img.Cooper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,204);


(lib.DNN_Logo = function() {
	this.initialize(img.DNN_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,66);


(lib.FIRSTALERT_Logo = function() {
	this.initialize(img.FIRSTALERT_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,64);


(lib.Paul_Logo = function() {
	this.initialize(img.Paul_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,120);


(lib.RAIN = function() {
	this.initialize(img.RAIN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,321);


(lib.Sunny_Logo = function() {
	this.initialize(img.Sunny_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,187);


(lib.THUNDER = function() {
	this.initialize(img.THUNDER);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,256);


(lib.Turnodo = function() {
	this.initialize(img.Turnodo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,362);// helper functions:

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


(lib.Turnodo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Turnodo();
	this.instance.setTransform(-93.45,-99.2,0.5481,0.5481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Turnodo_1, new cjs.Rectangle(-93.4,-99.2,186.9,198.4), null);


(lib.Sponsoredby = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Cooper();
	this.instance.setTransform(-28,59,0.2861,0.2861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Sunny_Logo();
	this.instance_1.setTransform(-80,-19,0.3876,0.3876);

	this.instance_2 = new lib.Paul_Logo();
	this.instance_2.setTransform(0,6,0.3694,0.3694);

	this.instance_3 = new lib.Ace_Logo();
	this.instance_3.setTransform(-1,-21,0.3685,0.3685);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAcQgDgCAAgDQAAgEADgCQACgCACAAQADAAADACQACACAAAEQAAADgCACQgDACgDAAQgCAAgCgCgAgEgQQgDgCAAgDQAAgEADgCQACgCACAAQADAAADACQACACAAAEQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape.setTransform(38.225,-30.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSArIAMgdIgXg4IANAAIAQAsIARgsIANAAIgjBVg");
	this.shape_1.setTransform(33.675,-28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAmQgFgDgDgEIAAAIIgMAAIAAhOIAMAAIAAAdQADgEAGgDQAFgDAGAAQAIAAAGAEQAGAEAEAHQADAFAAAJQAAAJgDAHQgEAHgGAEQgHAEgHAAQgGAAgGgCgAgIgHQgEACgCAFQgDADAAAHQAAAGADAEQACAFAEACQAEADAEAAQAFAAAEgDQAEgCACgFQADgFAAgGQAAgGgDgDQgCgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_2.setTransform(26.925,-31.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAkQgGgEgEgHQgDgHAAgJQAAgJADgFQAEgHAGgEQAHgEAIAAQAEAAAGADQAGACADAEIAAgcIAMAAIAABOIgMAAIAAgJQgDAFgFACQgFADgGAAQgIAAgHgEgAgIgHQgEACgDAFQgCADAAAGQAAAGACAFQADAFAEACQAFADADAAQAFAAAEgDQAEgCADgFQACgEAAgGQAAgHgCgDQgDgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(16.15,-31.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAaQgHgDgDgHQgEgHAAgJQAAgJADgGQAEgHAHgEQAHgEAHABQAJgBAGAEQAHAEADAGQAEAHAAAJIAAAFIgtAAQABAGAFAFQAEAEAGAAQAKAAAEgIIANAAQgCAIgHAGQgHAEgLAAQgHAAgHgEgAAQgFQAAgGgFgEQgEgFgHABQgGAAgEADQgFAFgBAGIAgAAIAAAAg");
	this.shape_4.setTransform(9.225,-30.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAeIAAg6IANAAIAAAIQABgEAFgDQAEgCAGAAIAAANIgDAAQgHAAgEADQgCAEAAAJIAAAeg");
	this.shape_5.setTransform(3.85,-30.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAaQgGgDgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAHABQAIgBAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHADQgHAEgIAAQgIAAgHgEgAgIgRQgEACgCAFQgDAFAAAFQAAAJAFAGQAFAFAHAAQAEAAAEgDQAEgCADgEQADgFAAgGQAAgFgDgFQgCgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(-2.075,-30.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAcQgFgDgDgEQgDgEAAgGIAMAAQAAAEAEACQADADAEAAQAFAAADgCQACgCABgDQAAgDgEgCIgJgDIgLgEQgDgBgEgDQgCgEgBgFQABgGACgDQADgEAFgCQAGgCAFAAQAKAAAGAEQAHAGAAAJIgMAAQAAgFgEgCQgCgDgFABQgEAAgDABQgDACAAAEQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAEADIAGACIAKAEQAFABADADQACAEAAAFQABAFgDAEQgDAEgFACQgFACgHAAQgGAAgGgCg");
	this.shape_7.setTransform(-8.55,-30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAeIAAggQAAgIgEgEQgEgFgHAAQgGAAgEAFQgDAEAAAIIAAAgIgNAAIAAg6IANAAIAAAGQADgDAEgCQAEgCAFAAQAHAAAGACQAFAEADAFQADAGAAAIIAAAig");
	this.shape_8.setTransform(-15.05,-30.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAaQgGgDgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAHABQAIgBAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHADQgHAEgIAAQgIAAgHgEgAgIgRQgEACgCAFQgDAFAAAFQAAAJAFAGQAFAFAHAAQAEAAAEgDQAEgCADgEQADgFAAgGQAAgFgDgFQgCgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_9.setTransform(-22.175,-30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAsIAAhWIAMAAIAAAIQADgDAGgEQAFgCAGAAQAHAAAHAEQAGADAEAIQADAGAAAJQAAAJgDAGQgEAHgGAEQgHAEgHAAQgGAAgFgDQgGgDgDgDIAAAkgAgIgeQgEACgCAEQgDAFAAAHQAAAGADAEQACAEAEACQAEACAEABQAFgBAEgCQAEgCACgEQADgFAAgGQAAgGgDgFQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_10.setTransform(-29.225,-28.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAjQgGgCgEgFQgDgFAAgGIANAAQABAEADAEQADADAFAAQAHAAADgDQAEgDAAgFQAAgEgCgCIgGgEIgIgCIgMgFQgEgBgEgDQgDgFAAgHQAAgHADgEQAEgFAFgDQAGgCAHAAQALAAAHAGQAHAEAAAKIgNAAQgBgEgDgDQgEgCgEgBQgGABgDACQgDACAAAGQAAADACADIAFADIAIADIAMADQAFACADAEQADAEAAAIQAAAFgDAFQgDAFgGADQgGADgIAAQgGAAgGgDg");
	this.shape_11.setTransform(-36.525,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AtLM9IAA55IaXAAIAAZ5g");
	this.shape_12.setTransform(0.875,43.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sponsoredby, new cjs.Rectangle(-83.5,-39.8,168.8,165.8), null);


(lib.rainnnn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.RAIN();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rainnnn, new cjs.Rectangle(0,0,324,321), null);


(lib.lightnung = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.THUNDER();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lightnung, new cjs.Rectangle(0,0,384,256), null);


(lib.flash = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgXPAyOQiMAAAAk3MAAAhatQAAk4CMAAMAufAAAQCMAAAAE4MAAABatQAAE3iMAAg");
	this.shape.setTransform(162.8,321.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash, new cjs.Rectangle(0,0,325.6,642.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUAuIAAgxQAAgLgFgFQgGgGgJAAQgIAAgGAGQgFAFAAALIAAAxIgXAAIAAhZIAXAAIAAALQAEgGAIgDQAHgEAHABQAQAAAKAKQAKAKAAASIAAA0g");
	this.shape.setTransform(25.025,7.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLALgFQAKgGAMAAQANAAALAGQAKAFAGALQAGAKAAANQAAAOgGAKQgGALgLAFQgKAGgNAAQgNAAgKgGgAgQgTQgGAHAAAMQAAANAGAHQAGAHAKAAQAGAAAFgDQAFgDADgGQAEgGAAgJQAAgMgHgHQgHgGgJAAQgJAAgHAGg");
	this.shape_1.setTransform(14.2,8.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgEgGQgGgHAAgIIAXAAQAAAFAEADQAFADAFAAQAHAAAEgCQADgDAAgEQAAgEgEgCIgNgFIgRgFQgGgDgEgEQgFgFAAgJQAAgIAEgGQAFgGAHgEQAJgDAJAAQARAAAJAIQAJAIABANIgVAAQgBgFgEgDQgDgDgHAAQgFAAgEACQgDACAAAEQAAAFAEACQAFADAJACIAQAFQAGACAFAFQAEAFAAAJQAAAIgEAGQgFAGgHAEQgIADgLAAQgKAAgJgEg");
	this.shape_2.setTransform(4.3,8.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAoQgJgFgFgLQgGgLAAgNQAAgNAGgKQAFgLAJgFQAJgGAMAAQAJAAAIAEQAHAEAFAGIAAgNIAWAAIAABZIgWAAIAAgNQgFAGgHAEQgIAEgJAAQgMAAgJgGgAgLgWQgFADgEAGQgCAGAAAHQAAAIACAGQAEAGAFADQAGADAFAAQAGAAAGgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgGgDgGAAQgGAAgFADg");
	this.shape_3.setTransform(-6.05,8.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKgBgOQABgNAFgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKgBANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgHgGgIAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_4.setTransform(-16.5,8.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAqQgIgEgGgGQgFgHAAgIIAWAAQABAFAFADQAEADAFAAQAHAAAEgCQAEgDAAgEQAAgEgFgCIgNgFIgQgFQgHgDgFgEQgEgFAAgJQAAgIAEgGQAEgGAJgEQAHgDALAAQAQAAAJAIQAKAIABANIgXAAQAAgFgEgDQgEgDgGAAQgGAAgDACQgDACAAAEQAAAFAFACQAEADAIACIAQAFQAHACAEAFQAFAFAAAJQAAAIgEAGQgEAGgJAEQgHADgLAAQgKAAgJgEg");
	this.shape_5.setTransform(-26.25,8.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAtIAAhYIAXAAIAAAOQADgHAHgEQAHgEAJgBIAAAZIgGAAQgKAAgGAEQgEAGAAALIAAAsg");
	this.shape_6.setTransform(62.1,-10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKgBgOQABgNAFgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKgBANIAAAIIhBAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgHgGgIAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_7.setTransform(53.25,-10.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA8IAAgyQAAgKgFgFQgGgGgJAAQgIAAgGAGQgFAFAAAKIAAAyIgXAAIAAh3IAXAAIAAApQAEgFAIgEQAHgDAIAAQAKAAAIAEQAIAFAEAIQAFAJAAALIAAA1g");
	this.shape_8.setTransform(42.675,-12.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANA4QgcAAAAgcIAAgqIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAUAAIAAATIgUAAIAAAqQAAAFACACQACACAFAAIALAAIAAATg");
	this.shape_9.setTransform(33.825,-11.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAoQgKgFgFgLQgFgLgBgNQABgNAFgKQAFgLAKgFQAIgGAMAAQAJAAAIAEQAHAEAFAGIAAgNIAXAAIAABZIgXAAIAAgNQgFAGgHAEQgIAEgJAAQgMAAgIgGgAgLgWQgFADgEAGQgCAGAAAHQAAAIACAGQAEAGAFADQAGADAFAAQAGAAAGgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgGgDgGAAQgFAAgGADg");
	this.shape_10.setTransform(24.75,-10.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgGgFQgFgGgJAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_11.setTransform(14.3,-10.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAtIgRg+IgPA+IgZAAIgahZIAXAAIAQBDIARhDIAXAAIAQBDIARhDIAVAAIgaBZg");
	this.shape_12.setTransform(2.2,-10.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgFgGgJAAQgIAAgFAFQgHAGgBAJIAqAAIAAAAg");
	this.shape_13.setTransform(-13.95,-10.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAtIAAhYIAXAAIAAAOQADgHAHgEQAHgEAJgBIAAAZIgGAAQgKAAgGAEQgEAGAAALIAAAsg");
	this.shape_14.setTransform(-22.15,-10.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKgBgOQABgNAFgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKgBANIAAAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgHgGgIAAQgIAAgGAFQgFAGgBAJIApAAIAAAAg");
	this.shape_15.setTransform(-31,-10.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAtIghhZIAZAAIAVBEIAXhEIAYAAIghBZg");
	this.shape_16.setTransform(-41.125,-10.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKABANIgCAIIhAAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_17.setTransform(-51.2,-10.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgEgGQgGgHAAgIIAXAAQAAAFAEADQAFADAFAAQAHAAAEgCQADgDAAgEQAAgEgEgCIgNgFIgRgFQgGgDgEgEQgFgFAAgJQAAgIAEgGQAFgGAHgEQAJgDAJAAQARAAAJAIQAJAIABANIgVAAQgBgFgEgDQgDgDgHAAQgFAAgEACQgDACAAAEQAAAFAEACQAFADAJACIAQAFQAGACAFAFQAEAFAAAJQAAAIgEAGQgFAGgHAEQgIADgLAAQgKAAgJgEg");
	this.shape_18.setTransform(-60.95,-10.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA6QgMgIgCgPIAXAAQABAFAHAEQAFAEAHAAQALAAAGgGQAGgGAAgMIAAgOQgEAHgJADQgHAFgJAAQgLAAgKgGQgJgFgGgLQgEgKAAgNQAAgOAEgKQAGgLAJgGQAKgFALgBQAJABAIAEQAHADAFAHIAAgNIAWAAIAABZQAAAMgEAKQgGAKgKAGQgKAGgOgBQgSAAgMgJgAgKgsQgGAEgDAFQgDAGgBAJQABAIADAFQADAGAGADQAFADAFAAQAGAAAGgDQAFgCADgGQAEgGAAgIQAAgJgEgGQgDgFgFgEQgGgCgGAAQgGAAgEACg");
	this.shape_19.setTransform(37.4,-27.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUAuIAAgxQAAgKgFgHQgGgFgJAAQgIAAgGAFQgFAHAAAKIAAAxIgXAAIAAhZIAXAAIAAALQAEgFAIgEQAHgEAHAAQAQAAAKALQAKAKAAASIAAA0g");
	this.shape_20.setTransform(26.625,-29.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA/IAAhYIAWAAIAABYgAgJgoQgEgDAAgGQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_21.setTransform(18.775,-31.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA0AuIAAgxQgBgLgFgFQgGgGgIABQgKgBgFAGQgGAFAAALIAAAxIgVAAIAAgxQAAgLgGgFQgFgGgJABQgJgBgGAGQgFAFAAALIAAAxIgXAAIAAhZIAXAAIAAALQAEgGAHgDQAHgEAIAAQAKAAAJAFQAHAFAFAIQAEgIAIgEQAIgFAKgBQAQAAALALQAKAKAAASIAAA0g");
	this.shape_22.setTransform(7.8,-29.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLALgFQAKgGAMAAQANAAALAGQAKAFAGALQAGAKAAANQAAAOgGAKQgGALgLAFQgLAGgMAAQgMAAgLgGgAgQgTQgGAHAAAMQAAANAGAHQAGAHAKAAQAFAAAGgDQAFgDADgGQAEgGAAgJQAAgMgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_23.setTransform(-6.15,-29.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAoQgKgFgFgLQgGgKAAgOQAAgNAGgKQAFgLAKgFQAKgGAMAAQARAAALAIQALAIADAPIgYAAQgCgFgFgEQgEgDgHAAQgJAAgGAHQgFAHAAAMQAAANAFAHQAGAHAJAAQANAAAFgMIAYAAQgDAOgLAJQgLAIgRAAQgMAAgKgGg");
	this.shape_24.setTransform(-16.45,-29.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguBDIAAiDIAYAAIAAANQADgGAIgFQAIgEAJAAQAMAAAIAGQAKAGAFAKQAGALgBANQABAOgGAKQgFAKgKAGQgIAGgMAAQgJAAgIgEQgHgEgEgHIAAA4gAgLgrQgFAEgEAGQgCAFAAAJQAAAIACAGQAEAFAFADQAFADAGAAQAGAAAGgDQAFgDAEgGQADgGAAgIQAAgIgDgGQgEgGgFgDQgGgDgGAAQgGAAgFADg");
	this.shape_25.setTransform(-26.75,-27.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYApQgJgEgEgJQgEgJAAgMIAAgzIAWAAIAAAwQAAALAFAFQAFAGAJAAQAJAAAFgGQAGgFAAgLIAAgwIAWAAIAABYIgWAAIAAgLQgFAGgGADQgIADgHAAQgKAAgIgEg");
	this.shape_26.setTransform(-38.15,-29.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKgBgOQABgNAFgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKgBANIAAAIIhBAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgHgGgIAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_27.setTransform(58.2,-47.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUA8IAAgyQAAgKgFgFQgGgGgJAAQgIAAgGAGQgFAFAAAKIAAAyIgXAAIAAh3IAXAAIAAApQAEgFAIgEQAHgDAIAAQAKAAAIAEQAIAFAEAIQAFAJAAALIAAA1g");
	this.shape_28.setTransform(47.625,-49.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANA4QgcAAAAgcIAAgqIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAUAAIAAATIgUAAIAAAqQAAAFACACQACACAFAAIALAAIAAATg");
	this.shape_29.setTransform(38.775,-48.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgLABgFAEQgEAGAAALIAAAtg");
	this.shape_30.setTransform(28.4,-47.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLALgFQAKgGAMAAQANAAAKAGQALAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAGgMAAQgNAAgKgGgAgPgTQgHAHAAAMQAAANAHAHQAGAHAJAAQAGAAAFgDQAFgDAEgGQADgGAAgJQAAgMgHgHQgHgGgJAAQgJAAgGAGg");
	this.shape_31.setTransform(19.35,-47.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNA/IAAhGIgKAAIAAgTIAKAAIAAgEQAAgRAJgHQAJgIASAAIAAATQgIAAgDADQgDADAAAIIAAADIAPAAIAAATIgPAAIAABGg");
	this.shape_32.setTransform(11.125,-49.5765);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgGgGgJAAQgIAAgFAFQgHAGgBAJIAqAAIAAAAg");
	this.shape_33.setTransform(-1,-47.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAEQgEAGAAALIAAAtg");
	this.shape_34.setTransform(-9.2,-47.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAoQgKgFgGgLQgEgLgBgNQABgNAEgKQAGgLAKgFQAJgGALAAQAJAAAIAEQAHAEAFAGIAAgNIAXAAIAABZIgXAAIAAgNQgFAGgHAEQgIAEgJAAQgLAAgJgGgAgLgWQgFADgEAGQgDAGABAHQgBAIADAGQAEAGAFADQAGADAFAAQAHAAAFgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_35.setTransform(-18.8,-47.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AguBDIAAiDIAYAAIAAANQADgGAIgFQAIgEAJAAQAMAAAIAGQAKAGAFAKQAGALgBANQABAOgGAKQgFAKgKAGQgIAGgMAAQgJAAgIgEQgHgEgEgHIAAA4gAgLgrQgFAEgDAGQgDAFAAAJQAAAIADAGQADAFAFADQAFADAGAAQAGAAAGgDQAFgDAEgGQADgGAAgIQAAgIgDgGQgEgGgFgDQgGgDgGAAQgGAAgFADg");
	this.shape_36.setTransform(-29.45,-45.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKgBgOQABgNAFgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKAAANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAFgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgGgGgJAAQgIAAgGAFQgFAGgBAJIApAAIAAAAg");
	this.shape_37.setTransform(-40.45,-47.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgLABgFAEQgEAGAAALIAAAtg");
	this.shape_38.setTransform(-48.65,-47.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AguBDIAAiDIAYAAIAAANQAEgGAHgFQAIgEAJAAQALAAAJAGQAKAGAFAKQAGALAAANQAAAOgGAKQgFAKgKAGQgJAGgLAAQgJAAgIgEQgHgEgEgHIAAA4gAgLgrQgFAEgEAGQgCAFAAAJQAAAIACAGQAEAFAFADQAFADAGAAQAGAAAGgDQAFgDAEgGQACgGAAgIQAAgIgCgGQgEgGgFgDQgGgDgGAAQgGAAgFADg");
	this.shape_39.setTransform(-57.7,-45.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbApQgIgEgFgKQgEgIAAgMIAAg0IAcAAIAAAxQAAAIAEAFQAFAGAHAAQAIAAAEgGQAFgFABgIIAAgxIAbAAIAABZIgbAAIAAgMQgFAGgHAEQgGAEgJgBQgKABgIgFg");
	this.shape_40.setTransform(45.2,-66.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAoQgLgFgGgLQgGgKAAgOQAAgNAGgKQAHgLAKgGQALgFAMAAQANAAALAFQALAGAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAHgNAAQgMAAgLgHgAgMgPQgGAFAAAKQAAALAGAGQAFAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgFQgFgHgIAAQgHAAgFAHg");
	this.shape_41.setTransform(34.375,-66.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiBCIAVgtIglhXIAeAAIAVA4IAUg4IAeAAIg3CEg");
	this.shape_42.setTransform(23.85,-64.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdA6QgNgJgBgQIAbAAQABAFAFADQAFADAHAAQAIAAAFgFQAFgFAAgLIAAgMQgEAGgHAEQgHAEgJAAQgLAAgJgGQgJgFgFgLQgFgKgBgOQABgNAFgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgNIAcAAIAABZQAAANgGAKQgEAKgKAGQgKAGgPAAQgUAAgMgKgAgMglQgGAGgBAKQABALAGAFQAFAFAIABQAIgBAFgFQAGgFAAgLQAAgKgGgGQgFgGgIAAQgIAAgFAGg");
	this.shape_43.setTransform(9,-64.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARAtIAAgvQAAgJgEgGQgFgEgIAAQgHAAgEAEQgFAGAAAJIAAAvIgcAAIAAhZIAcAAIAAANQAEgHAHgDQAGgDAJgBQAQAAAJAKQAKALAAASIAAAzg");
	this.shape_44.setTransform(-1.875,-66.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgmQgEgEAAgHQAAgGAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgHAAQgGAAgFgEg");
	this.shape_45.setTransform(-10.025,-68.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgvBDIAAiEIAcAAIAAANQAEgGAHgEQAIgEAIAAQALAAAJAGQAJAFAFALQAGAKAAAOQAAAOgGAKQgFAKgJAGQgJAGgLAAQgJAAgGgEQgIgEgEgGIAAA3gAgOgkQgFAGAAAKQAAALAFAFQAGAFAIAAQAIAAAFgFQAHgGAAgKQgBgKgFgGQgGgGgIAAQgIAAgGAGg");
	this.shape_46.setTransform(-17.9,-64.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_47.setTransform(-26.325,-67.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAoQgLgFgFgLQgGgKAAgOQAAgNAGgKQAFgLALgGQAKgFAMAAQANgBALAGQAKAFAGALQAFAKAAAOIAAAGIg+AAQABAJAFAFQAEAEAHAAQAKAAAEgJIAdAAQgCAJgGAHQgGAHgJAEQgJAEgLABQgMAAgKgHgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_48.setTransform(-33.925,-66.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAWA5IAAgvIgqAAIAAAvIgcAAIAAhxIAcAAIAAAtIAqAAIAAgtIAbAAIAABxg");
	this.shape_49.setTransform(-45.1,-67.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-67.4,-80.8,134.8,101), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4BGIAAhZIg4BEIgBAAIg3hEIAABZIgoAAIAAiLIAtAAIAzBDIA1hDIAsAAIAACLg");
	this.shape.setTransform(27.675,129.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBGIgNgbIhMAAIgNAbIgrAAIBJiLIArAAIBJCLgAAYAOIgYgxIgYAxIAwAAg");
	this.shape_1.setTransform(6.275,129.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKBGIAAiLICSAAIAAAfIhqAAIAAAXIBYAAIAAAdIhYAAIAAAZIBtAAIAAAfg");
	this.shape_2.setTransform(-12.075,129.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBGIAAhrIg5AAIAAggICbAAIAAAgIg5AAIAABrg");
	this.shape_3.setTransform(-30.05,129.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.FIRSTALERT_Logo();
	this.instance.setTransform(-89,68,0.6371,0.6371);

	this.instance_1 = new lib.DNN_Logo();
	this.instance_1.setTransform(-81,9,0.6371,0.6371);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAZIgvAAIAAAbIApAAIAAAXIgpAAIAAAdIAvAAIAAAZg");
	this.shape_4.setTransform(37.975,-8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBBIAAg2IgxAAIAAA2IggAAIAAiBIAgAAIAAAzIAxAAIAAgzIAgAAIAACBg");
	this.shape_5.setTransform(25.675,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBBIAAhoIgiAAIAAgZIBkAAIAAAZIgjAAIAABog");
	this.shape_6.setTransform(12.95,-8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBBIg1hQIAABQIgfAAIAAiBIAfAAIA1BQIAAhQIAgAAIAACBg");
	this.shape_7.setTransform(-4.25,-8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_8.setTransform(-14.35,-8.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA6QgPgIgJgPQgJgQAAgTQAAgSAJgQQAJgPAPgIQAQgJARAAQATAAAPAJQAQAIAIAPQAJAQAAASQAAATgJAQQgJAPgPAIQgPAJgTAAQgRAAgQgJgAgYgbQgJAKAAARQAAARAJALQAJAKAPAAQAQAAAJgKQAKgLAAgRQAAgQgKgLQgJgKgQAAQgPAAgJAKg");
	this.shape_9.setTransform(-24.775,-8.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA2QgMgLAAgWIAfAAQAAAIAEAEQADAFAFAAQAGAAADgEQADgEAAgHIAAhYIAgAAIAABYQAAAVgLALQgMALgUAAQgTAAgNgMg");
	this.shape_10.setTransform(-38.325,-8.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-89,-22.5,176.5,166.3), null);


(lib.Date = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BkIA+iTIhGAAIAAg0ICFAAIAAAsIg/Cbg");
	this.shape.setTransform(77.4,-10.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBkIAAiOIgeAAIAAg5IBdAAIAADHg");
	this.shape_1.setTransform(63.725,-10.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/AZIAAgxIB/AAIAAAxg");
	this.shape_2.setTransform(44.2,-9.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBXQgUgRAAglIA7AAQAAAKADAFQADAGAIgBQAFAAADgDQADgFAAgFQABgIgGgEQgFgEgLAAIgKAAIAAgwIAKAAQASABAAgQQAAgHgDgDQgEgEgDAAQgKAAAAARIg7AAQAAggATgRQASgSAhABQAWAAAOAHQAQAIAIAMQAIANAAAPQgBAUgIAKQgKALgLAEIAAABQAiALAAAiQgBARgIAOQgIAOgQAHQgPAIgVAAQgigBgVgQg");
	this.shape_3.setTransform(22.9,-10.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBkIAAiOIgeAAIAAg5IBdAAIAADHg");
	this.shape_4.setTransform(8.125,-10.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BhIAAjBIA8AAIAACTIA7AAIAAAug");
	this.shape_5.setTransform(-9.05,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBhIAAjBIA8AAIAADBg");
	this.shape_6.setTransform(-21.4,-10.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBhIgjhFIgBAAIAABFIg9AAIAAjBIBaAAQAYAAARAIQARAJAIAOQAIAOAAATQAAATgLAOQgKAPgVAHIArBKgAgVgMIAYAAQAIAAAFgEQAEgEABgJQgBgHgEgFQgFgEgIAAIgYAAg");
	this.shape_7.setTransform(-35.1,-10.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPBhIAAjBIBVAAQAkAAASASQATASAAAfQAAASgIAOQgJAPgQAJQgQAIgYAAIgYAAIAAA+gAgSgMIASAAQASAAAAgRQAAgSgSAAIgSAAg");
	this.shape_8.setTransform(-53.75,-10.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqBhIgJgdIhBAAIgJAdIhAAAIBHjBIBFAAIBHDBgAARAWIgRg1IgRA1IAiAAg");
	this.shape_9.setTransform(-74.2,-10.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Date, new cjs.Rectangle(-86.4,-30.8,172.9,41.6), null);


(lib.Cloud2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cloud2();
	this.instance.setTransform(-289.45,-114.7,0.7282,0.7282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud2_1, new cjs.Rectangle(-289.4,-114.7,578.9,229.4), null);


(lib.Cloud1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cloud1();
	this.instance.setTransform(-289.45,-114.7,0.7282,0.7282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud1_1, new cjs.Rectangle(-289.4,-114.7,578.9,229.4), null);


(lib.ad_clickBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ad_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ad_bg, new cjs.Rectangle(0,0,300,250), null);


(lib.RAIN_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rainnnn();
	this.instance.setTransform(162,128.5,1,1,0,0,0,162,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:235.05},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,324,427.6);


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
	this.frame_239 = function() {
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// Sponsored by:
	this.instance = new lib.Sponsoredby();
	this.instance.setTransform(147.7,335.25,1.3847,1.3847);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({y:279.85},9,cjs.Ease.get(1)).wait(102));

	// Helping you prepare for the upcoming severe weather season
	this.instance_1 = new lib.F2();
	this.instance_1.setTransform(-4.7,165.75,1.3847,1.3847);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:147.65,alpha:1},9,cjs.Ease.get(1)).wait(112));

	// JOIN THE
	this.instance_2 = new lib.F1();
	this.instance_2.setTransform(148.4,291.8,1.3847,1.3847);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:208.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},100).wait(121));

	// APRIL 6 - 10
	this.instance_3 = new lib.Date();
	this.instance_3.setTransform(149.35,81.05,1.3847,1.3847);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:140.55,alpha:1},9,cjs.Ease.get(1)).to({_off:true},110).wait(121));

	// FLash
	this.instance_4 = new lib.flash();
	this.instance_4.setTransform(150.8,119.6,1,1,0,0,0,162.8,144.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(1)).wait(79));

	// RAIN
	this.instance_5 = new lib.RAIN_1();
	this.instance_5.setTransform(201.65,232.7,2.917,2.917,0,0,0,162,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

	// Cloud2
	this.instance_6 = new lib.Cloud2_1();
	this.instance_6.setTransform(503.3,65.1,2.4863,2.4863);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:494.1617,alpha:0.3347},0).wait(1).to({x:485.0617,alpha:0.6681},0).wait(1).to({x:476,alpha:1},0).wait(1).to({x:471.071,alpha:0.6652},0).wait(1).to({x:466.1629,alpha:0.3319},0).wait(1).to({x:461.4,alpha:0},0).wait(1).to({x:456.5436,alpha:0.0085},0).wait(1).to({x:451.7081,alpha:0.0169},0).wait(1).to({x:446.8935,alpha:0.0253},0).wait(1).to({x:442.0997,alpha:0.0337},0).wait(1).to({x:437.3269,alpha:0.042},0).wait(1).to({x:432.5749,alpha:0.0503},0).wait(1).to({x:427.8438,alpha:0.0585},0).wait(1).to({x:423.1336,alpha:0.0667},0).wait(1).to({x:418.4443,alpha:0.0749},0).wait(1).to({x:413.7759,alpha:0.083},0).wait(1).to({x:409.1284,alpha:0.0911},0).wait(1).to({x:404.5017,alpha:0.0992},0).wait(1).to({x:399.896,alpha:0.1072},0).wait(1).to({x:395.3111,alpha:0.1152},0).wait(1).to({x:390.7472,alpha:0.1232},0).wait(1).to({x:386.2041,alpha:0.1311},0).wait(1).to({x:381.6819,alpha:0.139},0).wait(1).to({x:377.1806,alpha:0.1469},0).wait(1).to({x:372.7001,alpha:0.1547},0).wait(1).to({x:368.2406,alpha:0.1624},0).wait(1).to({x:363.802,alpha:0.1702},0).wait(1).to({x:359.3842,alpha:0.1779},0).wait(1).to({x:354.9873,alpha:0.1856},0).wait(1).to({x:350.6113,alpha:0.1932},0).wait(1).to({x:346.2562,alpha:0.2008},0).wait(1).to({x:341.922,alpha:0.2083},0).wait(1).to({x:337.6087,alpha:0.2159},0).wait(1).to({x:333.3163,alpha:0.2233},0).wait(1).to({x:329.0447,alpha:0.2308},0).wait(1).to({x:324.7941,alpha:0.2382},0).wait(1).to({x:320.5643,alpha:0.2456},0).wait(1).to({x:316.3554,alpha:0.2529},0).wait(1).to({x:312.1674,alpha:0.2602},0).wait(1).to({x:308.0003,alpha:0.2675},0).wait(1).to({x:303.8541,alpha:0.2747},0).wait(1).to({x:299.7288,alpha:0.2819},0).wait(1).to({x:295.5,alpha:0.2891},0).wait(1).to({x:291.4124,alpha:0.5273},0).wait(1).to({x:287.3458,alpha:0.7642},0).wait(1).to({x:283.3,alpha:1},0).wait(1).to({x:279.2207,alpha:0.6649},0).wait(1).to({x:275.1626,alpha:0.3316},0).wait(1).to({x:271.25,alpha:0},0).wait(1).to({x:267.2927},0).wait(1).to({x:263.3563},0).wait(1).to({x:259.4408},0).wait(1).to({x:255.5461},0).wait(1).to({x:251.6723},0).wait(1).to({x:247.8194},0).wait(1).to({x:243.9874},0).wait(1).to({x:240.1763},0).wait(1).to({x:236.3861},0).wait(1).to({x:232.6167},0).wait(1).to({x:228.8683},0).wait(1).to({x:225.1407},0).wait(1).to({x:221.434},0).wait(1).to({x:217.7481},0).wait(1).to({x:214.0832},0).wait(1).to({x:210.4392},0).wait(1).to({x:206.816},0).wait(1).to({x:203.2137},0).wait(1).to({x:199.6323},0).wait(1).to({x:196.0718},0).wait(1).to({x:192.5321},0).wait(1).to({x:189.0134},0).wait(1).to({x:185.5155},0).wait(1).to({x:182.0385},0).wait(1).to({x:178.5824},0).wait(1).to({x:175.1471},0).wait(1).to({x:171.7328},0).wait(1).to({x:168.3393},0).wait(1).to({x:164.9668},0).wait(1).to({x:161.6151},0).wait(1).to({x:158.2842},0).wait(1).to({x:154.85},0).wait(1).to({x:151.5457,alpha:0.3355},0).wait(1).to({x:148.2624,alpha:0.6688},0).wait(1).to({x:145,alpha:1},0).wait(1).to({x:141.771,alpha:0.6645},0).wait(1).to({x:138.5629,alpha:0.3312},0).wait(1).to({x:135.5,alpha:0},0).wait(1).to({x:132.3382},0).wait(1).to({x:129.1973},0).wait(1).to({x:126.0773},0).wait(1).to({x:122.9781},0).wait(1).to({x:119.8998},0).wait(1).to({x:116.8423},0).wait(1).to({x:113.8058},0).wait(1).to({x:110.7901},0).wait(1).to({x:107.7952},0).wait(1).to({x:104.8213},0).wait(1).to({x:101.8682},0).wait(1).to({x:98.936},0).wait(1).to({x:96.0246},0).wait(1).to({x:93.1342},0).wait(1).to({x:90.2645},0).wait(1).to({x:87.4158},0).wait(1).to({x:84.5879},0).wait(1).to({x:81.7809},0).wait(1).to({x:78.9948},0).wait(1).to({x:76.2296},0).wait(1).to({x:73.4852},0).wait(1).to({x:70.7616},0).wait(1).to({x:68.059},0).wait(1).to({x:65.3772},0).wait(1).to({x:62.7163},0).wait(1).to({x:60.0763},0).wait(1).to({x:57.4571},0).wait(1).to({x:54.8588},0).wait(1).to({x:52.2814},0).wait(1).to({x:49.7248},0).wait(1).to({x:47.1891},0).wait(1).to({x:44.6743},0).wait(1).to({x:42.1804},0).wait(1).to({x:39.7073},0).wait(1).to({x:37.2551},0).wait(1).to({x:34.8237},0).wait(1).to({x:32.4133},0).wait(1).to({x:30.0237},0).wait(1).to({x:27.6549},0).wait(1).to({x:25.3071},0).wait(1).to({x:22.9801},0).wait(1).to({x:20.6739},0).wait(1).to({x:18.3887},0).wait(1).to({x:16},0).wait(1).to({x:13.7457,alpha:0.3365},0).wait(1).to({x:11.5124,alpha:0.6698},0).wait(1).to({x:9.3,alpha:1},0).wait(1).to({x:7.1292,alpha:0.6634},0).wait(1).to({x:4.9792,alpha:0.3301},0).wait(1).to({x:2.85,alpha:0},0).wait(1).to({x:0.7301},0).wait(1).to({x:-1.369},0).wait(1).to({x:-3.4472},0).wait(1).to({x:-5.5045},0).wait(1).to({x:-7.5409},0).wait(1).to({x:-9.5564},0).wait(1).to({x:-11.551},0).wait(1).to({x:-13.5248},0).wait(1).to({x:-15.4776},0).wait(1).to({x:-17.4096},0).wait(1).to({x:-19.3207},0).wait(1).to({x:-21.2109},0).wait(1).to({x:-23.0802},0).wait(1).to({x:-24.9286},0).wait(1).to({x:-26.7562},0).wait(1).to({x:-28.5628},0).wait(1).to({x:-30.3486},0).wait(1).to({x:-32.1135},0).wait(1).to({x:-33.8575},0).wait(1).to({x:-35.5806},0).wait(1).to({x:-37.2828},0).wait(1).to({x:-38.9642},0).wait(1).to({x:-40.6246},0).wait(1).to({x:-42.2642},0).wait(1).to({x:-43.8829},0).wait(1).to({x:-45.4807},0).wait(1).to({x:-47.0576},0).wait(1).to({x:-48.6136},0).wait(1).to({x:-50.1487},0).wait(1).to({x:-51.663},0).wait(1).to({x:-53.1563},0).wait(1).to({x:-54.6288},0).wait(1).to({x:-56.0804},0).wait(1).to({x:-57.5111},0).wait(1).to({x:-58.9209},0).wait(1).to({x:-60.3099},0).wait(1).to({x:-61.6779},0).wait(1).to({x:-63.0251},0).wait(1).to({x:-64.3513},0).wait(1).to({x:-65.6567},0).wait(1).to({x:-66.9412},0).wait(1).to({x:-68.2048},0).wait(1).to({x:-69.4476},0).wait(1).to({x:-70.6694},0).wait(1).to({x:-71.8704},0).wait(1).to({x:-73.0504},0).wait(1).to({x:-74.2096},0).wait(1).to({x:-75.3479},0).wait(1).to({x:-76.4653},0).wait(1).to({x:-77.5619},0).wait(1).to({x:-78.6375},0).wait(1).to({x:-79.6923},0).wait(1).to({x:-80.7261},0).wait(1).to({x:-81.7391},0).wait(1).to({x:-82.7312},0).wait(1).to({x:-83.7024},0).wait(1).to({x:-84.6527},0).wait(1).to({x:-85.5822},0).wait(1).to({x:-86.4907},0).wait(1).to({x:-87.3784},0).wait(1).to({x:-88.2452},0).wait(1).to({x:-89.091},0).wait(1).to({x:-89.916},0).wait(1).to({x:-90.7202},0).wait(1).to({x:-91.5034},0).wait(1).to({x:-92.2657},0).wait(1).to({x:-93.0072},0).wait(1).to({x:-93.7278},0).wait(1).to({x:-94.4275},0).wait(1).to({x:-95.1063},0).wait(1).to({x:-95.7642},0).wait(1).to({x:-96.4012},0).wait(1).to({x:-97.0174},0).wait(1).to({x:-97.6126},0).wait(1).to({x:-98.187},0).wait(1).to({x:-98.7405},0).wait(1).to({x:-99.2731},0).wait(1).to({x:-99.7848},0).wait(1).to({x:-100.2756},0).wait(1).to({x:-100.7455},0).wait(1).to({x:-101.1946},0).wait(1).to({x:-101.6228},0).wait(1).to({x:-102.03},0).wait(1).to({x:-102.4164},0).wait(1).to({x:-102.7819},0).wait(1).to({x:-103.1266},0).wait(1).to({x:-103.4503},0).wait(1).to({x:-103.7532},0).wait(1).to({x:-104.0351},0).wait(1).to({x:-104.2962},0).wait(1).to({x:-104.5364},0).wait(1).to({x:-104.7557},0).wait(1).to({x:-104.9541},0).wait(1).to({x:-105.1316},0).wait(1).to({x:-105.2883},0).wait(1).to({x:-105.424},0).wait(1).to({x:-105.5389},0).wait(1).to({x:-105.6329},0).wait(1).to({x:-105.706},0).wait(1).to({x:-105.7582},0).wait(1).to({x:-105.7896},0).wait(1).to({x:-105.8},0).wait(1));

	// Cloud1
	this.instance_7 = new lib.Cloud1_1();
	this.instance_7.setTransform(491.1,65.35,2.4863,2.4863,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,regY:0,x:-105.8,y:65.1},239,cjs.Ease.get(1)).wait(1));

	// LIghtning
	this.instance_8 = new lib.lightnung();
	this.instance_8.setTransform(226.45,205.4,1.659,1.659,0,-3.7015,176.2985,191.9,128);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},3).to({alpha:0},3).wait(37).to({alpha:1},3).to({alpha:0},3).wait(32).to({alpha:1},3).to({alpha:0},3).wait(44).to({alpha:1},3).to({alpha:0},3).wait(103));

	// Turnodo
	this.instance_9 = new lib.Turnodo_1();
	this.instance_9.setTransform(98.25,308.3,2.1126,2.1126,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:2.5546,scaleY:2.5546,x:280.1,y:261.7},239,cjs.Ease.get(1)).wait(1));

	// BG2
	this.instance_10 = new lib.BG2();
	this.instance_10.setTransform(-359,-16,0.8075,0.8075);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(240));

	// BG1
	this.instance_11 = new lib.BG1();
	this.instance_11.setTransform(-359,-16,0.8075,0.8075);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-825.4,-328.7,2048.5,946.8);


// stage content:
(lib.KSFY_213652_MM_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		var ad_freq = 24;
		stage.enableMouseOver(ad_freq);
		this.ad_animatedLayers.ad_clickBtn.cursor = "pointer";
		this.ad_animatedLayers.ad_clickBtn.addEventListener("click", ad_mainClick);
			
			function ad_mainClick() {
				window.open(clickTag, "_blank");
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ad_border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,299.9992);

	// ad_animated_layers
	this.ad_animatedLayers = new lib.ad_animatedLayers();
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.ad_animatedLayers];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(1));

	// ad_bg_solid
	this.instance = new lib.ad_bg();
	this.instance.setTransform(150,300,1,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,151,301);
// library properties:
lib.properties = {
	id: 'DF7533DE48737A4391F9B7075B15E698',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Ace_Logo.jpg", id:"Ace_Logo"},
		{src:"BG1.jpg", id:"BG1"},
		{src:"BG2.jpg", id:"BG2"},
		{src:"Cloud1.png", id:"Cloud1"},
		{src:"Cloud2.png", id:"Cloud2"},
		{src:"Cooper.png", id:"Cooper"},
		{src:"DNN_Logo.png", id:"DNN_Logo"},
		{src:"FIRSTALERT_Logo.png", id:"FIRSTALERT_Logo"},
		{src:"Paul_Logo.jpg", id:"Paul_Logo"},
		{src:"RAIN.png", id:"RAIN"},
		{src:"Sunny_Logo.jpg", id:"Sunny_Logo"},
		{src:"THUNDER.png", id:"THUNDER"},
		{src:"Turnodo.png", id:"Turnodo"}
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
an.compositions['DF7533DE48737A4391F9B7075B15E698'] = {
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