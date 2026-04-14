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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,200);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,200);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,200);// helper functions:

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
	this.shape.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape.setTransform(123.925,50.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AATAlIgOgqIgBgFIgCgGIgBgEIgBgFIAAAAIAAAFIgBAEIgCAGIgBAFIgOAqIgNAAIgVhJIAMAAIALAoIACAIIACAHIABAHIAAAAIABgEIABgGIACgFIABgFIAOgqIALAAIAOAqIACAHIACAGIABAHIAAAAIABgHIACgHIACgIIALgoIAMAAIgVBJg");
	this.shape_1.setTransform(114.225,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgIQgCgHAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAHQgCAIgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_2.setTransform(104.625,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgnAyIAAhjIAfAAQAOAAALAFQALAGAGALQAGALAAAQQAAAQgGALQgHAMgLAFQgMAGgPAAgAgbAoIAOAAQAUAAAKgKQALgKAAgUQAAgNgFgIQgEgJgJgFQgJgEgLAAIgRAAg");
	this.shape_3.setTransform(95.575,48.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgdA2IgDgBIAAgJIADABIAFAAQAEAAADgCQADgBACgDQADgDABgFIAEgKIgehKIANAAIAQArIADAIIABAFIABAHIAAAAIAEgJIADgLIAQgrIAMAAIggBVQgDAHgCAFQgEAFgFADQgFACgHAAg");
	this.shape_4.setTransform(83.15,51.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgOAjQgIgFgFgIQgEgJAAgNQAAgKAEgJQAEgJAIgFQAHgFAJAAQAKAAAGAEQAHAFAEAIQAEAHAAAKIAAAGIgzAAQAAANAGAIQAHAGAKAAIANgBIALgEIAAAKQgFADgGAAQgGACgHAAQgKAAgIgEgAAUgGQAAgHgCgFQgCgFgFgDQgEgCgGAAQgIgBgGAHQgFAFgBALIAnAAIAAAAg");
	this.shape_5.setTransform(75.775,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_6.setTransform(67.575,50.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgIQgCgHAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAHQgCAIgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_7.setTransform(59.075,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAmAyIAAg/IAAgJIAAgIIABgIIgBAAIgiBYIgIAAIgihYIAAAAIAAAIIABAIIAAAKIAAA+IgLAAIAAhjIARAAIAfBSIAAAAIAghSIARAAIAABjg");
	this.shape_8.setTransform(48.575,48.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgIQgCgHAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAHQgCAIgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_9.setTransform(34.525,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIAAAHIABAKIAAAJIAAA5IgLAAIAAhjIANAAIA2BTIAAAAIAAgHIgBgKIAAgJIAAg5IALAAIAABjg");
	this.shape_10.setTransform(25.075,48.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgJARIADgLIACgLIACgLIALAAIABACIgDAKIgEALIgEAKg");
	this.shape_11.setTransform(110.225,36.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AAAAtQgFgDgCgEQgDgFAAgJIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAAqQAAAIADADQAEADAFABIAGgBIAEgBIAAAJIgFACIgHAAQgGAAgEgCg");
	this.shape_12.setTransform(106.125,32.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgQAmQgFgCgFgCIAAgLIALAFIANACQAJAAAEgDQAFgEAAgFQAAgDgCgDQgCgCgEgCIgKgFIgNgFQgFgCgDgEQgDgEAAgGQAAgKAIgEQAIgGALAAQAHAAAGACIALADIgEAJIgKgDQgFgCgFAAQgHAAgEADQgFADAAAEQAAADACADIAHAEIAKAFIAMAEQAFADADAEQADAEAAAGQAAAHgEAFQgDAFgHADQgHACgIAAQgIAAgGgBg");
	this.shape_13.setTransform(100.425,33.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgOAjQgIgFgFgJQgEgIAAgMQAAgLAEgKQAEgIAIgFQAHgFAJAAQAKAAAGAFQAHAEAEAHQAEAIAAAKIAAAGIgzAAQAAAOAGAGQAHAHAKAAIANgBIALgEIAAAKQgFACgGACQgGABgHAAQgKAAgIgEgAAUgGQAAgGgCgFQgCgGgFgCQgEgDgGgBQgIABgGAFQgFAHgBAKIAnAAIAAAAg");
	this.shape_14.setTransform(93.175,33.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgVAmIAAhKIAKAAIABAOIAAAAIAGgHQAEgEADgCQAEgCAGAAIAEAAIAFABIgCAKIgEAAIgEgBQgFAAgDACQgEACgDADQgCAEgCAFQgCAEAAAGIAAAng");
	this.shape_15.setTransform(86.85,32.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgOAjQgIgFgFgJQgEgIAAgMQAAgLAEgKQAEgIAIgFQAHgFAJAAQAKAAAGAFQAHAEAEAHQAEAIAAAKIAAAGIgzAAQAAAOAGAGQAHAHAKAAIANgBIALgEIAAAKQgFACgGACQgGABgHAAQgKAAgIgEgAAUgGQAAgGgCgFQgCgGgFgCQgEgDgGgBQgIABgGAFQgFAHgBAKIAnAAIAAAAg");
	this.shape_16.setTransform(79.625,33.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAAAtQgFgDgCgEQgDgFAAgJIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAAqQAAAIADADQAEADAFABIAGgBIAEgBIAAAJIgFACIgHAAQgGAAgEgCg");
	this.shape_17.setTransform(73.125,32.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_18.setTransform(66.475,32.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_19.setTransform(60.2,31.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgNAlQgGgDgFgFQgEgFgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAFQgEAFgHADQgGACgIAAQgHAAgGgCgAgQgVQgGAIAAANQAAAJADAGQACAHAFAEQAFADAHABQAIgBAFgDQAFgEACgHQADgGAAgJQAAgIgDgGQgCgHgFgDQgFgEgIAAQgLAAgFAHg");
	this.shape_20.setTransform(50.475,33.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIAAAIIABAJIAAAKIAAA4IgLAAIAAhjIANAAIA2BTIAAAAIAAgHIgBgJIAAgKIAAg5IALAAIAABjg");
	this.shape_21.setTransform(41.025,31.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgJARIADgLIACgLIACgLIALAAIABACIgDAKIgEALIgEAKg");
	this.shape_22.setTransform(117.075,19.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgQAlQgFgBgFgCIAAgKIALAEIANACQAJgBAEgDQAFgDAAgFQAAgDgCgCQgCgDgEgCIgKgFIgNgFQgFgCgDgEQgDgEAAgGQAAgKAIgEQAIgGALAAQAHAAAGABIALAEIgEAJIgKgDQgFgBgFAAQgHAAgEACQgFACAAAFQAAAEACACIAHAEIAKAFIAMAEQAFADADAEQADAEAAAGQAAAHgEAFQgDAFgHACQgHADgIAAQgIAAgGgCg");
	this.shape_23.setTransform(112.225,16);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AAAAtQgFgCgCgFQgDgGAAgIIAAgsIgLAAIAAgFIALgEIAEgRIAGAAIAAARIAWAAIAAAJIgWAAIAAAsQAAAGADAEQAEAEAFAAIAGgBIAEgBIAAAIIgFADIgHAAQgGAAgEgCg");
	this.shape_24.setTransform(106.325,15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_25.setTransform(99.675,15.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgOAiQgIgEgFgIQgEgJAAgNQAAgKAEgJQAEgJAIgFQAHgFAJAAQAKAAAGAEQAHAFAEAIQAEAHAAAKIAAAGIgzAAQAAANAGAIQAHAGAKAAIANgBIALgEIAAAKQgFACgGABQgGACgHAAQgKAAgIgFgAAUgGQAAgGgCgGQgCgFgFgDQgEgCgGAAQgIgBgGAHQgFAFgBALIAnAAIAAAAg");
	this.shape_26.setTransform(91.475,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgLAAgFAGQgEAGAAAMIAAApIgLAAIAAgvQAAgGgBgEQgCgEgEgCQgDgCgFAAQgIAAgEADQgFADgCAGQgCAGAAAJIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHIAIgEQAEgBAFAAQAIAAAGADQAFADACAHIABAAQAEgHAGgDQAGgDAIAAQAMAAAHAGQAGAHAAAOIAAAwg");
	this.shape_27.setTransform(81.075,15.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgcA2IgFgBIAAgJIAEABIAEAAQAEAAAEgCQADgBACgDQACgDACgFIAEgKIgehKIAMAAIARArIADAIIACAFIAAAHIAAAAIADgJIAEgLIAQgrIAMAAIghBVQgCAHgCAFQgEAFgFADQgFACgHAAg");
	this.shape_28.setTransform(71.05,17.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgSAkQgFgCgDgFQgDgFAAgHQAAgMAJgFQAIgGASAAIANgBIAAgEQAAgKgFgEQgDgEgIAAQgFAAgFACIgLAEIgDgJIALgEQAHgCAHAAQANAAAGAGQAHAGAAANIAAAyIgIAAIgCgLIgBAAIgGAHIgIAEQgFACgFAAQgHAAgGgDgAAHABQgNAAgGAEQgFAEAAAIQAAAGAEADQADADAHAAQAJAAAHgFQAFgGABgLIAAgHg");
	this.shape_29.setTransform(63.45,16.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgfAyIAAhjIAbAAQASAAAJAIQAJAHAAAOQAAAGgCAGQgCAGgFAEQgFAEgHACQgIADgKAAIgMAAIAAAngAgTAAIALAAQAIAAAHgBQAGgCADgEQAEgEAAgJQAAgKgHgEQgGgFgNAAIgNAAg");
	this.shape_30.setTransform(55.925,14.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgIQgCgHAAgJQAAgLAEgJQAEgJAIgEQAHgFAKAAQAKAAAIAFQAIAEAEAJQAEAJAAALQAAAJgCAHQgCAIgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFAEAHAAQAIAAAFgEQAFgEACgGQADgHAAgJQAAgIgDgGQgCgHgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_31.setTransform(43.625,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIAAAHIABAKIAAAKIAAA4IgLAAIAAhjIANAAIA2BSIAAAAIAAgGIgBgKIAAgJIAAg5IALAAIAABjg");
	this.shape_32.setTransform(34.175,14.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFAlQgCgCAAgFQAAgFACgCQACgCADAAQADAAADACQACACAAAFQAAAFgCACQgDACgDAAQgDAAgCgCgAgFgXQgCgCAAgEQAAgFACgCQACgCADAAQADAAADACQACACAAAFQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_33.setTransform(114.65,-1.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgQAmQgFgCgFgCIAAgLIALAFQAHACAGgBQAJAAAEgCQAFgDAAgGQAAgDgCgDQgCgCgEgCIgKgFIgNgEQgFgDgDgEQgDgEAAgGQAAgJAIgGQAIgFALAAQAHAAAGACIALADIgEAJIgKgDQgFgBgFAAQgHAAgEACQgFADAAAEQAAADACADIAHAEIAKAFIAMAEQAFADADAEQADAEAAAGQAAAHgEAFQgDAFgHADQgHACgIAAQgIAAgGgBg");
	this.shape_34.setTransform(109.525,-1.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AAUA1IAAgwQAAgIgEgFQgFgEgIAAQgIAAgFADQgFADgCAGQgCAFAAAJIAAAnIgLAAIAAhpIALAAIAAAgIAAAFIgBAFIABAAQADgEADgCQAEgDAEgBQAFgCAEAAQAJAAAGADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_35.setTransform(101.925,-2.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAAAtQgFgDgCgFQgDgEAAgJIAAgrIgLAAIAAgGIALgEIAEgRIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQAEADAFAAIAGAAIAEgBIAAAJIgFABIgHABQgGAAgEgCg");
	this.shape_36.setTransform(95.075,-1.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_37.setTransform(88.425,-1.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgNAlQgGgEgFgEQgEgFgDgHQgCgIAAgJQAAgLAEgJQAEgJAIgEQAHgFAKAAQAKAAAIAFQAIAEAEAJQAEAJAAALQAAAJgCAIQgCAHgFAFQgEAEgHAEQgGACgIAAQgHAAgGgCgAgQgVQgGAIAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAHg");
	this.shape_38.setTransform(79.925,-1.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgLAAgFAGQgEAGAAAMIAAApIgLAAIAAgvQAAgGgBgEQgCgEgEgCQgDgCgFAAQgIAAgEADQgFADgCAGQgCAGAAAJIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHIAIgEQAEgBAFAAQAIAAAGADQAFADACAHIABAAQAEgHAGgDQAGgDAIAAQAMAAAHAGQAGAHAAAOIAAAwg");
	this.shape_39.setTransform(69.275,-1.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AggAzIAAgKIAbgbIALgNQAGgFACgGQADgGAAgGQAAgJgFgEQgFgFgHAAQgIAAgFADQgGACgFAFIgHgIIAJgGIAKgEQAGgCAGAAQAIAAAHAEQAGADAEAGQAEAGAAAIQAAAIgEAHQgDAGgFAGIgOAOIgUAWIAAAAIAyAAIAAALg");
	this.shape_40.setTransform(55.125,-2.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AAHAyIAAhGIAAgGIABgGIAAgFIgEADIgEAFIgLAJIgGgIIAagVIAJAAIAABjg");
	this.shape_41.setTransform(46.225,-2.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#12127D").s().p("AgEAiIAAgdIgcAAIAAgJIAcAAIAAgdIAJAAIAAAdIAcAAIAAAJIgcAAIAAAdg");
	this.shape_42.setTransform(35.525,-2.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.2,148,74.2);


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
	this.shape.graphics.f("#12127D").s().p("AgBA5QgFgCgEgHQgEgGAAgMIAAg4IgOAAIAAgHIAOgFIAGgVIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAHAAIAIgBIAFgBIAAALIgGACIgJABQgIAAgGgDg");
	this.shape.setTransform(127.15,74.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgNAtQgKgGgGgLQgFgLAAgQQAAgRAGgLQAFgMALgEQAKgGAMAAIAOABIALAEIgEAMIgKgDIgLgBQgKgBgGAFQgHAEgDAJQgDAIAAALQAAAMADAIQADAIAHAFQAGAEAJAAQAHAAAGgBIAMgFIAAAOIgLADQgGACgIAAQgMAAgKgFg");
	this.shape_1.setTransform(119.925,75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAJQAIAKAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgDQgFgEgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_2.setTransform(110.375,75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgOBXIgGgBIAAgMIAGABIAGABQAGAAADgEQAEgDAAgJIAAhvIAOAAIAABvQAAAJgDAGQgCAGgGAEQgGADgIAAgAAGhGQgDgCAAgFQAAgFADgCQACgDAEAAQAEAAACADQADACAAAFQAAAFgDACQgCADgEAAQgEAAgCgDg");
	this.shape_3.setTransform(101.875,76.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgRAvQgIgEgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIAEQgIADgKAAQgJAAgIgDgAgVgbQgHAKAAARQAAAMADAIQADAIAGAFQAHAEAJABQAKgBAHgEQAGgFADgIQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_4.setTransform(95.425,75.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgbAxIAAhgIAMAAIACASIAAAAQADgFAFgFQAEgEAFgCQAFgDAHAAIAGAAIAGABIgCAOIgGgBIgFAAQgGAAgFACQgEACgEAFQgEAEgCAGQgCAGAAAHIAAAzg");
	this.shape_5.setTransform(86.975,75.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgpBGIAAiKIAMAAIACAPIAAAAIAHgIQAEgFAGgCQAGgBAHAAQASAAALAMQAKAMAAAZQAAARgFAJQgEAMgJAFQgJAHgMAAQgHgBgGgCQgGgCgEgDIgHgIIgBAAIABAIIAAAJIAAAngAgPg1QgGAEgDAHQgDAIAAALIAAADQAAAMADAIQADAJAGAEQAGAEAKAAQAIAAAGgEQAGgFADgIQADgJAAgLQAAgRgGgKQgHgLgOAAQgJAAgGAFg");
	this.shape_6.setTransform(77.425,77.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAJQAIAKAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgDQgFgEgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_7.setTransform(61.975,75.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgbAxIAAhgIAMAAIACASIAAAAQADgFAFgFQAEgEAFgCQAFgDAHAAIAGAAIAGABIgCAOIgGgBIgFAAQgGAAgFACQgEACgEAFQgEAEgCAGQgCAGAAAHIAAAzg");
	this.shape_8.setTransform(53.875,75.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgDgDAAgFQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAFgDADQgCACgEAAQgDAAgCgCg");
	this.shape_9.setTransform(47.325,74.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAAA5QgHgCgDgHQgEgGAAgMIAAg4IgNAAIAAgHIANgFIAGgVIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAHAAIAHgBIAGgBIAAALIgHACIgJABQgHAAgFgDg");
	this.shape_10.setTransform(41.8,74.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgQAAgGAKQgHAIABASIAAAxIgPAAIAAhgIALAAIADAPIABAAQADgFAEgEQAFgEAGgBQAGgCAFAAQARAAAKAIQAIAIAAATIAAA+g");
	this.shape_11.setTransform(33.2,75.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAJQAIAKAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgDQgFgEgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_12.setTransform(22.625,75.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgXBJIAAhSIgPAAIAAgNIAPgIIAAgIQABgNAEgHQAFgIAHgDQAIgDALAAQAIAAAHACIALADIgHAVIgHgCIgJgBQgGAAgCADQgEAEAAAGIAAAGIAZAAIAAAVIgZAAIAABSg");
	this.shape_13.setTransform(108.3,51.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgWBJIAAhSIgQAAIAAgNIAQgIIAAgIQgBgNAFgHQAFgIAHgDQAIgDALAAQAIAAAHACIALADIgHAVIgHgCIgJgBQgGAAgCADQgDAEAAAGIAAAGIAYAAIAAAVIgYAAIAABSg");
	this.shape_14.setTransform(100.95,51.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgTAyQgJgDgHgHQgHgHgEgKQgDgKAAgNQAAgRAGgMQAGgLALgHQAMgGAOAAQAPAAALAGQALAHAHALQAGAMAAARQAAANgDAKQgEAKgGAHQgHAHgJADQgKAEgLAAQgKAAgJgEgAgPgWQgFAHAAAPQAAAKACAHQACAHAFADQAFAEAGAAQAIAAAEgEQAFgDACgHQACgHAAgKQAAgKgCgGQgCgHgFgEQgEgDgIAAQgKAAgFAIg");
	this.shape_15.setTransform(90.775,53.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgaA9QgKgIgFgPQgFgQAAgWQAAgVAEgQQAFgPAKgIQALgJAQAAQAQAAALAJQAKAIAFAPQAFAQAAAVQAAARgCANQgDAMgFAJQgGAKgJAEQgJAFgNAAQgPAAgLgJgAgKgoQgEAFgCALQgCAJAAAPQAAAPACALQACALAEAEQAEAGAGAAQAHAAAEgGQAEgEACgLQACgKAAgQQAAgPgCgJQgCgLgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_16.setTransform(74.575,52.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgaA9QgKgIgFgPQgFgQAAgWQAAgVAEgQQAFgPAKgIQALgJAQAAQAQAAALAJQAKAIAFAPQAFAQAAAVQAAARgCANQgDAMgFAJQgGAKgJAEQgJAFgNAAQgPAAgLgJgAgKgoQgEAFgCALQgCAJAAAPQAAAPACALQACALAEAEQAEAGAGAAQAHAAAEgGQAEgEACgLQACgKAAgQQAAgPgCgJQgCgLgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_17.setTransform(63.725,52.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgcBDQgJgCgHgEIAAgYQAHADAKADQAJACAJAAQAJAAAEgCQAGgCADgFQADgFAAgHQAAgKgGgFQgHgGgNAAIgLABIgJACIgMgGIAFhEIBJAAIAAAYIgwAAIgCAbIAHgBIAJgBQANAAAJAFQAKAFAGAJQAFAIAAANQAAAPgGALQgGAKgMAGQgMAGgRAAQgLAAgJgCg");
	this.shape_18.setTransform(52.925,52.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgGBOIAAgTQgMgBgKgCQgJgCgIgDIAAgYIASAHQALADAKAAIAAgcQgOgGgJgFQgJgGgEgGQgEgHAAgJQAAgKAGgGQAFgHAJgEQAJgFALAAIAAgPIAMAAIAAAOQALAAAJACQAJADAJAEIgIAVQgIgDgIgBIgOgDIAAAcIAUAIQAJAEAGAGQAGAHAAALQAAAOgKAJQgLAJgUADIAAATgAAGAkQAHAAADgDQADgDAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgEgEIgHgDgAgMglIgEACQgBABAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAADACACQABACADACIAGAEIAAgWg");
	this.shape_19.setTransform(42.075,52.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgJAuIAAgkIgkAAIAAgTIAkAAIAAgkIATAAIAAAkIAkAAIAAATIgkAAIAAAkg");
	this.shape_20.setTransform(126.625,29.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAXA7QgIgMAAgUQAAgUAIgKQAHgMARABQAQgBAIAMQAJAKAAAUQAAAUgIAMQgIALgRgBQgQABgIgLgAApAKQgDAFAAAMQAAAMADAFQACAHAEgBQAFAAACgFQACgGAAgMQAAgMgCgFQgCgGgFAAQgEAAgCAGgAgwBEIBKiHIAWAAIhKCHgAhHAFQgIgLAAgUQAAgVAIgLQAHgLARABQAQgBAIALQAJALAAAVQAAAUgIALQgIALgRgBQgQABgIgLgAg1grQgDAFAAAMQAAAMADAFQACAHAEgBQAFABACgHQACgFAAgMQAAgMgCgFQgCgGgFAAQgEAAgCAGg");
	this.shape_21.setTransform(107.775,29.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgaA9QgKgIgFgPQgFgQAAgWQAAgVAEgQQAFgPAKgIQALgJAQAAQAQAAALAJQAKAIAFAPQAFAQAAAVQAAAQgCAOQgDANgFAIQgGAKgJAEQgJAFgNAAQgPAAgLgJgAgKgoQgEAFgCALQgCAJAAAPQAAAPACALQACALAEAEQAEAGAGAAQAHAAAEgGQAEgEACgLQACgKAAgQQAAgPgCgJQgCgLgEgFQgEgFgHgBQgGABgEAFg");
	this.shape_22.setTransform(93.775,29.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AguBFIAAgUIAigjIAQgQQAGgHADgGQACgGAAgHQAAgIgEgEQgFgEgGAAQgIAAgHAEQgIADgIAHIgQgSIANgKQAGgEAJgDQAJgDALAAQANAAAKAFQAJAFAGAIQAFAIAAALQAAALgFAJQgEAKgIAIIgVAUIgQAQIAAACIA6AAIAAAYg");
	this.shape_23.setTransform(82.975,29.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgcBBQgMgFgHgKQgJgJgDgMQgFgNAAgQQAAgUAIgQQAGgPAOgJQAPgJAVAAQAWAAAOAJQAPAJAHAPQAHAQgBAUQAAAQgDANQgEAMgIAJQgIAKgMAFQgNAFgQAAQgPAAgNgFgAgTgnQgHAFgDALQgEAKgBANQABAOAEAKQADALAHAFQAIAFALABQAMgBAIgFQAIgFADgLQADgKAAgOQABgVgJgLQgHgNgTAAQgLAAgIAGg");
	this.shape_24.setTransform(65.05,29.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgaA+QgOgIgHgQQgIgQAAgWQAAgVAJgPQAIgQAQgIQAPgJAWAAQALAAAKACQALADAIAEIgJAXQgGgEgIgCQgIgCgJAAQgNAAgIAGQgJAGgFAKQgFAKAAANQAAAOAEAKQADAKAIAGQAIAGALAAIALgBIAIgBIAAgcIgaAAIAAgXIA2AAIAABFIgXAGQgLACgPAAQgTAAgOgIg");
	this.shape_25.setTransform(50.425,29.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgbBBQgNgFgIgKQgHgJgEgMQgEgNAAgQQAAgUAGgQQAIgPAOgJQAOgJAWAAQAVAAAPAJQAOAJAHAPQAGAQABAUQgBAQgDANQgEAMgIAJQgIAKgMAFQgMAFgRAAQgQAAgLgFgAgSgnQgIAFgEALQgDAKAAANQAAAOADAKQAEALAIAFQAHAFALABQANgBAHgFQAHgFAEgLQAEgKAAgOQgBgVgHgLQgJgNgRAAQgMAAgHAGg");
	this.shape_26.setTransform(36.2,29.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgxBEIAAiHIAqAAQAaAAAOAIQAOAHAAATQAAAIgCAGQgDAHgFAEQgEAEgHABIAAABQAHABAFADQAGADADAGQADAHAAAKQAAANgGAJQgGAIgLAFQgLAFgPAAgAgUAsIASAAQAMAAAFgFQAGgFAAgIQAAgFgDgEQgCgEgFgCQgFgCgJAAIgRAAgAgUgNIAQAAQAMAAAFgEQAEgEAAgIQAAgIgFgDQgGgDgLAAIgPAAg");
	this.shape_27.setTransform(22.625,29.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgMAWIAEgPIADgOIACgOIAPAAIABACIgEAOIgFAOIgFANg");
	this.shape_28.setTransform(110.575,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AglBGIgFgCIAAgMIAEABIAGAAQAGAAAEgCQAEgBADgEQACgFACgFIAGgOIgnhfIAQAAIAVA4IADAKIADAHIACAIIAAAAIADgMIAGgNIAUg4IAPAAIgpBuQgEAIgEAHQgEAGgGAEQgHAEgJAAg");
	this.shape_29.setTransform(104.05,10.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgXAuQgHgCgEgHQgEgGAAgJQAAgPAMgHQALgHAXgBIAQgBIAAgGQAAgMgFgFQgGgFgKAAQgGAAgHACIgNAGIgEgMIAOgFQAJgDAIAAQARAAAJAIQAIAIABAQIAABBIgLAAIgDgOIgBAAIgIAJQgEADgHACQgFACgHAAQgKAAgGgEgAAKABQgSABgHAFQgHAFgBAKQAAAIAGAEQAFAEAHAAQAMAAAJgHQAIgHAAgPIAAgJg");
	this.shape_30.setTransform(94.25,8.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AAwBAIAAhRIAAgLIABgLIABgJIgBAAIgrBwIgMAAIgrhwIgBAAIABAIIABAMIAAAMIAABQIgOAAIAAh/IAVAAIApBqIAAAAIAqhqIAVAAIAAB/g");
	this.shape_31.setTransform(81.5,7.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgUAwQgIgCgFgCIAAgOIAOAFQAIADAJAAQALAAAGgEQAFgEAAgHQAAgEgCgDQgCgDgFgDIgOgGIgQgGQgHgEgDgFQgEgFAAgIQAAgMAKgHQAKgGAPAAQAJAAAHACIAOAEIgFAMIgMgFIgOgBQgJAAgGADQgFAEAAAFQAAAFADACQACADAGADIANAGIAQAGQAGAEAEAEQADAFAAAJQAAAJgEAGQgFAGgIADQgJAEgLAAQgKAAgHgCg");
	this.shape_32.setTransform(64.525,8.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgDgDAAgFQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAFgDADQgCACgEAAQgDAAgCgCg");
	this.shape_33.setTransform(57.975,6.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAaBFIAAg/QAAgKgGgHQgFgFgMgBQgJAAgHAFQgGAEgDAIQgDAGABAMIAAAzIgPAAIAAiIIAPAAIAAAoIAAAHIgBAHIABAAQADgFAFgDQAEgEAGgCQAFgCAGAAQAMAAAIAFQAIADAEAIQADAHAAAMIAAA/g");
	this.shape_34.setTransform(50.25,6.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgHBAIAAhyIgoAAIAAgNIBfAAIAAANIgoAAIAAByg");
	this.shape_35.setTransform(39.75,7.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.7,148,95.7);


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
	this.shape.graphics.f("#B20000").s().p("AgQBAIAAhjIggAAIAAgcIBhAAIAAAcIggAAIAABjg");
	this.shape.setTransform(126.925,36.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AAQBAIguhZIgBAAIABAKIABAMIAAAJIAAA6IgfAAIAAh/IAtAAIAuBYIABAAIgBgKIAAgLIAAgJIAAg6IAeAAIAAB/g");
	this.shape_1.setTransform(114.1,36.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AglBAIAAh/IBLAAIAAAcIgoAAIAAAUIAlAAIAAAbIglAAIAAAYIAoAAIAAAcg");
	this.shape_2.setTransform(101.95,36.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AgUBAIgph/IAnAAIARBAIACAJIACAMIABAJIACgJIACgLIABgKIAShAIAoAAIgqB/g");
	this.shape_3.setTransform(90.55,36.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AglBAIAAh/IBLAAIAAAcIgpAAIAAAUIAmAAIAAAbIgmAAIAAAYIApAAIAAAcg");
	this.shape_4.setTransform(79.65,36.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgUBBIgMgCIgMgFIAAgfQAKAFALADQALADAIAAIAIgBIAFgEQABgCAAgDQAAgDgCgCIgHgFIgNgHIgNgHQgGgDgDgEQgFgEgCgGQgCgGAAgIQAAgNAGgIQAGgJALgEQALgEANAAQANAAAKADIASAGIgKAbIgRgGQgIgCgHAAIgGABQgDABgBACIgCAEQAAADACACQADADAFACIAPAIQAJAEAGAFQAHAEAEAGQADAHAAAKQAAALgGAJQgFAJgKAGQgMAGgRAAg");
	this.shape_5.setTransform(64.75,36.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AglBAIAAh/IBLAAIAAAcIgoAAIAAAUIAlAAIAAAbIglAAIAAAYIAoAAIAAAcg");
	this.shape_6.setTransform(54.8,36.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AgpBAIAAh/IAjAAIAABjIAwAAIAAAcg");
	this.shape_7.setTransform(44.75,36.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AAbBBIgGgZIgpAAIgGAZIgmAAIAqiAIAtAAIAqCAgAAOAMIgGgUIgCgKIgDgNIgDgLIgBAKIgDAOIgDAKIgFAUIAaAAg");
	this.shape_8.setTransform(32.625,36.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgUBBIgMgCIgMgFIAAgfQAKAFALADQAKADAKAAIAHgBIAEgEQACgCAAgDQAAgDgCgCIgIgFIgMgHIgNgHQgFgDgFgEQgEgEgCgGQgCgGAAgIQAAgNAGgIQAGgJALgEQALgEANAAQANAAAKADIASAGIgLAbIgQgGQgIgCgHAAIgGABQgDABgCACIgBAEQAAADADACQACADAEACIAPAIQAKAEAHAFQAGAEAEAGQADAHAAAKQAAALgFAJQgGAJgLAGQgLAGgQAAg");
	this.shape_9.setTransform(21.05,36.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgQBAIAAgxIgrhOIAmAAIAVAvIAWgvIAmAAIgqBNIAAAyg");
	this.shape_10.setTransform(139.875,14.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAbBAIgGgYIgpAAIgGAYIgmAAIAqh/IAtAAIAqB/gAAOAMIgGgUIgCgKIgDgNIgDgMIgBALIgDAOIgDAKIgFAUIAaAAg");
	this.shape_11.setTransform(127.375,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("Ag1BAIAAh/IAsAAQAUAAAOAHQAPAHAHAOQAIANAAAUQAAAWgJAPQgIAOgQAIQgPAHgTAAgAgTAkIAIAAQAPAAAHgJQAIgKAAgRQAAgMgEgIQgDgIgGgDQgGgEgJAAIgKAAg");
	this.shape_12.setTransform(114.5,14.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgpBAIAAh/IAiAAIAABjIAxAAIAAAcg");
	this.shape_13.setTransform(98.15,14.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AAbBAIgGgYIgpAAIgGAYIgmAAIAqh/IAtAAIAqB/gAAOAMIgGgUIgCgKIgDgNIgDgMIgBALIgDAOIgDAKIgFAUIAaAAg");
	this.shape_14.setTransform(86.025,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgRBAIAAh/IAiAAIAAB/g");
	this.shape_15.setTransform(76.4,14.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAQBAIgagvIgJAAIAAAvIgjAAIAAh/IAqAAQAQAAAMAEQALAEAHAJQAFAIAAANQAAAIgDAGQgCAGgFAFQgEAEgHAEIAlA4gAgTgIIAGAAQAIAAAFgDQAFgEAAgJQAAgGgFgDQgDgEgJAAIgHAAg");
	this.shape_16.setTransform(68,14.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgbA9QgMgEgHgJQgIgJgEgMQgDgMAAgPQgBgTAIgPQAGgPAOgIQANgIAVAAQAXAAANAIQAOAIAGAPQAGAPABATQgBAPgDAMQgEAMgHAJQgIAJgMAEQgLAFgRAAQgPAAgMgFgAgOggQgGAEgCAJQgDAIAAALQAAALADAJQACAIAGAFQAGAEAIAAQAJAAAHgEQAFgFADgIQACgJAAgLQAAgRgGgKQgFgKgPAAQgIAAgGAFg");
	this.shape_17.setTransform(53.95,14.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AApBAIAAg4IAAgMIABgNIABgKIgBAAIgaBbIggAAIgbhbIAAAAIAAAJIABAOIAAAMIAAA4IgeAAIAAh/IAuAAIAaBaIABAAIAahaIAuAAIAAB/g");
	this.shape_18.setTransform(38.1,14.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AglBAIAAh/IBLAAIAAAcIgpAAIAAAUIAmAAIAAAbIgmAAIAAAYIApAAIAAAcg");
	this.shape_19.setTransform(24.75,14.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AAqBAIAAg4IAAgMIAAgNIABgKIgBAAIgaBbIggAAIgbhbIAAAAIAAAJIABAOIAAAMIAAA4IgeAAIAAh/IAuAAIAaBaIAAAAIAbhaIAuAAIAAB/g");
	this.shape_20.setTransform(10.85,14.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,50);


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
	this.shape.setTransform(114.525,79.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(49.975,71.4479);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(76.4619,42.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(76.525,44.0875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(76.7143,40.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(73.925,36.7875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(72.0706,49.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(72.775,40.2019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(60.125,72.3634);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(112.5382,66.8763);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(109.5577,74.2125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(109.0542,72.1014);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(109.6337,70.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(110.2042,69.1556);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(106.6,78.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(116.15,47.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(92.55,64.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(96.925,54.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(67.6637,55.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(76.1667,51.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(57.75,62.0229);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(61.975,50.4531);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(53.15,62.8179);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(78.275,31.2854);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(67.4,31.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(73.2,92.2583);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(79.1,90.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(76.6583,91.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(85.5,86.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(70.7768,92.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(61,87.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(82.075,89.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(63.675,89.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(72.8,91.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(57.025,87.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(83.8214,63.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(86.1625,60.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(101.825,46.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(46.5,46.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(46.5,46.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(74.2,46.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(176.025,50.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(218.925,50.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(161.125,50.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(258.775,50.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(244.425,50.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(231.625,50.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(204.875,50.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(191.55,50.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(140.525,49.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(148.5,52.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(258.925,28.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(143.775,28.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(239.5,28.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(219.55,28.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(199.05,28.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(179.625,28.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(160.825,28.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(200.725,71.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(200.725,62.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,17.9,246.70000000000002,84.4);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,160,200), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,160,200), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,160,200), null);


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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,160,600), null);


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
	this.shape.graphics.f("#6CC14C").s().p("AsfAyIAAhjIY/AAIAABjg");
	this.shape.setTransform(80,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,10);


// stage content:
(lib.WBAY_214318_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(80,538,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:528,alpha:1},14).wait(112));

	// text3
	this.instance_1 = new lib.text3("synched",0);
	this.instance_1.setTransform(80,454.6,1,1,0,0,0,74,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({y:464.6,alpha:1},14,cjs.Ease.get(1)).wait(126));

	// text2
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(80,351.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({y:361.6,alpha:1},14,cjs.Ease.get(1)).wait(140));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(80,294.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:304.6,alpha:1},14,cjs.Ease.get(1)).wait(154));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(80.1,238.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:248.5,alpha:1},14,cjs.Ease.get(1)).wait(168));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(80,203,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},14).wait(182));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(164).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(31));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(35).to({alpha:0},15,cjs.Ease.get(1)).wait(31));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(86).to({alpha:0},15,cjs.Ease.get(1)).wait(81));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(196));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79,299,82,302);
// library properties:
lib.properties = {
	id: '60A317C8081C4101BFC31B87128024F2',
	width: 160,
	height: 600,
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
an.compositions['60A317C8081C4101BFC31B87128024F2'] = {
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