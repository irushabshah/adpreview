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



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,961);


(lib.Corner = function() {
	this.initialize(img.Corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,72);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,154);


(lib.LOGON = function() {
	this.initialize(img.LOGON);
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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhMIrIgEgGIAAAGIsZAAQivAAAAjWIAAqpQAAjWCvAAIbTAAQCvAAAADWIAAKpQAADWivAAg");
	mask.setTransform(11.8216,-1.075);

	// Layer_1
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
	this.shape.graphics.f("#02216C").s().p("AANAVIAFgYIABgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCgBQgGAAAAAGIgGAYIgLAAIAFgYIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCgBQgFAAgCAGIgFAYIgMAAIAIgpIAMAAIgBAEQAFgEAFAAQAFAAADAEQAFgEAIAAQAEAAADACQAEAEAAAFIAAAFIgGAZg");
	this.shape.setTransform(29.8,5.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgNASQgEgEAAgHIABgHIADgJQABgEADgDQAFgEAIAAQAFgBAFAEQAEAEAAAGIgBAHIgDAKQgBAEgDADQgFAEgIABQgFAAgFgEgAgBgIQgBACgCAGIgBAGQAAAFAEgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQABgCACgHIABgFQAAgEgEAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAg");
	this.shape_1.setTransform(24.75,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgLASQgFgEAAgHIAAgHQAEgVARABQAHgBAFAGIgJAIQgCgCgDAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgDADgBAFIAAAFQAAAGAEgBQACAAADgDIAHAKQgGAEgHABQgGAAgEgEg");
	this.shape_2.setTransform(21.275,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgHAHIADgNIAMAAIgDANg");
	this.shape_3.setTransform(18.075,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgPAcIgHg3IAOAAIADAfIAOgfIANAAIgbA3g");
	this.shape_4.setTransform(15.85,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AAFAcIgFgVIgFAAIgFAVIgMAAIALg3IASAAQAJAAAEAFQADAEABAHQgBAFgCAFQgDADgGADIAHAXgAgDgDIAGAAQAEAAACgCQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgFgEAAIgHAAg");
	this.shape_5.setTransform(10.6,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AAAAcQgEAAgDgDQgCgDgBgEIAAgDIAJgqIALAAIgIApIgBACQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIAEAAIgBALg");
	this.shape_6.setTransform(7,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AABAcQgFAAgDgDQgDgDAAgEIAAgDIAJgqIAMAAIgJApIAAACQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIAFAAIgDALg");
	this.shape_7.setTransform(4.6,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgLAcIAIgnIALAAIgIAngAgCgSIACgJIAMAAIgCAJg");
	this.shape_8.setTransform(2.525,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AABAcIAFgWIgNAAIgFAWIgNAAIAMg3IANAAIgFAWIANAAIAFgWIANAAIgMA3g");
	this.shape_9.setTransform(-0.975,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AACAcIgGgQIgDADIgDANIgMAAIALg3IAMAAIgFAbIANgNIAOAAIgSARIALAYg");
	this.shape_10.setTransform(-5.525,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgLASQgFgEAAgHIAAgHQAEgVARABQAHgBAFAGIgJAIQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgDADgBAFIAAAFQAAAGAEgBQACAAADgDIAHAKQgGAEgHABQgGAAgEgEg");
	this.shape_11.setTransform(-9.275,5.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AgMASQgFgEAAgHIAAgHIAEgJQABgEADgDQAFgEAIAAQAGgBAEAEQAEAEAAAGIgBAHIgCAKQgCAEgDADQgFAEgIABQgFAAgEgEgAgBgIQgCACgBAGIgBAGQAAAFAEgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAgBABAAQABgCACgHIABgFQAAgEgEAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAg");
	this.shape_12.setTransform(-13.15,5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AABAcQgFAAgDgDQgCgDAAgEIAAgDIAIgqIALAAIgIApIgBACQABAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAIAFAAIgCALg");
	this.shape_13.setTransform(-16.35,4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AANAVIAFgYIABgCQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCgBQgFAAgBAGIgGAYIgLAAIAFgYIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgCgBQgGAAgBAGIgFAYIgMAAIAIgpIAMAAIAAAEQADgEAHAAQAEAAADAEQAFgEAIAAQAEAAADACQAEAEAAAFIgBAFIgEAZg");
	this.shape_14.setTransform(-20.85,5.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgMASQgGgEAAgHQAAgLAGgIQAGgIAJAAQAHAAAEADQAFAFAAAGIgCAKIgXAAIAAACQAAAFAGAAQAEAAAEgEIAGAJQgGAFgJABQgHgBgEgDgAgEgDIALAAIAAgDQAAgEgFAAQgEAAgCAHg");
	this.shape_15.setTransform(-25.975,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AABAcIAFgWIgNAAIgFAWIgNAAIAMg3IANAAIgFAWIANAAIAFgWIANAAIgMA3g");
	this.shape_16.setTransform(-30.325,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgOAZQgFgEAAgGIABgEIAMAAIgBACQAAAEAFAAQACAAACgCQACgCAAgDQAAgFgEAAIgCAAIACgKIABAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQACgDAAgCQAAgEgEAAQgEAAgBAFIgMAAQADgQAQAAQAHAAAEAEQAEAEAAAFQAAAKgIAEQAEADAAAGQAAAJgGAFQgFAGgHgBQgHABgFgEg");
	this.shape_17.setTransform(21.225,-3.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AgPAZQgEgFAAgHQAAgKAJgDQgEgEAAgGQAAgIAFgEQAFgFAIAAQAHAAAFAEQAEAEAAAHQAAAEgDAEQgCADgDABQAEAEAAAGQAAAIgFAFQgGAGgHgBQgIAAgFgDgAgFAHQgCACAAADIABAEQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQACgCABgEIgCgDQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgDAAgCACgAAAgPQgCACAAAEIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCAAgCIgBgEQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAg");
	this.shape_18.setTransform(17.25,-3.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgRAcIAPgWIgDAAQgFAAgDgEQgEgDAAgHQAAgIAFgFQAFgGAIAAQAIAAAFAFQAEAEAAAGQAAAFgCADIgFAIIgPAYgAgDgOQgCADAAADQAAAFAFAAQACAAACgCQACgCAAgEQAAgFgFAAQgCAAgCACg");
	this.shape_19.setTransform(13.475,-3.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgOAZQgFgFAAgHQAAgKAJgDQgEgEAAgGQAAgIAFgEQAGgFAHAAQAHAAAFAEQAEAEAAAHQAAAEgDAEQgCADgDABQAEAEAAAGQAAAIgFAFQgFAGgIgBQgIAAgEgDgAgFAHQgCACAAADIACAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQADgCAAgEIgBgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgDAAgCACgAAAgPQgCACAAAEIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCAAgCIAAgEQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAg");
	this.shape_20.setTransform(9.25,-3.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgMAGIACgLIAXAAIgCALg");
	this.shape_21.setTransform(5.625,-3.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgIAcIAIgpIgNAKIADgPIAMgJIAMAAIgLA3g");
	this.shape_22.setTransform(2.35,-3.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgUAcIACgLIAXgVIACgEQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgEAAQgFAAgBAGIgLAAQACgRAQAAQAIAAADAEQAEAEAAAGQAAAFgCAEIgGAGIgPAPIASAAIgCALg");
	this.shape_23.setTransform(-1.9,-3.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgNAXQgEgEAAgGQAAgEACgEIAFgIIAPgYIANAAIgPAXIACgBQAGAAADAEQAEADAAAHQAAAIgFAGQgGAFgHAAQgJAAgEgFgAgDAGQgCACAAAEQAAAFAFAAQACAAACgCQACgCAAgEQAAgFgFAAQgCAAgCACg");
	this.shape_24.setTransform(-5.925,-3.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgMAGIACgLIAXAAIgCALg");
	this.shape_25.setTransform(-9.375,-3.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgOAYQgFgEAAgFIABgFIAFgUQABgJAGgFQAEgDAHAAQAGAAAFAEQADAEAAAGIAAAEIgEAUQgCAJgGAFQgFADgFAAQgIABgDgFgAgCgKIgEAVIAAADQAAADAEAAQAEABABgHIAEgUIAAgDQAAgEgDAAQgFAAgBAGg");
	this.shape_26.setTransform(-12.8,-3.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AgNAXQgEgEAAgGQAAgEACgEIAFgIIAPgYIANAAIgPAXIACgBQAGAAADAEQAEADAAAHQAAAIgFAGQgGAFgHAAQgJAAgEgFgAgDAGQgCACAAAEQAAAFAFAAQACAAACgCQACgCAAgEQAAgFgFAAQgCAAgCACg");
	this.shape_27.setTransform(-16.975,-3.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AgOAZQgFgFAAgHQAAgKAIgDQgDgEAAgGQAAgIAFgEQAGgFAHAAQAHAAAEAEQAFAEAAAHQAAAEgDAEQgCADgDABQAEAEAAAGQAAAIgFAFQgFAGgIgBQgIAAgEgDgAgFAHQgBACAAADIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQACgCAAgEIgBgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgDAAgCACgAAAgPQgCACAAAEIABACQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCAAgCIgBgEQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAg");
	this.shape_28.setTransform(-20.8,-3.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-9.7,68.1,19.5);


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

	// Layer_1
	this.instance = new lib.LOGON();
	this.instance.setTransform(-65,-19,0.4492,0.4492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-65,-19,124.5,48.1), null);


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
	this.instance.setTransform(-79,-187,0.8963,0.8963);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-79,-187,305.7,138.1), null);


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

	// Hours Fri. 9-5pm  Sat. 9-4pm | Sun 11-4pm FREE Food Truck Lunch
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02216C").s().p("AgOAhQgIgDgFgGIALgKQAFAGAMAAQALAAAAgHQAAgFgHgCIgKAAQgTgCAAgQQAAgKAIgGQAHgGAKAAQARAAAJAIIgKAKQgGgEgKAAQgJAAAAAHQAAAEAHABIAKABQATADABARQAAAKgJAGQgIAFgMAAQgIAAgGgBg");
	this.shape.setTransform(-32.65,-9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgcAAQAAgPAHgKQAIgIANgBQAOABAHAIQAJAJgBAPIAAAGIgpAAQAAAHAEAEQAEAEAGAAQAIAAAHgGIALAKQgGAFgFADQgHACgIAAQgfABABgjgAANgFIgCgIQgDgGgIgBQgHABgDAGIgCAIIAZAAIAAAAg");
	this.shape_1.setTransform(-39.3,-9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgPAbQgKgIAAgTQAAgSAKgJQAIgGALgBQAOABAIAIIgLAMQgFgGgGAAQgFABgEAEQgDAEAAAKQAAAKADAFQAEAEAFAAQAGAAAFgFIALALQgJAJgNAAQgLAAgIgHg");
	this.shape_2.setTransform(-45.875,-9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgHAuIAAhAIAQAAIAABAgAgIggIAAgNIARAAIAAANg");
	this.shape_3.setTransform(-50.875,-10.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_4.setTransform(-55.125,-9.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgbAuIAAhbIAQAAIAAAHQAGgHAKAAQAKAAAGAGQAEAEACAIIABAQIgBAPQgCAIgEAEQgGAHgKAAQgKAAgFgHIAAAegAgJgZQgBAEAAAKQAAAKABADQADAFAGAAQAHAAACgFQACgDAAgKQAAgKgCgEQgCgFgHAAQgGAAgDAFg");
	this.shape_5.setTransform(-62.025,-8.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgcAAQgBgPAJgKQAHgIANgBQAOABAIAIQAHAJAAAPIAAAGIgpAAQAAAHAEAEQAEAEAGAAQAJAAAGgGIAKAKQgFAFgGADQgFACgJAAQgeABAAgjgAANgFIgCgIQgDgGgIgBQgHABgDAGIgCAIIAZAAIAAAAg");
	this.shape_6.setTransform(-72.3,-9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAFAuQgIAAgGgGQgFgFABgJIAAhHIAPAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_7.setTransform(-77.7,-10.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgWAcQgFgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgEQAAgKgMAAQgHAAgFAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgQAAIAAgGQgHAGgJAAQgLAAgHgGgAgLANQABAIAJAAQAGAAADgEQADgCAAgGIAAgEIgMAAQgJAAgBAIg");
	this.shape_8.setTransform(-83.7,-9.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgOAhQgIgDgFgGIALgKQAFAGAMAAQALAAAAgHQAAgFgHgCIgKAAQgTgCAAgQQAAgKAIgGQAHgGAKAAQARAAAJAIIgKAKQgGgEgKAAQgJAAAAAHQAAAEAHABIAKABQATADABARQAAAKgJAGQgIAFgMAAQgIAAgGgBg");
	this.shape_9.setTransform(-90.25,-9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AAOAiIgOgqIgNAqIgOAAIgUhDIASAAIALApIANgpIALAAIAOApIALgpIARAAIgUBDg");
	this.shape_10.setTransform(-101.3,-9.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgCgFAAgKQAAgJACgFQACgGAEgGQAIgHAMgBQANABAIAHQAFAGABAGQABAFABAJQgBAKgBAFQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgQQgFAEAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgEQgDgDgFAAQgDAAgDADg");
	this.shape_11.setTransform(-109.7,-9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AAFAuQgIAAgGgGQgFgFABgJIAAhHIAPAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_12.setTransform(-115.05,-10.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AgWAuIAAgPIADAAIAGgBQABgCABgDIADgIIgWg+IASAAIAMApIAOgpIASAAIgdBNQgCAGgDADQgEAFgKAAg");
	this.shape_13.setTransform(-15.85,-21.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AgUAoQgFgEgBgJIgBgQIABgOQABgIAFgFQAGgFAKAAQAKgBAGAHIAAgeIAQAAIAABaIgQAAIAAgGQgGAHgKAAQgKAAgGgGgAgIgBQgCADAAAJQAAALACAEQACAFAGAAQAHAAADgFQACgFAAgKQAAgJgCgDQgDgFgHgBQgGABgCAFg");
	this.shape_14.setTransform(-22.825,-24.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFAMAAIAOAAIAAgEQAAgKgMAAQgHAAgFAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgQAAIAAgGQgHAGgJAAQgMAAgFgGgAgLANQAAAIAKAAQAGAAADgEQADgCAAgGIAAgEIgMAAQgKAAAAAIg");
	this.shape_15.setTransform(-29.9,-23.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AgdAAQABgQAHgIQAJgJAMAAQAOAAAHAJQAJAIAAAPIAAAGIgqAAQAAAHAEAEQAEAEAGAAQAJAAAGgGIALAJQgGAGgFADQgHACgIAAQgfABAAgjgAANgFIgCgIQgDgGgIgBQgHABgEAGIgBAIIAZAAIAAAAg");
	this.shape_16.setTransform(-36.7,-23.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_17.setTransform(-42.725,-23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AAFAuQgIAAgGgGQgFgFABgJIAAhHIAPAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_18.setTransform(-48,-24.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgWAcQgFgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgEQAAgKgMAAQgHAAgFAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgQAAIAAgGQgHAGgJAAQgLAAgHgGgAgLANQABAIAJAAQAGAAADgEQADgCAAgGIAAgEIgMAAQgJAAgBAIg");
	this.shape_19.setTransform(-54,-23.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_20.setTransform(-62.675,-23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgUAcQgHgHAAgMIAAgqIARAAIAAAoQAAAGAEADQADADADAAQAEAAADgDQAFgDAAgGIAAgoIAQAAIAABCIgQAAIAAgGQgHAHgJAAQgKAAgGgGg");
	this.shape_21.setTransform(-69.85,-23.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGgBgJQABgJABgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQACAFAAAJQAAAJgCAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_22.setTransform(-77.05,-23.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgKAuIAAgzIgHAAIAAgNIAHAAIAAgIQAAgJAEgFQAGgFAIAAIAKAAIAAANIgHAAQgFABAAAGIAAAHIAMAAIAAANIgMAAIAAAzg");
	this.shape_23.setTransform(-85.625,-24.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGgBgJQABgJABgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQACAFAAAJQAAAJgCAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_24.setTransform(-91.45,-23.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgbAuIAAhbIAQAAIAAAHQAGgHAKAAQAKAAAGAGQAEAEACAIIABAQIgBAPQgCAIgEAEQgGAHgKAAQgKAAgFgHIAAAegAgJgZQgBAEAAAKQAAAKABADQADAFAGAAQAHAAACgFQACgDAAgKQAAgKgCgEQgCgFgHAAQgGAAgDAFg");
	this.shape_25.setTransform(-101.375,-21.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGAAgJQAAgJABgFQACgHAEgFQAIgHAMAAQANAAAIAHQAEAFACAHQABAFABAJQgBAJgBAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgGgPQgEADgBAMQABAMAEAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_26.setTransform(-108.7,-23.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AAJArQgJAAgFgGQgFgGAAgIIAAggIgHAAIAAgNIAHAAIAAgUIAQAAIAAAUIAMAAIAAANIgMAAIAAAfQAAAHAGAAIAGAAIAAAOg");
	this.shape_27.setTransform(-114.525,-23.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AALAiIAAgoQAAgGgDgDQgDgDgFAAQgEAAgDADQgDADAAAGIAAAoIgRAAIAAhDIARAAIAAAHQAGgHAJAAQAKAAAGAGQAHAHAAAMIAAAqg");
	this.shape_28.setTransform(-123.35,-23.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGgBgJQABgJABgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQACAFAAAJQAAAJgCAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_29.setTransform(-130.6,-23.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#02216C").s().p("AgiBOIAHgjIAiAAIgGAjgAgSAaIALhnIAqAAIgeBng");
	this.shape_30.setTransform(-17.075,-44.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#02216C").s().p("AgqBLQgNgFgLgMIAbgXQALAMAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgDQglgKAAgcQAAgZASgPQASgPAcAAQAfAAAQAUIgaAWQgIgKgSAAQgKAAgGAGQgGAFAAAGQAAAGAEADIAIADIAMADQAUAFAJAKQAIAJAAASQAAAagUAOQgSANgaAAQgUAAgMgFg");
	this.shape_31.setTransform(-27.825,-44.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#02216C").s().p("AgtBOIAZh7IglAAIAHggIBsAAIgGAgIgkAAIgYB7g");
	this.shape_32.setTransform(-38.475,-44.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02216C").s().p("AAMBOIgghQIgRBQIgkAAIAfibIAfAAIAgBQIAQhQIAlAAIgfCbg");
	this.shape_33.setTransform(-52.95,-44.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#02216C").s().p("Ag0BCQgOgNAAgUIABgOIAUhhIAlAAIgVBkIgBAIQAAAQAQAAQATAAAGgbIAThhIAlAAIgUBlQgGAdgTAOQgQANgWAAQgWAAgOgNg");
	this.shape_34.setTransform(-66.5,-43.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAXAAAOAOQAMANAAATQAAANgEAUQgFAZgEAKQgFAQgKAKQgRATgbAAQgXAAgOgPgAgGgnQgHAHgGAgQgEAVAAAKQAAAIAEAEQAEAEAHAAQAIAAAHgHQAHgHAGghQAEgUAAgKQAAgIgEgEQgEgFgHAAQgJAAgGAIg");
	this.shape_35.setTransform(-80.425,-44.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAYAAANAPQAMANAAAWIgkAAQgBgSgOAAQgJAAgGAHQgHAHgHAhQgEAVAAAKQAAAQAQAAQAOAAAGgRIAmAAQgQAygtAAQgYAAgOgPg");
	this.shape_36.setTransform(-93.075,-44.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#02216C").s().p("AgqBLQgNgFgLgMIAbgXQALAMAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgDQglgKAAgcQAAgZASgPQASgPAcAAQAfAAAQAUIgaAWQgIgKgSAAQgKAAgGAGQgGAFAAAGQAAAGAEADIAIADIAMADQAUAFAJAKQAIAJAAASQAAAagUAOQgSANgaAAQgUAAgMgFg");
	this.shape_37.setTransform(-106.125,-44.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_38.setTransform(-115.2,-44.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_39.setTransform(-125.425,-44.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02216C").s().p("Ag0BOIAfibIAkAAIgYB7IA+AAIgGAgg");
	this.shape_40.setTransform(-20.375,-68.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#02216C").s().p("AAfBOIgCgYIgtAAIgMAYIgnAAIBUibIAcAAIAXCbgAAaAYIgFgtIgWAtIAbAAg");
	this.shape_41.setTransform(-33.875,-68.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#02216C").s().p("AAMBOIgghQIgQBQIglAAIAfibIAfAAIAgBQIAQhQIAlAAIgfCbg");
	this.shape_42.setTransform(-46.3,-68.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAXAAAOAOQAMANAAATQAAANgEAUQgFAZgEAKQgFAQgKAKQgRATgbAAQgXAAgOgPgAgGgnQgHAHgGAgQgEAVAAAKQAAAIAEAEQAEAEAHAAQAIAAAHgHQAHgHAGghQAEgUAAgKQAAgIgEgEQgEgFgHAAQgJAAgGAIg");
	this.shape_43.setTransform(-60.175,-68.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_44.setTransform(-70,-68.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#02216C").s().p("AgtBOIAZh7IglAAIAHggIBsAAIgGAgIgkAAIgYB7g");
	this.shape_45.setTransform(-78.075,-68.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_46.setTransform(-88.55,-68.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_47.setTransform(-98.825,-68.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_48.setTransform(-112.225,-68.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#02216C").s().p("AAfBOIgCgYIgtAAIgMAYIgnAAIBUibIAcAAIAXCbgAAaAYIgFgtIgWAtIAbAAg");
	this.shape_49.setTransform(-126.975,-68.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-142.2,-84.7,137.79999999999998,82.8), null);


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
	this.shape.graphics.f("#092D74").s().p("AgdAaIgBgXIgBgsIAdgDIAbgDIACAMIACALIgQABIgOACIgBAGIAAAHIALgCIALgCIABAIIABAIIgOADIgKABIAAAMIAOgCIAQgCIACAMIABALIgcADIggAGg");
	this.shape.setTransform(41.35,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#092D74").s().p("AglgqQAagFARgBQAYABADAQQACAUgWAMIAZAcIgXASIgagjIABAfIgaAFQAChCgDgYgAgKgZIgBAJIAAAJQAFgDAFgDQAIgGgBgEQgBgDgFAAIgKABg");
	this.shape_1.setTransform(34.35,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#092D74").s().p("AgeAiQgFgHgDgJQgDgIABgKQABgQAKgOQAMgRATAAQARAAAMAOQAGAIACAIQADAIgBAJQAAARgLAOQgMARgTAAQgRAAgMgOgAgLgLQgDAIAAAHQgBAEABAEQACAFADACQAEAEAFAAQAIAAAEgHQADgFABgIQAAgIgEgJQgEgIgGAAQgHAAgGALg");
	this.shape_2.setTransform(26.2256,3.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#092D74").s().p("Ag2ArQAOgmAGgvIAbgFIAHAtIAHgrIAagCQAFArARAvIgcAFIgLgvIgGAsIgWACIgGgwIgJAxg");
	this.shape_3.setTransform(16.9,4.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#092D74").s().p("AglgsIAegEIACALQAEARAEANQADAHACADIAAgvIAegEQgGAxADAlIgbAGIgDgFIgMgTIgFgGIABAeIgaAFg");
	this.shape_4.setTransform(4.5,3.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#092D74").s().p("AglgqQAagFARgBQAXABAEAQQACAUgXAMIAaAcIgXASIgagjIABAfIgaAFQAChCgDgYgAgKgZIgBAJIAAAJQAGgDAEgDQAIgGgBgEQgBgDgFAAIgKABg");
	this.shape_5.setTransform(-3.2,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#092D74").s().p("AgpArQAPgrAHgrIAlgFQAHAoARAwIgdAHIgEgQIgRABIgEAQgAAGAOIgGggIgGAgIAMAAg");
	this.shape_6.setTransform(-11.175,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#092D74").s().p("AgeAaIAAgXIgBgsIAdgDIAbgDIACAMIACALIgQABIgOACIgBAGIgBAHIAMgCIAMgCIABAIIAAAIIgPADIgKABIAAAMIAQgCIAQgCIABAMIABALIgbADIgiAGg");
	this.shape_7.setTransform(-18.45,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#092D74").s().p("AgcgqIAcgDQgDAiAAAdIAdgEIADAYQgXABgiAIg");
	this.shape_8.setTransform(-24.675,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AkyiCIJlAAQA2AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg2AAIplAAQg2AAgngmQgmgmAAg3IAAAAQAAg2AmgmQAngmA2AAg");
	this.shape_9.setTransform(8.263,3.5009,1.17,0.8638);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6A81C").s().p("AkxCDQg3AAgmgmQgngmAAg3IAAAAQAAg2AngmQAmgmA3AAIJjAAQA3AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg3AAg");
	this.shape_10.setTransform(8.263,3.5009,1.17,0.8638);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-43.9,-8.8,104.4,24.700000000000003), null);


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
	this.frame_220 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(220).call(this.frame_220).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(221));

	// glitter 1 copy 4
	this.instance = new lib.Sparkle_1();
	this.instance.setTransform(161.5,210,0.1862,0.1862,0,0,0,220.5,33.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.5274,scaleY:0.5274,x:161.6,y:209.95},10,cjs.Ease.get(1)).wait(160));

	// glitter 1 copy 2
	this.instance_1 = new lib.Sparkle_1();
	this.instance_1.setTransform(114,5,0.1862,0.1862,0,0,0,220.5,33.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({regX:220.9,regY:33.6,scaleX:0.211,scaleY:0.211,x:114.1},10,cjs.Ease.get(1)).wait(160));

	// glitter 1 copy 3
	this.instance_2 = new lib.Sparkle_1();
	this.instance_2.setTransform(17,106.05,0.3724,0.3724,0,0,0,220.5,33.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({regX:220.6,regY:33.6,scaleX:1.0548,scaleY:1.0548,x:17.15},10,cjs.Ease.get(1)).wait(165));

	// glitter 1 copy
	this.instance_3 = new lib.Sparkle_1();
	this.instance_3.setTransform(293,89,0.1862,0.1862,0,0,0,220.5,33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.5274,scaleY:0.5274,x:293.1,y:88.95},10,cjs.Ease.get(1)).wait(160));

	// glitter 1
	this.instance_4 = new lib.Sparkle_1();
	this.instance_4.setTransform(287.5,39.55,0.3724,0.3724,0,0,0,220.5,33.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.4219,scaleY:0.4219,x:289.15},10,cjs.Ease.get(1)).wait(165));

	// Phn
	this.instance_5 = new lib.phn("synched",0);
	this.instance_5.setTransform(234.4,237.15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(165));

	// Cta
	this.instance_6 = new lib.Cta();
	this.instance_6.setTransform(226.9,237.75);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({y:210.85,alpha:1},9,cjs.Ease.get(1)).wait(175));

	// Logo
	this.instance_7 = new lib.Logo();
	this.instance_7.setTransform(77.3,238.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({y:219.4,alpha:1},9,cjs.Ease.get(1)).wait(184));

	// Img 1
	this.instance_8 = new lib.Img1();
	this.instance_8.setTransform(38.3,269.15);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({x:77.3,alpha:1},9,cjs.Ease.get(1)).wait(194));

	// sub head_02
	this.instance_9 = new lib.subhead_02("synched",0);
	this.instance_9.setTransform(220.5,53.25);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(189).to({_off:false},0).to({x:210.5,alpha:0.9883},10,cjs.Ease.get(1)).wait(22));

	// sub head_01
	this.instance_10 = new lib.subhead_01("synched",0);
	this.instance_10.setTransform(219.35,54.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(129).to({_off:false},0).to({x:204.35,alpha:1},11,cjs.Ease.get(1)).wait(38).to({startPosition:0},0).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(32));

	// Head
	this.instance_11 = new lib.Head();
	this.instance_11.setTransform(270.15,57.85,0.8144,0.8144);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({y:84.05,alpha:1},9,cjs.Ease.get(1)).wait(101).to({alpha:0},11).to({_off:true},1).wait(90));

	// RRLogo
	this.instance_12 = new lib.Symbol8();
	this.instance_12.setTransform(55.25,43.7,0.1227,0.1227,0,0,0,0.4,0.4);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.1,regY:0.1,scaleX:0.5944,scaleY:0.5944,x:60.2,y:43.65,alpha:1},9,cjs.Ease.get(1)).wait(212));

	// Corner
	this.instance_13 = new lib.Corner();
	this.instance_13.setTransform(120.05,251.2,0.6002,0.6002,180);

	this.instance_14 = new lib.Corner();
	this.instance_14.setTransform(181,-2,0.6002,0.6002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(221));

	// Background
	this.instance_15 = new lib.BG();
	this.instance_15.setTransform(-12,-97,0.4139,0.4139);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(138,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_15}]}).wait(221));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-97,359.9,397.8);


// stage content:
(lib.WFSB_216412_MM_300x250 = function(mode,startPosition,loop,reversed) {
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
		{src:"BG.png", id:"BG"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"LOGON.png", id:"LOGON"},
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