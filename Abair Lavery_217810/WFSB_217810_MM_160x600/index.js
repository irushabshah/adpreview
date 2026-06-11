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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.IMG2 = function() {
	this.initialize(img.IMG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.setTransform(113.625,44.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_1.setTransform(110.225,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAggQAAgIgEgEQgDgDgHAAQgFAAgEADQgDAEgBAIIAAAgIgPAAIAAg8IAPAAIAAAHQAEgDAFgCQAEgDAFAAQALAAAGAHQAHAHAAAMIAAAjg");
	this.shape_2.setTransform(104.95,42.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgHQgEgHAAgJQAAgJAEgGQAEgHAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgJIAQAAIAAA9IgQAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgEgAgHgPQgDACgDAEQgCAFAAAEQAAAFACAFQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgFAAgFQAAgEgCgFQgCgEgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_3.setTransform(97.975,42.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAg8IAOAAIAAA8gAgGgbQgCgCgBgEQABgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(92.85,41.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_5.setTransform(89.675,41.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIAQAAIAAAJQADgEAFgDQAFgCAGAAQAIAAAGADQAGAFAEAHQAEAGAAAKQAAAJgEAGQgEAHgGAFQgGAEgIAAQgGAAgFgDQgFgDgDgEIAAAlgAgHgcQgEABgCAEQgCAFAAAFQAAAFACAFQACADAEACQAEACADAAQAEAAAEgCQADgCADgDQACgFAAgFQAAgFgCgFQgDgEgDgCQgEgCgEAAQgDAAgEADg");
	this.shape_6.setTransform(84.975,44.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAfIAAggQAAgIgEgEQgDgDgGAAQgHAAgDADQgEAEAAAIIAAAgIgOAAIAAggQAAgIgEgEQgEgDgGAAQgGAAgEADQgEAEAAAIIAAAgIgPAAIAAg8IAPAAIAAAHQADgDAFgCQAFgDAFAAQAHAAAGADQAFADADAGQADgFAFgDQAGgEAHAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_7.setTransform(75.925,42.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgHQgDgGAAgKQAAgJAEgGQAEgHAHgFQAHgDAIAAQAJAAAHADQAHAFAEAHQAEAGAAAJQAAAKgEAGQgEAHgHAFQgIAEgIAAQgIAAgHgEgAgKgMQgFAEAAAIQAAAJAEAFQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_8.setTransform(67.075,42.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAiQgJgFgGgJQgEgIAAgMQAAgKAEgJQAGgJAJgFQAJgFAJAAQANAAAKAHQAKAGADAMIgSAAQgCgGgFgCQgFgDgGAAQgFAAgGADQgFADgDAGQgDAGAAAGQAAAIADAGQADAFAFAEQAGADAFAAQAGAAAFgDQAFgDACgFIASAAQgDALgKAHQgKAGgNAAQgJAAgJgFg");
	this.shape_9.setTransform(59.8,41.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAtIANgfIgZg6IASAAIAOAqIAQgqIARAAIglBZg");
	this.shape_10.setTransform(50.425,44.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_11.setTransform(45.125,42);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAcQgHgFgEgHQgEgGAAgKQAAgJAEgGQAEgHAHgFQAGgDAIAAQAJAAAHADQAHAEAEAHQADAHAAAIIAAAGIgsAAQABAGAEAEQAEAEAFAAQAJgBADgGIARAAQgDAIgHAGQgIAFgLABQgHAAgHgEgAAPgEQgBgGgEgEQgEgEgGAAQgFAAgEAEQgEADAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(40.075,42.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgHAAIAAgMIAHAAIAAgDQAAgLAHgGQAFgFANAAIAAANQgFAAgDACQgCACAAAFIAAADIALAAIAAAMIgLAAIAAAwg");
	this.shape_13.setTransform(35.05,41.5229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgHQgEgHAAgJQAAgJAEgGQAEgHAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgJIAQAAIAAA9IgQAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgEgAgHgPQgDACgDAEQgCAFAAAEQAAAFACAFQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgFAAgFQAAgEgCgFQgCgEgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_14.setTransform(29.575,42.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgDgFQgEgGAAgHIAQAAQABAFADADQADADAEAAQAGAAACgDQAEgCAAgEQAAgEgDgCIgEgEIgIgDIgMgEQgFgBgDgEQgEgFAAgHQAAgHAEgFQADgFAHgCQAGgEAHAAQAMAAAGAHQAIAFABALIgRAAQgBgEgDgDQgCgCgFAAQgEAAgDACQgCACgBAFQAAACACACIAGAEIAHADIAMAEQAFACADADQAEAFAAAHQAAAGgEAGQgDAFgGADQgGADgJABQgGAAgHgDg");
	this.shape_15.setTransform(22.85,41.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgDgDgGQgEgEAAgHQAAgJAEgGQAFgFAIgDIgEgHQgCgDAAgEQAAgFADgFQADgEAFgCQAFgDAHAAQAGAAAFADQAFACACAFQADAEgBAGIgOAAQAAgEgBgCQgCgCgDAAQgEAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAADACACIAFAGIATATIAAgBIAAAAIAHgJIAQAAIgIAMIgFAIIATASIgTAAIgIgIQgLAKgPAAQgIAAgGgDgAgZAQQAAAFAEADQAEADAGAAQAJAAAGgHIgSgSQgLAEAAAKg");
	this.shape_16.setTransform(125.325,28.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(115.225,28.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgFgGQgDgIAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAIQgEAGgHAEQgIAEgIABQgIgBgHgEgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_18.setTransform(108.375,29.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAbQgHgEgFgGQgDgIAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAIQgEAGgHAEQgIAEgIABQgIgBgHgEgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_19.setTransform(101.775,29.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAmIAAhLIAvAAIAAAMIgfAAIAAAUIAXAAIAAALIgXAAIAAAgg");
	this.shape_20.setTransform(95.925,28.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(87.175,28.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAghQAAgHgEgEQgEgDgGAAQgFAAgEADQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAIQACgFAGgCQAEgCAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_22.setTransform(80.45,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAbQgGgEgEgGQgEgIAAgJQAAgIAEgIQAEgGAGgFQAGgDAIAAQAGAAAFADQAFACADAEIAAgIIAQAAIAAA7IgQAAIAAgJQgDAFgFACQgFADgGABQgIgBgGgEgAgHgPQgDADgDAEQgCADAAAFQAAAGACADQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgDAAgGQAAgFgCgDQgCgFgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_23.setTransform(73.475,29.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAmIgFgOIgdAAIgFAOIgRAAIAchLIARAAIAbBLgAALALIgLgeIgKAeIAVAAg");
	this.shape_24.setTransform(64.15,28.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAmIAAggIgfAAIAAAgIgQAAIAAhLIAQAAIAAAfIAfAAIAAgfIAQAAIAABLg");
	this.shape_25.setTransform(56.25,28.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAkQgHgCgDgGQgEgEAAgHIAQAAQABAEADADQADADAFgBQAEABAEgDQADgDAAgEQAAgDgCgDIgGgDIgHgCIgMgFQgFgBgDgEQgDgFAAgHQAAgHADgFQADgFAGgDQAHgCAHAAQAMAAAHAFQAHAGABAKIgRAAQAAgEgEgCQgDgCgDgBQgFAAgDACQgDADAAAEQABADACADIAEADIAIACIAMAFQAFACADAEQAEAEAAAIQAAAFgEAFQgDAGgGADQgGAEgIAAQgIgBgGgDg");
	this.shape_26.setTransform(48.35,28.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgGQAJgEAKAAQALAAAJAEQAJAGAFAJQAFAJAAAKQAAALgFAJQgFAJgJAFQgJAGgLAAQgKAAgJgGgAgLgVQgGACgDAHQgDAFAAAHQAAAHADAHQADAFAGAEQAFADAGAAQAHAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgFQgDgHgFgCQgFgEgHAAQgGAAgFAEg");
	this.shape_27.setTransform(40.775,28.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAjQgEgFAAgIQAAgJAFgFQAEgEAJAAQAHAAAFAEQAFAFgBAJQABAIgFAFQgFAFgHAAQgJAAgFgFgAASAWQAAAJAGAAQAGAAAAgJQAAgJgGABQgGgBAAAJgAgcAmIAqhLIAPAAIgqBLgAgjgIQgGgFAAgIQAAgIAGgFQAEgFAIAAQAIAAAFAFQAEAFAAAIQAAAIgEAFQgFAFgIAAQgIAAgEgFgAgdgVQAAAJAGAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAABgBQABgBAAgFQAAgIgGAAQgGAAAAAIg");
	this.shape_28.setTransform(28.2,28.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAeQgGgLgBgTQABgSAGgLQAHgLAPAAQAQAAAHALQAHALAAASQAAATgHALQgHALgQAAQgPAAgHgLgAgJgWQgDADAAAGIgBANIABAOQAAAFADAEQAEADAFAAQAGAAADgDQAEgEABgFIABgOIgBgNQgBgGgEgDQgDgEgGAAQgFAAgEAEg");
	this.shape_29.setTransform(20.6,28.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgTQAAgSAGgLQAHgLAPAAQAQAAAHALQAHALgBASQABATgHALQgHALgQAAQgPAAgHgLgAgIgWQgDADgBAGIgCANIACAOQABAFADAEQADADAFAAQAGAAADgDQADgEACgFIABgOIgBgNQgCgGgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(14,28.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAoIAAhBIgKAAIAAgOIAZAAIAABPg");
	this.shape_31.setTransform(8.325,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(20,-10,0.3837,0.3837);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(4.6,-10,125.70000000000002,60.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAQQgGgGgBgKQABgIAGgHQAIgGAJgBQAKABAIAGQAHAHAAAIQAAAKgHAGQgIAHgKgBQgJABgIgHg");
	this.shape.setTransform(101.3,-36.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzBjIAfhEIg3iBIAuAAIAeBUIAehUIAtAAIhTDFg");
	this.shape_1.setTransform(94.275,-37.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA8QgNgIgIgQQgIgQAAgUQAAgUAIgQQAIgPANgIQAOgJAQAAQAOAAAKAGQALAGAGAJIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgJgAgTgXQgJAIAAAPQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgOgJgJQgIgJgMAAQgMAAgIAJg");
	this.shape_2.setTransform(78.875,-40.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBRQgNgIgIgQQgIgQAAgUQAAgVAIgPQAIgPANgJQAOgIAQAAQANAAALAFQALAGAGAJIAAg+IApAAIAACxIgpAAIAAgTQgGAJgLAGQgKAGgOAAQgQAAgOgJgAgTgDQgJAIAAAQQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgJAAgPQAAgQgJgHQgIgJgMAAQgMAAgIAIg");
	this.shape_3.setTransform(63.325,-42.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgQQgJgPAAgVQAAgUAKgQQAJgPAQgIQAPgJATAAQAUAAAQAJQAPAIAKAPQAJAQAAAUQAAAUgKAQQgJAQgQAIQgQAJgTAAQgTAAgQgJgAgTgYQgIAJAAAPQAAAQAIAJQAIAIALAAQALAAAJgIQAIgJAAgQQAAgPgIgIQgIgJgMAAQgLgBgIAJg");
	this.shape_4.setTransform(48.425,-40.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBTQgVAAgMgLQgNgLAAgYIAAg1IgQAAIAAgiIAQAAIAAggIAoAAIAAAgIAbAAIAAAiIgbAAIAAA1QAAAGADADQADACAHAAIAOAAIAAAjg");
	this.shape_5.setTransform(36.125,-42.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBEIAAhIQAAgNgGgIQgHgHgMAAQgKAAgIAHQgGAIgBANIAABIIgoAAIAAiFIAoAAIAAASQAHgJAKgFQAKgGANAAQAXAAAOAQQAPAPAAAaIAABOg");
	this.shape_6.setTransform(124,-71.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjA9QgQgJgJgPQgJgQAAgVQAAgTAKgQQAJgQAQgJQAPgIATAAQAUAAAQAIQAPAJAKAQQAJAQAAATQAAAVgKAQQgJAPgQAJQgQAIgTAAQgTAAgQgIgAgTgYQgIAIAAAQQAAAQAIAJQAIAJALAAQALAAAJgJQAIgJAAgQQAAgPgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_7.setTransform(109.425,-71.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBgIAAiFIAnAAIAACFgAgQg5QgIgGAAgKQAAgJAIgHQAGgGAKAAQAKAAAIAGQAGAHABAJQgBAKgGAGQgIAGgKAAQgKAAgGgGg");
	this.shape_8.setTransform(99.3,-74.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVBTQgVAAgMgLQgNgLAAgYIAAg1IgQAAIAAgiIAQAAIAAggIAoAAIAAAgIAbAAIAAAiIgbAAIAAA1QAAAGADADQADACAHAAIAOAAIAAAjg");
	this.shape_9.setTransform(91.825,-73.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA9QgNgJgIgQQgIgPAAgVQAAgUAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAGAGAJIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgIgAgTgYQgJAKAAAOQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgJAAgPQAAgPgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_10.setTransform(79.025,-71.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVBTQgVAAgMgLQgNgLAAgYIAAg1IgQAAIAAgiIAQAAIAAggIAoAAIAAAgIAbAAIAAAiIgbAAIAAA1QAAAGADADQADACAHAAIAOAAIAAAjg");
	this.shape_11.setTransform(67.125,-73.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA9QgMgHgGgNQgHgNAAgRIAAhOIApAAIAABIQAAAOAHAHQAHAHALAAQAMAAAHgHQAHgIAAgNIAAhIIApAAIAACFIgpAAIAAgSQgGAJgLAFQgKAGgNAAQgPAAgMgHg");
	this.shape_12.setTransform(54.625,-71.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFBkIAAjFIAoAAIAAATQAHgJAKgGQALgGANAAQAQAAANAIQAOAJAIAQQAIAPAAAVQAAAVgIAOQgIAQgOAJQgNAIgQAAQgNAAgLgGQgKgFgHgKIAABTgAgVg2QgIAIAAAQQAAAPAIAJQAJAIAMAAQAMAAAJgIQAIgJAAgPQAAgPgIgKQgJgIgMAAQgLAAgKAJg");
	this.shape_13.setTransform(39.35,-68.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghA9QgQgJgIgPQgJgQAAgVQAAgUAIgPQAJgQAPgJQAQgIATAAQATAAAPAIQAPAJAJAPQAIAPAAAUIAAALIhcAAQABAMAHAHQAHAGAKABQAPgBAGgNIArAAQgDAOgJAKQgJALgNAGQgNAGgQAAQgTAAgPgIgAAZgMQAAgLgHgFQgHgHgLAAQgJAAgHAGQgHAGgCALIAyAAIAAAAg");
	this.shape_14.setTransform(24.125,-71.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpBEIAAiFIApAAIAAAWQAGgLAMgGQAKgHANAAIAAAsIgLAAQgPAAgIAGQgHAHAAAQIAAA+g");
	this.shape_15.setTransform(12.45,-71.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBEIAAiFIApAAIAAAWQAGgLAMgGQAKgHANAAIAAAsIgLAAQgPAAgIAGQgHAHAAAQIAAA+g");
	this.shape_16.setTransform(91.1,-102.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpA9QgMgHgGgNQgHgNAAgRIAAhOIApAAIAABIQAAAOAHAHQAHAHALAAQAMAAAHgHQAHgIAAgNIAAhIIApAAIAACFIgpAAIAAgSQgGAJgLAFQgKAGgNAAQgPAAgMgHg");
	this.shape_17.setTransform(79.175,-102.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjA8QgQgIgJgQQgJgPAAgVQAAgTAKgRQAJgPAQgIQAPgJATAAQAUAAAQAJQAPAIAKAPQAJARAAATQAAAUgKAQQgJAQgQAIQgQAJgTAAQgTAAgQgJgAgTgYQgIAJAAAPQAAAQAIAJQAIAIALAAQALAAAJgIQAIgJAAgQQAAgPgIgIQgIgJgMAAQgLgBgIAJg");
	this.shape_18.setTransform(64.225,-102.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzBjIAfhEIg3iBIAuAAIAeBUIAehUIAtAAIhTDFg");
	this.shape_19.setTransform(50.175,-99.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBRQgNgIgIgQQgIgQAAgUQAAgVAIgPQAIgPANgJQAOgIAQAAQANAAALAFQALAGAGAJIAAg+IApAAIAACxIgpAAIAAgTQgGAJgLAGQgKAGgOAAQgQAAgOgJgAgTgDQgJAIAAAQQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgJAAgPQAAgQgJgHQgIgJgMAAQgMAAgIAIg");
	this.shape_20.setTransform(123.375,-135.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpBEIAAiFIApAAIAAAWQAGgLAMgGQAKgHANAAIAAAsIgLAAQgPAAgIAGQgHAHAAAQIAAA+g");
	this.shape_21.setTransform(111.35,-133.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpA9QgNgJgIgQQgIgPAAgVQAAgUAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgIgAgTgYQgJAKAAAOQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgPgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_22.setTransform(98.125,-133.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpA9QgMgHgGgNQgHgNAAgRIAAhOIApAAIAABIQAAAOAHAHQAHAHALAAQAMAAAHgHQAHgIAAgNIAAhIIApAAIAACFIgpAAIAAgSQgGAJgLAFQgKAGgNAAQgPAAgMgHg");
	this.shape_23.setTransform(83.625,-133.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBXQgTgOgDgYIApAAQACAHAHAFQAHAEAKABQANAAAHgIQAIgHAAgQIAAgTQgGAJgLAGQgKAGgOAAQgQAAgOgIQgNgJgIgQQgIgOAAgVQAAgVAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFQAAASgIAPQgHAQgPAIQgPAJgWAAQgdAAgSgOgAgTg4QgJAKAAAPQAAAPAJAJQAIAIAMAAQAMAAAIgIQAJgIAAgQQAAgQgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_24.setTransform(68.275,-130.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghA9QgQgJgIgQQgJgPAAgVQAAgUAIgPQAJgQAPgJQAQgIATAAQATAAAPAIQAPAJAJAPQAIAPAAAUIAAALIhcAAQABAMAHAHQAHAGAKABQAPgBAGgNIArAAQgDAOgJAKQgJALgNAGQgNAGgQAAQgTAAgPgIgAAZgMQAAgLgHgFQgHgHgLAAQgJAAgHAGQgHAGgCALIAyAAIAAAAg");
	this.shape_25.setTransform(52.875,-133.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXBeIAAhjIgPAAIAAgiIAPAAIAAgEQAAgYAOgNQANgNAcAAIAHAAIAAAjQgMgBgFAEQgFAFAAAKIAAABIAWAAIAAAiIgWAAIAABjg");
	this.shape_26.setTransform(41.65,-136.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpA9QgNgJgIgQQgIgPAAgVQAAgUAIgPQAIgQANgJQAOgIAQAAQAOAAAKAGQALAFAGAKIAAgTIApAAIAACFIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgIgAgTgYQgJAKAAAOQAAAPAJAJQAIAJAMAAQAMAAAIgJQAJgIAAgQQAAgPgJgIQgIgJgMAAQgMAAgIAIg");
	this.shape_27.setTransform(29.025,-133.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeBQQgOgGgJgLQgJgMgBgRIAsAAQABAKAGAFQAFAFAIAAQAKAAAEgFQAGgEAAgHQAAgHgFgEQgDgEgHgCIgQgGQgQgFgLgFQgKgFgIgJQgHgKAAgQQAAgYARgNQARgNAbAAQAbAAARANQASANAAAYIgsAAQAAgIgGgFQgGgEgHAAQgHAAgFAEQgFAEAAAHQAAAIAIAFQAIAEAPAGQARAFAKAFQAKAEAIAKQAGAJABAQQgBAOgGAMQgIAMgOAGQgOAHgSAAQgSAAgPgGg");
	this.shape_28.setTransform(14.4,-135.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aq5AAIVzAA");
	this.shape_29.setTransform(68.075,9.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(-2.7,-147.5,141.6,157.8), null);


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
	this.instance.setTransform(26,0,0.9025,0.9025);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2, new cjs.Rectangle(26,0,270.8,541.5), null);


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
	this.instance.setTransform(23,0,0.8573,0.8573);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(23,0,257.2,514.4), null);


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
	this.shape.graphics.f("#14A751").s().p("AgsA9QgKgNAAgXQAAgZAOgOQAOgMAXAAQAKAAAHADIAAgbQAAgKgFAAIgIgCIAAgGIAngGIACABIAACAQAAAGACACQACABAJABIAAAHIgpAAIAAgKQgPANgOAAQgSAAgLgOgAgSgIQgHAJAAAVQAAASAGAKQAGAKALAAQAKAAADgIQADgDAAgIIAAgnQAAgIgCgDQgEgJgKAAQgLAAgFAKg");
	this.shape.setTransform(100.3,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAHAyIAAgHIAJgCQACgCAAgFIAAgxQAAgTgRAAQgLAAgFAKQgCAEAAAIIAAAtQAAAGACACIAJACIAAAHIg0AAIAAgHIALgCQACgCABgGIAAg6QAAgJgGgBIgGgBIAAgHIAkgFIACANIASgKQAIgEAIAAQAeAAgBAfIAAAyQABAHACABQACACAJABIAAAHg");
	this.shape_1.setTransform(88.7,39.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgtAVIAAgwQAAgKgFgBIgHgBIAAgHIAngDIABABIAAA+QAAAWARAAQALAAAFgLQABgDAAgIIAAgpQAAgKgFgBIgHgBIAAgHIAngDIABABIAABPQAAAGACACIALACIAAAHIgnAAIgCgLIgNAIQgJAFgLAAQgdAAAAgdg");
	this.shape_2.setTransform(76.825,39.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAApAUAAQAVAAAAgqQAAgpgVAAQgUAAAAAqg");
	this.shape_3.setTransform(64.825,39.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAxBEQgOAAgHgEQgIgEgDgLIgGgcQgCgKgFgDQgEgDgJgBIgJAAIAAAtQAAAIADACQACACALAAIAAAHIg+AAIAAgHQALAAADgCQACgCAAgIIAAhhQAAgIgCgCQgDgCgLAAIAAgHIBBAAQAXAAALAGQAMAIAAATQAAAOgJAJQgIAIgQACIAAABQAbAGAFAcQACANADAGQAFAHAJABIAAAHgAgRg6QgBACAAAFIAAAwIAKAAQANAAAGgIQAFgHAAgNQAAgcgXAAQgIAAgCABg");
	this.shape_4.setTransform(51.025,37.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgZAIIAAgPIAzAAIAAAPg");
	this.shape_5.setTransform(40.725,39.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgnAyIAAgHQAJgBACgCQADgBAAgHIAAg5QAAgJgFgBIgHgBIAAgHIAkgFIABARQAKgKAFgEQAGgEAGAAQANAAAAANQAAAHgDAEQgEAFgGAAQgCAAgFgDQgHgFgEAAQgIAAAAARIAAArQAAAHADABQACACAMABIAAAHg");
	this.shape_6.setTransform(34.275,39.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAIAnIgKAIQgJAEgIAAQgOAAgIgJQgIgHABgNQAAgRAUgHQAfgKAFgDIAAgJQAAgRgMAAQgMAAgFATQgDAIgFAAQgGAAgEgDQgHgEABgEQgBgLALgGQANgIAUAAQAlAAAAAcIAAAsQAAAOAFACQADABAGAAIABAGQgMAGgOAAQgMAAgEgMgAgKACQgKAFAAANQgBAHAFAFQAEAEAHABQANAAAAgPIAAgcg");
	this.shape_7.setTransform(24,39.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgsAAQAAgVALgOQAMgPAYAAQAZAAAKAPQAIAKAAAQQgBAJgJAAIgzAAQgBAlAbAAQARAAAJgTIAHAEQgKAdggAAIgBAAQgtAAAAgzgAgMgfQgDAJAAAMIAaAAQAHAAAAgHQAAgZgQAAQgJAAgFALg");
	this.shape_8.setTransform(11.9,39.3502);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AghBEIAAgHQANAAADgCQAEgCAAgIIAAgeQAAgFgFgIIgeg3QgEgHgDgCQgCgCgIAAIAAgHIA9AAIAAAHIgLABQgFAAACAGIAbA2IABAAQAPgdAJgYQADgGgFgBIgLgBIAAgHIAuAAIAAAHQgJABgEABQgDADgEAGQgJAQgUAlQgDAHAAAHIAAAfQABAIACACQADACAOAAIAAAHg");
	this.shape_9.setTransform(0.8,37.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgtAAQAAgWAMgNQAMgPAYAAQAYAAALAPQAIAKAAAQQAAAIgLAAIgyAAQgBAmAbAAQARAAAJgSIAHADQgKAdggAAIgBAAQgtAAgBgzgAgMgfQgEAJABAMIAaAAQAHAAgBgGQAAgagPAAQgJAAgFALg");
	this.shape_10.setTransform(95.85,22.1502);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAlAyIAAgHIAJgCQADgCAAgFIAAgwQAAgUgQAAQgOAAgEAOIgBAKIAAAsQAAAFADACIAIACIAAAHIgxAAIAAgHIAJgCQACgCAAgFIAAgwQAAgUgPAAQgPAAgDAOIgBAJIAAAtQAAAFACACIAJACIAAAHIg1AAIAAgHQAKgBABgCQADgBAAgHIAAg5QAAgJgFgBIgIgBIAAgHIAmgFIACANIAPgJQAKgFAIAAQASAAAIAPIAPgJQAKgGAJAAQAfAAAAAfIAAAyQAAAHADABQABACAJABIAAAHg");
	this.shape_11.setTransform(82.4,22.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAApAUAAQAVAAAAgqQAAgpgVAAQgUgBAAArg");
	this.shape_12.setTransform(67.175,22.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AALBFIAAgIQALAAACgCQADgCAAgIIAAgxIg1AAIAAAxQAAAIACACQADACALAAIAAAIIg+AAIAAgIQALAAACgCQADgCAAgIIAAhhQAAgJgDgBQgCgCgLAAIAAgHIA+AAIAAAHQgLAAgDACQgCABAAAJIAAAoIA1AAIAAgoQAAgJgDgBQgCgCgLAAIAAgHIA+AAIAAAHQgLAAgDACQgCABAAAJIAABhQAAAIACACQADACALAAIAAAIg");
	this.shape_13.setTransform(54.2,20.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgnAyIAAgHQAJgBACgCQADgBAAgHIAAg5QAAgJgFgBIgHgBIAAgHIAkgFIABARQAKgKAFgEQAGgEAGAAQANAAAAANQAAAHgDAEQgEAFgGAAQgCAAgFgDQgHgFgEAAQgIAAAAARIAAArQAAAHADABQACACAMABIAAAHg");
	this.shape_14.setTransform(37.775,22.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgtAVIAAgwQAAgKgFgBIgHgBIAAgHIAngDIABABIAAA+QAAAWARAAQALAAAFgLQABgDAAgIIAAgpQAAgKgFgBIgHgBIAAgHIAngDIABABIAABPQAAAGACACIALACIAAAHIgnAAIgCgLIgNAIQgJAFgLAAQgdAAAAgdg");
	this.shape_15.setTransform(27.875,22.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAApAUAAQAVAAAAgqQAAgpgVAAQgUgBAAArg");
	this.shape_16.setTransform(15.875,22.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AghBFIAAgIQAOAAACgCQAEgCAAgHIAAgfQAAgFgFgIIgeg3QgEgHgDgCQgDgCgHAAIAAgHIA9AAIAAAHIgLABQgFAAACAGIAbA1IABAAQAPgbAJgZQADgGgFgBIgLgBIAAgHIAuAAIAAAHQgJABgEACQgDACgEAGQgJAPgUAnQgCAGgBAHIAAAgQABAHACACQADACAOAAIAAAIg");
	this.shape_17.setTransform(4.3,20.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgLA5QgIgHAAgNIAAhAIgMAAIAAgKIANAAIAQgYIAJAAIAAAYIAWAAIAAAKIgWAAIAAA5QAAASANAAQAFAAAFgCIACAGQgQAKgMAAQgIAAgHgFg");
	this.shape_18.setTransform(81.1,3.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgeAnQgNgNAAgZQAAgXANgOQANgOAXAAQAOAAALAGQAMAGAAAJQAAAGgGADQgEADgGAAQgHAAgCgGQgFgTgJABQgHAAgFAJQgGALAAASQAAAUAHALQAHAJALAAQASAAAIgTIAHADQgIAegiAAQgUAAgMgMg");
	this.shape_19.setTransform(72.15,4.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgtAAQAAgWAMgNQAMgPAYAAQAZAAAKAPQAIAKgBAQQAAAIgKAAIgyAAQgBAmAbAAQARAAAJgSIAHADQgLAdgfAAIgBAAQgtAAgBgzgAgMgfQgDAJAAAMIAaAAQAHAAgBgGQAAgagPAAQgJAAgFALg");
	this.shape_20.setTransform(60.65,4.9502);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgKA5QgJgHAAgNIAAhAIgMAAIAAgKIANAAIARgYIAJAAIAAAYIAVAAIAAAKIgVAAIAAA5QAAASAMAAQAFAAAFgCIACAGQgQAKgMAAQgIAAgGgFg");
	this.shape_21.setTransform(53.05,3.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgxAAQAAgyAxAAQAyAAAAAyQAAAzgyAAQgxAAAAgzgAgUABQAAAqAUgBQAVAAAAgqQAAgpgVAAQgUgBAAArg");
	this.shape_22.setTransform(43.625,4.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgnAyIAAgHQAJgBACgCQADgBAAgHIAAg5QAAgJgFgBIgHgBIAAgHIAkgFIABARIAPgOQAGgEAGAAQANAAAAANQAAAHgDAEQgEAFgGAAQgCAAgFgDQgHgFgEAAQgIAAAAARIAAArQAAAHADABQACACAMABIAAAHg");
	this.shape_23.setTransform(35.225,4.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("Ag4BFIAAgIQALAAACgCQADgCAAgHIAAhiQAAgIgDgCQgCgCgLgBIAAgGIA+AAQAYAAAMAGQAPAKAAAXQAAAYgTAKQgMAJgYAAQgIgBgFgBIAAAlQAAAHADACQADACANAAIAAAIgAgJg5QgCABAAAEIAAAyQAAAIAOAAQAXgBAAggQAAgQgHgJQgHgHgMAAQgHAAgCACg");
	this.shape_24.setTransform(23.275,2.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_25.setTransform(88.725,133.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgHgMQgGgMAAgPQAAgPAGgLQAHgMALgGQAMgGANAAQAPAAALAGQAMAGAFALQAHALAAAPIAAAIIhFAAQABAKAGAEQAFAFAHAAQALAAAEgJIAhAAQgDAKgGAHQgHAIgJAFQgLAEgMAAQgOAAgLgGgAATgJQAAgIgFgEQgGgFgIAAQgGAAgGAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_26.setTransform(82.15,129.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_27.setTransform(74.625,128);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJA+QgIgEgEgHIAAAOIgfAAIAAiDIAfAAIAAAvQAEgHAIgFQAIgEAKAAQAMAAAKAGQAKAHAGALQAGALAAAPQAAAQgGALQgGAMgKAGQgKAHgMAAQgKAAgIgFgAgPgCQgGAGAAALQAAAMAGAGQAGAHAJAAQAJAAAGgHQAGgGAAgMQAAgLgGgGQgGgGgJAAQgJAAgGAGg");
	this.shape_28.setTransform(67.425,128.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAtQgKgHgFgLQgHgMABgPQgBgPAHgLQAFgMAKgGQAKgGANAAQAJAAAIAEQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgFAHgHAEQgIAEgJAAQgNAAgKgGgAgOgRQgHAGAAALQAAALAHAHQAGAHAJAAQAIAAAHgHQAGgHAAgLQAAgKgGgHQgHgHgIAAQgJAAgGAHg");
	this.shape_29.setTransform(56,129.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_30.setTransform(48.625,128);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBIIAAhjIAdAAIAABjgAgMgqQgFgFAAgHQAAgHAFgFQAFgFAHABQAIgBAFAFQAFAFAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_31.setTransform(44.625,127.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeAtQgKgHgFgLQgHgMAAgPQAAgPAHgLQAFgMAKgGQAKgGANAAQAJAAAIAEQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgFAHgHAEQgIAEgJAAQgNAAgKgGgAgOgRQgHAGAAALQAAALAHAHQAGAHAJAAQAJAAAGgHQAGgHAAgLQAAgKgGgHQgGgHgJAAQgJAAgGAHg");
	this.shape_32.setTransform(36.75,129.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAyIgjhjIAhAAIAUBGIAWhGIAgAAIgjBjg");
	this.shape_33.setTransform(26.175,129.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAfA/IgIgWIgtAAIgIAWIggAAIAth9IAiAAIAuB9gAAQARIgQgtIgOAtIAeAAg");
	this.shape_34.setTransform(16,128.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAvQgLgFgFgIQgHgHAAgKIAeAAQABAFAEADQAEAEAFAAQAGAAADgDQADgCAAgDQAAgFgEgCIgOgEQgKgDgIgDQgGgCgGgFQgFgGAAgKQAAgJAFgHQAFgHAIgEQAKgEAMAAQASAAALAJQALAJACAQIgdAAQgBgGgDgDQgEgDgGAAQgFAAgCACQgDACAAAEQgBAEAFACQAEADAKACIASAFQAHADAEAFQAGAGAAALQAAAJgFAGQgFAHgJAEQgJAEgNAAQgMAAgJgEg");
	this.shape_35.setTransform(69.6,108.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATAyIAAg1QABgKgGgFQgFgGgJAAQgIAAgEAGQgGAFAAAKIAAA1IgeAAIAAhiIAeAAIAAANQAFgHAHgEQAIgDAJAAQASAAALALQAJALABAUIAAA5g");
	this.shape_36.setTransform(59.55,108.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAtQgKgHgGgLQgFgMAAgPQAAgPAFgLQAGgMAKgGQAKgGAMAAQAKAAAIAEQAIAEAEAHIAAgOIAeAAIAABjIgeAAIAAgOQgEAHgJAEQgHAEgKAAQgMAAgKgGgAgOgRQgGAGAAALQAAALAGAHQAHAHAHAAQAJAAAHgHQAGgHAAgLQAAgKgGgHQgHgHgJAAQgHAAgHAHg");
	this.shape_37.setTransform(48.05,108.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_38.setTransform(40.125,107.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgvA/IAAh9IAxAAQAPAAAKAGQALAFAFAJQAFAJAAAMQAAALgFAJQgFAIgKAFQgLAGgPAAIgSAAIAAAtgAgQgGIAQAAQAIAAAFgEQAEgEAAgHQAAgIgEgEQgFgEgIAAIgQAAg");
	this.shape_39.setTransform(32.825,107.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAyIAAg1QAAgKgFgFQgFgGgJAAQgHAAgGAGQgFAFAAAKIAAA1IgfAAIAAhiIAfAAIAAANQAFgHAHgEQAIgDAJAAQASAAAKALQAKALAAAUIAAA5g");
	this.shape_40.setTransform(89.4,88.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgaAtQgLgGgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgGQALgGAOAAQAPAAALAGQAMAGAHAMQAHAMAAAOQAAAPgHAMQgHAMgMAGQgMAGgOAAQgOAAgMgGgAgOgSQgGAHAAALQAAAMAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_41.setTransform(78.625,88.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBIIAAhjIAdAAIAABjgAgMgrQgFgEAAgHQAAgHAFgFQAFgEAHgBQAIABAFAEQAFAFAAAHQAAAHgFAEQgFAGgIAAQgHAAgFgGg");
	this.shape_42.setTransform(71.575,86);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAQA+QgQAAgJgIQgJgIAAgSIAAgoIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAoQAAAEACACQADACAEAAIALAAIAAAag");
	this.shape_43.setTransform(66.075,86.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAtQgLgGgHgMQgGgMAAgPQAAgPAGgLQAHgMALgGQAMgGANAAQATAAANAJQAMAKAEASIggAAQgEgLgNAAQgHAAgFAGQgFAHAAALQAAAMAFAHQAFAGAHAAQANAAAEgLIAgAAQgEARgMAKQgNAKgTAAQgNAAgMgGg");
	this.shape_44.setTransform(58.55,88.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAtQgMgGgGgMQgHgMAAgPQAAgPAHgLQAFgMAMgGQAMgGAOAAQAOAAALAGQAMAGAFALQAHALAAAPIgBAIIhEAAQABAKAFAEQAFAFAIAAQALAAAEgJIAhAAQgDAKgGAHQgHAIgKAFQgJAEgMAAQgOAAgLgGgAATgJQAAgIgGgEQgFgFgIAAQgGAAgGAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_45.setTransform(48.25,88.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAQA+QgQAAgJgIQgJgIAAgSIAAgoIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAoQAAAEACACQADACAEAAIALAAIAAAag");
	this.shape_46.setTransform(39.875,86.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaAtQgLgGgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgGQALgGAOAAQAPAAALAGQAMAGAHAMQAHAMAAAOQAAAPgHAMQgHAMgMAGQgMAGgOAAQgOAAgMgGgAgOgSQgGAHAAALQAAAMAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_47.setTransform(31.475,88.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgeAyIAAhiIAeAAIAAAQQAFgIAIgFQAIgEAKAAIAAAgIgIAAQgMAAgFAFQgGAFAAALIAAAug");
	this.shape_48.setTransform(23,88.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgvA/IAAh9IAxAAQAPAAAKAGQALAFAFAJQAFAJAAAMQAAALgFAJQgFAIgKAFQgLAGgPAAIgSAAIAAAtgAgQgGIAQAAQAIAAAFgEQAEgEAAgHQAAgIgEgEQgFgEgIAAIgQAAg");
	this.shape_49.setTransform(13.125,86.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA2AyIAAg1QAAgKgGgFQgFgFgIAAQgJAAgGAFQgFAFAAAKIAAA1IgdAAIAAg1QAAgKgFgFQgGgFgJAAQgIAAgFAFQgGAFABAKIAAA1IgfAAIAAhiIAfAAIAAAMQAEgGAHgEQAJgDAIAAQAMAAAJAEQAIAFAEAJQAGgIAJgFQAIgFALAAQATAAALALQALALAAAUIAAA5g");
	this.shape_50.setTransform(76.9,67.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAtQgLgGgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgGQALgGAOAAQAPAAALAGQAMAGAHAMQAHAMAAAOQAAAPgHAMQgHAMgMAGQgMAGgOAAQgOAAgMgGgAgOgSQgGAHAAALQAAAMAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_51.setTransform(62.475,67.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQA+QgQAAgJgIQgJgIAAgSIAAgoIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAoQAAAEACACQADACAEAAIALAAIAAAag");
	this.shape_52.setTransform(54.125,66.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAvQgLgFgGgIQgFgHgBgKIAeAAQAAAFAEADQAFAEAFAAQAGAAADgDQADgCAAgDQAAgFgEgCIgNgEQgMgDgGgDQgIgCgFgFQgFgGAAgKQAAgJAEgHQAGgHAJgEQAJgEALAAQATAAALAJQALAJACAQIgdAAQAAgGgFgDQgDgDgGAAQgFAAgDACQgCACAAAEQAAAEAEACQAEADAKACIASAFQAHADAEAFQAGAGAAALQAAAJgFAGQgFAHgJAEQgJAEgNAAQgLAAgKgEg");
	this.shape_53.setTransform(46.5,67.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAtQgJgFgFgKQgFgJAAgNIAAg5IAfAAIAAA1QAAAKAFAFQAFAGAIAAQAJAAAFgGQAFgFAAgKIAAg1IAfAAIAABiIgfAAIAAgNQgEAGgIAEQgHAEgKAAQgLAAgJgFg");
	this.shape_54.setTransform(36.825,67.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeA4QgOgIgIgPQgIgPAAgSQAAgRAIgPQAIgOAOgJQAPgIARAAQAWAAAQAMQAQALAFAVIghAAQgEgHgHgFQgHgEgJAAQgNAAgJAKQgIAKAAAPQAAARAIAJQAJAKANAAQAJAAAHgEQAHgEAEgIIAhAAQgFAVgQALQgQAMgWAAQgRAAgPgIg");
	this.shape_55.setTransform(25.025,66.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoiAAIRFAA");
	this.shape_56.setTransform(50.075,147.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-6.8,-7.5,113.7,155.8), null);


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
	this.shape.graphics.f("#14A751").s().p("AgmBLQgGgEAAgFQAAgHAFgEQAEgGAEAAQAEAAAFAFQAEADADAAQAHAAAEgPQACgFgEgIQgLgdgag7QgDgHgCgBIgKgCIAAgIIA5AAIAAAIIgJABQgEAAACAHIAXA9IAAAAQAOgmAGgXQACgHgGAAIgKgBIAAgIIArAAIAAAIQgJAAgCADQgDACgDAIIgkBgQgIAWgIAJQgIAHgKAAQgHAAgEgDg");
	this.shape.setTransform(85.65,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgcBOIAAgHQAKgBACgCQADgCAAgGIAAhxQAAgKgGgBIgIgBIAAgHIAogFIACAAIAACJQAAAGACACQACACAKABIAAAHg");
	this.shape_1.setTransform(78.325,93.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgcBLIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgHgBIAAgHIAngFIACABIAABVQAAAHACABQACACAKABIAAAHgAgMguQgEgEAAgIQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_2.setTransform(73.475,94.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_3.setTransform(61.475,96.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAJArIgMAHQgJAFgIgBQgPABgJgKQgIgIAAgNQAAgTAWgGQAhgMAGgEIAAgJQAAgSgOAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgGQAAgKAMgHQANgJAWAAQAnABAAAeIAAAvQAAAOAGADQADAAAGAAIABAIQgMAFgQAAQgLABgFgMgAgLACQgLAFAAANQAAAJAFAGQAEAEAIABQAOAAAAgQIAAgfg");
	this.shape_4.setTransform(45.1,96.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag3BJIAAgHQAMgBADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMgBIAAgIIBvAAIAAAnIgIAAQgFgRgFgFQgGgHgQAAIgPAAQgDAAgCABQgBACAAAFIAAAzIAXAAQAKAAAEgEQADgEADgLIAIAAIAAAwIgIAAQgDgMgDgDQgEgEgKAAIgXAAIAAAvQAAAIADACQACACAOABIAAAHg");
	this.shape_5.setTransform(31.425,94.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAOAAABAOQgBAGgDAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_6.setTransform(90.5,76.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_7.setTransform(79.875,76.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag1ABQAAg2A1AAQA2AAAAA2QAAA2g2AAQg1AAAAg2gAgWABQAAAsAWABQAXgBAAgsQAAgtgXAAQgWAAAAAtg");
	this.shape_8.setTransform(66.975,76.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgkBKIAAgJQAPAAADgCQADgCAAgIIAAghQABgFgFgIIghg8IgGgJQgEgCgIAAIAAgIIBCAAIAAAIIgNABQgFAAADAGIAdA6IABAAQAQgfAKgZQADgIgGAAIgLgBIAAgIIAwAAIAAAIQgJABgEACQgDABgEAIQgLAQgUApQgDAHgBAHIAAAiQABAIACACQAEACAOAAIAAAJg");
	this.shape_9.setTransform(54.6,74.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgmBPIAAgIQAJgBADgBQACgCAAgHIAAhKIgOAAIAAgKIAOAAIAAgGQAAgXAKgMQALgMASAAQAMAAAHAFQAFAFAAAFQAAAGgEADQgEAEgFAAQgGAAgCgGQgGgNgFAAQgGAAABANIACAfIAUAAIAAAKIgUAAIAABKQAAAHADACIANACIAAAIg");
	this.shape_10.setTransform(40.175,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag1ABQAAg2A1AAQA2AAAAA2QAAA2g2AAQg1AAAAg2gAgWABQAAAsAWABQAXgBAAgsQAAgtgXAAQgWAAAAAtg");
	this.shape_11.setTransform(29.425,76.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaAAQAaAAAMAQQAIAMAAAQQAAAJgLAAIg3AAQAAAoAcABQATgBAKgTIAHAEQgLAegiAAIgBAAQgxAAAAg2gAgNggQgEAIAAANIAdAAQAHAAAAgHQAAgagRAAQgKAAgFAMg");
	this.shape_12.setTransform(102.675,56.0502);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBACgCQACgBABgHIAAg+QAAgKgGgBIgHgBIAAgHIAngGIACASQAKgKAFgEQAGgEAHAAQANAAAAAOQAAAGgDAFQgEAGgGAAQgDAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACANABIAAAHg");
	this.shape_13.setTransform(94.25,55.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAJArIgMAHQgJAFgIgBQgPAAgJgJQgIgIAAgNQAAgTAWgGQAhgMAGgEIAAgJQgBgSgNAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgGQAAgKANgIQANgHAVgBQAnABAAAeIAAAvQAAAOAGADQADAAAHAAIAAAIQgMAFgPAAQgMAAgFgLgAgLACQgLAFAAAOQAAAIAFAFQAFAFAGABQAOAAABgQIAAgfg");
	this.shape_14.setTransform(83.2,56.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AhAACQAAgiATgWQAUgWApAAQAeAAAQAJIAAAmIgIAAQgFgSgHgJQgKgLgSAAQgYAAgLAaQgHARAAAXQAAAaAIARQALAaAZAAQARAAAKgMQAHgJAHgUIAIAAIgDAoQgRAKggAAQhNAAAAhLg");
	this.shape_15.setTransform(68.125,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaAAQAaAAAMAQQAIAMAAAQQAAAJgLAAIg3AAQAAAoAcABQATgBAKgTIAHAEQgLAegiAAIgBAAQgxAAAAg2gAgNggQgEAIAAANIAdAAQAHAAAAgHQAAgagRAAQgKAAgFAMg");
	this.shape_16.setTransform(47.725,56.0502);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AApBPQgUAAgKgNQgKgNgOgcIAAgCIAcgpQAFgGAGAAIAdAAIAAAHQgaAEgIAHIgNAOQAAAAAAAAQgBABAAAAQAAAAABABQAAAAAAABQAQAbAUAXQAHAIAJADIAAAHgAg6BPIAAgIQAJgBADgCQACgBAAgHIAAhxQAAgJgFgBIgIgCIAAgHIAogGIACABIAACJQAAAGADACQACACAJABIAAAIg");
	this.shape_17.setTransform(37.05,53.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAJArIgMAHQgIAFgJgBQgQAAgIgJQgIgIAAgNQAAgTAWgGQAhgMAFgEIAAgJQABgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgGQAAgKANgIQANgHAVgBQAnABAAAeIAAAvQAAAOAGADQAEAAAGAAIAAAIQgMAFgPAAQgNAAgEgLgAgLACQgLAFAAAOQAAAIAFAFQAFAFAGABQAPAAgBgQIAAgfg");
	this.shape_18.setTransform(24.45,56.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgkBKIAAgIIAMgBQAFgBACgCQACgCAAgHIAAh0IgKAAQgOAAgGAHQgEAFgGASIgHAAIAAgoIB9AAIAAAoIgIAAQgFgTgEgEQgGgHgPAAIgJAAIAAB0QAAAHABACQADACAFABIAMABIAAAIg");
	this.shape_19.setTransform(13.75,53.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgmBKQgGgDAAgGQAAgGAFgFQAEgFAEAAQAEAAAFAEQAEAEADAAQAHAAAEgOQACgGgEgJQgLgcgag8QgDgGgCgCIgKgCIAAgHIA5AAIAAAHIgJACQgEABACAFIAXA+IAAAAQAOgmAGgYQACgFgGgBIgKgCIAAgHIArAAIAAAHQgJABgCADQgDACgDAIIgkBhQgIAWgIAIQgIAHgKAAQgHAAgEgEg");
	this.shape_20.setTransform(85.65,39.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgcBPIAAgIQAKgBACgBQADgCAAgHIAAhxQAAgKgGgBIgIgBIAAgHIAogGIACACIAACIQAAAHACACQACABAKABIAAAIg");
	this.shape_21.setTransform(78.325,34.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgcBMIAAgIQAKgBACgBQACgCAAgHIAAg+QAAgJgFgBIgHgBIAAgHIAngHIACABIAABWQAAAHACACQACABAKABIAAAIgAgMguQgEgFAAgHQAAgHAEgEQAFgGAHAAQAHAAAFAGQAEAEAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_22.setTransform(73.475,34.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_23.setTransform(61.475,36.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAJAqIgMAIQgJAFgIAAQgPgBgJgIQgIgJAAgNQAAgTAWgHQAhgKAGgFIAAgJQAAgSgOAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgDAAgHQAAgKAMgIQANgHAWAAQAnAAAAAeIAAAvQAAAOAGACQADACAGgBIABAIQgMAFgQABQgLAAgFgNgAgLACQgLAGAAANQAAAIAFAFQAEAGAIAAQAOgBAAgQIAAgdg");
	this.shape_24.setTransform(45.1,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag3BKIAAgIQAMgBADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMgBIAAgHIBvAAIAAAmIgIAAQgFgRgFgGQgGgGgQAAIgPAAQgDAAgCACQgBABAAAEIAAA0IAXAAQAKAAAEgEQADgDADgMIAIAAIAAAwIgIAAQgDgLgDgEQgEgFgKAAIgXAAIAAAwQAAAJADABQACACAOABIAAAIg");
	this.shape_25.setTransform(31.425,34.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBACgCQADgBAAgHIAAg+QAAgKgGgBIgHgBIAAgHIAngGIACASQAKgKAFgEQAHgEAGAAQAOAAAAAOQAAAGgEAFQgEAGgGAAQgDAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACANABIAAAHg");
	this.shape_26.setTransform(93,17.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_27.setTransform(82.325,17.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag2A5QgRgVgBgkQABgjARgVQAUgUAiAAQAkAAASAUQATAVgBAjQABAkgTAVQgSAUgkAAQgjAAgTgUgAgkAAQAABEAkAAQAlAAAAhEQAAhDglAAQgkAAAABDg");
	this.shape_28.setTransform(66.4,15.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMA9QgIgHAAgOIAAhEIgNAAIAAgKIAOAAIARgbIALAAIAAAbIAWAAIAAAKIgWAAIAAA8QAAAUAMAAQAGAAAFgCIACAGQgRALgNgBQgIABgIgGg");
	this.shape_29.setTransform(49.6,16.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaAAQAaAAAMAQQAIALAAARQAAAJgLAAIg3AAQAAAoAcAAQATABAKgUIAHAEQgLAegiAAIgBAAQgxAAAAg2gAgNggQgEAIAAANIAdAAQAHAAAAgHQAAgagRAAQgKAAgFAMg");
	this.shape_30.setTransform(38.975,17.9002);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag5BKIAAgIQAMgBACgCQADgCAAgIIAAhpQAAgIgDgCQgCgCgMgBIAAgIIBEAAIAAAIQgNABgDACQgDACAAAIIAABkQAAAKAFADQADAEAPAAQARgBAHgHQAFgHAGgTIAIAAIgDArg");
	this.shape_31.setTransform(27.275,15.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA3QgLAAgHgGQgGgGgBgNIAAgvIgKAAIAAgPIAKAAIAAgWIARAAIAAAWIAWAAIAAAPIgWAAIAAAvQABAFACACQACADAGAAIALAAIAAAPg");
	this.shape_32.setTransform(105.15,-10.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWAsIAAgvQAAgMgGgGQgFgHgLAAQgJAAgGAHQgGAGAAAMIAAAvIgSAAIAAhWIASAAIAAAKQAFgGAGgDQAIgDAGAAQAKAAAJAFQAIAEAEAIQAFAJAAALIAAAzg");
	this.shape_33.setTransform(98.55,-9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_34.setTransform(88.675,-9.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA1AsIAAgvQAAgMgFgGQgHgHgKAAQgKAAgGAHQgGAGAAAMIAAAvIgRAAIAAgvQAAgMgFgGQgHgHgKAAQgKAAgGAHQgGAGAAAMIAAAvIgSAAIAAhWIASAAIAAAKQAEgGAIgDQAGgDAIAAQAKABAJAEQAHAEAFAIQADgHAJgFQAJgEAJgBQALAAAHAFQAJAEAFAIQAEAJAAALIAAAzg");
	this.shape_35.setTransform(76.5,-9.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_36.setTransform(63.925,-9.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgbA6QgLgJgCgOIASAAQACAHAHAEQAHAEAIAAQALAAAHgGQAGgHAAgNIAAgOQgEAGgIAEQgHAEgKAAQgLAAgKgGQgJgFgFgLQgGgJAAgNQAAgOAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABYQAAAMgFAKQgFAJgKAGQgJAFgOAAQgQAAgNgIgAgMguQgGADgDAHQgFAGAAAKQAAAJAFAGQADAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgFQADgHAAgJQAAgJgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_37.setTransform(53.7,-7.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHABgJQgBgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_38.setTransform(43.7,-9.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWAsIAAgvQAAgMgGgGQgFgHgLAAQgJAAgGAHQgGAGAAAMIAAAvIgSAAIAAhWIASAAIAAAKQAFgGAGgDQAIgDAGAAQAKAAAJAFQAIAEAEAIQAFAJAAALIAAAzg");
	this.shape_39.setTransform(34.2,-9.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAnQgKgFgGgLQgFgKAAgNQAAgNAFgKQAGgKAKgGQAJgFALAAQAKAAAHAEQAIAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgJgGgAgMgZQgGADgEAHQgDAGAAAJQAAAJADAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHAAgJQAAgIgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_40.setTransform(24.5,-9.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAoA3IAAhLIgiBLIgLAAIgihLIAABLIgSAAIAAhtIATAAIAmBVIAnhVIATAAIAABtg");
	this.shape_41.setTransform(13.175,-10.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA3QgLAAgHgGQgGgGgBgNIAAgvIgKAAIAAgPIAKAAIAAgWIARAAIAAAWIAWAAIAAAPIgWAAIAAAvQABAFACACQACADAGAAIALAAIAAAPg");
	this.shape_42.setTransform(70.85,-28.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQApQgIgDgFgHQgFgGAAgIIATAAQAAAFAFAEQAFAEAGAAQAIAAAEgDQAEgDAAgFQAAgFgEgCIgOgFIgQgFQgHgCgEgFQgFgFAAgJQAAgHAEgGQAFgGAHgDQAIgDAJAAQAPAAAJAHQAJAIABANIgSAAQgBgGgEgEQgEgDgHAAQgHAAgEADQgDACAAAFQAAADACADQADACADABIAKAEIAQAFQAGACAEAFQAFAFAAAIQAAAIgEAGQgEAFgIAEQgHADgLAAQgJAAgIgEg");
	this.shape_43.setTransform(64.175,-27.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_44.setTransform(56.025,-27.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIAmAAQAMAAAJAEQAJAEAEAIQAFAHAAAKQAAAIgEAHQgEAHgJAFQgJAEgNAAIgUAAIAAAtgAgUgDIAUAAQAKAAAFgFQAFgFAAgIQAAgTgUAAIgUAAg");
	this.shape_45.setTransform(45.575,-28.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbBAIASgqIgjhVIAVAAIAXBBIAahBIATAAIg1B/g");
	this.shape_46.setTransform(99.775,-43.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAsIAAhWIASAAIAAANQADgHAGgEQAHgDAJgBIAAATIgEAAQgLAAgGAGQgEAFAAANIAAAtg");
	this.shape_47.setTransform(91.775,-45.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_48.setTransform(84.425,-45.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAsIghhXIATAAIAYBHIAZhHIATAAIghBXg");
	this.shape_49.setTransform(76.075,-45.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHAAgJQAAgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_50.setTransform(65.85,-45.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbA3IAAhtIASAAIAABfIAlAAIAAAOg");
	this.shape_51.setTransform(57.825,-46.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAsIAAhWIASAAIAAANQADgHAGgEQAHgDAJgBIAAATIgEAAQgLAAgGAGQgEAFAAANIAAAtg");
	this.shape_52.setTransform(47.575,-45.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgIA9IAAhWIARAAIAABWgAgHgoQgEgEABgFQgBgFAEgDQADgDAEAAQAFAAAEADQACADAAAFQAAAFgCAEQgEADgFAAQgEAAgDgDg");
	this.shape_53.setTransform(42.7,-46.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHAAgJQAAgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_54.setTransform(35.7,-45.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA4QgHgEgFgGIAAAMIgSAAIAAh1IASAAIAAAsQAFgHAHgEQAIgEAJAAQAMAAAKAGQAJAFAFALQAGAJAAANQAAANgGALQgFAKgJAGQgKAGgMAAQgJAAgIgEgAgNgLQgFAEgEAHQgEAFAAAJQAAAJAEAHQAEAHAFADQAHAEAGAAQAGAAAHgEQAGgDADgHQAFgHAAgJQAAgJgFgGQgDgGgGgEQgHgDgGAAQgGAAgHADg");
	this.shape_55.setTransform(25.95,-46.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAfA3IgIgWIgtAAIgIAWIgTAAIAnhtIAVAAIAnBtgAASASIgSgzIgRAzIAjAAg");
	this.shape_56.setTransform(15.2,-46.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(3.3,-54.1,107.4,162.1), null);


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
	this.shape.setTransform(89.3,12.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAAQAAghAgAAQAiAAgBAhQABAigiAAQggAAAAgigAgNABQgBAcAOAAQAOgBAAgcQAAgbgOAAQgOAAABAcg");
	this.shape_1.setTransform(80.2,12.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAuIgyhLIAAAAIAAArIAAATQABAGAEABIAJABIAAAFIghAAIAAgFIAIgBQADgCAAgFIABgTIAAguQAAgFgCgBQgCgCgHAAIAAgFIAeAAIArBAIAAAAIAAggIgBgUQAAgFgDgBIgJgBIAAgFIAgAAIAAAFIgHABQgDACgBAEIgBAUIAAA7g");
	this.shape_2.setTransform(71.25,10.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAcIgBgTIAFAAQAGAUANAAQAEgBACgCQADgCAAgEQAAgHgNgGQgLgEgDgDQgFgEAAgIQAAgKAHgGQAGgFALAAQAMAAAHAEIAAASIgEAAQgCgIgDgDQgFgFgFAAQgDAAgDADQgDABABAEQgBAHANAFQALADAEAEQAFAEAAAJQAAAKgHAGQgIAFgLAAQgOAAgIgGg");
	this.shape_3.setTransform(58.35,12.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAiQgFgIAAgMIAAgwQAAgFgCgBIgIgBIAAgFIApAAIAAAFIgJABQgCABAAAFIAAAxQAAAaARAAQATAAAAgaIAAgxQAAgFgCgBIgJgBIAAgFIAoAAIAAAFIgJABQgBABAAAFIAAAwQAAALgEAIQgIAOgaAAQgYAAgIgNg");
	this.shape_4.setTransform(50.275,11.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgFIAIAAIALgRIAGAAIAAARIAOAAIAAAFIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_5.setTransform(39.825,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAaQgJgJABgQQgBgPAJgJQAIgKAQAAQAJAAAHAEQAIAEAAAGQAAAEgDACQgDACgEAAQgFAAgBgEQgEgMgGAAQgEAAgEAGQgDAHAAAMQgBANAGAIQAEAGAHAAQAMAAAGgNIAEACQgGAUgWAAQgOAAgHgIg");
	this.shape_6.setTransform(33.9,12.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAbIgHAEQgGADgFAAQgKAAgFgFQgFgGAAgIQAAgMAOgEQAUgGADgDIAAgGQAAgLgIAAQgHAAgEANQgCAFgEAAQgDAAgDgCQgEgCAAgDQAAgIAHgEQAJgFANAAQAYAAAAATIAAAdQAAAJAEABIAGABIAAAEQgIAEgJAAQgIAAgCgHgAgGABQgHADAAAJQAAAFADAEQACACAFAAQAIAAAAgKIAAgSg");
	this.shape_7.setTransform(26.475,12.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgFIAIAAIALgRIAGAAIAAARIAOAAIAAAFIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_8.setTransform(21.125,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAhIAAgFIAHgBQABgBAAgEIAAggQAAgNgLAAQgHAAgEAIIgBAHIAAAeQAAAEACABIAFABIAAAFIgjAAIAAgFQAHAAABgBQABgBAAgEIAAgnQAAgGgDAAIgEgBIAAgEIAYgEIABAJIAMgGQAGgDAFAAQATAAAAAUIAAAiQABAEABABQABABAGAAIAAAFg");
	this.shape_9.setTransform(15.15,12.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAAQABghAgAAQAiAAAAAhQAAAigiAAQggAAgBgigAgOABQAAAcAOAAQAOgBAAgcQAAgbgOAAQgOAAAAAcg");
	this.shape_10.setTransform(7.05,12.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnABQAAgVALgNQANgOAZAAQASAAALAGIAAAXIgFAAQgEgLgEgFQgGgHgLAAQgPAAgHAQQgEAKAAAPQAAAPAFALQAHAQAPAAQAKAAAHgHQAEgFAEgNIAFAAIgBAZQgLAGgUAAQgvAAAAgvg");
	this.shape_11.setTransform(-2.375,10.925);

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
	this.instance.setTransform(121.45,54.55,0.0862,0.0862,0,0,0,480.8,69);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABnIAAjOMD4xAAAIAADOg");
	this.shape.setTransform(120.401,46.4994,0.0862,0.0862);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgzgSkIAqBdMggzASkg");
	this.shape_1.setTransform(45.0753,29.4682,0.0862,0.0862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gmgMl7QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA9ATQB/AnAMF6QAMF7htHxQhuHximFFQhOCZhKBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(25.184,50.2841,0.0862,0.0862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzihQj0lTjFoPQjFoNgjmVQgRi/Ach1QAdh4BIgXQBJgWBoBPQBkBMB0ChQDzFTDFIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(36.2609,49.6268,0.0862,0.0862);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nuhTmNQgoi7ALh3QAMh7BBghQBBggBrBBQBoA+CACQQEOEvD7HwQD7HuBTGNQAoC7gLB3QgMB8hBAgQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(25.6172,24.095,0.0862,0.0862);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(125.05,32.3,0.0863,0.0863,0,0,0,853.6,162.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AsVQcMAXVghyIBWA7MgXVAhyg");
	this.shape_5.setTransform(40.8479,23.2388,0.0863,0.0863);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("Ag+FKQoQg9ljiMQinhChWhGQhYhJANhDQAMhDBwgyQBsgwC5gZQGIg1IPA9QIQA9FjCMQCnBCBWBFQBYBJgNBDQgaCJmHA2Qi2AZjUAAQjzAAkaghg");
	this.shape_6.setTransform(16.2126,35.1019,0.0863,0.0863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(5.2,13.7,203.8,47), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2436},6).to({rotation:0},5).wait(1));

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
	this.instance.setTransform(507.6,-112.15,0.32,0.32,-98.013,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.1,scaleX:0.2591,scaleY:0.2591,rotation:-98.0113,x:126.35,y:-339.85,startPosition:9},96,cjs.Ease.get(-1)).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_1 = new lib.a("synched",0);
	this.instance_1.setTransform(535.1,-2.15,0.32,0.32,-98.013,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({scaleX:0.2679,scaleY:0.2679,rotation:-98.0106,x:138.35,y:-196.95,startPosition:5},77).to({_off:true},1).wait(14));

	// Layer_4
	this.instance_2 = new lib.a("synched",0);
	this.instance_2.setTransform(92.25,-321.9,0.3999,0.3999,67.8397,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.3992,scaleY:0.3992,rotation:67.0084,x:98.8764,y:-321.8668,startPosition:1},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,rotation:66.1845,x:105.4935,y:-321.7844,startPosition:2},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:65.368,x:112.0513,y:-321.7027,startPosition:3},0).wait(1).to({scaleX:0.3971,scaleY:0.3971,rotation:64.5588,x:118.5498,y:-321.6217,startPosition:4},0).wait(1).to({scaleX:0.3965,scaleY:0.3965,rotation:63.7571,x:124.9891,y:-321.5415,startPosition:5},0).wait(1).to({scaleX:0.3958,scaleY:0.3958,rotation:62.9627,x:131.3691,y:-321.462,startPosition:6},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,rotation:62.1757,x:137.6898,y:-321.3832,startPosition:7},0).wait(1).to({scaleX:0.3945,scaleY:0.3945,rotation:61.396,x:143.9512,y:-321.3052,startPosition:8},0).wait(1).to({scaleX:0.3938,scaleY:0.3938,rotation:60.6238,x:150.1533,y:-321.2279,startPosition:9},0).wait(1).to({scaleX:0.3931,scaleY:0.3931,rotation:59.8589,x:156.2961,y:-321.1513,startPosition:10},0).wait(1).to({scaleX:0.3925,scaleY:0.3925,rotation:59.1015,x:162.3797,y:-321.0755,startPosition:11},0).wait(1).to({scaleX:0.3919,scaleY:0.3919,rotation:58.3514,x:168.404,y:-321.0003,startPosition:0},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:57.6087,x:174.369,y:-320.926,startPosition:1},0).wait(1).to({scaleX:0.3906,scaleY:0.3906,rotation:56.8733,x:180.2747,y:-320.8523,startPosition:2},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:56.1454,x:186.1211,y:-320.7794,startPosition:3},0).wait(1).to({scaleX:0.3894,scaleY:0.3894,rotation:55.4248,x:191.9083,y:-320.7073,startPosition:4},0).wait(1).to({scaleX:0.3888,scaleY:0.3888,rotation:54.7117,x:197.6361,y:-320.6358,startPosition:5},0).wait(1).to({scaleX:0.3882,scaleY:0.3882,rotation:54.0059,x:203.3047,y:-320.5652,startPosition:6},0).wait(1).to({scaleX:0.3876,scaleY:0.3876,rotation:53.3074,x:208.914,y:-320.4952,startPosition:7},0).wait(1).to({scaleX:0.387,scaleY:0.387,rotation:52.6164,x:214.464,y:-320.426,startPosition:8},0).wait(1).to({scaleX:0.3864,scaleY:0.3864,rotation:51.9328,x:219.9547,y:-320.3575,startPosition:9},0).wait(1).to({scaleX:0.3858,scaleY:0.3858,rotation:51.2565,x:225.3862,y:-320.2897,startPosition:10},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,rotation:50.5876,x:230.7583,y:-320.2227,startPosition:11},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:49.9261,x:236.0712,y:-320.1564,startPosition:0},0).wait(1).to({scaleX:0.3842,scaleY:0.3842,rotation:49.272,x:241.3248,y:-320.0909,startPosition:1},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:48.6253,x:246.519,y:-320.0261,startPosition:2},0).wait(1).to({scaleX:0.3831,scaleY:0.3831,rotation:47.9859,x:251.6541,y:-319.962,startPosition:3},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,rotation:47.3539,x:256.7298,y:-319.8987,startPosition:4},0).wait(1).to({scaleX:0.382,scaleY:0.382,rotation:46.7294,x:261.7462,y:-319.8361,startPosition:5},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,rotation:46.1122,x:266.7034,y:-319.7743,startPosition:6},0).wait(1).to({scaleX:0.381,scaleY:0.381,rotation:45.5023,x:271.6012,y:-319.7132,startPosition:7},0).wait(1).to({scaleX:0.3805,scaleY:0.3805,rotation:44.8999,x:276.4398,y:-319.6528,startPosition:8},0).wait(1).to({scaleX:0.3799,scaleY:0.3799,rotation:44.3048,x:281.2191,y:-319.5932,startPosition:9},0).wait(1).to({scaleX:0.3795,scaleY:0.3795,rotation:43.7172,x:285.9391,y:-319.5343,startPosition:10},0).wait(1).to({scaleX:0.379,scaleY:0.379,rotation:43.1369,x:290.5998,y:-319.4761,startPosition:11},0).wait(1).to({scaleX:0.3785,scaleY:0.3785,rotation:42.564,x:295.2012,y:-319.4187,startPosition:0},0).wait(1).to({scaleX:0.378,scaleY:0.378,rotation:41.9984,x:299.7433,y:-319.362,startPosition:1},0).wait(1).to({scaleX:0.3775,scaleY:0.3775,rotation:41.4403,x:304.2261,y:-319.3061,startPosition:2},0).wait(1).to({scaleX:0.3771,scaleY:0.3771,rotation:40.8895,x:308.6497,y:-319.2509,startPosition:3},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,rotation:40.3462,x:313.0139,y:-319.1964,startPosition:4},0).wait(1).to({scaleX:0.3761,scaleY:0.3761,rotation:39.8102,x:317.3189,y:-319.1427,startPosition:5},0).wait(1).to({scaleX:0.3757,scaleY:0.3757,rotation:39.2815,x:321.5646,y:-319.0897,startPosition:6},0).wait(1).to({scaleX:0.3752,scaleY:0.3752,rotation:38.7603,x:325.751,y:-319.0375,startPosition:7},0).wait(1).to({scaleX:0.3748,scaleY:0.3748,rotation:38.2465,x:329.8781,y:-318.986,startPosition:8},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,rotation:37.74,x:333.9459,y:-318.9352,startPosition:9},0).wait(1).to({scaleX:0.374,scaleY:0.374,rotation:37.2409,x:337.9544,y:-318.8852,startPosition:10},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,rotation:36.7492,x:341.9036,y:-318.8359,startPosition:11},0).wait(1).to({scaleX:0.3731,scaleY:0.3731,rotation:36.2649,x:345.7936,y:-318.7873,startPosition:0},0).wait(1).to({scaleX:0.3727,scaleY:0.3727,rotation:35.788,x:349.6242,y:-318.7395,startPosition:1},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,rotation:35.3184,x:353.3956,y:-318.6925,startPosition:2},0).wait(1).to({scaleX:0.3719,scaleY:0.3719,rotation:34.8562,x:357.1076,y:-318.6461,startPosition:3},0).wait(1).to({scaleX:0.3716,scaleY:0.3716,rotation:34.4015,x:360.7604,y:-318.6005,startPosition:4},0).wait(1).to({scaleX:0.3712,scaleY:0.3712,rotation:33.9541,x:364.3539,y:-318.5557,startPosition:5},0).wait(1).to({scaleX:0.3708,scaleY:0.3708,rotation:33.514,x:367.888,y:-318.5116,startPosition:6},0).wait(1).to({scaleX:0.3704,scaleY:0.3704,rotation:33.0814,x:371.3629,y:-318.4682,startPosition:7},0).wait(1).to({scaleX:0.3701,scaleY:0.3701,rotation:32.6561,x:374.7785,y:-318.4256,startPosition:8},0).wait(1).to({scaleX:0.3697,scaleY:0.3697,rotation:32.2383,x:378.1348,y:-318.3837,startPosition:9},0).wait(1).to({scaleX:0.3694,scaleY:0.3694,rotation:31.8278,x:381.4318,y:-318.3426,startPosition:10},0).wait(1).to({scaleX:0.369,scaleY:0.369,rotation:31.4247,x:384.6696,y:-318.3022,startPosition:11},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:31.0289,x:387.848,y:-318.2625,startPosition:0},0).wait(1).to({scaleX:0.3684,scaleY:0.3684,rotation:30.6406,x:390.9671,y:-318.2236,startPosition:1},0).wait(1).to({scaleX:0.368,scaleY:0.368,rotation:30.2596,x:394.0269,y:-318.1854,startPosition:2},0).wait(1).to({scaleX:0.3677,scaleY:0.3677,rotation:29.8861,x:397.0275,y:-318.1479,startPosition:3},0).wait(1).to({scaleX:0.3674,scaleY:0.3674,rotation:29.5199,x:399.9687,y:-318.1112,startPosition:4},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,rotation:29.1611,x:402.8507,y:-318.0753,startPosition:5},0).wait(1).to({scaleX:0.3668,scaleY:0.3668,rotation:28.8096,x:405.6733,y:-318.04,startPosition:6},0).wait(1).to({scaleX:0.3665,scaleY:0.3665,rotation:28.4656,x:408.4367,y:-318.0055,startPosition:7},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,rotation:28.1289,x:411.1408,y:-317.9718,startPosition:8},0).wait(1).to({scaleX:0.366,scaleY:0.366,rotation:27.7996,x:413.7855,y:-317.9388,startPosition:9},0).wait(1).to({scaleX:0.3657,scaleY:0.3657,rotation:27.4777,x:416.371,y:-317.9065,startPosition:10},0).wait(1).to({scaleX:0.3654,scaleY:0.3654,rotation:27.1632,x:418.8972,y:-317.875,startPosition:11},0).wait(1).to({scaleX:0.3652,scaleY:0.3652,rotation:26.8561,x:421.3641,y:-317.8442,startPosition:0},0).wait(1).to({scaleX:0.3649,scaleY:0.3649,rotation:26.5563,x:423.7717,y:-317.8142,startPosition:1},0).wait(1).to({scaleX:0.3647,scaleY:0.3647,rotation:26.264,x:426.12,y:-317.7849,startPosition:2},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,rotation:25.979,x:428.409,y:-317.7563,startPosition:3},0).wait(1).to({scaleX:0.3642,scaleY:0.3642,rotation:25.7014,x:430.6387,y:-317.7285,startPosition:4},0).wait(1).to({scaleX:0.3639,scaleY:0.3639,rotation:25.4312,x:432.8091,y:-317.7014,startPosition:5},0).wait(1).to({scaleX:0.3637,scaleY:0.3637,rotation:25.1683,x:434.9202,y:-317.6751,startPosition:6},0).wait(1).to({scaleX:0.3635,scaleY:0.3635,rotation:24.9129,x:436.972,y:-317.6494,startPosition:7},0).wait(1).to({scaleX:0.3633,scaleY:0.3633,rotation:24.6648,x:438.9645,y:-317.6246,startPosition:8},0).wait(1).to({scaleX:0.3631,scaleY:0.3631,rotation:24.4241,x:440.8978,y:-317.6005,startPosition:9},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,rotation:24.1908,x:442.7717,y:-317.5771,startPosition:10},0).wait(1).to({scaleX:0.3627,scaleY:0.3627,rotation:23.9649,x:444.5863,y:-317.5544,startPosition:11},0).wait(1).to({scaleX:0.3625,scaleY:0.3625,rotation:23.7463,x:446.3417,y:-317.5325,startPosition:0},0).wait(1).to({scaleX:0.3623,scaleY:0.3623,rotation:23.5352,x:448.0377,y:-317.5114,startPosition:1},0).wait(1).to({scaleX:0.3622,scaleY:0.3622,rotation:23.3314,x:449.6744,y:-317.4909,startPosition:2},0).wait(1).to({scaleX:0.362,scaleY:0.362,rotation:23.135,x:451.2519,y:-317.4713,startPosition:3},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,rotation:22.946,x:452.77,y:-317.4523,startPosition:4},0).wait(1).to({scaleX:0.3617,scaleY:0.3617,rotation:22.7644,x:454.2289,y:-317.4341,startPosition:5},0).wait(1).to({scaleX:0.3615,scaleY:0.3615,rotation:22.5901,x:455.6284,y:-317.4167,startPosition:6},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,rotation:22.4233,x:456.9687,y:-317.3999,startPosition:7},0).wait(1).to({scaleX:0.3613,scaleY:0.3613,rotation:22.2638,x:458.2496,y:-317.3839,startPosition:8},0).wait(1).to({scaleX:0.3611,scaleY:0.3611,rotation:22.1117,x:459.4713,y:-317.3687,startPosition:9},0).wait(1).to({scaleX:0.361,scaleY:0.361,rotation:21.967,x:460.6337,y:-317.3542,startPosition:10},0).wait(1).to({scaleX:0.3609,scaleY:0.3609,rotation:21.8296,x:461.7367,y:-317.3404,startPosition:11},0).wait(1).to({scaleX:0.3608,scaleY:0.3608,rotation:21.6997,x:462.7805,y:-317.3274,startPosition:0},0).wait(1).to({scaleX:0.3607,scaleY:0.3607,rotation:21.5771,x:463.765,y:-317.3151,startPosition:1},0).wait(1).to({regX:0.2,regY:-0.1,scaleX:0.3606,scaleY:0.3606,rotation:21.4619,x:464.7,y:-317.3,startPosition:2},0).to({_off:true},1).wait(14));

	// Layer_1
	this.instance_3 = new lib.a("synched",0);
	this.instance_3.setTransform(164.6,-282.3,0.3999,0.3999,5.4272,0,0,0.2,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regX:0.3,scaleX:0.36,scaleY:0.36,rotation:-29.2716,x:505.15,y:-423.4,startPosition:5},78).to({_off:true},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-461,563.6,486.2);


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

	// Anim
	this.instance_7 = new lib.TICK_1("synched",0);
	this.instance_7.setTransform(-108,448.5,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},101).wait(259));

	// Img2
	this.instance_8 = new lib.Img2();
	this.instance_8.setTransform(54.05,94.5,0.9,0.9,0,0,0,150,105);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// Img1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(84.05,94.5,0.9,0.9,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16476A").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-1,307.1,678.9);


// stage content:
(lib.WFSB_217810_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80.0012,300.0075);

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
p.nominalBounds = new cjs.Rectangle(79,299,221,302);
// library properties:
lib.properties = {
	id: '9AB1DC1B8C18844BBBA000473B7B24CE',
	width: 160,
	height: 600,
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