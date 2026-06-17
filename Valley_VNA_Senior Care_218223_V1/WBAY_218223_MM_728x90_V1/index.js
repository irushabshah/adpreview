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



(lib.Bg = function() {
	this.initialize(img.Bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,73);// helper functions:

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


(lib.T2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAiQgLgMABgWQgBgUALgMQAKgMATAAQATAAAKAMQAMAMAAAUQAAAVgMAMQgKAMgTAAQgTAAgKgLgAgVgaQgHAKAAAQQAAASAHAJQAHAJAOAAQAOAAAIgJQAIgJgBgSQABgRgIgJQgIgJgOAAQgOAAgHAJg");
	this.shape.setTransform(139.1,45.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAsIAAhOIgcAAIAAgJIBBAAIAAAJIgcAAIAABOg");
	this.shape_1.setTransform(130.9,45.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAXAAQAgAAAAAZQAAAOgKAGQgIAIgQgBIgLAAIAAAjgAgRAAIAJAAQANAAAGgCQAGgFAAgKQAAgIgFgFQgGgEgLAAIgMAAg");
	this.shape_2.setTransform(124.1,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADAEAAAGQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_3.setTransform(114.625,45.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAvIAAgrQgBgHgDgEQgDgEgJAAQgJAAgEAGQgGAFAAAMIAAAjIgKAAIAAhdIAKAAIAAAdIAAAIIAAAAQADgFAGgCQAGgDAFAAQAMAAAGAGQAHAFgBAMIAAArg");
	this.shape_4.setTransform(144.5,30.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAZQgIgIAAgQQAAgQAIgJQAIgJAOAAIAJABIAIACIgDAJIgIgCIgGgBQgTAAAAAZQAAALAEAHQAFAHAJgBQAIABAJgEIAAAJQgHADgKAAQgNAAgIgJg");
	this.shape_5.setTransform(137.925,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgJAAIAAgFIAJgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAmQAAAFACAEQADADAFAAIAGgBIADAAIAAAHIgEABIgGABQgSAAAAgUg");
	this.shape_6.setTransform(132.7,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAdQgFgFgBgJQAAgTAggBIALAAIAAgFQAAgHgDgEQgEgEgIABQgGAAgLAEIgDgIIAKgDIALgCQAMAAAGAFQAFAGABALIAAAsIgIAAIgCgKIAAAAQgFAHgFACQgFACgHAAQgJAAgGgFgAAHABQgMABgEADQgGADAAAHQAAAFAEADQACADAHAAQAIAAAFgFQAFgFABgKIAAgFg");
	this.shape_7.setTransform(126.95,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlAiIAAgqQAAgIgDgEQgDgEgIAAQgJAAgFAFQgEAGAAALIAAAkIgJAAIAAgqQAAgIgEgEQgDgEgHAAQgJAAgEAGQgFAFAAANIAAAiIgKAAIAAhCIAIAAIACAJIAAAAQADgEAGgDQAEgCAHgBQAPABAEAKIABAAQADgEAFgDQAFgEAIAAQALABAGAFQAFAGAAANIAAAqg");
	this.shape_8.setTransform(118.05,31.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAvIAAgIIAHABQAKAAAFgMIADgJIgahCIALAAIAOAmQAFAMAAAGIABAAIADgKIAQguIALAAIgdBKQgDAMgFAEQgGAFgIAAIgJgBg");
	this.shape_9.setTransform(228.1,17.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAhIAAgpQgBgIgDgEQgDgEgJAAQgJAAgFAFQgEAGAAANIAAAhIgKAAIAAhAIAIAAIACAJIAAAAQADgFAGgDQAFgDAFABQANgBAFAGQAHAGAAAMIAAAqg");
	this.shape_10.setTransform(221.25,16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAdQgGgFABgJQAAgTAegBIAMgBIAAgDQAAgJgEgDQgDgDgHgBQgIAAgKAGIgDgIIALgFIALgBQALAAAGAGQAGAEAAAMIAAAsIgIAAIgCgJIgBAAQgFAGgEACQgFACgGAAQgKAAgGgFgAAGABQgLAAgFAEQgFADAAAHQAAAGADACQADADAGAAQAJAAAFgFQAGgGgBgIIAAgHg");
	this.shape_11.setTransform(213.85,16.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAwIAAheIAIAAIACAJIAAAAQAEgGAFgCQAFgCAFAAQAOAAAHAJQAHAJAAAQQAAAPgHAJQgIAJgNAAQgEAAgGgCQgFgDgEgFIAAAAIAAALIAAAbgAgOghQgEAFAAANIAAACQAAANAEAGQAFAGAJAAQAJAAAFgHQAEgGAAgMQAAgNgEgGQgFgHgJAAQgJAAgFAGg");
	this.shape_12.setTransform(207.05,17.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlAhIAAgqQAAgHgDgEQgEgEgHAAQgJAAgEAFQgFAFAAALIAAAkIgJAAIAAgqQAAgHgDgEQgDgEgIAAQgJAAgFAFQgEAGAAANIAAAhIgKAAIAAhAIAIAAIACAJIABAAQACgFAGgDQAFgDAGABQAPgBAEAMIAAAAQADgFAGgEQAFgCAIAAQALgBAFAGQAGAGAAAMIAAAqg");
	this.shape_13.setTransform(197.4,16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgIAAgKQAAgPAIgJQAIgJANAAQAOAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAHAAALQAAAMAFAHQAFAHAJAAQAKAAAFgHQAFgHAAgMQAAgLgFgHQgFgGgKgBQgJABgFAGg");
	this.shape_14.setTransform(187.975,16.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAaQgIgKAAgQQAAgPAIgJQAIgJAOAAIAJABIAIADIgDAIIgIgDIgGAAQgTAAAAAYQAAAMAEAHQAFAGAJABQAIgBAJgDIAAAJQgHADgKAAQgNAAgIgIg");
	this.shape_15.setTransform(181.475,16.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARAvIAAgrQAAgHgDgEQgEgEgHAAQgKAAgFAGQgEAFAAAMIAAAjIgLAAIAAhdIALAAIAAAdIgBAIIABAAQADgFAFgCQAFgDAHAAQALAAAHAGQAFAFABAMIAAArg");
	this.shape_16.setTransform(171.45,14.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgKAAIAAgFIAKgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAmQAAAGADADQACADAGAAIAEAAIAFgBIAAAIIgGABIgFAAQgSAAAAgUg");
	this.shape_17.setTransform(165.5,15.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_18.setTransform(161.85,15.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARAhIgNgmIgEgQIAAAAIgEAQIgMAmIgLAAIgShBIAKAAIAKAlIADASIABAAIACgJIADgJIALglIAKAAIAMAlIAFASIAAAAIABgHIANgwIAKAAIgSBBg");
	this.shape_19.setTransform(155.55,16.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOAvIgWgfIgHAGIAAAZIgLAAIAAhdIALAAIAAAxIgBAKIABAAIAHgKIAVgVIALAAIgaAbIAcAmg");
	this.shape_20.setTransform(144.8,14.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAGAsIAAg9IAAgQIgCADIgOAMIgFgHIAWgSIAJAAIAABXg");
	this.shape_21.setTransform(136.825,15.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAiQgHgMAAgWQAAgWAHgLQAHgLAOAAQAOAAAIAMQAHALAAAVQAAAXgHALQgHALgPAAQgNAAgIgLgAgOgbQgEAJAAASQAAATAEAJQAFAJAJAAQAKAAAEgJQAFgJAAgTQAAgSgFgJQgEgIgKAAQgJAAgFAIg");
	this.shape_22.setTransform(130.625,15.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKAsIAAgUIgqAAIAAgJIApg6IALAAIAAA6IANAAIAAAJIgNAAIAAAUgAAFgXIgbAmIAgAAIAAgcIABgUIgBAAg");
	this.shape_23.setTransform(123.625,15.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADAEAAAGQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_24.setTransform(114.625,15.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAvIAAgIIAHABQALAAAEgMIADgJIgahCIALAAIAOAmQAFAMAAAGIABAAIADgKIAQguIALAAIgcBKQgDAMgGAEQgGAFgIAAIgJgBg");
	this.shape_25.setTransform(183.8,2.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAdQgGgFAAgJQABgTAfgBIALAAIAAgFQAAgHgDgEQgEgEgHABQgHAAgLAEIgDgIIAKgEIAMgBQALAAAGAFQAGAGgBALIAAAsIgHAAIgCgKIgBAAQgEAHgFACQgFACgGAAQgKAAgGgFgAAHABQgMAAgFADQgFAEAAAHQAAAFAEADQACADAHAAQAIAAAFgFQAFgFAAgKIAAgFg");
	this.shape_26.setTransform(177.1,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAXAAQAgAAAAAZQAAAOgJAHQgKAGgQAAIgKAAIAAAjgAgRAAIAKAAQAMAAAGgDQAGgEAAgKQAAgIgGgFQgFgEgMAAIgLAAg");
	this.shape_27.setTransform(170.5,-0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAvIAAgIIAHABQALAAAEgMIAEgJIgbhCIALAAIAOAmQAFAMAAAGIABAAIADgKIAQguIALAAIgcBKQgEAMgFAEQgGAFgIAAIgJgBg");
	this.shape_28.setTransform(160.2,2.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAdQgFgFgBgJQAAgTAggBIALAAIAAgFQAAgHgDgEQgEgEgIABQgGAAgLAEIgDgIIAKgEIALgBQAMAAAGAFQAFAGABALIAAAsIgIAAIgCgKIAAAAQgFAHgFACQgFACgHAAQgJAAgGgFgAAHABQgMAAgEADQgGAEAAAHQAAAFAEADQACADAHAAQAIAAAFgFQAFgFABgKIAAgFg");
	this.shape_29.setTransform(153.5,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAnQgHgJAAgRQAAgPAHgJQAHgJANAAQANAAAHAKIABAAIgBgFIAAgEIAAgbIAKAAIAABcIgIAAIgBgJIgBAAQgHAKgNAAQgNAAgHgIgAgNgFQgFAGABANQgBAMAFAHQAEAGAJAAQAJAAAFgFQAFgGAAgMIAAgDQAAgNgFgFQgFgGgJAAQgJAAgEAGg");
	this.shape_30.setTransform(146.35,-0.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQACABAAAEQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_31.setTransform(141.25,-0.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_32.setTransform(138.15,-0.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgHAAgLQAAgPAIgJQAIgJANAAQAOAAAIAJQAIAKAAAOQAAAQgIAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAGAAAMQAAANAFAGQAFAHAJAAQAKAAAFgGQAFgIAAgMQAAgMgFgGQgFgGgKAAQgJAAgFAGg");
	this.shape_33.setTransform(132.925,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXAsIAAgpIgtAAIAAApIgKAAIAAhXIAKAAIAAAmIAtAAIAAgmIAKAAIAABXg");
	this.shape_34.setTransform(124.65,-0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADADAAAHQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_35.setTransform(114.625,-0.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAeIAAgJIAKAEIAKABQAHAAAFgDQAEgCAAgFQAAgEgEgCQgDgDgJgEIgNgFQgEgCgBgEQgCgDAAgEQAAgJAGgEQAHgFAKAAQALAAAKAEIgEAIQgKgDgIAAQgGAAgDABQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQABACADACIAKAEQAMAEAEAEQAEAFAAAGQAAAJgHAFQgGAFgMAAQgNAAgHgEg");
	this.shape_36.setTransform(76.925,61.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgKAAIAAgFIAKgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAlQAAAHADADQADADAEAAIAFAAIAEgBIAAAHIgEACIgGAAQgSAAAAgUg");
	this.shape_37.setTransform(71.8,61.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AASAiIAAgqQAAgIgEgEQgDgEgIAAQgKAAgFAFQgEAGAAANIAAAiIgKAAIAAhBIAIAAIACAJIAAAAQADgFAGgDQAFgCAFAAQANgBAFAGQAHAGAAAMIAAArg");
	this.shape_38.setTransform(65.9,61.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgPQAAgPAIgKQAIgJAMAAQAMAAAIAIQAHAIAAANIAAAGIgsAAQAAALAFAHQAGAFAJABQALAAAKgFIAAAJIgKADIgLABQgOAAgIgIgAARgGQAAgJgEgEQgEgGgIABQgHgBgFAGQgEAEgBAJIAhAAIAAAAg");
	this.shape_39.setTransform(58.675,61.95);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAhIgZhBIALAAIAOAmIAFASIAAAAIAEgNIAQgrIALAAIgZBBg");
	this.shape_40.setTransform(52.125,61.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgPQAAgPAIgKQAIgJAMAAQAMAAAIAIQAHAIAAANIAAAGIgsAAQAAALAFAHQAGAFAJABQALAAAKgFIAAAJIgKADIgLABQgOAAgIgIgAARgGQAAgJgEgEQgEgGgIABQgHgBgFAGQgEAEgBAJIAhAAIAAAAg");
	this.shape_41.setTransform(45.625,61.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AARAiIAAgqQAAgIgDgEQgDgEgJAAQgJAAgEAFQgGAGAAANIAAAiIgKAAIAAhBIAIAAIACAJIABAAQADgFAFgDQAGgCAGAAQALgBAHAGQAFAGAAAMIAAArg");
	this.shape_42.setTransform(35.25,61.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgHAAgLQAAgPAIgJQAIgJANAAQAOAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAHAAALQAAANAFAGQAFAHAJAAQAKAAAFgGQAFgIAAgMQAAgLgFgHQgFgGgKAAQgJAAgFAGg");
	this.shape_43.setTransform(27.725,61.95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_44.setTransform(22.45,60.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgJAAIAAgFIAJgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAlQAAAHACADQAEADAFAAIAFAAIAEgBIAAAHIgGACIgFAAQgSAAAAgUg");
	this.shape_45.setTransform(18.75,61.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAdQgFgFAAgJQgBgTAggBIALgBIAAgDQAAgJgEgDQgDgDgIAAQgHgBgKAGIgDgIIALgFIAKgBQAMAAAGAGQAFAEABAMIAAAsIgIAAIgCgKIAAAAQgFAHgFACQgFACgHAAQgJAAgGgFgAAHABQgMAAgEADQgGAEAAAHQAAAFAEADQACADAHAAQAIAAAFgFQAFgGABgIIAAgGg");
	this.shape_46.setTransform(13,61.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_47.setTransform(8.3,60.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAaQgIgKAAgPQAAgQAIgJQAIgJAOAAIAJABIAIACIgDAJIgIgDIgGAAQgTAAAAAZQAAAMAEAGQAFAHAJAAQAIAAAJgEIAAAJQgHADgKAAQgNAAgIgIg");
	this.shape_48.setTransform(3.975,61.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgPQAAgPAIgKQAIgJAMAAQAMAAAIAIQAHAIAAANIAAAGIgsAAQAAALAFAHQAGAFAJABQALAAAKgFIAAAJIgKADIgLABQgOAAgIgIgAARgGQAAgJgEgEQgEgGgIABQgHgBgFAGQgEAEgBAJIAhAAIAAAAg");
	this.shape_49.setTransform(-2.525,61.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIAJAAIABAMIAAAAQADgGAFgEQAFgDAGAAIAIAAIgCAKIgHgBQgHgBgFAHQgGAGAAAKIAAAjg");
	this.shape_50.setTransform(-8.05,61.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcAwIAAheIAIAAIABAJIABAAQAEgGAFgCQAFgCAFAAQAOAAAHAJQAHAJAAAQQAAAPgHAJQgHAJgOAAQgFAAgFgCQgGgDgDgFIgBAAIABALIAAAbgAgNghQgFAFAAANIAAACQAAANAFAGQAFAGAIAAQAJAAAFgHQAFgGgBgMQABgNgFgGQgFgHgJAAQgJAAgEAGg");
	this.shape_51.setTransform(-14.6,63.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcAwIAAheIAIAAIABAJIABAAQAEgGAFgCQAFgCAGAAQANAAAHAJQAHAJAAAQQAAAPgHAJQgHAJgNAAQgGAAgFgCQgGgDgDgFIgBAAIABALIAAAbgAgNghQgFAFAAANIAAACQAAANAFAGQAFAGAIAAQAJAAAFgHQAFgGgBgMQABgNgFgGQgFgHgJAAQgJAAgEAGg");
	this.shape_52.setTransform(-22.15,63.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgUAdQgGgFABgJQAAgTAegBIAMgBIAAgDQAAgJgEgDQgDgDgHAAQgIgBgKAGIgDgIIALgFIALgBQALAAAGAGQAGAEgBAMIAAAsIgHAAIgCgKIgBAAQgFAHgEACQgFACgGAAQgKAAgGgFgAAGABQgKAAgGADQgFAEAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgGgBgIIAAgGg");
	this.shape_53.setTransform(-29.7,61.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSAZQgJgIAAgRQAAgPAIgIQAIgKAMAAQAMAAAIAIQAHAIAAAOIAAAFIgsAAQAAALAFAHQAGAFAJAAQALABAKgFIAAAJIgKADIgLABQgOAAgIgJgAARgFQAAgKgEgFQgEgEgIAAQgHAAgFAEQgEAFgBAKIAhAAIAAAAg");
	this.shape_54.setTransform(27.725,46.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAZQgJgIAAgRQAAgPAIgIQAIgKAMAAQAMAAAIAIQAHAIAAAOIAAAFIgsAAQAAALAFAHQAGAFAJAAQALABAKgFIAAAJIgKADIgLABQgOAAgIgJgAARgFQAAgKgEgFQgEgEgIAAQgHAAgFAEQgEAFgBAKIAhAAIAAAAg");
	this.shape_55.setTransform(20.875,46.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdAvIAAgIIAIABQAKAAAEgMIAEgJIgbhCIALAAIAOAmQAFAMAAAGIAAAAIAEgKIAQguIALAAIgcBKQgDAMgGAEQgGAFgIAAIgJgBg");
	this.shape_56.setTransform(14.3,48.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgIAAgKQAAgPAIgJQAIgJANAAQAOAAAIAJQAIAKAAAOQAAAQgIAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAGAAAMQAAANAFAGQAFAHAJAAQAKAAAFgGQAFgIAAgMQAAgMgFgGQgFgHgKABQgJgBgFAHg");
	this.shape_57.setTransform(7.475,46.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_58.setTransform(2.25,45.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgcAwIAAheIAIAAIABAJIABAAQAEgGAFgCQAFgCAFAAQAOAAAHAJQAHAJAAAQQAAAPgHAJQgHAJgOAAQgFAAgFgCQgGgDgDgFIgBAAIABALIAAAbgAgNghQgFAFAAANIAAACQAAANAFAGQAFAGAIAAQAJAAAFgHQAFgGgBgMQABgNgFgGQgFgHgJAAQgJAAgEAGg");
	this.shape_59.setTransform(-2.9,48.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAlAiIAAgqQAAgIgDgEQgDgEgIAAQgJAAgFAFQgEAGAAAKIAAAlIgJAAIAAgqQAAgIgEgEQgCgEgIAAQgJAAgFAGQgEAFAAANIAAAiIgKAAIAAhCIAIAAIACAJIAAAAQADgEAGgDQAEgCAHgBQAPABAEAKIAAAAQADgEAGgEQAFgDAIAAQALABAGAFQAFAGAAANIAAAqg");
	this.shape_60.setTransform(-12.55,46.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgYAsIAAhXIAxAAIAAAJIgmAAIAAAcIAjAAIAAAIIgjAAIAAAhIAmAAIAAAJg");
	this.shape_61.setTransform(-21.45,45.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADAEAAAGQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_62.setTransform(-30.575,45.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgdAvIAAgIIAIABQAJAAAFgMIAEgJIgbhCIALAAIAOAmQAFAMAAAGIAAAAIAEgKIAQguIALAAIgdBKQgDAMgFAEQgGAFgIAAIgJgBg");
	this.shape_63.setTransform(24.9,32.975);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgJAAIAAgFIAJgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAmQAAAFACAEQAEADAFAAIAFgBIAEAAIAAAHIgGABIgFABQgSAAAAgUg");
	this.shape_64.setTransform(19.65,30.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQACABAAAEQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_65.setTransform(15.95,30.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_66.setTransform(12.9,30.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQABABAAAEQAAADgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_67.setTransform(9.8,30.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJAtQgGgCgDgFIAAAAIgDAIIgHAAIAAhcIAKAAIAAAWIAAAOIAAAAQAHgKANAAQAMAAAIAJQAHAJAAAPQAAAQgHAJQgIAJgMAAQgFAAgGgCgAgOgFQgEAFAAANQAAAOAEAGQAFAGAKAAQAIAAAFgHQAEgGABgNQgBgNgEgFQgFgGgIAAQgKAAgFAGg");
	this.shape_68.setTransform(4.7,30.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDggQgCgCAAgDQAAgEACgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQACABAAAEQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_69.setTransform(-0.8,30.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AASAhIgSgbIgSAbIgLAAIAYghIgXggIAMAAIAQAaIARgaIAMAAIgXAgIAYAhg");
	this.shape_70.setTransform(-5.575,31.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgSAZQgJgIAAgQQAAgQAIgIQAIgKAMAAQAMAAAIAIQAHAIAAAOIAAAFIgsAAQAAALAFAHQAGAFAJAAQALABAKgFIAAAJIgKADIgLABQgOAAgIgJgAARgFQAAgJgEgGQgEgEgIAAQgHAAgFAEQgEAGgBAJIAhAAIAAAAg");
	this.shape_71.setTransform(-12.175,31.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_72.setTransform(-17.2,30.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYAsIAAhXIAxAAIAAAJIgmAAIAAAhIAjAAIAAAIIgjAAIAAAlg");
	this.shape_73.setTransform(-21.45,30.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADAEAAAGQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_74.setTransform(-30.575,30.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWAeIAAgJIAKAEIAKABQAHAAAFgCQAEgDAAgFQAAgEgEgDQgDgDgJgDIgNgFQgEgCgBgEQgCgDAAgFQAAgIAGgEQAHgFAKAAQALAAAKAEIgEAJQgKgFgIAAQgGAAgDACQgEADAAADQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQABACADACIAKAFQAMADAEAEQAEAFAAAGQAAAJgHAFQgGAFgMAAQgNAAgHgEg");
	this.shape_75.setTransform(21.075,16.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgQQAAgOAIgKQAIgJAMAAQAMAAAIAIQAHAIAAAOIAAAFIgsAAQAAAMAFAFQAGAHAJAAQALgBAKgEIAAAJIgKADIgLABQgOAAgIgIgAARgGQAAgIgEgFQgEgGgIAAQgHAAgFAGQgEAFgBAIIAhAAIAAAAg");
	this.shape_76.setTransform(14.725,16.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWAeIAAgJIAKAEIAKABQAHAAAFgCQAEgDAAgFQAAgEgEgDQgDgDgJgDIgNgFQgEgCgBgEQgCgDAAgFQAAgIAGgEQAHgFAKAAQALAAAKAEIgEAJQgKgFgIAAQgGAAgDACQgEADAAADQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQABACADACIAKAFQAMADAEAEQAEAFAAAGQAAAJgHAFQgGAFgMAAQgNAAgHgEg");
	this.shape_77.setTransform(8.375,16.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgUAcQgHgFAAgNIAAgqIAKAAIAAAqQAAAHAEAFQAEADAIAAQAJAAAFgFQAFgGgBgNIAAghIAKAAIAABAIgIAAIgBgJIgBAAQgDAFgFADQgGACgFAAQgNABgFgGg");
	this.shape_78.setTransform(1.6,16.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AASAhIAAgpQgBgIgDgEQgDgEgJAAQgJAAgEAFQgGAGAAANIAAAhIgJAAIAAhAIAIAAIABAJIABAAQADgFAGgDQAFgDAFABQANgBAFAGQAHAGgBAMIAAAqg");
	this.shape_79.setTransform(-5.9,16.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgIAAgKQAAgPAIgJQAIgJANAAQAOAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAHAAALQAAAMAFAHQAFAHAJAAQAKAAAFgHQAFgHAAgMQAAgLgFgHQgFgGgKgBQgJABgFAGg");
	this.shape_80.setTransform(-13.425,16.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIAZAAQARAAAIAGQAIAEAAAMQgBAHgEAGQgEAFgJACIAAAAQAUACAAASQABAMgJAGQgHAHgPAAgAgTAkIASAAQAKgBAFgEQAFgEABgIQgBgJgFgEQgGgDgJgBIgSAAgAgTgGIAQAAQAKAAAFgCQAFgEAAgIQAAgHgGgEQgEgDgLAAIgPAAg");
	this.shape_81.setTransform(-20.85,15.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADAEAAAGQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_82.setTransform(-30.575,15.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgSAZQgJgIAAgQQAAgQAIgIQAIgKAMAAQAMAAAIAIQAHAIAAANIAAAGIgsAAQAAALAFAHQAGAFAJAAQALABAKgFIAAAJIgKADIgLABQgOAAgIgJgAARgFQAAgJgEgGQgEgEgIAAQgHAAgFAEQgEAGgBAJIAhAAIAAAAg");
	this.shape_83.setTransform(68.825,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgPAZQgIgIAAgQQAAgQAIgJQAIgJAOAAIAJABIAIACIgDAJIgIgCIgGgBQgTAAAAAZQAAAMAEAGQAFAHAJgBQAIAAAJgDIAAAJQgHADgKAAQgNAAgIgJg");
	this.shape_84.setTransform(62.575,1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AASAiIAAgqQgBgIgDgEQgDgEgJAAQgJAAgEAGQgGAFAAANIAAAiIgJAAIAAhCIAIAAIABAJIABAAQADgEAGgDQAFgDAFAAQANAAAFAGQAHAGAAAMIAAArg");
	this.shape_85.setTransform(55.75,0.95);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgUAdQgGgFABgJQAAgTAegBIAMAAIAAgFQAAgHgEgEQgDgEgHABQgIAAgKAEIgDgIIALgEIAKgBQAMAAAGAFQAGAGAAALIAAAsIgIAAIgCgKIAAAAQgGAHgEACQgFACgHAAQgJAAgGgFgAAGABQgKAAgFADQgGAEAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgKIAAgFg");
	this.shape_86.setTransform(48.35,1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgSAiIAAhCIAIAAIABANIABAAQADgHAFgDQAFgEAGAAIAIABIgCAJIgGgBQgJAAgEAHQgGAHAAAJIAAAjg");
	this.shape_87.setTransform(43.1,0.95);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgUAcQgGgGgBgNIAAgqIAKAAIAAAqQAAAIAEAFQAEAEAHAAQAKAAAFgHQAFgFgBgNIAAgiIAKAAIAABCIgIAAIgBgJIgBAAQgDAEgFADQgGACgGABQgMgBgFgFg");
	this.shape_88.setTransform(36.35,1.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgWAeIAAgJIAKADIAKACQAHAAAFgDQAEgCAAgFQAAgEgEgCQgDgEgJgDIgNgFQgEgDgBgDQgCgDAAgEQAAgJAGgFQAHgEAKAAQALAAAKAEIgEAIQgKgDgIAAQgGAAgDABQgEACAAAFQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQABACADACIAKAEQAMAEAEAEQAEAEAAAHQAAAJgHAFQgGAFgMAAQgNAAgHgEg");
	this.shape_89.setTransform(29.725,1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AASAiIAAgqQAAgIgEgEQgEgEgHAAQgKAAgFAGQgEAFAAANIAAAiIgKAAIAAhCIAHAAIADAJIAAAAQADgEAGgDQAFgDAFAAQANAAAGAGQAFAGABAMIAAArg");
	this.shape_90.setTransform(23.05,0.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_91.setTransform(17.525,-0.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AASAvIAAgrQgBgHgDgEQgDgEgJAAQgJAAgFAGQgEAFAAAMIAAAjIgKAAIAAhdIAKAAIAAAdIgBAIIABAAQADgFAFgCQAGgDAFAAQANAAAFAGQAHAFAAAMIAAArg");
	this.shape_92.setTransform(8.85,-0.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgJAAIAAgFIAJgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAlQAAAGADAEQADADAFAAIAEgBIAFAAIAAAHIgGABIgFABQgSAAAAgUg");
	this.shape_93.setTransform(2.9,0.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_94.setTransform(-0.75,-0.375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgUAdQgFgFgBgJQAAgTAggBIALAAIAAgFQAAgHgEgEQgDgEgIABQgHAAgKAEIgDgIIALgEIAKgBQAMAAAGAFQAFAGABALIAAAsIgIAAIgCgKIAAAAQgFAHgFACQgFACgHAAQgJAAgGgFgAAHABQgMAAgEADQgGAEAAAHQAAAFAEADQACADAHAAQAIAAAFgFQAFgFABgKIAAgFg");
	this.shape_95.setTransform(-5.9,1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSAZQgJgIAAgQQAAgQAIgIQAIgKAMAAQAMAAAIAIQAHAIAAANIAAAGIgsAAQAAALAFAHQAGAFAJAAQALABAKgFIAAAJIgKADIgLABQgOAAgIgJgAARgFQAAgJgEgGQgEgEgIAAQgHAAgFAEQgEAGgBAJIAhAAIAAAAg");
	this.shape_96.setTransform(-12.525,1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAXAsIAAgpIgtAAIAAApIgLAAIAAhXIALAAIAAAmIAtAAIAAgmIALAAIAABXg");
	this.shape_97.setTransform(-20.55,-0.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgJALQgDgEAAgHQAAgGADgEQADgEAGAAQAGAAAEAEQADADAAAHQAAAHgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_98.setTransform(-30.575,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(-34.4,-10.4,267.4,80.80000000000001), null);


(lib.T1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBIQgFgFAAgJQAAgIAFgEQAEgFAIAAQAJAAAEAFQAFAEAAAIQAAAJgFAEQgEAFgJAAQgHAAgFgEgAgLAXIgFhiIAiAAIgFBig");
	this.shape.setTransform(81.875,53.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBLQgMgJAAgOQgBgLAHgGQAGgIANgCQgFgCgDgFQgEgFAAgFQAAgGAEgEQADgEAIgEQgJgFgGgIQgFgIAAgMQAAgTANgKQAMgKAWAAIAKABIAJABIAnAAIAAAQIgRAEQAEAIABAJQgBATgMAKQgNALgVAAIgHgBIgEgBQgEAEgBADQABAIARgBIASAAQASAAAKAJQAKAIAAAPQABAUgSALQgQALgfAAQgXAAgNgIgAgYAmQgFAFAAAGQgBAGAHAEQAGAEALAAQAQAAAJgEQAJgGAAgHQABgHgGgCQgFgDgMABIgPAAQgJAAgGADgAgSgrQAAAKAEAFQAFAGAIgBQAIABAEgGQAEgFAAgKQAAgUgQAAQgRAAAAAUg");
	this.shape_1.setTransform(72.95,57.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVA6IAAhCQABgMgFgGQgEgHgKABQgMAAgGAJQgFAIAAAUIAAA1IggAAIAAhxIAYAAIAEAPIACAAQAFgJAJgEQAJgEALAAQAUAAALALQAKALAAATIAABKg");
	this.shape_2.setTransform(60.35,55.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBPIAAhwIAfAAIAABwgAgQg/QAAgPAQAAQARAAAAAPQAAAHgFAFQgDADgJAAQgQAAAAgPg");
	this.shape_3.setTransform(50.35,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA6IAAhxIAYAAIAEATIABAAQAGgJAIgHQAJgFAKAAIALABIgDAdIgJgBQgPAAgHAIQgIAHAAANIAAA6g");
	this.shape_4.setTransform(43,55.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBPIAAhwIAdAAIAABwgAgQg/QAAgPAQAAQARAAAAAPQAAAHgEAFQgFADgIAAQgQAAAAgPg");
	this.shape_5.setTransform(34.55,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBKIAAhAIg7AAIAABAIgfAAIAAiTIAfAAIAAA6IA7AAIAAg6IAfAAIAACTg");
	this.shape_6.setTransform(23.4,53.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA5IgIgoIgMgxIAAAAIgVBZIghAAIgghxIAeAAIAOAzQADAMADAYIABAAQAAgIADgRIACgIIAOg2IAiAAIAMA2IACAGIABAJIACAKIABAIIABAAIADgUIADgQIAOgzIAeAAIggBxg");
	this.shape_7.setTransform(54.2,31.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA0QgNgIgHgNQgGgNAAgSQAAgbAOgPQAPgQAZAAQARAAAMAHQANAHAHANQAGAOAAARQAAAbgOARQgPAPgaAAQgQAAgMgHgAgRgYQgGAHAAARQAAAQAGAKQAFAIAMAAQAMAAAGgIQAFgJAAgRQAAgQgFgIQgGgJgMAAQgMAAgFAJg");
	this.shape_8.setTransform(38.825,31.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaBLIhAhwIgBAAIACAqIAABGIgcAAIAAiUIAnAAIBABuIABAAIgCgoIAAhGIAdAAIAACUg");
	this.shape_9.setTransform(23.9,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(13.2,12.5,74.1,56.8), null);


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
	this.instance.setTransform(1104,-387,1.0404,1.0404);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(1104,-387,345.4000000000001,76), null);


(lib.Hdr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgQBfQgHgGABgLQgBgLAHgGQAFgGALAAQAMAAAFAGQAHAGgBALQABALgHAGQgFAGgMAAQgKAAgGgGgAgPAgIgHiEIAtAAIgGCEg");
	this.shape.setTransform(283.95,33.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BWQgPgVAAgkQAAglAQgVQAPgUAbAAQAcAAAPAWIABAAQgDgRAAgNIAAgwIAqAAIAADRIggAAIgIgUIgCAAQgOAXgcAAQgagBgQgUgAgUgEQgIALAAAWQAAAXAIALQAHALAOAAQAQAAAHgJQAHgKABgWIAAgEQAAgYgHgKQgIgKgRAAQgNAAgHALg");
	this.shape_1.setTransform(270.825,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA6QgVgUAAglQAAglATgVQATgUAhAAQAgAAASASQASASAAAgIAAATIhhAAQABASAJAKQAKAKARAAQANAAANgDQAMgDANgGIAAAgQgLAFgMADQgMACgSAAQgkAAgUgUgAAfgQQAAgPgIgJQgIgIgNAAQgMAAgIAIQgHAJgBAPIA5AAIAAAAg");
	this.shape_2.setTransform(254.375,35.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BWQgPgVAAgkQAAglAQgVQAPgUAbAAQAcAAAPAWIABAAQgDgRAAgNIAAgwIAqAAIAADRIggAAIgIgUIgCAAQgOAXgcAAQgagBgQgUgAgUgEQgIALAAAWQAAAXAIALQAHALAOAAQAQAAAHgJQAHgKABgWIAAgEQAAgYgHgKQgIgKgRAAQgNAAgHALg");
	this.shape_3.setTransform(236.975,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwA6QgVgUAAglQAAglATgVQATgUAhAAQAgAAASASQASASAAAgIAAATIhhAAQABASAJAKQAKAKARAAQANAAANgDQAMgDANgGIAAAgQgLAFgMADQgMACgSAAQgkAAgUgUgAAfgQQAAgPgIgJQgIgIgNAAQgMAAgIAIQgHAJgBAPIA5AAIAAAAg");
	this.shape_4.setTransform(220.475,35.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwA6QgVgUAAglQAAglATgVQATgUAhAAQAgAAASASQASASAAAgIAAATIhhAAQABASAJAKQAKAKARAAQANAAANgDQAMgDANgGIAAAgQgLAFgMADQgMACgSAAQgkAAgUgUgAAfgQQAAgPgIgJQgIgIgNAAQgMAAgIAIQgHAJgBAPIA5AAIAAAAg");
	this.shape_5.setTransform(204.125,35.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBjIhViUIgBAAIADA3IAABdIgmAAIAAjFIA1AAIBVCUIABAAIgCg2IAAheIAmAAIAADFg");
	this.shape_6.setTransform(184.675,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBMQgMgCgKgEIAAgiQALAFAPAEQAOADALAAQAWAAAAgNQAAgFgDgDQgDgDgIgDIgSgKQgRgHgJgFQgIgGgEgIQgDgIAAgMQAAgUAPgLQAQgLAcAAQAbAAAaAMIgNAdIgVgIQgKgDgKAAQgRAAAAAKQAAAGAGAEQAFAEATAIQASAHAIAGQAJAFAEAIQADAJAAALQAAAXgQAMQgQAMgfAAQgRAAgLgCg");
	this.shape_7.setTransform(159.475,35.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBNIAAiXIAfAAIAGAaIACAAQAHgMALgIQAMgIAOAAIAOABIgDAnIgMgCQgUAAgLALQgKAJAAASIAABNg");
	this.shape_8.setTransform(147.025,35.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwA6QgVgUAAglQAAglATgVQATgUAhAAQAgAAASASQASASAAAgIAAATIhhAAQABASAJAKQAKAKARAAQANAAANgDQAMgDANgGIAAAgQgLAFgMADQgMACgSAAQgkAAgUgUgAAfgQQAAgPgIgJQgIgIgNAAQgMAAgIAIQgHAJgBAPIA5AAIAAAAg");
	this.shape_9.setTransform(131.775,35.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBMIg6iXIArAAIAeBWQAFAQAAAPIABAAQAAgNAGgSIAdhWIArAAIg6CXg");
	this.shape_10.setTransform(115.725,35.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBpIAAiWIAoAAIAACWgAgVhUQAAgUAVAAQAWAAABAUQAAAJgGAGQgGAFgLAAQgVAAAAgUg");
	this.shape_11.setTransform(103.65,32.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag7BjQgQgLAAgUQAAgNAIgJQAJgKAQgEQgGgCgFgGQgFgHAAgHQAAgIAFgFQAFgGAKgFQgMgFgHgMQgHgLAAgQQAAgYAQgOQAQgNAeAAIAOABIALABIA1AAIAAAVIgYAHQAHAKAAAMQAAAZgRANQgRAOgdAAIgIgBIgGAAQgGAFAAAFQAAAIAXAAIAYAAQAZAAANALQANALAAAVQAAAagWAPQgWAOgoAAQggAAgRgLgAggAzQgIAFAAAJQAAAJAJAFQAIAEAOAAQAWAAAMgGQANgGAAgKQAAgJgIgDQgHgDgQAAIgUAAQgLAAgIAFgAgZg5QAAAMAGAHQAGAIALAAQALAAAFgIQAGgHAAgMQAAgbgWAAQgXAAAAAbg");
	this.shape_12.setTransform(91.525,38.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwA6QgVgUAAglQAAglATgVQATgUAhAAQAgAAASASQASASAAAgIAAATIhhAAQABASAJAKQAKAKARAAQANAAANgDQAMgDANgGIAAAgQgLAFgMADQgMACgSAAQgkAAgUgUgAAfgQQAAgPgIgJQgIgIgNAAQgMAAgIAIQgHAJgBAPIA5AAIAAAAg");
	this.shape_13.setTransform(75.625,35.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBNIAAiXIAfAAIAGAaIACAAQAHgMALgIQAMgIAOAAIAOABIgDAnIgMgCQgUAAgLALQgKAJAAASIAABNg");
	this.shape_14.setTransform(61.925,35.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BCQgMgMAAgXQgBgZASgKQARgLAggBIAagBIAAgHQABgXgYAAQgRAAgYALIgPgcQAbgOAfAAQAeAAARAOQAQANAAAbIAABkIgdAAIgIgUIgCAAQgJANgMAFQgKAEgRABQgXAAgMgNgAAKAHQgQAAgJAGQgJAGAAAMQAAARAUAAQANABAJgJQAIgIAAgNIAAgNg");
	this.shape_15.setTransform(46.05,35.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzBMQgYgaAAgyQAAgdAMgYQALgXAVgNQAVgMAbABQAegBAdAOIgOAiIgWgJQgMgEgLAAQgWAAgNASQgNASAAAeQAABDAwAAQAVAAAegKIAAAiQgZALgdAAQgrAAgWgag");
	this.shape_16.setTransform(29.7,33.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgyBiQgQgLAAgTQAAgPAKgKQAJgKAQgEQgGgDgEgFQgEgFAAgHQAAgOASgLQgMgFgIgMQgHgLAAgOQAAgXAOgNQAOgNAYAAQAOAAAIADIAvAAIAAAJIgfACQAMAPAAASQAAAVgOAOQgOANgXAAIgOgBQgIAEgEAGQgEAFAAAGQAAAHAFADQAGADAMAAIAZAAQAYAAAMAKQANAKAAATQAAAXgTANQgTAMghAAQgcAAgPgKgAgzBDQAAAeAtAAQA5AAAAglQAAgNgKgGQgJgGgUAAIgXAAQgoAAAAAggAgehXQgKALAAASQAAARAKAJQAKAJASAAQARAAAKgJQAKgJAAgSQAAgTgKgJQgKgKgRAAQgSAAgKAKg");
	this.shape_17.setTransform(311.875,7.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAsBLIAAheQAAgWgJgLQgJgKgUAAQgZAAgMANQgMAOAAAeIAABQIgOAAIAAiSIALAAIADAUIABAAQAOgXAkAAQAyAAAAA2IAABfg");
	this.shape_18.setTransform(296.55,4.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBlIAAiTIANAAIAACTgAgIhWQAAgOAIAAQAEAAADAEQACADAAAHQAAAFgCAEQgDAEgEgBQgIABAAgNg");
	this.shape_19.setTransform(285.225,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGBKIg4iTIANAAIAnBjQAHAUADAOIABAAIALgiIAmhjIANAAIg4CTg");
	this.shape_20.setTransform(275.8,4.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGBlIAAiTIANAAIAACTgAgIhWQAAgOAIAAQAEAAADAEQACADAAAHQAAAFgCAEQgDAEgEgBQgIABAAgNg");
	this.shape_21.setTransform(266.325,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1BjIAAjFIAOAAIAAC4IBdAAIAAANg");
	this.shape_22.setTransform(257.25,1.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtBYQgQgTAAglQAAgkAQgVQAQgUAeAAQAPAAAMAGQAMAFAJAPIABAAIgBghIAAg1IANAAIAADRIgIAAIgEgWIgBAAQgRAZgfgBQgeAAgQgSgAgigQQgNAQAAAgQAAA/AwAAQAZAAAMgOQALgPAAgiIAAgCQAAghgLgPQgMgPgZAAQgXAAgMARg");
	this.shape_23.setTransform(233.2,1.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpA5QgSgUAAgkQAAgiARgVQASgVAcAAQAaAAAPASQAPASAAAfIAAAKIhpAAQAAAeAPAQQANAQAZAAQAMAAAKgBQAKgCAOgGIAAAMQgMAGgKACQgLABgNAAQgfAAgSgTgAAugJQAAgZgLgPQgLgOgUAAQgUAAgNAOQgNAOgCAaIBaAAIAAAAg");
	this.shape_24.setTransform(217.85,4.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBSQgKgKAAgWIAAhfIgVAAIAAgIIAVgFIAIghIAHAAIAAAjIApAAIAAALIgpAAIAABcQAAASAEAHQAHAJAMAAQANAAAJgCIAAAKQgJADgOAAQgSAAgJgKg");
	this.shape_25.setTransform(205.45,2.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgzBDIAAgOQAWALAYAAQAVAAAMgHQALgHAAgNQAAgLgJgHQgJgIgVgHQgVgHgJgGQgJgGgEgHQgFgHAAgKQAAgRAOgKQAOgJAYAAQAYAAAVAJIgFAMQgWgJgSAAQgRAAgLAGQgKAGAAAKQAAAMAIAHQAIAHAXAIQAUAHAJAFQAJAGAFAHQAEAIAAAJQAAAUgPALQgPAKgbAAQgdAAgRgJg");
	this.shape_26.setTransform(194.475,4.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGBlIAAiTIANAAIAACTgAgIhWQAAgOAIAAQAEAAADAEQACADAAAHQAAAFgCAEQgDAEgEgBQgIABAAgNg");
	this.shape_27.setTransform(185.025,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgzBDIAAgOQAWALAYAAQAVAAAMgHQALgHAAgNQAAgLgJgHQgJgIgVgHQgVgHgJgGQgJgGgEgHQgFgHAAgKQAAgRAOgKQAOgJAYAAQAYAAAVAJIgFAMQgWgJgSAAQgRAAgLAGQgKAGAAAKQAAAMAIAHQAIAHAXAIQAUAHAJAFQAJAGAFAHQAEAIAAAJQAAAUgPALQgPAKgbAAQgdAAgRgJg");
	this.shape_28.setTransform(175.425,4.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgzBDIAAgOQAWALAYAAQAVAAAMgHQALgHAAgNQAAgLgJgHQgJgIgVgHQgVgHgJgGQgJgGgEgHQgFgHAAgKQAAgRAOgKQAOgJAYAAQAYAAAVAJIgFAMQgWgJgSAAQgRAAgLAGQgKAGAAAKQAAAMAIAHQAIAHAXAIQAUAHAJAFQAJAGAFAHQAEAIAAAJQAAAUgPALQgPAKgbAAQgdAAgRgJg");
	this.shape_29.setTransform(162.575,4.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABEBjIgchGIhPAAIgcBGIgPAAIBPjFIAIAAIBODFgAAjARIgahGIgJgYIgHAYIgbBGIBFAAg");
	this.shape_30.setTransform(147.875,1.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgpA5QgSgUAAgkQAAgiASgVQARgVAcAAQAaAAAPASQAPASAAAfIAAAKIhpAAQAAAeAOAQQAOAQAZAAQANAAAJgBQAKgCAPgGIAAAMQgNAGgLACQgKABgNAAQgfAAgSgTgAAugJQAAgZgLgPQgMgOgTAAQgUAAgNAOQgNAOgCAaIBaAAIAAAAg");
	this.shape_31.setTransform(124.75,4.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABVBLIAAhgQAAgVgIgKQgIgKgSAAQgWAAgLAMQgLANAAAbIAABVIgMAAIAAhjQAAgmgjAAQgXAAgLAOQgKANAAAeIAABQIgNAAIAAiSIALAAIACAUIABAAQAHgLAKgGQAMgGANAAQAkAAAIAaIAAAAQAIgNAMgGQAMgHAPAAQAYAAAMANQANANAAAcIAABfg");
	this.shape_32.setTransform(105.05,4.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGBlIAAiTIANAAIAACTgAgIhWQAAgOAIAAQAEAAADAEQACADAAAHQAAAFgCAEQgDAEgEgBQgIABAAgNg");
	this.shape_33.setTransform(89.675,1.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGBjIAAi4IhAAAIAAgNICNAAIAAANIhAAAIAAC4g");
	this.shape_34.setTransform(79.325,1.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfAFIAAgKIA/AAIAAAKg");
	this.shape_35.setTransform(67.55,4.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_36.setTransform(60.025,1.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGBpIAAjRIANAAIAADRg");
	this.shape_37.setTransform(53.825,1.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag5AVIAAhfIAOAAIAABeQgBAXAKAKQAJAKAUAAQAZAAAMgNQANgOAAgeIAAhQIANAAIAACSIgLAAIgDgUIgBAAQgOAXgkAAQgyAAAAg2g");
	this.shape_38.setTransform(42.5,4.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag1BjIAAjFIBrAAIAAANIhdAAIAABUIBYAAIAAALIhYAAIAABZg");
	this.shape_39.setTransform(28.775,1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(17.9,-20.4,304.1,74.19999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAOAmIgGgaIgIghIAAAAIgOA7IgWAAIgWhLIAVAAIAJAiIAEAYIADgRIABgFIAKgkIAVAAIAJAkIABAEIABAGIACAHIAAAFIABAAIACgOIACgKIAJgiIAUAAIgVBLg");
	this.shape.setTransform(476.5,-129.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgEgJQgFgJAAgMQAAgSAJgKQALgLAQAAQALAAAJAFQAIAFAEAJQAFAJAAALQAAATgKAKQgKALgRAAQgKAAgJgFgAgMgQQgDAFAAALQAAALAEAGQADAGAIAAQAIAAAEgGQAEgGgBgLQABgKgEgGQgEgGgIAAQgIAAgEAGg");
	this.shape_1.setTransform(466.2,-129.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAyIgrhLIgBAAIACAcIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgaIAAgwIATAAIAABjg");
	this.shape_2.setTransform(456.175,-130.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA2IAAgQIAIABQAGgBAEgDQAEgDACgIIACgDIgfhLIAXAAIAPArIABANIADgNIAPgrIAWAAIggBVQgFAMgHAGQgIAGgLAAIgLgBg");
	this.shape_3.setTransform(442.925,-127.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_4.setTransform(436.85,-130.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_5.setTransform(430.525,-127.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_6.setTransform(421.675,-127.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_7.setTransform(412.175,-130.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AnmCXIAAktIPNAAIAAEtg");
	this.shape_8.setTransform(445,-129.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(396.3,-145,97.5,30.299999999999997), null);


(lib.Bg_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,0,728,90), null);


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
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(220));

	// T2
	this.instance = new lib.T2();
	this.instance.setTransform(171.15,66.5,1,1,0,0,0,46.1,51.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({x:181.15,alpha:1},9,cjs.Ease.get(1)).wait(83));

	// T1
	this.instance_1 = new lib.T1();
	this.instance_1.setTransform(42.85,17.2,1,1,0,0,0,57.8,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:57.85,alpha:1},9,cjs.Ease.get(1)).wait(92));

	// Cta
	this.instance_2 = new lib.Cta();
	this.instance_2.setTransform(254.5,216.05,1,1,0,0,0,47.5,17.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({x:239.5,alpha:1},9,cjs.Ease.get(1)).wait(175));

	// Hdr
	this.instance_3 = new lib.Hdr();
	this.instance_3.setTransform(52.25,91.3,1,1,0,0,0,57.2,64);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:67.25,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(101));

	// Logo
	this.instance_4 = new lib.Logo_1();
	this.instance_4.setTransform(77.9,217.2,0.4894,0.4894,0,0,0,166.2,36.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:92.9,alpha:1},9,cjs.Ease.get(1)).wait(202));

	// Bg
	this.instance_5 = new lib.Bg_1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},9,cjs.Ease.get(1)).wait(211));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0,729.7,90);


// stage content:
(lib.WBAY_218223_MM_728x90_V1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(364,18.75,2.4267,0.15,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,365,46);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bg.jpg", id:"Bg"},
		{src:"Logo.png", id:"Logo"}
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