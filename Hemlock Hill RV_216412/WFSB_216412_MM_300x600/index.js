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



(lib.BGG = function() {
	this.initialize(img.BGG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,961);


(lib.Corner = function() {
	this.initialize(img.Corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,72);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,150);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,107);


(lib.newheader = function() {
	this.initialize(img.newheader);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2548,950);


(lib.SBH_01 = function() {
	this.initialize(img.SBH_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,257);


(lib.Sparkle = function() {
	this.initialize(img.Sparkle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,207);


(lib.Subhead_02 = function() {
	this.initialize(img.Subhead_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,231);// helper functions:

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


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhMIrIgEgGIAAAGIsZAAQivAAAAjWIAAqpQAAjWCvAAIbTAAQCvAAAADWIAAKpQAADWivAAg");
	mask.setTransform(11.825,-1.075);

	// Layer_2
	this.instance = new lib.newheader();
	this.instance.setTransform(-122,-60,0.1055,0.1225);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-93.1,-56.6,209.89999999999998,111.1), null);


(lib.subhead_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("AiOC+IAQhKICaiYQASgRAFgJQAIgLgBgNQAAgdgbAAQgfAAgJAmIhTAAQAShwB0AAQAvAAAbAZQAbAaAAAvQgBAegPAaQgMATgeAbIhqBoICBAAIgQBLg");
	this.shape.setTransform(-64.4,-11.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.Subhead_02();
	this.instance.setTransform(-57,-39,0.2592,0.2592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.4,-48.4,146.5,69.3);


(lib.subhead_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("Ag/DAIA6kgIhbBAIAThfIBZhAIBVAAIhNF/g");
	this.shape.setTransform(-61.025,-14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.SBH_01();
	this.instance.setTransform(-63,-42,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-52.2,150.8,84.2);


(lib.sparkle1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Sparkle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sparkle1, new cjs.Rectangle(0,0,207,207), null);


(lib.phn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("AAQAbIAHgfIAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgBQgHAAgBAIIgHAfIgOAAIAGgfIABgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgBQgGAAgCAIIgGAfIgQAAIALg0IAOAAIAAAFQAFgGAHAAQAGAAAEAGQAGgGAJAAQAGAAAEAEQAFAEAAAHIgBAGIgGAgg");
	this.shape.setTransform(70.125,1.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgQAXQgFgFAAgIIABgKIADgMQACgEAEgEQAGgGAKAAQAHAAAFAEQAFAFABAIIgBAJQgCAJgCAEQgCAEgDAEQgHAGgJAAQgIAAgFgEgAgBgKQgDACgBAIIgBAIQAAAFAEABQABAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQACgDACgJIABgGQABgGgFAAQgDAAgBACg");
	this.shape_1.setTransform(63.8,1.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgPAXQgFgGAAgJIAAgIQAFgaAVAAQAKAAAFAHIgLAKQgDgDgDAAQgCAAgCACQgEAEgBAGIgBAGQABAIAFAAQADgBAEgDIAIALQgIAGgIAAQgIAAgGgEg");
	this.shape_2.setTransform(59.35,1.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgJAJIADgRIAQAAIgDARg");
	this.shape_3.setTransform(55.375,3.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgTAjIgIhFIAQAAIAEAoIASgoIARAAIgiBFg");
	this.shape_4.setTransform(52.525,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AAFAjIgGgaIgGAAIgFAaIgRAAIAPhFIAYAAQAJAAAFAHQAGAFAAAIQAAAGgFAHQgEAFgHADIAJAcgAgEgEIAIAAQAEAAADgEQACgBAAgDQAAgIgHABIgHAAg");
	this.shape_5.setTransform(46,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AABAjQgFAAgFgDQgDgEAAgFIAAgFIALg0IAOAAIgKA0IAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAGAAIgDANg");
	this.shape_6.setTransform(41.4,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AABAjQgGAAgDgDQgEgEAAgFIAAgFIALg0IAOAAIgKA0IAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAGAAIgDANg");
	this.shape_7.setTransform(38.35,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgNAjIAKgyIAOAAIgKAygAgCgWIACgMIAPAAIgCAMg");
	this.shape_8.setTransform(35.7,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AACAjIAGgcIgRAAIgGAcIgQAAIAOhFIARAAIgGAbIAQAAIAGgbIAQAAIgOBFg");
	this.shape_9.setTransform(31.35,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AACAjIgHgUIgEADIgDARIgPAAIANhFIAOAAIgGAiIARgRIARAAIgWAWIAOAeg");
	this.shape_10.setTransform(25.7,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgOAXQgHgGABgJIAAgIQAFgaAVAAQAKAAAGAHIgMAKQgCgDgDAAQgDAAgCACQgEAEAAAGIgBAGQgBAIAGAAQADgBAEgDIAIALQgIAGgIAAQgIAAgFgEg");
	this.shape_11.setTransform(20.95,1.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AgQAXQgGgFAAgIIABgKIAEgMQACgEADgEQAHgGAJAAQAIAAAFAEQAGAFgBAIIgBAJQgBAJgCAEQgCAEgEAEQgFAGgLAAQgGAAgGgEgAgBgKQgDACgCAIIAAAIQgBAFAGABQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQACgDADgJIABgGQAAgGgFAAQgDAAgBACg");
	this.shape_12.setTransform(16.05,1.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AAAAjQgEAAgFgDQgDgEAAgFIABgFIAKg0IAOAAIgKA0IAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAGAAIgDANg");
	this.shape_13.setTransform(12.05,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AAQAbIAHgfIAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgBQgHAAgBAIIgHAfIgOAAIAGgfIABgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgBQgGAAgCAIIgGAfIgQAAIALg0IAOAAIAAAFQAFgGAHAAQAGAAAEAGQAGgGAJAAQAGAAAEAEQAFAEAAAHIgBAGIgGAgg");
	this.shape_14.setTransform(6.375,1.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgPAXQgIgEAAgLQABgOAGgJQAIgLAMAAQAJAAAFAFQAGAFAAAKIgCALIgeAAIAAACQAAAHAIAAQAFAAAFgEIAIAKQgIAHgMAAQgIAAgFgEgAgGgEIAPAAIAAgCQAAgIgGABQgGAAgDAJg");
	this.shape_15.setTransform(-0.05,1.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AACAjIAFgcIgQAAIgFAcIgRAAIAOhFIAQAAIgFAbIAQAAIAFgbIARAAIgOBFg");
	this.shape_16.setTransform(-5.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgPAqIAQhTIAPAAIgQBTg");
	this.shape_17.setTransform(-12.175,0.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AgRAfQgHgFABgIIAAgEIAPAAIAAADQAAAFAGAAQACAAADgDQACgDAAgEQAAgGgFAAIgDAAIADgNIACAAQADABACgDQADgDAAgDQgBgGgFABQgFgBgCAHIgOAAQAEgVATAAQAIABAGAFQAEAFAAAHQAAALgJAGQAFADABAIQgBALgHAHQgHAGgIABQgKgBgFgEg");
	this.shape_18.setTransform(-18.35,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgSAfQgGgFAAgJQAAgMALgGQgFgFAAgHQAAgJAHgGQAGgGAKgBQAIABAGAFQAGAGAAAIQAAAFgDAFQgDAEgEABQAFAFAAAHQAAAKgGAHQgHAGgKABQgJgBgGgEgAgHAJQgCACAAAEIABAEQACADAEAAQACAAACgDQADgDAAgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgDgCAAQgEAAgDADgAAAgSQgCACAAAEIABAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQADAAACgDQADgCgBgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgBACg");
	this.shape_19.setTransform(-23.35,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgWAjIATgcIgDAAQgHAAgEgFQgEgEAAgIQAAgKAGgHQAHgHAKAAQAKAAAGAGQAFAGAAAHQAAAFgDAFIgGAKIgTAegAgEgRQgCACAAAEQAAAHAGAAQADAAACgDQACgCAAgFQAAgGgGAAQgDAAgCADg");
	this.shape_20.setTransform(-28.125,0.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgSAfQgGgFAAgJQAAgMALgGQgFgFAAgHQAAgJAGgGQAHgGAKgBQAJABAFAFQAGAGAAAIQAAAFgDAFQgDAEgEABQAFAFAAAHQAAAKgGAHQgHAGgKABQgKgBgFgEgAgGAJQgDACAAAEIABAEQADADACAAQADAAACgDQACgDABgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgDgCAAQgDAAgCADgAgBgSQgBACgBAEIACAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQADAAACgDQACgCAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCACg");
	this.shape_21.setTransform(-33.4,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgQAHIADgNIAeAAIgDANg");
	this.shape_22.setTransform(-37.975,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgKAjIAKg0IgRAMIAEgRIAPgMIAPAAIgNBFg");
	this.shape_23.setTransform(-42.15,0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgZAjIACgNIAcgcIAFgEIABgFQAAgFgFAAQgGAAgBAHIgPAAQADgVAVAAQAIAAAFAFQAFAEAAAJQAAAGgDAEIgHAIIgTATIAXAAIgDAOg");
	this.shape_24.setTransform(-47.525,0.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgRAdQgFgFAAgIQAAgFADgFIAGgKIATgeIARAAIgUAcIAEAAQAHAAAEAFQAEAEAAAIQAAALgGAGQgHAHgKAAQgKAAgGgGgAgEAIQgCADAAAEQAAAHAGAAQADAAACgDQACgDAAgEQAAgHgGAAQgDAAgCADg");
	this.shape_25.setTransform(-52.625,0.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgQAHIADgNIAeAAIgDANg");
	this.shape_26.setTransform(-56.975,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AgTAeQgEgFAAgHIAAgFIAFgZQADgMAHgFQAGgGAIAAQAIABAGAFQAEAFAAAHIAAAFIgFAaQgDALgHAGQgGAEgIABQgIAAgGgGgAgCgNIgGAbIAAADQAAAFAFAAQAFAAABgHIAGgbIAAgEQAAgEgFAAQgFgBgBAIg");
	this.shape_27.setTransform(-61.275,0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AgRAdQgFgFAAgIQAAgFADgFIAGgKIATgeIARAAIgUAcIAEAAQAHAAAEAFQAEAEAAAIQAAALgGAGQgHAHgKAAQgKAAgGgGgAgEAIQgCADAAAEQAAAHAGAAQADAAACgDQACgDAAgEQAAgHgGAAQgDAAgCADg");
	this.shape_28.setTransform(-66.575,0.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgSAfQgGgFAAgJQAAgMALgGQgFgFAAgHQAAgJAHgGQAGgGAKgBQAIABAGAFQAGAGAAAIQAAAFgDAFQgDAEgEABQAFAFAAAHQAAAKgGAHQgHAGgKABQgKgBgFgEgAgHAJQgCACAAAEIABAEQADADADAAQACAAACgDQADgDAAgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgDgCAAQgDAAgDADgAgBgSQgBACAAAEIABAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQADAAACgDQADgCgBgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCACg");
	this.shape_29.setTransform(-71.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-6.9,155.5,13.9);


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
	this.instance.setTransform(-24,-88,0.6778,0.6778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-24,-88,187.8,72.5), null);


(lib.Img1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG();
	this.instance.setTransform(-164,-178,1.2085,1.2085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-164,-178,371,181.3), null);


(lib.Head = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("AgNAgQgIgCgFgGIALgKQAFAFALAAQALAAAAgGQAAgGgHAAIgKgBQgSgCAAgPQAAgKAIgGQAHgFAJAAQARAAAIAHIgKALQgFgFgKAAQgIAAAAAHQgBAEAIABIAJABQASACABAQQAAAKgIAGQgIAFgLAAQgJAAgFgBg");
	this.shape.setTransform(36.75,-0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgbAAQAAgPAHgIQAIgJAMAAQANAAAIAJQAHAJAAANIAAAGIgoAAQAAAHAFAEQADADAGAAQAIAAAHgFIAKAJQgGAGgFACQgGACgIAAQgdAAAAghgAAMgFIgBgHQgDgGgIgBQgGABgEAGIgCAHIAYAAIAAAAg");
	this.shape_1.setTransform(30.35,-0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgPAaQgJgIAAgSQAAgRAJgJQAIgGALAAQANAAAIAJIgLALQgEgGgGAAQgFABgEAEQgDAFAAAIQAAAKADAFQAEADAFAAQAGAAAEgEIALALQgJAIgMAAQgLAAgIgHg");
	this.shape_2.setTransform(24.15,-0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgHAtIAAg+IAPAAIAAA+gAgHgfIAAgNIAPAAIAAANg");
	this.shape_3.setTransform(19.325,-1.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgXAhIAAhAIAQAAIAAAGQAGgHAJAAQAKAAAGAGIgNANQgDgEgFAAQgDAAgDADQgEADAAAGIAAAmg");
	this.shape_4.setTransform(15.275,-0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgaAtIAAhYIAPAAIAAAHQAHgIAJAAQAKAAAGAHQADAEACAHIABAQIgBAOQgCAIgDAEQgGAGgKgBQgJAAgGgFIAAAdgAgIgYQgCAFAAAJQAAAJACADQADAFAFAAQAHAAADgFQABgDAAgJQAAgJgBgFQgDgFgHAAQgFAAgDAFg");
	this.shape_5.setTransform(8.65,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgbAAQAAgPAHgIQAIgJAMAAQAOAAAHAJQAHAJAAANIAAAGIgoAAQAAAHAFAEQADADAGAAQAJAAAFgFIALAJQgGAGgFACQgGACgIAAQgdAAAAghgAANgFIgCgHQgDgGgIgBQgGABgEAGIgCAHIAZAAIAAAAg");
	this.shape_6.setTransform(-1.25,-0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAFAsQgIAAgGgGQgEgFAAgHIAAhFIAPAAIAABEQAAAGAGAAIAGAAIAAANg");
	this.shape_7.setTransform(-6.4,-1.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgUAbQgGgFAAgJQAAgIAGgFQAGgFALAAIAOAAIAAgDQAAgLgLAAQgIAAgFAHIgKgLQAFgFAFgCQAFgCAIAAQAbAAAAAXIAAAqIgQAAIAAgGQgGAGgJAAQgLAAgFgGgAgKANQAAAHAKAAQAFAAADgDQADgDAAgGIAAgDIgMAAQgJAAAAAIg");
	this.shape_8.setTransform(-12.125,-0.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgNAgQgIgCgFgGIAKgKQAGAFAKAAQAMAAAAgGQAAgGgHAAIgKgBQgSgCAAgPQAAgKAHgGQAIgFAJAAQARAAAIAHIgKALQgFgFgKAAQgJAAAAAHQAAAEAIABIAJABQASACABAQQAAAKgJAGQgGAFgNAAQgIAAgFgBg");
	this.shape_9.setTransform(-18.5,-0.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AANAgIgNgnIgNAnIgNAAIgUg/IARAAIALAnIANgnIALAAIANAnIALgnIARAAIgUA/g");
	this.shape_10.setTransform(-29.025,-0.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgTAZQgEgEgCgGQgBgGAAgJQAAgIABgFQACgHAEgEQAIgIALAAQANAAAHAIQAEAEACAHQABAFAAAIQAAAJgBAGQgCAGgEAEQgIAIgMAAQgLAAgIgIgAgHgOQgDADAAALQAAAMADAEQADACAEAAQAFAAACgCQAEgEAAgMQAAgLgEgDQgCgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(-37.075,-0.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AAFAsQgJAAgFgGQgEgFAAgHIAAhFIAPAAIAABEQAAAGAGAAIAGAAIAAANg");
	this.shape_12.setTransform(-42.25,-1.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AgWAsIAAgOIAEAAIAFgBIADgFIADgIIgWg7IARAAIAMAoIANgoIARAAIgcBKQgCAFgBADQgFAFgJAAg");
	this.shape_13.setTransform(-50.425,0.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AgTAnQgFgEgBgIIgBgPIABgPQABgHAFgEQAFgHAKAAQAJABAGAGIAAgdIAQAAIAABXIgQAAIAAgGQgGAHgIgBQgLABgFgGgAgIgBQgCAEAAAJQAAAJACAEQACAFAGAAQAGAAADgFQACgFAAgIQAAgJgCgEQgDgFgGAAQgGAAgCAFg");
	this.shape_14.setTransform(-57.1,-1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgUAbQgGgFAAgJQAAgIAGgFQAGgFALAAIAOAAIAAgDQAAgLgLAAQgIAAgFAHIgKgLQAFgFAFgCQAFgCAIAAQAbAAAAAXIAAAqIgQAAIAAgGQgGAGgJAAQgLAAgFgGgAgKANQAAAHAKAAQAFAAADgDQADgDAAgGIAAgDIgMAAQgJAAAAAIg");
	this.shape_15.setTransform(-63.925,-0.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AgbAAQAAgPAHgIQAIgJAMAAQANAAAIAJQAHAJAAANIAAAGIgoAAQAAAHAFAEQADADAGAAQAIAAAHgFIAKAJQgGAGgFACQgGACgIAAQgdAAAAghgAAMgFIgBgHQgDgGgIgBQgGABgEAGIgCAHIAYAAIAAAAg");
	this.shape_16.setTransform(-70.45,-0.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgXAhIAAhAIAQAAIAAAGQAGgHAJAAQAKAAAGAGIgNANQgDgEgFAAQgDAAgDADQgEADAAAGIAAAmg");
	this.shape_17.setTransform(-76.225,-0.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AAFAsQgJAAgEgGQgFgFAAgHIAAhFIAPAAIAABEQAAAGAGAAIAGAAIAAANg");
	this.shape_18.setTransform(-81.25,-1.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgUAbQgGgFAAgJQAAgIAGgFQAGgFALAAIAOAAIAAgDQAAgLgLAAQgIAAgFAHIgKgLQAFgFAFgCQAFgCAIAAQAbAAAAAXIAAAqIgQAAIAAgGQgGAGgJAAQgLAAgFgGgAgKANQAAAHAKAAQAFAAADgDQADgDAAgGIAAgDIgMAAQgJAAAAAIg");
	this.shape_19.setTransform(-86.975,-0.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgXAhIAAhAIAQAAIAAAGQAGgHAJAAQAKAAAGAGIgNANQgDgEgFAAQgDAAgDADQgEADAAAGIAAAmg");
	this.shape_20.setTransform(-95.375,-0.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgTAbQgHgGAAgMIAAgpIAQAAIAAAnQAAAFAEAEQADACADAAQAEAAADgCQAEgEAAgFIAAgnIAQAAIAABAIgQAAIAAgGQgGAHgJgBQgKABgFgGg");
	this.shape_21.setTransform(-102.225,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgTAZQgEgEgCgGQgBgGAAgJQAAgIABgFQACgHAEgEQAIgIALAAQANAAAHAIQAEAEACAHQABAFAAAIQAAAJgBAGQgCAGgEAEQgIAIgMAAQgLAAgIgIgAgHgOQgDADAAALQAAAMADAEQADACAEAAQAFAAACgCQAEgEAAgMQAAgLgEgDQgCgEgFAAQgEAAgDAEg");
	this.shape_22.setTransform(-109.075,-0.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgKAtIAAgyIgGAAIAAgMIAGAAIAAgIQAAgIAFgFQAFgGAIAAIAJAAIAAAOIgGAAQgGAAAAAGIAAAHIAMAAIAAAMIgMAAIAAAyg");
	this.shape_23.setTransform(-117.375,-1.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgTAZQgEgEgCgGQgBgGAAgJQAAgIABgFQACgHAEgEQAIgIALAAQANAAAHAIQAEAEACAHQABAFAAAIQAAAJgBAGQgCAGgEAEQgIAIgMAAQgLAAgIgIgAgHgOQgDADAAALQAAAMADAEQADACAEAAQAFAAACgCQAEgEAAgMQAAgLgEgDQgCgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(-122.875,-0.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgaAtIAAhYIAPAAIAAAHQAHgIAJAAQAKAAAGAHQAEAEABAHIABAQIgBAOQgBAIgEAEQgGAGgKgBQgJAAgGgFIAAAdgAgIgYQgCAFAAAJQAAAJACADQACAFAGAAQAHAAACgFQACgDAAgJQAAgJgCgFQgCgFgHAAQgGAAgCAFg");
	this.shape_25.setTransform(-132.5,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgTAZQgEgEgCgGQgBgGAAgJQAAgIABgFQACgHAEgEQAIgIALAAQANAAAHAIQAEAEACAHQABAFAAAIQAAAJgBAGQgCAGgEAEQgIAIgMAAQgLAAgIgIgAgHgOQgDADAAALQAAAMADAEQADACAEAAQAFAAACgCQAEgEAAgMQAAgLgEgDQgCgEgFAAQgEAAgDAEg");
	this.shape_26.setTransform(-139.425,-0.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AAJApQgJAAgFgGQgEgFAAgIIAAgeIgHAAIAAgNIAHAAIAAgTIAPAAIAAATIALAAIAAANIgLAAIAAAdQAAAHAGAAIAFAAIAAANg");
	this.shape_27.setTransform(-145.075,-1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AALAhIAAgmQgBgHgDgDQgDgCgEAAQgDAAgDACQgEAEAAAGIAAAmIgQAAIAAhAIAQAAIAAAGQAGgHAJAAQAJAAAHAGQAGAHAAALIAAApg");
	this.shape_28.setTransform(-153.55,-0.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgTAZQgEgEgCgGQgBgGAAgJQAAgIABgFQACgHAEgEQAIgIALAAQANAAAHAIQAEAEACAHQABAFAAAIQAAAJgBAGQgCAGgEAEQgIAIgMAAQgLAAgIgIgAgHgOQgDADAAALQAAAMADAEQADACAEAAQAFAAACgCQAEgEAAgMQAAgLgEgDQgCgEgFAAQgEAAgDAEg");
	this.shape_29.setTransform(-160.475,-0.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#02216C").s().p("AgpBeIAIgqIAqAAIgJAqgAgXAfIAOh8IAzAAIgkB8g");
	this.shape_30.setTransform(5.675,-23.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#02216C").s().p("AgzBaQgPgHgNgNIAggcQANAOAaAAQALAAAJgFQAJgGAAgJQAAgLgQgFIgNgDQgsgMAAghQAAgfAVgSQAVgSAiAAQAmABASAXIgfAbQgKgMgUAAQgNAAgHAGQgHAHAAAIQAAAGAFADQADACAHACIAOAFQAYAFAKAMQAKALAAAVQAAAggYARQgVAPggAAQgYgBgPgFg");
	this.shape_31.setTransform(-7.275,-23.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#02216C").s().p("Ag2BeIAeiUIgtAAIAIgnICDAAIgIAnIgrAAIgdCUg");
	this.shape_32.setTransform(-20.075,-23.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02216C").s().p("AAPBeIgnhgIgUBgIgsAAIAmi7IAkAAIAnBhIAUhhIAsAAIgmC7g");
	this.shape_33.setTransform(-37.425,-23.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#02216C").s().p("Ag/BPQgQgPAAgYIABgQIAYh2IAsAAIgYB4IgBALQgBATAUAAQAWAAAHggIAYh2IAsAAIgZB6QgHAigWASQgUAPgaAAQgbAAgRgQg");
	this.shape_34.setTransform(-53.7,-23.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02216C").s().p("Ag5BPQgPgPAAgYQAAgPAFgZQAGgdAEgNQAHgSALgMQAVgXAgAAQAcAAARARQAOAQAAAWQAAAQgFAYQgGAegEANQgGASgMAMQgUAXghAAQgcAAgQgRgAgHgvQgIAJgIAmQgFAZAAAMQAAAJAFAGQAFAFAIAAQAKAAAIgJQAIgIAIgoQAFgYAAgMQAAgJgFgGQgFgFgIAAQgLAAgHAJg");
	this.shape_35.setTransform(-70.425,-23.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#02216C").s().p("Ag5BPQgPgPgBgYQAAgPAGgZQAFgdAFgNQAHgSALgMQAUgXAhAAQAdAAAQASQAPAQAAAaIgsAAQgBgVgRAAQgMAAgGAIQgKAJgHAnQgGAZAAAMQAAAUAUAAQARAAAIgVIAtAAQgTA7g2ABQgdAAgQgRg");
	this.shape_36.setTransform(-85.6,-23.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#02216C").s().p("AgzBaQgPgHgNgNIAggcQANAOAaAAQALAAAJgFQAJgGAAgJQAAgLgQgFIgNgDQgsgMAAghQAAgfAVgSQAVgSAiAAQAmABASAXIgfAbQgKgMgUAAQgNAAgHAGQgHAHAAAIQAAAGAFADQADACAHACIAOAFQAYAFAKAMQAKALAAAVQAAAggYARQgVAPggAAQgYgBgPgFg");
	this.shape_37.setTransform(-101.225,-23.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#02216C").s().p("AgoBeIAmi7IArAAIgmC7g");
	this.shape_38.setTransform(-112.125,-23.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#02216C").s().p("AhOBeIAmi7IA+AAQAaAAAPAOQAQAOAAAZQAAAKgHAeQgHAkgFANQgEAOgNALQgTAUghAAgAgbA3IAUAAQANAAAIgIQAEgFADgHQADgKAFgZQAFgcAAgHQAAgUgTABIgTAAg");
	this.shape_39.setTransform(-124.4,-23.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02216C").s().p("Ag/BeIAmi7IAqAAIgcCUIBLAAIgHAng");
	this.shape_40.setTransform(1.6,-53.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#02216C").s().p("AAlBeIgCgeIg2AAIgPAeIgvAAIBli7IAjAAIAbC7gAAfAdIgFg3IgcA3IAhAAg");
	this.shape_41.setTransform(-14.55,-53.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#02216C").s().p("AAPBeIgnhgIgUBgIgsAAIAmi7IAkAAIAnBhIAUhhIAsAAIgmC7g");
	this.shape_42.setTransform(-29.475,-53.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02216C").s().p("Ag5BPQgPgPAAgYQAAgPAFgZQAGgdAEgNQAHgSALgMQAVgXAgAAQAcAAARARQAOAQAAAWQAAAQgFAYQgGAegEANQgGASgMAMQgUAXghAAQgcAAgQgRgAgHgvQgIAJgIAmQgFAZAAAMQAAAJAFAGQAFAFAIAAQAKAAAIgJQAIgIAIgoQAFgYAAgMQAAgJgFgGQgFgFgIAAQgLAAgHAJg");
	this.shape_43.setTransform(-46.125,-53.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#02216C").s().p("AgoBeIAmi7IArAAIgmC7g");
	this.shape_44.setTransform(-57.925,-53.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#02216C").s().p("Ag2BeIAeiUIgtAAIAIgnICDAAIgIAnIgrAAIgdCUg");
	this.shape_45.setTransform(-67.625,-53.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#02216C").s().p("AgoBeIAmi7IArAAIgmC7g");
	this.shape_46.setTransform(-80.225,-53.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#02216C").s().p("AhOBeIAmi7IA+AAQAaAAAQAOQAPAOAAAZQAAAKgGAeQgIAkgFANQgFAOgLALQgTAUgiAAgAgaA3IATAAQAMAAAJgIQAEgFADgHQADgKAFgZQAGgcAAgHQAAgUgVABIgSAAg");
	this.shape_47.setTransform(-92.5,-53.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#02216C").s().p("AhOBeIAmi7IA+AAQAaAAAQAOQAPAOAAAZQAAAKgGAeQgIAkgEANQgFAOgMALQgUAUghAAgAgaA3IATAAQAMAAAJgIQAEgFADgHQADgKAFgZQAGgcAAgHQAAgUgVABIgSAAg");
	this.shape_48.setTransform(-108.6,-53.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#02216C").s().p("AAlBeIgCgeIg2AAIgQAeIguAAIBli7IAiAAIAcC7gAAgAdIgHg3IgbA3IAiAAg");
	this.shape_49.setTransform(-126.3,-53.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-171.3,-72.2,218.8,78.9), null);


(lib.Cta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#092D74").s().p("AgoAjIgBgfIAAg7IAlgEIAmgEIACAPIADAQIgWABIgTADIgBAIIgBAJIAQgDIAQgDIABAMIABALIgTADIgPACIAAAQIAUgDIAWgDIACAQIACAQIglADIgtAIg");
	this.shape.setTransform(-41.3,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#092D74").s().p("Agyg4QAjgIAWAAQAgAAAEAWQADAbgeAQIAjAmIggAYIgjgvQgBAXADASIgjAIQADhZgEgggAgOgiIgCAMIAAAMQAIgDAGgFQALgHgCgGQAAgEgHgBIgOACg");
	this.shape_1.setTransform(-50.6,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#092D74").s().p("AgoAtQgHgIgEgNQgEgLABgNQABgWANgSQARgXAaAAQAWAAAQATQAIAKAEALQADALgBAMQgBAXgNASQgRAXgaAAQgXAAgPgTgAgOgPQgFAKAAAKQgBAGACAFQACAHAEADQAFAEAHABQALAAAGgJQAEgHAAgLQAAgMgFgLQgFgKgJgBQgJABgHAOg");
	this.shape_2.setTransform(-61.5242,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#092D74").s().p("AhJA6QATg0AJg/IAkgGIAKA9IAJg7IAigCQAHA5AXA/IgmAHIgOg+IgIA7IgeACIgIhAIgMBBg");
	this.shape_3.setTransform(-74.125,0.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#092D74").s().p("Agxg7IAngGIADAPQAGAXAFARQADAKAEAFIAAhAIAogGQgIBDAEAxIgkAIIgEgHIgRgYQgFgGgBgDQAAAVACATIgjAHg");
	this.shape_4.setTransform(-90.75,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#092D74").s().p("Agyg4QAigIAXAAQAgAAAFAWQADAbgeAQIAiAmIgfAYIgkgvQgBAXACASIgjAIQAEhZgEgggAgPgiIAAAMIgBAMQAIgDAGgFQALgHgCgGQgBgEgGgBIgPACg");
	this.shape_5.setTransform(-101.05,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#092D74").s().p("Ag4A5QAVg5AKg5IAxgHQAKA0AXBCIgnAIIgFgVIgYACIgFAWgAAIATIgJgsIgHAsIAQAAg");
	this.shape_6.setTransform(-111.775,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#092D74").s().p("AgoAjIAAgfIgBg7IAlgEIAmgEIACAPIADAQIgWABIgTADIgBAIIgBAJIAQgDIAQgDIABAMIACALIgUADIgPACIAAAQIAUgDIAWgDIACAQIACAQIglADIgtAIg");
	this.shape_7.setTransform(-121.5,-0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#092D74").s().p("Agmg4IAmgFQgEAvAAAmIAngFIAEAgQgfABguAKg");
	this.shape_8.setTransform(-129.8,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AkyiCIJlAAQA2AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg2AAIplAAQg2AAgngmQgmgmAAg3IAAAAQAAg2AmgmQAngmA2AAg");
	this.shape_9.setTransform(-85.6255,-0.4599,1.404,1.0366);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6A81C").s().p("AkxCDQg3AAgmgmQgngmAAg3IAAAAQAAg2AngmQAmgmA3AAIJjAAQA3AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg3AAg");
	this.shape_10.setTransform(-85.6255,-0.4599,1.404,1.0366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-148,-15,124.8,29.2), null);


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


(lib.Sparkle_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sparkle1();
	this.instance.setTransform(219.5,32.55,0.3599,0.3599,0.5296,0,0,103.4,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-89.4704},14).to({rotation:0.5296,x:219.55,y:32.5},15).to({rotation:90.5296},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.9,-20.2,105.4,105.5);


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
	this.frame_201 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(201).call(this.frame_201).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(202));

	// glitter 1 copy 4
	this.instance = new lib.Sparkle_1();
	this.instance.setTransform(273,520,0.1862,0.1862,0,0,0,220.5,33.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.5274,scaleY:0.5274,x:273.1,y:519.95},10,cjs.Ease.get(1)).wait(153));

	// glitter 1 copy 5
	this.instance_1 = new lib.Sparkle_1();
	this.instance_1.setTransform(276.5,563.55,0.3724,0.3724,0,0,0,220.5,33.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({regX:220.6,regY:33.6,scaleX:1.0548,scaleY:1.0548,x:276.65},10,cjs.Ease.get(1)).wait(158));

	// glitter 1 copy 2
	this.instance_2 = new lib.Sparkle_1();
	this.instance_2.setTransform(54,47,0.1862,0.1862,0,0,0,220.5,33.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.5274,scaleY:0.5274,x:54.1,y:46.95},10,cjs.Ease.get(1)).wait(169));

	// glitter 1 copy 3
	this.instance_3 = new lib.Sparkle_1();
	this.instance_3.setTransform(28.5,90.55,0.3724,0.3724,0,0,0,220.5,33.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({regX:220.6,regY:33.6,scaleX:1.0548,scaleY:1.0548,x:28.65},10,cjs.Ease.get(1)).wait(174));

	// glitter 1 copy
	this.instance_4 = new lib.Sparkle_1();
	this.instance_4.setTransform(283,117,0.1862,0.1862,0,0,0,220.5,33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.5274,scaleY:0.5274,x:283.1,y:116.95},10,cjs.Ease.get(1)).wait(169));

	// glitter 1
	this.instance_5 = new lib.Sparkle_1();
	this.instance_5.setTransform(267.5,67.55,0.3724,0.3724,0,0,0,220.5,33.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({regX:220.6,regY:33.6,scaleX:1.0548,scaleY:1.0548,x:267.65},10,cjs.Ease.get(1)).wait(174));

	// phn
	this.instance_6 = new lib.phn("synched",0);
	this.instance_6.setTransform(149,563.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(79));

	// Cta
	this.instance_7 = new lib.Cta();
	this.instance_7.setTransform(235.75,589.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({_off:false},0).to({y:572.15,alpha:1},9,cjs.Ease.get(1)).wait(60).to({y:529.15},9,cjs.Ease.get(1)).wait(88));

	// Logo
	this.instance_8 = new lib.Logo_1();
	this.instance_8.setTransform(80.15,584.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({y:564.7,alpha:1},9,cjs.Ease.get(1)).wait(69).to({y:521.7},9,cjs.Ease.get(1)).wait(88));

	// Img 1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(128.7,488.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({y:458.9,alpha:1},9,cjs.Ease.get(1)).wait(78).to({y:428.9},9,cjs.Ease.get(1)).wait(88));

	// sub head_02
	this.instance_10 = new lib.subhead_02("synched",0);
	this.instance_10.setTransform(228.35,224.35,1.06,1.06);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:223.35,alpha:1},11).wait(97));

	// sub head_01
	this.instance_11 = new lib.subhead_01("synched",0);
	this.instance_11.setTransform(76.35,220.05,0.94,0.94);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({_off:false},0).to({x:71.35,alpha:1},11,cjs.Ease.get(0.99)).wait(106));

	// Head
	this.instance_12 = new lib.Head();
	this.instance_12.setTransform(224.7,230,1.188,1.188,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({regX:0,regY:0,x:224.6,y:260.8,alpha:1},9,cjs.Ease.get(1)).wait(56).to({alpha:0},13,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// RRLogo
	this.instance_13 = new lib.Symbol8();
	this.instance_13.setTransform(139.65,101.1,0.2477,0.2477);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(193));

	// Corner
	this.instance_14 = new lib.Corner();
	this.instance_14.setTransform(156.9,600.85,0.7895,0.7895,180);

	this.instance_15 = new lib.Corner();
	this.instance_15.setTransform(144,-2,0.7895,0.7895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(202));

	// Background
	this.instance_16 = new lib.BGG();
	this.instance_16.setTransform(-109,1,0.6236,0.6236);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AumdPMAAAg6dIdNAAMAAAA6dg");
	this.shape.setTransform(146.325,410.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_16}]}).wait(202));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-2,498.9,605);


// stage content:
(lib.WFSB_216412_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
		{src:"BGG.png", id:"BGG"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"Logo.png", id:"Logo"},
		{src:"newheader.jpg", id:"newheader"},
		{src:"SBH_01.png", id:"SBH_01"},
		{src:"Sparkle.png", id:"Sparkle"},
		{src:"Subhead_02.png", id:"Subhead_02"}
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