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
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


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
	this.shape.graphics.f("#FFFFFF").s().p("AghAlQgLgNgBgYQABgXALgNQAMgOAVAAQAVAAANAOQAMANgBAXQABAXgMAOQgNAOgVAAQgVAAgMgOgAgYgdQgJAKAAATQAAAUAJAKQAIALAQAAQARAAAIgLQAIgKAAgUQAAgTgIgKQgIgKgRAAQgQgBgIALg");
	this.shape.setTransform(359.7,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAyIAAhYIgfAAIAAgKIBJAAIAAAKIgfAAIAABYg");
	this.shape_1.setTransform(350.475,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAyIAAhiIAaAAQAlAAgBAdQABAPgLAGQgKAJgTgBIgLAAIAAAogAgTAAIALAAQAOAAAGgDQAIgFgBgLQAAgKgGgFQgHgEgMAAIgNAAg");
	this.shape_2.setTransform(342.85,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_3.setTransform(332.15,27.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA0IAAgvQAAgJgDgEQgEgEgKAAQgKAAgFAGQgGAGAAANIAAAnIgLAAIAAhnIALAAIAAAfIAAAJIABAAQADgEAGgEQAGgDAHAAQAOAAAGAHQAHAGAAANIAAAwg");
	this.shape_4.setTransform(503.25,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAdQgJgLAAgRQAAgSAJgKQAJgLAQAAIAKACIAJADIgEAJIgIgCIgIgBQgVAAAAAcQAAANAFAHQAGAHAKABQAJAAAKgFIAAALQgIAEgLAAQgPAAgJgKg");
	this.shape_5.setTransform(495.875,11.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAXIAAgqIgLAAIAAgGIALgFIAEgPIAGAAIAAARIAVAAIAAAJIgVAAIAAAqQAAAHADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgYg");
	this.shape_6.setTransform(489.9,10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAgQgGgFAAgKQAAgWAjgBIANAAIAAgFQAAgJgEgEQgEgEgIAAQgIAAgMAFIgEgIQAGgDAGgBQAHgCAGgBQANABAGAFQAHAHAAAMIAAAyIgJAAIgCgKIgBAAQgFAGgGADQgFACgHABQgLAAgHgHgAAHABQgMABgGADQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_7.setTransform(483.425,11.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgKAAgFAGQgFAGAAAMIAAApIgLAAIAAgvQAAgJgDgFQgEgEgIAAQgLAAgFAGQgFAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAFgDAIAAQARAAAEANIABAAQADgGAGgDQAHgEAIAAQAMAAAHAHQAGAGAAAOIAAAwg");
	this.shape_8.setTransform(473.425,11.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA0IAAgJIAJABQALAAAFgNIAEgKIgehKIAMAAIARAqIAFAUIABAAIAEgKIASg0IAMAAIggBUQgEAMgGAFQgGAGgKAAIgKgCg");
	this.shape_9.setTransform(459.875,13.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQgBgJgEgFQgEgEgIAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIAAAAQAEgGAGgDQAGgDAHAAQANAAAHAHQAHAGAAAOIAAAwg");
	this.shape_10.setTransform(452.25,11.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAgQgGgFAAgKQAAgWAjgBIANAAIAAgFQAAgJgEgEQgEgEgIAAQgIAAgMAFIgEgIQAGgDAGgBQAHgCAGgBQANABAGAFQAHAHAAAMIAAAyIgJAAIgCgKIgBAAQgFAGgGADQgFACgHABQgLAAgHgHgAAHABQgMABgGADQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_11.setTransform(443.875,11.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAJAAIACAKIAAAAQAFgGAFgDQAHgDAGAAQAOAAAIALQAIAJAAATQAAARgIALQgIAKgOAAQgGgBgHgCQgFgDgFgFIAAAAIAAAMIAAAfgAgPgmQgFAHgBANIAAADQAAAPAGAGQAFAHALAAQAJAAAFgIQAGgGAAgOQAAgOgGgIQgFgHgJAAQgLAAgFAGg");
	this.shape_12.setTransform(436.25,13.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgKAAgFAGQgFAGAAAMIAAApIgLAAIAAgvQAAgJgDgFQgEgEgIAAQgLAAgFAGQgFAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAFgDAIAAQARAAAEANIABAAQADgGAGgDQAHgEAIAAQAMAAAHAHQAGAGAAAOIAAAwg");
	this.shape_13.setTransform(425.425,11.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAhQgIgEgEgIQgEgKAAgLQAAgSAJgJQAJgLAPAAQAPAAAJALQAKAKAAARQAAASgKAKQgIALgQAAQgJAAgIgGgAgQgVQgFAIAAANQAAAOAFAHQAGAIAKAAQALAAAFgIQAGgHAAgOQAAgNgGgIQgFgHgLAAQgKAAgGAHg");
	this.shape_14.setTransform(414.8,11.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAdQgJgLAAgRQAAgSAJgKQAJgLAQAAIAKACIAJADIgEAJIgIgCIgIgBQgVAAAAAcQAAANAFAHQAGAHAKABQAJAAAKgFIAAALQgIAEgLAAQgPAAgJgKg");
	this.shape_15.setTransform(407.475,11.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATA0IAAgvQAAgJgDgEQgFgEgIAAQgLAAgFAGQgGAGAAANIAAAnIgLAAIAAhnIALAAIAAAfIAAAJIAAAAQAEgEAFgEQAHgDAHAAQAOAAAGAHQAHAGAAANIAAAwg");
	this.shape_16.setTransform(396.25,9.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAXIAAgqIgLAAIAAgGIALgFIAFgPIAFAAIAAARIAWAAIAAAJIgWAAIAAAqQAAAHADAEQAEADAFAAIAFAAIAFgBIAAAJIgGABIgGABQgVAAABgYg");
	this.shape_17.setTransform(389.5,10.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAzIAAhJIAKAAIAABJgAgDglQgCgCgBgDQABgEACgCQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQACACAAAEQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_18.setTransform(385.35,10.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATAlIgOgqIgFgSIAAAAIgEASIgOAqIgNAAIgUhJIAMAAIALApIAEAUIAAAAIADgKIADgKIANgpIALAAIAOApIAFAUIAAAAIACgHIAOg2IALAAIgUBJg");
	this.shape_19.setTransform(378.175,11.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA0IgZgjIgIAIIAAAbIgLAAIAAhnIALAAIAAA2IgBALIABAAIAJgKIAWgZIAOAAIgdAfIAeAqg");
	this.shape_20.setTransform(366.15,9.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAHAxIAAhFIABgQIgEADIgPAMIgGgHIAagVIAJAAIAABig");
	this.shape_21.setTransform(357.15,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAmQgIgNAAgZQAAgZAIgMQAIgNAQAAQAQAAAIANQAJANAAAYQAAAagJAMQgIANgQAAQgPAAgJgNgAgPgfQgFALAAAUQAAAWAFAJQAFAKAKAAQALAAAFgKQAFgKAAgVQAAgUgFgKQgFgKgLAAQgKAAgFAJg");
	this.shape_22.setTransform(350.175,10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALAyIAAgXIgvAAIAAgKIAuhCIAMAAIAABCIAPAAIAAAKIgPAAIAAAXgAAFgaIgeArIAkAAIAAggIABgWIgBAAg");
	this.shape_23.setTransform(342.325,10.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_24.setTransform(332.15,10.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghA0IAAgJIAJABQALAAAFgNIAEgKIgehKIAMAAIARAqIAFAUIABAAIAEgKIASg0IAMAAIggBUQgEAMgGAFQgGAGgKAAIgKgCg");
	this.shape_25.setTransform(410.075,-4.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAgQgGgFAAgLQAAgVAjgBIANAAIAAgFQAAgJgEgEQgEgEgIAAQgIAAgMAGIgEgJQAGgDAGgCQAHgCAGAAQANAAAGAHQAHAFAAANIAAAyIgJAAIgCgLIgBAAQgFAIgGACQgFACgHABQgLAAgHgHgAAHABQgMAAgGAEQgGAEAAAHQAAAHAEADQADADAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_26.setTransform(402.525,-5.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAxIAAhiIAZAAQAlAAgBAdQAAAPgKAIQgKAHgSABIgMAAIAAAmgAgTABIAKAAQAPAAAHgEQAGgFABgLQAAgKgHgEQgGgGgNAAIgNAAg");
	this.shape_27.setTransform(395.1,-7.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AghA0IAAgJIAJABQALAAAFgNIAEgKIgehKIAMAAIARAqIAFAUIABAAIAEgKIASg0IAMAAIggBUQgEAMgGAFQgGAGgKAAIgKgCg");
	this.shape_28.setTransform(383.525,-4.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAgQgGgFAAgLQAAgVAjgBIANAAIAAgFQAAgJgEgEQgEgEgIAAQgIAAgMAGIgEgJQAGgDAGgCQAHgCAGAAQANAAAGAHQAHAFAAANIAAAyIgJAAIgCgLIgBAAQgFAIgGACQgFACgHABQgLAAgHgHgAAHABQgMAAgGAEQgGAEAAAHQAAAHAEADQADADAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_29.setTransform(375.975,-5.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYArQgHgKgBgSQABgRAHgLQAJgKAOAAQAOAAAIALIABAAIgBgFIAAgFIAAgeIALAAIAABoIgJAAIgBgKIgBAAQgIALgOAAQgOAAgJgKgAgPgGQgFAHAAAOQAAAOAFAHQAFAIAKAAQALAAAFgHQAFgGAAgOIAAgCQAAgPgFgHQgFgGgLAAQgKAAgFAHg");
	this.shape_30.setTransform(367.95,-7.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAzIAAhJIAKAAIAABJgAgDglQgCgCAAgDQAAgEACgCQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQABACAAAEQAAADgBACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_31.setTransform(362.15,-7.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEA0IAAhoIAJAAIAABog");
	this.shape_32.setTransform(358.65,-7.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAhQgIgEgEgIQgEgKAAgLQAAgRAJgLQAJgJAPgBQAQAAAJALQAJAKAAARQAAASgJAKQgKALgPAAQgKAAgHgGgAgQgVQgGAIAAANQAAAOAGAIQAGAHAKAAQALAAAGgHQAFgIAAgOQAAgNgFgIQgGgHgLAAQgLAAgFAHg");
	this.shape_33.setTransform(352.75,-5.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaAxIAAguIgzAAIAAAuIgMAAIAAhiIAMAAIAAArIAzAAIAAgrIAMAAIAABig");
	this.shape_34.setTransform(343.45,-7.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_35.setTransform(332.15,-7.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgZAiIAAgKIAMADIALACQAIAAAFgDQAFgCAAgHQAAgDgEgEQgEgDgKgEIgOgFQgFgDgCgEQgCgEAAgFQAAgJAHgFQAIgFAMAAQALAAAMAEIgEAJQgLgEgJAAQgHAAgEACQgEADAAAFQAAACABADIAFAEIAMAFQANAEAFAFQAEAEAAAIQAAAKgHAGQgIAFgNAAQgPAAgIgEg");
	this.shape_36.setTransform(317.325,46.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLAYIAAgrIgKAAIAAgGIAKgEIAGgRIAFAAIAAASIAVAAIAAAJIgVAAIAAAqQAAAHADAEQAEADAFAAIAGgBIAEgBIAAAJIgGACIgGAAQgUABgBgXg");
	this.shape_37.setTransform(311.5,45.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AATAmIAAgvQABgJgEgFQgFgEgJAAQgKAAgGAGQgFAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAHgDAGAAQANAAAHAHQAHAGAAAOIAAAwg");
	this.shape_38.setTransform(304.95,45.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAcQgJgJAAgTQAAgRAIgKQAJgKAOAAQAOgBAIAKQAIAJAAAPIAAAGIgyAAQAAANAHAHQAGAHAKgBQAMAAAMgEIAAAKIgLADIgNABQgPAAgKgKgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_39.setTransform(296.825,46.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAlIgchJIAMAAIAQArIAGAUIAAAAIAFgPIASgwIAMAAIgcBJg");
	this.shape_40.setTransform(289.475,46.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVAcQgJgJAAgTQAAgRAIgKQAJgKAOAAQAOgBAIAKQAIAJAAAPIAAAGIgyAAQAAANAHAHQAGAHAKgBQAMAAAMgEIAAAKIgLADIgNABQgPAAgKgKgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_41.setTransform(282.175,46.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AATAmIAAgvQAAgJgDgFQgFgEgJAAQgKAAgGAGQgFAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAGgDAHAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_42.setTransform(270.5,45.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAiQgIgFgEgJQgEgIAAgMQAAgSAJgJQAJgLAPABQAPAAAKAKQAJAKAAARQAAASgJAKQgKALgPgBQgKAAgHgEgAgQgUQgGAGABAOQgBAOAGAIQAGAHAKAAQALAAAGgHQAFgIAAgOQAAgOgFgGQgGgIgLAAQgLAAgFAIg");
	this.shape_43.setTransform(262.05,46.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAzIAAhJIALAAIAABJgAgDglQgDgCAAgDQAAgEADgCQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQACACAAAEQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_44.setTransform(256.1,44.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAYIAAgrIgKAAIAAgGIAKgEIAGgRIAFAAIAAASIAWAAIAAAJIgWAAIAAAqQAAAHADAEQADADAGAAIAFgBIAFgBIAAAJIgGACIgGAAQgVABAAgXg");
	this.shape_45.setTransform(251.9,45.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgEgIAAQgIAAgMAGIgEgJQAGgDAGgCQAHgBAGAAQANgBAGAHQAHAGAAANIAAAxIgJAAIgCgLIgBAAQgFAHgGADQgFACgHAAQgLAAgHgFgAAHABQgMABgGADQgGAEAAAIQAAAFAEAEQADADAHAAQAJAAAGgFQAGgHAAgKIAAgHg");
	this.shape_46.setTransform(245.425,46.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAzIAAhJIAKAAIAABJgAgEglQgBgCAAgDQAAgEABgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQACACAAAEQAAADgCACQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_47.setTransform(240.05,44.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgRAcQgJgJAAgTQAAgRAJgKQAJgLAQABIAKAAIAJADIgEAKIgIgDIgIAAQgVgBAAAcQAAAOAFAHQAGAIAKgBQAJAAAKgDIAAAKQgIADgLAAQgPAAgJgKg");
	this.shape_48.setTransform(235.175,46.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAcQgJgJAAgTQAAgRAIgKQAJgKAOAAQAOgBAIAKQAIAJAAAPIAAAGIgyAAQAAANAHAHQAGAHAKgBQAMAAAMgEIAAAKIgLADIgNABQgPAAgKgKgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_49.setTransform(227.925,46.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUAmIAAhJIAJAAIABANIABAAQAEgHAFgEQAGgEAGAAIAJABIgBALIgIgCQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_50.setTransform(221.675,45.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfA3IAAhrIAJAAIABAKIABAAQAEgGAGgDQAFgDAHABQAOgBAJALQAHAJABATQgBARgHAKQgJAKgOAAQgHAAgFgDQgHgCgDgGIgBAAIABANIAAAfgAgPglQgFAFAAAPIAAACQgBAPAGAHQAFAGAKAAQAKAAAGgIQAFgHAAgOQAAgNgFgHQgGgIgKAAQgKAAgFAHg");
	this.shape_51.setTransform(214.35,47.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgfA3IAAhrIAJAAIABAKIABAAQAEgGAFgDQAGgDAHABQAOgBAJALQAIAJAAATQAAARgIAKQgJAKgOAAQgHAAgGgDQgFgCgEgGIgBAAIABANIAAAfgAgPglQgFAFAAAPIAAACQAAAPAFAHQAFAGAKAAQAKAAAGgIQAFgHAAgOQAAgNgFgHQgGgIgKAAQgKAAgFAHg");
	this.shape_52.setTransform(205.9,47.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgEgIAAQgIAAgMAGIgEgJQAGgDAGgCQAHgBAGAAQANgBAGAHQAHAGAAANIAAAxIgJAAIgCgLIgBAAQgFAHgGADQgFACgHAAQgLAAgHgFgAAHABQgMABgGADQgGAEAAAIQAAAFAEAEQADADAHAAQAJAAAGgFQAGgHAAgKIAAgHg");
	this.shape_53.setTransform(197.375,46.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgVAcQgJgJAAgTQAAgRAIgKQAJgKAOAAQAOgBAIAKQAIAJAAAPIAAAGIgyAAQAAANAHAHQAGAHAKgBQAMAAAMgEIAAAKIgLADIgNABQgPAAgKgKgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_54.setTransform(186.375,46.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAcQgJgJAAgTQAAgRAIgKQAJgKAOAAQAOgBAIAKQAIAJAAAPIAAAGIgyAAQAAANAHAHQAGAHAKgBQAMAAAMgEIAAAKIgLADIgNABQgPAAgKgKgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_55.setTransform(178.625,46.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AghA0IAAgJIAJABQALAAAFgNIAEgKIgehKIAMAAIARAqIAFAUIABAAIAEgKIASg0IAMAAIggBUQgEAMgGAFQgGAGgKAAIgKgCg");
	this.shape_56.setTransform(171.225,47.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgRAiQgIgFgEgJQgEgIAAgMQAAgSAJgJQAJgLAPABQAPAAAKAKQAJAKAAARQAAASgJAKQgKALgPgBQgKAAgHgEgAgQgUQgGAGABAOQgBAOAGAIQAGAHAKAAQALAAAFgHQAGgIAAgOQAAgOgGgGQgFgIgLAAQgLAAgFAIg");
	this.shape_57.setTransform(163.6,46.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEA1IAAhpIAKAAIAABpg");
	this.shape_58.setTransform(157.65,44.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AggA3IAAhrIAJAAIACAKIAAAAQAFgGAFgDQAHgDAGABQAPgBAHALQAIAJAAATQAAARgIAKQgHAKgPAAQgGAAgHgDQgFgCgFgGIAAAAIAAANIAAAfgAgPglQgFAFgBAPIAAACQAAAPAGAHQAFAGALAAQAJAAAFgIQAGgHAAgOQAAgNgGgHQgFgIgJAAQgLAAgFAHg");
	this.shape_59.setTransform(151.85,47.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAqAmIAAgvQAAgJgEgFQgEgEgIAAQgKAAgFAGQgFAGAAAMIAAApIgLAAIAAgvQAAgJgDgFQgEgEgIAAQgLAAgFAGQgFAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAFgDAIAAQARAAAEANIABAAQADgGAGgDQAHgEAIAAQAMAAAHAHQAGAGAAAOIAAAwg");
	this.shape_60.setTransform(141.025,45.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgbAyIAAhiIA3AAIAAAKIgrAAIAAAfIAoAAIAAAKIgoAAIAAAkIArAAIAAALg");
	this.shape_61.setTransform(130.95,44.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_62.setTransform(120.7,44.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AghA0IAAgJIAJABQALAAAFgNIAEgKIgehKIAMAAIARAqIAFAUIABAAIAEgKIASg0IAMAAIggBUQgEAMgGAFQgGAGgKAAIgKgCg");
	this.shape_63.setTransform(183.275,30.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgEIAEgQIAGAAIAAARIAVAAIAAAJIgVAAIAAAqQAAAHADAEQADADAGAAIAGgBIAEgBIAAAKIgFABIgHAAQgVAAABgWg");
	this.shape_64.setTransform(177.35,27.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAzIAAhJIAJAAIAABJgAgDglQgCgCAAgDQAAgEACgCQAAgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQABACAAAEQAAADgBACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_65.setTransform(173.15,27.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEA1IAAhoIAJAAIAABog");
	this.shape_66.setTransform(169.65,27.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAzIAAhJIAJAAIAABJgAgEglQgBgCAAgDQAAgEABgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQACACAAAEQAAADgCACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_67.setTransform(166.15,27.375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgLAyQgFgCgFgGIAAAAIgDAKIgIAAIAAhoIALAAIAAAZIAAAQIAAAAQAJgMAOAAQAPAAAHAKQAIAKAAASQAAASgIAKQgHAKgPAAQgGAAgHgDgAgPgHQgFAHgBAPQAAAPAGAHQAFAHALAAQAKAAAFgIQAFgHAAgPQAAgOgFgGQgFgHgKAAQgLAAgFAGg");
	this.shape_68.setTransform(160.4,27.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAzIAAhJIAKAAIAABJgAgEglQgCgCAAgDQAAgEACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQACACABAEQgBADgCACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_69.setTransform(154.2,27.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAVAlIgVgeIgUAeIgNAAIAcglIgagkIANAAIASAdIAUgdIAMAAIgaAkIAcAlg");
	this.shape_70.setTransform(148.825,28.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgVAcQgJgKAAgRQAAgRAIgLQAJgKAOAAQAOAAAIAJQAIAJAAAPIAAAGIgyAAQAAANAHAHQAGAGAKAAQAMAAAMgEIAAAKIgLADIgNABQgPABgKgLgAATgGQAAgLgFgGQgEgFgJAAQgIAAgFAFQgGAHgBAKIAmAAIAAAAg");
	this.shape_71.setTransform(141.425,28.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgFA1IAAhoIAKAAIAABog");
	this.shape_72.setTransform(135.75,27.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgbAyIAAhiIA3AAIAAAKIgrAAIAAAkIAoAAIAAAJIgoAAIAAArg");
	this.shape_73.setTransform(130.95,27.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_74.setTransform(120.7,27.375);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgZAhIAAgKIAMAFIALABQAIAAAFgCQAFgEAAgFQAAgFgEgCQgEgEgKgEIgOgGQgFgDgCgDQgCgEAAgFQAAgJAHgFQAIgGAMAAQALABAMAFIgEAJQgLgFgJAAQgHAAgEADQgEACAAAFQAAADABABIAFAFIAMAFQANAEAFAEQAEAGAAAHQAAAKgHAFQgIAHgNAAQgPAAgIgGg");
	this.shape_75.setTransform(178.775,11.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQAAgSAIgKQAJgLAOAAQAOABAIAIQAIAKAAAPIAAAGIgyAAQAAANAHAHQAGAGAKABQAMAAAMgGIAAAKIgLAFIgNABQgPAAgKgKgAATgGQAAgLgFgGQgEgFgJAAQgIAAgFAFQgGAHgBAKIAmAAIAAAAg");
	this.shape_76.setTransform(171.625,11.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgZAhIAAgKIAMAFIALABQAIAAAFgCQAFgEAAgFQAAgFgEgCQgEgEgKgEIgOgGQgFgDgCgDQgCgEAAgFQAAgJAHgFQAIgGAMAAQALABAMAFIgEAJQgLgFgJAAQgHAAgEADQgEACAAAFQAAADABABIAFAFIAMAFQANAEAFAEQAEAGAAAHQAAAKgHAFQgIAHgNAAQgPAAgIgGg");
	this.shape_77.setTransform(164.425,11.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgXAfQgHgGAAgOIAAgwIALAAIAAAvQAAAJAFAFQADAEAKAAQAKAAAGgGQAFgHAAgOIAAgmIALAAIAABJIgJAAIgCgKIgBAAQgDAGgGADQgGADgHAAQgNAAgHgHg");
	this.shape_78.setTransform(156.85,11.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgFgFQgEgEgIAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIAAAAQAEgGAGgDQAGgDAHAAQANAAAHAHQAHAGAAAOIAAAwg");
	this.shape_79.setTransform(148.5,11.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgRAhQgIgEgEgIQgEgKAAgLQAAgSAJgJQAJgLAPAAQAQAAAIALQAKAKAAARQAAASgKAKQgIALgQAAQgJAAgIgGgAgQgVQgFAIgBANQABAOAFAHQAGAIAKAAQALAAAFgIQAGgHAAgOQAAgNgGgIQgFgHgLAAQgKAAgGAHg");
	this.shape_80.setTransform(140.05,11.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AghAxIAAhiIAcAAQASABAJAFQAJAGAAANQAAAJgFAGQgFAFgJACIAAABQAWADAAATQAAANgJAIQgJAIgQgBgAgWAnIAVAAQALABAGgFQAGgEAAgLQAAgJgGgEQgGgEgMgBIgUAAgAgWgGIATAAQALAAAGgEQAFgDAAgKQAAgIgGgDQgGgEgMgBIgRAAg");
	this.shape_81.setTransform(131.625,10.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_82.setTransform(120.7,10.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQAAgSAIgKQAJgLAOAAQAOABAIAIQAIAKAAAPIAAAGIgyAAQAAANAHAHQAGAHAKAAQAMgBAMgFIAAAKIgLAFIgNABQgPgBgKgJgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_83.setTransform(232.575,-5.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgRAdQgJgLAAgRQAAgSAJgLQAJgJAQgBIAKABIAJAEIgEAJIgIgDIgIgBQgVAAAAAdQAAANAFAHQAGAIAKAAQAJAAAKgFIAAAKQgIAFgLAAQgPgBgJgJg");
	this.shape_84.setTransform(225.525,-5.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAUAmIAAgvQAAgJgFgFQgDgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIAAAAQAEgGAGgDQAGgDAHAAQANAAAHAHQAHAGAAAOIAAAwg");
	this.shape_85.setTransform(217.9,-5.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgXAgQgGgFAAgLQAAgVAjgBIANAAIAAgFQAAgJgEgEQgEgEgIAAQgIAAgMAGIgEgJQAGgDAGgCQAHgCAGAAQANAAAGAHQAHAFAAANIAAAyIgJAAIgCgLIgBAAQgFAIgGACQgFACgHABQgLAAgHgHgAAHABQgMAAgGAEQgGAEAAAHQAAAHAEADQADADAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_86.setTransform(209.525,-5.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgUAmIAAhJIAJAAIABANIABAAQAEgHAFgEQAGgEAGAAIAJABIgBALIgIgCQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_87.setTransform(203.625,-5.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgXAfQgHgGAAgOIAAgwIALAAIAAAvQAAAJAFAFQADAEAJAAQALAAAGgGQAFgHAAgOIAAgmIALAAIAABJIgJAAIgCgKIgBAAQgDAGgGADQgGADgHAAQgNAAgHgHg");
	this.shape_88.setTransform(196,-5.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgZAhIAAgKIAMAFIALABQAIAAAFgDQAFgCAAgHQAAgEgEgCQgEgEgKgEIgOgGQgFgDgCgDQgCgEAAgFQAAgJAHgFQAIgFAMgBQALAAAMAGIgEAJQgLgFgJAAQgHAAgEADQgEACAAAEQAAAEABACIAFADIAMAGQANAEAFAEQAEAFAAAIQAAAKgHAFQgIAHgNAAQgPAAgIgGg");
	this.shape_89.setTransform(188.575,-5.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AATAmIAAgvQAAgJgDgFQgEgEgKAAQgKAAgFAGQgGAGAAAPIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAHgDAGAAQAOAAAGAHQAHAGAAAOIAAAwg");
	this.shape_90.setTransform(181.05,-5.925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgFAxIAAhiIALAAIAABig");
	this.shape_91.setTransform(174.825,-7.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AATA0IAAgvQAAgJgDgEQgFgFgJABQgKAAgGAGQgFAGAAAOIAAAmIgLAAIAAhoIALAAIAAAgIAAAJIABAAQACgEAHgEQAGgDAGAAQAPAAAGAGQAHAHAAANIAAAwg");
	this.shape_92.setTransform(165.2,-7.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAXIAAgrIgKAAIAAgFIAKgFIAGgQIAFAAIAAASIAWAAIAAAIIgWAAIAAArQAAAHADADQAEAEAFAAIAFAAIAFgBIAAAJIgGABIgGABQgUAAgBgYg");
	this.shape_93.setTransform(158.4,-6.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgEA0IAAhoIAKAAIAABog");
	this.shape_94.setTransform(154.25,-7.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgXAgQgGgFAAgLQAAgVAjgBIANAAIAAgFQAAgJgEgEQgEgEgIAAQgIAAgMAGIgEgJQAGgDAGgCQAHgCAGAAQANAAAGAHQAHAFAAANIAAAyIgJAAIgCgLIgBAAQgFAIgGACQgFACgHABQgLAAgHgHgAAHABQgMAAgGAEQgGAEAAAHQAAAHAEADQADADAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_95.setTransform(148.425,-5.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgVAdQgJgLAAgRQAAgSAIgKQAJgLAOAAQAOABAIAIQAIAKAAAPIAAAGIgyAAQAAANAHAHQAGAHAKAAQAMgBAMgFIAAAKIgLAFIgNABQgPgBgKgJgAATgGQAAgLgFgFQgEgGgJAAQgIAAgFAGQgGAFgBALIAmAAIAAAAg");
	this.shape_96.setTransform(140.975,-5.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAaAxIAAguIgzAAIAAAuIgMAAIAAhiIAMAAIAAArIAzAAIAAgrIAMAAIAABig");
	this.shape_97.setTransform(131.95,-7.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKANQgEgFAAgIQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAIgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_98.setTransform(120.7,-7.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(116.6,-18.5,399.9,73.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPBWQgFgGAAgKQAAgKAFgFQAGgGAJAAQAKAAAGAGQAFAFAAAKQAAAKgFAGQgGAFgKAAQgJAAgGgFgAgOAcIgGh2IApAAIgGB2g");
	this.shape.setTransform(92.475,55.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BaQgPgKAAgSQAAgMAIgJQAIgIAOgEQgFgCgEgFQgEgGgBgGQAAgIAFgEQAFgGAIgFQgLgEgGgLQgGgKAAgOQAAgWAOgMQAPgNAbAAIANABIAKACIAvAAIAAATIgVAFQAGAKgBALQABAWgPAMQgQANgaAAIgHgBIgGAAQgFAEAAAEQgBAIAVAAIAXAAQAWAAAMAKQAMAKAAATQgBAYgTANQgVANgkAAQgcAAgQgKgAgcAuQgIAFAAAIQAAAIAIAEQAHAFANAAQAUAAALgGQALgFAAgKQAAgIgGgDQgHgDgOAAIgSAAQgKAAgHAFgAgWgzQAAALAFAGQAGAHAKAAQAKAAAEgHQAFgGAAgLQAAgZgTAAQgVAAAAAZg");
	this.shape_1.setTransform(81.7,60.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBGIAAhPQAAgPgFgHQgGgIgLAAQgPAAgHALQgHAKAAAXIAABBIglAAIAAiIIAcAAIAFARIACAAQAHgKALgFQAKgFAOAAQAXAAANANQAMANAAAYIAABZg");
	this.shape_2.setTransform(66.575,57.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBfIAAiIIAlAAIAACIgAgThMQAAgSATAAQAUAAAAASQAAAJgFAFQgFAEgKAAQgTAAAAgSg");
	this.shape_3.setTransform(54.575,54.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBGIAAiIIAdAAIAFAXIACAAQAHgMAJgHQAMgHAMAAIAMABIgCAjIgLgBQgSAAgKAJQgJAKAAAPIAABGg");
	this.shape_4.setTransform(45.8,57.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBfIAAiIIAlAAIAACIgAgThMQAAgSATAAQAUAAAAASQAAAJgFAFQgFAEgKAAQgTAAAAgSg");
	this.shape_5.setTransform(35.625,54.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBZIAAhNIhGAAIAABNIgmAAIAAixIAmAAIAABFIBGAAIAAhFIAlAAIAACxg");
	this.shape_6.setTransform(22.225,55.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBEIgLgwIgOg7IAAAAIgZBrIgoAAIgniIIAlAAIAQA9QAEAQAEAcIABAAIAEgdIACgKIARhCIAoAAIAQBCIACAHIACAMIABALIABAJIABAAIAEgYIAEgUIAQg9IAlAAIgnCIg");
	this.shape_7.setTransform(59.225,31.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA/QgPgKgIgPQgIgQAAgWQAAggARgTQASgTAeAAQAUAAAPAJQAPAIAIAQQAIARAAAUQAAAhgRATQgSATgfAAQgTAAgPgIgAgVgeQgGALAAATQAAAUAGAKQAHALAOAAQAPAAAHgLQAGgJAAgVQAAgTgHgLQgGgKgPAAQgOAAgHAKg");
	this.shape_8.setTransform(40.775,31.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBZIhNiGIgBAAIACAzIAABTIghAAIAAiyIAwAAIBMCFIABAAIgCgwIAAhVIAiAAIAACyg");
	this.shape_9.setTransform(22.85,29.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(10,8.7,88.9,65.6), null);


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
	this.instance.setTransform(1457,-357,1.21,1.21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(1457,-357,401.70000000000005,88.39999999999998), null);


(lib.Line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AAAjvIAAHf");
	this.shape.setTransform(750.75,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(749.8,-174.5,2,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgWB+QgJgIAAgPQABgPAHgHQAJgIAPAAQAOAAAIAIQAJAIgBAOQABAPgJAIQgIAIgOAAQgPAAgIgIgAgVAqIgJivIA9AAIgJCvg");
	this.shape.setTransform(404.75,34.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBzQgUgcAAgxQAAgxAVgbQAUgbAkAAQAlAAAUAdIACAAQgEgWAAgTIAAhAIA3AAIAAEXIgqAAIgLgaIgCAAQgTAeglAAQgkAAgUgbgAgbgGQgLAPAAAeQAAAdALAPQAKAPASABQAVAAAKgNQAKgMABgdIAAgHQAAgggKgNQgKgOgXAAQgRAAgKAPg");
	this.shape_1.setTransform(387.275,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABOQgcgbAAgyQAAgxAagcQAZgbAsAAQAqAAAYAYQAYAYAAArIAAAaIiBAAQABAXANANQANANAWAAQASAAARgDQAQgEASgIIAAAqQgPAHgQAEQgRADgXAAQgwAAgbgagAApgWQAAgUgKgLQgLgLgRAAQgQAAgKALQgKALgCAUIBMAAIAAAAg");
	this.shape_2.setTransform(365.375,37.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBzQgUgcAAgxQAAgxAVgbQAUgbAkAAQAlAAAUAdIACAAQgEgWAAgTIAAhAIA3AAIAAEXIgqAAIgLgaIgCAAQgTAeglAAQgkAAgUgbgAgbgGQgLAPAAAeQAAAdALAPQAKAPASABQAVAAAKgNQAKgMABgdIAAgHQAAgggKgNQgKgOgXAAQgRAAgKAPg");
	this.shape_3.setTransform(342.225,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhABOQgcgbAAgyQAAgxAagcQAZgbAsAAQAqAAAYAYQAYAYAAArIAAAaIiBAAQABAXANANQANANAWAAQASAAARgDQAQgEASgIIAAAqQgPAHgQAEQgRADgXAAQgwAAgbgagAApgWQAAgUgKgLQgLgLgRAAQgQAAgKALQgKALgCAUIBMAAIAAAAg");
	this.shape_4.setTransform(320.275,37.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABOQgcgbAAgyQAAgxAagcQAZgbAsAAQAqAAAYAYQAYAYAAArIAAAaIiBAAQABAXANANQANANAWAAQASAAARgDQAQgEASgIIAAAqQgPAHgQAEQgRADgXAAQgwAAgbgagAApgWQAAgUgKgLQgLgLgRAAQgQAAgKALQgKALgCAUIBMAAIAAAAg");
	this.shape_5.setTransform(298.525,37.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuCEIhyjGIgCAAIAEBKIAAB8IgyAAIAAkHIBHAAIBxDFIABAAIgDhIIAAh9IAzAAIAAEHg");
	this.shape_6.setTransform(272.65,34.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBlQgQgDgNgFIAAguQAPAHAUAFQATAFAOAAQAdAAAAgRQAAgHgEgEQgEgEgJgFIgZgMQgXgKgLgHQgLgIgGgLQgEgLAAgPQgBgbAWgPQAUgOAmAAQAkAAAiAPIgQAoIgdgLQgNgEgOAAQgXAAAAANQAAAIAIAFQAIAGAZAKQAYAKALAIQALAHAFALQAGALAAAPQgBAfgVAQQgWAQgqAAQgVAAgQgDg");
	this.shape_7.setTransform(239.1,37.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBmIAAjIIAqAAIAIAiIADAAQAJgRAPgKQAQgLASABIAUABIgFAzIgQgCQgbAAgOAOQgOAOAAAXIAABmg");
	this.shape_8.setTransform(222.55,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABOQgcgbAAgyQAAgxAagcQAZgbAsAAQAqAAAYAYQAYAYAAArIAAAaIiBAAQABAXANANQANANAWAAQASAAARgDQAQgEASgIIAAAqQgPAHgQAEQgRADgXAAQgwAAgbgagAApgWQAAgUgKgLQgLgLgRAAQgQAAgKALQgKALgCAUIBMAAIAAAAg");
	this.shape_9.setTransform(202.225,37.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcBlIhMjJIA5AAIAoByQAGAWABATIABAAQABgRAGgYIAohyIA5AAIhNDJg");
	this.shape_10.setTransform(180.9,37.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaCMIAAjIIA2AAIAADIgAgdhwQAAgbAdAAQAeAAAAAbQAAANgIAHQgHAHgPAAQgdAAAAgbg");
	this.shape_11.setTransform(164.8,33.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhOCEQgWgOgBgbQAAgSAMgMQAMgNAVgFQgIgDgGgJQgHgIAAgJQAAgMAHgGQAHgIAMgHQgQgHgJgPQgKgPAAgVQAAghAWgSQAVgSAoAAIATACIAPACIBHAAIAAAcIggAIQAJANgBARQAAAhgWASQgWASgnAAIgKgBIgIgBQgJAHAAAHQAAAMAeAAIAhAAQAiAAARAOQASAOAAAcQAAAjgeATQgdAUg3AAQgqAAgWgPgAgqBEQgLAHAAAMQAAALALAHQALAGATAAQAdAAARgIQAQgIAAgOQABgMgLgEQgJgEgVAAIgbAAQgQAAgJAHgAghhMQAAAQAIAKQAHAJAPAAQAPAAAHgJQAIgKAAgQQgBglgdAAQgeAAAAAlg");
	this.shape_12.setTransform(148.6,41.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhABOQgcgbAAgyQAAgxAagcQAZgbAsAAQAqAAAYAYQAYAYAAArIAAAaIiBAAQABAXANANQANANAWAAQASAAARgDQAQgEASgIIAAAqQgPAHgQAEQgRADgXAAQgwAAgbgagAApgWQAAgUgKgLQgLgLgRAAQgQAAgKALQgKALgCAUIBMAAIAAAAg");
	this.shape_13.setTransform(127.475,37.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhBBmIAAjIIAqAAIAIAiIADAAQAJgRAPgKQAQgLATABIATABIgFAzIgQgCQgaAAgPAOQgOAOAAAXIAABmg");
	this.shape_14.setTransform(109.35,37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIBYQgRgQAAgfQAAggAXgOQAWgPAsgCIAjgBIAAgJQAAgfgfAAQgXAAghAPIgSglQAjgSApgBQApAAAVASQAWASAAAkIAACFIgnAAIgKgbIgCAAQgNARgPAHQgOAGgXAAQgdAAgRgQgAAOAJQgXAAgMAIQgLAIAAAQQAAAXAaABQASgBAMgKQALgLAAgTIAAgRg");
	this.shape_15.setTransform(88.175,37.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFBlQgegjAAhCQAAgoAPgeQAPgfAcgRQAcgQAkAAQAnAAAmASIgSAuIgdgNQgPgFgPAAQgeAAgSAYQgRAXAAAqQAABYBBAAQAcAAAngOIAAAvQggANgoAAQg4AAgfgig");
	this.shape_16.setTransform(66.375,34.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhDCCQgVgOAAgaQAAgUANgNQAMgNAWgGQgJgDgFgHQgGgHAAgJQAAgSAZgQQgRgGgJgPQgKgQAAgTQAAgeATgRQASgSAgAAQASAAALADIA/AAIAAANIgpACQAQAVAAAYQAAAcgSASQgTARgfAAIgTAAQgKAFgGAHQgFAHAAAIQAAAKAHAEQAHAEARAAIAhAAQAgABARANQARAMAAAaQAAAfgZAQQgaARgtAAQglAAgUgOgAhFBZQAAAoA8AAQBMAAAAgxQAAgSgMgIQgMgHgbgBIgfAAQg2ABAAAqgAgoh0QgOAOAAAYQAAAWAOANQAOAMAXAAQAXAAANgMQANgNAAgXQAAgZgNgMQgNgNgYAAQgXAAgNANg");
	this.shape_17.setTransform(441.925,7.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA7BkIAAh+QABgegNgNQgNgOgaAAQgiAAgQASQgQASAAAoIAABrIgSAAIAAjDIAPAAIAEAbIABAAQASgfAxAAQBCAAAABIIAAB/g");
	this.shape_18.setTransform(421.55,3.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgICGIAAjDIAQAAIAADDgAgKhzQgBgSALAAQAFAAADAFQADAEAAAJQAAAIgDAEQgDAFgFAAQgLAAABgRg");
	this.shape_19.setTransform(406.5,-0.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIBiIhMjDIATAAIAyCFQAKAZAFATIAAAAIAQgtIAyiEIATAAIhMDDg");
	this.shape_20.setTransform(393.925,3.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgICGIAAjDIAQAAIAADDgAgKhzQgBgSALAAQAFAAADAFQADAEABAJQgBAIgDAEQgDAFgFAAQgLAAABgRg");
	this.shape_21.setTransform(381.4,-0.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhHCEIAAkHIASAAIAAD1IB9AAIAAASg");
	this.shape_22.setTransform(369.225,-0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag8B1QgVgaAAgvQgBgyAWgbQAVgbAoAAQAUAAAQAIQAPAHANATIABAAIgBgsIAAhHIASAAIAAEXIgMAAIgFgdIgBAAQgWAhgqAAQgoAAgVgZgAgvgWQgQAWAAArQAABTBAABQAhAAAPgUQAQgTAAgsIAAgEQAAgsgPgUQgQgUghAAQgfAAgRAWg");
	this.shape_23.setTransform(337.25,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag3BLQgYgaAAgvQAAguAXgcQAXgdAmAAQAjAAAUAYQAUAZAAApIAAAOIiMAAQAAAoATAVQASAWAigBQAQABANgDQANgCATgIIAAAQQgQAIgOACQgOACgRABQgqAAgYgbgAA9gNQAAghgPgUQgOgSgbgBQgbAAgRATQgRATgDAiIB4AAIAAAAg");
	this.shape_24.setTransform(316.775,3.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMBtQgNgNAAgeIAAh+IgdAAIAAgKIAdgIIAJgsIAJAAIAAAvIA5AAIAAAPIg5AAIAAB7QAAAXAHALQAIALARAAQARAAANgDIAAAOQgNAEgRAAQgZAAgMgOg");
	this.shape_25.setTransform(300.275,1.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhEBaIAAgTQAdAOAhAAQAcAAAPgKQAPgJAAgRQAAgOgMgKQgMgKgcgKQgbgKgMgHQgNgIgFgKQgHgJAAgOQAAgWATgNQATgNAgAAQAfAAAdANIgHAQQgdgMgYgBQgYABgNAHQgOAJgBAOQABAPAKAJQALAJAfAMQAbAJALAHQANAIAGAJQAFAKAAANQAAAagTAOQgVAOgjABQgoAAgWgMg");
	this.shape_26.setTransform(285.65,3.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgICGIAAjDIAQAAIAADDgAgLhzQABgSAKAAQAFAAADAFQAEAEAAAJQAAAIgEAEQgDAFgFAAQgKAAgBgRg");
	this.shape_27.setTransform(273.15,-0.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhEBaIAAgTQAdAOAhAAQAcAAAPgKQAPgJAAgRQAAgOgMgKQgMgKgbgKQgcgKgNgHQgLgIgHgKQgFgJAAgOQAAgWASgNQASgNAgAAQAhAAAcANIgHAQQgdgMgZgBQgWABgPAHQgNAJAAAOQAAAPALAJQALAJAeAMQAbAJAMAHQAMAIAGAJQAGAKgBANQABAagVAOQgTAOgkABQgnAAgXgMg");
	this.shape_28.setTransform(260.3,3.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhFBaIAAgTQAeAOAhAAQAcAAAPgKQAPgJAAgRQAAgOgMgKQgMgKgcgKQgbgKgMgHQgNgIgFgKQgHgJABgOQgBgWATgNQASgNAhAAQAfAAAcANIgGAQQgdgMgYgBQgXABgOAHQgOAJAAAOQgBAPALAJQAMAJAeAMQAaAJAMAHQAMAIAHAJQAFAKABANQgBAagTAOQgUAOgkABQgnAAgYgMg");
	this.shape_29.setTransform(243.15,3.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABaCEIglhdIhqAAIgkBdIgVAAIBqkHIALAAIBoEHgAAvAXIgkheIgKgfIgKAfIglBeIBdAAg");
	this.shape_30.setTransform(223.625,-0.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag3BLQgYgaAAgvQAAguAXgcQAXgdAmAAQAjAAAUAYQAUAZAAApIAAAOIiMAAQAAAoATAVQASAWAigBQAQABANgDQANgCATgIIAAAQQgQAIgOACQgOACgRABQgqAAgYgbgAA9gNQAAghgPgUQgOgSgbgBQgbAAgRATQgRATgDAiIB4AAIAAAAg");
	this.shape_31.setTransform(192.925,3.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABxBkIAAiAQAAgcgLgNQgLgOgXAAQgeAAgPARQgOARAAAjIAAByIgRAAIAAiFQAAgygtAAQggAAgNASQgOASgBAoIAABrIgRAAIAAjDIAPAAIADAbIABAAQAJgPAPgIQAOgIATAAQAuAAAMAjIAAAAQAKgRAQgJQAQgJAVAAQAgAAAQARQAQARAAAmIAAB/g");
	this.shape_32.setTransform(166.7,3.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgICGIAAjDIAQAAIAADDgAgLhzQABgSAKAAQAFAAADAFQAEAEAAAJQAAAIgEAEQgDAFgFAAQgKAAgBgRg");
	this.shape_33.setTransform(146.25,-0.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgICEIAAj1IhWAAIAAgSIC9AAIAAASIhWAAIAAD1g");
	this.shape_34.setTransform(132.375,-0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgqAIIAAgPIBVAAIAAAPg");
	this.shape_35.setTransform(116.775,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgICMIAAkXIARAAIAAEXg");
	this.shape_36.setTransform(106.775,-0.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgICMIAAkXIARAAIAAEXg");
	this.shape_37.setTransform(98.525,-0.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhMAcIAAh/IASAAIAAB+QAAAeAMANQAMAOAbAAQAhAAARgSQAQgSAAgnIAAhsIASAAIAADDIgPAAIgDgbIgBAAQgTAfgwAAQhDAAAAhIg");
	this.shape_38.setTransform(83.425,3.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhHCEIAAkHICPAAIAAARIh9AAIAABwIB2AAIAAAQIh2AAIAAB2g");
	this.shape_39.setTransform(65.15,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(50.7,-29.7,404.7,91.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAPAqIgHgeIgIgkIAAAAIgPBCIgYAAIgZhTIAYAAIAJAlIAFAbIADgSIABgGIAKgoIAZAAIAKAoIAAAEIACAHIABAHIAAAGIABAAIADgPIACgMIAKglIAXAAIgZBTg");
	this.shape.setTransform(796.05,-141.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAmQgJgFgFgKQgFgKAAgNQAAgUALgLQALgMASAAQAMAAAJAGQAKAFAFAJQAFALAAAMQAAAUgLAMQgLAMgTAAQgLgBgKgFgAgMgSQgEAHAAALQAAAMAEAGQAEAHAIAAQAJAAAEgGQAEgHAAgMQAAgLgEgHQgEgGgJAAQgIAAgEAGg");
	this.shape_1.setTransform(784.675,-141.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA3IgvhSIgBAAIACAfIAAAzIgVAAIAAhtIAdAAIAvBSIABAAIgBgeIAAg0IAVAAIAABtg");
	this.shape_2.setTransform(773.725,-142.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA7IAAgSIAJABQAGAAAEgDQAFgFACgHIACgEIgihSIAZAAIAQAvIACANQABgHADgGIAPgvIAZAAIgkBdQgFANgIAHQgJAGgMAAQgGAAgFgBg");
	this.shape_3.setTransform(802.375,-158.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA7IAAh0IAXAAIAAB0g");
	this.shape_4.setTransform(795.7,-161.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA9IAAh4IASAAIAEALIABAAQAIgMAPAAQAOAAAJALQAIAMAAAUQAAAOgEAIQgEAKgHAGQgHAFgKAAQgOAAgIgLIgBAAIABAMIAAAigAgLglQgEAFAAAMIAAADQAAANAEAFQAEAGAHAAQAQAAAAgYQAAgNgEgGQgEgGgIAAQgHAAgEAFg");
	this.shape_5.setTransform(788.725,-158.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA9IAAh4IASAAIAEALIABAAQAIgMAPAAQAOAAAJALQAIAMAAAUQAAAOgEAIQgEAKgHAGQgHAFgKAAQgOAAgIgLIgBAAIABAMIAAAigAgLglQgEAFAAAMIAAADQAAANAEAFQAEAGAHAAQAQAAAAgYQAAgNgEgGQgEgGgIAAQgHAAgEAFg");
	this.shape_6.setTransform(778.975,-158.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcA3IgIgaIgnAAIgIAaIgZAAIAnhtIAcAAIAmBtgAAPAKIgNgoIgCgHIgNAvIAcAAg");
	this.shape_7.setTransform(768.55,-161.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AlJENIAAoaIKTAAIAAIag");
	this.shape_8.setTransform(785,-152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(752,-179.4,66,53.900000000000006), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,0,1024,90), null);


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
	this.ad_clickBtn.setTransform(512,45,3.4133,0.36,0,0,0,150,125);
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
	this.instance_1.setTransform(53.55,46,1,1,0,0,0,53.5,43.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:63.55,alpha:1},9).wait(92));

	// Cta
	this.instance_2 = new lib.Cta();
	this.instance_2.setTransform(254.5,216.05,1,1,0,0,0,47.5,17.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({x:239.5,alpha:1},9,cjs.Ease.get(1)).wait(175));

	// Line
	this.instance_3 = new lib.Line();
	this.instance_3.setTransform(180.55,216.85,1,1,0,0,0,0,20.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(184));

	// Hdr
	this.instance_4 = new lib.Hdr();
	this.instance_4.setTransform(52.25,91.3,1,1,0,0,0,57.2,64);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:67.25,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(101));

	// Logo
	this.instance_5 = new lib.Logo_1();
	this.instance_5.setTransform(77.9,217.2,0.4894,0.4894,0,0,0,166.2,36.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:92.9,alpha:1},9,cjs.Ease.get(1)).wait(202));

	// Bg
	this.instance_6 = new lib.Bg_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9,cjs.Ease.get(1)).wait(211));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,1025,92.4);


// stage content:
(lib.WBAY_218223_MM_1024x90_V1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(512.0027,45.0007,1.4072,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/AHCIAAuDMCf/AAAIAAODg");
	mask.setTransform(511.994,44.9963);

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
	this.instance.setTransform(512,18.75,3.4133,0.15,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511.5,44.5,513,46);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 1024,
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