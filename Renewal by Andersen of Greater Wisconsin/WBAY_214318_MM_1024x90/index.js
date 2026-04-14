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
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);// helper functions:

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
	this.shape.setTransform(294.675,-20.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AATAlIgOgqIgBgFIgCgGIgBgEIgBgFIAAAAIAAAFIgBAEIgCAGIgBAFIgOAqIgNAAIgVhKIAMAAIALApIACAIIACAHIABAHIAAAAIABgEIABgFIACgGIABgFIAOgrIALAAIAOArIACAHIACAGIABAHIAAAAIABgHIACgHIACgIIALgpIAMAAIgVBKg");
	this.shape_1.setTransform(284.975,-20.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_2.setTransform(275.375,-20.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgnAyIAAhjIAfAAQAOAAALAFQALAGAGALQAGALAAAQQAAAQgGALQgHAMgLAFQgMAGgPAAgAgbAoIAOAAQAUAAAKgKQALgKAAgUQAAgNgFgIQgEgJgJgFQgJgEgLAAIgRAAg");
	this.shape_3.setTransform(266.325,-21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgdA2IgDgBIAAgJIADABIAFAAQAEAAADgCQADgBACgDQADgDABgFIAEgKIgehKIAMAAIARArIACAIIACAFIABAHIABAAIADgJIADgLIAQgrIAMAAIggBVQgDAHgDAFQgDAFgFADQgFACgHAAg");
	this.shape_4.setTransform(253.9,-18.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgOAiQgIgEgFgIQgEgJAAgNQAAgKAEgJQAEgJAIgFQAHgFAJAAQAKAAAGAEQAHAFAEAIQAEAHAAAKIAAAGIgzAAQAAANAGAIQAHAGAKAAIANgBIALgEIAAAKQgFADgGAAQgGACgHAAQgKAAgIgFgAAUgGQAAgHgCgFQgCgFgFgDQgEgCgGAAQgIgBgGAHQgFAFgBALIAnAAIAAAAg");
	this.shape_5.setTransform(246.525,-20.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_6.setTransform(238.325,-20.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_7.setTransform(229.825,-20.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAmAyIAAg/IAAgJIAAgIIABgIIgBAAIgiBYIgIAAIgihYIAAAAIAAAIIABAIIAAAKIAAA+IgLAAIAAhjIARAAIAfBSIAAAAIAghSIARAAIAABjg");
	this.shape_8.setTransform(219.325,-21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_9.setTransform(205.275,-20.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIAAAHIABAKIAAAJIAAA5IgLAAIAAhjIANAAIA2BSIAAAAIAAgGIgBgKIAAgJIAAg5IALAAIAABjg");
	this.shape_10.setTransform(195.825,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgJARIADgLIACgLIACgLIALAAIABACIgDAKIgEALIgEAKg");
	this.shape_11.setTransform(184.925,-16.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AAAAtQgFgCgCgGQgDgEAAgJIAAgrIgLAAIAAgGIALgEIAEgRIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQAEADAFAAIAGAAIAEgBIAAAIIgFACIgHABQgGAAgEgCg");
	this.shape_12.setTransform(180.825,-21.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgQAlQgFAAgFgDIAAgKIALAEIANABQAJAAAEgDQAFgDAAgFQAAgDgCgCQgCgDgEgCIgKgFIgNgEQgFgDgDgEQgDgEAAgGQAAgJAIgGQAIgFALAAQAHAAAGABIALAEIgEAJIgKgDQgFgCgFABQgHgBgEADQgFADAAAEQAAAEACACIAHAEIAKAFIAMAEQAFADADAEQADAEAAAGQAAAHgEAFQgDAFgHACQgHADgIAAQgIAAgGgCg");
	this.shape_13.setTransform(175.125,-20.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgOAiQgIgEgFgIQgEgJAAgNQAAgKAEgJQAEgJAIgFQAHgFAJAAQAKAAAGAEQAHAFAEAIQAEAHAAAKIAAAGIgzAAQAAANAGAIQAHAGAKAAIANgBIALgEIAAAKQgFADgGAAQgGACgHAAQgKAAgIgFgAAUgGQAAgHgCgFQgCgFgFgDQgEgCgGAAQgIgBgGAHQgFAFgBALIAnAAIAAAAg");
	this.shape_14.setTransform(167.875,-20.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgVAmIAAhKIAKAAIABAOIAAAAIAGgHQAEgEADgCQAEgCAGAAIAEAAIAFABIgCAKIgEAAIgEgBQgFAAgDACQgEACgDADQgCAEgCAFQgCAEAAAGIAAAng");
	this.shape_15.setTransform(161.55,-20.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgOAiQgIgEgFgIQgEgJAAgNQAAgKAEgJQAEgJAIgFQAHgFAJAAQAKAAAGAEQAHAFAEAIQAEAHAAAKIAAAGIgzAAQAAANAGAIQAHAGAKAAIANgBIALgEIAAAKQgFADgGAAQgGACgHAAQgKAAgIgFgAAUgGQAAgHgCgFQgCgFgFgDQgEgCgGAAQgIgBgGAHQgFAFgBALIAnAAIAAAAg");
	this.shape_16.setTransform(154.325,-20.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAAAtQgFgCgCgGQgDgEAAgJIAAgrIgLAAIAAgGIALgEIAEgRIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQAEADAFAAIAGAAIAEgBIAAAIIgFACIgHABQgGAAgEgCg");
	this.shape_17.setTransform(147.825,-21.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_18.setTransform(141.175,-20.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_19.setTransform(134.9,-21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_20.setTransform(125.175,-20.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIAAAHIABAKIAAAJIAAA5IgLAAIAAhjIANAAIA2BSIAAAAIAAgGIgBgKIAAgJIAAg5IALAAIAABjg");
	this.shape_21.setTransform(115.725,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgJARIADgLIACgLIACgLIALAAIABACIgDAKIgEALIgEAKg");
	this.shape_22.setTransform(104.825,-16.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgQAlQgFAAgFgDIAAgKIALAEIANABQAJAAAEgDQAFgDAAgFQAAgDgCgCQgCgDgEgCIgKgFIgNgEQgFgDgDgEQgDgEAAgGQAAgJAIgGQAIgFALAAQAHAAAGABIALAEIgEAJIgKgDQgFgCgFABQgHgBgEADQgFADAAAEQAAAEACACIAHAEIAKAFIAMAEQAFADADAEQADAEAAAGQAAAHgEAFQgDAFgHACQgHADgIAAQgIAAgGgCg");
	this.shape_23.setTransform(99.975,-20.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AAAAtQgFgCgCgGQgDgEAAgJIAAgrIgLAAIAAgGIALgEIAEgRIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQAEADAFAAIAGAAIAEgBIAAAIIgFACIgHABQgGAAgEgCg");
	this.shape_24.setTransform(94.075,-21.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_25.setTransform(87.425,-20.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgOAiQgIgEgFgIQgEgJAAgNQAAgKAEgJQAEgJAIgFQAHgFAJAAQAKAAAGAEQAHAFAEAIQAEAHAAAKIAAAGIgzAAQAAANAGAIQAHAGAKAAIANgBIALgEIAAAKQgFADgGAAQgGACgHAAQgKAAgIgFgAAUgGQAAgHgCgFQgCgFgFgDQgEgCgGAAQgIgBgGAHQgFAFgBALIAnAAIAAAAg");
	this.shape_26.setTransform(79.225,-20.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgLAAgFAGQgEAGAAAMIAAApIgLAAIAAgvQAAgGgBgEQgCgEgEgCQgDgCgFAAQgIAAgEADQgFADgCAGQgCAGAAAJIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHIAIgEQAEgBAFAAQAIAAAGADQAFADACAHIABAAQAEgHAGgDQAGgDAIAAQAMAAAHAGQAGAHAAAOIAAAwg");
	this.shape_27.setTransform(68.825,-20.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgcA2IgFgBIAAgJIAEABIAFAAQADAAAEgCQADgBACgDQACgDACgFIAEgKIgehKIAMAAIARArIACAIIADAFIAAAHIABAAIACgJIAEgLIAQgrIAMAAIghBVQgCAHgDAFQgDAFgFADQgFACgHAAg");
	this.shape_28.setTransform(58.8,-18.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgSAkQgFgCgDgFQgDgFAAgHQAAgMAJgFQAIgGASAAIANgBIAAgEQAAgKgEgEQgEgEgIAAQgFAAgGACIgKAEIgDgJIALgEQAHgCAHAAQANAAAHAGQAGAGAAANIAAAyIgIAAIgCgLIgBAAIgGAHIgIAEQgFACgFAAQgHAAgGgDgAAHABQgNAAgFAEQgGAEAAAIQAAAGAEADQAEADAGAAQAJAAAHgFQAFgGAAgLIAAgHg");
	this.shape_29.setTransform(51.2,-20.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgfAyIAAhjIAbAAQASAAAJAIQAJAHAAAOQAAAHgCAFQgCAGgFADQgFAEgHADQgIACgKAAIgMAAIAAAogAgTAAIALAAQAIAAAHgBQAGgCADgEQAEgEAAgJQAAgKgHgEQgGgFgNAAIgNAAg");
	this.shape_30.setTransform(43.675,-21.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_31.setTransform(31.375,-20.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIAAAHIABAKIAAAJIAAA5IgLAAIAAhjIANAAIA2BSIAAAAIAAgGIgBgKIAAgJIAAg5IALAAIAABjg");
	this.shape_32.setTransform(21.925,-21.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFAlQgCgCAAgFQAAgFACgCQADgCACAAQADAAACACQADACAAAFQAAAFgDACQgCACgDAAQgCAAgDgCgAgFgXQgCgCAAgEQAAgFACgCQADgCACAAQADAAACACQADACAAAFQAAAEgDACQgCACgDAAQgCAAgDgCg");
	this.shape_33.setTransform(11.25,-20.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgQAlQgFAAgFgDIAAgKIALAEIANABQAJAAAEgDQAFgDAAgFQAAgDgCgCQgCgDgEgCIgKgFIgNgEQgFgDgDgEQgDgEAAgGQAAgJAIgGQAIgFALAAQAHAAAGABIALAEIgEAJIgKgDQgFgCgFABQgHgBgEADQgFADAAAEQAAAEACACIAHAEIAKAFIAMAEQAFADADAEQADAEAAAGQAAAHgEAFQgDAFgHACQgHADgIAAQgIAAgGgCg");
	this.shape_34.setTransform(6.125,-20.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AAUA1IAAgwQAAgIgEgFQgFgEgIAAQgIAAgFADQgFADgCAGQgCAFAAAJIAAAnIgLAAIAAhpIALAAIAAAgIAAAFIgBAFIABAAQADgEADgCQAEgDAEgBQAFgCAEAAQAJAAAGADQAGADADAGQADAGAAAIIAAAxg");
	this.shape_35.setTransform(-1.475,-22.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAAAtQgFgCgCgGQgDgEAAgJIAAgrIgLAAIAAgGIALgEIAEgRIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQAEADAFAAIAGAAIAEgBIAAAIIgFACIgHABQgGAAgEgCg");
	this.shape_36.setTransform(-8.325,-21.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgFgEgIAAQgMAAgFAHQgFAHAAANIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHQAEgCAFgCQAEgBAEAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_37.setTransform(-14.975,-20.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgNAkQgGgCgFgGQgEgEgDgHQgCgIAAgJQAAgLAEgJQAEgIAIgFQAHgFAKAAQAKAAAIAFQAIAFAEAIQAEAJAAALQAAAJgCAIQgCAHgFAEQgEAGgHACQgGADgIAAQgHAAgGgDgAgQgUQgGAHAAANQAAAJADAHQACAGAFAEQAFADAHAAQAIAAAFgDQAFgEACgGQADgHAAgJQAAgIgDgHQgCgGgFgEQgFgDgIAAQgLAAgFAIg");
	this.shape_38.setTransform(-23.475,-20.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgLAAgFAGQgEAGAAAMIAAApIgLAAIAAgvQAAgGgBgEQgCgEgEgCQgDgCgFAAQgIAAgEADQgFADgCAGQgCAGAAAJIAAAmIgLAAIAAhKIAJAAIACALIAAAAIAGgHIAIgEQAEgBAFAAQAIAAAGADQAFADACAHIABAAQAEgHAGgDQAGgDAIAAQAMAAAHAGQAGAHAAAOIAAAwg");
	this.shape_39.setTransform(-34.125,-20.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AggAzIAAgKIAbgbIALgNQAGgFACgGQADgGAAgGQAAgJgFgEQgFgFgHAAQgIAAgFADQgGACgFAFIgHgIIAJgGIAKgEQAGgCAGAAQAIAAAHAEQAGADAEAGQAEAGAAAIQAAAIgEAHQgDAGgFAGIgOAOIgUAWIAAAAIAyAAIAAALg");
	this.shape_40.setTransform(-48.275,-21.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AAHAyIAAhGIAAgHIABgFIAAgFIgEADIgEAFIgLAJIgGgIIAagVIAJAAIAABjg");
	this.shape_41.setTransform(-57.175,-21.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#12127D").s().p("AgEAiIAAgdIgcAAIAAgJIAcAAIAAgdIAJAAIAAAdIAcAAIAAAJIgcAAIAAAdg");
	this.shape_42.setTransform(-67.875,-21.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-33.7,378.9,23.000000000000004);


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
	this.shape.graphics.f("#12127D").s().p("AAAAwQgFgCgDgGQgDgFAAgJIAAgvIgMAAIAAgGIAMgFIAEgRIAHAAIAAASIAXAAIAAAKIgXAAIAAAuQAAAIADAEQAEADAFAAIAHAAIAFgCIAAAKIgGACIgHAAQgHAAgEgCg");
	this.shape.setTransform(256.475,1.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgLAlQgIgEgFgKQgEgJAAgNQAAgOAFgKQAEgJAJgFQAIgEAKAAIAMABQAGABADACIgDALIgJgDIgJgBQgIAAgFAEQgFADgDAHQgDAHAAAJQAAAKADAHQADAGAFAFQAFADAHAAQAHAAAFgBIAJgDIAAAKQgEACgFABIgMABQgKABgIgFg");
	this.shape_1.setTransform(250.475,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgPAlQgIgFgGgJQgEgJAAgNQAAgNAEgJQAEgKAJgEQAHgGAKAAQALABAHAEQAHAEAEAJQAEAHAAAMIAAAGIg3AAQAAAPAIAGQAGAIALAAQAJAAAFgBQAGgBAHgEIAAAMIgMADQgHACgIgBQgKABgJgFgAAVgGQAAgIgCgFQgCgGgEgDQgFgDgHAAQgJAAgFAHQgGAGgCAMIAqAAIAAAAg");
	this.shape_2.setTransform(242.55,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgMBJIgEgCIAAgJIAEABIAFAAQAFAAACgDQAEgCAAgIIAAhcIAMAAIAABcQAAAHgDAGQgCAFgFADQgFACgGAAgAAFg6QgDgCAAgEQAAgEADgCQACgCADAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_3.setTransform(235.475,2.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgOAnQgHgDgFgFQgFgGgCgHQgDgJAAgJQAAgMAFgKQAEgJAIgFQAJgEAKgBQALABAIAEQAJAFAEAJQAFAKAAAMQAAAJgDAJQgCAHgFAGQgFAFgHADQgHACgIAAQgHAAgHgCgAgRgWQgGAIAAAOQAAAJACAHQADAHAFAFQAGADAHAAQAIAAAGgDQAFgFADgHQACgHAAgJQAAgJgCgHQgDgHgFgDQgGgFgIAAQgMAAgFAJg");
	this.shape_4.setTransform(230.075,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgWApIAAhQIAKAAIABAPIABAAQACgEAEgEQADgEAEgCQAFgCAFAAIAGAAIAEABIgCALIgEgBIgFAAQgEAAgFACQgDACgDAEQgDADgCAFQgCAFAAAHIAAAqg");
	this.shape_5.setTransform(223.05,1.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgiA7IAAh0IAKAAIABAMIABAAIAGgGQADgDAFgCQAFgCAFAAQAPAAAJAKQAJALAAAUQAAAOgEAIQgEAKgHAEQgIAFgKAAQgFAAgFgBQgFgCgDgDIgGgGIgBAAIABAHIAAAHIAAAhgAgMgtQgFAEgDAGQgCAHAAAJIAAADQAAAKACAGQACAHAFADQAGAEAHAAQAIAAAFgEQAFgEACgGQADgHAAgKQAAgOgGgIQgFgJgMAAQgHAAgFADg");
	this.shape_6.setTransform(215.125,3.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgPAlQgJgFgEgJQgFgJAAgNQAAgNAEgJQAFgKAHgEQAJgGAJAAQAKABAIAEQAHAEAEAJQAEAHAAAMIAAAGIg2AAQgBAPAIAGQAGAIAMAAQAHAAAGgBQAGgBAHgEIAAAMIgNADQgFACgJgBQgKABgJgFgAAVgGQAAgIgCgFQgCgGgEgDQgFgDgHAAQgJAAgFAHQgGAGgBAMIApAAIAAAAg");
	this.shape_7.setTransform(202.3,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgWApIAAhQIAKAAIABAPIABAAQACgEAEgEQADgEAEgCQAEgCAHAAIAEAAIAFABIgBALIgFgBIgEAAQgGAAgDACQgEACgDAEQgDADgCAFQgCAFAAAHIAAAqg");
	this.shape_8.setTransform(195.55,1.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgFA3IAAhPIALAAIAABPgAgEgoQgDgCABgEQgBgEADgCQACgCACAAQADAAACACQADACAAAEQAAAEgDACQgCACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(190.1,0.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAAAwQgFgCgDgGQgDgFAAgJIAAgvIgMAAIAAgGIAMgFIAEgRIAHAAIAAASIAXAAIAAAKIgXAAIAAAuQAAAIADAEQAEADAFAAIAHAAIAFgCIAAAKIgGACIgHAAQgHAAgEgCg");
	this.shape_10.setTransform(185.525,1.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAVApIAAgzQAAgKgEgFQgFgFgJAAQgMAAgGAIQgGAHAAAPIAAApIgLAAIAAhQIAJAAIACAMIAAAAQADgEAEgDIAJgEQAFgCAEAAQAPAAAHAHQAIAHgBAPIAAA0g");
	this.shape_11.setTransform(178.4,1.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgPAlQgJgFgEgJQgFgJAAgNQAAgNAEgJQAEgKAJgEQAIgGAJAAQAKABAIAEQAHAEAEAJQAEAHAAAMIAAAGIg2AAQAAAPAGAGQAIAIAKAAQAJAAAFgBQAGgBAGgEIAAAMIgMADQgFACgJgBQgLABgIgFgAAVgGQAAgIgCgFQgCgGgFgDQgEgDgHAAQgIAAgHAHQgFAGgBAMIApAAIAAAAg");
	this.shape_12.setTransform(169.6,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgHQAAgLAEgHQAEgGAHgDQAGgDAKAAIAOABIAKADIgHASIgGgBIgHgBQgGAAgCADQgDADAAAFIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_13.setTransform(158.8,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgHQAAgLAEgHQAEgGAIgDQAGgDAJAAIAOABIAKADIgHASIgGgBIgHgBQgGAAgCADQgDADAAAFIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_14.setTransform(152.25,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgRAtQgJgDgFgHQgGgGgEgIQgDgJAAgMQAAgOAGgLQAFgLAKgFQALgGAMAAQANAAALAGQAJAFAGALQAGALAAAOQAAAMgDAJQgDAIgGAGQgGAHgJADQgHADgLAAQgJAAgIgDgAgOgUQgEAHAAANQAAAJACAGQACAHAEACQAFAEAFAAQAHAAAEgEQAEgCADgHQABgGAAgJQAAgJgBgFQgDgHgEgCQgEgEgHAAQgJABgFAGg");
	this.shape_15.setTransform(143.15,1.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgXA3QgJgHgFgOQgEgOgBgUQABgSAEgOQAEgPAJgHQAJgIAPAAQAPAAAJAIQAJAHAFAPQAFAOAAASQAAAPgDALQgCAMgFAIQgFAIgJAFQgHADgMAAQgOABgJgIgAgJgkQgEAFgCAJQgBAJAAANQAAAOABAKQACAJAEAEQAEAFAFAAQAGAAAEgFQAEgEACgJQABgKAAgOQAAgNgBgJQgCgJgEgFQgEgFgGABQgFgBgEAFg");
	this.shape_16.setTransform(128.65,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgXA3QgJgHgFgOQgFgOAAgUQAAgSAFgOQAEgPAJgHQAKgIAOAAQAPAAAJAIQAKAHAEAPQAEAOABASQgBAPgCALQgCAMgFAIQgFAIgJAFQgHADgMAAQgNABgKgIgAgJgkQgEAFgCAJQgBAJAAANQAAAOABAKQACAJAEAEQADAFAGAAQAHAAADgFQAEgEACgJQABgKAAgOQAAgNgBgJQgCgJgEgFQgDgFgHABQgGgBgDAFg");
	this.shape_17.setTransform(118.95,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgZA8QgIgCgHgDIAAgWQAGAEAJACQAKACAHAAQAHAAAFgCQAFgCADgEQADgFAAgGQgBgKgFgEQgHgFgKAAIgKABIgJACIgKgGIAEg8IBBAAIAAAVIgqAAIgDAYIAGgBIAJgBQALABAJAEQAJAEAFAIQAEAHAAANQABANgGAJQgGAJgKAGQgLAEgPAAQgKABgIgCg");
	this.shape_18.setTransform(109.3,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFBGIAAgRQgLAAgJgCQgIgDgHgCIAAgWQAHADAJADQAKACAJABIAAgZQgNgGgIgDQgIgGgDgGQgDgGAAgHQgBgJAFgGQAFgHAHgDQAIgEALgBIAAgNIALAAIAAANQAJAAAJACIAQAFIgIAUIgOgFIgMgBIAAAYIARAHQAIAEAFAGQAGAGAAAJQgBANgIAJQgKAHgRADIAAARgAAGAhQAFgCADgCQACgDABgDIgBgEIgFgDIgFgEgAgLgiIgEADIgBAFIABADIAEAEIAGADIAAgTg");
	this.shape_19.setTransform(99.6,-0.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgIApIAAggIggAAIAAgRIAgAAIAAggIARAAIAAAgIAgAAIAAARIggAAIAAAgg");
	this.shape_20.setTransform(85.45,-0.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAVA0QgIgKABgSQAAgSAGgJQAIgKAPAAQANAAAIAKQAHAJAAASQABASgIAKQgGAKgPAAQgOAAgIgKgAAkAJQgBAFAAAKQAAALABAFQADAFAEAAQADAAADgFQACgFAAgLQAAgKgCgFQgDgGgDAAQgEAAgDAGgAgrA9IBDh5IAUAAIhDB5gAg/AEQgIgJAAgSQAAgSAIgKQAHgKAOAAQAPAAAHAKQAIAKAAASQgBASgGAJQgHAKgQAAQgOAAgHgKgAgvgnQgCAFAAALQAAAKACAFQACAGADAAQAFAAABgFQACgGAAgKQAAgLgCgFQgBgFgFAAQgDAAgCAFg");
	this.shape_21.setTransform(68.55,-0.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgXA3QgKgHgEgOQgFgOABgUQgBgSAFgOQAEgPAJgHQAKgIAOAAQAPAAAJAIQAKAHAEAPQAEAOABASQgBAPgCALQgCAMgFAIQgFAIgJAFQgHADgMAAQgNABgKgIgAgJgkQgEAFgBAJQgCAJAAANQAAAOACAKQABAJAEAEQADAFAGAAQAHAAADgFQAEgEACgJQABgKAAgOQAAgNgBgJQgCgJgEgFQgDgFgHABQgGgBgDAFg");
	this.shape_22.setTransform(56.05,-0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgpA+IAAgSIAfgfIANgPIAIgMQADgFAAgFQAAgIgEgDQgFgEgFAAQgHAAgHADQgHADgGAHIgPgRIAMgIQAFgEAIgDQAIgDAKABQAMAAAIADQAJAFAFAIQAEAHAAAKQAAAJgDAJQgFAIgHAHIgSASIgPAPIAAABIA0AAIAAAWg");
	this.shape_23.setTransform(46.4,-0.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgZA7QgLgFgHgJQgHgIgDgMQgEgLAAgOQAAgSAGgOQAGgOANgIQANgHATgBQAUABANAHQAMAIAHAOQAGAOAAASQAAAOgEALQgDAMgHAIQgHAJgLAFQgLADgPAAQgOAAgLgDgAgRgjQgHAFgDAJQgDAKAAALQAAANADAJQADAJAHAFQAHAFAKAAQALAAAHgFQAGgFAEgJQADgJAAgNQAAgSgHgLQgIgLgQAAQgKAAgHAFg");
	this.shape_24.setTransform(30.375,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgXA3QgNgHgGgOQgHgOAAgUQAAgSAIgOQAHgOAOgIQAOgHAUAAQAJAAAKACQAJACAIADIgJAVIgNgFQgHgCgIAAQgLAAgHAFQgIAFgFAKQgEAJAAALQAAAMADAJQADAKAHAFQAHAFAKAAIAKgBIAHgBIAAgZIgXAAIAAgUIAwAAIAAA+IgUAFQgKABgNAAQgSAAgMgHg");
	this.shape_25.setTransform(17.275,-0.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgZA7QgLgFgHgJQgHgIgDgMQgEgLAAgOQAAgSAGgOQAGgOANgIQANgHATgBQAUABANAHQAMAIAHAOQAGAOAAASQAAAOgEALQgDAMgHAIQgHAJgLAFQgLADgPAAQgOAAgLgDgAgRgjQgHAFgDAJQgDAKAAALQAAANADAJQADAJAHAFQAHAFAKAAQALAAAHgFQAGgFAEgJQADgJAAgNQAAgSgHgLQgIgLgQAAQgKAAgHAFg");
	this.shape_26.setTransform(4.575,-0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgsA9IAAh5IAmAAQAXAAAMAHQAMAHAAARQAAAHgCAGQgCAFgEAEQgEADgGABIAAABQAGABAFACQAFADADAGQADAGAAAKQAAALgGAHQgFAIgKAFQgKAEgOAAgAgTAoIARAAQALAAAEgFQAFgEAAgIQAAgFgCgDQgCgDgEgCQgGgCgHAAIgQAAgAgTgMIAPAAQALAAAEgDQAFgEgBgGQABgHgGgDQgFgEgKAAIgOAAg");
	this.shape_27.setTransform(-7.55,-0.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgKASIADgMIADgMIACgMIAMAAIABACIgDAMIgFALIgEALg");
	this.shape_28.setTransform(-19.625,6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgeA6IgFgBIAAgKIAEABIAEAAQAFAAAEgBQADgCACgDIAEgIIAFgMIghhPIANAAIASAvIAEAHIABAHIABAGIAAAAIAEgJIAEgMIARguIAMAAIgjBbQgCAHgCAGQgFAFgEADQgGADgIAAg");
	this.shape_29.setTransform(-25.05,3.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgTAnQgGgDgDgFQgDgFAAgIQAAgMAJgGQAKgGASAAIAPgBIAAgFQgBgLgEgDQgEgFgJAAQgFAAgGACIgLAFIgDgKIAMgFQAHgCAHAAQAOABAHAGQAHAHAAAOIAAA1IgJAAIgCgMIAAAAIgIAIQgDACgFACQgFACgGgBQgHABgGgDgAAIABQgOAAgHAFQgFAEgBAIQABAHAEAEQAEACAHAAQAJABAHgHQAHgFAAgMIAAgHg");
	this.shape_30.setTransform(-33.2,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AAoA2IAAhEIAAgJIABgJIAAgIIAAAAIglBeIgJAAIgkhfIgBAAIABAIIAAAKIAAAKIAABDIgLAAIAAhqIASAAIAiBYIAAAAIAjhYIASAAIAABqg");
	this.shape_31.setTransform(-43.8,0.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgRAoQgGgBgFgCIAAgMIAMAFQAHABAHAAQAJAAAGgDQAEgDAAgGQAAgDgCgDQgCgCgEgCIgLgGIgOgFQgFgDgDgEQgDgEgBgHQABgKAIgFQAIgFAMgBIAOABIAMAFIgEAKIgKgFIgMgBQgHAAgFADQgFADAAAEQAAAFADACIAGAEIAMAGIAMAEQAGADADAEQACAFAAAGQABAIgEAFQgEAFgHADQgHADgJgBQgIABgHgCg");
	this.shape_32.setTransform(-57.9,1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFA3IAAhPIALAAIAABPgAgEgoQgDgCABgEQgBgEADgCQACgCACAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(-63.35,0.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAVA5IAAg0QAAgIgFgFQgEgGgJAAQgIABgGADQgFAEgCAGQgCAGgBAJIAAAqIgLAAIAAhxIALAAIAAAiIAAAGIAAAFIAAAAQADgEAEgCQAEgEAFgBQAEgBAFgBQAKABAHACQAFAEAEAGQAEAGgBAJIAAA1g");
	this.shape_34.setTransform(-69.75,0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgFA2IAAhfIgiAAIAAgLIBPAAIAAALIgiAAIAABfg");
	this.shape_35.setTransform(-78.525,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-14.2,373.4,27.1);


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
	this.shape.graphics.f("#B20000").s().p("AgUBPIAAh6IgnAAIAAgiIB2AAIAAAiIgmAAIAAB6g");
	this.shape.setTransform(243.2,19.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AATBPIg4huIgBAAIABAMIAAAPIABALIAABIIgmAAIAAicIA4AAIA4BsIAAAAIAAgNIgBgNIAAgMIAAhGIAmAAIAACcg");
	this.shape_1.setTransform(227.575,19.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AgtBPIAAicIBcAAIAAAhIgyAAIAAAZIAuAAIAAAiIguAAIAAAdIAyAAIAAAjg");
	this.shape_2.setTransform(212.7,19.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AgYBPIgzicIAvAAIAWBOIADAMIADANIAAAMIACgMIACgNIADgMIAWhOIAvAAIgzCcg");
	this.shape_3.setTransform(198.725,19.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AguBPIAAicIBdAAIAAAhIgyAAIAAAZIAuAAIAAAiIguAAIAAAdIAyAAIAAAjg");
	this.shape_4.setTransform(185.4,19.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgYBQIgQgDIgOgGIAAgmQANAHANADQANADAKAAQAGAAAEgBQAEgCACgCQACgDgBgDQABgEgDgDQgDgDgGgDIgPgIIgRgIQgGgFgFgEQgFgGgDgHQgDgHAAgLQAAgPAIgKQAHgKAOgFQANgGAQAAQAQAAAMAEQANADAJAFIgNAgQgKgEgKgDQgKgDgIAAQgFAAgDACQgEABgBACIgCAFQABAEADADQACADAGADIASAJQALAFAIAGQAJAFAEAJQAEAIAAAMQAAANgHALQgFAMgOAHQgOAHgVAAg");
	this.shape_5.setTransform(167.15,19.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgtBPIAAicIBcAAIAAAhIgyAAIAAAZIAuAAIAAAiIguAAIAAAdIAyAAIAAAjg");
	this.shape_6.setTransform(155,19.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AgzBPIAAicIArAAIAAB5IA8AAIAAAjg");
	this.shape_7.setTransform(142.7,19.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgDgMIgEgQIgDgOIgCANIgDAQIgEANIgGAZIAgAAg");
	this.shape_8.setTransform(127.875,19.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgYBQIgQgDIgOgGIAAgmQANAHANADQANADAKAAQAGAAAEgBQAEgCACgCQACgDgBgDQABgEgDgDQgDgDgGgDIgQgIIgQgIQgHgFgEgEQgFgGgDgHQgDgHAAgLQAAgPAIgKQAHgKAOgFQANgGAQAAQAQAAAMAEQANADAJAFIgNAgQgKgEgKgDQgJgDgJAAQgFAAgDACQgDABgCACIgBAFQAAAEADADQACADAGADIASAJQAMAFAHAGQAJAFAEAJQAEAIAAAMQAAANgHALQgFAMgOAHQgOAHgVAAg");
	this.shape_9.setTransform(113.7,19.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgVBPIAAg9IgzhfIAuAAIAaA6IAbg6IAuAAIg0BeIAAA+g");
	this.shape_10.setTransform(94.25,19.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgDgMIgEgQIgDgOIgCANIgDAQIgEANIgGAZIAgAAg");
	this.shape_11.setTransform(78.975,19.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AhCBPIAAicIA3AAQAYgBASAJQARAJAJAQQAKASAAAYQAAAagLASQgKATgSAJQgTAJgYAAgAgXArIAJAAQASABAJgLQAJgMAAgWQAAgOgDgKQgEgJgIgEQgHgFgLgBIgMAAg");
	this.shape_12.setTransform(63.275,19.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgzBPIAAicIArAAIAAB5IA8AAIAAAjg");
	this.shape_13.setTransform(43.25,19.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgDgMIgEgQIgDgOIgCANIgDAQIgEANIgGAZIAgAAg");
	this.shape_14.setTransform(28.425,19.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgUBPIAAicIApAAIAACcg");
	this.shape_15.setTransform(16.625,19.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AATBPIggg5IgLAAIAAA5IgqAAIAAicIAzAAQAVAAAOAEQAOAGAHAKQAHALAAAPQAAAJgDAJQgDAHgGAGQgGAGgIAEIAtBFgAgYgKIAIAAQAKAAAGgEQAFgEAAgLQAAgIgFgEQgEgEgLgBIgJAAg");
	this.shape_16.setTransform(6.375,19.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AghBLQgPgGgJgKQgKgLgEgPQgEgPgBgSQABgYAIgSQAIgSARgKQARgKAaAAQAaAAARAKQARAKAHASQAJATgBAXQAAASgEAPQgEAPgKALQgJAKgPAGQgOAGgUAAQgSAAgPgGgAgRgnQgHAFgEALQgDAKAAANQAAAOADAKQAEALAHAFQAHAGAKAAQAMAAAHgGQAGgFAEgLQACgKAAgOQABgUgIgNQgGgMgRAAQgLAAgHAGg");
	this.shape_17.setTransform(-10.8,19.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AAyBPIAAhGIAAgOIABgQIABgNIgBAAIgfBxIgoAAIgghxIgBAAIABANIABAQIAAAPIAABFIglAAIAAicIA4AAIAgBuIABAAIAfhuIA5AAIAACcg");
	this.shape_18.setTransform(-30.15,19.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AgtBPIAAicIBbAAIAAAhIgxAAIAAAZIAuAAIAAAiIguAAIAAAdIAxAAIAAAjg");
	this.shape_19.setTransform(-46.5,19.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AAyBPIAAhGIAAgOIABgQIABgNIgBAAIgfBxIgoAAIgghxIgBAAIABANIABAQIAAAPIAABFIglAAIAAicIA4AAIAgBuIABAAIAfhuIA5AAIAACcg");
	this.shape_20.setTransform(-63.45,19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,1.5,345.4,34);


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
	this.shape.setTransform(144.4768,92.0318,1.4536,1.4536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(50.6405,80.5022,1.4535,1.4535);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(89.1402,38.825,1.4535,1.4535);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(89.2319,40.7328,1.4535,1.4535);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(89.5071,35.2639,1.4535,1.4535);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(85.4527,30.122,1.4535,1.4535);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(82.7573,49.1088,1.4535,1.4535);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(83.7812,35.085,1.4535,1.4535);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(65.3939,81.8329,1.4535,1.4535);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(141.5733,73.854,1.4535,1.4535);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(137.2411,84.5172,1.4535,1.4535);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(136.5093,81.4488,1.4535,1.4535);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(137.3516,79.2301,1.4535,1.4535);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(138.1808,77.167,1.4535,1.4535);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(132.947,90.3166,1.4535,1.4535);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(146.8283,46.1654,1.4535,1.4535);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(112.5249,70.2214,1.4535,1.4535);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(118.8841,55.2137,1.4535,1.4535);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(76.3414,56.9495,1.4534,1.4534);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(88.6994,51.4266,1.4534,1.4534);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(61.9329,66.7931,1.4534,1.4534);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(68.0735,49.9778,1.4534,1.4534);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(55.2474,67.9485,1.4534,1.4534);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(91.7637,22.1197,1.4534,1.4534);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(75.9581,22.9766,1.4534,1.4534);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(84.3877,110.7368,1.4534,1.4534);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(92.9627,108.8353,1.4534,1.4534);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(89.414,109.8164,1.4534,1.4534);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(102.2644,102.8401,1.4534,1.4534);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(80.8659,110.4704,1.4534,1.4534);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(66.6564,103.6758,1.4534,1.4534);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(97.2865,106.9459,1.4534,1.4534);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(70.5443,107.3456,1.4534,1.4534);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(83.8064,109.9617,1.4534,1.4534);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(60.8792,103.3851,1.4534,1.4534);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(99.8375,69.64,1.4535,1.4535);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(103.2483,64.7399,1.4536,1.4536);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(126.0017,44.6007,1.4535,1.4535);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(45.5873,44.6007,1.4535,1.4535);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(45.5895,44.6029,1.4535,1.4535);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(85.8592,44.6071,1.4536,1.4536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(233.8159,50.4046,1.4533,1.4533);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(296.1621,50.4046,1.4533,1.4533);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(212.1618,50.223,1.4533,1.4533);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(354.0759,50.4046,1.4533,1.4533);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(333.2211,50.4409,1.4533,1.4533);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(314.619,50.4046,1.4533,1.4533);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(275.7434,50.4409,1.4533,1.4533);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(256.3782,50.4046,1.4533,1.4533);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(182.224,48.37,1.4533,1.4533);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(193.814,53.4929,1.4533,1.4533);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(354.2939,18.3958,1.4533,1.4533);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(186.9472,18.3595,1.4533,1.4533);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(326.0636,18.1415,1.4533,1.4533);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(297.0704,18.6865,1.4533,1.4533);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(267.2779,18.3958,1.4533,1.4533);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(239.0477,18.3958,1.4533,1.4533);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(211.7258,18.3958,1.4533,1.4533);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(269.752,79.9206,1.4535,1.4535);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(269.7612,67.8958,1.4535,1.4535);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,2.6,358.7,122.80000000000001);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,200,90), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,200,90), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,200,90), null);


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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,1024,90), null);


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
	this.shape.graphics.f("#6CC14C").s().p("AgdHCIAAuDIA7AAIAAODg");
	this.shape.setTransform(3,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,90);


// stage content:
(lib.WBAY_214318_MM_1024x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP/gHBMCf/AAAIAAODMif/AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(888,100,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:45,alpha:1},14).wait(112));

	// text3
	this.instance_1 = new lib.text3("synched",0);
	this.instance_1.setTransform(576.5,106.6,1,1,0,0,0,74,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({y:116.6,alpha:1},14,cjs.Ease.get(1)).wait(126));

	// text2
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(601.75,62.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({y:72.6,alpha:1},14,cjs.Ease.get(1)).wait(140));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(602.25,16.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:26.6,alpha:1},14,cjs.Ease.get(1)).wait(154));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(296.1,-35.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:43,alpha:1},14,cjs.Ease.get(1)).wait(168));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(280,5,1,1,0,0,0,80,5);
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

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(113).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(36).to({alpha:0},15,cjs.Ease.get(1)).wait(31));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(85).to({alpha:0},15,cjs.Ease.get(1)).wait(82));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(196));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511,-21.8,514,136.8);
// library properties:
lib.properties = {
	id: '54377EF7CB6A4D3EACDA97009AD97BD3',
	width: 1024,
	height: 90,
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
an.compositions['54377EF7CB6A4D3EACDA97009AD97BD3'] = {
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