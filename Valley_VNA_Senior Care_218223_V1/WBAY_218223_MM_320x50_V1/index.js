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
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAVQgHgIAAgNQAAgMAHgIQAGgHALAAQAMAAAHAHQAGAIAAAMQAAANgGAHQgHAJgMgBQgLAAgGgHgAgNgQQgEAGAAAKQAAALAEAGQAFAGAIAAQAJAAAFgGQAFgGAAgLQAAgKgFgGQgFgGgJABQgIgBgFAGg");
	this.shape.setTransform(210.525,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAbIAAgwIgSAAIAAgFIApAAIAAAFIgSAAIAAAwg");
	this.shape_1.setTransform(205.425,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAPAAQAUAAAAAQQAAAIgHADQgFAFgJAAIgHAAIAAAVgAgKAAIAFAAQAIAAAEgBQAEgDAAgGQAAgFgEgDQgDgDgHAAIgHAAg");
	this.shape_2.setTransform(201.2,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAHQgCgCAAgFQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(195.3,6.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAdIAAgaQAAgEgCgDQgDgCgEAAQgGAAgDADQgDADAAAIIAAAVIgGAAIAAg5IAGAAIAAARIAAAGIAAAAQACgDADgCQAEgCADAAQAIAAAEAEQADAEAAAGIAAAbg");
	this.shape_4.setTransform(290.125,-2.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgFAIgBIAGABIAFABIgCAGIgFgBIgEgBQgLAAAAAPQAAAHADAFQADAEAFAAQAFAAAFgCIAAAFQgEACgGABQgIgBgFgFg");
	this.shape_5.setTransform(285.975,-1.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_6.setTransform(282.725,-1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMASQgEgDABgGQAAgMATAAIAHAAIAAgCQAAgFgCgDQgDgCgEAAQgFAAgGADIgCgFIAHgDIAGgBQAHABAEADQADADAAAIIAAAbIgEAAIgBgGQgDADgEACQgDABgEABQgFgBgEgDgAgFADQgEACAAAEQAAADACADQACABAEAAQAFAAADgDQADgDABgGIAAgEIgHAAQgHABgCACg");
	this.shape_7.setTransform(279.1,-1.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXAVIAAgaQAAgFgCgCQgCgCgEgBQgHAAgCADQgDAEAAAHIAAAWIgFAAIAAgaQAAgFgDgCQgCgCgEgBQgFABgDADQgDADAAAIIAAAVIgGAAIAAgoIAEAAIABAFIABAAQACgDADgBQADgCAEAAQAKAAACAHQACgDAEgCQADgCAFAAQAGAAAEAEQAEADgBAIIAAAag");
	this.shape_8.setTransform(273.55,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_9.setTransform(266.075,-0.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgEgCgDQgDgCgEgBQgGABgDADQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgDAEgBQADgCADAAQAIAAAEAEQADADAAAIIAAAag");
	this.shape_10.setTransform(261.825,-1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMASQgEgDAAgGQAAgMAUAAIAGAAIAAgCQAAgFgCgDQgBgCgGAAQgEAAgGADIgCgFIAHgDIAGgBQAIABADADQADADAAAIIAAAbIgEAAIgCgGQgDADgCACQgEABgDABQgGgBgEgDgAgFADQgEACAAAEQAAADACADQACABAEAAQAEAAAEgDQADgDAAgGIAAgEIgGAAQgGABgDACg");
	this.shape_11.setTransform(257.2,-1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_12.setTransform(252.975,-0.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAVIAAgaQAAgFgCgCQgCgCgEgBQgGAAgDADQgDAEAAAHIAAAWIgFAAIAAgaQAAgFgCgCQgCgCgFgBQgGABgDADQgCADAAAIIAAAVIgHAAIAAgoIAGAAIABAFIAAAAQACgDADgBQADgCAEAAQAKAAACAHQACgDADgCQAEgCAEAAQAIAAADAEQAEADAAAIIAAAag");
	this.shape_13.setTransform(246.95,-1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgGQAFgFAIgBQAJAAAFAHQAFAFAAAJQAAAKgFAFQgFAHgJAAQgFAAgEgEgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_14.setTransform(241.025,-1.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgFAIgBIAGABIAFABIgCAGIgFgBIgEgBQgLAAAAAPQAAAHADAFQADAEAFAAQAFAAAFgCIAAAFQgEACgGABQgIgBgFgFg");
	this.shape_15.setTransform(236.975,-1.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAdIAAgaQAAgEgCgDQgDgCgEAAQgGAAgDADQgDADAAAIIAAAVIgGAAIAAg5IAGAAIAAARIAAAGIAAAAQACgDADgCQAEgCADAAQAIAAAEAEQADAEAAAGIAAAbg");
	this.shape_16.setTransform(230.775,-2.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_17.setTransform(227.025,-1.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_18.setTransform(224.775,-2.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAVIgIgYIgCgJIAAAAIgCAJIgHAYIgIAAIgLgpIAGAAIAHAXIACALIABgGIACgFIAHgXIAGAAIAIAXIACALIABAAIAAgFIAIgdIAHAAIgLApg");
	this.shape_19.setTransform(220.8,-1.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAJAdIgOgTIgEAEIAAAPIgHAAIAAg5IAHAAIAAAeIAAAGIAAAAIAEgGIANgNIAIAAIgQARIARAXg");
	this.shape_20.setTransform(214.15,-2.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEAcIAAgnIAAgJIgBACIgIAHIgEgEIAOgLIAFAAIAAA2g");
	this.shape_21.setTransform(209.15,-2.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAVQgEgHAAgOQAAgNAEgIQAFgGAIgBQAJAAAEAIQAFAHAAANQAAAOgFAHQgEAIgJAAQgIAAgFgIgAgIgQQgDAFAAALQAAAMADAGQADAFAFAAQAGAAADgFQADgGAAgMQAAgLgDgFQgDgGgGAAQgFAAgDAGg");
	this.shape_22.setTransform(205.3,-2.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAcIAAgNIgaAAIAAgFIAZgkIAHAAIAAAjIAJAAIAAAGIgJAAIAAANgAADgOIgQAXIATAAIAAgRIAAgMg");
	this.shape_23.setTransform(200.9,-2.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAHQgCgCAAgFQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_24.setTransform(195.3,-2.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_25.setTransform(238.425,-9.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQAAgLASgBIAIAAIAAgCQAAgFgCgDQgCgCgFAAQgEAAgHADIgCgFIAHgDIAGgBQAHABAEADQAEADAAAIIAAAbIgFAAIgBgHQgEAEgDACQgDABgEABQgFgBgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAEAAAEgDQADgDABgGIAAgDIgHAAQgHAAgCACg");
	this.shape_26.setTransform(234.2,-10.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAPAAQAUAAgBAPQABAJgHAEQgFAEgJAAIgHAAIAAAWgAgKABIAGAAQAHAAAEgDQAEgCAAgGQAAgFgEgDQgDgDgHAAIgHAAg");
	this.shape_27.setTransform(230.1,-11.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_28.setTransform(223.725,-9.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQgBgLAUgBIAHAAIAAgCQgBgFgCgDQgCgCgEAAQgFAAgGADIgCgFIAHgDIAGgBQAIABADADQAEADgBAIIAAAbIgEAAIgBgHQgEAEgCACQgEABgDABQgGgBgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAEAAAEgDQAEgDAAgGIAAgDIgHAAQgGAAgDACg");
	this.shape_29.setTransform(219.5,-10.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAYQgEgGAAgKQAAgJAEgGQAFgFAIAAQAIAAADAGIABAAIAAgDIAAgDIAAgRIAGAAIAAA6IgFAAIgBgGQgFAHgHAAQgIAAgFgGgAgIgDQgCAEAAAHQAAAIACAEQADAEAFAAQAGAAADgDQADgEAAgHIAAgCQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(215.05,-11.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_31.setTransform(211.875,-11.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_32.setTransform(209.925,-11.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJATQgEgDgDgFQgCgFAAgGQAAgJAFgGQAFgFAIgBQAJAAAFAHQAFAFAAAJQAAAKgFAFQgFAHgJAAQgFAAgEgDgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_33.setTransform(206.675,-10.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAPAcIAAgaIgdAAIAAAaIgGAAIAAg2IAGAAIAAAXIAdAAIAAgXIAGAAIAAA2g");
	this.shape_34.setTransform(201.55,-11.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgFAHQgCgCAAgFQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_35.setTransform(195.3,-11.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNATIAAgGIAGACIAGABQAEAAADgCQADgBgBgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgHgDIgIgDIgDgEIgBgEQAAgGADgCQAEgDAHgBQAGABAHADIgCAEQgGgCgGAAIgFABQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABADIADACIAGADQAIACACACQACADABAFQAAAFgFADQgEAEgHgBQgIAAgEgCg");
	this.shape_36.setTransform(181.6,12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_37.setTransform(178.375,11.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AALAVIAAgZQAAgFgCgDQgDgCgEAAQgGAAgDADQgDAEAAAHIAAAVIgGAAIAAgoIAFAAIABAGIAAAAQACgEAEgBQADgCADAAQAIAAAEADQADAFAAAHIAAAag");
	this.shape_38.setTransform(174.725,11.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIgBQAHABAFAFQAEAFAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_39.setTransform(170.225,12);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAUIgPgnIAGAAIAJAWIADAMIAAAAIADgIIAKgaIAGAAIgPAng");
	this.shape_40.setTransform(166.125,12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIgBQAHABAFAFQAEAFAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_41.setTransform(162.075,12);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAVIAAgZQAAgFgCgDQgDgCgEAAQgGAAgDADQgDAEAAAHIAAAVIgGAAIAAgoIAFAAIABAGIAAAAQACgEAEgBQADgCADAAQAIAAAEADQADAFAAAHIAAAag");
	this.shape_42.setTransform(155.625,11.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJATQgEgDgDgFQgCgFAAgGQAAgJAFgGQAFgGAIAAQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAFgJAAQgFAAgEgCgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_43.setTransform(150.975,12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_44.setTransform(147.675,11.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_45.setTransform(145.325,11.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMASQgEgDABgGQgBgMAUAAIAHAAIAAgDQAAgEgDgDQgCgCgEAAQgFAAgGADIgCgFIAHgCIAGgCQAIAAADAEQAEADgBAHIAAAbIgEAAIgBgGQgEAEgDACQgDACgEgBQgFABgEgEgAgFADQgEACAAAEQAAAEACABQACACAEAAQAFAAADgDQAEgDAAgGIAAgDIgHAAQgGAAgDACg");
	this.shape_46.setTransform(141.75,12);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_47.setTransform(138.775,11.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgGAIAAIAGABIAFACIgCAFIgFgCIgEAAQgLAAAAAPQAAAIADADQADAFAFAAQAFAAAFgDIAAAGQgEADgGgBQgIABgFgGg");
	this.shape_48.setTransform(136.075,12);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIgBQAHABAFAFQAEAFAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_49.setTransform(132.025,12);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgLAVIAAgoIAGAAIAAAIIABAAQACgEACgDQADgCAEAAIAFABIgBAGIgFgBQgEgBgDAFQgEAEABAGIAAAVg");
	this.shape_50.setTransform(128.6,11.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_51.setTransform(124.525,12.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_52.setTransform(119.825,12.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQgBgMAUAAIAHAAIAAgDQgBgEgCgDQgCgCgEAAQgFAAgGADIgCgFIAHgCIAGgCQAIAAADAEQAEADgBAHIAAAbIgEAAIgBgGQgEAEgCACQgEACgDgBQgGABgEgEgAgFADQgEACAAAEQAAAEACABQACACAEAAQAEAAAEgDQAEgDAAgGIAAgDIgHAAQgGAAgDACg");
	this.shape_53.setTransform(115.1,12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIgBQAHABAFAFQAEAFAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_54.setTransform(108.975,12);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIgBQAHABAFAFQAEAFAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_55.setTransform(104.675,12);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_56.setTransform(100.575,12.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJATQgEgDgDgFQgCgFAAgGQAAgJAFgGQAFgGAIAAQAJABAFAFQAFAGAAAJQAAAKgFAGQgFAFgJAAQgFAAgEgCgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_57.setTransform(96.375,12);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_58.setTransform(93.075,11.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_59.setTransform(89.875,12.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAXAVIAAgaQAAgEgCgDQgCgCgEAAQgGAAgDADQgDADAAAHIAAAWIgFAAIAAgaQAAgEgCgDQgDgCgEAAQgFAAgDADQgDAEAAAHIAAAVIgGAAIAAgoIAEAAIACAGIAAAAQACgEADgBQADgCAEAAQAKAAACAHQACgDADgCQAEgCAFAAQAGAAAEADQADAFAAAHIAAAag");
	this.shape_60.setTransform(83.85,11.95);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAbIAAg1IAdAAIAAAFIgXAAIAAASIAWAAIAAAEIgWAAIAAAVIAXAAIAAAFg");
	this.shape_61.setTransform(78.275,11.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQADADgBADQABAFgDACQgCACgEAAQgDAAgCgCg");
	this.shape_62.setTransform(72.6,11.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_63.setTransform(107.225,3.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_64.setTransform(103.925,2.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_65.setTransform(101.625,2.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_66.setTransform(99.725,2.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_67.setTransform(97.775,2.225);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgFAcQgEgBgCgEIAAAAIgCAGIgEAAIAAg6IAGAAIAAAOIAAAJIAAAAQAEgGAIAAQAIAAAFAFQAEAGAAAJQAAAKgEAGQgFAGgIAAQgDAAgDgCgAgIgDQgDADAAAIQAAAJADAEQADADAFAAQAGAAADgEQADgEAAgIQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_68.setTransform(94.575,2.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_69.setTransform(91.175,2.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AALAUIgLgQIgLAQIgHAAIAPgUIgOgTIAHAAIAKAPIALgPIAHAAIgPATIAQAUg");
	this.shape_70.setTransform(88.225,3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIgBQAHABAFAFQAEAFAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_71.setTransform(84.075,3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_72.setTransform(80.925,2.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgOAbIAAg2IAdAAIAAAGIgXAAIAAAVIAWAAIAAAEIgWAAIAAAXg");
	this.shape_73.setTransform(78.275,2.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQADADgBADQABAFgDACQgCACgEAAQgDAAgCgCg");
	this.shape_74.setTransform(72.6,2.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOASIAAgFIAHACIAHABQADAAADgBQACgCABgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgFIgIgCIgFgEIgBgEQAAgGAFgCQADgDAHAAQAHAAAGADIgDAEQgGgCgEAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAADIADACIAGADQAIACACACQADADAAAEQgBAGgEADQgEAEgGgBQgJAAgFgDg");
	this.shape_75.setTransform(104.8,-5.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIAAQAHAAAFAEQAEAGAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAFIgHACIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_76.setTransform(100.775,-5.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOASIAAgFIAHACIAHABQADAAADgBQACgCABgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgFIgIgCIgEgEIgCgEQABgGAEgCQADgDAHAAQAHAAAGADIgDAEQgGgCgFAAIgGABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABADIADACIAGADQAHACADACQADADAAAEQAAAGgFADQgEAEgGgBQgJAAgFgDg");
	this.shape_77.setTransform(96.8,-5.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMARQgEgEAAgHIAAgaIAGAAIAAAZQAAAFADADQACADAFgBQAFABADgEQADgEAAgHIAAgVIAGAAIAAAoIgFAAIgBgGIAAAAQgCADgDACQgEACgDAAQgIAAgDgEg");
	this.shape_78.setTransform(92.575,-5.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AALAVIAAgZQAAgFgCgDQgDgCgEAAQgGgBgDAEQgDAEAAAHIAAAVIgGAAIAAgoIAFAAIABAGIAAAAQACgDAEgCQADgCADAAQAIAAAEADQADAFAAAHIAAAag");
	this.shape_79.setTransform(87.975,-5.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgGQAFgGAIABQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAFgJAAQgFAAgEgDgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_80.setTransform(83.275,-5.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgSAbIAAg2IAQAAQAJABAGADQAEADAAAHQAAAFgDAEQgCADgGAAQANACAAALQAAAHgFAFQgFADgJAAgAgLAWIALAAQAGAAADgDQADgCABgGQgBgFgDgCQgDgDgHAAIgKAAgAgLgDIAKAAQAFAAADgCQADgCABgFQgBgFgDgCQgDgCgGAAIgJAAg");
	this.shape_81.setTransform(78.65,-6.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQADADgBADQABAFgDACQgCACgEAAQgDAAgCgCg");
	this.shape_82.setTransform(72.6,-6.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgJQAAgKAEgFQAFgHAIAAQAHAAAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHACIgHABQgIAAgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_83.setTransform(134.575,-14.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgFAIgBIAGABIAFABIgCAGIgFgBIgEgBQgLAAAAAPQAAAHADAFQADAEAFAAQAFAAAFgDIAAAGQgEACgGABQgIgBgFgFg");
	this.shape_84.setTransform(130.675,-14.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgFgCgCQgDgCgEgBQgGABgDADQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgDAEgBQADgCADAAQAIAAAEAEQADADAAAIIAAAag");
	this.shape_85.setTransform(126.425,-14.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQAAgLASgBIAIAAIAAgCQAAgFgCgDQgDgCgEAAQgEAAgHADIgCgFIAHgDIAGgBQAIABADADQAEADAAAIIAAAbIgFAAIgBgHQgDAEgEACQgDABgEABQgGgBgDgDgAgGADQgDACAAAEQAAADACACQACACAEAAQAFAAADgDQADgDABgGIAAgDIgHAAQgHAAgDACg");
	this.shape_86.setTransform(121.8,-14.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAVIAAgoIAFAAIABAIIABAAQABgFADgBQADgDAEAAIAFABIgBAFIgEgBQgFABgDAEQgDAEAAAGIAAAVg");
	this.shape_87.setTransform(118.5,-14.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgIIAAgaIAGAAIAAAaQAAAFADACQACACAFABQAFgBADgDQADgDAAgJIAAgUIAGAAIAAAoIgFAAIgBgFIAAAAQgCADgDABQgEACgDAAQgIAAgDgEg");
	this.shape_88.setTransform(114.275,-14.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNATIAAgGIAGACIAGABQAEAAADgCQACgBAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgHgDIgIgDIgDgDIgBgGQAAgEADgEQAFgDAGAAQAGAAAHADIgCAFQgGgCgGAAIgFABQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIACACIAGADQAIACACADQACACABAFQAAAFgEADQgFADgHABQgIAAgEgDg");
	this.shape_89.setTransform(110.15,-14.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgFgCgCQgDgCgEgBQgGABgDADQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgDAEgBQADgCADAAQAIAAAEAEQADADAAAIIAAAag");
	this.shape_90.setTransform(105.975,-14.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgCAcIAAg2IAFAAIAAA2g");
	this.shape_91.setTransform(102.575,-15.55);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AALAdIAAgaQAAgEgCgDQgDgCgEAAQgGAAgDADQgDADAAAIIAAAVIgGAAIAAg5IAGAAIAAARIAAAGIAAAAQACgDADgCQAEgCADAAQAIAAAEAEQADAEAAAGIAAAbg");
	this.shape_92.setTransform(97.225,-15.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_93.setTransform(93.475,-15.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_94.setTransform(91.225,-15.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQAAgLASgBIAIAAIAAgCQAAgFgCgDQgCgCgFAAQgEAAgHADIgCgFIAHgDIAGgBQAHABAEADQAEADAAAIIAAAbIgFAAIgBgHQgEAEgDACQgDABgEABQgFgBgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAEAAAEgDQADgDABgGIAAgDIgHAAQgHAAgCACg");
	this.shape_95.setTransform(87.95,-14.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgJQAAgKAEgFQAFgHAIAAQAHAAAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHACIgHABQgIAAgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_96.setTransform(83.825,-14.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAOAcIAAgaIgbAAIAAAaIgHAAIAAg2IAHAAIAAAXIAbAAIAAgXIAHAAIAAA2g");
	this.shape_97.setTransform(78.85,-15.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQADADgBADQABAFgDACQgCACgEAAQgDAAgCgCg");
	this.shape_98.setTransform(72.6,-15.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(69.6,-22.6,236.50000000000003,40.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgJA0QgDgDAAgGQAAgHADgDQAEgDAFAAQAGAAAEADQADADAAAHQAAAFgDAEQgEADgGAAQgFAAgEgDgAgIARIgEhIIAZAAIgEBIg");
	this.shape.setTransform(49.025,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA2QgJgFAAgMQAAgHAFgFQAEgFAJgCQgDgCgDgDQgDgDAAgEQAAgFADgCIAIgHQgGgCgEgHQgEgGAAgJQAAgNAJgIQAJgHARAAIAHAAIAGABIAdAAIAAAMIgNADQAEAGgBAHQAAAOgJAHQgJAIgQAAIgEgBIgDAAQgDADgBACQAAAEANABIANAAQANAAAIAFQAHAHAAALQAAAOgMAJQgMAIgWAAQgSAAgJgHgAgRAcQgEADgBAFQABAEAEADQAFADAIAAQALAAAHgDQAHgEAAgFQAAgGgEgBQgEgCgJAAIgKAAQgHAAgEADgAgNgfQAAAGADAFQADADAHAAQAFAAADgDQADgFAAgGQAAgPgLAAQgNAAAAAPg");
	this.shape_1.setTransform(42.5,35.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAqIAAgvQAAgKgEgEQgCgFgIABQgIAAgEAGQgFAGAAAOIAAAnIgWAAIAAhSIARAAIADAKIABAAQAEgFAGgEQAHgCAIAAQAPgBAHAJQAHAHAAAPIAAA1g");
	this.shape_2.setTransform(33.25,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA6IAAhTIAVAAIAABTgAgLguQAAgLALAAQANAAAAALQAAAFgEADQgDADgGAAQgLAAAAgLg");
	this.shape_3.setTransform(25.9,31.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAqIAAhSIARAAIADAOIABAAQAEgHAGgFQAHgDAHAAIAIAAIgCAVIgGgBQgLAAgGAHQgGAFAAAJIAAAqg");
	this.shape_4.setTransform(20.575,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA6IAAhTIAVAAIAABTgAgLguQAAgLALAAQAMAAAAALQABAFgEADQgDADgGAAQgLAAAAgLg");
	this.shape_5.setTransform(14.35,31.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA2IAAguIgqAAIAAAuIgYAAIAAhsIAYAAIAAArIAqAAIAAgrIAXAAIAABsg");
	this.shape_6.setTransform(6.125,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIgHgdIgIgkIAAAAIgPBBIgYAAIgYhTIAXAAIAKAlIAEAbIAAAAIADgSIACgGIAKgoIAYAAIAKAoIABAEIAAAHIACAHIAAAGIABAAIACgPIADgMIAKglIAWAAIgYBTg");
	this.shape_7.setTransform(28.7,16.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmQgKgFgFgKQgEgKAAgNQAAgUAKgLQAKgLATAAQAMAAAKAFQAIAFAFAKQAGAKAAAMQgBAUgKAMQgLALgTAAQgMAAgIgFgAgMgSQgEAGgBAMQABAMAEAHQADAGAJAAQAJAAAEgGQAEgHAAgMQAAgMgEgGQgEgGgJAAQgJAAgDAGg");
	this.shape_8.setTransform(17.45,16.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATA2IguhRIgBAAIACAeIAAAzIgWAAIAAhsIAeAAIAvBRIAAAAIgBgdIAAg0IAUAAIAABsg");
	this.shape_9.setTransform(6.5,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(-1.5,2.3,54.7,41.6), null);


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
	this.instance.setTransform(3,-393,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(3,-393,348.6,76.69999999999999), null);


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
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AAAi2IAAFt");
	this.shape.setTransform(14.5,-170.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(13.5,-190,2,38.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBIQgFgFAAgIQAAgJAFgEQAEgEAIgBQAIABAGAEQAEAEAAAJQAAAIgFAEQgEAGgJAAQgIgBgEgEgAgLAYIgGhkIAjAAIgGBkg");
	this.shape.setTransform(248,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBQgMgQABgbQgBgcAMgPQAMgQAUAAQAVAAALARIABAAQgCgNAAgKIAAglIAfAAIAACfIgXAAIgHgPIgBAAQgKARgWAAQgTAAgMgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgJAAgGAJg");
	this.shape_1.setTransform(238.05,6.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_2.setTransform(225.575,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBBQgMgQABgbQgBgcAMgPQAMgQAUAAQAVAAALARIABAAQgCgNAAgKIAAglIAfAAIAACfIgXAAIgHgPIgBAAQgKARgWAAQgTAAgMgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgJAAgGAJg");
	this.shape_3.setTransform(212.4,6.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_4.setTransform(199.925,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_5.setTransform(187.525,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBLIhBhwIAAAAIACApIAABHIgdAAIAAiVIApAAIBABwIABAAIgCgpIAAhHIAdAAIAACVg");
	this.shape_6.setTransform(172.8,7.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA6IgRgFIAAgaQAKAEALADQAKACAJAAQAQAAAAgJQAAgEgDgCIgHgFIgOgHQgOgGgFgEQgHgEgCgGQgDgGgBgKQAAgOANgJQALgJAVABQAVAAATAJIgJAWIgRgGQgHgCgIAAQgNAAABAHQAAAEAEAEIATAJQANAFAGAFQAHADADAHQACAGAAAJQAAARgMAKQgMAJgXAAQgNgBgJgBg");
	this.shape_7.setTransform(153.7,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_8.setTransform(144.275,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_9.setTransform(132.725,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA5IgshxIAhAAIAWBAQAEAMAAALIAAAAQABgJAEgOIAWhAIAhAAIgsBxg");
	this.shape_10.setTransform(120.575,8.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBQIAAhyIAeAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgFAEgIAAQgQAAAAgQg");
	this.shape_11.setTransform(111.4,6.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsBLQgNgIAAgPQAAgKAHgHQAGgHANgDQgFgCgEgFQgDgFAAgFQAAgHAEgDQADgEAIgEQgJgEgGgJQgFgJAAgLQAAgTAMgKQAMgLAXAAIALABIAIACIAoAAIAAAQIgSAEQAFAIAAAJQAAATgNAKQgNAKgWAAIgFAAIgFAAQgFADAAAEQAAAHARAAIATAAQATAAAKAIQAKAIAAAPQAAAVgRALQgRALgeAAQgYAAgNgJgAgYAnQgGAEAAAGQAAAHAHAEQAGADALAAQAQAAAJgEQAKgFAAgIQAAgGgGgDQgFgCgMAAIgPAAQgJAAgGAEgAgSgrQAAAJAEAGQAEAFAJAAQAIAAAEgFQAEgGAAgJQAAgVgQAAQgRAAAAAVg");
	this.shape_12.setTransform(102.175,11.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_13.setTransform(90.175,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_14.setTransform(79.825,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAyQgJgJAAgRQAAgTANgHQANgKAYAAIAUgBIAAgFQAAgSgSAAQgNAAgSAJIgLgVQAUgKAXAAQAXAAAMAKQANAKAAAUIAABMIgWAAIgGgQIgBAAQgHAKgJAEQgIADgNABQgQAAgKgKgAAIAFQgNAAgHAEQgGAFAAAKQAAAMAPAAQAKAAAGgFQAHgHAAgKIAAgJg");
	this.shape_15.setTransform(67.8,8.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnA5QgRgTAAgmQAAgWAIgSQAJgRAQgKQAQgJAUAAQAWAAAWAKIgKAaIgRgGQgJgEgIAAQgRAAgJAOQgKANAAAYQAAAyAkgBQAQAAAXgHIAAAbQgTAHgXAAQgfAAgSgUg");
	this.shape_16.setTransform(55.375,7.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmBKQgMgJAAgOQAAgLAIgIQAHgIAMgCQgFgCgDgEQgDgEAAgGQAAgKAOgIQgKgEgFgJQgGgIAAgLQAAgRAMgKQAKgKASAAQAKAAAGACIAkAAIAAAHIgXABQAJAMAAAOQAAAQgLAKQgKAKgRAAIgMgBQgFAEgEAEQgDADAAAFQAAAFAFADQAEACAJAAIASAAQATAAAJAIQAKAHAAAOQAAASgOAJQgPAKgaAAQgUAAgMgIgAgmAzQAAAXAhgBQAsAAgBgcQABgJgIgFQgGgEgPgBIgSAAQgeAAAAAZgAgXhBQgHAHAAAOQAAAMAIAIQAHAHAOAAQANAAAHgHQAHgHABgOQgBgOgHgHQgIgHgMAAQgOAAgIAIg");
	this.shape_17.setTransform(257.35,-9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAiA5IAAhIQAAgQgHgIQgIgIgOAAQgTAAgKALQgIAKgBAWIAAA9IgKAAIAAhvIAJAAIABAQIABAAQALgSAbAAQAmAAAAApIAABIg");
	this.shape_18.setTransform(245.75,-11.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_19.setTransform(237.175,-13.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA4IgrhvIAKAAIAdBLIAIAZIAAAAIAJgZIAdhLIAKAAIgrBvg");
	this.shape_20.setTransform(230.025,-11.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_21.setTransform(222.875,-13.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIALAAIAACLIBGAAIAAAKg");
	this.shape_22.setTransform(215.95,-13.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghBCQgNgOAAgbQAAgcANgQQAMgPAWAAQALAAAJAFQAJAEAHALIABAAIgBgaIAAgoIAKAAIAACfIgHAAIgCgRIgBAAQgMATgYAAQgWAAgMgPgAgagMQgJAMAAAYQAAAwAkAAQASAAAKgLQAIgLAAgZIAAgCQAAgZgIgLQgJgMgTAAQgSAAgJANg");
	this.shape_23.setTransform(197.75,-13.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeArQgOgPgBgbQAAgaAOgQQANgQAVAAQAUAAALAOQALAOAAAXIAAAHIhPAAQAAAXALAMQALANASAAQAKAAAHgCQAHgBALgFIAAAKQgJAEgIABQgIACgKAAQgXAAgNgPgAAjgHQAAgTgJgLQgIgLgPAAQgPAAgJALQgLAKgBAUIBEAAIAAAAg");
	this.shape_24.setTransform(186.1,-11.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA+QgHgHAAgRIAAhHIgQAAIAAgGIAQgFIAFgZIAGAAIAAAbIAfAAIAAAJIgfAAIAABFQAAANADAGQAFAGAJAAQAKAAAHgBIAAAIQgHACgKAAQgOAAgHgIg");
	this.shape_25.setTransform(176.725,-12.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnAzIAAgLQARAIATAAQAPAAAJgFQAIgGAAgJQAAgIgGgGQgHgGgQgFQgPgFgHgFQgHgEgDgFQgEgGAAgIQAAgMALgIQAKgHASAAQASAAAQAHIgEAJQgQgHgOAAQgNAAgIAFQgIAEAAAIQAAAJAHAFQAGAGARAGQAPAFAHAEQAHAEADAGQAEAFAAAIQAAAPgMAIQgLAIgUAAQgXAAgNgHg");
	this.shape_26.setTransform(168.425,-11.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_27.setTransform(161.275,-13.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnAzIAAgLQARAIATAAQAPAAAJgFQAIgGAAgJQAAgIgGgGQgHgGgQgFQgPgFgHgFQgHgEgDgFQgEgGAAgIQAAgMALgIQAKgHASAAQASAAAQAHIgEAJQgQgHgOAAQgNAAgIAFQgIAEAAAIQAAAJAHAFQAGAGARAGQAPAFAHAEQAHAEADAGQAEAFAAAIQAAAPgMAIQgLAIgUAAQgXAAgNgHg");
	this.shape_28.setTransform(153.975,-11.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnAzIAAgLQARAIATAAQAPAAAJgFQAIgGAAgJQAAgIgGgGQgHgGgQgFQgPgFgHgFQgHgEgDgFQgEgGAAgIQAAgMALgIQAKgHASAAQASAAAQAHIgEAJQgQgHgOAAQgNAAgIAFQgIAEAAAIQAAAJAHAFQAGAGARAGQAPAFAHAEQAHAEADAGQAEAFAAAIQAAAPgMAIQgLAIgUAAQgXAAgNgHg");
	this.shape_29.setTransform(144.225,-11.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAzBLIgUg1Ig8AAIgVA1IgMAAIA8iVIAGAAIA7CVgAAbANIgVg1IgGgSIgEASIgWA1IA1AAg");
	this.shape_30.setTransform(133.1,-13.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfArQgOgPABgbQAAgaANgQQANgQAVAAQAUAAAMAOQALAOAAAXIAAAHIhQAAQAAAXALAMQALANASAAQAJAAAIgCQAHgBALgFIAAAKQgJAEgIABQgIACgKAAQgXAAgOgPgAAjgHQAAgTgIgLQgJgLgPAAQgPAAgKALQgJAKgCAUIBEAAIAAAAg");
	this.shape_31.setTransform(115.6,-11.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABBA5IAAhIQAAgRgHgHQgGgIgNAAQgRAAgJAKQgIAJAAAUIAABBIgJAAIAAhLQAAgdgaAAQgRAAgIALQgIAKAAAWIAAA9IgLAAIAAhvIAJAAIACAQIABAAQAEgJAJgEQAIgFAKAAQAbAAAGAUIABAAQAFgKAJgFQAKgFALAAQASAAAKAKQAJAKAAAVIAABIg");
	this.shape_32.setTransform(100.675,-11.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_33.setTransform(89.025,-13.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEBLIAAiLIgxAAIAAgKIBrAAIAAAKIgwAAIAACLg");
	this.shape_34.setTransform(81.15,-13.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAEIAAgHIAvAAIAAAHg");
	this.shape_35.setTransform(72.275,-11.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_36.setTransform(66.575,-14.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_37.setTransform(61.875,-14.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrAQIAAhIIAKAAIAABHQAAARAHAIQAHAIAPAAQATAAAKgKQAJgLAAgWIAAg9IAKAAIAABvIgJAAIgCgQIAAAAQgLASgbAAQgmAAAAgpg");
	this.shape_38.setTransform(53.275,-11.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIBRAAIAAAKIhHAAIAABAIBDAAIAAAIIhDAAIAABDg");
	this.shape_39.setTransform(42.875,-13.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(34.6,-30.5,230.29999999999998,53.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAOAmIgGgaIgIghIAAAAIgOA7IgWAAIgVhLIAUAAIAJAiIAEAYIADgRIABgFIAKgkIAVAAIAJAkIABAEIACAGIABAHIAAAFIABAAIACgOIACgKIAJgiIAVAAIgXBLg");
	this.shape.setTransform(95,-172.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgEgJQgFgJAAgMQAAgSAKgKQAJgLARAAQALAAAJAFQAIAFAEAJQAFAJAAALQAAATgKAKQgKALgRAAQgKAAgJgFgAgMgQQgDAFAAALQAAALAEAGQADAGAIAAQAIAAAEgGQAEgGgBgLQABgKgEgGQgEgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(84.7,-172.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAyIgrhKIgBAAIACAbIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgbIAAgvIATAAIAABjg");
	this.shape_2.setTransform(74.675,-174.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA2IAAgRIAIACQAGAAAEgEQAEgEACgHIACgDIgfhLIAXAAIAPArIABAMIADgMIAPgrIAWAAIggBWQgFALgHAGQgIAGgLAAIgLgBg");
	this.shape_3.setTransform(61.425,-171.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_4.setTransform(55.35,-174.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_5.setTransform(49.025,-171.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_6.setTransform(40.175,-171.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_7.setTransform(30.675,-174.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AnaCvIAAldIO1AAIAAFdg");
	this.shape_8.setTransform(63.5,-173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(16,-190.5,95,35), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,0,320,50), null);


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
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(160,45,1.0666,0.2,0,0,0,150,225);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(300));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(254.5,216.05,1,1,0,0,0,47.5,17.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).to({x:239.5,alpha:1},9,cjs.Ease.get(1)).wait(74));

	// Line
	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(180.55,216.85,1,1,0,0,0,0,20.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(208).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(83));

	// Logo
	this.instance_2 = new lib.Logo_1();
	this.instance_2.setTransform(77.9,217.2,0.4894,0.4894,0,0,0,166.2,36.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({x:92.9,alpha:1},9,cjs.Ease.get(1)).wait(92));

	// T2
	this.instance_3 = new lib.T2();
	this.instance_3.setTransform(41.15,77.5,1,1,0,0,0,46.1,51.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).to({x:56.15,alpha:1},9,cjs.Ease.get(1)).to({_off:true},82).wait(106));

	// T1
	this.instance_4 = new lib.T1();
	this.instance_4.setTransform(52.85,17.2,1,1,0,0,0,57.8,14.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({x:67.85,alpha:1},9,cjs.Ease.get(1)).to({_off:true},91).wait(106));

	// Hdr
	this.instance_5 = new lib.Hdr();
	this.instance_5.setTransform(52.25,91.3,1,1,0,0,0,57.2,64);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:67.25,alpha:1},9,cjs.Ease.get(1)).to({_off:true},76).wait(206));

	// Bg
	this.instance_6 = new lib.Bg_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9,cjs.Ease.get(1)).wait(183).to({alpha:0},7).wait(101));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-3.2,326.4,53.2);


// stage content:
(lib.WBAY_218223_MM_320x50_V1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/D6IAAnzMAx/AAAIAAHzg");
	mask.setTransform(159.9951,24.9975);

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
	this.instance.setTransform(160,10.4,1.0667,0.0833,0,0,0,150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,26);
// library properties:
lib.properties = {
	id: '975D5B5BE9CB1949972A01487C3AD994',
	width: 320,
	height: 50,
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
an.compositions['975D5B5BE9CB1949972A01487C3AD994'] = {
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