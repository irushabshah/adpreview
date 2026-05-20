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



(lib.BG_160x600 = function() {
	this.initialize(img.BG_160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Corner = function() {
	this.initialize(img.Corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,72);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,150);


(lib.kickoffasummerofsavings_tobeused_S = function() {
	this.initialize(img.kickoffasummerofsavings_tobeused_S);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,474);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,107);


(lib.SBH_01 = function() {
	this.initialize(img.SBH_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,230);


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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kickoffasummerofsavings_tobeused_S();
	this.instance.setTransform(-78,-34.2,0.1444,0.1444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-78,-34.2,156,68.5), null);


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

	// Layer_1
	this.instance = new lib.Subhead_02();
	this.instance.setTransform(-80,-45,0.3264,0.3264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-45,155.1,75.4);


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

	// Layer_1
	this.instance = new lib.SBH_01();
	this.instance.setTransform(-81,-54,0.3482,0.3482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-54,152.2,80.1);


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
	this.shape.graphics.f("#02216C").s().p("AgdAzQgKgJAAgMIAAgHIAZAAIAAADQAAAJAKAAQAEABAEgFQAEgFAAgGQAAgLgJAAIgDAAIAEgUIACAAQAFAAAEgEQAEgFAAgFQAAgKgIAAQgJAAgCAMIgZAAQAHgiAhAAQANAAAIAJQAIAIAAALQAAAUgQAJQAJAFAAAOQAAARgMALQgLALgOAAQgQAAgJgHg");
	this.shape.setTransform(43.225,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgeAzQgKgJAAgQQAAgTASgJQgIgIAAgMQAAgOALgLQALgKAQAAQAOAAAKAJQAJAJAAAOQAAAIgFAHQgFAIgGACQAIAIAAAMQAAARgLAKQgLALgRAAQgPAAgJgHgAgLAOQgEAEAAAGQAAAFADADQACAEAFgBQAFAAAEgDQAEgFAAgGQAAgFgDgCQgCgEgEAAQgGAAgEAEgAgBgeQgEADAAAHQAAADADADQACADADAAQAFAAAEgDQADgFAAgFQAAgEgCgDQgCgEgEAAQgFABgDAEg");
	this.shape_1.setTransform(35.125,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgkA5IAfguIgGABQgKAAgIgIQgGgIgBgNQAAgRALgLQAKgMASAAQARAAAJALQAIAJAAAMQAAAIgEAJIgKARIggAwgAgHgdQgDAEgBAHQABALAJAAQAGAAADgFQAEgEAAgHQAAgLgKAAQgGAAgDAFg");
	this.shape_2.setTransform(27.45,-7.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgeAzQgKgJAAgQQAAgTASgJQgIgIAAgMQAAgOALgLQALgKAQAAQAOAAAKAJQAJAJAAAOQAAAIgFAHQgFAIgGACQAIAIAAAMQAAARgLAKQgLALgRAAQgPAAgJgHgAgLAOQgEAEAAAGQAAAFADADQACAEAFgBQAFAAAEgDQAEgFAAgGQAAgFgDgCQgCgEgEAAQgGAAgEAEgAgBgeQgEADAAAHQAAADADADQACADADAAQAFAAAEgDQADgFAAgFQAAgEgCgDQgCgEgEAAQgFABgDAEg");
	this.shape_3.setTransform(18.825,-7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgaAMIAEgXIAxAAIgEAXg");
	this.shape_4.setTransform(11.475,-6.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgSA5IARhVIgbATIAGgcIAagTIAZAAIgXBxg");
	this.shape_5.setTransform(4.725,-7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgqA5IAEgWIAvgtQAFgFABgDQADgEAAgDQAAgJgIAAQgKAAgCALIgZAAQAFghAigBQAPABAIAHQAIAIAAAOQAAAJgEAJQgEAFgJAHIgfAgIAlAAIgEAWg");
	this.shape_6.setTransform(-3.95,-7.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AgcAvQgIgJAAgMQAAgIAEgJQACgGAIgLIAfgwIAcAAIgfAuIAFgBQALAAAHAIQAHAIAAANQAAARgKALQgLALgQAAQgSAAgJgKgAgIANQgDAEAAAHQAAALAKAAQAFAAAEgFQADgFAAgGQAAgLgKAAQgFAAgEAFg");
	this.shape_7.setTransform(-12.175,-7.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgaAMIAEgXIAxAAIgEAXg");
	this.shape_8.setTransform(-19.175,-6.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgfAyQgIgJAAgMIABgIIAJgqQADgTAMgJQAKgIANAAQAPAAAIAJQAIAIAAAMIgBAIIgJArQgDASgMAJQgKAIgNAAQgPAAgIgIgAgEgWIgJAsIgBAFQAAAJAIgBQAJAAACgMIAJgsIABgFQAAgJgIAAQgJAAgCANg");
	this.shape_9.setTransform(-26.125,-7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AgcAvQgIgJAAgMQAAgIAEgJQACgGAIgLIAfgwIAcAAIgfAuIAFgBQALAAAHAIQAHAIAAANQAAARgKALQgLALgQAAQgSAAgJgKgAgIANQgDAEAAAHQAAALAKAAQAFAAAEgFQADgFAAgGQAAgLgKAAQgFAAgEAFg");
	this.shape_10.setTransform(-34.675,-7.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgeAzQgKgJAAgQQAAgTASgJQgIgIAAgMQAAgOALgLQALgKAQAAQAOAAAKAJQAJAJAAAOQAAAIgFAHQgFAIgGACQAIAIAAAMQAAARgLAKQgLALgRAAQgPAAgJgHgAgLAOQgEAEAAAGQAAAFADADQACAEAFgBQAFAAAEgDQAEgFAAgGQAAgFgDgCQgCgEgEAAQgGAAgEAEgAgBgeQgEADAAAHQAAADADADQACADADAAQAFAAAEgDQADgFAAgFQAAgEgCgDQgCgEgEAAQgFABgDAEg");
	this.shape_11.setTransform(-42.475,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-19.9,98.1,23.4);


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
	this.instance.setTransform(-76,-94,0.5531,0.5531);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-76,-94,153.2,59.2), null);


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
	this.instance.setTransform(-148,-171,1.1006,1.1006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-148,-171,337.9,165.1), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAHIADgNIAMAAIgCANg");
	this.shape.setTransform(8.025,-12.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAWIAFgZIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCAAQgFAAgCAGIgFAZIgLAAIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAQgGAAgBAGIgFAZIgNAAIAJgqIAMAAIgBADQAEgEAHAAQAEAAADAFQAFgFAIAAQAEAAAEADQAEADAAAGIgBAFIgFAag");
	this.shape_1.setTransform(4.075,-13.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAdIALg4IAMAAIgBADQADgEAHAAQAGAAADAEQACADAAAEIgBALQgDANgEAEQgEAEgHAAQgEAAgEgEIgDASgAAAgOIgCAIIAAAGQAAAEADAAQADAAABgDQACgBABgGIABgGQAAgEgEAAQgDAAgCACg");
	this.shape_2.setTransform(-1.25,-13.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAcIACgHIgWAAIACgMIAZglIAOAAIgYAlIAHAAIACgIIALAAIgBAIIAEAAIgCAMIgEAAIgCAHg");
	this.shape_3.setTransform(-5.15,-14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAGIADgLIAYAAIgDALg");
	this.shape_4.setTransform(-9.825,-14.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAWIAFgZIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCAAQgFAAgCAGIgFAZIgLAAIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAQgGAAgBAGIgFAZIgNAAIAJgqIAMAAIgBADQAEgEAHAAQAEAAADAFQAFgFAIAAQAEAAAEADQAEADAAAGIgBAFIgFAag");
	this.shape_5.setTransform(-16.025,-13.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgHAEgDQAEgEAIABIAIAAIABgCIAAgCQAAgEgFABQgEgBgDAEIgHgJQAGgFAKAAQAGAAAFADQAEADAAAGIAAAEIgFAaIgMAAIAAgDQgDAEgFAAQgGAAgDgEgAgFAGIgBACQAAABAAABQABABAAAAQABABAAAAQABAAABAAQACAAACgDQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIABgBIgFAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_6.setTransform(-21.175,-13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAdIARgXIgDAAQgGAAgDgEQgEgDAAgHQAAgJAFgFQAGgGAHAAQAJAAAFAGQADAEAAAGQABAEgCAEIgFAIIgPAZgAgDgOQgBACAAAEQAAAFAEAAQADAAACgCQABgDAAgDQAAgFgFAAQgCAAgCACg");
	this.shape_7.setTransform(-24.6,-14.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJARIADgOIAMAAIgDAOgAgFgCIADgOIAMAAIgDAOg");
	this.shape_8.setTransform(-29.375,-13.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAbQgFAAgEgDQgCgDAAgEIAAgEIADgRIgDAAIACgJIADAAIADgNIALAAIgCANIAGAAIgCAJIgGAAIgEARIAAABQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAEAAIgCALg");
	this.shape_9.setTransform(-31.475,-14.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgHAEgDQAEgEAIABIAIAAIABgCIAAgCQAAgEgFABQgEgBgDAEIgHgJQAGgFAKAAQAGAAAFADQAEADAAAGIAAAEIgFAaIgMAAIAAgDQgDAEgFAAQgGAAgDgEgAgFAGIgBACQAAABAAABQABABAAAAQABABAAAAQABAAABAAQACAAACgDQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIABgBIgFAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_10.setTransform(-35.025,-13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAbQgFgCgDgEIAKgIQAEAEAHAAQADAAADgCQACgCAAgCQAAgDgFgCIgDgBQgNgDAAgKQAAgJAGgFQAHgGAJAAQALAAAGAHIgJAJQgDgFgGAAQgEAAgCADQgCABAAADQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIADABIAEACQAIABACADQADAEAAAFQAAALgGAEQgHAFgJAAQgHAAgFgCg");
	this.shape_11.setTransform(-38.9,-14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAWIAFgZIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCAAQgFAAgCAGIgFAZIgLAAIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAQgGAAgBAGIgFAZIgNAAIAJgqIAMAAIgBADQAEgEAHAAQAEAAADAFQAFgFAIAAQAEAAAEADQAEADAAAGIgBAFIgFAag");
	this.shape_12.setTransform(7.675,-24.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAdIALg4IAMAAIgBADQADgEAHAAQAGAAADAEQACADAAAEIgBALQgDANgEAEQgEAEgGAAQgFAAgEgEIgDASgAAAgOIgCAIIAAAGQAAAEADAAQADAAABgDQACgBABgGIABgGQAAgEgEAAQgDAAgCACg");
	this.shape_13.setTransform(2.35,-23.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAdIAYgtIgKAAIgCAJIgLAAIADgVIAlAAIgCAMIgZAtg");
	this.shape_14.setTransform(-0.95,-25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAGIADgLIAYAAIgDALg");
	this.shape_15.setTransform(-6.225,-24.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAWIAFgZIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCAAQgFAAgCAGIgFAZIgLAAIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAQgGAAgBAGIgFAZIgNAAIAJgqIAMAAIgBADQAEgEAHAAQAEAAADAFQAFgFAIAAQAEAAAEADQAEADAAAGIgBAFIgFAag");
	this.shape_16.setTransform(-12.425,-24.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgGAEgEQAEgDAIAAIAIAAIABgCIAAgCQAAgDgFgBQgEABgDADIgHgIQAGgGAKAAQAGAAAFADQAEADAAAGIAAAFIgFAaIgMAAIAAgEQgDAEgFAAQgGAAgDgEgAgFAFIgBADQAAABAAABQABABAAAAQABABAAAAQABAAABAAQACAAACgDQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIABgBIgFAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_17.setTransform(-17.575,-24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAdIARgXIgDAAQgGAAgDgEQgEgDAAgHQAAgJAFgFQAGgGAHAAQAJAAAFAGQADAEAAAGQABAEgCAEIgFAIIgPAZgAgDgOQgBACAAAEQAAAFAEAAQADAAACgCQABgDAAgDQAAgFgFAAQgCAAgCACg");
	this.shape_18.setTransform(-21,-25.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJARIADgOIAMAAIgDAOgAgFgCIADgOIAMAAIgDAOg");
	this.shape_19.setTransform(-25.775,-23.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAWIAIgqIALAAIgBADQAEgEAGAAQAGAAADAEIgLAKIAAgBIgDgBIgFABQgBACAAADIgFAZg");
	this.shape_20.setTransform(-28.3,-24.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQATQgDgDgBgGIABgFIAGgaIAMAAIgFAZIgBACQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAIADABQADAAACgGIAFgZIANAAIgJAqIgMAAIABgDQgDAEgHAAQgDAAgEgDg");
	this.shape_21.setTransform(-32.15,-24.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAdIAFgaIABgCQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIgCgBQgFAAgBAGIgFAaIgMAAIALg5IALAAIgDARQAEgDAGAAQAEAAADACQADADAAAHIAAAEIgFAbg");
	this.shape_22.setTransform(-36.5,-25.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAdIAJgsIgNAAIACgNIAnAAIgCANIgNAAIgIAsg");
	this.shape_23.setTransform(-39.975,-25.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANAWIAFgZIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCAAQgFAAgCAGIgFAZIgLAAIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAQgGAAgBAGIgFAZIgNAAIAJgqIAMAAIgBADQAEgEAHAAQAEAAADAFQAFgFAIAAQAEAAAEADQAEADAAAGIgBAFIgFAag");
	this.shape_24.setTransform(25.675,-35.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAdIALg4IAMAAIgBADQADgEAHAAQAGAAADAEQACADAAAEIgBALQgDANgEAEQgEAEgGAAQgFAAgEgEIgDASgAAAgOIgCAIIAAAGQAAAEADAAQADAAABgDQACgBABgGIABgGQAAgEgEAAQgDAAgCACg");
	this.shape_25.setTransform(20.35,-34.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAYQgDgFAAgGQAAgEACgEIAFgIIAPgZIAOAAIgQAXIACAAQAGAAADAEQAFADAAAHQgBAJgFAFQgGAGgHAAQgIAAgGgFgAgDAGQgCADAAADQAAAFAFAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQACgCAAgDQAAgGgFAAQgCAAgCACg");
	this.shape_26.setTransform(16.5,-35.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAGIADgLIAYAAIgDALg");
	this.shape_27.setTransform(11.775,-35.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AANAWIAFgZIABgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgCAAQgFAAgCAGIgFAZIgLAAIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCAAQgGAAgBAGIgFAZIgNAAIAJgqIAMAAIgBADQAEgEAHAAQAEAAADAFQAFgFAIAAQAEAAAEADQAEADAAAGIgBAFIgFAag");
	this.shape_28.setTransform(5.575,-35.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgGAEgEQAEgEAIAAIAIAAIABgBIAAgCQAAgDgFAAQgEAAgDADIgHgJQAGgFAKAAQAGAAAFADQAEADAAAHIAAADIgFAaIgMAAIAAgDQgDAEgFAAQgGAAgDgEgAgFAFIgBAEQAAAAAAABQABABAAAAQABABAAAAQABAAABAAQACAAACgCQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIABgBIgFAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_29.setTransform(0.425,-35.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAdIARgXIgDAAQgGAAgDgEQgEgDAAgHQAAgJAFgFQAGgGAHAAQAJAAAFAGQADAEAAAGQABAEgCAEIgFAIIgPAZgAgDgOQgBACAAAEQAAAFAEAAQADAAACgCQABgDAAgDQAAgFgFAAQgCAAgCACg");
	this.shape_30.setTransform(-3,-35.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJARIADgOIAMAAIgDAOgAgFgCIADgOIAMAAIgDAOg");
	this.shape_31.setTransform(-7.775,-34.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAcIAIgnIALAAIgIAngAgCgSIACgJIAMAAIgCAJg");
	this.shape_32.setTransform(-9.65,-35.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAWIAIgqIALAAIgBADQAEgEAGAAQAGAAADAEIgKAKIgBgBIgEgBIgEABQgBACAAADIgFAZg");
	this.shape_33.setTransform(-12.2,-35.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXAcIALg3IAkAAIgCALIgXAAIgCALIATAAIgCALIgTAAIgFAWg");
	this.shape_34.setTransform(-15.925,-35.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAaQgFgEAAgHQAAgIAEgEQADgDAFgDQgDgFAAgEQAAgGADgFQAFgFAJAAQAOAAAAANQAAAGgIAGIgEADIAFAHQACgDACgEIAMAAQgDAJgHAHIAIAMIgPAAIgDgDQgFAEgIAAQgGAAgFgDgAgLAMQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAQADAAADgDIgGgKQgFACAAAFgAgCgMIABADIABgBQAEgCAAgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQgDgBAAAGg");
	this.shape_35.setTransform(-22.325,-35.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAZQgCgDAAgFIACgKQACgNAEgEQAEgEAHAAQAFAAADAEIADgSIANAAIgLA4IgMAAIABgDQgDAEgHAAQgGAAgDgEgAgEAAIgDAHIgBAGQAAAEAEAAQADAAABgCQABgCABgGIABgHQAAgDgDAAQgDAAgBADg");
	this.shape_36.setTransform(-28.125,-35.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMATQgGgEAAgIQAAgLAGgJQAGgIAJAAQAHAAAFAEQAEAFAAAGIgBAKIgYAAIAAACQAAAFAGAAQAEAAAEgDIAHAIQgHAGgJAAQgHAAgEgDgAgEgDIALAAIAAgDQAAgFgFAAQgEAAgCAIg");
	this.shape_37.setTransform(-32.375,-35.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBAcIgDgcIgPAcIgLAAIgDg3IANAAIABAdIAQgdIAIAAIACAdIAOgdIANAAIgaA3g");
	this.shape_38.setTransform(-37,-35.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNAGIADgLIAYAAIgDALg");
	this.shape_39.setTransform(-43.825,-35.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AACAWIAFgZIAAgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCAAQgFAAgBAGIgFAZIgNAAIAJgqIALAAIAAADQADgEAHAAQADAAADADQAFADAAAGIgBAFIgGAag");
	this.shape_40.setTransform(-48.95,-35.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNATQgEgEgBgHIABgIIADgJIAEgHQAGgFAIAAQAFAAAFAEQAEAEAAAGIgBAHIgCAKQgCAEgDADQgFAFgHAAQgGAAgFgDgAgBgIQgCACgBAGIgBAGQAAAEADAAIADAAQADgDABgHIABgGQAAgDgEAAIgDABg");
	this.shape_41.setTransform(-52.85,-35.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAGAcIAGgcIgKAPIgHAAIgGgPIgFAcIgOAAIALg3IANAAIAHAZIARgZIANAAIgLA3g");
	this.shape_42.setTransform(-57.6,-35.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1A7E4A").s().p("AgdAXIAOgMQAEAGAIAAQAEAAADgCQABAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAgDgDgBIgIgCQgIgBgDgEQgEgDAAgFQAAgKAGgHQAJgIANAAQAOAAAIAIIgNAMQgEgFgHABQgIAAAAAEQABAEADAAIAIACQAQACAAAOQAAAKgIAGQgHAHgPAAQgQAAgJgKg");
	this.shape_43.setTransform(33.5,-53.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1A7E4A").s().p("AgdAhIAOhAIARAAIgCAGQAGgHAKAAQAIAAAGAHIgRAOIgCgCIgEgBQgEAAgCACQgCADgBAEIgIAmg");
	this.shape_44.setTransform(28.7,-53.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1A7E4A").s().p("AgYAdQgGgFAAgJIABgIIAIgmIATAAIgIAlIAAADQAAAEACACQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAHAAACgKIAIglIATAAIgNA/IgSAAIABgGQgFAHgKAAQgGgBgEgDg");
	this.shape_45.setTransform(22.825,-53.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1A7E4A").s().p("AgUAcQgHgGAAgKIACgMQACgIACgGQACgFAFgFQAHgIAMAAQAKAAAGAGQAHAGAAAJIgCALIgEAPQgCAGgFAFQgHAHgMAAQgJAAgHgFgAgBgNQgEADgCAKIgBAKQAAAGAGABQACAAACgDQAEgDACgLIABgIQAAgHgGAAQgDAAgBACg");
	this.shape_46.setTransform(16.475,-53.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1A7E4A").s().p("AACArIAHgjIgUAAIgHAjIgUAAIARhVIAUAAIgHAiIAUAAIAHgiIAUAAIgRBVg");
	this.shape_47.setTransform(9.95,-54.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A7E4A").s().p("AgdAlQgDgEAAgGIACgRQAEgUAGgFQAGgHAKAAQAIAAAFAGIAFgaIATAAIgRBUIgRAAIABgFQgGAGgJAAQgJAAgFgGgAgHgBQgCADgCAIIgBAKQAAAHAFAAQAFgBACgEQACgDABgJIACgJQAAgGgFAAQgFAAgCAEg");
	this.shape_48.setTransform(0.975,-54.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1A7E4A").s().p("AgTAdQgJgHAAgLQAAgSAJgMQAJgNAPAAQAKAAAHAHQAHAGAAALQgBAGgCAIIgkAAIAAADQAAAJAJAAQAHgBAHgGIAJAMQgKAKgOAAQgLAAgGgEgAgIgFIATAAIAAgDQAAgJgHABQgIAAgEALg");
	this.shape_49.setTransform(-5.5,-53.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1A7E4A").s().p("AgdAlQgDgEAAgGIACgRQAEgUAGgFQAGgHAKAAQAIAAAFAGIAFgaIATAAIgRBUIgRAAIABgFQgGAGgJAAQgJAAgFgGgAgHgBQgCADgCAIIgBAKQAAAHAFAAQAFgBACgEQACgDABgJIACgJQAAgGgFAAQgFAAgCAEg");
	this.shape_50.setTransform(-11.325,-54.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1A7E4A").s().p("AADAhIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgHAAgCAKIgIAmIgTAAIANhAIARAAIAAAGQAFgHAKAAQAGAAAEAEQAGAFAAAJIgBAIIgIAng");
	this.shape_51.setTransform(-18.125,-53.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1A7E4A").s().p("AgTAdQgIgHgBgLQABgSAIgMQAJgNAPAAQAKAAAHAHQAHAGgBALQAAAGgCAIIgkAAIAAADQAAAJAJAAQAHgBAHgGIAJAMQgKAKgOAAQgKAAgHgEgAgIgFIASAAIABgDQAAgJgHABQgIAAgEALg");
	this.shape_52.setTransform(-24.15,-53.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1A7E4A").s().p("AAAAoQgJAAgEgEQgEgEAAgHIAAgFIAGgaIgGAAIADgPIAGAAIADgSIASAAIgEASIAKAAIgDAPIgKAAIgFAaIgBACQAAABABAAQAAABAAAAQABAAABABQAAAAABAAIAGAAIgDAPg");
	this.shape_53.setTransform(-28.85,-54.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1A7E4A").s().p("AAFAgIgGgRIgMARIgXAAIAbggIgOgfIAVAAIAFAQIALgQIAXAAIgaAfIAPAgg");
	this.shape_54.setTransform(-34.2,-53.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1A7E4A").s().p("AgjArIARhVIA2AAIgEASIghAAIgEAQIAeAAIgEAQIgdAAIgEARIAjAAIgDASg");
	this.shape_55.setTransform(-40.2,-54.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1A7E4A").s().p("AAAAgIgEgjIgSAjIgPAAIgGg/IASAAIACAhIARghIANAAIADAhIAPghIATAAIgeA/g");
	this.shape_56.setTransform(-49.8,-53.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1A7E4A").s().p("AgTAdQgJgHABgLQgBgSAJgMQAJgNAOAAQALAAAHAHQAGAGAAALQAAAGgBAIIgkAAIgBADQAAAJAKAAQAGgBAGgGIAJAMQgJAKgPAAQgJAAgHgEgAgHgFIARAAIABgDQAAgJgIABQgHAAgDALg");
	this.shape_57.setTransform(-57.75,-53.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1A7E4A").s().p("AAHArIgSgsIgJAsIgTAAIARhVIAQAAIARAsIAJgsIAUAAIgRBVg");
	this.shape_58.setTransform(-64.475,-54.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#02216C").s().p("AgMAeQgHgCgGgFIAKgKQAGAFAJAAQALABAAgHQAAgFgGAAIgJgBQgSgCAAgPQAAgJAIgFQAGgFAJAAQAPAAAIAHIgJAKQgFgFgJAAQgIAAAAAHQAAAEAGAAIAJACQASABAAAQQAAAJgIAFQgGAFgMAAQgHAAgFgBg");
	this.shape_59.setTransform(22.825,-79.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#02216C").s().p("AgaAAQAAgNAIgJQAHgIALAAQANAAAGAJQAIAHgBANIAAAGIgkAAQAAAGADAEQAEADAEAAQAIAAAHgFIAJAJQgFAFgFACQgFACgJAAQgbAAAAgfgAALgEQAAgEgBgDQgDgGgHgBQgHABgCAGQgCADABAEIAVAAIAAAAg");
	this.shape_60.setTransform(16.8,-79.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#02216C").s().p("AgNAZQgJgIAAgRQAAgPAJgIQAGgHALAAQAMAAAIAJIgKAKQgFgFgFgBQgFAAgDAFQgDAEgBAIQABAJADAFQADADAFAAQAFABAFgFIAKAKQgJAIgLAAQgLAAgGgGg");
	this.shape_61.setTransform(10.95,-79.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#02216C").s().p("AgHAqIAAg6IAPAAIAAA6gAgHgcIAAgNIAPAAIAAANg");
	this.shape_62.setTransform(6.45,-80.525);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#02216C").s().p("AgVAfIAAg8IAPAAIAAAGQAFgHAJAAQAIAAAGAGIgLAMQgEgEgEAAQgDAAgDADQgDADAAAFIAAAkg");
	this.shape_63.setTransform(2.625,-79.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#02216C").s().p("AgYAqIAAhSIAOAAIAAAGQAGgHAIAAQAKAAAFAGQAEAEABAHIABAOIgBAOQgBAHgEAEQgFAFgKAAQgIAAgGgGIAAAcgAgHgWQgDAEAAAIQAAAJADADQACAFAFAAQAGAAACgFQACgDAAgJQAAgIgCgEQgCgFgGAAQgFAAgCAFg");
	this.shape_64.setTransform(-3.6,-78.325);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#02216C").s().p("AgZAAQAAgNAHgJQAHgIALAAQAMAAAIAJQAGAHABANIAAAGIgmAAQAAAGAEAEQAEADAFAAQAHAAAGgFIAJAJQgFAFgEACQgGACgHAAQgbAAAAgfgAAMgEQgBgEgBgDQgDgGgHgBQgGABgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_65.setTransform(-12.85,-79.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#02216C").s().p("AAFAqQgIAAgFgGQgEgFAAgHIAAhBIAOAAIAABAQAAAGAFgBIAGAAIAAAOg");
	this.shape_66.setTransform(-17.75,-80.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#02216C").s().p("AgTAZQgFgEAAgJQAAgHAFgFQAGgEAKAAIANAAIAAgEQAAgJgKAAQgHAAgFAFIgJgJQAEgFAFgCQAFgCAHAAQAZAAAAAVIAAAoIgPAAIAAgGQgFAGgJAAQgKAAgFgGgAgJAMQAAAHAJgBQAFAAADgCQACgCAAgGIAAgDIgLAAQgIAAAAAHg");
	this.shape_67.setTransform(-23.125,-79.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#02216C").s().p("AgMAeQgHgCgGgFIAKgKQAGAFAJAAQALABAAgHQAAgFgGAAIgJgBQgSgCAAgPQAAgJAIgFQAGgFAJAAQAPAAAIAHIgJAKQgFgFgJAAQgIAAAAAHQAAAEAGAAIAJACQASABAAAQQAAAJgIAFQgGAFgMAAQgHAAgFgBg");
	this.shape_68.setTransform(-29.025,-79.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#02216C").s().p("AANAeIgNglIgMAlIgMAAIgTg7IAQAAIAKAkIAMgkIAKAAIANAkIAKgkIAQAAIgTA7g");
	this.shape_69.setTransform(-38.925,-79.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#02216C").s().p("AgSAYQgEgEgBgGQgCgGAAgIQAAgIACgEQABgGAEgEQAHgIALAAQAMAAAHAIQAEAEABAGQACAEAAAIQAAAJgCAFQgBAGgEAEQgIAHgLAAQgLAAgHgHgAgGgNQgEADAAAKQAAAMAEADQACADAEgBQAEABADgDQADgDAAgMQAAgKgDgDQgDgEgEAAQgEAAgCAEg");
	this.shape_70.setTransform(-46.525,-79.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#02216C").s().p("AAEAqQgHAAgFgGQgEgFAAgHIAAhBIAOAAIAABAQAAAGAGgBIAFAAIAAAOg");
	this.shape_71.setTransform(-51.35,-80.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#02216C").s().p("AgUApIAAgNIADAAIAFgBQACgBABgEIACgHIgUg3IAQAAIALAlIAMglIAQAAIgaBFQgCAFgBADQgFAEgIAAg");
	this.shape_72.setTransform(37.975,-90.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#02216C").s().p("AgSAkQgEgEgBgHIgBgOIABgNQABgIAEgEQAFgFAJAAQAJAAAFAGIAAgcIAQAAIAABSIgPAAIAAgFQgGAGgJAAQgJAAgFgGgAgHgBQgCADAAAJQAAAIACAEQACAFAFAAQAGAAADgFQABgEAAgIQAAgJgBgDQgDgFgGAAQgFAAgCAFg");
	this.shape_73.setTransform(31.7,-92.925);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#02216C").s().p("AgTAaQgFgGAAgIQAAgIAFgEQAGgEAKgBIANAAIAAgDQAAgJgKAAQgHAAgFAFIgJgKQAEgEAFgCQAFgCAHAAQAZAAAAAWIAAAmIgPAAIAAgEQgFAFgJAAQgKAAgFgFgAgJAMQAAAGAJAAQAFAAADgCQACgCAAgGIAAgDIgLAAQgIAAAAAHg");
	this.shape_74.setTransform(25.275,-91.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#02216C").s().p("AgZAAQAAgNAHgJQAHgIALAAQAMAAAHAIQAIAJAAANIAAAFIglAAQAAAGADAEQAEADAFAAQAIABAGgHIAJAJQgGAFgEADQgFACgIAAQgbAAAAgfgAALgFQABgEgCgCQgDgGgHAAQgGAAgDAGQgBACAAAEIAVAAIAAAAg");
	this.shape_75.setTransform(19.2,-91.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#02216C").s().p("AgVAfIAAg8IAPAAIAAAGQAFgHAJAAQAIAAAGAGIgLAMQgEgEgEAAQgDAAgDADQgDADAAAFIAAAkg");
	this.shape_76.setTransform(13.775,-91.875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#02216C").s().p("AAEApQgHABgFgGQgEgFAAgHIAAhBIAOAAIAABAQAAAFAFABIAGAAIAAAMg");
	this.shape_77.setTransform(9,-92.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#02216C").s().p("AgTAaQgFgGAAgIQAAgIAFgEQAGgEAKgBIANAAIAAgDQAAgJgKAAQgHAAgFAFIgJgKQAEgEAFgCQAFgCAHAAQAZAAAAAWIAAAmIgPAAIAAgEQgFAFgJAAQgKAAgFgFgAgJAMQAAAGAJAAQAFAAADgCQACgCAAgGIAAgDIgLAAQgIAAAAAHg");
	this.shape_78.setTransform(3.625,-91.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#02216C").s().p("AgVAfIAAg8IAPAAIAAAGQAFgHAJAAQAIAAAGAGIgLAMQgEgEgEAAQgDAAgDADQgDADAAAFIAAAkg");
	this.shape_79.setTransform(-4.225,-91.875);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#02216C").s().p("AgSAZQgGgGAAgLIAAgmIAPAAIAAAkQAAAFADADQADADADAAQAEAAADgDQADgDAAgFIAAgkIAPAAIAAA8IgPAAIAAgGQgGAHgHAAQgKAAgFgGg");
	this.shape_80.setTransform(-10.65,-91.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#02216C").s().p("AgSAYQgEgFgBgFQgCgFAAgJQAAgHACgGQABgFAEgFQAHgHALAAQAMAAAHAHQAEAFABAFQACAGAAAHQAAAJgCAFQgBAFgEAFQgIAHgLAAQgLAAgHgHgAgGgOQgEAEAAAKQAAAMAEADQACACAEABQAEgBADgCQADgDAAgMQAAgKgDgEQgDgCgEAAQgEAAgCACg");
	this.shape_81.setTransform(-17.075,-91.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#02216C").s().p("AgJAqIAAguIgGAAIAAgMIAGAAIAAgIQAAgHAEgFQAFgFAIAAIAIAAIAAANIgFAAQgGAAAAAGIAAAGIALAAIAAAMIgLAAIAAAug");
	this.shape_82.setTransform(-24.875,-93);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#02216C").s().p("AgSAYQgEgFgBgFQgCgFAAgJQAAgHACgGQABgFAEgFQAHgHALAAQAMAAAHAHQAEAFABAFQACAGAAAHQAAAJgCAFQgBAFgEAFQgIAHgLAAQgLAAgHgHgAgGgOQgEAEAAAKQAAAMAEADQACACAEABQAEgBADgCQADgDAAgMQAAgKgDgEQgDgCgEAAQgEAAgCACg");
	this.shape_83.setTransform(-30.075,-91.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#02216C").s().p("AgYAqIAAhSIAOAAIAAAGQAGgHAIAAQAKAAAFAGQAEAEABAHIABAOIgBAOQgBAHgEAEQgFAFgKAAQgIAAgGgGIAAAcgAgHgWQgCAEgBAIQABAJACADQACAFAFAAQAGAAADgFQABgDAAgJQAAgIgBgEQgDgFgGAAQgFAAgCAFg");
	this.shape_84.setTransform(-39.05,-90.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#02216C").s().p("AgSAYQgEgFgBgFQgCgFAAgJQAAgHACgGQABgFAEgFQAHgHALAAQAMAAAHAHQAEAFABAFQACAGAAAHQAAAJgCAFQgBAFgEAFQgIAHgLAAQgLAAgHgHgAgGgOQgEAEAAAKQAAAMAEADQACACAEABQAEgBADgCQADgDAAgMQAAgKgDgEQgDgCgEAAQgEAAgCACg");
	this.shape_85.setTransform(-45.575,-91.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#02216C").s().p("AAIAmQgIABgFgGQgEgFAAgHIAAgdIgGAAIAAgLIAGAAIAAgSIAOAAIAAASIALAAIAAALIgLAAIAAAcQAAAFAGABIAFAAIAAAMg");
	this.shape_86.setTransform(-50.875,-92.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#02216C").s().p("AAKAfIAAgkQAAgGgDgDQgDgCgEAAQgDAAgDACQgDADAAAGIAAAkIgPAAIAAg8IAPAAIAAAGQAFgHAJAAQAJAAAFAGQAGAGAAALIAAAmg");
	this.shape_87.setTransform(-58.775,-91.875);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#02216C").s().p("AgSAYQgEgFgBgFQgCgFAAgJQAAgHACgGQABgFAEgFQAHgHALAAQAMAAAHAHQAEAFABAFQACAGAAAHQAAAJgCAFQgBAFgEAFQgIAHgLAAQgLAAgHgHgAgGgOQgEAEAAAKQAAAMAEADQACACAEABQAEgBADgCQADgDAAgMQAAgKgDgEQgDgCgEAAQgEAAgCACg");
	this.shape_88.setTransform(-65.325,-91.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#02216C").s().p("AgeBGIAGgfIAeAAIgGAfgAgRAXIAKhcIAmAAIgbBcg");
	this.shape_89.setTransform(36.875,-110.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#02216C").s().p("AgmBDQgMgEgJgLIAYgUQAKALATgBQAJAAAGgEQAHgEgBgHQAAgIgMgEIgJgCQghgJAAgZQAAgXAQgNQAQgOAZAAQAcABAOARIgXAUQgHgJgQAAQgKAAgFAFQgFAFAAAFQAAAFADADIAIADIAKADQATAFAHAIQAHAIAAAQQAAAYgSAMQgPALgYAAQgSABgLgFg");
	this.shape_90.setTransform(27.2,-110.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#02216C").s().p("AgoBGIAWhuIghAAIAFgdIBiAAIgFAdIghAAIgVBug");
	this.shape_91.setTransform(17.55,-110.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#02216C").s().p("AALBGIgdhIIgPBIIggAAIAciLIAbAAIAdBIIAPhIIAgAAIgcCLg");
	this.shape_92.setTransform(4.55,-110.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#02216C").s().p("AgvA8QgMgMAAgSIABgMIAShYIAhAAIgTBZIgBAJQAAAOAPAAQARAAAFgYIARhYIAhAAIgSBaQgFAagRAOQgPALgTAAQgUAAgNgLg");
	this.shape_93.setTransform(-7.675,-110.75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#02216C").s().p("AgrA7QgLgLAAgRQAAgMAEgTQAEgWADgJQAGgOAIgJQAPgQAZgBQAVAAAMANQALAMAAAQQAAAMgDASQgFAXgDAJQgFAOgJAJQgPAQgYAAQgWAAgMgMgAgFgjQgGAGgGAdQgEATABAJQgBAHAEAEQAEAEAGAAQAHAAAGgHQAHgGAFgeQAEgSAAgJQAAgHgEgEQgEgEgGABQgIgBgFAHg");
	this.shape_94.setTransform(-20.2,-110.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#02216C").s().p("AgrA7QgLgLAAgRQAAgMAEgTQAEgWADgJQAFgOAJgJQAPgQAZgBQAVAAAMAOQALALAAAUIghAAQAAgPgNAAQgJAAgFAFQgGAHgGAdQgEATAAAJQAAAPAOAAQANAAAGgRIAiAAQgPAugogBQgVAAgNgMg");
	this.shape_95.setTransform(-31.575,-110.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#02216C").s().p("AgmBDQgMgEgJgLIAYgUQAKALATgBQAIAAAHgEQAGgEAAgHQABgIgMgEIgKgCQghgJAAgZQAAgXAQgNQAQgOAYAAQAdABAOARIgXAUQgHgJgQAAQgJAAgGAFQgGAFABAFQAAAFADADIAIADIAKADQASAFAIAIQAIAIAAAQQgBAYgRAMQgQALgYAAQgSABgLgFg");
	this.shape_96.setTransform(-43.3,-110.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#02216C").s().p("AgdBGIAciLIAgAAIgcCLg");
	this.shape_97.setTransform(-51.5,-110.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#02216C").s().p("Ag6BGIAciLIAuAAQAUgBALALQAMALAAASQAAAHgEAXQgGAbgDAKQgFAKgIAJQgPAOgYAAgAgTApIAOAAQAJAAAGgGQAEgDACgHQACgGAEgTQAEgUAAgHQAAgOgPABIgOAAg");
	this.shape_98.setTransform(-60.675,-110.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#02216C").s().p("AgvBHIAciNIAgAAIgVBwIA4AAIgGAdg");
	this.shape_99.setTransform(33.85,-133.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#02216C").s().p("AAcBHIgCgWIgoAAIgLAWIgjAAIBLiNIAaAAIAUCNgAAXAWIgDgpIgVApIAYAAg");
	this.shape_100.setTransform(21.7,-133.05);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#02216C").s().p("AALBHIgdhJIgOBJIgiAAIAdiNIAbAAIAdBJIAPhJIAgAAIgbCNg");
	this.shape_101.setTransform(10.55,-133.05);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#02216C").s().p("AgrA7QgLgMAAgQQAAgMAEgTQAFgVACgKQAFgOAJgJQAQgRAYAAQAUAAANANQALAMAAARQAAALgDASQgFAXgDAJQgFAOgJAJQgPAQgYAAQgWAAgMgMgAgFgjQgGAGgGAdQgEATAAAJQAAAHAEAEQAEAEAGAAQAIAAAFgHQAGgGAHgeQADgSAAgJQAAgHgEgEQgDgEgHAAQgIAAgFAHg");
	this.shape_102.setTransform(-1.95,-133.05);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#02216C").s().p("AgeBHIAdiNIAgAAIgcCNg");
	this.shape_103.setTransform(-10.8,-133.05);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#02216C").s().p("AgoBHIAXhvIgjAAIAHgeIBiAAIgHAeIggAAIgVBvg");
	this.shape_104.setTransform(-18.05,-133.05);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#02216C").s().p("AgdBHIAciNIAfAAIgcCNg");
	this.shape_105.setTransform(-27.5,-133.05);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#02216C").s().p("Ag6BHIAciNIAuAAQAUAAALALQAMAKAAAUQAAAGgEAXQgGAbgDAKQgFALgIAIQgPAOgYABgAgTAqIAOAAQAJgBAGgGQAEgDACgGQACgIAEgSQAEgUAAgHQAAgNgPAAIgOAAg");
	this.shape_106.setTransform(-36.725,-133.05);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#02216C").s().p("Ag6BHIAciNIAuAAQAUAAALALQAMAKAAAUQAAAGgEAXQgGAbgDAKQgFALgIAIQgPAOgYABgAgTAqIAOAAQAJgBAGgGQAEgDACgGQACgIAEgSQAEgUAAgHQAAgNgPAAIgOAAg");
	this.shape_107.setTransform(-48.825,-133.05);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#02216C").s().p("AAcBHIgCgWIgoAAIgLAWIgjAAIBLiNIAaAAIAUCNgAAXAWIgDgpIgVApIAYAAg");
	this.shape_108.setTransform(-62.1,-133.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1A7E4A").s().p("AqNDMIAAmXIUbAAIAAGXg");
	this.shape_109.setTransform(-15.275,-26.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-80.6,-147.3,130.7,141.3), null);


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
	this.shape.graphics.f("#092D74").s().p("AguAoIgBgjIAAhFIArgEIArgFIACASIADASIgYABIgWADIgCAKIAAAKIASgEIARgCIACANIACANIgXADIgQADIgBASIAYgDIAYgEIADATIACARIgqAFIg0AJg");
	this.shape.setTransform(-103.925,-8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#092D74").s().p("Ag5hAQAngKAaAAQAlAAAFAaQADAegiATQAFAHAiAlIgjAcIgpg3QgBAbACAVIgoAJQAEhngEgkgAgRgnIgBAOIAAANQAJgDAHgFQAMgJgCgHQgBgFgHAAQgGAAgLACg");
	this.shape_1.setTransform(-114.625,-8.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#092D74").s().p("AguAzQgIgJgEgOQgFgNABgPQABgZAPgVQATgaAeAAQAaAAASAVQAKAMAEAMQADANgBAOQAAAZgQAWQgTAageAAQgbAAgRgWgAgRgSQgFAMAAAMQgBAGACAGQACAIAFAEQAGAFAIAAQANAAAGgKQAFgIAAgNQAAgNgFgNQgGgMgKAAQgMAAgIAQg");
	this.shape_2.setTransform(-127.1164,-8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#092D74").s().p("AhTBCQAVg6ALhKIAogHIAMBGIAKhDIAngDQAJBCAZBJIgrAIIgPhIIgKBDIgjADIgJhKIgNBMg");
	this.shape_3.setTransform(-141.575,-8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#092D74").s().p("Ag5hEIAtgHIAEASQAGAaAGAUQAFALAEAGIAAhKIAtgHQgJBNAFA4IgpAJIgEgHIgUgcIgHgKQAAAYACAVIgoAJg");
	this.shape_4.setTransform(-160.7,-8.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#092D74").s().p("Ag5hAQAngKAaAAQAlAAAFAaQADAegiATQAFAHAiAlIgjAcIgpg3QgBAbACAVIgoAJQAEhngEgkgAgRgnIgBAOIAAANQAJgDAHgFQAMgJgCgHQgBgFgHAAQgGAAgLACg");
	this.shape_5.setTransform(-172.475,-8.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#092D74").s().p("AhABBQAXhBAMhCIA5gHQAKA7AbBNIgsAJIgGgZIgcADIgFAYgAAJAVIgKgyIgJAyIATAAg");
	this.shape_6.setTransform(-184.775,-8.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#092D74").s().p("AguAoIgBgjIAAhFIArgEIArgFIACASIADASIgYABIgWADIgCAKIAAAKIASgEIARgCIACANIACANIgXADIgQADIgBASIAYgDIAYgEIADATIACARIgqAFIg0AJg");
	this.shape_7.setTransform(-195.925,-8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#092D74").s().p("AgshAIAsgGQgFA1AAAsIAtgFIAFAkQgkACg1ALg");
	this.shape_8.setTransform(-205.475,-8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AkyiCIJlAAQA2AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg2AAIplAAQg2AAgngmQgmgmAAg3IAAAAQAAg2AmgmQAngmA2AAg");
	this.shape_9.setTransform(-155.7295,-8.5391,1.5444,1.1402);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6A81C").s().p("AkxCDQg3AAgmgmQgngmAAg3IAAAAQAAg2AngmQAmgmA3AAIJjAAQA3AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg3AAg");
	this.shape_10.setTransform(-155.7295,-8.5391,1.5444,1.1402);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-224.3,-24.5,137.20000000000002,32), null);


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
	this.shape.graphics.f("#00FF00").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(150,300.0046,1.875,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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


(lib.SummerS = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.shadow = new cjs.Shadow("#000000",3,3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-35.2,166,78);


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
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(80,125,0.5333,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// glitter 1 copy 4
	this.instance = new lib.Sparkle_1();
	this.instance.setTransform(82.85,431.4,0.2086,0.2086,0,0,0,220.8,33.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).wait(182));

	// glitter 1 copy 5
	this.instance_1 = new lib.Sparkle_1();
	this.instance_1.setTransform(149.45,480.9,0.1473,0.1473,0,0,0,220.7,33.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({regY:33.7,scaleX:0.4171,scaleY:0.4171,x:149.5},10,cjs.Ease.get(1)).wait(177));

	// glitter 1 copy 2
	this.instance_2 = new lib.Sparkle_1();
	this.instance_2.setTransform(57.65,16.9,0.1357,0.1357,0,0,0,220.8,33.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).to({regX:220.6,regY:33.7,scaleX:0.3843,scaleY:0.3843,x:57.7},10,cjs.Ease.get(1)).wait(188));

	// glitter 1 copy 3
	this.instance_3 = new lib.Sparkle_1();
	this.instance_3.setTransform(19.05,18.65,0.2714,0.2714,0,0,0,220.3,33.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({regX:220.6,scaleX:0.7686,scaleY:0.7686,x:19.2},10,cjs.Ease.get(1)).wait(193));

	// glitter 1 copy
	this.instance_4 = new lib.Sparkle_1();
	this.instance_4.setTransform(153.9,72.35,0.083,0.083,0,0,0,221,33.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({regY:33.6,scaleX:0.2351,scaleY:0.2351,x:153.95},10,cjs.Ease.get(1)).wait(188));

	// glitter 1
	this.instance_5 = new lib.Sparkle_1();
	this.instance_5.setTransform(146.95,40.3,0.166,0.166,0,0,0,220.4,33.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.4703,scaleY:0.4703,x:147.05},10,cjs.Ease.get(1)).wait(193));

	// phone no & Website
	this.instance_6 = new lib.phn("synched",0);
	this.instance_6.setTransform(83.1,576.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({y:567.05,alpha:1},9,cjs.Ease.get(1)).wait(194));

	// Cta
	this.instance_7 = new lib.Cta();
	this.instance_7.setTransform(235.75,559.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({y:532.15,alpha:1},9,cjs.Ease.get(1)).wait(203));

	// Logo
	this.instance_8 = new lib.Logo_1();
	this.instance_8.setTransform(80.15,557.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({y:537.7,alpha:1},9,cjs.Ease.get(1)).wait(212));

	// Img 1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(70.35,255.15,0.72,0.72,0,0,0,0.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(222));

	// sub head_02
	this.instance_10 = new lib.subhead_02("synched",0);
	this.instance_10.setTransform(71.4,390.25);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:81.4,alpha:1},11,cjs.Ease.get(1)).wait(135));

	// sub head_01
	this.instance_11 = new lib.subhead_01("synched",0);
	this.instance_11.setTransform(98.85,310.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({_off:false},0).to({x:78.85,alpha:1},11,cjs.Ease.get(1)).wait(144));

	// Head
	this.instance_12 = new lib.Head();
	this.instance_12.setTransform(79.65,366.4,1.2292,1.2297,0,0,0,-15.4,-98.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).to({y:313.4,alpha:1},9,cjs.Ease.get(1)).wait(47).to({alpha:0},11).to({_off:true},1).wait(154));

	// Summer
	this.instance_13 = new lib.SummerS("synched",0);
	this.instance_13.setTransform(79,100.2,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0,regY:0,scaleX:1,scaleY:1,y:90.2,alpha:1},12,cjs.Ease.get(1)).wait(228));

	// Corner
	this.instance_14 = new lib.Corner();
	this.instance_14.setTransform(141.1,601.15,0.7105,0.7105,180);

	this.instance_15 = new lib.Corner();
	this.instance_15.setTransform(20,-1,0.7105,0.7105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(240));

	// Background
	this.instance_16 = new lib.BG_160x600();
	this.instance_16.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,-11.1,243.2,612.3000000000001);


// stage content:
(lib.WFSB_216412_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(80.0153,300.0046,0.5318,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(79.9998,299.9924);

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
p.nominalBounds = new cjs.Rectangle(79.5,299.5,220.5,301);
// library properties:
lib.properties = {
	id: '9AB1DC1B8C18844BBBA000473B7B24CE',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG_160x600.jpg", id:"BG_160x600"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"kickoffasummerofsavings_tobeused_S.png", id:"kickoffasummerofsavings_tobeused_S"},
		{src:"Logo.png", id:"Logo"},
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
an.compositions['9AB1DC1B8C18844BBBA000473B7B24CE'] = {
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