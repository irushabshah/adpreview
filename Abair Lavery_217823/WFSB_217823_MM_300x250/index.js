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
p.nominalBounds = new cjs.Rectangle(0,0,300,214);


(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,214);


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
	this.shape.graphics.f("#FFFFFF").s().p("A7dmeQAfgkA6gxQB2hkCMhFQHCjfIECiQCiAzFlCHQEKBkCNAcQDIApC3goQDMgrD3iZQEEigBsCfQBWCAgOFFQgKDng7E0QgeCagbBrMgz6ACcg");
	this.shape.setTransform(175.8002,83.8385);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sh, new cjs.Rectangle(0,4,351.6,159.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgCACAAQAEAAACACQACADAAACQAAAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape.setTransform(83.6,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAiQgRAAAAgQIAAgaIgGAAIAAgMIAGAAIAAgNIANAAIAAANIAMAAIAAAMIgMAAIAAAaQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAFAAIAGAAIAAAMg");
	this.shape_1.setTransform(80.65,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAcIAAgdQAAgHgDgEQgDgDgGAAQgFAAgDADQgDAEAAAHIAAAdIgOAAIAAg2IAOAAIAAAHQACgEAFgCQAEgCAEAAQAKAAAGAGQAGAHAAAKIAAAgg");
	this.shape_2.setTransform(76.125,32.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgHAGgDQAFgEAHAAQAGAAAEADQAFACADAEIAAgIIAOAAIAAA3IgOAAIAAgIQgDAEgFACQgFADgFAAQgHAAgFgEgAgGgNQgEACgCADQgCAEAAAEQAAAFACAEQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_3.setTransform(70.075,32.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAnIAAg2IANAAIAAA2gAgFgYQgCgCgBgEQABgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_4.setTransform(65.75,31.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_5.setTransform(63.35,31.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAqIAAhRIAOAAIAAAIQADgEAFgDQAEgCAFAAQAIgBAFAEQAGADADAHQAEAHAAAIQAAAJgEAFQgDAGgGAFQgFADgIAAQgFAAgEgCQgFgDgDgEIAAAjgAgGgaQgEACgCAEQgCAEAAAFQAAAEACAEQACADAEABQADADADAAQAEAAADgDQADgBACgDQACgEAAgFQAAgFgCgDQgCgEgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_6.setTransform(59.075,33.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgAcIAAgdQAAgHgEgEQgDgDgGAAQgFAAgEADQgDAEAAAHIAAAdIgNAAIAAgdQAAgHgDgEQgEgDgFAAQgGAAgDADQgEAEAAAHIAAAdIgOAAIAAg2IAOAAIAAAHQADgEAEgCQAEgCAFAAQAHAAAFADQAEADADAFQADgFAFgDQAFgDAGAAQAKAAAGAGQAHAHAAAKIAAAgg");
	this.shape_7.setTransform(50.775,32.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAZQgHgDgDgHQgDgGgBgJQABgHADgHQAEgGAHgEQAGgEAHAAQAIAAAHAEQAGAEADAGQAEAHABAHQgBAJgEAGQgDAHgHADQgGAEgIAAQgHAAgHgEgAgKgLQgDAEAAAHQAAAIADAEQAFAEAFAAQAEAAACgBQAEgCACgEQACgEAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEg");
	this.shape_8.setTransform(42.65,32.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAfQgJgEgFgJQgEgHAAgLQAAgJAEgIQAFgJAJgEQAHgEAKgBQALAAAJAHQAIAFAEALIgQAAQgCgFgEgCQgFgDgFAAQgGAAgFADQgFADgCAFQgCAFgBAGQABAHACAFQACAFAFADQAFADAGAAQAFAAAFgDQAEgCACgFIAQAAQgEALgIAFQgJAHgLAAQgKgBgHgEg");
	this.shape_9.setTransform(35.9,31.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTApIAMgcIgWg1IAQAAIANAnIAPgnIAPAAIgiBRg");
	this.shape_10.setTransform(27.425,33.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAiQgRAAAAgQIAAgaIgGAAIAAgMIAGAAIAAgNIANAAIAAANIAMAAIAAAMIgMAAIAAAaQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAFAAIAGAAIAAAMg");
	this.shape_11.setTransform(22.15,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAZQgHgDgDgHQgDgGgBgJQABgIADgGQADgHAHgDQAGgEAHAAQAIAAAHAEQAFADAEAGQAEAHgBAIIAAAEIgnAAQAAAGADAEQAEADAFAAQAIAAADgHIAPAAQgDAIgGAGQgHAFgKAAQgHAAgGgEgAANgEQAAgGgEgDQgEgDgFAAQgEAAgEADQgEADAAAGIAZAAIAAAAg");
	this.shape_12.setTransform(17.7,32.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAnIAAgrIgGAAIAAgMIAGAAIAAgCQAAgLAGgEQAFgFALAAIAAAMQgFAAgCACQgCABAAAFIAAACIAKAAIAAAMIgKAAIAAArg");
	this.shape_13.setTransform(13.475,31.1727);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgHAGgDQAFgEAHAAQAGAAAEADQAFACADAEIAAgIIAOAAIAAA3IgOAAIAAgIQgDAEgFACQgFADgFAAQgHAAgFgEgAgGgNQgEACgCADQgCAEAAAEQAAAFACAEQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_14.setTransform(8.525,32.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgEgFQgDgEAAgHIAPAAQAAAEADADQADACADAAQAFAAADgCQADgCAAgEQAAgDgCgCIgFgDIgHgDIgLgEQgEgBgDgEQgDgEAAgGQAAgGADgFQADgFAGgCQAFgDAHAAQAKAAAHAGQAHAFABAJIgQAAQAAgDgDgDQgDgCgDAAQgEAAgDACQgCACAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAFADIAHADIALAEQAEABADAEQADAEAAAGQAAAGgCAEQgDAFgGADQgGADgHAAQgHAAgFgDg");
	this.shape_15.setTransform(2.575,31.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAiQgGgDgDgFQgDgFAAgGQAAgHAEgFQAEgFAHgDIgEgHIgBgGQAAgFADgEQACgEAFgCQAEgCAHAAQAFAAAEACQAFADACAEQACAEAAAFIgNAAQAAgEgBgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgDAAgCACQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIABAFIAFAGIARAQIAAAAIAAgBIAGgIIAOAAIgHALIgEAIIARAQIgRAAIgIgHQgJAIgNAAQgIAAgGgCgAgWAOQAAAFADADQADADAGAAQAIAAAFgGIgQgRQgJAEAAAIg");
	this.shape_16.setTransform(105.725,21.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAiQgGgEgEgGQgDgHAAgJQAAgIADgFQAEgHAGgEQAFgDAHAAQAFAAAFACQAFADADAEIAAgbIAOAAIAABJIgOAAIAAgIQgDAEgFADQgEACgGAAQgHAAgFgDgAgGgEQgEACgCACQgCAEAAAEQAAAGACADQACAEAEACQADACADAAQAEAAADgCQAEgCACgEQACgDAAgFQAAgGgCgDQgCgCgEgCQgDgCgEgBQgDABgDACg");
	this.shape_17.setTransform(96.575,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAZQgHgDgDgHQgEgGABgJQgBgHAEgHQAEgGAGgEQAHgEAHAAQAIAAAGAEQAHAEAEAGQADAHABAHQgBAJgDAGQgFAHgGADQgHAEgHAAQgIAAgGgEgAgJgLQgFAEAAAHQAAAIAFAEQADAEAGAAQADAAAEgBQADgCACgEQACgEAAgFQAAgHgEgEQgFgEgFAAQgGAAgDAEg");
	this.shape_18.setTransform(90.3,22.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAZQgGgDgEgHQgEgGAAgJQAAgHAEgHQAEgGAHgEQAGgEAHAAQAIAAAGAEQAHAEADAGQAFAHAAAHQAAAJgFAGQgEAHgGADQgHAEgHAAQgHAAgHgEgAgKgLQgDAEAAAHQAAAIADAEQAFAEAFAAQAEAAACgBQAEgCACgEQACgEAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEg");
	this.shape_19.setTransform(84.25,22.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIArAAIAAALIgcAAIAAASIAUAAIAAALIgUAAIAAAdg");
	this.shape_20.setTransform(79.2,21.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAiQgGgEgEgGQgDgHAAgJQAAgIADgFQAEgHAGgEQAFgDAHAAQAFAAAFACQAFADADAEIAAgbIAOAAIAABJIgOAAIAAgIQgDAEgFADQgEACgGAAQgHAAgFgDgAgGgEQgEACgCACQgCAEAAAEQAAAGACADQACAEAEACQADACADAAQAEAAADgCQAEgCACgEQACgDAAgFQAAgGgCgDQgCgCgEgCQgDgCgEgBQgDABgDACg");
	this.shape_21.setTransform(71.275,21.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgGgDgEQgDgDgGAAQgFAAgDADQgDAEAAAGIAAAeIgOAAIAAg2IAOAAIAAAGQACgDAFgCQAEgCAEAAQAKAAAGAGQAGAGAAALIAAAgg");
	this.shape_22.setTransform(65.125,22.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgHAGgDQAFgEAHAAQAGAAAEADQAFACADAEIAAgIIAOAAIAAA3IgOAAIAAgIQgDAEgFACQgFADgFAAQgHAAgFgEgAgGgNQgEACgCADQgCAEAAAEQAAAFACAEQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_23.setTransform(58.875,22.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATAjIgFgOIgbAAIgEAOIgPAAIAZhFIAPAAIAZBFgAAKAKIgKgbIgJAbIATAAg");
	this.shape_24.setTransform(50.375,21.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAPAjIAAgdIgdAAIAAAdIgOAAIAAhFIAOAAIAAAdIAdAAIAAgdIAOAAIAABFg");
	this.shape_25.setTransform(43.3,21.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgEgFQgDgEAAgHIAPAAQAAAEADADQADACADAAQAFAAADgCQADgCAAgEQAAgDgCgCIgFgDIgHgDIgLgEQgEgBgDgEQgDgEAAgGQAAgGADgFQADgFAGgCQAFgDAHAAQAKAAAHAGQAHAFABAJIgQAAQAAgDgDgDQgDgCgDAAQgEAAgDACQgCACAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAFADIAHADIALAEQAEABADAEQADAEAAAGQAAAGgCAEQgDAFgGADQgGADgHAAQgHAAgFgDg");
	this.shape_26.setTransform(36.775,21.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAfQgIgEgFgIQgFgJAAgKQAAgJAFgIQAFgIAIgFQAIgFAJAAQAKAAAIAFQAIAFAFAIQAFAIAAAJQAAAKgFAJQgFAIgIAEQgIAFgKAAQgJAAgIgFgAgKgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAFACAFAAQAGAAAFgCQAFgDADgGQACgFAAgHQAAgGgCgFQgDgFgFgDQgFgDgGAAQgFAAgFADg");
	this.shape_27.setTransform(30.025,21.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAgQgFgEAAgIQAAgIAFgEQAEgFAHAAQAHAAAFAFQAEAEAAAIQAAAIgEAEQgFAEgHAAQgHAAgEgEgAAQAUQAAAIAGAAQAGAAAAgIQAAgIgGAAQgGAAAAAIgAgZAjIAmhFIAOAAIgnBFgAgggHQgFgFAAgHQAAgHAFgFQAEgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAQgHAAgEgFgAgagTQAAAIAFAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQACgCAAgEQAAgIgGAAQgFAAAAAIg");
	this.shape_28.setTransform(18.625,21.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAbQgGgKAAgRQAAgQAGgKQAGgKAOAAQAPAAAFAKQAHAKAAAQQAAARgHAKQgFAKgPAAQgOAAgGgKgAgIgUQgCADgBAFIgBAMIABANQABAFACADQADADAFAAQAGAAADgDQACgDABgFIABgNIgBgMQgBgFgCgDQgDgDgGAAQgFAAgDADg");
	this.shape_29.setTransform(12.2,21.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAbQgGgKAAgRQAAgQAGgKQAGgKAOAAQAPAAAGAKQAGAKAAAQQAAARgGAKQgGAKgPAAQgOAAgGgKgAgHgUQgDADgCAFIgBAMIABANQACAFADADQACADAFAAQAFAAAEgDQACgDABgFIABgNIgBgMQgBgFgCgDQgEgDgFAAQgFAAgCADg");
	this.shape_30.setTransform(6.05,21.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAkIAAg6IgKAAIAAgOIAXAAIAABIg");
	this.shape_31.setTransform(1.1,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(-2,-10,0.2952,0.2952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(-2.4,-10,112.9,49.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMAMQgFgFgBgHQABgGAFgFQAFgFAHAAQAIAAAFAFQAGAFgBAGQABAHgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(51.9,-70.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBKIAXgzIgphgIAiAAIAXA/IAXg/IAhAAIg+CTg");
	this.shape_1.setTransform(46.975,-71.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAtQgLgGgFgMQgGgMAAgPQAAgPAGgLQAFgMALgGQAKgHANAAQAJAAAIAFQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgEAHgIAEQgIAFgKAAQgMAAgKgHgAgOgRQgHAGAAALQAAALAHAHQAGAHAJAAQAIAAAHgHQAGgGAAgMQAAgKgGgHQgHgHgIAAQgJAAgGAHg");
	this.shape_2.setTransform(35.2,-73.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA9QgLgHgFgLQgGgMAAgQQAAgPAGgLQAFgMALgGQAKgGAMAAQAJAAAIAEQAJAEAEAHIAAguIAfAAIAACEIgfAAIAAgPQgEAIgIAEQgIAEgKAAQgMAAgKgGgAgPgCQgFAGAAALQAAAMAFAHQAHAGAIAAQAKAAAGgGQAGgHAAgLQAAgMgGgGQgGgGgKAAQgIAAgHAGg");
	this.shape_3.setTransform(24,-75.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAtQgMgGgGgMQgHgLAAgQQAAgOAHgMQAGgMAMgGQAMgHAOAAQAPAAAMAHQALAGAHAMQAHAMAAAOQAAAQgHALQgHAMgMAGQgMAHgOAAQgOAAgMgHgAgOgSQgGAHAAALQAAAMAGAHQAGAGAIAAQAIAAAHgGQAGgHAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_4.setTransform(12.925,-73.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQA+QgQABgJgJQgKgIAAgTIAAgmIgLAAIAAgaIALAAIAAgZIAfAAIAAAZIAUAAIAAAaIgUAAIAAAnQAAAEACACQABACAGAAIALAAIAAAag");
	this.shape_5.setTransform(4.05,-74.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAzIAAg2QAAgKgGgFQgFgGgJAAQgHAAgGAGQgFAFAAAKIAAA2IgfAAIAAhkIAfAAIAAAOQAEgHAJgEQAGgEALAAQARAAALAMQAKALAAAUIAAA6g");
	this.shape_6.setTransform(126.35,-95.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAtQgMgGgGgMQgHgLAAgQQAAgOAHgMQAGgMAMgGQAMgHAOAAQAPAAAMAHQALAGAHAMQAHAMAAAOQAAAQgHALQgHAMgMAGQgMAHgOAAQgOAAgMgHgAgOgSQgGAHAAALQAAAMAGAHQAGAGAIAAQAIAAAHgGQAGgHAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_7.setTransform(115.475,-95.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBIIAAhkIAeAAIAABkgAgMgrQgFgEAAgIQAAgGAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAGQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_8.setTransform(107.975,-97.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQA/QgQgBgJgHQgKgJABgSIAAgoIgNAAIAAgZIANAAIAAgYIAeAAIAAAYIATAAIAAAZIgTAAIAAAoQAAAFABACQADACAFAAIAKAAIAAAag");
	this.shape_9.setTransform(102.35,-96.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAtQgLgGgFgMQgGgMAAgPQAAgPAGgLQAFgMALgGQAKgHAMAAQAKAAAIAFQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgEAHgIAEQgIAFgKAAQgMAAgKgHgAgPgRQgFAGAAALQAAALAFAHQAHAHAIAAQAKAAAGgHQAGgGAAgMQAAgKgGgHQgGgHgKAAQgIAAgHAHg");
	this.shape_10.setTransform(93.3,-95.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQA/QgQgBgJgHQgJgJAAgSIAAgoIgNAAIAAgZIANAAIAAgYIAdAAIAAAYIAUAAIAAAZIgUAAIAAAoQAAAFACACQADACAEAAIALAAIAAAag");
	this.shape_11.setTransform(84.55,-96.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAuQgJgFgGgKQgEgKAAgNIAAg6IAeAAIAAA2QAAAKAGAGQAFAFAIAAQAJAAAFgFQAFgGAAgKIAAg2IAfAAIAABkIgfAAIAAgOQgEAHgIAEQgIAEgJAAQgMAAgIgFg");
	this.shape_12.setTransform(75.85,-95.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BLIAAiUIAfAAIAAAPQAEgHAJgFQAHgEAKAAQAMAAAKAHQALAFAGANQAFALAAAQQAAAPgFALQgGAMgLAGQgKAHgMgBQgKABgHgFQgJgEgEgHIAAA+gAgPgoQgGAGgBAMQABAMAGAGQAHAGAIgBQAJABAGgGQAHgHAAgLQAAgMgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_13.setTransform(65,-93.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAtQgMgGgGgMQgHgLAAgQQAAgPAHgLQAGgMAMgGQAMgHANAAQAPAAALAGQAMAHAGALQAHALAAAPIgBAIIhFAAQABAKAFAFQAFAFAIAAQALAAAFgKIAgAAQgDAKgGAIQgHAIgJAEQgKAFgNAAQgNAAgMgHgAATgJQAAgIgFgEQgGgFgIAAQgHAAgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_14.setTransform(54.05,-95.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAeAAIAAARQAFgIAIgFQAIgFAKAAIAAAhIgIAAQgMAAgGAFQgFAFAAALIAAAvg");
	this.shape_15.setTransform(46.075,-95.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAeAAIAAARQAFgIAIgFQAIgFAKAAIAAAhIgIAAQgMAAgGAFQgFAFAAALIAAAvg");
	this.shape_16.setTransform(35.125,-95.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAuQgJgFgGgKQgEgKAAgNIAAg6IAeAAIAAA2QAAAKAGAGQAFAFAIAAQAJAAAFgFQAFgGAAgKIAAg2IAfAAIAABkIgfAAIAAgOQgEAHgJAEQgGAEgLAAQgLAAgIgFg");
	this.shape_17.setTransform(26.45,-95.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAtQgMgGgGgMQgHgLAAgQQAAgOAHgMQAGgMAMgGQAMgHAOAAQAPAAAMAHQALAGAHAMQAHAMAAAOQAAAQgHALQgHAMgMAGQgMAHgOAAQgOAAgMgHgAgOgSQgGAHAAALQAAAMAGAHQAGAGAIAAQAIAAAHgGQAGgHAAgMQAAgLgGgGQgGgHgJAAQgIAAgGAGg");
	this.shape_18.setTransform(15.925,-95.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmBKIAXgzIgphgIAiAAIAXA/IAXg/IAhAAIg+CTg");
	this.shape_19.setTransform(6.175,-93.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeA9QgLgHgFgLQgGgMAAgQQAAgPAGgLQAFgMALgGQAKgGAMAAQAJAAAIAEQAJAEAEAHIAAguIAfAAIAACEIgfAAIAAgPQgEAIgIAEQgIAEgKAAQgMAAgKgGgAgPgCQgFAGAAALQAAAMAFAHQAHAGAIAAQAKAAAGgGQAGgHAAgLQAAgMgGgGQgGgGgKAAQgIAAgHAGg");
	this.shape_20.setTransform(85.65,-119.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAeAAIAAARQAFgIAIgFQAIgFAKAAIAAAhIgIAAQgMAAgGAFQgFAFAAALIAAAvg");
	this.shape_21.setTransform(76.925,-117.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAtQgKgGgGgMQgGgMAAgPQAAgPAGgLQAGgMAKgGQAKgHAMAAQAKAAAIAFQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgEAHgIAEQgIAFgKAAQgMAAgKgHgAgOgRQgHAGAAALQAAALAHAHQAGAHAIAAQAJAAAHgHQAGgGAAgMQAAgKgGgHQgHgHgJAAQgIAAgGAHg");
	this.shape_22.setTransform(67.4,-117.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAuQgIgFgFgKQgFgKAAgNIAAg6IAfAAIAAA2QAAAKAEAGQAGAFAIAAQAIAAAGgFQAFgGAAgKIAAg2IAfAAIAABkIgfAAIAAgOQgEAHgJAEQgGAEgLAAQgLAAgJgFg");
	this.shape_23.setTransform(56.45,-117.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggBBQgOgKgCgSIAeAAQABAFAGAEQAFADAIAAQAJAAAFgFQAGgGAAgMIAAgOQgEAHgIAEQgIAFgJAAQgNAAgKgHQgLgGgFgMQgGgLAAgPQAAgQAGgLQAFgMALgGQAKgHANAAQAJAAAIAFQAIAEAEAHIAAgOIAfAAIAABjQAAAOgFALQgGALgLAHQgLAHgRAAQgVAAgOgLgAgOgpQgHAGAAAMQAAALAHAHQAGAGAJAAQAIAAAHgGQAGgGAAgMQAAgLgGgHQgHgHgIAAQgJAAgGAHg");
	this.shape_24.setTransform(45,-115.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAtQgLgGgHgMQgGgLAAgQQAAgPAGgLQAHgMALgGQAMgHAOAAQAOAAALAGQAMAHAGALQAGALAAAPIAAAIIhFAAQABAKAFAFQAFAFAIAAQALAAAEgKIAhAAQgCAKgHAIQgGAIgLAEQgJAFgMAAQgOAAgMgHgAATgJQAAgIgGgEQgFgFgIAAQgHAAgFAFQgFAEgCAIIAmAAIAAAAg");
	this.shape_25.setTransform(33.85,-117.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRBGIAAhKIgLAAIAAgZIALAAIAAgDQAAgSALgKQAJgJAVAAIAFAAIAAAaQgJgBgEADQgDAEAAAHIAAABIAQAAIAAAZIgQAAIAABKg");
	this.shape_26.setTransform(25.925,-119.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAtQgLgGgFgMQgGgMAAgPQAAgPAGgLQAFgMALgGQAKgHAMAAQAKAAAIAFQAIAEAEAHIAAgOIAfAAIAABjIgfAAIAAgOQgEAHgIAEQgIAFgKAAQgMAAgKgHgAgPgRQgFAGAAALQAAALAFAHQAHAHAIAAQAKAAAGgHQAGgGAAgMQAAgKgGgHQgGgHgKAAQgIAAgHAHg");
	this.shape_27.setTransform(16.8,-117.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWA8QgLgEgHgJQgGgJgBgNIAhAAQABAIAEADQAEAEAGAAQAHAAAEgDQAEgDAAgGQAAgEgEgDQgDgEgEgCIgMgEIgUgHQgIgEgGgHQgFgHAAgMQAAgSAMgKQANgKAVAAQAUAAAMAKQANAKABASIghAAQgBgGgEgEQgEgDgFAAQgGAAgDADQgEADAAAFQAAAGAGAEQAGAEALADQAMAFAIAEQAIACAFAHQAGAIAAALQAAAKgGAJQgFAKgLAFQgKAEgOAAQgNABgLgFg");
	this.shape_28.setTransform(6.025,-119);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_29.setTransform(52.5,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(-1.5,-128.5,134,94), null);


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

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(0,0,300,214), null);


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

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(0,0,300,214), null);


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
	this.shape.graphics.f("#14A751").s().p("AgoA3QgJgLAAgVQAAgXANgMQANgMAUAAQAKAAAGADIAAgZQAAgIgFgBIgGgBIAAgGIAjgFIABABIAAB0QAAAFACACQACABAIABIAAAHIglAAIAAgJQgNALgNAAQgRAAgKgNgAgRgHQgGAJAAASQAAAQAGAKQAFAJAKAAQAJAAAEgHQACgEAAgGIAAglQAAgGgCgDQgEgIgJAAQgJAAgGAJg");
	this.shape.setTransform(88.825,38.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAGAtIAAgGIAIgCQADgBAAgFIAAgsQAAgSgQAAQgKAAgFAKQgCADAAAHIAAApQAAAGADABIAIACIAAAGIgwAAIAAgGQAJgBACgBQABgCAAgFIAAg1QAAgIgEgBIgGgBIAAgGIAhgFIACAMIAQgIQAHgEAIAAQAaAAAAAcIAAAtQAAAGACACQACABAJABIAAAGg");
	this.shape_1.setTransform(78.275,40.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_2.setTransform(67.525,40.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AgtAAQABguAsAAQAtAAAAAuQAAAugtAAQgsAAgBgugAgTAAQAAAmATAAQATABAAgnQAAglgTAAQgTgBAAAmg");
	this.shape_3.setTransform(56.6,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAtA+QgNAAgHgEQgHgEgDgJQgCgJgDgRQgCgJgFgDQgDgDgIAAIgIAAIAAApQAAAHACABQACACAKABIAAAGIg4AAIAAgGQAKgBACgCQADgBAAgHIAAhZQAAgHgDgCQgCgBgKgBIAAgGIA7AAQAVAAAJAGQAMAHAAARQAAANgIAIQgIAIgOACIAAAAQAYAFAEAaQACAMADAFQAFAHAIABIAAAGgAgPg0QgBABAAAFIAAArIAJAAQAMAAAFgHQAFgGAAgNQAAgZgVAAQgHAAgCACg");
	this.shape_4.setTransform(45.725,38.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgWAHIAAgNIAtAAIAAANg");
	this.shape_5.setTransform(36.375,40.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQIAOgMQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_6.setTransform(30.525,40.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAIAkIgKAHQgHADgIAAQgNAAgHgIQgHgHAAgLQAAgQATgFQAcgKAEgDIAAgIQAAgPgKAAQgLAAgGASQgBAGgGAAQgEAAgFgDQgFgCAAgGQAAgIAKgGQAMgIARAAQAiABAAAaIAAAnQgBAMAGACIAHABIABAGQgKAGgNgBQgKAAgEgKgAgJABQgKAFAAALQAAAIAFAEQAEAEAGABQALgBAAgOIAAgZg");
	this.shape_7.setTransform(21.15,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgOAVgBQAXAAAKAOQAGAKAAAOQAAAHgJAAIguAAQAAAjAXAAQAQAAAJgRIAGADQgKAagcAAQgqAAAAgugAgLgbQgDAHAAALIAYAAQAGAAAAgGQAAgXgOABQgIgBgFALg");
	this.shape_8.setTransform(10.175,40.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgeA+IAAgGQAMgBADgCQADgBAAgHIAAgcQAAgFgEgHIgcgyQgDgGgDgCQgCgBgHgBIAAgGIA3AAIAAAGIgKABQgEABACAFQAKAVAPAcIAAAAQAOgaAIgWQADgGgFgBIgKgBIAAgGIApAAIAAAGQgIABgDACQgDABgDAGQgJAOgRAjQgDAGAAAGIAAAdQAAAHACABQADACANABIAAAGg");
	this.shape_9.setTransform(0.075,38.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgPAVAAQAXAAAKAOQAGAKAAAOQAAAIgJgBIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgWgOgBQgIABgFAJg");
	this.shape_10.setTransform(83.325,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAiAtIAAgGIAIgCQACgBAAgFIAAgsQAAgSgOAAQgOAAgCANIgBAJIAAAoQgBAFADABQABABAHABIAAAGIgtAAIAAgGQAHgBABgBQADgBgBgFIAAgsQABgSgOAAQgNAAgEANIgBAIIAAApQAAAFACABIAIACIAAAGIgwAAIAAgGQAJgBACgBQABgCABgGIAAg0QgBgIgEgBIgGgBIAAgGIAhgFIADAMIANgIQAJgEAIAAQAQAAAHANIANgIQAKgFAIAAQAcAAAAAcIAAAtQAAAGACACQACABAJABIAAAGg");
	this.shape_11.setTransform(71.1,24.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgsAAQAAgtAsgBQAtABABAtQgBAugtABQgsgBAAgugAgTABQABAlASABQATAAAAgnQAAgmgTAAQgSABgBAmg");
	this.shape_12.setTransform(57.25,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AAKA+IAAgGQAKgBACgCQACgBAAgHIAAgtIgwAAIAAAtQAAAHACABQADACAKABIAAAGIg5AAIAAgGQAKgBADgCQACgBAAgHIAAhZQAAgHgCgCQgDgBgKgBIAAgGIA5AAIAAAGQgKABgDABQgCACAAAHIAAAlIAwAAIAAglQAAgHgCgCQgCgBgKgBIAAgGIA5AAIAAAGQgLABgCABQgCACAAAHIAABZQAAAHACABQACACALABIAAAGg");
	this.shape_13.setTransform(45.425,22.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQIAOgMQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_14.setTransform(30.525,24.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_15.setTransform(21.525,24.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgtAAQAAgtAtgBQAtABAAAtQAAAugtABQgtgBAAgugAgTABQAAAlATABQATAAAAgnQAAgmgTAAQgTABAAAmg");
	this.shape_16.setTransform(10.6,24.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AgeA+IAAgGQAMgBADgCQADgBAAgHIAAgcQAAgFgEgHIgcgyQgDgGgDgCQgCgBgHgBIAAgGIA3AAIAAAGIgKABQgEABACAFQAKAVAPAcIAAAAQAOgaAIgWQADgGgFgBIgKgBIAAgGIApAAIAAAGQgIABgDACQgDABgDAGQgJAOgRAjQgDAGAAAGIAAAdQAAAHACABQADACANABIAAAGg");
	this.shape_17.setTransform(0.075,22.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgKA0QgHgHAAgLIAAg7IgLAAIAAgIIAMAAIAPgWIAIAAIAAAWIATAAIAAAIIgTAAIAAA0QAAAQALAAQAFABAEgCIACAGQgOAIgLABQgIgBgGgEg");
	this.shape_18.setTransform(52.725,7.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgcAjQgLgLAAgXQAAgVALgMQAMgOAVAAQAOABAJAFQALAGAAAIQAAAFgGADQgDADgGAAQgFgBgDgFQgEgQgJgBQgGAAgEAJQgGAJAAASQAAARAHAJQAGAKAKgBQAPAAAJgRIAGADQgIAcgeAAQgTAAgLgMg");
	this.shape_19.setTransform(44.65,8.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgOAVgBQAXAAAKAOQAGAKAAAOQAAAHgJAAIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgXgOAAQgIAAgFAKg");
	this.shape_20.setTransform(34.175,8.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgKA0QgHgHAAgLIAAg7IgLAAIAAgIIAMAAIAPgWIAIAAIAAAWIATAAIAAAIIgTAAIAAA0QAAAQALAAQAFABAEgCIACAGQgOAIgLABQgIgBgGgEg");
	this.shape_21.setTransform(27.275,7.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgtAAQAAguAtAAQAtAAAAAuQAAAugtABQgtgBAAgugAgTAAQAAAnATAAQATAAAAgnQAAgmgTAAQgTABAAAlg");
	this.shape_22.setTransform(18.7,8.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQQAJgJAFgDQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_23.setTransform(11.025,8.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AgzA+IAAgGQAKgBACgCQADgBAAgHIAAhZQAAgHgDgCQgCgBgKgBIAAgGIA5AAQAWAAAKAGQAOAJAAAUQAAAXgRAJQgMAHgVAAQgHAAgEgBIAAAhQAAAHACACQADABALABIAAAGgAgIg0QgBABAAAEIAAAtQAAAHAMAAQAVAAAAgdQAAgPgHgIQgGgHgLAAQgGAAgCACg");
	this.shape_24.setTransform(0.125,6.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAKQgEgEAAgGQAAgEAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAEQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_25.setTransform(61.925,93.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAmQgJgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAJgGQAKgFALAAQANAAAJAFQAKAFAFAJQAFAKAAANIAAAGIg5AAQAAAIAFAEQAEAFAGgBQAJABAEgJIAbAAQgCAJgFAGQgGAGgIAEQgIAEgLAAQgLAAgKgFgAAQgHQAAgGgFgEQgEgFgHAAQgFAAgFAFQgEADgBAHIAfAAIAAAAg");
	this.shape_26.setTransform(56.225,90.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMA4IAAhvIAZAAIAABvg");
	this.shape_27.setTransform(49.925,88.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHA1QgHgEgEgGIAAAMIgZAAIAAhuIAZAAIAAAnQAEgGAHgDQAGgEAIAAQALAAAIAFQAIAGAFAJQAFAJAAANQAAANgFAKQgFAKgIAFQgIAFgLAAQgIAAgGgDgAgMgBQgGAFAAAJQAAAKAGAFQAFAGAHAAQAHAAAGgGQAFgFAAgKQAAgJgFgFQgGgFgHAAQgHAAgFAFg");
	this.shape_28.setTransform(43.475,88.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAmQgJgGgFgKQgEgJAAgNQAAgMAEgKQAFgJAJgGQAJgFAKAAQAHAAAHADQAHAEAEAGIAAgMIAZAAIAABTIgZAAIAAgMQgEAGgHADQgHAEgHAAQgKAAgJgFgAgMgOQgFAGAAAIQAAAKAFAFQAFAGAIAAQAHAAAGgGQAEgFABgKQgBgIgEgGQgGgGgHABQgIgBgFAGg");
	this.shape_29.setTransform(33.75,90.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMA4IAAhvIAZAAIAABvg");
	this.shape_30.setTransform(27.325,88.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMA8IAAhTIAZAAIAABTgAgKgjQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_31.setTransform(23.925,88.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZAmQgJgGgFgKQgEgJAAgNQAAgMAEgKQAFgJAJgGQAJgFAKAAQAHAAAHADQAHAEAEAGIAAgMIAZAAIAABTIgZAAIAAgMQgEAGgHADQgHAEgHAAQgKAAgJgFgAgMgOQgFAGAAAIQAAAKAFAFQAFAGAIAAQAHAAAGgGQAEgFABgKQgBgIgEgGQgGgGgHABQgIgBgFAGg");
	this.shape_32.setTransform(17.1,90.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAqIgehTIAcAAIARA7IASg7IAbAAIgdBTg");
	this.shape_33.setTransform(8.45,90.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaA1IgGgTIgnAAIgGATIgbAAIAmhpIAdAAIAmBpgAANAOIgNglIgMAlIAZAAg");
	this.shape_34.setTransform(0.1,89.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAoQgJgEgFgHQgFgGAAgJIAZAAQAAAFAEADQAEACAEAAQAFAAACgBQADgCAAgEQAAgDgEgCIgLgEIgPgEQgGgDgEgEQgFgEAAgJQAAgHAEgHQAEgFAIgEQAIgDAJAAQAQAAAJAIQAJAHACAOIgYAAQgBgFgDgDQgDgCgFAAQgEAAgCABQgDACAAAEQAAADAEACIALAEIAPAEQAGADAFAEQAEAFAAAIQAAAIgEAGQgEAGgIADQgIADgKAAQgKAAgIgDg");
	this.shape_35.setTransform(107.125,74.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQArIAAgtQAAgJgEgEQgFgFgHAAQgGAAgFAFQgEAEAAAJIAAAtIgaAAIAAhUIAaAAIAAAMQAEgGAGgDQAGgDAIgBQAPAAAJAKQAJAKAAAQIAAAxg");
	this.shape_36.setTransform(98.525,74.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAmQgJgFgEgKQgFgKgBgNQABgMAFgKQAEgJAJgGQAJgFAJAAQAJAAAGADQAHAEADAGIAAgMIAaAAIAABTIgaAAIAAgMQgDAGgHAEQgHADgIAAQgJAAgJgFgAgMgOQgFAGAAAIQAAAJAFAGQAGAGAGAAQAIAAAGgGQAEgGAAgJQAAgIgEgGQgGgFgIgBQgGABgGAFg");
	this.shape_37.setTransform(88.9,74.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMA4IAAhvIAZAAIAABvg");
	this.shape_38.setTransform(82.625,72.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIAoAAQANAAAJAFQAIAEAFAIQAEAHAAAKQAAAJgEAIQgEAHgJAEQgJAFgNAAIgPAAIAAAmgAgOgFIAOAAQAHAAADgDQAEgEAAgGQAAgGgEgEQgDgDgHAAIgOAAg");
	this.shape_39.setTransform(76.575,73.175);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAQArIAAgtQAAgJgEgEQgFgFgHAAQgGAAgFAFQgEAEAAAJIAAAtIgaAAIAAhUIAaAAIAAAMQAEgGAGgDQAGgDAIgBQAPAAAJAKQAJAKAAAQIAAAxg");
	this.shape_40.setTransform(64.825,74.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgJQgGgKAAgNQAAgMAGgKQAGgJAKgGQAKgFALAAQAMAAAKAFQAKAGAGAJQAGAKAAAMQAAANgGAKQgGAJgKAGQgKAFgMAAQgMAAgJgFgAgLgOQgFAFAAAJQAAAKAFAFQAEAGAHAAQAHAAAFgGQAGgFAAgKQAAgJgGgFQgFgGgHAAQgGAAgFAGg");
	this.shape_41.setTransform(55.425,74.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMA8IAAhTIAZAAIAABTgAgKgjQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_42.setTransform(48.925,72.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOA0QgOAAgIgHQgHgGAAgQIAAggIgLAAIAAgWIALAAIAAgUIAYAAIAAAUIARAAIAAAWIgRAAIAAAgQABAEACACQACABADAAIAJAAIAAAWg");
	this.shape_43.setTransform(44,73.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUAmQgJgGgGgJQgFgKAAgNQAAgMAFgKQAGgJAJgGQAKgFALAAQAQAAAKAIQALAJADAOIgbAAQgDgJgKAAQgGAAgFAGQgEAFAAAJQAAAKAEAGQAFAFAGAAQAKAAADgJIAbAAQgDAOgLAJQgKAIgQAAQgLAAgKgFg");
	this.shape_44.setTransform(37.325,74.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAmQgJgGgGgJQgFgKAAgNQAAgMAFgKQAGgJAJgGQAKgFALAAQANAAAJAFQAKAFAFAKQAFAJAAAMIAAAHIg5AAQAAAIAFAEQAEAEAGABQAJgBAEgIIAbAAQgCAJgFAGQgGAHgIAEQgIADgLAAQgLAAgKgFgAAQgHQAAgGgFgFQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_45.setTransform(28.575,74.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAOA0QgOAAgHgHQgIgGAAgQIAAggIgKAAIAAgWIAKAAIAAgUIAZAAIAAAUIAQAAIAAAWIgQAAIAAAgQAAAEACACQACABADAAIAJAAIAAAWg");
	this.shape_46.setTransform(21.6,73.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgJQgGgKAAgNQAAgMAGgKQAGgJAKgGQAKgFALAAQAMAAAKAFQAKAGAGAJQAGAKAAAMQAAANgGAKQgGAJgKAGQgKAFgMAAQgMAAgJgFgAgLgOQgFAFAAAJQAAAKAFAFQAEAGAHAAQAHAAAFgGQAGgFAAgKQAAgJgGgFQgFgGgHAAQgGAAgFAGg");
	this.shape_47.setTransform(14.375,74.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZArIAAhUIAZAAIAAAPQAEgIAHgDQAHgFAIAAIAAAcIgHAAQgKAAgFAEQgEAEAAAJIAAAog");
	this.shape_48.setTransform(7.15,74.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIAoAAQANAAAJAFQAIAEAFAIQAEAHAAAKQAAAJgEAIQgEAHgJAEQgJAFgNAAIgPAAIAAAmgAgOgFIAOAAQAHAAADgDQAEgEAAgGQAAgGgEgEQgDgDgHAAIgOAAg");
	this.shape_49.setTransform(-0.475,73.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAtArIAAgtQAAgIgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAtIgZAAIAAgtQAAgIgEgFQgEgEgIAAQgHAAgFAEQgEAFAAAIIAAAtIgZAAIAAhUIAZAAIAAALQAEgFAGgDQAHgEAIAAQAJAAAHAFQAHAEAEAHQAFgGAHgFQAHgFAKAAQAPAAAKAKQAIAKABAQIAAAxg");
	this.shape_50.setTransform(45.3,58.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgJQgGgKAAgNQAAgMAGgKQAGgKAKgFQAKgFALAAQAMAAAKAFQAKAFAGAKQAGAKAAAMQAAANgGAKQgGAJgKAGQgKAFgMAAQgMAAgJgFgAgLgOQgFAFAAAJQAAAKAFAFQAEAGAHAAQAHAAAFgGQAGgFAAgKQAAgJgGgFQgFgGgHAAQgGAAgFAGg");
	this.shape_51.setTransform(32.725,58.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAOA0QgOAAgIgHQgHgGAAgQIAAggIgLAAIAAgWIALAAIAAgUIAYAAIAAAUIASAAIAAAWIgSAAIAAAgQAAAEACACQACABAFAAIAJAAIAAAWg");
	this.shape_52.setTransform(25.25,57.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAoQgJgEgFgHQgFgGAAgJIAZAAQAAAFAEADQAEACAEAAQAFAAACgCQADgBAAgDQAAgEgEgCIgLgDIgPgFQgGgDgEgEQgFgEAAgJQAAgHAEgHQAEgFAIgEQAIgDAJAAQAQAAAJAIQAJAHACAOIgYAAQgBgFgDgDQgDgCgFAAQgEAAgCABQgDACAAAEQAAADAEACIALAEIAPAEQAGADAFADQAEAGAAAJQAAAHgEAGQgEAFgIAEQgIADgKAAQgKAAgIgDg");
	this.shape_53.setTransform(18.675,58.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgZAmQgIgEgEgJQgEgIAAgKIAAgxIAaAAIAAAtQAAAJAEAEQAFAFAGAAQAHAAAFgFQAEgEAAgJIAAgtIAaAAIAABUIgaAAIAAgMQgEAFgGAEQgGADgIABQgKgBgHgEg");
	this.shape_54.setTransform(10.125,58.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZAvQgMgHgGgMQgIgMAAgQQAAgOAIgNQAGgMAMgHQANgHAOAAQASAAAOAKQANAKAEARIgcAAQgCgGgHgEQgFgDgIAAQgLAAgHAIQgHAIAAANQAAAOAHAIQAHAJALAAQAIAAAFgEQAHgDACgHIAcAAQgEARgNAKQgOAKgSAAQgOAAgNgHg");
	this.shape_55.setTransform(0.2,57.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_56.setTransform(46.3,104.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-6.8,-2.9,118.2,108.2), null);


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
	this.shape.graphics.f("#14A751").s().p("AgjBEQgFgEAAgEQAAgGAEgEQAEgFAEAAQADAAAFAEQAEADADAAQAGAAADgNQABgEgCgJQgKgagYg2QgDgFgCgCIgJgCIAAgHIA0AAIAAAHIgHABQgFABACAGIAVA3IAAAAQAMgiAGgVQACgGgFgBIgJgBIAAgHIAmAAIAAAHQgHABgDACQgCACgDAHIghBYQgGAUgIAHQgHAHgKAAQgFAAgFgDg");
	this.shape.setTransform(101.65,122.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgZBHIAAgHQAJAAACgCQACgBAAgHIAAhmQAAgJgFgBIgHgBIAAgHIAkgEIABABIAAB7QAAAHADABQACACAIAAIAAAHg");
	this.shape_1.setTransform(93.775,117.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgZBFIAAgHQAJgBACgBQACgCAAgGIAAg4QAAgKgFAAIgHgBIAAgGIAkgGIABABIAABOQAAAGACACQACABAJABIAAAHgAgLgqQgEgEAAgHQAAgGAEgEQAEgEAHAAQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGABQgHgBgEgEg");
	this.shape_2.setTransform(88.925,118.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAkAxIAAgHIAJgCQACgCAAgFIAAguQAAgVgPABQgOAAgDANIgBAKIAAArQAAAFACACQABABAIABIAAAHIgxAAIAAgHQAIgBABgBQADgCAAgFIAAguQAAgVgPABQgPAAgEANIAAAKIAAArQgBAFADACIAIACIAAAHIgyAAIAAgHQAJgBACgBQACgCAAgGIAAg4QAAgKgFAAIgHgBIAAgGIAkgGIADANIAPgJQAIgEAJAAQARAAAIAPIAPgKQAJgFAJAAQAeAAAAAeIAAAxQAAAGADACQABABAJABIAAAHg");
	this.shape_3.setTransform(78,120.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_4.setTransform(63.575,120.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgyBDIAAgHQALgBADgCQACgBAAgIIAAhfQAAgIgCgBQgDgCgLgBIAAgHIBlAAIAAAjIgHAAQgFgPgEgFQgGgGgPAAIgNAAIgFABIgBAGIAAAvIAVAAQAKAAADgEQADgDACgLIAHAAIAAAsIgHAAQgCgLgDgDQgDgEgKAAIgVAAIAAArQAAAIADABQACACANABIAAAHg");
	this.shape_5.setTransform(52.825,118.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgmAxIAAgHQAJgBACgBQACgCAAgGIAAg4QAAgKgFAAIgHgBIAAgGIAkgGIABARIAPgOQAFgDAGAAQANgBAAANQAAAHgEAEQgDAFgGAAQgCAAgFgDQgGgFgEAAQgIAAAAAQIAAArQAAAGADACQACABAMABIAAAHg");
	this.shape_6.setTransform(38.925,120.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgrAUIAAguQAAgKgFgBIgHgBIAAgHIAlgDIABABIAAA8QAAAWARAAQALAAAEgLQACgDAAgIIAAgnQAAgKgFgBIgHgBIAAgHIAlgDIABABIAABNQAAAGADACQACABAIABIAAAHIgmAAIgBgLIgNAIQgJAFgLAAQgbAAAAgdg");
	this.shape_7.setTransform(29.275,120.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgwAAQAAgxAwAAQAxAAAAAxQAAAygxAAQgwAAAAgygAgUAAQAAApAUAAQAVAAAAgpQAAgogVAAQgUAAAAAog");
	this.shape_8.setTransform(17.525,120.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AghBDIAAgHQANgBADgCQADgBAAgIIAAgdQAAgGgDgHIgeg2QgEgHgCgBQgDgCgHgBIAAgHIA7AAIAAAHIgLACQgFAAADAGIAaA0IAAAAQAPgcAKgXQACgHgGgBIgKgBIAAgHIAsAAIAAAHQgIABgDACQgDACgEAGQgKAPgSAlQgEAHABAGIAAAfQAAAIADABQACACAOABIAAAHg");
	this.shape_9.setTransform(7.25,118.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgjBHIAAgHQAJAAACgCQACgBAAgHIAAhDIgMAAIAAgJIAMAAIAAgGQAAgVAKgLQAJgKAQAAQAMAAAGAFQAFAEAAAFQAAAFgEADQgEAEgEAAQgGAAgCgFQgFgNgEAAQgGAAABALIACAdIASAAIAAAJIgSAAIAABDQAAAHACABQACABAKABIAAAHg");
	this.shape_10.setTransform(114.325,95.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AgwAAQAAgxAwAAQAxAAAAAxQAAAygxAAQgwAAAAgygAgUAAQAAApAUAAQAVAAAAgpQAAgogVAAQgUAAAAAog");
	this.shape_11.setTransform(104.625,98.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgrAAQAAgVAKgNQAMgPAXAAQAYAAALAPQAHAKAAAPQAAAJgKAAIgxAAQgBAkAaAAQARAAAJgSIAHAEQgLAcgeAAQgtAAAAgygAgMgeQgDAJAAAMIAaAAQAGAAAAgHQAAgYgPAAQgJAAgFAKg");
	this.shape_12.setTransform(87.125,98.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgmAxIAAgHQAJgBACgBQACgCAAgGIAAg4QAAgKgFAAIgHgBIAAgGIAkgGIABARIAPgOQAFgDAGAAQANgBAAANQAAAHgEAEQgDAFgGAAQgCAAgFgDQgGgFgEAAQgIAAAAAQIAAArQAAAGADACQACABAMABIAAAHg");
	this.shape_13.setTransform(78.025,98);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_14.setTransform(68.875,98.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("Ag6ABQAAgfARgTQATgUAlAAQAaAAAPAIIAAAiIgHAAQgFgQgGgIQgJgKgQAAQgWAAgKAYQgHAPAAAWQAAAXAIAPQAKAYAWAAQAQAAAJgLQAGgIAHgSIAHAAIgDAkQgPAJgdAAQhGAAAAhFg");
	this.shape_15.setTransform(56.625,96.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgrAAQAAgVAKgNQAMgPAXAAQAYAAALAPQAHAKAAAPQAAAJgKAAIgxAAQgBAkAaAAQARAAAJgSIAHAEQgLAcgeAAQgtAAAAgygAgMgeQgDAJAAAMIAaAAQAGAAAAgHQAAgYgPAAQgJAAgFAKg");
	this.shape_16.setTransform(38.075,98.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAmBHQgTAAgIgLQgLgNgMgZIAAgBIAagmQAEgFAGAAIAaAAIAAAGQgYAEgGAHIgNAMQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAPAZASAVQAIAIAGACIAAAGgAg1BHIAAgHQAJAAACgCQACgBAAgHIAAhmQAAgJgFgBIgGgBIAAgHIAlgEIABABIAAB7QgBAHADABQACACAIAAIAAAHg");
	this.shape_17.setTransform(28.35,95.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_18.setTransform(16.925,98.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AghBDIAAgHIALgBQAFAAACgDQABgCABgGIAAhpIgJAAQgOAAgEAGQgEAFgFAQIgIAAIAAgkIBzAAIAAAkIgIAAQgFgRgEgEQgFgGgNAAIgJAAIAABpQABAGABACQABADAGAAIAKABIAAAHg");
	this.shape_19.setTransform(7.2,96.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgjBEQgEgDgBgGQABgEADgGQAEgEAEAAQADAAAFAEQAEADADAAQAFAAAEgNQACgFgDgIQgLgagXg1QgDgHgCgBIgJgBIAAgIIA0AAIAAAIIgHABQgFAAACAFIAVA4IABAAQAMgiAFgWQABgFgEAAIgKgBIAAgIIAnAAIAAAIQgHAAgDADQgCABgDAHIghBYQgGAUgIAIQgHAGgJAAQgHAAgEgDg");
	this.shape_20.setTransform(56.8,78.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgZBHIAAgHQAJAAACgCQACgBAAgHIAAhmQAAgJgFgBIgHgBIAAgHIAkgEIABABIAAB7QAAAHADABQACACAIAAIAAAHg");
	this.shape_21.setTransform(48.925,73.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgZBEIAAgGQAJgBACgCQACgBAAgHIAAg4QAAgJgFAAIgHgBIAAgHIAkgFIABABIAABNQAAAHACABQACACAJABIAAAGgAgLgqQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgGgBQgHABgEgFg");
	this.shape_22.setTransform(43.825,74);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAlAwIAAgGIAIgCQACgBABgGIAAgvQgBgTgQgBQgNABgEAOIgBAJIAAArQABAGACABQABABAHABIAAAGIgvAAIAAgGQAHgBABgBQADgBgBgGIAAgvQAAgTgOgBQgOABgEAOIgCAJIAAArQAAAGADABIAJACIAAAGIgzAAIAAgGQAJgBACgCQACgBAAgHIAAg4QAAgJgFAAIgHgBIAAgHIAkgFIACANIAPgJQAKgFAIABQARAAAIAOIAPgJQAJgGAKABQAdAAAAAeIAAAwQAAAHACABQACACAJABIAAAGg");
	this.shape_23.setTransform(31.7,76);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_24.setTransform(17.525,76.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("AgyBDIAAgHQALgBADgCQACgBAAgIIAAhfQAAgIgCgBQgDgCgLgBIAAgHIBlAAIAAAjIgHAAQgFgPgEgFQgGgGgPAAIgNAAIgFABIgBAGIAAAvIAVAAQAKAAADgEQADgDACgLIAHAAIAAAsIgHAAQgCgLgDgDQgDgEgKAAIgVAAIAAArQAAAIADABQACACANABIAAAHg");
	this.shape_25.setTransform(6.775,74.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgmAxIAAgIQAJAAACgBQACgCAAgGIAAg4QAAgKgFAAIgHgBIAAgGIAkgGIABARIAPgNQAFgFAGAAQANABAAANQAAAGgEAEQgDAFgGAAQgCAAgFgDQgGgFgEAAQgIAAAAAQIAAArQAAAGADACQACABAMAAIAAAIg");
	this.shape_26.setTransform(64.375,54);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgrAUIAAguQAAgLgFAAIgHgBIAAgHIAlgDIABABIAAA8QAAAWARAAQALAAAEgLQACgDAAgIIAAgnQAAgLgFAAIgHgBIAAgHIAlgDIABABIAABNQAAAGADACQACABAIAAIAAAIIgmAAIgBgLIgNAIQgJAFgLAAQgbAAAAgdg");
	this.shape_27.setTransform(54.725,54.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("AgxAzQgQgSAAghQAAggAQgSQARgTAgAAQAgAAARATQARASAAAgQAAAhgRASQgRATggAAQggAAgRgTgAghAAQAAA+AhAAQAhAAAAg+QAAg9ghAAQghAAAAA9g");
	this.shape_28.setTransform(41.175,52.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgKA3QgIgHAAgLIAAg/IgMAAIAAgJIANAAIAQgZIAIAAIAAAZIAVAAIAAAJIgVAAIAAA3QABASALAAQAGAAAEgCIACAGQgPAKgMAAQgIAAgGgGg");
	this.shape_29.setTransform(25.9,53.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgrAAQAAgVAKgNQAMgPAXAAQAYAAALAPQAHAKAAAPQAAAJgKAAIgxAAQgBAkAaAAQARAAAJgSIAHAEQgLAcgeAAQgtAAAAgygAgMgeQgDAJAAAMIAaAAQAGAAAAgHQAAgYgPAAQgJAAgFAKg");
	this.shape_30.setTransform(17.625,54.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag0BDIAAgHQALgBADgCQACgBAAgIIAAhfQAAgIgCgBQgDgCgLgBIAAgHIA+AAIAAAHQgMABgCACQgDABAAAIIAABbQAAAJAEADQADACAOAAQAPAAAGgHQAFgFAGgSIAHAAIgDAng");
	this.shape_31.setTransform(6.975,52.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAKAyQgKAAgGgFQgGgGAAgLIAAgsIgKAAIAAgNIAKAAIAAgUIAPAAIAAAUIAUAAIAAANIgUAAIAAAsQAAAEACACQADACAFAAIAKAAIAAAOg");
	this.shape_32.setTransform(123.925,23.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUAoIAAgrQAAgLgGgFQgFgGgJAAQgIAAgGAGQgFAFAAALIAAArIgQAAIAAhOIAQAAIAAAJQAEgFAGgDQAHgDAFAAQAKABAIAEQAHADAEAIQAEAHABALIAAAug");
	this.shape_33.setTransform(117.2,24.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_34.setTransform(108.625,24.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAwAoIAAgrQAAgLgFgFQgFgGgJAAQgKAAgGAGQgEAFAAALIAAArIgQAAIAAgrQAAgLgGgFQgFgGgJAAQgKAAgEAGQgGAFAAALIAAArIgQAAIAAhOIAQAAIAAAJQAEgFAGgDQAGgDAIAAQAJABAIAEQAGADAEAIQAEgHAHgEQAIgFAJAAQAJABAHAEQAIADAEAIQAFAHAAALIAAAug");
	this.shape_35.setTransform(97.4,24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_36.setTransform(86.025,24.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYA1QgLgIgBgNIAQAAQACAGAGAEQAHAEAHAAQAKAAAGgGQAGgGAAgMIAAgNQgEAFgHAEQgIAEgHAAQgLAAgIgFQgJgGgFgJQgFgIAAgMQAAgMAFgKQAFgJAJgFQAIgFALAAQAHAAAIADQAHAEAEAGIAAgMIARAAIAABQQAAALgFAJQgFAIgIAFQgJAFgMAAQgPAAgLgHgAgLgqQgFADgEAGQgDAGAAAJQAAAIADAGQAEAFAFAEQAGADAFAAQAHAAAFgDQAFgEADgFQAEgGAAgIQAAgIgEgHQgDgGgFgDQgFgDgHAAQgFAAgGADg");
	this.shape_37.setTransform(77.1,26.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAJgFAKAAQAJAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgJgFgAgLgXQgGADgDAGQgDAGAAAIQAAAIADAGQADAGAGAEQAGADAFAAQAHAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgHQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_38.setTransform(68.05,24.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAUAoIAAgrQAAgLgFgFQgGgGgJAAQgIAAgGAGQgFAFAAALIAAArIgQAAIAAhOIAQAAIAAAJQAEgFAGgDQAHgDAFAAQAKABAHAEQAIADAEAIQAEAHAAALIAAAug");
	this.shape_39.setTransform(59.35,24.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAkQgJgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAJgFQAIgFALAAQAIAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgIgFgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAFADAGAAQAHAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgHQgDgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_40.setTransform(50.2,24.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAkAyIAAhEIgeBEIgLAAIgfhEIAABEIgQAAIAAhjIARAAIAjBOIAjhOIASAAIAABjg");
	this.shape_41.setTransform(39.65,23.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKAyQgKAAgGgFQgGgGAAgLIAAgsIgKAAIAAgNIAKAAIAAgUIAPAAIAAAUIAUAAIAAANIgUAAIAAAsQAAAEACACQADACAFAAIAKAAIAAAOg");
	this.shape_42.setTransform(27.925,23.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAmQgIgEgFgGQgEgFAAgIIARAAQABAFAEAEQAFADAFAAQAHAAAEgDQAEgCgBgEQAAgFgDgCIgNgFIgPgFQgFgBgEgFQgFgEAAgIQABgHADgFQAEgFAHgDQAHgDAIAAQAOAAAIAHQAIAGABAMIgRAAQAAgFgEgDQgEgDgGAAQgGAAgEACQgDADAAAEQAAADACACQACACAEABIAJADIAOAFQAFACAFAEQAEAFAAAHQAAAHgEAGQgDAFgIADQgHADgIAAQgJAAgHgDg");
	this.shape_43.setTransform(21.6,24.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_44.setTransform(13.925,24.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIAiAAQALAAAIAEQAIAEAEAGQAEAHAAAJQAAAHgEAHQgDAGgIAEQgIAEgMAAIgRAAIAAApgAgRgDIARAAQAJAAAEgEQAFgFAAgHQAAgRgSAAIgRAAg");
	this.shape_45.setTransform(5.95,23.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgZA7IARgnIgfhNIASAAIAVA7IAYg7IARAAIgxB0g");
	this.shape_46.setTransform(82.5,9.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAoIAAhOIAQAAIAAAMQADgHAGgDQAGgEAIAAIAAARIgEAAQgKAAgEAGQgFAEAAANIAAAog");
	this.shape_47.setTransform(75.6,7.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_48.setTransform(68.675,8.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJAoIgehPIASAAIAVBAIAXhAIARAAIgeBPg");
	this.shape_49.setTransform(60.35,8.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAkQgJgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAJgFQAIgFALAAQAIAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgIgFgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAFADAGAAQAHAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgHQgDgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_50.setTransform(51.55,8.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAyIAAhjIAQAAIAABWIAhAAIAAANg");
	this.shape_51.setTransform(44.225,6.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgTAoIAAhOIARAAIAAAMQACgHAGgDQAGgEAIAAIAAARIgEAAQgJAAgGAGQgDAEAAANIAAAog");
	this.shape_52.setTransform(34.9,7.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHA4IAAhPIAPAAIAABPgAgGglQgEgDAAgEQAAgFAEgDQADgDADAAQAEAAADADQADADABAFQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_53.setTransform(30.5,6.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgVAkQgJgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAJgFQAIgFALAAQAIAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgIgFgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAGADAFAAQAHAAAFgDQAFgEADgGQAEgGAAgIQAAgHgEgHQgDgGgFgDQgFgDgHAAQgFAAgGADg");
	this.shape_54.setTransform(24.45,8.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMAyQgHgDgEgGIAAAMIgRAAIAAhqIARAAIAAAnQAEgGAHgEQAHgDAIAAQALAAAJAFQAIAFAFAJQAFAJAAAMQAAAMgFAJQgFAJgJAGQgIAFgLAAQgIAAgHgEgAgLgKQgGADgDAGQgDAGAAAIQAAAIADAGQADAGAGAEQAGADAFAAQAGAAAGgDQAFgEAEgGQADgGAAgIQAAgJgDgFQgEgGgFgDQgGgDgGAAQgFAAgGADg");
	this.shape_55.setTransform(15.925,6.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAcAyIgHgUIgpAAIgIAUIgQAAIAkhjIASAAIAkBjgAAQAQIgQguIgPAuIAfAAg");
	this.shape_56.setTransform(6.4,6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(0,0,126.3,130.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AANAgIgNgqIAAAAIgNAqIgNAAIgSg1QgBgDgCgBIgFgCIAAgEIAhAAIAAAEIgEABQgEAAACAEIAKAlIAAAAIAOguIALAAIAPAuIABAAIAJglQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgBIAAgEIAbAAIAAAEIgHACIgDAFIgRA0g");
	this.shape.setTransform(93,14.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAAQAAghAgAAQAiAAgBAhQABAigiAAQggAAAAgigAgOABQAAAcAOAAQAOgBAAgcQAAgbgOAAQgOAAAAAcg");
	this.shape_1.setTransform(83.9,14.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAuIgwhLIgBAAIAAArIABATQAAAGADABIAJABIAAAFIggAAIAAgFIAIgBQACgCABgFIABgTIAAguQAAgFgCgBQgBgCgIAAIAAgFIAeAAIArBAIABAAIAAggIgBgUQgBgFgEgBIgJgBIAAgFIAhAAIAAAFIgIABQgCACAAAEIgBAUIAAA7g");
	this.shape_2.setTransform(74.9,13.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAcIgCgTIAFAAQAGAUANAAQADgBADgCQADgCAAgEQAAgHgNgGQgKgEgFgDQgEgEAAgIQAAgKAGgGQAIgFALAAQALAAAIAEIAAASIgFAAQgCgIgDgDQgFgFgFAAQgDAAgDADQgDACAAADQAAAHAOAFQAKADAFAEQAEAEAAAJQAAAKgIAGQgGAFgMAAQgPAAgGgGg");
	this.shape_3.setTransform(62,14.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAiQgFgIAAgMIAAgwQAAgFgCgBIgIgBIAAgFIApAAIAAAFIgJABQgCABAAAFIAAAxQAAAaARAAQATAAAAgaIAAgxQAAgFgCgBIgJgBIAAgFIAoAAIAAAFIgJABQgBABAAAFIAAAwQAAALgEAIQgIAOgaAAQgYAAgIgNg");
	this.shape_4.setTransform(53.975,13.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgFIAIAAIALgRIAGAAIAAARIAOAAIAAAFIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_5.setTransform(43.525,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAaQgJgJABgQQgBgPAJgJQAIgKAQAAQAJAAAIAEQAHAEAAAGQAAAEgEACQgCACgEAAQgFAAgBgEQgEgMgGAAQgEAAgDAGQgFAHAAAMQAAANAGAIQAEAGAHAAQALAAAHgNIAFACQgGAUgXAAQgOAAgHgIg");
	this.shape_6.setTransform(37.6,14.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAbIgHAEQgGADgFAAQgKAAgFgFQgFgGAAgIQAAgMAOgEQAUgGADgDIAAgGQAAgLgIAAQgHAAgEANQgCAFgEAAQgDAAgDgCQgEgCAAgDQAAgIAHgEQAJgFANAAQAYAAAAATIAAAdQAAAJAEABIAGABIAAAEQgIAEgJAAQgIAAgCgHgAgGABQgHADAAAJQAAAFADAEQACACAFAAQAIAAAAgKIAAgSg");
	this.shape_7.setTransform(30.175,14.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgFIAIAAIALgRIAGAAIAAARIAOAAIAAAFIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_8.setTransform(24.825,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAhIAAgFIAGgBQACgBAAgEIAAggQAAgNgLAAQgHAAgEAIIgBAHIAAAeQAAAEACABIAFABIAAAFIgiAAIAAgFQAGAAABgBQACgBAAgEIAAgnQAAgGgEAAIgEgBIAAgEIAYgEIACAJIALgGQAFgDAFAAQAVAAgBAUIAAAiQAAAEACABQABABAGAAIAAAFg");
	this.shape_9.setTransform(18.85,14.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAAQgBghAhAAQAhAAAAAhQAAAighAAQghAAABgigAgNABQAAAcANAAQAOgBAAgcQAAgbgOAAQgNAAAAAcg");
	this.shape_10.setTransform(10.7,14.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnABQAAgVALgNQANgOAZAAQASAAALAGIAAAXIgFAAQgEgLgEgFQgGgHgLAAQgPAAgHAQQgEAKAAAPQAAAPAFALQAHAQAPAAQAKAAAHgHQAEgFAEgNIAFAAIgBAZQgLAGgUAAQgvAAAAgvg");
	this.shape_11.setTransform(1.325,13.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("An+CkQgdAAgUgVQgVgUAAgdIAAi7QAAgdAVgUQAUgVAdAAIP9AAQAdAAAUAVQAVAUAAAdIAAC7QAAAdgVAUQgUAVgdAAg");
	this.shape_12.setTransform(48.075,16.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-10,0.5,116.2,32.8), null);


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

	// Logo
	this.instance = new lib.text1();
	this.instance.setTransform(107.65,51.2,0.0792,0.0792,0,0,0,475.9,61.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABoIAAjPMD4xAAAIAADPg");
	this.shape.setTransform(107.0922,44.7665,0.0792,0.0792);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgygSkIArBdMggzASkg");
	this.shape_1.setTransform(37.8859,29.1189,0.0792,0.0792);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gngMl6QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA+ATQB+AmAMF7QAMF7htHwQhtHyinFFQhNCZhLBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(19.6101,48.2419,0.0792,0.0792);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzigQj0lUjFoOQjFoOgjmVQgRjAAch0QAdh4BIgXQBJgXBoBPQBkBNB0ChQDyFTDGIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(29.7876,47.6398,0.0792,0.0792);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nvhTmMQgoi7ALh3QAMh7BBggQBBggBrBAQBoA+CACQQEOEvD7HwQD7HuBTGMQAoC8gLB3QgMB7hBAhQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(20.0085,24.1822,0.0792,0.0792);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(111.15,31,0.0792,0.0792,0,0,0,850,159);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AheB+ICykCIALAHIizECg");
	this.shape_5.setTransform(33.984,23.1437,0.6609,0.6609);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("AgHAoQg/gIgrgQQgUgIgKgIQgKgJABgIQABgIAOgGQANgFAWgDQAvgHA+AHQBAAIAqARQAUAIALAHQAKAJgBAIQgCAIgNAGQgNAGgWADQgWACgZAAQgdAAgigDg");
	this.shape_6.setTransform(11.3328,34.0528,0.6609,0.6609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(1.2,14.4,187.3,43.4), null);


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
	this.instance_1.setTransform(54.4,140.9,1,1,0,0,0,40.4,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(70.8,84.5,1,1,0,0,0,51.6,75.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).to({_off:true},80).wait(169));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.setTransform(234.05,260.55,1,1,0,0,0,46.1,16.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:240.55,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// Logo
	this.instance_4 = new lib.Logo();
	this.instance_4.setTransform(71.95,218.95,0.8,0.8,0,0,0,100,32);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:91.95,alpha:1},9,cjs.Ease.get(1)).wait(342));

	// F1
	this.instance_5 = new lib.F1();
	this.instance_5.setTransform(58.9,81.65,1,1,0,0,0,68,65);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:78.9,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(259));

	// Sh
	this.instance_6 = new lib.Sh();
	this.instance_6.setTransform(158,248.5,1,1,0,0,0,175.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

	// Thin Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Img2
	this.instance_7 = new lib.Img2_1();
	this.instance_7.setTransform(150,105,1,1,0,0,0,150,105);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// M2
	this.instance_8 = new lib.mosquito("synched",0);
	this.instance_8.setTransform(177.15,46.7,0.4914,0.7291,72.6677,0,0,8.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(360));

	// M1
	this.instance_9 = new lib.mosquito("synched",0);
	this.instance_9.setTransform(211.35,85.2,0.8,0.8,0,0,0,8.4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Img1
	this.instance_10 = new lib.Img1_1();
	this.instance_10.setTransform(150,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-1,351.6,333.4);


// stage content:
(lib.WFSB_217823_MM_300x250 = function(mode,startPosition,loop,reversed) {
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