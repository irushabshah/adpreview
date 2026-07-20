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


(lib.Bg2 = function() {
	this.initialize(img.Bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,125);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,83);


(lib.image = function() {
	this.initialize(img.image);
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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar9QlMAAAghIIX8AAMAAAAhIg");
	mask.setTransform(20.9,110.45);

	// Layer_1
	this.instance = new lib.screen();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sc, new cjs.Rectangle(0,4.4,97.6,212.1), null);


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
	this.instance = new lib.image();
	this.instance.setTransform(-65,-54,0.4293,0.4293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-65,-54,128.8,95.3), null);


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
	this.instance = new lib.image();
	this.instance.setTransform(6,-3,0.9444,0.9444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(6,-3,283.3,209.7), null);


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


(lib.Layer = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EgpAAHCIAAuDMBSBAAAIAAODg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Layer, new cjs.Rectangle(-262.4,-45,524.9,90), null);


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
	this.instance.setTransform(-17,-48,0.1575,0.1575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-48,36.6,75.9);


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
	this.instance.setTransform(82,-107,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img3, new cjs.Rectangle(82,-107,610.1,609), null);


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
	this.instance.setTransform(-2,-115,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(-2,-115,548.1,410.1), null);


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
	this.instance.setTransform(48,19,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(48,19,426.3,319.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOANQgFgFAAgIQAAgHAFgGQAGgFAIABQAKgBAFAFQAFAFAAAIQAAAJgFAEQgGAGgJAAQgIAAgGgGg");
	this.shape.setTransform(525.6298,6.0057,0.9599,0.9599);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4A/IgyABIAAgFQAIAAACgEQADgDABgLIAAhJQAAgGgCgFQAAgDgEgEQgEgCgFAAQgGAAgFAEQgGADgDAHQgDAGAAAIIAABBQAAALADADQADAEAHAAIAAAFIg/AAIAAgFQAIAAAEgEQADgEAAgKIAAhKQAAgKgDgGQgDgFgJAAIAAgFIAhAAIARgDIAAAWQAGgNAKgFQAJgFANAAQAJAAAHADQAHADAEAEQAEAFABAGQACAHAAANIAAA/QAAALAEADQACAEAJAAIAAAFIgNgBg");
	this.shape_1.setTransform(515.5752,1.3264,0.9599,0.9599);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA+QgHgDgDgEQgEgFgCgGQgCgLAAgIIAAg8QAAgMgDgEQgDgGgJABIAAgGIAPABIATgBIAQgCIAABjIABAKQABAEADADQADADAGgBQAHAAAEgDQAGgEACgGQAEgGAAgIIAAg+QAAgKgEgGQgDgGgJABIAAgGIAPABIATgBIAQgCIAABkQAAAKAEAGQADAEAJAAIAAAGIgiAAIgQACIAAgVQgGALgKAGQgKAFgMAAQgKAAgGgDg");
	this.shape_2.setTransform(501.3451,1.5423,0.9599,0.9599);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BVIAAgFQAIAAADgBQAEgCACgEIABgNIAAh3IgBgMQgCgFgEgCQgDgBgIAAIAAgFIB/AAIgBAvIAAAIIgFAAQgDgSgGgMQgFgKgIgEQgJgGgKAAIgIAAQgHABgDABQgDAAgCAFIgBALIAAA8IAJAAQAGAAAFgDQAFgDADgEIAFgLIADgLIAGAAIAABEIgFAAQgCgJgDgHQgCgHgHgEQgFgFgJAAIgJAAIAAA3QAAAKACAEQACAFAEABQAGABALABIAAAFg");
	this.shape_3.setTransform(487.715,-0.7133,0.9599,0.9599);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBYQgQAAgKgDQgLgCgHgFQgGgFAAgIQAAgHAGgGQAGgGAOgEIACAEQgFAEgCAEQgBAEgBAFQAAAKAKAFQAIAGARAAQAKAAAIgDQAJgCAEgHQAGgFAAgJQgBgHgFgFQgFgFgQAAIgOAAQgIAAgJgCQgGgBgGgGQgDgFAAgHQgBgKAJgIQAGgFALgFQgIgBgHgDQgKgDgHgJQgFgIgBgOQABgNAFgIQAIgJAJgEQAMgEANAAQANAAAKAEQAIADAFAEQADgEAFgDQAGgHALAAQAHAAAFAFQADAEAAAHQAAAGgDAEQgEAEgFAAQgFAAgDgDQgDgDAAgGQgBgFADgIQgGADgEAEIgGAGIABACQAHAIAAANQAAANgHAJQgFAJgMADQgKAFgNAAIgEAAIgGAEQgEADAAAEQAAAIAJAAIAZAAQAPAAAJADQAKADAHAHQAGAIAAALQAAALgIALQgIAKgPAGQgPAGgXAAgAgVhIQgDAHgBATQABAUADAHQAEAHAGAAQAHAAAEgHQACgIAAgTQAAgRgCgJQgEgHgHAAQgGAAgEAHg");
	this.shape_4.setTransform(469.0695,3.3421,0.9599,0.9599);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBdIAAgFQAIAAAEgEQAEgEAAgJIAAhLQAAgLgEgFQgDgFgJAAIAAgFIAPABIASgBIAQgDIAABoQAAAKAEADQADAEAJAAIAAAFgAgQg8QgGgFAAgIQAAgKAGgEQAFgFALAAQAJAAAGAFQAFAEAAAKQAAAHgFAGQgGAFgJAAQgLAAgFgFg");
	this.shape_5.setTransform(459.1109,-1.4812,0.9599,0.9599);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBVIAAgFIALgBQAEgCACgEQABgFAAgIIAAh3QAAgIgBgEQgCgFgEgCIgLgCIAAgEIBJABQAegBAPALQAOALAAAQQAAAJgFAIQgEAIgMAHQgLAIgQACIAAAAQAYADAMAFQAMAFAHAKQAGAJAAAKQAAAPgIALQgIAKgPAGQgQAFgTAAgAgQA8QAAAJABADQACAFADABQADABAHABQARgBAIgKQAHgKABgWQgBgSgIgKQgKgJgUAAIgKAAgAgOhLQgCAEAAAMIAAA2IAKAAQALAAAFgEQAHgHACgIQACgIAAgMQAAgRgFgJQgGgJgLAAQgJAAgEAEg");
	this.shape_6.setTransform(447.8084,-0.7133,0.9599,0.9599);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOANQgFgEAAgJQAAgIAFgFQAGgFAIABQAKgBAFAFQAFAGAAAHQAAAIgFAFQgGAGgJAAQgIAAgGgGg");
	this.shape_7.setTransform(431.5146,6.0057,0.9599,0.9599);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBAIgVgJQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAABQgCADgBAEIgEAAIABgxIAFAAQABAPADAJQAEAKAHAFQAGAFAKAAQAFABADgCQADgBADgFQACgCABgIQAAgJgIgIIgQgPIgOgMQgHgGgFgGQgDgHAAgKQAAgMAFgGQAHgJAIgDQAJgDAMgBQAHABAJACQAKADABACQAJAGACgNIAEAAIgBAqIgEAAQgCgKgEgHQgCgJgHgGQgGgFgLAAQgGAAgEAEQgFADAAAIQAAAHAFAGQADAFAGAFIAdAWQAHAGAEAGQAEAIAAAJQgBALgGAIQgGAHgKAFQgLAEgMABQgGgBgGgBg");
	this.shape_8.setTransform(423.1877,1.4944,0.9599,0.9599);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGBeIAAgFQAIAAACgEQADgDAAgLIAAhJIgBgLQgBgDgDgEQgEgCgFAAQgGAAgGADQgFAFgDAFQgDAGAAAHIAABDQAAALACADQAEAEAGAAIAAAFIg+AAIAAgFQAJAAADgEQADgDAAgLIAAiHQAAgLgDgFQgDgFgJAAIAAgFIAhAAIARgDIAABTQAFgMALgGQAJgFAMAAQAKAAAHADQAHADADAEQADAEADAHQACAIgBALIAABAQABAKADAEQAEAEAIAAIAAAFg");
	this.shape_9.setTransform(410.8534,-1.5532,0.9599,0.9599);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBVQgLgCgHgFQgGgFAAgIQAAgHAGgGQAHgGANgEIACAEQgEAEgCAEQgCAEAAAFQAAAKAJAFQAJAGAQAAQAKAAAIgDQAJgCAFgHQAFgFAAgJQAAgHgGgFQgFgFgQAAIgOAAQgIAAgJgCQgGgBgFgGQgEgFAAgHQAAgKAIgIQAFgEAMgGQgHgBgHgDQgMgEgFgIQgGgIAAgOQAAgNAGgIQAGgJALgEQALgEANAAQANAAALAEQAHADAFAEQADgEAFgDQAHgHAKAAQAIAAADAFQAEADAAAIQAAAHgDADQgEAEgFAAQgEAAgEgDQgDgEgBgFQAAgGAEgHQgHADgEAEIgFAGIABACQAGAIAAANQAAANgGAJQgGAJgLADQgLAFgNAAIgEgBIgGAFQgEADAAAEQAAAIAKAAIAZAAQANAAAKADQAKADAHAHQAGAHAAAMQAAAMgIAKQgIAKgPAGQgPAGgXAAQgRAAgKgDgAgVhIQgDAHAAATQAAAUADAHQAEAHAGAAQAHAAADgHQADgHAAgUQAAgSgDgIQgDgHgHAAQgGAAgEAHg");
	this.shape_10.setTransform(397.3913,3.3421,0.9599,0.9599);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA+QgHgCgDgFQgDgDgDgIQgBgIAAgLIAAg8QAAgMgEgEQgDgGgJABIAAgGIAPABIATgBIAQgCIAABjIABAKQABAEADADQAEADAGgBQAFAAAFgDQAFgDAEgHQADgGAAgIIAAg+QAAgLgDgFQgEgGgIABIAAgGIAOABIATgBIAQgCIAABkQAAAKAEAGQADAEAJAAIAAAGIgiAAIgQACIAAgVQgFALgLAGQgJAFgNAAQgJAAgHgDg");
	this.shape_11.setTransform(383.9531,1.5423,0.9599,0.9599);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASA+QgFgDgDgEQgDgFABgFQgFAIgJAGQgIAGgLAAIAAgBQgLAAgHgEQgHgDgDgIQgEgGAAgJQAAgKAFgGQAFgHAHgEIAPgHIAQgEIALgGQAFgDAAgGIAAgTQAAgGgCgFQgCgFgDgCQgEgDgHAAQgFAAgEABQgGACgCADQAGACAEAFQAEAFgBAGQABAIgGAFQgFAFgIAAQgJAAgEgFQgFgGAAgIQABgHADgEIAKgJQAGgDAJgDQAJgCAMAAQAHAAAMACQAKAEAFAFQAGAGABAHQACALAAAKIAABAIABAIQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAABgBIAEgCIACAEQgEAEgIACQgHADgIAAQgIAAgFgDgAABgDIgPAMQgEADgCAGQgDAGAAAHQAAAIAEAFQAFAFAGAAQAEAAAEgCQAEgCAEgGIAAgwQgDAEgEACg");
	this.shape_12.setTransform(371.3548,1.4224,0.9599,0.9599);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCBVIAAgFIAMgBQAEgCABgEQABgFAAgIIAAh3QAAgIgBgEQgBgFgEgCQgEgBgIAAIAAgFIBLAAIAAAFQgIAAgDABQgFACgBAFQgCAEAAAIIAAB6QAAAHACADQABAEADABQAEABAFABIALAAQAIAAAIgFQAHgDAGgIQAFgFAEgLQAEgLACgLIAGAAIgBAlIACAWg");
	this.shape_13.setTransform(358.2286,-0.7133,0.9599,0.9599);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBVQgLgCgHgFQgGgGAAgHQAAgHAGgGQAHgGAOgEIACAEQgFAEgCAEQgCAEAAAFQAAAKAJAFQAJAGAQAAQAKAAAJgDQAHgCAGgHQAFgGAAgIQAAgHgGgFQgEgFgQAAIgPAAQgJAAgIgCQgHgCgEgFQgEgEAAgIQAAgJAHgJQAHgEALgGQgIgBgGgDQgLgDgGgJQgGgIgBgOQABgMAGgJQAHgJAKgEQALgEAOAAQAMAAALAEQAHADAFAFQADgFAFgDQAHgHAKAAQAIAAAEAFQADADAAAIQAAAHgDADQgEAEgEAAQgFAAgDgDQgEgEgBgFQAAgFAEgIQgGADgFAEIgFAHIABABQAGAIAAANQAAAOgGAIQgGAIgLAEQgKAFgNAAIgFAAIgGAEQgEADAAAEQAAAIAJAAIAaAAQANAAALADQAJADAHAHQAGAIAAALQAAALgIALQgHAKgPAGQgQAGgXAAQgRAAgKgDgAgVhIQgDAHAAATQAAAUADAHQAFAHAGAAQAGAAAEgHQACgHAAgUQAAgTgCgHQgFgHgFAAQgGAAgFAHg");
	this.shape_14.setTransform(339.2952,3.3421,0.9599,0.9599);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATBcIgzABIAAgFQAIAAAFgEQADgEAAgJIAAhLQAAgLgDgFQgEgFgJAAIAAgFIAQABIASgBIAQgDIAABoQgBAKAEADQAEAEAHAAIAAAFIgNgBgAgQg8QgHgFAAgIQAAgJAHgFQAFgFALAAQAJAAAFAFQAHAEgBAKQABAIgHAFQgFAFgJAAQgLAAgFgFg");
	this.shape_15.setTransform(329.3605,-1.4812,0.9599,0.9599);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhHBVIAAgFIALgBQAEgCABgEQACgFAAgIIAAh3QAAgIgCgEQgCgFgDgCIgMgCIAAgEIBKABQAdgBAPALQAOALAAAQQAAAJgEAIQgGAJgKAGQgMAIgQACIAAAAQAYADAMAFQANAGAGAJQAGAJAAAKQAAAPgHALQgIAKgQAGQgPAFgUAAgAgQA8QAAAIACAEQABAFAEABQACABAHABQARgBAIgKQAIgKAAgWQAAgSgJgKQgKgJgUAAIgKAAgAgNhLQgDAEAAAMIAAA2IALAAQAKAAAGgEQAGgHACgIQADgKgBgKQAAgRgFgJQgFgJgMAAQgJAAgDAEg");
	this.shape_16.setTransform(318.0341,-0.7133,0.9599,0.9599);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOANQgFgFgBgIQABgHAFgGQAGgFAIABQAKgBAFAFQAGAGAAAHQAAAIgGAFQgGAGgJAAQgHAAgHgGg");
	this.shape_17.setTransform(301.7643,6.0057,0.9599,0.9599);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGBAIAAgFQAIAAADgEQACgEAAgKIAAhJIgBgLQgBgEgDgDQgEgCgFAAQgGAAgFAEQgGADgDAHQgDAFAAAJIAABBQAAALADADQADAEAHAAIAAAFIg/AAIAAgFQAJAAADgEQADgDAAgLIAAhKQAAgLgDgFQgDgFgJAAIAAgFIAiAAIAQgDIAAAWQAFgMALgGQAJgFANAAQAJAAAIADQAHADADAEQADADACAIQACAIAAAMIAAA/QAAAKADAEQAEAEAIAAIAAAFg");
	this.shape_18.setTransform(291.7096,1.3264,0.9599,0.9599);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA7QgNgIgHgOQgHgOAAgWQAAgVAHgPQAIgQAOgGQANgIAQAAQAUAAANANQAMANAAAcIhCAAIAAAFIAAAGQgBAPAFALQAEAKAHAFQAHAFAHAAIALgCQAEgBAHgEQAGgGAEgHIAEACQgCAKgHAIQgGAIgKAGQgJAFgNABQgPAAgNgHgAgIgxQgFAMgCAWIAlAAQAAgMgBgLQgCgJgEgHQgEgFgFAAQgIAAgGAKg");
	this.shape_19.setTransform(278.8714,1.4944,0.9599,0.9599);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZA7QgMgIgHgOQgHgOAAgWQAAgVAHgPQAIgQANgGQAOgIAQAAQAVAAAMANQAMANAAAcIhCAAIgBAFIAAAGQABAPAEALQAFAKAGAFQAHAFAIAAIAKgCQAEgBAHgEQAGgGAEgHIAFACQgEAKgFAIQgHAIgJAGQgLAFgNABQgPAAgNgHgAgIgxQgFAMgCAWIAlAAQAAgMgCgLQgBgJgEgHQgDgFgGAAQgIAAgGAKg");
	this.shape_20.setTransform(267.257,1.4944,0.9599,0.9599);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEA/Ig3ABIAAgFQAIAAADgEQAEgDAAgLIAAhKQAAgLgDgFQgDgGgJAAIAAgFIAPABIASgBIARgCIAAAWQABgFAFgHQAEgEAHgEQAGgDAIAAQAJAAAEAEQAFADACAFQACAGAAAEQAAAJgFAGQgFAGgJAAQgIAAgFgFQgEgDAAgIQAAgHADgEQADgFAEgDQgEgBgDACQgEAAgEADQgFAEgCAEQgDAEgBAFIgBAKIAAA/QAAAMAEADQAGAFALAAIAAAFIgQgBg");
	this.shape_21.setTransform(256.5784,1.3264,0.9599,0.9599);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXA7QgMgHgIgOQgIgPAAgWQAAgUAIgPQAHgPAOgIQAOgIAPAAQAIAAAKACQAJADAEADQAGAEAEAFQADAFAAAJQAAAHgFAGQgGAGgIAAQgIAAgFgFQgGgFAAgIQAAgIAGgFQADgEAIgDIgHgEQgDgCgFABQgHAAgGADQgEAFgEAIIgHASQgBAJAAANQAAASAEAKQAGALAFAEQAIAFAHAAIALgCQADgBAIgEQAFgGAFgHIAEACQgDAKgGAIQgGAIgJAGQgKAFgOABQgOAAgNgHg");
	this.shape_22.setTransform(245.3719,1.4944,0.9599,0.9599);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYBVIgOgGQgGgDgDAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAABIgCAHIgFAAIAAhAIAFAAQACASAEALQAEAOAKAJQAJAIAPAAQAIAAAGgDQAHgDAEgGQAEgGAAgJQAAgKgFgHQgEgIgIgGIgSgOIgVgNQgJgHgGgKQgHgKABgNQAAgPAHgKQAHgJANgFQAMgFAPAAQANAAAHADQAJADAFADIAEADIAEAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAIACgIIAGAAIgBA3IgGAAQgBgNgFgMQgEgLgJgIQgKgHgMAAQgLAAgHAGQgIAGABAMQAAAKAEAGQAEAGALAIIAVAPIAVAOQAJAIAFAJQAFAKABAMQAAAQgJALQgJAKgNAFQgPAFgNAAQgPAAgJgDg");
	this.shape_23.setTransform(232.9896,-0.6893,0.9599,0.9599);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoBVQgLgCgHgFQgGgGgBgHQABgHAGgGQAHgGANgEIADAEQgFAEgCAEQgCAEAAAFQAAAKAJAFQAJAGARAAQAJAAAJgDQAHgCAGgHQAFgGAAgIQAAgHgGgFQgEgFgQAAIgPAAQgJAAgIgCQgHgCgEgFQgEgFAAgHQAAgJAHgJQAGgEAMgGQgIgBgGgDQgLgEgGgIQgGgIgBgOQABgMAGgJQAGgJALgEQALgEANAAQANAAALAEQAHADAFAFQADgFAFgDQAHgHAKAAQAHAAAFAFQADADABAIQgBAHgDADQgDAEgFAAQgFAAgDgDQgEgEAAgFQAAgFADgIQgGADgFAEIgFAHIABABQAGAIAAANQAAAOgGAIQgFAIgMAEQgLAFgNAAIgEgBIgGAFQgEADAAAEQAAAIAKAAIAZAAQANAAAKADQAKADAHAHQAGAIAAALQAAALgIALQgHAKgPAGQgQAGgXAAQgRAAgKgDgAgVhIQgDAHAAATQAAAUADAHQAFAHAFAAQAHAAAEgHQACgHAAgUQAAgTgCgHQgFgHgGAAQgFAAgFAHg");
	this.shape_24.setTransform(214.3682,3.3421,0.9599,0.9599);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggBdIAAgFQAIAAAEgEQAEgEAAgJIAAhLQAAgLgEgFQgDgFgJAAIAAgFIAPABIASgBIAQgDIAABoQAAAKAEADQADAEAJAAIAAAFgAgRg8QgGgFAAgIQAAgJAGgFQAGgFAKAAQAKAAAFAFQAGAEAAAKQAAAIgGAFQgFAFgKAAQgKAAgGgFg");
	this.shape_25.setTransform(204.4575,-1.4812,0.9599,0.9599);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhHBVIAAgFIALgBQAEgCABgEQACgFAAgIIAAh3QAAgIgCgEQgBgFgEgCIgMgCIAAgEIBKABQAdgBAPALQAOALAAAQQAAAJgEAIQgGAJgKAGQgMAIgPACIAAAAQAYADAMAFQAMAGAGAJQAGAJAAAKQAAAPgHALQgJAKgPAGQgPAFgUAAgAgQA8QAAAIACAEQABAFADABQAEABAGABQARgBAIgKQAIgKAAgWQAAgSgJgKQgJgJgVAAIgKAAgAgNhLQgDAEAAAMIAAA2IALAAQAKAAAGgEQAGgHACgIQACgKAAgKQAAgRgFgJQgFgJgMAAQgJAAgDAEg");
	this.shape_26.setTransform(193.107,-0.7133,0.9599,0.9599);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC554").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_27.setTransform(851.575,17.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgZA5QgKgGgGgLQgGgLAAgOQAAgOAGgKQAGgLAKgGQAKgGAMAAQAIAAAJAEQAJAEAFAHIAAgtIAUAAIAAB8IgUAAIAAgOQgEAHgJAEQgIAEgKABQgMAAgKgHgAgNgMQgGAFgEAHQgEAFAAAKQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgJQAAgLgEgFQgEgHgGgFQgHgDgHAAQgGAAgHADg");
	this.shape_28.setTransform(843.825,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AAYAvIAAgzQAAgMgHgHQgGgHgLABQgKgBgGAHQgGAHAAAMIAAAzIgUAAIAAhbIAUAAIAAAKQAEgGAIgDQAHgEAHABQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_29.setTransform(833.275,13.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgXArQgIgFgGgJQgEgJAAgNIAAg1IATAAIAAAyQAAANAGAHQAGAGAKAAQAKAAAHgGQAGgHAAgNIAAgyIATAAIAABcIgTAAIAAgLQgEAGgHADQgIADgHAAQgLAAgJgEg");
	this.shape_30.setTransform(822.6,13.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgYAqQgKgGgHgLQgFgLAAgOQAAgNAFgLQAHgLALgGQAKgGANAAQANAAALAGQALAGAGALQAHALgBANQAAAOgGALQgHALgLAGQgKAGgNAAQgNAAgLgGgAgNgbQgHAEgDAHQgEAHAAAJQAAAPAIAIQAIAJALAAQAGAAAHgEQAGgEAEgHQAFgHAAgKQgBgJgDgHQgEgHgHgEQgGgDgHAAQgHAAgGADg");
	this.shape_31.setTransform(812.1,13.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgXAvIAAhbIAUAAIAAANQADgIAHgEQAHgDAKAAIAAAUIgFAAQgMgBgFAHQgFAFAAAPIAAAvg");
	this.shape_32.setTransform(804.175,13.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AgZAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQAKgGAMAAQAKAAAIAEQAIAFAFAGIAAgNIAUAAIAABcIgUAAIAAgOQgFAGgIAFQgJAEgJAAQgMAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_33.setTransform(794.825,13.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_34.setTransform(781.125,13.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_35.setTransform(773.875,12.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_36.setTransform(765.625,11.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgcA9QgNgIgBgPIATAAQACAHAHAFQAHAEAJAAQAMAAAHgHQAHgIAAgNIAAgPQgFAGgIAFQgIAEgKAAQgMAAgKgGQgKgGgGgLQgGgLAAgOQAAgNAGgMQAGgKAKgHQAKgFAMAAQAKgBAIAFQAJAEAEAHIAAgNIAUAAIAABdQAAANgGAKQgFAKgKAGQgLAFgOAAQgSAAgMgJgAgNgxQgGAEgEAHQgEAHAAAJQAAAKAEAIQAEAFAGAEQAHAEAGABQAHgBAHgEQAGgDAEgGQAEgIAAgJQAAgKgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_37.setTransform(754.375,15.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_38.setTransform(747.075,11.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AAYAvIAAgzQAAgMgHgHQgGgHgLABQgKgBgGAHQgGAHAAAMIAAAzIgUAAIAAhbIAUAAIAAAKQAEgGAIgDQAHgEAHABQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_39.setTransform(739.725,13.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_40.setTransform(727.375,12.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_41.setTransform(720.025,13.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_42.setTransform(710.675,13.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_43.setTransform(703.525,11.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AAYAvIAAgzQAAgMgHgHQgGgHgLABQgKgBgGAHQgGAHAAAMIAAAzIgUAAIAAhbIAUAAIAAAKQAEgGAIgDQAHgEAHABQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_44.setTransform(696.175,13.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AAYAvIAAgzQAAgMgHgHQgGgHgLABQgKgBgGAHQgGAHAAAMIAAAzIgUAAIAAhbIAUAAIAAAKQAEgGAIgDQAHgEAHABQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_45.setTransform(685.575,13.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgXArQgJgFgEgJQgGgJAAgNIAAg1IATAAIAAAyQABANAGAHQAGAGAKAAQALAAAGgGQAHgHgBgNIAAgyIAUAAIAABcIgUAAIAAgLQgEAGgIADQgHADgIAAQgKAAgJgEg");
	this.shape_46.setTransform(674.85,13.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AgMBBIAAhMIgLAAIAAgQIALAAIAAgHQAAgQAJgHQAHgHATAAIAAAQQgKAAgDADQgEADABAIIAAAHIARAAIAAAQIgRAAIAABMg");
	this.shape_47.setTransform(666.95,11.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_48.setTransform(655.225,13.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_49.setTransform(644.925,11.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_50.setTransform(636.575,12.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgZA5QgKgGgGgLQgGgLAAgOQAAgOAGgKQAGgLAKgGQAKgGAMAAQAIAAAJAEQAJAEAFAHIAAgtIAUAAIAAB8IgUAAIAAgOQgEAHgJAEQgIAEgKABQgMAAgKgHgAgNgMQgGAFgEAHQgEAFAAAKQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgJQAAgLgEgFQgEgHgGgFQgHgDgHAAQgGAAgHADg");
	this.shape_51.setTransform(623.675,12);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AAYAvIAAgzQAAgMgHgHQgGgHgLABQgKgBgGAHQgGAHAAAMIAAAzIgUAAIAAhbIAUAAIAAAKQAEgGAIgDQAHgEAHABQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_52.setTransform(613.175,13.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgZAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQAKgGAMAAQAKAAAIAEQAIAFAFAGIAAgNIAUAAIAABcIgUAAIAAgOQgFAGgIAFQgJAEgJAAQgMAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_53.setTransform(601.925,13.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_54.setTransform(878.375,-10.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgXAqQgLgGgHgLQgFgLgBgOQABgNAFgLQAHgLALgGQAKgGANAAQANAAALAGQALAGAGALQAHALAAANQgBAOgGALQgHALgLAGQgKAGgNAAQgNAAgKgGgAgNgbQgHAEgDAHQgEAHAAAJQAAAPAIAIQAIAJALAAQAHAAAGgEQAGgEAEgHQAFgHAAgKQAAgJgEgHQgEgHgHgEQgGgDgHAAQgHAAgGADg");
	this.shape_55.setTransform(867.8,-10.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_56.setTransform(858.175,-10.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgZAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQAKgGAMAAQAKAAAIAEQAIAFAFAGIAAgNIAUAAIAABcIgUAAIAAgOQgFAGgIAFQgJAEgJAAQgMAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_57.setTransform(848.025,-10.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_58.setTransform(837.675,-10.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_59.setTransform(828.275,-10.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_60.setTransform(814.825,-10.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_61.setTransform(804.525,-11.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_62.setTransform(796.175,-11.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgMBBIAAhMIgLAAIAAgQIALAAIAAgHQAAgQAIgHQAIgHASAAIAAAQQgIAAgEADQgEADABAIIAAAHIARAAIAAAQIgRAAIAABMg");
	this.shape_63.setTransform(786.55,-11.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgXAqQgMgGgFgLQgHgLAAgOQAAgNAHgLQAGgLALgGQALgGAMAAQAOAAAKAGQALAGAHALQAFALABANQAAAOgHALQgGALgLAGQgLAGgNAAQgNAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAPAIAIQAHAJAMAAQAHAAAGgEQAHgEAEgHQADgHAAgKQABgJgEgHQgEgHgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_64.setTransform(778.75,-10.125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_65.setTransform(765.075,-10.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AA5AvIAAgyQAAgNgHgHQgGgGgLAAQgLAAgGAGQgGAHAAANIAAAyIgSAAIAAgyQAAgNgHgHQgGgGgLAAQgLAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAIAAQALAAAJAEQAIAFAFAJQAEgJAJgEQAJgFAKAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_66.setTransform(752.175,-10.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_67.setTransform(741.425,-11.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_68.setTransform(737.275,-11.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgMBBIAAhMIgLAAIAAgQIALAAIAAgHQAAgQAJgHQAHgHATAAIAAAQQgKAAgDADQgDADgBAIIAAAHIASAAIAAAQIgSAAIAABMg");
	this.shape_69.setTransform(732.6,-11.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_70.setTransform(722.925,-11.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_71.setTransform(715.625,-10.125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_72.setTransform(706.225,-10.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgOA8QgJgFgFgHIAAAOIgTAAIAAh9IATAAIAAAuQAFgGAJgEQAIgFAKAAQAMAAAKAGQALAGAFALQAGAKAAAOQAAAOgGALQgFALgLAGQgKAHgMgBQgKAAgIgDgAgNgLQgGADgEAIQgFAFAAALQAAAJAFAHQAEAIAGADQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgGQgEgIgGgDQgHgEgHAAQgGAAgHAEg");
	this.shape_73.setTransform(695.95,-11.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_74.setTransform(680.925,-10.125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_75.setTransform(670.625,-11.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_76.setTransform(662.275,-11.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_77.setTransform(650.225,-10.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AgVAqQgLgGgGgLQgFgLAAgOQAAgNAFgLQAGgLALgGQAKgGAMAAQARAAALAIQALAIAEAPIgVAAQgCgHgGgEQgFgEgJAAQgLAAgHAJQgHAIAAAOQAAAPAHAJQAHAIALAAQARAAAFgPIAVAAQgEAPgLAIQgLAIgRAAQgMAAgKgGg");
	this.shape_78.setTransform(640.275,-10.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_79.setTransform(630.075,-10.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_80.setTransform(619.675,-10.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_81.setTransform(612.575,-11.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDC554").s().p("AgXAvIAAhcIAUAAIAAAOQADgHAHgFQAHgDAKAAIAAATIgFAAQgMAAgFAHQgFAFAAAOIAAAwg");
	this.shape_82.setTransform(607.775,-10.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_83.setTransform(599.275,-10.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EDC554").s().p("AgvBGIAAiJIATAAIAAAOQAGgHAIgEQAIgFAKAAQAMAAAKAGQAKAHAGAKQAGALAAAOQAAAOgGAKQgGALgKAHQgKAGgMAAQgJAAgJgFQgIgEgGgGIAAA6gAgNgwQgGAEgEAHQgFAHAAAKQAAAJAFAHQAEAHAGADQAHAEAGAAQAHAAAHgEQAGgEAEgGQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgEgHAAQgGAAgHAEg");
	this.shape_84.setTransform(588.95,-7.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EDC554").s().p("AATAuIgTgfIgTAfIgUAAIAeguIgeguIAVAAIAUAgIATggIAUAAIgeAuIAeAug");
	this.shape_85.setTransform(579.05,-10.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDC554").s().p("AggA7IAAh1IBAAAIAAAQIgsAAIAAAiIAoAAIAAAPIgoAAIAAAkIAsAAIAAAQg");
	this.shape_86.setTransform(570.8,-11.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(186.1,-25.1,699.4,51.1), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAYQgJgJAAgOQAAgOAJgJQAIgJALAAQAGAAAHADQAFADAEAFQADAEAAAHIABAMIgrAAQAAAJAFAGQAEAGAHAAQAJAAAEgGQACgDACgEIAJAAQABAEgDADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQAAgHgDgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape.setTransform(155.85,52.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAHgJQAJgJALAAQAJAAAHAFQAGAFACAMIgKAAQgBgGgDgDQgDgEgHAAQgKAAgEAJQgCAHAAAIQAAAJADAGQAFAGAHAAQAGAAAEgEQADgDACgHIAKAAQgCAMgHAFQgGAGgLAAQgLAAgHgJg");
	this.shape_1.setTransform(149.85,52.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_2.setTransform(143.725,52.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAYQgHgJgBgOQABgOAHgJQAJgJALAAQAHAAAGADQAFADAEAFQACAEABAHIACAMIgrAAQgBAJAFAGQAEAGAIAAQAHAAAFgGQADgDAAgEIAKAAQAAAEgCADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_3.setTransform(137.25,52.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_4.setTransform(132.775,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgDQAEgFAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAFAAAHIAAAig");
	this.shape_5.setTransform(129.975,52.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgJAMAAQAHAAAFADQAHADACAFQADAEACAHIABAMIgrAAQAAAJAEAGQAEAGAIAAQAHAAAFgGQACgDACgEIAKAAQAAAEgDADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_6.setTransform(124.4,52.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaArIAAhTIAKAAIAAAHQADgEAEgCQAFgDAGAAQALAAAHAIQAHAHAAAQQAAASgKAJQgHAFgJAAQgGAAgEgDQgDgBgDgFIAAAfgAgOgWQgCAFAAAJQAAAHACADQAEAKAKAAQAHAAAFgGQAEgGAAgKQAAgIgCgFQgEgKgKAAQgKAAgEALg");
	this.shape_7.setTransform(118.175,53.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAeIgOgXIgOAXIgNAAIAVgeIgUgdIANAAIAOAVIANgVIANAAIgUAdIAVAeg");
	this.shape_8.setTransform(111.9,52.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhSIA7AAIAAAKIgwAAIAAAYIAsAAIAAAKIgsAAIAAAcIAwAAIAAAKg");
	this.shape_9.setTransform(105.35,51);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAYQgHgJgBgOQABgOAHgJQAJgJALAAQAGAAAHADQAFADAEAFQACAEABAHIABAMIgqAAQgBAJAFAGQAEAGAHAAQAJAAAEgGQADgDAAgEIAKAAQAAAEgCADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgKAAQgGAAgFAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_10.setTransform(94.85,52.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAIgJQAHgJAMAAQAKAAAGAFQAHAFABAMIgKAAQgBgGgDgDQgEgEgGAAQgJAAgFAJQgCAHAAAIQAAAJADAGQAFAGAHAAQAGAAAEgEQAEgDABgHIAKAAQgCAMgGAFQgIAGgKAAQgLAAgHgJg");
	this.shape_11.setTransform(88.85,52.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgDAIgCIAQgCQADAAABgCIABgFQAAgFgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACgBIAAAIIgEABIgDAAQgGAAgCgDIgCgGQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAFADACQAEADAEAAQAFAAAEgDQAJgFAAgIIAAgIIgFABg");
	this.shape_12.setTransform(82.775,52.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_13.setTransform(78.2,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgDAIgCIAQgCQADAAABgCIABgFQAAgFgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACgBIAAAIIgEABIgDAAQgGAAgCgDIgCgGQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAFADACQAEADAEAAQAFAAAEgDQAJgFAAgIIAAgIIgFABg");
	this.shape_14.setTransform(73.825,52.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAqIAAhSIAkAAQALAAAHAFQAHAHAAALQAAAKgGAHQgGAGgNABIgZAAIAAAjgAgTgCIAWAAQAHAAAFgEQAEgDAAgIQAAgJgGgDQgEgCgGAAIgWAAg");
	this.shape_15.setTransform(66.85,51);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAYQgHgJgBgOQABgOAHgJQAJgJALAAQAHAAAGADQAFADAEAFQACAEABAHIACAMIgrAAQgBAJAFAGQAEAGAIAAQAHAAAFgGQADgDAAgEIAKAAQAAAEgCADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_16.setTransform(56.25,52.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_17.setTransform(51.825,51);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAeIgWg7IAMAAIAPAwIARgwIALAAIgXA7g");
	this.shape_18.setTransform(47.625,52.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAHgJQAJgJALAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgNAAgHgIgAgNgPQgDAHAAAJQAAAKADAGQAEAHAJAAQAKAAADgIQAEgIABgIQgBgJgDgFQgDgIgLAAQgJAAgEAHg");
	this.shape_19.setTransform(41.5,52.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdAqIAAgxIABgIIAAgMIgYBFIgKAAIgYhFIAAACIAAAJIAAAJIAAAxIgLAAIAAhSIAQAAIAXBEIAYhEIAQAAIAABSg");
	this.shape_20.setTransform(33.55,51);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_21.setTransform(24.25,51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgDAIgCIAQgCQADAAABgCIABgFQAAgFgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACgBIAAAIIgEABIgDAAQgGAAgCgDIgCgGQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAFADACQAEADAEAAQAFAAAEgDQAJgFAAgIIAAgIIgFABg");
	this.shape_22.setTransform(19.875,52.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgJAMAAQAHAAAFADQAHADACAFQADAEACAHIABAMIgrAAQAAAJAEAGQAEAGAIAAQAHAAAFgGQACgDACgEIAKAAQAAAEgDADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_23.setTransform(13.25,52.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAqIAAgEIgBgGIgBgOQAAgIgGgCQgDgCgHAAIgYAAIAAAkIgLAAIAAhSIAlAAQAJAAAHACQALAGAAAOQAAAHgDAFQgDAEgGACQAFACADAEQACADAAAIIAAAKIABAIQABADADACIAAACgAgWgCIAZAAQAIgBAEgDQAEgDABgIQgBgJgGgDQgDgCgGAAIgaAAg");
	this.shape_24.setTransform(6.15,51);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgJAMAAQAHAAAFADQAHADACAFQADAEACAHIABAMIgrAAQAAAJAEAGQAEAGAIAAQAHAAAFgGQACgDACgEIAKAAQAAAEgDADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgHAAgFAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_25.setTransform(-4.75,52.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_26.setTransform(-11.075,50.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgcAAIAAgJIBDAAIAAAJIgcAAIAABJg");
	this.shape_27.setTransform(-17.825,51);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAGADADQAEAFALAAQAHAAAEgCQAEgDAAgEQAAgDgDgDQgDgCgVgEQgPgFgGgEQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAGAAALQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_28.setTransform(158.325,32.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AgKAPQAIgDACgGQACgEgBgCIgMAAIAAgWIAXAAIAAARQAAAMgGAHQgGAHgKACg");
	this.shape_29.setTransform(151.825,26.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_30.setTransform(146.025,32.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgdAlQgNgMAAgYQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABAKQABAHAAAKIg9AAQABAOAIAGQAEADAGAAQAIAAAEgFQADgCACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgKgFgFQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_31.setTransform(137.5333,32.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgcA6QgLgHgCgNIAaAAQABAEACACQAEADAIAAQANAAAEgJQADgFAAgNIAAgGQgDAGgEADQgHAFgKAAQgSAAgKgMQgLgMAAgUQAAgUAKgOQAKgOATAAQAGAAAFACQAIAEAGAJIAAgNIAXAAIAABVQAAASgGAJQgKAPgcAAQgSAAgKgHgAgQggQgCAHAAAJQAAAIACAGQAFAKAMAAQAIAAAGgGQAFgFAAgOQAAgNgFgHQgFgGgKAAQgLAAgFALg");
	this.shape_32.setTransform(127.425,33.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AARAuIAAg2QAAgHgCgEQgEgHgJAAQgLAAgFAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAEgHAEgDQAIgFAKAAQAOAAAKAHQAIAHAAARIAAA8g");
	this.shape_33.setTransform(117.35,32.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgLA9IAAhZIAXAAIAABZgAgLgnIAAgVIAXAAIAAAVg");
	this.shape_34.setTransform(109.75,30.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAGADADQAEAFALAAQAHAAAEgCQAEgDAAgEQAAgDgDgDQgDgCgVgEQgPgFgGgEQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAGAAALQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_35.setTransform(102.675,32.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAGADADQAEAFALAAQAHAAAEgCQAEgDAAgEQAAgDgDgDQgDgCgVgEQgPgFgGgEQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAGAAALQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_36.setTransform(93.225,32.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAHAAANQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgNgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_37.setTransform(83.375,32.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_38.setTransform(75.275,32.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AgoAwQgQgRAAgeQAAgcAQgSQARgSAZAAQAYAAAOALQAOAMACASIgZAAQgDgNgLgFQgGgCgIAAQgNAAgKALQgKALAAAWQAAAWALAJQAKAKAMAAQANAAAIgIQAJgHABgMIgcAAIAAgTIAzAAIAABAIgRAAIgDgPQgHAJgGADQgKAGgOAAQgYAAgQgQg");
	this.shape_39.setTransform(64.75,30.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AgIA0QgDgEAAgIIAAg3IgOAAIAAgRIAOAAIAAgZIAWAAIAAAZIAOAAIAAARIgOAAIAAAvQAAAFABACQACABAHAAIACAAIACAAIAAASIgKAAIgFAAQgMAAgGgGg");
	this.shape_40.setTransform(50.65,30.9567);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AghApQgIgHAAgNQAAgRANgHQAHgEANgBIAIgBIAJgCQAFgDAAgEQAAgGgEgCQgEgCgGAAQgJAAgDAEQgDADgBAGIgWAAQAAgMAGgIQAKgMAWAAQAOAAAMAGQALAGAAAQIAAApIABAKQAAAFABACIADACIAAAEIgZAAIgCgFIAAgGQgFAFgHAEQgGAFgKAAQgMAAgIgHgAAJADIgGACIgEABQgIABgDACQgGADAAAHQAAAGAEADQADACAFAAQAHAAAGgEQAGgFABgLIAAgJg");
	this.shape_41.setTransform(43.275,32.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgIA0QgDgEAAgIIAAg3IgOAAIAAgRIAOAAIAAgZIAWAAIAAAZIAOAAIAAARIgOAAIAAAvQAAAFABACQACABAHAAIACAAIACAAIAAASIgKAAIgFAAQgMAAgGgGg");
	this.shape_42.setTransform(30.85,30.9567);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgdAlQgNgMAAgYQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABAKQABAHAAAKIg9AAQABAOAIAGQAEADAGAAQAIAAAEgFQADgCACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgKgFgFQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_43.setTransform(23.3833,32.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AAjA9IAAhSIAAgKIABgKIgYBmIgYAAIgXhmIABAKIAAAKIAABSIgYAAIAAh5IAlAAIAVBfIAWhfIAlAAIAAB5g");
	this.shape_44.setTransform(11.725,30.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AgdAlQgNgMAAgYQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABAKQABAHAAAKIg9AAQABAOAIAGQAEADAGAAQAIAAAEgFQADgCACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgKgFgFQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_45.setTransform(-4.9167,32.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AATA9IgPhGIgEgYIgDAYIgPBGIgYAAIgjh5IAbAAIARBFIADATIAEgTIANhFIAaAAIAPBFIAEATIAEgSIAQhGIAaAAIgjB5g");
	this.shape_46.setTransform(-17.325,30.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAjAkIAAgwQAAgHgDgDQgEgCgFAAQgHAAgFAEQgFAFAAALIAAAoIgLAAIAAgtQAAgHgCgEQgDgFgHAAQgHAAgFAGQgGAFAAAOIAAAkIgMAAIAAhGIAMAAIAAAKIAIgHQAFgEAIAAQAIAAAGAEIAEAHQAEgGAFgDQAGgCAGAAQAPAAAFAKQADAGAAAJIAAAug");
	this.shape_47.setTransform(256.175,49.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgeAzIAAhiIALAAIAAAIQAEgEAEgDQAGgEAHABQAMgBAJAKQAIAJAAARQAAAWgMAKQgIAGgKAAQgHAAgFgDQgEgCgEgFIAAAlgAgRgbQgCAHAAAKQAAAIACAFQAFALAMAAQAIAAAFgHQAGgHAAgNQAAgIgCgHQgFgMgMABQgMAAgFAMg");
	this.shape_48.setTransform(246.925,50.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgZAiQgHgMAAgVQAAgPAFgMQAHgWAUAAQASAAAJAPQAGAMAAAVQAAASgGANQgJASgSAAQgRAAgIgPgAgOgbQgFAKAAASQAAAPADAIQAFAOALAAQAJAAAGgIQAFgIAAgWQAAgQgEgKQgEgLgMAAQgJAAgFAKg");
	this.shape_49.setTransform(235.4,48.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZAiQgHgMAAgVQAAgPAFgMQAHgWAUAAQASAAAJAPQAGAMAAAVQAAASgGANQgIASgTAAQgRAAgIgPgAgOgbQgFAKAAASQAAAPADAIQAFAOALAAQAJAAAFgIQAGgIAAgWQAAgQgEgKQgEgLgLAAQgKAAgFAKg");
	this.shape_50.setTransform(227.9,48.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGAjIAAgPIANAAIAAAPgAgGgTIAAgPIANAAIAAAPg");
	this.shape_51.setTransform(222.65,49.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgTAvQAFgbAOgaQAKgQAJgMIgzAAIAAgMIBBAAIAAALQgEAEgIALQgHALgHAMQgFAMgDALIgEAVg");
	this.shape_52.setTransform(216.7,48.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAnQgJgKgBgYQAAgRAFgNQAIgXAVAAQAQAAAHAJQAFAIAAAIIgLAAQgBgFgCgEQgFgFgJAAQgJAAgGAJQgGAJAAASQAEgHAHgCQAFgDAGgBQAMABAJAHQAJAHAAAPQgBANgHAKQgJAKgQAAQgMAAgKgKgAgLABQgHAGABAKQAAAJAFAGQAFAHAIgBQAKABAFgHQAEgGAAgJQAAgHgEgHQgEgGgLABQgHAAgFADg");
	this.shape_53.setTransform(288.85,31.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggAwQABgNAEgJQAFgJAMgHIANgHQAIgEADgEQAFgFABgIQgBgIgFgFQgEgFgIAAQgMAAgEAKQgDAFgBAIIgMAAQABgMAEgIQAIgOATAAQAQAAAHAJQAIAJAAALQAAALgIAHQgFAFgMAHIgIAFQgHADgDAEQgHAFgCAHIAzAAIAAAMg");
	this.shape_54.setTransform(281.25,30.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZAiQgHgMAAgVQAAgPAEgMQAIgWAUAAQASAAAIAPQAHAMAAAVQAAASgGANQgIASgTAAQgRAAgIgPgAgOgbQgFAKAAASQAAAPADAIQAFAOALAAQAJAAAGgIQAFgIAAgWQAAgQgEgKQgEgLgMAAQgJAAgFAKg");
	this.shape_55.setTransform(273.75,31.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AggAwQABgNAFgJQAEgJANgHIALgHQAJgEADgEQAGgFAAgIQAAgIgGgFQgEgFgJAAQgLAAgFAKQgCAFAAAIIgNAAQABgMAEgIQAIgOASAAQARAAAIAJQAHAJAAALQAAALgIAHQgFAFgMAHIgIAFQgGADgEAEQgGAFgCAHIAyAAIAAAMg");
	this.shape_56.setTransform(266.25,30.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGALQAEgBACgFIAAgFIAAgBIAAgBIgGAAIAAgOIANAAIAAANQAAAHgDAGQgDAGgHABg");
	this.shape_57.setTransform(256.9,36.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYAoQgIgKAAgNIAMAAQABAJADAEQAFAIALAAQAJAAAGgFQAGgFAAgIQAAgKgGgEQgGgEgKAAIgDAAIgCAAIAAgJIADAAIADAAQAFAAAFgCQAHgEAAgJQAAgHgFgEQgFgEgGAAQgLAAgFAIQgCAEgBAIIgMAAQAAgKAFgIQAHgNASAAQAOAAAIAHQAIAGAAAMQAAAJgFAGQgDADgFACQAIACAEAFQAEAGAAAIQAAAOgJAIQgJAJgPAAQgRAAgHgJg");
	this.shape_58.setTransform(251.125,31.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAFAvIAAhCIgWAAIAAgJQAOgBADgDQAFgDADgLIAKAAIAABdg");
	this.shape_59.setTransform(243.05,31.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTAuQgIgFgBgLIANAAQAAAFADACQAEAEAIAAQANAAAEgJQADgGAAgPQgEAGgFACQgFADgHAAQgLAAgJgIQgJgIAAgSQAAgSAJgKQAJgKALAAQAIAAAGAEQAEACADAFIAAgJIALAAIAAA/QAAAOgEAIQgHAOgUAAQgMAAgHgFgAgPgcQgDAHAAAKQAAALAFAGQAFAGAIAAQAMAAAFgLQADgGAAgJQAAgNgGgGQgEgGgJAAQgLAAgFALg");
	this.shape_60.setTransform(232.2,33.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgYAaQgDgFAAgJIAAgwIAMAAIAAAvQAAAFACAEQADAGAIAAQALAAAFgLQACgGAAgKIAAgjIAMAAIAABGIgLAAIAAgKQgCAEgEADQgGAGgJgBQgPAAgFgKg");
	this.shape_61.setTransform(224.875,32.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAdAxIgKgdIgmAAIgKAdIgOAAIAlhhIAOAAIAjBhgAAPAJIgPgqIgOAqIAdAAg");
	this.shape_62.setTransform(216.7,30.875);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGALQAEgBACgFIAAgFIAAgBIAAgBIgGAAIAAgOIANAAIAAANQAAAHgDAGQgDAGgHABg");
	this.shape_63.setTransform(207.25,36.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgYAaQgDgFAAgJIAAgwIAMAAIAAAvQAAAFACAEQADAGAIAAQALAAAFgLQACgGAAgKIAAgjIAMAAIAABGIgLAAIAAgKQgCAEgEADQgGAGgJgBQgPAAgFgKg");
	this.shape_64.setTransform(201.575,32.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AARAxIAAgtQAAgHgCgDQgEgGgJAAQgGAAgGAFQgGAFAAANIAAAmIgMAAIAAhhIAMAAIAAAkQAEgFAEgCQAFgEAIAAQAPAAAGALQADAGAAAJIAAAug");
	this.shape_65.setTransform(194.175,30.875);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgGAxIAAhVIggAAIAAgMIBNAAIAAAMIggAAIAABVg");
	this.shape_66.setTransform(186.25,30.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR11, new cjs.Rectangle(-43.7,22,338.2,37.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAEAMQAGgBACgHIAAgGIgIAAIAAgQIAQAAIAAAPQAAAIgEAGQgDAHgJABgAgTAMQAFgBACgHIABgGIgIAAIAAgQIAPAAIAAAPQAAAIgDAGQgEAHgIABg");
	this.shape.setTransform(224.925,10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA2IAAgPIAOAAIAAAPgAgCAcIgFgtIAAgkIAPAAIAAAkIgEAtg");
	this.shape_1.setTransform(220.65,14.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgMAPAAQAJAAAHAEQAJAEADAGQAFAGABAIQABAGAAALIg4AAQAAAMAFAHQAFAHAKAAQALAAAGgHQADgEACgFIANAAQAAAEgDAGQgEAFgDADQgGAGgJACQgFACgFAAQgOAAgLgLgAAXgGQgCgJgDgFQgFgJgNAAQgHAAgHAGQgGAHAAAKIArAAIAAAAg");
	this.shape_2.setTransform(213.9,16.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAiQgIgIAAgMIANAAQAAAHADAEQAFAGAMAAQAIAAAFgEQAFgCAAgIQAAgEgEgDIgMgEIgJgCQgLgDgEgCQgJgFAAgKQAAgLAIgHQAIgHAOAAQASAAAIALQAEAGAAAHIgMAAQAAgDgDgFQgFgEgLAAQgHAAgFACQgDADAAAFQAAAFAFADIAJADIAIADQAOADAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_3.setTransform(206.05,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgGQAHgFALgCIAUgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAJgGQAKgGAMAAQAMAAAJAGQAJAFAAALIAAAtIABADQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgHAAgDgFIgCgHQgEAFgIAEQgGAEgJAAQgLAAgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_4.setTransform(198.225,15.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATA2IAAgyQAAgHgDgEQgDgHgKAAQgHAAgHAGQgHAGAAAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQARAAAGAMQADAHAAALIAAAyg");
	this.shape_5.setTransform(189.725,14.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAeQgJgLAAgRQAAgUAKgLQAKgMAPAAQANAAAJAGQAIAHACAQIgNAAQgBgHgFgFQgEgFgJAAQgMAAgFAMQgEAIAAALQAAAMAFAIQAFAIAKAAQAIAAAFgFQAFgFACgJIANAAQgDAQgIAHQgJAIgOAAQgOAAgKgMg");
	this.shape_6.setTransform(181.825,15.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_7.setTransform(175.875,15.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAdQgDgFAAgLIAAg1IANAAIAAA0QAAAGACAEQAEAHAJAAQAMAAAFgMQADgHAAgKIAAgoIANAAIAABOIgMAAIAAgLQgDAEgDAEQgIAFgKAAQgQAAgGgLg");
	this.shape_8.setTransform(168.675,16.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAHAAQAOAAAKAKQAJAKAAAUQAAAYgOALQgIAHgMAAQgIAAgGgEQgEgCgDgFIAAAogAgSgeQgDAIAAALQAAAJADAGQAFAMANAAQAJAAAGgIQAGgIAAgOQAAgKgDgGQgEgNgOAAQgOAAgEANg");
	this.shape_9.setTransform(160.6,17.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQAKgMAQAAQAJAAAHAEQAIAEAFAGQAEAGAAAIQACAGAAALIg4AAQAAAMAFAHQAGAHAJAAQALAAAGgHQAEgEABgFIANAAQAAAEgDAGQgDAFgEADQgGAGgJACQgFACgFAAQgPAAgKgLgAAXgGQgBgJgEgFQgFgJgNAAQgHAAgHAGQgGAHAAAKIArAAIAAAAg");
	this.shape_10.setTransform(147.85,16.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_11.setTransform(142.075,14.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiA4IAAhtIANAAIAAALQAEgGAFgDQAHgEAHAAQAOAAAKAKQAJAKAAAUQAAAYgOALQgIAHgMAAQgHAAgGgEQgFgCgDgFIAAAogAgSgeQgDAIAAALQAAAJADAGQAFAMANAAQAJAAAGgIQAGgIAAgOQAAgKgDgGQgEgNgOAAQgOAAgEANg");
	this.shape_12.setTransform(136.4,17.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAnAoIAAg2QAAgHgDgDQgEgDgGAAQgIAAgGAFQgFAFAAAMIAAAtIgNAAIAAgyQAAgIgCgEQgDgGgIAAQgHAAgHAGQgGAGAAAPIAAApIgNAAIAAhOIANAAIAAALQAFgFAEgDQAGgEAJAAQAJAAAGAEQACADADAFQAEgGAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAzg");
	this.shape_13.setTransform(125.725,15.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_14.setTransform(117.775,14.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIAMAAQABAHADAEQAFAGAMAAQAIAAAFgEQAGgCAAgIQAAgEgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAJgHQAHgHAOAAQASAAAHALQAGAGgBAHIgNAAQAAgDgCgFQgFgEgLAAQgIAAgDACQgEADgBAFQAAAFAGADIAJADIAIADQAOADAFACQAIAFAAALQAAALgJAHQgHAIgRAAQgQAAgIgIg");
	this.shape_15.setTransform(112.4,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQAKgMAQAAQAJAAAHAEQAIAEAFAGQAEAGAAAIQACAGAAALIg4AAQAAAMAFAHQAGAHAJAAQALAAAGgHQAEgEABgFIANAAQAAAEgDAGQgDAFgEADQgGAGgJACQgFACgFAAQgPAAgKgLgAAXgGQgBgJgEgFQgFgJgNAAQgHAAgHAGQgGAHAAAKIArAAIAAAAg");
	this.shape_16.setTransform(100.15,16.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATAoIAAgxQAAgHgCgEQgEgIgJAAIgHABQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAALQAFgGAGgDQAHgDAGAAQARAAAGALQADAHAAAMIAAAxg");
	this.shape_17.setTransform(91.875,15.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQAAgTAKgLQAKgMAQAAQAOAAALAKQALAKAAAUQAAASgKANQgJAMgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAANAGAIQAFAJALAAQANgBAFgJQAEgLAAgLQABgLgEgHQgFgKgOAAQgLgBgFAKg");
	this.shape_18.setTransform(83.45,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA3IgEAAIAAgNIAFACIADAAIAFgBIADgDIADgGIADgIIgdhRIAPAAIAUBAIAVhAIAPAAIgMAjIgNAgQgLAegEAHQgEAHgMAAg");
	this.shape_19.setTransform(71.425,17.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQgBgTALgLQAKgMAQAAQAPAAAKAKQALAKAAAUQAAASgKANQgJAMgSAAQgQAAgKgLgAgQgUQgGAJAAAMQAAANAGAIQAFAJALAAQANgBAFgJQAEgLAAgLQAAgLgDgHQgGgKgNAAQgLgBgFAKg");
	this.shape_20.setTransform(63.4,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBGIgDAAIAAgMIALgBQABgCAAgGIAAhYIANAAIAABZQAAAJgDAEQgEAHgNAAgAAAg2IAAgPIANAAIAAAPg");
	this.shape_21.setTransform(56.95,16.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AATAoIAAgxQAAgHgCgEQgEgIgJAAIgHABQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAALQAFgGAGgDQAHgDAGAAQARAAAGALQADAHAAAMIAAAxg");
	this.shape_22.setTransform(51.775,15.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIBOAAIAAANIhAAAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_23.setTransform(42.825,14.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_24.setTransform(31.325,19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIANAAQAAAHADAEQAFAGAMAAQAHAAAGgEQAFgCABgIQgBgEgEgDIgMgEIgJgCQgLgDgEgCQgJgFAAgKQAAgLAIgHQAJgHANAAQASAAAIALQAFAGgBAHIgMAAQAAgDgEgFQgEgEgLAAQgHAAgFACQgDADAAAFQAAAFAFADIAIADIAIADQAPADAFACQAIAFAAALQAAALgIAHQgIAIgRAAQgRAAgHgIg");
	this.shape_25.setTransform(25.5,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAuQgCgFAAgHIAAgzIgLAAIAAgLIALAAIAAgWIAMAAIAAAWIANAAIAAALIgNAAIAAAyQAAAEADACIAFABIACgBIADAAIAAALIgGABIgEAAQgJAAgEgFg");
	this.shape_26.setTransform(19.55,14.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgGQAHgFALgCIAUgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAJgGQAKgGAMAAQAMAAAJAGQAJAFAAALIAAAtIABADQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgHAAgDgFIgCgHQgEAFgIAEQgGAEgJAAQgLAAgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_27.setTransform(13.525,15.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAJgMARAAQAHAAAIAEQAIAEAFAGQADAGABAIQACAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEACgFIANAAQgBAEgCAGQgDAFgEADQgGAGgJACQgFACgFAAQgPAAgJgLgAAXgGQgBgJgDgFQgGgJgMAAQgIAAgHAGQgGAHAAAKIArAAIAAAAg");
	this.shape_28.setTransform(4.95,16.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAiQgIgIAAgMIAMAAQABAHADAEQAFAGAMAAQAHAAAGgEQAGgCgBgIQABgEgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAJgHQAHgHAOAAQASAAAHALQAFAGAAAHIgNAAQAAgDgCgFQgFgEgLAAQgIAAgDACQgFADAAAFQAAAFAGADIAJADIAIADQAOADAFACQAIAFAAALQAAALgJAHQgIAIgQAAQgRAAgHgIg");
	this.shape_29.setTransform(-2.9,16);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_30.setTransform(-12.975,15.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbAdQgDgFAAgLIAAg1IANAAIAAA0QAAAGACAEQAEAHAJAAQAMAAAFgMQADgHAAgKIAAgoIANAAIAABOIgMAAIAAgLQgDAEgDAEQgIAFgKAAQgQAAgGgLg");
	this.shape_31.setTransform(-20.175,16.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQgBgTALgLQAKgMAQAAQAOAAALAKQALAKAAAUQAAASgKANQgJAMgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAANAGAIQAFAJALAAQANgBAFgJQAEgLAAgLQABgLgEgHQgGgKgNAAQgLgBgFAKg");
	this.shape_32.setTransform(-28.5,16);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYA3IgEAAIAAgNIAFACIADAAIAFgBIADgDIADgGIADgIIgdhRIAPAAIAUBAIAVhAIAPAAIgMAjIgNAgQgLAegEAHQgEAHgMAAg");
	this.shape_33.setTransform(-36.375,17.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQA2IgYgoIgLALIAAAdIgNAAIAAhrIANAAIAAA+IAhghIARAAIgeAdIAgAxg");
	this.shape_34.setTransform(-47.625,14.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAeQgJgLAAgRQAAgUAKgLQAKgMAPAAQANAAAJAGQAIAHACAQIgNAAQgBgHgFgFQgEgFgJAAQgMAAgFAMQgEAIAAALQAAAMAFAIQAFAIAKAAQAIAAAFgFQAFgFACgJIANAAQgDAQgIAHQgJAIgOAAQgOAAgKgMg");
	this.shape_35.setTransform(-55.575,15.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_36.setTransform(-61.125,14.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAvAAQAOAAAJAIQAJAIAAAPQAAANgIAJQgIAIgQAAIghAAIAAAugAgZgDIAcAAQAKAAAGgEQAGgEAAgLQAAgMgIgEQgFgCgJAAIgcAAg");
	this.shape_37.setTransform(-67.475,14.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_38.setTransform(-79.025,19.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgYAiQgHgIgBgMIAMAAQABAHADAEQAFAGAMAAQAHAAAGgEQAFgCABgIQgBgEgEgDIgMgEIgJgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAJALQAFAGgBAHIgMAAQAAgDgEgFQgEgEgLAAQgHAAgFACQgDADAAAFQgBAFAGADIAIADIAIADQAPADAFACQAIAFAAALQAAALgJAHQgIAIgQAAQgQAAgIgIg");
	this.shape_39.setTransform(-84.85,16);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAPAnIgPg8IgPA8IgOAAIgWhOIAOAAIAPA+IAQg+IANAAIAQA9IAQg9IANAAIgWBOg");
	this.shape_40.setTransform(-94.15,15.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaAfQgKgLAAgTQAAgTAKgLQALgMAPAAQAPAAALAKQAKAKAAAUQAAASgJANQgJAMgTAAQgQAAgJgLgAgRgUQgFAJAAAMQAAANAFAIQAGAJALAAQANgBAEgJQAFgLABgLQAAgLgEgHQgGgKgNAAQgLgBgGAKg");
	this.shape_41.setTransform(-103.8,16);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AATA2IAAgyQAAgHgDgEQgDgHgKAAQgHAAgHAGQgHAGAAAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQARAAAGAMQADAHAAALIAAAyg");
	this.shape_42.setTransform(-112.075,14.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYAiQgIgIAAgMIANAAQAAAHADAEQAFAGAMAAQAHAAAGgEQAGgCgBgIQABgEgFgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAJgHQAHgHAOAAQARAAAIALQAFAGAAAHIgNAAQAAgDgCgFQgFgEgLAAQgHAAgEACQgFADAAAFQABAFAFADIAJADIAIADQAOADAFACQAIAFAAALQAAALgIAHQgJAIgQAAQgRAAgHgIg");
	this.shape_43.setTransform(-120,16);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAuQgKgHgBgPIANAAQACALAJAFQAFACAGAAQALAAAFgIQAGgHAAgJQAAgLgHgHQgGgFgJAAQgHAAgFADQgFACgDAEIgMAAIAIg4IA2AAIAAANIgsAAIgEAdIAHgEQAGgDAHAAQAOAAAKAKQAKAIAAAPQAAAPgJALQgJALgTAAQgNAAgKgHg");
	this.shape_44.setTransform(-132.175,14.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_45.setTransform(-142.575,15.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgaAfQgKgLABgTQAAgTAKgLQAJgMARAAQAOAAALAKQALAKAAAUQAAASgKANQgJAMgTAAQgPAAgKgLgAgQgUQgGAJAAAMQAAANAGAIQAFAJALAAQANgBAFgJQAEgLAAgLQAAgLgDgHQgFgKgOAAQgLgBgFAKg");
	this.shape_46.setTransform(-149.75,16);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcAsQgIgKAAgPIAOAAQABAKADAFQAFAIANAAQAKAAAGgGQAGgFABgJQAAgLgHgEQgGgFgLAAIgDAAIgDABIAAgLIAEAAIADAAQAGAAAEgCQAJgEAAgLQAAgIgFgEQgGgEgIAAQgMAAgFAIQgDAFAAAJIgNAAQAAgLAFgJQAHgOAVAAQAPAAAJAHQAJAHAAAOQAAAJgGAGQgDAEgFACQAIADAGAFQAEAHAAAJQAAAPgKAKQgKAJgRAAQgTAAgJgKg");
	this.shape_47.setTransform(-162.3,14.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgMAPAAQAJAAAIAEQAHAEAEAGQAEAGACAIQABAGAAALIg5AAQABAMAFAHQAFAHALAAQAKAAAGgHQADgEABgFIAOAAQAAAEgEAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgLgLgAAWgGQgBgJgCgFQgGgJgMAAQgJAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_48.setTransform(-174.75,16.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYAiQgIgIAAgMIAMAAQABAHADAEQAFAGAMAAQAHAAAGgEQAFgCABgIQgBgEgEgDIgLgEIgKgCQgKgDgFgCQgJgFAAgKQAAgLAIgHQAJgHANAAQARAAAIALQAFAGAAAHIgMAAQgBgDgDgFQgEgEgLAAQgIAAgEACQgDADAAAFQgBAFAGADIAIADIAIADQAPADAFACQAIAFAAALQAAALgJAHQgHAIgRAAQgQAAgIgIg");
	this.shape_49.setTransform(-182.6,16);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaAfQgKgLAAgTQAAgTAKgLQALgMAPAAQAPAAALAKQAKAKAAAUQAAASgJANQgJAMgTAAQgQAAgJgLgAgRgUQgFAJAAAMQAAANAFAIQAGAJALAAQANgBAEgJQAFgLABgLQAAgLgEgHQgGgKgNAAQgLgBgGAKg");
	this.shape_50.setTransform(-190.65,16);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAfQgJgLAAgTQgBgTALgLQAKgMAQAAQAOAAALAKQALAKAAAUQAAASgKANQgJAMgSAAQgRAAgJgLgAgQgUQgGAJAAAMQAAANAGAIQAFAJALAAQANgBAFgJQAEgLAAgLQABgLgEgHQgGgKgNAAQgLgBgFAKg");
	this.shape_51.setTransform(-199.05,16);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AATA2IAAgyQAAgHgDgEQgDgHgKAAQgHAAgHAGQgHAGAAAOIAAAqIgNAAIAAhrIANAAIAAAoQAFgGAEgCQAGgFAJAAQARAAAGAMQADAHAAALIAAAyg");
	this.shape_52.setTransform(-207.325,14.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeAuQgQgPgBggQAAgXANgQQANgQAYAAQAUAAALAKQALAMACANIgOAAQgDgKgHgHQgIgFgMAAQgPAAgJALQgLALABAXQgBASAKAMQAIAMARAAQAQAAAHgNQAFgGACgLIAPAAQgCARgLAMQgMAOgXAAQgRAAgNgLg");
	this.shape_53.setTransform(-217,14.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAEATIAAgOQAAgIAEgHQAEgHAIgBIAAAHQgEABgCADQgCAEAAAEIAAABIAAABIAIAAIAAAQgAgTATIAAgOQAAgKAEgGQAEgGAHgBIAAAHQgFABgCAGIgBAFIAAABIAAABIAIAAIAAAQg");
	this.shape_54.setTransform(-224.775,10.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAMAUQALgDAEgKQACgEAAgEIgSAAIAAgfIAhAAIAAAZQAAAPgIALQgIAKgQADgAgqAUQAMgDAEgKQACgEgBgEIgSAAIAAgfIAhAAIAAAZQAAAQgIAKQgIALgQACg");
	this.shape_55.setTransform(170.325,-18.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgQBVIAAghIAhAAIAAAhgAgIAmIgJhPIAAgrIAjAAIAAArIgJBPg");
	this.shape_56.setTransform(160.775,-13.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgqA3QgPgNAAgUIAiAAQABAJADAEQAHAHAPAAQAKAAAGgDQAFgDAAgGQAAgGgEgCQgFgDgdgHQgVgGgJgHQgJgIAAgOQAAgSAOgNQAOgMAZAAQAWAAAPAJQAPAKACAXIghAAQgBgGgCgEQgGgHgMAAQgLAAgEADQgFAEAAAEQAAAGAFADQAFACAcAHQAUAEAKAJQAKAJAAAPQAAASgOAMQgOAMgdAAQgdAAgOgMg");
	this.shape_57.setTransform(149.675,-11.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgqA3QgPgNAAgUIAiAAQABAJADAEQAHAHAPAAQAKAAAGgDQAFgDAAgGQAAgGgEgCQgFgDgdgHQgVgGgJgHQgJgIAAgOQAAgSAOgNQAOgMAZAAQAWAAAPAJQAPAKACAXIghAAQgBgGgCgEQgGgHgMAAQgLAAgEADQgFAEAAAEQAAAGAFADQAFACAcAHQAUAEAKAJQAKAJAAAPQAAASgOAMQgOAMgdAAQgdAAgOgMg");
	this.shape_58.setTransform(136.525,-11.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgvA5QgLgKAAgSQAAgXASgKQAKgFATgDIALgBIAMgDQAHgDAAgGQAAgIgFgDQgFgDgKAAQgLAAgGAGQgDAEgBAHIggAAQABgQAIgLQANgRAgAAQAUAAAQAJQAQAIAAAXIAAA5IAAAOQABAHABACIAFAEIAAAFIgkAAIgCgHIgBgIQgHAHgIAGQgKAGgNAAQgSAAgLgKgAANAFIgJACIgGABQgLACgFADQgHAEAAAKQAAAIAFAEQAEAEAHAAQAJAAAKgHQAIgGABgQIAAgNg");
	this.shape_59.setTransform(123.45,-11.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("Ag8BZIAAivIAgAAIAAATQAFgIAGgFQALgIAOAAQAWAAAPAQQAQAQAAAgQAAAggPASQgPARgXAAQgOAAgLgHQgFgEgFgIIAABBgAgZgqQgDAJAAAOQAAAVALAIQAHAGAKAAQANAAAGgLQAIgKAAgRQAAgPgHgLQgGgLgOAAQgSAAgHARg");
	this.shape_60.setTransform(109.95,-9.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AAVA/IgVgmIgWAmIgnAAIArg/Igqg+IApAAIAUAkIAUgkIAoAAIgqA9IAsBAg");
	this.shape_61.setTransform(95.8,-11.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_62.setTransform(82.6313,-11.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgQBWIAAiqIAhAAIAACqg");
	this.shape_63.setTransform(72.75,-13.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("Ag7BVIAAipIB3AAIAAAeIhUAAIAAAnIBKAAIAAAdIhKAAIAABHg");
	this.shape_64.setTransform(62.9,-13.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AATA/IgThbIgTBbIgjAAIgjh9IAjAAIAUBaIAShaIAhAAIATBaIAUhaIAiAAIglB9g");
	this.shape_65.setTransform(39.225,-11.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_66.setTransform(23.3813,-11.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAXBBIAAhMQAAgKgCgFQgFgKgOAAQgQAAgGAOQgDAIAAALIAABEIghAAIAAh9IAgAAIAAASQAGgKAGgEQAKgIAPAAQATAAANALQAMAKAAAYIAABUg");
	this.shape_67.setTransform(9.675,-11.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgkBBIAAh+IAgAAIAAAWQAGgMAGgFQAJgIAPAAIACABIADAAIAAAiIgGgBIgEAAQgUAAgHANQgCAHAAAOIAAA9g");
	this.shape_68.setTransform(-8.225,-11.525);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgyAsQgGgLAAgVIAAhMIAiAAIAABMQAAAKACAGQAFAJANAAQAQAAAHgNQACgIAAgMIAAhEIAiAAIAAB+IggAAIAAgSIgDADIgEAFQgIAHgHADQgGADgKAAQgcAAgJgVg");
	this.shape_69.setTransform(-20.7,-11.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgwAwQgQgUAAgcQAAgaAQgVQARgTAfAAQAgAAARATQAQAVAAAaQAAAcgQAUQgRATggABQgfgBgRgTgAgVgcQgIAKAAASQAAATAIALQAHAJAOABQAOgBAIgJQAIgLAAgTQAAgSgIgKQgIgLgOAAQgOAAgHALg");
	this.shape_70.setTransform(-35.1,-11.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgLBJQgGgGAAgMIAAhMIgRAAIAAgYIARAAIAAgjIAgAAIAAAjIAUAAIAAAYIgUAAIAABBQAAAIACACQACACAKAAIADAAIADAAIAAAYIgPABIgFAAQgTAAgHgIg");
	this.shape_71.setTransform(-52.975,-12.995);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgzAsQgFgLAAgVIAAhMIAiAAIAABMQAAAKADAGQAEAJANAAQAQAAAGgNQADgIAAgMIAAhEIAiAAIAAB+IggAAIAAgSIgDADIgEAFQgIAHgHADQgGADgKAAQgcAAgKgVg");
	this.shape_72.setTransform(-64.05,-11.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgwAwQgPgUAAgcQAAgaAPgVQARgTAfAAQAhAAAPATQAQAVABAaQgBAcgQAUQgPATghABQgfgBgRgTgAgVgcQgIAKAAASQAAATAIALQAHAJAOABQAPgBAHgJQAIgLAAgTQAAgSgIgKQgHgLgPAAQgOAAgHALg");
	this.shape_73.setTransform(-78.45,-11.35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgQBRQgFgEgHgKIAAARIggAAIAAiqIAgAAIAAA9QAHgJAIgFQAIgGANABQAZgBAOATQAOASAAAbQAAAdgOATQgOAUgZAAQgOAAgKgGgAgZAAQgDAIAAAOQAAARAHAKQAHAKAOAAQANABAGgLQAIgKgBgRQAAgNgDgJQgGgPgRAAQgSgBgHAQg");
	this.shape_74.setTransform(-92.55,-13.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgvA5QgLgKAAgSQAAgXASgKQAJgFAUgDIALgBIAMgDQAHgDAAgGQAAgIgFgDQgFgDgKAAQgLAAgGAGQgDAEgBAHIggAAQABgQAIgLQAOgRAfAAQAUAAAQAJQAQAIAAAXIAAA5IAAAOQAAAHADACIAEAEIAAAFIgkAAIgCgHIgBgIQgGAHgKAGQgJAGgOAAQgRAAgLgKgAANAFIgJACIgHABQgKACgFADQgHAEAAAKQAAAIAEAEQAFAEAHAAQAJAAAKgHQAJgGAAgQIAAgNg");
	this.shape_75.setTransform(-106.65,-11.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AASBVIgdg2IgOAPIAAAnIggAAIAAipIAgAAIAABbIAogvIApAAIgsAwIAuBNg");
	this.shape_76.setTransform(-125.675,-13.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgqA3QgPgNAAgUIAiAAQABAJADAEQAHAHAPAAQAKAAAGgDQAFgDAAgGQAAgGgEgCQgFgDgdgHQgVgGgJgHQgJgIAAgOQAAgSAOgNQAOgMAZAAQAWAAAPAJQAPAKACAXIghAAQgBgGgCgEQgGgHgMAAQgLAAgEADQgFAEAAAEQAAAGAFADQAFACAcAHQAUAEAKAJQAKAJAAAPQAAASgOAMQgOAMgdAAQgdAAgOgMg");
	this.shape_77.setTransform(-139.625,-11.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AAqBWIgLgkIg+AAIgMAkIglAAIA9iqIAoAAIA8CqgAAVAVIgVhCIgVBCIAqAAg");
	this.shape_78.setTransform(-154.55,-13.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AALAgIAAgXQAAgSAJgJQAIgLAPgDIAAANQgLADgEAJQgCAFAAAEIASAAIAAAegAgrAgIAAgXQAAgRAJgKQAHgLAQgDIAAANQgMADgDAJQgDAFABAEIASAAIAAAeg");
	this.shape_79.setTransform(-169.1,-19.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249,-25.5,498,51.1);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape.setTransform(62.425,14.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgGQAHgFALgCIAUgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAJgGQAKgGAMAAQAMAAAJAGQAJAFAAALIAAAtIABADQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgHAAgDgFIgCgHQgEAFgIAEQgGAEgJAAQgLAAgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_1.setTransform(56.725,15.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAnIgehOIAQAAIAUBAIAWhAIAPAAIgfBOg");
	this.shape_2.setTransform(48.6,15.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_3.setTransform(43.125,14.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAnIgehOIAQAAIAUBAIAWhAIAOAAIgeBOg");
	this.shape_4.setTransform(37.7,15.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAJgMARAAQAHAAAIAEQAIAEAFAGQADAGABAIQACAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEACgFIANAAQgBAEgCAGQgDAFgEADQgGAGgJACQgFACgFAAQgPAAgJgLgAAXgGQgBgJgDgFQgGgJgMAAQgIAAgHAGQgGAHAAAKIArAAIAAAAg");
	this.shape_5.setTransform(29.7,16.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaA2IgBgDIgBgJIgBgSQAAgLgIgDQgEgCgIAAIggAAIAAAuIgOAAIAAhrIAwAAQAMAAAIAEQAPAGAAATQAAAKgEAGQgEAGgHADQAGADAEAEQACAEABAJIABAPIAAAJQACAFADACIAAACgAgdgDIAgAAQAKAAAHgFQAFgEAAgKQAAgMgIgEQgEgCgIAAIgiAAg");
	this.shape_6.setTransform(20.45,14.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_7.setTransform(8.475,15.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgMAPAAQAJAAAIAEQAHAEAEAGQAFAGABAIQABAGAAALIg4AAQAAAMAFAHQAFAHALAAQAKAAAGgHQAEgEAAgFIAOAAQAAAEgEAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgLgLgAAWgGQgBgJgCgFQgGgJgMAAQgJAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_8.setTransform(1.3,16.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAuQgCgFAAgHIAAgzIgMAAIAAgLIAMAAIAAgWIAMAAIAAAWIANAAIAAALIgNAAIAAAyQAAAEACACIAGABIACgBIADAAIAAALIgGABIgFAAQgIAAgEgFg");
	this.shape_9.setTransform(-4.95,14.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgGQAHgFALgCIAUgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAJgGQAKgGAMAAQAMAAAJAGQAJAFAAALIAAAtIABADQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACAAIACAAIAAAKIgEABIgFAAQgHAAgDgFIgCgHQgEAFgIAEQgGAEgJAAQgLAAgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_10.setTransform(-11.025,15.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAnIgQg8IgPA8IgOAAIgXhOIAPAAIAPA+IAPg+IAPAAIAPA9IAQg9IAOAAIgYBOg");
	this.shape_11.setTransform(-20.85,15.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_12.setTransform(-28.325,15.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgGQAHgFALgCIAUgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAJgGQAKgGAMAAQAMAAAJAGQAJAFAAALIAAAtIABADQAAAAAAABQAAAAABAAQAAAAABAAQABAAAAAAIACAAIACAAIAAAKIgEABIgFAAQgHAAgDgFIgCgHQgEAFgIAEQgGAEgJAAQgLAAgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_13.setTransform(-35.275,15.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQAKgMAQAAQAJAAAHAEQAIAEAFAGQADAGABAIQACAGAAALIg4AAQAAAMAFAHQAGAHAJAAQALAAAGgHQAEgEABgFIANAAQAAAEgDAGQgDAFgEADQgGAGgJACQgFACgFAAQgPAAgKgLgAAXgGQgBgJgEgFQgFgJgNAAQgHAAgHAGQgGAHAAAKIArAAIAAAAg");
	this.shape_14.setTransform(-43.85,16.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_15.setTransform(-49.625,14.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAuQgQgPgBggQAAgXANgQQANgQAYAAQAUAAALAKQALAMACANIgPAAQgCgKgHgHQgIgFgMAAQgPAAgJALQgLALABAXQgBASAKAMQAIAMARAAQAQAAAHgNQAFgGACgLIAPAAQgCARgLAMQgMAOgXAAQgRAAgNgLg");
	this.shape_16.setTransform(-56.8,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgMAPAAQAIAAAJAEQAIAEADAGQAFAGABAIQABAGAAALIg4AAQAAAMAFAHQAFAHAKAAQALAAAGgHQAEgEAAgFIAOAAQgBAEgCAGQgDAFgEADQgGAGgJACQgFACgFAAQgOAAgLgLgAAXgGQgCgJgDgFQgFgJgNAAQgIAAgGAGQgGAHAAAKIArAAIAAAAg");
	this.shape_17.setTransform(-70.6,16.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAeQgJgLAAgRQAAgUAKgLQAKgMAPAAQANAAAJAGQAIAHACAQIgNAAQgBgHgFgFQgEgFgJAAQgMAAgFAMQgEAIAAALQAAAMAFAIQAFAIAKAAQAIAAAFgFQAFgFACgJIANAAQgDAQgIAHQgJAIgOAAQgOAAgKgMg");
	this.shape_18.setTransform(-78.425,15.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATAoIAAgxQAAgHgCgEQgEgIgJAAIgHABQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAALQAFgGAGgDQAHgDAGAAQARAAAGALQADAHAAAMIAAAxg");
	this.shape_19.setTransform(-86.425,15.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAQAAQAHAAAJAEQAIAEAEAGQADAGABAIQACAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEABgFIAOAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgPAAgJgLgAAWgGQgBgJgCgFQgGgJgMAAQgIAAgHAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_20.setTransform(-94.85,16.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAsQgKgLAAgSQAAgQAJgNQAIgNARAAQAIAAAGAEQADACAFAGIAAgoIANAAIAABsIgMAAIAAgLQgFAHgGADQgHAEgGAAQgOAAgJgMgAgOgHQgGAHAAAOQAAANAFAIQAGAJAKAAQAKAAAGgIQAFgIABgPQgBgOgFgHQgHgHgJAAQgJAAgGAIg");
	this.shape_21.setTransform(-103.45,14.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAJgMARAAQAHAAAIAEQAIAEAFAGQADAGABAIQACAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEACgFIANAAQgBAEgDAGQgCAFgEADQgGAGgJACQgFACgFAAQgPAAgJgLgAAWgGQAAgJgDgFQgGgJgMAAQgIAAgHAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_22.setTransform(-111.6,16.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAQAAQAHAAAJAEQAHAEAEAGQAEAGACAIQABAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEABgFIAOAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgOAAgKgLgAAWgGQgBgJgCgFQgGgJgMAAQgJAAgGAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_23.setTransform(-119.95,16.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_24.setTransform(-126.125,15.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeAuQgQgPgBggQAAgXANgQQANgQAYAAQAUAAALAKQAMAMABANIgPAAQgCgKgIgHQgHgFgMAAQgPAAgKALQgKALABAXQgBASAKAMQAIAMARAAQAQAAAHgNQAFgGACgLIAPAAQgCARgLAMQgNAOgVAAQgSAAgNgLg");
	this.shape_25.setTransform(-134.55,14.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAzQgIgGgBgMIAOAAQABAGACACQAFAFAJAAQAOAAAFgLQADgGgBgQQgDAFgGAEQgGACgHAAQgOABgJgKQgKgJAAgUQAAgTAKgMQAKgLAOAAQAHAAAIAFIAHAHIAAgKIANAAIAABHQgBAPgEAJQgIAQgWAAQgNAAgJgGgAgRgfQgDAHAAAMQAAAMAFAGQAGAIAJgBQANABAGgNQADgHAAgJQABgPgHgHQgGgHgJAAQgNAAgFANg");
	this.shape_26.setTransform(-148.55,17.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAoIAAgxQAAgHgCgEQgEgIgJAAIgHABQgFACgEAFQgEAEgBAEIgBAMIAAAoIgNAAIAAhOIANAAIAAALQAFgGAGgDQAHgDAGAAQARAAAGALQADAHAAAMIAAAxg");
	this.shape_27.setTransform(-156.675,15.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGA2IAAhNIANAAIAABNgAgGgmIAAgPIANAAIAAAPg");
	this.shape_28.setTransform(-162.525,14.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAuQgEgFAAgHIAAgzIgLAAIAAgLIALAAIAAgWIANAAIAAAWIAMAAIAAALIgMAAIAAAyQAAAEACACIAGABIACgBIACAAIAAALIgEABIgGAAQgIAAgDgFg");
	this.shape_29.setTransform(-166.35,14.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAjQgHgGAAgKQAAgLAHgGQAHgFALgCIAUgDQAEAAACgDIABgFQAAgHgFgDQgFgDgIAAQgKAAgFAFQgCADgBAGIgMAAQAAgOAJgGQAKgGAMAAQAMAAAJAGQAJAFAAALIAAAtIABADQAAAAAAABQAAAAABAAQAAAAABAAQABAAAAAAIACAAIACAAIAAAKIgEABIgFAAQgHAAgDgFIgCgHQgEAFgIAEQgGAEgJAAQgLAAgHgHgAAJACIgHABIgHABQgIABgDACQgGAEAAAHQAAAGAEADQAEAEAGAAQAHAAAFgEQALgFAAgMIAAgKIgGACg");
	this.shape_30.setTransform(-172.375,15.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAoIAAhOIAMAAIAAAOQACgEAFgGQAGgFAIAAIABAAIADAAIAAAOIgCAAIgCAAQgKAAgFAGQgFAGAAAJIAAAsg");
	this.shape_31.setTransform(-178.775,15.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNAzQgFgDgDgFIAAAKIgNAAIAAhrIANAAIAAAnQAFgGAGgDQAFgDAGAAQAPAAAJAKQAKAKAAATQAAASgJANQgKANgQAAQgHgBgGgEgAgPgIQgHAGABAOQAAAMACAGQAGAOANAAQALAAAFgJQAFgJAAgOQAAgMgFgHQgGgIgKAAQgIAAgHAHg");
	this.shape_32.setTransform(-185.7,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAQAAQAHAAAJAEQAIAEAEAGQADAGABAIQACAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEABgFIAOAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgPAAgJgLgAAWgGQgBgJgCgFQgGgJgMAAQgIAAgHAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_33.setTransform(-194.3,16.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_34.setTransform(-200.075,14.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgTQAAgSALgMQAKgMAQAAQAHAAAJAEQAIAEAEAGQADAGABAIQACAGAAALIg5AAQABAMAFAHQAGAHAKAAQAKAAAGgHQADgEABgFIAOAAQgBAEgDAGQgDAFgDADQgGAGgJACQgFACgFAAQgPAAgJgLgAAWgGQgBgJgCgFQgGgJgMAAQgIAAgHAGQgGAHAAAKIAqAAIAAAAg");
	this.shape_35.setTransform(-206,16.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAuQgSgPABggQAAgXAMgQQANgQAXAAQAVAAALAKQALAMABANIgNAAQgDgKgIgHQgGgFgOAAQgOAAgKALQgJALgBAXQABASAIAMQAJAMAQAAQAQAAAJgNQAEgGADgLIANAAQgBARgLAMQgMAOgXAAQgRAAgMgLg");
	this.shape_36.setTransform(-215.6,14.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_37.setTransform(35.2313,-11.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgrAxQgOgSAAgdQAAggAQgRQAQgTAbAAQAXAAAQALQAPALACAbIghAAQgBgIgEgFQgGgIgLAAQgQAAgGAQQgDAJAAAOQAAAOADAJQAGAPAPAAQAMAAAEgGQAFgGABgKIAiAAQgBAPgKANQgPAWgfAAQgdAAgPgSg");
	this.shape_38.setTransform(22.175,-11.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AAXBBIAAhMQAAgKgCgFQgFgKgOAAQgQAAgGAOQgDAIAAALIAABEIghAAIAAh9IAgAAIAAASQAGgKAGgEQAKgIAPAAQATAAANALQAMAKAAAYIAABUg");
	this.shape_39.setTransform(8.375,-11.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_40.setTransform(-5.5187,-11.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgtBFQgQgSABgcQAAgfAOgTQAPgSAZAAQALAAAIAFQAKAFAFAJIAAg8IAiAAIAACpIghAAIAAgRQgHALgJAFQgJAFgMAAQgWAAgPgSgAgUgFQgHAKABAQQAAARAGALQAHAKANAAQAOAAAHgKQAIgKAAgRQAAgWgMgKQgHgGgJAAQgOAAgHALg");
	this.shape_41.setTransform(-19.6,-13.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_42.setTransform(-33.1687,-11.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_43.setTransform(-46.3187,-11.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AgkBBIAAh+IAgAAIAAAWQAGgMAGgFQAJgIAPAAIACABIADAAIAAAiIgGgBIgEAAQgUAAgHANQgCAHAAAOIAAA9g");
	this.shape_44.setTransform(-56.875,-11.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("Ag2BCQgVgYAAgpQAAgsAYgYQAVgWAfABQArAAAUAcQALAQABAPIgjAAQgEgMgFgGQgKgLgUAAQgSAAgLAQQgLAQAAAbQgBAdAMAOQANAPAQgBQAUAAAKgMQAFgGAEgOIAjAAQgFAdgTARQgTARgeAAQgkABgVgYg");
	this.shape_45.setTransform(-70.5,-13.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgoBRQgPgJgCgTIAkAAQABAGADACQAGAFALgBQATAAAFgMQAEgHAAgSIAAgIQgFAIgFAEQgJAIgQgBQgYAAgPgQQgOgSAAgcQAAgcAOgTQAOgUAaAAQAJAAAGADQAMAGAIANIAAgTIAgAAIAAB4QAAAYgIANQgOAUgoAAQgYAAgPgJgAgWgsQgEAIAAANQAAALAEAJQAHAPAQAAQAMAAAIgJQAHgHAAgUQABgSgIgJQgHgKgNAAQgQAAgHARg");
	this.shape_46.setTransform(-93.35,-8.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AAXBBIAAhMQAAgKgCgFQgFgKgOAAQgQAAgGAOQgDAIAAALIAABEIghAAIAAh9IAgAAIAAASQAGgKAGgEQAKgIAPAAQATAAANALQAMAKAAAYIAABUg");
	this.shape_47.setTransform(-107.375,-11.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgQBWIAAh+IAhAAIAAB+gAgQg2IAAgfIAhAAIAAAfg");
	this.shape_48.setTransform(-117.925,-13.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AgLBJQgGgGAAgMIAAhMIgRAAIAAgYIARAAIAAgjIAgAAIAAAjIAUAAIAAAYIgUAAIAABBQAAAIACACQACACAKAAIADAAIADAAIAAAYIgPABIgFAAQgTAAgHgIg");
	this.shape_49.setTransform(-125.325,-12.995);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AgQBWIAAh+IAhAAIAAB+gAgQg2IAAgfIAhAAIAAAfg");
	this.shape_50.setTransform(-132.375,-13.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgqA3QgPgNAAgUIAiAAQABAJADAEQAHAHAPAAQAKAAAGgDQAFgDAAgGQAAgGgEgCQgFgDgdgHQgVgGgJgHQgJgIAAgOQAAgSAOgNQAOgMAZAAQAWAAAPAJQAPAKACAXIghAAQgBgGgCgEQgGgHgMAAQgLAAgEADQgFAEAAAEQAAAGAFADQAFACAcAHQAUAEAKAJQAKAJAAAPQAAASgOAMQgOAMgdAAQgdAAgOgMg");
	this.shape_51.setTransform(-142.325,-11.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AgQBWIAAh+IAhAAIAAB+gAgQg2IAAgfIAhAAIAAAfg");
	this.shape_52.setTransform(-152.125,-13.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgQA/Iguh9IAlAAIAaBcIAbhcIAjAAIguB9g");
	this.shape_53.setTransform(-161.975,-11.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AgoAzQgTgPAAgjQAAggARgRQAQgSAaAAQAQAAAMAGQANAGAIANQAIALACAPQABAIAAAQIhWAAQABATALAHQAHAFAJAAQAKAAAGgGQAEgDADgFIAhAAQgBALgKALQgRATgdAAQgXAAgSgQgAAagMQgBgNgHgHQgHgHgLAAQgKAAgHAIQgGAHgCAMIAzAAIAAAAg");
	this.shape_54.setTransform(-175.2187,-11.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAgBWIgCgJIgCgQIAAgPQAAgQgGgGQgGgGgQAAIgjAAIAABEIgjAAIAAiqIBSAAQASAAAKAEQAKAEAGAIQAGAHADAHQADAJAAAJQAAAMgGAMQgGAMgOAEQAMAFAFAIQAFAJAAASIAAAMIABAPQABAHAFADIAAAFgAgjgJIAnAAQAMAAAGgDQALgEAAgPQAAgQgLgEQgFgEgMAAIgoAAg");
	this.shape_55.setTransform(-189.775,-13.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAxAyIAAhDQAAgKgFgEQgFgDgHAAQgJAAgHAGQgIAGAAAQIAAA4IgPAAIAAg/QAAgKgDgFQgEgHgKAAQgJAAgIAIQgIAHAAATIAAAzIgRAAIAAhiIARAAIAAAOQAGgHAFgDQAIgFAKgBQAMABAHAFQADAEAEAGQAFgIAIgEQAHgDAKgBQAUABAHAOQAEAHAAANIAABBg");
	this.shape_56.setTransform(181.425,12.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgrBGIAAiIIAQAAIAAAMQAFgGAGgEQAJgGAKABQARAAAMAMQAMANAAAYQAAAggRANQgLAJgPAAQgKAAgHgEQgFgDgFgHIAAAygAgYgmQgDAKAAAOQAAALADAIQAHAPARAAQALAAAIgKQAHgKAAgSQAAgMgDgJQgGgQgRAAQgRAAgHARg");
	this.shape_57.setTransform(168.575,14.85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgjAwQgKgSAAgdQAAgWAGgQQALgeAcAAQAZAAAMAVQAJAQAAAdQAAAagJASQgLAZgaAAQgXAAgMgUgAgUgmQgHANAAAaQAAAVAEAMQAHATAQAAQAMAAAIgLQAIgMAAgeQAAgXgGgOQgGgPgQAAQgNAAgHAOg");
	this.shape_58.setTransform(152.525,11.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgjAwQgKgSAAgdQAAgWAGgQQALgeAcAAQAZAAAMAVQAJAQAAAdQAAAagJASQgLAZgaAAQgXAAgMgUgAgUgmQgHANAAAaQAAAVAEAMQAHATAQAAQAMAAAIgLQAIgMAAgeQAAgXgGgOQgGgPgQAAQgNAAgHAOg");
	this.shape_59.setTransform(142.075,11.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAxIAAgUIATAAIAAAUgAgJgcIAAgUIATAAIAAAUg");
	this.shape_60.setTransform(134.725,13.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgaBBQAGgmAUgkQANgWAOgRIhIAAIAAgQIBbAAIAAAOQgGAHgLAPQgKAPgJARQgHASgEAOIgHAdg");
	this.shape_61.setTransform(126.5,11.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgfA2QgOgOAAghQABgYAGgRQALghAeAAQAWAAAJALQAIAMAAAMIgQAAQgBgIgDgEQgHgJgMAAQgNAAgIANQgJANAAAYQAGgIAIgEQAIgEAJAAQARAAAMALQAMAJAAAVQAAASgMAOQgLAOgWAAQgRAAgOgOgAgRACQgIAHAAAPQAAAMAHAJQAIAIAMAAQANAAAHgIQAGgJAAgMQAAgKgGgKQgGgIgPAAQgKAAgIAGg");
	this.shape_62.setTransform(227.6,-12.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgtBDQABgRAGgNQAGgNASgLIARgJQAMgHAFgEQAHgIAAgKQAAgMgHgGQgHgHgLAAQgQAAgHANQgDAHgBAMIgRAAQABgRAGgLQALgUAaAAQAXAAAKANQALAMAAAQQAAAPgLALQgHAGgRAJIgLAHQgJAFgGAFQgJAIgCAKIBHAAIAAAQg");
	this.shape_63.setTransform(217.075,-12.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgjAvQgKgRAAgdQAAgVAGgRQALgeAcAAQAZAAAMAWQAJAQAAAcQAAAagJASQgLAZgaAAQgXAAgMgVgAgUgmQgHAOAAAaQAAAUAEAMQAHATAQAAQAMAAAIgMQAIgLAAgeQAAgXgGgPQgGgOgQAAQgNAAgHAOg");
	this.shape_64.setTransform(206.575,-12.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgtBDQABgRAGgNQAGgNASgLIARgJQAMgHAFgEQAHgIAAgKQAAgMgHgGQgHgHgLAAQgQAAgHANQgDAHgBAMIgRAAQABgRAGgLQALgUAaAAQAXAAAKANQALAMAAAQQAAAPgLALQgHAGgRAJIgLAHQgJAFgGAFQgJAIgCAKIBHAAIAAAQg");
	this.shape_65.setTransform(196.075,-12.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAQQAHgCACgHIABgHIAAgCIAAgBIgKAAIAAgUIATAAIAAASQAAAKgFAJQgEAIgKACg");
	this.shape_66.setTransform(183,-5.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgjA4QgKgOAAgSIARAAQABANAEAFQAGALARAAQAMAAAIgHQAIgHAAgLQAAgOgIgFQgIgGgOAAIgEAAIgDAAIAAgOIAEABIAEAAQAIAAAGgDQALgFAAgOQAAgJgHgGQgHgFgJAAQgQAAgGALQgEAGAAALIgRAAQAAgOAGgLQAKgSAaAAQATAAALAJQALAJAAARQAAAMgGAIQgEAEgHADQALADAGAHQAFAJAAAMQAAATgMALQgNAMgWAAQgXAAgLgMg");
	this.shape_67.setTransform(175.025,-12.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgtBDQABgRAGgNQAGgNASgLIARgJQAMgHAFgEQAHgIAAgKQAAgMgHgGQgHgHgLAAQgQAAgHANQgDAHgBAMIgRAAQABgRAGgLQALgUAaAAQAXAAAKANQALAMAAAQQAAAPgLALQgHAGgRAJIgLAHQgJAFgGAFQgJAIgCAKIBHAAIAAAQg");
	this.shape_68.setTransform(164.675,-12.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgbBBQgLgIgBgPIARAAQABAGAEAEQAFAFAMAAQASAAAGgNQAEgIgBgVQgFAJgGADQgIADgKABQgQAAgMgLQgMgMAAgZQAAgaAMgOQAMgNARAAQALAAAIAFQAFAEAFAGIAAgNIAPAAIAABaQAAASgFALQgKAUgcABQgQgBgLgGgAgWgnQgDAIAAAPQAAAQAHAJQAGAIAMAAQARAAAHgQQAEgIAAgNQAAgSgIgJQgHgIgMgBQgQAAgHARg");
	this.shape_69.setTransform(148.625,-8.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgiAlQgEgIAAgMIAAhDIARAAIAABBQAAAIACAEQAEAJAMAAQAQAAAGgPQADgJAAgNIAAgxIARAAIAABiIgQAAIABgOQgEAFgEAEQgKAIgMAAQgVAAgHgOg");
	this.shape_70.setTransform(138.425,-10.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAoBEIgNgoIg1AAIgPAoIgSAAIAziHIATAAIAxCHgAAVAMIgVg6IgVA6IAqAAg");
	this.shape_71.setTransform(127,-12.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgJAQQAHgCACgHIABgHIAAgCIAAgBIgKAAIAAgUIATAAIAAASQAAAKgEAJQgFAIgKACg");
	this.shape_72.setTransform(113.8,-5.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAXAzIAAg+QAAgJgCgGQgFgJgMAAQgEAAgEABQgHADgFAFQgEAGgCAEIgBAPIAAA0IgRAAIAAhiIAQAAIAAANQAIgIAIgEQAIgEAIABQAVAAAIAOQADAIAAAPIAAA/g");
	this.shape_73.setTransform(106.05,-11);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgiAlQgEgIAAgMIAAhDIARAAIAABBQAAAIACAEQAEAJAMAAQAQAAAGgPQADgJAAgNIAAgxIARAAIAABiIgQAAIABgOQgEAFgEAEQgKAIgMAAQgVAAgHgOg");
	this.shape_74.setTransform(95.425,-10.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgmA7QgOgNAAgXIASAAQAAAMAFAHQAJAOAVAAQAKAAAIgDQAQgGAAgOQAAgLgHgGQgGgEgPgEIgRgDQgRgEgHgEQgNgJAAgRQAAgTAMgLQANgMAWAAQAUAAAOALQAPAKAAAWIgRAAQgCgLgEgFQgIgLgSAAQgQAAgHAHQgHAHAAAJQAAAKAIAEQAGAEARAEIATAFQANADAHAEQANAJAAATQAAAWgQAKQgQAJgVAAQgYAAgOgMg");
	this.shape_75.setTransform(83.875,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.5,-25.5,471,51.1);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPAlQgGgEgBgJIAKAAQABAEACACQADADAGAAQALAAADgIQACgEAAgMQgDAEgEACQgEACgGAAQgJAAgHgGQgHgHAAgOQAAgOAHgIQAHgIAKAAQAGAAAFADIAFAGIAAgHIAJAAIAAAyQAAALgDAGQgGAMgQAAQgJAAgGgEgAgMgWQgCAFAAAIQAAAJAEAFQAEAFAGAAQAKAAAEgKQACgEAAgHQAAgKgEgFQgEgFgHAAQgJAAgEAJg");
	this.shape.setTransform(169.675,56.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAdIAAgjQABgFgCgDQgDgGgGABIgFABQgDABgDADIgEAGIgBAIIAAAdIgJAAIAAg3IAJAAIAAAIQAEgFAFgDQAEgCAEAAQANAAAEAJQACAEAAAIIAAAkg");
	this.shape_1.setTransform(163.9,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgGIAAgmIAJAAIAAAlQAAAEACACQACAGAHAAQAJAAADgJQACgFAAgHIAAgcIAJAAIAAA4IgJAAIABgJIgFAFQgFAFgHAAQgMAAgEgIg");
	this.shape_2.setTransform(157.825,55.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgJQAHgIALAAQALAAAIAHQAHAIAAAOQAAAMgGAJQgHAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQADAGAIAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgIAAgDAHg");
	this.shape_3.setTransform(151.875,55.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAnIAAggIgegtIANAAIAVAlIAWglIANAAIgeAtIAAAgg");
	this.shape_4.setTransform(146.4,54.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAhQgGgHAAgIQAAgJAGgFQADgEAJgEIgGgKIgCgHQAAgIAFgFQAFgFAJAAQAGAAAFAFQAFAEgBAHQABAHgFAGQgCADgGAEIANAQIACgGIABgGIAJAAQgBAIgDAGIgCAGIAAAAIAAAAIAOARIgNAAIgHgJQgEAFgEACQgFAEgJAAQgMAAgFgHgAgSAJQgDAEAAAFQgBAHAFADQAFADAEAAQAHAAACgDQAFgCACgEIgRgVIgJAIgAgLgbIgCAEQAAAEACADIAGAHIAGgGQADgDAAgEQAAgEgDgCQgBgDgDAAQgHAAgBAEg");
	this.shape_5.setTransform(136.4,54.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgFgBgDQgDgFgHABQgFAAgEADQgFAFgBAKIAAAeIgJAAIAAhNIAJAAIAAAdIAGgGQAFgDAGAAQAMAAAFAJQACAFAAAGIAAAlg");
	this.shape_6.setTransform(126.75,54.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAZQgFgHgBgIIAJAAQABAFACACQADAFAJAAQAFAAAEgCQAEgCAAgFQAAgEgDgCIgIgCIgHgDQgHgBgEgBQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAEAAAGIgJAAQgBgDgCgDQgDgEgHAAQgGAAgDACQgCACAAAEQAAADADACIAHADIAFACIAOADQAGAEAAAHQAAAIgGAGQgGAFgMAAQgMAAgFgFg");
	this.shape_7.setTransform(121.075,55.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAZQgFgEAAgIQAAgHAFgFQAFgEAIAAIAOgDQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgDQAAgFgDgDQgEgCgFAAQgIAAgDAEQgCADAAAEIgJAAQAAgLAHgEQAGgEAJAAQAJAAAGAEQAGADAAAJIAAAfIABACIADACIABAAIACgBIAAAHIgEABIgDAAQgFAAgCgDIgCgGQgDAEgFADQgEADgHAAQgIAAgFgFgAAGABIgFABIgFABIgIACQgEADAAAFQAAAEADACQADADAEAAQAFAAAEgDQAIgDAAgJIAAgHQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_8.setTransform(115.475,55.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAnIgmg+IAAA+IgLAAIAAhNIANAAIAmA+IAAg+IAKAAIAABNg");
	this.shape_9.setTransform(108.375,54.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIAAgEIAAgBIAAAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgDAFgFABg");
	this.shape_10.setTransform(100.025,58.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAZQgFgHgBgIIAJAAQABAFACACQADAFAJAAQAFAAAEgCQAEgCAAgFQAAgEgDgCIgIgCIgHgDQgHgBgEgBQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAEAAAGIgJAAQgBgDgCgDQgDgEgHAAQgGAAgDACQgCACAAAEQAAADADACIAHADIAFACIAOADQAGAEAAAHQAAAIgGAGQgGAFgMAAQgMAAgFgFg");
	this.shape_11.setTransform(95.875,55.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_12.setTransform(91.95,54.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_13.setTransform(89.55,54.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAgEgbIAAgLIAJAAIAAALg");
	this.shape_14.setTransform(87.125,54.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAhQgCgDAAgGIAAgkIgIAAIAAgIIAIAAIAAgQIAIAAIAAAQIAJAAIAAAIIgJAAIAAAkQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAIAEAAIABAAIACAAIAAAIIgDAAIgEABQgGAAgCgEg");
	this.shape_15.setTransform(84.425,54.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAhQgIgHAAgMIAKAAQAAAGADAEQAFAIAMAAQAFAAAFgCQAJgDAAgIQAAgHgEgCQgEgDgIgCIgJgCQgKgDgEgCQgHgEAAgKQAAgLAHgGQAHgHAMAAQALAAAJAGQAIAGAAANIgKAAQgBgHgCgDQgFgGgKAAQgJAAgEAEQgDAEAAAFQAAAFAEADIANAFIAKACQAIACAEACQAHAGAAAKQAAAMgJAGQgJAGgMAAQgNAAgIgIg");
	this.shape_16.setTransform(79.325,54.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIAAgEIAAgBIAAAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgDAFgFABg");
	this.shape_17.setTransform(71.275,58.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAoIgCgBIAAgIIADAAIACABIAEgBIACgCIABgFIADgGIgVg5IALAAIAOAtIAQgtIAKAAIgJAZIgIAXQgJAVgCAFQgEAFgIAAg");
	this.shape_18.setTransform(67.9,56.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAkIgFgFIAAAHIgJAAIAAhNIAKAAIAAAcQADgEAEgCQAEgCAEAAQALAAAGAHQAHAIAAANQAAANgHAJQgGAJgMAAQgFAAgFgEgAgKgGQgFAFAAAKQAAAIACAFQADAKAKAAQAIgBAEgFQAEgHAAgKQAAgJgEgFQgEgFgIAAQgFgBgFAFg");
	this.shape_19.setTransform(62.35,54.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAZQgFgHgBgIIAJAAQABAFACACQADAFAJAAQAFAAAEgCQAEgCAAgFQAAgEgDgCIgIgCIgHgDQgHgBgEgBQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAEAAAGIgJAAQgBgDgCgDQgDgEgHAAQgGAAgDACQgCACAAAEQAAADADACIAHADIAFACIAOADQAGAEAAAHQAAAIgGAGQgGAFgMAAQgMAAgFgFg");
	this.shape_20.setTransform(56.525,55.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgJQAHgIALAAQALAAAIAHQAHAIAAAOQAAAMgGAJQgHAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQADAGAIAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgIAAgDAHg");
	this.shape_21.setTransform(50.725,55.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAFAAIABAAIADABIAAAKIgCgBIgCAAQgGAAgEAFQgDAEAAAHIAAAfg");
	this.shape_22.setTransform(46.3,55.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAhQgMgLAAgWQAAgRAIgLQAKgMAQAAQAPAAAIAIQAIAIABAJIgKAAQgCgHgFgEQgFgEgKgBQgJABgIAHQgGAIAAAQQgBAOAHAJQAGAIALAAQAMAAAGgJQADgFACgIIAKAAQgCANgHAIQgJAKgQAAQgMAAgJgIg");
	this.shape_23.setTransform(40.3,54.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAoIAAgxIgIAAIAAgHIAIAAIAAgJQAAgFABgDQADgGAKABIABAAIACAAIAAAJIgCAAIgBAAQgEAAgBABIgBAMIAJAAIAAAHIgJAAIAAAxg");
	this.shape_24.setTransform(31.95,54.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgJQAHgIALAAQALAAAIAHQAHAIAAAOQAAAMgGAJQgHAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQADAGAIAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgIAAgDAHg");
	this.shape_25.setTransform(27.375,55.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAWQgGgIAAgMQAAgOAHgJQAHgIALAAQAJAAAGAFQAGAFABALIgJAAQgBgGgDgDQgDgDgGgBQgJABgDAIQgDAHAAAHQAAAIAEAGQADAGAHAAQAGAAADgDQAEgEABgGIAJAAQgBAKgHAGQgGAFgKAAQgKAAgHgIg");
	this.shape_26.setTransform(18.775,55.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAgEgbIAAgLIAJAAIAAALg");
	this.shape_27.setTransform(14.825,54.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAZQgFgHgBgIIAJAAQABAFACACQADAFAJAAQAFAAAEgCQAEgCAAgFQAAgEgDgCIgIgCIgHgDQgHgBgEgBQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAEAAAGIgJAAQgBgDgCgDQgDgEgHAAQgGAAgDACQgCACAAAEQAAADADACIAHADIAFACIAOADQAGAEAAAHQAAAIgGAGQgGAFgMAAQgMAAgFgFg");
	this.shape_28.setTransform(10.975,55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgGIAAgmIAJAAIAAAlQAAAEACACQACAGAHAAQAJAAADgJQACgFAAgHIAAgcIAJAAIAAA4IgJAAIABgJIgFAFQgFAFgHAAQgMAAgEgIg");
	this.shape_29.setTransform(5.175,55.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAbAnIAAgtIAAgIIAAgMIgWBBIgJAAIgXhBIAAADIABAIIAAAJIAAAtIgKAAIAAhNIAPAAIAVBBIAWhBIAPAAIAABNg");
	this.shape_30.setTransform(-2.225,54.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAXQgGgJgBgNQABgNAGgIQAIgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAALIgnAAQAAAKADAFQAEAFAHAAQAHAAAFgFQACgDACgEIAJAAIgCAHQgDAEgDADQgEAEgGABIgHABQgKAAgIgHgAAQgEQgBgGgCgDQgDgIgKABQgFgBgFAFQgEAFAAAHIAeAAIAAAAg");
	this.shape_31.setTransform(-12.8,55.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAOAnIAAgkQAAgFgCgDQgDgFgHABQgFAAgFADQgEAFAAAKIAAAeIgKAAIAAhNIAKAAIAAAdIAFgGQAFgDAGAAQANAAAEAJQACAFAAAGIAAAlg");
	this.shape_32.setTransform(-18.75,54.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAnIAAhEIgaAAIAAgJIA+AAIAAAJIgaAAIAABEg");
	this.shape_33.setTransform(-25.05,54.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_34.setTransform(110.8833,35.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAHADACQAEAFALAAQAHAAAEgCQAEgCAAgFQAAgDgDgCQgDgDgVgEQgPgFgGgEQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAGAAALQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_35.setTransform(101.475,35.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AgkAgQgEgIAAgQIAAg1IAYAAIAAA1QAAAIACAEQADAHAKAAQALAAAFgKQACgFAAgJIAAgwIAYAAIAABZIgXAAIAAgNIgCADIgDAEQgFAFgGABQgEACgHAAQgUAAgHgOg");
	this.shape_36.setTransform(91.525,35.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAHAAANQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgNgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_37.setTransform(81.225,35.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AAYA9IAAg2IgvAAIAAA2IgZAAIAAh5IAZAAIAAAuIAvAAIAAguIAZAAIAAB5g");
	this.shape_38.setTransform(70.025,34.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_39.setTransform(56.175,35.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AgkAgQgEgIAAgQIAAg1IAYAAIAAA1QAAAIACAEQADAHAKAAQALAAAFgKQACgFAAgJIAAgwIAYAAIAABZIgXAAIAAgNIgCADIgDAEQgFAFgGABQgEACgHAAQgUAAgHgOg");
	this.shape_40.setTransform(47.225,35.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgnAyQgTgRAAghQAAghATgRQAOgOAZAAQAaAAAOAOQATARAAAhQAAAhgTARQgOAPgaAAQgZAAgOgPgAgXgfQgJALAAAUQAAAVAJALQAJALAOAAQAPAAAJgLQAJgLAAgVQAAgUgJgLQgJgLgPAAQgOAAgJALg");
	this.shape_41.setTransform(35.575,34.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAjAkIAAgwQAAgHgDgDQgEgCgFAAQgHAAgFAEQgFAFAAALIAAAoIgLAAIAAgtQAAgHgCgEQgDgFgHAAQgHAAgFAGQgGAFAAAOIAAAkIgMAAIAAhGIAMAAIAAAKIAIgHQAFgEAIAAQAIAAAGAEIAEAHQAEgGAFgDQAGgCAGAAQAPAAAFAKQADAGAAAJIAAAug");
	this.shape_42.setTransform(258.725,53.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeAzIAAhiIALAAIAAAJQAEgFAEgDQAGgEAHABQAMAAAJAJQAIAJAAARQAAAWgMAKQgIAGgKABQgHgBgFgDQgEgCgEgFIAAAlgAgRgbQgCAHAAAKQAAAIACAFQAFALAMAAQAIAAAFgHQAGgHAAgNQAAgIgCgHQgFgMgMABQgMAAgFAMg");
	this.shape_43.setTransform(249.475,54.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgZAiQgHgMAAgVQAAgPAEgMQAIgWAUAAQASAAAIAPQAHAMAAAVQAAASgGANQgIASgTAAQgQAAgJgPgAgOgbQgFAKAAASQAAAPADAIQAFAOALAAQAJAAAGgIQAFgIAAgWQAAgQgEgKQgEgLgMAAQgJAAgFAKg");
	this.shape_44.setTransform(237.95,52.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZAiQgHgMAAgVQAAgPAFgMQAHgWAUAAQASAAAJAPQAGAMAAAVQAAASgGANQgJASgSAAQgRAAgIgPgAgOgbQgFAKAAASQAAAPADAIQAFAOALAAQAJAAAGgIQAFgIAAgWQAAgQgEgKQgEgLgMAAQgJAAgFAKg");
	this.shape_45.setTransform(230.45,52.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAjIAAgPIANAAIAAAPgAgGgTIAAgPIANAAIAAAPg");
	this.shape_46.setTransform(225.2,53.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAvQAFgbAPgaQAIgQALgMIg0AAIAAgMIBBAAIAAALQgFAEgHALQgHALgHAMQgFAMgDALIgEAVg");
	this.shape_47.setTransform(219.25,52.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAnQgKgKAAgYQABgRAEgNQAIgXAVAAQAQAAAGAIQAHAJgBAIIgLAAQgBgFgDgEQgEgFgIAAQgJAAgHAJQgFAJgBASQAEgHAHgCQAFgEAGAAQAMABAJAHQAJAHgBAPQAAANgIAKQgIAKgPAAQgNAAgKgKgAgMABQgFAGAAAKQgBAJAGAGQAFAGAJAAQAJAAAEgGQAFgGAAgJQAAgHgEgHQgEgGgLABQgHAAgGADg");
	this.shape_48.setTransform(291.8,35.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AggAwQABgNAFgJQAEgJANgHIALgHQAJgEADgEQAGgFAAgIQAAgIgGgFQgEgFgJAAQgLAAgFAKQgCAFAAAIIgNAAQABgMAEgIQAIgOASAAQARAAAIAJQAHAJAAALQAAALgIAHQgFAFgMAHIgIAFQgGADgEAEQgGAFgCAHIAyAAIAAAMg");
	this.shape_49.setTransform(284.25,34.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZAiQgHgMAAgVQAAgPAFgMQAHgWAUAAQASAAAJAPQAGAMAAAVQAAASgGANQgIASgTAAQgRAAgIgPgAgOgbQgFAKAAASQAAAPADAIQAFAOALAAQAJAAAGgIQAFgIAAgWQAAgQgEgKQgEgLgLAAQgKAAgFAKg");
	this.shape_50.setTransform(276.7,35.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AggAwQABgNAFgJQADgJANgHIANgHQAIgEADgEQAGgFAAgIQAAgIgGgFQgEgFgIAAQgMAAgEAKQgDAFAAAIIgNAAQABgMAEgIQAIgOATAAQAQAAAHAJQAIAJAAALQAAALgIAHQgFAFgMAHIgIAFQgHADgDAEQgGAFgDAHIAzAAIAAAMg");
	this.shape_51.setTransform(269.2,34.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGALQAFgBABgFIAAgFIAAgBIAAgBIgGAAIAAgOIANAAIAAANQAAAHgDAGQgEAGgGABg");
	this.shape_52.setTransform(259.85,39.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAnQgJgKgBgYQAAgRAFgNQAIgXAVAAQAQAAAHAIQAFAJAAAIIgLAAQgBgFgCgEQgFgFgJAAQgJAAgGAJQgGAJAAASQAEgHAHgCQAFgEAGAAQAMABAJAHQAJAHAAAPQgBANgHAKQgJAKgPAAQgNAAgKgKgAgLABQgHAGABAKQAAAJAFAGQAFAGAIAAQAKAAAFgGQAEgGAAgJQAAgHgEgHQgEgGgLABQgHAAgFADg");
	this.shape_53.setTransform(254.2,35.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAFAvIAAhCIgVAAIAAgJQANgBAEgDQAEgDADgLIAKAAIAABdg");
	this.shape_54.setTransform(246,34.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAuQgIgFgBgLIANAAQAAAFADACQAEAEAIAAQANAAAFgJQACgGAAgPQgEAGgFACQgFADgHAAQgMAAgJgIQgIgIAAgSQAAgSAIgKQAKgKAMAAQAHAAAGAEQADACAEAFIAAgJIALAAIAAA/QAAAOgEAIQgHAOgUAAQgLAAgIgFgAgPgcQgDAHABAKQgBALAFAGQAFAGAIAAQAMAAAFgLQADgGAAgJQAAgNgGgGQgEgGgJAAQgLAAgFALg");
	this.shape_55.setTransform(235.2,37.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAaQgDgFAAgJIAAgwIAMAAIAAAuQAAAGACADQADAHAIAAQALAAAFgLQACgGAAgKIAAgjIAMAAIAABGIgLAAIAAgKQgCAEgEADQgGAGgJgBQgPAAgFgKg");
	this.shape_56.setTransform(227.825,36.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAdAxIgKgdIglAAIgLAdIgOAAIAlhhIAOAAIAkBhgAAPAJIgPgqIgPAqIAeAAg");
	this.shape_57.setTransform(219.65,34.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGALQAEgBACgFIAAgFIAAgBIAAgBIgGAAIAAgOIANAAIAAANQAAAHgDAGQgEAGgGABg");
	this.shape_58.setTransform(210.2,39.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AARAkIAAgsQAAgGgCgEQgDgHgJAAIgGABQgFACgDAEQgDAEgBADIgBALIAAAkIgMAAIAAhGIALAAIAAAKQAFgGAGgDQAGgCAGAAQAPAAAFAKQADAGAAALIAAAsg");
	this.shape_59.setTransform(204.625,36.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgYAaQgDgFAAgJIAAgwIAMAAIAAAuQAAAGACADQADAHAIAAQALAAAFgLQACgGAAgKIAAgjIAMAAIAABGIgLAAIAAgKQgCAEgEADQgGAGgJgBQgPAAgFgKg");
	this.shape_60.setTransform(197.025,36.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgbAqQgKgJAAgQIANAAQAAAJADAEQAHAKAPAAQAGAAAGgCQAMgEAAgLQAAgHgFgEQgFgDgKgDIgMgDQgNgDgEgCQgKgHABgMQAAgNAIgIQAJgIAQAAQAOAAAKAHQALAIAAAPIgNAAQgBgHgCgFQgHgHgMAAQgLAAgFAFQgFAFAAAGQAAAIAGADQADACANADIANADQAJADAGADQAJAGAAANQAAAQgLAIQgMAGgPAAQgRABgKgKg");
	this.shape_61.setTransform(188.75,34.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(-40.3,25.7,337.8,36.7), null);


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
	this.shape.setTransform(35.042,1.0793,0.8999,0.8999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAqIAAgDQAGAAACgCQADgDAAgHIAAgwQAAgIgDgDQgBgEgHAAIAAgDIAXAAIALgCIAAAPQAAgDAEgFQADgDAEgCQAFgCAEAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHACADQADADAJAAIAAADg");
	this.shape_1.setTransform(28.3153,0.9893,0.8999,0.8999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAnQgJgEgFgKQgFgJAAgQQAAgPAFgJQAFgKAJgFQAJgDAKAAQALAAAJADQAKAFAEAKQAFAJAAAPQAAAQgFAJQgFALgJADQgIAFgMgBQgKABgJgFgAgKgeQgEAKAAAUQAAAWAEAJQAFAJAFABQAGgBAFgJQAEgJAAgWQAAgUgEgKQgFgJgGAAQgFAAgFAJg");
	this.shape_2.setTransform(20.7786,1.0793,0.8999,0.8999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6A4IgdAAIgLABIAAgEIAJgBQADgBAAgDQABgCAAgGIAAhSIglBjIgDAAIgrhmIAABLIABAOQABAEADADQAEACAHAAIAAAEIgIgBIgYABIAAgEQAFAAADgCQADgCAAgFIABgMIAAhHIgBgIQgBgEgCAAIgIgBIAAgEIAHABIAggBIAgBNIAdhMIAlgBIAAAEIgIABQgCAAgBAEIgBAIIAABPIABAIQAAADADABIAIABIAAAEIgLgBg");
	this.shape_3.setTransform(10.3172,-0.2931,0.8999,0.8999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAqIAAgDQAFAAACgDQACgBAAgIIAAgwIgBgHQAAgDgDgCQgCgCgEAAQgDAAgEADQgDACgCAEQgDAGAAAEIAAArQAAAHACACQADADAEAAIAAADIgIAAIgiAAIAAgDQAFAAADgDQACgCAAgHIAAgxQAAgHgCgDQgCgEgGAAIAAgDIAKAAIAXgCIAAAOQAEgIAHgDQAGgDAJAAQAGAAAFABQAEACACADIAEAHIABA3QAAAIADABQACADAFAAIAAADg");
	this.shape_4.setTransform(-4.0812,0.9893,0.8999,0.8999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqIAAgDQAFAAACgCQADgDAAgHIAAgwQAAgIgCgDQgCgEgHAAIAAgDIAXAAIALgCIAAAPIAEgIQADgDAEgCIAJgCIAAAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHADADQADADAIAAIAAADg");
	this.shape_5.setTransform(-11.8204,0.9893,0.8999,0.8999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMApQgEgCgBgCQgCgDAAgEQgDAGgFADQgGAEgHAAQgHAAgFgDQgFgCgCgFQgDgFAAgFQAAgHADgEQAFgFAEgCQAEgDAGgBIALgDQAEgBADgDQADgCAAgEIAAgNIgBgHQgCgDgCgCQgEgCgDAAIgGABQgEABgCACQAFACACADQADACAAAFQAAAGgEADQgDADgGAAQgGAAgDgEQgDgDAAgFQAAgEADgEIAGgFQAEgDAHgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAFABAEIABA4IABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADgBIADgBIACACQgDADgFACQgEABgGAAQgGAAgDgCgAABgBIgFACIgFAFQgDABgBAFQgCAEAAAEQAAAHADADQACADAFAAIAFgCIAFgEIAAghg");
	this.shape_6.setTransform(-18.8396,1.0343,0.8999,0.8999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAnQgIgFgFgJQgFgKAAgOQABgOAFgKQAFgKAJgFQAHgEAMAAQANgBAIAJQAJAJgBASIgsAAIAAAHQAAALADAGQAEAHADAEQAFADAFAAIAHgBQADgBAEgEQAEgCAEgFIACABQgCAHgEAFQgEAFgHAEQgFAEgJgBQgKABgJgFgAgFggQgEAHgBAPIAZAAIgBgOQgCgIgCgDQgCgEgEAAQgGAAgDAHg");
	this.shape_7.setTransform(-26.3313,1.0793,0.8999,0.8999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrA5IAAgEIAHgBQADAAABgEIABgIIAAhPIgBgIQgBgCgDgCIgHgBIAAgEIAKABIAdAAIAKgBIAAAEIgHABQgDABgBADIgBAIIAABRIABAHQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAFABIAIAAQAGAAAEgDQAFgCAEgFQADgDADgIQADgJABgGIAEAAIAAAog");
	this.shape_8.setTransform(-34.3179,-0.2931,0.8999,0.8999);

	this.instance = new lib.CTA();
	this.instance.setTransform(-63,-20,0.4699,0.4699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-63,-20,124.5,39), null);


(lib.Bg2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bg2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg2_1, new cjs.Rectangle(0,0,300,125), null);


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
	this.instance.setTransform(-61,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg1_1, new cjs.Rectangle(-61,0,300,250), null);


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
	this.instance.setTransform(614,45.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449).to({_off:false},0).to({alpha:1},8).wait(23));

	// FR3
	this.instance_1 = new lib.FR3("synched",0);
	this.instance_1.setTransform(602.55,45.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).to({alpha:1},9).to({_off:true},81).wait(31));

	// FR2
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(533.2,46.85,1.3942,1.3942,0,0,0,78.8,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},90).wait(121));

	// FR1
	this.instance_3 = new lib.FR11();
	this.instance_3.setTransform(516.35,47.55,1.3942,1.3942,0,0,0,63.7,41.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({_off:false},0).to({regX:63.8,x:516.5,alpha:1},7,cjs.Ease.get(1)).to({_off:true},137).wait(219));

	// CTA
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(975.15,82.45,1.1782,1.1782,0,0,0,38.9,11.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({y:58.9,alpha:1},8,cjs.Ease.get(1)).wait(352));

	// line
	this.instance_5 = new lib.Line_1();
	this.instance_5.setTransform(365.45,59.3,0.7727,0.7727,0,0,0,11,48.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({y:43.85,alpha:1},8,cjs.Ease.get(1)).wait(368));

	// Header
	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(212.05,135.5,1,1,0,0,0,128.2,70.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:115.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},73).wait(385));

	// Logo2
	this.instance_7 = new lib.Logo2();
	this.instance_7.setTransform(282.95,49.3,0.8905,0.8905);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(377));

	// Logo
	this.instance_8 = new lib.Logo();
	this.instance_8.setTransform(102.05,48.05,0.275,0.275,0,0,0,150.8,111.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:150.3,regY:111.4,scaleX:0.4297,scaleY:0.4297,alpha:1},8,cjs.Ease.get(1)).to({_off:true},81).wait(385));

	// Layer_2
	this.instance_9 = new lib.Layer();
	this.instance_9.setTransform(465.5,45.05);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95).to({_off:false},0).wait(385));

	// Bg2
	this.instance_10 = new lib.Bg2_1();
	this.instance_10.setTransform(132,142,1,1,0,0,0,150,62.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95).to({_off:false},0).wait(385));

	// sc
	this.instance_11 = new lib.sc();
	this.instance_11.setTransform(20,53.45,0.4665,0.4665,0,0,180,108,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-5.5},8,cjs.Ease.get(1)).wait(472));

	// sc
	this.instance_12 = new lib.sc();
	this.instance_12.setTransform(194.6,54.7,0.4665,0.4665,0,0,0,108.2,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:209.5},8,cjs.Ease.get(1)).wait(472));

	// IMG4
	this.instance_13 = new lib.IMG4("synched",0);
	this.instance_13.setTransform(100.15,50.45);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(449).to({_off:false},0).to({alpha:1},8).wait(23));

	// IMG3
	this.instance_14 = new lib.img3();
	this.instance_14.setTransform(42.3,16.65,0.3408,0.3408,0,0,0,213.3,107.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(359).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},82).wait(31));

	// Img2
	this.instance_15 = new lib.Img2_1();
	this.instance_15.setTransform(54.1,24.8,0.3762,0.3762,0,0,0,149.7,62.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},98).wait(113));

	// Img1
	this.instance_16 = new lib.Img1_1();
	this.instance_16.setTransform(44.95,22.15,0.4878,0.4878,0,0,0,150,65.4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(94).to({_off:false},0).to({regY:65.3,y:21.65,alpha:1},8,cjs.Ease.get(1)).to({_off:true},167).wait(211));

	// Bg1
	this.instance_17 = new lib.Bg1_1();
	this.instance_17.setTransform(114,105,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(480));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-56.3,1121,286.3);


// stage content:
(lib.WFSB_219237_MM_1024x90_V1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [477];
	// timeline functions:
	this.frame_477 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(477).call(this.frame_477).wait(3));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP/gHBMCf/AAAIAAODMif/AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480));

	// Layer_1
	this.instance = new lib.ad_animatedLayers("synched",0,false);
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(480));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(415,-11.4,610,241.4);
// library properties:
lib.properties = {
	id: 'BA2CF01948684AD2B5BBB6174A266813',
	width: 1024,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_4.jpg", id:"_4"},
		{src:"Bg1.jpg", id:"Bg1"},
		{src:"Bg2.jpg", id:"Bg2"},
		{src:"CTA.png", id:"CTA"},
		{src:"image.png", id:"image"},
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
an.compositions['BA2CF01948684AD2B5BBB6174A266813'] = {
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