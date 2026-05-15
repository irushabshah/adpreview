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



(lib.Bg600 = function() {
	this.initialize(img.Bg600);
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


(lib.newheader_Png = function() {
	this.initialize(img.newheader_Png);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,104);


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
	mask.graphics.p("AzRLXQiUAAAAiTIAAyHQAAiTCUAAMAmkAAAQCTAAAACTIAASHQAACTiTAAg");
	mask.setTransform(-31.3129,-2.0225);

	// Layer_3
	this.instance = new lib.newheader_Png();
	this.instance.setTransform(-288,-91,1.6796,1.6796);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-169.5,-74.7,276.4,145.4), null);


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
	this.shape.graphics.f("#02216C").s().p("AAPAYIAFgcIAAgCIgBgDIgCgBQgGAAgCAGIgFAcIgNAAIAGgcIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgDgBQgGAAgCAGIgFAcIgOAAIAJgvIAOAAIgBAFQAFgFAGAAQAFAAAEAFQAFgFAJAAQAFAAAEADQAEAEAAAGIgBAFIgGAdg");
	this.shape.setTransform(63.15,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgOAUQgFgEAAgHIAAgJQACgGACgEQABgEAEgEQAGgFAIAAQAHAAAEAEQAGAEAAAHIgCAIIgDALQgCAEgDAEQgFAFgJAAQgHAAgEgEgAgBgJQgCACgBAHIgBAHQAAAFAEAAQAAAAABAAQAAAAAAgBQAAAAABAAQABAAAAgBQACgCACgIIABgGQAAgFgEAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAAAgBABg");
	this.shape_1.setTransform(57.4,1.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgNAUQgFgEgBgJIABgHQAFgXASAAQAKAAAFAGIgLAJQgCgDgDAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgDADgBAGIAAAGQgBAGAFAAQADAAACgDIAJAKQgHAFgJAAQgGAAgFgEg");
	this.shape_2.setTransform(53.45,1.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgIAIIADgPIAOAAIgDAPg");
	this.shape_3.setTransform(49.825,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgRAgIgHg/IAOAAIADAkIARgkIAPAAIgfA/g");
	this.shape_4.setTransform(47.275,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AAFAgIgGgZIgFAAIgFAZIgOAAIAMg/IAVAAQAKABAEAFQAFAFgBAIQAAAGgDAEQgEAFgGADIAIAagAgEgEIAHAAQAFABACgDQABgCABgEQgBgFgFAAIgHAAg");
	this.shape_5.setTransform(41.4,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AABAgQgFAAgDgDQgEgEAAgEIABgFIAJgvIANAAIgKAvIAAACQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAGAAIgCAMg");
	this.shape_6.setTransform(37.3,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAAAgQgEAAgEgDQgDgEAAgEIAAgFIAKgvIANAAIgJAvIgBACQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAIAEAAIgCAMg");
	this.shape_7.setTransform(34.55,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgMAgIAJgtIANAAIgJAtgAgCgUIACgLIANAAIgCALg");
	this.shape_8.setTransform(32.15,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AABAgIAFgaIgOAAIgFAaIgPAAIANg/IAOAAIgFAZIAPAAIAFgZIAPAAIgNA/g");
	this.shape_9.setTransform(28.225,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AACAgIgGgTIgEADIgDAQIgOAAIANg/IAMAAIgFAgIAPgQIAQAAIgVAUIANAbg");
	this.shape_10.setTransform(23.125,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgNAUQgGgEABgJIABgHQADgXAUAAQAIAAAFAGIgKAJQgDgDgCAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgDADgBAGIgBAGQAAAGAFAAQADAAADgDIAHAKQgGAFgIAAQgHAAgFgEg");
	this.shape_11.setTransform(18.85,1.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AgOAUQgGgEABgHIABgJQABgGACgEQACgEADgEQAGgFAIAAQAGAAAFAEQAGAEgBAHIgBAIIgDALQgCAEgDAEQgGAFgIAAQgGAAgFgEgAAAgJQgDACgCAHIgBAHQAAAFAFAAQAAAAABAAQAAAAAAgBQAAAAABAAQABAAAAgBQACgCACgIIABgGQAAgFgFAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAABg");
	this.shape_12.setTransform(14.45,1.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AAAAgQgEAAgEgDQgDgEAAgEIABgFIAJgvIANAAIgKAvIAAACQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAIAEAAIgBAMg");
	this.shape_13.setTransform(10.85,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AAPAYIAGgcIAAgCIgBgDIgEgBQgFAAgCAGIgFAcIgNAAIAGgcIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgDgBQgGAAgBAGIgGAcIgOAAIAKgvIAMAAIAAAFQAFgFAGAAQAGAAADAFQAFgFAJAAQAFAAAEADQAEAEAAAGIgBAFIgFAdg");
	this.shape_14.setTransform(5.75,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgOAVQgGgFAAgJQAAgMAGgJQAHgJAKAAQAIAAAFAEQAFAFAAAIIgCAKIgaAAIAAACQAAAHAHAAQAFAAAEgFIAHAJQgHAHgKAAQgIAAgFgDgAgFgEIANAAIAAgCQAAgGgGAAQgEAAgDAIg");
	this.shape_15.setTransform(-0.05,1.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AABAgIAFgaIgOAAIgFAaIgPAAIANg/IAOAAIgFAZIAPAAIAFgZIAPAAIgNA/g");
	this.shape_16.setTransform(-4.925,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgOAmIAPhLIANAAIgOBLg");
	this.shape_17.setTransform(-10.95,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AgQAcQgFgEAAgIIAAgDIAOAAIAAABQAAAFAFABQACAAACgDQADgDAAgDQAAgFgFgBIgCAAIACgKIABAAQADgBACgCQACgCAAgDQAAgFgEgBQgFABgBAFIgOAAQAEgSASAAQAHAAAFAFQAEAEAAAHQAAALgJAEQAFADAAAIQAAAJgGAGQgGAGgIAAQgIAAgGgEg");
	this.shape_18.setTransform(-16.525,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgQAcQgGgFABgJQAAgKAKgFQgFgEAAgHQAAgHAGgGQAGgGAJAAQAHAAAFAFQAFAFABAIQAAAEgDAFQgCADgEACQAEAEAAAGQAAAJgFAGQgHAGgJAAQgIAAgFgEgAgGAHQgCADAAAEQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQACAAACgDQADgCAAgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgDAAgDACgAAAgQQgCACAAADIACAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQABgDAAgDIAAgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgBADg");
	this.shape_19.setTransform(-21,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgTAgIARgaIgDABQgGAAgEgFQgEgDAAgIQAAgJAGgGQAGgHAIAAQAKAAAFAGQAEAFAAAHQAAAEgCAFIgFAJIgRAbgAgDgQQgCADAAAEQAAAGAFAAQADAAACgDQACgCAAgEQAAgGgGAAQgCAAgCACg");
	this.shape_20.setTransform(-25.275,0.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgQAcQgGgFABgJQAAgKAKgFQgFgEAAgHQABgHAFgGQAGgGAJAAQAIAAAEAFQAFAFABAIQAAAEgDAFQgCADgEACQAEAEAAAGQABAJgHAGQgFAGgKAAQgIAAgFgEgAgGAHQgCADAAAEQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQACAAACgDQADgCAAgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgDAAgDACgAAAgQQgCACAAADIACAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQABgDABgDIgBgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgBADg");
	this.shape_21.setTransform(-30.1,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgOAGIADgLIAaAAIgDALg");
	this.shape_22.setTransform(-34.15,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgJAgIAJguIgPAKIADgQIAOgLIAOAAIgNA/g");
	this.shape_23.setTransform(-37.95,0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgXAgIADgNIAZgYIADgEIACgEQAAgFgFAAQgFAAgBAGIgOAAQAEgTASAAQAIAAAEAFQAFAEAAAIQAAAFgDAEIgHAHIgRARIAVAAIgDANg");
	this.shape_24.setTransform(-42.775,0.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgPAaQgEgFAAgHQAAgEACgFIAFgIIARgcIAPAAIgRAaIADAAQAGAAAEAEQAEAEAAAHQAAAJgGAHQgGAGgIAAQgKAAgFgGgAgEAHQgCADAAADQAAAGAGAAQACAAACgCQACgDAAgDQAAgGgFAAQgDAAgCACg");
	this.shape_25.setTransform(-47.375,0.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgOAGIADgLIAaAAIgDALg");
	this.shape_26.setTransform(-51.25,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AgQAcQgFgFAAgHIAAgEIAFgXQACgKAHgGQAFgEAHAAQAIAAAFAFQAEAEAAAHIgBAEIgEAYQgDAKgGAFQgFAEgHAAQgIAAgEgEgAgCgMIgFAZIAAACQgBAFAFAAQAEAAACgHIAFgYIAAgDQAAgFgFAAQgDABgCAGg");
	this.shape_27.setTransform(-55.15,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AgPAaQgEgFAAgHQAAgEACgFIAFgIIARgcIAPAAIgRAaIADAAQAGAAAEAEQAEAEAAAHQAAAJgGAHQgGAGgIAAQgKAAgFgGgAgEAHQgCADAAADQAAAGAGAAQACAAACgCQACgDAAgDQAAgGgFAAQgDAAgCACg");
	this.shape_28.setTransform(-59.925,0.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgQAcQgGgFABgJQAAgKAKgFQgFgEAAgHQABgHAFgGQAGgGAJAAQAIAAAEAFQAFAFABAIQAAAEgDAFQgCADgEACQAEAEAAAGQABAJgHAGQgFAGgKAAQgIAAgFgEgAgGAHQgCADAAAEQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQACAAACgDQADgCAAgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgDAAgDACgAAAgQQgCACAAADIACAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQABgDAAgDIAAgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgBADg");
	this.shape_29.setTransform(-64.3,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-6.2,140.1,12.5);


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
	this.instance.setTransform(53,-82,0.8135,0.8135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(53,-82,225.39999999999998,87.1), null);


(lib.line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAAj5IAAHz");
	this.shape.setTransform(41,-0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(40,-26.5,2,52), null);


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
	this.instance.setTransform(-139,-133,0.9671,0.9671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-139,-133,296.9,145.1), null);


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
	this.shape.graphics.f("#02216C").s().p("AgPAkQgJgDgHgGIANgMQAGAHANAAQANAAgBgHQAAgHgHAAIgLgBQgVgCAAgTQgBgKAJgHQAIgGALAAQATAAAKAJIgMALQgFgFgMAAQgKAAAAAHQAAAGAIAAIALACQAVACAAATQABALgKAHQgIAGgNAAQgKAAgGgCg");
	this.shape.setTransform(45.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgfAAQgBgRAJgKQAKgKANAAQAPAAAJAKQAIAKAAAQIAAAHIgtAAQAAAHAEAFQAEAEAHAAQAKAAAHgHIALALQgGAHgFACQgIADgJAAQghAAAAgmgAAOgGQAAgFgBgDQgEgIgJABQgIgBgEAIQgBADAAAFIAbAAIAAAAg");
	this.shape_1.setTransform(37.9,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgRAeQgLgKAAgUQAAgUALgJQAJgIAMAAQAQAAAJAKIgNAMQgFgFgHAAQgFAAgEAEQgFAGAAAKQAAALAFAGQAEAEAFAAQAHAAAFgFIANAMQgKAKgPAAQgMAAgJgIg");
	this.shape_2.setTransform(30.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgIAzIAAhHIASAAIAABHgAgJgjIAAgPIATAAIAAAPg");
	this.shape_3.setTransform(25.2,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgaAmIAAhKIASAAIAAAHQAGgHALgBQALABAHAGIgOAPQgEgFgFAAQgFAAgDAEQgEADAAAHIAAAsg");
	this.shape_4.setTransform(20.5,6.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgeAzIAAhkIASAAIAAAHQAHgIALAAQALAAAHAHQAEAEACAJIABASIgBARQgCAIgEAFQgHAHgLAAQgLAAgHgIIAAAigAgKgcQgBAGgBAKQABAKABAEQADAGAHAAQAHAAAEgGQACgEAAgKQAAgKgCgGQgEgFgHAAQgHAAgDAFg");
	this.shape_5.setTransform(12.95,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgfAAQAAgRAJgKQAIgKAOAAQAPAAAJAKQAJAKAAAQIAAAHIguAAQAAAHAEAFQAEAEAHAAQAJAAAIgHIALALQgGAHgGACQgGADgKAAQgiAAABgmgAAOgGQAAgFgBgDQgEgIgJABQgIgBgDAIQgCADAAAFIAbAAIAAAAg");
	this.shape_6.setTransform(1.6,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAGAzQgKAAgGgHQgFgGAAgIIAAhQIARAAIAABOQAAAHAHAAIAHAAIAAAQg");
	this.shape_7.setTransform(-4.325,5.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgXAfQgHgGAAgKQAAgKAHgFQAGgGANAAIAQAAIAAgDQAAgMgNAAQgIAAgGAGIgLgLQAFgGAGgDQAGgCAJAAQAfAAAAAaIAAAwIgSAAIAAgGQgHAHgLAAQgMAAgGgHgAgMAOQAAAJALAAQAHAAADgEQADgCAAgHIAAgEIgNAAQgLAAAAAIg");
	this.shape_8.setTransform(-10.925,6.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgQAkQgIgDgHgGIANgMQAGAHANAAQAMAAAAgHQABgHgIAAIgLgBQgWgCABgTQAAgKAIgHQAIgGALAAQATAAAJAJIgLALQgFgFgMAAQgKAAAAAHQAAAGAIAAIALACQAWACgBATQAAALgJAHQgIAGgNAAQgKAAgHgCg");
	this.shape_9.setTransform(-18.15,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AAPAlIgPguIgOAuIgPAAIgYhJIAUAAIAMAtIAQgtIALAAIAQAtIAMgtIATAAIgWBJg");
	this.shape_10.setTransform(-30.25,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgWAcQgEgFgCgGQgCgHAAgKQAAgKACgGQACgGAEgGQAJgJANAAQAOAAAJAJQAFAGACAGQACAGAAAKQAAAKgCAHQgCAHgFAEQgJAKgOAAQgNAAgJgKgAgIgRQgDAEAAANQAAAOADAEQAEADAEAAQAFAAAEgDQAEgEAAgOQAAgNgEgEQgEgEgFABQgEgBgEAEg");
	this.shape_11.setTransform(-39.55,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AAGAzQgKAAgGgHQgFgGAAgIIAAhQIARAAIAABOQAAAHAHAAIAHAAIAAAQg");
	this.shape_12.setTransform(-45.425,5.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AgZAzIAAgRIAEAAQAEAAACgBQACgCACgEIADgJIgahEIAUAAIAOAuIAPguIAUAAIggBVQgDAHgCADQgFAGgLAAg");
	this.shape_13.setTransform(-54.775,8.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AgWAsQgFgFgCgIQgBgGAAgMQAAgLABgFQACgJAFgFQAGgHAMAAQAKAAAHAIIAAgiIASAAIAABkIgSAAIAAgHQgHAIgKAAQgMAAgGgHgAgJgBQgCAEAAAKQAAALACAEQACAGAHAAQAIAAADgGQACgEAAgLQAAgKgCgEQgDgGgIAAQgHAAgCAGg");
	this.shape_14.setTransform(-62.475,5.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgXAfQgHgGAAgKQAAgKAHgFQAGgGANAAIAQAAIAAgDQAAgMgNAAQgIAAgGAGIgLgLQAFgGAGgDQAGgCAJAAQAfAAAAAaIAAAwIgSAAIAAgGQgHAHgLAAQgMAAgGgHgAgMAOQAAAJALAAQAHAAADgEQADgCAAgHIAAgEIgNAAQgLAAAAAIg");
	this.shape_15.setTransform(-70.275,6.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AggAAQAAgRAKgKQAJgKANAAQAPAAAJAKQAIAKAAAQIAAAHIgtAAQAAAHAEAFQAEAEAHAAQAKAAAHgHIALALQgGAHgFACQgIADgJAAQghAAgBgmgAAOgGQAAgFgBgDQgEgIgJABQgIgBgEAIQgBADAAAFIAbAAIAAAAg");
	this.shape_16.setTransform(-77.75,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgaAmIAAhKIASAAIAAAHQAHgHALgBQAKABAHAGIgOAPQgEgFgGAAQgDAAgEAEQgEADABAHIAAAsg");
	this.shape_17.setTransform(-84.4,6.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AAGAzQgKAAgGgHQgFgGAAgIIAAhQIARAAIAABOQAAAHAHAAIAHAAIAAAQg");
	this.shape_18.setTransform(-90.175,5.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgXAfQgHgGAAgKQAAgKAHgFQAGgGANAAIAQAAIAAgDQAAgMgNAAQgIAAgGAGIgLgLQAFgGAGgDQAGgCAJAAQAfAAAAAaIAAAwIgSAAIAAgGQgHAHgLAAQgMAAgGgHgAgMAOQAAAJALAAQAHAAADgEQADgCAAgHIAAgEIgNAAQgLAAAAAIg");
	this.shape_19.setTransform(-96.775,6.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgaAmIAAhKIASAAIAAAHQAHgHALgBQAKABAHAGIgOAPQgEgFgGAAQgDAAgEAEQgDADAAAHIAAAsg");
	this.shape_20.setTransform(-106.35,6.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgWAfQgIgHAAgOIAAgvIATAAIAAAsQAAAHAEAEQADADAEAAQAFAAADgDQAEgEAAgHIAAgsIATAAIAABKIgSAAIAAgHQgHAHgLABQgLgBgGgGg");
	this.shape_21.setTransform(-114.225,6.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgWAcQgFgFgBgGQgDgHAAgKQAAgKADgGQABgGAFgGQAJgJANAAQAOAAAJAJQAFAGACAGQABAGAAAKQAAAKgBAHQgCAHgFAEQgJAKgOAAQgNAAgJgKgAgHgRQgEAEgBANQABAOAEAEQADADAEAAQAGAAADgDQAEgEAAgOQAAgNgEgEQgDgEgGABQgEgBgDAEg");
	this.shape_22.setTransform(-122.1,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgMAzIAAg5IgHAAIAAgOIAHAAIAAgJQAAgJAGgGQAFgGALAAIAKAAIAAAPIgIAAQgGAAAAAHIAAAIIAOAAIAAAOIgOAAIAAA5g");
	this.shape_23.setTransform(-131.55,5.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgWAcQgEgFgDgGQgCgHAAgKQAAgKACgGQADgGAEgGQAJgJANAAQAOAAAJAJQAFAGACAGQACAGgBAKQABAKgCAHQgCAHgFAEQgJAKgOAAQgNAAgJgKgAgHgRQgFAEAAANQAAAOAFAEQADADAEAAQAGAAADgDQAEgEAAgOQAAgNgEgEQgDgEgGABQgEgBgDAEg");
	this.shape_24.setTransform(-137.95,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgeAzIAAhkIASAAIAAAHQAHgIALAAQALAAAHAHQAEAEACAJIABASIgBARQgCAIgEAFQgHAHgLAAQgLAAgGgIIAAAigAgJgcQgCAGAAAKQAAAKACAEQACAGAHAAQAHAAADgGQACgEAAgKQAAgKgCgGQgDgFgHAAQgHAAgCAFg");
	this.shape_25.setTransform(-148.9,8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgWAcQgEgFgCgGQgCgHAAgKQAAgKACgGQACgGAEgGQAJgJANAAQAPAAAIAJQAFAGACAGQACAGAAAKQAAAKgCAHQgCAHgFAEQgIAKgPAAQgNAAgJgKgAgIgRQgDAEAAANQAAAOADAEQAEADAEAAQAFAAAEgDQAEgEAAgOQAAgNgEgEQgEgEgFABQgEgBgEAEg");
	this.shape_26.setTransform(-156.9,6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AAKAvQgKAAgGgHQgFgFAAgJIAAgkIgIAAIAAgOIAIAAIAAgWIASAAIAAAWIANAAIAAAOIgNAAIAAAjQAAAGAGAAIAHAAIAAAQg");
	this.shape_27.setTransform(-163.375,5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AAMAmIAAgsQAAgIgEgDQgDgDgFAAQgEAAgDADQgEADAAAIIAAAsIgTAAIAAhKIASAAIAAAHQAHgIALAAQALAAAGAHQAIAHAAAOIAAAvg");
	this.shape_28.setTransform(-173.025,6.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgWAcQgFgFgBgGQgDgHAAgKQAAgKADgGQABgGAFgGQAJgJANAAQAOAAAJAJQAFAGACAGQABAGAAAKQAAAKgBAHQgCAHgFAEQgJAKgOAAQgNAAgJgKgAgHgRQgEAEgBANQABAOAEAEQADADAEAAQAGAAADgDQAEgEAAgOQAAgNgEgEQgDgEgGABQgEgBgDAEg");
	this.shape_29.setTransform(-181.05,6.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#02216C").s().p("AglBWIAHgnIAmAAIgHAngAgVAdIANhyIAuAAIggByg");
	this.shape_30.setTransform(61.675,-16.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#02216C").s().p("AgvBSQgOgFgLgNIAdgZQALANAZAAQAKAAAIgFQAIgGAAgIQAAgLgPgDIgMgEQgogKAAgfQAAgcAUgQQATgRAeABQAkgBAQAWIgcAZQgJgLgTAAQgLAAgHAFQgHAGAAAHQAAAHAFADQACACAHABIANAEQAWAGAJAKQAJAKAAATQABAdgWAQQgUANgdAAQgWABgOgGg");
	this.shape_31.setTransform(49.8,-16.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#02216C").s().p("AgxBWIAbiHIgpAAIAIgkIB3AAIgHAkIgoAAIgaCHg");
	this.shape_32.setTransform(38.05,-16.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02216C").s().p("AAOBWIgkhYIgSBYIgoAAIAjirIAhAAIAkBZIAShZIAnAAIgiCrg");
	this.shape_33.setTransform(22.1,-16.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#02216C").s().p("Ag6BIQgPgNAAgXIACgPIAWhrIAoAAIgWBuIgCAKQAAARASABQAVgBAGgdIAWhsIAoAAIgXBvQgGAggVAQQgRAOgZAAQgYAAgQgPg");
	this.shape_34.setTransform(7.225,-16.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02216C").s().p("Ag1BIQgNgOAAgVQAAgOAEgXIAKgmQAGgSAKgLQATgTAeAAQAagBAPAPQANAOAAAVQAAAPgEAWQgGAbgEAMQgGARgKAMQgTATgeAAQgaAAgPgPgAgGgrQgIAIgHAjQgFAXAAALQAAAIAFAGQAFAEAHAAQAJAAAHgIQAIgIAHgkQAFgWAAgLQAAgIgFgGQgFgEgHAAQgKAAgGAIg");
	this.shape_35.setTransform(-8.125,-16.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#02216C").s().p("Ag0BIQgOgOAAgVQAAgOAEgXIAKgmQAGgSAKgLQATgTAeAAQAbgBAOARQANAOAAAYIgoAAQAAgTgQAAQgKgBgHAIQgIAIgHAkQgFAXAAALQAAASASAAQAPAAAIgUIApAAQgSA3gxAAQgaAAgPgPg");
	this.shape_36.setTransform(-22.025,-16.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#02216C").s().p("AgvBSQgOgFgLgNIAdgZQALANAZAAQAKAAAIgFQAIgGAAgIQAAgLgPgDIgMgEQgogKAAgfQAAgcAUgQQATgRAeABQAkgBAQAWIgcAZQgJgLgTAAQgMAAgGAFQgHAGAAAHQAAAHAFADQACACAHABIANAEQAWAGAJAKQAKAKgBATQAAAdgVAQQgUANgdAAQgWABgOgGg");
	this.shape_37.setTransform(-36.35,-16.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#02216C").s().p("AglBWIAjirIAoAAIgjCrg");
	this.shape_38.setTransform(-46.35,-16.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#02216C").s().p("AhIBWIAjirIA5AAQAYAAAOANQAPANAAAXQgBAIgFAcQgHAhgEAMQgFANgLALQgSARgeAAgAgYAzIASAAQALAAAIgIQAEgEADgHIAGggQAGgZgBgHQAAgSgSAAIgRAAg");
	this.shape_39.setTransform(-57.6,-16.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02216C").s().p("Ag6BWIAjirIAnAAIgaCIIBFAAIgHAjg");
	this.shape_40.setTransform(-77.075,-16.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#02216C").s().p("AAjBWIgDgbIgyAAIgNAbIgrAAIBdirIAfAAIAZCrgAAdAaIgFgxIgZAxIAeAAg");
	this.shape_41.setTransform(-91.925,-16.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#02216C").s().p("AANBWIgjhYIgSBYIgoAAIAjirIAgAAIAkBZIAShZIApAAIgjCrg");
	this.shape_42.setTransform(-105.55,-16.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02216C").s().p("Ag1BIQgNgOAAgVQAAgOAEgXIAKgmQAGgSAKgLQATgTAeAAQAagBAPAPQANAOAAAVQAAAPgEAWQgGAbgEAMQgGARgKAMQgTATgeAAQgaAAgPgPgAgGgrQgIAIgHAjQgFAXAAALQAAAIAFAGQAFAEAHAAQAJAAAHgIQAIgIAHgkQAFgWAAgLQAAgIgFgGQgFgEgHAAQgKAAgGAIg");
	this.shape_43.setTransform(-120.825,-16.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#02216C").s().p("AgkBWIAiirIAoAAIgjCrg");
	this.shape_44.setTransform(-131.65,-16.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#02216C").s().p("AgxBWIAbiHIgpAAIAHgkIB4AAIgHAkIgoAAIgaCHg");
	this.shape_45.setTransform(-140.5,-16.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#02216C").s().p("AgkBWIAjirIAmAAIgiCrg");
	this.shape_46.setTransform(-152.05,-16.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#02216C").s().p("AhIBWIAjirIA5AAQAYAAAOANQAPANAAAXQgBAIgFAcQgHAhgEAMQgFANgLALQgSARgeAAgAgYAzIASAAQALAAAIgIQAEgEADgHIAGggQAGgZAAgHQgBgSgSAAIgRAAg");
	this.shape_47.setTransform(-163.35,-16.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#02216C").s().p("AhHBWIAiirIA5AAQAYAAAOANQAPANAAAXQgBAIgFAcQgHAhgEAMQgFANgLALQgSARgeAAgAgYAzIASAAQALAAAIgIQAEgEADgHIAHggQAEgZAAgHQAAgSgSAAIgRAAg");
	this.shape_48.setTransform(-178.1,-16.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#02216C").s().p("AAjBWIgDgbIgyAAIgNAbIgrAAIBdirIAfAAIAZCrgAAdAaIgFgxIgZAxIAeAAg");
	this.shape_49.setTransform(-194.325,-16.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-206,-33.7,276.1,48.6), null);


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
	this.shape.graphics.f("#092D74").s().p("AgsAmIgBgiIAAhBIApgEIApgFIADARIACASIgXABIgWADIAAAJIgBAJIARgCIARgDIACANIABAMIgWADIgPACIAAASIAWgDIAXgEIADASIACARQgSABgXADIgwAJg");
	this.shape.setTransform(270.9,-48.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#092D74").s().p("Ag3g+QAmgIAZgBQAjAAAFAZQADAdghASIAmAqIgiAaIgog0QABAZABAVIgmAIQAEhigFgjgAgQglIgBANIgBANQAJgEAHgFQAMgHgCgHQgBgFgHAAIgCAAQgFAAgJACg");
	this.shape_1.setTransform(260.7,-48.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#092D74").s().p("AgtAxQgHgJgEgNQgEgNAAgOQACgYAOgUQASgZAdAAQAZAAARAUQAJALAEAMQADANgBANQgBAZgPAUQgSAZgdAAQgZAAgRgVgAgQgRQgFAMgBALQAAAGABAFQADAIAEADQAGAFAIAAQAMAAAGgJQAEgIABgMQAAgNgFgLQgGgNgKAAQgKAAgIAQg");
	this.shape_2.setTransform(248.7508,-48.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#092D74").s().p("AhQBAQAVg5AKhGIAngHIAKBDIALhAIAlgDQAIA/AZBGIgqAHIgPhEIgJBBIghACIgJhGIgMBIg");
	this.shape_3.setTransform(234.975,-48.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#092D74").s().p("Ag2hBIAqgGIAEAQQAGAZAGATQAEALAEAFIAAhGIArgGQgIBJAFA2IgnAIIgFgHIgTgbIgGgJQAAAXABAUIgmAIg");
	this.shape_4.setTransform(216.675,-48.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#092D74").s().p("Ag3g+QAmgIAZgBQAiAAAGAZQADAdggASIAlAqIgjAaIgmg0QAAAZABAVIgmAIQADhigEgjgAgQglIgBANIAAANQAIgEAHgFQALgHgBgHQgBgFgHAAIgCAAQgFAAgJACg");
	this.shape_5.setTransform(205.4,-48.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#092D74").s().p("Ag9A+QAWg+AMg/IA1gHQALA5AZBJIgqAIIgGgXIgaADIgGAXgAgJAVIARgBIgJgwg");
	this.shape_6.setTransform(193.65,-48.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#092D74").s().p("AgsAmIAAgiIgBhBIApgEIApgFIACARIAEASIgYABIgWADIgBAJIAAAJIARgCIARgDIABANIACAMIgWADIgPACIgBASIAXgDIAXgEIADASIACARQgSABgXADIgwAJg");
	this.shape_7.setTransform(183,-48.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#092D74").s().p("Agqg9IAqgGQgFAzAAAqIArgFIAFAiQgjACgyALg");
	this.shape_8.setTransform(173.875,-48.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AmlicINMAAQBLAAA0AtQA1AuAABBIAAAAQAABBg1AuQg0AuhLAAItMAAQhMAAg1guQg0guAAhBIAAAAQAAhBA0guQA1gtBMAAg");
	this.shape_9.setTransform(221.7582,-47.8507,1.0712,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6A81C").s().p("AmlCdQhMAAg1guQg0guAAhAIAAgBQAAhBA0guQA1gtBMAAINMAAQBLAAA0AtQA1AuAABBIAAABQAABAg1AuQg0AuhLAAg");
	this.shape_10.setTransform(221.7582,-47.8507,1.0712,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(156.2,-64.5,131.2,33.4), null);


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
	this.shape.graphics.f("#00FF00").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


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
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// glitter 1 copy 3
	this.instance = new lib.Sparkle_1();
	this.instance.setTransform(509.6,70.85,0.1972,0.1972,0,0,0,221.6,35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({regX:220.8,regY:34,scaleX:0.5585,scaleY:0.5585},10,cjs.Ease.get(1)).wait(171));

	// glitter 1 copy 2
	this.instance_1 = new lib.Sparkle_1();
	this.instance_1.setTransform(1008.75,76.05,0.2535,0.2535,0,0,0,221.5,34.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({regX:220.8,regY:34,scaleX:0.7181,scaleY:0.7181,x:1008.8},10,cjs.Ease.get(1)).wait(171));

	// glitter 1 copy
	this.instance_2 = new lib.Sparkle_1();
	this.instance_2.setTransform(11.75,23.55,0.3002,0.3002,0,0,0,219.2,34.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({regX:220.2,regY:33.8,scaleX:0.4353,scaleY:0.4353,x:14.9},10,cjs.Ease.get(1)).wait(171));

	// glitter 1
	this.instance_3 = new lib.Sparkle_1();
	this.instance_3.setTransform(31.25,72.75,0.1815,0.1815,0,0,0,221,33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({regX:220.5,regY:33.8,scaleX:0.5142,scaleY:0.5142,x:31.35,y:72.8},10,cjs.Ease.get(1)).wait(176));

	// phn
	this.instance_4 = new lib.phn("synched",0);
	this.instance_4.setTransform(813.75,91.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:81.3,alpha:1},9,cjs.Ease.get(1)).wait(177));

	// Cta
	this.instance_5 = new lib.Cta();
	this.instance_5.setTransform(784.7,97.2,0.8,0.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({y:83.7,alpha:1},9,cjs.Ease.get(1)).wait(186));

	// line
	this.instance_6 = new lib.line();
	this.instance_6.setTransform(851.45,45.85);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(196));

	// Logo
	this.instance_7 = new lib.Logo_1();
	this.instance_7.setTransform(660.25,93.35,0.8,0.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({y:77.75,alpha:1},9,cjs.Ease.get(1)).wait(204));

	// Img 1
	this.instance_8 = new lib.Img1();
	this.instance_8.setTransform(575.55,86.7,0.684,0.684,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({regX:0.2,x:575.65,alpha:1},9,cjs.Ease.get(1)).wait(213));

	// sub head_02
	this.instance_9 = new lib.subhead_02("synched",0);
	this.instance_9.setTransform(403.7,57.7,1.0175,1.0175,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114).to({_off:false},0).to({x:393.7,alpha:1},11,cjs.Ease.get(1)).wait(115));

	// sub head_01
	this.instance_10 = new lib.subhead_01("synched",0);
	this.instance_10.setTransform(236.75,52.7,0.8932,0.8932,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(103).to({_off:false},0).to({x:241.75,alpha:1},11,cjs.Ease.get(1)).wait(126));

	// Head
	this.instance_11 = new lib.Head();
	this.instance_11.setTransform(391.2,30.05,1.0157,1.0157,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({y:56.45,alpha:1},9,cjs.Ease.get(1)).wait(68).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(141));

	// RRLogo
	this.instance_12 = new lib.Symbol8();
	this.instance_12.setTransform(108.7,46.1,0.1152,0.1152,0,0,0,1.8,1.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.5,regY:0.5,scaleX:0.4653,scaleY:0.4653,x:108.75,y:46.15,alpha:1},9,cjs.Ease.get(1)).wait(231));

	// Corner
	this.instance_13 = new lib.Corner();
	this.instance_13.setTransform(93.75,91.1,0.4737,0.4737,180);

	this.instance_14 = new lib.Corner();
	this.instance_14.setTransform(931,-2,0.4737,0.4737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(240));

	// Layer_2
	this.instance_15 = new lib.Bg600();
	this.instance_15.setTransform(-9,-994,1.32,1.32);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(240));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-994,1072.5,1268.5);


// stage content:
(lib.WFSB_216412_MM_1024x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP6gG8MCf1AAAIAAN5Mif1AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/AHCIAAuDMCf/AAAIAAODg");
	mask.setTransform(512,45);

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
p.nominalBounds = new cjs.Rectangle(511.5,44.5,513,205.5);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 1024,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bg600.png", id:"Bg600"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"Logo.png", id:"Logo"},
		{src:"newheader_Png.png", id:"newheader_Png"},
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
an.compositions['C5015599BD542543B3A7BF6C0E894E50'] = {
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