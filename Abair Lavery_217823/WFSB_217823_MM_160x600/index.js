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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AyArRQAUgYAmggQBNhCBcgtQEoiSFSBqQBqAiDqBYQCvBCBcASQCDAbB5gaQCFgdCihkQE2i/gVOqQgKHThJH7MgiDABng");
	this.shape.setTransform(105.7903,27.8294);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sh, new cjs.Rectangle(-9.5,-69.5,230.7,194.7), null);


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
	this.shape.setTransform(115.025,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgdIgHAAIAAgMIAHAAIAAgPIAPAAIAAAPIANAAIAAAMIgNAAIAAAdQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_1.setTransform(111.875,43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAggQAAgIgEgEQgEgDgGgBQgFABgEADQgEAEAAAIIAAAgIgPAAIAAg8IAPAAIAAAIQAEgFAEgBQAFgDAFAAQALAAAGAHQAHAHAAAMIAAAjg");
	this.shape_2.setTransform(106.6,43.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAGgDQAGgFAIAAQAGAAAFADQAFADADAEIAAgJIAQAAIAAA8IgQAAIAAgIQgDAEgFADQgFACgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCAEAAAEQAAAGACAEQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgEAAgGQAAgEgCgEQgCgFgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_3.setTransform(99.625,43.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAg8IAOAAIAAA8gAgGgbQgCgCgBgEQABgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(94.75,42.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_5.setTransform(91.825,42.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIAQAAIAAAJQADgEAFgDQAFgDAGAAQAIAAAGAFQAGADAEAIQAEAGAAAKQAAAJgEAGQgEAHgGAFQgGADgIAAQgGAAgFgCQgFgDgDgEIAAAlgAgHgcQgEABgCAFQgCAEAAAFQAAAGACAEQACADAEACQAEACADAAQAEAAAEgCQADgCADgDQACgEAAgGQAAgFgCgEQgDgEgDgDQgEgCgEAAQgDAAgEADg");
	this.shape_6.setTransform(86.875,45.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAfIAAggQAAgIgEgDQgDgFgGAAQgHAAgDAFQgEADAAAIIAAAgIgOAAIAAggQAAgIgEgDQgEgFgGAAQgGAAgEAFQgEADAAAIIAAAgIgPAAIAAg8IAPAAIAAAIQADgFAFgBQAFgDAFAAQAHAAAGADQAFADADAGQADgGAFgCQAGgEAHAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_7.setTransform(77.575,43.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgHQgDgGAAgKQAAgJAEgGQAEgIAHgDQAHgFAIAAQAJAAAHAFQAHADAEAIQAEAGAAAJQAAAKgEAGQgEAHgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAFAAAIQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgFQgFgEgGAAQgGAAgEAEg");
	this.shape_8.setTransform(68.725,43.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAiQgKgFgFgJQgEgIAAgMQAAgKAEgJQAFgJAKgFQAIgFALAAQAMAAAKAHQAKAGAEAMIgSAAQgDgGgFgCQgFgDgGAAQgGAAgFADQgFADgDAGQgDAGAAAGQAAAIADAGQADAFAFAEQAFADAGAAQAGAAAFgDQAFgDADgFIASAAQgEALgKAHQgKAGgMAAQgLAAgIgFg");
	this.shape_9.setTransform(60.95,42.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAtIANgfIgZg6IASAAIAOAqIAQgqIARAAIglBZg");
	this.shape_10.setTransform(51.825,45.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgdIgHAAIAAgMIAHAAIAAgPIAPAAIAAAPIANAAIAAAMIgNAAIAAAdQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_11.setTransform(46.525,43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAcQgHgFgEgHQgEgGAAgKQAAgJAEgGQAEgIAHgDQAGgFAIAAQAJAAAHAFQAHADAEAHQADAHAAAIIAAAFIgsAAQABAIAEADQAEAEAFAAQAJgBADgGIARAAQgDAIgHAGQgIAFgLAAQgHAAgHgDgAAPgEQgBgGgEgEQgEgEgGAAQgFAAgEAEQgEADAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(41.225,43.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgGAAIAAgMIAGAAIAAgDQAAgLAGgGQAGgFANAAIAAANQgGAAgCACQgCACAAAFIAAADIAKAAIAAAMIgKAAIAAAwg");
	this.shape_13.setTransform(36.45,42.5229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAGgDQAGgFAIAAQAGAAAFADQAFADADAEIAAgJIAQAAIAAA8IgQAAIAAgIQgDAEgFADQgFACgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCAEAAAEQAAAGACAEQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgEAAgGQAAgEgCgEQgCgFgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_14.setTransform(30.975,43.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgDgFQgEgFAAgHIAQAAQABAEADADQADADAFAAQAEAAAEgDQADgCAAgEQAAgEgCgCIgGgEIgHgDIgMgEQgFgBgDgFQgDgEAAgHQAAgHADgFQADgFAGgCQAHgEAHAAQAMABAHAGQAHAFABALIgRAAQAAgFgEgCQgDgDgDABQgFAAgDABQgDADAAAFQABACACACIAEAEIAIACIAMAFQAFABADAEQAEAFAAAIQAAAFgEAGQgDAFgGADQgGADgIAAQgIAAgGgCg");
	this.shape_15.setTransform(24.5,42.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgDgDgFQgEgFAAgIQAAgHAEgGQAFgGAIgDIgEgHQgCgEAAgDQAAgFADgFQADgEAFgDQAFgCAHAAQAGAAAFACQAFADACAFQADAEgBAFIgOAAQAAgDgBgCQgCgCgDAAQgEAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAACACADIAFAGIATATIAAgBIAAAAIAHgKIAQAAIgIANIgFAIIATATIgTAAIgIgJQgLAKgPAAQgIAAgGgDgAgZAPQAAAFAEADQAEAEAGAAQAJAAAGgGIgSgTQgLAEAAAJg");
	this.shape_16.setTransform(126.325,30.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(116.225,30.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgHAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAHQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_18.setTransform(109.625,31.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgHAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAHQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_19.setTransform(102.775,31.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIAvAAIAAANIgfAAIAAAUIAXAAIAAALIgXAAIAAAhg");
	this.shape_20.setTransform(96.925,30.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(88.175,30.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAghQAAgHgEgEQgDgEgHABQgFgBgEAEQgEAEABAHIAAAhIgQAAIAAg8IAQAAIAAAHQACgDAGgCQAEgDAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_22.setTransform(81.7,31.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgIAEgIQAEgGAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFACQgFAEgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAFAAAEQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_23.setTransform(74.975,31.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAnIgFgPIgeAAIgEAPIgQAAIAbhNIARAAIAcBNgAALAMIgLggIgKAgIAVAAg");
	this.shape_24.setTransform(65.65,30.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAnIAAghIghAAIAAAhIgPAAIAAhNIAPAAIAAAhIAhAAIAAghIAPAAIAABNg");
	this.shape_25.setTransform(58,30.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAkQgHgCgDgFQgEgFAAgIIAQAAQABAFADADQADACAFAAQAEAAAEgCQADgDAAgEQAAgDgCgCIgGgEIgHgCIgMgFQgFgBgDgEQgDgFAAgHQAAgHADgFQADgFAGgDQAHgCAHAAQAMgBAHAHQAHAFABAKIgRAAQAAgEgEgCQgDgDgDAAQgFABgDACQgDACAAAEQABAEACACIAEADIAIADIAMAEQAFACADAEQAEAEAAAHQAAAHgEAEQgDAGgGADQgGADgIABQgIAAgGgEg");
	this.shape_26.setTransform(50.6,30.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgKQAFgJAJgEQAJgGAKABQALgBAJAGQAJAEAFAJQAFAKAAAKQAAALgFAJQgFAJgJAFQgJAFgLABQgKgBgJgFgAgLgVQgGACgDAHQgDAFAAAHQAAAHADAHQADAFAGAEQAFACAGAAQAHAAAFgCQAFgEADgFQADgHAAgHQAAgHgDgFQgDgHgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_27.setTransform(43.025,30.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAjQgEgFAAgIQAAgIAFgGQAEgEAJAAQAHAAAFAEQAFAGgBAIQABAIgFAFQgFAFgHAAQgJAAgFgFgAASAWQAAAJAGAAQAGAAAAgJQAAgIgGAAQgGAAAAAIgAgcAnIAqhNIAPAAIgqBNgAgjgIQgGgEAAgJQAAgIAGgFQAEgFAIAAQAIAAAFAFQAEAFAAAIQAAAJgEAEQgFAFgIAAQgIAAgEgFgAgdgVQAAAJAGAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQABgCAAgFQAAgIgGAAQgGAAAAAIg");
	this.shape_28.setTransform(30.45,30.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAeQgHgLAAgTQAAgSAHgLQAHgLAPAAQAQAAAHALQAGALABASQgBATgGALQgHALgQAAQgPAAgHgLgAgIgWQgEADgBAGIgBANIABAOQABAFAEAEQADADAFAAQAGAAAEgDQADgEAAgFIABgOIgBgNQAAgGgDgDQgEgEgGAAQgFAAgDAEg");
	this.shape_29.setTransform(22.6,30.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgTQAAgSAGgLQAHgLAPAAQAQAAAHALQAHALAAASQAAATgHALQgHALgQAAQgPAAgHgLgAgJgWQgCADgBAGIgBANIABAOQABAFACAEQAEADAFAAQAGAAADgDQAEgEABgFIABgOIgBgNQgBgGgEgDQgDgEgGAAQgFAAgEAEg");
	this.shape_30.setTransform(16,30.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAoIAAhBIgKAAIAAgOIAZAAIAABPg");
	this.shape_31.setTransform(10.325,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(20,-10,0.3837,0.3837);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(6.6,-10,124.70000000000002,61.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAQQgIgHAAgIQAAgKAIgFQAHgIAJAAQAKAAAIAIQAGAFABAKQgBAIgGAHQgIAGgKAAQgJAAgHgGg");
	this.shape.setTransform(100.3,-30.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBjIAfhEIg3iBIAuAAIAeBUIAehUIAtAAIhTDFg");
	this.shape_1.setTransform(93.275,-31.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA9QgNgJgIgQQgIgPAAgVQAAgUAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgIgAgTgYQgJAKAAAOQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgPgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_2.setTransform(77.875,-34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBRQgNgIgIgQQgIgQAAgUQAAgVAIgPQAIgPANgJQAOgIAQAAQANAAALAFQALAGAGAJIAAg+IApAAIAACxIgpAAIAAgTQgGAJgLAGQgKAGgOAAQgQAAgOgJgAgTgDQgJAIAAAQQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgJAAgPQAAgQgJgHQgIgJgMAAQgMAAgIAIg");
	this.shape_3.setTransform(62.575,-36.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgQQgJgPAAgVQAAgTAKgQQAJgQAQgJQAPgIATAAQAUAAAQAIQAPAJAKAQQAJAQAAATQAAAVgKAPQgJAQgQAJQgQAIgTAAQgTAAgQgIgAgTgYQgIAIAAAQQAAAQAIAJQAIAJALAAQALAAAJgJQAIgJAAgQQAAgPgIgJQgIgIgMgBQgLAAgIAJg");
	this.shape_4.setTransform(47.175,-34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBTQgVAAgMgLQgNgLAAgYIAAg1IgQAAIAAgiIAQAAIAAggIAoAAIAAAgIAbAAIAAAiIgbAAIAAA1QAAAGADADQADACAHAAIAOAAIAAAjg");
	this.shape_5.setTransform(35.125,-36.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBEIAAhIQgBgNgGgIQgHgHgMAAQgKAAgHAHQgIAIAAANIAABIIgoAAIAAiFIAoAAIAAASQAHgJAKgFQAKgGANAAQAYAAAOAQQANAPAAAaIAABOg");
	this.shape_6.setTransform(122,-67.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgQQgJgPAAgVQAAgUAKgQQAJgPAQgIQAPgJATAAQAUAAAQAJQAPAIAKAPQAJAQAAAUQAAAUgKAQQgJAQgQAIQgQAJgTAAQgTAAgQgJgAgTgYQgIAJAAAPQAAAQAIAJQAIAIALABQALgBAJgIQAIgJAAgQQAAgPgIgIQgIgJgMAAQgLgBgIAJg");
	this.shape_7.setTransform(107.675,-67.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBgIAAiFIApAAIAACFgAgRg5QgGgGAAgKQAAgJAGgHQAHgGAKAAQALAAAGAGQAIAHgBAJQABAKgIAGQgGAGgLAAQgKAAgHgGg");
	this.shape_8.setTransform(97.55,-70.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVBTQgVAAgMgLQgNgLAAgYIAAg1IgQAAIAAgiIAQAAIAAggIAoAAIAAAgIAbAAIAAAiIgbAAIAAA1QAAAGADADQADACAHAAIAOAAIAAAjg");
	this.shape_9.setTransform(89.825,-69.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA8QgNgIgIgQQgIgQAAgUQAAgUAIgQQAIgPANgIQAOgJAQAAQAOAAAKAGQALAGAGAJIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgJgAgTgXQgJAIAAAPQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgOgJgJQgIgJgMAAQgMAAgIAJg");
	this.shape_10.setTransform(77.525,-67.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVBTQgVAAgMgLQgNgLAAgYIAAg1IgQAAIAAgiIAQAAIAAggIAoAAIAAAgIAbAAIAAAiIgbAAIAAA1QAAAGADADQADACAHAAIAOAAIAAAjg");
	this.shape_11.setTransform(65.625,-69.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA9QgMgHgGgNQgHgNAAgRIAAhOIApAAIAABIQAAAOAHAHQAHAHALAAQAMAAAHgHQAHgIAAgNIAAhIIApAAIAACFIgpAAIAAgSQgGAJgLAFQgKAGgNAAQgPAAgMgHg");
	this.shape_12.setTransform(53.375,-67.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFBkIAAjFIAoAAIAAATQAHgJAKgGQALgGANAAQAQAAANAJQAOAIAIAPQAHAQAAAVQAAAUgHAPQgIAQgOAIQgNAJgQAAQgNAAgLgGQgKgGgHgIIAABSgAgUg2QgJAJAAAPQAAAQAJAIQAIAIAMAAQALAAAKgIQAIgJAAgPQAAgQgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_13.setTransform(38.6,-64.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghA8QgQgIgIgQQgJgPAAgVQAAgUAIgQQAJgPAPgIQAQgJATAAQATAAAPAJQAPAHAJAPQAIAPAAAVIAAALIhcAAQABANAHAGQAHAGAKAAQAPABAGgNIArAAQgDANgJAKQgJALgNAGQgNAGgQAAQgTAAgPgJgAAZgMQAAgKgHgHQgHgGgLAAQgJAAgHAGQgHAGgCALIAyAAIAAAAg");
	this.shape_14.setTransform(23.875,-67.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpBEIAAiFIApAAIAAAWQAGgLAMgGQAKgHANAAIAAAsIgLAAQgPAAgIAGQgHAHAAAQIAAA+g");
	this.shape_15.setTransform(12.45,-67.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBEIAAiFIApAAIAAAWQAGgLAMgGQAKgHAOAAIAAAsIgMAAQgPAAgIAGQgHAHAAAQIAAA+g");
	this.shape_16.setTransform(89.95,-100.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpA9QgMgHgGgNQgHgNAAgRIAAhOIApAAIAABIQAAAOAHAHQAHAHALAAQAMAAAHgHQAHgIAAgNIAAhIIApAAIAACFIgpAAIAAgSQgGAJgLAFQgKAGgNAAQgPAAgMgHg");
	this.shape_17.setTransform(77.525,-100.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgPQgJgQAAgVQAAgTAKgQQAJgQAQgIQAPgJATAAQAUAAAQAJQAPAIAKAQQAJAQAAATQAAAUgKARQgJAPgQAIQgQAJgTAAQgTAAgQgJgAgTgYQgIAJAAAPQAAAQAIAJQAIAJALgBQALABAJgJQAIgJAAgQQAAgPgIgIQgIgKgMABQgLAAgIAIg");
	this.shape_18.setTransform(63.075,-100.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzBjIAfhEIg3iBIAuAAIAeBUIAehUIAtAAIhTDFg");
	this.shape_19.setTransform(49.275,-97.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBRQgNgIgIgQQgIgQAAgUQAAgVAIgPQAIgPANgJQAOgIAQAAQANAAALAFQALAGAGAJIAAg+IApAAIAACxIgpAAIAAgTQgGAJgLAGQgKAGgOAAQgQAAgOgJgAgTgDQgJAIAAAQQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgJAAgPQAAgQgJgHQgIgJgMAAQgMAAgIAIg");
	this.shape_20.setTransform(121.375,-135.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoBEIAAiFIAoAAIAAAWQAHgLAKgGQALgHAOAAIAAAsIgMAAQgPAAgIAGQgHAHAAAQIAAA+g");
	this.shape_21.setTransform(109.6,-133.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpA9QgNgJgIgQQgIgPAAgVQAAgUAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgIgAgTgYQgJAKAAAOQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgPgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_22.setTransform(96.375,-133.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpA9QgMgHgGgNQgHgNAAgRIAAhOIApAAIAABIQAAAOAHAHQAHAHALAAQAMAAAHgHQAHgIAAgNIAAhIIApAAIAACFIgpAAIAAgSQgGAJgLAFQgKAGgNAAQgPAAgMgHg");
	this.shape_23.setTransform(81.625,-133.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBXQgTgOgDgYIApAAQACAHAHAFQAHAEAKABQANAAAHgIQAIgHAAgQIAAgTQgGAJgLAGQgKAGgOAAQgQAAgOgIQgNgJgIgQQgIgOAAgVQAAgVAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFQAAASgIAPQgHAQgPAIQgPAJgWAAQgdAAgSgOgAgTg4QgJAKAAAPQAAAPAJAJQAIAIAMAAQAMAAAIgIQAJgIAAgQQAAgQgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_24.setTransform(66.275,-130.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghA9QgQgJgIgQQgJgPAAgVQAAgUAIgPQAJgQAPgJQAQgIATAAQATAAAPAIQAPAJAJAPQAIAPAAAUIAAALIhcAAQABAMAHAHQAHAGAKABQAPgBAGgNIArAAQgDAOgJAKQgJALgNAGQgNAGgQAAQgTAAgPgIgAAZgMQAAgLgHgFQgHgHgLAAQgJAAgHAGQgHAGgCALIAyAAIAAAAg");
	this.shape_25.setTransform(51.125,-133.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXBeIAAhjIgPAAIAAgiIAPAAIAAgEQAAgYAOgNQANgNAcAAIAHAAIAAAjQgMgBgFAEQgFAFAAAKIAAABIAWAAIAAAiIgWAAIAABjg");
	this.shape_26.setTransform(40.4,-136.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpA9QgNgJgIgQQgIgPAAgVQAAgUAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgIgAgTgYQgJAKAAAOQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgPgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_27.setTransform(28.525,-133.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeBQQgOgGgJgLQgJgMgBgRIAsAAQABAKAGAFQAFAFAIAAQAKAAAEgFQAGgEAAgHQAAgHgFgEQgDgEgHgCIgQgGQgQgFgLgFQgKgFgIgJQgHgKAAgQQAAgYARgNQARgNAbAAQAbAAARANQASANAAAYIgsAAQAAgIgGgFQgGgEgHAAQgHAAgFAEQgFAEAAAHQAAAIAIAFQAIAEAPAGQARAFAKAFQAKAEAIAKQAGAJABAQQgBAOgGAMQgIAMgOAGQgOAHgSAAQgSAAgPgGg");
	this.shape_28.setTransform(14.4,-135.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aq5AAIVzAA");
	this.shape_29.setTransform(68.075,9.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(-2.7,-147.5,141.6,157.8), null);


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

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape.graphics.f("#14A751").s().p("AgsA9QgKgNAAgXQAAgZAOgOQAOgMAXAAQAKAAAHADIAAgbQAAgKgFAAIgHgCIAAgGIAmgGIABABIAACAQABAGACACQACABAJABIAAAHIgpAAIAAgKQgOANgPAAQgSAAgLgOgAgSgIQgHAJAAAVQAAASAGAKQAGAKAKAAQALAAADgIQADgDAAgIIAAgnQAAgIgCgDQgEgJgKAAQgLAAgFAKg");
	this.shape.setTransform(98.4,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAHAyIAAgHIAIgCQADgCAAgFIAAgxQAAgTgQAAQgLAAgGAKQgCAEAAAIIAAAtQAAAGADACIAIACIAAAHIg0AAIAAgHIALgCQACgCAAgGIAAg6QAAgJgEgBIgIgBIAAgHIAlgFIACANIASgKQAIgEAIAAQAdAAAAAfIAAAyQAAAHADABQACACAJABIAAAHg");
	this.shape_1.setTransform(86.75,39.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgtAVIAAgwQAAgKgFgBIgHgBIAAgHIAngDIABABIAAA+QAAAWARAAQALAAAFgLQABgDAAgIIAAgpQAAgKgFgBIgHgBIAAgHIAngDIABABIAABPQAAAGACACIALACIAAAHIgnAAIgCgLIgNAIQgJAFgLAAQgdAAAAgdg");
	this.shape_2.setTransform(74.925,39.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAApAUAAQAVAAAAgqQAAgpgVAAQgUAAAAAqg");
	this.shape_3.setTransform(62.925,39.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAxBEQgOAAgHgEQgIgEgDgLIgGgcQgCgKgFgDQgEgDgJgBIgJAAIAAAtQAAAIADACQACACALAAIAAAHIg+AAIAAgHQALAAADgCQACgCAAgIIAAhhQAAgIgCgCQgDgCgLAAIAAgHIBBAAQAXAAALAGQAMAIAAATQAAAOgJAJQgIAIgQACIAAABQAbAGAFAcQACANADAGQAFAHAJABIAAAHgAgRg6QgBACAAAFIAAAwIAKAAQANAAAGgIQAFgHAAgNQAAgcgXAAQgIAAgCABg");
	this.shape_4.setTransform(50.175,37.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_5.setTransform(39.875,39.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgnAyIAAgHQAJgBACgCQADgBAAgHIAAg5QAAgJgFgBIgHgBIAAgHIAkgFIABARIAPgOQAGgEAGAAQANAAAAANQAAAHgDAEQgEAFgGAAQgCAAgFgDQgHgFgEAAQgIAAAAARIAAArQAAAHADABQACACAMABIAAAHg");
	this.shape_6.setTransform(33.475,39.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAJAnIgMAIQgIAEgIAAQgOAAgIgJQgIgHAAgNQABgRAUgHQAfgKAFgDIAAgJQAAgRgNAAQgLAAgGATQgCAIgGAAQgEAAgGgDQgFgEAAgEQAAgLALgGQAMgIAUAAQAlAAAAAcIAAAsQgBAOAGACQADABAGAAIAAAGQgLAGgOAAQgMAAgDgMgAgKACQgLAFAAANQAAAHAFAFQAEAEAHABQANAAAAgPIAAgcg");
	this.shape_7.setTransform(23.7,39.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgtAAQABgVAKgOQANgPAXAAQAZAAALAPQAHAKAAAQQABAJgLAAIgzAAQAAAlAaAAQASAAAJgTIAHAEQgLAdgfAAIgBAAQguAAAAgzgAgMgfQgEAJAAAMIAbAAQAGAAAAgHQAAgZgPAAQgJAAgFALg");
	this.shape_8.setTransform(12.3,39.3502);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AghBEIAAgHQAOAAADgCQACgCAAgIIAAgeQAAgFgDgIIgfg3QgEgHgCgCQgEgCgIAAIAAgHIA+AAIAAAHIgLABQgFAAADAGIAbA2IAAAAQAPgdAKgYQACgGgGgBIgKgBIAAgHIAtAAIAAAHQgIABgDABQgEADgEAGQgJAQgTAlQgDAHAAAHIAAAfQAAAIACACQADACAOAAIAAAHg");
	this.shape_9.setTransform(2.1,37.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgsAAQAAgWALgNQAMgPAYAAQAZAAAKAPQAIAKAAAQQgBAIgJAAIgzAAQgBAmAbAAQARAAAJgSIAHADQgKAdggAAIgBAAQgtAAAAgzgAgMgfQgEAJABAMIAaAAQAHAAAAgGQgBgagPAAQgJAAgFALg");
	this.shape_10.setTransform(95.5,22.1502);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAlAyIAAgHIAJgCQADgCAAgFIAAgwQAAgUgQAAQgOAAgEAOIgBAKIAAAsQAAAFADACIAIACIAAAHIgxAAIAAgHIAJgCQACgCAAgFIAAgwQAAgUgPAAQgPAAgDAOIgBAJIAAAtQgBAFADACIAJACIAAAHIg1AAIAAgHQAKgBABgCQADgBAAgHIAAg5QAAgJgFgBIgIgBIAAgHIAmgFIACANIAPgJQAKgFAIAAQASAAAIAPIAPgJQALgGAIAAQAfAAAAAfIAAAyQAAAHADABQABACAJABIAAAHg");
	this.shape_11.setTransform(82.05,22.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAApAUAAQAVAAAAgqQAAgpgVAAQgUgBAAArg");
	this.shape_12.setTransform(66.775,22.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AALBFIAAgIQALAAADgCQACgCAAgIIAAgxIg2AAIAAAxQABAIACACQADACALAAIAAAIIg+AAIAAgIQALAAADgCQACgCAAgIIAAhhQAAgJgCgBQgDgCgLAAIAAgHIA+AAIAAAHQgMAAgCACQgCABgBAJIAAAoIA2AAIAAgoQAAgJgCgBQgDgCgLAAIAAgHIA+AAIAAAHQgLAAgCACQgDABAAAJIAABhQAAAIADACQACACALAAIAAAIg");
	this.shape_13.setTransform(53.8,20.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgnAyIAAgHQAJgBACgCQADgBAAgHIAAg5QAAgJgFgBIgHgBIAAgHIAkgFIABARQAKgKAFgEQAGgEAGAAQANAAAAANQAAAHgDAEQgEAFgGAAQgCAAgFgDQgHgFgEAAQgIAAAAARIAAArQAAAHADABQACACAMABIAAAHg");
	this.shape_14.setTransform(37.425,22.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgtAVIAAgwQAAgKgFgBIgHgBIAAgHIAngDIABABIAAA+QAAAWARAAQALAAAFgLQABgDAAgIIAAgpQAAgKgFgBIgHgBIAAgHIAngDIABABIAABPQAAAGACACIALACIAAAHIgnAAIgCgLIgNAIQgJAFgLAAQgdAAAAgdg");
	this.shape_15.setTransform(26.975,22.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAApAUAAQAVAAAAgqQAAgpgVAAQgUgBAAArg");
	this.shape_16.setTransform(14.925,22.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AghBFIAAgIQAOAAACgCQADgCAAgHIAAgfQAAgFgDgIIgfg3QgEgHgCgCQgEgCgHAAIAAgHIA9AAIAAAHIgLABQgGAAAEAGIAaA1IABAAQAPgbAKgZQACgGgFgBIgLgBIAAgHIAtAAIAAAHQgIABgEACQgDACgEAGQgJAPgUAnQgCAGAAAHIAAAgQgBAHADACQADACAOAAIAAAIg");
	this.shape_17.setTransform(4.1,20.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgKA5QgJgHAAgNIAAhAIgMAAIAAgKIANAAIARgYIAJAAIAAAYIAVAAIAAAKIgVAAIAAA5QAAASAMAAQAFAAAFgCIACAGQgQAKgMAAQgIAAgGgFg");
	this.shape_18.setTransform(80.5,3.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgeAnQgNgNAAgZQAAgXANgOQANgOAXAAQAOAAALAGQAMAGAAAJQAAAGgGADQgEADgGAAQgHAAgCgGQgFgTgKABQgGAAgFAJQgGALAAASQAAAUAHALQAHAJALAAQASAAAIgTIAHADQgIAegiAAQgVAAgLgMg");
	this.shape_19.setTransform(71.6,4.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgtAAQABgWAKgNQANgPAYAAQAYAAALAPQAIAKgBAQQAAAIgKAAIgzAAQAAAmAaAAQASAAAJgSIAHADQgLAdgfAAIgBAAQguAAAAgzgAgMgfQgEAJAAAMIAbAAQAGAAAAgGQAAgagPAAQgJAAgFALg");
	this.shape_20.setTransform(60.1,4.9502);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgKA5QgJgHAAgNIAAhAIgMAAIAAgKIANAAIARgYIAJAAIAAAYIAVAAIAAAKIgVAAIAAA5QAAASAMAAQAFAAAFgCIACAGQgQAKgMAAQgIAAgGgFg");
	this.shape_21.setTransform(52.5,3.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAAqAUgBQAVAAAAgqQAAgpgVAAQgUgBAAArg");
	this.shape_22.setTransform(43.075,4.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgnAyIAAgHQAJgBACgCQADgBAAgHIAAg5QAAgJgFgBIgHgBIAAgHIAkgFIABARIAPgOQAGgEAGAAQANAAAAANQAAAHgDAEQgEAFgGAAQgCAAgFgDQgHgFgEAAQgIAAAAARIAAArQAAAHADABQACACAMABIAAAHg");
	this.shape_23.setTransform(33.975,4.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("Ag4BFIAAgIQALAAACgCQADgCAAgHIAAhiQAAgIgDgCQgCgCgLgBIAAgGIA+AAQAYAAAMAGQAPAKAAAXQAAAYgTAKQgMAJgYAAQgIgBgFgBIAAAlQAAAHADACQADACANAAIAAAIgAgJg5QgCABAAAEIAAAyQAAAIAOAAQAXgBAAggQAAgQgHgJQgHgHgMAAQgHAAgCACg");
	this.shape_24.setTransform(23.225,2.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_25.setTransform(88.775,130.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAtQgMgGgGgMQgHgMAAgPQAAgPAHgLQAFgMAMgGQAMgGAOAAQAOAAALAGQAMAGAFALQAHALAAAPIgBAIIhEAAQABAKAFAEQAFAFAIAAQALAAAEgJIAhAAQgDAKgGAHQgHAIgKAFQgJAEgMAAQgOAAgLgGgAATgJQAAgIgGgEQgFgFgIAAQgGAAgGAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_26.setTransform(82,127.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_27.setTransform(74.675,125.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJA+QgIgEgEgHIAAAOIgfAAIAAiDIAfAAIAAAvQAEgHAIgFQAIgEAKAAQAMAAAKAGQAKAHAGALQAGALAAAPQAAAQgGALQgGAMgKAGQgKAHgMAAQgKAAgIgFgAgPgCQgGAGAAALQAAAMAGAGQAGAHAJAAQAJAAAGgHQAGgGAAgMQAAgLgGgGQgGgGgJAAQgJAAgGAGg");
	this.shape_28.setTransform(67.225,125.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAtQgKgHgFgLQgHgMABgPQgBgPAHgLQAFgMAKgGQAKgGANAAQAJAAAIAEQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgFAHgHAEQgIAEgJAAQgNAAgKgGgAgOgRQgHAGAAALQAAALAHAHQAGAHAJAAQAJAAAGgHQAGgHAAgLQAAgKgGgHQgGgHgJAAQgJAAgGAHg");
	this.shape_29.setTransform(55.65,127.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_30.setTransform(47.875,125.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBIIAAhjIAdAAIAABjgAgMgqQgFgFAAgHQAAgHAFgFQAFgFAHABQAIgBAFAFQAFAFAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_31.setTransform(43.475,125.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeAtQgKgHgFgLQgHgMABgPQgBgPAHgLQAFgMAKgGQAKgGANAAQAJAAAIAEQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgFAHgHAEQgIAEgJAAQgNAAgKgGgAgOgRQgHAGAAALQAAALAHAHQAGAHAJAAQAJAAAGgHQAGgHAAgLQAAgKgGgHQgGgHgJAAQgJAAgGAHg");
	this.shape_32.setTransform(35.4,127.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAyIgjhjIAhAAIAUBGIAWhGIAgAAIgjBjg");
	this.shape_33.setTransform(25.025,127.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAeA/IgHgWIguAAIgHAWIggAAIAth9IAjAAIAtB9gAAQARIgQgtIgPAtIAfAAg");
	this.shape_34.setTransform(15.25,126.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAvQgLgFgFgIQgHgHAAgKIAeAAQABAFAEADQAEAEAFAAQAGAAADgDQADgCAAgDQAAgFgEgCIgOgEQgKgDgIgDQgGgCgGgFQgFgGAAgKQAAgJAFgHQAEgHAKgEQAJgEAMAAQASAAALAJQALAJACAQIgdAAQgBgGgDgDQgEgDgGAAQgEAAgDACQgDACAAAEQgBAEAFACQAEADAKACIASAFQAGADAFAFQAGAGAAALQAAAJgFAGQgFAHgJAEQgJAEgNAAQgMAAgJgEg");
	this.shape_35.setTransform(69.25,107.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAUAyIAAg1QAAgKgGgFQgFgGgJAAQgIAAgEAGQgGAFAAAKIAAA1IgeAAIAAhiIAeAAIAAANQAEgHAJgEQAGgDALAAQARAAALALQAKALgBAUIAAA5g");
	this.shape_36.setTransform(59.4,107.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAtQgKgHgFgLQgHgMABgPQgBgPAHgLQAFgMAKgGQAKgGANAAQAJAAAIAEQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgFAHgHAEQgIAEgJAAQgNAAgKgGgAgOgRQgHAGAAALQAAALAHAHQAGAHAJAAQAIAAAHgHQAGgHAAgLQAAgKgGgHQgHgHgIAAQgJAAgGAHg");
	this.shape_37.setTransform(47.9,107.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_38.setTransform(39.975,106.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgvA/IAAh9IAxAAQAPAAAKAGQALAFAFAJQAFAJAAAMQAAALgFAJQgFAIgKAFQgLAGgPAAIgSAAIAAAtgAgQgGIAQAAQAIAAAFgEQAEgEAAgHQAAgIgEgEQgFgEgIAAIgQAAg");
	this.shape_39.setTransform(32.475,106.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAyIAAg1QABgKgGgFQgFgGgJAAQgIAAgEAGQgGAFAAAKIAAA1IgeAAIAAhiIAeAAIAAANQAFgHAHgEQAIgDAJAAQASAAALALQAJALABAUIAAA5g");
	this.shape_40.setTransform(90.15,88.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaAtQgLgGgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgGQALgGAOAAQAPAAALAGQAMAGAHAMQAHAMAAAOQAAAPgHAMQgHAMgMAGQgMAGgOAAQgOAAgMgGgAgOgSQgGAHAAALQAAAMAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_41.setTransform(78.975,88.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBHIAAhiIAdAAIAABigAgMgrQgFgEAAgHQAAgHAFgFQAFgEAHgBQAIABAFAEQAFAFAAAHQAAAHgFAEQgFAGgIAAQgHAAgFgGg");
	this.shape_42.setTransform(71.525,86.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAQA+QgQAAgJgIQgJgIAAgSIAAgoIgMAAIAAgYIAMAAIAAgZIAdAAIAAAZIAUAAIAAAYIgUAAIAAAoQAAAEACACQADACAEAAIALAAIAAAag");
	this.shape_43.setTransform(65.625,87.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAtQgMgGgFgMQgHgMAAgPQAAgPAHgLQAFgMAMgGQAMgGANAAQATAAANAJQAMAKAEASIghAAQgEgLgMAAQgHAAgFAGQgFAHAAALQAAAMAFAHQAFAGAHAAQAMAAAEgLIAhAAQgEARgMAKQgOAKgSAAQgNAAgMgGg");
	this.shape_44.setTransform(57.5,88.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAtQgMgGgHgMQgGgMAAgPQAAgPAGgLQAHgMALgGQAMgGAOAAQAOAAALAGQALAGAHALQAGALAAAPIgBAIIhDAAQAAAKAFAEQAGAFAHAAQALAAAEgJIAgAAQgCAKgHAHQgGAIgKAFQgJAEgMAAQgOAAgLgGgAATgJQAAgIgGgEQgFgFgIAAQgHAAgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_45.setTransform(46.65,88.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAQA+QgQAAgJgIQgJgIAAgSIAAgoIgMAAIAAgYIAMAAIAAgZIAdAAIAAAZIAUAAIAAAYIgUAAIAAAoQAAAEACACQADACAEAAIALAAIAAAag");
	this.shape_46.setTransform(38.075,87.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaAtQgLgGgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgGQALgGAOAAQAPAAALAGQAMAGAHAMQAHAMAAAOQAAAPgHAMQgHAMgMAGQgMAGgOAAQgOAAgMgGgAgOgSQgGAHAAALQAAAMAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_47.setTransform(29.425,88.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgeAyIAAhiIAeAAIAAAQQAFgIAIgFQAIgEAKAAIAAAgIgIAAQgMAAgFAFQgGAFAAALIAAAug");
	this.shape_48.setTransform(20.75,88.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgvA/IAAh9IAxAAQAPAAAKAGQALAFAFAJQAFAJAAAMQAAALgFAJQgFAIgKAFQgLAGgPAAIgSAAIAAAtgAgQgGIAQAAQAIAAAFgEQAEgEAAgHQAAgIgEgEQgFgEgIAAIgQAAg");
	this.shape_49.setTransform(11.675,86.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA1AyIAAg1QAAgKgEgFQgGgFgJAAQgIAAgFAFQgGAFAAAKIAAA1IgdAAIAAg1QAAgKgGgFQgFgFgIAAQgJAAgGAFQgEAFAAAKIAAA1IgfAAIAAhiIAfAAIAAAMQAEgGAIgEQAHgDAKAAQALAAAJAEQAHAFAGAJQAFgIAJgFQAIgFALAAQATAAALALQALALAAAUIAAA5g");
	this.shape_50.setTransform(77.4,68.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAtQgLgGgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgGQALgGAOAAQAPAAALAGQAMAGAHAMQAHAMAAAOQAAAPgHAMQgHAMgMAGQgMAGgOAAQgOAAgMgGgAgOgSQgGAHAAALQAAAMAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_51.setTransform(62.825,68.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQA+QgQAAgJgIQgJgIAAgSIAAgnIgMAAIAAgZIAMAAIAAgZIAdAAIAAAZIAUAAIAAAZIgUAAIAAAnQAAAEACACQADACAEAAIALAAIAAAag");
	this.shape_52.setTransform(53.875,67.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAvQgLgFgFgIQgHgHAAgKIAeAAQABAFAEADQAEAEAFAAQAGAAADgDQADgCAAgDQAAgFgEgCIgOgEQgKgDgIgDQgGgCgGgFQgFgGAAgKQAAgJAEgHQAFgHAKgEQAJgEAMAAQASAAALAJQALAJACAQIgdAAQgBgGgEgDQgDgDgGAAQgEAAgDACQgDACAAAEQgBAEAFACQAEADAKACIASAFQAGADAFAFQAGAGAAALQAAAJgFAGQgFAHgJAEQgJAEgNAAQgMAAgJgEg");
	this.shape_53.setTransform(45.85,68.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAtQgJgFgFgKQgFgJAAgNIAAg5IAfAAIAAA1QAAAKAFAFQAFAGAIAAQAJAAAFgGQAFgFAAgKIAAg1IAfAAIAABiIgfAAIAAgNQgEAGgIAEQgHAEgKAAQgLAAgJgFg");
	this.shape_54.setTransform(35.525,68.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeA4QgOgJgIgOQgIgOAAgTQAAgRAIgPQAIgPAOgHQAPgJARAAQAWAAAQAMQAQALAFAVIghAAQgEgHgHgFQgHgEgJAAQgNAAgJAKQgIAKAAAPQAAARAIAKQAJAJANAAQAJAAAHgEQAHgEAEgIIAhAAQgFAUgQAMQgQAMgWAAQgRAAgPgIg");
	this.shape_55.setTransform(23.725,67.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoiAAIRFAA");
	this.shape_56.setTransform(50.075,147.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-5.6,-7.5,111.39999999999999,155.8), null);


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
	this.shape.graphics.f("#14A751").s().p("AgnBLQgEgFAAgEQAAgGADgGQAEgFAFAAQADAAAGAEQAEAEAEAAQAFAAAFgOQACgFgDgKQgMgdgag6QgDgHgDgBIgKgDIAAgHIA5AAIAAAHIgIACQgEABABAFIAYA+IABAAQANgmAGgYQACgFgFgBIgKgCIAAgHIApAAIAAAHQgHACgDACQgDACgDAIIglBhQgGAVgJAJQgIAHgKAAQgGAAgGgDg");
	this.shape.setTransform(86.05,106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgcBOIAAgHQAKgBACgBQADgDAAgGIAAhxQAAgKgGgBIgIgBIAAgHIAogFIACABIAACIQAAAGACADQACABAKABIAAAHg");
	this.shape_1.setTransform(77.525,100.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgcBLIAAgHQAKgBACgBQACgCAAgHIAAg+QAAgKgFAAIgHgBIAAgHIAngHIACABIAABWQAAAHACACQACABAKABIAAAHgAgMguQgEgEAAgIQAAgHAEgEQAFgFAHgBQAHABAFAFQAEAEAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_2.setTransform(71.275,101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_3.setTransform(58.275,103.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAJArIgMAHQgIAEgJABQgQAAgIgJQgIgJAAgNQAAgTAWgGQAhgLAFgFIAAgJQABgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLANgHQANgJAVABQAngBAAAfIAAAvQAAAOAGACQAEABAGAAIAAAHQgMAHgPAAQgNgBgEgLgAgLACQgLAFAAANQAAAJAFAGQAFAEAGAAQAPABgBgRIAAgdg");
	this.shape_4.setTransform(42.9,103.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag3BJIAAgIQAMAAADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMAAIAAgIIBvAAIAAAmIgIAAQgFgRgFgFQgGgHgQAAIgPAAQgDAAgCACQgBAAAAAGIAAAzIAXAAQAKAAAEgEQADgEADgMIAIAAIAAAxIgIAAQgDgMgDgDQgEgFgKABIgXAAIAAAvQAAAIADACQACACAOAAIAAAIg");
	this.shape_5.setTransform(31.025,101.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgpA1IAAgHQAJgBACgCQACgBAAgHIAAg+QABgKgGgBIgHgBIAAgHIAngGIABASQALgKAFgEQAGgEAHAAQAOAAgBAOQAAAGgDAFQgEAGgGAAQgDAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACANABIAAAHg");
	this.shape_6.setTransform(89.9,81.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_7.setTransform(79.275,82.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag1AAQAAg1A1gBQA2ABAAA1QAAA2g2AAQg1AAAAg2gAgWAAQAAAtAWAAQAXAAAAgtQAAgsgXAAQgWAAAAAsg");
	this.shape_8.setTransform(66.575,81.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgjBJIAAgIQAOAAADgCQADgCAAgIIAAghQAAgGgEgHIggg8QgFgHgDgCQgCgCgJAAIAAgIIBBAAIAAAIIgLABQgGAAADAHIAdA5IABAAQAQgfAKgZQADgIgGgBIgMAAIAAgIIAxAAIAAAIQgJABgEABQgDADgFAGQgJARgVApQgEAHABAHIAAAiQAAAIADACQACACAPAAIAAAIg");
	this.shape_9.setTransform(55.2,79.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgmBOIAAgHQAJgBADgCQACgBAAgHIAAhKIgOAAIAAgKIAOAAIAAgGQAAgYAKgMQALgMASABQAMgBAHAHQAFAEAAAGQAAAFgEAEQgEADgFAAQgGAAgCgGQgGgOgFABQgGgBABANIACAgIAUAAIAAAKIgUAAIAABKQAAAGADACIANADIAAAHg");
	this.shape_10.setTransform(40.775,79.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag1AAQAAg1A1gBQA2ABAAA1QAAA2g2AAQg1AAAAg2gAgWAAQAAAtAWAAQAXAAAAgtQAAgsgXAAQgWAAAAAsg");
	this.shape_11.setTransform(30.075,81.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgwAAQAAgXAMgOQANgRAaAAQAaAAAMARQAIAKAAASQAAAIgLABIg3AAQAAAnAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAKAAANIAdAAQAHgBAAgHQAAgagRAAQgKAAgFALg");
	this.shape_12.setTransform(101.775,60.6002);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAOAAABAOQgBAGgDAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_13.setTransform(93.3,60.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAJArIgMAHQgJAEgIABQgQAAgIgJQgIgJAAgNQAAgTAWgGQAhgLAFgFIAAgJQAAgSgMAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLAMgHQANgJAWABQAngBAAAfIAAAvQAAAOAGACQAEABAFAAIABAHQgMAHgQAAQgMgBgEgLgAgLACQgLAFAAANQAAAJAFAGQAEAEAIAAQANABAAgRIAAgdg");
	this.shape_14.setTransform(82.25,60.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AhAABQAAghATgVQAUgXApAAQAeAAAQAJIAAAmIgIAAQgFgTgHgHQgKgMgSAAQgYAAgLAaQgHARAAAYQAAAZAIASQALAZAZAAQARAAAKgMQAHgIAHgVIAIAAIgDAoQgRAKggAAQhNAAAAhMg");
	this.shape_15.setTransform(69.025,58.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgwAAQAAgXAMgOQANgRAaAAQAaAAAMARQAIAKAAASQAAAIgLABIg3AAQAAAnAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAKAAANIAdAAQAHgBAAgHQAAgagRAAQgKAAgFALg");
	this.shape_16.setTransform(48.625,60.6002);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AApBOQgUAAgKgMQgKgOgOgcIAAgBIAcgqQAFgFAGAAIAdAAIAAAGQgaAFgIAIIgNAMQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAABQAQAaAUAXQAHAKAJACIAAAGgAg6BOIAAgIQAJAAADgBQACgCAAgHIAAhxQAAgKgFgBIgIgBIAAgHIAogFIACABIAACIQAAAGADADQACABAJAAIAAAIg");
	this.shape_17.setTransform(37.95,57.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAJArIgMAHQgIAEgJABQgQAAgIgJQgIgJAAgNQAAgTAWgGQAhgLAFgFIAAgJQABgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLANgHQANgJAVABQAngBAAAfIAAAvQAAAOAGACQAEABAGAAIAAAHQgMAHgPAAQgNgBgEgLgAgLACQgLAFAAANQAAAJAFAGQAFAEAGAAQAPABgBgRIAAgdg");
	this.shape_18.setTransform(25.35,60.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgkBJIAAgIIAMAAQAFAAACgDQACgDAAgFIAAh1IgKAAQgOAAgGAHQgEAFgGASIgHAAIAAgnIB9AAIAAAnIgIAAQgFgTgEgEQgGgHgPAAIgJAAIAAB1QAAAFABADQADADAFAAIAMAAIAAAIg");
	this.shape_19.setTransform(14.65,58.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgmBKQgGgDABgGQAAgGADgFQAFgFAEAAQADAAAGAEQAEAEADAAQAHAAAEgOQABgGgDgJQgLgcgag8QgDgGgDgCIgKgCIAAgHIA6AAIAAAHIgIACQgGABACAFIAYA+IAAAAQAOgmAGgYQABgFgFgBIgJgCIAAgHIAqAAIAAAHQgIABgEADQgCACgDAIIgkBhQgIAWgIAIQgHAHgLAAQgGAAgFgEg");
	this.shape_20.setTransform(86.35,41.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgcBPIAAgIQAKgBACgBQADgCAAgHIAAhxQAAgKgGgBIgIgBIAAgHIAogGIACACIAACIQAAAHACACQACABAKABIAAAIg");
	this.shape_21.setTransform(77.575,36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgcBMIAAgIQAKgBACgBQACgCAAgHIAAg+QAAgJgFgBIgHgBIAAgHIAngHIACABIAABWQAAAHACACQACABAKABIAAAIgAgMguQgEgFAAgHQAAgHAEgEQAFgGAHAAQAHAAAFAGQAEAEAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_22.setTransform(71.175,36.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_23.setTransform(58.125,39.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAJAqIgMAIQgJAFgIAAQgQgBgIgIQgIgJAAgNQAAgTAWgHQAhgKAGgFIAAgJQgBgSgNAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgDAAgHQAAgKANgIQANgHAVAAQAnAAAAAeIAAAvQAAAOAGACQAEACAGgBIAAAIQgMAFgPABQgNAAgEgNgAgLACQgLAGAAANQAAAIAFAFQAFAGAGAAQAOgBABgQIAAgdg");
	this.shape_24.setTransform(42.35,39.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag3BKIAAgIQAMgBADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMgBIAAgHIBvAAIAAAmIgIAAQgFgRgFgGQgGgGgQAAIgPAAQgDAAgCACQgBABAAAEIAAA0IAXAAQAKAAAEgEQADgDADgMIAIAAIAAAwIgIAAQgDgLgDgEQgEgFgKAAIgXAAIAAAwQAAAJADABQACACAOABIAAAIg");
	this.shape_25.setTransform(30.725,37.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIACASQAKgKAFgEQAHgEAFAAQAPAAAAAOQAAAGgEAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_26.setTransform(91.75,17.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_27.setTransform(81.125,17.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag2A5QgRgVgBgkQABgjARgVQAUgUAiAAQAkAAASAUQATAVgBAjQABAkgTAVQgSAUgkAAQgjAAgTgUgAgkAAQAABEAkAAQAlAAAAhEQAAhDglAAQgkAAAABDg");
	this.shape_28.setTransform(66.4,15.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMA9QgIgHAAgOIAAhEIgNAAIAAgKIAOAAIASgbIAKAAIAAAbIAWAAIAAAKIgWAAIAAA8QgBAUANAAQAGAAAFgCIACAGQgRALgNgBQgIABgIgGg");
	this.shape_29.setTransform(49.8,16.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaAAQAaAAAMAQQAIALAAARQAAAJgLAAIg3AAQAAAoAcAAQATABAKgUIAHAEQgLAegiAAIgBAAQgxAAAAg2gAgNggQgEAIAAANIAdAAQAHAAAAgHQAAgagRAAQgKAAgFAMg");
	this.shape_30.setTransform(40.175,17.9002);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag5BKIAAgIQAMgBACgCQADgCAAgIIAAhpQAAgIgDgCQgCgCgMgBIAAgIIBEAAIAAAIQgNABgDACQgDACAAAIIAABkQAAAKAFADQADAEAPAAQARgBAHgHQAFgHAGgTIAIAAIgDArg");
	this.shape_31.setTransform(28.475,15.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA3QgLAAgHgGQgGgGgBgNIAAgvIgKAAIAAgPIAKAAIAAgWIARAAIAAAWIAWAAIAAAPIgWAAIAAAvQABAFACACQACADAGAAIALAAIAAAPg");
	this.shape_32.setTransform(107.4,-15.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWAsIAAgvQAAgNgGgFQgFgHgLAAQgJAAgGAHQgGAFAAANIAAAvIgSAAIAAhWIASAAIAAAKQAFgFAGgDQAIgDAGgBQALABAIAEQAIAEAEAIQAFAJAAAMIAAAyg");
	this.shape_33.setTransform(99.8,-14.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_34.setTransform(90.475,-14.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA1AsIAAgvQAAgNgFgFQgHgHgKAAQgKAAgGAHQgGAFAAANIAAAvIgRAAIAAgvQAAgNgFgFQgHgHgKAAQgKAAgGAHQgGAFAAANIAAAvIgSAAIAAhWIASAAIAAAKQAFgFAHgDQAHgDAHgBQALAAAIAFQAHAFAEAHQAEgHAJgFQAJgFAJAAQALABAIAEQAIAEAEAIQAFAJAAAMIAAAyg");
	this.shape_35.setTransform(77.95,-14.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_36.setTransform(65.525,-14.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgaA6QgMgJgCgOIASAAQACAHAHAEQAGAEAJAAQALAAAHgGQAGgHABgNIAAgOQgFAGgIAEQgIAEgJAAQgLAAgKgGQgJgFgGgLQgFgJAAgNQAAgOAFgKQAGgKAJgGQAKgFALAAQAKAAAHAEQAIAEAFAGIAAgNIASAAIAABYQAAAMgFAKQgFAJgKAGQgKAFgNAAQgRAAgLgIgAgMguQgGADgEAHQgDAGAAAKQAAAJADAGQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgFQADgHABgJQgBgJgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_37.setTransform(55.65,-12.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAKAAAIAEQAHAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgKgGgAgMgZQgGADgEAHQgDAGAAAJQAAAJADAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHABgJQgBgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_38.setTransform(45.4,-14.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWAsIAAgvQAAgNgGgFQgFgHgLAAQgJAAgGAHQgGAFAAANIAAAvIgSAAIAAhWIASAAIAAAKQAFgFAGgDQAIgDAGgBQALABAIAEQAIAEAEAIQAFAJAAAMIAAAyg");
	this.shape_39.setTransform(35.8,-14.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgGgLQgFgKAAgNQAAgNAFgKQAGgKAJgGQAKgFALAAQAKAAAHAEQAIAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgKgGgAgMgZQgGADgEAHQgDAGAAAJQAAAJADAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHAAgJQAAgIgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_40.setTransform(25.85,-14.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAoA3IAAhLIgiBLIgLAAIgihLIAABLIgSAAIAAhtIATAAIAmBVIAnhVIATAAIAABtg");
	this.shape_41.setTransform(14.525,-15.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA3QgLAAgHgGQgGgGgBgNIAAgvIgKAAIAAgPIAKAAIAAgWIARAAIAAAWIAWAAIAAAPIgWAAIAAAvQABAFACACQACADAGAAIALAAIAAAPg");
	this.shape_42.setTransform(71.85,-30.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQApQgIgDgFgHQgFgGAAgIIATAAQAAAFAFAEQAFAEAGAAQAIAAAEgDQAEgDAAgFQAAgFgEgCIgOgFIgQgFQgHgCgEgFQgFgFAAgJQAAgHAEgGQAFgGAHgDQAIgDAJAAQAPAAAJAHQAJAIABANIgSAAQgBgGgEgEQgEgDgHAAQgHAAgEADQgDACAAAFQAAADACADQADACADABIAKAEIAQAFQAGACAEAFQAFAFAAAIQAAAIgEAGQgEAFgIAEQgHADgLAAQgJAAgIgEg");
	this.shape_43.setTransform(65.125,-29.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_44.setTransform(56.975,-29.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIAmAAQAMAAAJAEQAJAEAEAIQAFAHAAAKQAAAIgEAHQgEAHgJAFQgJAEgNAAIgUAAIAAAtgAgUgDIAUAAQAKAAAFgFQAFgFAAgIQAAgTgUAAIgUAAg");
	this.shape_45.setTransform(48.175,-30.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbBAIASgqIgjhVIAVAAIAXBBIAahBIATAAIg1B/g");
	this.shape_46.setTransform(101.125,-43.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAsIAAhWIASAAIAAANQADgHAGgEQAHgDAJgBIAAATIgEAAQgLAAgGAGQgEAFAAANIAAAtg");
	this.shape_47.setTransform(93.825,-45.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_48.setTransform(86.275,-45.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAsIghhXIATAAIAYBHIAZhHIATAAIghBXg");
	this.shape_49.setTransform(77.125,-45.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHAAgJQAAgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_50.setTransform(67.2,-45.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbA3IAAhtIASAAIAABfIAlAAIAAAOg");
	this.shape_51.setTransform(59.675,-46.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAsIAAhWIASAAIAAANQADgHAGgEQAHgDAJgBIAAATIgEAAQgLAAgGAGQgEAFAAANIAAAtg");
	this.shape_52.setTransform(49.425,-45.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgIA9IAAhWIARAAIAABWgAgHgoQgDgEgBgFQABgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_53.setTransform(44.55,-46.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXAnQgKgFgGgLQgFgKAAgNQAAgNAFgKQAGgKAKgGQAJgFALAAQAJAAAIAEQAIAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgJgGgAgMgZQgGADgEAHQgDAGAAAJQAAAJADAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHAAgJQAAgIgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_54.setTransform(37.9,-45.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNA4QgJgEgEgGIAAAMIgSAAIAAh1IASAAIAAAsQAEgHAJgEQAHgEAKAAQALAAAJAGQAKAFAGALQAFAJAAANQAAANgFALQgGAKgKAGQgJAGgLAAQgKAAgHgEgAgMgLQgGAEgEAHQgEAFAAAJQAAAJAEAHQAEAHAGADQAGAEAGAAQAHAAAGgEQAGgDAEgHQADgHAAgJQAAgJgDgGQgEgGgGgEQgGgDgHAAQgGAAgGADg");
	this.shape_55.setTransform(28.25,-46.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAfA3IgIgWIgtAAIgIAWIgTAAIAohtIATAAIAoBtgAASASIgSgzIgRAzIAjAAg");
	this.shape_56.setTransform(17.5,-46.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(6.5,-54.1,103.5,169), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AANAgIgNgqIAAAAIgNAqIgNAAIgSg1QgBgDgCgBIgFgCIAAgEIAgAAIAAAEIgDABQgEAAACAEIAKAlIAAAAIANguIAMAAIAPAuIABAAIAJglQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgBIAAgEIAbAAIAAAEIgHACIgDAFIgRA0g");
	this.shape.setTransform(89.3,13.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAAQAAghAgAAQAiAAgBAhQABAigiAAQggAAAAgigAgNABQgBAcAOAAQAOAAAAgdQAAgbgOAAQgOAAABAcg");
	this.shape_1.setTransform(80.2,13.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAuIgyhLIAAAAIAAArIAAATQABAGAEABIAJABIAAAFIghAAIAAgFIAIgBQADgCAAgFIABgTIAAguQAAgFgCgBQgCgCgHAAIAAgFIAeAAIArBAIAAAAIAAggIgBgUQAAgFgDgBIgJgBIAAgFIAgAAIAAAFIgHABQgDACgBAEIgBAUIAAA7g");
	this.shape_2.setTransform(71.25,11.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAcIgBgTIAFAAQAGATANABQAEAAACgDQADgCAAgEQAAgHgNgGQgLgEgDgDQgFgEAAgIQAAgKAHgGQAGgFALAAQAMAAAHAEIAAASIgEAAQgCgIgDgDQgFgFgFAAQgDAAgDADQgDACABADQgBAHANAFQALAEAEADQAFAFAAAIQAAAKgHAGQgIAFgLAAQgOAAgIgGg");
	this.shape_3.setTransform(58.35,13.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAiQgFgIAAgMIAAgwQAAgFgCgBIgIgCIAAgEIApAAIAAAEIgJACQgCABAAAFIAAAxQAAAaARAAQATAAAAgaIAAgxQAAgFgCgBIgJgCIAAgEIAoAAIAAAEIgJACQgBABAAAFIAAAwQAAALgEAIQgIAOgaAAQgYAAgIgNg");
	this.shape_4.setTransform(50.275,11.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgGIAIAAIALgQIAGAAIAAAQIAOAAIAAAGIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_5.setTransform(39.825,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAaQgJgJABgQQgBgPAJgJQAIgKAQAAQAJAAAHAEQAIAEAAAGQAAAEgDACQgDACgEAAQgFAAgBgEQgEgMgGAAQgEAAgEAGQgDAHAAAMQgBANAGAIQAEAGAHAAQAMAAAGgNIAEACQgGAUgWAAQgOAAgHgIg");
	this.shape_6.setTransform(33.9,13.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAaIgHAGQgGACgFAAQgKAAgFgFQgFgGAAgIQAAgMAOgEQAUgGADgDIAAgGQAAgLgIAAQgHAAgEANQgCAFgEAAQgDAAgDgCQgEgCAAgDQAAgIAHgEQAJgFANAAQAYAAAAATIAAAdQAAAJAEABIAGABIAAAEQgIAEgJAAQgIAAgCgIgAgGABQgHAEAAAIQAAAFADAEQACACAFAAQAIABAAgLIAAgRg");
	this.shape_7.setTransform(26.475,13.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgGIAIAAIALgQIAGAAIAAAQIAOAAIAAAGIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_8.setTransform(21.125,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAhIAAgFIAHgBQABgBAAgEIAAggQAAgNgLAAQgHAAgEAIIgBAHIAAAeQAAAEACABIAFABIAAAFIgjAAIAAgFQAHAAABgBQABgBAAgEIAAgnQAAgGgDAAIgEgBIAAgEIAYgEIABAJIAMgGQAGgDAFAAQATAAAAAUIAAAiQABAEABABQABABAGAAIAAAFg");
	this.shape_9.setTransform(15.15,12.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAAQABghAgAAQAiAAAAAhQAAAigiAAQggAAgBgigAgOABQAAAcAOAAQAOAAAAgdQAAgbgOAAQgOAAAAAcg");
	this.shape_10.setTransform(7.05,13.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnABQAAgVALgNQANgOAZAAQASAAALAGIAAAXIgFAAQgEgLgEgFQgGgHgLAAQgPAAgHAQQgEAKAAAPQAAAPAFALQAHAQAPAAQAKAAAHgHQAEgFAEgNIAFAAIgBAZQgLAGgUAAQgvAAAAgvg");
	this.shape_11.setTransform(-2.375,11.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("AolCkQgeAAgUgVQgVgUAAgdIAAi7QAAgdAVgUQAUgVAeAAIRLAAQAeAAAUAVQAVAUAAAdIAAC7QAAAdgVAUQgUAVgeAAg");
	this.shape_12.setTransform(43.6,16.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-18.4,0,124.1,32.8), null);


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
	this.instance.setTransform(113.45,48,0.0831,0.0831,0,0,0,476.9,62.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABoIAAjPMD4xAAAIAADPg");
	this.shape.setTransform(113.0027,41.1258,0.0831,0.0831);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgygSkIArBdMggzASkg");
	this.shape_1.setTransform(40.3567,24.7004,0.0831,0.0831);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gngMl6QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA+ATQB+AmAMF7QAMF7htHwQhtHyinFFQhNCZhLBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(21.1727,44.7738,0.0831,0.0831);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzigQj0lUjFoOQjFoOgjmVQgRjAAch0QAdh4BIgXQBJgXBoBPQBkBNB0ChQDyFTDGIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(31.8559,44.1419,0.0831,0.0831);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nvhTmMQgoi7ALh3QAMh7BBggQBBggBrBAQBoA+CACQQEOEvD7HwQD7HuBTGMQAoC8gLB3QgMB7hBAhQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(21.5908,19.5184,0.0831,0.0831);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(117.15,26.65,0.0832,0.0832,0,0,0,851.1,157.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AheB+ICykCIALAHIizECg");
	this.shape_5.setTransform(36.1053,18.3645,0.6939,0.6939);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("AgHAoQg/gIgrgQQgUgIgKgIQgKgJABgIQABgIAOgGQANgFAWgDQAvgHA+AHQBAAIAqARQAUAIALAHQAKAJgBAIQgCAIgNAGQgNAGgWADQgWACgZAAQgdAAgigDg");
	this.shape_6.setTransform(12.3224,29.8186,0.6939,0.6939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(1.7,9.1,196.70000000000002,45.8), null);


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
	this.ad_clickBtn.setTransform(80,125,0.5333,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(360));

	// New
	this.instance = new lib.Newtext();
	this.instance.setTransform(108.8,398.65,1,1,0,0,0,95.5,11.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(160));

	// OSHA
	this.instance_1 = new lib.OSHALogo_1();
	this.instance_1.setTransform(54.4,431.4,1,1,0,0,0,40.4,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(83.1,304.05,1.283,1.283,0,0,0,51.7,75.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).to({_off:true},80).wait(169));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.setTransform(82,612.55,1.1,1.1,0,0,0,46.1,16.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:590.55,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// Logo
	this.instance_4 = new lib.Logo();
	this.instance_4.setTransform(62,536,0.72,0.72,0,0,0,100,32.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:79.95,alpha:1},9,cjs.Ease.get(1)).wait(342));

	// F1
	this.instance_5 = new lib.F1();
	this.instance_5.setTransform(67.85,371.55,1.283,1.283,0,0,0,68,65.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:93.45,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(259));

	// Sh
	this.instance_6 = new lib.Sh();
	this.instance_6.setTransform(158,632.5,1,1,0,0,0,175.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Img2
	this.instance_7 = new lib.Img2_1();
	this.instance_7.setTransform(54.05,94.5,0.9,0.9,0,0,0,150,105);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// Layer_3
	this.instance_8 = new lib.mosquito("synched",0);
	this.instance_8.setTransform(42.15,41.7,0.4914,0.7292,72.6681,0,0,8.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(360));

	// Layer_4
	this.instance_9 = new lib.mosquito("synched",0);
	this.instance_9.setTransform(76.35,80.2,0.8,0.8,0,0,0,8.4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Img1
	this.instance_10 = new lib.Img1_1();
	this.instance_10.setTransform(84.05,94.5,0.9,0.9,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-1,300,678.9);


// stage content:
(lib.WFSB_217823_MM_160x600 = function(mode,startPosition,loop,reversed) {
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