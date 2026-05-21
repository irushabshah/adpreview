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



(lib._1024x90_BG = function() {
	this.initialize(img._1024x90_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


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


(lib.Subhead_021111 = function() {
	this.initialize(img.Subhead_021111);
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
	this.instance = new lib.Subhead_021111();
	this.instance.setTransform(-84,-43,0.2851,0.2851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-43,135.4,65.9);


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
	this.instance.setTransform(-77,-55,0.3225,0.3225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-55,141,74.2);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAcQgFgEAAgIIAAgDIANAAIAAACQAAAEAGAAQACAAACgCQACgDABgDQgBgFgEAAIgCAAIACgLIABAAQADAAACgDQACgCAAgDQAAgGgEAAQgEAAgCAHIgOAAQAEgTASAAQAHAAAEAFQAFAFAAAGQAAALgIAEQAEADAAAHQAAAKgGAGQgGAGgIAAQgIAAgGgEg");
	this.shape.setTransform(24.1,1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAcQgFgFgBgIQABgLAJgFQgDgEAAgGQAAgJAFgFQAGgGAIAAQAIAAAGAFQAEAFAAAIQABAEgDAFIgGAEQAEAFABAGQAAAJgHAGQgFAGgKAAQgIAAgFgEgAgFAHQgDADABAEQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQACAAACgCQADgCgBgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgDAAgCABgAAAgRQgCADAAADIACAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQADgBACgCQACgCAAgDIgBgEQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQgDAAgBACg");
	this.shape_1.setTransform(19.55,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAgIARgaIgDABQgGAAgEgFQgEgDAAgIQAAgJAGgGQAGgHAIAAQAKAAAFAGQAEAFAAAHQAAAEgCAFIgFAJIgRAbgAgDgQQgCADAAAEQAAAGAFAAQADAAACgDQACgCAAgEQAAgGgGAAQgCAAgCACg");
	this.shape_2.setTransform(15.325,1.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAcQgGgFABgIQAAgLAKgFQgFgEAAgGQAAgJAGgFQAGgGAJAAQAHAAAFAFQAFAFABAIQAAAEgDAFIgGAEQAFAFgBAGQAAAJgFAGQgHAGgJAAQgIAAgFgEgAgFAHQgCADgBAEQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQACAAACgCQADgCAAgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgDAAgCABgAAAgRQgCADAAADIACAEQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQADgBACgCQACgCgBgDIAAgEQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgBACg");
	this.shape_3.setTransform(10.5,1.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAGIACgLIAbAAIgCALg");
	this.shape_4.setTransform(6.4,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAgIAKguIgPAKIADgQIAOgKIAOAAIgNA+g");
	this.shape_5.setTransform(2.675,1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAgIADgNIAZgYIAEgEIABgEQAAgFgFAAQgFAAgBAGIgNAAQADgTASAAQAIAAAEAFQAFAEAAAIQAAAGgEAFIgHAGIgQAQIAVAAIgDANg");
	this.shape_6.setTransform(-2.175,1.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAaQgEgFAAgHQAAgEACgFIAFgIIARgcIAPAAIgRAaIADAAQAGAAAEAEQAEAEAAAHQAAAJgGAHQgGAGgIAAQgKAAgFgGgAgEAHQgCADAAADQAAAGAGAAQACAAACgCQACgDAAgDQAAgGgFAAQgDAAgCACg");
	this.shape_7.setTransform(-6.775,1.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAGIADgLIAaAAIgCALg");
	this.shape_8.setTransform(-10.65,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAbQgFgEAAgHIAAgEIAFgXQADgKAGgGQAFgEAHAAQAIAAAFAFQAEAFAAAGIgBAEIgEAYQgCAJgHAFQgGAFgGAAQgIAAgEgFgAgCgLIgFAYIAAACQAAAFAEgBQAFABABgHIAFgYIAAgDQAAgEgEgBQgFAAgBAIg");
	this.shape_9.setTransform(-14.55,1.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAaQgEgFAAgHQAAgEACgFIAFgIIARgcIAPAAIgRAaIADAAQAGAAAEAEQAEAEAAAHQAAAJgGAHQgGAGgIAAQgKAAgFgGgAgEAHQgCADAAADQAAAGAGAAQACAAACgCQACgDAAgDQAAgGgFAAQgDAAgCACg");
	this.shape_10.setTransform(-19.325,1.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAcQgGgFABgIQAAgLAKgFQgFgEAAgGQAAgJAGgFQAGgGAJAAQAHAAAFAFQAFAFABAIQAAAEgDAFIgGAEQAFAFgBAGQAAAJgFAGQgHAGgJAAQgIAAgFgEgAgFAHQgCADgBAEQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQACAAACgCQADgCAAgDQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgDAAgCABgAAAgRQgCADAAADIABAEQABAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQADgBACgCQACgCgBgDIgBgEQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgBACg");
	this.shape_11.setTransform(-23.7,1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-5.7,140.1,13);


(lib.Ours = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMALIAFgVIAUAAIgFAVg");
	this.shape.setTransform(198,3.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAhIAIgmIAAgDQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgDAKIgHAmIgSAAIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgJAAgBAKIgIAmIgTAAIANhAIASAAIgBAGQAHgHAJAAQAHAAAFAHQAHgHAMAAQAHAAAEAFQAHAFAAAIIgBAIIgJAng");
	this.shape_1.setTransform(191.9,1.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggArIARhUIARAAIgBAFQAGgGAJAAQAJAAAEAGQAEAEAAAHQAAAFgDALQgDAUgGAGQgHAGgJAAQgIAAgFgGIgFAagAAAgVQgBADgCAJIgBAJQAAAGAFAAQAEAAADgEQACgCACgJIABgKQAAgGgFAAQgGAAgCAEg");
	this.shape_2.setTransform(183.8,2.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAArIADgMIghAAIAEgSIAkg3IAWAAIgmA3IANAAIACgLIARAAIgCALIAGAAIgDASIgGAAIgDAMg");
	this.shape_3.setTransform(177.8,0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAJIAEgRIAlAAIgEARg");
	this.shape_4.setTransform(170.45,0.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUAhIAIgmIAAgDQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgDAKIgHAmIgSAAIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgJAAgBAKIgIAmIgTAAIANhAIASAAIgBAGQAHgHAJAAQAHAAAFAHQAHgHAMAAQAHAAAEAFQAHAFAAAIIgBAIIgJAng");
	this.shape_5.setTransform(160.85,1.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgHQAAgKAGgGQAHgFAMgBIAMAAIABgCIAAgCQAAgGgIAAQgGAAgFAFIgJgNQAJgIAOAAQAKAAAHAFQAHAEAAAKIgBAGIgIAnIgSAAIABgFQgFAGgIAAQgIAAgFgFgAgIAJQgCACAAACQAAAFAGAAQAEAAADgEQACgBABgFIABgCIgIAAQgEAAgDADg");
	this.shape_6.setTransform(153.025,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbArIAYgjIgEABQgJAAgFgGQgFgGAAgJQAAgNAHgJQAIgIANAAQAMAAAIAHQAGAHAAAJQAAAHgDAGIgIAMIgXAlgAgFgVQgDACAAAGQAAAIAIAAQAEAAACgEQADgDAAgFQAAgJgIAAQgDAAgDAFg");
	this.shape_7.setTransform(147.775,0.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAaIAEgVIATAAIgEAVgAgJgDIAFgWIATAAIgEAWg");
	this.shape_8.setTransform(140.3,1.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBAoQgHAAgFgEQgFgEAAgHIABgFIAFgaIgFAAIADgPIAFAAIAEgSIASAAIgEASIAKAAIgDAPIgKAAIgFAaIAAACQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIAGAAIgDAPg");
	this.shape_9.setTransform(136.975,0.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgHQAAgKAGgGQAHgFAMgBIAMAAIABgCIAAgCQAAgGgIAAQgGAAgFAFIgJgNQAJgIAOAAQAKAAAHAFQAHAEAAAKIgBAGIgIAnIgSAAIABgFQgFAGgIAAQgIAAgFgFgAgIAJQgCACAAACQAAAFAGAAQAEAAADgEQACgBABgFIABgCIgIAAQgEAAgDADg");
	this.shape_10.setTransform(131.575,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgHgDgFgGIAOgNQAGAHAMAAQAEAAAEgDQAEgDAAgDQAAgGgHgCIgGgBQgTgGAAgOQAAgOAJgIQAKgIAPAAQARAAAIAKIgOANQgEgGgKAAQgFAAgDADQgEADAAADQAAADADACIAEACIAGACQALACAFAFQAEAFAAAKQAAAOgLAIQgJAGgOAAQgLAAgHgCg");
	this.shape_11.setTransform(125.625,0.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSA0IAThnIASAAIgTBng");
	this.shape_12.setTransform(118.3,0.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUAhIAIgmIAAgDQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgJAAgBAKIgIAmIgSAAIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQgJAAgBAKIgIAmIgTAAIANhAIASAAIgBAGQAGgHAKAAQAHAAAFAHQAHgHAMAAQAGAAAFAFQAHAFAAAIIgBAIIgIAng");
	this.shape_13.setTransform(108.9,1.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggArIARhUIARAAIgBAFQAGgGAJAAQAJAAAFAGQADAEAAAHQAAAFgCALQgEAUgGAGQgHAGgJAAQgIAAgFgGIgFAagAAAgVQgBADgCAJIgBAJQAAAGAFAAQAFAAACgEQACgCACgJIABgKQAAgGgGAAQgFAAgCAEg");
	this.shape_14.setTransform(100.8,2.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeArIAlhEIgRAAIgCANIgSAAIAGgeIA3AAIgDARIglBEg");
	this.shape_15.setTransform(95.725,0.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTAJIADgRIAkAAIgDARg");
	this.shape_16.setTransform(87.45,0.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUAhIAIgmIAAgDQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgIAAgBAKIgIAmIgSAAIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQgJAAgBAKIgIAmIgTAAIANhAIASAAIgBAGQAGgHAKAAQAHAAAFAHQAHgHAMAAQAGAAAFAFQAHAFAAAIIgBAIIgIAng");
	this.shape_17.setTransform(77.85,1.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgHQAAgKAGgGQAHgFAMgBIAMAAIABgCIAAgCQAAgGgIAAQgGAAgFAFIgJgNQAJgIAOAAQAKAAAHAFQAHAEAAAKIgBAGIgIAnIgSAAIABgFQgFAGgIAAQgIAAgFgFgAgIAJQgCACAAACQAAAFAGAAQAEAAADgEQACgBABgFIABgCIgIAAQgEAAgDADg");
	this.shape_18.setTransform(70.025,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbArIAYgjIgEABQgJAAgFgGQgFgGAAgJQAAgNAHgJQAIgIANAAQAMAAAIAHQAGAHAAAJQAAAHgDAGIgIAMIgXAlgAgFgVQgDACAAAGQAAAIAIAAQAEAAACgEQADgDAAgFQAAgJgIAAQgDAAgDAFg");
	this.shape_19.setTransform(64.775,0.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAaIAFgVIATAAIgEAVgAgJgDIAFgWIAUAAIgFAWg");
	this.shape_20.setTransform(57.3,1.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcAhIAMhAIARAAIgBAGQAGgHAKAAQAIAAAFAHIgQAOIgCgCIgEgBQgDAAgDACQgCADgBAEIgIAmg");
	this.shape_21.setTransform(53.375,1.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAdQgGgFAAgJIABgIIAIgmIATAAIgIAlIAAADQAAAEACACQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAHAAACgKIAIglIATAAIgNA/IgSAAIABgGQgFAHgKAAQgGgBgEgDg");
	this.shape_22.setTransform(47.475,1.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADArIAIgnIAAgDQAAgCgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgIAAgBAJIgIAnIgTAAIARhVIASAAIgFAZQAHgFAHAAQAHAAAEAEQAGAFgBAJIAAAHIgIAog");
	this.shape_23.setTransform(40.8,0.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYArIAOhDIgVAAIAEgSIA7AAIgEASIgTAAIgNBDg");
	this.shape_24.setTransform(35.475,0.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSA0IAThnIASAAIgTBng");
	this.shape_25.setTransform(27.4,0.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUAhIAIgmIAAgDQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgJAAgBAKIgIAmIgSAAIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQgJAAgBAKIgIAmIgTAAIANhAIASAAIgBAGQAGgHAKAAQAHAAAFAHQAHgHAMAAQAGAAAFAFQAHAFAAAIIgBAIIgIAng");
	this.shape_26.setTransform(18,1.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggArIARhUIARAAIgBAFQAGgGAJAAQAJAAAFAGQADAEAAAHQAAAFgCALQgEAUgGAGQgHAGgJAAQgIAAgFgGIgFAagAAAgVQgBADgCAJIgBAJQAAAGAFAAQAFAAACgEQACgCACgJIABgKQAAgGgGAAQgFAAgCAEg");
	this.shape_27.setTransform(9.9,2.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAkQgGgHAAgJQAAgHADgGIAHgMIAYglIAVAAIgYAjIAEAAQAIgBAGAGQAFAFAAAKQAAANgIAJQgIAIgMAAQgNAAgHgHgAgGAKQgCADAAAFQAAAJAIAAQADAAADgEQACgDAAgGQAAgIgHAAQgEAAgDAEg");
	this.shape_28.setTransform(4.025,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAJIADgRIAkAAIgDARg");
	this.shape_29.setTransform(-3.45,0.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAUAhIAIgmIAAgDQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgIAAgBAKIgIAmIgSAAIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQgJAAgBAKIgIAmIgTAAIANhAIASAAIgBAGQAGgHAKAAQAHAAAFAHQAHgHAMAAQAGAAAFAFQAHAFAAAIIgBAIIgIAng");
	this.shape_30.setTransform(-13.05,1.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAcQgFgFAAgHQAAgKAGgGQAHgFAMgBIAMAAIABgCIAAgCQAAgGgIAAQgGAAgFAFIgJgNQAJgIAOAAQAKAAAHAFQAHAEAAAKIgBAGIgIAnIgSAAIABgFQgFAGgIAAQgIAAgFgFgAgIAJQgCACAAACQAAAFAGAAQAEAAADgEQACgBABgFIABgCIgIAAQgEAAgDADg");
	this.shape_31.setTransform(-20.875,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbArIAYgjIgEABQgJAAgFgGQgFgGAAgJQAAgNAHgJQAIgIANAAQAMAAAIAHQAGAHAAAJQAAAHgDAGIgIAMIgXAlgAgFgVQgDACAAAGQAAAIAIAAQAEAAACgEQADgDAAgFQAAgJgIAAQgDAAgDAFg");
	this.shape_32.setTransform(-26.125,0.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAaIAFgVIATAAIgEAVgAgJgDIAFgWIAUAAIgFAWg");
	this.shape_33.setTransform(-33.6,1.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRArIAMg9IASAAIgMA9gAgDgbIADgPIASAAIgDAPg");
	this.shape_34.setTransform(-36.575,0.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgcAhIAMhAIARAAIgBAGQAGgHAKAAQAIAAAFAHIgQAOIgCgCIgEgBQgDAAgDACQgCADgBAEIgIAmg");
	this.shape_35.setTransform(-40.525,1.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjArIARhVIA2AAIgEASIgiAAIgDARIAdAAIgDAQIgdAAIgHAig");
	this.shape_36.setTransform(-46.25,0.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcAnQgIgGAAgLQAAgKAGgIQADgEAJgFQgFgIAAgGQAAgJAFgGQAHgIANAAQAWAAAAATQgBAKgKAHIgHAFIAHALQAEgEACgHIASAAQgDAPgMAKIAMATIgWAAIgEgGQgIAGgMAAQgKAAgGgEgAgSATQAAADACADQADACADAAQAFAAAFgEIgKgQQgHAEgBAIgAgEgUQAAADADAEIABgCQAGgEAAgDQAAgFgFAAQgFAAAAAHg");
	this.shape_37.setTransform(-56.1,0.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcAlQgEgFAAgFIACgRQAFgUAFgFQAGgHAKAAQAIAAAFAGIAFgaIATAAIgRBUIgRAAIABgFQgGAGgJAAQgJAAgEgGgAgHgBQgCADgCAIIgBAKQAAAHAFAAQAFAAACgFQACgDACgJIABgJQAAgGgFAAQgFAAgCAEg");
	this.shape_38.setTransform(-65.075,0.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTAdQgJgGAAgMQAAgSAJgMQAJgNAPAAQAKAAAHAHQAHAGAAALQAAAGgDAIIgkAAIAAADQAAAJAJAAQAHAAAHgHIAJAMQgKAKgPAAQgKAAgGgEgAgHgFIASAAIAAgDQAAgJgHABQgIAAgDALg");
	this.shape_39.setTransform(-71.55,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCArIgFgrIgWArIgRAAIgFhVIAVAAIACAuIAWguIANAAIAEAuIAUguIAVAAIgnBVg");
	this.shape_40.setTransform(-78.6,0.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAJIAEgRIAlAAIgEARg");
	this.shape_41.setTransform(-89.2,0.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AADAhIAIgmIAAgDQAAgDgCgCQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgHAAgCAKIgIAmIgSAAIAMhAIARAAIAAAGQAGgHAJAAQAGAAAEAEQAGAFgBAJIAAAIIgIAng");
	this.shape_42.setTransform(-97.15,1.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAcQgHgGAAgKIACgMQADgQAIgIQAHgIAMAAQAKAAAGAGQAHAFAAALIgCAKQgDASgIAIQgHAHgMAAQgJAAgHgFgAgBgNQgEAEgCAJIgBAKQAAAGAGABQACAAACgDQAEgDACgLIABgIQAAgHgGAAQgDAAgBACg");
	this.shape_43.setTransform(-103.175,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAJArIAJgqIgQAVIgLAAIgIgVIgIAqIgUAAIARhVIASAAIAKAmIAbgmIAUAAIgSBVg");
	this.shape_44.setTransform(-110.4,0.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAaIAEgVIATAAIgEAVgAgJgDIAFgWIATAAIgEAWg");
	this.shape_45.setTransform(-119,1.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdAXIANgMQAFAGAJAAQADAAAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgDgFgBIgHgBQgHgCgFgEQgDgDAAgFQAAgLAHgGQAHgIAOAAQAOAAAIAIIgNAMQgEgEgGAAQgJAAABAEQAAAEACAAIAJACQAPACAAAOQAAAKgHAGQgHAHgOAAQgRAAgJgKg");
	this.shape_46.setTransform(-123.6,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcAhIAMhAIARAAIgBAGQAGgHAKAAQAIAAAFAHIgQAOIgCgCIgEgBQgDAAgDACQgCADgBAEIgIAmg");
	this.shape_47.setTransform(-128.375,1.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYAdQgGgFAAgJIABgIIAIgmIATAAIgIAlIAAADQAAAEACACQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAHAAACgKIAIglIATAAIgNA/IgSAAIABgGQgFAHgKAAQgGgBgEgDg");
	this.shape_48.setTransform(-134.275,1.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUAcQgHgGAAgKIACgMQADgQAIgIQAHgIAMAAQAKAAAGAGQAHAFAAALIgCAKQgDASgIAIQgHAHgMAAQgJAAgHgFgAgBgNQgEAEgCAJIgBAKQAAAGAGABQACAAACgDQAEgDACgLIABgIQAAgHgGAAQgDAAgBACg");
	this.shape_49.setTransform(-140.625,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AACArIAHgjIgUAAIgHAjIgUAAIARhVIAUAAIgGAiIAUAAIAGgiIAUAAIgRBVg");
	this.shape_50.setTransform(-147.15,0.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcAlQgEgFAAgFIACgRQAFgUAFgFQAGgHAKAAQAIAAAFAGIAFgaIATAAIgRBUIgRAAIABgFQgGAGgJAAQgJAAgEgGgAgHgBQgCADgCAIIgBAKQAAAHAFAAQAFAAACgFQACgDACgJIABgJQAAgGgFAAQgFAAgCAEg");
	this.shape_51.setTransform(-156.125,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgTAdQgJgGABgMQgBgSAJgMQAJgNAOAAQALAAAHAHQAGAGAAALQAAAGgBAIIgkAAIgBADQAAAJAKAAQAGAAAGgHIAJAMQgJAKgPAAQgJAAgHgEgAgHgFIARAAIABgDQAAgJgIABQgHAAgDALg");
	this.shape_52.setTransform(-162.6,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgcAlQgEgFAAgFIACgRQAFgUAFgFQAGgHAKAAQAIAAAFAGIAFgaIATAAIgRBUIgRAAIABgFQgGAGgJAAQgJAAgEgGgAgHgBQgCADgCAIIgBAKQAAAHAFAAQAFAAACgFQACgDACgJIABgJQAAgGgFAAQgFAAgCAEg");
	this.shape_53.setTransform(-168.425,0.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AADAhIAIgmIAAgDQAAgDgBgCQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgIAAgBAKIgIAmIgTAAIANhAIARAAIAAAGQAGgHAJAAQAFAAAFAEQAGAFgBAJIAAAIIgIAng");
	this.shape_54.setTransform(-175.2,1.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAdQgJgGAAgMQAAgSAJgMQAJgNAOAAQALAAAHAHQAGAGABALQAAAGgCAIIglAAIAAADQAAAJAJAAQAHAAAHgHIAIAMQgJAKgPAAQgKAAgGgEgAgHgFIASAAIAAgDQAAgJgIABQgHAAgDALg");
	this.shape_55.setTransform(-181.25,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgBAoQgHAAgFgEQgFgEAAgHIABgFIAFgaIgFAAIADgPIAFAAIAEgSIASAAIgEASIAKAAIgDAPIgKAAIgFAaIAAACQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAIAGAAIgDAPg");
	this.shape_56.setTransform(-185.925,0.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAFAgIgGgRIgMARIgXAAIAbggIgPgfIAWAAIAFAQIALgQIAXAAIgaAfIAPAgg");
	this.shape_57.setTransform(-191.275,1.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgjArIARhVIA2AAIgDASIgjAAIgCAQIAcAAIgDAQIgdAAIgDARIAjAAIgEASg");
	this.shape_58.setTransform(-197.3,0.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAAgIgEgjIgTAjIgPAAIgFg/IASAAIACAhIARghIAMAAIAEAhIAOghIAUAAIgfA/g");
	this.shape_59.setTransform(-206.875,1.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTAdQgJgGAAgMQAAgSAJgMQAJgNAPAAQAKAAAHAHQAHAGgBALQAAAGgCAIIgkAAIAAADQAAAJAJAAQAHAAAHgHIAJAMQgKAKgOAAQgLAAgGgEgAgIgFIASAAIABgDQAAgJgHABQgIAAgEALg");
	this.shape_60.setTransform(-214.85,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAHArIgRgsIgJAsIgUAAIARhVIAQAAIASAsIAJgsIATAAIgRBVg");
	this.shape_61.setTransform(-221.575,0.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1A7E4A").s().p("Eg8vABPIAAidMA9jAAAIKhAAMAxbAAAIAACdg");
	this.shape_62.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388.8,-10,777.6,19.3);


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
	this.instance.setTransform(329,-60,0.4068,0.4068);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(329,-60,112.69999999999999,43.5), null);


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
	this.shape.graphics.f("#02216C").s().p("AgOAgQgIgCgFgGIAKgKQAHAGAKAAQAMAAAAgHQAAgGgHAAIgJgBQgUgCAAgQQAAgKAIgGQAHgFAKAAQARAAAIAIIgKAKQgFgFgKAAQgJAAAAAHQAAAFAHABIAJABQAUACAAAQQAAALgIAGQgIAFgMAAQgIAAgGgCg");
	this.shape.setTransform(-5.625,-6.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgcAAQAAgPAIgJQAIgJAMAAQANAAAJAJQAHAJAAAOIAAAGIgpAAQABAHADAEQAEAEAGAAQAJAAAGgGIAKAJQgFAGgGACQgFADgJAAQgeAAAAgigAANgFIgCgIQgDgGgIAAQgHAAgDAGQgBAEgBAEIAZAAIAAAAg");
	this.shape_1.setTransform(-12.25,-6.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgPAbQgKgJAAgSQAAgSAKgIQAIgHALAAQANAAAJAJIgMALQgFgFgFAAQgFAAgEAEQgDAFAAAJQAAAKADAFQAEAEAFAAQAFAAAFgFIAMALQgJAJgNAAQgLAAgIgHg");
	this.shape_2.setTransform(-18.7,-6.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgHAuIAAhCIAPAAIAABCgAgIgfIAAgOIAQAAIAAAOg");
	this.shape_3.setTransform(-23.7,-7.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgXAiIAAhCIAQAAIAAAGQAGgHAKAAQAJAAAGAHIgMAMQgEgEgFAAQgDAAgDADQgEAEAAAGIAAAng");
	this.shape_4.setTransform(-27.875,-6.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgbAuIAAhaIAQAAIAAAGQAHgHAJAAQAKAAAGAGQAFAFABAIIABAPIgBAPQgBAIgFAEQgGAGgKABQgJAAgGgIIAAAfgAgIgZQgCAFAAAJQAAAJACADQACAHAGgBQAHABACgHQACgDAAgJQAAgJgCgFQgCgFgHAAQgGAAgCAFg");
	this.shape_5.setTransform(-34.725,-5.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgcAAQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAJAAAOIAAAGIgpAAQABAHADAEQAEAEAGAAQAJAAAGgGIAKAJQgFAGgGACQgFADgJAAQgeAAAAgigAANgFIgCgIQgDgGgIAAQgHAAgDAGQgBAEgBAEIAZAAIAAAAg");
	this.shape_6.setTransform(-44.9,-6.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAFAuQgIgBgGgGQgEgEAAgIIAAhHIAPAAIAABFQABAHAFgBIAHAAIAAAPg");
	this.shape_7.setTransform(-50.25,-7.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgDQAAgLgLAAQgJAAgEAFIgLgKQAFgFAFgCQAGgCAIAAQAcAAAAAYIAAArIgRAAIAAgHQgGAHgJAAQgLAAgGgGgAgLANQAAAHAKAAQAGAAADgCQADgDAAgGIAAgDIgMAAQgKgBAAAIg");
	this.shape_8.setTransform(-56.175,-6.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgOAgQgIgCgFgGIAKgKQAHAGAKAAQAMAAAAgHQAAgGgHAAIgJgBQgUgCAAgQQAAgKAIgGQAHgFAKAAQARAAAIAIIgKAKQgFgFgKAAQgJAAAAAHQAAAFAHABIAJABQAUACAAAQQAAALgIAGQgIAFgMAAQgIAAgGgCg");
	this.shape_9.setTransform(-62.675,-6.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AAOAhIgOgpIgNApIgNAAIgVhBIARAAIAMAoIANgoIALAAIAOAoIAKgoIASAAIgUBBg");
	this.shape_10.setTransform(-73.6,-6.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGAAgJQAAgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgPQgEAEAAALQAAAMAEAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgLgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_11.setTransform(-81.925,-6.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AAFAuQgJgBgFgGQgEgEgBgIIAAhHIAQAAIAABFQABAHAFgBIAHAAIAAAPg");
	this.shape_12.setTransform(-87.25,-7.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AgWAuIAAgQIADAAIAGgBQACgBABgDIADgJIgXg8IARAAIANAoIANgoIASAAIgdBMQgCAFgCADQgFAGgJAAg");
	this.shape_13.setTransform(-95.625,-5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AgUAoQgEgFgCgIIgBgQIABgNQACgJAEgFQAGgFAKAAQAKgBAFAHIAAgeIARAAIAABaIgRAAIAAgHQgFAIgKAAQgKAAgGgGgAgJgBQgBADAAAJQAAAKABAEQADAGAGAAQAHAAACgGQACgEAAgKQAAgJgCgDQgCgGgHAAQgGAAgDAGg");
	this.shape_14.setTransform(-102.55,-7.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgDQAAgLgLAAQgJAAgEAFIgLgKQAFgFAFgCQAGgCAIAAQAcAAAAAYIAAArIgRAAIAAgHQgGAHgJAAQgLAAgGgGgAgLANQAAAHAKAAQAGAAADgCQADgDAAgGIAAgDIgMAAQgKgBAAAIg");
	this.shape_15.setTransform(-109.575,-6.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AgcAAQAAgPAIgJQAIgJAMAAQANAAAJAJQAHAJAAAOIAAAGIgoAAQAAAHADAEQAEAEAGAAQAJAAAGgGIAKAJQgFAGgGACQgFADgJAAQgeAAAAgigAANgFIgCgIQgDgGgIAAQgHAAgDAGQgCAEABAEIAYAAIAAAAg");
	this.shape_16.setTransform(-116.3,-6.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgXAiIAAhCIAQAAIAAAGQAGgHAKAAQAJAAAGAHIgMAMQgEgEgFAAQgDAAgDADQgEAEAAAGIAAAng");
	this.shape_17.setTransform(-122.275,-6.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AAFAuQgJgBgEgGQgGgEAAgIIAAhHIAQAAIAABFQAAAHAHgBIAFAAIAAAPg");
	this.shape_18.setTransform(-127.5,-7.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgDQAAgLgLAAQgJAAgEAFIgLgKQAFgFAFgCQAGgCAIAAQAcAAAAAYIAAArIgRAAIAAgHQgGAHgJAAQgLAAgGgGgAgLANQAAAHAKAAQAGAAADgCQADgDAAgGIAAgDIgMAAQgKgBAAAIg");
	this.shape_19.setTransform(-133.425,-6.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgXAiIAAhCIAQAAIAAAGQAGgHAKAAQAJAAAGAHIgMAMQgEgEgFAAQgDAAgDADQgEAEAAAGIAAAng");
	this.shape_20.setTransform(-142.025,-6.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgUAcQgHgHAAgMIAAgqIARAAIAAAnQAAAHAEADQACADAEAAQAFAAADgDQADgDAAgHIAAgnIARAAIAABCIgQAAIAAgGQgHAHgJAAQgKAAgGgGg");
	this.shape_21.setTransform(-149.125,-6.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGAAgJQAAgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgPQgEAEAAALQAAAMAEAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgLgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_22.setTransform(-156.225,-6.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgKAuIAAgzIgHAAIAAgNIAHAAIAAgIQAAgIAEgFQAGgGAJAAIAJAAIAAAOIgHAAQgFAAAAAGIAAAHIAMAAIAAANIgMAAIAAAzg");
	this.shape_23.setTransform(-164.75,-7.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGAAgJQAAgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgPQgEAEAAALQAAAMAEAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgLgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_24.setTransform(-170.475,-6.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgbAuIAAhaIAQAAIAAAGQAHgHAJAAQAKAAAGAGQAFAFABAIIABAPIgBAPQgBAIgFAEQgGAGgKABQgJAAgGgIIAAAfgAgIgZQgCAFAAAJQAAAJACADQACAHAGgBQAHABACgHQACgDAAgJQAAgJgCgFQgCgFgHAAQgGAAgCAFg");
	this.shape_25.setTransform(-180.325,-5.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGAAgJQAAgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgPQgEAEAAALQAAAMAEAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgLgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_26.setTransform(-187.525,-6.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AAIAqQgIAAgFgGQgFgFAAgIIAAggIgHAAIAAgNIAHAAIAAgTIAQAAIAAATIAMAAIAAANIgMAAIAAAfQAAAGAGAAIAGAAIAAAOg");
	this.shape_27.setTransform(-193.325,-7.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AALAiIAAgoQAAgGgEgDQgDgDgEAAQgEAAgDADQgDADAAAGIAAAoIgRAAIAAhCIAQAAIAAAGQAHgHAJAAQAKAAAGAGQAHAHAAAMIAAAqg");
	this.shape_28.setTransform(-202.075,-6.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgGAAgJQAAgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgPQgEAEAAALQAAAMAEAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgLgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_29.setTransform(-209.275,-6.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#02216C").s().p("AgiBNIAHgjIAjAAIgIAjgAgSAaIALhmIAqAAIgeBmg");
	this.shape_30.setTransform(9.15,-27.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#02216C").s().p("AgqBKQgNgFgKgLIAagYQALANAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgEQgkgJAAgbQAAgaASgPQARgOAcAAQAfAAAPAUIgZAWQgIgKgSAAQgKAAgGAGQgGAFAAAFQAAAGAEADIAIADIAMAEQAUAFAJAJQAHAJAAARQAAAagTAPQgSAMgaAAQgTAAgNgFg");
	this.shape_31.setTransform(-1.525,-27.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#02216C").s().p("AgsBNIAYh6IglAAIAHgfIBsAAIgHAfIgjAAIgYB6g");
	this.shape_32.setTransform(-12.075,-27.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02216C").s().p("AAMBNIgghPIgQBPIgkAAIAfiZIAeAAIAgBQIAQhQIAkAAIgfCZg");
	this.shape_33.setTransform(-26.425,-27.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#02216C").s().p("Ag0BBQgNgMAAgUIABgOIAThgIAkAAIgUBiIAAAJQAAAQAPAAQATAAAFgbIAUhgIAlAAIgVBkQgGAcgSAOQgQANgWAAQgWAAgOgNg");
	this.shape_34.setTransform(-39.8,-27.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02216C").s().p("AgvBBQgNgNAAgTQAAgLAFgWQAFgYAEgKQAFgQAKgKQASgSAZAAQAXAAANAOQANANAAATQAAAKgFAWQgFAZgEAKQgFAQgKAKQgSASgZAAQgXAAgNgOgAgGgnQgGAHgHAgQgEAVAAAKQAAAHAEAEQAEAFAHAAQAIAAAHgHQAGgIAHggQAEgUAAgKQAAgHgEgFQgEgEgHAAQgJAAgGAHg");
	this.shape_35.setTransform(-53.625,-27.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#02216C").s().p("AgvBBQgNgNAAgTQAAgLAFgWQAFgYADgKQAGgQAJgJQASgTAaAAQAYAAANAOQAMAOAAAVIgkAAQgBgRgOAAQgJAAgGAHQgHAHgHAgQgEAVAAAKQAAAQAQAAQAOAAAGgRIAmAAQgRAxgsAAQgYAAgNgOg");
	this.shape_36.setTransform(-66.125,-27.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#02216C").s().p("AgqBKQgNgFgKgLIAagYQALANAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgEQgkgJAAgbQAAgaASgPQARgOAcAAQAfAAAPAUIgZAWQgIgKgSAAQgKAAgGAGQgGAFAAAFQAAAGAEADIAIADIAMAEQAUAFAJAJQAHAJAAARQAAAagTAPQgSAMgaAAQgTAAgNgFg");
	this.shape_37.setTransform(-79.025,-27.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#02216C").s().p("AghBNIAfiZIAkAAIggCZg");
	this.shape_38.setTransform(-88.025,-27.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#02216C").s().p("AhABNIAfiZIAzAAQAWAAANALQAMAMAAAVQAAAHgFAZQgFAdgEAMQgFALgJAJQgQARgcgBgAgWAuIAQAAQALgBAGgGQAEgEADgGIAGgdQAEgXAAgGQAAgQgQAAIgPAAg");
	this.shape_39.setTransform(-98.15,-27.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02216C").s().p("Ag0BNIAfiZIAkAAIgYB6IA+AAIgGAfg");
	this.shape_40.setTransform(-115.675,-27.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#02216C").s().p("AAfBNIgCgYIgtAAIgMAYIgnAAIBUiZIAcAAIAXCZgAAaAXIgFgsIgWAsIAbAAg");
	this.shape_41.setTransform(-129.025,-27.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#02216C").s().p("AAMBNIgghPIgQBPIgkAAIAfiZIAeAAIAgBQIAQhQIAkAAIgfCZg");
	this.shape_42.setTransform(-141.325,-27.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02216C").s().p("AgvBBQgNgNAAgTQAAgLAFgWQAFgYAEgKQAFgQAKgKQASgSAZAAQAXAAANAOQANANAAATQAAAKgFAWQgFAZgEAKQgFAQgKAKQgSASgZAAQgXAAgNgOgAgGgnQgGAHgHAgQgEAVAAAKQAAAHAEAEQAEAFAHAAQAIAAAHgHQAGgIAHggQAEgUAAgKQAAgHgEgFQgEgEgHAAQgJAAgGAHg");
	this.shape_43.setTransform(-155.025,-27.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#02216C").s().p("AghBNIAfiZIAkAAIggCZg");
	this.shape_44.setTransform(-164.775,-27.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#02216C").s().p("AgsBNIAYh6IglAAIAHgfIBsAAIgHAfIgjAAIgYB6g");
	this.shape_45.setTransform(-172.775,-27.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#02216C").s().p("AghBNIAfiZIAkAAIggCZg");
	this.shape_46.setTransform(-183.175,-27.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#02216C").s().p("AhABNIAfiZIAzAAQAWAAAMALQANAMAAAVQAAAHgFAZQgFAdgEAMQgFALgKAJQgPARgcgBgAgVAuIAPAAQALgBAGgGQAEgEACgGIAHgdQAFgXgBgGQAAgQgQAAIgPAAg");
	this.shape_47.setTransform(-193.35,-27.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#02216C").s().p("AhABNIAfiZIAzAAQAWAAAMALQANAMAAAVQAAAHgFAZQgGAdgEAMQgEALgKAJQgQARgbgBgAgVAuIAQAAQAJgBAIgGQADgEACgGIAHgdQAFgXAAgGQgBgQgQAAIgPAAg");
	this.shape_48.setTransform(-206.65,-27.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#02216C").s().p("AAfBNIgCgYIgtAAIgMAYIgnAAIBUiZIAcAAIAXCZgAAaAXIgFgsIgWAsIAbAAg");
	this.shape_49.setTransform(-221.225,-27.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_50.setTransform(-35.475,25.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAkQAFAAADgCQACgBACgEIACgIIgQhBIALAAIAJAwIAKgwIALAAIgSBLQgCAIgFADQgFADgJAAg");
	this.shape_51.setTransform(-38.75,24.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAvIgKAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_52.setTransform(-43.15,23.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFAsIAAhAIAKAAIAABAgAgFggIAAgLIALAAIAAALg");
	this.shape_53.setTransform(-46.6,22.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAIAtIAAgvQAAgFgDgCQgBgCgEAAQgDAAgCACQgCACAAAFIAAAvIgKAAIAAhZIAKAAIAAAdIAEgDQADgDADAAQAHAAAEAFQAEAFAAAJIAAAvg");
	this.shape_54.setTransform(-50.1,21.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAdQgGgGAAgJIAKAAQAAAFADADQACADADAAQADAAADgDQACgCAAgEQAAgEgBgCQgCgDgEgCIgHgEQgHgCgCgFQgCgDAAgFQAAgIAFgGQAFgFAHAAQAIAAAEAFQAGAFAAAKIgKAAQAAgGgDgCQgCgDgDAAQgDAAgCADQgCACAAAEIABAFQABACAEACIAIAEQAGACADAFQADAEAAAGQAAAIgGAGQgFAFgIAAQgIAAgEgFg");
	this.shape_55.setTransform(-54.575,23.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgVAoQgHgGABgLQAAgHADgHQADgGAIgGQgGgIgCgFQgDgFAAgFQABgIAFgGQAEgFAIAAQAHAAAFAFQAFAFgBAIQAAAIgCAFQgDAGgGAGIAMAUQAFgHABgLIAJAAQgBAPgIAMIALASIgLAAIgGgJQgEAFgEACQgDADgHAAQgJAAgFgGgAgSAXQAAAGADAEQAEADAFAAQAGAAAHgJIgPgXQgKAKAAAJgAgMghQgCADAAAEQAAAGAHAKIAHgIQABgEAAgFQAAgEgBgCQgDgDgDAAQgDAAgDADg");
	this.shape_56.setTransform(-61.6,21.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAvIgKAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_57.setTransform(-69.25,23.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAdQgEgFAAgKQAAgJAGgFQAFgEAHAAIAHAAIAAgKQAAgKgIAAQgBAAgDADQgCACAAAFIgKAAQAAgJAFgFQAFgFAGAAQAJAAAEAFQAFAFAAAJIAAAvIgJAAIAAgGIgEAEQgDADgEAAQgHAAgEgFgAgEAFQgDADAAAGQAAALAHAAQAEAAACgDQACgDAAgEIAAgNIgGAAQgDAAgDADg");
	this.shape_58.setTransform(-74.025,23.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLAdQgEgEgBgHIgBgSIABgRQABgHADgDQAFgGAHAAQAIAAAFAGQADADACAHIAAATIgZAAQAAAQACAEQACADADAAQAEAAACgDQACgCAAgGIAKAAQAAAKgFAFQgEAFgJAAQgHAAgEgFgAAJgEQgBgOgCgDQgCgCgEAAQgDAAgCACQgCADAAAOIAQAAIAAAAg");
	this.shape_59.setTransform(-78.35,23.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDApQgGgFAAgKIAAhGIAJAAIAABGQAAAKAKAAIAAAJQgJAAgEgEg");
	this.shape_60.setTransform(-81.65,21.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgMAcQgFgGAAgWIABgQQABgHADgDQAEgHAIAAQAIAAAFAFQAFAEAAALIgKAAQAAgGgCgCQgCgCgEAAQgCAAgCACQgCADAAAEIgBAOIABAPQAAAFACACQACADACAAQAEAAACgDQACgCAAgGIAKAAQAAAKgFAFQgEAFgJAAQgIAAgEgGg");
	this.shape_61.setTransform(-85.325,23.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgSAkQAFAAADgCQACgBACgEIACgIIgQhBIALAAIAJAwIAKgwIALAAIgSBLQgCAIgFADQgFADgJAAg");
	this.shape_62.setTransform(-91.7,24.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAJAtIgLgfIgHALIAAAUIgKAAIAAhZIAKAAIAAA2IARgeIALAAIgQAZIARAog");
	this.shape_63.setTransform(-95.8,21.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgNAdQgEgFAAgKQAAgJAGgFQAFgEAHAAIAHAAIAAgKQAAgKgIAAQgBAAgDADQgCACAAAFIgKAAQAAgJAFgFQAFgFAGAAQAJAAAEAFQAFAFAAAJIAAAvIgJAAIAAgGIgEAEQgDADgEAAQgHAAgEgFgAgEAFQgDADAAAGQAAALAHAAQAEAAACgDQACgDAAgEIAAgNIgGAAQgDAAgDADg");
	this.shape_64.setTransform(-100.825,23.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLAdQgEgEgCgHIgBgSIABgRQACgHADgDQAFgGAHAAQAIAAAFAGQADADABAHIABATIgZAAQAAAQADAEQACADACAAQAEAAACgDQACgCAAgGIAKAAQABAKgGAFQgEAFgJAAQgHAAgEgFgAAIgEQABgOgDgDQgCgCgEAAQgDAAgBACQgDADAAAOIAPAAIAAAAg");
	this.shape_65.setTransform(-105.15,23.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAcQgEgEAAgJIAAgvIALAAIAAAvQAAAEACADQACACACAAQADAAADgCQACgDAAgEIAAgvIAKAAIAABAIgKAAIAAgFQgBADgDABQgDACgDAAQgGAAgFgFg");
	this.shape_66.setTransform(-109.8,23.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAIAtIAAgcIgEADQgDACgDAAQgGAAgEgFQgDgEgBgFIgBgSIABgTQABgHADgDQAEgGAGABQADAAADACIAEAEIAAgGIAKAAIAABZgAgEghQgCACAAAFIgBAQIABANQAAAFACACQACADACAAQAEAAACgCQACgCAAgGIAAgdQAAgEgCgDQgCgCgEAAQgCAAgCACg");
	this.shape_67.setTransform(-114.575,24.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgMAdQgGgGAAgJIAKAAQAAAFADADQACADADAAQADAAADgDQACgCAAgEQAAgEgBgCQgCgDgEgCIgHgEQgHgCgCgFQgCgDAAgFQAAgIAFgGQAFgFAHAAQAIAAAEAFQAGAFAAAKIgKAAQAAgGgDgCQgCgDgDAAQgDAAgCADQgCACAAAEIABAFQABACAEACIAIAEQAGACADAFQADAEAAAGQAAAIgGAGQgFAFgIAAQgIAAgEgFg");
	this.shape_68.setTransform(-118.875,23.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAKAtIgMgfIgHALIAAAUIgKAAIAAhZIAKAAIAAA2IASgeIAKAAIgQAZIARAog");
	this.shape_69.setTransform(-125.25,21.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgMAcQgFgGAAgWIABgQQABgHADgDQAEgHAIAAQAIAAAFAFQAFAEAAALIgKAAQAAgGgCgCQgCgCgEAAQgCAAgCACQgCADAAAEIgBAOIABAPQAAAFACACQACADACAAQAEAAACgDQACgCAAgGIAKAAQAAAKgFAFQgEAFgJAAQgIAAgEgGg");
	this.shape_70.setTransform(-129.975,23.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgNAdQgEgFAAgKQAAgJAGgFQAFgEAHAAIAHAAIAAgKQAAgKgIAAQgBAAgDADQgCACAAAFIgKAAQAAgJAFgFQAFgFAGAAQAJAAAEAFQAFAFAAAJIAAAvIgJAAIAAgGIgEAEQgDADgEAAQgHAAgEgFgAgEAFQgDADAAAGQAAALAHAAQAEAAACgDQACgDAAgEIAAgNIgGAAQgDAAgDADg");
	this.shape_71.setTransform(-134.575,23.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDArIgEgEIAAAFIgKAAIAAhYIAKAAIAAAdIAEgEQADgCADAAQAHAAAEAFQADADABAHIAAASIAAATQgBAGgDADQgEAFgHAAQgDAAgDgCgAgEgKQgDADAAAFIAAAcQAAAGADACQACACACAAQADAAADgDQABgCABgEIAAgPIAAgPQgBgEgBgCQgDgDgDAAQgCAAgCACg");
	this.shape_72.setTransform(-138.925,22.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgDgCQgCgDgDAAQgCAAgCADQgCACAAAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_73.setTransform(-145.8,23.125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEAsIAAhAIAJAAIAABAgAgFggIAAgLIALAAIAAALg");
	this.shape_74.setTransform(-149.25,22.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAAAlQgGgEAAgKIAAgmIgHAAIAAgIIAHAAIAAgRIAKAAIAAARIAKAAIAAAIIgKAAIAAAmQAAAKAKAAIAAAJQgKAAgEgFg");
	this.shape_75.setTransform(-154.025,22.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgMAdQgDgEgBgHIgBgSIABgRQABgHADgDQAFgGAHAAQAIAAAFAGQAEADABAHIABATIgaAAQAAAQACAEQACADAEAAQADAAACgDQACgCAAgGIALAAQgBAKgFAFQgFAFgHAAQgIAAgFgFgAAJgEQAAgOgDgDQgCgCgEAAQgDAAgCACQgCADAAAOIAQAAIAAAAg");
	this.shape_76.setTransform(-157.75,23.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgMApQgFgFAAgJIAKAAQAAAFADADQACACACAAQADAAADgDQACgCAAgJIAAgKIgEAEQgCACgDAAQgHAAgEgFQgDgEgBgGIgBgRIABgRQABgGADgEQAEgFAHAAQADAAADADIADADIAAgFIAKAAIAABCQAAANgFAGQgFAFgIAAQgHAAgFgFgAgEghQgCACAAAFIgBAOIABANIACAGQACADACAAQADAAADgCQACgDAAgFIAAgaQAAgFgCgCQgCgCgEAAQgCAAgCACg");
	this.shape_77.setTransform(-162.375,24.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgMAoQgDgDgBgGIgBgTIABgSQABgHADgDQAEgFAGAAQADAAADACIAEAEIAAgdIAKAAIAABYIgKAAIAAgFQgBADgDABQgDACgDAAQgGAAgEgFgAgEgJQgCACAAAEIgBAPIABAPQAAAEACACQACADACAAQAEAAACgCQACgCAAgGIAAgcQAAgFgCgDQgCgCgEAAQgCAAgCADg");
	this.shape_78.setTransform(-169.125,22.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgDgCQgCgDgDAAQgCAAgCADQgCACAAAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_79.setTransform(-173.7,23.125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgNAdQgEgFAAgKQAAgJAGgFQAFgEAHAAIAHAAIAAgKQAAgKgIAAQgBAAgDADQgCACAAAFIgKAAQAAgJAFgFQAFgFAGAAQAJAAAEAFQAFAFAAAJIAAAvIgJAAIAAgGIgEAEQgDADgEAAQgHAAgEgFgAgEAFQgDADAAAGQAAALAHAAQAEAAACgDQACgDAAgEIAAgNIgGAAQgDAAgDADg");
	this.shape_80.setTransform(-178.475,23.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgMAdQgDgEgBgHIgBgSIABgRQABgHADgDQAFgGAHAAQAIAAAFAGQADADACAHIABATIgaAAQAAAQADAEQABADAEAAQADAAACgDQACgCAAgGIALAAQAAAKgGAFQgFAFgHAAQgIAAgFgFgAAJgEQAAgOgDgDQgCgCgEAAQgCAAgCACQgDADAAAOIAQAAIAAAAg");
	this.shape_81.setTransform(-21.95,11.425);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgMAcQgFgGAAgWIABgQQABgHADgDQAEgHAIAAQAIAAAFAFQAFAEAAALIgKAAQAAgGgCgCQgCgCgEAAQgCAAgCACQgCADAAAEIgBAOIABAPQAAAFACACQACADACAAQAEAAACgDQACgCAAgGIAKAAQAAAKgFAFQgEAFgJAAQgIAAgEgGg");
	this.shape_82.setTransform(-26.325,11.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgDgCQgCgDgDAAQgDAAgCADQgBACAAAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_83.setTransform(-30.85,11.375);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAdQgEgFAAgKQAAgJAGgFQAFgEAHAAIAHAAIAAgKQAAgKgIAAQgBAAgDADQgCACAAAFIgKAAQAAgJAFgFQAFgFAGAAQAJAAAEAFQAFAFAAAJIAAAvIgJAAIAAgGIgEAEQgDADgEAAQgHAAgEgFgAgEAFQgDADAAAGQAAALAHAAQAEAAACgDQACgDAAgEIAAgNIgGAAQgDAAgDADg");
	this.shape_84.setTransform(-35.625,11.425);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgCgCQgDgDgDAAQgDAAgCADQgCACAAAEIAAAvIgKAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_85.setTransform(-40.1,11.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgMAdQgDgEgBgHIgBgSIABgRQABgHADgDQAFgGAHAAQAIAAAFAGQAEADABAHIABATIgaAAQAAAQACAEQADADADAAQADAAACgDQACgCAAgGIALAAQgBAKgFAFQgFAFgHAAQgIAAgFgFgAAJgEQgBgOgCgDQgCgCgEAAQgDAAgCACQgCADAAAOIAQAAIAAAAg");
	this.shape_86.setTransform(-44.7,11.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAAAmQgGgFAAgKIAAgmIgHAAIAAgIIAHAAIAAgSIAKAAIAAASIAKAAIAAAIIgKAAIAAAlQAAAKAKAAIAAAJQgKAAgEgDg");
	this.shape_87.setTransform(-48.425,10.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgDgCQgCgDgDAAQgCAAgCADQgCACAAAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_88.setTransform(-52.3,11.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgFAsIAAhAIAKAAIAABAgAgFggIAAgLIALAAIAAALg");
	this.shape_89.setTransform(-55.75,10.275);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgNAdQgEgFAAgKQAAgJAGgFQAFgEAHAAIAHAAIAAgKQAAgKgIAAQgBAAgDADQgCACAAAFIgKAAQAAgJAFgFQAFgFAGAAQAJAAAEAFQAFAFAAAJIAAAvIgJAAIAAgGIgEAEQgDADgEAAQgHAAgEgFgAgEAFQgDADAAAGQAAALAHAAQAEAAACgDQACgDAAgEIAAgNIgGAAQgDAAgDADg");
	this.shape_90.setTransform(-59.275,11.425);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAVAhIAAgvQAAgEgCgCQgDgDgDAAQgDAAgDADQgCACAAAEIAAAvIgJAAIAAgvQAAgEgCgCQgCgDgEAAQgDAAgCADQgCACAAAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQAEgCADAAQAEAAADACQADACACADIAFgFQADgCAEAAQAIAAAEAFQAEAEAAAJIAAAvg");
	this.shape_91.setTransform(-65.025,11.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgMAhIAAhAIALAAIAAAHIADgFQAFgDAFAAIAAAKIgCAAQgFAAgEADQgCADAAAGIAAArg");
	this.shape_92.setTransform(-72.15,11.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgMAcQgDgEgCgGIgBgSIABgQQACgHADgDQAEgHAIAAQAJAAAFAHQADADABAHIAAAQIAAASQgBAGgDAEQgFAGgJAAQgIAAgEgGgAgEgVQgCADgBAFIAAANIAAAPQABAFACACQACADACAAQAEAAACgDQACgCAAgFIAAgPIAAgOQAAgEgCgDQgCgCgEAAQgCAAgCACg");
	this.shape_93.setTransform(-76.25,11.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgGAtIAAg5IgHAAIAAgHIAHAAIAAgGQABgLAFgEQAEgEAKAAIAAAJQgKAAAAAKIAAAGIAKAAIAAAHIgKAAIAAA5g");
	this.shape_94.setTransform(-79.95,10.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgLAhIAAhAIAKAAIAAAHIADgFQAEgDAHAAIAAAKIgEAAQgEAAgEADQgCADAAAGIAAArg");
	this.shape_95.setTransform(-84.9,11.375);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgNAcQgCgEgBgGIgBgSIABgQQABgHACgDQAFgHAIAAQAJAAAFAHQADADABAHIABAQIgBASQgBAGgDAEQgFAGgJAAQgIAAgFgGgAgFgVQgBADAAAFIgBANIABAPQAAAFABACQADADACAAQAEAAACgDQACgCAAgFIABgPIgBgOQAAgEgCgDQgCgCgEAAQgCAAgDACg");
	this.shape_96.setTransform(-89,11.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMAoQgDgDgBgGIgBgTIABgSQABgHADgDQAEgFAGAAQADAAADACIAEAEIAAgdIAKAAIAABYIgKAAIAAgFQgBADgDABQgDACgDAAQgGAAgEgFgAgEgJQgCACAAAEIgBAPIABAPQAAAEACACQACADACAAQAEAAACgCQACgCAAgGIAAgcQAAgFgCgDQgCgCgEAAQgCAAgCADg");
	this.shape_97.setTransform(-95.775,10.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgLAdQgEgEgCgHIgBgSIABgRQACgHADgDQAFgGAHAAQAIAAAFAGQADADABAHIABATIgZAAQAAAQADAEQACADACAAQAEAAACgDQACgCAAgGIAKAAQABAKgGAFQgEAFgJAAQgHAAgEgFgAAIgEQABgOgDgDQgCgCgEAAQgDAAgBACQgDADAAAOIAPAAIAAAAg");
	this.shape_98.setTransform(-100.2,11.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAKAhIgKgYIgIAYIgMAAIAPghIgOggIALAAIAIAXIAJgXIALAAIgOAgIAPAhg");
	this.shape_99.setTransform(-104.575,11.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAsIAAhAIAJAAIAABAgAgFggIAAgLIALAAIAAALg");
	this.shape_100.setTransform(-107.75,10.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgGAtIAAg5IgHAAIAAgHIAHAAIAAgGQAAgLAGgEQAEgEAKAAIAAAJQgKAAAAAKIAAAGIAKAAIAAAHIgKAAIAAA5g");
	this.shape_101.setTransform(-110.4,10.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgMAdQgDgEgCgHIgBgSIABgRQACgHADgDQAFgGAHAAQAIAAAFAGQAEADAAAHIABATIgZAAQAAAQADAEQACADACAAQAEAAACgDQACgCAAgGIAKAAQABAKgGAFQgEAFgJAAQgHAAgFgFgAAIgEQAAgOgCgDQgCgCgEAAQgCAAgCACQgDADAAAOIAPAAIAAAAg");
	this.shape_102.setTransform(-116.2,11.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgDArIgEgEIAAAFIgKAAIAAhYIAKAAIAAAdIAEgEQADgCADAAQAHAAAEAFQADADABAHIAAASIAAATQgBAGgDADQgEAFgHAAQgDAAgDgCgAgEgKQgDADAAAFIAAAcQAAAGADACQACACACAAQADAAADgDQABgCABgEIAAgPIAAgPQgBgEgBgCQgDgDgDAAQgCAAgCACg");
	this.shape_103.setTransform(-120.675,10.275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgMAcQgDgEgCgGIgBgSIABgQQACgHADgDQAEgHAIAAQAKAAAEAHQADADABAHIAAAQIAAASQgBAGgDAEQgEAGgKAAQgIAAgEgGgAgEgVQgCADAAAFIgBANIABAPQAAAFACACQACADACAAQAEAAACgDQACgCAAgFIAAgPIAAgOQAAgEgCgDQgCgCgEAAQgCAAgCACg");
	this.shape_104.setTransform(-127.45,11.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAAAmQgGgFAAgKIAAgmIgHAAIAAgIIAHAAIAAgSIAKAAIAAASIAKAAIAAAIIgKAAIAAAlQAAAKAKAAIAAAJQgKAAgEgDg");
	this.shape_105.setTransform(-131.175,10.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgDgCQgCgDgDAAQgCAAgCADQgCACAAAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_106.setTransform(-137.15,11.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgEAsIAAhAIAJAAIAABAgAgFggIAAgLIALAAIAAALg");
	this.shape_107.setTransform(-140.6,10.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgFAtIgThZIAMAAIAMBHIANhHIAMAAIgTBZg");
	this.shape_108.setTransform(-146.3,10.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AALAtIgMgnIgJAAIAAAnIgLAAIAAhZIAUAAQAKAAAFAGQAFAGAAAOQAAAJgCAGQgDAEgGADIAOApgAgKgCIAJAAQAFAAACgEQACgEAAgIQAAgIgCgEQgCgEgFAAIgJAAg");
	this.shape_109.setTransform(-151.275,10.225);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgLAhIAAhAIAKAAIAAAHIADgFQAEgDAHAAIAAAKIgEAAQgFAAgDADQgCADAAAGIAAArg");
	this.shape_110.setTransform(-157.7,11.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgNAcQgEgEAAgJIAAgvIALAAIAAAvQAAAEACADQACACACAAQADAAADgCQACgDAAgEIAAgvIAKAAIAABAIgKAAIAAgFQgBADgDABQgDACgDAAQgHAAgEgFg");
	this.shape_111.setTransform(-161.9,11.475);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgNAcQgCgEgBgGIgCgSIACgQQABgHACgDQAFgHAIAAQAJAAAFAHQADADABAHIABAQIgBASQgBAGgDAEQgFAGgJAAQgIAAgFgGgAgEgVQgCADAAAFIgBANIABAPQAAAFACACQACADACAAQAEAAACgDQACgCAAgFIAAgPIAAgOQAAgEgCgDQgCgCgEAAQgCAAgCACg");
	this.shape_112.setTransform(-166.5,11.425);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgSAkQAFAAADgCQACgBACgFIACgIIgQhAIALAAIAJAxIAKgxIALAAIgSBLQgCAIgFADQgFADgJAAg");
	this.shape_113.setTransform(-170.8,12.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgMApQgFgFAAgJIAKAAQAAAFADADQACACACAAQADAAADgDQACgCAAgJIAAgKIgEAEQgCACgDAAQgHAAgEgFQgDgEgBgGIgBgRIABgRQABgGADgEQAEgFAHAAQADAAADADIADADIAAgFIAKAAIAABCQAAANgFAGQgFAFgIAAQgHAAgFgFgAgEghQgCACAAAFIgBAOIABANIACAGQACADACAAQADAAADgCQACgDAAgFIAAgaQAAgFgCgCQgCgCgEAAQgCAAgCACg");
	this.shape_114.setTransform(-177.375,12.625);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAIAhIAAgvQAAgEgDgCQgBgDgEAAQgDAAgCADQgCACABAEIAAAvIgLAAIAAhAIAKAAIAAAFIAEgEQADgCADAAQAHAAAEAFQAEAEAAAJIAAAvg");
	this.shape_115.setTransform(-181.95,11.375);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgEAsIAAhAIAJAAIAABAgAgFggIAAgLIALAAIAAALg");
	this.shape_116.setTransform(-185.4,10.275);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgMAhIAAhAIAKAAIAAAHIAEgFQAFgDAFAAIAAAKIgCAAQgFAAgEADQgCADAAAGIAAArg");
	this.shape_117.setTransform(-187.9,11.375);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgUAtIAAhZIAUAAQAKAAAFAFQADADABAEIABAMQAAAKgFAGIgFADQADABACABQAEADABAFIABALIgBAMQgCAEgDADQgFAGgKAAgAgJAjIAIAAQAFAAADgEQADgDAAgJQAAgJgDgDQgDgEgFAAIgIAAgAgJgGIAIAAQAFAAADgDQACgDAAgIQAAgIgCgDQgDgDgFAAIgIAAg");
	this.shape_118.setTransform(-192.325,10.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-231.7,-43.7,248.39999999999998,74.5), null);


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
	this.instance.setTransform(-7,0.95,0.99,0.99);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-33.9,164,76);


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
	this.instance.setTransform(393.1,64.7,0.5585,0.5585,0,0,0,220.8,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},10).wait(171));

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
	this.instance_3.setTransform(26.25,72.75,0.1815,0.1815,0,0,0,221,33.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({regX:220.5,regY:33.8,scaleX:0.5142,scaleY:0.5142,x:26.35,y:72.8},10,cjs.Ease.get(1)).wait(176));

	// phn
	this.instance_4 = new lib.phn("synched",0);
	this.instance_4.setTransform(958.75,86.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({y:81.3,alpha:1},9,cjs.Ease.get(1)).wait(177));

	// Logo
	this.instance_5 = new lib.Logo_1();
	this.instance_5.setTransform(660.25,93.35,0.8,0.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({y:72.75,alpha:1},9,cjs.Ease.get(1)).wait(204));

	// sub head_02
	this.instance_6 = new lib.subhead_02("synched",0);
	this.instance_6.setTransform(869.7,47.4,1.0175,1.0175,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).to({x:864.7,alpha:1},11,cjs.Ease.get(1)).wait(182));

	// sub head_01
	this.instance_7 = new lib.subhead_01("synched",0);
	this.instance_7.setTransform(705.25,52.7,0.8932,0.8932,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({_off:false},0).to({x:715.25,alpha:1},11,cjs.Ease.get(1)).wait(193));

	// Head
	this.instance_8 = new lib.Head();
	this.instance_8.setTransform(623.2,55.45,1.0157,1.0157,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({y:41.45,alpha:1},9,cjs.Ease.get(1)).wait(213));

	// Img 1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(285.65,86.7,0.684,0.684,0,0,0,0.2,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(222));

	// Ours
	this.instance_10 = new lib.Ours("synched",0);
	this.instance_10.setTransform(635.2,81.85);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(204));

	// Corner
	this.instance_11 = new lib.Corner();
	this.instance_11.setTransform(93.75,91.1,0.4737,0.4737,180);

	this.instance_12 = new lib.Corner();
	this.instance_12.setTransform(931,-2,0.4737,0.4737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(240));

	// Summer
	this.instance_13 = new lib.SummerS("synched",0);
	this.instance_13.setTransform(109,50.2,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:0,regY:0,scaleX:1,scaleY:1,y:40.2,alpha:1},12,cjs.Ease.get(1)).wait(228));

	// Background
	this.instance_14 = new lib._1024x90_BG();
	this.instance_14.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-4.3,1036.6000000000001,106.3);


// stage content:
(lib.WFSB_216412_MM_1024x90_V2 = function(mode,startPosition,loop,reversed) {
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
		{src:"_1024x90_BG.jpg", id:"_1024x90_BG"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"kickoffasummerofsavings_tobeused_S.png", id:"kickoffasummerofsavings_tobeused_S"},
		{src:"Logo.png", id:"Logo"},
		{src:"SBH_01.png", id:"SBH_01"},
		{src:"Sparkle.png", id:"Sparkle"},
		{src:"Subhead_021111.png", id:"Subhead_021111"}
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