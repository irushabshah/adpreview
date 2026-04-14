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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,200);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,200);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,200);// helper functions:

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


(lib.text3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#12127D").s().p("AATAkIAAgsQgBgJgDgEQgEgEgJgBQgKABgFAGQgEAHAAAMIAAAkIgLAAIAAhFIAJAAIABAKIABAAQACgDAEgDIAHgEIAIgCQANABAGAGQAGAGAAANIAAAtg");
	this.shape.setTransform(122.35,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AARAjIgMgoIgBgFIgCgFIgBgEIgBgEIAAAAIAAAEIgBAEIgBAFIgCAFIgNAoIgMAAIgThFIALAAIAKAlIACAIIACAHIABAGIAAAAIABgEIABgFIABgFIACgFIANgnIAKAAIAMAnIACAHIACAGIABAGIABAAIABgGIABgHIACgIIAKglIALAAIgTBFg");
	this.shape_1.setTransform(113.325,25.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgMAiQgFgDgFgFQgEgEgDgHQgCgHAAgIQAAgLAEgIQAEgIAHgEQAIgEAJAAQAJAAAHAEQAHAEAEAIQAEAIAAALQAAAIgCAHQgDAHgEAEQgEAFgGADQgFACgIAAQgGAAgGgCgAgPgTQgFAHAAAMQAAAIACAGQADAHAEADQAFADAGAAQAIAAAEgDQAFgDACgHQACgGAAgIQAAgHgCgHQgCgGgFgDQgEgDgIAAQgKAAgFAHg");
	this.shape_2.setTransform(104.4,25.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgkAuIAAhbIAcAAQAOgBAJAGQALAFAFAKQAGAKAAAPQAAAPgGALQgGAKgLAFQgKAFgPAAgAgZAlIANAAQASAAAKgJQAKgJAAgTQgBgMgEgIQgEgIgIgEQgIgEgKAAIgQAAg");
	this.shape_3.setTransform(96.05,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgbAyIgDgBIAAgIIADAAIAFAAQADAAADgBQADgBACgEIADgGIAFgKIgchEIALAAIAQAoIACAGIACAGIAAAFIAAAAIADgIIADgKIAQgnIALAAIgeBOIgFAMQgEAEgEADQgFACgGABg");
	this.shape_4.setTransform(84.5,27.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgMAgQgIgEgEgIQgEgIAAgMQAAgKADgIQAFgIAGgFQAHgEAIAAQAKAAAFAEQAHAEADAHQADAHABAJIAAAGIgwAAQABAMAGAHQAFAGALAAQAGAAAFgBIAKgEIAAAKIgKADQgFABgHAAQgJAAgHgEgAASgGQAAgGgBgEQgCgFgEgDQgEgCgGAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_5.setTransform(77.65,25.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AATAkIAAgsQgBgJgDgEQgEgEgJgBQgKABgFAGQgEAHAAAMIAAAkIgLAAIAAhFIAJAAIABAKIABAAQACgDADgDIAIgEIAIgCQAMABAHAGQAGAGAAANIAAAtg");
	this.shape_6.setTransform(70.05,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgMAiQgGgDgEgFQgEgEgCgHQgDgHAAgIQAAgLAEgIQAEgIAHgEQAHgEAJAAQAKAAAHAEQAHAEAEAIQAEAIAAALQAAAIgCAHQgCAHgEAEQgFAFgFADQgHACgHAAQgGAAgGgCgAgPgTQgFAHAAAMQAAAIADAGQACAHAEADQAFADAGAAQAIAAAEgDQAEgDADgHQACgGAAgIQAAgHgCgHQgDgGgEgDQgEgDgIAAQgKAAgFAHg");
	this.shape_7.setTransform(62.15,25.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAjAuIAAg6IAAgIIABgIIAAgGIAAAAIggBQIgIAAIgfhQIAAAAIAAAGIAAAIIAAAJIAAA5IgKAAIAAhbIAQAAIAdBMIAAAAIAehMIAQAAIAABbg");
	this.shape_8.setTransform(52.425,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgMAiQgGgDgEgFQgEgEgDgHQgCgHAAgIQAAgLAEgIQAEgIAHgEQAIgEAJAAQAJAAAHAEQAHAEAEAIQAEAIAAALQAAAIgCAHQgDAHgEAEQgDAFgHADQgFACgIAAQgGAAgGgCgAgPgTQgFAHAAAMQAAAIADAGQACAHAEADQAFADAGAAQAHAAAFgDQAEgDADgHQACgGAAgIQAAgHgCgHQgDgGgEgDQgFgDgHAAQgKAAgFAHg");
	this.shape_9.setTransform(39.35,25.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAYAuIgyhNIAAAAIAAAHIABAJIAAAJIAAA0IgKAAIAAhbIAMAAIAyBMIAAAAIAAgGIAAgIIgBgJIAAg1IAKAAIAABbg");
	this.shape_10.setTransform(30.575,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgIAQIACgLIACgKIACgKIAKAAIABACIgDAKIgDAJIgEAKg");
	this.shape_11.setTransform(109.575,13.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AAAAqQgEgDgDgEQgDgFAAgIIAAgpIgKAAIAAgEIAKgFIAEgOIAGAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADAEQADACAFAAIAFAAIAFgBIAAAJIgFAAIgHABQgFAAgEgBg");
	this.shape_12.setTransform(105.775,9.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgOAjIgKgDIAAgKIAKAEQAGABAHAAQAIAAAEgCQAEgDAAgFQAAgDgCgCIgFgFIgKgEIgLgEQgFgDgDgDQgDgEAAgGQAAgJAIgEQAHgFAKAAQAHAAAFABIAKADIgDAJIgJgDIgKgBQgHAAgEACQgDACAAAFQAAADABACIAGAEIAKAEIALAEQAFADACADQADAEAAAGQAAAGgDAFQgEAEgGADQgGACgIAAQgHAAgFgBg");
	this.shape_13.setTransform(100.475,10.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgMAgQgIgEgEgIQgEgIAAgMQAAgKADgIQAFgIAGgFQAHgEAIAAQAKAAAGAEQAGAEADAHQADAHAAAJIAAAGIgvAAQABAMAGAHQAFAGALAAQAGAAAFgBIAKgEIAAAKIgKADQgFABgHAAQgJAAgHgEgAASgGQABgGgCgEQgCgFgEgDQgEgCgGAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_14.setTransform(93.75,10.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgTAkIAAhFIAJAAIABANIAAAAIAGgIQADgDADgBQAEgCAEAAIAFAAIAEABIgBAKIgEgBIgEAAIgIABQgDACgCADQgDADgCAEQgCAFAAAFIAAAlg");
	this.shape_15.setTransform(87.9,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgNAgQgHgEgEgIQgFgIAAgMQABgKAEgIQADgIAHgFQAHgEAJAAQAJAAAGAEQAGAEAEAHQADAHAAAJIAAAGIgvAAQAAAMAFAHQAHAGAJAAQAHAAAFgBIALgEIAAAKIgLADQgFABgHAAQgJAAgIgEgAATgGQgBgGgBgEQgCgFgEgDQgEgCgFAAQgIAAgFAFQgFAGgBAJIAkAAIAAAAg");
	this.shape_16.setTransform(81.2,10.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAAAqQgEgDgDgEQgDgFAAgIIAAgpIgKAAIAAgEIAKgFIAEgOIAGAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADAEQADACAFAAIAFAAIAFgBIAAAJIgFAAIgHABQgFAAgEgBg");
	this.shape_17.setTransform(75.225,9.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AASAkIAAgsQABgJgEgEQgEgFgJABQgKgBgEAHQgGAGAAANIAAAkIgKAAIAAhFIAJAAIABAKIABAAQACgEAEgCIAHgEIAIgBQANgBAGAHQAGAGAAANIAAAtg");
	this.shape_18.setTransform(69,10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAvIAAhdIAKAAIAABdg");
	this.shape_19.setTransform(63.2,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgMAiQgGgDgEgFQgEgEgCgHQgDgHAAgIQAAgLAEgIQAEgIAHgEQAHgEAJAAQAKAAAHAEQAHAEAEAIQAEAIAAALQAAAIgCAHQgCAHgEAEQgFAFgFADQgHACgHAAQgGAAgGgCgAgPgTQgFAHAAAMQAAAIACAGQACAHAFADQAFADAGAAQAIAAAEgDQAFgDACgHQACgGAAgIQAAgHgCgHQgCgGgFgDQgEgDgIAAQgKAAgFAHg");
	this.shape_20.setTransform(54.15,10.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAYAvIgyhNIAAAAIAAAHIABAIIAAAJIAAA1IgKAAIAAhdIAMAAIAyBOIAAAAIAAgHIAAgJIgBgJIAAg1IAKAAIAABdg");
	this.shape_21.setTransform(45.375,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgIAQIACgLIACgKIACgKIAKAAIABABIgDAKIgDAKIgEAKg");
	this.shape_22.setTransform(115.975,-2.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgOAjIgKgDIAAgKIAKAEQAGABAHAAQAIAAAEgCQAEgDAAgFQAAgDgCgCIgFgFIgKgEIgLgEQgFgDgDgDQgDgEAAgGQAAgJAIgEQAHgFAKAAQAHAAAFABIAKADIgDAJIgJgDIgKgBQgHAAgEACQgDACAAAFQAAADABACIAGAEIAKAEIALAEQAFADACADQADAEAAAGQAAAGgDAFQgEAEgGADQgGACgIAAQgHAAgFgBg");
	this.shape_23.setTransform(111.475,-5.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AAAAqQgEgDgDgEQgDgFAAgIIAAgoIgKAAIAAgGIAKgDIAEgQIAGAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAJIgFABIgHABQgFAAgEgCg");
	this.shape_24.setTransform(106.025,-6.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AASAjIAAgrQAAgJgDgEQgEgEgIgBQgLABgEAGQgFAHgBAMIAAAjIgKAAIAAhEIAIAAIACAKIABAAQACgDAEgDIAHgEIAIgCQANABAGAGQAGAGAAANIAAAsg");
	this.shape_25.setTransform(99.8,-5.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgNAgQgHgEgEgIQgFgIABgMQAAgKADgIQAEgIAHgFQAHgEAIAAQAJAAAHAEQAGAEAEAHQACAHAAAJIAAAGIguAAQAAAMAGAHQAGAGAJAAQAHAAAFgBIALgEIAAAKIgLADQgFABgHAAQgJAAgIgEgAATgGQgBgGgBgEQgCgFgEgDQgEgCgGAAQgHAAgFAFQgFAGgBAJIAkAAIAAAAg");
	this.shape_26.setTransform(92.2,-5.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAnAjIAAgsQAAgIgEgEQgDgEgHgBQgLAAgEAHQgFAFAAAMIAAAlIgJAAIAAgsQAAgFgCgEQgCgDgCgDQgEgCgFAAQgGAAgFAEQgEADgCAFQgCAFAAAJIAAAjIgKAAIAAhEIAIAAIACAKIABAAQABgEAEgCQADgDADgBQAEgBAFgBQAIAAAGAEQADACADAHIABAAQADgHAGgCQAGgEAHAAQAMAAAFAHQAHAFAAAOIAAAsg");
	this.shape_27.setTransform(82.6,-5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgaAyIgFgBIAAgIIAEAAIAEAAQAEABADgCQADgBACgEIAEgGIADgKIgchEIAMAAIAPAoIADAGIACAGIAAAFIAAAAIADgHIAEgLIAOgnIAMAAIgfBOIgEAMQgDAEgFADQgFADgGgBg");
	this.shape_28.setTransform(73.3,-4.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgQAiQgFgDgDgEQgDgFAAgHQAAgKAIgFQAJgFAQAAIAMgBIAAgFQAAgJgEgDQgEgDgHgBQgFABgFABIgJAEIgDgIQAEgDAHgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgKIAAAAIgGAHIgIADQgEACgFAAQgGAAgFgCgAAHAAQgMABgFAEQgGAEAAAGQAAAGAEADQADADAGAAQAJAAAGgFQAFgFAAgLIAAgGg");
	this.shape_29.setTransform(66.225,-5.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgcAuIAAhbIAYAAQARgBAIAIQAIAGAAAOQAAAGgBAFQgCAGgFACQgEAEgHADQgHACgJAAIgLAAIAAAkgAgRAAIAKAAQAIAAAGAAQAFgCAEgFQADgDAAgIQAAgJgHgFQgFgEgMAAIgMAAg");
	this.shape_30.setTransform(59.25,-6.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgMAiQgGgDgEgFQgEgEgDgHQgCgHAAgIQAAgLAEgIQAEgIAHgEQAIgEAJAAQAJAAAHAEQAHAEAEAIQAEAIAAALQAAAIgCAHQgCAHgFAEQgDAFgHADQgFACgIAAQgGAAgGgCgAgPgTQgFAHAAAMQAAAIADAGQABAHAFADQAFADAGAAQAIAAAEgDQAFgDACgHQACgGAAgIQAAgHgCgHQgCgGgFgDQgEgDgIAAQgKAAgFAHg");
	this.shape_31.setTransform(47.8,-5.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAYAuIgyhNIAAAAIAAAHIABAJIAAAJIAAA0IgKAAIAAhbIAMAAIAyBMIAAAAIAAgGIAAgIIgBgJIAAg1IAKAAIAABbg");
	this.shape_32.setTransform(39.025,-6.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgEAjQgCgCgBgFQABgFACgCQACgBACgBQADABADABQABACAAAFQAAAFgBACQgDACgDAAQgCAAgCgCgAgEgVQgCgCgBgEQABgFACgCQACgCACABQADgBADACQABACAAAFQAAAEgBACQgDACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(113.65,-21.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgOAjIgKgDIAAgKIAKAEQAGABAHAAQAIAAAEgCQAEgDAAgFQAAgDgCgCIgFgFIgKgEIgLgEQgFgDgDgDQgDgEAAgGQAAgJAIgEQAHgFAKAAQAHAAAFABIAKADIgDAJIgJgDIgKgBQgHAAgEACQgDACAAAFQAAADABACIAGAEIAKAEIALAEQAFADACADQADAEAAAGQAAAGgDAFQgEAEgGADQgGACgIAAQgHAAgFgBg");
	this.shape_34.setTransform(108.925,-21.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AASAyIAAgtQABgIgEgEQgEgFgJABQgGAAgFACQgFADgCAGQgCAFAAAIIAAAlIgKAAIAAhiIAKAAIAAAdIAAAGIAAAEIABAAQACgEAEgCQADgCAEgCIAIgBQAIAAAGACQAFADADAFQADAGAAAIIAAAug");
	this.shape_35.setTransform(101.85,-22.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAAApQgEgCgDgEQgDgFAAgIIAAgpIgKAAIAAgEIAKgFIAEgOIAGAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADAEQADACAFAAIAFAAIAFgBIAAAIIgFABIgHABQgFAAgEgCg");
	this.shape_36.setTransform(95.525,-22.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AATAkIAAgsQgBgJgDgEQgEgFgIABQgLAAgFAGQgEAGAAANIAAAkIgLAAIAAhFIAIAAIACAKIABAAQACgEADgCIAIgEIAIgBQAMAAAHAGQAGAGAAANIAAAtg");
	this.shape_37.setTransform(89.3,-21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgMAiQgFgDgFgFQgEgEgCgHQgDgHAAgIQAAgLAEgIQAEgIAHgEQAHgEAKAAQAJAAAHAEQAHAEAEAIQAEAIAAALQAAAIgCAHQgCAHgEAEQgFAFgGADQgFACgIAAQgGAAgGgCgAgPgTQgFAHAAAMQAAAIADAGQACAHAEADQAFADAGAAQAHAAAFgDQAEgDADgHQACgGAAgIQAAgHgCgHQgDgGgEgDQgFgDgHAAQgKAAgFAHg");
	this.shape_38.setTransform(81.4,-21.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAnAkIAAgsQAAgJgEgEQgDgFgIABQgKAAgEAFQgFAGAAALIAAAnIgJAAIAAgsQgBgGgBgEQgCgDgDgDQgDgBgFAAQgHAAgEACQgEADgCAGQgCAFAAAJIAAAkIgLAAIAAhFIAJAAIABAKIABAAQADgEADgDQACgCAFgBQAEgCAEABQAIAAAFACQAEAEADAFIABAAQADgFAGgEQAGgCAHAAQAMAAAFAFQAHAHAAANIAAAtg");
	this.shape_39.setTransform(71.55,-21.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AgdAvIAAgJIAYgZIALgMIAHgKQADgGAAgGQAAgIgFgEQgFgEgGAAQgHAAgFACQgFADgFAEIgGgHIAIgGQAEgCAFgBQAFgCAGAAQAHAAAHADQAGADADAFQAEAGAAAHQAAAIgDAGQgDAHgFAEIgNAOIgTAUIAAAAIAuAAIAAAKg");
	this.shape_40.setTransform(58.425,-22.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AAHAvIAAhCIAAgFIAAgGIAAgEIgDADIgEADIgKAJIgGgHIAYgUIAJAAIAABdg");
	this.shape_41.setTransform(50.2,-22.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#12127D").s().p("AgDAfIAAgbIgaAAIAAgHIAaAAIAAgbIAIAAIAAAbIAaAAIAAAHIgaAAIAAAbg");
	this.shape_42.setTransform(40.3,-22.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-33.7,148,68.80000000000001);


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
	this.shape.graphics.f("#12127D").s().p("AAAAzQgGgCgDgGQgDgGAAgKIAAgxIgMAAIAAgHIAMgFIAFgTIAHAAIAAAVIAZAAIAAAKIgZAAIAAAxQAAAIAEAEQADAEAHAAIAGgBIAFgBIAAAKIgGACIgIAAQgGAAgFgCg");
	this.shape.setTransform(124.2,59.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgMAoQgIgFgFgKQgFgKAAgPQAAgOAFgKQAFgKAJgFQAJgEALAAIAMABIAKADIgEALIgJgDIgJgBQgJAAgFAEQgGAEgDAHQgDAHAAAKQAAALADAHQADAHAGAEQAFAEAIAAQAGAAAGgBIAKgEIAAAMIgKADIgMABQgLAAgJgEg");
	this.shape_1.setTransform(117.775,60.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgQAnQgJgFgFgKQgFgJAAgOQAAgNAEgKQAFgKAIgGQAJgFAKAAQALAAAIAEQAIAFAEAJQAEAJAAALIAAAHIg6AAQAAAPAIAIQAHAIAMAAQAIAAAGgBIANgFIAAAMQgGADgGABQgHABgIAAQgMAAgJgFgAAXgHQAAgIgDgFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHgCAMIAtAAIAAAAg");
	this.shape_2.setTransform(109.325,60.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgMBOIgFgCIAAgKIAEABIAGAAQAFAAADgDQADgDAAgIIAAhiIANAAIAABiQAAAIgDAGQgCAFgFADQgFADgHAAgAAFg+QgCgCAAgEQAAgFACgCQACgCAEAAQADAAACACQACACAAAFQAAAEgCACQgCACgDAAQgEAAgCgCg");
	this.shape_3.setTransform(101.775,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgPApQgHgDgFgFQgGgGgCgIQgDgJAAgKQAAgNAEgKQAFgKAJgFQAJgFALAAQAMAAAJAFQAIAFAFAKQAFAKAAANQAAAKgCAJQgDAIgFAGQgGAFgHADQgHADgJAAQgIAAgHgDgAgTgYQgGAJAAAPQAAAKADAIQADAHAFAEQAGAFAIAAQAJAAAGgFQAFgEADgHQADgIAAgKQAAgJgDgIQgDgHgFgEQgGgEgJAAQgMAAgHAIg");
	this.shape_4.setTransform(96.025,60.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgYAsIAAhVIALAAIACAQIAAAAQADgFAEgEQADgEAEgDQAFgCAGAAIAGAAIAFABIgCAMIgFgBIgEAAQgGAAgEADQgEABgDAEQgEAEgCAFQgCAGAAAHIAAAtg");
	this.shape_5.setTransform(88.525,60.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AglA/IAAh7IALAAIACAMIAAAAQADgEAEgDQADgDAFgCQAGgCAGAAQAQAAAJALQAKALAAAWQAAAPgFAJQgEAKgIAFQgIAFgLAAQgFAAgGgCQgFgCgDgDIgHgGIAAAAIAAAHIAAAHIAAAkgAgNgwQgFAEgDAHQgCAHgBAKIAAACQAAALADAHQACAHAGAEQAFAEAJAAQAIAAAFgEQAFgFADgGQACgIAAgKQAAgPgFgJQgGgJgNAAQgIAAgFADg");
	this.shape_6.setTransform(80.075,62.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgQAnQgJgFgFgKQgFgJAAgOQAAgNAEgKQAFgKAIgGQAJgFAKAAQALAAAIAEQAIAFAEAJQAEAJAAALIAAAHIg6AAQAAAPAIAIQAHAIAMAAQAIAAAGgBIANgFIAAAMQgGADgGABQgHABgIAAQgMAAgJgFgAAXgHQAAgIgDgFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHgCAMIAtAAIAAAAg");
	this.shape_7.setTransform(66.375,60.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgYAsIAAhVIALAAIACAQIAAAAIAHgJQADgEAEgDQAFgCAGAAIAGAAIAFABIgCAMIgFgBIgEAAQgGAAgEADQgEABgDAEQgEAEgCAFQgCAGAAAHIAAAtg");
	this.shape_8.setTransform(59.175,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgGA7IAAhVIAMAAIAABVgAgEgrQgDgCAAgEQAAgFADgCQACgCACAAQADAAADACQACACAAAFQAAAEgCACQgDACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(53.375,59.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAAAzQgGgCgDgGQgEgGAAgKIAAgxIgLAAIAAgHIAMgFIAFgTIAHAAIAAAVIAZAAIAAAKIgZAAIAAAxQAAAIADAEQAEAEAGAAIAHgBIAGgBIAAAKIgHACIgIAAQgGAAgFgCg");
	this.shape_10.setTransform(48.45,59.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAXAsIAAg2QAAgLgFgFQgFgGgKAAQgNABgGAHQgGAJAAAPIAAAsIgNAAIAAhVIALAAIACAMIABAAQACgEAFgDQAEgEAFgBIAKgCQAPABAIAHQAIAHAAAQIAAA4g");
	this.shape_11.setTransform(40.775,60.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgQAnQgJgFgFgKQgFgJAAgOQAAgNAEgKQAFgKAIgGQAJgFAKAAQALAAAIAEQAIAFAEAJQAEAJAAALIAAAHIg6AAQAAAPAIAIQAHAIAMAAQAIAAAGgBIANgFIAAAMQgGADgGABQgHABgIAAQgMAAgJgFgAAXgHQAAgIgDgFQgCgGgFgEQgEgDgIAAQgJAAgGAHQgGAHgCAMIAtAAIAAAAg");
	this.shape_12.setTransform(31.425,60.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgGQAAgMAEgHQAEgGAIgDQAGgDAJAAIAOABIAKADIgHATIgGgCIgHgBQgGAAgCADQgDAEAAAEIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_13.setTransform(107.7,39.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgGQAAgMAEgHQAEgGAIgDQAFgDALAAIANABIAKADIgGATIgHgCIgHgBQgGAAgDADQgCAEAAAEIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_14.setTransform(101.15,39.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgRAtQgIgDgGgHQgGgGgDgIQgEgJAAgMQAAgOAGgLQAFgLAKgFQAKgGANAAQANAAALAGQAJAFAHALQAFALAAAOQAAAMgDAJQgDAIgGAGQgGAHgJADQgHADgLAAQgJAAgIgDgAgNgTQgFAGAAANQAAAJACAGQACAGAEAEQAEADAGAAQAHAAAEgDQAEgEACgGQACgGAAgJQAAgJgCgFQgCgHgEgCQgEgEgHAAQgJAAgEAIg");
	this.shape_15.setTransform(92.05,41.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgXA3QgJgHgFgOQgFgOAAgUQAAgSAFgPQAEgOAJgHQAKgIAOAAQAPAAAJAIQAKAHAEAOQAEAPABASQgBAPgCALQgCAMgFAIQgFAIgJAFQgHADgMAAQgNABgKgIgAgJgkQgEAFgCAJQgBAKAAAMQAAAOABAKQACAIAEAFQADAFAGAAQAHAAADgFQAEgEACgJQABgKAAgOQAAgMgBgKQgCgJgEgFQgDgFgHABQgGgBgDAFg");
	this.shape_16.setTransform(77.55,39.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgXA3QgJgHgFgOQgFgOABgUQgBgSAFgPQAEgOAJgHQAKgIAOAAQAOAAAKAIQAJAHAFAOQAEAPAAASQABAPgDALQgCAMgFAIQgFAIgIAFQgIADgMAAQgNABgKgIgAgJgkQgEAFgBAJQgCAKAAAMQAAAOACAKQABAIAEAFQADAFAGAAQAGAAAEgFQAEgEABgJQACgKAAgOQAAgMgCgKQgBgJgEgFQgEgFgGABQgGgBgDAFg");
	this.shape_17.setTransform(67.85,39.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgZA8QgJgCgFgDIAAgWQAGADAIADQAJACAIAAQAIAAAEgCQAFgCADgEQACgFABgGQAAgKgHgEQgFgFgMAAIgKABIgIACIgKgGIAEg9IBBAAIAAAXIgqAAIgCAXIAFgBIAJgBQALAAAJAFQAJAEAEAIQAFAIABALQAAAOgGAJQgFAJgLAGQgLAEgPAAQgKABgIgCg");
	this.shape_18.setTransform(58.2,39.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFBGIAAgRQgLAAgIgDQgKgCgGgCIAAgXQAGAEALADQAJADAJAAIAAgZQgNgGgIgDQgIgGgDgGQgEgGABgHQgBgJAFgGQAEgHAJgDQAHgEALgBIAAgNIALAAIAAANQAJAAAJACIAQAFIgIAUIgOgEIgMgCIAAAYIARAHQAIAEAFAFQAGAGAAAKQAAANgJAJQgKAIgRACIAAARgAAGAgQAFgBADgCQADgDgBgDIgBgEIgDgDIgGgEgAgLghIgDACIgBAFIABADIADAEIAGADIAAgTg");
	this.shape_19.setTransform(48.5,39.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgIApIAAggIggAAIAAgRIAgAAIAAggIARAAIAAAgIAgAAIAAARIggAAIAAAgg");
	this.shape_20.setTransform(124.1,19.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAVA0QgHgKgBgSQAAgSAIgJQAGgKAPAAQAPAAAHAKQAIAJAAASQgBASgGAKQgIAKgPAAQgOAAgHgKgAAlAJQgCAFgBAKQABALACAFQACAFADAAQAFAAACgFQABgFAAgLQAAgKgBgFQgCgGgFAAQgDAAgCAGgAgqA9IBBh5IAUAAIhCB5gAg/AEQgIgJABgSQAAgSAGgKQAIgKAPAAQANAAAIAKQAHAKAAASQABASgIAJQgGAKgPAAQgOAAgIgKgAgwgnQgBAFAAALQAAAKABAFQADAGAEAAQADAAADgFQACgGAAgKQAAgLgCgFQgDgFgDAAQgEAAgDAFg");
	this.shape_21.setTransform(107.2,19.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgXA3QgKgHgEgOQgEgOAAgUQAAgSAEgOQAEgOAJgIQAKgIAOAAQAOAAAKAIQAKAIAEAOQAFAOgBASQAAAPgCALQgCAMgFAIQgFAIgIAFQgJADgLAAQgOABgJgIgAgJgkQgEAFgBAJQgCAJAAANQAAAOACAKQABAJAEAEQADAFAGAAQAHAAADgFQAEgEABgJQACgKAAgOQAAgNgCgJQgBgJgEgFQgDgFgHABQgGgBgDAFg");
	this.shape_22.setTransform(94.7,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgpA+IAAgSIAegfIAOgPIAJgMQACgFAAgFQAAgIgEgDQgFgEgFAAQgHAAgGADQgIADgHAHIgNgRIALgIQAFgEAIgDQAIgDAKABQAMAAAJADQAIAFAEAIQAFAHAAAKQAAAJgEAJQgDAIgJAHIgSASIgOAPIAAABIAzAAIAAAWg");
	this.shape_23.setTransform(85.05,19.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgZA7QgLgFgHgJQgHgIgDgMQgEgLAAgOQAAgSAGgOQAGgOANgIQANgHATgBQAUABANAHQAMAIAHAOQAGAOAAASQAAAOgEALQgDAMgHAIQgHAJgLAFQgLADgPAAQgOAAgLgDgAgRgjQgHAFgDAJQgDAKAAALQAAANADAJQADAJAHAFQAHAFAKAAQALAAAHgFQAGgFAEgJQADgJAAgNQAAgSgHgLQgIgLgQAAQgKAAgHAFg");
	this.shape_24.setTransform(69.025,19.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgXA3QgNgHgGgOQgHgOAAgUQAAgSAIgOQAHgOAOgIQAOgHAUAAQAJAAAKACQAJACAIADIgJAVIgNgFQgHgCgIAAQgLAAgHAFQgIAFgFAKQgEAJAAALQAAAMADAJQADAKAHAFQAHAFAKAAIAKgBIAHgBIAAgZIgXAAIAAgUIAwAAIAAA+IgUAFQgKABgNAAQgSAAgMgHg");
	this.shape_25.setTransform(55.925,19.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgZA7QgLgFgHgJQgHgIgDgMQgEgLAAgOQAAgSAGgOQAGgOANgIQANgHATgBQAUABANAHQAMAIAHAOQAGAOAAASQAAAOgEALQgDAMgHAIQgHAJgLAFQgLADgPAAQgOAAgLgDgAgRgjQgHAFgDAJQgDAKAAALQAAANADAJQADAJAHAFQAHAFAKAAQALAAAHgFQAGgFAEgJQADgJAAgNQAAgSgHgLQgIgLgQAAQgKAAgHAFg");
	this.shape_26.setTransform(43.225,19.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgsA9IAAh5IAlAAQAYAAAMAHQANAHAAARQAAAHgDAGQgBAFgFAEQgEADgGABIAAABQAGABAFACQAFADADAGQADAGAAAKQAAALgGAHQgFAIgKAFQgKAEgOAAgAgSAoIARAAQAKAAAFgFQAEgEAAgIQAAgFgCgDQgCgDgFgCQgFgCgGAAIgQAAgAgSgMIAPAAQAJAAAFgDQAEgEABgGQgBgHgFgDQgFgEgKAAIgNAAg");
	this.shape_27.setTransform(31.1,19.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgKAUIACgOIAEgMIACgNIAMAAIABACIgDANIgEALIgFANg");
	this.shape_28.setTransform(109.5,5.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AggA9IgGgBIAAgKIAFABIAFAAQAFAAADgBIAGgGIAFgJIAEgMIgihUIAOAAIATAyIADAIIADAHIAAAHIABAAIADgLIAFgLIARgyIAOAAIglBhQgDAIgDAGQgEAGgGADQgFADgIAAg");
	this.shape_29.setTransform(103.7,3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgUAqQgGgDgEgGQgDgFAAgJQAAgNAKgGQAKgGAUgBIAOgBIAAgFQAAgLgEgEQgFgFgJAAQgFAAgHACIgLAFIgEgKIANgFQAIgCAHAAQAPAAAIAHQAHAGAAAQIAAA5IgJAAIgDgNIAAAAIgIAIQgEADgFACQgFABgHAAQgHAAgGgCgAAIABQgPABgGAEQgHAFAAAIQAAAIAFADQAEAEAHAAQALAAAHgHQAHgGAAgNIAAgHg");
	this.shape_30.setTransform(95.025,1.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AArA5IAAhIIAAgLIAAgJIABgIIgBAAIgmBkIgKAAIgmhkIgBAAIABAHIAAALIAAALIAABHIgNAAIAAhxIAUAAIAkBeIAAAAIAlheIAUAAIAABxg");
	this.shape_31.setTransform(83.7,0.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgSArQgGgBgGgDIAAgMIANAFQAHACAIAAQAKAAAFgEQAFgDAAgHQAAgDgCgDQgCgCgEgDIgNgGIgOgFQgGgDgDgEQgEgFAAgHQABgLAIgGQAKgFANAAQAHAAAHABIANAEIgFALIgLgEQgGgCgGAAQgJAAgEADQgFADAAAFQAAAEADADQABACAGADIALAFQAIADAHACQAFADAEAFQACAEAAAHQAAAJgDAFQgFAGgHADQgIACgKAAQgIAAgHgBg");
	this.shape_32.setTransform(68.6,1.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgGA7IAAhVIAMAAIAABVgAgEgrQgDgCAAgEQAAgFADgCQACgCACAAQADAAADACQACACAAAFQAAAEgCACQgDACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(62.775,-0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAXA9IAAg3QAAgKgFgFQgFgFgKAAQgIAAgGADQgGAEgCAHQgDAGAAAKIAAAtIgNAAIAAh5IANAAIAAAlIAAAGIAAAGIABAAQACgFAEgDQAEgDAGgCQAFgBAFAAQAKAAAHADQAHADADAHQAEAHAAAKIAAA4g");
	this.shape_34.setTransform(55.875,-0.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgFA5IAAhmIglAAIAAgLIBUAAIAAALIgkAAIAABmg");
	this.shape_35.setTransform(46.55,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-13.2,148,84.9);


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
	this.shape.graphics.f("#B20000").s().p("AgOA5IAAhYIgcAAIAAgZIBVAAIAAAZIgcAAIAABYg");
	this.shape.setTransform(124.025,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AAOA5IgphPIgBAAIABAJIABAKIAAAJIAAAzIgbAAIAAhxIAoAAIAoBOIABAAIgBgIIAAgKIAAgIIAAg0IAbAAIAABxg");
	this.shape_1.setTransform(112.675,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AghA5IAAhxIBDAAIAAAZIgkAAIAAASIAhAAIAAAXIghAAIAAAWIAkAAIAAAZg");
	this.shape_2.setTransform(101.875,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AgRA5IgmhxIAjAAIAQA4IACAJIACAKIAAAIIABgIIACgKIACgIIAQg5IAjAAIgmBxg");
	this.shape_3.setTransform(91.7,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AghA5IAAhxIBDAAIAAAZIgkAAIAAASIAhAAIAAAXIghAAIAAAWIAkAAIAAAZg");
	this.shape_4.setTransform(82.025,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgSA6IgLgCIgKgEIAAgcQAKAFAJACQAJADAIAAIAHgBQADgBABgCIABgFQAAgDgCgCIgHgEIgLgGIgLgGQgFgDgDgDQgEgEgCgFQgCgGAAgHQAAgLAGgIQAFgHAJgEQAKgEAMAAQALAAAJADQAJACAHAEIgJAXIgPgFQgHgCgGAAIgFABIgEADIgCADQABADACACIAFAFIAOAGQAIAEAGAEQAGAEADAGQADAGAAAJQAAAJgFAIQgEAJgKAFQgKAFgOAAg");
	this.shape_5.setTransform(68.75,32.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AghA5IAAhxIBDAAIAAAZIgkAAIAAASIAhAAIAAAXIghAAIAAAWIAkAAIAAAZg");
	this.shape_6.setTransform(59.925,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AgkA5IAAhxIAeAAIAABYIArAAIAAAZg");
	this.shape_7.setTransform(50.975,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AAZA5IgGgVIglAAIgFAVIgiAAIAmhxIAnAAIAmBxgAANALIgFgSIgDgJIgDgMIgCgKIgBAKIgCALIgDAKIgFASIAYAAg");
	this.shape_8.setTransform(40.2,32.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgRA6IgMgCIgKgEIAAgcQAJAFAKACQAJADAIAAIAGgBQADgBACgCIABgFQAAgDgCgCIgGgEIgMgGIgLgGQgFgDgEgDQgEgEgBgFQgCgGAAgHQAAgLAGgIQAEgHALgEQAJgEAMAAQALAAAJADQAJACAHAEIgKAXIgOgFQgHgCgGAAIgGABIgDADIgBADQAAADACACIAGAFIANAGQAIAEAGAEQAGAEADAGQADAGAAAJQAAAJgEAIQgGAJgJAFQgKAFgPAAg");
	this.shape_9.setTransform(29.9,32.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgPA5IAAgrIglhGIAhAAIATAqIAUgqIAhAAIgmBFIAAAsg");
	this.shape_10.setTransform(135.575,13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAZA5IgGgVIglAAIgFAVIgiAAIAmhxIAoAAIAlBxgAANALIgGgSIgCgJIgCgMIgDgKIgBAKIgCALIgDAKIgFASIAYAAg");
	this.shape_11.setTransform(124.45,13.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AgwA5IAAhxIAoAAQARAAANAGQANAHAGAMQAIAMAAARQgBAUgHANQgIANgNAHQgNAGgSAAgAgRAgIAHAAQANAAAHgJQAGgIAAgQQAAgKgDgHQgDgGgFgEQgFgEgIABIgJAAg");
	this.shape_12.setTransform(113.05,13.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgkA5IAAhxIAeAAIAABYIArAAIAAAZg");
	this.shape_13.setTransform(98.475,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AAZA5IgGgVIgkAAIgGAVIgiAAIAmhxIAnAAIAmBxgAAMALIgEgSIgDgJIgDgMIgCgKIgBAKIgDALIgCAKIgFASIAXAAg");
	this.shape_14.setTransform(87.7,13.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgPA5IAAhxIAfAAIAABxg");
	this.shape_15.setTransform(79.15,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAOA5IgXgqIgIAAIAAAqIgfAAIAAhxIAmAAQAOAAAKADQALAFAFAHQAFAIAAALQAAAGgCAGQgDAGgEAEQgEAEgGADIAhAygAgRgHIAGAAQAHAAAEgDQAEgDAAgIQAAgGgEgCQgDgEgIAAIgGAAg");
	this.shape_16.setTransform(71.675,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgXA3QgLgFgHgHQgHgIgDgLQgDgLAAgNQAAgRAFgNQAHgNAMgHQAMgIATAAQATAAAMAIQAMAHAGANQAFANABARQAAANgDALQgEALgHAIQgGAHgKAFQgLAEgPAAQgNAAgKgEgAgMgcQgFAEgDAHQgCAIAAAJQAAAKACAIQADAHAFAEQAFAEAHAAQAIAAAGgEQAFgEACgHQACgIAAgKQAAgOgFgJQgFgJgMAAQgIAAgFAEg");
	this.shape_17.setTransform(59.15,13.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AAlA5IAAgyIAAgKIABgMIAAgJIgBAAIgXBRIgcAAIgYhRIgBAAIABAJIABALIAAALIAAAyIgbAAIAAhxIApAAIAXBQIABAAIAXhQIApAAIAABxg");
	this.shape_18.setTransform(45.1,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AghA5IAAhxIBDAAIAAAZIgkAAIAAASIAhAAIAAAYIghAAIAAAVIAkAAIAAAZg");
	this.shape_19.setTransform(33.225,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AAlA5IAAgyIAAgKIABgMIAAgJIgBAAIgXBRIgcAAIgYhRIgBAAIABAJIABALIAAALIAAAyIgbAAIAAhxIApAAIAXBQIABAAIAXhQIApAAIAABxg");
	this.shape_20.setTransform(20.9,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,44.6);


(lib.LOGORbAHorizontalRGBsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO_RbA_Horizontal_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACgBIgCAOIgEAAIAEgaIAJASIAIgSIAAABIAFAZIgEAAIgCgOIgHAPgAgPANIAAgUIgGAAIAAgEIAPAAIAAAEIgGAAIAAAUg");
	this.shape.setTransform(102.7839,68.9611,0.729,0.729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(55.7289,63.1815,0.7289,0.7289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(75.0363,42.2805,0.7289,0.7289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(75.0824,43.2373,0.7289,0.7289);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(75.2203,40.4946,0.7289,0.7289);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(73.1871,37.916,0.7289,0.7289);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(71.8354,47.4378,0.7289,0.7289);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(72.3488,40.4049,0.7289,0.7289);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(63.1277,63.8488,0.7289,0.7289);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(101.3322,59.8479,0.7289,0.7289);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(99.1596,65.1955,0.7289,0.7289);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(98.7926,63.6567,0.7289,0.7289);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(99.215,62.5441,0.7289,0.7289);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(99.6309,61.5094,0.7289,0.7289);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(97.0053,68.1033,0.7289,0.7289);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(103.9667,45.9617,0.7289,0.7289);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(86.7637,58.0257,0.7289,0.7289);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(89.9528,50.4994,0.7289,0.7289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(68.6209,51.3724,0.7289,0.7289);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(74.8188,48.6025,0.7289,0.7289);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(61.3947,56.3093,0.7289,0.7289);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(64.4743,47.8759,0.7289,0.7289);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(58.0417,56.8887,0.7289,0.7289);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(76.3556,33.9043,0.7289,0.7289);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(68.4287,34.3341,0.7289,0.7289);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(72.6564,78.3482,0.7289,0.7289);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(76.957,77.3946,0.7289,0.7289);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(75.1772,77.8866,0.7289,0.7289);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(81.622,74.3878,0.7289,0.7289);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(70.8901,78.2146,0.7289,0.7289);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(63.7637,74.8069,0.7289,0.7289);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(79.1255,76.447,0.7289,0.7289);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(65.7135,76.6474,0.7289,0.7289);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(72.3648,77.9595,0.7289,0.7289);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(60.8662,74.6612,0.7289,0.7289);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(80.401,57.7341,0.7289,0.7289);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(82.1089,55.2749,0.729,0.729);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(93.5231,45.1774,0.7289,0.7289);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(53.1951,45.1774,0.7289,0.7289);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(53.1958,45.1781,0.7289,0.7289);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(73.3887,45.1788,0.729,0.729);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(147.6014,48.0908,0.7289,0.7289);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(178.8705,48.0908,0.7289,0.7289);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(136.7411,47.9996,0.7289,0.7289);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(207.9164,48.0908,0.7289,0.7289);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(197.4569,48.109,0.7289,0.7289);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(188.1273,48.0908,0.7289,0.7289);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(168.6297,48.109,0.7289,0.7289);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(158.9173,48.0908,0.7289,0.7289);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(121.7261,47.0703,0.7289,0.7289);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(127.539,49.6396,0.7289,0.7289);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(208.0257,32.0371,0.7289,0.7289);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(124.095,32.0189,0.7289,0.7289);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(193.8672,31.9096,0.7289,0.7289);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(179.326,32.1829,0.7289,0.7289);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(164.3839,32.0371,0.7289,0.7289);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(150.2254,32.0371,0.7289,0.7289);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(136.5224,32.0371,0.7289,0.7289);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(165.614,62.8903,0.7289,0.7289);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(165.6171,56.8594,0.7289,0.7289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.3,24.1,179.89999999999998,61.6);


(lib.image3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,140,200), null);


(lib.image2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,140,200), null);


(lib.image1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,140,200), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAASIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
	this.shape.setTransform(104.725,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAyIgWgnIgMAAIAAAnIgVAAIAAhjIAdAAQANAAAJAEQAIADAFAGQAEAHAAAKQAAAHgDAFQgCAFgEACIgJAHIAdArgAgSgEIAHAAQAKAAAEgEQAFgEgBgGQABgIgFgCQgEgDgKAAIgHAAg");
	this.shape_1.setTransform(96.65,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAvQgJgDgGgHQgGgHgDgJQgDgJAAgMQAAgPAGgLQAFgMAKgGQALgHAPAAQAQAAALAHQAKAGAFAMQAGAMAAAOQAAAMgDAJQgDAJgGAHQgGAHgJADQgJAFgMAAQgLAAgJgFgAgNgdQgGAFgDAHQgCAHAAAKQAAAKACAIQADAHAFAEQAGAFAIAAQAJAAAGgFQAFgEADgHQACgIAAgKQAAgPgGgJQgFgJgOAAQgIAAgFAEg");
	this.shape_2.setTransform(85.875,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAyIAAgwIABgJIAAgMIAAgIIAAAAIgaBNIgSAAIgYhNIgBAAIAAAIIABAMIABALIAAAuIgUAAIAAhjIAeAAIAXBLIAAAAIAYhLIAdAAIAABjg");
	this.shape_3.setTransform(73.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAyIgrhLIgBAAIABAKIAAAJIABAJIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIAAgJIAAgJIgBgIIAAgwIATAAIAABjg");
	this.shape_4.setTransform(57.825,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAyIgYgnIgKAAIAAAnIgWAAIAAhjIAdAAQANAAAIAEQAKADAEAGQAEAHAAAKQAAAHgCAFQgDAFgFACIgJAHIAeArgAgRgEIAGAAQALAAADgEQAEgEABgGQgBgIgEgCQgEgDgKAAIgGAAg");
	this.shape_5.setTransform(48.2,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgHgXIgCgGIgCgHIgCgHIgBAHIgCAIIgCAFIgHAXIAZAAg");
	this.shape_6.setTransform(38.125,14.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAASIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
	this.shape_7.setTransform(29.625,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIAVAAIAABSIAoAAIAAARg");
	this.shape_8.setTransform(21.95,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6CC14C").s().p("Ap1CWIAAkrITrAAIAAErg");
	this.shape_9.setTransform(63,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,30);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6CC14C").s().p("AgdTiMAAAgnDIA7AAMAAAAnDg");
	this.shape.setTransform(3,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,250);


// stage content:
(lib.WBAY_214318_MM_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(223,275,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({y:220,alpha:1},14).wait(126));

	// text3
	this.instance_1 = new lib.text3("synched",0);
	this.instance_1.setTransform(221,176.6,1,1,0,0,0,74,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({y:186.6,alpha:1},14,cjs.Ease.get(1)).wait(140));

	// text2
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(220,73.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).to({y:83.6,alpha:1},14,cjs.Ease.get(1)).wait(154));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(220,16.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({y:26.6,alpha:1},14,cjs.Ease.get(1)).wait(168));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(80.1,273.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({y:228.5,alpha:1},14,cjs.Ease.get(1)).wait(182));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(220,5,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},14).wait(196));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(45));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(36).to({alpha:0},15,cjs.Ease.get(1)).wait(45));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},14,cjs.Ease.get(1)).wait(85).to({alpha:0},15,cjs.Ease.get(1)).wait(96));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(196));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,116.6,152,173.4);
// library properties:
lib.properties = {
	id: 'D40151DE091C4EC7B98ADAA070326B17',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"image1.jpg", id:"image1"},
		{src:"image2.jpg", id:"image2"},
		{src:"image3.jpg", id:"image3"}
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
an.compositions['D40151DE091C4EC7B98ADAA070326B17'] = {
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