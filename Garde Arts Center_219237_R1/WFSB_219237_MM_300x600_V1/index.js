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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.BGG2 = function() {
	this.initialize(img.BGG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,372);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,83);


(lib.Image1 = function() {
	this.initialize(img.Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,222);


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

	// Layer_3
	this.instance = new lib.Image1();
	this.instance.setTransform(-58,-44,0.6084,0.6084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-58,-44,111.4,82.4), null);


(lib.Logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image1();
	this.instance.setTransform(27,36,1.2788,1.2788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(27,36,234,173.2), null);


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
	this.instance.setTransform(24,-70,0.4408,0.4408);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24,-70,102.3,212.5);


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
	this.instance.setTransform(176,-98,1.2932,1.2932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img3, new cjs.Rectangle(176,-98,398.20000000000005,397.6), null);


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
	this.instance.setTransform(124,-7,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(124,-7,285,213.3), null);


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
	this.instance.setTransform(146,13,0.7227,0.7227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(146,13,226.39999999999998,169.8), null);


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
	this.shape.setTransform(191.0981,245.2543,2.1598,2.1598);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlAqIghABIAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQAAgDgDgCQgCgBgEAAQgEAAgDACQgEADgCAEQgCADAAAGIAAAsQAAAHACACQACACAFAAIAAADIgqAAIAAgDQAFAAADgCQACgCAAgHIAAgyQAAgIgCgCQgCgEgGAAIAAgDIAKAAIAMAAIALgCIAAAOQAEgHAHgEQAHgEAHAAIAAABQAHAAAEABQAEACADADQACACACAGQABADAAAKIAAAqQAAAGACADQADACAFAAIAAAEIgJgBg");
	this.shape_1.setTransform(175.9795,238.2349,2.1598,2.1598);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXApQgFgBgCgDQgCgDgCgFIgBg0QAAgIgCgCQgCgEgGAAIAAgEIAKABIANgBIAKgCIAABCIABAHQABADACACQACABAEAAQAEAAADgCQAEgDABgDQADgFAAgFIAAgpQAAgHgDgEQgCgDgGAAIAAgEIAXAAIALgCIAABDQAAAHACAEQACADAGAAIAAADIgKAAIgYACIAAgOQgDAHgHAEQgGAEgIAAQgHAAgEgDg");
	this.shape_2.setTransform(154.5974,238.5049,2.1598,2.1598);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA5IAAgDQAFAAADgCQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAAhhIgEgDIgIgBIAAgEIBVAAIgBAZIAAAMIgDAAQgCgMgEgIQgEgHgFgDQgFgDgIAAIgFAAIgGABIgDADIgBAIIAAAoIAFAAQADAAAEgCQAEgCACgDQADgFAAgCIACgIIAEAAIAAAtIgDAAQgBgFgCgFQgCgFgEgDQgEgDgGAAIgFAAIAAAlQAAAGABADQABADADABQADABAIAAIAAAEg");
	this.shape_3.setTransform(134.1872,235.1572,2.1598,2.1598);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA7QgKgBgHgBQgJgDgDgCQgFgDAAgGQAAgFAFgEQAEgDAJgDIABADQgDADgBACIgBAGQAAAGAGAEQAFADAMAAQAGAAAFgBQAGgCADgEQAEgDAAgGQAAgGgEgCQgEgEgKAAIgJAAQgHAAgEgCQgFgBgDgDQgDgDAAgFQAAgGAGgGQAEgCAHgEIgJgDQgIgDgEgFQgEgGAAgIQAAgJAEgGQAFgGAHgCQAGgCAKgBQAIABAHACQAFACAEADIAFgGQAFgDAGAAQAGAAACACQADADAAAFQAAAFgDACQgDACgDAAQgDAAgCgCQgCgCAAgEQgBgDACgFQgFACgCADIgDADIABABQAEAGAAAJQAAAJgEAFQgDAFgJADQgGAEgJAAIgDAAIgEACQgCACAAADQAAAFAGAAIARAAQAJAAAGACQAIACADAEQAEAFAAAIQAAAIgFAGQgEAHgLAEQgLAFgOAAgAgOgwQgCAGAAAMQAAALACAHQAEAEADAAQAEAAADgEQABgHAAgLQAAgMgBgGQgCgFgFAAQgEAAgDAFg");
	this.shape_4.setTransform(106.2178,241.3127,2.1598,2.1598);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANA+IghAAIAAgDQAEAAADgDQADgCgBgHIAAgxQAAgJgBgCQgCgDgHgBIAAgDIAKABIAXgCIAABEQAAAHACACQADADAFAAIAAADIgJAAgAgLgoQgDgDAAgGQAAgFADgEQAEgDAHAAQAGAAADADQAFAEAAAFQAAAGgFADQgDADgGABQgHgBgEgDg");
	this.shape_5.setTransform(91.2611,234.0773,2.1598,2.1598);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAGAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIACgIIAAhPIgCgJQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgIgCIAAgDIAxAAQAUAAAKAHQAKAHgBAMQAAAGgDAFQgDAGgHAEQgHAEgLADIAAAAQANABAKADQAKAFADAGQADAFABAHQAAALgGAGQgEAIgKADQgMAEgNAAgAgKAoIABAIQAAABABAAQAAABAAAAQABABAAAAQABABABAAIAGABQAKAAAGgHQAFgHAAgOQABgMgHgHQgFgGgOAAIgHAAgAgIgyQgCADAAAIIAAAkIAHAAQAHAAADgDQAEgDACgHQACgGAAgHQAAgLgEgGQgDgGgIAAIAAgBQgGAAgCADg");
	this.shape_6.setTransform(74.1987,235.2112,2.1598,2.1598);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgEAEgEQAEgDAFAAQAHAAADADQAEAEAAAEQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_7.setTransform(217.7717,203.7861,2.1598,2.1598);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAqIgOgFQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgCAEIgDAAIAAgfIAEAAQAAAGADAJQAEAHADADQAFAEAGAAIAFgBIAEgEQACgCAAgEQAAgIgFgEIgLgKIgJgIQgFgDgDgGQgDgEAAgHQAAgGAEgFQAEgFAGgDQAIgCAGAAIAAAAQAGAAAFABQAFABACACQAGAFABgJIADAAIgBAcIgDAAIgDgMQgCgFgEgFQgEgDgHAAQgEAAgDACQgDAEAAAEQAAAFACADIAaAWQAEAEADAEQACAEAAAHQAAAIgEAEQgFAHgGABQgGADgJAAIgHgBg");
	this.shape_8.setTransform(205.2448,197.0367,2.1598,2.1598);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEA/IAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQgBgDgCgCQgCgBgEAAQgDAAgEACQgCABgEAFQgCAFAAAEIAAAtQAAAHACACQADACADAAIAAAEIgIgBIgLAAIgNAAIgKABIAAgEQAGAAACgCQADgDAAgGIAAhaQAAgHgDgEQgBgDgHAAIAAgEIAXAAIALgCIAAABIAAA3QAEgIAHgEQAGgDAJAAQAHAAADABQAFACACADQACACACAGQABADAAAJIAAArQAAAGADADQACACAGAAIAAAEg");
	this.shape_9.setTransform(186.7245,192.4471,2.1598,2.1598);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA4QgIgBgEgDQgFgEAAgFQAAgEAFgEQAEgFAJgCIACACIgFAGIgBAGQAAAGAGAEQAFADAMAAQAGABAFgCQAGgCAEgEQADgDAAgHQAAgEgEgEQgEgDgKAAIgJAAIgLgBQgFgCgDgDQgCgDAAgFQAAgHAFgFQADgCAJgEIgKgCQgIgEgDgFQgFgFAAgJQAAgJAFgFQAEgGAHgDQAGgCAKAAQAHAAAJACIAIAFIAFgFQAFgEAGgBQAFABADADQADABAAAGQAAAEgDACQgDADgDAAQgDAAgCgCQgBgBgBgEQAAgEACgFQgFACgCACIgDAFIAAABQAEAFAAAJQAAAJgEAFQgDAFgIAEQgGACgKAAIgCAAIgEADQgDACAAACQAAAGAGAAIARAAQAJAAAHACQAHACAEAFQAEAFAAAHQAAAHgFAIQgFAGgLAFQgLADgOAAQgLAAgHgCgAgNgwQgDAEAAAOQAAANADAEQACAGAEAAQAFAAACgGQABgFAAgMQAAgMgBgGQgCgFgFAAQgEAAgCAFg");
	this.shape_10.setTransform(166.5843,199.8444,2.1598,2.1598);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgDgBgEgDQgDgEAAgEQgBgDAAgKIAAgnQAAgHgDgDQgCgEgGAAIAAgDIAKAAIANAAIALgCIAABBIAAAHQABADACABQADACADABQADAAAEgDQADgCADgEQACgFAAgFIAAgpQAAgIgCgCQgCgEgGAAIAAgDIAJAAIANAAIALgCIAABCQAAAGACAEQACAEAGAAIAAADIgKAAIgXACIAAgOQgEAIgHADQgFAEgJgBQgHAAgEgCg");
	this.shape_11.setTransform(146.3901,197.0367,2.1598,2.1598);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALApQgDgCgBgCQgCgDAAgEQgDAFgFAEQgFAEgJAAIAAAAQgGAAgFgDQgFgDgCgEQgCgEAAgGQAAgHACgEQAEgFAFgCIAKgFIAKgCIAIgEQADgCAAgEIAAgNQAAgEgCgDQgBgDgCgCQgDgCgEAAIgHABQgDABgBACQACABAFAEQACADAAAEQAAAGgEADQgEADgFAAQgFAAgDgEQgEgDAAgFQAAgGACgCQADgDAEgCQADgDAIgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAEAAAFQACAGAAAHIAAArIAAAGQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACgBIADgCIABADQgDADgEACQgEABgGAAQgEAAgGgCgAAAgBIgJAHQgDADgCADQgBAEAAAEQAAAGADADQADADAEABQAEAAABgCQACgBADgEIAAggIgFAFg");
	this.shape_12.setTransform(127.5458,196.9287,2.1598,2.1598);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA5IAAgEIAHgBQADgBABgDIABgIIAAhPIgBgIQgBgEgDAAIgHgBIAAgEIAxAAIAAAEIgHABQgDAAgBAEQgBACAAAGIAABRIABAHQAAAAAAABQABABAAAAQAAABABAAQAAAAABAAIANABQAHAAADgDQAFgCAEgFIAGgLIAEgPIAEAAIAAAog");
	this.shape_13.setTransform(107.8376,193.743,2.1598,2.1598);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaA4QgJgBgEgDQgEgDAAgGQAAgEAFgEQAEgFAJgCIABACIgEAGIgCAGQAAAGAHAEQAFADALAAQAHABAFgCQAGgCADgEQAEgFAAgFQAAgEgEgEQgEgDgKAAIgJAAQgHAAgEgBQgFgCgDgDQgDgDAAgFQAAgGAGgGQAEgDAIgDQgHgBgDgBQgIgDgEgGQgEgFAAgJQAAgJAEgFQAEgGAIgDQAFgCALAAQAHAAAIACQAFACADADIAFgFQAHgEAFgBQAGABACADQADACAAAFQAAAEgDACQgDADgDAAQgDAAgCgCQgCgBAAgEQgBgEADgFQgGACgCACIgDAFIABABQAEAFAAAJQAAAJgEAFQgEAGgIADQgGACgJAAIgDAAIgEADQgCACAAACQAAAGAGAAIAQAAQAKAAAGACQAHACAEAFQAEAFAAAHQAAAIgFAHQgFAGgKAFQgLADgPAAQgLAAgGgCgAgOgwQgCAGAAAMQAAAMACAFQADAGAEAAQAFAAACgGQABgFAAgMQAAgMgBgGQgCgFgFAAQgFAAgCAFg");
	this.shape_14.setTransform(79.5442,199.8444,2.1598,2.1598);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA+IAAgEQAGABACgDQADgCAAgHIAAgyQAAgGgDgEQgCgEgGABIAAgEIAKAAIAXgCIAABFQAAAHACACQACADAGgBIAAAEgAgLgoQgDgDAAgGQAAgGADgDQAFgDAGAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgHAAgEgEg");
	this.shape_15.setTransform(64.5335,192.6091,2.1598,2.1598);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAGAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIABgIIAAhPIgBgJQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgIgCIAAgDIAxAAQATAAALAHQAKAIAAALQgBAGgDAFQgEAGgHAEQgFAEgNADIAAAAQAPABAJADQAKAFADAGQADAFABAHQAAALgGAGQgEAIgLADQgLAEgMAAgAgKAoIABAIQAAABABABQAAAAAAABQABAAAAAAQAAABABAAIAGABQALAAAGgHQAFgIABgNQgBgNgGgGQgGgGgNAAIgHAAgAgIgyQgCADAAAIIAAAkIAHAAQAHAAADgDQAFgEABgGQABgGABgHQgBgMgDgFQgEgGgHAAQgHAAgBACg");
	this.shape_16.setTransform(47.5251,193.743,2.1598,2.1598);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAJQgDgDgBgGQABgFADgDQAEgDAFAAQAHAAADADQADADAAAFQAAAGgDADQgDADgHAAQgFAAgEgDg");
	this.shape_17.setTransform(214.154,162.3178,2.1598,2.1598);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEArIAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQgBgDgCgCQgCgBgEAAQgEAAgDACQgEADgCAEQgCAEAAAFIAAAsQAAAGACADQACACAFAAIAAAEIgJgBIgYAAIgJABIAAgEQAFAAADgCQACgCAAgHIAAgyQAAgIgCgCQgCgEgGAAIAAgDIAJAAIANAAIALgCIAAAOQAFgIAGgDQAHgEAHAAIAAABQAHAAAEABQAEACADADQACACACAGIABA3QAAAGACADQADACAFAAIAAAEg");
	this.shape_18.setTransform(199.0894,155.2984,2.1598,2.1598);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAnQgIgEgFgKQgFgJABgPQAAgOAEgKQAFgKAJgEQAIgFALgBIAAAAQAPABAHAHQAIAJAAATIgsAAIAAAHQAAALAEAGQACAHAFADQAEADAFABIAHgCQADAAAEgDIAIgIIACABQgCAFgEAHQgDAFgIAEQgGADgJABQgKgBgIgEgAgFghQgEAHgBAQIAYAAQABgHgCgIQgBgGgCgEQgDgFgDABQgFAAgEAGg");
	this.shape_19.setTransform(179.9211,155.5684,2.1598,2.1598);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAnQgIgEgGgKQgEgJAAgPQAAgNAEgLQAGgKAJgEQAIgFALgBIAAAAQAOABAHAHQAIAIAAAUIgrAAIAAAHQAAALADAGQADAHAEADQAEADAGABIAGgCQAEAAAEgDQADgCAEgGIACABQgBAFgEAHQgEAFgHAEQgHADgIABQgKgBgIgEgAgFghQgEAIgBAPIAYAAIAAgPQgBgFgDgFQgCgFgEABQgEAAgFAGg");
	this.shape_20.setTransform(162.4267,155.5684,2.1598,2.1598);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiArIAAgEQAGAAACgDQACgBAAgIIAAgwQAAgIgCgEQgCgDgGAAIAAgDIAKABIANgBQAGAAAEgCIAAAPQACgFADgDIAHgFIAJgDQAGAAACADQADABACAEQACADAAAEQAAAGgEAEQgEADgFAAQgFAAgEgDQgDgBAAgGQAAgDACgEIAFgFIgEAAIgGACIgFAGIgCAGIgBAGIAAAqQAAAIADACQAEADAHAAIAAAEg");
	this.shape_21.setTransform(146.3901,155.3524,2.1598,2.1598);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAnQgIgEgGgKQgEgJAAgQQAAgNAEgKQAGgJAJgGQAKgFAJAAIAAABQAGAAAFABIAJADQAEADACAEQADAEAAAEQAAAFgDAFQgEADgFAAQgGAAgDgDQgEgDAAgGQAAgEADgEQADgDAFgCIgFgCQgCgCgDAAQgFAAgEADQgDADgCAFIgEAMQgCAHAAAIQABALADAIQACAGAFAEQAFACAFAAIAHgBQAEgBADgCQADgDAEgGIACABQgBAGgEAGQgEAGgGAEQgHAEgJAAQgKAAgIgFg");
	this.shape_22.setTransform(129.5977,155.5144,2.1598,2.1598);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPA5IgKgEIgGgCIgCABIgBAGIgEAAIAAgsIAEAAQAAAJAEALQADAKAGAFQAGAGALAAQAEAAAEgCIAIgGQACgFAAgFQAAgHgDgFQgDgEgFgFIgagSQgGgEgEgHQgFgHAAgJQABgJAFgHQAEgHAJgDQAIgDAJAAIAAAAQAJAAAFACIAJAEIACACIADABQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgFIADAAIgBAkIgDAAQgBgJgDgHQgEgIgFgFQgHgFgHAAQgHAAgFAEQgFAFAAAHQAAAHADAEQAEAFAFAEIAcATQAHAGADAGQAEAGAAAJQAAAKgGAHQgFAGgJAEQgIAEgLAAQgKAAgFgCg");
	this.shape_23.setTransform(111.1313,152.2747,2.1598,2.1598);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaA5QgIgCgEgEQgFgDAAgFQAAgEAFgFQAEgEAJgCIABADQgDADgBACIgBAFQAAAIAGADQAFADAMABQAHAAAEgCQAGgCADgEQAEgEAAgFQAAgFgEgDQgEgEgKAAIgJAAQgGAAgFgCQgFgBgDgDQgCgDAAgFQAAgHAFgEQAEgEAIgDIgKgCQgIgEgEgFQgEgGAAgIQAAgJAEgFQAFgHAHgCQAGgDAKAAQAIAAAHADQAFACAEADIAFgFQAFgFAGAAQAFAAADADQADADAAAEQAAAFgDADQgDACgDAAQgDAAgCgCQgCgCAAgEQgBgDACgFQgEACgDACIgDAFIABABQAEAFAAAJQAAAJgEAFQgDAFgJAEQgFACgKAAIgCAAIgFADQgCACAAADQAAAFAGAAIARAAQAJAAAGACQAIACADAEQAEAFAAAIQAAAIgFAGQgEAGgLAGQgLADgOAAQgLAAgHgBgAgOgwQgCAGAAALQAAANACAFQADAFAEABQAFgBACgFQABgFAAgNQAAgLgBgGQgCgFgFAAQgEAAgDAFg");
	this.shape_24.setTransform(83.1078,158.3761,2.1598,2.1598);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVA+IAAgDQAFgBADgCQADgCgBgHIAAgyQAAgGgBgEQgDgEgGAAIAAgDIAKAAIAXgBIAABEQgBAHADACQADACAFABIAAADgAgLgoQgDgDAAgGQAAgFADgEQAFgDAGAAQAFAAAFADQADAEAAAFQAAAGgDADQgEAEgGgBQgHABgEgEg");
	this.shape_25.setTransform(68.1512,151.1408,2.1598,2.1598);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAFAAADgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIABgIIAAhPIgBgJQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAIgIgCIAAgDIAxAAQATAAALAHQAJAIAAALQAAAGgDAFQgDAGgHAEQgHAEgMADIAAAAQAOABAKADQAJAFAEAGQAEAGAAAGQAAAKgGAHQgFAIgKADQgKAEgOAAgAgKAoIABAIQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGABQALAAAGgHQAFgHAAgOQAAgMgGgHQgGgGgNAAIgHAAgAgIgyQgCAEAAAHIAAAkIAHAAQAHAAADgDQAEgDACgHQACgGAAgHQAAgLgEgGQgEgGgHAAQgHAAgBACg");
	this.shape_26.setTransform(51.1427,152.2747,2.1598,2.1598);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC554").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGgBAHQABAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_27.setTransform(219.4,406.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgnBXQgPgKgJgQQgJgRAAgWQAAgVAJgPQAJgRAPgJQAQgJASAAQANAAAOAGQANAGAIAKIAAhEIAeAAIAAC9IgeAAIAAgWQgHALgNAGQgNAHgPAAQgSAAgQgJgAgUgSQgKAFgGALQgGAKAAAOQAAAPAGALQAGALAKAGQAKAGAKAAQALAAAKgGQAKgGAGgLQAGgLAAgOQAAgPgGgKQgGgKgKgGQgKgGgLAAQgKAAgKAGg");
	this.shape_28.setTransform(207.625,398.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgKQgKgKgQAAQgPAAgKAKQgKAKAAATIAABOIgdAAIAAiMIAdAAIAAAQQAHgJAMgFQALgFALAAQARAAANAHQAOAHAHAOQAIAOAAASIAABTg");
	this.shape_29.setTransform(191.725,401.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgjBBQgOgHgHgOQgIgNAAgUIAAhSIAdAAIAABOQAAATAKAKQAJAKAQAAQAQAAAKgKQAJgKAAgTIAAhOIAeAAIAACNIgeAAIAAgRQgGAJgMAFQgLAFgLAAQgRAAgNgHg");
	this.shape_30.setTransform(175.425,401.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgkBAQgRgJgJgRQgJgQAAgWQAAgVAKgQQAIgRARgJQARgJATAAQAUAAARAJQAQAJAKARQAJAQAAAVQAAAVgJARQgLARgQAJQgRAJgTAAQgVAAgPgJgAgVgpQgJAFgGALQgFAKgBAPQAAAXAMAMQAMANASAAQAKAAAKgGQAKgFAGgLQAGgLAAgPQAAgPgGgKQgFgLgKgFQgLgGgKAAQgLAAgKAGg");
	this.shape_31.setTransform(159.5,401.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgjBIIAAiMIAdAAIAAAUQAGgLAKgGQALgGAPAAIAAAeIgIAAQgRAAgJAJQgIAJAAAVIAABKg");
	this.shape_32.setTransform(147.475,401.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AgnBAQgPgKgJgQQgJgRAAgVQAAgVAJgQQAJgRAPgJQAQgJASAAQAQAAAMAGQANAHAHAKIAAgVIAeAAIAACNIgeAAIAAgVQgHAKgNAGQgNAHgPAAQgTAAgPgJgAgUgpQgKAFgGALQgGALAAAOQAAAOAGALQAGALAKAGQAKAGAKAAQALAAAKgGQAKgGAGgLQAGgLAAgOQAAgOgGgLQgGgKgKgGQgKgGgLAAQgKAAgKAGg");
	this.shape_33.setTransform(133.275,401.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgaBDQgOgGgHgKQgIgLgBgNIAfAAQAAAJAIAGQAIAGALAAQAMAAAHgEQAHgFAAgIQAAgIgIgDQgHgEgQgFIgagIQgKgDgHgJQgHgIAAgOQAAgMAGgJQAHgJAMgGQANgFAPAAQAYAAAPAMQAPAMABAVIgdAAQgBgJgHgGQgHgFgLAAQgMAAgGAEQgGAEAAAIQAAAFAEAEQAEAEAGACIARAGQAPAEAKAEQAKADAHAIQAHAJABANQAAAMgHAKQgHAJgMAGQgMAFgRAAQgPAAgNgGg");
	this.shape_34.setTransform(112.525,401.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AARBYQgSAAgLgJQgLgJAAgVIAAhNIgRAAIAAgYIARAAIAAgjIAdAAIAAAjIAiAAIAAAYIgiAAIAABNQAAAIAEADQAEAEAIAAIASAAIAAAYg");
	this.shape_35.setTransform(101.45,399.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AAjBfIAAhPQAAgSgJgKQgKgKgQAAQgPAAgKAKQgKAKAAASIAABPIgdAAIAAi9IAdAAIAABBQAIgJALgFQAMgFAMAAQAQAAANAHQANAHAHAOQAIAOAAARIAABUg");
	this.shape_36.setTransform(89.025,398.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgrBeQgTgOgDgXIAdAAQAEALAKAHQALAGAPABQARAAALgMQALgKAAgUIAAgZQgHALgNAGQgNAIgPAAQgSAAgQgKQgPgJgJgRQgJgQAAgVQAAgWAJgQQAJgRAPgIQAQgKASAAQAPAAANAGQANAIAHAJIAAgUIAeAAIAACPQAAATgJAPQgIAPgPAJQgQAJgVAAQgcAAgTgNgAgUhLQgKAFgGAMQgGAKAAAPQAAAOAGALQAGALAKAFQAKAGAKAAQALAAAKgFQAKgHAGgJQAGgMAAgOQAAgOgGgLQgGgLgKgGQgKgGgLABQgKgBgKAGg");
	this.shape_37.setTransform(71.875,404.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgOBjIAAiMIAdAAIAACMgAgMhCQgFgFAAgIQAAgIAFgGQAFgFAHAAQAIAAAGAFQAEAGAAAIQAAAIgEAFQgGAGgIAAQgHAAgFgGg");
	this.shape_38.setTransform(60.8,398.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgKQgKgKgQAAQgPAAgKAKQgKAKAAATIAABOIgdAAIAAiMIAdAAIAAAQQAHgJAMgFQALgFALAAQARAAANAHQAOAHAHAOQAIAOAAASIAABTg");
	this.shape_39.setTransform(49.675,401.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AARBYQgTAAgKgJQgLgJABgVIAAhNIgRAAIAAgYIARAAIAAgjIAcAAIAAAjIAjAAIAAAYIgjAAIAABNQAAAIADADQAFAEAJAAIASAAIAAAYg");
	this.shape_40.setTransform(228.75,367.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgaBDQgOgGgHgKQgIgLgBgNIAfAAQAAAJAIAGQAIAGALAAQAMAAAHgEQAHgFAAgIQAAgIgIgDQgHgEgQgFIgagIQgKgDgHgJQgHgIAAgOQAAgMAGgJQAHgJAMgGQANgFAPAAQAYAAAPAMQAPAMABAVIgdAAQgBgJgHgGQgHgFgLAAQgMAAgGAEQgGAEAAAIQAAAFAEAEQAEAEAGACIARAGQAPAEAKAEQAKADAHAIQAHAJABANQAAAMgHAKQgHAJgMAGQgMAFgRAAQgPAAgNgGg");
	this.shape_41.setTransform(217.625,369.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_42.setTransform(203.425,369.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgNBjIAAiMIAbAAIAACMgAgMhCQgGgFAAgIQAAgIAGgGQAFgFAHAAQAIAAAGAFQAEAGABAIQgBAIgEAFQgGAFgIABQgHgBgFgFg");
	this.shape_43.setTransform(192.6,366.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgLQgKgJgQgBQgPABgKAJQgKALAAATIAABOIgdAAIAAiMIAdAAIAAAQQAHgJAMgFQALgFALAAQARAAANAHQAOAHAHAOQAIAOAAASIAABTg");
	this.shape_44.setTransform(181.475,369.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgLQgKgJgQgBQgPABgKAJQgKALAAATIAABOIgdAAIAAiMIAdAAIAAAQQAHgJAMgFQALgFALAAQARAAANAHQAOAHAHAOQAIAOAAASIAABTg");
	this.shape_45.setTransform(165.375,369.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgjBBQgOgHgHgOQgIgNAAgUIAAhSIAdAAIAABOQAAATAKAKQAJAKAQAAQAQAAAKgKQAJgKAAgTIAAhOIAeAAIAACNIgeAAIAAgRQgGAJgMAFQgLAFgLAAQgRAAgNgHg");
	this.shape_46.setTransform(149.075,369.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AgSBjIAAh0IgRAAIAAgYIARAAIAAgKQAAgZANgLQAMgLAbAAIAAAYQgNAAgFAFQgGAFAAANIAAAKIAaAAIAAAYIgaAAIAAB0g");
	this.shape_47.setTransform(137.025,366.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_48.setTransform(119.275,369.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AAjBfIAAhPQAAgSgJgLQgKgJgQgBQgPABgKAJQgKALAAASIAABPIgdAAIAAi9IAdAAIAABBQAIgJALgFQAMgFAMAAQAQAAANAHQANAHAHAOQAIAOAAARIAABUg");
	this.shape_49.setTransform(103.625,367.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AARBYQgSAAgLgJQgLgJAAgVIAAhNIgQAAIAAgYIAQAAIAAgjIAdAAIAAAjIAjAAIAAAYIgjAAIAABNQAAAIADADQAEAEAKAAIASAAIAAAYg");
	this.shape_50.setTransform(90.95,367.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgnBXQgPgKgJgQQgJgRAAgWQAAgVAJgPQAJgRAPgJQAQgJASAAQANAAAOAGQANAGAIAKIAAhEIAeAAIAAC9IgeAAIAAgWQgHALgNAGQgNAHgPAAQgSAAgQgJgAgUgSQgKAFgGALQgGAKAAAOQAAAPAGALQAGALAKAGQAKAGAKAAQALAAAKgGQAKgGAGgLQAGgLAAgOQAAgPgGgKQgGgKgKgGQgKgGgLAAQgKAAgKAGg");
	this.shape_51.setTransform(71.375,367.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgLQgKgJgQgBQgPABgKAJQgKALAAATIAABOIgdAAIAAiMIAdAAIAAAQQAHgJAMgFQALgFALAAQARAAANAHQAOAHAHAOQAIAOAAASIAABTg");
	this.shape_52.setTransform(55.475,369.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgnBAQgPgKgJgQQgJgRAAgVQAAgVAJgQQAJgRAPgJQAQgJASAAQAQAAAMAGQANAHAHAKIAAgVIAeAAIAACNIgeAAIAAgVQgHAKgNAGQgNAHgPAAQgTAAgPgJgAgUgpQgKAFgGALQgGALAAAOQAAAOAGALQAGALAKAGQAKAGAKAAQALAAAKgGQAKgGAGgLQAGgLAAgOQAAgOgGgLQgGgKgKgGQgKgGgLAAQgKAAgKAGg");
	this.shape_53.setTransform(38.375,369.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgLQgKgKgQAAQgPAAgKAKQgKALAAATIAABOIgdAAIAAiMIAdAAIAAAPQAHgIAMgFQALgFALAAQARAAANAHQAOAHAHANQAIAPAAATIAABSg");
	this.shape_54.setTransform(240.525,337.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AglBAQgQgJgJgRQgJgQAAgWQAAgVAJgQQAKgRAQgJQAQgJAUAAQAUAAAQAJQARAJAJARQAKAQAAAVQAAAVgKARQgJARgRAJQgRAJgUAAQgTAAgRgJgAgUgpQgKAFgGALQgGAKABAPQAAAXAMAMQALANARAAQALAAAKgGQAKgFAGgLQAGgLAAgPQAAgPgGgKQgGgLgJgFQgLgGgKAAQgLAAgJAGg");
	this.shape_55.setTransform(224.45,337.875);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgaBDQgOgGgHgKQgIgLgBgNIAfAAQAAAJAIAGQAIAGALAAQAMAAAHgEQAHgFAAgIQAAgIgIgDQgHgEgQgFIgagIQgKgDgHgJQgHgIAAgOQAAgMAGgJQAHgJAMgGQANgFAPAAQAYAAAPAMQAPAMABAVIgdAAQgBgJgHgGQgHgFgLAAQgMAAgGAEQgGAEAAAIQAAAFAEAEQAEAEAGACIARAGQAPAEAKAEQAKADAHAIQAHAJABANQAAAMgHAKQgHAJgMAGQgMAFgRAAQgPAAgNgGg");
	this.shape_56.setTransform(209.875,337.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgnBAQgPgKgJgQQgJgRAAgVQAAgVAJgQQAJgRAPgJQAQgJASAAQAQAAAMAGQANAHAHAKIAAgVIAeAAIAACNIgeAAIAAgVQgHAKgNAGQgNAHgPAAQgTAAgPgJgAgUgpQgKAFgGALQgGALAAAOQAAAOAGALQAGALAKAGQAKAGAKAAQALAAAKgGQAKgGAGgLQAGgLAAgOQAAgOgGgLQgGgKgKgGQgKgGgLAAQgKAAgKAGg");
	this.shape_57.setTransform(194.375,337.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_58.setTransform(178.725,337.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgaBDQgOgGgHgKQgIgLgBgNIAfAAQAAAJAIAGQAIAGALAAQAMAAAHgEQAHgFAAgIQAAgIgIgDQgHgEgQgFIgagIQgKgDgHgJQgHgIAAgOQAAgMAGgJQAHgJAMgGQANgFAPAAQAYAAAPAMQAPAMABAVIgdAAQgBgJgHgGQgHgFgLAAQgMAAgGAEQgGAEAAAIQAAAFAEAEQAEAEAGACIARAGQAPAEAKAEQAKADAHAIQAHAJABANQAAAMgHAKQgHAJgMAGQgMAFgRAAQgPAAgNgGg");
	this.shape_59.setTransform(164.425,337.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_60.setTransform(144.025,337.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AAjBfIAAhPQAAgSgJgLQgKgKgQAAQgPAAgKAKQgKALAAASIAABPIgdAAIAAi9IAdAAIAABBQAIgJALgFQAMgFAMAAQAQAAANAHQANAHAHANQAIAPAAASIAABTg");
	this.shape_61.setTransform(128.425,335.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AARBYQgTAAgKgJQgLgJABgVIAAhNIgSAAIAAgYIASAAIAAgjIAcAAIAAAjIAiAAIAAAYIgiAAIAABNQAAAIAEADQADAEAJAAIASAAIAAAYg");
	this.shape_62.setTransform(115.75,336.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgSBjIAAh0IgRAAIAAgYIARAAIAAgKQAAgZANgLQAMgLAbAAIAAAYQgNAAgFAFQgGAFAAANIAAAKIAaAAIAAAYIgaAAIAAB0g");
	this.shape_63.setTransform(101.075,335.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AglBAQgQgJgJgRQgJgQAAgWQAAgVAKgQQAIgRARgJQARgJATAAQAUAAARAJQAQAJAKARQAJAQAAAVQAAAVgJARQgLARgQAJQgRAJgUAAQgTAAgRgJgAgVgpQgJAFgGALQgFAKAAAPQgBAXAMAMQAMANARAAQALAAAKgGQAKgFAGgLQAGgLAAgPQAAgPgGgKQgFgLgKgFQgLgGgKAAQgLAAgKAGg");
	this.shape_64.setTransform(89.2,337.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgaBDQgOgGgHgKQgIgLgBgNIAfAAQAAAJAIAGQAIAGALAAQAMAAAHgEQAHgFAAgIQAAgIgIgDQgHgEgQgFIgagIQgKgDgHgJQgHgIAAgOQAAgMAGgJQAHgJAMgGQANgFAPAAQAYAAAPAMQAPAMABAVIgdAAQgBgJgHgGQgHgFgLAAQgMAAgGAEQgGAEAAAIQAAAFAEAEQAEAEAGACIARAGQAPAEAKAEQAKADAHAIQAHAJABANQAAAMgHAKQgHAJgMAGQgMAFgRAAQgPAAgNgGg");
	this.shape_65.setTransform(68.525,337.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("ABWBIIAAhOQAAgTgKgLQgJgKgRAAQgQAAgKAKQgJALAAATIAABOIgdAAIAAhOQAAgTgJgLQgKgKgQAAQgQAAgKAKQgKALAAATIAABOIgdAAIAAiMIAdAAIAAAPQAHgIALgFQAMgFAMAAQARAAAOAHQAMAIAHANQAHgNANgHQAOgIAPAAQARAAANAHQAOAHAHANQAIAPAAATIAABSg");
	this.shape_66.setTransform(48.925,337.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgOBfIAAi9IAcAAIAAC9g");
	this.shape_67.setTransform(32.6,335.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgNBjIAAiMIAcAAIAACMgAgMhBQgFgGgBgIQABgIAFgFQAFgGAHAAQAIAAAGAGQAEAFAAAIQAAAIgEAGQgGAEgIAAQgHAAgFgEg");
	this.shape_68.setTransform(26.35,335.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgSBjIAAh0IgRAAIAAgYIARAAIAAgKQAAgZANgLQAMgLAbAAIAAAYQgNAAgFAFQgGAFAAANIAAAKIAaAAIAAAYIgaAAIAAB0g");
	this.shape_69.setTransform(19.175,335.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AARBYQgSAAgLgJQgLgJAAgVIAAhNIgRAAIAAgYIARAAIAAgjIAdAAIAAAjIAiAAIAAAYIgiAAIAABNQAAAIAEADQAEAEAIAAIASAAIAAAYg");
	this.shape_70.setTransform(248.35,304.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgaBDQgOgGgHgKQgIgLgBgNIAfAAQAAAJAIAGQAIAGALAAQAMAAAHgEQAHgFAAgIQAAgIgIgDQgHgEgQgFIgagIQgKgDgHgJQgHgIAAgOQAAgMAGgJQAHgJAMgGQANgFAPAAQAYAAAPAMQAPAMABAVIgdAAQgBgJgHgGQgHgFgLAAQgMAAgGAEQgGAEAAAIQAAAFAEAEQAEAEAGACIARAGQAPAEAKAEQAKADAHAIQAHAJABANQAAAMgHAKQgHAJgMAGQgMAFgRAAQgPAAgNgGg");
	this.shape_71.setTransform(237.175,306.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_72.setTransform(222.975,306.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgXBaQgMgHgHgKIAAAVIgdAAIAAi9IAdAAIAABFQAHgKANgHQANgGAPAAQASAAAQAJQAPAJAJAQQAJAQAAAVQAAAWgJARQgJAQgQAKQgPAJgSAAQgPAAgOgGgAgVgSQgJAGgGAKQgHAKABAPQgBAPAHAKQAGALAJAGQAKAGALAAQALAAAJgGQAKgGAHgLQAFgLABgPQgBgOgFgKQgHgLgKgFQgJgGgLAAQgLAAgKAGg");
	this.shape_73.setTransform(207.3,303.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_74.setTransform(184.575,306.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AAjBfIAAhPQAAgSgJgLQgKgKgQABQgPgBgKAKQgKALAAASIAABPIgdAAIAAi9IAdAAIAABBQAIgJALgFQAMgFAMAAQAQAAANAHQANAHAHANQAIAOAAATIAABTg");
	this.shape_75.setTransform(168.925,303.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AARBYQgTAAgKgJQgKgJAAgVIAAhNIgSAAIAAgYIASAAIAAgjIAcAAIAAAjIAiAAIAAAYIgiAAIAABNQAAAIAEADQADAEAJAAIASAAIAAAYg");
	this.shape_76.setTransform(156.25,304.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_77.setTransform(137.975,306.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AghBAQgQgJgIgRQgJgQAAgWQAAgVAJgRQAIgQAQgJQAQgJATAAQAaAAARAMQAQAMAGAXIgfAAQgEgLgJgGQgIgFgNAAQgRAAgLAMQgKANAAAWQAAAXAKANQALAMARAAQAZAAAJgWIAfAAQgGAWgRAMQgRANgZAAQgTAAgQgJg");
	this.shape_78.setTransform(122.825,306.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAjBIIAAhOQAAgTgJgLQgKgKgQABQgPgBgKAKQgKALAAATIAABOIgdAAIAAiNIAdAAIAAAQQAHgIAMgFQALgFALAAQARAAANAHQAOAHAHANQAIAOAAAUIAABSg");
	this.shape_79.setTransform(107.425,306.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_80.setTransform(91.575,306.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC554").s().p("AgNBjIAAiNIAcAAIAACNgAgMhBQgFgGgBgIQABgIAFgFQAFgGAHAAQAIAAAGAGQAEAFAAAIQAAAIgEAGQgGAEgIAAQgHAAgFgEg");
	this.shape_81.setTransform(80.8,303.35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDC554").s().p("AgjBIIAAiNIAdAAIAAAVQAGgLAKgGQALgGAPAAIAAAeIgIAAQgRAAgJAJQgIAJAAAWIAABJg");
	this.shape_82.setTransform(73.575,306.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDC554").s().p("AgiBAQgRgJgJgRQgJgQAAgWQAAgVAJgRQAJgQAQgJQAQgJAUAAQAUAAAQAJQAPAIAJAQQAJAQAAAUIgBAOIhrAAQABARALAKQALAKAQAAQAXAAAKgTIAgAAQgHATgQANQgRAMgZAAQgTAAgQgJgAAngMQAAgQgLgKQgMgJgQAAQgPAAgKAJQgLAKgCAQIBNAAIAAAAg");
	this.shape_83.setTransform(60.625,306.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EDC554").s().p("AhHBqIAAjQIAcAAIAAAUQAIgJANgHQANgHAPAAQASAAAPAKQAQAJAJAQQAJARAAAVQAAAVgJAQQgJARgQAJQgPAKgSAAQgPAAgNgHQgMgHgJgJIAABYgAgUhKQgLAGgFALQgHALAAAOQAAAPAHALQAFAKALAGQAJAFALAAQAKAAAKgGQALgFAGgLQAFgLABgOQgBgPgFgKQgGgLgLgGQgKgFgKAAQgLAAgJAFg");
	this.shape_84.setTransform(44.95,309.425);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EDC554").s().p("AAdBHIgegwIgdAwIgeAAIAuhGIguhHIAhAAIAdAwIAdgwIAfAAIguBGIAuBHg");
	this.shape_85.setTransform(29.9,306.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDC554").s().p("AgwBZIAAixIBhAAIAAAXIhEAAIAAA1IA9AAIAAAXIg9AAIAAA2IBEAAIAAAYg");
	this.shape_86.setTransform(17.475,304.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(7.7,137.8,247.9,282.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgrQAAgGgDgCQgDgCgEgBQgHAAgEAFQgFAEAAAJIAAAkIgJAAIAAgoQAAgGgCgDQgCgFgHAAQgGABgFAEQgEAFAAALIAAAhIgLAAIAAg+IAKAAIAAAJIAHgHQAFgDAHAAQAIAAAEADQACADACADQADgFAFgCQAFgCAGAAQAMAAAFAJQACAFAAAIIAAApg");
	this.shape.setTransform(158.675,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_1.setTransform(150.525,60.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJAAAQQAAANACAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgJAAQgJAAgEAJg");
	this.shape_2.setTransform(140.35,58.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgEAJgBAQQAAANADAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgKAAQgIAAgEAJg");
	this.shape_3.setTransform(133.7,58.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgRIAAgNIALAAIAAANg");
	this.shape_4.setTransform(129.1,59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQAEgYANgXQAHgNAKgLIguAAIAAgKIA5AAIAAAJQgEAEgGAKQgHAJgGALQgFALgBAJIgEASg");
	this.shape_5.setTransform(123.85,58.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_6.setTransform(115.45,58.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAiQgJgIAAgWQAAgPAEgLQAHgUATAAQAOAAAFAHQAGAIAAAHIgKAAQgBgFgCgDQgEgFgIAAQgIAAgFAIQgFAJgBAOQAEgEAFgEQAFgCAGAAQAKABAIAGQAIAGAAANQAAAMgIAIQgHAJgOAAQgLAAgIgJgAgKACQgFAEAAAJQAAAIAEAGQAFAFAHAAQAIAAAFgGQAEgGAAgHQAAgHgEgFQgEgFgJAAQgGAAgFAEg");
	this.shape_7.setTransform(107.475,58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQAEgIALgHIAKgGIALgGQAEgFABgGQgBgIgEgEQgEgEgIAAQgJgBgFAJQgBAEgBAIIgKAAQAAgLADgHQAHgMAQAAQAPAAAGAIQAHAHAAAKQAAAKgHAGQgEAFgKAFIgIAEIgIAHQgHAFgBAGIAtAAIAAAKg");
	this.shape_8.setTransform(100.75,58.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAeQgHgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgHgNgAgMgYQgEAJgBAQQAAANADAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgKAAQgIAAgEAJg");
	this.shape_9.setTransform(94.1,58.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgHIAKgGIALgGQAEgFAAgGQAAgIgEgEQgEgEgIAAQgJgBgEAJQgCAEgBAIIgLAAQAAgLAFgHQAGgMAQAAQAPAAAHAIQAGAHAAAKQAAAKgHAGQgEAFgKAFIgIAEIgJAHQgFAFgCAGIAtAAIAAAKg");
	this.shape_10.setTransform(87.45,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAAAIAAgBIgFAAIAAgOIALAAIAAANQAAAFgDAGQgCAFgGACg");
	this.shape_11.setTransform(79.225,62.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAjQgGgIAAgMIALAAQAAAIADAEQAEAGAKAAQAIAAAFgEQAFgEAAgIQAAgIgFgEQgGgDgIAAIgCAAIgCAAIAAgIIACAAIADAAQAFAAADgCQAHgDAAgJQAAgGgEgDQgFgEgGAAQgJAAgEAHQgDAEAAAHIgKAAQAAgJADgHQAHgLAQAAQAMAAAHAFQAHAGAAALQAAAIgEAFQgDADgEABQAHACAEAEQADAFAAAIQAAAMgIAHQgIAIgNAAQgPAAgHgIg");
	this.shape_12.setTransform(74.175,58.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAqIAAg7IgTAAIAAgIQAMgBAEgCQAEgDACgKIAJAAIAABTg");
	this.shape_13.setTransform(67,58.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRApQgGgFgBgJIAKAAQABAEADACQADAEAHAAQAMAAADgJQACgFABgNQgEAFgEACQgEADgHAAQgKAAgIgIQgHgHAAgQQAAgPAHgJQAIgJALAAQAGAAAFAEIAHAFIAAgHIAKAAIAAA4QgBAMgDAHQgGAMgSAAQgKAAgHgEgAgOgYQgBAFAAAJQAAAKADAFQAFAGAHAAQALAAAEgKQACgFABgIQgBgMgEgFQgFgGgHAAQgKAAgFALg");
	this.shape_14.setTransform(57.45,60.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgJIAAgpIALAAIAAAoIABAIQADAGAIAAQAJAAAEgKQACgFAAgJIAAgeIALAAIAAA+IgKAAIAAgKQgCAEgDACQgGAFgHAAQgNAAgFgJg");
	this.shape_15.setTransform(50.925,59.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaArIgJgaIghAAIgKAaIgLAAIAghVIAMAAIAfBVgAANAHIgNgkIgNAkIAaAAg");
	this.shape_16.setTransform(43.725,58.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAAAIAAgBIgFAAIAAgOIALAAIAAANQAAAFgDAGQgCAFgGACg");
	this.shape_17.setTransform(35.375,62.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgJIAAgpIALAAIAAAoIABAIQADAGAIAAQAJAAAEgKQACgFAAgJIAAgeIALAAIAAA+IgKAAIAAgKQgCAEgDACQgGAFgHAAQgNAAgFgJg");
	this.shape_18.setTransform(30.325,59.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_19.setTransform(23.775,58.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgdAAIAABLg");
	this.shape_20.setTransform(16.825,58.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAYQgJgIABgPQAAgOAIgKQAIgJAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQAAAJAFAHQAEAFAHAAQAIAAAGgFQADgDAAgEIAKAAQABADgDAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgFIgDgKQgEgIgLAAQgFAAgFAGQgFAFgBAHIAiAAIAAAAg");
	this.shape_21.setTransform(178.35,38.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_22.setTransform(172.125,38.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAgIAAgmQAAgHgCgDQgDgFgHgBIgFABQgEABgEAFIgDAFIgBAKIAAAgIgLAAIAAg+IALAAIAAAJQAEgGAFgCQAFgCAFAAQANAAAFAJQADAFAAAKIAAAng");
	this.shape_23.setTransform(165.775,38.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAYQgHgIAAgPQgBgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAJAEAHQAFAFAIAAQAHAAAFgFQADgDACgEIAKAAQgBADgCAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgFIgDgKQgEgIgKAAQgGAAgGAGQgFAFAAAHIAiAAIAAAAg");
	this.shape_24.setTransform(159.05,38.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEArIAAg+IAJAAIAAA+gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_25.setTransform(154.45,37.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAALIgBAAIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_26.setTransform(151.525,38.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAYQgHgIgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAJADAHQAEAFAJAAQAIAAAFgFQACgDABgEIALAAQAAADgDAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgFIgDgKQgFgIgJAAQgGAAgGAGQgEAFgBAHIAiAAIAAAAg");
	this.shape_27.setTransform(145.8,38.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_28.setTransform(139.375,39.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAPAgIgPgYIgOAYIgOAAIAWggIgUgeIANAAIAOAWIAOgWIANAAIgVAeIAWAgg");
	this.shape_29.setTransform(132.825,38.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfArIAAhVIA+AAIAAALIgzAAIAAAaIAvAAIAAAJIgvAAIAAAdIAzAAIAAAKg");
	this.shape_30.setTransform(126.1,37.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAYQgHgIgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAJADAHQAEAFAJAAQAIAAAFgFQACgDABgEIALAAQAAADgDAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgFIgDgKQgFgIgJAAQgGAAgGAGQgEAFgBAHIAiAAIAAAAg");
	this.shape_31.setTransform(115.2,38.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_32.setTransform(108.975,38.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgIQAAgJAFgFQAFgDAJgCIAQgCQAEAAAAgDIACgEQgBgFgEgDQgDgCgGAAQgJAAgDAEQgCADgBAFIgKAAQABgMAHgEQAIgFAJAAQAKAAAHAEQAHAEAAAJIAAAjIABADIACABIACAAIABAAIAAAIIgDAAIgDABQgGAAgCgEQgCgCAAgEQgEAEgFADQgGADgHAAQgJAAgFgFgAAHABIgGACIgFAAIgJADQgEADgBAGQAAAEADADQAEACAEAAQAGAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_33.setTransform(102.75,38.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_34.setTransform(97.975,37.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAcQgGgFABgIQgBgJAGgFQAFgDAJgCIAQgCQADAAABgDIABgEQAAgFgDgDQgEgCgGAAQgJAAgDAEQgCADAAAFIgKAAQAAgMAHgEQAHgFAKAAQAKAAAHAEQAHAEgBAJIAAAjIABADIADABIACAAIABAAIAAAIIgDAAIgEABQgFAAgDgEQgBgCgBgEQgCAEgHADQgEADgIAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADABAGQAAAEACADQAEACAFAAQAFAAAEgCQAJgEAAgKIAAgIIgFABg");
	this.shape_35.setTransform(93.45,38.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAmAAQALAAAHAGQAHAHAAALQAAAKgGAIQgHAGgMAAIgaAAIAAAlgAgTgCIAWAAQAHAAAFgDQAFgEAAgJQAAgJgHgDQgEgCgGAAIgWAAg");
	this.shape_36.setTransform(86.225,37.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTAYQgJgIABgPQAAgOAIgKQAIgJAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQAAAJAFAHQAEAFAHAAQAIAAAGgFQADgDAAgEIAKAAQABADgDAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgFIgDgKQgEgIgLAAQgFAAgFAGQgFAFgBAHIAiAAIAAAAg");
	this.shape_37.setTransform(75.3,38.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFArIAAg+IALAAIAAA+gAgFgeIAAgMIALAAIAAAMg");
	this.shape_38.setTransform(70.7,37.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAgIgXg+IANAAIAPAyIASgyIALAAIgYA+g");
	this.shape_39.setTransform(66.35,38.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAZQgIgJAAgPQAAgPAIgJQAIgJAMAAQANAAAHAIQAJAIAAAQQAAAOgHAKQgIAJgOAAQgNAAgHgIgAgNgQQgEAIAAAJQAAAKAEAHQAEAGAJAAQAKAAAEgIQAEgHAAgJQAAgJgCgFQgFgJgLAAQgJAAgEAHg");
	this.shape_40.setTransform(60,38.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAeArIAAgyIAAgIIAAgOIgYBIIgLAAIgZhIIAAADIABAJIAAAKIAAAyIgLAAIAAhVIAQAAIAYBIIAZhIIAQAAIAABVg");
	this.shape_41.setTransform(51.825,37.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_42.setTransform(42.175,37.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXAcQgGgFABgIQgBgJAGgFQAFgDAJgCIAQgCQADAAABgDIABgEQAAgFgDgDQgEgCgGAAQgJAAgDAEQgCADgBAFIgJAAQAAgMAHgEQAHgFAKAAQAKAAAHAEQAHAEgBAJIAAAjIABADIADABIACAAIABAAIAAAIIgDAAIgEABQgFAAgDgEQgBgCgBgEQgCAEgHADQgEADgIAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADABAGQAAAEACADQAEACAFAAQAFAAAEgCQAJgEAAgKIAAgIIgFABg");
	this.shape_43.setTransform(37.65,38.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUAYQgHgIAAgPQgBgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAJAEAHQAFAFAIAAQAHAAAFgFQADgDACgEIAKAAQgBADgCAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgFIgDgKQgEgIgKAAQgGAAgGAGQgFAFAAAHIAiAAIAAAAg");
	this.shape_44.setTransform(30.8,38.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAVArIgBgDIgBgHIAAgOQgBgJgGgDQgDgBgHAAIgZAAIAAAlIgLAAIAAhVIAmAAQAKAAAGADQAMAGAAAOQAAAIgDAFQgEAEgFACQAFADACADQADADAAAIIAAAMIABAHQABAEADABIAAACgAgXgCIAaAAQAIgBAEgDQAFgDAAgJQAAgJgHgDQgDgCgGAAIgbAAg");
	this.shape_45.setTransform(23.475,37.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAYQgJgIABgPQAAgOAIgKQAIgJAMAAQAHAAAGADQAGADAEAFQADAFAAAGIABANIgsAAQAAAJAFAHQADAFAIAAQAIAAAGgFQADgDABgEIAJAAQABADgDAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgFIgDgKQgEgIgLAAQgFAAgFAGQgGAFAAAHIAiAAIAAAAg");
	this.shape_46.setTransform(12.2,38.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_47.setTransform(5.625,37.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgdAAIAABLg");
	this.shape_48.setTransform(-1.325,37.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AggAqQgLgLABgOIAYAAQABAGADADQAFAGAMAAQAGgBAFgCQAFgCgBgEQAAgFgDgCQgEgCgVgGQgRgDgGgGQgHgFAAgMQAAgNALgJQAKgKATAAQARAAALAHQALAHACASIgZAAQAAgFgCgDQgFgFgJAAQgIAAgDADQgEACAAAEQAAAEAEACQAEACAVAFQAPAEAHAFQAIAIgBAKQAAAPgKAJQgKAJgXAAQgVAAgLgJg");
	this.shape_49.setTransform(182.6,15.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AgLAPQAJgCACgHIABgHIgMAAIAAgXIAYAAIAAATQAAAMgHAIQgGAHgLADg");
	this.shape_50.setTransform(175.75,9.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgbAxIAAhfIAYAAIAAARQAFgJAEgEQAHgGALAAIACAAIACAAIAAAaIgEAAIgDAAQgQAAgFAJQgCAGAAAKIAAAug");
	this.shape_51.setTransform(169.625,14.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AgeAnQgPgMAAgaQAAgYAOgNQAMgOATAAQAMAAAKAFQAJAEAHAKQAFAJABALIACASIhBAAQAAAOAJAGQAFAEAHAAQAHAAAFgFIAFgGIAZAAQgBAIgIAJQgMAOgWAAQgRAAgOgMgAAUgJQgBgKgFgFQgGgFgIAAQgIAAgEAGQgFAFgCAJIAnAAIAAAAg");
	this.shape_52.setTransform(160.65,15.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgeA9QgMgGgBgPIAbAAQABAFADABQAEAEAIAAQAOgBAEgIQADgGAAgOIAAgGQgDAGgFADQgHAGgLAAQgSAAgLgNQgLgNAAgVQAAgWAKgOQALgOATAAQAHAAAFACQAJAEAGAJIAAgNIAYAAIAABaQAAASgGAJQgLAQgdABQgTAAgLgIgAgRgiQgDAIAAAJQAAAIADAHQAFALANAAQAIAAAGgGQAGgHAAgOQAAgOgFgGQgGgIgKAAQgMABgFALg");
	this.shape_53.setTransform(149.975,16.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AASAxIAAg5QAAgIgCgEQgEgHgKAAQgMAAgFALQgCAFAAAJIAAAzIgZAAIAAhfIAYAAIAAAOQAFgHAEgDQAIgGALAAQAOAAAKAIQAJAIAAASIAAA/g");
	this.shape_54.setTransform(139.325,14.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_55.setTransform(131.275,13.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AggAqQgKgLAAgOIAYAAQACAGACADQAFAGAMAAQAGgBAFgCQAFgCAAgEQAAgFgEgCQgEgCgVgGQgQgDgHgGQgHgFAAgMQAAgNAKgJQALgKATAAQARAAALAHQALAHACASIgZAAQAAgFgCgDQgFgFgJAAQgIAAgEADQgDACAAAEQAAAEAEACQADACAWAFQAPAEAIAFQAGAIAAAKQAAAPgKAJQgLAJgVAAQgWAAgLgJg");
	this.shape_56.setTransform(123.75,15.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AggAqQgLgLABgOIAYAAQABAGADADQAFAGAMAAQAGgBAFgCQAFgCgBgEQAAgFgDgCQgEgCgVgGQgRgDgGgGQgHgFAAgMQAAgNALgJQAKgKATAAQARAAALAHQALAHACASIgZAAQAAgFgCgDQgFgFgJAAQgIAAgEADQgDACAAAEQAAAEAEACQAEACAVAFQAPAEAHAFQAIAIgBAKQAAAPgKAJQgKAJgXAAQgVAAgLgJg");
	this.shape_57.setTransform(113.75,15.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgkAkQgMgPAAgVQAAgUAMgPQAMgPAYAAQAZAAAMAPQAMAPAAAUQAAAVgMAPQgMAPgZAAQgYAAgMgPgAgQgVQgGAIAAANQAAAOAGAIQAGAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgGAIg");
	this.shape_58.setTransform(103.325,15.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgbAxIAAhfIAYAAIAAARQAFgJAEgEQAHgGALAAIACAAIACAAIAAAaIgEAAIgDAAQgQAAgFAJQgCAGAAAKIAAAug");
	this.shape_59.setTransform(94.775,14.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgqAyQgRgSAAgfQAAgeARgTQARgTAcAAQAZAAAPAMQAOANADATIgbAAQgDgOgMgFQgHgDgIAAQgOAAgKAMQgLAMAAAXQAAAXALAKQALAKANAAQAOAAAIgHQAJgIACgNIgeAAIAAgVIA2AAIAABFIgSAAIgDgQQgHAJgHAEQgKAGgPAAQgaAAgQgSg");
	this.shape_60.setTransform(83.625,13.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgIA3QgFgEAAgJIAAg6IgNAAIAAgSIANAAIAAgbIAYAAIAAAbIAQAAIAAASIgQAAIAAAxQAAAGACACQABABAIAAIACAAIADAAIAAATIgMAAIgDABQgOAAgGgHg");
	this.shape_61.setTransform(68.775,13.8517);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgkArQgIgIAAgNQAAgSAOgGQAIgFAOgCIAIgBQAGgBADgBQAFgCABgFQAAgGgFgCQgDgDgIABQgJAAgDAEQgDADgBAFIgXAAQAAgMAGgIQAKgMAYAAQAPAAAMAFQANAHAAARIAAArIAAALIABAHIAEADIAAAEIgcAAIgBgGIAAgGQgGAGgGAEQgHAEgLABQgNgBgJgHgAAKAEIgHABIgEABQgJACgDABQgFAEAAAHQAAAGADAEQADADAFAAQAHAAAIgGQAGgEABgNIAAgJg");
	this.shape_62.setTransform(60.9,15.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgIA3QgFgEAAgJIAAg6IgNAAIAAgSIANAAIAAgbIAYAAIAAAbIAQAAIAAASIgQAAIAAAxQAAAGACACQABABAIAAIACAAIADAAIAAATIgMAAIgDABQgOAAgGgHg");
	this.shape_63.setTransform(47.825,13.8517);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgfAnQgOgMABgaQgBgYANgNQANgOATAAQAMAAAJAFQAKAEAHAKQAFAJACALIABASIhBAAQAAAOAJAGQAFAEAGAAQAIAAAFgFIAFgGIAZAAQgBAIgHAJQgNAOgWAAQgSAAgOgMgAAUgJQgBgKgGgFQgFgFgIAAQgHAAgGAGQgEAFgBAJIAmAAIAAAAg");
	this.shape_64.setTransform(39.9,15.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AAlBBIAAhXIAAgKIAAgLIgYBsIgZAAIgYhsIAAALIAAAKIAABXIgaAAIAAiBIAoAAIAWBlIAYhlIAmAAIAACBg");
	this.shape_65.setTransform(27.6,13.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgeAnQgOgMAAgaQgBgYANgNQANgOATAAQAMAAAJAFQAKAEAGAKQAGAJACALIAAASIhAAAQABAOAIAGQAFAEAGAAQAIAAAFgFIAEgGIAaAAQgBAIgHAJQgNAOgWAAQgSAAgNgMgAATgJQAAgKgFgFQgGgFgIAAQgIAAgEAGQgGAFAAAJIAlAAIAAAAg");
	this.shape_66.setTransform(9.95,15.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAUBBIgPhLIgFgZIgEAZIgPBLIgZAAIgliBIAdAAIARBJIADAVIAEgUIAPhKIAbAAIAQBJIAEAVIAEgUIARhKIAbAAIgkCBg");
	this.shape_67.setTransform(-3.175,13.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR11, new cjs.Rectangle(-25.8,4.1,227.70000000000002,63.4), null);


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
	this.shape.setTransform(167.675,86.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA5IAAgQIAOAAIAAAQgAgDAeIgEgwIAAgmIAPAAIAAAmIgEAwg");
	this.shape_1.setTransform(163.225,90.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAgQgLgLAAgUQAAgTALgMQALgNARAAQAIAAAJAEQAHAEAFAHQAEAGACAJIABARIg7AAQAAAMAGAIQAFAIALAAQAKAAAGgHQAEgFACgFIAOAAQgBAEgDAGIgHAJQgHAGgIACQgGACgFAAQgPAAgLgMgAAXgGQAAgJgDgGQgHgKgMAAQgJAAgGAHQgHAHAAALIAsAAIAAAAg");
	this.shape_2.setTransform(156.15,92.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAkQgIgJgBgMIAOAAQABAHADADQAFAIAMAAQAIgBAGgDQAGgDAAgIQAAgEgFgDIgMgFIgKgCQgLgDgFgCQgJgGAAgKQAAgLAIgIQAJgHAOAAQATAAAIALQAFAHAAAIIgNAAQgBgEgCgFQgGgFgKAAQgJAAgEADQgEADAAAFQAAAGAFADQAEACAGABIAIADQAPADAGACQAHAGABALQAAALgJAIQgIAIgRAAQgTAAgHgIg");
	this.shape_3.setTransform(147.9,92.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAlQgHgHAAgLQAAgLAHgHQAHgFAMgCIAVgCQAFgBABgDIACgGQgBgHgEgDQgGgDgIAAQgLAAgEAGQgDADgBAGIgNAAQABgPAJgGQAKgGAMAAQAOAAAJAGQAJAFAAAMIAAAvIABADQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIACAAIACAAIAAAKIgFABIgEABQgHAAgEgGIgCgHQgFAFgIAEQgHAFgJAAQgMAAgHgHgAAKABIgIACIgIABQgIABgDACQgGAEAAAIQAAAGADADQAFAEAGAAQAIAAAFgEQAMgFAAgNIAAgKIgGABg");
	this.shape_4.setTransform(139.7,92.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA5IAAg0QAAgIgDgEQgEgIgKABQgIgBgHAHQgHAFAAAQIAAAsIgOAAIAAhxIAOAAIAAAqQAFgGAEgCQAHgEAJAAQASAAAGAMQAEAHAAALIAAA1g");
	this.shape_5.setTransform(130.775,90.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAgQgJgMAAgSQAAgVAKgMQALgMAPAAQAOAAAJAHQAIAHADAQIgOAAQgCgHgEgFQgEgFgKAAQgMAAgGANQgEAIAAALQABANAFAIQAFAJAKAAQAJAAAFgGQAFgFACgJIAOAAQgDAQgJAIQgKAIgOAAQgPAAgKgMg");
	this.shape_6.setTransform(122.5,92.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAqIAAhRIANAAIAAAOQACgEAFgGQAGgGAJAAIABAAIADAAIAAAPIgCgBIgCAAQgLAAgFAHQgFAHAAAJIAAAug");
	this.shape_7.setTransform(116.375,92.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAfQgEgHAAgKIAAg3IAOAAIAAA1QAAAHACAEQAEAHAKAAQANAAAFgNQADgHAAgLIAAgoIAOAAIAABRIgNAAIAAgMQgDAFgEADQgIAGgKAAQgRAAgGgLg");
	this.shape_8.setTransform(108.775,92.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA7IAAhzIANAAIAAALQAFgFAEgDQAHgFAJAAQAOAAAKALQAKALAAAUQgBAagOALQgIAIgNAAQgIAAgHgFQgDgCgFgGIAAArgAgTgfQgDAHAAAMQAAAKADAGQAFAMAOAAQAKAAAGgIQAHgIgBgPQAAgKgDgHQgFgOgOAAQgOAAgFAPg");
	this.shape_9.setTransform(100.3,93.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAgQgLgLAAgUQAAgTALgMQALgNARAAQAIAAAJAEQAHAEAFAHQAEAGACAJIABARIg8AAQABAMAGAIQAFAIALAAQAKAAAHgHQADgFABgFIAPAAQgBAEgDAGIgHAJQgHAGgIACQgGACgFAAQgPAAgLgMgAAXgGQgBgJgCgGQgHgKgMAAQgJAAgGAHQgHAHgBALIAtAAIAAAAg");
	this.shape_10.setTransform(86.95,92.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_11.setTransform(80.9,90.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA7IAAhzIAOAAIAAALQAFgFAEgDQAHgFAJAAQAOAAAKALQAJALAAAUQAAAagNALQgKAIgMAAQgIAAgGgFQgEgCgEgGIAAArgAgTgfQgDAHAAAMQAAAKADAGQAFAMAOAAQAJAAAHgIQAGgIABgPQAAgKgEgHQgFgOgOAAQgOAAgFAPg");
	this.shape_12.setTransform(74.95,93.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AApAqIAAg4QAAgIgEgEQgEgDgGAAQgIAAgGAGQgGAFAAANIAAAvIgNAAIAAg1QAAgIgCgEQgDgGgJAAQgIAAgGAGQgHAGAAAQIAAArIgOAAIAAhRIAOAAIAAALIAJgJQAHgEAJAAQAKAAAGAFQACACADAGQAEgHAHgDQAGgDAIAAQAQAAAGAMQAEAGAAALIAAA2g");
	this.shape_13.setTransform(63.875,92.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_14.setTransform(55.525,90.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQABAHACADQAGAIAMAAQAIgBAGgDQAGgDAAgIQAAgEgFgDIgMgFIgKgCQgLgDgFgCQgJgGAAgKQAAgLAJgIQAIgHAOAAQATAAAIALQAFAHAAAIIgNAAQgBgEgDgFQgEgFgMAAQgHAAgFADQgEADAAAFQAAAGAGADQACACAHABIAIADQAQADAEACQAJAGgBALQAAALgIAIQgIAIgSAAQgRAAgIgIg");
	this.shape_15.setTransform(49.85,92.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAgQgKgLgBgUQABgTAKgMQALgNAQAAQAJAAAIAEQAJAEAEAHQAEAGABAJIABARIg6AAQAAAMAFAIQAGAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgJACQgFACgFAAQgPAAgLgMgAAYgGQgBgJgEgGQgFgKgOAAQgIAAgHAHQgGAHAAALIAtAAIAAAAg");
	this.shape_16.setTransform(37.05,92.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUAqIAAgzQAAgHgDgFQgDgIgKAAIgHABQgGACgEAFQgEAEgBAEIgBANIAAAqIgOAAIAAhRIAOAAIAAALQAGgHAGgDQAHgDAHAAQARAAAGAMQAEAHAAAMIAAA0g");
	this.shape_17.setTransform(28.375,92.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgTQAAgUAKgMQALgNAQAAQAQAAALALQALAKAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAJAAANQAAAOAGAIQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgLgEgIQgGgLgOAAQgLAAgGAKg");
	this.shape_18.setTransform(19.525,92.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZA6IgFgBIAAgNIAGACIADAAIAGgBIACgEIAEgGIADgIIgfhUIAQAAIAVBCIAWhCIAQAAIgOAkIgMAiQgMAfgEAHQgFAHgMAAg");
	this.shape_19.setTransform(6.95,93.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgTQAAgUAKgMQALgNAQAAQAQAAALALQALAKAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAJAAANQAAAOAGAIQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgLgEgIQgGgLgOAAQgLAAgGAKg");
	this.shape_20.setTransform(-1.525,92.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBKIgDgBIAAgMIALgCQABgBAAgHIAAhcIAOAAIAABdQAAAKgDAEQgFAIgNAAgAAAg5IAAgQIAOAAIAAAQg");
	this.shape_21.setTransform(-8.2,92.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUAqIAAgzQAAgHgDgFQgDgIgKAAIgHABQgGACgEAFQgEAEgBAEIgBANIAAAqIgOAAIAAhRIAOAAIAAALQAGgHAGgDQAHgDAHAAQARAAAGAMQAEAHAAAMIAAA0g");
	this.shape_22.setTransform(-13.675,92.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpA5IAAhxIBSAAIAAAOIhDAAIAAAjIA9AAIAAAMIg9AAIAAAmIBEAAIAAAOg");
	this.shape_23.setTransform(-23.075,90.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAJIAAgQIAPAAIAAAQg");
	this.shape_24.setTransform(124.2,74.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQABAHADADQAFAIAMgBQAIAAAGgDQAGgEAAgGQAAgGgFgCIgMgFIgKgCQgLgDgFgCQgJgGAAgJQAAgMAIgIQAJgHAOAAQATAAAIALQAFAHAAAIIgNAAQAAgEgEgEQgFgGgKAAQgJAAgEADQgEADAAAFQAAAFAFADQAEACAGACIAIADQAPADAGADQAHAEABAMQAAALgJAIQgJAIgQAAQgTAAgHgIg");
	this.shape_25.setTransform(118.1,71.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAxQgDgFAAgIIAAg2IgLAAIAAgLIALAAIAAgYIANAAIAAAYIANAAIAAALIgNAAIAAA1QAAAEADACIAFABIADgBIACAAIAAALIgFABIgFABQgJAAgEgFg");
	this.shape_26.setTransform(111.9,69.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfAlQgHgHAAgLQAAgLAHgHQAHgFAMgCIAVgCQAFgBACgDIABgGQgBgHgFgDQgFgDgIAAQgLAAgEAGQgDADgBAGIgNAAQAAgPAKgGQAJgGANAAQANAAAKAGQAJAFAAAMIAAAvIABADQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIACAAIACAAIAAAKIgFABIgFABQgGAAgEgGIgCgHQgFAFgIAEQgGAFgKAAQgMAAgHgHgAAKABIgIACIgIABQgHABgEACQgGAEgBAIQAAAGAFADQAEAEAGAAQAIAAAFgEQAMgFAAgNIAAgKIgGABg");
	this.shape_27.setTransform(105.6,71.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAgQgLgLAAgUQAAgTALgMQALgNAQAAQAJAAAIAEQAJAEAEAHQAEAGABAJIABARIg6AAQAAAMAFAIQAGAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgJACQgFACgFAAQgPAAgLgMgAAYgGQgBgJgEgGQgGgKgNAAQgIAAgGAHQgHAHAAALIAtAAIAAAAg");
	this.shape_28.setTransform(96.55,71.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQAAAHAEADQAFAIAMgBQAIAAAGgDQAGgEAAgGQAAgGgFgCIgMgFIgKgCQgLgDgFgCQgJgGAAgJQAAgMAJgIQAIgHAOAAQASAAAJALQAFAHAAAIIgNAAQAAgEgEgEQgFgGgLAAQgHAAgFADQgEADAAAFQAAAFAFADQADACAHACIAIADQAPADAGADQAHAEAAAMQABALgJAIQgJAIgQAAQgTAAgHgIg");
	this.shape_29.setTransform(88.3,71.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAqIAAhRIANAAIAAAOQACgEAFgGQAGgGAJAAIABAAIADAAIAAAPIgCgBIgCAAQgLAAgFAHQgFAHAAAJIAAAug");
	this.shape_30.setTransform(77.875,70.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcAfQgEgHAAgKIAAg3IAOAAIAAA1QAAAHACAEQAEAHAKAAQANAAAFgNQADgHAAgLIAAgoIAOAAIAABRIgNAAIAAgMQgDAFgEADQgIAGgKAAQgRAAgGgLg");
	this.shape_31.setTransform(70.325,71.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbAgQgKgLAAgTQAAgVAKgLQALgNAQAAQAQAAALALQALAKAAAVQAAATgJANQgKANgTAAQgRAAgKgMgAgRgVQgGAJAAANQAAANAGAJQAGAJALAAQAOAAAFgKQAFgLAAgMQAAgLgEgIQgGgLgOAAQgLAAgGAKg");
	this.shape_32.setTransform(61.575,71.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZA6IgFgBIAAgNIAGACIADAAIAGgBIACgEIAEgGIADgIIgfhUIAQAAIAVBCIAWhCIAQAAIgOAkIgMAiQgMAfgEAHQgFAHgMAAg");
	this.shape_33.setTransform(53.3,72.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQA5IgZgqIgLALIAAAfIgNAAIAAhxIANAAIAABBIAjgiIARAAIgfAeIAhA0g");
	this.shape_34.setTransform(41.525,69.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAgQgKgMAAgSQAAgVALgMQALgMAPAAQAOAAAJAHQAIAHACAQIgNAAQgCgHgEgFQgEgFgKAAQgMAAgGANQgDAIgBALQAAANAGAIQAFAJAKAAQAJAAAFgGQAFgFACgJIANAAQgCAQgJAIQgJAIgPAAQgPAAgKgMg");
	this.shape_35.setTransform(33.2,71.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_36.setTransform(27.425,69.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgpA5IAAhxIAxAAQAQAAAJAJQAJAIAAAQQAAANgIAKQgIAJgRAAIgjAAIAAAwgAgagDIAdAAQALAAAGgFQAHgEAAgLQAAgNgKgEQgFgCgJAAIgdAAg");
	this.shape_37.setTransform(20.725,69.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAIIAAgQIAPAAIAAAQg");
	this.shape_38.setTransform(147.4,53.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQAAAHAEAEQAFAGAMABQAIAAAGgEQAGgDAAgIQAAgFgFgDIgMgDIgKgDQgLgDgFgCQgJgFAAgLQAAgLAJgHQAIgIAOAAQASAAAJALQAFAHAAAIIgNAAQgBgFgDgEQgEgFgMAAQgHAAgFADQgEADAAAFQAAAFAFAEQADABAHACIAIACQAQAEAEACQAIAGAAALQABALgJAIQgJAIgQAAQgSAAgIgIg");
	this.shape_39.setTransform(141.3,50);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AARApIgRg/IgPA/IgPAAIgYhRIAPAAIAQBAIAQhAIAPAAIAQA/IARg/IAOAAIgYBRg");
	this.shape_40.setTransform(131.6,49.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgUAKgLQALgNAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAANAGAJQAGAJALAAQAOAAAFgLQAFgKAAgLQAAgNgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_41.setTransform(121.425,50);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAUA5IAAg0QAAgIgDgFQgEgGgKAAQgIAAgHAFQgHAHAAAPIAAAsIgOAAIAAhxIAOAAIAAArQAFgHAEgCQAHgFAJAAQASAAAGANQAEAHAAALIAAA1g");
	this.shape_42.setTransform(112.775,48.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAkQgIgJgBgMIAOAAQAAAHADAEQAGAGAMABQAIAAAGgEQAGgDAAgIQAAgFgFgDIgMgDIgKgDQgLgDgFgCQgJgFAAgLQAAgLAIgHQAJgIAOAAQASAAAJALQAFAHAAAIIgNAAQAAgFgDgEQgGgFgKAAQgJAAgEADQgEADAAAFQAAAFAGAEQADABAGACIAIACQAQAEAFACQAIAGAAALQAAALgJAIQgIAIgSAAQgRAAgIgIg");
	this.shape_43.setTransform(104.45,50);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgZAwQgLgIgBgPIAPAAQABALAKAFQAEACAHAAQAMAAAFgIQAHgHAAgKQgBgMgHgGQgHgFgJAAQgHAAgFADQgFACgEAEIgMAAIAJg7IA4AAIAAANIguAAIgFAfIAIgEQAGgDAHAAQAPAAAKAKQALAJAAAPQAAAQgJAMQgKAMgVAAQgNAAgKgIg");
	this.shape_44.setTransform(91.7,48.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAqIAAhRIANAAIAAAOQACgEAFgGQAGgGAJAAIABAAIADAAIAAAPIgCgBIgCAAQgLAAgFAHQgFAHAAAJIAAAug");
	this.shape_45.setTransform(80.925,49.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgUAKgLQALgNAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAANAGAJQAGAJALAAQAOAAAFgLQAFgKAAgLQAAgNgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_46.setTransform(73.325,50);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAuQgJgLAAgPIAPAAQAAALAEAEQAFAJAOAAQAKAAAHgGQAGgGABgJQAAgLgIgFQgHgEgLAAIgCAAIgEAAIAAgMIAEABIADAAQAHAAAFgDQAJgEAAgLQAAgIgGgFQgGgEgIAAQgNAAgFAJQgDAFAAAJIgOAAQAAgMAFgJQAIgPAWAAQAQAAAJAIQAJAHAAAOQABALgGAGQgDAEgGACQAJACAEAGQAFAHABAKQAAAQgLAKQgKAKgTAAQgTAAgJgLg");
	this.shape_47.setTransform(60.2,48.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaAgQgLgLAAgUQAAgTALgMQALgNARAAQAIAAAIAEQAJAEAEAHQAEAGABAJIACARIg7AAQAAAMAGAIQAFAIAKAAQALAAAGgHQAEgFACgFIANAAQAAAEgDAGIgHAJQgHAGgIACQgGACgFAAQgPAAgLgMgAAYgGQgBgJgDgGQgHgKgNAAQgIAAgGAHQgHAHAAALIAtAAIAAAAg");
	this.shape_48.setTransform(47.15,50.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgZAkQgIgJAAgMIANAAQABAHADAEQAFAGAMABQAIAAAGgEQAGgDAAgIQAAgFgFgDIgMgDIgKgDQgLgDgFgCQgJgFAAgLQAAgLAIgHQAJgIAOAAQATAAAIALQAFAHAAAIIgNAAQAAgFgEgEQgFgFgKAAQgJAAgEADQgEADAAAFQAAAFAFAEQAEABAGACIAIACQAPAEAGACQAHAGABALQAAALgJAIQgJAIgQAAQgTAAgHgIg");
	this.shape_49.setTransform(38.9,50);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgUAKgLQALgNAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAANAGAJQAGAJALAAQAOAAAFgLQAFgKAAgLQAAgNgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_50.setTransform(30.475,50);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgUQAAgUAKgLQALgNAQAAQAQAAALAKQALALAAAVQAAATgJANQgKANgTAAQgRAAgKgLgAgRgVQgGAKAAAMQAAANAGAJQAGAJALAAQAOAAAFgLQAFgKAAgLQAAgNgEgGQgGgMgOAAQgLAAgGAKg");
	this.shape_51.setTransform(21.675,50);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAUA5IAAg0QAAgIgDgFQgEgGgKAAQgIAAgHAFQgHAHAAAPIAAAsIgOAAIAAhxIAOAAIAAArQAFgHAEgCQAHgFAJAAQASAAAGANQAEAHAAALIAAA1g");
	this.shape_52.setTransform(13.025,48.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgfAwQgSgQAAggQAAgZANgQQAPgSAXAAQAWAAAMAMQALALACAOIgPAAQgDgLgHgGQgIgGgNAAQgQAAgKALQgKAMAAAYQAAATAJANQAJAMARAAQARAAAJgNQAEgHADgLIAPAAQgCASgLAMQgOAPgXAAQgSAAgNgMg");
	this.shape_53.setTransform(2.925,48.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAFAUIAAgQQAAgIAEgHQADgHAJgBIAAAHQgEABgCAEQgCAEAAAFIAAABIAAABIAIAAIAAAQgAgUAUIAAgQQAAgKAEgGQAFgGAHgBIAAAHQgFABgCAHIgBAGIAAAAIAAACIAIAAIAAAQg");
	this.shape_54.setTransform(-5.225,44.65);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAKASQALgDADgJIABgHIgPAAIAAgbIAdAAIAAAWQAAANgHAKQgIAJgOADgAgmASQALgDAEgIQABgEAAgEIgQAAIAAgbIAdAAIAAAWQABAOgIAJQgHAJgPADg");
	this.shape_55.setTransform(162,9.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgOBMIAAgfIAdAAIAAAfgAgHAiIgIhGIAAgmIAfAAIAAAmIgIBGg");
	this.shape_56.setTransform(153.525,14.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AglAwQgNgLAAgRIAeAAQABAIACADQAGAGANAAQAKAAAFgDQAEgCABgFQgBgFgEgDQgDgCgagHQgTgEgIgHQgIgHAAgNQAAgPAMgLQAMgMAXAAQAUAAANAJQANAIACAVIgdAAQgBgGgCgDQgFgGgLAAQgKAAgDADQgFADAAAEQABAFAEACQAEACAaAGQARAEAJAIQAIAIAAANQAAAQgMALQgNALgaAAQgZAAgMgMg");
	this.shape_57.setTransform(143.7,16.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgmAwQgMgLAAgRIAdAAQACAIADADQAFAGAOAAQAIAAAGgDQAEgCAAgFQAAgFgDgDQgFgCgZgHQgTgEgIgHQgIgHAAgNQAAgPANgLQAMgMAWAAQATAAAOAJQANAIACAVIgdAAQgBgGgDgDQgEgGgLAAQgKAAgEADQgDADAAAEQgBAFAFACQAEACAaAGQARAEAIAIQAJAIAAANQAAAQgMALQgMALgaAAQgaAAgNgMg");
	this.shape_58.setTransform(132.05,16.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgqAzQgKgJABgQQAAgVAQgIQAIgFASgCIAJgCIALgCQAGgDAAgFQAAgHgFgDQgFgDgHAAQgLAAgEAGQgDADgBAHIgdAAQABgPAHgJQAMgPAcAAQASAAAOAHQAPAHAAAVIAAAyIAAANQAAAGABACIAFADIAAAFIggAAIgCgHIgBgGQgGAGgIAFQgIAFgMAAQgPAAgLgIgAALAEIgIACIgFABQgJACgEACQgHAEAAAJQAAAHAEAEQAFADAGAAQAIAAAIgGQAIgFAAgPIAAgLg");
	this.shape_59.setTransform(120.45,16.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("Ag1BPIAAibIAcAAIAAARQAEgIAGgEQAKgHAMAAQAUAAANAOQAOAPAAAcQAAAcgNAQQgOAPgVAAQgMAAgJgGQgFgEgEgHIAAA6gAgWgmQgDAIAAANQAAASAKAIQAGAFAJAAQALAAAGgKQAHgIAAgQQAAgNgGgKQgGgKgMAAQgQAAgGAPg");
	this.shape_60.setTransform(108.475,18.675);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AATA4IgTgiIgSAiIgkAAIAmg4Iglg3IAkAAIASAgIASggIAjAAIgkA3IAlA4g");
	this.shape_61.setTransform(95.9,16.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgkAuQgQgOAAgfQAAgcAOgQQAPgPAXAAQAOAAALAFQALAFAHALQAHAKACAOQABAHAAAOIhMAAQABARAKAGQAGAFAHAAQAJAAAGgFQADgDADgFIAdAAQgBAKgJAKQgOAQgaAAQgVAAgQgNgAAWgLQAAgLgHgGQgGgGgJAAQgJAAgGAGQgGAHgBAKIAsAAIAAAAg");
	this.shape_62.setTransform(84.2083,16.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgNBMIAAiXIAcAAIAACXg");
	this.shape_63.setTransform(75.5,14.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("Ag1BMIAAiXIBrAAIAAAbIhLAAIAAAjIBBAAIAAAZIhBAAIAABAg");
	this.shape_64.setTransform(66.725,14.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AARA4IgRhRIgRBRIgeAAIgghvIAgAAIARBQIAQhQIAdAAIARBQIAShQIAeAAIggBvg");
	this.shape_65.setTransform(45.8,16.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgkAuQgQgOAAgfQAAgcAOgQQAPgPAXAAQAOAAALAFQALAFAHALQAHAKACAOQABAHAAAOIhMAAQABARAKAGQAGAFAHAAQAJAAAGgFQADgDADgFIAdAAQgBAKgJAKQgOAQgaAAQgVAAgQgNgAAWgLQAAgLgHgGQgGgGgJAAQgJAAgGAGQgGAHgBAKIAsAAIAAAAg");
	this.shape_66.setTransform(31.7583,16.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAVA6IAAhEQAAgJgDgEQgEgJgMAAQgOAAgGANQgDAHAAAKIAAA8IgdAAIAAhwIAcAAIAAARQAGgJAFgDQAJgIANABQASAAALAJQALAJAAAVIAABLg");
	this.shape_67.setTransform(19.575,16.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgfA6IAAhwIAcAAIAAAUQAFgMAFgDQAIgIANABIACAAIADAAIAAAeIgGgBIgDAAQgRAAgHAMQgCAGAAANIAAA2g");
	this.shape_68.setTransform(3.75,16.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgtAnQgEgKgBgTIAAhCIAfAAIAABCQAAAKACAFQAEAIAMAAQAOAAAFgMQADgHAAgKIAAg8IAdAAIAABvIgcAAIAAgQIgCADIgEAFQgGAGgHACQgFACgJAAQgZAAgJgSg");
	this.shape_69.setTransform(-7.35,16.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgqArQgOgSAAgZQAAgXAOgSQAOgSAcAAQAdAAAOASQAOASAAAXQAAAZgOASQgOARgdAAQgcAAgOgRgAgTgZQgHAJAAAQQAAARAHAJQAHAKAMAAQANAAAHgKQAGgJAAgRQAAgQgGgJQgHgJgNAAQgMAAgHAJg");
	this.shape_70.setTransform(-20.125,16.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgJBBQgGgFAAgLIAAhEIgQAAIAAgVIAQAAIAAgfIAcAAIAAAfIASAAIAAAVIgSAAIAAA6QAAAHACACQACACAJAAIADAAIACgBIAAAWIgNABIgFAAQgQAAgGgHg");
	this.shape_71.setTransform(122.7,-8.5444);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgtAnQgFgKABgTIAAhCIAdAAIAABCQAAAKACAFQAFAIALAAQAOAAAGgMQADgHAAgKIAAg8IAeAAIAABvIgdAAIAAgQIgCADIgEAFQgGAGgHACQgFACgJAAQgZAAgJgSg");
	this.shape_72.setTransform(112.85,-6.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgqAqQgOgRAAgZQAAgXAOgSQAOgSAcAAQAdAAAOASQAOASAAAXQAAAZgOARQgOASgdAAQgcAAgOgSgAgTgZQgHAJAAAQQAAARAHAJQAHAKAMAAQANAAAHgKQAGgJAAgRQAAgQgGgJQgHgJgNAAQgMAAgHAJg");
	this.shape_73.setTransform(100.075,-7.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgOBIQgFgEgFgIIAAAOIgdAAIAAiWIAdAAIAAA2QAFgIAHgEQAIgFAMAAQAVAAANAQQANAPAAAZQAAAagNARQgMARgWAAQgNAAgJgFgAgWAAQgDAHAAANQAAAOAHAKQAFAJANAAQALAAAHgJQAFgJAAgPQAAgMgCgIQgGgOgPAAQgQAAgGAOg");
	this.shape_74.setTransform(87.5,-8.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgqAzQgKgJAAgQQABgVAQgIQAIgFASgCIAJgCIALgCQAGgDAAgFQAAgHgFgDQgFgDgHAAQgLAAgFAGQgCADgBAHIgdAAQABgPAHgJQAMgPAcAAQASAAAOAHQAPAHAAAVIAAAyIAAANQAAAGABACIAFADIAAAFIggAAIgCgHIgBgGQgGAGgIAFQgIAFgMAAQgPAAgLgIgAALAEIgIACIgFABQgJACgEACQgHAEAAAJQAAAHAEAEQAFADAGAAQAIAAAIgGQAIgFAAgPIAAgLg");
	this.shape_75.setTransform(75,-7.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAQBLIgagwIgMANIAAAjIgcAAIAAiVIAcAAIAABQIAkgpIAkAAIgnAqIAoBEg");
	this.shape_76.setTransform(58.15,-9.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgmAwQgMgLAAgRIAeAAQAAAIADADQAGAGAOAAQAIAAAFgDQAGgCAAgFQAAgFgFgDQgEgCgZgHQgTgEgIgHQgIgHAAgNQAAgPAMgLQANgMAVAAQAVAAANAJQANAIACAVIgdAAQgBgGgDgDQgEgGgLAAQgKAAgDADQgFADAAAEQAAAFAFACQAEACAZAGQASAEAIAIQAJAIAAANQAAAQgMALQgNALgaAAQgZAAgNgMg");
	this.shape_77.setTransform(45.8,-7.075);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AAlBMIgJgfIg3AAIgLAfIghAAIA2iXIAjAAIA2CXgAATASIgTg6IgTA6IAmAAg");
	this.shape_78.setTransform(32.525,-9.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAJAdIAAgWQAAgOAIgJQAIgJAOgDIAAALQgLADgDAIQgDAFABADIAQAAIAAAbgAgmAdIAAgWQAAgOAHgJQAIgJANgDIAAALQgKADgDAIQgDAEABAEIAQAAIAAAbg");
	this.shape_79.setTransform(19.6,-13.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-20.4,300.7,123);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgqQAAgHgDgCQgDgDgEABQgHAAgEADQgFAFAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgCgDgHAAQgGgBgFAFQgEAEAAAMIAAAhIgLAAIAAg9IAKAAIAAAIIAHgHQAFgDAHAAQAIAAAEADQACACACAFQADgGAFgCQAFgCAGAAQAMAAAFAJQACAFAAAIIAAApg");
	this.shape.setTransform(166.675,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_1.setTransform(158.525,60.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAHANQAGALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJAAAQQAAANACAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgEgJQgDgKgKAAQgJAAgEAJg");
	this.shape_2.setTransform(148.35,58.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJgBAQQAAANADAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgJAAQgJAAgEAJg");
	this.shape_3.setTransform(141.7,58.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgRIAAgNIALAAIAAANg");
	this.shape_4.setTransform(137.1,59.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQAEgYANgXQAIgNAIgLIgtAAIAAgKIA5AAIAAAJQgEAEgGAKQgHAJgGALQgEALgCAJIgEASg");
	this.shape_5.setTransform(131.85,58.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_6.setTransform(123.45,58.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAiQgJgJAAgVQAAgOAEgLQAHgVATAAQAOAAAFAHQAGAHAAAIIgKAAQgBgFgCgDQgEgFgIAAQgIAAgFAIQgFAJgBAPQAEgFAFgEQAFgBAGAAQAKAAAIAGQAIAGAAANQAAALgIAJQgHAJgOAAQgLAAgIgJgAgKABQgFAFAAAJQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgGAAgHQAAgGgEgGQgEgFgJAAQgGAAgFADg");
	this.shape_7.setTransform(115.475,58.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgHIAKgGIALgGQAEgFABgHQgBgHgEgEQgEgFgHABQgKAAgFAHQgBAFgBAIIgKAAQAAgLADgHQAHgMARAAQAOAAAGAHQAHAJAAAJQAAAKgHAGQgEAEgKAGIgIAFIgIAFQgGAGgCAGIAtAAIAAAKg");
	this.shape_8.setTransform(108.75,58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJAAAQQAAANACAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgJAAQgJAAgEAJg");
	this.shape_9.setTransform(102.1,58.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgHIAKgGIALgGQAEgFABgHQgBgHgEgEQgEgFgIABQgKAAgDAHQgDAFAAAIIgLAAQAAgLAFgHQAGgMAQAAQAPAAAHAHQAGAJAAAJQAAAKgHAGQgEAEgKAGIgIAFIgIAFQgGAGgCAGIAtAAIAAAKg");
	this.shape_10.setTransform(95.45,58.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAALQAAAHgDAFQgCAFgGABg");
	this.shape_11.setTransform(87.225,62.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAjQgGgIAAgMIALAAQAAAIADAEQAEAGAKAAQAIAAAFgEQAFgEAAgIQAAgIgFgEQgGgDgIAAIgCAAIgCAAIAAgIIACAAIADAAQAFAAADgCQAHgDAAgJQAAgGgEgDQgFgEgGAAQgJAAgEAHQgDAEAAAHIgKAAQAAgJADgHQAHgLAQAAQAMAAAHAFQAHAGAAALQAAAIgEAFQgDADgEABQAHACAEAEQADAFAAAIQAAAMgIAHQgIAIgNAAQgPAAgHgIg");
	this.shape_12.setTransform(82.175,58.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQAEgIALgHIAKgGIALgGQAEgFABgHQgBgHgEgEQgEgFgIABQgJAAgFAHQgBAFgBAIIgKAAQAAgLADgHQAHgMAQAAQAPAAAGAHQAHAJAAAJQAAAKgHAGQgEAEgKAGIgIAFIgIAFQgHAGgBAGIAtAAIAAAKg");
	this.shape_13.setTransform(75.55,58.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRApQgGgFgBgJIAKAAQABAEACACQAEAEAHAAQAMAAADgJQADgFAAgNQgEAFgEACQgFADgGAAQgKAAgIgIQgIgHABgQQgBgPAIgJQAIgJALAAQAGAAAFAEIAHAFIAAgHIAKAAIAAA4QgBAMgDAHQgHAMgRAAQgKAAgHgEgAgOgYQgBAFAAAJQAAAKADAFQAFAGAHAAQALAAAEgKQADgFAAgIQAAgMgFgFQgFgGgHAAQgLAAgEALg");
	this.shape_14.setTransform(65.45,60.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgJIAAgpIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_15.setTransform(58.925,59.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaArIgJgaIghAAIgKAaIgLAAIAghVIAMAAIAfBVgAANAIIgNglIgNAlIAaAAg");
	this.shape_16.setTransform(51.725,58.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAALQAAAHgDAFQgCAFgGABg");
	this.shape_17.setTransform(43.375,62.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgGgCgDQgDgGgHABIgFAAQgEABgEAEIgDAGIgBAKIAAAgIgLAAIAAg9IALAAIAAAIQAEgFAFgDQAFgCAFAAQANAAAFAJQADAGAAAJIAAAng");
	this.shape_18.setTransform(38.425,59.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgJIAAgpIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_19.setTransform(31.675,59.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_20.setTransform(24.3737,58.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_21.setTransform(144.875,37.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAcQgGgFABgIQgBgJAGgFQAFgDAJgCIAQgCQADAAABgDIABgEQAAgFgDgDQgEgCgGAAQgJAAgDAEQgCADgBAFIgKAAQABgMAHgEQAIgFAJAAQAKAAAHAEQAHAEgBAJIAAAjIACADIACABIACAAIABAAIAAAIIgDAAIgEABQgFAAgCgEQgCgCgBgEQgCAEgHADQgEADgIAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgEADAAAGQAAAEACADQAEACAEAAQAGAAAEgCQAJgEAAgKIAAgIIgFABg");
	this.shape_22.setTransform(140.35,38.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAgIgXg+IANAAIAPAyIASgyIALAAIgYA+g");
	this.shape_23.setTransform(133.85,38.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFArIAAg+IALAAIAAA+gAgFgeIAAgMIALAAIAAAMg");
	this.shape_24.setTransform(129.55,37.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAgIgYg+IANAAIAPAyIASgyIALAAIgYA+g");
	this.shape_25.setTransform(125.2,38.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAYQgJgIABgPQAAgOAIgKQAIgJAMAAQAHAAAGADQAGADAEAFQADAFAAAGIABANIgsAAQAAAJAFAHQADAFAIAAQAJAAAFgFQADgDABgFIAJAAQABAEgDAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgFIgDgKQgEgIgLAAQgFAAgFAGQgGAFAAAHIAiAAIAAAAg");
	this.shape_26.setTransform(118.85,38.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVArIgBgDIgBgHIAAgOQgBgJgGgDQgDgBgHAAIgZAAIAAAlIgLAAIAAhVIAmAAQAKAAAGADQAMAGAAAOQAAAIgDAFQgEAEgFACQAFADACADQADADAAAIIAAAMIABAHQABAEADABIAAACgAgXgCIAaAAQAIgBAEgDQAFgDAAgJQAAgJgHgDQgDgCgGAAIgbAAg");
	this.shape_27.setTransform(111.525,37.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAALIgBAAIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_28.setTransform(102.025,38.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAYQgHgIgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAJADAHQAEAFAJAAQAIAAAFgFQACgDABgFIALAAQAAAEgDAEIgFAHQgFAEgHACIgIABQgLAAgJgJgAASgFIgDgKQgFgIgJAAQgGAAgGAGQgEAFgBAHIAiAAIAAAAg");
	this.shape_29.setTransform(96.3,38.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAGApQgGAAgDgEQgCgEAAgGIAAgoIgIAAIAAgJIAIAAIAAgSIAKAAIAAASIAJAAIAAAJIgJAAIAAAoQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAFABIACAAIABgBIAAAJIgDABg");
	this.shape_30.setTransform(91.35,38.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgIQAAgJAFgFQAFgDAJgCIAQgCQAEAAAAgDIACgEQgBgFgEgDQgDgCgGAAQgJAAgDAEQgCADgBAFIgKAAQABgMAHgEQAIgFAJAAQAKAAAHAEQAHAEAAAJIAAAjIABADIACABIACAAIABAAIAAAIIgDAAIgDABQgGAAgCgEQgCgCAAgEQgEAEgFADQgGADgHAAQgJAAgFgFgAAHABIgGACIgFAAIgJADQgEADgBAGQAAAEADADQAEACAEAAQAGAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_31.setTransform(86.55,38.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AANAgIgNgwIgMAwIgLAAIgSg+IAMAAIAMAwIAMgwIALAAIAMAwIANgwIALAAIgSA+g");
	this.shape_32.setTransform(78.725,38.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAALIgBAAIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_33.setTransform(72.825,38.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQADAAACgDIABgEQAAgFgFgDQgDgCgGAAQgJAAgDAEQgCADgBAFIgKAAQABgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIABADIACABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgEQgCgCAAgEQgEAEgFADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgEADgBAGQAAAEAEADQADACAEAAQAGAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_34.setTransform(67.3,38.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAYQgJgIABgPQAAgOAIgKQAIgJAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQAAAJAFAHQAEAFAHAAQAIAAAGgFQADgDAAgFIAKAAQABAEgDAEIgFAHQgFAEgHACIgIABQgLAAgIgJgAASgFIgDgKQgEgIgLAAQgFAAgFAGQgFAFgBAHIAiAAIAAAAg");
	this.shape_35.setTransform(60.45,38.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_36.setTransform(55.875,37.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAkQgNgMgBgYQAAgTAKgMQALgOASAAQAQAAAJAJQAJAJABALIgMAAQgCgJgFgEQgGgFgKgBQgMABgHAIQgIAKAAARQAAAPAHAJQAHAKANAAQANAAAGgKQADgFACgIIALAAQgBANgIAJQgKAMgSgBQgOABgJgKg");
	this.shape_37.setTransform(50.2,37.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAZQgHgJAAgPQgBgPAJgIQAIgKAMAAQAHAAAGADQAGADADAFQAEAFABAGIABANIgtAAQAAAKAEAFQAFAGAIAAQAHAAAFgGQADgCACgFIAKAAQgBAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgEIgDgMQgEgHgKAAQgGAAgGAFQgFAFAAAJIAiAAIAAAAg");
	this.shape_38.setTransform(154.1,24.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_39.setTransform(147.875,24.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHABIgFAAQgEABgEAEIgDAHIgBAJIAAAgIgLAAIAAg+IALAAIAAAJQAEgFAFgDQAFgCAFAAQANAAAFAJQADAFAAAJIAAAog");
	this.shape_40.setTransform(141.525,24.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAZQgIgJAAgPQAAgPAJgIQAIgKAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQABAKAEAFQAEAGAHAAQAIAAAGgGQACgCABgFIAKAAQAAAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgEQgBgHgCgFQgEgHgLAAQgGAAgEAFQgFAFgBAJIAiAAIAAAAg");
	this.shape_41.setTransform(134.8,24.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTAkQgIgJABgPQAAgNAGgKQAHgKANAAQAHAAAEADIAHAHIAAggIAKAAIAABVIgKAAIAAgIQgEAFgEADQgGACgFAAQgKAAgIgIgAgLgFQgEAFAAAMQAAAKADAGQAFAHAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgFgHAAQgGAAgGAGg");
	this.shape_42.setTransform(128,23.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgPAJgIQAIgKAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAKADAFQAEAGAJAAQAIAAAFgGQACgCABgFIALAAQAAAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgEIgDgMQgFgHgJAAQgGAAgGAFQgEAFgBAJIAiAAIAAAAg");
	this.shape_43.setTransform(121.5,24.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgPAJgIQAIgKAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQAAAKAEAFQAFAGAIAAQAHAAAFgGQADgCACgFIAKAAQAAAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgEIgDgMQgFgHgJAAQgGAAgGAFQgFAFAAAJIAiAAIAAAAg");
	this.shape_44.setTransform(114.85,24.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAAMIgBgBIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_45.setTransform(109.975,24.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAkQgNgMgBgYQAAgTAKgMQALgNASAAQAQAAAJAIQAJAJABALIgMAAQgCgIgFgGQgGgEgKAAQgMgBgHAKQgIAJAAARQAAAPAHAKQAHAJANAAQANAAAGgKQADgFACgJIALAAQgBAOgIAJQgKAMgSAAQgOAAgJgKg");
	this.shape_46.setTransform(103.3,23.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgRApQgHgFAAgJIAKAAQABAEACACQAEAEAHAAQALAAAEgJQACgFAAgNQgDAFgFACQgEADgGAAQgKAAgIgIQgIgHAAgQQABgPAHgJQAIgJALAAQAGAAAGAEIAFAFIAAgHIAKAAIAAA4QAAAMgDAHQgHAMgRAAQgKAAgHgEgAgNgYQgCAFAAAJQAAAKAEAFQAEAGAHAAQAKAAAFgKQACgFAAgIQABgMgFgFQgFgGgIAAQgJAAgEALg");
	this.shape_47.setTransform(92.15,26.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHABIgFAAQgEABgEAEIgDAHIgBAJIAAAgIgLAAIAAg+IALAAIAAAJQAEgFAFgDQAFgCAFAAQANAAAFAJQADAFAAAJIAAAog");
	this.shape_48.setTransform(85.725,24.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgFArIAAg9IALAAIAAA9gAgFgeIAAgMIALAAIAAAMg");
	this.shape_49.setTransform(81.05,23.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAGApQgGAAgDgEQgCgEAAgGIAAgoIgJAAIAAgJIAJAAIAAgSIAJAAIAAASIAKAAIAAAJIgKAAIAAAoQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABIAFABIABAAIACgBIAAAJIgDABg");
	this.shape_50.setTransform(78.05,24.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQAEAAABgDIABgEQAAgFgFgDQgDgCgHAAQgHAAgEAEQgCADAAAFIgLAAQABgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIAAADIADABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgEQgCgCAAgEQgDAEgGADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADAAAGQAAAEAEADQADACAFAAQAFAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_51.setTransform(73.25,24.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAAMIgBgBIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_52.setTransform(68.175,24.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLApIgGgHIAAAIIgKAAIAAhVIAKAAIAAAfQAEgEAFgDQAEgCAFAAQAMAAAHAIQAIAIAAAPQAAAPgIAJQgHAKgNAAQgGAAgFgDgAgMgGQgFAFAAALQAAAJACAGQAEAKALAAQAIAAAEgHQAFgHAAgLQAAgKgFgFQgEgHgIAAQgGAAgGAGg");
	this.shape_53.setTransform(62.675,23.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgPAJgIQAIgKAMAAQAHAAAGADQAGADADAFQADAFACAGIABANIgtAAQABAKADAFQAEAGAJAAQAIAAAFgGQACgCABgFIALAAQAAAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgEIgDgMQgFgHgJAAQgGAAgGAFQgEAFgBAJIAiAAIAAAAg");
	this.shape_54.setTransform(55.8,24.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_55.setTransform(51.225,23.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAZQgJgJABgPQAAgPAIgIQAIgKAMAAQAHAAAGADQAGADAEAFQACAFABAGIABANIgsAAQAAAKAFAFQAEAGAHAAQAIAAAGgGQADgCAAgFIAKAAQABAEgDAEIgFAHQgFAFgHACIgIAAQgLAAgIgIgAASgEQgBgHgCgFQgEgHgLAAQgFAAgFAFQgFAFgBAJIAiAAIAAAAg");
	this.shape_56.setTransform(46.5,24.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgXAkQgNgMAAgYQgBgTAKgMQALgNASAAQAQAAAJAIQAJAJABALIgLAAQgDgIgFgGQgFgEgLAAQgLgBgIAKQgIAJAAARQAAAPAHAKQAHAJANAAQAMAAAHgKQAEgFACgJIALAAQgCAOgIAJQgKAMgRAAQgOAAgKgKg");
	this.shape_57.setTransform(38.9,23.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgeAnQgOgMgBgaQABgYANgNQAMgOATAAQAMAAAKAFQAJAEAGAKQAGAJABALIABASIhAAAQABAOAIAGQAFAEAGAAQAIAAAFgFIAEgGIAaAAQgBAIgIAJQgMAOgWAAQgSAAgNgMgAATgJQAAgKgFgFQgGgFgIAAQgIAAgEAGQgGAFAAAJIAlAAIAAAAg");
	this.shape_58.setTransform(181.95,1.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AggAlQgLgOAAgWQAAgXAMgOQAMgOAUAAQASAAAMAIQALAIACAVIgZAAQgBgGgDgEQgEgGgJAAQgMAAgEANQgDAHAAAKQAAAKADAHQAEAMAMAAQAIAAAEgFQAEgFAAgHIAaAAQgBALgHAKQgMARgXAAQgWAAgLgOg");
	this.shape_59.setTransform(172.025,1.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AASAxIAAg5QAAgIgCgEQgEgHgKAAQgMAAgFAKQgCAHAAAIIAAAzIgZAAIAAheIAYAAIAAANQAFgHAEgEQAIgFALAAQAOAAAKAHQAJAJAAARIAABAg");
	this.shape_60.setTransform(161.575,1.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgeAnQgOgMgBgaQABgYANgNQAMgOATAAQAMAAAKAFQAJAEAGAKQAGAJABALIABASIhAAAQABAOAIAGQAFAEAGAAQAIAAAFgFIAEgGIAaAAQgBAIgIAJQgMAOgWAAQgRAAgOgMgAATgJQAAgKgFgFQgGgFgIAAQgIAAgEAGQgGAFgBAJIAmAAIAAAAg");
	this.shape_61.setTransform(151,1.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgiA1QgMgOAAgVQAAgYAMgOQALgOATAAQAHAAAHAEQAHAEAEAHIAAguIAaAAIAACAIgZAAIAAgNQgFAJgHADQgHAEgJAAQgRAAgLgNgAgPgEQgFAIAAAMQAAANAFAIQAGAIAJAAQALAAAFgIQAGgIAAgMQAAgRgJgHQgFgFgIAAQgKAAgFAIg");
	this.shape_62.setTransform(140.325,-0.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgeAnQgPgMAAgaQAAgYAOgNQAMgOATAAQAMAAAKAFQAJAEAHAKQAFAJABALIACASIhBAAQAAAOAJAGQAFAEAHAAQAHAAAFgFIAFgGIAZAAQgBAIgIAJQgMAOgWAAQgRAAgOgMgAAUgJQgBgKgFgFQgGgFgIAAQgIAAgFAGQgEAFgCAJIAnAAIAAAAg");
	this.shape_63.setTransform(130.05,1.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgeAnQgPgMAAgaQAAgYAOgNQAMgOATAAQAMAAAKAFQAJAEAHAKQAFAJABALIABASIhAAAQABAOAIAGQAFAEAHAAQAHAAAFgFIAEgGIAaAAQgBAIgIAJQgMAOgWAAQgRAAgOgMgAAUgJQgBgKgFgFQgGgFgIAAQgIAAgEAGQgFAFgCAJIAnAAIAAAAg");
	this.shape_64.setTransform(120.05,1.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgbAxIAAhfIAYAAIAAARQAFgJAEgEQAHgGALAAIACAAIACAAIAAAaIgEgBIgDAAQgQAAgFAKQgCAFAAALIAAAug");
	this.shape_65.setTransform(112.025,1.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgpAyQgQgSAAgfQAAghATgTQAPgQAYAAQAgAAAQAWQAIAMABAMIgcAAQgCgJgEgFQgIgJgOAAQgOAAgIAMQgJAMAAAVQAAAWAJALQAJAKANAAQAOAAAIgJQAEgFACgKIAbAAQgDAVgPAOQgOANgXAAQgbAAgQgSg");
	this.shape_66.setTransform(101.725,-0.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgeA+QgMgIgBgOIAbAAQABAFADACQAEACAIAAQAOABAEgKQADgFAAgOIAAgGQgDAGgFADQgHAGgLAAQgSAAgLgNQgLgNAAgVQAAgVAKgPQALgPATAAQAHAAAFACQAJAFAGAKIAAgPIAYAAIAABaQAAATgGAKQgLAPgdAAQgTAAgLgGgAgRghQgDAHAAAJQAAAIADAHQAFALANAAQAIAAAGgGQAGgHAAgOQAAgNgFgIQgGgGgKAAQgMAAgFAMg");
	this.shape_67.setTransform(84.425,3.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AASAxIAAg5QAAgIgCgEQgEgHgKAAQgMAAgFAKQgCAHAAAIIAAAzIgZAAIAAheIAYAAIAAANQAFgHAEgEQAIgFALAAQAOAAAKAHQAJAJAAARIAABAg");
	this.shape_68.setTransform(73.775,1.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_69.setTransform(65.725,-0.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgIA3QgFgEAAgJIAAg6IgNAAIAAgSIANAAIAAgbIAYAAIAAAbIAQAAIAAASIgQAAIAAAxQAAAGACACQABABAIAAIACAAIADAAIAAATIgMAAIgDABQgOAAgGgHg");
	this.shape_70.setTransform(60.175,0.3017);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_71.setTransform(54.775,-0.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AggApQgKgJAAgPIAYAAQACAGACAEQAFAEAMAAQAGABAFgDQAFgCAAgFQAAgEgEgCQgEgCgVgFQgQgFgHgEQgHgHAAgKQAAgOAKgKQALgJATAAQARAAALAHQALAIACARIgZAAQAAgFgCgDQgFgFgJAAQgIAAgEACQgDADAAADQAAAFAEACQADACAWAFQAPADAIAHQAGAGAAAMQAAANgKAKQgLAJgVAAQgWAAgLgKg");
	this.shape_72.setTransform(47.25,1.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgMBBIAAhfIAZAAIAABfgAgMgpIAAgXIAZAAIAAAXg");
	this.shape_73.setTransform(39.775,-0.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgMAwIgjhfIAcAAIATBGIAVhGIAbAAIgjBfg");
	this.shape_74.setTransform(32.3,1.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgfAnQgNgMAAgaQAAgYAMgNQANgOATAAQAMAAAJAFQAKAEAHAKQAFAJACALIABASIhBAAQAAAOAJAGQAFAEAHAAQAHAAAFgFIAFgGIAZAAQgBAIgHAJQgNAOgWAAQgSAAgOgMgAAUgJQgBgKgGgFQgFgFgIAAQgHAAgGAGQgEAFgBAJIAmAAIAAAAg");
	this.shape_75.setTransform(22.25,1.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAYBBIgCgHIgBgLIAAgMQAAgNgEgEQgFgEgMAAIgaAAIAAAzIgbAAIAAiBIA/AAQANAAAHAEQAIADAFAGQAEAFACAFQADAGAAAIQAAAJgFAJQgFAJgKADQAJADAEAHQADAHAAANIAAAJIABAMQABAFAEACIAAAEgAgagGIAdAAQAJAAAFgDQAHgDABgLQAAgMgIgEQgEgCgKAAIgdAAg");
	this.shape_76.setTransform(11.2,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR3, new cjs.Rectangle(-18.1,-9.5,227.6,76.7), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAgIAAgqQAAgHgDgCQgDgCgEAAQgHAAgEADQgFAFAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgCgDgHAAQgGgBgFAFQgEAEAAANIAAAgIgLAAIAAg9IAKAAIAAAIIAHgHQAFgDAHAAQAIAAAEADQACACACAFQADgGAFgBQAFgDAGAAQAMAAAFAJQACAFAAAIIAAApg");
	this.shape.setTransform(159.025,69.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIAAhXIAKAAIAAAJIAHgHQAGgEAGAAQALAAAHAJQAIAIAAAPQAAAUgLAIQgHAGgJAAQgGAAgFgDIgGgGIAAAggAgPgXQgCAGAAAJQAAAHACAEQAFAKAKAAQAHAAAFgGQAFgHAAgLQAAgIgCgFQgFgKgKAAQgLAAgEALg");
	this.shape_1.setTransform(150.875,70.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAHANQAGALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJAAAQQAAANACAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgEgJQgDgKgKAAQgJAAgEAJg");
	this.shape_2.setTransform(140.7,68.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJAAAQQAAANACAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgJAAQgJAAgEAJg");
	this.shape_3.setTransform(134.05,68.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAfIAAgNIALAAIAAANgAgFgRIAAgNIALAAIAAANg");
	this.shape_4.setTransform(129.45,69.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQAEgYANgXQAIgNAIgLIgtAAIAAgKIA5AAIAAAJQgEAEgGAKQgHAJgGALQgEALgCAJIgEASg");
	this.shape_5.setTransform(124.2,68.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_6.setTransform(115.8,68.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAjQgJgJAAgWQAAgPAEgKQAHgVATAAQAOAAAFAHQAGAIAAAHIgKAAQgBgFgCgCQgEgGgIAAQgIAAgFAIQgFAIgBAQQAEgFAFgDQAFgCAGAAQAKAAAIAGQAIAGAAANQAAALgIAKQgHAIgOAAQgLAAgIgIgAgKABQgFAFAAAJQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgGAAgHQAAgGgEgHQgEgEgJAAQgGAAgFADg");
	this.shape_7.setTransform(107.825,68.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgGIAKgHIALgHQAEgEABgHQgBgHgEgEQgEgFgHAAQgKABgFAHQgBAFgBAIIgKAAQAAgLADgHQAHgMARAAQAOAAAGAHQAHAJAAAJQAAAKgHAGQgEAEgKAGIgIAFIgIAFQgGAGgCAGIAtAAIAAAKg");
	this.shape_8.setTransform(101.1,68.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgSQAAgOAEgKQAHgTARAAQAQAAAIANQAFALAAASQAAAQgFALQgHAQgRAAQgOAAgIgNgAgMgYQgEAJAAAQQAAANACAIQAFALAJAAQAIAAAFgHQAFgHAAgTQAAgOgDgJQgFgKgJAAQgJAAgEAJg");
	this.shape_9.setTransform(94.45,68.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAqQABgLAEgIQADgIAMgGIAKgHIALgHQAEgEABgHQgBgHgEgEQgEgFgIAAQgKABgDAHQgDAFAAAIIgLAAQAAgLAFgHQAGgMAQAAQAPAAAHAHQAGAJAAAJQAAAKgHAGQgEAEgKAGIgIAFIgJAFQgFAGgCAGIAtAAIAAAKg");
	this.shape_10.setTransform(87.8,68.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAALQAAAHgDAFQgCAFgGABg");
	this.shape_11.setTransform(79.575,72.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAjQgJgJAAgWQAAgPAEgKQAHgVATAAQAOAAAFAHQAGAIAAAHIgKAAQgBgFgCgCQgEgGgIAAQgIAAgFAIQgFAIgBAQQAEgFAFgDQAFgCAGAAQAKAAAIAGQAIAGAAANQAAALgIAKQgHAIgOAAQgLAAgIgIgAgKABQgFAFAAAJQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgGAAgHQAAgGgEgHQgEgEgJAAQgGAAgFADg");
	this.shape_12.setTransform(74.625,68.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAqIAAg7IgTAAIAAgIQAMgBAEgCQAEgDACgKIAJAAIAABTg");
	this.shape_13.setTransform(67.35,68.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRApQgGgFgBgJIAKAAQABAEACACQAEAEAHAAQAMAAADgJQADgFAAgNQgEAFgEACQgFADgGAAQgKAAgIgIQgIgHABgQQgBgPAIgJQAIgJALAAQAGAAAGAEIAGAFIAAgHIAKAAIAAA4QgBAMgDAHQgHAMgRAAQgKAAgHgEgAgOgYQgBAFAAAJQAAAKADAFQAFAGAHAAQALAAAEgKQADgFAAgIQAAgMgFgFQgFgGgHAAQgLAAgEALg");
	this.shape_14.setTransform(57.8,70.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgIIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_15.setTransform(51.275,69.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAaArIgJgaIghAAIgKAaIgLAAIAghVIAMAAIAfBVgAANAIIgNglIgNAlIAaAAg");
	this.shape_16.setTransform(44.075,68.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAALQAAAHgDAFQgCAFgGABg");
	this.shape_17.setTransform(35.725,72.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPAgIAAgnQAAgFgCgEQgDgGgHABIgFAAQgEABgEAEIgDAHIgBAJIAAAgIgLAAIAAg9IALAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAFAJQADAGAAAJIAAAng");
	this.shape_18.setTransform(30.775,69.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgIIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA9IgKAAIAAgJQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_19.setTransform(24.025,69.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_20.setTransform(16.7237,68.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRApQgHgFAAgJIAKAAQABAEACACQAEAEAHAAQALAAAEgJQACgFAAgNQgDAFgFACQgEADgGAAQgKAAgIgIQgIgHAAgQQABgPAHgJQAIgJALAAQAGAAAGAEIAFAFIAAgHIAKAAIAAA4QAAAMgDAHQgHAMgRAAQgKAAgHgEgAgNgYQgCAFAAAJQAAAKADAFQAFAGAHAAQAKAAAFgKQACgFAAgIQABgMgFgFQgFgGgIAAQgJAAgEALg");
	this.shape_21.setTransform(122.75,50.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAgIAAgmQAAgHgCgDQgDgFgHgBIgFABQgEABgEAFIgDAFIgBAKIAAAgIgLAAIAAg+IALAAIAAAJQAEgGAFgCQAFgCAFAAQANAAAFAJQADAGAAAJIAAAng");
	this.shape_22.setTransform(116.325,49.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgIIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA+IgKAAIAAgKQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_23.setTransform(109.575,49.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAZQgIgJAAgPQAAgPAIgJQAIgJAMAAQAMAAAJAIQAIAIAAAQQAAAOgHAKQgIAJgOAAQgNAAgHgIgAgNgQQgEAIAAAJQAAAKAEAHQAFAGAIAAQALAAADgIQAEgHAAgJQAAgJgDgFQgEgJgLAAQgIAAgFAHg");
	this.shape_24.setTransform(102.95,49.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFArIAAgjIgggyIANAAIAYApIAZgpIANAAIggAyIAAAjg");
	this.shape_25.setTransform(96.9,47.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAlQgHgIAAgIQAAgKAGgHQAEgEAKgFQgGgGgCgEQgBgFgBgDQABgJAFgGQAGgFAJAAQAIAAAFAFQAFAFAAAHQAAAIgFAHQgDAEgGAEIAOASIADgHIABgGIAKAAQgBAIgDAHIgDAHIAAAAIAAAAIAPASIgOAAIgIgKQgEAGgFACQgFAEgJAAQgNAAgGgHgAgVAKQgDAEAAAHQAAAGAFAEQAFAEAGgBQAGAAAEgCQAEgDADgEIgSgXQgJAFgDADgAgNgeIgCAFQAAAEACADIAHAIIAHgGQADgEAAgFQAAgDgCgDQgCgDgEAAQgHAAgCAEg");
	this.shape_26.setTransform(85.8,48.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_27.setTransform(75.075,47.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAbQgGgGAAgJIAKAAQAAAFACADQAEAEAKAAQAGAAAEgCQAFgDAAgFQAAgEgEgCQgCgBgHgCIgIgCQgIgCgEgCQgHgEAAgIQAAgJAHgFQAGgFALAAQAOAAAGAIQAEAFAAAGIgKAAQAAgDgDgDQgDgEgIAAQgHgBgDADQgDADAAADQAAAEAEADIAHACIAGACQAMADAEABQAGAEAAAJQAAAIgGAHQgHAFgNAAQgNABgGgHg");
	this.shape_28.setTransform(68.775,49.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAcQgFgFgBgIQABgJAFgFQAFgDAJgCIAQgCQAEAAABgDIABgEQAAgFgFgDQgDgCgHAAQgHAAgEAEQgCADAAAFIgKAAQAAgMAHgEQAHgFAKAAQAKAAAHAEQAGAEABAJIAAAjIAAADIADABIACAAIACAAIAAAIIgEAAIgDABQgGAAgDgEQgBgCAAgEQgEAEgFADQgGADgHAAQgIAAgGgFgAAHABIgGACIgFAAIgJADQgFADAAAGQABAEADADQADACAFAAQAFAAAFgCQAIgEAAgKIAAgIIgFABg");
	this.shape_29.setTransform(62.55,49.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVArIgrhFIAABFIgLAAIAAhVIAOAAIAqBEIAAhEIALAAIAABVg");
	this.shape_30.setTransform(54.75,47.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGABg");
	this.shape_31.setTransform(158.625,38.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAbQgGgHAAgJIAKAAQAAAGACACQAEAGAKAAQAGgBAEgCQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgHQAAgJAHgGQAGgGALAAQAOAAAGAJQAEAFAAAHIgKAAQAAgEgDgDQgDgFgIAAQgHAAgDADQgDADAAADQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAGQgHAHgNAAQgNgBgGgGg");
	this.shape_32.setTransform(154.025,35.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_33.setTransform(149.675,33.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_34.setTransform(147.025,33.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAKAAIAAA9gAgEgeIAAgMIAKAAIAAAMg");
	this.shape_35.setTransform(144.35,33.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAHApQgHAAgCgEQgDgEAAgGIAAgoIgJAAIAAgJIAJAAIAAgSIAKAAIAAASIAKAAIAAAJIgKAAIAAAoQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEABIABAAIADgBIAAAJIgEABg");
	this.shape_36.setTransform(141.35,34.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_37.setTransform(135.6737,33.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAgBIgFAAIAAgMIALAAIAAAMQAAAFgDAGQgCAFgGABg");
	this.shape_38.setTransform(126.775,38.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTAsIgDAAIAAgKIAEABIACAAIAEgBIADgCIACgFIACgGIgWhAIALAAIAQAyIARgyIAMAAIgKAcIgKAZQgJAYgDAFQgDAFgJAAg");
	this.shape_39.setTransform(123.05,36.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLApIgGgHIAAAIIgKAAIAAhVIAKAAIAAAfQAEgEAFgDQAEgCAFAAQAMAAAHAIQAIAIAAAPQAAAPgIAJQgHAKgNAAQgGAAgFgDgAgMgGQgFAFAAALQAAAJACAGQAEAKALAAQAIAAAEgHQAFgHAAgLQAAgKgFgFQgEgHgIAAQgGAAgGAGg");
	this.shape_40.setTransform(116.875,34.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTAbQgGgHAAgJIAKAAQAAAGACACQAEAGAKAAQAGgBAEgCQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgHQAAgJAHgGQAGgGALAAQAOAAAGAJQAEAFAAAHIgKAAQAAgEgDgDQgDgFgIAAQgHAAgDADQgDADAAADQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAGQgHAHgNAAQgNgBgGgGg");
	this.shape_41.setTransform(110.425,35.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAZQgIgJAAgPQAAgPAIgJQAIgJAMAAQANAAAHAIQAJAIAAAQQAAAOgIAKQgGAJgPAAQgNAAgHgIgAgNgQQgEAIAAAJQAAAKAEAHQAEAGAJAAQAKAAAEgIQAEgHAAgJQAAgJgCgFQgFgJgLAAQgJAAgEAHg");
	this.shape_42.setTransform(104,35.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAKAAIAAALIAFgHQAFgFAGAAIABAAIACAAIAAAMIgBgBIgCAAQgIAAgEAFQgEAFAAAHIAAAjg");
	this.shape_43.setTransform(99.125,35.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAkQgMgMAAgYQgBgTAKgMQALgNASAAQAQgBAJAJQAJAJABALIgLAAQgDgIgFgGQgFgEgLAAQgLgBgIAKQgIAIAAASQAAAPAHAKQAHAJANAAQAMAAAHgKQAEgFACgIIALAAQgCANgIAJQgKAMgRAAQgOAAgLgKg");
	this.shape_44.setTransform(92.45,33.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFAsIAAg1IgJAAIAAgJIAJAAIAAgKQAAgGACgDQADgGAKAAIACABIADAAIAAAJIgDAAIgBAAQgFAAgBADIgBAMIALAAIAAAJIgLAAIAAA1g");
	this.shape_45.setTransform(83.2,33.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAZQgHgJAAgPQAAgPAIgJQAIgJANAAQAMAAAHAIQAJAIAAAQQAAAOgIAKQgGAJgPAAQgNAAgIgIgAgNgQQgEAIAAAJQAAAKAEAHQAFAGAIAAQALAAADgIQAEgHAAgJQAAgJgCgFQgFgJgLAAQgIAAgFAHg");
	this.shape_46.setTransform(78.15,35.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgNQAAgQAIgJQAIgJAMAAQAKAAAHAFQAHAFABANIgKAAQgBgGgEgEQgDgEgHAAQgJAAgFAKQgDAGAAAJQAAAJAEAHQAEAGAIAAQAHAAADgEQAEgEACgHIAKAAQgCANgHAFQgHAGgLAAQgLAAgHgJg");
	this.shape_47.setTransform(68.625,35.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEArIAAg9IAKAAIAAA9gAgEgeIAAgMIAKAAIAAAMg");
	this.shape_48.setTransform(64.25,33.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTAbQgGgHAAgJIAKAAQAAAGACACQAEAGAKAAQAGgBAEgCQAFgCAAgGQAAgEgEgCQgCgCgHgBIgIgCQgIgCgEgBQgHgFAAgHQAAgJAHgGQAGgGALAAQAOAAAGAJQAEAFAAAHIgKAAQAAgEgDgDQgDgFgIAAQgHAAgDADQgDADAAADQAAAEAEADIAHACIAGACQAMACAEACQAGAEAAAJQAAAIgGAGQgHAHgNAAQgNgBgGgGg");
	this.shape_49.setTransform(59.975,35.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAXQgDgEAAgIIAAgqIALAAIAAApIABAIQADAFAIAAQAJAAAEgKQACgFAAgIIAAgfIALAAIAAA+IgKAAIAAgKQgCAEgDADQgGAEgHAAQgNAAgFgJg");
	this.shape_50.setTransform(53.525,35.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAeArIAAgyIAAgIIAAgOIgYBIIgLAAIgZhIIAAADIABAKIAAAJIAAAyIgLAAIAAhVIAQAAIAYBIIAZhIIAQAAIAABVg");
	this.shape_51.setTransform(45.375,33.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUAZQgHgJgBgPQAAgOAJgKQAIgJAMAAQAHAAAGADQAGADAEAFQACAFABAGIACANIgtAAQABAKAEAFQAEAGAHAAQAJAAAFgGQACgCABgFIAKAAQAAAEgCAEIgFAHQgFAFgHACIgIAAQgLAAgJgIgAASgFIgDgLQgFgHgKAAQgGAAgFAFQgEAFgBAIIAiAAIAAAAg");
	this.shape_52.setTransform(33.65,35.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAPArIAAgnQAAgGgCgDQgDgGgIAAQgFAAgGAFQgFAEAAAMIAAAhIgLAAIAAhVIALAAIAAAgIAHgHQAFgDAGAAQAOAAAFAKQADAFAAAIIAAAog");
	this.shape_53.setTransform(27.075,33.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgdAAIAABLg");
	this.shape_54.setTransform(20.125,33.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgeAnQgOgMgBgaQABgYANgNQAMgOATAAQAMAAAKAFQAJAEAGAKQAGAJABALIABASIhAAAQABAOAIAGQAFAEAGAAQAIAAAFgFIAEgGIAaAAQgBAIgIAJQgMAOgWAAQgSAAgNgMgAATgJQAAgKgFgFQgGgFgIAAQgIAAgEAGQgGAFAAAJIAlAAIAAAAg");
	this.shape_55.setTransform(128.85,11.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AggApQgLgKAAgOIAaAAQABAGACAEQAFAEALAAQAIABAEgDQAEgCAAgFQAAgDgDgDQgDgCgWgFQgRgFgGgFQgHgGAAgKQAAgOALgJQAKgKATAAQARAAALAHQAMAIABARIgZAAQgBgFgBgDQgFgFgJAAQgIAAgDACQgEADAAADQAAAFAEACQADACAWAFQAPADAHAHQAIAGAAAMQAAAOgLAJQgLAJgWAAQgVAAgLgKg");
	this.shape_56.setTransform(118.85,11.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgmAiQgEgIAAgRIAAg5IAZAAIAAA5QAAAIACAFQAEAGAKAAQAMAAAEgKQADgGAAgIIAAg0IAZAAIAABfIgYAAIAAgNIgCACIgDAEQgGAFgGACQgEACgHAAQgWAAgHgPg");
	this.shape_57.setTransform(108.375,11.85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgkAkQgMgPAAgVQAAgUAMgPQAMgPAYAAQAZAAAMAPQAMAPAAAUQAAAVgMAPQgMAPgZAAQgYAAgMgPgAgQgVQgGAIAAANQAAAOAGAIQAGAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgGAIg");
	this.shape_58.setTransform(97.475,11.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AAZBBIAAg6IgxAAIAAA6IgbAAIAAiBIAbAAIAAAyIAxAAIAAgyIAbAAIAACBg");
	this.shape_59.setTransform(85.625,10.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgbAxIAAhfIAYAAIAAARQAFgKAEgDQAHgGALAAIACAAIACAAIAAAaIgEgBIgDAAQgQAAgFAKQgCAFAAALIAAAug");
	this.shape_60.setTransform(70.975,11.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgmAiQgEgIAAgRIAAg5IAZAAIAAA5QAAAIACAFQAEAGAKAAQAMAAAEgKQADgGAAgIIAAg0IAZAAIAABfIgYAAIAAgNIgCACIgDAEQgGAFgGACQgEACgHAAQgWAAgHgPg");
	this.shape_61.setTransform(61.525,11.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgqA1QgTgSAAgjQAAgiATgTQAPgOAbAAQAcAAAPAOQATATAAAiQAAAjgTASQgPAPgcABQgbgBgPgPgAgZghQgJAMAAAVQAAAWAJAMQAKALAPAAQAQAAAJgLQAKgMAAgWQAAgVgKgMQgJgLgQgBQgPABgKALg");
	this.shape_62.setTransform(49.2,10.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(-25.8,0.8,227.70000000000002,76.7), null);


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
	this.shape.setTransform(34.2995,0.88,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAqIAAgDQAGAAACgCQADgDAAgHIAAgwQAAgIgDgDQgBgEgHAAIAAgDIAXAAIALgCIAAAPQAAgDAEgFQADgDAEgCQAFgCAEAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHACADQADADAJAAIAAADg");
	this.shape_1.setTransform(27.572,0.79,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAnQgJgEgFgKQgFgJAAgQQAAgPAFgJQAFgKAJgFQAJgDAKAAQALAAAJADQAKAFAEAKQAFAJAAAPQAAAQgFAJQgFALgJADQgIAFgMgBQgKABgJgFgAgKgeQgEAKAAAUQAAAWAEAJQAFAJAFABQAGgBAFgJQAEgJAAgWQAAgUgEgKQgFgJgGAAQgFAAgFAJg");
	this.shape_2.setTransform(20.0346,0.88,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6A4IgdAAIgLABIAAgEIAJgBQADgBAAgDQABgCAAgGIAAhSIglBjIgDAAIgrhmIAABLIABAOQABAEADADQAEACAHAAIAAAEIgIgBIgYABIAAgEQAFAAADgCQADgCAAgFIABgMIAAhHIgBgIQgBgEgCAAIgIgBIAAgEIAHABIAggBIAgBNIAdhMIAlgBIAAAEIgIABQgCAAgBAEIgBAIIAABPIABAIQAAADADABIAIABIAAAEIgLgBg");
	this.shape_3.setTransform(9.5722,-0.4925,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAqIAAgDQAFAAACgDQACgBAAgIIAAgwIgBgHQAAgDgDgCQgCgCgEAAQgDAAgEADQgDACgCAEQgDAGAAAEIAAArQAAAHACACQADADAEAAIAAADIgIAAIgiAAIAAgDQAFAAADgDQACgCAAgHIAAgxQAAgHgCgDQgCgEgGAAIAAgDIAKAAIAXgCIAAAOQAEgIAHgDQAGgDAJAAQAGAAAFABQAEACACADIAEAHIABA3QAAAIADABQACADAFAAIAAADg");
	this.shape_4.setTransform(-4.8277,0.79,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqIAAgDQAFAAACgCQADgDAAgHIAAgwQAAgIgCgDQgCgEgHAAIAAgDIAXAAIALgCIAAAPIAEgIQADgDAEgCIAJgCIAAAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHADADQADADAIAAIAAADg");
	this.shape_5.setTransform(-12.5677,0.79,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMApQgEgCgBgCQgCgDAAgEQgDAGgFADQgGAEgHAAQgHAAgFgDQgFgCgCgFQgDgFAAgFQAAgHADgEQAFgFAEgCQAEgDAGgBIALgDQAEgBADgDQADgCAAgEIAAgNIgBgHQgCgDgCgCQgEgCgDAAIgGABQgEABgCACQAFACACADQADACAAAFQAAAGgEADQgDADgGAAQgGAAgDgEQgDgDAAgFQAAgEADgEIAGgFQAEgDAHgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAFABAEIABA4IABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADgBIADgBIACACQgDADgFACQgEABgGAAQgGAAgDgCgAABgBIgFACIgFAFQgDABgBAFQgCAEAAAEQAAAHADADQACADAFAAIAFgCIAFgEIAAghg");
	this.shape_6.setTransform(-19.5876,0.835,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAnQgIgFgFgJQgFgKAAgOQABgOAFgKQAFgKAJgFQAHgEAMAAQANgBAIAJQAJAJgBASIgsAAIAAAHQAAALADAGQAEAHADAEQAFADAFAAIAHgBQADgBAEgEQAEgCAEgFIACABQgCAHgEAFQgEAFgHAEQgFAEgJgBQgKABgJgFgAgFggQgEAHgBAPIAZAAIgBgOQgCgIgCgDQgCgEgEAAQgGAAgDAHg");
	this.shape_7.setTransform(-27.0801,0.88,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrA5IAAgEIAHgBQADAAABgEIABgIIAAhPIgBgIQgBgCgDgCIgHgBIAAgEIAKABIAdAAIAKgBIAAAEIgHABQgDABgBADIgBAIIAABRIABAHQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAFABIAIAAQAGAAAEgDQAFgCAEgFQADgDADgIQADgJABgGIAEAAIAAAog");
	this.shape_8.setTransform(-35.0675,-0.4925,0.9,0.9);

	this.instance = new lib.CTA();
	this.instance.setTransform(-63,-20,0.4699,0.4699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-63,-20,124.5,39), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg2, new cjs.Rectangle(0,0,300,372), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg1_1, new cjs.Rectangle(0,0,300,600), null);


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

	// FR4
	this.instance = new lib.FR4("synched",0);
	this.instance.setTransform(224.2,427.75,1,1,0,0,0,-16.8,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(480).to({_off:false},0).to({x:62.7,alpha:1},8,cjs.Ease.get(1)).wait(43).to({startPosition:0},0).to({_off:true},1).wait(16));

	// FR3
	this.instance_1 = new lib.FR3();
	this.instance_1.setTransform(154.5,480.95,1.3178,1.3178,0,0,0,78.8,41);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(373).to({_off:false},0).to({x:128.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},100).wait(68));

	// FR2
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(164.2,472.9,1.3178,1.3178,0,0,0,78.8,45.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).to({x:137.8,alpha:1},8,cjs.Ease.get(1)).to({_off:true},104).wait(175));

	// FR1
	this.instance_3 = new lib.FR11();
	this.instance_3.setTransform(144.1,472.15,1.3178,1.3178,0,0,0,63.8,41.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106).to({_off:false},0).to({x:117.7,alpha:1},7,cjs.Ease.get(1)).to({_off:true},148).wait(287));

	// CTA
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(200.75,604.05,1.2203,1.2203,0,0,0,38.9,11.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({regY:11.6,y:579.75,alpha:1},8,cjs.Ease.get(1)).wait(414).to({_off:true},1).wait(16));

	// line
	this.instance_5 = new lib.Line_1();
	this.instance_5.setTransform(127.6,377.5,1.2906,1.2906,90,0,0,11,48.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:false},0).to({x:153.4,alpha:1},8,cjs.Ease.get(1)).wait(430).to({_off:true},1).wait(16));

	// Header
	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(150.05,195.5,1,1,0,0,0,128.2,70.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:175.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},62).wait(464));

	// Logo2
	this.instance_7 = new lib.Logo2();
	this.instance_7.setTransform(154.3,310.4,1.4621,1.4621);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(84).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(439).to({_off:true},1).wait(16));

	// Logo
	this.instance_8 = new lib.Logo();
	this.instance_8.setTransform(155.35,162.95,0.4964,0.4964,0,0,0,150.8,112.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:150.3,regY:111.5,scaleX:0.7758,scaleY:0.7758,x:155.3,y:163,alpha:1},8,cjs.Ease.get(1)).to({_off:true},70).wait(464));

	// Bg2
	this.instance_9 = new lib.Bg2();
	this.instance_9.setTransform(150,290.45,1,1,0,0,0,150,62.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({_off:false},0).wait(447).to({_off:true},1).wait(16));

	// sc
	this.instance_10 = new lib.sc();
	this.instance_10.setTransform(54.75,129.3,0.9215,0.9215,0,0,180,108.1,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:7.15},8,cjs.Ease.get(1)).wait(76).to({x:5.7},0).to({regX:108,scaleX:0.6283,x:-11.4},8,cjs.Ease.get(1)).wait(439).to({_off:true},1).wait(16));

	// sc
	this.instance_11 = new lib.sc();
	this.instance_11.setTransform(242.65,131.85,0.9215,0.9215,0,0,0,108.2,165.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:297.45},8,cjs.Ease.get(1)).wait(76).to({x:300.35},0).to({regY:165.8,scaleX:0.6548,x:314.6,y:131.75},8,cjs.Ease.get(1)).wait(439).to({_off:true},1).wait(16));

	// IMG4
	this.instance_12 = new lib.IMG4("synched",0);
	this.instance_12.setTransform(75.8,76.25);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(480).to({_off:false},0).to({alpha:1},8).wait(43).to({startPosition:0},0).to({_off:true},1).wait(16));

	// IMG3
	this.instance_13 = new lib.img3();
	this.instance_13.setTransform(24.75,81.9,0.7722,0.7722,0,0,0,213.8,107.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(373).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},99).wait(68));

	// Img2
	this.instance_14 = new lib.Img2_1();
	this.instance_14.setTransform(23.05,69.35,1.1022,1.1022,0,0,0,149.8,62.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},112).wait(167));

	// Img1
	this.instance_15 = new lib.Img1_1();
	this.instance_15.setTransform(-3.1,65.8,1.3957,1.3957,0,0,0,150,65.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(84).to({_off:false},0).to({regY:65.4,y:64.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},177).wait(279));

	// Bg1
	this.instance_16 = new lib.Bg1_1();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(531).to({_off:true},1).wait(16));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(531).to({_off:true},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.7,-76.8,555.9,690);


// stage content:
(lib.WFSB_219237_MM_300x600_V1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [528];
	// timeline functions:
	this.frame_528 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(528).call(this.frame_528).wait(4));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(532));

	// Layer_1
	this.ad_animatedLayers = new lib.ad_animatedLayers("synched",0,false);
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(149.7,125.5,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(532));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(56,223.7,405.9,390.00000000000006);
// library properties:
lib.properties = {
	id: '50B97710013B4CC1843A51291A33A020',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_4.jpg", id:"_4"},
		{src:"Bg1.jpg", id:"Bg1"},
		{src:"BGG2.png", id:"BGG2"},
		{src:"CTA.png", id:"CTA"},
		{src:"Image1.png", id:"Image1"},
		{src:"Img1.jpg", id:"Img1"},
		{src:"Img2.jpg", id:"Img2"},
		{src:"Img3.jpg", id:"Img3"},
		{src:"Line.png", id:"Line"},
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
an.compositions['50B97710013B4CC1843A51291A33A020'] = {
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