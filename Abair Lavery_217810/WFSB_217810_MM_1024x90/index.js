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



(lib.IMG1 = function() {
	this.initialize(img.IMG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.IMG2 = function() {
	this.initialize(img.IMG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.OSHALogo = function() {
	this.initialize(img.OSHALogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,91);


(lib.TICK = function() {
	this.initialize(img.TICK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,159);// helper functions:

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
	this.shape.setTransform(145.875,54.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgdIgHAAIAAgMIAHAAIAAgPIAPAAIAAAPIANAAIAAAMIgNAAIAAAdQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_1.setTransform(142.475,52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAggQAAgIgEgEQgEgDgGgBQgFABgEADQgEAEAAAIIAAAgIgPAAIAAg8IAPAAIAAAIQAEgFAEgBQAFgDAFAAQALAAAGAHQAHAHAAAMIAAAjg");
	this.shape_2.setTransform(137.2,52.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAGgDQAGgFAIAAQAGAAAFADQAFADADAEIAAgJIAQAAIAAA9IgQAAIAAgJQgDAEgFADQgFACgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCAEAAAEQAAAGACAEQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgEAAgGQAAgEgCgEQgCgFgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_3.setTransform(129.975,52.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAg8IAOAAIAAA8gAgGgbQgDgCAAgEQAAgEADgCQADgDADAAQAEAAACADQADACABAEQgBAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(125.1,51.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_5.setTransform(122.175,51.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIAQAAIAAAJQADgEAFgDQAFgDAGAAQAIAAAGAFQAGADAEAIQAEAGAAAKQAAAJgEAGQgEAHgGAFQgGADgIAAQgGAAgFgCQgFgDgDgEIAAAlgAgHgcQgEABgCAFQgCAEAAAFQAAAGACAEQACADAEACQAEACADAAQAEAAAEgCQADgCADgDQACgEAAgGQAAgFgCgEQgDgEgDgDQgEgCgEAAQgDAAgEADg");
	this.shape_6.setTransform(117.225,54.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAfIAAggQAAgIgEgDQgDgFgGAAQgHAAgDAFQgEADAAAIIAAAgIgOAAIAAggQAAgIgEgDQgEgFgGAAQgGAAgEAFQgEADAAAIIAAAgIgPAAIAAg8IAPAAIAAAIQADgFAFgBQAFgDAFAAQAHAAAGADQAFADADAGQADgGAFgCQAGgEAHAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_7.setTransform(107.675,52.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgHQgDgGAAgKQAAgJAEgGQAEgIAHgDQAHgFAIAAQAJAAAHAFQAHADAEAIQAEAGAAAJQAAAKgEAGQgEAHgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAFAAAIQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgFQgFgEgGAAQgGAAgEAEg");
	this.shape_8.setTransform(98.825,52.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAiQgKgFgFgJQgEgIAAgMQAAgKAEgJQAFgJAKgFQAIgFALAAQAMAAAKAHQAKAGAEAMIgSAAQgDgGgFgCQgFgDgGAAQgGAAgFADQgFADgDAGQgDAGAAAGQAAAIADAGQADAFAFAEQAFADAGAAQAGAAAFgDQAFgDADgFIASAAQgEALgKAHQgKAGgMAAQgLAAgIgFg");
	this.shape_9.setTransform(91.55,51.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAtIANgfIgZg6IASAAIAOAqIAQgqIARAAIglBZg");
	this.shape_10.setTransform(82.175,54.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgdIgHAAIAAgMIAHAAIAAgPIAPAAIAAAPIANAAIAAAMIgNAAIAAAdQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_11.setTransform(76.625,52);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAcQgHgFgEgHQgEgGAAgKQAAgJAEgGQAEgIAHgDQAGgFAIAAQAJAAAHAFQAHADAEAHQADAHAAAIIAAAFIgsAAQABAIAEADQAEAEAFAAQAJgBADgGIARAAQgDAIgHAGQgIAFgLAAQgHAAgHgDgAAPgEQgBgGgEgEQgEgEgGAAQgFAAgEAEQgEADAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(71.075,52.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgGAAIAAgMIAGAAIAAgDQAAgLAGgGQAGgFANAAIAAANQgGAAgCACQgCACAAAFIAAADIAKAAIAAAMIgKAAIAAAwg");
	this.shape_13.setTransform(65.8,51.5229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgHQgEgHAAgJQAAgJAEgGQAEgIAGgDQAGgFAIAAQAGAAAFADQAFADADAEIAAgJIAQAAIAAA9IgQAAIAAgJQgDAEgFADQgFACgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCAEAAAEQAAAGACAEQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgEAAgGQAAgEgCgEQgCgFgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_14.setTransform(59.825,52.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAlQgGgDgEgFQgEgFAAgHIARAAQAAAEADADQADADAEAAQAGAAACgDQAEgCAAgEQAAgEgDgCIgEgEIgIgDIgNgEQgEgBgDgFQgEgEAAgHQAAgHAEgFQADgFAHgCQAGgEAHAAQAMABAGAGQAIAFABALIgRAAQgBgFgCgCQgEgDgEABQgEAAgDABQgCADAAAFQAAACABACIAGAEIAHADIAMAEQAFABAEAEQADAFAAAIQAAAFgDAGQgDAFgHADQgGADgJAAQgGAAgHgCg");
	this.shape_15.setTransform(53.35,51.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgDgDgFQgEgFAAgIQAAgHAEgGQAFgGAIgDIgEgHQgCgEAAgEQAAgEADgFQADgEAFgDQAFgCAHAAQAGAAAFACQAFADACAFQADAEgBAFIgOAAQAAgDgBgCQgCgCgDAAQgEAAgCACQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQAAADACADIAFAGIATATIAAgBIAAAAIAHgKIAQAAIgIANIgFAIIATATIgTAAIgIgJQgLAKgPAAQgIAAgGgDgAgZAPQAAAFAEADQAEAEAGAAQAJAAAGgGIgSgTQgLAEAAAJg");
	this.shape_16.setTransform(168.475,39.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(158.375,39.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgHAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAHQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_18.setTransform(151.275,40.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgHAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAHQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_19.setTransform(144.425,40.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIAvAAIAAANIgfAAIAAAUIAXAAIAAALIgXAAIAAAhg");
	this.shape_20.setTransform(138.575,39.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(129.825,39.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAghQAAgHgEgEQgEgEgGABQgFgBgEAEQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAHQADgDAEgCQAFgDAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_22.setTransform(123.35,40.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgIAEgIQAEgGAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFACQgFAEgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAFAAAEQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_23.setTransform(116.625,40.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAnIgFgPIgeAAIgFAPIgPAAIAbhNIARAAIAcBNgAALAMIgLggIgKAgIAVAAg");
	this.shape_24.setTransform(107.3,39.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAnIAAghIghAAIAAAhIgPAAIAAhNIAPAAIAAAhIAhAAIAAghIAPAAIAABNg");
	this.shape_25.setTransform(99.4,39.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAkQgGgCgEgFQgEgFAAgIIARAAQAAAFADADQADACAEAAQAGAAACgCQAEgDAAgEQAAgDgDgCIgEgEIgIgDIgNgEQgEgBgEgEQgDgFAAgHQAAgHADgFQAEgFAHgDQAGgDAHAAQAMAAAGAHQAIAFABAKIgRAAQAAgEgDgCQgEgDgEAAQgEABgDACQgDACABAEQAAAEABACIAGADIAHADIAMAEQAFACAEAEQADAEAAAHQAAAHgDAEQgDAGgHADQgGADgJABQgGAAgHgEg");
	this.shape_26.setTransform(91.5,39.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgKQAFgJAJgEQAJgGAKAAQALAAAJAGQAJAEAFAJQAFAKAAAKQAAALgFAJQgFAJgJAFQgJAFgLABQgKgBgJgFgAgLgVQgGACgDAHQgDAFAAAHQAAAHADAHQADAFAGAEQAFACAGAAQAHAAAFgCQAFgEADgFQADgHAAgHQAAgHgDgFQgDgHgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_27.setTransform(83.925,39.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAjQgFgFAAgIQAAgIAFgGQAEgEAJAAQAHAAAFAEQAEAGABAIQgBAIgEAFQgFAFgHAAQgJAAgEgFgAASAWQAAAJAGAAQAHAAAAgJQAAgIgHAAQgGAAAAAIgAgcAnIAqhNIAPAAIgqBNgAgkgIQgEgEAAgJQAAgIAEgFQAGgFAHAAQAIAAAFAFQAEAFABAIQgBAJgEAEQgFAFgIAAQgHAAgGgFgAgdgVQAAAJAGAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAAAAAQACgCAAgFQAAgIgGAAQgGAAAAAIg");
	this.shape_28.setTransform(71.35,39.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAeQgGgLgBgTQABgSAGgLQAHgLAPAAQAQAAAHALQAHALAAASQAAATgHALQgHALgQAAQgPAAgHgLgAgJgWQgCADgBAGIgBANIABAOQABAFACAEQAEADAFAAQAGAAADgDQAEgEABgFIABgOIgBgNQgBgGgEgDQgDgEgGAAQgFAAgEAEg");
	this.shape_29.setTransform(64.25,39.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgTQAAgSAGgLQAHgLAPAAQAQAAAHALQAHALAAASQAAATgHALQgHALgQAAQgPAAgHgLgAgJgWQgCADgBAGIgBANIABAOQABAFACAEQAEADAFAAQAGAAADgDQAEgEABgFIABgOIgBgNQgBgGgEgDQgDgEgGAAQgFAAgEAEg");
	this.shape_30.setTransform(57.4,39.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAoIAAhBIgKAAIAAgOIAZAAIAABPg");
	this.shape_31.setTransform(51.725,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(48,-6,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(48,-6,125.5,66.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAOQgGgGAAgHQAAgIAGgGQAGgFAIAAQAJAAAGAFQAGAGAAAIQAAAHgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape.setTransform(192.325,-81.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBWIAbg7IgvhwIAoAAIAaBJIAbhJIAmAAIhICrg");
	this.shape_1.setTransform(186.525,-82.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_2.setTransform(172.525,-85.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg2IAkAAIAACaIgkAAIAAgRQgFAJgJAEQgKAGgLgBQgPABgLgIgAgRgCQgHAHAAANQAAANAHAJQAIAHAJABQALgBAHgHQAIgIAAgOQAAgNgIgHQgHgHgLgBQgJABgIAHg");
	this.shape_3.setTransform(159.375,-87.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_4.setTransform(146.375,-85.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAXAAIAAAdIgXAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_5.setTransform(136.3,-86.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_6.setTransform(121.825,-85.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_7.setTransform(108.475,-85.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBUIAAh0IAjAAIAAB0gAgOgyQgHgFABgJQgBgIAHgFQAFgGAJAAQAJAAAHAGQAFAFABAIQgBAJgFAFQgHAGgJgBQgJABgFgGg");
	this.shape_8.setTransform(99.25,-87.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGACACQADACAGAAIANAAIAAAfg");
	this.shape_9.setTransform(92.25,-86.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_10.setTransform(80.975,-85.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_11.setTransform(70.05,-86.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA1QgKgFgGgMQgFgLAAgQIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_12.setTransform(58.775,-85.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9BYIAAitIAkAAIAAARQAFgJAKgEQAJgGALAAQAPABAMAHQALAIAHANQAHANAAATQAAASgHAMQgHAPgLAHQgMAHgPAAQgLAAgJgFQgKgFgFgIIAABJgAgSgwQgHAIAAAOQAAANAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgNQAAgNgHgJQgIgHgKAAQgKAAgIAHg");
	this.shape_13.setTransform(45.575,-82.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_14.setTransform(31.925,-85.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_15.setTransform(21.425,-85.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_16.setTransform(168.925,-114.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA1QgKgFgGgMQgFgMAAgPIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_17.setTransform(158.625,-114.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_18.setTransform(145.625,-114.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBWIAbg7IgvhwIAoAAIAaBJIAbhJIAmAAIhICrg");
	this.shape_19.setTransform(133.575,-111.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg3IAkAAIAACbIgkAAIAAgRQgFAJgJAEQgKAGgLAAQgPAAgLgIgAgRgCQgHAHAAANQAAAOAHAHQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgNgIgHQgHgHgLAAQgJAAgIAHg");
	this.shape_20.setTransform(116.275,-116.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_21.setTransform(106.225,-114.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_22.setTransform(94.925,-114.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkA1QgKgFgGgMQgFgMAAgPIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_23.setTransform(82.025,-114.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmBMQgQgMgCgVIAjAAQACAHAGAEQAGADAJAAQALAAAGgGQAHgGAAgOIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHQgMgHgHgOQgHgNAAgSQAAgSAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0QAAAQgHANQgGANgNAIQgNAHgUAAQgZAAgQgMgAgRgwQgHAIAAANQAAANAHAIQAIAHAJAAQALAAAHgHQAIgHAAgOQAAgNgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_24.setTransform(68.875,-111.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_25.setTransform(55.675,-114.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBSIAAhWIgNAAIAAgeIANAAIAAgDQAAgWAMgLQAMgLAYAAIAFAAIAAAeQgKAAgEADQgEAEAAAJIAAABIATAAIAAAeIgTAAIAABWg");
	this.shape_26.setTransform(46.175,-116.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_27.setTransform(35.525,-114.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgIgLQgHgJgBgPIAnAAQAAAIAFAEQAFAEAHABQAIAAAFgEQAEgEAAgGQAAgGgEgDIgJgGIgOgFQgOgFgJgEQgJgEgHgIQgGgJgBgNQAAgVAPgMQAQgMAXAAQAYAAAPAMQAOAMABAVIgmAAQAAgIgFgDQgFgFgHAAQgGAAgEAEQgEADAAAHQAAAHAGAEQAHAEAOAFIAWAJQAKADAGAIQAHAJAAANQAAAMgHALQgGALgMAFQgNAHgQAAQgPgBgNgFg");
	this.shape_28.setTransform(22.95,-115.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFyIAArj");
	this.shape_29.setTransform(246.5,-101.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(14.5,-139.4,233,76), null);


(lib.Img2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG2();
	this.instance.setTransform(-10,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2, new cjs.Rectangle(-10,1,1024,90), null);


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
	this.instance = new lib.IMG1();
	this.instance.setTransform(-7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-7,0,1024,90), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape.setTransform(116.225,70.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQAOAAALAFQALAHAHAKQAGAMAAAOIgBAIIhCAAQAAAJAGAFQAFAEAHAAQAKAAAFgJIAgAAQgDAKgGAIQgHAHgJAEQgKAFgMAAQgNAAgLgGgAASgJQAAgHgFgEQgFgFgIgBQgHAAgFAFQgFAFgBAHIAkAAIAAAAg");
	this.shape_1.setTransform(109.425,66.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_2.setTransform(102.275,65.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA9QgHgEgFgHIAAAOIgdAAIAAiAIAdAAIAAAtQAFgHAHgEQAIgEAJAAQAMAAAKAGQAKAGAGAMQAFAKAAAPQAAAPgFALQgGAMgKAGQgKAGgMAAQgJAAgIgEgAgPgBQgGAFAAALQAAALAGAHQAHAGAIAAQAIAAAHgGQAGgHAAgLQAAgLgGgGQgHgGgIAAQgIAAgHAHg");
	this.shape_3.setTransform(94.475,65.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdArQgKgFgGgMQgFgMAAgOQAAgPAFgLQAGgLAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABhIgeAAIAAgPQgEAIgIADQgHAFgKAAQgMAAgJgHgAgOgRQgGAGAAALQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(82.725,66.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_5.setTransform(74.825,65.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_6.setTransform(70.225,64.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdArQgKgFgGgMQgFgMAAgOQAAgPAFgLQAGgLAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABhIgeAAIAAgPQgEAIgIADQgHAFgKAAQgMAAgJgHgAgOgRQgGAGAAALQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_7.setTransform(61.825,66.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAxIgihhIAgAAIAUBFIAVhFIAgAAIgjBhg");
	this.shape_8.setTransform(51.2,66.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeA9IgIgVIgsAAIgHAVIggAAIAth5IAhAAIAtB5gAAPARIgPgsIgPAsIAeAAg");
	this.shape_9.setTransform(40.9,65.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAtQgKgEgGgHQgFgIgBgKIAdAAQABAFAEAEQAEADAFAAQAGAAADgCQADgDAAgDQAAgEgEgCIgOgFIgRgEQgHgDgFgFQgFgGAAgKQAAgJAFgGQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAAEQAAADAEADIANAEIASAGQAHACAFAFQAFAGAAAKQAAAJgFAGQgFAHgJAEQgJAEgLAAQgMAAgKgFg");
	this.shape_10.setTransform(26.625,66.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_11.setTransform(16.875,66.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdArQgKgFgGgMQgFgMAAgOQAAgPAFgLQAGgLAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABhIgeAAIAAgPQgEAIgIADQgHAFgKAAQgMAAgJgHgAgOgRQgGAGAAALQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_12.setTransform(5.625,66.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_13.setTransform(-1.775,65.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtA9IAAh5IAuAAQAPAAAKAFQAKAFAGAJQAEAJAAALQAAALgEAJQgFAIgLAFQgKAFgPAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_14.setTransform(-8.95,65.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_15.setTransform(139.875,49.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLABgPQgBgOAHgMQAGgLAMgGQAMgGANAAQAOAAAMAGQALAGAHALQAGAMABAOQAAAPgIALQgGALgLAHQgMAGgOAAQgNAAgMgGgAgNgRQgHAGABALQgBALAHAHQAFAGAIAAQAIAAAGgGQAGgHAAgLQAAgLgFgGQgHgHgIABQgIgBgFAHg");
	this.shape_16.setTransform(128.85,49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_17.setTransform(121.025,47.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAFACACQACABAFAAIALAAIAAAag");
	this.shape_18.setTransform(115.025,48.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQASAAANAKQAMAJAEASIggAAQgEgLgMAAQgHAAgFAFQgFAHAAALQAAALAFAHQAFAGAHAAQAMABAEgLIAgAAQgEARgNAJQgMAKgSAAQgNAAgLgGg");
	this.shape_19.setTransform(106.925,49.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQAOAAALAFQALAHAHAKQAGALAAAPIgBAIIhCAAQAAAJAGAFQAFAFAHgBQAKAAAFgJIAgAAQgDAKgGAHQgHAIgJAEQgKAFgMAAQgNAAgLgGgAASgJQAAgHgFgEQgFgFgIgBQgHAAgFAFQgFAFgBAHIAkAAIAAAAg");
	this.shape_20.setTransform(95.875,49.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAFACACQACABAFAAIALAAIAAAag");
	this.shape_21.setTransform(87.075,48.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQAMgGANAAQAOAAALAGQAMAGAHALQAGAMAAAOQABAPgIALQgGALgMAHQgLAGgOAAQgOAAgLgGgAgNgRQgHAGAAALQAAALAHAHQAFAGAIAAQAIAAAGgGQAGgHAAgLQAAgLgGgGQgFgHgJABQgIgBgFAHg");
	this.shape_22.setTransform(78.3,49.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAxIAAhgIAdAAIAAAQQAFgIAHgEQAIgFAKAAIAAAgIgIAAQgLAAgGAEQgFAFAAALIAAAtg");
	this.shape_23.setTransform(69.8,49.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AguA9IAAh5IAwAAQAOAAALAFQAJAFAFAJQAGAJAAALQAAALgGAJQgEAIgKAFQgKAFgPAAIgSAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_24.setTransform(60.85,48.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA0AxIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgdAAIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgeAAIAAhgIAeAAIAAAMQAEgGAIgDQAHgEAJAAQALAAAJAFQAIAEAEAJQAFgIAJgFQAJgFAKAAQASAAALALQALALAAATIAAA4g");
	this.shape_25.setTransform(45.025,49.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLABgPQgBgOAHgMQAGgLAMgGQAMgGANAAQAOAAALAGQAMAGAHALQAGAMABAOQAAAPgIALQgGALgMAHQgLAGgOAAQgNAAgMgGgAgNgRQgHAGABALQgBALAHAHQAFAGAIAAQAIAAAGgGQAGgHAAgLQAAgLgFgGQgHgHgIABQgIgBgFAHg");
	this.shape_26.setTransform(30.4,49.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAFACACQACABAFAAIALAAIAAAag");
	this.shape_27.setTransform(21.425,48.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAtQgKgEgGgIQgFgHgBgKIAdAAQABAFAEAEQAEADAFAAQAGAAADgCQADgCAAgEQAAgEgEgCIgOgFIgRgEQgHgEgFgEQgFgGAAgKQAAgJAFgGQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAADQAAAEAEADIANAEIASAGQAHACAFAFQAFAGAAAKQAAAJgFAGQgFAHgJAEQgJAEgLAAQgMAAgKgFg");
	this.shape_28.setTransform(13.825,49.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAsQgJgFgFgJQgFgJABgNIAAg4IAdAAIAAA0QAAAKAFAFQAFAFAIAAQAIAAAGgFQAEgFAAgKIAAg0IAfAAIAABgIgfAAIAAgNQgEAGgHAEQgIAEgJAAQgLAAgIgFg");
	this.shape_29.setTransform(3.75,49.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdA2QgOgIgIgOQgIgOAAgSQAAgRAIgOQAIgPAOgIQAOgHARAAQAVAAAQALQAPALAGAUIghAAQgEgHgHgEQgGgEgJAAQgNAAgIAJQgJAKAAAPQAAAQAJAKQAIAJANAAQAJAAAGgEQAHgEAEgIIAhAAQgGAUgPAMQgQALgVAAQgRAAgOgIg");
	this.shape_30.setTransform(-8.125,48.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("AgwBDQgLgOAAgaQAAgbAQgOQAPgPAZAAQALAAAIADIAAgdQAAgLgGAAIgIgBIAAgIIAqgGIACABIAACMQgBAGADACQACACAKAAIAAAJIgsAAIAAgLQgQANgQAAQgUAAgMgOgAgUgJQgHALAAAWQAAAUAGALQAHALALAAQALAAAFgJQADgEAAgIIAAgsQAAgHgCgEQgFgJgLAAQgMAAgGAKg");
	this.shape_31.setTransform(102,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#14A751").s().p("AAIA2IAAgIQAIAAABgBQADgCAAgGIAAg1QAAgWgSAAQgNAAgGAMQgCAEAAAJIAAAxQAAAHADABQACACAIAAIAAAIIg5AAIAAgIQAKAAACgCQACgCAAgGIAAhAQAAgKgFAAIgIgBIAAgIIAogGIADAPIATgLQAJgEAJAAQAgAAAAAhIAAA3QAAAHACACQACACAKAAIAAAIg");
	this.shape_32.setTransform(89.375,27.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14A751").s().p("AgxAWIAAg0QAAgLgFgBIgIgBIAAgHIAqgEIABACIAABDQAAAYATAAQAMAAAFgLQACgFAAgIIAAgtQAAgLgGgBIgHgBIAAgHIApgEIABACIAABVQAAAHADACQADABAJABIAAAIIgrAAIgBgMQgJAGgGADQgKAGgLAAQggAAAAghg");
	this.shape_33.setTransform(76.45,27.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_34.setTransform(63.3,27.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14A751").s().p("AA2BLQgQAAgIgFQgIgFgEgLIgGggQgCgJgGgFQgEgDgKAAIgKAAIAAAxQAAAIADACQADACAMABIAAAIIhEAAIAAgIQAMgBADgCQADgCAAgIIAAhrQAAgIgDgCQgDgCgMgBIAAgIIBIAAQAYAAAMAHQAOAJAAAVQAAAPgKAKQgKAJgQACIAAABQAcAGAGAgQACAOAEAGQAFAIAKABIAAAIgAgSg/QgCACAAAFIAAA0IALAAQAPAAAGgIQAGgHAAgPQAAgegaAAQgIAAgCABg");
	this.shape_35.setTransform(48.275,25.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#14A751").s().p("AgbAJIAAgRIA3AAIAAARg");
	this.shape_36.setTransform(37.025,27.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#14A751").s().p("AgqA2IAAgIQAJAAADgCQACgCAAgHIAAg/QAAgKgFAAIgIgBIAAgIIAogGIABATIAQgPQAHgEAGAAQAOAAAAAOQAAAHgDAFQgFAFgGAAQgCAAgGgDQgHgFgEAAQgJAAAAASIAAAvQAAAHADACQADACANAAIAAAIg");
	this.shape_37.setTransform(30.05,27.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#14A751").s().p("AAKArIgNAIQgIAFgKAAQgPAAgJgKQgIgJAAgNQAAgTAWgHQAigLAGgEIAAgKQgBgSgNAAQgMAAgHAVQgCAIgGAAQgGAAgFgDQgGgDgBgGQABgLAMgHQANgJAWAAQAoAAAAAfIAAAwQAAAPAGACQADABAHAAIAAAHQgMAHgQAAQgMAAgEgNgAgLACQgLAFAAAOQAAAIAFAGQAFAFAGAAQAOAAABgQIAAgfg");
	this.shape_38.setTransform(18.75,27.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#14A751").s().p("AgxAAQAAgYAMgOQAOgRAaAAQAbAAAMARQAIALAAARQAAAJgLAAIg4AAQAAApAcAAQAUAAAKgUIAHAEQgLAggiAAQg0AAAAg4gAgNghQgEAJAAANIAdAAQAHAAAAgHQAAgbgRAAQgKAAgFAMg");
	this.shape_39.setTransform(5.575,27.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#14A751").s().p("AgkBLIAAgIQAPgBADgCQADgCAAgIIAAghQAAgGgEgJIgig8QgEgHgDgCQgDgCgIgBIAAgIIBCAAIAAAIIgMACQgFAAADAGQAMAZASAiQAQgfALgbQADgHgGgBIgMgBIAAgIIAxAAIAAAIQgJABgEACQgDACgEAHQgLARgVAqQgDAHAAAHIAAAjQAAAIADACQADACAPABIAAAIg");
	this.shape_40.setTransform(-6.525,25.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#14A751").s().p("AgxAAQAAgYAMgOQAOgRAaAAQAbAAAMARQAIALAAARQAAAJgLAAIg4AAQAAApAcAAQAUAAAKgUIAHAEQgLAggiAAQg0AAAAg4gAgNghQgEAJAAANIAdAAQAHAAAAgHQAAgbgRAAQgKAAgFAMg");
	this.shape_41.setTransform(171.825,9.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#14A751").s().p("AApA2IAAgIQAIAAABgBQADgCABgGIAAg1QAAgWgSAAQgQABgEAPIgBALIAAAwQAAAGADACQABABAJAAIAAAIIg2AAIAAgIQAIAAACgBQACgCAAgGIAAg1QAAgWgRAAQgPAAgFAQIgBAKIAAAxQAAAGADACQACABAHAAIAAAIIg4AAIAAgIQAKAAABgCQADgCAAgHIAAg/QAAgKgFAAIgIgBIAAgIIAogGIADAPIARgKQAKgFAJAAQAUAAAIAQIARgKQALgGAJAAQAiAAAAAhIAAA3QAAAHACACQADACAJAAIAAAIg");
	this.shape_42.setTransform(157.15,9.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_43.setTransform(140.55,9.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#14A751").s().p("AAMBLIAAgIQAMgBADgCQACgCAAgIIAAg2Ig6AAIAAA2QAAAIADACQADACAMABIAAAIIhEAAIAAgIQAMgBADgCQADgCAAgIIAAhrQAAgIgDgCQgDgCgMgBIAAgIIBEAAIAAAIQgMABgDACQgDACAAAIIAAAsIA6AAIAAgsQAAgIgCgCQgDgCgMgBIAAgIIBEAAIAAAIQgMABgDACQgDACAAAIIAABrQAAAIADACQADACAMABIAAAIg");
	this.shape_44.setTransform(126.375,7.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#14A751").s().p("AgrA2IAAgIQAKAAADgCQACgCAAgHIAAg/QAAgKgGAAIgHgBIAAgIIAogGIABATIARgPQAGgEAGAAQAPAAAAAOQAAAHgFAFQgEAFgGAAQgCAAgGgDQgHgFgEAAQgJAAAAASIAAAvQAAAHADACQADACANAAIAAAIg");
	this.shape_45.setTransform(108.5,9.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#14A751").s().p("AgxAXIAAg1QAAgLgFAAIgIgCIAAgHIAqgEIABACIAABDQAAAYATAAQAMAAAFgLQACgFAAgIIAAgtQAAgLgFAAIgIgCIAAgHIApgEIABACIAABVQAAAHADACQACACAKAAIAAAIIgrAAIgBgMQgJAGgGADQgKAGgLAAQggAAAAggg");
	this.shape_46.setTransform(97.7,9.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_47.setTransform(84.55,9.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#14A751").s().p("AgkBLIAAgIQAPgBADgCQADgCAAgIIAAghQAAgGgEgJIgig8QgEgHgDgCQgDgCgIgBIAAgIIBCAAIAAAIIgMACQgFAAADAGQAMAZASAiQAQgfALgbQADgHgGgBIgMgBIAAgIIAxAAIAAAIQgJABgEACQgDACgEAHQgLARgVAqQgDAHAAAHIAAAjQAAAIADACQADACAPABIAAAIg");
	this.shape_48.setTransform(71.925,7.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#14A751").s().p("AgMA+QgJgIAAgOIAAhFIgNAAIAAgLIAPAAIARgbIAKAAIAAAbIAYAAIAAALIgYAAIAAA9QAAAUAOAAQAGAAAEgCIADAHQgSALgMAAQgJAAgIgGg");
	this.shape_49.setTransform(56.625,8.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#14A751").s().p("AghAqQgOgOAAgbQAAgZANgPQAPgQAZAAQAQAAAMAHQAMAGAAAKQAAAHgFADQgFADgGAAQgIAAgCgHQgGgTgKAAQgHAAgGAKQgGALAAAVQAAAVAIAMQAHAKAMAAQATAAAKgUIAHADQgJAhglAAQgWAAgNgOg");
	this.shape_50.setTransform(46.925,9.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#14A751").s().p("AgxAAQAAgYAMgOQAOgRAaAAQAbAAAMARQAIALAAARQAAAJgLAAIg4AAQAAApAcAAQAUAAAKgUIAHAEQgLAggiAAQg0AAAAg4gAgNghQgEAJAAANIAdAAQAHAAAAgHQAAgbgRAAQgKAAgFAMg");
	this.shape_51.setTransform(34.375,9.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#14A751").s().p("AgMA+QgJgIAAgOIAAhFIgNAAIAAgLIAPAAIARgbIAKAAIAAAbIAYAAIAAALIgYAAIAAA9QAAAUAOAAQAGAAAEgCIADAHQgSALgMAAQgJAAgIgGg");
	this.shape_52.setTransform(26.075,8.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_53.setTransform(15.8,9.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#14A751").s().p("AgqA2IAAgIQAJAAADgCQACgCAAgHIAAg/QAAgKgFAAIgIgBIAAgIIAogGIABATIAQgPQAHgEAGAAQAOAAAAAOQAAAHgDAFQgFAFgGAAQgCAAgGgDQgHgFgEAAQgJAAAAASIAAAvQAAAHADACQADACANAAIAAAIg");
	this.shape_54.setTransform(6.65,9.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#14A751").s().p("Ag9BLIAAgIQAMgBACgCQADgCAAgIIAAhrQAAgIgDgCQgCgCgMgBIAAgIIBEAAQAbAAAMAIQAQAKABAZQAAAbgWALQgNAJgaAAQgJAAgFgCIAAAoQABAIADACQADACAOABIAAAIgAgJg/QgCACgBAEIAAA2QABAJAOAAQAaAAgBgjQABgSgJgJQgHgIgNAAQgHAAgCABg");
	this.shape_55.setTransform(-6.45,7.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFrIAArV");
	this.shape_56.setTransform(220.25,36.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-15.9,-3.8,237.20000000000002,80.8), null);


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
	this.shape.graphics.f("#14A751").s().p("AgqBSQgGgFAAgFQAAgHAFgFQAEgGAFAAQAEAAAGAEQAEAEAEAAQAHAAAEgQQACgEgDgLIgphfQgDgIgDgBQgDgCgIgBIAAgIIA+AAIAAAIIgJACQgFABACAGIAaBDIAAAAQAPgpAHgaQABgHgFAAIgLgCIAAgIIAuAAIAAAIQgJABgDADQgDACgDAJIgoBqQgIAXgJAKQgIAHgMAAQgHAAgFgDg");
	this.shape.setTransform(441.575,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgeBWIAAgJQAKgBADgCQACgCAAgHIAAh7QAAgLgFgBIgJgBIAAgIIAsgFIACABIAACUQAAAHACACQACACALABIAAAJg");
	this.shape_1.setTransform(433.5,40.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgeBSIAAgIQAKgBACgCQADgBAAgIIAAhEQAAgKgGgBIgIgBIAAgIIAsgHIABACIAABdQAAAIACABQADACALABIAAAIgAgNgyQgFgGAAgHQAAgIAFgFQAEgFAJAAQAHAAAGAFQAEAFAAAIQAAAHgEAGQgGAFgHAAQgJAAgEgFg");
	this.shape_2.setTransform(428.3,40.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AArA6IAAgJIALgBQADgCAAgHIAAg4QAAgYgUABQgQAAgEAQIgBALIAAA0QAAAHADACQABABAJAAIAAAJIg5AAIAAgJIAKgBQACgCAAgHIAAg4QAAgYgRABQgRAAgFARIgBAKIAAA0QAAAHADACQACABAIAAIAAAJIg8AAIAAgJQAKAAACgCQADgCAAgHIAAhEQAAgLgGAAIgIgBIAAgIIArgHIADAQIASgLQAKgFALAAQAUAAAKARIARgKQANgHAKAAQAkAAAAAkIAAA7QAAAHACACQADACALAAIAAAJg");
	this.shape_3.setTransform(415.15,43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAKAuIgNAIQgKAGgJAAQgRAAgJgKQgJgKAAgOQAAgVAYgHQAkgMAGgFIAAgKQAAgTgOAAQgOAAgHAWQgCAJgHAAQgGAAgFgDQgHgEAAgGQAAgLANgJQAOgJAXABQArAAAAAgIAAA0QAAAPAHADIAKABIABAHQgOAIgQAAQgNAAgFgOgAgMABQgMAHAAAPQAAAIAFAGQAFAFAIABQAPgBAAgRIAAghg");
	this.shape_4.setTransform(397.275,43.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag8BQIAAgJQANAAADgCQADgDAAgIIAAhzQAAgJgDgCQgDgCgNgBIAAgIIB5AAIAAAqIgJAAQgFgTgGgGQgHgHgRAAIgQAAQgEAAgCACQgBABAAAFIAAA5IAZAAQAMAAAEgFQADgEADgNIAJAAIAAA1IgJAAQgDgMgDgFQgEgEgMAAIgZAAIAAA0QAAAIADADQADACAPAAIAAAJg");
	this.shape_5.setTransform(382.375,41.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AguA6IAAgJQALAAADgCQACgCAAgHIAAhEQAAgLgGAAIgIgBIAAgIIAqgHIACAUQAMgMAFgDQAIgFAGAAQAPAAABAPQgBAHgEAGQgEAGgHAAQgDAAgFgEQgIgFgEAAQgKgBAAAUIAAAzQAAAHADACQADACAOAAIAAAJg");
	this.shape_6.setTransform(365.75,43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("Ag0AYIAAg4QAAgMgGgBIgJgBIAAgIIAtgEIACACIAABIQAAAaAUAAQANAAAFgMQACgFAAgJIAAgwQAAgMgGgBIgIgBIAAgIIAtgEIABACIAABcQAAAHADACQACACALAAIAAAJIguAAIgCgNIgPAKQgMAGgMAAQghAAAAgjg");
	this.shape_7.setTransform(354.125,43.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag5AAQAAg7A5ABQA6gBABA7QgBA7g6ABQg5gBAAg7gAgYAAQAAAyAYAAQAZgBAAgxQAAgxgZABQgYAAAAAwg");
	this.shape_8.setTransform(340.1,43.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgnBQIAAgJQAQAAADgCQAEgDAAgIIAAgjQAAgHgFgJIgkhBQgEgIgDgCQgDgCgJgBIAAgIIBHAAIAAAIIgNACQgGAAADAHQANAbATAkIABAAQARgiALgcQADgHgGgCIgMgBIAAgIIA0AAIAAAIQgKABgEADQgEACgEAIQgLASgWAsQgEAIAAAIIAAAlQAAAIADADQAEACAQAAIAAAJg");
	this.shape_9.setTransform(326.575,41.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgqBWIAAgJQAKgBADgCQACgBAAgIIAAhRIgOAAIAAgLIAOAAIAAgGQAAgaAMgNQALgMAUAAQAOAAAHAFQAGAGAAAGQAAAFgFAFQgEAEgFAAQgIAAgBgHQgHgPgGAAQgGAAABAOIADAiIAVAAIAAALIgVAAIAABRQgBAIADABQADACAMABIAAAJg");
	this.shape_10.setTransform(310.85,40.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag5AAQAAg7A5ABQA6gBABA7QgBA7g6ABQg5gBAAg7gAgYAAQAAAyAYAAQAZgBAAgxQAAgxgZABQgYAAAAAwg");
	this.shape_11.setTransform(299.15,43.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("Ag0AAQAAgaANgPQAPgRAbAAQAdAAANARQAIAMAAASQAAAKgLAAIg8AAQAAAsAeAAQAUAAAMgVIAIAEQgNAhglABQg2gBAAg7gAgOgkQgEAKAAAOIAfAAQAIAAgBgHQAAgdgSAAQgLAAgFAMg");
	this.shape_12.setTransform(278.15,43.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgtA6IAAgJQAKAAACgCQADgCAAgHIAAhEQAAgLgGAAIgIgBIAAgIIArgHIABAUQALgMAHgDQAGgFAHAAQAQAAAAAPQgBAHgDAGQgFAGgHAAQgCAAgHgEQgHgFgFAAQgJgBAAAUIAAAzQAAAHADACQADACAOAAIAAAJg");
	this.shape_13.setTransform(268.95,43.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAKAuIgNAIQgKAGgJAAQgRAAgJgKQgJgKAAgOQAAgVAYgHQAkgMAGgFIAAgKQAAgTgOAAQgOAAgHAWQgCAJgHAAQgGAAgFgDQgHgEAAgGQAAgLANgJQAOgJAXABQArAAAAAgIAAA0QAAAPAHADIAKABIABAHQgOAIgQAAQgNAAgFgOgAgMABQgMAHAAAPQAAAIAFAGQAFAFAIABQAPgBAAgRIAAghg");
	this.shape_14.setTransform(256.875,43.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AhGACQABgmAUgXQAWgYAsAAQAhAAASAKIAAApIgJAAQgFgUgJgJQgKgMgTAAQgbAAgMAcQgIATABAaQgBAbAJATQAMAcAbAAQATAAALgNQAHgJAIgWIAJAAIgDArQgTALgiAAQhVAAAAhSg");
	this.shape_15.setTransform(240.45,41.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("Ag0AAQAAgaAMgPQAQgRAbAAQAdAAANARQAIAMAAASQAAAKgLAAIg8AAQgBAsAfAAQAUAAAMgVIAIAEQgNAhglABQg2gBAAg7gAgOgkQgFAKABAOIAfAAQAHAAAAgHQAAgdgSAAQgLAAgFAMg");
	this.shape_16.setTransform(218.2,43.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAtBWQgWAAgKgOQgMgPgQgeIAAgCIAggtQAFgHAGAAIAgAAIAAAIQgcAFgJAHIgOAPQAAAAAAABQgBAAAAABQAAAAABAAQAAABAAAAQASAeAVAZQAIAKAJADIAAAHgAhABWIAAgJQALgBACgCQADgBAAgIIAAh7QAAgLgGgBIgIgBIAAgIIAtgFIABABIAACUQAAAHACACQACACALABIAAAJg");
	this.shape_17.setTransform(206.5,40.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAKAuIgNAIQgKAGgJAAQgRAAgJgKQgJgKAAgOQAAgVAYgHQAkgMAGgFIAAgKQAAgTgOAAQgOAAgHAWQgCAJgHAAQgGAAgFgDQgHgEAAgGQAAgLANgJQAOgJAXABQArAAAAAgIAAA0QAAAPAHADIAKABIABAHQgOAIgQAAQgNAAgFgOgAgMABQgMAHAAAPQAAAIAFAGQAFAFAIABQAPgBAAgRIAAghg");
	this.shape_18.setTransform(192.775,43.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgoBQIAAgJIAOAAQAGgBACgCQABgDABgHIAAh/IgKAAQgRAAgGAHQgFAGgFAUIgJAAIAAgrICJAAIAAArIgJAAQgFgUgFgGQgHgHgPAAIgKAAIAAB/QAAAHACADQACACAGABIAMAAIAAAJg");
	this.shape_19.setTransform(181.1,41.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgqBRQgGgDAAgHQAAgGAFgFQAEgGAFAAQAEAAAGAFQAEADAEAAQAHAAAEgQQACgEgDgLIgphfQgDgIgDgBQgDgCgIAAIAAgJIA+AAIAAAJIgJABQgFAAACAIIAaBCIAAAAQAPgpAHgaQABgGgFgBIgLgBIAAgJIAuAAIAAAJQgJAAgDADQgDACgDAJIgoBpQgIAYgJAKQgIAHgMAAQgHAAgFgEg");
	this.shape_20.setTransform(328.375,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgeBWIAAgJQALgBACgBQADgCAAgIIAAh7QgBgLgGgBIgIgBIAAgIIAsgFIABABIAACUQABAIACACQACABALABIAAAJg");
	this.shape_21.setTransform(320.3,14.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgfBSIAAgIQALgBADgCQACgBAAgIIAAhEQAAgKgGgBIgIgBIAAgIIArgHIACACIAABdQAAAIADABQACACAKABIAAAIgAgOgyQgEgGAAgHQAAgIAEgFQAFgFAJAAQAIAAAFAFQAEAFABAIQgBAHgEAGQgGAFgHAAQgJAAgFgFg");
	this.shape_22.setTransform(315.1,15.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AArA6IAAgJIALgBQADgCAAgHIAAg4QAAgXgTgBQgRABgEAQIgBALIAAA0QAAAHADACQACABAIAAIAAAJIg6AAIAAgJIALgBQADgCAAgHIAAg4QAAgXgSgBQgRAAgFARIgBALIAAA0QAAAHADACQABABAKAAIAAAJIg9AAIAAgJQAKAAACgCQADgBAAgJIAAhDQAAgLgGAAIgIgCIAAgHIArgHIACAQIATgLQAKgFALAAQAVAAAJARIARgLQAMgGALAAQAkAAAAAkIAAA6QAAAJADABQABACALAAIAAAJg");
	this.shape_23.setTransform(301.95,17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAKAuIgNAJQgKAEgJAAQgRABgJgLQgJgJAAgOQAAgVAYgHQAkgMAGgFIAAgKQAAgUgOAAQgOAAgHAYQgCAIgHAAQgGAAgFgDQgHgEAAgHQAAgLANgIQAOgIAXgBQArAAAAAiIAAAzQAAAQAHACIAKABIABAHQgOAIgQgBQgNAAgFgNgAgMACQgMAGAAAOQAAAKAFAFQAFAGAIgBQAPABAAgSIAAggg");
	this.shape_24.setTransform(284.075,17.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag8BQIAAgJQANAAADgDQADgBAAgJIAAhzQAAgJgDgCQgDgCgNAAIAAgJIB5AAIAAApIgJAAQgFgSgGgGQgHgHgRAAIgQAAQgEAAgCACQgBABAAAFIAAA5IAZAAQAMgBAEgEQADgDADgOIAJAAIAAA2IgJAAQgDgNgDgEQgEgFgMAAIgZAAIAAA0QAAAJADABQADADAPAAIAAAJg");
	this.shape_25.setTransform(269.225,15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgtA6IAAgJQAKAAACgCQADgBAAgJIAAhDQAAgLgGAAIgIgCIAAgHIArgHIABAUQAMgMAFgDQAIgFAGAAQAPAAAAAPQAAAIgDAFQgFAGgHAAQgDAAgFgEQgIgFgFgBQgJAAAAAUIAAAyQAAAIADACQADACAOAAIAAAJg");
	this.shape_26.setTransform(252.6,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("Ag0AYIAAg4QAAgMgGgBIgJgBIAAgIIAtgEIACACIAABIQAAAaAUAAQANAAAFgMQACgFAAgJIAAgwQAAgMgGgBIgIgBIAAgIIAtgEIABACIAABcQAAAHADACQACACALAAIAAAJIguAAIgCgNIgPAKQgMAGgMAAQghAAAAgjg");
	this.shape_27.setTransform(240.975,17.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag6A+QgUgWAAgoQAAgnAUgWQAUgWAmAAQAnAAAUAWQAUAWAAAnQAAAogUAWQgUAWgnAAQgmAAgUgWgAgnAAQAABKAnAAQAoAAAAhKQAAhJgoAAQgoAAABBJg");
	this.shape_28.setTransform(223.55,15.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMBCQgKgIAAgOIAAhLIgOAAIAAgMIAPAAIATgdIALAAIAAAdIAZAAIAAAMIgZAAIAABCQAAAVAPAAQAFAAAGgCIACAHQgSALgOAAQgKAAgHgGg");
	this.shape_29.setTransform(205.25,16.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("Ag0AAQAAgZANgQQAPgRAbgBQAdABAMARQAJAMAAASQAAAKgLAAIg8AAQAAAsAeAAQAVAAALgVIAIAEQgNAhglAAQg2ABAAg8gAgOgkQgEAKAAAOIAfAAQAIAAgBgIQAAgdgSAAQgLAAgFANg");
	this.shape_30.setTransform(193.65,17.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag+BQIAAgJQAMAAAEgDQADgBAAgJIAAhzQAAgJgDgCQgEgCgMAAIAAgJIBKAAIAAAJQgOAAgDACQgDACAAAJIAABtQAAAMAEADQAFADAQAAQARAAAJgJQAFgGAHgVIAIAAIgCAug");
	this.shape_31.setTransform(180.85,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_32.setTransform(138.175,38.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYAwIAAg0QAAgNgGgHQgHgGgLgBQgKABgGAGQgHAHAAANIAAA0IgUAAIAAheIAUAAIAAALQAFgGAIgDQAHgDAIgBQALAAAJAFQAJAFAFAJQAFAJAAANIAAA3g");
	this.shape_33.setTransform(130.475,39.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQABAMAHAHQAIAHAKAAQAPAAAHgOIAWAAQgFANgLAJQgMAIgQAAQgNAAgLgGgAAbgIQgBgLgHgGQgIgHgLAAQgKAAgGAHQgIAGgBALIA0AAIAAAAg");
	this.shape_34.setTransform(120.25,39.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA6AwIAAg0QAAgNgHgHQgGgGgLgBQgLABgHAGQgGAHAAANIAAA0IgTAAIAAg0QAAgNgGgHQgHgGgLgBQgLABgGAGQgHAHAAANIAAA0IgUAAIAAheIAUAAIAAALQAFgGAHgDQAIgDAIgBQAMAAAJAFQAIAFAFAJQAEgJAJgEQAKgFAKgBQALAAAJAFQAJAFAFAJQAGAJAAANIAAA3g");
	this.shape_35.setTransform(106.525,39.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQAAAMAIAHQAIAHAKAAQAPAAAHgOIAVAAQgDANgMAJQgMAIgQAAQgNAAgLgGgAAagIQAAgLgHgGQgIgHgLAAQgKAAgGAHQgIAGgBALIAzAAIAAAAg");
	this.shape_36.setTransform(93.15,39.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA/QgMgJgCgQIATAAQADAIAHAFQAHAEAKAAQAMAAAHgIQAHgGAAgOIAAgRQgFAIgJAEQgIAEgKABQgMAAgLgHQgKgGgGgMQgGgKAAgOQAAgOAGgMQAGgLAKgGQALgGAMAAQAKAAAJAEQAJAFAEAGIAAgOIAUAAIAABhQAAANgGAKQgFALgKAFQgLAGgOAAQgTAAgNgJgAgNgzQgHAFgDAGQgFAIAAAKQAAAKAFAHQADAGAHAFQAHAEAGAAQAIAAAGgEQAHgEAEgHQAEgHAAgKQAAgKgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_37.setTransform(82.45,41.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgLAAQgMAAgKgGgAgNgcQgHAEgEAHQgEAIAAAJQAAAJAEAIQAEAHAHAEQAHAEAGAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_38.setTransform(71.3,39.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAYAwIAAg0QAAgNgGgHQgHgGgLgBQgKABgGAGQgHAHAAANIAAA0IgUAAIAAheIAUAAIAAALQAFgGAIgDQAHgDAIgBQALAAAJAFQAJAFAFAJQAFAJAAANIAAA3g");
	this.shape_39.setTransform(60.775,39.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgKAAQgNAAgKgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_40.setTransform(50,39.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAsA8IAAhRIglBRIgNAAIglhRIAABRIgTAAIAAh3IAVAAIApBdIArhdIAVAAIAAB3g");
	this.shape_41.setTransform(37.65,38.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_42.setTransform(23.625,38.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgFgHQgFgHAAgJIAUAAQABAHAFAEQAFAEAHAAQAIAAAFgEQAFgDAAgFQAAgFgFgDIgQgGQgKgCgHgDQgHgCgFgGQgFgGAAgJQAAgHAFgHQAEgGAJgEQAIgDAKAAQAQAAAKAIQAKAIABAOIgUAAQAAgGgFgEQgFgEgHAAQgIAAgEADQgEADAAAFQAAAEADACIAHAEIAKAEQALADAHADQAGACAFAFQAFAGAAAJQAAAIgEAHQgFAGgIAEQgIADgMAAQgKAAgJgEg");
	this.shape_43.setTransform(16.075,39.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIAAAIIhJAAQACAMAHAHQAIAHAJAAQARAAAGgOIAVAAQgDANgMAJQgLAIgSAAQgMAAgLgGgAAagIQAAgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA0AAIAAAAg");
	this.shape_44.setTransform(6.65,39.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IApAAQANAAAKAEQAKAFAEAIQAFAIAAALQAAAJgEAIQgFAHgJAFQgKAFgOAAIgVAAIAAAxgAgVgEIAVAAQALAAAFgFQAGgFAAgJQAAgUgWAAIgVAAg");
	this.shape_45.setTransform(-3.475,38.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdBGIATguIgmhdIAXAAIAZBIIAchIIAVAAIg6CLg");
	this.shape_46.setTransform(89.725,22.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAxIAAhfIAUAAIAAANQADgGAHgFQAHgDAKAAIAAAUIgFAAQgLAAgGAGQgFAFAAAPIAAAyg");
	this.shape_47.setTransform(81.675,20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQAAAMAIAHQAIAHAKAAQAPAAAHgOIAVAAQgDANgMAJQgMAIgQAAQgNAAgLgGgAAagIQAAgLgHgGQgIgHgLAAQgKAAgGAHQgIAGgBALIAzAAIAAAAg");
	this.shape_48.setTransform(73.35,20.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLAwIgkhfIAVAAIAaBNIAbhNIAVAAIgkBfg");
	this.shape_49.setTransform(63.825,20.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgLAAQgMAAgKgGgAgNgcQgHAEgDAHQgFAIAAAJQAAAJAFAIQADAHAHAEQAHAEAGAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_50.setTransform(52.75,20.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdA8IAAh3IAUAAIAABnIAnAAIAAAQg");
	this.shape_51.setTransform(43.625,19.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgXAxIAAhfIAUAAIAAANQADgGAHgFQAHgDAKAAIAAAUIgFAAQgLAAgGAGQgFAFAAAPIAAAyg");
	this.shape_52.setTransform(32.425,20.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJBDIAAhfIATAAIAABfgAgIgsQgEgEABgFQgBgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_53.setTransform(27.15,18.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgLAAQgLAAgLgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_54.setTransform(19.75,20.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA8QgJgDgFgHIAAAOIgUAAIAAiAIAUAAIAAAvQAFgHAJgFQAJgDAJAAQANAAAKAFQALAHAFAKQAGALAAAOQAAAOgGAMQgFALgLAHQgLAGgMAAQgKAAgIgFgAgOgMQgGAEgEAHQgEAGAAAKQAAAKAEAIQAEAIAGADQAIAEAGAAQAHAAAHgEQAHgEAEgIQAEgHAAgKQAAgKgEgGQgEgHgHgEQgHgEgHABQgGAAgIADg");
	this.shape_55.setTransform(8.75,18.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAiA9IgJgZIgxAAIgJAZIgVAAIArh5IAWAAIAsB5gAATATIgTg2IgTA2IAmAAg");
	this.shape_56.setTransform(-2.925,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-10.1,3.2,459.20000000000005,52.9), null);


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
	this.shape.setTransform(134.525,14.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_1.setTransform(123.625,14.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA3Ig7haIAAAAIAAA0IABAXQAAAGAEACIALABIAAAGIgnAAIAAgGQAIgBABgBQADgBABgGIABgXIAAg3QAAgHgCgBQgCgCgJAAIAAgGIAkAAIAzBNIABAAIAAgnIgBgXQAAgGgEgCIgMgBIAAgGIAnAAIAAAGQgHABgBABQgEABgBAGIgBAXIAABHg");
	this.shape_2.setTransform(112.85,12.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAhIgCgXIAGAAQAHAYAQAAQAEAAAEgDQADgDAAgEQAAgJgQgGQgNgFgFgEQgFgGAAgJQAAgMAIgGQAIgHAOAAQANAAAKAFIAAAVIgGAAQgCgJgFgFQgEgFgHAAQgEAAgDADQgDADAAAEQAAAIAPAGQANAFAFAEQAGAFAAAKQAAAMgJAHQgJAHgNAAQgSAAgIgIg");
	this.shape_3.setTransform(97.4,14.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnApQgGgJAAgPIAAg5QAAgGgCgCIgKgBIAAgGIAxAAIAAAGIgLABQgCACAAAGIAAA6QAAAgAVAAQAXAAAAggIAAg6QAAgGgCgCIgLgBIAAgGIAwAAIAAAGIgKABQgCACAAAGIAAA5QgBAOgEAIQgKARgfAAQgeAAgJgPg");
	this.shape_4.setTransform(87.75,12.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAtQgGgFAAgKIAAgzIgKAAIAAgIIALAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAAEgCIACAFQgNAIgKAAQgGAAgGgFg");
	this.shape_5.setTransform(75.2,13.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAfQgKgLAAgTQAAgSAKgLQAKgMASAAQAMAAAJAFQAJAFAAAHQAAAFgEACQgEADgEAAQgGAAgBgGQgFgOgHAAQgFAAgEAHQgFAJAAAPQAAAPAGAJQAFAHAJAAQAOAAAHgPIAFADQgGAYgbAAQgRAAgJgKg");
	this.shape_6.setTransform(68.025,14.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAgIgJAFQgGAEgHAAQgLAAgHgHQgGgHAAgJQAAgOARgFQAZgIADgDIAAgIQAAgNgJAAQgJAAgFAQQgCAGgEAAQgEAAgEgCQgFgDAAgFQAAgHAJgGQAKgGAQAAQAdAAAAAXIAAAjQAAAKAEACQADABAEAAIABAFQgJAFgMAAQgJAAgDgJgAgIABQgIAEAAAKQAAAHAEAEQADADAFAAQAKAAAAgMIAAgWg");
	this.shape_7.setTransform(59.125,14.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAtQgHgFAAgKIAAgzIgJAAIAAgIIAKAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAADgCIACAFQgNAIgJAAQgGAAgFgFg");
	this.shape_8.setTransform(52.75,13.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAoIAAgGIAHgBQACgBAAgFIAAgnQAAgPgOAAQgIAAgFAIQgBADAAAGIAAAkQAAAFACACIAHABIAAAGIgqAAIAAgGIAJgCQACgBAAgFIAAguQAAgIgEAAIgGgBIAAgFIAdgFIACALIAOgIQAHgDAGAAQAYAAAAAZIAAAoQAAAFACABIAIACIAAAGg");
	this.shape_9.setTransform(45.575,14.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_10.setTransform(35.825,14.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvABQgBgZAOgQQAQgRAeAAQAWAAAMAHIAAAcIgFAAQgFgNgFgGQgHgJgOAAQgRAAgJAUQgFAMAAASQAAATAGANQAJATASAAQANAAAHgJQAGgGAFgPIAGAAIgDAeQgMAHgZAAQg4AAAAg5g");
	this.shape_11.setTransform(24.55,12.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("ApYC5QgkgBgYgYQgZgZAAgiIAAjJQAAgiAZgZQAYgZAkABISxAAQAjgBAZAZQAZAZAAAiIAADJQAAAigZAZQgZAYgjABg");
	this.shape_12.setTransform(77.85,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(9.3,-5,137.1,36.9), null);


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


(lib.aa = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TICK();
	this.instance.setTransform(-75,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-79.5,150,159);


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
	this.shape.graphics.f("#170648").s().p("AofSqIhPgSIAAkEIBsAZIA7AFQBPAAAlgaIA/hBIA5iBIBIiuIp17VIFEAAIHGVnIHL1nIE8AAIkMLqIkFLJQj3KLhlCOQhlCPj4AAg");
	this.shape.setTransform(1742.775,159.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_1.setTransform(1616.475,122.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AonKdQjbjoAAmgQAAmYDdkAQDcj/FkAAQCzAACqBVQCoBUBZCIQBUCAAdCsQAZB1AAEAIzTAAQAIECBxCeQByCdDtAAQDeAACEiUQBLhXAehwIEZAAQgMBdg9B0QhAByhOBJQiAB/i/AtQhnAZh/AAQk8AAjbjmgAHeiSQgSi5g/hwQh0jOkPAAQjDAAiFCPQiECNgHDbIOnAAIAAAAg");
	this.shape_2.setTransform(1461.075,125.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AieNSIpy6jIFLAAIHFVnIHZ1nIE4AAIqBajg");
	this.shape_3.setTransform(1290.65,124.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AqML1QiXiRAAjYQAAjrCUiCQCUiBDvgeIHHg5QBigNAhhGQATgmAAhHQAAiUhnhBQhphCi/AAQjfAAheB4Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7BzQC6ByAADxIAAPSQAAAtATAbQASAbA6AAIArgCIAzgIIAADTIhmAYIhfAEQiTAAhDhoQgjg4gOhmQhYBzijBUQiiBUjFAAQjtAAiViOgADDAjIiiAfIirAWQibAVhOAtQiFBKAACiQAAB7BaBIQBbBIB7AAQCXAACMhGQDuh0AAkIIAAjkQg0AhhSAXg");
	this.shape_4.setTransform(1122.875,125.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("ArmSOMAAAgkaIE8AAMAAAAgEISRAAIAAEWg");
	this.shape_5.setTransform(947.825,92.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_6.setTransform(713.425,122.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("AiQSOIAA6bIEhAAIAAabgAiQtJIAAlDIEhAAIAAFDg");
	this.shape_7.setTransform(613.625,92.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("AqML1QiXiRAAjYQAAjrCUiCQCUiBDvgeIHHg5QBigNAhhGQATgmAAhHQAAiUhnhBQhphCi/AAQjfAAheB4Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7BzQC6ByAADxIAAPSQAAAtATAbQASAbA6AAIArgCIAzgIIAADTIhmAYIhfAEQiTAAhDhoQgjg4gOhmQhYBzijBUQiiBUjFAAQjtAAiViOgADDAjIiiAfIirAWQibAVhOAtQiFBKAACiQAAB7BaBIQBbBIB7AAQCXAACMhGQDuh0AAkIIAAjkQg0AhhSAXg");
	this.shape_8.setTransform(490.825,125.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("Ak8RPQhQg3hah7IAADaIkIAAMAAAgkiIEWAAIAANNQBeh6CDhAQCDhBCXABQE/AADGDaQDHDaAAGoQAAGTjEELQjEEKlcABQjAAAiHhegAlUjJQiUCRAAFKQAADwA9CWQBwEYE2AAQDoAAByi4QB0i4AAkuQAAkLh0iwQhyiwjhAAQjDAAiTCQg");
	this.shape_9.setTransform(310.375,95.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AK2SOIjsq7IuZAAIj8K7IlEAAMANtgkaIFkAAMANOAkagAFkDSIliwFIl3QFILZAAg");
	this.shape_10.setTransform(108.775,92.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-2,-42.7,1828.3,329), null);


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
	this.shape.setTransform(982.2,39.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("ACbFOIAAmbQAAg8gSgkQgeg9hMAAQgmAAgZAIQgtANgjAoQgbAhgIAjQgJAiAABAIAAFVIhuAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA+AAQCMAAAwBhQAbA1AABjIAAGig");
	this.shape_1.setTransform(930.8,47.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AjUEBQhThZAAigQgBicBVhiQBVhjCJAAQBEAABCAhQBBAhAiA0QAgAxALBCQAKAtAABiInbAAQADBjAsA9QArA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgwAAQh6AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_2.setTransform(860.6,48.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_3.setTransform(774.525,47.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AjUEBQhThZAAigQAAicBUhiQBVhjCIAAQBFAABCAhQBAAhAjA0QAgAxALBCQAKAtAABiInbAAQADBjArA9QAsA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgxAAQh5AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_4.setTransform(687,48.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("Ai4GoQhIgwgIhkIBvAAQAIArAYAZQAlAkBQAAQB8AAAnhZQAXg1gCiGQghAyguAYQguAYhLABQhqgBhPhKQhQhMAAitQAAikBQhdQBQhcBxAAQBMAAA5AmQAfAVAgApIAAhSIBmAAIAAJRQAAB9glBIQhECFi8AAQhpAAhIgvgAiVkIQgXA6AABeQAABvAtA5QAtA5BLAAQB1gBAwhqQAag8AAhQQAAh6gyg6Qgxg6hOAAQhygBgqBtg");
	this.shape_5.setTransform(615.775,61.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_6.setTransform(549.925,48.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("ACaFOIAAmbQAAg8gRgkQgeg9hMAAQgmAAgaAIQgsANgjAoQgbAhgIAjQgJAiABBAIAAFVIhvAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA/AAQCKAAAyBhQAbA1AABjIAAGig");
	this.shape_7.setTransform(479.2,47.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_8.setTransform(410.925,48.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_9.setTransform(322.925,47.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AgjGAQgcgoABg+IAAmwIhZAAIAAhaIBZAAIAAi2IBtAAIAAC2IBpAAIAABaIhpAAIAAGpQAAAjAYALQAMAHAeAAIARgBIAWgCIAABYIgnAIIgtACQhLAAgcgng");
	this.shape_10.setTransform(218.1,39.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#170648").s().p("AjPEaQg9hCgEhiIBqAAQAEA3AYAdQApA2BoAAQA/AAAvgbQAvgbABg3QAAgrgngVQgYgOhGgSIhZgVQhVgWgogYQhIgsAAhPQAAhdBEg6QBDg5BzAAQCVAABCBXQApA3gBBAIhnAAQgEgmgXgeQgngrhfAAQhAAAggAXQghAZAAAmQAAAqArAaQAYAPAxAMIBJASQB5AcApAbQBAApAABbQAABXhDA/QhDBAiJAAQiSAAg/hCg");
	this.shape_11.setTransform(170.35,48.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#170648").s().p("AjTEBQhUhZAAigQAAicBUhiQBVhjCJAAQBFAABBAhQBAAhAjA0QAgAxALBCQAKAtgBBiInaAAQADBjAsA9QAsA8BaAAQBWAAAyg4QAdgiALgrIBsAAQgEAkgYAsQgYAsgeAcQgyAxhIARQgpAKgvAAQh6AAhUhZgAC4g3QgHhIgZgqQgshQhoAAQhLAAgyA3Qg0A2gCBVIFnAAIAAAAg");
	this.shape_12.setTransform(103.5,48.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#170648").s().p("AkgHRIAAuOIBsAAIAABWQAhgsAngYQA4glBKAAQBvAABOBVQBOBVAACeQAADVhxBcQhHA5heAAQhJABgzghQgdgSgkgsIAAFNgAigj9QgWA9AABdQAABMAWA1QArBkByABQBMgBAzg/QA0hBAAiAQAAhOgXg4QgrhshxAAQhzABgqByg");
	this.shape_13.setTransform(36.025,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-2,-17.7,1004.5,129), null);


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
	this.instance.setTransform(112.4,48.65,0.0863,0.0863,0,0,0,478.7,66.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABnIAAjOMD4xAAAIAADOg");
	this.shape.setTransform(111.6826,40.9228,0.0863,0.0863);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgzgSkIAqBdMggzASkg");
	this.shape_1.setTransform(36.3035,23.8796,0.0863,0.0863);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gmgMl7QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA9ATQB/AnAMF6QAMF7htHxQhuHximFFQhOCZhKBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(16.3981,44.7101,0.0863,0.0863);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzihQj0lTjFoPQjFoNgjmVQgRi/Ach1QAdh4BIgXQBJgWBoBPQBkBMB0ChQDzFTDFIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(27.4829,44.0524,0.0863,0.0863);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nuhTmNQgoi7ALh3QAMh7BBghQBBggBrBBQBoA+CACQQEOEvD7HwQD7HuBTGNQAoC7gLB3QgMB8hBAgQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(16.8316,18.5026,0.0863,0.0863);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(116.2,26.55,0.0863,0.0863,0,0,0,852.1,161.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AsVQcMAXVghyIBWA7MgXVAhyg");
	this.shape_5.setTransform(32.1605,17.7422,0.0863,0.0863);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("Ag+FKQoQg9ljiMQinhChWhGQhYhJANhDQAMhDBwgyQBsgwC5gZQGIg1IPA9QIQA9FjCMQCnBCBWBFQBYBJgNBDQgaCJmHA2Qi2AZjUAAQjzAAkaghg");
	this.shape_6.setTransform(7.5165,29.6095,0.0863,0.0863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-3.5,8.1,203.8,47), null);


(lib.a = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.aa("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2437},6).to({rotation:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-83.6,158.7,167.3);


(lib.TICK_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.a("synched",0);
	this.instance.setTransform(97.6,-65.45,0.32,0.32,-98.013,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.1,scaleX:0.2591,scaleY:0.2591,rotation:-98.0113,x:-77.1,y:-421.55,startPosition:9},96,cjs.Ease.get(-1)).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_1 = new lib.a("synched",0);
	this.instance_1.setTransform(325.95,-7.95,0.32,0.32,-98.013,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regX:0.4,regY:0.1,scaleX:0.2672,scaleY:0.2672,rotation:-98.0117,x:-24.7,y:-249.4,startPosition:6},78).to({_off:true},1).wait(13));

	// Layer_4
	this.instance_2 = new lib.a("synched",0);
	this.instance_2.setTransform(-79.5,-393.6,0.3999,0.3999,67.8389,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.3992,scaleY:0.3992,rotation:67.0077,x:-75.2827,y:-387.3376,startPosition:1},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,rotation:66.1838,x:-71.0533,y:-381.0813,startPosition:2},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:65.3673,x:-66.8617,y:-374.881,startPosition:3},0).wait(1).to({scaleX:0.3971,scaleY:0.3971,rotation:64.5582,x:-62.7081,y:-368.7368,startPosition:4},0).wait(1).to({scaleX:0.3964,scaleY:0.3964,rotation:63.7565,x:-58.5923,y:-362.6486,startPosition:5},0).wait(1).to({scaleX:0.3958,scaleY:0.3958,rotation:62.9621,x:-54.5144,y:-356.6165,startPosition:6},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,rotation:62.1752,x:-50.4744,y:-350.6404,startPosition:7},0).wait(1).to({scaleX:0.3944,scaleY:0.3944,rotation:61.3956,x:-46.4723,y:-344.7204,startPosition:8},0).wait(1).to({scaleX:0.3938,scaleY:0.3938,rotation:60.6234,x:-42.5081,y:-338.8565,startPosition:9},0).wait(1).to({scaleX:0.3931,scaleY:0.3931,rotation:59.8586,x:-38.5818,y:-333.0486,startPosition:10},0).wait(1).to({scaleX:0.3925,scaleY:0.3925,rotation:59.1011,x:-34.6934,y:-327.2967,startPosition:11},0).wait(1).to({scaleX:0.3919,scaleY:0.3919,rotation:58.3511,x:-30.8428,y:-321.6009,startPosition:0},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:57.6084,x:-27.0301,y:-315.9612,startPosition:1},0).wait(1).to({scaleX:0.3906,scaleY:0.3906,rotation:56.8731,x:-23.2554,y:-310.3775,startPosition:2},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:56.1452,x:-19.5185,y:-304.8499,startPosition:3},0).wait(1).to({scaleX:0.3894,scaleY:0.3894,rotation:55.4247,x:-15.8195,y:-299.3783,startPosition:4},0).wait(1).to({scaleX:0.3888,scaleY:0.3888,rotation:54.7116,x:-12.1584,y:-293.9628,startPosition:5},0).wait(1).to({scaleX:0.3882,scaleY:0.3882,rotation:54.0058,x:-8.5352,y:-288.6033,startPosition:6},0).wait(1).to({scaleX:0.3876,scaleY:0.3876,rotation:53.3075,x:-4.9498,y:-283.2999,startPosition:7},0).wait(1).to({scaleX:0.387,scaleY:0.387,rotation:52.6165,x:-1.4024,y:-278.0526,startPosition:8},0).wait(1).to({scaleX:0.3864,scaleY:0.3864,rotation:51.9329,x:2.1071,y:-272.8613,startPosition:9},0).wait(1).to({scaleX:0.3858,scaleY:0.3858,rotation:51.2566,x:5.5788,y:-267.7261,startPosition:10},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,rotation:50.5878,x:9.0125,y:-262.6469,startPosition:11},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:49.9263,x:12.4084,y:-257.6238,startPosition:0},0).wait(1).to({scaleX:0.3842,scaleY:0.3842,rotation:49.2723,x:15.7664,y:-252.6567,startPosition:1},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:48.6256,x:19.0865,y:-247.7457,startPosition:2},0).wait(1).to({scaleX:0.3831,scaleY:0.3831,rotation:47.9862,x:22.3687,y:-242.8908,startPosition:3},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,rotation:47.3543,x:25.613,y:-238.0919,startPosition:4},0).wait(1).to({scaleX:0.382,scaleY:0.382,rotation:46.7298,x:28.8194,y:-233.3491,startPosition:5},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,rotation:46.1126,x:31.9879,y:-228.6623,startPosition:6},0).wait(1).to({scaleX:0.3809,scaleY:0.3809,rotation:45.5028,x:35.1185,y:-224.0316,startPosition:7},0).wait(1).to({scaleX:0.3804,scaleY:0.3804,rotation:44.9004,x:38.2113,y:-219.4569,startPosition:8},0).wait(1).to({scaleX:0.3799,scaleY:0.3799,rotation:44.3054,x:41.2661,y:-214.9383,startPosition:9},0).wait(1).to({scaleX:0.3794,scaleY:0.3794,rotation:43.7177,x:44.283,y:-210.4758,startPosition:10},0).wait(1).to({scaleX:0.3789,scaleY:0.3789,rotation:43.1375,x:47.2621,y:-206.0693,startPosition:11},0).wait(1).to({scaleX:0.3785,scaleY:0.3785,rotation:42.5646,x:50.2033,y:-201.7189,startPosition:0},0).wait(1).to({scaleX:0.378,scaleY:0.378,rotation:41.9991,x:53.1065,y:-197.4246,startPosition:1},0).wait(1).to({scaleX:0.3775,scaleY:0.3775,rotation:41.441,x:55.9719,y:-193.1863,startPosition:2},0).wait(1).to({scaleX:0.377,scaleY:0.377,rotation:40.8903,x:58.7994,y:-189.004,startPosition:3},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,rotation:40.3469,x:61.5889,y:-184.8779,startPosition:4},0).wait(1).to({scaleX:0.3761,scaleY:0.3761,rotation:39.811,x:64.3406,y:-180.8077,startPosition:5},0).wait(1).to({scaleX:0.3757,scaleY:0.3757,rotation:39.2824,x:67.0544,y:-176.7937,startPosition:6},0).wait(1).to({scaleX:0.3752,scaleY:0.3752,rotation:38.7612,x:69.7303,y:-172.8357,startPosition:7},0).wait(1).to({scaleX:0.3748,scaleY:0.3748,rotation:38.2474,x:72.3683,y:-168.9338,startPosition:8},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,rotation:37.7409,x:74.9684,y:-165.0879,startPosition:9},0).wait(1).to({scaleX:0.3739,scaleY:0.3739,rotation:37.2419,x:77.5306,y:-161.2981,startPosition:10},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,rotation:36.7502,x:80.0549,y:-157.5643,startPosition:11},0).wait(1).to({scaleX:0.3731,scaleY:0.3731,rotation:36.2659,x:82.5413,y:-153.8866,startPosition:0},0).wait(1).to({scaleX:0.3727,scaleY:0.3727,rotation:35.789,x:84.9898,y:-150.265,startPosition:1},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,rotation:35.3195,x:87.4004,y:-146.6994,startPosition:2},0).wait(1).to({scaleX:0.3719,scaleY:0.3719,rotation:34.8573,x:89.7731,y:-143.1899,startPosition:3},0).wait(1).to({scaleX:0.3715,scaleY:0.3715,rotation:34.4026,x:92.1079,y:-139.7364,startPosition:4},0).wait(1).to({scaleX:0.3712,scaleY:0.3712,rotation:33.9552,x:94.4049,y:-136.339,startPosition:5},0).wait(1).to({scaleX:0.3708,scaleY:0.3708,rotation:33.5152,x:96.6639,y:-132.9977,startPosition:6},0).wait(1).to({scaleX:0.3704,scaleY:0.3704,rotation:33.0826,x:98.885,y:-129.7124,startPosition:7},0).wait(1).to({scaleX:0.3701,scaleY:0.3701,rotation:32.6574,x:101.0682,y:-126.4832,startPosition:8},0).wait(1).to({scaleX:0.3697,scaleY:0.3697,rotation:32.2395,x:103.2136,y:-123.3101,startPosition:9},0).wait(1).to({scaleX:0.3694,scaleY:0.3694,rotation:31.829,x:105.321,y:-120.193,startPosition:10},0).wait(1).to({scaleX:0.369,scaleY:0.369,rotation:31.426,x:107.3905,y:-117.132,startPosition:11},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:31.0303,x:109.4222,y:-114.127,startPosition:0},0).wait(1).to({scaleX:0.3683,scaleY:0.3683,rotation:30.6419,x:111.4159,y:-111.1781,startPosition:1},0).wait(1).to({scaleX:0.368,scaleY:0.368,rotation:30.261,x:113.3717,y:-108.2852,startPosition:2},0).wait(1).to({scaleX:0.3677,scaleY:0.3677,rotation:29.8874,x:115.2897,y:-105.4485,startPosition:3},0).wait(1).to({scaleX:0.3674,scaleY:0.3674,rotation:29.5213,x:117.1697,y:-102.6677,startPosition:4},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,rotation:29.1625,x:119.0118,y:-99.9431,startPosition:5},0).wait(1).to({scaleX:0.3668,scaleY:0.3668,rotation:28.8111,x:120.816,y:-97.2745,startPosition:6},0).wait(1).to({scaleX:0.3665,scaleY:0.3665,rotation:28.467,x:122.5824,y:-94.6619,startPosition:7},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,rotation:28.1304,x:124.3108,y:-92.1054,startPosition:8},0).wait(1).to({scaleX:0.3659,scaleY:0.3659,rotation:27.8011,x:126.0013,y:-89.605,startPosition:9},0).wait(1).to({scaleX:0.3657,scaleY:0.3657,rotation:27.4793,x:127.654,y:-87.1607,startPosition:10},0).wait(1).to({scaleX:0.3654,scaleY:0.3654,rotation:27.1648,x:129.2687,y:-84.7724,startPosition:11},0).wait(1).to({scaleX:0.3651,scaleY:0.3651,rotation:26.8576,x:130.8455,y:-82.4401,startPosition:0},0).wait(1).to({scaleX:0.3649,scaleY:0.3649,rotation:26.5579,x:132.3845,y:-80.1639,startPosition:1},0).wait(1).to({scaleX:0.3646,scaleY:0.3646,rotation:26.2656,x:133.8855,y:-77.9438,startPosition:2},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,rotation:25.9806,x:135.3486,y:-75.7798,startPosition:3},0).wait(1).to({scaleX:0.3642,scaleY:0.3642,rotation:25.703,x:136.7738,y:-73.6718,startPosition:4},0).wait(1).to({scaleX:0.3639,scaleY:0.3639,rotation:25.4328,x:138.1612,y:-71.6198,startPosition:5},0).wait(1).to({scaleX:0.3637,scaleY:0.3637,rotation:25.17,x:139.5106,y:-69.624,startPosition:6},0).wait(1).to({scaleX:0.3635,scaleY:0.3635,rotation:24.9145,x:140.8221,y:-67.6841,startPosition:7},0).wait(1).to({scaleX:0.3633,scaleY:0.3633,rotation:24.6665,x:142.0957,y:-65.8004,startPosition:8},0).wait(1).to({scaleX:0.3631,scaleY:0.3631,rotation:24.4258,x:143.3314,y:-63.9727,startPosition:9},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,rotation:24.1925,x:144.5293,y:-62.2011,startPosition:10},0).wait(1).to({scaleX:0.3627,scaleY:0.3627,rotation:23.9666,x:145.6892,y:-60.4855,startPosition:11},0).wait(1).to({scaleX:0.3625,scaleY:0.3625,rotation:23.7481,x:146.8112,y:-58.826,startPosition:0},0).wait(1).to({scaleX:0.3623,scaleY:0.3623,rotation:23.5369,x:147.8953,y:-57.2225,startPosition:1},0).wait(1).to({scaleX:0.3622,scaleY:0.3622,rotation:23.3332,x:148.9415,y:-55.6751,startPosition:2},0).wait(1).to({scaleX:0.362,scaleY:0.362,rotation:23.1368,x:149.9498,y:-54.1838,startPosition:3},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,rotation:22.9478,x:150.9202,y:-52.7485,startPosition:4},0).wait(1).to({scaleX:0.3617,scaleY:0.3617,rotation:22.7662,x:151.8527,y:-51.3693,startPosition:5},0).wait(1).to({scaleX:0.3615,scaleY:0.3615,rotation:22.5919,x:152.7473,y:-50.0462,startPosition:6},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,rotation:22.4251,x:153.604,y:-48.7791,startPosition:7},0).wait(1).to({scaleX:0.3612,scaleY:0.3612,rotation:22.2656,x:154.4228,y:-47.5681,startPosition:8},0).wait(1).to({scaleX:0.3611,scaleY:0.3611,rotation:22.1135,x:155.2037,y:-46.4131,startPosition:9},0).wait(1).to({scaleX:0.361,scaleY:0.361,rotation:21.9688,x:155.9467,y:-45.3142,startPosition:10},0).wait(1).to({scaleX:0.3609,scaleY:0.3609,rotation:21.8315,x:156.6517,y:-44.2714,startPosition:11},0).wait(1).to({scaleX:0.3608,scaleY:0.3608,rotation:21.7015,x:157.3189,y:-43.2846,startPosition:0},0).wait(1).to({scaleX:0.3607,scaleY:0.3607,rotation:21.579,x:157.9482,y:-42.3538,startPosition:1},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:21.4638,x:158.5396,y:-41.4792,startPosition:2},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.3605,scaleY:0.3605,rotation:21.356,x:159.15,y:-40.6,startPosition:3},0).to({_off:true},1).wait(13));

	// Layer_1
	this.instance_3 = new lib.a("synched",0);
	this.instance_3.setTransform(-60.5,-150.55,0.3999,0.3999,5.4274,0,0,0.2,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regX:0.3,scaleX:0.36,scaleY:0.36,rotation:-29.2716,x:253.45,y:-430.1,startPosition:5},78).to({_off:true},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-467.7,474.8,487.09999999999997);


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
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
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
	this.instance_3.setTransform(914.05,69.55,1,1,0,0,0,46.1,16.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:49.55,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// Logo
	this.instance_4 = new lib.Logo();
	this.instance_4.setTransform(762.2,46,0.864,0.864,0,0,0,100.1,32.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:783.8,alpha:1},9,cjs.Ease.get(1)).wait(342));

	// F1
	this.instance_5 = new lib.F1();
	this.instance_5.setTransform(78.9,81.65,1,1,0,0,0,68,65);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:98.9,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(259));

	// Sh
	this.instance_6 = new lib.Sh();
	this.instance_6.setTransform(698,48.5,0.4096,0.4096,-90,0,0,175.7,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("EhP6gG8MCf1AAAIAAN5Mif1AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Img2
	this.instance_7 = new lib.Img2();
	this.instance_7.setTransform(180,105,1,1,0,0,0,150,105);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// bug2
	this.instance_8 = new lib.TICK_1("synched",0);
	this.instance_8.setTransform(370.95,101.8,0.3194,0.3194,0,0,0,0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},102).wait(258));

	// bug
	this.instance_9 = new lib.TICK_1("synched",0);
	this.instance_9.setTransform(479.85,100.25,0.3194,0.3194,0,0,0,0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},102).wait(258));

	// Img1
	this.instance_10 = new lib.Img1();
	this.instance_10.setTransform(180,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16486A").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape_1.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-49.2,1072.8,169.7);


// stage content:
(lib.WFSB_217810_MM_1024x90 = function(mode,startPosition,loop,reversed) {
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
		{src:"IMG1.png", id:"IMG1"},
		{src:"IMG2.png", id:"IMG2"},
		{src:"OSHALogo.png", id:"OSHALogo"},
		{src:"TICK.png", id:"TICK"}
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