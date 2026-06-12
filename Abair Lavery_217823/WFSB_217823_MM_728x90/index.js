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



(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,658,90);


(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,658,90);


(lib.OSHALogo = function() {
	this.initialize(img.OSHALogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,91);// helper functions:

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


(lib.W2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AAoA9QAAgLglgeQglgdgJglQgFgRgGgFIAAAAQAEABADACQAEADAJAKQAcAgAkAaQAPAKAFAHQAFAHAAAJQAAAJgEAIIgIAMIgBABQgCAAAAgIg");
	this.shape.setTransform(4.7438,7.7809,1,1,0,-10.2201,169.7799);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAKBUIgMgFQgIgEgFgIQgFgHAAgIQgBgJAGgRQAPgqADgrQACgOACgEQAAgEADgCQgCAIAGAPQAOAkgNAtQgMAuAGAKQAGAHgDAAIgCAAg");
	this.shape_1.setTransform(9.1,0.5,1,1,0,0,0,1.4,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{regX:0,regY:0,skewX:-10.2201,skewY:169.7799,x:4.7438,y:7.7809}}]}).to({state:[{t:this.shape,p:{regX:-5.6,regY:-6.5,skewX:-27.412,skewY:152.588,x:9.1,y:0.35}}]},2).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.9,17.1);


(lib.W1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AAoA9QAAgLglgeQglgdgJglQgFgRgGgFIAAAAQAEABADACQAEADAJAKQAcAgAkAaQAPAKAFAHQAFAHAAAJQAAAJgEAIIgIAMIgBABQgCAAAAgIg");
	this.shape.setTransform(4.2062,7.7809,1,1,10.2201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({regX:-5.2,regY:-6.5,rotation:20.6935,x:0.25,y:0.45},0).wait(2).to({regX:-5.3,regY:-7.1,rotation:25.4475,x:0.3,y:-0.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,9.1,16.700000000000003);


(lib.Sh = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgbdhHjQAfgkA6gxQB2hkCMhFQHCjfIECiQCiAzFlCHQEKBkCNAcQDIApC3goQDMgrD3iZQEEigBsW1UABWASQgAOAhkQgKX8g7dOQgeOngbJ0Mgz6ACcg");
	this.shape.setTransform(175.7975,496.3373);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sh, new cjs.Rectangle(0,0,351.6,992.7), null);


(lib.OSHALogo_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(85.875,57.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_1.setTransform(82.225,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAggQAAgIgEgEQgEgDgGAAQgFAAgEADQgDAEgBAIIAAAgIgPAAIAAg8IAPAAIAAAHQAEgDAFgCQAEgDAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_2.setTransform(76.95,55.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgJAEgGQAEgHAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAEAAAFQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_3.setTransform(69.975,55.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAg8IAOAAIAAA8gAgGgbQgCgCAAgEQAAgEACgCQADgDADAAQAEAAACADQAEACAAAEQAAAEgEACQgCADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(65.35,53.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_5.setTransform(62.425,54.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAuIAAhZIAQAAIAAAJQADgFAFgDQAFgCAGAAQAIAAAGADQAGAFAEAHQAEAGAAAKQAAAJgEAGQgEAIgGADQgGAFgIAAQgGAAgFgDQgFgDgDgEIAAAmgAgHgcQgEACgCADQgCAEAAAGQAAAFACAEQACAEAEACQAEACADAAQAEAAAEgCQADgCADgEQACgEAAgFQAAgGgCgEQgDgEgDgCQgEgCgEAAQgDAAgEADg");
	this.shape_6.setTransform(57.475,56.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAfIAAggQAAgIgEgEQgDgDgGAAQgHAAgDADQgEAEAAAIIAAAgIgOAAIAAggQAAgIgEgEQgEgDgGAAQgGAAgEADQgEAEAAAIIAAAgIgPAAIAAg8IAPAAIAAAHQADgDAFgCQAFgDAFAAQAHAAAGADQAFADADAGQADgFAFgDQAGgEAHAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_7.setTransform(48.425,55.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgGAAgKQAAgJAEgGQAEgHAHgFQAHgDAIAAQAJAAAHADQAHAFAEAHQAEAGAAAJQAAAKgEAGQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAJAEAFQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_8.setTransform(39.325,55.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAiQgJgFgGgJQgEgIAAgMQAAgKAEgJQAGgJAJgFQAJgFAJAAQANAAAKAHQAKAGADAMIgSAAQgCgGgFgCQgEgDgHAAQgFAAgGADQgFADgDAGQgDAGAAAGQAAAIADAGQADAFAFAEQAGADAFAAQAHAAAEgDQAFgDACgFIASAAQgDALgKAHQgJAGgOAAQgJAAgJgFg");
	this.shape_9.setTransform(31.55,54.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAtIANgfIgZg6IASAAIAOAqIAQgqIARAAIglBZg");
	this.shape_10.setTransform(22.175,56.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_11.setTransform(16.625,54.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAbQgHgDgEgIQgEgGAAgKQAAgJAEgGQAEgHAHgFQAGgDAIAAQAJAAAHADQAHAEAEAHQADAHAAAIIAAAGIgsAAQABAGAEAEQAEADAFAAQAJAAADgGIARAAQgDAIgHAGQgIAFgLABQgHAAgHgFgAAPgEQgBgHgEgDQgEgEgGAAQgFAAgEAEQgEADAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(11.075,55.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgGAAIAAgMIAGAAIAAgDQAAgLAGgGQAGgFANAAIAAANQgFAAgDACQgCACAAAFIAAADIALAAIAAAMIgLAAIAAAwg");
	this.shape_13.setTransform(6.05,54.0229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgJAEgGQAEgHAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAEAAAFQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_14.setTransform(0.575,55.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgDgFQgEgGAAgHIAQAAQABAFADADQADACAFAAQAEAAAEgCQADgDAAgEQAAgDgCgCIgGgEIgHgDIgMgEQgFgBgEgEQgCgFAAgHQAAgHACgFQAEgFAGgDQAHgDAHAAQAMAAAHAHQAHAFABALIgRAAQAAgEgEgDQgDgCgDAAQgFAAgDACQgDACAAAFQABADACABIAEAEIAIADIAMAEQAFACADAEQAEAEAAAHQAAAHgEAFQgDAFgGADQgGADgIABQgIAAgGgDg");
	this.shape_15.setTransform(-5.65,54.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgDgDgGQgEgFAAgGQAAgIAEgHQAFgEAIgEIgEgHQgCgDAAgEQAAgGADgEQADgEAFgCQAFgDAHAAQAGAAAFADQAFADACAEQADAEgBAGIgOAAQAAgEgBgCQgCgCgDAAQgEAAgCACQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAABQAAADACACIAFAGIATATIAAgBIAAAAIAHgJIAQAAIgIAMIgFAIIATASIgTAAIgIgIQgLAKgPAAQgIAAgGgDgAgZAQQAAAEAEAEQAEADAGAAQAJAAAGgHIgSgSQgLAEAAAKg");
	this.shape_16.setTransform(110.975,41.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(100.875,41.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgGQgDgIAAgJQAAgIAEgIQAEgGAHgEQAHgEAIgBQAJABAHAEQAHAEAEAGQAEAIAAAIQAAAJgEAIQgEAGgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAGAAAHQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgHgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_18.setTransform(93.775,42.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgGQgDgIAAgJQAAgIAEgIQAEgGAHgEQAHgEAIgBQAJABAHAEQAHAEAEAGQAEAIAAAIQAAAJgEAIQgEAGgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAGAAAHQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgHgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_19.setTransform(86.425,42.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAmIAAhLIAvAAIAAAMIgfAAIAAAUIAXAAIAAALIgXAAIAAAgg");
	this.shape_20.setTransform(80.575,41.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(71.825,41.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAghQAAgHgEgEQgEgEgGAAQgFAAgEAEQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAIQADgEAEgDQAFgCAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_22.setTransform(64.85,42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgGQgEgIAAgJQAAgIAEgIQAEgGAGgEQAGgEAIgBQAGABAFADQAFACADAEIAAgIIAQAAIAAA7IgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCADAAAFQAAAGACAEQADADADADQAEACADAAQAEAAAEgCQAEgDACgDQACgEAAgGQAAgFgCgDQgCgEgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_23.setTransform(57.625,42.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAmIgFgOIgeAAIgEAOIgRAAIAchLIARAAIAbBLgAALALIgLgeIgKAeIAVAAg");
	this.shape_24.setTransform(48.3,41.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAmIAAggIgfAAIAAAgIgQAAIAAhLIAQAAIAAAfIAfAAIAAgfIAQAAIAABLg");
	this.shape_25.setTransform(40.4,41.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAkQgGgCgEgGQgEgFAAgGIAQAAQABAEADADQADACAFABQAEgBAEgCQADgDAAgDQAAgEgCgDIgGgDIgHgCIgMgFQgFgBgDgFQgDgEAAgHQAAgHADgFQADgFAHgDQAFgCAIAAQALAAAIAFQAHAGABAKIgRAAQAAgDgEgDQgCgCgFgBQgEAAgDACQgDADAAAEQAAAEADACIAEADIAIACIAMAFQAFACADAEQAEAEAAAIQAAAFgEAFQgDAGgGADQgGADgIAAQgIAAgGgDg");
	this.shape_26.setTransform(32.5,41.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgIQAFgJAJgGQAJgEAKAAQALAAAJAEQAJAGAFAJQAFAIAAALQAAALgFAJQgFAJgJAFQgJAGgLgBQgKABgJgGgAgLgVQgGACgDAHQgDAFAAAHQAAAHADAHQADAFAGAEQAFADAGAAQAHAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgFQgDgHgFgCQgFgEgHAAQgGAAgFAEg");
	this.shape_27.setTransform(24.925,41.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAjQgFgEAAgJQAAgJAFgFQAFgEAHAAQAIAAAFAEQAFAFgBAJQABAJgFAEQgFAFgIAAQgIAAgEgFgAASAWQAAAJAGgBQAGABAAgJQAAgJgGABQgGgBAAAJgAgcAmIAqhLIAPAAIgqBLgAgjgIQgGgFAAgIQAAgJAGgEQAEgFAIAAQAIAAAEAFQAGAEgBAJQABAIgGAFQgEAFgIAAQgIAAgEgFgAgdgVQAAAJAGAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAABgBQABgCAAgEQAAgJgGABQgGgBAAAJg");
	this.shape_28.setTransform(12.35,41.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAeQgHgLABgTQgBgSAHgLQAHgLAPAAQAQAAAHALQAGALAAASQAAATgGALQgHALgQAAQgPAAgHgLgAgIgWQgDADgCAGIgBANIABAOQACAFADAEQADADAFAAQAGAAAEgDQACgEABgFIABgOIgBgNQgBgGgCgDQgEgEgGAAQgFAAgDAEg");
	this.shape_29.setTransform(5.25,41.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAeQgHgLAAgTQAAgSAHgLQAHgLAPAAQAQAAAHALQAGALABASQgBATgGALQgHALgQAAQgPAAgHgLgAgIgWQgEADgBAGIgBANIABAOQABAFAEAEQADADAFAAQAGAAAEgDQACgEABgFIABgOIgBgNQgBgGgCgDQgEgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(-1.6,41.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAoIAAhBIgKAAIAAgOIAZAAIAABPg");
	this.shape_31.setTransform(-7.275,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(-11,-4,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(-11,-4,127,66.9), null);


(lib.Newtext = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgGAFgFQAGgGAHAAQAJAAAFAGQAFAFAAAGQAAAIgFAFQgFAFgJAAQgHAAgGgFg");
	this.shape.setTransform(163.425,-84.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBOIAYg2IgrhlIAkAAIAYBCIAYhCIAjAAIhBCbg");
	this.shape_1.setTransform(157.95,-85.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQAKgGAOAAQAKAAAIAEQAIAEAFAIIAAgPIAhAAIAABpIghAAIAAgPQgFAHgIAFQgJAEgJAAQgOAAgKgGgAgPgSQgHAGAAAMQAAAMAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgHAHg");
	this.shape_2.setTransform(145.55,-88.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBBQgLgIgGgMQgGgNAAgPQAAgRAGgMQAGgMALgHQALgGANAAQAJAAAIAEQAKAEAEAIIAAgxIAhAAIAACLIghAAIAAgOQgFAHgIAEQgIAFgKAAQgNAAgLgGgAgQgCQgGAGAAANQAAALAGAIQAIAGAIAAQAKAAAHgGQAGgIAAgLQAAgMgGgHQgHgGgKAAQgIgBgIAHg");
	this.shape_3.setTransform(133.25,-89.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAwQgNgHgHgMQgHgMAAgRQAAgQAHgMQAIgMAMgHQAMgGAPAAQAQAAAMAGQAMAHAIAMQAHAMAAAQQAAARgIAMQgGAMgOAHQgMAGgPAAQgPAAgMgGgAgPgSQgGAGAAAMQAAAMAGAHQAGAIAJAAQAJAAAHgIQAGgHAAgMQAAgMgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_4.setTransform(121.1,-88.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBCQgRAAgJgJQgKgJAAgTIAAgpIgOAAIAAgbIAOAAIAAgaIAfAAIAAAaIAVAAIAAAbIgVAAIAAAqQAAAFACACQACACAGAAIAMAAIAAAbg");
	this.shape_5.setTransform(111.55,-89.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA1IAAg4QAAgKgFgHQgGgFgJAAQgIAAgGAFQgFAHAAAKIAAA4IghAAIAAhoIAhAAIAAANQAEgGAJgFQAHgDALAAQASAAALAMQAMAMAAAVIAAA8g");
	this.shape_6.setTransform(98.475,-88.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAwQgNgHgHgMQgHgMAAgRQAAgQAHgMQAIgMAMgHQAMgGAPAAQAQAAAMAGQAMAHAIAMQAHAMAAAQQAAARgIAMQgGAMgOAHQgMAGgPAAQgPAAgMgGgAgPgSQgGAGAAAMQAAAMAGAHQAGAIAJAAQAJAAAHgIQAGgHAAgMQAAgMgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_7.setTransform(87,-88.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBMIAAhpIAfAAIAABpgAgNgtQgFgFgBgIQABgHAFgFQAGgFAHAAQAIAAAGAFQAGAFgBAHQABAIgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_8.setTransform(78.55,-90.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBCQgRAAgJgJQgKgJAAgTIAAgpIgOAAIAAgbIAOAAIAAgaIAfAAIAAAaIAVAAIAAAbIgVAAIAAAqQAAAFACACQACACAGAAIAMAAIAAAbg");
	this.shape_9.setTransform(72.75,-89.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQAKgGAOAAQAKAAAIAEQAJAEAEAIIAAgPIAhAAIAABpIghAAIAAgPQgEAHgJAFQgIAEgKAAQgOAAgKgGgAgPgSQgHAGAAAMQAAAMAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgHAHg");
	this.shape_10.setTransform(62.85,-88.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBCQgRAAgKgJQgJgJgBgTIAAgpIgMAAIAAgbIAMAAIAAgaIAgAAIAAAaIAVAAIAAAbIgVAAIAAAqQAAAFACACQACACAGAAIALAAIAAAbg");
	this.shape_11.setTransform(53.2,-89.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAwQgKgFgFgLQgFgKAAgNIAAg9IAgAAIAAA4QAAAKAGAHQAFAFAJABQAJgBAGgFQAFgHAAgKIAAg4IAhAAIAABoIghAAIAAgOQgFAHgIAEQgIAEgKABQgMAAgJgGg");
	this.shape_12.setTransform(43.775,-88.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag3BPIAAibIAhAAIAAAOQAEgHAJgFQAIgEAKAAQANAAALAGQALAHAGAMQAGANAAARQAAAPgGAMQgGAMgLAIQgLAGgNAAQgKAAgIgFQgJgEgEgHIAABBgAgQgrQgHAIAAAMQAAALAHAIQAHAFAJAAQAJAAAHgFQAHgIAAgLQAAgNgHgHQgHgHgJABQgJAAgHAGg");
	this.shape_13.setTransform(31.875,-85.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgIgMQgGgMAAgRQAAgQAGgMQAIgMAMgHQALgGAQAAQAPAAAMAGQALAHAIAMQAGAMAAAQIgBAIIhIAAQABAKAGAFQAFAFAIAAQALAAAFgKIAjAAQgDALgHAHQgHAJgKAFQgKAEgNAAQgPAAgMgGgAAUgJQAAgJgGgFQgGgEgIAAQgHAAgGAEQgGAFgBAJIAoAAIAAAAg");
	this.shape_14.setTransform(19.9,-88.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggA1IAAhoIAgAAIAAARQAFgJAJgFQAIgEALAAIAAAiIgJAAQgMAAgGAFQgGAFAAAMIAAAxg");
	this.shape_15.setTransform(10.475,-88.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA2IAAhpIAgAAIAAARQAFgIAJgGQAIgEALAAIAAAiIgJAAQgMAAgGAFQgGAFAAAMIAAAyg");
	this.shape_16.setTransform(146.825,-113.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggAwQgKgFgFgLQgFgJAAgOIAAg9IAgAAIAAA4QAAALAGAFQAFAHAJAAQAJAAAGgHQAFgFAAgLIAAg4IAhAAIAABpIghAAIAAgPQgFAHgIAEQgIAFgKAAQgMgBgJgFg");
	this.shape_17.setTransform(136.925,-113.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAwQgNgHgHgMQgHgNAAgQQAAgQAHgMQAIgMAMgHQAMgGAPgBQAQABAMAGQAMAHAIAMQAHAMAAAQQAAAQgIANQgGAMgNAHQgNAHgPgBQgPABgMgHgAgPgTQgGAHAAAMQAAANAGAGQAGAIAJgBQAJABAHgIQAGgGAAgNQAAgMgGgHQgHgGgJgBQgIABgHAGg");
	this.shape_18.setTransform(125.05,-113.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoBOIAYg2IgrhlIAkAAIAXBCIAZhCIAjAAIhCCbg");
	this.shape_19.setTransform(114,-110.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBAQgLgGgGgNQgGgMAAgQQAAgRAGgLQAGgNALgHQAKgGANAAQAKAAAIAEQAKAFAEAHIAAgxIAhAAIAACMIghAAIAAgQQgEAIgJAEQgIAFgLAAQgNAAgKgHgAgQgCQgGAGAAANQAAALAGAIQAIAGAIABQAKgBAGgGQAHgIAAgLQAAgNgHgFQgGgIgKABQgIAAgIAGg");
	this.shape_20.setTransform(98.35,-114.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggA2IAAhpIAgAAIAAARQAFgIAJgGQAIgEALAAIAAAiIgJAAQgMAAgGAFQgGAFAAAMIAAAyg");
	this.shape_21.setTransform(88.625,-113.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQAKgGAOgBQAKABAIAEQAIAFAFAHIAAgPIAhAAIAABpIghAAIAAgPQgFAIgIAEQgJAFgJgBQgOABgKgHgAgPgTQgHAIAAALQAAAMAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgHAGg");
	this.shape_22.setTransform(78.5,-113.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAwQgKgFgFgLQgFgJAAgOIAAg9IAgAAIAAA4QAAALAGAFQAFAHAJAAQAJAAAGgHQAFgFAAgLIAAg4IAhAAIAABpIghAAIAAgPQgFAHgIAEQgIAFgKAAQgMgBgJgFg");
	this.shape_23.setTransform(66.425,-113.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgjBFQgOgLgCgTIAgAAQACAGAFADQAGAEAHAAQAKAAAGgGQAGgGAAgMIAAgPQgFAHgIAFQgIAEgLAAQgMAAgLgGQgLgHgGgNQgGgLAAgQQAAgRAGgMQAGgNALgGQALgHAMAAQALAAAIAFQAIAEAFAIIAAgPIAhAAIAABpQAAAOgGAMQgGAMgLAHQgMAHgTAAQgWAAgPgLgAgQgsQgGAHAAANQAAAMAGAHQAIAGAIAAQAKAAAHgGQAGgHAAgMQAAgMgGgHQgHgHgKAAQgIAAgIAGg");
	this.shape_24.setTransform(54.15,-110.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAwQgLgHgIgMQgGgNAAgQQAAgQAGgMQAIgMALgHQAMgGAQgBQAPABAMAGQALAHAIALQAGANAAAPIgBAJIhIAAQABAJAGAGQAFAFAIAAQALAAAFgKIAjAAQgDALgHAHQgHAJgKAFQgKAFgNgBQgPABgNgHgAAUgKQAAgHgGgFQgFgGgJAAQgHAAgGAGQgGAEgBAIIAoAAIAAAAg");
	this.shape_25.setTransform(42.3,-113.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSBLIAAhOIgMAAIAAgbIAMAAIAAgDQAAgUALgLQALgKAVAAIAFAAIAAAcQgJAAgDADQgEADAAAJIAAABIARAAIAAAbIgRAAIAABOg");
	this.shape_26.setTransform(33.35,-115.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQALgGAMgBQALABAIAEQAIAFAFAHIAAgPIAhAAIAABpIghAAIAAgPQgFAIgIAEQgJAFgKgBQgMABgLgHgAgQgTQgGAIAAALQAAAMAGAHQAIAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgIAGg");
	this.shape_27.setTransform(23.55,-113.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXBAQgMgFgHgKQgHgJAAgNIAiAAQABAIAEADQAFAEAGAAQAHAAAEgDQAEgEAAgFQAAgFgDgEQgDgCgFgCIgNgGQgNgEgIgEQgIgDgGgHQgGgIAAgMQAAgTAOgLQANgLAWAAQAVAAANALQAOALABATIgjAAQgBgHgEgEQgFgEgFAAQgGABgEADQgDADAAAGQAAAGAGAEQAGAEAMAEQANAEAIAEQAIADAGAIQAFAHAAANQAAALgFAJQgGAJgLAGQgLAGgPgBQgOAAgLgEg");
	this.shape_28.setTransform(11.825,-114.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFyIAArj");
	this.shape_29.setTransform(207.5,-100.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(4,-138.9,204.5,76), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(0,0,658,90), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(0,0,658,90), null);


(lib.text2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#170648").s().p("AofSpIhPgRIAAkFIBsAaIA7AFQBPAAAlgZIA/hBIA5iDIBIisIp17WIFEAAIHGVmIHL1mIE8AAIkMLqIkFLJQj3KKhlCQQhlCOj4AAg");
	this.shape.setTransform(1742.775,159.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_1.setTransform(1616.475,122.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AonKcQjbjnAAmgQAAmYDdj/QDckAFkAAQCzAACqBWQCoBUBZCHQBUCAAdCrQAZB2AAEAIzTAAQAIEDBxCcQByCeDtAAQDeAACEiUQBLhXAehwIEZAAQgMBdg9B0QhAByhOBJQiAB/i/AsQhnAah/AAQk8AAjbjngAHeiSQgSi6g/huQh0jPkPAAQjDAAiFCPQiECNgHDbIOnAAIAAAAg");
	this.shape_2.setTransform(1461.075,125.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AieNSIpy6jIFLAAIHFVnIHZ1nIE4AAIqBajg");
	this.shape_3.setTransform(1290.65,124.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AqML0QiXiQAAjYQAAjrCUiCQCUiBDvgeIHHg6QBigMAhhGQATgmAAhIQAAiThnhBQhphDi/AAQjfAAheB5Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7ByQC6ByAADyIAAPSQAAAsATAbQASAbA6AAIArgBIAzgIIAADTIhmAXIhfAGQiTgBhDhoQgjg4gOhlQhYByijBUQiiBUjFAAQjtAAiViPgADDAiIiiAgIirAWQibAVhOAsQiFBLAAChQAAB9BaBHQBbBHB7AAQCXABCMhHQDuhzAAkIIAAjjQg0AghSAWg");
	this.shape_4.setTransform(1122.875,125.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("ArmSNMAAAgkaIE8AAMAAAAgFISRAAIAAEVg");
	this.shape_5.setTransform(947.825,92.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_6.setTransform(713.425,122.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("AiQSNIAA6aIEhAAIAAaagAiQtJIAAlEIEhAAIAAFEg");
	this.shape_7.setTransform(613.625,92.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("AqML0QiXiQAAjYQAAjrCUiCQCUiBDvgeIHHg6QBigMAhhGQATgmAAhIQAAiThnhBQhphDi/AAQjfAAheB5Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7ByQC6ByAADyIAAPSQAAAsATAbQASAbA6AAIArgBIAzgIIAADTIhmAXIhfAGQiTgBhDhoQgjg4gOhlQhYByijBUQiiBUjFAAQjtAAiViPgADDAiIiiAgIirAWQibAVhOAsQiFBLAAChQAAB9BaBHQBbBHB7AAQCXABCMhHQDuhzAAkIIAAjjQg0AghSAWg");
	this.shape_8.setTransform(490.825,125.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("Ak8RPQhQg3hah7IAADZIkIAAMAAAgkiIEWAAIAANOQBeh6CDg/QCDhCCXAAQE/ABDGDbQDHDZAAGoQAAGTjEELQjEELlcgBQjAAAiHhdgAlUjIQiUCQAAFLQAADvA9CWQBwEYE2AAQDoAAByi4QB0i4AAktQAAkMh0iwQhyiwjhAAQjDAAiTCRg");
	this.shape_9.setTransform(310.375,95.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AK2SNIjsq5IuZAAIj8K5IlEAAMANtgkaIFkAAMANOAkagAFkDSIliwEIl3QEILZAAg");
	this.shape_10.setTransform(108.775,92.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-2,-42.8,1828.3,329), null);


(lib.text1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#170648").s().p("AgjGAQgcgoABg+IAAmwIhZAAIAAhaIBZAAIAAi2IBtAAIAAC2IBpAAIAABaIhpAAIAAGpQAAAjAYALQAMAHAeAAIARgBIAWgCIAABYIgnAIIgtACQhLAAgcgng");
	this.shape.setTransform(982.2,39.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("ACbFOIAAmbQAAg8gSgkQgeg9hMAAQgmAAgZAIQgtANgjAoQgbAhgIAjQgJAiAABAIAAFVIhuAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA+AAQCMAAAwBhQAbA1AABjIAAGig");
	this.shape_1.setTransform(930.8,47.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AjUEBQhThZAAigQgBicBVhiQBVhjCJAAQBEAABCAhQBBAhAiA0QAgAxALBCQAKAtAABiInbAAQADBjAsA9QArA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgwAAQh6AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_2.setTransform(860.6,48.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_3.setTransform(774.525,47.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AjUEBQhThZAAigQAAicBUhiQBVhjCIAAQBFAABCAhQBAAhAjA0QAgAxALBCQAKAtAABiInbAAQADBjArA9QAsA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgxAAQh5AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_4.setTransform(687,48.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("Ai4GoQhIgwgIhkIBvAAQAIArAYAYQAlAlBQAAQB8AAAnhZQAXg1gCiHQghAyguAZQguAYhLAAQhqABhPhMQhQhMAAitQAAijBQhcQBQhdBxAAQBMAAA5AmQAfAWAgApIAAhTIBmAAIAAJSQAAB8glBIQhECFi8AAQhpAAhIgvgAiVkIQgXA6AABeQAABvAtA4QAtA5BLAAQB1AAAwhqQAag7AAhRQAAh5gyg7Qgxg7hOAAQhyAAgqBtg");
	this.shape_5.setTransform(615.775,61.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_6.setTransform(549.925,48.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("ACaFOIAAmbQAAg8gRgkQgeg9hMAAQgmAAgaAIQgsANgjAoQgbAhgIAjQgJAiABBAIAAFVIhvAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA/AAQCKAAAyBhQAbA1AABjIAAGig");
	this.shape_7.setTransform(479.2,47.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_8.setTransform(410.925,48.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_9.setTransform(322.925,47.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AgjGAQgcgoABg+IAAmwIhZAAIAAhaIBZAAIAAi2IBtAAIAAC2IBpAAIAABaIhpAAIAAGpQAAAjAYALQAMAHAeAAIARgBIAWgCIAABYIgnAIIgtACQhLAAgcgng");
	this.shape_10.setTransform(218.1,39.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#170648").s().p("AjPEaQg9hDgEhhIBqAAQAEA3AYAdQApA2BoAAQA/AAAvgbQAvgbABg4QAAgqgngWQgYgNhGgRIhZgXQhVgUgogZQhIgtAAhOQAAhdBEg5QBDg6BzAAQCVAABCBXQApA3gBA/IhnAAQgEglgXgeQgngrhfAAQhAAAggAYQghAXAAAnQAAAqArAaQAYAQAxALIBJASQB5AcApAaQBAAqAABbQAABXhDBAQhDA/iJAAQiSAAg/hCg");
	this.shape_11.setTransform(170.35,48.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#170648").s().p("AjTEBQhUhZAAigQAAicBUhiQBVhjCJAAQBFAABBAhQBAAhAjA0QAgAxALBCQAKAtgBBiInaAAQADBjAsA9QAsA8BaAAQBWAAAyg4QAdgiALgrIBsAAQgEAkgYAsQgYAsgeAcQgyAxhIARQgpAKgvAAQh6AAhUhZgAC4g3QgHhIgZgqQgshQhoAAQhLAAgyA3Qg0A2gCBVIFnAAIAAAAg");
	this.shape_12.setTransform(103.5,48.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#170648").s().p("AkgHRIAAuOIBsAAIAABXQAhgtAngZQA4gkBKAAQBvAABOBWQBOBUAACfQAADUhxBcQhHA5heABQhJgBgzggQgdgSgkgtIAAFOgAigj9QgWA8AABfQAABLAWA0QArBmBygBQBMAAAzhAQA0hAAAh/QAAhPgXg3QgrhshxAAQhzgBgqBzg");
	this.shape_13.setTransform(36.025,60.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-2,-17.6,1004.5,129), null);


(lib.F2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#14A751").s().p("AguBAQgLgNAAgYQAAgbAQgOQAOgOAYAAQAKAAAIAEIAAgdQAAgKgGgBIgHgBIAAgHIAogFIABABIAACFQAAAHADACQACACAKAAIAAAIIgrAAIAAgLQgQANgPAAQgTAAgLgOgAgTgIQgHAKAAAVQAAATAGALQAGAKALAAQALAAAEgIQADgEAAgHIAAgqQAAgIgCgDQgEgKgLAAQgLAAgGALg");
	this.shape.setTransform(87.725,26.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAHA0IAAgHIAJgCQADgCAAgGIAAgzQAAgUgRAAQgMAAgGALQgCAEAAAIIAAAwQAAAGADACIAJACIAAAHIg3AAIAAgHQAKgBACgBQACgCAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIADAOIASgKQAIgEAJAAQAfAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_1.setTransform(75.525,28.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgGgBIgHgBIAAgHIApgEIABABIAABCQAAAXASAAQAMAAAFgLQABgEAAgIIAAgsQAAgKgFgBIgHgBIAAgHIAngEIACABIAABTQAAAHADACQACABAJABIAAAHIgpAAIgCgLIgOAIQgKAGgLAAQgeAAAAgfg");
	this.shape_2.setTransform(62.6,28.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("Ag0AAQAAg1A0AAQA1AAAAA1QAAA1g1AAQg0AAAAg1gAgVAAQAAAtAVgBQAWAAAAgsQAAgrgWgBQgVAAAAAsg");
	this.shape_3.setTransform(49.975,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAzBIQgOAAgIgEQgIgFgEgLIgFgfQgCgJgGgEQgEgDgKAAIgJAAIAAAvQAAAIACACQADACAMAAIAAAIIhBAAIAAgIQALAAADgCQADgCAAgIIAAhnQAAgIgDgCQgDgCgLAAIAAgIIBFAAQAXAAALAHQANAJABAUQAAAOgKAKQgJAIgQADIAAAAQAbAGAGAeQACAOADAGQAGAHAKABIAAAIgAgSg9QgBACAAAFIAAAzIAKAAQAPgBAGgHQAFgIAAgOQAAgdgZAAQgIAAgCABg");
	this.shape_4.setTransform(36.8,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgaAIIAAgPIA1AAIAAAPg");
	this.shape_5.setTransform(26.025,28.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASQAKgKAGgEQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_6.setTransform(19.275,28.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAJAqIgMAIQgIADgJAAQgPAAgIgJQgIgIAAgMQAAgTAVgHQAhgKAFgFIAAgJQAAgRgNAAQgMAAgGAVQgDAHgGAAQgFAAgFgDQgGgEAAgFQAAgKAMgIQANgHAUgBQAnAAAAAeIAAAvQAAAOAGACQADABAHAAIAAAHQgMAFgPAAQgMAAgEgLgAgKACQgMAGAAANQAAAHAFAFQAFAFAGABQAOAAAAgQIAAgdg");
	this.shape_7.setTransform(8.85,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAYAAQAbAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgTIAHADQgLAeghAAIgBAAQgwAAAAg1gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQAAQgJAAgFAMg");
	this.shape_8.setTransform(-2.975,28.7002);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgjBIIAAgIQAOAAAEgCQADgCAAgIIAAggQAAgGgFgIIggg6QgEgHgDgCQgDgCgIAAIAAgIIBBAAIAAAIIgMABQgFAAACAHQAMAYARAfIABAAQAPgdAKgZQADgIgGAAIgLgBIAAgIIAwAAIAAAIQgJABgEABQgDADgEAGQgKARgUAoQgEAHAAAGIAAAiQAAAIADACQADACAPAAIAAAIg");
	this.shape_9.setTransform(-13.475,26.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgvAAQAAgWAMgPQANgQAYAAQAbAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAFQgLAdghAAIgBABQgwgBAAg1gAgMggQgEAJAAANIAcAAQAGAAAAgHQAAgbgQAAQgJAAgFAMg");
	this.shape_10.setTransform(158.075,9.8502);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAnA0IAAgHIAKgCQACgCAAgGIAAgyQAAgVgRAAQgPAAgEAPIAAAKIAAAuQAAAGACACIAJACIAAAHIgzAAIAAgHIAJgCQADgCAAgGIAAgyQAAgVgQAAQgQAAgEAPIgBAKIAAAuQAAAGADACIAJACIAAAHIg3AAIAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIADAOQAMgIAEgBQAKgFAJAAQASAAAJAQIAPgKQALgGAKAAQAgAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_11.setTransform(143.925,9.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("Ag0AAQAAg1A0AAQA1AAAAA1QAAA1g1ABQg0gBAAg1gAgVABQAAArAVABQAWAAAAgtQAAgrgWAAQgVAAAAAsg");
	this.shape_12.setTransform(127.925,9.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AALBIIAAgIQAMAAADgCQACgCAAgJIAAgzIg3AAIAAAzQgBAJADACQADACAMAAIAAAIIhCAAIAAgIQAMAAACgCQADgCAAgJIAAhmQAAgIgDgCQgCgCgMgBIAAgHIBCAAIAAAHQgMABgDACQgDACABAIIAAArIA3AAIAAgrQAAgIgCgCQgDgCgMgBIAAgHIBCAAIAAAHQgMABgCACQgDACAAAIIAABmQAAAJADACQACACAMAAIAAAIg");
	this.shape_13.setTransform(114.25,7.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASQAKgKAGgEQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_14.setTransform(97.075,9.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgGgBIgHgBIAAgHIAogEIABABIAABCQAAAXATAAQAMAAAEgLQACgEAAgIIAAgsQAAgKgFgBIgHgBIAAgHIAngEIACABIAABTQAAAHADACQACABAJABIAAAHIgpAAIgCgLIgOAIQgKAGgLAAQgeAAAAgfg");
	this.shape_15.setTransform(86.65,9.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("Ag0AAQAAg1A0AAQA1AAAAA1QAAA1g1ABQg0gBAAg1gAgVABQAAArAVABQAWAAAAgtQAAgrgWAAQgVAAAAAsg");
	this.shape_16.setTransform(73.975,9.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AgjBIIAAgIQAOAAAEgCQADgCAAgIIAAggQAAgGgFgIIggg6QgEgHgDgCQgDgCgIgBIAAgHIBBAAIAAAHIgMACQgFAAACAGQAMAYARAhIABAAQAPgeAKgaQADgGgGgBIgLgCIAAgHIAwAAIAAAHQgJACgEACQgDABgEAIQgKAPgUAoQgEAIAAAHIAAAhQAAAIADACQADACAPAAIAAAIg");
	this.shape_17.setTransform(61.825,7.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgLA8QgJgHAAgOIAAhDIgMAAIAAgKIANAAIARgaIAKAAIAAAaIAXAAIAAAKIgXAAIAAA7QAAAUANAAQAGAAAEgCIACAGQgQAKgNAAQgIAAgHgFg");
	this.shape_18.setTransform(47.15,8.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AggAoQgNgNAAgaQAAgYANgOQANgPAZgBQAPAAAMAHQAMAGAAAKQAAAGgGAEQgFADgGAAQgHAAgCgIQgGgSgJAAQgHgBgGAKQgGAMAAATQAAAVAIAKQAHALALAAQATAAAJgUIAHADQgIAggkAAQgWgBgMgNg");
	this.shape_19.setTransform(37.775,9.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgvAAQAAgWAMgPQANgQAYAAQAbAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAFQgLAdghAAIgBABQgwgBAAg1gAgMggQgEAJAAANIAcAAQAGAAAAgHQAAgbgQAAQgJAAgFAMg");
	this.shape_20.setTransform(25.675,9.8502);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgMA8QgIgHAAgOIAAhDIgMAAIAAgKIANAAIARgaIAKAAIAAAaIAWAAIAAAKIgWAAIAAA7QAAAUANAAQAFAAAFgCIACAGQgQAKgNAAQgIAAgIgFg");
	this.shape_21.setTransform(17.75,8.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("Ag0AAQAAg1A0AAQA1AAAAA1QAAA1g1ABQg0gBAAg1gAgVABQAAArAVABQAWAAAAgtQAAgrgWAAQgVAAAAAsg");
	this.shape_22.setTransform(7.775,9.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASQAKgKAGgEQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_23.setTransform(-1.925,9.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("Ag7BIIAAgIQAMAAACgCQADgCAAgIIAAhnQAAgIgDgCQgCgCgMgBIAAgHIBBAAQAaAAAMAHQAQAKAAAYQAAAagUAKQgNAJgYAAQgJAAgFgCIAAAnQAAAIADACQADACANABIAAAHgAgJg8QgCABAAAEIAAA0QAAAJAOAAQAZAAAAgjQAAgQgIgJQgHgIgNAAQgHAAgCACg");
	this.shape_24.setTransform(-13.425,7.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_25.setTransform(111.075,69.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAsQgLgGgHgLQgGgMAAgPQAAgOAGgLQAHgMALgGQALgGANAAQAOAAALAGQALAFAHAMQAGALAAAPIgBAHIhCAAQAAAJAGAFQAFAEAHABQAKAAAFgKIAgAAQgDAKgGAIQgHAHgJAFQgKAEgMAAQgNAAgLgGgAASgIQAAgIgFgEQgFgGgIABQgHAAgFAEQgFAEgBAJIAkAAIAAAAg");
	this.shape_26.setTransform(103.925,66.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_27.setTransform(96.875,64.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJA9QgHgEgFgHIAAAOIgdAAIAAiAIAdAAIAAAtQAFgHAHgEQAIgEAJAAQAMAAAKAGQAKAGAGAMQAFAKAAAPQAAAPgFALQgGAMgKAGQgKAGgMAAQgJAAgIgEgAgPgBQgGAFAAALQAAALAGAHQAHAGAIAAQAIAAAHgGQAGgHAAgLQAAgLgGgGQgHgGgIAAQgIAAgHAHg");
	this.shape_28.setTransform(89.225,64.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAsQgKgHgGgLQgFgMAAgOQAAgOAFgLQAGgMAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABgIgeAAIAAgNQgEAGgIAFQgHAEgKAAQgMAAgJgGgAgOgRQgGAHAAAKQAAALAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_29.setTransform(77.325,66.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_30.setTransform(69.575,64.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_31.setTransform(64.825,63.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAsQgKgHgGgLQgFgMAAgOQAAgOAFgLQAGgMAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABgIgeAAIAAgNQgEAGgIAFQgHAEgKAAQgMAAgJgGgAgOgRQgGAHAAAKQAAALAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_32.setTransform(56.575,66.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAxIgihhIAgAAIAUBFIAVhFIAgAAIgjBhg");
	this.shape_33.setTransform(46.05,66.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAeA9IgIgVIgsAAIgIAVIgeAAIAsh5IAhAAIAsB5gAAPARIgPgsIgOAsIAdAAg");
	this.shape_34.setTransform(35.65,64.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAuQgKgFgGgHQgFgIgBgJIAdAAQABAEAEAEQAEADAFAAQAGAAADgCQADgDAAgDQAAgEgEgCIgOgEIgRgGQgHgCgFgGQgFgFAAgKQAAgIAFgHQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAAEQAAAEAEACIANAEIASAFQAHADAFAFQAFAGAAAKQAAAJgFAHQgFAGgJAEQgJAEgLAAQgMAAgKgEg");
	this.shape_35.setTransform(22.125,66.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_36.setTransform(11.975,66.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdAsQgKgHgGgLQgFgMAAgOQAAgOAFgLQAGgMAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABgIgeAAIAAgNQgEAGgIAFQgHAEgKAAQgMAAgJgGgAgOgRQgGAHAAAKQAAALAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_37.setTransform(0.625,66.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_38.setTransform(-7.125,64.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtA9IAAh5IAuAAQAPAAALAFQAJAFAGAJQAEAJAAALQAAALgEAJQgFAIgKAFQgLAFgPAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_39.setTransform(-14.45,64.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_40.setTransform(137.825,47.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLAAgPQAAgOAHgMQAGgLAMgGQALgGAOAAQAOAAAMAGQALAGAHALQAHAMAAAOQgBAPgGALQgHALgLAHQgMAGgOAAQgOAAgLgGgAgOgRQgFAGAAALQAAAMAFAGQAGAGAIAAQAIAAAGgGQAGgGAAgMQAAgLgFgGQgHgHgIAAQgIAAgGAHg");
	this.shape_41.setTransform(126.4,47.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_42.setTransform(118.475,45.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAEACADQACABAFAAIALAAIAAAag");
	this.shape_43.setTransform(111.875,46.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQASAAANAKQAMAJAEASIggAAQgEgMgMAAQgHABgFAFQgFAHAAALQAAAMAFAGQAFAGAHABQAMgBAEgKIAgAAQgEAQgNAKQgMAKgSAAQgNAAgLgGg");
	this.shape_44.setTransform(103.625,47.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQAOAAALAFQALAHAHAKQAGAMAAAPIgBAHIhCAAQAAAJAGAFQAFAEAHABQAKAAAFgKIAgAAQgDAKgGAIQgHAHgJAEQgKAFgMAAQgNAAgLgGgAASgJQAAgHgFgEQgFgGgIAAQgHABgFAEQgFAFgBAHIAkAAIAAAAg");
	this.shape_45.setTransform(93.175,47.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAEACADQACABAFAAIALAAIAAAag");
	this.shape_46.setTransform(84.525,46.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLABgPQgBgOAHgMQAGgLAMgGQAMgGANAAQAOAAALAGQAMAGAHALQAGAMABAOQAAAPgIALQgGALgMAHQgLAGgOAAQgNAAgMgGgAgNgRQgHAGABALQgBAMAHAGQAFAGAIAAQAIAAAGgGQAGgGAAgMQAAgLgFgGQgHgHgIAAQgIAAgFAHg");
	this.shape_47.setTransform(75.85,47.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgdAxIAAhgIAdAAIAAAQQAFgIAIgEQAHgFAKAAIAAAgIgIAAQgLAAgGAEQgFAFAAALIAAAtg");
	this.shape_48.setTransform(67.5,47.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgtA9IAAh5IAuAAQAPAAAKAFQAKAFAGAJQAEAJAAALQAAALgEAJQgFAIgLAFQgKAFgPAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_49.setTransform(58.65,46.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA0AxIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgdAAIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgeAAIAAhgIAeAAIAAAMQAEgGAIgDQAHgEAJAAQALAAAJAFQAIAEAEAJQAFgIAJgFQAJgFAKAAQASAAALALQALALAAATIAAA4g");
	this.shape_50.setTransform(39.175,47.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLABgPQgBgOAHgMQAGgLAMgGQAMgGANAAQAOAAAMAGQALAGAHALQAGAMABAOQAAAPgHALQgHALgLAHQgMAGgOAAQgNAAgMgGgAgNgRQgHAGABALQgBAMAHAGQAFAGAIAAQAIAAAGgGQAGgGAAgMQAAgLgFgGQgHgHgIAAQgIAAgFAHg");
	this.shape_51.setTransform(24.9,47.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAEACADQACABAFAAIALAAIAAAag");
	this.shape_52.setTransform(16.075,46.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAtQgKgEgGgHQgFgIgBgJIAdAAQABAEAEAEQAEADAFAAQAGAAADgCQADgDAAgDQAAgEgEgCIgOgFIgRgEQgHgEgFgEQgFgGAAgKQAAgJAFgGQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAAEQAAADAEADIANAEIASAGQAHACAFAFQAFAGAAAKQAAAJgFAGQgFAHgJAEQgJAEgLAAQgMAAgKgFg");
	this.shape_53.setTransform(8.325,47.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdAsQgJgFgFgJQgFgJABgNIAAg4IAdAAIAAA0QAAAKAFAFQAFAFAIAAQAIAAAGgFQAEgFAAgKIAAg0IAfAAIAABgIgfAAIAAgNQgEAGgHAEQgIAEgJAAQgLAAgIgFg");
	this.shape_54.setTransform(-1.65,47.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgdA2QgOgIgIgOQgIgOAAgSQAAgRAIgOQAIgPAOgIQAOgHARAAQAVAAAQALQAPALAGAUIghAAQgEgHgHgEQgGgEgJAAQgNAAgIAJQgJAKAAAPQAAAQAJAKQAIAJANAAQAJAAAGgEQAHgEAEgIIAhAAQgGAUgPAMQgQALgVAAQgRAAgOgIg");
	this.shape_55.setTransform(-13.625,46.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFrIAArV");
	this.shape_56.setTransform(181.75,36.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-21.4,-3.3,204.20000000000002,79.5), null);


(lib.F1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#14A751").s().p("AgmBJQgFgDAAgGQAAgFAEgFQAEgGAEAAQAEAAAFAFQAEADAEAAQAGAAAEgOQABgFgCgJIglhWQgDgGgDgCQgCgBgIgBIAAgIIA4AAIAAAIIgHABQgFABACAGIAXA8QAOglAFgXQACgGgFgBIgKgBIAAgIIApAAIAAAIQgHABgEACQgBACgEAIIgkBfQgGAVgJAJQgHAHgKAAQgHAAgFgEg");
	this.shape.setTransform(281.9,55.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgbBNIAAgHQAJgBACgCQADgBAAgIIAAhuQAAgKgGAAIgHgCIAAgHIAngFIABABIAACFQAAAIADABQACACAJABIAAAHg");
	this.shape_1.setTransform(272.925,50.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgbBKIAAgHQAJgBACgCQADgBAAgIIAAg8QAAgKgGAAIgHgBIAAgIIAngFIABABIAABTQAAAIADABQACACAJABIAAAHgAgMgtQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHABQgIgBgEgEg");
	this.shape_2.setTransform(266.425,50.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAnA0IAAgHIAKgCQACgCAAgGIAAgyQAAgVgRAAQgPAAgEAPIAAAKIAAAuQgBAGADACIAJACIAAAHIg0AAIAAgHIAJgCQAEgCAAgGIAAgyQAAgVgQAAQgQAAgEAPIgBAKIAAAuQAAAGADACIAJACIAAAHIg3AAIAAgHQAKgBABgCQADgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIADAOIAPgKQALgEAIAAQATAAAJAPIAPgJQALgGAKAAQAgAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_3.setTransform(253.6,52.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAJApIgMAIQgIAFgJAAQgPgBgIgIQgIgJAAgNQAAgSAVgHQAhgKAFgEIAAgKQAAgRgNAAQgMAAgGAUQgDAIgGAAQgFAAgFgDQgGgDAAgGQAAgLAMgGQANgJAUABQAngBAAAeIAAAuQAAAOAGACQADACAGgBIABAIQgMAFgPABQgMAAgEgNgAgLACQgKAFgBAOQABAIAEAEQAFAGAHAAQANAAAAgQIAAgdg");
	this.shape_4.setTransform(238.25,52.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag2BIIAAgIQAMAAADgCQACgCAAgIIAAhnQAAgIgCgCQgDgCgMgBIAAgHIBtAAIAAAmIgIAAQgFgSgFgFQgGgGgQAAIgOAAQgEAAgBACQgBABAAAEIAAAzIAXAAQAKAAADgEQAEgDACgMIAIAAIAAAvIgIAAQgCgLgEgEQgDgDgKAAIgXAAIAAAuQAAAIADACQACACAOAAIAAAIg");
	this.shape_5.setTransform(226.875,50.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASIAQgOQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_6.setTransform(211.925,52.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgFgBIgIgBIAAgHIApgEIABABIAABCQAAAXASAAQAMAAAFgLQACgEAAgIIAAgsQgBgKgFgBIgIgBIAAgHIApgEIABABIAABTQAAAHACACQACABAKABIAAAHIgpAAIgBgLIgPAIQgKAGgLAAQgeAAAAgfg");
	this.shape_7.setTransform(201.45,52.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag0AAQAAg1A0ABQA1gBAAA1QAAA2g1AAQg0AAAAg2gAgVABQAAAsAVAAQAWAAAAgtQAAgrgWAAQgVgBAAAtg");
	this.shape_8.setTransform(189.575,52.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgjBIIAAgIQAOAAAEgCQADgCAAgIIAAggQAAgGgFgIIggg6QgEgHgDgCQgDgCgIgBIAAgHIBBAAIAAAHIgMACQgFAAACAGQAMAZARAfIABAAQAPgdAKgaQADgGgGgCIgLgBIAAgHIAwAAIAAAHQgJABgEADQgDACgEAGQgKAQgUApQgEAGAAAHIAAAiQAAAIADACQADACAPAAIAAAIg");
	this.shape_9.setTransform(178.425,50.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgmBNIAAgHQAKgBACgCQACgCABgGIAAhIIgOAAIAAgLIAOAAIAAgFQgBgYAKgLQALgMARAAQANAAAGAFQAGAFAAAFQAAAGgFADQgEAEgEAAQgGAAgCgGQgHgNgEAAQgGAAABAMIACAfIATAAIAAALIgTAAIAABIQAAAHACABQACABAMACIAAAHg");
	this.shape_10.setTransform(294.85,28.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag0AAQAAg0A0gBQA1ABAAA0QAAA2g1gBQg0ABAAg2gAgVAAQAAAsAVAAQAWAAAAgsQAAgsgWAAQgVABAAArg");
	this.shape_11.setTransform(284.625,30.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAZAAQAaAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAEQgLAeghAAIgBABQgwAAAAg2gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQAAQgJAAgFAMg");
	this.shape_12.setTransform(265.675,30.7502);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASIAQgOQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_13.setTransform(256.675,30.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAJAqIgMAIQgIADgJAAQgPABgJgKQgHgIAAgMQAAgTAVgGQAhgLAFgFIAAgJQAAgRgMAAQgNAAgGAVQgDAHgFAAQgGAAgEgDQgHgEAAgFQAAgKAMgIQANgHAVgBQAmABAAAdIAAAvQAAANAGADQAEABAFAAIABAGQgMAHgPgBQgMABgEgMgAgLABQgLAHABAMQAAAJAEAFQAEAEAIAAQANAAAAgPIAAgeg");
	this.shape_14.setTransform(246.05,30.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("Ag/ACQAAgiATgVQAUgWAoAAQAdAAAQAKIAAAkIgIAAQgFgRgHgJQgJgKgSAAQgXAAgLAZQgIAQABAYQAAAYAHASQALAZAZAAQAQAAAKgMQAHgIAHgUIAHAAIgCAnQgRAKgfAAQhMAAAAhKg");
	this.shape_15.setTransform(232.8,28.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAZAAQAaAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAEQgLAeghAAIgBABQgwAAAAg2gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQAAQgJAAgFAMg");
	this.shape_16.setTransform(212.775,30.7502);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAoBNQgTAAgJgMQgLgOgOgbIAAgBIAcgpQAEgGAGAAIAdAAIAAAHQgZAEgIAIIgNAMQAAABgBAAQAAAAAAABQAAAAAAAAQABABAAAAQAQAbATAXQAIAIAHACIAAAHgAg5BNIAAgIQAJAAACgCQADgCAAgGIAAhvQAAgKgGgBIgHgBIAAgHIAogFIABABIAACGQAAAGADACQACACAJAAIAAAIg");
	this.shape_17.setTransform(201.775,28.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAJAqIgMAIQgJADgIAAQgPABgJgKQgHgIAAgMQAAgTAWgGQAggLAFgFIAAgJQAAgRgNAAQgMAAgGAVQgCAHgHAAQgEAAgGgDQgGgEAAgFQAAgKAMgIQANgHAVgBQAmABAAAdIAAAvQAAANAGADQADABAHAAIAAAGQgMAHgPgBQgMABgEgMgAgKABQgMAHAAAMQAAAJAFAFQAFAEAGAAQAOAAAAgPIAAgeg");
	this.shape_18.setTransform(189.4,30.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgjBIIAAgIIALAAQAGgBACgCQABgDAAgGIAAhyIgJAAQgOAAgGAHQgEAFgFARIgIAAIAAgmIB7AAIAAAmIgIAAQgFgRgEgFQgGgHgOAAIgJAAIAAByQAAAGABADQACACAGABIALAAIAAAIg");
	this.shape_19.setTransform(178.375,28.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgmBJQgFgDAAgGQAAgFAEgFQAEgGAEAAQAEAAAFAFQAEADAEAAQAGAAAEgOQABgFgCgJIglhWQgDgGgDgCQgCgBgIgBIAAgIIA4AAIAAAIIgHABQgFABACAGIAXA8QAOglAFgXQACgGgFgBIgKgBIAAgIIApAAIAAAIQgHABgEACQgBACgEAIIgkBfQgGAVgJAJQgHAHgKAAQgHAAgFgEg");
	this.shape_20.setTransform(311.15,11.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgbBNIAAgIQAJAAACgCQADgBAAgIIAAhuQAAgKgGAAIgHgCIAAgHIAngFIABABIAACFQAAAIADABQACACAJAAIAAAIg");
	this.shape_21.setTransform(302.175,6.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgbBKIAAgIQAJAAACgCQADgBAAgIIAAg8QAAgKgGAAIgHgBIAAgIIAngFIABABIAABTQAAAIADABQACACAJAAIAAAIgAgMgtQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHAAQgIAAgEgEg");
	this.shape_22.setTransform(295.675,6.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAnA0IAAgHIAKgCQACgCAAgGIAAgyQAAgVgRAAQgPAAgEAPIgBAKIAAAuQABAGACACIAJACIAAAHIgzAAIAAgHIAJgCQADgCAAgGIAAgyQgBgVgQAAQgPAAgEAPIgBAKIAAAuQAAAGACACIAJACIAAAHIg2AAIAAgHQAJgBACgCQADgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIADAOIAQgKQAJgEAKAAQASAAAJAPIAPgJQALgGAKAAQAgAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_23.setTransform(282.6,8.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAJApIgMAIQgIAEgJABQgPgBgJgIQgHgJAAgNQAAgSAWgHQAggKAFgEIAAgKQAAgRgMAAQgNAAgGAVQgCAHgGAAQgGAAgFgDQgGgEAAgFQAAgLAMgGQANgIAVAAQAmAAAAAdIAAAuQAAAOAGADQAEABAGgBIAAAIQgMAFgPABQgMAAgEgNgAgKACQgLAFAAAOQgBAHAFAFQAFAGAGAAQAOAAAAgQIAAgdg");
	this.shape_24.setTransform(267,8.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag2BIIAAgIQAMAAADgCQACgCAAgIIAAhnQAAgIgCgCQgDgCgMgBIAAgHIBtAAIAAAlIgIAAQgFgRgFgEQgGgHgQAAIgOAAQgEAAgBABQgBACAAAEIAAAzIAXAAQAKAAADgEQAEgDACgMIAIAAIAAAwIgIAAQgCgMgEgEQgDgDgKAAIgXAAIAAAuQAAAIADACQACACAOAAIAAAIg");
	this.shape_25.setTransform(255.625,6.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASIAQgOQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_26.setTransform(240.675,8.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgFgBIgIgBIAAgHIApgEIAAABIAABCQAAAXATAAQAMAAAEgLQACgEAAgIIAAgsQABgKgGgBIgHgBIAAgHIAngEIACABIAABTQAAAHADACQACABAJABIAAAHIgpAAIgCgLIgOAIQgKAGgLAAQgeAAAAgfg");
	this.shape_27.setTransform(230.2,8.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag0A4QgSgUAAgkQAAgjASgTQASgVAiAAQAjAAATAVQARATAAAjQAAAkgRAUQgTAUgjAAQgiAAgSgUgAgjAAQAABDAjAAQAkAAAAhDQAAhBgkAAQgjAAAABBg");
	this.shape_28.setTransform(215.3,6.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMA8QgIgHAAgOIAAhDIgMAAIAAgKIANAAIARgaIAKAAIAAAaIAWAAIAAAKIgWAAIAAA7QAAAUANAAQAFAAAFgCIACAGQgQAKgNAAQgIAAgIgFg");
	this.shape_29.setTransform(199.1,7.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAZABQAaAAALAPQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAEQgLAeghABIgBAAQgwAAAAg2gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQABQgJAAgFALg");
	this.shape_30.setTransform(189.675,8.6502);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag4BIIAAgIQAMAAACgCQADgCAAgIIAAhnQAAgIgDgCQgCgCgMgBIAAgHIBCAAIAAAHQgLABgEACQgCACAAAIIAABiQAAAKAEADQADADAPAAQAQAAAHgIQAFgGAGgSIAIAAIgDApg");
	this.shape_31.setTransform(178.15,6.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_32.setTransform(136.425,38.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYAxIAAg1QAAgNgGgGQgHgIgLAAQgKAAgGAIQgHAGAAANIAAA1IgUAAIAAhfIAUAAIAAALQAFgGAIgDQAHgEAIAAQALABAJAEQAJAFAFAJQAFAJAAANIAAA4g");
	this.shape_33.setTransform(128.225,39.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIAAAIIhJAAQACAMAHAHQAIAHAJAAQARAAAGgOIAVAAQgDANgMAJQgLAIgSAAQgMAAgLgGgAAagIQAAgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA0AAIAAAAg");
	this.shape_34.setTransform(118.25,39.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA6AxIAAg1QAAgNgHgGQgGgIgLAAQgLAAgHAIQgGAGAAANIAAA1IgTAAIAAg1QAAgNgGgGQgHgIgLAAQgLAAgGAIQgHAGAAANIAAA1IgUAAIAAhfIAUAAIAAALQAFgGAHgDQAIgEAIAAQAMABAJAEQAIAFAFAJQAEgJAJgEQAKgGAKAAQALABAJAEQAJAFAFAJQAGAJAAANIAAA4g");
	this.shape_35.setTransform(105.025,39.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLAKgGQALgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIgBAIIhIAAQABAMAIAHQAHAHAKAAQARAAAGgOIAWAAQgEANgMAJQgMAIgRAAQgMAAgLgGgAAbgIQAAgLgJgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA1AAIAAAAg");
	this.shape_36.setTransform(91.4,39.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA/QgMgJgDgPIAUAAQADAHAHAEQAHAFAKAAQAMAAAHgHQAHgIAAgNIAAgQQgFAGgJAFQgIAFgKAAQgMgBgLgFQgKgHgGgLQgGgLAAgOQAAgOAGgMQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgNIAUAAIAABgQAAANgGAKQgFALgLAFQgKAGgOAAQgTAAgNgJgAgNgyQgGAEgEAGQgFAIAAAKQAAAJAFAIQAEAGAGAEQAGAFAHAAQAIAAAHgFQAGgDAEgHQAEgHAAgKQAAgKgEgHQgEgIgGgDQgHgEgIAAQgHAAgGAEg");
	this.shape_37.setTransform(80.45,41.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgKAAQgNAAgKgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_38.setTransform(69.8,39.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAYAxIAAg1QAAgNgGgGQgHgIgLAAQgKAAgGAIQgHAGAAANIAAA1IgUAAIAAhfIAUAAIAAALQAFgGAIgDQAHgEAIAAQALABAJAEQAJAFAFAJQAFAJAAANIAAA4g");
	this.shape_39.setTransform(59.775,39.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgLAAQgLAAgLgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_40.setTransform(49,39.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAsA8IAAhRIglBRIgMAAIglhRIAABRIgVAAIAAh3IAWAAIApBdIAqhdIAWAAIAAB3g");
	this.shape_41.setTransform(36.9,38.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_42.setTransform(22.875,38.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgFgHQgFgHAAgJIAUAAQABAHAFAEQAFAEAHAAQAIAAAFgEQAFgDAAgFQAAgFgFgDIgQgGQgKgCgHgDQgHgCgFgGQgFgGAAgJQAAgHAFgHQAEgGAJgEQAIgDAKAAQAQAAAKAIQAKAIABAOIgUAAQAAgGgFgEQgFgEgHAAQgIAAgEADQgEADAAAFQAAAEADACIAHAEIAKAEQALADAHADQAGACAFAFQAFAGAAAJQAAAIgEAHQgFAGgIAEQgIADgMAAQgKAAgJgEg");
	this.shape_43.setTransform(15.575,39.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLAKgGQAMgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQABAMAHAHQAIAHAKAAQAPAAAHgOIAWAAQgFANgLAJQgMAIgQAAQgNAAgLgGgAAbgIQgBgLgHgGQgIgHgLAAQgJAAgHAHQgIAGgBALIA0AAIAAAAg");
	this.shape_44.setTransform(6.15,39.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IApAAQANAAAKAEQAKAFAEAIQAFAIAAALQAAAJgEAIQgFAHgJAFQgKAFgOAAIgVAAIAAAxgAgVgEIAVAAQALAAAFgFQAGgFAAgJQAAgUgWAAIgVAAg");
	this.shape_45.setTransform(-3.475,38.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdBGIATguIgmhdIAXAAIAZBIIAchIIAVAAIg6CLg");
	this.shape_46.setTransform(89.225,22.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAwIAAheIAUAAIAAANQADgGAHgEQAHgEAKAAIAAAUIgFAAQgLAAgGAFQgFAHAAAOIAAAxg");
	this.shape_47.setTransform(81.175,20.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQAAAMAIAHQAIAHAKAAQAPAAAHgOIAVAAQgDANgMAJQgMAIgQAAQgNAAgLgGgAAagIQAAgLgHgGQgIgHgLAAQgKAAgGAHQgIAGgBALIAzAAIAAAAg");
	this.shape_48.setTransform(72.9,20.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLAwIgkhfIAVAAIAaBNIAbhNIAVAAIgkBfg");
	this.shape_49.setTransform(63.325,20.275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgKAAQgNAAgKgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_50.setTransform(52.25,20.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdA8IAAh3IAUAAIAABnIAnAAIAAAQg");
	this.shape_51.setTransform(43.375,19.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgXAwIAAheIAUAAIAAANQADgGAHgEQAHgEAKAAIAAAUIgFAAQgLAAgGAFQgFAHAAAOIAAAxg");
	this.shape_52.setTransform(32.175,20.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJBDIAAhfIATAAIAABfgAgIgsQgDgEAAgFQAAgGADgDQADgEAFAAQAGAAADAEQADADABAGQgBAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_53.setTransform(26.9,18.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgKAAQgNAAgKgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAHAEAGAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgGAAgHADg");
	this.shape_54.setTransform(19.5,20.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA9QgJgFgFgGIAAANIgUAAIAAh/IAUAAIAAAvQAFgHAJgEQAJgEAJAAQANAAAKAFQALAHAFAKQAGALAAAPQAAANgGAMQgFAMgLAGQgLAGgMAAQgKAAgIgEgAgOgLQgGADgEAHQgEAHAAAKQAAAKAEAHQAEAHAGAEQAIAEAGAAQAHAAAHgEQAHgEAEgHQAEgIAAgJQAAgLgEgGQgEgHgHgEQgHgEgHAAQgGABgIAEg");
	this.shape_55.setTransform(8.75,18.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAiA8IgJgYIgxAAIgJAYIgVAAIArh3IAWAAIAsB3gAATAUIgTg3IgTA3IAmAAg");
	this.shape_56.setTransform(-2.925,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-10.1,-4.3,328.1,68.5), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAnIgQgzIgBAAIgPAzIgQAAIgVhAQgBgEgCgCIgHgBIAAgGIAoAAIAAAGIgFABQgEAAABAFIANAtIAAAAIAQg4IAOAAIASA4IABAAIALgtQABgFgDAAIgIgBIAAgGIAgAAIAAAGQgGAAgCACQgCABgCAFIgUA/g");
	this.shape.setTransform(130.725,9.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_1.setTransform(119.825,9.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA3Ig7haIgBAAIAAAzIACAYQAAAHAEABIALABIAAAGIgnAAIAAgGQAIgBABAAQADgCABgGIABgYIAAg2QAAgHgCgBQgCgCgJAAIAAgGIAkAAIA0BNIAAAAIAAgmIAAgYQgBgGgFgCIgLgBIAAgGIAnAAIAAAGQgHAAgCABQgDACAAAGIgBAYIAABGg");
	this.shape_2.setTransform(109.05,7.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAhIgCgXIAGAAQAHAYAPAAQAFAAADgDQAEgDAAgEQAAgJgQgGQgNgFgEgEQgGgGAAgJQAAgMAIgGQAJgHANAAQANAAAKAFIAAAVIgGAAQgCgJgEgFQgFgFgHAAQgEAAgDADQgDADAAAEQAAAIAPAGQAOAFAEAEQAGAFAAAKQAAAMgIAHQgKAHgNAAQgSAAgIgIg");
	this.shape_3.setTransform(93.6,9.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnApQgFgJgBgPIAAg5QAAgGgBgCIgLgBIAAgGIAxAAIAAAGIgLABQgBACAAAGIAAA6QgBAgAVAAQAWAAABggIAAg6QAAgGgCgCIgLgBIAAgGIAwAAIAAAGIgKABQgDACAAAGIAAA5QAAAOgEAIQgKARgfAAQgdAAgKgPg");
	this.shape_4.setTransform(83.95,7.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAtQgHgFAAgKIAAgzIgKAAIAAgIIALAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAADgCIADAFQgOAIgJAAQgGAAgFgFg");
	this.shape_5.setTransform(71.4,8.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAfQgKgLAAgTQAAgSAKgLQAKgMASAAQAMAAAJAFQAJAFAAAHQAAAFgEACQgEADgEAAQgGAAgBgGQgFgOgHAAQgFAAgEAHQgFAJAAAPQAAAPAGAJQAFAHAJAAQAOAAAHgPIAFADQgGAYgbAAQgRAAgJgKg");
	this.shape_6.setTransform(64.225,9.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAgIgJAFQgGAEgHAAQgLAAgHgHQgGgHAAgJQAAgOARgFQAZgIADgDIAAgIQAAgNgJAAQgJAAgFAQQgCAGgEAAQgEAAgEgCQgFgDAAgFQAAgHAJgGQAKgGAQAAQAdAAAAAXIAAAjQAAAKAEACQADABAEAAIABAFQgJAFgMAAQgJAAgDgJgAgIABQgIAEAAAKQAAAHAEAEQADADAFAAQAKAAAAgMIAAgWg");
	this.shape_7.setTransform(55.325,9.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAtQgGgFAAgKIAAgzIgJAAIAAgIIAKAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAAEgCIABAFQgNAIgJAAQgGAAgGgFg");
	this.shape_8.setTransform(48.95,8.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAoIAAgGIAHgBQACgBAAgFIAAgnQAAgPgOAAQgIAAgFAIQgBADAAAGIAAAkQAAAFACACIAHABIAAAGIgqAAIAAgGIAJgCQACgBAAgFIAAguQAAgIgEAAIgGgBIAAgFIAdgFIACALIAOgIQAHgDAGAAQAYAAAAAZIAAAoQAAAFACABIAIACIAAAGg");
	this.shape_9.setTransform(41.775,9.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_10.setTransform(32.025,9.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvABQAAgZANgQQAQgRAeAAQAWAAAMAHIAAAcIgFAAQgFgNgFgGQgIgJgNAAQgRAAgJAUQgFAMAAASQAAATAGANQAIATASAAQAOAAAHgJQAGgGAFgPIAFAAIgCAeQgMAHgZAAQg4AAAAg5g");
	this.shape_11.setTransform(20.75,7.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("ArMC5QgiAAgZgZQgZgYAAgkIAAjHQAAgkAZgYQAZgYAiAAIWZAAQAiAAAYAYQAaAZAAAjIAADHQAAAjgaAZQgYAZgiAAg");
	this.shape_12.setTransform(76.45,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-3.6,-6.2,160.1,36.9), null);


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


(lib.MosquitoANI = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.W2();
	this.instance.setTransform(-4.45,0.25,1,1,0,0,0,4.5,7.7);

	this.instance_1 = new lib.W1();
	this.instance_1.setTransform(-1.2,-6.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#545353").s().p("AgICQQgBg+gWgwQAHgfgDgrIgDguIgCgLQADgOAngtIgLAwIAHAWQANAkAFAoIAIA+QAIA3gfArQgFAHgEAAQgEAAgEgNg");
	this.shape.setTransform(-0.001,-0.0342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MosquitoANI, new cjs.Rectangle(-8.9,-15.7,16.7,31.4), null);


(lib.mosquito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mosquito ANI
	this.instance = new lib.MosquitoANI();
	this.instance.setTransform(45.8,57.15,0.2994,0.2705,0,-0.0452,179.9504,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:1.2,skewX:-21.0183,skewY:158.9767,x:45.85,y:52.25},7,cjs.Ease.get(1)).to({x:49.1,y:45},7).to({regY:0.9,skewX:-31.7519,skewY:148.246,x:51.85,y:21.4},26).to({x:45.85,y:25.85},40).to({x:53.1,y:20.8},24).wait(1));

	// Mosquito ANI
	this.instance_1 = new lib.MosquitoANI();
	this.instance_1.setTransform(105,35.85,0.4611,0.3618,0,-24.4855,155.5094,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.7,skewX:-43.9816,skewY:136.0163,x:92.55,y:33.4},7,cjs.Ease.get(1)).to({x:91.8,y:15.65},7).to({regY:0.6,skewX:-24.4855,skewY:155.5094,x:98.25,y:18.1},10).to({x:95,y:22.3},56).to({x:105,y:35.85},24).wait(1));

	// Mosquito ANI
	this.instance_2 = new lib.MosquitoANI();
	this.instance_2.setTransform(65.45,16.5,0.4611,0.3618,0,-44.4516,135.547,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.6,regY:-0.6,x:48.6,y:-1.25},7,cjs.Ease.get(1)).wait(7).to({regX:0.1,regY:0.4,x:53.2,y:-10.7},10).to({x:46.95,y:-10.5},56).to({x:38.95,y:-7.25},24).wait(1));

	// Mosquito ANI
	this.instance_3 = new lib.MosquitoANI();
	this.instance_3.setTransform(-40.05,-22.2,0.5398,0.5282,54.694,0,0,-0.2,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:2.7,y:-26.2},11,cjs.Ease.get(1)).wait(7).to({x:25.35,y:-38.95},10).to({regX:-1.2,regY:-2.5,x:78.8,y:-60.45},13).to({x:101.55,y:-61.45},24).to({x:112.45,y:-60.45},31).wait(1));

	// Mosquito ANI
	this.instance_4 = new lib.MosquitoANI();
	this.instance_4.setTransform(-6.45,50.25,0.5112,0.5016,31.9784,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-1.4,regY:-2,x:14.85,y:10.6},13,cjs.Ease.get(1)).wait(8).to({regX:-0.1,regY:0.1,x:9.95,y:10.4},10).to({x:7.95,y:11.25},12).to({x:-0.35,y:29.75},37).to({x:-6.7},24).wait(1));

	// Mosquito ANI
	this.instance_5 = new lib.MosquitoANI();
	this.instance_5.setTransform(86.65,4.6,0.476,0.5047,0,-40.9557,139.0407,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:0.2,skewX:-70.4497,skewY:109.5507,x:73.15,y:-14.1},7,cjs.Ease.get(1)).wait(7).to({regY:0.1,skewX:-40.9557,skewY:139.0407,x:69.65,y:-21.4},10).to({regY:0.2,skewX:-57.9004,skewY:122.0965,x:66.2,y:-18.9},56).to({x:59.6,y:-19.65},24).wait(1));

	// Mosquito ANI
	this.instance_6 = new lib.MosquitoANI();
	this.instance_6.setTransform(75.9,46.1,0.5749,0.6025,0,-20.016,159.984,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.1,regY:0.4,scaleX:0.4586,scaleY:0.3797,skewX:-20.0146,skewY:159.9848,x:70.5,y:35.4},7,cjs.Ease.get(1)).wait(7).to({regX:0.2,regY:0.3,scaleX:0.5749,scaleY:0.6025,skewX:-20.016,skewY:159.984,x:75.9,y:46.1},10).to({regX:0.1,regY:0.4,scaleX:0.5748,skewX:-20.0151,skewY:159.9844,x:67.7,y:24.95},17).to({regX:0.2,regY:0.3,scaleX:0.5749,skewX:-20.016,skewY:159.984,x:64.85,y:39.6},39).to({y:12.85},24).wait(1));

	// Mosquito ANI
	this.instance_7 = new lib.MosquitoANI();
	this.instance_7.setTransform(27.85,31.45,0.6815,0.6309,-9.2473,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-0.1,regY:0.2,scaleX:0.5284,scaleY:0.4721,rotation:12.2476,x:28.55,y:20.25},7,cjs.Ease.get(1)).to({regX:-0.2,regY:0.1,rotation:-9.9589,x:30.2,y:-4.35},7).to({regX:0.1,scaleX:0.4588,scaleY:0.4568,rotation:17.222,x:21.95,y:1.55},10).to({scaleX:0.4628,scaleY:0.4599,rotation:17.5849,x:28.9,y:-0.75},11).to({regX:0.2,scaleX:0.4667,scaleY:0.463,rotation:17.9429,x:31.75,y:0.25},10).to({regX:-1.1,regY:-1.7,scaleX:0.4569,scaleY:0.4341,rotation:37.4869,x:30.75,y:3.95},35).to({regX:0,regY:0.2,scaleX:0.6815,scaleY:0.6308,rotation:34.9959,x:30.3,y:17.7},24).wait(1));

	// Layer_11
	this.instance_8 = new lib.MosquitoANI();
	this.instance_8.setTransform(-38.1,12.5,0.5112,0.5015,46.9627,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-0.2,scaleX:0.2958,scaleY:0.2902,rotation:46.9603,x:-10.35,y:-2.55},14,cjs.Ease.get(0.88)).to({regX:-0.1,regY:0.3,scaleX:0.3436,scaleY:0.3372,rotation:46.9623,x:-9.5,y:-12},20).to({regY:0.4,scaleX:0.4346,scaleY:0.4264,rotation:46.962,x:-11.4,y:-16.45},38).to({regY:0.2,scaleX:0.5112,scaleY:0.5015,rotation:46.9627,x:-12.4,y:-13.25},32).wait(1));

	// Mosquito ANI
	this.instance_9 = new lib.MosquitoANI();
	this.instance_9.setTransform(-9.35,15.15,0.3687,0.3027,39.4239,0,0,-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-1.45,y:4.65},7,cjs.Ease.get(1)).to({regX:0.6,regY:-1.7,x:4.3,y:-0.05},7).to({regX:-0.6,regY:0.4,x:-7.35,y:-0.8},10).to({x:-9.35,y:15.15},56).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-66.4,167.3,127.60000000000001);


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
	this.instance = new lib.text1();
	this.instance.setTransform(114.6,48.95,0.088,0.088,0,0,0,475.6,60.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABoIAAjPMD4xAAAIAADPg");
	this.shape.setTransform(114.2866,41.836,0.088,0.088);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgygSkIArBdMggzASkg");
	this.shape_1.setTransform(37.401,24.4521,0.088,0.088);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gngMl6QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA+ATQB+AmAMF7QAMF7htHwQhtHyinFFQhNCZhLBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(17.0974,45.697,0.088,0.088);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzigQj0lUjFoOQjFoOgjmVQgRjAAch0QAdh4BIgXQBJgXBoBPQBkBNB0ChQDyFTDGIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(28.4041,45.0281,0.088,0.088);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nvhTmMQgoi7ALh3QAMh7BBggQBBggBrBAQBoA+CACQQEOEvD7HwQD7HuBTGMQAoC8gLB3QgMB7hBAhQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(17.54,18.9677,0.088,0.088);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(118.6,26.55,0.088,0.088,0,0,0,850.7,159);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AheB+ICykCIALAHIizECg");
	this.shape_5.setTransform(32.9321,17.7822,0.7343,0.7343);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("AgHAoQg/gIgrgQQgUgIgKgIQgKgJABgIQABgIAOgGQANgFAWgDQAvgHA+AHQBAAIAqARQAUAIALAHQAKAJgBAIQgCAIgNAGQgNAGgWADQgWACgZAAQgdAAgigDg");
	this.shape_6.setTransform(7.7643,29.9032,0.7343,0.7343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-3.4,8,208,48.4), null);


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
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(360));

	// New
	this.instance = new lib.Newtext();
	this.instance.setTransform(108.8,158.65,1,1,0,0,0,95.5,11.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(160));

	// OSHA
	this.instance_1 = new lib.OSHALogo_1();
	this.instance_1.setTransform(284.4,30.9,1,1,0,0,0,40.4,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(90.8,84.5,1,1,0,0,0,51.6,75.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).to({_off:true},80).wait(169));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.setTransform(609.6,100.7,0.9,0.9,0,0,0,46.1,16.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:82.7,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// Logo
	this.instance_4 = new lib.Logo();
	this.instance_4.setTransform(531.1,7.55,0.7775,0.7775);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:561.1,alpha:1},9).wait(342));

	// F1
	this.instance_5 = new lib.F1();
	this.instance_5.setTransform(78.9,81.65,1,1,0,0,0,68,65);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:98.9,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(259));

	// Sh
	this.instance_6 = new lib.Sh();
	this.instance_6.setTransform(565,48.5,0.4095,0.4095,-90,0,0,175.7,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Img2
	this.instance_7 = new lib.Img2_1();
	this.instance_7.setTransform(47,107,1,1,0,0,0,150,105);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// M2
	this.instance_8 = new lib.mosquito("synched",0);
	this.instance_8.setTransform(407.15,32.7,0.4914,0.7291,72.6677,0,0,8.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(360));

	// M1
	this.instance_9 = new lib.mosquito("synched",0);
	this.instance_9.setTransform(433.35,62.1,0.8,0.8,-9.746,0,0,8.4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Img1
	this.instance_10 = new lib.Img1_1();
	this.instance_10.setTransform(47,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16486A").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-23.5,1041.8,144);


// stage content:
(lib.WFSB_217823_MM_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg43AHCIAAuDMBxvAAAIAAODg");
	mask.setTransform(363.9944,44.9963);

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
p.nominalBounds = new cjs.Rectangle(363.5,44.5,365,205.5);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Img1.jpg", id:"Img1"},
		{src:"Img2.jpg", id:"Img2"},
		{src:"OSHALogo.png", id:"OSHALogo"}
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