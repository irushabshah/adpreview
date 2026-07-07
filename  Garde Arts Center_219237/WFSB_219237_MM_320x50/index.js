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



(lib.Bg1 = function() {
	this.initialize(img.Bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,83);


(lib.line = function() {
	this.initialize(img.line);
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


(lib.line_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line_1, new cjs.Rectangle(0,0,22,97), null);


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
	this.shape.graphics.f("#000000").s().p("AuoD6IAAnzIdRAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Layer, new cjs.Rectangle(-93.7,-25,187.4,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAOQgFgFAAgJQAAgHAFgFQAFgGAJAAQAJAAAGAGQAFAEAAAIQAAAJgFAFQgFAEgKAAQgJAAgFgEg");
	this.shape.setTransform(-175.0411,30.8481,0.481,0.481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3A/IgxABIAAgFQAHAAADgEQADgDAAgLIAAhJIgBgLQgBgFgDgCQgEgCgGAAQgFAAgGADQgFAEgDAGQgDAGAAAJIAABBQAAALADADQADAEAHAAIAAAFIg/AAIAAgFQAIAAAEgEQADgEAAgKIAAhKQAAgLgDgFQgDgGgJAAIAAgFIAPABIASgBIARgCIAAAVQAGgLAKgGQAJgFANAAQALAAAFADQAGACAEAEQAEAFACAHQACAGAAAOIAAA/QAAALADADQADAEAJAAIAAAFg");
	this.shape_1.setTransform(-180.068,28.527,0.481,0.481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA+QgGgCgEgFQgEgFgCgGQgCgLAAgIIAAg8QAAgLgDgGQgDgEgJAAIAAgGIAiAAIAQgCIAABiIABALQABAEADADQAEADAFgBQAGAAAFgDQAFgEADgGQAEgGAAgIIAAg+QAAgKgEgHQgDgEgJAAIAAgGIAiAAIAQgCIAABjQAAALAEAFQADAGAJgBIAAAGIgPgBIgTABIgQACIAAgVQgGALgKAGQgKAFgMAAQgKAAgGgDg");
	this.shape_2.setTransform(-187.2116,28.6353,0.481,0.481);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BVIAAgFIALgCQAEgCACgDIABgNIAAh3IgBgNQgCgEgEgCIgLgCIAAgEIB/AAIgBAvIAAAIIgFAAQgDgSgGgMQgFgKgIgFQgIgEgLgBIgSABQgDACgCAEIgBALIAAA8IAJAAQAGAAAFgDQAFgDADgFQADgDACgIIADgKIAGAAIAABEIgFAAQgCgKgDgGQgDgHgGgFQgFgEgKAAIAAgBIgIAAIAAA4QAAAKACAEQACAFAEABQAGABALABIAAAFg");
	this.shape_3.setTransform(-194.0425,27.5048,0.481,0.481);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBYQgNAAgNgDQgMgDgGgFQgGgFAAgHQAAgIAGgGQAIgGAMgDIACAEQgEACgDAGQgBAEgBAFQAAAKAKAFQAJAGAQAAQAKAAAIgDQAJgDAEgGQAGgFAAgJQgBgHgFgFQgGgFgPAAIgOAAQgLAAgGgCQgHgCgFgFQgDgFAAgHQgBgKAJgIQAGgFALgFQgIgBgHgDQgJgDgIgJQgFgIgBgOQABgNAFgIQAHgJAKgEQALgEAOAAQAOAAAJAEQAIADAFAEQADgEAFgEQAIgGAJAAQAIAAAEAEQADAFAAAGQAAAHgDAEQgFAEgEAAQgEAAgEgDQgCgDgBgGQgBgFADgIQgHADgDAEIgGAGIABACQAHAIAAANQAAANgHAJQgGAJgLADQgJAEgOAAIgEAAIgGAFQgEADAAAEQAAAIAJAAIAZAAQAPAAAJADQALAEAGAGQAGAHAAAMQAAAMgIAJQgHAKgQAHQgPAGgXAAgAgVhIQgDAHgBATQABAUADAHQAEAHAGAAQAHAAAEgHQACgJAAgSQAAgRgCgJQgEgIgHAAQgGAAgEAIg");
	this.shape_4.setTransform(-203.3869,29.5372,0.481,0.481);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBcIgPABIAAgFQAJAAADgEQAEgDAAgKIAAhLQAAgKgDgGQgEgFgJAAIAAgFIAPABIASgBIAQgDIAABoQAAAKAEADQAEAEAIAAIAAAFgAgQg8QgGgFAAgJQAAgIAGgFQAGgFAKAAQAIAAAHAFQAFAFAAAIQAAAJgFAFQgGAFgJAAQgKAAgGgFg");
	this.shape_5.setTransform(-208.3778,27.1079,0.481,0.481);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BUIgRABIAAgFIALgCQAFgCABgDQABgFAAgIIAAh3QAAgIgBgFQgBgEgFgCIgLgCIAAgEIBJAAQAeAAAPALQAOAKAAARQAAAIgFAJQgFAJgLAGQgKAHgRADIAAAAQAWACAOAFQANAHAGAJQAGAJAAAKQAAAQgIAJQgJALgOAGQgPAFgUAAgAgQA8QAAAJABADQACAFADABQADABAHABQAQgBAJgKQAHgLABgVQgBgSgIgKQgLgKgTABIgKAAgAgOhMQgCAGAAALIAAA2IAKAAQAKABAGgGQAGgFADgKQACgHAAgMQAAgSgFgIQgGgKgLAAQgJABgEADg");
	this.shape_6.setTransform(-214.0421,27.5048,0.481,0.481);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAOQgFgFAAgJQAAgIAFgEQAFgGAJAAQAJAAAGAGQAFAEAAAIQAAAJgFAFQgFAEgKAAQgJAAgFgEg");
	this.shape_7.setTransform(-222.2079,30.8481,0.481,0.481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBAIgWgJQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgDADgBAEIgEAAIABgwIAFAAQABAOAEAJQAEAKAGAFQAHAGAKAAIAHgCQAEgCACgDQACgDABgHQgBgLgGgHIgRgPIgOgLQgHgHgFgHQgDgHAAgJQgBgLAHgIQAFgHAJgEQAJgDAMAAIAAAAQALAAAGACQAHADAEACQAHAGADgNIAEAAIgBAqIgEAAQgCgJgDgIQgDgJgHgGQgGgFgKAAQgGAAgFAEQgFAEAAAHQAAAIAFAFQAEAGAFAEIAPALIAOAKQAHAHAEAGQAEAHAAAKQAAALgHAIQgHAIgJAEQgLAEgMAAQgGAAgFgBg");
	this.shape_8.setTransform(-226.381,28.5992,0.481,0.481);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BdIgxABIAAgFQAIAAADgEQACgDAAgKIAAhKIgBgLQgBgEgDgCQgEgDgFAAQgGAAgGAEQgFADgDAGQgDAIAAAFIAABEQAAAKACADQAEAEAGAAIAAAFIgMgBIgyABIAAgFQAIAAAEgEQAEgDgBgKIAAiIQABgKgEgGQgDgFgJAAIAAgFIAPABIASgBIARgDIAABTQAGgNAKgEQAIgGANAAQAMABAFACQAFACAFAEQAEAFACAIQACAGgBAMIAABBQABAKADADQAEAEAIAAIAAAFg");
	this.shape_9.setTransform(-232.5625,27.0719,0.481,0.481);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBVQgLgDgHgFQgGgFAAgHQAAgIAGgGQAIgGAMgDIACAEQgDACgDAGQgCAEAAAFQAAAKAJAFQAKAGAPAAQAKAAAIgDQAJgDAFgGQAFgFAAgJQAAgHgGgFQgGgFgPAAIgOAAQgKAAgHgCQgHgCgEgFQgEgFAAgHQAAgKAIgIQAGgFALgFQgIgBgGgDQgLgEgGgIQgGgIAAgOQAAgNAGgIQAFgJAMgEQAJgEAPAAQAOAAAKAEQAHADAFAEIAIgIQAHgGAKAAQAHAAAEAEQAEAEAAAHQAAAIgDADQgFAEgEAAQgEAAgEgDQgDgEgBgFQAAgGADgHQgHADgDAEIgFAGIABACQAGAIAAANQAAANgGAJQgHAJgKADQgKAEgOAAIgEAAIgGAFQgEADAAAEQAAAIAKAAIAZAAQANAAAKADQAMAEAFAGQAGAHAAAMQAAAMgIAJQgHAKgQAHQgPAGgXAAQgNAAgOgDgAgVhIQgDAHAAATQAAAUADAHQAEAHAGAAQAHAAADgHQADgIAAgTQAAgSgDgIQgDgIgHAAQgGAAgEAIg");
	this.shape_10.setTransform(-239.3092,29.5372,0.481,0.481);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA+QgFgCgFgFQgDgDgDgIQgBgIAAgLIAAg8QAAgLgEgGQgDgEgJAAIAAgGIAiAAIAQgCIAABiIABALQACAEADADQADADAGgBQAEAAAGgDQAEgDAFgHQADgGAAgIIAAg+QAAgLgDgGQgEgEgJAAIAAgGIAiAAIAQgCIAABjQAAAKAEAGQAEAGAIgBIAAAGIgPgBIgTABIgQACIAAgVQgFALgLAGQgJAFgNAAQgJAAgHgDg");
	this.shape_11.setTransform(-246.0439,28.6353,0.481,0.481);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASA+QgFgCgDgEQgDgGABgFQgGAJgIAGQgHAEgMABQgKgBgIgEQgIgEgCgGQgEgHAAgJQAAgKAFgHQADgFAJgFIAPgHIARgEQAHgCADgEQAFgDAAgGIAAgTQAAgGgCgEQgCgFgDgEQgFgCgGAAQgFAAgEACQgGABgCACQAGAEAEAEQAEAFgBAGQABAJgGAEQgFAFgJAAQgIAAgEgFQgFgGAAgIQAAgFAEgGQADgFAHgEQAGgDAJgDQAJgCAMAAQALAAAIACQAJADAGAGQAGAFABAJQACALAAAJIAABAQAAAHABABQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIAFgCIADgDIADAFQgGAEgGACQgFACgKABQgIAAgFgDgAABgCIgPALQgEADgCAGQgDAGAAAHQAAAIAEAFQAFAFAGAAQAEAAAEgCQAEgCAEgGIAAgwQgDAEgEADg");
	this.shape_12.setTransform(-252.3576,28.5631,0.481,0.481);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCBVIAAgFIAMgCQAEgCABgDIABgNIAAh3IgBgNQgBgEgEgCIgMgCIAAgEIBLAAIAAAEIgLACQgFACgBAFIgBAMIAAB6QAAAIABACQABAEADABIAJABIALAAQAJAAAHgEQAGgCAHgJQAFgFAEgMQAEgKACgLIAGAAIgBAlIACAWg");
	this.shape_13.setTransform(-258.936,27.5048,0.481,0.481);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBVQgLgDgHgFQgGgFAAgHQAAgIAGgGQAIgGAMgDIACAEQgDACgDAGQgCAEAAAFQAAAKAJAFQAKAGAPAAQAKAAAIgDQAJgDAFgGQAFgFAAgJQAAgHgGgFQgGgFgPAAIgOAAQgKAAgHgCQgHgCgEgFQgEgFAAgHQAAgKAIgIQAGgFALgFQgIgBgGgDQgLgEgGgIQgGgIAAgOQAAgNAGgIQAFgJAMgEQAJgEAPAAQAOAAAKAEQAHADAFAEIAIgIQAHgGAKAAQAHAAAEAEQAEAEAAAHQAAAIgDADQgFAEgEAAQgEAAgEgDQgDgEgBgFQAAgFAEgIQgHADgEAEIgFAGIABACQAGAIAAANQAAANgGAJQgHAJgKADQgKAEgOAAIgEAAIgGAFQgEADAAAEQAAAIAKAAIAZAAQANAAAKADQAMAEAFAGQAGAHAAAMQAAAMgIAJQgHAKgQAHQgPAGgXAAQgNAAgOgDgAgVhIQgDAHAAATQAAAUADAHQAEAHAGAAQAHAAADgHQADgHAAgUQAAgTgDgHQgDgIgHAAQgGAAgEAIg");
	this.shape_14.setTransform(-268.4126,29.5372,0.481,0.481);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATBcIgzABIAAgFQAIAAAFgEQADgDAAgKIAAhLQAAgLgDgFQgEgFgJAAIAAgFIAQABIASgBIAQgDIAABoQgBAKAEADQADAEAIAAIAAAFgAgQg8QgHgFAAgJQAAgHAHgGQAGgFAKAAQAIAAAGAFQAHAFgBAIQABAJgHAFQgGAFgIAAQgLAAgFgFg");
	this.shape_15.setTransform(-273.4035,27.1079,0.481,0.481);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4BUIgPABIAAgFIALgCQAEgCABgDQACgFAAgIIAAh3QAAgIgCgFQgCgEgDgCIgMgCIAAgEIBKAAQAdAAAPALQAOAKAAARQAAAIgEAJQgGAJgKAGQgLAHgRADIAAAAQAWACAOAFQAOAHAFAJQAGAJAAAKQAAAQgHAJQgJALgPAGQgPAFgUAAgAgQA8QAAAHACAFQABAFAEABQACABAHABQAQgBAJgKQAIgLAAgVQAAgSgJgKQgKgKgUABIgKAAgAgNhMQgDAFAAAMIAAA2IALAAQAJABAHgGQAGgFACgKQADgJgBgKQAAgRgFgJQgFgKgMAAQgJABgDADg");
	this.shape_16.setTransform(-279.0799,27.5048,0.481,0.481);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAOQgFgFgBgJQABgHAFgFQAGgGAIAAQAJAAAGAGQAGAFAAAHQAAAJgGAFQgFAEgKAAQgIAAgGgEg");
	this.shape_17.setTransform(-287.2336,30.8481,0.481,0.481);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA4A/IgyABIAAgFQAIAAADgEQACgEAAgKIAAhJIgBgLQgCgFgCgCQgEgCgFAAQgGAAgFADQgGAEgDAGQgDAGAAAJIAABBQAAALADADQADAEAHAAIAAAFIg/AAIAAgFQAJAAADgEQADgDAAgLIAAhKQAAgLgDgFQgDgGgJAAIAAgFIAPABIATgBIAQgCIAAAVQAGgLAKgGQAJgFANAAQALAAAGADQAFACAFAEQADAEACAIQACAHAAANIAAA/QAAAKADAEQAEAEAIAAIAAAFg");
	this.shape_18.setTransform(-292.2726,28.527,0.481,0.481);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA6QgNgGgHgPQgHgPAAgVQAAgVAHgPQAIgPAOgHQAMgHARAAQAVAAAMAMQAMAMAAAdIhCAAIAAALQgBAQAFAKQAEAKAHAFQAHAFAHAAIALgCQAFgBAGgFQAFgEAFgIIAEACQgCAJgHAJQgHAJgJAFQgIAFgOAAQgRAAgLgHgAgIgxQgFALgCAWIAlAAQAAgLgBgKQgCgKgEgGQgEgGgFAAQgIAAgGAKg");
	this.shape_19.setTransform(-298.7067,28.5992,0.481,0.481);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA6QgMgGgIgPQgHgPAAgVQAAgVAHgPQAIgPANgHQANgHARAAQAVAAAMAMQAMAMAAAdIhCAAIgBALQABAQAEAKQAFAKAGAFQAHAFAIAAIAKgCQAFgBAGgFQAFgEAFgIIAFACQgEAJgFAJQgJAJgHAFQgKAFgOAAQgQAAgLgHgAgHgxQgGAKgCAXIAlAAQAAgLgCgKQgBgKgEgGQgDgGgGAAQgIAAgFAKg");
	this.shape_20.setTransform(-304.5273,28.5992,0.481,0.481);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzBAIAAgFQAIAAADgEQAEgDAAgKIAAhLQAAgLgDgFQgEgFgIAAIAAgFIAhAAIARgDIAAAWQABgFAFgGQAFgFAGgEQAGgDAIAAIAAABQAIAAAFADQAEADADAFQACAGAAAFQAAAJgFAFQgGAGgIAAQgIAAgFgEQgEgFAAgHQAAgGADgFQADgEAEgDIgHAAQgDAAgFAEIgHAHQgDAEgBAGQgBAEAAAGIAAA+QAAAMAEAEQAGAEALAAIAAAFg");
	this.shape_21.setTransform(-309.879,28.503,0.481,0.481);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXA7QgMgHgIgOQgIgOAAgXQAAgUAIgQQAIgOANgIQAOgHAPAAQALAAAHACQAJACAEADQAFADAFAGQADAGAAAHQAAAJgFAFQgGAGgIAAQgJAAgEgFQgGgFAAgIQAAgIAGgFQAEgFAHgCIgHgEQgEgCgEAAQgHAAgGAFQgEAEgEAIQgEAHgDALQgBAJAAANQAAASAEAKQAGALAFAEQAIAFAHAAIALgCQAEgBAHgFQAFgEAFgIIAEACQgEAKgFAHQgGAJgJAGQgJAFgPAAQgPAAgMgGg");
	this.shape_22.setTransform(-315.4952,28.5992,0.481,0.481);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYBVIgOgGQgFgDgEAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAABAAAAIgCAIIgFAAIAAhAIAFAAQACARAEAMQAEAOAKAIQAKAJAOAAQAIAAAGgDQAHgDAEgGQAEgGAAgJQAAgKgFgIQgDgGgJgIIgngbQgKgHgFgKQgHgJABgNQAAgPAHgKQAIgKAMgFQAMgEAPAAQAPAAAFADIASAIIAEABQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAIACgIIAGAAIgBA2IgGAAQgBgMgFgMQgEgMgJgHQgKgIgMAAQgKAAgIAHQgIAHABALQAAAKAEAGQAFAGAKAIIAVAPIAVAOQAJAIAFAJQAFAKABAMQAAAPgJALQgIALgOAFQgOAFgOAAQgPAAgJgDg");
	this.shape_23.setTransform(-321.7008,27.5168,0.481,0.481);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoBVQgLgDgHgFQgGgFAAgHQAAgIAGgGQAIgGAMgDIACAEQgDACgDAGQgCAEAAAFQAAAKAJAFQAKAGAPAAQAKAAAIgDQAJgDAFgGQAFgFAAgJQAAgHgGgFQgGgFgPAAIgOAAQgKAAgHgCQgHgCgEgFQgEgFAAgHQAAgKAIgIQAGgFALgFQgIgBgGgDQgLgEgGgIQgGgIAAgOQAAgNAGgIQAFgJAMgEQAJgEAPAAQAOAAAKAEQAHADAFAEIAIgIQAHgGAKAAQAHAAAFAEQADAEAAAHQAAAIgDADQgFAEgEAAQgEAAgEgDQgDgEAAgFQgBgFAEgIQgHADgEAEIgFAGIABACQAGAIAAANQAAANgGAJQgHAJgKADQgKAEgOAAIgDAAIgHAFQgEADAAAEQAAAIAKAAIAZAAQAOAAAJADQAMAEAFAGQAGAHAAAMQAAAMgIAJQgHAKgQAHQgPAGgXAAQgNAAgOgDgAgVhIQgDAHAAATQAAAUADAHQAEAHAGAAQAHAAADgHQADgHAAgUQAAgTgDgHQgDgIgHAAQgGAAgEAIg");
	this.shape_24.setTransform(-331.0211,29.5372,0.481,0.481);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBcIgPABIAAgFQAIAAAEgEQAEgDAAgKIAAhLQAAgLgEgFQgDgFgJAAIAAgFIAPABIASgBIAQgDIAABoQAAAKAEADQADAEAJAAIAAAFgAgRg8QgGgFAAgJQAAgHAGgGQAHgFAJAAQAJAAAGAFQAGAFAAAIQAAAJgGAFQgGAFgJAAQgKAAgGgFg");
	this.shape_25.setTransform(-335.9999,27.1079,0.481,0.481);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag4BUIgPABIAAgFIALgCQAEgCABgDQACgFAAgIIAAh3QAAgIgCgFQgBgEgEgCIgMgCIAAgEIBKAAQAdAAAPALQAOALAAAQQAAAIgEAJQgHAJgJAGQgKAHgRADIAAAAQAVACAPAFQANAHAFAJQAGAJAAAKQAAAQgHAJQgJALgPAGQgPAFgUAAgAgQA8QAAAHACAFQABAFADABQAEABAGABQAQgBAJgKQAIgLAAgVQAAgSgJgKQgKgKgUABIgKAAgAgNhMQgDAFAAAMIAAA2IALAAQAJABAHgGQAGgFACgKQACgJAAgKQAAgRgFgJQgFgKgMAAQgJABgDADg");
	this.shape_26.setTransform(-341.6883,27.5048,0.481,0.481);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDC554").s().p("AgDAFQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_27.setTransform(-194.725,54.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDC554").s().p("AgMAdQgFgDgDgGQgDgFAAgHQAAgIADgEQADgFAFgDQAFgEAGAAQAEAAAEACQAFACACAEIAAgXIAKAAIAAA+IgKAAIAAgHQgCAEgEACQgEACgFAAQgGAAgFgDgAgGgFQgDACgCADQgCADAAAFQAAAEACAEQACAEADACQADACADAAQAEAAADgCQADgCACgEQACgDAAgFQAAgFgCgDQgCgDgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_28.setTransform(-198.625,52.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDC554").s().p("AALAYIAAgZQAAgGgCgEQgDgEgGAAQgFAAgCAEQgEAEAAAGIAAAZIgJAAIAAguIAJAAIAAAFQADgDADgBQAEgCADAAQAFAAAFADQAEACADAFQACAEAAAHIAAAag");
	this.shape_29.setTransform(-203.9,52.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDC554").s().p("AgLAWQgEgDgDgEQgCgFAAgGIAAgbIAJAAIAAAZQAAAHADADQADAEAFAAQAGAAADgEQACgDAAgHIAAgZIAKAAIAAAuIgKAAIAAgFQgBADgEABQgEACgDAAQgGAAgEgCg");
	this.shape_30.setTransform(-209.3,52.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDC554").s().p("AgMAWQgFgEgDgFQgDgGAAgHQAAgGADgFQADgGAGgDQAGgDAFAAQAHAAAGADQAFADADAGQADAFAAAGQAAAHgDAGQgDAFgGAEQgGACgGAAQgGAAgGgCgAgGgNQgDACgCAEQgCADAAAEQAAAIAEAEQAEAEAFAAQAEAAADgCQADgBACgEQACgEAAgFQAAgEgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(-214.65,52.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDC554").s().p("AgLAYIAAguIAKAAIAAAHQABgEAEgCQADgCAFAAIAAALIgDAAQgFAAgDACQgCADAAAHIAAAYg");
	this.shape_32.setTransform(-218.625,52.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDC554").s().p("AgMAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAFgDQAFgDAGAAQAFAAAEACQAEACACAEIAAgHIAKAAIAAAuIgKAAIAAgHQgCADgEACQgFACgEAAQgGAAgFgDgAgGgNQgDACgCAEQgCADAAAEQAAAFACAEQACADADACQADACADAAQAEAAADgCQADgCACgDQACgEAAgFQAAgEgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_33.setTransform(-223.325,52.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC554").s().p("AgIAXQgFgCgCgEQgDgDAAgFIAKAAQAAADADACQADACADAAQAEAAACgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgJgDQgDgBgDgCQgCgDAAgEQAAgEACgDQACgDAEgCQAFgCAEAAQAIAAAFAEQAFAEAAAHIgKAAQAAgDgCgCQgCgCgEAAQgDAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIAFABIAJADIAFADQADADAAAFQAAAEgDADQgCADgEACQgEABgFAAQgFAAgEgBg");
	this.shape_34.setTransform(-230.175,52.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDC554").s().p("AAGAdQgGAAgDgDQgEgDAAgHIAAgZIgFAAIAAgIIAFAAIAAgLIAJAAIAAALIALAAIAAAIIgLAAIAAAZQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAEABIAGAAIAAAIg");
	this.shape_35.setTransform(-233.875,52.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EDC554").s().p("AALAfIAAgaQAAgFgDgEQgCgDgGAAQgFAAgDADQgDAEAAAFIAAAaIgJAAIAAg+IAJAAIAAAWQACgDAEgCQAEgBADAAQAGAAAEACQAEACADAFQACAEAAAGIAAAbg");
	this.shape_36.setTransform(-238,52.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EDC554").s().p("AgOAfQgGgEgBgIIAKAAQABAEAEACQADACAEAAQAGAAAEgDQADgEAAgHIAAgHQgCADgEACQgFACgEAAQgGAAgFgDQgFgDgDgGQgDgEAAgHQAAgHADgGQADgFAFgDQAFgDAGAAQAFAAAEACQAEACACAEIAAgIIAKAAIAAAvQAAAGgDAGQgCAFgFADQgGACgHABQgIgBgHgEgAgGgYQgDACgCAEQgCADAAAFQAAAFACAEQACACADACQADACADAAQAEAAADgCQADgCACgCQACgEAAgFQAAgFgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_37.setTransform(-243.725,53.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC554").s().p("AgEAhIAAguIAJAAIAAAugAgDgVQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_38.setTransform(-247.375,51.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDC554").s().p("AAMAYIAAgZQAAgGgEgEQgDgEgFAAQgEAAgDAEQgEAEAAAGIAAAZIgKAAIAAguIAKAAIAAAFQADgDADgBQAEgCADAAQAGAAAEADQAFACACAFQACAEABAHIAAAag");
	this.shape_39.setTransform(-251.1,52.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDC554").s().p("AAGAdQgGAAgDgDQgEgDAAgHIAAgZIgFAAIAAgIIAFAAIAAgLIAJAAIAAALIALAAIAAAIIgLAAIAAAZQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAEABIAGAAIAAAIg");
	this.shape_40.setTransform(-257.325,52.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDC554").s().p("AgIAXQgFgCgCgEQgDgDAAgFIAKAAQAAADADACQADACADAAQAEAAACgBQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgJgDQgDgBgDgCQgCgDAAgEQAAgEACgDQACgDAEgCQAFgCAEAAQAIAAAFAEQAFAEAAAHIgKAAQAAgDgCgCQgCgCgEAAQgDAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIAFABIAJADIAFADQADADAAAFQAAAEgDADQgCADgEACQgEABgFAAQgFAAgEgBg");
	this.shape_41.setTransform(-261.025,52.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_42.setTransform(-265.775,52.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDC554").s().p("AgEAhIAAguIAJAAIAAAugAgDgVQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_43.setTransform(-269.325,51.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EDC554").s().p("AALAYIAAgZQAAgGgDgEQgDgEgFAAQgFAAgDAEQgDAEAAAGIAAAZIgJAAIAAguIAJAAIAAAFQADgDADgBQAEgCADAAQAGAAAEADQAFACACAFQADAEAAAHIAAAag");
	this.shape_44.setTransform(-273,52.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EDC554").s().p("AALAYIAAgZQAAgGgDgEQgDgEgFAAQgFAAgDAEQgDAEAAAGIAAAZIgJAAIAAguIAJAAIAAAFQADgDADgBQAEgCADAAQAFAAAFADQAEACADAFQADAEAAAHIAAAag");
	this.shape_45.setTransform(-278.4,52.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDC554").s().p("AgLAWQgEgDgDgEQgDgFABgGIAAgbIAJAAIAAAZQAAAHADADQADAEAFAAQAFAAADgEQADgDAAgHIAAgZIALAAIAAAuIgLAAIAAgFQgCADgDABQgEACgDAAQgFAAgFgCg");
	this.shape_46.setTransform(-283.8,52.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EDC554").s().p("AgGAhIAAgmIgFAAIAAgIIAFAAIAAgEQABgHAEgEQADgEAKAAIAAAIQgFAAgCACQgBABgBAEIAAAEIAJAAIAAAIIgJAAIAAAmg");
	this.shape_47.setTransform(-287.8,51.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_48.setTransform(-293.725,52.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AAMAfIAAgaQAAgFgEgEQgDgDgFAAQgFAAgDADQgDAEAAAFIAAAaIgKAAIAAg+IAKAAIAAAWQACgDAFgCQADgBAEAAQAFAAAFACQAEACACAFQACAEABAGIAAAbg");
	this.shape_49.setTransform(-298.9,52.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AAGAdQgGAAgDgDQgEgDAAgHIAAgZIgFAAIAAgIIAFAAIAAgLIAJAAIAAALIALAAIAAAIIgLAAIAAAZQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAEABIAGAAIAAAIg");
	this.shape_50.setTransform(-303.075,52.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgMAdQgFgDgDgGQgDgFAAgHQAAgIADgEQADgFAFgDQAFgEAGAAQAEAAAEACQAFACACAEIAAgXIAKAAIAAA+IgKAAIAAgHQgCAEgEACQgEACgFAAQgGAAgFgDgAgGgFQgDACgCADQgCADAAAFQAAAEACAEQACAEADACQADACADAAQAEAAADgCQADgCACgEQACgDAAgFQAAgFgCgDQgCgDgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_51.setTransform(-309.575,52.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AAMAYIAAgZQAAgGgDgEQgDgEgGAAQgEAAgDAEQgEAEAAAGIAAAZIgKAAIAAguIAKAAIAAAFQACgDAEgBQAEgCADAAQAGAAAEADQAFACACAFQACAEAAAHIAAAag");
	this.shape_52.setTransform(-314.9,52.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AgMAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAFgDQAFgDAGAAQAFAAAEACQAEACACAEIAAgHIAKAAIAAAuIgKAAIAAgHQgCADgEACQgFACgEAAQgGAAgFgDgAgGgNQgDACgCAEQgCADAAAEQAAAFACAEQACADADACQADACADAAQAEAAADgCQADgCACgDQACgEAAgFQAAgEgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_53.setTransform(-320.575,52.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AALAYIAAgaQAAgFgDgEQgDgEgFABQgFgBgDAEQgDAEAAAFIAAAaIgJAAIAAguIAJAAIAAAGQADgEADgBQAEgCADAAQAFAAAFACQAEADADAFQADAEAAAGIAAAbg");
	this.shape_54.setTransform(-181.2,42.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgMAWQgEgEgEgFQgDgGAAgHQAAgGADgFQADgGAGgDQAFgDAGAAQAHAAAFADQAGADADAGQADAFAAAGQAAAHgDAGQgEAFgFAEQgFACgHAAQgGAAgGgCgAgGgNQgDACgCAEQgCADAAAEQAAAIAEAEQAEAEAFAAQADAAAEgCQADgBACgEQACgEAAgFQAAgEgCgDQgCgEgDgCQgDgCgEAAQgCAAgEACg");
	this.shape_55.setTransform(-186.55,42.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgIAXQgFgCgCgEQgDgDAAgFIAKAAQAAADADACQADACADAAQAEAAACgBQAAgBABAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgJgDQgDgBgDgCQgCgDAAgEQAAgEACgDQACgDAEgCQAFgCAEAAQAIAAAFAEQAFAEAAAHIgKAAQAAgDgCgCQgCgCgEAAQgDAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIAFABIAJADIAFADQADADAAAFQAAAEgDADQgCADgEACQgEABgFAAQgFAAgEgBg");
	this.shape_56.setTransform(-191.375,42.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgMAVQgFgDgDgFQgDgGAAgHQAAgGADgFQADgGAFgDQAFgDAGAAQAFAAAEACQAEACACAEIAAgHIAKAAIAAAuIgKAAIAAgHQgCADgEACQgFACgEAAQgGAAgFgDgAgGgNQgDACgCAEQgCADAAAEQAAAFACAEQACADADACQADACADAAQAEAAADgCQADgCACgDQACgEAAgFQAAgEgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_57.setTransform(-196.525,42.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_58.setTransform(-201.725,42.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgIAXQgFgCgCgEQgDgDAAgFIAKAAQAAADADACQADACADAAQAEAAACgBQAAgBABAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgJgDQgDgBgDgCQgCgDAAgEQAAgEACgDQACgDAEgCQAFgCAEAAQAIAAAFAEQAFAEAAAHIgKAAQAAgDgCgCQgCgCgEAAQgDAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIAFABIAJADIAFADQADADAAAFQAAAEgDADQgCADgEACQgEABgFAAQgFAAgEgBg");
	this.shape_59.setTransform(-206.475,42.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_60.setTransform(-213.225,42.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AALAgIAAgbQAAgFgCgDQgDgEgGAAQgEAAgDAEQgEADAAAFIAAAbIgKAAIAAg+IAKAAIAAAVQACgDAEgBQAEgDADAAQAGAAAEADQAFADACAEQADAFgBAFIAAAcg");
	this.shape_61.setTransform(-218.4,42);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AAGAdQgGAAgDgDQgEgDAAgHIAAgZIgFAAIAAgIIAFAAIAAgLIAJAAIAAALIALAAIAAAIIgLAAIAAAZQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIAGAAIAAAIg");
	this.shape_62.setTransform(-222.625,42.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgGAhIAAgmIgFAAIAAgIIAFAAIAAgDQABgJAEgDQADgEAJAAIAAAJQgEgBgCACQgBACgBAEIAAADIAJAAIAAAIIgJAAIAAAmg");
	this.shape_63.setTransform(-227.5,41.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgMAWQgEgEgDgFQgEgGAAgHQAAgGAEgFQADgGAFgDQAFgDAGAAQAHAAAFADQAGADADAGQADAFAAAGQAAAHgDAGQgEAFgFAEQgGACgGAAQgGAAgGgCgAgGgNQgDACgCAEQgCADAAAEQAAAIAEAEQAEAEAFAAQAEAAADgCQADgBACgEQACgEAAgFQAAgEgCgDQgCgEgDgCQgDgCgEAAQgCAAgEACg");
	this.shape_64.setTransform(-231.45,42.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgIAXQgFgCgCgEQgDgDAAgFIAKAAQAAADADACQADACADAAQAEAAACgBQAAgBABAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgJgDQgDgBgDgCQgCgDAAgEQAAgEACgDQACgDAEgCQAFgCAEAAQAIAAAFAEQAFAEAAAHIgKAAQAAgDgCgCQgCgCgEAAQgDAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIAFABIAJADIAFADQADADAAAFQAAAEgDADQgCADgEACQgEABgFAAQgFAAgEgBg");
	this.shape_65.setTransform(-238.325,42.775);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AAcAYIAAgaQAAgFgCgEQgEgEgFABQgFgBgEAEQgDAEAAAFIAAAaIgJAAIAAgaQAAgFgDgEQgDgEgGABQgFgBgDAEQgEAEABAFIAAAaIgKAAIAAguIAKAAIAAAGQACgEADgBQAFgCADAAQAGAAAEACQAEADACAFQACgEAFgDQAFgDAFAAQAGAAADACQAFADADAFQACAEAAAGIAAAbg");
	this.shape_66.setTransform(-244.85,42.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AgEAgIAAg+IAJAAIAAA+g");
	this.shape_67.setTransform(-250.225,42);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgEAhIAAguIAJAAIAAAugAgDgVQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_68.setTransform(-252.325,41.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgFAhIAAgmIgGAAIAAgIIAGAAIAAgDQgBgJAFgDQADgEAKAAIAAAJQgFgBgCACQgCACABAEIAAADIAIAAIAAAIIgIAAIAAAmg");
	this.shape_69.setTransform(-254.7,41.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AAGAdQgGAAgDgDQgEgDAAgHIAAgZIgFAAIAAgIIAFAAIAAgLIAJAAIAAALIALAAIAAAIIgLAAIAAAZQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIAGAAIAAAIg");
	this.shape_70.setTransform(-259.575,42.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgIAXQgFgCgCgEQgDgDAAgFIAKAAQAAADADACQADACADAAQAEAAACgBQAAgBABAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgHgDIgJgDQgDgBgDgCQgCgDAAgEQAAgEACgDQACgDAEgCQAFgCAEAAQAIAAAFAEQAFAEAAAHIgKAAQAAgDgCgCQgCgCgEAAQgDAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADACIAFABIAJADIAFADQADADAAAFQAAAEgDADQgCADgEACQgEABgFAAQgFAAgEgBg");
	this.shape_71.setTransform(-263.225,42.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_72.setTransform(-267.975,42.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgHAeQgEgCgDgEIAAAHIgJAAIAAg+IAJAAIAAAXQADgDAEgCQAEgDAFAAQAGAAAFADQAGADACAGQADAEAAAIQAAAHgDAFQgCAGgGADQgFADgGAAQgFAAgEgCgAgGgFQgEACgBADQgDADAAAFQAAAFADADQABAEAEACQADACADAAQAEAAADgCQADgCACgEQACgEAAgEQAAgFgCgDQgCgDgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_73.setTransform(-273.2,42.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_74.setTransform(-280.725,42.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AALAgIAAgbQAAgFgCgDQgDgEgGAAQgEAAgDAEQgEADAAAFIAAAbIgKAAIAAg+IAKAAIAAAVQACgDAEgBQAEgDADAAQAGAAAEADQAFADACAEQADAFgBAFIAAAcg");
	this.shape_75.setTransform(-285.9,42);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAGAdQgGAAgDgDQgEgDAAgHIAAgZIgFAAIAAgIIAFAAIAAgLIAJAAIAAALIALAAIAAAIIgLAAIAAAZQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAIAEABIAGAAIAAAIg");
	this.shape_76.setTransform(-290.125,42.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_77.setTransform(-296.225,42.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AgKAWQgFgEgEgFQgCgGAAgHQAAgGACgGQAEgFAFgDQAFgDAFAAQAJAAAGAEQAGAEACAIIgLAAQgBgEgDgCQgDgCgFAAQgEAAgEAEQgDAFAAAGQAAAIADAEQAEAEAEAAQAJAAADgHIALAAQgDAHgFAEQgGAEgJAAQgFAAgFgCg");
	this.shape_78.setTransform(-301.25,42.775);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAMAYIAAgaQAAgFgDgEQgDgEgGABQgEgBgDAEQgEAEAAAFIAAAaIgKAAIAAguIAKAAIAAAGQACgEAEgBQAEgCADAAQAGAAAEACQAFADACAFQACAEAAAGIAAAbg");
	this.shape_79.setTransform(-306.35,42.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_80.setTransform(-311.625,42.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDC554").s().p("AgEAhIAAguIAJAAIAAAugAgDgVQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_81.setTransform(-315.225,41.875);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDC554").s().p("AgLAYIAAguIAKAAIAAAHQABgEAEgCQADgCAFAAIAAALIgDAAQgFAAgDACQgCADAAAHIAAAYg");
	this.shape_82.setTransform(-317.625,42.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EDC554").s().p("AgLAWQgFgEgDgFQgDgGAAgHQAAgGADgGQADgFAFgDQAFgDAGAAQAHAAAFADQAFADADAFQADAFAAAHIAAAEIgjAAQAAAGAEADQAEADAEAAQAIAAADgGIALAAQgCAGgGAEQgFAEgJAAQgFAAgGgCgAANgDQAAgFgEgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_83.setTransform(-321.925,42.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EDC554").s().p("AgXAjIAAhEIAJAAIAAAHQADgEAEgCQAFgCAEAAQAGAAAFADQAFADADAGQADAFAAAHQAAAHgDAFQgDAFgFADQgFADgGAAQgEAAgFgCQgEgCgDgDIAAAdgAgGgYQgDACgCAEQgCADgBAFQABAFACAEQACACADACQADACADAAQAEAAADgCQADgCACgCQACgEAAgFQAAgFgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_84.setTransform(-327.1,43.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EDC554").s().p("AAJAYIgJgQIgJAQIgKAAIAPgYIgPgXIALAAIAJAQIAJgQIAKAAIgPAXIAPAYg");
	this.shape_85.setTransform(-332.075,42.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EDC554").s().p("AgPAeIAAg7IAfAAIAAAIIgWAAIAAASIAUAAIAAAHIgUAAIAAASIAWAAIAAAIg");
	this.shape_86.setTransform(-336.225,42.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(-345.2,22.6,171.2,36.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAdAdIAAgnQgBgFgDgCQgCgCgFAAQgFAAgEAEQgEADAAAJIAAAgIgJAAIAAgkIgBgIQgDgFgFAAQgFABgFAEQgEAEgBALIAAAdIgJAAIAAg4IAJAAIAAAIIAHgFQAEgEAGAAQAHAAAEAEIAEAFQADgFAEgBQAEgDAGAAQALAAAEAIQACAFAAAIIAAAkg");
	this.shape.setTransform(238.85,54.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIIAGgGQAFgDAGAAQAKAAAGAHQAHAHAAAOQAAASgJAIQgHAFgIAAQgFAAgFgDIgGgGIAAAdgAgMgVQgCAFgBAIQABAHACAEQADAIAJAAQAHAAAEgFQAEgGABgKQAAgHgCgFQgEgJgKAAQgJAAgDAKg");
	this.shape_1.setTransform(231.45,55.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAbQgFgKAAgRQAAgLADgKQAHgRAPAAQAPAAAGAMQAFAJAAARQAAAOgEAKQgHAPgPAAQgNAAgHgMgAgLgVQgEAHAAAPQAAALADAHQAEALAIAAQAHAAAFgGQAEgHAAgRQAAgNgDgIQgEgIgIAAQgIAAgEAIg");
	this.shape_2.setTransform(222.3,53.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgLADgKQAGgRAQAAQAOAAAHAMQAFAJAAARQAAAOgFAKQgGAPgPAAQgNAAgGgMgAgLgVQgEAHAAAPQAAALACAHQAFALAIAAQAHAAAEgGQAFgHAAgRQAAgNgEgIQgCgIgJAAQgIAAgEAIg");
	this.shape_3.setTransform(216.3,53.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAcIAAgMIAKAAIAAAMgAgFgPIAAgMIAKAAIAAAMg");
	this.shape_4.setTransform(212.15,54.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAlQADgVALgVQAIgMAIgKIgpAAIAAgJIAzAAIAAAIIgJAMIgLASIgGASIgEARg");
	this.shape_5.setTransform(207.425,53.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgUQAAgMADgKQAHgTARAAQANAAAFAHQAEAGABAHIgKAAIgDgHQgDgEgHgBQgHAAgFAIQgEAHgBAOQADgFAFgCQAFgDAEAAQAKABAHAGQAHAEAAANQAAAKgGAIQgIAIgMAAQgJAAgIgIgAgJACQgFAEAAAHQAAAIAFAEQAEAGAGgBQAIABADgGQAEgEAAgIQAAgFgEgFQgCgFgJAAQgFAAgFAEg");
	this.shape_6.setTransform(264.9,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAmQAAgKAEgHQADgIALgFIAJgGIAKgGQADgEAAgGQAAgGgDgEQgEgFgHAAQgIAAgFAIQgBAEgBAHIgJAAQAAgKADgGQAHgLAOAAQANAAAHAHQAFAHAAAJQAAAJgGAFQgEAEgKAGIgGAEQgFACgDADQgFAEgBAGIAoAAIAAAJg");
	this.shape_7.setTransform(258.85,39.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgLADgKQAGgRAQAAQAPAAAGAMQAFAJAAARQAAAOgFAKQgGAPgPAAQgNAAgGgMgAgLgVQgEAHAAAPQAAALACAHQAFALAIAAQAHAAAEgGQAFgHAAgRQAAgNgEgIQgCgIgJAAQgIAAgEAIg");
	this.shape_8.setTransform(252.85,39.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgIALgFIAJgGIAJgGQAEgEABgGQgBgGgEgEQgDgFgHAAQgIAAgFAIQgCAEAAAHIgKAAQABgKAEgGQAFgLAPAAQANAAAGAHQAGAHAAAJQAAAJgGAFQgEAEgJAGIgHAEQgFACgDADQgFAEgCAGIApAAIAAAJg");
	this.shape_9.setTransform(246.9,39.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIAAgEIAAgBIAAAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgDAFgFABg");
	this.shape_10.setTransform(239.425,43.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAfQgFgGAAgMIAKAAQAAAIADADQADAHAJgBQAHABAFgEQAEgFAAgGQAAgIgEgDQgGgDgHAAIgCAAIgBAAIAAgHIACAAIACAAQAEAAADgCQAHgDgBgHQABgGgEgDQgFgDgEAAQgJAAgEAGQgCAEAAAGIgJAAQgBgIAEgHQAFgKAPAAQALAAAGAGQAHAEgBALQAAAGgDAFQgCADgEABQAGACADADQADAFAAAGQAAALgGAHQgIAHgMAAQgNAAgHgIg");
	this.shape_11.setTransform(234.9,39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADAmIAAg1IgQAAIAAgHQAKgBADgCQAEgDADgJIAHAAIAABLg");
	this.shape_12.setTransform(228.45,39.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAlQgGgEgBgJIAKAAQABAEACACQADADAGAAQALAAADgIQACgEAAgMQgDAEgEACQgEACgGAAQgJAAgHgGQgHgHAAgOQAAgOAHgIQAHgIAKAAQAGAAAFADIAFAGIAAgHIAJAAIAAAyQAAALgDAGQgGAMgQAAQgJAAgGgEgAgMgWQgCAFAAAIQAAAJAEAFQAEAFAGAAQAKAAAEgKQACgEAAgHQAAgKgEgFQgEgFgHAAQgJAAgEAJg");
	this.shape_13.setTransform(219.775,41.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAVQgCgEAAgIIAAglIAJAAIAAAkQAAAFACADQACAEAHAAQAJAAADgJQACgEAAgHIAAgcIAJAAIAAA3IgJAAIABgIIgFAGQgFAEgHAAQgMAAgEgIg");
	this.shape_14.setTransform(213.925,40.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXAnIgIgYIgdAAIgJAYIgLAAIAehNIAKAAIAdBNgAAMAHIgMghIgLAhIAXAAg");
	this.shape_15.setTransform(207.425,39.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIAAgEIAAgBIAAAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgDAFgFABg");
	this.shape_16.setTransform(199.925,43.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTAVQgCgEAAgIIAAglIAJAAIAAAkQAAAFACADQACAEAHAAQAJAAADgJQACgEAAgHIAAgcIAJAAIAAA3IgJAAIABgIIgFAGQgFAEgHAAQgMAAgEgIg");
	this.shape_17.setTransform(195.375,40.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAnIAAgjQgBgGgBgDQgDgEgHgBQgFAAgEAFQgGADABALIAAAeIgKAAIAAhNIAKAAIAAAdIAGgGQAEgDAGAAQAMAAAFAIQACAGAAAHIAAAkg");
	this.shape_18.setTransform(189.45,39.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAnIAAhEIgbAAIAAgJIA/AAIAAAJIgbAAIAABEg");
	this.shape_19.setTransform(183.15,39.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAXQgGgJgBgNQABgNAGgIQAIgJALAAQAGAAAGADQAFADADAEQADAFABAFIABALIgpAAQABAKAEAFQADAFAHAAQAIAAAEgFQACgDACgEIAJAAIgCAHQgCAEgEADQgDAEgHABIgHABQgKAAgIgHgAAQgEQgBgGgCgDQgDgIgKABQgFgBgFAFQgEAFgBAHIAfAAIAAAAg");
	this.shape_20.setTransform(159,56.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAWQgGgIAAgMQAAgOAHgJQAHgIALAAQAJAAAGAFQAGAFABALIgJAAQgBgFgDgEQgDgDgGgBQgJABgDAIQgDAHAAAHQAAAIAEAGQADAGAHAAQAGAAADgDQAEgEABgGIAJAAQgBAKgHAGQgGAFgKAAQgKAAgHgIg");
	this.shape_21.setTransform(153.375,56.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAdIAAgjQAAgFgCgDQgCgGgIABIgEABQgEABgDADIgDAGIAAAIIAAAdIgKAAIAAg3IAJAAIAAAIQAEgFAEgDQAFgCAFAAQALAAAFAJQACAEAAAIIAAAkg");
	this.shape_22.setTransform(147.65,56.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAXQgIgJABgNQgBgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABALIgpAAQAAAKAFAFQAEAFAGAAQAHAAAFgFQACgDACgEIAJAAIgDAHQgCAEgCADQgFAEgGABIgHABQgKAAgHgHgAAQgEQgBgGgCgDQgDgIgJABQgGgBgEAFQgFAFgBAHIAfAAIAAAAg");
	this.shape_23.setTransform(141.6,56.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAgEgbIAAgLIAJAAIAAALg");
	this.shape_24.setTransform(137.425,55.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAdIAAg3IAJAAIAAAJIAFgHQAEgEAGAAIABAAIACABIAAAKIgCgBIgBAAQgIAAgDAFQgDAEAAAHIAAAfg");
	this.shape_25.setTransform(134.75,56.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSAXQgGgJAAgNQAAgNAGgIQAIgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAALIgnAAQAAAKADAFQAFAFAGAAQAIAAAEgFQADgDAAgEIAKAAIgCAHQgCAEgEADQgEAEgGABIgHABQgKAAgIgHgAAQgEQAAgGgDgDQgEgIgIABQgGgBgFAFQgEAFAAAHIAeAAIAAAAg");
	this.shape_26.setTransform(129.6,56.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAKAAIAAAIIAFgGQAGgDAFAAQAJAAAIAHQAGAHAAAOQAAASgKAIQgFAFgJAAQgFAAgFgDIgFgGIAAAdgAgMgVQgCAFAAAIQAAAHACAEQADAIAJAAQAGAAAFgFQAFgGgBgKQAAgHgBgFQgEgJgKAAQgJAAgDAKg");
	this.shape_27.setTransform(123.75,57.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAOAcIgOgVIgNAVIgMAAIAUgcIgTgbIAMAAIANAUIAMgUIAMAAIgTAbIAUAcg");
	this.shape_28.setTransform(117.9,56.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIA3AAIAAAKIgtAAIAAAXIAqAAIAAAIIgqAAIAAAaIAuAAIAAAKg");
	this.shape_29.setTransform(111.85,55.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAXQgIgJABgNQgBgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABALIgpAAQAAAKAFAFQAEAFAGAAQAHAAAFgFQACgDACgEIAJAAIgDAHQgCAEgCADQgFAEgGABIgHABQgKAAgHgHgAAQgEQgBgGgCgDQgDgIgJABQgGgBgEAFQgFAFgBAHIAfAAIAAAAg");
	this.shape_30.setTransform(102,56.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAWQgGgIAAgMQAAgOAHgJQAHgIALAAQAJAAAGAFQAGAFABALIgJAAQgBgFgDgEQgDgDgGgBQgJABgDAIQgDAHAAAHQAAAIAEAGQADAGAHAAQAGAAADgDQAEgEABgGIAJAAQgBAKgHAGQgGAFgKAAQgKAAgHgIg");
	this.shape_31.setTransform(96.375,56.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVAZQgFgEAAgIQAAgHAFgFQAFgEAIAAIAOgDQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgDQAAgFgDgDQgEgCgFAAQgIAAgDAEQgCADAAAEIgJAAQAAgLAHgEQAGgEAJAAQAJAAAGAEQAGADAAAJIAAAfIABACIADACIABAAIACgBIAAAHIgEABIgDAAQgFAAgCgDIgCgGQgDAEgFADQgEADgHAAQgIAAgFgFgAAGABIgFABIgFABIgIACQgEADAAAFQAAAEADACQADADAEAAQAFAAAEgDQAIgDAAgJIAAgHQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_32.setTransform(90.775,56.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_33.setTransform(86.45,55.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAZQgFgEAAgIQAAgHAFgFQAFgEAIAAIAOgDQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgDQAAgFgDgDQgEgCgFAAQgIAAgDAEQgCADAAAEIgJAAQAAgLAHgEQAGgEAJAAQAJAAAGAEQAGADAAAJIAAAfIABACIADACIABAAIACgBIAAAHIgEABIgDAAQgFAAgCgDIgCgGQgDAEgFADQgEADgHAAQgIAAgFgFgAAGABIgFABIgFABIgIACQgEADAAAFQAAAEADACQADADAEAAQAFAAAEgDQAIgDAAgJIAAgHQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_34.setTransform(82.375,56.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgcAnIAAhNIAiAAQAKAAAGAGQAHAGAAAKQAAAJgGAHQgGAGgLAAIgXAAIAAAhgAgRgCIATAAQAHAAAFgDQAEgDAAgIQAAgIgGgDQgEgCgGAAIgTAAg");
	this.shape_35.setTransform(75.875,55.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSAXQgGgJAAgNQAAgNAGgIQAIgJALAAQAGAAAGADQAFADADAEQADAFABAFIAAALIgnAAQAAAKADAFQAEAFAHAAQAHAAAFgFQACgDABgEIAKAAIgCAHQgCAEgEADQgEAEgGABIgHABQgKAAgIgHgAAQgEQAAgGgDgDQgDgIgKABQgFgBgFAFQgEAFAAAHIAeAAIAAAAg");
	this.shape_36.setTransform(66.05,56.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAnIAAg4IAJAAIAAA4gAgEgbIAAgLIAJAAIAAALg");
	this.shape_37.setTransform(61.875,55.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAcIgVg3IALAAIAOAtIAQgtIAKAAIgVA3g");
	this.shape_38.setTransform(57.975,56.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAWQgHgIAAgNQAAgNAHgJQAHgIALAAQALAAAIAHQAHAIAAAOQAAAMgGAJQgHAJgNAAQgLAAgHgIgAgLgOQgEAHAAAIQAAAJAEAGQADAGAIAAQAJAAAEgHQADgHAAgIQAAgIgCgFQgEgIgKAAQgIAAgDAHg");
	this.shape_39.setTransform(52.225,56.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAbAnIAAgtIAAgIIAAgMIgWBBIgJAAIgXhBIAAADIABAIIAAAJIAAAtIgKAAIAAhNIAPAAIAVBBIAWhBIAPAAIAABNg");
	this.shape_40.setTransform(44.775,55.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_41.setTransform(36.1,55.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAZQgFgEAAgIQAAgHAFgFQAFgEAIAAIAOgDQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgDQAAgFgDgDQgEgCgFAAQgIAAgDAEQgCADAAAEIgJAAQAAgLAHgEQAGgEAJAAQAJAAAGAEQAGADAAAJIAAAfIABACIADACIABAAIACgBIAAAHIgEABIgDAAQgFAAgCgDIgCgGQgDAEgFADQgEADgHAAQgIAAgFgFgAAGABIgFABIgFABIgIACQgEADAAAFQAAAEADACQADADAEAAQAFAAAEgDQAIgDAAgJIAAgHQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_42.setTransform(32.025,56.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAXQgIgJABgNQgBgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABALIgoAAQAAAKADAFQAFAFAGAAQAHAAAFgFQACgDABgEIAKAAIgDAHQgBAEgDADQgFAEgGABIgHABQgKAAgHgHgAAQgEQAAgGgDgDQgEgIgIABQgGgBgEAFQgFAFAAAHIAeAAIAAAAg");
	this.shape_43.setTransform(25.85,56.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAnIgBgDIgBgGIAAgNQgBgIgFgCQgDgCgGAAIgWAAIAAAiIgLAAIAAhNIAjAAQAIAAAGADQALAFAAANQAAAHgDAEQgDAFgFACQAEABADADQACADAAAHIABALIAAAGQABAEADABIAAACgAgUgCIAWAAQAIAAAEgDQAEgDAAgIQAAgIgGgDQgDgCgFAAIgYAAg");
	this.shape_44.setTransform(19.225,55.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAXQgIgJAAgNQAAgNAIgIQAHgJALAAQAGAAAFADQAGADADAEQADAFABAFIABALIgpAAQAAAKAFAFQADAFAHAAQAIAAAEgFQADgDABgEIAJAAIgCAHQgDAEgCADQgEAEgHABIgHABQgKAAgHgHgAAQgEQgBgGgCgDQgDgIgKABQgFgBgEAFQgFAFgBAHIAfAAIAAAAg");
	this.shape_45.setTransform(9.05,56.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAnIAAgkQAAgFgBgDQgDgFgHABQgFAAgFADQgEAFgBAKIAAAeIgJAAIAAhNIAJAAIAAAdIAGgGQAFgDAGAAQAMAAAFAJQACAFAAAGIAAAlg");
	this.shape_46.setTransform(3.1,55.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEAnIAAhEIgbAAIAAgJIA+AAIAAAJIgZAAIAABEg");
	this.shape_47.setTransform(-3.2,55.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC554").s().p("AgbAjQgKgIABgNIAWAAQAAAGACADQAFAEAJAAQAGAAAEgCQAEgCAAgEQAAgDgDgCQgDgCgSgFQgOgDgHgEQgFgFAAgKQAAgMAJgIQAJgIAQAAQAPAAAJAGQAKAGACAPIgWAAQAAgEgCgCQgEgEgIAAQgHAAgCACQgEACAAADQAAAEAEABIAVAGQANADAGAFQAHAHAAAJQAAAMgJAIQgKAIgSAAQgTAAgJgJg");
	this.shape_48.setTransform(160.85,39.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDC554").s().p("AgJANQAHgCACgGQABgDAAgCIgLAAIAAgUIAVAAIAAAQQAAAKgGAHQgFAGgJACg");
	this.shape_49.setTransform(154.925,34.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDC554").s().p("AgXAqIAAhRIAVAAIAAAOQAEgIADgDQAGgFAKAAIABAAIACAAIAAAWIgEAAIgCAAQgNAAgFAIQgBAFAAAJIAAAng");
	this.shape_50.setTransform(149.675,39.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDC554").s().p("AgaAiQgMgKAAgXQAAgVALgLQALgMAQAAQAKAAAJAFQAIADAFAJQAFAHACAKIAAAPIg3AAQAAAMAIAFQAEADAFABQAHAAAEgFQADgBABgEIAWAAQgBAHgHAHQgKAMgTABQgPgBgMgJgAARgHQgBgJgEgEQgFgFgHAAQgGAAgFAFQgEAEAAAJIAgAAIAAAAg");
	this.shape_51.setTransform(141.95,39.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDC554").s().p("AgaA1QgKgGgBgNIAYAAQABAEACACQADADAHAAQAMAAAEgIQACgFAAgMIAAgFQgDAGgDACQgHAFgJAAQgQAAgJgLQgKgMAAgSQAAgSAJgMQAKgNAQAAQAFAAAFACQAIAEAFAIIAAgMIAVAAIAABOQAAAPgGAIQgJAOgZAAQgQAAgKgGgAgOgcQgCAFAAAIQAAAIACAGQAEAJALAAQAHAAAFgGQAGgFAAgMQAAgMgFgGQgFgGgJAAQgKAAgEALg");
	this.shape_52.setTransform(132.725,41.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EDC554").s().p("AAPAqIAAgxQAAgGgBgEQgEgGgIAAQgKAAgEAJQgDAFAAAIIAAArIgVAAIAAhRIAVAAIAAAMQAEgGAEgDQAGgFAJAAQANAAAIAHQAIAGAAAQIAAA2g");
	this.shape_53.setTransform(123.575,39.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AgKA4IAAhSIAVAAIAABSgAgKgjIAAgUIAVAAIAAAUg");
	this.shape_54.setTransform(116.675,38.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgbAjQgJgIAAgNIAVAAQABAGADADQAEAEAJAAQAHAAADgCQAEgCAAgEQAAgDgDgCQgDgCgSgFQgPgDgFgEQgGgFAAgKQAAgMAJgIQAJgIAQAAQAOAAALAGQAJAGACAPIgWAAQgBgEgCgCQgDgEgIAAQgHAAgCACQgDACgBADQABAEADABIAVAGQANADAGAFQAHAHgBAJQABAMgKAIQgJAIgTAAQgSAAgJgJg");
	this.shape_55.setTransform(110.2,39.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgbAjQgKgIAAgNIAXAAQAAAGADADQADAEAKAAQAHAAADgCQAEgCAAgEQAAgDgDgCQgDgCgTgFQgNgDgHgEQgFgFAAgKQAAgMAJgIQAJgIAQAAQAOAAAKAGQAKAGABAPIgVAAQgBgEgBgCQgEgEgIAAQgHAAgDACQgCACAAADQAAAEACABIAWAGQANADAHAFQAFAHABAJQgBAMgIAIQgJAIgUAAQgSAAgJgJg");
	this.shape_56.setTransform(101.6,39.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgfAfQgKgNAAgSQAAgRAKgNQALgNAUAAQAWAAAJANQALANAAARQAAASgLANQgJANgWAAQgUAAgLgNgAgOgSQgEAHAAALQAAAMAEAHQAGAHAIAAQAJAAAGgHQAEgHAAgMQAAgLgEgHQgGgHgJAAQgIAAgGAHg");
	this.shape_57.setTransform(92.65,39.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgXAqIAAhRIAVAAIAAAOQAEgIADgDQAGgFAKAAIABAAIACAAIAAAWIgEAAIgCAAQgNAAgFAIQgBAFAAAJIAAAng");
	this.shape_58.setTransform(85.325,39.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgkArQgPgQAAgaQAAgaAPgRQAPgQAXAAQAWAAANALQAMALACAQIgXAAQgCgLgLgFQgFgDgHAAQgNAAgIALQgJAKAAATQAAAVAJAIQAKAJALAAQALAAAIgHQAHgHACgLIgaAAIAAgSIAvAAIAAA8IgQAAIgCgPQgHAJgFADQgJAGgNgBQgWAAgOgPg");
	this.shape_59.setTransform(75.725,38.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgHAwQgDgEgBgIIAAgyIgLAAIAAgPIALAAIAAgXIAVAAIAAAXIANAAIAAAPIgNAAIAAArQAAAFABABQACACAGAAIACAAIACgBIAAARIgKAAIgCAAQgNAAgFgFg");
	this.shape_60.setTransform(62.9,38.4771);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgeAlQgIgGABgMQAAgPALgGQAHgDAMgCIAHgBIAIgCQAFgCgBgEQABgFgEgCQgEgCgFAAQgIAAgDAEQgCACgBAFIgVAAQABgKAFgIQAIgKAVgBQANABALAFQAKAGAAAOIAAAlIAAAJIACAHIACACIAAADIgXAAIgBgEIgBgGIgKAIQgGAFgJAAQgLgBgHgGgAAJADIgHABIgDACQgHABgDACQgFACAAAHQAAAFADADQADACAEAAQAHAAAGgEQAFgEAAgLIAAgIg");
	this.shape_61.setTransform(56.2,39.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgHAwQgDgEgBgIIAAgyIgLAAIAAgPIALAAIAAgXIAVAAIAAAXIANAAIAAAPIgNAAIAAArQAAAFABABQACACAGAAIACAAIACgBIAAARIgKAAIgCAAQgNAAgFgFg");
	this.shape_62.setTransform(44.9,38.4771);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgaAiQgMgKAAgXQAAgVALgLQALgMAQAAQAKAAAJAFQAIADAFAJQAFAHABAKIABAPIg3AAQAAAMAIAFQAEADAFABQAHAAAEgFQADgBABgEIAWAAQgBAHgHAHQgKAMgTABQgPgBgMgJgAARgHQgBgJgFgEQgEgFgHAAQgGAAgEAFQgFAEAAAJIAgAAIAAAAg");
	this.shape_63.setTransform(38.1,39.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AAgA4IAAhLIAAgJIAAgJIgVBdIgVAAIgVhdIAAAJIAAAJIAABLIgWAAIAAhvIAiAAIATBXIAUhXIAiAAIAABvg");
	this.shape_64.setTransform(27.475,38.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgaAiQgMgKAAgXQAAgVALgLQALgMAQAAQAKAAAJAFQAIADAFAJQAFAHACAKIAAAPIg3AAQAAAMAIAFQAEADAFABQAHAAAEgFQADgBABgEIAWAAQgBAHgHAHQgKAMgTABQgPgBgMgJgAARgHQgBgJgEgEQgFgFgHAAQgGAAgFAFQgEAEAAAJIAgAAIAAAAg");
	this.shape_65.setTransform(12.35,39.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AARA4IgNhAIgEgWIgDAWIgOBAIgVAAIgghvIAZAAIAOA/IAEASIADgRIAMhAIAYAAIANA/IAEASIADgRIAPhAIAYAAIggBvg");
	this.shape_66.setTransform(1.125,38.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FR11, new cjs.Rectangle(-8.1,30.2,277.70000000000005,33.099999999999994), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AADAHQADgBAAgEIABgDIgEAAIAAgIIAIAAIAAAIQAAADgCAEQgCAEgEAAgAgKAHQADgBABgEIABgDIgFAAIAAgIIAJAAIAAAIQAAADgCAEQgCAEgFAAg");
	this.shape.setTransform(49.425,8.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAdIAAgIIAGAAIAAAIgAgBAPIgCgYIAAgTIAHAAIAAATIgCAYg");
	this.shape_1.setTransform(47.2,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAEACQAFACACADQACADABAFIAAAIIgdAAQAAAGACAEQADAEAFAAQAGAAADgEQACgCAAgCIAIAAIgCAFIgEAEQgDAEgEABIgGAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_2.setTransform(43.6,11.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMASQgEgEgBgGIAHAAQAAADACACQADAEAFgBQAEABAEgCQADgCAAgEQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgGgCIgFgCIgIgCQgEgDAAgFQAAgGAEgEQAEgDAHAAQAJgBAFAHQACADAAAEIgGAAIgCgEQgDgDgFAAQgEAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAADADACIAEACIAEABIAKACQAFADAAAGQAAAFgFAEQgEAFgJAAQgIAAgEgFg");
	this.shape_3.setTransform(39.375,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPATQgEgEAAgFQAAgGAEgDQAEgDAGAAIAKgCQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIABgDQAAgDgDgCQgCgBgFAAQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIgGAAQAAgHAEgDQAGgDAGAAQAGAAAFACQAFADgBAGIAAAXIABACIACABIABAAIABAAIAAAFIgCABIgDAAQgEAAgBgDIgBgEIgGAFQgDACgFAAQgGAAgEgDgAAFABIgEAAIgEABIgFACQgDABgBAFQABADACABQACACADAAQAEAAADgCQAFgCABgHIAAgFIgEABg");
	this.shape_4.setTransform(35.2,11.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAdIAAgaQAAgEgBgCQgCgEgFAAQgEAAgDADQgEADAAAHIAAAXIgHAAIAAg5IAHAAIAAAWIAFgFQADgCAEAAQAJAAAEAGQABADAAAGIAAAbg");
	this.shape_5.setTransform(30.625,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgJQAAgKAFgGQAFgGAIAAQAHAAAFADQAEAEABAIIgHAAQgBgEgCgCQgCgDgFAAQgGAAgDAHQgCAEAAAFQABAHACAEQADAEAEAAQAFAAACgCQADgDABgFIAHAAQgBAJgFAEQgFADgHAAQgHAAgFgGg");
	this.shape_6.setTransform(26.45,11.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAVIAAgoIAGAAIAAAGIADgEQAEgDAEgBIABAAIABAAIAAAIIgBAAIgBAAQgGAAgCAEQgCADAAAEIAAAXg");
	this.shape_7.setTransform(23.275,11.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAQQgCgEAAgFIAAgbIAIAAIAAAbIABAEQABAFAFAAQAHAAACgHQACgEAAgFIAAgUIAHAAIAAAoIgHAAIAAgFIgDADQgEADgFAAQgJAAgDgFg");
	this.shape_8.setTransform(19.425,11.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAFgFQAEgCADAAQAIAAAFAGQAFAFAAAKQAAANgIAFQgEAFgGAAQgEAAgDgCIgFgFIAAAWgAgJgQQgCAFAAAGQAAAEACACQACAHAHAAQAFAAADgEQADgEAAgIQAAgFgBgDQgDgHgHAAQgHAAgCAHg");
	this.shape_9.setTransform(15.125,12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACACADQADADABAFIAAAIIgeAAQABAGADAEQACAEAFAAQAGAAADgEQACgCAAgCIAIAAIgCAFIgEAEQgDAEgFABIgFAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEgBAFIAXAAIAAAAg");
	this.shape_10.setTransform(8.3,11.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_11.setTransform(5.2,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAeIAAg6IAHAAIAAAGIAFgFQAEgCADAAQAIAAAFAGQAFAFAAAKQAAANgIAFQgEAFgGAAQgEAAgDgCIgFgFIAAAWgAgJgQQgCAFAAAGQAAAEACACQACAHAHAAQAFAAADgEQADgEAAgIQAAgFgBgDQgDgHgHAAQgHAAgCAHg");
	this.shape_12.setTransform(2.175,12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVAVIAAgcQAAgEgCgCQgCgBgDAAQgEAAgEACQgDAEAAAGIAAAXIgGAAIAAgaIgBgHQgBgDgFAAQgEABgDADQgDADAAAIIAAAVIgIAAIAAgoIAHAAIAAAFQADgDADgBQADgDAEAAQAGAAACADIADAEQACgEADgBIAHgCQAJABADAFQABAEABAFIAAAbg");
	this.shape_13.setTransform(-3.5,11.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAHAAIAAApgAgDgUIAAgIIAHAAIAAAIg");
	this.shape_14.setTransform(-7.775,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMASQgEgEgBgGIAHAAQAAADACACQADAEAFgBQAEABAEgCQADgCAAgEQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgGgCIgFgCIgIgCQgEgDAAgFQAAgGAEgEQAEgDAHAAQAJgBAFAHQACADAAAEIgGAAIgCgEQgDgDgFAAQgEAAgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAADADACIAEACIAEABIAKACQAFADAAAGQAAAFgFAEQgEAFgJAAQgIAAgEgFg");
	this.shape_15.setTransform(-10.675,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAGgGQAFgGAHAAQAFAAAEACQAFACABADQADADAAAFIABAIIgeAAQAAAGADAEQADAEAFAAQAFAAAEgEQACgCABgCIAGAAIgCAFIgDAEQgDAEgEABIgGAAQgHAAgGgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEgBAFIAXAAIAAAAg");
	this.shape_16.setTransform(-17.2,11.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAKAVIAAgZQAAgEgBgCQgCgFgFAAIgDABQgDABgCADIgCAEIgBAGIAAAVIgHAAIAAgoIAHAAIAAAFQADgEADgBQADgCADAAQAJABAEAFQABAEAAAGIAAAag");
	this.shape_17.setTransform(-21.625,11.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAQQgFgFgBgKQABgKAFgGQAFgGAIAAQAIAAAGAFQAGAFAAALQgBAJgFAHQgEAGgKABQgJAAgEgHgAgJgLQgDAFAAAGQAAAIADAEQAEAFAFgBQAHABADgGQACgFAAgGQAAgFgCgFQgDgFgHAAQgFAAgEAEg");
	this.shape_18.setTransform(-26.1,11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAdIgCAAIAAgGIADAAIACAAIACAAIACgCIABgDIACgEIgPgrIAIAAIAKAhIALghIAIAAIgGATIgHAQIgIAUQgCAEgGAAg");
	this.shape_19.setTransform(-32.525,12.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAQQgEgFAAgKQAAgKAEgGQAGgGAIAAQAIAAAGAFQAGAFgBALQAAAJgEAHQgGAGgJABQgIAAgGgHgAgIgLQgDAFAAAGQAAAIADAEQACAFAGgBQAHABACgGQADgFAAgGQAAgFgCgFQgDgFgHAAQgGAAgCAEg");
	this.shape_20.setTransform(-36.85,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAlIgCAAIAAgGIAGgBIAAgEIAAguIAHAAIAAAvQAAAFgBACQgDADgGAAgAAAgcIAAgIIAHAAIAAAIg");
	this.shape_21.setTransform(-40.25,11.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAKAVIAAgZQAAgEgBgCQgCgFgFAAIgDABQgDABgCADIgCAEIgBAGIAAAVIgHAAIAAgoIAHAAIAAAFQADgEADgBQADgCADAAQAJABAEAFQABAEAAAGIAAAag");
	this.shape_22.setTransform(-43.075,11.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAdIAAg5IApAAIAAAHIgiAAIAAASIAfAAIAAAGIgfAAIAAATIAiAAIAAAHg");
	this.shape_23.setTransform(-47.825,10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_24.setTransform(68.6,3.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMATQgEgFgBgGIAHAAQAAAEACABQADAEAFAAQAEAAAEgCQADgCAAgDQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgGgCIgFgBIgIgCQgEgDAAgFQAAgGAEgDQAEgFAHAAQAJAAAFAHQACADAAAEIgGAAIgCgFQgDgCgFAAQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAACADACIAEABIAEABIAKADQAFADAAAGQAAAFgFAFQgEADgJAAQgIAAgEgDg");
	this.shape_25.setTransform(65.475,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAEAbQgEAAgBgCQgCgDAAgEIAAgbIgGAAIAAgFIAGAAIAAgMIAGAAIAAAMIAHAAIAAAFIgHAAIAAAbQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIACAAIABAAIACAAIAAAGIgDAAg");
	this.shape_26.setTransform(62.325,1.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPATQgEgEAAgFQAAgGAEgDQAEgDAGAAIAKgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIABgDQAAgDgDgCQgCgBgFAAQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIgGAAQAAgHAEgDQAGgDAGAAQAGAAAFACQAFADgBAGIAAAXIABACIACABIABAAIABAAIAAAFIgCABIgDAAQgEAAgBgDIgBgEIgGAFQgDACgFAAQgGAAgEgDgAAFABIgEAAIgEABIgFACQgDABgBAFQABADACABQACACADAAQAEAAADgCQAFgCABgHIAAgFIgEABg");
	this.shape_27.setTransform(59.05,2.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAGgGQAFgGAHAAQAFAAAEACQAEACADADQACADAAAFIABAIIgdAAQAAAGACAEQADAEAFAAQAFAAAEgEQACgCAAgCIAHAAIgBAFIgEAEQgDAEgEABIgGAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgEAAgDADQgDAEAAAFIAWAAIAAAAg");
	this.shape_28.setTransform(54.5,2.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMATQgEgFgBgGIAHAAQAAAEACABQADAEAFAAQAEAAAEgCQADgCAAgDQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgGgCIgFgBIgIgCQgEgDAAgFQAAgGAEgDQAEgFAHAAQAJAAAFAHQACADAAAEIgGAAIgCgFQgDgCgFAAQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAACADACIAEABIAEABIAKADQAFADAAAGQAAAFgFAFQgEADgJAAQgIAAgEgDg");
	this.shape_29.setTransform(50.275,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAWIAAgpIAGAAIAAAHIADgGQAEgCAEAAIABAAIABAAIAAAHIgBAAIgBAAQgGAAgCAEQgCACAAAFIAAAYg");
	this.shape_30.setTransform(44.975,1.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAQQgCgDAAgGIAAgbIAIAAIAAAbIABAFQABAEAFAAQAHgBACgGQACgEAAgFIAAgUIAHAAIAAApIgHAAIAAgGIgDADQgEAEgFAAQgJgBgDgFg");
	this.shape_31.setTransform(41.075,2.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOARQgEgHAAgJQAAgKAEgGQAGgGAIgBQAIABAGAFQAFAGABAKQAAAJgGAHQgEAGgKAAQgJAAgFgFgAgIgLQgEAGAAAGQAAAGAEAFQADAFAFAAQAHAAADgGQACgFAAgGQAAgFgCgEQgDgGgHAAQgFAAgDAEg");
	this.shape_32.setTransform(36.65,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAdIgCAAIAAgGIADAAIACAAIACAAIACgCIABgDIACgEIgPgrIAIAAIAKAhIALghIAIAAIgGATIgHAQIgIAUQgCAEgGAAg");
	this.shape_33.setTransform(32.425,2.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAJAdIgNgVIgFAFIAAAQIgHAAIAAg5IAHAAIAAAgIARgQIAJAAIgQAOIARAbg");
	this.shape_34.setTransform(26.4,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgJQAAgKAFgGQAGgGAHAAQAHAAAEADQAFAEABAIIgHAAQgBgEgCgCQgCgDgFAAQgGAAgCAHQgCAEgBAFQAAAHADAEQADAEAFAAQAEAAACgCQADgDABgFIAHAAQgBAJgFAEQgEADgIAAQgIAAgEgGg");
	this.shape_35.setTransform(22.15,1.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAHAAIAAApgAgDgUIAAgIIAHAAIAAAIg");
	this.shape_36.setTransform(19.225,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAdIAAg5IAZAAQAHAAAFAEQAEAFAAAHQABAHgFAFQgEAEgIAAIgSAAIAAAZgAgNgBIAOAAQAGAAADgDQAEgBAAgHQAAgGgFgCIgIgBIgOAAg");
	this.shape_37.setTransform(15.8,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_38.setTransform(9.6,3.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMATQgEgFgBgGIAHAAQAAAEACABQADAEAFAAQAEAAAEgCQADgCAAgDQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgGgCIgFgBIgIgCQgEgDAAgFQAAgGAEgDQAEgFAHAAQAJAAAFAHQACADAAAEIgGAAIgCgFQgDgCgFAAQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAACADACIAEABIAEABIAKADQAFADAAAGQAAAFgFAFQgEADgJAAQgIAAgEgDg");
	this.shape_39.setTransform(6.525,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAIAVIgIggIgHAgIgIAAIgMgpIAIAAIAIAgIAIggIAHAAIAIAgIAJggIAHAAIgMApg");
	this.shape_40.setTransform(1.525,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNARQgFgHgBgJQABgKAFgGQAFgGAIgBQAIABAGAFQAGAGAAAKQgBAJgFAHQgEAGgKAAQgJAAgEgFgAgJgLQgDAGAAAGQAAAGADAFQAEAFAFAAQAHAAADgGQACgFAAgGQAAgFgCgEQgDgGgHAAQgFAAgEAEg");
	this.shape_41.setTransform(-3.6,2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKAdIAAgbQAAgDgBgDQgCgDgFAAQgEAAgDADQgEADAAAIIAAAWIgHAAIAAg5IAHAAIAAAWIAFgFQADgCAEAAQAJAAAEAGQABAEAAAFIAAAbg");
	this.shape_42.setTransform(-8.075,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMATQgEgFgBgGIAHAAQAAAEACABQADAEAFAAQAEAAAEgCQADgCAAgDQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgGgCIgFgBIgIgCQgEgDAAgFQAAgGAEgDQAEgFAHAAQAJAAAFAHQACADAAAEIgGAAIgCgFQgDgCgFAAQgEAAgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAACADACIAEABIAEABIAKADQAFADAAAGQAAAFgFAFQgEADgJAAQgIAAgEgDg");
	this.shape_43.setTransform(-12.275,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgNAZQgFgFgBgIIAIAAQABAHAFACIAFABQAGAAADgEQADgEAAgFQAAgFgEgEQgDgCgFAAQgDAAgCACQgDAAgCACIgGAAIAEgdIAcAAIAAAHIgWAAIgDAPIAEgCQADgBADAAQAHgBAGAGQAFAEABAHQAAAIgGAHQgEAFgLAAQgGAAgGgDg");
	this.shape_44.setTransform(-18.8,1.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAWIAAgpIAGAAIAAAHIADgGQAEgCAEAAIABAAIABAAIAAAHIgBAAIgBAAQgGAAgCAEQgCACAAAFIAAAYg");
	this.shape_45.setTransform(-24.325,1.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOARQgEgHAAgJQAAgKAEgGQAGgGAIgBQAIABAGAFQAFAGABAKQAAAJgGAHQgEAGgKAAQgJAAgFgFgAgIgLQgEAGAAAGQAAAGAEAFQADAFAFAAQAHAAADgGQACgFAAgGQAAgFgCgEQgDgGgHAAQgFAAgDAEg");
	this.shape_46.setTransform(-28.15,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOAXQgFgFAAgIIAIAAQAAAGACACQACAEAHABQAFAAAEgDQADgEAAgEQAAgGgEgCQgDgCgFAAIgCAAIgBAAIAAgGIABABIACAAQADgBADgBQAEgCAAgGQAAgEgDgDQgDgCgEAAQgGABgDAEQgBADAAAEIgHAAQAAgFACgFQAEgIALAAQAIAAAFAEQAEADAAAIQAAAFgCAEIgFACQAFACACADQADADAAAFQAAAIgGAFQgFAFgJAAQgKAAgEgGg");
	this.shape_47.setTransform(-34.875,1.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAGgGQAFgGAHAAQAFAAAEACQAFACABADQADADAAAFIABAIIgeAAQAAAGADAEQADAEAFAAQAFAAAEgEQACgCABgCIAGAAIgCAFIgDAEQgDAEgFABIgFAAQgHAAgGgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEgBAFIAXAAIAAAAg");
	this.shape_48.setTransform(-41.5,2.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMATQgEgFgBgGIAHAAQAAAEACABQADAEAFAAQAEAAAEgCQADgCAAgDQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBIgGgCIgFgBIgIgCQgEgDAAgFQAAgGAEgDQAEgFAHAAQAJAAAFAHQACADAAAEIgGAAIgCgFQgDgCgFAAQgEAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAACADACIAEABIAEABIAKADQAFADAAAGQAAAFgFAFQgEADgJAAQgIAAgEgDg");
	this.shape_49.setTransform(-45.725,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOARQgEgHAAgJQAAgKAEgGQAGgGAIgBQAIABAGAFQAFAGAAAKQAAAJgEAHQgGAGgJAAQgIAAgGgFgAgIgLQgDAGAAAGQAAAGADAFQADAFAFAAQAHAAACgGQADgFAAgGQAAgFgCgEQgDgGgHAAQgFAAgDAEg");
	this.shape_50.setTransform(-50,2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOARQgEgHAAgJQAAgKAEgGQAGgGAIgBQAIABAGAFQAFAGAAAKQAAAJgEAHQgGAGgJAAQgIAAgGgFgAgIgLQgDAGAAAGQAAAGADAFQADAFAFAAQAHAAACgGQADgFAAgGQAAgFgCgEQgDgGgHAAQgFAAgDAEg");
	this.shape_51.setTransform(-54.5,2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAKAdIAAgbQAAgDgBgDQgCgDgFAAQgEAAgDADQgEADAAAIIAAAWIgHAAIAAg5IAHAAIAAAWIAFgFQADgCAEAAQAJAAAEAGQABAEAAAFIAAAbg");
	this.shape_52.setTransform(-58.925,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAZQgIgJgBgQQAAgMAHgJQAHgIAMgBQALABAGAFQAGAGAAAIIgHAAQgBgGgEgDQgEgEgHAAQgHAAgFAHQgFAGgBALQAAAKAFAHQAFAFAIAAQAJABAEgHQADgDAAgGIAIAAQAAAJgHAGQgGAHgMAAQgJAAgHgFg");
	this.shape_53.setTransform(-64.1,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AADAKIAAgIQAAgDACgEQACgEAEAAIAAAEQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABIgBAEIAAAAIAAABIAEAAIAAAIgAgKAKIAAgIQAAgEADgEQACgDAEAAIAAAEQgDAAgBADIgBADIAAAAIAAABIAFAAIAAAIg");
	this.shape_54.setTransform(-68.275,-0.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AAGAKQAGgBACgFIABgEIgJAAIAAgQIAQAAIAAANQAAAHgEAGQgEAFgIACgAgVAKQAGgBACgFQABgCAAgCIgJAAIAAgQIARAAIAAANQAAAIgFAFQgEAFgIACg");
	this.shape_55.setTransform(86.725,-15.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AgIAsIAAgSIARAAIAAASgAgEATIgEgnIAAgXIARAAIAAAXIgFAng");
	this.shape_56.setTransform(81.875,-12.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgVAcQgHgGAAgKIARAAQAAAEACACQADADAIAAQAFAAADgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgBgOgEQgLgDgFgDQgEgEAAgHQAAgJAHgHQAHgGAMAAQALAAAIAFQAIAFABALIgRAAIgCgFQgDgDgGAAQgFAAgCACQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABABAAAAQAAABABAAQAAABABAAQACABAOADQAKADAGAEQAEAEAAAIQAAAJgHAGQgHAGgPAAQgOAAgHgGg");
	this.shape_57.setTransform(76.175,-11.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgVAcQgHgGAAgKIARAAQAAAEACACQADADAIAAQAFAAADgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgOgEQgLgDgFgDQgEgEAAgHQAAgJAHgHQAHgGAMAAQALAAAIAFQAIAFABALIgRAAIgCgFQgDgDgGAAQgFAAgCACQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABABAAAAQAAABABAAQAAABABAAQACABAOADQAKADAGAEQAEAEAAAIQAAAJgHAGQgHAGgPAAQgOAAgHgGg");
	this.shape_58.setTransform(69.475,-11.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgYAdQgFgFAAgJQAAgMAJgEQAFgDAKgCIAFAAIAGgBQAEgCAAgEQAAgEgDgBQgDgBgEAAQgGAAgDADQgBABgBAFIgQAAQAAgJAFgGQAGgIAQAAQAKAAAIAEQAIAEAAAMIAAAdIABAHQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIACABIAAADIgSAAIgBgEIgBgDIgIAGQgEADgHAAQgJAAgGgFgAAGACIgEABIgDABQgFABgCACQgEACAAAEQAAAFACACQACACAEAAQAEAAAFgDQAEgDABgJIAAgGg");
	this.shape_59.setTransform(62.825,-11.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgeAuIAAhZIAQAAIAAAJQADgEADgCQAGgFAGAAQALAAAIAJQAIAIAAAQQAAAQgIAJQgHAJgMAAQgHAAgFgEQgDgCgCgEIAAAigAgNgVQgBAEAAAIQAAAKAGAEQADADAFAAQAGAAAEgFQAEgFAAgJQAAgHgDgGQgEgGgHAAQgJAAgEAJg");
	this.shape_60.setTransform(55.9,-10.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AALAgIgLgTIgLATIgUAAIAWggIgVgfIAUAAIALATIAKgTIAUAAIgVAfIAWAgg");
	this.shape_61.setTransform(48.7,-11.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgUAaQgKgHABgSQAAgRAIgIQAIgJANAAQAIAAAHADQAFADAFAGQAEAGABAIIABALIgsAAQABAKAFAEQAEADADgBQAGAAADgCIAEgFIAQAAQAAAGgFAGQgJAJgPAAQgLAAgJgIgAANgGQgBgGgDgEQgEgDgFAAQgFAAgEADQgCAEgBAGIAZAAIAAAAg");
	this.shape_62.setTransform(42,-11.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgIAsIAAhXIAQAAIAABXg");
	this.shape_63.setTransform(36.95,-12.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgeAsIAAhXIA9AAIAAAQIgqAAIAAAUIAlAAIAAAOIglAAIAAAlg");
	this.shape_64.setTransform(31.9,-12.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AAKAgIgKguIgJAuIgSAAIgSg/IASAAIAKAtIAJgtIARAAIAJAtIAKgtIASAAIgTA/g");
	this.shape_65.setTransform(19.825,-11.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgVAaQgIgHgBgSQAAgRAJgIQAIgJANAAQAIAAAGADQAHADAEAGQADAGACAIIABALIgsAAQAAAKAHAEQADADAEgBQAFAAADgCIAEgFIARAAQgBAGgGAGQgHAJgPAAQgMAAgKgIgAANgGQAAgGgEgEQgEgDgFAAQgFAAgDADQgEAEgBAGIAaAAIAAAAg");
	this.shape_66.setTransform(11.8,-11.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAMAhIAAgmQAAgGgCgCQgCgFgHAAQgIAAgDAHQgBAEAAAGIAAAiIgRAAIAAhAIAQAAIAAAKQADgFADgCQAFgEAHAAQAKAAAHAGQAGAFAAAMIAAAqg");
	this.shape_67.setTransform(4.775,-11.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgSAhIAAhAIARAAIAAAMQACgGADgDQAFgEAIAAIAAAAIACAAIAAARIgDAAIgCAAQgKAAgEAHQgBAEAAAGIAAAfg");
	this.shape_68.setTransform(-4.375,-11.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgaAXQgCgGAAgLIAAgmIARAAIAAAmQAAAFACADQACAFAHAAQAHAAADgHQACgDAAgHIAAgiIARAAIAABAIgRAAIAAgJIgBABIgCADQgDADgFACQgCABgFAAQgPAAgFgKg");
	this.shape_69.setTransform(-10.75,-11.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgYAYQgIgKAAgOQAAgNAIgKQAIgKAQAAQARAAAHAKQAJAKAAANQAAAOgJAKQgHAKgRAAQgQAAgIgKgAgLgOQgDAFAAAJQAAAKADAFQAEAFAHAAQAHAAAEgFQAEgFAAgKQAAgJgEgFQgEgFgHAAQgHAAgEAFg");
	this.shape_70.setTransform(-18.1,-11.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgFAlQgDgDAAgGIAAgnIgJAAIAAgMIAJAAIAAgSIAQAAIAAASIAKAAIAAAMIgKAAIAAAhQAAAEABABQABABAFAAIABAAIACAAIAAANIgIAAIgCABQgJAAgEgFg");
	this.shape_71.setTransform(-27.225,-12.2477);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgZAXQgDgGAAgLIAAgmIARAAIAAAmQAAAFACADQACAFAHAAQAHAAADgHQACgDAAgHIAAgiIARAAIAABAIgRAAIAAgJIgBABIgCADQgEADgEACQgCABgFAAQgPAAgEgKg");
	this.shape_72.setTransform(-32.9,-11.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgYAYQgIgKAAgOQAAgNAIgKQAIgKAQAAQAQAAAJAKQAIAKAAANQAAAOgIAKQgJAKgQAAQgQAAgIgKgAgLgOQgDAFAAAJQAAAKADAFQAEAFAHAAQAHAAAEgFQAEgFAAgKQAAgJgEgFQgEgFgHAAQgHAAgEAFg");
	this.shape_73.setTransform(-40.25,-11.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgIApQgDgCgDgEIAAAIIgQAAIAAhWIAQAAIAAAfIAHgHQAFgDAGAAQANAAAHAJQAHAJAAAOQAAAPgHAKQgHAJgNAAQgHAAgFgDgAgMAAQgCAEAAAHQAAAJADAFQAEAGAHAAQAGAAAEgGQADgFAAgJQAAgGgBgFQgEgHgIAAQgJAAgDAHg");
	this.shape_74.setTransform(-47.475,-12.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AgYAdQgFgFAAgJQAAgMAJgEQAFgDAKgCIAFAAIAGgBQAEgCAAgEQAAgEgDgBQgDgBgEAAQgGAAgDADQgBABgBAFIgQAAQAAgJAFgGQAGgIAQAAQAKAAAIAEQAIAEAAAMIAAAdIABAHQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABIACABIAAADIgSAAIgBgEIgBgDIgIAGQgEADgHAAQgJAAgGgFgAAGACIgEABIgDABQgFABgCACQgEACAAAEQAAAFACACQACACAEAAQAEAAAFgDQAEgDABgJIAAgGg");
	this.shape_75.setTransform(-54.675,-11.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDC554").s().p("AAJAsIgOgcIgHAHIAAAVIgRAAIAAhXIARAAIAAAuIAUgWIAVAAIgXAXIAYAog");
	this.shape_76.setTransform(-64.375,-12.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EDC554").s().p("AgVAcQgHgGAAgKIARAAQAAAEACACQADADAIAAQAFAAADgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgOgEQgLgDgFgDQgEgEAAgHQAAgJAHgHQAHgGAMAAQALAAAIAFQAIAFABALIgRAAIgCgFQgDgDgGAAQgFAAgCACQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQABABAAAAQAAABABAAQAAABABAAQACABAOADQAKADAGAEQAEAEAAAIQAAAJgHAGQgHAGgPAAQgOAAgHgGg");
	this.shape_77.setTransform(-71.475,-11.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC554").s().p("AAWAsIgGgSIgfAAIgGASIgTAAIAfhXIATAAIAfBXgAALAKIgLghIgKAhIAVAAg");
	this.shape_78.setTransform(-79.125,-12.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EDC554").s().p("AAFARIAAgNQAAgIAFgFQAFgFAHgCIAAAGQgFACgDAFIgBAEIAJAAIAAAQgAgWARIAAgNQAAgIAFgFQAEgFAIgCIAAAGQgGACgCAFIgBAEIAJAAIAAAQg");
	this.shape_79.setTransform(-86.55,-15.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-18.5,195.5,35.1);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATATIAAgYQAAgEgCgCQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgDAAgDADQgDACAAAFIAAAVIgFAAIAAgXIgBgFQgBgDgEAAQgEAAgDADQgCACAAAHIAAATIgHAAIAAgkIAGAAIAAAFIAEgDQAEgDADAAQAFAAACADIACADQACgDADgBQADgCADAAQAIAAADAFIABAIIAAAYg");
	this.shape.setTransform(69.475,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAaIAAgyIAGAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAFAAAIQAAAMgGAFQgEADgFAAQgDAAgDgCIgEgDIAAASgAgIgNQgBADAAAGQAAAEABACQACAGAGAAQAEAAADgEQADgEAAgGQAAgEgBgEQgDgGgGAAQgGAAgCAHg");
	this.shape_1.setTransform(64.675,5.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMARQgEgGAAgLQAAgHACgGQAEgMAKAAQAJABAFAHQADAHAAAKQAAAJgDAHQgEAKgKAAQgIAAgEgJgAgHgNQgCAEAAAJQAAAIABAFQADAGAFAAQAFAAACgDQADgFAAgLQAAgIgCgFQgCgGgGAAQgEAAgDAGg");
	this.shape_2.setTransform(58.675,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMARQgEgGAAgLQAAgHACgGQAEgMAKAAQAJABAFAHQADAHAAAKQAAAJgDAHQgEAKgKAAQgIAAgEgJgAgHgNQgCAEAAAJQAAAIABAFQADAGAFAAQAFAAACgDQADgFAAgLQAAgIgCgFQgCgGgGAAQgEAAgDAGg");
	this.shape_3.setTransform(54.775,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDASIAAgHIAGAAIAAAHgAgDgKIAAgHIAGAAIAAAHg");
	this.shape_4.setTransform(52.05,4.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAYQACgOAHgNQAFgIAFgGIgaAAIAAgGIAhAAIAAAFIgGAIIgHALIgEAMIgCALg");
	this.shape_5.setTransform(48.975,4.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAUQgFgFAAgMQAAgJADgHQADgMALABQAIAAAEADQADAFAAAEIgGAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgDgFAAQgEAAgDAFQgDAFgBAIQACgCAEgCQADgCACABQAHAAAFADQAEAEAAAHQAAAHgEAFQgFAGgIgBQgGABgFgGgAgFABQgEACAAAGQABAEACADQADAEADAAQAFAAADgEQACgDAAgEQAAgEgCgDQgCgDgGAAQgCAAgDACg");
	this.shape_6.setTransform(86.65,-4.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAZQAAgHADgEQACgFAHgEIAFgEIAGgDQADgDAAgEQAAgEgCgDQgDgCgEAAQgGAAgCAFIgCAHIgGAAQAAgHADgEQAEgHAJAAQAIAAAEAFQAEAEAAAGQAAAGgEADQgCADgHADIgEADIgFADQgDADgBAEIAaAAIAAAGg");
	this.shape_7.setTransform(82.725,-4.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMASQgEgHAAgKQAAgIACgGQAEgLAKAAQAJgBAFAJQADAFAAALQAAAJgDAHQgEAKgKgBQgIAAgEgHgAgHgOQgCAFAAAKQAAAHABAEQADAIAFAAQAFAAACgFQADgEAAgLQAAgIgCgGQgCgFgGAAQgEAAgDAFg");
	this.shape_8.setTransform(78.825,-4.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAZQAAgHADgEQACgFAHgEIAFgEIAGgDQADgDAAgEQAAgEgCgDQgDgCgEAAQgGAAgCAFIgCAHIgGAAQAAgHADgEQAEgHAJAAQAIAAAEAFQAEAEAAAGQAAAGgEADQgCADgHADIgEADIgFADQgDADgBAEIAaAAIAAAGg");
	this.shape_9.setTransform(74.925,-4.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAGQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAgCIAAAAIAAAAIgDAAIAAgIIAGAAIAAAHQABADgCADQgCADgDABg");
	this.shape_10.setTransform(70.05,-2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAVQgEgFAAgHIAGAAQABAEABADQADADAFABQAFgBADgCQADgCAAgEQAAgGgDgCQgDgCgFAAIgBAAIgCAAIAAgFIACABIABAAIAFgBQAEgCAAgFQAAgEgDgCQgCgCgEAAQgFAAgCAFQgCACAAAEIgGAAQAAgFACgEQAEgIAJABQAHgBAEAEQAFAEAAAFQAAAFgDADIgEADQAEABACACQACADAAAFQAAAGgEAFQgFAFgIgBQgIAAgEgEg");
	this.shape_11.setTransform(67.075,-4.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAZQAAgHADgEQACgFAHgEIAFgEIAGgDQADgDAAgEQAAgEgCgDQgDgCgEAAQgGAAgCAFIgCAHIgGAAQAAgHADgEQAEgHAJAAQAIAAAEAFQAEAEAAAGQAAAGgEADQgCADgHADIgEADIgFADQgDADgBAEIAaAAIAAAGg");
	this.shape_12.setTransform(63.225,-4.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAYQgFgDAAgFIAGAAIACADQACACAEAAQAHAAACgEQABgDAAgIIgEAEQgDABgDAAQgGABgFgFQgEgEAAgJQAAgJAEgFQAFgGAGAAQAEAAADACIADAEIAAgFIAGAAIAAAhQAAAHgCAEQgEAHgKAAQgFAAgEgCgAgHgOQgCADAAAFQAAAGADADQACADAEABQAGAAADgHQABgCAAgFQAAgGgCgEQgDgDgFAAQgFAAgCAGg");
	this.shape_13.setTransform(57.275,-3.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAOQgCgDABgFIAAgYIAGAAIAAAYIABAEQABADAEABQAGAAACgHQABgDAAgEIAAgSIAHAAIAAAkIgGAAIAAgFIgDADQgEADgEAAQgHAAgDgFg");
	this.shape_14.setTransform(53.45,-4.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPAZIgFgPIgTAAIgGAPIgGAAIATgxIAHAAIASAxgAAIAEIgIgVIgHAVIAPAAg");
	this.shape_15.setTransform(49.2,-4.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDAGQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAgCIAAAAIAAAAIgDAAIAAgIIAGAAIAAAHQABADgCADQgBADgEABg");
	this.shape_16.setTransform(44.3,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAJATIAAgWIgBgGQgCgDgEAAIgDABQgDAAgCACIgCAEIAAAFIAAATIgGAAIAAgkIAGAAIAAAGQADgEADgCQACgBADAAQAIAAACAGQACACAAAHIAAAWg");
	this.shape_17.setTransform(41.35,-4.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAOQgCgDAAgFIAAgYIAHAAIAAAYIAAAEQACADAFABQAFAAACgHQABgDAAgEIAAgSIAHAAIAAAkIgGAAIAAgFIgDADQgEADgDAAQgIAAgDgFg");
	this.shape_18.setTransform(37.4,-4.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAWQgFgFAAgIIAHAAQAAAEACADQADAFAHAAIAHgBQAGgCAAgGQAAgEgDgCIgIgDIgFgBQgHgCgCgBQgFgDAAgGQAAgHAEgEQAFgFAIAAQAHAAAGAEQAFAEAAAIIgGAAQgBgEgBgCQgEgEgGAAQgGAAgCADQgDACAAAEQAAADADACIAIADIAHACQAFABADABQAFADAAAHQAAAIgGAEQgGAEgIAAQgJAAgFgFg");
	this.shape_19.setTransform(33.125,-4.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_20.setTransform(-21.65,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPATQgEgEAAgFQAAgGAEgDQADgDAHAAIAKgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIAAgDQAAgDgCgCQgDgBgEAAQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIgGAAQAAgHAEgDQAFgDAHAAQAGAAAFACQAFADgBAGIAAAXIABACIACABIABAAIABAAIAAAFIgDABIgCAAQgEAAgBgDIgCgEIgFAFQgEACgEAAQgHAAgDgDgAAFABIgEAAIgEABIgFACQgDABgBAFQABADACABQACACADAAQAEAAADgCQAFgCAAgHIAAgFIgDABg");
	this.shape_21.setTransform(-24.75,10.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAVIgPgpIAHAAIALAhIALghIAJAAIgRApg");
	this.shape_22.setTransform(-29.05,10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAHAAIAAApgAgDgUIAAgIIAHAAIAAAIg");
	this.shape_23.setTransform(-31.975,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAVIgPgpIAHAAIALAhIAMghIAIAAIgRApg");
	this.shape_24.setTransform(-34.9,10.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACACADQADADABAFIAAAIIgeAAQAAAGAEAEQACAEAFAAQAFAAAEgEQACgCABgCIAHAAIgDAFIgDAEQgDAEgFABIgFAAQgHAAgGgFgAAMgDIgCgHQgDgFgHAAQgEAAgDADQgDAEgBAFIAXAAIAAAAg");
	this.shape_25.setTransform(-39.15,10.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOAdIgBgCIAAgFIgBgJQAAgGgEgCIgGgBIgRAAIAAAZIgIAAIAAg5IAaAAQAGAAAEACQAIADAAAKQAAAGgCADQgCAEgEABQAEABABACQACADAAAFIABAHIAAAFQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAAABgAgPgCIARAAQAFAAADgCQADgCAAgGQAAgFgEgDIgGgBIgSAAg");
	this.shape_26.setTransform(-44.125,10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAVIAAgoIAGAAIAAAHIADgFQAEgDAEAAIABAAIABAAIAAAHIgBAAIgBAAQgGAAgCAEQgCADAAAEIAAAXg");
	this.shape_27.setTransform(-50.525,10.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACACADQADADABAFIAAAIIgeAAQAAAGAEAEQACAEAFAAQAGAAADgEQACgCABgCIAHAAIgDAFIgDAEQgDAEgFABIgFAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgEAAgDADQgDAEgBAFIAXAAIAAAAg");
	this.shape_28.setTransform(-54.35,10.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAEAbQgEAAgBgCQgCgDAAgEIAAgbIgGAAIAAgFIAGAAIAAgMIAGAAIAAAMIAHAAIAAAFIgHAAIAAAbQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIACAAIABAAIACAAIAAAGIgDAAg");
	this.shape_29.setTransform(-57.675,10.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPATQgEgEAAgFQAAgGAEgDQADgDAHAAIAKgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIAAgDQABgDgDgCQgDgBgEAAQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIgHAAQABgHAFgDQAEgDAHAAQAGAAAFACQAEADAAAGIAAAXIABACIACABIABAAIABAAIAAAFIgDABIgCAAQgDAAgCgDIgCgEIgFAFQgEACgEAAQgHAAgDgDgAAFABIgEAAIgDABIgGACQgDABAAAFQgBADADABQACACADAAQAEAAADgCQAFgCAAgHIAAgFIgDABg");
	this.shape_30.setTransform(-60.95,10.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAIAVIgIggIgHAgIgIAAIgMgpIAIAAIAIAgIAIggIAHAAIAIAgIAJggIAHAAIgMApg");
	this.shape_31.setTransform(-66.175,10.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJAVIAAgoIAGAAIAAAHIADgFQAEgDAEAAIABAAIABAAIAAAHIgBAAIgBAAQgGAAgCAEQgCADAAAEIAAAXg");
	this.shape_32.setTransform(-70.175,10.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPATQgEgEAAgFQAAgGAEgDQADgDAHAAIAKgCQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIAAgDQAAgDgCgCQgDgBgEAAQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIgHAAQABgHAEgDQAFgDAHAAQAGAAAFACQAEADAAAGIAAAXIABACIACABIABAAIABAAIAAAFIgDABIgCAAQgDAAgCgDIgCgEIgFAFQgEACgEAAQgHAAgDgDgAAFABIgEAAIgDABIgGACQgDABgBAFQABADACABQACACADAAQAEAAADgCQAFgCAAgHIAAgFIgDABg");
	this.shape_33.setTransform(-73.9,10.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACADADQACADABAFIAAAIIgdAAQAAAGADAEQACAEAFAAQAGAAADgEQACgCAAgCIAIAAIgCAFIgEAEQgDAEgFABIgFAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_34.setTransform(-78.45,10.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_35.setTransform(-81.55,10.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgPAYQgKgHABgRQAAgMAGgJQAIgIALgBQALABAGAGQAGAFAAAHIgHAAQgBgFgEgEQgEgDgGAAQgIAAgGAHQgEAFAAAMQgBAKAFAHQAFAFAIAAQAIABAFgHQACgDACgGIAHAAQgBAJgFAGQgHAHgMAAQgJABgGgHg");
	this.shape_36.setTransform(-85.4,10.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACACADQADADABAFIAAAIIgeAAQABAGADAEQACAEAFAAQAGAAADgEQACgCABgCIAHAAIgCAFIgEAEQgDAEgFABIgFAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEgBAFIAXAAIAAAAg");
	this.shape_37.setTransform(-7.9,1.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAQQgFgGAAgJQAAgKAFgGQAGgGAHAAQAHAAAEADQAFAEABAIIgHAAQAAgEgDgCQgCgDgFAAQgGAAgDAHQgBAEAAAFQgBAHADAEQADAEAEAAQAFAAADgCQACgDABgFIAHAAQgBAJgFAEQgEADgIAAQgIAAgEgGg");
	this.shape_38.setTransform(-12.1,1.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAKAVIAAgZQAAgEgBgCQgCgFgFAAIgDABQgDABgCADIgCAEIgBAGIAAAVIgHAAIAAgoIAHAAIAAAFQADgEADgBQADgBADAAQAJAAAEAFQABAEAAAGIAAAag");
	this.shape_39.setTransform(-16.375,1.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACADADQACADABAFIAAAIIgdAAQAAAGADAEQACAEAFAAQAGAAADgEQACgCAAgCIAIAAIgCAFIgEAEQgDAEgFABIgFAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_40.setTransform(-20.85,1.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAYQgGgGAAgKQAAgIAFgHQAFgHAIAAQAEAAAEACIAEAEIAAgVIAHAAIAAA5IgHAAIAAgGQgCAEgDACQgEACgDAAQgHAAgFgGgAgHgDQgDADAAAIQAAAGADAFQADAFAFAAQAFAAADgFQADgEAAgIQAAgHgDgEQgDgEgFAAQgEAAgEAFg");
	this.shape_41.setTransform(-25.475,1.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAGgGQAFgGAHAAQAFAAAEACQAFACABADQADADAAAFIABAIIgeAAQAAAGADAEQADAEAFAAQAFAAAEgEQACgCABgCIAGAAIgCAFIgDAEQgDAEgFABIgFAAQgHAAgGgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEgBAFIAXAAIAAAAg");
	this.shape_42.setTransform(-29.8,1.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAHAAQAFAAAFACQAEACACADQACADAAAFIABAIIgdAAQAAAGACAEQADAEAFAAQAGAAADgEQACgCAAgCIAHAAIgBAFIgEAEQgDAEgEABIgGAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_43.setTransform(-34.25,1.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJAVIAAgoIAGAAIAAAGIADgEQAEgDAEAAIABAAIABAAIAAAHIgBAAIgBAAQgGAAgCAEQgCADAAAEIAAAXg");
	this.shape_44.setTransform(-37.575,1.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAYQgIgHgBgRQAAgMAHgJQAHgIAMgBQALAAAGAHQAGAFAAAHIgHAAQgBgFgEgEQgEgDgHAAQgHAAgFAHQgFAFgBAMQAAAKAFAHQAFAFAIAAQAJAAAEgGQADgEAAgFIAIAAQAAAJgHAGQgGAHgMABQgJAAgHgHg");
	this.shape_45.setTransform(-42.05,1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgLAcQgEgEgCgGIAIAAQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQADADAEAAQAHgBADgFQACgEgBgIQgCADgCABQgEACgDAAQgIAAgFgFQgEgFAAgKQAAgKAEgHQAGgFAHAAQAEAAAEACIADAEIAAgFIAHAAIAAAlQAAAIgCAFQgEAJgMgBQgHAAgEgCgAgJgQQgBAEAAAFQAAAHACADQAEAEAEAAQAHAAADgGQACgDgBgGQAAgHgCgEQgEgEgFAAQgGAAgDAHg");
	this.shape_46.setTransform(-49.55,2.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAKAVIAAgZQAAgEgBgCQgCgFgFAAIgDABQgDABgCADIgCAEIgBAGIAAAVIgHAAIAAgoIAHAAIAAAFQADgEADgBQADgBADAAQAJAAAEAFQABAEAAAGIAAAag");
	this.shape_47.setTransform(-53.875,1.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAdIAAgpIAHAAIAAApgAgDgUIAAgIIAHAAIAAAIg");
	this.shape_48.setTransform(-57.025,1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEAbQgEAAgBgCQgCgDAAgEIAAgbIgGAAIAAgFIAGAAIAAgMIAGAAIAAAMIAHAAIAAAFIgHAAIAAAbQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIACAAIABAAIACAAIAAAGIgDAAg");
	this.shape_49.setTransform(-59.075,1.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPATQgEgEAAgFQAAgGAEgDQADgDAHAAIAKgCQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAgDQABgDgDgCQgDgBgEAAQgFAAgCADQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIgHAAQABgHAFgDQAEgDAHAAQAGAAAFACQAEADAAAGIAAAXIABACIACABIABAAIABAAIAAAFIgDABIgCAAQgDAAgCgDIgCgEIgFAFQgEACgEAAQgHAAgDgDgAAFABIgEAAIgDABIgGACQgDABAAAFQgBADADABQACACADAAQAEAAADgCQAFgCAAgHIAAgFIgDABg");
	this.shape_50.setTransform(-62.3,1.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgJAVIAAgoIAGAAIAAAGIADgEQAEgDAEAAIABAAIABAAIAAAHIgBAAIgBAAQgGAAgCAEQgCADAAAEIAAAXg");
	this.shape_51.setTransform(-65.675,1.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgHAbIgEgEIAAAFIgHAAIAAg5IAHAAIAAAVIAGgEQADgCADAAQAIAAAFAFQAFAGAAAJQAAAKgFAHQgFAHgJAAQgEAAgDgDgAgHgEQgEADAAAIQAAAGABADQADAHAHAAQAGAAACgEQADgFAAgHQAAgHgDgDQgCgFgGAAQgEAAgDAEg");
	this.shape_52.setTransform(-69.425,1.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAGgGQAFgGAHAAQAFAAAEACQAFACABADQADADAAAFIABAIIgeAAQAAAGADAEQADAEAFAAQAGAAADgEQACgCABgCIAGAAIgCAFIgDAEQgDAEgEABIgGAAQgHAAgGgFgAAMgDIgCgHQgDgFgHAAQgEAAgDADQgDAEgBAFIAXAAIAAAAg");
	this.shape_53.setTransform(-74,1.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgDAdIAAg5IAGAAIAAA5g");
	this.shape_54.setTransform(-77.1,1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNARQgFgGAAgLQAAgJAFgGQAGgGAIAAQAEAAAFACQADACADADQACADABAFIAAAIIgdAAQAAAGADAEQACAEAFAAQAGAAADgEQACgCAAgCIAIAAIgCAFIgEAEQgDAEgFABIgFAAQgIAAgFgFgAAMgDIgCgHQgDgFgHAAQgDAAgEADQgDAEAAAFIAWAAIAAAAg");
	this.shape_55.setTransform(-80.25,1.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgPAYQgKgHABgRQAAgMAGgJQAIgIALgBQALAAAGAHQAGAFAAAHIgHAAQgBgFgEgEQgEgDgGAAQgIAAgGAHQgEAFAAAMQgBAKAFAHQAFAFAIAAQAIAAAFgGQACgEACgFIAHAAQgBAJgFAGQgHAHgMABQgJAAgGgHg");
	this.shape_56.setTransform(-85.4,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgIAKABQAHAAAFACQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgDIACgEIAPAAQgBAFgEAFQgHAJgNgBQgJABgIgIgAALgFQAAgFgDgDQgEgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_57.setTransform(10.8875,-9.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AgSAUQgGgHAAgMQAAgNAHgIQAHgIALABQAKgBAGAFQAHAFABALIgPAAIgCgGQgCgDgFAAQgGAAgDAIQgBADAAAGQAAAFABAEQADAHAGAAQAFAAACgDQACgDAAgEIAPAAQgBAHgEAFQgHAJgNAAQgMABgGgJg");
	this.shape_58.setTransform(5.325,-9.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AAKAcIAAggQAAgEgBgDQgCgEgGAAQgGAAgDAHQgBACAAAGIAAAcIgOAAIAAg1IANAAIAAAIIAGgGQAEgEAGABQAIgBAFAFQAFAEAAALIAAAjg");
	this.shape_59.setTransform(-0.575,-9.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgIAKABQAHAAAFACQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgDIACgEIAPAAQgBAFgEAFQgHAJgNgBQgJABgIgIgAALgFQAAgFgDgDQgEgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_60.setTransform(-6.4625,-9.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgTAdQgGgHAAgMQAAgNAGgHQAHgIAKAAQAEAAAEACQAEACACAEIAAgaIAOAAIAABIIgNAAIAAgIQgDAFgEACQgEACgFAAQgJAAgHgIgAgIgBQgDADAAAHQAAAHADAFQADAFAFAAQAGAAADgFQADgFAAgGQAAgKgFgEQgDgCgEAAQgFAAgDAFg");
	this.shape_61.setTransform(-12.475,-10.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgIAKABQAHAAAFACQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgDIACgEIAPAAQgBAFgEAFQgHAJgNgBQgJABgIgIgAALgFQAAgFgDgDQgEgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_62.setTransform(-18.2125,-9.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgIAKABQAHAAAFACQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgDIACgEIAPAAQgBAFgEAFQgHAJgNgBQgJABgIgIgAALgFQAAgFgDgDQgEgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_63.setTransform(-23.8125,-9.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EDC554").s().p("AgPAcIAAg1IAOAAIAAAJIAEgHQAFgEAGABIABAAIABAAIAAAOIgDAAIgCAAQgIAAgDAGQgBADABAFIAAAag");
	this.shape_64.setTransform(-28.3,-9.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDC554").s().p("AgWAcQgJgKAAgSQAAgSAKgKQAJgJANAAQASAAAIAMQAFAHAAAHIgPAAQgBgFgDgEQgEgEgIAAQgHAAgFAGQgFAHAAALQAAAMAFAHQAFAGAHAAQAIAAAEgGQADgCABgFIAPAAQgCALgIAIQgIAHgNAAQgOAAgJgKg");
	this.shape_65.setTransform(-34.075,-10.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDC554").s().p("AgRAjQgGgFgBgIIAQAAIABAEQADACAEAAQAIAAACgFQACgEAAgHIAAgDIgEAEQgFAEgFAAQgLAAgGgIQgGgHAAgLQAAgMAGgIQAGgIALAAQADAAADABQAFACADAGIAAgIIAOAAIAAAxQAAALgEAFQgGAKgQgBQgKAAgHgDgAgJgSQgBAEAAAFQAAAFABADQADAGAGAAQAFAAAEgEQADgDAAgHQAAgIgDgEQgDgEgGAAQgGAAgDAHg");
	this.shape_66.setTransform(-43.775,-8.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC554").s().p("AAKAcIAAggQAAgEgBgDQgCgEgGAAQgGAAgDAHQgBACAAAGIAAAcIgOAAIAAg1IANAAIAAAIIAGgGQAEgEAGABQAIgBAFAFQAFAEAAALIAAAjg");
	this.shape_67.setTransform(-49.825,-9.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDC554").s().p("AgGAlIAAg1IANAAIAAA1gAgGgXIAAgMIANAAIAAAMg");
	this.shape_68.setTransform(-54.325,-10.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDC554").s().p("AgEAfQgDgCAAgFIAAggIgHAAIAAgKIAHAAIAAgPIAOAAIAAAPIAIAAIAAAKIgIAAIAAAbQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAIAGABIABAAIABAAIAAAKIgHAAIgCAAQgHAAgDgDg");
	this.shape_69.setTransform(-57.45,-10.3219);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDC554").s().p("AgGAlIAAg1IANAAIAAA1gAgGgXIAAgMIANAAIAAAMg");
	this.shape_70.setTransform(-60.475,-10.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EDC554").s().p("AgSAXQgFgGgBgHIAOAAQABADABABQADAEAGAAIAGgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgCgBgMgEQgIgCgEgCQgEgEAAgFQAAgIAFgGQAHgEAKAAQAJAAAHADQAGAEABAKIgOAAIgCgEQgCgDgFAAQgEAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAABIANADQAJACAEADQAEAEABAGQAAAIgHAFQgFAGgNgBQgLAAgHgFg");
	this.shape_71.setTransform(-64.65,-9.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EDC554").s().p("AgGAlIAAg1IANAAIAAA1gAgGgXIAAgMIANAAIAAAMg");
	this.shape_72.setTransform(-68.875,-10.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EDC554").s().p("AgHAbIgSg1IAPAAIAKAnIALgnIAQAAIgTA1g");
	this.shape_73.setTransform(-73.05,-9.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDC554").s().p("AgRAVQgHgGAAgPQAAgMAHgIQAHgIAKABQAHAAAFACQAFADAEAFQADAFABAGIAAAJIgjAAQAAAJAFADQADACADAAQAEAAADgDIACgEIAPAAQgBAFgEAFQgHAJgNgBQgJABgIgIgAALgFQAAgFgDgDQgEgDgEAAQgEAAgDADQgCADgBAFIAVAAIAAAAg");
	this.shape_74.setTransform(-78.6625,-9.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EDC554").s().p("AAOAkIgBgEIgBgGIAAgHQAAgHgDgCQgCgCgHAAIgOAAIAAAcIgPAAIAAhHIAiAAQAIAAAEACQAEABADAEIAEAGQABADAAAEQAAAFgCAGQgDAEgGACQAFACACADQACAEAAAIIAAAFIABAGQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIAAACgAgOgDIAQAAIAHgBQAFgCAAgHQAAgGgEgCQgDgCgFAAIgQAAg");
	this.shape_75.setTransform(-84.875,-10.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-15.7,179.4,31.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAcAdIAAgmQAAgGgCgCQgDgCgEAAQgGAAgEADQgEAFAAAIIAAAgIgJAAIAAgkIgBgJQgCgDgHAAQgFAAgEAEQgFAEABALIAAAdIgKAAIAAg4IAKAAIAAAJIAFgHQAFgDAGAAQAHAAAEADIADAGQAEgFAEgCQAEgCAFAAQAMAAAEAJQACAEAAAHIAAAlg");
	this.shape.setTransform(242.95,58.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAoIAAhOIAJAAIAAAIIAHgGQAFgDAFAAQAJAAAIAHQAGAHAAAOQAAASgKAIQgFAFgJAAQgFAAgEgDIgHgGIAAAdgAgNgVQgBAFgBAIQABAHABAEQAEAIAJAAQAHAAAEgFQAFgGgBgKQAAgHgCgFQgDgJgKAAQgJAAgEAKg");
	this.shape_1.setTransform(235.55,59.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbQgGgKAAgRQAAgLADgKQAGgRAQAAQAOAAAHAMQAFAJAAARQAAAOgFAKQgGAPgPAAQgNAAgGgMgAgLgVQgEAHAAAPQAAALADAHQADALAJAAQAHAAAEgGQAFgHAAgRQAAgNgEgIQgCgIgKAAQgHAAgEAIg");
	this.shape_2.setTransform(226.4,57.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAbQgFgKAAgRQAAgLADgKQAHgRAPAAQAPAAAGAMQAFAJAAARQAAAOgEAKQgHAPgPAAQgNAAgHgMgAgLgVQgEAHAAAPQAAALADAHQAEALAIAAQAHAAAFgGQAEgHAAgRQAAgNgDgIQgDgIgKAAQgHAAgEAIg");
	this.shape_3.setTransform(220.4,57.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAcIAAgMIAKAAIAAAMgAgEgQIAAgLIAKAAIAAALg");
	this.shape_4.setTransform(216.25,58.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAlQADgVALgVQAIgMAIgKIgpAAIAAgJIAzAAIAAAIIgJAMIgLASIgGASIgEARg");
	this.shape_5.setTransform(211.525,57.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgTQAAgOAEgJQAGgTAQAAQANAAAFAHQAGAGAAAHIgKAAIgCgHQgEgEgHAAQgHgBgFAIQgFAHAAAOQADgFAFgDQAEgBAGAAQAJgBAHAHQAHAEAAANQAAAKgHAIQgGAIgNAAQgKAAgHgIgAgJABQgFAFAAAIQAAAGAEAFQAEAFAHABQAHgBAFgFQADgFAAgGQAAgHgDgEQgEgFgJAAQgEAAgFADg");
	this.shape_6.setTransform(269.35,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgIAKgFIAKgGIAJgGQAFgEAAgGQAAgGgFgFQgDgDgHAAQgJAAgDAHQgCAEgBAHIgKAAQABgJAEgHQAGgLAOAAQANAAAGAHQAGAHAAAIQAAAKgGAFQgEAEgJAFIgHAFQgFACgDADQgFAEgCAGIApAAIAAAJg");
	this.shape_7.setTransform(263.3,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAbQgFgKAAgRQAAgLADgKQAHgRAPAAQAPAAAGAMQAFAJAAARQAAAOgEAKQgHAPgPAAQgNAAgHgMgAgLgVQgEAHAAAPQAAALADAHQAEALAIAAQAHAAAFgGQAEgHAAgRQAAgNgDgIQgDgIgKAAQgHAAgEAIg");
	this.shape_8.setTransform(257.3,43.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAmQABgKADgHQADgIALgFIAJgGIAKgGQADgEAAgGQAAgGgDgFQgEgDgHAAQgIAAgFAHQgCAEAAAHIgJAAQAAgJADgHQAHgLAOAAQANAAAHAHQAFAHAAAIQAAAKgGAFQgEAEgKAFIgGAFQgFACgDADQgFAEgCAGIApAAIAAAJg");
	this.shape_9.setTransform(251.3,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIAAgEIAAgBIAAAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgDAFgFABg");
	this.shape_10.setTransform(243.875,47.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAfQgIgIAAgTQAAgOAEgJQAGgTARAAQAMAAAGAHQAEAGAAAHIgJAAIgCgHQgEgEgHAAQgHgBgFAIQgFAHAAAOQADgFAFgDQAEgBAGAAQAJgBAHAHQAHAEAAANQAAAKgGAIQgIAIgMAAQgJAAgIgIgAgJABQgFAFAAAIQAAAGAEAFQAFAFAGABQAIgBAEgFQADgFAAgGQAAgHgDgEQgEgFgIAAQgGAAgEADg");
	this.shape_11.setTransform(239.4,43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADAmIAAg1IgQAAIAAgHQAKgBADgCQAFgDABgJIAIAAIAABLg");
	this.shape_12.setTransform(232.85,43.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAlQgGgEgBgJIAKAAQABAEACACQADADAGAAQALAAADgIQACgEAAgMQgDAEgEACQgEACgGAAQgJAAgHgGQgHgHAAgOQAAgOAHgIQAHgIAKAAQAGAAAFADIAFAGIAAgHIAJAAIAAAyQAAALgDAGQgGAMgQAAQgJAAgGgEgAgMgWQgCAFAAAIQAAAJAEAFQAEAFAGAAQAKAAAEgKQACgEAAgHQAAgKgEgFQgEgFgHAAQgJAAgEAJg");
	this.shape_13.setTransform(224.175,45.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgGIAAgmIAJAAIAAAlQAAAEACADQACAEAHAAQAJABADgKQACgEAAgHIAAgcIAJAAIAAA4IgJAAIABgJIgFAGQgFAEgHAAQgMAAgEgIg");
	this.shape_14.setTransform(218.325,44.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXAnIgIgYIgdAAIgJAYIgLAAIAehNIAKAAIAdBNgAAMAHIgMghIgLAhIAXAAg");
	this.shape_15.setTransform(211.875,43.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAJQAEgBABgEIAAgEIAAgBIAAAAIgFAAIAAgMIALAAIAAALQAAAFgDAFQgDAFgFABg");
	this.shape_16.setTransform(204.325,47.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAdIAAgjQAAgFgCgDQgCgFgIAAIgEAAQgEACgCADIgEAGIAAAIIAAAdIgKAAIAAg4IAJAAIAAAIQAEgEAEgDQAFgCAFAAQALAAAFAJQACAEAAAIIAAAkg");
	this.shape_17.setTransform(199.85,44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAVQgCgFAAgGIAAgmIAJAAIAAAlQAAAEACADQACAEAHAAQAJABADgKQACgEAAgHIAAgcIAJAAIAAA4IgJAAIABgJIgFAGQgFAEgHAAQgMAAgEgIg");
	this.shape_18.setTransform(193.775,44.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAhQgIgHAAgNIAKAAQAAAHADAEQAFAIAMAAQAFAAAFgCQAJgDAAgIQAAgHgEgCQgEgDgIgCIgJgCQgKgDgEgCQgHgEAAgKQAAgLAHgGQAHgHAMAAQALAAAJAGQAIAGAAANIgKAAQgBgHgCgDQgFgGgKAAQgJAAgEAEQgDAEAAAFQAAAFAEADIANAFIAKACQAIACAEACQAHAGAAAKQAAANgJAFQgJAGgMAAQgNAAgIgIg");
	this.shape_19.setTransform(187.175,43.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAoQgHgFgBgJIAKAAQABAEADACQADADAHAAQALAAADgIQADgFAAgMQgEAEgDADQgFACgGAAQgKAAgHgHQgHgHAAgPQAAgPAHgJQAHgJALAAQAGAAAFAEQADACADAEIAAgIIAKAAIAAA2QgBAMgDAHQgGAMgRAAQgJAAgHgEgAgNgXQgCAFAAAJQAAAJAEAFQAEAGAHAAQAKAAAEgKQADgFAAgHQAAgMgFgFQgEgFgHAAQgKAAgEAKg");
	this.shape_20.setTransform(70.95,69.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAOAfIAAglQAAgGgBgDQgDgGgHAAIgFABQgEABgDAEQgDADgBADIgBAJIAAAfIgKAAIAAg8IAKAAIAAAJQAEgFAFgDQAFgCAFAAQANAAAEAJQADAFAAAJIAAAmg");
	this.shape_21.setTransform(64.725,68.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAXQgCgFAAgIIAAgoIAKAAIAAAnQAAAEABADQAEAGAGAAQAKAAAEgJQABgGAAgIIAAgdIALAAIAAA8IgKAAIAAgJIgEAFQgGAFgIAAQgMAAgFgIg");
	this.shape_22.setTransform(58.25,68.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAIgJQAHgJAMAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgMAAgIgIgAgMgPQgFAHAAAJQAAAKAFAGQAEAHAIAAQAKAAAEgIQAEgIAAgIQAAgJgDgFQgFgIgKAAQgIAAgEAHg");
	this.shape_23.setTransform(51.8,68.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAqIAAgiIgfgxIANAAIAXApIAYgpIANAAIgfAxIAAAig");
	this.shape_24.setTransform(45.95,67);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAkQgGgIAAgJQAAgJAGgGQAEgEAJgFQgFgGgCgEQgCgEAAgEQAAgIAGgFQAFgFAJgBQAIABAFAFQAFAEAAAHQAAAIgGAGQgCADgGAFIAOASIACgHIABgHIAKAAQgBAIgDAIIgCAGIgBAAIABAAIAOASIgNAAIgIgKQgFAFgEACQgFAFgJAAQgNAAgGgHgAgUAJQgDAEAAAGQAAAIAEADQAFADAGABQAGAAADgEQAFgDACgDIgRgXQgIAFgDADgAgNgdIgBAFQAAADACAEIAGAIIAHgHQADgEAAgEQAAgEgCgCQgCgDgEAAQgGAAgDAEg");
	this.shape_25.setTransform(35.225,67.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_26.setTransform(24.875,66.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAaQgGgGAAgJIAJAAQABAFACADQAEAFAJgBQAFAAAFgCQAFgCAAgGQAAgDgEgCIgJgDIgIgCQgHgCgEgBQgGgFgBgHQAAgIAHgGQAGgFAKgBQAOAAAGAJQADAFAAAGIgJAAQgBgDgCgDQgDgFgIAAQgGAAgDACQgDADAAADQAAAEAEADIAHACIAFACQAMADAEABQAFAEABAIQAAAJgHAGQgGAFgMAAQgNABgGgHg");
	this.shape_27.setTransform(18.75,68.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgIAGgFQAFgEAIgBIAQgCQADAAABgCIABgFQAAgFgEgCQgDgCgGgBQgIABgDAEQgCACgBAFIgJAAQAAgMAHgDQAHgFAJAAQAKAAAGAEQAHAEAAAIIAAAjIABACIACABIACAAIACgBIAAAIIgEABIgDAAQgGAAgCgDIgCgGQgDAEgGADQgEADgHAAQgJAAgFgFgAAHABIgGACIgFAAIgIACQgFADAAAGQAAAEADADQAEACAEAAQAFAAAEgCQAJgFAAgIIAAgIIgFABg");
	this.shape_28.setTransform(12.725,68.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUAqIgphDIAABDIgLAAIAAhTIANAAIApBDIAAhDIALAAIAABTg");
	this.shape_29.setTransform(5.225,67);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_30.setTransform(138.575,56.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAaQgGgGAAgJIAKAAQAAAFACADQAEAEAJABQAGAAAEgCQAFgDgBgFQABgEgEgDIgJgCIgHgCQgIgCgEgCQgGgDAAgIQgBgIAHgGQAGgGAKABQANAAAHAIQADAFAAAGIgJAAQAAgEgCgDQgFgDgHAAQgGAAgDACQgDACAAAEQAAAEAEACIAGADIAHABQAKADAFABQAFAEAAAJQABAHgHAGQgGAHgMAAQgNgBgGgGg");
	this.shape_31.setTransform(134.1,53.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_32.setTransform(129.95,52.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_33.setTransform(127.4,52.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEApIAAg7IAJAAIAAA7gAgEgdIAAgLIAJAAIAAALg");
	this.shape_34.setTransform(124.825,52.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAkQgDgEAAgGIAAgnIgIAAIAAgIIAIAAIAAgRIAJAAIAAARIAKAAIAAAIIgKAAIAAAnQAAAAABABQAAABAAAAQAAABABAAQAAABABAAIADAAIACAAIACAAIAAAIIgEABIgDAAQgHAAgCgDg");
	this.shape_35.setTransform(121.9,52.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAkQgJgIAAgOIALAAQABAIADAEQAFAJANgBQAFAAAFgCQALgDgBgJQABgHgFgCQgEgDgJgDIgKgCQgLgCgEgDQgIgFABgKQgBgMAIgGQAHgIAOAAQAMAAAJAGQAJAHAAAOIgKAAQgCgHgCgDQgFgHgLAAQgJAAgFAEQgEAEAAAGQAAAGAFADIAOAFIALACQAIACAFADQAHAFAAALQAAAOgKAGQgJAGgNAAQgPAAgIgIg");
	this.shape_36.setTransform(116.4,52.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAKQAEgBABgFIAAgEIAAgBIAAAAIgFAAIAAgNIALAAIAAAMQAAAGgDAFQgCAFgGABg");
	this.shape_37.setTransform(107.775,56.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAqIgDAAIAAgJIAEAAIACABIAEgBIACgDIACgEIADgGIgXg+IAMAAIAPAwIARgwIALAAIgKAbIgJAYQgJAXgCAGQgEAFgJAAg");
	this.shape_38.setTransform(104.175,54.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKAnIgGgGIAAAIIgKAAIAAhTIAKAAIAAAeQAEgEAEgCQAFgDAEAAQAMAAAHAIQAHAIAAAOQAAAPgHAJQgHAKgMAAQgGAAgFgEgAgLgGQgFAFAAALQAAAIACAGQAEAKAKAAQAIAAAEgHQAEgGAAgLQAAgKgEgFQgEgGgIAAQgGAAgFAFg");
	this.shape_39.setTransform(98.175,52.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgSAaQgGgGgBgJIAKAAQABAFACADQAEAEAJABQAGAAAEgCQAEgDABgFQgBgEgDgDIgJgCIgHgCQgIgCgEgCQgHgDABgIQAAgIAFgGQAHgGAKABQAOAAAFAIQAFAFAAAGIgKAAQAAgEgDgDQgEgDgHAAQgGAAgDACQgDACAAAEQAAAEAEACIAHADIAGABQAKADAEABQAHAEgBAJQAAAHgGAGQgGAHgNAAQgNgBgFgGg");
	this.shape_40.setTransform(91.95,53.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAIgJQAHgJAMAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgMAAgIgIgAgNgPQgDAHAAAJQAAAKADAGQAFAHAIAAQAKAAADgIQAFgIAAgIQAAgJgEgFQgEgIgKAAQgIAAgFAHg");
	this.shape_41.setTransform(85.8,53.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOAfIAAg7IAKAAIAAAKQABgEAEgEQAEgEAGAAIABAAIADAAIAAALIgCAAIgCAAQgIgBgDAGQgEAFAAAGIAAAig");
	this.shape_42.setTransform(81.075,53.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAjQgOgLAAgYQAAgSAKgMQALgNARAAQAPAAAJAJQAJAIABALIgLAAQgCgJgGgEQgFgFgKAAQgLAAgIAJQgHAIAAARQAAAPAHAJQAGAJANAAQAMAAAHgKQADgFABgIIALAAQgBANgIAJQgKALgRAAQgNAAgJgJg");
	this.shape_43.setTransform(74.6,52.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAqIAAgzIgJAAIAAgIIAJAAIAAgKQABgGABgDQADgFAKAAIACAAIADAAIAAAJIgDAAIgCAAQgEAAgBADQgBACAAAKIALAAIAAAIIgLAAIAAAzg");
	this.shape_44.setTransform(65.65,52.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAYQgHgJAAgOQAAgOAHgJQAJgJALAAQAMAAAIAIQAIAHAAAQQAAANgHAKQgHAJgOAAQgNAAgHgIgAgMgPQgEAHAAAJQAAAKAEAGQADAHAJAAQAKAAAEgIQADgIAAgIQAAgJgDgFQgDgIgLAAQgJAAgDAHg");
	this.shape_45.setTransform(60.75,53.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgSAXQgHgIAAgNQAAgPAHgJQAJgJAKAAQAKAAAHAFQAGAFACAMIgKAAQgBgGgDgDQgEgEgHAAQgIAAgEAJQgDAHAAAIQAAAJAEAGQAEAGAGAAQAHAAAEgEQADgDACgHIAKAAQgCAMgHAFQgGAGgLAAQgLAAgHgJg");
	this.shape_46.setTransform(51.55,53.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEApIAAg7IAJAAIAAA7gAgEgdIAAgLIAJAAIAAALg");
	this.shape_47.setTransform(47.325,52.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgSAaQgGgGgBgJIAKAAQABAFACADQAEAEAJABQAFAAAFgCQAFgDAAgFQAAgEgEgDIgJgCIgIgCQgHgCgEgCQgHgDAAgIQABgIAGgGQAGgGAKABQAOAAAFAIQAEAFABAGIgKAAQgBgEgCgDQgDgDgIAAQgGAAgDACQgDACAAAEQAAAEAEACIAHADIAFABQAMADADABQAHAEAAAJQgBAHgGAGQgGAHgMAAQgNgBgGgGg");
	this.shape_48.setTransform(43.15,53.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAWQgCgEAAgIIAAgoIAKAAIAAAnQAAAFACADQACAFAIAAQAJAAADgKQACgFABgHIAAgeIAKAAIAAA7IgKAAIABgJIgGAHQgFAEgHAAQgNAAgFgJg");
	this.shape_49.setTransform(36.95,53.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAdApIAAgvIABgJIAAgNIgYBFIgKAAIgYhFIAAADIAAAJIAAAKIAAAvIgLAAIAAhRIAQAAIAXBFIAYhFIAQAAIAABRg");
	this.shape_50.setTransform(29.05,52.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAYQgJgJAAgOQAAgOAJgJQAIgJALAAQAGAAAHADQAFADAEAFQADAFAAAFIABANIgrAAQAAAJAFAGQAEAFAHABQAJgBAEgFQACgDACgEIAJAAQABADgDAEQgCAEgDADQgFAEgGACIgIABQgLAAgHgIgAARgEQgBgHgCgEQgEgHgKAAQgFAAgFAFQgFAFgBAIIAhAAIAAAAg");
	this.shape_51.setTransform(17.7,53.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAOAqIAAgmQAAgGgBgDQgDgFgIAAQgFAAgFAEQgGAEAAAMIAAAgIgKAAIAAhTIAKAAIAAAfIAHgGQAFgDAGAAQANAAAFAJQADAFAAAIIAAAng");
	this.shape_52.setTransform(11.375,52.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFApIAAhIIgcAAIAAgJIBDAAIAAAJIgcAAIAABIg");
	this.shape_53.setTransform(4.625,52.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC554").s().p("AgaAiQgMgLAAgXQAAgTALgMQALgMAQAAQALABAHAEQAJADAFAIQAFAIACAJIAAAQIg4AAQABAMAHAFQAFAEAFgBQAHAAAEgDQADgCABgEIAWAAQgBAHgGAIQgLAMgTgBQgPABgMgKgAAQgIQAAgIgEgEQgFgFgHAAQgHAAgEAFQgDAFgBAHIAfAAIAAAAg");
	this.shape_54.setTransform(75.05,36.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EDC554").s().p("AgbAjQgJgIAAgNIAVAAQABAGACADQAFAEAJAAQAGAAAEgCQAEgCAAgEQAAgDgDgCQgDgCgSgFQgOgDgGgEQgGgFAAgKQAAgMAJgIQAJgIAQAAQAOAAALAGQAJAGACAPIgWAAQgBgEgCgCQgDgEgIAAQgHAAgCACQgEACAAADQAAAEAEABIAVAGQANADAGAFQAHAHAAAJQAAAMgJAIQgKAIgSAAQgTAAgJgJg");
	this.shape_55.setTransform(66.45,36.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EDC554").s().p("AghAdQgDgHAAgOIAAgxIAWAAIAAAxQAAAHABADQADAGAJAAQAKAAAEgJQACgEAAgIIAAgsIAWAAIAABRIgVAAIAAgLIgBACIgDADQgFAFgFABQgEACgGAAQgSAAgHgNg");
	this.shape_56.setTransform(57.425,36.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDC554").s().p("AgfAfQgKgNAAgSQAAgRAKgNQALgNAUAAQAWAAAJANQALANAAARQAAASgLANQgJANgWAAQgUAAgLgNgAgOgSQgEAGAAAMQAAAMAEAHQAGAHAIAAQAKAAAEgHQAGgHAAgMQAAgMgGgGQgEgHgKAAQgIAAgGAHg");
	this.shape_57.setTransform(48,36.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EDC554").s().p("AAVA4IAAgyIgqAAIAAAyIgXAAIAAhvIAXAAIAAArIAqAAIAAgrIAYAAIAABvg");
	this.shape_58.setTransform(37.85,34.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EDC554").s().p("AgXAqIAAhRIAVAAIAAAOQAEgIADgDQAGgFAKAAIABAAIACAAIAAAWIgEAAIgCAAQgNAAgFAIQgBAFAAAJIAAAng");
	this.shape_59.setTransform(25.275,36.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EDC554").s().p("AghAdQgDgHAAgOIAAgxIAWAAIAAAxQAAAHABADQADAGAJAAQAKAAAEgJQACgEAAgIIAAgsIAWAAIAABRIgVAAIAAgLIgBACIgDADQgFAFgFABQgEACgGAAQgSAAgHgNg");
	this.shape_60.setTransform(17.125,36.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EDC554").s().p("AgkAuQgRgQAAgeQAAgdARgQQANgNAXAAQAYAAAMANQASAQgBAdQABAegSAQQgMANgYAAQgXAAgNgNgAgVgcQgIALAAARQAAATAIAKQAIAKANABQAOgBAIgKQAIgKAAgTQAAgRgIgLQgIgKgOAAQgNAAgIAKg");
	this.shape_61.setTransform(6.55,34.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(-1.1,26.9,275.1,48.50000000000001), null);


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
	this.shape.setTransform(30.6995,5.53,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiAqIAAgDQAGAAACgCQADgDAAgHIAAgwQAAgIgDgDQgBgEgHAAIAAgDIAXAAIALgCIAAAPQAAgDAEgFQADgDAEgCQAFgCAEAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHACADQADADAJAAIAAADg");
	this.shape_1.setTransform(23.972,5.44,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAnQgJgEgFgKQgFgJAAgQQAAgPAFgJQAFgKAJgFQAJgDAKAAQALAAAJADQAKAFAEAKQAFAJAAAPQAAAQgFAJQgFALgJADQgIAFgMgBQgKABgJgFgAgKgeQgEAKAAAUQAAAWAEAJQAFAJAFABQAGgBAFgJQAEgJAAgWQAAgUgEgKQgFgJgGAAQgFAAgFAJg");
	this.shape_2.setTransform(16.4346,5.53,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA6A4IgdAAIgLABIAAgEIAJgBQADgBAAgDQABgCAAgGIAAhSIglBjIgDAAIgrhmIAABLIABAOQABAEADADQAEACAHAAIAAAEIgIgBIgYABIAAgEQAFAAADgCQADgCAAgFIABgMIAAhHIgBgIQgBgEgCAAIgIgBIAAgEIAHABIAggBIAgBNIAdhMIAlgBIAAAEIgIABQgCAAgBAEIgBAIIAABPIABAIQAAADADABIAIABIAAAEIgLgBg");
	this.shape_3.setTransform(5.9722,4.1575,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAqIAAgDQAFAAACgDQACgBAAgIIAAgwIgBgHQAAgDgDgCQgCgCgEAAQgDAAgEADQgDACgCAEQgDAGAAAEIAAArQAAAHACACQADADAEAAIAAADIgIAAIgiAAIAAgDQAFAAADgDQACgCAAgHIAAgxQAAgHgCgDQgCgEgGAAIAAgDIAKAAIAXgCIAAAOQAEgIAHgDQAGgDAJAAQAGAAAFABQAEACACADIAEAHIABA3QAAAIADABQACADAFAAIAAADg");
	this.shape_4.setTransform(-8.4277,5.44,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqIAAgDQAFAAACgCQADgDAAgHIAAgwQAAgIgCgDQgCgEgHAAIAAgDIAXAAIALgCIAAAPIAEgIQADgDAEgCIAJgCIAAAAQAGAAADACQADACABADIACAHQAAAGgEAEQgDADgGABQgFgBgDgCQgDgDAAgEQAAgFACgDIAFgFIgFAAIgGADIgEAEIgDAHIAAAHIAAApQAAAHADADQADADAIAAIAAADg");
	this.shape_5.setTransform(-16.1677,5.44,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMApQgEgCgBgCQgCgDAAgEQgDAGgFADQgGAEgHAAQgHAAgFgDQgFgCgCgFQgDgFAAgFQAAgHADgEQAFgFAEgCQAEgDAGgBIALgDQAEgBADgDQADgCAAgEIAAgNIgBgHQgCgDgCgCQgEgCgDAAIgGABQgEABgCACQAFACACADQADACAAAFQAAAGgEADQgDADgGAAQgGAAgDgEQgDgDAAgFQAAgEADgEIAGgFQAEgDAHgCQAGgBAIAAQAGAAAGABQAGACAEAEQAEAFABAEIABA4IABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIADgBIADgBIACACQgDADgFACQgEABgGAAQgGAAgDgCgAABgBIgFACIgFAFQgDABgBAFQgCAEAAAEQAAAHADADQACADAFAAIAFgCIAFgEIAAghg");
	this.shape_6.setTransform(-23.1876,5.485,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAnQgIgFgFgJQgFgKAAgOQABgOAFgKQAFgKAJgFQAHgEAMAAQANgBAIAJQAJAJgBASIgsAAIAAAHQAAALADAGQAEAHADAEQAFADAFAAIAHgBQADgBAEgEQAEgCAEgFIACABQgCAHgEAFQgEAFgHAEQgFAEgJgBQgKABgJgFgAgFggQgEAHgBAPIAZAAIgBgOQgCgIgCgDQgCgEgEAAQgGAAgDAHg");
	this.shape_7.setTransform(-30.6801,5.53,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrA5IAAgEIAHgBQADAAABgEIABgIIAAhPIgBgIQgBgCgDgCIgHgBIAAgEIAKABIAdAAIAKgBIAAAEIgHABQgDABgBADIgBAIIAABRIABAHQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIAFABIAIAAQAGAAAEgDQAFgCAEgFQADgDADgIQADgJABgGIAEAAIAAAog");
	this.shape_8.setTransform(-38.6675,4.1575,0.9,0.9);

	this.instance = new lib.CTA();
	this.instance.setTransform(-67,-16,0.4699,0.4699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-67,-16,124.5,39), null);


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
	this.instance.setTransform(156.75,25.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(473).to({_off:false},0).to({alpha:1},8).wait(26).to({startPosition:0},0).to({_off:true},1).wait(6));

	// FR3
	this.instance_1 = new lib.FR3("synched",0);
	this.instance_1.setTransform(158.9,25.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(381).to({_off:false},0).to({alpha:1},8).to({_off:true},84).wait(41));

	// FR2
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(121.4,21.4,0.6521,0.6521,0,0,0,78.9,44.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({_off:true},112).wait(133));

	// FR1
	this.instance_3 = new lib.FR11();
	this.instance_3.setTransform(114.25,21.85,0.6521,0.6521,0,0,0,64,41.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).to({_off:true},137).wait(253));

	// CTA
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(303.75,39.85,0.4949,0.4949,0,0,0,38.9,11.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({regY:11.7,y:30,alpha:1},8,cjs.Ease.get(1)).wait(379).to({_off:true},1).wait(6));

	// line
	this.instance_5 = new lib.line_1();
	this.instance_5.setTransform(59.45,34.75,0.4783,0.4783,0,0,0,11.4,48.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({regY:48.5,y:25.25,alpha:1},8,cjs.Ease.get(1)).wait(400).to({_off:true},1).wait(6));

	// Header
	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(614.05,75.5,1,1,0,0,0,128.2,70.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:55.5,alpha:1},8,cjs.Ease.get(1)).to({_off:true},69).wait(423));

	// Logo2
	this.instance_7 = new lib.Logo2_1();
	this.instance_7.setTransform(30.05,28.15,0.536,0.536,0,0,0,0.2,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(404).to({_off:true},1).wait(6));

	// Logo
	this.instance_8 = new lib.Logo_1();
	this.instance_8.setTransform(63.75,28.85,0.1474,0.1474,0,0,0,151.7,112.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:150.8,regY:112,scaleX:0.2303,scaleY:0.2303,alpha:1},8,cjs.Ease.get(1)).to({_off:true},77).wait(423));

	// Layer_2
	this.instance_9 = new lib.Layer();
	this.instance_9.setTransform(226.25,24.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91).to({_off:false},0).wait(416).to({_off:true},1).wait(6));

	// sc
	this.instance_10 = new lib.sc();
	this.instance_10.setTransform(12.15,43.95,0.2919,0.2919,0,0,180,107.5,165.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:107.8,x:-3.8},8,cjs.Ease.get(1)).to({_off:true},83).wait(423));

	// sc
	this.instance_11 = new lib.sc();
	this.instance_11.setTransform(120.15,44.75,0.2919,0.2919,0,0,0,108.4,165.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:108.6,x:129.5},8,cjs.Ease.get(1)).to({_off:true},83).wait(423));

	// Bg1
	this.instance_12 = new lib.Bg1_1();
	this.instance_12.setTransform(70.9,76.25,0.6259,0.6259,0,0,0,149.8,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},91).wait(423));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(507).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-4.4,381,158.8);


// stage content:
(lib.WFSB_219237_MM_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [504];
	// timeline functions:
	this.frame_504 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(504).call(this.frame_504).wait(4));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(508));

	// Layer_1
	this.ad_animatedLayers = new lib.ad_animatedLayers("synched",0,false);
	this.ad_animatedLayers.name = "ad_animatedLayers";
	this.ad_animatedLayers.setTransform(150.05,125.1,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.ad_animatedLayers).wait(508));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(99.1,22,221.9,132.5);
// library properties:
lib.properties = {
	id: 'D53ECBF773A7459DBA4FBB4AC71D235E',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bg1.jpg", id:"Bg1"},
		{src:"CTA.png", id:"CTA"},
		{src:"line.png", id:"line"},
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
an.compositions['D53ECBF773A7459DBA4FBB4AC71D235E'] = {
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