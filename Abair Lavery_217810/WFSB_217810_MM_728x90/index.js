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
	this.shape.setTransform(85.875,57.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_1.setTransform(82.475,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAggQAAgIgEgEQgEgDgGAAQgFAAgEADQgDAEAAAIIAAAgIgQAAIAAg8IAQAAIAAAHQADgDAEgCQAFgDAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_2.setTransform(77.45,55.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgJAEgGQAEgHAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAEAAAFQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_3.setTransform(70.475,55.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAg8IAPAAIAAA8gAgGgbQgDgCABgEQgBgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(66.1,53.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_5.setTransform(63.175,54.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAuIAAhZIAQAAIAAAJQADgFAFgDQAFgCAGAAQAIAAAGADQAGAFAEAHQAEAGAAAKQAAAJgEAGQgEAIgGADQgGAFgIAAQgGAAgFgDQgFgDgDgEIAAAmgAgHgcQgEACgCADQgCAEAAAGQAAAFACAEQACAEAEACQAEACADAAQAEAAAEgCQADgCADgEQACgEAAgFQAAgGgCgEQgDgEgDgCQgEgCgEAAQgDAAgEADg");
	this.shape_6.setTransform(58.475,56.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAfIAAggQAAgIgEgEQgDgDgGAAQgHAAgDADQgEAEAAAIIAAAgIgOAAIAAggQAAgIgEgEQgEgDgGAAQgGAAgEADQgEAEAAAIIAAAgIgPAAIAAg8IAPAAIAAAHQADgDAFgCQAFgDAFAAQAHAAAGADQAFADADAGQADgFAFgDQAGgEAHAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_7.setTransform(48.925,55.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgGAAgKQAAgJAEgGQAEgHAHgFQAHgDAIAAQAJAAAHADQAHAFAEAHQAEAGAAAJQAAAKgEAGQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAJAEAFQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_8.setTransform(40.075,55.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAiQgJgFgGgJQgEgIAAgMQAAgKAEgJQAGgJAJgFQAJgFAJAAQANAAAKAHQAKAGADAMIgSAAQgCgGgFgCQgFgDgGAAQgFAAgGADQgFADgDAGQgDAGAAAGQAAAIADAGQADAFAFAEQAGADAFAAQAGAAAFgDQAFgDACgFIASAAQgDALgKAHQgKAGgNAAQgJAAgJgFg");
	this.shape_9.setTransform(32.8,54.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAtIANgfIgZg6IASAAIAOAqIAQgqIARAAIglBZg");
	this.shape_10.setTransform(23.425,56.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_11.setTransform(18.125,54.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAbQgHgDgEgIQgEgGAAgKQAAgJAEgGQAEgHAHgFQAGgDAIAAQAJAAAHADQAHAEAEAHQADAHAAAIIAAAGIgsAAQABAGAEAEQAEADAFAAQAJAAADgGIARAAQgDAIgHAGQgIAFgLABQgHAAgHgFgAAPgEQgBgHgEgDQgEgEgGAAQgFAAgEAEQgEADAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(12.825,55.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgGAAIAAgMIAGAAIAAgDQAAgLAHgGQAFgFANAAIAAANQgGAAgCACQgCACAAAFIAAADIAKAAIAAAMIgKAAIAAAwg");
	this.shape_13.setTransform(7.55,54.0229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgJAEgGQAEgHAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAEAAAFQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgFgCgEQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_14.setTransform(1.825,55.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAlQgHgDgDgFQgEgGAAgHIARAAQAAAFADADQADACAFAAQAFAAADgCQADgDAAgEQAAgDgCgCIgGgEIgHgDIgNgEQgEgBgEgEQgCgFAAgHQAAgHACgFQAEgFAGgDQAHgDAHAAQALAAAIAHQAHAFABALIgRAAQgBgEgCgDQgEgCgDAAQgFAAgDACQgCACAAAFQAAADACABIAEAEIAIADIAMAEQAFACAEAEQADAEAAAHQAAAHgDAFQgEAFgGADQgGADgIABQgIAAgGgDg");
	this.shape_15.setTransform(-4.65,54.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgDgDgGQgEgFAAgGQAAgIAEgHQAFgEAIgEIgEgHQgCgDAAgEQAAgGADgEQADgEAFgCQAFgDAHAAQAGAAAFADQAFADACAEQADAEgBAGIgOAAQAAgEgBgCQgCgCgDAAQgEAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAABQAAADACACIAFAGIATATIAAgBIAAAAIAHgJIAQAAIgIAMIgFAIIATASIgTAAIgIgIQgLAKgPAAQgIAAgGgDgAgZAQQAAAEAEAEQAEADAGAAQAJAAAGgHIgSgSQgLAEAAAKg");
	this.shape_16.setTransform(111.225,41.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(101.125,41.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgGQgDgIAAgJQAAgIAEgIQAEgGAHgEQAHgEAIgBQAJABAHAEQAHAEAEAGQAEAIAAAIQAAAJgEAIQgEAGgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAGAAAHQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgHgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_18.setTransform(94.275,42.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgGQgDgIAAgJQAAgIAEgIQAEgGAHgEQAHgEAIgBQAJABAHAEQAHAEAEAGQAEAIAAAIQAAAJgEAIQgEAGgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAGAAAHQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgHgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_19.setTransform(87.425,42.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAmIAAhLIAvAAIAAAMIgfAAIAAAUIAXAAIAAALIgXAAIAAAgg");
	this.shape_20.setTransform(81.825,41.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(73.075,41.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAghQAAgHgEgEQgEgEgGAAQgFAAgEAEQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAIQADgEAFgDQAEgCAFAAQALAAAGAHQAHAHAAAMIAAAjg");
	this.shape_22.setTransform(66.6,42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgGQgEgIAAgJQAAgIAEgIQAEgGAGgEQAGgEAIgBQAGABAFADQAFACADAEIAAgIIAQAAIAAA7IgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCADAAAFQAAAGACAEQADADADADQAEACADAAQAEAAAEgCQAEgDACgDQACgEAAgGQAAgFgCgDQgCgEgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_23.setTransform(59.625,42.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAmIgFgOIgdAAIgGAOIgQAAIAchLIARAAIAbBLgAALALIgLgeIgKAeIAVAAg");
	this.shape_24.setTransform(50.3,41.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAmIAAggIgfAAIAAAgIgQAAIAAhLIAQAAIAAAfIAfAAIAAgfIAQAAIAABLg");
	this.shape_25.setTransform(42.4,41.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAkQgHgCgDgGQgEgFAAgGIARAAQAAAEADADQADACAFABQAFgBADgCQADgDAAgDQAAgEgCgDIgGgDIgHgCIgMgFQgFgBgEgFQgCgEAAgHQAAgHACgFQAEgFAGgDQAHgCAHAAQALAAAIAFQAHAGABAKIgRAAQgBgDgCgDQgEgCgDgBQgFAAgDACQgCADAAAEQAAAEACACIAEADIAIACIAMAFQAFACAEAEQADAEAAAIQAAAFgDAFQgEAGgGADQgGADgIAAQgIAAgGgDg");
	this.shape_26.setTransform(34.5,41.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgIQAFgJAJgGQAJgEAKAAQALAAAJAEQAJAGAFAJQAFAIAAALQAAALgFAJQgFAJgJAFQgJAGgLgBQgKABgJgGgAgLgVQgGACgDAHQgDAFAAAHQAAAHADAHQADAFAGAEQAFADAGAAQAHAAAFgDQAFgEADgFQADgHAAgHQAAgHgDgFQgDgHgFgCQgFgEgHAAQgGAAgFAEg");
	this.shape_27.setTransform(26.675,41.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAjQgEgEAAgJQAAgJAFgFQAEgEAJAAQAHAAAFAEQAEAFABAJQgBAJgEAEQgFAFgHAAQgIAAgGgFgAASAWQAAAJAGgBQAHABAAgJQAAgJgHABQgGgBAAAJgAgcAmIAqhLIAPAAIgqBLgAgkgIQgEgFAAgIQAAgJAEgEQAFgFAIAAQAIAAAFAFQAEAEAAAJQAAAIgEAFQgFAFgIAAQgIAAgFgFgAgdgVQAAAJAGAAQABAAAAgBQABAAABAAQAAAAABgBQAAAAABgBQABgCAAgEQAAgJgGABQgGgBAAAJg");
	this.shape_28.setTransform(14.1,41.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAeQgHgLAAgTQAAgSAHgLQAHgLAPAAQAQAAAHALQAGALAAASQAAATgGALQgHALgQAAQgPAAgHgLgAgIgWQgEADgBAGIgBANIABAOQABAFAEAEQADADAFAAQAGAAAEgDQACgEABgFIABgOIgBgNQgBgGgCgDQgEgEgGAAQgFAAgDAEg");
	this.shape_29.setTransform(6.5,41.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAeQgHgLAAgTQAAgSAHgLQAHgLAPAAQAQAAAHALQAGALABASQgBATgGALQgHALgQAAQgPAAgHgLgAgIgWQgEADgBAGIgBANIABAOQABAFAEAEQADADAFAAQAGAAAEgDQADgEAAgFIABgOIgBgNQAAgGgDgDQgEgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(-0.35,41.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAoIAAhBIgKAAIAAgOIAZAAIAABPg");
	this.shape_31.setTransform(-6.275,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(-11,-4,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(-11,-4,127.3,66.9), null);


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
	this.shape.setTransform(165.175,-85.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBOIAZg2IgrhlIAkAAIAYBCIAYhCIAjAAIhCCbg");
	this.shape_1.setTransform(158.7,-86.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQAKgGANAAQALAAAIAEQAJAFAEAHIAAgPIAhAAIAABpIghAAIAAgPQgEAHgJAFQgJAEgKAAQgNAAgKgGgAgQgSQgGAHAAALQAAAMAGAHQAIAHAIAAQAKAAAGgHQAHgHAAgMQAAgLgHgHQgGgHgKAAQgIAAgIAHg");
	this.shape_2.setTransform(146.05,-89.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBBQgLgIgGgMQgGgMAAgRQAAgQAGgMQAGgMALgHQALgGANAAQAJAAAJAFQAIADAFAIIAAgxIAhAAIAACLIghAAIAAgOQgFAHgIAEQgIAFgKAAQgNAAgLgGgAgPgCQgHAGAAAMQAAAMAHAIQAGAGAJAAQAKAAAGgGQAHgIAAgMQAAgLgHgHQgGgGgKAAQgJgBgGAHg");
	this.shape_3.setTransform(133.75,-90.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAwQgMgHgHgMQgHgMAAgRQAAgQAHgMQAHgMANgHQANgGAOAAQAPAAANAGQANAHAHAMQAHAMAAAQQAAARgHAMQgIAMgMAHQgNAGgPAAQgPAAgNgGgAgPgSQgGAGAAAMQAAANAGAGQAGAIAJAAQAJAAAGgIQAHgGAAgNQAAgMgHgGQgFgIgKAAQgJAAgGAIg");
	this.shape_4.setTransform(121.6,-89.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBCQgRAAgKgIQgKgJAAgUIAAgpIgMAAIAAgbIAMAAIAAgaIAgAAIAAAaIAVAAIAAAbIgVAAIAAAqQAAAEACADQADACAFAAIAMAAIAAAbg");
	this.shape_5.setTransform(112.3,-90.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA1IAAg4QAAgKgFgHQgGgFgJgBQgIABgGAFQgFAHAAAKIAAA4IghAAIAAhoIAhAAIAAANQAEgGAJgEQAHgEALgBQASAAALANQAMAMAAAUIAAA9g");
	this.shape_6.setTransform(99.225,-89.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAwQgNgHgHgMQgHgMAAgRQAAgQAHgMQAHgMANgHQAMgGAPAAQAPAAANAGQAMAHAIAMQAHAMAAAQQAAARgHAMQgIAMgMAHQgNAGgPAAQgPAAgMgGgAgPgSQgGAGAAAMQAAANAGAGQAGAIAJAAQAJAAAGgIQAHgGAAgNQAAgMgHgGQgFgIgKAAQgIAAgHAIg");
	this.shape_7.setTransform(87.5,-89.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBMIAAhpIAfAAIAABpgAgNgtQgGgFAAgHQAAgIAGgFQAFgFAIAAQAIAAAGAFQAFAFABAIQgBAHgFAFQgGAFgIAAQgIAAgFgFg");
	this.shape_8.setTransform(79.3,-91.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBCQgRAAgKgIQgJgJgBgUIAAgpIgMAAIAAgbIAMAAIAAgaIAgAAIAAAaIAVAAIAAAbIgVAAIAAAqQAAAEACADQACACAGAAIALAAIAAAbg");
	this.shape_9.setTransform(73,-90.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQAKgGAOAAQAKAAAIAEQAJAFAEAHIAAgPIAhAAIAABpIghAAIAAgPQgEAHgJAFQgIAEgKAAQgOAAgKgGgAgPgSQgHAHAAALQAAAMAHAHQAHAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgHAHg");
	this.shape_10.setTransform(62.85,-89.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBCQgRAAgKgIQgKgJAAgUIAAgpIgMAAIAAgbIAMAAIAAgaIAgAAIAAAaIAVAAIAAAbIgVAAIAAAqQAAAEACADQADACAFAAIALAAIAAAbg");
	this.shape_11.setTransform(53.45,-90.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAwQgKgFgFgLQgFgKAAgOIAAg8IAgAAIAAA4QAAAKAGAHQAFAFAJAAQAJAAAGgFQAFgHAAgKIAAg4IAhAAIAABoIghAAIAAgOQgFAHgIAEQgIAEgKAAQgMABgJgGg");
	this.shape_12.setTransform(43.775,-89.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag3BPIAAibIAhAAIAAAOQAEgHAJgEQAIgFAKAAQANAAALAGQALAHAGAMQAGANAAAQQAAARgGALQgGAMgLAIQgLAGgNAAQgKAAgIgFQgJgEgEgHIAABBgAgQgrQgHAIAAALQAAAMAHAIQAHAFAJAAQAJAAAHgFQAHgIAAgMQAAgMgHgHQgHgHgJABQgJAAgHAGg");
	this.shape_13.setTransform(31.875,-86.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgIgMQgGgMAAgRQAAgQAGgMQAIgMAMgHQALgGAQAAQAPAAAMAGQALAHAIAMQAGAMAAAQIgBAIIhIAAQABAKAGAFQAFAFAIAAQALAAAFgKIAjAAQgDAKgHAJQgHAIgKAFQgKAEgNAAQgPAAgMgGgAAUgJQAAgIgGgGQgGgEgIAAQgHAAgGAEQgGAFgBAJIAoAAIAAAAg");
	this.shape_14.setTransform(19.9,-89.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggA1IAAhoIAgAAIAAARQAFgJAJgFQAIgEALgBIAAAjIgJAAQgMAAgGAFQgGAFAAANIAAAwg");
	this.shape_15.setTransform(10.475,-89.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA2IAAhpIAgAAIAAARQAFgIAJgGQAIgEALAAIAAAiIgJAAQgMAAgGAFQgGAFAAAMIAAAyg");
	this.shape_16.setTransform(143.075,-113.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggAwQgKgFgFgLQgFgJAAgOIAAg9IAgAAIAAA4QAAALAGAFQAFAHAJAAQAJAAAGgHQAFgFAAgLIAAg4IAhAAIAABpIghAAIAAgPQgFAHgIAEQgIAFgKAAQgMgBgJgFg");
	this.shape_17.setTransform(133.675,-113.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAwQgMgHgHgMQgHgNAAgQQAAgQAHgMQAHgMANgHQANgGAOgBQAPABANAGQANAHAHAMQAHAMAAAQQAAAQgHANQgIAMgMAHQgNAHgPgBQgPABgNgHgAgPgTQgGAHAAAMQAAANAGAGQAGAIAJgBQAJABAGgIQAHgGAAgNQAAgMgHgHQgFgGgKgBQgJABgGAGg");
	this.shape_18.setTransform(122.05,-113.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoBOIAYg2IgrhlIAkAAIAXBCIAZhCIAjAAIhBCbg");
	this.shape_19.setTransform(111.5,-110.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBAQgLgGgGgNQgGgMAAgQQAAgRAGgLQAGgNALgHQAKgGANAAQAKAAAJAEQAIAFAFAHIAAgxIAhAAIAACMIghAAIAAgQQgFAIgIAEQgIAFgLAAQgNAAgKgHgAgPgCQgHAGAAANQAAALAHAIQAGAGAJABQAKgBAGgGQAHgIAAgLQAAgNgHgFQgGgIgKABQgJAAgGAGg");
	this.shape_20.setTransform(95.85,-114.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggA2IAAhpIAgAAIAAARQAFgIAJgGQAIgEALAAIAAAiIgJAAQgMAAgGAFQgGAFAAAMIAAAyg");
	this.shape_21.setTransform(86.875,-113.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQALgGANgBQAKABAIAEQAIAFAFAHIAAgPIAhAAIAABpIghAAIAAgPQgFAIgIAEQgIAFgKgBQgNABgLgHgAgQgTQgGAIAAALQAAAMAGAHQAIAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgIAGg");
	this.shape_22.setTransform(77,-113.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAwQgKgFgFgLQgFgJAAgOIAAg9IAgAAIAAA4QAAALAGAFQAFAHAJAAQAJAAAGgHQAFgFAAgLIAAg4IAhAAIAABpIghAAIAAgPQgFAHgIAEQgIAFgKAAQgMgBgJgFg");
	this.shape_23.setTransform(65.675,-113.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgjBFQgOgLgCgTIAgAAQACAGAFADQAGAEAHAAQAKAAAGgGQAGgGAAgMIAAgPQgEAHgJAFQgIAEgLAAQgNAAgKgGQgLgHgGgNQgGgLAAgQQAAgRAGgMQAGgNALgGQAKgHANAAQALAAAIAFQAJAEAEAIIAAgPIAhAAIAABpQAAAOgGAMQgGAMgLAHQgNAHgRAAQgXAAgPgLgAgPgsQgHAHAAANQAAAMAHAHQAGAGAJAAQAKAAAGgGQAHgHAAgMQAAgMgHgHQgGgHgKAAQgJAAgGAGg");
	this.shape_24.setTransform(53.9,-110.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAwQgLgHgIgMQgGgNAAgQQAAgQAGgMQAIgMALgHQAMgGAQgBQAPABAMAGQALAHAIALQAGANAAAPIgBAJIhIAAQABAJAGAGQAFAFAIAAQALAAAFgKIAjAAQgDALgHAHQgHAJgKAFQgKAFgNgBQgPABgNgHgAAUgKQAAgHgGgFQgFgGgJAAQgHAAgGAGQgGAEgBAIIAoAAIAAAAg");
	this.shape_25.setTransform(42.3,-113.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSBLIAAhOIgMAAIAAgbIAMAAIAAgDQAAgUAMgLQAKgKAVAAIAFAAIAAAcQgJAAgDADQgFADAAAJIAAABIASAAIAAAbIgSAAIAABOg");
	this.shape_26.setTransform(33.6,-115.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggAwQgLgHgGgNQgGgMAAgQQAAgQAGgMQAGgMALgHQALgGANgBQAKABAIAEQAJAFAEAHIAAgPIAhAAIAABpIghAAIAAgPQgEAIgJAEQgIAFgKgBQgNABgLgHgAgQgTQgGAIAAALQAAAMAGAHQAIAHAIAAQAKAAAHgHQAGgHAAgMQAAgLgGgHQgHgHgKAAQgIAAgIAGg");
	this.shape_27.setTransform(23.8,-113.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXBAQgMgFgHgKQgHgJAAgNIAiAAQABAIAEADQAFAEAGAAQAHAAAEgDQAEgEAAgFQAAgFgDgEQgDgCgFgCIgNgGQgNgEgIgEQgIgDgGgHQgGgIAAgMQAAgTAOgLQANgLAWAAQAVAAANALQAOALABATIgjAAQgBgHgEgEQgFgEgFAAQgGABgEADQgDADAAAGQAAAGAGAEQAGAEAMAEQANAEAIAEQAIADAGAIQAFAHAAANQAAALgFAJQgGAJgLAGQgLAGgPgBQgOAAgLgEg");
	this.shape_28.setTransform(11.825,-114.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFyIAArj");
	this.shape_29.setTransform(207.5,-100.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(4,-138.9,204.5,76), null);


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
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2, new cjs.Rectangle(0,-2,1024,90), null);


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
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(0,1,1024,90), null);


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
	this.shape.setTransform(91.175,24.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAHA0IAAgHIAJgCQADgCAAgGIAAgzQAAgUgRAAQgMAAgGALQgCAEAAAIIAAAwQAAAGADACIAJACIAAAHIg3AAIAAgHQAKgBACgBQACgCAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIADAOIASgKQAIgEAJAAQAfAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_1.setTransform(78.925,26.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgGgBIgHgBIAAgHIAogEIABABIAABCQAAAXATAAQAMAAAEgLQACgEAAgIIAAgsQAAgKgFgBIgHgBIAAgHIAngEIACABIAABTQAAAHADACQABABAKABIAAAHIgpAAIgCgLIgOAIQgKAGgLAAQgeAAAAgfg");
	this.shape_2.setTransform(66.5,26.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("Ag0AAQAAg0A0gBQA1ABAAA0QAAA2g1AAQg0AAAAg2gAgVAAQAAAsAVABQAWAAAAgtQAAgsgWAAQgVABAAArg");
	this.shape_3.setTransform(53.825,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AA0BIQgPAAgIgFQgIgEgEgLIgGgfQgBgJgGgEQgEgDgJgBIgKAAIAAAwQAAAIACACQADACAMAAIAAAIIhBAAIAAgIQALAAADgCQACgCAAgIIAAhnQAAgIgCgCQgDgCgLAAIAAgIIBEAAQAYAAALAHQAOAJAAAUQAAAPgKAIQgJAJgQADIAAAAQAbAGAFAfQADANADAGQAFAHALABIAAAIgAgSg8QgBABAAAGIAAAxIAKAAQAPABAGgJQAFgGAAgPQAAgdgZAAQgHAAgDACg");
	this.shape_4.setTransform(39.3,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgaAIIAAgPIA1AAIAAAPg");
	this.shape_5.setTransform(28.525,26.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASQAKgKAGgEQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_6.setTransform(21.775,26.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAJAqIgMAIQgJAEgIAAQgPAAgIgJQgIgJAAgMQAAgTAVgGQAhgMAFgEIAAgJQAAgRgMAAQgNAAgGAUQgDAIgFAAQgFAAgFgDQgHgDAAgGQAAgKAMgHQANgJAUAAQAnABAAAdIAAAvQAAAOAGABQAEACAFAAIABAGQgMAHgPAAQgMAAgEgMgAgLABQgKAHgBAMQABAIAEAGQAEAEAIAAQANAAAAgPIAAgeg");
	this.shape_7.setTransform(10.9,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAYAAQAbAAALAQQAIALAAAQQAAAKgLgBIg1AAQgBAoAcAAQASAAAKgUIAHAFQgLAdghAAIgBABQgwAAAAg2gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQAAQgJAAgFAMg");
	this.shape_8.setTransform(-1.825,26.6002);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgjBIIAAgIQAOAAAEgCQADgCAAgIIAAggQAAgGgFgIIggg6QgEgHgDgCQgDgCgIAAIAAgIIBBAAIAAAIIgMABQgFAAACAGQAMAYARAhIABAAQAPgeAKgZQADgIgGAAIgLgBIAAgIIAwAAIAAAIQgJABgEACQgDABgEAIQgKAPgUAoQgEAIAAAHIAAAhQAAAIADACQADACAPAAIAAAIg");
	this.shape_9.setTransform(-13.475,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAYABQAbAAALAPQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgTIAHADQgLAeghAAIgBAAQgwAAAAg1gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQABQgJgBgFAMg");
	this.shape_10.setTransform(158.325,10.3502);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAnA0IAAgHIAKgCQACgCAAgGIAAgyQAAgVgRAAQgPAAgEAPIAAAKIAAAuQAAAGACACIAJACIAAAHIgzAAIAAgHIAJgCQADgCAAgGIAAgyQAAgVgQAAQgQAAgEAPIgBAKIAAAuQAAAGADACIAJACIAAAHIg3AAIAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIADAOQAMgIAEgBQAKgFAJAAQASAAAJAQIAPgKQALgGAKAAQAgAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_11.setTransform(144.175,10.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("Ag0AAQAAg0A0AAQA1AAAAA0QAAA1g1AAQg0AAAAg1gAgVABQAAArAVAAQAWAAAAgsQAAgrgWAAQgVgBAAAtg");
	this.shape_12.setTransform(128.175,10.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AAMBIIAAgIQALAAADgCQADgCAAgIIAAg0Ig4AAIAAA0QAAAIACACQADACALAAIAAAIIhBAAIAAgIQAMAAADgCQACgCAAgIIAAhnQAAgIgCgCQgDgCgMAAIAAgIIBBAAIAAAIQgLAAgDACQgCACAAAIIAAAqIA4AAIAAgqQAAgIgDgCQgDgCgLAAIAAgIIBBAAIAAAIQgMAAgCACQgDACAAAIIAABnQAAAIADACQACACAMAAIAAAIg");
	this.shape_13.setTransform(114.5,8.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASQAKgKAGgEQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_14.setTransform(97.325,10.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgFgBIgIgBIAAgHIAogEIABABIAABCQABAXASAAQAMAAAEgLQACgEAAgIIAAgsQAAgKgFgBIgIgBIAAgHIApgEIABABIAABTQAAAHADACQABABAKABIAAAHIgpAAIgCgLIgOAIQgKAGgLAAQgeAAAAgfg");
	this.shape_15.setTransform(86.85,10.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("Ag0AAQAAg0A0AAQA1AAAAA0QAAA1g1AAQg0AAAAg1gAgVABQAAArAVAAQAWAAAAgsQAAgrgWAAQgVgBAAAtg");
	this.shape_16.setTransform(74.225,10.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AgjBIIAAgIQAOAAAEgCQADgCAAgIIAAggQAAgGgFgIIggg6QgEgHgDgCQgDgCgIAAIAAgIIBBAAIAAAIIgMABQgFAAACAHQAMAYARAfIABAAQAPgdAKgZQADgIgGgBIgLAAIAAgIIAwAAIAAAIQgJAAgEACQgDACgEAHQgKARgUAoQgEAHAAAGIAAAiQAAAIADACQADACAPAAIAAAIg");
	this.shape_17.setTransform(62.075,8.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgLA8QgJgHAAgOIAAhDIgNAAIAAgKIAOAAIARgaIAKAAIAAAaIAXAAIAAAKIgXAAIAAA7QAAAUANAAQAFAAAFgCIADAGQgRAKgNAAQgJAAgGgFg");
	this.shape_18.setTransform(47.4,9.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AggApQgNgOAAgaQAAgYANgPQANgOAZAAQAPAAAMAFQAMAHAAAKQAAAGgGADQgFADgGAAQgHAAgCgGQgGgUgJABQgHAAgGAKQgGAKAAAUQAAAUAIAMQAHAKALAAQATAAAJgUIAHAEQgIAegkAAQgWAAgMgMg");
	this.shape_19.setTransform(38.025,10.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAYABQAbAAALAPQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgTIAHADQgLAeghAAIgBAAQgwAAAAg1gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQABQgJgBgFAMg");
	this.shape_20.setTransform(25.875,10.3502);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgLA8QgJgHAAgOIAAhDIgNAAIAAgKIAOAAIARgaIAKAAIAAAaIAWAAIAAAKIgWAAIAAA7QAAAUANAAQAGAAAEgCIADAGQgSAKgMAAQgJAAgGgFg");
	this.shape_21.setTransform(17.95,9.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("Ag0AAQAAg0A0AAQA1AAAAA0QAAA1g1AAQg0AAAAg1gAgVABQAAArAVAAQAWAAAAgsQAAgrgWAAQgVgBAAAtg");
	this.shape_22.setTransform(8.025,10.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASQAKgKAGgEQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_23.setTransform(-0.775,10.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("Ag7BIIAAgIQAMAAACgCQADgCAAgIIAAhnQAAgIgDgCQgCgCgMAAIAAgIIBBAAQAaAAAMAIQAQAKAAAYQAAAZgUALQgNAIgYAAQgJAAgFgBIAAAmQAAAIADACQADACANAAIAAAIgAgJg9QgCACAAAFIAAA0QAAAIAOAAQAZAAAAgiQAAgRgIgJQgHgIgNAAQgHAAgCABg");
	this.shape_24.setTransform(-13.425,8.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_25.setTransform(107.575,68.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQAOAAALAFQALAHAHAKQAGALAAAPIgBAIIhCAAQAAAJAGAFQAFAFAHgBQAKAAAFgJIAgAAQgDAKgGAHQgHAIgJAEQgKAFgMAAQgNAAgLgGgAASgJQAAgHgFgEQgFgFgIgBQgHAAgFAFQgFAFgBAHIAkAAIAAAAg");
	this.shape_26.setTransform(100.925,64.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_27.setTransform(93.925,63.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJA9QgHgEgFgHIAAAOIgdAAIAAiAIAdAAIAAAtQAFgHAHgEQAIgEAJAAQAMAAAKAGQAKAGAGAMQAFAKAAAPQAAAPgFALQgGAMgKAGQgKAGgMAAQgJAAgIgEgAgPgBQgGAFAAALQAAALAGAHQAHAGAIAAQAIAAAHgGQAGgHAAgLQAAgLgGgGQgHgGgIAAQgIAAgHAHg");
	this.shape_28.setTransform(86.525,63.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdArQgKgFgGgMQgFgMAAgOQAAgPAFgLQAGgLAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABhIgeAAIAAgPQgEAIgIADQgHAFgKAAQgMAAgJgHgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_29.setTransform(75.125,64.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_30.setTransform(67.325,63.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_31.setTransform(62.825,62.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdArQgKgFgGgMQgFgMAAgOQAAgPAFgLQAGgLAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABhIgeAAIAAgPQgEAIgIADQgHAFgKAAQgMAAgJgHgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_32.setTransform(54.825,64.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAxIgjhhIAgAAIAUBFIAVhFIAgAAIgjBhg");
	this.shape_33.setTransform(44.6,64.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAeA9IgHgVIgtAAIgIAVIgeAAIAsh5IAhAAIAsB5gAAPARIgPgsIgOAsIAdAAg");
	this.shape_34.setTransform(34.65,63.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAtQgKgEgGgIQgFgHgBgKIAdAAQABAFAEAEQAEADAFAAQAGAAADgCQADgCAAgEQAAgEgEgCIgOgFIgRgEQgHgEgFgEQgFgGAAgKQAAgJAFgGQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAADQAAAEAEADIANAEIASAGQAHACAFAFQAFAGAAAKQAAAJgFAGQgFAHgJAEQgJAEgLAAQgMAAgKgFg");
	this.shape_35.setTransform(21.125,64.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_36.setTransform(11.225,64.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdArQgKgFgGgMQgFgMAAgOQAAgPAFgLQAGgLAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABhIgeAAIAAgPQgEAIgIADQgHAFgKAAQgMAAgJgHgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgJAAQgIAAgGAGg");
	this.shape_37.setTransform(0.125,64.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOBBIAAiBIAdAAIAACBg");
	this.shape_38.setTransform(-7.375,63.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtA9IAAh5IAuAAQAPAAALAFQAJAFAGAJQAEAJAAALQAAALgEAJQgFAIgKAFQgLAFgPAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_39.setTransform(-14.45,63.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_40.setTransform(139.325,47.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgKQgHgMABgPQgBgOAHgLQAGgMAMgGQAMgGANAAQAOAAALAGQAMAGAHAMQAGALABAOQAAAPgHAMQgHAKgMAHQgLAGgOAAQgNAAgMgGgAgNgRQgHAGABALQgBAMAHAGQAFAGAIAAQAIAAAGgGQAGgGAAgMQAAgLgFgGQgHgGgIAAQgIAAgFAGg");
	this.shape_41.setTransform(128.4,47.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_42.setTransform(120.725,45.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAQA8QgQABgJgJQgJgHAAgTIAAglIgMAAIAAgZIAMAAIAAgXIAdAAIAAAXIAUAAIAAAZIgUAAIAAAmQAAAEACACQACACAFAAIALAAIAAAZg");
	this.shape_43.setTransform(114.125,46.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgHgKQgGgMAAgPQAAgOAGgLQAHgMALgGQALgGANAAQASAAANAJQAMAKAEARIggAAQgEgLgMABQgHgBgFAHQgFAGAAALQAAAMAFAGQAFAHAHgBQAMAAAEgLIAgAAQgEARgNAKQgMAKgSAAQgNAAgLgGg");
	this.shape_44.setTransform(105.875,47.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgHgKQgGgMAAgPQAAgOAGgLQAHgMALgGQALgGANAAQAOAAALAGQALAFAHAMQAGAKAAAQIgBAHIhCAAQAAAJAGAFQAFAFAHAAQAKAAAFgKIAgAAQgDAKgGAHQgHAIgJAFQgKAEgMAAQgNAAgLgGgAASgIQAAgIgFgFQgFgEgIAAQgHgBgFAFQgFAEgBAJIAkAAIAAAAg");
	this.shape_45.setTransform(95.425,47.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAQA8QgQABgJgJQgJgHAAgTIAAglIgMAAIAAgZIAMAAIAAgXIAdAAIAAAXIAUAAIAAAZIgUAAIAAAmQAAAEACACQACACAFAAIALAAIAAAZg");
	this.shape_46.setTransform(86.525,46.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgKQgHgMAAgPQAAgOAHgLQAGgMAMgGQALgGAOAAQAOAAAMAGQALAGAHAMQAHALAAAOQgBAPgGAMQgHAKgLAHQgMAGgOAAQgOAAgLgGgAgOgRQgFAGAAALQAAAMAFAGQAGAGAIAAQAIAAAGgGQAGgGAAgMQAAgLgFgGQgHgGgIAAQgIAAgGAGg");
	this.shape_47.setTransform(77.35,47.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgdAxIAAhgIAdAAIAAAQQAFgIAIgEQAIgFAJAAIAAAgIgIAAQgMAAgFAEQgFAFAAALIAAAtg");
	this.shape_48.setTransform(68.75,47.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AguA9IAAh5IAvAAQAPAAAKAFQALAFAFAJQAEAJAAALQAAALgEAJQgFAIgLAFQgJAFgQAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_49.setTransform(59.65,46.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA0AxIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgdAAIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgeAAIAAhgIAeAAIAAAMQAEgGAIgDQAHgEAJAAQALAAAJAFQAIAEAEAJQAFgIAJgFQAJgFAKAAQASAAALALQALALAAATIAAA4g");
	this.shape_50.setTransform(40.175,47.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgKQgGgMgBgPQABgOAGgLQAGgMAMgGQALgGAOAAQAOAAAMAGQALAGAHAMQAHALgBAOQAAAPgGAMQgHAKgLAHQgMAGgOAAQgNAAgMgGgAgOgRQgFAGgBALQABAMAFAGQAGAGAIAAQAIAAAGgGQAGgGAAgMQAAgLgGgGQgFgGgJAAQgIAAgGAGg");
	this.shape_51.setTransform(25.4,47.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQA8QgQABgJgJQgJgHAAgTIAAglIgMAAIAAgZIAMAAIAAgXIAdAAIAAAXIAUAAIAAAZIgUAAIAAAmQAAAEACACQACACAFAAIALAAIAAAZg");
	this.shape_52.setTransform(16.325,46.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAuQgKgFgGgIQgFgHgBgJIAdAAQABAFAEADQAEADAFAAQAGAAADgCQADgCAAgEQAAgEgEgCIgOgEIgRgGQgHgCgFgGQgFgFAAgKQAAgJAFgGQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAADQAAAEAEADIANAEIASAFQAHADAFAFQAFAGAAAKQAAAJgFAHQgFAGgJAEQgJAEgLAAQgMAAgKgEg");
	this.shape_53.setTransform(8.075,47.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeAsQgIgFgFgJQgEgJgBgNIAAg4IAeAAIAAA0QAAAKAFAFQAFAFAIAAQAIAAAFgFQAFgFABgKIAAg0IAeAAIAABgIgeAAIAAgNQgFAGgIAEQgGAEgKAAQgLAAgJgFg");
	this.shape_54.setTransform(-2.15,47.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgdA2QgOgIgIgOQgIgOAAgSQAAgRAIgOQAIgPAOgIQAOgHARAAQAVAAAQALQAPALAGAUIghAAQgEgHgHgEQgGgEgJAAQgNAAgIAJQgJAKAAAPQAAAQAJAKQAIAJANAAQAJAAAGgEQAHgEAEgIIAhAAQgGAUgPAMQgQALgVAAQgRAAgOgIg");
	this.shape_55.setTransform(-13.625,46.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFrIAArV");
	this.shape_56.setTransform(181.75,36.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-21.4,-2.8,204.20000000000002,77.7), null);


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
	this.shape.setTransform(281.9,53.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgbBNIAAgIQAJAAACgCQADgCAAgHIAAhuQAAgKgGAAIgHgCIAAgHIAngFIABABIAACFQAAAHADACQACACAJAAIAAAIg");
	this.shape_1.setTransform(274.675,48.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgbBKIAAgIQAJAAACgCQADgCAAgHIAAg8QAAgJgGgBIgHgBIAAgIIAngFIABABIAABTQAAAHADACQACACAJAAIAAAIgAgMgtQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHAAQgIAAgEgEg");
	this.shape_2.setTransform(269.925,48.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAnA0IAAgHIAJgCQADgCAAgGIAAgyQAAgVgRAAQgPAAgEAPIgBAKIAAAuQAAAGADACIAJACIAAAHIgzAAIAAgHIAJgCQACgCAAgGIAAgyQABgVgRAAQgPAAgFAPIgBAKIAAAuQAAAGADACIAJACIAAAHIg2AAIAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgGgBIgHgBIAAgHIAngGIACAOIARgKQAKgEAJAAQASAAAIAPIAQgJQALgGAJAAQAhAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_3.setTransform(258.15,50.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAJApIgMAJQgJADgIAAQgPAAgIgJQgIgIAAgNQAAgSAWgHQAggLAFgDIAAgKQAAgRgNAAQgMAAgGAVQgCAHgHAAQgEAAgGgDQgGgDAAgGQAAgKAMgIQANgHAVAAQAmAAAAAdIAAAuQAAAPAGACQADABAHAAIAAAHQgMAFgPAAQgMAAgEgMgAgKACQgMAFAAAOQAAAHAFAFQAFAGAGAAQAOAAAAgQIAAgdg");
	this.shape_4.setTransform(242.05,50.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag2BIIAAgIQAMAAADgCQACgCAAgIIAAhnQAAgIgCgCQgDgCgMgBIAAgHIBtAAIAAAlIgIAAQgFgRgFgEQgGgHgQAAIgOAAQgEAAgBABQgBACAAAFIAAAyIAXAAQAKAAADgEQAEgEACgLIAIAAIAAAwIgIAAQgCgMgEgEQgDgDgKAAIgXAAIAAAuQAAAIADACQACACAOAAIAAAIg");
	this.shape_5.setTransform(228.625,48.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASIAQgOQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_6.setTransform(213.675,50.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgFgBIgIgBIAAgHIApgEIABABIAABCQAAAXASAAQAMAAAFgLQACgEAAgIIAAgsQgBgKgFgBIgIgBIAAgHIApgEIABABIAABTQAAAHACACQACABAKABIAAAHIgpAAIgBgLIgPAIQgKAGgLAAQgeAAAAgfg");
	this.shape_7.setTransform(203.25,50.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag0AAQAAg0A0AAQA1AAAAA0QAAA1g1AAQg0AAAAg1gAgVABQAAArAVAAQAWAAAAgsQAAgrgWAAQgVgBAAAtg");
	this.shape_8.setTransform(190.575,50.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgjBIIAAgIQAOAAAEgCQADgCAAgIIAAggQAAgGgFgIIggg6QgEgHgDgCQgDgCgIgBIAAgHIBBAAIAAAHIgMACQgFAAACAHQAMAYARAfIABAAQAPgdAKgZQADgIgGgBIgLgBIAAgHIAwAAIAAAHQgJABgEACQgDACgEAHQgKARgUAoQgEAHAAAGIAAAiQAAAIADACQADACAPAAIAAAIg");
	this.shape_9.setTransform(178.425,48.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgmBNIAAgHQAKgBACgCQADgCAAgGIAAhJIgOAAIAAgKIAOAAIAAgFQAAgXAKgMQAKgMASAAQAMAAAGAFQAFAFABAFQgBAGgEADQgEAEgEAAQgHAAgCgFQgFgOgFAAQgGAAABAMIACAfIAUAAIAAAKIgUAAIAABJQAAAHACABQACACAMABIAAAHg");
	this.shape_10.setTransform(295.1,26.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag0AAQAAg1A0AAQA1AAAAA1QAAA1g1ABQg0gBAAg1gAgVABQAAArAVABQAWAAAAgtQAAgrgWAAQgVAAAAAsg");
	this.shape_11.setTransform(284.625,28.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgvAAQAAgWAMgPQANgQAZAAQAaAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAFQgLAdghAAIgBABQgwgBAAg1gAgMggQgEAJAAANIAcAAQAGAAAAgHQAAgbgQAAQgJAAgFAMg");
	this.shape_12.setTransform(265.675,28.7502);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASIAQgOQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_13.setTransform(257.425,28.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAJAqIgMAHQgJAFgIAAQgPAAgIgJQgIgJAAgMQAAgTAWgGQAggMAFgEIAAgJQAAgRgNAAQgMAAgGAUQgCAIgHAAQgEAAgGgDQgGgDAAgGQAAgKAMgHQANgJAVAAQAmABAAAdIAAAvQAAAOAGABQADACAHgBIAAAHQgMAHgPAAQgMgBgEgLgAgKABQgMAHAAAMQAAAIAFAGQAFAEAGAAQAOAAAAgPIAAgeg");
	this.shape_14.setTransform(246.55,28.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("Ag+ACQgBgiATgVQAUgWAoAAQAcAAARAKIAAAkIgIAAQgFgRgHgJQgKgKgRAAQgYAAgKAZQgIAQABAYQAAAYAHASQAMAZAYAAQAQAAAKgMQAHgIAHgUIAHAAIgCAnQgRAKgfAAQhMAAABhKg");
	this.shape_15.setTransform(231.8,26.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgvAAQAAgWAMgPQANgQAZAAQAaAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgUIAHAFQgLAdghAAIgBABQgwgBAAg1gAgMggQgEAJAAANIAcAAQAGAAAAgHQAAgbgQAAQgJAAgFAMg");
	this.shape_16.setTransform(211.725,28.7502);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAoBNQgTAAgJgMQgLgOgOgbIAAgBIAcgpQAEgGAGAAIAdAAIAAAHQgZAEgIAHIgNAOQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAQAbATAXQAIAIAHADIAAAGgAg5BNIAAgIQAJAAACgCQADgCAAgGIAAhvQAAgKgGAAIgHgCIAAgHIAogFIABABIAACGQAAAGADACQACACAJAAIAAAIg");
	this.shape_17.setTransform(201.225,26.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAJAqIgMAHQgIAFgJAAQgPAAgJgJQgHgJAAgMQAAgTAWgGQAggMAFgEIAAgJQAAgRgMAAQgNAAgGAUQgDAIgFAAQgGAAgEgDQgHgDAAgGQAAgKAMgHQANgJAVAAQAmABAAAdIAAAvQAAAOAGABQAEACAFgBIABAHQgMAHgPAAQgMgBgEgLgAgLABQgLAHABAMQAAAIAEAGQAEAEAIAAQANAAAAgPIAAgeg");
	this.shape_18.setTransform(188.9,28.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgjBIIAAgIIALAAQAGgBACgDQABgCAAgGIAAhyIgJAAQgOAAgGAGQgEAGgFASIgIAAIAAgnIB7AAIAAAnIgIAAQgFgSgEgGQgGgGgOAAIgJAAIAAByQAAAGABACQACADAGABIALAAIAAAIg");
	this.shape_19.setTransform(178.375,26.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AglBJQgGgDAAgGQAAgFAEgFQAEgGAEAAQAEAAAFAFQAEADAEAAQAGAAAEgOQABgFgDgJIgkhWQgDgGgDgCQgCgBgIgBIAAgIIA5AAIAAAIIgIABQgFABACAGIAXA8QAOglAFgXQACgGgFgBIgKgBIAAgIIApAAIAAAIQgIABgDACQgCACgDAIIgjBfQgIAVgIAJQgHAHgKAAQgHAAgEgEg");
	this.shape_20.setTransform(310.9,9.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgbBNIAAgIQAJAAACgCQADgBAAgHIAAhvQAAgKgGgBIgHgBIAAgHIAngFIABABIAACGQAAAHADABQACACAJAAIAAAIg");
	this.shape_21.setTransform(303.675,4.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgbBKIAAgIQAJAAACgCQADgBAAgHIAAg9QAAgJgGgBIgHgBIAAgIIAngGIABACIAABUQAAAHADABQACACAJAAIAAAIgAgMgtQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAFQgEAEgHAAQgIAAgEgEg");
	this.shape_22.setTransform(298.925,4.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAnA0IAAgHIAJgCQADgCAAgGIAAgyQAAgVgRAAQgPAAgEAPIAAAKIAAAuQAAAGACACIAJACIAAAHIg0AAIAAgHIAJgCQADgCAAgGIAAgyQAAgVgPAAQgQAAgFAPIgBAKIAAAuQAAAGAEACIAJACIAAAHIg3AAIAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIACAOIAQgKQALgEAIAAQATAAAIAPIAQgJQALgGAJAAQAhAAAAAgIAAA1QAAAHACABQACACAKABIAAAHg");
	this.shape_23.setTransform(287.15,6.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAJAqIgMAIQgIADgJAAQgPAAgJgJQgHgIAAgNQAAgSAWgHQAggKAFgFIAAgJQAAgRgMAAQgNAAgGAVQgCAHgGAAQgGAAgFgDQgGgDAAgGQAAgKAMgIQANgHAVgBQAmAAAAAeIAAAuQAAAPAGACQAEABAGAAIAAAHQgMAFgPAAQgMAAgEgLgAgKACQgLAGAAANQgBAHAFAFQAFAFAGABQAOAAAAgQIAAgdg");
	this.shape_24.setTransform(271.05,6.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag2BIIAAgIQAMAAADgCQACgCAAgIIAAhnQAAgIgCgCQgDgCgMAAIAAgIIBtAAIAAAlIgIAAQgFgRgFgEQgGgHgQAAIgOAAQgEAAgBABQgBACAAAFIAAAyIAXAAQAKAAADgEQAEgEACgLIAIAAIAAAwIgIAAQgCgMgEgEQgDgDgKAAIgXAAIAAAuQAAAIADACQACACAOAAIAAAIg");
	this.shape_25.setTransform(257.675,4.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgpA0IAAgHQAKgBACgCQACgBAAgHIAAg9QAAgJgFgBIgIgBIAAgHIAngGIABASIAQgOQAGgEAGAAQAOAAAAANQAAAHgEAFQgEAFgGAAQgCAAgGgDQgGgFgEAAQgJAAAAARIAAAuQAAAHADABQADACAMABIAAAHg");
	this.shape_26.setTransform(242.675,6.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgvAWIAAgzQAAgKgFgBIgIgBIAAgHIApgEIABABIAABCQAAAXASAAQAMAAAFgLQABgEAAgIIAAgsQAAgKgFgBIgHgBIAAgHIAngEIACABIAABTQAAAHADACQACABAJABIAAAHIgpAAIgCgLIgOAIQgKAGgLAAQgeAAAAgfg");
	this.shape_27.setTransform(232.25,6.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag0A4QgSgUAAgkQAAgjASgTQASgVAiAAQAjAAATAVQARATAAAjQAAAkgRAUQgTAUgjAAQgiAAgSgUgAgjAAQgBBDAkAAQAkAAAAhDQAAhBgkAAQgjAAAABBg");
	this.shape_28.setTransform(216.55,4.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMA8QgIgHAAgOIAAhDIgNAAIAAgKIAOAAIARgaIAKAAIAAAaIAWAAIAAAKIgWAAIAAA7QAAAUANAAQAFAAAFgCIADAGQgSAKgMAAQgIAAgIgFg");
	this.shape_29.setTransform(200.1,5.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgvAAQAAgXAMgOQANgQAZAAQAaAAALAQQAIALAAAQQAAAJgLAAIg1AAQgBAoAcAAQASAAAKgTIAHADQgLAeghAAIgBAAQgwAAAAg1gAgMggQgEAJAAAMIAcAAQAGAAAAgGQAAgbgQAAQgJAAgFAMg");
	this.shape_30.setTransform(189.675,6.6502);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag4BIIAAgIQAMAAACgCQADgCAAgIIAAhnQAAgIgDgCQgCgCgMAAIAAgIIBCAAIAAAIQgLAAgEACQgCACAAAIIAABiQAAAKAEADQADADAPAAQAQAAAHgIQAFgGAGgTIAIAAIgDAqg");
	this.shape_31.setTransform(178.15,4.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_32.setTransform(137.925,40.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYAwIAAg0QAAgNgGgHQgHgGgLgBQgKABgGAGQgHAHAAANIAAA0IgUAAIAAheIAUAAIAAALQAFgGAIgDQAHgDAIgBQALAAAJAFQAJAFAFAJQAFAJAAANIAAA3g");
	this.shape_33.setTransform(129.475,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIgBAIIhIAAQABAMAIAHQAIAHAJAAQARAAAGgOIAVAAQgDANgMAJQgLAIgSAAQgMAAgLgGgAAagIQABgLgJgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA0AAIAAAAg");
	this.shape_34.setTransform(119.5,41.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA6AwIAAg0QAAgNgHgHQgGgGgLgBQgLABgHAGQgGAHAAANIAAA0IgTAAIAAg0QAAgNgGgHQgHgGgLgBQgLABgGAGQgHAHAAANIAAA0IgUAAIAAheIAUAAIAAALQAFgGAHgDQAIgDAIgBQAMAAAJAFQAIAFAFAJQAEgJAJgEQAKgFAKgBQALAAAJAFQAJAFAFAJQAGAJAAANIAAA3g");
	this.shape_35.setTransform(105.775,41.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIAAAIIhJAAQACAMAHAHQAIAHAJAAQARAAAGgOIAVAAQgDANgMAJQgLAIgSAAQgMAAgLgGgAAagIQAAgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA0AAIAAAAg");
	this.shape_36.setTransform(92.15,41.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA/QgMgJgCgQIATAAQADAIAHAFQAHAEAKAAQAMAAAHgIQAHgGAAgOIAAgRQgFAIgJAEQgIAEgKABQgMAAgLgHQgKgGgGgMQgGgKAAgOQAAgOAGgMQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAFAFAGIAAgOIAUAAIAABhQAAANgGAKQgFALgKAFQgLAGgOAAQgTAAgNgJgAgNgzQgGAFgEAGQgFAIAAAKQAAAKAFAHQAEAGAGAFQAGAEAHAAQAIAAAGgEQAHgEAEgHQAEgHAAgKQAAgKgEgHQgEgIgHgDQgGgEgIAAQgHAAgGADg");
	this.shape_37.setTransform(81.45,44.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgKAAQgMAAgLgGgAgNgcQgGAEgEAHQgFAIAAAJQAAAJAFAIQAEAHAGAEQAGAEAHAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgHAAgGADg");
	this.shape_38.setTransform(70.55,41.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAYAwIAAg0QAAgNgGgHQgHgGgLgBQgKABgGAGQgHAHAAANIAAA0IgUAAIAAheIAUAAIAAALQAFgGAIgDQAHgDAIgBQALAAAJAFQAJAFAFAJQAFAJAAANIAAA3g");
	this.shape_39.setTransform(60.275,41.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgLAAQgMAAgKgGgAgNgcQgHAEgEAHQgEAIAAAJQAAAJAEAIQAEAHAHAEQAHAEAGAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_40.setTransform(49.25,41.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAsA8IAAhRIglBRIgMAAIglhRIAABRIgUAAIAAh3IAVAAIApBdIAqhdIAWAAIAAB3g");
	this.shape_41.setTransform(36.65,40.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_42.setTransform(22.625,40.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgFgHQgFgHAAgJIAUAAQABAHAFAEQAFAEAHAAQAIAAAFgEQAFgDAAgFQAAgFgFgDIgQgGQgKgCgHgDQgHgCgFgGQgFgGAAgJQAAgHAFgHQAEgGAJgEQAIgDAKAAQAQAAAKAIQAKAIABAOIgUAAQAAgGgFgEQgFgEgHAAQgIAAgEADQgEADAAAFQAAAEADACIAHAEIAKAEQALADAHADQAGACAFAFQAFAGAAAJQAAAIgEAHQgFAGgIAEQgIADgMAAQgKAAgJgEg");
	this.shape_43.setTransform(15.325,41.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLAKgGQALgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIgBAIIhIAAQABAMAIAHQAHAHAKAAQARAAAGgOIAWAAQgEANgMAJQgMAIgRAAQgMAAgLgGgAAbgIQAAgLgJgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA1AAIAAAAg");
	this.shape_44.setTransform(5.9,41.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IApAAQANAAAKAEQAKAFAEAIQAFAIAAALQAAAJgEAIQgFAHgJAFQgKAFgOAAIgVAAIAAAxgAgVgEIAVAAQALAAAFgFQAGgFAAgJQAAgUgWAAIgVAAg");
	this.shape_45.setTransform(-3.475,40.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdBGIATguIgmhdIAXAAIAZBIIAchIIAVAAIg6CLg");
	this.shape_46.setTransform(86.475,23.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAwIAAheIAUAAIAAANQADgGAHgEQAHgEAKgBIAAAVIgFAAQgLAAgGAFQgFAHAAAOIAAAxg");
	this.shape_47.setTransform(78.675,21);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQABAMAHAHQAIAHAKAAQAPAAAHgOIAWAAQgFANgLAJQgLAIgRAAQgNAAgLgGgAAbgIQgBgLgHgGQgIgHgLAAQgKAAgGAHQgIAGgBALIA0AAIAAAAg");
	this.shape_48.setTransform(70.4,21.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLAwIgkhfIAVAAIAaBNIAbhNIAVAAIgkBfg");
	this.shape_49.setTransform(61.075,21.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgKAAQgMAAgLgGgAgNgcQgGAEgEAHQgFAIAAAJQAAAJAFAIQAEAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_50.setTransform(50.75,21.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdA8IAAh3IAUAAIAABnIAnAAIAAAQg");
	this.shape_51.setTransform(42.375,19.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgXAwIAAheIAUAAIAAANQADgGAHgEQAHgEAKgBIAAAVIgFAAQgLAAgGAFQgFAHAAAOIAAAxg");
	this.shape_52.setTransform(31.175,21);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJBDIAAhfIATAAIAABfgAgIgsQgDgEAAgFQAAgGADgDQADgEAFAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_53.setTransform(25.9,19.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgLAAQgMAAgKgGgAgNgcQgHAEgDAHQgFAIAAAJQAAAJAFAIQADAHAHAEQAHAEAGAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_54.setTransform(19,21.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA9QgJgEgFgHIAAANIgUAAIAAh/IAUAAIAAAvQAFgHAJgEQAJgEAJgBQANABAKAFQALAHAFALQAGAKAAAPQAAANgGAMQgFAMgLAGQgLAGgMAAQgKAAgIgEgAgOgLQgGADgEAIQgEAGAAAKQAAAKAEAHQAEAHAGAEQAIAEAGAAQAHAAAHgEQAHgEAEgHQAEgIAAgJQAAgLgEgGQgEgHgHgEQgHgEgHAAQgGAAgIAFg");
	this.shape_55.setTransform(8.75,19.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAiA8IgJgYIgxAAIgJAYIgVAAIArh3IAWAAIAsB3gAATAUIgTg4IgTA4IAmAAg");
	this.shape_56.setTransform(-2.925,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-10.1,-6.3,327.8,68.5), null);


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
	this.shape.setTransform(135.525,9.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_1.setTransform(124.625,9.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA3Ig7haIAAAAIAAA0IABAXQAAAGAEACIALABIAAAGIgnAAIAAgGQAIgBABgBQADgBABgGIABgXIAAg3QAAgHgCgBQgCgCgJAAIAAgGIAkAAIAzBNIABAAIAAgnIgBgXQgBgGgDgCIgMgBIAAgGIAnAAIAAAGQgHABgBABQgDABgCAGIgBAXIAABHg");
	this.shape_2.setTransform(113.85,8.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAhIgCgXIAGAAQAHAYAQAAQAEAAAEgDQADgDAAgEQAAgJgQgGQgMgFgGgEQgFgGAAgJQAAgMAJgGQAHgHAOAAQANAAAKAFIAAAVIgGAAQgCgJgFgFQgEgFgHAAQgEAAgDADQgDADAAAEQAAAIAQAGQANAFAFAEQAFAFAAAKQAAAMgJAHQgIAHgOAAQgSAAgIgIg");
	this.shape_3.setTransform(98.4,9.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnApQgGgJABgPIAAg5QgBgGgCgCIgKgBIAAgGIAxAAIAAAGIgLABQgCACAAAGIAAA6QABAgAUAAQAXAAgBggIAAg6QAAgGgBgCIgLgBIAAgGIAwAAIAAAGIgKABQgCACAAAGIAAA5QgBAOgFAIQgJARgfAAQgeAAgJgPg");
	this.shape_4.setTransform(88.75,8.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAtQgGgFAAgKIAAgzIgKAAIAAgIIALAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAAEgCIABAFQgMAIgKAAQgGAAgGgFg");
	this.shape_5.setTransform(76.2,8.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAfQgKgLAAgTQAAgSAKgLQAKgMASAAQAMAAAJAFQAJAFAAAHQAAAFgEACQgEADgEAAQgGAAgBgGQgFgOgHAAQgFAAgEAHQgFAJAAAPQAAAPAGAJQAFAHAJAAQAOAAAHgPIAFADQgGAYgbAAQgRAAgJgKg");
	this.shape_6.setTransform(69.025,9.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAgIgJAFQgGAEgHAAQgLAAgHgHQgGgHAAgJQAAgOARgFQAZgIADgDIAAgIQAAgNgJAAQgJAAgFAQQgCAGgEAAQgEAAgEgCQgFgDAAgFQAAgHAJgGQAKgGAQAAQAdAAAAAXIAAAjQAAAKAEACQADABAEAAIABAFQgJAFgMAAQgJAAgDgJgAgIABQgIAEAAAKQAAAHAEAEQADADAFAAQAKAAAAgMIAAgWg");
	this.shape_7.setTransform(60.125,9.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAtQgHgFAAgKIAAgzIgJAAIAAgIIAKAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAADgCIADAFQgOAIgJAAQgGAAgFgFg");
	this.shape_8.setTransform(53.75,8.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAoIAAgGIAHgBQACgBAAgFIAAgnQAAgPgOAAQgIAAgFAIQgBADAAAGIAAAkQAAAFACACIAHABIAAAGIgqAAIAAgGIAJgCQACgBAAgFIAAguQAAgIgEAAIgGgBIAAgFIAdgFIACALIAOgIQAHgDAGAAQAYAAAAAZIAAAoQAAAFACABIAIACIAAAGg");
	this.shape_9.setTransform(46.575,9.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_10.setTransform(36.825,9.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvABQAAgZAOgQQAPgRAeAAQAWAAANAHIAAAcIgGAAQgEgNgGgGQgHgJgNAAQgTAAgHAUQgGAMAAASQAAATAGANQAIATATAAQANAAAHgJQAGgGAEgPIAHAAIgCAeQgNAHgZAAQg5AAABg5g");
	this.shape_11.setTransform(25.55,8.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("ArLC5QgkgBgYgYQgYgZAAgiIAAjJQAAgiAYgZQAYgZAkABIWXAAQAjgBAZAZQAZAZAAAiIAADJQAAAigZAZQgZAYgjABg");
	this.shape_12.setTransform(78.85,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-1.2,-5,160.1,36.9), null);


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
	this.instance.setTransform(118.3,49.2,0.0863,0.0863,0,0,0,477.4,65.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABnIAAjOMD4xAAAIAADOg");
	this.shape.setTransform(117.6233,41.5845,0.0863,0.0863);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgzgSkIAqBdMggzASkg");
	this.shape_1.setTransform(42.2176,24.5352,0.0863,0.0863);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gmgMl7QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA9ATQB/AnAMF6QAMF7htHxQhuHximFFQhOCZhKBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(22.3052,45.3732,0.0863,0.0863);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzihQj0lTjFoPQjFoNgjmVQgRi/Ach1QAdh4BIgXQBJgWBoBPQBkBMB0ChQDzFTDFIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(33.3939,44.7152,0.0863,0.0863);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nuhTmNQgoi7ALh3QAMh7BBghQBBggBrBBQBoA+CACQQEOEvD7HwQD7HuBTGNQAoC7gLB3QgMB8hBAgQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(22.7389,19.1564,0.0863,0.0863);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(122.1,27.05,0.0863,0.0863,0,0,0,851.4,161);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AsVQcMAXVghyIBWA7MgXVAhyg");
	this.shape_5.setTransform(38.0668,18.2939,0.0863,0.0863);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("Ag+FKQoQg9ljiMQinhChWhGQhYhJANhDQAMhDBwgyQBsgwC5gZQGIg1IPA9QIQA9FjCMQCnBCBWBFQBYBJgNBDQgaCJmHA2Qi2AZjUAAQjzAAkaghg");
	this.shape_6.setTransform(13.4184,30.1633,0.0863,0.0863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(2.4,8.7,203.9,47.099999999999994), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regX:0.2,regY:0.1,scaleX:0.2679,scaleY:0.2679,rotation:-98.0106,x:-20.2,y:-246.3,startPosition:5},77).to({_off:true},1).wait(14));

	// Layer_4
	this.instance_2 = new lib.a("synched",0);
	this.instance_2.setTransform(-79.5,-393.6,0.3999,0.3999,67.8389,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.3992,scaleY:0.3992,rotation:67.0076,x:-75.2836,y:-387.3372,startPosition:1},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,rotation:66.1837,x:-71.055,y:-381.0804,startPosition:2},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:65.3672,x:-66.8644,y:-374.8797,startPosition:3},0).wait(1).to({scaleX:0.3971,scaleY:0.3971,rotation:64.5581,x:-62.7116,y:-368.735,startPosition:4},0).wait(1).to({scaleX:0.3964,scaleY:0.3964,rotation:63.7563,x:-58.5967,y:-362.6464,startPosition:5},0).wait(1).to({scaleX:0.3958,scaleY:0.3958,rotation:62.9619,x:-54.5196,y:-356.6138,startPosition:6},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,rotation:62.1749,x:-50.4805,y:-350.6373,startPosition:7},0).wait(1).to({scaleX:0.3944,scaleY:0.3944,rotation:61.3953,x:-46.4792,y:-344.7169,startPosition:8},0).wait(1).to({scaleX:0.3938,scaleY:0.3938,rotation:60.6231,x:-42.5158,y:-338.8525,startPosition:9},0).wait(1).to({scaleX:0.3931,scaleY:0.3931,rotation:59.8583,x:-38.5903,y:-333.0442,startPosition:10},0).wait(1).to({scaleX:0.3925,scaleY:0.3925,rotation:59.1008,x:-34.7027,y:-327.2919,startPosition:11},0).wait(1).to({scaleX:0.3919,scaleY:0.3919,rotation:58.3507,x:-30.8529,y:-321.5957,startPosition:0},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:57.608,x:-27.041,y:-315.9555,startPosition:1},0).wait(1).to({scaleX:0.3906,scaleY:0.3906,rotation:56.8727,x:-23.2671,y:-310.3715,startPosition:2},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:56.1448,x:-19.531,y:-304.8434,startPosition:3},0).wait(1).to({scaleX:0.3894,scaleY:0.3894,rotation:55.4242,x:-15.8327,y:-299.3715,startPosition:4},0).wait(1).to({scaleX:0.3888,scaleY:0.3888,rotation:54.7111,x:-12.1724,y:-293.9555,startPosition:5},0).wait(1).to({scaleX:0.3882,scaleY:0.3882,rotation:54.0053,x:-8.5499,y:-288.5957,startPosition:6},0).wait(1).to({scaleX:0.3876,scaleY:0.3876,rotation:53.3069,x:-4.9653,y:-283.2919,startPosition:7},0).wait(1).to({scaleX:0.387,scaleY:0.387,rotation:52.6159,x:-1.4186,y:-278.0442,startPosition:8},0).wait(1).to({scaleX:0.3864,scaleY:0.3864,rotation:51.9322,x:2.0902,y:-272.8525,startPosition:9},0).wait(1).to({scaleX:0.3858,scaleY:0.3858,rotation:51.256,x:5.5611,y:-267.7169,startPosition:10},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,rotation:50.5871,x:8.9942,y:-262.6374,startPosition:11},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:49.9256,x:12.3893,y:-257.6139,startPosition:0},0).wait(1).to({scaleX:0.3842,scaleY:0.3842,rotation:49.2715,x:15.7466,y:-252.6465,startPosition:1},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:48.6248,x:19.066,y:-247.7351,startPosition:2},0).wait(1).to({scaleX:0.3831,scaleY:0.3831,rotation:47.9854,x:22.3475,y:-242.8798,startPosition:3},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,rotation:47.3535,x:25.5912,y:-238.0806,startPosition:4},0).wait(1).to({scaleX:0.382,scaleY:0.382,rotation:46.7289,x:28.7969,y:-233.3374,startPosition:5},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,rotation:46.1117,x:31.9648,y:-228.6503,startPosition:6},0).wait(1).to({scaleX:0.381,scaleY:0.381,rotation:45.5019,x:35.0947,y:-224.0192,startPosition:7},0).wait(1).to({scaleX:0.3804,scaleY:0.3804,rotation:44.8995,x:38.1868,y:-219.4443,startPosition:8},0).wait(1).to({scaleX:0.3799,scaleY:0.3799,rotation:44.3044,x:41.241,y:-214.9253,startPosition:9},0).wait(1).to({scaleX:0.3794,scaleY:0.3794,rotation:43.7168,x:44.2573,y:-210.4625,startPosition:10},0).wait(1).to({scaleX:0.3789,scaleY:0.3789,rotation:43.1365,x:47.2358,y:-206.0557,startPosition:11},0).wait(1).to({scaleX:0.3785,scaleY:0.3785,rotation:42.5636,x:50.1763,y:-201.705,startPosition:0},0).wait(1).to({scaleX:0.378,scaleY:0.378,rotation:41.9981,x:53.079,y:-197.4103,startPosition:1},0).wait(1).to({scaleX:0.3775,scaleY:0.3775,rotation:41.4399,x:55.9438,y:-193.1717,startPosition:2},0).wait(1).to({scaleX:0.3771,scaleY:0.3771,rotation:40.8892,x:58.7706,y:-188.9892,startPosition:3},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,rotation:40.3458,x:61.5596,y:-184.8627,startPosition:4},0).wait(1).to({scaleX:0.3761,scaleY:0.3761,rotation:39.8098,x:64.3107,y:-180.7923,startPosition:5},0).wait(1).to({scaleX:0.3757,scaleY:0.3757,rotation:39.2812,x:67.024,y:-176.7779,startPosition:6},0).wait(1).to({scaleX:0.3752,scaleY:0.3752,rotation:38.76,x:69.6993,y:-172.8196,startPosition:7},0).wait(1).to({scaleX:0.3748,scaleY:0.3748,rotation:38.2462,x:72.3367,y:-168.9174,startPosition:8},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,rotation:37.7397,x:74.9363,y:-165.0713,startPosition:9},0).wait(1).to({scaleX:0.374,scaleY:0.374,rotation:37.2406,x:77.498,y:-161.2812,startPosition:10},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,rotation:36.7489,x:80.0218,y:-157.5471,startPosition:11},0).wait(1).to({scaleX:0.3731,scaleY:0.3731,rotation:36.2646,x:82.5076,y:-153.8692,startPosition:0},0).wait(1).to({scaleX:0.3727,scaleY:0.3727,rotation:35.7877,x:84.9556,y:-150.2473,startPosition:1},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,rotation:35.3182,x:87.3658,y:-146.6815,startPosition:2},0).wait(1).to({scaleX:0.3719,scaleY:0.3719,rotation:34.856,x:89.738,y:-143.1717,startPosition:3},0).wait(1).to({scaleX:0.3715,scaleY:0.3715,rotation:34.4012,x:92.0723,y:-139.718,startPosition:4},0).wait(1).to({scaleX:0.3712,scaleY:0.3712,rotation:33.9538,x:94.3688,y:-136.3203,startPosition:5},0).wait(1).to({scaleX:0.3708,scaleY:0.3708,rotation:33.5138,x:96.6273,y:-132.9788,startPosition:6},0).wait(1).to({scaleX:0.3704,scaleY:0.3704,rotation:33.0812,x:98.848,y:-129.6933,startPosition:7},0).wait(1).to({scaleX:0.3701,scaleY:0.3701,rotation:32.6559,x:101.0308,y:-126.4638,startPosition:8},0).wait(1).to({scaleX:0.3697,scaleY:0.3697,rotation:32.2381,x:103.1756,y:-123.2904,startPosition:9},0).wait(1).to({scaleX:0.3694,scaleY:0.3694,rotation:31.8276,x:105.2826,y:-120.1731,startPosition:10},0).wait(1).to({scaleX:0.369,scaleY:0.369,rotation:31.4245,x:107.3517,y:-117.1119,startPosition:11},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:31.0288,x:109.3829,y:-114.1067,startPosition:0},0).wait(1).to({scaleX:0.3684,scaleY:0.3684,rotation:30.6404,x:111.3763,y:-111.1576,startPosition:1},0).wait(1).to({scaleX:0.368,scaleY:0.368,rotation:30.2595,x:113.3317,y:-108.2645,startPosition:2},0).wait(1).to({scaleX:0.3677,scaleY:0.3677,rotation:29.8859,x:115.2492,y:-105.4275,startPosition:3},0).wait(1).to({scaleX:0.3674,scaleY:0.3674,rotation:29.5197,x:117.1289,y:-102.6466,startPosition:4},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,rotation:29.1609,x:118.9706,y:-99.9217,startPosition:5},0).wait(1).to({scaleX:0.3668,scaleY:0.3668,rotation:28.8095,x:120.7745,y:-97.2529,startPosition:6},0).wait(1).to({scaleX:0.3665,scaleY:0.3665,rotation:28.4655,x:122.5404,y:-94.6402,startPosition:7},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,rotation:28.1288,x:124.2685,y:-92.0835,startPosition:8},0).wait(1).to({scaleX:0.3659,scaleY:0.3659,rotation:27.7995,x:125.9587,y:-89.5829,startPosition:9},0).wait(1).to({scaleX:0.3657,scaleY:0.3657,rotation:27.4776,x:127.611,y:-87.1384,startPosition:10},0).wait(1).to({scaleX:0.3654,scaleY:0.3654,rotation:27.1631,x:129.2254,y:-84.7499,startPosition:11},0).wait(1).to({scaleX:0.3652,scaleY:0.3652,rotation:26.856,x:130.8019,y:-82.4175,startPosition:0},0).wait(1).to({scaleX:0.3649,scaleY:0.3649,rotation:26.5562,x:132.3405,y:-80.1412,startPosition:1},0).wait(1).to({scaleX:0.3646,scaleY:0.3646,rotation:26.2639,x:133.8412,y:-77.9209,startPosition:2},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,rotation:25.9789,x:135.304,y:-75.7567,startPosition:3},0).wait(1).to({scaleX:0.3642,scaleY:0.3642,rotation:25.7013,x:136.7289,y:-73.6485,startPosition:4},0).wait(1).to({scaleX:0.3639,scaleY:0.3639,rotation:25.4311,x:138.116,y:-71.5964,startPosition:5},0).wait(1).to({scaleX:0.3637,scaleY:0.3637,rotation:25.1683,x:139.4651,y:-69.6004,startPosition:6},0).wait(1).to({scaleX:0.3635,scaleY:0.3635,rotation:24.9128,x:140.7764,y:-67.6604,startPosition:7},0).wait(1).to({scaleX:0.3633,scaleY:0.3633,rotation:24.6647,x:142.0497,y:-65.7766,startPosition:8},0).wait(1).to({scaleX:0.3631,scaleY:0.3631,rotation:24.4241,x:143.2852,y:-63.9487,startPosition:9},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,rotation:24.1907,x:144.4828,y:-62.177,startPosition:10},0).wait(1).to({scaleX:0.3627,scaleY:0.3627,rotation:23.9648,x:145.6424,y:-60.4613,startPosition:11},0).wait(1).to({scaleX:0.3625,scaleY:0.3625,rotation:23.7463,x:146.7642,y:-58.8016,startPosition:0},0).wait(1).to({scaleX:0.3623,scaleY:0.3623,rotation:23.5351,x:147.8481,y:-57.1981,startPosition:1},0).wait(1).to({scaleX:0.3622,scaleY:0.3622,rotation:23.3314,x:148.8941,y:-55.6506,startPosition:2},0).wait(1).to({scaleX:0.362,scaleY:0.362,rotation:23.135,x:149.9022,y:-54.1591,startPosition:3},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,rotation:22.946,x:150.8724,y:-52.7238,startPosition:4},0).wait(1).to({scaleX:0.3617,scaleY:0.3617,rotation:22.7643,x:151.8047,y:-51.3445,startPosition:5},0).wait(1).to({scaleX:0.3615,scaleY:0.3615,rotation:22.5901,x:152.6991,y:-50.0212,startPosition:6},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,rotation:22.4232,x:153.5556,y:-48.754,startPosition:7},0).wait(1).to({scaleX:0.3613,scaleY:0.3613,rotation:22.2638,x:154.3742,y:-47.5429,startPosition:8},0).wait(1).to({scaleX:0.3611,scaleY:0.3611,rotation:22.1117,x:155.1549,y:-46.3879,startPosition:9},0).wait(1).to({scaleX:0.361,scaleY:0.361,rotation:21.9669,x:155.8978,y:-45.2889,startPosition:10},0).wait(1).to({scaleX:0.3609,scaleY:0.3609,rotation:21.8296,x:156.6027,y:-44.246,startPosition:11},0).wait(1).to({scaleX:0.3608,scaleY:0.3608,rotation:21.6997,x:157.2698,y:-43.2591,startPosition:0},0).wait(1).to({scaleX:0.3607,scaleY:0.3607,rotation:21.5771,x:157.8989,y:-42.3283,startPosition:1},0).wait(1).to({regX:0.2,regY:-0.1,scaleX:0.3606,scaleY:0.3606,rotation:21.4619,x:158.5,y:-41.45,startPosition:2},0).to({_off:true},1).wait(14));

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

	// bug
	this.instance_7 = new lib.TICK_1("synched",0);
	this.instance_7.setTransform(338.35,92.8,0.3194,0.3194,0,0,0,0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},101).wait(259));

	// Img2
	this.instance_8 = new lib.Img2();
	this.instance_8.setTransform(47,107,1,1,0,0,0,150,105);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// Img1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(47,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16486A").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-56.6,1041.8,177.1);


// stage content:
(lib.WFSB_217810_MM_728x90 = function(mode,startPosition,loop,reversed) {
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