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
	this.instance.setTransform(48,13,0.3288,0.3288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Sunny_Logo();
	this.instance_1.setTransform(-121,11,0.3876,0.3876);

	this.instance_2 = new lib.Paul_Logo();
	this.instance_2.setTransform(-41,36,0.3694,0.3694);

	this.instance_3 = new lib.Ace_Logo();
	this.instance_3.setTransform(-42,9,0.3685,0.3685);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAcQgDgCAAgDQAAgEADgCQACgCACAAQADAAADACQACACAAAEQAAADgCACQgDACgDAAQgCAAgCgCgAgEgQQgDgCAAgDQAAgEADgCQACgCACAAQADAAADACQACACAAAEQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape.setTransform(38.175,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSArIAMgcIgXg5IANAAIAQAsIARgsIANAAIgjBVg");
	this.shape_1.setTransform(33.625,1.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAmQgFgDgDgEIAAAIIgMAAIAAhOIAMAAIAAAdQADgEAGgDQAFgDAGAAQAIAAAGAEQAGAEAEAHQADAFAAAJQAAAJgDAHQgEAHgGAEQgHAEgHAAQgGAAgGgCgAgIgHQgEACgCAFQgDADAAAHQAAAGADAEQACAFAEACQAEADAEAAQAFAAAEgDQAEgCACgFQADgFAAgGQAAgGgDgDQgCgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_2.setTransform(26.875,-1.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAkQgHgEgEgHQgDgHAAgJQAAgJADgFQAEgHAHgEQAGgEAHAAQAFAAAGADQAFACAEAEIAAgcIANAAIAABOIgNAAIAAgJQgDAFgGACQgEADgHAAQgHAAgGgEgAgIgHQgEACgCAFQgDADAAAGQAAAGADAFQACAFAEACQAFADADAAQAFAAAEgDQAEgCACgFQADgEAAgGQAAgHgDgDQgCgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(16.1,-1.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAbQgHgEgDgHQgEgHAAgJQAAgIADgHQAEgHAHgEQAHgEAHAAQAJAAAGAEQAHAEADAGQAEAHAAAJIAAAEIgtAAQABAIAFAEQAEAEAGAAQAKAAAEgIIANAAQgCAIgHAGQgHAEgLAAQgHAAgHgDgAAQgFQAAgGgFgEQgEgFgHABQgGAAgEADQgFAFgBAGIAgAAIAAAAg");
	this.shape_4.setTransform(9.175,-0.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAeIAAg6IAMAAIAAAIQACgEAEgDQAFgCAGAAIAAAMIgDAAQgHAAgEAEQgDAEAAAJIAAAeg");
	this.shape_5.setTransform(3.8,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAHAAQAIAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHADgIAAQgIAAgHgDgAgIgQQgEACgCAEQgDAEAAAGQAAAKAFAEQAFAGAHAAQAEAAAEgCQAEgCADgFQADgFAAgGQAAgGgDgEQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_6.setTransform(-2.125,-0.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAcQgGgDgDgEQgEgFAAgFIANAAQAAAEADADQAEACAEAAQAFAAADgCQADgCgBgDQAAgDgCgCIgJgEIgLgDQgFgBgCgDQgDgEgBgGQAAgFADgDQADgEAFgCQAGgCAFgBQAKABAHAEQAFAFABAKIgNAAQAAgEgCgDQgDgCgFAAQgEAAgDACQgDABABADQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIADACIAHACIAKAEQAFABACADQADADABAGQAAAFgDAEQgDAEgFACQgFADgHgBQgGABgFgDg");
	this.shape_7.setTransform(-8.6,-0.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAeIAAggQAAgIgEgEQgEgFgHAAQgFAAgEAFQgFAEAAAIIAAAgIgMAAIAAg6IAMAAIAAAHQADgEAFgCQAFgCAEAAQAHAAAFACQAGADADAGQADAGAAAIIAAAig");
	this.shape_8.setTransform(-15.1,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAHAAQAIAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgHAEQgHADgIAAQgIAAgHgDgAgIgQQgEACgCAEQgDAEAAAGQAAAKAFAEQAFAGAHAAQAEAAAEgCQAEgCADgFQADgFAAgGQAAgGgDgEQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_9.setTransform(-22.225,-0.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAsIAAhWIAMAAIAAAIQADgEAGgDQAFgCAGAAQAHAAAHADQAGAFAEAHQADAGAAAJQAAAJgDAGQgEAHgGAEQgHAEgHAAQgGAAgFgDQgGgCgDgEIAAAkgAgIgeQgEACgCAEQgDAFAAAGQAAAHADAEQACAEAEACQAEADAEAAQAFAAAEgDQAEgCACgEQADgFAAgGQAAgGgDgFQgCgEgEgCQgEgCgFgBQgEABgEACg");
	this.shape_10.setTransform(-29.275,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAkQgGgDgEgFQgDgFAAgGIANAAQABAFADADQADADAFAAQAHAAADgDQAEgDAAgFQAAgEgCgCIgGgEIgIgDIgMgEQgEAAgEgFQgDgEAAgHQAAgGADgFQAEgFAFgDQAGgCAHAAQALAAAHAFQAHAGAAAJIgNAAQgBgEgDgDQgEgDgEABQgGgBgDADQgDACAAAGQAAADACADIAFADIAIACIAMAFQAFABADAEQADAEAAAIQAAAFgDAFQgDAFgGADQgGADgIAAQgGAAgGgCg");
	this.shape_11.setTransform(-36.575,-0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AzcHfIAAu9MAm5AAAIAAO9g");
	this.shape_12.setTransform(0,38.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sponsoredby, new cjs.Rectangle(-124.5,-9.8,249,95.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("A3PWkQiMAAAAiMMAAAgovQAAiMCMAAMAufAAAQCMAAAACMMAAAAovQAACMiMAAg");
	this.shape.setTransform(162.8,144.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash, new cjs.Rectangle(0,0,325.6,288.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUAtIAAgwQAAgKgFgGQgGgGgJAAQgIAAgGAGQgFAGAAAKIAAAwIgXAAIAAhYIAXAAIAAALQAEgGAIgDQAHgDAHgBQAQAAAKALQAKAKAAASIAAAzg");
	this.shape.setTransform(92.375,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLALgFQAKgGAMAAQANAAAKAGQALAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgKAGgNAAQgMAAgLgGgAgPgTQgHAHAAAMQAAANAHAHQAFAHAKAAQAGAAAFgDQAGgDADgGQADgGAAgJQAAgMgHgHQgHgGgJAAQgJAAgGAGg");
	this.shape_1.setTransform(81.55,14.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgFgGQgEgHgBgIIAXAAQAAAFAFADQAEADAGAAQAGAAAEgCQAEgDgBgEQABgEgFgCIgNgFIgRgFQgGgDgFgEQgEgFAAgJQAAgIAEgGQAEgGAJgEQAHgDALAAQAPAAAKAIQAKAIABANIgXAAQAAgFgEgDQgEgDgGAAQgGAAgDACQgDACAAAEQAAAFAFACQAEADAIACIARAFQAFACAFAFQAFAFAAAJQAAAIgEAGQgFAGgHAEQgJADgKAAQgKAAgJgEg");
	this.shape_2.setTransform(71.65,14.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAoQgKgFgFgLQgFgLgBgNQABgNAFgKQAFgLAKgFQAJgGALAAQAJAAAIAEQAHAEAFAGIAAgNIAXAAIAABZIgXAAIAAgNQgFAGgHAEQgIAEgJAAQgLAAgJgGgAgLgWQgFADgEAGQgDAGABAHQgBAIADAGQAEAGAFADQAGADAFAAQAHAAAFgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_3.setTransform(61.3,14.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgFgGgJAAQgIAAgFAFQgHAGgBAJIAqAAIAAAAg");
	this.shape_4.setTransform(50.85,14.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgEgGQgGgHAAgIIAXAAQAAAFAEADQAFADAFAAQAHAAAEgCQADgDABgEQgBgEgEgCIgNgFIgQgFQgHgDgEgEQgFgFAAgJQAAgIAEgGQAFgGAHgEQAJgDAJAAQAQAAAKAIQAJAIABANIgVAAQgBgFgEgDQgDgDgHAAQgFAAgEACQgDACAAAEQAAAFAEACQAFADAJACIAQAFQAFACAGAFQAEAFAAAJQAAAIgEAGQgEAGgJAEQgHADgLAAQgKAAgJgEg");
	this.shape_5.setTransform(41.1,14.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAtIAAhYIAXAAIAAAOQADgHAHgEQAHgEAJgBIAAAZIgGAAQgKAAgGAEQgEAGAAALIAAAsg");
	this.shape_6.setTransform(29.45,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgGgGgJAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_7.setTransform(20.6,14.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA8IAAgyQAAgKgFgFQgGgGgJAAQgIAAgGAGQgFAFAAAKIAAAyIgXAAIAAh3IAXAAIAAApQAEgFAIgEQAHgDAIAAQAKAAAIAEQAIAFAEAIQAFAJAAALIAAA1g");
	this.shape_8.setTransform(10.025,12.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANA4QgcAAAAgcIAAgqIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAUAAIAAATIgUAAIAAAqQAAAFACACQACACAFAAIALAAIAAATg");
	this.shape_9.setTransform(1.175,13.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAoQgKgFgGgLQgEgLAAgNQAAgNAEgKQAGgLAKgFQAIgGAMAAQAJAAAIAEQAHAEAFAGIAAgNIAXAAIAABZIgXAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgIgGgAgLgWQgFADgEAGQgDAGAAAHQAAAIADAGQAEAGAFADQAGADAFAAQAHAAAFgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_10.setTransform(-7.9,14.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKABANIgCAIIhAAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_11.setTransform(-18.35,14.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAtIgQg+IgPA+IgYAAIgbhZIAXAAIAQBDIARhDIAXAAIAQBDIAQhDIAWAAIgaBZg");
	this.shape_12.setTransform(-30.45,14.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAGAKABANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_13.setTransform(-46.6,14.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAtIAAhYIAXAAIAAAOQADgHAHgEQAHgEAJgBIAAAZIgGAAQgLAAgFAEQgEAGAAALIAAAsg");
	this.shape_14.setTransform(-54.8,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgHgGgIAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_15.setTransform(-63.65,14.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAtIghhZIAZAAIAVBEIAXhEIAYAAIghBZg");
	this.shape_16.setTransform(-73.775,14.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKAAgOQAAgNAFgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKAAANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_17.setTransform(-83.85,14.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgFgGQgEgHgBgIIAXAAQAAAFAEADQAFADAGAAQAGAAAEgCQAEgDgBgEQABgEgFgCIgNgFIgRgFQgGgDgFgEQgEgFAAgJQAAgIAEgGQAFgGAHgEQAJgDAKAAQAPAAAKAIQAJAIACANIgXAAQAAgFgEgDQgDgDgHAAQgGAAgDACQgDACAAAEQAAAFAFACQAEADAIACIARAFQAFACAFAFQAFAFAAAJQAAAIgEAGQgFAGgHAEQgJADgKAAQgKAAgJgEg");
	this.shape_18.setTransform(-93.6,14.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA7QgMgJgCgPIAXAAQACAFAFAEQAGAEAIAAQAJAAAHgGQAGgGAAgMIAAgOQgEAHgJADQgHAFgJAAQgLAAgJgGQgKgGgGgKQgEgKAAgNQAAgOAEgLQAGgKAKgGQAJgFALAAQAJAAAIADQAIAEAEAHIAAgNIAXAAIAABZQAAANgGAJQgEAKgKAGQgLAGgOAAQgSgBgMgIgAgKgsQgGADgDAGQgEAHAAAIQAAAHAEAGQADAHAGACQAFADAFAAQAGAAAGgDQAFgCADgGQAEgGAAgIQAAgIgEgHQgDgFgFgEQgGgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(102.9,-1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUAuIAAgxQAAgKgFgHQgGgFgJAAQgIAAgGAFQgFAHAAAKIAAAxIgXAAIAAhZIAXAAIAAALQAEgGAIgDQAHgEAHABQAQAAAKAKQAKAKAAASIAAA0g");
	this.shape_20.setTransform(92.125,-3.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA/IAAhYIAWAAIAABYgAgJgoQgEgDAAgGQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_21.setTransform(84.275,-5.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA0AuIAAgxQAAgLgGgFQgGgFgJAAQgJAAgFAFQgFAFgBALIAAAxIgVAAIAAgxQAAgLgGgFQgFgFgJAAQgJAAgGAFQgFAFAAALIAAAxIgXAAIAAhZIAXAAIAAALQAEgGAHgDQAHgEAIABQAKgBAJAFQAHAEAFAJQAEgIAIgFQAIgEAKAAQARAAAKAKQAKAKAAASIAAA0g");
	this.shape_22.setTransform(73.3,-3.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQALgGAMAAQANAAALAGQAKAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAGgMAAQgMAAgLgGgAgQgTQgGAHAAAMQAAANAGAHQAHAHAJAAQAFAAAGgDQAFgDADgGQAEgGAAgJQAAgMgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_23.setTransform(59.35,-3.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAoQgKgFgGgLQgFgKAAgOQAAgNAFgKQAGgLAKgFQAKgGAMAAQAQAAAMAIQAKAIAEAPIgYAAQgCgFgEgEQgFgDgHAAQgJAAgFAHQgGAHAAAMQAAANAGAHQAFAHAJAAQAOAAAEgMIAYAAQgEAOgKAJQgMAIgQAAQgMAAgKgGg");
	this.shape_24.setTransform(49.05,-3.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgtBDIAAiDIAWAAIAAANQAFgGAIgFQAHgEAJAAQALAAAKAGQAJAGAFAKQAGALgBANQABAOgGAKQgFAKgJAGQgKAGgLAAQgJAAgHgEQgIgEgFgHIAAA4gAgKgrQgGAEgDAGQgDAFgBAJQABAIADAGQADAFAGADQAEADAGAAQAGAAAFgDQAGgDADgGQAEgGAAgIQAAgIgEgGQgDgGgGgDQgFgDgGAAQgGAAgEADg");
	this.shape_25.setTransform(38.75,-1.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYApQgJgEgEgJQgFgJABgMIAAgzIAWAAIAAAwQAAALAFAFQAGAGAIAAQAJAAAGgGQAFgFAAgLIAAgwIAWAAIAABYIgWAAIAAgLQgEAGgIADQgGADgIAAQgLAAgHgEg");
	this.shape_26.setTransform(27.35,-3.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKABANIgCAIIhAAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgFAFQgGAGgCAJIAqAAIAAAAg");
	this.shape_27.setTransform(12.7,-3.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUA8IAAgyQAAgKgFgFQgGgGgJAAQgIAAgGAGQgFAFAAAKIAAAyIgXAAIAAh3IAXAAIAAApQAEgFAIgEQAHgDAIAAQAKAAAIAEQAIAFAEAIQAFAJAAALIAAA1g");
	this.shape_28.setTransform(2.125,-4.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANA4QgcAAAAgcIAAgqIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAUAAIAAATIgUAAIAAAqQAAAFACACQACACAFAAIALAAIAAATg");
	this.shape_29.setTransform(-6.725,-4.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAFQgEAEAAAMIAAAtg");
	this.shape_30.setTransform(-17.1,-3.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQALgGAMAAQANAAALAGQAKAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAGgMAAQgMAAgLgGgAgQgTQgGAHAAAMQAAANAGAHQAHAHAJAAQAFAAAGgDQAFgDADgGQAEgGAAgJQAAgMgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_31.setTransform(-26.15,-3.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNA/IAAhGIgKAAIAAgTIAKAAIAAgEQAAgRAJgHQAJgIASAAIAAATQgIAAgDADQgDADAAAIIAAADIAPAAIAAATIgPAAIAABGg");
	this.shape_32.setTransform(-34.375,-5.1265);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKAAgOQAAgNAFgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKAAANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_33.setTransform(-46.5,-3.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAFQgEAEAAAMIAAAtg");
	this.shape_34.setTransform(-54.7,-3.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAoQgJgFgGgLQgEgLAAgNQAAgNAEgKQAGgLAJgFQAKgGALAAQAJAAAHAEQAIAEAFAGIAAgNIAWAAIAABZIgWAAIAAgNQgEAGgJAEQgHAEgJAAQgLAAgKgGgAgKgWQgGADgDAGQgDAGgBAHQABAIADAGQADAGAGADQAFADAFAAQAGAAAGgDQAFgDADgGQAEgGAAgIQAAgHgEgGQgDgGgFgDQgGgDgGAAQgGAAgEADg");
	this.shape_35.setTransform(-64.3,-3.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtBDIAAiDIAWAAIAAANQAEgGAIgFQAIgEAJAAQAMAAAJAGQAJAGAFAKQAFALABANQgBAOgFAKQgFAKgJAGQgJAGgMAAQgJAAgIgEQgHgEgFgHIAAA4gAgLgrQgFAEgEAGQgDAFAAAJQAAAIADAGQAEAFAFADQAGADAFAAQAGAAAFgDQAGgDADgGQADgGAAgIQAAgIgDgGQgDgGgGgDQgFgDgGAAQgFAAgGADg");
	this.shape_36.setTransform(-74.95,-1.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgFgGgJAAQgIAAgFAFQgHAGgBAJIAqAAIAAAAg");
	this.shape_37.setTransform(-85.95,-3.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAFQgEAEAAAMIAAAtg");
	this.shape_38.setTransform(-94.15,-3.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtBDIAAiDIAWAAIAAANQAFgGAIgFQAHgEAJAAQALAAAKAGQAJAGAFAKQAFALAAANQAAAOgFAKQgFAKgJAGQgKAGgLAAQgJAAgHgEQgIgEgFgHIAAA4gAgKgrQgGAEgDAGQgEAFAAAJQAAAIAEAGQADAFAGADQAFADAFAAQAGAAAFgDQAGgDADgGQADgGAAgIQAAgIgDgGQgDgGgGgDQgFgDgGAAQgFAAgFADg");
	this.shape_39.setTransform(-103.2,-1.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbApQgIgEgFgKQgEgIAAgMIAAg0IAcAAIAAAxQAAAIAEAFQAFAGAHAAQAIAAAEgGQAFgFABgIIAAgxIAbAAIAABZIgbAAIAAgMQgFAGgHAEQgGAEgJgBQgKABgIgFg");
	this.shape_40.setTransform(45.2,-20.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAoQgLgFgGgLQgGgKAAgOQAAgNAGgKQAHgLAKgGQALgFAMAAQANAAALAFQALAGAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAHgNAAQgMAAgLgHgAgMgPQgGAFAAAKQAAALAGAGQAFAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgFQgFgHgIAAQgHAAgFAHg");
	this.shape_41.setTransform(34.375,-20.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiBCIAVgtIglhXIAeAAIAVA4IAUg4IAeAAIg3CEg");
	this.shape_42.setTransform(23.85,-18.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdA6QgNgJgBgQIAbAAQABAFAFADQAFADAHAAQAIAAAFgFQAFgFAAgLIAAgMQgEAGgHAEQgHAEgJAAQgLAAgJgGQgJgFgFgLQgFgKgBgOQABgNAFgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgNIAcAAIAABZQAAANgGAKQgEAKgKAGQgKAGgPAAQgUAAgMgKgAgMglQgGAGgBAKQABALAGAFQAFAFAIABQAIgBAFgFQAGgFAAgLQAAgKgGgGQgFgGgIAAQgIAAgFAGg");
	this.shape_43.setTransform(9,-18.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARAtIAAgvQAAgJgEgGQgFgEgIAAQgHAAgEAEQgFAGAAAJIAAAvIgcAAIAAhZIAcAAIAAANQAEgHAHgDQAGgDAJgBQAQAAAJAKQAKALAAASIAAAzg");
	this.shape_44.setTransform(-1.875,-21);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgmQgEgEAAgHQAAgGAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgHAAQgGAAgFgEg");
	this.shape_45.setTransform(-10.025,-22.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgvBDIAAiEIAcAAIAAANQAEgGAHgEQAIgEAIAAQALAAAJAGQAJAFAFALQAGAKAAAOQAAAOgGAKQgFAKgJAGQgJAGgLAAQgJAAgGgEQgIgEgEgGIAAA3gAgOgkQgFAGAAAKQAAALAFAFQAGAFAIAAQAIAAAFgFQAHgGAAgKQgBgKgFgGQgGgGgIAAQgIAAgGAGg");
	this.shape_46.setTransform(-17.9,-18.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_47.setTransform(-26.325,-22.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAoQgLgFgFgLQgGgKAAgOQAAgNAGgKQAFgLALgGQAKgFAMAAQANgBALAGQAKAFAGALQAFAKAAAOIAAAGIg+AAQABAJAFAFQAEAEAHAAQAKAAAEgJIAdAAQgCAJgGAHQgGAHgJAEQgJAEgLABQgMAAgKgHgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_48.setTransform(-33.925,-20.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAWA5IAAgvIgqAAIAAAvIgcAAIAAhxIAcAAIAAAtIAqAAIAAgtIAbAAIAABxg");
	this.shape_49.setTransform(-45.1,-22.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-111,-35.4,222,61.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA4BGIAAhYIg4BDIgBAAIg3hDIAABYIgoAAIAAiLIAtAAIAzBDIA1hDIAsAAIAACLg");
	this.shape.setTransform(26.175,101.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBGIgNgbIhMAAIgNAbIgrAAIBJiLIArAAIBJCLgAAYAOIgYgxIgYAxIAwAAg");
	this.shape_1.setTransform(4.775,101.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKBGIAAiLICSAAIAAAfIhqAAIAAAXIBYAAIAAAdIhYAAIAAAZIBtAAIAAAfg");
	this.shape_2.setTransform(-13.575,101.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTBGIAAhqIg7AAIAAghICdAAIAAAhIg7AAIAABqg");
	this.shape_3.setTransform(-31.55,101.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.FIRSTALERT_Logo();
	this.instance.setTransform(-89,48,0.6371,0.6371);

	this.instance_1 = new lib.DNN_Logo();
	this.instance_1.setTransform(-81,-5,0.6371,0.6371);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAZIgvAAIAAAaIApAAIAAAYIgpAAIAAAdIAvAAIAAAZg");
	this.shape_4.setTransform(37.975,-19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBBIAAg2IgxAAIAAA2IggAAIAAiBIAgAAIAAAzIAxAAIAAgzIAgAAIAACBg");
	this.shape_5.setTransform(25.675,-19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBBIAAhoIgiAAIAAgZIBkAAIAAAZIgjAAIAABog");
	this.shape_6.setTransform(12.95,-19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBBIg1hQIAABQIgfAAIAAiBIAfAAIA1BQIAAhQIAgAAIAACBg");
	this.shape_7.setTransform(-4.25,-19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_8.setTransform(-14.35,-19.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA6QgPgIgJgPQgJgQAAgTQAAgSAJgQQAJgPAPgIQAQgJARAAQATAAAPAJQAQAIAIAPQAJAQAAASQAAATgJAQQgJAPgPAIQgPAJgTAAQgRAAgQgJgAgYgbQgJAKAAARQAAARAJALQAJAKAPAAQAQAAAJgKQAKgLAAgRQAAgQgKgLQgJgKgQAAQgPAAgJAKg");
	this.shape_9.setTransform(-24.775,-19.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA2QgMgLAAgWIAfAAQAAAIAEAEQADAFAFAAQAGAAADgEQADgEAAgHIAAhYIAgAAIAABYQAAAVgLALQgMALgUAAQgTAAgNgMg");
	this.shape_10.setTransform(-38.325,-19.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-89,-33.5,176.5,148.6), null);


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
	this.shape.setTransform(77.4,-15.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBkIAAiOIgeAAIAAg5IBdAAIAADHg");
	this.shape_1.setTransform(63.725,-15.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/AZIAAgxIB/AAIAAAxg");
	this.shape_2.setTransform(44.2,-14.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBXQgUgRAAglIA7AAQAAAKADAFQADAGAIgBQAFAAADgDQADgFAAgFQABgIgGgEQgFgEgLAAIgKAAIAAgwIAKAAQASABAAgQQAAgHgDgDQgEgEgDAAQgKAAAAARIg7AAQAAggATgRQASgSAhABQAWAAAOAHQAQAIAIAMQAIANAAAPQgBAUgIAKQgKALgLAEIAAABQAiALAAAiQgBARgIAOQgIAOgQAHQgPAIgVAAQgigBgVgQg");
	this.shape_3.setTransform(22.9,-15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBkIAAiOIgeAAIAAg5IBdAAIAADHg");
	this.shape_4.setTransform(8.125,-15.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BhIAAjBIA8AAIAACTIA7AAIAAAug");
	this.shape_5.setTransform(-9.05,-15.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBhIAAjBIA8AAIAADBg");
	this.shape_6.setTransform(-21.4,-15.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBhIgjhFIgBAAIAABFIg9AAIAAjBIBaAAQAYAAARAIQARAJAIAOQAIAOAAATQAAATgLAOQgKAPgVAHIArBKgAgVgMIAYAAQAIAAAFgEQAEgEABgJQgBgHgEgFQgFgEgIAAIgYAAg");
	this.shape_7.setTransform(-35.1,-15.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPBhIAAjBIBVAAQAkAAASASQATASAAAfQAAASgIAOQgJAPgQAJQgQAIgYAAIgYAAIAAA+gAgSgMIASAAQASAAAAgRQAAgSgSAAIgSAAg");
	this.shape_8.setTransform(-53.75,-15.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqBhIgJgdIhBAAIgJAdIhAAAIBHjBIBFAAIBHDBgAARAWIgRg1IgRA1IAiAAg");
	this.shape_9.setTransform(-74.2,-15.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Date, new cjs.Rectangle(-86.4,-35.7,172.9,41.5), null);


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
	this.shape.setTransform(149.9977,299.9878,1,2.3999);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ad_bg, new cjs.Rectangle(0,0,300,600), null);


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
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// Sponsored by:
	this.instance = new lib.Sponsoredby();
	this.instance.setTransform(149.55,154.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({y:114.95},9,cjs.Ease.get(1)).wait(102));

	// Helping you prepare for the upcoming severe weather season
	this.instance_1 = new lib.F2();
	this.instance_1.setTransform(39.5,58.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:149.5,alpha:1},9,cjs.Ease.get(1)).wait(112));

	// JOIN THE
	this.instance_2 = new lib.F1();
	this.instance_2.setTransform(150.05,143.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:83.8,alpha:1},9,cjs.Ease.get(1)).to({_off:true},100).wait(121));

	// APRIL 6 - 10
	this.instance_3 = new lib.Date();
	this.instance_3.setTransform(150.75,3.85);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:46.85,alpha:1},9,cjs.Ease.get(1)).to({_off:true},110).wait(121));

	// FLash
	this.instance_4 = new lib.flash();
	this.instance_4.setTransform(150.8,119.6,1,1,0,0,0,162.8,144.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(1)).wait(79));

	// RAIN
	this.instance_5 = new lib.RAIN_1();
	this.instance_5.setTransform(150.05,100.1,1.1732,1.1732,0,0,0,162,160.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

	// Cloud2
	this.instance_6 = new lib.Cloud2_1();
	this.instance_6.setTransform(271.45,32.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:267.7679,alpha:0.3347},0).wait(1).to({x:264.1012,alpha:0.6681},0).wait(1).to({x:260.45,alpha:1},0).wait(1).to({x:258.4749,alpha:0.6652},0).wait(1).to({x:256.5083,alpha:0.3319},0).wait(1).to({x:254.55,alpha:0},0).wait(1).to({x:252.596,alpha:0.0085},0).wait(1).to({x:250.6504,alpha:0.0169},0).wait(1).to({x:248.7133,alpha:0.0253},0).wait(1).to({x:246.7845,alpha:0.0337},0).wait(1).to({x:244.8641,alpha:0.042},0).wait(1).to({x:242.9522,alpha:0.0503},0).wait(1).to({x:241.0486,alpha:0.0585},0).wait(1).to({x:239.1535,alpha:0.0667},0).wait(1).to({x:237.2667,alpha:0.0749},0).wait(1).to({x:235.3884,alpha:0.083},0).wait(1).to({x:233.5185,alpha:0.0911},0).wait(1).to({x:231.6569,alpha:0.0992},0).wait(1).to({x:229.8038,alpha:0.1072},0).wait(1).to({x:227.9591,alpha:0.1152},0).wait(1).to({x:226.1228,alpha:0.1232},0).wait(1).to({x:224.2948,alpha:0.1311},0).wait(1).to({x:222.4753,alpha:0.139},0).wait(1).to({x:220.6642,alpha:0.1469},0).wait(1).to({x:218.8615,alpha:0.1547},0).wait(1).to({x:217.0672,alpha:0.1624},0).wait(1).to({x:215.2813,alpha:0.1702},0).wait(1).to({x:213.5038,alpha:0.1779},0).wait(1).to({x:211.7348,alpha:0.1856},0).wait(1).to({x:209.9741,alpha:0.1932},0).wait(1).to({x:208.2218,alpha:0.2008},0).wait(1).to({x:206.4779,alpha:0.2083},0).wait(1).to({x:204.7425,alpha:0.2159},0).wait(1).to({x:203.0154,alpha:0.2233},0).wait(1).to({x:201.2967,alpha:0.2308},0).wait(1).to({x:199.5865,alpha:0.2382},0).wait(1).to({x:197.8846,alpha:0.2456},0).wait(1).to({x:196.1912,alpha:0.2529},0).wait(1).to({x:194.5061,alpha:0.2602},0).wait(1).to({x:192.8295,alpha:0.2675},0).wait(1).to({x:191.1613,alpha:0.2747},0).wait(1).to({x:189.5014,alpha:0.2819},0).wait(1).to({x:187.85,alpha:0.2891},0).wait(1).to({x:186.2083,alpha:0.5273},0).wait(1).to({x:184.5749,alpha:0.7642},0).wait(1).to({x:182.95,alpha:1},0).wait(1).to({x:181.3249,alpha:0.6649},0).wait(1).to({x:179.7082,alpha:0.3316},0).wait(1).to({x:178.1,alpha:0},0).wait(1).to({x:176.5072},0).wait(1).to({x:174.9228},0).wait(1).to({x:173.3469},0).wait(1).to({x:171.7793},0).wait(1).to({x:170.2202},0).wait(1).to({x:168.6694},0).wait(1).to({x:167.127},0).wait(1).to({x:165.5931},0).wait(1).to({x:164.0676},0).wait(1).to({x:162.5504},0).wait(1).to({x:161.0417},0).wait(1).to({x:159.5414},0).wait(1).to({x:158.0495},0).wait(1).to({x:156.5659},0).wait(1).to({x:155.0908},0).wait(1).to({x:153.6241},0).wait(1).to({x:152.1658},0).wait(1).to({x:150.7159},0).wait(1).to({x:149.2745},0).wait(1).to({x:147.8414},0).wait(1).to({x:146.4167},0).wait(1).to({x:145.0004},0).wait(1).to({x:143.5926},0).wait(1).to({x:142.1931},0).wait(1).to({x:140.802},0).wait(1).to({x:139.4194},0).wait(1).to({x:138.0452},0).wait(1).to({x:136.6793},0).wait(1).to({x:135.3219},0).wait(1).to({x:133.9728},0).wait(1).to({x:132.6322},0).wait(1).to({x:131.3},0).wait(1).to({x:129.9749,alpha:0.3355},0).wait(1).to({x:128.6583,alpha:0.6688},0).wait(1).to({x:127.35,alpha:1},0).wait(1).to({x:126.0583,alpha:0.6645},0).wait(1).to({x:124.775,alpha:0.3312},0).wait(1).to({x:123.5,alpha:0},0).wait(1).to({x:122.2273},0).wait(1).to({x:120.9631},0).wait(1).to({x:119.7072},0).wait(1).to({x:118.4598},0).wait(1).to({x:117.2207},0).wait(1).to({x:115.9901},0).wait(1).to({x:114.7678},0).wait(1).to({x:113.554},0).wait(1).to({x:112.3485},0).wait(1).to({x:111.1515},0).wait(1).to({x:109.9628},0).wait(1).to({x:108.7826},0).wait(1).to({x:107.6107},0).wait(1).to({x:106.4473},0).wait(1).to({x:105.2922},0).wait(1).to({x:104.1456},0).wait(1).to({x:103.0073},0).wait(1).to({x:101.8775},0).wait(1).to({x:100.7561},0).wait(1).to({x:99.643},0).wait(1).to({x:98.5384},0).wait(1).to({x:97.4421},0).wait(1).to({x:96.3543},0).wait(1).to({x:95.2748},0).wait(1).to({x:94.2038},0).wait(1).to({x:93.1411},0).wait(1).to({x:92.0869},0).wait(1).to({x:91.041},0).wait(1).to({x:90.0036},0).wait(1).to({x:88.9746},0).wait(1).to({x:87.9539},0).wait(1).to({x:86.9417},0).wait(1).to({x:85.9378},0).wait(1).to({x:84.9424},0).wait(1).to({x:83.9554},0).wait(1).to({x:82.9767},0).wait(1).to({x:82.0065},0).wait(1).to({x:81.0446},0).wait(1).to({x:80.0912},0).wait(1).to({x:79.1462},0).wait(1).to({x:78.2095},0).wait(1).to({x:77.2813},0).wait(1).to({x:76.3614},0).wait(1).to({x:75.45},0).wait(1).to({x:74.5415,alpha:0.3365},0).wait(1).to({x:73.6415,alpha:0.6698},0).wait(1).to({x:72.75,alpha:1},0).wait(1).to({x:71.875,alpha:0.6634},0).wait(1).to({x:71.0083,alpha:0.3301},0).wait(1).to({x:70.15,alpha:0},0).wait(1).to({x:69.2973},0).wait(1).to({x:68.4531},0).wait(1).to({x:67.6172},0).wait(1).to({x:66.7898},0).wait(1).to({x:65.9707},0).wait(1).to({x:65.16},0).wait(1).to({x:64.3578},0).wait(1).to({x:63.5639},0).wait(1).to({x:62.7785},0).wait(1).to({x:62.0014},0).wait(1).to({x:61.2327},0).wait(1).to({x:60.4725},0).wait(1).to({x:59.7206},0).wait(1).to({x:58.9772},0).wait(1).to({x:58.2421},0).wait(1).to({x:57.5155},0).wait(1).to({x:56.7972},0).wait(1).to({x:56.0874},0).wait(1).to({x:55.3859},0).wait(1).to({x:54.6929},0).wait(1).to({x:54.0082},0).wait(1).to({x:53.332},0).wait(1).to({x:52.6641},0).wait(1).to({x:52.0047},0).wait(1).to({x:51.3536},0).wait(1).to({x:50.711},0).wait(1).to({x:50.0767},0).wait(1).to({x:49.4509},0).wait(1).to({x:48.8334},0).wait(1).to({x:48.2244},0).wait(1).to({x:47.6238},0).wait(1).to({x:47.0315},0).wait(1).to({x:46.4477},0).wait(1).to({x:45.8722},0).wait(1).to({x:45.3052},0).wait(1).to({x:44.7465},0).wait(1).to({x:44.1963},0).wait(1).to({x:43.6545},0).wait(1).to({x:43.121},0).wait(1).to({x:42.596},0).wait(1).to({x:42.0793},0).wait(1).to({x:41.5711},0).wait(1).to({x:41.0713},0).wait(1).to({x:40.5798},0).wait(1).to({x:40.0968},0).wait(1).to({x:39.6222},0).wait(1).to({x:39.1559},0).wait(1).to({x:38.6981},0).wait(1).to({x:38.2487},0).wait(1).to({x:37.8076},0).wait(1).to({x:37.375},0).wait(1).to({x:36.9508},0).wait(1).to({x:36.5349},0).wait(1).to({x:36.1275},0).wait(1).to({x:35.7285},0).wait(1).to({x:35.3379},0).wait(1).to({x:34.9556},0).wait(1).to({x:34.5818},0).wait(1).to({x:34.2164},0).wait(1).to({x:33.8593},0).wait(1).to({x:33.5107},0).wait(1).to({x:33.1705},0).wait(1).to({x:32.8387},0).wait(1).to({x:32.5152},0).wait(1).to({x:32.2002},0).wait(1).to({x:31.8936},0).wait(1).to({x:31.5954},0).wait(1).to({x:31.3056},0).wait(1).to({x:31.0241},0).wait(1).to({x:30.7511},0).wait(1).to({x:30.4865},0).wait(1).to({x:30.2303},0).wait(1).to({x:29.9825},0).wait(1).to({x:29.743},0).wait(1).to({x:29.512},0).wait(1).to({x:29.2894},0).wait(1).to({x:29.0752},0).wait(1).to({x:28.8694},0).wait(1).to({x:28.672},0).wait(1).to({x:28.4829},0).wait(1).to({x:28.3023},0).wait(1).to({x:28.1301},0).wait(1).to({x:27.9663},0).wait(1).to({x:27.8109},0).wait(1).to({x:27.6639},0).wait(1).to({x:27.5253},0).wait(1).to({x:27.3951},0).wait(1).to({x:27.2733},0).wait(1).to({x:27.1599},0).wait(1).to({x:27.0548},0).wait(1).to({x:26.9582},0).wait(1).to({x:26.87},0).wait(1).to({x:26.7902},0).wait(1).to({x:26.7188},0).wait(1).to({x:26.6558},0).wait(1).to({x:26.6012},0).wait(1).to({x:26.555},0).wait(1).to({x:26.5172},0).wait(1).to({x:26.4878},0).wait(1).to({x:26.4668},0).wait(1).to({x:26.4542},0).wait(1).to({x:26.45},0).wait(1));

	// Cloud1
	this.instance_7 = new lib.Cloud1_1();
	this.instance_7.setTransform(266.45,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:26.45},239,cjs.Ease.get(1)).wait(1));

	// LIghtning
	this.instance_8 = new lib.lightnung();
	this.instance_8.setTransform(160,89,0.6673,0.6673,0,-3.7027,176.2973,192,127.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},3).to({alpha:0},3).wait(37).to({alpha:1},3).to({alpha:0},3).wait(32).to({alpha:1},3).to({alpha:0},3).wait(44).to({alpha:1},3).to({alpha:0},3).wait(103));

	// Turnodo
	this.instance_9 = new lib.Turnodo_1();
	this.instance_9.setTransform(108.65,130.6,0.8524,0.8524,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0.3,regY:0.3,scaleX:1.0403,scaleY:1.0403,x:182.75,y:112.95},239,cjs.Ease.get(1)).wait(1));

	// BG2
	this.instance_10 = new lib.BG2();
	this.instance_10.setTransform(-75,0,0.3248,0.3248);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(240));

	// BG1
	this.instance_11 = new lib.BG1();
	this.instance_11.setTransform(-75,0,0.3248,0.3248);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-125.8,824,389.8);


// stage content:
(lib.KSFY_213652_MM_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(150,124.9964);

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
	this.instance.setTransform(150,52.1,1,0.4167,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,151,126);
// library properties:
lib.properties = {
	id: '48CD351458C9064B938336FCF791836E',
	width: 300,
	height: 250,
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
an.compositions['48CD351458C9064B938336FCF791836E'] = {
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