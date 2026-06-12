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
	this.shape.setTransform(142.275,56.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_1.setTransform(138.875,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAfIAAghQAAgHgEgEQgEgEgGABQgFgBgEAEQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAHQADgDAFgCQAEgDAFAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_2.setTransform(133.65,54.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgIAEgIQAEgGAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFACQgFAEgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAFAAAEQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_3.setTransform(126.625,54.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAg8IAPAAIAAA8gAgGgbQgDgCABgEQgBgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(122.25,52.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_5.setTransform(119.825,53.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAuIAAhZIAQAAIAAAJQADgFAFgDQAFgCAGAAQAIAAAGADQAGAFAEAGQAEAIAAAJQAAAJgEAGQgEAIgGADQgGAFgIAAQgGAAgFgEQgFgCgDgEIAAAmgAgHgcQgEACgCADQgCAFAAAFQAAAFACAEQACAEAEACQAEACADAAQAEAAAEgCQADgCADgEQACgEAAgFQAAgFgCgFQgDgEgDgCQgEgCgEAAQgDAAgEADg");
	this.shape_6.setTransform(115.025,55.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjAfIAAghQAAgHgEgEQgDgDgGAAQgHAAgDADQgEAEAAAHIAAAhIgOAAIAAghQAAgHgEgEQgEgDgGAAQgGAAgEADQgEAEAAAHIAAAhIgPAAIAAg8IAPAAIAAAHQADgDAFgCQAFgDAFAAQAHAAAGADQAFADADAGQADgFAFgDQAGgEAHAAQALAAAHAHQAGAHAAAMIAAAjg");
	this.shape_7.setTransform(105.925,54.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAbQgHgDgFgIQgDgHAAgJQAAgIAEgIQAEgGAHgFQAHgDAIAAQAJAAAHADQAHAFAEAGQAEAIAAAIQAAAJgEAHQgEAIgHADQgIAFgIAAQgIAAgHgFgAgKgMQgFAEAAAIQAAAIAEAGQAFAEAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_8.setTransform(97.475,54.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAiQgKgFgFgJQgEgIgBgMQABgKAEgJQAFgJAKgFQAIgFALAAQAMAAAKAHQAJAGAFAMIgSAAQgDgGgFgCQgEgDgHAAQgFAAgGADQgFADgDAGQgDAGAAAGQAAAIADAGQADAFAFAEQAGADAFAAQAHAAAEgDQAFgDADgFIASAAQgFALgJAHQgJAGgNAAQgLAAgIgFg");
	this.shape_9.setTransform(90.1,53.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAtIANgeIgZg7IASAAIAOAqIAQgqIARAAIglBZg");
	this.shape_10.setTransform(80.725,55.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAJAmQgTAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgPIAPAAIAAAPIANAAIAAANIgNAAIAAAcQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQACABADAAIAHAAIAAANg");
	this.shape_11.setTransform(75.125,53.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAbQgHgDgEgIQgEgHAAgJQAAgIAEgIQAEgGAHgFQAGgDAIAAQAJAAAHADQAHAEAEAHQADAHAAAIIAAAGIgsAAQABAGAEAEQAEAEAFgBQAJAAADgGIARAAQgDAIgHAGQgIAFgLABQgHAAgHgFgAAPgEQgBgHgEgDQgEgEgGAAQgFAAgEAEQgEADAAAHIAcAAIAAAAg");
	this.shape_12.setTransform(70.025,54.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgHAAIAAgMIAHAAIAAgDQAAgLAHgGQAFgFANAAIAAANQgFAAgDACQgCACAAAFIAAADIALAAIAAAMIgLAAIAAAwg");
	this.shape_13.setTransform(65.2,53.0229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAbQgGgDgEgIQgEgHAAgJQAAgIAEgIQAEgGAGgFQAGgDAIAAQAGAAAFACQAFADADAEIAAgIIAQAAIAAA8IgQAAIAAgJQgDAEgFACQgFAEgGAAQgIAAgGgFgAgHgPQgDACgDAEQgCAFAAAEQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgEgCgFQgCgDgEgCQgEgDgEAAQgDAAgEACg");
	this.shape_14.setTransform(59.825,54.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAkQgGgCgEgFQgEgFAAgIIARAAQAAAFADADQADACAEAAQAGAAACgCQAEgDAAgEQAAgDgDgCIgEgEIgIgDIgNgEQgEgBgDgEQgEgFAAgHQAAgHAEgFQADgFAHgDQAGgCAHgBQAMAAAGAHQAIAFABAKIgRAAQgBgEgCgCQgEgDgEAAQgEABgDACQgCACAAAEQAAAEABACIAGADIAHADIAMAEQAFACAEAEQADAEAAAHQAAAHgDAEQgDAGgHADQgGADgJABQgGAAgHgEg");
	this.shape_15.setTransform(53.35,53.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgDgDgGQgEgEAAgHQAAgIAEgHQAFgEAIgEIgEgHQgCgDAAgFQAAgFADgEQADgEAFgCQAFgDAHAAQAGAAAFADQAFADACAEQADAEgBAGIgOAAQAAgEgBgCQgCgCgDAAQgEAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAADACADIAFAHIATASIAAAAIAAgBIAHgJIAQAAIgIAMIgFAIIATASIgTAAIgIgIQgLAKgPAAQgIAAgGgDgAgZAQQAAAEAEADQAEAEAGAAQAJAAAGgHIgSgSQgLAEAAAKg");
	this.shape_16.setTransform(167.975,39.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(157.875,39.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgGQgDgIAAgJQAAgIAEgHQAEgIAHgDQAHgFAIAAQAJAAAHAFQAHADAEAIQAEAHAAAIQAAAJgEAIQgEAGgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAGAAAHQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgHgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_18.setTransform(151.075,40.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAcQgHgFgFgGQgDgIAAgJQAAgIAEgHQAEgIAHgDQAHgFAIAAQAJAAAHAFQAHADAEAIQAEAHAAAIQAAAJgEAIQgEAGgHAFQgIADgIAAQgIAAgHgDgAgKgNQgFAGAAAHQAAAJAEAEQAFAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgHgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_19.setTransform(144.075,40.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAmIAAhLIAvAAIAAAMIgfAAIAAAUIAXAAIAAALIgXAAIAAAgg");
	this.shape_20.setTransform(138.275,39.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAlQgGgEgEgHQgEgHAAgJQAAgKAEgGQAEgHAGgEQAGgEAIAAQAFAAAGADQAFACADAFIAAgdIAQAAIAABQIgQAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgFQgDACgDADQgCAEAAAGQAAAFACAEQADAEADADQAEACADAAQAEAAAEgCQAEgDACgEQACgEAAgFQAAgGgCgEQgCgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_21.setTransform(129.525,39.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAfIAAggQAAgIgEgEQgDgDgHgBQgFABgEADQgDAEgBAIIAAAgIgPAAIAAg8IAPAAIAAAIQAEgFAFgBQAEgDAFAAQALAAAGAHQAHAHAAAMIAAAjg");
	this.shape_22.setTransform(122.95,40.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAcQgGgFgEgGQgEgIAAgJQAAgIAEgHQAEgIAGgDQAGgFAIAAQAGAAAFAEQAFACADAEIAAgJIAQAAIAAA8IgQAAIAAgJQgDAFgFADQgFACgGAAQgIAAgGgDgAgHgPQgDADgDAEQgCAEAAAEQAAAFACAFQADAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgFAAgFQAAgEgCgEQgCgFgEgBQgEgDgEAAQgDAAgEACg");
	this.shape_23.setTransform(116.025,40.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUAmIgFgOIgeAAIgEAOIgQAAIAbhLIARAAIAbBLgAALALIgLgeIgKAeIAVAAg");
	this.shape_24.setTransform(106.7,39.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAmIAAggIghAAIAAAgIgPAAIAAhLIAPAAIAAAfIAhAAIAAgfIAPAAIAABLg");
	this.shape_25.setTransform(98.7,39.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAlQgGgDgEgGQgEgEAAgHIARAAQAAAEADADQADACAEABQAFgBADgCQAEgCAAgEQAAgEgDgDIgEgDIgIgDIgNgEQgEgBgEgFQgCgEAAgHQAAgHACgFQAEgFAGgCQAGgDAIgBQAMABAGAFQAIAGABALIgRAAQAAgEgDgDQgDgDgEABQgFAAgDABQgDADABAFQAAACACACIAFAEIAHACIAMAFQAFABAEAEQADAFAAAIQAAAGgDAFQgDAFgHADQgGAEgJgBQgGAAgHgCg");
	this.shape_26.setTransform(91.4,39.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAiQgJgFgFgJQgFgJAAgLQAAgLAFgIQAFgKAJgFQAJgEAKgBQALABAJAEQAJAFAFAKQAFAIAAALQAAALgFAJQgFAJgJAFQgJAGgLgBQgKABgJgGgAgLgWQgGAEgDAFQgDAGAAAHQAAAIADAFQADAHAGACQAFAEAGAAQAHAAAFgEQAFgCADgHQADgFAAgIQAAgHgDgGQgDgFgFgEQgFgCgHAAQgGAAgFACg");
	this.shape_27.setTransform(84.025,39.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAjQgFgFAAgIQAAgJAFgEQAFgFAHAAQAIAAAFAFQAEAEAAAJQAAAIgEAFQgFAFgIAAQgHAAgFgFgAASAWQAAAIAGAAQAGAAABgIQgBgJgGAAQgGAAAAAJgAgcAmIAqhLIAPAAIgqBLgAgkgIQgEgEAAgJQAAgIAEgFQAGgFAHAAQAIAAAEAFQAFAFABAIQgBAJgFAEQgEAFgIAAQgHAAgGgFgAgdgVQAAAJAGgBQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQACgCAAgEQAAgJgGAAQgGAAAAAJg");
	this.shape_28.setTransform(71.45,39.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAeQgGgLAAgTQAAgSAGgLQAHgLAPAAQAQAAAHALQAHALgBASQABATgHALQgHALgQAAQgPAAgHgLgAgJgWQgCADgBAGIgCANIACAOQABAFACAEQAEADAFAAQAGAAADgDQADgEACgFIABgOIgBgNQgCgGgDgDQgDgEgGAAQgFAAgEAEg");
	this.shape_29.setTransform(63.95,39.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAeQgHgLAAgTQAAgSAHgLQAHgLAPAAQAQAAAHALQAGALABASQgBATgGALQgHALgQAAQgPAAgHgLgAgIgWQgEADgBAGIAAANIAAAOQABAFAEAEQADADAFAAQAGAAAEgDQADgEAAgFIABgOIgBgNQAAgGgDgDQgEgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(57.25,39.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAoIAAhBIgKAAIAAgOIAZAAIAABPg");
	this.shape_31.setTransform(51.725,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(48,-6,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(48,-6,125,67.9), null);


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
	this.shape.setTransform(187.975,-81.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBWIAbg7IgvhwIAoAAIAaBJIAbhJIAmAAIhICrg");
	this.shape_1.setTransform(182.075,-82.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_2.setTransform(168.575,-85.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg2IAkAAIAACaIgkAAIAAgRQgFAJgJAEQgKAGgLgBQgPABgLgIgAgRgCQgHAHAAANQAAANAHAJQAIAHAJABQALgBAHgHQAIgIAAgOQAAgNgIgHQgHgHgLgBQgJABgIAHg");
	this.shape_3.setTransform(155.725,-87.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_4.setTransform(142.375,-85.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_5.setTransform(132.25,-86.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXA7IAAg+QAAgMgGgHQgHgGgKAAQgJAAgGAGQgGAHAAAMIAAA+IgkAAIAAh0IAkAAIAAAQQAFgIAJgFQAJgEALAAQAVAAAMANQAMANAAAYIAABDg");
	this.shape_6.setTransform(117.775,-85.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_7.setTransform(105.275,-85.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBUIAAh0IAjAAIAAB0gAgPgyQgFgFAAgJQAAgIAFgFQAHgGAIAAQAJAAAHAGQAFAFAAAIQAAAJgFAFQgHAGgJgBQgIABgHgGg");
	this.shape_8.setTransform(96.35,-87.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_9.setTransform(89.4,-86.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_10.setTransform(78.575,-85.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATBJQgTAAgLgKQgLgJAAgWIAAguIgOAAIAAgdIAOAAIAAgdIAjAAIAAAdIAYAAIAAAdIgYAAIAAAuQAAAGADACQACACAGAAIANAAIAAAfg");
	this.shape_11.setTransform(68.35,-86.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA1QgKgFgGgMQgFgLAAgQIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_12.setTransform(57.675,-85.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9BYIAAitIAkAAIAAARQAFgJAKgEQAJgGALAAQAPABAMAHQALAIAHANQAHANAAATQAAASgHAMQgHAPgLAHQgMAHgPAAQgLAAgJgFQgKgFgFgIIAABJgAgSgwQgHAIAAAOQAAANAHAIQAIAHAKAAQAKAAAIgHQAHgIAAgNQAAgNgHgJQgIgHgKAAQgKAAgIAHg");
	this.shape_13.setTransform(44.575,-82.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_14.setTransform(31.325,-85.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_15.setTransform(21.425,-85.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_16.setTransform(167.975,-114.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkA1QgKgFgGgMQgFgMAAgPIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_17.setTransform(157.525,-114.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeA1QgOgHgIgOQgIgOAAgSQAAgRAIgOQAIgNAOgIQAOgHAQAAQARAAAOAHQAOAIAIANQAIAOAAARQAAASgIAOQgIAOgOAHQgOAHgRAAQgRAAgNgHgAgQgVQgHAIAAANQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgNgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_18.setTransform(145.025,-114.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtBWIAbg7IgvhwIAoAAIAaBJIAbhJIAmAAIhICrg");
	this.shape_19.setTransform(133.075,-111.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjBHQgMgHgHgOQgHgOAAgSQAAgSAHgMQAHgOAMgIQALgHAPAAQAKAAAKAFQAJAFAGAIIAAg3IAkAAIAACbIgkAAIAAgRQgFAJgJAEQgKAGgLAAQgPAAgLgIgAgRgCQgHAHAAANQAAAOAHAHQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgNgIgHQgHgHgLAAQgJAAgIAHg");
	this.shape_20.setTransform(115.775,-116.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA7IAAh0IAjAAIAAAUQAGgKAJgGQAKgFALAAIAAAmIgJAAQgOAAgHAGQgGAFAAAOIAAA2g");
	this.shape_21.setTransform(105.375,-114.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_22.setTransform(94.375,-114.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkA1QgKgFgGgMQgFgMAAgPIAAhDIAjAAIAAA/QAAALAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgLIAAg/IAjAAIAAB0IgjAAIAAgQQgGAIgJAEQgJAFgLAAQgNAAgLgGg");
	this.shape_23.setTransform(81.075,-114.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmBMQgQgMgCgVIAjAAQACAHAGAEQAGADAJAAQALAAAGgGQAHgGAAgOIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHQgMgHgHgOQgHgNAAgSQAAgSAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0QAAAQgHANQgGANgNAIQgNAHgUAAQgZAAgQgMgAgRgwQgHAIAAANQAAANAHAIQAIAHAJAAQALAAAHgHQAIgHAAgOQAAgNgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_24.setTransform(67.975,-111.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdA1QgOgHgHgOQgIgOAAgSQAAgRAIgOQAHgNANgIQAOgHAQAAQARAAAOAHQANAHAHANQAIAOAAARIgBAKIhQAAQABALAGAFQAGAGAJAAQANAAAFgLIAmAAQgDALgIAKQgHAJgMAFQgLAFgPAAQgQAAgNgHgAAWgKQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAFgCAKIAsAAIAAAAg");
	this.shape_25.setTransform(55.025,-114.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBSIAAhWIgNAAIAAgeIANAAIAAgDQAAgWAMgLQAMgLAYAAIAFAAIAAAeQgKAAgEADQgEAEAAAJIAAABIATAAIAAAeIgTAAIAABWg");
	this.shape_26.setTransform(45.625,-116.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA1QgMgHgHgOQgHgOAAgSQAAgRAHgOQAHgNAMgIQALgHAPAAQALAAAKAFQAJAFAFAIIAAgQIAkAAIAAB0IgkAAIAAgRQgFAIgKAFQgJAFgLAAQgPAAgLgHgAgRgUQgHAIAAAMQAAANAHAIQAIAIAJAAQALAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_27.setTransform(35.175,-114.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBGQgNgFgIgLQgHgJgBgPIAnAAQAAAIAFAEQAFAEAHABQAIAAAFgEQAEgEAAgGQAAgGgEgDIgJgGIgOgFQgOgFgJgEQgJgEgHgIQgGgJgBgNQAAgVAPgMQAQgMAXAAQAYAAAPAMQAOAMABAVIgmAAQAAgIgFgDQgFgFgHAAQgGAAgEAEQgEADAAAHQAAAHAGAEQAHAEAOAFIAWAJQAKADAGAIQAHAJAAANQAAAMgHALQgGALgMAFQgNAHgQAAQgPgBgNgFg");
	this.shape_28.setTransform(22.95,-115.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFyIAArj");
	this.shape_29.setTransform(246.5,-101.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(14.5,-139.4,233,76), null);


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
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(0,1,658,90), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAGQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape.setTransform(117.425,70.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAsQgLgGgHgLQgGgMAAgPQAAgOAGgLQAHgMALgGQALgGANAAQAOAAALAFQALAGAHAMQAGALAAAPIgBAHIhCAAQAAAJAGAFQAFAEAHABQAKAAAFgKIAgAAQgDAKgGAIQgHAHgJAEQgKAFgMAAQgNAAgLgGgAASgIQAAgIgFgEQgFgGgIABQgHAAgFAEQgFAEgBAJIAkAAIAAAAg");
	this.shape_1.setTransform(110.425,67.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_2.setTransform(103.025,65.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA9QgHgEgFgHIAAAOIgdAAIAAiAIAdAAIAAAtQAFgHAHgEQAIgEAJAAQAMAAAKAGQAKAGAGAMQAFAKAAAPQAAAPgFALQgGAMgKAGQgKAGgMAAQgJAAgIgEgAgPgBQgGAFAAALQAAALAGAHQAHAGAIAAQAIAAAHgGQAGgHAAgLQAAgLgGgGQgHgGgIAAQgIAAgHAHg");
	this.shape_3.setTransform(95.225,65.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAsQgKgHgGgLQgFgMAAgOQAAgOAFgLQAGgMAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABgIgeAAIAAgNQgEAGgIAEQgHAFgKAAQgMAAgJgGgAgOgRQgGAHAAAKQAAALAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgLQAAgKgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_4.setTransform(83.475,67.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_5.setTransform(75.825,65.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_6.setTransform(71.425,65.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAsQgKgHgGgLQgFgMAAgOQAAgOAFgLQAGgMAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABgIgeAAIAAgNQgEAGgIAEQgHAFgKAAQgMAAgJgGgAgOgRQgGAHAAAKQAAALAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgLQAAgKgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_7.setTransform(63.075,67.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAxIgihhIAgAAIAUBFIAVhFIAgAAIgjBhg");
	this.shape_8.setTransform(52.45,67.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeA9IgIgVIgsAAIgIAVIgeAAIAsh5IAhAAIAtB5gAAPARIgPgsIgPAsIAeAAg");
	this.shape_9.setTransform(42.15,66.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAtQgKgEgGgHQgFgIgBgJIAdAAQABAEAEAEQAEADAFAAQAGAAADgCQADgDAAgDQAAgEgEgCIgOgEIgRgGQgHgCgFgGQgFgFAAgKQAAgIAFgHQAEgHAJgEQAJgEAMAAQASAAAKAJQALAJACAPIgcAAQgBgFgDgDQgEgDgGAAQgFAAgCACQgDACAAAEQAAAEAEACIANAEIASAFQAHADAFAFQAFAGAAAKQAAAJgFAHQgFAGgJAEQgJAEgLAAQgMAAgKgFg");
	this.shape_10.setTransform(27.875,67.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_11.setTransform(17.875,67.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAsQgKgHgGgLQgFgMAAgOQAAgOAFgLQAGgMAKgGQAJgGAMAAQAKAAAIAEQAHAEAEAHIAAgOIAeAAIAABgIgeAAIAAgNQgEAGgIAEQgHAFgKAAQgMAAgJgGgAgOgRQgGAHAAAKQAAALAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgLQAAgKgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_12.setTransform(6.375,67.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOBAIAAh/IAdAAIAAB/g");
	this.shape_13.setTransform(-1.775,65.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtA9IAAh5IAuAAQAPAAAKAFQAKAFAGAJQAEAJAAALQAAALgEAJQgFAIgLAFQgKAFgPAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_14.setTransform(-8.95,66.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATAxIAAg0QAAgJgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAJIAAA0IgdAAIAAhgIAdAAIAAANQAFgHAIgDQAGgEAKAAQARAAAKALQAKALAAATIAAA4g");
	this.shape_15.setTransform(144.225,49.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLAAgPQAAgOAHgMQAGgLAMgGQALgGAOAAQAOAAAMAGQALAGAHALQAHAMAAAOQgBAPgGALQgHALgLAHQgMAGgOAAQgOAAgLgGgAgOgRQgFAGAAALQAAALAFAHQAGAGAIAAQAIAAAGgGQAGgHAAgLQAAgLgFgGQgHgHgIABQgIgBgGAHg");
	this.shape_16.setTransform(133.15,49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOBGIAAhhIAdAAIAABhgAgMgpQgFgFAAgHQAAgHAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgIAAQgHAAgFgEg");
	this.shape_17.setTransform(125.825,47.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAFACACQACABAFAAIALAAIAAAag");
	this.shape_18.setTransform(119.375,48.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQASAAANAKQAMAJAEASIggAAQgEgLgMAAQgHAAgFAFQgFAHAAALQAAALAFAHQAFAGAHAAQAMABAEgLIAgAAQgEARgNAJQgMAKgSAAQgNAAgLgGg");
	this.shape_19.setTransform(110.775,49.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQALgGANAAQAOAAALAFQALAHAHAKQAGALAAAPIgBAIIhCAAQAAAJAGAFQAFAFAHgBQAKAAAFgJIAgAAQgDAKgGAHQgHAIgJAEQgKAFgMAAQgNAAgLgGgAASgJQAAgHgFgEQgFgFgIgBQgHAAgFAFQgFAFgBAHIAkAAIAAAAg");
	this.shape_20.setTransform(100.425,49.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAFACACQACABAFAAIALAAIAAAag");
	this.shape_21.setTransform(91.425,48.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAsQgMgHgGgLQgHgLABgPQgBgOAHgMQAGgLAMgGQAMgGANAAQAOAAALAGQAMAGAHALQAGAMABAOQAAAPgIALQgGALgMAHQgLAGgOAAQgNAAgMgGgAgNgRQgHAGABALQgBALAHAHQAFAGAIAAQAIAAAGgGQAGgHAAgLQAAgLgFgGQgHgHgIABQgIgBgFAHg");
	this.shape_22.setTransform(82.6,49.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAxIAAhgIAdAAIAAAQQAFgIAIgEQAHgFAKAAIAAAgIgIAAQgLAAgGAEQgFAFAAALIAAAtg");
	this.shape_23.setTransform(74.4,49.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtA9IAAh5IAuAAQAPAAALAFQAKAFAFAJQAEAJAAALQAAALgEAJQgFAIgKAFQgLAFgPAAIgRAAIAAAsgAgQgFIAQAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgEgIAAIgQAAg");
	this.shape_24.setTransform(65.65,48.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA0AxIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgdAAIAAg0QAAgJgFgFQgFgFgJAAQgIAAgFAFQgFAFAAAJIAAA0IgeAAIAAhgIAeAAIAAAMQAEgGAIgDQAHgEAJAAQALAAAJAFQAIAEAEAJQAFgIAJgFQAJgFAKAAQASAAALALQALALAAATIAAA4g");
	this.shape_25.setTransform(46.025,49.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAsQgLgHgHgLQgGgLAAgPQAAgOAGgMQAHgLALgGQAMgGANAAQAOAAALAGQAMAGAHALQAGAMAAAOQABAPgIALQgGALgMAHQgLAGgOAAQgNAAgMgGgAgNgRQgGAGgBALQABALAGAHQAFAGAIAAQAIAAAGgGQAGgHAAgLQAAgLgGgGQgFgHgJABQgIgBgFAHg");
	this.shape_26.setTransform(31.15,49.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQA9QgQgBgJgHQgJgJAAgRIAAgmIgMAAIAAgZIAMAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAmQAAAFACACQACABAFAAIALAAIAAAag");
	this.shape_27.setTransform(21.925,48.2);

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
	this.shape_31.graphics.f("#14A751").s().p("AgwBDQgLgPAAgYQAAgcAQgOQAPgPAZAAQALAAAIAEIAAgfQgBgKgFAAIgIgBIAAgIIAqgGIABACIAACKQABAHACACQADACAJAAIAAAIIgsAAIAAgKQgQAOgQAAQgVAAgLgPgAgUgJQgHALAAAWQAAAUAHALQAGALAMAAQALAAAEgJQACgEABgHIAAgsQgBgJgBgDQgFgKgLAAQgLAAgHALg");
	this.shape_31.setTransform(100.4,26.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#14A751").s().p("AAIA2IAAgIQAIAAABgBQADgCAAgGIAAg1QAAgWgSAAQgNAAgGAMQgCAEAAAJIAAAxQAAAHADABQACACAIAAIAAAIIg5AAIAAgIQAKAAACgCQACgCAAgGIAAhAQAAgKgFAAIgIgBIAAgIIAogGIADAPIATgLQAJgEAJAAQAgAAAAAhIAAA3QAAAHACACQACACAKAAIAAAIg");
	this.shape_32.setTransform(87.775,28.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14A751").s().p("AgxAWIAAg0QAAgLgFgBIgIgBIAAgIIAqgDIABABIAABEQAAAYATAAQAMAAAFgLQACgFAAgHIAAguQAAgLgFgBIgIgBIAAgIIApgDIACABIAABWQAAAHACACQADABAJABIAAAIIgrAAIgBgMQgIAGgHADQgKAGgMAAQgfAAAAghg");
	this.shape_33.setTransform(74.85,28.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_34.setTransform(61.75,28.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14A751").s().p("AA2BLQgQAAgIgFQgIgFgEgLIgGggQgCgJgGgFQgEgDgKAAIgKAAIAAAxQAAAIADACQADACAMABIAAAIIhEAAIAAgIQAMgBADgCQADgCAAgIIAAhrQAAgIgDgCQgDgCgMgBIAAgIIBIAAQAYAAAMAHQAOAJAAAVQAAAPgKAKQgKAJgQACIAAABQAcAGAGAgQACAOAEAGQAFAIAKABIAAAIgAgSg/QgCACAAAFIAAA0IALAAQAPAAAGgIQAGgHAAgPQAAgegaAAQgIAAgCABg");
	this.shape_35.setTransform(48.275,26.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#14A751").s().p("AgbAJIAAgRIA3AAIAAARg");
	this.shape_36.setTransform(37.025,28.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#14A751").s().p("AgqA2IAAgIQAJAAADgCQACgCAAgHIAAg/QAAgKgFAAIgIgBIAAgIIAogGIABATIAQgPQAHgEAGAAQAOAAAAAOQAAAHgDAFQgFAFgGAAQgCAAgGgDQgHgFgEAAQgJAAAAASIAAAvQAAAHADACQADACANAAIAAAIg");
	this.shape_37.setTransform(30.05,28.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#14A751").s().p("AAKArIgNAIQgIAFgKAAQgPAAgJgKQgIgJAAgNQAAgTAWgHQAigLAGgEIAAgKQgBgSgNAAQgMAAgHAVQgCAIgGAAQgGAAgFgDQgGgDgBgGQABgLAMgHQANgJAWAAQAoAAAAAfIAAAwQAAAPAGACQADABAHAAIAAAHQgMAHgQAAQgMAAgEgNgAgLACQgLAFAAAOQAAAIAFAGQAFAFAGAAQAOAAABgQIAAgfg");
	this.shape_38.setTransform(18.75,28.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#14A751").s().p("AgxAAQAAgYAMgOQAOgRAaAAQAbAAAMARQAIALAAARQAAAJgLAAIg4AAQAAApAcAAQAUAAAKgUIAHAEQgLAggiAAQg0AAAAg4gAgNghQgEAJAAANIAdAAQAHAAAAgHQAAgbgRAAQgKAAgFAMg");
	this.shape_39.setTransform(5.575,28.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#14A751").s().p("AgkBLIAAgIQAPgBADgCQADgCAAgIIAAghQAAgGgEgJIgig8QgEgHgDgCQgDgCgIgBIAAgIIBCAAIAAAIIgMACQgFAAADAGQAMAZASAiQAQgfALgbQADgHgGgBIgMgBIAAgIIAxAAIAAAIQgJABgEACQgDACgEAHQgLARgVAqQgDAHAAAHIAAAjQAAAIADACQADACAPABIAAAIg");
	this.shape_40.setTransform(-6.525,26.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#14A751").s().p("AgxAAQAAgYAMgOQAOgRAaAAQAbAAAMARQAIALAAARQAAAJgLAAIg4AAQAAApAcAAQAUAAAKgUIAHAEQgLAggiAAQg0AAAAg4gAgNghQgEAJAAANIAdAAQAHAAAAgHQAAgbgRAAQgKAAgFAMg");
	this.shape_41.setTransform(169.775,8.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#14A751").s().p("AApA2IAAgIQAIAAABgBQAEgCAAgGIAAg1QgBgWgRAAQgQABgEAPIgBALIAAAwQAAAGADACQABABAJAAIAAAIIg2AAIAAgIQAIAAACgBQACgCAAgGIAAg1QAAgWgRAAQgQAAgEAQQgBADAAAHIAAAxQAAAGADACQACABAHAAIAAAIIg4AAIAAgIQAKAAABgCQADgCAAgHIAAg/QAAgKgFAAIgJgBIAAgIIAqgGIACAPIARgKQAKgFAJAAQAUAAAIAQIAQgKQAMgGAJAAQAiAAAAAhIAAA3QAAAHACACQACACALAAIAAAIg");
	this.shape_42.setTransform(155.1,8.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_43.setTransform(138.5,8.325);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#14A751").s().p("AAMBLIAAgIQAMgBADgCQACgCAAgIIAAg2Ig6AAIAAA2QAAAIADACQADACAMABIAAAIIhEAAIAAgIQAMgBADgCQADgCAAgIIAAhrQAAgIgDgCQgDgCgMgBIAAgIIBEAAIAAAIQgMABgDACQgDACAAAIIAAAsIA6AAIAAgsQAAgIgCgCQgDgCgMgBIAAgIIBEAAIAAAIQgMABgDACQgDACAAAIIAABrQAAAIADACQADACAMABIAAAIg");
	this.shape_44.setTransform(124.325,6.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#14A751").s().p("AgrA2IAAgIQALAAACgCQACgCAAgHIAAg/QAAgKgGAAIgHgBIAAgIIAogGIABATIAQgPQAHgEAGAAQAOAAAAAOQAAAHgDAFQgFAFgGAAQgCAAgGgDQgHgFgEAAQgJAAAAASIAAAvQAAAHADACQADACANAAIAAAIg");
	this.shape_45.setTransform(106.45,8.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#14A751").s().p("AgxAWIAAg0QAAgLgGgBIgHgBIAAgIIAqgDIABACIAABDQAAAYATAAQAMAAAFgLQACgEAAgIIAAguQAAgLgFgBIgIgBIAAgIIAqgDIABACIAABVQAAAHACACQADABAJABIAAAIIgqAAIgCgMQgIAGgHADQgKAGgMAAQgfAAAAghg");
	this.shape_46.setTransform(95.65,8.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_47.setTransform(82.5,8.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#14A751").s().p("AgkBLIAAgIQAPgBADgCQADgCAAgIIAAghQAAgGgEgJIgig8QgEgHgDgCQgDgCgIgBIAAgIIBCAAIAAAIIgMACQgFAAADAGQAMAZASAiQAQgfALgbQADgHgGgBIgMgBIAAgIIAxAAIAAAIQgJABgEACQgDACgEAHQgLARgVAqQgDAHAAAHIAAAjQAAAIADACQADACAPABIAAAIg");
	this.shape_48.setTransform(70.575,6.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#14A751").s().p("AgMA+QgJgIAAgOIAAhFIgNAAIAAgLIAPAAIARgbIAKAAIAAAbIAYAAIAAALIgYAAIAAA9QAAAUAOAAQAGAAAEgCIADAHQgSALgMAAQgJAAgIgGg");
	this.shape_49.setTransform(55.275,7.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#14A751").s().p("AghAqQgOgOAAgbQAAgZANgPQAPgQAZAAQAQAAAMAHQAMAGAAAKQAAAHgFADQgFADgGAAQgIAAgCgHQgGgTgKAAQgHAAgGAKQgGALAAAVQAAAVAIAMQAHAKAMAAQATAAAKgUIAHADQgJAhglAAQgWAAgNgOg");
	this.shape_50.setTransform(46.025,8.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#14A751").s().p("AgxAAQAAgYAMgOQAOgRAaAAQAbAAAMARQAIALAAARQAAAJgLAAIg4AAQAAApAcAAQAUAAAKgUIAHAEQgLAggiAAQg0AAAAg4gAgNghQgEAJAAANIAdAAQAHAAAAgHQAAgbgRAAQgKAAgFAMg");
	this.shape_51.setTransform(34.125,8.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#14A751").s().p("AgMA+QgJgIAAgOIAAhFIgNAAIAAgLIAPAAIARgbIAKAAIAAAbIAYAAIAAALIgYAAIAAA9QAAAUAOAAQAGAAAEgCIADAHQgSALgMAAQgJAAgIgGg");
	this.shape_52.setTransform(25.875,7.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#14A751").s().p("Ag2AAQAAg3A2AAQA3AAAAA3QAAA4g3AAQg2AAAAg4gAgWAAQAAAuAWAAQAXAAAAguQAAgtgXAAQgWAAAAAtg");
	this.shape_53.setTransform(15.55,8.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#14A751").s().p("AgqA2IAAgIQAKAAABgCQADgCAAgHIAAg/QAAgKgFAAIgIgBIAAgIIAogGIACATIAPgPQAHgEAGAAQAOAAAAAOQAAAHgEAFQgDAFgHAAQgCAAgGgDQgHgFgEAAQgJAAAAASIAAAvQAAAHADACQADACANAAIAAAIg");
	this.shape_54.setTransform(5.5,8.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#14A751").s().p("Ag9BLIAAgIQAMgBACgCQADgCAAgIIAAhrQAAgIgDgCQgCgCgMgBIAAgIIBEAAQAbAAAMAIQAQAKABAZQAAAbgWALQgNAJgaAAQgJAAgFgCIAAAoQABAIADACQADACAOABIAAAIgAgJg/QgCACgBAEIAAA2QABAJAOAAQAaAAgBgjQABgSgJgJQgHgIgNAAQgHAAgCABg");
	this.shape_55.setTransform(-6.45,6.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFrIAArV");
	this.shape_56.setTransform(220.25,36.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-15.9,-5.3,237.20000000000002,82.89999999999999), null);


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
	this.shape.graphics.f("#14A751").s().p("AgqBSQgGgFAAgFQAAgHAFgGQAEgFAFAAQAEAAAGAEQAEAEAEAAQAHAAAEgPQACgGgDgKIgphgQgDgHgDgCQgDgBgIgBIAAgIIA+AAIAAAIIgJABQgFACACAGIAaBDIAAAAQAPgpAHgaQABgHgFgBIgLgBIAAgIIAuAAIAAAIQgJABgDADQgDACgDAJIgoBqQgIAXgJAJQgIAIgMAAQgHAAgFgDg");
	this.shape.setTransform(444.075,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgfBVIAAgIQALAAADgCQADgCgBgIIAAh7QAAgLgFgBIgJgBIAAgIIAsgGIACABIAACVQgBAIADACQACACAKAAIAAAIg");
	this.shape_1.setTransform(433.75,42.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgeBSIAAgIQAKgBACgCQADgBAAgIIAAhEQAAgKgGgBIgIgBIAAgIIAsgHIABACIAABdQAAAIACABQADACALABIAAAIgAgNgyQgFgGAAgHQAAgIAFgFQAEgFAJAAQAHAAAGAFQAEAFAAAIQAAAHgEAGQgGAFgHAAQgJAAgEgFg");
	this.shape_2.setTransform(426.05,42.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAsA6IAAgIIAKgCQADgCAAgHIAAg4QAAgXgTAAQgRAAgEAQIgBAMIAAAzQAAAHADACQACABAIABIAAAIIg5AAIAAgIIAKgCQACgCABgHIAAg4QAAgXgSAAQgRgBgFASIgBALIAAAzQAAAHADACQABABAKABIAAAIIg+AAIAAgIQALgBADgCQACgBAAgJIAAhDQAAgKgGgBIgJgCIAAgHIAsgHIACAQIATgLQALgFAKAAQAVAAAIASIASgLQAMgHALAAQAkAAAAAkIAAA6QAAAJADABQACACAKABIAAAIg");
	this.shape_3.setTransform(411.15,44.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAKAuIgNAJQgKAEgJABQgRAAgJgLQgJgJAAgOQAAgVAYgHQAkgMAGgEIAAgLQAAgTgOgBQgOAAgHAXQgCAJgHAAQgGAAgFgDQgHgEAAgHQAAgKANgJQAOgJAXAAQArABAAAgIAAA0QAAAPAHADIAKABIABAIQgOAGgQABQgNAAgFgOgAgMABQgMAHAAAOQAAAJAFAGQAFAGAIAAQAPAAAAgRIAAghg");
	this.shape_4.setTransform(393.025,44.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag8BQIAAgIQANgBADgDQADgBAAgKIAAhyQAAgJgDgCQgDgCgNAAIAAgJIB5AAIAAAqIgJAAQgFgTgGgGQgHgHgRAAIgQAAQgEAAgCABQgBACAAAFIAAA4IAZAAQAMABAEgFQADgEADgNIAJAAIAAA2IgJAAQgDgOgDgDQgEgFgMAAIgZAAIAAAzQAAAKADABQADADAPABIAAAIg");
	this.shape_5.setTransform(379.425,42.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgtA6IAAgIQAKgBACgCQADgBAAgJIAAhDQAAgKgGgBIgIgCIAAgHIArgHIABAUQALgLAHgFQAGgEAHAAQAPAAAAAPQAAAIgDAFQgFAGgHAAQgCAAgGgEQgIgGgFABQgJAAAAATIAAAyQAAAIADACQADACAOABIAAAIg");
	this.shape_6.setTransform(362.75,44.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("Ag0AYIAAg4QAAgMgGgBIgJgBIAAgIIAtgEIACACIAABIQAAAaAUAAQANAAAFgMQACgFAAgJIAAgwQAAgMgGgBIgIgBIAAgIIAtgEIABACIAABcQAAAHADACQACACALAAIAAAJIguAAIgCgNIgPAKQgMAGgMAAQghAAAAgjg");
	this.shape_7.setTransform(351.175,45.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag6AAQAAg7A6AAQA7AAgBA7QABA8g7AAQg6AAAAg8gAgYAAQAAAyAYgBQAZAAAAgxQAAgwgZgBQgYAAAAAxg");
	this.shape_8.setTransform(337.35,44.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgnBQIAAgIQAQgBADgDQAEgBAAgKIAAgjQAAgGgFgJIgkhBQgEgIgDgCQgDgCgJAAIAAgJIBHAAIAAAJIgNABQgGAAADAHQANAbATAkIABAAQARghALgcQADgJgGgBIgMAAIAAgJIA0AAIAAAJQgKAAgEACQgEADgEAHQgLATgWAsQgEAIAAAIIAAAkQAAAKADABQAEADAQABIAAAIg");
	this.shape_9.setTransform(325.075,42.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgqBVIAAgIQAKAAADgCQACgCAAgIIAAhQIgOAAIAAgLIAOAAIAAgHQAAgZAMgOQALgNAUAAQAOAAAHAHQAGAFAAAGQAAAFgFAEQgEAFgFAAQgIgBgBgFQgHgQgGAAQgGAAABAOIADAjIAVAAIAAALIgVAAIAABRQAAAHACACQACABANABIAAAIg");
	this.shape_10.setTransform(307.35,42.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag5AAQAAg7A5AAQA6AAABA7QgBA8g6AAQg5AAAAg8gAgYAAQAAAyAYgBQAZAAAAgxQAAgwgZgBQgYAAAAAxg");
	this.shape_11.setTransform(295.65,44.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("Ag0AAQAAgaAMgPQAPgSAcAAQAdAAANASQAIALAAAUQAAAJgMAAIg8AAQAAAsAfAAQAVAAAKgWIAIAFQgMAigkAAQg3AAAAg8gAgOgkQgFAKAAAOIAgAAQAHAAABgHQAAgdgTgBQgLAAgFANg");
	this.shape_12.setTransform(276.4,44.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AguA6IAAgIQALgBADgCQACgBAAgJIAAhDQAAgKgGgBIgIgCIAAgHIAqgHIACAUQAMgLAFgFQAIgEAGAAQAPAAABAPQgBAIgEAFQgEAGgHAAQgDAAgFgEQgIgGgEABQgKAAAAATIAAAyQAAAIADACQADACAOABIAAAIg");
	this.shape_13.setTransform(267.2,44.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAKAuIgNAJQgKAEgJABQgRAAgJgLQgJgJAAgOQAAgVAYgHQAkgMAGgEIAAgLQAAgTgOgBQgOAAgHAXQgCAJgHAAQgGAAgFgDQgHgEAAgHQAAgKANgJQAOgJAXAAQArABAAAgIAAA0QAAAPAHADIAKABIABAIQgOAGgQABQgNAAgFgOgAgMABQgMAHAAAOQAAAJAFAGQAFAGAIAAQAPAAAAgRIAAghg");
	this.shape_14.setTransform(255.375,44.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AhGACQABgmAUgXQAWgYAsAAQAhAAASAKIAAApIgJAAQgFgUgJgJQgKgMgTAAQgbAAgMAcQgIATABAaQgBAbAJATQAMAcAbAAQATAAALgNQAHgJAIgWIAJAAIgDArQgTALgiAAQhVAAAAhSg");
	this.shape_15.setTransform(240.45,42.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("Ag0AAQAAgaAMgPQAQgSAbAAQAdAAANASQAIALAAAUQAAAJgLAAIg8AAQgBAsAfAAQAUAAAMgWIAIAFQgNAiglAAQg2AAAAg8gAgOgkQgFAKABAOIAfAAQAHAAAAgHQAAgdgSgBQgLAAgFANg");
	this.shape_16.setTransform(218.2,44.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAtBVQgWAAgKgNQgMgPgQgeIAAgCIAgguQAFgFAGAAIAgAAIAAAGQgcAFgJAJIgOAOQAAAAAAABQgBAAAAAAQAAABABAAQAAABAAAAQASAeAVAZQAIAJAJADIAAAHgAhABVIAAgIQALAAACgCQADgCAAgIIAAh7QAAgKgGgBIgIgCIAAgIIAtgGIABABIAACVQAAAIACACQACACALAAIAAAIg");
	this.shape_17.setTransform(206.5,42.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAKAuIgNAJQgKAEgJABQgRAAgJgLQgJgJAAgOQAAgVAYgHQAkgMAGgEIAAgLQAAgTgOgBQgOAAgHAXQgCAJgHAAQgGAAgFgDQgHgEAAgHQAAgKANgJQAOgJAXAAQArABAAAgIAAA0QAAAPAHADIAKABIABAIQgOAGgQABQgNAAgFgOgAgMABQgMAHAAAOQAAAJAFAGQAFAGAIAAQAPAAAAgRIAAghg");
	this.shape_18.setTransform(192.775,44.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgoBQIAAgIIAOgBQAGgBACgDQABgCABgHIAAh/IgKAAQgRAAgGAIQgFAFgFAUIgJAAIAAgrICJAAIAAArIgJAAQgFgUgFgFQgHgIgPAAIgKAAIAAB/QAAAHACACQACADAGABIAMABIAAAIg");
	this.shape_19.setTransform(181.1,42.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgqBRQgGgDAAgHQAAgGAFgFQAEgGAFAAQAEAAAGAFQAEADAEAAQAHAAAEgQQACgEgDgLIgphfQgDgIgDgBQgDgCgIAAIAAgJIA+AAIAAAJIgJABQgFAAACAIIAaBCIAAAAQAPgpAHgaQABgGgFgBIgLgBIAAgJIAuAAIAAAJQgJAAgDADQgDACgDAJIgoBpQgIAYgJAKQgIAHgMAAQgHAAgFgEg");
	this.shape_20.setTransform(331.375,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgfBWIAAgJQAMgBACgBQACgDABgHIAAh7QAAgLgHgBIgIgBIAAgIIArgFIACABIAACUQAAAHADADQACABALABIAAAJg");
	this.shape_21.setTransform(321.3,13.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgeBSIAAgIQAKgBACgCQADgBAAgIIAAhEQAAgKgGgBIgIgBIAAgIIArgHIACACIAABdQAAAIADABQACACAKABIAAAIgAgNgyQgFgGAAgHQAAgIAFgFQAEgFAJAAQAIAAAFAFQAEAFAAAIQAAAHgEAGQgGAFgHAAQgJAAgEgFg");
	this.shape_22.setTransform(314.1,14.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAsA6IAAgJIAKgBQADgCAAgHIAAg4QAAgXgTgBQgRABgEAQIgBALIAAA0QAAAHADACQACABAIAAIAAAJIg6AAIAAgJIALgBQACgCABgHIAAg4QAAgXgSgBQgRABgFAQIgBALIAAA0QAAAHADACQABABAKAAIAAAJIg+AAIAAgJQALAAADgCQACgCAAgHIAAhEQAAgKgGgBIgJgBIAAgIIAsgHIACAQIATgLQAKgFALAAQAUAAAJARIASgLQAMgGALAAQAkAAAAAkIAAA7QAAAHADACQABACALAAIAAAJg");
	this.shape_23.setTransform(299.45,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAKAuIgNAJQgKAEgJAAQgRABgJgKQgJgKAAgOQAAgVAYgHQAkgMAGgFIAAgKQAAgUgOAAQgOABgHAXQgCAIgHAAQgGAAgFgDQgHgEAAgGQAAgMANgIQAOgIAXAAQArgBAAAiIAAAzQAAAQAHACIAKABIABAHQgOAIgQgBQgNAAgFgNgAgMACQgMAGAAAOQAAAKAFAFQAFAGAIgBQAPABAAgSIAAggg");
	this.shape_24.setTransform(282.325,16.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag8BQIAAgJQANAAADgDQADgCAAgIIAAhzQAAgJgDgCQgDgCgNgBIAAgIIB5AAIAAApIgJAAQgFgSgGgGQgHgHgRAAIgQAAQgEAAgCACQgBABAAAFIAAA5IAZAAQAMgBAEgEQADgDADgOIAJAAIAAA1IgJAAQgDgNgDgDQgEgFgMAAIgZAAIAAA0QAAAIADACQADADAPAAIAAAJg");
	this.shape_25.setTransform(268.725,14.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AguA6IAAgJQALAAADgCQACgCAAgHIAAhEQAAgKgGgBIgIgBIAAgIIAqgHIACAUQALgMAHgDQAGgFAHAAQAQAAAAAPQAAAIgFAFQgEAGgHAAQgDAAgGgEQgHgFgEgBQgKAAAAAUIAAAzQAAAHADACQADACAOAAIAAAJg");
	this.shape_26.setTransform(252.1,16.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("Ag0AYIAAg4QAAgMgGgBIgJgBIAAgIIAtgEIACACIAABIQAAAaAUAAQANAAAFgMQACgFAAgJIAAgwQAAgMgGgBIgIgBIAAgIIAtgEIABACIAABcQAAAHADACQACACALAAIAAAJIguAAIgCgNIgPAKQgMAGgMAAQghAAAAgjg");
	this.shape_27.setTransform(239.475,16.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag6A+QgUgWAAgoQAAgnAUgWQAUgWAmAAQAnAAAUAWQAUAWAAAnQAAAogUAWQgUAWgnAAQgmAAgUgWgAgnAAQAABKAnAAQAoAAAAhKQAAhJgoAAQgoAAABBJg");
	this.shape_28.setTransform(223.55,14.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMBCQgKgIAAgOIAAhMIgOAAIAAgLIAPAAIATgcIALAAIAAAcIAZAAIAAALIgZAAIAABDQAAAVAPAAQAFAAAGgCIACAHQgSALgOAAQgKAAgHgGg");
	this.shape_29.setTransform(205.25,15.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("Ag0AAQAAgaANgPQAPgRAbAAQAdAAAMARQAJAMAAASQAAAKgLAAIg8AAQAAAsAeAAQAVAAALgVIAIAEQgNAhglAAQg2AAAAg7gAgOgkQgEAKAAAOIAfAAQAIAAgBgIQAAgcgSgBQgLABgFAMg");
	this.shape_30.setTransform(193.65,16.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag+BQIAAgJQAMAAAEgDQADgCAAgIIAAhzQAAgJgDgCQgEgCgMgBIAAgIIBKAAIAAAIQgOABgDACQgDACAAAJIAABtQAAAMAEADQAFADAQAAQARAAAJgJQAFgGAHgVIAIAAIgCAug");
	this.shape_31.setTransform(180.85,14.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_32.setTransform(134.825,38.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYAxIAAg1QAAgNgGgGQgHgIgLABQgKgBgGAIQgHAGAAANIAAA1IgUAAIAAhfIAUAAIAAALQAFgGAIgEQAHgCAIAAQALAAAJAEQAJAEAFAKQAFAJAAANIAAA4g");
	this.shape_33.setTransform(127.075,39.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIAAAIIhJAAQACAMAHAHQAIAHAJAAQARAAAGgOIAVAAQgDANgMAJQgLAIgSAAQgMAAgLgGgAAagIQAAgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA0AAIAAAAg");
	this.shape_34.setTransform(116.9,40.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA6AxIAAg1QAAgNgHgGQgGgIgLABQgLgBgHAIQgGAGAAANIAAA1IgTAAIAAg1QAAgNgGgGQgHgIgLABQgLgBgGAIQgHAGAAANIAAA1IgUAAIAAhfIAUAAIAAALQAFgGAHgEQAIgCAIAAQAMAAAJAEQAIAFAFAJQAEgJAJgEQAKgGAKABQALAAAJAEQAJAEAFAKQAGAJAAANIAAA4g");
	this.shape_35.setTransform(103.825,39.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgGANAAQAOAAALAFQAKAGAHALQAFALAAAOIAAAIIhJAAQACAMAHAHQAIAHAJAAQARAAAGgOIAVAAQgDANgMAJQgLAIgSAAQgMAAgLgGgAAagIQAAgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgCALIA0AAIAAAAg");
	this.shape_36.setTransform(90.35,40.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA/QgMgJgCgPIATAAQADAHAHAEQAHAFAKAAQAMAAAHgHQAHgIAAgOIAAgPQgFAGgJAFQgIAFgKgBQgMAAgLgFQgKgHgGgLQgGgLAAgOQAAgPAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAFAFAGIAAgNIAUAAIAABfQAAAOgGAKQgFAKgKAHQgLAFgOAAQgTAAgNgJgAgNgyQgGADgEAIQgFAHAAAKQAAAKAFAHQAEAHAGADQAGAEAHABQAIgBAGgEQAHgDAEgGQAEgIAAgKQAAgKgEgHQgEgHgHgEQgGgEgIAAQgHAAgGAEg");
	this.shape_37.setTransform(80.1,42.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQALAAAIAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgLAAQgLAAgLgGgAgNgcQgGAEgFAHQgEAIAAAJQAAAJAEAIQAFAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_38.setTransform(69.25,40.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAYAxIAAg1QAAgNgGgGQgHgIgLABQgKgBgGAIQgHAGAAANIAAA1IgUAAIAAhfIAUAAIAAALQAFgGAIgEQAHgCAIAAQALAAAJAEQAJAEAFAKQAFAJAAANIAAA4g");
	this.shape_39.setTransform(59.475,39.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgKAAQgMAAgLgGgAgNgcQgGAEgEAHQgFAIAAAJQAAAJAFAIQAEAHAGAEQAGAEAHAAQAIAAAHgEQAGgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgGgDQgHgEgIAAQgHAAgGADg");
	this.shape_40.setTransform(48.95,40.025);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAsA8IAAhRIglBRIgNAAIglhRIAABRIgUAAIAAh3IAWAAIApBdIArhdIAUAAIAAB3g");
	this.shape_41.setTransform(36.6,38.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA8QgMAAgHgHQgHgGAAgOIAAg0IgLAAIAAgQIALAAIAAgYIATAAIAAAYIAXAAIAAAQIgXAAIAAA0QAAAGACACQADACAGAAIAMAAIAAARg");
	this.shape_42.setTransform(22.575,38.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgFgHQgFgHAAgJIAUAAQABAHAFAEQAFAEAHAAQAIAAAFgEQAFgDAAgFQAAgFgFgDIgQgGQgKgCgHgDQgHgCgFgGQgFgGAAgJQAAgHAFgHQAEgGAJgEQAIgDAKAAQAQAAAKAIQAKAIABAOIgUAAQAAgGgFgEQgFgEgHAAQgIAAgEADQgEADAAAFQAAAEADACIAHAEIAKAEQALADAHADQAGACAFAFQAFAGAAAJQAAAIgEAHQgFAGgIAEQgIADgMAAQgKAAgJgEg");
	this.shape_43.setTransform(15.425,40.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQABAMAHAHQAIAHAKAAQAPAAAHgOIAWAAQgFANgLAJQgLAIgRAAQgNAAgLgGgAAbgIQgBgLgHgGQgIgHgLAAQgKAAgGAHQgIAGgBALIA0AAIAAAAg");
	this.shape_44.setTransform(6.05,40.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IApAAQANAAAKAEQAKAFAEAIQAFAIAAALQAAAJgEAIQgFAHgJAFQgKAFgOAAIgVAAIAAAxgAgVgEIAVAAQALAAAFgFQAGgFAAgJQAAgUgWAAIgVAAg");
	this.shape_45.setTransform(-3.475,38.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdBGIATguIgmhdIAXAAIAZBIIAchIIAVAAIg6CLg");
	this.shape_46.setTransform(87.375,21.575);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAxIAAhfIAUAAIAAAOQADgHAHgFQAHgDAKAAIAAAUIgFAAQgLAAgGAGQgFAFAAAPIAAAyg");
	this.shape_47.setTransform(79.525,19.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLAKgGQAMgGANAAQANAAALAFQALAGAFALQAGALAAAOIAAAIIhIAAQABAMAHAHQAIAHAKAAQAPAAAHgOIAWAAQgFANgLAJQgMAIgQAAQgNAAgLgGgAAbgIQgBgLgHgGQgIgHgLAAQgJAAgHAHQgIAGgBALIA0AAIAAAAg");
	this.shape_48.setTransform(71.4,19.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLAwIgkhfIAVAAIAaBNIAbhNIAVAAIgkBfg");
	this.shape_49.setTransform(62.125,19.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQALgGAMAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgJAFQgIAEgLAAQgMAAgKgGgAgNgcQgHAEgDAHQgFAIAAAJQAAAJAFAIQADAHAHAEQAHAEAGAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_50.setTransform(51.5,19.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdA8IAAh3IAUAAIAABnIAnAAIAAAQg");
	this.shape_51.setTransform(42.825,18.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgXAxIAAhfIAUAAIAAAOQADgHAHgFQAHgDAKAAIAAAUIgFAAQgLAAgGAGQgFAFAAAPIAAAyg");
	this.shape_52.setTransform(31.675,19.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJBDIAAhfIATAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADgBAGQABAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_53.setTransform(26.4,17.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgaArQgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgGQAKgGANAAQAKAAAJAEQAIAEAFAHIAAgOIAUAAIAABfIgUAAIAAgOQgFAGgIAFQgJAEgLAAQgMAAgKgGgAgNgcQgHAEgEAHQgEAIAAAJQAAAJAEAIQAEAHAHAEQAHAEAGAAQAIAAAGgEQAHgDAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgDQgGgEgIAAQgGAAgHADg");
	this.shape_54.setTransform(19.2,19.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA8QgJgDgFgIIAAAPIgUAAIAAiAIAUAAIAAAvQAFgHAJgFQAJgDAJAAQANgBAKAHQAKAFAGAMQAGAKAAAOQAAAOgGAMQgGALgKAHQgLAGgMAAQgKAAgIgFgAgNgMQgHAEgEAIQgEAGAAAJQAAAKAEAIQAEAHAHAEQAGAEAHAAQAHAAAHgEQAHgEAEgIQAEgHAAgKQAAgJgEgHQgEgHgHgEQgHgDgHAAQgHAAgGADg");
	this.shape_55.setTransform(8.45,17.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAiA9IgJgZIgxAAIgJAZIgVAAIArh5IAWAAIAsB5gAATATIgTg2IgTA2IAmAAg");
	this.shape_56.setTransform(-2.925,18.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-10.1,2.2,461.70000000000005,55.4), null);


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
	this.shape.setTransform(133.025,12.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_1.setTransform(122.125,12.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA3Ig7haIAAAAIAAAzIAAAYQABAHAEABIALABIAAAGIgnAAIAAgGQAIgBABAAQADgCABgGIABgYIAAg2QAAgHgCgBQgCgBgJgBIAAgGIAkAAIAzBNIABAAIAAgmIgBgYQgBgGgDgCIgLgBIAAgGIAmAAIAAAGQgHAAgBABQgDACgBAGIgCAYIAABGg");
	this.shape_2.setTransform(111.35,11.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAhIgCgXIAGAAQAHAYAQAAQAEAAAEgDQACgDAAgEQAAgJgPgGQgMgFgGgEQgFgGAAgJQAAgMAJgGQAHgHAOAAQAOAAAJAFIAAAVIgGAAQgCgJgFgFQgFgFgGAAQgEAAgDADQgDADAAAEQAAAIAQAGQAMAFAGAEQAFAFAAAKQAAAMgJAHQgIAHgOAAQgSAAgIgIg");
	this.shape_3.setTransform(95.9,12.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnApQgGgJABgPIAAg5QAAgGgCgCIgLgBIAAgGIAxAAIAAAGIgKABQgCACgBAGIAAA6QABAgAUAAQAWAAAAggIAAg6QAAgGgCgCIgKgBIAAgGIAwAAIAAAGIgLABQgBACAAAGIAAA5QAAAOgGAIQgJARgfAAQgdAAgKgPg");
	this.shape_4.setTransform(86.25,11.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAtQgGgFAAgKIAAgzIgJAAIAAgIIAKAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAAEgCIABAFQgNAIgJAAQgGAAgGgFg");
	this.shape_5.setTransform(73.7,11.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAfQgKgLAAgTQAAgSAKgLQAKgMASAAQAMAAAJAFQAJAFAAAHQAAAFgEACQgEADgEAAQgGAAgBgGQgFgOgHAAQgFAAgEAHQgFAJAAAPQAAAPAGAJQAFAHAJAAQAOAAAHgPIAFADQgGAYgbAAQgRAAgJgKg");
	this.shape_6.setTransform(66.525,12.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAgIgJAFQgGAEgHAAQgLAAgHgHQgGgHAAgJQAAgOARgFQAZgIADgDIAAgIQAAgNgJAAQgJAAgFAQQgCAGgEAAQgEAAgEgCQgFgDAAgFQAAgHAJgGQAKgGAQAAQAdAAAAAXIAAAjQAAAKAEACQADABAEAAIABAFQgJAFgMAAQgJAAgDgJgAgIABQgIAEAAAKQAAAHAEAEQADADAFAAQAKAAAAgMIAAgWg");
	this.shape_7.setTransform(57.625,12.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAtQgHgFAAgKIAAgzIgKAAIAAgIIALAAIANgUIAHAAIAAAUIARAAIAAAIIgRAAIAAAtQAAAPAKAAQAEAAAEgCIACAFQgOAIgJAAQgGAAgFgFg");
	this.shape_8.setTransform(51.25,11.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAoIAAgGIAHgBQACgBAAgFIAAgnQAAgPgOAAQgIAAgFAIQgBADAAAGIAAAkQAAAFACACIAHABIAAAGIgqAAIAAgGIAJgCQACgBAAgFIAAguQAAgIgEAAIgGgBIAAgFIAdgFIACALIAOgIQAHgDAGAAQAYAAAAAZIAAAoQAAAFACABIAIACIAAAGg");
	this.shape_9.setTransform(44.075,12.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnAAQAAgoAnAAQAoAAAAAoQAAApgoAAQgnAAAAgpgAgQAAQAAAiAQAAQARAAAAgiQAAghgRAAQgQAAAAAhg");
	this.shape_10.setTransform(34.325,12.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwABQABgZAOgQQAPgRAeAAQAWAAANAHIAAAcIgHAAQgDgNgGgGQgHgJgNAAQgTAAgHAUQgGAMAAASQAAATAGANQAIATATAAQAMAAAIgJQAFgGAFgPIAHAAIgCAeQgNAHgYAAQg6AAAAg5g");
	this.shape_11.setTransform(23.05,11.125);

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
	this.instance.setTransform(111,48.35,0.088,0.088,0,0,0,475.6,60.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABoIAAjPMD4xAAAIAADPg");
	this.shape.setTransform(110.7866,41.186,0.088,0.088);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgygSkIArBdMggzASkg");
	this.shape_1.setTransform(33.901,23.8021,0.088,0.088);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gngMl6QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA+ATQB+AmAMF7QAMF7htHwQhtHyinFFQhNCZhLBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(13.5974,45.047,0.088,0.088);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzigQj0lUjFoOQjFoOgjmVQgRjAAch0QAdh4BIgXQBJgXBoBPQBkBNB0ChQDyFTDGIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(24.9041,44.3781,0.088,0.088);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nvhTmMQgoi7ALh3QAMh7BBggQBBggBrBAQBoA+CACQQEOEvD7HwQD7HuBTGMQAoC8gLB3QgMB7hBAhQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(14.04,18.3177,0.088,0.088);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(115,25.9,0.088,0.088,0,0,0,850.7,158.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AheB+ICykCIALAHIizECg");
	this.shape_5.setTransform(29.2321,17.1822,0.7343,0.7343);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("AgHAoQg/gIgrgQQgUgIgKgIQgKgJABgIQABgIAOgGQANgFAWgDQAvgHA+AHQBAAIAqARQAUAIALAHQAKAJgBAIQgCAIgNAGQgNAGgWADQgWACgZAAQgdAAgigDg");
	this.shape_6.setTransform(4.0643,29.3032,0.7343,0.7343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-7.1,7.4,208,48.300000000000004), null);


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
	this.instance_7 = new lib.Img2_1();
	this.instance_7.setTransform(180,105,1,1,0,0,0,150,105);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// M2
	this.instance_8 = new lib.mosquito("synched",0);
	this.instance_8.setTransform(547.15,32.7,0.4914,0.7291,72.6677,0,0,8.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(360));

	// M1
	this.instance_9 = new lib.mosquito("synched",0);
	this.instance_9.setTransform(573.5,51.7,0.8,0.8,-25.4247,0,0,8.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Img1
	this.instance_10 = new lib.Img1_1();
	this.instance_10.setTransform(180,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16486A").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape_1.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-43.6,1072.8,164.1);


// stage content:
(lib.WFSB_217823_MM_1024x90 = function(mode,startPosition,loop,reversed) {
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