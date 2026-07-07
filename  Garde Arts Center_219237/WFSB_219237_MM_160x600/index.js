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



(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,482);


(lib.Bg1 = function() {
	this.initialize(img.Bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.BGG2 = function() {
	this.initialize(img.BGG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,451);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,83);


(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,435);


(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,434);


(lib.Img3 = function() {
	this.initialize(img.Img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,580);


(lib.Line = function() {
	this.initialize(img.Line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,97);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,222);


(lib.Logo2 = function() {
	this.initialize(img.Logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,222);


(lib.screen = function() {
	this.initialize(img.screen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,332);// helper functions:

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


(lib.sc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.screen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc, new cjs.Rectangle(0,0,216,332), null);


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
	this.instance.setTransform(-63.95,-47.3,0.4263,0.4263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2_1, new cjs.Rectangle(-63.9,-47.3,127.9,94.69999999999999), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(0,0,300,222), null);


(lib.Line_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line_1, new cjs.Rectangle(0,0,22,97), null);


(lib.IMG4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._4();
	this.instance.setTransform(-33.8,-70.25,1.0054,1.0054);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-70.2,67.69999999999999,140.5);


(lib.img3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img3();
	this.instance.setTransform(209,-37,1.9806,1.9806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img3, new cjs.Rectangle(209,-37,333.70000000000005,333.2), null);


(lib.Img2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img2();
	this.instance.setTransform(125,-13,1.4658,1.4658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(125,-13,297.6,222.7), null);


(lib.Img1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img1();
	this.instance.setTransform(136,-13,1.3566,1.3566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(136,-13,267.5,200.7), null);


(lib.Header = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgFAEgDQAEgDAFAAQAGAAAEADQAEADAAAFQAAAFgEAEQgEADgGAAQgGAAgDgDg");
	this.shape.setTransform(177.9147,246.6763,1.6329,1.6329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlAqIghABIAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQAAgDgDgCQgCgBgEAAQgEAAgDACQgEADgCAEQgCADAAAGIAAAsQAAAHACACQACACAFAAIAAADIgqAAIAAgDQAFAAADgCQACgCAAgHIAAgyQAAgIgCgCQgCgEgGAAIAAgDIAKAAIAMAAIALgCIAAAOQAEgHAHgEQAHgEAHAAIAAABQAHAAAEABQAEACADADQACACACAGQABADAAAKIAAAqQAAAGACADQADACAFAAIAAAEIgJgBg");
	this.shape_1.setTransform(166.4846,241.3694,1.6329,1.6329);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXApQgFgBgCgDQgCgDgCgFIgBg0QAAgIgCgCQgCgEgGAAIAAgEIAKABIANgBIAKgCIAABCIABAHQABADACACQACABAEAAQAEAAADgCQAEgDABgDQADgFAAgFIAAgpQAAgHgDgEQgCgDgGAAIAAgEIAXAAIALgCIAABDQAAAHACAEQACADAGAAIAAADIgKAAIgYACIAAgOQgDAHgHAEQgGAEgIAAQgHAAgEgDg");
	this.shape_2.setTransform(150.3191,241.5736,1.6329,1.6329);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA5IAAgDQAFAAADgCQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAAhhIgEgDIgIgBIAAgEIBVAAIgBAlIgDAAQgCgMgEgIQgEgHgFgDQgFgDgIAAIgFAAIgGABIgDADIgBAIIAAAoIAFAAQADAAAEgCQAEgCACgDQADgFAAgCIACgIIAEAAIAAAtIgDAAQgBgFgCgFQgCgFgEgDQgEgDgGAAIgFAAIAAAlQAAAGABADQABADADABQADABAIAAIAAAEg");
	this.shape_3.setTransform(134.8885,239.0426,1.6329,1.6329);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA7QgKgBgHgBQgJgDgDgCQgFgDAAgGQAAgFAFgEQAEgDAJgDIABADQgDADgBACIgBAGQAAAGAGAEQAFADAMAAQAGAAAFgBQAGgCADgEQAEgDAAgGQAAgGgEgCQgEgEgKAAIgJAAQgHAAgEgCQgFgBgDgDQgDgDAAgFQAAgGAGgGQAEgCAHgEIgJgDQgIgDgEgFQgEgGAAgIQAAgJAEgGQAFgGAHgCQAGgCAKgBQAIABAHACQAFACAEADIAFgGQAFgDAGAAQAGAAACACQADADAAAFQAAAFgDACQgDACgDAAQgDAAgCgCQgCgCAAgEQgBgDACgFQgFACgCADIgDADIABABQAEAGAAAJQAAAJgEAFQgDAFgJADQgGAEgJAAIgDAAIgEACQgCACAAADQAAAFAGAAIARAAQAJAAAGACQAIACADAEQAEAFAAAIQAAAIgFAGQgEAHgLAEQgLAFgOAAgAgOgwQgCAGAAAMQAAALACAHQAEAEADAAQAEAAADgEQABgHAAgLQAAgMgBgGQgCgFgFAAQgEAAgDAFg");
	this.shape_4.setTransform(113.7428,243.6963,1.6329,1.6329);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANA+IghAAIAAgDQAEAAADgDQADgCgBgHIAAgxQAAgJgBgCQgCgDgHgBIAAgDIAKABIAXgCIAABEQAAAHACACQADADAFAAIAAADIgJAAgAgLgoQgDgDAAgGQAAgFADgEQAEgDAHAAQAGAAADADQAFAEAAAFQAAAGgFADQgDADgGABQgHgBgEgDg");
	this.shape_5.setTransform(102.4351,238.2262,1.6329,1.6329);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAGAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIACgIIAAhPIgCgJQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgIgCIAAgDIAxAAQAUAAAKAHQAKAHgBAMQAAAGgDAFQgDAGgHAEQgHAEgLADIAAAAQANABAKADQAKAFADAGQADAFABAHQAAALgGAGQgEAIgKADQgMAEgNAAgAgKAoIABAIQAAABABAAQAAABAAAAQABABAAAAQABABABAAIAGABQAKAAAGgHQAFgHAAgOQABgMgHgHQgFgGgOAAIgHAAgAgIgyQgCADAAAIIAAAkIAHAAQAHAAADgDQAEgDACgHQACgGAAgHQAAgLgEgGQgDgGgIAAIAAgBQgGAAgCADg");
	this.shape_6.setTransform(89.5354,239.0834,1.6329,1.6329);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgEAEgEQAEgDAFAAQAHAAADADQAEAEAAAEQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_7.setTransform(198.0807,210.8251,1.6329,1.6329);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAqIgOgFQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgCAEIgDAAIAAgfIAEAAQAAAGADAJQAEAHADADQAFAEAGAAIAFgBIAEgEQACgCAAgEQAAgIgFgEIgLgKIgJgIQgFgDgDgGQgDgEAAgHQAAgGAEgFQAEgFAGgDQAIgCAGAAIAAAAQAGAAAFABQAFABACACQAGAFABgJIADAAIgBAcIgDAAIgDgMQgCgFgEgFQgEgDgHAAQgEAAgDACQgDAEAAAEQAAAFACADIAaAWQAEAEADAEQACAEAAAHQAAAIgEAEQgFAHgGABQgGADgJAAIgHgBg");
	this.shape_8.setTransform(188.61,205.7224,1.6329,1.6329);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEA/IAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQgBgDgCgCQgCgBgEAAQgDAAgEACQgCABgEAFQgCAFAAAEIAAAtQAAAHACACQADACADAAIAAAEIgIgBIgLAAIgNAAIgKABIAAgEQAGAAACgCQADgDAAgGIAAhaQAAgHgDgEQgBgDgHAAIAAgEIAXAAIALgCIAAABIAAA3QAEgIAHgEQAGgDAJAAQAHAAADABQAFACACADQACACACAGQABADAAAJIAAArQAAAGADADQACACAGAAIAAAEg");
	this.shape_9.setTransform(174.6081,202.2525,1.6329,1.6329);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA4QgIgBgEgDQgFgEAAgFQAAgEAFgEQAEgFAJgCIACACIgFAGIgBAGQAAAGAGAEQAFADAMAAQAGABAFgCQAGgCAEgEQADgDAAgHQAAgEgEgEQgEgDgKAAIgJAAIgLgBQgFgCgDgDQgCgDAAgFQAAgHAFgFQADgCAJgEIgKgCQgIgEgDgFQgFgFAAgJQAAgJAFgFQAEgGAHgDQAGgCAKAAQAHAAAJACIAIAFIAFgFQAFgEAGgBQAFABADADQADABAAAGQAAAEgDACQgDADgDAAQgDAAgCgCQgBgBgBgEQAAgEACgFQgFACgCACIgDAFIAAABQAEAFAAAJQAAAJgEAFQgDAFgIAEQgGACgKAAIgCAAIgEADQgDACAAACQAAAGAGAAIARAAQAJAAAHACQAHACAEAFQAEAFAAAHQAAAHgFAIQgFAGgLAFQgLADgOAAQgLAAgHgCgAgNgwQgDAEAAAOQAAANADAEQACAGAEAAQAFAAACgGQABgFAAgMQAAgMgBgGQgCgFgFAAQgEAAgCAFg");
	this.shape_10.setTransform(159.3816,207.8451,1.6329,1.6329);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgDgBgEgDQgDgEAAgEQgBgDAAgKIAAgnQAAgHgDgDQgCgEgGAAIAAgDIAKAAIANAAIALgCIAABBIAAAHQABADACABQADACADABQADAAAEgDQADgCADgEQACgFAAgFIAAgpQAAgIgCgCQgCgEgGAAIAAgDIAJAAIANAAIALgCIAABCQAAAGACAEQACAEAGAAIAAADIgKAAIgXACIAAgOQgEAIgHADQgFAEgJgBQgHAAgEgCg");
	this.shape_11.setTransform(144.1142,205.7224,1.6329,1.6329);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALApQgDgCgBgCQgCgDAAgEQgDAFgFAEQgFAEgJAAIAAAAQgGAAgFgDQgFgDgCgEQgCgEAAgGQAAgHACgEQAEgFAFgCIAKgFIAKgCIAIgEQADgCAAgEIAAgNQAAgEgCgDQgBgDgCgCQgDgCgEAAIgHABQgDABgBACQACABAFAEQACADAAAEQAAAGgEADQgEADgFAAQgFAAgDgEQgEgDAAgFQAAgGACgCQADgDAEgCQADgDAIgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAEAAAFQACAGAAAHIAAArIAAAGQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACgBIADgCIABADQgDADgEACQgEABgGAAQgEAAgGgCgAAAgBIgJAHQgDADgCADQgBAEAAAEQAAAGADADQADADAEABQAEAAABgCQACgBADgEIAAggIgFAFg");
	this.shape_12.setTransform(129.8674,205.6407,1.6329,1.6329);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA5IAAgEIAHgBQADgBABgDIABgIIAAhPIgBgIQgBgEgDAAIgHgBIAAgEIAxAAIAAAEIgHABQgDAAgBAEQgBACAAAGIAABRIABAHQAAAAAAABQABABAAAAQAAABABAAQAAAAABAAIANABQAHAAADgDQAFgCAEgFIAGgLIAEgPIAEAAIAAAog");
	this.shape_13.setTransform(114.9674,203.2323,1.6329,1.6329);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaA4QgJgBgEgDQgEgDAAgGQAAgEAFgEQAEgFAJgCIABACIgEAGIgCAGQAAAGAHAEQAFADALAAQAHABAFgCQAGgCADgEQAEgFAAgFQAAgEgEgEQgEgDgKAAIgJAAQgHAAgEgBQgFgCgDgDQgDgDAAgFQAAgGAGgGQAEgDAIgDQgHgBgDgBQgIgDgEgGQgEgFAAgJQAAgJAEgFQAEgGAIgDQAFgCALAAQAHAAAIACQAFACADADIAFgFQAHgEAFgBQAGABACADQADACAAAFQAAAEgDACQgDADgDAAQgDAAgCgCQgCgBAAgEQgBgEADgFQgGACgCACIgDAFIABABQAEAFAAAJQAAAJgEAFQgEAGgIADQgGACgJAAIgDAAIgEADQgCACAAACQAAAGAGAAIAQAAQAKAAAGACQAHACAEAFQAEAFAAAHQAAAIgFAHQgFAGgKAFQgLADgPAAQgLAAgGgCgAgOgwQgCAGAAAMQAAAMACAFQADAGAEAAQAFAAACgGQABgFAAgMQAAgMgBgGQgCgFgFAAQgFAAgCAFg");
	this.shape_14.setTransform(93.5768,207.8451,1.6329,1.6329);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA+IAAgEQAGABACgDQADgCAAgHIAAgyQAAgGgDgEQgCgEgGABIAAgEIAKAAIAXgCIAABFQAAAHACACQACADAGgBIAAAEgAgLgoQgDgDAAgGQAAgGADgDQAFgDAGAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgHAAgEgEg");
	this.shape_15.setTransform(82.2283,202.375,1.6329,1.6329);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAGAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIABgIIAAhPIgBgJQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgIgCIAAgDIAxAAQATAAALAHQAKAIAAALQgBAGgDAFQgEAGgHAEQgFAEgNADIAAAAQAPABAJADQAKAFADAGQADAFABAHQAAALgGAGQgEAIgLADQgLAEgMAAgAgKAoIABAIQAAABABABQAAAAAAABQABAAAAAAQAAABABAAIAGABQALAAAGgHQAFgIABgNQgBgNgGgGQgGgGgNAAIgHAAgAgIgyQgCADAAAIIAAAkIAHAAQAHAAADgDQAFgEABgGQABgGABgHQgBgMgDgFQgEgGgHAAQgHAAgBACg");
	this.shape_16.setTransform(69.3694,203.2323,1.6329,1.6329);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAJQgDgDgBgGQABgFADgDQAEgDAFAAQAHAAADADQADADAAAFQAAAGgDADQgDADgHAAQgFAAgEgDg");
	this.shape_17.setTransform(195.3456,176.4739,1.6329,1.6329);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEArIAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQgBgDgCgCQgCgBgEAAQgEAAgDACQgEADgCAEQgCAEAAAFIAAAsQAAAGACADQACACAFAAIAAAEIgJgBIgYAAIgJABIAAgEQAFAAADgCQACgCAAgHIAAgyQAAgIgCgCQgCgEgGAAIAAgDIAJAAIANAAIALgCIAAAOQAFgIAGgDQAHgEAHAAIAAABQAHAAAEABQAEACADADQACACACAGIABA3QAAAGACADQADACAFAAIAAAEg");
	this.shape_18.setTransform(183.9563,171.1671,1.6329,1.6329);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAnQgIgEgFgKQgFgJABgPQAAgOAEgKQAFgKAJgEQAIgFALgBIAAAAQAPABAHAHQAIAJAAATIgsAAIAAAHQAAALAEAGQACAHAFADQAEADAFABIAHgCQADAAAEgDIAIgIIACABQgCAFgEAHQgDAFgIAEQgGADgJABQgKgBgIgEgAgFghQgEAHgBAQIAYAAQABgHgCgIQgBgGgCgEQgDgFgDABQgFAAgEAGg");
	this.shape_19.setTransform(169.4646,171.3712,1.6329,1.6329);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAnQgIgEgGgKQgEgJAAgPQAAgNAEgLQAGgKAJgEQAIgFALgBIAAAAQAOABAHAHQAIAIAAAUIgrAAIAAAHQAAALADAGQADAHAEADQAEADAGABIAGgCQAEAAAEgDQADgCAEgGIACABQgBAFgEAHQgEAFgHAEQgHADgIABQgKgBgIgEgAgFghQgEAIgBAPIAYAAIAAgPQgBgFgDgFQgCgFgEABQgEAAgFAGg");
	this.shape_20.setTransform(156.2383,171.3712,1.6329,1.6329);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiArIAAgEQAGAAACgDQACgBAAgIIAAgwQAAgIgCgEQgCgDgGAAIAAgDIAKABIANgBQAGAAAEgCIAAAPQACgFADgDIAHgFIAJgDQAGAAACADQADABACAEQACADAAAEQAAAGgEAEQgEADgFAAQgFAAgEgDQgDgBAAgGQAAgDACgEIAFgFIgEAAIgGACIgFAGIgCAGIgBAGIAAAqQAAAIADACQAEADAHAAIAAAEg");
	this.shape_21.setTransform(144.1142,171.2079,1.6329,1.6329);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAnQgIgEgGgKQgEgJAAgQQAAgNAEgKQAGgJAJgGQAKgFAJAAIAAABQAGAAAFABIAJADQAEADACAEQADAEAAAEQAAAFgDAFQgEADgFAAQgGAAgDgDQgEgDAAgGQAAgEADgEQADgDAFgCIgFgCQgCgCgDAAQgFAAgEADQgDADgCAFIgEAMQgCAHAAAIQABALADAIQACAGAFAEQAFACAFAAIAHgBQAEgBADgCQADgDAEgGIACABQgBAGgEAGQgEAGgGAEQgHAEgJAAQgKAAgIgFg");
	this.shape_22.setTransform(131.4186,171.3304,1.6329,1.6329);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPA5IgKgEIgGgCIgCABIgBAGIgEAAIAAgsIAEAAQAAAJAEALQADAKAGAFQAGAGALAAQAEAAAEgCIAIgGQACgFAAgFQAAgHgDgFQgDgEgFgFIgagSQgGgEgEgHQgFgHAAgJQABgJAFgHQAEgHAJgDQAIgDAJAAIAAAAQAJAAAFACIAJAEIACACIADABQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgFIADAAIgBAkIgDAAQgBgJgDgHQgEgIgFgFQgHgFgHAAQgHAAgFAEQgFAFAAAHQAAAHADAEQAEAFAFAEIAcATQAHAGADAGQAEAGAAAJQAAAKgGAHQgFAGgJAEQgIAEgLAAQgKAAgFgCg");
	this.shape_23.setTransform(117.4576,168.8811,1.6329,1.6329);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaA5QgIgCgEgEQgFgDAAgFQAAgEAFgFQAEgEAJgCIABADQgDADgBACIgBAFQAAAIAGADQAFADAMABQAHAAAEgCQAGgCADgEQAEgEAAgFQAAgFgEgDQgEgEgKAAIgJAAQgGAAgFgCQgFgBgDgDQgCgDAAgFQAAgHAFgEQAEgEAIgDIgKgCQgIgEgEgFQgEgGAAgIQAAgJAEgFQAFgHAHgCQAGgDAKAAQAIAAAHADQAFACAEADIAFgFQAFgFAGAAQAFAAADADQADADAAAEQAAAFgDADQgDACgDAAQgDAAgCgCQgCgCAAgEQgBgDACgFQgEACgDACIgDAFIABABQAEAFAAAJQAAAJgEAFQgDAFgJAEQgFACgKAAIgCAAIgFADQgCACAAADQAAAFAGAAIARAAQAJAAAGACQAIACADAEQAEAFAAAIQAAAIgFAGQgEAGgLAGQgLADgOAAQgLAAgHgBgAgOgwQgCAGAAALQAAANACAFQADAFAEABQAFgBACgFQABgFAAgNQAAgLgBgGQgCgFgFAAQgEAAgDAFg");
	this.shape_24.setTransform(96.271,173.4939,1.6329,1.6329);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVA+IAAgDQAFgBADgCQADgCgBgHIAAgyQAAgGgBgEQgDgEgGAAIAAgDIAKAAIAXgBIAABEQgBAHADACQADACAFABIAAADgAgLgoQgDgDAAgGQAAgFADgEQAFgDAGAAQAFAAAFADQADAEAAAFQAAAGgDADQgEAEgGgBQgHABgEgEg");
	this.shape_25.setTransform(84.9634,168.0238,1.6329,1.6329);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAFAAADgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIABgIIAAhPIgBgJQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAIgIgCIAAgDIAxAAQATAAALAHQAJAIAAALQAAAGgDAFQgDAGgHAEQgHAEgMADIAAAAQAOABAKADQAJAFAEAGQAEAGAAAGQAAAKgGAHQgFAIgKADQgKAEgOAAgAgKAoIABAIQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGABQALAAAGgHQAFgHAAgOQAAgMgGgHQgGgGgNAAIgHAAgAgIgyQgCAEAAAHIAAAkIAHAAQAHAAADgDQAEgDACgHQACgGAAgHQAAgLgEgGQgEgGgHAAQgHAAgBACg");
	this.shape_26.setTransform(72.1045,168.8811,1.6329,1.6329);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC554").s().p("AgIAKQgFgEAAgGQAAgFAFgEQADgEAFAAQAGAAAEAEQADAEAAAFQAAAGgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_27.setTransform(194.95,423.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgcA/QgLgHgHgMQgFgMAAgQQAAgPAFgLQAHgLALgIQAMgGANAAQAJAAAJAFQAKAEAGAHIAAgxIAVAAIAACIIgVAAIAAgQQgFAIgKAFQgIAEgMAAQgMAAgMgGgAgOgMQgHADgEAIQgFAHAAAKQAAALAFAIQAEAIAHAEQAHAEAHAAQAIAAAHgDQAHgFAFgIQAEgHAAgLQAAgLgEgHQgFgHgHgEQgHgEgIgBQgHABgHAEg");
	this.shape_28.setTransform(186.4,417.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgIgMAAQgLAAgHAIQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAAMQAFgHAJgDQAIgEAIAAQAMAAAJAFQAKAFAFAKQAGAKAAANIAAA8g");
	this.shape_29.setTransform(174.925,419.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgZAvQgKgFgFgKQgGgKAAgOIAAg7IAVAAIAAA4QAAAOAHAHQAHAHALAAQAMAAAHgHQAHgHAAgOIAAg4IAVAAIAABlIgVAAIAAgMQgFAHgIADQgJAEgIAAQgMAAgJgFg");
	this.shape_30.setTransform(163.175,419.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgaAuQgMgGgGgMQgHgMAAgQQAAgPAHgMQAGgMAMgGQAMgHAOAAQAPAAALAHQAMAGAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAGQgMAHgOAAQgOAAgMgHgAgPgdQgHAEgEAHQgEAIAAAKQAAARAJAJQAIAJANAAQAHAAAHgEQAHgEAFgIQAEgIAAgLQAAgKgEgIQgEgHgHgEQgHgEgIAAQgIAAgHAEg");
	this.shape_31.setTransform(151.675,419.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgZA0IAAhlIAVAAIAAAOQAEgHAIgEQAHgFALAAIAAAWIgFAAQgNAAgGAHQgGAFAAAQIAAA1g");
	this.shape_32.setTransform(142.975,419.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AgcAuQgLgHgGgMQgHgMAAgPQAAgPAHgMQAGgLALgHQALgHANAAQALAAAKAFQAIAFAGAHIAAgPIAWAAIAABlIgWAAIAAgPQgGAHgIAFQgKAFgLAAQgNAAgLgHgAgOgdQgHAEgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAFAHAAQAIAAAHgEQAIgFAEgHQAEgIAAgLQAAgKgEgHQgEgIgIgEQgHgEgIAAQgHAAgHAEg");
	this.shape_33.setTransform(132.7,419.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgTAxQgJgFgGgHQgGgIAAgJIAWAAQABAGAFAFQAGAEAHAAQAJAAAFgDQAFgEAAgFQAAgGgFgDIgRgGIgSgGQgIgCgFgGQgFgGAAgKQAAgIAFgHQAEgHAJgEQAJgEALAAQASAAAKAJQALAJABAPIgVAAQgBgHgFgEQgFgEgIAAQgIAAgEADQgFADAAAGQAAAEADACQADADAEACIAMAEIASAGQAHACAGAGQAFAGAAAKQAAAIgFAHQgFAHgJAEQgIAEgMAAQgLAAgKgEg");
	this.shape_34.setTransform(117.725,419.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AAMBAQgNAAgHgHQgIgHAAgPIAAg3IgMAAIAAgRIAMAAIAAgaIAUAAIAAAaIAZAAIAAARIgZAAIAAA3QAAAGADADQADACAGAAIANAAIAAASg");
	this.shape_35.setTransform(109.725,418.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AAaBFIAAg5QAAgNgHgHQgHgIgMAAQgLAAgHAIQgHAHAAANIAAA5IgVAAIAAiJIAVAAIAAAvQAGgGAIgEQAIgDAJAAQAMAAAJAFQAJAFAFAKQAGAKAAAMIAAA9g");
	this.shape_36.setTransform(100.725,417.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgfBEQgNgKgDgRIAWAAQABAIAJAFQAHAFALAAQAMAAAIgIQAIgIAAgPIAAgRQgGAIgIAEQgKAFgLAAQgNAAgLgGQgLgHgGgMQgHgLABgQQgBgPAHgMQAGgMALgHQALgGANAAQALAAAKAFQAJAEAFAHIAAgOIAWAAIAABmQgBAPgFALQgHALgLAGQgLAGgPAAQgVAAgNgJgAgOg2QgHAEgEAIQgFAIAAAKQAAALAFAIQAEAHAHAEQAHAEAHAAQAIAAAHgEQAHgEAFgHQAEgIAAgKQAAgLgEgIQgFgIgHgEQgHgEgIAAQgHAAgHAEg");
	this.shape_37.setTransform(88.4,422.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgKBHIAAhlIAUAAIAABlgAgJgvQgDgEAAgGQAAgGADgDQAFgEAEAAQAGAAADAEQAFADAAAGQAAAGgFAEQgDAEgGAAQgEAAgFgEg");
	this.shape_38.setTransform(80.35,417.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgIgMAAQgLAAgHAIQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAAMQAFgHAJgDQAIgEAIAAQAMAAAJAFQAKAFAFAKQAGAKAAANIAAA8g");
	this.shape_39.setTransform(72.325,419.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AAMBAQgNAAgHgHQgIgHAAgPIAAg3IgMAAIAAgRIAMAAIAAgaIAUAAIAAAaIAZAAIAAARIgZAAIAAA3QAAAGADADQADACAGAAIANAAIAAASg");
	this.shape_40.setTransform(181.425,392.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgTAxQgJgFgGgHQgGgIAAgJIAWAAQABAGAFAFQAGAEAHAAQAJAAAFgDQAFgEAAgFQAAgGgFgDIgRgGIgSgGQgIgCgFgGQgFgGAAgKQAAgIAFgHQAEgHAJgEQAJgEALAAQASAAAKAJQALAJABAPIgVAAQgBgHgFgEQgFgEgIAAQgIAAgEADQgFADAAAGQAAAEADACQADADAEACIAMAEIASAGQAHACAGAGQAFAGAAAKQAAAIgFAHQgFAHgJAEQgIAEgMAAQgLAAgKgEg");
	this.shape_41.setTransform(173.375,393.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_42.setTransform(163.125,393.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgJBHIAAhkIATAAIAABkgAgIgvQgEgEAAgGQAAgFAEgEQADgFAFAAQAGAAADAFQAEAEABAFQgBAGgEAEQgDAEgGgBQgFABgDgEg");
	this.shape_43.setTransform(155.3,391.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgHgMgBQgLABgHAHQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAAMQAFgHAJgEQAIgDAIAAQAMAAAJAFQAKAFAFAKQAGAKAAAOIAAA7g");
	this.shape_44.setTransform(147.275,393.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgHgMgBQgLABgHAHQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAAMQAFgHAJgEQAIgDAIAAQAMAAAJAFQAKAFAFAKQAGAKAAAOIAAA7g");
	this.shape_45.setTransform(135.625,393.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgZAvQgKgFgFgKQgGgKAAgOIAAg7IAVAAIAAA4QAAAOAHAHQAHAHALAAQAMAAAHgHQAHgHAAgOIAAg4IAVAAIAABlIgVAAIAAgMQgFAHgIADQgJAEgIAAQgMAAgJgFg");
	this.shape_46.setTransform(123.875,393.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AgNBHIAAhTIgMAAIAAgRIAMAAIAAgIQAAgRAJgJQAIgHAVgBIAAASQgKAAgEAEQgEADAAAJIAAAIIATAAIAAARIgTAAIAABTg");
	this.shape_47.setTransform(115.225,391.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_48.setTransform(102.325,393.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AAaBFIAAg5QAAgNgHgHQgHgIgMAAQgLAAgHAIQgHAHAAANIAAA5IgVAAIAAiJIAVAAIAAAvQAGgGAIgEQAIgDAJAAQAMAAAJAFQAJAFAFAKQAGAKAAAMIAAA9g");
	this.shape_49.setTransform(91.075,391.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AAMBAQgNAAgHgHQgIgHAAgPIAAg3IgMAAIAAgRIAMAAIAAgaIAUAAIAAAaIAZAAIAAARIgZAAIAAA3QAAAGADADQADACAGAAIANAAIAAASg");
	this.shape_50.setTransform(81.925,392.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgcA/QgLgHgGgMQgHgMAAgQQAAgPAHgLQAGgLALgHQALgHAOAAQAJAAAKAFQAKAEAFAHIAAgyIAWAAIAACJIgWAAIAAgPQgFAHgJAFQgKAEgKABQgNgBgMgGgAgOgMQgHAEgFAHQgEAHAAAKQAAALAEAIQAFAIAHAEQAHAEAHABQAIAAAHgFQAIgEAEgIQAEgHAAgLQAAgLgEgGQgEgJgIgDQgHgFgIAAQgHAAgHAFg");
	this.shape_51.setTransform(178.25,366);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgIgMAAQgLAAgHAIQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAAMQAFgHAJgDQAIgEAIAAQAMAAAJAFQAKAFAFAKQAGAKAAANIAAA8g");
	this.shape_52.setTransform(166.725,367.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgcAuQgLgHgHgMQgFgMAAgPQAAgPAFgMQAHgLALgHQAMgHANAAQALAAAIAFQAKAFAFAHIAAgPIAVAAIAABlIgVAAIAAgPQgFAHgKAFQgJAFgLAAQgNAAgLgHgAgOgdQgHAEgEAHQgFAIAAAKQAAAKAFAIQAEAIAHAEQAHAFAHAAQAIAAAHgEQAHgFAEgHQAFgIAAgLQAAgKgFgHQgEgIgHgEQgHgEgIAAQgHAAgHAEg");
	this.shape_53.setTransform(154.35,367.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgIgMAAQgLAAgHAIQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAAMQAFgHAJgDQAIgEAIAAQAMAAAJAFQAKAFAFAKQAGAKAAANIAAA8g");
	this.shape_54.setTransform(138.425,367.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgaAuQgMgGgGgMQgHgMAAgQQAAgPAHgMQAGgMAMgGQAMgHAOAAQAPAAALAHQAMAGAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAGQgMAHgOAAQgOAAgMgHgAgPgdQgHAEgEAHQgEAIAAAKQAAARAJAJQAIAJANAAQAHAAAHgEQAHgEAFgIQAEgIAAgLQAAgKgEgIQgEgHgHgEQgHgEgIAAQgIAAgHAEg");
	this.shape_55.setTransform(126.825,367.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgTAxQgJgFgGgHQgGgIAAgJIAWAAQABAGAFAFQAGAEAHAAQAJAAAFgDQAFgEAAgFQAAgGgFgDIgRgGIgSgGQgIgCgFgGQgFgGAAgKQAAgIAFgHQAEgHAJgEQAJgEALAAQASAAAKAJQALAJABAPIgVAAQgBgHgFgEQgFgEgIAAQgIAAgEADQgFADAAAGQAAAEADACQADADAEACIAMAEIASAGQAHACAGAGQAFAGAAAKQAAAIgFAHQgFAHgJAEQgIAEgMAAQgLAAgKgEg");
	this.shape_56.setTransform(116.275,367.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgcAuQgLgHgHgMQgFgMgBgPQABgPAFgMQAHgLALgHQALgHAOAAQAKAAAJAFQAKAFAFAHIAAgPIAVAAIAABlIgVAAIAAgPQgFAHgKAFQgJAFgLAAQgNAAgLgHgAgOgdQgHAEgFAHQgEAIAAAKQAAAKAEAIQAFAIAHAEQAHAFAHAAQAIAAAHgEQAIgFADgHQAFgIAAgLQAAgKgFgHQgDgIgIgEQgHgEgIAAQgHAAgHAEg");
	this.shape_57.setTransform(105.1,367.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_58.setTransform(93.775,367.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgTAxQgJgFgGgHQgGgIAAgJIAWAAQABAGAFAFQAGAEAHAAQAJAAAFgDQAFgEAAgFQAAgGgFgDIgRgGIgSgGQgIgCgFgGQgFgGAAgKQAAgIAFgHQAEgHAJgEQAJgEALAAQASAAAKAJQALAJABAPIgVAAQgBgHgFgEQgFgEgIAAQgIAAgEADQgFADAAAGQAAAEADACQADADAEACIAMAEIASAGQAHACAGAGQAFAGAAAKQAAAIgFAHQgFAHgJAEQgIAEgMAAQgLAAgKgEg");
	this.shape_59.setTransform(83.475,367.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_60.setTransform(175.425,341.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AAaBFIAAg5QAAgNgHgHQgHgIgMAAQgLAAgHAIQgHAHAAANIAAA5IgVAAIAAiJIAVAAIAAAvQAGgGAIgEQAIgDAJAAQAMAAAJAFQAJAFAFAKQAGAKAAAMIAAA9g");
	this.shape_61.setTransform(164.125,339.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AAMBAQgNAAgHgHQgIgHAAgPIAAg3IgMAAIAAgRIAMAAIAAgaIAUAAIAAAaIAZAAIAAARIgZAAIAAA3QAAAGADADQADACAGAAIANAAIAAASg");
	this.shape_62.setTransform(154.975,340.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgNBIIAAhVIgMAAIAAgQIAMAAIAAgIQAAgSAJgHQAIgJAVABIAAARQgKAAgEADQgEAEAAAJIAAAIIATAAIAAAQIgTAAIAABVg");
	this.shape_63.setTransform(144.425,339.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgaAuQgMgGgGgMQgHgMAAgQQAAgPAHgMQAGgMAMgGQAMgHAOAAQAPAAALAHQAMAGAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAGQgMAHgOAAQgOAAgMgHgAgPgdQgHAEgEAHQgEAIAAAKQAAARAJAJQAIAJANAAQAHAAAHgEQAHgEAFgIQAEgIAAgLQAAgKgEgIQgEgHgHgEQgHgEgIAAQgIAAgHAEg");
	this.shape_64.setTransform(135.825,341.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgTAxQgJgFgGgHQgGgIAAgJIAWAAQABAGAFAFQAGAEAHAAQAJAAAFgDQAFgEAAgFQAAgGgFgDIgRgGIgSgGQgIgCgFgGQgFgGAAgKQAAgIAFgHQAEgHAJgEQAJgEALAAQASAAAKAJQALAJABAPIgVAAQgBgHgFgEQgFgEgIAAQgIAAgEADQgFADAAAGQAAAEADACQADADAEACIAMAEIASAGQAHACAGAGQAFAGAAAKQAAAIgFAHQgFAHgJAEQgIAEgMAAQgLAAgKgEg");
	this.shape_65.setTransform(120.875,341.725);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AA+A0IAAg4QAAgOgHgHQgHgHgMAAQgMAAgGAHQgIAHABAOIAAA4IgVAAIAAg4QAAgOgGgHQgIgHgLAAQgMAAgHAHQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAALQAFgGAIgEQAIgDAJAAQAMAAAKAFQAJAGAFAJQAEgJALgGQAKgFAKAAQANAAAKAFQAJAFAFAKQAGAKAAAOIAAA7g");
	this.shape_66.setTransform(106.75,341.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgKBFIAAiJIAVAAIAACJg");
	this.shape_67.setTransform(94.95,339.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgJBIIAAhlIATAAIAABlgAgIgvQgEgEgBgGQABgFAEgFQADgDAFAAQAGAAADADQAEAFAAAFQAAAGgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_68.setTransform(90.4,339.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgNBIIAAhVIgMAAIAAgQIAMAAIAAgIQAAgSAJgHQAIgJAVABIAAARQgKAAgEADQgEAEAAAJIAAAIIATAAIAAAQIgTAAIAABVg");
	this.shape_69.setTransform(85.275,339.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AAMBAQgNAAgHgHQgIgHAAgPIAAg3IgMAAIAAgRIAMAAIAAgaIAUAAIAAAaIAZAAIAAARIgZAAIAAA3QAAAGADADQADACAGAAIANAAIAAASg");
	this.shape_70.setTransform(164.925,314.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgTAxQgJgFgGgHQgGgIAAgJIAWAAQABAGAFAFQAGAEAHAAQAJAAAFgDQAFgEAAgFQAAgGgFgDIgRgGIgSgGQgIgCgFgGQgFgGAAgKQAAgIAFgHQAEgHAJgEQAJgEALAAQASAAAKAJQALAJABAPIgVAAQgBgHgFgEQgFgEgIAAQgIAAgEADQgFADAAAGQAAAEADACQADADAEACIAMAEIASAGQAHACAGAGQAFAGAAAKQAAAIgFAHQgFAHgJAEQgIAEgMAAQgLAAgKgEg");
	this.shape_71.setTransform(156.875,315.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_72.setTransform(146.625,315.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgQBBQgJgFgFgHIAAAPIgVAAIAAiJIAVAAIAAAzQAFgIAKgEQAIgFALAAQAOAAALAHQAKAGAHAMQAGALAAAQQAAAPgGAMQgHAMgKAHQgMAHgNAAQgLAAgJgFgAgOgNQgIAFgEAIQgEAGAAALQAAAKAEAJQAEAHAIAEQAHAFAHAAQAIAAAHgFQAHgEAEgIQAFgIAAgKQAAgLgFgHQgEgHgHgFQgHgDgIAAQgHAAgHADg");
	this.shape_73.setTransform(135.35,314.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_74.setTransform(118.875,315.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AAaBFIAAg5QAAgNgHgHQgHgIgMAAQgLAAgHAIQgHAHAAANIAAA5IgVAAIAAiJIAVAAIAAAvQAGgGAIgEQAIgDAJAAQAMAAAJAFQAJAFAFAKQAGAKAAAMIAAA9g");
	this.shape_75.setTransform(107.575,313.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAMBAQgNAAgHgHQgIgHAAgPIAAg3IgMAAIAAgRIAMAAIAAgaIAUAAIAAAaIAZAAIAAARIgZAAIAAA3QAAAGADADQADACAGAAIANAAIAAASg");
	this.shape_76.setTransform(98.425,314.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_77.setTransform(174.825,289.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AgYAuQgLgGgHgMQgFgMAAgQQAAgPAFgMQAHgMALgGQAMgHANAAQATAAAMAJQAMAJAEAQIgWAAQgDgHgGgFQgGgEgKAAQgMAAgHAJQgIAJAAAQQAAARAIAJQAHAJAMAAQATAAAGgQIAWAAQgEAQgMAJQgMAJgTAAQgNAAgMgHg");
	this.shape_78.setTransform(163.85,289.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAaA0IAAg4QAAgOgHgHQgHgIgMABQgLgBgHAIQgHAHAAAOIAAA4IgVAAIAAhlIAVAAIAAALQAFgGAJgDQAIgEAIAAQAMAAAJAFQAKAFAFAKQAGAKAAANIAAA8g");
	this.shape_79.setTransform(152.725,289.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_80.setTransform(141.325,289.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC554").s().p("AgJBIIAAhmIAUAAIAABmgAgIgvQgFgEAAgGQAAgFAFgFQAEgDAEAAQAGAAAEADQADAFAAAFQAAAGgDAEQgEADgGABQgEgBgEgDg");
	this.shape_81.setTransform(133.5,287.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDC554").s().p("AgZA0IAAhlIAVAAIAAAOQAEgHAIgFQAHgEALAAIAAAWIgFAAQgNAAgGAHQgGAGAAAPIAAA1g");
	this.shape_82.setTransform(128.275,289.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDC554").s().p("AgZAuQgLgGgHgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOAAQAOAAALAHQAMAGAGALQAGAMAAAPIAAAJIhOAAQABAMAJAIQAIAHALAAQARAAAHgOIAXAAQgFAOgMAJQgMAJgSAAQgOAAgMgHgAAcgIQAAgMgIgHQgIgHgMAAQgKAAgIAHQgIAHgBAMIA3AAIAAAAg");
	this.shape_83.setTransform(118.925,289.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EDC554").s().p("AgzBMIAAiVIAUAAIAAAPQAGgHAJgFQAKgFAKAAQAOAAALAGQALAHAGAMQAHAMgBAPQABAQgHALQgGAMgLAHQgLAGgOAAQgLAAgIgEQgJgFgHgHIAAA/gAgOg1QgIAEgEAIQgEAIgBALQABAKAEAIQAEAHAIAEQAGAEAIAAQAHAAAIgEQAHgEAFgHQAEgIAAgLQAAgKgEgIQgFgIgHgEQgIgEgHAAQgIAAgGAEg");
	this.shape_84.setTransform(107.65,292.125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EDC554").s().p("AAVAzIgVgjIgVAjIgWAAIAhgyIghgzIAYAAIAVAjIAUgjIAWAAIghAyIAhAzg");
	this.shape_85.setTransform(96.775,289.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDC554").s().p("AgiBBIAAiBIBFAAIAAARIgwAAIAAAmIArAAIAAAQIgrAAIAAApIAwAAIAAARg");
	this.shape_86.setTransform(87.75,288.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(61.5,157.9,138.9,275.5), null);


(lib.FR11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgqQAAgHgDgCQgDgCgEAAQgHAAgEAEQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgCQgCgEgHAAQgGgBgFAFQgEAEAAANIAAAgIgLAAIAAg9IAKAAIAAAIIAHgGQAFgEAHAAQAIAAAEAEQACABACAFQADgGAFgBQAFgDAGAAQAMAAAFAJQACAFAAAIIAAApg");
	this.shape.setTransform(105.775,114.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_1.setTransform(97.625,116.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgEAJgBAQQAAANAEAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgKAAQgIAAgEAJg");
	this.shape_2.setTransform(87.45,113.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgFAJAAAQQAAANAEAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgEgKgLAAQgIAAgEAJg");
	this.shape_3.setTransform(80.8,113.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgRIAAgNIALAAIAAANg");
	this.shape_4.setTransform(76.2,114.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQAEgYANgXQAHgNAKgLIguAAIAAgKIA5AAIAAAJQgEAEgGAKQgHAJgFALQgGALgBAJIgFASg");
	this.shape_5.setTransform(70.95,113.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAiQgJgIAAgWQAAgOAEgLQAHgVATAAQAOAAAFAHQAGAHAAAIIgKAAQgBgFgCgDQgEgFgIAAQgIAAgFAIQgFAJgBAOQAEgFAFgDQAFgBAGAAQAKAAAIAGQAIAGAAANQAAAMgIAIQgHAJgOAAQgLAAgIgJgAgKACQgFAEAAAJQAAAIAEAGQAFAFAHAAQAIAAAFgGQAEgFAAgIQAAgHgEgFQgEgFgJAAQgGAAgFAEg");
	this.shape_6.setTransform(134.675,98.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgHIAKgGIALgGQAEgGAAgGQAAgHgEgEQgEgFgIABQgJAAgEAIQgCAEgBAIIgLAAQAAgLAFgHQAGgMAQAAQAPAAAHAHQAGAIAAAKQAAAKgHAGQgEAEgLAGIgHAFIgJAGQgFAFgCAGIAtAAIAAAKg");
	this.shape_7.setTransform(127.95,98.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgFAJAAAQQAAANAEAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgEgKgLAAQgIAAgEAJg");
	this.shape_8.setTransform(121.3,98.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgHIAKgGIALgGQAFgGgBgGQABgHgFgEQgEgFgHABQgLAAgDAIQgCAEgBAIIgLAAQABgLAEgHQAGgMARAAQAOAAAHAHQAGAIAAAKQAAAKgHAGQgEAEgLAGIgHAFIgJAGQgFAFgCAGIAtAAIAAAKg");
	this.shape_9.setTransform(114.65,98.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAAAIAAgCIgFAAIAAgMIALAAIAAALQAAAHgDAFQgCAFgGABg");
	this.shape_10.setTransform(106.425,103.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAjQgGgIAAgMIALAAQAAAIADAEQAEAGAKAAQAIAAAFgEQAFgEAAgIQAAgIgFgEQgGgDgIAAIgCAAIgCAAIAAgIIACAAIADAAQAFAAADgCQAHgDAAgJQAAgGgEgDQgFgEgGAAQgJAAgEAHQgDAEAAAHIgKAAQAAgJADgHQAHgLAQAAQAMAAAHAFQAHAGAAALQAAAIgEAFQgDADgEABQAHACAEAEQADAFAAAIQAAAMgIAHQgIAIgNAAQgPAAgHgIg");
	this.shape_11.setTransform(101.375,98.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAEAqIAAg7IgTAAIAAgIQAMgBADgCQAFgDACgKIAJAAIAABTg");
	this.shape_12.setTransform(94.2,98.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRApQgHgFgBgJIALAAQABAEADACQADAEAHAAQAMAAADgJQACgFABgNQgEAFgFACQgDADgHAAQgKAAgIgIQgHgHAAgQQAAgPAHgJQAIgJALAAQAGAAAFAEIAHAFIAAgHIAJAAIAAA4QAAAMgDAHQgGAMgSAAQgKAAgHgEgAgOgYQgCAFAAAJQAAAKAFAFQAEAGAHAAQALAAAEgKQACgFABgIQgBgMgEgFQgFgGgIAAQgJAAgFALg");
	this.shape_13.setTransform(84.65,101.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgJIAAgpIALAAIAAAoIABAJQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDACQgGAFgHAAQgNAAgFgJg");
	this.shape_14.setTransform(78.125,99.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaArIgJgaIghAAIgKAaIgLAAIAghVIAMAAIAfBVgAANAIIgNglIgNAlIAaAAg");
	this.shape_15.setTransform(70.925,98.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAAAIAAgCIgFAAIAAgMIALAAIAAALQAAAHgDAFQgCAFgGABg");
	this.shape_16.setTransform(62.575,103.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgJIAAgpIALAAIAAAoIABAJQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDACQgGAFgHAAQgNAAgFgJg");
	this.shape_17.setTransform(57.525,99.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_18.setTransform(50.975,98.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgdAAIAABLg");
	this.shape_19.setTransform(44.025,98.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAZQgHgJAAgPQgBgPAJgIQAIgKAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAKAEAFQAFAGAIAAQAHAAAFgGQADgCACgFIAKAAQgBAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgEIgDgMQgEgHgKAAQgHAAgFAFQgFAFAAAJIAiAAIAAAAg");
	this.shape_20.setTransform(135.65,76.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_21.setTransform(129.425,76.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHABIgFAAQgEABgEAEIgDAHIgBAJIAAAgIgLAAIAAg+IALAAIAAAJQAEgFAFgDQAFgCAFAAQANAAAFAJQADAFAAAJIAAAog");
	this.shape_22.setTransform(123.075,76.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAZQgJgJAAgPQAAgPAJgIQAIgKAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQABAKAEAFQAEAGAHAAQAIAAAGgGQACgCABgFIAKAAQAAAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEQgBgHgCgFQgEgHgLAAQgGAAgEAFQgFAFgBAJIAiAAIAAAAg");
	this.shape_23.setTransform(116.35,76.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAKAAIAAA9gAgEgeIAAgMIAKAAIAAAMg");
	this.shape_24.setTransform(111.75,75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgIQAFgEAGAAIABAAIACAAIAAAMIgBgBIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_25.setTransform(108.825,76.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAZQgJgJABgPQAAgPAIgIQAIgKAMAAQAHAAAGADQAGADAEAFQADAFAAAGIABANIgsAAQAAAKAFAFQADAGAIAAQAJAAAFgGQADgCABgFIAJAAQABAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEIgDgMQgEgHgLAAQgFAAgFAFQgGAFAAAJIAiAAIAAAAg");
	this.shape_26.setTransform(103.1,76.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_27.setTransform(96.675,77.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPAfIgPgXIgOAXIgOAAIAWgfIgUgfIANAAIAOAXIAOgXIANABIgVAeIAWAfg");
	this.shape_28.setTransform(90.125,76.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeArIAAhVIA9AAIAAAKIgyAAIAAAaIAuAAIAAAJIguAAIAAAdIAzAAIAAALg");
	this.shape_29.setTransform(83.4,75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAZQgJgJABgPQAAgPAIgIQAIgKAMAAQAHAAAGADQAGADAEAFQADAFAAAGIABANIgsAAQAAAKAFAFQADAGAIAAQAJAAAFgGQADgCABgFIAJAAQABAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEIgDgMQgEgHgLAAQgFAAgFAFQgGAFAAAJIAiAAIAAAAg");
	this.shape_30.setTransform(72.5,76.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_31.setTransform(66.275,76.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgXAcQgGgFAAgIQAAgJAGgFQAFgDAJgCIAQgCQADAAACgDIAAgEQAAgFgDgDQgEgCgHAAQgHAAgEAEQgCADAAAFIgKAAQAAgMAHgEQAIgFAJAAQAKAAAHAEQAGAEAAAJIAAAjIABADIADABIACAAIACAAIAAAIIgEAAIgEABQgFAAgDgEQgBgCgBgEQgCAEgHADQgEADgIAAQgJAAgFgFgAAHABIgGACIgFAAIgJADQgFADABAGQAAAEADADQADACAFAAQAFAAAEgCQAJgEAAgKIAAgIIgFABg");
	this.shape_32.setTransform(60.05,76.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_33.setTransform(55.275,75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQAEAAABgDIABgEQAAgFgFgDQgDgCgHAAQgHAAgEAEQgCADAAAFIgLAAQABgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIABADIACABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgEQgCgCAAgEQgDAEgGADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADAAAGQAAAEAEADQADACAFAAQAFAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_34.setTransform(50.75,76.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAmAAQALAAAHAHQAHAGAAAMQAAAKgGAHQgHAHgMAAIgaAAIAAAkgAgTgCIAWAAQAHAAAFgEQAFgDAAgIQAAgKgHgDQgEgCgGAAIgWAAg");
	this.shape_35.setTransform(43.525,75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAYQgIgIAAgPQgBgOAJgJQAIgKAMAAQAHAAAGADQAGADADAFQAEAFABAGIAAANIgsAAQAAAJAEAHQAFAFAIAAQAHAAAFgFQAEgEABgDIAKAAQgBADgCAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgEIgDgLQgEgIgKAAQgHAAgEAGQgGAEAAAJIAiAAIAAAAg");
	this.shape_36.setTransform(127.65,62.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFArIAAg+IAKAAIAAA+gAgFgeIAAgMIAKAAIAAAMg");
	this.shape_37.setTransform(123.05,61);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAgIgYg+IANAAIAPAyIARgyIAMAAIgXA+g");
	this.shape_38.setTransform(118.7,62.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAZQgHgJAAgPQAAgPAIgJQAIgJANAAQAMAAAHAIQAJAIAAAQQAAAOgIAKQgGAJgPAAQgNAAgIgIgAgNgQQgEAIAAAJQAAAKAEAHQAFAGAIAAQALAAADgIQAEgHAAgJQAAgJgCgFQgFgJgLAAQgIAAgFAHg");
	this.shape_39.setTransform(112.35,62.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAeArIAAgyIAAgJIAAgMIgYBHIgLAAIgZhHIAAACIABAJIAAAKIAAAyIgLAAIAAhVIAQAAIAYBIIAZhIIAQAAIAABVg");
	this.shape_40.setTransform(104.175,61);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_41.setTransform(94.525,61);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQAEAAABgDIABgEQAAgFgFgDQgDgCgHAAQgHAAgEAEQgCADAAAFIgKAAQAAgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIAAADIADABIACAAIACAAIAAAIIgEAAIgDABQgGAAgDgEQgBgCAAgEQgEAEgFADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADAAAGQABAEADADQADACAFAAQAFAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_42.setTransform(90,62.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAYQgHgIgBgPQAAgOAJgJQAIgKAMAAQAHAAAGADQAGADADAFQADAFABAGIACANIgtAAQABAJAEAHQAEAFAHAAQAJAAAFgFQACgEABgDIAKAAQAAADgCAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgEIgDgLQgFgIgKAAQgGAAgFAGQgEAEgBAJIAiAAIAAAAg");
	this.shape_43.setTransform(83.15,62.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAVArIgBgDIgBgHIAAgOQgBgJgGgDQgDgBgHAAIgZAAIAAAlIgLAAIAAhVIAmAAQAKAAAGADQAMAFAAAPQAAAIgDAFQgEAEgFACQAFACACAEQADAEAAAHIAAALIABAIQABAEADABIAAACgAgXgCIAaAAQAIgBAEgDQAFgDAAgJQAAgJgHgDQgDgCgGAAIgbAAg");
	this.shape_44.setTransform(75.825,61);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAYQgHgIAAgPQgBgOAJgJQAIgKAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAJAEAHQAFAFAIAAQAHAAAFgFQADgEACgDIAKAAQgBADgCAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgEIgDgLQgEgIgKAAQgGAAgGAGQgFAEAAAJIAiAAIAAAAg");
	this.shape_45.setTransform(64.55,62.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_46.setTransform(57.975,60.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgdAAIAABLg");
	this.shape_47.setTransform(51.025,61);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgcAlQgKgJAAgNIAXAAQABAGACADQAEAEAKAAQAHAAADgCQAEgCABgEQgBgEgDgCQgDgCgTgEQgOgEgHgEQgFgGAAgKQAAgLAJgJQAJgIARAAQAPAAAKAGQAKAGACAQIgXAAQAAgEgCgDQgEgEgIAAQgHAAgDACQgDACAAADQAAAEADACQAEACASAEQAOADAGAFQAHAHAAAJQAAANgJAIQgKAIgTAAQgUAAgJgIg");
	this.shape_48.setTransform(133.85,36.175);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AgKAOQAIgDACgFQACgEgBgCIgLAAIAAgVIAVAAIAAAQQAAALgFAIQgGAGgKACg");
	this.shape_49.setTransform(127.75,31.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AgYAsIAAhVIAWAAIAAAPQAEgJAEgCQAGgGAKAAIABAAIACAAIAAAYIgEgBIgDAAQgNAAgFAJQgBAEAAAKIAAApg");
	this.shape_50.setTransform(122.275,36.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgbAjQgMgLAAgXQgBgWAMgLQALgMARAAQAKAAAJAEQAIAEAGAIQAFAIABAKIACAQIg6AAQABANAHAFQAFADAFAAQAHAAAEgEIAFgGIAWAAQgBAIgGAIQgMAMgTAAQgQAAgMgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgEAFgCAIIAiAAIAAAAg");
	this.shape_51.setTransform(114.35,36.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AgbA3QgKgHgBgNIAYAAQABAEACACQAEADAHAAQAMAAAEgIQADgFAAgMIAAgGQgDAGgEADQgGAEgKAAQgQABgKgMQgKgMAAgSQAAgUAJgMQAKgNARAAQAGAAAEACQAIADAFAJIAAgMIAWAAIAABQQAAAQgFAJQgKAOgaAAQgQAAgLgGgAgPgeQgCAGAAAJQAAAHACAGQAFAJALAAQAIABAFgGQAFgFAAgNQAAgMgFgGQgFgHgJABQgKgBgFALg");
	this.shape_52.setTransform(104.825,37.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AAQAsIAAg0QAAgGgCgDQgDgHgKAAQgKAAgEAJQgCAGgBAIIAAAtIgVAAIAAhVIAVAAIAAANIAIgJQAHgGAKAAQANAAAIAIQAIAGAAAQIAAA5g");
	this.shape_53.setTransform(95.35,36.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AgKA6IAAhUIAVAAIAABUgAgKgkIAAgVIAVAAIAAAVg");
	this.shape_54.setTransform(88.25,34.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgcAlQgKgJAAgNIAWAAQABAGADADQAEAEAKAAQAGAAAFgCQADgCABgEQAAgEgDgCQgEgCgTgEQgPgEgFgEQgHgGAAgKQAAgLAKgJQAJgIARAAQAPAAAKAGQAKAGABAQIgVAAQgBgEgCgDQgEgEgIAAQgHAAgDACQgDACAAADQAAAEADACQAEACATAEQANADAHAFQAGAHAAAJQAAANgKAIQgJAIgUAAQgSAAgKgIg");
	this.shape_55.setTransform(81.6,36.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgcAlQgKgJAAgNIAWAAQACAGACADQAEAEAKAAQAGAAAEgCQAFgCAAgEQAAgEgEgCQgDgCgTgEQgOgEgHgEQgFgGAAgKQAAgLAJgJQAJgIARAAQAPAAAKAGQAKAGACAQIgXAAQAAgEgCgDQgEgEgIAAQgHAAgDACQgDACAAADQAAAEADACQAEACASAEQAOADAGAFQAHAHAAAJQAAANgKAIQgJAIgTAAQgUAAgJgIg");
	this.shape_56.setTransform(72.75,36.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgfAgQgLgNAAgTQAAgSALgNQAKgOAVAAQAWAAALAOQAKANAAASQAAATgKANQgLANgWAAQgVAAgKgNgAgOgSQgFAHAAALQAAANAFAHQAGAHAIAAQAKAAAFgHQAFgHABgNQgBgLgFgHQgFgIgKAAQgIAAgGAIg");
	this.shape_57.setTransform(63.45,36.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgYAsIAAhVIAWAAIAAAPQAEgJAEgCQAGgGAKAAIABAAIACAAIAAAYIgEgBIgDAAQgNAAgFAJQgBAEAAAKIAAApg");
	this.shape_58.setTransform(55.875,36.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AglAsQgPgPAAgcQAAgbAPgQQAPgSAZABQAWgBANAMQANALADAQIgYAAQgDgMgLgEQgGgDgHAAQgNAAgJALQgJAKAAAVQAAAUAKAJQAKAJALAAQAMAAAIgHQAHgGACgMIgbAAIAAgSIAxAAIAAA9IgQAAIgCgPQgIAIgFAEQgJAFgOAAQgWABgPgRg");
	this.shape_59.setTransform(46,34.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgHAxQgEgEAAgIIAAgzIgMAAIAAgQIAMAAIAAgYIAVAAIAAAYIAOAAIAAAQIgOAAIAAAsQAAAFABABQACACAGAAIADAAIACgBIAAARIgKAAIgDABQgNAAgFgGg");
	this.shape_60.setTransform(123.45,19.0519);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AggAmQgHgGAAgMQAAgQAMgGQAHgEANgCIAHgBIAIgBQAFgDAAgEQAAgFgDgCQgFgCgFAAQgJAAgCAEQgDADgBAFIgVAAQABgLAFgIQAJgLAVAAQANAAALAGQALAFAAAQIAAAmIABAJIABAGIADADIAAADIgYAAIgCgFIgBgFQgEAFgGAEQgGAEgKAAQgLAAgIgHgAAJADIgHACIgDAAQgIACgCACQgGADAAAGQAAAGADACQAEADAEAAQAHAAAGgEQAFgFABgLIAAgIg");
	this.shape_61.setTransform(116.5,20.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgHAxQgEgEAAgIIAAgzIgMAAIAAgQIAMAAIAAgYIAVAAIAAAYIAOAAIAAAQIgOAAIAAAsQAAAFABABQACACAGAAIACAAIADgBIAAARIgKAAIgDABQgNAAgFgGg");
	this.shape_62.setTransform(104.9,19.0519);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgbAjQgMgLAAgXQAAgWALgLQALgMARAAQALAAAIAEQAJAEAFAIQAFAIACAKIABAQIg6AAQAAANAIAFQAEADAGAAQAHAAAFgEIADgGIAYAAQgCAIgGAIQgMAMgTAAQgPAAgNgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgFAFgBAIIAiAAIAAAAg");
	this.shape_63.setTransform(97.9,20.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AAhA5IAAhNIAAgJIAAgJIgVBfIgXAAIgVhfIAAAJIAAAJIAABNIgXAAIAAhyIAjAAIAUBaIAVhaIAjAAIAAByg");
	this.shape_64.setTransform(86.95,18.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgbAjQgMgLAAgXQAAgWALgLQALgMARAAQALAAAIAEQAJAEAFAIQAFAIACAKIABAQIg6AAQAAANAIAFQAEADAGAAQAHAAAFgEIADgGIAYAAQgCAIgGAIQgMAMgTAAQgPAAgNgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgFAFgBAIIAiAAIAAAAg");
	this.shape_65.setTransform(71.35,20.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AASA5IgOhCIgEgWIgEAWIgNBCIgXAAIgghyIAaAAIAOBCIAEASIAEgSIAMhCIAYAAIAPBCIADASIAEgSIAOhCIAZAAIghByg");
	this.shape_66.setTransform(59.7,18.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR11, new cjs.Rectangle(28.9,10.2,120.69999999999999,112.6), null);


(lib.FR4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAFANQAGgBABgIIABgGIgIAAIAAgRIAQAAIAAAPQAAAJgEAHQgDAHgJABgAgUANQAGgBABgIQACgEgBgCIgIAAIAAgRIAQAAIAAAPQAAAJgEAHQgDAHgJABg");
	this.shape.setTransform(34.725,75.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA5IAAgQIAOAAIAAAQgAgDAeIgEgwIAAgmIAPAAIAAAmIgEAwg");
	this.shape_1.setTransform(30.275,78.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAgQgLgLABgUQgBgTALgMQALgNARAAQAIAAAJAEQAHAEAFAHQAEAGACAJIABARIg8AAQABAMAGAIQAFAIALAAQAKAAAHgHQADgFABgFIAPAAQgBAEgDAGIgHAJQgGAGgJACQgFACgGAAQgPAAgLgMgAAXgGQgBgJgCgGQgHgKgMAAQgJAAgGAHQgHAHgBALIAtAAIAAAAg");
	this.shape_2.setTransform(23.15,80.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAkQgIgJgBgMIAOAAQAAAHADADQAGAIAMAAQAIgBAGgDQAGgDAAgIQAAgEgFgDIgMgFIgKgCQgLgDgFgCQgJgGAAgKQAAgLAIgIQAJgHAOAAQASAAAJALQAFAHAAAIIgNAAQAAgEgDgFQgGgFgKAAQgJAAgEADQgEADAAAFQAAAGAGADQADACAGABIAIADQAQADAFACQAIAGAAALQAAALgJAIQgJAIgRAAQgSAAgHgIg");
	this.shape_3.setTransform(14.9,80.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAlQgHgHAAgLQAAgLAHgHQAHgFAMgCIAVgCQAFgBABgDIABgGQAAgHgEgDQgGgDgIAAQgLAAgFAGQgCADgBAGIgNAAQABgPAJgGQAKgGAMAAQAOAAAJAGQAJAFAAAMIAAAvIABADQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIADAAIACAAIAAAKIgFABIgEABQgIAAgDgGIgDgHQgDAFgIAEQgIAFgJAAQgLAAgIgHgAAKABIgIACIgIABQgHABgEACQgGAEAAAIQAAAGADADQAFAEAGAAQAHAAAHgEQALgFAAgNIAAgKIgGABg");
	this.shape_4.setTransform(6.75,80.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA5IAAg0QAAgIgDgEQgEgIgKABQgIgBgHAHQgHAFAAAQIAAAsIgOAAIAAhxIAOAAIAAArQAFgHAEgCQAHgEAJAAQASAAAGAMQAEAHAAALIAAA1g");
	this.shape_5.setTransform(-2.175,78.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAgQgJgMAAgSQAAgVAKgMQAKgMAQAAQAOAAAJAHQAJAHACAQIgOAAQgCgHgEgFQgEgFgKAAQgMAAgGANQgDAIAAALQAAANAEAIQAGAJAKAAQAJAAAFgGQAFgFACgJIAOAAQgDAQgJAIQgKAIgOAAQgPAAgKgMg");
	this.shape_6.setTransform(-10.5,80.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAqIAAhRIANAAIAAAOQACgEAFgGQAGgGAJAAIABAAIADAAIAAAPIgCgBIgCAAQgLAAgFAHQgFAHAAAJIAAAug");
	this.shape_7.setTransform(-16.625,80.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAfQgEgHAAgKIAAg3IAOAAIAAA1QAAAHACAEQAEAHAKAAQANAAAFgNQADgHAAgLIAAgoIAOAAIAABRIgNAAIAAgMQgDAFgEADQgIAGgKAAQgRAAgGgLg");
	this.shape_8.setTransform(-24.175,80.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA7IAAhzIANAAIAAALQAEgFAFgDQAHgFAJAAQAOAAAKALQAKALAAAUQgBAagOALQgIAIgMAAQgJAAgHgFQgDgCgFgGIAAArgAgUgfQgCAHAAAMQAAAKACAGQAGAMAOAAQAJAAAHgIQAGgIAAgPQAAgKgCgHQgGgOgOAAQgOAAgGAPg");
	this.shape_9.setTransform(-32.65,81.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAgQgKgLgBgUQABgTAKgMQALgNAQAAQAJAAAIAEQAJAEAEAHQAEAGABAJIABARIg6AAQAAAMAFAIQAGAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgJACQgFACgFAAQgPAAgLgMgAAYgGQgBgJgEgGQgFgKgOAAQgIAAgHAHQgGAHAAALIAtAAIAAAAg");
	this.shape_10.setTransform(55.5,59.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_11.setTransform(49.45,57.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA7IAAhzIANAAIAAALQAEgFAFgDQAHgFAJAAQAOAAAKALQAKALAAAUQgBAagOALQgIAIgMAAQgJAAgHgFQgDgCgFgGIAAArgAgTgfQgDAHAAAMQAAAKADAGQAFAMAOAAQAKAAAGgIQAHgIgBgPQAAgKgCgHQgGgOgOAAQgOAAgFAPg");
	this.shape_12.setTransform(43.5,60.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AApAqIAAg4QAAgIgEgEQgEgDgGAAQgIAAgGAGQgGAFAAANIAAAvIgNAAIAAg1QAAgIgCgEQgDgGgJAAQgIAAgGAGQgHAGAAAQIAAArIgOAAIAAhRIAOAAIAAALIAJgJQAHgEAJAAQAKAAAGAFQACACADAGQAEgHAHgDQAGgDAIAAQAQAAAGAMQAEAGAAALIAAA2g");
	this.shape_13.setTransform(32.425,59.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_14.setTransform(24.075,57.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAkQgIgIgBgNIAOAAQABAHACAEQAGAGAMABQAIAAAGgEQAGgEAAgGQAAgFgFgEIgMgDIgKgDQgLgDgFgCQgJgFAAgKQAAgNAIgGQAJgIAOAAQATAAAIALQAFAHAAAIIgNAAQAAgFgDgDQgGgGgKAAQgJAAgEADQgEADAAAFQAAAGAGADQADABAGACIAIACQAQAEAFADQAHAEABAMQAAALgJAIQgIAIgRAAQgSAAgIgIg");
	this.shape_15.setTransform(18.4,59.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAgQgLgLAAgUQAAgTALgMQALgNAQAAQAJAAAIAEQAJAEAEAHQAEAGABAJIABARIg6AAQAAAMAFAIQAGAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgJACQgFACgFAAQgPAAgLgMgAAYgGQgBgJgEgGQgGgKgNAAQgIAAgGAHQgHAHAAALIAtAAIAAAAg");
	this.shape_16.setTransform(5.65,59.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUAqIAAgzQAAgHgDgFQgDgIgKAAIgHABQgGACgEAFQgEAEgBAEIgBANIAAAqIgOAAIAAhRIAOAAIAAALQAGgHAGgDQAHgDAHAAQARAAAGAMQAEAHAAAMIAAA0g");
	this.shape_17.setTransform(-3.075,59.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgTAKgNQALgMAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAANAGAJQAGAJALAAQAOAAAFgLQAFgKAAgLQAAgNgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_18.setTransform(-11.925,59.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaA6IgDgBIAAgNIAFACIADAAIAFgBIAEgEIACgGIAEgIIgfhUIAQAAIAVBCIAXhCIAPAAIgOAkIgMAiQgMAfgEAHQgFAHgMAAg");
	this.shape_19.setTransform(-24.5,61.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgTAKgNQALgMAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAANAGAJQAGAJALAAQAOAAAFgLQAFgKAAgLQAAgNgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_20.setTransform(-32.925,59.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBJIgEAAIAAgMIAMgBQABgCAAgHIAAhdIANAAIAABfQAAAJgDAEQgEAHgNAAgAAAg4IAAgQIANAAIAAAQg");
	this.shape_21.setTransform(-39.65,59.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAqIAAgzQAAgHgDgFQgDgIgKAAIgHABQgGACgEAFQgEAEgBAEIgBANIAAAqIgOAAIAAhRIAOAAIAAALQAGgHAGgDQAHgDAHAAQARAAAGAMQAEAHAAAMIAAA0g");
	this.shape_22.setTransform(-45.075,59.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpA5IAAhxIBSAAIAAAOIhDAAIAAAjIA9AAIAAAMIg9AAIAAAmIBEAAIAAAOg");
	this.shape_23.setTransform(-54.475,57.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAJIAAgQIAPAAIAAAQg");
	this.shape_24.setTransform(53.45,41.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAkQgIgJgBgMIAOAAQAAAHADADQAGAIAMgBQAIAAAGgDQAGgEAAgGQAAgGgFgCIgMgFIgKgCQgLgDgFgCQgJgGAAgJQAAgMAIgIQAJgHAOAAQASAAAJALQAFAHAAAIIgNAAQAAgEgDgEQgGgGgKAAQgJAAgEADQgEADAAAFQAAAFAGADQADACAGACIAIADQAQADAFADQAIAEAAAMQAAALgJAIQgIAIgSAAQgRAAgIgIg");
	this.shape_25.setTransform(47.3,38.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAxQgDgFAAgIIAAg2IgLAAIAAgLIALAAIAAgYIANAAIAAAYIANAAIAAALIgNAAIAAA1QAAAEADACIAFABIADgBIACAAIAAALIgFABIgFABQgJAAgEgFg");
	this.shape_26.setTransform(41.15,37.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfAlQgHgHAAgLQAAgLAHgHQAHgFAMgCIAVgCQAFgBACgDIABgGQAAgHgGgDQgFgDgIAAQgLAAgFAGQgCADgBAGIgNAAQAAgPAKgGQAKgGAMAAQANAAAKAGQAJAFAAAMIAAAvIABADQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIABAAIADAAIAAAKIgFABIgFABQgGAAgEgGIgCgHQgFAFgHAEQgIAFgJAAQgLAAgIgHgAAJABIgIACIgHABQgIABgDACQgHAEAAAIQABAGAEADQAEAEAGAAQAHAAAHgEQALgFAAgNIAAgKIgHABg");
	this.shape_27.setTransform(34.8,38.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAgQgKgLAAgUQAAgTAKgMQALgNAQAAQAJAAAIAEQAJAEAEAHQAEAGABAJIABARIg6AAQAAAMAFAIQAGAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgJACQgFACgFAAQgPAAgLgMgAAYgGQgBgJgEgGQgFgKgOAAQgIAAgHAHQgGAHAAALIAtAAIAAAAg");
	this.shape_28.setTransform(25.8,38.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQAAAHAEADQAFAIAMgBQAIAAAGgDQAGgEAAgGQAAgGgFgCIgMgFIgKgCQgLgDgFgCQgJgGAAgJQAAgMAJgIQAIgHAOAAQASAAAJALQAFAHAAAIIgNAAQgBgEgDgEQgEgGgMAAQgHAAgFADQgEADAAAFQAAAFAFADQADACAHACIAIADQAQADAEADQAIAEAAAMQABALgJAIQgJAIgQAAQgSAAgIgIg");
	this.shape_29.setTransform(17.55,38.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAqIAAhRIANAAIAAAOQACgEAFgGQAGgGAJAAIABAAIADAAIAAAPIgCgBIgCAAQgLAAgFAHQgFAHAAAJIAAAug");
	this.shape_30.setTransform(7.125,38.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcAfQgEgHAAgKIAAg3IAOAAIAAA1QAAAHACAEQAEAHAKAAQANAAAFgNQADgHAAgLIAAgoIAOAAIAABRIgNAAIAAgMQgDAFgEADQgIAGgKAAQgRAAgGgLg");
	this.shape_31.setTransform(-0.475,38.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgTQAAgVAKgLQALgNAQAAQAQAAALALQALAKAAAVQAAATgJANQgKANgTAAQgRAAgKgMgAgRgVQgGAJAAANQAAANAGAJQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgLgEgIQgGgLgOAAQgLAAgGAKg");
	this.shape_32.setTransform(-9.225,38.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZA6IgFgBIAAgNIAGACIADAAIAGgBIACgEIADgGIAEgIIgfhUIAQAAIAVBCIAWhCIAQAAIgOAkIgMAiQgMAfgEAHQgFAHgMAAg");
	this.shape_33.setTransform(-17.45,39.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQA5IgZgqIgLALIAAAfIgNAAIAAhxIANAAIAABBIAjgiIARAAIgfAeIAhA0g");
	this.shape_34.setTransform(-29.225,36.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgSQAAgVALgMQALgMAPAAQAOAAAJAHQAIAHACAQIgNAAQgCgHgEgFQgEgFgKAAQgMAAgGANQgDAIgBALQAAANAGAIQAFAJAKAAQAJAAAFgGQAFgFACgJIANAAQgCAQgJAIQgJAIgPAAQgPAAgKgMg");
	this.shape_35.setTransform(-37.55,38.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_36.setTransform(-43.325,36.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgpA5IAAhxIAxAAQAQAAAJAJQAJAIAAAQQAAANgIAKQgIAJgRAAIgjAAIAAAwgAgagDIAdAAQALAAAGgFQAHgEAAgLQAAgNgKgEQgFgCgJAAIgdAAg");
	this.shape_37.setTransform(-50.025,36.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAJIAAgQIAPAAIAAAQg");
	this.shape_38.setTransform(44.6,20.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAkQgIgJgBgMIAOAAQAAAHADADQAGAIAMgBQAIABAGgEQAGgEAAgGQAAgGgFgCIgMgFIgKgCQgLgDgFgCQgJgGAAgJQAAgNAJgGQAIgIAOAAQATAAAIALQAFAHAAAIIgNAAQgBgEgDgEQgEgGgMAAQgHAAgFADQgEADAAAFQAAAFAGADQADACAGACIAIADQAQADAEADQAJAEgBAMQAAALgIAIQgIAIgSAAQgSAAgHgIg");
	this.shape_39.setTransform(38.5,17.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAQApIgQg/IgPA/IgPAAIgYhRIAPAAIAQBAIAQhAIAPAAIAQA/IARg/IAOAAIgYBRg");
	this.shape_40.setTransform(28.8,17.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgTQAAgVAKgMQALgMAQAAQAQAAALALQALAKAAAVQAAATgJANQgKANgTAAQgRAAgKgMgAgRgVQgGAJAAANQAAANAGAJQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgLgEgIQgGgLgOAAQgLAAgGAKg");
	this.shape_41.setTransform(18.675,17.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAUA5IAAg0QAAgIgDgEQgEgIgKAAQgIAAgHAHQgHAGAAAPIAAAsIgOAAIAAhxIAOAAIAAAqQAFgGAEgDQAHgDAJAAQASAAAGAMQAEAHAAALIAAA1g");
	this.shape_42.setTransform(9.975,15.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAkQgIgJgBgMIAOAAQABAHADADQAFAIAMgBQAIABAGgEQAGgEAAgGQAAgGgFgCIgMgFIgKgCQgLgDgFgCQgJgGAAgJQAAgNAIgGQAJgIAOAAQATAAAIALQAFAHAAAIIgNAAQgBgEgCgEQgFgGgLAAQgJAAgEADQgEADAAAFQAAAFAFADQAEACAGACIAIADQAPADAGADQAHAEABAMQAAALgJAIQgIAIgRAAQgTAAgHgIg");
	this.shape_43.setTransform(1.65,17.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgZAwQgKgIgCgPIAPAAQABALAKAFQAEACAHAAQALAAAGgIQAHgHAAgKQAAgMgIgGQgHgFgJAAQgHAAgFADQgFACgEAEIgMAAIAIg7IA5AAIAAANIguAAIgFAfIAIgEQAGgDAHAAQAPAAAKAKQALAJAAAPQAAAQgKAMQgJAMgUAAQgOAAgKgIg");
	this.shape_44.setTransform(-11.1,16.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAqIAAhRIANAAIAAAOQACgEAFgGQAGgGAJAAIABAAIADAAIAAAPIgCgBIgCAAQgLAAgFAHQgFAHAAAJIAAAug");
	this.shape_45.setTransform(-21.875,17.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgTQAAgVAKgMQALgMAQAAQAQAAALALQALAKAAAVQAAATgJANQgKANgTAAQgRAAgKgMgAgRgVQgGAJAAANQAAANAGAJQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgLgEgIQgGgLgOAAQgLAAgGAKg");
	this.shape_46.setTransform(-29.425,17.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAuQgIgLAAgPIAOAAQAAALAEAEQAFAJAOAAQAKAAAHgGQAGgGABgJQAAgLgIgFQgHgEgLAAIgCAAIgEAAIAAgMIAEABIAEAAQAGAAAFgDQAJgEAAgLQAAgIgGgFQgGgEgIAAQgNAAgFAJQgDAFAAAJIgOAAQAAgMAFgJQAJgPAVAAQAQAAAJAIQAJAHAAAOQAAALgFAGQgEAEgFACQAJACAFAGQAEAHAAAKQABAQgLAKQgLAKgRAAQgUAAgJgLg");
	this.shape_47.setTransform(-42.6,15.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaAgQgLgLABgUQgBgTALgMQALgNAQAAQAJAAAIAEQAJAEAEAHQAEAGABAJIABARIg6AAQAAAMAFAIQAGAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgJACQgFACgFAAQgPAAgLgMgAAYgGQgBgJgEgGQgFgKgOAAQgIAAgHAHQgGAHAAALIAtAAIAAAAg");
	this.shape_48.setTransform(25.35,-3.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQAAAHAEADQAFAIAMAAQAIgBAGgDQAGgDAAgIQAAgEgFgEIgMgDIgKgDQgLgDgFgCQgJgFAAgLQAAgLAJgIQAIgHAOAAQASAAAJALQAFAHAAAIIgNAAQgBgEgDgFQgEgFgMAAQgHAAgFADQgEADAAAFQAAAGAFADQADACAHABIAIACQAQAEAEACQAIAGAAALQABALgJAIQgJAIgQAAQgSAAgIgIg");
	this.shape_49.setTransform(17.1,-3.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgTAKgMQALgNAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAAOAGAIQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgMgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_50.setTransform(8.625,-3.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgTAKgMQALgNAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAAOAGAIQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgMgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_51.setTransform(-0.125,-3.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAUA5IAAg0QAAgIgDgFQgEgGgKAAQgIAAgHAFQgHAHAAAPIAAAsIgOAAIAAhxIAOAAIAAArQAFgHAEgCQAHgFAJAAQASAAAGANQAEAHAAALIAAA1g");
	this.shape_52.setTransform(-8.775,-5.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgfAwQgSgQAAggQAAgZANgQQAPgSAXAAQAWAAAMAMQALALACAOIgPAAQgDgLgHgGQgIgGgNAAQgQAAgKALQgKAMAAAYQAAATAJANQAJAMARAAQARAAAJgNQAEgHADgLIAPAAQgCASgLAMQgOAPgXAAQgSAAgNgMg");
	this.shape_53.setTransform(-18.875,-5.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAFAUIAAgQQAAgHAEgIQADgHAJgBIAAAHQgEABgCAEQgCAEAAAFIAAABIAAAAIAIAAIAAARgAgUAUIAAgQQAAgKAEgGQAFgGAHgBIAAAHQgFABgCAHIgBAGIAAAAIAAABIAIAAIAAARg");
	this.shape_54.setTransform(-27.025,-9.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAKASQALgDADgJIABgHIgPAAIAAgbIAdAAIAAAWQAAANgHAKQgIAJgOADgAgmASQALgDAEgIQABgEAAgEIgQAAIAAgbIAdAAIAAAWQABAOgIAJQgHAJgPADg");
	this.shape_55.setTransform(48.6,-41.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgOBLIAAgdIAdAAIAAAdgAgHAhIgIhFIAAgnIAfAAIAAAnIgIBFg");
	this.shape_56.setTransform(40.125,-37.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AglAwQgNgLAAgRIAeAAQABAIACADQAGAGANAAQAKAAAFgDQAEgCABgFQgBgFgEgDQgDgCgagHQgTgEgIgHQgIgHAAgNQAAgPAMgLQAMgMAXAAQAUAAANAJQANAIACAVIgdAAQgBgGgCgDQgFgGgLAAQgJAAgEADQgFADAAAEQABAFAEACQAEACAaAGQARAEAJAIQAIAIAAANQAAAQgMALQgNALgaAAQgZAAgMgMg");
	this.shape_57.setTransform(30.3,-35.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgmAwQgMgLAAgRIAdAAQACAIADADQAFAGANAAQAKAAAFgDQAEgCAAgFQAAgFgDgDQgFgCgZgHQgTgEgIgHQgIgHAAgNQAAgPANgLQAMgMAWAAQATAAAOAJQANAIACAVIgdAAQgBgGgDgDQgEgGgLAAQgKAAgEADQgDADAAAEQgBAFAFACQAEACAaAGQARAEAIAIQAJAIAAANQAAAQgMALQgMALgaAAQgaAAgNgMg");
	this.shape_58.setTransform(18.65,-35.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgqAzQgKgJABgQQAAgVAQgIQAIgFASgCIAJgCIALgCQAGgDAAgFQAAgHgFgDQgFgDgHAAQgLAAgEAGQgDADgBAHIgdAAQABgPAHgJQAMgPAcAAQASAAAOAHQAPAHgBAVIAAAyIAAANQABAGABACIAFADIAAAFIggAAIgCgHIgBgGQgGAGgIAFQgIAFgMAAQgPAAgLgIgAALAEIgIACIgFABQgJACgEACQgHAEAAAJQAAAHAEAEQAFADAGAAQAIAAAIgGQAIgFAAgPIAAgLg");
	this.shape_59.setTransform(7.05,-35.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("Ag1BPIAAibIAcAAIAAARQAEgIAGgEQAKgHAMAAQAUAAANAOQAOAPAAAcQAAAcgNAQQgOAPgVAAQgMAAgJgGQgFgEgEgHIAAA6gAgWgmQgDAIAAANQAAASAKAIQAGAFAJAAQALAAAGgKQAHgIAAgQQAAgNgGgKQgGgKgMAAQgQAAgGAPg");
	this.shape_60.setTransform(-4.925,-33.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AATA4IgTghIgSAhIgkAAIAmg4Iglg3IAkAAIASAhIASghIAjAAIgkA2IAlA5g");
	this.shape_61.setTransform(-17.5,-35.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgkAuQgQgOAAgfQAAgcAOgQQAPgPAXAAQAOAAALAFQALAFAHALQAHAKACAOQABAHAAAOIhMAAQABARAKAGQAGAFAHAAQAJAAAGgFQADgDADgFIAdAAQgBAKgJAKQgOAQgaAAQgVAAgQgNgAAWgLQAAgLgHgGQgGgGgJAAQgJAAgGAGQgGAHgBAKIAsAAIAAAAg");
	this.shape_62.setTransform(-29.1917,-35.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgNBMIAAiXIAbAAIAACXg");
	this.shape_63.setTransform(-37.9,-37.275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("Ag1BMIAAiXIBrAAIAAAbIhLAAIAAAjIBBAAIAAAZIhBAAIAABAg");
	this.shape_64.setTransform(-46.675,-37.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AARA4IgRhRIgRBRIgeAAIgghvIAgAAIARBQIAQhQIAdAAIARBQIAShQIAeAAIghBvg");
	this.shape_65.setTransform(32.1,-56.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgkAuQgQgOAAgfQAAgcAOgQQAPgPAXAAQAOAAALAFQALAFAHALQAHAKACAOQABAHAAAOIhMAAQABARAKAGQAGAFAHAAQAJAAAGgFQADgDADgFIAdAAQgBAKgJAKQgOAQgaAAQgVAAgQgNgAAWgLQAAgLgHgGQgGgGgJAAQgJAAgGAGQgGAHgBAKIAsAAIAAAAg");
	this.shape_66.setTransform(18.0583,-56.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAVA6IAAhEQAAgIgDgGQgEgIgMAAQgOAAgGANQgDAHAAAKIAAA8IgdAAIAAhwIAcAAIAAARQAGgJAFgDQAJgIANABQASAAALAJQALAJAAAVIAABLg");
	this.shape_67.setTransform(5.875,-56.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AggA6IAAhwIAcAAIAAAUQAGgMAFgDQAJgIAMABIACAAIADAAIAAAeIgGgBIgDAAQgSAAgGAMQgCAGAAANIAAA2g");
	this.shape_68.setTransform(-9.95,-56.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgtAnQgEgKgBgTIAAhCIAeAAIAABCQAAAKADAFQADAIAMAAQAPAAAFgMQADgHAAgKIAAg8IAdAAIAABvIgcAAIAAgQIgCADIgEAFQgHAGgGACQgGACgIAAQgZAAgJgSg");
	this.shape_69.setTransform(-21.05,-56.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgqArQgOgSAAgZQAAgXAOgSQAOgSAcAAQAdAAAOASQAOASAAAXQAAAZgOASQgOARgdAAQgcAAgOgRgAgTgZQgHAJAAAQQAAARAHAJQAHAKAMAAQANAAAHgKQAGgJAAgRQAAgQgGgJQgHgJgNAAQgMAAgHAJg");
	this.shape_70.setTransform(-33.825,-56.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgKBBQgEgFAAgLIAAhEIgQAAIAAgVIAQAAIAAgfIAcAAIAAAfIASAAIAAAVIgSAAIAAA6QgBAHACACQACACAJAAIACAAIAEgBIAAAWIgPABIgEAAQgQAAgHgHg");
	this.shape_71.setTransform(52.45,-78.9444);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgtAnQgEgKgBgTIAAhCIAfAAIAABCQAAAKACAFQAEAIAMAAQAOAAAFgMQADgHAAgKIAAg8IAdAAIAABvIgcAAIAAgQIgCADIgEAFQgGAGgHACQgFACgJAAQgZAAgJgSg");
	this.shape_72.setTransform(42.6,-77.375);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgqAqQgOgRAAgZQAAgXAOgSQAOgSAcAAQAdAAAOASQAOASAAAXQAAAZgOARQgOASgdAAQgcAAgOgSgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAGgJAAgRQAAgQgGgJQgHgJgNAAQgMAAgHAJg");
	this.shape_73.setTransform(29.825,-77.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgNBIQgFgEgHgIIAAAOIgdAAIAAiWIAeAAIAAA2QAGgIAGgEQAIgFAMAAQAWAAAMAQQAMAPAAAZQAAAagMARQgMARgWAAQgOAAgHgFgAgWAAQgDAHAAANQAAAOAHAKQAFAJANAAQALAAAGgJQAHgJAAgPQAAgMgEgIQgFgOgPAAQgQAAgGAOg");
	this.shape_74.setTransform(17.25,-79.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgpAzQgLgJAAgQQAAgVAQgIQAKgFAQgCIAKgCIALgCQAGgDAAgFQAAgHgEgDQgGgDgIAAQgKAAgFAGQgDADAAAHIgdAAQABgPAIgJQALgPAcAAQASAAAOAHQAOAHAAAVIAAAyIAAANQABAGACACIADADIAAAFIgfAAIgCgHIgBgGQgGAGgIAFQgIAFgNAAQgPAAgJgIgAAMAEIgIACIgGABQgJACgEACQgHAEAAAJQAAAHAEAEQAFADAFAAQAJAAAIgGQAIgFAAgPIAAgLg");
	this.shape_75.setTransform(4.75,-77.475);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAQBLIgagvIgMAMIAAAjIgcAAIAAiWIAcAAIAABRIAkgpIAkAAIgnApIAoBFg");
	this.shape_76.setTransform(-12.05,-79.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AglAwQgNgLAAgRIAdAAQACAIADADQAFAGANAAQAJAAAGgDQAEgCAAgFQAAgFgDgDQgFgCgZgHQgTgEgIgHQgIgHAAgNQAAgPANgLQAMgMAWAAQATAAAOAJQANAIACAVIgdAAQgBgGgCgDQgFgGgLAAQgJAAgFADQgDADAAAEQgBAFAFACQAEACAaAGQARAEAJAIQAIAIAAANQAAAQgMALQgMALgaAAQgaAAgMgMg");
	this.shape_77.setTransform(-24.45,-77.475);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AAlBMIgJgfIg3AAIgLAfIghAAIA2iXIAjAAIA2CXgAATASIgTg6IgTA6IAmAAg");
	this.shape_78.setTransform(-37.725,-79.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAKAdIAAgWQAAgOAHgJQAIgJAOgDIAAALQgLADgEAIQgBAFAAADIAQAAIAAAbgAgmAdIAAgWQAAgOAHgJQAHgJAPgDIAAALQgLADgEAIQgCAEABAEIAQAAIAAAbg");
	this.shape_79.setTransform(-50.65,-84.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-90.8,159.1,181.7);


(lib.FR3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgrQAAgGgDgCQgDgCgEgBQgHAAgEAFQgFAEAAAJIAAAkIgJAAIAAgoQAAgGgCgDQgCgFgHAAQgGABgFAEQgEAFAAALIAAAhIgLAAIAAg+IAKAAIAAAJIAHgHQAFgDAHAAQAIAAAEADQACADACADQADgFAFgCQAFgCAGAAQAMAAAFAJQACAFAAAIIAAApg");
	this.shape.setTransform(58.475,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_1.setTransform(50.325,55.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAHANQAGALAAASQAAAQgFALQgIAQgQAAQgOAAgIgNgAgMgYQgFAJABAQQAAANADAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgEgJQgEgKgJAAQgJAAgEAJg");
	this.shape_2.setTransform(40.15,53.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAHANQAGALAAASQAAAQgFALQgIAQgQAAQgOAAgIgNgAgMgYQgFAJABAQQAAANACAIQAEALAKAAQAIAAAFgHQAFgHAAgTQAAgOgEgJQgDgKgKAAQgJAAgEAJg");
	this.shape_3.setTransform(33.5,53.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgRIAAgNIALAAIAAANg");
	this.shape_4.setTransform(28.9,54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQAEgYAMgXQAJgNAIgLIgtAAIAAgKIA5AAIAAAJQgEAEgHAKQgGAJgFALQgFALgCAJIgEASg");
	this.shape_5.setTransform(23.65,53.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAjQgJgKAAgVQAAgOAEgMQAHgUATAAQAOAAAFAHQAGAIAAAHIgKAAQgBgFgCgCQgEgGgIAAQgIAAgFAIQgFAJgBAPQAEgGAFgCQAFgCAGAAQAKgBAIAHQAIAGAAANQAAALgIAKQgHAIgOAAQgLAAgIgIgAgKABQgFAFAAAJQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgFAAgIQAAgGgEgHQgEgEgJAAQgGAAgFADg");
	this.shape_6.setTransform(87.725,38.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQAEgIALgGIAKgHIALgHQAFgFgBgFQABgIgFgEQgEgEgHgBQgLABgDAHQgDAFAAAIIgKAAQAAgLADgHQAHgMARAAQAOAAAHAIQAGAIAAAJQAAAKgHAGQgEAFgLAFIgHAEIgJAGQgGAGgBAGIAtAAIAAAKg");
	this.shape_7.setTransform(81,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAHANQAGALAAASQAAAQgFALQgIAQgQAAQgOAAgIgNgAgMgYQgFAJABAQQAAANADAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgEgJQgEgKgJAAQgJAAgEAJg");
	this.shape_8.setTransform(74.35,38.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgGIAKgHIALgHQAFgFAAgFQAAgIgFgEQgEgEgHgBQgKABgFAHQgCAFAAAIIgKAAQAAgLADgHQAHgMARAAQAOAAAGAIQAHAIAAAJQAAAKgHAGQgEAFgKAFIgIAEIgIAGQgHAGgBAGIAtAAIAAAKg");
	this.shape_9.setTransform(67.7,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGACg");
	this.shape_10.setTransform(59.475,42.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAjQgGgIAAgMIALAAQAAAIADAEQAEAGAKAAQAIAAAFgEQAFgEAAgIQAAgIgFgEQgGgDgIAAIgCAAIgCAAIAAgIIACAAIADAAQAFAAADgCQAHgDAAgJQAAgGgEgDQgFgEgGAAQgJAAgEAHQgDAEAAAHIgKAAQAAgJADgHQAHgLAQAAQAMAAAHAFQAHAGAAALQAAAIgEAFQgDADgEABQAHACAEAEQADAFAAAIQAAAMgIAHQgIAIgNAAQgPAAgHgIg");
	this.shape_11.setTransform(54.425,38.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQAEgIALgGIAKgHIALgHQAFgFAAgFQAAgIgFgEQgEgEgHgBQgLABgEAHQgCAFAAAIIgKAAQAAgLADgHQAHgMARAAQAOAAAGAIQAHAIAAAJQAAAKgHAGQgEAFgLAFIgHAEIgIAGQgHAGgBAGIAtAAIAAAKg");
	this.shape_12.setTransform(47.8,38.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRApQgHgFAAgJIAKAAQABAEACACQAEAEAHAAQALAAAEgJQACgFAAgNQgDAFgFACQgEADgGAAQgKAAgIgIQgIgHAAgQQAAgPAIgJQAIgJALAAQAGAAAGAEIAFAFIAAgHIAKAAIAAA4QAAAMgDAHQgHAMgRAAQgKAAgHgEgAgNgYQgCAFAAAJQAAAKAEAFQAEAGAHAAQAKAAAFgKQACgFAAgIQABgMgFgFQgFgGgIAAQgJAAgEALg");
	this.shape_13.setTransform(37.7,40.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAXQgDgFAAgHIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgJIAAgeIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_14.setTransform(31.175,39.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaArIgJgaIghAAIgKAaIgLAAIAghVIAMAAIAfBVgAANAIIgNgmIgNAmIAaAAg");
	this.shape_15.setTransform(23.975,38);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGACg");
	this.shape_16.setTransform(15.625,42.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHAAIgFABQgEACgEADIgDAHIgBAJIAAAgIgLAAIAAg9IALAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAFAJQADAFAAAKIAAAng");
	this.shape_17.setTransform(10.675,39.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAXQgDgFAAgHIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgJIAAgeIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_18.setTransform(3.925,39.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_19.setTransform(-3.3763,38.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_20.setTransform(90.725,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQADAAACgDIABgEQAAgFgFgDQgDgCgGAAQgJAAgDAEQgCADgBAFIgKAAQABgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIABADIACABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgEQgCgCAAgEQgEAEgFADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgEADgBAGQAAAEAEADQADACAEAAQAGAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_21.setTransform(86.2,18.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAgIgXg+IAMAAIAQAyIASgyIALAAIgXA+g");
	this.shape_22.setTransform(79.7,18.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEArIAAg+IAKAAIAAA+gAgEgeIAAgMIAKAAIAAAMg");
	this.shape_23.setTransform(75.4,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAgIgXg+IAMAAIAQAyIASgyIALAAIgXA+g");
	this.shape_24.setTransform(71.05,18.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADAEAFQACAFABAGIACANIgtAAQABAJAEAHQAEAFAHAAQAJAAAFgFQACgEABgEIAKAAQAAAEgCAEIgFAHQgFAFgHABIgIABQgLAAgJgIgAASgFIgDgLQgFgHgKAAQgGAAgFAGQgEAFgBAHIAiAAIAAAAg");
	this.shape_25.setTransform(64.7,18.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAVArIgBgDIgBgHIAAgOQgBgIgGgEQgDgBgHAAIgZAAIAAAlIgLAAIAAhVIAmAAQAKAAAGADQAMAGAAAOQAAAIgDAFQgEAFgFACQAFABACAEQADADAAAIIAAAMIABAHQABAEADABIAAACgAgXgDIAaAAQAIAAAEgDQAFgDAAgJQAAgJgHgDQgDgCgGAAIgbAAg");
	this.shape_26.setTransform(57.375,17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAALIgBAAIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_27.setTransform(47.875,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAZQgIgJAAgPQgBgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAJAEAHQAFAFAIAAQAHAAAFgFQAEgEABgEIAKAAQgBAEgCAEIgFAHQgFAFgHABIgIABQgLAAgIgIgAASgFIgDgLQgEgHgKAAQgHAAgEAGQgGAFAAAHIAiAAIAAAAg");
	this.shape_28.setTransform(42.15,18.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAHApQgHAAgDgEQgCgEAAgGIAAgoIgJAAIAAgJIAJAAIAAgSIAJAAIAAASIAKAAIAAAJIgKAAIAAAoQAAAAABABQAAABAAAAQAAABABAAQAAABABAAIAEABIABAAIACgBIAAAJIgDABg");
	this.shape_29.setTransform(37.2,17.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQAEAAABgDIABgEQAAgFgFgDQgDgCgHAAQgHAAgEAEQgCADAAAFIgKAAQAAgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIAAADIADABIACAAIACAAIAAAIIgEAAIgDABQgGAAgDgEQgBgCAAgEQgEAEgFADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADAAAGQABAEADADQADACAFAAQAFAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_30.setTransform(32.4,18.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AANAgIgNgwIgMAwIgLAAIgSg+IAMAAIAMAwIAMgwIALAAIAMAwIANgwIALAAIgSA+g");
	this.shape_31.setTransform(24.575,18.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAALIgBAAIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_32.setTransform(18.675,18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAcQgGgFAAgIQAAgJAGgFQAFgDAJgCIAQgCQADAAACgDIABgEQAAgFgEgDQgEgCgHAAQgHAAgEAEQgCADAAAFIgKAAQAAgMAHgEQAIgFAJAAQAKAAAHAEQAGAEAAAJIAAAjIABADIADABIACAAIACAAIAAAIIgEAAIgEABQgFAAgDgEQgBgCAAgEQgEAEgGADQgEADgIAAQgJAAgFgFgAAHABIgGACIgFAAIgJADQgFADABAGQAAAEADADQADACAFAAQAFAAAEgCQAJgEAAgKIAAgIIgFABg");
	this.shape_33.setTransform(13.15,18.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAJADAHQAEAFAJAAQAIAAAFgFQACgEABgEIALAAQAAAEgDAEIgFAHQgFAFgHABIgIABQgLAAgJgIgAASgFIgDgLQgFgHgJAAQgGAAgGAGQgEAFgBAHIAiAAIAAAAg");
	this.shape_34.setTransform(6.3,18.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_35.setTransform(1.725,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAkQgOgMAAgYQAAgTAKgMQALgOASAAQAQAAAJAJQAJAJABALIgMAAQgBgJgGgFQgFgEgLAAQgLAAgIAJQgIAIAAASQAAAPAHAJQAHAKANAAQANAAAGgKQADgFADgIIALAAQgCANgIAJQgLAMgQAAQgOAAgKgKg");
	this.shape_36.setTransform(-3.95,17.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTAZQgJgJAAgPQAAgPAJgIQAIgKAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQABAKAEAFQAEAGAHAAQAIAAAGgGQACgCABgFIAKAAQAAAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEQgBgHgCgFQgEgHgLAAQgGAAgFAFQgEAFgBAJIAiAAIAAAAg");
	this.shape_37.setTransform(67.75,3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_38.setTransform(61.525,3.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHABIgFAAQgEABgEAEIgDAHIgBAJIAAAgIgLAAIAAg+IALAAIAAAJQAEgGAFgCQAFgCAFAAQANAAAFAJQADAFAAAJIAAAog");
	this.shape_39.setTransform(55.175,3.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAZQgIgJAAgPQgBgPAJgIQAIgKAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAKAEAFQAFAGAIAAQAHAAAFgGQAEgCABgFIAKAAQgBAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEIgDgMQgEgHgKAAQgHAAgEAFQgGAFAAAJIAiAAIAAAAg");
	this.shape_40.setTransform(48.45,3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTAkQgIgJAAgPQAAgNAIgKQAGgKANAAQAHAAAEADIAGAHIAAggIAKAAIAABVIgJAAIAAgIQgDAFgGADQgFACgFAAQgLAAgHgIgAgKgFQgFAFgBAMQABAKAEAGQAEAHAIAAQAHAAAGgGQAEgGAAgMQAAgLgFgGQgFgFgHAAQgHAAgEAGg");
	this.shape_41.setTransform(41.65,2.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTAZQgJgJABgPQAAgPAIgIQAIgKAMAAQAHAAAGADQAGADAEAFQADAFAAAGIABANIgsAAQAAAKAFAFQADAGAIAAQAJAAAFgGQADgCABgFIAJAAQABAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEIgDgMQgEgHgLAAQgFAAgFAFQgGAFAAAJIAiAAIAAAAg");
	this.shape_42.setTransform(35.15,3.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgTAZQgJgJABgPQAAgPAIgIQAIgKAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQAAAKAFAFQAEAGAHAAQAIAAAGgGQADgCAAgFIAKAAQABAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEQgBgHgCgFQgEgHgLAAQgFAAgFAFQgFAFgBAJIAiAAIAAAAg");
	this.shape_43.setTransform(28.5,3.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAAMIgBgBIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_44.setTransform(23.625,3.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAkQgMgMAAgYQAAgTAJgMQALgNASAAQAQAAAJAIQAJAJABALIgLAAQgCgIgGgGQgGgEgKAAQgLgBgIAKQgIAJAAARQAAAPAHAKQAHAJANAAQAMAAAHgKQAEgFACgJIALAAQgCAOgIAJQgKAMgRAAQgOAAgLgKg");
	this.shape_45.setTransform(16.95,2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRApQgHgFgBgJIALAAQABAEADACQADAEAHAAQAMAAADgJQACgFABgNQgEAFgFACQgDADgHAAQgKAAgIgIQgHgHAAgQQgBgPAJgJQAHgJALAAQAGAAAFAEIAHAFIAAgHIAJAAIAAA4QAAAMgDAHQgGAMgSAAQgKAAgHgEgAgOgYQgCAFAAAJQAAAKAFAFQAEAGAHAAQALAAAEgKQACgFABgIQgBgMgEgFQgFgGgIAAQgJAAgFALg");
	this.shape_46.setTransform(68.9,-10.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPAgIAAgmQAAgHgCgDQgDgFgHAAIgFAAQgEACgEAEIgDAFIgBAKIAAAgIgLAAIAAg+IALAAIAAAJQAEgFAFgDQAFgCAFAAQANAAAFAJQADAGAAAIIAAAog");
	this.shape_47.setTransform(62.475,-11.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFArIAAg+IAKAAIAAA+gAgFgeIAAgMIAKAAIAAAMg");
	this.shape_48.setTransform(57.8,-12.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAGApQgGAAgCgEQgDgEAAgGIAAgoIgIAAIAAgJIAIAAIAAgSIAKAAIAAASIAKAAIAAAJIgKAAIAAAoQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABIAFABIACAAIACgBIAAAJIgEABg");
	this.shape_49.setTransform(54.8,-12.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXAcQgGgFABgIQgBgJAGgFQAFgDAJgCIAQgCQAEAAAAgDIABgEQAAgFgDgDQgEgCgGAAQgJAAgDAEQgCADgBAFIgKAAQABgMAHgEQAIgFAJAAQAKAAAHAEQAHAEAAAJIAAAjIABADIACABIACAAIABAAIAAAIIgDAAIgDABQgGAAgCgEQgCgCgBgEQgCAEgHADQgEADgIAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgEADAAAGQAAAEACADQAEACAEAAQAGAAAEgCQAJgEAAgKIAAgIIgFABg");
	this.shape_50.setTransform(50,-11.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgIQAFgEAGAAIABAAIACAAIAAALIgBAAIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_51.setTransform(44.925,-11.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLApIgGgHIAAAIIgKAAIAAhVIAKAAIAAAfQAEgEAFgDQAEgCAFAAQAMAAAHAIQAIAIAAAPQAAAPgIAJQgHAKgNAAQgGAAgFgDgAgMgGQgFAFAAALQAAAJACAGQAEAKALAAQAIAAAEgHQAFgHAAgLQAAgKgFgFQgEgHgIAAQgGAAgGAGg");
	this.shape_52.setTransform(39.425,-12.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAYQgJgIABgPQAAgOAIgJQAIgKAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQAAAJAFAHQAEAFAHAAQAIAAAGgFQADgEAAgDIAKAAQABADgDAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgEQgBgHgCgEQgEgIgLAAQgFAAgFAFQgFAGgBAIIAiAAIAAAAg");
	this.shape_53.setTransform(32.55,-11.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_54.setTransform(27.975,-12.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAYQgIgIAAgPQgBgOAJgJQAIgKAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAJAEAHQAFAFAIAAQAHAAAFgFQAEgEABgDIAKAAQgBADgCAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgEIgDgLQgEgIgKAAQgHAAgEAFQgGAGAAAIIAiAAIAAAAg");
	this.shape_55.setTransform(23.25,-11.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAkQgNgMgBgYQAAgTAKgMQALgOASAAQAQAAAJAJQAJAJABALIgMAAQgCgJgFgEQgGgGgKAAQgMABgHAIQgIAJAAASQAAAPAHAJQAHAKANAAQANAAAGgKQADgFACgJIAMAAQgCAOgIAJQgKALgSAAQgOAAgJgJg");
	this.shape_56.setTransform(15.65,-12.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgbAjQgNgLAAgXQAAgWAMgLQALgMARAAQALAAAIAEQAJAEAFAIQAFAIABAKIABAQIg5AAQABANAHAFQAFADAFAAQAHAAAEgEIAFgGIAWAAQAAAIgIAIQgKAMgUAAQgQAAgMgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgEAFgBAIIAhAAIAAAAg");
	this.shape_57.setTransform(78.15,-34.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgdAhQgJgMAAgUQAAgVAKgMQALgMASAAQAQAAAKAHQAKAHACASIgXAAQAAgEgDgEQgDgGgIABQgLAAgEALQgCAGAAAJQAAAJACAFQAEAMAKAAQAIAAADgFQAEgEAAgHIAXAAQgBAKgGAJQgLAPgUAAQgUAAgKgMg");
	this.shape_58.setTransform(69.375,-34.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AAQAsIAAgzQAAgHgCgDQgDgHgJAAQgLAAgEAJQgDAGABAIIAAAtIgXAAIAAhVIAWAAIAAANIAIgJQAHgGAKAAQANAAAIAIQAIAGABAQIAAA5g");
	this.shape_59.setTransform(60.05,-34.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgbAjQgNgLAAgXQAAgWAMgLQALgMARAAQALAAAIAEQAJAEAFAIQAFAIABAKIABAQIg5AAQABANAHAFQAFADAFAAQAHAAAEgEIAFgGIAWAAQAAAIgIAIQgKAMgUAAQgQAAgMgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgEAFgBAIIAhAAIAAAAg");
	this.shape_60.setTransform(50.7,-34.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgeAvQgKgMAAgTQAAgVAKgMQAKgNARAAQAGAAAGAEQAGADAEAGIAAgpIAXAAIAAByIgXAAIAAgMQgEAIgGADQgGAEgIAAQgPAAgKgMgAgNgDQgEAGgBALQABAMAEAHQAFAHAIAAQAJAAAGgHQAEgHAAgLQAAgPgHgGQgFgEgHAAQgIAAgFAHg");
	this.shape_61.setTransform(41.2,-35.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgbAjQgMgLAAgXQAAgWALgLQALgMARAAQAKAAAJAEQAIAEAGAIQAFAIACAKIABAQIg6AAQABANAHAFQAEADAGAAQAHAAAFgEIADgGIAYAAQgCAIgGAIQgMAMgTAAQgQAAgMgKgAARgIQAAgJgFgEQgFgFgHAAQgHAAgEAFQgFAFgBAIIAiAAIAAAAg");
	this.shape_62.setTransform(32.1,-34.575);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgbAjQgNgLAAgXQAAgWAMgLQALgMARAAQALAAAIAEQAJAEAFAIQAFAIABAKIABAQIg5AAQABANAHAFQAFADAFAAQAHAAAEgEIAFgGIAWAAQAAAIgIAIQgKAMgUAAQgQAAgMgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgEAFgBAIIAhAAIAAAAg");
	this.shape_63.setTransform(23.25,-34.575);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgYAsIAAhVIAWAAIAAAPQAEgIAEgDQAGgGAKAAIABAAIACAAIAAAYIgEgBIgDAAQgNAAgFAJQgBAEAAAKIAAApg");
	this.shape_64.setTransform(16.125,-34.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgkAtQgOgQAAgcQAAgeAQgQQAOgOAVAAQAdAAANATQAIALAAAKIgYAAQgCgIgEgEQgGgIgNAAQgMAAgIALQgHALAAASQAAATAIAKQAIAKALAAQANAAAGgJQAEgEACgJIAYAAQgDATgNAMQgNALgUAAQgYAAgOgPg");
	this.shape_65.setTransform(6.925,-36.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgbA3QgKgHgBgMIAYAAQABADACACQAEADAHAAQAMAAAEgIQADgFAAgMIAAgGQgDAGgEADQgGAEgKABQgQAAgKgMQgKgMAAgSQAAgUAJgMQAKgNARAAQAGAAAEACQAIADAFAJIAAgMIAWAAIAABQQAAAQgFAJQgKAOgaAAQgQAAgLgGgAgPgeQgCAGAAAJQAAAHACAGQAFAKALgBQAIABAFgGQAFgFAAgNQAAgMgFgGQgFgHgJAAQgKAAgFALg");
	this.shape_66.setTransform(74.775,-48.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAQArIAAgzQAAgGgCgEQgDgGgKAAQgKAAgEAJQgCAGgBAIIAAAsIgVAAIAAhTIAVAAIAAAMQAEgGAEgDQAHgFAKgBQANABAIAGQAJAHgBAQIAAA4g");
	this.shape_67.setTransform(65.3,-50.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgKA6IAAhUIAVAAIAABUgAgKgkIAAgVIAVAAIAAAVg");
	this.shape_68.setTransform(58.2,-52.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgHAxQgEgEAAgIIAAgzIgMAAIAAgQIAMAAIAAgYIAVAAIAAAYIAOAAIAAAQIgOAAIAAAsQAAAFABABQACACAGAAIADAAIACgBIAAARIgKAAIgDABQgNAAgFgGg");
	this.shape_69.setTransform(53.25,-51.6981);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgLA6IAAhUIAXAAIAABUgAgLgkIAAgVIAXAAIAAAVg");
	this.shape_70.setTransform(48.5,-52.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgcAlQgKgJAAgNIAXAAQAAAGADADQAEAEAKAAQAHAAAEgCQADgCAAgEQAAgEgCgCQgEgCgTgEQgOgEgHgEQgFgGgBgKQAAgLAKgJQAJgIARAAQAPAAAKAGQAKAGACAQIgXAAQAAgEgCgDQgEgEgIAAQgHAAgDACQgDACAAADQAAAEADACQADACAUAEQANADAGAFQAHAHAAAJQAAANgJAIQgKAIgTAAQgUAAgJgIg");
	this.shape_71.setTransform(41.85,-50.575);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgKA6IAAhUIAVAAIAABUgAgKgkIAAgVIAVAAIAAAVg");
	this.shape_72.setTransform(35.25,-52.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgLAqIgfhTIAaAAIARA9IASg9IAYAAIggBTg");
	this.shape_73.setTransform(28.65,-50.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgbAjQgNgLAAgXQAAgWAMgLQALgMARAAQAKAAAJAEQAJAEAFAIQAFAIABAKIABAQIg5AAQABANAHAFQAFADAFAAQAHAAAEgEIAFgGIAWAAQAAAIgIAIQgKAMgUAAQgQAAgMgKgAARgIQgBgJgEgEQgFgFgHAAQgHAAgEAFQgEAFgCAIIAiAAIAAAAg");
	this.shape_74.setTransform(19.75,-50.575);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AAWA5IgCgGIgBgKIAAgLQAAgLgEgDQgEgDgLgBIgYAAIAAAtIgXAAIAAhyIA3AAQANAAAGAEQAHACAEAFQAEAFACAFQACAFAAAHQAAAIgEAJQgEAHgKADQAIACAEAHQADAFAAANIAAAIIABAKQABAFADACIAAACgAgYgFIAbAAQAIAAAEgCQAHgEAAgKQAAgKgHgDQgEgCgIgBIgbAAg");
	this.shape_75.setTransform(9.875,-52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR3, new cjs.Rectangle(-18.4,-60.6,120.69999999999999,122.7), null);


(lib.fr2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgrQAAgGgDgCQgDgCgEgBQgHAAgEAFQgFAEAAAJIAAAkIgJAAIAAgoQAAgGgCgDQgCgFgHAAQgGABgFAEQgEAFAAAMIAAAgIgLAAIAAg+IAKAAIAAAJIAHgGQAFgEAHAAQAIAAAEAEQACACACADQADgEAFgDQAFgCAGAAQAMAAAFAJQACAFAAAIIAAApg");
	this.shape.setTransform(105.775,107.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_1.setTransform(97.625,108.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgEAJgBAQQAAANAEAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgKAAQgIAAgEAJg");
	this.shape_2.setTransform(87.45,106.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgFAJAAAQQAAANAEAIQADALAKAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgEgKgLAAQgIAAgEAJg");
	this.shape_3.setTransform(80.8,106.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgRIAAgNIALAAIAAANg");
	this.shape_4.setTransform(76.2,107.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQAEgYANgXQAHgNAKgLIguAAIAAgKIA5AAIAAAJQgEAEgGAKQgHAJgFALQgGALgBAJIgFASg");
	this.shape_5.setTransform(70.95,106.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAjQgJgJAAgWQAAgPAEgKQAHgVATAAQAOAAAFAHQAGAIAAAHIgKAAQgBgFgCgCQgEgGgIAAQgIAAgFAIQgFAIgBAQQAEgGAFgCQAFgCAGAAQAKgBAIAHQAIAGAAANQAAALgIAKQgHAIgOAAQgLAAgIgIgAgKABQgFAFAAAJQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgGAAgHQAAgGgEgHQgEgEgJAAQgGAAgFADg");
	this.shape_6.setTransform(135.025,91.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgGIAKgHIALgHQAEgEABgHQgBgHgEgEQgEgFgIAAQgKABgDAHQgDAFAAAIIgLAAQAAgLAFgHQAGgMAQAAQAPAAAHAHQAGAJAAAJQAAAKgHAGQgEAFgKAFIgIAFIgIAFQgGAGgCAGIAtAAIAAAKg");
	this.shape_7.setTransform(128.3,91.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgEAJgBAQQAAANAEAIQAEALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgKAAQgIAAgEAJg");
	this.shape_8.setTransform(121.65,91.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgGIAKgHIALgHQAFgEgBgHQABgHgFgEQgEgFgIAAQgJABgEAHQgCAFgBAIIgLAAQAAgLAFgHQAGgMAQAAQAPAAAHAHQAGAJAAAJQAAAKgHAGQgEAFgLAFIgHAFIgJAFQgFAGgCAGIAtAAIAAAKg");
	this.shape_9.setTransform(115,91.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGABg");
	this.shape_10.setTransform(106.775,96.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAjQgJgJAAgWQAAgPAEgKQAHgVATAAQAOAAAFAHQAGAIAAAHIgKAAQgBgFgCgCQgEgGgIAAQgIAAgFAIQgFAIgBAQQAEgGAFgCQAFgCAGAAQAKgBAIAHQAIAGAAANQAAALgIAKQgHAIgOAAQgLAAgIgIgAgKABQgFAFAAAJQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgGAAgHQAAgGgEgHQgEgEgJAAQgGAAgFADg");
	this.shape_11.setTransform(101.825,91.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAEAqIAAg7IgTAAIAAgIQAMgBADgCQAFgDACgKIAJAAIAABTg");
	this.shape_12.setTransform(94.55,91.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRApQgGgFgCgJIALAAQABAEADACQADAEAHAAQAMAAADgJQACgFABgNQgEAFgEACQgEADgHAAQgKAAgIgIQgHgHAAgQQAAgPAHgJQAIgJALAAQAGAAAFAEIAHAFIAAgHIAKAAIAAA4QgBAMgDAHQgGAMgSAAQgKAAgHgEgAgOgYQgCAFAAAJQAAAKAFAFQAEAGAHAAQALAAAEgKQACgFABgIQgBgMgEgFQgFgGgHAAQgKAAgFALg");
	this.shape_13.setTransform(85,94.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAXQgDgFAAgHIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_14.setTransform(78.475,92.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaArIgJgaIghAAIgKAaIgLAAIAghVIAMAAIAfBVgAANAIIgNgmIgNAmIAaAAg");
	this.shape_15.setTransform(71.275,91.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGABg");
	this.shape_16.setTransform(62.925,96.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHABIgFAAQgEABgEAEIgDAHIgBAJIAAAgIgLAAIAAg9IALAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAFAJQADAFAAAKIAAAng");
	this.shape_17.setTransform(57.975,92.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAXQgDgFAAgHIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_18.setTransform(51.225,92.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_19.setTransform(43.9237,91.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRApQgGgFgBgJIAKAAQABAEACACQAEAEAHAAQALAAAEgJQACgFAAgNQgDAFgEACQgFADgGAAQgKAAgIgIQgIgHAAgQQABgPAHgJQAIgJALAAQAGAAAGAEIAFAFIAAgHIALAAIAAA4QAAAMgEAHQgHAMgRAAQgKAAgHgEgAgNgYQgCAFAAAJQAAAKADAFQAFAGAHAAQAKAAAFgKQACgFAAgIQABgMgFgFQgFgGgHAAQgLAAgDALg");
	this.shape_20.setTransform(139.5,70.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAgIAAgmQAAgGgCgEQgDgFgHgBIgFABQgEACgEAEIgDAGIgBAJIAAAgIgLAAIAAg+IALAAIAAAJQAEgGAFgCQAFgCAFAAQANAAAFAJQADAFAAAKIAAAng");
	this.shape_21.setTransform(133.075,69.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgIIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA+IgKAAIAAgKQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_22.setTransform(126.325,69.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAZQgHgJAAgPQAAgPAIgJQAIgJANAAQALAAAJAIQAIAIAAAQQAAAOgHAKQgIAJgOAAQgNAAgIgIgAgNgQQgEAIAAAJQAAAKAEAHQAFAGAIAAQAKAAAEgIQAEgHAAgJQAAgJgDgFQgEgJgLAAQgIAAgFAHg");
	this.shape_23.setTransform(119.7,69.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFArIAAgjIgggyIANAAIAYApIAZgpIAOAAIghAyIAAAjg");
	this.shape_24.setTransform(113.65,67.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAlQgHgHAAgJQAAgLAGgGQAEgEAJgFQgFgGgCgEQgCgFAAgDQABgJAFgGQAGgFAJAAQAIAAAFAFQAFAFAAAIQAAAHgFAHQgDADgGAFIAPASIACgHIABgGIAKAAQgBAHgDAJIgDAGIAAgBIAAABIAPASIgOAAIgHgKQgGAFgDADQgGAEgJAAQgOAAgFgHgAgUAKQgEAEAAAHQAAAGAFAEQAFADAGAAQAGAAADgDQAFgCADgEIgSgXQgJAFgCADgAgNgeIgCAFQAAADACAEIAHAIIAHgGQADgEAAgFQAAgEgDgCQgBgDgEAAQgHAAgCAEg");
	this.shape_25.setTransform(102.55,68.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_26.setTransform(91.825,67.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAbQgGgGAAgKIAKAAQAAAFACADQAEAFAKABQAGAAAEgDQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgIQAAgIAHgGQAGgFALgBQAOAAAGAJQAEAFAAAGIgKAAQAAgEgDgCQgDgEgIgBQgHABgDACQgDACAAAEQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAHQgHAFgNABQgNAAgGgHg");
	this.shape_27.setTransform(85.525,69.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAcQgGgFAAgIQAAgJAGgFQAFgDAJgCIAQgCQADAAACgDIABgEQAAgFgEgDQgEgCgHAAQgHAAgEAEQgCADAAAFIgKAAQAAgMAHgEQAIgFAJAAQAKAAAHAEQAGAEAAAJIAAAjIABADIADABIACAAIACAAIAAAIIgEAAIgEABQgFAAgDgEQgBgCAAgEQgEAEgFADQgFADgIAAQgJAAgFgFgAAHABIgGACIgFAAIgJADQgFADABAGQAAAEADADQADACAFAAQAFAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_28.setTransform(79.3,69.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVArIgrhEIAABEIgLAAIAAhVIAOAAIAqBEIAAhEIALAAIAABVg");
	this.shape_29.setTransform(71.5,67.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAAAIAAgBIgFAAIAAgOIALAAIAAANQAAAFgDAGQgCAFgGACg");
	this.shape_30.setTransform(62.225,72.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTAbQgGgGAAgKIAKAAQAAAFACADQAEAFAKABQAGAAAEgDQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgIQAAgIAHgGQAGgFALgBQAOAAAGAJQAEAFAAAGIgKAAQAAgEgDgCQgDgEgIgBQgHABgDACQgDACAAAEQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAHQgHAFgNABQgNAAgGgHg");
	this.shape_31.setTransform(57.625,69.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_32.setTransform(53.275,67.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_33.setTransform(50.625,67.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEArIAAg+IAKAAIAAA+gAgEgeIAAgMIAKAAIAAAMg");
	this.shape_34.setTransform(47.95,67.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAHApQgHAAgCgEQgDgEAAgGIAAgoIgJAAIAAgJIAJAAIAAgSIAJAAIAAASIALAAIAAAJIgLAAIAAAoQAAAAABABQAAABAAAAQAAABABAAQAAABABAAIAEABIABAAIADgBIAAAJIgEABg");
	this.shape_35.setTransform(44.95,68.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_36.setTransform(39.2737,67.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGACg");
	this.shape_37.setTransform(143.525,56.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTAsIgDAAIAAgKIAEABIACAAIAEgBIADgCIACgFIACgGIgWhAIALAAIAQAyIARgyIAMAAIgKAcIgKAZQgJAYgDAFQgDAFgJAAg");
	this.shape_38.setTransform(139.8,54.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLApIgGgHIAAAIIgKAAIAAhVIAKAAIAAAfQAEgEAFgDQAEgCAFAAQAMAAAHAIQAIAIAAAPQAAAPgIAJQgHAKgNAAQgGAAgFgDgAgMgGQgFAFAAALQAAAJACAGQAEAKALAAQAIAAAEgHQAFgHAAgLQAAgKgFgFQgEgHgIAAQgGAAgGAGg");
	this.shape_39.setTransform(133.625,52.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAbQgGgHAAgJIAKAAQAAAGACACQAEAGAKAAQAGgBAEgCQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgHQAAgJAHgGQAGgGALAAQAOAAAGAJQAEAFAAAHIgKAAQAAgEgDgDQgDgFgIAAQgHAAgDADQgDADAAADQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAGQgHAHgNAAQgNgBgGgGg");
	this.shape_40.setTransform(127.175,53.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAZQgIgJAAgPQAAgPAIgJQAIgJAMAAQANAAAHAIQAJAIAAAQQAAAOgHAKQgIAJgOAAQgNAAgHgIgAgNgQQgEAIAAAJQAAAKAEAHQAEAGAJAAQAKAAAEgIQAEgHAAgJQAAgJgCgFQgFgJgLAAQgJAAgEAHg");
	this.shape_41.setTransform(120.75,53.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAAMIgBgBIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_42.setTransform(115.875,53.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYAkQgMgMAAgYQAAgTAJgMQALgNASAAQAQgBAJAJQAJAJABALIgLAAQgCgIgGgGQgGgEgKAAQgLgBgIAKQgIAIAAASQAAAPAHAKQAHAJANAAQAMAAAHgKQAEgFACgIIALAAQgCANgIAJQgKAMgRAAQgOAAgLgKg");
	this.shape_43.setTransform(109.2,51.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAsIAAg1IgJAAIAAgJIAJAAIAAgKQAAgGACgDQADgGAKAAIACABIADAAIAAAJIgDAAIgBAAQgFAAgBADIAAAMIAKAAIAAAJIgKAAIAAA1g");
	this.shape_44.setTransform(99.95,51.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAZQgIgJAAgPQAAgPAIgJQAIgJANAAQAMAAAHAIQAJAIAAAQQAAAOgIAKQgHAJgOAAQgNAAgHgIgAgNgQQgEAIAAAJQAAAKAEAHQAFAGAIAAQALAAADgIQAEgHAAgJQAAgJgCgFQgFgJgLAAQgIAAgFAHg");
	this.shape_45.setTransform(94.9,53.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_46.setTransform(85.375,53.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_47.setTransform(81,51.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTAbQgGgHAAgJIAKAAQAAAGACACQAEAGAKAAQAGgBAEgCQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgHQAAgJAHgGQAGgGALAAQAOAAAGAJQAEAFAAAHIgKAAQAAgEgDgDQgDgFgIAAQgHAAgDADQgDADAAADQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAGQgHAHgNAAQgNgBgGgGg");
	this.shape_48.setTransform(76.725,53.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgIIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA+IgKAAIAAgKQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_49.setTransform(70.275,53.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAeArIAAgyIAAgIIAAgOIgYBIIgLAAIgZhIIAAADIABAKIAAAJIAAAyIgLAAIAAhVIAQAAIAYBIIAZhIIAQAAIAABVg");
	this.shape_50.setTransform(62.125,51.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAKADAFQAEAGAJAAQAIAAAFgGQACgCABgFIALAAQAAAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgFIgDgLQgFgHgJAAQgGAAgGAGQgEAEgBAIIAiAAIAAAAg");
	this.shape_51.setTransform(50.4,53.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_52.setTransform(43.825,51.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgdAAIAABLg");
	this.shape_53.setTransform(36.875,51.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AgbAjQgMgLAAgXQAAgWALgLQALgMARAAQAKAAAJAEQAJAEAFAIQAFAIACAKIABAQIg6AAQAAANAIAFQAFADAFAAQAHAAAFgEIADgGIAYAAQgCAIgGAIQgMAMgTAAQgPAAgNgKgAARgIQAAgJgFgEQgFgFgHAAQgHAAgEAFQgEAFgCAIIAiAAIAAAAg");
	this.shape_54.setTransform(125.45,28.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgcAlQgKgJAAgNIAWAAQABAGADADQAEAEAKAAQAGAAAEgCQAFgCAAgEQAAgEgDgCQgEgCgTgEQgPgEgFgEQgHgGABgKQAAgLAJgJQAJgIARAAQAPAAAKAGQAKAGABAQIgVAAQgBgEgCgDQgEgEgIAAQgHAAgDACQgDACAAADQAAAEADACQAEACASAEQANADAIAFQAGAHAAAJQAAANgKAIQgJAIgUAAQgSAAgKgIg");
	this.shape_55.setTransform(116.6,28.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgiAeQgDgHAAgPIAAgyIAWAAIAAAyQAAAHACAEQADAGAJAAQAKAAAFgJQACgFAAgIIAAgtIAWAAIAABTIgVAAIAAgLIgCACIgDAEQgFAEgFABQgEACgGABQgTAAgHgOg");
	this.shape_56.setTransform(107.275,28.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgfAgQgLgNAAgTQAAgRALgOQAKgNAVAAQAWAAALANQAKAOAAARQAAATgKANQgLAOgWAAQgVAAgKgOgAgOgTQgFAIAAALQAAANAFAHQAGAHAIAAQAKAAAFgHQAGgHAAgNQAAgLgGgIQgFgGgKAAQgIAAgGAGg");
	this.shape_57.setTransform(97.55,28);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AAXA5IAAgzIgsAAIAAAzIgZAAIAAhxIAZAAIAAArIAsAAIAAgrIAXAAIAABxg");
	this.shape_58.setTransform(87,26.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgYArIAAhTIAWAAIAAAOQAEgJAEgDQAGgEAKAAIABAAIACAAIAAAWIgEAAIgDAAQgNAAgFAIQgBAGAAAJIAAAog");
	this.shape_59.setTransform(74.025,27.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgiAeQgDgHAAgPIAAgyIAWAAIAAAyQAAAHACAEQADAGAJAAQAKAAAFgJQACgFAAgIIAAgtIAWAAIAABTIgVAAIAAgLIgCACIgDAEQgFAEgFABQgEACgGABQgTAAgHgOg");
	this.shape_60.setTransform(65.625,28.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AglAwQgRgRAAgfQAAgfARgPQANgOAYAAQAZAAANAOQARAPAAAfQAAAfgRARQgNANgZAAQgYAAgNgNgAgWgdQgIALAAASQAAATAIALQAJALANAAQAOAAAJgLQAIgLAAgTQAAgSgIgLQgJgLgOAAQgNAAgJALg");
	this.shape_61.setTransform(54.725,26.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(28.9,18,120.69999999999999,97.8), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAnQgIgFgFgJQgEgKgBgOQAAgOAGgKQAFgKAIgFQAJgEALAAQANgBAJAJQAIAIAAATIgsAAIAAADIAAAEQAAALACAGQAFAIACADQAFADAFAAIAIgBQACgBAFgEQADgCAEgFIADABQgDAHgEAFQgEAFgGAEQgGAEgKgBQgJABgJgFgAgFggQgDAGgBAQIAYAAIgBgOQgCgIgCgDQgCgEgFAAQgFAAgDAHg");
	this.shape.setTransform(34.5958,10.2296,0.8999,0.8999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAqIAAgDQAGAAACgCQADgDAAgHIAAgwQAAgIgDgDQgBgEgHAAIAAgDIAXAAIALgCIAAAPQAAgDAEgFQADgDAEgCQAFgCAEAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHACADQADADAJAAIAAADg");
	this.shape_1.setTransform(27.8687,10.1396,0.8999,0.8999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAnQgJgEgFgKQgFgJAAgQQAAgPAFgJQAFgKAJgFQAJgDAKAAQALAAAJADQAKAFAEAKQAFAJAAAPQAAAQgFAJQgFALgJADQgIAFgMgBQgKABgJgFgAgKgeQgEAKAAAUQAAAWAEAJQAFAJAFABQAGgBAFgJQAEgJAAgWQAAgUgEgKQgFgJgGAAQgFAAgFAJg");
	this.shape_2.setTransform(20.3316,10.2296,0.8999,0.8999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6A4IgdAAIgLABIAAgEIAJgBQADgBAAgDQABgCAAgGIAAhSIglBjIgDAAIgrhmIAABLIABAOQABAEADADQAEACAHAAIAAAEIgIgBIgYABIAAgEQAFAAADgCQADgCAAgFIABgMIAAhHIgBgIQgBgEgCAAIgIgBIAAgEIAHABIAggBIAgBNIAdhMIAlgBIAAAEIgIABQgCAAgBAEIgBAIIAABPIABAIQAAADADABIAIABIAAAEIgLgBg");
	this.shape_3.setTransform(9.8697,8.8572,0.8999,0.8999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAqIAAgDQAFAAACgDQACgBAAgIIAAgwIgBgHQAAgDgDgCQgCgCgEAAQgDAAgEADQgDACgCAEQgDAGAAAEIAAArQAAAHACACQADADAEAAIAAADIgIAAIgiAAIAAgDQAFAAADgDQACgCAAgHIAAgxQAAgHgCgDQgCgEgGAAIAAgDIAKAAIAXgCIAAAOQAEgIAHgDQAGgDAJAAQAGAAAFABQAEACACADIAEAHIABA3QAAAIADABQACADAFAAIAAADg");
	this.shape_4.setTransform(-4.5295,10.1396,0.8999,0.8999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqIAAgDQAFAAACgCQADgDAAgHIAAgwQAAgIgCgDQgCgEgHAAIAAgDIAXAAIALgCIAAAPIAEgIQADgDAEgCIAJgCIAAAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHADADQADADAIAAIAAADg");
	this.shape_5.setTransform(-12.269,10.1396,0.8999,0.8999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMApQgEgCgBgCQgCgDAAgEQgDAGgFADQgGAEgHAAQgHAAgFgDQgFgCgCgFQgDgFAAgFQAAgHADgEQAFgFAEgCQAEgDAGgBIALgDQAEgBADgDQADgCAAgEIAAgNIgBgHQgCgDgCgCQgEgCgDAAIgGABQgEABgCACQAFACACADQADACAAAFQAAAGgEADQgDADgGAAQgGAAgDgEQgDgDAAgFQAAgEADgEIAGgFQAEgDAHgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAFABAEIABA4IABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADgBIADgBIACACQgDADgFACQgEABgGAAQgGAAgDgCgAABgBIgFACIgFAFQgDABgBAFQgCAEAAAEQAAAHADADQACADAFAAIAFgCIAFgEIAAghg");
	this.shape_6.setTransform(-19.2886,10.1846,0.8999,0.8999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAnQgIgFgFgJQgFgKAAgOQABgOAFgKQAFgKAJgFQAHgEAMAAQANgBAIAJQAJAJgBASIgsAAIAAAHQAAALADAGQAEAHADAEQAFADAFAAIAHgBQADgBAEgEQAEgCAEgFIACABQgCAHgEAFQgEAFgHAEQgFAEgJgBQgKABgJgFgAgFggQgEAHgBAPIAZAAIgBgOQgCgIgCgDQgCgEgEAAQgGAAgDAHg");
	this.shape_7.setTransform(-26.7807,10.2296,0.8999,0.8999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrA5IAAgEIAHgBQADAAABgEIABgIIAAhPIgBgIQgBgCgDgCIgHgBIAAgEIAKABIAdAAIAKgBIAAAEIgHABQgDABgBADIgBAIIAABRIABAHQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAFABIAIAAQAGAAAEgDQAFgCAEgFQADgDADgIQADgJABgGIAEAAIAAAog");
	this.shape_8.setTransform(-34.7677,8.8572,0.8999,0.8999);

	this.instance = new lib.CTA();
	this.instance.setTransform(-63,-11,0.4699,0.4699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-63,-11,124.5,39), null);


(lib.Bg2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BGG2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg2, new cjs.Rectangle(0,0,160,451), null);


(lib.Bg1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg1_1, new cjs.Rectangle(0,0,160,600), null);


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

	// Layer_4
	this.instance = new lib.FR4("synched",0);
	this.instance.setTransform(224.2,427.75,1,1,0,0,0,-16.8,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(472).to({_off:false},0).to({x:62.7,alpha:1},11,cjs.Ease.get(1)).wait(117));

	// FR3
	this.instance_1 = new lib.FR3();
	this.instance_1.setTransform(154.5,480.95,1.3178,1.3178,0,0,0,78.8,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(381).to({_off:false},0).to({x:128.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},84).wait(128));

	// FR2
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(93.2,397.9,1.3178,1.3178,0,0,0,78.8,45.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).to({x:66.8,alpha:1},8,cjs.Ease.get(1)).to({_off:true},112).wait(219));

	// FR1
	this.instance_3 = new lib.FR11();
	this.instance_3.setTransform(73.1,395.65,1.3178,1.3178,0,0,0,63.8,41.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({_off:false},0).to({x:46.7,alpha:1},7,cjs.Ease.get(1)).to({_off:true},137).wait(339));

	// CTA
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(121.05,595.35,1.0508,1.0508,0,0,0,38.9,11.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({regY:11.6,y:574.4,alpha:1},8,cjs.Ease.get(1)).wait(472));

	// line
	this.instance_5 = new lib.Line_1();
	this.instance_5.setTransform(58,295.5,1.1732,1.1732,90,0,0,11.1,48.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({x:81.45,alpha:1},8,cjs.Ease.get(1)).wait(488));

	// Header
	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(77.05,195.5,1,1,0,0,0,128.2,70.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:175.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},73).wait(505));

	// Logo2
	this.instance_7 = new lib.Logo2_1();
	this.instance_7.setTransform(80.4,234.45,1.3292,1.3292,0,0,0,0.1,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(497));

	// Logo
	this.instance_8 = new lib.Logo_1();
	this.instance_8.setTransform(82.3,171.9,0.4041,0.4041,0,0,0,150.8,112.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:150.3,regY:111.5,scaleX:0.6316,scaleY:0.6316,alpha:1},8,cjs.Ease.get(1)).to({_off:true},81).wait(505));

	// Bg2
	this.instance_9 = new lib.Bg2();
	this.instance_9.setTransform(150,211.45,1,1,0,0,0,150,62.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95).to({_off:false},0).wait(505));

	// sc
	this.instance_10 = new lib.sc();
	this.instance_10.setTransform(17.35,96.7,0.6718,0.6718,0,0,180,108,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.4299,scaleY:0.4299,x:4.55,y:57},8,cjs.Ease.get(1)).wait(87).to({scaleX:0.6718,scaleY:0.6718,x:-20.4,y:96.7},0).to({regX:107.9,regY:165.7,scaleX:0.458,x:-22.85,y:96.6},8,cjs.Ease.get(1)).wait(497));

	// sc
	this.instance_11 = new lib.sc();
	this.instance_11.setTransform(150.4,98.5,0.6718,0.6718,0,0,0,108.3,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:108.4,regY:166.1,scaleX:0.4299,scaleY:0.4299,x:159.2,y:58.25},8,cjs.Ease.get(1)).wait(87).to({regX:108.3,regY:166,scaleX:0.6718,scaleY:0.6718,x:194.4,y:98.5},0).to({regX:108.4,regY:165.8,scaleX:0.4774,x:186.85,y:98.4},8,cjs.Ease.get(1)).wait(497));

	// IMG4
	this.instance_12 = new lib.IMG4("synched",0);
	this.instance_12.setTransform(75.8,76.25);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(475).to({_off:false},0).to({alpha:1},8).wait(117));

	// IMG3
	this.instance_13 = new lib.img3();
	this.instance_13.setTransform(-2.15,53.4,0.5054,0.5054,0,0,0,213.5,107.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(381).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(86).to({alpha:0},8).to({_off:true},1).wait(116));

	// Img2
	this.instance_14 = new lib.Img2_1();
	this.instance_14.setTransform(-2.45,47.45,0.6917,0.6917,0,0,0,149.7,62.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},120).wait(211));

	// Img1
	this.instance_15 = new lib.Img1_1();
	this.instance_15.setTransform(-9.8,58.4,0.7462,0.7462,0,0,0,149.9,65.4);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(95).to({_off:false},0).to({regY:65.2,y:57.6,alpha:1},8,cjs.Ease.get(1)).to({_off:true},166).wait(331));

	// Bg1
	this.instance_16 = new lib.Bg1_1();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(600));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-19.7,413.5,632.4000000000001);


// stage content:
(lib.WFSB_219237_MM_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [598];
	// timeline functions:
	this.frame_598 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(598).call(this.frame_598).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// Layer_1
	this.ad_animatedLayers = new lib.ad_animatedLayers("synched",0);
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150.2,124.7,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(600));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,280,333.5,332.4);
// library properties:
lib.properties = {
	id: '53723F07960A429783E9DFA0AF8E355E',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_4.jpg", id:"_4"},
		{src:"Bg1.jpg", id:"Bg1"},
		{src:"BGG2.png", id:"BGG2"},
		{src:"CTA.png", id:"CTA"},
		{src:"Img1.jpg", id:"Img1"},
		{src:"Img2.jpg", id:"Img2"},
		{src:"Img3.jpg", id:"Img3"},
		{src:"Line.png", id:"Line"},
		{src:"Logo.png", id:"Logo"},
		{src:"Logo2.png", id:"Logo2"},
		{src:"screen.png", id:"screen"}
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
an.compositions['53723F07960A429783E9DFA0AF8E355E'] = {
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