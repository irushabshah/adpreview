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
	this.instance.setTransform(-17,-48,0.9843,0.9843);

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
	this.instance.setTransform(80,-96,2.8978,2.8978);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img3, new cjs.Rectangle(80,-96,606.1,605.1), null);


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
	this.instance.setTransform(-8,-116,2.6519,2.6519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(-8,-116,553.7,414.4), null);


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
	this.instance.setTransform(49,18,2.0421,2.0421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(49,18,426.4,319.8), null);


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
	this.shape.setTransform(522.6568,-14.9929,0.9599,0.9599);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4A/IgyABIAAgFQAIAAACgEQADgDABgLIAAhJQAAgGgCgFQAAgDgEgEQgEgCgFAAQgGAAgFAEQgGADgDAHQgDAGAAAIIAABBQAAALADADQADAEAHAAIAAAFIg/AAIAAgFQAIAAAEgEQADgEAAgKIAAhKQAAgKgDgGQgDgFgJAAIAAgFIAhAAIARgDIAAAWQAGgNAKgFQAJgFANAAQAJAAAHADQAHADAEAEQAEAFABAGQACAHAAANIAAA/QAAALAEADQACAEAJAAIAAAFIgNgBg");
	this.shape_1.setTransform(512.6014,-19.6727,0.9599,0.9599);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA+QgHgDgDgEQgEgFgCgGQgCgLAAgIIAAg8QAAgMgDgEQgDgGgJABIAAgGIAPABIATgBIAQgCIAABjIABAKQABAEADADQADADAGgBQAHAAAEgDQAGgEACgGQAEgGAAgIIAAg+QAAgKgEgGQgDgGgJABIAAgGIAPABIATgBIAQgCIAABkQAAAKAEAGQADAEAJAAIAAAGIgiAAIgQACIAAgVQgGALgKAGQgKAFgMAAQgKAAgGgDg");
	this.shape_2.setTransform(498.3702,-19.4567,0.9599,0.9599);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BVIAAgFQAIAAADgBQAEgCACgEIABgNIAAh3IgBgMQgCgFgEgCQgDgBgIAAIAAgFIB/AAIgBAvIAAAIIgFAAQgDgSgGgMQgFgKgIgEQgJgGgKAAIgIAAQgHABgDABQgDAAgCAFIgBALIAAA8IAJAAQAGAAAFgDQAFgDADgEIAFgLIADgLIAGAAIAABEIgFAAQgCgJgDgHQgCgHgHgEQgFgFgJAAIgJAAIAAA3QAAAKACAEQACAFAEABQAGABALABIAAAFg");
	this.shape_3.setTransform(484.7389,-21.7126,0.9599,0.9599);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBYQgQAAgKgDQgLgCgHgFQgGgFAAgIQAAgHAGgGQAGgGAOgEIACAEQgFAEgCAEQgBAEgBAFQAAAKAKAFQAIAGARAAQAKAAAIgDQAJgCAEgHQAGgFAAgJQgBgHgFgFQgFgFgQAAIgOAAQgIAAgJgCQgGgBgGgGQgDgFAAgHQgBgKAJgIQAGgFALgFQgIgBgHgDQgKgDgHgJQgFgIgBgOQABgNAFgIQAIgJAJgEQAMgEANAAQANAAAKAEQAIADAFAEQADgEAFgDQAGgHALAAQAHAAAFAFQADAEAAAHQAAAGgDAEQgEAEgFAAQgFAAgDgDQgDgDAAgGQgBgFADgIQgGADgEAEIgGAGIABACQAHAIAAANQAAANgHAJQgFAJgMADQgKAFgNAAIgEAAIgGAEQgEADAAAEQAAAIAJAAIAZAAQAPAAAJADQAKADAHAHQAGAIAAALQAAALgIALQgIAKgPAGQgPAGgXAAgAgVhIQgDAHgBATQABAUADAHQAEAHAGAAQAHAAAEgHQACgIAAgTQAAgRgCgJQgEgHgHAAQgGAAgEAHg");
	this.shape_4.setTransform(466.092,-17.6568,0.9599,0.9599);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBdIAAgFQAIAAAEgEQAEgEAAgJIAAhLQAAgLgEgFQgDgFgJAAIAAgFIAPABIASgBIAQgDIAABoQAAAKAEADQADAEAJAAIAAAFgAgQg8QgGgFAAgIQAAgKAGgEQAFgFALAAQAJAAAGAFQAFAEAAAKQAAAHgFAGQgGAFgJAAQgLAAgFgFg");
	this.shape_5.setTransform(456.1326,-22.4805,0.9599,0.9599);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBVIAAgFIALgBQAEgCACgEQABgFAAgIIAAh3QAAgIgBgEQgCgFgEgCIgLgCIAAgEIBJABQAegBAPALQAOALAAAQQAAAJgFAIQgEAIgMAHQgLAIgQACIAAAAQAYADAMAFQAMAFAHAKQAGAJAAAKQAAAPgIALQgIAKgPAGQgQAFgTAAgAgQA8QAAAJABADQACAFADABQADABAHABQARgBAIgKQAHgKABgWQgBgSgIgKQgKgJgUAAIgKAAgAgOhLQgCAEAAAMIAAA2IAKAAQALAAAFgEQAHgHACgIQACgIAAgMQAAgRgFgJQgGgJgLAAQgJAAgEAEg");
	this.shape_6.setTransform(444.8292,-21.7126,0.9599,0.9599);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOANQgFgEAAgJQAAgIAFgFQAGgFAIABQAKgBAFAFQAFAGAAAHQAAAIgFAFQgGAGgJAAQgIAAgGgGg");
	this.shape_7.setTransform(428.5341,-14.9929,0.9599,0.9599);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBAIgVgJQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAABQgCADgBAEIgEAAIABgxIAFAAQABAPADAJQAEAKAHAFQAGAFAKAAQAFABADgCQADgBADgFQACgCABgIQAAgJgIgIIgQgPIgOgMQgHgGgFgGQgDgHAAgKQAAgMAFgGQAHgJAIgDQAJgDAMgBQAHABAJACQAKADABACQAJAGACgNIAEAAIgBAqIgEAAQgCgKgEgHQgCgJgHgGQgGgFgLAAQgGAAgEAEQgFADAAAIQAAAHAFAGQADAFAGAFIAdAWQAHAGAEAGQAEAIAAAJQgBALgGAIQgGAHgKAFQgLAEgMABQgGgBgGgBg");
	this.shape_8.setTransform(420.2066,-19.5047,0.9599,0.9599);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGBeIAAgFQAIAAACgEQADgDAAgLIAAhJIgBgLQgBgDgDgEQgEgCgFAAQgGAAgGADQgFAFgDAFQgDAGAAAHIAABDQAAALACADQAEAEAGAAIAAAFIg+AAIAAgFQAJAAADgEQADgDAAgLIAAiHQAAgLgDgFQgDgFgJAAIAAgFIAhAAIARgDIAABTQAFgMALgGQAJgFAMAAQAKAAAHADQAHADADAEQADAEADAHQACAIgBALIAABAQABAKADAEQAEAEAIAAIAAAFg");
	this.shape_9.setTransform(407.8713,-22.5525,0.9599,0.9599);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBVQgLgCgHgFQgGgFAAgIQAAgHAGgGQAHgGANgEIACAEQgEAEgCAEQgCAEAAAFQAAAKAJAFQAJAGAQAAQAKAAAIgDQAJgCAFgHQAFgFAAgJQAAgHgGgFQgFgFgQAAIgOAAQgIAAgJgCQgGgBgFgGQgEgFAAgHQAAgKAIgIQAFgEAMgGQgHgBgHgDQgMgEgFgIQgGgIAAgOQAAgNAGgIQAGgJALgEQALgEANAAQANAAALAEQAHADAFAEQADgEAFgDQAHgHAKAAQAIAAADAFQAEADAAAIQAAAHgDADQgEAEgFAAQgEAAgEgDQgDgEgBgFQAAgGAEgHQgHADgEAEIgFAGIABACQAGAIAAANQAAANgGAJQgGAJgLADQgLAFgNAAIgEgBIgGAFQgEADAAAEQAAAIAKAAIAZAAQANAAAKADQAKADAHAHQAGAHAAAMQAAAMgIAKQgIAKgPAGQgPAGgXAAQgRAAgKgDgAgVhIQgDAHAAATQAAAUADAHQAEAHAGAAQAHAAADgHQADgHAAgUQAAgSgDgIQgDgHgHAAQgGAAgEAHg");
	this.shape_10.setTransform(394.408,-17.6568,0.9599,0.9599);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA+QgHgCgDgFQgDgDgDgIQgBgIAAgLIAAg8QAAgMgEgEQgDgGgJABIAAgGIAPABIATgBIAQgCIAABjIABAKQABAEADADQAEADAGgBQAFAAAFgDQAFgDAEgHQADgGAAgIIAAg+QAAgLgDgFQgEgGgIABIAAgGIAOABIATgBIAQgCIAABkQAAAKAEAGQADAEAJAAIAAAGIgiAAIgQACIAAgVQgFALgLAGQgJAFgNAAQgJAAgHgDg");
	this.shape_11.setTransform(380.9688,-19.4567,0.9599,0.9599);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASA+QgFgDgDgEQgDgFABgFQgFAIgJAGQgIAGgLAAIAAgBQgLAAgHgEQgHgDgDgIQgEgGAAgJQAAgKAFgGQAFgHAHgEIAPgHIAQgEIALgGQAFgDAAgGIAAgTQAAgGgCgFQgCgFgDgCQgEgDgHAAQgFAAgEABQgGACgCADQAGACAEAFQAEAFgBAGQABAIgGAFQgFAFgIAAQgJAAgEgFQgFgGAAgIQABgHADgEIAKgJQAGgDAJgDQAJgCAMAAQAHAAAMACQAKAEAFAFQAGAGABAHQACALAAAKIAABAIABAIQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAABgBIAEgCIACAEQgEAEgIACQgHADgIAAQgIAAgFgDgAABgDIgPAMQgEADgCAGQgDAGAAAHQAAAIAEAFQAFAFAGAAQAEAAAEgCQAEgCAEgGIAAgwQgDAEgEACg");
	this.shape_12.setTransform(368.3695,-19.5767,0.9599,0.9599);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCBVIAAgFIAMgBQAEgCABgEQABgFAAgIIAAh3QAAgIgBgEQgBgFgEgCQgEgBgIAAIAAgFIBLAAIAAAFQgIAAgDABQgFACgBAFQgCAEAAAIIAAB6QAAAHACADQABAEADABQAEABAFABIALAAQAIAAAIgFQAHgDAGgIQAFgFAEgLQAEgLACgLIAGAAIgBAlIACAWg");
	this.shape_13.setTransform(355.2423,-21.7126,0.9599,0.9599);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBVQgLgCgHgFQgGgGAAgHQAAgHAGgGQAHgGAOgEIACAEQgFAEgCAEQgCAEAAAFQAAAKAJAFQAJAGAQAAQAKAAAJgDQAHgCAGgHQAFgGAAgIQAAgHgGgFQgEgFgQAAIgPAAQgJAAgIgCQgHgCgEgFQgEgEAAgIQAAgJAHgJQAHgEALgGQgIgBgGgDQgLgDgGgJQgGgIgBgOQABgMAGgJQAHgJAKgEQALgEAOAAQAMAAALAEQAHADAFAFQADgFAFgDQAHgHAKAAQAIAAAEAFQADADAAAIQAAAHgDADQgEAEgEAAQgFAAgDgDQgEgEgBgFQAAgFAEgIQgGADgFAEIgFAHIABABQAGAIAAANQAAAOgGAIQgGAIgLAEQgKAFgNAAIgFAAIgGAEQgEADAAAEQAAAIAJAAIAaAAQANAAALADQAJADAHAHQAGAIAAALQAAALgIALQgHAKgPAGQgQAGgXAAQgRAAgKgDgAgVhIQgDAHAAATQAAAUADAHQAFAHAGAAQAGAAAEgHQACgHAAgUQAAgTgCgHQgFgHgFAAQgGAAgFAHg");
	this.shape_14.setTransform(336.3073,-17.6568,0.9599,0.9599);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATBcIgzABIAAgFQAIAAAFgEQADgEAAgJIAAhLQAAgLgDgFQgEgFgJAAIAAgFIAQABIASgBIAQgDIAABoQgBAKAEADQAEAEAHAAIAAAFIgNgBgAgQg8QgHgFAAgIQAAgJAHgFQAFgFALAAQAJAAAFAFQAHAEgBAKQABAIgHAFQgFAFgJAAQgLAAgFgFg");
	this.shape_15.setTransform(326.3719,-22.4805,0.9599,0.9599);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhHBVIAAgFIALgBQAEgCABgEQACgFAAgIIAAh3QAAgIgCgEQgCgFgDgCIgMgCIAAgEIBKABQAdgBAPALQAOALAAAQQAAAJgEAIQgGAJgKAGQgMAIgQACIAAAAQAYADAMAFQANAGAGAJQAGAJAAAKQAAAPgHALQgIAKgQAGQgPAFgUAAgAgQA8QAAAIACAEQABAFAEABQACABAHABQARgBAIgKQAIgKAAgWQAAgSgJgKQgKgJgUAAIgKAAgAgNhLQgDAEAAAMIAAA2IALAAQAKAAAGgEQAGgHACgIQADgKgBgKQAAgRgFgJQgFgJgMAAQgJAAgDAEg");
	this.shape_16.setTransform(315.0445,-21.7126,0.9599,0.9599);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOANQgFgFgBgIQABgHAFgGQAGgFAIABQAKgBAFAFQAGAGAAAHQAAAIgGAFQgGAGgJAAQgHAAgHgGg");
	this.shape_17.setTransform(298.7735,-14.9929,0.9599,0.9599);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAGBAIAAgFQAIAAADgEQACgEAAgKIAAhJIgBgLQgBgEgDgDQgEgCgFAAQgGAAgFAEQgGADgDAHQgDAFAAAJIAABBQAAALADADQADAEAHAAIAAAFIg/AAIAAgFQAJAAADgEQADgDAAgLIAAhKQAAgLgDgFQgDgFgJAAIAAgFIAiAAIAQgDIAAAWQAFgMALgGQAJgFANAAQAJAAAIADQAHADADAEQADADACAIQACAIAAAMIAAA/QAAAKADAEQAEAEAIAAIAAAFg");
	this.shape_18.setTransform(288.718,-19.6727,0.9599,0.9599);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA7QgNgIgHgOQgHgOAAgWQAAgVAHgPQAIgQAOgGQANgIAQAAQAUAAANANQAMANAAAcIhCAAIAAAFIAAAGQgBAPAFALQAEAKAHAFQAHAFAHAAIALgCQAEgBAHgEQAGgGAEgHIAEACQgCAKgHAIQgGAIgKAGQgJAFgNABQgPAAgNgHgAgIgxQgFAMgCAWIAlAAQAAgMgBgLQgCgJgEgHQgEgFgFAAQgIAAgGAKg");
	this.shape_19.setTransform(275.8788,-19.5047,0.9599,0.9599);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZA7QgMgIgHgOQgHgOAAgWQAAgVAHgPQAIgQANgGQAOgIAQAAQAVAAAMANQAMANAAAcIhCAAIgBAFIAAAGQABAPAEALQAFAKAGAFQAHAFAIAAIAKgCQAEgBAHgEQAGgGAEgHIAFACQgEAKgFAIQgHAIgJAGQgLAFgNABQgPAAgNgHgAgIgxQgFAMgCAWIAlAAQAAgMgCgLQgBgJgEgHQgDgFgGAAQgIAAgGAKg");
	this.shape_20.setTransform(264.2634,-19.5047,0.9599,0.9599);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEA/Ig3ABIAAgFQAIAAADgEQAEgDAAgLIAAhKQAAgLgDgFQgDgGgJAAIAAgFIAPABIASgBIARgCIAAAWQABgFAFgHQAEgEAHgEQAGgDAIAAQAJAAAEAEQAFADACAFQACAGAAAEQAAAJgFAGQgFAGgJAAQgIAAgFgFQgEgDAAgIQAAgHADgEQADgFAEgDQgEgBgDACQgEAAgEADQgFAEgCAEQgDAEgBAFIgBAKIAAA/QAAAMAEADQAGAFALAAIAAAFIgQgBg");
	this.shape_21.setTransform(253.584,-19.6727,0.9599,0.9599);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXA7QgMgHgIgOQgIgPAAgWQAAgUAIgPQAHgPAOgIQAOgIAPAAQAIAAAKACQAJADAEADQAGAEAEAFQADAFAAAJQAAAHgFAGQgGAGgIAAQgIAAgFgFQgGgFAAgIQAAgIAGgFQADgEAIgDIgHgEQgDgCgFABQgHAAgGADQgEAFgEAIIgHASQgBAJAAANQAAASAEAKQAGALAFAEQAIAFAHAAIALgCQADgBAIgEQAFgGAFgHIAEACQgDAKgGAIQgGAIgJAGQgKAFgOABQgOAAgNgHg");
	this.shape_22.setTransform(242.3767,-19.5047,0.9599,0.9599);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYBVIgOgGQgGgDgDAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABAAABIgCAHIgFAAIAAhAIAFAAQACASAEALQAEAOAKAJQAJAIAPAAQAIAAAGgDQAHgDAEgGQAEgGAAgJQAAgKgFgHQgEgIgIgGIgSgOIgVgNQgJgHgGgKQgHgKABgNQAAgPAHgKQAHgJANgFQAMgFAPAAQANAAAHADQAJADAFADIAEADIAEAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAIACgIIAGAAIgBA3IgGAAQgBgNgFgMQgEgLgJgIQgKgHgMAAQgLAAgHAGQgIAGABAMQAAAKAEAGQAEAGALAIIAVAPIAVAOQAJAIAFAJQAFAKABAMQAAAQgJALQgJAKgNAFQgPAFgNAAQgPAAgJgDg");
	this.shape_23.setTransform(229.9934,-21.6886,0.9599,0.9599);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoBVQgLgCgHgFQgGgGgBgHQABgHAGgGQAHgGANgEIADAEQgFAEgCAEQgCAEAAAFQAAAKAJAFQAJAGARAAQAJAAAJgDQAHgCAGgHQAFgGAAgIQAAgHgGgFQgEgFgQAAIgPAAQgJAAgIgCQgHgCgEgFQgEgFAAgHQAAgJAHgJQAGgEAMgGQgIgBgGgDQgLgEgGgIQgGgIgBgOQABgMAGgJQAGgJALgEQALgEANAAQANAAALAEQAHADAFAFQADgFAFgDQAHgHAKAAQAHAAAFAFQADADABAIQgBAHgDADQgDAEgFAAQgFAAgDgDQgEgEAAgFQAAgFADgIQgGADgFAEIgFAHIABABQAGAIAAANQAAAOgGAIQgFAIgMAEQgLAFgNAAIgEgBIgGAFQgEADAAAEQAAAIAKAAIAZAAQANAAAKADQAKADAHAHQAGAIAAALQAAALgIALQgHAKgPAGQgQAGgXAAQgRAAgKgDgAgVhIQgDAHAAATQAAAUADAHQAFAHAFAAQAHAAAEgHQACgHAAgUQAAgTgCgHQgFgHgGAAQgFAAgFAHg");
	this.shape_24.setTransform(211.3704,-17.6568,0.9599,0.9599);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggBdIAAgFQAIAAAEgEQAEgEAAgJIAAhLQAAgLgEgFQgDgFgJAAIAAgFIAPABIASgBIAQgDIAABoQAAAKAEADQADAEAJAAIAAAFgAgRg8QgGgFAAgIQAAgJAGgFQAGgFAKAAQAKAAAFAFQAGAEAAAKQAAAIgGAFQgFAFgKAAQgKAAgGgFg");
	this.shape_25.setTransform(201.459,-22.4805,0.9599,0.9599);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhHBVIAAgFIALgBQAEgCABgEQACgFAAgIIAAh3QAAgIgCgEQgBgFgEgCIgMgCIAAgEIBKABQAdgBAPALQAOALAAAQQAAAJgEAIQgGAJgKAGQgMAIgPACIAAAAQAYADAMAFQAMAGAGAJQAGAJAAAKQAAAPgHALQgJAKgPAGQgPAFgUAAgAgQA8QAAAIACAEQABAFADABQAEABAGABQARgBAIgKQAIgKAAgWQAAgSgJgKQgJgJgVAAIgKAAgAgNhLQgDAEAAAMIAAA2IALAAQAKAAAGgEQAGgHACgIQACgKAAgKQAAgRgFgJQgFgJgMAAQgJAAgDAEg");
	this.shape_26.setTransform(190.1076,-21.7126,0.9599,0.9599);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC554").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_27.setTransform(482.575,30.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgZA5QgKgGgGgLQgGgLAAgOQAAgOAGgKQAGgKAKgHQAKgGAMAAQAIAAAJAEQAJAEAFAHIAAguIAUAAIAAB9IgUAAIAAgOQgEAGgJAFQgIAEgKAAQgMABgKgHgAgNgLQgGADgEAIQgEAGAAAJQAAAKAEAHQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgIQAEgHAAgJQAAgLgEgFQgEgIgGgDQgHgEgHAAQgGAAgHAEg");
	this.shape_28.setTransform(474.825,25.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_29.setTransform(464.275,26.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgXArQgIgFgGgJQgEgJAAgNIAAg1IATAAIAAAyQAAANAGAHQAGAGAKAAQAKAAAHgGQAGgHAAgNIAAgyIATAAIAABcIgTAAIAAgLQgEAGgHADQgIADgHAAQgLAAgJgEg");
	this.shape_30.setTransform(453.6,26.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgYAqQgKgGgHgLQgFgLAAgOQAAgNAFgLQAHgLALgGQAKgGANAAQANAAALAGQALAGAGALQAHALgBANQAAAOgGALQgHALgLAGQgKAGgNAAQgNAAgLgGgAgNgbQgHAEgDAHQgEAHAAAJQAAAPAIAIQAIAJALAAQAGAAAHgEQAGgEAEgHQAFgHAAgKQgBgJgDgHQgEgHgHgEQgGgDgHAAQgHAAgGADg");
	this.shape_31.setTransform(443.1,26.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgXAvIAAhcIAUAAIAAAOQADgHAHgFQAHgDAKAAIAAATIgFAAQgMAAgFAHQgFAFAAAPIAAAvg");
	this.shape_32.setTransform(435.175,26.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AgZAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQAKgGAMAAQAKAAAIAEQAIAFAFAGIAAgNIAUAAIAABcIgUAAIAAgOQgFAGgIAFQgJAEgJAAQgMAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_33.setTransform(425.825,26.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_34.setTransform(412.125,26.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_35.setTransform(404.875,25.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_36.setTransform(396.625,25.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgcA+QgNgJgBgPIATAAQACAHAHAEQAHAFAJAAQAMAAAHgHQAHgIAAgNIAAgPQgFAGgIAEQgIAFgKAAQgMAAgKgGQgKgGgGgLQgGgLAAgOQAAgOAGgLQAGgKAKgGQAKgHAMABQAKAAAIAEQAJAFAEAGIAAgOIAUAAIAABeQAAANgGAKQgFAKgKAGQgLAFgOABQgSgBgMgIgAgNgxQgGAEgEAHQgEAHAAAJQAAAKAEAHQAEAHAGADQAHAFAGAAQAHAAAHgFQAGgDAEgHQAEgHAAgJQAAgKgEgHQgEgHgGgEQgHgEgHABQgGgBgHAEg");
	this.shape_37.setTransform(385.375,29);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_38.setTransform(378.075,24.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_39.setTransform(370.725,26.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_40.setTransform(358.375,25.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_41.setTransform(351.025,26.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_42.setTransform(341.675,26.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_43.setTransform(334.525,24.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_44.setTransform(327.175,26.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_45.setTransform(316.575,26.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgXArQgJgFgEgJQgGgJAAgNIAAg1IATAAIAAAyQABANAGAHQAGAGAKAAQALAAAGgGQAHgHgBgNIAAgyIAUAAIAABcIgUAAIAAgLQgEAGgIADQgHADgIAAQgKAAgJgEg");
	this.shape_46.setTransform(305.85,26.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AgMBBIAAhMIgLAAIAAgQIALAAIAAgHQAAgQAJgHQAHgHATAAIAAAQQgKAAgDADQgEADABAIIAAAHIARAAIAAAQIgRAAIAABMg");
	this.shape_47.setTransform(297.95,24.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_48.setTransform(286.225,26.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_49.setTransform(275.925,25.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_50.setTransform(267.575,25.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgZA5QgKgGgGgLQgGgLAAgOQAAgOAGgKQAGgKAKgHQAKgGAMAAQAIAAAJAEQAJAEAFAHIAAguIAUAAIAAB9IgUAAIAAgOQgEAGgJAFQgIAEgKAAQgMABgKgHgAgNgLQgGADgEAIQgEAGAAAJQAAAKAEAHQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgDAEgIQAEgHAAgJQAAgLgEgFQgEgIgGgDQgHgEgHAAQgGAAgHAEg");
	this.shape_51.setTransform(254.675,25.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AAYAvIAAgyQAAgNgHgHQgGgGgLAAQgKAAgGAGQgGAHAAANIAAAyIgUAAIAAhcIAUAAIAAALQAEgGAIgDQAHgDAHAAQALAAAJAEQAJAFAFAJQAFAJAAAMIAAA2g");
	this.shape_52.setTransform(244.175,26.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgZAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQAKgGAMAAQAKAAAIAEQAIAFAFAGIAAgNIAUAAIAABcIgUAAIAAgOQgFAGgIAFQgJAEgJAAQgMAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_53.setTransform(232.925,26.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AAYAwIAAgzQAAgNgHgHQgGgGgLgBQgKABgGAGQgGAHAAANIAAAzIgUAAIAAhdIAUAAIAAALQAEgGAIgDQAHgDAHgBQALAAAJAGQAJAEAFAJQAFAJAAANIAAA2g");
	this.shape_54.setTransform(509.375,6.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgXAqQgLgGgHgLQgFgLgBgOQABgNAFgLQAHgLALgGQAKgGANAAQANAAALAGQALAGAGALQAHALAAANQgBAOgGALQgHALgLAGQgLAGgMAAQgNAAgKgGgAgNgbQgHAEgDAHQgEAHAAAJQAAAPAIAIQAIAJALAAQAHAAAGgEQAGgEAEgHQAFgHAAgKQgBgJgDgHQgEgHgHgEQgGgDgHAAQgHAAgGADg");
	this.shape_55.setTransform(498.8,6.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_56.setTransform(489.175,6.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgZAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQAKgGAMAAQAKAAAIAEQAIAFAFAGIAAgNIAUAAIAABcIgUAAIAAgOQgFAGgIAFQgJAEgJAAQgMAAgKgGgAgNgbQgGAEgEAHQgEAHAAAJQAAAJAEAIQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgDgHAAQgGAAgHADg");
	this.shape_57.setTransform(479.025,6.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_58.setTransform(468.675,6.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_59.setTransform(459.275,6.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_60.setTransform(445.825,6.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_61.setTransform(435.525,5.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_62.setTransform(427.175,5.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgMBBIAAhMIgLAAIAAgQIALAAIAAgHQAAgQAIgHQAIgHASAAIAAAQQgIAAgEADQgEADABAIIAAAHIARAAIAAAQIgRAAIAABMg");
	this.shape_63.setTransform(417.55,4.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgXAqQgMgGgFgLQgHgLAAgOQAAgNAHgLQAGgLALgGQALgGAMAAQAOAAAKAGQALAGAHALQAFALABANQAAAOgHALQgGALgLAGQgLAGgNAAQgNAAgKgGgAgNgbQgHAEgDAHQgEAHAAAJQAAAPAIAIQAHAJAMAAQAHAAAGgEQAHgEAEgHQADgHAAgKQABgJgEgHQgEgHgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_64.setTransform(409.75,6.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_65.setTransform(396.075,6.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AA5AwIAAgzQAAgNgHgHQgGgGgLgBQgLABgGAGQgGAHAAANIAAAzIgSAAIAAgzQAAgNgHgHQgGgGgLgBQgLABgGAGQgGAHAAANIAAAzIgUAAIAAhdIAUAAIAAALQAEgGAIgDQAHgDAIgBQALAAAJAGQAIAEAFAJQAEgIAJgFQAJgFAKgBQALAAAJAGQAJAEAFAJQAFAJAAANIAAA2g");
	this.shape_66.setTransform(383.175,6.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_67.setTransform(372.425,5.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_68.setTransform(368.275,4.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgMBBIAAhMIgLAAIAAgQIALAAIAAgHQAAgQAIgHQAIgHATAAIAAAQQgKAAgDADQgDADgBAIIAAAHIASAAIAAAQIgSAAIAABMg");
	this.shape_69.setTransform(363.6,4.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_70.setTransform(353.925,5.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgRAsQgJgEgFgHQgFgGAAgJIAUAAQAAAGAFAEQAGAEAGAAQAJAAAEgDQAFgDAAgFQAAgFgFgDIgPgGQgLgCgGgDQgHgCgFgFQgFgGAAgJQAAgIAFgGQAEgGAIgDQAJgEAJAAQAQAAAKAIQAKAIAAAOIgTAAQgBgGgEgEQgFgEgHAAQgHAAgEADQgEADAAAFQAAADADADQACACAEACIALAEQAKACAGADQAHACAFAFQAEAGAAAJQAAAIgEAGQgEAGgIAEQgIADgLAAQgKAAgJgEg");
	this.shape_71.setTransform(346.625,6.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_72.setTransform(337.225,6.825);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgOA8QgJgFgFgGIAAANIgTAAIAAh9IATAAIAAAuQAFgGAJgFQAIgEAKAAQAMAAAKAGQALAGAFALQAGAKAAAOQAAAOgGALQgFALgLAHQgKAFgMAAQgKAAgIgDgAgNgLQgGAEgEAGQgFAGAAAKQAAAKAFAHQAEAHAGAEQAHAEAGAAQAHAAAHgEQAGgEAEgHQAEgIAAgJQAAgJgEgHQgEgGgGgEQgHgEgHAAQgGAAgHAEg");
	this.shape_73.setTransform(326.95,5.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_74.setTransform(311.925,6.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AAYA/IAAg0QAAgMgHgHQgGgGgLAAQgKAAgGAGQgGAHAAAMIAAA0IgUAAIAAh9IAUAAIAAArQAFgGAHgDQAIgDAIAAQAKAAAJAFQAIAEAFAJQAFAJAAAMIAAA3g");
	this.shape_75.setTransform(301.625,5.225);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AALA6QgMAAgHgGQgHgGAAgOIAAgyIgLAAIAAgQIALAAIAAgXIATAAIAAAXIAXAAIAAAQIgXAAIAAAyQAAAGACACQADACAGAAIAMAAIAAAQg");
	this.shape_76.setTransform(293.275,5.675);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_77.setTransform(281.225,6.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AgVAqQgLgGgGgLQgFgLAAgOQAAgNAFgLQAGgLALgGQAKgGAMAAQARAAALAIQALAIAEAPIgVAAQgCgHgGgEQgFgEgJAAQgLAAgHAJQgHAIAAAOQAAAPAHAJQAHAIALAAQARAAAFgPIAVAAQgEAPgLAIQgLAIgRAAQgMAAgKgGg");
	this.shape_78.setTransform(271.275,6.825);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAYAwIAAgzQAAgNgHgHQgGgGgLgBQgKABgGAGQgGAHAAANIAAAzIgUAAIAAhdIAUAAIAAALQAEgGAIgDQAHgDAHgBQALAAAJAGQAJAEAFAJQAFAJAAANIAAA2g");
	this.shape_79.setTransform(261.075,6.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_80.setTransform(250.675,6.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC554").s().p("AgJBBIAAhcIATAAIAABcgAgIgrQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_81.setTransform(243.575,4.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDC554").s().p("AgXAwIAAhdIAUAAIAAAOQADgHAHgEQAHgFAKAAIAAAUIgFAAQgMABgFAFQgFAGAAAOIAAAxg");
	this.shape_82.setTransform(238.775,6.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDC554").s().p("AgWAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgGQALgGANAAQANAAAKAGQAKAFAGALQAGAKAAAOIgBAIIhGAAQABALAHAHQAIAHAKAAQAPAAAHgNIAUAAQgEANgLAIQgLAIgQAAQgNAAgKgGgAAagHQAAgLgIgGQgHgHgLAAQgJAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_83.setTransform(230.275,6.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EDC554").s().p("AgvBGIAAiJIATAAIAAAOQAGgHAIgEQAJgFAJAAQAMAAAKAGQAKAHAGAKQAGALAAAOQAAAOgGAKQgGALgKAHQgKAGgMAAQgJAAgJgFQgIgEgGgGIAAA6gAgNgwQgGAEgEAHQgFAHAAAKQAAAJAFAHQAEAHAGADQAHAEAGAAQAHAAAHgEQAGgEAEgGQAEgHAAgKQAAgJgEgHQgEgHgGgEQgHgEgHAAQgGAAgHAEg");
	this.shape_84.setTransform(219.95,8.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EDC554").s().p("AATAvIgTggIgTAgIgUAAIAeguIgegvIAVAAIAUAgIATggIAUAAIgeAuIAeAvg");
	this.shape_85.setTransform(210.05,6.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDC554").s().p("AggA7IAAh1IBAAAIAAAQIgsAAIAAAjIAoAAIAAAOIgoAAIAAAlIAsAAIAAAPg");
	this.shape_86.setTransform(201.8,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(183.1,-31.5,341.5,70.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAeAfIAAgpQAAgGgDgCQgDgCgEAAQgGAAgEADQgFAFAAAJIAAAiIgJAAIAAgnQAAgGgCgDQgCgEgGAAQgGAAgFAEQgFAFAAAMIAAAfIgKAAIAAg7IAKAAIAAAIIAHgHQAFgDAGAAQAIAAAEADIAEAHQADgGAFgCQAEgCAGAAQAMAAAEAJQADAFAAAHIAAAog");
	this.shape.setTransform(160.075,61.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaArIAAhTIAKAAIAAAIQADgFAEgCQAFgDAGAAQALAAAHAIQAHAIAAAOQAAATgKAIQgHAGgJAAQgGAAgEgDQgDgBgDgFIAAAfgAgOgWQgCAFAAAJQAAAHACAEQAEAJAKAAQAHAAAFgGQAEgGAAgLQAAgHgCgFQgEgKgKAAQgKAAgEALg");
	this.shape_1.setTransform(152.175,62.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNADgKQAHgTARAAQAPABAIANQAFAJAAASQAAAPgFALQgHAPgQAAQgOAAgHgMgAgLgXQgFAIAAAQQAAAMADAIQAEALAJAAQAIAAAFgGQAEgHAAgTQAAgNgDgKQgEgJgKAAQgHAAgEAJg");
	this.shape_2.setTransform(142.35,60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNADgKQAHgTARAAQAPABAIANQAFAJAAASQAAAPgFALQgHAPgQAAQgOAAgHgMgAgLgXQgFAIAAAQQAAAMADAIQAEALAJAAQAIAAAEgGQAFgHAAgTQAAgNgDgKQgEgJgKAAQgIAAgDAJg");
	this.shape_3.setTransform(135.95,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAeIAAgNIALAAIAAANgAgFgRIAAgMIALAAIAAAMg");
	this.shape_4.setTransform(131.425,61.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAoQADgXANgWQAHgNAJgKIgsAAIAAgLIA3AAIAAAJIgKANQgGAKgFAJQgFALgCAJIgEASg");
	this.shape_5.setTransform(126.375,60.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_6.setTransform(118.25,60.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAhQgIgIAAgVQAAgOAEgLQAHgUASAAQANAAAGAHQAFAHAAAIIgKAAQgBgFgCgDQgEgFgHAAQgIAAgFAIQgFAIAAAPQADgFAFgDQAFgCAFAAQALAAAHAGQAIAGAAANQAAALgHAIQgIAJgNAAQgKAAgJgJgAgKABQgFAFAAAJQAAAHAEAGQAFAFAHAAQAIAAAEgGQAEgFAAgHQAAgHgEgFQgDgFgKAAQgFAAgFADg");
	this.shape_7.setTransform(110.575,60.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbApQABgLAEgHQADgIALgHIAKgGIALgGQAEgFAAgGQAAgHgEgEQgFgEgGAAQgKAAgEAIQgDAEABAHIgLAAQAAgKAEgHQAHgMAQAAQANAAAHAIQAGAHAAAKQAAAJgGAGQgEAEgLAGIgHAEIgIAGQgGAFgBAGIArAAIAAAKg");
	this.shape_8.setTransform(104.05,60.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNAEgKQAGgTARAAQAPABAIANQAFAJAAASQAAAPgFALQgHAPgQAAQgOAAgHgMgAgMgXQgEAIAAAQQAAAMADAIQAEALAJAAQAIAAAFgGQAEgHAAgTQAAgNgEgKQgDgJgJAAQgJAAgEAJg");
	this.shape_9.setTransform(97.65,60.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbApQAAgLAEgHQAEgIALgHIAKgGIAKgGQAFgFAAgGQAAgHgFgEQgDgEgIAAQgJAAgEAIQgCAEgBAHIgKAAQABgKADgHQAGgMAQAAQAOAAAHAIQAGAHAAAKQAAAJgHAGQgDAEgLAGIgHAEIgIAGQgGAFgBAGIArAAIAAAKg");
	this.shape_10.setTransform(91.2,60.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_11.setTransform(83.225,64.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAiQgGgIAAgMIAKAAQABAJACADQAEAHAKgBQAIABAEgFQAFgEAAgHQAAgIgFgEQgFgDgIAAIgCAAIgCAAIAAgIIACABIADAAQAEAAAEgCQAHgDAAgJQAAgGgFgDQgEgDgGgBQgJAAgEAIQgCADAAAHIgKAAQAAgJADgHQAGgKAQgBQAMABAGAFQAHAGAAAKQAAAIgEAEQgCADgEABQAGACAEAEQADAFAAAHQAAAMgHAIQgIAGgNAAQgOABgHgIg");
	this.shape_12.setTransform(78.325,60.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAoIAAg4IgSAAIAAgIQALgBAEgDQAEgCACgKIAIAAIAABQg");
	this.shape_13.setTransform(71.4,60.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAoQgHgFgBgJIAKAAQACAEACACQADADAHAAQALAAAEgIQACgFAAgMQgEAEgEADQgEACgGAAQgKAAgHgHQgHgHgBgPQABgPAHgJQAIgJAKAAQAGAAAFAEQADACADAEIAAgIIAKAAIAAA2QgBAMgDAHQgGAMgRAAQgJAAgHgEgAgNgXQgCAFAAAJQAAAJAEAFQAEAGAHAAQAKAAAFgKQACgFAAgHQAAgMgFgFQgEgFgIAAQgJAAgEAKg");
	this.shape_14.setTransform(62.15,62.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAEABAEQADAFAHAAQAKAAAEgKQABgFAAgHIAAgeIALAAIAAA7IgKAAIAAgJIgEAHQgGAEgIAAQgMAAgFgJg");
	this.shape_15.setTransform(55.9,61.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAZApIgJgZIgfAAIgJAZIgMAAIAfhRIAMAAIAeBRgAANAHIgNgkIgMAkIAZAAg");
	this.shape_16.setTransform(48.875,60.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_17.setTransform(40.825,64.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAEABAEQAEAFAGAAQAKAAAEgKQACgFAAgHIAAgeIAKAAIAAA7IgKAAIAAgJIgEAHQgGAEgIAAQgMAAgFgJg");
	this.shape_18.setTransform(36,61.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_19.setTransform(29.625,60.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFApIAAhIIgcAAIAAgJIBDAAIAAAJIgcAAIAABIg");
	this.shape_20.setTransform(22.925,60.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAYQgJgIABgPQgBgOAJgJQAHgJAMAAQAGAAAGADQAHADACAFQAEAFABAGIAAAMIgrAAQABAJAEAGQAEAFAIABQAIgBAEgFQADgDABgEIAKAAQgBADgCAEQgCAFgDACQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgHAAgEAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_21.setTransform(179.95,42.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAHgJQAJgJAKAAQAKAAAHAFQAHAFABAMIgKAAQgBgGgDgDQgEgEgHAAQgIAAgEAJQgDAHAAAIQAAAJAEAGQAEAGAGAAQAHAAAEgEQADgDACgHIAKAAQgCAMgHAFQgGAGgLAAQgLAAgHgJg");
	this.shape_22.setTransform(173.95,42.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_23.setTransform(167.825,42.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAGAAAHADQAGADADAFQACAFABAGIABAMIgrAAQAAAJAFAGQAEAFAHABQAJgBAEgFQACgDABgEIAKAAQABADgDAEQgCAFgDACQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgKAAQgGAAgFAFQgEAFgBAIIAhAAIAAAAg");
	this.shape_24.setTransform(161.35,42.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_25.setTransform(156.925,41.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgEQAEgEAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAGAAAGIAAAig");
	this.shape_26.setTransform(154.075,42.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAYQgJgIABgPQgBgOAJgJQAHgJAMAAQAGAAAHADQAFADAEAFQADAFAAAGIABAMIgrAAQABAJAEAGQAEAFAHABQAJgBAEgFQACgDACgEIAJAAQAAADgCAEQgCAFgDACQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_27.setTransform(148.55,42.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaArIAAhTIAKAAIAAAIQADgEAEgDQAFgDAGAAQALAAAHAIQAHAIAAAOQAAATgKAIQgHAGgJAAQgGAAgEgDQgDgBgDgFIAAAfgAgOgWQgCAFAAAJQAAAHACAEQAEAJAKAAQAHAAAFgGQAEgGAAgLQAAgHgCgFQgEgKgKAAQgKAAgEALg");
	this.shape_28.setTransform(142.275,43.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOAeIgOgXIgOAXIgNAAIAWgeIgVgdIANAAIAOAVIANgVIANAAIgVAdIAWAeg");
	this.shape_29.setTransform(136,42.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeAqIAAhSIA8AAIAAAKIgwAAIAAAZIAsAAIAAAJIgsAAIAAAcIAwAAIAAAKg");
	this.shape_30.setTransform(129.45,41.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTAYQgIgIAAgPQAAgOAIgJQAJgJALAAQAGAAAHADQAFADAEAFQADAFAAAGIABAMIgrAAQAAAJAFAGQAEAFAHABQAJgBAEgFQACgDACgEIAJAAQABADgDAEQgCAFgDACQgFAFgGABIgIABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_31.setTransform(118.95,42.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAHgJQAJgJALAAQAJAAAHAFQAGAFACAMIgKAAQgBgGgDgDQgDgEgHAAQgKAAgEAJQgCAHAAAIQAAAJADAGQAFAGAHAAQAGAAAEgEQADgDACgHIAKAAQgCAMgHAFQgGAGgLAAQgLAAgHgJg");
	this.shape_32.setTransform(112.95,42.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgIAGgFQAFgEAIAAIAQgDQADAAABgDIABgDQAAgGgEgCQgDgCgGAAQgIgBgDAFQgCACgBAFIgJAAQAAgMAHgEQAHgEAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgFIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAFADACQAEACAEABQAFgBAEgCQAJgEAAgJIAAgIIgFABg");
	this.shape_33.setTransform(106.875,42.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_34.setTransform(102.3,41.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgIAGgFQAFgEAIAAIAQgDQADAAABgDIABgDQAAgGgEgCQgDgCgGAAQgIgBgDAFQgCACgBAFIgJAAQAAgMAHgEQAHgEAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgFIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAFADACQAEACAEABQAFgBAEgCQAJgEAAgJIAAgIIgFABg");
	this.shape_35.setTransform(97.925,42.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgeAqIAAhSIAkAAQALAAAHAFQAHAHAAALQAAAKgGAHQgHAGgMAAIgZAAIAAAkgAgTgCIAVAAQAIAAAFgDQAEgEAAgIQABgJgIgDQgDgCgHAAIgVAAg");
	this.shape_36.setTransform(90.95,41.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAGAAAHADQAGADADAFQACAFABAGIABAMIgrAAQAAAJAFAGQAEAFAHABQAJgBAEgFQACgDABgEIAKAAQABADgDAEQgCAFgDACQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgKAAQgGAAgEAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_37.setTransform(80.35,42.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_38.setTransform(75.925,41.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAeIgWg7IAMAAIAPAwIARgwIALAAIgXA7g");
	this.shape_39.setTransform(71.725,42.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAHgJQAJgJALAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgNAAgHgIgAgMgPQgEAHgBAJQABAKAEAGQADAHAJAAQAKAAAEgIQADgIAAgIQAAgJgCgFQgEgIgLAAQgJAAgDAHg");
	this.shape_40.setTransform(65.6,42.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAdAqIAAgwIAAgJIAAgNIgXBGIgLAAIgXhGIAAADIAAAJIAAAKIAAAwIgLAAIAAhSIAQAAIAXBFIAYhFIAQAAIAABSg");
	this.shape_41.setTransform(57.65,41.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_42.setTransform(48.35,41.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgIAGgFQAFgEAIAAIAQgDQADAAABgDIABgDQAAgGgEgCQgDgCgGAAQgIgBgDAFQgCACgBAFIgJAAQAAgMAHgEQAHgEAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAIIgEAAIgDABQgGAAgCgFIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAFADACQAEACAEABQAFgBAEgCQAJgEAAgJIAAgIIgFABg");
	this.shape_43.setTransform(43.975,42.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAHAAAGADQAFADAEAFQACAFABAGIACAMIgrAAQgBAJAFAGQAEAFAIABQAHgBAFgFQADgDAAgEIAKAAQAAADgCAEQgCAFgDACQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_44.setTransform(37.35,42.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAVAqIgBgDIgBgHIgBgOQAAgIgFgDQgEgBgGAAIgZAAIAAAkIgLAAIAAhSIAlAAQAJgBAHADQALAFAAAOQAAAIgDAFQgDAEgGACQAFADADADQACADABAHIAAALIAAAHQACAFACABIAAACgAgWgCIAZAAQAHgBAFgDQAEgDABgIQgBgJgGgDQgDgCgGAAIgaAAg");
	this.shape_45.setTransform(30.25,41.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAHAAAGADQAFADAEAFQACAFABAGIACAMIgrAAQgBAJAFAGQAEAFAIABQAHgBAFgFQADgDAAgEIAKAAQAAADgCAEQgCAFgDACQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_46.setTransform(19.35,42.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_47.setTransform(13.025,41.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgcAAIAAgJIBDAAIAAAJIgcAAIAABJg");
	this.shape_48.setTransform(6.275,41.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAHADACQAEAFALAAQAHAAAEgCQAEgCAAgFQAAgDgDgCQgDgCgVgFQgPgEgGgFQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAHAAAKQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_49.setTransform(181.575,22.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AgKAPQAIgDACgGQACgEgBgCIgMAAIAAgWIAXAAIAAARQAAAMgGAHQgGAHgKACg");
	this.shape_50.setTransform(175.075,17.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_51.setTransform(169.275,22.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgNQAMgMASAAQALAAAJAEQAJAEAGAKQAGAHABAMQABAFAAAMIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgCACgEIAYAAQgBAIgIAIQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_52.setTransform(160.8333,22.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgcA6QgLgHgCgNIAaAAQABAEACACQAEADAIAAQANAAAEgJQADgFAAgNIAAgGQgDAGgEADQgHAFgKAAQgSAAgKgMQgLgMAAgUQAAgUAKgOQAKgOATAAQAGAAAFACQAIAEAGAJIAAgNIAXAAIAABVQAAASgGAJQgKAPgcAAQgSAAgKgHgAgQggQgCAHAAAJQAAAIACAGQAFAKAMAAQAIAAAGgGQAFgFAAgOQAAgNgFgHQgFgGgKAAQgLAAgFALg");
	this.shape_53.setTransform(150.675,24.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AARAuIAAg2QAAgHgCgEQgDgHgKAAQgMAAgEAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAFgHAEgDQAHgFAKAAQAPAAAIAHQAJAHAAARIAAA8g");
	this.shape_54.setTransform(140.6,22.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgLA9IAAhZIAXAAIAABZgAgLgnIAAgVIAXAAIAAAVg");
	this.shape_55.setTransform(133.05,20.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAHADACQAEAFALAAQAHAAAEgCQAEgCAAgFQAAgDgDgCQgDgCgVgFQgPgEgGgFQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAHAAAKQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_56.setTransform(125.925,22.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAHADACQAEAFALAAQAHAAAEgCQAEgCAAgFQAAgDgDgCQgDgCgVgFQgPgEgGgFQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAHAAAKQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_57.setTransform(116.475,22.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAHAAANQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgNgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_58.setTransform(106.625,22.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_59.setTransform(98.525,22.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgnAwQgRgRAAgeQAAgcARgSQAQgSAaAAQAXAAAPALQANAMADASIgZAAQgDgNgMgFQgGgCgIAAQgNAAgKALQgKALAAAWQAAAWALAJQAKAKAMAAQANAAAIgIQAIgHACgMIgcAAIAAgTIAzAAIAABAIgRAAIgDgPQgHAJgGADQgKAGgOAAQgYAAgPgQg");
	this.shape_60.setTransform(88,20.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgHA0QgFgEAAgIIAAg3IgMAAIAAgRIAMAAIAAgZIAXAAIAAAZIAOAAIAAARIgOAAIAAAvQAAAFABACQACABAHAAIACAAIACAAIAAASIgLAAIgEAAQgMAAgFgGg");
	this.shape_61.setTransform(73.9,21.2567);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AghApQgIgHAAgNQAAgRANgHQAHgEANgBIAIgBIAJgCQAFgDAAgEQAAgGgEgCQgEgCgGAAQgJAAgDAEQgDADgBAGIgWAAQAAgMAGgIQAKgMAWAAQAOAAAMAGQALAGAAAQIAAApIABAKQAAAFABACIADACIAAAEIgZAAIgCgFIAAgGQgFAFgHAEQgGAFgKAAQgMAAgIgHgAAJADIgGACIgEABQgIABgDACQgGADAAAHQAAAGAEADQADACAFAAQAHAAAGgEQAGgFABgLIAAgJg");
	this.shape_62.setTransform(66.525,22.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgHA0QgFgEAAgIIAAg3IgMAAIAAgRIAMAAIAAgZIAXAAIAAAZIAOAAIAAARIgOAAIAAAvQAAAFABACQACABAHAAIACAAIACAAIAAASIgLAAIgEAAQgMAAgFgGg");
	this.shape_63.setTransform(54.1,21.2567);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgNQAMgMASAAQALAAAJAEQAJAEAGAKQAGAHABAMQABAFAAAMIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgCACgEIAYAAQgBAIgIAIQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_64.setTransform(46.6833,22.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AAjA9IAAhSIAAgKIABgKIgYBmIgYAAIgXhmIABAKIAAAKIAABSIgYAAIAAh5IAlAAIAVBfIAWhfIAlAAIAAB5g");
	this.shape_65.setTransform(34.975,20.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgNQAMgMASAAQALAAAJAEQAJAEAGAKQAGAHABAMQABAFAAAMIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgCACgEIAYAAQgBAIgIAIQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_66.setTransform(18.3333,22.45);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AATA9IgPhGIgEgYIgDAYIgPBGIgYAAIgjh5IAbAAIARBFIADATIAEgTIANhFIAaAAIAPBFIAEATIAEgSIAQhGIAaAAIgjB5g");
	this.shape_67.setTransform(5.925,20.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR11, new cjs.Rectangle(-35.9,12.3,257.2,56.400000000000006), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AADAJQAEgBABgFIABgEIgGAAIAAgMIALAAIAAALQAAAFgCAFQgDAFgGAAgAgNAJQAEgBABgFIAAgEIgFAAIAAgMIALAAIAAALQAAAFgDAFQgCAFgGAAg");
	this.shape.setTransform(65.675,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAmIAAgLIAJAAIAAALgAgCAUIgCggIAAgZIAJAAIAAAZIgCAgg");
	this.shape_1.setTransform(62.675,16.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAWQgIgHAAgPQAAgMAIgIQAHgIALAAQAGAAAGACQAFADADAEQACAEACAGIAAAMIgnAAQAAAIAEAFQAEAGAGAAQAIgBAEgFQACgDACgDIAJAAIgDAHIgFAGQgEAEgGABIgHACQgKAAgHgIgAAQgEQgBgGgCgDQgDgIgKABQgFAAgFAEQgEAFAAAHIAeAAIAAAAg");
	this.shape_2.setTransform(57.85,17.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_3.setTransform(52.325,17.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAZQgEgFAAgHQAAgIAEgEQAFgDAIgBIAOgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIABgDQAAgFgDgDQgEgCgFAAQgHAAgEAEQgBACgBAFIgJAAQABgKAGgFQAHgDAIAAQAJAAAGADQAGAEAAAIIAAAfIABADIACAAIACAAIABAAIAAAHIgDAAIgDAAQgFAAgCgDIgCgFQgDAEgFACQgEADgHABQgIgBgFgEgAAGABIgFABIgFABIgHACQgFADAAAFQAAAEADACQADADAEAAQAFAAAEgDQAIgDAAgKIAAgGIgFABg");
	this.shape_4.setTransform(46.775,17.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAmIAAgjQAAgFgCgDQgCgEgHAAQgFAAgFADQgEAFAAAKIAAAdIgKAAIAAhLIAKAAIAAAcQADgEADgCQAEgCAGAAQAMAAAEAIQADAFAAAGIAAAkg");
	this.shape_5.setTransform(40.775,16.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAVQgHgHAAgMQAAgOAHgJQAIgHAKgBQAJAAAGAFQAFAFACALIgJAAQgBgFgDgDQgDgEgGAAQgIAAgFAIQgCAHAAAHQAAAIADAGQAEAFAHAAQAGAAADgDQADgDACgHIAJAAQgCAMgGAEQgGAGgKgBQgKABgGgJg");
	this.shape_6.setTransform(35.2,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAcIAAg3IAJAAIAAAKQABgCAEgFQAEgDAGAAIAAAAIADAAIAAAJIgCAAIgCAAQgHABgDAEQgDAEAAAHIAAAeg");
	this.shape_7.setTransform(31.025,17.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAVQgCgEAAgIIAAglIAKAAIAAAkIABAHQACAFAHAAQAIAAAEgIQACgFAAgHIAAgcIAJAAIAAA3IgJAAIAAgIQgBADgDACQgFAFgHAAQgMAAgEgIg");
	this.shape_8.setTransform(25.925,17.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAoIAAhNIAKAAIAAAHQACgEAEgCQAEgDAGAAQAJAAAHAHQAHAIAAANQAAARgKAIQgGAFgIAAQgFAAgFgDIgFgFIAAAdgAgNgVQgCAFAAAIQAAAHACADQAEAJAJAAQAGAAAFgGQAEgFAAgKQAAgHgCgEQgEgKgJAAQgJAAgEAKg");
	this.shape_9.setTransform(20.225,18.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAWQgHgHgBgPQABgMAHgIQAHgIALAAQAGAAAFACQAGADADAEQADAEABAGIABAMIgoAAQAAAIAEAFQADAGAIAAQAGgBAFgFQADgDABgDIAJAAIgDAHIgEAGQgEAEgHABIgHACQgKAAgHgIgAAQgEQgBgGgCgDQgDgIgJABQgGAAgEAEQgFAFAAAHIAeAAIAAAAg");
	this.shape_10.setTransform(11.2,17.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_11.setTransform(7.125,16.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAoIAAhNIAKAAIAAAHQACgEAEgCQAEgDAGAAQAJAAAHAHQAHAIAAANQAAARgKAIQgGAFgIAAQgFAAgFgDIgFgFIAAAdgAgNgVQgCAFAAAIQAAAHACADQAEAJAJAAQAGAAAFgGQAEgFAAgKQAAgHgCgEQgEgKgJAAQgJAAgEAKg");
	this.shape_12.setTransform(3.075,18.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcAcIAAglQAAgGgDgCQgDgCgEAAQgFAAgEADQgFAFAAAIIAAAfIgIAAIAAgjIgBgIQgDgEgFAAQgFAAgFAEQgEAEAAALIAAAcIgKAAIAAg3IAJAAIAAAJIAGgHQAFgCAGAAQAHAAAEACQABACACAEIAIgHQAEgBAFAAQALgBAFAJQACAEAAAHIAAAkg");
	this.shape_13.setTransform(-4.4,17.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAmIAAg2IAJAAIAAA2gAgEgbIAAgKIAJAAIAAAKg");
	this.shape_14.setTransform(-10.025,16.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_15.setTransform(-13.825,17.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAWQgIgHABgPQgBgMAIgIQAHgIALAAQAGAAAGACQAFADADAEQADAEAAAGIABAMIgnAAQAAAIADAFQAFAGAHAAQAGgBAFgFQADgDAAgDIAJAAIgCAHIgFAGQgEAEgGABIgHACQgKAAgHgIgAAPgEQAAgGgCgDQgEgIgIABQgGAAgFAEQgEAFAAAHIAdAAIAAAAg");
	this.shape_16.setTransform(-22.5,17.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AANAcIAAgiQAAgFgBgDQgDgFgGAAIgFABQgEABgDADQgCADgBADIAAAIIAAAcIgKAAIAAg3IAJAAIAAAJQAEgFAEgDQAFgBAEAAQAMgBAEAJQADAEAAAIIAAAjg");
	this.shape_17.setTransform(-28.325,17.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_18.setTransform(-34.325,17.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAnIgDAAIAAgJIAEABIACAAIAEAAIACgDIACgEIADgGIgVg5IALAAIANAtIAPgtIAKAAIgIAZIgJAWQgIAWgCAEQgEAGgHAAg");
	this.shape_19.setTransform(-42.85,18.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_20.setTransform(-48.525,17.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAxIgCAAIAAgIQAGAAABgBQABgBAAgEIAAg+IAJAAIAAA/QAAAGgCADQgDAEgIAAgAAAglIAAgMIAJAAIAAAMg");
	this.shape_21.setTransform(-53.025,17.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANAcIAAgiQAAgFgBgDQgDgFgGAAIgFABQgEABgDADQgCADgBADIAAAIIAAAcIgKAAIAAg3IAJAAIAAAJQAEgFAEgDQAFgBAEAAQAMgBAEAJQADAEAAAIIAAAjg");
	this.shape_22.setTransform(-56.675,17.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAmIAAhLIA2AAIAAAJIgsAAIAAAXIApAAIAAAIIgpAAIAAAaIAtAAIAAAJg");
	this.shape_23.setTransform(-63.025,16.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_24.setTransform(91,5.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_25.setTransform(86.875,3.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAhQgCgEAAgFIAAgkIgIAAIAAgIIAIAAIAAgPIAIAAIAAAPIAJAAIAAAIIgJAAIAAAkQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAEABIABAAIACAAIAAAHIgDABIgEAAQgGAAgCgDg");
	this.shape_26.setTransform(82.65,3.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAYQgEgEAAgHQAAgIAEgEQAFgEAIgBIAOgBQABgBABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgEQAAgEgDgCQgEgDgFAAQgHAAgEAEQgBADgBAEIgJAAQABgLAGgDQAHgEAIgBQAJAAAGAEQAGAEAAAHIAAAgIABACIACABIACAAIABAAIAAAHIgDABIgDAAQgFAAgCgDIgCgGQgDAEgFADQgEADgHAAQgIAAgFgGgAAGABIgFABIgFABIgHACQgFADAAAEQAAAEADADQADADAEgBQAFABAEgDQAIgDAAgKIAAgGIgFABg");
	this.shape_27.setTransform(78.425,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAWQgIgIABgNQgBgNAIgIQAHgJALAAQAGAAAGADQAFADADAFQACADABAHIABALIgnAAQAAAIADAFQAEAFAHAAQAIAAAEgEQACgDABgEIAJAAIgCAHIgFAGQgEAEgGACIgHABQgKgBgHgHgAAPgEQAAgGgCgEQgDgGgKgBQgFABgFAFQgEAEAAAHIAdAAIAAAAg");
	this.shape_28.setTransform(72.35,3.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_29.setTransform(66.775,3.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAKQABgEAEgDQAEgEAGgBIAAAAIADAAIAAALIgCAAIgCAAQgHgBgDAFQgDAFAAAFIAAAgg");
	this.shape_30.setTransform(59.725,3.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTAVQgCgEAAgIIAAglIAKAAIAAAkIABAHQACAFAHAAQAIAAAEgIQACgFAAgHIAAgcIAJAAIAAA3IgJAAIAAgIQgBADgDACQgFAFgHAAQgMAAgEgIg");
	this.shape_31.setTransform(54.625,3.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_32.setTransform(48.675,3.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAnIgDgBIAAgIIADABIACAAIAEgBIACgCIACgEIACgGIgVg4IALAAIAOAsIAQgsIAKAAIgJAYIgIAXQgJAVgCAFQgDAEgJAAg");
	this.shape_33.setTransform(43.15,4.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AALAmIgQgcIgIAHIAAAVIgJAAIAAhLIAJAAIAAArIAXgXIAMAAIgVAUIAWAjg");
	this.shape_34.setTransform(35.175,2.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAWQgHgJAAgMQAAgNAHgIQAHgJALABQAJAAAGAEQAGAEABAMIgJAAQgBgFgDgEQgDgDgGAAQgJAAgDAJQgDAGAAAGQAAAJAEAGQADAGAHAAQAGAAADgEQAEgEABgGIAJAAQgBALgHAGQgGAEgKAAQgKAAgGgHg");
	this.shape_35.setTransform(29.55,3.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEAmIAAg2IAJAAIAAA2gAgEgbIAAgKIAJAAIAAAKg");
	this.shape_36.setTransform(25.675,2.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIAiAAQAKAAAGAFQAGAGABALQAAAJgGAGQgFAGgMAAIgXAAIAAAggAgRgCIAUAAQAGAAAFgDQAEgDAAgHQAAgJgGgDQgEgBgFAAIgUAAg");
	this.shape_37.setTransform(21.15,2.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAGIAAgLIAKAAIAAALg");
	this.shape_38.setTransform(12.95,5.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_39.setTransform(8.825,3.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AALAcIgLgqIgKAqIgKAAIgQg3IALAAIAKArIALgrIAJAAIALArIAMgrIAJAAIgQA3g");
	this.shape_40.setTransform(2.25,3.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_41.setTransform(-4.575,3.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANAnIAAgjQAAgGgCgCQgCgFgHgBQgFAAgFAFQgEADAAALIAAAeIgKAAIAAhNIAKAAIAAAdQADgEADgBQAEgDAGgBQAMAAAEAJQADAEAAAIIAAAkg");
	this.shape_42.setTransform(-10.375,2.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_43.setTransform(-16.025,3.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAhQgHgGgBgKIAKAAQABAIAGADQAEABAEAAQAHAAAEgFQAEgFAAgHQAAgIgEgEQgFgDgGAAQgFAAgDACQgEABgCADIgIAAIAGgoIAlAAIAAAJIgeAAIgEAVIAFgDQAFgCAEAAQAKAAAHAHQAIAGAAAKQAAAKgHAJQgGAIgOAAQgJAAgHgFg");
	this.shape_44.setTransform(-24.625,2.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAKQABgEAEgDQAEgEAGgBIAAAAIADAAIAAALIgCAAIgCAAQgHgBgDAFQgDAFAAAFIAAAgg");
	this.shape_45.setTransform(-31.975,3.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_46.setTransform(-37.075,3.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAfQgGgHAAgLIAKAAQABAIABADQAEAGAJAAQAHAAAEgEQAFgEAAgGQAAgIgFgDQgFgDgGAAIgCAAIgDAAIAAgHIADAAIACAAQAFAAADgCQAFgDAAgHQAAgGgDgDQgFgDgFAAQgIAAgDAGQgDAEAAAGIgJAAQAAgIAEgGQAFgKAOAAQALAAAGAFQAHAFAAAJQgBAHgEAEQgBADgFACQAHABADAEQADAEAAAHQAAALgHAHQgHAGgMAAQgNAAgGgHg");
	this.shape_47.setTransform(-45.95,2.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgRAWQgIgIAAgNQAAgNAIgIQAHgJALAAQAGAAAGADQAFADADAFQACADACAHIAAALIgnAAQAAAIAEAFQAEAFAGAAQAIAAAEgEQACgDACgEIAJAAIgDAHIgFAGQgDAEgHACIgHABQgKgBgHgHgAAQgEQgBgGgCgEQgDgGgKgBQgFABgFAFQgEAEAAAHIAeAAIAAAAg");
	this.shape_48.setTransform(-54.75,3.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgRAYQgFgFAAgJIAJAAQAAAFACACQAEAFAIAAQAFAAAEgCQAEgDAAgEQAAgEgDgCIgIgCIgHgCIgLgDQgGgEAAgHQAAgIAGgFQAGgFAJAAQAMAAAGAIQAEAFgBAFIgIAAQgBgDgCgDQgDgDgHAAQgGAAgCACQgDACAAADQAAAEADACIAHACIAFACQAKACAEABQAFAEAAAIQAAAHgFAFQgGAGgMAAQgLAAgGgGg");
	this.shape_49.setTransform(-60.325,3.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_50.setTransform(-66.025,3.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgIQAIgJAKAAQALAAAIAIQAHAHAAAOQAAAMgHAJQgGAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQAEAGAHAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgHAAgEAHg");
	this.shape_51.setTransform(-71.925,3.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AANAnIAAgjQAAgGgCgCQgCgFgHgBQgFAAgFAFQgEADAAALIAAAeIgKAAIAAhNIAKAAIAAAdQADgEADgBQAEgDAGgBQAMAAAEAJQADAEAAAIIAAAkg");
	this.shape_52.setTransform(-77.725,2.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgVAgQgMgKAAgWQAAgRAJgLQAKgLAQAAQAOAAAIAHQAIAIABAKIgKAAQgCgIgFgEQgFgEgJAAQgKAAgHAIQgHAIAAAPQAAANAGAJQAGAIAMAAQALAAAGgJQADgEABgIIALAAQgCAMgHAIQgJAKgQAAQgMAAgJgIg");
	this.shape_53.setTransform(-84.575,2.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AADAOIAAgLQAAgFADgFQADgFAFgBIAAAFQgCABgCADQgBACAAADIAAABIAAAAIAFAAIAAAMgAgNAOIAAgLQAAgHADgEQADgEAFgBIAAAFQgEABgBAFIgBADIAAAAIAAABIAGAAIAAAMg");
	this.shape_54.setTransform(-90.125,0.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAHAMQAHgCACgGIABgFIgKAAIAAgSIATAAIAAAPQAAAJgFAHQgEAFgKACgAgZAMQAHgCADgFIABgGIgLAAIAAgSIAUAAIAAAPQAAAJgFAHQgFAFgKACg");
	this.shape_55.setTransform(101.475,-21.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgJAzIAAgUIAUAAIAAAUgAgEAXIgGgvIAAgaIAVAAIAAAaIgGAvg");
	this.shape_56.setTransform(95.7,-18.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgZAhQgJgIAAgLIAUAAQACAFACACQADAEAJAAQAGAAADgCQADgBABgEQAAgDgDgCQgDgCgQgEQgNgDgGgEQgFgFAAgJQAAgKAIgIQAIgHAPAAQAOAAAIAFQAJAGACAOIgUAAQgBgEgCgCQgDgEgHAAQgGAAgCACQgDACAAADQAAADADACIATAFQAMADAGAFQAFAFABAJQgBALgHAHQgJAHgSAAQgQAAgJgHg");
	this.shape_57.setTransform(89.05,-17.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgZAhQgJgIAAgLIAVAAQABAFACACQADAEAJAAQAGAAADgCQAEgBAAgEQgBgDgCgCQgDgCgRgEQgNgDgFgEQgFgFAAgJQAAgKAIgIQAJgHAOAAQANAAAKAFQAIAGACAOIgUAAQgBgEgCgCQgCgEgIAAQgGAAgDACQgCACAAADQAAADACACIAUAFQAMADAGAFQAFAFAAAJQABALgJAHQgIAHgSAAQgRAAgIgHg");
	this.shape_58.setTransform(81.15,-17.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgbAiQgIgGABgLQgBgNALgGQAHgDAKgCIAHgBIAIgCQADgBAAgEQAAgEgCgCQgEgCgFAAQgHAAgDADQgCADgBAFIgTAAQABgKAFgHQAHgKATAAQAMAAAJAFQAKAFAAANIAAAiIAAAJIACAGIADABIAAADIgWAAIgBgEIgBgFQgEAFgFADQgGAEgHAAQgLAAgGgGgAAIADIgGABIgDABIgJACQgEADgBAGQAAAFAEACQACADAEgBQAGAAAFgDQAGgEgBgKIAAgIg");
	this.shape_59.setTransform(73.3,-17.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgkA2IAAhpIATAAIAAALIAHgIQAHgFAIAAQANAAAJAKQAKAKAAATQAAATgJAKQgJALgPAAQgIAAgGgFIgGgHIAAAogAgPgZQgCAFAAAJQAAAMAHAFQAFADAFAAQAIAAAEgGQAEgFAAgLQAAgJgEgHQgEgGgIAAQgLAAgEAKg");
	this.shape_60.setTransform(65.225,-15.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AANAmIgNgXIgMAXIgYAAIAZgmIgYglIAYAAIAMAWIAMgWIAYAAIgZAlIAZAmg");
	this.shape_61.setTransform(56.725,-17.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgYAfQgLgJAAgVQAAgTAKgLQAKgKAPAAQAJAAAIAEQAHADAFAIQAFAGABAJIABAOIgzAAQAAAMAHAEQAEADAFAAQAGAAAEgDIAEgFIAUAAQgBAGgGAHQgKALgRAAQgOAAgLgJgAAPgHQAAgIgEgEQgFgEgGAAQgGAAgEAFQgEAEgBAHIAeAAIAAAAg");
	this.shape_62.setTransform(48.825,-17.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgJAzIAAhlIATAAIAABlg");
	this.shape_63.setTransform(42.9,-18.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgjAzIAAhlIBHAAIAAASIgyAAIAAAYIAsAAIAAAQIgsAAIAAArg");
	this.shape_64.setTransform(36.975,-18.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AAMAmIgMg2IgLA2IgVAAIgVhLIAVAAIAMA2IALg2IATAAIAMA2IAMg2IAUAAIgWBLg");
	this.shape_65.setTransform(22.75,-17.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgYAfQgLgJAAgVQAAgTAKgLQAKgKAPAAQAJAAAIAEQAHADAFAIQAFAGABAJIABAOIgzAAQAAAMAHAEQAEADAFAAQAGAAAEgDIAEgFIAUAAQgBAGgGAHQgKALgRAAQgOAAgLgJgAAPgHQAAgIgEgEQgFgEgGAAQgGAAgEAFQgEAEgBAHIAeAAIAAAAg");
	this.shape_66.setTransform(13.275,-17.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAOAnIAAgtQAAgGgCgEQgDgFgIAAQgJAAgEAIQgCAFAAAHIAAAoIgTAAIAAhLIATAAIAAALIAHgIQAGgFAIAAQAMAAAIAGQAHAGAAAPIAAAyg");
	this.shape_67.setTransform(5.025,-17.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgVAnIAAhLIATAAIAAANQAEgHADgDQAGgFAIAAIABAAIACAAIAAAVIgEgBIgCAAQgLAAgFAIQgBAEAAAJIAAAkg");
	this.shape_68.setTransform(-5.7,-17.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgeAbQgDgHAAgNIAAgtIAUAAIAAAtQAAAHACADQACAGAIAAQAKAAADgJQACgEAAgHIAAgpIAUAAIAABLIgTAAIAAgKIgBACIgDADQgFAEgEABQgDACgGAAQgRAAgGgMg");
	this.shape_69.setTransform(-13.225,-17.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgcAdQgKgMAAgRQAAgPAKgMQAKgMASAAQAUAAAJAMQAKAMAAAPQAAARgKAMQgJALgUAAQgSAAgKgLgAgMgRQgFAHAAAKQAAALAFAHQAEAGAIAAQAJAAAEgGQAFgHAAgLQAAgKgFgHQgEgGgJAAQgIAAgEAGg");
	this.shape_70.setTransform(-21.875,-17.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgGArQgEgDAAgHIAAguIgKAAIAAgOIAKAAIAAgVIATAAIAAAVIAMAAIAAAOIgMAAIAAAnQAAAFABABQABABAGAAIACAAIACAAIAAAPIgJAAIgDABQgLAAgEgGg");
	this.shape_71.setTransform(-32.575,-18.2979);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgeAbQgDgHAAgNIAAgtIAUAAIAAAtQAAAHACADQACAGAIAAQAKAAADgJQACgEAAgHIAAgpIAUAAIAABLIgTAAIAAgKIgBACIgDADQgFAEgEABQgDACgGAAQgRAAgGgMg");
	this.shape_72.setTransform(-39.275,-17.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgcAdQgKgMAAgRQAAgPAKgMQAKgMASAAQAUAAAJAMQAKAMAAAPQAAARgKAMQgJALgUAAQgSAAgKgLgAgMgRQgFAHAAAKQAAALAFAHQAEAGAIAAQAJAAAEgGQAFgHAAgLQAAgKgFgHQgEgGgJAAQgIAAgEAGg");
	this.shape_73.setTransform(-47.925,-17.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgJAxQgDgDgEgFIAAAJIgUAAIAAhlIAUAAIAAAkQAEgFAEgDQAGgDAHAAQAPAAAIALQAJAKAAAQQAAASgJAMQgIALgPAAQgIAAgGgDgAgPAAQgCAFAAAIQAAAKAFAHQAEAGAIAAQAIAAAEgGQAEgGAAgLQAAgIgCgFQgEgJgKAAQgKAAgFAJg");
	this.shape_74.setTransform(-56.375,-18.575);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgbAiQgIgGAAgLQAAgNALgGQAHgDAKgCIAHgBIAIgCQADgBAAgEQAAgEgCgCQgEgCgFAAQgHAAgDADQgCADgBAFIgTAAQABgKAFgHQAHgKATAAQAMAAAJAFQAKAFAAANIAAAiIAAAJIACAGIADABIAAADIgWAAIgBgEIgBgFQgEAFgFADQgGAEgHAAQgLAAgGgGgAAIADIgGABIgDABIgJACQgEADgBAGQAAAFAEACQACADAEgBQAFAAAGgDQAGgEgBgKIAAgIg");
	this.shape_75.setTransform(-64.85,-17.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AALAzIgRghIgIAJIAAAYIgUAAIAAhlIAUAAIAAA2IAXgbIAZAAIgbAcIAcAug");
	this.shape_76.setTransform(-76.275,-18.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgZAhQgJgIAAgLIAUAAQACAFACACQADAEAJAAQAGAAADgCQADgBABgEQAAgDgDgCQgDgCgQgEQgNgDgGgEQgFgFAAgJQAAgKAIgIQAIgHAPAAQAOAAAIAFQAJAGACAOIgUAAQgBgEgCgCQgDgEgHAAQgGAAgCACQgDACAAADQAAADADACIATAFQAMADAGAFQAFAFABAJQgBALgHAHQgJAHgRAAQgSAAgIgHg");
	this.shape_77.setTransform(-84.65,-17.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AAZAzIgGgVIglAAIgHAVIgXAAIAlhlIAYAAIAkBlgAANANIgNgoIgMAoIAZAAg");
	this.shape_78.setTransform(-93.6,-18.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAGAUIAAgPQAAgJAGgHQAFgFAJgDIAAAIQgHACgDAFQgBAEAAACIALAAIAAASgAgaAUIAAgPQABgJAFgHQAEgFAKgDIAAAIQgHACgDAFIgBAGIAMAAIAAASg");
	this.shape_79.setTransform(-102.35,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-25.9,236.6,49.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAeAfIAAgpQAAgGgDgCQgDgCgEAAQgGAAgEADQgFAEAAAKIAAAiIgJAAIAAgnQAAgGgCgDQgCgEgGAAQgGAAgFAEQgFAFAAAMIAAAfIgKAAIAAg7IAKAAIAAAIIAHgGQAFgEAGAAQAIAAAEAEIAEAGQADgGAFgBQAEgDAGAAQAMAAAEAJQADAEAAAJIAAAng");
	this.shape.setTransform(159.225,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaArIAAhTIAKAAIAAAIQADgEAEgDQAFgDAGAAQALAAAHAIQAHAIAAAOQAAATgKAIQgHAGgJAAQgGAAgEgDQgDgBgDgFIAAAfgAgOgWQgCAFAAAJQAAAHACAEQAEAJAKAAQAHAAAFgGQAEgGAAgLQAAgHgCgFQgEgKgKAAQgKAAgEALg");
	this.shape_1.setTransform(151.325,62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNAEgKQAHgTAQABQAQgBAGANQAGALAAARQAAAPgFALQgHAPgQAAQgOAAgHgMgAgMgXQgEAJAAAPQAAANADAHQAEALAJAAQAHABAFgIQAFgHAAgSQAAgNgEgJQgCgKgKABQgIAAgFAIg");
	this.shape_2.setTransform(141.5,59.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNAEgKQAGgTARABQAQgBAGANQAGALAAARQAAAPgFALQgHAPgQAAQgOAAgHgMgAgMgXQgEAJAAAPQAAANADAHQAEALAJAAQAIABAFgIQAEgHAAgSQAAgNgEgJQgDgKgJABQgIAAgFAIg");
	this.shape_3.setTransform(135.1,59.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAeIAAgNIALAAIAAANgAgFgRIAAgMIALAAIAAAMg");
	this.shape_4.setTransform(130.575,60.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAoQADgXANgWQAHgNAJgKIgsAAIAAgLIA3AAIAAAJIgKANQgGAKgFAJQgFALgCAJIgEASg");
	this.shape_5.setTransform(125.525,59.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_6.setTransform(117.4,59.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAhQgIgIAAgVQAAgOAEgLQAHgUASAAQANAAAGAHQAFAHAAAIIgKAAQgBgFgCgDQgEgFgHAAQgIAAgFAIQgFAIAAAPQADgFAFgDQAFgCAFAAQALAAAHAGQAIAGAAANQAAALgHAIQgIAJgNAAQgKAAgJgJgAgKABQgFAFAAAJQAAAHAEAGQAFAFAHAAQAIAAAEgGQAEgFAAgHQAAgHgEgFQgDgFgKAAQgFAAgFADg");
	this.shape_7.setTransform(109.725,59.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbApQAAgLAFgHQADgIALgHIAKgGIALgGQAEgFAAgGQAAgHgEgEQgFgEgHAAQgJAAgEAIQgDAEAAAHIgKAAQABgKADgHQAHgMAPAAQAPAAAGAIQAGAHAAAKQAAAJgGAGQgFAEgKAGIgHAEIgJAGQgFAFgCAGIAsAAIAAAKg");
	this.shape_8.setTransform(103.2,59.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNADgKQAHgTARABQAPgBAIANQAFALAAARQAAAPgFALQgHAPgQAAQgOAAgHgMgAgLgXQgFAJAAAPQAAANADAHQAEALAJAAQAIABAEgIQAFgHAAgSQAAgNgDgJQgEgKgKABQgIAAgDAIg");
	this.shape_9.setTransform(96.8,59.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbApQAAgLAFgHQADgIALgHIAKgGIALgGQAEgFAAgGQAAgHgEgEQgFgEgGAAQgKAAgEAIQgCAEAAAHIgLAAQAAgKAEgHQAGgMARAAQAOAAAGAIQAGAHAAAKQAAAJgGAGQgFAEgKAGIgHAEIgJAGQgFAFgBAGIArAAIAAAKg");
	this.shape_10.setTransform(90.35,59.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_11.setTransform(82.375,64.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAiQgGgIAAgMIAKAAQABAJACADQAEAGAKAAQAIABAEgFQAFgEAAgHQAAgJgFgDQgFgDgIAAIgCAAIgCAAIAAgIIACABIADAAQAEAAAEgCQAHgEAAgIQAAgGgFgDQgEgDgGAAQgJgBgEAIQgCADAAAHIgKAAQAAgJADgHQAGgLAQABQAMAAAGAFQAHAGAAAKQAAAHgEAFQgCADgEABQAGACAEAEQADAFAAAHQAAAMgHAHQgIAIgNgBQgOAAgHgHg");
	this.shape_12.setTransform(77.475,59.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbApQABgLAEgHQADgIALgHIAKgGIALgGQAEgFAAgGQAAgHgEgEQgEgEgHAAQgKAAgEAIQgDAEABAHIgLAAQAAgKAEgHQAGgMARAAQAOAAAGAIQAGAHAAAKQAAAJgGAGQgEAEgLAGIgHAEIgJAGQgFAFgBAGIArAAIAAAKg");
	this.shape_13.setTransform(71.1,59.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAoQgHgFAAgJIAKAAQAAAEACACQAEADAHAAQALAAADgIQADgFgBgMQgDAEgDADQgFACgGAAQgKAAgHgHQgIgHABgPQgBgPAIgJQAIgJAKAAQAGAAAFAEQADACADAEIAAgIIAKAAIAAA2QAAAMgEAHQgGAMgRAAQgJAAgHgEgAgNgXQgCAFAAAJQAAAJAEAFQAEAGAHAAQAKAAAEgKQADgFAAgHQAAgMgEgFQgFgFgHAAQgKAAgEAKg");
	this.shape_14.setTransform(61.3,62.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAFACADQACAFAIAAQAJAAADgKQADgFAAgHIAAgeIAKAAIAAA8IgKAAIABgKIgGAHQgFAEgHAAQgNAAgFgJg");
	this.shape_15.setTransform(55.05,60.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAZAqIgJgaIgfAAIgJAaIgMAAIAfhSIAMAAIAeBSgAANAHIgNgkIgMAkIAZAAg");
	this.shape_16.setTransform(48.025,59.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_17.setTransform(39.975,64.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_18.setTransform(35.225,60.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAFACADQADAFAGAAQAKAAAEgKQACgFAAgHIAAgeIAKAAIAAA8IgKAAIABgKIgGAHQgFAEgHAAQgNAAgFgJg");
	this.shape_19.setTransform(28.7,60.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAkQgIgIAAgNIAKAAQABAGACAFQAGAIANAAQAFAAAGgBQAKgEAAgJQgBgHgEgCQgEgEgJgBIgKgDQgLgDgEgCQgIgFAAgKQAAgLAIgIQAHgHAOAAQAMAAAJAGQAJAHAAANIgKAAQgBgGgDgEQgFgGgLAAQgKAAgDAEQgFAEAAAGQAAAGAFADIAOAFIALACQAIACAEADQAJAFgBALQABAOgKAGQgLAGgMAAQgPAAgIgIg");
	this.shape_20.setTransform(21.6,59.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_21.setTransform(200,40.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgEAIAAIAQgDQADAAABgCIABgEQAAgGgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAHIgEABIgDABQgGgBgCgEIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAEADADQAEADAEAAQAFAAAEgDQAJgEAAgJIAAgIIgFABg");
	this.shape_22.setTransform(195.575,41.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAeIgWg7IAMAAIAPAwIARgwIALAAIgXA7g");
	this.shape_23.setTransform(189.325,41.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_24.setTransform(185.175,40.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAeIgWg7IAMAAIAPAwIARgwIALAAIgXA7g");
	this.shape_25.setTransform(180.975,41.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAGAAAHADQAGADADAFQACAFABAGIABAMIgrAAQAAAJAFAGQAEAGAHAAQAJAAAEgGQACgDABgEIAKAAQABAEgDADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgKAAQgGAAgFAFQgEAFgBAIIAhAAIAAAAg");
	this.shape_26.setTransform(174.85,41.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAqIAAgDIgBgHIgBgOQAAgIgGgDQgDgBgHAAIgYAAIAAAkIgLAAIAAhSIAlAAQAJAAAHACQALAGAAANQAAAIgDAFQgDAEgGACQAFACADAEQACADAAAHIAAALIABAHQABAEADACIAAACgAgWgCIAZAAQAIgBAEgDQAEgDABgIQgBgJgGgDQgDgCgGAAIgaAAg");
	this.shape_27.setTransform(167.7,40.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgDQAEgFAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAGAAAGIAAAig");
	this.shape_28.setTransform(158.575,41.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAHAAAGADQAFADAEAFQACAFABAGIACAMIgrAAQgBAJAFAGQAEAGAIAAQAHAAAFgGQADgDAAgEIAKAAQAAAEgCADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_29.setTransform(153,41.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAkQgDgEAAgGIAAgnIgIAAIAAgIIAIAAIAAgRIAKAAIAAARIAJAAIAAAIIgJAAIAAAnQAAAAAAABQAAABAAAAQAAABABAAQAAAAABABIADAAIACAAIACAAIAAAIIgEABIgDAAQgHAAgCgDg");
	this.shape_30.setTransform(148.2,41.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgEAIAAIAQgDQADAAABgCIABgEQAAgGgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAHIgEABIgDABQgGgBgCgEIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAEADADQAEADAEAAQAFAAAEgDQAJgEAAgJIAAgIIgFABg");
	this.shape_31.setTransform(143.575,41.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAMAeIgMguIgLAuIgLAAIgRg7IALAAIAMAuIALguIALAAIAMAuIAMguIAKAAIgRA7g");
	this.shape_32.setTransform(136.025,41.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgDQAEgFAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAGAAAGIAAAig");
	this.shape_33.setTransform(130.325,41.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgEAIAAIAQgDQADAAABgCIABgEQAAgGgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAHIgEABIgDABQgGgBgCgEIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAEADADQAEADAEAAQAFAAAEgDQAJgEAAgJIAAgIIgFABg");
	this.shape_34.setTransform(124.975,41.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAYQgHgIgBgPQABgOAHgJQAJgJALAAQAHAAAGADQAFADAEAFQACAFABAGIACAMIgrAAQgBAJAFAGQAEAGAIAAQAHAAAFgGQADgDAAgEIAKAAQAAAEgCADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_35.setTransform(118.35,41.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_36.setTransform(113.95,40.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAjQgOgLAAgYQAAgSAKgMQALgNARAAQAPAAAJAJQAJAIABALIgLAAQgCgJgGgEQgFgFgKAAQgLAAgHAJQgIAIAAARQAAAPAHAJQAGAJANAAQAMAAAHgKQADgFABgIIAMAAQgCANgIAJQgKALgQAAQgOAAgJgJg");
	this.shape_37.setTransform(108.45,40.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAYQgJgIAAgPQAAgOAJgJQAIgJALAAQAGAAAHADQAFADAEAFQACAFABAGIABAMIgrAAQAAAJAFAGQAEAGAHAAQAJAAAEgGQACgDACgEIAJAAQABAEgDADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQAAgHgDgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_38.setTransform(97.8,41.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAHgJQAJgJALAAQAJAAAHAFQAGAFACAMIgKAAQgBgGgDgDQgDgEgHAAQgKAAgEAJQgCAHAAAIQAAAJADAGQAFAGAHAAQAGAAAEgEQADgDACgHIAKAAQgCAMgHAFQgGAGgLAAQgLAAgHgJg");
	this.shape_39.setTransform(91.8,41.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_40.setTransform(85.675,41.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAYQgJgIABgPQgBgOAJgJQAHgJAMAAQAGAAAGADQAHADACAFQAEAFABAGIABAMIgsAAQABAJAEAGQAEAGAIAAQAIAAAEgGQADgDABgEIAKAAQgBAEgCADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgHAAgEAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_41.setTransform(79.15,41.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgSAiQgIgIAAgOQAAgNAHgJQAHgKAMAAQAGAAAFADIAGAGIAAgfIAKAAIAABTIgKAAIAAgJQgDAGgFACQgFADgFAAQgKAAgHgJgAgKgFQgFAFAAALQAAAKAEAGQAEAHAIAAQAHAAAFgGQAEgGAAgMQAAgKgEgGQgFgFgHAAQgHAAgEAGg");
	this.shape_42.setTransform(72.6,40.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAYQgIgIAAgPQAAgOAIgJQAHgJAMAAQAHAAAFADQAHADACAFQADAFACAGIABAMIgrAAQAAAJAEAGQAEAGAIAAQAHAAAFgGQACgDACgEIAKAAQAAAEgDADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgHAAgFAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_43.setTransform(66.35,41.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSAYQgJgIABgPQgBgOAJgJQAHgJAMAAQAGAAAHADQAFADAEAFQADAFABAGIAAAMIgrAAQABAJAEAGQAEAGAHAAQAJAAAEgGQACgDACgEIAKAAQgBAEgCADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_44.setTransform(59.9,41.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgDQAEgFAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAGAAAGIAAAig");
	this.shape_45.setTransform(55.225,41.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgWAjQgNgLAAgYQgBgSAKgMQALgNARAAQAPAAAJAJQAJAIABALIgLAAQgCgJgFgEQgGgFgKAAQgLAAgHAJQgIAIAAARQAAAPAHAJQAHAJAMAAQAMAAAHgKQADgFABgIIAMAAQgCANgIAJQgKALgQAAQgOAAgJgJg");
	this.shape_46.setTransform(48.7,40.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgQAoQgHgFgBgJIALAAQABAEACACQADADAHAAQALAAAEgIQACgFAAgMQgDAEgFADQgEACgGAAQgKAAgHgHQgIgHAAgPQAAgPAIgJQAHgJALAAQAGAAAFAEQADACADAEIAAgIIAJAAIAAA2QAAAMgDAHQgGAMgRAAQgKAAgGgEgAgNgXQgCAFAAAJQAAAJAEAFQAEAGAHAAQAKAAAFgKQACgFAAgHQAAgMgEgFQgFgFgIAAQgJAAgEAKg");
	this.shape_47.setTransform(37.95,43.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_48.setTransform(31.725,41.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_49.setTransform(27.225,40.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDAkQgCgEAAgGIAAgnIgIAAIAAgIIAIAAIAAgRIAKAAIAAARIAJAAIAAAIIgJAAIAAAnQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABIAFAAIABAAIACAAIAAAIIgDABIgFAAQgGAAgDgDg");
	this.shape_50.setTransform(24.3,41.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgEAIAAIAQgDQADAAABgCIABgEQAAgGgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAHIgEABIgDABQgGgBgCgEIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAEADADQAEADAEAAQAFAAAEgDQAJgEAAgJIAAgIIgFABg");
	this.shape_51.setTransform(19.675,41.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgDQAEgFAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAGAAAGIAAAig");
	this.shape_52.setTransform(14.775,41.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKAnIgGgGIAAAIIgKAAIAAhTIAKAAIAAAeQAEgEAEgCQAFgDAEAAQAMAAAHAIQAHAIAAAOQAAAPgHAJQgHAKgMAAQgGAAgFgEgAgLgGQgFAFAAALQAAAIACAGQAEAKAKAAQAIAAAEgHQAEgGAAgLQAAgKgEgFQgEgGgIAAQgGAAgFAFg");
	this.shape_53.setTransform(9.425,40.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgTAYQgHgIAAgPQAAgOAHgJQAIgJAMAAQAHAAAFADQAHADACAFQADAFACAGIABAMIgrAAQgBAJAFAGQAEAGAIAAQAHAAAFgGQACgDABgEIALAAQAAAEgDADQgCAEgDADQgEAFgIABIgHABQgLAAgIgIgAARgEQAAgHgDgEQgEgHgJAAQgGAAgGAFQgEAFAAAIIAgAAIAAAAg");
	this.shape_54.setTransform(2.8,41.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_55.setTransform(-1.6,40.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAYQgIgIAAgPQAAgOAIgJQAJgJALAAQAGAAAHADQAFADAEAFQACAFABAGIABAMIgrAAQAAAJAFAGQAEAGAHAAQAJAAAEgGQACgDACgEIAJAAQABAEgDADQgCAEgDADQgFAFgHABIgHABQgLAAgIgIgAARgEQgBgHgCgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_56.setTransform(-6.15,41.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAjQgOgLAAgYQAAgSAKgMQALgNARAAQAPAAAJAJQAJAIABALIgLAAQgCgJgGgEQgFgFgKAAQgLAAgHAJQgIAIAAARQAAAPAHAJQAGAJANAAQAMAAAHgKQADgFABgIIAMAAQgCANgIAJQgKALgQAAQgOAAgJgJg");
	this.shape_57.setTransform(-13.5,40.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_58.setTransform(172.4833,21.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgfAjQgKgNAAgVQAAgWAMgNQALgNATAAQARAAALAIQALAHACAUIgZAAQAAgFgDgEQgEgGgIAAQgLAAgFAMQgCAGAAAKQAAAKACAGQAEALALAAQAJAAADgEQADgFABgHIAYAAQAAALgHAJQgMAQgVAAQgVAAgLgNg");
	this.shape_59.setTransform(163.125,21.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AARAuIAAg2QAAgHgCgEQgDgHgKAAQgMAAgEAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAFgHAEgDQAHgFAKAAQAPAAAIAHQAJAHAAARIAAA8g");
	this.shape_60.setTransform(153.2,21.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_61.setTransform(143.2333,21.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AggAyQgLgNAAgUQAAgWALgOQAKgNASAAQAHAAAHAEQAGADAEAHIAAgsIAYAAIAAB6IgXAAIAAgNQgFAIgGAEQgHAEgIAAQgQAAgLgNgAgOgDQgFAGAAAMQAAANAFAHQAFAIAJAAQAKAAAGgIQAFgHAAgMQAAgQgJgHQgFgEgGAAQgKAAgFAIg");
	this.shape_62.setTransform(133.125,20.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_63.setTransform(123.4333,21.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_64.setTransform(113.9833,21.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_65.setTransform(106.425,21.775);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgmAvQgQgRAAgdQAAggASgRQAPgPAWAAQAfAAAOAUQAIAMAAALIgZAAQgDgJgDgEQgIgIgNAAQgNAAgIALQgIALAAAUQAAAVAIAKQAJAKAMAAQANAAAIgJQADgEADgKIAZAAQgDAUgNANQgOAMgVAAQgaAAgPgRg");
	this.shape_66.setTransform(96.65,20.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgcA6QgLgHgCgNIAaAAQABAEACACQAEADAIAAQANAAAEgJQADgFAAgNIAAgGQgDAGgEADQgHAFgKAAQgSAAgKgMQgLgMAAgUQAAgUAKgOQAKgOATAAQAGAAAFACQAIAEAGAJIAAgNIAXAAIAABVQAAASgGAJQgKAPgcAAQgSAAgKgHgAgQggQgCAHAAAJQAAAIACAGQAFAKAMAAQAIAAAGgGQAFgFAAgOQAAgNgFgHQgFgGgKAAQgLAAgFALg");
	this.shape_67.setTransform(80.275,23.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AARAuIAAg2QAAgHgCgEQgEgHgJAAQgLAAgFAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAEgHAEgDQAIgFAKAAQAOAAAJAHQAJAHAAARIAAA8g");
	this.shape_68.setTransform(70.2,21.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgLA9IAAhZIAXAAIAABZgAgLgnIAAgVIAXAAIAAAVg");
	this.shape_69.setTransform(62.65,20.25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgHA0QgFgEAAgIIAAg3IgMAAIAAgRIAMAAIAAgZIAXAAIAAAZIAPAAIAAARIgPAAIAAAvQAAAFABACQACABAHAAIACAAIADAAIAAASIgMAAIgEAAQgMAAgFgGg");
	this.shape_70.setTransform(57.35,20.7067);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgLA9IAAhZIAXAAIAABZgAgLgnIAAgVIAXAAIAAAVg");
	this.shape_71.setTransform(52.25,20.25);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAHADACQAEAFALAAQAHAAAEgCQAEgCAAgFQAAgDgDgCQgDgDgVgEQgPgFgGgEQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAGAAALQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_72.setTransform(45.125,21.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgLA9IAAhZIAXAAIAABZgAgLgnIAAgVIAXAAIAAAVg");
	this.shape_73.setTransform(38.1,20.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgMAtIgghZIAbAAIARBBIAUhBIAZAAIghBZg");
	this.shape_74.setTransform(31.025,21.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_75.setTransform(21.5833,21.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAXA9IgCgGIgBgLIAAgLQAAgMgEgEQgEgEgMAAIgZAAIAAAwIgZAAIAAh5IA7AAQANAAAHADQAHADAEAFQAEAFADAGQACAFAAAIQAAAIgEAJQgFAIgKADQAJADADAGQAEAHAAANIAAAIIAAALQABAFAEACIAAADgAgZgGIAcAAQAIAAAFgCQAHgEAAgKQAAgLgHgEQgEgCgIAAIgdAAg");
	this.shape_76.setTransform(11.075,20.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR3, new cjs.Rectangle(-37.1,11.8,257.2,56.400000000000006), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAeAfIAAgpQAAgGgDgCQgDgCgEAAQgGAAgEADQgFAEAAAKIAAAiIgJAAIAAgnQAAgGgCgDQgCgEgGAAQgGAAgFAEQgFAFAAAMIAAAfIgKAAIAAg7IAKAAIAAAIIAHgGQAFgEAGAAQAIAAAEAEIAEAGQADgGAFgBQAEgDAGAAQAMAAAEAJQADAEAAAJIAAAng");
	this.shape.setTransform(160.425,64.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaArIAAhTIAKAAIAAAIQADgEAEgDQAFgDAGAAQALAAAHAIQAHAIAAAOQAAATgKAIQgHAGgJAAQgGAAgEgDQgDgBgDgFIAAAfgAgOgWQgCAFAAAJQAAAHACAEQAEAJAKAAQAHAAAFgGQAEgGAAgLQAAgHgCgFQgEgKgKAAQgKAAgEALg");
	this.shape_1.setTransform(152.525,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNADgKQAHgTARABQAPgBAIANQAFALAAARQAAAPgFALQgHAPgQAAQgOAAgHgMgAgLgXQgFAJAAAPQAAANADAHQAEALAJAAQAIABAEgIQAFgHAAgSQAAgNgDgJQgEgKgKABQgIAAgDAIg");
	this.shape_2.setTransform(142.7,63.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNADgKQAIgTAQABQAQgBAGANQAGALAAARQAAAPgFALQgHAPgQAAQgOAAgHgMgAgLgXQgFAJAAAPQAAANADAHQAEALAJAAQAHABAFgIQAFgHAAgSQAAgNgEgJQgCgKgKABQgJAAgDAIg");
	this.shape_3.setTransform(136.3,63.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAeIAAgNIALAAIAAANgAgFgRIAAgMIALAAIAAAMg");
	this.shape_4.setTransform(131.775,64.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAoQADgXANgWQAHgNAJgKIgsAAIAAgLIA3AAIAAAJIgKANQgGAKgFAJQgFALgCAJIgEASg");
	this.shape_5.setTransform(126.725,63.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_6.setTransform(118.6,63.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAhQgIgIAAgVQAAgOAEgLQAHgUASAAQANAAAGAHQAFAHAAAIIgKAAQgBgFgCgDQgEgFgHAAQgIAAgFAIQgFAIAAAPQADgFAFgDQAFgCAFAAQALAAAHAGQAIAGAAANQAAALgHAIQgIAJgNAAQgKAAgJgJgAgKABQgFAFAAAJQAAAHAEAGQAFAFAHAAQAIAAAEgGQAEgFAAgHQAAgHgEgFQgDgFgKAAQgFAAgFADg");
	this.shape_7.setTransform(110.925,63.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbApQABgLAEgHQADgIALgHIAKgGIALgGQAEgFAAgGQAAgHgEgEQgEgEgHAAQgKAAgEAIQgDAEABAHIgLAAQAAgKAEgHQAGgMARAAQAOAAAGAIQAGAHAAAKQAAAJgGAGQgEAEgLAGIgHAEIgJAGQgFAFgBAGIArAAIAAAKg");
	this.shape_8.setTransform(104.4,63.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAdQgGgKAAgSQAAgNAEgKQAHgTAQABQAPgBAIANQAFALAAARQAAAPgFALQgHAPgQAAQgOAAgHgMgAgMgXQgEAJAAAPQAAANADAHQAEALAJAAQAHABAGgIQAEgHAAgSQAAgNgDgJQgDgKgLABQgHAAgFAIg");
	this.shape_9.setTransform(98,63.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbApQABgLADgHQAEgIALgHIAKgGIAKgGQAFgFAAgGQAAgHgFgEQgEgEgGAAQgKAAgEAIQgCAEAAAHIgLAAQABgKADgHQAHgMAQAAQANAAAHAIQAGAHAAAKQAAAJgHAGQgDAEgLAGIgHAEIgIAGQgGAFgBAGIArAAIAAAKg");
	this.shape_10.setTransform(91.55,63.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_11.setTransform(83.575,67.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAhQgIgIAAgVQAAgOAEgLQAHgUASAAQANAAAGAHQAFAHAAAIIgKAAQgBgFgCgDQgEgFgHAAQgIAAgFAIQgFAIAAAPQADgFAFgDQAFgCAFAAQALAAAHAGQAIAGAAANQAAALgHAIQgIAJgNAAQgKAAgJgJgAgKABQgFAFAAAJQAAAHAEAGQAFAFAHAAQAIAAAEgGQAEgFAAgHQAAgHgEgFQgDgFgKAAQgFAAgFADg");
	this.shape_12.setTransform(78.775,63.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEAoIAAg4IgSAAIAAgIQALgBAEgDQAEgCACgJIAIAAIAABPg");
	this.shape_13.setTransform(71.75,63.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAoQgHgFgBgJIAKAAQACAEACACQADADAHAAQALAAAEgIQACgFAAgMQgDAEgEADQgFACgGAAQgKAAgHgHQgHgHAAgPQAAgPAHgJQAIgJAKAAQAGAAAFAEQADACADAEIAAgIIAKAAIAAA2QgBAMgDAHQgGAMgRAAQgJAAgHgEgAgNgXQgCAFAAAJQAAAJAEAFQAEAGAHAAQAKAAAFgKQACgFAAgHQAAgMgFgFQgEgFgHAAQgKAAgEAKg");
	this.shape_14.setTransform(62.5,65.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAFABADQAEAFAGAAQAKAAAEgKQACgFAAgHIAAgeIAKAAIAAA7IgKAAIAAgJIgEAHQgGAEgHAAQgNAAgFgJg");
	this.shape_15.setTransform(56.25,64.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAZApIgJgZIgfAAIgJAZIgMAAIAfhRIAMAAIAeBRgAANAHIgNgkIgMAkIAZAAg");
	this.shape_16.setTransform(49.225,63.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_17.setTransform(41.175,67.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_18.setTransform(36.425,64.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAFABADQAEAFAGAAQAKAAAEgKQABgFAAgHIAAgeIALAAIAAA7IgKAAIAAgJIgEAHQgGAEgIAAQgMAAgFgJg");
	this.shape_19.setTransform(29.9,64.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAkQgJgIAAgNIALAAQABAGADAFQAFAIANAAQAFAAAFgCQALgDgBgJQABgHgFgCQgEgEgJgBIgKgDQgLgDgEgCQgIgFABgKQgBgLAIgIQAHgHAOAAQAMAAAJAGQAJAHAAANIgLAAQgBgGgCgEQgFgGgLAAQgJAAgFAEQgEAEAAAGQAAAGAFADIAOAFIALACQAIACAFADQAHAFAAALQAAAOgKAGQgJAGgNAAQgPAAgIgIg");
	this.shape_20.setTransform(22.8,63.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAoQgHgFgBgJIAKAAQABAEADACQADADAHAAQALAAADgIQADgFAAgMQgEAEgDADQgFACgGAAQgKAAgHgHQgHgHAAgPQAAgPAHgJQAHgJALAAQAGAAAFAEQADACADAEIAAgIIAKAAIAAA2QgBAMgDAHQgGAMgRAAQgJAAgHgEgAgNgXQgCAFAAAJQAAAJAEAFQAEAGAHAAQAKAAAEgKQADgFAAgHQAAgMgFgFQgEgFgHAAQgKAAgEAKg");
	this.shape_21.setTransform(197.4,46.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg7IAKAAIAAAIQAEgFAFgCQAFgDAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_22.setTransform(191.175,45.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAEABADQAEAGAGAAQAKAAAEgKQABgEAAgJIAAgdIALAAIAAA8IgKAAIAAgJIgEAGQgGAEgIAAQgMAAgFgJg");
	this.shape_23.setTransform(184.7,45.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAIgJQAHgJAMAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgMAAgIgIgAgMgPQgFAHAAAJQAAAKAFAGQAEAHAIAAQAKAAAEgIQAEgIAAgIQAAgJgDgFQgFgIgKAAQgIAAgEAHg");
	this.shape_24.setTransform(178.25,45.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAqIAAgiIgfgwIANAAIAXAnIAYgnIANAAIgfAwIAAAig");
	this.shape_25.setTransform(172.4,44.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAjQgGgHAAgIQAAgKAGgGQAEgEAJgFQgFgGgCgEQgCgEAAgEQAAgIAGgGQAFgEAJAAQAIAAAFAEQAFAFAAAHQAAAIgGAGQgCAEgGAEIAOASIACgIIABgFIAKAAQgBAIgDAGIgCAHIgBAAIABAAIAOASIgNAAIgIgKQgFAFgEADQgFADgJAAQgNABgGgIgAgUAJQgDAFAAAGQAAAGAEAEQAFADAGAAQAGAAADgCQAFgDACgEIgRgXQgIAFgDADgAgNgdIgBAFQAAADACADIAGAIIAHgFQADgFAAgEQAAgEgCgCQgCgDgEAAQgGAAgDAEg");
	this.shape_26.setTransform(161.675,44.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_27.setTransform(151.325,44.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAaQgGgGAAgJIAJAAQABAFACADQAEAFAJAAQAFAAAFgDQAFgCAAgFQAAgFgEgBIgJgDIgIgDQgHgBgEgBQgGgEgBgIQAAgJAHgFQAGgGAKAAQAOAAAGAJQADAFAAAGIgJAAQgBgDgCgDQgDgEgIgBQgGABgDACQgDACAAADQAAAEAEADIAHACIAFACQAMACAEACQAFAEABAIQAAAJgHAGQgGAFgMABQgNAAgGgHg");
	this.shape_28.setTransform(145.2,45.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgJAGgEQAFgEAIAAIAQgDQADAAABgDIABgDQAAgGgEgCQgDgDgGAAQgIAAgDAFQgCACgBAFIgJAAQAAgMAHgEQAHgEAJAAQAKAAAGAEQAHAEAAAIIAAAiIABADIACABIACAAIACAAIAAAHIgEABIgDABQgGgBgCgEIgCgFQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGABIgFABIgIADQgFACAAAGQAAAEADADQAEADAEAAQAFAAAEgDQAJgEAAgJIAAgIIgFABg");
	this.shape_29.setTransform(139.175,45.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAUAqIgphDIAABDIgLAAIAAhSIANAAIApBBIAAhBIALAAIAABSg");
	this.shape_30.setTransform(131.675,44.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_31.setTransform(122.675,48.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAaQgGgGAAgJIAJAAQABAFACADQAEAFAJAAQAFAAAFgDQAFgCAAgFQAAgFgEgBIgJgDIgIgDQgHgBgEgBQgGgEgBgIQAAgJAHgFQAGgGAKAAQAOAAAGAJQADAFAAAGIgJAAQgBgDgCgDQgDgEgIgBQgGABgDACQgDACAAADQAAAEAEADIAHACIAFACQAMACAEACQAFAEABAIQAAAJgHAGQgGAFgMABQgNAAgGgHg");
	this.shape_32.setTransform(118.2,45.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_33.setTransform(114.05,44.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAqIAAhSIAJAAIAABSg");
	this.shape_34.setTransform(111.5,44.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_35.setTransform(108.875,44.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAkQgCgEAAgGIAAgnIgIAAIAAgIIAIAAIAAgRIAJAAIAAARIAKAAIAAAIIgKAAIAAAnQAAAAABABQAAABAAAAQAAABABAAQAAAAAAABIAFAAIABAAIACAAIAAAIIgDABIgFAAQgGAAgDgDg");
	this.shape_36.setTransform(105.95,44.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAkQgJgIABgNIAKAAQAAAGADAFQAGAIAMAAQAHAAAEgBQALgEAAgJQAAgHgFgDQgEgDgJgBIgKgDQgKgDgFgBQgHgGAAgKQAAgLAHgIQAIgHANAAQAMAAAJAGQAJAHAAANIgLAAQAAgGgDgEQgFgGgLAAQgJAAgEAEQgFAFAAAFQAAAGAFADIANAFIAMACQAIACAFACQAHAGABALQgBAOgJAGQgLAGgMAAQgOAAgJgIg");
	this.shape_37.setTransform(100.5,44.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_38.setTransform(91.825,48.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAqIgDAAIAAgJIAEAAIACABIAEgBIACgDIACgEIADgGIgXg+IAMAAIAPAwIARgwIALAAIgKAbIgJAYQgJAXgCAGQgEAFgJAAg");
	this.shape_39.setTransform(88.225,46.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAnIgGgGIAAAIIgKAAIAAhTIAKAAIAAAeQAEgEAEgCQAFgDAEAAQAMAAAHAIQAHAIAAAOQAAAPgHAJQgHAKgMAAQgGAAgFgEgAgLgGQgFAFAAALQAAAIACAGQAEAKAKAAQAIAAAEgHQAEgGAAgLQAAgKgEgFQgEgGgIAAQgGAAgFAFg");
	this.shape_40.setTransform(82.225,44.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAaQgGgGgBgJIAKAAQABAFACADQAEAFAJAAQAFAAAFgDQAFgCAAgFQAAgFgEgBIgJgDIgIgDQgHgBgEgBQgHgEAAgIQABgJAFgFQAHgGAKAAQAOAAAFAJQAEAFABAGIgKAAQgBgDgCgDQgDgEgIgBQgGABgDACQgDACAAADQAAAEAEADIAHACIAFACQAMACADACQAHAEAAAIQgBAJgGAGQgGAFgMABQgNAAgGgHg");
	this.shape_41.setTransform(76,45.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAHgJQAJgJALAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgNAAgHgIgAgNgPQgDAHAAAJQAAAKADAGQAEAHAJAAQAKAAADgIQAEgIABgIQgBgJgDgFQgDgIgLAAQgJAAgEAHg");
	this.shape_42.setTransform(69.85,45.475);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgDQAEgFAGAAIABAAIADAAIAAALIgCAAIgCAAQgIAAgDAEQgEAGAAAGIAAAig");
	this.shape_43.setTransform(65.125,45.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWAjQgNgLgBgYQAAgSAKgMQAKgNASAAQAPAAAJAJQAJAIABALIgLAAQgCgJgGgEQgFgFgKAAQgLAAgIAJQgHAIAAARQAAAPAHAJQAGAJANAAQAMAAAGgKQAEgFACgIIAKAAQgBANgIAJQgKALgRAAQgNAAgJgJg");
	this.shape_44.setTransform(58.65,44.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFAqIAAgzIgJAAIAAgIIAJAAIAAgKQABgGABgDQADgFAKAAIACAAIACAAIAAAJIgCAAIgBAAQgFAAgBADQgBACAAAKIAKAAIAAAIIgKAAIAAAzg");
	this.shape_45.setTransform(49.7,44.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAIgJQAIgJALAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgMAAgIgIgAgMgPQgFAHAAAJQAAAKAFAGQADAHAJAAQAKAAAEgIQADgIAAgIQAAgJgCgFQgEgIgLAAQgJAAgDAHg");
	this.shape_46.setTransform(44.8,45.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAHgJQAJgJAKAAQAKAAAHAFQAGAFACAMIgKAAQgBgGgEgDQgCgEgIAAQgJAAgDAJQgEAHAAAIQAAAJAFAGQAEAGAGAAQAHAAAEgEQADgDACgHIAKAAQgCAMgGAFQgIAGgKAAQgLAAgHgJg");
	this.shape_47.setTransform(35.6,45.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgLIAJAAIAAALg");
	this.shape_48.setTransform(31.375,44.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAaQgGgGAAgJIAKAAQAAAFACADQAEAFAJAAQAGAAAEgDQAFgCgBgFQAAgFgDgBIgJgDIgIgDQgHgBgEgBQgGgEgBgIQAAgJAHgFQAGgGAKAAQANAAAHAJQADAFAAAGIgJAAQAAgDgCgDQgEgEgIgBQgGABgDACQgDACAAADQAAAEAEADIAGACIAGACQAMACAEACQAFAEABAIQAAAJgHAGQgGAFgMABQgNAAgGgHg");
	this.shape_49.setTransform(27.2,45.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAEACADQADAGAGAAQAKAAAEgKQACgEAAgJIAAgdIAKAAIAAA8IgKAAIABgJIgGAGQgFAEgHAAQgNAAgFgJg");
	this.shape_50.setTransform(21.05,45.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAdAqIAAgxIAAgIIAAgNIgXBGIgLAAIgXhGIAAADIAAAJIAAAJIAAAxIgLAAIAAhSIAQAAIAXBEIAYhEIAQAAIAABSg");
	this.shape_51.setTransform(13.1,44.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgSAYQgJgIABgPQgBgOAJgJQAHgJAMAAQAGAAAGADQAHADACAFQAEAFABAGIABAMIgsAAQABAJAEAGQAEAGAIAAQAIAAAEgGQADgDABgEIAKAAQgBAEgCADQgCAEgDADQgFAFgGABIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgJAAQgHAAgEAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_52.setTransform(1.75,45.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_53.setTransform(-4.575,44.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFAqIAAhJIgcAAIAAgJIBDAAIAAAJIgcAAIAABJg");
	this.shape_54.setTransform(-11.325,44.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgdAlQgNgLAAgZQAAgXAMgMQAMgNASAAQALAAAJAEQAJAFAGAIQAGAJABALQABAGAAALIg9AAQABANAIAGQAEADAGAAQAIAAAEgEQADgDACgDIAYAAQgBAHgIAJQgLANgVAAQgQAAgOgLgAASgIQAAgJgFgGQgFgEgIAAQgHAAgFAEQgEAGgBAJIAjAAIAAAAg");
	this.shape_55.setTransform(130.7333,25.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgeAnQgKgJAAgOIAYAAQAAAHADACQAEAFALAAQAHAAAEgCQAEgCAAgFQAAgDgDgCQgDgDgVgEQgPgFgGgEQgHgGAAgKQAAgNAKgJQAKgJASAAQAQAAALAGQAKAIACAQIgYAAQAAgEgCgDQgEgFgJAAQgHAAgEADQgDACAAADQAAAEAEACQADACAUAFQAOADAHAGQAHAGAAALQAAANgKAIQgKAJgVAAQgUAAgKgJg");
	this.shape_56.setTransform(121.325,25.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgkAgQgEgIAAgQIAAg1IAYAAIAAA1QAAAIACAEQADAHAKAAQALAAAFgKQACgFAAgJIAAgwIAYAAIAABZIgXAAIAAgNIgCADIgDAEQgFAFgGABQgEACgHAAQgUAAgHgOg");
	this.shape_57.setTransform(111.375,25.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAHAAANQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgNgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_58.setTransform(101.075,25.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AAYA9IAAg2IgvAAIAAA2IgZAAIAAh5IAZAAIAAAuIAvAAIAAguIAZAAIAAB5g");
	this.shape_59.setTransform(89.875,23.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgZAuIAAhZIAWAAIAAAPQAFgJAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_60.setTransform(76.025,25.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgkAgQgEgIAAgQIAAg1IAYAAIAAA1QAAAIACAEQADAHAKAAQALAAAFgKQACgFAAgJIAAgwIAYAAIAABZIgXAAIAAgNIgCADIgDAEQgFAFgGABQgEACgHAAQgUAAgHgOg");
	this.shape_61.setTransform(67.075,25.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgnAyQgTgRAAghQAAghATgRQAOgOAZAAQAaAAAOAOQATARAAAhQAAAhgTARQgOAPgaAAQgZAAgOgPgAgXgfQgJALAAAUQAAAVAJALQAJALAOAAQAPAAAJgLQAJgLAAgVQAAgUgJgLQgJgLgPAAQgOAAgJALg");
	this.shape_62.setTransform(55.425,23.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(-35.9,15.4,257.2,56.4), null);


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
	this.shape.setTransform(36.9958,0.9296,0.8999,0.8999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAqIAAgDQAGAAACgCQADgDAAgHIAAgwQAAgIgDgDQgBgEgHAAIAAgDIAXAAIALgCIAAAPQAAgDAEgFQADgDAEgCQAFgCAEAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHACADQADADAJAAIAAADg");
	this.shape_1.setTransform(30.2687,0.8396,0.8999,0.8999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAnQgJgEgFgKQgFgJAAgQQAAgPAFgJQAFgKAJgFQAJgDAKAAQALAAAJADQAKAFAEAKQAFAJAAAPQAAAQgFAJQgFALgJADQgIAFgMgBQgKABgJgFgAgKgeQgEAKAAAUQAAAWAEAJQAFAJAFABQAGgBAFgJQAEgJAAgWQAAgUgEgKQgFgJgGAAQgFAAgFAJg");
	this.shape_2.setTransform(22.7316,0.9296,0.8999,0.8999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6A4IgdAAIgLABIAAgEIAJgBQADgBAAgDQABgCAAgGIAAhSIglBjIgDAAIgrhmIAABLIABAOQABAEADADQAEACAHAAIAAAEIgIgBIgYABIAAgEQAFAAADgCQADgCAAgFIABgMIAAhHIgBgIQgBgEgCAAIgIgBIAAgEIAHABIAggBIAgBNIAdhMIAlgBIAAAEIgIABQgCAAgBAEIgBAIIAABPIABAIQAAADADABIAIABIAAAEIgLgBg");
	this.shape_3.setTransform(12.2697,-0.4428,0.8999,0.8999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAqIAAgDQAFAAACgDQACgBAAgIIAAgwIgBgHQAAgDgDgCQgCgCgEAAQgDAAgEADQgDACgCAEQgDAGAAAEIAAArQAAAHACACQADADAEAAIAAADIgIAAIgiAAIAAgDQAFAAADgDQACgCAAgHIAAgxQAAgHgCgDQgCgEgGAAIAAgDIAKAAIAXgCIAAAOQAEgIAHgDQAGgDAJAAQAGAAAFABQAEACACADIAEAHIABA3QAAAIADABQACADAFAAIAAADg");
	this.shape_4.setTransform(-2.1295,0.8396,0.8999,0.8999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqIAAgDQAFAAACgCQADgDAAgHIAAgwQAAgIgCgDQgCgEgHAAIAAgDIAXAAIALgCIAAAPIAEgIQADgDAEgCIAJgCIAAAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHADADQADADAIAAIAAADg");
	this.shape_5.setTransform(-9.869,0.8396,0.8999,0.8999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMApQgEgCgBgCQgCgDAAgEQgDAGgFADQgGAEgHAAQgHAAgFgDQgFgCgCgFQgDgFAAgFQAAgHADgEQAFgFAEgCQAEgDAGgBIALgDQAEgBADgDQADgCAAgEIAAgNIgBgHQgCgDgCgCQgEgCgDAAIgGABQgEABgCACQAFACACADQADACAAAFQAAAGgEADQgDADgGAAQgGAAgDgEQgDgDAAgFQAAgEADgEIAGgFQAEgDAHgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAFABAEIABA4IABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADgBIADgBIACACQgDADgFACQgEABgGAAQgGAAgDgCgAABgBIgFACIgFAFQgDABgBAFQgCAEAAAEQAAAHADADQACADAFAAIAFgCIAFgEIAAghg");
	this.shape_6.setTransform(-16.8886,0.8846,0.8999,0.8999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAnQgIgFgFgJQgFgKAAgOQABgOAFgKQAFgKAJgFQAHgEAMAAQANgBAIAJQAJAJgBASIgsAAIAAAHQAAALADAGQAEAHADAEQAFADAFAAIAHgBQADgBAEgEQAEgCAEgFIACABQgCAHgEAFQgEAFgHAEQgFAEgJgBQgKABgJgFgAgFggQgEAHgBAPIAZAAIgBgOQgCgIgCgDQgCgEgEAAQgGAAgDAHg");
	this.shape_7.setTransform(-24.3807,0.9296,0.8999,0.8999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrA5IAAgEIAHgBQADAAABgEIABgIIAAhPIgBgIQgBgCgDgCIgHgBIAAgEIAKABIAdAAIAKgBIAAAEIgHABQgDABgBADIgBAIIAABRIABAHQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAFABIAIAAQAGAAAEgDQAFgCAEgFQADgDADgIQADgJABgGIAEAAIAAAog");
	this.shape_8.setTransform(-32.3677,-0.4428,0.8999,0.8999);

	this.instance = new lib.CTA();
	this.instance.setTransform(-61,-20,0.4699,0.4699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-61,-20,124.5,39), null);


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
	this.instance.setTransform(492.85,45.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(449).to({_off:false},0).to({alpha:1},8).wait(22).to({startPosition:0},0).to({_off:true},1).wait(4));

	// FR3
	this.instance_1 = new lib.FR3();
	this.instance_1.setTransform(481.2,46,0.92,0.92,0,0,0,78.8,40.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(359).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).to({_off:true},83).wait(35));

	// FR2
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(479.8,46,0.92,0.92,0,0,0,78.8,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},90).wait(125));

	// FR1
	this.instance_3 = new lib.FR11();
	this.instance_3.setTransform(467.1,46.55,0.92,0.92,0,0,0,63.7,41.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).to({_off:true},137).wait(223));

	// CTA
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(688.35,71.5,0.8305,0.8305,0,0,0,38.9,11.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({y:54.9,alpha:1},8,cjs.Ease.get(1)).wait(231).to({y:72.8},0).to({y:54.9},8,cjs.Ease.get(1)).wait(112).to({_off:true},1).wait(4));

	// line
	this.instance_5 = new lib.Line_1();
	this.instance_5.setTransform(375.45,59.3,0.7727,0.7727,0,0,0,11,48.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({y:43.85,alpha:1},8,cjs.Ease.get(1)).wait(367).to({_off:true},1).wait(4));

	// Header
	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(240.05,135.5,1,1,0,0,0,128.2,70.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:115.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},73).wait(389));

	// Logo2
	this.instance_7 = new lib.Logo2_1();
	this.instance_7.setTransform(295.95,49.3,0.8905,0.8905);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(376).to({_off:true},1).wait(4));

	// Logo
	this.instance_8 = new lib.Logo_1();
	this.instance_8.setTransform(101.05,48.05,0.275,0.275,0,0,0,150.8,111.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:150.3,regY:111.4,scaleX:0.4297,scaleY:0.4297,alpha:1},8,cjs.Ease.get(1)).to({_off:true},81).wait(389));

	// Layer_2
	this.instance_9 = new lib.Layer();
	this.instance_9.setTransform(465.5,45.05);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95).to({_off:false},0).wait(384).to({_off:true},1).wait(4));

	// Bg2
	this.instance_10 = new lib.Bg2_1();
	this.instance_10.setTransform(132,142,1,1,0,0,0,150,62.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95).to({_off:false},0).wait(384).to({_off:true},1).wait(4));

	// sc
	this.instance_11 = new lib.sc();
	this.instance_11.setTransform(20,53.45,0.4665,0.4665,0,0,180,108,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-5.5},8,cjs.Ease.get(1)).wait(471).to({_off:true},1).wait(4));

	// sc
	this.instance_12 = new lib.sc();
	this.instance_12.setTransform(193.6,54.7,0.4665,0.4665,0,0,0,108.2,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:208.5},8,cjs.Ease.get(1)).wait(471).to({_off:true},1).wait(4));

	// IMG4
	this.instance_13 = new lib.IMG4("synched",0);
	this.instance_13.setTransform(100.15,50.45);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(449).to({_off:false},0).to({alpha:1},8).wait(22).to({startPosition:0},0).to({_off:true},1).wait(4));

	// IMG3
	this.instance_14 = new lib.img3();
	this.instance_14.setTransform(42.3,16.65,0.3408,0.3408,0,0,0,213.3,107.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(359).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},82).wait(35));

	// Img2
	this.instance_15 = new lib.Img2_1();
	this.instance_15.setTransform(54.1,24.8,0.3762,0.3762,0,0,0,149.7,62.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},98).wait(117));

	// Img1
	this.instance_16 = new lib.Img1_1();
	this.instance_16.setTransform(44.95,22.15,0.4878,0.4878,0,0,0,150,65.4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(94).to({_off:false},0).to({regY:65.3,y:21.65,alpha:1},8,cjs.Ease.get(1)).to({_off:true},167).wait(215));

	// Bg1
	this.instance_17 = new lib.Bg1_1();
	this.instance_17.setTransform(114,105,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(479).to({_off:true},1).wait(4));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(479).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-52.6,825,282.6);


// stage content:
(lib.WFSB_219237_MM_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480));

	// Layer_1
	this.instance = new lib.ad_animatedLayers("synched",0,false);
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(480));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(267,-7.6,462,237.6);
// library properties:
lib.properties = {
	id: '5821E8F85CC64D0DA8649206A7F8E546',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"_4.jpg", id:"_4"},
		{src:"Bg1.jpg", id:"Bg1"},
		{src:"Bg2.jpg", id:"Bg2"},
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
an.compositions['5821E8F85CC64D0DA8649206A7F8E546'] = {
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