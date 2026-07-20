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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BGG2 = function() {
	this.initialize(img.BGG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,127);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,83);


(lib.Image = function() {
	this.initialize(img.Image);
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

	// Layer_2
	this.instance = new lib.Image();
	this.instance.setTransform(-54,-43,0.9025,0.9025);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-54,-43,105.6,78.2), null);


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
	this.instance = new lib.Image();
	this.instance.setTransform(21,1,2.3077,2.3077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(21,1,270,199.8), null);


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
	this.instance.setTransform(-33.8,-70.25,0.2916,0.2916);

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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg51AZBMAAAgyBMBzrAAAMAAAAyBg");
	mask.setTransform(384.3,151.5);

	// Layer_1
	this.instance = new lib.Img3();
	this.instance.setTransform(13,-250,2.3664,2.3664);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img3, new cjs.Rectangle(14.1,-8.6,740.4,320.20000000000005), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpTARHMAAAgiNMBSnAAAMAAAAiNg");
	mask.setTransform(278.55,100.9);

	// Layer_1
	this.instance = new lib.Img2();
	this.instance.setTransform(11,-106,1.6752,1.6752);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(14.1,-8.6,521.6,219), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglVAODIAA8GMBKqAAAIAAcGg");
	mask.setTransform(287.05,98.35);

	// Layer_1
	this.instance = new lib.Img1();
	this.instance.setTransform(64,13,1.3041,1.3041);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(64,13,400.9,175.3), null);


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
	this.shape.setTransform(196.4713,26.3503,1.0799,1.0799);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlAqIghABIAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQAAgDgDgCQgCgBgEAAQgEAAgDACQgEADgCAEQgCADAAAGIAAAsQAAAHACACQACACAFAAIAAADIgqAAIAAgDQAFAAADgCQACgCAAgHIAAgyQAAgIgCgCQgCgEgGAAIAAgDIAKAAIAMAAIALgCIAAAOQAEgHAHgEQAHgEAHAAIAAABQAHAAAEABQAEACADADQACACACAGQABADAAAKIAAAqQAAAGACADQADACAFAAIAAAEIgJgBg");
	this.shape_1.setTransform(188.9123,22.8407,1.0799,1.0799);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXApQgFgBgCgDQgCgDgCgFIgBg0QAAgIgCgCQgCgEgGAAIAAgEIAKABIANgBIAKgCIAABCIABAHQABADACACQACABAEAAQAEAAADgCQAEgDABgDQADgFAAgFIAAgpQAAgHgDgEQgCgDgGAAIAAgEIAXAAIALgCIAABDQAAAHACAEQACADAGAAIAAADIgKAAIgYACIAAgOQgDAHgHAEQgGAEgIAAQgHAAgEgDg");
	this.shape_2.setTransform(178.2216,22.9757,1.0799,1.0799);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA5IAAgDQAFAAADgCQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAAhhIgEgDIgIgBIAAgEIBVAAIgBAZIAAAMIgDAAQgCgMgEgIQgEgHgFgDQgFgDgIAAIgFAAIgGABIgDADIgBAIIAAAoIAFAAQADAAAEgCQAEgCACgDQADgFAAgCIACgIIAEAAIAAAtIgDAAQgBgFgCgFQgCgFgEgDQgEgDgGAAIgFAAIAAAlQAAAGABADQABADADABQADABAIAAIAAAEg");
	this.shape_3.setTransform(168.0169,21.3019,1.0799,1.0799);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA7QgKgBgHgBQgJgDgDgCQgFgDAAgGQAAgFAFgEQAEgDAJgDIABADQgDADgBACIgBAGQAAAGAGAEQAFADAMAAQAGAAAFgBQAGgCADgEQAEgDAAgGQAAgGgEgCQgEgEgKAAIgJAAQgHAAgEgCQgFgBgDgDQgDgDAAgFQAAgGAGgGQAEgCAHgEIgJgDQgIgDgEgFQgEgGAAgIQAAgJAEgGQAFgGAHgCQAGgCAKgBQAIABAHACQAFACAEADIAFgGQAFgDAGAAQAGAAACACQADADAAAFQAAAFgDACQgDACgDAAQgDAAgCgCQgCgCAAgEQgBgDACgFQgFACgCADIgDADIABABQAEAGAAAJQAAAJgEAFQgDAFgJADQgGAEgJAAIgDAAIgEACQgCACAAADQAAAFAGAAIARAAQAJAAAGACQAIACADAEQAEAFAAAIQAAAIgFAGQgEAHgLAEQgLAFgOAAgAgOgwQgCAGAAAMQAAALACAHQAEAEADAAQAEAAADgEQABgHAAgLQAAgMgBgGQgCgFgFAAQgEAAgDAFg");
	this.shape_4.setTransform(154.0327,24.3795,1.0799,1.0799);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANA+IghAAIAAgDQAEAAADgDQADgCgBgHIAAgxQAAgJgBgCQgCgDgHgBIAAgDIAKABIAXgCIAABEQAAAHACACQADADAFAAIAAADIgJAAgAgLgoQgDgDAAgGQAAgFADgEQAEgDAHAAQAGAAADADQAFAEAAAFQAAAGgFADQgDADgGABQgHgBgEgDg");
	this.shape_5.setTransform(146.5546,20.762,1.0799,1.0799);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAGAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIACgIIAAhPIgCgJQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgIgCIAAgDIAxAAQAUAAAKAHQAKAHgBAMQAAAGgDAFQgDAGgHAEQgHAEgLADIAAAAQANABAKADQAKAFADAGQADAFABAHQAAALgGAGQgEAIgKADQgMAEgNAAgAgKAoIABAIQAAABABAAQAAABAAAAQABABAAAAQABABABAAIAGABQAKAAAGgHQAFgHAAgOQABgMgHgHQgFgGgOAAIgHAAgAgIgyQgCADAAAIIAAAkIAHAAQAHAAADgDQAEgDACgHQACgGAAgHQAAgLgEgGQgDgGgIAAIAAgBQgGAAgCADg");
	this.shape_6.setTransform(138.0237,21.3289,1.0799,1.0799);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgEAEgEQAEgDAFAAQAHAAADADQAEAEAAAEQAAAFgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_7.setTransform(223.2077,1.6169,1.0799,1.0799);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAqIgOgFQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAIgCAEIgDAAIAAgfIAEAAQAAAGADAJQAEAHADADQAFAEAGAAIAFgBIAEgEQACgCAAgEQAAgIgFgEIgLgKIgJgIQgFgDgDgGQgDgEAAgHQAAgGAEgFQAEgFAGgDQAIgCAGAAIAAAAQAGAAAFABQAFABACACQAGAFABgJIADAAIgBAcIgDAAIgDgMQgCgFgEgFQgEgDgHAAQgEAAgDACQgDAEAAAEQAAAFACADIAaAWQAEAEADAEQACAEAAAHQAAAIgEAEQgFAHgGABQgGADgJAAIgHgBg");
	this.shape_8.setTransform(216.9445,-1.7577,1.0799,1.0799);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEA/IAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQgBgDgCgCQgCgBgEAAQgDAAgEACQgCABgEAFQgCAFAAAEIAAAtQAAAHACACQADACADAAIAAAEIgIgBIgLAAIgNAAIgKABIAAgEQAGAAACgCQADgDAAgGIAAhaQAAgHgDgEQgBgDgHAAIAAgEIAXAAIALgCIAAABIAAA3QAEgIAHgEQAGgDAJAAQAHAAADABQAFACACADQACACACAGQABADAAAJIAAArQAAAGADADQACACAGAAIAAAEg");
	this.shape_9.setTransform(207.6846,-4.0524,1.0799,1.0799);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA4QgIgBgEgDQgFgEAAgFQAAgEAFgEQAEgFAJgCIACACIgFAGIgBAGQAAAGAGAEQAFADAMAAQAGABAFgCQAGgCAEgEQADgDAAgHQAAgEgEgEQgEgDgKAAIgJAAIgLgBQgFgCgDgDQgCgDAAgFQAAgHAFgFQADgCAJgEIgKgCQgIgEgDgFQgFgFAAgJQAAgJAFgFQAEgGAHgDQAGgCAKAAQAHAAAJACIAIAFIAFgFQAFgEAGgBQAFABADADQADABAAAGQAAAEgDACQgDADgDAAQgDAAgCgCQgBgBgBgEQAAgEACgFQgFACgCACIgDAFIAAABQAEAFAAAJQAAAJgEAFQgDAFgIAEQgGACgKAAIgCAAIgEADQgDACAAACQAAAGAGAAIARAAQAJAAAHACQAHACAEAFQAEAFAAAHQAAAHgFAIQgFAGgLAFQgLADgOAAQgLAAgHgCgAgNgwQgDAEAAAOQAAANADAEQACAGAEAAQAFAAACgGQABgFAAgMQAAgMgBgGQgCgFgFAAQgEAAgCAFg");
	this.shape_10.setTransform(197.6149,-0.3539,1.0799,1.0799);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgDgBgEgDQgDgEAAgEQgBgDAAgKIAAgnQAAgHgDgDQgCgEgGAAIAAgDIAKAAIANAAIALgCIAABBIAAAHQABADACABQADACADABQADAAAEgDQADgCADgEQACgFAAgFIAAgpQAAgIgCgCQgCgEgGAAIAAgDIAJAAIANAAIALgCIAABCQAAAGACAEQACAEAGAAIAAADIgKAAIgXACIAAgOQgEAIgHADQgFAEgJgBQgHAAgEgCg");
	this.shape_11.setTransform(187.5181,-1.7577,1.0799,1.0799);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALApQgDgCgBgCQgCgDAAgEQgDAFgFAEQgFAEgJAAIAAAAQgGAAgFgDQgFgDgCgEQgCgEAAgGQAAgHACgEQAEgFAFgCIAKgFIAKgCIAIgEQADgCAAgEIAAgNQAAgEgCgDQgBgDgCgCQgDgCgEAAIgHABQgDABgBACQACABAFAEQACADAAAEQAAAGgEADQgEADgFAAQgFAAgDgEQgEgDAAgFQAAgGACgCQADgDAEgCQADgDAIgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAEAAAFQACAGAAAHIAAArIAAAGQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIACgBIADgCIABADQgDADgEACQgEABgGAAQgEAAgGgCgAAAgBIgJAHQgDADgCADQgBAEAAAEQAAAGADADQADADAEABQAEAAABgCQACgBADgEIAAggIgFAFg");
	this.shape_12.setTransform(178.0963,-1.8117,1.0799,1.0799);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA5IAAgEIAHgBQADgBABgDIABgIIAAhPIgBgIQgBgEgDAAIgHgBIAAgEIAxAAIAAAEIgHABQgDAAgBAEQgBACAAAGIAABRIABAHQAAAAAAABQABABAAAAQAAABABAAQAAAAABAAIANABQAHAAADgDQAFgCAEgFIAGgLIAEgPIAEAAIAAAog");
	this.shape_13.setTransform(168.2426,-3.4045,1.0799,1.0799);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaA4QgJgBgEgDQgEgDAAgGQAAgEAFgEQAEgFAJgCIABACIgEAGIgCAGQAAAGAHAEQAFADALAAQAHABAFgCQAGgCADgEQAEgFAAgFQAAgEgEgEQgEgDgKAAIgJAAQgHAAgEgBQgFgCgDgDQgDgDAAgFQAAgGAGgGQAEgDAIgDQgHgBgDgBQgIgDgEgGQgEgFAAgJQAAgJAEgFQAEgGAIgDQAFgCALAAQAHAAAIACQAFACADADIAFgFQAHgEAFgBQAGABACADQADACAAAFQAAAEgDACQgDADgDAAQgDAAgCgCQgCgBAAgEQgBgEADgFQgGACgCACIgDAFIABABQAEAFAAAJQAAAJgEAFQgEAGgIADQgGACgJAAIgDAAIgEADQgCACAAACQAAAGAGAAIAQAAQAKAAAGACQAHACAEAFQAEAFAAAHQAAAIgFAHQgFAGgKAFQgLADgPAAQgLAAgGgCgAgOgwQgCAGAAAMQAAAMACAFQADAGAEAAQAFAAACgGQABgFAAgMQAAgMgBgGQgCgFgFAAQgFAAgCAFg");
	this.shape_14.setTransform(154.0963,-0.3539,1.0799,1.0799);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA+IAAgEQAGABACgDQADgCAAgHIAAgyQAAgGgDgEQgCgEgGABIAAgEIAKAAIAXgCIAABFQAAAHACACQACADAGgBIAAAEgAgLgoQgDgDAAgGQAAgGADgDQAFgDAGAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgHAAgEgEg");
	this.shape_15.setTransform(146.5913,-3.9714,1.0799,1.0799);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAGAAACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIABgIIAAhPIgBgJQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIgIgCIAAgDIAxAAQATAAALAHQAKAIAAALQgBAGgDAFQgEAGgHAEQgFAEgNADIAAAAQAPABAJADQAKAFADAGQADAFABAHQAAALgGAGQgEAIgLADQgLAEgMAAgAgKAoIABAIQAAABABABQAAAAAAABQABAAAAAAQAAABABAAIAGABQALAAAGgHQAFgIABgNQgBgNgGgGQgGgGgNAAIgHAAgAgIgyQgCADAAAIIAAAkIAHAAQAHAAADgDQAFgEABgGQABgGABgHQgBgMgDgFQgEgGgHAAQgHAAgBACg");
	this.shape_16.setTransform(138.0873,-3.4045,1.0799,1.0799);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAJQgDgDgBgGQABgFADgDQAEgDAFAAQAHAAADADQADADAAAFQAAAGgDADQgDADgHAAQgFAAgEgDg");
	this.shape_17.setTransform(219.4989,-21.6165,1.0799,1.0799);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEArIAAgEQAFAAACgCQACgCAAgHIAAgxIgBgHQgBgDgCgCQgCgBgEAAQgEAAgDACQgEADgCAEQgCAEAAAFIAAAsQAAAGACADQACACAFAAIAAAEIgJgBIgYAAIgJABIAAgEQAFAAADgCQACgCAAgHIAAgyQAAgIgCgCQgCgEgGAAIAAgDIAJAAIANAAIALgCIAAAOQAFgIAGgDQAHgEAHAAIAAABQAHAAAEABQAEACADADQACACACAGIABA3QAAAGACADQADACAFAAIAAAEg");
	this.shape_18.setTransform(211.9668,-25.1261,1.0799,1.0799);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAnQgIgEgFgKQgFgJABgPQAAgOAEgKQAFgKAJgEQAIgFALgBIAAAAQAPABAHAHQAIAJAAATIgsAAIAAAHQAAALAEAGQACAHAFADQAEADAFABIAHgCQADAAAEgDIAIgIIACABQgCAFgEAHQgDAFgIAEQgGADgJABQgKgBgIgEgAgFghQgEAHgBAQIAYAAQABgHgCgIQgBgGgCgEQgDgFgDABQgFAAgEAGg");
	this.shape_19.setTransform(202.383,-24.9911,1.0799,1.0799);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAnQgIgEgGgKQgEgJAAgPQAAgNAEgLQAGgKAJgEQAIgFALgBIAAAAQAOABAHAHQAIAIAAAUIgrAAIAAAHQAAALADAGQADAHAEADQAEADAGABIAGgCQAEAAAEgDQADgCAEgGIACABQgBAFgEAHQgEAFgHAEQgHADgIABQgKgBgIgEgAgFghQgEAIgBAPIAYAAIAAgPQgBgFgDgFQgCgFgEABQgEAAgFAGg");
	this.shape_20.setTransform(193.6361,-24.9911,1.0799,1.0799);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiArIAAgEQAGAAACgDQACgBAAgIIAAgwQAAgIgCgEQgCgDgGAAIAAgDIAKABIANgBQAGAAAEgCIAAAPQACgFADgDIAHgFIAJgDQAGAAACADQADABACAEQACADAAAEQAAAGgEAEQgEADgFAAQgFAAgEgDQgDgBAAgGQAAgDACgEIAFgFIgEAAIgGACIgFAGIgCAGIgBAGIAAAqQAAAIADACQAEADAHAAIAAAEg");
	this.shape_21.setTransform(185.6181,-25.0991,1.0799,1.0799);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAnQgIgEgGgKQgEgJAAgQQAAgNAEgKQAGgJAJgGQAKgFAJAAIAAABQAGAAAFABIAJADQAEADACAEQADAEAAAEQAAAFgDAFQgEADgFAAQgGAAgDgDQgEgDAAgGQAAgEADgEQADgDAFgCIgFgCQgCgCgDAAQgFAAgEADQgDADgCAFIgEAMQgCAHAAAIQABALADAIQACAGAFAEQAFACAFAAIAHgBQAEgBADgCQADgDAEgGIACABQgBAGgEAGQgEAGgGAEQgHAEgJAAQgKAAgIgFg");
	this.shape_22.setTransform(177.2222,-25.0181,1.0799,1.0799);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPA5IgKgEIgGgCIgCABIgBAGIgEAAIAAgsIAEAAQAAAJAEALQADAKAGAFQAGAGALAAQAEAAAEgCIAIgGQACgFAAgFQAAgHgDgFQgDgEgFgFIgagSQgGgEgEgHQgFgHAAgJQABgJAFgHQAEgHAJgDQAIgDAJAAIAAAAQAJAAAFACIAJAEIACACIADABQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgFIADAAIgBAkIgDAAQgBgJgDgHQgEgIgFgFQgHgFgHAAQgHAAgFAEQgFAFAAAHQAAAHADAEQAEAFAFAEIAcATQAHAGADAGQAEAGAAAJQAAAKgGAHQgFAGgJAEQgIAEgLAAQgKAAgFgCg");
	this.shape_23.setTransform(167.9894,-26.6379,1.0799,1.0799);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaA5QgIgCgEgEQgFgDAAgFQAAgEAFgFQAEgEAJgCIABADQgDADgBACIgBAFQAAAIAGADQAFADAMABQAHAAAEgCQAGgCADgEQAEgEAAgFQAAgFgEgDQgEgEgKAAIgJAAQgGAAgFgCQgFgBgDgDQgCgDAAgFQAAgHAFgEQAEgEAIgDIgKgCQgIgEgEgFQgEgGAAgIQAAgJAEgFQAFgHAHgCQAGgDAKAAQAIAAAHADQAFACAEADIAFgFQAFgFAGAAQAFAAADADQADADAAAEQAAAFgDADQgDACgDAAQgDAAgCgCQgCgCAAgEQgBgDACgFQgEACgDACIgDAFIABABQAEAFAAAJQAAAJgEAFQgDAFgJAEQgFACgKAAIgCAAIgFADQgCACAAADQAAAFAGAAIARAAQAJAAAGACQAIACADAEQAEAFAAAIQAAAIgFAGQgEAGgLAGQgLADgOAAQgLAAgHgBgAgOgwQgCAGAAALQAAANACAFQADAFAEABQAFgBACgFQABgFAAgNQAAgLgBgGQgCgFgFAAQgEAAgDAFg");
	this.shape_24.setTransform(153.9781,-23.5873,1.0799,1.0799);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVA+IAAgDQAFgBADgCQADgCgBgHIAAgyQAAgGgBgEQgDgEgGAAIAAgDIAKAAIAXgBIAABEQgBAHADACQADACAFABIAAADgAgLgoQgDgDAAgGQAAgFADgEQAFgDAGAAQAFAAAFADQADAEAAAFQAAAGgDADQgEAEgGgBQgHABgEgEg");
	this.shape_25.setTransform(146.5,-27.2048,1.0799,1.0799);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwA4IAAgDQAFAAADgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIABgIIAAhPIgBgJQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAIgIgCIAAgDIAxAAQATAAALAHQAJAIAAALQAAAGgDAFQgDAGgHAEQgHAEgMADIAAAAQAOABAKADQAJAFAEAGQAEAGAAAGQAAAKgGAHQgFAIgKADQgKAEgOAAgAgKAoIABAIQAAABAAAAQABABAAAAQABABAAAAQABAAAAABIAGABQALAAAGgHQAFgHAAgOQAAgMgGgHQgGgGgNAAIgHAAgAgIgyQgCAEAAAHIAAAkIAHAAQAHAAADgDQAEgDACgHQACgGAAgHQAAgLgEgGQgEgGgHAAQgHAAgBACg");
	this.shape_26.setTransform(137.9961,-26.6379,1.0799,1.0799);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC554").s().p("AgFAGQgDgCAAgEQAAgDADgDQACgDADAAQAEAAADADQACADABADQgBAEgCACQgDADgEAAQgDAAgCgDg");
	this.shape_27.setTransform(225.65,74.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgTAsQgIgFgEgJQgFgIAAgLQAAgKAFgIQAEgIAIgEQAHgFAKAAQAGAAAHADQAHADAEAFIAAgiIAPAAIAABeIgPAAIAAgLQgEAGgGADQgHADgHAAQgKABgHgFgAgKgIQgFACgDAGQgDAEAAAHQAAAIADAGQADAFAFADQAFADAFAAQAGAAAFgDQAEgDAEgFQADgGAAgIQAAgGgDgFQgEgGgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_28.setTransform(219.725,70.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAnIgOAAIAAhGIAOAAIAAAIQAEgFAFgCQAGgCAGAAQAIAAAGADQAHAEAEAGQADAHABAKIAAApg");
	this.shape_29.setTransform(211.65,71.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgRAhQgHgEgEgHQgEgGAAgKIAAgpIAPAAIAAAnQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAgnIAPAAIAABGIgPAAIAAgIQgEAEgFADQgGACgFAAQgJAAgGgDg");
	this.shape_30.setTransform(203.425,71.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgSAgQgIgEgFgJQgFgIABgLQAAgKAEgIQAFgJAJgEQAHgFAKAAQAKAAAJAFQAIAEAEAJQAFAIABAKQgBALgFAIQgEAJgJAEQgJAFgJAAQgKAAgIgFgAgKgUQgFACgCAGQgEAFAAAHQAAALAHAHQAFAGAJAAQAFAAAFgDQAFgCADgGQADgFAAgIQAAgHgDgFQgDgGgEgCQgGgDgFAAQgFAAgFADg");
	this.shape_31.setTransform(195.4,71.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgRAkIAAhGIAOAAIAAAKQADgFAFgDQAFgDAIAAIAAAPIgEAAQgIAAgFAEQgDAFgBALIAAAkg");
	this.shape_32.setTransform(189.35,71.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AgTAgQgIgFgEgIQgFgJAAgKQAAgKAFgIQAEgJAIgEQAHgFAKAAQAHAAAHADQAGAEAEAFIAAgLIAPAAIAABHIgPAAIAAgLQgEAFgHAEQgGADgHAAQgKAAgHgFgAgKgUQgFACgDAGQgDAFAAAHQAAAHADAGQADAFAFADQAFADAFAAQAGAAAFgDQAEgDAEgFQADgGAAgHQAAgGgDgGQgEgFgEgDQgFgDgGAAQgFAAgFADg");
	this.shape_33.setTransform(182.175,71.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgNAiQgGgDgEgFQgFgGAAgGIAQAAQAAAEAEADQAEADAFAAQAGAAADgCQAEgCAAgEQAAgEgEgCQgDgCgIgCIgNgFQgFgBgEgEQgDgEgBgHQABgGADgFQADgFAHgCQAGgDAHAAQAMAAAHAGQAIAGAAALIgOAAQgBgFgDgDQgDgCgGAAQgGAAgDACQgCACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAGADIAIADIAMAEQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgGADQgGADgJAAQgHAAgHgDg");
	this.shape_34.setTransform(171.7,71.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AAIAtQgIAAgGgFQgFgFAAgKIAAgnIgIAAIAAgMIAIAAIAAgSIAOAAIAAASIARAAIAAAMIgRAAIAAAnQAAAEACACQABABAFAAIAJAAIAAANg");
	this.shape_35.setTransform(166.1,70.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AASAwIAAgoQAAgJgFgEQgEgGgJAAQgHAAgFAGQgFAEAAAJIAAAoIgPAAIAAhfIAPAAIAAAhQAEgFAFgCQAHgDAFABQAJgBAGAEQAHADADAHQAEAHAAAJIAAAqg");
	this.shape_36.setTransform(159.8,70.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgWAvQgJgHgBgMIAOAAQACAGAFADQAGAEAHAAQAJAAAFgGQAGgFAAgLIAAgMQgEAGgHADQgGADgHAAQgKABgHgFQgIgFgEgJQgFgHAAgLQAAgKAFgJQAEgIAIgEQAHgFAKAAQAHAAAHADQAGADAEAGIAAgLIAPAAIAABHQAAALgFAHQgEAIgIAFQgHAEgLAAQgOAAgKgHgAgKglQgFACgDAGQgDAFAAAHQAAAIADAGQADAEAFADQAFADAFAAQAGAAAFgDQAEgDAEgEQADgGAAgIQAAgGgDgGQgEgGgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_37.setTransform(151.175,73.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgGAyIAAhGIANAAIAABGgAgGggQgCgEAAgDQAAgFACgCQADgDADAAQAEAAADADQACACAAAFQAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_38.setTransform(145.525,70);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgEgGgJAAQgHAAgFAGQgFAFAAAJIAAAnIgPAAIAAhGIAPAAIAAAIQAEgFAGgCQAFgCAFAAQAJAAAGADQAHAEAEAGQAEAHAAAKIAAApg");
	this.shape_39.setTransform(139.9,71.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AAIAtQgIAAgFgFQgGgFAAgKIAAgnIgJAAIAAgMIAJAAIAAgSIAOAAIAAASIASAAIAAAMIgSAAIAAAnQAAAEACACQACABAFAAIAJAAIAAANg");
	this.shape_40.setTransform(130.4,70.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgNAiQgGgDgFgFQgDgGAAgGIAPAAQAAAEAEADQAEADAFAAQAGAAADgCQAEgCAAgEQAAgEgEgCQgDgCgIgCIgNgFQgFgBgEgEQgDgEgBgHQABgGADgFQADgFAHgCQAGgDAHAAQAMAAAHAGQAIAGAAALIgOAAQgBgFgDgDQgEgCgFAAQgFAAgEACQgCACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAGADIAIADIAMAEQAFACAEAEQAEAEgBAHQABAGgEAFQgDAEgGADQgHADgIAAQgHAAgHgDg");
	this.shape_41.setTransform(124.8,71.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_42.setTransform(117.625,71.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgGAyIAAhGIANAAIAABGgAgGggQgCgEAAgDQAAgFACgCQADgDADAAQAEAAADADQACACAAAFQAAADgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_43.setTransform(112.125,70);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAnIgPAAIAAhGIAPAAIAAAIQAEgFAGgCQAFgCAFAAQAJAAAHADQAGAEAEAGQADAHAAAKIAAApg");
	this.shape_44.setTransform(106.5,71.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAnIgOAAIAAhGIAOAAIAAAIQAEgFAFgCQAGgCAGAAQAIAAAGADQAHAEAEAGQADAHABAKIAAApg");
	this.shape_45.setTransform(98.35,71.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgRAhQgHgEgEgHQgEgGAAgKIAAgpIAPAAIAAAnQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAgnIAPAAIAABGIgPAAIAAgIQgEAEgFADQgGACgFAAQgJAAgGgDg");
	this.shape_46.setTransform(90.175,71.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AgJAyIAAg7IgIAAIAAgLIAIAAIAAgGQAAgMAHgGQAFgFAOAAIAAAMQgGAAgDACQgDADAAAGIAAAGIANAAIAAALIgNAAIAAA7g");
	this.shape_47.setTransform(84.075,70);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_48.setTransform(75.125,71.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AASAwIAAgoQAAgJgFgEQgFgGgIAAQgHAAgFAGQgFAEAAAJIAAAoIgOAAIAAhfIAOAAIAAAhQAEgFAFgCQAHgDAFABQAIgBAHAEQAHADADAHQADAHABAJIAAAqg");
	this.shape_49.setTransform(67.2,70.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AAJAtQgJAAgGgFQgFgFAAgKIAAgnIgIAAIAAgMIAIAAIAAgSIAOAAIAAASIARAAIAAAMIgRAAIAAAnQAAAEACACQABABAFAAIAJAAIAAANg");
	this.shape_50.setTransform(60.8,70.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgTAsQgIgFgEgJQgFgIAAgLQAAgKAFgIQAEgIAIgEQAHgFAKAAQAGAAAHADQAHADAEAFIAAgiIAPAAIAABeIgPAAIAAgLQgEAGgGADQgHADgHAAQgKABgHgFgAgKgIQgFACgDAGQgDAEAAAHQAAAIADAGQADAFAFADQAFADAFAAQAGAAAFgDQAEgDAEgFQADgGAAgIQAAgGgDgFQgEgGgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_51.setTransform(50.925,70.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAnIgOAAIAAhGIAOAAIAAAIQADgFAHgCQAFgCAGAAQAIAAAHADQAGAEAEAGQAEAHgBAKIAAApg");
	this.shape_52.setTransform(42.85,71.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgTAgQgIgFgEgIQgFgJAAgKQAAgKAFgIQAEgJAIgEQAHgFAKAAQAHAAAHADQAGAEAEAFIAAgLIAPAAIAABHIgPAAIAAgLQgEAFgHAEQgGADgHAAQgKAAgHgFgAgKgUQgFACgDAGQgDAFAAAHQAAAHADAGQADAFAFADQAFADAFAAQAGAAAFgDQAEgDAEgFQADgGAAgHQAAgGgDgGQgEgFgEgDQgFgDgGAAQgFAAgFADg");
	this.shape_53.setTransform(34.225,71.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgFgGgIAAQgHAAgFAGQgFAFAAAJIAAAnIgPAAIAAhGIAPAAIAAAIQADgFAHgCQAFgCAGAAQAIAAAHADQAGAEAEAGQAEAHgBAKIAAApg");
	this.shape_54.setTransform(246.25,53.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgSAgQgIgEgFgJQgFgIABgLQAAgKAEgIQAFgJAJgEQAHgFAKAAQAKAAAJAFQAIAEAEAJQAFAIABAKQgBALgFAIQgEAJgJAEQgJAFgJAAQgKAAgIgFgAgKgUQgFACgCAGQgEAFAAAHQAAALAHAHQAFAGAJAAQAFAAAFgDQAFgCADgGQADgFAAgIQAAgHgDgFQgDgGgEgCQgGgDgFAAQgFAAgFADg");
	this.shape_55.setTransform(238.15,53.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgNAiQgGgDgFgFQgDgGAAgGIAOAAQABAEAEADQAEADAFAAQAGAAADgCQAEgCAAgEQAAgEgEgCQgEgCgHgCIgNgFQgFgBgEgEQgDgEAAgHQAAgGADgFQAEgFAFgCQAHgDAHAAQAMAAAHAGQAIAGABALIgPAAQAAgFgEgDQgEgCgFAAQgGAAgCACQgDACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAIAEADIAIADIANAEQAFACAEAEQADAEAAAHQAAAGgDAFQgDAEgGADQgHADgIAAQgHAAgHgDg");
	this.shape_56.setTransform(230.8,53.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgTAgQgIgFgEgIQgFgJAAgKQAAgKAFgIQAEgJAIgEQAHgFAKAAQAHAAAHADQAGAEAEAFIAAgLIAPAAIAABHIgPAAIAAgLQgEAFgHAEQgGADgHAAQgKAAgHgFgAgKgUQgFACgDAGQgDAFAAAHQAAAHADAGQADAFAFADQAFADAFAAQAGAAAFgDQAEgDAEgFQADgGAAgHQAAgGgDgGQgEgFgEgDQgFgDgGAAQgFAAgFADg");
	this.shape_57.setTransform(222.975,53.275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_58.setTransform(215.075,53.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgNAiQgGgDgEgFQgFgGAAgGIAQAAQAAAEAEADQAEADAFAAQAGAAAEgCQADgCAAgEQAAgEgEgCQgEgCgHgCIgNgFQgFgBgEgEQgEgEAAgHQAAgGAEgFQADgFAHgCQAGgDAHAAQAMAAAIAGQAHAGAAALIgOAAQgBgFgDgDQgDgCgGAAQgFAAgEACQgCACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAGADIAIADIAMAEQAFACAEAEQAEAEAAAHQAAAGgEAFQgDAEgHADQgFADgJAAQgHAAgHgDg");
	this.shape_59.setTransform(207.8,53.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_60.setTransform(197.525,53.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AASAwIAAgoQAAgIgFgGQgFgFgIAAQgHAAgFAFQgFAGAAAIIAAAoIgOAAIAAhfIAOAAIAAAhQAEgFAFgCQAHgCAFgBQAIABAHADQAHAEADAGQADAHABAJIAAAqg");
	this.shape_61.setTransform(189.6,52.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AAJAtQgJAAgGgFQgFgFAAgKIAAgnIgIAAIAAgMIAIAAIAAgSIAOAAIAAASIARAAIAAAMIgRAAIAAAnQAAAEACACQABABAFAAIAJAAIAAANg");
	this.shape_62.setTransform(183.2,52.375);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgJAyIAAg6IgIAAIAAgNIAIAAIAAgEQAAgNAHgFQAFgGAOAAIAAAMQgGAAgDADQgDACAAAHIAAAEIANAAIAAANIgNAAIAAA6g");
	this.shape_63.setTransform(175.775,51.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgSAgQgIgEgFgJQgEgIgBgLQAAgKAGgIQAEgJAIgEQAJgFAJAAQAKAAAIAFQAJAEAFAJQAEAIAAAKQAAALgEAIQgGAJgIAEQgIAFgKAAQgKAAgIgFgAgKgUQgFACgDAGQgCAFAAAHQAAALAFAHQAGAGAJAAQAFAAAFgDQAFgCADgGQADgFAAgIQAAgHgDgFQgDgGgFgCQgEgDgGAAQgFAAgFADg");
	this.shape_64.setTransform(169.8,53.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgNAiQgGgDgFgFQgDgGAAgGIAPAAQAAAEAEADQAEADAFAAQAGAAADgCQAEgCAAgEQAAgEgEgCQgEgCgHgCIgNgFQgFgBgEgEQgDgEAAgHQAAgGADgFQADgFAGgCQAHgDAHAAQAMAAAHAGQAIAGAAALIgOAAQAAgFgEgDQgEgCgFAAQgFAAgDACQgDACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAIAEADIAIADIANAEQAFACAEAEQAEAEgBAHQABAGgEAFQgDAEgGADQgHADgIAAQgHAAgHgDg");
	this.shape_65.setTransform(159.35,53.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AArAkIAAgnQAAgJgFgFQgEgGgJAAQgIAAgFAGQgFAFAAAJIAAAnIgOAAIAAgnQAAgJgEgFQgFgGgJAAQgHAAgFAGQgGAFAAAJIAAAnIgOAAIAAhGIAOAAIAAAIQAEgFAFgCQAHgCAGAAQAIAAAHADQAGAEADAHQAEgHAHgEQAHgDAHAAQAJAAAHADQAGAEAEAGQAEAHAAAKIAAApg");
	this.shape_66.setTransform(149.45,53.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_67.setTransform(141.225,52.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgGAyIAAhHIANAAIAABHgAgGggQgCgEAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_68.setTransform(138.025,51.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgJAyIAAg6IgIAAIAAgNIAIAAIAAgEQAAgNAHgFQAFgGAOAAIAAAMQgGAAgDADQgDACAAAHIAAAEIANAAIAAANIgNAAIAAA6g");
	this.shape_69.setTransform(134.425,51.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AAIAtQgIAAgGgFQgFgFAAgKIAAgnIgIAAIAAgMIAIAAIAAgSIAOAAIAAASIARAAIAAAMIgRAAIAAAnQAAAEACACQABABAFAAIAJAAIAAANg");
	this.shape_70.setTransform(127.05,52.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgNAiQgGgDgEgFQgFgGAAgGIAQAAQAAAEAEADQAEADAFAAQAGAAAEgCQADgCAAgEQAAgEgEgCQgEgCgHgCIgNgFQgFgBgEgEQgEgEAAgHQAAgGAEgFQADgFAHgCQAGgDAHAAQAMAAAIAGQAHAGAAALIgOAAQgBgFgDgDQgDgCgGAAQgFAAgEACQgCACAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAGADIAIADIAMAEQAFACAEAEQAEAEAAAHQAAAGgEAFQgDAEgHADQgFADgJAAQgHAAgHgDg");
	this.shape_71.setTransform(121.4,53.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_72.setTransform(114.225,53.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgLAtQgGgDgEgFIAAALIgOAAIAAhgIAOAAIAAAkQAEgFAGgEQAHgDAHAAQAKAAAHAEQAHAFAFAJQAFAGAAAMQAAAKgFAJQgFAIgHAFQgHAEgKABQgHAAgHgEgAgKgJQgFAEgDAFQgDAEAAAIQAAAHADAFQADAGAFADQAFADAFAAQAFAAAGgDQAEgDAEgGQADgFAAgHQAAgIgDgFQgEgFgEgDQgGgCgFAAQgFAAgFACg");
	this.shape_73.setTransform(106.3,52.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_74.setTransform(94.825,53.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AASAwIAAgoQAAgIgFgGQgFgFgIAAQgHAAgFAFQgFAGAAAIIAAAoIgPAAIAAhfIAPAAIAAAhQAEgFAFgCQAHgCAFgBQAJABAGADQAHAEADAGQAEAHAAAJIAAAqg");
	this.shape_75.setTransform(86.9,52.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAJAtQgJAAgGgFQgFgFAAgKIAAgnIgIAAIAAgMIAIAAIAAgSIAOAAIAAASIARAAIAAAMIgRAAIAAAnQAAAEACACQACABAEAAIAJAAIAAANg");
	this.shape_76.setTransform(80.5,52.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_77.setTransform(71.275,53.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AgRAgQgHgEgEgJQgFgIAAgLQAAgKAFgIQAEgJAHgEQAJgFAJAAQANAAAJAGQAIAGADAMIgQAAQgCgGgFgCQgEgDgGAAQgJAAgEAGQgGAGAAALQAAALAGAHQAEAGAJAAQAMAAAFgLIAQAAQgDALgJAGQgJAHgMAAQgJAAgJgFg");
	this.shape_78.setTransform(63.6,53.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AASAkIAAgnQAAgJgFgFQgEgGgJAAQgHAAgFAGQgFAFAAAJIAAAnIgOAAIAAhGIAOAAIAAAIQADgFAHgCQAFgCAGAAQAIAAAHADQAGAEAEAGQADAHAAAKIAAApg");
	this.shape_79.setTransform(55.8,53.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_80.setTransform(47.825,53.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC554").s().p("AgGAyIAAhHIANAAIAABHgAgGggQgCgEAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCAEQgDACgEAAQgDAAgDgCg");
	this.shape_81.setTransform(42.375,51.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDC554").s().p("AgRAkIAAhGIAOAAIAAAKQADgFAFgDQAFgDAIAAIAAAPIgEAAQgJAAgEAEQgDAFgBALIAAAkg");
	this.shape_82.setTransform(38.7,53.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDC554").s().p("AgRAgQgIgEgFgJQgEgIAAgLQAAgKAEgIQAFgJAIgEQAIgFAJAAQAKAAAIAEQAIAFAFAIQAEAIAAAKIAAAHIg2AAQABAIAFAFQAGAFAHAAQAMAAAFgKIAQAAQgDAKgJAHQgIAGgNAAQgJAAgIgFgAAUgFQgBgJgFgFQgGgEgIAAQgHAAgGAEQgFAFgBAJIAnAAIAAAAg");
	this.shape_83.setTransform(32.175,53.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EDC554").s().p("AgkA1IAAhoIAPAAIAAAKQAEgFAGgDQAHgDAHAAQAKAAAHAEQAHAFAFAIQAFAIAAALQAAALgFAHQgFAJgHAFQgHAEgKAAQgHAAgHgDQgGgDgEgFIAAAsgAgKglQgFADgDAGQgDAFAAAHQAAAIADAFQADAFAFADQAFADAFAAQAFAAAGgDQAEgDAEgFQADgFAAgIQAAgHgDgGQgEgFgEgDQgGgDgFAAQgFAAgFADg");
	this.shape_84.setTransform(24.3,54.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EDC554").s().p("AAOAkIgOgZIgPAZIgPAAIAXgjIgXgkIARAAIAOAZIAOgZIAQAAIgXAjIAXAkg");
	this.shape_85.setTransform(16.65,53.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDC554").s().p("AgYAtIAAhZIAxAAIAAAMIgiAAIAAAaIAeAAIAAAMIgeAAIAAAbIAiAAIAAAMg");
	this.shape_86.setTransform(10.375,52.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(5.4,-34,246.29999999999998,115.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcAdIAAgmQAAgGgDgCQgDgCgEAAQgFAAgEAEQgEADAAAJIAAAgIgJAAIAAgkQAAgGgBgCQgCgEgGAAQgGAAgEAEQgEAEAAALIAAAdIgKAAIAAg3IAKAAIAAAIQADgFADgCQAEgDAGAAQAHAAAEAEIADAFQADgEAFgDQAEgCAFAAQAMAAAEAIQACAFAAAHIAAAlg");
	this.shape.setTransform(130.575,66.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIQADgEAEgCQAEgDAGAAQAJAAAHAIQAHAGAAAOQAAASgKAHQgGAFgIABQgFAAgFgEIgGgFIAAAdgAgNgVQgCAFAAAJQAAAGACAEQAEAIAJAAQAGAAAEgGQAFgFAAgKQAAgHgCgEQgDgKgKAAQgJAAgEAKg");
	this.shape_1.setTransform(123.25,67.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgLADgJQAHgRAPgBQAOABAHALQAFAKAAAQQAAAOgFAKQgGAPgPAAQgNAAgGgMgAgLgVQgEAHAAAPQAAALADAIQAEAKAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_2.setTransform(114.175,66.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgLADgJQAHgRAPgBQAOABAHALQAFAKAAAQQAAAOgFAKQgGAPgPAAQgNAAgGgMgAgLgVQgEAHAAAPQAAALADAIQAEAKAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_3.setTransform(108.225,66.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAcIAAgMIAKAAIAAAMgAgEgPIAAgMIAKAAIAAAMg");
	this.shape_4.setTransform(104.1,66.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAlQAEgWAMgUQAHgNAIgIIgpAAIAAgKIAzAAIAAAJIgJALQgHAKgEAIIgGASIgEARg");
	this.shape_5.setTransform(99.4,66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAIAAIAABNg");
	this.shape_6.setTransform(91.9,65.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgTQAAgNAEgKQAGgTARAAQAMAAAFAHQAFAGAAAHIgJAAQgBgEgCgDQgDgEgHAAQgHAAgFAHQgEAHgBAOQADgFAFgCQAFgCAEAAQAKAAAHAGQAHAFAAAMQAAAKgHAIQgHAIgMAAQgJAAgIgIgAgJABQgFAEAAAIQAAAIAEAEQAFAFAGAAQAHAAAEgFQAEgFAAgHQAAgFgDgGQgEgEgIAAQgGAAgEADg");
	this.shape_7.setTransform(84.725,66.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgHAKgGIAJgGQAIgDACgDQAEgEABgGQAAgGgFgEQgEgEgGAAQgJAAgDAHQgCAEgBAHIgKAAQABgKAEgGQAGgLAOAAQANAAAGAHQAGAHAAAJQAAAJgHAFQgDAEgJAFIgHAEIgIAGQgFAEgCAGIApAAIAAAJg");
	this.shape_8.setTransform(78.8,65.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgLADgJQAHgRAPgBQAOABAHALQAFAKAAAQQAAAOgFAKQgGAPgPAAQgNAAgGgMgAgLgVQgEAHAAAPQAAALADAIQAEAKAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_9.setTransform(72.825,66.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgHALgGIAJgGQAGgDADgDQAFgEAAgGQgBgGgEgEQgDgEgHAAQgJAAgEAHQgCAEAAAHIgKAAQABgKAEgGQAFgLAPAAQANAAAGAHQAGAHAAAJQAAAJgHAFQgDAEgJAFIgHAEIgIAGQgFAEgCAGIApAAIAAAJg");
	this.shape_10.setTransform(66.9,65.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAJQADgBABgEIABgEIAAgBIgBAAIgEAAIAAgMIAJAAIAAALQABAFgDAFQgDAFgEABg");
	this.shape_11.setTransform(59.5,69.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAgQgGgIAAgKIAKAAQAAAHACADQAEAGAJAAQAHAAAFgEQAEgEAAgGQAAgIgFgDQgEgDgIAAIgCAAIgCAAIAAgHIADAAIACAAQAEAAAEgCQAGgDAAgHQAAgGgEgDQgEgDgGAAQgIAAgEAGQgCAEAAAGIgJAAQAAgIADgGQAGgLAOAAQALAAAGAGQAGAFAAAJQAAAHgDAFIgGAEQAGABADAEQADAFAAAGQAAALgHAHQgHAHgMAAQgNAAgGgHg");
	this.shape_12.setTransform(54.975,66.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAlIAAgzIgRAAIAAgIQAKgBADgDQAEgBACgKIAIAAIAABKg");
	this.shape_13.setTransform(48.575,65.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAkQgGgEgBgJIAKAAQAAAFADACQADACAGAAQAKAAAEgHQACgFgBgLQgCAEgEACQgEACgGAAQgJAAgHgGQgHgHAAgOQAAgOAHgIQAHgHAKgBQAGAAAEADIAGAGIAAgHIAJAAIAAAyQAAALgEAGQgFALgQAAQgJAAgGgEgAgMgWQgCAFAAAIQAAAJAEAEQAEAFAGABQAJgBAFgIQACgFAAgHQAAgLgEgEQgFgGgGABQgJgBgEAKg");
	this.shape_14.setTransform(40.025,68.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgHIAAglIAJAAIAAAkIABAHQADAFAHAAQAIAAAEgIQACgFAAgHIAAgcIAKAAIAAA3IgKAAIAAgIIgEAFQgFAFgHAAQgMAAgEgIg");
	this.shape_15.setTransform(34.2,66.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAmIgIgWIgeAAIgIAWIgKAAIAchLIAMAAIAcBLgAAMAHIgMghIgMAhIAYAAg");
	this.shape_16.setTransform(27.75,65.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAJQADgBABgEIABgEIAAgBIgBAAIgEAAIAAgMIAJAAIAAALQABAFgDAFQgDAFgEABg");
	this.shape_17.setTransform(20.25,69.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAVQgCgFgBgHIAAglIAKAAIAAAkIABAHQADAFAHAAQAIAAAEgIQACgFAAgHIAAgcIAKAAIAAA3IgJAAIAAgIIgFAFQgFAFgHAAQgMAAgEgIg");
	this.shape_18.setTransform(15.75,66.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgFgBgDQgDgEgHAAQgFAAgFAEQgEAEAAAKIAAAeIgKAAIAAhNIAKAAIAAAdQADgEADgCQAEgDAGAAQAMAAAFAJQACAEAAAIIAAAkg");
	this.shape_19.setTransform(9.875,65.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAmIAAhCIgaAAIAAgJIA9AAIAAAJIgZAAIAABCg");
	this.shape_20.setTransform(3.625,65.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgNQAAgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABAMIgoAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQADgDABgEIAJAAIgCAHIgFAGQgFAEgFACIgIABQgKAAgHgIgAAQgEQgBgGgBgEQgFgGgJAAQgFAAgEAEQgEAFgBAHIAeAAIAAAAg");
	this.shape_21.setTransform(50.9,52.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAWQgHgIAAgMQAAgOAIgIQAHgJAKAAQAJAAAGAFQAGAFABALIgJAAQgBgFgDgEQgDgDgGAAQgJAAgDAJQgDAFAAAIQAAAIAEAGQAEAGAGAAQAGAAAEgEQACgDACgHIAJAAQgCAMgFAFQgHAFgKAAQgKAAgGgIg");
	this.shape_22.setTransform(45.3,52.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANAdIAAgjQAAgFgBgDQgDgFgGAAIgFAAQgEACgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAFAAQALAAAFAJQACAEAAAJIAAAjg");
	this.shape_23.setTransform(39.625,52.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQAGAAAFADQAGADADAEQADAFABAFIABAMIgoAAQAAAIAEAFQADAGAIAAQAHAAAEgFQACgDACgEIAJAAIgDAHIgEAGQgFAEgFACIgIABQgKAAgHgIgAAQgEQgBgGgCgEQgDgGgJAAQgGAAgEAEQgFAFAAAHIAeAAIAAAAg");
	this.shape_24.setTransform(33.6,52.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAnIAAg3IAJAAIAAA3gAgEgbIAAgLIAJAAIAAALg");
	this.shape_25.setTransform(29.525,51.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgHAAgEAFQgDAEAAAGIAAAgg");
	this.shape_26.setTransform(26.825,52.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgDAHIgEAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQgBgGgCgEQgEgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_27.setTransform(21.7,52.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAoIAAhNIAKAAIAAAHQACgEADgCQAGgDAFAAQAJAAAHAHQAHAIAAANQAAASgKAIQgGAEgIAAQgGAAgEgCIgFgGIAAAdgAgNgVQgCAGAAAHQAAAHACADQAEAJAJAAQAHAAADgFQAFgGAAgKQAAgGgCgFQgDgKgKAAQgJAAgEAKg");
	this.shape_28.setTransform(16,53.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOAcIgOgVIgNAVIgMAAIAUgcIgTgbIANAAIALATIAOgTIALAAIgTAbIAUAcg");
	this.shape_29.setTransform(10.125,52.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAnIAAhNIA2AAIAAAKIgsAAIAAAXIApAAIAAAIIgpAAIAAAbIAtAAIAAAJg");
	this.shape_30.setTransform(4.1,51.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAIgJAKAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgFgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_31.setTransform(108,37.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAWQgGgIAAgMQAAgOAHgIQAIgJAJAAQAKAAAGAFQAGAFABALIgJAAQgBgFgDgEQgDgDgHAAQgHAAgFAJQgCAFAAAIQAAAIADAGQAEAGAHAAQAGAAADgEQAEgDABgHIAJAAQgBAMgHAFQgGAFgKAAQgKAAgHgIg");
	this.shape_32.setTransform(102.4,37.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAZQgEgFAAgHQgBgIAFgEQAFgDAIgBIAOgCQAEgBABgCIAAgEQAAgEgEgDQgDgCgFAAQgIAAgDAEQgCACAAAFIgJAAQABgLAGgEQAHgEAIAAQAJAAAGAEQAGAEAAAIIAAAfIABACIACABIACAAIACAAIAAAHIgEABIgDAAQgFAAgCgEQgCgBAAgEQgCAEgGADQgEADgHAAQgIAAgFgFgAAGABIgFABIgFABIgIACQgEACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgFABg");
	this.shape_33.setTransform(96.85,37.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_34.setTransform(92.575,36.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAZQgFgFgBgHQAAgIAFgEQAFgDAIgBIAOgCQADgBACgCIAAgEQAAgEgEgDQgDgCgFAAQgIAAgCAEQgDACAAAFIgJAAQABgLAGgEQAGgEAJAAQAJAAAGAEQAGAEAAAIIAAAfIABACIADABIABAAIABAAIAAAHIgDABIgDAAQgFAAgCgEQgCgBAAgEQgCAEgGADQgFADgGAAQgIAAgEgFgAAGABIgFABIgEABIgIACQgFACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgFABg");
	this.shape_35.setTransform(88.55,37.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIAiAAQAKgBAGAGQAHAGAAALQAAAJgGAGQgFAGgMAAIgXAAIAAAggAgRgCIAUAAQAGAAAFgDQAEgDAAgHQAAgJgGgDQgEgBgFAAIgUAAg");
	this.shape_36.setTransform(82.075,36.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQAGAAAFADQAGADADAEQADAFABAFIABAMIgoAAQAAAIAEAFQADAGAIAAQAHAAAEgFQACgDACgEIAJAAIgDAHIgEAGQgFAEgFACIgIABQgKAAgHgIgAAQgEQgBgGgCgEQgDgGgJAAQgGAAgEAEQgFAFAAAHIAeAAIAAAAg");
	this.shape_37.setTransform(72.3,37.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAmIAAg2IAJAAIAAA2gAgEgbIAAgKIAJAAIAAAKg");
	this.shape_38.setTransform(68.175,36.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEAcIgVg3IALAAIAOAsIAPgsIALAAIgVA3g");
	this.shape_39.setTransform(64.25,37.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgNAHgJQAHgIALAAQALAAAHAIQAIAHAAANQAAAOgHAIQgGAJgNAAQgLAAgHgIgAgLgOQgEAGAAAJQAAAJAEAGQADAGAIAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgHgKgBQgIABgDAGg");
	this.shape_40.setTransform(58.55,37.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAbAmIAAgsIAAgIIAAgLIgWA/IgJAAIgWg/IAAACIAAAIIAAAJIAAAsIgKAAIAAhLIAPAAIAVBAIAWhAIAPAAIAABLg");
	this.shape_41.setTransform(51.25,36.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_42.setTransform(42.575,36.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVAZQgEgFAAgHQAAgIAEgEQAFgDAIgBIAOgCQADgBACgCIAAgEQAAgEgDgDQgEgCgFAAQgHAAgEAEQgBACgBAFIgJAAQABgLAGgEQAGgEAJAAQAJAAAGAEQAGAEAAAIIAAAfIABACIACABIACAAIACAAIAAAHIgEABIgDAAQgFAAgCgEQgBgBgBgEQgDAEgFADQgFADgGAAQgIAAgFgFgAAHABIgGABIgFABIgIACQgEACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgEABg");
	this.shape_43.setTransform(38.55,37.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAIgJAKAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgDgEQgEgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_44.setTransform(32.4,37.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AATAmIgBgCIgBgGIAAgNQgBgHgFgDQgDgCgGAAIgWAAIAAAhIgLAAIAAhLIAiAAQAJAAAGACQALAFAAANQAAAHgDAEQgEAFgEACQAEABACADQADAEAAAGIABALIAAAGQABADACACIAAABgAgUgDIAXAAQAHAAADgCQAFgDAAgIQAAgIgGgDQgDgBgGAAIgXAAg");
	this.shape_45.setTransform(25.85,36.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAIgJAKAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgFgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_46.setTransform(15.75,37.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgFgBgDQgDgEgHAAQgFAAgFAEQgEAEAAAKIAAAeIgKAAIAAhNIAKAAIAAAdQADgEADgCQAEgDAGAAQAMAAAFAJQACAEAAAIIAAAkg");
	this.shape_47.setTransform(9.875,36.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAmIAAhCIgaAAIAAgJIA9AAIAAAJIgZAAIAABCg");
	this.shape_48.setTransform(3.625,36.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AgXAfQgJgHAAgLIATAAQABAEACADQADADAJAAQAFABAEgCQACgCAAgDQABgDgDgCQgDgBgPgFQgNgDgEgDQgGgEAAgJQABgKAHgHQAIgHAOAAQANAAAIAGQAJAEABAOIgTAAQgBgEgBgCQgDgDgHAAQgGgBgCACQgDACAAADQAAADADABQADACAQAEQALACAFAFQAGAFgBAIQABAKgJAHQgHAHgQAAQgRAAgHgHg");
	this.shape_49.setTransform(145.45,21.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AgIAMQAGgDACgEIABgFIgKAAIAAgSIASAAIAAAPQAAAJgEAFQgFAGgIABg");
	this.shape_50.setTransform(140.3,16.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgUAkIAAhGIASAAIAAANQADgIAEgCQAFgFAIAAIABAAIACAAIAAATIgDAAIgDAAQgLAAgEAHQgBAFAAAIIAAAhg");
	this.shape_51.setTransform(135.725,21.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AgWAdQgLgIAAgUQAAgSAKgKQAJgKAOAAQAJAAAHAEQAHADAFAHQAEAGABAJIABANIgwAAQAAAKAGAFQAFACAEAAQAGABAEgDIADgGIATAAQgBAHgGAHQgJAKgRAAQgMAAgKgJgAAOgGQAAgIgEgEQgEgDgGgBQgGABgDADQgDAFgBAHIAbAAIAAAAg");
	this.shape_52.setTransform(129.05,21.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgWAuQgJgGgBgKIAUAAQABADACABQADADAGAAQAKAAAEgHQACgEAAgKIAAgFQgDAFgDACQgFAEgIAAQgOAAgIgKQgIgJAAgQQAAgQAIgLQAHgKAPAAQAEAAAEABQAHADAEAIIAAgLIASAAIAABDQAAAOgEAHQgIAMgWAAQgNAAgJgFgAgMgZQgCAFAAAHQgBAGADAFQAEAIAJAAQAGAAAFgFQAEgEAAgKQAAgLgEgFQgEgFgIAAQgJAAgDAJg");
	this.shape_53.setTransform(121.05,22.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AANAkIAAgqQAAgFgBgDQgDgGgIAAQgIAAgEAIQgCAEAAAHIAAAlIgSAAIAAhGIASAAIAAALQADgGADgCQAGgFAIAAQALAAAHAGQAHAGAAANIAAAvg");
	this.shape_54.setTransform(113.075,21.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgIAxIAAhHIASAAIAABHgAgIgeIAAgSIASAAIAAASg");
	this.shape_55.setTransform(107.05,19.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgYAfQgIgHAAgLIATAAQABAEACADQADADAJAAQAFABAEgCQACgCAAgDQABgDgDgCQgDgBgPgFQgNgDgEgDQgFgEgBgJQABgKAHgHQAIgHAOAAQAMAAAJAGQAIAEABAOIgSAAQAAgEgCgCQgDgDgHAAQgGgBgCACQgDACAAADQAAADADABQADACAQAEQALACAFAFQAGAFgBAIQAAAKgIAHQgHAHgQAAQgQAAgJgHg");
	this.shape_56.setTransform(101.45,21.15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgYAfQgHgHgBgLIATAAQABAEACADQADADAIAAQAGABADgCQADgCAAgDQAAgDgCgCQgDgBgPgFQgNgDgFgDQgEgEAAgJQAAgKAHgHQAIgHAOAAQAMAAAJAGQAIAEABAOIgSAAQAAgEgCgCQgDgDgHAAQgFgBgDACQgDACAAADQAAADADABQADACAPAEQAMACAFAFQAGAFAAAIQgBAKgHAHQgIAHgQAAQgQAAgJgHg");
	this.shape_57.setTransform(94,21.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgbAbQgIgLgBgQQABgOAIgMQAJgLASAAQATAAAIALQAJAMAAAOQAAAQgJALQgIALgTAAQgSAAgJgLgAgMgPQgFAFAAAKQAAALAFAGQAFAGAHAAQAIAAAFgGQAEgGAAgLQAAgKgEgFQgFgGgIAAQgHAAgFAGg");
	this.shape_58.setTransform(86.2,21.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgUAkIAAhGIASAAIAAANQADgIAEgCQAFgFAIAAIABAAIACAAIAAATIgDAAIgDAAQgLAAgEAHQgBAFAAAIIAAAhg");
	this.shape_59.setTransform(79.825,21.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgfAlQgNgNAAgXQAAgXANgOQANgOAUAAQASAAAMAJQALAKACAOIgUAAQgCgKgKgEQgEgCgHAAQgKAAgIAJQgHAIgBARQAAASAJAHQAIAIAJAAQAKAAAHgGQAGgGACgKIgXAAIAAgPIApAAIAAAzIgOAAIgCgMQgFAHgFADQgIAFgLAAQgTAAgMgOg");
	this.shape_60.setTransform(71.5,19.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgGApQgDgDAAgHIAAgrIgKAAIAAgNIAKAAIAAgUIASAAIAAAUIALAAIAAANIgLAAIAAAlIABAGQABABAFAAIACAAIACgBIAAAOIgJABIgCAAQgKAAgFgFg");
	this.shape_61.setTransform(60.4,20.2023);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgaAgQgHgGABgKQgBgMALgGQAFgDALgBIAGgBIAGgCQAFgBAAgEQAAgEgEgCQgCgBgGgBQgGABgDACQgCADgBAEIgSAAQACgJAEgHQAHgIASgBQALAAAJAFQAKAFAAANIAAAfIAAAIQAAAFABABIACABIAAADIgUAAIgBgDIAAgFQgEAEgFADQgGAEgIAAQgJAAgGgGgAAHADIgFABIgDABIgJACQgEACAAAGQAAAFADACQADACAEAAQAEAAAFgDQAGgEAAgKIAAgGg");
	this.shape_62.setTransform(54.55,21.15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgGApQgDgDAAgHIAAgrIgKAAIAAgNIAKAAIAAgUIASAAIAAAUIALAAIAAANIgLAAIAAAlIABAGQAAABAHAAIABAAIACgBIAAAOIgJABIgCAAQgKAAgFgFg");
	this.shape_63.setTransform(44.75,20.2023);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgWAdQgLgIAAgUQAAgSAJgKQAKgKAOAAQAJAAAHAEQAHADAFAHQAEAGACAJIAAANIgwAAQABAKAFAFQAFACAEAAQAGABADgDIAEgGIATAAQgBAHgGAHQgJAKgRAAQgMAAgKgJgAAPgGQgBgIgEgEQgEgDgGgBQgGABgDADQgEAFAAAHIAcAAIAAAAg");
	this.shape_64.setTransform(38.85,21.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AAcAwIAAhAIAAgIIAAgIIgSBQIgTAAIgShQIAAAIIAAAIIAABAIgTAAIAAhfIAeAAIAQBLIAShLIAdAAIAABfg");
	this.shape_65.setTransform(29.625,19.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgXAdQgKgIAAgUQAAgSAJgKQAKgKAOAAQAJAAAHAEQAHADAFAHQAEAGACAJIAAANIgwAAQAAAKAHAFQADACAFAAQAGABAEgDIADgGIATAAQgBAHgFAHQgKAKgQAAQgNAAgLgJgAAOgGQAAgIgEgEQgEgDgGgBQgGABgDADQgEAFgBAHIAcAAIAAAAg");
	this.shape_66.setTransform(16.5,21.15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAPAwIgMg3IgDgTIgCATIgNA3IgSAAIgchfIAWAAIANA2IACAPIAEgPIAKg2IAUAAIAMA2IADAPIADgOIANg3IAVAAIgcBfg");
	this.shape_67.setTransform(6.7,19.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR11, new cjs.Rectangle(-1,13.1,151.7,60.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AADAHQADAAABgEIABgEIgFAAIAAgKIAKAAIAAAJQAAAEgDAFQgCAEgFABgAgMAHQAEAAABgEIAAgEIgFAAIAAgKIAKAAIAAAJQAAAEgCAFQgCAEgGABg");
	this.shape.setTransform(40.675,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAiIAAgKIAIAAIAAAKgAgBASIgDgdIAAgWIAIAAIAAAWIgBAdg");
	this.shape_1.setTransform(38,18.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPATQgGgGAAgMQAAgLAGgHQAGgIAKAAQAFAAAFACQAFADACAEQADAEAAAFIABAJIgjAAQABAIADAFQADAEAGAAQAGAAAEgEIADgGIAIAAQAAADgCADQgBADgDACQgDAEgGACIgGAAQgJAAgGgHgAAOgDQgBgFgCgDQgDgHgIABQgFAAgDADQgEAFAAAGIAaAAIAAAAg");
	this.shape_2.setTransform(33.825,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAVQgFgFgBgHIAIAAIACAGQAEAEAHAAQAFAAADgCQADgCABgEQAAgDgDgCIgHgCIgHgCQgFgBgEgBQgFgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgCgDgHAAQgFAAgCACQgDABAAADQABAEADACIAFACIAFABIAMADQAEADABAHQAAAHgGAEQgEAFgLAAQgKAAgEgFg");
	this.shape_3.setTransform(28.9,19.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAWQgEgEAAgHQAAgGAEgEQAEgDAHAAIAMgDQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgDQAAgEgDgCQgDgCgFAAQgHAAgCADQgCADAAAEIgIAAQAAgKAGgEQAGgDAHAAQAIAAAFADQAGAEAAAHIAAAbIAAACIACABIACAAIABgBIAAAHIgDABIgDAAQgEAAgCgEIgBgEQgDADgFADQgDACgGAAQgHAAgEgEgAAFABIgEABIgEAAIgHACQgEADAAAEQAAAEADACQACACAEAAQAEAAADgCQAHgDAAgIIAAgGIgEABg");
	this.shape_4.setTransform(24.075,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAiIAAgfIgCgHQgCgEgGAAQgEAAgFADQgDAEAAAJIAAAaIgJAAIAAhDIAJAAIAAAZIAFgFQADgDAGAAQAKAAAEAIQACAEAAAGIAAAgg");
	this.shape_5.setTransform(18.7,18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOATQgGgHAAgLQAAgLAGgIQAHgHAIAAQAJAAAFAEQAFAEABAKIgIAAQgBgFgCgDQgDgCgGAAQgHAAgDAHQgCAFAAAGQAAAIADAFQADAFAGAAQAFAAADgDQADgEABgFIAIAAQgBAKgGAEQgFAFgJAAQgJAAgFgHg");
	this.shape_6.setTransform(13.775,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAIAAIAAAJQABgDADgDQADgEAFAAIABAAIACAAIAAAJIgBAAIgCAAQgGAAgDAEQgDAEAAAFIAAAbg");
	this.shape_7.setTransform(10.125,19.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRASQgCgEAAgGIAAggIAJAAIAAAfIABAGQACAFAGAAQAHAAADgIQACgEAAgGIAAgYIAIAAIAAAwIgHAAIAAgIIgFAFQgEAEgFAAQgLAAgEgHg");
	this.shape_8.setTransform(5.65,19.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAjIAAhEIAIAAIAAAHQADgEADgBQAEgDAEAAQAJAAAGAHQAGAGAAAMQAAAPgJAHQgFAEgHAAQgFAAgEgCIgFgFIAAAZgAgLgSQgCAFAAAGQAAAHACACQADAIAIAAQAFAAAEgFQAEgEAAgJQAAgHgCgDQgDgJgIABQgIAAgDAIg");
	this.shape_9.setTransform(0.625,20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPATQgGgGAAgMQAAgLAGgHQAGgIAKAAQAFAAAFACQAFADACAEQADAEAAAFIABAJIgjAAQABAIADAFQADAEAGAAQAGAAAEgEIADgGIAIAAQAAADgCADQgBADgDACQgDAEgGACIgGAAQgJAAgGgHgAAOgDQgBgFgCgDQgDgHgIABQgFAAgDADQgEAFAAAGIAaAAIAAAAg");
	this.shape_10.setTransform(-7.325,19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_11.setTransform(-10.95,18.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAjIAAhEIAIAAIAAAHQADgEADgBQAEgDAEAAQAJAAAGAHQAGAGAAAMQAAAPgJAHQgFAEgHAAQgFAAgEgCIgFgFIAAAZgAgLgSQgCAFAAAGQAAAHACACQADAIAIAAQAFAAAEgFQAEgEAAgJQAAgHgCgDQgDgJgIABQgIAAgDAIg");
	this.shape_12.setTransform(-14.475,20.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAYAZIAAghQABgFgDgCQgDgCgDAAQgFAAgDAEQgDADgBAIIAAAbIgHAAIAAgfQAAgFgBgCQgCgEgGAAQgEAAgEAEQgEAEABAJIAAAZIgJAAIAAgwIAIAAIAAAHIAFgFQAEgDAGAAQAFAAAEADIADAFQADgEAEgCQADgCAFAAQAKAAADAHQACAEAAAHIAAAfg");
	this.shape_13.setTransform(-21.15,19.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAiIAAgwIAHAAIAAAwgAgDgXIAAgKIAHAAIAAAKg");
	this.shape_14.setTransform(-26.075,18.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAVQgFgFgBgHIAJAAIABAGQAEAEAGAAQAGAAADgCQAEgCAAgEQAAgDgEgCIgGgCIgGgCQgHgBgCgBQgGgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgDgDgGAAQgFAAgCACQgCABgBADQAAAEADACIAGACIAFABIAMADQAFADAAAHQgBAHgFAEQgEAFgLAAQgKAAgEgFg");
	this.shape_15.setTransform(-29.45,19.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPATQgGgGAAgMQAAgLAGgHQAGgIAKAAQAFAAAFACQAFADACAEQADAEAAAFIABAJIgjAAQABAIADAFQADAEAGAAQAGAAAEgEIADgGIAIAAQAAADgCADQgBADgDACQgDAEgGACIgGAAQgJAAgGgHgAAOgDQgBgFgCgDQgDgHgIABQgFAAgDADQgEAFAAAGIAaAAIAAAAg");
	this.shape_16.setTransform(-37.025,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAMAZIAAgeIgBgHQgDgFgFAAIgFABQgDABgCADQgCACgBADIgBAHIAAAZIgIAAIAAgwIAIAAIAAAHQAEgEADgCQAEgCAEAAQAKAAAEAHQACAEAAAIIAAAeg");
	this.shape_17.setTransform(-42.2,19.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQATQgGgHAAgLQAAgLAHgIQAGgHAJAAQAKAAAGAGQAHAHAAAMQAAAKgGAIQgGAIgLAAQgKAAgGgHgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_18.setTransform(-47.475,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAjIgCgBIAAgHIADAAIACAAIADAAIACgCIABgEIACgFIgSgyIAKAAIAMAoIANgoIAJAAIgHAWIgIAUQgHASgCAEQgDAFgHAAg");
	this.shape_19.setTransform(-54.95,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQATQgGgHAAgLQAAgLAHgIQAGgHAJAAQAKAAAGAGQAHAHAAAMQAAAKgGAIQgGAIgLAAQgKAAgGgHgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_20.setTransform(-59.975,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAsIgCgBIAAgHQAGAAABgBQAAgBAAgEIAAg2IAIAAIAAA3QAAAFgCADQgDAFgHAAgAAAghIAAgKIAIAAIAAAKg");
	this.shape_21.setTransform(-63.95,19.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALAZIAAgeIgBgHQgCgFgGAAIgDABQgEABgCADQgCACgBADIAAAHIAAAZIgJAAIAAgwIAIAAIAAAHQADgEAEgCQAEgCAEAAQALAAADAHQACAEAAAIIAAAeg");
	this.shape_22.setTransform(-67.2,19.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAiIAAhDIAwAAIAAAJIgnAAIAAAUIAkAAIAAAHIgkAAIAAAXIAoAAIAAAIg");
	this.shape_23.setTransform(-72.775,18.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_24.setTransform(-11.225,8.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAVQgFgFgBgHIAIAAIACAGQAEAEAHAAQAFAAADgCQADgCABgEQAAgDgDgCIgHgCIgHgCQgFgBgEgBQgFgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgDgDgGAAQgFAAgCACQgDABAAADQAAAEAEACIAFACIAFABIAMADQAEADABAHQAAAHgGAEQgEAFgLAAQgKAAgEgFg");
	this.shape_25.setTransform(-14.85,6.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAdQgCgDAAgFIAAgfIgHAAIAAgHIAHAAIAAgOIAIAAIAAAOIAIAAIAAAHIgIAAIAAAeQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAIADABIACAAIACAAIAAAGIgEABIgDAAQgFAAgCgDg");
	this.shape_26.setTransform(-18.55,5.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAWQgEgEAAgGQAAgHAEgEQAEgCAHgCIAMgBQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAIABgEQAAgEgDgCQgDgCgFAAQgHAAgCAEQgCACAAADIgIAAQAAgJAGgDQAGgEAHAAQAIAAAFAEQAGACAAAIIAAAbIAAACIACABIACAAIABgBIAAAGIgDABIgDAAQgEAAgCgCIgBgFQgDADgFADQgDACgGAAQgHAAgEgEgAAFABIgEABIgEABIgHACQgEABAAAGQAAADADACQACACAEAAQAEAAADgCQAHgDAAgIIAAgGIgEABg");
	this.shape_27.setTransform(-22.275,6.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMQAAgLAGgIQAGgHAKAAQAFAAAFADQAFACACAEQADAEAAAEIABALIgjAAQABAHADAFQADAEAGAAQAGAAAEgEIADgGIAIAAQAAADgCADQgBAEgDACQgDADgGABIgGABQgJAAgGgGgAAOgDQgBgGgCgCQgDgGgIgBQgFAAgDAFQgEAEAAAGIAaAAIAAAAg");
	this.shape_28.setTransform(-27.625,6.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgHIAHAAIADAGQADAEAHAAQAEAAAEgCQAEgCgBgEQAAgDgCgCIgIgCIgGgCQgFgBgEgBQgFgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgCgDgHAAQgFAAgCACQgCABAAADQAAAEADACIAFACIAEABIANADQAEADAAAHQAAAHgEAEQgGAFgKAAQgKAAgFgFg");
	this.shape_29.setTransform(-32.55,6.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAIAAIAAAJQABgDADgDQADgEAFAAIABAAIACAAIAAAJIgBAAIgCAAQgGAAgDAEQgDAEAAAFIAAAbg");
	this.shape_30.setTransform(-38.775,6.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRASQgBgEAAgGIAAggIAIAAIAAAfIABAGQACAFAGAAQAIAAADgIQABgEAAgGIAAgYIAIAAIAAAwIgIAAIAAgIIgDAFQgFAEgFAAQgLAAgEgHg");
	this.shape_31.setTransform(-43.25,6.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAUQgGgIAAgLQAAgMAHgHQAGgHAJAAQAKAAAGAGQAHAGAAANQAAALgGAHQgGAIgLAAQgKAAgGgGgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_32.setTransform(-48.475,6.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAiIgCAAIAAgIIADABIACABIADgCIACgCIABgDIADgFIgSgxIAJAAIAMAmIAOgmIAJAAIgIAVIgIATQgHAUgCAEQgDADgHAAg");
	this.shape_33.setTransform(-53.4,7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAKAiIgPgZIgGAGIAAATIgIAAIAAhDIAIAAIAAAmIAUgTIAKAAIgTARIAUAfg");
	this.shape_34.setTransform(-60.375,5.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOATQgGgHAAgKQAAgNAGgHQAHgHAIAAQAJAAAFAEQAFAEABAKIgIAAQgBgEgCgDQgDgEgGAAQgHAAgDAIQgCAFAAAHQAAAGADAGQADAFAGAAQAFAAADgEQADgDABgFIAIAAQgBAKgGAFQgFAEgJAAQgJAAgFgHg");
	this.shape_35.setTransform(-65.325,6.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAiIAAgwIAHAAIAAAwgAgDgXIAAgKIAHAAIAAAKg");
	this.shape_36.setTransform(-68.775,5.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAiIAAhDIAdAAQAJAAAFAFQAGAFAAAKQAAAIgFAFQgEAFgKAAIgVAAIAAAdgAgPgBIARAAQAGAAAEgDQAEgDAAgGQAAgIgGgCQgDgCgFAAIgRAAg");
	this.shape_37.setTransform(-72.75,5.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_38.setTransform(16.375,-3.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgHIAIAAIABAGQAEAEAGAAQAFAAAEgCQAEgCAAgEQgBgDgDgCIgHgCIgFgCQgHgBgCgBQgGgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgDgDgGAAQgFAAgCACQgCABgBADQAAAEADACIAGACIAFABIAMADQAFADgBAHQAAAHgEAEQgGAFgKAAQgKAAgFgFg");
	this.shape_39.setTransform(12.75,-5.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAKAYIgKglIgJAlIgIAAIgPgvIAJAAIAKAlIAJglIAJAAIAJAlIAKglIAIAAIgNAvg");
	this.shape_40.setTransform(6.95,-5.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAUQgGgIAAgLQAAgMAHgHQAGgHAJAAQAKAAAGAGQAHAGAAANQAAALgGAIQgGAHgLAAQgKAAgGgGgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_41.setTransform(0.925,-5.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAiIAAgfIgBgHQgCgEgGAAQgFAAgEADQgDAEAAAJIAAAaIgJAAIAAhDIAJAAIAAAZIAEgFQAEgDAFAAQAMAAADAIQACAEAAAGIAAAgg");
	this.shape_42.setTransform(-4.2,-6.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgHIAHAAIADAGQADAEAHAAQAEAAAEgCQAEgCgBgEQAAgDgCgCIgIgCIgGgCQgFgBgEgBQgFgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgCgDgHAAQgFAAgCACQgCABAAADQAAAEACACIAGACIAEABIANADQAEADAAAHQAAAHgEAEQgGAFgKAAQgKAAgFgFg");
	this.shape_43.setTransform(-9.15,-5.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPAdQgGgFgBgKIAJAAQABAIAFACQADACAEAAQAHAAADgFQAEgFAAgFQAAgHgFgEQgEgDgFAAQgEAAgDACQgDABgCACIgHAAIAFgiIAhAAIAAAIIgbAAIgDASIAEgCQAEgCAEAAQAJAAAGAGQAHAEAAAKQAAAJgGAHQgGAHgMAAQgIAAgGgEg");
	this.shape_44.setTransform(-16.725,-6.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAIAAIAAAJQABgDADgDQADgEAFAAIABAAIACAAIAAAJIgBAAIgCAAQgGAAgDAEQgDAEAAAFIAAAbg");
	this.shape_45.setTransform(-23.225,-5.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAUQgGgIAAgLQAAgMAHgHQAGgHAJAAQAKAAAGAGQAHAGAAANQAAALgGAIQgGAHgLAAQgKAAgGgGgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_46.setTransform(-27.725,-5.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgRAbQgFgGAAgJIAJAAQAAAGACADQADAFAIAAQAGAAAEgDQAEgDAAgGQAAgHgEgCQgEgEgHAAIgBAAIgCAAIAAgFIACAAIACAAQAEAAADgCQAFgDAAgGQAAgFgEgCQgDgEgFAAQgHABgDAFQgCADAAAGIgIAAQAAgHADgGQAFgJAMAAQAJAAAGAFQAFAEAAAIQAAAHgDADQgCADgDABQAFABADADQADAFAAAGQAAAJgGAGQgGAGgLAAQgLAAgGgHg");
	this.shape_47.setTransform(-35.525,-6.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgMQAAgLAGgIQAGgHAKAAQAFAAAFADQAFACACAEQADAEAAAFIABAKIgjAAQABAHADAEQADAFAGAAQAGAAAEgEIADgGIAIAAQAAADgCADQgBAEgDACQgDADgGABIgGABQgJAAgGgGgAAOgDQgBgGgCgDQgDgFgIgBQgFABgDAEQgEADAAAHIAaAAIAAAAg");
	this.shape_48.setTransform(-43.225,-5.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAVQgFgFgBgHIAIAAIACAGQAEAEAHAAQAFAAADgCQADgCABgEQAAgDgDgCIgHgCIgHgCQgFgBgDgBQgGgEAAgGQAAgHAFgEQAFgEAIAAQALAAAFAGQADAEAAAFIgIAAQAAgDgCgCQgDgDgGAAQgFAAgCACQgDABAAADQAAAEAEACIAFACIAFABIAMADQAEADABAHQAAAHgGAEQgEAFgLAAQgKAAgEgFg");
	this.shape_49.setTransform(-48.15,-5.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgQAUQgGgIAAgLQAAgMAHgHQAGgHAJAAQAKAAAGAGQAHAGAAANQAAALgGAIQgGAHgLAAQgKAAgGgGgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_50.setTransform(-53.225,-5.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAUQgGgIAAgLQAAgMAHgHQAGgHAJAAQAKAAAGAGQAHAGAAANQAAALgGAIQgGAHgLAAQgKAAgGgGgAgKgMQgDAFAAAIQAAAIADAFQAEAFAGAAQAIAAADgGQADgHAAgGQAAgHgCgEQgDgHgJAAQgGAAgEAGg");
	this.shape_51.setTransform(-58.425,-5.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAiIAAgfIgBgHQgDgEgGAAQgEAAgEADQgFAEAAAJIAAAaIgIAAIAAhDIAIAAIAAAZIAGgFQADgDAGAAQALAAADAIQACAEAAAGIAAAgg");
	this.shape_52.setTransform(-63.55,-6.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgSAcQgLgJAAgTQAAgPAIgJQAJgLANAAQANAAAHAHQAHAHABAJIgJAAQgBgHgFgEQgEgEgIAAQgJAAgGAHQgGAHAAAOQAAAMAFAHQAGAIAJAAQAKAAAGgIQACgEACgHIAJAAQgCALgGAHQgIAJgOAAQgKAAgIgIg");
	this.shape_53.setTransform(-69.575,-6.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AADAMIAAgJQAAgFACgEQACgEAGgBIAAAEQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgCADAAACIAAAAIABABIAFAAIAAAKgAgMAMIAAgJQAAgGADgEQADgDAEgBIAAAEQgDABgBAEIgBADIAAAAIAAABIAFAAIAAAKg");
	this.shape_54.setTransform(-74.425,-9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAFAIQAFgBABgEIABgDIgIAAIAAgNIAPAAIAAAKQgBAGgDAFQgDAEgHACgAgRAIQAEgBADgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIgHAAIAAgNIANAAIAAAKQABAHgEAEQgEAEgGACg");
	this.shape_55.setTransform(70.5,-21.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgGAkIAAgOIANAAIAAAOgAgDAQIgEghIAAgSIAPAAIAAASIgEAhg");
	this.shape_56.setTransform(66.475,-19.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgRAXQgGgFAAgJIAOAAQAAAEACACQACADAHAAIAGgBQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgOgEQgJgCgEgDQgDgEgBgFQABgIAFgGQAGgEAKAAQAJAAAHADQAGAFABAJIgOAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgDgGAAQgEAAgBABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIANADQAJACAEADQADAEAAAGQABAIgGAGQgGAEgMAAQgMAAgGgFg");
	this.shape_57.setTransform(61.75,-18.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgRAXQgGgFgBgJIAPAAQAAAEACACQADADAFAAIAHgBQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgOgEQgJgCgEgDQgEgEAAgFQAAgIAGgGQAGgEAKAAQAKAAAGADQAHAFAAAJIgOAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgCgDgGAAQgEAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAOADQAJACADADQAFAEAAAGQAAAIgGAGQgGAEgNAAQgLAAgGgFg");
	this.shape_58.setTransform(56.2,-18.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgTAYQgFgEAAgIQAAgJAHgEQAFgCAIgBIAEgBIAFgBQADgBAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgGgBQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIgNAAQAAgHADgEQAGgHANAAQAIAAAIADQAGAEAAAKIAAAXIAAAGIABAEIACACIAAACIgPAAIgBgDIgBgEIgGAGQgDACgHAAQgHAAgEgEgAAGACIgFABIgCABIgGABQgDACAAAEQAAAEACACQACABADAAQAEAAADgCQAEgDAAgHIAAgFg");
	this.shape_59.setTransform(50.65,-18.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgZAmIAAhKIAOAAIAAAIIAFgFQAEgEAGAAQAJAAAHAHQAGAHAAANQAAAOgGAHQgHAIgKAAQgFgBgEgDIgFgFIAAAcgAgKgSQgBAFAAAGQgBAIAGADQADADADAAQAGAAACgFQAEgEAAgHQAAgGgEgFQgCgFgGABQgHAAgDAGg");
	this.shape_60.setTransform(44.9,-17.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AAJAbIgJgQIgJAQIgRAAIASgbIgRgaIARAAIAIAQIAJgQIAQAAIgRAaIASAbg");
	this.shape_61.setTransform(38.95,-18.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgHAKAAQAHgBAFADQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgCIACgEIAPAAQgBAFgEAEQgHAJgNgBQgJABgIgIgAALgFQgBgFgDgDQgDgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_62.setTransform(33.325,-18.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_63.setTransform(29.2,-19.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgZAkIAAhHIAzAAIAAANIgkAAIAAAQIAfAAIAAAMIgfAAIAAAeg");
	this.shape_64.setTransform(24.975,-19.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AAIAbIgIgmIgHAmIgPAAIgPg1IAPAAIAIAmIAIgmIANAAIAIAmIAJgmIAOAAIgPA1g");
	this.shape_65.setTransform(14.875,-18.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgHAKAAQAHgBAFADQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgCIACgEIAPAAQgBAFgEAEQgHAJgNgBQgJABgIgIgAALgFQgBgFgDgDQgDgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_66.setTransform(8.225,-18.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAKAcIAAggQAAgFgBgBQgCgFgGAAQgGAAgDAHQgBACAAAGIAAAcIgOAAIAAg1IANAAIAAAIQADgEADgCQAEgEAGABQAIgBAFAFQAFAEAAALIAAAjg");
	this.shape_67.setTransform(2.375,-18.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgOAcIAAg1IANAAIAAAJIAEgHQAEgEAGABIABAAIABAAIAAAOIgCAAIgCAAQgIAAgDAFQAAADAAAGIAAAag");
	this.shape_68.setTransform(-5.2,-18.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgVATQgCgFAAgJIAAgfIAOAAIAAAfIABAHQACAEAGAAQAGAAADgGQABgDAAgFIAAgcIAOAAIAAA0IgNAAIAAgHIgBABIgCACQgDADgEABIgGABQgMAAgEgIg");
	this.shape_69.setTransform(-10.525,-18.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgUAUQgGgIgBgMQABgLAGgIQAIgJAMAAQAOAAAHAJQAHAIAAALQAAAMgHAIQgHAJgOAAQgMAAgIgJgAgJgLQgDAEAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgEQgEgFgGAAQgFAAgEAFg");
	this.shape_70.setTransform(-16.65,-18.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgEAfQgDgCABgFIAAggIgIAAIAAgKIAIAAIAAgPIAMAAIAAAPIAJAAIAAAKIgJAAIAAAbIABAEIAFABIABAAIACAAIAAAKIgGAAIgDAAQgHAAgDgDg");
	this.shape_71.setTransform(-24.2,-19.2219);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgVATQgCgFAAgJIAAgfIAOAAIAAAfIABAHQACAEAGAAQAGAAADgGQABgDAAgFIAAgcIAOAAIAAA0IgNAAIAAgHIgBABIgCACQgDADgEABIgGABQgMAAgEgIg");
	this.shape_72.setTransform(-28.925,-18.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgTAUQgIgIABgMQgBgLAIgIQAGgJANAAQAOAAAHAJQAGAIAAALQAAAMgGAIQgHAJgOAAQgNAAgGgJgAgJgLQgCAEAAAHQAAAIACAEQAEAFAFAAQAGAAADgFQAEgEAAgIQAAgHgEgEQgDgFgGAAQgFAAgEAFg");
	this.shape_73.setTransform(-35.05,-18.525);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgGAjIgFgGIAAAHIgOAAIAAhIIAOAAIAAAaQADgEADgCQADgDAGABQAKgBAGAJQAGAHAAALQAAANgGAHQgGAJgKAAQgGAAgEgCgAgKAAQgBAEAAAFQAAAHACAFQAEAEAFABQAFgBADgEQAEgFAAgHQAAgFgCgEQgDgGgHAAQgHAAgDAGg");
	this.shape_74.setTransform(-41.05,-19.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgUAYQgEgEAAgIQAAgJAHgEQAFgCAIgBIAEgBIAFgBQADgBAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgGgBQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIgNAAQAAgHADgEQAGgHANAAQAIAAAHADQAHAEAAAKIAAAXIAAAGIABAEIACACIAAACIgPAAIgBgDIgBgEIgGAGQgDACgHAAQgHAAgFgEgAAGACIgFABIgCABIgGABQgDACAAAEQAAAEACACQACABADAAQAEAAADgCQAEgDAAgHIAAgFg");
	this.shape_75.setTransform(-47,-18.525);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAIAkIgMgXIgGAGIAAARIgNAAIAAhHIANAAIAAAmIAQgTIASAAIgSATIASAhg");
	this.shape_76.setTransform(-55.1,-19.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgRAXQgGgFgBgJIAPAAQAAAEACACQADADAGAAIAGgBQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgOgEQgJgCgEgDQgDgEgBgFQABgIAFgGQAGgEAKAAQAJAAAHADQAGAFABAJIgOAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgDgDgFAAQgEAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAOADQAJACADADQAEAEAAAGQABAIgGAGQgGAEgMAAQgMAAgGgFg");
	this.shape_77.setTransform(-61,-18.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AASAkIgFgPIgZAAIgFAPIgQAAIAahHIAQAAIAZBHgAAJAJIgJgcIgIAcIARAAg");
	this.shape_78.setTransform(-67.325,-19.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAEAOIAAgLQAAgGAFgEQADgFAHgBIAAAFQgFACgDAEIAAADIAIAAIAAANgAgRAOIAAgLQgBgGAEgEQADgFAHgBIAAAFQgFACgBAEIgCADIAIAAIAAANg");
	this.shape_79.setTransform(-73.5,-21.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-25.5,154.8,51.1);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcAdIAAgmQAAgGgDgCQgDgCgEAAQgFAAgEAEQgEADAAAJIAAAgIgJAAIAAgkQAAgGgBgCQgCgEgGAAQgGAAgEAEQgEAEAAALIAAAdIgKAAIAAg3IAKAAIAAAIQADgFADgCQAEgDAGAAQAHAAAEAEIADAFQADgEAFgDQAEgCAFAAQAMAAAEAIQACAFAAAHIAAAlg");
	this.shape.setTransform(131.175,69.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAKAAIAAAIQACgEAEgCQAFgDAFAAQAKAAAGAIQAHAGAAAOQAAASgKAIQgGAEgIAAQgFAAgFgDIgFgFIAAAdgAgNgVQgCAGAAAHQAAAHACAEQAEAIAJAAQAGAAAFgFQAEgGAAgKQAAgHgCgEQgEgKgJAAQgJAAgEAKg");
	this.shape_1.setTransform(123.85,70.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgMADgIQAHgRAPAAQAOgBAHAMQAFAJAAARQAAAOgFAKQgGAOgPAAQgNABgGgMgAgLgVQgEAHAAAPQAAAMADAGQAEALAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_2.setTransform(114.775,68.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgMADgIQAHgRAPAAQAOgBAHAMQAFAJAAARQAAAOgFAKQgGAOgPAAQgNABgGgMgAgLgVQgEAHAAAPQAAAMADAGQAEALAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_3.setTransform(108.875,68.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAcIAAgMIAKAAIAAAMgAgFgPIAAgMIAKAAIAAAMg");
	this.shape_4.setTransform(104.7,69.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAlQADgVAMgVQAHgMAHgJIgoAAIAAgKIAzAAIAAAIIgKANQgGAIgEAKQgFAJgBAJIgEAQg");
	this.shape_5.setTransform(100,68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAIAAIAABNg");
	this.shape_6.setTransform(92.5,68.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgTQAAgNAEgKQAGgTARAAQAMAAAFAHQAFAGAAAHIgJAAQgBgEgCgDQgDgEgHAAQgHAAgFAHQgEAHgBAOQADgFAFgCQAFgCAEAAQAKAAAHAGQAHAFAAAMQAAAKgHAIQgHAIgMAAQgJAAgIgIgAgJABQgFAEAAAIQAAAIAEAEQAFAFAGAAQAHAAAEgFQAEgFAAgHQAAgFgDgGQgEgEgIAAQgGAAgEADg");
	this.shape_7.setTransform(85.375,68.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgHALgGIAJgGQAGgDADgDQAFgEgBgGQAAgGgDgEQgEgEgHAAQgJAAgEAHQgCAEAAAHIgJAAQAAgKADgGQAHgLAOAAQANAAAGAHQAGAHAAAJQAAAJgGAFQgEAEgKAFIgGAEIgIAGQgFAEgCAGIApAAIAAAJg");
	this.shape_8.setTransform(79.4,68.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgMADgIQAHgRAPAAQAOgBAHAMQAFAJAAARQAAAOgFAKQgGAOgPAAQgNABgGgMgAgLgVQgEAHAAAPQAAAMADAGQAEALAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_9.setTransform(73.425,68.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAmQAAgKAEgHQAEgHAKgGIAJgGQAGgDADgDQAFgEgBgGQAAgGgDgEQgFgEgGAAQgJAAgEAHQgBAEAAAHIgKAAQAAgKADgGQAHgLAOAAQANAAAGAHQAGAHAAAJQAAAJgGAFQgEAEgKAFIgGAEIgIAGQgFAEgBAGIAnAAIAAAJg");
	this.shape_10.setTransform(67.5,68.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAJQADgBABgEIAAgEIAAgBIAAAAIgEAAIAAgMIAKAAIAAALQgBAFgCAFQgDAFgEABg");
	this.shape_11.setTransform(60.1,72.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAgQgGgIAAgKIAKAAQAAAHACADQAEAGAJAAQAHAAAFgEQAEgEAAgGQAAgIgFgDQgEgDgIAAIgCAAIgCAAIAAgHIADAAIACAAQAEAAAEgCQAGgDAAgHQAAgGgEgDQgEgDgGAAQgIAAgEAGQgCAEAAAGIgJAAQAAgIADgGQAGgLAOAAQALAAAGAGQAGAFAAAJQAAAHgDAFIgGAEQAGABADAEQADAFAAAGQAAALgHAHQgHAHgMAAQgNAAgGgHg");
	this.shape_12.setTransform(55.575,68.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgHALgGIAJgGQAGgDADgDQAFgEgBgGQAAgGgDgEQgEgEgHAAQgJAAgEAHQgCAEAAAHIgKAAQABgKADgGQAHgLAOAAQANAAAGAHQAGAHAAAJQAAAJgGAFQgEAEgKAFIgGAEIgIAGQgFAEgBAGIAoAAIAAAJg");
	this.shape_13.setTransform(49.7,68.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAkQgGgEgBgIIAKAAQAAAEADACQADADAGAAQAKgBAEgHQACgFgBgMQgCAFgEACQgEACgGAAQgJAAgHgGQgHgHAAgOQAAgOAHgIQAHgHAKAAQAGAAAEACIAGAGIAAgHIAJAAIAAAyQAAALgEAGQgFAMgQAAQgJgBgGgEgAgMgWQgCAFAAAIQAAAJAEAFQAEAEAGAAQAJAAAFgJQACgEAAgHQAAgKgEgGQgFgEgGAAQgJAAgEAJg");
	this.shape_14.setTransform(40.625,70.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgHIAAglIAKAAIAAAkIABAHQACAFAHAAQAJAAADgIQACgFAAgHIAAgcIAKAAIAAA3IgJAAIAAgIIgFAFQgGAFgGAAQgLAAgFgIg");
	this.shape_15.setTransform(34.8,69.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAmIgIgWIgdAAIgIAWIgLAAIAdhLIAKAAIAcBLgAAMAHIgMghIgMAhIAYAAg");
	this.shape_16.setTransform(28.35,68.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAJQADgBABgEIAAgEIAAgBIAAAAIgEAAIAAgMIAKAAIAAALQgBAFgCAFQgCAFgFABg");
	this.shape_17.setTransform(20.85,72.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAdIAAgjQAAgFgBgDQgDgFgGAAIgFAAQgEACgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAFAAQALAAAFAJQACAEAAAJIAAAjg");
	this.shape_18.setTransform(16.425,69.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgHIAAglIAKAAIAAAkIABAHQACAFAHAAQAJAAADgIQACgFAAgHIAAgcIAKAAIAAA3IgJAAIAAgIIgFAFQgFAFgHAAQgLAAgFgIg");
	this.shape_19.setTransform(10.4,69.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAhQgIgHAAgNIAKAAQABAHACAEQAFAIALAAQAHAAAEgCQAJgDAAgJQAAgGgEgDQgEgCgIgCIgJgDQgKgCgEgCQgHgEAAgKQAAgKAHgHQAHgHAMAAQAMAAAHAGQAJAGAAANIgKAAQAAgGgDgEQgFgGgKAAQgIAAgEAEQgFAEAAAFQABAGAFACQACACAKADIALACQAHACAEACQAHAFAAALQAAAMgJAGQgJAGgMAAQgNAAgIgIg");
	this.shape_20.setTransform(3.85,68.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_21.setTransform(89.025,53.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAZQgGgFAAgHQABgIAEgEQAFgDAIgBIAOgCQADgBABgCIABgEQAAgEgDgDQgEgCgFAAQgHAAgDAEQgDACAAAFIgJAAQAAgLAHgEQAHgEAIAAQAJAAAGAEQAGAEAAAIIAAAfIABACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIABAAIACAAIAAAHIgEABIgDAAQgFAAgCgEQgBgBgBgEQgDAEgFADQgFADgGAAQgIAAgEgFgAAHABIgGABIgFABIgHACQgFACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgEABg");
	this.shape_22.setTransform(85,54.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAcIgVg3IALAAIAOAsIAPgsIALAAIgVA3g");
	this.shape_23.setTransform(79.2,54.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAnIAAg3IAJAAIAAA3gAgEgbIAAgLIAJAAIAAALg");
	this.shape_24.setTransform(75.325,53.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAcIgVg3IALAAIAOAsIAQgsIAKAAIgVA3g");
	this.shape_25.setTransform(71.4,54.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgNQAAgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABAMIgoAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQADgDABgEIAJAAIgCAHIgFAGQgFAEgFACIgIABQgKAAgHgIgAAQgEQgBgGgBgEQgFgGgJAAQgFAAgEAEQgEAFgBAHIAeAAIAAAAg");
	this.shape_26.setTransform(65.75,54.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAnIgBgDIgBgGIAAgNQgBgIgFgCQgDgBgGgBIgWAAIAAAiIgLAAIAAhNIAiAAQAJABAGACQALAFAAANQAAAHgDAFQgEAEgEACQAEACACACQADADAAAHIABAKIAAAHQABAEACABIAAACgAgUgDIAXAAQAHABADgDQAFgDAAgIQAAgIgGgDQgDgBgGgBIgXAAg");
	this.shape_27.setTransform(59.15,53.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgHAAgEAFQgDAEAAAGIAAAgg");
	this.shape_28.setTransform(50.625,54.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgNQAAgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABAMIgoAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQADgDABgEIAJAAIgCAHIgFAGQgFAEgFACIgIABQgKAAgHgIgAAQgEQgBgGgBgEQgFgGgJAAQgFAAgEAEQgEAFgBAHIAeAAIAAAAg");
	this.shape_29.setTransform(45.5,54.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAhQgCgEAAgFIAAgkIgIAAIAAgHIAIAAIAAgQIAIAAIAAAQIAJAAIAAAHIgJAAIAAAjQAAABAAABQAAABABAAQAAABAAAAQABAAAAABIAEAAIABAAIACAAIAAAIIgDAAIgEABQgGgBgCgDg");
	this.shape_30.setTransform(41.075,53.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAZQgFgFgBgHQAAgIAFgEQAFgDAIgBIAOgCQADgBACgCIAAgEQAAgEgEgDQgDgCgFAAQgIAAgDAEQgCACAAAFIgJAAQABgLAGgEQAGgEAJAAQAJAAAGAEQAGAEAAAIIAAAfIABACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIABAAIABAAIAAAHIgDABIgDAAQgFAAgCgEQgCgBAAgEQgCAEgGADQgFADgGAAQgIAAgEgFgAAGABIgFABIgEABIgJACQgEACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgFABg");
	this.shape_31.setTransform(36.8,54.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALAcIgLgrIgKArIgKAAIgQg3IAKAAIALArIALgrIAJAAIALArIAMgrIAJAAIgQA3g");
	this.shape_32.setTransform(29.775,54.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgHAAgEAFQgDAEAAAGIAAAgg");
	this.shape_33.setTransform(24.475,54.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAZQgEgFAAgHQgBgIAFgEQAFgDAIgBIAOgCQADgBACgCIAAgEQAAgEgDgDQgEgCgFAAQgHAAgEAEQgBACgBAFIgJAAQABgLAGgEQAGgEAJAAQAJAAAGAEQAGAEAAAIIAAAfIABACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIACAAIACAAIAAAHIgEABIgDAAQgFAAgCgEQgBgBgBgEQgDAEgFADQgEADgHAAQgIAAgFgFgAAGABIgFABIgFABIgIACQgEACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgFABg");
	this.shape_34.setTransform(19.55,54.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAHgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQACgDABgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgEgGgKAAQgFAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_35.setTransform(13.4,54.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_36.setTransform(9.275,53.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAgQgMgKAAgWQAAgRAJgLQAKgLAQAAQAOAAAIAHQAIAIABAKIgKAAQgCgIgFgFQgFgDgJAAQgLgBgGAJQgHAHAAAQQAAANAGAJQAGAIALABQAMAAAGgJQADgFACgIIAKAAQgCAMgHAJQgJAKgQAAQgMAAgJgJg");
	this.shape_37.setTransform(4.2,53.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgNQAAgNAIgIQAHgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQACgDACgEIAJAAIgCAHIgFAGQgFAEgGACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgFgGgJAAQgFAAgFAEQgDAFgBAHIAeAAIAAAAg");
	this.shape_38.setTransform(107.35,39.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRAWQgGgIAAgMQAAgOAHgIQAIgJAJAAQAKAAAGAFQAGAFABALIgJAAQgBgFgDgEQgDgDgHAAQgHAAgEAJQgDAFAAAIQAAAIAEAGQADAGAHAAQAGAAADgEQADgDACgHIAJAAQgCAMgFAFQgHAFgKAAQgKAAgHgIg");
	this.shape_39.setTransform(101.75,39.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANAdIAAgjQAAgFgBgDQgDgFgGAAIgFAAQgEACgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAFAAQALAAAFAJQACAEAAAJIAAAjg");
	this.shape_40.setTransform(96.125,39.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQAGAAAFADQAGADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgDAHIgEAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQgBgGgCgEQgEgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_41.setTransform(90.1,39.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRAgQgHgIAAgNQAAgLAGgJQAHgJALAAQAGAAAEACIAGAGIAAgdIAJAAIAABNIgJAAIAAgIQgDAFgEACQgFADgFAAQgJAAgHgIgAgJgFQgFAFAAAKQAAAJAEAGQAEAHAHAAQAHAAAEgGQAEgGAAgKQAAgKgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_42.setTransform(84.025,38.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAHgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQACgDABgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgEgGgKAAQgFAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_43.setTransform(78.2,39.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgNQAAgNAIgIQAHgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQAEAGAGAAQAIAAAEgFQACgDACgEIAJAAIgCAHIgFAGQgFAEgGACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgFgGgJAAQgFAAgFAEQgDAFgBAHIAeAAIAAAAg");
	this.shape_44.setTransform(72.25,39.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgHAAgEAFQgDAEAAAGIAAAgg");
	this.shape_45.setTransform(67.875,39.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAgQgMgKAAgWQAAgRAJgLQAKgMAQAAQAOABAIAHQAIAHABALIgKAAQgCgIgFgEQgFgFgJAAQgLAAgGAJQgHAIAAAPQAAANAGAJQAHAIAKAAQAMABAGgKQADgEACgIIAKAAQgCAMgHAJQgJAKgQgBQgMABgJgJg");
	this.shape_46.setTransform(61.9,38.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgPAkQgGgEgBgIIAKAAQAAADADACQADAEAGAAQAKAAAEgIQACgEgBgMQgCAEgEACQgEACgGAAQgJAAgHgHQgHgGAAgNQAAgPAHgIQAHgIAKABQAGAAAEADIAGAFIAAgHIAJAAIAAAyQAAAKgEAHQgFAMgQAAQgJAAgGgFgAgMgWQgCAFAAAIQAAAJAEAFQAEAEAGAAQAJABAFgKQACgEAAgHQAAgLgEgFQgFgEgGgBQgJAAgEAKg");
	this.shape_47.setTransform(51.875,41);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AANAdIAAgjQAAgFgBgDQgDgFgGAAIgFAAQgEACgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAFAAQALAAAFAJQACAEAAAJIAAAjg");
	this.shape_48.setTransform(46.175,39.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAnIAAg3IAJAAIAAA3gAgEgbIAAgLIAJAAIAAALg");
	this.shape_49.setTransform(41.975,38.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgCAhQgCgDAAgGIAAgkIgIAAIAAgHIAIAAIAAgQIAIAAIAAAQIAJAAIAAAHIgJAAIAAAkQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIAEAAIABAAIACAAIAAAIIgDAAIgEAAQgGAAgCgDg");
	this.shape_50.setTransform(39.275,39.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAZQgFgFgBgHQAAgIAFgEQAFgDAIgBIAOgCQADgBACgCIAAgEQAAgEgEgDQgDgCgFAAQgIAAgDAEQgCACAAAFIgJAAQABgLAGgEQAGgEAJAAQAJAAAGAEQAGAEAAAIIAAAfIABACIADABIABAAIABAAIAAAHIgDABIgDAAQgFAAgCgEQgCgBAAgEQgCAEgGADQgFADgGAAQgIAAgEgFgAAGABIgFABIgEABIgJACQgEACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgFABg");
	this.shape_51.setTransform(35,39.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgHAAgEAFQgDAEAAAGIAAAgg");
	this.shape_52.setTransform(30.425,39.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJAkIgGgFIAAAHIgJAAIAAhNIAJAAIAAAcQADgEAFgCQAEgCAEAAQALAAAGAHQAHAIAAANQAAANgGAJQgHAJgLAAQgGAAgEgEgAgKgGQgFAFAAAKQAAAIACAFQAEAJAJAAQAHAAAEgGQAEgGAAgKQAAgJgEgFQgEgFgHAAQgFAAgFAEg");
	this.shape_53.setTransform(25.5,38.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAIgJAKAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgFgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_54.setTransform(19.35,39.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_55.setTransform(15.225,38.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgRAWQgHgIAAgNQAAgNAHgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABAMIgoAAQAAAIAEAFQADAGAIAAQAHAAAEgFQACgDABgEIAKAAIgDAHIgEAGQgEAEgGACIgIABQgKAAgHgIgAAQgEQgBgGgCgEQgEgGgIAAQgGAAgEAEQgFAFAAAHIAeAAIAAAAg");
	this.shape_56.setTransform(11,39.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgVAgQgMgKAAgWQAAgRAJgLQAKgMAQAAQAOABAIAHQAIAHABALIgKAAQgCgIgFgEQgFgFgJAAQgLAAgGAJQgHAIAAAPQAAANAGAJQAGAIALAAQAMABAGgKQADgEACgIIAKAAQgCAMgHAJQgJAKgQgBQgMABgJgJg");
	this.shape_57.setTransform(4.2,38.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgXAdQgKgJAAgUQAAgRAKgKQAJgKAOAAQAJAAAHADQAHAEAFAHQAEAHABAIIABANIgwAAQAAALAHAEQAEACAEABQAGAAAEgEIADgEIATAAQgBAGgFAGQgKALgQAAQgNAAgLgJgAAOgHQAAgHgEgEQgEgDgGAAQgFAAgEADQgDAFgCAGIAcAAIAAAAg");
	this.shape_58.setTransform(132.95,23.65);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgXAcQgJgLAAgQQAAgRAJgLQAJgKAPAAQANAAAJAGQAJAGABAPIgTAAQAAgEgDgDQgDgEgGAAQgJAAgEAJQgBAFAAAHQAAAIABAFQAEAJAIAAQAGAAAEgDQACgEABgGIATAAQgBAJgGAHQgIANgRAAQgRAAgHgKg");
	this.shape_59.setTransform(125.55,23.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AANAkIAAgqQAAgGgBgDQgDgFgIAAQgIAAgEAIQgCAEAAAHIAAAlIgSAAIAAhGIASAAIAAAKQADgFADgCQAGgFAIAAQALABAHAFQAHAGAAAOIAAAug");
	this.shape_60.setTransform(117.725,23.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgXAdQgKgJAAgUQAAgRAJgKQAKgKAOAAQAJAAAHADQAHAEAFAHQAEAHACAIIAAANIgwAAQABALAFAEQAEACAFABQAGAAADgEIAEgEIATAAQgBAGgFAGQgKALgRAAQgMAAgLgJgAAPgHQgBgHgEgEQgEgDgGAAQgFAAgEADQgDAFgCAGIAdAAIAAAAg");
	this.shape_61.setTransform(109.85,23.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgaAnQgIgKAAgQQAAgRAIgKQAJgLAOAAQAGAAAFADQAEADAEAFIAAgiIATAAIAABfIgSAAIAAgKQgFAHgEADQgFACgHAAQgMAAgKgKgAgKgCQgEAFgBAJQABAKAEAGQADAGAHAAQAIAAAEgGQAEgGABgJQAAgNgIgFQgDgEgGAAQgHAAgDAHg");
	this.shape_62.setTransform(101.85,22.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgWAdQgLgJAAgUQAAgRAJgKQAKgKAOAAQAJAAAHADQAHAEAFAHQAEAHACAIIAAANIgwAAQABALAFAEQAFACAEABQAGAAADgEIAEgEIATAAQgBAGgGAGQgJALgRAAQgMAAgKgJgAAPgHQgBgHgEgEQgEgDgGAAQgGAAgDADQgEAFAAAGIAcAAIAAAAg");
	this.shape_63.setTransform(94.2,23.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgWAdQgLgJAAgUQAAgRAKgKQAJgKAOAAQAJAAAHADQAHAEAFAHQAEAHABAIIABANIgwAAQAAALAGAEQAFACAEABQAGAAAEgEIADgEIATAAQgBAGgGAGQgJALgRAAQgMAAgKgJgAAPgHQgBgHgEgEQgEgDgGAAQgGAAgDADQgDAFgBAGIAcAAIAAAAg");
	this.shape_64.setTransform(86.75,23.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgUAkIAAhGIASAAIAAANQADgIAEgCQAFgFAIAAIABAAIACAAIAAATIgDAAIgDAAQgLAAgEAIQgBAEAAAHIAAAig");
	this.shape_65.setTransform(80.775,23.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgeAmQgMgOAAgYQAAgYAOgOQAMgMAQABQAZgBALARQAHAIAAAKIgUAAQgCgIgDgDQgGgHgLABQgJAAgHAJQgHAIABAQQAAAQAGAIQAHAIAJAAQALAAAFgHQAEgEACgHIAUAAQgDAQgLAKQgKAKgRAAQgUAAgMgNg");
	this.shape_66.setTransform(73.05,22.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgXAuQgIgGgBgKIAUAAQABADACABQADADAGAAQAKAAADgHQADgEAAgKIAAgFQgDAFgDACQgFAEgJAAQgNAAgIgKQgJgJABgQQgBgQAJgLQAHgKAPAAQAEAAAEABQAHADAEAIIAAgLIATAAIAABDQgBAOgFAHQgHAMgWAAQgNAAgKgFgAgNgZQgCAFAAAHQABAGACAFQADAIAKAAQAGAAAEgFQAFgEAAgKQAAgLgEgFQgFgFgHAAQgIAAgFAJg");
	this.shape_67.setTransform(60.15,25.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AANAkIAAgqQAAgGgBgDQgDgFgIAAQgIAAgEAIQgCAEAAAHIAAAlIgSAAIAAhGIASAAIAAAKQADgFADgCQAGgFAIAAQALABAHAFQAHAGAAAOIAAAug");
	this.shape_68.setTransform(52.175,23.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgJAxIAAhHIASAAIAABHgAgJgeIAAgSIASAAIAAASg");
	this.shape_69.setTransform(46.15,22.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgGApQgDgDAAgHIAAgrIgKAAIAAgNIAKAAIAAgUIARAAIAAAUIAMAAIAAANIgMAAIAAAlIABAGQACABAGAAIABAAIACgBIAAAOIgJABIgCAAQgKAAgFgFg");
	this.shape_70.setTransform(42,22.7023);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgJAxIAAhHIASAAIAABHgAgJgeIAAgSIASAAIAAASg");
	this.shape_71.setTransform(37.95,22.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgYAfQgHgIgBgKIATAAQABAFACACQADADAIABQAGgBADgBQADgCAAgDQAAgDgCgCQgDgCgQgDQgMgDgFgEQgEgFAAgIQAAgKAHgHQAIgHAOAAQAMAAAJAGQAIAEABAOIgSAAQAAgEgCgCQgDgEgHABQgFAAgDABQgDACAAACQAAAEADACQADABAPADQAMADAFAEQAGAGAAAIQgBALgHAGQgIAHgQAAQgQAAgJgHg");
	this.shape_72.setTransform(32.35,23.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgJAxIAAhHIASAAIAABHgAgJgeIAAgSIASAAIAAASg");
	this.shape_73.setTransform(26.8,22.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgJAkIgahHIAVAAIAOA0IAQg0IAUAAIgaBHg");
	this.shape_74.setTransform(21.225,23.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgXAdQgKgJAAgUQAAgRAJgKQAKgKAOAAQAJAAAHADQAHAEAFAHQAEAHABAIIABANIgwAAQAAALAHAEQAEACAEABQAGAAAEgEIADgEIATAAQgBAGgFAGQgKALgQAAQgNAAgLgJgAAOgHQAAgHgEgEQgEgDgGAAQgFAAgEADQgDAFgCAGIAcAAIAAAAg");
	this.shape_75.setTransform(13.7,23.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AASAwIgBgFIgBgIIAAgJQAAgKgEgDQgDgDgJAAIgTAAIAAAmIgUAAIAAhfIAuAAQALAAAFACQAGACADAFIAFAIQACAEAAAGQAAAHgDAHQgEAGgIACQAHADADAFQACAFAAAKIAAAGIAAAJQABAEAEACIAAACgAgTgFIAVAAQAHAAADgBQAHgDgBgIQAAgJgFgDQgEgCgGAAIgWAAg");
	this.shape_76.setTransform(5.45,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR3, new cjs.Rectangle(-1,15.6,143,60.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcAdIAAgmQAAgGgDgCQgDgCgEAAQgFAAgEAEQgEADAAAJIAAAgIgJAAIAAgkQAAgGgBgCQgCgEgGAAQgGAAgEAEQgEAEAAALIAAAdIgKAAIAAg3IAKAAIAAAIQADgFADgCQAEgDAGAAQAHAAAEAEIADAFQADgEAFgDQAEgCAFAAQAMAAAEAIQACAFAAAHIAAAlg");
	this.shape.setTransform(131.175,69.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAKAAIAAAIQACgEAEgCQAFgDAFAAQAKAAAGAIQAHAGAAAOQAAASgKAIQgGAEgIAAQgFAAgFgDIgFgFIAAAdgAgNgVQgCAGAAAHQAAAHACAEQAEAIAJAAQAGAAAFgFQAEgGAAgKQAAgHgCgEQgEgKgJAAQgJAAgEAKg");
	this.shape_1.setTransform(123.85,70.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgMADgIQAHgRAPAAQAOgBAHAMQAFAJAAARQAAAOgFAKQgGAOgPAAQgNABgGgMgAgLgVQgEAHAAAPQAAAMADAGQAEALAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_2.setTransform(114.775,68.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgMADgIQAHgRAPAAQAOgBAHAMQAFAJAAARQAAAOgFAKQgGAOgPAAQgNABgGgMgAgLgVQgEAHAAAPQAAAMADAGQAEALAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_3.setTransform(108.875,68.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAcIAAgMIAKAAIAAAMgAgFgPIAAgMIAKAAIAAAMg");
	this.shape_4.setTransform(104.7,69.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAlQADgVAMgVQAHgMAHgJIgoAAIAAgKIAzAAIAAAIIgKANQgGAIgEAKQgFAJgBAJIgEAQg");
	this.shape_5.setTransform(100,68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAIAAIAABNg");
	this.shape_6.setTransform(92.5,68.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgTQAAgNAEgKQAGgTARAAQAMAAAFAHQAFAGAAAHIgJAAQgBgEgCgDQgDgEgHAAQgHAAgFAHQgEAHgBAOQADgFAFgCQAFgCAEAAQAKAAAHAGQAHAFAAAMQAAAKgHAIQgHAIgMAAQgJAAgIgIgAgJABQgFAEAAAIQAAAIAEAEQAFAFAGAAQAHAAAEgFQAEgFAAgHQAAgFgDgGQgEgEgIAAQgGAAgEADg");
	this.shape_7.setTransform(85.375,68.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgHALgGIAJgGQAGgDADgDQAFgEgBgGQAAgGgDgEQgEgEgHAAQgJAAgEAHQgCAEAAAHIgJAAQAAgKADgGQAHgLAOAAQANAAAGAHQAGAHAAAJQAAAJgGAFQgEAEgKAFIgGAEIgIAGQgFAEgCAGIApAAIAAAJg");
	this.shape_8.setTransform(79.4,68.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgMADgIQAHgRAPAAQAOgBAHAMQAFAJAAARQAAAOgFAKQgGAOgPAAQgNABgGgMgAgLgVQgEAHAAAPQAAAMADAGQAEALAIAAQAHAAAEgGQAFgHAAgRQAAgMgDgJQgEgIgJAAQgHAAgEAIg");
	this.shape_9.setTransform(73.425,68.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAmQAAgKAEgHQAEgHAKgGIAJgGQAGgDADgDQAFgEgBgGQAAgGgDgEQgFgEgGAAQgJAAgEAHQgBAEAAAHIgKAAQAAgKADgGQAHgLAOAAQANAAAGAHQAGAHAAAJQAAAJgGAFQgEAEgKAFIgGAEIgIAGQgFAEgBAGIAnAAIAAAJg");
	this.shape_10.setTransform(67.5,68.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAJQADgBABgEIAAgEIAAgBIAAAAIgEAAIAAgMIAKAAIAAALQgBAFgCAFQgDAFgEABg");
	this.shape_11.setTransform(60.1,72.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgTQAAgNAEgKQAGgTARAAQAMAAAFAHQAFAGAAAHIgJAAQgBgEgCgDQgDgEgHAAQgHAAgFAHQgEAHgBAOQADgFAFgCQAFgCAEAAQAKAAAHAGQAHAFAAAMQAAAKgHAIQgHAIgMAAQgJAAgIgIgAgJABQgFAEAAAIQAAAIAEAEQAFAFAGAAQAHAAAEgFQAEgFAAgHQAAgFgDgGQgEgEgIAAQgGAAgEADg");
	this.shape_12.setTransform(55.675,68.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAlIAAg0IgRAAIAAgHQAKgBADgDQAEgBACgJIAIAAIAABJg");
	this.shape_13.setTransform(49.175,68.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAkQgGgEgBgIIAKAAQAAAEADACQADADAGAAQAKgBAEgHQACgFgBgMQgCAFgEACQgEACgGAAQgJAAgHgGQgHgHAAgOQAAgOAHgIQAHgHAKAAQAGAAAEACIAGAGIAAgHIAJAAIAAAyQAAALgEAGQgFAMgQAAQgJgBgGgEgAgMgWQgCAFAAAIQAAAJAEAFQAEAEAGAAQAJAAAFgJQACgEAAgHQAAgKgEgGQgFgEgGAAQgJAAgEAJg");
	this.shape_14.setTransform(40.625,70.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgHIAAglIAKAAIAAAkIABAHQACAFAHAAQAJAAADgIQACgFAAgHIAAgcIAKAAIAAA3IgJAAIAAgIIgFAFQgGAFgGAAQgLAAgFgIg");
	this.shape_15.setTransform(34.8,69.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAmIgIgWIgdAAIgIAWIgLAAIAdhLIAKAAIAcBLgAAMAHIgMghIgMAhIAYAAg");
	this.shape_16.setTransform(28.35,68.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAJQADgBABgEIAAgEIAAgBIAAAAIgEAAIAAgMIAKAAIAAALQgBAFgCAFQgCAFgFABg");
	this.shape_17.setTransform(20.85,72.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAdIAAgjQAAgFgBgDQgDgFgGAAIgFAAQgEACgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAFAAQALAAAFAJQACAEAAAJIAAAjg");
	this.shape_18.setTransform(16.425,69.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgHIAAglIAKAAIAAAkIABAHQACAFAHAAQAJAAADgIQACgFAAgHIAAgcIAKAAIAAA3IgJAAIAAgIIgFAFQgFAFgHAAQgLAAgFgIg");
	this.shape_19.setTransform(10.4,69.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAhQgIgHAAgNIAKAAQABAHACAEQAFAIALAAQAHAAAEgCQAJgDAAgJQAAgGgEgDQgEgCgIgCIgJgDQgKgCgEgCQgHgEAAgKQAAgKAHgHQAHgHAMAAQAMAAAHAGQAJAGAAANIgKAAQAAgGgDgEQgFgGgKAAQgIAAgEAEQgFAEAAAFQABAGAFACQACACAKADIALACQAHACAEACQAHAFAAALQAAAMgJAGQgJAGgMAAQgNAAgIgIg");
	this.shape_20.setTransform(3.85,68.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAkQgGgEgBgIIAKAAQAAAEADABQADADAGABQAKAAAEgIQACgEgBgMQgCAEgEACQgEACgGAAQgJAAgHgHQgHgGAAgNQAAgPAHgIQAHgIAKAAQAGABAEADIAGAFIAAgHIAJAAIAAAyQAAALgEAGQgFAMgQgBQgJABgGgFgAgMgWQgCAFAAAIQAAAJAEAEQAEAGAGAAQAJAAAFgJQACgFAAgHQAAgLgEgEQgFgFgGgBQgJAAgEAKg");
	this.shape_21.setTransform(65.075,55.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANAdIAAgjQAAgFgBgDQgDgFgGAAIgFAAQgEACgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAFAAQALAAAFAJQACAEAAAJIAAAjg");
	this.shape_22.setTransform(59.325,54.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAVQgCgFgBgHIAAglIAKAAIAAAkIABAHQADAFAHAAQAJAAADgIQACgFAAgHIAAgcIAJAAIAAA3IgJAAIAAgIIgEAFQgGAFgGAAQgMAAgEgIg");
	this.shape_23.setTransform(53.3,54.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgNAHgIQAIgJALAAQAKAAAIAIQAHAGAAAPQAAAMgGAJQgHAJgNAAQgMAAgGgIgAgMgOQgDAGAAAJQAAAJADAGQAFAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgHgKAAQgHAAgFAGg");
	this.shape_24.setTransform(47.35,54.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAnIAAggIgdgtIAMAAIAVAlIAWglIAMAAIgdAtIAAAgg");
	this.shape_25.setTransform(41.925,53.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAhQgFgHAAgIQAAgJAFgGQADgDAJgEQgFgGgBgEIgCgHQAAgIAFgEQAFgGAJAAQAHABAEAEQAFAFAAAGQAAAHgFAGIgIAHIANAQIACgGIABgGIAJAAQgBAIgDAGIgCAGIAAAAIAAAAIANARIgMAAIgHgJQgEAEgEADQgFAEgIAAQgMgBgGgGgAgSAJQgEAEAAAFQAAAGAFAEQAEADAFAAQAGAAADgCQAFgDACgEIgQgVIgKAIgAgMgaIgBAEQAAADACADIAGAIIAGgGQADgEAAgEQAAgDgCgDQgCgCgEgBQgFAAgDAFg");
	this.shape_26.setTransform(32.025,53.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgFgBgDQgDgEgHAAQgFAAgFAEQgEAEAAAKIAAAeIgKAAIAAhNIAKAAIAAAdQADgEADgCQAEgDAGAAQAMAAAFAJQACAEAAAIIAAAkg");
	this.shape_27.setTransform(22.425,53.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQADAFAJAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgDIgHgBIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQANAAAFAIQADAEAAAGIgIAAQAAgDgCgDQgEgEgHAAQgFAAgDACQgEACAAAEQAAADAFACIAFADIAGABQAKADAEABQAGAEgBAHQAAAIgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_28.setTransform(16.75,54.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAZQgGgFABgHQAAgIAEgEQAFgDAIgBIAOgCQADgBABgCIABgEQAAgEgDgDQgEgCgFAAQgHAAgDAEQgDACAAAFIgJAAQAAgLAHgEQAHgEAIAAQAJAAAGAEQAGAEAAAIIAAAfIABACQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIABAAIACAAIAAAHIgEABIgDAAQgFAAgCgEQgBgBgBgEQgDAEgFADQgFADgGAAQgIAAgEgFgAAHABIgGABIgFABIgHACQgFACAAAGQAAAEADACQADADAEAAQAFAAAEgDQAIgEAAgIIAAgHIgEABg");
	this.shape_29.setTransform(11.2,54.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASAnIglg9IAAA9IgKAAIAAhNIAMAAIAlA9IAAg9IALAAIAABNg");
	this.shape_30.setTransform(4.2,53.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIABgEIAAgBIgBAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgCAFgGABg");
	this.shape_31.setTransform(127.75,42.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAYQgFgFgBgJIAJAAQABAFACACQADAFAJAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgJgDIgGgBIgLgDQgGgEAAgHQAAgIAGgFQAFgFAKAAQANAAAFAIQAEAEgBAGIgJAAQAAgDgBgDQgEgEgHAAQgFAAgDACQgDACgBAEQABADAEACIAGADIAFABQALADADABQAGAEgBAHQAAAIgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_32.setTransform(123.6,39.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_33.setTransform(119.675,38.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_34.setTransform(117.325,38.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAnIAAg3IAJAAIAAA3gAgEgbIAAgLIAJAAIAAALg");
	this.shape_35.setTransform(114.925,38.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAhQgCgDAAgGIAAgkIgIAAIAAgHIAIAAIAAgQIAIAAIAAAQIAJAAIAAAHIgJAAIAAAkQAAAAAAABQABABAAAAQAAABAAAAQABAAAAABIAEAAIABAAIACAAIAAAIIgDAAIgEAAQgGAAgCgDg");
	this.shape_36.setTransform(112.225,39.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAhQgIgHAAgNIAKAAQAAAHADAEQAFAIALAAQAGAAAFgCQAJgDAAgJQAAgGgEgDQgDgCgJgCIgJgDQgKgCgEgCQgHgEAAgKQAAgKAHgHQAHgHAMAAQAMAAAHAGQAJAGAAANIgKAAQgBgGgCgEQgFgGgKAAQgJAAgDAEQgFAEAAAFQAAAGAGACQACACAKADIAKACQAIACAEACQAHAFAAALQAAAMgJAGQgJAGgMAAQgNAAgIgIg");
	this.shape_37.setTransform(107.15,38.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIABgEIAAgBIgBAAIgFAAIAAgMIAKAAIAAALQAAAFgCAFQgDAFgFABg");
	this.shape_38.setTransform(99.2,42.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRAnIgDAAIAAgJIAEABIACAAIAEgBIACgCIACgEIACgGIgVg4IALAAIAOAsIAPgsIALAAIgJAYIgJAXQgIAVgCAFQgEAFgIgBg");
	this.shape_39.setTransform(95.825,41);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAkIgGgFIAAAHIgJAAIAAhNIAJAAIAAAcQADgEAFgCQAEgCAEAAQALAAAGAHQAHAIAAANQAAANgGAJQgHAJgLAAQgGAAgEgEgAgKgGQgFAFAAAKQAAAIACAFQAEAJAJAAQAHAAAEgGQAEgGAAgKQAAgJgEgFQgEgFgHAAQgFAAgFAEg");
	this.shape_40.setTransform(90.3,38.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAYQgFgFgBgJIAJAAQABAFACACQADAFAIAAQAGAAAEgCQAEgDAAgEQAAgEgDgCIgJgDIgGgBIgLgDQgGgEAAgHQAAgIAGgFQAFgFAKAAQANAAAFAIQAEAEgBAGIgJAAQAAgDgCgDQgDgEgHAAQgFAAgDACQgDACAAAEQAAADAEACIAGADIAFABQALADADABQAGAEAAAHQgBAIgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_41.setTransform(84.55,39.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgNAHgIQAHgJALAAQALAAAHAIQAIAGAAAOQAAANgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQADAGAIAAQAJAAAEgHQADgIAAgHQAAgIgCgFQgEgHgKAAQgIAAgDAGg");
	this.shape_42.setTransform(78.8,39.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgHAAgEAFQgDAEAAAGIAAAgg");
	this.shape_43.setTransform(74.425,39.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAgQgMgKAAgWQAAgRAJgLQAKgMAQAAQAOABAIAHQAIAHABALIgKAAQgCgIgFgEQgFgFgJAAQgLAAgGAJQgHAIAAAPQAAANAGAJQAGAIALAAQAMABAGgKQADgEACgIIAKAAQgBAMgIAJQgJAKgQgBQgMABgJgJg");
	this.shape_44.setTransform(68.45,38.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAnIAAgwIgIAAIAAgHIAIAAIAAgJQAAgGACgDQACgEAJAAIACAAIACAAIAAAJIgCAAIgBAAQgEAAgBACQgBACAAAJIAJAAIAAAHIgJAAIAAAwg");
	this.shape_45.setTransform(60.125,38.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAWQgHgHAAgOQAAgNAHgIQAHgJALAAQALAAAHAIQAIAGAAAOQAAANgHAJQgGAJgNAAQgMAAgGgIgAgLgOQgEAHAAAIQAAAJAEAGQADAGAIAAQAJAAAEgHQADgIAAgHQAAgIgCgFQgEgHgKAAQgIAAgDAGg");
	this.shape_46.setTransform(55.6,39.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgQAWQgHgIAAgMQAAgOAIgIQAHgJAJAAQAKAAAGAFQAGAFABALIgJAAQgBgFgDgEQgDgDgHAAQgIAAgDAJQgDAFAAAIQAAAIAEAGQAEAGAGAAQAGAAAEgEQACgDACgHIAJAAQgCAMgFAFQgHAFgKAAQgKAAgGgIg");
	this.shape_47.setTransform(47.1,39.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAnIAAg3IAJAAIAAA3gAgEgbIAAgLIAJAAIAAALg");
	this.shape_48.setTransform(43.175,38.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgRAYQgFgFgBgJIAJAAQABAFACACQADAFAJAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgDIgHgBIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQANAAAFAIQADAEAAAGIgJAAQAAgDgBgDQgEgEgHAAQgFAAgDACQgEACAAAEQAAADAFACIAFADIAGABQAKADAEABQAGAEgBAHQAAAIgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_49.setTransform(39.35,39.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAVQgDgFAAgHIAAglIAKAAIAAAkIACAHQACAFAHAAQAIAAAEgIQACgFAAgHIAAgcIAJAAIAAA3IgJAAIAAgIIgEAFQgGAFgGAAQgMAAgEgIg");
	this.shape_50.setTransform(33.6,39.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAbAnIAAgtIAAgIIAAgLIgWBAIgJAAIgXhAIAAACIAAAJIABAIIAAAtIgKAAIAAhNIAPAAIAVBBIAWhBIAPAAIAABNg");
	this.shape_51.setTransform(26.25,38.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAIgJAKAAQAGAAAGADQAFADADAEQADAFABAFIAAAMIgnAAQAAAIAEAFQADAGAIAAQAHAAAEgFQADgDAAgEIAKAAIgCAHIgFAGQgEAEgHACIgHABQgKAAgHgIgAAQgEQAAgGgCgEQgFgGgIAAQgGAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_52.setTransform(15.75,39.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgFgBgDQgDgEgHAAQgFAAgFAEQgEAEAAAKIAAAeIgKAAIAAhNIAKAAIAAAdQADgEADgCQAEgDAGAAQAMAAAFAJQACAEAAAIIAAAkg");
	this.shape_53.setTransform(9.875,38.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEAnIAAhEIgaAAIAAgJIA9AAIAAAJIgZAAIAABEg");
	this.shape_54.setTransform(3.625,38.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgWAdQgLgJAAgUQAAgRAKgKQAJgKAOAAQAJAAAHADQAHAEAFAHQAEAHABAIIABANIgwAAQAAALAGAEQAFACAEABQAGAAAEgEIADgEIATAAQgBAGgGAGQgJALgRAAQgMAAgKgJgAAOgHQAAgHgEgEQgEgDgGAAQgGAAgDADQgDAFgBAGIAbAAIAAAAg");
	this.shape_55.setTransform(65.15,23.65);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgXAfQgJgIABgKIASAAQABAFACACQADADAJABQAFgBAEgBQACgCAAgDQABgDgDgCQgDgCgPgDQgNgDgEgEQgGgFAAgIQABgKAHgHQAIgHAOAAQANAAAIAGQAJAEAAAOIgSAAQgBgEgBgCQgDgEgHABQgGAAgCABQgDACAAACQAAAEADACQADABAQADQALADAFAEQAGAGgBAIQABALgJAGQgHAHgQAAQgRAAgHgHg");
	this.shape_56.setTransform(57.7,23.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgcAZQgEgGABgMIAAgqIATAAIAAAqQAAAGABADQADAFAHAAQAJAAAEgIQACgDAAgIIAAglIATAAIAABGIgTAAIAAgKIgBACIgCADIgJAFQgEABgFABQgQAAgFgMg");
	this.shape_57.setTransform(49.85,23.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgaAbQgKgLABgQQgBgOAKgMQAIgLASAAQATAAAJALQAJAMAAAOQAAAQgJALQgJALgTAAQgSAAgIgLgAgMgPQgEAFAAAKQAAALAEAGQAFAGAHAAQAIAAAEgGQAFgGAAgLQAAgKgFgFQgEgGgIAAQgHAAgFAGg");
	this.shape_58.setTransform(41.7,23.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AATAwIAAgrIglAAIAAArIgUAAIAAhfIAUAAIAAAkIAlAAIAAgkIAUAAIAABfg");
	this.shape_59.setTransform(32.85,22.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgUAkIAAhGIASAAIAAANQADgIAEgCQAFgFAIAAIABAAIACAAIAAATIgDAAIgDAAQgLAAgEAIQgBAEAAAHIAAAig");
	this.shape_60.setTransform(21.925,23.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgcAZQgDgGAAgMIAAgqIATAAIAAAqQAAAGABADQADAFAHAAQAJAAAEgIQACgDAAgIIAAglIASAAIAABGIgSAAIAAgKIgBACIgCADIgJAFQgDABgGABQgQAAgFgMg");
	this.shape_61.setTransform(14.85,23.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgeAoQgPgOgBgaQABgaAPgNQALgLATAAQAUAAAMALQAOANAAAaQAAAagOAOQgMALgUAAQgTAAgLgLgAgSgYQgIAIAAAQQAAARAIAIQAHAJALAAQAMAAAHgJQAHgIAAgRQAAgQgHgIQgHgJgMAAQgLAAgHAJg");
	this.shape_62.setTransform(5.65,22.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(-1,15.6,138.2,60.4), null);


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
	this.shape.graphics.f("#231F20").s().p("AgQAnQgIgFgFgJQgEgKgBgOQAAgOAGgKQAFgKAIgFQAJgEALAAQANgBAJAJQAIAIAAATIgsAAIAAADIAAAEQAAALACAGQAFAIACADQAFADAFAAIAIgBQACgBAFgEQADgCAEgFIADABQgDAHgEAFQgEAFgGAEQgGAEgKgBQgJABgJgFgAgFggQgDAGgBAQIAYAAIgBgOQgCgIgCgDQgCgEgFAAQgFAAgDAHg");
	this.shape.setTransform(33.7734,1.1495,0.8819,0.8819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgiAqIAAgDQAGAAACgCQADgDAAgHIAAgwQAAgIgDgDQgBgEgHAAIAAgDIAXAAIALgCIAAAPQAAgDAEgFQADgDAEgCQAFgCAEAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHACADQADADAJAAIAAADg");
	this.shape_1.setTransform(27.1813,1.0614,0.8819,0.8819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgTAnQgJgEgFgKQgFgJAAgQQAAgPAFgJQAFgKAJgFQAJgDAKAAQALAAAJADQAKAFAEAKQAFAJAAAPQAAAQgFAJQgFALgJADQgIAFgMgBQgKABgJgFgAgKgeQgEAKAAAUQAAAWAEAJQAFAJAFABQAGgBAFgJQAEgJAAgWQAAgUgEgKQgFgJgGAAQgFAAgFAJg");
	this.shape_2.setTransform(19.7955,1.1495,0.8819,0.8819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AA6A4IgdAAIgLABIAAgEIAJgBQADgBAAgDQABgCAAgGIAAhSIglBjIgDAAIgrhmIAABLIABAOQABAEADADQAEACAHAAIAAAEIgIgBIgYABIAAgEQAFAAADgCQADgCAAgFIABgMIAAhHIgBgIQgBgEgCAAIgIgBIAAgEIAHABIAggBIAgBNIAdhMIAlgBIAAAEIgIABQgCAAgBAEIgBAIIAABPIABAIQAAADADABIAIABIAAAEIgLgBg");
	this.shape_3.setTransform(9.5437,-0.1953,0.8819,0.8819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAEAqIAAgDQAFAAACgDQACgBAAgIIAAgwIgBgHQAAgDgDgCQgCgCgEAAQgDAAgEADQgDACgCAEQgDAGAAAEIAAArQAAAHACACQADADAEAAIAAADIgIAAIgiAAIAAgDQAFAAADgDQACgCAAgHIAAgxQAAgHgCgDQgCgEgGAAIAAgDIAKAAIAXgCIAAAOQAEgIAHgDQAGgDAJAAQAGAAAFABQAEACACADIAEAHIABA3QAAAIADABQACADAFAAIAAADg");
	this.shape_4.setTransform(-4.5664,1.0614,0.8819,0.8819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AghAqIAAgDQAFAAACgCQADgDAAgHIAAgwQAAgIgCgDQgCgEgHAAIAAgDIAXAAIALgCIAAAPIAEgIQADgDAEgCIAJgCIAAAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHADADQADADAIAAIAAADg");
	this.shape_5.setTransform(-12.1506,1.0614,0.8819,0.8819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAMApQgEgCgBgCQgCgDAAgEQgDAGgFADQgGAEgHAAQgHAAgFgDQgFgCgCgFQgDgFAAgFQAAgHADgEQAFgFAEgCQAEgDAGgBIALgDQAEgBADgDQADgCAAgEIAAgNIgBgHQgCgDgCgCQgEgCgDAAIgGABQgEABgCACQAFACACADQADACAAAFQAAAGgEADQgDADgGAAQgGAAgDgEQgDgDAAgFQAAgEADgEIAGgFQAEgDAHgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAFABAEIABA4IABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADgBIADgBIACACQgDADgFACQgEABgGAAQgGAAgDgCgAABgBIgFACIgFAFQgDABgBAFQgCAEAAAEQAAAHADADQACADAFAAIAFgCIAFgEIAAghg");
	this.shape_6.setTransform(-19.0293,1.1055,0.8819,0.8819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgQAnQgIgFgFgJQgFgKAAgOQABgOAFgKQAFgKAJgFQAHgEAMAAQANgBAIAJQAJAJgBASIgsAAIAAAHQAAALADAGQAEAHADAEQAFADAFAAIAHgBQADgBAEgEQAEgCAEgFIACABQgCAHgEAFQgEAFgHAEQgFAEgJgBQgKABgJgFgAgFggQgEAHgBAPIAZAAIgBgOQgCgIgCgDQgCgEgEAAQgGAAgDAHg");
	this.shape_7.setTransform(-26.371,1.1495,0.8819,0.8819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgrA5IAAgEIAHgBQADAAABgEIABgIIAAhPIgBgIQgBgCgDgCIgHgBIAAgEIAKABIAdAAIAKgBIAAAEIgHABQgDABgBADIgBAIIAABRIABAHQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAFABIAIAAQAGAAAEgDQAFgCAEgFQADgDADgIQADgJABgGIAEAAIAAAog");
	this.shape_8.setTransform(-34.1977,-0.1953,0.8819,0.8819);

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

}).prototype = getMCSymbolPrototype(lib.Bg2, new cjs.Rectangle(0,0,300,127), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg1_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance.setTransform(275.4,195.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(446).to({_off:false},0).to({x:215.4,alpha:1},8,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({_off:true},1).wait(14));

	// FR3
	this.instance_1 = new lib.FR3();
	this.instance_1.setTransform(237.7,192.75,1,1,0,0,0,78.7,40.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(356).to({_off:false},0).to({x:217.7,alpha:1},7,cjs.Ease.get(1)).to({_off:true},83).wait(32));

	// FR2
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(236.7,192.75,1,1,0,0,0,78.7,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(247).to({_off:false},0).to({x:216.7,alpha:1},8,cjs.Ease.get(1)).to({_off:true},101).wait(122));

	// FR1
	this.instance_3 = new lib.FR11();
	this.instance_3.setTransform(223.7,193.3,1,1,0,0,0,63.7,41.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({_off:false},0).to({x:203.7,alpha:1},7,cjs.Ease.get(1)).to({_off:true},123).wait(231));

	// CTA
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(98.35,255.5,0.8305,0.8305,0,0,0,38.9,11.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({y:238.9,alpha:1},8,cjs.Ease.get(1)).wait(346).to({_off:true},1).wait(14));

	// line
	this.instance_5 = new lib.Line_1();
	this.instance_5.setTransform(125.5,215.5,1,1,0,0,0,11,48.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:false},0).to({y:195.5,alpha:1},8,cjs.Ease.get(1)).wait(362).to({_off:true},1).wait(14));

	// Header
	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(150.05,195.5,1,1,0,0,0,128.2,70.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:175.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},62).wait(394));

	// Logo2
	this.instance_7 = new lib.Logo2();
	this.instance_7.setTransform(65.95,180.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(84).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(371).to({_off:true},1).wait(14));

	// Logo
	this.instance_8 = new lib.Logo();
	this.instance_8.setTransform(99.05,110.55,0.275,0.275,0,0,0,150.8,111.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:150.3,regY:111.4,scaleX:0.4297,scaleY:0.4297,alpha:1},8,cjs.Ease.get(1)).to({_off:true},70).wait(394));

	// Bg2
	this.instance_9 = new lib.Bg2();
	this.instance_9.setTransform(150,187.5,1,1,0,0,0,150,62.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({_off:false},0).wait(379).to({_off:true},1).wait(14));

	// sc
	this.instance_10 = new lib.sc();
	this.instance_10.setTransform(52.05,86.35,0.64,0.64,0,0,180,108.2,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:28.05},8,cjs.Ease.get(1)).wait(76).to({regX:108,regY:165.8,scaleX:0.4363,x:6.2,y:86.2},8,cjs.Ease.get(1)).wait(371).to({_off:true},1).wait(14));

	// sc
	this.instance_11 = new lib.sc();
	this.instance_11.setTransform(247.55,88.05,0.64,0.64,0,0,0,108.2,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:275.05},8,cjs.Ease.get(1)).wait(76).to({regY:165.8,scaleX:0.4548,x:295,y:87.9},8,cjs.Ease.get(1)).wait(371).to({_off:true},1).wait(14));

	// IMG4
	this.instance_12 = new lib.IMG4("synched",0);
	this.instance_12.setTransform(151.05,63.05,0.81,0.81,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(446).to({_off:false},0).to({alpha:1},8).wait(9).to({startPosition:0},0).to({_off:true},1).wait(14));

	// IMG3
	this.instance_13 = new lib.img3();
	this.instance_13.setTransform(77.55,45.55,0.426,0.426,0,0,0,213.8,107.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(356).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},82).wait(32));

	// Img2
	this.instance_14 = new lib.Img2_1();
	this.instance_14.setTransform(76.75,37.6,0.5938,0.5938,0,0,0,149.9,62.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(247).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},109).wait(114));

	// Img1
	this.instance_15 = new lib.Img1_1();
	this.instance_15.setTransform(62.25,36.6,0.7699,0.7699,0,0,0,150,65.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(84).to({_off:false},0).to({y:35.85,alpha:1},8,cjs.Ease.get(1)).to({_off:true},163).wait(223));

	// bg1
	this.instance_16 = new lib.Bg1_1();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(463).to({_off:true},1).wait(14));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(463).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-106.8,393.7,370.8);


// stage content:
(lib.WFSB_219237_MM_300x250_V1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [460];
	// timeline functions:
	this.frame_460 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(460).call(this.frame_460).wait(4));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(464));

	// Layer_1
	this.ad_animatedLayers = new lib.ad_animatedLayers("synched",0);
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(149.95,124.9,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(464));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(109,105,243.8,158.89999999999998);
// library properties:
lib.properties = {
	id: '515308600A3D4C3A80066B7DC93BFCC7',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_4.jpg", id:"_4"},
		{src:"Bg1.jpg", id:"Bg1"},
		{src:"BGG2.png", id:"BGG2"},
		{src:"CTA.png", id:"CTA"},
		{src:"Image.png", id:"Image"},
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
an.compositions['515308600A3D4C3A80066B7DC93BFCC7'] = {
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