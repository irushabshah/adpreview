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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUA1IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAOIAAAnIgLAAIAAhpIALAAIAAAgIAAAKIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAANIAAAxg");
	this.shape.setTransform(109.975,236.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAdQgJgKAAgTQAAgRAJgKQAJgLAPAAIALABIAJADIgDAJIgJgCIgIAAQgVAAAAAbQgBAOAGAIQAGAHAJAAQAKAAAKgEIAAAKQgHAEgMAAQgQAAgIgKg");
	this.shape_1.setTransform(102.5,237.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_2.setTransform(96.525,236.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgIAAgMAGIgEgIIAMgFQAHgCAGAAQANAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAHgGQAFgFABgLIAAgHg");
	this.shape_3.setTransform(90,237.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgJAAQgLAAgFAGQgEAGAAAMIAAApIgLAAIAAgvQAAgJgEgFQgEgEgHAAQgLAAgFAGQgFAGAAAPIAAAmIgMAAIAAhKIAKAAIACALIAAAAQAEgGAFgDQAGgDAHAAQASAAAFANIAAAAQADgGAHgEQAGgDAIAAQANAAAGAHQAGAGAAAOIAAAwg");
	this.shape_4.setTransform(79.9,237.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_5.setTransform(66.225,239.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_6.setTransform(58.475,237.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgDgFgJAAQgIAAgMAGIgEgIIANgFQAGgCAGAAQANAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAHgGQAFgFABgLIAAgHg");
	this.shape_7.setTransform(50.05,237.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAJAAIACAKIABAAQAEgHAGgCQAFgDAHAAQAPAAAIALQAIAJAAATQAAASgIAJQgIALgPAAQgHAAgFgDQgHgDgDgFIgBAAIABANIAAAegAgQgmQgEAHAAAOIAAACQAAAPAEAHQAGAGAKAAQAKAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgKAAQgKAAgGAGg");
	this.shape_8.setTransform(42.35,239.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgJAAQgKAAgFAGQgGAGABAMIAAApIgLAAIAAgvQAAgJgEgFQgDgEgIAAQgLAAgFAGQgFAGAAAPIAAAmIgMAAIAAhKIAKAAIACALIAAAAQADgGAGgDQAGgDAHAAQASAAAFANIAAAAQADgGAHgEQAGgDAIAAQANAAAGAHQAHAGgBAOIAAAwg");
	this.shape_9.setTransform(31.4,237.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_10.setTransform(20.625,237.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAdQgJgKAAgTQAAgRAJgKQAJgLAQAAIALABIAIADIgEAJIgIgCIgHAAQgWAAgBAbQABAOAFAIQAGAHAJAAQAKAAAKgEIAAAKQgHAEgMAAQgPAAgJgKg");
	this.shape_11.setTransform(13.25,237.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUA1IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAOIAAAnIgLAAIAAhpIALAAIAAAgIAAAKIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAANIAAAxg");
	this.shape_12.setTransform(69.875,217.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAYIAAgsIgLAAIAAgFIALgFIAEgQIAGAAIAAARIAWAAIAAAJIgWAAIAAArQAAAIADADQADADAGABIAGgBIAEgBIAAAJIgFACIgHAAQgUAAAAgXg");
	this.shape_13.setTransform(63.075,217.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_14.setTransform(58.925,217.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATAmIgOgrIgFgTIAAAAIgEATIgPArIgMAAIgVhLIAMAAIALAqIAFAUIAAAAIACgKIADgKIAOgqIALAAIAOAqIAFAUIAAAAIACgIIAOg2IAMAAIgVBLg");
	this.shape_15.setTransform(51.75,218.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQA1IgZgjIgJAHIAAAcIgLAAIAAhpIALAAIAAA3IgBAMIABAAIAJgLIAXgZIAOAAIgeAfIAgArg");
	this.shape_16.setTransform(39.6,217.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAyIAAhGIAAgRIgDADIgPANIgGgIIAZgUIAKAAIAABjg");
	this.shape_17.setTransform(30.5,217.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAnQgJgOAAgZQAAgZAIgNQAIgMAQAAQAQgBAIANQAJAOAAAYQAAAagIANQgJAMgQAAQgPAAgIgMgAgPgfQgGAKAAAVQAAAWAGAJQAEALALgBQAMABAEgLQAGgJAAgWQAAgUgGgLQgEgKgMABQgLAAgEAJg");
	this.shape_18.setTransform(23.4,217.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMAyIAAgXIgwAAIAAgKIAvhCIALAAIAABCIAPAAIAAAKIgPAAIAAAXgAAFgaIgdArIAkAAIAAggIAAgWIAAAAg");
	this.shape_19.setTransform(15.4,217.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgIAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAIQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_20.setTransform(5.175,217.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAiIAAgLQAFAEAGABQAGACAGgBQAIAAAFgCQAFgDAAgGQAAgFgEgCQgEgDgKgFQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHAAgFACQgEADAAAEQAAADACACIAFAFIAMAFQANAEAFAEQAFAGAAAHQAAALgIAFQgIAGgNAAQgPAAgIgFg");
	this.shape_21.setTransform(138.175,199.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_22.setTransform(132.325,198.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_23.setTransform(125.675,199.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQgBgRAKgLQAIgLAOAAQAPAAAHAKQAJAIAAAQIAAAGIgzAAQAAANAHAHQAGAHALAAQAMAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQAAgLgFgGQgFgFgJAAQgIAAgFAFQgGAHgBAKIAnAAIAAAAg");
	this.shape_24.setTransform(117.45,199.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAmIgdhKIAMAAIARArQAFAPAAAFIABAAIAEgPIASgwIAMAAIgdBKg");
	this.shape_25.setTransform(110,199.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQgBgRAKgLQAIgLAOAAQAPAAAHAKQAJAIAAAQIAAAGIgzAAQAAANAHAHQAGAHALAAQAMAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQAAgLgFgGQgFgFgJAAQgIAAgFAFQgGAHgBAKIAnAAIAAAAg");
	this.shape_26.setTransform(102.6,199.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_27.setTransform(90.825,199.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAHAKAAQALAAAGgHQAGgIAAgOQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_28.setTransform(82.275,199.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_29.setTransform(76.325,198.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_30.setTransform(72.075,198.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgJAAgLAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgJAAIgBgKIgBAAQgGAHgFACQgGADgIAAQgKAAgHgGgAAIABQgNAAgGAEQgGAEAAAIQAAAGADADQAFADAGAAQAKAAAFgGQAHgFAAgLIAAgHg");
	this.shape_31.setTransform(65.55,199.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_32.setTransform(60.175,198.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAdQgJgKAAgSQAAgTAJgJQAJgLAPAAIALACIAJACIgDAKIgJgCIgIgBQgVAAAAAcQgBANAGAHQAGAIAJAAQAKAAAKgEIAAAKQgHAEgMAAQgQAAgIgKg");
	this.shape_33.setTransform(55.25,199.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQAAgRAJgLQAIgLAOAAQAOAAAJAKQAHAIABAQIAAAGIgzAAQABANAGAHQAGAHALAAQAMAAALgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQABgLgFgGQgFgFgJAAQgIAAgFAFQgFAHgBAKIAlAAIAAAAg");
	this.shape_34.setTransform(47.85,199.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIAJAAIABAOIABAAQAEgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgFAIQgHAHAAALIAAAng");
	this.shape_35.setTransform(41.55,199.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAJAAIACAKIABAAQAEgGAGgDQAFgDAHAAQAPAAAIALQAIAJAAATQAAASgIAKQgIAKgPAAQgHAAgFgDQgHgCgDgGIgCAAIACAMIAAAfgAgQgmQgEAHAAAOIAAACQAAAPAEAGQAGAIALgBQAJABAGgJQAFgGAAgOQAAgOgFgIQgGgHgJAAQgLAAgGAGg");
	this.shape_36.setTransform(34.15,201.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAJAAIACAKIABAAQAEgGAGgDQAFgDAHAAQAPAAAIALQAIAJAAATQAAASgIAKQgIAKgPAAQgHAAgFgDQgHgCgDgGIgCAAIACAMIAAAfgAgQgmQgEAHAAAOIAAACQAAAPAEAGQAGAIALgBQAJABAGgJQAFgGAAgOQAAgOgFgIQgGgHgJAAQgLAAgGAGg");
	this.shape_37.setTransform(25.6,201.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgIAAgMAGIgDgIIALgFIANgCQANAAAHAGQAGAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQAEADAGAAQAJAAAHgGQAFgFAAgLIAAgHg");
	this.shape_38.setTransform(17,199.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAIAKQAHAJAAAPIAAAGIgyAAQABAOAGAGQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgHgJABQgIgBgFAHQgFAFgBALIAlAAIAAAAg");
	this.shape_39.setTransform(71.5,180.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAHAKQAJAJgBAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQAMAAANgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQgBgLgEgFQgFgHgJABQgIgBgFAHQgGAFAAALIAmAAIAAAAg");
	this.shape_40.setTransform(63.65,180.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_41.setTransform(56.175,182.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_42.setTransform(48.425,180.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_43.setTransform(42.475,179.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAJAAIACAKIAAAAQAFgHAFgCQAHgDAGAAQAPAAAIALQAIAJAAATQAAASgIAJQgIALgPAAQgGAAgHgDQgFgDgFgFIgBAAIABANIAAAegAgPgmQgFAHgBAOIAAACQABAPAFAHQAFAGALAAQAJAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgJAAQgLAAgFAGg");
	this.shape_44.setTransform(36.65,182.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgIAAQgLAAgGAGQgEAGAAAMIAAApIgLAAIAAgvQAAgJgEgFQgEgEgHAAQgLAAgFAGQgFAGAAAPIAAAmIgMAAIAAhKIAKAAIABALIABAAQADgGAGgDQAGgDAIAAQARAAAEANIABAAQADgGAHgEQAGgDAIAAQAMAAAHAHQAGAGABAOIAAAwg");
	this.shape_45.setTransform(25.7,180.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAALIgrAAIAAAfIAoAAIAAAKIgoAAIAAAlIArAAIAAAKg");
	this.shape_46.setTransform(15.55,179.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgIAEgDQAEgFAGAAQAHAAAEAEQAEAFAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_47.setTransform(5.175,179.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAmQgMgOAAgYQAAgYAMgNQAMgNAWAAQAVAAAMANQAMAOAAAXQAAAYgMAOQgMANgWAAQgVAAgMgNgAgYgeQgIALAAATQAAAUAIALQAJAKAPAAQAQAAAJgKQAJgKgBgVQAAgTgIgLQgIgKgQAAQgRAAgIAKg");
	this.shape_48.setTransform(32.95,160.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAyIAAhZIghAAIAAgKIBKAAIAAAKIgfAAIAABZg");
	this.shape_49.setTransform(23.65,160.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAaAAQAlAAAAAdQAAAPgKAIQgLAHgSABIgMAAIAAAngAgTABIALAAQAOgBAHgEQAHgEAAgMQAAgJgHgFQgGgFgNAAIgNAAg");
	this.shape_50.setTransform(15.925,160.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgIAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAIQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_51.setTransform(5.175,160.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_52.setTransform(83.775,144.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgDgFgJAAQgIAAgMAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAHgGQAFgFABgLIAAgHg");
	this.shape_53.setTransform(76.15,142.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgfAyIAAhjIAaAAQAlAAAAAdQAAAQgKAGQgLAJgSgBIgMAAIAAAogAgTABIALAAQAOAAAHgFQAHgFAAgKQAAgKgHgFQgGgFgNAAIgNAAg");
	this.shape_54.setTransform(68.625,141.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_55.setTransform(56.975,144.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgJAAgLAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgJAAIgBgKIgBAAQgGAHgFACQgGADgIAAQgKAAgHgGgAAIABQgNAAgGAEQgGAEAAAIQAAAGADADQAFADAGAAQAKAAAFgGQAHgFAAgLIAAgHg");
	this.shape_56.setTransform(49.35,142.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYAsQgIgKAAgTQAAgSAIgJQAIgLAPAAQAOAAAIAMIABAAIgBgGIAAgFIAAgfIAMAAIAABqIgKAAIgBgKIgBAAQgHALgPAAQgPAAgIgKgAgPgGQgGAHAAAPQAAANAGAIQAFAHAKAAQALAAAFgGQAGgHgBgOIAAgCQABgPgGgHQgFgGgLAAQgKAAgFAHg");
	this.shape_57.setTransform(41.25,141);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_58.setTransform(35.425,141.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_59.setTransform(31.925,140.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAKQgJAKgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAHAKAAQALAAAGgHQAGgIAAgOQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_60.setTransform(25.925,142.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAaAyIAAgvIgzAAIAAAvIgMAAIAAhjIAMAAIAAAqIAzAAIAAgqIAMAAIAABjg");
	this.shape_61.setTransform(16.55,141.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKAMQgEgEAAgIQAAgHAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAHQAAAIgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_62.setTransform(5.175,141.15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_63.setTransform(68.225,125.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_64.setTransform(62.225,122.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_65.setTransform(58.075,122.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_66.setTransform(54.575,121.875);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_67.setTransform(51.075,122.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAzQgGgDgEgFIgBAAIgDAJIgIAAIAAhpIAMAAIAAAaIgBAPIABAAQAHgLAPABQAOgBAJALQAIAJAAASQAAATgIAJQgJALgOAAQgHAAgFgDgAgQgGQgEAGAAAPQAAAQAEAHQAGAGAKAAQALABAFgIQAFgIAAgOQAAgPgFgGQgFgHgLAAQgKAAgGAHg");
	this.shape_68.setTransform(45.25,121.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_69.setTransform(39.025,122.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAVAlIgVgeIgUAeIgNAAIAbglIgagkIAOAAIASAcIAUgcIAMAAIgZAkIAbAlg");
	this.shape_70.setTransform(33.6,123.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAIAKQAHAJAAAPIAAAGIgyAAQABAOAGAGQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgHgJABQgIgBgFAHQgFAFgBALIAlAAIAAAAg");
	this.shape_71.setTransform(26.05,123.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_72.setTransform(20.375,121.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAALIgrAAIAAAkIAoAAIAAAJIgoAAIAAArg");
	this.shape_73.setTransform(15.55,122.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgIAEgDQAEgFAGAAQAHAAAEAEQAEAFAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_74.setTransform(5.175,122.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgZAiIAAgLQAFADAGACIAMACQAIAAAFgEQAFgCAAgGQAAgEgEgDQgEgEgKgEQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgFQAHgGAMAAQAMAAAMAFIgEAKQgLgGgJAAQgHABgFACQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_75.setTransform(63.875,104.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQgBgSAKgKQAIgLAOAAQAOAAAJAJQAIAKAAAPIAAAGIgzAAQABAOAGAGQAGAHALAAQAMAAAMgFIAAAKIgMAEIgNABQgPAAgKgKgAAUgGQAAgLgFgFQgFgHgJAAQgIAAgFAHQgGAFgBALIAnAAIAAAAg");
	this.shape_76.setTransform(56.6,104.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgZAiIAAgLQAFADAGACIAMACQAIAAAFgEQAFgCAAgGQAAgEgEgDQgEgEgKgEQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgFQAHgGAMAAQAMAAAMAFIgEAKQgLgGgJAAQgHABgFACQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_77.setTransform(49.375,104.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgYAgQgGgHgBgOIAAgwIAMAAIAAAvQAAAKAEAEQAEAFAKAAQAKAAAFgHQAGgGAAgPIAAgmIALAAIAABKIgJAAIgCgKIAAAAQgEAFgGADQgGADgHAAQgNAAgIgGg");
	this.shape_78.setTransform(41.7,104.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_79.setTransform(33.225,104.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgRAiQgIgFgEgIQgEgJAAgMQAAgRAJgLQAJgKAPAAQAQAAAJAKQAJALAAARQAAASgJALQgJAKgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAPAGAHQAGAIAKAAQALAAAGgIQAGgHAAgPQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_80.setTransform(24.675,104.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIAdAAQATAAAJAGQAIAGAAANQAAAJgFAFQgFAGgJACIAAAAQAXAEAAAUQAAANgJAHQgJAIgRAAgAgWAoIAVAAQALAAAGgEQAGgFAAgKQAAgKgGgEQgGgEgMAAIgUAAgAgWgGIATAAQAMAAAFgEQAFgEAAgJQAAgIgGgEQgGgEgMAAIgRAAg");
	this.shape_81.setTransform(16.225,103.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgIAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAIQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_82.setTransform(5.175,103.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgVAdQgKgLAAgRQABgRAIgLQAJgLAOAAQAPAAAHAKQAJAIgBAQIAAAGIgyAAQAAANAHAHQAGAHAKAAQAMAAANgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQgBgLgEgGQgFgFgJAAQgIAAgFAFQgGAHAAAKIAmAAIAAAAg");
	this.shape_83.setTransform(118.1,85.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgRAdQgJgKAAgSQAAgTAJgJQAJgLAQAAIALACIAIACIgEAKIgHgCIgIgBQgXAAAAAcQABANAFAHQAGAIAKAAQAJAAAKgEIAAAKQgHAEgMAAQgPAAgJgKg");
	this.shape_84.setTransform(111,85.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_85.setTransform(103.275,85.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgIAAgMAGIgDgIIALgFIANgCQANAAAHAGQAGAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQAEADAGAAQAJAAAHgGQAFgFAAgLIAAgHg");
	this.shape_86.setTransform(94.85,85.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgVAmIAAhKIAKAAIABAOIABAAQAEgHAFgEQAGgEAGAAIAJABIgBAKIgIgBQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_87.setTransform(88.85,85.275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgXAgQgIgHAAgOIAAgwIAMAAIAAAvQAAAKAFAEQAEAFAIAAQALAAAFgHQAGgGAAgPIAAgmIALAAIAABKIgJAAIgBgKIgBAAQgDAFgHADQgGADgHAAQgNAAgHgGg");
	this.shape_88.setTransform(81.2,85.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgZAiIAAgLQAFAEAGABQAGACAGgBQAIAAAFgCQAFgDAAgGQAAgFgEgCQgEgDgKgFQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHAAgFACQgEADAAAEQAAADACACIAFAFIAMAFQANAEAFAEQAFAGAAAHQAAALgIAFQgIAGgNAAQgPAAgIgFg");
	this.shape_89.setTransform(73.675,85.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_90.setTransform(66.075,85.275);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_91.setTransform(59.8,84.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAUA1IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAOIAAAnIgLAAIAAhpIALAAIAAAgIAAAKIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAANIAAAxg");
	this.shape_92.setTransform(50.025,83.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_93.setTransform(43.225,84.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_94.setTransform(39.075,83.775);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgIAAgMAGIgDgIIALgFIANgCQANAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQAEADAGAAQAJAAAHgGQAFgFAAgLIAAgHg");
	this.shape_95.setTransform(33.2,85.375);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQgBgRAJgLQAJgLAOAAQAPAAAHAKQAJAIAAAQIAAAGIgzAAQAAANAHAHQAGAHALAAQAMAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQAAgLgFgGQgFgFgJAAQgIAAgFAFQgGAHgBAKIAnAAIAAAAg");
	this.shape_96.setTransform(25.65,85.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAaAyIAAgvIgzAAIAAAvIgMAAIAAhjIAMAAIAAAqIAzAAIAAgqIAMAAIAABjg");
	this.shape_97.setTransform(16.55,84.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKAMQgEgEAAgIQAAgHAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAHQAAAIgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_98.setTransform(5.175,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(0.6,72.2,144.4,175.39999999999998), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPBVQgFgGAAgJQAAgLAFgFQAGgFAJAAQAKAAAGAFQAFAFAAALQAAAJgFAGQgGAFgKAAQgJAAgGgFgAgOAcIgGh1IApAAIgGB1g");
	this.shape.setTransform(141.575,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BZQgPgKAAgSQAAgMAIgIQAHgJAPgDQgFgCgFgGQgEgGAAgGQAAgHAFgEQAEgGAIgEQgKgFgHgKQgFgLAAgNQAAgWANgNQAPgLAbgBIAMABIAKACIAvAAIAAATIgVAFQAGAKAAAKQAAAWgQAMQgOAMgaAAIgHAAIgGgBQgFAFAAAEQAAAIAUAAIAWAAQAXAAALAJQAMAKgBASQAAAZgTANQgUANgkAAQgcAAgPgKgAgcAtQgHAFAAAIQAAAIAIAEQAGAFAOgBQASABAMgGQALgGAAgJQAAgIgHgCQgGgDgOAAIgSAAQgLAAgGAEgAgVgzQAAAMAEAFQAFAHALAAQAJAAAFgHQAEgFABgMQgBgYgSAAQgVAAABAYg");
	this.shape_1.setTransform(131,76.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZBFIAAhOQAAgPgFgHQgFgHgLAAQgPAAgHAKQgHAKAAAXIAABAIgkAAIAAiGIAcAAIAFARIACAAQAGgKALgFQAJgFAOAAQAYAAAMANQAMANAAAYIAABXg");
	this.shape_2.setTransform(116.125,73.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBeIAAiGIAjAAIAACGgAgThLQAAgSATAAQAUAAAAASQAAAJgFAEQgFAFgKAAQgTAAAAgSg");
	this.shape_3.setTransform(104.275,71.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBFIAAiGIAcAAIAFAXIACAAQAGgMAKgHQALgHAMAAIANABIgDAjIgLgBQgSAAgJAJQgJAJAAAPIAABFg");
	this.shape_4.setTransform(95.625,73.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBeIAAiGIAjAAIAACGgAgThLQAAgSATAAQAUAAAAASQAAAJgFAEQgFAFgKAAQgTAAAAgSg");
	this.shape_5.setTransform(85.625,71.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBYIAAhMIhFAAIAABMIglAAIAAivIAlAAIAABFIBFAAIAAhFIAlAAIAACvg");
	this.shape_6.setTransform(72.425,71.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBEIgKgvIgOg7IAAAAIgYBqIgoAAIgmiGIAkAAIAQA8QAEAOADAcIABAAIAEgdIACgJIARhAIAoAAIAPBAIACAHIACALIACALIAAAJIABAAIAEgXIAEgTIAQg8IAkAAIgnCGg");
	this.shape_7.setTransform(46.075,73.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA9QgPgIgHgQQgIgQAAgVQAAggARgSQARgTAfAAQASAAAQAJQAPAIAHAQQAJAPgBAVQAAAhgRASQgSATgeAAQgTAAgPgJgAgUgdQgHAJAAAUQAAAUAHAKQAGALAOAAQAPAAAGgLQAHgKAAgUQgBgTgGgKQgGgKgPAAQgOAAgGAKg");
	this.shape_8.setTransform(27.85,73.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBYIhMiEIgBAAIACAxIAABTIghAAIAAivIAvAAIBMCDIABAAIgCgwIAAhTIAhAAIAACvg");
	this.shape_9.setTransform(10.225,71.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(-2.4,51.5,150.4,38.8), null);


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
	this.instance.setTransform(-18,586,0.9493,0.9493);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-18,586,315.2,69.29999999999995), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgQBdQgGgGAAgLQAAgLAGgGQAGgGAKAAQALAAAGAGQAGAGAAALQAAAKgGAGQgGAGgLAAQgKAAgGgFgAgPAfIgHiAIAtAAIgGCAg");
	this.shape.setTransform(122.25,217.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BUQgPgVAAgjQAAgjAPgUQAPgVAbAAQAbAAAOAWIACAAQgDgQgBgNIAAgwIApAAIAADMIgfAAIgIgSIgCAAQgNAVgbAAQgaAAgPgUgAgTgEQgIAKAAAXQAAAWAIAKQAHALANAAQAPAAAIgJQAHgJABgWIAAgEQAAgYgIgJQgHgKgRAAQgMAAgHALg");
	this.shape_1.setTransform(109.4,217.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA5QgUgUAAgjQAAglATgUQASgVAgABQAgAAAQASQASARAAAfIAAATIheAAQABARAJAKQAKAKAQAAQANAAAMgDQAMgDANgGIAAAfQgLAGgMACQgMACgRABQgjAAgUgUgAAegPQAAgQgIgHQgHgJgNAAQgLAAgIAJQgHAHgBAQIA3AAIAAAAg");
	this.shape_2.setTransform(93.35,219.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BUQgPgVAAgjQAAgjAPgUQAQgVAaAAQAbAAAPAWIABAAQgDgQAAgNIAAgwIAoAAIAADMIgfAAIgHgSIgCAAQgOAVgbAAQgaAAgPgUgAgUgEQgHAKAAAXQAAAWAHAKQAIALANAAQAPAAAHgJQAIgJABgWIAAgEQgBgYgHgJQgHgKgRAAQgMAAgIALg");
	this.shape_3.setTransform(76.4,217.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA5QgUgUAAgjQAAglATgUQASgVAgABQAgAAAQASQASARAAAfIAAATIheAAQAAARAKAKQAKAKAQAAQANAAAMgDQAMgDANgGIAAAfQgKAGgNACQgMACgRABQgjAAgUgUgAAfgPQgBgQgHgHQgIgJgMAAQgMAAgIAJQgHAHgBAQIA4AAIAAAAg");
	this.shape_4.setTransform(60.3,219.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA5QgUgUAAgjQAAglATgUQASgVAgABQAgAAARASQARARAAAfIAAATIheAAQAAARAKAKQAKAKAQAAQANAAAMgDQAMgDANgGIAAAfQgKAGgNACQgMACgRABQgiAAgVgUgAAfgPQgBgQgHgHQgIgJgMAAQgNAAgHAJQgHAHgBAQIA4AAIAAAAg");
	this.shape_5.setTransform(44.35,219.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBgIhTiQIgCAAIADA2IAABaIgkAAIAAi/IAzAAIBTCPIABAAIgCg0IAAhbIAlAAIAAC/g");
	this.shape_6.setTransform(25.35,217.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBLQgMgCgKgFIAAghQAMAFAOADQAOAEALAAQAVAAgBgNQAAgEgDgDIgKgHIgRgIQgRgIgJgFQgHgGgEgIQgEgHAAgMQAAgUAPgLQAPgLAcAAQAbABAZALIgNAeIgUgIQgKgEgKAAQgRAAAAAKQAAAFAGAEQAFAFATAHQASAHAHAGQAJAGADAIQAEAHAAALQAAAXgQAMQgPAMgfAAQgQgBgLgBg");
	this.shape_7.setTransform(134.65,189.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBLIAAiSIAfAAIAFAYIADAAQAGgMALgHQAMgIANAAIAOABIgDAmIgMgCQgTAAgLAKQgJAKAAARIAABLg");
	this.shape_8.setTransform(122.5,189.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvA5QgUgUAAgjQAAglATgUQASgVAgAAQAfABASASQARARAAAfIAAATIheAAQABARAJAKQAJAKARAAQANAAAMgDQAMgDANgGIAAAfQgLAGgMACQgMACgRABQgiAAgVgUgAAegPQAAgPgHgJQgIgHgNgBQgMABgHAHQgHAJgBAPIA3AAIAAAAg");
	this.shape_9.setTransform(107.6,189.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBKIg4iTIAqAAIAcBTQAGAQAAAOIAAAAQABgMAGgSIAchTIAqAAIg5CTg");
	this.shape_10.setTransform(91.95,189.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBnIAAiTIAnAAIAACTgAgVhSQAAgUAVAAQAWAAAAAUQAAAJgFAGQgGAFgLAAQgVAAAAgUg");
	this.shape_11.setTransform(80.175,187.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BhQgQgLAAgTQAAgOAIgJQAIgJAQgDQgGgDgFgGQgEgGAAgHQAAgIAFgFQAFgFAJgGQgMgFgHgLQgGgLAAgPQAAgYAPgNQAQgOAdAAIAOACIALABIAzAAIAAAVIgXAGQAHAJAAANQAAAXgRAOQgRANgcAAIgHAAIgGgBQgGAFAAAFQAAAIAWAAIAYAAQAYAAANALQANAKAAAUQAAAagWAOQgWAPgnAAQgfAAgQgLgAgfAyQgIAFAAAJQAAAIAIAFQAIAEAPAAQAUAAANgGQAMgFAAgLQAAgIgHgDQgIgDgPAAIgUAAQgLAAgHAFgAgYg4QAAAMAGAHQAFAHALAAQALAAAFgHQAFgHAAgMQAAgagVAAQgWAAAAAag");
	this.shape_12.setTransform(68.375,193.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA5QgUgUAAgjQAAglATgUQASgVAgAAQAgABAQASQASARAAAfIAAATIheAAQABARAJAKQAKAKAQAAQANAAAMgDQAMgDANgGIAAAfQgLAGgMACQgMACgRABQgjAAgUgUgAAegPQAAgPgIgJQgHgHgMgBQgMABgIAHQgHAJgBAPIA3AAIAAAAg");
	this.shape_13.setTransform(52.85,189.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBLIAAiSIAeAAIAGAYIACAAQAIgMAKgHQAMgIANAAIAOABIgDAmIgMgCQgTAAgLAKQgKAKABARIAABLg");
	this.shape_14.setTransform(39.5,189.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BBQgMgMAAgXQAAgXARgKQAQgMAggBIAagBIAAgGQAAgXgXAAQgRAAgYALIgNgcQAZgNAeAAQAeAAAQANQAQANAAAbIAABhIgcAAIgIgUIgBAAQgKANgLAFQgKAEgRABQgVAAgNgMgAAKAGQgQAAgJAHQgJAFAAAMQAAARAUAAQANAAAIgIQAJgIAAgNIAAgNg");
	this.shape_15.setTransform(24.025,189.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBKQgXgaAAgvQAAgeALgWQALgXAVgMQAUgMAbAAQAcAAAdAOIgOAhIgVgJQgLgEgLAAQgWAAgNARQgMASAAAeQAABAAvAAQAUAAAdgKIAAAiQgXAKgeAAQgpAAgWgZg");
	this.shape_16.setTransform(8.075,187.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBfQgPgKAAgTQAAgPAJgJQAJgKAQgEQgGgCgEgFQgFgGAAgGQAAgOATgLQgMgFgHgLQgIgLAAgOQABgWAOgMQANgOAXAAQANAAAIADIAuAAIAAAJIgeACQAMAPAAASQAAAUgNANQgPANgVAAIgPgBQgHAEgEAGQgEAFgBAGQAAAHAGADQAFADANAAIAYAAQAXAAAMAJQAMAKAAASQAAAXgSAMQgSANgiAAQgbAAgOgLgAgyBBQAAAeAsAAQA4AAAAgkQgBgNgIgGQgKgGgTAAIgWAAQgoAAAAAfgAgdhUQgKAJAAASQAAARAKAJQAKAJARAAQARAAAKgJQAJgJAAgSQAAgSgKgJQgJgJgRAAQgRAAgKAKg");
	this.shape_17.setTransform(97.35,166.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAsBJIAAhcQAAgVgJgKQgJgKgUAAQgZAAgLANQgMANgBAdIAABOIgMAAIAAiOIAKAAIADATIABAAQAOgWAjAAQAxAAgBA0IAABdg");
	this.shape_18.setTransform(82.4,163.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFBiIAAiPIAMAAIAACPgAgIhUQAAgNAIAAQAEAAADADQABAEAAAGQAAAFgBAEQgDAEgEgBQgIAAAAgMg");
	this.shape_19.setTransform(71.35,160.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGBIIg3iPIAOAAIAlBhQAHATADAOIAAAAIALghIAlhhIAOAAIg3CPg");
	this.shape_20.setTransform(62.15,163.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFBiIAAiPIAMAAIAACPgAgIhUQAAgNAIAAQAEAAADADQABAEAAAGQAAAFgBAEQgDAEgEgBQgIAAAAgMg");
	this.shape_21.setTransform(52.9,160.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIAOAAIAAC0IBbAAIAAANg");
	this.shape_22.setTransform(44.025,160.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsBVQgQgSAAgjQAAgkAQgUQAQgUAcAAQAQAAALAGQAMAFAJAOIAAAAIAAggIAAg0IANAAIAADNIgJAAIgDgXIgBAAQgRAZgeAAQgdAAgQgTgAgigPQgMAPAAAfQAAA+AvAAQAYgBALgOQAMgOAAggIAAgCQAAghgLgOQgMgPgZAAQgWAAgMARg");
	this.shape_23.setTransform(111.725,127.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA4QgSgUAAgiQAAgiARgVQARgUAcgBQAZABAPARQAPASAAAeIAAAKIhnAAQAAAdAOAQQAOAQAYAAQAMAAAJgCQAKgBAOgHIAAANQgMAFgLACQgKACgMAAQgfAAgRgTgAAtgJQAAgZgLgOQgLgOgTAAQgUAAgMAOQgNANgCAaIBYAAIAAAAg");
	this.shape_24.setTransform(96.725,130.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBQQgJgKAAgWIAAhbIgVAAIAAgIIAVgGIAGggIAIAAIAAAiIApAAIAAAMIgpAAIAABZQAAARAEAIQAGAIANAAQAMAAAJgCIAAAKQgJADgNAAQgSAAgJgKg");
	this.shape_25.setTransform(84.6,129.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyBCIAAgPQAWALAYAAQAUAAALgGQALgIAAgMQAAgKgIgIQgKgHgTgHQgVgHgJgGQgIgFgFgHQgFgHAAgKQAAgRAPgJQANgKAXAAQAXAAAVAJIgFAMQgVgIgSgBQgRABgKAFQgKAGAAALQAAAKAIAIQAIAGAWAJQAUAGAIAFQAJAFAFAIQAEAHAAAJQAAAUgOALQgPAJgaABQgdAAgRgJg");
	this.shape_26.setTransform(73.9,130.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGBiIAAiPIANAAIAACPgAgHhUQAAgNAHAAQAEAAADADQACAEAAAGQAAAFgCAEQgDADgEAAQgHAAAAgMg");
	this.shape_27.setTransform(64.65,128.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgyBCIAAgPQAVALAZAAQAUAAALgGQALgIAAgMQAAgKgJgIQgJgHgTgHQgVgHgJgGQgJgFgEgHQgFgHABgKQAAgRANgJQANgKAYAAQAYAAAUAJIgFAMQgVgIgSgBQgRABgKAFQgKAGAAALQAAAKAIAIQAIAGAWAJQATAGAKAFQAIAFAFAIQAEAHAAAJQAAAUgOALQgPAJgaABQgdAAgRgJg");
	this.shape_28.setTransform(55.2,130.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyBCIAAgPQAVALAZAAQAUAAALgGQALgIAAgMQAAgKgJgIQgJgHgTgHQgVgHgJgGQgJgFgEgHQgFgHABgKQAAgRANgJQANgKAYAAQAYAAAUAJIgFAMQgVgIgSgBQgRABgKAFQgKAGAAALQAAAKAIAIQAIAGAWAJQATAGAKAFQAIAFAEAIQAFAHAAAJQAAAUgOALQgPAJgaABQgdAAgRgJg");
	this.shape_29.setTransform(42.6,130.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABCBhIgbhEIhNAAIgbBEIgPAAIBNjBIAIAAIBMDBgAAjAQIgbhEIgIgXIgGAYIgcBDIBFAAg");
	this.shape_30.setTransform(28.325,128.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoA4QgSgUAAgiQAAgiARgUQARgWAcAAQAZAAAPASQAPASAAAfIAAAJIhnAAQAAAeAOAPQAOAQAYAAQAMAAAJgCQAKgBAOgGIAAAMQgMAFgLACQgKABgMABQgfgBgRgSgAAtgIQAAgagLgOQgLgNgTAAQgUAAgMANQgNAOgCAaIBYAAIAAAAg");
	this.shape_31.setTransform(117.375,105.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABTBJIAAhdQAAgVgIgKQgIgJgRAAQgWAAgLAMQgKAMAAAaIAABTIgNAAIAAhhQAAgkghAAQgXAAgKANQgKANAAAdIAABOIgNAAIAAiOIALAAIACATIABAAQAGgKALgGQALgGANAAQAiAAAJAZIAAAAQAHgMAMgGQAMgHAPAAQAYAAALANQAMAMAAAbIAABdg");
	this.shape_32.setTransform(98.125,105.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFBiIAAiOIAMAAIAACOgAgIhVQAAgMAIAAQAEAAADADQABAEAAAFQAAAHgBADQgDAEgEAAQgIAAAAgOg");
	this.shape_33.setTransform(83.05,103.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGBgIAAizIg+AAIAAgMICJAAIAAAMIg/AAIAACzg");
	this.shape_34.setTransform(73,103.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAFIAAgJIA+AAIAAAJg");
	this.shape_35.setTransform(61.65,105.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFBnIAAjNIAMAAIAADNg");
	this.shape_36.setTransform(54.25,102.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFBnIAAjNIALAAIAADNg");
	this.shape_37.setTransform(48.15,102.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag3AVIAAhdIAMAAIAABcQABAWAIAKQAJAKAUgBQAYABANgNQAMgNgBgeIAAhOIAOAAIAACOIgMAAIgCgTIgBAAQgOAWgjAAQgwAAAAg0g");
	this.shape_38.setTransform(37.15,106);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag0BgIAAi/IBpAAIAAAMIhbAAIAABRIBWAAIAAANIhWAAIAABVg");
	this.shape_39.setTransform(23.725,103.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(-4.4,80.8,149.3,158), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AASAyIgIgjIgKgrIAAAAIgSBOIgdAAIgchjIAbAAIALAsIAGAgIAAAAQAAgHADgOIACgHIAMgwIAdAAIAMAwIABAFIACAIIAAAIIABAHIAAAAIADgSIAEgOIALgsIAbAAIgcBjg");
	this.shape.setTransform(-71,361.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAtQgLgGgGgMQgGgMAAgPQAAgXANgOQAMgOAWABQAPgBALAHQALAFAFANQAGALAAAPQAAAYgNAOQgMANgXAAQgNABgLgHgAgPgWQgEAIAAAOQAAAOAEAIQAFAHAKABQALgBAFgHQAFgIAAgOQAAgOgFgIQgFgHgLAAQgKAAgFAHg");
	this.shape_1.setTransform(-84.425,361.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBBIg4hhIgBAAIACAkIAAA9IgYAAIAAiBIAiAAIA3BgIABAAIgBgjIAAg9IAZAAIAACBg");
	this.shape_2.setTransform(-97.4,359.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBGIAAgVQAFABAGAAQAHAAAGgEQAFgFADgJIACgEIgohiIAeAAIATA4QACAHAAAJIAAAAQABgJADgHIATg4IAdAAIgqBuQgGARgKAHQgKAIgPAAIgOgCg");
	this.shape_3.setTransform(-114.625,363.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBFIAAiJIAbAAIAACJg");
	this.shape_4.setTransform(-122.575,359.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIAWAAIAEANIABAAQAJgOASAAQARAAAKANQAKAOAAAYQABAQgFALQgFALgJAGQgIAHgMAAQgQAAgKgNIgBAAIABAOIAAAogAgNgsQgFAHAAAOIAAADQAAAQAFAGQAEAHAJAAQATAAAAgdQAAgPgEgHQgFgIgKAAQgJAAgEAGg");
	this.shape_5.setTransform(-130.8,363.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBIIAAiOIAXAAIADANIACAAQAJgOASAAQASAAAJANQALAOAAAYQAAAQgFALQgFALgIAGQgJAHgMAAQgQAAgKgNIgCAAIACAOIAAAogAgNgsQgFAHAAAOIAAADQAAAQAFAGQAFAHAIAAQATAAAAgdQAAgPgFgHQgEgIgKAAQgJAAgEAGg");
	this.shape_6.setTransform(-142.3,363.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBBIgJgfIgvAAIgJAfIgeAAIAuiBIAhAAIAuCBgAARALIgPguIgCgJIgQA3IAhAAg");
	this.shape_7.setTransform(-154.625,359.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AqCDaIAAmyIUFAAIAAGyg");
	this.shape_8.setTransform(-111.95,360.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-176.2,338.7,128.5,43.5), null);


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
	this.instance.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,-30,160,600), null);


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


// stage content:
(lib.WBAY_218223_MM_160x600_V1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [219];
	// timeline functions:
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(220));

	// T2
	this.instance = new lib.T2();
	this.instance.setTransform(41.15,77.5,1,1,0,0,0,46.1,51.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({x:56.15,alpha:1},9,cjs.Ease.get(1)).wait(83));

	// T1
	this.instance_1 = new lib.T1();
	this.instance_1.setTransform(25.05,17.2,1,1,0,0,0,57.8,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:65.05,alpha:1},9,cjs.Ease.get(1)).wait(92));

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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(220));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(44.9,270,116.1,331);
// library properties:
lib.properties = {
	id: '8B7DC0FE22814B3AA093DD30E648C590',
	width: 160,
	height: 600,
	fps: 30,
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
an.compositions['8B7DC0FE22814B3AA093DD30E648C590'] = {
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