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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.IMG2 = function() {
	this.initialize(img.IMG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgCgCgBgEQABgDACgCQACgCADAAQAEAAACACQADACgBADQABAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(85.2,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAjQgRgBAAgQIAAgaIgGAAIAAgMIAGAAIAAgOIANAAIAAAOIANAAIAAAMIgNAAIAAAaQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIAFACIAHAAIAAAMg");
	this.shape_1.setTransform(82.55,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAcIAAgeQAAgGgDgEQgDgEgGAAQgFAAgDAEQgDAEAAAGIAAAeIgOAAIAAg3IAOAAIAAAIQACgEAFgCQAEgCAEAAQAKAAAGAGQAGAHAAALIAAAfg");
	this.shape_2.setTransform(77.675,36.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgHAGgDQAFgEAHAAQAGAAAEADQAFACADAEIAAgIIAOAAIAAA3IgOAAIAAgIQgDAEgFACQgFADgFAAQgHAAgFgEgAgGgNQgEACgCADQgCAEAAAEQAAAFACAEQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_3.setTransform(71.025,36.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAnIAAg2IANAAIAAA2gAgFgYQgCgCAAgEQAAgDACgDQADgCACAAQAEAAACACQADADAAADQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_4.setTransform(66.25,35.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_5.setTransform(63.55,35.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcApIAAhRIAOAAIAAAIQADgDAFgDQAEgCAFgBQAIABAFADQAGAEADAGQAEAHAAAIQAAAIgEAGQgDAHgGADQgFAEgIAAQgFAAgEgDQgFgCgDgEIAAAigAgGgaQgEACgCADQgCAFAAAEQAAAGACADQACADAEACQADABADAAQAEAAADgBQADgCACgDQACgEAAgFQAAgFgCgEQgCgDgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_6.setTransform(59.425,37.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgAcIAAgeQAAgGgEgDQgDgEgGAAQgFAAgEAEQgDADAAAGIAAAeIgNAAIAAgeQAAgGgDgDQgEgEgFAAQgGAAgDAEQgEADAAAGIAAAeIgOAAIAAg3IAOAAIAAAIQADgEAEgCQAEgCAFAAQAHAAAFACQAEAEADAEQADgEAFgEQAFgCAGAAQAKAAAGAGQAHAHAAALIAAAfg");
	this.shape_7.setTransform(51.075,36.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAZQgGgDgEgHQgDgGgBgJQABgHADgHQAEgGAHgEQAGgEAHAAQAIAAAHAEQAGAEAEAGQADAHAAAHQAAAJgDAGQgEAHgHADQgGAEgIAAQgHAAgHgEgAgKgLQgDAEAAAHQAAAIADAEQAEAEAGAAQAEAAADgBQADgCACgEQACgEAAgFQAAgHgEgEQgEgEgGAAQgGAAgEAEg");
	this.shape_8.setTransform(43.45,36.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAfQgJgFgFgHQgEgIAAgLQAAgKAEgIQAFgHAJgFQAHgFAKABQALAAAJAFQAIAHAEAKIgQAAQgCgFgEgDQgFgCgFAAQgGAAgFACQgFADgCAGQgCAFgBAGQABAHACAFQACAGAFADQAFACAGAAQAFAAAFgCQAEgDACgFIAQAAQgEAKgIAHQgJAFgLAAQgKABgHgFg");
	this.shape_9.setTransform(36.8,35.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTApIAMgcIgWg1IAQAAIANAnIAPgnIAPAAIgiBRg");
	this.shape_10.setTransform(28.325,37.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIAjQgRgBAAgQIAAgaIgHAAIAAgMIAHAAIAAgOIANAAIAAAOIAMAAIAAAMIgMAAIAAAaQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAEACIAGAAIAAAMg");
	this.shape_11.setTransform(23.2,35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAZQgHgDgDgHQgDgGgBgJQABgIADgGQADgHAHgDQAGgEAHAAQAIAAAHAEQAFADAEAGQAEAHgBAIIAAAEIgnAAQAAAGADAEQAEADAFAAQAIAAADgHIAPAAQgDAIgGAGQgHAFgKAAQgHAAgGgEgAANgEQAAgGgEgDQgEgDgFAAQgEAAgEADQgEADAAAGIAZAAIAAAAg");
	this.shape_12.setTransform(18.6,36.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAnIAAgrIgGAAIAAgMIAGAAIAAgCQAAgLAGgEQAFgFALAAIAAAMQgFAAgCACQgCABAAAFIAAACIAKAAIAAAMIgKAAIAAArg");
	this.shape_13.setTransform(13.975,35.1727);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgHAGgDQAFgEAHAAQAGAAAEADQAFACADAEIAAgIIAOAAIAAA3IgOAAIAAgIQgDAEgFACQgFADgFAAQgHAAgFgEgAgGgNQgEACgCADQgCAEAAAEQAAAFACAEQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_14.setTransform(8.675,36.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgEgFQgDgEAAgHIAPAAQAAAEADADQADACADAAQAFAAADgCQADgCAAgEQAAgDgCgCIgFgDIgHgDIgLgEQgEgBgDgEQgDgEAAgGQAAgGADgFQADgFAGgCQAFgDAHAAQAKAAAHAGQAHAFABAJIgQAAQAAgDgDgDQgDgCgDAAQgEAAgDACQgCACAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAFADIAHADIALAEQAEABADAEQADAEAAAGQAAAGgCAEQgDAFgGADQgGADgHAAQgHAAgFgDg");
	this.shape_15.setTransform(2.575,35.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAiQgGgDgDgFQgDgFAAgGQAAgHAEgFQAEgFAHgDIgEgHIgBgGQAAgFADgEQACgEAFgCQAEgCAHAAQAFAAAEACQAFADACAEQACAEAAAFIgNAAQAAgEgBgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgDAAgCACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABAFIAFAGIARAQIAAAAIAAgBIAGgIIAOAAIgHALIgEAIIARAQIgRAAIgIgHQgJAIgNAAQgIAAgGgCgAgWAOQAAAFADADQADADAGAAQAIAAAFgGIgQgRQgJAEAAAIg");
	this.shape_16.setTransform(107.725,24.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAiQgGgEgEgHQgDgGAAgIQAAgJADgFQAEgHAGgDQAFgEAHAAQAFAAAFADQAFACADAEIAAgbIAOAAIAABKIgOAAIAAgIQgDAEgFACQgEACgGABQgHgBgFgDgAgGgEQgEACgCACQgCADAAAGQAAAEACAFQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgFgCgEQgCgCgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_17.setTransform(98.575,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAZQgHgDgDgHQgEgGABgJQgBgHAEgHQAEgGAGgEQAHgEAHAAQAIAAAGAEQAHAEAEAGQAEAHAAAHQAAAJgEAGQgFAHgGADQgHAEgHAAQgIAAgGgEgAgJgLQgFAEAAAHQAAAIAFAEQADAEAGAAQADAAAEgBQADgCACgEQACgEAAgFQAAgHgEgEQgFgEgFAAQgGAAgDAEg");
	this.shape_18.setTransform(93,25.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAZQgGgDgEgHQgDgGgBgJQABgHADgHQAEgGAHgEQAGgEAHAAQAIAAAHAEQAGAEAEAGQADAHAAAHQAAAJgDAGQgEAHgHADQgGAEgIAAQgHAAgHgEgAgJgLQgEAEAAAHQAAAIAEAEQAEAEAFAAQADAAAEgBQADgCACgEQACgEAAgFQAAgHgEgEQgFgEgFAAQgFAAgEAEg");
	this.shape_19.setTransform(87.45,25.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIArAAIAAAMIgcAAIAAASIAUAAIAAAKIgUAAIAAAdg");
	this.shape_20.setTransform(81,24.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAiQgGgEgEgHQgDgGAAgIQAAgJADgFQAEgHAGgDQAFgEAHAAQAFAAAFADQAFACADAEIAAgbIAOAAIAABKIgOAAIAAgIQgDAEgFACQgEACgGABQgHgBgFgDgAgGgEQgEACgCACQgCADAAAGQAAAEACAFQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgFgCgEQgCgCgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_21.setTransform(73.075,24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMAcIAAgdQAAgHgDgEQgDgDgGgBQgFABgDADQgDAEAAAHIAAAdIgOAAIAAg3IAOAAIAAAIQACgEAFgCQAEgCAEAAQAKAAAGAGQAGAHAAALIAAAfg");
	this.shape_22.setTransform(66.875,25.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgHAGgDQAFgEAHAAQAGAAAEADQAFACADAEIAAgIIAOAAIAAA3IgOAAIAAgIQgDAEgFACQgFADgFAAQgHAAgFgEgAgGgNQgEACgCADQgCAEAAAEQAAAFACAEQACADAEACQADACADAAQAEAAADgCQAEgCACgDQACgEAAgFQAAgEgCgEQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_23.setTransform(60.475,25.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATAjIgFgNIgbAAIgEANIgPAAIAZhFIAPAAIAZBFgAAKAKIgKgcIgJAcIATAAg");
	this.shape_24.setTransform(51.975,24.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAPAjIAAgdIgdAAIAAAdIgOAAIAAhFIAOAAIAAAdIAdAAIAAgdIAOAAIAABFg");
	this.shape_25.setTransform(44.8,24.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAhQgGgCgEgFQgDgEAAgHIAPAAQAAAEADADQADACADAAQAFAAADgCQADgCAAgEQAAgDgCgCIgFgDIgHgDIgLgEQgEgBgDgEQgDgEAAgGQAAgGADgFQADgFAGgCQAFgDAHAAQAKAAAHAGQAHAFABAJIgQAAQAAgDgDgDQgDgCgDAAQgEAAgDACQgCACAAAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAFADIAHADIALAEQAEABADAEQADAEAAAGQAAAGgCAEQgDAFgGADQgGADgHAAQgHAAgFgDg");
	this.shape_26.setTransform(37.575,24.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAfQgIgEgFgIQgFgJAAgKQAAgJAFgIQAFgIAIgFQAIgFAJAAQAKAAAIAFQAIAFAFAIQAFAIAAAJQAAAKgFAJQgFAIgIAEQgIAFgKAAQgJAAgIgFgAgKgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAGAFADQAFACAFAAQAGAAAFgCQAFgDADgGQACgFAAgHQAAgGgCgFQgDgFgFgDQgFgDgGAAQgFAAgFADg");
	this.shape_27.setTransform(30.725,24.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAgQgFgEAAgIQAAgIAFgEQAEgFAHABQAHgBAFAFQAEAEAAAIQAAAIgEAEQgFAEgHAAQgHAAgEgEgAAQAUQAAAIAGAAQAGAAAAgIQAAgIgGAAQgGAAAAAIgAgZAjIAmhFIAOAAIgnBFgAgggHQgFgEAAgIQAAgHAFgFQAEgEAHAAQAHAAAFAEQAEAFAAAHQAAAIgEAEQgFAEgHABQgHgBgEgEgAgagTQAAAIAFAAQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAQACgCAAgEQAAgIgGAAQgFAAAAAIg");
	this.shape_28.setTransform(19.325,24.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAbQgGgKAAgRQAAgQAGgKQAGgKAOAAQAPAAAGAKQAGAKAAAQQAAARgGAKQgGAKgPAAQgOAAgGgKgAgHgUQgDADgCAFIgBAMIABANQACAFADADQACADAFAAQAFAAAEgDQACgDABgFIABgNIgBgMQgBgFgCgDQgEgDgFAAQgFAAgCADg");
	this.shape_29.setTransform(11.9,24.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAbQgGgKAAgRQAAgQAGgKQAGgKAOAAQAPAAAFAKQAHAKAAAQQAAARgHAKQgFAKgPAAQgOAAgGgKgAgIgUQgCADgBAFIgBAMIABANQABAFACADQADADAFAAQAGAAADgDQACgDABgFIABgNIgBgMQgBgFgCgDQgDgDgGAAQgFAAgDADg");
	this.shape_30.setTransform(6.35,24.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgBAlIAAg7IgKAAIAAgNIAXAAIAABIg");
	this.shape_31.setTransform(1.1,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.OSHALogo();
	this.instance.setTransform(-2,-10,0.2952,0.2952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(-2.4,-10,114.9,53.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLALQgEgFAAgGQAAgFAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(48.525,-68.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBCIAUgtIgkhWIAfAAIAUA4IAUg4IAdAAIg3CDg");
	this.shape_1.setTransform(43.5,-69.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAoQgJgGgFgKQgFgLAAgNQAAgNAFgLQAFgKAJgGQAJgFALAAQAJAAAHAEQAHADAEAHIAAgNIAbAAIAABZIgbAAIAAgNQgEAGgIAEQgHAEgIAAQgLAAgJgGgAgNgQQgFAHAAAJQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgJgGgHQgGgFgIAAQgHAAgGAFg");
	this.shape_2.setTransform(32.525,-71.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbA2QgJgGgFgKQgFgLAAgNQAAgOAFgKQAFgKAJgGQAJgFALAAQAIAAAHADQAHAFAFAFIAAgpIAbAAIAAB2IgbAAIAAgOQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgCQgFAGAAAKQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgKgGgGQgGgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(22.175,-72.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAoQgKgGgHgKQgFgKAAgOQAAgNAFgLQAHgKAKgGQAKgFANAAQANAAAKAFQALAGAGAKQAGALAAANQAAANgGALQgGAKgLAGQgKAGgNAAQgNAAgKgGgAgNgQQgEAGAAAKQAAAKAEAHQAGAFAHAAQAHAAAGgFQAFgHABgKQgBgKgFgGQgFgFgIgBQgHABgGAFg");
	this.shape_4.setTransform(12,-71.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPA4QgPgBgIgHQgJgHAAgRIAAgiIgKAAIAAgXIAKAAIAAgVIAbAAIAAAVIASAAIAAAXIgSAAIAAAjQAAAEACABQACACAEAAIAKAAIAAAYg");
	this.shape_5.setTransform(3.65,-72.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAtIAAgvQAAgJgEgGQgFgEgIAAQgHAAgFAEQgEAGAAAJIAAAvIgbAAIAAhZIAbAAIAAANQAEgHAHgDQAGgDAJAAQAPAAAKAKQAKAKAAASIAAAzg");
	this.shape_6.setTransform(118,-91.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAoQgLgGgFgKQgHgKAAgOQAAgNAHgKQAFgLALgGQALgFAMAAQANAAALAFQAKAGAGALQAHAKgBANQABANgHALQgGAKgKAGQgMAGgMAAQgNAAgKgGgAgMgPQgGAFAAAKQAAAKAGAHQAFAFAHAAQAIAAAFgFQAGgHgBgKQABgKgGgFQgFgHgIAAQgHAAgFAHg");
	this.shape_7.setTransform(107.8,-91.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBAIAAhZIAbAAIAABZgAgLgmQgEgEAAgGQAAgHAEgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAGgEAEQgFAFgHgBQgGABgFgFg");
	this.shape_8.setTransform(101.025,-93.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA4QgPAAgIgIQgJgHAAgRIAAgiIgKAAIAAgXIAKAAIAAgWIAbAAIAAAWIASAAIAAAXIgSAAIAAAjQAAAEACACQACABAEAAIAKAAIAAAYg");
	this.shape_9.setTransform(95.9,-92.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAoQgJgGgFgKQgFgKAAgOQAAgNAFgKQAFgLAJgGQAJgFALAAQAJAAAHAEQAHADAEAHIAAgNIAbAAIAABZIgbAAIAAgNQgEAGgIAEQgHAEgIAAQgLAAgJgGgAgNgPQgFAFAAAKQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgKgGgFQgGgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(87.075,-91.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPA4QgPAAgIgIQgJgHAAgRIAAgiIgKAAIAAgXIAKAAIAAgWIAbAAIAAAWIASAAIAAAXIgSAAIAAAjQAAAEACACQACABAEAAIAKAAIAAAYg");
	this.shape_11.setTransform(78.9,-92.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbApQgIgFgEgJQgFgIABgMIAAgzIAbAAIAAAvQAAAJAEAFQAFAFAHAAQAIAAAFgFQAEgFAAgJIAAgvIAcAAIAABYIgcAAIAAgMQgEAGgHAEQgGADgJAAQgKAAgIgEg");
	this.shape_12.setTransform(70.75,-91.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBDIAAiEIAbAAIAAAOQAFgHAHgDQAGgFAJAAQALABAJAFQAJAGAFAKQAFALAAANQAAAOgFAKQgFAKgJAGQgJAFgLAAQgJAAgGgDQgHgEgFgGIAAA3gAgNgkQgGAGAAAKQAAALAGAFQAGAFAHABQAIgBAGgFQAFgGABgKQgBgKgFgGQgGgGgIABQgHgBgGAGg");
	this.shape_13.setTransform(60.75,-89.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAoQgKgGgGgKQgGgKAAgOQAAgNAGgKQAGgLAKgGQAKgFAMAAQANAAAKAFQAKAGAGAKQAGAKAAAOIgBAGIg9AAQABAJAFAEQAEAFAHgBQAKABAEgJIAdAAQgCAJgGAHQgGAHgJAEQgJAEgLAAQgMAAgKgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_14.setTransform(50.375,-91.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAbAAIAAAQQAEgIAIgEQAHgEAJAAIAAAdIgIAAQgKAAgFAEQgFAFAAAKIAAApg");
	this.shape_15.setTransform(42.675,-91.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAbAAIAAAQQAEgIAIgEQAHgEAJAAIAAAdIgIAAQgKAAgFAEQgFAFAAAKIAAApg");
	this.shape_16.setTransform(32.975,-91.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbApQgIgFgEgJQgEgIAAgMIAAgzIAbAAIAAAvQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgJIAAgvIAcAAIAABYIgcAAIAAgMQgEAGgHAEQgGADgJAAQgKAAgIgEg");
	this.shape_17.setTransform(24.7,-91.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAoQgKgGgHgKQgFgKAAgOQAAgNAFgKQAHgLAKgGQAKgFANAAQANAAAKAFQALAGAGALQAGAKABANQgBANgGALQgGAKgLAGQgKAGgNAAQgNAAgKgGgAgNgPQgEAFAAAKQAAAKAEAHQAGAFAHAAQAHAAAGgFQAFgHABgKQgBgKgFgFQgFgHgIAAQgHAAgGAHg");
	this.shape_18.setTransform(14.6,-91.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiBCIAVguIgkhVIAeAAIATA4IAVg4IAeAAIg3CDg");
	this.shape_19.setTransform(5.55,-89.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbA2QgJgGgFgKQgFgLAAgOQAAgNAFgJQAFgLAJgGQAJgFALAAQAIAAAHAEQAHADAFAHIAAgqIAbAAIAAB1IgbAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgBQgFAFAAAJQAAALAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgLgGgEQgGgGgIAAQgHAAgGAGg");
	this.shape_20.setTransform(78.275,-112.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAbAAIAAAQQAEgIAIgEQAHgEAJAAIAAAdIgIAAQgKAAgFAEQgFAFAAAJIAAAqg");
	this.shape_21.setTransform(70.075,-111.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAoQgJgGgFgKQgFgLAAgNQAAgNAFgKQAFgLAJgGQAJgFALAAQAJAAAHAEQAHAEAEAGIAAgNIAbAAIAABYIgbAAIAAgMQgEAGgIAEQgHAEgIAAQgLAAgJgGgAgNgPQgFAGAAAJQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgKgGgFQgGgGgIAAQgHAAgGAGg");
	this.shape_22.setTransform(61.125,-111.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbApQgIgFgEgJQgFgIAAgMIAAgzIAcAAIAAAvQAAAJAFAFQAEAFAHAAQAIAAAFgFQAEgFAAgJIAAgvIAbAAIAABYIgbAAIAAgMQgEAGgHAEQgGADgJAAQgKAAgIgEg");
	this.shape_23.setTransform(51.2,-111.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdA6QgMgJgCgQIAbAAQABAFAFADQAFADAGAAQAJAAAFgFQAFgFAAgLIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGQgJgGgFgKQgFgKAAgOQAAgNAFgLQAFgKAJgGQAJgFALAAQAJAAAHAEQAHADAEAHIAAgNIAbAAIAABYQAAAMgFAKQgFAKgKAGQgKAGgPAAQgTAAgMgJgAgNglQgFAGAAAKQAAALAFAGQAGAFAHAAQAIAAAGgFQAGgGAAgKQAAgLgGgGQgGgFgIAAQgHAAgGAFg");
	this.shape_24.setTransform(40.925,-109.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAoQgKgGgGgKQgGgKAAgOQAAgNAGgKQAGgLAKgGQAKgFAMAAQANAAAKAFQAKAGAGAKQAGAKAAANIgBAHIg9AAQABAJAFAEQAEAEAHAAQAKAAAEgIIAdAAQgCAIgGAIQgGAHgJAEQgJAEgLAAQgMAAgKgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_25.setTransform(31.075,-111.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPA/IAAhCIgKAAIAAgXIAKAAIAAgCQAAgRAKgIQAIgJASAAIAFAAIAAAYQgIgBgEADQgCADgBAHIAAAAIAPAAIAAAXIgPAAIAABCg");
	this.shape_26.setTransform(23.6,-112.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAoQgJgGgFgKQgFgLAAgNQAAgNAFgKQAFgLAJgGQAJgFALAAQAJAAAHAEQAHAEAEAGIAAgNIAbAAIAABYIgbAAIAAgMQgEAGgIAEQgHAEgIAAQgLAAgJgGgAgNgPQgFAGAAAJQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgKgGgFQgGgGgIAAQgHAAgGAGg");
	this.shape_27.setTransform(15.075,-111.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUA1QgJgDgGgIQgGgIAAgLIAdAAQABAGADAEQAEACAFAAQAGABAEgDQADgDAAgFQAAgEgDgDQgCgDgFgBIgKgEQgLgDgHgEQgHgDgFgGQgFgHAAgKQAAgQALgIQAMgKASABQARgBAMAKQAMAIAAAQIgdAAQgBgFgEgDQgDgEgFAAQgFABgDACQgDADAAAEQAAAGAFADQAGADAJAEIASAHQAGACAGAHQAEAGAAAKQAAAJgEAJQgGAHgJAFQgJAFgMAAQgMgBgKgEg");
	this.shape_28.setTransform(5.4,-112.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_29.setTransform(52.5,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(-1.5,-121,125.1,86.5), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2, new cjs.Rectangle(0,0,300,250), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape.setTransform(90.525,38.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAGAtIAAgGIAIgCQADgBAAgFIAAgsQAAgSgQAAQgKAAgFAKQgCADAAAHIAAApQAAAGADABIAIACIAAAGIgwAAIAAgGQAJgBACgBQABgCAAgFIAAg1QAAgIgEgBIgGgBIAAgGIAhgFIACAMIAQgIQAHgEAIAAQAaAAAAAcIAAAtQAAAGACACQACABAJABIAAAGg");
	this.shape_1.setTransform(79.975,40.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_2.setTransform(69.225,40.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AgtAAQAAguAtAAQAtAAAAAuQAAAugtAAQgtAAAAgugAgTAAQAAAmATAAQATABAAgnQAAglgTAAQgTgBAAAmg");
	this.shape_3.setTransform(58.3,40.2);

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
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAKQgEgEAAgFQAAgGAEgDQAEgFAGAAQAHAAAEAFQAEADAAAGQAAAFgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_25.setTransform(65.475,90.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAmQgJgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAJgGQAKgFALAAQANAAAJAFQAKAFAFAKQAFAJAAAMIAAAHIg5AAQAAAIAFAEQAEAEAGABQAJAAAEgJIAbAAQgCAJgFAGQgGAGgIAFQgIADgLAAQgLAAgKgFgAAQgHQAAgGgFgFQgEgDgHAAQgFAAgFADQgEAEgBAHIAfAAIAAAAg");
	this.shape_26.setTransform(59.475,87.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMA4IAAhvIAZAAIAABvg");
	this.shape_27.setTransform(52.925,85.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHA1QgHgEgEgGIAAAMIgZAAIAAhuIAZAAIAAAnQAEgGAHgDQAGgEAIAAQALAAAIAFQAIAGAFAJQAFAJAAANQAAANgFAKQgFAKgIAFQgIAFgLAAQgIAAgGgDgAgMgBQgGAFAAAJQAAAKAGAFQAFAGAHAAQAHAAAGgGQAFgFAAgKQAAgJgFgFQgGgFgHAAQgHAAgFAFg");
	this.shape_28.setTransform(46.125,85.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAmQgIgFgGgKQgEgKAAgNQAAgMAEgKQAGgJAIgGQAIgFALAAQAIAAAHADQAGAEAEAGIAAgMIAaAAIAABTIgaAAIAAgMQgEAGgHAEQgGADgIAAQgLAAgIgFgAgMgOQgFAGAAAIQAAAKAFAFQAFAGAIAAQAHAAAFgGQAGgFAAgKQAAgIgGgGQgFgFgHgBQgIABgFAFg");
	this.shape_29.setTransform(36.2,87.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMA4IAAhvIAZAAIAABvg");
	this.shape_30.setTransform(29.625,85.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgMA8IAAhTIAZAAIAABTgAgKgjQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_31.setTransform(25.425,85.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZAmQgJgFgEgKQgGgKAAgNQAAgMAGgKQAEgJAJgGQAJgFAJAAQAJAAAGADQAHAEADAGIAAgMIAaAAIAABTIgaAAIAAgMQgDAGgHAEQgHADgIAAQgJAAgJgFgAgMgOQgFAGAAAIQAAAKAFAFQAGAGAGAAQAIAAAGgGQAEgFAAgKQAAgIgEgGQgGgFgIgBQgGABgGAFg");
	this.shape_32.setTransform(18.15,87.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAqIgdhTIAbAAIARA7IATg7IAbAAIgeBTg");
	this.shape_33.setTransform(8.95,87.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaA1IgGgTIgnAAIgGATIgbAAIAmhpIAdAAIAmBpgAANAOIgNglIgMAlIAZAAg");
	this.shape_34.setTransform(0.1,86.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAnQgJgDgFgHQgFgGAAgJIAZAAQAAAFAEACQAEADAEAAQAFAAACgCQADgBAAgDQAAgEgEgCIgLgDIgPgFQgGgDgEgEQgFgEAAgJQAAgHAEgHQAEgFAIgEQAIgDAJAAQAQAAAJAIQAJAHACANIgYAAQgBgEgDgDQgDgCgFAAQgEAAgCABQgDADAAADQAAADAEACIALAEIAPAEQAGADAFADQAEAGAAAJQAAAHgEAGQgEAFgIAEQgIADgKAAQgKAAgIgEg");
	this.shape_35.setTransform(110.325,72.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAQArIAAgtQAAgIgEgFQgFgFgHAAQgGAAgFAFQgEAFAAAIIAAAtIgaAAIAAhTIAaAAIAAALQAEgGAGgDQAGgEAIAAQAPAAAJAKQAJAKAAAQIAAAxg");
	this.shape_36.setTransform(101.425,72.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAmQgIgFgGgLQgEgJAAgNQAAgMAEgKQAGgKAIgFQAJgFAKAAQAHAAAIADQAGAEAEAGIAAgMIAaAAIAABTIgaAAIAAgMQgEAGgHADQgHAEgHAAQgKAAgJgFgAgMgOQgFAGAAAIQAAAJAFAGQAFAGAIAAQAHAAAFgGQAFgGABgJQgBgIgFgGQgFgGgHAAQgIAAgFAGg");
	this.shape_37.setTransform(91.45,72.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMA4IAAhvIAZAAIAABvg");
	this.shape_38.setTransform(84.875,71.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIAoAAQANAAAJAFQAIAEAFAIQAEAHAAAKQAAAJgEAIQgEAHgJAEQgJAFgNAAIgPAAIAAAmgAgOgFIAOAAQAHAAADgDQAEgEAAgGQAAgGgEgEQgDgDgHAAIgOAAg");
	this.shape_39.setTransform(78.425,71.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAQArIAAgtQAAgIgEgFQgFgFgHAAQgGAAgFAFQgEAFAAAIIAAAtIgaAAIAAhTIAaAAIAAALQAEgGAGgDQAGgEAIAAQAPAAAJAKQAJAKAAAQIAAAxg");
	this.shape_40.setTransform(66.625,72.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgJQgGgKAAgNQAAgMAGgKQAGgKAKgFQAKgFALAAQAMAAAKAFQAKAFAGAKQAGAKAAAMQAAANgGAKQgGAJgKAGQgKAFgMAAQgMAAgJgFgAgLgPQgFAGAAAJQAAAKAFAFQAEAGAHAAQAHAAAFgGQAGgFAAgKQAAgJgGgGQgFgFgHAAQgGAAgFAFg");
	this.shape_41.setTransform(57.325,72.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMA8IAAhTIAZAAIAABTgAgKgjQgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_42.setTransform(50.825,70.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOA0QgOAAgIgHQgHgGAAgQIAAggIgLAAIAAgWIALAAIAAgUIAYAAIAAAUIARAAIAAAWIgRAAIAAAgQABAEACACQACABADAAIAJAAIAAAWg");
	this.shape_43.setTransform(45.35,71.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUAmQgJgGgGgJQgFgKAAgNQAAgMAFgKQAGgKAJgFQAKgFALAAQAQAAAKAIQALAIADAPIgbAAQgDgJgKAAQgGAAgFAFQgEAGAAAJQAAALAEAFQAFAFAGAAQAKAAADgJIAbAAQgDAOgLAJQgKAIgQAAQgLAAgKgFg");
	this.shape_44.setTransform(38.575,72.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAmQgJgGgGgJQgFgKAAgNQAAgMAFgKQAGgKAJgFQAKgFALAAQANAAAJAFQAKAFAFAJQAFAKAAANIAAAGIg5AAQAAAIAFAEQAEAFAGgBQAJAAAEgIIAbAAQgCAIgFAHQgGAHgIADQgIAEgLAAQgLAAgKgFgAAQgHQAAgGgFgEQgEgFgHAAQgFAAgFAFQgEADgBAHIAfAAIAAAAg");
	this.shape_45.setTransform(29.425,72.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANA0QgNAAgHgHQgIgGAAgQIAAggIgKAAIAAgWIAKAAIAAgUIAZAAIAAAUIARAAIAAAWIgRAAIAAAgQAAAEACACQABABAFAAIAJAAIAAAWg");
	this.shape_46.setTransform(21.8,71.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgJQgGgKAAgNQAAgMAGgKQAGgKAKgFQAKgFALAAQAMAAAKAFQAKAFAGAKQAGAKAAAMQAAANgGAKQgGAJgKAGQgKAFgMAAQgMAAgJgFgAgLgPQgFAGAAAJQAAAKAFAFQAEAGAHAAQAHAAAFgGQAGgFAAgKQAAgJgGgGQgFgFgHAAQgGAAgFAFg");
	this.shape_47.setTransform(14.675,72.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZArIAAhTIAZAAIAAANQAEgGAHgEQAHgEAIgBIAAAcIgHAAQgKAAgEAEQgFAEAAAKIAAAng");
	this.shape_48.setTransform(7.1,72.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIAoAAQANAAAJAFQAIAEAFAIQAEAHAAAKQAAAJgEAIQgEAHgJAEQgJAFgNAAIgPAAIAAAmgAgOgFIAOAAQAHAAADgDQAEgEAAgGQAAgGgEgEQgDgDgHAAIgOAAg");
	this.shape_49.setTransform(-0.475,71.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAtArIAAgtQAAgIgEgFQgFgEgHAAQgHAAgFAEQgEAFAAAIIAAAtIgZAAIAAgtQAAgIgEgFQgFgEgHAAQgIAAgDAEQgFAFAAAIIAAAtIgZAAIAAhUIAZAAIAAALQAEgFAGgDQAHgEAHAAQAKAAAHAFQAHAEAEAHQAFgGAHgFQAIgFAJAAQAPAAAJAKQAJAKAAAQIAAAxg");
	this.shape_50.setTransform(46.8,58.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgGgJQgGgKAAgNQAAgMAGgKQAGgKAKgFQAKgFALAAQAMAAAKAFQAKAFAGAKQAGAKAAAMQAAANgGAKQgGAJgKAGQgKAFgMAAQgMAAgJgFgAgLgOQgFAFAAAJQAAAKAFAFQAEAGAHAAQAHAAAFgGQAGgFAAgKQAAgJgGgFQgFgGgHAAQgGAAgFAGg");
	this.shape_51.setTransform(34.575,58.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AANA0QgNAAgHgHQgIgGAAgQIAAggIgKAAIAAgWIAKAAIAAgUIAZAAIAAAUIARAAIAAAWIgRAAIAAAgQAAAEACACQABABAFAAIAJAAIAAAWg");
	this.shape_52.setTransform(26.3,57.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAoQgJgEgFgHQgFgGAAgJIAZAAQAAAFAEADQAEACAEAAQAFAAACgCQADgBAAgDQAAgEgEgCIgLgDIgPgFQgGgDgEgEQgFgEAAgJQAAgHAEgHQAEgFAIgEQAIgDAJAAQAQAAAJAIQAJAHACAOIgYAAQgBgFgDgDQgDgCgFAAQgEAAgCABQgDACAAAEQAAADAEACIALAEIAPAEQAGADAFADQAEAGAAAJQAAAHgEAGQgEAFgIAEQgIADgKAAQgKAAgIgDg");
	this.shape_53.setTransform(19.325,58.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgZAmQgIgEgEgJQgEgIAAgKIAAgxIAaAAIAAAtQAAAJAEAEQAFAFAGAAQAHAAAFgFQAEgEAAgJIAAgtIAaAAIAABUIgaAAIAAgMQgEAFgGAEQgGADgIABQgKgBgHgEg");
	this.shape_54.setTransform(10.325,58.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZAvQgMgHgGgMQgIgMAAgQQAAgOAIgNQAGgMAMgHQANgHAOAAQASAAAOAKQANAKAEARIgcAAQgCgGgHgEQgFgDgIAAQgLAAgHAIQgHAIAAANQAAAOAHAIQAHAJALAAQAIAAAFgEQAHgDACgHIAcAAQgEARgNAKQgOAKgSAAQgOAAgNgHg");
	this.shape_55.setTransform(0.2,57.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_56.setTransform(46.3,104.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-6.8,-2.9,121.39999999999999,108.2), null);


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
	this.shape.graphics.f("#14A751").s().p("AgjBEQgEgEAAgEQAAgFADgFQAEgFAEAAQADAAAFAEQAEADADAAQAGAAADgNQABgFgCgIQgLgagXg2QgDgFgDgCIgIgCIAAgHIA0AAIAAAHIgIABQgEABACAFIAVA4IABAAQALgiAGgWQABgFgEgBIgKgBIAAgHIAnAAIAAAHQgIABgCADQgCABgDAIIghBXQgHAUgHAIQgHAGgJAAQgHAAgEgDg");
	this.shape.setTransform(106.55,124.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgZBHIAAgHQAJAAACgCQACgBAAgHIAAhmQAAgJgFgBIgHgBIAAgHIAkgEIABABIAAB7QAAAHADABQACACAIAAIAAAHg");
	this.shape_1.setTransform(98.675,119.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgZBFIAAgIQAJAAACgBQACgCAAgHIAAg3QAAgKgFAAIgHgBIAAgGIAkgGIABABIAABNQAAAHACACQACABAJAAIAAAIgAgLgqQgEgEAAgHQAAgGAEgFQAEgDAHAAQAGAAAEADQAEAFAAAGQAAAHgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_2.setTransform(93.125,119.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAkAxIAAgIIAJgBQACgCAAgGIAAgtQAAgUgPAAQgOAAgDANIgBAKIAAAqQAAAGACACQABABAIAAIAAAIIgxAAIAAgIQAIAAABgBQADgCAAgGIAAgtQAAgUgPAAQgPgBgDAOIgBAKIAAAqQgBAGADACIAJABIAAAIIgzAAIAAgIQAJAAACgBQACgCAAgHIAAg3QAAgKgFAAIgHgBIAAgGIAkgGIADANIAOgJQAJgEAJgBQARABAIAPIAPgKQAKgFAJgBQAdABAAAeIAAAwQAAAHADACQABABAJAAIAAAIg");
	this.shape_3.setTransform(81.05,121.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_4.setTransform(66.125,121.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgyBDIAAgHQALgBADgCQACgBAAgIIAAhfQAAgIgCgBQgDgCgLgBIAAgHIBlAAIAAAjIgHAAQgFgPgEgFQgGgGgPAAIgNAAIgFABIgBAGIAAAvIAVAAQAKAAADgEQADgDACgLIAHAAIAAAsIgHAAQgCgLgDgDQgDgEgKAAIgVAAIAAArQAAAIADABQACACANABIAAAHg");
	this.shape_5.setTransform(53.725,119.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgmAxIAAgIQAJAAACgBQACgCAAgHIAAg3QAAgKgFAAIgHgBIAAgGIAkgGIABAQIAPgMQAFgFAGAAQANABAAANQAAAFgEAFQgDAFgGAAQgCAAgFgDQgGgFgEAAQgIAAAAAQIAAAqQAAAHADACQACABAMAAIAAAIg");
	this.shape_6.setTransform(39.875,121.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgrAUIAAguQAAgLgFAAIgHgBIAAgHIAlgDIABABIAAA8QAAAWARAAQALAAAEgKQACgEAAgIIAAgnQAAgLgFAAIgHgBIAAgHIAlgDIABABIAABMQAAAHADACQACABAIAAIAAAIIgmAAIgBgLIgNAIQgJAFgLAAQgbAAAAgdg");
	this.shape_7.setTransform(30.225,121.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgwAAQAAgxAwAAQAxAAAAAxQAAAygxAAQgwAAAAgygAgUAAQAAApAUAAQAVAAAAgpQAAgogVAAQgUAAAAAog");
	this.shape_8.setTransform(18.475,121.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AghBDIAAgHQANgBADgCQADgBAAgIIAAgdQAAgGgDgHIgeg2QgEgHgCgBQgDgCgHgBIAAgHIA7AAIAAAHIgLACQgFAAADAGIAaA0IAAAAQAPgcAKgXQACgHgGgBIgKgBIAAgHIAsAAIAAAHQgIABgDACQgDACgEAGQgKAPgSAlQgEAHABAGIAAAfQAAAIADABQACACAOABIAAAHg");
	this.shape_9.setTransform(7.25,119.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgjBHIAAgHQAJAAACgCQACgBAAgHIAAhDIgMAAIAAgJIAMAAIAAgGQAAgVAKgLQAJgKAQAAQAMAAAGAFQAFAEAAAFQAAAFgEADQgEAEgEAAQgGAAgCgFQgFgNgEAAQgGAAABALIACAdIASAAIAAAJIgSAAIAABDQAAAHACABQACABAKABIAAAHg");
	this.shape_10.setTransform(116.225,96.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AgwAAQAAgxAwAAQAxAAAAAxQAAAygxAAQgwAAAAgygAgUAAQAAApAUAAQAVAAAAgpQAAgogVAAQgUAAAAAog");
	this.shape_11.setTransform(106.475,99.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgrAAQAAgVAKgNQAMgPAXAAQAYAAALAPQAHAKAAAPQAAAJgKAAIgxAAQgBAkAaAAQARAAAJgSIAHAEQgLAcgeAAQgtAAAAgygAgMgeQgDAJAAAMIAaAAQAGAAAAgHQAAgYgPAAQgJAAgFAKg");
	this.shape_12.setTransform(88.975,99.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgmAwIAAgGQAJgBACgCQACgBAAgGIAAg5QAAgIgFgBIgHgBIAAgHIAkgFIABARIAPgOQAFgDAGAAQANAAAAAMQAAAGgEAFQgDAFgGAAQgCAAgFgDQgGgFgEAAQgIAAAAARIAAAqQAAAGADABQACACAMABIAAAGg");
	this.shape_13.setTransform(81.325,99.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_14.setTransform(71.225,99.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("Ag6ABQAAgfARgTQATgUAlAAQAaAAAPAIIAAAiIgHAAQgFgQgGgIQgJgKgQAAQgWAAgKAYQgHAPAAAWQAAAXAIAPQAKAYAWAAQAQAAAJgLQAGgIAHgSIAHAAIgDAkQgPAJgdAAQhGAAAAhFg");
	this.shape_15.setTransform(58.275,97.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgrAAQAAgVAKgNQAMgPAXAAQAYAAALAPQAHAKAAAPQAAAJgKAAIgxAAQgBAkAaAAQARAAAJgSIAHAEQgLAcgeAAQgtAAAAgygAgMgeQgDAJAAAMIAaAAQAGAAAAgHQAAgYgPAAQgJAAgFAKg");
	this.shape_16.setTransform(39.725,99.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAlBHQgRAAgJgLQgLgNgMgZIAAgBIAagmQAEgFAGAAIAaAAIAAAGQgXAEgIAHIgMAMQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAPAZASAVQAHAIAHACIAAAGgAg1BHIAAgHQAJAAACgCQACgBAAgHIAAhmQAAgJgFgBIgHgBIAAgHIAmgEIABABIAAB7QAAAHACABQACACAIAAIAAAHg");
	this.shape_17.setTransform(29.5,96.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_18.setTransform(17.625,99.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AghBDIAAgHIALgBQAFAAACgDQABgCABgGIAAhpIgJAAQgOAAgEAGQgEAFgFAQIgIAAIAAgkIBzAAIAAAkIgIAAQgFgRgEgEQgFgGgNAAIgJAAIAABpQABAGABACQABADAGAAIAKABIAAAHg");
	this.shape_19.setTransform(7.2,97.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgjBEQgFgDABgGQgBgEAEgGQAEgEAEAAQADAAAFAEQAEADADAAQAGAAADgNQABgFgCgIQgLgagXg1QgDgGgDgCIgIgBIAAgIIA0AAIAAAIIgIABQgEAAACAGIAVA3IAAAAQAMgiAGgVQACgGgFAAIgJgBIAAgIIAmAAIAAAIQgIAAgCACQgCACgDAHIghBYQgGAUgIAHQgHAHgKAAQgFAAgFgDg");
	this.shape_20.setTransform(58.2,79.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgZBHIAAgHQAJAAACgCQACgBAAgHIAAhmQAAgJgFgBIgHgBIAAgHIAkgEIABABIAAB7QAAAHADABQACACAIAAIAAAHg");
	this.shape_21.setTransform(50.325,74.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgZBEIAAgGQAJgBACgCQACgBAAgGIAAg5QAAgIgFgBIgHgBIAAgHIAkgFIABABIAABOQAAAGACABQACACAJABIAAAGgAgLgqQgEgEAAgGQAAgHAEgEQAEgFAHAAQAGAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgGAAQgHAAgEgFg");
	this.shape_22.setTransform(44.525,74.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAlAwIAAgGIAIgCQACgCABgFIAAgvQgBgTgQgBQgNABgEAOIAAAJIAAArQAAAFACACQABABAHABIAAAGIgvAAIAAgGQAHgBABgBQACgCABgFIAAgvQAAgTgPgBQgOABgFAOIgBAJIAAArQABAFACACIAIACIAAAGIgyAAIAAgGQAJgBACgCQACgBAAgGIAAg5QAAgIgFgBIgHgBIAAgHIAkgFIACANIAQgJQAJgFAIABQARAAAIAOIAOgJQALgGAIABQAegBAAAfIAAAxQAAAGACABQACACAJABIAAAGg");
	this.shape_23.setTransform(32.4,76.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAIAmIgKAIQgIAEgIAAQgOAAgIgJQgHgHAAgMQAAgRAUgGQAegKAFgEIAAgJQAAgQgMAAQgLAAgGATQgCAHgGAAQgEAAgFgCQgGgEAAgFQAAgJALgHQAMgIATAAQAkAAAAAcIAAArQAAANAFACQADABAGgBIAAAHQgLAGgOAAQgLAAgEgMgAgKACQgKAFAAAMQAAAHAFAFQAEAFAGAAQANAAAAgPIAAgbg");
	this.shape_24.setTransform(17.975,76.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("AgyBDIAAgHQALgBADgCQACgBAAgIIAAhfQAAgIgCgBQgDgCgLgBIAAgHIBlAAIAAAjIgHAAQgFgPgEgFQgGgGgPAAIgNAAIgFABIgBAGIAAAvIAVAAQAKAAADgEQADgDACgLIAHAAIAAAsIgHAAQgCgLgDgDQgDgEgKAAIgVAAIAAArQAAAIADABQACACANABIAAAHg");
	this.shape_25.setTransform(6.775,74.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgmAxIAAgIQAJAAACgBQACgCAAgGIAAg4QAAgKgFAAIgHgBIAAgGIAkgGIABARIAPgNQAFgFAGAAQANABAAANQAAAGgEAEQgDAFgGAAQgCAAgFgDQgGgFgEAAQgIAAAAAQIAAArQAAAGADACQACABAMAAIAAAIg");
	this.shape_26.setTransform(65.075,54);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgrAUIAAguQAAgLgFAAIgHgBIAAgHIAlgDIABABIAAA8QAAAWARAAQALAAAEgLQACgDAAgIIAAgnQAAgLgFAAIgHgBIAAgHIAlgDIABABIAABNQAAAGADACQACABAIAAIAAAIIgmAAIgBgLIgNAIQgJAFgLAAQgbAAAAgdg");
	this.shape_27.setTransform(55.425,54.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("AgxAzQgQgSAAghQAAggAQgSQARgTAgAAQAgAAARATQARASAAAgQAAAhgRASQgRATggAAQggAAgRgTgAghAAQAAA+AhAAQAhAAAAg+QAAg9ghAAQghAAAAA9g");
	this.shape_28.setTransform(41.875,52.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgKA3QgIgHAAgLIAAg/IgMAAIAAgJIANAAIAQgZIAJAAIAAAZIAUAAIAAAJIgUAAIAAA3QgBASAMAAQAFAAAFgCIACAGQgPAKgMAAQgIAAgGgGg");
	this.shape_29.setTransform(26.6,53.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgrAAQAAgVAKgNQAMgPAXAAQAYAAALAPQAHAKAAAPQAAAJgKAAIgxAAQgBAkAaAAQARAAAJgSIAHAEQgLAcgeAAQgtAAAAgygAgMgeQgDAJAAAMIAaAAQAGAAAAgHQAAgYgPAAQgJAAgFAKg");
	this.shape_30.setTransform(17.625,54.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag0BDIAAgHQALgBADgCQACgBAAgIIAAhfQAAgIgCgBQgDgCgLgBIAAgHIA+AAIAAAHQgMABgCACQgDABAAAIIAABbQAAAJAEADQADACAOAAQAPAAAGgHQAFgFAGgSIAHAAIgDAng");
	this.shape_31.setTransform(6.975,52.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAKAyQgKAAgGgFQgGgGAAgLIAAgsIgKAAIAAgNIAKAAIAAgUIAPAAIAAAUIAUAAIAAANIgUAAIAAAsQAAAEACACQADACAFAAIAKAAIAAAOg");
	this.shape_32.setTransform(125.725,22.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUAoIAAgrQAAgLgFgFQgGgGgJAAQgIAAgGAGQgFAFAAALIAAArIgQAAIAAhOIAQAAIAAAJQAEgFAGgDQAHgDAFAAQAKABAHAEQAIADAEAIQAEAHABALIAAAug");
	this.shape_33.setTransform(118.75,23.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_34.setTransform(110.175,23.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAxAoIAAgrQgBgLgFgFQgGgGgIAAQgKAAgFAGQgFAFgBALIAAArIgPAAIAAgrQAAgLgFgFQgGgGgJAAQgKAAgEAGQgGAFAAALIAAArIgRAAIAAhOIARAAIAAAJQAEgFAGgDQAGgDAIAAQAJABAIAEQAGADAEAIQAEgHAHgEQAIgFAJAAQAJABAIAEQAHADAEAIQAEAHABALIAAAug");
	this.shape_35.setTransform(98.9,23.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_36.setTransform(87.525,23.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYA1QgLgIgBgNIAQAAQACAGAGAEQAHAEAHAAQAKAAAGgGQAGgGAAgMIAAgNQgEAFgHAEQgHAEgJAAQgKAAgJgFQgIgGgFgJQgFgIAAgMQAAgMAFgKQAFgJAIgFQAJgFAKAAQAJAAAHADQAHAEAEAGIAAgMIARAAIAABQQAAALgFAJQgEAIgKAFQgIAFgMAAQgQAAgKgHgAgLgqQgGADgDAGQgDAGAAAJQAAAIADAGQADAFAGAEQAGADAFAAQAHAAAFgDQAGgEADgFQADgGAAgIQAAgIgDgHQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_37.setTransform(78.4,25.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAkQgJgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAJgFQAIgFALAAQAIAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgIgFgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAFADAGAAQAHAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgHQgDgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_38.setTransform(69.1,23.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAUAoIAAgrQAAgLgFgFQgGgGgJAAQgIAAgGAGQgFAFAAALIAAArIgQAAIAAhOIAQAAIAAAJQAEgFAGgDQAHgDAFAAQAKABAHAEQAIADAEAIQAEAHAAALIAAAug");
	this.shape_39.setTransform(60.35,23.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAkQgJgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAJgFQAIgFALAAQAIAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgIgFgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAGADAFAAQAHAAAFgDQAFgEADgGQAEgGAAgIQAAgHgEgHQgDgGgFgDQgFgDgHAAQgFAAgGADg");
	this.shape_40.setTransform(51.45,23.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAkAyIAAhEIgeBEIgLAAIgehEIAABEIgRAAIAAhjIASAAIAiBOIAjhOIASAAIAABjg");
	this.shape_41.setTransform(40.9,22.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKAyQgKAAgGgFQgGgGAAgLIAAgsIgKAAIAAgNIAKAAIAAgUIAPAAIAAAUIAUAAIAAANIgUAAIAAAsQAAAEACACQADACAFAAIAKAAIAAAOg");
	this.shape_42.setTransform(29.175,22.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAmQgIgEgEgGQgFgFAAgIIARAAQABAFAEAEQAEADAGAAQAHAAAEgDQADgCAAgEQAAgFgDgCIgNgFIgPgFQgFgBgEgFQgFgEAAgIQAAgHAEgFQAEgFAHgDQAHgDAIAAQANAAAJAHQAIAGABAMIgRAAQAAgFgEgDQgEgDgGAAQgGAAgDACQgEADAAAEQAAADACACQADACADABIAIADIAPAFQAFACAFAEQAEAFAAAHQAAAHgEAGQgEAFgGADQgHADgJAAQgJAAgHgDg");
	this.shape_43.setTransform(23.15,23.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_44.setTransform(15.225,23.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIAiAAQALAAAIAEQAIAEAEAGQAEAHAAAJQAAAHgEAHQgDAGgIAEQgIAEgMAAIgRAAIAAApgAgRgDIARAAQAJAAAEgEQAFgFAAgHQAAgRgSAAIgRAAg");
	this.shape_45.setTransform(6.95,22.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgZA7IARgnIgghNIATAAIAVA7IAYg7IAQAAIgvB0g");
	this.shape_46.setTransform(84.55,9.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAoIAAhOIAQAAIAAAMQADgHAGgDQAGgEAIAAIAAARIgEAAQgKAAgEAGQgEAEgBANIAAAog");
	this.shape_47.setTransform(78.15,7.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgFQAJgFAKAAQAMAAAJAFQAIAFAFAIQAFAJAAAMIAAAHIg8AAQAAAKAHAFQAGAGAIAAQAOAAAFgLIASAAQgEALgJAHQgKAHgOAAQgKAAgJgFgAAWgGQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAFgBAKIArAAIAAAAg");
	this.shape_48.setTransform(71.225,8.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJAoIgehPIASAAIAVBAIAXhAIARAAIgeBPg");
	this.shape_49.setTransform(63.15,8.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAJgFAKAAQAJAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgHADQgIAEgIAAQgKAAgJgFgAgLgXQgGADgDAGQgDAGAAAIQAAAIADAGQADAGAGAEQAGADAFAAQAHAAAFgDQAGgEADgGQADgGAAgIQAAgHgDgHQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_50.setTransform(54.1,8.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAyIAAhjIAQAAIAABWIAhAAIAAANg");
	this.shape_51.setTransform(46.275,6.975);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgTAoIAAhOIARAAIAAAMQACgHAGgDQAGgEAIAAIAAARIgEAAQgJAAgGAGQgDAEAAANIAAAog");
	this.shape_52.setTransform(36.95,7.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHA4IAAhPIAPAAIAABPgAgHglQgCgDAAgEQAAgFACgDQAEgDADAAQAFAAACADQADADAAAFQAAAEgDADQgCADgFAAQgDAAgEgDg");
	this.shape_53.setTransform(32.55,6.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAJgFAKAAQAJAAAHADQAHAEAEAGIAAgMIARAAIAABPIgRAAIAAgMQgEAGgIADQgGAEgJAAQgKAAgJgFgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAFADAGAAQAGAAAGgDQAFgEADgGQAEgGAAgIQAAgHgEgHQgDgGgFgDQgGgDgGAAQgGAAgFADg");
	this.shape_54.setTransform(25.95,8.025);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMAyQgHgDgEgGIAAAMIgRAAIAAhqIARAAIAAAnQAEgGAHgEQAHgDAIAAQALAAAJAFQAIAFAFAJQAFAJAAAMQAAAMgFAJQgFAJgJAGQgIAFgLAAQgIAAgHgEgAgLgKQgGADgDAGQgDAGAAAIQAAAIADAGQADAGAGAEQAGADAFAAQAGAAAGgDQAFgEAEgGQADgGAAgIQAAgJgDgFQgEgGgFgDQgGgDgGAAQgFAAgGADg");
	this.shape_55.setTransform(17.175,6.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAcAyIgHgUIgpAAIgHAUIgRAAIAkhjIASAAIAkBjgAARAQIgRguIgPAuIAgAAg");
	this.shape_56.setTransform(7.4,6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(0,0,128.1,132.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AANAgIgNgqIAAAAIgNAqIgOAAIgRg1QgBgDgCgBIgGgCIAAgEIAiAAIAAAEIgEABQgDAAAAAEIALAlIAAAAIAOguIALAAIAPAuIABAAIAJglQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgBIAAgEIAbAAIAAAEIgIACIgCAFIgRA0g");
	this.shape.setTransform(95,13.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAAQABghAgAAQAiAAAAAhQAAAigiAAQggAAgBgigAgOABQAAAcAOAAQAOAAAAgdQAAgbgOAAQgOAAAAAcg");
	this.shape_1.setTransform(85.9,13.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAuIgwhLIgBAAIAAArIABATQAAAGADABIAJABIAAAFIggAAIAAgFIAIgBQACgCABgFIABgTIAAguQAAgFgCgBQgBgCgIAAIAAgFIAeAAIArBAIAAAAIAAggIAAgUQgBgFgDgBIgJgBIAAgFIAgAAIAAAFIgIABQgCACAAAEIgBAUIAAA7g");
	this.shape_2.setTransform(76.9,12.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAcIgCgTIAFAAQAGATANABQADAAADgDQADgCAAgEQAAgHgNgGQgKgEgFgDQgEgEAAgIQAAgKAHgGQAGgFAMAAQALAAAIAEIAAASIgFAAQgCgIgDgDQgFgFgFAAQgDAAgDADQgCACAAADQAAAHAMAFQALADAFAEQAEAFAAAIQAAAKgHAGQgIAFgLAAQgOAAgHgGg");
	this.shape_3.setTransform(64,13.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAiQgFgIAAgMIAAgwQAAgFgCgBIgIgCIAAgEIApAAIAAAEIgJACQgCABAAAFIAAAxQAAAaARAAQATAAAAgaIAAgxQAAgFgCgBIgJgCIAAgEIAoAAIAAAEIgJACQgBABAAAFIAAAwQAAALgEAIQgIAOgaAAQgYAAgIgNg");
	this.shape_4.setTransform(55.975,12.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgGIAIAAIALgQIAGAAIAAAQIAOAAIAAAGIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_5.setTransform(45.525,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAaQgHgJgBgQQABgPAHgJQAKgKAPAAQAKAAAHAEQAHAEAAAGQAAAEgEADQgDABgDAAQgFAAgBgEQgDgMgHAAQgEAAgDAGQgFAHAAAMQABANAFAIQAEAGAHAAQALAAAHgNIAFACQgHAUgWAAQgNAAgJgIg");
	this.shape_6.setTransform(39.6,13.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAaIgHAGQgGACgFAAQgKAAgFgFQgFgGAAgIQAAgMAOgEQAUgGADgDIAAgGQAAgLgIAAQgHAAgEANQgCAFgEAAQgDAAgDgCQgEgCAAgDQAAgIAHgEQAJgFANAAQAYAAAAATIAAAdQAAAJAEABIAGABIAAAEQgIAEgJAAQgIAAgCgIgAgGABQgHAEAAAIQAAAFADAEQACACAFAAQAIABAAgLIAAgSg");
	this.shape_7.setTransform(32.175,13.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAmQgFgEAAgJIAAgrIgIAAIAAgGIAIAAIALgQIAGAAIAAAQIAOAAIAAAGIgOAAIAAAmQAAANAIAAQAEgBADgBIABAEQgKAGgIABQgGgBgEgDg");
	this.shape_8.setTransform(26.825,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFAhIAAgFIAFgBQACgBAAgEIAAggQAAgNgLAAQgHAAgEAIIgBAHIAAAeQAAAEACABIAGABIAAAFIgjAAIAAgFQAFAAACgBQABgBABgEIAAgnQgBgGgDAAIgEgBIAAgEIAYgEIACAJIALgGQAGgDAEAAQAVAAAAAUIAAAiQAAAEABABQABABAHAAIAAAFg");
	this.shape_9.setTransform(20.85,13.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAAQAAghAgAAQAiAAgBAhQABAigiAAQggAAAAgigAgNABQAAAcANAAQAOAAAAgdQAAgbgOAAQgNAAAAAcg");
	this.shape_10.setTransform(12.7,13.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnABQAAgVALgNQANgOAZAAQASAAALAGIAAAXIgFAAQgEgLgEgFQgGgHgLAAQgPAAgHAQQgEAKAAAPQAAAPAFALQAHAQAPAAQAKAAAHgHQAEgFAEgNIAFAAIgBAZQgLAGgUAAQgvAAAAgvg");
	this.shape_11.setTransform(3.325,12.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("An+CkQgdAAgUgVQgVgUAAgdIAAi7QAAgdAVgUQAUgVAdAAIP9AAQAdAAAUAVQAVAUAAAdIAAC7QAAAdgVAUQgUAVgdAAg");
	this.shape_12.setTransform(48.075,18.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-10,2,116.2,32.8), null);


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

	// Logo
	this.instance = new lib.text1();
	this.instance.setTransform(108.35,60.05,0.0862,0.0862,0,0,0,482.6,68.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABnIAAjOMD4xAAAIAADOg");
	this.shape.setTransform(107.451,51.8994,0.0862,0.0862);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgzgSkIAqBdMggzASkg");
	this.shape_1.setTransform(32.1253,34.8682,0.0862,0.0862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gmgMl7QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA9ATQB/AnAMF6QAMF7htHxQhuHximFFQhOCZhKBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(12.234,55.6841,0.0862,0.0862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzihQj0lTjFoPQjFoNgjmVQgRi/Ach1QAdh4BIgXQBJgWBoBPQBkBMB0ChQDzFTDFIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(23.3109,55.0268,0.0862,0.0862);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nuhTmNQgoi7ALh3QAMh7BBghQBBggBrBBQBoA+CACQQEOEvD7HwQD7HuBTGNQAoC7gLB3QgMB8hBAgQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(12.6672,29.495,0.0862,0.0862);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(112,37.9,0.0863,0.0863,0,0,0,852.4,162.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AsVQcMAXVghyIBWA7MgXVAhyg");
	this.shape_5.setTransform(27.9979,28.8388,0.0863,0.0863);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("Ag+FKQoQg9ljiMQinhChWhGQhYhJANhDQAMhDBwgyQBsgwC5gZQGIg1IPA9QIQA9FjCMQCnBCBWBFQBYBJgNBDQgaCJmHA2Qi2AZjUAAQjzAAkaghg");
	this.shape_6.setTransform(3.3626,40.7019,0.0863,0.0863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-7.6,19.1,203.7,46.99999999999999), null);


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

	// Bug
	this.instance_7 = new lib.TICK_1("synched",0);
	this.instance_7.setTransform(22.45,261.5,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},102).wait(258));

	// Img2
	this.instance_8 = new lib.Img2();
	this.instance_8.setTransform(150,105,1,1,0,0,0,150,105);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// Img1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(150,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-19.2,383.5,351.59999999999997);


// stage content:
(lib.WFSB_217810_MM_300x250 = function(mode,startPosition,loop,reversed) {
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