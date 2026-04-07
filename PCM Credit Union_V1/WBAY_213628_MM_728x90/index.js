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



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.log = function() {
	this.initialize(img.log);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,44);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,91);// helper functions:

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


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BG();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,728,90);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgQBKIAAgiIAhAAIAAAigAgIAYIgKhdIAAgEIAlAAIAAAEIgKBdg");
	this.shape.setTransform(48.475,8.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUA6IAAg/QAAgXgUAAQgTAAAAAXIAAA/IggAAIAAhxIAgAAIAAAQQAPgSARAAQATAAAKALQAKAMAAATIAABJg");
	this.shape_1.setTransform(38.55,10.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpAvQgKgMAAgTIAAhJIAgAAIAAA/QAAAXATAAQAUAAAAgXIAAg/IAgAAIAABxIggAAIAAgQQgPASgRAAQgTAAgKgLg");
	this.shape_2.setTransform(25.35,10.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag3BKIAAiTIBvAAIAAAeIhPAAIAAAfIBGAAIAAAdIhGAAIAAA5g");
	this.shape_3.setTransform(12.325,8.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA6IAAhxIAgAAIAAAXQAKgaAZABIAAAiIgCAAQghAAAAAnIAAAqg");
	this.shape_4.setTransform(-5.425,10.521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpAvQgKgMAAgTIAAhJIAgAAIAAA/QAAAXATAAQAUAAAAgXIAAg/IAgAAIAABxIggAAIAAgQQgOASgTAAQgSAAgKgLg");
	this.shape_5.setTransform(-16.9,10.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgrAqQgSgRAAgYIAAgBQAAgYASgRQASgRAZAAQAaAAASARQARARAAAYIAAAAQAAAYgSARQgRASgaAAQgaAAgRgRgAgVgVQgIAJAAAMIAAAAQAAANAJAJQAIAJAMAAQAOAAAIgJQAHgJAAgMIAAgBQABgMgJgJQgJgKgMAAQgNAAgIAKg");
	this.shape_6.setTransform(-30.45,10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPBKIAAg6Ig5hZIAmAAIAiA8IAkg8IAlAAIg5BYIAAA7g");
	this.shape_7.setTransform(-45.075,8.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAqQgRgPAAgaIAAgBQAAgYAQgRQAQgRAXAAQAbAAAPASQAOARAAAaIgBAIIhOAAQAFAWAWAAQAPAAAMgLIATAQQgRAVgeAAQgYAAgRgRgAAYgIQgBgLgGgGQgHgIgKABQgTgBgEAZIAvAAIAAAAg");
	this.shape_8.setTransform(35.225,-8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAqQgRgRAAgYIAAgBQAAgXARgSQARgRAZAAQAcAAARATIgUAVQgMgNgOAAQgKAAgIAKQgIAIAAANIAAAAQAAANAIAJQAIAJAMAAQANABANgMIATATQgTAUgcAAQgYAAgRgRg");
	this.shape_9.setTransform(22.825,-8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUA6IAAg/QAAgXgUAAQgTAAAAAXIAAA/IggAAIAAhxIAgAAIAAAQQAOgSATAAQASAAAKALQAKAMAAATIAABJg");
	this.shape_10.setTransform(10.15,-8.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoAxQgLgJAAgQIAAgBQAAgSANgIQAMgJAVAAQANAAANAFIAAgCQAAgVgXAAQgPAAgQAHIgIgZQAUgKAXAAQAZABANANQAMALAAAZIAABBIgfAAIAAgNQgNAOgUAAQgRABgLgKgAgUAWIAAAAQAAAHAFADQAFAFAIAAQAKgBAHgGQAHgEAAgKIAAgFQgJgFgMAAQgVAAAAAQg");
	this.shape_11.setTransform(-3.025,-8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAUA6IAAg/QAAgXgUAAQgTAAAAAXIAAA/IggAAIAAhxIAgAAIAAAQQAOgSATAAQASAAAKALQAKAMAAATIAABJg");
	this.shape_12.setTransform(-15.5,-8.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPBNIAAhwIAfAAIAABwgAgQgwIAAgcIAhAAIAAAcg");
	this.shape_13.setTransform(-25.3,-10.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag3BKIAAiTIBvAAIAAAeIhPAAIAAAfIBGAAIAAAdIhGAAIAAA5g");
	this.shape_14.setTransform(-34.975,-9.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-21.8,109.80000000000001,44.900000000000006);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo();
	this.instance.setTransform(-21,-45,0.6561,0.6561);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-45,110.2,59.7);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.log();
	this.instance.setTransform(357,-219,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(357,-219,76.19999999999999,35.69999999999999);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape.setTransform(594.275,-153.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_1.setTransform(592.775,-155.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_2.setTransform(589.925,-154.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCASIgPgjIAGAAIALAdIAMgdIAGAAIgQAjg");
	this.shape_3.setTransform(586.55,-154.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAHgGAGQgFAGgIAAQgHAAgGgGgAgJgJQgDAEAAAFQAAAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_4.setTransform(582.925,-154.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAGAAIAAAKQACgFACgCQAEgEAFAAIAAAHQgHAAgDADQgDAFAAAHIAAAOg");
	this.shape_5.setTransform(579.95,-154.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAGAAAIQAAAHgFAGQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgDAAgGQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_6.setTransform(576.925,-154);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAGAAAIQAAAHgFAGQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgDAAgGQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_7.setTransform(573.075,-154);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_8.setTransform(568.725,-154.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_9.setTransform(564.4,-155.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_10.setTransform(562.375,-155.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAVQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAIIAAgWIAFAAIAAAyIgFAAIAAgHQgGAIgHAAQgHAAgFgFgAgIgCQgEADAAAGQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgGgEgDQgEgEgFAAQgFAAgDAEg");
	this.shape_11.setTransform(559.825,-155.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLANQgFgEAAgJQAAgHAEgGQAGgFAGAAQAIAAAFAFQAEAGAAAHIAAACIgcAAQABAFAEAEQADADAEAAQAHAAAFgFIACADQgFAHgJAAQgGAAgGgGgAAMgBQgBgFgCgDQgEgFgFAAQgEABgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_12.setTransform(555.85,-154.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAGAAIAAAKQACgFACgCQAEgEAFAAIAAAHQgGAAgEADQgDAFAAAHIAAAOg");
	this.shape_13.setTransform(553.05,-154.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLANQgEgFAAgIQAAgHAEgGQAGgFAHAAQAJAAAFAGIgDAFQgFgGgGAAQgEAAgEAEQgEAEAAAFQAAAGAEAEQAEAEAEAAQAGAAAFgFIADADQgFAHgJAAQgHAAgGgGg");
	this.shape_14.setTransform(550,-154.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAHgGAGQgFAGgIAAQgHAAgGgGgAgJgJQgDAEAAAFQAAAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_15.setTransform(544.475,-154.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_16.setTransform(541.7,-155.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAGAAIAEgBIAAAEQgDACgDAAQgJAAAAgKg");
	this.shape_17.setTransform(537.9,-155.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLANQgEgFAAgIQAAgHAEgGQAGgFAHAAQAJAAAFAGIgDAFQgFgGgGAAQgEAAgEAEQgEAEAAAFQAAAGAEAEQAEAEAEAAQAGAAAFgFIADADQgFAHgJAAQgHAAgGgGg");
	this.shape_18.setTransform(535.05,-154.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLANQgFgEAAgJQAAgHAFgGQAEgFAHAAQAIAAAFAFQAEAGAAAHIAAACIgcAAQABAFADAEQAEADAEAAQAGAAAGgFIACADQgFAHgJAAQgHAAgFgGgAAMgBQgBgFgDgDQgDgFgFAAQgEABgDADQgDADgBAGIAXAAIAAAAg");
	this.shape_19.setTransform(531.25,-154.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAeIAAgEIADAAQACAAAAgFIAAglIAGAAIAAAlQAAAKgIAAIgDgBgAAAgYIAAgGIAGAAIAAAGg");
	this.shape_20.setTransform(528.2,-154.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMASIAAAHIgFAAIAAgyIAFAAIAAAWQAGgIAHAAQAHAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgHAAQgIAAgFgIgAgIgCQgEADAAAGQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgDAAgHQAAgGgEgDQgEgEgFAAQgEAAgEAEg");
	this.shape_21.setTransform(526.175,-155.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAOQgEgDAAgHIAAgWIAGAAIAAAVQAAAEACAEQADADAEAAQAEAAADgDQADgEAAgFIAAgUIAGAAIAAAjIgGAAIAAgGQgEAIgHgBQgGAAgEgEg");
	this.shape_22.setTransform(522.025,-154.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAOIADgEQAGAEAFAAQAEAAACgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgDgDgCIgGgCQgFgBgDgBQgDgDAAgEQAAgFADgDQADgDAFAAQAHAAAGAEIgDAEQgFgDgFAAQgCAAgCABQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAAAQAAADADABIAFADIAIACQAEADAAAEIAAAAQAAAFgEADQgEADgFAAQgHAAgHgFg");
	this.shape_23.setTransform(518.1,-154.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALASIAAgUQAAgEgDgEQgDgCgEAAQgEAAgDACQgDADAAAGIAAATIgGAAIAAgjIAGAAIAAAHQAEgIAHAAQAHAAADAFQAEAEAAAGIAAAVg");
	this.shape_24.setTransform(512.825,-154.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAHgGAGQgFAGgIAAQgHAAgGgGgAgJgJQgDAEAAAFQAAAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_25.setTransform(509.075,-154.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_26.setTransform(506.175,-155.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_27.setTransform(504.75,-155.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_28.setTransform(501.425,-154.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLANQgEgFAAgIQAAgHAEgGQAGgFAHAAQAJAAAFAGIgDAFQgFgGgGAAQgEAAgEAEQgEAEAAAFQAAAGAEAEQAEAEAEAAQAGAAAFgFIADADQgFAHgJAAQgHAAgGgGg");
	this.shape_29.setTransform(498.05,-154.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_30.setTransform(495.375,-155.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_31.setTransform(493.825,-155.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAGAAAIQAAAHgFAGQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgDAAgGQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_32.setTransform(491.475,-154);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAGAAAIQAAAHgFAGQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgDAAgGQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_33.setTransform(487.625,-154);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AATAZIgFgNIgaAAIgGANIgGAAIAWgxIAFAAIAWAxgAALAHIgLgYIgKAYIAVAAg");
	this.shape_34.setTransform(483.3,-155.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_35.setTransform(590.625,-161.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgQAWIACgEIAGABQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBIADgFIgQgjIAGAAIAMAdIALgdIAGAAIgPAkQgCAGgCACQgDADgEAAQgEAAgEgCg");
	this.shape_36.setTransform(588.325,-161.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_37.setTransform(585.625,-163.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAGAAAIQAAAIgFAFQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgFQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_38.setTransform(583.275,-162);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAGAAAIQAAAIgFAFQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgFQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_39.setTransform(579.425,-162);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_40.setTransform(575.075,-162.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNAOIACgEQAHAEAGAAQACAAACgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCIgGgCQgFgBgCgBQgEgDAAgEQAAgFADgDQADgDAFAAQAHAAAGAEIgCAEQgGgDgFAAQgCAAgCABQAAABgBAAQAAAAgBABQAAAAAAABQAAABAAAAQAAADADABIAFADIAIACQAEADAAAEIAAAAQAAAFgEADQgDADgGAAQgHAAgHgFg");
	this.shape_41.setTransform(569.45,-162.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALASIAAgUQAAgFgDgDQgDgCgEAAQgEAAgDACQgDADAAAGIAAATIgGAAIAAgjIAGAAIAAAGQAEgGAHgBQAHAAADAFQAEAEAAAGIAAAVg");
	this.shape_42.setTransform(566.075,-162.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAHgGAGQgFAGgIAAQgHAAgGgGgAgJgJQgDAEAAAFQAAAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_43.setTransform(562.325,-162.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_44.setTransform(559.425,-163.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgEACgDAAQgJAAAAgKg");
	this.shape_45.setTransform(558,-163.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKANQgGgFABgIQgBgHAGgGQAFgFAHAAQAIAAAHAHIgEADQgGgFgFAAQgFAAgDAEQgEAEAAAFQAAAGAEAEQADAEAFAAQAGAAAFgFIAEADQgHAHgIAAQgHAAgFgGg");
	this.shape_46.setTransform(555.15,-162.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_47.setTransform(552.475,-163.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAGAAIAAAKQABgFADgCQAEgEAFAAIAAAGQgHAAgDAEQgDAFAAAHIAAAOg");
	this.shape_48.setTransform(550.85,-162.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_49.setTransform(548.75,-163.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNAOIADgEQAGAEAFAAQAEAAACgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCIgGgCQgFgBgDgBQgDgDAAgEQAAgFADgDQADgDAFAAQAHAAAGAEIgDAEQgFgDgFAAQgCAAgCABQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAAAQAAADADABIAFADIAIACQAEADAAAEIAAAAQAAAFgEADQgEADgFAAQgHAAgHgFg");
	this.shape_50.setTransform(545.55,-162.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgLANQgFgEAAgJQAAgHAEgGQAGgFAGAAQAIAAAEAFQAFAGAAAHIAAACIgcAAQABAFAEAEQADADAEAAQAHAAAEgFIAEADQgHAHgIAAQgHAAgFgGgAALgBQAAgFgCgDQgEgFgFAAQgDAAgEAEQgDADgBAGIAWAAIAAAAg");
	this.shape_51.setTransform(542.1,-162.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAFAAIAAAKQACgFADgCQAEgEAFAAIAAAGQgGAAgEAEQgEAFAAAHIAAAOg");
	this.shape_52.setTransform(539.3,-162.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AALASIAAgUQAAgFgDgDQgDgCgEAAQgEAAgDACQgDADAAAGIAAATIgGAAIAAgjIAGAAIAAAGQAEgGAHgBQAHAAADAFQAEAEAAAGIAAAVg");
	this.shape_53.setTransform(534.125,-162.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_54.setTransform(531.325,-163.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_55.setTransform(528.475,-162.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgEACgDAAQgJAAAAgKg");
	this.shape_56.setTransform(526.05,-163.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAGAAIAAAKQABgFADgCQAEgEAFAAIAAAGQgHAAgDAEQgDAFAAAHIAAAOg");
	this.shape_57.setTransform(523.95,-162.55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgLANQgFgEAAgJQAAgHAFgGQAFgFAGAAQAIAAAEAFQAFAGAAAHIAAACIgcAAQABAFADAEQAEADAEAAQAGAAAFgFIAEADQgHAHgIAAQgHAAgFgGgAALgBQAAgFgCgDQgEgFgFAAQgDAAgEAEQgDADgBAGIAWAAIAAAAg");
	this.shape_58.setTransform(520.6,-162.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgOASQgHgHAAgLQAAgKAHgHQAHgHAKAAQALgBAIAJIgEADQgHgGgIAAQgIAAgFAFQgGAHABAHQgBAJAGAFQAFAGAIAAQAIAAAIgHIADAEQgIAIgLABQgKAAgHgIg");
	this.shape_59.setTransform(516.15,-163.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_60.setTransform(510.525,-161.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAVQgFgFAAgJQAAgHAFgGQAFgFAHAAQAIAAAFAIIAAgWIAFAAIAAAyIgFAAIAAgIQgGAJgHAAQgHAAgFgFgAgIgCQgEADAAAGQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgGgEgDQgEgEgFAAQgFAAgDAEg");
	this.shape_61.setTransform(508.025,-163.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLANQgFgEAAgJQAAgHAFgGQAEgFAHAAQAIAAAEAFQAFAGAAAHIAAACIgcAAQABAFADAEQAEADAEAAQAGAAAFgFIAEADQgHAHgIAAQgGAAgGgGgAALgBQAAgFgCgDQgEgFgFAAQgEAAgDAEQgDADgBAGIAWAAIAAAAg");
	this.shape_62.setTransform(504.05,-162.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAFAAIAAAKQADgFACgCQAEgEAFAAIAAAGQgHAAgDAEQgDAFgBAHIAAAOg");
	this.shape_63.setTransform(501.25,-162.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_64.setTransform(499.025,-163.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAOQgEgDAAgHIAAgWIAGAAIAAAVQAAAEACAEQADACAEAAQAEAAADgCQADgEAAgFIAAgUIAGAAIAAAjIgGAAIAAgGQgEAIgHAAQgGgBgEgEg");
	this.shape_65.setTransform(496.375,-162.45);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AANAYIAAgTQgGAJgHAAQgHAAgFgFQgFgFAAgIQAAgIAFgGQAFgFAHAAQAIAAAFAIIAAgHIAFAAIAAAugAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgFQAAgGgEgEQgEgEgFAAQgFAAgDAEg");
	this.shape_66.setTransform(492.625,-162);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLANQgFgEAAgJQAAgHAFgGQAFgFAGAAQAIAAAEAFQAFAGAAAHIAAACIgcAAQABAFADAEQAEADAEAAQAGAAAFgFIAEADQgHAHgIAAQgGAAgGgGgAALgBQAAgFgCgDQgEgFgFAAQgDAAgEAEQgDADgBAGIAWAAIAAAAg");
	this.shape_67.setTransform(488.65,-162.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJASIAAgjIAFAAIAAAKQACgFADgCQAEgEAFAAIAAAGQgGAAgEAEQgEAFAAAHIAAAOg");
	this.shape_68.setTransform(485.85,-162.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgQAWIACgEIAGABQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIADgFIgQgjIAGAAIAMAdIALgdIAGAAIgPAkQgCAGgCACQgDADgEAAQgEAAgEgCg");
	this.shape_69.setTransform(594.925,-169.925);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAGAAIAEgBIAAAEQgDACgDAAQgJAAAAgKg");
	this.shape_70.setTransform(592.35,-171.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_71.setTransform(590.325,-171.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAaIAAgyIAFAAIAAAyg");
	this.shape_72.setTransform(588.775,-171.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_73.setTransform(587.225,-171.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMASIAAAHIgFAAIAAgyIAFAAIAAAWQAGgIAHAAQAHAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgHAAQgIAAgFgIgAgIgCQgEADAAAGQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgHgEgCQgEgEgFAAQgEAAgEAEg");
	this.shape_74.setTransform(584.875,-171.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_75.setTransform(581.825,-171.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQATIADgEQAGAEAHAAQAGAAADgDQAEgDAAgGIAAgFQgGAIgHAAQgHAAgFgFQgFgEAAgHQAAgIAFgFQAFgEAHAAQAHAAAGAHIAAgGIAFAAIAAAcQAAAJgEAEQgFAFgJAAQgIAAgIgFgAgIgPQgEADAAAGQAAAFAEADQAEADAEAAQAFAAAEgDQAEgDAAgFQAAgGgEgDQgEgDgFAAQgFAAgDADg");
	this.shape_76.setTransform(579.275,-169.975);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_77.setTransform(576.425,-171.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCAaIAAgyIAFAAIAAAyg");
	this.shape_78.setTransform(574.875,-171.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAFgFQAEgGAHAAQAIAAAFAGQAEAFAAAHIAAACIgcAAQABAGADADQAEADAEAAQAGAAAGgFIACADQgGAHgIAAQgHAAgFgFgAAMgBQgBgFgDgDQgDgEgFgBQgEAAgDAEQgDAEgBAFIAXAAIAAAAg");
	this.shape_79.setTransform(572.2,-170.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgRAYIAAguIAFAAIAAAHQAGgIAHAAQAHAAAFAFQAFAFAAAJQAAAHgFAGQgFAFgHAAQgIAAgFgIIAAASgAgIgOQgEAEAAAGQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgFQAAgHgEgDQgEgEgFAAQgEAAgEAEg");
	this.shape_80.setTransform(566.775,-170);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_81.setTransform(563.725,-171.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AALAaIAAgWQAAgEgDgDQgDgDgEAAQgEAAgDADQgDADAAAFIAAAVIgGAAIAAgyIAGAAIAAAUQAEgGAHgBQAHABADAEQAEADAAAGIAAAXg");
	this.shape_82.setTransform(561.125,-171.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgNAOIADgEQAGAEAFAAQADAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCIgGgCQgFgBgDgBQgDgDAAgEQAAgFADgDQADgDAFAAQAHAAAGAEIgDAEQgFgDgFAAQgCAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAABAAQAAABABAAIAFADIAIACQAEADAAAEIAAAAQAAAFgEADQgEADgFAAQgIAAgGgFg");
	this.shape_83.setTransform(557.15,-170.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJATIAAgjIAGAAIAAAJQACgFACgCQAEgDAFgBIAAAGQgGAAgEAFQgDAEAAAHIAAAPg");
	this.shape_84.setTransform(554.75,-170.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAFgFQAEgGAHAAQAIAAAFAGQAEAFAAAHIAAACIgcAAQABAGADADQAEADAEAAQAGAAAGgFIADADQgHAHgIAAQgGAAgGgFgAALgBQAAgFgDgDQgDgEgFgBQgEAAgDAEQgDAEgBAFIAWAAIAAAAg");
	this.shape_85.setTransform(551.4,-170.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgMASIAAAHIgFAAIAAgyIAFAAIAAAWQAGgIAHAAQAHAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgHAAQgIAAgFgIgAgIgCQgEADAAAGQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgHgEgCQgEgEgFAAQgEAAgEAEg");
	this.shape_86.setTransform(547.875,-171.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAWATIAAgVQAAgFgCgDQgDgDgFAAQgDAAgEADQgDAEAAAEIAAAVIgDAAIAAgVQAAgFgDgDQgCgDgFAAQgEAAgDADQgDAEAAAFIAAAUIgFAAIAAgjIAFAAIAAAFQAEgGAIgBQAHAAADAIQAFgIAIAAQAGABAEAEQADADABAHIAAAWg");
	this.shape_87.setTransform(543,-170.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAFgFQAEgGAHAAQAIAAAFAGQAEAFAAAHIAAACIgcAAQABAGADADQAEADAEAAQAGAAAGgFIADADQgHAHgIAAQgGAAgGgFgAALgBQAAgFgDgDQgDgEgFgBQgEAAgDAEQgDAEgBAFIAWAAIAAAAg");
	this.shape_88.setTransform(537.9,-170.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AASAZIAAgnIgSAZIAAAAIgRgZIAAAnIgFAAIAAgxIAFAAIARAaIARgaIAHAAIAAAxg");
	this.shape_89.setTransform(533.05,-171.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_90.setTransform(527.075,-169.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAEgFQAGgGAGAAQAIAAAEAGQAFAFAAAHIAAACIgcAAQABAGAEADQADADAEAAQAHAAAEgFIADADQgFAHgJAAQgGAAgGgFgAAMgBQgBgFgCgDQgEgEgFgBQgDAAgEAEQgDAEgBAFIAXAAIAAAAg");
	this.shape_91.setTransform(524.45,-170.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCAaIAAgyIAFAAIAAAyg");
	this.shape_92.setTransform(521.725,-171.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgMASIAAAHIgFAAIAAgyIAFAAIAAAWQAGgIAHAAQAHAAAFAFQAFAFAAAIQAAAIgFAGQgFAFgHAAQgIAAgFgIgAgIgCQgEADAAAGQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgHgEgCQgEgEgFAAQgEAAgEAEg");
	this.shape_93.setTransform(519.375,-171.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_94.setTransform(515.025,-170.475);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCAaIAAgyIAFAAIAAAyg");
	this.shape_95.setTransform(512.475,-171.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgCAZIAAgjIAFAAIAAAjgAgCgSIAAgGIAFAAIAAAGg");
	this.shape_96.setTransform(510.925,-171.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_97.setTransform(508.075,-170.475);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgBASIgQgjIAGAAIALAdIANgdIAFAAIgPAjg");
	this.shape_98.setTransform(504.7,-170.475);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_99.setTransform(500.725,-170.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgNAOIACgEQAHAEAGAAQACAAACgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCIgGgCQgFgBgCgBQgEgDAAgEQAAgFADgDQAEgDAEAAQAHAAAGAEIgCAEQgGgDgFAAQgCAAgCABQAAABgBAAQAAAAgBABQAAAAAAABQAAABAAAAQAAADADABIAFADIAIACQAEADAAAEIAAAAQAAAFgEADQgDADgGAAQgHAAgHgFg");
	this.shape_100.setTransform(495.1,-170.525);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAWATIAAgVQAAgFgCgDQgDgDgEAAQgEAAgEADQgCAEAAAEIAAAVIgFAAIAAgVQABgFgDgDQgDgDgEAAQgFAAgCADQgDAEAAAFIAAAUIgGAAIAAgjIAGAAIAAAFQAFgGAGgBQAJAAACAIQAFgIAIAAQAGABAEAEQAEADAAAHIAAAWg");
	this.shape_101.setTransform(490.95,-170.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgJATIAAgjIAGAAIAAAJQACgFACgCQAEgDAFgBIAAAGQgGAAgEAFQgDAEAAAHIAAAPg");
	this.shape_102.setTransform(486.9,-170.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAFgFQAEgGAHAAQAIAAAFAGQAEAFAAAHIAAACIgcAAQABAGADADQAEADAEAAQAGAAAGgFIADADQgGAHgJAAQgHAAgFgFgAAMgBQgBgFgDgDQgDgEgFgBQgEAAgDAEQgDAEgBAFIAXAAIAAAAg");
	this.shape_103.setTransform(483.55,-170.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_104.setTransform(480.95,-171.025);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgMAVQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAIIAAgWIAFAAIAAAyIgFAAIAAgIQgGAJgHAAQgHAAgFgFgAgIgDQgEADAAAHQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgGgEgEQgEgDgFAAQgFAAgDADg");
	this.shape_105.setTransform(601.375,-179.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgEgDgEQgDgDgEAAQgEAAgDADQgDADAAAGIAAAUIgGAAIAAgjIAGAAIAAAFQAEgGAHAAQAHAAADAEQAEADAAAHIAAAWg");
	this.shape_106.setTransform(597.475,-178.55);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_107.setTransform(593.375,-178.475);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgNAOIADgEQAGAEAFAAQADAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgCIgGgCQgFgBgDgBQgDgDAAgEQAAgFADgDQADgDAFAAQAHAAAGAEIgDAEQgFgDgFAAQgCAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAABAAQAAABABAAIAFADIAIACQAEADAAAEIAAAAQAAAFgEADQgEADgFAAQgIAAgGgFg");
	this.shape_108.setTransform(587.75,-178.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAEgFQAGgGAGAAQAIAAAEAGQAFAFAAAHIAAACIgcAAQABAFAEAEQADADAEAAQAHAAAEgFIADADQgFAHgJAAQgGAAgGgFgAAMgBQgBgGgCgDQgEgDgFAAQgDAAgEADQgDAEgBAFIAXAAIAAAAg");
	this.shape_109.setTransform(584.3,-178.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAFgBIAAAEQgCACgEAAQgJAAAAgKg");
	this.shape_110.setTransform(581.7,-179.025);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_111.setTransform(578.375,-178.475);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgJATIAAgjIAFAAIAAAJQACgFADgCQAEgDAFAAIAAAFQgGAAgEAFQgEAEAAAHIAAAPg");
	this.shape_112.setTransform(575.75,-178.55);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_113.setTransform(571.625,-179.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_114.setTransform(570.075,-179.25);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_115.setTransform(567.225,-178.475);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgJATIAAgjIAFAAIAAAJQACgFADgCQAEgDAFAAIAAAFQgGAAgEAFQgEAEAAAHIAAAPg");
	this.shape_116.setTransform(562.7,-178.55);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgFgAgJgJQgDAEAAAFQAAAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_117.setTransform(559.525,-178.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgFAaIAAgfIgFAAIAAgEIAFAAIAAgEQAAgGADgDQACgDAFAAIAGABIAAAFIgGgBQgFAAAAAIIAAADIALAAIAAAEIgLAAIAAAfg");
	this.shape_118.setTransform(556.75,-179.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgJATIAAgjIAGAAIAAAJQABgFADgCQAEgDAFAAIAAAFQgHAAgDAFQgDAEAAAHIAAAPg");
	this.shape_119.setTransform(552.75,-178.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAFgFQAFgGAGAAQAIAAAEAGQAFAFAAAHIAAACIgcAAQABAFADAEQAEADAEAAQAGAAAFgFIAEADQgHAHgIAAQgHAAgFgFgAALgBQAAgGgCgDQgEgDgFAAQgDAAgEADQgDAEgBAFIAWAAIAAAAg");
	this.shape_120.setTransform(549.4,-178.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgMAVQgFgGAAgIQAAgHAFgGQAFgFAHAAQAIAAAFAIIAAgWIAFAAIAAAyIgFAAIAAgIQgGAJgHAAQgHAAgFgFgAgIgDQgEADAAAHQAAAGAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgGgEgEQgEgDgFAAQgFAAgDADg");
	this.shape_121.setTransform(545.675,-179.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgEgDgEQgDgDgEAAQgEAAgDADQgDADAAAGIAAAUIgGAAIAAgjIAGAAIAAAFQAEgGAHAAQAHAAADAEQAEADAAAHIAAAWg");
	this.shape_122.setTransform(541.775,-178.55);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgLAOQgFgGAAgIQAAgHAEgFQAGgGAGAAQAIAAAFAGQAEAFAAAHIAAACIgcAAQABAFAEAEQADADAEAAQAHAAAFgFIACADQgFAHgJAAQgGAAgGgFgAAMgBQgBgGgCgDQgEgDgFAAQgEAAgDADQgDAEgBAFIAXAAIAAAAg");
	this.shape_123.setTransform(537.85,-178.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgPAZIAAgxIAFAAIAAArIAaAAIAAAGg");
	this.shape_124.setTransform(534.25,-179.15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOAUQgFgHgBgJIAAgcIAGAAIAAAbQAAAIAEAEQAEAFAGAAQAHAAAEgFQAEgEAAgHIAAgcIAGAAIAAAbQgBAKgFAHQgGAFgJAAQgIAAgGgFg");
	this.shape_125.setTransform(527.6,-179.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgOASQgHgHAAgLQAAgJAHgIQAHgHAJgBQALAAAJAIIgEAEQgHgGgJAAQgGAAgGAFQgGAHAAAHQAAAIAGAHQAGAFAGAAQAJAAAHgHIAEAEQgJAIgLABQgJAAgHgIg");
	this.shape_126.setTransform(522.6,-179.15);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AASAZIAAgnIgSAZIAAAAIgRgZIAAAnIgGAAIAAgxIAGAAIARAaIASgaIAFAAIAAAxg");
	this.shape_127.setTransform(517.15,-179.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgOASQgHgHAAgLQAAgJAHgIQAHgHAKgBQAKAAAJAIIgEAEQgHgGgIAAQgIAAgFAFQgGAHABAHQgBAIAGAHQAFAFAIAAQAIAAAIgHIADAEQgIAIgLABQgKAAgHgIg");
	this.shape_128.setTransform(511.75,-179.15);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgRAZIAAgxIARAAQAIAAAFAFQAFAEAAAHQAAAIgFADQgGAEgHAAIgMAAIAAASgAgMACIAMAAQAFAAAEgCQAEgDAAgFIAAAAQAAgFgEgDQgDgCgGAAIgMAAg");
	this.shape_129.setTransform(506.925,-179.15);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_130.setTransform(500.575,-178.475);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAGAAIAFgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_131.setTransform(496.25,-179.025);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgLAOQgEgGAAgIQAAgHAEgFQAGgGAHAAQAIAAAHAHIgEADQgGgFgFAAQgFAAgDAEQgEAEAAAFQAAAGAEAEQADAEAFAAQAGAAAFgGIAEAEQgHAHgIAAQgHAAgGgFg");
	this.shape_132.setTransform(493.4,-178.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgLAQQgEgDAAgGQAAgFAEgDQAEgDAHAAIALACIAAgBQAAgKgLAAQgEAAgGACIgCgEQAHgDAFAAQAIAAAEAEQAEAEAAAHIAAAVIgFAAIAAgGQgFAHgHAAQgGAAgEgDgAgHABQgCACAAAEIAAAAQAAADACACQADACAEAAQAEAAADgDQAEgCAAgFIAAgDIgLgBQgEAAgDABg");
	this.shape_133.setTransform(489.425,-178.475);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgFAOIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAGAFAAIAGgBIAAAEQgDACgEAAQgJAAAAgKg");
	this.shape_134.setTransform(487,-179.025);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgEgDgEQgDgDgEAAQgEAAgDADQgDADAAAGIAAAUIgGAAIAAgjIAGAAIAAAFQAEgGAHAAQAHAAADAEQAEADAAAHIAAAWg");
	this.shape_135.setTransform(483.925,-178.55);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgFgAgJgJQgDAEAAAFQAAAGADAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgEgEgFAAQgFAAgEAEg");
	this.shape_136.setTransform(480.175,-178.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgOASQgHgHAAgLQAAgJAHgIQAHgHAKgBQAKAAAJAIIgEAEQgHgGgIAAQgIAAgFAFQgGAHABAHQgBAIAGAHQAFAFAIAAQAIAAAHgHIAEAEQgJAIgKABQgKAAgHgIg");
	this.shape_137.setTransform(475.55,-179.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(470.8,-184.1,134.3,35);


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
	this.shape.graphics.f("#000000").s().p("AgOBAIAAgdIAdAAIAAAdgAgHAUIgIhPIAAgEIAfAAIAAAEIgJBPg");
	this.shape.setTransform(30.075,7.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBAIAAgzIgxhMIAhAAIAdAzIAfgzIAgAAIgxBMIAAAzg");
	this.shape_1.setTransform(20.625,7.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAmBAIgMgcIg1AAIgLAcIgcAAIA2h/IAZAAIA3B/gAARALIgRgpIgRApIAiAAg");
	this.shape_2.setTransform(6.9,7.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BAIAAh/IAyAAQAdAAATASQATASAAAbQAAAbgTASQgTATgdAAgAgeAmIAWAAQAQAAALgKQAKgLAAgRIAAAAQAAgQgKgLQgLgLgQAAIgWAAg");
	this.shape_3.setTransform(-7.075,7.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvAvQgUgTAAgbIAAgBQAAgbAUgSQATgUAcAAQAdAAAUAUQATASAAAbQAAAcgTATQgUATgdAAQgdAAgSgTgAgbgbQgLALAAAQQAAARALAMQAMALAPAAQARAAALgLQALgMAAgQIAAgBQAAgPgMgMQgKgMgRAAQgQAAgLAMg");
	this.shape_4.setTransform(-22.25,7.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBAIAAhlIgnAAIAAgaIBpAAIAAAaIgnAAIAABlg");
	this.shape_5.setTransform(-35.9,7.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAlQgPgOAAgXQAAgUAOgPQAOgPAUAAQAWAAAOAQQALAPAAAVIAAAIIhEAAQAFATATAAQANAAALgKIAPAOQgOASgaAAQgVAAgOgOgAAVgHQgBgJgGgGQgFgGgIAAQgRAAgEAVIApAAIAAAAg");
	this.shape_6.setTransform(68.85,-7.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgPgOAAgWQAAgUAPgPQAPgPAVAAQAYAAAPARIgRASQgKgLgMAAQgKAAgGAIQgHAIAAAKIAAAAQAAAMAHAHQAHAIAKAAQALAAALgKIAQAQQgQASgXAAQgVAAgPgPg");
	this.shape_7.setTransform(58.2,-7.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AARAyIAAg2QAAgUgRAAQgQAAAAAUIAAA2IgcAAIAAhhIAcAAIAAAOQAMgQAPAAQAQAAAJAKQAJAKAAAQIAAA/g");
	this.shape_8.setTransform(47.325,-7.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiAqQgKgIAAgNIAAgBQAAgQALgGQAKgIASAAQALAAAMAEIAAgCQAAgSgTAAQgNABgOAFIgHgVQASgIASAAQAXAAALALQAKAKAAAVIAAA4IgbAAIAAgLQgLANgRAAQgPAAgJgJgAgRATIAAAAQAAAGAEADQAEADAHAAQAJAAAFgFQAHgEgBgIIAAgFQgHgDgKAAQgSAAAAANg");
	this.shape_9.setTransform(35.95,-7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAyIAAg2QAAgUgRAAQgQAAAAAUIAAA2IgcAAIAAhhIAcAAIAAAOQAMgQAPAAQAQAAAJAKQAJAKAAAQIAAA/g");
	this.shape_10.setTransform(25.225,-7.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNBDIAAhhIAbAAIAABhgAgNgpIAAgYIAbAAIAAAYg");
	this.shape_11.setTransform(16.75,-9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSBDIAAhJIgMAAIAAgXIAMAAIAAgGQAAgQAIgHQAHgIAOAAQALAAAJADIAAAXQgHgDgGAAQgKAAAAALIAAAEIAXAAIAAAWIgWAAIAABJg");
	this.shape_12.setTransform(10.725,-9.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAlQgOgOAAgXQAAgUANgPQAPgPATAAQAXAAANAQQAMAPAAAVIgBAIIhCAAQAEATATAAQANAAAKgKIAQAOQgPASgZAAQgVAAgPgOgAAVgHQgBgJgFgGQgGgGgJAAQgQAAgDAVIAoAAIAAAAg");
	this.shape_13.setTransform(1.5,-7.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWBAIgagpIgWAAIAAApIgcAAIAAh/IA5AAQAYAAANANQALALAAASIAAABQAAAcgbAKIAfAugAgagBIAcAAQAKAAAFgFQAGgFAAgIIAAAAQAAgTgWAAIgbAAg");
	this.shape_14.setTransform(-10.15,-8.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAyIAAhhIAbAAIAAAUQAJgXAVABIAAAdIgBAAQgdAAAAAiIAAAkg");
	this.shape_15.setTransform(-26.05,-7.5271);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglAkQgPgOAAgWQAAgUAQgPQAOgPAWAAQAWAAAQAPQAPAPAAAUIAAAAQAAAVgPAPQgQAPgWAAQgVAAgQgPgAgSgSQgGAHgBALIAAAAQABALAGAIQAIAIAKAAQAMAAAHgIQAGgHAAgMQABgKgIgIQgHgIgLAAQgKAAgIAIg");
	this.shape_16.setTransform(-36.3,-7.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrA5IAKgUQAGAEAGAAQAGAAAEgHIgnhhIAeAAIAVBCIAVhCIAdAAIglBjQgHAQgHAGQgFAFgNAAQgNABgMgHg");
	this.shape_17.setTransform(-53.3,-5.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjAoQgJgKAAgRIAAg+IAcAAIAAA2QAAATAQAAQARAAAAgTIAAg2IAcAAIAABhIgcAAIAAgOQgMAQgPAAQgQAAgJgKg");
	this.shape_18.setTransform(-64.425,-7.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag1BAIAAh/IA6AAQAWAAALALQAJAJAAANQAAATgRAJQAYAIAAAWIAAABQAAARgNAJQgNAJgWAAgAgaAnIAgAAQAUAAAAgOIAAAAQAAgOgVAAIgfAAgAgagLIAaAAQATAAAAgOIAAAAQAAgNgSAAIgbAAg");
	this.shape_19.setTransform(-76.225,-8.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-19.3,162.10000000000002,38.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AglAyIAAhjIBLAAIAAATIg1AAIAAAVIAuAAIAAATIguAAIAAAVIA1AAIAAATg");
	this.shape.setTransform(36.75,-103.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAyIgVggIgRAAIAAAgIgWAAIAAhjIAtAAQATAAAKAKQAJAIAAAPIAAABQAAAWgWAHIAYAkgAgUgBIAVAAQAIAAAFgDQAEgEAAgGIAAgBQAAgPgRAAIgVAAg");
	this.shape_1.setTransform(26.9,-103.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAlQgPgPAAgWIAAAAQABgVAPgPQAQgPAVAAQAYAAAPAPQAOAPAAAVQAAAWgOAPQgQAPgXAAQgWAAgQgPgAgVgWQgIAJAAANQAAANAJAJQAIAKAMAAQAOAAAIgKQAJgJAAgNIAAAAQAAgMgJgJQgJgKgNAAQgMAAgJAJg");
	this.shape_2.setTransform(15.2,-103.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAyIAAhAIgcAqIAAAAIgcgqIAABAIgVAAIAAhjIAXAAIAaArIAagrIAZAAIAABjg");
	this.shape_3.setTransform(2.85,-103.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAyIgwg/IAAA/IgWAAIAAhjIAVAAIAuA9IAAg9IAWAAIAABjg");
	this.shape_4.setTransform(-13.375,-103.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAyIgVggIgRAAIAAAgIgXAAIAAhjIAtAAQAUAAAKAKQAJAIgBAPIAAABQAAAWgVAHIAZAkgAgUgBIAVAAQAIAAAFgDQAEgEAAgGIAAgBQAAgPgRAAIgVAAg");
	this.shape_5.setTransform(-23.9,-103.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeAzIgJgXIgpAAIgKAXIgXAAIAshlIATAAIArBlgAANAJIgNggIgNAgIAaAAg");
	this.shape_6.setTransform(-35.05,-103.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAyIAAhjIBKAAIAAATIg1AAIAAAVIAvAAIAAATIgvAAIAAAVIA2AAIAAATg");
	this.shape_7.setTransform(-45.3,-103.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAyIAAhjIAWAAIAABQIAxAAIAAATg");
	this.shape_8.setTransform(-54.425,-103.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F47B1F").s().p("Ap3CKIAAkTITvAAIAAETg");
	this.shape_9.setTransform(-8.5,-101.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-71.7,-115.2,126.4,27.60000000000001), null);


(lib.PIC2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1C262D").s().p("AAEg4IAABxQgNg4ANg5g");
	this.shape.setTransform(222.9758,69.2971,1.0999,1.0999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737985").s().p("AgIAAQgEgNAMgHQAXAXgcASQACgEgFgRg");
	this.shape_1.setTransform(191.7102,51.7529,1.0999,1.0999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D6").s().p("AgGAPQgEgHAAgIIABgQQAKgJAEAIIAGAOIgBASQgFAGgDAAIgBABQgDAAgEgHg");
	this.shape_2.setTransform(188.2451,51.5936,1.0999,1.0999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E6A78").s().p("AggABIAAAAQAKgGAQgDIAagDQAGgCAEADQAEADgBAHIgWAAQgMACgJAGQgFAFgEAAQgIAAgFgMg");
	this.shape_3.setTransform(204.2527,59.2932,1.0999,1.0999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C7185").s().p("AgFgLQAZgIAXAIIgGAHQgTgCgVAHIgnAPQAKgSAbgJg");
	this.shape_4.setTransform(217.1461,62.2091,1.0999,1.0999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37424D").s().p("AAKAzQgCgKgFgBIgBAAQAOgSgSgVIgbg+QATAVAPAgQAJARAQAnIgNAOQgFgCgCgJg");
	this.shape_5.setTransform(222.3984,109.5001,1.0999,1.0999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010101").s().p("AgHAbQgHgEADgGQACgEgLgVQgHgPAXgGIAZAnQAEALgFAFQgEADgLABIgDAAQgFAAgEgDg");
	this.shape_6.setTransform(208.6099,78.1351,1.0999,1.0999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464F5D").s().p("AANAkIgzhvQAKAAAEAFIAGAKQAFANAaA1QAVApAFAdg");
	this.shape_7.setTransform(206.5591,70.8895,1.0999,1.0999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#191B1C").s().p("AhXAiQBXg2BJgTIAPAHIinBIg");
	this.shape_8.setTransform(158.4091,74.8518,1.0999,1.0999);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#010101").s().p("AAMAkQgYgLgLgIQgcgRAMgZQAHgNAKgHQAMgGAOAFQAMAEAQgIQAKAKABAJQADAKgIALIgfAcIAgAZIgIAIQgOgDgFgMg");
	this.shape_9.setTransform(218.5208,115.1648,1.0999,1.0999);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#86A2B2").s().p("AgCA4QADgWABgQQACgpgBgKQgDgcgUgRIAGgOQAaAXAHAtQAHAtgQAlQgEAKgPAZIAHglg");
	this.shape_10.setTransform(225.9096,70.287,1.0999,1.0999);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#374048").s().p("AACBoIgCgBQgOgOABgZIAAiRIAGgHQAHgEAAgKQAFgCADACIAGAGIgGAPIgCAMQgNA7ANA2IgBA8g");
	this.shape_11.setTransform(222.7284,70.672,1.0999,1.0999);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9E7E4").s().p("AgMhPIACgNQAUARADAcQABAJgCAqQgCAZgJAzIAAgBQgCANgMABg");
	this.shape_12.setTransform(224.8065,71.8544,1.0999,1.0999);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#17191B").s().p("AApAyIAAgRQAAgQgGgEQgGgEgOAHQgNAHAEANQAGASgCADQgHgCgCgKQgBgLgEgCIgGgPQgEgHgLAIIgMANQgRgaAEgaQAEgaAYgQQALAKAAAUQAAAdABAEQAJAFARAAQAVgBAHADQADAIAAAUQgBATAFAKQgJgEgBgKg");
	this.shape_13.setTransform(189.9896,47.7106,1.0999,1.0999);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#16191C").s().p("AgBAqQgGgEgGgOIgGgZQAAgHgEgDQgEgEgGACIgbAEQgQACgKAHIgVgPQgMgJAMgQQAOgIAGAIIAJASQA5gIAMAIQAKAIACAvQAVgbAfgGQAUgEAnAEQAAAJgIAEQgXgJgaAJQgbAJgKATQgHAEgGAAQgFAAgDgDg");
	this.shape_14.setTransform(210.1682,59.4755,1.0999,1.0999);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AgkBuQgIg2gUgQQgTgQg0AAIgJgIQAXgKAIgMQAIgPgKgYQgPgkAOgkIAHAOQAHAHACAAQACAAADgIQAZhJBQgBQBOANAKBLQAZAaAWgaIAAAhQgYAEgMAbQgMAaALAcQgKACgJAPQgKARgFAIQgUAbgkghQgJAUgGAGQgJANgUACQAOAOATAdQATAVAYACQgEAGgJABIgPABQgqglgQggg");
	this.shape_15.setTransform(151.3419,30.1115,1.0999,1.0999);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202326").s().p("AgNASQADgFAIgBQAIgCADgDQgLgHgXgEQgagFgKgFIAMgBQAGgBADgFQA6AGAsAlg");
	this.shape_16.setTransform(247.9171,95.7782,1.0999,1.0999);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#43505F").s().p("AAkBLQgSgggPgSIhLiRQAFgHAGAAIAKgBIAAAHQAGA2AwA0QAEADAIARQAHAOAOAAQgIAXALAWIAZAlIAIAKQADAHgIALIgfg2g");
	this.shape_17.setTransform(229.9485,111.26,1.0999,1.0999);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#475E7A").s().p("AhvALIABgHQA6geBeAEQAKAFAaAFQAXAEAMAIQgDADgKABQgHABgDAFQgNAJgSgEQhDgPhGATQgOAEgFAAQgKgBgEgLg");
	this.shape_18.setTransform(236.5052,96.6543,1.0999,1.0999);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#070608").s().p("ABACoQgHgPgNACIgyABQgfABgUAHQgEgOgTgKQgWgLgEgJQgMgWgPgDQgPgDgUAMQgQgCAAgOQAMAHANgHQARgJAFAAQgHgUgDgZIgDgrIgYgGQgNgDgKACIAGgPQAkAIANgJQAMgKgIgcIAIgIQAjgEgVgdIAMgNQAcABAPgIQAOASASAgIAeA2QAJgLgEgHIgGgKIgZglQgLgXAGgWQAOgFAUABIAkABQAAgEAIgVQAGgPgMgLIAqAMQgOAAgFAMIgHAVQgDAJAIAGIAOAHQAbARATAXIAQAaQALARAOAAQAOAAAOgQQAFAEABAGIAAALQgLgCgLAEIgUAJQAGApgLA0IAcAPIgHAFQgDAAgMgFQgIgDgHADQgVAigxAkQAEAEAIANQAFAMAJADQgDAFgIgCQgJgBgCAFQgCgCgKgWgAgMBpQgIAHgDAIQAXAHAlgFQgDgRgRAEQgSAFgEgMIAAgBQgCAAgFAEgAhcAvIADAXQANAjAmAIQABgIgFgGIgIgIQgHgjgGgGQgEgEgKAAIgPABgABFA7QgEACgOAMQgIAIAFAJIAJAOQAPABAMgLQAFgGAKgSQAAAAAAgBQABgBgBAAQAAgBAAAAQgBgBAAAAQgEgDgDABQgIgGgHAAQgDAAgEABgABhAcQABANANAHQAHgVABgIQAAgPgLgNQgMAZABAMgABTAhIAEgRQADgKgEgIQgbAGAYAdgAA4g8IAbATQAHgXgOgLQgUgLgJgIQgFAWAOAMgAAAhXQAAAJADAEQAHAEAJgDQAIgSgFgLQgFgDgEAAQgLAAgCASg");
	this.shape_19.setTransform(237.1651,128.5566,1.0999,1.0999);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C919A").s().p("AgpgJIBTAAQgIAIgOgBQgQgBgHABQgKAAgEAAQgHACAAAJg");
	this.shape_20.setTransform(187.0351,94.4858,1.0999,1.0999);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F4A58").s().p("AAegQQgTAggoABg");
	this.shape_21.setTransform(132.4229,124.9268,1.0999,1.0999);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E5E73").s().p("AAFADQgGgDgJAHQgFAFgEgEQgDgEAAgHQAGgHAKAAQAFgBALACQAXADgQARQgIgGgEgCg");
	this.shape_22.setTransform(173.5274,55.3484,1.0999,1.0999);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#586677").s().p("AgUAFQgGgEAHgLIArAEQgaANgEADQgMgDgCgCg");
	this.shape_23.setTransform(76.2559,116.6497,1.0999,1.0999);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E7E9A").s().p("AgogDQABgBALgBIA0gCIAUACQgOAHgdAAQgeAAgNAGQgEgJAGgCg");
	this.shape_24.setTransform(64.7111,122.0669,1.0999,1.0999);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F4858").s().p("AAAAGQgZAAgQgGIAKgBQAHgBADgFIA/AHIgBAIQgIgCghAAg");
	this.shape_25.setTransform(122.2209,126.7967,1.0999,1.0999);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3541").s().p("AgdgXIAHgGIA0A7QglgVgWggg");
	this.shape_26.setTransform(138.8025,49.9655,1.0999,1.0999);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#435361").s().p("AglAQQAIgNAWgEQAYgHAIgIIANgCQgJASgYAHQgbAGgNAGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAg");
	this.shape_27.setTransform(89.0025,116.0447,1.0999,1.0999);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#303840").s().p("AAGgfIAEgKQADgFAHAAIgXBLIgFAMQgDAGgIAAg");
	this.shape_28.setTransform(193.8548,122.9169,1.0999,1.0999);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#556173").s().p("AggAbIAggZIAhgcQgBANgKAKIgOAQIgaAOg");
	this.shape_29.setTransform(139.765,60.745,1.0999,1.0999);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#464F5A").s().p("AgeAGQACgbAYALQAGADALABIASABIgBAFIgTAAQgCAEAEAEQAGADAAADg");
	this.shape_30.setTransform(185.3852,105.9327,1.0999,1.0999);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C6683").s().p("AgKARIgGgKIABgQQACgKAFgFIAZAJIgSApQgGgEgDgFg");
	this.shape_31.setTransform(110.3965,78.5916,1.0999,1.0999);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#131417").s().p("AgMAeIAJgdQAFgRgCgNIANgOQACAdgDAQQgFAYgNASQAAgKgGgEg");
	this.shape_32.setTransform(190.2415,116.6222,1.0999,1.0999);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#556B80").s().p("AgdAeIAcgiQAPgVAQgLIgbA7QgHAKgEACQgDACgDAAQgHAAgIgHg");
	this.shape_33.setTransform(135.0902,70.0457,1.0999,1.0999);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1F252B").s().p("AABANIgWgTQAAgCgFgEQgFgDACgFIATAAIAoAZQgFAMgGAEIgDAAQgHAAgIgIg");
	this.shape_34.setTransform(189.8336,108.2351,1.0999,1.0999);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#50637D").s().p("AgcACQgGgLgBgLIBHADIAAAGQgTADgIADQgMAFgGAPIgHAGIgMgTg");
	this.shape_35.setTransform(137.3726,45.0158,1.0999,1.0999);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0F1113").s().p("AhQAPIAKgDIAJgCQA7gBANgBQAogFAbgTQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQgBAIgHACIgNACQgJAEADAEIAHAIIh4ABg");
	this.shape_36.setTransform(76.2196,119.5921,1.0999,1.0999);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#607C96").s().p("Ah3ACQAGgFAMAAIAUABQB+gBBLAHg");
	this.shape_37.setTransform(77.0131,123.2769,1.0999,1.0999);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#15181A").s().p("AhCgQIANgGIBkAZIAIAHIANAGIAAAHQg0gJhSgeg");
	this.shape_38.setTransform(143.5598,78.1791,1.0999,1.0999);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333A45").s().p("AgBADQg2ABgOgBQAXgOAxACQAyACARARQgdgIgqABg");
	this.shape_39.setTransform(128.1331,101.045,1.0999,1.0999);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#53647B").s().p("AAiAQQgCgNgKgBIgTAAQgFAAgTAFQgPAEgKgCQAFgRARgEQAKgDATgCQAQgEAKAJQAJAGAHAPQABAKgGAAQgDAAgFgDg");
	this.shape_40.setTransform(182.8633,55.2706,1.0999,1.0999);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#839BAE").s().p("AgPAAQgPghAMgPQAXAkAUA9QgZgOgPgjg");
	this.shape_41.setTransform(112.248,112.6349,1.0999,1.0999);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#45576D").s().p("AgtAJQgDgJAHgHIAPgLIBJAeIgpACQgWAAgOAEIgDABQgHAAgFgKg");
	this.shape_42.setTransform(125.732,53.3259,1.0999,1.0999);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0E0E0F").s().p("AgdApIAbg7QAEgKAAgCQAAgHgKgBIAagPIAMAPIAAAAQgdA+gXAdQgBgJgGgDg");
	this.shape_43.setTransform(138.6651,68.0321,1.0999,1.0999);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#151719").s().p("AgaA2QAIAAADgFIAEgNIAYhKQgCgSAJggQALAVgGAcQgDAQgKAeIgfBRg");
	this.shape_44.setTransform(194.6862,122.0944,1.0999,1.0999);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#425065").s().p("AAEAGQAFgMARg4IABAAIANAUQgJApgQAXQgTAdgjAMQAcgUAPglg");
	this.shape_45.setTransform(191.6549,84.6963,1.0999,1.0999);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#353B46").s().p("AhFgXQAPgZAlgCQArgDAcAXQAdAYgBAlQgZhShNALQgeAEgLATQgMARgGA0QgFgzAPgYg");
	this.shape_46.setTransform(163.8436,124.8256,1.0999,1.0999);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#44576E").s().p("AgIAiQgTgDgKABIAGghQAFgTAJgNIADAJIAKgJQAEAQANgBQAVAAAEABQgGAHgTAIQgPAHgHAJQAFAGAJAAQAKABAEAEQgKAJgOAAIgDAAg");
	this.shape_47.setTransform(113.6963,71.117,1.0999,1.0999);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#465B72").s().p("AAnAaQgEgDAEgGQAEgGgEgEQgrAAgNgBQgggCgZgJQAHgNAFgDQAIgHAMADIBvAaQAGACAAADIgCAIIgQAIQgIAFgHAAIgDgBg");
	this.shape_48.setTransform(162.1764,53.3014,1.0999,1.0999);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#667E97").s().p("AhmAIQBygaBbARIAAAJg");
	this.shape_49.setTransform(87.5451,80.4198,1.0999,1.0999);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#40516B").s().p("AAcAhQAIgNgDgFQgEgDgGADQgIAEgDgCQgBgFAHgGQAHgGAAgGQgKgDgjgBQgegBgQgJQAFgCAXgDQATgCALgIIglgDIAAgFIAogBQANAIAAgPQAJAUARASQAMANAVARIgGAMQgIACgIAIIgNANQgLgJAHgKg");
	this.shape_50.setTransform(146.3922,47.9306,1.0999,1.0999);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F1113").s().p("AAYBUIgqgJIAjgpQgDgCgMgQQgIgKgLAAQACgOgLgQQgOgQgFgJIgLgOQgGgKAAgKQAPALASAdQASAdANAJQAGAFAHAOQAHALAOgDIANATQgHALAGAFQACACANADQgOAWgXAAIgCAAg");
	this.shape_51.setTransform(68.626,110.9598,1.0999,1.0999);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#151A1E").s().p("AAlAhQARgSgXgDQgMgCgGABQgJAAgGAHIgHgBIACgHQAAgEgFgBIhwgaQgNgEgIAHQgEAEgHANQgCgMgGgDIAGgMIAPgBQAJAAAEgGIBYATQAzALAkAFQAUABAZgFIAqgLIAMgOIgBARQAAAJAEAGQAFAHAEgBQAEAAAFgGQACAHgHAHQgIAIAAAFQgHgQgIgGQgLgIgPADQgVACgKADQgRAEgEASIgKAGIgEAAQgEAAgEgDg");
	this.shape_52.setTransform(171.2479,52.9537,1.0999,1.0999);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#121214").s().p("AiEDQQAfiAAZhAQAnhkA+hFQAagcASgMQAbgTAdgCIAIAIQg4AOgqAuQgeAgghBAQgsBPgRBOQgJAOgFASIgGAjIgBAKQgGAFgBAKIgBARg");
	this.shape_53.setTransform(121.6434,55.6027,1.0999,1.0999);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#51647A").s().p("AC4AXQgogCgagGQgqgKhMgBQhTAAgjgGIB5AAQhGgIiEABIgTgBQgMAAgHAGQgMACgFgBQgKAAgHgGQANgGAfAAQAdAAAOgIIB5AAQA9AABqATQB1ASAzAEQgDAEgHABIgLABIhDgBg");
	this.shape_54.setTransform(89.91,124.0193,1.0999,1.0999);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#485464").s().p("AjvCOIgJgEIAHgHICWAAICUABQAgAAAUgLQAUgMAPgbIAlhFQAXgoAMgeQAOgRAFgZQADgRgCgcQAQAOgDAUQgBAKgKAXQgmBXg3BeQgWAmgpABQhBAChFAAQhaAAhhgDg");
	this.shape_55.setTransform(165.7148,127.7962,1.0999,1.0999);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D627C").s().p("AjHA0IgMgHICohIQBggbBXAEQAuABAMAMQAMALABAsIABAOIgCATIgNgTQgDgggJgJQgJgKgfgDQidgNiIBJQgZAOgYAAIgCAAg");
	this.shape_56.setTransform(172.9558,74.3353,1.0999,1.0999);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A6079").s().p("ABxBbQANgxAKghQACgFgFgTQgDgOAMgIQgOgIgGgFQgKgIgBgMQgBgIgHgCIgMgDQgtgOg+gPIhtgaQgVgFgHgDQgOgGgHgMQAUgMAcAEIAvAHQBXAgAvAIQA2ATATAIQAeAMALAZQALAYgJAfQgYBUg3BgIAVhTg");
	this.shape_57.setTransform(144.91,94.5509,1.0999,1.0999);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#506781").s().p("AigCZQAQhNAshRQAjhAAdggQAqguA4gOQA1gBASARQAUAQAIA2QAAAOgOgHQgPgXgdgHIg0gFQgFgGAHgJQAHgJgCgFQgiAVgEASQgFASASAnIhCgNQAMAOAWAJQAaALAJAHIhpAAQgBAGAEADIAGAFIgQAKQgHAHADALIgIgEQgEgCgBAFIgVAxQgNAdANAYIgBAHQgFAEgMABQgMAAgEAGIgJAJg");
	this.shape_58.setTransform(129.5355,50.6224,1.0999,1.0999);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#526982").s().p("ABvAQQgygbg1gFQhugMhhA5QgIgGgGgSQgEgQgJgFIABgFQAlgXAagMQAkgQAggDQCUgQB5BbQASANAiAhQgDAJgIAJIgRAOQgvgpgpgVg");
	this.shape_59.setTransform(83.4478,96.5822,1.0999,1.0999);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020202").s().p("ABXFsQABgLgBgGQgEgfgCgFQgHgTgUgHQgPgGACgQQACgcgegRIAEgLIAFgKQAWgbgRggQgZgsARg8IALgYQAFgOgDgMQgIACgSAKQgOAIgKABQgFgXgBgMQgCgUAbgEQgBgqgNgLQgNgKg0AAQgCgIAAgFQAAgtgMgMQgMgLgugCQhbgDhdAaIgPgHQAPgHAVgGIAmgKIANgCQAHgCAAgIQABgMAHgDQAEgBAMAAIAhgCQATABAPAPQAJAKAbACIAuADIASghQgVACAAgPQABgYgCgDQgWAegYgCQgbAAgNgCQgXgDgNgQQAKgDAMgNQAMgPAIgDQAOAJgCgQQAAgFAIgIQAHgIgCgGIABgTQAFACABAMQACAKAHACQAcgSgXgXQAagOAAAeIgBARQABAKAKAFIAYABQgLARAMAJIAUAPQAIATAPgLQAIgHAMgBIAXgBIAGAaQAMAdAWgNIAngPQAXgHASABIAACSQAAAZANAOQgGABgOAEQgMAFgJgBQgKgCAAAKQgBAMgFABIASAEQAMADgPAPQAOAIALAYQAMAZgGAPQBLgVAZgEQA4gJAtAMQgDAFgHABIgLABQhfgEg7AfIgKAAQgGABgFAHIBMCSQgOAIgcgBQgQgngJgSQgQghgSgUIAaA/QgQAHgMgEQgPgFgMAHQgKAGgHAOQgMAYAcATQAEADAgAPQgRAFgHASIgKAfIgGAPIgCA1QgFgGgBgJgAAdBFQgEAvAeAgIBEg/QgjgDgKgLQgJgKAAgiIgDgsQgiAngDAvgAgYkAIA0BvQgXAGAHAQQALAVgCAEQgDAHAHAEQAFAEAIgBQALgBAEgEQAFgFgFgKQgFgdgVgpQgbg2gEgOIgFgKQgFgEgIAAIgCAAg");
	this.shape_60.setTransform(204.9642,90.8035,1.0999,1.0999);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#010101").s().p("AgIEpIgrgPQgbgKgSgBIghgPQhbg5gxhoIgLgwQgFgcAAgUQAAgMgDAAQgRgBABgMQAEgOAAgGQgBgGACgKIACgQQAGgJAHgWQAGgUAIgKQAeARgDAdQgBAQAOAFQAUAHAHATQACAGAFAfQABAFgBAKQAAAKAGAFIAPA1QgBAOAQABQAkBLBFAMIAFAHQADAEADABQAmAIAagBQAkgBAcgRQADgFAIACQAJABACgFQAxgbAYgsIAHgMQACgIgJgFIAIgGQALgDADgKIAEgTQAHgigGg0IAAgMQgBgGgFgEIgMgeQgIgSgUAAQAIgLgHgJIgOgNQgJgMgRgLIgdgRIgqgNQgdgCgOACIggABQgUADgJAPQgwg0gHg2QAFAMAJABQAFAAAOgEQBFgVBEAQQASAEANgJIAWABQAEAKAKADQBAAbA3BDIAMAOQA/B5gWBpQgnCFhnBEIghAPIgfAIQgHABgBACIgHADIgDACIgXAKIgDABg");
	this.shape_61.setTransform(236.276,130.1508,1.0999,1.0999);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#010101").s().p("AnDJAQgLgUgQAAIgbgGIAAAAQgNgLgTgEQhVg/gxhcQgehFAIhpQAXhYAkgyIglgJIhHCTIgFgNIAYhAQgGgCgJAGQgIAFgGgFQADgMAJgSQANgWADgIQAHgHALgVQAJgUALgHIAUASIBXhOQAJAFAFARQAEASAJAFQBig5BuAMQA1AFAyAcQApAUAuApIARgOQAJgJADgJIgZgXQgPgOgMgJQh4hbiVAQQggADglARQgYALgnAXQgoARgcAiQgIAIgLAAIgVgBQgQgKACgUQADgegBgEQAYgGAmAEQACAEgEALQgFAJAIAGQBMg+B5giQgKggAKgQQALgQAhgFQAggEArgBIBLAAQAPAAAIgBQALgDAJgIQAPgMAUAFQAUAGAIARIAPAJIAEAKQAEAGAGADIASgqIgYgJIABgKQAJgBATACQASABAKgKQgEgEgLAAQgJgBgEgGQAFgJARgHQATgIAFgHQgCgCgWABQgOAAgEgPQAEgGAMAAQANgBAEgEQABgGgBgBQgLgYAMgdIAUgxQACgFAEACIAIAEQAHAMAIgDQANgFAXAAQAeAAALgCIhKgeIgFgFQgDgEAAgGIBqAAQgIgHgbgLQgYgJgMgOIBFANQgTgnAEgSQAFgSAhgVQACAFgGAJQgHAJAFAGIA0AFQAdAHAPAXIgnAAIhJgDQABALAGAMIAMAUQAWAgAmAWIg0g9QAFgOAOgHQAHgDATgDIAlACQgLAJgSACQgYACgFACQAQAJAfABQAjACALADQAAAGgIAHQgGAGAAAFQADABAIgEQAGgDAFADQACAFgIANQgHALALAIIANgNQAIgIAIgCQAGADACAMQAYAKAhACQAMABAtAAQAEAEgEAGQgEAFADAEQAIABAKgFIARgJIAHAAQgBAIAEAEQADAFAGgFQAIgIAIAEQAEACAHAGQAGAFAFgDIALgFQAKACAPgEQASgFAGAAIATAAQALABACANQgIADgMAPQgLANgKADQgPAKgQADQgRADgOgGQgVgJghAAQgjACgTgBQg1gDgbgCQgugFghgNIgkAwIgNgOIAPgRQAKgKABgNIgiAdIggAZIANAAQALABABAHQAAADgEAKQgQAKgRAVIgcAjQAMALAJgFIAMgMQAGACABAKQgFAKAHACIALAEIgNAGIgwgIQgcgDgTALQAHANAOAGQAGADAVAFIBuAZQA+APAuAPIAMACQAGADACAIQABALAKAJQAGAFANAIQgLAHADAPQAEATgBAGQgLAhgMAwIgVBSQA2heAYhVQAKgggMgYQgLgYgdgNIhJgbIAAgGQAZABAagOQCHhLCfAOQAfADAIAJQAJAKAEAgIgXBFQgRAlgbAUQAjgMAUgeQAPgYAJgoIADgUQA0AAANALQANAKABAqQgbAEACAUQABAMAFAYQgSBYgaA9IgJAUQgDALACAKQgKAeACATQgHAAgDAFIgEAKIgaBPIAHAiIgkBxQgjA7g8gEQhKgGg5ACIhAgCQglgBgbAMQgRAIgSgBQgUAAgMgLQgKgKgMgCQgFgCgRAAIiGAAQgOAAgIgEQgJgFAAgPQAGgEARACQAPACAIgHQgTgIgegDQghgDgQgCQgVgDgNAWQgyBShBAgIg0AWQgMgCgOAHQgPAKgIAEQgiABgeAAQgeAAgbgBgAm1GGQgEACACAEIACAHQgMAFgFAMQgCAHAAARQAlAPAeACQAkACAigRIgRggQABgUgUAAIhLAAIgHgEIAAAAgAlDGWQADAHAEAMQAFALAHAFQANgDAOgKIAXgWQgagDgHAAIgIgBQgPAAgNAEgAojFtQAUApAxAfQAIgHAEgMQADgHADgRQgJgBgLgKIgRgSQgKgLgNAAQgMAAgPALgABwGmQgNAAgeAFQATAHAYABQAOAAAdgEQgSgJgWAAIgDAAgAJGF/QgPAkgPAPQAdgMALggQALgoAHgSQgNAOgPAlgAn8FHIFnACICwAtIA6AOQAjAHAaAAIAJAEQCsAHCXgFQApgCAVglQA2hdAohZQAKgYAAgKQADgUgQgOIgOAOIgSgUQgMgLgOgBIgYAyQgPAcgPATIBGAUIAQgZQAFAEACAKQgMAdgXApIgmBFQgOAcgVALQgUAMgfgBIiWgBIiVABIh4gWIAAAAQgIgEgrgKQgigIgQgTQgOALgWgGQgggKgGAAQgUgGgXAAIlEgBgAHAFWQgJAJABAMQARAJAIgJQAGgEAFgSQAPgcgDgZIgRARQgJALACALIAAAAIgQAPgAorFgIAigOIgDgkQAlgDAbABQgZgQgnACQgEgSgQgLIghgPQgHA6AdA0gAFwFFQgPgDgRgKIgegTQAXAlAngFgAFoCzQgkADgPAYQgQAaAFAyQAHgzALgTQAMgSAdgEQBOgLAZBTQABgngcgXQgagVglAAIgKAAgAmbDdQAjAGBTAAQBNABApAKQAaAHAoABIBEACQAQAHAZAAQAhAAAIABIABgIIg/gHQgzgDh0gUQhsgSg8gBQgGgFgBgDQgDgEAKgEIAMgDQAHgDABgIQANgGAbgGQAYgHAJgSQAGgMgBgHQgCgKgMgGQgwgcguACQgHAQAFAIQAEAJARACQAfAFAoAWQgIAJgYAGQgXAGgHAMQgcAUgoAFQgNABg8ABIgTAFIg1ACQgKAAgCABQgGADAFAJQAGAHAKAAQAGABAMgCgAA/D5QApgCASghgAnOC8QAYACAOgXIAfgSIgsgDIgOgUQAOgMAcgGQASgDAEgKQADgJgFgQQg7ADgkAaQgPgKgRgcQgSgegPgLQABALAFAJIAKAPQAGAJANAQQAMAPgDAPQgSATggAxQALALAOgDIAZgHIArAJgAhqB4QAPAjAaAOQgUg+gYgkQgMAOAPAjgAIfBBIAyAIIAWAUQALAKAHgDQAGgDAGgMQATgVgHgdIg0ARIgSgBQgLAAgHgEQgHgDgEAAQgNAAgCAVgAJPgiIAWARQAKAEgHAQQgHAWADAHQApgFANgVQANgTgCg2IgtANIhVAAIARATQAHgFAGAAQAHAAAHAGgAB7AZQgQgTgygCQgygCgWAPQAOACA1gBQArgBAcAIIAAAAgAmiikIDOAAIABgKQgjgHgmAAQg+AAhIARg");
	this.shape_62.setTransform(122.2209,99.4768,1.0999,1.0999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(39.5,10.5,230.39999999999998,152.5), null);


(lib.heading_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgaIAbAAIAAAag");
	this.shape.setTransform(55.725,11.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgOAOAAQAOAAAJAJQAIAIAAAQIAAA7g");
	this.shape_1.setTransform(48.075,7.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgOAFIgGgUQARgHARAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgPAAQgOAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFAAgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_2.setTransform(37.5,8.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAiQgOgOgBgTIAAgBQAAgTAPgOQAOgNAUAAQAVAAAOANQAOAOAAATQAAAUgOAOQgOAOgVgBQgUAAgOgNgAgQgQQgHAHAAAJQAAAKAHAIQAHAHAJAAQALAAAHgHQAGgHAAgKIAAgBQAAgJgHgHQgHgIgKAAQgKAAgGAIg");
	this.shape_3.setTransform(27.1,8.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqA8IAAh2IAaAAIAABdIA7AAIAAAZg");
	this.shape_4.setTransform(16.675,6.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAjQgOgNAAgVIAAgBQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIAAQgPgBgDAUIAmAAIAAAAg");
	this.shape_5.setTransform(0.625,8.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_6.setTransform(-7.075,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgNgOAAgTIAAgBQAAgTANgOQAOgNATAAQAXAAAOAPIgQARQgKgKgLAAQgIAAgHAIQgGAHAAAJQAAALAGAHQAHAHAJAAQALAAAKgJIAPAPQgPAQgWAAQgTABgOgOg");
	this.shape_7.setTransform(-14.4,8.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_8.setTransform(-21.875,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQA+IAAgzQAAgRgQAAQgPAAAAARIAAAzIgaAAIAAh7IAaAAIAAAuQAMgPAOAAQAOAAAJAJQAIAJAAAPIAAA7g");
	this.shape_9.setTransform(-29.675,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAjQgOgNAAgVIAAgBQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIAAQgPgBgDAUIAmAAIAAAAg");
	this.shape_10.setTransform(-40.225,8.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLA8Igwh3IAdAAIAeBTIAfhTIAdAAIgwB3g");
	this.shape_11.setTransform(-51.775,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_12.setTransform(88.825,-8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgRAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_13.setTransform(81,-6.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAuIAAgxQAAgTgQAAQgPAAAAATIAAAxIgaAAIAAhaIAaAAIAAAOQAMgPAOAAQAOgBAJAJQAIAKAAAQIAAA5g");
	this.shape_14.setTransform(70.975,-7.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiAiQgOgNgBgVIAAAAQAAgTAPgNQAOgOAUAAQAVAAAOAOQAOANAAATQAAAUgOANQgOAPgVAAQgUAAgOgOgAgQgRQgHAIAAAJQAAALAHAGQAGAIAKAAQALAAAHgHQAGgHAAgLIAAAAQAAgJgHgIQgHgHgKAAQgKAAgGAHg");
	this.shape_15.setTransform(60.05,-6.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_16.setTransform(51.875,-8.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAZAAIAAAXIAVAAIAAAXIgVAAIAAAlQgBAKAJAAQAHgBAGgDIAAAVQgJAFgLAAQgaAAAAgcg");
	this.shape_17.setTransform(45.65,-8.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgNAFIgHgUQARgHASAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgRAAQgNAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFAAgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_18.setTransform(37,-6.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASAAQAWAAAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_19.setTransform(26.975,-6.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbAvIAAhaIAbAAIAAASQAHgVAUABIAAAbIgBAAQgaAAAAAfIAAAig");
	this.shape_20.setTransform(18.6,-7.0506);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcAhQgOgNAAgUIAAAAQAAgTAOgNQAOgOAUAAQAWgBAOAQIgQARQgJgKgMAAQgJAAgFAHQgHAIAAAJQAAALAHAHQAGAHAKAAQAKAAAKgKIAQAQQgQAQgWABQgTAAgOgPg");
	this.shape_21.setTransform(9.95,-6.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASAAQAWAAAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_22.setTransform(-0.225,-6.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVA7IgZgmIgUAAIAAAmIgaAAIAAh2IA1AAQAXABAMALQAKALAAARQAAAagaAKIAdAqgAgYAAIAZAAQAKgBAFgFQAFgEAAgHIAAgBQAAgRgUAAIgZAAg");
	this.shape_23.setTransform(-11.075,-8.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASAAQAWAAAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_24.setTransform(-27.975,-6.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_25.setTransform(-35.675,-8.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAxIAAAMIgaAAIAAh7IAaAAIAAAuQALgPARAAQARAAALANQANANAAAVQAAAWgNANQgLAMgRAAQgQAAgMgOgAgPgCQgGAGAAAMQAAALAGAHQAHAHAIAAQAJAAAHgHQAGgHAAgLQAAgMgGgGQgHgHgJAAQgIAAgHAHg");
	this.shape_26.setTransform(-43.775,-8.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_27.setTransform(-52.225,-8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAtIgSgcIgSAcIgbAAIAggtIgfgtIAcAAIAQAbIARgbIAbAAIgeAtIAgAtg");
	this.shape_28.setTransform(-59.725,-6.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASAAQAWAAAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_29.setTransform(-69.925,-6.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_30.setTransform(-77.625,-8.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgsA7IAAh2IBZAAIAAAZIg/AAIAAAZIA3AAIAAAWIg3AAIAAAug");
	this.shape_31.setTransform(-85.375,-8.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-18,186.9,36);


(lib.fr2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgOAPIAAgcIAdAAIAAAcg");
	this.shape.setTransform(166.925,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAlQgOgOAAgXQAAgUAOgPQANgPAVAAQAXAAANAQQALAPAAAVIgBAIIhCAAQAEATASAAQANAAAMgKIAPAOQgOASgaAAQgVAAgPgOgAAVgHQgBgJgGgGQgFgGgIAAQgRAAgDAVIAoAAIAAAAg");
	this.shape_1.setTransform(158.7,39.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAhIAAgtIgLAAIAAgYIALAAIAAgZIAbAAIAAAZIAXAAIAAAYIgXAAIAAAoQAAAJAJAAQAIABAGgEIAAAWQgJAGgNAAQgbAAgBgdg");
	this.shape_2.setTransform(149.2,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAqQgKgHAAgOIAAgBQAAgPALgIQALgHASAAQALAAAMAEIAAgBQAAgTgVABQgNAAgOAEIgHgUQATgJATABQAWgBAKALQALALAAAVIAAA4IgbAAIAAgLQgLAMgSAAQgOABgJgJgAgRATIAAABQAAAFAEADQAEADAHAAQAIAAAHgFQAFgFABgHIAAgFQgIgDgKgBQgSAAAAAOg");
	this.shape_3.setTransform(139.95,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWBAIgagpIgWAAIAAApIgcAAIAAh/IA5AAQAYAAAOANQALALgBASIAAABQABAcgcAKIAfAugAgagBIAcAAQAJAAAGgFQAGgFAAgIIAAAAQAAgTgWAAIgbAAg");
	this.shape_4.setTransform(128.7,38.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAhIAAgtIgLAAIAAgYIALAAIAAgZIAbAAIAAAZIAXAAIAAAYIgXAAIAAAoQAAAJAJAAQAIABAGgEIAAAWQgJAGgNAAQgbAAgBgdg");
	this.shape_5.setTransform(112.3,38.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAqQgKgHAAgOIAAgBQAAgPALgIQAKgHASAAQALAAANAEIAAgBQgBgTgTABQgNAAgOAEIgHgUQASgJASABQAXgBALALQAKALAAAVIAAA4IgbAAIAAgLQgLAMgRAAQgPABgJgJgAgRATIAAABQAAAFAEADQAEADAHAAQAJAAAFgFQAHgFAAgHIAAgFQgIgDgKgBQgSAAAAAOg");
	this.shape_6.setTransform(103,39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggAlQgPgOAAgXQAAgUAOgPQAOgPAUAAQAWAAAOAQQALAPAAAVIAAAIIhEAAQAFATATAAQANAAALgKIAPAOQgOASgaAAQgVAAgOgOgAAVgHQgBgJgGgGQgFgGgIAAQgRAAgEAVIApAAIAAAAg");
	this.shape_7.setTransform(92.25,39.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAyIAAhhIAbAAIAAAUQAJgXAVABIAAAdIgBAAQgdAAAAAiIAAAkg");
	this.shape_8.setTransform(83.3,39.4729);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpAwQgTgTAAgdIAAAAQAAgaATgUQATgTAcAAQAdAAAVASIgSAVQgPgNgSAAQgOAAgLAMQgLAMAAAPQAAARAMAMQAKAMAQAAQAQAAALgIIAAgSIgdAAIAAgYIA4AAIAAA3QgYAUgfAAQgcAAgTgSg");
	this.shape_9.setTransform(71.85,38.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiAqQgKgHAAgOIAAgBQAAgPALgIQAKgHATAAQAKAAAMAEIAAgBQAAgTgTABQgNAAgOAEIgIgUQASgJATABQAWgBAMALQAKALAAAVIAAA4IgbAAIAAgLQgLAMgRAAQgPABgJgJgAgRATIAAABQAAAFAEADQAEADAHAAQAIAAAHgFQAFgFAAgHIAAgFQgHgDgKgBQgSAAAAAOg");
	this.shape_10.setTransform(53.7,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARBDIAAg3QAAgTgRAAQgQAAAAATIAAA3IgcAAIAAiFIAcAAIAAAyQAMgQAPAAQAQAAAJAKQAJAKAAAPIAABAg");
	this.shape_11.setTransform(37.525,37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAhIAAgtIgLAAIAAgYIALAAIAAgZIAbAAIAAAZIAXAAIAAAYIgXAAIAAAoQAAAJAJAAQAHABAHgEIAAAWQgJAGgNAAQgcAAAAgdg");
	this.shape_12.setTransform(27.9,38.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNBDIAAhhIAbAAIAABhgAgNgpIAAgZIAcAAIAAAZg");
	this.shape_13.setTransform(21.5,37.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASAxIgSg7IgSA7IgZAAIgehhIAcAAIAQA6IASg6IAXAAIATA6IAPg6IAcAAIgeBhg");
	this.shape_14.setTransform(10.95,39.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnAjIAMgSQAQAMAOAAQAMAAAAgHQAAgFgGgCIgNgFQgOgEgGgFQgKgHAAgMQAAgPALgJQAKgHAOAAQAUAAARALIgLATQgQgJgKAAQgKgBAAAIQAAADAGADIANAFQAOAFAGAFQAKAGAAAMIAAABQAAAPgLAJQgKAHgRABQgWgBgTgPg");
	this.shape_15.setTransform(155.825,23.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAhIAAguIgLAAIAAgXIALAAIAAgZIAbAAIAAAZIAXAAIAAAXIgXAAIAAAqQAAAJAJAAQAHgBAHgDIAAAWQgJAGgNAAQgbAAgBgdg");
	this.shape_16.setTransform(147.5,22.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAyIAAhhIAbAAIAAAUQAJgXAVABIAAAdIgBAAQgdAAAAAiIAAAkg");
	this.shape_17.setTransform(140.45,23.4229);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiArQgKgJAAgOIAAAAQAAgQALgGQALgIASAAQALAAAMAEIAAgCQAAgRgVgBQgNAAgOAGIgGgWQARgHAUAAQAWAAAKALQALAKAAAVIAAA4IgbAAIAAgLQgLANgSAAQgOgBgJgHgAgRATIAAAAQAAAGAEADQAEADAHAAQAIAAAHgFQAFgEABgIIAAgFQgIgEgKABQgSAAAAANg");
	this.shape_18.setTransform(130.6,23.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAhIAAguIgMAAIAAgXIAMAAIAAgZIAaAAIAAAZIAXAAIAAAXIgXAAIAAAqQAAAJAJAAQAIgBAGgDIAAAWQgKAGgMAAQgcAAABgdg");
	this.shape_19.setTransform(121.55,22.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxAtIAQgUQATAQASAAQATAAAAgMIAAgBQgBgFgEgDQgGgEgOgEQgWgFgJgHQgMgIAAgSIAAAAQAAgRANgLQANgLATAAQAaAAAVARIgPAVQgSgNgOAAQgIAAgEADQgEADgBAFIAAABQAAAGAGADQAFADAQAEQAVAGAJAHQALAJgBAQIAAAAQABATgNAKQgNALgVAAQgfAAgWgVg");
	this.shape_20.setTransform(111.95,22.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggAlQgPgOAAgXQAAgUANgPQAPgPATAAQAXAAANAQQAMAPAAAVIAAAIIhDAAQAEATATAAQANAAAKgKIAQAOQgPASgZAAQgVAAgOgOgAAVgHQgBgJgFgGQgGgGgJAAQgQAAgDAVIAoAAIAAAAg");
	this.shape_21.setTransform(95.2,23.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAyIAAhhIAbAAIAAAUQAIgXAWABIAAAdIgBAAQgdAAAAAiIAAAkg");
	this.shape_22.setTransform(86.25,23.4229);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjAoQgJgKAAgRIAAg+IAcAAIAAA2QAAATAQAAQARAAAAgTIAAg2IAcAAIAABhIgcAAIAAgOQgMAQgPAAQgQAAgJgKg");
	this.shape_23.setTransform(76.325,23.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAhIAAguIgMAAIAAgXIAMAAIAAgZIAaAAIAAAZIAXAAIAAAXIgXAAIAAAqQAAAJAJAAQAIgBAGgDIAAAWQgKAGgMAAQgbAAAAgdg");
	this.shape_24.setTransform(66.8,22.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AARAyIAAg2QAAgUgRAAQgQAAAAAUIAAA2IgcAAIAAhhIAcAAIAAAOQAMgQAPAAQAQAAAJAKQAJAKAAAQIAAA/g");
	this.shape_25.setTransform(57.575,23.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggAlQgPgOAAgXQAAgUAOgPQAOgPATAAQAXAAANAQQAMAPAAAVIAAAIIhEAAQAFATATAAQANAAAKgKIAQAOQgOASgaAAQgVAAgOgOgAAVgHQgBgJgFgGQgGgGgJAAQgQAAgEAVIApAAIAAAAg");
	this.shape_26.setTransform(46.25,23.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAxIgmhhIAdAAIAVBBIAWhBIAdAAIgmBhg");
	this.shape_27.setTransform(35.225,23.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AglA2QgNgOAAgXIAAgBQAAgWANgOQANgNASAAQASAAAMAOIAAgvIAbAAIAACEIgbAAIAAgPQgMAQgSABQgSgBgNgNgAgPgCQgIAGAAAMIAAABQAAAMAIAHQAGAIAJAAQAKAAAHgIQAHgHAAgMIAAgBQAAgMgHgGQgHgHgKgBQgJABgGAHg");
	this.shape_28.setTransform(23.375,21.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAmBAIgLgcIg1AAIgMAcIgdAAIA3h/IAZAAIA2B/gAARALIgRgpIgQApIAhAAg");
	this.shape_29.setTransform(10.3,21.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(1,11.7,170.9,38.599999999999994), null);


(lib.ee6smcy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sm (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoqRBQhIgjgmgqQhjAdhUgpQhwg3gphuQgJgXgFgaQAFAaAJAXQiaAShfhnQhsh1BZh0QgggxgRg5QhGjsCpixQCti0D1BIQgthKBmhVQAcAaArAOQgrgOgcgaQg5g1ANhnIABgGQipjfDgibQA0gkA/gIQBgj/D9gHQD4gGBgDkQA5gjA5BSQB+iCCdAMQCgAMBcCAQBcB/guCbQgXBOguBFQCAAYAABzQB9hACbBBQCPA9A8CUQA/CahgCMQhLBtg4ARIgBgBQgUhPgTgVQATAVAUBPIAAABQAEBJgOBHQgRBRhGAnQhFAnhLANQhPAOg6gpQAdgSAYgaQgYAagdASQgjAVgqAJQhGAPhIgLQgmgGghgNQhIgdgug4IgDgBQAGgcADgbQgDAbgGAcIgHAYQgUAvgmAlQg6A7hNABQgVAAgRgFQAGASgbAdQgkAkgoAHIgBABIgSABIAAAAIgBAAQgQAAgRgFIgCgBIACABQARAFAQAAIABAAIAAAAIASgBIABgBQgKAwg5AnQhFAuhEgZQAIgVACgVQgCAVgIAVIgBADQgdBHg/AqQg9AqhMAEIgXABQhBAAg5gbgAB6LzQhPgWgqgrQAqArBPAWgApSLUQhZgPAAhMQAAgdAOgnQg6gmAAg/QAAggAQgoIAAAAQgCABgEAAIAAAAIgBAAIgEAAIAAAAIgBgBIAAAAIgDAAIgBgBQgJgCgOgIIgBAAIAAAAIgCgBIgIgFIgCgBIAAAAIgBgBIgBAAIgBAAQh0hEAAhPQAAgkAYgnQgYAnAAAkQAABPB0BEIABAAIABAAIABABIAAAAIACABIAIAFIACABIAAAAIABAAQAOAIAJACIABABIADAAIAAAAIABABIAAAAIAEAAIABAAIAAAAQAEAAACgBIAAAAQgQAoAAAgQAAA/A6AmQgOAnAAAdQAABMBZAPgApAJXQg6gLgjgXQAjAXA6ALgACzE8QgzgdgBg3QAAgPAEgRQAGgaAXgOQgYglAAgoQAAgwAjgzQAjg0A8gKIAAAAIADgBQAKgCAKAAIAAAAIABAAQAlABAeAXIABABIABAAIABABQAPANAOATQgOgTgPgNIAAgBIABgDQAOgyA3AAIAAAAIABAAQAPAAATAEIABAAIABAAIACABQBUAUAbBLQgbhLhUgUIgCgBIgBAAIgBAAQgTgEgPAAIgBAAIAAAAQg3AAgOAyIgBADIAAABIgBgBIgBAAIgBgBQgegXglgBIgBAAIAAAAQgKAAgKACIgDABIAAAAQg8AKgjA0QgjAzAAAwQAAAoAYAlQgXAOgGAaQgEARAAAPQABA3AzAdgArog3QgngbgRgcQARAcAnAbgAjdlWQAMgdAAgeQAAgfgNgfQgZg/g7gkIgCgBQgcgQgeAAIgBAAIAAAAQgkAAglAXIgCABIgBABIgBABIgEgEIAAgBQgfgigmAAIAAAAIgBAAQgdABgjAUIgCABIACgBQAjgUAdgBIABAAIAAAAQAmAAAfAiIAAABIAEAEIABgBIABgBIACgBQAlgXAkAAIAAAAIABAAQAeAAAcAQIACABQA7AkAZA/QANAfAAAfQAAAegMAdgAsSmvQAGgiASghQgSAhgGAigAvoNDIAAAAgAFog3IAAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Al9Q/QhCgagng6QgbA1g6AJQjeAnhWjKIAAgCQgEgSgBgTQABATAEASIAAACQgxAnhPgGQhQgGg1gzQgzgwgRhIQgThQAVg8Qg4gvgig6QgnhBgHhHQgIhQAXhGQAYhLAvg6QAqgyA+gsQBAgtBOgDQBNgEBKALIAHABQADgbAPgfQAhhFA9gQQAMAwAsArQgsgrgMgwQgHgaABgcQAEg3ARgoIgIgDQgcgUgfgjQgxg1ALhOQAJhIAihAQAihDA6ghQAvgbAAgHQALkEENgvQD9gsCCDZQAzgnAsA+QA2gZBAAaQBKAdAPBNQAzgwBEgZQBGgaBMADQBRAEA8AeQA/AfAoBAQAnA/ABBPQABBRgRBKQgNA5geAqQAmAZAnA5QAkAzADBFIAAAMIAAAFQgBAsgKApQAKgpABgsIAAgFIAAgMQDWgJCBClQApA1AVBAQBFDejVBiQg2AYg6AGQgBgkgMghQAMAhABAkQACAkgKAlQgTBNg8AgQg/AihPADQhVADgrg4QgPgTABgEQg9BShjgFQh3gJhVhZQAGAlgYAqQgmBAhSACQgSAAgQgCQg7gJgdgsQAdAsA7AJQgRAYgTANQAHAhgCAUQgIBRhEAwQhCAvhFgIQAKgeAAgjIAAgBQAAgWgGgTQAGATAAAWIAAABQAAAjgKAeQgMAjgbAaQg0AzhJAKQgUACgTAAQg0AAgxgTgABRMJQAZgBAXgPQgXAPgZABgAyuJyQANAKAQACQgQgCgNgKIgIgIIAIAIgAluJPIALgBIABAAQAbgCAJgXQgJAXgbACIgBAAIgLABIAAAAIgBAAQhLgBgghMQAgBMBLABIABAAIAAAAgAn6IHQAOAAAPgEIAAAAIABAAIACgBQANgEANgGQgNAGgNAEIgCABIgBAAIAAAAQgPAEgOAAIAAAAIAAAAQgngBgjgcIgBgBIgCgBIgCgCQgngiAAg0QAAgaAJgdQgOANgnAAIgBAAIAAAAIgQgBIgBAAIgDAAQg4gEg1g7QgfgjAAgsQAAgfAOgjQgOAjAAAfQAAAsAfAjQA1A7A4AEIADAAIABAAIAQABIAAAAIABAAQAnAAAOgNQgJAdAAAaQAAA0AnAiIACACIACABIABABQAjAcAnABIAAAAIAAAAgABpCFQABAiAVATQgVgTgBgiIAAgGQAAhUA/gZQgIgDAAgUIABgUQALhSBTgSIACAAQAYgFAXAAIABAAIAAAAQA0AAAuAaIABABIgBgBQgugag0AAIAAAAIgBAAQgXAAgYAFIgCAAQhTASgLBSIgBAUQAAAUAIADQg/AZAABUIAAAGgAtDAbQgRgaAAgeIAAgLIAAALQAAAeARAagAJQh7QAUAWAIAXQgIgXgUgWIgBgCQghghgoAAIAAAAIgBAAQgZAAgbANIgBABIgBAAIgBABIABgBIABAAIABgBQAbgNAZAAIABAAIAAAAQAoAAAhAhIABACgAjclCIABgOQgBhGgog0IgBgCIgBgBQgpg0hJAAIAAAAIAAAAIgJABIgCAAQhFADgZAsQgbgNgZAAIAAAAIgBAAQglAAgfAeIAAABIgCABIAAABIgBABIgBAAIABAAIABgBIAAgBIACgBIAAgBQAfgeAlAAIABAAIAAAAQAZAAAbANQAZgsBFgDIACAAIAJgBIAAAAIAAAAQBJAAApA0IABABIABACQAoA0ABBGIgBAOgArVlMQAJgUALgPQgLAPgJAUg");
	var mask_graphics_4 = new cjs.Graphics().p("Ao4Q9QhQgMg7g3QgnglgZgvIAAAAIgMgbIAMAbIAAAAQgkAZgyAIQhRAOg+gaQhHgegmg7QgRgbgGggQgRhRAbg3QjthnAmj/QAokLEBgoQAtgFAtAFQgFATAAAVIABANIgBgNQAAgVAFgTIAAAAQAJgmAcgdQA1g5BJAYIAEACQASA9AbAKQgbgKgSg9IgCgIQgVhMAihEQAZgzAqgkQAPgNARgLQgRALgPANIgYgaQizjSDRi0QgVkSEBg5QCkglBzCBIAQgIQDXhIAwDJQA/g/A8BLIATgHQCYgtA1CaQC0h0CzBVQBfAvAlBlQBBC0iUB/QAwAYAqAlQA0AuAZBFQARAwgJAzIAJACQDZAhAwDKQA3DljCBRQghAOgmABQgxAEg0gSQAGgxADgMQgDAMgGAxQhYEXkAiWQglgUgXgmQh+BgiHhpIgPgNQAFgTAAgQIgBgKIABAKQAAAQgFATQgDAPgHASQgdBMhHAWIAAAAIAAAAQgHAFgLABIAAAAIgBAAQgNgBgTgHIgBgBIABABQATAHANABIABAAIAAAAQALgBAHgFIAAAAQgCCnieAhQgKADgKABQACgOAAgOQAAgZgFgZQAFAZAAAZQAAAOgCAOQgFAlgSAhQglBFhHAUQhJAWhHgTQhNgUgmgxQgTA5g3AeQgyAcg3AAQgQAAgRgDgAGoGJQADgdATgYQgOgEgHgVQgJgYAAgUQABgsAqgVQgqAVgBAsQAAAUAJAYQAHAVAOAEQgTAYgDAdgAmNGFQAiAAAhgTIABgBIAAAAIABgBIABAAIACgCQAOgIAMgLIABACIACABQAbAYAcAAIAAAAIABAAQAgAAAhghIADgDIgDADQghAhggAAIgBAAIAAAAQgcAAgbgYIgCgBIgBgCQATgSALgXQgLAXgTASQgMALgOAIIgCACIgBAAIgBABIAAAAIgBABQghATgiAAIAAAAIAAAAQgfAAgfgQIgFgCIgBgBQhEglgFhEIgBABQgmAVgyAAIAAAAIgBAAQhMAAg2gsQgoghAAgwQAAgUAHgYQgHAYAAAUQAAAwAoAhQA2AsBMAAIABAAIAAAAQAyAAAmgVIABgBQAFBEBEAlIABABIAFACQAfAQAfAAIAAAAIAAAAgAQIgUQgTA6ghAmQAhgmATg6QAGgQADgQQgDAQgGAQgABgAnQgFgKAAgMQAAgPAJgQIAAgCIABgBQAcg2AtAAIAAAAIAAAAQAPAAAQAFIABAAQAAgNADgMIABgCIAAgBIAAgBIAAAAIAAgBIABgBIAAAAQAbhrBYAAIAAAAIABAAQAkAAAuASIAAAAIABABIABAAIABABIACAAIgCAAIgBgBIgBAAIgBgBIAAAAQgugSgkAAIgBAAIAAAAQhYAAgbBrIAAAAIgBABIAAABIAAAAIAAABIAAABIgBACQgDAMAAANIgBAAQgQgFgPAAIAAAAIAAAAQgtAAgcA2IgBABIAAACQgJAQAAAPQAAAMAFAKgAJxiXIgBgCIgBAAIgCgDIAAAAQgrg8gxAAIgBAAIAAAAQgVAAgWALIgCABIACgBQAWgLAVAAIAAAAIABAAQAxAAArA8IAAAAIACADIABAAIABACIAAAAgAk4nAQA/A2AMBQQgMhQg/g2QgkgfgkAAIAAAAIAAAAQgfAAggAXIgBABQgvAkgDATIgDgBQgZgPgVAAIAAAAIAAAAQgjAAgWApIAAAAIgBABIgBABIABgBIABgBIAAAAQAWgpAjAAIAAAAIAAAAQAVAAAZAPIADABQADgTAvgkIABgBQAggXAfAAIAAAAIAAAAQAkAAAkAfIAAAAgANilHIgYgLIAYALgAsDOmIAAAAgAkrFbIAAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AndQoQhZgOg0gwQglgigcgdIgMALQg7AyhUABQhUABg4gvQgzgrgZhGQgTg1gEhXQgvgDgsgWQghgRgZgVQg3gsgPhDQgRhLAPhKQAQhMAXhCQAZhFA8grQA9gsBQgHQgDAWAAAWQAAAeAFAfQgFgfAAgeQAAgWADgWQADgXAGgXQAWhOBMgaQBJgYBMAMQgCAPAAAQIACAdQAFA2AIACQgIgCgFg2IgCgdQAAgQACgPQAEgwAUgrQAYg2AkgpQgYgTgOgRQgqgugVhJQgXhRAihDQAghABAgfIgNgcQgdhCALhRQAKhMAsg9QAug/BOgPQBOgPBHAbQBMAeAvAuQA6g1BNgNQBZgPAwA7QAyA9AbBTQgSAKgNAUQANgUASgKQAZgPAiADQAMgPASgFQBRgWAnA/IAZgJQDCg5A6DFQDwhyC3CYQAsAkAQA4QAkB7hCCaQAbAdARAiQBKCMggBmQD5Cog8DcQg9DcjkgfQhIgJg9gmIgFgCQALgbAGggQgGAggLAbQgRAogeAcQgxAvhKAJQhKAJg/goQgpgagOgtQg9AThNgOIgIgCIABADQAFAWgVAiQgWAlhBgRIgBATQgKCTiUgNQANA8gPA/QgUBVhOAaQhJAZhOgWQhCgTgtgxQgTA3g2AjQgmAYg3AAQgXAAgZgEgABbL0QAFAOADAPQgDgPgFgOQgEgMgBgOQABAOAEAMgAGQGqQgQgWAAgTQAAgeAlgZQgegDgHgjQgEgQAAgPQAAg7A9gXQg9AXAAA7QAAAPAEAQQAHAjAeADQglAZAAAeQAAATAQAWgAlIEPQBPAAAsg/IACgCIAAgBIADgEQAPgYAIgbIALABIAAAAIAAAAQA1AAAFhJQgFBJg1AAIAAAAIAAAAIgLgBQAFgPACgRQgCARgFAPQgIAbgPAYIgDAEIAAABIgCACQgsA/hPAAIAAAAIAAAAIgFAAQgxgBghgaQAhAaAxABIAFAAIAAAAIAAAAgApYEDQAXAAAYgFIAEgBIABAAQAegGAXgQQgXAQgeAGIgBAAIgEABQgYAFgXAAIgBAAIAAAAQgugBgrgRIAAAAIgBgBIgBAAQhLgggGhRQAGBRBLAgIABAAIABABIAAAAQArARAuABIAAAAIABAAgAPLCXQBrg9AchaQgcBahrA9gAE9kYQhNAMgWBFQgIAYAAAGQhXAKgGBXQAGhXBXgKQAAgGAIgYQAWhFBNgMIACAAQASgDAQAAIAAAAIAAAAQA4AAArAeIADACIgDgCQgrgeg4AAIAAAAIAAAAQgQAAgSADIgCAAgAJpjiIAVAYIgVgYQghgkgqgBIAAAAIgBAAQgWAAgYAKIgCABIgCABIACgBIACgBQAYgKAWAAIABAAIAAAAQAqABAhAkIAAAAgAq1kSIASgTIgSATgAkrljQASAYAOAaQgOgagSgYIgDgEIgBgBQglgvgzAAIgBAAIAAAAQgSAAgTAGIgBAAQhHAVguA6IgBgBIgCgBIgCgBIAAgBQgUgOgRgBIAAAAIgBAAQgVAAgRAWIAAAAIgBAAIAAABIgBABIABgBIAAgBIABAAIAAAAQARgWAVAAIABAAIAAAAQARABAUAOIAAABIACABIACABIABABQAug6BHgVIABAAQATgGASAAIAAAAIABAAQAzAAAlAvIABABIADAEgAP8kxQgMgLgNgJQANAJAMALgAixCWIAAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AlnQGQhMgGg9geQg+gegZgoQgtA+hGATQhPAUhEgiQhBghgog5Qgqg8gKhNQjZgKgrjwQgrjxDeh0IAAAEQAAAZAHAYQgHgYAAgZIAAgEQABgrAUgvQAdhEBIgiQBCgfBQgBQASgBAQADQAKgzAjgrQAfglAkgcQhFghgkg9Qglg+AfhSQAchIA2gsQh6jLCoiXQBJhBBiACQBfAFAhAgQDginCGDgQAIANAGAPQBMgfA2AxIAMAMQAjgsBHgVQBLgWBBAqQAtAdAPAxQAZgGAdADQA5AFAmAnQA4A6ALA+QEhhkB/DBQB+C/iqDDQAuAxAWA8QAcBMgEA9QgBAVgFAUIAYgYQCzC7h+DQQgtBKhUAdQinA3iWheIgIgGQARgeAEghQgEAhgRAeQgQAbgbAZQg2AzhRgBQhJgBg8gwQgVgRgPgWQgRgbgGghQAGAhARAbQgzAhg1gaIAAAAQgMgGgMgJQAMAJAMAGIgEAGQgFA5gbAxQgsBNgxgQIgBgRQgCgmgTgOQATAOACAmIABARQAABFggA9QglBGhMAWQhLAWhIgbQg3gVAEgIQgYAcgiAcQg1AuhHAAIgSAAgAGNHBQgeghAAgcQAAgVAQgSQgmgaAAgjQAAgSAKgUQAjhIBNgKQhNAKgjBIQgKAUAAASQAAAjAmAaQgQASAAAVQAAAcAeAhgAO1ESQCigsAehxQgeBxiiAsgAo9DmQASAAARgEQgRAEgSAAIAAAAIAAAAQgnAAgngVQhGgngVhOQAVBOBGAnQAnAVAnAAIAAAAIAAAAgAlCDdQARAAASgDQBSgPAZhRIADgJQA5gOAAg1QAAgOgEgSQAEASAAAOQAAA1g5AOQACgKAAgJQAAgMgEgMQAEAMAAAMQAAAJgCAKIgDAJQgZBRhSAPQgSADgRAAIgBAAIAAAAIgRgBIARABIAAAAIABAAgAsEAmQgMgmAAghQAAgRADgPQgDAPAAARQAAAhAMAmgAQfiqQgSgPgTgLQATALASAPgACGjdIABgBIADgCIABAAQAYgQAbgBIABAAIAAAAQALAAAMADIABABIgBgBQgMgDgLAAIAAAAIgBAAQgbABgYAQIgBAAIgDACIgBABgADXjtQAdhgBqAAIAAAAIAAAAQAPAAARACIADAAIABAAIgBAAIgDAAQgRgCgPAAIAAAAIAAAAQhqAAgdBggApsjxIABgBIAAgBIAAgBIAAAAQAQgmAdAAIAAAAIABAAQASAAAXAPIACACIABgCIABgBIABgBQA6hPBBAAIAAAAIABAAQArAAAtAjIAAAAIAGAEIABABQAhAaAGAQQgGgQghgaIgBgBIgGgEIAAAAQgtgjgrAAIgBAAIAAAAQhBAAg6BPIgBABIgBABIgBACIgCgCQgXgPgSAAIgBAAIAAAAQgdAAgQAmIAAAAIAAABIAAABIgBABgAKEkTIgBgBQgWgbgoAAIAAAAIAAAAIgLABIALgBIAAAAIAAAAQAoAAAWAbIABABgAgGoPQAEgUAAgRQAAg+g7gTQA7ATAAA+QAAARgEAUgAGhIwIAAAAgAixBxIAAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AumNnQiFAMhnh0Qgzg6gQhLQgrjNCriLQghj4DzgkIAfgCQgEiCCEhZIAYgQQAeAYAmATQgmgTgegYIgPgMQgzgtAMhTQALhNBCgpQgqgdACgyQg4gugHhTQgGhNAahJQAXhDBEgqQBFgpBQASQBNASA8AfQgFAQgEARQAEgRAFgQQASg1AigkQAVgVAjgLQBJgWBCAtQAsAgAYAfQAMAQAGAQQgGgQgMgQQAsgTBXAHQBLAFA8AnQAcATAVATQA8gbBPAHQBIAHA6AfQA/AiAcBQQAsACAyATQBBAYAbBKQAUA4gMAuQBBgfBNgIQBNgIBDAZQBMAcAcBAIA3CBQAbBCgQBSQgPBIguBTQBkC3h7COQBYDUiqB5QhEAxhVALQjAAWhginIgFgFQANgPAJgVQgJAVgNAPQgeAngzAHQhCAIgvgUQAEgQAAgRQAAARgEAQQgLA0gsAeQg+AshPgUQABAYgGAZQgQBLg4AuQg2AshRADQhOADgrgdQgHA7gmArQgwA1hPAKQhMAJg/gTQhIgVgggwIAPgVIgPAVQgcAjgoAYQhcA3hHAAQiEAAg+i8gAsrK0QgIgNAAgOQAAgRAMgSQgUgLgRgRQARARAUALQgMASAAARQAAAOAIANgADvKcQAAgQgEgRQAEARAAAQgAE9GlQgSghAAgaQAAglAigYQgjguAAgoQAAggAVgcIACgCIAAgBIABAAQAkgvBLAAIAAAAIAAAAIADAAIABAAIACAAIgCAAIgBAAIgDAAIAAAAIAAAAQhLAAgkAvIgBAAIAAABIgCACQgVAcAAAgQAAAoAjAuQgiAYAAAlQAAAaASAhgAPaFzQBTAAA/g7IACgBIACgDIAVgXIgVAXIgCADIgCABQg/A7hTAAIAAAAIAAAAIgagBIAaABIAAAAIAAAAgAuoFdQgFgXAAgVQAAgqAUggQgUAgAAAqQAAAVAFAXgApHCwQhJAAghhDQAhBDBJAAgAjeAwQgCBShWAUQBWgUAChSQA1gTACg9QgCA9g1ATgAtMBxQgWg6gCgzQACAzAWA6gAScgoQgYgrgpgrQApArAYArgAnZjwIAAgBIACgEQATgzA+AAIAAAAIAAAAIAHAAQBMADAuAxQgugxhMgDIgHAAIAAAAIAAAAQg+AAgTAzIgCAEIAAABIgBAAQgPgJgWAAIAAAAIAAAAIgMABIgCAAIgBAAIABAAIACAAIAMgBIAAAAIAAAAQAWAAAPAJIABAAgADGk1QALgdAigVQgiAVgLAdIgBgBQgNgKgPgBIAAAAIgBAAQgLABgNAFIAAABIgCAAIAAAAIAAAAIACAAIAAgBQANgFALgBIABAAIAAAAQAPABANAKIABABIAAAAgAghnQQAGgPAAgSQAAgjgUgyQgbhFhKgQQgBgsgrgSQArASABAsQBKAQAbBFQAUAyAAAjQAAASgGAPgAIpr6IADAAIAWgBIABAAIAAAAIAGAAIAGAAIgGAAIgGAAIAAAAIgBAAIgWABIgDAAgAEDtgQgMgQgQgPQAQAPAMAQg");
	var mask_graphics_12 = new cjs.Graphics().p("As+QQQg/ghgug1QiCAihVhhQioi/BtjwQgkgzgBhAQgBjQDJg8QANBPAnATQgngTgNhPQgVkQECg+IAHgCIABAAIAAAAIAAAAQASA4BAAjQhAgjgSg4IAAAAIAAAAIAAgBIgCgGIgCgHQgHg9A7g7IAQAMIgQgMIgPgMIgKgIQhWhMArhrQhdhYAphhQBcjcDkBuQgJhCAog1QA0hFBUARQBVARAlA8QA6gvBIgLQDCgeB8CBQEKhYB1DeQAdA5gKBCQDSAdgdDNIgFAbQEUh0CVDPQCbDZirDRQAVA4AFA/QAGBQgyA6QgwA4hHAXIgVAFQABBDgsA8QgtA+hBAgQhCAghMABQhPABg/gkQg9gjg0hQQAQgPAKgTQgKATgQAPQgeAdgwARQhHAZhXAAQgQBMg9AyQg6AwhIAPQgnAJgmgFQgRgCgRgFQgSgGgQgIQAQAIASAGIgHAQQh4D/kPhrIgGgEQAKgSAIgVQgIAVgKASQgZAsgmAWQgzAfhKANQgTAEgUAAQg1AAgzgbgAseLDQgUgXAAgXQAAgeAjgeQhAgggChCQACBCBAAgQgjAeAAAeQAAAXAUAXgAy9HMQAKgIAKgOQgKAOgKAIgAO3G3QAaAAAagFIABgBIAFgBIgFABIgBABQgaAFgaAAIAAAAIAAAAQgPAAgOgCIgCAAIAAAAIgCAAIACAAIAAAAIACAAQAOACAPAAIAAAAIAAAAgAtxGeQhGgwAAg/QAAglAYgqIAIgOIgIAOQgYAqAAAlQAAA/BGAwgADKFfQgJgZAAgXQAAgwApgsQgSg1AAgoQAAg1AggcIABgBIACgCQAggbAjAAIAAAAIABAAQAZAAAbAOQgbgOgZAAIgBAAIAAAAQgjAAggAbIgCACIgBABQggAcAAA1QAAAoASA1QgpAsAAAwQAAAXAJAZgASGBDIAJAYIgJgYQgehDg4gmQA4AmAeBDgAmSBSQA7gKAAg/QAAgOgDgSQAvgHAAg4IgBgPIABAPQAAA4gvAHQADASAAAOQAAA/g7AKgAG/AWIAAgCQALgsAxAAIAAAAIABAAQAPAAATAFIACAAIABAAIACABIgCgBIgBAAIgCAAQgTgFgPAAIgBAAIAAAAQgxAAgLAsIAAACgAlOjLIgBgCQgZg9hBAAIAAAAIAAAAQgOAAgQADQAQgDAOAAIAAAAIAAAAQBBAAAZA9IABACIAAAAgAiHm5IgGAXIAGgXQAGggAAgbQAAiHibgoIAAgFQAAg8hWgMQBWAMAAA8IAAAFQCbAoAACHQAAAbgGAgg");
	var mask_graphics_14 = new cjs.Graphics().p("ArNQ9QhGgVglhCQgjAFghgGQkDgsAbkGIACgYIgCAYQgyAGgvgtQgmgkgRgxQgYhHAOhNQANhJAhg6Qguj+DSiZQBthPCJAKIAAADQARBBAqAOQgqgOgRhBIAAgDQgUhOA4g1QATASAaANIACACQALAFANAAIABAAIAAAAIAEAAIgEAAIAAAAIgBAAQgNAAgLgFIgCgCQgagNgTgSQghgdgJgoQgOg7ARgyIAFAEIgFgEQAFgOAIgPQgIAPgFAOQhIhBAQhiQAljrDmAmQAoh2BqBRIALAKQBCkGEUA4QC1AlA/CtQDbiUDTCmQCpCFhfDBIgEAHIAVAAQCgATggC2QEChQCpC7QC3DLipDKQgXAcgkAUIgMAGQgVgsgdgkQAdAkAVAsQAJATAHAUQAaBEgNBRQgMBHg8A0Qg7AzhNAQQhLAQgogmQgZBEg5AiQg/AkhLAFQhGAEhDgpQg+glgqhQQAMgWAFgcQgFAcgMAWQgTAngkAaQgqAfg2AKQgRAEgTABIgDABIgLAAIAAAAIgBAAQhGAAgmg7IgBgCIABACQAmA7BGAAIABAAIAAAAIALAAIADgBQATgBARgEIgpBDQgvA2hKgCQgRAAgPgCQg6gJgggnQAgAnA6AJQgnBQhYAFIgLAOQgyA5hKAPQhLAPhNgBQAOgWAGgcQgGAcgOAWQgWAmgqAZQg/AmhLAHIgkABQg4AAgxgPgArHLaQgpglAAguQAAgYAMgcQgpgbgOg3QAOA3ApAbQgMAcAAAYQAAAuApAlgArGJjQgRgGgNgKQANAKARAGgAuNFPQAgBIBJAEQhJgEgghIQgRgnAAgsQAAgeAIgfQgIAfAAAeQAAAsARAngACFE0QAGAfAKAHQgKgHgGgfQgDgSAAgQQAAg5ArgeQgDgEgHgeQgEgYAAgVQAAgyAZgpQATgcAigHIACAAQAVgEASAAIAAAAIABAAQAwAAAeAbIABAAIABABIABABIgBgBIgBgBIgBAAQgegbgwAAIgBAAIAAAAQgSAAgVAEIgCAAQgiAHgTAcQgZApAAAyQAAAVAEAYQAHAeADAEQgrAeAAA5QAAAQADASgAmxA0QAQgSAAgTQAAgOgIgMQAWgJAIgcQgIAcgWAJQAIAMAAAOQAAATgQASgAH9giQAOAJAFAJQgFgJgOgJIgBgBIgCgBQgfgUgbAAIAAAAIAAAAQgkAAgdAiIAAAAIgCACIACgCIAAAAQAdgiAkAAIAAAAIAAAAQAbAAAfAUIACABIABABIAAAAgAjRl3QAFgZAAgYQAAgzgWgtQgjhFhKgVIgCAAIgBAAIAAAAQgSgFgTAAIgBAAIAAAAQgRAAgRAEIgCAAQgOg6hEgDQBEADAOA6IACAAQARgEARAAIAAAAIABAAQATAAASAFIAAAAIABAAIACAAQBKAVAjBFQAWAtAAAzQAAAYgFAZgAAoMmIAAAAgADqKxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.0486,y:0.0075}).wait(2).to({graphics:mask_graphics_2,x:-2.3765,y:-0.6596}).wait(2).to({graphics:mask_graphics_4,x:-3.4697,y:0.55}).wait(2).to({graphics:mask_graphics_6,x:-4.9548,y:1.2124}).wait(2).to({graphics:mask_graphics_8,x:-7.2463,y:1.3902}).wait(2).to({graphics:mask_graphics_10,x:-7.6226,y:1.3092}).wait(2).to({graphics:mask_graphics_12,x:-0.4193,y:2.7875}).wait(2).to({graphics:mask_graphics_14,x:2.2092,y:0.0517}).wait(2));

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C1AC").s().p("AuYN4Qh5hHhthSQhihIgpgtQhahhg6iNQg3iJAAhvQAAhZAeilQAbiZAZhMQAyiTDShhQBagpBTgRQAigIBNgIQAtgFAOgNQARgQAAgxQAAghgehbQgfhaAAglQAAgSASgYQAYgdAjAAQA6gBAbAXQAUAZARAKQAJguAWgLIgDBAQAAAuAMAaQAcA/BWAAQAlgKAMAAQAWAAACAUQAAAJgEANQAeACAAAYQgKAqAAANQAfCtBNABQA1AAAbgYQAcgWAJAAQAQgBAHANQAEAHAAAIQAAAMgOAPQAEAHAlAHQApAJAAAJQAAAJgFAFIADABQAEABAAAHQgMAlAAAMQAACYCAAAQB8ABAmh+QAKgfAKg2QAJgnAPAAQAJAAAFAKQA6giAIAAQAFAAALAPIAZAgQAqAuAzAAQAiAAATgQQASgRAKAAQAaAAABAbIgCAWQBfAIA8A0QA1AuAAAoQAAANgDgCQABAEgMAAQhRhCgXgNQgJgFgvgNIAAACQgfAFgPAZIgDAEQgGADgJADIhZAMQg9AHgdAZQgpAhAABKQAAADANAcQANAbAAASQAAAWgUAWQgUAWAAAIQAAAkAlAiQASACAKALIAOASIAeAUQALAJAFAIQAuASBRABQAtgBBJg0QAkgZAcgbQAWAAADAbIgBAGQAPAEAkAAQAKAAAMBXQAaBVBMAAQBzAAA3huIAlhKQAWgiAggBQAYAAAIAcQAFAQAAAtQAAAsAEARQAHAcAXAAQANAAAzgNQAPAAAHAKQA4ANBfDpQgCApgfAAQgEAAgEgCQgzBYitBRQizBUmKBpQhGASh2AUQi5AfhSAPQi5AjimBhQhKArgkAOQg+AYhMAAQjIAAlBi8gAguqlQABgLAGgRQgujCh8AAQgGAAg+AZQgLABgUgPQgTgQgcABQgZAAgGAQQgqAAAIgWQAAgUAcgMIAMgFIAAAAQAggTAiAAQAlAAAPAUIADAJQBQgcAeAAQBYABAtBZQAcA6AAAwQAAASgMAsQgNAtgLALQgZgFADgWgAhIt0IACAAQgEgLgGABg");
	this.shape.setTransform(-17.025,30.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C1AC").s().p("AlsQHQhEgQhFgVIipgVQiqgWgygMQi1gqhWhfQgwg3g6hxQjDktAAlaQAAjCAphuQBTjZDugjQDUgYANg9QAYhqABgkIgChtQgBg5AGgbQAPhKBcAAQAqAAA3AJQA7AJAPANIADgJQAIgSAIAAQATAAgBAUIgFAUQAAAMAfAaQAnAfAqAAQApAAAegQQAdgRADAAQAWAAAAAXIgDAXIACASQAdgHAlAAQBJAAA7AeQAfAQANAPQAKADAEAEQAqAmAABJQAABIgaAuQgWgSgGghQgJgygDgIQgPglgbgPQgsgbhjgCIABACQAAAVgYAAQgKAAgIgFQgMAXgmAFQgdADgjAAQgMAHgLAjQgDAJgDAHIgEAYQAAAXANAaQAPAiAaAAQAHAAAHgGQAGgHAGAAQAUAAAMAJQANAJgLAOQAaAAAAASQgUA6AAAIQAAAfAeAfQAoAoBFAAQB9AABChLQASgTAXghQALgOAKgFIgBgDQgDgEAGgFQAFgFAKAAQARAAAHAPQAIAPAZAAQAsAAA1gtIA1guQAQAAADARIAEAkQAEAyA7gJQBGgLAfAQIADACIAGgCQAPAAATAQIAHgGQAigYBFAAIAFAAIgEAAQBSACAyAlQAoAfAAAfQAAAOgEAIIACAIQAAAEgCAIQgFADgMAAQgUAAgRgkQgRgkgeAAQhFAAgfAeQgTAegIAAQgNAAgVgVQgVgBgMgGQgGAHgMAAQgfAAgIgbIgSAJQg4AXgPAVQgiAuAAAOQAHATAAAbQAAAHggApQgfApAAAXQAAAQAJARQAFABALASIAbAsQAqBAAvAAQCBAAA9gvQAMgIAVgYQAOgOAKAAQAVAAABAUIADAAIAXAQQAXARAGAAQAUAAA0gGQAVAAAAATQAAAEgEAFIgMAbQgOAdAAAQQAAB9BlAAQBWAAAXggQAFgIAGgNQAFgKAOAAQAQAAAJAfQAJAfAVAAQAxAAANh5QAEg8AEgWQAGgmAOAAQAKAAAKANQAzAAAugSQAvAAgWAzQAAAKAVAeQAIAMAHAIQAKgHALAAQAYAAAHAUIAKgFQAbAAADAfQAAAggoAAIgRgBIAbCCQAACGhxCGQiICjjiAlQhhAQh0AKQh4AJgdAFQhFALgzAbQg5AfhABCQhdBig7AhQh7BFjFAAQhuAAiFghg");
	this.shape_1.setTransform(-19.85,30.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C1AC").s().p("ArXQSQh1gchWgdQihg+hShHQhBg4gghRQgphlgriYQg3jCAAhcQAAhIAXhmIAuiyQAVhWBUgrQA8gfBugPQCTgVAMgCQBFgSAAgrQAAgWgZhFQgZhEAAgTQAAgyAthQQAZgsAvhQQAlhMAPgzQACgGgBgYQgBgXAFgNQAPgpBZAGIgFAAQAzgFAAAaQAGgQAIgFQAKALAAAdQAAAyA+A3QA/AuAAAEQAAADgrA8QgqA8AAA2QAAALARAJQAXANAqAAQAgAAAYgaQAZgbAMAAQABAAARAXQAGgCAGAAQBiAAAwBEQAfArAAArQAAAVgMANQgPgHgYgiQgbgkgWgNQgOgJgrgUQgGANgOAAQgJAAgIgFQgMATgmASQgzAZgjAAQgdAAgTAnIgEAHIgMAaQgNAaAAASQAAAfALAMQAHAIASAEQASAEAGAHQALALAAAeQgOAqAAANQAAAkAZAuQAlBDBCAAQA4AAAtgwIArg7QAPgTAEgTQACgKABgOQADgPAzAAQARgPASAAQAMAAAGAKIACAEIAGAGQAPAPAVAAQAoAAANgiIAIgXQAFgKAIgBIAAAAQAAgEANAAQAGAAADAFQAEAFAGAAQA+AAAag2IAQglQAJgRANAAQAcAAgIAiQAAAZATAWIACABQAQAKAIAAQAFAAAfgTQAggUAsAAQA1AAAoAaQAgAVAAAMQAAAWgPgCQgXgHgRAAQhJAAgkAQQARALAAAKQAAAZgeAAIgMAAQgDAZAAAQQAAAPgJACIgYgBQgpgDgYAnQgLASACARIAFAfQAAAPgEAJQAMATAOATQA3BJBHAAQAoAAAlghQArgnAEgBIADADIAHgDQAKAGABAWQACAYAHAGQAVAUAcANQAOAGAAAPQAAAXgaAAQgSAAgOgIQgKARAAAGQAAAoATAWQASAVAAAKQgHAdgHAUIAIAKQAsA1BGAAQAlAAAdgdQAegdATAAIANACIABAIIABAAQAmAAAMARQAHAKACAcQABAbAIALQANARAoAAQBBAAAZhDQAHgWADgZIABgXQgMgxAAgNQAAgfAZAAQAKAAATAOQATANAVAAQApAAAvgOQAbAAAFATQADALgCAeQADA8BhAAQAoAAAAAgIgBAEQAbAuAaCQIAAAHIADANQAABCtKFgQq4DDi/AAQivAAjpg3gAJzmIIhGAYQgRAAgFgLQgCgFAAgJQAAgTAZgWQAfgcAuAAQA5AAAhAzQARAZAFAaQAAAMgMAXQgghDhMAAg");
	this.shape_2.setTransform(-13.975,18.0358);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C1AC").s().p("AsdR/QiNgrh/hNQiAhLhUhbQhYhfgThbIhOk0QgnigAAiGQAAkHBdiYQBDhtCJhKIBtg3QA+geAigaQBdhHAAiAQAAg+geh2QAAgzABgGQAFgfAYgSQA9gvDtAAQAhABADALQACgHADgJQAJgWAPgGIAHABQACABAAAIQgKAZAAAMQAACFBYAmQASAIArAJQAbAFAAAKQAAAHgGAKQgGALAAAFQAAARARAHQARAGAAAKQgcAUgbAZQg3AxAAArQAAA/CeAAQAIAAAFACQALgBAOgBQBGABAiA5QAWAmAAAnIgBAGQgFAEgDAAQgNgFgRgWQgUgZgNgJQgegTgmgJQgGAQgSAAQgZAAgXgEIgNAJQgoAZgFAHQgSAggQgDIgVgFQgSgFgSAAQgdAAgIAiQAOgVARAJQgGAIgMAjQgLAjAAAJQAAAjAlAhQAsAlBEAAIBTgPQAFAAAxAuIgLARQACAAAAAMQgRAxAAAOQAAAXATAXQAVAZAmAEQAMgCAMABIALABQAigDAKgOIAIgNQAGgHALABIApBEIAEgFIABAEIABAGQAAAHgDAFIgCAHIABAJIgCAQQAJgCAJAAQAQAAANg0IAFgPQgFgFAAgIQAAgBAJgEIACgeQgPg7AAgMQAAgWAPgIQAHgEAbgEQA1gHAHgzIADg6QAIgvAeAAQARAAAGAOQADAJAGAFQAJgGAPgFQAmgOAYARIANgVQAQgXATgTQA6g6BFgBQAuAAAnAXQAgATAAAKQAAAWgVABQgPAAgRgKQgRgKgOABQg5AAgkARQgDASgYAjQgfAtgYgBIgNgBIgDAAIAAABQAAATgZAFQgbAyAAAVQAAAYAZAgQAeAnApAAQALAAAYgJQAEgNARAAQATAAAOANIAHAHIAXgFQAVAAAHAeQAMArACAEQAMATAlAUQAdAQAAATQAAAeghAAIgMgBQAHAGAAAJQAAAQgRAIIgDARQAAAUATAXQATAVAAAKQAAARgRAPQgSAOAAAJQAAAFAPAVIAQAOQAYAUARAAQA0gBA6gsQAdgYAYgWQAhAAAKASQAFAKABAcQABAcAIALQANASAnAAQBKAAApgyQAegkAAgjQgKgjAAgMQAAgfANgBQAIAAAgAFQAQAAAbgQQAcgRALAAQAnABANAfQAFANAFA3QAFAwARAWQAZAeA8AAQAiAAAVgFQAGgKARAAQAFAAAFADIAAAAQAcAAACAdQAAAGgBAEQAeBCAdCpQAjAHgCAqQAABikTBnQhwAqh3AbQh3AahMABIk1gNQhyABh9A6Qg8AbiiBlQiQBZhkAnQiVA6icAAQiDAAiUgugALBm/Qgygfg9AIIgCgNQAAgRAigMQAhgNAoAAQA4AAALBRQAAAfgVAAQgPgSgZgQg");
	this.shape_3.setTransform(-16.6462,22.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C1AC").s().p("AtPQeQhzgag8gVQiFgwg7g/QgngpgWhJQg4izgOg8QgUhVAAh/QAAiJBajhQAthyBdhFQAkgbCJgzQBlglgBgmQAAgkAMhsQAPiCAVhzQA/lNBUAAQAaAAAqAvQAVAZAJANIAFgFQALAEAEAGQgEAEgGAaQgFAZAAAHQAAA4AbAZQAwArCRAAQACAAA5BZIgCAGIAAADQAAACgmAuQgnAtAAAjQAAAeASAdQAgAVAegDQAwgFAlAhQALAKASAnQARAlAAAIIgCAPIgPAEQgMAAgJgMIgSgZQgcgfhKgFQgFADgIAAIgLgCIgEADQgmAVgMAJQgbAXgHANQgDACguAAQgHAAgGADQgMAuAAALQAAAZAUAbQAeApA6AAQBFAIAUgfQAIgRANAAQALAAAEAKQACAGAAAGQAAAGgFAHQgFAHAAAGQAAAZATAbQAcAoA1AAQAZAAAZgQQAZgRADAAQANAAAGALQACAFAAAHQAAAFgCAFQABAPAKAsQAAAmgMAcIAJgCQAXgGAJgKQAPgRAAgpIAAgJQgIgIgBgHIABgFQABgCAIAAIAIADQAFgDAHAAQAGAAAHANIAMAEQAFAABCgUQALAAAFAFIACAAQBIA9AAACQAAAMgJA9QAAAVATAgQAcAuAvAAQA1AAgHheQAAgiAWAAQALAAAGALIAGAOQAXABAxgdQBGBMAAACQAAAZgZAAIgIgBIgWA/QAAAZAXAXQAKAKACARIAFgCQAHAFABALIADATQAGAXAzAAQBhAAAMgkIAEgZQADgMAQAAQASAAACAZQAhgJAggLQARAAABAQIAAAjQAEAbAgANQAIgHAPgHQAqgTAOgaQACgEADgrQACgZAgAAQBEAAAEARQAaANAKAzQAAAEgPBBQAAASARAOQAbAXA9AAQBPAAAhgSIATgMQAJgFAMAAQAOAAAIAFQAfADAMAvQAHAYgBAaQAABZgVA1QgZA/hBAuQh+BYmgBeQmLBYt0BjQhzAAimgkgAAXgwIAFgBIgFAAIAAABgAhqhcIACAAIAAgBIgCABgABzjzQAAhYA6gwQANgKAugKQArgKAUgUQA1g2A5AAQAmAAAZANQAUALAAALQAAATg1AAQhIAAgjA+QgVAqgZACIgXAAQgOABgMAIQgXAOgZA+QgWA6gEAAQgjAAgJg/gADblsIAHAAIgFAAIgCAAgAJsmpQAAgWAtAAQAwAAAZAfQAMAPADARQAAAQgSAAQgCAAhxg5gABSp+QAAgNAMgkQAAgRhIgpIgBACQgBAAAAgIQAAgWA3AAQAtAAAMBXQAAAMgLAVQgLAZgMAFQgQgMAAgDg");
	this.shape_4.setTransform(-16.7683,11.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C1AC").s().p("AuxPnQh1hAhghKQhUhCgZgmQguhHgeilQgXiNAAh4QAAhzAgheIBkjuQAehHBNg/QAqghBrhCQBfg6AlgjQA5g4AAg9QAAg2gRhNQgQhOgBg/QAAhhAIguQAVh+BGAAQAgAAA0ASQAWAHAOAHQAHgPANgMQAPAGAAANQgNAtAAAvQAACNCgAmQAcAGBSAKQAmAFAJAIIABAAQAJAAAEAKQgOArAAAFQAAADAOAQQAMAOABAHIAAABIAAABIgBAEIgBAHIgEABIgIAIIghAbQgxApAAArQAAAlAlAXQAjAXABAQQgBAWgWAAQgMAAgKgEQgHAMgLAMQgjAlg0ADQgXAgAAAXQAAAbAdAJQAcAJABAMQgBADgNAeQgNAeABAYQgBBMBPAAQA1ABAXgoQAOgXAGgFQAOgNAZAAQAOAAAUgLQAUgMALAAQALAAAJAGIAKAGQAJgGAGgBIAHABQALgDAHAAQASAAAHAPQADAFAAAKQAAANgNAMQgMALgRADQgLAVgXAjQgjA4gWAOIACACIAXAbQAmAlA5AAQAfABAcgdQAcgeAHAAQANAAAEAKQAUgBAbgMIALgFIAAAAQAHAAAGAKIgBABIAEAIQAQAcAKAMQAtA6BWAAQAuAAATguQAAgiALgKIACgIQAHgSAMAAQAeAAADAbQAAAOgLAXQAQAdAXAzQAAAFgaBUIABACIAJgCQAMAAAMASQAMASAHAAQBgAAApgtQAagcgBgjQABgSAJgFIAAAAQAAgQADAAIAbAEQA/gBAggWQAMAAACAKIABAAQANAOgBAKQgBAEgEALQAACXB5ABQB2AAAdgZQAEgDAJgOQAGgJALAAQARABADASQAJAFACAYQAAANgLAVQAAA2AVAOQAKAHAjAAQAgABAPAQQAYAYADBGQACAwAlBRIAVAwIAFAAQAlAAABAkQAAAli/AdQjQAaglAKQjCA2jdA/Qg1AOh3AyIjiBfQkzB8iwAAQkLAAk6itgAkms0IABgCIgBAAgAECpAQAZgEAbAAQAagZAVgOQAQAAATgCQAYgDAdAWIABABIiSBCQgwAAgiATQAOgeAagegABgqnQAShWg7hHQgKgNgngQQgggPgEgSQgCgJgBgYQgHgVgngGQAKgTAWABQBjA7AmAlQAQAPATApQATAoAAARQAAARgFAfQgIAugLgBQgNABgLgGg");
	this.shape_5.setTransform(-20.5,23.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4C1AC").s().p("ApGQvQhsgWhqgeQiKgdiFg9QiRhCguhAQi5kDAAkSQAAhbAbieQAcimAcgxQBLiBBdhMQA8gyBZgqQBWgmAVgUQApglAAhIQAAgNgOhcQgPhbAAgjQAAhFAVg3QAghVBJgJIAHAAQACABAAAHIgEAIQAsADAoAJQAxAKAHALIADgCIAAACQgCAbAeAjQAmAtA9AAQAQAAAUgJIAMgGIAAAAQAEgDAIgDQAIAGAEALIAFAQQAGALAYAAQARgBALACQAGgGAJgBQALABADAHQABAEAAAGQAAAOgIALQgDAIAAAEQAAAKAbAMIAfALQACgFAAANQAAAKgOAeQgPAfAAAPQAAAtAaAtQAqBIBZAAQAvABAJgIQAIgHAEAAQAPAAAHAJQADAGAAAFQAAAKgOAKIgNAIQgdAegHANQgIAPAAAkQAAASgTAAQgSgBAAgRIAAgJQgOAGghgEQgKgCg0AVIgHAAQgdAQgWATQglAgAAAaQAAAaApAPQApAOAAAIQAAAHgCAFQAIAMAGARQgIAWgSAUQgOAQAAAPQAAAUAZAHQASAFA1AAQAWAAAHALIABADQAigFAQgiQAEgcAGgSQAKgiAdgBIAIgHIAEAIQAJADAAALIAAADIANAWQAdAsAnAAQBHAAArgcQAkggAPgJIACABIACgGQAEgFAMAAQADAAASAPQAVAAAJgXQAJgVAPgBQAFABAKAVQAOAjAIAOQAnBGBAAAQAYAAgBAZQgFAUgHAGQAJAaANAsQAAAngPAYQgPAYAAAiQAAAIAKAjQAGAOAFAVQAXApBdABQBEAAA1g9IAjgoQASgUAOABQAGAAAugSQAOAAAHAWQANApAFAKQAmBICPAAQBNAAAfhEIASguQAIgVALAAQAMAAAVAVQAWAWAZgBQBDAAAFgEQAFgGANAAIACAAQAFgUAXAAQAdAAA+DKQAXAIAEAhQAAANjeCUQlbDlhMA0QigBvktBoQk2BsiwAAQjhAAjRgpgADNo7IgDAAQgKAAgLgFIgBgMQAAgNAWgPQATgMAKAAQALAAAIAGIAKgGQACgIAFgHQAMgUARABQANAAAHAHIADAEIADAFIACADIgBAAIABAGQAAABg0BBQgQAAgGgHQgHgHgCAAIgBAAIgNAHIgPAFIgGADIgBgBgAAjpxIgBgPIAMgcQAMgaAAgKQAAgSgTgwQgTgxgKgJQhBg1glAFQgIABgBgEIABgnQAAgbhegQQAAgEgCgIQAAgJAugPQAjgBAbAjQAXAdAAAVQBSgHAuBQQAhA6AAA5QgKBpgcAAQgMAAgLgFg");
	this.shape_6.setTransform(-18.625,23.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4C1AC").s().p("AmdRmIAOAAQpzgNkZl/QhkiJgvitQghh8AAhzQAAiMBIjeQBRj6BfhGQA7g7ApgjQBLg/BYgMQBvgPAHgqQACgOgIgZQgKgegBgMQAAgSgHhBQgGhBADgtQAIiKBbAAQAzAABLAsQBFAoAAAOQAAARgKAFQgFAYAAAJQAAC7CyAAQAUAAAWgDQADALAGAKQASAfAoAGIAOAYQgEAKAAAIQAAAcANAXQAWAnA1AEIgLANQhbBjAAAhQAAApAaAfQApAvBfAAQAyAAAtgSQAtgTAHAAQAIAAAGABQgEgDAJAAQAMAAATAPQARAOAWAAQBIAAAwgmIAegaQAMgMAIAAQANAAAGAJQAEAKAHAAQAgAAAdgPQAaAAAGAfIAHAuQAGAIAGAGIAHgEQAIAMALANQA1A9BfAAQATAAASgCIgPALIh+gSIgUAHIgGgBQgLAFgNALIgGAEIAPANQgBAWghABIAVCXQAAAEgYAmQgZAlAAAYQgBAMANASIAOARIAEAFQAbAeAEAQQA1BBA8AAQAzAAAPgVQAGgLAEgEQAFgHAMAAQAKAAAMAPQAeAAAqgoQArgoAIAAQARAAADANQACAHgCAMQANADAOgMQAQgNAJAAQAfAAgNA5QAAAmAFAKQATAlBMAAQBzAAA/hEQAPgRAYgeQASgWATAAQANAAAJAOIANAdQAUAqAsAAQAeAAAPgPIACgBIAAgCQAAgxAqAAQBYAAACCMQAACYi0BxQi7B1maBfQgsAKkeAuQjYAihSAlQg5AagqArQg0AygfATQg8AkhyAtQhWAjgiAAQgUAAAAgOgAANq6QAAg5glgnQg0g2hwAAQgRAAgCgKQgCgEACgUIAAgBQgZgGgLgZIAAgCIgGAAQgMAAgNAKIgLgCQgDgCAAgIQAAggBFAAQAWAAAPAVQANARABANQCZAKAyBXQAYAsAABcQABAPgGATQgIAcgQAAQggAAAPheg");
	this.shape_7.setTransform(-20.05,24.3731);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).wait(2));

	// sm
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4D2C7").s().p("AoqRBQhIgjgmgqQhjAdhUgpQhwg3gphuQiaAShfhnQhsh1BZh0QgggxgRg5QhGjsCpixQCti0D1BIQgthKBmhVQg5g1ANhnIABgGQipjfDgibQA0gkA/gIQBgj/D9gHQD4gGBgDkQA5gjA5BSQB+iCCdAMQCgAMBcCAQBcB/guCbQgXBOguBFQCAAYAABzQB9hACbBBQCPA9A8CUQA/CahgCMQhLBtg4ARIgBgBIAAABQAEBJgOBHQgRBRhGAnQhFAnhLANQhPAOg6gpQgjAVgqAJQhGAPhIgLQgmgGghgNQhIgdgug4IgDgBIgHAYQgUAvgmAlQg6A7hNABQgVAAgRgFQAGASgbAdQgkAkgoAHQgKAwg5AnQhFAuhEgZIgBADQgdBHg/AqQg9AqhMAEIgXABQhBAAg5gbg");
	this.shape_8.setTransform(0.0486,0.0075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D2C7").s().p("Al9Q/QhCgagng6QgbA1g6AJQjeAnhWjKQgxAnhPgGQhQgGg1gzQgzgwgRhIQgThQAVg8Qg4gvgig6QgnhBgHhHQgIhQAXhGQAYhLAvg6QAqgyA+gsQBAgtBOgDQBNgEBKALIAHABQADgbAPgfQAhhFA9gQQgHgaABgcQAEg3ARgoIgIgDQgcgUgfgjQgxg1ALhOQAJhIAihAQAihDA6ghQAvgbAAgHQALkEENgvQD9gsCCDZQAzgnAsA+QA2gZBAAaQBKAdAPBNQAzgwBEgZQBGgaBMADQBRAEA8AeQA/AfAoBAQAnA/ABBPQABBRgRBKQgNA5geAqQAmAZAnA5QAkAzADBFQDWgJCBClQApA1AVBAQBFDejVBiQg2AYg6AGQACAkgKAlQgTBNg8AgQg/AihPADQhVADgrg4QgPgTABgEQg9BShjgFQh3gJhVhZQAGAlgYAqQgmBAhSACQgSAAgQgCQgRAYgTANQAHAhgCAUQgIBRhEAwQhCAvhFgIQgMAjgbAaQg0AzhJAKQgUACgTAAQg0AAgxgTg");
	this.shape_9.setTransform(-2.3765,-0.6596);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4D2C7").s().p("Ao4Q9QhQgMg7g3QgnglgZgvQgkAZgyAIQhRAOg+gaQhHgegmg7QgRgbgGggQgRhRAbg3QjthnAmj/QAokLEBgoQAtgFAtAFIAAAAQAJgmAcgdQA1g5BJAYIAEACIgCgIQgVhMAihEQAZgzAqgkIgYgaQizjSDRi0QgVkSEBg5QCkglBzCBIAQgIQDXhIAwDJQA/g/A8BLIATgHQCYgtA1CaQC0h0CzBVQBfAvAlBlQBBC0iUB/QAwAYAqAlQA0AuAZBFQARAwgJAzIAJACQDZAhAwDKQA3DljCBRQghAOgmABQgxAEg0gSQhYEXkAiWQglgUgXgmQh+BgiHhpIgPgNQgDAPgHASQgdBMhHAWIAAAAQgCCnieAhQgKADgKABQgFAlgSAhQglBFhHAUQhJAWhHgTQhNgUgmgxQgTA5g3AeQgyAcg3AAQgQAAgRgDg");
	this.shape_10.setTransform(-3.4697,0.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4D2C7").s().p("AndQoQhZgOg0gwQglgigcgdIgMALQg7AyhUABQhUABg4gvQgzgrgZhGQgTg1gEhXQgvgDgsgWQghgRgZgVQg3gsgPhDQgRhLAPhKQAQhMAXhCQAZhFA8grQA9gsBQgHQADgXAGgXQAWhOBMgaQBJgYBMAMQAEgwAUgrQAYg2AkgpQgYgTgOgRQgqgugVhJQgXhRAihDQAghABAgfIgNgcQgdhCALhRQAKhMAsg9QAug/BOgPQBOgPBHAbQBMAeAvAuQA6g1BNgNQBZgPAwA7QAyA9AbBTQAZgPAiADQAMgPASgFQBRgWAnA/IAZgJQDCg5A6DFQDwhyC3CYQAsAkAQA4QAkB7hCCaQAbAdARAiQBKCMggBmQD5Cog8DcQg9DcjkgfQhIgJg9gmIgFgCQgRAogeAcQgxAvhKAJQhKAJg/goQgpgagOgtQg9AThNgOIgIgCIABADQAFAWgVAiQgWAlhBgRIgBATQgKCTiUgNQANA8gPA/QgUBVhOAaQhJAZhOgWQhCgTgtgxQgTA3g2AjQgmAYg3AAQgXAAgZgEg");
	this.shape_11.setTransform(-4.9548,1.2124);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4D2C7").s().p("AlnQGQhMgGg9geQg+gegZgoQgtA+hGATQhPAUhEgiQhBghgog5Qgqg8gKhNQjZgKgrjwQgrjxDeh0QABgrAUgvQAdhEBIgiQBCgfBQgBQASgBAQADQAKgzAjgrQAfglAkgcQhFghgkg9Qglg+AfhSQAchIA2gsQh6jLCoiXQBJhBBiACQBfAFAhAgQDginCGDgQAIANAGAPQBMgfA2AxIAMAMQAjgsBHgVQBLgWBBAqQAtAdAPAxQAZgGAdADQA5AFAmAnQA4A6ALA+QEhhkB/DBQB+C/iqDDQAuAxAWA8QAcBMgEA9IASARQCzC7h+DQQgtBKhUAdQinA3iWheIgIgGQgQAbgbAZQg2AzhRgBQhJgBg8gwQgVgRgPgWQgzAhg1gaIAAAAIgEAGQgFA5gbAxQgsBNgxgQQAABFggA9QglBGhMAWQhLAWhIgbQg3gVAEgIQgYAcgiAcQg1AuhHAAIgSAAg");
	this.shape_12.setTransform(-7.2463,1.3902);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D2C7").s().p("AumNnQiFAMhnh0Qgzg6gQhLQgrjNCriLQghj4DzgkIAfgCQgEiCCEhZIAYgQIgPgMQgzgtAMhTQALhNBCgpQgqgdACgyQg4gugHhTQgGhNAahJQAXhDBEgqQBFgpBQASQBNASA8AfQASg1AigkQAVgVAjgLQBJgWBCAtQAsAgAYAfQAsgTBXAHQBLAFA8AnQAcATAVATQA8gbBPAHQBIAHA6AfQA/AiAcBQQAsACAyATQBBAYAbBKQAUA4gMAuQBBgfBNgIQBNgIBDAZQBMAcAcBAIA3CBQAbBCgQBSQgPBIguBTQBkC3h7COQBYDUiqB5QhEAxhVALQjAAWhginIgFgFQgeAngzAHQhCAIgvgUQgLA0gsAeQg+AshPgUQABAYgGAZQgQBLg4AuQg2AshRADQhOADgrgdQgHA7gmArQgwA1hPAKQhMAJg/gTQhIgVgggwQgcAjgoAYQhcA3hHAAQiEAAg+i8g");
	this.shape_13.setTransform(-7.6226,1.3092);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D4D2C7").s().p("As+QQQg/ghgug1QiCAihVhhQioi/BtjwQgkgzgBhAQgBjQDJg8QgVkQECg+IAHgCIABAAIAAgBIgCgGIgCgHQgHg9A7g7IgPgMIgKgIQhWhMArhrQhdhYAphhQBcjcDkBuQgJhCAog1QA0hFBUARQBVARAlA8QA6gvBIgLQDCgeB8CBQEKhYB1DeQAdA5gKBCQDSAdgdDNIgFAbQEUh0CVDPQCbDZirDRQAVA4AFA/QAGBQgyA6QgwA4hHAXIgVAFQABBDgsA8QgtA+hBAgQhCAghMABQhPABg/gkQg9gjg0hQQgeAdgwARQhHAZhXAAQgQBMg9AyQg6AwhIAPQgnAJgmgFQgRgCgRgFIgHAQQh4D/kPhrIgGgEQgZAsgmAWQgzAfhKANQgTAEgUAAQg1AAgzgbg");
	this.shape_14.setTransform(-0.4193,2.7875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D2C7").s().p("ArNQ9QhGgVglhCQgjAFghgGQkDgsAbkGQgyAGgvgtQgmgkgRgxQgYhHAOhNQANhJAhg6Qguj+DSiZQBthPCJAKQgUhOA4g1QghgdgJgoQgOg7ARgyQhIhBAQhiQAljrDmAmQAoh2BqBRIALAKQBCkGEUA4QC1AlA/CtQDbiUDTCmQCpCFhfDBIgEAHIAVAAQCgATggC2QEChQCpC7QC3DLipDKQgXAcgkAUIgMAGQAJATAHAUQAaBEgNBRQgMBHg8A0Qg7AzhNAQQhLAQgogmQgZBEg5AiQg/AkhLAFQhGAEhDgpQg+glgqhQQgTAngkAaQgqAfg2AKIgpBDQgvA2hKgCQgRAAgPgCQgnBQhYAFIgLAOQgyA5hKAPQhLAPhNgBQgWAmgqAZQg/AmhLAHIgkABQg4AAgxgPg");
	this.shape_15.setTransform(2.2092,0.0517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.8,-111.6,270.8,223.3);


(lib.ee6presmoke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA6EKQg2gQgHg0QABAIgMALQgjAhg0gSQgOgFgNgIQhjhBBIhZQgagaANgQQgiACgcgUQgpgbgKguQgLgxAoghQAmgfAuALQgJgvAsAGQALgxAygKQAxgKAiAbQAoAfAPApQAWgsA4ABQAxABAjAgQAlAiANAwQANAsgMAvQgMAugkAiIgbAWIgPALIAPgLQADAOAGASQAQAugPAuQgQAvgwANQgWAGgVAAQgYAAgZgIg");
	var mask_graphics_2 = new cjs.Graphics().p("AAFHsIgQhBQg5AVg+gRQhjgbgHhWQhiADhChhQhChjBrg6QApgWAwgFQg/gGAGgxQjQAPgCilQgBgqBwhAQhGh5CeghIAUgDIAIgSQBFiKCwBEQBFgfBuALQBvALA2BeQBXgPBHBFQA+A7gKBYQgFAqgjAgQCHBKhECRQgnBUhMAAIAAgFQAAgcgTgTQATATAAAcIAAAFIgBADQgIBahwgJIgJAAQAFAkgiAIQBHAqgCBJQgCBqiBAjQgTAFgRACQgOACgNAAQhEAAgsgwgAGRCTIAAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Ai8KiQglBGhhgOQhVgMhNgkQhMgkglhDQgnhIALhiQgGgYgJgcQgXhJAxhDIAEABQARADAQAAIAAAAIABAAIARgBIADAAQgHASAAARQAAAwA2AmQAxAjAyAAIABAAIAAAAQAaAAAcgKIACgBIABAAIABgBIgBABIgBAAIgCABQgcAKgaAAIAAAAIgBAAQgyAAgxgjQg2gmAAgwQAAgRAHgSIgDAAIgRABIgBAAIAAAAQgQAAgRgDIgEgBQgkgHgkgWQhDgmgqg8Qgpg8gOhCQgPhIAWgtIgEgBQgqgVgRgrQgdhQBHg7QBAg2BXgCQgMgIgIgQQgjhHAShQQARhKA+g5QBAg6BXgCQBYgBBOAkQBZApAgAqQBTgcBSArIAOAIQAKAHAJAKIADgEIAAgBQAQgbAbgVQCQhsBbB9QAegXArACQAnADAgAPQBXAnAHA0QD5g2CADFQBuCqhyCSQgPATgWANQgJgNgNgLQANALAJANQAjAugBA8QgBBIg5A5Qg2A4hKAZQgdAKgbADQAAgmgHglQAHAlAAAmQgBAlgGAmQgNBNhKArQhPAthDgcQANAsgXBHQgUA8g8AbQhfArhHgqQgQA2g1AbQg+AhgwAAQhXAAgmhqgAtLiZQAGgLAIgKQgIAKgGALgAgyo9IgDAYIADgYQAEgaALgWQgLAWgEAag");
	var mask_graphics_6 = new cjs.Graphics().p("AlLO8QhqgLhEhfQAQgYAOgOQgOAOgQAYQgJAIgIAKQhFBIhbAEQhAAAg4ggQhbg7gxheQgzhlAchXQhggig2hdQgzhZAUheQANhNAthCQgIgNgGgOQhojYDagjQgzhcAVhgQAThbBGg3QBIg5BhgFQAbgCAZAEQg5ipCNgGIAAgBIABABIgBAAIABAAIAAgBIgBAAIACggQAPjyDwBuQAugtA/gQQCZARBxAIQBvAbBACsQBCgEA0BAQCCimCDCVIACACIANARIABgBQBWhTB9AYQBwATBIBiQC9DxieDpQA+AcApBHQAvBUgBBnQgDBshRBBQghAZgjARQgEBIhFAyQhUA5hiAWQhvARg2hVQgtAqg8ANQhhARhOghQAcgQAYg5QgYA5gcAQQgOAkhBAgQhNAkg0gjQAMgdASgfQgSAfgMAdQgkBBgUAZQhLBUhWgaQAEgYADgWQgDAWgEAYQgNA8ggA5QgzBXhiAAIgNAAgAtQGSQAaBaBEAiQhEgigahaQgKghAAgeQAAhDAug3Qgog0AAgsQAAgdASgZQgSAZAAAdQAAAsAoA0QguA3AABDQAAAeAKAhgAEpD2IAAgEQgIiHBugBIABAAIAAAAIAHABIgBgMQAAgwArgPQgrAPAAAwIABAMIgHgBIAAAAIgBAAQhuABAICHIAAAEgAxAB2QAIgRAOgMQgOAMgIARgAPsiKQgVgKgVgEQAVAEAVAKgAhcnWIABgYQAAiZiWgPIABgRQAAgjgWgWQAWAWAAAjIgBARQCWAPAACZIgBAYgApdoGQgvgeg4gGQA4AGAvAegAB6rLQAegPAfgBQgfABgeAPgApvrZIgBgBIABAAIAAABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-162.3736,y:8.9587}).wait(2).to({graphics:mask_graphics_2,x:-161.3502,y:-9.4816}).wait(2).to({graphics:mask_graphics_4,x:-161.9653,y:-32.8184}).wait(2).to({graphics:mask_graphics_6,x:-165.6284,y:-32.8556}).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C1AC").s().p("AiuCgQgWgZgRgjIgTgqQgFgIhGhfQgjgxAAgxQgDhUA1AAQAMAAAZAMQARgUADgBQAJADAAANQAAAXAmAPQAlAQA3AAQAdgBAagJIAagLQAPAAAGAOQADAHAAAIQAAAMgJAlQAAAdAfAKQAgALAAAWQAAANgKARQAAAHAZASQAbAUAOAAQAyAAATgMQASgLAIAAQAfAAACAeIgFAoIAAAFQAiggAXAAQAbAAALAVIAGAXQAAAyhQApQhaAtiQAAQiFgBhGhNg");
	this.shape.setTransform(-163.433,18.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C1AC").s().p("Ai0IfQiggvgUggQgohBglicQgSgzhnjDQhfi2AAgLQgBgYBXi4QBbjAAYAAQATAAA2AWQAbAKATAKIAEgDQAUgMAbAAQAUAAAGALQADAEgBAIQABAIgPALQACAJAKALQAQASAWAAQAcAAATgIQATgHAKAAQAxAAAGAVIgDAeQAMCaA3AAQBKAAATgeQAGgOAEgGQAHgJAPAAQAIAAAFADQADgDAJAAQAFAAAFAHQAEAHALAAIA8gPQAVAAAAAMQAAAFgCAEIAEADQAEgFAFgCQgFAMAAANQAAAQATAJQASAKAAAMQAAAGhJA/QhKBMAABAQgBBIAwAAQAqAAAagLQAagLARAAQALADAKABQABgKAKgVQAOgcAJAAQAKAAAHANQAHANAQAAQAJAAANgNQAOgOAJAAQAaAAAIAXQAFAZAFADQALAIAmABQAbABAAAYIAAAEQAaAWAiBeQASAyAOAxQAHAFAEAHIAEATQAAAjgvA3QguA4hKA1Qi1CCikAAQiQAAiyg2g");
	this.shape_1.setTransform(-173.7,6.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C1AC").s().p("AosNcQiahZhHg5QhKg8gwhSQgcgxglheQgZhBgujFQg1jgAAhUQAAizCyj3QBsiWA9hAIBGhsQA9hcAhAAQA/AABPA7QBGAzAAASIgBAIQAVgPAZAAQAVAAADAKQg4AhgiBFQgcA6AAA3QAAAkAkAnQAiAmA2AbQABgGAAALQAFgEAHgDQADAEAAAWQAmAAAAAQIgBADIAJABQAEACAAAIIgTAiQgTAiAAAcQAAAVAUAWQAaAdArAAQBFAAAngYQAbgYALgEIABgCQAVAABAgQIAOANQAAAJgDAGIAHgBQABAAA3A5QAAAGg+BFQg/BQAAA3QAAAfAaAeQAoAvBQAAQBPAAArgtQATgZANgQQgFgKAAgFIABgJQABgYAbAAQAFAAANAHQANAHAdAAQAkAAAggNQAbgOAFAAQAaAAAAAbIgFAcQAAAMAOAHQAWAMARALIADAAQAKAAAJALQAKAQAIAJQAeAkA6AAQAzAAAYgWIAJgNQgIgUABgpIAAggQADgQAXAAQAOAAA4BBQA5BCAmAAQAOAAAcgMIAFADQAHgFAIAAQAiAAAXBcQALAuAFAvQAAAMgEALIgCAGQgJA7hxBtQh/B7i+B3QjWCGjbBOQj8BcjZAAQhbAAjTh6gAIcAnIAAgCIAAAAgAFxgHIAAgEIgEgBIAEAFgAA3kuIACADIAAgFIgCACgAkIm5IADADIADgEIgGABgAl+tDIAAAAIgBAAg");
	this.shape_2.setTransform(-184.0222,-24.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C1AC").s().p("ApbRCQiZg0idhHQhwgzhShHQg4gxg+hQQihjSAAkjQAAicA2i6QApiMBZjUQBLi0DXj6QDZj8BTAAQAcAAALATIAEAPQAlAQA7AyQAzArASASQAKgRANgMIAFACQACABAAAIQgfBrgBAcQABDCCBBDQAjASA3AMQApAKAAAHQgBAUghAfQgpAlg0AAQgvAAgWgMQAFAfADANQAQA7AyAAQAXAAAJgGQAJgHAEAAQAQAAAHAMQAFAHAAAGQgiBeAAAJQAAAqAfAqQApA3BDAAQDGAAAAjnQAAgVAVAAIABAAQADgMAQAAQAGAAAUAVQASAVAQAAQAcAAAbgLQAbgLAIAAQAPAAAFALQACAFABAIQAABkg/AGIARAvQAgBMBHAAQAeAAA+gnQA+gnAGAAQAJAAAEAEIACgBQAIALAAAOQAAAiArAYQArAZAAANQAAAXgYAAQgMAAgKgEIgEAGQgMAQgCAOQgBAJgVAHQggAKgNAHQgTALgMAkQgIAXgBAUQAQBtCDAAQBFAAAdgoIARgbQAJgMALAAIACAAQAEgNAOAAQARAAAYA0IAWA0QgCAbgFAZIgFAVIAAABQAEAUAWAAQB1AAAYg6IAKgnQADgKAGgEQAOhuATAAQALAAAIAJIAMAUQAWAdBBAAQAgAAArgPQArgQAEAAQAQAAAGALQACAFAAAHIAAABQAOAWAXA4QAUAuAPAuQAAAogbADQgTAbglAyQhLBjgXAOQgWAMgmAmQgpApgcATQhpBJi9AAQiUAAiMBFQhRAoiYBvQiVBthXAqQiPBFicAAQhzAAjWhIgAT+CtIABABIgBgBIAAAAgAjiokIACgBIgCAAg");
	this.shape_3.setTransform(-183,-21.075);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).wait(2));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADMBUQAOgKANgMQAkgiAMguQAMgvgNgsQgNgwglgiQgjgggxgBQg4gBgWAsQgPgpgogfQgigbgxAKQgyAKgLAxQgsgGAJAvQgugLgmAfQgoAhALAxQAKAuApAbQAcAUAigCQgNAQAaAaQhIBZBjBBQANAIAOAFQA0ASAjghQAMgLgBgIQAHA0A2AQQAuAOAugMQAwgNAQgvQAPgugQguQgGgSgDgOQgHAGgIAF");
	this.shape_4.setTransform(-162.3736,8.9587);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D4D2C7").s().p("AA6EKQg2gQgHg0QABAIgMALQgjAhg0gSQgOgFgNgIQhjhBBIhZQgagaANgQQgiACgcgUQgpgbgKguQgLgxAoghQAmgfAuALQgJgvAsAGQALgxAygKQAxgKAiAbQAoAfAPApQAWgsA4ABQAxABAjAgQAlAiANAwQANAsgMAvQgMAugkAiIgbAWIgPALIAPgLQADAOAGASQAQAugPAuQgQAvgwANQgWAGgVAAQgYAAgZgIg");
	this.shape_5.setTransform(-162.3736,8.9587);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C4C1AC").ss(1,1,1).p("ACAnmQBXgPBHBFQA+A7gKBYQgFAqgjAgQCHBJhECSQgnBUhMAAAgHHjQhjAZgohHIAAAAQgKgqgGgXQg4AVg/gRQhkgbgGhW");
	this.shape_6.setTransform(-146.25,-3.9627);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C4C1AC").ss(1,1,1).p("AinE+QhiADhChhQhChjBqg6QAqgWAwgFQg/gGAGgxQjQAPgDilQAAgqBvhAQhFh5CdghQAKgCALgBQADgJAFgJQBFiKCvBEQBGgfBuALQBvALA2BeAFcDnQBxAJAIhaQAAgBAAgCQACgggVgUAFTDnQAGAkgjAIQBIAqgCBJQgCBqiBAjQgTAFgSACQhVALg2g5");
	this.shape_7.setTransform(-168.2439,-9.4816);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4D2C7").s().p("AAFHsIgQhBQg5AVg+gRQhjgbgHhWQhiADhChhQhChjBrg6QApgWAwgFQg/gGAGgxQjQAPgCilQgBgqBwhAQhGh5CeghIAUgDIAIgSQBFiKCwBEQBFgfBuALQBvALA2BeQBXgPBHBFQA+A7gKBYQgFAqgjAgQCHBKhECRQgnBUhMAAIAAgFQAAgcgTgTQATATAAAcIAAAFIgBADQgIBahwgJIgJAAQAFAkgiAIQBHAqgCBJQgCBqiBAjQgTAFgRACQgOACgNAAQhEAAgsgwgAGRCTIAAAAg");
	this.shape_8.setTransform(-161.3502,-9.4816);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C4C1AC").ss(1,1,1).p("AgjptQgJgKgKgHQgEgDgEgCQgDgCgDgBQhSgrhTAcQgggqhZgpQhOgkhYABQhXAChAA6Qg+A5gRBKQgSBQAjBHQAIAQAMAIQhXAChAA2QhHA7AdBQQARArAqAVAs9iuQgIAKgGALQgWAtAPBIQAOBCApA8QAqA8BDAmQAkAWAkAHQAdAGAdgDQgaBGBJAzQBNA2BRgfAM0hOQAWgNAPgTQByiShuiqQiAjFj5A2QgHg0hXgnQgggPgngDQgrgCgeAXQhbh9iQBsQgbAVgQAbQAAAAAAABQgCACgBACQgLAWgEAaQgBAMgCAMApmDZQgxBDAXBJQAJAcAGAYQgLBiAnBIQAlBDBMAkQBNAkBVAMQBhAOAlhGQA7CkCwhbQA1gbAQg2QBHAqBfgrQA8gbAUg8QAXhHgNgsQBDAcBPgtQBKgrANhNQAGgmABglQAAgmgHglAJkD7QAbgDAdgKQBKgZA2g4QA5g5ABhIQABg8gjguQgJgNgNgL");
	this.shape_9.setTransform(-161.9653,-32.8184);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4D2C7").s().p("Ai8KiQglBGhhgOQhVgMhNgkQhMgkglhDQgnhIALhiQgGgYgJgcQgXhJAxhDIAEABQARADAQAAIAAAAIABAAIARgBIADAAQgHASAAARQAAAwA2AmQAxAjAyAAIABAAIAAAAQAaAAAcgKIACgBIABAAIABgBIgBABIgBAAIgCABQgcAKgaAAIAAAAIgBAAQgyAAgxgjQg2gmAAgwQAAgRAHgSIgDAAIgRABIgBAAIAAAAQgQAAgRgDIgEgBQgkgHgkgWQhDgmgqg8Qgpg8gOhCQgPhIAWgtIgEgBQgqgVgRgrQgdhQBHg7QBAg2BXgCQgMgIgIgQQgjhHAShQQARhKA+g5QBAg6BXgCQBYgBBOAkQBZApAgAqQBTgcBSArIAOAIQAKAHAJAKIADgEIAAgBQAQgbAbgVQCQhsBbB9QAegXArACQAnADAgAPQBXAnAHA0QD5g2CADFQBuCqhyCSQgPATgWANQgJgNgNgLQANALAJANQAjAugBA8QgBBIg5A5Qg2A4hKAZQgdAKgbADQAAgmgHglQAHAlAAAmQgBAlgGAmQgNBNhKArQhPAthDgcQANAsgXBHQgUA8g8AbQhfArhHgqQgQA2g1AbQg+AhgwAAQhXAAgmhqgAtLiZQAGgLAIgKQgIAKgGALgAgyo9IgDAYIADgYQAEgaALgWQgLAWgEAag");
	this.shape_10.setTransform(-161.9653,-32.8184);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C4C1AC").ss(1,1,1).p("ApwraIABAAIAAABIgBAAgAC3rbQhAishvgbQhxgIiZgRQg/AQguAtQjwhugPDyQgCAPAAARAvcigQjaAjBoDYQAGAOAIANQgtBCgNBNQgUBeAzBZQA2BdBgAiQgcBXAzBlQAxBeBbA7QA4AgBAAAQBbgEBFhIQAIgKAJgIQBEBfBqALQBrAGA3hdQAgg5ANg8QBWAaBLhUQAUgZAkhBQAMgdASgfAtCBDQgsA/BCBXQhDBRAfBoQAaBaBEAiAxAB2QAIgRAOgMAPsiKQCejpi9jxQhIhihwgTQh9gYhWBTQAAABgBAAQgGgJgHgIQgCgBAAgBQiDiViCCmQg0hAhCAEQgfABgeAPABdJcQA0AjBNgkQBBggAOgkQBOAhBhgRQA8gNAtgqQA2BVBvgRQBigWBUg5QBFgyAEhIQAjgRAhgZQBRhBADhsQABhngvhUQgphHg+gcQgVgKgVgEAh8LwQAEgYADgWAn5NSQAQgYAOgO");
	this.shape_11.setTransform(-165.6285,-32.8556);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C4C1AC").ss(1,1,1).p("AlQp1IABABAAZp7QAbAbgGAvQChAQgMCwAmknFQgZgEgbACQhhAFhIA5QhGA3gTBbQgVBhAzBbAmknFQA4AGAvAeAlQp0QiNAHA5CoALhCFQgwARAGA6Qh4gFAKCQAJNJ8QAcgQAYg5");
	this.shape_12.setTransform(-194.4344,-42.9625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D2C7").s().p("AlLO8QhqgLhEhfQAQgYAOgOQgOAOgQAYQgJAIgIAKQhFBIhbAEQhAAAg4ggQhbg7gxheQgzhlAchXQhggig2hdQgzhZAUheQANhNAthCQgIgNgGgOQhojYDagjQgzhcAVhgQAThbBGg3QBIg5BhgFQAbgCAZAEQg5ipCNgGIAAgBIABABIgBAAIABAAIAAgBIgBAAIACggQAPjyDwBuQAugtA/gQQCZARBxAIQBvAbBACsQBCgEA0BAQCCimCDCVIACACIANARIABgBQBWhTB9AYQBwATBIBiQC9DxieDpQA+AcApBHQAvBUgBBnQgDBshRBBQghAZgjARQgEBIhFAyQhUA5hiAWQhvARg2hVQgtAqg8ANQhhARhOghQAcgQAYg5QgYA5gcAQQgOAkhBAgQhNAkg0gjQAMgdASgfQgSAfgMAdQgkBBgUAZQhLBUhWgaQAEgYADgWQgDAWgEAYQgNA8ggA5QgzBXhiAAIgNAAgAtQGSQAaBaBEAiQhEgigahaQgKghAAgeQAAhDAug3Qgog0AAgsQAAgdASgZQgSAZAAAdQAAAsAoA0QguA3AABDQAAAeAKAhgAEpD2IAAgEQgIiHBugBIABAAIAAAAIAHABIgBgMQAAgwArgPQgrAPAAAwIABAMIgHgBIAAAAIgBAAQhuABAICHIAAAEgAxAB2QAIgRAOgMQgOAMgIARgAPsiKQgVgKgVgEQAVAEAVAKgAhcnWIABgYQAAiZiWgPIABgRQAAgjgWgWQAWAWAAAjIgBARQCWAPAACZIgBAYgApdoGQgvgeg4gGQA4AGAvAegAB6rLQAegPAfgBQgfABgeAPgApvrZIgBgBIABAAIAAABg");
	this.shape_13.setTransform(-165.6285,-32.8556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.9,-129.4,232.59999999999997,193.2);


(lib.ee6linecycle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjJptIAGgFQgCgFgFgGIgKi+QBjgNAQgKIAIgDQAVgdAjgGQAEAAADgGQAFgOAHgNQghgrAxgTIAHgCQAzAWABA9QACA5gOA2ICkaMIjFBSIhiuOIBiOOIgtATgACMLCIiO3ogAgGGcIhZvagAAxsXIgLhzgAAQPHIAAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AjDp6IABgBIAAgCIgCgFIgIhPIAIBPQgLgpADgmQACgnASglQAFgKAHgJQANgSAFgVQANguAggiQAIgKAOAEQANADAIAKQAHAFAIgFQAFgDAGgCQACgIABgJQAAgMAIgJIADgBIAGgBIAAgBQA4AEABA0QAAAogCAoIgIhWIAIBWIgBAOIACgCICqaqIjjBfgABmOOIgemBgAgMK3IiHy0gAggCvIhfwogAAllYIg7psgAAjtGg");
	var mask_graphics_2 = new cjs.Graphics().p("Ai9qOIAEgEQgHgPgBgVQgDhAAUg3QABgDADgDIADgCQgBgwAXglQACgEAEgCIAKgGQAdgOAXAaIABAAIAGAAQAFgJAJgDIAGgDQAOgeAegEQAvAXABA7QAAAfgJAbICkaWIhTAiIhcuZIBcOZIh6AzgAhUgYIhYsbgAhsqgIgXj2gAAfsvIgIhRgABwOJg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai2qYIAEgDIAAgFIABgIQgWhKAWhIIACgGQACgHAGgDQATgKAIgSQALgZAcADQAMgNAOgKQAYgSAcgLQA8AQgHBAIgGAlIgBAEICmaaIhdAnIgSjoIASDoIgeAMIgIheIAIBeIhAAbgAAcAdIhnuwgAiSorIgfkPgAAXs3IgHhNgABgOKg");
	var mask_graphics_4 = new cjs.Graphics().p("AipppIgLhaQAGhBAPhBQADgPAOgFIAJgBIANgBQgCg4AugPIAFgBQAKgBAHAIIADACIAGAAQAJgcAcgCIAAAAQAxAVgKA+QgFAbAAAcQAAAQgDANIChaDIhXAkIhVt0IBVN0IgiAOIhJqyIBJKyIgzAVgAgoqaIgfkJgAAXsRIgKhjgABhOWgAizp8QgEgKAAgLIADgyIALBaQgGgHgEgMgAi0rDg");
	var mask_graphics_5 = new cjs.Graphics().p("AigqAIgLhhIALBhQgFgIgBgJQgFgoAAgoQgBgpAFgpQAEgoAtgDQADggANgeQAIgRARgBQAMABAJAHIAEACQA/gCAABBQAAAggEAfIClaVIg0AWIgKh4IAKB4IhlAqgAAtL+IhjtWgABGKkIhjxugAAHsmIgHhIgAB4OFg");
	var mask_graphics_6 = new cjs.Graphics().p("AiiqbIABgBIgCgJIgJhDIAJBDQgFgXgDgYQgBgKAAgKQACgcAPgXQADgJAAgKQABgIAFgHQgJgrAcgaQAFgFAGgCQAKgcAeAEIAGAAQAKgLAOgEIAIgBQApAQACAuIAAAFIgBAEIACAEQAdAxgVA5IgIhqIAIBqICfZzIg0AWIgflWIAfFWIhaAlgAA7MeIh1wYg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai4qUIAHgGIgCgGQgJgkgDgmQgCgtAZgkQAJgMAPgCQADgbANgYQAJgQATgDQAAgWASgLQAJgGAIAAQAPABAKAKIADAEQAUgHAXABQAVABAHAUQAQAtgCAxQAAAXgIAWIgBADICZZvIh9A0IhKq6IBKK6IgrARIgRkEIAREEIgeANgAB6LJIhavsgAgvicIg3pdgAgRncIgymugAAnsKIgMiFgABDOZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:3.575,y:29.6875}).wait(1).to({graphics:mask_graphics_1,x:3.5967,y:30.4875}).wait(1).to({graphics:mask_graphics_2,x:3.8684,y:31.7375}).wait(1).to({graphics:mask_graphics_3,x:3.4254,y:32.5625}).wait(1).to({graphics:mask_graphics_4,x:3.3972,y:31.3125}).wait(1).to({graphics:mask_graphics_5,x:3.7738,y:31.8875}).wait(1).to({graphics:mask_graphics_6,x:3.4299,y:31.2125}).wait(1).to({graphics:mask_graphics_7,x:3.5638,y:32.225}).wait(1));

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C1AC").s().p("ABVOkIgDgDIgDgEQgLgbgIgcQgDgKgBgKQgSgogEguIgMiWQgLiTgTiSQgUiQgKiUQgFhJgNhIQgKg6gIg7IgdjZQgFgggCggIgCgpQgBhOAJhMQABgEADgDIAAAAQgHgbgCgdQgDgZAFgYQACg8AigxQACgCAEgBQAhAOgNAiIgCADQgMBWAlBQQACAFAAAGIANAPQAVAFgBAaIgBANIADAQQAAAGgDAEQABBJANBIQANBIAHBKIAcEkQAEAtgFAwQgFAwAHAuQAZBHgHBPIgBAPQATASgLAXIgDAEQgSAKgPgHQAPB1AJB1QAHBjALBkQAEAiABAiQABALgDALQAGANgDAOQgDAKgHAIIgIACIgDABIgGgCg");
	this.shape.setTransform(-6.874,35.3563);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C1AC").s().p("ABmQUQgngJgEgkQgfgEAAgkQABhlgLhiQgDghABgiQgLgoAAgnQgMgRABgYQAAgTgGgSQgxiLgFiXQgFh5gLh3QgDgnACgnQABgJgCgJQgNhIgBhKQgChJgLhGIgEgiIgWkGIgGgxQgKhLgZhHQgZhGAlg7QADgFAIgBQAlgEAIAkQgEgnAYgaQAEgEADgBQAkAWgHAxQgDAOAAAPQAYAlgEAyQgCATADATQAUCQAECUQAAAlADAmQAFBKALBIQAYCOAECTQABAhAIAiQAOA1g0gEQgGBsAiBkQAFARAAATIABBwIAAALQALAJAPAEIAGgBIAMgLQABgKAGgIIAIgJQAQgvAfAoQAHAIABAMIAfEGQAIBGgJBFIgBALQgCAlgaAVQgKAIgNgDQAWBAgmAuQgEAFgGAAIgEAAg");
	this.shape_1.setTransform(-3.6342,38.9985);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C1AC").s().p("AAoN+QgFgSACgTQAHhJgPhKQgEgSgCgSQgOiTgOiSIgNh4QgQh/g9hzQgbgyA2gWQgRhNgJhQQgHhJgLhKIgGg4QgNiTgQiSQgEghgBgiQgCg6gGg6QgDgaATgPIALgCIAAgBQAkAVgGAyQgBAFABAGQALBHADBKQACAqAFAqQAPCSARCSIAWC4QACARAEAQQAEAQAIAOIAGAEIAFAEQAPABANgJQATg3AqAlQAHAGAAAKQAABKAFBHQACAgAJAhQAPAzgDA4QgKCWAeCPQAPBHABBLQACBtgEBpQgBAVgUAHQgOAGgPAAQgUAPgPAAQgYAAgKgog");
	this.shape_2.setTransform(-2.1371,40.3751);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C1AC").s().p("AA2OxQABgSgBgTQgGhLgShIQgiiNgEiTQgDhigWheQgDgQAAgRQgBh9ACh7IAAAAIgHgFQgGgGAAgJQgIiVgfiQQgIglgDglIgTi1QgIhHgDhHQgFhgANhcQAFghATgYQAKgNAPgBQAJADAHADIABgRQABgEADgEIAJgBIAAgBIAOAHIAGADIAhEZIAOBvQAMASgCAcIgBAQIAMBXQAQBoASBpQAOAzAJA2QALBFgSBAQgCAJgKABQgRADgRgFQgNgFgPAAQgJBFAFBKIAJBsQAFA4APA2QAHAcABAcQAEBJAKBIQAMBXAQBWQAeBDACBMQACAxgSArQgDAKgLAAIgDAAQgsAAABgug");
	this.shape_3.setTransform(-2.7729,36.4523);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C1AC").s().p("ABEPzQgFg8AAg8QgcgvgBg6IgBgSQgLhfgEhhQgNgygFg3QgHg5AFg7QgEhEAChDIAAgPQgSgygHg2QgTiRgJiTQgIiEgaiCQgRhSAPhOQgOAAgQgLQgMgHgBgPQgDhuAdhnIACgMQAEgtAogJIAIADIgChFQgBgsAjgQQAiAWgJAwQgBAJAAAKQAKCTARCRQAFAmgngEQgHgBgIgDQgfAtAKA7QAZCRAUCTQAJBBABBCQAABKAKBIQAKBJAQBJQARBPAIBSQAOCQARCRQAJBJALBJQAMBIABBKQABA9gGA3QgCALgLADQgIABgIAAQggAAgDgpgAgorGIADAAIgCgRIgBARg");
	this.shape_4.setTransform(-3.9574,30.4984);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C1AC").s().p("ABaPAQgqgFACgsQAIiCgWh9QgaiPgGiVQgEhLgIhLQgJhJgFhJQgJiRgUiPQgEghgBgiQgWhFgGhKQgGhIgFhKQgHh4gRh1QgDgSAAgTQgBg0AOgwQACgEADgDIADgBIAGgBIAAgBQAjAXgHAwQgDASADATQAOBsAMBtIANBtIAYDSQAPBFAHBKQANCPAMCQQACAdAHAcIAIAkQAWBrADBvQACBKAJBJIAUCSQAQBwgRBwQgEATgRAAIgEgBg");
	this.shape_5.setTransform(-2.4029,39.3136);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4C1AC").s().p("ABWOkQgpgUAAgwQgBhKgJhJQgSiRgHiTQgIiTgbiRQgJgtgBguQgDiTgUiQIgpkhQgUiKgFiLQgNg0ANg1QACgHAGgDIACgBIAIgCQAcATACAoQAAATACATQARCSAVCSQAVCSAYCSQAYCPgCCVQgBATAFATQAhCQAMCUQADAlABAmQAGCUATCRIAHAwQAFAiAIAhQAKAxgkAcQgEAEgFAAQgEAAgEgCg");
	this.shape_6.setTransform(-1.2815,40.367);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4C1AC").s().p("AAnNXQgCiOgViLQgmhSgGheQgBgPgEgPQgbhjAQhkQABgEADgEQgShEAChKQAEiUgciQQgOhGABhIQgThFABhKIABgHQgaiMAFiRQAAgWAFgXIAKgLIADgEIAJgCIAAgBQAPADADAPIABAEQgPBqAPBsQATCQAWCQQAWCSAMCTQAIBdACBdQABAUAGASIAEAMQAegtAVAwQAGAMgBANQgBASAEAUIARBZQAWBygOB3QAjAqgJA/QgFAgAFAfQAOBagCBaQgBAigjADIgIABQgxAAgBg7g");
	this.shape_7.setTransform(-3.0274,41.2151);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADaNnIgFg8Iik6MIgLhzAjZvhIAEBcIALC+IAAAQICtZHIAIBSAhTgQQALBoBXMlQAEAkAEAlAhgqIIBZPaAgDtwICPXo");
	this.shape_8.setTransform(3.625,37.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D2C7").s().p("AjJptIAGgFQgCgFgFgGIgKi+QBjgNAQgKIAIgDQAVgdAjgGQAEAAADgGQAFgOAHgNQghgrAxgTIAHgCQAzAWABA9QACA5gOA2ICkaMIjFBSIhiuOIBiOOIgtATgACMLCIiO3ogAgGGcIhZvagAAxsXIgLhzgAAQPHIAAAAg");
	this.shape_9.setTransform(3.575,29.6875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADSN6IgFg3Iiq6qIgBgMIgJhWAAjmFIg7psAjRsaIADAbIAJBQIAAAHICuZKIAJBQABkNhIgemBAiVoqICHS0AiBumIBfQo");
	this.shape_10.setTransform(3.75,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4D2C7").s().p("AjDp6IABgBIAAgCIgCgFIgIhPIAIBPQgLgpADgmQACgnASglQAFgKAHgJQANgSAFgVQANguAggiQAIgKAOAEQANADAIAKQAHAFAIgFQAFgDAGgCQACgIABgJQAAgMAIgJIADgBIAGgBIAAgBQA4AEABA0QAAAogCAoIgIhWIAIBWIgBAOIACgCICqaqIjjBfgABmOOIgemBgAgMK3IiHy0gAggCvIhfwogAAllYIg7psgAAjtGg");
	this.shape_11.setTransform(3.5967,30.4875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C4C1AC").ss(1,1,1).p("AAZuNIAIBQICjaWIAEAuAAWgeIBbOaIADAaAjHsCIALBnIC0ZKIAIBTAhTglIhYscIgBgPAhrquIgXj2IgJhd");
	this.shape_12.setTransform(3.725,33.1125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D2C7").s().p("Ai9qOIAEgEQgHgPgBgVQgDhAAUg3QABgDADgDIADgCQgBgwAXglQACgEAEgCIAKgGQAdgOAXAaIABAAIAGAAQAFgJAJgDIAGgDQAOgeAegEQAvAXABA7QAAAfgJAbIgIhRIAIBRICkaWIhTAiIhcuZIBcOZIh6AzgAhUgYIhYsbgAhsqgIgXj2g");
	this.shape_13.setTransform(3.8684,31.7375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C4C1AC").ss(1,1,1).p("AAQu1IAIBNICmaaIAGBDABoO2IgHheIgSjnABKPAIgIhbIgHheAjDtCIANB4IC4ZJIAMBkAhLvJIAAAEIBoOyAi+viIANB2IAgEQ");
	this.shape_14.setTransform(3.375,37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D2C7").s().p("Ai2qYIAEgDIAAgFIABgIQgWhKAWhIIACgGQACgHAGgDQATgKAIgSQALgZAcADQAMgNAOgKQAYgSAcgLQA8AQgHBAIgGAlIgBAEIgHhNIAHBNICmaaIhdAnIgSjoIASDoIgeAMIgIheIAIBeIhAAbgAAcAdIhnuwgAiSorIgfkPg");
	this.shape_15.setTransform(3.4254,32.5625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C4C1AC").ss(1,1,1).p("AC9OSIgGg2Iih6DIgKhjAhRwFIAJBMIAfEJAAXQGIgMhjIi14iIgLhaIgHg9ABIPnIgKhZIhJqyAALALIBVN1IALB2");
	this.shape_16.setTransform(3.475,33.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D4D2C7").s().p("AipppIgLhaIALBaQgGgHgEgMQgEgKAAgLIADgyQAGhBAPhBQADgPAOgFIAJgBIANgBQgCg4AugPIAFgBQAKgBAHAIIADACIAGAAQAJgcAcgCIAAAAQAxAVgKA+QgFAbAAAcQAAAQgDANIChaDIhXAkIhVt0IBVN0IgiAOIhJqyIBJKyIgzAVgAgoqaIgfkJgAAXsRIgKhjgABhOWg");
	this.shape_17.setTransform(3.3972,31.3125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C4C1AC").ss(1,1,1).p("AgCu9IAHBJIClaVIAIBNABsK/IAKB4IAFA3AAcO+IgLheIi04vIgLhgIgDgbAggoZIBkRvAg5inIBkNX");
	this.shape_18.setTransform(4,39.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D4D2C7").s().p("AigqAIgLhhQgBgpAFgpQAEgoAtgDQADggANgeQAIgRARgBQAMABAJAHIAEACQA/gCAABBQAAAggEAfIgHhIIAHBIIClaVIg0AWIgKh4IAKB4IhlAqgAAtL+IhjtWgABGKkIhjxugAimqRQgFgoAAgoIALBhQgFgIgBgJgAirrhg");
	this.shape_19.setTransform(3.7738,31.8875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C4C1AC").ss(1,1,1).p("ACwNwIgHhJIie50IgIhqIgBgMABXHmIAeFWIAEAkAivs4IAIBCIABAKIDBZNIAMBjAg9spIBJMTAg+lLIB1QZ");
	this.shape_20.setTransform(3.7875,39.2875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D4D2C7").s().p("AiiqbIABgBIgCgJIgJhDIAJBDQgFgXgDgYQgBgKAAgKQACgcAPgXQADgJAAgKQABgIAFgHQgJgrAcgaQAFgFAGgCQAKgcAeAEIAGAAQAKgLAOgEIAIgBQApAQACAuIAAAFIgBAEIACAEQAdAxgVA5ICfZzIg0AWIgflWIAfFWIhaAlgAA7MeIh1wYgAAPA6IhIsSgAAOr8IgIhqgAB5ONg");
	this.shape_21.setTransform(3.4299,31.2125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADDNQIgFg2IiZ5wIgMiFAjCsnIAIBHICyZMIAIBNAAePcIgIh9IgRkEABBNOIhKq6AB4J+IhavtAhFvWIAyGuAhotFIA3Jd");
	this.shape_22.setTransform(3.75,39.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4D2C7").s().p("Ai4qUIAHgGIgCgGQgJgkgDgmQgCgtAZgkQAJgMAPgCQADgbANgYQAJgQATgDQAAgWASgLQAJgGAIAAQAPABAKAKIADAEQAUgHAXABQAVABAHAUQAQAtgCAxQAAAXgIAWIgBADICZZvIh9A0IhKq6IBKK6IgrARIgRkEIAREEIgeANgAB6LJIhavsgAgvicIg3pdgAgRncIgymugAAnsKIgMiFgABDOZg");
	this.shape_23.setTransform(3.5638,32.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-70.5,45.7,210);


(lib.ee6bitscopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("AillPQAFgIAIgFQAMgJAQgDQABgLADgKIAHgQIgBgBQgBgEACgEIABgCIAEgGIABgBIABAAIABgBIACABIADgEIACAAIACAAIAAAAIABAAIADAAIACAAIAIACIAMAFIgBgRIAAgCIADgLIABgBQAIgmAcgaIANgMQAWgQAYgDQBdgGAmBNQAFAKABAMQAIA2gyAOQghAJgPgdQgKgSAEgTQgBgDgDgCQgLgIgNADIgDADQgIAGgGAIQgBAcgKAZQgNAfghgDIgBALgACRmPQANgcAAgXQAAgxg9gYIgDgBIgBAAIgBgBQgagKgYAAIAAAAIgBAAQgoAAggAcQAggcAoAAIABAAIAAAAQAYAAAaAKIABABIABAAIADABQA9AYAAAxQAAAXgNAcgAhSmhQAEAAAEgDIABgBIACgKIAAACIABARIgMgFgAhamjIAAAAgAhcmjIgDAAIgBAAIAAAAIgCAAIgCAAIACgCIAGABIACABIgCAAgAhHmvIAAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Ah/hPQh8gFAHhaQhHBQhlg1IgXgOIgEgCQgbgUgLgfQgsiCB7gcQgng4BFgUQgSgSAMgQQgBhrBhAWQBdhqCUAnQBOAUAUBQQARBEgjA8QgNAXgSATIgGAFQgWAYgfARQBTBTg4BTQgiBJhBAAIgEAAgAFViTQgVgQgTgeIgCgEIgBADQgFATgNAMQgMAMgVAFIgIACIgPACQg+AHgsgnQgJgIgJgKQgWgbgKgdQgJgaABgcQAAgVAGgVIAFgQQAahGBXgcQAmhdBWAsQBzARgiBEQAXgHAVAMQArAYAKAcQAMAkgpAqQAiAZADArIAAAHQgBASgMANQgSAUgQAMQgaATgYACIgGAAQgaAAgYgTgACSobQgFAHgUgEQgogrAxgJQAAgOAXAFQgTgNALgWQAWgsAhAnQAhAogqAfIAIAXQADAMgJAGQgPAKgKAAQgQAAgGgYg");
	var mask_graphics_6 = new cjs.Graphics().p("AEhjHQgcgJgQgUQgJgMgGgPQgMgjANgaQgeAkgugNQgqgLgagjQgbgiABguQACgtAfghQAhgjAvgBQAtgBAhAcQASAQAKARQgBgyAzAQQAQAFAAARQApgaAhAfQApAoggA3QgQAbgfAAQAeAhgFAtQgEAogeAXIgEADQgaATgcAAQgNAAgNgEgAiwj/QgjgMgQghQgKgWgFgWQgGAugnAXQgbAQgiAEQgvAEgZglQgZgkADgtQADgvAlgbQAagTAhABQgQgTAAghQgDhNBFAHQgBgkAdgEQgPglAUgqQATgoAjgcQAhgbAugBQArgBAiAWQAlAYANAuQAKAqgEAtQgFAtgjAcQgYASgNAHQAoAQAQAjQARAogCAsQAAAsgZAiQgZAigrARQgXAJgWAAQgTAAgTgGgABeprQgOAAgCgZQgCgZAVAFQArgnAEA6QAhA1g8AEIgFAAQgfAAANgfg");
	var mask_graphics_8 = new cjs.Graphics().p("AlblzQhAhQA2gyQhihHBwghQgJggAtAJQgNgJgMgLQhHhCA+hSQA8hQBaAnQBYAmgYB+QBQADAmBBQA0BXhSA3QhRA3g5g+QARBEg0AsQghAdggAAQglAAghgqgAEFlrQgtgCgbghQgggnArgjQgrgIgcgkQgcgkAbgqQAXglAqgQQArgRAgAdQAiAdANApQAOgKAMACQAeAGgJAZQAfACAJAeQAGAZgPATQgfAjgvgKQAHALgCASQgEAygxAAIgGgBg");
	var mask_graphics_10 = new cjs.Graphics().p("ACioCQgIgSAKgOQAFgJANgEQgmgbAFgyQAFguAkgbQAmgdAoAYQApAYABAvQABAggKALQgDADgDACQADgCADgDQAbgRALAhQAngMgNA4QgNA3g1gZQgXAmgxAAQgtAAgUgqgAj9o/QgygFgJgtQgDgOAGgNQg1ABAPg2QAFgUAOgCQgngPAAg3QAAgvApgXQAogYAtAJQAkAHAKAlQArgLAoARQApAQAUArQAUAtgbArQgaAngoAUQgoATgXgYQgHA5gyAAIgJgBgABOssQgRgZALgTQA+ALgqAiQgEADgDAAQgEAAgDgEg");
	var mask_graphics_12 = new cjs.Graphics().p("AhJrtQgNAOgUAAQgOAAgFgLQghhFBFgBQgHgPAMgHQgugGgBgyQgBgsA0gIQAygIAhAhQAgghApAIQAyAKAJAsQAIAuggAeQggAegmgOQALAEABAVQACAwg0AJQgIABgJAAQgmAAgVggg");
	var mask_graphics_14 = new cjs.Graphics().p("ADnpvQgogCAVg4QgaAFgXgZQgageAbgbQArgqAoAbQADgMAKgEQAugQAaAlQAbAngYAnQgQAYgjgGQAIASgXAAQAMAfgqAAIgIAAgAj6snQgRgHgDgRQgoAYgYgoQgIgNAKgKQgMABgBgMQgCg0ApAeQgCgYATgGQAwgOASAnIACAFIgCgFQgJgZAWgNQgJgSADgFQAAg4A1AMQAuAKAKAtQALAtgqAdQgfAWgigTQAbAmglAeQgLAJgMAAQgHAAgHgDg");
	var mask_graphics_16 = new cjs.Graphics().p("ADxsiQgLAQgUgCQg1gHANguQAShAAzAxQAHgfAdACQAyAEgDA0QAFAZgcAXQgRANgNAAQgUAAgIgigAkVtFQg5geAmgvQgLABgHgHQgKgJADgLQAMgrAmAhQArAAgFAmQAHgOAQABQAVABAAAVQABA6g4gPQABAdgQAAQgHAAgLgGgAj7vSQgcgVAOggQAVgvAsAWQAsAWgLAwQgCAHgHAGQgQAMgSAAQgUAAgVgRg");
	var mask_graphics_18 = new cjs.Graphics().p("AEGucQgignAlgHQAuAJgiAlQgEAEgEAAQgEAAgDgEgADGuvQAHgQABAHQAPAUgFAAQgEAAgOgLgAkLvPQgnAGAZgsQAIgEAGAAQANAAAAAYQA0gEgkAkIgHAAQgVAAgBgOgAjuxFQAJgQALABQAmAdgvABIgBAAQgTAAAJgPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:-7.6337,y:-53.9675}).wait(2).to({graphics:mask_graphics_4,x:5.2847,y:-65.6027}).wait(2).to({graphics:mask_graphics_6,x:6.628,y:-79.9163}).wait(2).to({graphics:mask_graphics_8,x:8.8528,y:-85.0898}).wait(2).to({graphics:mask_graphics_10,x:9.7592,y:-88.527}).wait(2).to({graphics:mask_graphics_12,x:-11.4539,y:-94.867}).wait(2).to({graphics:mask_graphics_14,x:11.7185,y:-101.6151}).wait(2).to({graphics:mask_graphics_16,x:11.9787,y:-106.3674}).wait(2).to({graphics:mask_graphics_18,x:12.3098,y:-110.8795}).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C1AC").s().p("AgjBvQgTgEgVgJIAAAAIgCgFIgCgCQgCgLgHgIIgKgNQA6gOAmgtQApgygNg/IALAAQAwAIAJAvQAIAkgEAkQgEAfgLAVQgPAegdALIgCAAIgBABQgVAGgUAAQgPAAgPgDg");
	this.shape.setTransform(5.6946,-112.5719);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C1AC").s().p("AFAEMQAEgIABgIIABgHIAJgMQAQgXADgbQAEgfgSgXIgBgBQgBgZgIgZQAOgLATgNQAdgUgFgiIAAgJQAFgFAKAEQAoARADApQADAhgaAVQgPALgTABQgOAAgCAOQgDARADASQAQBOg+A1QgOAMgTADQAQgSALgXgAi8EEQgagBgTgQQgWgRgOgaQgFgJgJAAQgdABgFAeQAAADgDADIgZAfQgmgGgagiIgkgtQA1AIAygPQAsgMAigdQA9AQAygnQANgKAJgNQAcgogNgvIgHgUQgMgegUgaQAIgIANgJQAVgOASgTQAQgRALgUQARgggEglQgEgjgIgiIAFAAQA6ALAKA5QAHAkgEAlQgIA4gdAwQgLARAKASQAmBCgXBKIgNAuQgHAYgQAVQgGAIgIAHQgwArg/AAIgNgBg");
	this.shape_1.setTransform(9.811,-126.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C1AC").s().p("Ak7DNQgfgWgTghQgIgOgGgQIgKgZQAhgFAkgJQA/gQAJg+QAEgggFggQAZAEAfADQAWADAWgFQBDgPANhDQAGgkgKgjIADgEQADgDAFgBIABAAQAwAIARAsQALAegGAgQgEAcgGAbQgKAkgaAYQgcAaglgOQgEgBgDACQgWAOAIAaQAOAtgRApQgCADgDADQg3AshFAPQgJACgJAAQgXAAgTgNgADABwQgOgLgLgOQAIgGARgDQAegGATgYQAmgvgZg5QAqAAAYgkQALgQgFgVIAMgCIACAAIADACQAwA8gBBKQAAAMgHAKQgTAggZAcQgOARgTAMQgRAKgUAFQgLACgLAAQgfAAgYgVg");
	this.shape_2.setTransform(11.7273,-128.7789);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C1AC").s().p("ACbCxQgSgHgJgRQAXgXAcgTQAzgkgTg7QAWgHASgQQATgRAAgaQAAgXgLgUIAHgBIACAAQBGAkAXBJQALAjgJAjQgCAKgJAGQgjAbggAcQgFAFgGAEQgiAVglAAQgXAAgZgJgAkOBpQgbgDgUgSQgngjgKgzQAXgGAbgEQA4gIAQg0QABgFAAgGQBAAQA0gtQATgQAGgYQAFgOgCgPQAAgCAAAAQAAgBAAgBQAAAAAAAAQABAAAAAAQA/A0gKBPQgDAUgIATQgTArgmAdQgUAQgYAMQgrAVgvAAIgXgBg");
	this.shape_3.setTransform(13.6775,-149.0569);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C1AC").s().p("AC4CeQgQgOgMgRQAyAAAYgsQANgXgEgcQAPgFAKgKQAMgKAGgNIADgKIACACQAMgUACgSQAIANAKALIABACQAPAhgNAaQACAJABAJQAEAxgUAsQgFAJgKAEIgmAOQgPAFgNAAQgYAAgUgSgAkWBqQgpgvgIg+QA/gDAeg5QACgEAAgGIgBggQAugCAlgeQATgPAEgXIAGAAQArANgEAuQgBAPgGANQgTAzg2APQgGABgCAHQgEATAHAVQACAGAAAHQAFA2gzAZQgPAHgNAAQgWAAgRgTg");
	this.shape_4.setTransform(14.5748,-168.3747);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C1AC").s().p("ACzC7QgJgPgGgQQAQgKARgOQAcgYgCglQAegDAcgTQALgGADgMQACgIADgCIAZAgIABACQARApgQAnQgFALgIAJQgkApgzAMQgHACgGAAQgWAAgNgXgAkqAcQghgbgDgpQAlgCAdgWQATgPgCgXQAhgDAdgVQAHgGAFgJQAOgggFgkIABAAQAnAWAQApQACAGAAAGQgFA3g0APQgLAEgLACQggAFAEAhQADAZgHAaQgSAOgTAAQgUAAgUgRg");
	this.shape_5.setTransform(15.4188,-180.3897);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4C1AC").s().p("ADIB2QgOgWgMgYQAYgEATgVQAsAJAlgYQAdAdgGArIgEAUQgGAYgYAFQgLACgKAAQgpAAgZglgAkcBAQgZgVgMgeQAJgEAOgIQAJgEAEgIQAjAMAggQQAoAdgRAvIAAABQgWATgWAAQgWAAgXgRgAjphTQgJgGgHgIQgIgHgCgLQAWgGAZgLQARgIAFgOQATAhAOAkIAAACQgRAPgTAAQgUAAgUgPg");
	this.shape_6.setTransform(13.2757,-193.6198);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[]},2).wait(2));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C4C1AC").ss(1,1,1).p("ACAgrQgPgMgXgJQhJgdg3AtQgIAGgIAIQgOAPgGATQgCAIgBAJQgBAFAAAFQAAAJABAKQgHgDgFgCQgEgBgEgBQgFgBgFABQgUADAAAj");
	this.shape_7.setTransform(-6.926,-99.8839);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D4D2C7").s().p("AilBmQAFgIAIgFQAMgJAQgDQABgLADgLIAHgQIgBAAQgBgEACgEIABgCIAEgGIABgBIABgBIABAAIACABIADgEIACgCIAGABIACABIAAAAIgFAAIgBAAIAAAAIgEAAIAEAAIAAAAIABAAIAFAAIAAAAIAIACIAMAFIgBgSIAAgBIADgKIABgBQAIgmAcgbIABgBIAAAAIABAAIAAgBQAggZAmAAIABAAIAAAAQAYAAAbAKIAAAAIADABIABABQAXAJAPAMIABABQANAOAKAUQAFAKABAMQAIA1gyAOQghAJgPgeQgKgRAEgTIgCgDIgCgBQgLgHgNACIgDADQgIAFgGAIQgBAcgKAZQgMAfgigDIgBALgAhSAUQAEAAAEgDIABgBIACgKIAAABIABASIgMgFgAhSAUIAAAAgAhHAGIAAAAgACHhAIAAAAgABhhVIgBgBIgDgBIAAAAQgbgKgYAAIAAAAIgBAAQgmAAggAZIAAABIgBAAIAAAAIgBABIAOgLQAVgQAYgDQBEgEAnAoQgPgMgXgJg");
	this.shape_8.setTransform(-7.6357,-97.7681);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADDheQAJAnAlgZQAJgGgDgMQgEgPgDgIQAqggghgnQghgngXAsQgLAWATAMQgWgEAAANQgyAKAoArQAVAEAFgHgAm2DTQgehxBzgbQgog3BGgTQgTgSAMgQQAAhrBgAWQBehqCSAmQBPAVAUBPQARBBgeA3AG9ABQAIgxhggPQhXgrgmBdQg5ARgfAl");
	this.shape_9.setTransform(0.4436,-110.0819);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4D2C7").s().p("Ah/EgQh8gFAHhaQhDBLhcgqIgNgGIgXgOIgEgCQgcgUgKgfIgGgSQgdhyBygZQgng4BFgUQgSgSAMgQQgBhrBhAWQBdhqCUAnQBOAUAUBQQAQBAgeA5IgEAHQgNAXgSASIgGAFQgOAQgTAMIgUANQBTBTg4BTQgiBJhBAAIgEAAgAFVDcQgVgRgTgdIgCgEIgBAEQgFASgNAMQgNAMgUAFIgIACIgPACQg+AHgsgnQgJgIgJgKQgWgbgKgdQgGgSgCgTIAAgRQAAgVAGgVIAFgQQAJgXAQgSQAeglA6gTQAmhdBWAsQBhAOgJAzQgCAJgFALQAXgHAVAMQArAYAKAcQAIAXgPAaQgIAOgOAOQAiAZADArIAAAHQgBASgMANQgSAUgRAMQgZATgYACIgGAAQgaAAgYgTgACSirQgFAHgVgEQgngrAxgJQAAgOAXAFQgTgNALgWQAWgsAhAnQAhAngqAgIAIAXQADAMgJAGQgPAKgKAAQgQAAgGgYg");
	this.shape_10.setTransform(5.2901,-102.4038);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C4C1AC").ss(1,1,1).p("AAAjHQAKArgEAsQgFAugjAbQgYASgNAIQAoAOAQAjQARAogCAtQAAArgZAiQgZAjgrARQgpAQgqgOQgjgMgQghQgKgWgFgWQgGAugoAYQgaAQgiADQgvAEgZgkQgYgkACgtQADgvAlgcQAagTAhABQgQgSgBggQgChOBFAIQgBglAdgEQgPgkAUgqQATgpAigbQAigbAugCQArgBAiAWQAmAZAMAtgAD1EXQgJgLgGgQQgMgiANgaQgeAkgvgNQgpgLgagjQgbgjABguQACgsAfgiQAhghAvgBQAtgBAgAbQASAQALAQQgCgxAzAPQARAFAAASQApgZAhAeQApAnggA3QgRAbgeAAQAeAhgFAuQgEAngeAYABehuQgOAAgCgZQgCgaAVAGQArgnADA5QAiA1g9AEQgjACANggg");
	this.shape_11.setTransform(6.6252,-130.7646);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D4D2C7").s().p("AEhEpQgcgIgQgVQgJgLgGgQQgMgiANgaQgeAkgugNQgqgLgagjQgbgjABguQACgsAfghQAhgiAvgBQAtgBAhAcQARAPALAQQgCgxAzAQQARAFAAARQApgZAhAeQApAnggA3QgRAbgeAAQAeAhgFAuQgEAngeAYIgEACQgaAUgcAAQgNAAgNgFgAiwDxQgjgMgQghQgKgWgFgWQgGAugnAYQgbAQgiADQgvAEgZgkQgYgkACgtQADgvAlgcQAagSAhAAQgQgSAAggQgDhOBFAIQgBgkAdgFQgPgkAUgqQATgpAjgbQAhgbAugCQArgBAiAWQAmAZAMAtQAKArgEAsQgFAugjAbQgYASgNAIQAoAPAQAiQARAogBAtQgBArgZAiQgZAjgrARQgWAJgXAAQgTAAgTgHgABeh5QgOAAgCgZQgCgaAVAGQArgnAEA5QAhA1g8AEIgFAAQgfAAANgeg");
	this.shape_12.setTransform(6.6252,-129.6703);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C4C1AC").ss(1,1,1).p("ABlisQhRA0BWADQAaABgCgdQgCgegbADgADBg4QgqAPgYAmQgaAoAcAkQAcAlArAIQgrAiAgAoQAbAhAtACQA3ADAEg0QACgTgHgKQAvAJAfgjQAPgTgGgYQgJgfgfgCQAJgYgegHQgMgCgOALQgNgogigdQgggdgrARgAgJgPQgmhAhQgDQAYh/hYgmQhagng8BRQg+BSBHBCQAMALANAJQgugKAJAgQhvAhBiBGQg2AzBABQQA9BMBKhAQA0gsgRhEQA5A+BRg3QBRg3gzhWg");
	this.shape_13.setTransform(8.8553,-144.1348);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D4D2C7").s().p("AlbDbQhAhQA2gzQhihGBvghQgJggAuAKQgNgJgMgLQhHhCA+hSQA8hRBaAnQBYAmgYB/QBQADAmBAQAzBWhRA3QhRA3g5g+QARBEg0AsQghAdggAAQglAAghgpgAEFDjQgtgCgbghQgggoArgiQgrgIgcglQgcgkAagoQAYgmAqgPQArgRAgAdQAiAdANAoQAOgLAMACQAeAHgJAYQAfACAJAfQAGAYgPATQgfAjgvgJQAHAKgCATQgEAxgxAAIgGAAgABqh1QhWgDBRg0QAbgDACAeQACAcgYAAIgCAAg");
	this.shape_14.setTransform(8.8553,-144.1348);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C4C1AC").ss(1,1,1).p("AgJAUQgRgYALgTQA8ALgqAiQgHAGgFgIg");
	this.shape_15.setTransform(18.5858,-171.8415);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C4C1AC").ss(1,1,1).p("AEtBOQAbgRALAhQAngMgNA4QgNA3g1gZQgXAmgxAAQguAAgTgqQgIgSAKgOQAFgJANgEQgmgbAFgyQAFgtAkgbQAmgdAoAYQApAZABAtQAAAggJALQgDADgDACAg6gGQgaAmgoAUQgoAUgXgYQgIA9g6gGQgygFgJgtQgDgOAGgNQg1ABAPg1QAFgUAOgCQgngPAAg3QAAgvApgXQAogYAtAJQAkAHAJAmQAsgMAoARQApAQATArQAVAtgbArg");
	this.shape_16.setTransform(9.7629,-156.43);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D4D2C7").s().p("ACiCkQgIgSAKgOQAFgJANgEQgmgbAFgyQAFgtAkgbQAmgdAoAYQApAZABAtQAAAggJALQgDADgDACQADgCADgDQAbgRALAhQAngMgNA4QgNA3g1gZQgXAmgxAAQguAAgTgqgAj9BnQgygFgJgtQgDgOAGgNQg1ABAPg1QAFgUAOgCQgngPAAg3QAAgvApgXQAogYAtAJQAkAHAJAmQAsgMAoARQApAQATArQAVAtgbArQgaAmgoAUQgoAUgXgYQgHA4gyAAIgJgBgABOiFQgRgZALgTQA+ALgrAjQgDACgDAAQgEAAgDgEg");
	this.shape_17.setTransform(9.7629,-156.43);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADhgaQgEgdgNADQggAnAxgNgAAXARQAggegIguQgJgsgxgKQgpgIggAhQgighgyAIQg0AJABArQABAyAuAGQgMAGAHAQQhFAAAhBFQAFALAOAAQAUABANgPQAaAoAzgJQA0gJgCgwQgBgVgLgEQAmAOAfgdg");
	this.shape_18.setTransform(-2.6649,-178.1857);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C4C1AC").ss(1,1,1).p("ABUg7QgYgqgyAGQguAFgIAwQgEAXAMAPQgsgagMA1QgKAwAtAUQAoARAUggQAhAmAoghQATgOgSgQQAZgVgdgMQAkghgZgsg");
	this.shape_19.setTransform(36.0043,-165.236);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D4D2C7").s().p("ADIClQgtgUALgwQAMg2ArAaQgMgPAEgXQAJgvAugFQAzgGAYApQAZAsglAiQAeAMgZAVQARAQgSAOQgpAhgggmQgOAVgWAAQgMAAgOgGgAkiAcQgMAOgUgBQgOAAgFgLQghhDBFgBQgHgQAMgGQgugGgCgzQgBgrA1gIQAygIAiAgQAgggApAIQAyAKAJAsQAIAuggAeQggAdgmgNQAKAEABAUQADAvg0AJQgJACgJAAQgmAAgWgggABPhsQANgDAEAeQgMADgHAAQgWAAAYgeg");
	this.shape_20.setTransform(10.1626,-172.6428);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C4C1AC").ss(1,1,1).p("AFPCAQgQAZgjgGQAIASgXAAQANAigzgDQgogCAVg4QgaAFgXgZQgageAbgbQArgqAoAbQADgMAKgEQAugQAaAlQAbAngYAmgAjfhYQgSgogwAPQgTAGACAYQgpgfACA1QABAMAMgBQgKAKAIANQAYAnAogXQADAQARAGQAUAJARgOQAlgdgbgmQAiATAfgWQAqgdgLgtQgKgtgugKQg1gMAAA4QgDAFAJASQgWANAJAZQAAACACAD");
	this.shape_21.setTransform(11.7135,-183.6123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D4D2C7").s().p("ADnDEQgogCAVg4QgaAFgXgZQgageAbgbQArgqAoAbQADgMAKgEQAugQAaAlQAbAngYAmQgQAZgjgGQAIASgXAAQAMAfgqAAIgIAAgAj6ALQgRgGgDgQQgoAXgYgnQgIgNAKgKQgMABgBgMQgCg1ApAfQgCgYATgGQAwgPASAoIACAFIgCgFQgJgZAWgNQgJgSADgFQAAg4A1AMQAuAKAKAtQALAtgqAdQgfAWgigTQAbAmglAdQgLAIgLAAQgIAAgHgDg");
	this.shape_22.setTransform(11.7135,-183.6123);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C4C1AC").ss(1,1,1).p("AFCBWQADg0gygEQgdgCgHAfQgzgxgSBAQgNAvA1AGQAUACALgQQANA4AtgjQAcgWgFgagAk6gEQAHAHAMgCQgnAvA6AeQAhATgBgqQA4APgBg6QAAgUgVgBQgQgBgGANQAEglgrAAQgmghgMArQgDALAKAJgAkJhzQgOAgAcAVQAoAfAjgaQAHgGACgHQALgwgsgVQgsgWgVAug");
	this.shape_23.setTransform(11.973,-197.987);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4D2C7").s().p("ADxBxQgLAQgUgCQg1gGANgvQAShAAzAxQAHgfAdACQAyAEgDA0QAFAagcAWQgRANgNAAQgUAAgIgigAkUBOQg6geAngvQgMACgHgHQgKgJADgLQAMgrAmAhQArAAgEAlQAGgNAQABQAVABAAAUQABA6g4gPQABAdgQAAQgHAAgKgGgAj7g+QgcgVAOggQAVguAsAWQAsAVgLAwQgCAHgHAGQgQAMgRAAQgVAAgVgRg");
	this.shape_24.setTransform(11.973,-197.987);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADcBPQAHgSACAHQAcAnglgcgAE0BkQgJAJgIgJQgmgsApgIQA0ALgmApgAjyhnQAqAgg0ABQgXABAKgSQAKgSANACgAk4ABQADgLAMAHQgGAAgJAEQgcAxArgHQACATAfgDQAogog6AEQgBgagOAA");
	this.shape_25.setTransform(12.3098,-212.3601,0.9,0.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D2C7").s().p("AEjBkQgmgsApgIQA0ALgmApQgFAEgEAAQgEAAgEgEgADcBPQAHgSACAHQARAXgGAAQgEAAgQgMgAkpArQgrAHAcgxQAJgEAGAAQAOAAABAaQA6gEgoAoIgIAAQgXAAgCgQgAkJhXQAKgSANACQAqAgg0ABIgBAAQgVAAAJgRg");
	this.shape_26.setTransform(12.3098,-212.3601,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26},{t:this.shape_25}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-222.7,99.7,222.7);


(lib.ee6bits = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiNFAQiKgFAHhlQhOBZhxg7IgZgPQgigXgNgkQgxiQCJgfQgrg+BNgWQgVgUANgSQAAh3BrAYQBoh1CkArQBXAWAWBZQATBMgnBCQgRAegXAWQgaAagiATQBcBdg+BcQglBRhJAAIgEAAgAFMC9QgLAwg4ALQheASg8hIQgYgdgLghQgSgyAPg5QAYhbBrgiQAqhoBgAxQCAATgmBMQAZgIAYANQBsA9hSBTQAmAbADAwIAAAIQgBAUgNAPQg0A7gwAAQg2AAgwhNgACii+QgFAIgXgFQgsgvA3gLQAAgPAZAFQgWgOANgYQAZgxAkArQAlAsgvAjIAJAZQADANgKAHQgQAMgMAAQgSAAgGgbg");
	var mask_graphics_2 = new cjs.Graphics().p("AFBFKQgwgOgRgwQgOgmAOgdQghAogzgOQgugNgegnQgdgmABgzQACgxAjglQAkgmA1gBQAxgCAkAgQAUARAMASQgBg3A4ASQATAGgBASQAugcAkAiQAvAsglA9QgSAegigBQAiAmgGAyQgFAuglAbQgdAVgfAAQgOAAgPgFgAjAEOIgEgCIgKgDQgfgPgPggQgMgYgFgZQgHAzgsAaQgeASglAEQg0AEgcgoQgbgoADgyQADg0ApgfQAdgVAkABQgRgUgBgkQgChWBMAIQgBgoAhgFQgSgoAXgvQAVgtAmgfQAmgeAygBQAwgBAmAYQAqAbANAzQAMAvgFAxQgFAzgnAeQgbAUgOAJQAsARASAmQATAsgCAyQAAAwgcAmIgGAHQgXAdgkARIgLAEQgZAKgZAAQgTAAgTgFgABpiHQgRAAgBgcQgCgcAWAGQAwgrAEBAQAlA6hDAFIgEAAQgjAAAPgig");
	var mask_graphics_4 = new cjs.Graphics().p("AmCDzQhHhZA8g4QhshOB7gkQgKgkAzALQgOgKgOgNQhPhJBFhbQBDhZBkArQBhAqgaCNQBYADArBIQA5BfhaA9QhbA9g/hEQATBLg5AxQgmAggiAAQgqAAglgugAEiD8QgygCgeglQgkgsAxgmQgwgJgfgoQgfgpAdgtQAagpAugSQAwgSAkAgQAlAgAPAtQAQgMANACQAhAHgJAcQAhACAKAiQAIAbgSAVQgiAng0gLQAIAMgCAVQgFA2g3AAIgGAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AC0C2QgJgTALgRQAGgJAPgFQgrgeAGg3QAFgyAogeQAqggAtAaQAuAbABAzQAAAkgLAMQgCADgEACQAEgCACgDQAegTANAkQArgNgPA+QgOA9g6gbQgbAqg1AAQgzAAgWgvgAkaBzQg2gGgLgzQgDgPAGgPQg6ACAQg7QAGgXAQgBQgsgRAAg+QAAgzAugbQAtgZAxAJQApAIAKAqQAwgNAsASQAuATAWAvQAWAzgeAvQgcAqgtAWQgsAWgagaQgIA+g3AAIgLAAgABXiUQgTgcAMgVQBFAMgvAnQgEADgEAAQgEAAgDgFg");
	var mask_graphics_8 = new cjs.Graphics().p("AhSBcQgOAQgWgBQgPAAgGgMQglhMBNgBQgIgRAOgHQg0gGgBg4QgBgwA6gKQA3gIAlAkQAkglAuAJQA3ALAKAxQAJA0gkAgQgjAhgqgPQALAEABAXQADA1g6AKQgJACgKAAQgqAAgYgkg");
	var mask_graphics_10 = new cjs.Graphics().p("AEADaQgsgDAYg9QgeAFgZgcQgdghAegeQAwgvAsAeQAEgNAKgEQA0gSAcAoQAfAsgbArQgRAbgngGQAIATgaABQAOAiguAAIgKAAgAkWANQgTgIgEgSQgrAagbgrQgJgOALgMQgOACgBgOQgCg6AtAhQgCgaAWgHQA1gQAUAsIACAFIgCgFQgKgbAZgPQgKgUACgFQAAg/A8ANQAzAMALAxQAMAygvAhQgiAYgmgVQAeArgpAgQgMAJgNAAQgIAAgIgDg");
	var mask_graphics_12 = new cjs.Graphics().p("AEMB+QgMASgWgDQg8gHAPg0QAUhHA5A3QAIgjAgADQA4AEgEA6QAGAcggAZQgTAPgOAAQgWAAgJgmgAkzBXQhAghArg1QgNACgIgHQgLgKADgMQANgwArAkQAwAAgFAqQAHgPASABQAXABAAAXQABBAg+gRQABAggSAAQgIAAgLgGgAkXhEQgfgYAPgjQAYg0AxAYQAwAYgMA1QgBAJgJAGQgSANgTAAQgWAAgYgSg");
	var mask_graphics_14 = new cjs.Graphics().p("AF+NLQg5gHAFg6QgcAUgigGQgQgCgOgHQgpAXgdgSIAAhOIjgAAIACgEIADgGQANgRARgNIAOgKQAJABAIgHIgIAIIAIgIIAAAAIABgBIAGgGIABgBQAkghAnAAIAAAAIAAAAQAQAAAQAGQADADAFABQAMAEAIAJIAHAGQAGAFAHAEQARAJACARQABAEADACIADABQAQAGAMgPIAIgBQAKgBAKACIAHADIADABIABABQALAKAPgEQAOgEANgHQALgGANgDIAMgCIAKACQAUABANANIAGAFQAOAJAGARQAVBAghA2QgIAOgRAAIgFAAgADFK+IAAgBQAXgYAYAAIABAAIAAAAQAUAAAVAQQgVgQgUAAIAAAAIgBAAQgYAAgXAYIAAABQADgHAAgHIgBgEIABAEQAAAHgDAHIAAAAgADFK+IAAAAgAAPKFIACgGQAggVAmgGQARgDAPACQACAFAEADQgQgGgQAAIAAAAIAAAAQgnAAgkAhIgBABIgGAGQADgDABgFgAmvJnIAAAAQABgKADgJIAHgSIgBAAQgBgFACgEIABgDIAFgGIABgBIABgBIABAAIACABIAEgFIABAAIADAAIAAAAIABAAIAEAAIACAAIAJACIANAGIgBgTIAAgCIADgNIABAAQAJgrAfgdIAPgNQAZgSAbgDQBngGAqBVQAGALABANQAJA9g3APQgLADgKgBQhEAjhGAAQg6AAg6gXgAiEJBQAOggAAgZQAAg2hDgbIgFgCIgBAAIAAgBQgdgKgaAAIgBAAIAAAAQgrAAgkAbIgDACIAAABIAAgBIADgCQAkgbArAAIAAAAIABAAQAaAAAdAKIAAABIABAAIAFACQBDAbAAA2QAAAZgOAggAB9JrIAAAAgAmBIsQAEAAAEgDIABgBIADgLIAAACIABATIgNgGgAmKIqIAAAAgAmMIqIgEAAIgBAAIAAAAIgDAAIgBAAIACgCIAGABIADABIgCAAgAl1IdIAAAAgADap+QglgsApgIQAzALgmApQgEAEgEAAQgFAAgEgEgACTqTQAIgSACAHQAQAXgGAAQgEAAgQgMgAlyq3QgqAHAbgxQAJgFAGAAQAPAAAAAbQA6gEgoAoIgIAAQgXAAgCgQgAlRs6QAKgSAMACQArAgg1ABIgBAAQgVAAAKgRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5.2609,y:-97.3942}).wait(2).to({graphics:mask_graphics_2,x:6.7533,y:-127.6945}).wait(2).to({graphics:mask_graphics_4,x:9.2254,y:-143.7597}).wait(2).to({graphics:mask_graphics_6,x:10.2325,y:-157.4195}).wait(2).to({graphics:mask_graphics_8,x:-13.3377,y:-181.5964}).wait(2).to({graphics:mask_graphics_10,x:12.4095,y:-187.622}).wait(2).to({graphics:mask_graphics_12,x:12.6986,y:-203.6012}).wait(2).to({graphics:mask_graphics_14,x:20.3116,y:-145.6643}).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C1AC").s().p("AlWDRQg6gmAKhLQAIhCBCgeQgagkAWglQAKgRASgBQARABAKAOIABACIAHABIAGACIAEAHQACAGAAAFIAFAIIAFAGQA6ABgZAxQgNAagWATIgDgBQgSAFgIAPIgDABIAAAFQgDAIAAALIgDA1QgFA0AgApQALAOAMALQhDgJgyg1gAhgCIIADACIgCADIgBgFgAFbiwQgigGgXgbQgBgSAAgTQABgGACgGIACgDIAIgHIACgBIAIgBQAXAFgCAYIAAADQAWAOAgAGQADAAABAEQAHAngkAAIgPgBg");
	this.shape.setTransform(-12.1836,-96.5125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C1AC").s().p("AFMEGQhIgTgUhDQgCgHAAgIQhzAJgxhuQgHgRgEgSQgHgigEgiQgGgxA0ABIAQAAIAEgEIADgDIADAAIAGgBIAAgBQAiAWgJAwIAAAEQAbAjApAYQAiAMAjgMQAGgCAGAEQAaARgFAhQAYAwAzAFQAfADAfAFQAfAEgEAfQgDAbgUAVQgmAog0AAQgVAAgXgHgAjaCzQgYgQgNgZQhMBOhqgZQgHgCgHgGQgXgWAAgfQghhLAqhKQALgVAUgNQgjg5AsgtQAKgJAOADQANADAJAKQADgVAWgHIAAAAIALAHIADADQgMA2A1ALQAkAIgPAfQgUArgnAcQgQAMAEATQAbAQAhgFQAkgXAkgRQAFgDAGAEQgFARgBASQgCAtAMApQAHAYARAUQAMAOAOANQgjgFgfgUgABljHQgNgZABgdQAEgJAKgEIAHgCQAbATAYAZIADAEQA3AMgcApQgHALgOAAIgBAAQguAAgWgrg");
	this.shape_1.setTransform(4.967,-119.2857);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C1AC").s().p("Ak+CXQgKgCgHgJQhChYgQhtQgFghAZgYIACgHIAFgIIAEgCIAGgBQASAMAQARIADADQAagCAfACQAKABABAKQABAigLAfQgCAHACAHIABAIQAnAkAtgeQAGgvAogNQAHgCAHAGQANAMAPAJQAiAUAmAGQAGABACAGQAMA8hGAFIgoAEIgYADQgmBUhOAAQgWAAgagHgAD+CQQgRgFgLgNQgxg4AHhLQglgggBgvQAAgVASgMQAAgTALgOQAGgHAIAAQAUAEACAVIAAADQALAGAFAKIACADQAmAXArAIQAIABAAAJQgDAjgJAiQgDAJgBALQAsAlA7AIQAJABADAKQANAvgzATQghAMghAAQgdAAgegKg");
	this.shape_2.setTransform(5.1477,-129.6879);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C1AC").s().p("AESDLQhVgzgBhjIABgTQABgSAOgMQADgKgBgMQgBgFACgGQAOgTAUgDQAcAGgIAaIgCAEQACAIAMAKIAEADQA6AAgUAwQgFALgIAIQgQAQgBAWQAmAnA3AJQAJABADAJQAOAogpAJQgOADgNAAQghAAgdgSgAk1AuQg6guADhOIAAgSQgngUAPgoQAHgTAVgGQADgQAFgPQADgIAHAAQAIAIABALIABADQAvAfA2AGQAGAAADAHQAJAdgWAYQAAAPgCAPIgBAPQANAOAKAPIADAEQAtgHAeAcQAQAOgNASQgOAUgXALQgfAQgdAAQgpAAglgfg");
	this.shape_3.setTransform(5.3698,-153.0469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C1AC").s().p("AF5DUQgtgIgfghQgtABgogWQgwgbANg5QADgGAGgEQAHgEAFgBQAeAGACAfIABADQAVATAigMQArgTAbAtQAJAPASAEQAxANgZApQgJAPgSAAIgHAAgAmQgOQgSgTgBgbQgBgwAdgjQgDgaAHgdQACgGAEgFIADgBIAGgBQAVAIgBAYIAAADQAngDAXAbQAKAMgDAPQgDANgFANQAKBIBNgJQANgBAFAMQAXAyg7ANQgYAGgXAAQhLAAg4g6g");
	this.shape_4.setTransform(9.7547,-172.2722);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C1AC").s().p("AEPCuQgsgWABgvQhHgbAahHQADgIAIgFIADAAIAGgBIAAgBQAaALAAAgIAAACQApgPAXAgQAMAPgFAUQgCAFAAAGQAXARAmACQAJAAAFAIQAbAxg5AJQgLACgKAAQgaAAgZgNgAjvgnQgbgJgRgXQhagEgIhYQgBgMAMgGQAIgEAGgBQAfALAHAhIABAEQAogJAhAYIANALQA9gFAFA1QABAKgIAHQgTANgVAAQgNAAgOgFg");
	this.shape_5.setTransform(9.6665,-181.4851);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4C1AC").s().p("AFGCsQgYgFgPgSQhHADglg7QgagrApgPQAbAKAQAaIADADQAugEArANQAIACAEAJIAEALQAyAkgyAdQgFAEgHAAIgHgCgAlZA3QgagbACglQACgaAPgWQAHgJAKgBQAmAXgIAyIAAAEQAgAaAugEQAMgBAGALQAVArgwAHQgLACgLAAQgzAAgkgngAjVgvQg8gLgUgyQgKgZAJgaQAFgOAOAAQAXAJAAAbIAAAEQAtAQAkAaQAGADgBAIQgCAjgfAAIgOgCg");
	this.shape_6.setTransform(11.6177,-201.6437);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4C1AC").s().p("AhAAzQgHgKABgOQAGgpAxAIQgFg4AxgVQAeANgNAnQgDAKABAMQAmAPgPAiQgHAQgPAKQgcASgXAAQggAAgaghg");
	this.shape_7.setTransform(-15.413,-91.4847);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).wait(2));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C4C1AC").ss(1,1,1).p("Aj0AzQgBh2BsAYQBoh1CiArQBYAWAWBZQASBGggA+QgBACgBAC");
	this.shape_8.setTransform(-12.3503,-115.2537);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C4C1AC").ss(1,1,1).p("AChj/QgNAYAWAOQgZgFAAAPQg3ALAsAvQAXAFAFgIQAKAsAqgdQAKgHgDgNQgFgQgEgJQAvgjglgsQgkgrgZAxgAIkDSQABgEgBgEQgDgwgmgbQBShThsg9QgYgNgZAIQAmhMiAgTQhggxgqBoQg0ARghAfAnPEaQgMgHgNgIQgigXgNgkQgxiQCJggQgrg9BNgWQgVgUANgS");
	this.shape_9.setTransform(5.2609,-101.1978);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4D2C7").s().p("AiNFAQiKgFAHhlQhOBZhxg7IgZgPQgigXgNgkQgxiQCJgfQgrg+BNgWQgVgUANgSQAAh3BrAYQBoh1CkArQBXAWAWBZQASBHggA+IgDAEIgDAFIgJAPQgOAVgRAQIgTASQgTAPgWAMQBcBdg+BcQglBRhJAAIgEAAgAFMC9QgLAwg4ALQgyAKgpgRQgjgOgcghQgYgdgLghQgSgyAPg5QANgtAhggQAhgfA0gRQAqhoBgAxQCAATgmBMQAZgIAYANQBsA9hSBTQAmAbADAwIAAAIQgBAUgNAPQg0A7gwAAQg2AAgwhNgACii+QgFAIgXgFQgsgvA3gLQAAgPAZAFQgWgOANgYQAZgxAkArQAlAsgvAjIAJAZQADANgKAHQgQAMgMAAQgSAAgGgbg");
	this.shape_10.setTransform(5.2609,-97.3942);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C4C1AC").ss(1,1,1).p("ABDBqQgiAogygOQgugNgdgnQgegmABgyQACgyAjglQAkgmA0gBQAxgCAlAgQAUARAMAT");
	this.shape_11.setTransform(25.7343,-118.1815);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C4C1AC").ss(1,1,1).p("AjOEJQgfgPgPggQgMgYgFgZQgHAzgsAaQgeASglAEQg0AEgcgoQgbgoADgyQADg0ApgfQAdgVAkABQgRgUgBgkQgChWBMAIQgBgoAhgFQgSgoAXgvQAVgtAmgfQAmgeAygBQAwgBAmAYQAqAbANAzQAMAvgFAxQgFAzgnAeQgbAUgOAJQAsARASAmQATAsgCAyQAAAwgcAmQgDAEgDADABpiHQgRAAgBgcQgCgcAWAGQAwgrAEBAQAlA6hDAFQgoACAQgkgAE3AaQgBg3A4ASQATAGgBASQAugcAkAiQAvAsglA9QgSAegigBQAiAmgGAyQgFAuglAbQgrAfgugPQgwgOgRgwQgOgmAOgd");
	this.shape_12.setTransform(6.7533,-127.6945);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D2C7").s().p("AFBFKQgwgOgRgwQgOgmAOgdQghAogzgOQgugNgegnQgdgmABgzQACgxAjglQAkgmA1gBQAxgCAkAgQAUARAMASQgBg3A4ASQATAGgBASQAugcAkAiQAvAsglA9QgSAegigBQAiAmgGAyQgFAuglAbQgdAVgfAAQgOAAgPgFgAjAEOIgEgCIgKgDQgfgPgPggQgMgYgFgZQgHAzgsAaQgeASglAEQg0AEgcgoQgbgoADgyQADg0ApgfQAdgVAkABQgRgUgBgkQgChWBMAIQgBgoAhgFQgSgoAXgvQAVgtAmgfQAmgeAygBQAwgBAmAYQAqAbANAzQAMAvgFAxQgFAzgnAeQgbAUgOAJQAsARASAmQATAsgCAyQAAAwgcAmIgGAHQgXAdgkARIgLAEQgZAKgZAAQgTAAgTgFgABpiHQgRAAgBgcQgCgcAWAGQAwgrAEBAQAlA6hDAFIgEAAQgjAAAPgig");
	this.shape_13.setTransform(6.7533,-127.6945);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C4C1AC").ss(1,1,1).p("ABxi/QhaA5BfAEQAdABgCggQgDgigdAEgADWg/QguASgaApQgdAtAfApQAfAoAwAJQgxAmAkAsQAeAlAyACQA9ADAFg5QACgVgIgMQA0ALAignQASgVgIgbQgKgighgCQAJgcghgHQgNgCgQAMQgPgtglggQgkgggwASgAgKgQQgrhIhYgDQAaiNhhgqQhkgrhDBZQhFBbBPBJQAOANAOAKQgzgLAKAkQh7AkBsBOQg8A4BHBZQBEBVBThHQA5gxgThLQA/BEBbg9QBag9g5hfg");
	this.shape_14.setTransform(9.2254,-143.7597);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D2C7").s().p("AmCDzQhHhZA8g4QhshOB7gkQgKgkAzALQgOgKgOgNQhPhJBFhbQBDhZBkArQBhAqgaCNQBYADArBIQA5BfhaA9QhbA9g/hEQATBLg5AxQgmAggiAAQgqAAglgugAEiD8QgygCgeglQgkgsAxgmQgwgJgfgoQgfgpAdgtQAagpAugSQAwgSAkAgQAlAgAPAtQAQgMANACQAhAHgJAcQAhACAKAiQAIAbgSAVQgiAng0gLQAIAMgCAVQgFA2g3AAIgGAAgAB2iCQhfgEBag5QAdgEADAiQACAfgbAAIgCAAg");
	this.shape_15.setTransform(9.2254,-143.7597);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C4C1AC").ss(1,1,1).p("AAEAYQgIAHgGgJQgTgbAMgVQBEAMgvAmg");
	this.shape_16.setTransform(20.0452,-174.5469);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C4C1AC").ss(1,1,1).p("AFOBXQAegTANAkQArgNgPA+QgOA9g6gbQgbAqg1AAQgzAAgWgvQgJgTALgRQAGgJAPgFQgrgeAGg3QAFgyAogeQAqggAtAaQAuAbABAzQAAAkgLAMQgCADgEACAhBgHQgcAqgtAWQgsAWgagaQgJBEhBgGQg2gGgLgzQgDgPAGgPQg6ACAQg7QAGgXAQgBQgsgRAAg+QAAgzAugbQAtgZAxAJQApAIAKAqQAwgNAsASQAuATAWAvQAWAzgeAvg");
	this.shape_17.setTransform(10.2325,-157.4195);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4D2C7").s().p("AC0C2QgJgTALgRQAGgJAPgFQgrgeAGg3QAFgyAogeQAqggAtAaQAuAbABAzQAAAkgLAMQgCADgEACQAEgCACgDQAegTANAkQArgNgPA+QgOA9g6gbQgbAqg1AAQgzAAgWgvgAkaBzQg2gGgLgzQgDgPAGgPQg6ACAQg7QAGgXAQgBQgsgRAAg+QAAgzAugbQAtgZAxAJQApAIAKAqQAwgNAsASQAuATAWAvQAWAzgeAvQgcAqgtAWQgsAWgagaQgIA+g3AAIgLAAgABXiUQgTgcAMgVQBFAMgvAnQgEADgEAAQgEAAgDgFg");
	this.shape_18.setTransform(10.2325,-157.4195);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C4C1AC").ss(1,1,1).p("ACsAOQgEgggPAEQgjArA2gPgAiBBQQAqAPAkghQAkghgJgzQgKgxg3gLQgvgJgjAl");
	this.shape_19.setTransform(4.2,-185.9772);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C4C1AC").ss(1,1,1).p("AF9APQgbgtg4AGQg0AGgJA1QgEAZANARQgxgegNA9QgLA1AyAWQAsATAYgjQAkAqAtglQAVgQgUgRQAcgXghgOQApgmgcgxgAjsigQgmgkg3AJQg6AJABAwQABA4A0AHQgOAHAIASQhNAAAlBMQAGAMAPAAQAWABAOgQQAeAsA4gKQA6gKgDg1QgBgWgLgF");
	this.shape_20.setTransform(10.6854,-175.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D4D2C7").s().p("ADfC3QgygWALg1QANg9AxAeQgNgRAEgZQAJg1A0gGQA4gGAbAtQAcAxgpAmQAhAOgcAXQAUARgVAQQgtAlgkgqQgQAXgYAAQgNAAgPgHgAlCAfQgOAQgWgBQgPAAgGgMQglhMBNAAQgIgSAOgHQg0gHgBg4QgBgwA6gJQA3gJAmAkQAkgkAuAJQA3ALAKAxQAJAzgkAiQgjAggqgPQALAFABAWQADA1g6AKQgKACgKAAQgqAAgYgkgABYh4QAPgDAEAhQgNADgIAAQgZAAAbghg");
	this.shape_21.setTransform(10.6854,-175.4328);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C4C1AC").ss(1,1,1).p("Agvg+QAygSAdApQAeAqgaArQgSAcgmgH");
	this.shape_22.setTransform(46.066,-177.9648);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C4C1AC").ss(1,1,1).p("AFdCkQAIATgZABQAPAlg5gDQgtgDAYg9QgdAFgZgcQgeghAfgeQAvgvAsAeQAEgNALgEAjXhiQgUgsg1AQQgVAHACAaQgughADA6QABAOAOgCQgLAMAIAOQAbArAsgaQAEASASAIQAWAJATgPQApgggdgrQAlAVAjgYQAvghgMgyQgMgxgzgMQg7gNAAA/QgDAFAKAUQgZAPAKAbQABACABAD");
	this.shape_23.setTransform(9.064,-187.622);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4D2C7").s().p("AEADaQgsgDAYg9QgeAFgZgcQgdghAegeQAwgvAsAeQAEgNAKgEQA0gSAcAoQAfAsgbArQgRAbgngGQAIATgaABQAOAiguAAIgKAAgAkWANQgTgIgEgSQgrAagbgrQgJgOALgMQgOACgBgOQgCg6AtAhQgCgaAWgHQA1gQAUAsIACAFIgCgFQgKgbAZgPQgKgUACgFQAAg/A8ANQAzAMALAxQAMAygvAhQgiAYgmgVQAeArgpAgQgMAJgNAAQgIAAgIgDg");
	this.shape_24.setTransform(12.4095,-187.622);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C4C1AC").ss(1,1,1).p("AFmBgQAEg6g4gEQgggDgIAjQg5g3gUBHQgPA0A8AHQAWADAMgSQAPA+AxgnQAggZgGgcgAldgEQAIAHANgCQgrA1BAAhQAlAVgBgvQA+ARgBhAQAAgXgXgBQgSgBgHAPQAFgqgwAAQgrgkgNAwQgDAMALAKgAi6hOQAMg1gwgYQgxgYgYA0QgPAjAfAYQAsAhAngcQAJgGABgJg");
	this.shape_25.setTransform(12.6986,-203.6012);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D2C7").s().p("AEMB+QgMASgWgDQg8gHAPg0QAUhHA5A3QAIgjAgADQA4AEgEA6QAGAcggAZQgTAPgOAAQgWAAgJgmgAkzBXQhAghArg1QgNACgIgHQgLgKADgMQANgwArAkQAwAAgFAqQAHgPASABQAXABAAAXQABBAg+gRQABAggSAAQgIAAgLgGgAkXhEQgfgYAPgjQAYg0AxAYQAwAYgMA1QgBAJgJAGQgSANgTAAQgWAAgYgSg");
	this.shape_26.setTransform(12.6986,-203.6012);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADsoXQAHgSACAHQAcAnglgcgAFEoDQgJAKgIgKQgmgrApgIQA0ALgmAogAgsK8QAthihigoQhRggg/AyQgJAHgIAJQgQAQgGAWQgDAJgBAKQgBAGAAAGQAAAKABAKQgHgDgGgCQgFgBgEgBQgGgBgFABQgXADABAnAjsqtQgXAAAKgRQAKgSANABQAqAgg0ACgAkopmQADgMAMAIQgHAAgIAEQgcAxArgGQACASAfgDQAogng6AEQgBgbgOAA");
	this.shape_27.setTransform(11.4807,-158.0433);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D4D2C7").s().p("ABqLlIABgGQAhgVAlgHQARgCAQACQACAEAEADQg8gUg3A2QADgDACgEgAlVLGIAAAAQABgKADgJIAHgRIgBgBQgBgEADgEIABgDIAEgHIABgBIABAAIACgBIACABIADgEIACgDIAHABIACACIAJACIANAFIgBgSIAAgDIAAADIABASIgNgFQAEAAAFgDIABgCIACgLIADgMIACgBQAIgqAfgeIAQgMQAYgSAbgEQBogGAqBVQAFAMACANQAIA8g3AQQgLADgJgBQhFAihGAAQg5AAg7gXgAgqKgQAPgfAAgZQAAg3hEgbIgFgCIAAAAIgBAAQgdgLgaAAIAAAAIgBAAQgqAAgkAcIgDACIgBAAIABAAIADgCQAkgcAqAAIABAAIAAAAQAaAAAdALIABAAIAAAAIAFACQBEAbAAA3QAAAZgPAfgAkwKKIgCAAIgEgBIAAAAIgBAAIgCAAIgCABIACgBIACAAIABAAIAAAAIAEABIACAAIAAAAgAkaKRIAAAAgAE1ofQgmgrApgIQA0ALgmAoQgFAFgEAAQgEAAgEgFgADuozQAHgSACAHQARAWgGAAQgFAAgPgLgAkXpXQgrAGAcgxQAJgFAGAAQAOAAABAcQA6gEgoAnIgIAAQgXAAgCgPgAj3raQAKgSANABQAqAgg0ACIgBAAQgVAAAJgRg");
	this.shape_28.setTransform(11.2692,-155.2058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},2).to({state:[{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_28},{t:this.shape_27}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-231,111.7,165.6);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoXBUQAEgaANgTQgOANgNAeQgCgGAAgKIhlABQgCAAgEARQgCgOAAgiIChgGIAAABQgVAUgMAhgAl2AaIBFgCIAAAzIgjABQgPgfgTgTgAkXAXIA6gCIAAAsIgBAIIg6ABgAjGBAIAAgsIFZgLQAAAhACAUIlbAKQABgEgBgEgACbAIIAkgBQAAAhACAUIgkABQgCgTAAgigADHAHIDlgHQgEALgFAjQAqhuBIgQQBMgRAwBFIgqACQgzgegvAVQgxAWgaBDIjwAGQgDgVAAggg");
	mask.setTransform(66,11.132);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4E4E","#010101"],[0,1],0.1,2.8,0.3,15.7).s().p("AqThXIUkgTIADDCI0kATg");
	this.shape.setTransform(65.95,10.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.3,2.7,131.39999999999998,16.900000000000002), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3BQQgWgCgJgFQgZgPgkhGQgNgbAFgUIAiAEQgFAOAEAMQAMAkARAZQAPAYAMAEQAmAIBAADQA5ACAlgDQAZgUgPhVQAFABADAEIABAAQAGAUADAYQgGA8gQAMQgjADgjAAQg9AAg8gJgAB8g1QgOgEjcgNQgFAAgDADIghgDQAEgLACgCQAFgGAJABQCyAGBTANQAHADAHAUQgIgGgMgBg");
	mask.setTransform(23.8454,22.68);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#989898","#FFFFFF"],[0,1],8.7,-4.9,25.6,-14.5).s().p("AjsgtIE9i2ICcERIk9C2g");
	this.shape.setTransform(23.7,22.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(8.1,13.8,31.5,17.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACzAmIALATQipgPiHgEQgMABgGAIQgog8g3gvQATALAdAcIAsAsQgWgogqgyQDjARBRAfIgOgOQA4AWBNBPg");
	mask.setTransform(28.85,26.95);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6E6E5","#FFFFFF"],[0,1],-6.9,-11.5,8,13.5).s().p("AkggfIGMjtIC0EsImLDtg");
	this.shape.setTransform(28.85,26.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(6,20.2,45.7,13.599999999999998), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA+BiIALgDQhPhuhThPQgdgHg3gIIBgAHQA9AHAZAHQBdBiBIBkQgfgGhRgGg");
	mask.setTransform(27.075,26.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#010101","#FFFFFF"],[0,1],-7.1,11.9,22.4,-37.3).s().p("AkOAzIC9k5IFgDTIi9E6g");
	this.shape.setTransform(27.075,26.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(9.7,15.3,34.8,21.999999999999996), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgJAGQgEgDACgEQACgHAJAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	mask_1.setTransform(1.2202,0.852);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4C57").s().p("AgEAAQgBgEAFgBQAEAAABAFQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgBgGgAgBgEQgDABABADIAAAAQAAAHAFgCQACgBAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgCgBIgBABg");
	this.shape_1.setTransform(1.754,1.0229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4C57").s().p("AgCABQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQABABAAABQABADgDABIgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_2.setTransform(1.775,1.0739);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A4C57").s().p("AAAACIgGACQAAgFAGgBQADgBADADIABAEg");
	this.shape_3.setTransform(1.75,0.5889);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D8688").s().p("AgFACQgCgGAGgCQAFgCACAHQACAGgGACIgCAAQgEAAgBgFg");
	this.shape_4.setTransform(1.825,1.0237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A4C57").s().p("AgCAHQgDgCgBgDIABgFQABgCADgBQABgBADABQADACAAADQACAHgGABIgCABIgCgBg");
	this.shape_5.setTransform(1.7652,1.025);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(1.1,0.3,1.4,1.4), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgJAGQgEgDACgEQACgHAJAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	mask_1.setTransform(1.2202,0.852);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A4C57").s().p("AgCABQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABABAAABQAAADgCABIgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(1.8375,1.0739);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A4C57").s().p("AAAACQgDAAgDACQAAgFAGgBQADgBACADIACAEg");
	this.shape_2.setTransform(1.8231,0.5889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D8688").s().p("AgFACQgCgGAGgCQAFgCACAHQACAGgGACIgCAAQgEAAgBgFg");
	this.shape_3.setTransform(1.875,1.0237);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4C57").s().p("AgGACIABgFQABgCADgBQAFgDADAIQACAGgHACIgCABQgEAAgCgGg");
	this.shape_4.setTransform(1.8402,1.025);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(1.2,0.3,1.3,1.4), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgFAHQgCgBgCgEQgCgDACgBQAEgDAFgBQAFgCAFACQACAJgLAEIgDABIgDgBg");
	mask_1.setTransform(1.0594,0.7554);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#394854").s().p("AgCADIgBAAQgCgCABgDQABgDADAAIAAAAQAEAAABAFIgCABIAAAAQABAEgDABIgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(0.68,0.7341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D9199").s().p("AgEABQgDgGAGgBQADgCADAHQACAHgFABIgBAAQgCAAgDgGg");
	this.shape_2.setTransform(0.7028,0.918);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0.2,0.1,1.1,1.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgCAFQgDgCgBgDQAAgBAAAAQAAAAABgBQAAAAABgBQABAAABgBQACgBADAAIADABIABAEQgBADgDABIgDACIgCgBg");
	mask_1.setTransform(0.7077,0.5509);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#394854").s().p("AgBACIAAABQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQACAAACADIgCAAIAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAAAIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(0.5438,0.4875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D9199").s().p("AAAAFQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgDgEAEgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQADAFgEABIgBAAIgBAAg");
	this.shape_2.setTransform(0.6,0.605);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.2,0.1,0.9000000000000001,1), null);


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


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ED2224").s().p("AgEgJQABgGAGAAIABAAIACATIgLAMg");
	this.shape.setTransform(-84.9639,-0.5702,0.8099,0.8099);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68C49").s().p("AgDgqIAMAAIgEAuIgFABIAEAEIgCAUQgEADgFALQABgvADgmg");
	this.shape_1.setTransform(-84.8627,-6.0165,0.8099,0.8099);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C62127").s().p("AgIBYQgGAAABgGQgCg1AJh0IARAAQAEAAAAAEQgEA0AAAaQgOAEADACIALABQgCAoACAqQgBAEgLAAIgHAAg");
	this.shape_2.setTransform(-84.8363,-2.7438,0.8099,0.8099);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E4E4E").s().p("AoHBEQgDgKAJACQgEgJgEAAQgLABAAAMQgIgEgFgGQAEgCAAgEQgEgDAAgFQgBgCAHAAQAAgHgGgBQgGAAgDAJQgEgMgBgPQAIAIAFgMIgEgFQgCgGAGABQgCgGgIgEQACgIAEgGQABAIAIACQAEgBgDgDQgDgMAKADQACgHgGgGQAIgFAIgBQgGALAIAGQAJADAAgGQgDgIAKAAIgBgBIAAgBQAFADAGAHQgGACgBAJQAGAQADgHIABgGIAFgCQAEALACAMQgJgBgBAGQgBAQAKADQgBAJgFALQgCgKgHAAQgIAEACAKQAAAGAEAEQgJAIgMABgAoWgLQgGAJAAAMQAAANAGAIQAHAJAIgBQAIAAAGgGQgGAEgEAAQgIAAgFgHQgGgIAAgLQABgLAFgGQAEgJAIABQALAAAFANQgFgTgOAAQgJAAgGAJgAHyA/QgEgLAOACQgFgKgHAAQgQABgCANQgKgEgIgHQAGgBAAgHQgGgCABgFQgDgDALAAQABgJgKABQgKgBgDAKQgHgOgBgPQALAIAIgNIgGgEQgCgIAJABQgDgHgNgEQADgJAGgHQADAIALACQAHgBgFgDQgFgNAPAEQADgIgIgHQAMgHALAAQgIANALAGQANAEAAgHQgCgJANAAIgBgCIABAAQAJAEAHAHQgJADAAAIQAIATAEgIIACgGIAHgDQAGALADAPQgNAAgCAGQgCARAQADQgDALgHAMQgEgMgJABQgNAFADAKQAAAHAGAFQgPAJgRABgAHdgZQgJAKAAAOQAAANAKAJQAJALANgBQALABAJgJQgGAFgIAAQgMAAgIgIQgIgIAAgMQgBgMAJgJQAIgIALgBQARAAAHAQQgDgKgJgGQgHgFgLAAIAAAAQgNAAgJAKg");
	this.shape_3.setTransform(-23.2728,18.7248,0.8099,0.8099);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#818181").s().p("Ao0BHQgRgYgBgkQAAghARgZQAQgZAYAAQAYgBASAZQARAYAAAiQABAjgRAZQgQAYgYABIgBAAQgYAAgRgYgAoNg3QgTAAgNAUQgNAUAAAaQABAcANAUQAOATATAAQATgBAOgUQANgTgBgcQAAgagOgUQgNgTgTAAIgBAAgAGyBCQgagbgBgnQAAglAZgcQAagcAkgBQAkgBAaAbQAaAcABAnQABAmgaAbQgZAcglABIgBAAQgkAAgZgbgAHuhKQgdAAgUAWQgUAWAAAeQABAeAVAXQAUAVAdgBQAdAAAUgWQAUgWAAgeQgBgegUgXQgVgVgcAAIgBABg");
	this.shape_4.setTransform(-22.8872,18.6033,0.8099,0.8099);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4E4E").s().p("AJFB5IAGABQgHAKgGACQAEgFADgIgAJHByQAEgFABgGIAJgCQgFANgGAAIgDAAgAnaBhIAEABIAAAAQgFAIgEABQACgCADgIgAJPBeQACgDADgLIALgBIABADIgGAGIAAAEQgFADgDAAIgDgBgAnZBbQACgCACgHIAFgBIAAAAQgDALgEAAIgCgBgAnTBLIADgLIAHgBIAAADIgDAEIAAAEQgDACgCAAIgCgBgAJWBGQADgGABgNIALgCQAGABgDAFIgFAFIADACQABAIgLAAIgGAAgAnPA3IACgPIAIgCQAEACgCAEIgEADIADACQAAAGgHAAIgEAAgAJWAnIABgPQAHAFAHADQABAGABABQgEAEgEAAQgEAAgFgEgAnPAfIAAgNIAHgDQAFABAAAEIgDAEIACAHQgDADgCAAQgDAAgDgDgAnPAJIgBgKQAJgBAAABQADgBABADQAAAJgIAAgAnTgGIgBgHIgCgBQACgFADAAIAIgBIAAAIQADAFgEAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgBgAnEgPIACgGIAGACIgBAFQAHAHgKAAQgFgBABgHgAm8gTIAAAAIAAAAgAnGgaQgBgCgCgKIADgDIACAEQAEACgCAKgAnXgaIgEgLIgDgBIALgFQAFADgBAEIgCADIAEAAQAEAHgFAAIgEABIgFgBgAnhgtIgFgJIAIgFQAFABAAACIgBAEQAEABgBADIAAAAQgBADgFAAIgEAAgAnTg0IADgIQAEABgDAFIAFAEIgCACIgBAAQgCAAgEgEgAnpg7IgBgCIgHgHQgCgDAJgDQAGAAAAADQgBAAAAABQAAABAAAAQAAABAAAAQAAAAABAAIAEABIADAEQgDACgHACIgBAAIgBAAgAnZg/IgDgIIAAgEIAEABQAAAFAFADIAAADQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBgAo8hlQAFgDASgCQAGADgDgEIAIgBIAGAEQABAAAAAAQABAAAAAAQgBgBAAgBQgBgBgBgBIAGgBQAHAAgDAEQAAAAgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAGADAAACIgJADIgDADIABgDIgGgCIADgFQgBgDgJAJQgEABgEgDIACgFQAAgDgIAIIgHgCQgbADgZAeQAOgYAegLgAIuhJIgLgKQgCgCAIgDIAGAQgAn3hNIgEgEQgCgBAJgEIgBAAQAHgBgBAEIAEAEQABACgKABIgDACIAAgDgAnlhOIgDgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIACACQAFABAAAFQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAIgCAAgAGvh7QALgDAYgDQAKAEgEgFIAMgBIAJAEQAGAEgIgIIAJgBQAMgBgFAFIAAAAQgEADABABQAJACAAAEIgOADIgFAFIABgFIgJgCIAEgGQgBgDgNAKQgHACgGgEIAEgGQgBgDgMAJIgLgCQgoAEgoAkQAWgdAugOgAoBhYIgHgEQgCgCAGgDQAHgBAGAGQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgHADIgDADgAIahdIgHgFQgCgCAMgEIAGgBIAEAMIgJAAIgEADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBABAAgAnyhbIgCgFQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAJgCgDAFIABAEQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgEAAgAoBhjIgGgDQgDgBAEgEQARgBgGAEIABADQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEAAgAIJhqIgKgGQgDgBAKgEQAKgCAJAHQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgMAEIgEAEgAIJh5IgJgDQgEgBAHgFIASAAIABACIgCABIABAEQAAADgGAAIgGgBg");
	this.shape_5.setTransform(-20.4585,16.2884,0.8099,0.8099);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(33.8,-27.15,0.8099,0.8099,0,0,0,27.4,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AD9ByQAcgHABgWIAJg7QhBgQhoATQhVAQghgaIASiEIEigSQAQAAgBAMIggDOQgGAkgkABIj7AIgAjwgaQhHgKgPAOIADgdQABgLAPgBICjgIQAMgBgBALIgEAuIgDAAQgSAAhSgLg");
	this.shape_6.setTransform(-44.995,-25.0692,0.8099,0.8099);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#818181").s().p("AgFgTIALABQgEASgBAUQgGgcAAgLg");
	this.shape_7.setTransform(3.1894,5.2203,0.8099,0.8099);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgKgJQAAgFADgBIASAAIAAAPIgPAAIgDAQQgDgPAAgKg");
	this.shape_8.setTransform(-85.5106,7.5892,0.8099,0.8099);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B3B3").s().p("AoFAgQgbgDgBgYQAKASAXABIgCgTIBTAGIAQgYQgEAjAAAXgAhEAXIAAgBIJJgIQAJglAUgUQgLAeACAtIpaAJQAFgHgIgLg");
	this.shape_9.setTransform(-40.705,13.7036,0.8099,0.8099);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#676767").s().p("AgPgSIASABQAIADAAAGIAAANIAFAOg");
	this.shape_10.setTransform(50.5257,-20.0878,0.8099,0.8099);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#676767").s().p("AgYFsIgrgBQgCAPAKAWQgRgGAAglIAClrIAqlbQADgVAGgKQAIgLAPgCQgOAHgHAYIBJgHQAFgWAUgJQgMALgEAbQgTCLgcDmIACE2QABAdgfATQgCAUAPAXQgUgOgDgagAhADwIgCBxIArABQAcgMADgeIgBhKgAg/B5IgBBtIBHgCIgChugAg+gDIgBBuIBEgCIgBhlIABgIgAgxh6IgNBtIBEgBIAOhtgAgkjsIgMBpIBFgBIAOhsgAgWlnIgNBzIBHgEIAPh2g");
	this.shape_11.setTransform(-47.9128,-16.5042,0.8099,0.8099);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5E5E5").s().p("AiQgOIAAgOIEhAtIAAAMg");
	this.shape_12.setTransform(13.5353,-50.6398,0.8099,0.8099);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#818181").s().p("ApsAtIAugFIAAgbIgrADQgKACAAAGQgGgFAFgGQAEgGAIgBIFjgdQAaABAMAdIBHgHQAHgeAbgHIEDgUQAYAAAXAaIBkgKQAmgCAVADIERApQAKACABAGQACAGgJAAIkagpQglgDhJAIQATANAaAFQAPADAiACIEtAsQAGAIgJACIk8gtIgngFQgTgEgSgJQgTgKgRAAIsyBLQgJgIALgFgAo3AMIABAcIFHgfQgIgVgTAAgAhxgZQgJABgGAHQgHAHgBAKICMgNIgBgVgAANgjIAAAWICdgPQgKgPgUgDg");
	this.shape_13.setTransform(-25.3196,-51.2674,0.8099,0.8099);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#676767").s().p("AABATIgQgBQgBgGABgKIAVADQgCAMAEAMQgEgDgDgHgAgIgSQADgJAHgBIAPAKIgCACg");
	this.shape_14.setTransform(45.0227,-7.5552,0.8099,0.8099);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#818181").s().p("AgwACIAVAAQAPAAAKgHIApgsQAhgkhIBbQgJAKgQAAQAFALALAhQgUgmgTgUg");
	this.shape_15.setTransform(26.8397,1.822,0.8099,0.8099);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(13.75,-42.1,0.8099,0.8099,0,0,0,28.9,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACQAmIhIglIAGALQiQgiiUgWQDQAIBMARQB2AyAbAOg");
	this.shape_16.setTransform(45.0794,-14.2163,0.8099,0.8099);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#989898").s().p("AAPAjIiGgtQgXgJAAgfIEdBZIAAAAIgFAMg");
	this.shape_17.setTransform(31.1701,-14.0543,0.8099,0.8099);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B3B3").s().p("AAbAuIALgJQgrhQAkA1IAUAfQACAFgJAAgAgpAcQgIAAABgFIgCg9QAAgIAIABIAhAAQgRADgEAJIABA2QAAADAEAEg");
	this.shape_18.setTransform(7.4429,-20.3712,0.8099,0.8099);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#676767").s().p("ABfB/IgOgCIAAgBIANgKIg9gDQgOAAgCgLIAAhHQgBgSAWgBIAdAAIg/hfQAAC/gDgDQgCgEgFjFQgFgJgTgFIhfgFQgNgBgBARIADCQQABASAHAKQgQgKgBgWQgDhIAAhKQABgVAQAAIBmAEQAYAEAOAZICKDSQAGAPgLAAg");
	this.shape_19.setTransform(0.8548,-26.0605,0.8099,0.8099);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#676767").s().p("AgcgDQAAAAABABQAAAAABABQAAAAABAAQAAABABAAIAEAAIArgBQADgCAAgEQAGAJgGAFIgxABQgFAAAAgLg");
	this.shape_20.setTransform(-10.6742,-11.4223,0.8099,0.8099);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#989898").s().p("AA4g7IgEAIIABAAQARABASAQQg7gWgsAaQgqAYgeBCQAviBBgAKg");
	this.shape_21.setTransform(11.8346,1.8075,0.8099,0.8099);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B3B3").s().p("AASABQgCANgJAHQADgKgBgLIgIgBQgBAOgFAGQgNAJgOgmIgsgLIB6AOIgFAHIAkAWgAhMgMIATAEQAGAOAOAKQgRgGgWgWg");
	this.shape_22.setTransform(35.1586,-7.4135,0.8099,0.8099);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpAXQgggHgbgrQgHgJANAAQAvADA3AHQA5AHAgAHQgFAVALAZQgLADgIAAQg8gEhBgKg");
	this.shape_23.setTransform(34.4409,-7.049,0.8099,0.8099);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#818181").s().p("AADAkQgVgBgEghQgDgfAWgGQAZgBABAkQACAkgUAAIgCAAgAAAgZQgPAEADAXQADAXANABQAOABgBgbQgBgZgQAAIAAAAg");
	this.shape_24.setTransform(59.3988,-2.7952,0.8099,0.8099);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4E4E").s().p("Ag+AtQgSgCgKgQIAAAAIBTACQAJAGAMABQgOgIgJgSIhQgFQgJgCgCgBQgMgIABgKIBhADIAAgDQgBgGAOgGIhvgHQgFAAgDgDQgFgHAGgIICVAJQA+AEAYADQAHALgEAFIg8gCIADAUIA1ACQAGADACAIQACAJgHgCIg3gBQgDAPgIAHIBBABQADAEAAADQgCAHgJABQhhAAhKgJg");
	this.shape_25.setTransform(56.8756,-2.6758,0.8099,0.8099);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(55.8,-3.05,0.8099,0.8099,0,0,0,24.1,22.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#818181").s().p("AhNANQAVgjASgEIAFAEQAFACAKAAQB7AEgfAEIhXgBQgSABgKAFQgSAIgSAaQgFgFAFgJg");
	this.shape_26.setTransform(38.087,3.2767,0.8099,0.8099);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#818181").s().p("ADnAVInCgXQADAJAnAHIgZgCQgPgCgJgGQgRgMAGgVQACATAMgBIGLAUQAXADAMgjIgGAdIAiACQAHAFgDARQgCgJgGAAg");
	this.shape_27.setTransform(50.4174,9.7151,0.8099,0.8099);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#989898").s().p("AgXAFQACgEAtgRIgaAhg");
	this.shape_28.setTransform(41.6982,5.443,0.8099,0.8099);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#676767").s().p("AgWARQgCgGAZgcQgKAVADAGQAGADAYAEIgcABIgSgBg");
	this.shape_29.setTransform(34.5859,5.9087,0.8099,0.8099);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAFQgBgIAPgIQANAEAAAJQgBAKgKAAIgDAAQgMAAgBgHg");
	this.shape_30.setTransform(36.576,5.5485,0.8099,0.8099);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4E4E4E").s().p("AICCdQAHAAAAgIQgFgGAGgFQAHABgBgIQgHgCAIgHQAFAAgCgHQgGgCAFgKQAIAAgGgJQgIgIAMgCQACABAGgIQAEBehbApQAugbAKgcgAn7C6QALgJAFgNQAHABAAgIQgFgFAFgFQAIABgCgGQgGgDAHgGQAFABgBgHQgGgCAEgJQAJAAgGgIQgJgIAMgBQADABAFgHQABArgTAdQgVAfgqAGQAYgJALgHgAqKB1QAMAAAEAGQAQAfAUABQgYgOgEgZIAOAAQARAnAcgJQATgIAFggIAMgBQgOA4goAHIgIAAQgoAAgRgzgAFOCFIAQAAQAPAXAVACQgJgFgIgIQgHgHgCgFQALABAKAIQAWAPAXgJQAWgJAIgXQADgDAIACQgIApgyAKQgJABgIAAQgmAAgUgigAJ2AAImqgVQgcgCgQgRQANAWAZAIQgMANgWAFIgoACQABAMAIAMQgPgFgGgPQgTh0g5gqIAsgBQAPgBAHgHIA5g6QBUAJArABQAMAAAOgEQAVAuAcAdQALAKALAFQAJADASADQAwAGBKABQBMACAHgIQAOgQAEgkIAKB3QAFAEACAKQABANgDAOQgNAUgpAVQAlgagBgPgAFuhdIAKABQAIAfAWACQBRAHBYADQAFAAAGgCQAGgCACgFQgLAFgBgFQAEgFAGgQQACgCAKAAQAKgBAEAFQAGAFALASQgIgigNgDQhxABiIgMQgagDgaAiQAPgMAKgEQANgHALAAIAEABgADDhxQgTATgIATQgDAKALACIBcgBQALgCADgHIgYgQQADgNAIgBIA4gYIhcAAIgCAAQgVAAgPAOg");
	this.shape_31.setTransform(17.9592,13.2987,0.8099,0.8099);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(-30.05,2.65,0.8099,0.8099,0,0,0,66,10.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnsEMIgWAKQASgcALgKQgBgIgJABQhUADg8AEQABg5ADg0IAAAAQAAgJgMABIgRAAQAVjpAuh9QARgqAegKQgRALgJARQgHANgHAaQgSA/gLBIQgLBDgBAwQAHgSAMgTQgNA3gEAyQAAAdAXACIFAgQIgBAvIlLAKQAEAHAOADQAMADAJAAIEkgKIgBBPIgXABQgXgVgagFQAPAJARARQARATANATIgrAAQhShJhGBVIgfABQASgaAOgKgAG7DvIjoAEIgGhXIB9gEQgNgFhwABQgFhbgChgQgDBcAEBfIgXABQAFh3AIhfIAcADQgBgIAIhqQgDBVAFBXQAFAjAaAOQBXAjA3ALQAbAFAjADIAoAEIgBAMQgkgEghgBQAMAsARAAQggAkAHAeQAcgXAkgLIAAAKQgWASgSAkQASgeAfgUIgBgQQAkgIAsAEQheATgnBIIgUABQAEgXAFgKgADrBeQgKAAgDAEQgDAEAAAJQAAASAJABIAxgBQARAAgBgSQgCgSgSAAgAkFCzIA3gCIABBKIg5ABgAi2CpIFegMIgCBXIlbAGgACwCdIAXgBQACAxADAmIgeABgAH8B0IABgMQBtARAvAuQgygnhrgMgAi2BsIEXgOQAmgGANgqIASh9IACAMIAOABQgKBcgEB7QiVABjJAHgAkEBwIA2gDIAAApIg3ACgAowjoQALgGAXgCQA0gHDDgRIAhgDIgBAMQjMARhdALQgNACgLAFQgLAFgDAFQAGgPAQgHgADpkjIgKABIADgNIAFAAQBcgGAtA3QgwgshXAHgAjekNIA5gFIgCANIg5AFgAiKkUQDEgQCmgKIgEAMIlnAbg");
	this.shape_32.setTransform(-31.3512,-20.699,0.8099,0.8099);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#818181").s().p("AmeBIIh1gSQgJAAgIgOQgLgPgKhiQAAgJAGgDIAggBQAEBtAKAHQgCgSAAglIB5ACQgKA4AAA2QgGgGAAgJgAIkA8IrLAGQgKgDgDgPIAAAAQgLg0gKgcIAegBIAAAcQABAzAkAEQAIgKgIgFQgLgLgBgPIAdgBQAJApAgABQAFgCgDgJQgWgPADgUQAYgOAEgaIFegKQAEAcAJAgQgEgXgCglIAlgBQAHA6AOAUQgJgVgFg5IDqgGQgNBCADA/QgKgDgCgNgAiRgQIAAgRIA2gCQgGANgPAGg");
	this.shape_33.setTransform(-40.8482,12.8128,0.8099,0.8099);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#818181").s().p("Ai7gNQAGAHAOABIErgHIAAALIkuAPQgQgGgBgVgACdgMIAfgBQAAAKgIgBIgXACg");
	this.shape_34.setTransform(-65.2641,-14.8035,0.8099,0.8099);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ai+BUQgKgiAehhIgBAiIA1gCQgCAjAVACIC3gIQAYgGADgUIAGg6QgCgSgOgDQAWABABAVIgFA6QgBALgGAIIAQAAIgJBJIgBAAIkcALIgGAAQgRAAgBgIgACZAIIApgBIgLBHIgmACg");
	this.shape_35.setTransform(-63.9773,-24.8577,0.8099,0.8099);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AuECdQAAgJgMABIgQAAQATjmAwiAQATgyAogFQB9gPCugSIgEAZIgMBeQiDAKiQAOQgwAHgSAXQAXgTAqgEQCegPB1gJIgDAXQjEAOhQAKQgbAEgNARQgLANgIAfQAMgbAKgMQAPgPAWgEQDQgRBEgEIgbDTIAAArIk6ARQgIAAgDgCQgCgDgCgHQgBgPADguQgCAHgDAUQgDAUAAAPQAAAVARAAIE+gPIgDDIIhXADQgsgUgoAYIizAGQgDhbAGhdgApGhxIioAKQgUACgDAUIgEAuIABAAQgDAbAagCICdgIQATgBAIgGQAHgGACgPIACgqQACgOgGgGQgFgFgLAAIgEAAgAoPFEIA6gCIAAADIg6ACgAm/B7IEEgMQAiAAAPgSQALgOAEgfIAfjCQAGgdgdAAIkrAUIACgXQDXgOCJgDQgkC4gDFEIlbAMgAg2jDQA/gCBBABQA5ABAWAeQAlAzAwBIQAIARgCAYIhfiSQgRgZgigDQgzgEgvAAQgMgBgHAJQgGAHgBAOQAAB7ACAdQACAUAJAMQAJALASAIQBPAhBBAIQApAFAnACQgDAigBBXQgWASgRAkQARgeAfgUQgChAAEg8IAjABQAbADgJgYIgwhMQAFgegMgWQg6hXgbgmQgZgegsgBQhAgChPACQANhGAQgzQgSAzgPBGQiLACjVAOIANhoQACgJADgJQC/gSCvgOQBQABBRBfQg3hIgggRQDRAPBgAZQAzANAsAgQApAeA4A+QgggJhcgHIjpgOQgQACAIANQBSB4A9BTQAHAJANAFQABAaAGAOQAJASAUAHIBvAkQgYgCgYAAQgLgBgDAGQgFAGAHAJQAPAaATASQAQAQANAEIgqAoQgRARgPgFQgthAhFAGQhFAHgsBKIjxAIQgNiSgDizQgGCOAOC3IghABQABk5AjjDgAgdB4QgJAAgEAEQgDAEAAAJQAAASAJABIAxgBQARAAgCgSQgCgSgSAAgAoNDNIA3gCIABBfIg5ACgAoNB/IA2gDIABA0Ig3ACgAIICWIiIgtQgggLgBguIAMACQDWABCgAUQgng8gagfIBcBqQB5AwAsAcQiKgThzAAQgMAAgFAHQgEAEgGAOQhUgNgtgFgAoMBPIA1gBIgBAIIABAaIg2ADgAoAgmIA2AAIgMBdIAAACIg1ABgAnziMIA3gDIAAACQgGAlgCAaIgDARIg1ABgAnvi0IALheIA7gHIgOBhIg4AEgAnekrIA5gGIgCAEIg5AHg");
	this.shape_36.setTransform(-9.9101,-22.8008,0.8099,0.8099);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#010101").s().p("AE1IqQg0gGgnggQgsglgPg9IkUgNQgKBKgcAcQgbAbg8ACQg3ACgcgVQgcgVgOg1QhkASgLgCQgagFgNggIgdAAQgKBEgwAhQgpAdg2gGQgkgEgcgXQgfgagJgmIgPgFQgFgDAAgJIgDgjIhtgUQgTgEgJgNQgLgOgEgdIgOhdIgBgUQACgKAJgGIAAAAQANlUA+i6QATg8AigSQgFgJADgLQADgLAIgEQgHgCgDgCQgGgDgBgJQgBgVAbgGIFsgfQAegDAUAiIAsgFQASgrAhABID7gTQAUgBAQAGQANAFASAPIBigJQAZgBAYADIEMAoQAQADAGAEQAHAFAAAIIABA1QgDALgPACQA9AiDeD5IAiACQAOABACARIAAAlIAWAUQCOA1AeApQAYAnARC5IAHAMQACAfgFAOQgOAZhJAnQgJAFgJAAQAAA8gcAmQgaAlgxAOQhAASg7gZQg/gbgPg9IhdgHQgRA7g0AgQgpAXgvAAIgWgBg");
	this.shape_37.setTransform(-8.2857,-12.2561,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_3},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-63.8,163.4,96.5);


(lib.pic1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#AF6F3D","#F4AC5A"],[0,1],-0.3,-1.1,3.9,-0.1).s().p("AgXADIgXgGIA0AEQAJgBAggIQgVAPgQACIgDAAQgKAAgUgGg");
	this.shape.setTransform(88.8648,48.3838,1.4254,1.4254,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282521").s().p("AgnJqQg8lpAGkZQAFjaAwicQAihtA0hCQAaggAUgMIACACQgUALgaAhQgzBCgiBsQguCTgGDXQgIEYA9F1g");
	this.shape_1.setTransform(230.4474,120.3227,1.4254,1.4254,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#144154").s().p("AAAFNIgEqZIAEAAIAFKZg");
	this.shape_2.setTransform(230.8718,131.9042,1.4254,1.4254,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#144961").s().p("AAnABQgDgGgJgFQgMgHgOgBQgMgBgSAFIgQAFIAVgJQATgGAUABQATACAJAMQADAHAAAFQgbAIg+ANQAegMA0gLg");
	this.shape_3.setTransform(226.061,76.5781,1.4254,1.4254,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00263A","#141116"],[0,1],-1.9,-28.3,4.4,6.1).s().p("AgMFnIgDgDIgDqcQgSAGgTgFIgPgHQAagPA8gPIA3gMQAAANgfAOQgQAHgPAEQAAAIgEABIgDgBIAEKeQgBAFgIAAQgGAAgDgCg");
	this.shape_4.setTransform(229.5889,128.4119,1.4254,1.4254,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00263A").s().p("AhHARQAHgTAqgRQAugSAaAGQAWAFABASQhlAXgpASQgFgGADgKg");
	this.shape_5.setTransform(229.8117,78.097,1.4254,1.4254,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#801517").s().p("AgHAwIABhjIANgBIAABpg");
	this.shape_6.setTransform(228.1992,112.8036,1.4254,1.4254,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E5BD76","#E94D4D"],[0,1],-17.2,0,17.3,0).s().p("AisACIAAhMQD/gEBaACQgbAIgcANQg5AYgGAVQgGAUAcAYQAPAMAPAHIgIAYQjMg3hDgUg");
	this.shape_7.setTransform(201.8646,117.3887,1.4254,1.4254,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B3042").s().p("AiNgeIABgCIEaA5IgDAIg");
	this.shape_8.setTransform(-14.2996,122.639,1.4254,1.4254,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#6B665F","#C1986A"],[0,1],-1.9,0,1.9,0).s().p("AAAABIAEgOIAEgJIAIAEQAGAHgFAMQgFAOgPAFIgPADQARgOABgIg");
	this.shape_9.setTransform(59.1255,107.4227,1.4254,1.4254,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#AF6F3D","#F4AC5A"],[0,1],-3.6,0,3.7,0).s().p("AgSAaQASgLAGgHQAKgIAUgkQACAMgGAPQgGAPgMAKQgLAIgUAHIgTAGg");
	this.shape_10.setTransform(82.2333,63.6446,1.4254,1.4254,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-0.2,-2.5,0.2,2.1).s().p("AgCARIgFAAIAJgCQADgBABgEIAAgKQgBgFgFgGIgGgFQALAEACAOQABAHAAACQAAAEgEABIgEABIgCAAg");
	this.shape_11.setTransform(84.9717,89.899,1.4254,1.4254,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808B91").s().p("AgJADQgEgBAAgCQAAgEANAAQAOAAAAAEQAAAFgOAAQgFAAgEgCg");
	this.shape_12.setTransform(91.5375,88.9279,1.4254,1.4254,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#786F8B").s().p("AgWAPQgOgCACgHIABgPIADgHIAHAAIgFALQgBAEABAJQABAEAHAAIAUAAQAQABAUAEg");
	this.shape_13.setTransform(93.1584,89.8545,1.4254,1.4254,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808B91").s().p("AAxALQAAgJgEgDQgEgGgMAAIhPAAIAAgBIBAgCQATAAAKAEQAIADAAAOg");
	this.shape_14.setTransform(90.2883,88.6072,1.4254,1.4254,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808B91").s().p("AACgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgCQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQgBAAAAABIAHAJIgCACgAgIgFIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIADAGIgBABg");
	this.shape_15.setTransform(81.8803,91.0898,1.4254,1.4254,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808B91").s().p("AA2AWQAAgOgCgKQgDgPgkAAIhFABQABgCAdgCQAagBAPABQAdAAAIAKQAGAHgBAZg");
	this.shape_16.setTransform(89.6735,87.4027,1.4254,1.4254,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#171A1C","#786F8B"],[0,0.988],0.7,-0.8,-7.9,0).s().p("AAOAgIgtgCQgWAAgIgLQgJgMAJgQIAEgKQAFgKAIAAQBPgDAJAAQATACACASIACAWQgBARgNADQgKADgSAAIgLgBg");
	this.shape_17.setTransform(90.5845,89.1417,1.4254,1.4254,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#171A1C").s().p("AAAAOQgHgBgCgBIgDgDQgCgCACgLIACgIQAAgBABAAQAAAAABAAQAAAAABAAQAAABABABQAEADAQAEQAAALgDAEQgCADgGAAIgDAAg");
	this.shape_18.setTransform(99.0209,87.8505,1.4254,1.4254,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282521").s().p("Ah8I0IDWt9QArizgNgrQgEgNgJACIgJAFIACgDQAhgTgLBwQgIBOgQA8QhBD6iTKDg");
	this.shape_19.setTransform(18.7031,103.0213,1.4254,1.4254,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCBCB").s().p("AgFADQgDgEAAgEIAAgEIACAAIAAADQAAADACADQAGAKAHgDQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgCAAQgGAAgFgHg");
	this.shape_20.setTransform(5.9485,22.6184,1.4254,1.4254,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-1.3,0,1.3,0.1).s().p("AADAMQgEgCgEgFQgFgFgBgEQgCgFACgCIAJgBQADACAFAFQAFAFABAEQACAFgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBgAgEgHQgEADAHAHQAGAGADgDQAFgDgIgHQgEgEgCAAIgDABg");
	this.shape_21.setTransform(5.8758,22.5437,1.4254,1.4254,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#282521").s().p("AgiAkIgVgEQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAIATADQAWABAXgLQAXgKANgYQAHgNADgLIABAAQgCAKgGAMQgMAXgYANQgUANgXAAIgEAAgAA5gjIAAAAIAAAAg");
	this.shape_22.setTransform(12.6051,28.6789,1.4254,1.4254,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBCBCB").s().p("AgFADQgEgFAAgEIAAgEIADAAIgBADQAAAEACADQAGAKAIgDQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAAQgIAAgFgIg");
	this.shape_23.setTransform(22.074,32.3053,1.4254,1.4254,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-1.3,0,1.5,0.1).s().p("AAEANQgFgBgEgGQgLgLAEgHIAKgBQAEADAFAEQAFAGACAFQABAFgCADQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgEgBgAgEgHQgEADAHAHQAGAIAFgEQABgBgBgEQgBgCgDgDQgFgGgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_24.setTransform(22.0129,32.1885,1.4254,1.4254,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#282521").s().p("AghAhIgRgEIABgBIARACQAWAAATgKQATgKANgVQAGgLACgJIACgBQAAAIgGALQgKAVgXANQgVAMgWAAIgCAAg");
	this.shape_25.setTransform(27.768,38.1133,1.4254,1.4254,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBCBCB").s().p("AgFADQgDgEgBgEIAAgEIACAAIAAADQAAADADADQAGAKAIgDQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgDAAQgHAAgFgHg");
	this.shape_26.setTransform(36.4274,41.442,1.4254,1.4254,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-225.4,0,-228.2,0).s().p("AAFANQgFgCgFgFQgMgKAFgHIAKgCQAFACAEAFQAFAFACAEQACAGgDADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEgBgAgFgIQgDAFAHAGQAHAHAEgEQAEgEgIgGQgDgDgDgBIgCAAIgDAAg");
	this.shape_27.setTransform(36.3651,41.3235,1.4254,1.4254,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282521").s().p("Ag5AzIAcgEQAfgGAVgRQAUgQAIgeIAFgcIACgBIgEAfQgJAggVAOQgXAQgZAGQgOAEgKAAIgJgBg");
	this.shape_28.setTransform(43.3228,49.824,1.4254,1.4254,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9E6565").s().p("AgMADQACAAAAAIQAIgDABgCQABgBgCgGIACAEQAAAFgBABIgJADgAgYAFIABACQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAEgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgDABgAAGAAQABAAAAAHQAGgCABgCQAAgBAAgGIABAEQAAAFgBABIgIADgAAUgLQABABAAAIIAEgFIAAACQgBADgEACg");
	this.shape_29.setTransform(80.3836,82.0681,1.4254,1.4254,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E6565").s().p("AgFAZQgBgXgEgEQgCgDgIgFIgIgFIAJAFQAKAFACAFQADAGADAVgAALAWQgBgUgDgGQgCgEgIgHIgJgGIAJAFQAIAFADAGQAEAHAFAXQgEAAgCgDgAAbgHQgBgEgHgIIgHgHIAGAEQAHAGACADQADAGgBAYIgDACQADgUgCgGg");
	this.shape_30.setTransform(81.9159,79.9835,1.4254,1.4254,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-4.2,0,4.2,0).s().p("AgYASIgMgFQgDAAgCgDQgBgCABgDIADgFQAEgGAEABQADAAAFgEQAGgFADAAQAIAAAEgDQABgCAEABIAGACIAEgCQACgDADABQAFABAJAIQAJAIAAAEQAAAFgDACQgDABgDgBQgDAHgGgBIgLgDQABAFgGABQgDAAgFgCIgEgCQADAHgIACIgCAAQgEAAgJgEg");
	this.shape_31.setTransform(82.789,77.7336,1.4254,1.4254,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2ACA2").s().p("AgJAVIgFgEQgBAGgEgCQgDgBgDgLIgDgKIAFgGQAGgGAFgBIAogIQADAYgGAFIgHAEQAAAEgFACQgEACgEgCIgDgDQAAAGgDACIgCABIgGgCg");
	this.shape_32.setTransform(80.7002,81.0525,1.4254,1.4254,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#282521").s().p("AABgKIgZAFQgBABgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAagGIADgBIAbAdIAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_33.setTransform(77.4853,81.0525,1.4254,1.4254,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7DC14").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHABQgGgBAAgIg");
	this.shape_34.setTransform(73.6129,83.155,1.4254,1.4254,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E4C620").s().p("AgDAKIgFgCIABAAQAHgCAAgHQgBgEgDgBIgDAAQAGgGAFAFQAHAEgCAGQgDAHgGAAIgDAAg");
	this.shape_35.setTransform(72.831,83.1191,1.4254,1.4254,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EEA92E").s().p("AgIAHIgCgEQAKAIAEgHQAGgJgIgFIADABQAEABABAFQACAEgDAFQgEAFgFAAQgFgBgDgDg");
	this.shape_36.setTransform(72.9196,83.3332,1.4254,1.4254,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2DFDB").s().p("AgHgIIAGAAIAJALQgEAEgFABIgEABg");
	this.shape_37.setTransform(72.0806,86.0058,1.4254,1.4254,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7DC14").s().p("AgQATQgGgIAAgLQAAgLAGgHQAIgIAIAAQAJAAAHAIQAHAIAAAKQAAALgHAIQgHAIgJAAQgIAAgIgIg");
	this.shape_38.setTransform(72.9715,83.4401,1.4254,1.4254,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EEA92E").s().p("AgQAVQgIgJAAgMQAAgLAIgJQAHgIAJAAQAKAAAIAIQAHAJAAALQAAAMgHAJQgIAJgKAAQgJAAgHgJg");
	this.shape_39.setTransform(72.6864,83.4401,1.4254,1.4254,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#282521").s().p("AgIAHQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAOgGQAFAAADAFIgMAGQgFACgCAAIgBAAg");
	this.shape_40.setTransform(84.3867,81.4053,1.4254,1.4254,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9E6565").s().p("AAHAMIgBgMQAAgFgEgDIgYgYIAtAdIgJAHIgDAPQgBAHgEAGQAEgHgDgNg");
	this.shape_41.setTransform(90.7179,77.7384,1.4254,1.4254,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-2.6,0.8,0.3,-3.7).s().p("AAGAgQgcgLgkgYIAAgNQACgNAHgEQALgIATAIIAXARQAaARAKAEQABABABAAQAAAAABABQAAAAAAABQABAAAAAAIANACQADAMgCAHQgCAEgHACIgSACIgEABQgLAAgKgGg");
	this.shape_42.setTransform(91.4031,77.8107,1.4254,1.4254,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CBCBCB").s().p("AgEADQgEgEgBgFIAAgDIACAAIAAADQAAADADADQAGAKAIgDIAAADIgCAAQgIAAgEgHg");
	this.shape_43.setTransform(52.588,56.1157,1.4254,1.4254,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-202.8,0,-205.6,0).s().p("AAFANQgFgBgFgGQgFgEgCgEQgCgGACgDIACgBIAHAAQAFABAEAFQAGAFACAFQACAFgDADQgCACgDAAIgDgBgAgFgHQgCABACAEQABACADADQAHAHAEgEIgBAAQAEgDgHgHQgFgFgDAAIgDACg");
	this.shape_44.setTransform(52.4534,55.989,1.4254,1.4254,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#282521").s().p("AhEBYIAugLQAygTATgnQARgmADgnIgBgfIADAAIAAAjQgDArgTAiQgVAkgvATIgsAMg");
	this.shape_45.setTransform(60.998,70.4332,1.4254,1.4254,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D14F50").s().p("AgHABIAPgNIAAACIgFAFIgFAHQgCAGACAFQgEgEgBgIg");
	this.shape_46.setTransform(55.2607,53.3282,1.4254,1.4254,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AF4340").s().p("AgIAPQgGgDgBgJIAAgCIACgCIANgOIACgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACADQACAEAHAGIgBAEQgNAQgCAAIgBAAQgDAAgEgCg");
	this.shape_47.setTransform(54.4054,53.6073,1.4254,1.4254,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D14F50").s().p("AgHAAIAPgJIAAABIgFAEQgEAEgCABQgBAEAAADIABACQgEgDAAgHg");
	this.shape_48.setTransform(38.7259,38.7533,1.4254,1.4254,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AF4340").s().p("AgIAMQgFgEgBgHIAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAOgJIACgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABAEQACAFAGAEQAAAEgDACQgLAIgCABQgEAAgDgDg");
	this.shape_49.setTransform(37.9419,39.2047,1.4254,1.4254,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D14F50").s().p("AgFAAIALgHIAAABIgIAHIgBAFIAAACQgCgEAAgEg");
	this.shape_50.setTransform(7.6578,19.7953,1.4254,1.4254,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AF4340").s().p("AgJgBIACgDIAJgFIACAAQAHADgBAIQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgIAEgCAAQgGAAAAgLg");
	this.shape_51.setTransform(7.1504,20.1517,1.4254,1.4254,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D14F50").s().p("AgGAAIANgIIAAACIgBAAIgEADIgFAEIgBAFIAAADQgDgEABgFg");
	this.shape_52.setTransform(23.9194,29.0961,1.4254,1.4254,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AF4340").s().p("AgIAJQgDgFAAgGIACgDIAKgGIAEgBIABADQABAEAFAFQABABgFAEQgJAIgCAAQgCAAgDgEg");
	this.shape_53.setTransform(23.3551,29.595,1.4254,1.4254,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9E6565").s().p("AgXAPIABgDIAIADQAKADAFAFgAgEAAIgMAAIgEAAIAHgEIAAAAIAUAFQAHAEADADQgLgFgKgDgAAFgQQgFgCgHAAIgGAAIAGgEIAAABIAHABIAOAFQAHADADAFQgHgFgMgEg");
	this.shape_54.setTransform(66.1295,70.0768,1.4254,1.4254,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-2.2,0.1,2.6,0).s().p("AgPAjQgMgGgDgGQgCgEACgDIADgBQACgDgCgGQAAgEAFgDIAFgDQgCAAAAgHQAAgEAEgDIAEgDQgDgCABgEQAAgEADgCQADgCAHAAIAHABQANAEAEAEQAJAKgBAEIgEAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAEgFAFQgGAGAAAEQgBAIgFACQgFADgEAGQgCACgEAAIgJgBg");
	this.shape_55.setTransform(65.6074,70.1041,1.4254,1.4254,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9E6565").s().p("AgOASIAIgOIAXgbQABAKgDAGIgFALQgDAHgEADQgDAEgJAEIgIACIADgGg");
	this.shape_56.setTransform(63.5586,71.5379,1.4254,1.4254,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2ACA2").s().p("AgHAMQgDgEADgEQADgDABgEIACgIQAAgCAFAAIAGAAIgBAMQABAIgJAGIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_57.setTransform(68.2676,67.5206,1.4254,1.4254,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-175.1,0,-181,0).s().p("AgdBWQAFgZAHgXIANgqQAJgbAAgEIgCgIIATgrIAIADQgOAegTBHIgRBDQgBACgDAAIgFgBg");
	this.shape_58.setTransform(71.1184,86.184,1.4254,1.4254,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-205.9,0,-247.7,0).s().p("AjQCsIAAAAIAmg2QAwg/AygoQBUhCBVg5QBVg4AbgIIAAAKQgzAbhEAsQiFBXhNBQQgqArgUAeIgLAWIgLACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_59.setTransform(36.3739,43.8522,1.4254,1.4254,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#938C8A","#A9BDC4"],[0.02,1],-24.5,0,24.6,0).s().p("AjvEVIgGgDQACgKAIgeQARg6AmheQAzh9C+iCQBghBBVgnIAEAAIAAADQg8AjhIAuQiSBehDBNQhEBOgmB3QgTA7gFArIgFABIgFgBg");
	this.shape_60.setTransform(41.3985,58.8695,1.4254,1.4254,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808B91").s().p("AAAgOQAFAAACgDIgGAgIgHACg");
	this.shape_61.setTransform(74.6463,101.4003,1.4254,1.4254,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#25292B").s().p("AAAAGQgGAAgDgDQgEgDAAgBQABgHANACQAOADgBAFQgBADgEABIgFABIgEgBg");
	this.shape_62.setTransform(75.4295,98.124,1.4254,1.4254,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#484E52").s().p("AgEAWQgFgBgDgDQgEgDABgDIAFghQALAIAQgEIgGAiQgBADgFABIgFABIgEAAg");
	this.shape_63.setTransform(75.8268,101.0012,1.4254,1.4254,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],1.8,0,0.3,0).s().p("AgDAoQgJgFgDgKIgSg1IAHgHQAOgHAbAAIATAxQACAGgGALIgIAOQgCADgGABIgIABQgEAAgFgDg");
	this.shape_64.setTransform(99.0708,71.6068,1.4254,1.4254,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#171A1C").s().p("AgqAAIALAAQAPAAAQgDQAQgDAMgGIAKgFIAFAJQABAEgBACQgBACgGACQgTAMgfADIgcABg");
	this.shape_65.setTransform(75.7582,86.5404,1.4254,1.4254,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#040404").s().p("AgYAdIgHgDIADgIQAGgIAQgEQATgEALABQAKABgBAGQgCAOgfAFIgMABIgMgBgAgTgJQACgEgQALIAHgIQAIgJAKgEQAOgGAJABQgRAIgGAHQgEAEAQACQAIABAKgBQgRAHgPABQgJACgHADIgFAEIAMgTg");
	this.shape_66.setTransform(100.0482,65.0421,1.4254,1.4254,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#171A1C","#786F8B"],[0,0.988],1.8,0.2,-5,0).s().p("AgTBNQgEABABgGQABgGgDgCQgDgDABgDQABAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCAAgFIAAgUQgBgLgFgZQgFgbgBgNQgBgPAWgIQALgFAKgCQANAIAHAlQAEAUAEAdQAGAZAIAPQADAGgHAFQgGADgQAFQgMADgKAAIgNgBg");
	this.shape_67.setTransform(101.3118,57.7113,1.4254,1.4254,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-6.9,0,7,0).s().p("Ag0ALIgRgIQAFgBAOgGIAKAEQAOACAVgCQAggDAdgMIANAAQgEAGgNAHQgYANghAEIgPABQgRAAgPgFg");
	this.shape_68.setTransform(89.7201,45.8168,1.4254,1.4254,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#293133").s().p("AgFACIAKgFIABADQgEABgDADg");
	this.shape_69.setTransform(102.2281,20.7575,1.4254,1.4254,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#373C3F","#786F8B"],[0,0.988],-0.5,-0.2,1.3,0.6).s().p("AgMgFIABAAIACgBIAVAKIAAADg");
	this.shape_70.setTransform(96.9066,19.0826,1.4254,1.4254,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#373C3F","#786F8B"],[0,0.988],0.3,-0.3,-0.3,0.4).s().p("AgOgGIAFgDIAYAPQgEADgFABg");
	this.shape_71.setTransform(98.2013,20.0448,1.4254,1.4254,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#171A1C").s().p("AgUAGQgCgIAOgHQARgJAIAIQAGAFgCAGQgCAEgHAEQgIAEgKABIgCABQgKAAgCgJg");
	this.shape_72.setTransform(98.1317,19.8727,1.4254,1.4254,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#293133").s().p("AgXAHQgCgJAPgIQAMgHAJADQAFABADACQAHAGgDAHQgBAEgJAEQgJAFgLABIgCAAQgMAAgCgJg");
	this.shape_73.setTransform(98.1983,20.0043,1.4254,1.4254,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#373C3F","#786F8B"],[0,0.988],0.4,1.3,-0.3,-0.4).s().p("AgCAKIADgTIACgBIgDAVg");
	this.shape_74.setTransform(106.4331,23.5014,1.4254,1.4254,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#373C3F","#786F8B"],[0,0.988],-0.9,0.1,0,0).s().p("AgDgLIAFgBIACAVIgHAEg");
	this.shape_75.setTransform(104.6513,23.1094,1.4254,1.4254,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#171A1C").s().p("AgKAOQgEgBgCgEIgBgDQAAgDABgDQADgGALgEQALgGAGAGQAGAFgHAHQgGAGgIAEQgFACgDAAIgCAAg");
	this.shape_76.setTransform(104.8548,23.145,1.4254,1.4254,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#293133").s().p("AgLAQQgFgBgCgEIgBgEIABgHQAEgHAMgFQANgHAHAHQAGAHgIAHQgHAIgJAEQgFACgEAAIgCAAg");
	this.shape_77.setTransform(104.6931,23.116,1.4254,1.4254,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#171A1C").s().p("AgOgKQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAQACgGgDgEIAtAoIgDADg");
	this.shape_78.setTransform(91.9295,21.7553,1.4254,1.4254,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#805252").s().p("AgfAEQADgFAFgEQAFgDAJgBIAHgCQAFgDAIgBIAVgBIACAJQgEAEgGADQgNAFgLgFIgGgBIgEABIgEAGQgCAFgEACQgFAEgEAAIgEABQgBgFADgJg");
	this.shape_79.setTransform(99.7657,22.7174,1.4254,1.4254,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F1CCBF").s().p("AgBABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAGgBIACABQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDABIgBgBg");
	this.shape_80.setTransform(95.8423,38.1238,1.4254,1.4254,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B57675").s().p("AAAgBIgFgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAIAEAFg");
	this.shape_81.setTransform(93.5687,34.192,1.4254,1.4254,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgNADQAGgDAKgBIALgEIAAAFQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHACQgHADgGAAg");
	this.shape_82.setTransform(96.669,35.4392,1.4254,1.4254,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5C4A4C").s().p("AgFAKQgBgDgFgEIgFgDIAFAAIASgFQAHgCADgEQABALgEAGQgDAEgIACIgEAAQgEAAAAgCg");
	this.shape_83.setTransform(96.6547,35.8989,1.4254,1.4254,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-1.4,0.3,0.7,-0.4).s().p("AgKAPIABgFQACgKgBgDIgDgMIAIAJQAEAPADgBQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAAAAABABQgBACgGAAQgFAAgEADIgEABIgCgBg");
	this.shape_84.setTransform(99.1278,31.4402,1.4254,1.4254,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgBABQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIABAAIABABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_85.setTransform(101.2778,30.2899,1.4254,1.4254,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#271C1A").s().p("AgEAAQACgBACgBQAFAAACACQgEgCgEACIgEACIgBABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAg");
	this.shape_86.setTransform(101.772,30.088,1.4254,1.4254,0,0,180);

	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(101.95,30.7,1.4254,1.4254,0,0,180,0.8,0.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B57675").s().p("AgEABIAEgCQADgCAEACQgEgBgDACIgGADg");
	this.shape_87.setTransform(101.9787,29.8445,1.4254,1.4254,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D3D6DB").s().p("AgCAFQgDgCgBgDIAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAFgDADADIABADQgBADgDACIgDABIgCgBg");
	this.shape_88.setTransform(101.6758,30.5317,1.4254,1.4254,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B57675").s().p("AgDACIgCgEIALAFg");
	this.shape_89.setTransform(96.2414,32.8735,1.4254,1.4254,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#C3816D","#765652"],[0,1],-1.3,-0.2,1.3,0.1).s().p("AgIAIQgCgGAEgFQAGgIAKgCIgFAHIgHAFQgFACAAAHIABAGIgCgGg");
	this.shape_90.setTransform(104.5736,24.3923,1.4254,1.4254,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-0.8,0.2,0.8).s().p("AgBACQgCgFgEgDIgEgCQAKAAADAKQADAHAHgBIgHABQgEgBgCgGg");
	this.shape_91.setTransform(90.1834,18.6193,1.4254,1.4254,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-1.1,0.3,1).s().p("AAFADQgEgMgFgCIgEgDIAIADQAEADADAIQAEANgHACQADgEgCgIg");
	this.shape_92.setTransform(92.3554,22.0047,1.4254,1.4254,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#805252").s().p("AgHABIAEABIgDABIgBgCgAAAgCIAAAAIAIAAIgHACQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_93.setTransform(98.804,34.2225,1.4254,1.4254,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B57675").s().p("AgSAGQACgBABgDIADgFQABAFgDACIgDACgAAKgBIgGgCIgCgCIAHACIALAAQgFACgEAAIgBAAg");
	this.shape_94.setTransform(98.5577,30.8779,1.4254,1.4254,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-0.9,-0.4,0.8).s().p("AADAHIgEgFIgKgJIADAAIAHAGQAFAFAIAEIgJgBg");
	this.shape_95.setTransform(91.5019,19.6528,1.4254,1.4254,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#997363","#523A38"],[0,1],0.4,-1.4,-0.2,0.5).s().p("AAFgEQgFgFgGACIgHACQAAgFAJgBQAIgBAFAGQAIAHgFALQACgJgJgHg");
	this.shape_96.setTransform(96.0161,20.3197,1.4254,1.4254,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#997363").s().p("AggAMQAKgDAFAEQACACABACQgDgEgSAGQgJADgFAEIgDAEQgBgLAVgHgAgWgDQgHgBgGACIgEABIAFgDQAHgCAJABQAQACAAAGQgIgEgOABQgJAAgHADIgFACQAGgHARgBgAAYgWIAIgEQgFAAgEACIgDACIAEgEQAFgDAHAAQAMAAAFAKQgLgKgNAGQgIAEgCAFIAAAEIgBAAQgCgHAIgFg");
	this.shape_97.setTransform(98.8816,19.047,1.4254,1.4254,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#523A38").s().p("AAJAJQgFgFgCgHIAAgIIACAIQADAHAFADQAHAEADAJIgCADQgCADAAAFQgCgPgHgHgAAaARIgDgPQgDgMgLgJIAGADQAHAEADAHQAFAJAAADQABgOgEgJIgFgKIgDgEIAFAEQAFAGAEAJQAGAQgBAMQgEgGgIAGgAgDgEQgGgNgKAAQgKgBgFAEIgEAEQABgGAJgEQAKgDAIAGQAMAKgBAOQgBgGgDgFg");
	this.shape_98.setTransform(92.5614,22.2541,1.4254,1.4254,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEACQAAgCAEgCQAEgCAAADQACACgFACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_99.setTransform(96.6334,28.7042,1.4254,1.4254,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#271C1A").s().p("AAAgCQAGgCAGADQgJgCgFACIgJAFQgCgEANgCg");
	this.shape_100.setTransform(97.0087,28.2908,1.4254,1.4254,0,0,180);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(97.2,29.2,1.4254,1.4254,0,0,180,1.2,1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D3D6DB").s().p("AgFAHQgCAAgCgEIAAgDIAAgCIAJgEQAFgBAFABQACAKgLADIgDABIgDgBg");
	this.shape_101.setTransform(96.9526,28.9073,1.4254,1.4254,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#523A38").s().p("Ag3ALQAFgDAGAAQgLAEgGAJIgDAHQgBgMAKgFgAAwAKQgCgMgOgFIABAAQAGAAAGAFQAGAFAAAFQAAAIAMgCQgFAEgEAAQgFAAgBgIgAA7gKQgIAAgCgGQgDgLgLAAQAEgBAEACQAFADADAGQADAIALgCIgEACIgCgBg");
	this.shape_102.setTransform(97.673,21.3785,1.4254,1.4254,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#523A38").s().p("AABgDQgHgBgHAEIgFAEQACgFAHgDQAGgDAIABQAMABACAMQgFgKgNAAg");
	this.shape_103.setTransform(93.2836,16.8217,1.4254,1.4254,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#523A38").s().p("AAdgBQgGgGgJADIgIAEQABgFAIgCQAIgDAIACQAKACACALQgCgEgEgCQgDgDgGgBIgGgCIAEACQAGADADAEQAFAHAMADIgCABQgIAAgNgOgAgagHQgKAAgIAFIgHADQABgIAVgEQAJgCAJAGQAGAFAAACQAAABAAAAQAAABAAAAQAAABgBAAQgBAAAAABQgEgLgPAAg");
	this.shape_104.setTransform(97.8093,18.9136,1.4254,1.4254,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#523A38").s().p("AAEgEQgEgGgFAAIgGACIADgCQADgCAFAAQAGABADAFQAEAFgCACIgFAHQgDAEgEABQALgIgGgJg");
	this.shape_105.setTransform(99.1662,18.0611,1.4254,1.4254,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#523A38").s().p("AggASIADgCIgFAAIADgDQAGgEAKgCQAQgCAOAGQgOgCgPAEQgLACgGAEIgEADQABgCACgCgAAPALQANgFgCgLQAAgIgKgDQgJgEgHAHIACgDQAFgEAIAAQAIABAEAGQADAEAAAFQAEgLgJgHQAJACABAIQACAIgFAFQgFAHgMADIAAAAg");
	this.shape_106.setTransform(101.5976,18.4412,1.4254,1.4254,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F1CCBF").s().p("AgFAIIgCgCIAEAAQAEAAACgDQAEgFAAgFQACAJgIAEQgCACgCAAIgCAAg");
	this.shape_107.setTransform(87.7076,28.6685,1.4254,1.4254,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-0.8,0.4,0.8,-0.3).s().p("AgMACQADgPAJgGQAHgDAEAVQAFAVgHgCQgGgBgFACIgEACg");
	this.shape_108.setTransform(102.6314,25.3355,1.4254,1.4254,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F1CCBF").s().p("AgDAAIABgCQACACAEAAIgEADQAAAAgBgBQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_109.setTransform(103.1903,29.8088,1.4254,1.4254,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#F1CCBF","#E2ACA2"],[0,1],-1.1,2,0,-1.1,2,2.7).s().p("AALAeQgLgKgNgEQgGgBgCgEIgCgFQgCgGgCgEIgCgDQAIAEAQgPQAMgGAEgHIAGAHQAGAHABAFIACAKQABAGADAFQACAGgEADQgHAGgCAFQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_110.setTransform(93.9327,30.7548,1.4254,1.4254,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#523F3E").s().p("AgiALIAAgDIACgBQADgCAEAAQAHABADADQgJgCgFADIgEAEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAACgIQAFgDAHgBQAGgBAEABQAFABAGgCIgDAGQgLgFgMAFQgIADgDAEIgDAEQgDgFAKgHg");
	this.shape_111.setTransform(98.9497,27.5995,1.4254,1.4254,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B57675").s().p("AAcANIgDgNIAAgFQABgFADgDQAFgEAFAGQACACAAAIIABAEIgDgIQAAgEgDgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAFABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQgCAIACABQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAgBABQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgBgHQgCgHgCAEQAAABADAFQAAACgDAFIAFABIgFABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABgBgAgpAJIAKgFQAHgCAGAEQgFgCgHABIgLAFg");
	this.shape_112.setTransform(92.7847,26.8227,1.4254,1.4254,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B57675").s().p("AgIALIgEgBQgDgCABgFIAEgNIgCALQgBAEACACQAGgFAJABQAMABgEgFIgDgDQADAAADADQACABgGADQgJADgFADIgFACIAAAAg");
	this.shape_113.setTransform(98.7751,33.1645,1.4254,1.4254,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-0.5,0.4,1,-0.1).s().p("AgEACIgEgMIgBgIIACADQAEgBADgGIADABQADADgBAEIgBAMQgBAHACABQAEABAAAFQgBAEACAHQgKgNgEgIg");
	this.shape_114.setTransform(101.0878,33.6931,1.4254,1.4254,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#765652").s().p("AAoAYQgLgLgGgLQABAAABABQABAAAAAAQAAAAABAAQAAgBAAAAQgBgDgDgGQgEgHgHgCQgGgCgGACIgGADQgCgEgHAFQgIABgEAEQgIAAgEAFQgLAFgCASIgBABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIgBgDQAAgEADgDIgCABIgFAGIgCAGIAAABIgCgFQAAgGAEgGIgDACIgEAFQgCgEABgFQABgKANgGQgFgFgGAEIACgDQACgDAEgBQgCgBgFACIACgJQAGgLAQgHIACgDQADgEAJgCQAUgGAHADQAEABABADQgCgHgDgBQAGgBACAHIAGgFQAHgEALAFQAWAJADAMIAIAPQAHAPgCAQQgFgGgJAIQgGAFAAAFIADALQADAJgCAIIgEADQgBgUgJgNg");
	this.shape_115.setTransform(97.0721,22.6263,1.4254,1.4254,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#805252").s().p("AAJAOIgFgGIgBgDQAEgFgEgEIgFgFQACAHgDACQAAgEgDgEQgCgDgEgCIgDgCQADgBAEABIAAgCQATALABAIQABAJADAHg");
	this.shape_116.setTransform(94.3883,22.3611,1.4254,1.4254,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E2ACA2").s().p("AgHBLQgFgBgGgJIgVgfQgEgFgCgIIgCgKQgBgDgGgEQgCgBgBgDIAAgHIgFgUQgFgLAPgYQAFgHAMgCIAUgDQAKgCAPAIQAPAIAAAGQABAIANAZIAAgFQAAgGACgDQADgEAHgBQAHAAACAFQAHAUgEAKQgFAIgHAAQACAKgGATQgJAbgaAMQgKAEgFAAIgEAAg");
	this.shape_117.setTransform(95.5893,29.6378,1.4254,1.4254,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C03B3A").s().p("AgJBBQAEgBABgLIAEgwIADgyQAAgJgDgGIgEgFQANAAABAQIgEA0QgEAvgCAHQgCAJgGAAIgBgBg");
	this.shape_118.setTransform(114.2729,84.1596,1.4254,1.4254,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#F8D371","#F2E47A"],[0,1],-80.5,0,80.5,0).s().p("AH5AlQlRg8kggWQkfgWi8APQg6AFgqAIIgeAHIhPgSQAqgRBmgMQDOgZEzAYQEyAZFiA5QCwAdB0AZIgLAVIABAAIgKAQQhvgaipgeg");
	this.shape_119.setTransform(68.6952,139.3608,1.4254,1.4254,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#8A9FA8","#E1E2E1"],[0,1],-96.1,0,96.2,0).s().p("AH8CYQlAgZk+g0QkVgtkhhSQiQgqhYghIAAAAIghgnQBXAkEXBDQFWBQFdA1QFGAxEvAOQCXAGBWgDQgGAMgHAJIgFAHQgtADg/AAQh/AAjJgPg");
	this.shape_120.setTransform(98.8071,142.7216,1.4254,1.4254,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#849FAD").s().p("AIFCXQlWgTkxgyQkVgtkhhSQiQgqhYghIAAAAIghgnQBXAkEXBDQFWBQFdA1QFGAxEvAOQCXAGBWgDIAAALQhCAGheAAQh4AAilgJg");
	this.shape_121.setTransform(98.8071,140.1166,1.4254,1.4254,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E94D4D").s().p("AJXAoQj1gqjMgWQj1gajpgIQjsgJhXAQQhKAMgjAKIgVAIIgYgGQABgEAIgFQARgLAlgJQB5gbEgAGQEhAGHFBJQDjAlCqAkIgBADIgBABQhSgRh7gWg");
	this.shape_122.setTransform(68.5527,136.0072,1.4254,1.4254,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#581211").s().p("AhFCKQg7gDhOgWIhDgVIAAgBIA8grQBCgzAigqQAhgrANgdIAGgVIB/AeQCNAlBDAfQAAAFgPAfIgMAVQgLAVAFgSQgEAAgEAEQgIAIACAWQgQAdgSAcQgNAShaAHQgsADguAAQghAAgkgBg");
	this.shape_123.setTransform(-10.7728,144.8704,1.4254,1.4254,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#C03B3A","#801517"],[0,1],-102.9,0,103,0).s().p("AMhDKQjsgEm3gxQm3gxl3hsQi7g3hkgtQghgngOgXIgGgPQL9g4LSCJQFqBFDQBPQgCANggA7IghA5IgOAWQgZAHhXAAIgjAAg");
	this.shape_124.setTransform(96.8115,132.7795,1.4254,1.4254,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8A9FA8").s().p("ADGDRQhbgqhlhJQjLiSg2iaQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAABAAQAqBGBUBYQCmCuDQBWIgWABIgggBg");
	this.shape_125.setTransform(208.0454,136.2695,1.4254,1.4254,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5A6A72").s().p("AgwAmInMgUQGfgHBQgdQAngQgrgOQBcgEDhAWQByAMBfAMQABAGgHAKQgNAVgkANQgPAFhYAAQh+AAkRgLg");
	this.shape_126.setTransform(36.899,165.4821,1.4254,1.4254,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#8A9FA8","#FFFFFF"],[0,1],80.7,-17.9,-19,49.1).s().p("AHzDiQlFgLrYgWQj0h1iMiiQgrgygcgyIgTgnQNGgfK1B/QFbBACzBFQg3B1gsA9QgfArhPAGQgQABglAAQhTAAi5gGg");
	this.shape_127.setTransform(96.8828,138.5317,1.4254,1.4254,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FDD2BA").s().p("AgDABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCAAIgCAAg");
	this.shape_128.setTransform(136.4638,63.7426,1.4254,1.4254,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#99816E").s().p("AgcAaQAbgPAZglIAAgBIAFACQgRAcgeAZg");
	this.shape_129.setTransform(130.9859,104.5719,1.4254,1.4254,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D0B9A6").s().p("AAlAiIg2gJQgXgDgbgHIgXgHQAKgLATgMQAlgYAmAFQAoAGAXAMQALAGADAFQgHAigLAFQgDACgIAAQgJAAgQgCg");
	this.shape_130.setTransform(135.6541,104.305,1.4254,1.4254,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#101518").s().p("Ag3AcIgOgTIAOAHQAOAIACADQADAHgNARQACgMgIgLgAgRAKQgJgGgEABIgTAAQAGgCACgEQAAgDAGABIALACQAJABAFAPgAAeglIAGgEIAOgHQAKgEAKAEIgKAEQgJAEgCADQgCADAFAGIAGAGQgagIgCgHg");
	this.shape_131.setTransform(133.1596,89.8545,1.4254,1.4254,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#974A48").s().p("AAKAQIgNgCIABgCIANACIAAACIgBAAgAgKAAIADgBIALAAIAAABgAgKgNIACgBIAAgBIAJABIAAABg");
	this.shape_132.setTransform(152.0107,97.0956,1.4254,1.4254,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-3.2,0,3.3,0).s().p("AgGAmQgGAAgBgEQgBgFgCgBQgDgBAAgEQAAgFgFgCQgFgDABgFQADgFAAgDQAAgBgEgDQgEgCABgEQAAgFAIgEIAIgEIgFgNQARgEAOAIQAIAFAEAEQANAQgCAVQgHALgNAIQgLAFgGAAIgCAAg");
	this.shape_133.setTransform(147.0692,95.6679,1.4254,1.4254,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#809BB2").s().p("AgEgDIABgFIAIAMIgCAGg");
	this.shape_134.setTransform(137.0795,73.1058,1.4254,1.4254,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#B86D66","#F9B49E"],[0,1],-2.1,0,2.2,0).s().p("AgDAVQgEgDAAgCIABgCQgJAAgBgHQgBgEADgCIADgBQgFgBgBgGQAAgDADgCIACAAQgHgBgBgFQgBgFAFgDQAGgEARAEIAAAAQAPAmAAAFQAAAGgDAGQgQgEgGgEg");
	this.shape_135.setTransform(151.3812,96.8034,1.4254,1.4254,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#101518").s().p("AgmAlIAMggIACAAIgCALIgFARIgIAQQgBgGACgGgAAagDIgIgFIAJgfIACgCIAAgBQAAgFAGAAQAGAAAAAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIAAAAIACADIgJAgIgDAAIgDAAgAAYgMQAAADADAAQAEAAAAgDQAAgFgEAAQgDAAAAAFg");
	this.shape_136.setTransform(141.4698,77.0257,1.4254,1.4254,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#679B94").s().p("AgIALIAPghIADABIgOAfQgCAGAAAHQgEgFACgHg");
	this.shape_137.setTransform(148.6372,80.4111,1.4254,1.4254,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#101518").s().p("AAJAGIghgHQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIAmAIQAHAAABgCIAEgIQgBAIgCACQgDADgFAAIgGgBg");
	this.shape_138.setTransform(144.0729,77.4813,1.4254,1.4254,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CBCBCB").s().p("AgIAKIAAgDQAHADAGgKQADgFgCgEIADAAQABAFgFAHQgEAHgIAAIgBAAg");
	this.shape_139.setTransform(215.9872,31.5214,1.4254,1.4254,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.3,0,-1.3,0.1).s().p("AgKALQgDgCACgFQABgFAFgFQADgDAFgDQAFgBAEACQACACgCAGQgBAEgFAEQgHAIgFAAQgCAAgCgCgAABgIQgDABgCADQgIAHAFADQADAEAGgHQAHgHgEgDIgCgBIgCAAg");
	this.shape_140.setTransform(216.0955,31.4392,1.4254,1.4254,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#282521").s().p("AgNAYQgYgOgMgYIgIgVIACAAIAJAXQAOAZAXAKQAWALAYgBQAMAAAHgDQABAAAAAAQAAAAAAABQABAAgBAAQAAAAAAABQgIADgNABIgFAAQgXAAgVgMg");
	this.shape_141.setTransform(209.308,37.659,1.4254,1.4254,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CBCBCB").s().p("AgIALIgBgEQAJADAFgKQAEgGgCgEIACAAQACAFgFAIQgFAIgIAAIgBAAg");
	this.shape_142.setTransform(199.7241,41.3211,1.4254,1.4254,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0.1).s().p("AgLANQgDgDABgGQACgFAFgFQAFgFAEgCQAFgBAFACQAFAHgLALQgFAFgFACIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgFgEQgDADgBADQgBADACACQAEAEAGgIQADgDABgDQABgDgBgCIgDgBQgDAAgFAFg");
	this.shape_143.setTransform(199.8646,41.1805,1.4254,1.4254,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#282521").s().p("AgLAVQgXgMgLgVIgGgUIACABIAJAVQANAVATAKQATAKAWAAQALAAAGgCIACABIAAAAQgHADgLAAIgDAAQgVAAgVgMg");
	this.shape_144.setTransform(193.9536,47.1327,1.4254,1.4254,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CBCBCB").s().p("AgJAIIAAgBQAIAEAHgLQAEgFgCgEIACAAQACAFgGAHQgEAGgFABIgGAAIAAgCg");
	this.shape_145.setTransform(185.249,50.5486,1.4254,1.4254,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0).s().p("AgMAMQgDgDACgFQACgFAFgFQAFgEAFgDQAFAAAFACQACADgCAFQgDAFgFAFQgFAFgFABIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgFgEQgHAGADAFQAEAEAHgIQAIgGgEgEIgDgCQgDAAgFAFg");
	this.shape_146.setTransform(185.3219,50.4034,1.4254,1.4254,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#282521").s().p("AAaAxQgagGgXgQQgVgOgJghIgEgfIACABIAEAcQAJAeAVARQAUARAgAGQAQADAMAAIgLABQgJAAgNgDg");
	this.shape_147.setTransform(178.3096,58.9675,1.4254,1.4254,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CBCBCB").s().p("AgJAIIAAgBQAIADAHgKQAEgFgCgEIACAAQACAFgGAHQgEAFgFACIgGAAIAAgCg");
	this.shape_148.setTransform(168.928,65.373,1.4254,1.4254,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0).s().p("AgMAMQgDgDACgGQACgEAFgFQAGgFAEgCQAFAAAEACQADADgCAFQgCAEgGAFQgFAGgFABIgDABQgEAAgBgCgAABgIQgDABgDADQgHAHADADQACACADgBQAEgBACgDQAIgHgEgDQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCABg");
	this.shape_149.setTransform(169.0088,65.2233,1.4254,1.4254,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#282521").s().p("AAYBNQgogFgUgjQgVgkgDgqIABgkIACAAIgBAfQADAoATAmQASAnAoAFQAVADARgGIABACQgLADgMAAIgOgBg");
	this.shape_150.setTransform(161.7392,77.9802,1.4254,1.4254,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D14F50").s().p("AADADQgBgDgEgFIgFgGIAAgBIAPANQgBAHgEAFQACgGgCgEg");
	this.shape_151.setTransform(166.2292,62.5578,1.4254,1.4254,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#AF4340").s().p("AABASQgBgBgGgHIgIgJIgBgEQALgJAAgEIAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAIAOAPQADABgBADQgBAJgGAEQgEACgDAAIgBAAg");
	this.shape_152.setTransform(167.0786,62.803,1.4254,1.4254,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D14F50").s().p("AAEACQgBgCgEgEIgGgEIgBAAIABgCIAQALQAAAGgEAEQABgFgCgEg");
	this.shape_153.setTransform(182.9422,47.8047,1.4254,1.4254,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#AF4340").s().p("AACAPIgOgJIgDgGQALgIgBgFIAAgBIAEABIAOAJQADACgBADQgBAHgFAEQgDADgDAAIgBAAg");
	this.shape_154.setTransform(183.7211,48.2731,1.4254,1.4254,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D14F50").s().p("AADABIgEgEIgEgCIAAgBIALAGQAAAEgCADQABgDgCgDg");
	this.shape_155.setTransform(214.3299,28.7042,1.4254,1.4254,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#AF4340").s().p("AgGAGIgDgDQgBgFAEgEIADgDIACAAIAJAFIACADQAAAFgCADQAAABgBABQAAAAgBABQAAAAAAAAQgBAAAAAAIgLgEg");
	this.shape_156.setTransform(214.8404,29.0071,1.4254,1.4254,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D14F50").s().p("AAEABQgBgBgEgDIgFgDIAAgBIAAgBIANAIQAAAFgCAEQABgEgCgEg");
	this.shape_157.setTransform(197.8675,38.0763,1.4254,1.4254,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AF4340").s().p("AgHAFIgEgEIAAgBQAHgIAAgEIADAAIALAGIACADQAAAGgDAGQgDAEgCAAIgLgIg");
	this.shape_158.setTransform(198.4436,38.6108,1.4254,1.4254,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#938C8A","#565A5C"],[0.02,1],20.9,0,-20.8,0).s().p("AC8CYQgVgggqgsQhNhRiHhYQhEgsg0gbQgBgEAAgDIABgDQAbAIBWA5QBXA6BTBCQAzAoAuA+QAXAfANAXIgIAEQgCgHgLgQg");
	this.shape_159.setTransform(185.698,53.0431,1.4254,1.4254,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#938C8A").s().p("ADpEYIAAAAQgGgsgTg8Qgmh3hGhPQhEhOiThfQhJgvg7gjQAAgEADABQBWAoBhBBQDACDA0B/QAmBfARA7QAJAeABAKQgGAEgFAAIgEgBg");
	this.shape_160.setTransform(180.1983,68.1543,1.4254,1.4254,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#808B91").s().p("AAAAOIgGgfIACACQADABACAAIAGAgQgEgBgDgDg");
	this.shape_161.setTransform(146.6298,111.1288,1.4254,1.4254,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#25292B").s().p("AgNACQgBgCAEgCQAEgDAGgBQAMgBACAGQABABgEADQgEADgGAAIgFABQgIAAgBgFg");
	this.shape_162.setTransform(145.8458,107.8402,1.4254,1.4254,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#484E52").s().p("AgEAVQgFgBgBgDIgGgiQAQAEALgIIAFAhQABADgEADQgDADgFABIgDAAIgGgBg");
	this.shape_163.setTransform(145.4494,110.7101,1.4254,1.4254,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#282521").s().p("AgHAOQgEgEgBgHQgBgGADgGQACgGAFgBIAGgCIABADQAHAEACALQAAAEgBAFIACAHIgLACIAAAAIgCAAIgBABQgDAAgEgFg");
	this.shape_164.setTransform(153.5252,87.0785,1.4254,1.4254,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#F6C55C","#D0924A"],[0,1],-2.1,0.1,0,1).s().p("AgLAXQgIgHgCgNQgCgMAGgJQAFgKAJAAQAIgCAIAIQAHAIACAMQACALgFAKQgFAJgKACIgDAAQgGAAgGgHg");
	this.shape_165.setTransform(153.592,87.2887,1.4254,1.4254,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFDBA1").s().p("AgLAXQgIgHgCgNQgCgLAGgKQAFgJAJgCQAIgBAIAIQAHAIACAMQACALgGAKQgFAKgJABIgDAAQgGAAgGgHg");
	this.shape_166.setTransform(154.1845,87.4046,1.4254,1.4254,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B86D66").s().p("AAIALQgBAAAAgFIACgGIAAAJQABABAHADIABgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIgBAJQgIgCgCgCgAgGAJQgCgBAAgGIABgEIABAIQAAACAGABIAAgDIAAAFQgFgBgBgBgAgSgHIAAgCIAFAEIAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAAAMQgEgCgCgDg");
	this.shape_167.setTransform(162.5944,88.2865,1.4254,1.4254,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B86D66").s().p("AAEAPQACgMACgDQACgFAKgGIAKgEQgPAIgEAFQgCACgCAMIgBAMIgEAEIACgNgAgHgFQADgGAIgGIAJgFIgJAHQgIAGgCAFQgDAGgBAUQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgCABQAFgXAEgHgAgdALQAAgSADgGQACgEAHgFIAHgEIgIAGQgHAIgBAFQgCAGACANg");
	this.shape_168.setTransform(160.1763,86.576,1.4254,1.4254,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F9B49E").s().p("AAKAWQgFgBgBgEIAAgEQgGAFgGgBQgDgBgBgCIAAgDQgEACgHABQgEABgDgEIgDgDQgCABgDgBQgEgCAAgFQAAgEAKgIQAIgIAFgBQADgBADACIADADIAGgCQAEgCACACQADAEAIAAQAEAAAGAEQAFAFADgBQAGAAAFALQABADgBACQgCADgDAAIgMAFQgJAEgEAAIgCAAg");
	this.shape_169.setTransform(159.2625,84.2879,1.4254,1.4254,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#B86D66","#F9B49E"],[0,1],3.1,0,-3,0).s().p("AAOAUIgBgEQgJAHgDgCQgCgBgBgEIgBgDQgFAEgFgBQgFgBgBgGIAAgGQgCACgFgFQgEgCABgLIABgKIAnAIQAJABALAKQgBAbgKABIgBAAQgDAAgCgEg");
	this.shape_170.setTransform(161.1378,87.8268,1.4254,1.4254,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B86D66").s().p("AACAZIgEgEQgDgDgGAAIgUgBQgEAAAEgHQAEgIAJAAQAIAAAEgEIAHgKQAFgEALgEIANgEQAEAAAAASIgHAHQgIAJgDAEQgCAFgFAEQgDACgCAAIgCAAg");
	this.shape_171.setTransform(157.5437,89.2655,1.4254,1.4254,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#101518").s().p("AgJADIgDgTQAAgFAEgEIAHABQAHAEAEAPQAEARgBAHQAAAFgGACIgDAAQgIAAgFgXg");
	this.shape_172.setTransform(144.3362,95.3358,1.4254,1.4254,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B86D66").s().p("AgCAGIgLgCIAGgEQAHgEAGgBQAHAAABAFQAAAEgDABIgGABIgHAAg");
	this.shape_173.setTransform(152.0775,92.4098,1.4254,1.4254,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#101518").s().p("AAKAHIgigHQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgBIAAAAIAmAGQAHgBACgDIADgIQAAAIgCADQgEAEgFAAIgFgBg");
	this.shape_174.setTransform(132.2064,95.1336,1.4254,1.4254,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#34465E","#101518"],[0,1],-1,0.5,-0.9,-4.1).s().p("AhEADQgBgHgGgBQgFAAACgEQABgEAYgBQAXAAABgGQACgGAKAAQARgBAIgDQAKgEAJgGQAGgFAIgBQANgBAYAYQACACgBAKQgBALgGAKQgGAJgNABQgUABgLAEIgWAJQgEACgJAAQgHABgMAFQgMAFgFAAIAAAAQgMAAgHgsg");
	this.shape_175.setTransform(135.9455,92.2751,1.4254,1.4254,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#34465E","#101518"],[0,1],-1.5,2.5,2,0.6).s().p("AgcBRQgIgCgIgQQgIgRAEgMIASglQAOgfAEgPQAJgmArAGIAIAPQAGATgHATIgOAgQgKAWgBALQgCANgLALIgQAPQgHAGgDABIgCAAIgJgCg");
	this.shape_176.setTransform(123.8714,80.9657,1.4254,1.4254,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#EBD165","#C8995C"],[0,1],-6.9,-0.7,7,1.5).s().p("AANALIgfgEQgTgBgUACIgPADQAFgEAXgKIABAAIAKgEQAOgEAYAAQAoAAAcAJQgHADgPAFIgXAGIgDAAIgMgBg");
	this.shape_177.setTransform(137.614,47.4216,1.4254,1.4254,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFF8E7").s().p("AASAMQgSgEgVgBQgXgCgMADIgPAEQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgCAOgHIAPgHQAjgIAtAEQAXACAQAEQgbARgVAAIgJgBg");
	this.shape_178.setTransform(137.4766,47.7966,1.4254,1.4254,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0A0D0D").s().p("AAEAaIgHgBQABgHgCgSQgBgKgHgJIgHgIQAcAKAIAXQAEALgCAKIgDABIgMgCg");
	this.shape_179.setTransform(127.0541,43.3236,1.4254,1.4254,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#34465E","#101518"],[0,1],-1.4,0,4.7,0.1).s().p("Ag8ABQAQgdAfgBQAqgCAWARQAUAPgBAcQhOgBg+ADg");
	this.shape_180.setTransform(134.4035,42.9496,1.4254,1.4254,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#817B87").s().p("AgEAfQAEgJAAgPQAAgJgCgHIgBgHQACgHAAgHIACAGQADAIABAMQACAVgEAKQgDABgEADg");
	this.shape_181.setTransform(125.0027,47.5909,1.4254,1.4254,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5C5654").s().p("AgeAAIgNABIgGADIAAgCIAAgFIACADIAAgDIABACIADgCQAEgCAJABQAPABAEAJQgHgGgMAAgAAWAAQgMAAgFADIgDADQgCgDAEgDQAFgDAKgCQARgCAKAGQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAAABIABAAIgGAGQgFgHgRABg");
	this.shape_182.setTransform(135.5472,49.8359,1.4254,1.4254,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B86D66").s().p("AgBADIADgCIgCADIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAAAgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQABABAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_183.setTransform(142.6488,53.5108,1.4254,1.4254,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.4,0,1.4,0).s().p("AgFAFQgHgCgBgEIAEACQAFACAFAAQAKgBADgGQgBAGgHACIgGABIgFAAg");
	this.shape_184.setTransform(139.9303,54.4962,1.4254,1.4254,0,0,180);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B86D66").s().p("AACADQgDAAgBgCIADAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAIgCABIgCgBgAgFAAIAFgBQADgCABABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAIgCAAg");
	this.shape_185.setTransform(129.5961,54.1003,1.4254,1.4254,0,0,180);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.4,-0.2,1.4,0.2).s().p("AgGAEQgHgEAAgFIADAEQAFADAFAAQAKABAEgHQgCAHgHACIgEABQgDAAgEgCg");
	this.shape_186.setTransform(132.6607,54.7536,1.4254,1.4254,0,0,180);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgDAAQAAgCADgBQAEABAAACQAAADgEABQgDgBAAgDg");
	this.shape_187.setTransform(140.0016,53.7202,1.4254,1.4254,0,0,180);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1B2228").s().p("AAAgCQgGAAgEACIgDADQAAgCAEgCQAFgEAFABQAKABADAHIgCABQgDgIgJABg");
	this.shape_188.setTransform(139.966,52.8961,1.4254,1.4254,0,0,180);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(140.15,53.6,1.4254,1.4254,0,0,180,1.3,1.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-1.3,0,1.4,0).s().p("AAGACQgJgDgKAGIAAAAIACgFQADgFAHgBQAGgBAFAGQADADABAFQgDgDgFgCg");
	this.shape_189.setTransform(139.8947,52.1413,1.4254,1.4254,0,0,180);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D8DDDC").s().p("AgJAGQgEgDACgEIACgDQADgEAGAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	this.shape_190.setTransform(139.9371,53.5075,1.4254,1.4254,0,0,180);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADABQAEgBABADQgBADgEAAQgDAAAAgDg");
	this.shape_191.setTransform(132.9814,53.6489,1.4254,1.4254,0,0,180);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1B2228").s().p("AAMAFQgDgIgJABQgGAAgEACIgDADQAAgCAEgCQAFgEAFABQAKABADAIg");
	this.shape_192.setTransform(132.732,52.8961,1.4254,1.4254,0,0,180);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.setTransform(132.85,53.6,1.4254,1.4254,0,0,180,1.4,1.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-1.3,0,1.4,0).s().p("AAGACQgJgDgKAGIACgFQADgFAHgBQAGgBAFAGQAEADAAAFQgDgDgFgCg");
	this.shape_193.setTransform(132.732,52.1413,1.4254,1.4254,0,0,180);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D8DDDC").s().p("AgJAGQgEgDACgEIACgDQAEgEAFAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	this.shape_194.setTransform(132.7388,53.5075,1.4254,1.4254,0,0,180);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],1.4,0,-1,-0.1).s().p("AgOAAQAAgWACAAIACACQADACAHABQAIABAHgFQgBALgHAGQgFADgEAMQgFAMgCAAIgBAAQgEAAAAgXg");
	this.shape_195.setTransform(140.2511,57.8903,1.4254,1.4254,0,0,180);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#B86D66","#F9B49E"],[0,1],-2.8,0,1,0.1).s().p("AgvAaIgJgDIgEgnIAIgFQANgEAWgBQAigBAsAJQAAALgJAKQAEAGgDANQgCACgPgCQgHgBgLACQgOADgQABIgNAAQgNAAgJgBg");
	this.shape_196.setTransform(135.0483,49.8522,1.4254,1.4254,0,0,180);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-2.5,0,0.3,0.4).s().p("AgEALQgSgRgEgQIAGAEQAIADAIgCQALgEAAgEIAUACQgDARgJADQgGACAAANQAAAIACAGQgIgGgHgJg");
	this.shape_197.setTransform(131.4491,58.2459,1.4254,1.4254,0,0,180);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B8B5B3").s().p("AgMA9QAEgfAAgLQABgHgDgKIgCgHQAIgCAEgTIABgYIAAgKIAFAGQAFAIABAQQACAZgEAIQgDABgDACQgFAGgCAMIgFAlg");
	this.shape_198.setTransform(126.1787,51.0475,1.4254,1.4254,0,0,180);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B86D66").s().p("AgQACQgKgCABgCIADACIAJABQASACAMgCQAGgBADgCQgCADgIABIgRABIgPgBg");
	this.shape_199.setTransform(136.4443,60.6869,1.4254,1.4254,0,0,180);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#B86D66","#F9B49E"],[0,1],-0.7,4.8,2.3,-1.3).s().p("AAIAIIgLgMQgDgDgEAAIgEAAIAAgHIgEgNQAKAEAEAQQAMAKAGAIQAHAJgCAIQgDgMgIgIg");
	this.shape_200.setTransform(133.9832,58.9586,1.4254,1.4254,0,0,180);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-0.5,0,0.6,0).s().p("AABALQgFgBgBgCIACgJQACgJABgBQADAAABAJIACAKQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_201.setTransform(137.1508,56.38,1.4254,1.4254,0,0,180);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgPACQgEgBgBgCIAAgCIAWACQAMAAAHgCIgBADQAAABgMACIgIABQgIAAgHgCg");
	this.shape_202.setTransform(136.4381,61.2081,1.4254,1.4254,0,0,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DF8080").s().p("AgQAAIAAAAIACgCQAEgCAKgBQANgBAFAGQgDAEgJABIgFABQgMAAgFgGg");
	this.shape_203.setTransform(136.545,62.4932,1.4254,1.4254,0,0,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#512A2A").s().p("AgJAHQgFAAgFgIIgDgHQAJACAXABQAFgBAIgCQgDANgIACQgEACgFAAIgMgCg");
	this.shape_204.setTransform(136.545,61.9163,1.4254,1.4254,0,0,180);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.5,0,1.5,0).s().p("AgGACIgFgCIgDgBIAAABQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAABAAQADgBADACIADACIADAAIAFAAQADgCACABQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgHAAgDACIgEABQgDAAgDgCg");
	this.shape_205.setTransform(136.9325,58.3225,1.4254,1.4254,0,0,180);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#B86D66","#F9B49E"],[0,1],0.2,2.1,-0.4,-0.7).s().p("AgHANQABgHADgGIAHgMIAEgFIAAAHIgBAAIgEAGIgGAKIgEAMIAAgFg");
	this.shape_206.setTransform(140.0016,59.7069,1.4254,1.4254,0,0,180);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F9B49E").s().p("AgYBeQgNgDgHgFQgGgEgEgKQgEgHgCgeIgFg9QgDggAbgVQAagTAdAFQAYAEAPAOQAIAHACAGIADAMQABAQgCARQgDAagMA5QgBAMgOAGIgXAGIgQAFIgHAAIgNgBg");
	this.shape_207.setTransform(134.2115,52.6185,1.4254,1.4254,0,0,180);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B8B5B3").s().p("AgEA+IgIg7QgDgWAMgWQAHgQAKgEIgKAPQgKATAAAMQgBAUADAWIACAjg");
	this.shape_208.setTransform(142.2552,50.2457,1.4254,1.4254,0,0,180);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B86D66").s().p("AA8AIIAAgOIADgFQADgFAEABQAGABABAEQABAEgCAEIgFAEQAFgGgBgEQgCgEgEACQgDABABAEQAAAGgBABQgEAEADADQAAABAEgEQgEALgDACIgBAAQgDAAACgLgAg9AQQgCgBgCgGIgCgFQAAABABAAQABABAAAAQAAAAABAAQAAAAAAAAQADgCgEgEQAAgBAAgHQAAgDgDgCQgEgBgCADQAAADABAFIADADQgCAAgCgFQgCgEABgDQAAgFAGgBQAGgBAEALIABAOQACALgDAAIgCgBg");
	this.shape_209.setTransform(134.4069,54.9035,1.4254,1.4254,0,0,180);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F9B49E").s().p("AA3AYQgDgBAEgUIADgTIAEgFQAEgFAGADQAGAEgBAOQgCALgGAJQgFAIgEACIgCABIgEgCgAg+AWQgFgEgEgJQgMgZALgHQAJgGAEANQAJAmgEACIgCABQgCAAgEgDg");
	this.shape_210.setTransform(134.4054,55.1219,1.4254,1.4254,0,0,180);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D0924A").s().p("AAOAAQAGgJgZgOIACgJIAKABQANABAIAFQAOAIgEAIQgCAFgFACQACgCAAgDQAAgHgKgFIAFAIQAEAKgJAGQgJAGgTAKIgSAIIgOAEQAsgZAHgIg");
	this.shape_211.setTransform(128.1411,64.8741,1.4254,1.4254,0,0,180);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#101518").s().p("AgFALIALggIACAAIgCALIgFAQQgDAJgFAHQAAgFACgGg");
	this.shape_212.setTransform(132.6607,82.8343,1.4254,1.4254,0,0,180);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#385169").s().p("AgIAMIAPgiIADABIgNAfQgDAGAAAHQgEgFACgGg");
	this.shape_213.setTransform(135.1476,82.4423,1.4254,1.4254,0,0,180);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#101518").s().p("AAJAGIgSgFIgPgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAmAIQAHAAACgDIAEgHQgBAHgCADQgEADgFAAIgFgBg");
	this.shape_214.setTransform(130.5315,79.5284,1.4254,1.4254,0,0,180);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B86D66").s().p("AgigDIgGgNIBRgHQgCAJgRAMQgLAHgQAKIgPAJQgHgLgHgQg");
	this.shape_215.setTransform(133.8723,67.0478,1.4254,1.4254,0,0,180);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D0924A").s().p("AAGAHQgDgHgDgDQgFgEgCABQgCABAEAFIAEAFQgTgGAFgKQABgFAEgBIADgBIAHAAQAGABACADQADAFAGAcQgHgFgEgHg");
	this.shape_216.setTransform(140.0987,66.3351,1.4254,1.4254,0,0,180);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F6C55C").s().p("AgxAVQgzgUAtgMIBWgbIAUACQAUAEAEAIQAFAMgFALQABABgBAEQgEAGgPAFIhQAYQgMgNgNgFg");
	this.shape_217.setTransform(133.202,64.981,1.4254,1.4254,0,0,180);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#161B1C").s().p("AACAAQADgFAHgIQAHgJABABIAAAAIAHAEQAHAFABAIQACASgbACIgsAGQAigOACgIg");
	this.shape_218.setTransform(125.2387,65.2304,1.4254,1.4254,0,0,180);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#34465E","#101518"],[0,1],-10,0,10.1,0).s().p("AgqAhQgRgBgFgHQgEgEgSgFQgPgEABgFQABgHALgHQAKgHAIgBICAgRIANABQANACADAFQACADAAAFQgBAEADACQAKAHAAAHIAAAJQgBAFgEACQgFACgmAEIhQAHIgHAAIgIAAg");
	this.shape_219.setTransform(132.5209,65.854,1.4254,1.4254,0,0,180);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#99816E").s().p("AgYAeQgZgCgegHIgagFIAugVQAwgXAIgBQAFgBAaAGQAaAHAIAAQAQABAcgBIhAAqQgTAGgZAAIgWgBg");
	this.shape_220.setTransform(153.8638,102.1082,1.4254,1.4254,0,0,180);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F6C55C").s().p("AgXBtQAHg4ALg2QAFgjAKgnIAIghIAGgBIgJAkIgOBFQgHApgKBJg");
	this.shape_221.setTransform(139.3602,86.0415,1.4254,1.4254,0,0,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#101518").s().p("AAXBsIgUgDQALgXgBgNQgBgIgKgFQgGgDgRgDIgmgFIAGgYQABgGAIgEIAUgHQAbgJAGgYQADgIgIgJQgKgMgCgMQgDgPABgMIACgKQAFAWAMAOQAGAHAFACQAUACALAfQAKAagBAdQgCA3gKAUQgEAHgPAAIgGAAg");
	this.shape_222.setTransform(127.0948,88.0175,1.4254,1.4254,0,0,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#487773","#34465E","#101518"],[0,0.459,1],-7.9,1.3,3.9,-5.3).s().p("AAmCAQg0gEgogFQhMgKADgVIAEgtQAFgpAOgWQAagsAOgwQACgIAHgBQANgBAJgEQAWgJCBAOIAGAGQAGALgDAYQgCARABAgQAAAhgDAhQgIBegQACIgGAAQgPAAgogDg");
	this.shape_223.setTransform(136.2865,84.4997,1.4254,1.4254,0,0,180);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#679B94").s().p("AgxA0QA1hKAFgKQAIgQAGgDQACgBAMAAQAMAAABACQABADgEACIgLgBQgLAAgBADQgQAagWAbQgOASgRAZg");
	this.shape_224.setTransform(151.7827,74.555,1.4254,1.4254,0,0,180);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#101518").s().p("AADBDQgFAAAIgkQgJAAgSgGIgRgFIAOgFQAQgFAEABQAHACgEgbIAFAIQAGAJABAIIAGgQQACgFAHgKQADgEgCgJQgCgJAFgOIAGgKIAAASQgBALAEASQgcBWgIAAIAAAAg");
	this.shape_225.setTransform(153.4005,80.0193,1.4254,1.4254,0,0,180);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#101518").s().p("AgRAZQgPgHgEgPIgBgNQADgQAYgEQAVgDAPAHQATAIgMAkQgDALgPACIgHABQgLAAgOgHg");
	this.shape_226.setTransform(159.2344,89.0278,1.4254,1.4254,0,0,180);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#34465E","#101518"],[0,1],-7.2,0,7.2,0).s().p("AgwBdQgGgBgGgJQgIgKgDgOQgCgKAOgLQARgOADgHQAEgIAjguQAiguACgHQACgIAQAAQAHAAAHABQAKAGgOAhIgaA2QgIAQgFAhQgGAigCAFQgGALgLADIgLABQgOAAgXgGg");
	this.shape_227.setTransform(154.1727,81.2353,1.4254,1.4254,0,0,180);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#600E10").s().p("AgQBCQgEgCAJiCIAZACIABAAIgDANQgCAOAFAGQAFAIgDAQQgDAOgGAHQgEAGABAYIADAXIgIAAQgMAAgEgBg");
	this.shape_228.setTransform(118.2407,83.9105,1.4254,1.4254,0,0,180);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#C03B3A","#801517"],[0,1],0.1,-5.1,0,4.8).s().p("AgbBAIAJiCIAlAEIAFAEQAEAFAAAIQAAANgIBbQgCAIgIAAg");
	this.shape_229.setTransform(117.195,83.9033,1.4254,1.4254,0,0,180);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111416").s().p("AgIBFIAKiKIAHABIgKCKg");
	this.shape_230.setTransform(118.7629,100.6163,1.4254,1.4254,0,0,180);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#171A1C").s().p("AgMgKIABgCIAYAUIAAAGg");
	this.shape_231.setTransform(105.5066,26.3522,1.4254,1.4254,0,0,180);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#9E6565").s().p("AAMAbQgDgEgDABQgDADgDABQgFADgKgDIgIgDIgCgGQgCgHABgCQABgDAZgcIAbgeIAAAnQgCAXgCAMQgEAUgEAJQACgSgFgHg");
	this.shape_232.setTransform(92.1362,37.7912,1.4254,1.4254,0,0,180);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E2ACA2").s().p("AgfA6IgbgCQAYgMgCgIIgFgYIAyhFIAJA+QACAWAUAIQAJAEAJgBQgTAIgaAIQgNAEgWAAIgJAAg");
	this.shape_233.setTransform(89.8626,38.0169,1.4254,1.4254,0,0,180);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#AF6F3D").s().p("AgYAcQgXgFgIgGIgPgMIAWgIQAZgKAPAAQAMAAAGAHQAHAFACgBQAJgBAagbIgCANQgGANgQAFQgRAHAIAGQAGAGAPgBQARAAAMgFQgDADgGAEQgNAHgXACIgRABQgQAAgRgDg");
	this.shape_234.setTransform(84.161,85.8514,1.4254,1.4254,0,0,180);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#AF6F3D").s().p("AgZCNQAJhpAChJQAAgegEgQQANgPAFgNQAGgNADgVIABARQABATgCALQgJAeAJATQAFANACAiQACAlgFAfQgEAbAIAcQAFAOAFAJQgNACgKAAQgRAAgMgFg");
	this.shape_235.setTransform(97.1323,71.568,1.4254,1.4254,0,0,180);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#FEC97C","#F4AC5A"],[0,1],9.1,1.6,-4,-4).s().p("AhiCnQgCgCAGgeQAHgsgBguQgChNgXhlQgBgGADgEQADgFAGgBQAIAAALgDIAzgIQA2gIAXgBQAPgBAFADQAGAEADAQQABAKADBPQADBMADAQQAHAiAWA/QADAKgUAJQgVAJgoAFQgkAGgwAAQgsAAgFgDg");
	this.shape_236.setTransform(86.2922,67.7803,1.4254,1.4254,0,0,180);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],1.2,-0.1,0.2,-1.5).s().p("AglAAQgFgIADgFQACgEAMgJQAOgKALAFIAOATQAHAJAVAPIgWAVQgygXgHgKg");
	this.shape_237.setTransform(69.4881,69.9064,1.4254,1.4254,0,0,180);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#9E6565","#E2ACA2"],[0,1],-1.3,-0.3,1.2,0.5).s().p("AgIAhQgEgCgHgVIgGgUIAIgLQALgMAQAAIAPAqQACAEgDAFQgCAFgFAEQgFADgHACIgIACIgFgBg");
	this.shape_238.setTransform(73.015,64.6348,1.4254,1.4254,0,0,180);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#171A1C").s().p("AgSANQgCgEADgFIAEgEIAAAAIAGgHQAJgJASABQABAMgLAFIgTAMIgGACQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_239.setTransform(72.9943,62.018,1.4254,1.4254,0,0,180);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#39322A").s().p("AAzAPQgNgGgwAGQgUADgUgDIgQgCIgBAAIgFgXQCIgTAGAIQAGAIgEAmg");
	this.shape_240.setTransform(89.9624,92.3225,1.4254,1.4254,0,0,180);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#39322A").s().p("AABBBIgQiBIAFAEIAEAiIAIgJQAGgGAFgTIADAAIgHATQgGALgJAHIAKBYg");
	this.shape_241.setTransform(95.4574,101.5072,1.4254,1.4254,0,0,180);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#171A1C").s().p("AgPAKIACgRIAEgFQAEgFADgBIAIgGIgFATQgBAGAQAGQACAAgeASIgBAAQgDAAABgPg");
	this.shape_242.setTransform(74.2761,57.1635,1.4254,1.4254,0,0,180);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#6B665F","#C1986A"],[0,1],-7.2,0,7.3,0).s().p("AAWBlQgcgCgZgHQgIgCAFgJQAGgKgIgDQgIgDABgFQACgHgEgEQgFgFAAgJQAAgRgDgOIgThZIBIgOQBGgIACAZQABAcgCBCQgCA8gDAUQgBAKgZAAIgSgBg");
	this.shape_243.setTransform(90.072,102.4672,1.4254,1.4254,0,0,180);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#39322A").s().p("AAABlQhFhxgMgeQgHgVASgOQAPgLAogMQgGAQgTALQgMAGAMAOQAGAHAIAFQA3gBgMAFIgUALQgOAFgNgCQgOgDAPASQAJALAeAgQAUAUAdAJQAOADALAAQgkAZgUAGQgMACgKABg");
	this.shape_244.setTransform(71.1687,102.6119,1.4254,1.4254,0,0,180);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-1.6,-0.4,2,0).s().p("AgYBGQgFAAAEhGIAFhFIAKAEQAKAGACAIQACAGAGAZQAFAYAEAJIAHAQQADAEgDADQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQABACgEAEQgGAHgSAJQgRAIgGAAIgBAAg");
	this.shape_245.setTransform(74.0958,53.9002,1.4254,1.4254,0,0,180);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#58666E").s().p("ACVAyQAAgLgFgMQgKgagYgLQgYgMhUgMQhAgJglgCQgSgBgSADIgPADIABgCQAEgDAUgDQApgEBdAPQAwAJAWAFQAiAIAPAKQAOAIAGAYQADAMAAALg");
	this.shape_246.setTransform(42.4319,84.2588,1.4254,1.4254,0,0,180);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#6B665F","#C1986A"],[0,1],-10.9,0,11,0).s().p("Ahpg0QgOgPArgUQArgVAZAJIBjBuQAMAPgCADIAFABQAFAAgCAFQgBAHgLAOQgMAOgIAFQgHAEgkAMIgiALQhXiGgSgUg");
	this.shape_247.setTransform(69.6508,101.3297,1.4254,1.4254,0,0,180);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#222528").s().p("ACoCzQABg9ANheQANhYgBgPQgCgjghgQQgpgThigMQhkgLgMASQgUAhhTC9IgUgCQAXg6Abg6QA1h2ASgGQAWgHBKAGQBNAGAzAOQA3APAQALQASAMgDAWIgRB1QgOBpgBA0g");
	this.shape_248.setTransform(50.4543,102.2364,1.4254,1.4254,0,0,180);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#58666E").s().p("AgyAFQgBAAAAAAQAAgBABAAQAAgBABAAQABgBABgBQAHgDAEgBQAHgCANACQASACAyACIAAADQg+gEgNAAQgIAAgJACIgHADIgCAAIgBAAg");
	this.shape_249.setTransform(107.422,74.9589,1.4254,1.4254,0,0,180);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#9E6565").s().p("AgvgEIA0gfIARATQASAUADAHQAEALABAHIhSAHg");
	this.shape_250.setTransform(56.401,112.5542,1.4254,1.4254,0,0,180);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#222528").s().p("AgaB0IBhjJQAHgQgDgFQgDgGgRABQgQABhegHQgSgBgPAGIgLAHIAEgRQARgJAlAEQA6AGAYgBQAsgBAMAIQAFADgDAEQgVAfgxBqIgtBkg");
	this.shape_251.setTransform(101.3687,92.3147,1.4254,1.4254,0,0,180);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("ABiCbIgTkiQAdAFAhAKIAVETgAiRCFIgQiOIAbhCQAghDAegMIApEfgAAKB+IgfkUQAhgEAcALIAAENg");
	this.shape_252.setTransform(50.8775,99.7255,1.4254,1.4254,0,0,180);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#5D686E").s().p("AgWAjIAphHIAEABIgoBIg");
	this.shape_253.setTransform(37.0154,112.6255,1.4254,1.4254,0,0,180);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgVB1IgLixIAGghQAOgfAsAKIgKDng");
	this.shape_254.setTransform(112.0278,91.8745,1.4254,1.4254,0,0,180);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#222528").s().p("Ah8AnIAshgIDFAmIAIBNg");
	this.shape_255.setTransform(50.343,110.3804,1.4254,1.4254,0,0,180);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#222528").s().p("AgmAmQgQgQAAgWQAAgWAQgPQAQgQAWAAQAXAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgXAAQgWAAgQgQgAghgfQgNANAAASQAAATAOAOQANANATAAQATAAAOgNQAOgOAAgTQAAgMgIgNQgHgLgNgFQgIABgFARIgCARIgEgBQADgLAAgMQAAgJgEgGQgTABgNANg");
	this.shape_256.setTransform(46.4944,106.2467,1.4254,1.4254,0,0,180);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3B3042").s().p("AgmAlIAOhEIAFgHQAHgHAKABQAPACAYAHIACAPQAAAXgMAqg");
	this.shape_257.setTransform(-36.1441,131.3964,1.4254,1.4254,0,0,180);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#161319").s().p("Ai0ABIAehTIAJgIQALgIAPACIEhA+IAEADQAEAGgBAMQgCATgUBbg");
	this.shape_258.setTransform(-15.668,129.7361,1.4254,1.4254,0,0,180);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#00263A","#3C7792"],[0,0.969],-0.6,-0.4,0.4,0.3).s().p("AgcAMQAKgHALgFIAqgRQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgPAGQgSAIgJAFQgRAKAAADIgLACIAHgGg");
	this.shape_259.setTransform(217.1166,92.4558,1.4254,1.4254,0,0,180);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#060707").s().p("ABVAAQAAgFAFAAQAFAAAAAFQAAAGgFAAQgFAAAAgGgAheAAQAAgEAFAAQAFAAAAAEQAAAGgFAAQgFAAAAgGg");
	this.shape_260.setTransform(223.4597,104.8213,1.4254,1.4254,0,0,180);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#00263A","#3C7792","#141116"],[0,0.969,1],5.6,0,-5.5,0).s().p("AgRABQAqgTAfgCIgCAKQgGAKgRAFQgRAGgRACIgaADIgaAFQAQgKAWgKg");
	this.shape_261.setTransform(232.2616,98.1575,1.4254,1.4254,0,0,180);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#00263A","#3C7792","#141116"],[0,0.969,1],13.2,0,-13.1,0).s().p("AB9AdQABgLgDgMQgGgXgTgGQhXgDgyAGQgzAHgpAOQAAgCAGgGQAWgLA4gEQCCgLAWAKQAOAGAGALQAFAKACAZg");
	this.shape_262.setTransform(223.8873,103.4841,1.4254,1.4254,0,0,180);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#00263A","#141116"],[0,1],14,0,-14,0).s().p("Ah4AuQgFgCgFgEQgLgJACgNQACgOA3gWQA1gWAYgBQAOAAAqgDQAogBAWALQAWAKAEAgQADAQgDAOQgBAHgFABg");
	this.shape_263.setTransform(222.6712,101.1136,1.4254,1.4254,0,0,180);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#00263A","#141116"],[0,1],-0.6,-0.5,0.6,0.4).s().p("AglAPQAFgHAXgLQAQgIAQgFQAJgEADAAQACAAACAEQADAHgLAAQgIgBgEAHQgCADgIADQgJAFAAAKQgUADgJAAQgNAAAFgGg");
	this.shape_264.setTransform(216.8914,92.7018,1.4254,1.4254,0,0,180);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#00263A","#141116"],[0,1],2.5,-5.9,1.2,0.8).s().p("ABTBGQgWgcgxgFQhHgHgSgIQgdgMAFgkQAFgiAdgVIAcgOIAMADIgRAGQgTAJgOAUQgTAcAIAYQAIAbAsgCQAwgCAtAXQAuAXAAAbIgJAFQAAgMgLgOg");
	this.shape_265.setTransform(229.2486,93.026,1.4254,1.4254,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.instance_3},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.instance_2},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_1},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.instance},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-49.9,14.5,293.9,193.9), null);


(lib.ee6smokerolling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bits2
	this.instance = new lib.ee6bitscopy("synched",0);
	this.instance.setTransform(-6.25,6.05,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},20).wait(10));

	// bits
	this.instance_1 = new lib.ee6bits("synched",0);
	this.instance_1.setTransform(-31.25,-3.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

	// smoke
	this.instance_2 = new lib.ee6smcy("synched",0);
	this.instance_2.setTransform(-0.1,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.9,-234.9,270.8,346.5);


(lib.ee6smokerolling2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// anim2
	this.instance = new lib.ee6linecycle("synched",0);
	this.instance.setTransform(-148.25,209,1,0.3802,0,7.4313,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:0,x:-156.25,y:126,startPosition:3},2,cjs.Ease.get(1)).wait(165).to({startPosition:0},0).to({_off:true},1).wait(32));

	// anim
	this.instance_1 = new lib.ee6presmoke("synched",0);
	this.instance_1.setTransform(0.1,56.75);

	this.instance_2 = new lib.ee6smokerolling("synched",0);
	this.instance_2.setTransform(-167.15,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2,p:{startPosition:0}}]},8).to({state:[{t:this.instance_2,p:{startPosition:29}}]},157).to({state:[]},1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.1,-232.5,270.8,498);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6DDCA").s().p("AgxA8QgcgmghiDQAKgLApAVQAoAVApAlQBuBegZA3QgbAGgXAAQhFAAglg2g");
	this.shape_10.setTransform(-81.3283,68.8401,0.123,0.123);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ABA08B").s().p("AgxAVQgrhSgoiGQAmAnBHBUQBDBPAtAsQANANAXAMQAOAPgKAoQgEALgEAYQgGAVgTAJQhUg5g9h2g");
	this.shape_11.setTransform(-78.9124,67.4818,0.123,0.123);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#988C79").s().p("AAaCRQhhgGgvAEQgEgOgTgxQgOgngHgdQgHg4AdgoQAagkAxgPQAvgOAyAJQA0AKAlAhQAHAvANBBQAPBNAJAdQgxAYhRAAIgJAAg");
	this.shape_12.setTransform(-83.1127,64.1169,0.123,0.123);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2A791").s().p("AgrDZQhqhlhFihQgRgogOg8IgYhgQAPgwB0gCQBsgCAsAeQAUA+AzBfQA0BfAqAyQARAVAhAaQAgAYAJAMQAdAohNBNQg0A1g8AAQhGAAhPhLg");
	this.shape_13.setTransform(-81.2103,68.8552,0.123,0.123);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3935").s().p("AisFmQgPhEgDgvQgQj2A0jRQBMk1DHA8QBWAagPA/QgFASgSAjQgSAjgEAPQhCEIA4FwIgYASQhhghg1AVQgwATg9BUIgahyg");
	this.shape_14.setTransform(-83.3088,58.4502,0.123,0.123);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3733").s().p("AhwETQg/jWgGjcQgHjhA2jVQAhgdBKCDQAqBMAjBUQBODAAmEXQAqE9g7CWIAAAAQiqh3hbjRg");
	this.shape_15.setTransform(-79.1579,61.6729,0.123,0.123);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3733").s().p("AggBHQgTgxgGhWQgFghABgTQABgkAaABQAVAAAeCKQAiCVAMARQhBgFgehNg");
	this.shape_16.setTransform(-16.2989,51.6287,0.123,0.123);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7E1CE").s().p("AAACuQhCgBgohOQgcg3AFhaQAHhnA5gVQAkBKA2BZQBFBvAkAfQhSAsgvAAIgBgBg");
	this.shape_17.setTransform(-19.0105,65.8654,0.123,0.123);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#877C6B").s().p("AhmABQgYhHgPg8IDZAAQAMAuA2CVIjDBCIgxiCg");
	this.shape_18.setTransform(-22.6472,60.4942,0.123,0.123);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B4A892").s().p("AhWCeQhziohej7QgKgWAYgXQAVgUAogNQAngMAhACQAlACAMAUQAOAmAbA9QAZA3AVArQhOFqDdhQIA1AXQAMAKAhANQAmAPAMAHQAwAehCA5QgyArg2AAQhxAAiCjAg");
	this.shape_19.setTransform(-19.6721,65.3317,0.123,0.123);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A99D88").s().p("AiSA1Qhijvgok6QAGABATgCQAQgBADACQABABAFAdQAFAeAKALQBFBVAWBOIATBNQAOA1ATAyQBrEdB5g4QAhgPAghGQAbg7AnACQAIBLgfDJQgiDfgpACQjNiKh+k3g");
	this.shape_20.setTransform(-18.2042,61.5546,0.123,0.123);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D3833").s().p("AgOLpQgogBgfgMQghgOgHgXQhLk1gOlfQgRmwBljTQA+iBBtgGQBugGBCB8Qi8DFgNGxQgKFLBWFnQgKAyhcAAIgEAAg");
	this.shape_21.setTransform(-22.8407,50.3354,0.123,0.123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C3733").s().p("AAUKyQguhVgjhnQgMglgchfQgehqgCgSQgCgQAGgbIAKgpQAFgtg4gIIg3BXQgLBUghhUQgok7ARjNQAYksCNi3QAdAABnC6QBOCLAoBZQACA9gMAHQgJAFgXgbQgegmgRgSQgegggXgCQhvgKgdDVQgIA8gFBwQgEBkgFAbICNjEIB3hXQACBsACAbQAGBjARAXQAGAIAoAJQArAKAPALQAoAdANCtQAPDDATAoQAHAwgngTQgmgTgMgmQgLgmAFgrQAFgoATgmQghgFgcAgQgnAqgKAFQgHAEgSgIQgRgHgBADQgTAfBZBHIBCAzQAhAaADAKQALAggqBcQgpBcgbAIQgHACgGAAQg1AAhDh2g");
	this.shape_22.setTransform(-18.386,52.9793,0.123,0.123);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F0E0D").s().p("AAOM1QiIhGiEk0Qh0kMgTjBQgJhZADh3QADiTAXh7QA9lOCsgWQDOgbCqGOQA/CTAsCxQAmCYAIBiQAHBmgHB+QgJCmgiB5QhDD3iUAAQg3AAhCgig");
	this.shape_23.setTransform(-81.3582,62.45,0.123,0.123);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D0C0B").s().p("AA3R0QiQhkiTlAQh2j/g7jyQhEkXgDldQgDmQBgjYQBJikB0gFQBkgFBxBuQBmBjBKCUQBJCTADBrIgngIIAHALIAFALQAHgOAUAAQBvD1A/FbQBAFegUEMQgSD7hUClQhMCWhtAAQhAAAhLg0gAiBAEQA1CDAGAEQAHAEgqh6IATgRQgSgNgBgTgAhvn1QgLCZAbEdQAJgQATgVQgSiBAPiZQATjDBCg6QBYhMBSBIQALAKAJALQhcighdiZQhwCugTEAg");
	this.shape_24.setTransform(-20.1019,55.3378,0.123,0.123);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A262A").s().p("AFtDJQgkgIhGgbQhJgcghgJIpNlRQBnAcB4A8QA9AeCVBWQCEBLBQAkQB4A3BrAWQAEAZgdAAQgKAAgkgIg");
	this.shape_25.setTransform(19.9423,-13.7799,0.123,0.123);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1F29").s().p("AEGBUQiNgKiZgXQjLghhKglQg9gggLglQBZAOEjBHQDrA5CUAJQAAAZgyACIhGgGg");
	this.shape_26.setTransform(13.8947,-13.8999,0.123,0.123);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#332E2B").s().p("Ah9A4QgegeAogfQAjgdBDgOQBDgPArANQAzAPgMAvQgcAAh4AaQhVATgVAAQgFAAgCgBg");
	this.shape_27.setTransform(68.2364,30.5212,0.123,0.123);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8C7B64").s().p("ACID/QgmgRgPgPQgjgkAShxIgsCYQgTiBhGiHQgyhghkiMQBeguA+BRQALAOAnBAQAdAyAZAXQAPAOAxAcQAzAfARAOQA/AziBAYIBtDaIhSglg");
	this.shape_28.setTransform(-36.7576,22.2415,0.123,0.123);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36211A").s().p("AgIBLIgWhWQARgxAFgRQAHAdAdBMQAMAyghAAQgHAAgIgDg");
	this.shape_29.setTransform(-37.9817,-47.6375,0.123,0.123);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#351616").s().p("AgTgCQg2gwgLgkQA/ACBAA+QBEBBgrAtQgWgjhBg3g");
	this.shape_30.setTransform(-37.5938,-43.7572,0.123,0.123);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#913326").s().p("ABSBCIg+hQQhHhRh8AJQAEgPAPgLIAZgSQASgEAkgKQAggJAXABQCCBHAWBnIgHAHQgGAHAEAIQAHANAjAjQAaAhgaAcQgogigpg1g");
	this.shape_31.setTransform(-38.351,-42.9549,0.123,0.123);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#71675A").s().p("AA4BaIghglQgngogggjQg7hDAJgIQAkgfBaBoQAiAnAWAlQAWAngJAIQgFAGgIAAQgMAAgQgPg");
	this.shape_32.setTransform(77.581,20.5841,0.123,0.123);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A2724").s().p("AglCNQgzg+gqheQg5h8A7gLIAsBCIgKhCQALAAAWAMQAWAMAJAAQAEAAANgnQAPggAWAZQAMAPgWAnQgXApgfgHQgFAVAYAEQATADAPgHQALgFANgZIAZgxQAlg/A4AMQAKAKgTBkQgOBJgOAzQggB2gQAUQgNARgRAAQggAAgtg3g");
	this.shape_33.setTransform(28.5036,18.0162,0.123,0.123);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2D2A26").s().p("ABXFcQg0gUhLgvQhVg0gagjQgXgfhAisQhCiwAKgLQAVgaAQAbQAIAOAJAcQAUAgBECKQA4BzAgAoQAjAtASAGQAPAFgBgYQgDg7g2g6IAjAAQATgBAMgNQAmgpAhioQAjiwAMgRQAQgXA8AAIBYADQARAPhWDFQhhDcgDATQgHAnADBGQADBLgEAeIgEAeQgDAHgIAAQgHAAgLgFg");
	this.shape_34.setTransform(29.4875,19.9337,0.123,0.123);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#554F46").s().p("AhLhVQACgOAZAAQAWAAANAIQAJAFAoBRQAqBTgCAWg");
	this.shape_35.setTransform(45.5983,15.4714,0.123,0.123);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#413D3B").s().p("AhHghQBGgRCPgNIjoB/QhvhCCCgfg");
	this.shape_36.setTransform(42.3731,15.0684,0.123,0.123);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#403B37").s().p("AiXA6QgPgwBvhBQAsgbAogNQAqgOAOAIQAHAEAhBEQAiBFgGAIQhkAmg/ANQggAGgaAAQhEAAgPgvg");
	this.shape_37.setTransform(43.5804,16.1088,0.123,0.123);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A19682").s().p("AgKNzQjKhziDmMQg2ihgciuQgbijADh9QAGjcBFi+QBfkECsgKQDtgOCqGxQA/CgAqDBQAkCjAGBzQAHB7gMCOQgQCzgqCAQhRDxidAAQhHAAhVgxg");
	this.shape_38.setTransform(-81.4752,62.3734,0.123,0.123);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#756A5E").s().p("AgJAtQg7hngSgPQAHgDgCgpQgBgkAcAPQAeAPArBDQAwBKAUARQgCAUABAmQgEAhgbARQgKAAg2hig");
	this.shape_39.setTransform(-6.3927,33.1963,0.123,0.123);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4B453E").s().p("AhPgJQgLmeB8j9IAvBiQhPD+ADE6QADD9A7E+IghAyIgWBCQhTl2gIk4g");
	this.shape_40.setTransform(-25.6211,50.5521,0.123,0.123);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AB9F8B").s().p("AhaR9QiJiJhwkMQhXjTg4j4QgJg7AfgGIAyATQBVEVBCCZQBoDwCGCRQBpByBigiQBUgeBAiCQA5h0ATiSQASiRgehSQAajkg9kNQgoithwk3QAPgTABgZQABgSgIgdQgQhYhCh8QhGiFhUhbQhkhqhYgMQhogNhJB5Ig1AJQgnAjARhPQCGkPC/BZQCSBFCPD8QBjCvBOD6QBMD0AoELQBYJSh0F7QhEDeiDA3QglAQgnAAQhuAAh8h8g");
	this.shape_41.setTransform(-19.5273,55.3699,0.123,0.123);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#443D37").s().p("AhWhXICtCDIgaASQgZATgOAHg");
	this.shape_42.setTransform(-73.2963,44.9104,0.123,0.123);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#25170E").s().p("AgFArQgVgGgLgWQgKgTADgTQAEgTARgCQATgCAcAZQACAHAIAOQAKAPACAHQgHAHgKAHQgMAJgNAAQgEAAgFgCg");
	this.shape_43.setTransform(6.7464,-73.0455,0.123,0.123);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#303630").s().p("ABCBOQgWgPg3g/Qgzg7gjgRQAkgdBDBIQAkAlA4BIQgCAEgFADQgDACgEAAQgHAAgLgHg");
	this.shape_44.setTransform(5.0292,-75.3217,0.123,0.123);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E211A").s().p("Ag5gGQiihsgfgbQBDAEBGAkQAsAYBLA2QBRA5AlAUQBDAmA8AGIiDAsQgxhAiAhUg");
	this.shape_45.setTransform(-0.3449,-72.3718,0.123,0.123);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D231D").s().p("ACODaQg6iRg9hJQglgtiViBIgLgLIgLgLIAhgsIFSFdQgDAVACAsQACAtgCAVIgCABQgHAAgigXg");
	this.shape_46.setTransform(-17.27,-75.4593,0.123,0.123);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7E0E6").s().p("AgrDfIArnKQAlgFAGAMQACAFgCArQgEBDgPB0IgYC7QgEAegJAMQgEAGgGAAQgJAAgLgPg");
	this.shape_47.setTransform(-5.3083,-63.4273,0.123,0.123);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#76664E").s().p("ACnBJQhAgPgagBQjMgFhbAGIAAAAQAGgNAlgJIBMgPQBngYgEhFQBDACBAAUQBYAcAAAvQAAAwgsAAIgIAAg");
	this.shape_48.setTransform(-38.8986,31.5681,0.123,0.123);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B2825").s().p("AlBDHQgpgBADgZQBIgeBng8QA8gjB7hMQDniNCCgdQgeBDAEA2QABASAZBlQgvgBg/APQhIAVgkAIQgnAKimAwQiCAmhGAMQgkAGgTAAIgDAAg");
	this.shape_49.setTransform(29.4773,-36.7464,0.123,0.123);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#171410").s().p("ABaBbQglgXgTgJQgmgSgzghQg4gmgdgTQACgCgCgQQgCgRADgHIAggCID5CjQgPAYgVAAQgIAAgIgDg");
	this.shape_50.setTransform(-38.78,42.3011,0.123,0.123);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DACFB5").s().p("AhkC6IgegVQhPhyA/hgQAVgfAxgxQA7g6ARgWQAngNA+ApQA9AoANApQgwARggApQgWAdgaA4QgeBEgOAWQgcAwgnAYQgUgMgQgLg");
	this.shape_51.setTransform(-40.5179,44.2218,0.123,0.123);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B1817").s().p("AAHAiQgzgEgIgPQgEgZgLgWQAKABAXgCQAXgBAJACQA7AOAKAbQAJAZgyAAIgTAAg");
	this.shape_52.setTransform(8.962,47.4672,0.123,0.123);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7EABC5").s().p("AhMhLQALAIBDApQBBAoAIATQAGANgMAOQgNAMgCAFg");
	this.shape_53.setTransform(-62.4019,17.637,0.123,0.123);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E7BA3").s().p("AETFDQmUhNjlgTQgMgBgOgHIgTgKQgPgEAEAuQhXgwhegsQgUgJghgHQgpgJgKgDQg2gSgKg7QALABAVAAIAhgBQAQgMhggkQg4gUg9gSICvAWQAEgDgPgbQgPgcAEgHQAEgEBxgxQBxgxAIgLQACgDgLgTQgLgSABAAQAzAABjgiQAugRCPg6QD8hnBFASQAlAKBjCRICDC/QAzA9DLCyQCnCVBGBxQi9gUmvhSg");
	this.shape_54.setTransform(17.5215,-14.8708,0.123,0.123);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#181614").s().p("ABzCZQgagKgngqQgKgKg+hJQhkhzg7gKQgOhCBCAaQALAEAmAjIBLBFQBmBZAbgbQAYgXg7hBIgvgxQgYgagDgKQBcAnAtA/QA3BLgnBUQgMAYgIAJQgKALgMAAQgFAAgGgCg");
	this.shape_55.setTransform(-10.6052,29.0385,0.123,0.123);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1B1916").s().p("AADBiQgzgbgrgxQgtgzgFgrIDZBWQAGghgcgXQgjgVgQgNQgagTgGgIQgNgPAqACQApAOAnAtIA+BHQgCBNgqAUQgOAGgQAAQgcAAglgTg");
	this.shape_56.setTransform(-15.1229,30.4969,0.123,0.123);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1B1815").s().p("AgFAGIgLgQIAKgKIgDAEQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAIAKIAIAJQAKACgEgLIgEgKIgFgGIAQAMIAAADIgBANQgCAEgIAGQgGgFgGgKg");
	this.shape_57.setTransform(-11.8978,35.2575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#474038").s().p("ABfCMQgggLgOgJQgNgHhVgoQg8gbgmgjQgMg8BEgwQABhAAfgYIDNExQAHAMgIAXQgJAbAAAEQgNgfgcgPg");
	this.shape_58.setTransform(-9.4121,37.2538,0.123,0.123);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#534C43").s().p("AEcEQQg0ghhTiAIgugWQg4g9hohKQiAhcguAJQgFABgFAMQgGAOgIAGQgcAXhdgiQgIgPgGgbQgHgbgBgSQANAGAnAlQAbAZAjgGQBhgnAEgEQAGgIgDgzQgDgsAZgDQDFDbA5h8IAdgIIAAAAICXCIQBnBhASAyQAFAQgHANIgIAPIgaAQQABCFgwAAQgNAAgRgKg");
	this.shape_59.setTransform(-14.9142,33.0703,0.123,0.123);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0E100C").s().p("AhXAOQAggmA8ABQA/ABATAug");
	this.shape_60.setTransform(66.9617,32.7901,0.123,0.123);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0B0A0A").s().p("AhuBJQgOgSgDgkQgEglgDgEQgGgMgngQQgkgPgGgXQADAAALgMQAOgLAVAEQATAEAnAeQAjAbASgCQALgBAegRQAfgSAUgDQBLgLA6AVQBNAbgaBGIgWAAQgFASgnAXQgnAWgzANQgwANgjAAQg8AAgagkg");
	this.shape_61.setTransform(67.5406,30.4191,0.123,0.123);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#201111").s().p("AjPEyIBbhUQAvgtAmguQAfgoAmg7IBAhoIBpjpQg1E2h5CUQgrA1hBAvQhKA1gyAAIgIAAg");
	this.shape_62.setTransform(-26.9477,-43.4876,0.123,0.123);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D779D").s().p("AgTAQQovi6oLhbQARgWCIhHQCChEAsgOQAuAtBjA3QBnA5A5AJQArAHA+gVQBDgYAkACQBGADGODFQEpCRDHBuIDUB1QCZBXAjAoIhYAsQoNj5n9isg");
	this.shape_63.setTransform(2.8789,-7.7506,0.123,0.123);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#402226").s().p("AgKAUQgpgSgOghQAugGAhAPQAkAQAQAnIgMABQgiAAgegOg");
	this.shape_64.setTransform(11.0738,-44.9779,0.123,0.123);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#271713").s().p("AhQD2IAghfQAoh/AShhQAUhpAJiBQAYAEAJAVQAEANAGAcQARBrgnC7QgsDUhLAmQgJAFgFAAQgWAAAPg+g");
	this.shape_65.setTransform(4.691,-49.6443,0.123,0.123);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0E0C0B").s().p("ABEE8QhHgXgfhVQgahogYgyQgUgsgig6Ig7hlQg8hlgbgzQB1g6A3AVQAYAJAjAdIBKBAICCBoQBMA9A1AvQgPBAAJBgQALB5AAANQgDA6gqANQgNAEgTAAQgzAAhZgdg");
	this.shape_66.setTransform(-36.7421,22.305,0.123,0.123);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D49749").s().p("AiWB/IAuhTQA4hkgIhPIAWgWQAeAjgSBJQgKAogYBFQAiALAPgjIAQg+QAdgMgHg1QACgJgCgXQgCgYACgKIAWALQAOAGAHAFQAEAwALBAQAOBRAOANQAGAFAoAAQAiALgOA9QhdhAhkAZQhUAVhcBTQAKgmAagwgAB5gsQgRhQgIgLQgCgCgIACQgJACgDgCQgCgjAHgWQAKgkAdAcQAKAJARBlQAOBZADAoQgagMgPhHg");
	this.shape_67.setTransform(-38.4751,-47.4579,0.123,0.123);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#211A1B").s().p("AjvDxQAVglAehzQAdhtAggzQARgaAagUQAjgbAGgHQAPAGAFANIACgpQAVgSAVghQAYgcAugQQBHgYAHANQACADAAAPQgBAOAFAJQAOBPAiCfQAZCLgIBmQgkgFg2goQg1gogqgEQg9gGghAQQgWAKgvAvQAZAbhFARQgPABgVAIIgfAMIgGABQgVAAAHgsgAAZAtQBxBFhHj3IAUgSQgbgBgQAtQAPBDglgCQAIA8gFAbgAg4AYQARgyAJg2QgXBEgDAkg");
	this.shape_68.setTransform(-38.632,-47.2611,0.123,0.123);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#89857F").s().p("AjDAIIgBAAQBPgcCNgJQCzgLgHBGIkEAAIhIACIgBAAQgrAAgPgYg");
	this.shape_69.setTransform(-20.6339,-34.1809,0.123,0.123);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3A3B38").s().p("AgtBkQgEgEgJhMQgIhLACgGQAFgYAsgLQApgKAOALQAHAGAMBaQALBcgHAHQgLgCgyADIgdABQgRAAgBgCg");
	this.shape_70.setTransform(-34.8417,-25.6407,0.123,0.123);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5C5549").s().p("AhhBBIAAiCIDDAAQgCBag1AbQgdAOhDAAIgsgBg");
	this.shape_71.setTransform(-18.6205,-30.5835,0.123,0.123);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737169").s().p("AjeCjQgggeA0hKQAwhFBZhCQBehFBPgRQBbgUAkA+QhTAKhGAzQgwAjhFBPQgPARgRAfQgQAdgJAKQgXAag4AAQgXAAgcgFg");
	this.shape_72.setTransform(-32.934,-30.7184,0.123,0.123);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3D3832").s().p("AhBDEQgGgIAChBIAEhxQgCg6gOAAQgSABgqBaIhMiNIBXggIhCgWQABgPAPgNQALgJARgHQBegHAlAdIAAAAIDvA3QgUAWggAQQgVAKgoANQgeAKglADQgjAEgIADQghANgGBmQgBAcAUA6QAHAjgfAAQgHAAgJgCg");
	this.shape_73.setTransform(-21.1675,-31.6656,0.123,0.123);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5F5A53").s().p("ApEEOQgDgMgEg0QgEgrgPgeQgNgagbgbQgdgdgFgJQgZgoBIhPQA4g+C/hGQC8hFBSAIQB4ALA9BRQAXAeAaA3IAwBlQg+AOgkgNQgdgJgUghQgVgrgOgXQgYgqghgZQgHAwAYA3QAOAgAiA8QgUgFgrANQgsANgLgCQgUgFgthcQgshdgYgCQgugDAzBmIAnBKQASAmgHAGQgTgGg/ARQg8ARgJgHQgSgvgSgpQgkhRgngEQgDAsAhBDQAjBHAmALIQdh/QgBAIACARQAAAOgOAGQh6AzjAAOQjWAHhnANQoTBFghARQgJAFgDAPIgDAaQgDAXgXAAQgHAAgKgCg");
	this.shape_74.setTransform(-24.7742,-29.3445,0.123,0.123);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D24F36").s().p("AlSHdQiCgbiPApIgrgLQAPgxBGgsQBRg0AHgJQANgTAqhiIA4iFQAcgeBBgJQA7gJAWgmIATAHQAGgWAcAGQAdAFAGAZQAngVAmgCQgSgGgQgOQAMhbBvgHQBngHBRA6QAuhTg7gxQgRioAGhvQAXAqATAAQAPAAAUgcIApg5QAbgiAegLQAtBVB9CiQBlCVgJCAIhtjaQgLAjAUBTQAVBVgHAYQgDAMghAFQgjAEgIAMQgKAOABAnQACAogIAMQgQAeixB6QjSCRgRAOQg+AvgeAeQg3A1AFAtQiThRhogVgAAGgIQBQASBJByIAlgEQgahqh/hEQgCApgjAFg");
	this.shape_75.setTransform(-39.1678,-44.1602,0.123,0.123);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1F1614").s().p("AhlB/QgEg1gDgJQAYhtArg+QA3hRBfgJQhjBOgpBSQgwBdAPB1IgIALQgHAKgGACQgMgVgEgxg");
	this.shape_76.setTransform(-36.4869,-30.0498,0.123,0.123);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D1717").s().p("AiLAPQArg3ArgWQAWgMA4gOQA0gOAggEQAngFAUABQAqACgDAYImdDEQAxhLASgWg");
	this.shape_77.setTransform(-47.0984,-35.7232,0.123,0.123);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1D100F").s().p("AjNBMQAigmAqglQBfhSBPglQBogvBnAPIABAAIjLBcQgwAWhhBcQhWBShEARQgPgPA7hAg");
	this.shape_78.setTransform(-41.206,-31.959,0.123,0.123);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DD7759").s().p("AhKgiQCdhqA7AEQAaACAQAWQAIAKAFALIgsArQAHABAPAAQAPgBAHABQAMACAggFQAYABgDAXIjrAlIkgB+QAahBChhqg");
	this.shape_79.setTransform(-45.3528,-34.0253,0.123,0.123);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#413D2A").s().p("AgVBXIAVjZQAaA8gGBGQgDArgRBYg");
	this.shape_80.setTransform(46.272,-12.3187,0.123,0.123);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0D0B0C").s().p("AjLE6QgagIgPgTIgXgdQBeAXA7gGQBIgIBFg0QAZgTAWgjQAZgoAJgJQABgBAVAEQAUAEAHgMQAegvARikQAPiUgHhOIAAAAQA0A3AEA4QACAfgUBnQgqDQhhBuQhYBih3AAQgzAAg4gRg");
	this.shape_81.setTransform(-39.0944,63.767,0.123,0.123);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7C9280").s().p("AA7BKQgXgIgpgYQgsgZgWgIIAAgVQgRgvAggLQAfgLAoAZQAXAbAPAeQAJASAQAtIgTALg");
	this.shape_82.setTransform(16.2595,-2.2185,0.123,0.123);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BB8F38").s().p("AmThjQAngbBMANQAqAGBPAXQB3AbCoA5IEcBhIgWAVQl3iBmahYg");
	this.shape_83.setTransform(-4.3747,-8.6732,0.123,0.123);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0B0A0A").s().p("AKHDnQk/h8ifg/Iprj2QlUh/kzg/IgrgWQgDgPAKgEIAOgDQFbAZG3DCIAAAAQFsB+FICCQG2CvDgB8IBTAxQBEAug1AEQjAhekYhwg");
	this.shape_84.setTransform(4.4343,-4.5299,0.123,0.123);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D59E42").s().p("ATwJEQiNgMjog/QjIg2ilg/QhGhEAag/Ig5AIQlmjYkciTQlli4k9h1QhgAhg4ABQg4AAhegeQhEgVhCgvQhUg8AQgwQBEgXCWAfQAZAGDLA1QHBB1HkDKQGnCvHUD2IAAAAQA6AeDFBlQC0BeA1AoQBAAwgxAVQgcAMgvAAQgSAAgVgCg");
	this.shape_85.setTransform(10.5191,-6.0841,0.123,0.123);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0B0A0A").s().p("AgIAXQhAgGgjgGQAUg0A3AUIAsAVQAaAMAPAAQAKgBAKgRQALgWAFgEIATA0IgTANQgbgEhGgGg");
	this.shape_86.setTransform(-47.2442,50.955,0.123,0.123);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7DAAC6").s().p("AgZgNQk0kyASgTIDbCkQDHDKAfAjQB9CPA6CFQgOgalIlGg");
	this.shape_87.setTransform(33.7695,-4.9298,0.123,0.123);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0E1011").s().p("AK5HvQgegNhPhCQhdhOgVgOQhqhIiThfIj/ijIlFjWQjFiAiFhJQgogeABgQQACgRAwgQQJfBZJWBtIBdA4IAAgBQALABAhgBQAYAogDADQgCABgugFQiPgRlqhJQlDhBi2gOQhLgGgOABQhBABgJAZITbMnIATAhQAHARgNAAQgIAAgPgGg");
	this.shape_88.setTransform(20.9061,-6.5879,0.123,0.123);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#10090A").s().p("AmoDEQgDglADgDQAEgDAcAAQDaghBFgRQCGgjCFhRQAegSBjhRQBNhAA6gUQiRDCjoBpQjMBejYAAIg1gBg");
	this.shape_89.setTransform(-17.0094,-21.4462,0.123,0.123);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D2E36").s().p("ADECDQgIgHgWgOIgjgXQgEgCgSgYQgSgXgSgMQgwghimheQiHhOhIg8QAgARBNAlQBHAiAmAVIDABnQB+BGA0AsQAfAaAfAyIAvBNQhNgZhMhUg");
	this.shape_90.setTransform(-65.772,15.0869,0.123,0.123);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#131A1F").s().p("AgQANQiDjVhGhpIG0JjQhzhth4i4g");
	this.shape_91.setTransform(-57.9801,22.8757,0.123,0.123);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111718").s().p("AEODLIgwgZQkGiHiehiQg3gdgagVQgugmAZgnQAHAAAygQQArgNAJAHQACACADAnQAGArARAUQAdAjC/BsQDuCHAPAKQgFATgRAAQgIAAgKgEg");
	this.shape_92.setTransform(-49.9712,30.2323,0.123,0.123);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#82AFC8").s().p("AIEF0QnfiehFgVIgbAQIlYjpQAOgYAngBQAJAAA3AGQBQAIChAUQCNAPBkgCQAdgCgogfQibhymHh5Qm0h6idg2QgcgFgNgEQgXgHAEgUQBHAJCDAEQCSAEA3AFQDAARBQAJQCtATBaAUQCcAiGDEnQCjB7CEB2QCJB7AzBGQAqA7AXAyQgJAGgZAAQhmAAlrhvg");
	this.shape_93.setTransform(-62.4157,13.7847,0.123,0.123);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1B2C35").s().p("AhJB7QghglAQgzQARg0A7hBQBGhNApAfQgYAagQAqQgKAZgQAxQgCAGgXAkQgRAdgBAQIABAAQgSAlgTAAQgMAAgNgPg");
	this.shape_94.setTransform(-42.7787,-9.798,0.123,0.123);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0F181B").s().p("AkRDDQA6iVCmhvQCXhnCqgcQAGAjgMAHQgVAEgRAHIh3AvQhBAZg1AoIiHCFQhiBfgZAAQgEAAgCgCg");
	this.shape_95.setTransform(-41.7115,-12.8438,0.123,0.123);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#070C0F").s().p("ACZBnQgXgIgogjQgsglgXgLIiDguQhPgdgegrIArgBQAcgBAQACIAAAAQBXAHBkBCQAhAVCABlQgIAIgKAGQgJAFgMAAQgLAAgPgFg");
	this.shape_96.setTransform(-31.3804,-12.0767,0.123,0.123);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0B0F10").s().p("AjqGEQhChngsg9QgKgOgzg1Qg5g7gdgkQhoh/Atg8QATgaASAbQAJAOAKAaQCjDZBKBcQAJAMAFAWQAHAQAjgJQgQhKg/j1Qg0jHgTh5QBehqCygtQCigqCYAaIAAAAQA0AZgIASQgpgMhcAGQhbAFhhAUQjxAzgZBMQgGAWA8DHQA7DFARAOQARAOByAxQBtAwAhAIQBAAQAwAGQA6AHA5gGQAEASgZAMQgSAHgVACQhgAKiEg2IjVhoQAGAlgGBBQgJBZgBASQgCB6BiAeQB3AmCCgZQCRgcBBhfQAagmAti1QAeh6AYh7QARhaAHhAQAJhUgFhIQAbAFAJAYQAEALAEAjQAJBMgxENQgvEHghBQQgkBWhlA2QhZAxhmAHQgeADhjgMQhLgJguATQgUgqhPh5g");
	this.shape_97.setTransform(-31.8539,1.8581,0.123,0.123);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1C1915").s().p("AAVCzQgDgCgQgeQgUgogjhoQgjhmgIguQgFgdARgGQAPgFAMAMQAJAJAeB3QAcBxAfAUIALhYQAsALADBKQACBJgnARQgSAHgLAAQgIAAgEgDg");
	this.shape_98.setTransform(88.3655,25.831,0.123,0.123);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#141210").s().p("Ag6BCQgFgNghiUQASAFAwBiQAtBfAIgDQAWgJAFgaQAEgXgMgYIgeizQAIANASAQIASAPQAhBSAHBQQAKBwhDAFIgGAAQg6AAghhgg");
	this.shape_99.setTransform(80.5202,27.0177,0.123,0.123);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1B1915").s().p("AgeCgQgDgQABgqQABgqgDgTQgHgpgYhKQgZhQgHgjQA6AuAbBoQAPA/AIBxQBBgxgUhqQgGgcgSg9QgRg4gEgaQAgAQAXA1QAVAwAIA/QAIA+gKAwQgKA1gcAQQgiAUgVAAQgZAAgFgeg");
	this.shape_100.setTransform(82.1445,34.0832,0.123,0.123);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#13100D").s().p("AguB0QgSgtgWhVQgXhXgGgQQAhAVAeA2IArBaQAJAUATBAQAUAqAZg6QAUgsgqhvQg1h9gRgpQAiAdAqBJQAnBDAPAxQAPAxgBAeQAAAogZAhQggApgcAAQgpAAgkhag");
	this.shape_101.setTransform(84.7821,25.6733,0.123,0.123);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#171512").s().p("AgrCvQgri7gYjXQA2A3AbB3QANA4APCMQBWgLgIhPQgCgXgOgvQgOgygCgVQgHggABgQQAAgdAZADQAEA1AkB/QAWBzgyA3QglAogiAAIAAAAQgkAAgMg1g");
	this.shape_102.setTransform(86.5952,32.941,0.123,0.123);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#27231F").s().p("AgPBmIg5hYQhChsAThXQAPgRA0AbQA0AaAvAyQA1A5ARA5QAUBGgnA4QgFAHgZAOQgcAQgHAHQgPgkghgzg");
	this.shape_103.setTransform(77.5758,21.0926,0.123,0.123);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2C2823").s().p("ACkDCQg4gWg3gsQgJgIhRhMQhzhoh5gRQgzhFBXAAQAPgBA/AFQAuAEAPgFIhYgtQABgFALgIIAKgHQBhAHAiArQAmAxg8BMQA1gIBHAxIA3AoQAfAVATAGQA6ARgpg7Qg1hAADgCQBcAVAnBAQArBFguBSQgRAGgTAAQgfAAgmgPg");
	this.shape_104.setTransform(72.2138,15.7742,0.123,0.123);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0B0B0A").s().p("AkmADQAthoAZgzIABAAQgJAigOBCQgPA5gcAmQAMAJENg7QEbhAA5AGQAcADALAJQAPAMgVAUQgLALlQBBQlXBFgzAdQAog5Aqhdg");
	this.shape_105.setTransform(40.4359,37.1184,0.123,0.123);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0C0C0B").s().p("AjBFMQgEhWgNg9IBDqEQAtAABLgMQA9gKAaADQAoAGAZAiQAcAnAVBYQAPBAALCAQANCMgMArQgHAeitCqQi/C8gVAbIgGiTg");
	this.shape_106.setTransform(50.9965,18.5923,0.123,0.123);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0B0B0A").s().p("AFkHHQg0gLkChoQkGhrghgaQg5gthFiZQhCiSgFhQQgFhLAOglQATgxA/gVQBeggDcgUQD2gWAqArIDJNjQgbAPgLAEQgIADgMAAQgOAAgUgEg");
	this.shape_107.setTransform(30.8148,20.7225,0.123,0.123);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0F0E0D").s().p("AkdLLQAahtATg7QAJgdARgHQAhgNAHgFQBmgBC/guQDgg2BIgIIAAuqIjjA/IpahVQgUAUBiGlQBxHiADAcIAGAwQgBAdgYgDQhdmOgtjGQhOlfgZj9QCCgPElgxQERgtCXgQQARgBAsgHQAmgCAOAaIABAAQgiDgAGFsIAHEoQADCsgFB6QAAANACAuQACApgGAHQgIAJh5ARIiYAUIArAWQAEAUgFALQgFANgQAKQgdATiqAXQilAXgoAgQgHAFgxBnIg/CGIAqirg");
	this.shape_108.setTransform(41.7063,24.3426,0.123,0.123);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5C544B").s().p("AEwJnQhZAAgPgjQgJg4gegnQg1hFh9g8QhSgoitg7QjAhChJgfQiKg7hFhBQhdhWgxiMQg0iYAqhwIArBBIAwAbQAeBvAlBSQAvBlA/BFQE3CZFnBvIAYACQAQABAEgQQAZhkhUlOQg4jfgHgfQgeiHgBhFQAGgSAbAMIAhARIAAAAQAuA2ATBTIJZBQQCShJBSA0IAUAEIADOYIgXAOQhfA8iVAKQg+AyhvAUQgmAHgeAAQhHAAghglg");
	this.shape_109.setTransform(35.8185,22.8411,0.123,0.123);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#151312").s().p("AAKCpQAEgagFgSQgsi1gQhWQgFgdASgGQAPgFAMALIAAABQAPAQAZCSQAYCKAAAwQgMACgJAAQgUAAgCgLg");
	this.shape_110.setTransform(-62.9345,51.5899,0.123,0.123);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#71675C").s().p("AivBPQgFgBgYg5QgYg3gDgTQAOgNCxgIQCtgIAnAIQAbAFAUATQAWAWgPATQgIAKi+AoQiwAmgZAAIgCAAg");
	this.shape_111.setTransform(-67.4834,50.4073,0.123,0.123);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1E1C1A").s().p("AinBgQhXgMgFg3QgBgTAHgnQAJgyACgVQApgKANApQADAIAEAYQADARAEAEQARAPCcgRQCzgTAbACQARACAagDQAQADgFAfQgLBIiwAXQhIAKhBAAQg2AAgwgHg");
	this.shape_112.setTransform(-66.5385,53.4074,0.123,0.123);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#22201D").s().p("AkHBXQgtgYgHglQgCgJAKgKIAKgJQALgIAWgFQAbgGAGgDQgUgqAXgOQAWgMAoAZQBrglBtAAQASAADKAPQAFAKAlAYQAUAahEAfQgfAPi8ArQi4ArgpACIgLAAQglAAgjgSg");
	this.shape_113.setTransform(-70.1624,46.2938,0.123,0.123);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0E0D0B").s().p("ABgPMQiLgXh3iOQigjBhflPQhbk+ARkLQANjFBHi7QBej2CRgeQB9gaBhA6QBKAsBZB1QBiCBBHDcQBFDWAaDvQAbD5gdDRQgfDjhbCFQhXCAiAAAQgWAAgYgDg");
	this.shape_114.setTransform(-81.5,62.517,0.123,0.123);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#12100E").s().p("AgOBPQgFgNgghoQgPgigEgTQgHghAbgNQAIASANASIAWAeQACACAEAnQAJAgAcgeQACgCgEgwQgEgoAbADQgBAqAPBQQAIBIggAuQgIANgKAAQgUAAgXg7g");
	this.shape_115.setTransform(0.6917,40.1558,0.123,0.123);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#110F0F").s().p("Ag2BvQgIgcgGg7QgGhEgEgWQAbAJATBZIAUBhQAzA4gPiDQgOh+gagtQgKgRgegNQgXgKABgSQBPgaAzCyQASA/AGBAQAHA9gJAIQgYAGgTAAQhBAAgUhEg");
	this.shape_116.setTransform(-6.2252,48.1551,0.123,0.123);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#141210").s().p("Ag2AZQgtixgJhXQAUgDAIAXQAEANAFAcQAwCOAXCRQBQgJgOhgQgEgcgQg1QgQg1gDgQQgHgfgBgPQAAgcAZADQAGAqAXBOQAZBSAGAjQAXCHheBVIAAAAQghAAg2jXg");
	this.shape_117.setTransform(-1.8275,47.5931,0.123,0.123);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#181614").s().p("AAeCbQgTgZg6h8QgyhngygoQACgEgCgQQgCgRACgHQAigFAfAbIAAAAIAwgCQA4CHBGgYQABgHAHgHQAGgGAIgCQApBZgIAoQgCAKgMAiQgNAigGAhQgjAOgLAAIgBAAQgPAAgWgbg");
	this.shape_118.setTransform(-6.4541,34.2497,0.123,0.123);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1D1A16").s().p("AAUD6QgWgFgviKQgghfgUhMQgRgkgCgKQgCgPAsAFQANAmAgBSQAeBMAMArQBogPgkhvQgKgjgfg8QghhBgFgSQgLgegBgMQgCgbAZADQAHAuAwBVQAvBUAHAuIAAAAQAKBGgVBRQgXBbgyAAQgHAAgHgCg");
	this.shape_119.setTransform(-3.8109,39.4131,0.123,0.123);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1E1B18").s().p("AATDCQgIgEgZgfQgZgegGgMQgVgngUhNQgVhLgDgwQAWAHAQAqQARAwATAOQAUAOAQAEQARAEAYgDQAHgvgYg3Qggg9gPggQAfglAfAdQAcAbgEAuQABAHgBAPQgBAPABAHQACAMAVBMQATBGAFAoQAKBZgxAAQgVAAgfgPg");
	this.shape_120.setTransform(-8.5092,41.051,0.123,0.123);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#585046").s().p("AFGEYQhLANg5iCIgrAIQgcARglAEQgGAKgPANIgXAVQgig1hfhvQgZgchyhhQhrhcgHgLQgGgLAHgqQAGgngRgRQAVADAhgNIAhgMQBsAPBDAdQBAAvAlAsQA/BHgcApQhCATAJAQQAIAOBBAJQCXBSAOAKQBNA3AqBdQAFAZgDAEQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgGAAgPgIg");
	this.shape_121.setTransform(-9.3284,30.1876,0.123,0.123);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#100E0D").s().p("AAPTYQiahth9jxQhujWhOkoQhFkJgfkXQgckIAOjCQAPjQBDi8QBdkCCSgdQDVgrC8EUQB2CsBnElQB7FdAuFhQA0GKg2FHQgtELhxCHQhQBehkAAQhYAAhnhIg");
	this.shape_122.setTransform(-20.0999,55.4036,0.123,0.123);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#756A5D").s().p("ADaI8QhTjmh7jbQh5jZiZjCQgVgbhfhXQhQhJgWgrQAbgUBIAQQAjgZAWgKQAigRAZADQANACAyAfQA3AhAxAnQCIBrgmAlQA9AoBBBNQBNBbgHA2QAogWBVArQBWAqgOAuQAgAXAZAuQAZAtAFArQAFAugUAVQgYAYg1gRQALAUgEATQgFARgTASQAYBuhEAQQgSAEgkgCQgdgBgEAEQgCACAEAwQADAlgXAAIgEAAg");
	this.shape_123.setTransform(-13.6422,38.1346,0.123,0.123);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#766B5F").s().p("AiNAPQAngSA5gSQAigLBBgRQASAEAogIQAegBAAAmQAAAZgkASQghASgzAGQgZADgXAAQhQAAgjgng");
	this.shape_124.setTransform(-81.7589,39.0814,0.123,0.123);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#443D37").s().p("AgMDEQAFhugDgTQgCgPgWgqQgUgjgBgnQAAgQAKheQAKheADgMQAEgNAigHQApgHAJgIQgaCFgQC5QgRDYAPBhQgbgoADhQg");
	this.shape_125.setTransform(-91.7166,55.5216,0.123,0.123);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#584F46").s().p("AlbKTQgKhMgKgiQgFgRgRgLQgQgIgBgBQgBgEABgHIAAgLQgUi5gEhsQgFikAXiBIAyguQAJguAThCQAVhIAQgjQBIidCYh1QCniCCfAQQArAEBIAgQBZAngiAdQidgVifBbQigBcg5CRQgJAXgBAqQgBApgBADIgRgHQgSgHgJAFQhiAygZGaQgKCdAFCfQAFCUAOBCQg4gcgQhBg");
	this.shape_126.setTransform(-86.5584,53.3935,0.123,0.123);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#73685B").s().p("AHLJVQgDgEgYhYQgYhfgLgZQiBkjiIifQiljDj+hqQgKgEgJgSQgHgRgHgBQiLghinBVQifBShNB/Ig2hXQA/hVASgGQAIgCAWgDQAagGAlgSQAJgEBGhRQBGhPAwgWIAAAAQBGggA2AKIAoALQAWAGARAAQALgBB6goQBqgkARARQgmBUBNA7QAqAhByAqQBHAaBZAaQBxAiAsACQAyADBMgRQBtgZAMgCQBDgKAxARQA8AVAwBCQAOATACAbIAEAfIgoApQizgeiqAqIgwgfQg0AAgNAsQABAugUAFQgTAGgcgjQgRhMhGgoQgdgQgSAHQgTAIADAlQABAQA5BWQBBBiAJARQBXCwAeBJQBDCngNBaQgEAegIAKQgEAGgGAAQgJAAgMgNg");
	this.shape_127.setTransform(-78.1321,47.2473,0.123,0.123);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#82796D").s().p("AA1geIhAAAQgrgBgWABQASgZA0AAIBSADQgCATADAqQAAAlgYAKg");
	this.shape_128.setTransform(-23.1701,-62.4481,0.123,0.123);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333D36").s().p("AB4ggIAAAWQgYACheAQQhXAQgiAJg");
	this.shape_129.setTransform(-8.4076,-78.8225,0.123,0.123);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5A5D63").s().p("AgfCuIAqlcQAtBOgzDRIgIApQgIAVgQAAIgEgBg");
	this.shape_130.setTransform(3.1473,-64.7085,0.123,0.123);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8D9283").s().p("AgeAbQgZguAPhZQADgIAGgCIANgBIBADvQhGhSgGgLg");
	this.shape_131.setTransform(-21.2056,-63.5062,0.123,0.123);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D9A853").s().p("AgJA1QgRgNhzhdQAZgHAIgTIALgoIDvDvQhEgJhTg6g");
	this.shape_132.setTransform(-15.6612,-70.4953,0.123,0.123);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E1BE57").s().p("AAwBVQg8gmgagUQhkhKgOheIExEFIgWAWQgagVg5gkg");
	this.shape_133.setTransform(0.864,-76.943,0.123,0.123);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#354A56").s().p("AhKBBQgOgBhIgfQg7gZgpAOQgGgQANgWQAPgVAAgFIAAgWQBXBiCZgSQArgFBXgPQBPgMA0AGQAAALihAhQiTAfgaAAIgDAAg");
	this.shape_134.setTransform(-11.237,-70.0947,0.123,0.123);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D5B988").s().p("AAKBUQgygrgOgeQgUhMgHglQgNgZgDgHQgDgJAjACQA4BNBrB3IgWBXQgHgKg7gwg");
	this.shape_135.setTransform(-21.5694,-68.3453,0.123,0.123);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4E423C").s().p("AD3AZQgvgWgYgDQg4gHiWALQinAPg1ADQgGgSgWgDIglAAIHTgsQAzAHAqAUQAyAXAVAlIgCAAQgcAAgngTg");
	this.shape_136.setTransform(-0.6156,-67.4096,0.123,0.123);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A57B37").s().p("AA2B4QhBgigcgeQgNgOgCgRQABgNgBgBQgRgUgog9Qgmg4gOgPIAsgWQAwBDBXBnQBhBxAzAsQgtgKhBgig");
	this.shape_137.setTransform(-17.0024,-58.9381,0.123,0.123);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#395E71").s().p("AhFCBQgGgOghhTQAMgNAHgEIgBgCQgHgTgDgSQgJg6AtAGIASg9QANgpgKgcQAGAFBHAsQA4AjATAkQhRAUgiAhQgsApAHBNQADAXAUAhQATAiABAKIAAAXQgpgagcg1g");
	this.shape_138.setTransform(-14.1815,-73.1777,0.123,0.123);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#76A1AF").s().p("ABBA8Iitg8QhKgbgVgPQgpgcgRg8QBbAjCsBVQCtBXBXAhIgWAVQhCgjhtgkg");
	this.shape_139.setTransform(-12.5696,-77.0783,0.123,0.123);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6B8CAC").s().p("AghDQIgVgLIAsmeQAKgCAWACQAWABALgBQgGBFgGCbQgMCJgpBLIgXgLg");
	this.shape_140.setTransform(-6.525,-63.6462,0.123,0.123);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#498BAE").s().p("AgWACQgUAcAnAlIA5A3QgDANgYAAQgbgDgKABIivkbQAPgUB9BgQBlBNAqAqQAQASAiAoQAoAwgDADg");
	this.shape_141.setTransform(-2.4908,-76.2905,0.123,0.123);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#324F55").s().p("AA2BTQiXgXgWgFIhtgWQAbgBA8ACQA5ABAfgCIAIgdQhPhfAggXQAfgYBWBUQDLDSitjRIALgLIALgLICYDEQg6gVh1gRg");
	this.shape_142.setTransform(-1.9599,-75.0675,0.123,0.123);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#347091").s().p("ABLCgQgFgFgxgkQgugigegiQgrhHgPgsQgZhFASg3QAogCBSBwQAsA7A9BeQAIAMACAZQABAZABACQASApgQAHIgGACQgPAAgZgdg");
	this.shape_143.setTransform(-19.9479,-62.6624,0.123,0.123);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AAC0CB").s().p("AAXAlQiShzhYhVIgigaQgSgPgOgYQAkgBArAPQAZAJAxAUQA/BCBRAfIAIAiQAmA4BKA9QAqAjBWBCQALAUgCAOIgJAfIj1jAg");
	this.shape_144.setTransform(-14.2604,-76.405,0.123,0.123);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D1BF90").s().p("AgmBEQirh5g0hXQgqhIAggbQAZAUB+CGQBcBgBJAhQBmBDB1BWQAHAGAOAPIhBAWQilhqhdhCg");
	this.shape_145.setTransform(-18.2349,-59.3411,0.123,0.123);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5A5253").s().p("AhBDWQgEgNgGgGQAriUAAj0QAPAAAjgQQAhgJAPAYQAVBdgYCAQgbCThDAlQgSAJgJAAQgEAAgDgCg");
	this.shape_146.setTransform(1.2612,-64.1608,0.123,0.123);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#94A8AE").s().p("ADoCzQichahshEQiDhQiAhYQgPgeAagDQAVgDAhAOIAAAAQBKA6CeBjQBYA2CgBeQAHAEANALQAMAIALgBQAFAWgWABQgfgDgRABg");
	this.shape_147.setTransform(-11.9302,-54.5641,0.123,0.123);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F6E499").s().p("AiDgbQA/gpA3gKQBkgTC6BdQguAZhTAAQh6AAgQACQgvAGhZAYQhaAXg0AHQBZhNA0ghg");
	this.shape_148.setTransform(-12.9757,-81.5823,0.123,0.123);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#846651").s().p("AkpAqIAljTQBYgLChgXQCKgQBwAEQBFgOgDAjQhbAHiWATQiyAWg+AGQgfAVgWCuQgLBWgGAcQgLAzgQAAQgugBAWixg");
	this.shape_149.setTransform(-7.4539,-64.7414,0.123,0.123);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#485B71").s().p("An1AVQAggbA5AGQBWAJAHgBQAxgFB1gcQBrgbA4gDQBXgGCfAaQCnAbBPgDQADAXgdABQglgEgNABQhUADi9gEQiwgFhgAGQgiACg8APQhRAUgTADQgkAHgfAAQhKAAgvgkg");
	this.shape_150.setTransform(-7.1963,-68.5997,0.123,0.123);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E2BA55").s().p("ADmDCQg9gXibiOQiiiUhFgjIgNgNQgLgKgUABIAAgWQDQBABeA0QCoBbAtCLQAKAdgCALQgCALgMAAQgHAAgLgFg");
	this.shape_151.setTransform(-2.0931,-80.276,0.123,0.123);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D4A13E").s().p("AhfAXQgvhugNh+QAYgMAGAEQBrBRBTBnQByCLgdBNQgXgPgng1QgkgwghgPQAaBGACASQAEAZgKA+QhUhOg0h6g");
	this.shape_152.setTransform(-17.3721,-74.9833,0.123,0.123);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2E648C").s().p("AgvAYQjtkjgridQA1gIApArQApAqgEA2QALAOAVAnQAVAmANASQBNBlBhB3QA6BHB9CTQAzA8AOAVQAoA6gEAhQiwidjHj1g");
	this.shape_153.setTransform(-18.2122,-62.9748,0.123,0.123);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#DDC96A").s().p("ADsERQghgpg5ghQg7ghgwgCQghAKgGgPQgHgOAYgZQgBgEADgZQACgVgIgLQgDgEgWgJIgjgNQhYhehtg6IgWAAIgzhLQghgvAIgfQBAA2EgDSQDbCfB0B6IhtAAg");
	this.shape_154.setTransform(6.8324,-74.7927,0.123,0.123);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EAC65A").s().p("ACkCvQg5gThYgvQhcgxgugQQgzgYgpg7QgbgngihKQAFgEAHgKQAHgIAOgBQA2gCC3CQQDCCXA7ANIANACQALAFgCAPIhCAWQgGgCgQACIgLABIgKgBg");
	this.shape_155.setTransform(2.3402,-74.1214,0.123,0.123);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D79F39").s().p("AA5BsQiNgphPgzQgPgKgvgzQgvg2gWgPQAjglAkAGIBLAbQBzAsB1BHQBzBEBgBSIgJAAQhcAAiJgng");
	this.shape_156.setTransform(-2.7659,-71.8988,0.123,0.123);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#457FA5").s().p("ABbCJQhmAEgYgGQgJhEhKhHIg+g6QgigigSgeQAoAOBDgPIBagVQAOgMAQAHQAPAIgDATIAAAAQgaAFAXAcQAMAOAYATQATARBpBUQBaBUgcAgQgugXhZADg");
	this.shape_157.setTransform(-4.8722,-80.6178,0.123,0.123);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8FBACA").s().p("AD5CHQgvg8gRgOQi5iUlHhRQCighCfARQCAAOC3A4QAcAKgcAMQAFA/hlADQCrCMhLBNQgPgEgpg0g");
	this.shape_158.setTransform(-9.0741,-81.3054,0.123,0.123);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#36332F").s().p("ACNDlQhahXhfAAQgBgegcg5QglhCgQgjQg9iCBNg0QBwBBA/B0QAsBRAqCjQAEANgCAJQgBAKgIAAIgDAAg");
	this.shape_159.setTransform(-20.0811,-57.056,0.123,0.123);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9BC6DE").s().p("AAvCeQgGgPgFgHQACgkgIgSQgLgciZhcQiQhXg4gVIAAgWQBugSBIAKQBeANBIA8QAygkBrA2QBnA0AYA8QAEANAaAaQARAXgZAPQgNAIhxAhQhxAggXADQgEgGgHgQg");
	this.shape_160.setTransform(0.6899,-72.308,0.123,0.123);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7FAFBE").s().p("ABlDHQhHgIh4ggQgHgcAzgPQgqg3hIg9Ih/hmQgVgXAHgHQAHgHAdAPIBtAsQgPgTgLgkQgOgvgDgHQAJgdAMAdQBrA5BZBgIAAAAQASgUAdAGQAZAGATAWQAUAWgEATQgFAXgkAIQg7AXBQAVQATgcAmAAQAhABAlAWQAjAWAVAeQAVAigHAcIhKABQhNAAgygFg");
	this.shape_161.setTransform(6.0118,-73.9325,0.123,0.123);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E7CD83").s().p("AGlDnIgWAAIiTg6Qh3hQheguQh5g6hrgTIiAhcQhLg0g7gfQgYgRAGgGQAFgFAjAGQBMAdBsAWQA+ANB9AXQA7gBAxAXQAdAJgdANQBcAmBoBCQBEAtBwBVQAIAGgCAPQgCANgJAPQAtgHAFAKQAFAKghAfIgNAAIgJAAg");
	this.shape_162.setTransform(-4.0509,-72.9277,0.123,0.123);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#51627C").s().p("AgoCuQgrgNgNgJQgVgNgGghQgGggAFhJQAFhQAKgjQAKgoAWgQQAUgPAsgHIBqgPQASADAKAHQARANgbDAQgbDFgjADQgmgTgzgPg");
	this.shape_163.setTransform(-7.7987,-63.777,0.123,0.123);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#A1988B").s().p("AixBOQgvg8AOg4QAOg4BHglQBKgnB3gHQBZgXAgAMQAsARgiBSQgFACgPgCQgRgCgHACIg1AOQggAHgYABIBXBLIhtB4QgQgVhEg5QhOg/gLALQAMAtAyAwQBEBCAKAPQAEAGgGAIIgHAHQhsgzgzhAg");
	this.shape_164.setTransform(-24.9644,-60.6475,0.123,0.123);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#DB674D").s().p("AkvG2IgLgKQAIgyAfhKQAxhyCtjwQCSjMB0iIQAYgcANgJQAWgRAcAAQgBADABAIQABAHgBADQAqAdgyB3QgsBngxAyQhoAvgjBDIAAAVQgdAGgjAiQgqAoAUAdIAEAwIidB/IglBTQgWAxgrAPIgEABQgGAAgIgHg");
	this.shape_165.setTransform(-47.3822,-38.0096,0.123,0.123);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#37749E").s().p("AjNCHQgWgVAGgGQAEgEAYACQBEAGAHgKQAGgIgEgbQgFgegMgcQgghLgzAQQgeAKAAA7QgBA5gXAEQgTiTBSgXQBAgSCGA6QACgHgCgQQgBgPACgGQgRgYgDgNQgDgUAXgIIBtBWQBDA0ApAkQALAKAcAVQAXATADAPQgzAChHAVIh4AmQhDATg4AAQhAAAgygZg");
	this.shape_166.setTransform(-10.8464,-72.4149,0.123,0.123);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EFDEA7").s().p("ACAEeQhbhMhXhaQh7h8gQg6QgUhLAthDQAKgPAfgkQAZgeAJgSQAEAPAPALIAZASQAWgUAHAIQAHAHgOAbQAyBfA2B4QAmBWA1CGIAAAMQABAHgBADQAhAygLAXQgGALgNAAQgRAAgegSg");
	this.shape_167.setTransform(-18.9874,-74.6827,0.123,0.123);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#294F68").s().p("AFND0QgVgIglgWQgzghgMgGQhPgrg3AdQhHAGhAg3Qg7g0gXhJQhBgIhahJQhhhQALg6QAWgVAJACQBTAbBTAnQBbAqA+AqQBpAYA6AeQBcAvAGBJQAvgWA2A2QA1A2gXAtQAlAwgeAAQgNAAgXgIg");
	this.shape_168.setTransform(-9.2293,-74.2173,0.123,0.123);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A27559").s().p("AhhCYQAMgUAdgQQAQgJAggPQA0gcgUhAQgJgehsheQhuhegZABQg9hpgFgEQBxBtDPCUQAVAQB+BHQBzBCAEAHQAIANgWBiQgaBygBAMg");
	this.shape_169.setTransform(-15.1282,-67.1361,0.123,0.123);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#346B90").s().p("AgEBWIkXhgQAAgLApgbQAigXAMgEQApgQAZgGQB7gnB0gFQBNgFAsBtQAYA7AeB4Qh/gGihgyg");
	this.shape_170.setTransform(-8.2723,-77.2122,0.123,0.123);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EED27A").s().p("Ai7ArQgoAggPgOQgOgOAZgvQAPgcgHg6QgGg3ASgXQAcgnC4hSQC+hVA5AKQgJAJidBtQh+BXgJAoQgDAMAKAIQAFAFAHADQABAEgCAIQgBAIACACQBOAagOAnQAUAxA4BCQAsA1A3AyQAuAmgFAsQgFAug6ADIgcANQiRjEjFh7g");
	this.shape_171.setTransform(-17.2408,-78.4143,0.123,0.123);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B88B64").s().p("ACwFUQg0gLhRg2QhOg1hMhKQi3ixAEhxQABgPAPhUQAQhVAFgFQATgXAOATQAHAKAKAVQARAUBgB6QBFBXAyAxIgbgGQgbgHgKgIIBAB2QgNAPgUAIIghAKQggAMAMA2QAOAOA8gwQBDg1ALAAIAeAtQAVAjgHAHQgnAEgYAKQgxAVAzAvQAaAYBjAKQBYAJAAARQAAAZgtAFQgOACgOAAQgVAAgVgEg");
	this.shape_172.setTransform(-19.1131,-70.8395,0.123,0.123);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DF6F53").s().p("AAWDRQgigQhDhdQhGhigkgVQgcgSg4gPQg2gOgagTQBsgpBtghQCBgoBagRQApgIAFAlIAEAjQAEAWAKAOQALAQAiAZIBAAwQBTBAAHA/QglAEgvAaIhSAwQhDAogyAAQgYAAgVgJg");
	this.shape_173.setTransform(-29.2271,-55.3325,0.123,0.123);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E9B74E").s().p("ABtCJQhGAbhMgNQg2gJhTgkQhugwgbgIQhPgbhEAFQAQghAcgYQAfgYAigFQB9hRCNgTQB6gRCeAdQCmBTBfBmIgrALQhqApiGAYQgIAtgNAFIgDAAQgOAAgcgcg");
	this.shape_174.setTransform(-12.0344,-79.836,0.123,0.123);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6D4738").s().p("AibBfQh5iug6jtIKQG9QAgAqgvBIQguBIg8ACIgJAAQjBAAiajeg");
	this.shape_175.setTransform(-14.089,-53.2895,0.123,0.123);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4C6E89").s().p("AjSEBQgegFghgWQgngcgHgCQgRgPAAgKQAEg9ASiXQAVixAKgIQAJgIAVgGQAIgBAOABIAWAAQBtgJCLgFQA4gDDFgFQA5A9gPCPQgQCPhGAtQgMgKgOgTIgWgeQgcghgrAEQgcADgnAlIhIBOQhbBfhWAAQgLAAgMgCg");
	this.shape_176.setTransform(-2.7313,-63.4125,0.123,0.123);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A69B87").s().p("AgjAgQgRgRANgeQAPghAqAPQAaAKABAQQABANgQAOQgQANgSAEIgMACQgMAAgHgHg");
	this.shape_177.setTransform(26.0307,28.9358,0.123,0.123);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#2D2927").s().p("AgBAqQgRgMgKgaQgLgaAGgPQAGgSAaAKQATAIAMAjQAMAggLALQgHAIgJAAQgIAAgIgHg");
	this.shape_178.setTransform(10.6887,11.0813,0.123,0.123);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1E1C1A").s().p("AgrggIArgWIAWAYQAUATABABIgrBAg");
	this.shape_179.setTransform(52.9897,31.3444,0.123,0.123);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#5E574C").s().p("AhTA2QgcgYBdgsQBXgsAWAEQgIAXhPAvQhBAngSAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_180.setTransform(9.4231,39.6776,0.123,0.123);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#97886E").s().p("AgPAKQghgzgGgtQAqAVAfA1QAcAwAHAzQgmgbgfgyg");
	this.shape_181.setTransform(42.9122,9.9804,0.123,0.123);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D9D8DA").s().p("AgzBBQAJgJAGgbIAJgxQANhAAmAIQAkAGgLAZQgGANgRAWQgfBSgDADQgNADgKAAQgWAAACgNg");
	this.shape_182.setTransform(14.132,-23.4599,0.123,0.123);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E1D8C2").s().p("AACBtQgNhCgIgzQgPhkAaAAQAdAnAEBCQACAlgDBLg");
	this.shape_183.setTransform(-44.8393,16.4281,0.123,0.123);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#716056").s().p("AhXAbQAKgEBNgtQA7gjAdgCQghBSgiAZQgRAMgTAAQghAAgnghg");
	this.shape_184.setTransform(1.1316,-61.0175,0.123,0.123);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8D8274").s().p("AhiAbIABgbQAQgDALgPIARgZICYAWIi5BAIgBABQgMAAABgRg");
	this.shape_185.setTransform(50.1623,28.5206,0.123,0.123);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#7D7768").s().p("Ahth2QAKgJAmAcQAkAaApAsQBpBtgNApg");
	this.shape_186.setTransform(7.8588,-22.1391,0.123,0.123);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D4D3D2").s().p("AgeArQgggEgYgYQgagaAEggIDZArQgEAXg8ANQgkAIgYAAIgPgBg");
	this.shape_187.setTransform(38.4784,5.6915,0.123,0.123);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#867C6E").s().p("AhbAnQgIgPAhgYQAggYAsgPQAzgQAhAHIhtBhQgSACgOAAQglAAgHgMg");
	this.shape_188.setTransform(9.9219,37.9856,0.123,0.123);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#BCB6A4").s().p("Aijg+IFHBsIhIARg");
	this.shape_189.setTransform(-1.4216,-31.4249,0.123,0.123);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#625E57").s().p("AhWg1QAwgHAuAZQAeAPAxAqQgJATguAGQgyAGgDACg");
	this.shape_190.setTransform(28.002,-39.332,0.123,0.123);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#38729A").s().p("AgVA3QgOgFgkgTQghgTgEAAQAPgGAagZQAZgZAOgFQAngOALAXIAIAWQAFAOAHAFQAHAGAlATQAYALgBASg");
	this.shape_191.setTransform(-60.3979,6.8778,0.123,0.123);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#494642").s().p("Ah4A1QAfgsBNgdQA5gXBKgMQAHAkgOAHQgWADgOAIQg2AggnANQgkAMgjAAQgQAAgQgDg");
	this.shape_192.setTransform(5.0422,41.8345,0.123,0.123);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#817568").s().p("AhhAjQgPgBgHABQAdg5BYgLQBZgMAhA6QgjANhBACQhNAEgSADIgJABIgNgBg");
	this.shape_193.setTransform(-20.4969,27.5491,0.123,0.123);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A79A8B").s().p("AgegSQB6hKAqAGQgkAzhVAvQhhAygrAZQgdgeB+hLg");
	this.shape_194.setTransform(9.6993,40.6102,0.123,0.123);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E6E5E5").s().p("AgPAHQgvgcgLgPQgcgkCzAIIgBCCIhcg7g");
	this.shape_195.setTransform(54.723,32.5404,0.123,0.123);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A5947E").s().p("AhAhAQALgFAUgLQASgJAPADIBBCNQgKATgUAGQgXAEgMAEg");
	this.shape_196.setTransform(41.9678,10.2463,0.123,0.123);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#292522").s().p("AgqCIQgLgTgBgRQgBgqAChTQAChVgCgqQALAVAPAlQARAqABAJIAAAAQAAADgOAUQgNASAFACIBWAAQgXAZgPAcQgFAJgVAvIgNAUQgJANAAALIgLgRg");
	this.shape_197.setTransform(5.016,50.2844,0.123,0.123);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#BCB5A7").s().p("AgJAYQhZgUgggpQBAgYBNAcQBMAaAsA4QhcgOgwgLg");
	this.shape_198.setTransform(-2.8981,-30.3908,0.123,0.123);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9B9182").s().p("AgggJIAQhnQAMhBAlgSIgsGHg");
	this.shape_199.setTransform(17.1216,-27.9057,0.123,0.123);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#B6A58B").s().p("AAyA3QgqADghgKIg3gPQgZgTAZguQAVgRAHgDQAOgGAXAFQAaAOAfAfIAzA0QABAMgQAAQgVgCgHABg");
	this.shape_200.setTransform(-45.157,50.9549,0.123,0.123);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#AF823B").s().p("Ahth0QAQgTAyAkQAgAXAhAkQAoAoAPAaIAgBLQABAEgBAHQgBAIABADg");
	this.shape_201.setTransform(-16.5979,-64.0832,0.123,0.123);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#1E1C1A").s().p("AjjA/QgCgwAAgaQgBgwAZgIIAKANQAGAHAGACQAFARgJAlQgCAeAmACQBCAFB8gEQCEgEA8ADQgPAXgoACIhBgDIiqAFIgpAAQhNAAgygFg");
	this.shape_202.setTransform(56.8716,30.4327,0.123,0.123);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#1D3444").s().p("ABTAmQhKgIg+gXQgvgQhOgoQASgNADgIQATAIAlAFQApAFANAEIAAgBIClAnQAlgKAQAUQAOASgJAZQgJAZgYADIgEAAQgaAAgeghg");
	this.shape_203.setTransform(7.1052,-14.6675,0.123,0.123);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#807464").s().p("AAAAJIi5AXQBBhPB5AGQB3AGBCBOQhaglhgADg");
	this.shape_204.setTransform(11.4768,24.7712,0.123,0.123);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#929085").s().p("AgYAkQgQhCAAglQgBgbAMgYQAMgTAAgEQAnAkAPBxQAQB4gxAOIgchqg");
	this.shape_205.setTransform(11.2977,-21.861,0.123,0.123);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#807767").s().p("AhUg5IgjgwQgUglAdgKIBwB9QBHBOAkAvQATAaABAEQAAAFgWAUQhmhbhZh3g");
	this.shape_206.setTransform(7.6034,-20.9213,0.123,0.123);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#80766A").s().p("AAKATQhXgYg8AHIgPgQQBHgzBaAXQBUAVA8BHQgpgChmgdg");
	this.shape_207.setTransform(-14.7199,25.4847,0.123,0.123);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DAD8D8").s().p("AhhipQAmgmBECJQAjBGAhBcQAEANAQAiQAIAdgcALg");
	this.shape_208.setTransform(55.5416,35.7235,0.123,0.123);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#463A2F").s().p("AgsAtQgKgagIgxQgKg+gFgRQAgAFBEBjQBEBigQAPQgPACgNAAQhCAAgZhBg");
	this.shape_209.setTransform(-44.1207,46.8087,0.123,0.123);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#797167").s().p("AgCgSQCTgYA0AMIinA+IjhADQApgeCYgXg");
	this.shape_210.setTransform(20.2101,-35.8563,0.123,0.123);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#7A5B3F").s().p("AgkgzQBDgWBkALIkFCBQgBhXBfgfg");
	this.shape_211.setTransform(9.9971,30.6485,0.123,0.123);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BFBAAB").s().p("AgcgbQAxg8BYgmIAABCIjZC5QAjhlAtg0g");
	this.shape_212.setTransform(15.3712,-32.2708,0.123,0.123);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#AEA38F").s().p("AixAfQABgWgBgKIAWgYQAOgSAHgBQATgFBTgIQBUgIAPACQCOAwgmAjQgDADgtgLQg8gPgogEQiTgSg1BZQgBgKABgXg");
	this.shape_213.setTransform(10.0436,36.8699,0.123,0.123);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#385562").s().p("AhCCMIAMg2QAQhEAehFQAkhVAmgmQAHBVglBhQgHARhHCWIgDAAQgYAAADgjg");
	this.shape_214.setTransform(1.1206,-52.6252,0.123,0.123);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C7995C").s().p("AAfCNIiCjwIASgdQANgVANARQAPApA9BUQA/BVAMAeQANAfgeACQglgDgLADg");
	this.shape_215.setTransform(45.6206,9.06,0.123,0.123);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A59A8B").s().p("Ag/ARQgsg5AZgjQBGgGAoAlQAeAaAiBJQgmADgcATQgtgDgsg5g");
	this.shape_216.setTransform(40.8416,7.6904,0.123,0.123);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#562722").s().p("ADYA5IgugIQiGgYhCgKQh2gRhbANQACgJgCgcQgCgZADgDQALgMDTAtIEBA2QACAYgYAAIgDAAg");
	this.shape_217.setTransform(-7.7417,-31.5323,0.123,0.123);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#383331").s().p("AhNAeQghghANg3QA2ANArAAQAsAAA2gNQANA3ghAhQgdAdgxAAQgwAAgdgdg");
	this.shape_218.setTransform(7.9823,23.6079,0.123,0.123);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#46423D").s().p("AhCE4QAEglgBgNQgDhhAXiYQAViNAehpQAMgqAIgTQASgpAVgCQgUBwg1DfQgpDHAGCNIgEAAQgUAAgBgag");
	this.shape_219.setTransform(13.2025,-25.0801,0.123,0.123);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#1E1C1A").s().p("AgsAKQgkgQAGA7IgVAAQgBgRABglQACgkgCgSQAUgSAqgBQAmAAAlAOQAmAPAMAXQAOAZgcAcQgFACgWARQgWASgQAHQgXgxgigQg");
	this.shape_220.setTransform(61.7,31.9011,0.123,0.123);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1E1C1A").s().p("AghAJQAAhdAXg5QABgBAKgGQAKgHAAgHQASACADAOQACAHgBAUIhAEbIgCibg");
	this.shape_221.setTransform(60.1025,32.6856,0.123,0.123);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8B8477").s().p("AhUhbQgFgQA0gHQA0gGAaAYQAjAiAIBCQAHBAgXAwg");
	this.shape_222.setTransform(12.1178,-30.1351,0.123,0.123);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#695E51").s().p("AgDBLQhGgogPgEQAvALgBgxQgBgngZg2QC6AZgiCrQgFAFgKAAQgXAAgxgag");
	this.shape_223.setTransform(15.6857,12.5663,0.123,0.123);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#433D39").s().p("AhOAcQg7guCEhEQA6AvATAaQAhAtgKA2QiKgfgjgbg");
	this.shape_224.setTransform(-0.5755,-27.3612,0.123,0.123);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DCDCD7").s().p("AgkgEQA6hYAJgbQAiAFAKBaQAKBTgNAPQgDADhBATIhSAYQgEg4AuhEg");
	this.shape_225.setTransform(15.2663,-22.667,0.123,0.123);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#2E2A28").s().p("AgPBgQgfglgOg/QgPhBAQggQAUglAyAhQAPAKAbBbQAcBhgaATQgNAKgOAAQgWAAgVgag");
	this.shape_226.setTransform(29.734,39.235,0.123,0.123);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#43738D").s().p("ACOC6Qg6hchVhpQgvg4hziAIBBAAQAsA6BdBvQBSBmAqBNQgCAHADAbQAAAJgFAAQgGAAgLgKg");
	this.shape_227.setTransform(-15.1229,-60.1524,0.123,0.123);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#2D2927").s().p("AglA0QgshMgQgHQAJgmAOADQAKABAUAbQAcAmAJAHQAVAWATgGQgBhZgigQQgQgGggAAIhFADQAjgcBPADQBwAFANgCQgiAVgXBfQgXBdgSAIIgGABQgUAAghg7g");
	this.shape_228.setTransform(12.0151,9.6998,0.123,0.123);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A5835B").s().p("AhBCZIBXk7QAYgIALAOQAFAHAEAJIgsEwQgEgBgvADIgHAAQgdAAAAgNg");
	this.shape_229.setTransform(7.3116,18.9749,0.123,0.123);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6D6356").s().p("AgICJQgNgZALgaQgxhrgQhvQACgBAGgNQAJgMAOAFQAjAJAlBXQAVAuAbBLIgrBXQgJAEgHAAQgQAAgJgSg");
	this.shape_230.setTransform(0.1903,37.406,0.123,0.123);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A49884").s().p("AiLBiQgKhdAVgKQAFgCAfgGQAhgFAdgNQgKguATgOQAUgOAjAeQBaglAQAXQAEAHgBAOQgBANACACQgNAVgaARQgMAIglASQgoAWhAAeQhMAkgNAAIgCgBg");
	this.shape_231.setTransform(62.2415,33.2195,0.123,0.123);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#574D45").s().p("Ai4CPQAogyCMhqQCFhnAvhDQASALgMAeIgRAuQgiAchrBiQhUBQg9AqQgqAegDABIgHABQgRAAAGgpg");
	this.shape_232.setTransform(-21.0429,-4.6812,0.123,0.123);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#31607D").s().p("AjEC5ICkjaQAngvAvgmQAmgeA9glIAsAWQgrAVhHA/Qg6AyguAyQgQARgXAkQgcAugIAKQgoA4gyAAIgKgBg");
	this.shape_233.setTransform(-13.111,-13.2599,0.123,0.123);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#67605A").s().p("AjfAtQgYgMABglQAAgnAagHQA+AXCgALQCqAMBCASQANAXgGAHQgGAHgXgPIgWAAQhmAPiHAAQhUAAhggGg");
	this.shape_234.setTransform(57.3169,30.4895,0.123,0.123);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D0BA95").s().p("AgtCkQgtgKAfh8QAbhuAfgmQAHgKAhgTQAggTACADQgYCCgQA5QglCMglAAIgEAAg");
	this.shape_235.setTransform(6.1388,18.9813,0.123,0.123);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#9A8E79").s().p("AAAAOQhcgOhUAuQgThPA9gYQAzgUBYAWQBSAUA3AlQA5AogbAaQiIgwgkgGg");
	this.shape_236.setTransform(13.2463,17.7445,0.123,0.123);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#554F47").s().p("Ah8BYQgfgfBXhDQBCg0A0gXQARgKATASQASAQANAfQAgBJgiAYQg0AShBAEIgqABIhQgCg");
	this.shape_237.setTransform(40.5505,10.504,0.123,0.123);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#63251D").s().p("ABBAeQg8glgVgMQhhgzhdATIgBAAQA5gnCsARQAhAEBIASQBSAVgBAMIg4BhQgigQg1ghg");
	this.shape_238.setTransform(-8.1368,-29.9465,0.123,0.123);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#1D323D").s().p("AhwAbIgdgNQgQgHAAgHQAAgXAWgZIAXgaQgKAzA2gRIA1gTQAigNAVgCQCXgOgqA5QgCAEg3AaIhKAjQgVALgwANQguAMgPAIQAjghgjgSg");
	this.shape_239.setTransform(-39.3941,-0.1109,0.123,0.123);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B7AB93").s().p("AApA/QgOgDghADIg8AEQhIABAFgmQAKhKA6gUQAqgPBVAMQAkAOAUAeQATAbgCAbQgDAcgXAKQgKAFgNAAQgUAAgZgLg");
	this.shape_240.setTransform(14.0692,12.1669,0.123,0.123);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D64F3C").s().p("AidBmQADgHAbgfQBChdAvgjQBHg5BaAOIAAAAQAVARgSATIgkAdQgpAkhGAsIh1BIIgTABQgbAAADgJg");
	this.shape_241.setTransform(20.8149,-38.1296,0.123,0.123);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#44392E").s().p("AhBAuQgCgcAXh+QAgAJAMgaIAHgYQAGgQAIgJIAAAAQgPA/AggGQAUgEACAAQAKADgFAVQgKAvgcBUQgTBMANBBQhRgvgFhSg");
	this.shape_242.setTransform(-44.8031,43.0308,0.123,0.123);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#1D2E36").s().p("AAAAFQjQhviBg5IALgKQAHgHADgEQDPBhCCBHQC3BjCGBnIlSi1g");
	this.shape_243.setTransform(-74.7729,9.5774,0.123,0.123);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#62231E").s().p("AAgAjQiLgVhjgYQgngEgNgFQgVgIAIglQB8AHB0AUQCCAWBmAiQAOAFAfAHQAYAJAEAZQi0gVg+gJg");
	this.shape_244.setTransform(-7.6134,-32.4738,0.123,0.123);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B9AD94").s().p("ABmAqQhVgZgTgBQgaAAhCAPQg6AOgjgGQAchWBXgMQA8gIBkAeQAEABADAMQAEANACABQAEACAWgIQAVgHANAHQAQAJAHAdQAHAegIAJIgCAAQgMAAhDgTg");
	this.shape_245.setTransform(12.8473,19.4413,0.123,0.123);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#4F4841").s().p("AAQDLQgFghgHgQQgEgOgjhEQgeg9gBgFQgBgFAehfQAfhkABgYQAFAKAQAWQAQAVAGAMQAWBgAFA5QAHBKgMBOIAABBQgKACgHAAQgVAAgGgQg");
	this.shape_246.setTransform(3.8914,50.2973,0.123,0.123);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#322E2A").s().p("ABZBdQhBg0gYAOQBCBRgqgQQgqgRgug8QA+gCg1g4QgWgYhLg6IBCgsQBxBmAYAZQBKBOAcBOIAAAAQgEAAg8gxg");
	this.shape_247.setTransform(5.6998,-25.6199,0.123,0.123);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#3E7495").s().p("AhpAPQAnhAAXgOQAWgMBRgJQBTgJAKAJQgGBchvAgQiHAWg1AbQADgCAshIg");
	this.shape_248.setTransform(-9.3489,-17.7198,0.123,0.123);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#686055").s().p("AEHB2Ig0gTQhbgbiog8Qixg9hTgaIAdgsQB0AwCvBAIEpBqQgKAVgXAAIgNgCg");
	this.shape_249.setTransform(61.5446,41.5479,0.123,0.123);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6D4D29").s().p("AgXBjQgHgLgphWQgphYAAgHQgBgMAlgJIAzgNQAYgKACADQAyBEAfA6QAuBYgXAhQguATgUADIgHABQgeAAgZglg");
	this.shape_250.setTransform(44.7032,9.4031,0.123,0.123);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7F7464").s().p("AAnBxQhAhLgBgFQAAgEAKgbQAJgWgHgMQgxglgegfQg5g7AlgvQBJBGA6BOQBLBkAWBOQALAnABAIQAFAfgRAKQgIgQhEhPg");
	this.shape_251.setTransform(-2.0358,32.4149,0.123,0.123);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#619DBE").s().p("AhiBjQgSgVAWgoQAEgQgEhFQgEg/AEgEQBkgCA0AYQAyAXgBArQgBAqgwAWQgCAggiAWQgdAUglADIgIAAQggAAgOgQg");
	this.shape_252.setTransform(-39.6189,-1.502,0.123,0.123);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#70695D").s().p("AhyAtQgtgBAFgTQAEgOAkgeQBggoAbgFQA6gJBQAgQAKAsgDATIgHAtg");
	this.shape_253.setTransform(18.125,-33.5639,0.123,0.123);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#302C29").s().p("AAIBOQhhgTgaAOQAEh1AugkQAlgdA1AgQAyAeAaA1QAcA5gbAgIgBAAQgJAAhUgRg");
	this.shape_254.setTransform(14.6484,9.8891,0.123,0.123);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#332E2A").s().p("AhtClQAKhKANhMQAQhdAPg0QAHgbAIADQAGABAIARQAKATADADQAHAFAGgVIAPAfQAJASgDARIAVAAQABgeAQgmQATgqAIgVQA9BPhUBIQgSAQgwAfQgjAWgCAKQgFAVAKAbIARAqQAMArhSARQgSALgEAAIAAAAQgDAAAEgfg");
	this.shape_255.setTransform(15.1167,-27.0997,0.123,0.123);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#453D36").s().p("AiYiJQAgALAIgZQAFgNAAgQQAagTAPAbIAYAsQAIAIARACIARADQAEADAHASQAGASAFAEIAVA9QC0CfhyAUQgkgXgDABQgHACADApQhCh3iYjPg");
	this.shape_256.setTransform(-3.7043,30.7593,0.123,0.123);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#2D2A28").s().p("AhyCkQgggLBDiPQA/iEAVgTQAXgVAjgCQAUgBAqACIijEaQgOAWgTANQgQALgPAAQgGAAgGgBg");
	this.shape_257.setTransform(-2.2925,27.3135,0.123,0.123);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#746F65").s().p("ABoBwQheg8hJg0QiPhnAbgYQBYgKBlBHQAfAVCBByQAdAngcAQQgKAFgMAAQgUAAgZgRg");
	this.shape_258.setTransform(2.5395,-28.2115,0.123,0.123);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B5AF9F").s().p("AhJC9QgOgXAYg5QgQgkgMgiQgRgyAEgQQAFgVBOhGQBMhEAXgJQAygUgnBXQgUAtgjA+QgFANgCAWQgBAXgDAGQANAygVAtQgQAmgeARQgOAHgKAAQgMAAgGgLg");
	this.shape_259.setTransform(15.8963,-30.052,0.123,0.123);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B7A385").s().p("AiaB7IAHg/QARihA/gnQA9glChAyQgMAXgkAAQgrgDgSACIghgCQgUgBgIAGQgOAKgHApQgEAZgGA5QgOBxg5ALIgKABQgZAAgCghg");
	this.shape_260.setTransform(8.3606,13.4364,0.123,0.123);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373330").s().p("AhTgGQAPhXACgCQAGgGBHAEQBRADAPgCQAUBzhAArQgvAgh+AFQAMgSAPhXg");
	this.shape_261.setTransform(-3.6737,-39.339,0.123,0.123);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#60594F").s().p("AA7AsQhDgfgmAAQgdAAgiAZIg5AnQgCABgIgBQgIgCgDACQgDg7CUg9QCBg3A/ABQAxAAgOAbQgNAbghABQAnAYgDAmQgBAXgNA4Qg1ghgxgWg");
	this.shape_262.setTransform(10.4364,34.8328,0.123,0.123);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#50473C").s().p("AgMB6QgPgBgrhLQgshMAHgbQAJglA1gSQAygSAhATQAKAGAgBBQAgBDgDARQAAAFg6AlQg5AkgGAAIAAAAg");
	this.shape_263.setTransform(43.0717,6.3152,0.123,0.123);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7C7061").s().p("AgPB+Qg8gbgMgBIAsjwQBJAJAeAZQAbAVABAoQABAWgMA+QgMBAAAAoQgIACgJAAQgbAAgkgRg");
	this.shape_264.setTransform(13.5011,22.4831,0.123,0.123);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#2E2927").s().p("AgVA8QhRgOgxgeQg5giAAgyQAhATC+AKQC5AKAGAFQAEAFgDAXQgCAagJAMQgPAUhBAFQgUACgVAAQguAAgygJg");
	this.shape_265.setTransform(25.4654,-30.0149,0.123,0.123);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CEC0A4").s().p("AhLCOIArkGQAMgDArgJQAtgJAIAAIAAEbg");
	this.shape_266.setTransform(10.6709,27.3146,0.123,0.123);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#7A6D5C").s().p("AAcCCQg8gpgGgBQgEgpANg2IAQhKQADghgVgLQgZgNhFAIQAggsBmAjQBhAhASAoQAIASgXBVQgYBZAHAbQgDADgGAAQgQAAgngag");
	this.shape_267.setTransform(14.5103,15.3539,0.123,0.123);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D8A248").s().p("AB7DCQhEhOgjgmQg8hBg2glQgnAFgYgpQgYgoAVghQhDhYBZABQAYAbBEA/QA9A7AVAZQAbAiAzBXQA3BcATAbQAGAbgQAAQgQAAgngbg");
	this.shape_268.setTransform(-18.6512,-64.9475,0.123,0.123);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#2C2A27").s().p("AghBjQh2gGAWhHQAGgTBZg0QBYg1ATAEQAlAJAPBMQAMA9gHAwQgNgCg4ADQgsACgcAAIgWAAg");
	this.shape_269.setTransform(-19.5519,-42.252,0.123,0.123);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CBB797").s().p("AgaENQgTgCABgNQgCkigpjoQAQgCAeAfQARARAYAeQBwCDgfAhIgpAaQgdAQgIAbQgJAiAEBMQAFBYgDAbQgIADgLAAIgHAAg");
	this.shape_270.setTransform(-40.7771,27.3993,0.123,0.123);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D4C8B2").s().p("AAaBcQhZgPhihiQAihfBoAdQAJACBSAeQA6AVAkACQgVB/haAAQgMAAgNgDg");
	this.shape_271.setTransform(-3.8118,-28.5779,0.123,0.123);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CEBDA1").s().p("AjEBwQACgIgBgrQgBggALgZQALgWAxgiQAxgiA9gcQCXhGAnAtQAlAqgYAMQgrALgWAPQhCA3gyAiQhjBFAbg/QAJgUAvgaQAsgbAIgYQg1AEgtAgQgfAWgsAyQACBvgZAAQgQAAgbgug");
	this.shape_272.setTransform(-42.9256,40.3045,0.123,0.123);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#947B6B").s().p("ABCB8QgggBighIQg9gciRhEQgegJgNgGQgZgLgDgXQBEAFBXAmQAwAWBfAtQBSAkA8ACQBQADBMgvQAlgWBKhTQBAg5AkA5QgNgBgLAIIgTAPQgeAUgnAoQgsAsgWAVQhNBIhMAAIgHAAg");
	this.shape_273.setTransform(-5.4514,-60.3168,0.123,0.123);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BCAD90").s().p("AiDByQADhpAJgmQARhABRgKQBAgXApARQAkAPAJAqQAIAogRAtQgSAwglAhQgTgEhZAFIg9ACQgYAAgDgDg");
	this.shape_274.setTransform(13.2275,15.0227,0.123,0.123);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DEBE77").s().p("Ah3DlIDvnKIgKDEQgGCVgQAaQgIANhgAoQhVAjgPAAIgDgBg");
	this.shape_275.setTransform(45.3301,-2.2402,0.123,0.123);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#1F323F").s().p("ADME5QgigrgRgQQjVkMjskbIgJg7QBDgXBOBYQBIBSACBHQC3CbCPDCQABgCAKACQALABAAgBQAOAEADAOQADAIACARIAJAhQAFASAIAPIggAqQgkgLgigmg");
	this.shape_276.setTransform(-16.0672,-60.8551,0.123,0.123);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B99F7A").s().p("AiNAYQAMg5gBhAQAiAMAwgNIBUgdQAxgRAcADQAnAEAXAoQgRAogvAeQgeAUhDAcQhJAfgfASQg3AggdAoQAahVAHghg");
	this.shape_277.setTransform(-43.4698,38.3277,0.123,0.123);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#71685C").s().p("AEQClQgTgIhdhNQhhhPgqgVQhKgnhWgfQhEgYhjgaQB0gwBRAkQAOAGA2AfQArAZAjAKQAUAGAdgBQAhgBAKACQARAeBLBIQBFBEAOAkQAIAUgLALQgFAFgJAAQgHAAgIgDg");
	this.shape_278.setTransform(75.0426,13.3286,0.123,0.123);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#2E2A28").s().p("AjlC3QALggAigpQAmgvCPiEQB/h2AzhLIBMAYQhKBminCaQjiDSgiAjQAQhFAFgLg");
	this.shape_279.setTransform(51.5132,23.9432,0.123,0.123);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#978D7B").s().p("ABThQIDTh4QB+hDBdgaQgwAthRAyIiMBSQjsCKiJBNQjRBziuBQQDdihF2jVg");
	this.shape_280.setTransform(19.0011,35.1035,0.123,0.123);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#2D2A28").s().p("AA/BaQhCgPgKAAQgWAAgdAJQgbAJgIAAQgdgBgThlQgIgmAhgXQAcgUA0gEQAvgDAuAMQAxANAVAYQAXAZAFAsQAFAxgaATQgJAGgSAAQgQAAgWgFg");
	this.shape_281.setTransform(32.3459,28.9212,0.123,0.123);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#678992").s().p("AEqE/QgmgbgOgIQgygdhcg7Qhhg9gsgaQgCgXASgBIABAAQgGgIALgMQAcgJgZgXIgogdQhXhEgzg0QhHhIgmhJQgvAIgHgXQgGgWAmgdIAhAWIAhAWQgBAbASAXQALANAaAZQDUDqFYEVQgMAMgPAAQgOAAgQgJg");
	this.shape_282.setTransform(-8.6102,-53.6969,0.123,0.123);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#DDD4C0").s().p("AgvBMQiOgfAdhUQAQguA5gLQA0gKA+AYQBAAYAmAuQArAzgHA9QiJgIhLgQg");
	this.shape_283.setTransform(-57.053,38.0398,0.123,0.123);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#C5B498").s().p("AhTBOQgdhAgSgtQBMAGBChCIA2g1QAhgdAggLQAAAKgUB4QgOBVAOA2Qg0AWgbARQglAYgbAlIgzhrg");
	this.shape_284.setTransform(-47.7703,42.3571,0.123,0.123);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#614F3B").s().p("AiUBAQgogsgbg2QgQgigbhLQARAVAmATIA3AaQAfgiAXAQQAXARgMAtIARAUQAOASASAJQBXAqA7gSQAZgHAjgVIBIgrQAWAagKAQQgEAIggAXQh/BYg5AMQgRAEgRAAQhNAAhJhQg");
	this.shape_285.setTransform(-40.2868,47.2149,0.123,0.123);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#38342F").s().p("AgjCWQhggiAOhJQAHghBGgfQBUgmAJgKQAKgKARguQANgjAagHIAAFHIABAAQgdAIgeAAQguAAgygSg");
	this.shape_286.setTransform(-32.0435,49.1227,0.123,0.123);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3C7DAC").s().p("AC8FSIgKgTIgMgYIgLgiQgGgXgIgPQglhGiQjIQiFi4gfhKQgFgLADgMQACgMAKADQCHBQBnCtQBJB7BIDIIASA2QAHAigaAMg");
	this.shape_287.setTransform(26.7679,-14.6048,0.123,0.123);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4F4843").s().p("Ah4BRQghg4AEgVQAIgtBCg7QBDg7AygEQBOBGAfBTIh6BUQhDAwgyAqQACgagig5g");
	this.shape_288.setTransform(39.311,8.7684,0.123,0.123);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B9AD95").s().p("Ah2AFQAJg6ARgcQAohBCcASQAXALAHAmQAGAigIAtQgJArgSAfQgVAigYAEQgxgHgyAFQg4AFgoASIARiAg");
	this.shape_289.setTransform(11.6818,22.3122,0.123,0.123);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DAC6A7").s().p("AiFB7QgTgVAGgaQACgKAvhhQAvhlAHgEQANgIAkADQAtADALgCIBXAhQgUBjhLA8QgvAmh3A1IgVgUg");
	this.shape_290.setTransform(-43.6896,34.2847,0.123,0.123);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#CDBA9B").s().p("AgeCgQgngUgMgcQgJgVgBgzQgChMgEgnQAJgdANAdQA1AOAXgwQAJgQAIgfIAPgzQAEADAbAAQAbACAHASQgsBwADBSQADA6AmCLQhbgaglgVg");
	this.shape_291.setTransform(-43.6051,18.7137,0.123,0.123);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#423C36").s().p("ACIDgQgqgBgdgaIkPl9QBLg+AsAlQAbAXAyBOQBfCeB6CTQgdAbgpAAIgBAAg");
	this.shape_292.setTransform(6.3765,-21.465,0.123,0.123);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#34312E").s().p("Ah3DwIBBgsQg0g1AXgkQAEgHAZgdQAXgZALgXQAyhnAuifIAsDOQADAXgZAWQgZAXgSgPQgCgBACgWQABgTgNABIghBAQA/gPAYA/QAXA9ggAuQgOAUhRANQg6AJgoAAIgOAAg");
	this.shape_293.setTransform(-3.5642,-44.026,0.123,0.123);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6B4533").s().p("AiOBxQglgThBg0QhOg+gngZIADgMQACgIAGgCQA3ACCFBDQB/BCA1gFQA8gGBfhLQA0gpBahKIAAABIAmA4QAPAfgJArQhsgXgnAXQgMAGgbAYQgdAbgbASQhdA9hOAAQguAAgqgVg");
	this.shape_294.setTransform(-4.6246,-59.045,0.123,0.123);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#877C6F").s().p("AguC6QgdhLgOgnQgYhDAKg7QAOhXA3goQAhgZBVgsQAqAfgmApQgzAsgHAQQgdBAAgCbIAXBlQAKAtgEAEg");
	this.shape_295.setTransform(-60.6311,38.0566,0.123,0.123);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3B3733").s().p("AhcBYQgtgIgMgKQgDgDgLgqQgKgpABgGQAEgRA/gYQBCgYBBgHQBQgHAlAaQAuAfgYBKQgVBBiJACIgGAAQgvAAgugJg");
	this.shape_296.setTransform(-3.4222,-19.1303,0.123,0.123);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#2C2927").s().p("AgSAWIiehKQgfgNgLgIQgSgOAGgfIHKAsIAAAAQARAPgrBTQgrBTgdAMQgzg1hhgsg");
	this.shape_297.setTransform(-5.6982,25.955,0.123,0.123);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#493C2C").s().p("AijCuIABgsQABgbgCgQIAHgzQDqhPhDiZQARgDAkgKIAigJIAWAAQgCAEABAQIABAYQgFA+ARBmIAgCiIgMALQgIAHgCAEIhYABQhVAsg3AAQg3AAgWgtg");
	this.shape_298.setTransform(-43.0699,34.9789,0.123,0.123);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C4B295").s().p("AgDBaQgUgYg0gIQgNgChVgFQg6gDgZgNQghgRAGgqQARh3CSA5QAiAOBPApQA+AgAUADQAqAFAfgUQAqgcADgBIAAAAQAGgBAPAAIAXABQASAFALAHQA8AviCAmQhLAWhnALQgBAPgGAAQgFAAgJgPg");
	this.shape_299.setTransform(-41.816,31.1693,0.123,0.123);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#A49985").s().p("AgxCJQg2hYgJgoQggiJAPgtQAYhDCCAOQhJBmAlBsQAhBlBwA7QABALgBALIAAAAQgLAFgpAfQgjAagPABIgBAAQgYAAg4hcg");
	this.shape_300.setTransform(67.7319,37.4936,0.123,0.123);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#3D7AA4").s().p("AAWBfQhoidgzgLQAZgdAThAQAQg2AGgyQBmBrA9CYQBFCwg5BqQALgfhhiRg");
	this.shape_301.setTransform(40.1304,0.9549,0.123,0.123);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#292724").s().p("AA1CdQgehTgRgcQgXgngzhHQgzhKgXglIEFghQgBATABAuQACArgCAXQAgCPgKCMQgLADgKAAQgpAAgag0g");
	this.shape_302.setTransform(9.613,-22.6475,0.123,0.123);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#AC8958").s().p("AikCkQgOgEgIgpQhLg2gWhGQgXhIAhhWQAOAKA2BFQAqA1ApALQAVAGA4gLQA+gLAZACQAVABBoAQQBMAMAygGIAABBQgogOhzARQh4ARgRgDQghgbgcgRQg3gggbAmQgWAfAfAYQAPAMAUAJQAAATgLAIIgMAFQgcAXgMAAIgDAAg");
	this.shape_303.setTransform(-40.9008,14.692,0.123,0.123);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#60241D").s().p("AkQBcQAogiBhg4QAKgGAagpQAVggAZgIQACAHAGAHQAGAGAIACQgPArBPgVIABAAQAfAeA0geQAXgNBAg4QAygsASADQAbAEgDBUQh0BRh3A6QiaBLhkABIgHAAQiOAABGg8g");
	this.shape_304.setTransform(-26.9579,-41.0908,0.123,0.123);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#93887B").s().p("ACvFEIghglQh1h0hWiaQg7hmhWjNQALgEAagcQAagWAZATQAaA4A9BuQAlACAKAYQAKAXgPAmIBfDFQA4B2AuBNQgDAPgKAAQgHAAgNgLg");
	this.shape_305.setTransform(52.8544,32.9119,0.123,0.123);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#918878").s().p("AjlBMIgggrQArgTBEgOIB3gVQCPgdA/hFQBABSAXBGQhRAoiOAUQihAQhKALQgNgQgUgcg");
	this.shape_306.setTransform(8.9236,-28.8439,0.123,0.123);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B9A88D").s().p("Ag4AuQgbhBgTg+QgSg7AEgIQACgEA3ggQA4ghAEAAQBKgBAHBXQADAvgHBJQABALAPArQAPAvAFAaQARBbhDALIgEAAQguAAhGisg");
	this.shape_307.setTransform(-46.5724,46.7796,0.123,0.123);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#514941").s().p("Ai5A6QAAgWgNg1QgMgxAEgcIFSAAQArAAAQAzQAJAcAIAzQgkgGg/ARIhuAhQg2APgoAAQg+AAgcglg");
	this.shape_308.setTransform(-49.5206,56.8302,0.123,0.123);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#B3A793").s().p("AgwEAQgYgCgLgeQgWgjAAgIQgDgjAUiHQATiHAMgcQAMgaA0ggQAegSA1gbQAVAJgGAkQgDATgKAjIgZCeQgPBegRA/QgFATgEAgQgJAWgjgIQgFAggXAAIgCAAg");
	this.shape_309.setTransform(9.1566,44.2986,0.123,0.123);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#7F7363").s().p("AjDCZQANgmACg1QAAg3ACgYQAIhVBUgcIAnAfQgYBkADA3QADAvASgLQASgKAJg3QALhBgMhUIArgeQC7ACgOCXQgFA1gbAzQgaAwgRAAg");
	this.shape_310.setTransform(11.3409,27.4469,0.123,0.123);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#4380A6").s().p("Akmk8QDYA5CODEQAuA/BFB4QBQCOAkA3g");
	this.shape_311.setTransform(23.0309,-17.5605,0.123,0.123);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4A433D").s().p("AkbDTIAKggQAGgUAGgNQALgaAYgjIAfgxQAsgUCJhtQB2hfBHgPQAPgOAJgBQALgCAIARQAjAJgBAaQgBANgFAOQAGAFAQgBIAQAAQACACgXAnQgYAngDACQgOAIgmgCQgqgCgQAGQhsArhCAWQgUAHgVATQgaAYAdAKQgNAIgdAfIgzA2QgxAuggAAQgNAAgKgIg");
	this.shape_312.setTransform(-24.1253,30.4896,0.123,0.123);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#2B2928").s().p("AAFC0Qg5gBg0gQQiSgqA/hmQAEgGCmhPQClhQAVghQAYAJAKAuQAJArgKALQgIAHgwgRQgwgRgFAFQgJAXAXAXQAZAZAAAGQAAAHgZAVQgbAYgFAQQgFATABAyQACAtgCACQgKALgvAAIgJAAg");
	this.shape_313.setTransform(23.9065,27.5151,0.123,0.123);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#2D2A27").s().p("AjrEBQgNgIgZg8IgghRQBehvDAhjQAtgYB3g4QBogxA5gfQgGATgDAZQgEAVgVATQhCA6jGBiQjEBhhJBCIBXgBQAogmCWhXQCfhaASAPQACABACASQACAQAIAEQAGgDADgKIACgKQAIgbAOAbIAAAsQATAUgTARQgUARgXgLQgBgHABgPQAAgPgBgGQgjAKgRBWQgRBWggALQgqAOhagXQh0gfgVgBICZBXQgbgHhVAUQgtALgbAAQgUAAgKgGg");
	this.shape_314.setTransform(5.4275,36.3234,0.123,0.123);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#13110E").s().p("AiyB3QgIhEgEgSQgKgugWgcQgrgCABgOQAAgNAqgPQCbgmCagFQBAAPAPgEQANgDgagOQhGgmhDABIgTgtQgMAdgMABQgNAAgHgeIAAgVQAZgDA0gQQAzgMAuAJQBSAPAlA9QAnBAgmBOQgiBFiogjIh0gdQg3gNgIAIIAVExQg1gjgMhug");
	this.shape_315.setTransform(-38.8464,33.3346,0.123,0.123);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F5F2E7").s().p("AhhCGQgqhcgPg3QgbhmA3gkQAfgUAzACQAvACAxAUQB0AwgEBRQgrBchJA7QguAlgjAAQgkAAgcgkg");
	this.shape_316.setTransform(-48.1736,40.3088,0.123,0.123);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#6D655B").s().p("AF/DwQgzgEhXg3IiIhVQi6hZhegtQinhThihNQAEgCAHgSQAKgRAPgEIA0AGIMQHBIABAAIgSANQgSALgQAAIgCAAg");
	this.shape_317.setTransform(57.8286,26.666,0.123,0.123);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#71665B").s().p("AkJBgQg7g7BIhEQAtgsChglQCWgjBPAGQABAJA1AmQA1AmADAYQgjgFg2ARQhDAUgSABQgMABgWgMQgVgNgNACQgSAChUAXQhYAYgEAFQgIALASAvQAQAvgEAEIgTABQhMAAgxgvg");
	this.shape_318.setTransform(-75.2831,39.9382,0.123,0.123);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#3C3633").s().p("ADOCwQgWAAgIg/QgKhHgNgJQgZgShxAbQh7AegegIQgigJgcgwQgbg1gOgRIAggwQDAgKC4g2IAyAZQATA7AFB7QAGCQgpAAIAAAAg");
	this.shape_319.setTransform(9.482,-26.5829,0.123,0.123);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#79ADCD").s().p("AiXFXQABgVgMgtQgLguABgbQAFhmA5ilQBCi/BCgjQAZg1AbgNQAggOAvAkQAuAMg6BKQgmAygqAVQgtAXg6gFQAqBigVCHQgNBZg0CSQgOAogHAGQgEAEgHAAQgNAAgUgRg");
	this.shape_320.setTransform(-41.0554,4.417,0.123,0.123);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#37332F").s().p("AlGBfQgfgGg5hGQg3hCABgUQAAgPAdgLQAXgIAYgBQA6gDBUA/QBbBCAyAHQBeANCbgNID8gXIBNBCQh2gXkfAhQiuAThrAAQhEAAgpgIg");
	this.shape_321.setTransform(-39.034,50.45,0.123,0.123);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#1A1914").s().p("AgFAdQjgjZhMhAIALgSQAHABALAHQALAJAEABQAuA1BxAfQCCAkAwAhQBMA1BGBwQBHBxANBcQhkgtjTjFg");
	this.shape_322.setTransform(-4.7777,-52.472,0.123,0.123);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A38D6C").s().p("AiDBTQg2hTgIhAIBBAAQgGgvAGghQAEgcASgtICCAVIgrAhQAqATAGALQAFAJgTAJQgbALgPAHQgbAOgIASQBWABAYACQBFAFAmAOQBRAghUA4QhzA+gYAXQgNAOgPAdQgRAjgIAKIhbiHg");
	this.shape_323.setTransform(-38.3917,37.6567,0.123,0.123);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#302C29").s().p("AiPABQgehsgBgrQC0gMBAAcQBhAqAICfIkxBYQAMg+gZhcg");
	this.shape_324.setTransform(-42.9345,57.785,0.123,0.123);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4D4943").s().p("AhGCBQgegbgTgOQhIg0hCAxQgpgpC7hfQBBgiBKgfQBCgbASgDQAogHAmAqQAnAtAlgBQgBABAAARQgCASgNAIQkKCogQADIgDAAQgMAAgXgTg");
	this.shape_325.setTransform(24.4652,-37.8191,0.123,0.123);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#2B2927").s().p("AiYELICOoMQAKgRA9AMQBHANAVgHQgSAqgbBwQgeB9gSA1QhBDAh8AAIgXgBg");
	this.shape_326.setTransform(33.373,9.3854,0.123,0.123);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4F3F2D").s().p("Ag/DYQABgWgFgHQgHgLhHgOQhSgQgMgFIAAgVQgUiMDVhYIADghIAAhtQBlAHBiCCQBeB8gJBiQgHBIhQgrQhghCgjgJQgogIhIAFQhDAHgogNIAABCQBagHBNAKQBPAKBRAfQAPAShgAjQhQAdgjAFQgBgHADgcg");
	this.shape_327.setTransform(-35.9471,38.8688,0.123,0.123);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#403B36").s().p("AmAA1QAZgBBJAPQA5AMArgNQAcgJBohbQBihXATAAIE9AAQAXAUhUA6QhRA1gXAAQgdABgXgnQgZgsgUgFQgBAMASBDQAQA4gNAPQgKAMhOAOQhSAQhZAFQgjACgdAAQi3AAgQhFg");
	this.shape_328.setTransform(-36.8564,48.8253,0.123,0.123);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F7F8F6").s().p("ACdEyQgSgBgKgOQgNgSgMgiQgNgogJgVQgehOg9gkQgpgYhKAQQgbAGgKgEQgNgGAAgfQAKgiARiJQAPh9AEgGQADgDAtgJQAzgKAIgCQAFAQAMA7QAJAxAKAYQAGANAUAKQATALAEAJQAWA+AhCRQAjCXAVA9IgMABIgGAAg");
	this.shape_329.setTransform(-29.4978,64.2605,0.123,0.123);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EFCE63").s().p("ADPDpIhthzQhKhNh9h4QigiYgsgrQAPgJAdgWQAYgTAOgGQAqgTA0ApQBdBJCODmQBOB9B6DZQgggghDhIg");
	this.shape_330.setTransform(37.1382,-10.2855,0.123,0.123);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#322D2A").s().p("Ai4D7QgJh0AhgtQAng2BwASQADgKgMgGQgNgEAAgBQgogTABgiQABgiAmgWIAKgHQAIgIgGgGQgagbhRACQhzAEgJgCQgEgDATgcQATgbAKgHQDAgbDIgmQALACAcAYQAaAWAAAGQAAAGg2ArQhIA4gkAjQiLCIBpA+IgOAUQgRAUgSAIQghAOhFAXQhHAYgNAAIgEAAg");
	this.shape_331.setTransform(20.3341,-33.1398,0.123,0.123);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#7EABC5").s().p("AsBmTQA+ANBoAiQBfAhBDAdQFhCFFDDYIAsAVIHBEDQA/AjggAig");
	this.shape_332.setTransform(-73.4993,11.1894,0.123,0.123);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#9E9282").s().p("ACNDCQg8gQjXibQjCiMhLhGQAZgUAaABQANAAAmANQBPAaCVBnQCVBoBSAdQAvARBQALQBYAMAfAIQgJBGhkAQQgdAEgcAAQgxAAgwgNg");
	this.shape_333.setTransform(-5.1807,-27.4696,0.123,0.123);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#A69B88").s().p("AF/EqQg8jwhVi8Qjon9lHA2QgYAEg1AfQgqAYgcgJQDwjuD9DxQBgBcBZCYQBIB8AzCIQA1CKAiCmQAYB3AZDCIgVBBQgQifgxjFg");
	this.shape_334.setTransform(68.4414,32.0273,0.123,0.123);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D8C4A1").s().p("AAHDSQhUgNgDgDQgPgPgLjLQgKjKALgNQAgAcBIgNQAjgGAigJIABAAQARALAHDRQAIDiALAhQgTgShWgMg");
	this.shape_335.setTransform(-43.2391,27.1762,0.123,0.123);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#82796D").s().p("AjThHQgKgbgMgRQgngsBShLQgngdgEghQgEgcAYgVQAWgUAfABQAjACAXAdIAAAAIBBBCIhXAKQAXAdAyARQBFAZAKAGQgBCnBpCnIgmAkIgQATQgOASAIAHQAGAFBSARQBQAYAGApIiYAsQiSkKifiqg");
	this.shape_336.setTransform(-21.7845,-57.6529,0.123,0.123);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#292522").s().p("Ag4DZIAAABIhXm0QDHgNA5AxQBFA7hSC1QgTApgzA+QgxA9gZAAQgHAAgFgFg");
	this.shape_337.setTransform(5.5969,45.725,0.123,0.123);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BBB29D").s().p("AhtBpIjbiYQBIADDWgxQDNgwBBAHQAgADAaAdQAPARAZAmIAAAAQAVBLiqA4Qh1AniCANg");
	this.shape_338.setTransform(7.0576,-29.7316,0.123,0.123);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#AC722B").s().p("ADtFRQgwgphLhVQhRhbgdgaIjXjEQiEh2hZhDQgjAZgehFQgsALAWg3QABgBgCgYQgCgTAOABQBAAoBTBMICJB9QALAJAVAFIAWAHQCgBeCkCOQCaCFCFCaQAOAHAYAOQAXAJAagIQg0Aeg2AAQhZAAhghSg");
	this.shape_339.setTransform(-6.4364,-53.6491,0.123,0.123);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#15232B").s().p("AJzBLQj/jEkBh7IgQgyQgWgbhDgrQg6gkgVgvIw1AAQAPgWApgCQAWgBArADQCigBFbgIQEzgDDHAMIJWGgQBgBRDFCbQCqCNBfB8QgDACgHAIQgIAJgDACIgwALQjajkjoixg");
	this.shape_340.setTransform(-64.5631,12.5351,0.123,0.123);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#44403B").s().p("AhsBvQgmAAgthNQguhKAKgsQBQgSCTgHQCugIAYAgQAQAWAJBHQAGAxABA2g");
	this.shape_341.setTransform(-19.1649,-38.9498,0.123,0.123);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#453F38").s().p("AhLBiQh8hKgdi5QDHgOBmBMQBiBJA6C/QjQgKhgg5g");
	this.shape_342.setTransform(-52.4707,49.5974,0.123,0.123);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#38729A").s().p("AgGgMImikkINRGKQAEAEgRBfQgSBmAAAPQijiTjtirg");
	this.shape_343.setTransform(-50.8633,12.9366,0.123,0.123);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#618C9C").s().p("AC9FFQgggCAHghQh4jbitiKQi1glhdiAIC6A2QBmAXBfgMQAygGA/grQAjgYBCgyQA5glArADQA3ADA3BCQgTAKhKgEQhIgFgFADQgDABhABWQhBBWgWAMQgFAYApBAIA7BeQAOAeAOBIQASAyAvgcQACAAAKgjQAOgdAWAbQAOARgcApQgaAkgZAPQglANgWAAIgDAAg");
	this.shape_344.setTransform(-3.0289,-52.7068,0.123,0.123);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#393531").s().p("Aj2kzQBzgqBFBBQAqAnBLB/IBoCXQBVB+ACALQAFAUgiA1QgiA0AHAeg");
	this.shape_345.setTransform(21.0931,11.6308,0.123,0.123);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#DAC7AA").s().p("AAuCeQhzAAgNgIQgNgIg3iVQg5iZANgMQC+gSBdBaQBWBTAXDBQgigSh2AAg");
	this.shape_346.setTransform(-54.4995,45.1635,0.123,0.123);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#D3563C").s().p("AjYC8QgJhTAPg9QAOg7AuhEIhCgLQBLhAAxgWQAugVArAJQAdAFA+AfQBVArAvATQgaAYhKAgQhGAfgbAfQgWAbgSAsQgVAxgJAMQgbAohIAAQgfAAgngIg");
	this.shape_347.setTransform(18.3032,-38.8215,0.123,0.123);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#312D29").s().p("ApEExQCMhMFzi/QFOivCQhrQAsghAJgJQAagcABgjQAdANAhAjQAoApgOAUIxNJOg");
	this.shape_348.setTransform(18.753,27.9914,0.123,0.123);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#692820").s().p("ADjBzQhDgfgggNQg4gXgogFQgqgFgvAEIhMALQhaALhRgiQhLgegcgeQgngoALg/QAxgBBuAhQBcASAWhHQBGBJBeAmQBpAqBagWQAjAXBdAwQBTAxAeA1QgWAFgYAAQhHAAhegog");
	this.shape_349.setTransform(-39.455,-20.3524,0.123,0.123);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#835A37").s().p("AjDF4QAygQA6ADIBsANQAFgMgVgQQgPgNgLgDQgvgbAbh6QAXhwAogsIAlAOQAXAEAFgeQALg3hVACQhfAPgVACQgcAGgLgCQgWgCAMgeQAWg1BnALIBUAMQAwAFAagIQgEgdg9gOQg8gNgCgTQgDgaAjhXQAWg4Aeg9QAggcBMAGIgFDJQgOBUg1DkQg6D9gUAcQgDAFglAIQgoAIgpAEQgVABgSAAQhPAAgCgjg");
	this.shape_350.setTransform(7.85,16.9089,0.123,0.123);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#121415").s().p("AHzCNQlCh3kZhZQmRiLmXg6QANAXAIAVIhtgXQhCgOgrgHQAgADAIgCQASgDAIgUIADgaQACgSAQgVIBKgQQISBhHNCMQInCnGKDUQAyAbA5BHIABAAQAcAJgcANQlwiPjlhVg");
	this.shape_351.setTransform(1.893,-6.6463,0.123,0.123);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#73A7C4").s().p("AHfEvQiiiOl7icIkjh3QiehEhghAQg7gngEgHQgIgOAUg2QALAJAXAFQAaAGAGADQBNAKA+ASQBSAZApAiQCeA3ChBMIAdBBQCMgIAMBUQEGCfDxC0g");
	this.shape_352.setTransform(12.1918,-11.1129,0.123,0.123);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#2A2725").s().p("ACtBrQh5gChGgHQjdgWh5hqICDhMICVgEQBegDAyAIQAiAGAoAaQAXAPArAfQBPAzBNgrQgDAVACArQADAvgCAUQgugDiNgCg");
	this.shape_353.setTransform(-34.9987,55.6307,0.123,0.123);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#262321").s().p("AnDDZQCDhJD8ihQDkiLCug+QgzBBhwA+IheAxQg5AegiAWQgbAJgOAIQgcAPAaAWQADADAmgMQArgNANAAQAbgBBRACQBEABAogEQAdgDB1gfQBZgNhGBRQg0A+jkATQj6AKhEAJQgWAChxAdQg8AOgtAAQgSAAgQgCg");
	this.shape_354.setTransform(13.673,50.5705,0.123,0.123);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#2E2A27").s().p("AgCFWQgegggKgeQgUg5gjinQgjilgFg9QgFg3AXhXQAbhnAoAoIAAgBQACADADAnQAJAqAdAPQAXAMA3gBQA0gBABABQAFAFAHBpQAHBlgCANQgHA2hLCNQg5CJA4BiQgfgQgbgeg");
	this.shape_355.setTransform(-31.2611,37.7233,0.123,0.123);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#24201C").s().p("AHVGwQgZgTg+h5Qg5hvg0gXQgTgSgXhHQgXhHgHgIQgFgFgagHQgcgHgKgIQi/iXiAhDQjJhqioASIA1gvQAjgfAVgJQBogNB/AyQBPAfCFBNQgkgcAeg0IBAAKIBCAMIgsAhQAOASBIBBQA8A3ANAgQAJAWgFAeQgEAeACAGQAdBLBVB3QBaB9AdBCQApgGgLgxQgGgbAAgIQABgQASgDQAJAYAMBBQAMA7ALAaQgRgDgfAXQgWAQgLAAQgEAAgDgCg");
	this.shape_356.setTransform(76.7716,16.9045,0.123,0.123);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4B3F2F").s().p("AAFDPQgXgBgdgSQgdgRgEAAQgKgBgbANQgkASgLAEQg8AVAChAQAUgLA5gvQAzgpAggOICng8QhGgIhpg+Qh1hFg5gOQAjgFBIgRQBGgRAjgFQB2gOBKBPQA5A7ANA0QARBChigYQgBAVAkAFQAoAEAJAbQAnBthXAaQgdAJg7AAQgnAAg1gEg");
	this.shape_357.setTransform(-33.741,44.256,0.123,0.123);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#423C38").s().p("AALJEQidgoiMiwQiQi0hCj6QAmAxA1BeQA7BqAcApQCSDQCTA7QC+BMCOjUQBqifAekKQAXjPgYj3QgFg1AagNQAaDEAFBlQAJCdgUCPQgvFRiICTQhcBkh3AAQgmAAgogLg");
	this.shape_358.setTransform(68.5123,46.5356,0.123,0.123);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#7CABC6").s().p("AgIgMQjrirlvjmIgBgtQCtAKBDAMIABAAQBgg0gJBgQAIACAOAJIAWAKQBtBzFDESQEaDvCICpQADAHgcAJIgoAQQjrjtk/jpg");
	this.shape_359.setTransform(-57.1723,12.4014,0.123,0.123);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#695F53").s().p("AjiCZIgWhYQAYhNCBgEQghiWBjgzQASgEATADQAKgCgEgpQCKCCA1BoQBHCLgsCWQkIhhjCgMg");
	this.shape_360.setTransform(34.2825,-36.5036,0.123,0.123);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#312D2A").s().p("AggEQQg6gwgshCQgshDAEgiQADgeA7gnQBCgtAOgcQAHgQAGgrQAFgnAOgXQAMgWBCgsQBCguAfgGIAAHUQAAAEgLATQgMAUgCAJQhHAWhEgzIg3gsQghgZgegIQAWBGBVAtQBMApBNgDQgQBRg5ABIgBAAQgvAAhAg1g");
	this.shape_361.setTransform(71.2514,44.8828,0.123,0.123);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#6A6259").s().p("AjfJOQgoAGgEgQQACgfgCgZIAbheIE+lEIAvADQA+A3Adh0QAQhAAChnQAFimgfhXQgdhRhEgcQg5gZhsAGIjqAVIBBhYQA1gECWgVQCGgKA5AtQBRBAAaEBQAVDPgTCWQgFAmgUAcQgaAfgQAWQggAjghgJQhEBPhfBbQg4A1h2Bpg");
	this.shape_362.setTransform(51.9832,18.037,0.123,0.123);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#2D2927").s().p("Ah5FKQgMgKgGgTQgRg2gGiCQgFiAgTg5QgDgMAJgIIAPgKQAfgDgCAUQDAjNB/g0QgCAdAGCOQAEBvgNAzQgHAZh7CdQh5CdgQAEIgJABQgNAAgKgJg");
	this.shape_363.setTransform(-21.2698,-1.7027,0.123,0.123);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#33302C").s().p("AEAEdQhlgDg8gLQh0gVjYiUQhghBhqhYQiRh3gRgyQgCgIACgZQADgYgDgJQAPAOAdAeQDKBPC4CgQBrBWBdATQBpAUBzg7QAVAFAWAbIiYCOQBrgQBMhIQBWhSgxhZQAKAQCEBPQB6BLgZAYQgLAChVAJQhLAHgEAEQgEAEAPAjQAJAjgiAKQgeAJhGAAIg2gCg");
	this.shape_364.setTransform(-3.2796,-26.795,0.123,0.123);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#4B443E").s().p("AhIJ5QgmmeANmvQgehRAKhdQALhlA4g6IAOgNQANgOgGgRIhXgVQAsgeBBALQAhAGA2AMIApAYIhCJpQAUBmAAAzQgBBTgmA9QAkAQAIAyQABBGhDBTIgMAoQgHAXgCAYg");
	this.shape_365.setTransform(48.2496,20.4629,0.123,0.123);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#544B42").s().p("An3AgQgQgEgWgOQgWgOgEAAQCvgYEfAUIDpARQCGAJBigCQAggGAYgcQAKgNAcgvQAWgnAUgQQAdgZArABQgHAbgFAyQgGA5gEATQgEAVgRAvQgMAuALAmQg1ACg1AAQm6AAnfh6g");
	this.shape_366.setTransform(-50.4588,6.4997,0.123,0.123);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#62251E").s().p("Al8DEQgOiPA0iBQA0iABrhbIAAAAQBYgoAHAvQAFAlgsBQQgZBOALAeQAOAnBLgoQAphwBHg8QBThGBuALQANAFA4AMQApAJAVASQgGAUgJAFQkVCcAQAPQAIAGAGAQQh6BMgtAfQhWA7hJA/QgMALgmAtQghApgSANQgNAIgLAAQgnAAgMh2g");
	this.shape_367.setTransform(17.9021,-36.3515,0.123,0.123);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EBD6AC").s().p("AmcB8QhVgeA2hYQAohABJg0QBLg1BKAiQANAGA2AfQAtAaAiALQBJAYCXAXQChAYBEATQAZAHAVABQAFAEgYAmQgPgBgHABQlTAohcAIQiCAKhdAAQh9AAg4gTg");
	this.shape_368.setTransform(10.1727,4.3636,0.123,0.123);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#7E7366").s().p("AmqCpQA1gsBag7QCSheD4h+QE/ihBBAZQAFACAJAQQAJARAEAEQAXAZACAYQACAUgNAKQgMAKgRgIQgSgKgLgcIgsA6QkABtjoCfIEFhKIA1AfQAvgIAIAkQAJAlgqAXQiSgJkKA/QilAngtAKQh1AYhaAEQAog8BRhBg");
	this.shape_369.setTransform(28.0252,-36.6265,0.123,0.123);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FCFCFC").s().p("Ag/CuIgKgiQgKgkgOgQQg2hEhCgQQgsgKhsAGQgGgFAMhTQAKhRAGgFQADgEBNAWQBWAYAUABQAtAECPgPQCDgOAYAHQAtANBABuQAiA6AvBiQgugcjDAlIiCAbQgsAJgOAAQgEAAgCgBg");
	this.shape_370.setTransform(1.1176,-20.9135,0.123,0.123);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#7AACC9").s().p("AEKCbQhxgXhLgcQhSgeixhSQjAhYg0glQgQgKgIgHQgMgKAAgOQAfAPBEgRIBMgUQAkABBRAVICUAmQC7ApAxg4QAiguA+A9QAiAhAxBNQArBCANAlQAVA8gQA8Ii9gqg");
	this.shape_371.setTransform(35.8364,1.9178,0.123,0.123);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#2F2D2B").s().p("ABUDyQgwjVhrjzQgqhggcgzQgbgzg4hWQgqgvhVhMQgqhDAXgYQAUgVA2ATQA1ATAkAoQApAugOAtIAAABQAogUAHAPQAHAPggAhQA2CSCLEBIDhGbIBDCAQAsBXAHAoQALA6hrAuIhZAiQgxAUgTARQAQjpg5j5g");
	this.shape_372.setTransform(-22.4345,-52.1276,0.123,0.123);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#2D2927").s().p("AjTGwQgBhCACgxQACgoAejYQAYiqgKhMQgCgWgYgOQgZgPgGgVQgIgdgFgrQgFg0gDgPQgOhLg+gzQAMACA3gEQAugDAPAJQAIAFA9B2QBGB7A1AgQAMAIAgACQAcACAKALQAKALBjCbQBjCZAGAOQALAcADAdQACARABAoQAEA1gBAGQgCAqgXgCQhqjmhtixQgVgqgRgZQgggvgUAUQgZAXhEEwQhLFKgSApQgLAAgCheg");
	this.shape_373.setTransform(19.2937,14.5333,0.123,0.123);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#6E96A9").s().p("Ai1DHQjLhtiliQQhOhFgggnQgqg0gihQIAAgWQBtBwB3BbQBsBTCRBVQA7AjBTA4QBIAnBlACQBkABBog6IBQgsQAugXArgHQDBgeA6AlQBIAvgeC5Qg2gJgBhqQAIhngHgBQgWBAg6ADQhJgHgnAKQgZAHhYBMQhUBJg2AKQgZAFgdAAQiNAAjYh2g");
	this.shape_374.setTransform(-6.2046,-58.9364,0.123,0.123);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#332E2B").s().p("AE8DbQgOhhhwAGQhdAFhRA5QghglgagQQgggUgsgHQgIABgOgBIgWAAIjEh3QCZkJDTBGQC0A7CQD+QAOAZAGAlQAHAoAEAIg");
	this.shape_375.setTransform(66.2942,27.9672,0.123,0.123);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#2C2826").s().p("AlDD1QAsgXAKgOQAJgOAqhKQAqhKACgHQAFgVgMgpQgKglAIgPQALgSC9hpQDBhqALALQgEAjBLCJQBFB/gRAcQgMASidBNQiqBTgWASQAHijgKgyQgQhVhkB9QgSAXgZAtQghA6gKAOQg2BUhFAOQgHgjAdgPg");
	this.shape_376.setTransform(18.2873,31.8703,0.123,0.123);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D3C3A7").s().p("AijEuQhggIhzgtQiVg8AKhIQAVgbAIAAQAGAAAXAMQAbAJCUBMQCMBDAUgRQATgQglgeQgxgogEgHQgJgSgZhgQgZhgABgOQACgwBuhWQBrhTA2gEQA7gFC1ARQCmAPBSgMIABAAQAHAkgXAIIg1AHQhTANhvACIjEAAICvDaIguARQgSgcgogYQglgXgkgGQgmgHgLASQgMAUAcAuIgJBJIhshsQgDAaALBCQAPBVACAaQAJB8hYAAIgLgBg");
	this.shape_377.setTransform(-39.2977,19.4215,0.123,0.123);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#2A2625").s().p("AAbC0QhegYhegoQhWglgLgRQgLgRgFhVQgGhcgKgZQBjAdCDgaIBvgZQBFgQAvgGQgWA4BGB5QASAeAhA1QAZAqAAAOQABBXh1AAQg7AAhZgWg");
	this.shape_378.setTransform(63.8271,39.5999,0.123,0.123);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#EECD6D").s().p("AOEENQgHgBg1gLQi+gqjshHQhbgalGhnQoYinlOg9QgrADgPgBQgZgDAIgrQAjgUChAPQBeAIB9ATQAcAHAQgFQATgHAKgaQBRAKBABBQJ9BtJVEbIAgAsQgNAYghAAIgFAAg");
	this.shape_379.setTransform(-5.1913,-7.0028,0.123,0.123);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#2D2926").s().p("AmIAXQAWhTgLg8IMngqQhiBPhpBJQiVBog+AQQg1AOiiAHQiWAIhIAZQADgWAeh3g");
	this.shape_380.setTransform(17.1185,42.6278,0.123,0.123);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#574F46").s().p("ABBDIQgFgJgGgcQgEgUgJgDQgUgGhBAEQhSAEgPAAQgdgCgRgDQgXgFgSgMQABgcgLg4QgMg9AAgHQgCgfABg4QABg9gBgbIGfgWQAFCgAVBWQAFARARALQAJAGAIADQABAEgBAHQgBAIABADQAvBAgvACQAEAqgEAJQgGAPgkALQglALgbAAQgrAAgPgeg");
	this.shape_381.setTransform(-13.5072,-31.2602,0.123,0.123);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#73685D").s().p("AwVEMQgJiPAehQQAbhIBCgjQA2gbBpgNQBAgICagOQEGgeIQhAQHQg1FIgcQA9Ayh+AlQkqAbmuAvQnjA2jwAZQiJAMg+AHQhpANg9AbQicBEAHDog");
	this.shape_382.setTransform(36.578,14.7485,0.123,0.123);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#35302C").s().p("AJZFpQgJAAgIghIgRhIQgZhognAAQiNgSkDgCQkfgDhugJQj0gVhvh2Qgxg1guhbQgXgwg/iUQA6gFAtA4QAaAgAuBGIAAAAQBNBYALAIQAmAbBcAIQAJAGAkApQAhAmADABQBGAPC3gIQDlgJAnABQARABATALIAQALIqjAAQgEAOAwAQQApAOANAAIPAAAQAHAABUBXQBbBTAvgRQANAQhrA8QhjA3gfAAIgEAAg");
	this.shape_383.setTransform(-47.761,53.9107,0.123,0.123);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#766D62").s().p("AvVG/IAWgVIeAvhQBIBWimBMQhlBEmFDWQmgDkgkgEQgNgCgUgMIjFBtQi0CfjyBlQhgBPhdAhQgfhIgigxg");
	this.shape_384.setTransform(12.9554,30.6708,0.123,0.123);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#534C46").s().p("AMABzQiriIjvAuIgggrQhegCjIADQjBAChlgDQkngNkgACQgxgJgUgVQgZgaAWgqQDKARGTgPQGkgPC7AMQA9AEBeAQICdAdQC/AeB2giQAOA+gCASQgBAOgLA5QgHA5guAIIgQABQghAAgugTg");
	this.shape_385.setTransform(-41.8465,54.5502,0.123,0.123);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#74695D").s().p("ANZB/QrshysPA7QhEgEg9gvQgTAkgsgBQgoAAgsgbQgsgcgVgkQgYgpARghIANgVQAkAAAyAlQA1AoAoAFQAXACAXgJIAYgKQBbABEeANQDqAKCQgCQAzAAFzgeQEmgYBxASQANADAUAXQAWAZANADQAeAIAbgLQAOgGATgKQANgFAJAUQALAXAPBHQgbBChcAAQgZAAgdgEg");
	this.shape_386.setTransform(-43.246,52.716,0.123,0.123);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#5B4832").s().p("AkKGAIgWAAQhGgogGhtQgFhcAlhWIBcgZQDJAoBtgUQCZgcjEiZIgKggQAKg9gQglQgLgdgigYQgngbgTgQQgfgcgMgoQAKgJAyAUQAPAFBdArQCgBHApgUQgZANgNAFQgZAKgXgHQASA/BdgeQAYgIArgSQAhgMAHAFQhIDcgSBaQgkC1AmCNQhmhMhqgnQh3gsh0AGQgQADABARIABAYQAXAaABAvQABArgQAlQgRAmgZAEIgFAAQgZAAgYgqg");
	this.shape_387.setTransform(-37.4933,32.12,0.123,0.123);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#2A2725").s().p("AjsEkQhRgugqhHQgGg0AGgkQAgg9BVAnQAYAMAxAbQAtAXAbAEQgJgehqg7Qhug9gZgvQgOgbgQh6QgPh6ALgMIDxAAQgGAhAGBFQAFBQgBAZQgFB0htgQQAAALANAOQAMANAKADQAaAEA/gZQAcgKBjgvQCzhSA3AOQAIACA6AiQA6AjADAEQAMAUAJBBQAIBCgJAIQgPAPjTASQjOARgvgGQAGARAKBgQALBjgFAHQhcgShFgog");
	this.shape_388.setTransform(60.9108,35.7741,0.123,0.123);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#463F38").s().p("AG4DlQgKhXAVg2QgUgPlMA4QkrAyhfAYQgiAJgqAYQgpAXgMADQgYAGgSgWQgUgYgXhEQA0gYAjgUIDwhSQEogBERhFQg6ANiwAMQjJAOgMgPQgVgZAEgRQADgSAcgPIGajpQAVgHApgYQAlgTAgAHQASDRgECiQgEC3ggC7QgZhIgIhHg");
	this.shape_389.setTransform(13.3147,51.8859,0.123,0.123);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#2F2B29").s().p("ACZCdQh2gUgmgDQg1gGh2AHIgJgIQgJgHgKABQgKAAiYAXQiAATgJgHQBbjyDlhNQDPhGECBVIAAAAQAJADAiATQCMA+AjCFQgngYhUALQheAMgIgCQgMgDgXgXQgZgYgPgHQhfgmg3gKQhVgPhGAgQgdAMgRAdQgTAfAQATQATAWAVgcQAMgOAOgXQBPgQBOATQBFARBOAtIAWAWIAAAWQgRAqgYAOQgIAFgHAAQgUAAgLgng");
	this.shape_390.setTransform(-15.5258,24.9778,0.123,0.123);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#D45239").s().p("AAhDxQhwghhKhAQg5AqhjgQQhjgPgdg7QAFgcAlhjQAmhmAKgHQAJgFC5gRQDCgRAdgIQAZgvAugNQAfgJBCAEIABAAQAHAHArBaIA7B5QAIAPAxBKQArBIgNANQhKgFg5hSIguhEQgbgpgZgWIgLDEQhCg+gqgrQg4g5grg3QANBbgQgFQgEgChGhHQgNgNgQAOQgNAMAAAGQAAARCRB1QB2BeA/AsQgSAxhBAAQghAAgugNg");
	this.shape_391.setTransform(-39.4225,-23.1723,0.123,0.123);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FCFCFC").s().p("AhDD8QhIgPgZgCQgUgBgfAKQghAKgJAAQhAABAjg5QAIgNAbgiQAWgdAFgLQAKgYANhFQALg9ASghQAKgSBShTQBQhTAKAAQAVAbCBBMQB9BKAKAPQAMATgTByQgTBvgNANQgGAGhlAgQhkAggRABIgUABQghAAgugJg");
	this.shape_392.setTransform(-7.9875,-22.7636,0.123,0.123);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#3C769A").s().p("ABOosQAJA5BAEyQAuDdAJCPQgjAhitCdQiBB1hKBPg");
	this.shape_393.setTransform(-19.4418,8.5039,0.123,0.123);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#1E1C1A").s().p("AHRENQiNg4hBgQQgQgEihgXQiNgUgHgJQgHgJADgyQAEg5gCgMQgQgGgOANQgMAOgCAAQgDAUgIAKQgOATiLgkQiDgigggVQgJgSgogmQgugqgOALQgFAfgdAdQglAfgRARQAgAagVATQgUASgigUQgLgTgEgKQgIgSAKgRQA2goBdhnQBbhjA7gqIAngHIMNGiIA0ADIAnABQATABAdgCQAHgrAMAAQAMABANAqQAkgCAeARQAiAUgNAeQgXAMAAAmIACA7QgVAEgZAAQhEAAhfgfg");
	this.shape_394.setTransform(57.3308,27.829,0.123,0.123);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#316281").s().p("AjCDEQhxhticjkQixkDhPhaQApAPAagmIAqhWQgXgYAGgLQAGgKAgACQAJAMAYAeQAVAcAMARQDLFADqEiQARAQAuAzQApAqAaABQCLB5CXBdQCjBlCeA4QASAMARASIAfAjIgNAYQgIANgMAGg");
	this.shape_395.setTransform(-54.221,25.9599,0.123,0.123);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#716659").s().p("AgjCOQj/gQjUgbQgogLgngCQgygCgXAPIgWgrQEehkF+g0QDGgbHngnQgFAOgSAoQgQAigFAVQhOCLh7BNQkWgJi9gMg");
	this.shape_396.setTransform(-51.2617,5.2708,0.123,0.123);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#312D2A").s().p("AgkDNQhmhMhiiPQhYiBguh7QAgAHDJgJQC8gIAOAKQAFADAcA6QAjBIAdAsQBnCeBqgeQhKDBhzAiQgYAHgZAAQhPAAhahEg");
	this.shape_397.setTransform(67.7708,49.0077,0.123,0.123);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B99867").s().p("AjhFCQhGgrApgtQAKg2ArhfQAthlAhgfQAggcAPgFQAUgFAqAOQAcADgOgUQgNgSgogaQhnhCghASIAHA6Qi2B/BDCMIgXAtQg0A3g5h5QgTgpgJgWQgPgoAIgbQARg+B2h6QA0g1B5hwQAUAuATAOQAIAHAzAUQgCgUBfANQBfANAPAPQAZAXgKAdQgKAdgiAIIgNAJQgIAIAVAEQBIACBaAcQBdAdA0AnQA8AsgVAnQgYAuiEAfQhfBZhJgUIghAWQgVAPgMAHQgBAihGAsQhBAogrADIgLABQgyAAg5gig");
	this.shape_398.setTransform(-38.1789,43.9166,0.123,0.123);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#2F2B28").s().p("AgNGeQgpgehXjCQhajRgXguQgKgVgqgxQgmgtgDgMQgDgNAqhmQArhmAMgKQAhgZA6AMQBOASASgCQACAjgnAlQgvAtgIATQgkBYAfCPQAbB7A7BiQAEgtgPhBIgehzQgmiQAthPQBDh1CPAiQAdAHBgAiQBPAcAtAFQgaAkg8AmQhKArglAXQiNBVgKBcQgCAUAOCOQAOCOAFALQAJARAgAVQAfAVAUACQAZAEBFgVQA1gKgJA1QgQgCh/AFIgWAAQhNAAgggXg");
	this.shape_399.setTransform(2.7577,2.7594,0.123,0.123);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#635B51").s().p("Ar8HBQgKgQgCgGQhCiXBCgCQA9gnBChVQBch1AVgVQApgJAFAKQAFALgdAfQBYA7gXg7QAYjxBVjuQAOgHAXgZQAYgTAaAHQgMCZglDgQgEAbgaA3QgQAvAeAdQApAoBOgbQAGgBB0g4QCehMEUijQFBi+B1g+QAeAJgdAXIgrAZQqKGvpFFDQhhA2gmASQhRAog9APQAAgGgJgPg");
	this.shape_400.setTransform(14.4592,46.3753,0.123,0.123);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#776B5F").s().p("AEuIXQgkhuhJhsQgMgfgZgiQgZgigEgKQg1gVgzgOIhTiWQifiugejYQjDiyCHALQATAEBIAYQA7ATANgBQAHgBAEgTQAFgUABAAQARgJArATQAoATAoAjQBnBYgfA9IhWgLQASA2BNATIA4ALQAcAFAHAGQAbAYACAhIACA3QAIAgAOBTQAMBHALApQAJAfAfBHQAjBPAMAmQAwCQhGBAg");
	this.shape_401.setTransform(82.0579,19.245,0.123,0.123);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#5C524A").s().p("AD/MbQhUgcg0g7IgggFIg3AAQgrhYhLhAQiWllhwmBQAGgTAMgHQANgIAQAKQgoiLARhWQARhXBZhlQEUi0AzAGQAHABAYASQAZAVAKADQhCBqhWAwIhPAoQg0AbgqAgQhjBJAYByQAPBDBGCUQBBCpB1EPQCfFnAnATQAMAGAvAEQAlAEANATQABA4gxAAQgTAAgbgIg");
	this.shape_402.setTransform(-56.9034,42.7054,0.123,0.123);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#47413D").s().p("ACDGzQgPgBiFiRQiAiKgbgmQg+hWhIieQhhjWgWgpQAYgkA7gJQA5gKAkAVQAYAPADAnQAEAsACACQAIAJAmAPQAdAQgWAYIg5AIQg0AJAAAbQAWADAxgPQAvgPAUAEQAHABA/BJQA+BIADAIQARAmgOAWQgJARghANQgoAOgTAJQghAQgLAXQAigDAugPIBJgZQBWgaBAAmQAVANAUAWIAfAiQAkAiBFgGIBWC6QACAagTAVQgWAUgEAJQgkANg1gBQg5gEgeABQgKABgcAOQgXAMgMAAIgCAAg");
	this.shape_403.setTransform(-15.1283,-47.8571,0.123,0.123);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#1D323D").s().p("AiBDxQg1hkgDhVQgRgFgGAgQgFAdgagNQgvgXgyjEQgrisgChYQBighAZApQAHAJAOAoQANAnARAZQAwBGArATQA4AYAGhgQACgbgMgZQgMgSAAgCQgYgJgHgRQgGgQAJgRQAXgoAxALQgMAqAPBQQASBcgBARQgBATgYAdQgVAZAFAYQAbgYA1g4QA1g3AegZQBjhUBsAEIiDB4IDEAhQgOAThPBFQg2AwgSA7QgQAzATAPIARAJQALAFADAHIiwAKIhgESQhKhlgig/g");
	this.shape_404.setTransform(-41.9932,-4.6809,0.123,0.123);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#48423C").s().p("Ah5FIQhUhGhKhPQhyh4AKgvQBMgjC3gpQCugnBUgsQBEgkA0gwQBPhJgogsQAGgBAPgKQAOgKAIgBIAOA2QAGAeADAZQAoBrgVCGQgVCBhEBnQhJBuhmAiQgpAPgrAAQhJAAhOgrg");
	this.shape_405.setTransform(-40.8951,62.9077,0.123,0.123);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#2F2B28").s().p("Ap7kCQAEgTAZgPQAXgNAdgDQBJgFgCA3QIBBhINAOQAEhrBHgEQAQCjgcCEQgcCEhQCMg");
	this.shape_406.setTransform(-51.4954,9.6759,0.123,0.123);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#37322E").s().p("AvBIvIABhPIAUgzQF3i1GWjtQF5jcF0j5IAAgBQBfgyDIh6QAhAjAWAkQAhA1gPAYI9zRbQgOgZACgwg");
	this.shape_407.setTransform(16.9852,46.2639,0.123,0.123);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#2C2927").s().p("Aj3J8QghgGgkg3QAWhMAEjkQACjWAghLQARgoGHmoQBfhnBFgyQADAXgHAcQgFAQgMAgQhRD6heD6Qh7FNhOCPQgUAlgdAWIhMhBIgBAAQAWAtABAzQABAwgRAfQgQAbgXAAIgIAAg");
	this.shape_408.setTransform(-27.4807,26.1384,0.123,0.123);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#387198").s().p("AMTIhQiFiWjYiMQimhskEiBQkqiOiRhHQj+h9iXhiQhDhNgKglQgOg3BjATQF0CZGZDbQFbC7GQD4QAcgWAZAQQAZAQgNAiQBwBFATBUQAWAYgCAiQgDAfgUAYQgWAYgbABIgDAAQgeAAgYgdg");
	this.shape_409.setTransform(-72.7648,13.2194,0.123,0.123);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#72A6C3").s().p("AOwH2QgNgBgOgVQjWiWjOjfQioi0i4j+QgXgKkFBYQj4BUg2AcQhOBiiUAnQAKAfgIARQgIASgdgDIirgqQgQAbgngKQgkgKgSgcIAKghQAFgSAQgPQBWhRGSisQGPirB6gLQAlgDAaAHQAQAEAmANQFfD6DuF+QAcAqA4BEIBbBsQAVgEAGAOQAFAOgKAUIAJAhQAFAVAIAMIgWAAQgFAWgLAAIgBAAg");
	this.shape_410.setTransform(17.2539,-15.5356,0.123,0.123);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#2D2A27").s().p("AnMNSIAAAAIgqhIIHMybQC1jSAagdQB8iEBwhQQAZACAsCxQAsCwgPAQQheARh4AnQg7AUiYA4Qi1HGgpBgQiCE2h1DmQAdAmgZAqQgTAggfAAQgJAAgKgDg");
	this.shape_411.setTransform(-21.6718,21.8261,0.123,0.123);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#756A5E").s().p("ADdJDQgcgtgShEQgRhDADgwQgTgmgGgNQgIgUAMg8IgigtQAvhegNhkQhHhLhOhRQg3AGgjgOQgxgTAFg5IgYgTQANhZgfgzQgYgohXg/QhNAzhihfQgcgJAcgNQA1gkBkAOQAbAEAyAKQArAHAXgBQARgBAVgQQAXgRAHgCQAhgFBYAsQBbAtAMAfQgHAigZgCQgTgCgjgZQgogfgTgMQghgVgRAEQASAhAyAjQA6AqARAUQAOAQAHAXQAIAZACACQBsAPArCWQBhBRgeBSIBHB6QAwBWAMAfQAIATARBKQARBNgCALQgHAqgmAwQguA6gkgtQgagfAKBcQgaBOgiAFIgEAAQgcAAgdgvg");
	this.shape_412.setTransform(-6.7667,33.6031,0.123,0.123);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3F7CA6").s().p("AHNEfIlDgyQh0gfhlhOQgYAYgMgHQgNgGAFghQk+i7lRi3QABgCgBgKQgCgJACgBQIZgbIiAPQArAPBBA4QBKBAgWAeIgnAlQkAgrlagWQGkBuGLCtQBtA8AZAsQAWAmgtAVQgoAThSAAQhQAAhXgRg");
	this.shape_413.setTransform(-69.0818,10.5522,0.123,0.123);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#2C2826").s().p("AkwIsQgJhjAciPQAkieALhRQAZgDAAAdQAAAQgGAgQgCARgkCdQggCLAHAGQADADAZgCQAdgCAIACICEwCIFAIyQAGAXApBaQAjBVgNAWQgPAakfCgQkFCTgnAAQgEAAgCgCg");
	this.shape_414.setTransform(20.4676,20.069,0.123,0.123);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#2D2927").s().p("Al1jIQATgXAygKQA5gLAPgKQASgMAQgmQAQgnAUgRQAWgTBhgnQBcglAkgHQBMgNAZAeIAYAlQARAbAWAUQARAQAuAiQApAeAQARQAQARB2CcQBhCAAfAPIAAAAQAEAYgBAXQgBAigMAGQgOgIgbgmQglg1gJgLQg7hGgoBHQgdAhgLgFQgKgGAGgsQAggVgJhFQgIhCgfgRQhrg7j0BmQhhAphaA4QhYA1gsAuQgoApglBHQgmBSgVAnQgjBCgoAkQg0AthMANg");
	this.shape_415.setTransform(-16.8504,23.041,0.123,0.123);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#7B6F62").s().p("AKeIlQgWgMAAgLQgBgMAXgJIgUguQiFiGgri/QgdgGAdgQQhjiVikh4IABg6QhHAvhSgfQhGgbg8hMQgKAYAIAdQAGAUASAeQgCAbhnAYQhOARg6AEQgRgGhPgvQg5gig3gBQgygChPAVQhPAVgqAaQgNAPgOABQgPABgIgPQgZg0CchIQBAgdA8gPQA/gQAcAJQAPgdANgKQARgMAeAGIBoAAQBAgFAegcQALgKgCgWIgHgpQgHg3AvgOQASgaAxgNQAtgNA3AEQCBAHAfA/QA+gWgSBwQBOA8B9B2QCbCTADAmQACAXgOAaQBLBzBPDFQBoEAg+Aqg");
	this.shape_416.setTransform(-15.982,33.3239,0.123,0.123);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#585047").s().p("AAsHeQhLgNA0g1IA0guQAfgbAHgPQAJgSgKgNQgLgKAAgBQgcgMAcgKIANgNQALgOgLgQQgHgJg8glQgtgdgJgvQgJguAOgsQAFgTAZgzQAVgqAEgcQAEgogWgtQgYgEACAhQACAkgNACQhlASh0gcQiEgphLgQQgQgoAggUQAegTApAOQAHAFAtgDQAugEAMgIQASgMACgYQgBgdACgNQgagFgNgWQgMgUAEgXQADgXASgMQATgNAdAJIAwATQgsBnCCgQQBigMBegyQAGgdAQAdQAKgfAMAAQANAAAJAfIBKCQQA4B3gVAVQgEAEgXgGQglgLgGgBQg8gLgBA5QArA/AxgTQAZgKAZgWQAbgBArDKQAqDIgMArQgDALgeAGQgjAIgKAJIhGA7QgiAdgZAMQglASg4AAQgmAAgugIg");
	this.shape_417.setTransform(68.1661,36.0729,0.123,0.123);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#2E2A28").s().p("AA4CbQndhFnOiEQgvgLgbgIQgygPgHgVQBAgRB8gTQCCgVA6gOQAVgFAigYQAggXAGAAQAEAAAeARQAhASARAFIKOCdQF7BeEMBSQAcAJBFARQA7ATATAfQncgBnjhFg");
	this.shape_418.setTransform(52.8575,42.4002,0.123,0.123);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#D8B883").s().p("ApfEqQgUgEgxgNIAAl9QAAgTClhdQCphfAqAEQBoAJEBBvQDxBnBsBJQAQAKAVAfQATAbAIACQAcAIBHgGQBLgHAdAFQgNAXg3APIhUARQgxALg8AIIhuANQgsgnhLAJIAxABQA2AGgGAXQkIA/iQAfQkBA3iaAFIgMAAQgdAAgfgGg");
	this.shape_419.setTransform(11.8798,3.5611,0.123,0.123);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#65261D").s().p("AlHCEQiNhHhAhEQhRhWgTiHQAsAEByAFQBoAFAxANQAXAGBaAzQBOAtA3ADQBDAFBAgiQBkg1ATgGIhtCYQAnAABQACQBFgBAwgPQAogMAlgnQAngoAIgDQAVgIA3BJQAZgEACAsQABAhgJAcIAZAHQALADARAPIAbAZIAKgVQAAABANAKQALALgCAIQgFATg6AQQhDAQgXAGQkKBRiMAFIgbABQi4AAi+hhg");
	this.shape_420.setTransform(-44.0115,-28.3117,0.123,0.123);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#66271E").s().p("AksC4QACkLgzjIQAkgCBHAFQBAAAAngXQAWgNBAiJQA0hwAXhDQAlgIAIAWQAEAOAFAlQAUBHAGBCIAHCJQACAbgBAYQAEAHAngaIAiAWQBFjKAEjDIAYgSQAaBJACCrQACCgAkBMIAAABQhZBRhvBvIjBDIQAIgtAsi2QAkiMgBhbQgVgdgzDmQg5D3gNAJIjkG1QAZldABh6g");
	this.shape_421.setTransform(2.2083,-44.5663,0.123,0.123);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#302C2A").s().p("AFbDPIhYgEQgmgDm6hAQmAg4gqAOQgTg2AGgUQACgHAhgxIBeg1QFag5Ftg0IAYAfIA0gnQBcgDCFAqQCZAvAcA+QgSA+hNBcQhRBgg1AKQgZAGgtAAIgQgBg");
	this.shape_422.setTransform(28.9849,-32.5538,0.123,0.123);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#E0A844").s().p("AhgANQhRheikiqQisizhLhVQgEgaA2goQAQgMBAgnQAkAIAYAKQAjAOAQAPQEoEIDLEsIABAAQAGAGAvBHQAbApAHgfIATAnQAJAYgGAYQAZAFATgQQAIgFAXgdQAogyBajWQBajWAKhCQAXgQgBA8QgTCEg5DZQgQA5g3CDQgoB1AiBBQgUAtgQAeQgdA4gLAAQgLAAgMgjQgMghgTADIgsDwQhXkvkPk9g");
	this.shape_423.setTransform(39.0221,-5.8711,0.123,0.123);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3A3531").s().p("AspD5QgtgIgzATQiLADh7ATIgWhBQFihCEQg9QFPhKEahSQAHgGgegcIg9g8QhThYBIgjQC/BEGHA1QGYA4CsA3QAjALAHAEQAXANAEAWQimAWlIABQlPACiiAVQiRASkiBOQkpBPiEASIg6AuQgxgdglgGg");
	this.shape_424.setTransform(21.6866,5.4338,0.123,0.123);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A97935").s().p("AChOtQhnhfgigxQhHhoiFp2Qh4o4gVjkQgXj0AqhyQgBAxAJA6QANBLABAPQAqIJBvHMQBBg/BjApQAeANA1AfQA5AiAWAKQAIgLgZiiQgci2AAgaQAAg4ADgOQAIgoAigKICDV0IgGAYQgFANgLAHQgngzhshkg");
	this.shape_425.setTransform(-14.4839,7.2918,0.123,0.123);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#65261D").s().p("AiqK5QgXgKhOg9QhThBgpgXIgngpQABgXAugyQArgvBAgyQCah6A7ANQBGhpB+hRQgGg9ARgiQAVgrA6gGQg3iRA/hLIimjuIAYgwQgDgFgLglQgNgvAVADQAQABAqAhIBIA3QAnAbALgIQB/C4AjCqQAnDAhGDDIgrgWIgXCDIhWhXQgHAeAVAvQAYA4ACAPQAGA3igCLQixCRgkAlIgaALQgKADgLAAQgQAAgSgIg");
	this.shape_426.setTransform(-35.3722,-43.6635,0.123,0.123);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#983929").s().p("AgvKsQgngEAJg3QAahAhbArQgZAXgHgHQgHgHARgfIABgbQABgRgNAAIiOCDQgFghAnghQAsgnAEgSQAJgqABiKQAAhygEhLQgBgegIgpIgNhGIArAgQAdhjCCg/QB4g7BxAPQASgSg8iTQg2iCgfgwQgQgZhGhIQg3g4gPgyQBLApBIBIQBLBLAnBKQAoBNAnCJQAoCPAUCRQAzFuhmB4QgNAQgVAIQgbAKgFAEQg5guhfBhQgqAegfAAIgGgBg");
	this.shape_427.setTransform(-25.586,-49.3051,0.123,0.123);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#23211F").s().p("AiAEnQgugNgUhWQgNhWgEgFQgCgDgcgFQgdgFgNgNQgdgcg8hqQg6hognghQAAgZCcgZQAkgGCdgVIADDNIA+ESIgrnfQAcAVBMgYQBLgYAMALQADADABAUQAAAQALgBQAxgzBuADQAeABA+AFQA3ADAhgFQgJAvAQBQQARBZgBAjQgBASgdBmQgdBngHAMQgQAahlAHQhjAGgPgWQgKgOACg2QABgpgZgCQgDAPAEBFQAEA+gGAGQgHAHh+ATQhrARgXAAIgFgBg");
	this.shape_428.setTransform(26.2647,9.8066,0.123,0.123);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#5F574D").s().p("Ar8IaQgklSASj9QAQjrA6jkQBGkbBsiTQBThyChguQCpgxBuBMQE0DWDTGqQCZE1B8HhQACAqgQgLQgPgJgKgbQhckDgvh/QhUjlhUiUQgthQiKinQh8iVguhmQgTgUgCARQgDAcgCACQgGAFgzgJIhygVQi0gchWAqQgiAQhIBMQhKBOgLAhQgHAWAMADQAHACAXgGQAXgHAGACQALAEgKAXQgLAagyBOQgwBIgRAvQhiEYAdGUQAHBhAcD3QAZDZAFB8QAEBdgBAMQgGBBgpARQg/k5gckTg");
	this.shape_429.setTransform(-20.3972,46.1046,0.123,0.123);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#3B3532").s().p("AkFDUQgTgCgJAbQgKAfgTAGQhIAZhZgLQhsgMgXhAQB7gDB6gRQCFgTBrghQALgEAegGQAXgHgDgUQg/AFhlARIikAbQjDAciEgiQgIgegNguIgXhMQAThWAvgbQAwgbBsANINPhgQCCgLBCgxIAAgWQAZgjAaAIQAZAHAMAqIg3ArQAVASAdgDQARgDAlgQQBQgiAtARQACCBhIAJQgSACgxgGQgsgGgVAFQgTAFg7A/Qg/BCglARQgqASifAXQiZAWgFAEIgOAtQgOAwgRAYQhMBphSAdQgSAGgOAAQhAAAANiBg");
	this.shape_430.setTransform(-22.5146,-25.9409,0.123,0.123);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EDCB65").s().p("AVLHkQgtgJgYgLQoVj0kKhyQmyi4mBiDQkGgfj1hNIgDAwQieBdinAiQAhAZgHASQgGASgqAEIkGgrQCklzGbACQCdABDUA3QBtAcD9BSQF9B8G2DbQErCVHfEWIgVArQgvgCgdgEg");
	this.shape_431.setTransform(3.6833,-9.2119,0.123,0.123);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#73685B").s().p("AFIIzQg2g9g9h3QhHiMgigxQiNjIjMiHQj1ijjMAnQgIgnAQgEQAJgDAegEQB0g2B4AQQBFhBBxBYQA3glgrg0Qgagfg6giQgDgJgQgOQgTgOgGgHQADgBAHABIAMAAIBQgkQCVADCiBZQBmA3CrCGQBOAUA1BTQA1BTgTBIQAAA7BfDXQBaDMgLA3QgGAcgfgCQgQgBgigNQgTAkgZhQQgdgtgsgtQg8g9gUgYQgQhRgfhUQioi2AwB5QAqBoBaB/IgeAnQAcBFAJA/QAMBYguAAIgOgCg");
	this.shape_432.setTransform(73.8047,19.1721,0.123,0.123);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#38332F").s().p("Ai1F5QnFhshUgWQj0g+gPgYQgIgNACg5QACg7AMAAIIsCEQAIgtglgpIghgiQgUgVgJgTQgRghgZhDIgqh1Qg4iRg/guQgPgLg7gVQgwgRgUgcQAWhKA3gjQAPgKBogrIA9AfQBSC6BHB7QBgClBpBqQAmA/AwBeQAtBEBYAkQB7BNCgA8QCjA8COAWQA8AVBpAyQBeAjBbgTQgMgcghgKQgVgHgwgCQg0gCgVgFQglgIgRgZIEyAAQAABghbAxQg7Agh5ATQhihOsci9g");
	this.shape_433.setTransform(58.3429,37.2538,0.123,0.123);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#D55139").s().p("AC4KvQADgNATgcQATgaABgNQACgbiihxQiph4gRgrQgMgcBEgXQBJgYAAgWQgMgJglAHIhDASQhUATAFg6QBPguAfg1QAnhDgohJQgWAFgNAjQgSAugLAMQgPAQgmAVQgoAXgRAQIg2gPQgDi3gJkZQgTALgHgXIgDgXQAQFbh2BQQgdA4gRAAQgSgBgYg9QAAjCgrirQAviBAJgoQAXhcgNhYQCEAjCKCWQBTBbB3C0QBIBvBgCuQBZCRCFB1QAUARBkBEQBfA/ADAFQAhA2g0AuQhKAxgcAaIAshiQAIgchNAwIhbA8QhvBAgbAAQgFAAgDgCg");
	this.shape_434.setTransform(9.6099,-48.1782,0.123,0.123);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#34312E").s().p("AgXHNQkTgDgTgLQgQgKh/jGQh/jGgEgTQgCgNAVglQAVgmgFgWICCB4QAYANAsBUIAsBXQAQAMBeggQBwgnALgBQARgDAcALQAYAKABgBQADgDgDgaQgDgdADgHQgCg2gSg1QgQgtgjhAIAcgtQAhgEBTgWQBYgZAZgOQA/gmAYhBQAXg8gNhOQAYgFAWAIIAqATQAZAMBbAxQBgA1AGAGQAlAog+CoQg9CjgtAWQgNAHg6gMIhwgWQiUgVAEBbQABAbAzADQAfACBNgEQBFAAAcAVQAnAbgRBHQgEARgyBSQg1BVgMAEQgYAIirAAIhsgBg");
	this.shape_435.setTransform(-10.2779,-44.2756,0.123,0.123);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#312B29").s().p("AJiJjIy7rdQg+gXgWhUQgUhLAQhgQAPheAng+QAqhCAwAHQApAHCWBeQCKBXA0AsQBlBWBuCWQBABWB8CzQBwCdBcBYQB6B1CJA1QgbA5gEAFQgQAWgUAAQgKAAgLgGg");
	this.shape_436.setTransform(-63.3395,23.3127,0.123,0.123);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#60231D").s().p("AjzCPIB5gBQAagUhxgcQh6gZgJgDQgbgKglgUIg/gjQhMgmg8AGQgIghAcgRIA5gkQBchbBohxQBWhUCQhVIAtAHQA6gfA0ACQAvACAUAZQATAagYAeQgcAihKAWQCNByCyCNIATAyICxhpQCWgGiUCUQg0AsgUAUQgiAigVAvQggBKgLB9QgOCWgNAzg");
	this.shape_437.setTransform(8.5612,-39.8635,0.123,0.123);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#76644E").s().p("AnXIDQgHhmAOgiIBAg4QhGhIAbg8IAVgMQAHghgigmQglgpgBgdIAIgcQA1gIAGggQAFgcgcgzQgoimAogYQAogYBbCQQBqAlAvCUQAFBtBSBdQBaBmBkgqQAIgEgEiBQgDhsgFgvQgBgJAPgJQifhUg/iQIhqhrQg+gRgYg3Qgag6A+gXQEBAkC2g8IAAgBQAjgFBHgiQBbgqATgHQA3gUASAUQAVAYgaBWIivgVQgEAZAMAMQAIAHAXAGQA3AOALAmQAgBmhjEuIhPDnQgpB9gKA8QgaAygoANQgzAIgfAKQhFAZgmAAQgxAAg5giQAmAuAGAyQAHA6g3AIQg7Ayh0gcQgRABgbgJQgbgLgFABQgJAAgKASQgKAUgEACQgVgegHhpg");
	this.shape_438.setTransform(-35.3202,22.6773,0.123,0.123);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DACFB7").s().p("AkRFoQgWgCi9hTQjDhWAAgPQBYh4A2hsQALgVAahEQAahDASgkQA9h4BLAHQAKABBoAxQBkAwAYAOQBKArB6BjQCSB0AsAfQAMAIDNBxQC/B1gnAkQgKALgugkQg1gpgfgBQhrgCkxA/Qj4AzhxAAIghgBg");
	this.shape_439.setTransform(5.4719,-35.2859,0.123,0.123);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#DA583D").s().p("AtCJdQgcgLAcgLQBXjFA3hoQBKiNBniQQAMgSAvgpQApgmAHgPQAIgTAEgyQADgtAQgdQAeg0CMhEQBKgkCBgyQBTgGAwAMQBBAQAsA3QA8BaAeAiQAoAsAlAIQAnAJA3gZQAwgWBcg9Qi+h/gPieQADAAAKgMQAPgKAVADQATADARAQIAYAWQFNEygbELQiQAPhVAmQhqAxhCBoQghAOgZhJQgDgpgFgXQgIgqgcgDQATCMAEBDQAHB0gTBbQgTgygqiTQgkh9gihGQguhbhLhcQhVhnhLgrQghgSgOgDQgfgIAAAfQBIAaBBBLQAfAjBHBoQgFA5g2gdQgigSgxgyIggASQgBAjgXAqQgWApgeAYQghAagZgKQgdgMgLg7QhJgkhdBwIgfgLQAJAfgfgJIiDEcQgBCDhAgWQAZBAhIAYQggAKgfAAQghAAgggLg");
	this.shape_440.setTransform(-33.4655,-50.6666,0.123,0.123);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#140F0F").s().p("ApiJgQgZgWgUgrQgUgqgEgmQgGgpARgRQgYgYglgBQgtAEgagBQAGhMBvAPIAPgaQAChpAfhMQAihQBKhBQAPgMBEgnQA6gmgUgVQhFgRh8gqQiHgvg7gQQjmhAiqA3QgaAYgVgIQgRgHgEgXQgEgXAQgKQATgNAlAQQAMAECQgVQCVgQAsAhQgyhbiGgPQgsgFhKABQhXACgagBICZgsQgog3iSgPQh4gMhWARQgegJAegNQAfhhDoAkQBZAOBHAgQBhArAEA7IAqgaQCBBkCHBPQADABAVAPQAXANASgHIgWArQAuAFA5AOQAdAIBHAWQBeAdBcAVQB4AcBHAEQAfABA+gYQA/gYAmACQARABBKAeQBAAZAJgKQABghALgkQAWhGBDghQAggQBegPQBTgOAygCQA3gCBlALQBuAMA9AAIICABIiDAsQgQgFhjAIQhmAIhqAQQkgArArAnQBKgIAVBQQAHAcADAuIAFBHIAVhWQA0AAAKBDQAJBEgxARIAAAWQAAAMgFAHQgFAIhRAPQg4ALgxAHQigAXkxAlQmHAvgcgJQhEgWgbhKQgZhBASg4QATg5ApAUQAxAYA1CCIA9gKQgxhfACg9QAAg1AmgGQAlgFAsAtQAzA0AeBbIAggHQhlluEcFUQgVh8hogrQhZgniGAbQh4AYhyBBQhxBDgsBJQBBA7AVA6QAaBIgvA+QA1ATANAsQANAtgkAtIAAAVQg0gjhkAMQhXAKhCAjQgHAEgHAAQgRAAgUgTg");
	this.shape_441.setTransform(-28.2458,-31.2736,0.123,0.123);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#D24F36").s().p("AGvHDQgSgEgIgQQgJgSAKgbQgggrAMhJIgXAHQgiAXgsgfQgbAlg9AcQg8AchAAHQhFAHgtgTQgzgWgJg0Qi8Aqi4iFIkUgZIgXgrQgCgOABgdQACgfgBgOQAGgGAPgSQAOgQAJgCQA+gpAThRIAygJQA4g2AsghQA2gnA1gVQgOAEgMgFQgOgGgOgVQgmgGgEgdQgEgZAWgcQAWgcAegIQAigKAZAZQAzgaBYgDQBWgEA7AUQAwAQBKAhQBFAgAzAcQCMBMAEAiQACANgVAFQCCAVBgA7QG1BOk7CZQg6AyggBEQgfBCgEBOIgtAgQADAXgOAMQgJAJgMAAIgJgBgAimi2Qg6ARggASQggASAhgCQAngBB2ggQAbAYAzgBQASgBgGgFQgGgFglgHQApgWAwgMQgyABgngLQgxAChCATg");
	this.shape_442.setTransform(-42.2908,-32.6503,0.123,0.123);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F3CB5D").s().p("AB3JfQgGgcAMhAIBOjlQhgDmhFAAQg2AAgUgwQgVgvAnghQhEiriEjNQiejohPh6QAIgiENhVQE1hhASgKQAYgMAcgbQAegeAJgGQAogaA8BMQBiB6ALCgQAGBegRDKQgBAOAPBsQAKBKgXA2IhBhCQg2CTgmBgQg2CEgzBqIgIAAQgqAAgIgrgAE1hyQAGAqgbBnIgOA2IA4ibQgCgwgLAAQgEAAgEAEg");
	this.shape_443.setTransform(42.2049,-9.8379,0.123,0.123);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#4382AC").s().p("Ab/OXQjigvgogWQgogXiDhvQiOh4g1gjQoLlaofkZQpnlBoEisQk+hqjWgqQlnhFijBQQhGAaAbgvQBuhECfgoQCOgkCUgHQAZgBBKANQBCAMAxgGQAtgGBUgsQBVgrA4gJQBrgQB0AGQCCAGBZAfQgbAdgnAZIhEAmQhQAugbBGQAWApArAfQAdAVBCAiIJAD/QEpC6EqCXQGBDfFZD+IANgSQACglAdAEQAPACATAJICZBBQAEAfgPANQgLAKggAHQDQBsCfA+QDLBQC8AgIAnAzQgIAigGAMQgKAUg0AAQg5AAjcgtg");
	this.shape_444.setTransform(15.0588,-6.7072,0.123,0.123);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#66251D").s().p("As/FAQglABjphEQjohDgQgOQghgdANgRQAMgRAsADQAXgnA/gyQBAgzApgIQAjgHA7ANQBEAPAdgBQCWgFCigjQCmgkCGg4QAHgCAGAlQAGAoAbAJQAhALCIAJQB7AHA3gCQBmgDAtgLQAygLASgdQARgagCg6QAAgbgNh4QALANAoBdQAhBOAdAKQA0ARD+gLQD4gKBHgUQA1gOAYgfQARgVAUg8QAcAWghBKIgYAyQgKAXAGAGIEGAAIACBVQAAA/gFAsQgOCGhAATQgpAMj8g/QkDhBhCAKQASgaAugLQmmApmdgUQiKAMgyAjQgxAkgzB8QjIhjj1Beg");
	this.shape_445.setTransform(-19.5103,-36.2729,0.123,0.123);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#342F2B").s().p("AjIHGQh6g6hYhyQhahzgjiTQBBgWAnAKQAfAKAXAmQAOAXAcA6QAcA4AiAjQArAtAlAUQAgARA/APQB6BDBxgnQBlgjBJhuQBFhoAViBQAUiGgnhoQgegjgkg1IgGgGQgIgGgHADQgVALgzApQgxAoggAQQjABekTBaQk2BkitAKQgdABgCgEQABgNgCgRQgEgZgCh+QgBhMglhZIgOgXQgJgQABgFQADgFAVgNQAUgVAAgwQCwgPC3gzIAiAsQAhBpAGAcQAWBfgUAfQgFAIh6AgIiaAoQgYAFgLAFQgTAJAVAOQCbgeA8gOQB7gbBXgcQBIgYEEh4QDqhrBTgRQBggTCyAVQDJAXBLgGQBHEEiChGQgFgDgGgNIgKgYQgQgfghAKQgFAYAWAZQAYAdABATQABAcgVBpQgRBPgQA9QhJD3gZgcIgshYQgdAcAABGQABBKgDAEQgMARhWAcQhbAegUgVIDEivQg0gThABAQhEBSgjAYQiEBciRAMQgUABgUAAQhxAAhrgzg");
	this.shape_446.setTransform(-41.1805,62.9402,0.123,0.123);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E5B24C").s().p("AYBHSQjogzhJgNQiLgYgRASQgEADADAjQADAngCAKQhfgViUg1QjFhHgugOQkUhVuikFQrwjTnDicQhugOg2CQQgjBfgGCSQg1hCAfiDQAJkPBlg4QN0CsOzFIIBFACQAhgSBdAeIAcAJQkChnmAiRIgPgjQgUgOAFgGQAGgFAfADQA0gKAiAJQGeBtJ1EfQAdANAqAcQAngiArAaQAnAYAKAxIAygcQAfAgFxBXQFyBXgJgfQjfiIjlhtIgKg2QgngXAIgOQAJgPAsAJIHCEDQD+CaCqCPQgQAFghAAQh3AAlihNg");
	this.shape_447.setTransform(6.9691,-3.4841,0.123,0.123);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#312D29").s().p("AGBNvQiegLgUgNQgJgGgXg7QgbhFgKgQQhFhygdhIQgihgglheQg7iRhqgoQhYggivAZQgUgDg2iFQg1iCAJgKQAaAECeAnQBwAbBLgFQgFhDgdhEQgdhDgtgyQgNgPgbgJQgZgGgCgCQgQgVA+gtIBehDQAqgrAaguQAig6gBgvII2EyQhWhnjBhqQhpg3gygeQhXgyg7gvQgZgHgEAIQgBAOgFAKIgbA+QgPAhgTAfQglAdgUgOQgUgOAMgtIAAAAIBjjbQA7AjExCKQEbCIAcA/QAJAVAQCUQAQCXgIAIQgvAAgjgSQgOgHgngdQhAgvhfAPQhjAPgSBXQgNBAAeBpQAgBzB7ECQB3D6AhCBQAogVATABQANABAlATQgFAlgRAFQgQAEgcgYIAABCQAbgnAoAIQAmAJAaAsQgRAShVAAQgnAAg1gEg");
	this.shape_448.setTransform(-51.6727,40.9856,0.123,0.123);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1E3643").s().p("ApNUVQAmhmAFgVQAahjA+jFQBLjpAlh5QCLnAANinQACgYgLg2QgJgvAJghQAFgSBUilQBTijATggQBSiKDRkBQDUkCBSiJIAsDPQgNDXg3EEQg0D3hKDaQgPAsgYAuQgRAfgiA1QgzA3hWBrQhdB1gqAwQiuCwhlBsQi6DHgZBlQgPA/gFBoQgGCFgEAdQgKBZggA6QgoBJhPAuQgBgpAchIg");
	this.shape_449.setTransform(-26.0742,16.4988,0.123,0.123);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#2D2927").s().p("AlCP0QghgLgjhMIgvhpQgIgMgigSQgegRgDgLQgDgNBrjVQB0jmAOgzQAdhmAUilQADgWAbkXQAml9BLiTQBDiDAiBBQAbAwACCAQArgagLhjQgIgxgBgTQgCgfALgGQBGAACkguQCQgaA7BTIhXgVQAOAcgBAZQgBAZgPAcIiAADQgGgJA9gqQAYgQADgIQADgLgegBIiuBuIijLGQgPBBAUAzQAEALA1BXIiWNKQApAHACgQQgEgaAEgTQBTmPAwmOQAlAOAJBBQAJBLAPAPQAYAZBJACQAlABAkgBQAcAbgwDvQg1ELAEAgQgUAhkGBPQjcBChFAAQgOAAgHgDg");
	this.shape_450.setTransform(4.4903,21.6783,0.123,0.123);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#3B78A0").s().p("ANFI1QgcgBgtgJIhOgQQg6gKhsgmQhwgngsgJQgTgDgPAKQgMALgDAAQgQAtgxgXIgSAPQphmnp2mLQgShQCeAgID5AiIMrCQIANgZQAGgcAQAcIAWABIAWAAIABgmQAAgXgBgPQgEgwglhbQgihXgCgwIDPDOQB7B6BQBYQDgD0B4DgIghikQBPBfANBHQAPBUhBBhQgqA+hLAAIgEAAg");
	this.shape_451.setTransform(26.5407,-6.9814,0.123,0.123);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#1E323D").s().p("AEdJZQiIlrhjieQidj7j9iIQhPgqiCgUQh9gSiLAHQk7AQiMB0QgaAWAFAKQADAGAGACQgxBBg2BUQgUAggGAAQgHAAAGgmQAGgjAdgpQAigvAHgUQARgvAaiUQAYiEAfhCQDwADF1BiIErBNQCrAqCDASQAnAGDOAGQDAAJATAZQAKANAJAwIANBGQgKALhFglQhKgngLAAIk7AAIFbA3IAvATQAeAMAMAMQAHAIANAwQAJAgAZgMQAlgRgTheQgchngBgaIHhhtQAGAXgNAQQgRAQgJAKQgmAyiJB9Qh2BsgtBOQAiARA1gpQAPgLA9g/QBLhMB3iRQCNitAwg1QAzgcBIgGQAigCBfACQAVABAlgDQAZAEgIAqQAdBXiKBBQhDBGjHC6QivCihUBeQgYAcgeBKQgdBGgjAlQg+BBiABdQiPBqg0AAIgHgBg");
	this.shape_452.setTransform(-27.4681,-11.9064,0.123,0.123);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#62241C").s().p("Al8GuQjagzjFhkQjGhliPiHQgjg1gEg7QgDg3AYgeQAYgfAlASQArAUAqBPIAYgpQABgkAsgaQAogYA6gFQA7gGAtARQAxASAKApQANAIAtA5QApAzAmASQBFAiBDgIIA0gIQAfgEAZADQAYADAZAUIAqAiQA2AgBghDQAkgYBChVQBDhVARgLQAegTA1gLIBlgRQCJgWBIg+QAMgKAcgtQAXgmAQgEQAOgEApAMQAqANAZgFQAWgEAlgVIBGgpQBfgzBLAWQAbAIA/A6QBDA8gEAYQgDANiXB/QicCCgQAnQgWAzBCgnQBSgwAFADQAQAThBBmQg+BhgfAWQgUAOigBRQidBPgnARQjUBZj6AAQi0AAjJgvg");
	this.shape_453.setTransform(-23.0262,-22.2561,0.123,0.123);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#272323").s().p("Ao5KiQgFgTATgDQAYgFAFgKQARgmAGhDQAGhBgIgrQgciVAMjSIAMiwQAGhqgBhQQAAgUgSheQgPhMALguQAFgVAsgHIA9gIIAAgBQA1gJAXBLQAngZAsgRQAmgPA0gMQBkgXEVgrQE9gyATAPIAZAWQgLBEgBBSQAAA+AGBZQgSBsgTAXQggAaglA1Qg4BSgDB0QgDBFgDAVQgHA0gXAsQgxBehEBNQhPBahNAiQiuBMiTAiQiCAeh3AAQguAAgsgEg");
	this.shape_454.setTransform(12.1789,60.7967,0.123,0.123);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#38729A").s().p("AKCQEQgVgWAKgmQh8gsiPhSQhqg+iShkQgag0hDgfQgOAbgcgEQgagCgbgYQgbgYgLgdQgLggAOgWQjrkmjJk8Qg0ALgOgYQgLgUALg2Ih4h8IALgdIAPgaQHVCKHNB/QAcAVAJhVQgQgZAGgGQAGgGAZAPIgJhEQl+lZmElxIgGgwIABAAQDWBcEmDEQCZBmDWCkQEZDZAbBAQAkBZglA6QgXAdgKAQQgQAZgBAbQgBAwArA1QAtA5AEAnQAEAogOBFQgPBMAAAiQAAAdAWBiQAVBZgFAaQAAAFgSAMQgXAQgMAOQguA0AYBaQAEARAOASIAYAdQAXAjgbAwQgOAIgMAAQgQAAgMgNg");
	this.shape_455.setTransform(-53.9238,20.6418,0.123,0.123);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#4481A9").s().p("AmbUSQgggJgvg4QgFg3ALhOQAOhkACgdQBwjogPkVQCAg0BQh0QAdg9gHgwIAAiDQgBgHACgQQABgQgCgFQhvgIAjhhQAehUBVg+QilgNAzhdIjFC9QhjgJAohLQgLAFgNAAQglAAgtgqQgoglggg3Qggg1gGgnQhBARgVgtQgEiWA4jpQA4jmBHiIQAXgrAcgKQASgHA6ABIAAAAIAbAvQgVB0ghBfQgeBVg4BwIAWgkQAcglATALQEEiNEgABQE+ACDLC1IgsAWQBcAQBBBAQAdAdBMBuQgNABgegCQgdgBgPACIlTimIgKgfQgwgRALgpQAIgXADgNQAEgVgKgQQgcgviYABQg+AAguAKQgvALgFASQgYBjBTA/QAXARA5AgQA2AeAYATQBZBHA4BiQARAcBQCtQABAEgkALIhRAZQh5AogDAoIDwgWIgWgrIBfgDQAwgCAYAFQBBANAvBaQAKASAQAWQAEANgvgEQhsABjMAwQj7A6AABCQABAaAHAoQARBlAhBrQAgBpAqBeQgHBSAJBSQgwAsAjBOQAeBEBBArIgYAwQAEAJARAZQAKAWgUAKQhtg7hxh6Qh7iOhFhGQgGAahBAaQg5AYAIAWQAEAIApApIBUBTQBxB1gYAYQhAgJhEg4QhIhGgkgdQgTgWgMgIQgVgOgOAWQAXBRBNBpQBiCHAVAnQgPgDiHgrQhagdhCAKQAYAqAIAtQAJAsgKAZQgIAUgSAAQgGAAgHgCgAm4mXQACg4ANgyQgJgogXAFQgTAFgRAfQgQAgADAZQAFAeAhgBIAHgBQAMAAAJAUg");
	this.shape_456.setTransform(-37.1587,-3.3071,0.123,0.123);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#1E3743").s().p("AlzS9QgkgCiagXQifgXgLgGQgggPgIgmIgEhDQAagPARAFQAMADAZAWQgtiKBBgbQAygUCEAuQixjABRiNQBtBCAMAAQANABhVhCQgTgjAUgkQASghAqgXQApgWApgCQAtgDAWAXQDIDgB/B5QABABAMgVIAQgoQhBhIgcg7QgqhZA+geQg3k2hOk9QBuhpCrgkQCVgfCcAaIgKgDQgWgJAIgQQgqhbhFgTQhKgVhLBDQhvAXhDgLQg/gKgHggQgIggA0gmQA4gpBqggQgthpgohBQg4hXhHg1QhggohDhDQhAhAgKg9QgLhBA6ggQBBgkCKAQQB+APAiAdQAuApghBwIgKAbQBUATBNApQBGAmBJA8IA3AMQAXhDBBBDQBPByA1B+QAxByAlCUQgbgNgpgsQgpgsgcgNQgcgOgfgFQgtgGABAeQCXAlBPB+QBFBvAHCnQAGCWgsCjQgpCZhGBvQgYAmhQBDQhLBAAAACQgKAoAkgBQASAAAVgGQAQAbg4BLQhCBNgMATQgMATgLAyQgLAvgLANQgsA1kqAYQimANhyAAQg3AAgrgDg");
	this.shape_457.setTransform(-33.6585,-0.9192,0.123,0.123);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#474039").s().p("AFJTMQghpfh0mMQigojlak0QitiYiNgqQiyg1i3BiQgPAIiDBYQiDBYgLAIQgNALgaA9QgVAyglALIAAgBQAXhJAwhPQA3haARgpQAIgTABgnQAAgpAGgRQASg5CuhRQAigPBogtQBLggAagPQAmgWgbgJIgWgGQgMgDACgEQAJgQBbgqQBYgpAUAAQAiABALAeQAGAQAEATQANAJAuggQA4gnAPgDQBTAKgnAiIAFAHQAIAAARALQAeATALAYQAPAcgeAMQglAOhigQIgfAgQgfA1hSgJQEcBCDiDsQC2C+CXE1QgdhaApg5QgMgtAUgOQAUgNAmAdQAXgKAjARQAhAPAcAgQAeAgAKAgQALAjgSAVQATA7AZgPQBLgkg7hoIiIlQQgTgoA0geIAYgUQBnB3BSB/QAXgWASAEQARADAQAdQAwgSAaAtQAZAsghAnQBWB/AdByIAQgXQABjWhrjJQg6iQA3hgQBlgxAwBYQAnBJgOBqIh4iYQgJAZA6CIQA4CDAQANQAuAIgDgTIgLh4QBVBbBKC7QBFCuAsC0QA1DXgECSQAAAWARAxQAHAkgygJQADhrgfh0QgLgpgKgUQgSgpgUgCIBBG0IBXgrQAPAnAEAwIADBXQACAbgCAyIAABMQgWAAgEgyQgDg1gagGQgggHgNAsQgPAygHACQiDAkglhlQgHgVgLg8QgIgsgLgIQgMgJgcAQQgaAPABALIAQARQARASAFANQAVA/gZAGQgpgCgVAKQg8AlghARQg7Aeg0gJQgJgBgNgXQgNgagNgIQhbg1gXBUQgDAOgIA4QgFAogJAIQgEACg9AJQg5AIgRAcQgLATgBAtIAABKQgCAmgSALQgJAFgMAAQgVAAghgPg");
	this.shape_458.setTransform(74.8921,27.9509,0.123,0.123);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#2F2A28").s().p("AkiQSQjlgNhLgkQgHgvgvhPQgjg8gqg2QgMgcACgIQADgMAdAEIAAAAQAwiDgznyQgekKgMh5QgWjRABhfQAAg4AJh5QAKiCAIgmQAIgiAegiQALgOAtgqIBFBpIJKCxQAbARAfA5QAhA9gQASQgDADgdAKQgiAKgTALQhGApAZBPQBqAEAdACQBdAHAhAVQAWANAjBfQAiBaApATQBDAeB2gVQBCgLB4geQAvgIAGAXQAHAWgnAcQgyAIhNAOQhdASgaAIQhnAhhHE+QgyDkgKDKQgbgFgJgYQgEgLgFgkQgIhNAAjBQAAi5gNhbIgri5QgZCaAbDzIAYDJQAOB2ADBQIAFCIQABBVgKA6QgeChiAAeQhKgZj1gOg");
	this.shape_459.setTransform(-1.7637,11.4662,0.123,0.123);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#2E2A28").s().p("AmoP8QBqAlAog4QAkg0gghsQgDgLgPgTIgWgdQgWghAqgNQBYgaAhBTQAdBMghBSQBHAMgNhmQgFgmgOgoQgPgmgMgMQg2g3iWA8QhRAjgmAPQhBAbghABQhuBWiUAgQhvAYisAAQjCgGhiADQioAEh2AkQAfgjBLgXQBUgZAkgdQAtglASg6QAVhBAKgNQArg1CdhPQCmhUAtgtQARBSgrB9QgMAigaBEQgWA8gJAnQgGAcATAHQAQAFALgLQAagaApjOQAqjSAXgbQA6hGCRgjQCEggBlAQIiYogQBFAKA1AcQA9AgAgA1IETLXICkAsIhXDEQAUAVAsg8QATgaAdgzQASgfBLiuQBNixABgQQADgigThsQgUhygRgRQgQgPhagvQhFgkgygZQhZgqjahQQirhAhPgyQh0hKg7hyQhEiDgNjXQAPgVAIACQgIhpAqhOQA1hkB4gWQHYg9FVglQHIgyF3gZICGAQQBahCCcgCQCkgCBGBOQAcAgAVBiQATBeAEBvQADB1gQBPQgTBagoAOQgnAOgRgOQgRgNAIgoIgogYQAGh5gWiTQgdjMhCgEQiGAlhAg9QgEAhgRAGQgNAFgfgMQgCAhgRAIQgQAHgfgOQl2BMnbA/QgSACglgKQgYgGghgQIgdAmQA3FJBOFKQAbBcgGBUQgIBmhJhQQgbANgTgRIjEtGQgKgKhnAAQhwgBhuAOQk3AmAkBsIgqAmQgtAmApB6QAfBfAzBLQA6BWBOAzQA8AnB2ArIGGCRQB7AUBJBDQBOBFATB2QBSgSgBA2IgyB8QClhVDXgOIAKhAQD7gBAqiGQABgvAbABQAaABALAtQgJBsgOAdIgVAnQgTAggTAvQhGCqggCaQgoDAAZCOQibAemMBRQleBIjJAkQghAGgqgEQgKgBhBgKIrFERg");
	this.shape_460.setTransform(34.2166,28.3664,0.123,0.123);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#272322").s().p("Ah0X4QgPgDACgdQADgigCgBQhCA7hygiQgggJg/gaQg8gZgagIQgQgEg1ADQgvACgZgMQgcgOgLgwQgNg4gNgOQgLgMhKgqQhMgrgZgXQgmglipkHQipkIgRgxQgIgZAJgVQAKgQAAgCQAoA4BLB7QBHB1AqA4QCNC8DBAsQEIA8CJhHQCEhGBuj3QBIilAajVIAUizQAMhsAShQQAGgcAagaQAagbACgKQAFgagNgzQgTg9gHggQgah5BOg3IgjnAQAYAXAtALQAaAGAwAIQAnAIAMAVQAQAagRA4QgBAEguA/QgjA7A1gCQAIAAA6hCQA7hFAQgFQAegLA7AKQBQAOAPAAQAwAAAUgiQAYgqgNhmIAWCDIBBAAIgWjFQAmgGAFANQADAJAEAgQAKAbAKAvIASBLQAFADBLgTQBKgUAIgFQAqgdgmksIg5l1QAUgDAIAXQAEANAFAcQApB/AKB2IAVivIBCAsIAAAsIAQA9QgjBjASBmQAPBTAzBbQAAAEgRAvQgOApAIAbQACAIANADIAbAFQAnAIAIArQAMA9gDC3QgCCAgICCQgFBhgOBUQgFA/AYB/QAQBagZAyIgbAsQgSAdgKAbQgLAfgIBFQgIBXgFAZQgYB9hhgVQAGghAZg7QAag7AGgkQAHgsAAgiQgBg8gagCQgNBSgeBpQgLApgsCPQgFAPgYAnQgVAigBAOQgCAWAUAUQAMALAaAWQAsAqhABIQhrB6ANhUQADgVAQg7QAPg0gBgLQgDgpgiApQgjAzgEADQhcBRgxApQh9BpgIgJQgCgeAcgeQAmgqAGgNQAlhNAKhLQANhphXA3QgKAGgsBkQgzB3gHAMQgnAsgPAWQgbAoA9AGQAPABAegEQAcgDAKABQAgAHglBLQgSAmhRAlQhvAzgIAFQgZgKAFgcQAKgagBgBQgvgYg7AQQgoAKhHAnQhQAsghAMQgsARgnAAQgRAAgQgDg");
	this.shape_461.setTransform(-10.1805,63.7448,0.123,0.123);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#443D37").s().p("Al6bKIgNg9QgXhIhoALQgQACgWAQQgYARgKADQhGAUACgYQAQgpgDgXQgJhJhGgFQhKAGgMgKIgQgzQgPgvgbgIQgMgBgBARIACAbQgbgTgkgwQgkgwgIgdQgGgVAZgJQAagJgCgWQgEgkg2h0Qguhlgfg1QgHgMgbgOQgZgNgEgMQgbhagwj4QgzkBgDhQQgCgcAMg0QAMg0gCgcQAPgdARAAQAQAAATAaQgDkRAQh+QAajHBeivIAqgSQAWigCSh1QCGhqCsgYQidgzinByQiMBghcCkIgzAFQgwiBAQhHQAMg4BWhzQAWgIAMAAQAQABAGAQQDhjrDdAKQDMAKD/DfQG6Ibk9m1QgVhRAfghQAagcAzAQQAyAQAdAsQAhAxgUAzQAKBPD1gkQBZgNBZgZQBSgWAUgPQAQgLAHgLQAIgMACgWIgogLQgSg9g0ghQg0gig/AKQiLAwiWgQQhpgMipg4IgTg1IHWiYQAQgrgWgnQgNgXgrgpQgsgogMgWQgVglARgoQAyAFBpAVQBVARBYABIAAAAICDCDIjlhBQgPAHAYAbIAiAgQBWBNCXBZQCkBhBQBBQAGAFA/AaQAuAZhHAIQgLAChXABQg7AAgqARQgWABgFACQgHACADAdQAJBDBYBcIBIBIQApAoASAaQBhCJAzC6QA9DehFB0QgfA2hQBJQhbBTguAAIn2AAQgiAAAJBNQAFApALBEQgMFNgbDOQgoFAhXDIQgIAThxCjQhyCigQAQQgzAwhAAPIgsAHQgWAEgKAHQgCACgGAYQgGAZgMAKQgjgUgeg2QgcA6gmAQQgogGgOAGQgUAJAIAjQgPgQgIglg");
	this.shape_462.setTransform(-76.1728,59.15,0.123,0.123);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#262222").s().p("AgSDqIgWgCQgOgBgigIQghgIgXgSQgYgSgKgcQAfgNAcABQAUABAfAHIAYAGQASgbAIglQAJgpgDhAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAQACAAADACQACgFABAAIAbgBIAbABIAEAFIABgFQAegPgCggQgCgZgUgeQgUgSgFgLQgIgSAdgCIgvgeQgFgDgFgEQgEgFgBgEQgFgKARACIADgFIAhABQAZACADAHQAEAHgNAAQgQgCgDABIgZAGIA0AAQAEADAJAXQAJAXgCACQgQgBgRAEIgEAAIAAAFQADABATgBIASgCQADACAFAOIAKAdQAPApAQAIQACACAMACQALACABADIADAJIACAKIgDAFQAAABgBABQAAAAAAABQAAAAABAAQAAABABAAQAFgBAAABIgCAFIAAA5QgIALACATIACAPIABAOQgCAMgFAFQgGAGgLgDQAAABAAABQAAAAAAAAQAAABABAAQAAABABAAIAFACQAEAFgGAKIgGAIIgDAGIgCALQgBAHgEAFQgGAJgfANQggAOgKgDQgEgBABgEQAAgEADgEIAEgCQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQgLgBgGACQgHADACAJIAMgIIgCAHQgBADgDACQgHADgIAHQgHAGgMAEIgTAEIgNACIgCAAg");
	this.shape_463.setTransform(-69.7201,61.0215);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#443D37").s().p("AkseJQjdgMjCirQjMi1hfknQgZhdhlkjQhRjqghioIAOhkQhQoqACoyIgtAlQANhEgTh+QgUiLADgwQAEg+AxhUQAxhXAEgjQAFgkgHg7QgJhJAAgWQgBhwBdhLIAKBtIAKgsQAGgbAGgQICSiSIAzAPQAsgoBAgbQBDgcBCgDQCggJA5CBQDEBjCLDUQCvENDPF+QAlAdAugtQAggfATgqQArgRBHBAQgaiDAVhwQAVg2BDApQAUgjhcjXQhRi+gvhHIAZgsQgZgmAOgNQAOgMApATIAdgMQBoCvCBCPQAgAMAKAyQAKAzgfASQgKAzAvB/QAuB6AhAdQAJAHBIjNQBHgrAIg/QAGgugfhaIAhgqQANACAMgJIATgPQAvAbAYBIQAZBLgfAtQgCAiAKAXQAMAcAYgUQgSgxAFgTQAHgbAyAIQBECUBEDPQBRD5ABB0Qg+BKgQBmQgQBmAlBkQAaCDhYA8QhUA7h1guQhdA0hSANQhQANhsgTQg7BNg2AlQgzAigdgMQgegMAFg3QAGg8AwhcIhrgXIAZFqQhhCDBSC0QADBKhABJIg/HIQgwFdi1C1QiYCZjQAAIgegBg");
	this.shape_464.setTransform(-13.2495,54.0053,0.123,0.123);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#F4F1EC").s().p("AjEAYQAigtBwgEICqAHQAVABAlgEQAZAFgHAoIjEACIjEgCg");
	this.shape_465.setTransform(-70.0588,5.9168,0.123,0.123);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F7F7F4").s().p("AkRDoQACgGAfgeQAhggBPg7QBMg4AfggQBqhsg1iVQAbASB6A8QBqA+gPAtQgDAJjiByQjpB2gnA2IgUABQgaAAACgJg");
	this.shape_466.setTransform(-59.1848,32.8241,0.123,0.123);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#262222").s().p("AgBDjQgpgHgqgeQgpgegagoQgbgrABgoQiuBDjAgOIgkggQABgrAkgaQAJgHA/ggQAXAEBigJQBkgJgCgJIgWgrQAVgFAvgSQArgNAgACQALABATAUQASASAFgFQADgCgDgTQgCgUACgCQAEgFARgGQASgHAFgEQgDAyANgJIAQgOQAKgLAJgDQCdgxBIgGQAkgCAHABQAXAFgOAaQgKAUijAwQiIAohFANIAeAsQgEAeALAiQALAgAQAPQARAQALgOQANgRABg1QASggB4gbQB9gcAhAiQA7gBAJgHQAIgIgWgeQgLgPAVgnIAKgHQALgHABgHIhCgBQgJg3AUgKQAMgGBAAGQC0CXgbCdQgRAdjYA8QjfA/gugYQgYASggAAQgKAAgKgCg");
	this.shape_467.setTransform(-77.7112,39.8981,0.123,0.123);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#0D0C0B").s().p("AitZDQgHgggwhPQguhMgEgZQgCgSAKgtQAKgogJgjQgRhBhShSQhOhNgIg1QgDgVAXgIQAYgHgCgXQgGhLhSj5QhKjjAIhfQgugHAKg6QAJg6AogFIAJgvQgChKgUhgQgVhogDgpQgBgXALh6QAMh5AFgQQAGgUAogNQArgPAOgXQAvhPgShbIgRhJQgIgrAEghQAHg0BGiGQBIiKAlgVQAcgRAqAFQArAEADgCQAOgIAMgjQAOgnAJgKQAIgIBihVQBlhWAKgGQArgcCJgrQCGgrAzgEQAegDATAJQALAGAcAXIAAAAQAmAagDASQgCAPgdAEQgcAEgkgHQglgIgWgQIhOAIQgMBZi4gYIgBAxQg5ACgzA6QgSBOhYBOQhRBGhZAeQgpBJg2gXIAKA9QhWCBALC1QAiAmgZBUQgZBUgyANQgqAtgQBBQgLAtgDBVQgEBeARDhQAEAsAMAdQAdAGgdAQQA7HKBXFnQBLA1A8CAQA4B2AIBlIgeAtQBFBHgNBAQAKgbAUAaQATAZgGAZQgHAfgyADIgGABQgsAAgCgog");
	this.shape_468.setTransform(-85.6716,57.6959,0.123,0.123);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FDFEFD").s().p("AE0J6QgFAAguhFQg0hNgUgUQiRiRjQhAQjVhBjGAtQBFiRgei9QgViHhRjBQAwglBXgyQBFgwAihLQA0AaCdBFQCEA7BJArQhoB8gXCJQgaCWBPCEQCRBeDPB/IFjDZQgaAXg4ACQhQADgOADQgQAEhDAgQgwAWgXAAIgFAAg");
	this.shape_469.setTransform(-71.0015,20.4727,0.123,0.123);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#101110").s().p("EgoXAhFIgEgbQgEgNgOgEQBDjHCYjKQAkgwBkh9QBahvA1hJQBQhvCMj5QCJjzBUhxQAQgXAugeQArgeAFgJQAWglAHgrQAFgtAFgVQARhJB2hHIgBAAQBKgtFThpQE/hjAKgNQAFgGgKgpQgNg4gDggQgKiEBrg9QAngWCngZQCdgXALgPQAEhhgiiZQgrjIgGgrQgJhKgKh5QgBgQAfiRQAfiTAIgQQARglA7hTQAtg/AghkQAfhdCUhWQBeg1Ceg5QG/ihGZCXQCoA+DHB/QB7BPD1C1QCWBvDHCZQEgDfAKAZQAJAUgJAfQgJAggRAEQgbAHjygHQjWgHgYAfQgEAFAAAoQABAqgKAUQgHAPgcANQgeAOgFAHQgUAXgICvQgJDEgPAuQgEAOgqA+QgdArALAuQgLglgKgNQgPgSgeADQhNBrhhgUQgagWgGgOIgMgdQhmgFA6AaIALAWQAGAPAFAHQAUAriOBdQiDBUg2AHQi8goi2hkQgIAPgGAmIgIA5QhVAEh9hYQhchChahiQhAhHgYg1QhYiHiChTIgWAAQgzAWhBhGQg+hEAEg7IhLgTQg0hVgaA9QEpG7FlGXIAbgOQA3A7BHAVQAVAAAHAHQCyC4B0B6QAMAMgPAHQgOAHgVgMQgUARgFgDIgMgGQAKAJAFAbQBQgBBQA1QBHAvA1BMIgWArQgxBDgdBsQgtBIh1AtQh8Avgyg3QgUArgjAAQgdAAgogeQhKhqhqAXQhVAjg3ABQgxABgJgaQgKgZAhgkQAjgnBGggIhziPQgpAWgoACQglACgUgRQgVgQAHgcQAJgeArgiQgMhNgUgNQgXgRhJAdIgvgNIgVgsQgZgwBQgRQgfAAgggVQgcgSgPgZQgOgaALgNQAMgPAqAJQAchJBiA/QgOhbgwhQQgxhThKgzIgHg4QgpAVgogEQgmgDgYgYQgYgYABgkQACgnAhgrQAEgsAMABQANABAPAqQAhhVgrgPQgdgKhcAWIggAuQjLAbgEBeQgEBUCbB4QATgFAOACQAQADA8CAQA+CFgSAWIgVAWIggACQhjiQiEh4IgaARQgkg7gvAUIgcAyQhXAlhyAYQh9AahTgGQAMAegVAUQlFBJgfD1QkCEdiXFrIg3AgQlTGRjxHPIggAKQAZAigOANQgGAGgLAAQgPAAgWgJgAC8gsQgbALgBAIQgBAZBYA3QA4AkBAAfIgEAdQA8AbBCAiQgngcgagYQgGgFALgZQgWADgEgEQgFgDAJgSQhkg0hOhXQgXgYgSgaQAGAVgGAQgACQieQgOgegHgfQgagBgLgKIgFgGQAFAUgHATIABAAQAeAAAiAngAArkfQAVASAKASIgCgMIi8kbQgPAsAUBEQASBAAqBAQAPgJAQAAQAcAAAjAcg");
	this.shape_470.setTransform(-19.997,-58.252,0.123,0.123);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#272323").s().p("AgLDvQgQABgGgHQAEgIgHAAQgIACgDAAIgRgKIgRgKQgZgSgWgjQgTgegNgjQgJgagEgVQACgCARACQASACAEACIALAVIANAbQAQAXATAJQAXAKAWgPQAdgUAAhKQAAgbgDgfQgEgbgFgTQgIgYgNgXQgOgagRgOQgTgQgSAEQgWAEgSAfIgEABIgSgKQgIgEgCgDQgDgEAAgHQABgGAEgOQAJgRANgMQANgNAQgGQAjgOAgAXQA0AmAXBHQARAxAGBQQgBgYAVAAQABgQAJgFQAKgFAKAOQABABAMgFIANgIQgEgEAAgEQAAgEADgDQADgCAEAAQAEABAEAEQABANAGAGQAGAHAGgOQAKgHADAHQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAGA8QgDAMgCAXQgCAZgCAJIgEALQgEAGABADIACAFQADAEgBADQAAAEgIAOQgIANgCgCIAAgDQAAgBAAgBQAAAAAAAAQgBAAAAgBQgBAAgBABQAAADgEAGQgDAFgBADQAAABAAABQAAABABAAQAAABAAAAQABAAAAABIAEgBQADADgCAHIgHAOIgFAEQgDADgEACQgCABgJABQgGABgDAFQAPAThAANQgSADgQABIgIAAQgPAAgIgDg");
	this.shape_471.setTransform(74.9254,41.3018);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#0B0A0A").s().p("AsALjQAngCAggKIgBAAQgDgHAFgGQAEgFAIgCQAIgCAFACQAGADgBAHIgIAGQgCADAEgBQAFAAAMgDIAIgDQATgHAMgHQAVgNgBgTQAKgMACgNQgGgBgBgFQAAgEAFgDQALABAEgGQACgEABgMQgIgeALgZIAAg1IAFgDQAKAAAAAPIAAAKQADgDAKgEQAIgEAKgDQAJgDACAAQgBgLgEgLIAEgFQgIgDgBgNQgDAGgSAAQgHAAgGgCIgDgBIACAGQABAGgFADQAFAGgCAEQgCAFgHgEQgGACAAgEQAAgEAEgEIgFgPQgWgCgMgMQgIgJgLgYIgUg1IgjACQgXgSAzgCQgHgYgJgPQgHABgTgBQgVgBgDgFIABgEIAagHQARABADgBQACgBgJgBIgUgDIgRAAIgLgFQgEAGgRgCQgHgBgFgDQgGgCgBgEQgGACAEALIgEgCIgBADQgYAEgWAJIgGgDQgEABgCgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgFAIgDQgBgFADgCQALgKAWgCIASgBIASgBIAJgDQAGgCAGAAQAQgBASAGIAgAOIACgKQABgGADgDIgBgDQAbgVAdgQQgPgHgIgMIgrgbIgNgEQgIgCgEgDQgqgZgYgQQgFgEgCgKQgCgJABgLQABgLADgKQAEgKAFgEIgngSIgEgIIgpgVQgfgPgGgFQgEgEgFgMQgEgMACgDQALgDASAGIANAFQAIADAFAAQALAAAXgBIAjgCQAMgDAMAAQANAAALADIAcABQARABAKgCQAMgCAbgKQAcgKANgCIA+gHQAzgFACgDIACgGIgBgGIgIgOIgLgPIgEgFIgFgFQgGgFgDgKQgMghACgdQABgYANglQgDgIABgFQACgFAIgEIADgEQACgDAAgCQAAgCgFgIQgFgGAAgFQAAgEAGgOIAEgOIgQgDQgLgCgFgDQgGADgSgMIgNgKQgFgFAAgBIACgEIgDgMIgDgMQgGgDABgHQABgGAHgBQAFgEAAADQABACgDAFQAFABAAAEQAAADgFADIAGADQAFARAPAMQANAKATAFQARAEAUgBQATgCAQgGIAHADQARgEgBAHIgWAOIgRABIAFAFQAGgGALALQAJAKACALIAJAAQAiAcAqAMQAsAMAqgIQAFAAANgFQAOgFANgHQAkgRgCgJQgMAAACgIQABgHAJgHIAdgZQgLgQgPAEQgTAPgSgGQgSAZglACQgdAtgcgVQgRADgOgFQgQgGAAgQQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQANgFASACQAagGAZABQAAANAIgRQAogBAagaQAHABAHgBQAFgBACgCQACgCgEAAQgFAAgJADQgFAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDACgBQADgCAEAAQABgGALgBQAKAAAEADQADAJAFAAQADABAJgGIADgBQADAEAMALIAcAUQAmAaAFgFIAAgEQAPgFABgLQgJAFgPgEQgLgDgOgHQgYgTgbgKQgEACgBgHIgCgBIAAABQgFAEgEgQQgDgNABgHIgpACQACALgHAFQgCAegLgoQgFgBgCgDQgBgCABgGQABgGAggCQAVgCASAAIABADQAKgBAHgDIAuAKQAXAIgFgmQgWADgLgLQgXAEgRABQgXACgRgCQgEgBgEgEQgBAIgMAEQgKAEgPAAQgNAAgOgCQgNgCgFgDIgCgFQgZAJgWADQgZAEgXgEQgJADgJAKIgGAAQgDAGgDgBQgEgCACgGIgCgDQAVgTAUgWQgJgYAPABQAAADAFgFIAGgIQAHgMgGgZQgGgYgJgNIABgHIgQgPQgLgGgEgHQgEgFADgDQADgDAIADQAIADAJAJQAKAKAIANQAIAMAEAOQgDgLADgFQADgFAEABQAFABABAEQABAFgFAGQALAKgDAVIAAAbQAGAAABAEQABADgFACQgBAFgHAHQgMAKAAADQABADAIgDIASgHIAQgIQALgLAJAEIAAgGQAPgRgFgnQgEgZgMgjQgBgCAEgCIgBgEIAEABQACAAAFAIIgUgpIACgFIAFABQAIADANAUQANAVgCAJQAGgBAAACQABABgEAEIAIADQAKAcAPAWQAQAYAVASQAHgDAJAAQAKAAAEAEQAEACABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCADgDAAQgEABgEgBIgQAFQgHACgEgBQgJgCgIgTIgHgHQgGgEAAACQAAACAOAXQAPAXACABQACABAgABQAgAAACgBIAEgFIAFgJQAHgOgJABQgLACgIgDQgIgDgCgFQgCgGAEgEQAGgFAMAAQASAGAHgFQAFgDAFgTQAJgSgdgJIgBgGQgFgDABgBQABgCAGABQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgTgNgRgRQgSgRgNgTIACgCIAEgBIgPgKQAAABgBABQAAAAAAAAQgBAAAAAAQAAgBAAgBIgEgBIgPgTIgOgTIAAgEQgHgDgHgKQgIgLAEgFQAAgBAAAAQAAgBABAAQAAAAAAABQABAAAAABQAIAEAIAIQAGAIAFAJQALAOASAOQAPAMAPAJIAAgGQgFgEABgFQAAgEAHAAIACgBQAOAJAHADQAKAFAHAAQAQABAWgTQAFADAAgMQgEABgBgCQAAgCADgCQgBgBAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAFgBABACQACACgDAFQANABAJgMQAHgNABAVIABAIIACAIQAHABAAAPQARAIANANQAMALAKASQAgA+ApAgQAzAnA7gQQASAHALgBQAKgBATgJQAKgEASAWIANARQAGAJABAFQAFAMgDAQQgCAPgJAMQgIANgNAGQgNAGgPgEQghgOgGAVQgTAFgSgEQgUgEgLgOIgeAKIgGAsQgFADgBAEIAAANQAAABAAAAQABABAAABQAAAAABAAQAAAAABAAIAIAAQAGAAAGACQAXAHAXAUIAUATIARATIAPANQALAJAEAFIAGgEIALgIQAPgNAIABQACAAAEADQADADAEgBIAhgMIAkgNIALgHIAIgFQAEgBAEACQAFADAHAJQANATAAATIgCARIgBAUIACAFQACAEAAADQAAADgDAIIgEAMIgDAcQgBATgCAIQgCAKgTAGIgNAFQgHACgBABIgEANQgDAMABABIAPADIASAfQAOAZACABQAFADALgCIAWgEQANgCAJACQALAEAHAMQAFAJADAcQADAagBAMQgCALgHAKIgQAPIgCADIAAADIAgAOIACgOIACgQIAKgWIAMgYQABgDAKgJQAJgJADgCIAGABQAFABACgBQADgCADgGQACgGACgBQADgDAOgFQAOgFAEAAQADAAAEACIAFACQAEAAAKgIQALgIAGgCQARgDATAIIAOAGQAIADAGgBQADAAAFgDQAFgCAEABQAUAFANAQIAKAPQAHAJAGAFIAFADIAHAEIANAbIAPAeQAXA3AJBNQAJBNgLA6IgEAKIgDAIIABAIQABAGgBAFIgEANIgGAMQgBADgEACIgGADQgHAEAAAGQgCAGgDgBQgDgBgDgGQgBgCACgEIAEgJQAIgLAFADQAFgEAEgKQAEgLgGgEQAJgmAEgcQAEglgFgeQAHgEgEgQQgHgCABgMQgFADgDgBQgDgCgFgaQgFgaABgCIAEgEIAGgCQgJgrgQgdQgFAGgGgFQgFgDgEgLQgEgJgCgJQgBgKABAAQAOAEgGgEQgEgDgJgDQgGAAgBgKIgLgCQgGgCgEgDQgIgIAOgGIgDgEIgGgGQgJgGgCAFQgGACgIgDQgIgCgBgGQgFACgDAAQgDgBgFgEIgDAFQgZgMgagBQADAJgQACIgDAAQABADgDAEQgDADgFABQgEABgDgBQgEgCgBgEQgKADgDACQgFAEgDAIIgjAQQgKAEgDAEQgEAFABAKIgYAjIAEAGQgMAbAjAJQAUgeAWgFQAUgEAUAQQARAOAQAaQANAXAIAZQAHAWAEAdQAFAjgBAeQgCBPgpATQghAOgeggQgUgWgSgpIgQgDQgNgCgBABQgCADAJAZIAMAfQARApAXAbQAaAgAjAQQAEgCAGABQAEABADACQADACAAACQgBADgGACQgFAGgOgBQgNgBgOgLQgPgLgFgKQgPgIgJgLQgLgNgEgPQgFgBAAgBQAAgBAFgCQgEgBgDgEIgGgIQgMgTgIgaQgIgYgDgYQgRABgIgIQgHgDgGAFIgngHQgegGgFgDIgFgFIgFAEQg0gWhFAPQgbAGghAMIg5AZQgBAbACAaIgFAEQAEAEAAAFQgBAFgGACQAGACgBAOQgBAMgDAIIgFALQgDADgHAEQAAAIgFAFIAFAFQgGA7g0ARIgCAFQgjABgiAEQgDASgEAIQgGALgNAEQAIAUgKANQgJALgWAGIgLAJIAFgBIgEADQgIABgFADIgIACIgGADIgGACIgpAHQgYAEgRgEIgagGIgWgEQgFAAgEgBIgJgCIgGgMQgQgIgMgOQgKgNgIgTQAEgDgBgDQgFADgDgDQgDgDADgFIgIgDIgQgqIACgGQgMgVgGgbIgGgGQgIgkgFA1IgGACQAFAHgHAOQgFAMgJAHQgIAGghAGQggAGgMgBQgZgCgSgSQgQgPgLgaIgUADQgBANgHAOQAIAWgFAUQgEARgQAWQgCANgHAEQAHAHgGAKQgFAJgKADIACAFIgKACIghALIgjAJQgTAFgYACIglACQgOAAgDABgAn8IjQgCABACAGQADAHAGAJQAKANANAHQANAHAOAAQAOAAANgGQANgHAKgMQAIgGAGgCQAJgEAFAEQAJgXADgaQgEgFAAgFQAAgEADgCQADgDAEACQAEACADAGQACACgBgIQgBgHgBgBQgDgCgegBQgegBgHADQg8AghCALQgFgBgBgBIAAAIQBRgNA0gkQAEACAAAEQAJAEgHAKQgFAIgKAFQgeANgiAIQgBABAMAOQAMAMAEACIgBAGQgLALgTgYQgFgLgEgGQgEgDgBAAIgBAAgAmNkYQgMgGgBgJQgIABgSgOQgSgOAAgGQgBgFAEgCIgVACIgKAYIgFABQAIANAPAEQAKACAUgDQATAEASAIIAAAAgAhCpIQAGAFAHACQAIACAGgCQgKgIgDgPQgVgWATgQQgeAPgjgVQgDABgDgBIgBADIgUgOQApAiAnAlgAI9I1IAEAAIgCAAIgCAAg");
	this.shape_472.setTransform(4.0979,8.9196);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#0B0A0A").s().p("AFuDlQgpgFgMgpQhJAEglgaQg6hDh0gUQgVACgFgOQgFgNAJgTQjnAOjdguIgGghQgWAVgGgHQgGgGAMgdIAGggQBjgDAahLQgRgnAQgQQAOgPAbAMQAcAMAPAfQAQAkgOAuQFPBGFPBVIAfAnQAsAagGAkQgGAfglAXQgfATgeAAIgMgBg");
	this.shape_473.setTransform(60.162,30.3005,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},10).to({state:[]},1).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},60).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},39).to({state:[]},1).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},55).wait(2));

	// Layer_10
	this.instance = new lib.ee6smokerolling2("synched",0);
	this.instance.setTransform(-16.45,78.05,0.2708,0.2708,-60.0001,0,0,-141.1,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:10},0).to({_off:true},1).wait(60).to({_off:false,startPosition:71},0).wait(39).to({startPosition:110},0).to({_off:true},1).wait(55).to({_off:false,startPosition:166},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-84.4,230.5,176.4);


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

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(237));

	// Layer_9
	this.instance = new lib.Symbol1();
	this.instance.setTransform(280.65,181.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(237));

	// lo
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(253.05,225.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(237));

	// dis
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(109.25,227.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(237));

	// logo
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(238.2,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(237));

	// Heasd4
	this.instance_4 = new lib.text3("synched",0);
	this.instance_4.setTransform(86.4,44);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(173).to({_off:false},0).to({x:106.4,alpha:1},9,cjs.Ease.get(1)).wait(49).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(1));

	// Heasd3
	this.instance_5 = new lib.fr2();
	this.instance_5.setTransform(40.1,51.35,1,1,0,0,0,58.1,38.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(127).to({_off:false},0).to({x:70.1,alpha:1},9,cjs.Ease.get(1)).to({_off:true},37).wait(64));

	// Heasd2
	this.instance_6 = new lib.heading_02("synched",0);
	this.instance_6.setTransform(88.15,45.45);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({x:108.15,alpha:1},12,cjs.Ease.get(1)).wait(37).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(115));

	// head
	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.setTransform(33.75,42.45);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:73.75,alpha:1},9,cjs.Ease.get(1)).wait(37).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// PIC4
	this.instance_8 = new lib.Symbol1_1("synched",71);
	this.instance_8.setTransform(294.15,50.3,0.48,0.48,0,0,0,0.1,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(172).to({_off:false},0).wait(1).to({regX:-28.1,regY:17.6,x:287.5,y:58.65,alpha:0.0681,startPosition:72},0).wait(1).to({x:294.4,alpha:0.136,startPosition:73},0).wait(1).to({x:301.3,alpha:0.2037,startPosition:74},0).wait(1).to({x:308.15,alpha:0.2712,startPosition:75},0).wait(1).to({x:315,alpha:0.3384,startPosition:76},0).wait(1).to({x:321.8,alpha:0.4055,startPosition:77},0).wait(1).to({x:328.6,alpha:0.4724,startPosition:78},0).wait(1).to({x:335.35,alpha:0.5391,startPosition:79},0).wait(1).to({x:342.1,alpha:0.6055,startPosition:80},0).wait(1).to({x:348.85,alpha:0.6718,startPosition:81},0).wait(1).to({x:355.55,alpha:0.7378,startPosition:82},0).wait(1).to({x:362.25,alpha:0.8037,startPosition:83},0).wait(1).to({x:368.95,alpha:0.8693,startPosition:84},0).wait(1).to({x:375.6,alpha:0.9348,startPosition:85},0).wait(1).to({regX:0.2,regY:0.3,scaleX:0.4799,scaleY:0.4799,x:395.8,y:50.35,alpha:1,startPosition:75},0).wait(1).to({regX:-28.1,regY:17.6,scaleX:0.48,scaleY:0.48,x:388.75,y:58.6,startPosition:76},0).wait(1).to({x:395.2,startPosition:77},0).wait(1).to({x:401.4,startPosition:78},0).wait(1).to({x:407.45,startPosition:79},0).wait(1).to({x:413.3,startPosition:80},0).wait(1).to({x:418.95,startPosition:81},0).wait(1).to({x:424.45,startPosition:82},0).wait(1).to({x:429.7,startPosition:83},0).wait(1).to({x:434.85,startPosition:84},0).wait(1).to({x:439.75,startPosition:85},0).wait(1).to({x:444.5,startPosition:86},0).wait(1).to({x:449.05,startPosition:87},0).wait(1).to({x:453.4,startPosition:88},0).wait(1).to({x:457.6,startPosition:89},0).wait(1).to({x:461.55,startPosition:90},0).wait(1).to({x:465.4,startPosition:91},0).wait(1).to({x:469,startPosition:92},0).wait(1).to({x:472.45,startPosition:93},0).wait(1).to({x:475.7,startPosition:94},0).wait(1).to({x:478.75,startPosition:95},0).wait(1).to({x:481.65,startPosition:96},0).wait(1).to({x:484.35,startPosition:97},0).wait(1).to({x:486.85,startPosition:98},0).wait(1).to({x:489.15,startPosition:99},0).wait(1).to({x:491.3,startPosition:100},0).wait(1).to({x:493.25,startPosition:101},0).wait(1).to({x:495,startPosition:102},0).wait(1).to({x:496.6,startPosition:103},0).wait(1).to({x:498,startPosition:104},0).wait(1).to({x:499.2,startPosition:105},0).wait(1).to({x:500.2,startPosition:106},0).wait(1).to({x:501.05,startPosition:107},0).wait(1).to({x:501.7,startPosition:108},0).wait(1).to({x:502.15,startPosition:109},0).wait(1).to({x:502.45,startPosition:110},0).wait(1).to({regX:0.1,regY:0.2,x:516.15,y:50.3,startPosition:166},0).wait(8).to({startPosition:6},0).to({alpha:0,startPosition:10},4).to({_off:true},1).wait(1));

	// PIC3
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(291.3,65.8,0.6925,0.6925);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(126).to({_off:false},0).to({regX:0.1,regY:0.1,x:348.05,alpha:1},12).to({x:513.4,y:65.85},34).to({regX:0,regY:0,x:518.25,y:65.8,alpha:0},5).to({_off:true},1).wait(59));

	// PIC2
	this.instance_10 = new lib.PIC2();
	this.instance_10.setTransform(266.6,60.2,0.3635,0.3635,0,0,0,130.6,83.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({_off:false},0).to({regX:130.7,regY:83.4,scaleX:0.3634,scaleY:0.3634,x:294.95,alpha:1},10).to({regX:130.6,regY:83.2,scaleX:0.3635,scaleY:0.3635,x:510.95},45).wait(1).to({x:516.95,alpha:0},3).to({_off:true},1).wait(110));

	// PIC1
	this.instance_11 = new lib.pic1();
	this.instance_11.setTransform(291.6,65.2,0.3635,0.3635,0,0,0,115.5,110.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).to({regX:115.7,regY:110.4,scaleX:0.3634,scaleY:0.3634,x:398.7,y:65.25,alpha:1},20).to({regX:115.5,regY:110.2,scaleX:0.3635,scaleY:0.3635,x:516.95,y:65.2},33).to({x:517.95,alpha:0},6).to({_off:true},1).wait(170));

	// Layer_2
	this.instance_12 = new lib.Tween14("synched",0);
	this.instance_12.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(237));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(237));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,0,749.5,100.9);


// stage content:
(lib.WBAY_213628_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(150,52.1,1,0.4167,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,365,205.5);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"log.jpg", id:"log"},
		{src:"logo.png", id:"logo"}
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