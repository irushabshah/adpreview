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
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


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
p.nominalBounds = new cjs.Rectangle(-150,-125,1024,90);


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
	this.shape.graphics.f("#000000").s().p("AgOBBIAAgeIAdAAIAAAegAgHAVIgJhSIAAgDIAhAAIAAADIgJBSg");
	this.shape.setTransform(119.925,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAzIAAg3QAAgUgQgBQgSABABAUIAAA3IgdAAIAAhjIAdAAIAAAOQAMgQAQAAQAQAAAJAKQAJAKAAARIAABAg");
	this.shape_1.setTransform(111.15,3.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkApQgJgKAAgRIAAhAIAcAAIAAA3QABAUAQAAQARAAABgUIAAg3IAcAAIAABjIgcAAIAAgOQgNAQgQAAQgQAAgJgKg");
	this.shape_2.setTransform(99.5,3.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxBBIAAiBIBjAAIAAAaIhGAAIAAAcIA9AAIAAAZIg9AAIAAAyg");
	this.shape_3.setTransform(87.95,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAzIAAhjIAcAAIAAAUQAJgXAWABIAAAeIgBAAQgeAAAAAiIAAAlg");
	this.shape_4.setTransform(72.275,3.7479);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkApQgJgKAAgRIAAhAIAdAAIAAA3QgBAUARAAQASAAAAgUIAAg3IAcAAIAABjIgcAAIAAgOQgNAQgQAAQgQAAgJgKg");
	this.shape_5.setTransform(62.2,3.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAlQgPgPAAgWIAAAAQAAgVAPgPQAQgPAWAAQAXAAAQAPQAPAPAAAVIAAAAQAAAWgPAPQgQAPgXAAQgWAAgQgPgAgSgTQgHAIAAALIAAAAQAAALAHAIQAIAIAKAAQAMAAAHgIQAHgHAAgMIAAAAQAAgLgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(50.225,3.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNBBIAAgzIgzhOIAiAAIAeA0IAgg0IAhAAIgzBOIAAAzg");
	this.shape_7.setTransform(37.35,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAmQgOgPAAgXIAAAAQAAgVANgPQAPgPAVAAQAXAAANAQQAMAPAAAWIAAAIIhFAAQAEATATAAQAOAAALgKIAQAOQgPATgaAAQgWAAgPgOgAAVgHQgBgKgFgGQgGgFgIAAQgRAAgEAVIApAAIAAAAg");
	this.shape_8.setTransform(19.3,3.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAlQgOgPAAgWIAAAAQAAgVAOgPQAPgPAWAAQAZAAAPAQIgSATQgKgLgNAAQgIAAgIAIQgGAIAAALIAAAAQgBAMAIAHQAGAIALAAQAMAAALgKIARARQgRASgZAAQgVAAgPgPg");
	this.shape_9.setTransform(8.4,3.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAzIAAg3QABgUgSgBQgRABAAAUIAAA3IgcAAIAAhjIAcAAIAAAOQANgQAQAAQAQAAAJAKQAJAKAAARIAABAg");
	this.shape_10.setTransform(-2.8,3.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjAsQgKgJAAgOQAAgQALgIQALgHASAAQAMAAAMAEIAAgCQgBgSgUAAQgNAAgPAFIgHgWQATgIATAAQAXAAALAMQALALAAAVIAAA5IgbAAIAAgLQgMANgSAAQgOAAgKgIgAgSATIAAABQAAAFAFAEQADADAIAAQAIAAAHgFQAGgFAAgIIAAgFQgIgDgKAAQgTAAAAANg");
	this.shape_11.setTransform(-14.4,3.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAzIAAg3QAAgUgRgBQgQABgBAUIAAA3IgcAAIAAhjIAcAAIAAAOQANgQAQAAQAQAAAJAKQAJAKAAARIAABAg");
	this.shape_12.setTransform(-25.5,3.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNBEIAAhjIAcAAIAABjgAgOgqIAAgZIAdAAIAAAZg");
	this.shape_13.setTransform(-34.15,2.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgxBBIAAiBIBjAAIAAAaIhGAAIAAAcIA9AAIAAAZIg9AAIAAAyg");
	this.shape_14.setTransform(-42.65,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-8.3,176.8,23.1);


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
	this.instance.setTransform(-9,-38,0.7233,0.7233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-38,121.5,65.8);


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
	this.instance.setTransform(615,-219,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(615,-219,76.20000000000005,35.69999999999999);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAGAAIAAAHg");
	this.shape.setTransform(858.9,-154.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_1.setTransform(857.25,-157.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAIgEAGAAQAIAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgGAAgEgEgAgHACQgEACAAAEQAAAEAEACQADACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_2.setTransform(854.1,-156.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAUIgRgnIAHAAIAMAgIAOggIAGAAIgRAng");
	this.shape_3.setTransform(850.4,-156.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJIAAAAQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgIAAgGgGgAgJgKQgFAEAAAGQAAAGAFAFQAEAEAFAAQAHAAAEgEQAEgFAAgGIAAAAQAAgGgEgEQgFgFgGAAQgFAAgEAFg");
	this.shape_4.setTransform(846.425,-156.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_5.setTransform(843.175,-156.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAaIAAgzIAGAAIAAAIQAGgJAIAAQAIAAAFAGQAGAGAAAJQAAAJgGAFQgFAGgIAAQgIAAgGgJIAAAUgAgJgQQgEAFAAAGQAAAGAEAFQAEADAFAAQAGAAAEgDQAEgFAAgGQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_6.setTransform(839.825,-155.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAaIAAgzIAGAAIAAAIQAGgJAIAAQAIAAAFAGQAGAGAAAJQAAAJgGAFQgFAGgIAAQgIAAgGgJIAAAUgAgJgQQgEAFAAAGQAAAGAEAFQAEADAFAAQAGAAAEgDQAEgFAAgGQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_7.setTransform(835.625,-155.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAHgEAHAAQAIAAAEAFQAEAEABAHIAAAYIgGAAIAAgGQgFAHgJAAQgGAAgEgEgAgHACQgEACAAAEQAAAEAEACQADACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_8.setTransform(830.8,-156.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_9.setTransform(826.025,-156.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAbIAAgnIAFAAIAAAngAgCgUIAAgHIAFAAIAAAHg");
	this.shape_10.setTransform(823.825,-157.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAXQgGgGAAgKQAAgHAGgGQAFgGAIAAQAIAAAGAJIAAgZIAGAAIAAA3IgGAAIAAgHQgGAIgIABQgIAAgFgGgAgJgDQgEAEAAAGQAAAIAEAEQAEAEAFAAQAGAAAEgEQAEgEABgIQgBgGgEgDQgEgFgGAAQgFAAgEAEg");
	this.shape_11.setTransform(821.05,-157.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIgBACIgeAAQABAGAEAEQAEAEAEAAQAIAAAFgGIADADQgGAIgKAAQgIAAgFgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgEAEQgDAEgBAGIAZAAIAAAAg");
	this.shape_12.setTransform(816.65,-156.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_13.setTransform(813.575,-156.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAPQgFgGAAgJIAAAAQAAgIAFgGQAHgGAHAAQAKAAAGAHIgEAEQgGgGgGAAQgFAAgEAFQgFAEAAAGQAAAGAFAFQAEAEAGAAQAGAAAFgGIAFAEQgIAIgJAAQgHAAgHgGg");
	this.shape_14.setTransform(810.2,-156.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJIAAAAQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgIAAgGgGgAgJgKQgFAEAAAGQAAAGAFAFQAEAEAFAAQAHAAAEgEQAEgFAAgGIAAAAQAAgGgEgEQgFgFgGAAQgFAAgEAFg");
	this.shape_15.setTransform(804.125,-156.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_16.setTransform(801.075,-156.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_17.setTransform(796.875,-156.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLAPQgHgGABgJIAAAAQgBgIAHgGQAFgGAIAAQAJAAAHAHIgEAEQgFgGgHAAQgFAAgEAFQgFAEABAGQgBAGAFAFQAEAEAFAAQAHAAAGgGIAEAEQgIAIgJAAQgIAAgFgGg");
	this.shape_18.setTransform(793.75,-156.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQAEAEAEAAQAIAAAEgGIAFADQgIAIgJAAQgHAAgGgGgAANgBQAAgGgEgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_19.setTransform(789.6,-156.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAhIAAgEIADAAQAEAAAAgGIAAgpIAFAAIAAAqQAAAKgIAAIgEgBgAABgaIAAgHIAGAAIAAAHg");
	this.shape_20.setTransform(786.25,-156.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAUIAAAHIgGAAIAAg3IAGAAIAAAZQAGgJAIAAQAIAAAFAGQAGAFAAAIQAAAKgGAGQgFAGgIAAQgIAAgGgJgAgJgCQgEADAAAGQAAAIAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgIQAAgGgEgDQgEgFgGAAQgFAAgEAFg");
	this.shape_21.setTransform(784.025,-157.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAQQgEgFAAgGIAAgZIAGAAIAAAXQAAAGADADQACADAFAAQAFAAADgDQAEgEAAgFIAAgXIAFAAIAAAnIgFAAIAAgGQgFAHgIABQgHAAgEgFg");
	this.shape_22.setTransform(779.425,-156.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAPIADgFQAGAGAGAAQAEAAACgCQADgCAAgDQAAgDgDgBIgHgDIgIgCQgFgDAAgFQAAgFAEgEQAEgDAFAAQAIAAAGAFIgCAEQgGgEgGAAQgDAAgCACQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQABABAAABQAAAAABAAQAAABABAAIAGADQAGACADABQAEADAAAEIAAABQAAAFgEADQgEAEgGAAQgIAAgHgGg");
	this.shape_23.setTransform(775.125,-156.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALAUIAAgWQAAgGgCgDQgDgDgFAAQgFAAgDADQgDAEAAAFIAAAWIgGAAIAAgnIAGAAIAAAHQAEgHAIAAQAHAAAEAEQAFAEAAAIIAAAXg");
	this.shape_24.setTransform(769.35,-156.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJIAAAAQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgIAAgGgGgAgJgKQgFAEAAAGQAAAGAFAFQAEAEAFAAQAHAAAEgEQAEgFAAgGIAAAAQAAgGgEgEQgFgFgGAAQgFAAgEAFg");
	this.shape_25.setTransform(765.175,-156.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAbIAAgnIAFAAIAAAngAgCgUIAAgHIAFAAIAAAHg");
	this.shape_26.setTransform(762.025,-157.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_27.setTransform(760.425,-156.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgFAAgGADIgCgFQAHgEAHAAQAIAAAEAFQAFAEAAAHIAAAYIgGAAIAAgGQgGAHgHAAQgGAAgFgEgAgHACQgDACAAAEQAAAEADACQACACAFAAQAEAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_28.setTransform(756.75,-156.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAPQgFgGAAgJIAAAAQAAgIAFgGQAHgGAHAAQAKAAAGAHIgEAEQgGgGgGAAQgFAAgEAFQgFAEAAAGQAAAGAFAFQAEAEAGAAQAGAAAFgGIAFAEQgIAIgJAAQgHAAgHgGg");
	this.shape_29.setTransform(753.05,-156.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAbIAAgnIAFAAIAAAngAgCgUIAAgHIAFAAIAAAHg");
	this.shape_30.setTransform(750.125,-157.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_31.setTransform(748.4,-157.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAaIAAgzIAGAAIAAAIQAGgJAIAAQAIAAAFAGQAGAGAAAJQAAAJgGAFQgFAGgIAAQgIAAgGgJIAAAUgAgJgQQgEAFAAAGQAAAGAEAFQAEADAFAAQAGAAAEgDQAEgFAAgGQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_32.setTransform(745.875,-155.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTAaIAAgzIAGAAIAAAIQAGgJAIAAQAIAAAFAGQAGAGAAAJQAAAJgGAFQgFAGgIAAQgIAAgGgJIAAAUgAgJgQQgEAFAAAGQAAAGAEAFQAEADAFAAQAGAAAEgDQAEgFAAgGQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_33.setTransform(741.625,-155.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAVAbIgGgOIgdAAIgGAOIgHAAIAZg1IAFAAIAYA1gAAMAIIgMgbIgLAbIAXAAg");
	this.shape_34.setTransform(736.9,-157.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_35.setTransform(892.4,-163.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRAYIACgEQADABADAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQACgBACgEIgSgnIAGAAIAOAgIANggIAGAAIgRAoQgCAGgCADQgDACgEAAQgFAAgEgCg");
	this.shape_36.setTransform(889.85,-164.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_37.setTransform(886.9,-166);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTAbIAAg0IAGAAIAAAIQAGgJAIABQAIgBAFAGQAGAGAAAJQAAAIgGAHQgFAFgIAAQgIAAgGgJIAAAVgAgJgQQgEAFAAAGQAAAGAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgGQAAgHgEgEQgEgEgGgBQgFABgEAEg");
	this.shape_38.setTransform(884.325,-164.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTAbIAAg0IAGAAIAAAIQAGgJAIABQAIgBAFAGQAGAGAAAJQAAAIgGAHQgFAFgIAAQgIAAgGgJIAAAVgAgJgQQgEAFAAAGQAAAGAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgGQAAgHgEgEQgEgEgGgBQgFABgEAEg");
	this.shape_39.setTransform(880.125,-164.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLARQgGgDAAgGQAAgGAGgDQAEgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAIgEAFAAQAJAAAFAFQAEAEAAAHIAAAYIgGAAIAAgGQgGAHgHAAQgHAAgDgEgAgIACQgCACAAAEQAAAEACACQAEACAEAAQAEAAAEgDQAEgDAAgFIAAgEIgMgBQgFAAgDACg");
	this.shape_40.setTransform(875.3,-165.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOAPIADgFQAGAGAGAAQAEAAACgCQADgCAAgDQAAgDgDgBIgHgDIgIgCQgFgDAAgFQAAgFAEgEQAEgDAFAAQAIAAAGAFIgCAEQgGgEgGAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAADADABIAGADQAGACADABQAEADAAAEIAAABQAAAFgEADQgEAEgGAAQgIAAgHgGg");
	this.shape_41.setTransform(869.125,-165.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAUIAAgWQAAgGgCgDQgEgDgFAAQgDAAgEADQgEAEABAFIAAAWIgHAAIAAgnIAHAAIAAAHQAEgHAIAAQAHAAAFAEQAEAEAAAIIAAAXg");
	this.shape_42.setTransform(865.4,-165.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJIAAAAQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgIAAgGgGgAgJgKQgFAEAAAGQAAAGAFAFQAEAEAFAAQAHAAAEgEQAEgFAAgGIAAAAQAAgGgEgEQgFgFgGAAQgFAAgEAFg");
	this.shape_43.setTransform(861.275,-165.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_44.setTransform(858.125,-165.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_45.setTransform(856.525,-165.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMAPQgFgGAAgJIAAAAQAAgIAFgGQAHgGAHAAQAKAAAGAHIgEAEQgGgGgGAAQgFAAgEAFQgFAEAAAGQAAAGAFAFQAEAEAGAAQAGAAAFgGIAFAEQgIAIgJAAQgHAAgHgGg");
	this.shape_46.setTransform(853.4,-165.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_47.setTransform(850.475,-165.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_48.setTransform(848.675,-165.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_49.setTransform(846.325,-165.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAPIADgFQAGAGAGAAQAEAAACgCQADgCAAgDQAAgDgDgBIgHgDIgIgCQgFgDAAgFQAAgFAEgEQAEgDAFAAQAIAAAGAFIgCAEQgGgEgGAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADQAGACADABQAEADAAAEIAAABQAAAFgEADQgEAEgGAAQgIAAgHgGg");
	this.shape_50.setTransform(842.825,-165.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIgBACIgeAAQABAGAEAEQADAEAFAAQAHAAAGgGIADADQgGAIgKAAQgHAAgGgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgEAEQgDAEgBAGIAZAAIAAAAg");
	this.shape_51.setTransform(839.05,-165.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_52.setTransform(835.975,-165.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AALAUIAAgWQAAgGgCgDQgEgDgFAAQgDAAgEADQgEAEABAFIAAAWIgHAAIAAgnIAHAAIAAAHQAEgHAIAAQAHAAAFAEQAEAEAAAIIAAAXg");
	this.shape_53.setTransform(830.3,-165.225);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_54.setTransform(827.175,-165.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAHgEAHAAQAIAAAEAFQAEAEABAHIAAAYIgGAAIAAgGQgFAHgJAAQgGAAgEgEgAgHACQgEACAAAEQAAAEAEACQADACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_55.setTransform(824.05,-165.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_56.setTransform(821.375,-165.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_57.setTransform(819.075,-165.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQADAEAFAAQAIAAAFgGIADADQgGAIgKAAQgIAAgFgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_58.setTransform(815.4,-165.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQAUQgHgIgBgMQABgKAHgJQAIgIALAAQAMAAAJAIIgEAFQgIgHgJAAQgIAAgGAGQgGAGAAAJQAAAJAGAHQAGAHAIAAQAJgBAIgHIAFADQgKAKgMAAQgLAAgIgIg");
	this.shape_59.setTransform(810.5,-165.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAGAAIAAAHg");
	this.shape_60.setTransform(804.3,-163.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgNAXQgGgGAAgKQAAgHAGgGQAFgGAIAAQAIAAAGAIIAAgYIAGAAIAAA4IgGAAIAAgIQgGAIgIABQgIgBgFgFgAgJgDQgEAEAAAGQAAAIAEAEQAEAEAFAAQAGAAAEgEQAFgEgBgIQABgGgFgEQgEgEgGAAQgFAAgEAEg");
	this.shape_61.setTransform(801.55,-165.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIgBACIgeAAQABAGAEAEQADAEAFAAQAHAAAGgGIADADQgGAIgKAAQgHAAgGgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgEAEQgDAEgBAGIAZAAIAAAAg");
	this.shape_62.setTransform(797.2,-165.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_63.setTransform(794.125,-165.225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_64.setTransform(791.675,-165.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMAQQgEgFAAgGIAAgZIAGAAIAAAXQAAAGADADQACADAFAAQAFAAADgDQAEgEAAgFIAAgXIAFAAIAAAoIgFAAIAAgHQgFAHgIABQgHgBgEgEg");
	this.shape_65.setTransform(788.725,-165.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAOAbIAAgVQgGAJgIAAQgIAAgFgFQgGgHAAgIQAAgJAGgGQAFgGAIABQAIgBAGAJIAAgIIAGAAIAAA0gAgJgQQgEAEAAAHQAAAGAEAEQAEAFAFAAQAGAAAEgFQAEgEABgGQgBgGgEgFQgEgEgGgBQgFAAgEAFg");
	this.shape_66.setTransform(784.6,-164.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQADAEAFAAQAHAAAFgGIAFADQgIAIgJAAQgIAAgFgGgAANgBQAAgGgEgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_67.setTransform(780.25,-165.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_68.setTransform(777.175,-165.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgRAYIACgEQADABADAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQACgBACgEIgSgnIAGAAIAOAgIANggIAGAAIgRAoQgCAGgCADQgDACgEAAQgFAAgEgCg");
	this.shape_69.setTransform(771.7,-164.575);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_70.setTransform(768.925,-165.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_71.setTransform(766.675,-165.95);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_72.setTransform(764.95,-166);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_73.setTransform(763.275,-165.95);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgNAUIAAAIIgGAAIAAg4IAGAAIAAAYQAGgIAIAAQAIAAAFAGQAGAFAAAIQAAAKgGAGQgFAFgIABQgIAAgGgJgAgJgDQgEAEAAAGQAAAIAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgIQAAgGgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_74.setTransform(760.725,-165.95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_75.setTransform(757.325,-165.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgSAVIAEgFQAHAGAHAAQAHgBADgDQAEgEAAgHIAAgEQgGAIgJAAQgHAAgFgFQgGgGAAgGIAAgBQAAgIAGgGQAFgEAHAAQAJAAAGAIIAAgIIAGAAIAAAgQAAAJgFAFQgGAGgJAAQgJAAgJgGgAgJgRQgEAEAAAGQAAAGAEADQAEAEAFgBQAGABAEgEQAEgDABgGQgBgGgEgDQgEgFgGAAQgFABgEADg");
	this.shape_76.setTransform(754.55,-164.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_77.setTransform(751.425,-165.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_78.setTransform(749.7,-166);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQAEAEAEAAQAIAAAEgGIAFADQgIAIgJAAQgHAAgGgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_79.setTransform(746.75,-165.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgTAbIAAg0IAGAAIAAAIQAGgJAIABQAIgBAFAGQAGAGAAAJQAAAIgGAHQgFAFgIAAQgIAAgGgJIAAAVgAgJgQQgEAFAAAGQAAAGAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgGQAAgHgEgEQgEgEgGgBQgFABgEAEg");
	this.shape_80.setTransform(740.775,-164.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_81.setTransform(737.425,-165.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AALAcIAAgXQABgFgDgDQgEgDgEgBQgEABgEADQgEADAAAFIAAAXIgFAAIAAg3IAFAAIAAAXQAGgIAHABQAIgBADAFQAFAEAAAGIAAAZg");
	this.shape_82.setTransform(734.6,-166);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgOAPIADgFQAGAGAGAAQAEAAACgCQADgCAAgDQAAgDgDgBIgHgDIgIgCQgFgDAAgFQAAgFAEgEQAEgDAFAAQAIAAAGAFIgCAEQgGgEgGAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABABAAIAGADQAGACADABQAEADAAAEIAAABQAAAFgEADQgEAEgGAAQgIAAgHgGg");
	this.shape_83.setTransform(730.225,-165.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_84.setTransform(727.575,-165.225);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIgBACIgeAAQABAGAEAEQADAEAFAAQAHAAAGgGIADADQgGAIgKAAQgHAAgGgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgEAEQgDAEgBAGIAZAAIAAAAg");
	this.shape_85.setTransform(723.85,-165.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNAUIAAAIIgGAAIAAg4IAGAAIAAAYQAGgIAIAAQAIAAAFAGQAGAFAAAIQAAAKgGAGQgFAFgIABQgIAAgGgJgAgJgDQgEAEAAAGQAAAIAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgIQAAgGgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_86.setTransform(720.025,-165.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAYAUIAAgWQAAgGgCgDQgDgDgFAAQgFAAgDADQgDAEAAAFIAAAWIgFAAIAAgWQAAgGgDgDQgCgDgFAAQgFAAgDAEQgDADAAAGIAAAVIgGAAIAAgnIAGAAIAAAHQAFgHAIAAQAJAAACAIQAGgIAIAAQAHAAAEAEQAEAEAAAIIAAAXg");
	this.shape_87.setTransform(714.625,-165.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIgBACIgeAAQABAGAEAEQADAEAFAAQAHAAAGgGIADADQgGAIgKAAQgHAAgGgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgEAEQgDAEgBAGIAZAAIAAAAg");
	this.shape_88.setTransform(709,-165.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAUAbIAAgrIgUAcIAAAAIgTgcIAAArIgGAAIAAg1IAHAAIASAcIAUgcIAGAAIAAA1g");
	this.shape_89.setTransform(703.675,-165.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_90.setTransform(895.15,-172.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAGgGQAFgGAHAAQAJAAAFAGQAFAGAAAIIgBACIgeAAQABAGAEAEQAEAEAEAAQAHAAAGgGIADADQgGAIgKAAQgIAAgFgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgEAEQgDAEgBAGIAZAAIAAAAg");
	this.shape_91.setTransform(892.25,-173.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_92.setTransform(889.25,-174.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgNAUIAAAIIgGAAIAAg3IAGAAIAAAXQAGgIAIAAQAIAAAFAFQAGAGAAAJQAAAJgGAGQgFAFgIAAQgIAAgGgIgAgJgDQgEAEAAAHQAAAGAEAFQAEAEAFAAQAGAAAEgEQAEgFAAgGQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_93.setTransform(886.725,-174.75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgLARQgFgDgBgGQABgGAFgDQAEgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgFAAgGADIgCgFQAIgEAFAAQAJAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgFAAgEgEgAgIACQgDACAAAEQAAAEADACQAEACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgFAAgDACg");
	this.shape_94.setTransform(881.9,-173.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_95.setTransform(879.1,-174.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIAAgGIAFAAIAAAGg");
	this.shape_96.setTransform(877.425,-174.75);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMARQgEgDgBgGQABgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgFAAgGADIgCgFQAIgEAFAAQAJAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgFAAgFgEgAgIACQgDACAAAEQAAAEADACQAEACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgEACg");
	this.shape_97.setTransform(874.25,-173.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgBAUIgSgnIAHAAIAMAgIAOggIAGAAIgRAng");
	this.shape_98.setTransform(870.55,-173.975);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLARQgFgDgBgGQABgGAFgDQAEgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgFAAgGADIgCgFQAIgEAFAAQAJAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgFAAgEgEgAgIACQgDACAAAEQAAAEADACQAEACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgFAAgDACg");
	this.shape_99.setTransform(866.15,-173.975);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgOAPIADgFQAGAGAGAAQAEAAACgCQADgCAAgDQAAgDgDgBIgHgDIgIgCQgFgDAAgFQAAgFAEgEQAEgDAFAAQAIAAAGAFIgCAEQgGgEgGAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAGADQAGACADABQAEADAAAEIAAABQAAAFgEADQgEAEgGAAQgIAAgHgGg");
	this.shape_100.setTransform(860.025,-173.975);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAYAUIAAgWQAAgGgCgDQgDgDgFAAQgFAAgDADQgDAEAAAFIAAAWIgFAAIAAgWQAAgGgDgDQgCgDgFAAQgFAAgDAEQgDADAAAGIAAAVIgGAAIAAgnIAGAAIAAAHQAFgHAIAAQAJAAACAIQAGgIAIAAQAHAAAEAEQAEAEAAAIIAAAXg");
	this.shape_101.setTransform(855.425,-174.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_102.setTransform(850.975,-174.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQADAEAFAAQAHAAAFgGIAFADQgIAIgJAAQgIAAgFgGgAANgBQAAgGgEgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_103.setTransform(847.3,-173.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_104.setTransform(844.425,-174.575);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgOAXQgFgGAAgJQAAgJAFgGQAGgFAIAAQAIAAAGAIIAAgXIAGAAIAAA3IgGAAIAAgJQgGAKgIgBQgIAAgGgFgAgJgDQgEADAAAIQAAAGAEAFQAEAEAFAAQAGAAAEgEQAFgFgBgGQABgHgFgEQgEgEgGAAQgFAAgEAEg");
	this.shape_105.setTransform(839,-174.75);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAMAUIAAgWQAAgGgEgDQgDgDgEAAQgFAAgDADQgDAEgBAFIAAAWIgFAAIAAgnIAFAAIAAAHQAGgHAHAAQAIAAAEAEQADAEAAAIIAAAXg");
	this.shape_106.setTransform(834.75,-174.025);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgLARQgGgDABgGQgBgGAGgDQAEgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAHgEAGAAQAJAAAEAFQAFAEAAAHIAAAYIgGAAIAAgGQgGAHgHAAQgHAAgDgEgAgHACQgDACAAAEQAAAEADACQACACAFAAQAEAAAEgDQAEgDAAgFIAAgEIgMgBQgFAAgCACg");
	this.shape_107.setTransform(830.2,-173.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgOAPIADgFQAGAGAGAAQAEAAACgCQADgCAAgDQAAgDgDgBIgHgDIgIgCQgFgDAAgFQAAgFAEgEQAEgDAFAAQAIAAAGAFIgCAEQgGgEgGAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADADABIAGADQAGACADABQAEADAAAEIAAABQAAAFgEADQgEAEgGAAQgIAAgHgGg");
	this.shape_108.setTransform(824.025,-173.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQAEAEAEAAQAIAAAEgGIAFADQgIAIgJAAQgHAAgGgGgAANgBQAAgGgEgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_109.setTransform(820.2,-173.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_110.setTransform(817.375,-174.575);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAHgEAHAAQAIAAAEAFQAEAEABAHIAAAYIgGAAIAAgGQgFAHgJAAQgFAAgFgEgAgHACQgEACAAAEQAAAEAEACQACACAEAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_111.setTransform(813.7,-173.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_112.setTransform(810.825,-174.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_113.setTransform(806.25,-174.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_114.setTransform(804.55,-174.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAIgEAGAAQAIAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgGAAgEgEgAgHACQgEACAAAEQAAAEAEACQADACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_115.setTransform(801.45,-173.975);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_116.setTransform(796.475,-174.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJIAAAAQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgIAAgGgGgAgJgKQgFAEAAAGQAAAGAFAFQAEAEAFAAQAHAAAEgEQAEgFAAgGIAAAAQAAgGgEgEQgFgFgGAAQgFAAgEAFg");
	this.shape_117.setTransform(792.975,-173.975);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgFAcIAAghIgGAAIAAgFIAGAAIAAgEQAAgHADgDQACgDAFAAIAHABIAAAFIgGgBQgGAAAAAIIAAAEIAMAAIAAAFIgMAAIAAAhg");
	this.shape_118.setTransform(789.95,-174.825);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgKAUIAAgnIAGAAIAAALQACgFADgDQAFgDAFAAIAAAGIAAAAQgHAAgEAFQgEAFAAAHIAAAQg");
	this.shape_119.setTransform(785.525,-174.025);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQAEAEAEAAQAIAAAEgGIAFADQgIAIgJAAQgHAAgGgGgAANgBQgBgGgDgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_120.setTransform(781.85,-173.975);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgNAXQgGgGAAgJQAAgJAGgGQAFgFAIAAQAIAAAGAIIAAgXIAGAAIAAA3IgGAAIAAgJQgGAKgIgBQgIAAgFgFgAgJgDQgEADAAAIQAAAGAEAFQAEAEAFAAQAFAAAFgEQAEgFABgGQgBgHgEgEQgFgEgFAAQgFAAgEAEg");
	this.shape_121.setTransform(777.75,-174.75);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAMAUIAAgWQAAgGgEgDQgCgDgGAAQgEAAgDADQgDAEgBAFIAAAWIgGAAIAAgnIAGAAIAAAHQAFgHAIAAQAIAAAEAEQADAEAAAIIAAAXg");
	this.shape_122.setTransform(773.45,-174.025);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgMAPQgGgGAAgJQAAgIAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAIIAAACIgfAAQABAGAEAEQADAEAFAAQAIAAAEgGIAFADQgIAIgJAAQgHAAgGgGgAANgBQAAgGgEgEQgDgEgGAAQgEAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_123.setTransform(769.15,-173.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgRAbIAAg1IAGAAIAAAwIAdAAIAAAFg");
	this.shape_124.setTransform(765.175,-174.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgPAVQgGgGAAgLIAAgeIAGAAIAAAdQAAAJAEAFQAEAFAHgBQAIAAAEgDQAEgFAAgJIAAgeIAGAAIAAAdQAAAMgGAGQgGAHgKgBQgJABgGgHg");
	this.shape_125.setTransform(757.875,-174.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgQAUQgHgIgBgMQABgKAHgJQAIgIALAAQAMAAAJAIIgEAFQgIgHgJAAQgIAAgGAGQgGAHAAAIQAAAKAGAGQAGAGAIABQAJAAAIgJIAFAEQgKAKgMAAQgLAAgIgIg");
	this.shape_126.setTransform(752.35,-174.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAUAbIAAgqIgUAbIAAAAIgTgbIAAAqIgGAAIAAg1IAHAAIASAdIAUgdIAGAAIAAA1g");
	this.shape_127.setTransform(746.325,-174.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgQAUQgHgIgBgMQABgKAHgJQAIgIALAAQAMAAAJAIIgEAFQgIgHgJAAQgIAAgGAGQgGAHAAAIQAAAKAGAGQAGAGAIABQAJAAAIgJIAFAEQgKAKgMAAQgLAAgIgIg");
	this.shape_128.setTransform(740.4,-174.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgTAbIAAg1IATAAQAJAAAGAFQAFAEAAAIIAAAAQAAAIgGAFQgGAEgIAAIgNAAIAAATgAgNADIANAAQAGAAAEgDQAEgDAAgGQAAgFgEgEQgEgDgGAAIgNAAg");
	this.shape_129.setTransform(735.125,-174.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgMARQgEgDAAgGQAAgGAEgDQAFgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgEAAgHADIgCgFQAHgEAHAAQAIAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgGAAgEgEgAgHACQgEACAAAEQAAAEAEACQADACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgEAAgDACg");
	this.shape_130.setTransform(728.1,-173.975);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_131.setTransform(723.375,-174.575);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgLAPQgHgGAAgJIAAAAQAAgIAHgGQAFgGAIAAQAJAAAHAHIgEAEQgGgGgGAAQgFAAgEAFQgEAEAAAGQAAAGAEAFQAEAEAGAAQAGAAAGgGIADAEQgGAIgKAAQgIAAgFgGg");
	this.shape_132.setTransform(720.25,-173.975);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgLARQgFgDgBgGQABgGAFgDQAEgDAHAAQAGAAAGACIAAgBQAAgLgMAAQgFAAgGADIgCgFQAIgEAFAAQAJAAAFAFQADAEAAAHIAAAYIgFAAIAAgGQgFAHgJAAQgFAAgEgEgAgIACQgDACAAAEQAAAEADACQAEACADAAQAFAAAEgDQAEgDAAgFIAAgEIgMgBQgFAAgDACg");
	this.shape_133.setTransform(715.85,-173.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgGAPIAAgXIgFAAIAAgFIAFAAIAAgMIAGAAIAAAMIAMAAIAAAFIgMAAIAAAWQAAAHAGAAIAGgBIAAAFQgDABgEAAQgLAAAAgLg");
	this.shape_134.setTransform(713.175,-174.575);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AALAUIAAgWQABgGgDgDQgEgDgEAAQgEAAgEADQgEAEAAAFIAAAWIgFAAIAAgnIAFAAIAAAHQAGgHAHAAQAIAAADAEQAFAEAAAIIAAAXg");
	this.shape_135.setTransform(709.85,-174.025);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJIAAAAQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAGQgGAHgJAAQgIAAgGgGgAgJgKQgFAEAAAGQAAAGAFAFQAEAEAFAAQAHAAAEgEQAEgFAAgGIAAAAQAAgGgEgEQgFgFgGAAQgFAAgEAFg");
	this.shape_136.setTransform(705.675,-173.975);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgQAUQgHgIgBgMQABgKAHgJQAIgIALAAQAMAAAJAIIgEAFQgIgHgJAAQgIAAgGAGQgGAHAAAIQAAAKAGAGQAGAGAIABQAJAAAIgJIAFAEQgKAKgMAAQgLAAgIgIg");
	this.shape_137.setTransform(700.6,-174.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(695.4,-180.1,203.20000000000005,29.69999999999999);


(lib.text_04 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgMA8IAAgbIAaAAIAAAbgAgGATIgIhKIAAgDIAdAAIAAADIgIBKg");
	this.shape.setTransform(51.55,9.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMA8IAAgvIguhHIAfAAIAbAwIAdgwIAeAAIguBGIAAAwg");
	this.shape_1.setTransform(42.725,9.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkA8IgLgbIgyAAIgKAbIgbAAIAzh3IAXAAIAzB3gAAQAKIgQgmIgPAmIAfAAg");
	this.shape_2.setTransform(29.95,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2A8IAAh2IAuAAQAbAAASAQQASASAAAYIAAAAQAAAagSARQgSAQgbABgAgcAkIAUAAQAPAAAKgKQAKgKAAgQIAAAAQAAgPgKgKQgKgKgPAAIgUAAg");
	this.shape_3.setTransform(16.925,9.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsAsQgSgSAAgaIAAAAQAAgYASgTQASgSAaAAQAbAAASASQASASAAAZIAAAAQAAAagSASQgSARgbABQgagBgSgRgAgZgaQgKALAAAPIAAAAQAAAPAKALQALALAOAAQAQAAAKgLQAKgKAAgQIAAAAQAAgOgKgMQgLgLgPABQgPgBgKALg");
	this.shape_4.setTransform(2.775,9.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMA8IAAhfIgkAAIAAgXIBhAAIAAAXIgkAAIAABfg");
	this.shape_5.setTransform(-9.925,9.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAjQgOgNAAgWIAAAAQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_6.setTransform(87.725,-5.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgOgOAAgUIAAAAQAAgTAOgOQAOgNAUAAQAWAAAOAPIgQARQgJgKgMAAQgJAAgFAHQgHAIAAAJQAAALAHAHQAGAHAKAAQAKAAAKgJIAQAPQgQAQgWAAQgTABgOgOg");
	this.shape_7.setTransform(77.8,-5.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAuIAAgyQAAgSgQAAQgPAAAAASIAAAyIgaAAIAAhZIAaAAIAAAMQAMgOAOAAQAOAAAJAJQAIAIAAAQIAAA6g");
	this.shape_8.setTransform(67.625,-5.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgQAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_9.setTransform(57.05,-5.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAuIAAgyQAAgSgQAAQgPAAAAASIAAAyIgaAAIAAhZIAaAAIAAAMQAMgOAOAAQAOAAAJAJQAIAIAAAQIAAA6g");
	this.shape_10.setTransform(47.025,-5.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_11.setTransform(39.175,-7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRA/IAAhEIgLAAIAAgVIALAAIAAgGQAAgPAIgHQAHgIAMAAQALAAAIADIAAAVQgGgCgGAAQgJAAAAAKIAAAEIAVAAIAAAVIgVAAIAABEg");
	this.shape_12.setTransform(33.525,-7.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAjQgOgNAAgWIAAAAQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_13.setTransform(24.925,-5.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVA7IgZglIgUAAIAAAlIgaAAIAAh1IA1AAQAXgBAMAMQAKALAAARQAAAbgaAJIAdAqgAgYgBIAZAAQAKAAAFgEQAFgFAAgIIAAAAQAAgRgUAAIgZAAg");
	this.shape_14.setTransform(14.075,-6.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAvIAAhaIAZAAIAAASQAIgVAVABIAAAbIgCAAQgbAAAAAfIAAAig");
	this.shape_15.setTransform(-0.8,-5.5506);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjAiQgNgOAAgUIAAAAQAAgTAOgOQAOgNAUAAQAVAAAOANQAPAOAAATQAAAUgPAOQgOAOgVgBQgUAAgPgNgAgRgRQgGAIAAAJQAAAKAHAIQAGAHAKAAQALAAAGgHQAHgHAAgLIAAAAQAAgJgHgIQgHgHgKAAQgKAAgHAHg");
	this.shape_16.setTransform(-10.3,-5.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA1IAJgTQAGAEAFAAQAHAAACgGIgjhaIAbAAIATA9IAUg9IAbAAIgjBcQgFAOgHAGQgFAFgMAAQgMAAgLgGg");
	this.shape_17.setTransform(-26.15,-4.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_18.setTransform(-36.525,-5.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxA7IAAh1IA2AAQAUAAAKAKQAJAIAAAMQAAARgQAJQAWAIABAUIAAABQgBAQgMAIQgLAJgVgBgAgYAkIAeAAQATAAAAgMQAAgNgUAAIgdAAgAgYgLIAYAAQASAAAAgMIAAAAQAAgNgSAAIgYAAg");
	this.shape_19.setTransform(-47.55,-6.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-16.5,151.2,37);


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
	this.shape.graphics.f("#FFFFFF").s().p("AglAzIAAhlIBKAAIAAAVIg1AAIAAAUIAvAAIAAASIgvAAIAAAVIA3AAIAAAVg");
	this.shape.setTransform(203.2,-135.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAzIgVghIgSAAIAAAhIgVAAIAAhlIAsAAQAUAAAKALQAJAIgBAPIAAAAQAAAXgVAIIAZAkgAgVAAIAWAAQAIAAAFgFQAEgDAAgHIAAAAQAAgOgRAAIgWAAg");
	this.shape_1.setTransform(193.35,-135.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAlQgQgPABgWIAAAAQAAgVAPgPQAPgPAXAAQAXAAAOAPQAPAPABAVQgBAWgPAPQgPAPgXAAQgWAAgPgPgAgVgWQgIAJAAANQAAANAIAJQAJAKANAAQAMAAAJgKQAIgJAAgNIAAAAQAAgMgIgJQgJgKgNAAQgMAAgJAJg");
	this.shape_2.setTransform(181.65,-135.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAzIAAhCIgdArIAAAAIgcgqIAABBIgWAAIAAhlIAZAAIAZArIAbgrIAXAAIAABlg");
	this.shape_3.setTransform(169.3,-135.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaAzIgwhAIAABAIgWAAIAAhlIAVAAIAuA+IAAg+IAWAAIAABlg");
	this.shape_4.setTransform(153.075,-135.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAzIgVghIgRAAIAAAhIgWAAIAAhlIAtAAQATAAAKALQAJAIAAAPIAAAAQAAAXgWAIIAYAkgAgUAAIAVAAQAIAAAFgFQAEgDAAgHIAAAAQAAgOgRAAIgVAAg");
	this.shape_5.setTransform(142.55,-135.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeAzIgJgXIgqAAIgJAXIgWAAIAqhlIAUAAIArBlgAANAJIgNggIgNAgIAaAAg");
	this.shape_6.setTransform(131.4,-135.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAzIAAhlIBMAAIAAAVIg1AAIAAAUIAuAAIAAASIguAAIAAAVIA2AAIAAAVg");
	this.shape_7.setTransform(121.15,-135.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAzIAAhlIAWAAIAABQIAxAAIAAAVg");
	this.shape_8.setTransform(112.025,-135.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F47B1F").s().p("Ap3CKIAAkTITvAAIAAETg");
	this.shape_9.setTransform(158.45,-135.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(95.3,-149.2,126.39999999999999,27.599999999999994), null);


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
	this.shape.setTransform(200.2068,51.1458,1.1999,1.1999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737985").s().p("AgIAAQgEgNAMgHQAXAXgcASQACgEgFgRg");
	this.shape_1.setTransform(166.0994,32.007,1.1999,1.1999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D6").s().p("AgGAPQgEgHAAgIIABgQQAKgJAEAIIAGAOIgBASQgFAGgDAAIgBABQgDAAgEgHg");
	this.shape_2.setTransform(162.3193,31.8332,1.1999,1.1999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E6A78").s().p("AggABIAAAAQAKgGAQgDIAagDQAGgCAEADQAEADgBAHIgWAAQgMACgJAGQgFAFgEAAQgIAAgFgMg");
	this.shape_3.setTransform(179.7819,40.2326,1.1999,1.1999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C7185").s().p("AgFgLQAZgIAXAIIgGAHQgTgCgVAHIgnAPQAKgSAbgJg");
	this.shape_4.setTransform(193.8472,43.4135,1.1999,1.1999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37424D").s().p("AAKAzQgCgKgFgBIgBAAQAOgSgSgVIgbg+QATAVAPAgQAJARAQAnIgNAOQgFgCgCgJg");
	this.shape_5.setTransform(199.5768,95.0029,1.1999,1.1999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010101").s().p("AgHAbQgHgEADgGQACgEgLgVQgHgPAXgGIAZAnQAEALgFAFQgEADgLABIgDAAQgFAAgEgDg");
	this.shape_6.setTransform(184.535,60.7871,1.1999,1.1999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464F5D").s().p("AANAkIgzhvQAKAAAEAFIAGAKQAFANAaA1QAVApAFAdg");
	this.shape_7.setTransform(182.2979,52.8829,1.1999,1.1999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#191B1C").s().p("AhXAiQBXg2BJgTIAPAHIinBIg");
	this.shape_8.setTransform(129.7714,57.2054,1.1999,1.1999);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#010101").s().p("AAMAkQgYgLgLgIQgcgRAMgZQAHgNAKgHQAMgGAOAFQAMAEAQgIQAKAKABAJQADAKgIALIgfAcIAgAZIgIAIQgOgDgFgMg");
	this.shape_9.setTransform(195.3468,101.1825,1.1999,1.1999);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#86A2B2").s().p("AgCA4QADgWABgQQACgpgBgKQgDgcgUgRIAGgOQAaAXAHAtQAHAtgQAlQgEAKgPAZIAHglg");
	this.shape_10.setTransform(203.4072,52.2257,1.1999,1.1999);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#374048").s().p("AACBoIgCgBQgOgOABgZIAAiRIAGgHQAHgEAAgKQAFgCADACIAGAGIgGAPIgCAMQgNA7ANA2IgBA8g");
	this.shape_11.setTransform(199.9368,52.6457,1.1999,1.1999);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9E7E4").s().p("AgMhPIACgNQAUARADAcQABAJgCAqQgCAZgJAzIAAgBQgCANgMABg");
	this.shape_12.setTransform(202.2038,53.9356,1.1999,1.1999);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#17191B").s().p("AApAyIAAgRQAAgQgGgEQgGgEgOAHQgNAHAEANQAGASgCADQgHgCgCgKQgBgLgEgCIgGgPQgEgHgLAIIgMANQgRgaAEgaQAEgaAYgQQALAKAAAUQAAAdABAEQAJAFARAAQAVgBAHADQADAIAAAUQgBATAFAKQgJgEgBgKg");
	this.shape_13.setTransform(164.2223,27.5973,1.1999,1.1999);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#16191C").s().p("AgBAqQgGgEgGgOIgGgZQAAgHgEgDQgEgEgGACIgbAEQgQACgKAHIgVgPQgMgJAMgQQAOgIAGAIIAJASQA5gIAMAIQAKAIACAvQAVgbAfgGQAUgEAnAEQAAAJgIAEQgXgJgaAJQgbAJgKATQgHAEgGAAQgFAAgDgDg");
	this.shape_14.setTransform(186.235,40.4315,1.1999,1.1999);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AgkBuQgIg2gUgQQgTgQg0AAIgJgIQAXgKAIgMQAIgPgKgYQgPgkAOgkIAHAOQAHAHACAAQACAAADgIQAZhJBQgBQBOANAKBLQAZAaAWgaIAAAhQgYAEgMAbQgMAaALAcQgKACgJAPQgKARgFAIQgUAbgkghQgJAUgGAGQgJANgUACQAOAOATAdQATAVAYACQgEAGgJABIgPABQgqglgQggg");
	this.shape_15.setTransform(122.0619,8.3986,1.1999,1.1999);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202326").s().p("AgNASQADgFAIgBQAIgCADgDQgLgHgXgEQgagFgKgFIAMgBQAGgBADgFQA6AGAsAlg");
	this.shape_16.setTransform(227.415,80.0338,1.1999,1.1999);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#43505F").s().p("AAkBLQgSgggPgSIhLiRQAFgHAGAAIAKgBIAAAHQAGA2AwA0QAEADAIARQAHAOAOAAQgIAXALAWIAZAlIAIAKQADAHgIALIgfg2g");
	this.shape_17.setTransform(207.8132,96.9227,1.1999,1.1999);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#475E7A").s().p("AhvALIABgHQA6geBeAEQAKAFAaAFQAXAEAMAIQgDADgKABQgHABgDAFQgNAJgSgEQhDgPhGATQgOAEgFAAQgKgBgEgLg");
	this.shape_18.setTransform(214.9658,80.9896,1.1999,1.1999);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#070608").s().p("ABACoQgHgPgNACIgyABQgfABgUAHQgEgOgTgKQgWgLgEgJQgMgWgPgDQgPgDgUAMQgQgCAAgOQAMAHANgHQARgJAFAAQgHgUgDgZIgDgrIgYgGQgNgDgKACIAGgPQAkAIANgJQAMgKgIgcIAIgIQAjgEgVgdIAMgNQAcABAPgIQAOASASAgIAeA2QAJgLgEgHIgGgKIgZglQgLgXAGgWQAOgFAUABIAkABQAAgEAIgVQAGgPgMgLIAqAMQgOAAgFAMIgHAVQgDAJAIAGIAOAHQAbARATAXIAQAaQALARAOAAQAOAAAOgQQAFAEABAGIAAALQgLgCgLAEIgUAJQAGApgLA0IAcAPIgHAFQgDAAgMgFQgIgDgHADQgVAigxAkQAEAEAIANQAFAMAJADQgDAFgIgCQgJgBgCAFQgCgCgKgWgAgMBpQgIAHgDAIQAXAHAlgFQgDgRgRAEQgSAFgEgMIAAgBQgCAAgFAEgAhcAvIADAXQANAjAmAIQABgIgFgGIgIgIQgHgjgGgGQgEgEgKAAIgPABgABFA7QgEACgOAMQgIAIAFAJIAJAOQAPABAMgLQAFgGAKgSQAAAAAAgBQABgBgBAAQAAgBAAAAQgBgBAAAAQgEgDgDABQgIgGgHAAQgDAAgEABgABhAcQABANANAHQAHgVABgIQAAgPgLgNQgMAZABAMgABTAhIAEgRQADgKgEgIQgbAGAYAdgAA4g8IAbATQAHgXgOgLQgUgLgJgIQgFAWAOAMgAAAhXQAAAJADAEQAHAEAJgDQAIgSgFgLQgFgDgEAAQgLAAgCASg");
	this.shape_19.setTransform(215.6857,115.7915,1.1999,1.1999);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C919A").s().p("AgpgJIBTAAQgIAIgOgBQgQgBgHABQgKAAgEAAQgHACAAAJg");
	this.shape_20.setTransform(160.9994,78.6239,1.1999,1.1999);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F4A58").s().p("AAegQQgTAggoABg");
	this.shape_21.setTransform(101.4233,111.8317,1.1999,1.1999);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E5E73").s().p("AAFADQgGgDgJAHQgFAFgEgEQgDgEAAgHQAGgHAKAAQAFgBALACQAXADgQARQgIgGgEgCg");
	this.shape_22.setTransform(146.2639,35.9293,1.1999,1.1999);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#586677").s().p("AgUAFQgGgEAHgLIArAEQgaANgEADQgMgDgCgCg");
	this.shape_23.setTransform(40.1512,102.8023,1.1999,1.1999);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E7E9A").s().p("AgogDQABgBALgBIA0gCIAUACQgOAHgdAAQgeAAgNAGQgEgJAGgCg");
	this.shape_24.setTransform(27.5571,108.712,1.1999,1.1999);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F4858").s().p("AAAAGQgZAAgQgGIAKgBQAHgBADgFIA/AHIgBAIQgIgCghAAg");
	this.shape_25.setTransform(90.294,113.8716,1.1999,1.1999);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3541").s().p("AgdgXIAHgGIA0A7QglgVgWggg");
	this.shape_26.setTransform(108.3828,30.0572,1.1999,1.1999);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#435361").s().p("AglAQQAIgNAWgEQAYgHAIgIIANgCQgJASgYAHQgbAGgNAGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAg");
	this.shape_27.setTransform(54.0564,102.1424,1.1999,1.1999);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#303840").s().p("AAGgfIAEgKQADgFAHAAIgXBLIgFAMQgDAGgIAAg");
	this.shape_28.setTransform(168.4389,109.6392,1.1999,1.1999);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#556173").s().p("AggAbIAggZIAhgcQgBANgKAKIgOAQIgaAOg");
	this.shape_29.setTransform(109.4328,41.8164,1.1999,1.1999);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#464F5A").s().p("AgeAGQACgbAYALQAGADALABIASABIgBAFIgTAAQgCAEAEAEQAGADAAADg");
	this.shape_30.setTransform(159.1995,91.1113,1.1999,1.1999);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C6683").s().p("AgKARIgGgKIABgQQACgKAFgFIAZAJIgSApQgGgEgDgFg");
	this.shape_31.setTransform(77.3949,61.2851,1.1999,1.1999);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#131417").s().p("AgMAeIAJgdQAFgRgCgNIANgOQACAdgDAQQgFAYgNASQAAgKgGgEg");
	this.shape_32.setTransform(164.4971,102.7723,1.1999,1.1999);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#556B80").s().p("AgdAeIAcgiQAPgVAQgLIgbA7QgHAKgEACQgDACgDAAQgHAAgIgHg");
	this.shape_33.setTransform(104.3331,51.9625,1.1999,1.1999);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1F252B").s().p("AABANIgWgTQAAgCgFgEQgFgDACgFIATAAIAoAZQgFAMgGAEIgDAAQgHAAgIgIg");
	this.shape_34.setTransform(164.0522,93.6229,1.1999,1.1999);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#50637D").s().p("AgcACQgGgLgBgLIBHADIAAAGQgTADgIADQgMAFgGAPIgHAGIgMgTg");
	this.shape_35.setTransform(106.8229,24.6575,1.1999,1.1999);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0F1113").s().p("AhQAPIAKgDIAJgCQA7gBANgBQAogFAbgTQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQgBAIgHACIgNACQgJAEADAEIAHAIIh4ABg");
	this.shape_36.setTransform(40.1116,106.0121,1.1999,1.1999);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#607C96").s().p("Ah3ACQAGgFAMAAIAUABQB+gBBLAHg");
	this.shape_37.setTransform(40.9773,110.0319,1.1999,1.1999);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#15181A").s().p("AhCgQIANgGIBkAZIAIAHIANAGIAAAHQg0gJhSgeg");
	this.shape_38.setTransform(113.5725,60.8351,1.1999,1.1999);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333A45").s().p("AgBADQg2ABgOgBQAXgOAxACQAyACARARQgdgIgqABg");
	this.shape_39.setTransform(96.7436,85.7793,1.1999,1.1999);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#53647B").s().p("AAiAQQgCgNgKgBIgTAAQgFAAgTAFQgPAEgKgCQAFgRARgEQAKgDATgCQAQgEAKAJQAJAGAHAPQABAKgGAAQgDAAgFgDg");
	this.shape_40.setTransform(156.4484,35.8444,1.1999,1.1999);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#839BAE").s().p("AgPAAQgPghAMgPQAXAkAUA9QgZgOgPgjg");
	this.shape_41.setTransform(79.4147,98.4226,1.1999,1.1999);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#45576D").s().p("AgtAJQgDgJAHgHIAPgLIBJAeIgpACQgWAAgOAEIgDABQgHAAgFgKg");
	this.shape_42.setTransform(94.1243,33.7229,1.1999,1.1999);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0E0E0F").s().p("AgdApIAbg7QAEgKAAgCQAAgHgKgBIAagPIAMAPIAAAAQgdA+gXAdQgBgJgGgDg");
	this.shape_43.setTransform(108.2328,49.7658,1.1999,1.1999);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#151719").s().p("AgaA2QAIAAADgFIAEgNIAYhKQgCgSAJggQALAVgGAcQgDAQgKAeIgfBRg");
	this.shape_44.setTransform(169.3459,108.742,1.1999,1.1999);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#425065").s().p("AAEAGQAFgMARg4IABAAIANAUQgJApgQAXQgTAdgjAMQAcgUAPglg");
	this.shape_45.setTransform(166.039,67.9446,1.1999,1.1999);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#353B46").s().p("AhFgXQAPgZAlgCQArgDAcAXQAdAYgBAlQgZhShNALQgeAEgLATQgMARgGA0QgFgzAPgYg");
	this.shape_46.setTransform(135.6999,111.7214,1.1999,1.1999);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#44576E").s().p("AgIAiQgTgDgKABIAGghQAFgTAJgNIADAJIAKgJQAEAQANgBQAVAAAEABQgGAHgTAIQgPAHgHAJQAFAGAJAAQAKABAEAEQgKAJgOAAIgDAAg");
	this.shape_47.setTransform(80.9946,53.1311,1.1999,1.1999);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#465B72").s().p("AAnAaQgEgDAEgGQAEgGgEgEQgrAAgNgBQgggCgZgJQAHgNAFgDQAIgHAMADIBvAaQAGACAAADIgCAIIgQAIQgIAFgHAAIgDgBg");
	this.shape_48.setTransform(133.8812,33.6962,1.1999,1.1999);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#667E97").s().p("AhmAIQBygaBbARIAAAJg");
	this.shape_49.setTransform(52.4665,63.2794,1.1999,1.1999);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#40516B").s().p("AAcAhQAIgNgDgFQgEgDgGADQgIAEgDgCQgBgFAHgGQAHgGAAgGQgKgDgjgBQgegBgQgJQAFgCAXgDQATgCALgIIglgDIAAgFIAogBQANAIAAgPQAJAUARASQAMANAVARIgGAMQgIACgIAIIgNANQgLgJAHgKg");
	this.shape_50.setTransform(116.6623,27.8373,1.1999,1.1999);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F1113").s().p("AAYBUIgqgJIAjgpQgDgCgMgQQgIgKgLAAQACgOgLgQQgOgQgFgJIgLgOQgGgKAAgKQAPALASAdQASAdANAJQAGAFAHAOQAHALAOgDIANATQgHALAGAFQACACANADQgOAWgXAAIgCAAg");
	this.shape_51.setTransform(31.8279,96.5952,1.1999,1.1999);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#151A1E").s().p("AAlAhQARgSgXgDQgMgCgGABQgJAAgGAHIgHgBIACgHQAAgEgFgBIhwgaQgNgEgIAHQgEAEgHANQgCgMgGgDIAGgMIAPgBQAJAAAEgGIBYATQAzALAkAFQAUABAZgFIAqgLIAMgOIgBARQAAAJAEAGQAFAHAEgBQAEAAAFgGQACAHgHAHQgIAIAAAFQgHgQgIgGQgLgIgPADQgVACgKADQgRAEgEASIgKAGIgEAAQgEAAgEgDg");
	this.shape_52.setTransform(143.7772,33.3169,1.1999,1.1999);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#121214").s().p("AiEDQQAfiAAZhAQAnhkA+hFQAagcASgMQAbgTAdgCIAIAIQg4AOgqAuQgeAgghBAQgsBPgRBOQgJAOgFASIgGAjIgBAKQgGAFgBAKIgBARg");
	this.shape_53.setTransform(89.6641,36.2067,1.1999,1.1999);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#51647A").s().p("AC4AXQgogCgagGQgqgKhMgBQhTAAgjgGIB5AAQhGgIiEABIgTgBQgMAAgHAGQgMACgFgBQgKAAgHgGQANgGAfAAQAdAAAOgIIB5AAQA9AABqATQB1ASAzAEQgDAEgHABIgLABIhDgBg");
	this.shape_54.setTransform(55.0464,110.8418,1.1999,1.1999);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#485464").s().p("AjvCOIgJgEIAHgHICWAAICUABQAgAAAUgLQAUgMAPgbIAlhFQAXgoAMgeQAOgRAFgZQADgRgCgcQAQAOgDAUQgBAKgKAXQgmBXg3BeQgWAmgpABQhBAChFAAQhaAAhhgDg");
	this.shape_55.setTransform(137.7412,114.962,1.1999,1.1999);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D627C").s().p("AjHA0IgMgHICohIQBggbBXAEQAuABAMAMQAMALABAsIABAOIgCATIgNgTQgDgggJgJQgJgKgfgDQidgNiIBJQgZAOgYAAIgCAAg");
	this.shape_56.setTransform(145.6404,56.6419,1.1999,1.1999);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A6079").s().p("ABxBbQANgxAKghQACgFgFgTQgDgOAMgIQgOgIgGgFQgKgIgBgMQgBgIgHgCIgMgDQgtgOg+gPIhtgaQgVgFgHgDQgOgGgHgMQAUgMAcAEIAvAHQBXAgAvAIQA2ATATAIQAeAMALAZQALAYgJAfQgYBUg3BgIAVhTg");
	this.shape_57.setTransform(115.0454,78.6949,1.1999,1.1999);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#506781").s().p("AigCZQAQhNAshRQAjhAAdggQAqguA4gOQA1gBASARQAUAQAIA2QAAAOgOgHQgPgXgdgHIg0gFQgFgGAHgJQAHgJgCgFQgiAVgEASQgFASASAnIhCgNQAMAOAWAJQAaALAJAHIhpAAQgBAGAEADIAGAFIgQAKQgHAHADALIgIgEQgEgCgBAFIgVAxQgNAdANAYIgBAHQgFAEgMABQgMAAgEAGIgJAJg");
	this.shape_58.setTransform(98.2735,30.7737,1.1999,1.1999);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#526982").s().p("ABvAQQgygbg1gFQhugMhhA5QgIgGgGgSQgEgQgJgFIABgFQAlgXAagMQAkgQAggDQCUgQB5BbQASANAiAhQgDAJgIAJIgRAOQgvgpgpgVg");
	this.shape_59.setTransform(47.9968,80.9109,1.1999,1.1999);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020202").s().p("ABXFsQABgLgBgGQgEgfgCgFQgHgTgUgHQgPgGACgQQACgcgegRIAEgLIAFgKQAWgbgRggQgZgsARg8IALgYQAFgOgDgMQgIACgSAKQgOAIgKABQgFgXgBgMQgCgUAbgEQgBgqgNgLQgNgKg0AAQgCgIAAgFQAAgtgMgMQgMgLgugCQhbgDhdAaIgPgHQAPgHAVgGIAmgKIANgCQAHgCAAgIQABgMAHgDQAEgBAMAAIAhgCQATABAPAPQAJAKAbACIAuADIASghQgVACAAgPQABgYgCgDQgWAegYgCQgbAAgNgCQgXgDgNgQQAKgDAMgNQAMgPAIgDQAOAJgCgQQAAgFAIgIQAHgIgCgGIABgTQAFACABAMQACAKAHACQAcgSgXgXQAagOAAAeIgBARQABAKAKAFIAYABQgLARAMAJIAUAPQAIATAPgLQAIgHAMgBIAXgBIAGAaQAMAdAWgNIAngPQAXgHASABIAACSQAAAZANAOQgGABgOAEQgMAFgJgBQgKgCAAAKQgBAMgFABIASAEQAMADgPAPQAOAIALAYQAMAZgGAPQBLgVAZgEQA4gJAtAMQgDAFgHABIgLABQhfgEg7AfIgKAAQgGABgFAHIBMCSQgOAIgcgBQgQgngJgSQgQghgSgUIAaA/QgQAHgMgEQgPgFgMAHQgKAGgHAOQgMAYAcATQAEADAgAPQgRAFgHASIgKAfIgGAPIgCA1QgFgGgBgJgAAdBFQgEAvAeAgIBEg/QgjgDgKgLQgJgKAAgiIgDgsQgiAngDAvgAgYkAIA0BvQgXAGAHAQQALAVgCAEQgDAHAHAEQAFAEAIgBQALgBAEgEQAFgFgFgKQgFgdgVgpQgbg2gEgOIgFgKQgFgEgIAAIgCAAg");
	this.shape_60.setTransform(180.5581,74.6069,1.1999,1.1999);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#010101").s().p("AgIEpIgrgPQgbgKgSgBIghgPQhbg5gxhoIgLgwQgFgcAAgUQAAgMgDAAQgRgBABgMQAEgOAAgGQgBgGACgKIACgQQAGgJAHgWQAGgUAIgKQAeARgDAdQgBAQAOAFQAUAHAHATQACAGAFAfQABAFgBAKQAAAKAGAFIAPA1QgBAOAQABQAkBLBFAMIAFAHQADAEADABQAmAIAagBQAkgBAcgRQADgFAIACQAJABACgFQAxgbAYgsIAHgMQACgIgJgFIAIgGQALgDADgKIAEgTQAHgigGg0IAAgMQgBgGgFgEIgMgeQgIgSgUAAQAIgLgHgJIgOgNQgJgMgRgLIgdgRIgqgNQgdgCgOACIggABQgUADgJAPQgwg0gHg2QAFAMAJABQAFAAAOgEQBFgVBEAQQASAEANgJIAWABQAEAKAKADQBAAbA3BDIAMAOQA/B5gWBpQgnCFhnBEIghAPIgfAIQgHABgBACIgHADIgDACIgXAKIgDABg");
	this.shape_61.setTransform(214.7158,117.5305,1.1999,1.1999);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#010101").s().p("AnDJAQgLgUgQAAIgbgGIAAAAQgNgLgTgEQhVg/gxhcQgehFAIhpQAXhYAkgyIglgJIhHCTIgFgNIAYhAQgGgCgJAGQgIAFgGgFQADgMAJgSQANgWADgIQAHgHALgVQAJgUALgHIAUASIBXhOQAJAFAFARQAEASAJAFQBig5BuAMQA1AFAyAcQApAUAuApIARgOQAJgJADgJIgZgXQgPgOgMgJQh4hbiVAQQggADglARQgYALgnAXQgoARgcAiQgIAIgLAAIgVgBQgQgKACgUQADgegBgEQAYgGAmAEQACAEgEALQgFAJAIAGQBMg+B5giQgKggAKgQQALgQAhgFQAggEArgBIBLAAQAPAAAIgBQALgDAJgIQAPgMAUAFQAUAGAIARIAPAJIAEAKQAEAGAGADIASgqIgYgJIABgKQAJgBATACQASABAKgKQgEgEgLAAQgJgBgEgGQAFgJARgHQATgIAFgHQgCgCgWABQgOAAgEgPQAEgGAMAAQANgBAEgEQABgGgBgBQgLgYAMgdIAUgxQACgFAEACIAIAEQAHAMAIgDQANgFAXAAQAeAAALgCIhKgeIgFgFQgDgEAAgGIBqAAQgIgHgbgLQgYgJgMgOIBFANQgTgnAEgSQAFgSAhgVQACAFgGAJQgHAJAFAGIA0AFQAdAHAPAXIgnAAIhJgDQABALAGAMIAMAUQAWAgAmAWIg0g9QAFgOAOgHQAHgDATgDIAlACQgLAJgSACQgYACgFACQAQAJAfABQAjACALADQAAAGgIAHQgGAGAAAFQADABAIgEQAGgDAFADQACAFgIANQgHALALAIIANgNQAIgIAIgCQAGADACAMQAYAKAhACQAMABAtAAQAEAEgEAGQgEAFADAEQAIABAKgFIARgJIAHAAQgBAIAEAEQADAFAGgFQAIgIAIAEQAEACAHAGQAGAFAFgDIALgFQAKACAPgEQASgFAGAAIATAAQALABACANQgIADgMAPQgLANgKADQgPAKgQADQgRADgOgGQgVgJghAAQgjACgTgBQg1gDgbgCQgugFghgNIgkAwIgNgOIAPgRQAKgKABgNIgiAdIggAZIANAAQALABABAHQAAADgEAKQgQAKgRAVIgcAjQAMALAJgFIAMgMQAGACABAKQgFAKAHACIALAEIgNAGIgwgIQgcgDgTALQAHANAOAGQAGADAVAFIBuAZQA+APAuAPIAMACQAGADACAIQABALAKAJQAGAFANAIQgLAHADAPQAEATgBAGQgLAhgMAwIgVBSQA2heAYhVQAKgggMgYQgLgYgdgNIhJgbIAAgGQAZABAagOQCHhLCfAOQAfADAIAJQAJAKAEAgIgXBFQgRAlgbAUQAjgMAUgeQAPgYAJgoIADgUQA0AAANALQANAKABAqQgbAEACAUQABAMAFAYQgSBYgaA9IgJAUQgDALACAKQgKAeACATQgHAAgDAFIgEAKIgaBPIAHAiIgkBxQgjA7g8gEQhKgGg5ACIhAgCQglgBgbAMQgRAIgSgBQgUAAgMgLQgKgKgMgCQgFgCgRAAIiGAAQgOAAgIgEQgJgFAAgPQAGgEARACQAPACAIgHQgTgIgegDQghgDgQgCQgVgDgNAWQgyBShBAgIg0AWQgMgCgOAHQgPAKgIAEQgiABgeAAQgeAAgbgBgAm1GGQgEACACAEIACAHQgMAFgFAMQgCAHAAARQAlAPAeACQAkACAigRIgRggQABgUgUAAIhLAAIgHgEIAAAAgAlDGWQADAHAEAMQAFALAHAFQANgDAOgKIAXgWQgagDgHAAIgIgBQgPAAgNAEgAojFtQAUApAxAfQAIgHAEgMQADgHADgRQgJgBgLgKIgRgSQgKgLgNAAQgMAAgPALgABwGmQgNAAgeAFQATAHAYABQAOAAAdgEQgSgJgWAAIgDAAgAJGF/QgPAkgPAPQAdgMALggQALgoAHgSQgNAOgPAlgAn8FHIFnACICwAtIA6AOQAjAHAaAAIAJAEQCsAHCXgFQApgCAVglQA2hdAohZQAKgYAAgKQADgUgQgOIgOAOIgSgUQgMgLgOgBIgYAyQgPAcgPATIBGAUIAQgZQAFAEACAKQgMAdgXApIgmBFQgOAcgVALQgUAMgfgBIiWgBIiVABIh4gWIAAAAQgIgEgrgKQgigIgQgTQgOALgWgGQgggKgGAAQgUgGgXAAIlEgBgAHAFWQgJAJABAMQARAJAIgJQAGgEAFgSQAPgcgDgZIgRARQgJALACALIAAAAIgQAPgAorFgIAigOIgDgkQAlgDAbABQgZgQgnACQgEgSgQgLIghgPQgHA6AdA0gAFwFFQgPgDgRgKIgegTQAXAlAngFgAFoCzQgkADgPAYQgQAaAFAyQAHgzALgTQAMgSAdgEQBOgLAZBTQABgngcgXQgagVglAAIgKAAgAmbDdQAjAGBTAAQBNABApAKQAaAHAoABIBEACQAQAHAZAAQAhAAAIABIABgIIg/gHQgzgDh0gUQhsgSg8gBQgGgFgBgDQgDgEAKgEIAMgDQAHgDABgIQANgGAbgGQAYgHAJgSQAGgMgBgHQgCgKgMgGQgwgcguACQgHAQAFAIQAEAJARACQAfAFAoAWQgIAJgYAGQgXAGgHAMQgcAUgoAFQgNABg8ABIgTAFIg1ACQgKAAgCABQgGADAFAJQAGAHAKAAQAGABAMgCgAA/D5QApgCASghgAnOC8QAYACAOgXIAfgSIgsgDIgOgUQAOgMAcgGQASgDAEgKQADgJgFgQQg7ADgkAaQgPgKgRgcQgSgegPgLQABALAFAJIAKAPQAGAJANAQQAMAPgDAPQgSATggAxQALALAOgDIAZgHIArAJgAhqB4QAPAjAaAOQgUg+gYgkQgMAOAPAjgAIfBBIAyAIIAWAUQALAKAHgDQAGgDAGgMQATgVgHgdIg0ARIgSgBQgLAAgHgEQgHgDgEAAQgNAAgCAVgAJPgiIAWARQAKAEgHAQQgHAWADAHQApgFANgVQANgTgCg2IgtANIhVAAIARATQAHgFAGAAQAHAAAHAGgAB7AZQgQgTgygCQgygCgWAPQAOACA1gBQArgBAcAIIAAAAgAmiikIDOAAIABgKQgjgHgmAAQg+AAhIARg");
	this.shape_62.setTransform(90.294,84.0686,1.1999,1.1999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(0,-13,251.4,166.4), null);


(lib.Heasd2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(78.8,26.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWBBIAAhGQAAgbgWAAQgVAAAAAbIAABGIglAAIAAh/IAlAAIAAASQAQgVAUABQAVgBALANQAMANAAAWIAABSg");
	this.shape_1.setTransform(67.925,21.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtA4QgNgLAAgSIAAgBQAAgUAOgKQAOgKAYAAQAPAAAPAGIAAgDQAAgXgaAAQgRAAgTAHIgJgcQAXgKAaAAQAdAAAOAOQAOAOAAAbIAABKIgjAAIAAgOQgPAQgXAAQgTAAgMgKgAgXAZIAAAAQAAAIAGAEQAFAEAJAAQAMAAAIgGQAIgHAAgKIAAgGQgLgFgNAAQgYAAAAASg");
	this.shape_2.setTransform(52.975,21.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxAwQgUgTAAgcIAAgBQAAgbAUgUQAUgTAdAAQAeAAAUATQAUAUAAAbIAAAAQAAAcgUATQgVAUgdAAQgdAAgUgTgAgYgYQgJAKAAAOIAAAAQAAAPAKAJQAJAMAOAAQAPAAAKgLQAJgKAAgOIAAgBQAAgOgKgKQgKgKgOAAQgPAAgJAKg");
	this.shape_3.setTransform(38.275,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag7BUIAAinIAkAAIAACFIBTAAIAAAig");
	this.shape_4.setTransform(23.5,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrAwQgTgSAAgdIAAgBQAAgbASgUQASgTAaAAQAfAAARAVQAPATAAAdIAAAJIhZAAQAGAaAZAAQAQgBAPgNIAVATQgUAYghAAQgcAAgTgTgAAcgJQgCgNgHgHQgHgIgMABQgWAAgEAbIA2AAIAAAAg");
	this.shape_5.setTransform(0.875,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRBXIAAitIAjAAIAACtg");
	this.shape_6.setTransform(-10.025,19.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoAwQgTgTAAgcIAAgBQAAgbATgUQAUgTAcAAQAgAAATAWIgWAXQgOgOgQABQgMAAgJAKQgJAKAAAOIAAAAQAAAPAJAKQAJALAOAAQAPAAAPgOIAVAWQgWAXgfAAQgbAAgUgTg");
	this.shape_7.setTransform(-20.375,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRBXIAAh/IAjAAIAAB/gAgSg3IAAgfIAlAAIAAAfg");
	this.shape_8.setTransform(-30.925,19.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWBXIAAhHQAAgagWAAQgVAAAAAaIAABHIglAAIAAitIAlAAIAABAQAQgVAUABQAVgBALANQAMANAAAVIAABTg");
	this.shape_9.setTransform(-41.975,19.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrAwQgTgSAAgdIAAgBQAAgbASgUQASgTAaAAQAfAAARAVQAPATAAAdIAAAJIhZAAQAGAaAZAAQAQgBAPgNIAVATQgUAYghAAQgcAAgTgTgAAcgJQgCgNgHgHQgHgIgMABQgWAAgEAbIA2AAIAAAAg");
	this.shape_10.setTransform(-56.875,21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBUIhDinIAoAAIArB1IAsh1IApAAIhFCng");
	this.shape_11.setTransform(-73.2,19.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRBYIAAiuIAjAAIAACug");
	this.shape_12.setTransform(73.425,-1.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgtA4QgNgLAAgSIAAgBQAAgUAOgKQAOgKAYAAQAPAAAPAGIAAgDQAAgXgaAAQgRAAgTAHIgJgcQAXgKAaAAQAdAAAOAOQAOAOAAAbIAABKIgjAAIAAgOQgPAQgXAAQgTAAgMgKgAgXAZIAAAAQAAAIAGAEQAFAEAJAAQAMAAAIgGQAIgHAAgKIAAgGQgLgFgNAAQgYAAAAASg");
	this.shape_13.setTransform(62.375,0.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWBCIAAhHQAAgagWgBQgVABAAAaIAABHIglAAIAAiAIAlAAIAAASQAQgUAUgBQAVAAALAOQAMAMAAAWIAABTg");
	this.shape_14.setTransform(48.175,0.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgxAwQgUgTAAgdIAAAAQAAgbAUgUQAUgTAdAAQAeAAAUATQAUAUAAAbIAAAAQAAAcgUATQgVAUgdAAQgdAAgUgTgAgYgYQgJAKAAAOIAAAAQAAAOAKAKQAJALAOAAQAPAAAKgKQAJgKAAgPIAAAAQAAgNgKgLQgKgLgOAAQgPAAgJALg");
	this.shape_15.setTransform(32.725,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRBYIAAiAIAjAAIAACAgAgSg3IAAgfIAlAAIAAAfg");
	this.shape_16.setTransform(21.175,-1.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZArIAAg8IgPAAIAAgfIAPAAIAAghIAkAAIAAAhIAeAAIAAAfIgeAAIAAA2QAAANAMAAQAJAAAJgFIAAAdQgNAIgQAAQglAAAAgng");
	this.shape_17.setTransform(12.4,-0.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtA4QgNgLAAgSIAAgBQAAgUAOgKQAOgKAYAAQAPAAAPAGIAAgDQAAgXgaAAQgRAAgTAHIgJgcQAXgKAaAAQAdAAAOAOQAOAOAAAbIAABKIgjAAIAAgOQgPAQgXAAQgTAAgMgKgAgXAZIAAAAQAAAIAGAEQAFAEAJAAQAMAAAIgGQAIgHAAgKIAAgGQgLgFgNAAQgYAAAAASg");
	this.shape_18.setTransform(0.175,0.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrAxQgTgTAAgeIAAAAQAAgbASgUQASgTAaAAQAfAAARAVQAPATAAAdIAAAKIhZAAQAGAZAZAAQAQAAAPgOIAVATQgUAYghAAQgcAAgTgSgAAcgKQgCgMgHgHQgHgIgMAAQgWAAgEAbIA2AAIAAAAg");
	this.shape_19.setTransform(-13.975,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgmBCIAAiAIAlAAIAAAaQALgeAdACIAAAmIgCAAQgmAAAAAsIAAAwg");
	this.shape_20.setTransform(-25.775,0.6464);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoAwQgTgTAAgdIAAAAQAAgbATgUQAUgTAcAAQAgAAATAVIgWAYQgOgOgQAAQgMAAgJALQgJAKAAAOIAAAAQAAAPAJAKQAJAKAOAAQAPAAAPgNIAVAVQgWAYgfAAQgbAAgUgTg");
	this.shape_21.setTransform(-38.025,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgrAxQgTgTAAgeIAAAAQAAgbASgUQASgTAaAAQAfAAARAVQAPATAAAdIAAAKIhZAAQAGAZAZAAQAQAAAPgOIAVATQgUAYghAAQgcAAgTgSgAAcgKQgCgMgHgHQgHgIgMAAQgWAAgEAbIA2AAIAAAAg");
	this.shape_22.setTransform(-52.375,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQAgAAARARQAPAOAAAYIAAABQAAAlgkAOIApA8gAgjgBIAlAAQANgBAIgGQAHgGAAgLIAAgBQAAgYgdABIgkAAg");
	this.shape_23.setTransform(-67.775,-1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgrAwQgTgSAAgeIAAAAQAAgbASgTQASgUAaAAQAfAAARAVQAPAUAAAcIAAAJIhZAAQAGAZAZAAQAQABAPgNIAVASQgUAYghAAQgcAAgTgTgAAcgJQgCgNgHgHQgHgHgMAAQgWAAgEAbIA2AAIAAAAg");
	this.shape_24.setTransform(41.075,-20.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRBYIAAivIAjAAIAACvg");
	this.shape_25.setTransform(30.175,-22.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeBFIAAARIglAAIAAiuIAlAAIAABBQAPgVAYAAQAYAAAQARQATATgBAeIAAAAQABAfgTASQgQASgYAAQgXAAgQgUgAgWgDQgIAJgBAQIAAAAQABAQAIAKQAKAKAMAAQANAAAIgKQAKgKAAgQIAAAAQAAgQgKgJQgIgKgNAAQgMAAgKAKg");
	this.shape_26.setTransform(18.75,-22.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRBYIAAiAIAjAAIAACAgAgSg2IAAghIAlAAIAAAhg");
	this.shape_27.setTransform(6.775,-22.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAaBAIgagoIgZAoIgmAAIAthAIgsg/IAnAAIAYAlIAXglIAnAAIgrA/IAtBAg");
	this.shape_28.setTransform(-3.85,-20.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgrAwQgTgSAAgeIAAAAQAAgbASgTQASgUAaAAQAfAAARAVQAPAUAAAcIAAAJIhZAAQAGAZAZAAQAQABAPgNIAVASQgUAYghAAQgcAAgTgTgAAcgJQgCgNgHgHQgHgHgMAAQgWAAgEAbIA2AAIAAAAg");
	this.shape_29.setTransform(-18.225,-20.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRBYIAAivIAjAAIAACvg");
	this.shape_30.setTransform(-29.125,-22.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag/BUIAAinIB/AAIAAAhIhaAAIAAAkIBPAAIAAAhIhPAAIAABBg");
	this.shape_31.setTransform(-40.05,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-35,168.6,70);


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
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgaIAbAAIAAAag");
	this.shape.setTransform(113.525,51.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAiQgOgNAAgUIAAgBQAAgSANgOQANgPASAAQAWAAAMAPQALAPAAATIgBAHIg+AAQAEASARAAQAMAAAKgJIAPANQgNAQgYABQgUgBgNgNgAAUgGQgCgJgEgFQgGgGgIABQgPAAgDATIAmAAIAAAAg");
	this.shape_1.setTransform(105.875,48.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAfIAAgqIgLAAIAAgWIALAAIAAgYIAZAAIAAAYIAVAAIAAAWIgVAAIAAAlQgBAJAJAAQAHABAGgEIAAAVQgJAFgLAAQgaAAAAgbg");
	this.shape_2.setTransform(97.05,47.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgNAFIgHgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgPAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFAAgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_3.setTransform(88.4,48.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVA8IgZgnIgUAAIAAAnIgaAAIAAh3IA1AAQAXAAAMANQAKAKAAARQAAAbgaAJIAdArgAgYAAIAZAAQAKAAAFgGQAFgEAAgHIAAgBQAAgRgUAAIgZAAg");
	this.shape_4.setTransform(77.925,46.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAfIAAgqIgLAAIAAgWIALAAIAAgYIAZAAIAAAYIAVAAIAAAWIgVAAIAAAlQAAAJAIAAQAHABAGgEIAAAVQgJAFgLAAQgaAAAAgbg");
	this.shape_5.setTransform(62.6,47.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgNAFIgHgUQARgHARAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgQAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFABgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_6.setTransform(53.95,48.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAiQgOgNAAgUIAAgBQAAgSANgOQANgPASAAQAWAAAMAPQALAPAAATIgBAHIg+AAQAEASARAAQAMAAAKgJIAPANQgNAQgYABQgUgBgNgNgAAUgGQgCgJgEgFQgGgGgIABQgPAAgDATIAmAAIAAAAg");
	this.shape_7.setTransform(43.925,48.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAvIAAhaIAaAAIAAASQAIgVAVABIAAAbIgCAAQgbAAAAAfIAAAig");
	this.shape_8.setTransform(35.55,48.1494);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmAsQgSgRAAgbIAAAAQAAgYASgTQASgRAagBQAbABATAPIgQAUQgPgMgQABQgNgBgKALQgKAMAAAOIAAAAQAAARAKAKQAKALAPAAQAOAAAKgIIAAgQIgaAAIAAgWIA0AAIAAAzQgXASgcABQgbAAgRgSg");
	this.shape_9.setTransform(24.925,46.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgNAFIgHgUQARgHASAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgPAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFABgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_10.setTransform(115.95,32.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAQA+IAAgzQAAgRgQAAQgPAAAAARIAAAzIgaAAIAAh7IAaAAIAAAuQAMgPAOAAQAOAAAJAJQAIAJAAAPIAAA7g");
	this.shape_11.setTransform(100.825,30.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAfIAAgrIgLAAIAAgVIALAAIAAgYIAZAAIAAAYIAVAAIAAAVIgVAAIAAAnQAAAIAIABQAHAAAGgEIAAAVQgJAFgLAAQgaAAAAgbg");
	this.shape_12.setTransform(91.85,31.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_13.setTransform(85.925,30.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAuIgRg3IgRA3IgXAAIgchaIAaAAIAPA2IARg3IAVAAIARA3IAPg2IAaAAIgcBag");
	this.shape_14.setTransform(76.075,32.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAiIALgRQAPAKANABQAKAAABgIIAAAAQgBgEgFgCIgMgEQgNgEgFgFQgKgGABgMQgBgOALgIQAJgHANAAQASAAAQALIgKASQgOgJgLAAQgIAAAAAGIAAABQAAADAGACIALAGQANADAGAFQAJAGAAAMIAAAAQAAAOgKAIQgKAHgPAAQgUAAgSgNg");
	this.shape_15.setTransform(59.3,32.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAfIAAgrIgLAAIAAgVIALAAIAAgYIAZAAIAAAYIAVAAIAAAVIgVAAIAAAnQgBAIAJABQAHAAAGgEIAAAVQgJAFgLAAQgaAAAAgbg");
	this.shape_16.setTransform(51.5,31.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbAvIAAhaIAaAAIAAASQAIgVAUABIAAAbIgBAAQgaAAgBAfIAAAig");
	this.shape_17.setTransform(44.9,32.1494);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgNAFIgHgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgPAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFAAgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_18.setTransform(35.75,32.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAfIAAgrIgLAAIAAgVIALAAIAAgYIAZAAIAAAYIAVAAIAAAVIgVAAIAAAnQgBAIAJABQAHAAAGgEIAAAVQgJAFgLAAQgaAAAAgbg");
	this.shape_19.setTransform(27.3,31.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguAqIAPgSQASAOARAAQARAAAAgLIAAgBQAAgEgFgEQgEgDgOgDQgVgGgIgGQgKgHAAgRIAAgBQAAgQALgJQAMgKASAAQAZAAASAPIgNATQgRgLgNAAQgHAAgEADQgEADAAAEQAAAHAFACQAFADAOAFQAUAEAIAGQAKAJAAAPIAAAAQAAARgMAKQgMAKgUAAQgcAAgVgTg");
	this.shape_20.setTransform(18.375,30.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAjQgOgNAAgWIAAAAQAAgTANgOQANgOASABQAWgBAMAPQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUAAgNgMgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_21.setTransform(107.475,16.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAvIAAhaIAZAAIAAASQAIgVAVABIAAAbIgCAAQgbAAAAAfIAAAig");
	this.shape_22.setTransform(99.1,16.1494);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_23.setTransform(89.925,16.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAeIAAgqIgLAAIAAgWIALAAIAAgXIAYAAIAAAXIAWAAIAAAWIgWAAIAAAnQAAAIAJABQAHgBAGgDIAAAVQgJAFgMAAQgZAAAAgcg");
	this.shape_24.setTransform(81,15.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAQAuIAAgyQAAgSgQAAQgPAAAAASIAAAyIgaAAIAAhaIAaAAIAAANQAMgPAOABQAOgBAJAKQAIAIAAARIAAA5g");
	this.shape_25.setTransform(72.375,16.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAjQgOgNAAgWIAAAAQAAgTANgOQANgOASABQAWgBAMAPQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUAAgNgMgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_26.setTransform(61.825,16.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKAuIglhbIAcAAIATA8IAVg8IAbAAIgkBbg");
	this.shape_27.setTransform(51.55,16.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAzQgNgNAAgWQAAgVANgNQAMgNARAAQAQAAALAOIAAgtIAaAAIAAB7IgaAAIAAgNQgLAPgQAAQgRAAgMgMgAgOgCQgHAGAAAMQAAALAHAHQAGAHAIAAQAKAAAGgHQAGgHAAgLQAAgMgGgGQgGgHgKAAQgIAAgGAHg");
	this.shape_28.setTransform(40.525,14.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAkA8IgLgaIgyAAIgKAaIgbAAIAzh3IAXAAIAzB3gAAQAKIgQglIgPAlIAfAAg");
	this.shape_29.setTransform(28.3,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(11,5.2,112.3,53), null);


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
	this.shape.graphics.f("#00FF00").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


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
	this.shape.setTransform(92.6138,-1.3678,0.8099,0.8099,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68C49").s().p("AgDgqIAMAAIgEAuIgFABIAEAEIgCAUQgEADgFALQABgvADgmg");
	this.shape_1.setTransform(92.5125,-6.8143,0.8099,0.8099,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C62127").s().p("AgIBYQgGAAABgGQgCg1AJh0IARAAQAEAAAAAEQgEA0AAAaQgOAEADACIALABQgCAoACAqQgBAEgLAAIgHAAg");
	this.shape_2.setTransform(92.4861,-3.5415,0.8099,0.8099,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E4E4E").s().p("AoHBEQgDgKAJACQgEgJgEAAQgLABAAAMQgIgEgFgGQAEgCAAgEQgEgDAAgFQgBgCAHAAQAAgHgGgBQgGAAgDAJQgEgMgBgPQAIAIAFgMIgEgFQgCgGAGABQgCgGgIgEQACgIAEgGQABAIAIACQAEgBgDgDQgDgMAKADQACgHgGgGQAIgFAIgBQgGALAIAGQAJADAAgGQgDgIAKAAIgBgBIAAgBQAFADAGAHQgGACgBAJQAGAQADgHIABgGIAFgCQAEALACAMQgJgBgBAGQgBAQAKADQgBAJgFALQgCgKgHAAQgIAEACAKQAAAGAEAEQgJAIgMABgAoWgLQgGAJAAAMQAAANAGAIQAHAJAIgBQAIAAAGgGQgGAEgEAAQgIAAgFgHQgGgIAAgLQABgLAFgGQAEgJAIABQALAAAFANQgFgTgOAAQgJAAgGAJgAHyA/QgEgLAOACQgFgKgHAAQgQABgCANQgKgEgIgHQAGgBAAgHQgGgCABgFQgDgDALAAQABgJgKABQgKgBgDAKQgHgOgBgPQALAIAIgNIgGgEQgCgIAJABQgDgHgNgEQADgJAGgHQADAIALACQAHgBgFgDQgFgNAPAEQADgIgIgHQAMgHALAAQgIANALAGQANAEAAgHQgCgJANAAIgBgCIABAAQAJAEAHAHQgJADAAAIQAIATAEgIIACgGIAHgDQAGALADAPQgNAAgCAGQgCARAQADQgDALgHAMQgEgMgJABQgNAFADAKQAAAHAGAFQgPAJgRABgAHdgZQgJAKAAAOQAAANAKAJQAJALANgBQALABAJgJQgGAFgIAAQgMAAgIgIQgIgIAAgMQgBgMAJgJQAIgIALgBQARAAAHAQQgDgKgJgGQgHgFgLAAIAAAAQgNAAgJAKg");
	this.shape_3.setTransform(30.9203,17.9279,0.8099,0.8099,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#818181").s().p("Ao0BHQgRgYgBgkQAAghARgZQAQgZAYAAQAYgBASAZQARAYAAAiQABAjgRAZQgQAYgYABIgBAAQgYAAgRgYgAoNg3QgTAAgNAUQgNAUAAAaQABAcANAUQAOATATAAQATgBAOgUQANgTgBgcQAAgagOgUQgNgTgTAAIgBAAgAGyBCQgagbgBgnQAAglAZgcQAagcAkgBQAkgBAaAbQAaAcABAnQABAmgaAbQgZAcglABIgBAAQgkAAgZgbgAHuhKQgdAAgUAWQgUAWAAAeQABAeAVAXQAUAVAdgBQAdAAAUgWQAUgWAAgeQgBgegUgXQgVgVgcAAIgBABg");
	this.shape_4.setTransform(30.5347,17.8064,0.8099,0.8099,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4E4E").s().p("AJFB5IAGABQgHAKgGACQAEgFADgIgAJHByQAEgFABgGIAJgCQgFANgGAAIgDAAgAnaBhIAEABIAAAAQgFAIgEABQACgCADgIgAJPBeQACgDADgLIALgBIABADIgGAGIAAAEQgFADgDAAIgDgBgAnZBbQACgCACgHIAFgBIAAAAQgDALgEAAIgCgBgAnTBLIADgLIAHgBIAAADIgDAEIAAAEQgDACgCAAIgCgBgAJWBGQADgGABgNIALgCQAGABgDAFIgFAFIADACQABAIgLAAIgGAAgAnPA3IACgPIAIgCQAEACgCAEIgEADIADACQAAAGgHAAIgEAAgAJWAnIABgPQAHAFAHADQABAGABABQgEAEgEAAQgEAAgFgEgAnPAfIAAgNIAHgDQAFABAAAEIgDAEIACAHQgDADgCAAQgDAAgDgDgAnPAJIgBgKQAJgBAAABQADgBABADQAAAJgIAAgAnTgGIgBgHIgCgBQACgFADAAIAIgBIAAAIQADAFgEAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgBgAnEgPIACgGIAGACIgBAFQAHAHgKAAQgFgBABgHgAm8gTIAAAAIAAAAgAnGgaQgBgCgCgKIADgDIACAEQAEACgCAKgAnXgaIgEgLIgDgBIALgFQAFADgBAEIgCADIAEAAQAEAHgFAAIgEABIgFgBgAnhgtIgFgJIAIgFQAFABAAACIgBAEQAEABgBADIAAAAQgBADgFAAIgEAAgAnTg0IADgIQAEABgDAFIAFAEIgCACIgBAAQgCAAgEgEgAnpg7IgBgCIgHgHQgCgDAJgDQAGAAAAADQgBAAAAABQAAABAAAAQAAABAAAAQAAAAABAAIAEABIADAEQgDACgHACIgBAAIgBAAgAnZg/IgDgIIAAgEIAEABQAAAFAFADIAAADQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBgAo8hlQAFgDASgCQAGADgDgEIAIgBIAGAEQABAAAAAAQABAAAAAAQgBgBAAgBQgBgBgBgBIAGgBQAHAAgDAEQAAAAgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAGADAAACIgJADIgDADIABgDIgGgCIADgFQgBgDgJAJQgEABgEgDIACgFQAAgDgIAIIgHgCQgbADgZAeQAOgYAegLgAIuhJIgLgKQgCgCAIgDIAGAQgAn3hNIgEgEQgCgBAJgEIgBAAQAHgBgBAEIAEAEQABACgKABIgDACIAAgDgAnlhOIgDgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIACACQAFABAAAFQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAIgCAAgAGvh7QALgDAYgDQAKAEgEgFIAMgBIAJAEQAGAEgIgIIAJgBQAMgBgFAFIAAAAQgEADABABQAJACAAAEIgOADIgFAFIABgFIgJgCIAEgGQgBgDgNAKQgHACgGgEIAEgGQgBgDgMAJIgLgCQgoAEgoAkQAWgdAugOgAoBhYIgHgEQgCgCAGgDQAHgBAGAGQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgHADIgDADgAIahdIgHgFQgCgCAMgEIAGgBIAEAMIgJAAIgEADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBABAAgAnyhbIgCgFQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAJgCgDAFIABAEQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgEAAgAoBhjIgGgDQgDgBAEgEQARgBgGAEIABADQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEAAgAIJhqIgKgGQgDgBAKgEQAKgCAJAHQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgMAEIgEAEgAIJh5IgJgDQgEgBAHgFIASAAIABACIgCABIABAEQAAADgGAAIgGgBg");
	this.shape_5.setTransform(28.106,15.4914,0.8099,0.8099,0,0,180);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-26.25,-28,0.8099,0.8099,0,0,180,27.4,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AD9ByQAcgHABgWIAJg7QhBgQhoATQhVAQghgaIASiEIEigSQAQAAgBAMIggDOQgGAkgkABIj7AIgAjwgaQhHgKgPAOIADgdQABgLAPgBICjgIQAMgBgBALIgEAuIgDAAQgSAAhSgLg");
	this.shape_6.setTransform(52.6433,-25.8678,0.8099,0.8099,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#818181").s().p("AgFgTIALABQgEASgBAUQgGgcAAgLg");
	this.shape_7.setTransform(4.4572,4.4229,0.8099,0.8099,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgKgJQAAgFADgBIASAAIAAAPIgPAAIgDAQQgDgPAAgKg");
	this.shape_8.setTransform(93.1604,6.7919,0.8099,0.8099,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B3B3").s().p("AoFAgQgbgDgBgYQAKASAXABIgCgTIBTAGIAQgYQgEAjAAAXgAhEAXIAAgBIJJgIQAJglAUgUQgLAeACAtIpaAJQAFgHgIgLg");
	this.shape_9.setTransform(48.3532,12.9065,0.8099,0.8099,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#676767").s().p("AgPgSIASABQAIADAAAGIAAANIAFAOg");
	this.shape_10.setTransform(-42.881,-20.8861,0.8099,0.8099,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#676767").s().p("AgYFsIgrgBQgCAPAKAWQgRgGAAglIAClrIAqlbQADgVAGgKQAIgLAPgCQgOAHgHAYIBJgHQAFgWAUgJQgMALgEAbQgTCLgcDmIACE2QABAdgfATQgCAUAPAXQgUgOgDgagAhADwIgCBxIArABQAcgMADgeIgBhKgAg/B5IgBBtIBHgCIgChugAg+gDIgBBuIBEgCIgBhlIABgIgAgxh6IgNBtIBEgBIAOhtgAgkjsIgMBpIBFgBIAOhsgAgWlnIgNBzIBHgEIAPh2g");
	this.shape_11.setTransform(55.5613,-17.3024,0.8099,0.8099,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5E5E5").s().p("AiQgOIAAgOIEhAtIAAAMg");
	this.shape_12.setTransform(-5.8892,-51.4393,0.8099,0.8099,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#818181").s().p("ApsAtIAugFIAAgbIgrADQgKACAAAGQgGgFAFgGQAEgGAIgBIFjgdQAaABAMAdIBHgHQAHgeAbgHIEDgUQAYAAAXAaIBkgKQAmgCAVADIERApQAKACABAGQACAGgJAAIkagpQglgDhJAIQATANAaAFQAPADAiACIEtAsQAGAIgJACIk8gtIgngFQgTgEgSgJQgTgKgRAAIsyBLQgJgIALgFgAo3AMIABAcIFHgfQgIgVgTAAgAhxgZQgJABgGAHQgHAHgBAKICMgNIgBgVgAANgjIAAAWICdgPQgKgPgUgDg");
	this.shape_13.setTransform(32.9672,-52.0669,0.8099,0.8099,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#676767").s().p("AABATIgQgBQgBgGABgKIAVADQgCAMAEAMQgEgDgDgHgAgIgSQADgJAHgBIAPAKIgCACg");
	this.shape_14.setTransform(-37.3778,-8.3531,0.8099,0.8099,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#818181").s().p("AgwACIAVAAQAPAAAKgHIApgsQAhgkhIBbQgJAKgQAAQAFALALAhQgUgmgTgUg");
	this.shape_15.setTransform(-19.1941,1.0245,0.8099,0.8099,0,0,180);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(-6.2,-42.9,0.8099,0.8099,0,0,180,28.9,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACQAmIhIglIAGALQiQgiiUgWQDQAIBMARQB2AyAbAOg");
	this.shape_16.setTransform(-37.4344,-15.0144,0.8099,0.8099,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#989898").s().p("AAPAjIiGgtQgXgJAAgfIEdBZIAAAAIgFAMg");
	this.shape_17.setTransform(-23.5246,-14.8525,0.8099,0.8099,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B3B3").s().p("AAbAuIALgJQgrhQAkA1IAUAfQACAFgJAAgAgpAcQgIAAABgFIgCg9QAAgIAIABIAhAAQgRADgEAJIABA2QAAADAEAEg");
	this.shape_18.setTransform(0.2035,-21.1696,0.8099,0.8099,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#676767").s().p("ABfB/IgOgCIAAgBIANgKIg9gDQgOAAgCgLIAAhHQgBgSAWgBIAdAAIg/hfQAAC/gDgDQgCgEgFjFQgFgJgTgFIhfgFQgNgBgBARIADCQQABASAHAKQgQgKgBgWQgDhIAAhKQABgVAQAAIBmAEQAYAEAOAZICKDSQAGAPgLAAg");
	this.shape_19.setTransform(6.7918,-26.8591,0.8099,0.8099,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#676767").s().p("AgcgDQAAAAABABQAAAAABABQAAAAABAAQAAABABAAIAEAAIArgBQADgCAAgEQAGAJgGAFIgxABQgFAAAAgLg");
	this.shape_20.setTransform(18.3213,-12.2203,0.8099,0.8099,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#989898").s().p("AA4g7IgEAIIABAAQARABASAQQg7gWgsAaQgqAYgeBCQAviBBgAKg");
	this.shape_21.setTransform(-4.1884,1.01,0.8099,0.8099,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B3B3").s().p("AASABQgCANgJAHQADgKgBgLIgIgBQgBAOgFAGQgNAJgOgmIgsgLIB6AOIgFAHIAkAWgAhMgMIATAEQAGAOAOAKQgRgGgWgWg");
	this.shape_22.setTransform(-27.5133,-8.2114,0.8099,0.8099,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpAXQgggHgbgrQgHgJANAAQAvADA3AHQA5AHAgAHQgFAVALAZQgLADgIAAQg8gEhBgKg");
	this.shape_23.setTransform(-26.7956,-7.8469,0.8099,0.8099,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#818181").s().p("AADAkQgVgBgEghQgDgfAWgGQAZgBABAkQACAkgUAAIgCAAgAAAgZQgPAEADAXQADAXANABQAOABgBgbQgBgZgQAAIAAAAg");
	this.shape_24.setTransform(-51.7544,-3.5929,0.8099,0.8099,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4E4E").s().p("Ag+AtQgSgCgKgQIAAAAIBTACQAJAGAMABQgOgIgJgSIhQgFQgJgCgCgBQgMgIABgKIBhADIAAgDQgBgGAOgGIhvgHQgFAAgDgDQgFgHAGgIICVAJQA+AEAYADQAHALgEAFIg8gCIADAUIA1ACQAGADACAIQACAJgHgCIg3gBQgDAPgIAHIBBABQADAEAAADQgCAHgJABQhhAAhKgJg");
	this.shape_25.setTransform(-49.2311,-3.4735,0.8099,0.8099,0,0,180);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(-48.2,-3.85,0.8099,0.8099,0,0,180,24,22.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#818181").s().p("AhNANQAVgjASgEIAFAEQAFACAKAAQB7AEgfAEIhXgBQgSABgKAFQgSAIgSAaQgFgFAFgJg");
	this.shape_26.setTransform(-30.4418,2.4792,0.8099,0.8099,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#818181").s().p("ADnAVInCgXQADAJAnAHIgZgCQgPgCgJgGQgRgMAGgVQACATAMgBIGLAUQAXADAMgjIgGAdIAiACQAHAFgDARQgCgJgGAAg");
	this.shape_27.setTransform(-42.7726,8.9178,0.8099,0.8099,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#989898").s().p("AgXAFQACgEAtgRIgaAhg");
	this.shape_28.setTransform(-34.0532,4.6457,0.8099,0.8099,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#676767").s().p("AgWARQgCgGAZgcQgKAVADAGQAGADAYAEIgcABIgSgBg");
	this.shape_29.setTransform(-26.9406,5.1113,0.8099,0.8099,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAFQgBgIAPgIQANAEAAAJQgBAKgKAAIgDAAQgMAAgBgHg");
	this.shape_30.setTransform(-28.9307,4.7512,0.8099,0.8099,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4E4E4E").s().p("AICCdQAHAAAAgIQgFgGAGgFQAHABgBgIQgHgCAIgHQAFAAgCgHQgGgCAFgKQAIAAgGgJQgIgIAMgCQACABAGgIQAEBehbApQAugbAKgcgAn7C6QALgJAFgNQAHABAAgIQgFgFAFgFQAIABgCgGQgGgDAHgGQAFABgBgHQgGgCAEgJQAJAAgGgIQgJgIAMgBQADABAFgHQABArgTAdQgVAfgqAGQAYgJALgHgAqKB1QAMAAAEAGQAQAfAUABQgYgOgEgZIAOAAQARAnAcgJQATgIAFggIAMgBQgOA4goAHIgIAAQgoAAgRgzgAFOCFIAQAAQAPAXAVACQgJgFgIgIQgHgHgCgFQALABAKAIQAWAPAXgJQAWgJAIgXQADgDAIACQgIApgyAKQgJABgIAAQgmAAgUgigAJ2AAImqgVQgcgCgQgRQANAWAZAIQgMANgWAFIgoACQABAMAIAMQgPgFgGgPQgTh0g5gqIAsgBQAPgBAHgHIA5g6QBUAJArABQAMAAAOgEQAVAuAcAdQALAKALAFQAJADASADQAwAGBKABQBMACAHgIQAOgQAEgkIAKB3QAFAEACAKQABANgDAOQgNAUgpAVQAlgagBgPgAFuhdIAKABQAIAfAWACQBRAHBYADQAFAAAGgCQAGgCACgFQgLAFgBgFQAEgFAGgQQACgCAKAAQAKgBAEAFQAGAFALASQgIgigNgDQhxABiIgMQgagDgaAiQAPgMAKgEQANgHALAAIAEABgADDhxQgTATgIATQgDAKALACIBcgBQALgCADgHIgYgQQADgNAIgBIA4gYIhcAAIgCAAQgVAAgPAOg");
	this.shape_31.setTransform(-10.3132,12.5016,0.8099,0.8099,0,0,180);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(37.65,1.85,0.8099,0.8099,0,0,180,66,10.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnsEMIgWAKQASgcALgKQgBgIgJABQhUADg8AEQABg5ADg0IAAAAQAAgJgMABIgRAAQAVjpAuh9QARgqAegKQgRALgJARQgHANgHAaQgSA/gLBIQgLBDgBAwQAHgSAMgTQgNA3gEAyQAAAdAXACIFAgQIgBAvIlLAKQAEAHAOADQAMADAJAAIEkgKIgBBPIgXABQgXgVgagFQAPAJARARQARATANATIgrAAQhShJhGBVIgfABQASgaAOgKgAG7DvIjoAEIgGhXIB9gEQgNgFhwABQgFhbgChgQgDBcAEBfIgXABQAFh3AIhfIAcADQgBgIAIhqQgDBVAFBXQAFAjAaAOQBXAjA3ALQAbAFAjADIAoAEIgBAMQgkgEghgBQAMAsARAAQggAkAHAeQAcgXAkgLIAAAKQgWASgSAkQASgeAfgUIgBgQQAkgIAsAEQheATgnBIIgUABQAEgXAFgKgADrBeQgKAAgDAEQgDAEAAAJQAAASAJABIAxgBQARAAgBgSQgCgSgSAAgAkFCzIA3gCIABBKIg5ABgAi2CpIFegMIgCBXIlbAGgACwCdIAXgBQACAxADAmIgeABgAH8B0IABgMQBtARAvAuQgygnhrgMgAi2BsIEXgOQAmgGANgqIASh9IACAMIAOABQgKBcgEB7QiVABjJAHgAkEBwIA2gDIAAApIg3ACgAowjoQALgGAXgCQA0gHDDgRIAhgDIgBAMQjMARhdALQgNACgLAFQgLAFgDAFQAGgPAQgHgADpkjIgKABIADgNIAFAAQBcgGAtA3QgwgshXAHgAjekNIA5gFIgCANIg5AFgAiKkUQDEgQCmgKIgEAMIlnAbg");
	this.shape_32.setTransform(38.999,-21.4974,0.8099,0.8099,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#818181").s().p("AmeBIIh1gSQgJAAgIgOQgLgPgKhiQAAgJAGgDIAggBQAEBtAKAHQgCgSAAglIB5ACQgKA4AAA2QgGgGAAgJgAIkA8IrLAGQgKgDgDgPIAAAAQgLg0gKgcIAegBIAAAcQABAzAkAEQAIgKgIgFQgLgLgBgPIAdgBQAJApAgABQAFgCgDgJQgWgPADgUQAYgOAEgaIFegKQAEAcAJAgQgEgXgCglIAlgBQAHA6AOAUQgJgVgFg5IDqgGQgNBCADA/QgKgDgCgNgAiRgQIAAgRIA2gCQgGANgPAGg");
	this.shape_33.setTransform(48.4964,12.0157,0.8099,0.8099,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#818181").s().p("Ai7gNQAGAHAOABIErgHIAAALIkuAPQgQgGgBgVgACdgMIAfgBQAAAKgIgBIgXACg");
	this.shape_34.setTransform(72.9132,-15.6016,0.8099,0.8099,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ai+BUQgKgiAehhIgBAiIA1gCQgCAjAVACIC3gIQAYgGADgUIAGg6QgCgSgOgDQAWABABAVIgFA6QgBALgGAIIAQAAIgJBJIgBAAIkcALIgGAAQgRAAgBgIgACZAIIApgBIgLBHIgmACg");
	this.shape_35.setTransform(71.6263,-25.6562,0.8099,0.8099,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AuECdQAAgJgMABIgQAAQATjmAwiAQATgyAogFQB9gPCugSIgEAZIgMBeQiDAKiQAOQgwAHgSAXQAXgTAqgEQCegPB1gJIgDAXQjEAOhQAKQgbAEgNARQgLANgIAfQAMgbAKgMQAPgPAWgEQDQgRBEgEIgbDTIAAArIk6ARQgIAAgDgCQgCgDgCgHQgBgPADguQgCAHgDAUQgDAUAAAPQAAAVARAAIE+gPIgDDIIhXADQgsgUgoAYIizAGQgDhbAGhdgApGhxIioAKQgUACgDAUIgEAuIABAAQgDAbAagCICdgIQATgBAIgGQAHgGACgPIACgqQACgOgGgGQgFgFgLAAIgEAAgAoPFEIA6gCIAAADIg6ACgAm/B7IEEgMQAiAAAPgSQALgOAEgfIAfjCQAGgdgdAAIkrAUIACgXQDXgOCJgDQgkC4gDFEIlbAMgAg2jDQA/gCBBABQA5ABAWAeQAlAzAwBIQAIARgCAYIhfiSQgRgZgigDQgzgEgvAAQgMgBgHAJQgGAHgBAOQAAB7ACAdQACAUAJAMQAJALASAIQBPAhBBAIQApAFAnACQgDAigBBXQgWASgRAkQARgeAfgUQgChAAEg8IAjABQAbADgJgYIgwhMQAFgegMgWQg6hXgbgmQgZgegsgBQhAgChPACQANhGAQgzQgSAzgPBGQiLACjVAOIANhoQACgJADgJQC/gSCvgOQBQABBRBfQg3hIgggRQDRAPBgAZQAzANAsAgQApAeA4A+QgggJhcgHIjpgOQgQACAIANQBSB4A9BTQAHAJANAFQABAaAGAOQAJASAUAHIBvAkQgYgCgYAAQgLgBgDAGQgFAGAHAJQAPAaATASQAQAQANAEIgqAoQgRARgPgFQgthAhFAGQhFAHgsBKIjxAIQgNiSgDizQgGCOAOC3IghABQABk5AjjDgAgdB4QgJAAgEAEQgDAEAAAJQAAASAJABIAxgBQARAAgCgSQgCgSgSAAgAoNDNIA3gCIABBfIg5ACgAoNB/IA2gDIABA0Ig3ACgAIICWIiIgtQgggLgBguIAMACQDWABCgAUQgng8gagfIBcBqQB5AwAsAcQiKgThzAAQgMAAgFAHQgEAEgGAOQhUgNgtgFgAoMBPIA1gBIgBAIIABAaIg2ADgAoAgmIA2AAIgMBdIAAACIg1ABgAnziMIA3gDIAAACQgGAlgCAaIgDARIg1ABgAnvi0IALheIA7gHIgOBhIg4AEgAnekrIA5gGIgCAEIg5AHg");
	this.shape_36.setTransform(17.5571,-23.5993,0.8099,0.8099,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#010101").s().p("AE1IqQg0gGgnggQgsglgPg9IkUgNQgKBKgcAcQgbAbg8ACQg3ACgcgVQgcgVgOg1QhkASgLgCQgagFgNggIgdAAQgKBEgwAhQgpAdg2gGQgkgEgcgXQgfgagJgmIgPgFQgFgDAAgJIgDgjIhtgUQgTgEgJgNQgLgOgEgdIgOhdIgBgUQACgKAJgGIAAAAQANlUA+i6QATg8AigSQgFgJADgLQADgLAIgEQgHgCgDgCQgGgDgBgJQgBgVAbgGIFsgfQAegDAUAiIAsgFQASgrAhABID7gTQAUgBAQAGQANAFASAPIBigJQAZgBAYADIEMAoQAQADAGAEQAHAFAAAIIABA1QgDALgPACQA9AiDeD5IAiACQAOABACARIAAAlIAWAUQCOA1AeApQAYAnARC5IAHAMQACAfgFAOQgOAZhJAnQgJAFgJAAQAAA8gcAmQgaAlgxAOQhAASg7gZQg/gbgPg9IhdgHQgRA7g0AgQgpAXgvAAIgWgBg");
	this.shape_37.setTransform(15.9327,-13.0541,0.8099,0.8099,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_3},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-64.6,163.5,96.5);


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
	this.shape.setTransform(99.4857,45.6036,1.5838,1.5838,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282521").s().p("AgnJqQg8lpAGkZQAFjaAwicQAihtA0hCQAaggAUgMIACACQgUALgaAhQgzBCgiBsQguCTgGDXQgIEYA9F1g");
	this.shape_1.setTransform(256.7974,125.5346,1.5838,1.5838,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#144154").s().p("AAAFNIgEqZIAEAAIAFKZg");
	this.shape_2.setTransform(257.2689,138.4027,1.5838,1.5838,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#144961").s().p("AAnABQgDgGgJgFQgMgHgOgBQgMgBgSAFIgQAFIAVgJQATgGAUABQATACAJAMQADAHAAAFQgbAIg+ANQAegMA0gLg");
	this.shape_3.setTransform(251.9237,76.9301,1.5838,1.5838,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00263A","#141116"],[0,1],-1.9,-28.3,4.4,6.1).s().p("AgMFnIgDgDIgDqcQgSAGgTgFIgPgHQAagPA8gPIA3gMQAAANgfAOQgQAHgPAEQAAAIgEABIgDgBIAEKeQgBAFgIAAQgGAAgDgCg");
	this.shape_4.setTransform(255.8435,134.5225,1.5838,1.5838,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00263A").s().p("AhHARQAHgTAqgRQAugSAaAGQAWAFABASQhlAXgpASQgFgGADgKg");
	this.shape_5.setTransform(256.091,78.6178,1.5838,1.5838,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#801517").s().p("AgHAwIABhjIANgBIAABpg");
	this.shape_6.setTransform(254.2993,117.1802,1.5838,1.5838,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E5BD76","#E94D4D"],[0,1],-17.2,0,17.3,0).s().p("AisACIAAhMQD/gEBaACQgbAIgcANQg5AYgGAVQgGAUAcAYQAPAMAPAHIgIAYQjMg3hDgUg");
	this.shape_7.setTransform(225.0392,122.2746,1.5838,1.5838,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B3042").s().p("AiNgeIABgCIEaA5IgDAIg");
	this.shape_8.setTransform(-15.1397,128.1082,1.5838,1.5838,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#6B665F","#C1986A"],[0,1],-1.9,0,1.9,0).s().p("AAAABIAEgOIAEgJIAIAEQAGAHgFAMQgFAOgPAFIgPADQARgOABgIg");
	this.shape_9.setTransform(66.4425,111.2014,1.5838,1.5838,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#AF6F3D","#F4AC5A"],[0,1],-3.6,0,3.7,0).s().p("AgSAaQASgLAGgHQAKgIAUgkQACAMgGAPQgGAPgMAKQgLAIgUAHIgTAGg");
	this.shape_10.setTransform(92.1175,62.5599,1.5838,1.5838,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-0.2,-2.5,0.2,2.1).s().p("AgCARIgFAAIAJgCQADgBABgEIAAgKQgBgFgFgGIgGgFQALAEACAOQABAHAAACQAAAEgEABIgEABIgCAAg");
	this.shape_11.setTransform(95.1601,91.731,1.5838,1.5838,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808B91").s().p("AgJADQgEgBAAgCQAAgEANAAQAOAAAAAEQAAAFgOAAQgFAAgEgCg");
	this.shape_12.setTransform(102.4553,90.652,1.5838,1.5838,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#786F8B").s().p("AgWAPQgOgCACgHIABgPIADgHIAHAAIgFALQgBAEABAJQABAEAHAAIAUAAQAQABAUAEg");
	this.shape_13.setTransform(104.2563,91.6815,1.5838,1.5838,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808B91").s().p("AAxALQAAgJgEgDQgEgGgMAAIhPAAIAAgBIBAgCQATAAAKAEQAIADAAAOg");
	this.shape_14.setTransform(101.0673,90.2957,1.5838,1.5838,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808B91").s().p("AACgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgCQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQgBAAAAABIAHAJIgCACgAgIgFIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIADAGIgBABg");
	this.shape_15.setTransform(91.7253,93.0541,1.5838,1.5838,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808B91").s().p("AA2AWQAAgOgCgKQgDgPgkAAIhFABQABgCAdgCQAagBAPABQAdAAAIAKQAGAHgBAZg");
	this.shape_16.setTransform(100.3842,88.9574,1.5838,1.5838,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#171A1C","#786F8B"],[0,0.988],0.7,-0.8,-7.9,0).s().p("AAOAgIgtgCQgWAAgIgLQgJgMAJgQIAEgKQAFgKAIAAQBPgDAJAAQATACACASIACAWQgBARgNADQgKADgSAAIgLgBg");
	this.shape_17.setTransform(101.3964,90.8896,1.5838,1.5838,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#171A1C").s().p("AAAAOQgHgBgCgBIgDgDQgCgCACgLIACgIQAAgBABAAQAAAAABAAQAAAAABAAQAAABABABQAEADAQAEQAAALgDAEQgCADgGAAIgDAAg");
	this.shape_18.setTransform(110.7701,89.4548,1.5838,1.5838,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282521").s().p("Ah8I0IDWt9QArizgNgrQgEgNgJACIgJAFIACgDQAhgTgLBwQgIBOgQA8QhBD6iTKDg");
	this.shape_19.setTransform(21.5295,106.3111,1.5838,1.5838,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCBCB").s().p("AgFADQgDgEAAgEIAAgEIACAAIAAADQAAADACADQAGAKAHgDQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgCAAQgGAAgFgHg");
	this.shape_20.setTransform(7.3578,16.9759,1.5838,1.5838,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-1.3,0,1.3,0.1).s().p("AADAMQgEgCgEgFQgFgFgBgEQgCgFACgCIAJgBQADACAFAFQAFAFABAEQACAFgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBgAgEgHQgEADAHAHQAGAGADgDQAFgDgIgHQgEgEgCAAIgDABg");
	this.shape_21.setTransform(7.2771,16.8928,1.5838,1.5838,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#282521").s().p("AgiAkIgVgEQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAIATADQAWABAXgLQAXgKANgYQAHgNADgLIABAAQgCAKgGAMQgMAXgYANQgUANgXAAIgEAAgAA5gjIAAAAIAAAAg");
	this.shape_22.setTransform(14.754,23.7096,1.5838,1.5838,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBCBCB").s().p("AgFADQgEgFAAgEIAAgEIADAAIgBADQAAAEACADQAGAKAIgDQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAAQgIAAgFgIg");
	this.shape_23.setTransform(25.2748,27.7389,1.5838,1.5838,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-1.3,0,1.5,0.1).s().p("AAEANQgFgBgEgGQgLgLAEgHIAKgBQAEADAFAEQAFAGACAFQABAFgCADQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgEgBgAgEgHQgEADAHAHQAGAIAFgEQABgBgBgEQgBgCgDgDQgFgGgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_24.setTransform(25.2069,27.6091,1.5838,1.5838,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#282521").s().p("AghAhIgRgEIABgBIARACQAWAAATgKQATgKANgVQAGgLACgJIACgBQAAAIgGALQgKAVgXANQgVAMgWAAIgCAAg");
	this.shape_25.setTransform(31.6014,34.1921,1.5838,1.5838,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBCBCB").s().p("AgFADQgDgEgBgEIAAgEIACAAIAAADQAAADADADQAGAKAIgDQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgDAAQgHAAgFgHg");
	this.shape_26.setTransform(41.2228,37.8907,1.5838,1.5838,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-225.4,0,-228.2,0).s().p("AAFANQgFgCgFgFQgMgKAFgHIAKgCQAFACAEAFQAFAFACAEQACAGgDADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEgBgAgFgIQgDAFAHAGQAHAHAEgEQAEgEgIgGQgDgDgDgBIgCAAIgDAAg");
	this.shape_27.setTransform(41.1536,37.759,1.5838,1.5838,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282521").s().p("Ag5AzIAcgEQAfgGAVgRQAUgQAIgeIAFgcIACgBIgEAfQgJAggVAOQgXAQgZAGQgOAEgKAAIgJgBg");
	this.shape_28.setTransform(48.8843,47.2039,1.5838,1.5838,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9E6565").s().p("AgMADQACAAAAAIQAIgDABgCQABgBgCgGIACAEQAAAFgBABIgJADgAgYAFIABACQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAEgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgDABgAAGAAQABAAAAAHQAGgCABgCQAAgBAAgGIABAEQAAAFgBABIgIADgAAUgLQABABAAAIIAEgFIAAACQgBADgEACg");
	this.shape_29.setTransform(90.0623,83.0301,1.5838,1.5838,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E6565").s().p("AgFAZQgBgXgEgEQgCgDgIgFIgIgFIAJAFQAKAFACAFQADAGADAVgAALAWQgBgUgDgGQgCgEgIgHIgJgGIAJAFQAIAFADAGQAEAHAFAXQgEAAgCgDgAAbgHQgBgEgHgIIgHgHIAGAEQAHAGACADQADAGgBAYIgDACQADgUgCgGg");
	this.shape_30.setTransform(91.7649,80.7139,1.5838,1.5838,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-4.2,0,4.2,0).s().p("AgYASIgMgFQgDAAgCgDQgBgCABgDIADgFQAEgGAEABQADAAAFgEQAGgFADAAQAIAAAEgDQABgCAEABIAGACIAEgCQACgDADABQAFABAJAIQAJAIAAAEQAAAFgDACQgDABgDgBQgDAHgGgBIgLgDQABAFgGABQgDAAgFgCIgEgCQADAHgIACIgCAAQgEAAgJgEg");
	this.shape_31.setTransform(92.7349,78.214,1.5838,1.5838,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2ACA2").s().p("AgJAVIgFgEQgBAGgEgCQgDgBgDgLIgDgKIAFgGQAGgGAFgBIAogIQADAYgGAFIgHAEQAAAEgFACQgEACgEgCIgDgDQAAAGgDACIgCABIgGgCg");
	this.shape_32.setTransform(90.414,81.9017,1.5838,1.5838,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#282521").s().p("AABgKIgZAFQgBABgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAagGIADgBIAbAdIAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_33.setTransform(86.842,81.9017,1.5838,1.5838,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7DC14").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHABQgGgBAAgIg");
	this.shape_34.setTransform(82.5394,84.2378,1.5838,1.5838,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E4C620").s().p("AgDAKIgFgCIABAAQAHgCAAgHQgBgEgDgBIgDAAQAGgGAFAFQAHAEgCAGQgDAHgGAAIgDAAg");
	this.shape_35.setTransform(81.6707,84.1978,1.5838,1.5838,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EEA92E").s().p("AgIAHIgCgEQAKAIAEgHQAGgJgIgFIADABQAEABABAFQACAEgDAFQgEAFgFAAQgFgBgDgDg");
	this.shape_36.setTransform(81.7691,84.4357,1.5838,1.5838,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2DFDB").s().p("AgHgIIAGAAIAJALQgEAEgFABIgEABg");
	this.shape_37.setTransform(80.8368,87.4053,1.5838,1.5838,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7DC14").s().p("AgQATQgGgIAAgLQAAgLAGgHQAIgIAIAAQAJAAAHAIQAHAIAAAKQAAALgHAIQgHAIgJAAQgIAAgIgIg");
	this.shape_38.setTransform(81.8267,84.5545,1.5838,1.5838,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EEA92E").s().p("AgQAVQgIgJAAgMQAAgLAIgJQAHgIAJAAQAKAAAIAIQAHAJAAALQAAAMgHAJQgIAJgKAAQgJAAgHgJg");
	this.shape_39.setTransform(81.5099,84.5545,1.5838,1.5838,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#282521").s().p("AgIAHQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAOgGQAFAAADAFIgMAGQgFACgCAAIgBAAg");
	this.shape_40.setTransform(94.5101,82.2937,1.5838,1.5838,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9E6565").s().p("AAHAMIgBgMQAAgFgEgDIgYgYIAtAdIgJAHIgDAPQgBAHgEAGQAEgHgDgNg");
	this.shape_41.setTransform(101.5446,78.2194,1.5838,1.5838,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-2.6,0.8,0.3,-3.7).s().p("AAGAgQgcgLgkgYIAAgNQACgNAHgEQALgIATAIIAXARQAaARAKAEQABABABAAQAAAAABABQAAAAAAABQABAAAAAAIANACQADAMgCAHQgCAEgHACIgSACIgEABQgLAAgKgGg");
	this.shape_42.setTransform(102.3059,78.2998,1.5838,1.5838,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CBCBCB").s().p("AgEADQgEgEgBgFIAAgDIACAAIAAADQAAADADADQAGAKAIgDIAAADIgCAAQgIAAgEgHg");
	this.shape_43.setTransform(59.1788,54.1945,1.5838,1.5838,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-202.8,0,-205.6,0).s().p("AAFANQgFgBgFgGQgFgEgCgEQgCgGACgDIACgBIAHAAQAFABAEAFQAGAFACAFQACAFgDADQgCACgDAAIgDgBgAgFgHQgCABACAEQABACADADQAHAHAEgEIgBAAQAEgDgHgHQgFgFgDAAIgDACg");
	this.shape_44.setTransform(59.0292,54.0537,1.5838,1.5838,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#282521").s().p("AhEBYIAugLQAygTATgnQARgmADgnIgBgfIADAAIAAAjQgDArgTAiQgVAkgvATIgsAMg");
	this.shape_45.setTransform(68.523,70.1026,1.5838,1.5838,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D14F50").s().p("AgHABIAPgNIAAACIgFAFIgFAHQgCAGACAFQgEgEgBgIg");
	this.shape_46.setTransform(62.1483,51.0973,1.5838,1.5838,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AF4340").s().p("AgIAPQgGgDgBgJIAAgCIACgCIANgOIACgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACADQACAEAHAGIgBAEQgNAQgCAAIgBAAQgDAAgEgCg");
	this.shape_47.setTransform(61.1981,51.4075,1.5838,1.5838,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D14F50").s().p("AgHAAIAPgJIAAABIgFAEQgEAEgCABQgBAEAAADIABACQgEgDAAgHg");
	this.shape_48.setTransform(43.7766,34.9033,1.5838,1.5838,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AF4340").s().p("AgIAMQgFgEgBgHIAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAOgJIACgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABAEQACAFAGAEQAAAEgDACQgLAIgCABQgEAAgDgDg");
	this.shape_49.setTransform(42.9055,35.4048,1.5838,1.5838,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D14F50").s().p("AgFAAIALgHIAAABIgIAHIgBAFIAAACQgCgEAAgEg");
	this.shape_50.setTransform(9.257,13.8391,1.5838,1.5838,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AF4340").s().p("AgJgBIACgDIAJgFIACAAQAHADgBAIQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgIAEgCAAQgGAAAAgLg");
	this.shape_51.setTransform(8.6933,14.2351,1.5838,1.5838,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D14F50").s().p("AgGAAIANgIIAAACIgBAAIgEADIgFAEIgBAFIAAADQgDgEABgFg");
	this.shape_52.setTransform(27.3252,24.1732,1.5838,1.5838,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AF4340").s().p("AgIAJQgDgFAAgGIACgDIAKgGIAEgBIABADQABAEAFAFQABABgFAEQgJAIgCAAQgCAAgDgEg");
	this.shape_53.setTransform(26.6983,24.7276,1.5838,1.5838,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9E6565").s().p("AgXAPIABgDIAIADQAKADAFAFgAgEAAIgMAAIgEAAIAHgEIAAAAIAUAFQAHAEADADQgLgFgKgDgAAFgQQgFgCgHAAIgGAAIAGgEIAAABIAHABIAOAFQAHADADAFQgHgFgMgEg");
	this.shape_54.setTransform(74.2246,69.7067,1.5838,1.5838,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-2.2,0.1,2.6,0).s().p("AgPAjQgMgGgDgGQgCgEACgDIADgBQACgDgCgGQAAgEAFgDIAFgDQgCAAAAgHQAAgEAEgDIAEgDQgDgCABgEQAAgEADgCQADgCAHAAIAHABQANAEAEAEQAJAKgBAEIgEAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAEgFAFQgGAGAAAEQgBAIgFACQgFADgEAGQgCACgEAAIgJgBg");
	this.shape_55.setTransform(73.6445,69.7369,1.5838,1.5838,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9E6565").s().p("AgOASIAIgOIAXgbQABAKgDAGIgFALQgDAHgEADQgDAEgJAEIgIACIADgGg");
	this.shape_56.setTransform(71.3682,71.33,1.5838,1.5838,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2ACA2").s().p("AgHAMQgDgEADgEQADgDABgEIACgIQAAgCAFAAIAGAAIgBAMQABAIgJAGIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_57.setTransform(76.6003,66.8664,1.5838,1.5838,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-175.1,0,-181,0).s().p("AgdBWQAFgZAHgXIANgqQAJgbAAgEIgCgIIATgrIAIADQgOAegTBHIgRBDQgBACgDAAIgFgBg");
	this.shape_58.setTransform(79.7678,87.6033,1.5838,1.5838,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-205.9,0,-247.7,0).s().p("AjQCsIAAAAIAmg2QAwg/AygoQBUhCBVg5QBVg4AbgIIAAAKQgzAbhEAsQiFBXhNBQQgqArgUAeIgLAWIgLACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_59.setTransform(41.1634,40.5686,1.5838,1.5838,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#938C8A","#A9BDC4"],[0.02,1],-24.5,0,24.6,0).s().p("AjvEVIgGgDQACgKAIgeQARg6AmheQAzh9C+iCQBghBBVgnIAEAAIAAADQg8AjhIAuQiSBehDBNQhEBOgmB3QgTA7gFArIgFABIgFgBg");
	this.shape_60.setTransform(46.7462,57.2543,1.5838,1.5838,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808B91").s().p("AAAgOQAFAAACgDIgGAgIgHACg");
	this.shape_61.setTransform(83.6876,104.51,1.5838,1.5838,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#25292B").s().p("AAAAGQgGAAgDgDQgEgDAAgBQABgHANACQAOADgBAFQgBADgEABIgFABIgEgBg");
	this.shape_62.setTransform(84.5578,100.8697,1.5838,1.5838,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#484E52").s().p("AgEAWQgFgBgDgDQgEgDABgDIAFghQALAIAQgEIgGAiQgBADgFABIgFABIgEAAg");
	this.shape_63.setTransform(84.9992,104.0666,1.5838,1.5838,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],1.8,0,0.3,0).s().p("AgDAoQgJgFgDgKIgSg1IAHgHQAOgHAbAAIATAxQACAGgGALIgIAOQgCADgGABIgIABQgEAAgFgDg");
	this.shape_64.setTransform(110.8255,71.4066,1.5838,1.5838,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#171A1C").s().p("AgqAAIALAAQAPAAAQgDQAQgDAMgGIAKgFIAFAJQABAEgBACQgBACgGACQgTAMgfADIgcABg");
	this.shape_65.setTransform(84.923,87.9992,1.5838,1.5838,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#040404").s().p("AgYAdIgHgDIADgIQAGgIAQgEQATgEALABQAKABgBAGQgCAOgfAFIgMABIgMgBgAgTgJQACgEgQALIAHgIQAIgJAKgEQAOgGAJABQgRAIgGAHQgEAEAQACQAIABAKgBQgRAHgPABQgJACgHADIgFAEIAMgTg");
	this.shape_66.setTransform(111.9115,64.1125,1.5838,1.5838,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#171A1C","#786F8B"],[0,0.988],1.8,0.2,-5,0).s().p("AgTBNQgEABABgGQABgGgDgCQgDgDABgDQABAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCAAgFIAAgUQgBgLgFgZQgFgbgBgNQgBgPAWgIQALgFAKgCQANAIAHAlQAEAUAEAdQAGAZAIAPQADAGgHAFQgGADgQAFQgMADgKAAIgNgBg");
	this.shape_67.setTransform(113.3155,55.9674,1.5838,1.5838,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-6.9,0,7,0).s().p("Ag0ALIgRgIQAFgBAOgGIAKAEQAOACAVgCQAggDAdgMIANAAQgEAGgNAHQgYANghAEIgPABQgRAAgPgFg");
	this.shape_68.setTransform(100.436,42.7514,1.5838,1.5838,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#293133").s().p("AgFACIAKgFIABADQgEABgDADg");
	this.shape_69.setTransform(114.3336,14.9082,1.5838,1.5838,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#373C3F","#786F8B"],[0,0.988],-0.5,-0.2,1.3,0.6).s().p("AgMgFIABAAIACgBIAVAKIAAADg");
	this.shape_70.setTransform(108.4208,13.0473,1.5838,1.5838,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#373C3F","#786F8B"],[0,0.988],0.3,-0.3,-0.3,0.4).s().p("AgOgGIAFgDIAYAPQgEADgFABg");
	this.shape_71.setTransform(109.8594,14.1163,1.5838,1.5838,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#171A1C").s().p("AgUAGQgCgIAOgHQARgJAIAIQAGAFgCAGQgCAEgHAEQgIAEgKABIgCABQgKAAgCgJg");
	this.shape_72.setTransform(109.7821,13.9251,1.5838,1.5838,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#293133").s().p("AgXAHQgCgJAPgIQAMgHAJADQAFABADACQAHAGgDAHQgBAEgJAEQgJAFgLABIgCAAQgMAAgCgJg");
	this.shape_73.setTransform(109.856,14.0714,1.5838,1.5838,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#373C3F","#786F8B"],[0,0.988],0.4,1.3,-0.3,-0.4).s().p("AgCAKIADgTIACgBIgDAVg");
	this.shape_74.setTransform(119.0057,17.9569,1.5838,1.5838,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#373C3F","#786F8B"],[0,0.988],-0.9,0.1,0,0).s().p("AgDgLIAFgBIACAVIgHAEg");
	this.shape_75.setTransform(117.026,17.5214,1.5838,1.5838,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#171A1C").s().p("AgKAOQgEgBgCgEIgBgDQAAgDABgDQADgGALgEQALgGAGAGQAGAFgHAHQgGAGgIAEQgFACgDAAIgCAAg");
	this.shape_76.setTransform(117.2521,17.561,1.5838,1.5838,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#293133").s().p("AgLAQQgFgBgCgEIgBgEIABgHQAEgHAMgFQANgHAHAHQAGAHgIAHQgHAIgJAEQgFACgEAAIgCAAg");
	this.shape_77.setTransform(117.0724,17.5287,1.5838,1.5838,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#171A1C").s().p("AgOgKQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAQACgGgDgEIAtAoIgDADg");
	this.shape_78.setTransform(102.8908,16.0168,1.5838,1.5838,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#805252").s().p("AgfAEQADgFAFgEQAFgDAJgBIAHgCQAFgDAIgBIAVgBIACAJQgEAEgGADQgNAFgLgFIgGgBIgEABIgEAGQgCAFgEACQgFAEgEAAIgEABQgBgFADgJg");
	this.shape_79.setTransform(111.5976,17.0859,1.5838,1.5838,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F1CCBF").s().p("AgBABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAGgBIACABQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDABIgBgBg");
	this.shape_80.setTransform(107.2383,34.2038,1.5838,1.5838,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B57675").s().p("AAAgBIgFgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAIAEAFg");
	this.shape_81.setTransform(104.7122,29.8352,1.5838,1.5838,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgNADQAGgDAKgBIALgEIAAAFQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHACQgHADgGAAg");
	this.shape_82.setTransform(108.1569,31.221,1.5838,1.5838,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5C4A4C").s().p("AgFAKQgBgDgFgEIgFgDIAFAAIASgFQAHgCADgEQABALgEAGQgDAEgIACIgEAAQgEAAAAgCg");
	this.shape_83.setTransform(108.141,31.7318,1.5838,1.5838,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-1.4,0.3,0.7,-0.4).s().p("AgKAPIABgFQACgKgBgDIgDgMIAIAJQAEAPADgBQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAAAAABABQgBACgGAAQgFAAgEADIgEABIgCgBg");
	this.shape_84.setTransform(110.8889,26.7777,1.5838,1.5838,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgBABQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIABAAIABABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_85.setTransform(113.2777,25.4997,1.5838,1.5838,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#271C1A").s().p("AgEAAQACgBACgBQAFAAACACQgEgCgEACIgEACIgBABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAg");
	this.shape_86.setTransform(113.8268,25.2753,1.5838,1.5838,0,0,180);

	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(114.2,25.9,1.5838,1.5838,0,0,180,0.8,0.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B57675").s().p("AgEABIAEgCQADgCAEACQgEgBgDACIgGADg");
	this.shape_87.setTransform(114.0564,25.0047,1.5838,1.5838,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D3D6DB").s().p("AgCAFQgDgCgBgDIAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAFgDADADIABADQgBADgDACIgDABIgCgBg");
	this.shape_88.setTransform(113.7199,25.7683,1.5838,1.5838,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B57675").s().p("AgDACIgCgEIALAFg");
	this.shape_89.setTransform(107.6818,28.3702,1.5838,1.5838,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#C3816D","#765652"],[0,1],-1.3,-0.2,1.3,0.1).s().p("AgIAIQgCgGAEgFQAGgIAKgCIgFAHIgHAFQgFACAAAHIABAGIgCgGg");
	this.shape_90.setTransform(116.9396,18.9468,1.5838,1.5838,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-0.8,0.2,0.8).s().p("AgBACQgCgFgEgDIgEgCQAKAAADAKQADAHAHgBIgHABQgEgBgCgGg");
	this.shape_91.setTransform(100.9507,12.5325,1.5838,1.5838,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-1.1,0.3,1).s().p("AAFADQgEgMgFgCIgEgDIAIADQAEADADAIQAEANgHACQADgEgCgIg");
	this.shape_92.setTransform(103.3641,16.294,1.5838,1.5838,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#805252").s().p("AgHABIAEABIgDABIgBgCgAAAgCIAAAAIAIAAIgHACQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_93.setTransform(110.5291,29.8692,1.5838,1.5838,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B57675").s().p("AgSAGQACgBABgDIADgFQABAFgDACIgDACgAAKgBIgGgCIgCgCIAHACIALAAQgFACgEAAIgBAAg");
	this.shape_94.setTransform(110.2554,26.153,1.5838,1.5838,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-0.9,-0.4,0.8).s().p("AADAHIgEgFIgKgJIADAAIAHAGQAFAFAIAEIgJgBg");
	this.shape_95.setTransform(102.4157,13.6808,1.5838,1.5838,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#997363","#523A38"],[0,1],0.4,-1.4,-0.2,0.5).s().p("AAFgEQgFgFgGACIgHACQAAgFAJgBQAIgBAFAGQAIAHgFALQACgJgJgHg");
	this.shape_96.setTransform(107.4314,14.4217,1.5838,1.5838,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#997363").s().p("AggAMQAKgDAFAEQACACABACQgDgEgSAGQgJADgFAEIgDAEQgBgLAVgHgAgWgDQgHgBgGACIgEABIAFgDQAHgCAJABQAQACAAAGQgIgEgOABQgJAAgHADIgFACQAGgHARgBgAAYgWIAIgEQgFAAgEACIgDACIAEgEQAFgDAHAAQAMAAAFAKQgLgKgNAGQgIAEgCAFIAAAEIgBAAQgCgHAIgFg");
	this.shape_97.setTransform(110.6153,13.0077,1.5838,1.5838,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#523A38").s().p("AAJAJQgFgFgCgHIAAgIIACAIQADAHAFADQAHAEADAJIgCADQgCADAAAFQgCgPgHgHgAAaARIgDgPQgDgMgLgJIAGADQAHAEADAHQAFAJAAADQABgOgEgJIgFgKIgDgEIAFAEQAFAGAEAJQAGAQgBAMQgEgGgIAGgAgDgEQgGgNgKAAQgKgBgFAEIgEAEQABgGAJgEQAKgDAIAGQAMAKgBAOQgBgGgDgFg");
	this.shape_98.setTransform(103.593,16.5711,1.5838,1.5838,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEACQAAgCAEgCQAEgCAAADQACACgFACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_99.setTransform(108.1173,23.7377,1.5838,1.5838,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#271C1A").s().p("AAAgCQAGgCAGADQgJgCgFACIgJAFQgCgEANgCg");
	this.shape_100.setTransform(108.5344,23.2784,1.5838,1.5838,0,0,180);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(108.65,24.35,1.5838,1.5838,0,0,180,1.4,1.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D3D6DB").s().p("AgFAHQgCAAgCgEIAAgDIAAgCIAJgEQAFgBAFABQACAKgLADIgDABIgDgBg");
	this.shape_101.setTransform(108.472,23.9634,1.5838,1.5838,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#523A38").s().p("Ag3ALQAFgDAGAAQgLAEgGAJIgDAHQgBgMAKgFgAAwAKQgCgMgOgFIABAAQAGAAAGAFQAGAFAAAFQAAAIAMgCQgFAEgEAAQgFAAgBgIgAA7gKQgIAAgCgGQgDgLgLAAQAEgBAEACQAFADADAGQADAIALgCIgEACIgCgBg");
	this.shape_102.setTransform(109.2724,15.5983,1.5838,1.5838,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#523A38").s().p("AABgDQgHgBgHAEIgFAEQACgFAHgDQAGgDAIABQAMABACAMQgFgKgNAAg");
	this.shape_103.setTransform(104.3954,10.5352,1.5838,1.5838,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#523A38").s().p("AAdgBQgGgGgJADIgIAEQABgFAIgCQAIgDAIACQAKACACALQgCgEgEgCQgDgDgGgBIgGgCIAEACQAGADADAEQAFAHAMADIgCABQgIAAgNgOgAgagHQgKAAgIAFIgHADQABgIAVgEQAJgCAJAGQAGAFAAACQAAABAAAAQAAABAAAAQAAABgBAAQgBAAAAABQgEgLgPAAg");
	this.shape_104.setTransform(109.4239,12.8595,1.5838,1.5838,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#523A38").s().p("AAEgEQgEgGgFAAIgGACIADgCQADgCAFAAQAGABADAFQAEAFgCACIgFAHQgDAEgEABQALgIgGgJg");
	this.shape_105.setTransform(110.9315,11.9122,1.5838,1.5838,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#523A38").s().p("AggASIADgCIgFAAIADgDQAGgEAKgCQAQgCAOAGQgOgCgPAEQgLACgGAEIgEADQABgCACgCgAAPALQANgFgCgLQAAgIgKgDQgJgEgHAHIACgDQAFgEAIAAQAIABAEAGQADAEAAAFQAEgLgJgHQAJACABAIQACAIgFAFQgFAHgMADIAAAAg");
	this.shape_106.setTransform(113.6331,12.3346,1.5838,1.5838,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F1CCBF").s().p("AgFAIIgCgCIAEAAQAEAAACgDQAEgFAAgFQACAJgIAEQgCACgCAAIgCAAg");
	this.shape_107.setTransform(98.2,23.6981,1.5838,1.5838,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-0.8,0.4,0.8,-0.3).s().p("AgMACQADgPAJgGQAHgDAEAVQAFAVgHgCQgGgBgFACIgEACg");
	this.shape_108.setTransform(114.7817,19.9948,1.5838,1.5838,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F1CCBF").s().p("AgDAAIABgCQACACAEAAIgEADQAAAAgBgBQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_109.setTransform(115.4026,24.9651,1.5838,1.5838,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#F1CCBF","#E2ACA2"],[0,1],-1.1,2,0,-1.1,2,2.7).s().p("AALAeQgLgKgNgEQgGgBgCgEIgCgFQgCgGgCgEIgCgDQAIAEAQgPQAMgGAEgHIAGAHQAGAHABAFIACAKQABAGADAFQACAGgEADQgHAGgCAFQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_110.setTransform(105.1166,26.0162,1.5838,1.5838,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#523F3E").s().p("AgiALIAAgDIACgBQADgCAEAAQAHABADADQgJgCgFADIgEAEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAACgIQAFgDAHgBQAGgBAEABQAFABAGgCIgDAGQgLgFgMAFQgIADgDAEIgDAEQgDgFAKgHg");
	this.shape_111.setTransform(110.6909,22.5103,1.5838,1.5838,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B57675").s().p("AAcANIgDgNIAAgFQABgFADgDQAFgEAFAGQACACAAAIIABAEIgDgIQAAgEgDgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAFABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQgCAIACABQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAgBABQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgBgHQgCgHgCAEQAAABADAFQAAACgDAFIAFABIgFABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABgBgAgpAJIAKgFQAHgCAGAEQgFgCgHABIgLAFg");
	this.shape_112.setTransform(103.8411,21.6472,1.5838,1.5838,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B57675").s().p("AgIALIgEgBQgDgCABgFIAEgNIgCALQgBAEACACQAGgFAJABQAMABgEgFIgDgDQADAAADADQACABgGADQgJADgFADIgFACIAAAAg");
	this.shape_113.setTransform(110.4969,28.6936,1.5838,1.5838,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-0.5,0.4,1,-0.1).s().p("AgEACIgEgMIgBgIIACADQAEgBADgGIADABQADADgBAEIgBAMQgBAHACABQAEABAAAFQgBAEACAHQgKgNgEgIg");
	this.shape_114.setTransform(113.0666,29.2809,1.5838,1.5838,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#765652").s().p("AAoAYQgLgLgGgLQABAAABABQABAAAAAAQAAAAABAAQAAgBAAAAQgBgDgDgGQgEgHgHgCQgGgCgGACIgGADQgCgEgHAFQgIABgEAEQgIAAgEAFQgLAFgCASIgBABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIgBgDQAAgEADgDIgCABIgFAGIgCAGIAAABIgCgFQAAgGAEgGIgDACIgEAFQgCgEABgFQABgKANgGQgFgFgGAEIACgDQACgDAEgBQgCgBgFACIACgJQAGgLAQgHIACgDQADgEAJgCQAUgGAHADQAEABABADQgCgHgDgBQAGgBACAHIAGgFQAHgEALAFQAWAJADAMIAIAPQAHAPgCAQQgFgGgJAIQgGAFAAAFIADALQADAJgCAIIgEADQgBgUgJgNg");
	this.shape_115.setTransform(108.6047,16.9847,1.5838,1.5838,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#805252").s().p("AAJAOIgFgGIgBgDQAEgFgEgEIgFgFQACAHgDACQAAgEgDgEQgCgDgEgCIgDgCQADgBAEABIAAgCQATALABAIQABAJADAHg");
	this.shape_116.setTransform(105.6229,16.6899,1.5838,1.5838,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E2ACA2").s().p("AgHBLQgFgBgGgJIgVgfQgEgFgCgIIgCgKQgBgDgGgEQgCgBgBgDIAAgHIgFgUQgFgLAPgYQAFgHAMgCIAUgDQAKgCAPAIQAPAIAAAGQABAIANAZIAAgFQAAgGACgDQADgEAHgBQAHAAACAFQAHAUgEAKQgFAIgHAAQACAKgGATQgJAbgaAMQgKAEgFAAIgEAAg");
	this.shape_117.setTransform(106.9573,24.7751,1.5838,1.5838,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C03B3A").s().p("AgJBBQAEgBABgLIAEgwIADgyQAAgJgDgGIgEgFQANAAABAQIgEA0QgEAvgCAHQgCAJgGAAIgBgBg");
	this.shape_118.setTransform(127.7165,85.3539,1.5838,1.5838,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#F8D371","#F2E47A"],[0,1],-80.5,0,80.5,0).s().p("AH5AlQlRg8kggWQkfgWi8APQg6AFgqAIIgeAHIhPgSQAqgRBmgMQDOgZEzAYQEyAZFiA5QCwAdB0AZIgLAVIABAAIgKAQQhvgaipgeg");
	this.shape_119.setTransform(77.0754,146.6877,1.5838,1.5838,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#8A9FA8","#E1E2E1"],[0,1],-96.1,0,96.2,0).s().p("AH8CYQlAgZk+g0QkVgtkhhSQiQgqhYghIAAAAIghgnQBXAkEXBDQFWBQFdA1QFGAxEvAOQCXAGBWgDQgGAMgHAJIgFAHQgtADg/AAQh/AAjJgPg");
	this.shape_120.setTransform(110.5325,150.4218,1.5838,1.5838,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#849FAD").s().p("AIFCXQlWgTkxgyQkVgtkhhSQiQgqhYghIAAAAIghgnQBXAkEXBDQFWBQFdA1QFGAxEvAOQCXAGBWgDIAAALQhCAGheAAQh4AAilgJg");
	this.shape_121.setTransform(110.5325,147.5275,1.5838,1.5838,0,0,180);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E94D4D").s().p("AJXAoQj1gqjMgWQj1gajpgIQjsgJhXAQQhKAMgjAKIgVAIIgYgGQABgEAIgFQARgLAlgJQB5gbEgAGQEhAGHFBJQDjAlCqAkIgBADIgBABQhSgRh7gWg");
	this.shape_122.setTransform(76.917,142.9615,1.5838,1.5838,0,0,180);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#581211").s().p("AhFCKQg7gDhOgWIhDgVIAAgBIA8grQBCgzAigqQAhgrANgdIAGgVIB/AeQCNAlBDAfQAAAFgPAfIgMAVQgLAVAFgSQgEAAgEAEQgIAIACAWQgQAdgSAcQgNAShaAHQgsADguAAQghAAgkgBg");
	this.shape_123.setTransform(-11.2211,152.8094,1.5838,1.5838,0,0,180);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#C03B3A","#801517"],[0,1],-102.9,0,103,0).s().p("AMhDKQjsgEm3gxQm3gxl3hsQi7g3hkgtQghgngOgXIgGgPQL9g4LSCJQFqBFDQBPQgCANggA7IghA5IgOAWQgZAHhXAAIgjAAg");
	this.shape_124.setTransform(108.3153,139.3753,1.5838,1.5838,0,0,180);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8A9FA8").s().p("ADGDRQhbgqhlhJQjLiSg2iaQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAABAAQAqBGBUBYQCmCuDQBWIgWABIgggBg");
	this.shape_125.setTransform(231.9066,143.253,1.5838,1.5838,0,0,180);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5A6A72").s().p("AgwAmInMgUQGfgHBQgdQAngQgrgOQBcgEDhAWQByAMBfAMQABAGgHAKQgNAVgkANQgPAFhYAAQh+AAkRgLg");
	this.shape_126.setTransform(41.7467,175.711,1.5838,1.5838,0,0,180);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#8A9FA8","#FFFFFF"],[0,1],80.7,-17.9,-19,49.1).s().p("AHzDiQlFgLrYgWQj0h1iMiiQgrgygcgyIgTgnQNGgfK1B/QFbBACzBFQg3B1gsA9QgfArhPAGQgQABglAAQhTAAi5gGg");
	this.shape_127.setTransform(108.3945,145.7665,1.5838,1.5838,0,0,180);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FDD2BA").s().p("AgDABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCAAIgCAAg");
	this.shape_128.setTransform(152.3727,62.6688,1.5838,1.5838,0,0,180);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#99816E").s().p("AgcAaQAbgPAZglIAAgBIAFACQgRAcgeAZg");
	this.shape_129.setTransform(146.2862,108.0339,1.5838,1.5838,0,0,180);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D0B9A6").s().p("AAlAiIg2gJQgXgDgbgHIgXgHQAKgLATgMQAlgYAmAFQAoAGAXAMQALAGADAFQgHAigLAFQgDACgIAAQgJAAgQgCg");
	this.shape_130.setTransform(151.473,107.7374,1.5838,1.5838,0,0,180);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#101518").s().p("Ag3AcIgOgTIAOAHQAOAIACADQADAHgNARQACgMgIgLgAgRAKQgJgGgEABIgTAAQAGgCACgEQAAgDAGABIALACQAJABAFAPgAAeglIAGgEIAOgHQAKgEAKAEIgKAEQgJAEgCADQgCADAFAGIAGAGQgagIgCgHg");
	this.shape_131.setTransform(148.7014,91.6815,1.5838,1.5838,0,0,180);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#974A48").s().p("AAKAQIgNgCIABgCIANACIAAACIgBAAgAgKAAIADgBIALAAIAAABgAgKgNIACgBIAAgBIAJABIAAABg");
	this.shape_132.setTransform(169.6468,99.727,1.5838,1.5838,0,0,180);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-3.2,0,3.3,0).s().p("AgGAmQgGAAgBgEQgBgFgCgBQgDgBAAgEQAAgFgFgCQgFgDABgFQADgFAAgDQAAgBgEgDQgEgCABgEQAAgFAIgEIAIgEIgFgNQARgEAOAIQAIAFAEAEQANAQgCAVQgHALgNAIQgLAFgGAAIgCAAg");
	this.shape_133.setTransform(164.1562,98.1407,1.5838,1.5838,0,0,180);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#809BB2").s().p("AgEgDIABgFIAIAMIgCAGg");
	this.shape_134.setTransform(153.0568,73.0722,1.5838,1.5838,0,0,180);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#B86D66","#F9B49E"],[0,1],-2.1,0,2.2,0).s().p("AgDAVQgEgDAAgCIABgCQgJAAgBgHQgBgEADgCIADgBQgFgBgBgGQAAgDADgCIACAAQgHgBgBgFQgBgFAFgDQAGgEARAEIAAAAQAPAmAAAFQAAAGgDAGQgQgEgGgEg");
	this.shape_135.setTransform(168.9473,99.4024,1.5838,1.5838,0,0,180);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#101518").s().p("AgmAlIAMggIACAAIgCALIgFARIgIAQQgBgGACgGgAAagDIgIgFIAJgfIACgCIAAgBQAAgFAGAAQAGAAAAAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIAAAAIACADIgJAgIgDAAIgDAAgAAYgMQAAADADAAQAEAAAAgDQAAgFgEAAQgDAAAAAFg");
	this.shape_136.setTransform(157.9348,77.4275,1.5838,1.5838,0,0,180);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#679B94").s().p("AgIALIAPghIADABIgOAfQgCAGAAAHQgEgFACgHg");
	this.shape_137.setTransform(165.8985,81.189,1.5838,1.5838,0,0,180);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#101518").s().p("AAJAGIghgHQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIAmAIQAHAAABgCIAEgIQgBAIgCACQgDADgFAAIgGgBg");
	this.shape_138.setTransform(160.8272,77.9338,1.5838,1.5838,0,0,180);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CBCBCB").s().p("AgIAKIAAgDQAHADAGgKQADgFgCgEIADAAQABAFgFAHQgEAHgIAAIgBAAg");
	this.shape_139.setTransform(240.7307,26.868,1.5838,1.5838,0,0,180);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.3,0,-1.3,0.1).s().p("AgKALQgDgCACgFQABgFAFgFQADgDAFgDQAFgBAEACQACACgCAGQgBAEgFAEQgHAIgFAAQgCAAgCgCgAABgIQgDABgCADQgIAHAFADQADAEAGgHQAHgHgEgDIgCgBIgCAAg");
	this.shape_140.setTransform(240.851,26.7766,1.5838,1.5838,0,0,180);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#282521").s().p("AgNAYQgYgOgMgYIgIgVIACAAIAJAXQAOAZAXAKQAWALAYgBQAMAAAHgDQABAAAAAAQAAAAAAABQABAAgBAAQAAAAAAABQgIADgNABIgFAAQgXAAgVgMg");
	this.shape_141.setTransform(233.3094,33.6874,1.5838,1.5838,0,0,180);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CBCBCB").s().p("AgIALIgBgEQAJADAFgKQAEgGgCgEIACAAQACAFgFAIQgFAIgIAAIgBAAg");
	this.shape_142.setTransform(222.6609,37.7563,1.5838,1.5838,0,0,180);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0.1).s().p("AgLANQgDgDABgGQACgFAFgFQAFgFAEgCQAFgBAFACQAFAHgLALQgFAFgFACIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgFgEQgDADgBADQgBADACACQAEAEAGgIQADgDABgDQABgDgBgCIgDgBQgDAAgFAFg");
	this.shape_143.setTransform(222.8169,37.6001,1.5838,1.5838,0,0,180);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#282521").s().p("AgLAVQgXgMgLgVIgGgUIACABIAJAVQANAVATAKQATAKAWAAQALAAAGgCIACABIAAAAQgHADgLAAIgDAAQgVAAgVgMg");
	this.shape_144.setTransform(216.2492,44.2136,1.5838,1.5838,0,0,180);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CBCBCB").s().p("AgJAIIAAgBQAIAEAHgLQAEgFgCgEIACAAQACAFgGAHQgEAGgFABIgGAAIAAgCg");
	this.shape_145.setTransform(206.5777,48.009,1.5838,1.5838,0,0,180);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0).s().p("AgMAMQgDgDACgFQACgFAFgFQAFgEAFgDQAFAAAFACQACADgCAFQgDAFgFAFQgFAFgFABIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgFgEQgHAGADAFQAEAEAHgIQAIgGgEgEIgDgCQgDAAgFAFg");
	this.shape_146.setTransform(206.6586,47.8476,1.5838,1.5838,0,0,180);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#282521").s().p("AAaAxQgagGgXgQQgVgOgJghIgEgfIACABIAEAcQAJAeAVARQAUARAgAGQAQADAMAAIgLABQgJAAgNgDg");
	this.shape_147.setTransform(198.8674,57.3631,1.5838,1.5838,0,0,180);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CBCBCB").s().p("AgJAIIAAgBQAIADAHgKQAEgFgCgEIACAAQACAFgGAHQgEAFgFACIgGAAIAAgCg");
	this.shape_148.setTransform(188.4435,64.4802,1.5838,1.5838,0,0,180);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0).s().p("AgMAMQgDgDACgGQACgEAFgFQAGgFAEgCQAFAAAEACQADADgCAFQgCAEgGAFQgFAGgFABIgDABQgEAAgBgCgAABgIQgDABgDADQgHAHADADQACACADgBQAEgBACgDQAIgHgEgDQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCABg");
	this.shape_149.setTransform(188.5333,64.3139,1.5838,1.5838,0,0,180);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#282521").s().p("AAYBNQgogFgUgjQgVgkgDgqIABgkIACAAIgBAfQADAoATAmQASAnAoAFQAVADARgGIABACQgLADgMAAIgOgBg");
	this.shape_150.setTransform(180.456,78.4881,1.5838,1.5838,0,0,180);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D14F50").s().p("AADADQgBgDgEgFIgFgGIAAgBIAPANQgBAHgEAFQACgGgCgEg");
	this.shape_151.setTransform(185.4449,61.3523,1.5838,1.5838,0,0,180);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#AF4340").s().p("AABASQgBgBgGgHIgIgJIgBgEQALgJAAgEIAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAIAOAPQADABgBADQgBAJgGAEQgEACgDAAIgBAAg");
	this.shape_152.setTransform(186.3886,61.6247,1.5838,1.5838,0,0,180);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D14F50").s().p("AAEACQgBgCgEgEIgGgEIgBAAIABgCIAQALQAAAGgEAEQABgFgCgEg");
	this.shape_153.setTransform(204.0146,44.9602,1.5838,1.5838,0,0,180);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#AF4340").s().p("AACAPIgOgJIgDgGQALgIgBgFIAAgBIAEABIAOAJQADACgBADQgBAHgFAEQgDADgDAAIgBAAg");
	this.shape_154.setTransform(204.88,45.4806,1.5838,1.5838,0,0,180);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D14F50").s().p("AADABIgEgEIgEgCIAAgBIALAGQAAAEgCADQABgDgCgDg");
	this.shape_155.setTransform(238.8892,23.7377,1.5838,1.5838,0,0,180);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#AF4340").s().p("AgGAGIgDgDQgBgFAEgEIADgDIACAAIAJAFIACADQAAAFgCADQAAABgBABQAAAAgBABQAAAAAAAAQgBAAAAAAIgLgEg");
	this.shape_156.setTransform(239.4564,24.0743,1.5838,1.5838,0,0,180);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D14F50").s().p("AAEABQgBgBgEgDIgFgDIAAgBIAAgBIANAIQAAAFgCAEQABgEgCgEg");
	this.shape_157.setTransform(220.598,34.151,1.5838,1.5838,0,0,180);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AF4340").s().p("AgHAFIgEgEIAAgBQAHgIAAgEIADAAIALAGIACADQAAAGgDAGQgDAEgCAAIgLgIg");
	this.shape_158.setTransform(221.2381,34.7449,1.5838,1.5838,0,0,180);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#938C8A","#565A5C"],[0.02,1],20.9,0,-20.8,0).s().p("AC8CYQgVgggqgsQhNhRiHhYQhEgsg0gbQgBgEAAgDIABgDQAbAIBWA5QBXA6BTBCQAzAoAuA+QAXAfANAXIgIAEQgCgHgLgQg");
	this.shape_159.setTransform(207.0766,50.7806,1.5838,1.5838,0,0,180);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#938C8A").s().p("ADpEYIAAAAQgGgsgTg8Qgmh3hGhPQhEhOiThfQhJgvg7gjQAAgEADABQBWAoBhBBQDACDA0B/QAmBfARA7QAJAeABAKQgGAEgFAAIgEgBg");
	this.shape_160.setTransform(200.9659,67.5705,1.5838,1.5838,0,0,180);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#808B91").s().p("AAAAOIgGgfIACACQADABACAAIAGAgQgEgBgDgDg");
	this.shape_161.setTransform(163.6681,115.3193,1.5838,1.5838,0,0,180);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#25292B").s().p("AgNACQgBgCAEgCQAEgDAGgBQAMgBACAGQABABgEADQgEADgGAAIgFABQgIAAgBgFg");
	this.shape_162.setTransform(162.797,111.6653,1.5838,1.5838,0,0,180);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#484E52").s().p("AgEAVQgFgBgBgDIgGgiQAQAEALgIIAFAhQABADgEADQgDADgFABIgDAAIgGgBg");
	this.shape_163.setTransform(162.3565,114.854,1.5838,1.5838,0,0,180);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#282521").s().p("AgHAOQgEgEgBgHQgBgGADgGQACgGAFgBIAGgCIABADQAHAEACALQAAAEgBAFIACAHIgLACIAAAAIgCAAIgBABQgDAAgEgFg");
	this.shape_164.setTransform(171.3295,88.5971,1.5838,1.5838,0,0,180);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#F6C55C","#D0924A"],[0,1],-2.1,0.1,0,1).s().p("AgLAXQgIgHgCgNQgCgMAGgJQAFgKAJAAQAIgCAIAIQAHAIACAMQACALgFAKQgFAJgKACIgDAAQgGAAgGgHg");
	this.shape_165.setTransform(171.4038,88.8307,1.5838,1.5838,0,0,180);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFDBA1").s().p("AgLAXQgIgHgCgNQgCgLAGgKQAFgJAJgCQAIgBAIAIQAHAIACAMQACALgGAKQgFAKgJABIgDAAQgGAAgGgHg");
	this.shape_166.setTransform(172.062,88.9594,1.5838,1.5838,0,0,180);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B86D66").s().p("AAIALQgBAAAAgFIACgGIAAAJQABABAHADIABgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIgBAJQgIgCgCgCgAgGAJQgCgBAAgGIABgEIABAIQAAACAGABIAAgDIAAAFQgFgBgBgBgAgSgHIAAgCIAFAEIAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAAAMQgEgCgCgDg");
	this.shape_167.setTransform(181.4063,89.9393,1.5838,1.5838,0,0,180);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B86D66").s().p("AAEAPQACgMACgDQACgFAKgGIAKgEQgPAIgEAFQgCACgCAMIgBAMIgEAEIACgNgAgHgFQADgGAIgGIAJgFIgJAHQgIAGgCAFQgDAGgBAUQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgCABQAFgXAEgHgAgdALQAAgSADgGQACgEAHgFIAHgEIgIAGQgHAIgBAFQgCAGACANg");
	this.shape_168.setTransform(178.7195,88.0388,1.5838,1.5838,0,0,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F9B49E").s().p("AAKAWQgFgBgBgEIAAgEQgGAFgGgBQgDgBgBgCIAAgDQgEACgHABQgEABgDgEIgDgDQgCABgDgBQgEgCAAgFQAAgEAKgIQAIgIAFgBQADgBADACIADADIAGgCQAEgCACACQADAEAIAAQAEAAAGAEQAFAFADgBQAGAAAFALQABADgBACQgCADgDAAIgMAFQgJAEgEAAIgCAAg");
	this.shape_169.setTransform(177.7042,85.4965,1.5838,1.5838,0,0,180);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#B86D66","#F9B49E"],[0,1],3.1,0,-3,0).s().p("AAOAUIgBgEQgJAHgDgCQgCgBgBgEIgBgDQgFAEgFgBQgFgBgBgGIAAgGQgCACgFgFQgEgCABgLIABgKIAnAIQAJABALAKQgBAbgKABIgBAAQgDAAgCgEg");
	this.shape_170.setTransform(179.7879,89.4286,1.5838,1.5838,0,0,180);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B86D66").s().p("AACAZIgEgEQgDgDgGAAIgUgBQgEAAAEgHQAEgIAJAAQAIAAAEgEIAHgKQAFgEALgEIANgEQAEAAAAASIgHAHQgIAJgDAEQgCAFgFAEQgDACgCAAIgCAAg");
	this.shape_171.setTransform(175.7945,91.0271,1.5838,1.5838,0,0,180);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#101518").s().p("AgJADIgDgTQAAgFAEgEIAHABQAHAEAEAPQAEARgBAHQAAAFgGACIgDAAQgIAAgFgXg");
	this.shape_172.setTransform(161.1196,97.7717,1.5838,1.5838,0,0,180);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B86D66").s().p("AgCAGIgLgCIAGgEQAHgEAGgBQAHAAABAFQAAAEgDABIgGABIgHAAg");
	this.shape_173.setTransform(169.721,94.5207,1.5838,1.5838,0,0,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#101518").s().p("AAKAHIgigHQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgBIAAAAIAmAGQAHgBACgDIADgIQAAAIgCADQgEAEgFAAIgFgBg");
	this.shape_174.setTransform(147.6423,97.5471,1.5838,1.5838,0,0,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#34465E","#101518"],[0,1],-1,0.5,-0.9,-4.1).s().p("AhEADQgBgHgGgBQgFAAACgEQABgEAYgBQAXAAABgGQACgGAKAAQARgBAIgDQAKgEAJgGQAGgFAIgBQANgBAYAYQACACgBAKQgBALgGAKQgGAJgNABQgUABgLAEIgWAJQgEACgJAAQgHABgMAFQgMAFgFAAIAAAAQgMAAgHgsg");
	this.shape_175.setTransform(151.7968,94.3711,1.5838,1.5838,0,0,180);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#34465E","#101518"],[0,1],-1.5,2.5,2,0.6).s().p("AgcBRQgIgCgIgQQgIgRAEgMIASglQAOgfAEgPQAJgmArAGIAIAPQAGATgHATIgOAgQgKAWgBALQgCANgLALIgQAPQgHAGgDABIgCAAIgJgCg");
	this.shape_176.setTransform(138.3814,81.8052,1.5838,1.5838,0,0,180);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#EBD165","#C8995C"],[0,1],-6.9,-0.7,7,1.5).s().p("AANALIgfgEQgTgBgUACIgPADQAFgEAXgKIABAAIAKgEQAOgEAYAAQAoAAAcAJQgHADgPAFIgXAGIgDAAIgMgBg");
	this.shape_177.setTransform(153.6507,44.5346,1.5838,1.5838,0,0,180);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFF8E7").s().p("AASAMQgSgEgVgBQgXgCgMADIgPAEQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgCAOgHIAPgHQAjgIAtAEQAXACAQAEQgbARgVAAIgJgBg");
	this.shape_178.setTransform(153.498,44.9512,1.5838,1.5838,0,0,180);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0A0D0D").s().p("AAEAaIgHgBQABgHgCgSQgBgKgHgJIgHgIQAcAKAIAXQAEALgCAKIgDABIgMgCg");
	this.shape_179.setTransform(141.9176,39.9813,1.5838,1.5838,0,0,180);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#34465E","#101518"],[0,1],-1.4,0,4.7,0.1).s().p("Ag8ABQAQgdAfgBQAqgCAWARQAUAPgBAcQhOgBg+ADg");
	this.shape_180.setTransform(150.0834,39.5658,1.5838,1.5838,0,0,180);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#817B87").s().p("AgEAfQAEgJAAgPQAAgJgCgHIgBgHQACgHAAgHIACAGQADAIABAMQACAVgEAKQgDABgEADg");
	this.shape_181.setTransform(139.6383,44.7227,1.5838,1.5838,0,0,180);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5C5654").s().p("AgeAAIgNABIgGADIAAgCIAAgFIACADIAAgDIABACIADgCQAEgCAJABQAPABAEAJQgHgGgMAAgAAWAAQgMAAgFADIgDADQgCgDAEgDQAFgDAKgCQARgCAKAGQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAAABIABAAIgGAGQgFgHgRABg");
	this.shape_182.setTransform(151.3542,47.2171,1.5838,1.5838,0,0,180);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B86D66").s().p("AgBADIADgCIgCADIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAAAgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQABABAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_183.setTransform(159.2448,51.3003,1.5838,1.5838,0,0,180);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.4,0,1.4,0).s().p("AgFAFQgHgCgBgEIAEACQAFACAFAAQAKgBADgGQgBAGgHACIgGABIgFAAg");
	this.shape_184.setTransform(156.2243,52.3952,1.5838,1.5838,0,0,180);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B86D66").s().p("AACADQgDAAgBgCIADAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAIgCABIgCgBgAgFAAIAFgBQADgCABABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAIgCAAg");
	this.shape_185.setTransform(144.742,51.9552,1.5838,1.5838,0,0,180);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.4,-0.2,1.4,0.2).s().p("AgGAEQgHgEAAgFIADAEQAFADAFAAQAKABAEgHQgCAHgHACIgEABQgDAAgEgCg");
	this.shape_186.setTransform(148.1471,52.6811,1.5838,1.5838,0,0,180);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgDAAQAAgCADgBQAEABAAACQAAADgEABQgDgBAAgDg");
	this.shape_187.setTransform(156.3035,51.5329,1.5838,1.5838,0,0,180);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1B2228").s().p("AAAgCQgGAAgEACIgDADQAAgCAEgCQAFgEAFABQAKABADAHIgCABQgDgIgJABg");
	this.shape_188.setTransform(156.2639,50.6173,1.5838,1.5838,0,0,180);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(156.55,51.45,1.5838,1.5838,0,0,180,1.3,1.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-1.3,0,1.4,0).s().p("AAGACQgJgDgKAGIAAAAIACgFQADgFAHgBQAGgBAFAGQADADABAFQgDgDgFgCg");
	this.shape_189.setTransform(156.1847,49.7786,1.5838,1.5838,0,0,180);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D8DDDC").s().p("AgJAGQgEgDACgEIACgDQADgEAGAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	this.shape_190.setTransform(156.2319,51.2966,1.5838,1.5838,0,0,180);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADABQAEgBABADQgBADgEAAQgDAAAAgDg");
	this.shape_191.setTransform(148.5034,51.4537,1.5838,1.5838,0,0,180);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1B2228").s().p("AAMAFQgDgIgJABQgGAAgEACIgDADQAAgCAEgCQAFgEAFABQAKABADAIg");
	this.shape_192.setTransform(148.2263,50.6173,1.5838,1.5838,0,0,180);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.setTransform(148.65,51.45,1.5838,1.5838,0,0,180,1.4,1.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-1.3,0,1.4,0).s().p("AAGACQgJgDgKAGIACgFQADgFAHgBQAGgBAFAGQAEADAAAFQgDgDgFgCg");
	this.shape_193.setTransform(148.2263,49.7786,1.5838,1.5838,0,0,180);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D8DDDC").s().p("AgJAGQgEgDACgEIACgDQAEgEAFAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	this.shape_194.setTransform(148.2338,51.2966,1.5838,1.5838,0,0,180);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],1.4,0,-1,-0.1).s().p("AgOAAQAAgWACAAIACACQADACAHABQAIABAHgFQgBALgHAGQgFADgEAMQgFAMgCAAIgBAAQgEAAAAgXg");
	this.shape_195.setTransform(156.5807,56.1662,1.5838,1.5838,0,0,180);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#B86D66","#F9B49E"],[0,1],-2.8,0,1,0.1).s().p("AgvAaIgJgDIgEgnIAIgFQANgEAWgBQAigBAsAJQAAALgJAKQAEAGgDANQgCACgPgCQgHgBgLACQgOADgQABIgNAAQgNAAgJgBg");
	this.shape_196.setTransform(150.7999,47.2352,1.5838,1.5838,0,0,180);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-2.5,0,0.3,0.4).s().p("AgEALQgSgRgEgQIAGAEQAIADAIgCQALgEAAgEIAUACQgDARgJADQgGACAAANQAAAIACAGQgIgGgHgJg");
	this.shape_197.setTransform(146.8009,56.5614,1.5838,1.5838,0,0,180);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B8B5B3").s().p("AgMA9QAEgfAAgLQABgHgDgKIgCgHQAIgCAEgTIABgYIAAgKIAFAGQAFAIABAQQACAZgEAIQgDABgDACQgFAGgCAMIgFAlg");
	this.shape_198.setTransform(140.9449,48.5633,1.5838,1.5838,0,0,180);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B86D66").s().p("AgQACQgKgCABgCIADACIAJABQASACAMgCQAGgBADgCQgCADgIABIgRABIgPgBg");
	this.shape_199.setTransform(152.351,59.2736,1.5838,1.5838,0,0,180);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#B86D66","#F9B49E"],[0,1],-0.7,4.8,2.3,-1.3).s().p("AAIAIIgLgMQgDgDgEAAIgEAAIAAgHIgEgNQAKAEAEAQQAMAKAGAIQAHAJgCAIQgDgMgIgIg");
	this.shape_200.setTransform(149.6165,57.3532,1.5838,1.5838,0,0,180);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-0.5,0,0.6,0).s().p("AABALQgFgBgBgCIACgJQACgJABgBQADAAABAJIACAKQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_201.setTransform(153.136,54.4882,1.5838,1.5838,0,0,180);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgPACQgEgBgBgCIAAgCIAWACQAMAAAHgCIgBADQAAABgMACIgIABQgIAAgHgCg");
	this.shape_202.setTransform(152.3441,59.8526,1.5838,1.5838,0,0,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DF8080").s().p("AgQAAIAAAAIACgCQAEgCAKgBQANgBAFAGQgDAEgJABIgFABQgMAAgFgGg");
	this.shape_203.setTransform(152.4629,61.2805,1.5838,1.5838,0,0,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#512A2A").s().p("AgJAHQgFAAgFgIIgDgHQAJACAXABQAFgBAIgCQgDANgIACQgEACgFAAIgMgCg");
	this.shape_204.setTransform(152.4629,60.6396,1.5838,1.5838,0,0,180);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.5,0,1.5,0).s().p("AgGACIgFgCIgDgBIAAABQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAABAAQADgBADACIADACIADAAIAFAAQADgCACABQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgHAAgDACIgEABQgDAAgDgCg");
	this.shape_205.setTransform(152.8935,56.6465,1.5838,1.5838,0,0,180);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#B86D66","#F9B49E"],[0,1],0.2,2.1,-0.4,-0.7).s().p("AgHANQABgHADgGIAHgMIAEgFIAAAHIgBAAIgEAGIgGAKIgEAMIAAgFg");
	this.shape_206.setTransform(156.3035,58.1847,1.5838,1.5838,0,0,180);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F9B49E").s().p("AgYBeQgNgDgHgFQgGgEgEgKQgEgHgCgeIgFg9QgDggAbgVQAagTAdAFQAYAEAPAOQAIAHACAGIADAMQABAQgCARQgDAagMA5QgBAMgOAGIgXAGIgQAFIgHAAIgNgBg");
	this.shape_207.setTransform(149.8701,50.3088,1.5838,1.5838,0,0,180);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B8B5B3").s().p("AgEA+IgIg7QgDgWAMgWQAHgQAKgEIgKAPQgKATAAAMQgBAUADAWIACAjg");
	this.shape_208.setTransform(158.8075,47.6724,1.5838,1.5838,0,0,180);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B86D66").s().p("AA8AIIAAgOIADgFQADgFAEABQAGABABAEQABAEgCAEIgFAEQAFgGgBgEQgCgEgEACQgDABABAEQAAAGgBABQgEAEADADQAAABAEgEQgEALgDACIgBAAQgDAAACgLgAg9AQQgCgBgCgGIgCgFQAAABABAAQABABAAAAQAAAAABAAQAAAAAAAAQADgCgEgEQAAgBAAgHQAAgDgDgCQgEgBgCADQAAADABAFIADADQgCAAgCgFQgCgEABgDQAAgFAGgBQAGgBAEALIABAOQACALgDAAIgCgBg");
	this.shape_209.setTransform(150.0872,52.8476,1.5838,1.5838,0,0,180);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F9B49E").s().p("AA3AYQgDgBAEgUIADgTIAEgFQAEgFAGADQAGAEgBAOQgCALgGAJQgFAIgEACIgCABIgEgCgAg+AWQgFgEgEgJQgMgZALgHQAJgGAEANQAJAmgEACIgCABQgCAAgEgDg");
	this.shape_210.setTransform(150.0856,53.0903,1.5838,1.5838,0,0,180);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D0924A").s().p("AAOAAQAGgJgZgOIACgJIAKABQANABAIAFQAOAIgEAIQgCAFgFACQACgCAAgDQAAgHgKgFIAFAIQAEAKgJAGQgJAGgTAKIgSAIIgOAEQAsgZAHgIg");
	this.shape_211.setTransform(143.1254,63.9259,1.5838,1.5838,0,0,180);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#101518").s().p("AgFALIALggIACAAIgCALIgFAQQgDAJgFAHQAAgFACgGg");
	this.shape_212.setTransform(148.1471,83.8814,1.5838,1.5838,0,0,180);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#385169").s().p("AgIAMIAPgiIADABIgNAfQgDAGAAAHQgEgFACgGg");
	this.shape_213.setTransform(150.9102,83.4459,1.5838,1.5838,0,0,180);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#101518").s().p("AAJAGIgSgFIgPgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAmAIQAHAAACgDIAEgHQgBAHgCADQgEADgFAAIgFgBg");
	this.shape_214.setTransform(145.7813,80.2083,1.5838,1.5838,0,0,180);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B86D66").s().p("AgigDIgGgNIBRgHQgCAJgRAMQgLAHgQAKIgPAJQgHgLgHgQg");
	this.shape_215.setTransform(149.4933,66.3411,1.5838,1.5838,0,0,180);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D0924A").s().p("AAGAHQgDgHgDgDQgFgEgCABQgCABAEAFIAEAFQgTgGAFgKQABgFAEgBIADgBIAHAAQAGABACADQADAFAGAcQgHgFgEgHg");
	this.shape_216.setTransform(156.4114,65.5493,1.5838,1.5838,0,0,180);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F6C55C").s().p("AgxAVQgzgUAtgMIBWgbIAUACQAUAEAEAIQAFAMgFALQABABgBAEQgEAGgPAFIhQAYQgMgNgNgFg");
	this.shape_217.setTransform(148.7485,64.0447,1.5838,1.5838,0,0,180);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#161B1C").s().p("AACAAQADgFAHgIQAHgJABABIAAAAIAHAEQAHAFABAIQACASgbACIgsAGQAigOACgIg");
	this.shape_218.setTransform(139.9006,64.3218,1.5838,1.5838,0,0,180);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#34465E","#101518"],[0,1],-10,0,10.1,0).s().p("AgqAhQgRgBgFgHQgEgEgSgFQgPgEABgFQABgHALgHQAKgHAIgBICAgRIANABQANACADAFQACADAAAFQgBAEADACQAKAHAAAHIAAAJQgBAFgEACQgFACgmAEIhQAHIgHAAIgIAAg");
	this.shape_219.setTransform(147.9918,65.0147,1.5838,1.5838,0,0,180);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#99816E").s().p("AgYAeQgZgCgegHIgagFIAugVQAwgXAIgBQAFgBAaAGQAaAHAIAAQAQABAcgBIhAAqQgTAGgZAAIgWgBg");
	this.shape_220.setTransform(171.7057,105.2965,1.5838,1.5838,0,0,180);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F6C55C").s().p("AgXBtQAHg4ALg2QAFgjAKgnIAIghIAGgBIgJAkIgOBFQgHApgKBJg");
	this.shape_221.setTransform(155.5908,87.4449,1.5838,1.5838,0,0,180);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#101518").s().p("AAXBsIgUgDQALgXgBgNQgBgIgKgFQgGgDgRgDIgmgFIAGgYQABgGAIgEIAUgHQAbgJAGgYQADgIgIgJQgKgMgCgMQgDgPABgMIACgKQAFAWAMAOQAGAHAFACQAUACALAfQAKAagBAdQgCA3gKAUQgEAHgPAAIgGAAg");
	this.shape_222.setTransform(141.9629,89.6404,1.5838,1.5838,0,0,180);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#487773","#34465E","#101518"],[0,0.459,1],-7.9,1.3,3.9,-5.3).s().p("AAmCAQg0gEgogFQhMgKADgVIAEgtQAFgpAOgWQAagsAOgwQACgIAHgBQANgBAJgEQAWgJCBAOIAGAGQAGALgDAYQgCARABAgQAAAhgDAhQgIBegQACIgGAAQgPAAgogDg");
	this.shape_223.setTransform(152.1756,85.7319,1.5838,1.5838,0,0,180);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#679B94").s().p("AgxA0QA1hKAFgKQAIgQAGgDQACgBAMAAQAMAAABACQABADgEACIgLgBQgLAAgBADQgQAagWAbQgOASgRAZg");
	this.shape_224.setTransform(169.3934,74.6823,1.5838,1.5838,0,0,180);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#101518").s().p("AADBDQgFAAAIgkQgJAAgSgGIgRgFIAOgFQAQgFAEABQAHACgEgbIAFAIQAGAJABAIIAGgQQACgFAHgKQADgEgCgJQgCgJAFgOIAGgKIAAASQgBALAEASQgcBWgIAAIAAAAg");
	this.shape_225.setTransform(171.191,80.7537,1.5838,1.5838,0,0,180);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#101518").s().p("AgRAZQgPgHgEgPIgBgNQADgQAYgEQAVgDAPAHQATAIgMAkQgDALgPACIgHABQgLAAgOgHg");
	this.shape_226.setTransform(177.6729,90.763,1.5838,1.5838,0,0,180);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#34465E","#101518"],[0,1],-7.2,0,7.2,0).s().p("AgwBdQgGgBgGgJQgIgKgDgOQgCgKAOgLQARgOADgHQAEgIAjguQAiguACgHQACgIAQAAQAHAAAHABQAKAGgOAhIgaA2QgIAQgFAhQgGAigCAFQgGALgLADIgLABQgOAAgXgGg");
	this.shape_227.setTransform(172.0489,82.1048,1.5838,1.5838,0,0,180);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#600E10").s().p("AgQBCQgEgCAJiCIAZACIABAAIgDANQgCAOAFAGQAFAIgDAQQgDAOgGAHQgEAGABAYIADAXIgIAAQgMAAgEgBg");
	this.shape_228.setTransform(132.125,85.0771,1.5838,1.5838,0,0,180);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#C03B3A","#801517"],[0,1],0.1,-5.1,0,4.8).s().p("AgbBAIAJiCIAlAEIAFAEQAEAFAAAIQAAANgIBbQgCAIgIAAg");
	this.shape_229.setTransform(130.9632,85.0692,1.5838,1.5838,0,0,180);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111416").s().p("AgIBFIAKiKIAHABIgKCKg");
	this.shape_230.setTransform(132.7053,103.6389,1.5838,1.5838,0,0,180);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#171A1C").s().p("AgMgKIABgCIAYAUIAAAGg");
	this.shape_231.setTransform(117.9763,21.1245,1.5838,1.5838,0,0,180);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#9E6565").s().p("AAMAbQgDgEgDABQgDADgDABQgFADgKgDIgIgDIgCgGQgCgHABgCQABgDAZgcIAbgeIAAAnQgCAXgCAMQgEAUgEAJQACgSgFgHg");
	this.shape_232.setTransform(103.1205,33.8342,1.5838,1.5838,0,0,180);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E2ACA2").s().p("AgfA6IgbgCQAYgMgCgIIgFgYIAyhFIAJA+QACAWAUAIQAJAEAJgBQgTAIgaAIQgNAEgWAAIgJAAg");
	this.shape_233.setTransform(100.5944,34.085,1.5838,1.5838,0,0,180);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#AF6F3D").s().p("AgYAcQgXgFgIgGIgPgMIAWgIQAZgKAPAAQAMAAAGAHQAHAFACgBQAJgBAagbIgCANQgGANgQAFQgRAHAIAGQAGAGAPgBQARAAAMgFQgDADgGAEQgNAHgXACIgRABQgQAAgRgDg");
	this.shape_234.setTransform(94.2593,87.2337,1.5838,1.5838,0,0,180);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#AF6F3D").s().p("AgZCNQAJhpAChJQAAgegEgQQANgPAFgNQAGgNADgVIABARQABATgCALQgJAeAJATQAFANACAiQACAlgFAfQgEAbAIAcQAFAOAFAJQgNACgKAAQgRAAgMgFg");
	this.shape_235.setTransform(108.6716,71.3635,1.5838,1.5838,0,0,180);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#FEC97C","#F4AC5A"],[0,1],9.1,1.6,-4,-4).s().p("AhiCnQgCgCAGgeQAHgsgBguQgChNgXhlQgBgGADgEQADgFAGgBQAIAAALgDIAzgIQA2gIAXgBQAPgBAFADQAGAEADAQQABAKADBPQADBMADAQQAHAiAWA/QADAKgUAJQgVAJgoAFQgkAGgwAAQgsAAgFgDg");
	this.shape_236.setTransform(96.6273,67.155,1.5838,1.5838,0,0,180);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],1.2,-0.1,0.2,-1.5).s().p("AglAAQgFgIADgFQACgEAMgJQAOgKALAFIAOATQAHAJAVAPIgWAVQgygXgHgKg");
	this.shape_237.setTransform(77.9564,69.5173,1.5838,1.5838,0,0,180);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#9E6565","#E2ACA2"],[0,1],-1.3,-0.3,1.2,0.5).s().p("AgIAhQgEgCgHgVIgGgUIAIgLQALgMAQAAIAPAqQACAEgDAFQgCAFgFAEQgFADgHACIgIACIgFgBg");
	this.shape_238.setTransform(81.8751,63.66,1.5838,1.5838,0,0,180);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#171A1C").s().p("AgSANQgCgEADgFIAEgEIAAAAIAGgHQAJgJASABQABAMgLAFIgTAMIgGACQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_239.setTransform(81.852,60.7525,1.5838,1.5838,0,0,180);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#39322A").s().p("AAzAPQgNgGgwAGQgUADgUgDIgQgCIgBAAIgFgXQCIgTAGAIQAGAIgEAmg");
	this.shape_240.setTransform(100.7053,94.4237,1.5838,1.5838,0,0,180);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#39322A").s().p("AABBBIgQiBIAFAEIAEAiIAIgJQAGgGAFgTIADAAIgHATQgGALgJAHIAKBYg");
	this.shape_241.setTransform(106.8107,104.6288,1.5838,1.5838,0,0,180);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#171A1C").s().p("AgPAKIACgRIAEgFQAEgFADgBIAIgGIgFATQgBAGAQAGQACAAgeASIgBAAQgDAAABgPg");
	this.shape_242.setTransform(83.2762,55.3587,1.5838,1.5838,0,0,180);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#6B665F","#C1986A"],[0,1],-7.2,0,7.3,0).s().p("AAWBlQgcgCgZgHQgIgCAFgJQAGgKgIgDQgIgDABgFQACgHgEgEQgFgFAAgJQAAgRgDgOIgThZIBIgOQBGgIACAZQABAcgCBCQgCA8gDAUQgBAKgZAAIgSgBg");
	this.shape_243.setTransform(100.827,105.6954,1.5838,1.5838,0,0,180);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#39322A").s().p("AAABlQhFhxgMgeQgHgVASgOQAPgLAogMQgGAQgTALQgMAGAMAOQAGAHAIAFQA3gBgMAFIgUALQgOAFgNgCQgOgDAPASQAJALAeAgQAUAUAdAJQAOADALAAQgkAZgUAGQgMACgKABg");
	this.shape_244.setTransform(79.8237,105.8562,1.5838,1.5838,0,0,180);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-1.6,-0.4,2,0).s().p("AgYBGQgFAAAEhGIAFhFIAKAEQAKAGACAIQACAGAGAZQAFAYAEAJIAHAQQADAEgDADQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQABACgEAEQgGAHgSAJQgRAIgGAAIgBAAg");
	this.shape_245.setTransform(83.0759,51.7329,1.5838,1.5838,0,0,180);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#58666E").s().p("ACVAyQAAgLgFgMQgKgagYgLQgYgMhUgMQhAgJglgCQgSgBgSADIgPADIABgCQAEgDAUgDQApgEBdAPQAwAJAWAFQAiAIAPAKQAOAIAGAYQADAMAAALg");
	this.shape_246.setTransform(47.8944,85.4642,1.5838,1.5838,0,0,180);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#6B665F","#C1986A"],[0,1],-10.9,0,11,0).s().p("Ahpg0QgOgPArgUQArgVAZAJIBjBuQAMAPgCADIAFABQAFAAgCAFQgBAHgLAOQgMAOgIAFQgHAEgkAMIgiALQhXiGgSgUg");
	this.shape_247.setTransform(78.1372,104.4315,1.5838,1.5838,0,0,180);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#222528").s().p("ACoCzQABg9ANheQANhYgBgPQgCgjghgQQgpgThigMQhkgLgMASQgUAhhTC9IgUgCQAXg6Abg6QA1h2ASgGQAWgHBKAGQBNAGAzAOQA3APAQALQASAMgDAWIgRB1QgOBpgBA0g");
	this.shape_248.setTransform(56.8079,105.439,1.5838,1.5838,0,0,180);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#58666E").s().p("AgyAFQgBAAAAAAQAAgBABAAQAAgBABAAQABgBABgBQAHgDAEgBQAHgCANACQASACAyACIAAADQg+gEgNAAQgIAAgJACIgHADIgCAAIgBAAg");
	this.shape_249.setTransform(120.1045,75.1311,1.5838,1.5838,0,0,180);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#9E6565").s().p("AgvgEIA0gfIARATQASAUADAHQAEALABAHIhSAHg");
	this.shape_250.setTransform(63.4154,116.903,1.5838,1.5838,0,0,180);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#222528").s().p("AgaB0IBhjJQAHgQgDgFQgDgGgRABQgQABhegHQgSgBgPAGIgLAHIAEgRQARgJAlAEQA6AGAYgBQAsgBAMAIQAFADgDAEQgVAfgxBqIgtBkg");
	this.shape_251.setTransform(113.3787,94.4151,1.5838,1.5838,0,0,180);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("ABiCbIgTkiQAdAFAhAKIAVETgAiRCFIgQiOIAbhCQAghDAegMIApEfgAAKB+IgfkUQAhgEAcALIAAENg");
	this.shape_252.setTransform(57.2783,102.6491,1.5838,1.5838,0,0,180);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#5D686E").s().p("AgWAjIAphHIAEABIgoBIg");
	this.shape_253.setTransform(41.8761,116.9822,1.5838,1.5838,0,0,180);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgVB1IgLixIAGghQAOgfAsAKIgKDng");
	this.shape_254.setTransform(125.222,93.9259,1.5838,1.5838,0,0,180);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#222528").s().p("Ah8AnIAshgIDFAmIAIBNg");
	this.shape_255.setTransform(56.6843,114.4878,1.5838,1.5838,0,0,180);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#222528").s().p("AgmAmQgQgQAAgWQAAgWAQgPQAQgQAWAAQAXAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgXAAQgWAAgQgQgAghgfQgNANAAASQAAATAOAOQANANATAAQATAAAOgNQAOgOAAgTQAAgMgIgNQgHgLgNgFQgIABgFARIgCARIgEgBQADgLAAgMQAAgJgEgGQgTABgNANg");
	this.shape_256.setTransform(52.4082,109.8948,1.5838,1.5838,0,0,180);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3B3042").s().p("AgmAlIAOhEIAFgHQAHgHAKABQAPACAYAHIACAPQAAAXgMAqg");
	this.shape_257.setTransform(-39.411,137.8385,1.5838,1.5838,0,0,180);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#161319").s().p("Ai0ABIAehTIAJgIQALgIAPACIEhA+IAEADQAEAGgBAMQgCATgUBbg");
	this.shape_258.setTransform(-16.6601,135.9937,1.5838,1.5838,0,0,180);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#00263A","#3C7792"],[0,0.969],-0.6,-0.4,0.4,0.3).s().p("AgcAMQAKgHALgFIAqgRQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgPAGQgSAIgJAFQgRAKAAADIgLACIAHgGg");
	this.shape_259.setTransform(241.9855,94.5719,1.5838,1.5838,0,0,180);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#060707").s().p("ABVAAQAAgFAFAAQAFAAAAAFQAAAGgFAAQgFAAAAgGgAheAAQAAgEAFAAQAFAAAAAEQAAAGgFAAQgFAAAAgGg");
	this.shape_260.setTransform(249.0333,108.3111,1.5838,1.5838,0,0,180);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#00263A","#3C7792","#141116"],[0,0.969,1],5.6,0,-5.5,0).s().p("AgRABQAqgTAfgCIgCAKQgGAKgRAFQgRAGgRACIgaADIgaAFQAQgKAWgKg");
	this.shape_261.setTransform(258.8131,100.9069,1.5838,1.5838,0,0,180);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#00263A","#3C7792","#141116"],[0,0.969,1],13.2,0,-13.1,0).s().p("AB9AdQABgLgDgMQgGgXgTgGQhXgDgyAGQgzAHgpAOQAAgCAGgGQAWgLA4gEQCCgLAWAKQAOAGAGALQAFAKACAZg");
	this.shape_262.setTransform(249.5084,106.8253,1.5838,1.5838,0,0,180);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#00263A","#141116"],[0,1],14,0,-14,0).s().p("Ah4AuQgFgCgFgEQgLgJACgNQACgOA3gWQA1gWAYgBQAOAAAqgDQAogBAWALQAWAKAEAgQADAQgDAOQgBAHgFABg");
	this.shape_263.setTransform(248.1573,104.1915,1.5838,1.5838,0,0,180);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#00263A","#141116"],[0,1],-0.6,-0.5,0.6,0.4).s().p("AglAPQAFgHAXgLQAQgIAQgFQAJgEADAAQACAAACAEQADAHgLAAQgIgBgEAHQgCADgIADQgJAFAAAKQgUADgJAAQgNAAAFgGg");
	this.shape_264.setTransform(241.7353,94.8452,1.5838,1.5838,0,0,180);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#00263A","#141116"],[0,1],2.5,-5.9,1.2,0.8).s().p("ABTBGQgWgcgxgFQhHgHgSgIQgdgMAFgkQAFgiAdgVIAcgOIAMADIgRAGQgTAJgOAUQgTAcAIAYQAIAbAsgCQAwgCAtAXQAuAXAAAbIgJAFQAAgMgLgOg");
	this.shape_265.setTransform(255.4654,95.2054,1.5838,1.5838,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.instance_3},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.instance_2},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_1},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.instance},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-54.7,8,326.59999999999997,215.4), null);


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
	this.shape_10.setTransform(-81.2739,69.953,0.1107,0.1107);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ABA08B").s().p("AgxAVQgrhSgoiGQAmAnBHBUQBDBPAtAsQANANAXAMQAOAPgKAoQgEALgEAYQgGAVgTAJQhUg5g9h2g");
	this.shape_11.setTransform(-79.1004,68.7309,0.1107,0.1107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#988C79").s().p("AAaCRQhhgGgvAEQgEgOgTgxQgOgngHgdQgHg4AdgoQAagkAxgPQAvgOAyAJQA0AKAlAhQAHAvANBBQAPBNAJAdQgxAYhRAAIgJAAg");
	this.shape_12.setTransform(-82.8792,65.7036,0.1107,0.1107);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2A791").s().p("AgrDZQhqhlhFihQgRgogOg8IgYhgQAPgwB0gCQBsgCAsAeQAUA+AzBfQA0BfAqAyQARAVAhAaQAgAYAJAMQAdAohNBNQg0A1g8AAQhGAAhPhLg");
	this.shape_13.setTransform(-81.1677,69.9666,0.1107,0.1107);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3935").s().p("AisFmQgPhEgDgvQgQj2A0jRQBMk1DHA8QBWAagPA/QgFASgSAjQgSAjgEAPQhCEIA4FwIgYASQhhghg1AVQgwATg9BUIgahyg");
	this.shape_14.setTransform(-83.0557,60.6054,0.1107,0.1107);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3733").s().p("AhwETQg/jWgGjcQgHjhA2jVQAhgdBKCDQAqBMAjBUQBODAAmEXQAqE9g7CWIAAAAQiqh3hbjRg");
	this.shape_15.setTransform(-79.3212,63.5048,0.1107,0.1107);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3733").s().p("AggBHQgTgxgGhWQgFghABgTQABgkAaABQAVAAAeCKQAiCVAMARQhBgFgehNg");
	this.shape_16.setTransform(-22.7684,54.4682,0.1107,0.1107);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7E1CE").s().p("AAACuQhCgBgohOQgcg3AFhaQAHhnA5gVQAkBKA2BZQBFBvAkAfQhSAsgvAAIgBgBg");
	this.shape_17.setTransform(-25.208,67.2767,0.1107,0.1107);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#877C6B").s().p("AhmABQgYhHgPg8IDZAAQAMAuA2CVIjDBCIgxiCg");
	this.shape_18.setTransform(-28.4798,62.4444,0.1107,0.1107);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B4A892").s().p("AhWCeQhziohej7QgKgWAYgXQAVgUAogNQAngMAhACQAlACAMAUQAOAmAbA9QAZA3AVArQhOFqDdhQIA1AXQAMAKAhANQAmAPAMAHQAwAehCA5QgyArg2AAQhxAAiCjAg");
	this.shape_19.setTransform(-25.8032,66.7965,0.1107,0.1107);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A99D88").s().p("AiSA1Qhijvgok6QAGABATgCQAQgBADACQABABAFAdQAFAeAKALQBFBVAWBOIATBNQAOA1ATAyQBrEdB5g4QAhgPAghGQAbg7AnACQAIBLgfDJQgiDfgpACQjNiKh+k3g");
	this.shape_20.setTransform(-24.4825,63.3984,0.1107,0.1107);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D3833").s().p("AgOLpQgogBgfgMQghgOgHgXQhLk1gOlfQgRmwBljTQA+iBBtgGQBugGBCB8Qi8DFgNGxQgKFLBWFnQgKAyhcAAIgEAAg");
	this.shape_21.setTransform(-28.6539,53.3047,0.1107,0.1107);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C3733").s().p("AAUKyQguhVgjhnQgMglgchfQgehqgCgSQgCgQAGgbIAKgpQAFgtg4gIIg3BXQgLBUghhUQgok7ARjNQAYksCNi3QAdAABnC6QBOCLAoBZQACA9gMAHQgJAFgXgbQgegmgRgSQgegggXgCQhvgKgdDVQgIA8gFBwQgEBkgFAbICNjEIB3hXQACBsACAbQAGBjARAXQAGAIAoAJQArAKAPALQAoAdANCtQAPDDATAoQAHAwgngTQgmgTgMgmQgLgmAFgrQAFgoATgmQghgFgcAgQgnAqgKAFQgHAEgSgIQgRgHgBADQgTAfBZBHIBCAzQAhAaADAKQALAggqBcQgpBcgbAIQgHACgGAAQg1AAhDh2g");
	this.shape_22.setTransform(-24.6461,55.6834,0.1107,0.1107);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F0E0D").s().p("AAOM1QiIhGiEk0Qh0kMgTjBQgJhZADh3QADiTAXh7QA9lOCsgWQDOgbCqGOQA/CTAsCxQAmCYAIBiQAHBmgHB+QgJCmgiB5QhDD3iUAAQg3AAhCgig");
	this.shape_23.setTransform(-81.3008,64.204,0.1107,0.1107);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D0C0B").s().p("AA3R0QiQhkiTlAQh2j/g7jyQhEkXgDldQgDmQBgjYQBJikB0gFQBkgFBxBuQBmBjBKCUQBJCTADBrIgngIIAHALIAFALQAHgOAUAAQBvD1A/FbQBAFegUEMQgSD7hUClQhMCWhtAAQhAAAhLg0gAiBAEQA1CDAGAEQAHAEgqh6IATgRQgSgNgBgTgAhvn1QgLCZAbEdQAJgQATgVQgSiBAPiZQATjDBCg6QBYhMBSBIQALAKAJALQhcighdiZQhwCugTEAg");
	this.shape_24.setTransform(-26.1899,57.8052,0.1107,0.1107);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A262A").s().p("AFtDJQgkgIhGgbQhJgcghgJIpNlRQBnAcB4A8QA9AeCVBWQCEBLBQAkQB4A3BrAWQAEAZgdAAQgKAAgkgIg");
	this.shape_25.setTransform(9.837,-4.3784,0.1107,0.1107);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1F29").s().p("AEGBUQiNgKiZgXQjLghhKglQg9gggLglQBZAOEjBHQDrA5CUAJQAAAZgyACIhGgGg");
	this.shape_26.setTransform(4.3961,-4.4863,0.1107,0.1107);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#332E2B").s().p("Ah9A4QgegeAogfQAjgdBDgOQBDgPArANQAzAPgMAvQgcAAh4AaQhVATgVAAQgFAAgCgBg");
	this.shape_27.setTransform(53.2861,35.4783,0.1107,0.1107);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8C7B64").s().p("ACID/QgmgRgPgPQgjgkAShxIgsCYQgTiBhGiHQgyhghkiMQBeguA+BRQALAOAnBAQAdAyAZAXQAPAOAxAcQAzAfARAOQA/AziBAYIBtDaIhSglg");
	this.shape_28.setTransform(-41.1746,28.0292,0.1107,0.1107);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36211A").s().p("AgIBLIgWhWQARgxAFgRQAHAdAdBMQAMAyghAAQgHAAgIgDg");
	this.shape_29.setTransform(-42.2759,-34.8393,0.1107,0.1107);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#351616").s().p("AgTgCQg2gwgLgkQA/ACBAA+QBEBBgrAtQgWgjhBg3g");
	this.shape_30.setTransform(-41.9269,-31.3483,0.1107,0.1107);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#913326").s().p("ABSBCIg+hQQhHhRh8AJQAEgPAPgLIAZgSQASgEAkgKQAggJAXABQCCBHAWBnIgHAHQgGAHAEAIQAHANAjAjQAaAhgaAcQgogigpg1g");
	this.shape_31.setTransform(-42.6082,-30.6265,0.1107,0.1107);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#71675A").s().p("AA4BaIghglQgngogggjQg7hDAJgIQAkgfBaBoQAiAnAWAlQAWAngJAIQgFAGgIAAQgMAAgQgPg");
	this.shape_32.setTransform(61.6932,26.5382,0.1107,0.1107);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A2724").s().p("AglCNQgzg+gqheQg5h8A7gLIAsBCIgKhCQALAAAWAMQAWAMAJAAQAEAAANgnQAPggAWAZQAMAPgWAnQgXApgfgHQgFAVAYAEQATADAPgHQALgFANgZIAZgxQAlg/A4AMQAKAKgTBkQgOBJgOAzQggB2gQAUQgNARgRAAQggAAgtg3g");
	this.shape_33.setTransform(17.5394,24.2278,0.1107,0.1107);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2D2A26").s().p("ABXFcQg0gUhLgvQhVg0gagjQgXgfhAisQhCiwAKgLQAVgaAQAbQAIAOAJAcQAUAgBECKQA4BzAgAoQAjAtASAGQAPAFgBgYQgDg7g2g6IAjAAQATgBAMgNQAmgpAhioQAjiwAMgRQAQgXA8AAIBYADQARAPhWDFQhhDcgDATQgHAnADBGQADBLgEAeIgEAeQgDAHgIAAQgHAAgLgFg");
	this.shape_34.setTransform(18.4246,25.953,0.1107,0.1107);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#554F46").s().p("AhLhVQACgOAZAAQAWAAANAIQAJAFAoBRQAqBTgCAWg");
	this.shape_35.setTransform(32.9191,21.9383,0.1107,0.1107);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#413D3B").s().p("AhHghQBGgRCPgNIjoB/QhvhCCCgfg");
	this.shape_36.setTransform(30.0175,21.5758,0.1107,0.1107);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#403B37").s().p("AiXA6QgPgwBvhBQAsgbAogNQAqgOAOAIQAHAEAhBEQAiBFgGAIQhkAmg/ANQggAGgaAAQhEAAgPgvg");
	this.shape_37.setTransform(31.1037,22.5118,0.1107,0.1107);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A19682").s().p("AgKNzQjKhziDmMQg2ihgciuQgbijADh9QAGjcBFi+QBfkECsgKQDtgOCqGxQA/CgAqDBQAkCjAGBzQAHB7gMCOQgQCzgqCAQhRDxidAAQhHAAhVgxg");
	this.shape_38.setTransform(-81.4061,64.135,0.1107,0.1107);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#756A5E").s().p("AgJAtQg7hngSgPQAHgDgCgpQgBgkAcAPQAeAPArBDQAwBKAUARQgCAUABAmQgEAhgbARQgKAAg2hig");
	this.shape_39.setTransform(-13.856,37.885,0.1107,0.1107);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4B453E").s().p("AhPgJQgLmeB8j9IAvBiQhPD+ADE6QADD9A7E+IghAyIgWBCQhTl2gIk4g");
	this.shape_40.setTransform(-31.1554,53.4996,0.1107,0.1107);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AB9F8B").s().p("AhaR9QiJiJhwkMQhXjTg4j4QgJg7AfgGIAyATQBVEVBCCZQBoDwCGCRQBpByBigiQBUgeBAiCQA5h0ATiSQASiRgehSQAajkg9kNQgoithwk3QAPgTABgZQABgSgIgdQgQhYhCh8QhGiFhUhbQhkhqhYgMQhogNhJB5Ig1AJQgnAjARhPQCGkPC/BZQCSBFCPD8QBjCvBOD6QBMD0AoELQBYJSh0F7QhEDeiDA3QglAQgnAAQhuAAh8h8g");
	this.shape_41.setTransform(-25.6729,57.8341,0.1107,0.1107);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#443D37").s().p("AhWhXICtCDIgaASQgZATgOAHg");
	this.shape_42.setTransform(-74.0477,48.4239,0.1107,0.1107);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#25170E").s().p("AgFArQgVgGgLgWQgKgTADgTQAEgTARgCQATgCAcAZQACAHAIAOQAKAPACAHQgHAHgKAHQgMAJgNAAQgEAAgFgCg");
	this.shape_43.setTransform(-2.0351,-57.6983,0.1107,0.1107);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#303630").s().p("ABCBOQgWgPg3g/Qgzg7gjgRQAkgdBDBIQAkAlA4BIQgCAEgFADQgDACgEAAQgHAAgLgHg");
	this.shape_44.setTransform(-3.58,-59.7461,0.1107,0.1107);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E211A").s().p("Ag5gGQiihsgfgbQBDAEBGAkQAsAYBLA2QBRA5AlAUQBDAmA8AGIiDAsQgxhAiAhUg");
	this.shape_45.setTransform(-8.415,-57.0922,0.1107,0.1107);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D231D").s().p("ACODaQg6iRg9hJQglgtiViBIgLgLIgLgLIAhgsIFSFdQgDAVACAsQACAtgCAVIgCABQgHAAgigXg");
	this.shape_46.setTransform(-23.6421,-59.87,0.1107,0.1107);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7E0E6").s().p("AgrDfIArnKQAlgFAGAMQACAFgCArQgEBDgPB0IgYC7QgEAegJAMQgEAGgGAAQgJAAgLgPg");
	this.shape_47.setTransform(-12.8804,-49.0451,0.1107,0.1107);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#76664E").s().p("ACnBJQhAgPgagBQjMgFhbAGIAAAAQAGgNAlgJIBMgPQBngYgEhFQBDACBAAUQBYAcAAAvQAAAwgsAAIgIAAg");
	this.shape_48.setTransform(-43.1008,36.4202,0.1107,0.1107);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B2825").s().p("AlBDHQgpgBADgZQBIgeBng8QA8gjB7hMQDniNCCgdQgeBDAEA2QABASAZBlQgvgBg/APQhIAVgkAIQgnAKimAwQiCAmhGAMQgkAGgTAAIgDAAg");
	this.shape_49.setTransform(18.4154,-25.0408,0.1107,0.1107);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#171410").s().p("ABaBbQglgXgTgJQgmgSgzghQg4gmgdgTQACgCgCgQQgCgRADgHIAggCID5CjQgPAYgVAAQgIAAgIgDg");
	this.shape_50.setTransform(-42.9942,46.0765,0.1107,0.1107);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DACFB5").s().p("AhkC6IgegVQhPhyA/hgQAVgfAxgxQA7g6ARgWQAngNA+ApQA9AoANApQgwARggApQgWAdgaA4QgeBEgOAWQgcAwgnAYQgUgMgQgLg");
	this.shape_51.setTransform(-44.5577,47.8044,0.1107,0.1107);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B1817").s().p("AAHAiQgzgEgIgPQgEgZgLgWQAKABAXgCQAXgBAJACQA7AOAKAbQAJAZgyAAIgTAAg");
	this.shape_52.setTransform(-0.0417,50.7242,0.1107,0.1107);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7EABC5").s().p("AhMhLQALAIBDApQBBAoAIATQAGANgMAOQgNAMgCAFg");
	this.shape_53.setTransform(-64.2462,23.8867,0.1107,0.1107);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E7BA3").s().p("AETFDQmUhNjlgTQgMgBgOgHIgTgKQgPgEAEAuQhXgwhegsQgUgJghgHQgpgJgKgDQg2gSgKg7QALABAVAAIAhgBQAQgMhggkQg4gUg9gSICvAWQAEgDgPgbQgPgcAEgHQAEgEBxgxQBxgxAIgLQACgDgLgTQgLgSABAAQAzAABjgiQAugRCPg6QD8hnBFASQAlAKBjCRICDC/QAzA9DLCyQCnCVBGBxQi9gUmvhSg");
	this.shape_54.setTransform(7.659,-5.3599,0.1107,0.1107);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#181614").s().p("ABzCZQgagKgngqQgKgKg+hJQhkhzg7gKQgOhCBCAaQALAEAmAjIBLBFQBmBZAbgbQAYgXg7hBIgvgxQgYgagDgKQBcAnAtA/QA3BLgnBUQgMAYgIAJQgKALgMAAQgFAAgGgCg");
	this.shape_55.setTransform(-17.6459,34.1444,0.1107,0.1107);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1B1916").s().p("AADBiQgzgbgrgxQgtgzgFgrIDZBWQAGghgcgXQgjgVgQgNQgagTgGgIQgNgPAqACQApAOAnAtIA+BHQgCBNgqAUQgOAGgQAAQgcAAglgTg");
	this.shape_56.setTransform(-21.7103,35.4565,0.1107,0.1107);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1B1815").s().p("AgFAGIgLgQIAKgKIgDAEQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAIAKIAIAJQAKACgEgLIgEgKIgFgGIAQAMIAAADIgBANQgCAEgIAGQgGgFgGgKg");
	this.shape_57.setTransform(-18.6781,39.8145,0.9,0.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#474038").s().p("ABfCMQgggLgOgJQgNgHhVgoQg8gbgmgjQgMg8BEgwQABhAAfgYIDNExQAHAMgIAXQgJAbAAAEQgNgfgcgPg");
	this.shape_58.setTransform(-16.5726,41.5355,0.1107,0.1107);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#534C43").s().p("AEcEQQg0ghhTiAIgugWQg4g9hohKQiAhcguAJQgFABgFAMQgGAOgIAGQgcAXhdgiQgIgPgGgbQgHgbgBgSQANAGAnAlQAbAZAjgGQBhgnAEgEQAGgIgDgzQgDgsAZgDQDFDbA5h8IAdgIIAAAAICXCIQBnBhASAyQAFAQgHANIgIAPIgaAQQABCFgwAAQgNAAgRgKg");
	this.shape_59.setTransform(-21.5226,37.7717,0.1107,0.1107);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0E100C").s().p("AhXAOQAggmA8ABQA/ABATAug");
	this.shape_60.setTransform(52.1393,37.5196,0.1107,0.1107);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0B0A0A").s().p("AhuBJQgOgSgDgkQgEglgDgEQgGgMgngQQgkgPgGgXQADAAALgMQAOgLAVAEQATAEAnAeQAjAbASgCQALgBAegRQAfgSAUgDQBLgLA6AVQBNAbgaBGIgWAAQgFASgnAXQgnAWgzANQgwANgjAAQg8AAgagkg");
	this.shape_61.setTransform(52.6601,35.3865,0.1107,0.1107);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#201111").s().p("AjPEyIBbhUQAvgtAmguQAfgoAmg7IBAhoIBpjpQg1E2h5CUQgrA1hBAvQhKA1gyAAIgIAAg");
	this.shape_62.setTransform(-32.3489,-31.1057,0.1107,0.1107);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D779D").s().p("AgTAQQovi6oLhbQARgWCIhHQCChEAsgOQAuAtBjA3QBnA5A5AJQArAHA+gVQBDgYAkACQBGADGODFQEpCRDHBuIDUB1QCZBXAjAoIhYAsQoNj5n9isg");
	this.shape_63.setTransform(-5.5146,1.046,0.1107,0.1107);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#402226").s().p("AgKAUQgpgSgOghQAugGAhAPQAkAQAQAnIgMABQgiAAgegOg");
	this.shape_64.setTransform(1.8582,-32.4465,0.1107,0.1107);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#271713").s().p("AhQD2IAghfQAoh/AShhQAUhpAJiBQAYAEAJAVQAEANAGAcQARBrgnC7QgsDUhLAmQgJAFgFAAQgWAAAPg+g");
	this.shape_65.setTransform(-3.8843,-36.6447,0.1107,0.1107);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0E0C0B").s().p("ABEE8QhHgXgfhVQgahogYgyQgUgsgig6Ig7hlQg8hlgbgzQB1g6A3AVQAYAJAjAdIBKBAICCBoQBMA9A1AvQgPBAAJBgQALB5AAANQgDA6gqANQgNAEgTAAQgzAAhZgdg");
	this.shape_66.setTransform(-41.1607,28.0864,0.1107,0.1107);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D49749").s().p("AiWB/IAuhTQA4hkgIhPIAWgWQAeAjgSBJQgKAogYBFQAiALAPgjIAQg+QAdgMgHg1QACgJgCgXQgCgYACgKIAWALQAOAGAHAFQAEAwALBAQAOBRAOANQAGAFAoAAQAiALgOA9QhdhAhkAZQhUAVhcBTQAKgmAagwgAB5gsQgRhQgIgLQgCgCgIACQgJACgDgCQgCgjAHgWQAKgkAdAcQAKAJARBlQAOBZADAoQgagMgPhHg");
	this.shape_67.setTransform(-42.7198,-34.6777,0.1107,0.1107);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#211A1B").s().p("AjvDxQAVglAehzQAdhtAggzQARgaAagUQAjgbAGgHQAPAGAFANIACgpQAVgSAVghQAYgcAugQQBHgYAHANQACADAAAPQgBAOAFAJQAOBPAiCfQAZCLgIBmQgkgFg2goQg1gogqgEQg9gGghAQQgWAKgvAvQAZAbhFARQgPABgVAIIgfAMIgGABQgVAAAHgsgAAZAtQBxBFhHj3IAUgSQgbgBgQAtQAPBDglgCQAIA8gFAbgAg4AYQARgyAJg2QgXBEgDAkg");
	this.shape_68.setTransform(-42.861,-34.5007,0.1107,0.1107);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#89857F").s().p("AjDAIIgBAAQBPgcCNgJQCzgLgHBGIkEAAIhIACIgBAAQgrAAgPgYg");
	this.shape_69.setTransform(-26.6686,-22.7327,0.1107,0.1107);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3A3B38").s().p("AgtBkQgEgEgJhMQgIhLACgGQAFgYAsgLQApgKAOALQAHAGAMBaQALBcgHAHQgLgCgyADIgdABQgRAAgBgCg");
	this.shape_70.setTransform(-39.4509,-15.0493,0.1107,0.1107);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5C5549").s().p("AhhBBIAAiCIDDAAQgCBag1AbQgdAOhDAAIgsgBg");
	this.shape_71.setTransform(-24.8571,-19.4962,0.1107,0.1107);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737169").s().p("AjeCjQgggeA0hKQAwhFBZhCQBehFBPgRQBbgUAkA+QhTAKhGAzQgwAjhFBPQgPARgRAfQgQAdgJAKQgXAag4AAQgXAAgcgFg");
	this.shape_72.setTransform(-37.7346,-19.6176,0.1107,0.1107);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3D3832").s().p("AhBDEQgGgIAChBIAEhxQgCg6gOAAQgSABgqBaIhMiNIBXggIhCgWQABgPAPgNQALgJARgHQBegHAlAdIAAAAIDvA3QgUAWggAQQgVAKgoANQgeAKglADQgjAEgIADQghANgGBmQgBAcAUA6QAHAjgfAAQgHAAgJgCg");
	this.shape_73.setTransform(-27.1486,-20.4698,0.1107,0.1107);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5F5A53").s().p("ApEEOQgDgMgEg0QgEgrgPgeQgNgagbgbQgdgdgFgJQgZgoBIhPQA4g+C/hGQC8hFBSAIQB4ALA9BRQAXAeAaA3IAwBlQg+AOgkgNQgdgJgUghQgVgrgOgXQgYgqghgZQgHAwAYA3QAOAgAiA8QgUgFgrANQgsANgLgCQgUgFgthcQgshdgYgCQgugDAzBmIAnBKQASAmgHAGQgTgGg/ARQg8ARgJgHQgSgvgSgpQgkhRgngEQgDAsAhBDQAjBHAmALIQdh/QgBAIACARQAAAOgOAGQh6AzjAAOQjWAHhnANQoTBFghARQgJAFgDAPIgDAaQgDAXgXAAQgHAAgKgCg");
	this.shape_74.setTransform(-30.3934,-18.3815,0.1107,0.1107);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D24F36").s().p("AlSHdQiCgbiPApIgrgLQAPgxBGgsQBRg0AHgJQANgTAqhiIA4iFQAcgeBBgJQA7gJAWgmIATAHQAGgWAcAGQAdAFAGAZQAngVAmgCQgSgGgQgOQAMhbBvgHQBngHBRA6QAuhTg7gxQgRioAGhvQAXAqATAAQAPAAAUgcIApg5QAbgiAegLQAtBVB9CiQBlCVgJCAIhtjaQgLAjAUBTQAVBVgHAYQgDAMghAFQgjAEgIAMQgKAOABAnQACAogIAMQgQAeixB6QjSCRgRAOQg+AvgeAeQg3A1AFAtQiThRhogVgAAGgIQBQASBJByIAlgEQgahqh/hEQgCApgjAFg");
	this.shape_75.setTransform(-43.3431,-31.7109,0.1107,0.1107);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1F1614").s().p("AhlB/QgEg1gDgJQAYhtArg+QA3hRBfgJQhjBOgpBSQgwBdAPB1IgIALQgHAKgGACQgMgVgEgxg");
	this.shape_76.setTransform(-40.9311,-19.0161,0.1107,0.1107);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D1717").s().p("AiLAPQArg3ArgWQAWgMA4gOQA0gOAggEQAngFAUABQAqACgDAYImdDEQAxhLASgWg");
	this.shape_77.setTransform(-50.4781,-24.1203,0.1107,0.1107);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1D100F").s().p("AjNBMQAigmAqglQBfhSBPglQBogvBnAPIABAAIjLBcQgwAWhhBcQhWBShEARQgPgPA7hAg");
	this.shape_78.setTransform(-45.1767,-20.7337,0.1107,0.1107);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DD7759").s().p("AhKgiQCdhqA7AEQAaACAQAWQAIAKAFALIgsArQAHABAPAAQAPgBAHABQAMACAggFQAYABgDAXIjrAlIkgB+QAahBChhqg");
	this.shape_79.setTransform(-48.9075,-22.5928,0.1107,0.1107);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#413D2A").s().p("AgVBXIAVjZQAaA8gGBGQgDArgRBYg");
	this.shape_80.setTransform(33.5253,-3.0638,0.1107,0.1107);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0D0B0C").s().p("AjLE6QgagIgPgTIgXgdQBeAXA7gGQBIgIBFg0QAZgTAWgjQAZgoAJgJQABgBAVAEQAUAEAHgMQAegvARikQAPiUgHhOIAAAAQA0A3AEA4QACAfgUBnQgqDQhhBuQhYBih3AAQgzAAg4gRg");
	this.shape_81.setTransform(-43.277,65.3888,0.1107,0.1107);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7C9280").s().p("AA7BKQgXgIgpgYQgsgZgWgIIAAgVQgRgvAggLQAfgLAoAZQAXAbAPAeQAJASAQAtIgTALg");
	this.shape_82.setTransform(6.5236,6.0231,0.1107,0.1107);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BB8F38").s().p("AmThjQAngbBMANQAqAGBPAXQB3AbCoA5IEcBhIgWAVQl3iBmahYg");
	this.shape_83.setTransform(-12.0405,0.216,0.1107,0.1107);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0B0A0A").s().p("AKHDnQk/h8ifg/Iprj2QlUh/kzg/IgrgWQgDgPAKgEIAOgDQFbAZG3DCIAAAAQFsB+FICCQG2CvDgB8IBTAxQBEAug1AEQjAhekYhwg");
	this.shape_84.setTransform(-4.1152,3.9437,0.1107,0.1107);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D59E42").s().p("ATwJEQiNgMjog/QjIg2ilg/QhGhEAag/Ig5AIQlmjYkciTQlli4k9h1QhgAhg4ABQg4AAhegeQhEgVhCgvQhUg8AQgwQBEgXCWAfQAZAGDLA1QHBB1HkDKQGnCvHUD2IAAAAQA6AeDFBlQC0BeA1AoQBAAwgxAVQgcAMgvAAQgSAAgVgCg");
	this.shape_85.setTransform(1.3591,2.5453,0.1107,0.1107);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0B0A0A").s().p("AgIAXQhAgGgjgGQAUg0A3AUIAsAVQAaAMAPAAQAKgBAKgRQALgWAFgEIATA0IgTANQgbgEhGgGg");
	this.shape_86.setTransform(-50.6092,53.8622,0.1107,0.1107);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7DAAC6").s().p("AgZgNQk0kyASgTIDbCkQDHDKAfAjQB9CPA6CFQgOgalIlGg");
	this.shape_87.setTransform(22.277,3.5839,0.1107,0.1107);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0E1011").s().p("AK5HvQgegNhPhCQhdhOgVgOQhqhIiThfIj/ijIlFjWQjFiAiFhJQgogeABgQQACgRAwgQQJfBZJWBtIBdA4IAAgBQALABAhgBQAYAogDADQgCABgugFQiPgRlqhJQlDhBi2gOQhLgGgOABQhBABgJAZITbMnIATAhQAHARgNAAQgIAAgPgGg");
	this.shape_88.setTransform(10.7041,2.0921,0.1107,0.1107);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#10090A").s().p("AmoDEQgDglADgDQAEgDAcAAQDaghBFgRQCGgjCFhRQAegSBjhRQBNhAA6gUQiRDCjoBpQjMBejYAAIg1gBg");
	this.shape_89.setTransform(-23.4076,-11.2756,0.1107,0.1107);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D2E36").s().p("ADECDQgIgHgWgOIgjgXQgEgCgSgYQgSgXgSgMQgwghimheQiHhOhIg8QAgARBNAlQBHAiAmAVIDABnQB+BGA0AsQAfAaAfAyIAvBNQhNgZhMhUg");
	this.shape_90.setTransform(-67.2783,21.5924,0.1107,0.1107);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#131A1F").s().p("AgQANQiDjVhGhpIG0JjQhzhth4i4g");
	this.shape_91.setTransform(-60.268,28.5999,0.1107,0.1107);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111718").s().p("AEODLIgwgZQkGiHiehiQg3gdgagVQgugmAZgnQAHAAAygQQArgNAJAHQACACADAnQAGArARAUQAdAjC/BsQDuCHAPAKQgFATgRAAQgIAAgKgEg");
	this.shape_92.setTransform(-53.0626,35.2184,0.1107,0.1107);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#82AFC8").s().p("AIEF0QnfiehFgVIgbAQIlYjpQAOgYAngBQAJAAA3AGQBQAIChAUQCNAPBkgCQAdgCgogfQibhymHh5Qm0h6idg2QgcgFgNgEQgXgHAEgUQBHAJCDAEQCSAEA3AFQDAARBQAJQCtATBaAUQCcAiGDEnQCjB7CEB2QCJB7AzBGQAqA7AXAyQgJAGgZAAQhmAAlrhvg");
	this.shape_93.setTransform(-64.2586,20.4208,0.1107,0.1107);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1B2C35").s().p("AhJB7QghglAQgzQARg0A7hBQBGhNApAfQgYAagQAqQgKAZgQAxQgCAGgXAkQgRAdgBAQIABAAQgSAlgTAAQgMAAgNgPg");
	this.shape_94.setTransform(-46.5917,-0.796,0.1107,0.1107);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0F181B").s().p("AkRDDQA6iVCmhvQCXhnCqgcQAGAjgMAHQgVAEgRAHIh3AvQhBAZg1AoIiHCFQhiBfgZAAQgEAAgCgCg");
	this.shape_95.setTransform(-45.6316,-3.5362,0.1107,0.1107);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#070C0F").s().p("ACZBnQgXgIgogjQgsglgXgLIiDguQhPgdgegrIArgBQAcgBAQACIAAAAQBXAHBkBCQAhAVCABlQgIAIgKAGQgJAFgMAAQgLAAgPgFg");
	this.shape_96.setTransform(-36.3369,-2.846,0.1107,0.1107);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0B0F10").s().p("AjqGEQhChngsg9QgKgOgzg1Qg5g7gdgkQhoh/Atg8QATgaASAbQAJAOAKAaQCjDZBKBcQAJAMAFAWQAHAQAjgJQgQhKg/j1Qg0jHgTh5QBehqCygtQCigqCYAaIAAAAQA0AZgIASQgpgMhcAGQhbAFhhAUQjxAzgZBMQgGAWA8DHQA7DFARAOQARAOByAxQBtAwAhAIQBAAQAwAGQA6AHA5gGQAEASgZAMQgSAHgVACQhgAKiEg2IjVhoQAGAlgGBBQgJBZgBASQgCB6BiAeQB3AmCCgZQCRgcBBhfQAagmAti1QAeh6AYh7QARhaAHhAQAJhUgFhIQAbAFAJAYQAEALAEAjQAJBMgxENQgvEHghBQQgkBWhlA2QhZAxhmAHQgeADhjgMQhLgJguATQgUgqhPh5g");
	this.shape_97.setTransform(-36.7629,9.6907,0.1107,0.1107);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1C1915").s().p("AAVCzQgDgCgQgeQgUgogjhoQgjhmgIguQgFgdARgGQAPgFAMAMQAJAJAeB3QAcBxAfAUIALhYQAsALADBKQACBJgnARQgSAHgLAAQgIAAgEgDg");
	this.shape_98.setTransform(71.3958,31.2586,0.1107,0.1107);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#141210").s().p("Ag6BCQgFgNghiUQASAFAwBiQAtBfAIgDQAWgJAFgaQAEgXgMgYIgeizQAIANASAQIASAPQAhBSAHBQQAKBwhDAFIgGAAQg6AAghhgg");
	this.shape_99.setTransform(64.3376,32.3263,0.1107,0.1107);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1B1915").s().p("AgeCgQgDgQABgqQABgqgDgTQgHgpgYhKQgZhQgHgjQA6AuAbBoQAPA/AIBxQBBgxgUhqQgGgcgSg9QgRg4gEgaQAgAQAXA1QAVAwAIA/QAIA+gKAwQgKA1gcAQQgiAUgVAAQgZAAgFgeg");
	this.shape_100.setTransform(65.7989,38.683,0.1107,0.1107);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#13100D").s().p("AguB0QgSgtgWhVQgXhXgGgQQAhAVAeA2IArBaQAJAUATBAQAUAqAZg6QAUgsgqhvQg1h9gRgpQAiAdAqBJQAnBDAPAxQAPAxgBAeQAAAogZAhQggApgcAAQgpAAgkhag");
	this.shape_101.setTransform(68.1719,31.1168,0.1107,0.1107);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#171512").s().p("AgrCvQgri7gYjXQA2A3AbB3QANA4APCMQBWgLgIhPQgCgXgOgvQgOgygCgVQgHggABgQQAAgdAZADQAEA1AkB/QAWBzgyA3QglAogiAAIAAAAQgkAAgMg1g");
	this.shape_102.setTransform(69.8031,37.6554,0.1107,0.1107);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#27231F").s().p("AgPBmIg5hYQhChsAThXQAPgRA0AbQA0AaAvAyQA1A5ARA5QAUBGgnA4QgFAHgZAOQgcAQgHAHQgPgkghgzg");
	this.shape_103.setTransform(61.6885,26.9956,0.1107,0.1107);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2C2823").s().p("ACkDCQg4gWg3gsQgJgIhRhMQhzhoh5gRQgzhFBXAAQAPgBA/AFQAuAEAPgFIhYgtQABgFALgIIAKgHQBhAHAiArQAmAxg8BMQA1gIBHAxIA3AoQAfAVATAGQA6ARgpg7Qg1hAADgCQBcAVAnBAQArBFguBSQgRAGgTAAQgfAAgmgPg");
	this.shape_104.setTransform(56.8645,22.2108,0.1107,0.1107);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0B0B0A").s().p("AkmADQAthoAZgzIABAAQgJAigOBCQgPA5gcAmQAMAJENg7QEbhAA5AGQAcADALAJQAPAMgVAUQgLALlQBBQlXBFgzAdQAog5Aqhdg");
	this.shape_105.setTransform(28.2746,41.4137,0.1107,0.1107);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0C0C0B").s().p("AjBFMQgEhWgNg9IBDqEQAtAABLgMQA9gKAaADQAoAGAZAiQAcAnAVBYQAPBAALCAQANCMgMArQgHAeitCqQi/C8gVAbIgGiTg");
	this.shape_106.setTransform(37.7757,24.7462,0.1107,0.1107);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0B0B0A").s().p("AFkHHQg0gLkChoQkGhrghgaQg5gthFiZQhCiSgFhQQgFhLAOglQATgxA/gVQBeggDcgUQD2gWAqArIDJNjQgbAPgLAEQgIADgMAAQgOAAgUgEg");
	this.shape_107.setTransform(19.6187,26.6627,0.1107,0.1107);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0F0E0D").s().p("AkdLLQAahtATg7QAJgdARgHQAhgNAHgFQBmgBC/guQDgg2BIgIIAAuqIjjA/IpahVQgUAUBiGlQBxHiADAcIAGAwQgBAdgYgDQhdmOgtjGQhOlfgZj9QCCgPElgxQERgtCXgQQARgBAsgHQAmgCAOAaIABAAQgiDgAGFsIAHEoQADCsgFB6QAAANACAuQACApgGAHQgIAJh5ARIiYAUIArAWQAEAUgFALQgFANgQAKQgdATiqAXQilAXgoAgQgHAFgxBnIg/CGIAqirg");
	this.shape_108.setTransform(29.4176,29.9195,0.1107,0.1107);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5C544B").s().p("AEwJnQhZAAgPgjQgJg4gegnQg1hFh9g8QhSgoitg7QjAhChJgfQiKg7hFhBQhdhWgxiMQg0iYAqhwIArBBIAwAbQAeBvAlBSQAvBlA/BFQE3CZFnBvIAYACQAQABAEgQQAZhkhUlOQg4jfgHgfQgeiHgBhFQAGgSAbAMIAhARIAAAAQAuA2ATBTIJZBQQCShJBSA0IAUAEIADOYIgXAOQhfA8iVAKQg+AyhvAUQgmAHgeAAQhHAAghglg");
	this.shape_109.setTransform(24.1204,28.5687,0.1107,0.1107);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#151312").s().p("AAKCpQAEgagFgSQgsi1gQhWQgFgdASgGQAPgFAMALIAAABQAPAQAZCSQAYCKAAAwQgMACgJAAQgUAAgCgLg");
	this.shape_110.setTransform(-64.7254,54.4333,0.1107,0.1107);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#71675C").s().p("AivBPQgFgBgYg5QgYg3gDgTQAOgNCxgIQCtgIAnAIQAbAFAUATQAWAWgPATQgIAKi+AoQiwAmgZAAIgCAAg");
	this.shape_111.setTransform(-68.8179,53.3694,0.1107,0.1107);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1E1C1A").s().p("AinBgQhXgMgFg3QgBgTAHgnQAJgyACgVQApgKANApQADAIAEAYQADARAEAEQARAPCcgRQCzgTAbACQARACAagDQAQADgFAfQgLBIiwAXQhIAKhBAAQg2AAgwgHg");
	this.shape_112.setTransform(-67.9679,56.0685,0.1107,0.1107);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#22201D").s().p("AkHBXQgtgYgHglQgCgJAKgKIAKgJQALgIAWgFQAbgGAGgDQgUgqAXgOQAWgMAoAZQBrglBtAAQASAADKAPQAFAKAlAYQAUAahEAfQgfAPi8ArQi4ArgpACIgLAAQglAAgjgSg");
	this.shape_113.setTransform(-71.2282,49.6686,0.1107,0.1107);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0E0D0B").s().p("ABgPMQiLgXh3iOQigjBhflPQhbk+ARkLQANjFBHi7QBej2CRgeQB9gaBhA6QBKAsBZB1QBiCBBHDcQBFDWAaDvQAbD5gdDRQgfDjhbCFQhXCAiAAAQgWAAgYgDg");
	this.shape_114.setTransform(-81.4284,64.2642,0.1107,0.1107);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#12100E").s().p("AgOBPQgFgNgghoQgPgigEgTQgHghAbgNQAIASANASIAWAeQACACAEAnQAJAgAcgeQACgCgEgwQgEgoAbADQgBAqAPBQQAIBIggAuQgIANgKAAQgUAAgXg7g");
	this.shape_115.setTransform(-7.4824,44.1464,0.1107,0.1107);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#110F0F").s().p("Ag2BvQgIgcgGg7QgGhEgEgWQAbAJATBZIAUBhQAzA4gPiDQgOh+gagtQgKgRgegNQgXgKABgSQBPgaAzCyQASA/AGBAQAHA9gJAIQgYAGgTAAQhBAAgUhEg");
	this.shape_116.setTransform(-13.7054,51.3432,0.1107,0.1107);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#141210").s().p("Ag2AZQgtixgJhXQAUgDAIAXQAEANAFAcQAwCOAXCRQBQgJgOhgQgEgcgQg1QgQg1gDgQQgHgfgBgPQAAgcAZADQAGAqAXBOQAZBSAGAjQAXCHheBVIAAAAQghAAg2jXg");
	this.shape_117.setTransform(-9.7488,50.8375,0.1107,0.1107);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#181614").s().p("AAeCbQgTgZg6h8QgyhngygoQACgEgCgQQgCgRACgHQAigFAfAbIAAAAIAwgCQA4CHBGgYQABgHAHgHQAGgGAIgCQApBZgIAoQgCAKgMAiQgNAigGAhQgjAOgLAAIgBAAQgPAAgWgbg");
	this.shape_118.setTransform(-13.9113,38.8328,0.1107,0.1107);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1D1A16").s().p("AAUD6QgWgFgviKQgghfgUhMQgRgkgCgKQgCgPAsAFQANAmAgBSQAeBMAMArQBogPgkhvQgKgjgfg8QghhBgFgSQgLgegBgMQgCgbAZADQAHAuAwBVQAvBUAHAuIAAAAQAKBGgVBRQgXBbgyAAQgHAAgHgCg");
	this.shape_119.setTransform(-11.5332,43.4782,0.1107,0.1107);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1E1B18").s().p("AATDCQgIgEgZgfQgZgegGgMQgVgngUhNQgVhLgDgwQAWAHAQAqQARAwATAOQAUAOAQAEQARAEAYgDQAHgvgYg3Qggg9gPggQAfglAfAdQAcAbgEAuQABAHgBAPQgBAPABAHQACAMAVBMQATBGAFAoQAKBZgxAAQgVAAgfgPg");
	this.shape_120.setTransform(-15.7602,44.9517,0.1107,0.1107);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#585046").s().p("AFGEYQhLANg5iCIgrAIQgcARglAEQgGAKgPANIgXAVQgig1hfhvQgZgchyhhQhrhcgHgLQgGgLAHgqQAGgngRgRQAVADAhgNIAhgMQBsAPBDAdQBAAvAlAsQA/BHgcApQhCATAJAQQAIAOBBAJQCXBSAOAKQBNA3AqBdQAFAZgDAEQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgGAAgPgIg");
	this.shape_121.setTransform(-16.4972,35.1782,0.1107,0.1107);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#100E0D").s().p("AAPTYQiahth9jxQhujWhOkoQhFkJgfkXQgckIAOjCQAPjQBDi8QBdkCCSgdQDVgrC8EUQB2CsBnElQB7FdAuFhQA0GKg2FHQgtELhxCHQhQBehkAAQhYAAhnhIg");
	this.shape_122.setTransform(-26.1881,57.8645,0.1107,0.1107);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#756A5D").s().p("ADaI8QhTjmh7jbQh5jZiZjCQgVgbhfhXQhQhJgWgrQAbgUBIAQQAjgZAWgKQAigRAZADQANACAyAfQA3AhAxAnQCIBrgmAlQA9AoBBBNQBNBbgHA2QAogWBVArQBWAqgOAuQAgAXAZAuQAZAtAFArQAFAugUAVQgYAYg1gRQALAUgEATQgFARgTASQAYBuhEAQQgSAEgkgCQgdgBgEAEQgCACAEAwQADAlgXAAIgEAAg");
	this.shape_123.setTransform(-20.3782,42.328,0.1107,0.1107);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#766B5F").s().p("AiNAPQAngSA5gSQAigLBBgRQASAEAogIQAegBAAAmQAAAZgkASQghASgzAGQgZADgXAAQhQAAgjgng");
	this.shape_124.setTransform(-81.6613,43.1797,0.1107,0.1107);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#443D37").s().p("AgMDEQAFhugDgTQgCgPgWgqQgUgjgBgnQAAgQAKheQAKheADgMQAEgNAigHQApgHAJgIQgaCFgQC5QgRDYAPBhQgbgoADhQg");
	this.shape_125.setTransform(-90.62,57.9706,0.1107,0.1107);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#584F46").s().p("AlbKTQgKhMgKgiQgFgRgRgLQgQgIgBgBQgBgEABgHIAAgLQgUi5gEhsQgFikAXiBIAyguQAJguAThCQAVhIAQgjQBIidCYh1QCniCCfAQQArAEBIAgQBZAngiAdQidgVifBbQigBcg5CRQgJAXgBAqQgBApgBADIgRgHQgSgHgJAFQhiAygZGaQgKCdAFCfQAFCUAOBCQg4gcgQhBg");
	this.shape_126.setTransform(-85.9793,56.056,0.1107,0.1107);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#73685B").s().p("AHLJVQgDgEgYhYQgYhfgLgZQiBkjiIifQiljDj+hqQgKgEgJgSQgHgRgHgBQiLghinBVQifBShNB/Ig2hXQA/hVASgGQAIgCAWgDQAagGAlgSQAJgEBGhRQBGhPAwgWIAAAAQBGggA2AKIAoALQAWAGARAAQALgBB6goQBqgkARARQgmBUBNA7QAqAhByAqQBHAaBZAaQBxAiAsACQAyADBMgRQBtgZAMgCQBDgKAxARQA8AVAwBCQAOATACAbIAEAfIgoApQizgeiqAqIgwgfQg0AAgNAsQABAugUAFQgTAGgcgjQgRhMhGgoQgdgQgSAHQgTAIADAlQABAQA5BWQBBBiAJARQBXCwAeBJQBDCngNBaQgEAegIAKQgEAGgGAAQgJAAgMgNg");
	this.shape_127.setTransform(-78.3983,50.5264,0.1107,0.1107);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#82796D").s().p("AA1geIhAAAQgrgBgWABQASgZA0AAIBSADQgCATADAqQAAAlgYAKg");
	this.shape_128.setTransform(-28.9503,-48.1641,0.1107,0.1107);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333D36").s().p("AB4ggIAAAWQgYACheAQQhXAQgiAJg");
	this.shape_129.setTransform(-15.6688,-62.8958,0.1107,0.1107);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5A5D63").s().p("AgfCuIAqlcQAtBOgzDRIgIApQgIAVgQAAIgEgBg");
	this.shape_130.setTransform(-5.2731,-50.1977,0.1107,0.1107);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8D9283").s().p("AgeAbQgZguAPhZQADgIAGgCIANgBIBADvQhGhSgGgLg");
	this.shape_131.setTransform(-27.1829,-49.1161,0.1107,0.1107);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D9A853").s().p("AgJA1QgRgNhzhdQAZgHAIgTIALgoIDvDvQhEgJhTg6g");
	this.shape_132.setTransform(-22.1947,-55.404,0.1107,0.1107);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E1BE57").s().p("AAwBVQg8gmgagUQhkhKgOheIExEFIgWAWQgagVg5gkg");
	this.shape_133.setTransform(-7.3273,-61.2048,0.1107,0.1107);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#354A56").s().p("AhKBBQgOgBhIgfQg7gZgpAOQgGgQANgWQAPgVAAgFIAAgWQBXBiCZgSQArgFBXgPQBPgMA0AGQAAALihAhQiTAfgaAAIgDAAg");
	this.shape_134.setTransform(-18.2143,-55.0435,0.1107,0.1107);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D5B988").s().p("AAKBUQgygrgOgeQgUhMgHglQgNgZgDgHQgDgJAjACQA4BNBrB3IgWBXQgHgKg7gwg");
	this.shape_135.setTransform(-27.5102,-53.4697,0.1107,0.1107);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4E423C").s().p("AD3AZQgvgWgYgDQg4gHiWALQinAPg1ADQgGgSgWgDIglAAIHTgsQAzAHAqAUQAyAXAVAlIgCAAQgcAAgngTg");
	this.shape_136.setTransform(-8.6585,-52.6278,0.1107,0.1107);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A57B37").s().p("AA2B4QhBgigcgeQgNgOgCgRQABgNgBgBQgRgUgog9Qgmg4gOgPIAsgWQAwBDBXBnQBhBxAzAsQgtgKhBgig");
	this.shape_137.setTransform(-23.4013,-45.0062,0.1107,0.1107);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#395E71").s().p("AhFCBQgGgOghhTQAMgNAHgEIgBgCQgHgTgDgSQgJg6AtAGIASg9QANgpgKgcQAGAFBHAsQA4AjATAkQhRAUgiAhQgsApAHBNQADAXAUAhQATAiABAKIAAAXQgpgagcg1g");
	this.shape_138.setTransform(-20.8635,-57.8173,0.1107,0.1107);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#76A1AF").s().p("ABBA8Iitg8QhKgbgVgPQgpgcgRg8QBbAjCsBVQCtBXBXAhIgWAVQhCgjhtgkg");
	this.shape_139.setTransform(-19.4133,-61.3266,0.1107,0.1107);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6B8CAC").s().p("AghDQIgVgLIAsmeQAKgCAWACQAWABALgBQgGBFgGCbQgMCJgpBLIgXgLg");
	this.shape_140.setTransform(-13.975,-49.242,0.1107,0.1107);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#498BAE").s().p("AgWACQgUAcAnAlIA5A3QgDANgYAAQgbgDgKABIivkbQAPgUB9BgQBlBNAqAqQAQASAiAoQAoAwgDADg");
	this.shape_141.setTransform(-10.3456,-60.6178,0.1107,0.1107);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#324F55").s().p("AA2BTQiXgXgWgFIhtgWQAbgBA8ACQA5ABAfgCIAIgdQhPhfAggXQAfgYBWBUQDLDSitjRIALgLIALgLICYDEQg6gVh1gRg");
	this.shape_142.setTransform(-9.8679,-59.5175,0.1107,0.1107);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#347091").s().p("ABLCgQgFgFgxgkQgugigegiQgrhHgPgsQgZhFASg3QAogCBSBwQAsA7A9BeQAIAMACAZQABAZABACQASApgQAHIgGACQgPAAgZgdg");
	this.shape_143.setTransform(-26.0513,-48.3569,0.1107,0.1107);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AAC0CB").s().p("AAXAlQiShzhYhVIgigaQgSgPgOgYQAkgBArAPQAZAJAxAUQA/BCBRAfIAIAiQAmA4BKA9QAqAjBWBCQALAUgCAOIgJAfIj1jAg");
	this.shape_144.setTransform(-20.9344,-60.7208,0.1107,0.1107);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D1BF90").s().p("AgmBEQirh5g0hXQgqhIAggbQAZAUB+CGQBcBgBJAhQBmBDB1BWQAHAGAOAPIhBAWQilhqhdhCg");
	this.shape_145.setTransform(-24.5102,-45.3688,0.1107,0.1107);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5A5253").s().p("AhBDWQgEgNgGgGQAriUAAj0QAPAAAjgQQAhgJAPAYQAVBdgYCAQgbCThDAlQgSAJgJAAQgEAAgDgCg");
	this.shape_146.setTransform(-6.97,-49.705,0.1107,0.1107);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#94A8AE").s().p("ADoCzQichahshEQiDhQiAhYQgPgeAagDQAVgDAhAOIAAAAQBKA6CeBjQBYA2CgBeQAHAEANALQAMAIALgBQAFAWgWABQgfgDgRABg");
	this.shape_147.setTransform(-18.838,-41.071,0.1107,0.1107);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F6E499").s().p("AiDgbQA/gpA3gKQBkgTC6BdQguAZhTAAQh6AAgQACQgvAGhZAYQhaAXg0AHQBZhNA0ghg");
	this.shape_148.setTransform(-19.7786,-65.3786,0.1107,0.1107);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#846651").s().p("AkpAqIAljTQBYgLChgXQCKgQBwAEQBFgOgDAjQhbAHiWATQiyAWg+AGQgfAVgWCuQgLBWgGAcQgLAzgQAAQgugBAWixg");
	this.shape_149.setTransform(-14.8108,-50.2273,0.1107,0.1107);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#485B71").s().p("An1AVQAggbA5AGQBWAJAHgBQAxgFB1gcQBrgbA4gDQBXgGCfAaQCnAbBPgDQADAXgdABQglgEgNABQhUADi9gEQiwgFhgAGQgiACg8APQhRAUgTADQgkAHgfAAQhKAAgvgkg");
	this.shape_150.setTransform(-14.579,-53.6985,0.1107,0.1107);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E2BA55").s().p("ADmDCQg9gXibiOQiiiUhFgjIgNgNQgLgKgUABIAAgWQDQBABeA0QCoBbAtCLQAKAdgCALQgCALgMAAQgHAAgLgFg");
	this.shape_151.setTransform(-9.9878,-64.2035,0.1107,0.1107);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D4A13E").s().p("AhfAXQgvhugNh+QAYgMAGAEQBrBRBTBnQByCLgdBNQgXgPgng1QgkgwghgPQAaBGACASQAEAZgKA+QhUhOg0h6g");
	this.shape_152.setTransform(-23.734,-59.4417,0.1107,0.1107);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2E648C").s().p("AgvAYQjtkjgridQA1gIApArQApAqgEA2QALAOAVAnQAVAmANASQBNBlBhB3QA6BHB9CTQAzA8AOAVQAoA6gEAhQiwidjHj1g");
	this.shape_153.setTransform(-24.4897,-48.6379,0.1107,0.1107);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#DDC96A").s().p("ADsERQghgpg5ghQg7ghgwgCQghAKgGgPQgHgOAYgZQgBgEADgZQACgVgIgLQgDgEgWgJIgjgNQhYhehtg6IgWAAIgzhLQghgvAIgfQBAA2EgDSQDbCfB0B6IhtAAg");
	this.shape_154.setTransform(-1.9577,-59.2703,0.1107,0.1107);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EAC65A").s().p("ACkCvQg5gThYgvQhcgxgugQQgzgYgpg7QgbgngihKQAFgEAHgKQAHgIAOgBQA2gCC3CQQDCCXA7ANIANACQALAFgCAPIhCAWQgGgCgQACIgLABIgKgBg");
	this.shape_155.setTransform(-5.9992,-58.6663,0.1107,0.1107);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D79F39").s().p("AA5BsQiNgphPgzQgPgKgvgzQgvg2gWgPQAjglAkAGIBLAbQBzAsB1BHQBzBEBgBSIgJAAQhcAAiJgng");
	this.shape_156.setTransform(-10.593,-56.6666,0.1107,0.1107);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#457FA5").s().p("ABbCJQhmAEgYgGQgJhEhKhHIg+g6QgigigSgeQAoAOBDgPIBagVQAOgMAQAHQAPAIgDATIAAAAQgaAFAXAcQAMAOAYATQATARBpBUQBaBUgcAgQgugXhZADg");
	this.shape_157.setTransform(-12.488,-64.511,0.1107,0.1107);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8FBACA").s().p("AD5CHQgvg8gRgOQi5iUlHhRQCighCfARQCAAOC3A4QAcAKgcAMQAFA/hlADQCrCMhLBNQgPgEgpg0g");
	this.shape_158.setTransform(-16.2685,-65.1295,0.1107,0.1107);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#36332F").s().p("ACNDlQhahXhfAAQgBgegcg5QglhCgQgjQg9iCBNg0QBwBBA/B0QAsBRAqCjQAEANgCAJQgBAKgIAAIgDAAg");
	this.shape_159.setTransform(-26.1712,-43.3129,0.1107,0.1107);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9BC6DE").s().p("AAvCeQgGgPgFgHQACgkgIgSQgLgciZhcQiQhXg4gVIAAgWQBugSBIAKQBeANBIA8QAygkBrA2QBnA0AYA8QAEANAaAaQARAXgZAPQgNAIhxAhQhxAggXADQgEgGgHgQg");
	this.shape_160.setTransform(-7.4839,-57.0348,0.1107,0.1107);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7FAFBE").s().p("ABlDHQhHgIh4ggQgHgcAzgPQgqg3hIg9Ih/hmQgVgXAHgHQAHgHAdAPIBtAsQgPgTgLgkQgOgvgDgHQAJgdAMAdQBrA5BZBgIAAAAQASgUAdAGQAZAGATAWQAUAWgEATQgFAXgkAIQg7AXBQAVQATgcAmAAQAhABAlAWQAjAWAVAeQAVAigHAcIhKABQhNAAgygFg");
	this.shape_161.setTransform(-2.696,-58.4964,0.1107,0.1107);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E7CD83").s().p("AGlDnIgWAAIiTg6Qh3hQheguQh5g6hrgTIiAhcQhLg0g7gfQgYgRAGgGQAFgFAjAGQBMAdBsAWQA+ANB9AXQA7gBAxAXQAdAJgdANQBcAmBoBCQBEAtBwBVQAIAGgCAPQgCANgJAPQAtgHAFAKQAFAKghAfIgNAAIgJAAg");
	this.shape_162.setTransform(-11.7492,-57.5923,0.1107,0.1107);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#51627C").s().p("AgoCuQgrgNgNgJQgVgNgGghQgGggAFhJQAFhQAKgjQAKgoAWgQQAUgPAsgHIBqgPQASADAKAHQARANgbDAQgbDFgjADQgmgTgzgPg");
	this.shape_163.setTransform(-15.1209,-49.3596,0.1107,0.1107);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#A1988B").s().p("AixBOQgvg8AOg4QAOg4BHglQBKgnB3gHQBZgXAgAMQAsARgiBSQgFACgPgCQgRgCgHACIg1AOQggAHgYABIBXBLIhtB4QgQgVhEg5QhOg/gLALQAMAtAyAwQBEBCAKAPQAEAGgGAIIgHAHQhsgzgzhAg");
	this.shape_164.setTransform(-30.5645,-46.5441,0.1107,0.1107);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#DB674D").s().p("AkvG2IgLgKQAIgyAfhKQAxhyCtjwQCSjMB0iIQAYgcANgJQAWgRAcAAQgBADABAIQABAHgBADQAqAdgyB3QgsBngxAyQhoAvgjBDIAAAVQgdAGgjAiQgqAoAUAdIAEAwIidB/IglBTQgWAxgrAPIgEABQgGAAgIgHg");
	this.shape_165.setTransform(-50.7334,-26.1773,0.1107,0.1107);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#37749E").s().p("AjNCHQgWgVAGgGQAEgEAYACQBEAGAHgKQAGgIgEgbQgFgegMgcQgghLgzAQQgeAKAAA7QgBA5gXAEQgTiTBSgXQBAgSCGA6QACgHgCgQQgBgPACgGQgRgYgDgNQgDgUAXgIIBtBWQBDA0ApAkQALAKAcAVQAXATADAPQgzAChHAVIh4AmQhDATg4AAQhAAAgygZg");
	this.shape_166.setTransform(-17.8629,-57.131,0.1107,0.1107);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EFDEA7").s().p("ACAEeQhbhMhXhaQh7h8gQg6QgUhLAthDQAKgPAfgkQAZgeAJgSQAEAPAPALIAZASQAWgUAHAIQAHAHgOAbQAyBfA2B4QAmBWA1CGIAAAMQABAHgBADQAhAygLAXQgGALgNAAQgRAAgegSg");
	this.shape_167.setTransform(-25.1872,-59.1713,0.1107,0.1107);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#294F68").s().p("AFND0QgVgIglgWQgzghgMgGQhPgrg3AdQhHAGhAg3Qg7g0gXhJQhBgIhahJQhhhQALg6QAWgVAJACQBTAbBTAnQBbAqA+AqQBpAYA6AeQBcAvAGBJQAvgWA2A2QA1A2gXAtQAlAwgeAAQgNAAgXgIg");
	this.shape_168.setTransform(-16.4081,-58.7525,0.1107,0.1107);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A27559").s().p("AhhCYQAMgUAdgQQAQgJAggPQA0gcgUhAQgJgehsheQhuhegZABQg9hpgFgEQBxBtDPCUQAVAQB+BHQBzBCAEAHQAIANgWBiQgaBygBAMg");
	this.shape_169.setTransform(-21.7151,-52.3818,0.1107,0.1107);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#346B90").s().p("AgEBWIkXhgQAAgLApgbQAigXAMgEQApgQAZgGQB7gnB0gFQBNgFAsBtQAYA7AeB4Qh/gGihgyg");
	this.shape_170.setTransform(-15.547,-61.447,0.1107,0.1107);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EED27A").s().p("Ai7ArQgoAggPgOQgOgOAZgvQAPgcgHg6QgGg3ASgXQAcgnC4hSQC+hVA5AKQgJAJidBtQh+BXgJAoQgDAMAKAIQAFAFAHADQABAEgCAIQgBAIACACQBOAagOAnQAUAxA4BCQAsA1A3AyQAuAmgFAsQgFAug6ADIgcANQiRjEjFh7g");
	this.shape_171.setTransform(-23.6158,-62.5285,0.1107,0.1107);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B88B64").s().p("ACwFUQg0gLhRg2QhOg1hMhKQi3ixAEhxQABgPAPhUQAQhVAFgFQATgXAOATQAHAKAKAVQARAUBgB6QBFBXAyAxIgbgGQgbgHgKgIIBAB2QgNAPgUAIIghAKQggAMAMA2QAOAOA8gwQBDg1ALAAIAeAtQAVAjgHAHQgnAEgYAKQgxAVAzAvQAaAYBjAKQBYAJAAARQAAAZgtAFQgOACgOAAQgVAAgVgEg");
	this.shape_172.setTransform(-25.3003,-55.7136,0.1107,0.1107);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DF6F53").s().p("AAWDRQgigQhDhdQhGhigkgVQgcgSg4gPQg2gOgagTQBsgpBtghQCBgoBagRQApgIAFAlIAEAjQAEAWAKAOQALAQAiAZIBAAwQBTBAAHA/QglAEgvAaIhSAwQhDAogyAAQgYAAgVgJg");
	this.shape_173.setTransform(-34.3996,-41.7623,0.1107,0.1107);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E9B74E").s().p("ABtCJQhGAbhMgNQg2gJhTgkQhugwgbgIQhPgbhEAFQAQghAcgYQAfgYAigFQB9hRCNgTQB6gRCeAdQCmBTBfBmIgrALQhqApiGAYQgIAtgNAFIgDAAQgOAAgcgcg");
	this.shape_174.setTransform(-18.9317,-63.8075,0.1107,0.1107);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6D4738").s().p("AibBfQh5iug6jtIKQG9QAgAqgvBIQguBIg8ACIgJAAQjBAAiajeg");
	this.shape_175.setTransform(-20.7802,-39.9243,0.1107,0.1107);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4C6E89").s().p("AjSEBQgegFghgWQgngcgHgCQgRgPAAgKQAEg9ASiXQAVixAKgIQAJgIAVgGQAIgBAOABIAWAAQBtgJCLgFQA4gDDFgFQA5A9gPCPQgQCPhGAtQgMgKgOgTIgWgeQgcghgrAEQgcADgnAlIhIBOQhbBfhWAAQgLAAgMgCg");
	this.shape_176.setTransform(-10.5619,-49.0318,0.1107,0.1107);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A69B87").s().p("AgjAgQgRgRANgeQAPghAqAPQAaAKABAQQABANgQAOQgQANgSAEIgMACQgMAAgHgHg");
	this.shape_177.setTransform(15.3146,34.0519,0.1107,0.1107);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#2D2927").s().p("AgBAqQgRgMgKgaQgLgaAGgPQAGgSAaAKQATAIAMAjQAMAggLALQgHAIgJAAQgIAAgIgHg");
	this.shape_178.setTransform(1.5117,17.9887,0.1107,0.1107);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1E1C1A").s().p("AgrggIArgWIAWAYQAUATABABIgrBAg");
	this.shape_179.setTransform(39.569,36.219,0.1107,0.1107);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#5E574C").s().p("AhTA2QgcgYBdgsQBXgsAWAEQgIAXhPAvQhBAngSAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_180.setTransform(0.3731,43.7162,0.1107,0.1107);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#97886E").s().p("AgPAKQghgzgGgtQAqAVAfA1QAcAwAHAzQgmgbgfgyg");
	this.shape_181.setTransform(30.5025,16.9982,0.1107,0.1107);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D9D8DA").s().p("AgzBBQAJgJAGgbIAJgxQANhAAmAIQAkAGgLAZQgGANgRAWQgfBSgDADQgNADgKAAQgWAAACgNg");
	this.shape_182.setTransform(4.6096,-13.0873,0.1107,0.1107);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E1D8C2").s().p("AACBtQgNhCgIgzQgPhkAaAAQAdAnAEBCQACAlgDBLg");
	this.shape_183.setTransform(-48.4456,22.7991,0.1107,0.1107);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#716056").s().p("AhXAbQAKgEBNgtQA7gjAdgCQghBSgiAZQgRAMgTAAQghAAgnghg");
	this.shape_184.setTransform(-7.0865,-46.877,0.1107,0.1107);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8D8274").s().p("AhiAbIABgbQAQgDALgPIARgZICYAWIi5BAIgBABQgMAAABgRg");
	this.shape_185.setTransform(37.0252,33.6784,0.1107,0.1107);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#7D7768").s().p("Ahth2QAKgJAmAcQAkAaApAsQBpBtgNApg");
	this.shape_186.setTransform(-1.0343,-11.8989,0.1107,0.1107);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D4D3D2").s().p("AgeArQgggEgYgYQgagaAEggIDZArQgEAXg8ANQgkAIgYAAIgPgBg");
	this.shape_187.setTransform(26.5135,13.1396,0.1107,0.1107);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#867C6E").s().p("AhbAnQgIgPAhgYQAggYAsgPQAzgQAhAHIhtBhQgSACgOAAQglAAgHgMg");
	this.shape_188.setTransform(0.8218,42.1939,0.1107,0.1107);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#BCB6A4").s().p("Aijg+IFHBsIhIARg");
	this.shape_189.setTransform(-9.3836,-20.2532,0.1107,0.1107);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#625E57").s().p("AhWg1QAwgHAuAZQAeAPAxAqQgJATguAGQgyAGgDACg");
	this.shape_190.setTransform(17.0881,-27.3671,0.1107,0.1107);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#38729A").s().p("AgVA3QgOgFgkgTQghgTgEAAQAPgGAagZQAZgZAOgFQAngOALAXIAIAWQAFAOAHAFQAHAGAlATQAYALgBASg");
	this.shape_191.setTransform(-62.4433,14.2069,0.1107,0.1107);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#494642").s().p("Ah4A1QAfgsBNgdQA5gXBKgMQAHAkgOAHQgWADgOAIQg2AggnANQgkAMgjAAQgQAAgQgDg");
	this.shape_192.setTransform(-3.5683,45.6567,0.1107,0.1107);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#817568").s().p("AhhAjQgPgBgHABQAdg5BYgLQBZgMAhA6QgjANhBACQhNAEgSADIgJABIgNgBg");
	this.shape_193.setTransform(-26.5453,32.8044,0.1107,0.1107);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A79A8B").s().p("AgegSQB6hKAqAGQgkAzhVAvQhhAygrAZQgdgeB+hLg");
	this.shape_194.setTransform(0.6216,44.5551,0.1107,0.1107);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E6E5E5").s().p("AgPAHQgvgcgLgPQgcgkCzAIIgBCCIhcg7g");
	this.shape_195.setTransform(41.1284,37.295,0.1107,0.1107);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A5947E").s().p("AhAhAQALgFAUgLQASgJAPADIBBCNQgKATgUAGQgXAEgMAEg");
	this.shape_196.setTransform(29.6529,17.2375,0.1107,0.1107);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#292522").s().p("AgqCIQgLgTgBgRQgBgqAChTQAChVgCgqQALAVAPAlQARAqABAJIAAAAQAAADgOAUQgNASAFACIBWAAQgXAZgPAcQgFAJgVAvIgNAUQgJANAAALIgLgRg");
	this.shape_197.setTransform(-3.5919,53.2589,0.1107,0.1107);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#BCB5A7").s().p("AgJAYQhZgUgggpQBAgYBNAcQBMAaAsA4QhcgOgwgLg");
	this.shape_198.setTransform(-10.7121,-19.3229,0.1107,0.1107);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9B9182").s().p("AgggJIAQhnQAMhBAlgSIgsGHg");
	this.shape_199.setTransform(7.2992,-17.0871,0.1107,0.1107);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#B6A58B").s().p("AAyA3QgqADghgKIg3gPQgZgTAZguQAVgRAHgDQAOgGAXAFQAaAOAfAfIAzA0QABAMgQAAQgVgCgHABg");
	this.shape_200.setTransform(-48.7314,53.862,0.1107,0.1107);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#AF823B").s().p("Ahth0QAQgTAyAkQAgAXAhAkQAoAoAPAaIAgBLQABAEgBAHQgBAIABADg");
	this.shape_201.setTransform(-23.0374,-49.6351,0.1107,0.1107);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#1E1C1A").s().p("AjjA/QgCgwAAgaQgBgwAZgIIAKANQAGAHAGACQAFARgJAlQgCAeAmACQBCAFB8gEQCEgEA8ADQgPAXgoACIhBgDIiqAFIgpAAQhNAAgygFg");
	this.shape_202.setTransform(43.0615,35.3987,0.1107,0.1107);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#1D3444").s().p("ABTAmQhKgIg+gXQgvgQhOgoQASgNADgIQATAIAlAFQApAFANAEIAAgBIClAnQAlgKAQAUQAOASgJAZQgJAZgYADIgEAAQgaAAgeghg");
	this.shape_203.setTransform(-1.7122,-5.177,0.1107,0.1107);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#807464").s().p("AAAAJIi5AXQBBhPB5AGQB3AGBCBOQhaglhgADg");
	this.shape_204.setTransform(2.2208,30.3051,0.1107,0.1107);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#929085").s().p("AgYAkQgQhCAAglQgBgbAMgYQAMgTAAgEQAnAkAPBxQAQB4gxAOIgchqg");
	this.shape_205.setTransform(2.0596,-11.6488,0.1107,0.1107);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#807767").s().p("AhUg5IgjgwQgUglAdgKIBwB9QBHBOAkAvQATAaABAEQAAAFgWAUQhmhbhZh3g");
	this.shape_206.setTransform(-1.264,-10.8033,0.1107,0.1107);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#80766A").s().p("AAKATQhXgYg8AHIgPgQQBHgzBaAXQBUAVA8BHQgpgChmgdg");
	this.shape_207.setTransform(-21.3478,30.9471,0.1107,0.1107);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DAD8D8").s().p("AhhipQAmgmBECJQAjBGAhBcQAEANAQAiQAIAdgcALg");
	this.shape_208.setTransform(41.8649,40.1587,0.1107,0.1107);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#463A2F").s().p("AgsAtQgKgagIgxQgKg+gFgRQAgAFBEBjQBEBigQAPQgPACgNAAQhCAAgZhBg");
	this.shape_209.setTransform(-47.799,50.1318,0.1107,0.1107);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#797167").s().p("AgCgSQCTgYA0AMIinA+IjhADQApgeCYgXg");
	this.shape_210.setTransform(10.0779,-24.24,0.1107,0.1107);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#7A5B3F").s().p("AgkgzQBDgWBkALIkFCBQgBhXBfgfg");
	this.shape_211.setTransform(0.8895,35.5929,0.1107,0.1107);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BFBAAB").s().p("AgcgbQAxg8BYgmIAABCIjZC5QAjhlAtg0g");
	this.shape_212.setTransform(5.7245,-21.0142,0.1107,0.1107);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#AEA38F").s().p("AixAfQABgWgBgKIAWgYQAOgSAHgBQATgFBTgIQBUgIAPACQCOAwgmAjQgDADgtgLQg8gPgogEQiTgSg1BZQgBgKABgXg");
	this.shape_213.setTransform(0.9313,41.1901,0.1107,0.1107);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#385562").s().p("AhCCMIAMg2QAQhEAehFQAkhVAmgmQAHBVglBhQgHARhHCWIgDAAQgYAAADgjg");
	this.shape_214.setTransform(-7.0965,-39.3266,0.1107,0.1107);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C7995C").s().p("AAfCNIiCjwIASgdQANgVANARQAPApA9BUQA/BVAMAeQANAfgeACQglgDgLADg");
	this.shape_215.setTransform(32.9392,16.1702,0.1107,0.1107);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A59A8B").s().p("Ag/ARQgsg5AZgjQBGgGAoAlQAeAaAiBJQgmADgcATQgtgDgsg5g");
	this.shape_216.setTransform(28.6396,14.938,0.1107,0.1107);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#562722").s().p("ADYA5IgugIQiGgYhCgKQh2gRhbANQACgJgCgcQgCgZADgDQALgMDTAtIEBA2QACAYgYAAIgDAAg");
	this.shape_217.setTransform(-15.0697,-20.3498,0.1107,0.1107);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#383331").s().p("AhNAeQghghANg3QA2ANArAAQAsAAA2gNQANA3ghAhQgdAdgxAAQgwAAgdgdg");
	this.shape_218.setTransform(-0.9232,29.2585,0.1107,0.1107);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#46423D").s().p("AhCE4QAEglgBgNQgDhhAXiYQAViNAehpQAMgqAIgTQASgpAVgCQgUBwg1DfQgpDHAGCNIgEAAQgUAAgBgag");
	this.shape_219.setTransform(3.7734,-14.5449,0.1107,0.1107);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#1E1C1A").s().p("AgsAKQgkgQAGA7IgVAAQgBgRABglQACgkgCgSQAUgSAqgBQAmAAAlAOQAmAPAMAXQAOAZgcAcQgFACgWARQgWASgQAHQgXgxgigQg");
	this.shape_220.setTransform(47.4055,36.7198,0.1107,0.1107);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1E1C1A").s().p("AghAJQAAhdAXg5QABgBAKgGQAKgHAAgHQASACADAOQACAHgBAUIhAEbIgCibg");
	this.shape_221.setTransform(45.9682,37.4256,0.1107,0.1107);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8B8477").s().p("AhUhbQgFgQA0gHQA0gGAaAYQAjAiAIBCQAHBAgXAwg");
	this.shape_222.setTransform(2.7975,-19.0928,0.1107,0.1107);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#695E51").s().p("AgDBLQhGgogPgEQAvALgBgxQgBgngZg2QC6AZgiCrQgFAFgKAAQgXAAgxgag");
	this.shape_223.setTransform(6.0074,19.3247,0.1107,0.1107);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#433D39").s().p("AhOAcQg7guCEhEQA6AvATAaQAhAtgKA2QiKgfgjgbg");
	this.shape_224.setTransform(-8.6224,-16.5972,0.1107,0.1107);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DCDCD7").s().p("AgkgEQA6hYAJgbQAiAFAKBaQAKBTgNAPQgDADhBATIhSAYQgEg4AuhEg");
	this.shape_225.setTransform(5.6301,-12.3739,0.1107,0.1107);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#2E2A28").s().p("AgPBgQgfglgOg/QgPhBAQggQAUglAyAhQAPAKAbBbQAcBhgaATQgNAKgOAAQgWAAgVgag");
	this.shape_226.setTransform(18.6463,43.3179,0.1107,0.1107);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#43738D").s().p("ACOC6Qg6hchVhpQgvg4hziAIBBAAQAsA6BdBvQBSBmAqBNQgCAHADAbQAAAJgFAAQgGAAgLgKg");
	this.shape_227.setTransform(-21.7103,-46.0987,0.1107,0.1107);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#2D2927").s().p("AglA0QgshMgQgHQAJgmAOADQAKABAUAbQAcAmAJAHQAVAWATgGQgBhZgigQQgQgGggAAIhFADQAjgcBPADQBwAFANgCQgiAVgXBfQgXBdgSAIIgGABQgUAAghg7g");
	this.shape_228.setTransform(2.7051,16.7458,0.1107,0.1107);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A5835B").s().p("AhBCZIBXk7QAYgIALAOQAFAHAEAJIgsEwQgEgBgvADIgHAAQgdAAAAgNg");
	this.shape_229.setTransform(-1.5265,25.0904,0.1107,0.1107);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6D6356").s().p("AgICJQgNgZALgaQgxhrgQhvQACgBAGgNQAJgMAOAFQAjAJAlBXQAVAuAbBLIgrBXQgJAEgHAAQgQAAgJgSg");
	this.shape_230.setTransform(-7.9334,41.6724,0.1107,0.1107);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A49884").s().p("AiLBiQgKhdAVgKQAFgCAfgGQAhgFAdgNQgKguATgOQAUgOAjAeQBaglAQAXQAEAHgBAOQgBANACACQgNAVgaARQgMAIglASQgoAWhAAeQhMAkgNAAIgCgBg");
	this.shape_231.setTransform(47.8926,37.9059,0.1107,0.1107);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#574D45").s().p("Ai4CPQAogyCMhqQCFhnAvhDQASALgMAeIgRAuQgiAchrBiQhUBQg9AqQgqAegDABIgHABQgRAAAGgpg");
	this.shape_232.setTransform(-27.0365,3.8075,0.1107,0.1107);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#31607D").s().p("AjEC5ICkjaQAngvAvgmQAmgeA9glIAsAWQgrAVhHA/Qg6AyguAyQgQARgXAkQgcAugIAKQgoA4gyAAIgKgBg");
	this.shape_233.setTransform(-19.9004,-3.9105,0.1107,0.1107);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#67605A").s().p("AjfAtQgYgMABglQAAgnAagHQA+AXCgALQCqAMBCASQANAXgGAHQgGAHgXgPIgWAAQhmAPiHAAQhUAAhggGg");
	this.shape_234.setTransform(43.4621,35.4498,0.1107,0.1107);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D0BA95").s().p("AgtCkQgtgKAfh8QAbhuAfgmQAHgKAhgTQAggTACADQgYCCgQA5QglCMglAAIgEAAg");
	this.shape_235.setTransform(-2.5818,25.0961,0.1107,0.1107);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#9A8E79").s().p("AAAAOQhcgOhUAuQgThPA9gYQAzgUBYAWQBSAUA3AlQA5AogbAaQiIgwgkgGg");
	this.shape_236.setTransform(3.8128,23.9834,0.1107,0.1107);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#554F47").s().p("Ah8BYQgfgfBXhDQBCg0A0gXQARgKATASQASAQANAfQAgBJgiAYQg0AShBAEIgqABIhQgCg");
	this.shape_237.setTransform(28.3777,17.4693,0.1107,0.1107);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#63251D").s().p("ABBAeQg8glgVgMQhhgzhdATIgBAAQA5gnCsARQAhAEBIASQBSAVgBAMIg4BhQgigQg1ghg");
	this.shape_238.setTransform(-15.4251,-18.9231,0.1107,0.1107);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#1D323D").s().p("AhwAbIgdgNQgQgHAAgHQAAgXAWgZIAXgaQgKAzA2gRIA1gTQAigNAVgCQCXgOgqA5QgCAEg3AaIhKAjQgVALgwANQguAMgPAIQAjghgjgSg");
	this.shape_239.setTransform(-43.5466,7.9193,0.1107,0.1107);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B7AB93").s().p("AApA/QgOgDghADIg8AEQhIABAFgmQAKhKA6gUQAqgPBVAMQAkAOAUAeQATAbgCAbQgDAcgXAKQgKAFgNAAQgUAAgZgLg");
	this.shape_240.setTransform(4.5531,18.9654,0.1107,0.1107);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D64F3C").s().p("AidBmQADgHAbgfQBChdAvgjQBHg5BaAOIAAAAQAVARgSATIgkAdQgpAkhGAsIh1BIIgTABQgbAAADgJg");
	this.shape_241.setTransform(10.6221,-26.2853,0.1107,0.1107);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#44392E").s().p("AhBAuQgCgcAXh+QAgAJAMgaIAHgYQAGgQAIgJIAAAAQgPA/AggGQAUgEACAAQAKADgFAVQgKAvgcBUQgTBMANBBQhRgvgFhSg");
	this.shape_242.setTransform(-48.413,46.7329,0.1107,0.1107);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#1D2E36").s().p("AAAAFQjQhviBg5IALgKQAHgHADgEQDPBhCCBHQC3BjCGBnIlSi1g");
	this.shape_243.setTransform(-75.3762,16.6357,0.1107,0.1107);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#62231E").s().p("AAgAjQiLgVhjgYQgngEgNgFQgVgIAIglQB8AHB0AUQCCAWBmAiQAOAFAfAHQAYAJAEAZQi0gVg+gJg");
	this.shape_244.setTransform(-14.9542,-21.1969,0.1107,0.1107);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B9AD94").s().p("ABmAqQhVgZgTgBQgaAAhCAPQg6AOgjgGQAchWBXgMQA8gIBkAeQAEABADAMQAEANACABQAEACAWgIQAVgHANAHQAQAJAHAdQAHAegIAJIgCAAQgMAAhDgTg");
	this.shape_245.setTransform(3.4538,25.51,0.1107,0.1107);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#4F4841").s().p("AAQDLQgFghgHgQQgEgOgjhEQgeg9gBgFQgBgFAehfQAfhkABgYQAFAKAQAWQAQAVAGAMQAWBgAFA5QAHBKgMBOIAABBQgKACgHAAQgVAAgGgQg");
	this.shape_246.setTransform(-4.6036,53.2705,0.1107,0.1107);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#322E2A").s().p("ABZBdQhBg0gYAOQBCBRgqgQQgqgRgug8QA+gCg1g4QgWgYhLg6IBCgsQBxBmAYAZQBKBOAcBOIAAAAQgEAAg8gxg");
	this.shape_247.setTransform(-2.9767,-15.0305,0.1107,0.1107);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#3E7495").s().p("AhpAPQAnhAAXgOQAWgMBRgJQBTgJAKAJQgGBchvAgQiHAWg1AbQADgCAshIg");
	this.shape_248.setTransform(-16.5156,-7.923,0.1107,0.1107);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#686055").s().p("AEHB2Ig0gTQhbgbiog8Qixg9hTgaIAdgsQB0AwCvBAIEpBqQgKAVgXAAIgNgCg");
	this.shape_249.setTransform(47.2656,45.3988,0.1107,0.1107);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6D4D29").s().p("AgXBjQgHgLgphWQgphYAAgHQgBgMAlgJIAzgNQAYgKACADQAyBEAfA6QAuBYgXAhQguATgUADIgHABQgeAAgZglg");
	this.shape_250.setTransform(32.1138,16.4789,0.1107,0.1107);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7F7464").s().p("AAnBxQhAhLgBgFQAAgEAKgbQAJgWgHgMQgxglgegfQg5g7AlgvQBJBGA6BOQBLBkAWBOQALAnABAIQAFAfgRAKQgIgQhEhPg");
	this.shape_251.setTransform(-9.9362,37.1821,0.1107,0.1107);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#619DBE").s().p("AhiBjQgSgVAWgoQAEgQgEhFQgEg/AEgEQBkgCA0AYQAyAXgBArQgBAqgwAWQgCAggiAWQgdAUglADIgIAAQggAAgOgQg");
	this.shape_252.setTransform(-43.7489,6.6677,0.1107,0.1107);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#70695D").s().p("AhyAtQgtgBAFgTQAEgOAkgeQBggoAbgFQA6gJBQAgQAKAsgDATIgHAtg");
	this.shape_253.setTransform(8.202,-22.1776,0.1107,0.1107);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#302C29").s().p("AAIBOQhhgTgaAOQAEh1AugkQAlgdA1AgQAyAeAaA1QAcA5gbAgIgBAAQgJAAhUgRg");
	this.shape_254.setTransform(5.0742,16.9161,0.1107,0.1107);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#332E2A").s().p("AhtClQAKhKANhMQAQhdAPg0QAHgbAIADQAGABAIARQAKATADADQAHAFAGgVIAPAfQAJASgDARIAVAAQABgeAQgmQATgqAIgVQA9BPhUBIQgSAQgwAfQgjAWgCAKQgFAVAKAbIARAqQAMArhSARQgSALgEAAIAAAAQgDAAAEgfg");
	this.shape_255.setTransform(5.4955,-16.3619,0.1107,0.1107);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#453D36").s().p("AiYiJQAgALAIgZQAFgNAAgQQAagTAPAbIAYAsQAIAIARACIARADQAEADAHASQAGASAFAEIAVA9QC0CfhyAUQgkgXgDABQgHACADApQhCh3iYjPg");
	this.shape_256.setTransform(-11.4373,35.6925,0.1107,0.1107);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#2D2A28").s().p("AhyCkQgggLBDiPQA/iEAVgTQAXgVAjgCQAUgBAqACIijEaQgOAWgTANQgQALgPAAQgGAAgGgBg");
	this.shape_257.setTransform(-10.1672,32.5924,0.1107,0.1107);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#746F65").s().p("ABoBwQheg8hJg0QiPhnAbgYQBYgKBlBHQAfAVCBByQAdAngcAQQgKAFgMAAQgUAAgZgRg");
	this.shape_258.setTransform(-5.8199,-17.3622,0.1107,0.1107);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B5AF9F").s().p("AhJC9QgOgXAYg5QgQgkgMgiQgRgyAEgQQAFgVBOhGQBMhEAXgJQAygUgnBXQgUAtgjA+QgFANgCAWQgBAXgDAGQANAygVAtQgQAmgeARQgOAHgKAAQgMAAgGgLg");
	this.shape_259.setTransform(6.1969,-19.018,0.1107,0.1107);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B7A385").s().p("AiaB7IAHg/QARihA/gnQA9glChAyQgMAXgkAAQgrgDgSACIghgCQgUgBgIAGQgOAKgHApQgEAZgGA5QgOBxg5ALIgKABQgZAAgCghg");
	this.shape_260.setTransform(-0.5828,20.1075,0.1107,0.1107);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373330").s().p("AhTgGQAPhXACgCQAGgGBHAEQBRADAPgCQAUBzhAArQgvAgh+AFQAMgSAPhXg");
	this.shape_261.setTransform(-11.4098,-27.3733,0.1107,0.1107);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#60594F").s().p("AA7AsQhDgfgmAAQgdAAgiAZIg5AnQgCABgIgBQgIgCgDACQgDg7CUg9QCBg3A/ABQAxAAgOAbQgNAbghABQAnAYgDAmQgBAXgNA4Qg1ghgxgWg");
	this.shape_262.setTransform(1.2848,39.3574,0.1107,0.1107);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#50473C").s().p("AgMB6QgPgBgrhLQgshMAHgbQAJglA1gSQAygSAhATQAKAGAgBBQAgBDgDARQAAAFg6AlQg5AkgGAAIAAAAg");
	this.shape_263.setTransform(30.6459,13.7007,0.1107,0.1107);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7C7061").s().p("AgPB+Qg8gbgMgBIAsjwQBJAJAeAZQAbAVABAoQABAWgMA+QgMBAAAAoQgIACgJAAQgbAAgkgRg");
	this.shape_264.setTransform(4.0419,28.2467,0.1107,0.1107);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#2E2927").s().p("AgVA8QhRgOgxgeQg5giAAgyQAhATC+AKQC5AKAGAFQAEAFgDAXQgCAagJAMQgPAUhBAFQgUACgVAAQguAAgygJg");
	this.shape_265.setTransform(14.806,-18.9846,0.1107,0.1107);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CEC0A4").s().p("AhLCOIArkGQAMgDArgJQAtgJAIAAIAAEbg");
	this.shape_266.setTransform(1.4957,32.5935,0.1107,0.1107);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#7A6D5C").s().p("AAcCCQg8gpgGgBQgEgpANg2IAQhKQADghgVgLQgZgNhFAIQAggsBmAjQBhAhASAoQAIASgXBVQgYBZAHAbQgDADgGAAQgQAAgngag");
	this.shape_267.setTransform(4.9499,21.8326,0.1107,0.1107);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D8A248").s().p("AB7DCQhEhOgjgmQg8hBg2glQgnAFgYgpQgYgoAVghQhDhYBZABQAYAbBEA/QA9A7AVAZQAbAiAzBXQA3BcATAbQAGAbgQAAQgQAAgngbg");
	this.shape_268.setTransform(-24.8848,-50.4127,0.1107,0.1107);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#2C2A27").s().p("AghBjQh2gGAWhHQAGgTBZg0QBYg1ATAEQAlAJAPBMQAMA9gHAwQgNgCg4ADQgsACgcAAIgWAAg");
	this.shape_269.setTransform(-25.695,-29.994,0.1107,0.1107);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CBB797").s().p("AgaENQgTgCABgNQgCkigpjoQAQgCAeAfQARARAYAeQBwCDgfAhIgpAaQgdAQgIAbQgJAiAEBMQAFBYgDAbQgIADgLAAIgHAAg");
	this.shape_270.setTransform(-44.7909,32.6696,0.1107,0.1107);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D4C8B2").s().p("AAaBcQhZgPhihiQAihfBoAdQAJACBSAeQA6AVAkACQgVB/haAAQgMAAgNgDg");
	this.shape_271.setTransform(-11.534,-17.6918,0.1107,0.1107);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CEBDA1").s().p("AjEBwQACgIgBgrQgBggALgZQALgWAxgiQAxgiA9gcQCXhGAnAtQAlAqgYAMQgrALgWAPQhCA3gyAiQhjBFAbg/QAJgUAvgaQAsgbAIgYQg1AEgtAgQgfAWgsAyQACBvgZAAQgQAAgbgug");
	this.shape_272.setTransform(-46.7239,44.2801,0.1107,0.1107);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#947B6B").s().p("ABCB8QgggBighIQg9gciRhEQgegJgNgGQgZgLgDgXQBEAFBXAmQAwAWBfAtQBSAkA8ACQBQADBMgvQAlgWBKhTQBAg5AkA5QgNgBgLAIIgTAPQgeAUgnAoQgsAsgWAVQhNBIhMAAIgHAAg");
	this.shape_273.setTransform(-13.0091,-46.2466,0.1107,0.1107);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BCAD90").s().p("AiDByQADhpAJgmQARhABRgKQBAgXApARQAkAPAJAqQAIAogRAtQgSAwglAhQgTgEhZAFIg9ACQgYAAgDgDg");
	this.shape_274.setTransform(3.7958,21.5346,0.1107,0.1107);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DEBE77").s().p("Ah3DlIDvnKIgKDEQgGCVgQAaQgIANhgAoQhVAjgPAAIgDgBg");
	this.shape_275.setTransform(32.6778,6.0037,0.1107,0.1107);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#1F323F").s().p("ADME5QgigrgRgQQjVkMjskbIgJg7QBDgXBOBYQBIBSACBHQC3CbCPDCQABgCAKACQALABAAgBQAOAEADAOQADAIACARIAJAhQAFASAIAPIggAqQgkgLgigmg");
	this.shape_276.setTransform(-22.56,-46.7309,0.1107,0.1107);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B99F7A").s().p("AiNAYQAMg5gBhAQAiAMAwgNIBUgdQAxgRAcADQAnAEAXAoQgRAogvAeQgeAUhDAcQhJAfgfASQg3AggdAoQAahVAHghg");
	this.shape_277.setTransform(-47.2134,42.5016,0.1107,0.1107);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#71685C").s().p("AEQClQgTgIhdhNQhhhPgqgVQhKgnhWgfQhEgYhjgaQB0gwBRAkQAOAGA2AfQArAZAjAKQAUAGAdgBQAhgBAKACQARAeBLBIQBFBEAOAkQAIAUgLALQgFAFgJAAQgHAAgIgDg");
	this.shape_278.setTransform(59.4095,20.0105,0.1107,0.1107);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#2E2A28").s().p("AjlC3QALggAigpQAmgvCPiEQB/h2AzhLIBMAYQhKBminCaQjiDSgiAjQAQhFAFgLg");
	this.shape_279.setTransform(38.2406,29.5602,0.1107,0.1107);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#978D7B").s().p("ABThQIDTh4QB+hDBdgaQgwAthRAyIiMBSQjsCKiJBNQjRBziuBQQDdihF2jVg");
	this.shape_280.setTransform(8.9902,39.6009,0.1107,0.1107);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#2D2A28").s().p("AA/BaQhCgPgKAAQgWAAgdAJQgbAJgIAAQgdgBgThlQgIgmAhgXQAcgUA0gEQAvgDAuAMQAxANAVAYQAXAZAFAsQAFAxgaATQgJAGgSAAQgQAAgWgFg");
	this.shape_281.setTransform(20.9962,34.0389,0.1107,0.1107);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#678992").s().p("AEqE/QgmgbgOgIQgygdhcg7Qhhg9gsgaQgCgXASgBIABAAQgGgIALgMQAcgJgZgXIgogdQhXhEgzg0QhHhIgmhJQgvAIgHgXQgGgWAmgdIAhAWIAhAWQgBAbASAXQALANAaAZQDUDqFYEVQgMAMgPAAQgOAAgQgJg");
	this.shape_282.setTransform(-15.8511,-40.2908,0.1107,0.1107);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#DDD4C0").s().p("AgvBMQiOgfAdhUQAQguA5gLQA0gKA+AYQBAAYAmAuQArAzgHA9QiJgIhLgQg");
	this.shape_283.setTransform(-59.434,42.2427,0.1107,0.1107);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#C5B498").s().p("AhTBOQgdhAgSgtQBMAGBChCIA2g1QAhgdAggLQAAAKgUB4QgOBVAOA2Qg0AWgbARQglAYgbAlIgzhrg");
	this.shape_284.setTransform(-51.0825,46.1268,0.1107,0.1107);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#614F3B").s().p("AiUBAQgogsgbg2QgQgigbhLQARAVAmATIA3AaQAfgiAXAQQAXARgMAtIARAUQAOASASAJQBXAqA7gSQAZgHAjgVIBIgrQAWAagKAQQgEAIggAXQh/BYg5AMQgRAEgRAAQhNAAhJhQg");
	this.shape_285.setTransform(-44.3498,50.4973,0.1107,0.1107);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#38342F").s().p("AgjCWQhggiAOhJQAHghBGgfQBUgmAJgKQAKgKARguQANgjAagHIAAFHIABAAQgdAIgeAAQguAAgygSg");
	this.shape_286.setTransform(-36.9335,52.2137,0.1107,0.1107);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3C7DAC").s().p("AC8FSIgKgTIgMgYIgLgiQgGgXgIgPQglhGiQjIQiFi4gfhKQgFgLADgMQACgMAKADQCHBQBnCtQBJB7BIDIIASA2QAHAigaAMg");
	this.shape_287.setTransform(15.9778,-5.1206,0.1107,0.1107);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4F4843").s().p("Ah4BRQghg4AEgVQAIgtBCg7QBDg7AygEQBOBGAfBTIh6BUQhDAwgyAqQACgagig5g");
	this.shape_288.setTransform(27.2626,15.9078,0.1107,0.1107);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B9AD95").s().p("Ah2AFQAJg6ARgcQAohBCcASQAXALAHAmQAGAigIAtQgJArgSAfQgVAigYAEQgxgHgyAFQg4AFgoASIARiAg");
	this.shape_289.setTransform(2.4052,28.0929,0.1107,0.1107);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DAC6A7").s().p("AiFB7QgTgVAGgaQACgKAvhhQAvhlAHgEQANgIAkADQAtADALgCIBXAhQgUBjhLA8QgvAmh3A1IgVgUg");
	this.shape_290.setTransform(-47.4112,38.8642,0.1107,0.1107);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#CDBA9B").s().p("AgeCgQgngUgMgcQgJgVgBgzQgChMgEgnQAJgdANAdQA1AOAXgwQAJgQAIgfIAPgzQAEADAbAAQAbACAHASQgsBwADBSQADA6AmCLQhbgaglgVg");
	this.shape_291.setTransform(-47.3352,24.8554,0.1107,0.1107);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#423C36").s().p("ACIDgQgqgBgdgaIkPl9QBLg+AsAlQAbAXAyBOQBfCeB6CTQgdAbgpAAIgBAAg");
	this.shape_292.setTransform(-2.3679,-11.2925,0.1107,0.1107);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#34312E").s().p("Ah3DwIBBgsQg0g1AXgkQAEgHAZgdQAXgZALgXQAyhnAuifIAsDOQADAXgZAWQgZAXgSgPQgCgBACgWQABgTgNABIghBAQA/gPAYA/QAXA9ggAuQgOAUhRANQg6AJgoAAIgOAAg");
	this.shape_293.setTransform(-11.3113,-31.5902,0.1107,0.1107);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6B4533").s().p("AiOBxQglgThBg0QhOg+gngZIADgMQACgIAGgCQA3ACCFBDQB/BCA1gFQA8gGBfhLQA0gpBahKIAAABIAmA4QAPAfgJArQhsgXgnAXQgMAGgbAYQgdAbgbASQhdA9hOAAQguAAgqgVg");
	this.shape_294.setTransform(-12.2653,-45.1024,0.1107,0.1107);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#877C6F").s().p("AguC6QgdhLgOgnQgYhDAKg7QAOhXA3goQAhgZBVgsQAqAfgmApQgzAsgHAQQgdBAAgCbIAXBlQAKAtgEAEg");
	this.shape_295.setTransform(-62.6531,42.2578,0.1107,0.1107);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3B3733").s().p("AhcBYQgtgIgMgKQgDgDgLgqQgKgpABgGQAEgRA/gYQBCgYBBgHQBQgHAlAaQAuAfgYBKQgVBBiJACIgGAAQgvAAgugJg");
	this.shape_296.setTransform(-11.1835,-9.192,0.1107,0.1107);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#2C2927").s().p("AgSAWIiehKQgfgNgLgIQgSgOAGgfIHKAsIAAAAQARAPgrBTQgrBTgdAMQgzg1hhgsg");
	this.shape_297.setTransform(-13.2312,31.3702,0.1107,0.1107);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#493C2C").s().p("AijCuIABgsQABgbgCgQIAHgzQDqhPhDiZQARgDAkgKIAigJIAWAAQgCAEABAQIABAYQgFA+ARBmIAgCiIgMALQgIAHgCAEIhYABQhVAsg3AAQg3AAgWgtg");
	this.shape_298.setTransform(-46.8537,39.4889,0.1107,0.1107);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C4B295").s().p("AgDBaQgUgYg0gIQgNgChVgFQg6gDgZgNQghgRAGgqQARh3CSA5QAiAOBPApQA+AgAUADQAqAFAfgUQAqgcADgBIAAAAQAGgBAPAAIAXABQASAFALAHQA8AviCAmQhLAWhnALQgBAPgGAAQgFAAgJgPg");
	this.shape_299.setTransform(-45.7256,36.0614,0.1107,0.1107);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#A49985").s().p("AgxCJQg2hYgJgoQggiJAPgtQAYhDCCAOQhJBmAlBsQAhBlBwA7QABALgBALIAAAAQgLAFgpAfQgjAagPABIgBAAQgYAAg4hcg");
	this.shape_300.setTransform(52.8323,41.7512,0.1107,0.1107);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#3D7AA4").s().p("AAWBfQhoidgzgLQAZgdAThAQAQg2AGgyQBmBrA9CYQBFCwg5BqQALgfhhiRg");
	this.shape_301.setTransform(27.9998,8.8782,0.1107,0.1107);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#292724").s().p("AA1CdQgehTgRgcQgXgngzhHQgzhKgXglIEFghQgBATABAuQACArgCAXQAgCPgKCMQgLADgKAAQgpAAgag0g");
	this.shape_302.setTransform(0.544,-12.3564,0.1107,0.1107);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#AC8958").s().p("AikCkQgOgEgIgpQhLg2gWhGQgXhIAhhWQAOAKA2BFQAqA1ApALQAVAGA4gLQA+gLAZACQAVABBoAQQBMAMAygGIAABBQgogOhzARQh4ARgRgDQghgbgcgRQg3gggbAmQgWAfAfAYQAPAMAUAJQAAATgLAIIgMAFQgcAXgMAAIgDAAg");
	this.shape_303.setTransform(-44.9022,21.2371,0.1107,0.1107);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#60241D").s().p("AkQBcQAogiBhg4QAKgGAagpQAVggAZgIQACAHAGAHQAGAGAIACQgPArBPgVIABAAQAfAeA0geQAXgNBAg4QAygsASADQAbAEgDBUQh0BRh3A6QiaBLhkABIgHAAQiOAABGg8g");
	this.shape_304.setTransform(-32.358,-28.9494,0.1107,0.1107);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#93887B").s().p("ACvFEIghglQh1h0hWiaQg7hmhWjNQALgEAagcQAagWAZATQAaA4A9BuQAlACAKAYQAKAXgPAmIBfDFQA4B2AuBNQgDAPgKAAQgHAAgNgLg");
	this.shape_305.setTransform(39.4473,37.6292,0.1107,0.1107);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#918878").s().p("AjlBMIgggrQArgTBEgOIB3gVQCPgdA/hFQBABSAXBGQhRAoiOAUQihAQhKALQgNgQgUgcg");
	this.shape_306.setTransform(-0.0763,-17.9312,0.1107,0.1107);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B9A88D").s().p("Ag4AuQgbhBgTg+QgSg7AEgIQACgEA3ggQA4ghAEAAQBKgBAHBXQADAvgHBJQABALAPArQAPAvAFAaQARBbhDALIgEAAQguAAhGisg");
	this.shape_307.setTransform(-50.0048,50.1057,0.1107,0.1107);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#514941").s().p("Ai5A6QAAgWgNg1QgMgxAEgcIFSAAQArAAAQAzQAJAcAIAzQgkgGg/ARIhuAhQg2APgoAAQg+AAgcglg");
	this.shape_308.setTransform(-52.6572,59.1479,0.1107,0.1107);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#B3A793").s().p("AgwEAQgYgCgLgeQgWgjAAgIQgDgjAUiHQATiHAMgcQAMgaA0ggQAegSA1gbQAVAJgGAkQgDATgKAjIgZCeQgPBegRA/QgFATgEAgQgJAWgjgIQgFAggXAAIgCAAg");
	this.shape_309.setTransform(0.1334,47.8735,0.1107,0.1107);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#7F7363").s().p("AjDCZQANgmACg1QAAg3ACgYQAIhVBUgcIAnAfQgYBkADA3QADAvASgLQASgKAJg3QALhBgMhUIArgeQC7ACgOCXQgFA1gbAzQgaAwgRAAg");
	this.shape_310.setTransform(2.0985,32.7125,0.1107,0.1107);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#4380A6").s().p("Akmk8QDYA5CODEQAuA/BFB4QBQCOAkA3g");
	this.shape_311.setTransform(12.6157,-7.7797,0.1107,0.1107);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4A433D").s().p("AkbDTIAKggQAGgUAGgNQALgaAYgjIAfgxQAsgUCJhtQB2hfBHgPQAPgOAJgBQALgCAIARQAjAJgBAaQgBANgFAOQAGAFAQgBIAQAAQACACgXAnQgYAngDACQgOAIgmgCQgqgCgQAGQhsArhCAWQgUAHgVATQgaAYAdAKQgNAIgdAfIgzA2QgxAuggAAQgNAAgKgIg");
	this.shape_312.setTransform(-29.8097,35.4499,0.1107,0.1107);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#2B2928").s().p("AAFC0Qg5gBg0gQQiSgqA/hmQAEgGCmhPQClhQAVghQAYAJAKAuQAJArgKALQgIAHgwgRQgwgRgFAFQgJAXAXAXQAZAZAAAGQAAAHgZAVQgbAYgFAQQgFATABAyQACAtgCACQgKALgvAAIgJAAg");
	this.shape_313.setTransform(13.4034,32.7738,0.1107,0.1107);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#2D2A27").s().p("AjrEBQgNgIgZg8IgghRQBehvDAhjQAtgYB3g4QBogxA5gfQgGATgDAZQgEAVgVATQhCA6jGBiQjEBhhJBCIBXgBQAogmCWhXQCfhaASAPQACABACASQACAQAIAEQAGgDADgKIACgKQAIgbAOAbIAAAsQATAUgTARQgUARgXgLQgBgHABgPQAAgPgBgGQgjAKgRBWQgRBWggALQgqAOhagXQh0gfgVgBICZBXQgbgHhVAUQgtALgbAAQgUAAgKgGg");
	this.shape_314.setTransform(-3.2216,40.6985,0.1107,0.1107);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#13110E").s().p("AiyB3QgIhEgEgSQgKgugWgcQgrgCABgOQAAgNAqgPQCbgmCagFQBAAPAPgEQANgDgagOQhGgmhDABIgTgtQgMAdgMABQgNAAgHgeIAAgVQAZgDA0gQQAzgMAuAJQBSAPAlA9QAnBAgmBOQgiBFiogjIh0gdQg3gNgIAIIAVExQg1gjgMhug");
	this.shape_315.setTransform(-43.0539,38.0094,0.1107,0.1107);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F5F2E7").s().p("AhhCGQgqhcgPg3QgbhmA3gkQAfgUAzACQAvACAxAUQB0AwgEBRQgrBchJA7QguAlgjAAQgkAAgcgkg");
	this.shape_316.setTransform(-51.4454,44.284,0.1107,0.1107);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#6D655B").s().p("AF/DwQgzgEhXg3IiIhVQi6hZhegtQinhThihNQAEgCAHgSQAKgRAPgEIA0AGIMQHBIABAAIgSANQgSALgQAAIgCAAg");
	this.shape_317.setTransform(43.9224,32.0099,0.1107,0.1107);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#71665B").s().p("AkJBgQg7g7BIhEQAtgsChglQCWgjBPAGQABAJA1AmQA1AmADAYQgjgFg2ARQhDAUgSABQgMABgWgMQgVgNgNACQgSAChUAXQhYAYgEAFQgIALASAvQAQAvgEAEIgTABQhMAAgxgvg");
	this.shape_318.setTransform(-75.8351,43.9506,0.1107,0.1107);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#3C3633").s().p("ADOCwQgWAAgIg/QgKhHgNgJQgZgShxAbQh7AegegIQgigJgcgwQgbg1gOgRIAggwQDAgKC4g2IAyAZQATA7AFB7QAGCQgpAAIAAAAg");
	this.shape_319.setTransform(0.4261,-15.897,0.1107,0.1107);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#79ADCD").s().p("AiXFXQABgVgMgtQgLguABgbQAFhmA5ilQBCi/BCgjQAZg1AbgNQAggOAvAkQAuAMg6BKQgmAygqAVQgtAXg6gFQAqBigVCHQgNBZg0CSQgOAogHAGQgEAEgHAAQgNAAgUgRg");
	this.shape_320.setTransform(-45.0413,11.993,0.1107,0.1107);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#37332F").s().p("AlGBfQgfgGg5hGQg3hCABgUQAAgPAdgLQAXgIAYgBQA6gDBUA/QBbBCAyAHQBeANCbgNID8gXIBNBCQh2gXkfAhQiuAThrAAQhEAAgpgIg");
	this.shape_321.setTransform(-43.2227,53.4078,0.1107,0.1107);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#1A1914").s().p("AgFAdQjgjZhMhAIALgSQAHABALAHQALAJAEABQAuA1BxAfQCCAkAwAhQBMA1BGBwQBHBxANBcQhkgtjTjFg");
	this.shape_322.setTransform(-12.403,-39.1888,0.1107,0.1107);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A38D6C").s().p("AiDBTQg2hTgIhAIBBAAQgGgvAGghQAEgcASgtICCAVIgrAhQAqATAGALQAFAJgTAJQgbALgPAHQgbAOgIASQBWABAYACQBFAFAmAOQBRAghUA4QhzA+gYAXQgNAOgPAdQgRAjgIAKIhbiHg");
	this.shape_323.setTransform(-42.6448,41.898,0.1107,0.1107);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#302C29").s().p("AiPABQgehsgBgrQC0gMBAAcQBhAqAICfIkxBYQAMg+gZhcg");
	this.shape_324.setTransform(-46.7319,60.007,0.1107,0.1107);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4D4943").s().p("AhGCBQgegbgTgOQhIg0hCAxQgpgpC7hfQBBgiBKgfQBCgbASgDQAogHAmAqQAnAtAlgBQgBABAAARQgCASgNAIQkKCogQADIgDAAQgMAAgXgTg");
	this.shape_325.setTransform(13.9061,-26.0059,0.1107,0.1107);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#2B2927").s().p("AiYELICOoMQAKgRA9AMQBHANAVgHQgSAqgbBwQgeB9gSA1QhBDAh8AAIgXgBg");
	this.shape_326.setTransform(21.9203,16.4629,0.1107,0.1107);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4F3F2D").s().p("Ag/DYQABgWgFgHQgHgLhHgOQhSgQgMgFIAAgVQgUiMDVhYIADghIAAhtQBlAHBiCCQBeB8gJBiQgHBIhQgrQhghCgjgJQgogIhIAFQhDAHgogNIAABCQBagHBNAKQBPAKBRAfQAPAShgAjQhQAdgjAFQgBgHADgcg");
	this.shape_327.setTransform(-40.4455,42.9884,0.1107,0.1107);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#403B36").s().p("AmAA1QAZgBBJAPQA5AMArgNQAcgJBohbQBihXATAAIE9AAQAXAUhUA6QhRA1gXAAQgdABgXgnQgZgsgUgFQgBAMASBDQAQA4gNAPQgKAMhOAOQhSAQhZAFQgjACgdAAQi3AAgQhFg");
	this.shape_328.setTransform(-41.2635,51.9461,0.1107,0.1107);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F7F8F6").s().p("ACdEyQgSgBgKgOQgNgSgMgiQgNgogJgVQgehOg9gkQgpgYhKAQQgbAGgKgEQgNgGAAgfQAKgiARiJQAPh9AEgGQADgDAtgJQAzgKAIgCQAFAQAMA7QAJAxAKAYQAGANAUAKQATALAEAJQAWA+AhCRQAjCXAVA9IgMABIgGAAg");
	this.shape_329.setTransform(-34.6432,65.8328,0.1107,0.1107);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EFCE63").s().p("ADPDpIhthzQhKhNh9h4QigiYgsgrQAPgJAdgWQAYgTAOgGQAqgTA0ApQBdBJCODmQBOB9B6DZQgggghDhIg");
	this.shape_330.setTransform(25.3078,-1.2346,0.1107,0.1107);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#322D2A").s().p("Ai4D7QgJh0AhgtQAng2BwASQADgKgMgGQgNgEAAgBQgogTABgiQABgiAmgWIAKgHQAIgIgGgGQgagbhRACQhzAEgJgCQgEgDATgcQATgbAKgHQDAgbDIgmQALACAcAYQAaAWAAAGQAAAGg2ArQhIA4gkAjQiLCIBpA+IgOAUQgRAUgSAIQghAOhFAXQhHAYgNAAIgEAAg");
	this.shape_331.setTransform(10.1894,-21.7961,0.1107,0.1107);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#7EABC5").s().p("AsBmTQA+ANBoAiQBfAhBDAdQFhCFFDDYIAsAVIHBEDQA/AjggAig");
	this.shape_332.setTransform(-74.2304,18.0859,0.1107,0.1107);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#9E9282").s().p("ACNDCQg8gQjXibQjCiMhLhGQAZgUAaABQANAAAmANQBPAaCVBnQCVBoBSAdQAvARBQALQBYAMAfAIQgJBGhkAQQgdAEgcAAQgxAAgwgNg");
	this.shape_333.setTransform(-12.7656,-16.6947,0.1107,0.1107);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#A69B88").s().p("AF/EqQg8jwhVi8Qjon9lHA2QgYAEg1AfQgqAYgcgJQDwjuD9DxQBgBcBZCYQBIB8AzCIQA1CKAiCmQAYB3AZDCIgVBBQgQifgxjFg");
	this.shape_334.setTransform(53.4705,36.8333,0.1107,0.1107);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D8C4A1").s().p("AAHDSQhUgNgDgDQgPgPgLjLQgKjKALgNQAgAcBIgNQAjgGAigJIABAAQARALAHDRQAIDiALAhQgTgShWgMg");
	this.shape_335.setTransform(-47.0059,32.4689,0.1107,0.1107);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#82796D").s().p("AjThHQgKgbgMgRQgngsBShLQgngdgEghQgEgcAYgVQAWgUAfABQAjACAXAdIAAAAIBBBCIhXAKQAXAdAyARQBFAZAKAGQgBCnBpCnIgmAkIgQATQgOASAIAHQAGAFBSARQBQAYAGApIiYAsQiSkKifiqg");
	this.shape_336.setTransform(-27.7037,-43.85,0.1107,0.1107);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#292522").s().p("Ag4DZIAAABIhXm0QDHgNA5AxQBFA7hSC1QgTApgzA+QgxA9gZAAQgHAAgFgFg");
	this.shape_337.setTransform(-3.0693,49.1569,0.1107,0.1107);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BBB29D").s().p("AhtBpIjbiYQBIADDWgxQDNgwBBAHQAgADAaAdQAPARAZAmIAAAAQAVBLiqA4Qh1AniCANg");
	this.shape_338.setTransform(-1.7551,-18.7298,0.1107,0.1107);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#AC722B").s().p("ADtFRQgwgphLhVQhRhbgdgaIjXjEQiEh2hZhDQgjAZgehFQgsALAWg3QABgBgCgYQgCgTAOABQBAAoBTBMICJB9QALAJAVAFIAWAHQCgBeCkCOQCaCFCFCaQAOAHAYAOQAXAJAagIQg0Aeg2AAQhZAAhghSg");
	this.shape_339.setTransform(-13.8954,-40.2478,0.1107,0.1107);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#15232B").s().p("AJzBLQj/jEkBh7IgQgyQgWgbhDgrQg6gkgVgvIw1AAQAPgWApgCQAWgBArADQCigBFbgIQEzgDDHAMIJWGgQBgBRDFCbQCqCNBfB8QgDACgHAIQgIAJgDACIgwALQjajkjoixg");
	this.shape_340.setTransform(-66.1906,19.2966,0.1107,0.1107);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#44403B").s().p("AhsBvQgmAAgthNQguhKAKgsQBQgSCTgHQCugIAYAgQAQAWAJBHQAGAxABA2g");
	this.shape_341.setTransform(-25.3469,-27.0232,0.1107,0.1107);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#453F38").s().p("AhLBiQh8hKgdi5QDHgOBmBMQBiBJA6C/QjQgKhgg5g");
	this.shape_342.setTransform(-55.3113,52.6408,0.1107,0.1107);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#38729A").s().p("AgGgMImikkINRGKQAEAEgRBfQgSBmAAAPQijiTjtirg");
	this.shape_343.setTransform(-53.8652,19.6579,0.1107,0.1107);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#618C9C").s().p("AC9FFQgggCAHghQh4jbitiKQi1glhdiAIC6A2QBmAXBfgMQAygGA/grQAjgYBCgyQA5glArADQA3ADA3BCQgTAKhKgEQhIgFgFADQgDABhABWQhBBWgWAMQgFAYApBAIA7BeQAOAeAOBIQASAyAvgcQACAAAKgjQAOgdAWAbQAOARgcApQgaAkgZAPQglANgWAAIgDAAg");
	this.shape_344.setTransform(-10.8297,-39.4,0.1107,0.1107);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#393531").s().p("Aj2kzQBzgqBFBBQAqAnBLB/IBoCXQBVB+ACALQAFAUgiA1QgiA0AHAeg");
	this.shape_345.setTransform(10.8723,18.4831,0.1107,0.1107);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#DAC7AA").s().p("AAuCeQhzAAgNgIQgNgIg3iVQg5iZANgMQC+gSBdBaQBWBTAXDBQgigSh2AAg");
	this.shape_346.setTransform(-57.1366,48.6517,0.1107,0.1107);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#D3563C").s().p("AjYC8QgJhTAPg9QAOg7AuhEIhCgLQBLhAAxgWQAugVArAJQAdAFA+AfQBVArAvATQgaAYhKAgQhGAfgbAfQgWAbgSAsQgVAxgJAMQgbAohIAAQgfAAgngIg");
	this.shape_347.setTransform(8.3624,-26.9078,0.1107,0.1107);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#312D29").s().p("ApEExQCMhMFzi/QFOivCQhrQAsghAJgJQAagcABgjQAdANAhAjQAoApgOAUIxNJOg");
	this.shape_348.setTransform(8.767,33.2023,0.1107,0.1107);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#692820").s().p("ADjBzQhDgfgggNQg4gXgogFQgqgFgvAEIhMALQhaALhRgiQhLgegcgeQgngoALg/QAxgBBuAhQBcASAWhHQBGBJBeAmQBpAqBagWQAjAXBdAwQBTAxAeA1QgWAFgYAAQhHAAhegog");
	this.shape_349.setTransform(-43.6015,-10.2915,0.1107,0.1107);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#835A37").s().p("AjDF4QAygQA6ADIBsANQAFgMgVgQQgPgNgLgDQgvgbAbh6QAXhwAogsIAlAOQAXAEAFgeQALg3hVACQhfAPgVACQgcAGgLgCQgWgCAMgeQAWg1BnALIBUAMQAwAFAagIQgEgdg9gOQg8gNgCgTQgDgaAjhXQAWg4Aeg9QAggcBMAGIgFDJQgOBUg1DkQg6D9gUAcQgDAFglAIQgoAIgpAEQgVABgSAAQhPAAgCgjg");
	this.shape_350.setTransform(-1.0422,23.2317,0.1107,0.1107);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#121415").s().p("AHzCNQlCh3kZhZQmRiLmXg6QANAXAIAVIhtgXQhCgOgrgHQAgADAIgCQASgDAIgUIADgaQACgSAQgVIBKgQQISBhHNCMQInCnGKDUQAyAbA5BHIABAAQAcAJgcANQlwiPjlhVg");
	this.shape_351.setTransform(-6.4016,2.0396,0.1107,0.1107);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#73A7C4").s().p("AHfEvQiiiOl7icIkjh3QiehEhghAQg7gngEgHQgIgOAUg2QALAJAXAFQAaAGAGADQBNAKA+ASQBSAZApAiQCeA3ChBMIAdBBQCMgIAMBUQEGCfDxC0g");
	this.shape_352.setTransform(2.864,-1.9789,0.1107,0.1107);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#2A2725").s().p("ACtBrQh5gChGgHQjdgWh5hqICDhMICVgEQBegDAyAIQAiAGAoAaQAXAPArAfQBPAzBNgrQgDAVACArQADAvgCAUQgugDiNgCg");
	this.shape_353.setTransform(-39.5922,58.0688,0.1107,0.1107);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#262321").s().p("AnDDZQCDhJD8ihQDkiLCug+QgzBBhwA+IheAxQg5AegiAWQgbAJgOAIQgcAPAaAWQADADAmgMQArgNANAAQAbgBBRACQBEABAogEQAdgDB1gfQBZgNhGBRQg0A+jkATQj6AKhEAJQgWAChxAdQg8AOgtAAQgSAAgQgCg");
	this.shape_354.setTransform(4.1967,53.5162,0.1107,0.1107);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#2E2A27").s().p("AgCFWQgegggKgeQgUg5gjinQgjilgFg9QgFg3AXhXQAbhnAoAoIAAgBQACADADAnQAJAqAdAPQAXAMA3gBQA0gBABABQAFAFAHBpQAHBlgCANQgHA2hLCNQg5CJA4BiQgfgQgbgeg");
	this.shape_355.setTransform(-36.2296,41.9578,0.1107,0.1107);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#24201C").s().p("AHVGwQgZgTg+h5Qg5hvg0gXQgTgSgXhHQgXhHgHgIQgFgFgagHQgcgHgKgIQi/iXiAhDQjJhqioASIA1gvQAjgfAVgJQBogNB/AyQBPAfCFBNQgkgcAeg0IBAAKIBCAMIgsAhQAOASBIBBQA8A3ANAgQAJAWgFAeQgEAeACAGQAdBLBVB3QBaB9AdBCQApgGgLgxQgGgbAAgIQABgQASgDQAJAYAMBBQAMA7ALAaQgRgDgfAXQgWAQgLAAQgEAAgDgCg");
	this.shape_356.setTransform(60.9651,23.2277,0.1107,0.1107);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4B3F2F").s().p("AAFDPQgXgBgdgSQgdgRgEAAQgKgBgbANQgkASgLAEQg8AVAChAQAUgLA5gvQAzgpAggOICng8QhGgIhpg+Qh1hFg5gOQAjgFBIgRQBGgRAjgFQB2gOBKBPQA5A7ANA0QARBChigYQgBAVAkAFQAoAEAJAbQAnBthXAaQgdAJg7AAQgnAAg1gEg");
	this.shape_357.setTransform(-38.4607,47.8352,0.1107,0.1107);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#423C38").s().p("AALJEQidgoiMiwQiQi0hCj6QAmAxA1BeQA7BqAcApQCSDQCTA7QC+BMCOjUQBqifAekKQAXjPgYj3QgFg1AagNQAaDEAFBlQAJCdgUCPQgvFRiICTQhcBkh3AAQgmAAgogLg");
	this.shape_358.setTransform(53.5343,49.8861,0.1107,0.1107);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#7CABC6").s().p("AgIgMQjrirlvjmIgBgtQCtAKBDAMIABAAQBgg0gJBgQAIACAOAJIAWAKQBtBzFDESQEaDvCICpQADAHgcAJIgoAQQjrjtk/jpg");
	this.shape_359.setTransform(-59.5413,19.1763,0.1107,0.1107);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#695F53").s().p("AjiCZIgWhYQAYhNCBgEQghiWBjgzQASgEATADQAKgCgEgpQCKCCA1BoQBHCLgsCWQkIhhjCgMg");
	this.shape_360.setTransform(22.7386,-24.8224,0.1107,0.1107);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#312D2A").s().p("AggEQQg6gwgshCQgshDAEgiQADgeA7gnQBCgtAOgcQAHgQAGgrQAFgnAOgXQAMgWBCgsQBCguAfgGIAAHUQAAAEgLATQgMAUgCAJQhHAWhEgzIg3gsQghgZgegIQAWBGBVAtQBMApBNgDQgQBRg5ABIgBAAQgvAAhAg1g");
	this.shape_361.setTransform(55.9986,48.3991,0.1107,0.1107);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#6A6259").s().p("AjfJOQgoAGgEgQQACgfgCgZIAbheIE+lEIAvADQA+A3Adh0QAQhAAChnQAFimgfhXQgdhRhEgcQg5gZhsAGIjqAVIBBhYQA1gECWgVQCGgKA5AtQBRBAAaEBQAVDPgTCWQgFAmgUAcQgaAfgQAWQggAjghgJQhEBPhfBbQg4A1h2Bpg");
	this.shape_362.setTransform(38.6634,24.2466,0.1107,0.1107);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#2D2927").s().p("Ah5FKQgMgKgGgTQgRg2gGiCQgFiAgTg5QgDgMAJgIIAPgKQAfgDgCAUQDAjNB/g0QgCAdAGCOQAEBvgNAzQgHAZh7CdQh5CdgQAEIgJABQgNAAgKgJg");
	this.shape_363.setTransform(-27.2406,6.4872,0.1107,0.1107);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#33302C").s().p("AEAEdQhlgDg8gLQh0gVjYiUQhghBhqhYQiRh3gRgyQgCgIACgZQADgYgDgJQAPAOAdAeQDKBPC4CgQBrBWBdATQBpAUBzg7QAVAFAWAbIiYCOQBrgQBMhIQBWhSgxhZQAKAQCEBPQB6BLgZAYQgLAChVAJQhLAHgEAEQgEAEAPAjQAJAjgiAKQgeAJhGAAIg2gCg");
	this.shape_364.setTransform(-11.0552,-16.0878,0.1107,0.1107);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#4B443E").s().p("AhIJ5QgmmeANmvQgehRAKhdQALhlA4g6IAOgNQANgOgGgRIhXgVQAsgeBBALQAhAGA2AMIApAYIhCJpQAUBmAAAzQgBBTgmA9QAkAQAIAyQABBGhDBTIgMAoQgHAXgCAYg");
	this.shape_365.setTransform(35.3044,26.4291,0.1107,0.1107);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#544B42").s().p("An3AgQgQgEgWgOQgWgOgEAAQCvgYEfAUIDpARQCGAJBigCQAggGAYgcQAKgNAcgvQAWgnAUgQQAdgZArABQgHAbgFAyQgGA5gEATQgEAVgRAvQgMAuALAmQg1ACg1AAQm6AAnfh6g");
	this.shape_366.setTransform(-53.5013,13.8667,0.1107,0.1107);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#62251E").s().p("Al8DEQgOiPA0iBQA0iABrhbIAAAAQBYgoAHAvQAFAlgsBQQgZBOALAeQAOAnBLgoQAphwBHg8QBThGBuALQANAFA4AMQApAJAVASQgGAUgJAFQkVCcAQAPQAIAGAGAQQh6BMgtAfQhWA7hJA/QgMALgmAtQghApgSANQgNAIgLAAQgnAAgMh2g");
	this.shape_367.setTransform(8.0014,-24.6856,0.1107,0.1107);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EBD6AC").s().p("AmcB8QhVgeA2hYQAohABJg0QBLg1BKAiQANAGA2AfQAtAaAiALQBJAYCXAXQChAYBEATQAZAHAVABQAFAEgYAmQgPgBgHABQlTAohcAIQiCAKhdAAQh9AAg4gTg");
	this.shape_368.setTransform(1.0475,11.9449,0.1107,0.1107);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#7E7366").s().p("AmqCpQA1gsBag7QCSheD4h+QE/ihBBAZQAFACAJAQQAJARAEAEQAXAZACAYQACAUgNAKQgMAKgRgIQgSgKgLgcIgsA6QkABtjoCfIEFhKIA1AfQAvgIAIAkQAJAlgqAXQiSgJkKA/QilAngtAKQh1AYhaAEQAog8BRhBg");
	this.shape_369.setTransform(17.109,-24.933,0.1107,0.1107);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FCFCFC").s().p("Ag/CuIgKgiQgKgkgOgQQg2hEhCgQQgsgKhsAGQgGgFAMhTQAKhRAGgFQADgEBNAWQBWAYAUABQAtAECPgPQCDgOAYAHQAtANBABuQAiA6AvBiQgugcjDAlIiCAbQgsAJgOAAQgEAAgCgBg");
	this.shape_370.setTransform(-7.0992,-10.7963,0.1107,0.1107);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#7AACC9").s().p("AEKCbQhxgXhLgcQhSgeixhSQjAhYg0glQgQgKgIgHQgMgKAAgOQAfAPBEgRIBMgUQAkABBRAVICUAmQC7ApAxg4QAiguA+A9QAiAhAxBNQArBCANAlQAVA8gQA8Ii9gqg");
	this.shape_371.setTransform(24.1365,9.7445,0.1107,0.1107);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#2F2D2B").s().p("ABUDyQgwjVhrjzQgqhggcgzQgbgzg4hWQgqgvhVhMQgqhDAXgYQAUgVA2ATQA1ATAkAoQApAugOAtIAAABQAogUAHAPQAHAPggAhQA2CSCLEBIDhGbIBDCAQAsBXAHAoQALA6hrAuIhZAiQgxAUgTARQAQjpg5j5g");
	this.shape_372.setTransform(-28.2885,-38.879,0.1107,0.1107);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#2D2927").s().p("AjTGwQgBhCACgxQACgoAejYQAYiqgKhMQgCgWgYgOQgZgPgGgVQgIgdgFgrQgFg0gDgPQgOhLg+gzQAMACA3gEQAugDAPAJQAIAFA9B2QBGB7A1AgQAMAIAgACQAcACAKALQAKALBjCbQBjCZAGAOQALAcADAdQACARABAoQAEA1gBAGQgCAqgXgCQhqjmhtixQgVgqgRgZQgggvgUAUQgZAXhEEwQhLFKgSApQgLAAgCheg");
	this.shape_373.setTransform(9.2535,21.0943,0.1107,0.1107);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#6E96A9").s().p("Ai1DHQjLhtiliQQhOhFgggnQgqg0gihQIAAgWQBtBwB3BbQBsBTCRBVQA7AjBTA4QBIAnBlACQBkABBog6IBQgsQAugXArgHQDBgeA6AlQBIAvgeC5Qg2gJgBhqQAIhngHgBQgWBAg6ADQhJgHgnAKQgZAHhYBMQhUBJg2AKQgZAFgdAAQiNAAjYh2g");
	this.shape_374.setTransform(-13.6868,-45.0047,0.1107,0.1107);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#332E2B").s().p("AE8DbQgOhhhwAGQhdAFhRA5QghglgagQQgggUgsgHQgIABgOgBIgWAAIjEh3QCZkJDTBGQC0A7CQD+QAOAZAGAlQAHAoAEAIg");
	this.shape_375.setTransform(51.5387,33.1805,0.1107,0.1107);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#2C2826").s().p("AlDD1QAsgXAKgOQAJgOAqhKQAqhKACgHQAFgVgMgpQgKglAIgPQALgSC9hpQDBhqALALQgEAjBLCJQBFB/gRAcQgMASidBNQiqBTgWASQAHijgKgyQgQhVhkB9QgSAXgZAtQghA6gKAOQg2BUhFAOQgHgjAdgPg");
	this.shape_376.setTransform(8.348,36.6921,0.1107,0.1107);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D3C3A7").s().p("AijEuQhggIhzgtQiVg8AKhIQAVgbAIAAQAGAAAXAMQAbAJCUBMQCMBDAUgRQATgQglgeQgxgogEgHQgJgSgZhgQgZhgABgOQACgwBuhWQBrhTA2gEQA7gFC1ARQCmAPBSgMIABAAQAHAkgXAIIg1AHQhTANhvACIjEAAICvDaIguARQgSgcgogYQglgXgkgGQgmgHgLASQgMAUAcAuIgJBJIhshsQgDAaALBCQAPBVACAaQAJB8hYAAIgLgBg");
	this.shape_377.setTransform(-43.4599,25.4922,0.1107,0.1107);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#2A2625").s().p("AAbC0QhegYhegoQhWglgLgRQgLgRgFhVQgGhcgKgZQBjAdCDgaIBvgZQBFgQAvgGQgWA4BGB5QASAeAhA1QAZAqAAAOQABBXh1AAQg7AAhZgWg");
	this.shape_378.setTransform(49.3192,43.6462,0.1107,0.1107);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#EECD6D").s().p("AOEENQgHgBg1gLQi+gqjshHQhbgalGhnQoYinlOg9QgrADgPgBQgZgDAIgrQAjgUChAPQBeAIB9ATQAcAHAQgFQATgHAKgaQBRAKBABBQJ9BtJVEbIAgAsQgNAYghAAIgFAAg");
	this.shape_379.setTransform(-12.7752,1.7188,0.1107,0.1107);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#2D2926").s().p("AmIAXQAWhTgLg8IMngqQhiBPhpBJQiVBog+AQQg1AOiiAHQiWAIhIAZQADgWAeh3g");
	this.shape_380.setTransform(7.2965,46.3704,0.1107,0.1107);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#574F46").s().p("ABBDIQgFgJgGgcQgEgUgJgDQgUgGhBAEQhSAEgPAAQgdgCgRgDQgXgFgSgMQABgcgLg4QgMg9AAgHQgCgfABg4QABg9gBgbIGfgWQAFCgAVBWQAFARARALQAJAGAIADQABAEgBAHQgBAIABADQAvBAgvACQAEAqgEAJQgGAPgkALQglALgbAAQgrAAgPgeg");
	this.shape_381.setTransform(-20.2568,-20.105,0.1107,0.1107);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#73685D").s().p("AwVEMQgJiPAehQQAbhIBCgjQA2gbBpgNQBAgICagOQEGgeIQhAQHQg1FIgcQA9Ayh+AlQkqAbmuAvQnjA2jwAZQiJAMg+AHQhpANg9AbQicBEAHDog");
	this.shape_382.setTransform(24.8038,21.288,0.1107,0.1107);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#35302C").s().p("AJZFpQgJAAgIghIgRhIQgZhognAAQiNgSkDgCQkfgDhugJQj0gVhvh2Qgxg1guhbQgXgwg/iUQA6gFAtA4QAaAgAuBGIAAAAQBNBYALAIQAmAbBcAIQAJAGAkApQAhAmADABQBGAPC3gIQDlgJAnABQARABATALIAQALIqjAAQgEAOAwAQQApAOANAAIPAAAQAHAABUBXQBbBTAvgRQANAQhrA8QhjA3gfAAIgEAAg");
	this.shape_383.setTransform(-51.0742,56.5213,0.1107,0.1107);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#766D62").s().p("AvVG/IAWgVIeAvhQBIBWimBMQhlBEmFDWQmgDkgkgEQgNgCgUgMIjFBtQi0CfjyBlQhgBPhdAhQgfhIgigxg");
	this.shape_384.setTransform(3.551,35.6129,0.1107,0.1107);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#534C46").s().p("AMABzQiriIjvAuIgggrQhegCjIADQjBAChlgDQkngNkgACQgxgJgUgVQgZgaAWgqQDKARGTgPQGkgPC7AMQA9AEBeAQICdAdQC/AeB2giQAOA+gCASQgBAOgLA5QgHA5guAIIgQABQghAAgugTg");
	this.shape_385.setTransform(-45.753,57.0966,0.1107,0.1107);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#74695D").s().p("ANZB/QrshysPA7QhEgEg9gvQgTAkgsgBQgoAAgsgbQgsgcgVgkQgYgpARghIANgVQAkAAAyAlQA1AoAoAFQAXACAXgJIAYgKQBbABEeANQDqAKCQgCQAzAAFzgeQEmgYBxASQANADAUAXQAWAZANADQAeAIAbgLQAOgGATgKQANgFAJAUQALAXAPBHQgbBChcAAQgZAAgdgEg");
	this.shape_386.setTransform(-47.0122,55.4465,0.1107,0.1107);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#5B4832").s().p("AkKGAIgWAAQhGgogGhtQgFhcAlhWIBcgZQDJAoBtgUQCZgcjEiZIgKggQAKg9gQglQgLgdgigYQgngbgTgQQgfgcgMgoQAKgJAyAUQAPAFBdArQCgBHApgUQgZANgNAFQgZAKgXgHQASA/BdgeQAYgIArgSQAhgMAHAFQhIDcgSBaQgkC1AmCNQhmhMhqgnQh3gsh0AGQgQADABARIABAYQAXAaABAvQABArgQAlQgRAmgZAEIgFAAQgZAAgYgqg");
	this.shape_387.setTransform(-41.8366,36.9167,0.1107,0.1107);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#2A2725").s().p("AjsEkQhRgugqhHQgGg0AGgkQAgg9BVAnQAYAMAxAbQAtAXAbAEQgJgehqg7Qhug9gZgvQgOgbgQh6QgPh6ALgMIDxAAQgGAhAGBFQAFBQgBAZQgFB0htgQQAAALANAOQAMANAKADQAaAEA/gZQAcgKBjgvQCzhSA3AOQAIACA6AiQA6AjADAEQAMAUAJBBQAIBCgJAIQgPAPjTASQjOARgvgGQAGARAKBgQALBjgFAHQhcgShFgog");
	this.shape_388.setTransform(46.6954,40.2043,0.1107,0.1107);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#463F38").s().p("AG4DlQgKhXAVg2QgUgPlMA4QkrAyhfAYQgiAJgqAYQgpAXgMADQgYAGgSgWQgUgYgXhEQA0gYAjgUIDwhSQEogBERhFQg6ANiwAMQjJAOgMgPQgVgZAEgRQADgSAcgPIGajpQAVgHApgYQAlgTAgAHQASDRgECiQgEC3ggC7QgZhIgIhHg");
	this.shape_389.setTransform(3.8743,54.6997,0.1107,0.1107);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#2F2B29").s().p("ACZCdQh2gUgmgDQg1gGh2AHIgJgIQgJgHgKABQgKAAiYAXQiAATgJgHQBbjyDlhNQDPhGECBVIAAAAQAJADAiATQCMA+AjCFQgngYhUALQheAMgIgCQgMgDgXgXQgZgYgPgHQhfgmg3gKQhVgPhGAgQgdAMgRAdQgTAfAQATQATAWAVgcQAMgOAOgXQBPgQBOATQBFARBOAtIAWAWIAAAWQgRAqgYAOQgIAFgHAAQgUAAgLgng");
	this.shape_390.setTransform(-22.0729,30.491,0.1107,0.1107);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#D45239").s().p("AAhDxQhwghhKhAQg5AqhjgQQhjgPgdg7QAFgcAlhjQAmhmAKgHQAJgFC5gRQDCgRAdgIQAZgvAugNQAfgJBCAEIABAAQAHAHArBaIA7B5QAIAPAxBKQArBIgNANQhKgFg5hSIguhEQgbgpgZgWIgLDEQhCg+gqgrQg4g5grg3QANBbgQgFQgEgChGhHQgNgNgQAOQgNAMAAAGQAAARCRB1QB2BeA/AsQgSAxhBAAQghAAgugNg");
	this.shape_391.setTransform(-43.5722,-12.8285,0.1107,0.1107);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FCFCFC").s().p("AhDD8QhIgPgZgCQgUgBgfAKQghAKgJAAQhAABAjg5QAIgNAbgiQAWgdAFgLQAKgYANhFQALg9ASghQAKgSBShTQBQhTAKAAQAVAbCBBMQB9BKAKAPQAMATgTByQgTBvgNANQgGAGhlAgQhkAggRABIgUABQghAAgugJg");
	this.shape_392.setTransform(-15.2909,-12.4609,0.1107,0.1107);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#3C769A").s().p("ABOosQAJA5BAEyQAuDdAJCPQgjAhitCdQiBB1hKBPg");
	this.shape_393.setTransform(-25.596,15.6698,0.1107,0.1107);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#1E1C1A").s().p("AHRENQiNg4hBgQQgQgEihgXQiNgUgHgJQgHgJADgyQAEg5gCgMQgQgGgOANQgMAOgCAAQgDAUgIAKQgOATiLgkQiDgigggVQgJgSgogmQgugqgOALQgFAfgdAdQglAfgRARQAgAagVATQgUASgigUQgLgTgEgKQgIgSAKgRQA2goBdhnQBbhjA7gqIAngHIMNGiIA0ADIAnABQATABAdgCQAHgrAMAAQAMABANAqQAkgCAeARQAiAUgNAeQgXAMAAAmIACA7QgVAEgZAAQhEAAhfgfg");
	this.shape_394.setTransform(43.4746,33.0562,0.1107,0.1107);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#316281").s().p("AjCDEQhxhticjkQixkDhPhaQApAPAagmIAqhWQgXgYAGgLQAGgKAgACQAJAMAYAeQAVAcAMARQDLFADqEiQARAQAuAzQApAqAaABQCLB5CXBdQCjBlCeA4QASAMARASIAfAjIgNAYQgIANgMAGg");
	this.shape_395.setTransform(-56.8861,31.3747,0.1107,0.1107);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#716659").s().p("AgjCOQj/gQjUgbQgogLgngCQgygCgXAPIgWgrQEehkF+g0QDGgbHngnQgFAOgSAoQgQAigFAVQhOCLh7BNQkWgJi9gMg");
	this.shape_396.setTransform(-54.2237,12.7611,0.1107,0.1107);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#312D2A").s().p("AgkDNQhmhMhiiPQhYiBguh7QAgAHDJgJQC8gIAOAKQAFADAcA6QAjBIAdAsQBnCeBqgeQhKDBhzAiQgYAHgZAAQhPAAhahEg");
	this.shape_397.setTransform(52.8672,52.1102,0.1107,0.1107);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B99867").s().p("AjhFCQhGgrApgtQAKg2ArhfQAthlAhgfQAggcAPgFQAUgFAqAOQAcADgOgUQgNgSgogaQhnhCghASIAHA6Qi2B/BDCMIgXAtQg0A3g5h5QgTgpgJgWQgPgoAIgbQARg+B2h6QA0g1B5hwQAUAuATAOQAIAHAzAUQgCgUBfANQBfANAPAPQAZAXgKAdQgKAdgiAIIgNAJQgIAIAVAEQBIACBaAcQBdAdA0AnQA8AsgVAnQgYAuiEAfQhfBZhJgUIghAWQgVAPgMAHQgBAihGAsQhBAogrADIgLABQgyAAg5gig");
	this.shape_398.setTransform(-42.4534,47.5299,0.1107,0.1107);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#2F2B28").s().p("AgNGeQgpgehXjCQhajRgXguQgKgVgqgxQgmgtgDgMQgDgNAqhmQArhmAMgKQAhgZA6AMQBOASASgCQACAjgnAlQgvAtgIATQgkBYAfCPQAbB7A7BiQAEgtgPhBIgehzQgmiQAthPQBDh1CPAiQAdAHBgAiQBPAcAtAFQgaAkg8AmQhKArglAXQiNBVgKBcQgCAUAOCOQAOCOAFALQAJARAgAVQAfAVAUACQAZAEBFgVQA1gKgJA1QgQgCh/AFIgWAAQhNAAgggXg");
	this.shape_399.setTransform(-5.6236,10.5017,0.1107,0.1107);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#635B51").s().p("Ar8HBQgKgQgCgGQhCiXBCgCQA9gnBChVQBch1AVgVQApgJAFAKQAFALgdAfQBYA7gXg7QAYjxBVjuQAOgHAXgZQAYgTAaAHQgMCZglDgQgEAbgaA3QgQAvAeAdQApAoBOgbQAGgBB0g4QCehMEUijQFBi+B1g+QAeAJgdAXIgrAZQqKGvpFFDQhhA2gmASQhRAog9APQAAgGgJgPg");
	this.shape_400.setTransform(4.9039,49.7419,0.1107,0.1107);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#776B5F").s().p("AEuIXQgkhuhJhsQgMgfgZgiQgZgigEgKQg1gVgzgOIhTiWQifiugejYQjDiyCHALQATAEBIAYQA7ATANgBQAHgBAEgTQAFgUABAAQARgJArATQAoATAoAjQBnBYgfA9IhWgLQASA2BNATIA4ALQAcAFAHAGQAbAYACAhIACA3QAIAgAOBTQAMBHALApQAJAfAfBHQAjBPAMAmQAwCQhGBAg");
	this.shape_401.setTransform(65.721,25.3334,0.1107,0.1107);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#5C524A").s().p("AD/MbQhUgcg0g7IgggFIg3AAQgrhYhLhAQiWllhwmBQAGgTAMgHQANgIAQAKQgoiLARhWQARhXBZhlQEUi0AzAGQAHABAYASQAZAVAKADQhCBqhWAwIhPAoQg0AbgqAgQhjBJAYByQAPBDBGCUQBBCpB1EPQCfFnAnATQAMAGAvAEQAlAEANATQABA4gxAAQgTAAgbgIg");
	this.shape_402.setTransform(-59.2994,46.4402,0.1107,0.1107);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#47413D").s().p("ACDGzQgPgBiFiRQiAiKgbgmQg+hWhIieQhhjWgWgpQAYgkA7gJQA5gKAkAVQAYAPADAnQAEAsACACQAIAJAmAPQAdAQgWAYIg5AIQg0AJAAAbQAWADAxgPQAvgPAUAEQAHABA/BJQA+BIADAIQARAmgOAWQgJARghANQgoAOgTAJQghAQgLAXQAigDAugPIBJgZQBWgaBAAmQAVANAUAWIAfAiQAkAiBFgGIBWC6QACAagTAVQgWAUgEAJQgkANg1gBQg5gEgeABQgKABgcAOQgXAMgMAAIgCAAg");
	this.shape_403.setTransform(-21.7153,-35.0368,0.1107,0.1107);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#1D323D").s().p("AiBDxQg1hkgDhVQgRgFgGAgQgFAdgagNQgvgXgyjEQgrisgChYQBighAZApQAHAJAOAoQANAnARAZQAwBGArATQA4AYAGhgQACgbgMgZQgMgSAAgCQgYgJgHgRQgGgQAJgRQAXgoAxALQgMAqAPBQQASBcgBARQgBATgYAdQgVAZAFAYQAbgYA1g4QA1g3AegZQBjhUBsAEIiDB4IDEAhQgOAThPBFQg2AwgSA7QgQAzATAPIARAJQALAFADAHIiwAKIhgESQhKhlgig/g");
	this.shape_404.setTransform(-45.885,3.8078,0.1107,0.1107);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#48423C").s().p("Ah5FIQhUhGhKhPQhyh4AKgvQBMgjC3gpQCugnBUgsQBEgkA0gwQBPhJgogsQAGgBAPgKQAOgKAIgBIAOA2QAGAeADAZQAoBrgVCGQgVCBhEBnQhJBuhmAiQgpAPgrAAQhJAAhOgrg");
	this.shape_405.setTransform(-44.897,64.6157,0.1107,0.1107);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#2F2B28").s().p("Ap7kCQAEgTAZgPQAXgNAdgDQBJgFgCA3QIBBhINAOQAEhrBHgEQAQCjgcCEQgcCEhQCMg");
	this.shape_406.setTransform(-54.4339,16.7243,0.1107,0.1107);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#37322E").s().p("AvBIvIABhPIAUgzQF3i1GWjtQF5jcF0j5IAAgBQBfgyDIh6QAhAjAWAkQAhA1gPAYI9zRbQgOgZACgwg");
	this.shape_407.setTransform(7.1765,49.6416,0.1107,0.1107);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#2C2927").s().p("Aj3J8QghgGgkg3QAWhMAEjkQACjWAghLQARgoGHmoQBfhnBFgyQADAXgHAcQgFAQgMAgQhRD6heD6Qh7FNhOCPQgUAlgdAWIhMhBIgBAAQAWAtABAzQABAwgRAfQgQAbgXAAIgIAAg");
	this.shape_408.setTransform(-32.8284,31.5352,0.1107,0.1107);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#387198").s().p("AMTIhQiFiWjYiMQimhskEiBQkqiOiRhHQj+h9iXhiQhDhNgKglQgOg3BjATQF0CZGZDbQFbC7GQD4QAcgWAZAQQAZAQgNAiQBwBFATBUQAWAYgCAiQgDAfgUAYQgWAYgbABIgDAAQgeAAgYgdg");
	this.shape_409.setTransform(-73.5695,19.9123,0.1107,0.1107);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#72A6C3").s().p("AOwH2QgNgBgOgVQjWiWjOjfQioi0i4j+QgXgKkFBYQj4BUg2AcQhOBiiUAnQAKAfgIARQgIASgdgDIirgqQgQAbgngKQgkgKgSgcIAKghQAFgSAQgPQBWhRGSisQGPirB6gLQAlgDAaAHQAQAEAmANQFfD6DuF+QAcAqA4BEIBbBsQAVgEAGAOQAFAOgKAUIAJAhQAFAVAIAMIgWAAQgFAWgLAAIgBAAg");
	this.shape_410.setTransform(7.4183,-5.9579,0.1107,0.1107);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#2D2A27").s().p("AnMNSIAAAAIgqhIIHMybQC1jSAagdQB8iEBwhQQAZACAsCxQAsCwgPAQQheARh4AnQg7AUiYA4Qi1HGgpBgQiCE2h1DmQAdAmgZAqQgTAggfAAQgJAAgKgDg");
	this.shape_411.setTransform(-27.6023,27.6555,0.1107,0.1107);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#756A5E").s().p("ADdJDQgcgtgShEQgRhDADgwQgTgmgGgNQgIgUAMg8IgigtQAvhegNhkQhHhLhOhRQg3AGgjgOQgxgTAFg5IgYgTQANhZgfgzQgYgohXg/QhNAzhihfQgcgJAcgNQA1gkBkAOQAbAEAyAKQArAHAXgBQARgBAVgQQAXgRAHgCQAhgFBYAsQBbAtAMAfQgHAigZgCQgTgCgjgZQgogfgTgMQghgVgRAEQASAhAyAjQA6AqARAUQAOAQAHAXQAIAZACACQBsAPArCWQBhBRgeBSIBHB6QAwBWAMAfQAIATARBKQARBNgCALQgHAqgmAwQguA6gkgtQgagfAKBcQgaBOgiAFIgEAAQgcAAgdgvg");
	this.shape_412.setTransform(-14.1925,38.251,0.1107,0.1107);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3F7CA6").s().p("AHNEfIlDgyQh0gfhlhOQgYAYgMgHQgNgGAFghQk+i7lRi3QABgCgBgKQgCgJACgBQIZgbIiAPQArAPBBA4QBKBAgWAeIgnAlQkAgrlagWQGkBuGLCtQBtA8AZAsQAWAmgtAVQgoAThSAAQhQAAhXgRg");
	this.shape_413.setTransform(-70.256,17.5126,0.1107,0.1107);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#2C2826").s().p("AkwIsQgJhjAciPQAkieALhRQAZgDAAAdQAAAQgGAgQgCARgkCdQggCLAHAGQADADAZgCQAdgCAIACICEwCIFAIyQAGAXApBaQAjBVgNAWQgPAakfCgQkFCTgnAAQgEAAgCgCg");
	this.shape_414.setTransform(10.3096,26.0747,0.1107,0.1107);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#2D2927").s().p("Al1jIQATgXAygKQA5gLAPgKQASgMAQgmQAQgnAUgRQAWgTBhgnQBcglAkgHQBMgNAZAeIAYAlQARAbAWAUQARAQAuAiQApAeAQARQAQARB2CcQBhCAAfAPIAAAAQAEAYgBAXQgBAigMAGQgOgIgbgmQglg1gJgLQg7hGgoBHQgdAhgLgFQgKgGAGgsQAggVgJhFQgIhCgfgRQhrg7j0BmQhhAphaA4QhYA1gsAuQgoApglBHQgmBSgVAnQgjBCgoAkQg0AthMANg");
	this.shape_415.setTransform(-23.2646,28.7485,0.1107,0.1107);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#7B6F62").s().p("AKeIlQgWgMAAgLQgBgMAXgJIgUguQiFiGgri/QgdgGAdgQQhjiVikh4IABg6QhHAvhSgfQhGgbg8hMQgKAYAIAdQAGAUASAeQgCAbhnAYQhOARg6AEQgRgGhPgvQg5gig3gBQgygChPAVQhPAVgqAaQgNAPgOABQgPABgIgPQgZg0CchIQBAgdA8gPQA/gQAcAJQAPgdANgKQARgMAeAGIBoAAQBAgFAegcQALgKgCgWIgHgpQgHg3AvgOQASgaAxgNQAtgNA3AEQCBAHAfA/QA+gWgSBwQBOA8B9B2QCbCTADAmQACAXgOAaQBLBzBPDFQBoEAg+Aqg");
	this.shape_416.setTransform(-22.4833,37.9998,0.1107,0.1107);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#585047").s().p("AAsHeQhLgNA0g1IA0guQAfgbAHgPQAJgSgKgNQgLgKAAgBQgcgMAcgKIANgNQALgOgLgQQgHgJg8glQgtgdgJgvQgJguAOgsQAFgTAZgzQAVgqAEgcQAEgogWgtQgYgEACAhQACAkgNACQhlASh0gcQiEgphLgQQgQgoAggUQAegTApAOQAHAFAtgDQAugEAMgIQASgMACgYQgBgdACgNQgagFgNgWQgMgUAEgXQADgXASgMQATgNAdAJIAwATQgsBnCCgQQBigMBegyQAGgdAQAdQAKgfAMAAQANAAAJAfIBKCQQA4B3gVAVQgEAEgXgGQglgLgGgBQg8gLgBA5QArA/AxgTQAZgKAZgWQAbgBArDKQAqDIgMArQgDALgeAGQgjAIgKAJIhGA7QgiAdgZAMQglASg4AAQgmAAgugIg");
	this.shape_417.setTransform(53.2228,40.473,0.1107,0.1107);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#2E2A28").s().p("AA4CbQndhFnOiEQgvgLgbgIQgygPgHgVQBAgRB8gTQCCgVA6gOQAVgFAigYQAggXAGAAQAEAAAeARQAhASARAFIKOCdQF7BeEMBSQAcAJBFARQA7ATATAfQncgBnjhFg");
	this.shape_418.setTransform(39.45,46.1656,0.1107,0.1107);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#D8B883").s().p("ApfEqQgUgEgxgNIAAl9QAAgTClhdQCphfAqAEQBoAJEBBvQDxBnBsBJQAQAKAVAfQATAbAIACQAcAIBHgGQBLgHAdAFQgNAXg3APIhUARQgxALg8AIIhuANQgsgnhLAJIAxABQA2AGgGAXQkIA/iQAfQkBA3iaAFIgMAAQgdAAgfgGg");
	this.shape_419.setTransform(2.5833,11.2229,0.1107,0.1107);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#65261D").s().p("AlHCEQiNhHhAhEQhRhWgTiHQAsAEByAFQBoAFAxANQAXAGBaAzQBOAtA3ADQBDAFBAgiQBkg1ATgGIhtCYQAnAABQACQBFgBAwgPQAogMAlgnQAngoAIgDQAVgIA3BJQAZgEACAsQABAhgJAcIAZAHQALADARAPIAbAZIAKgVQAAABANAKQALALgCAIQgFATg6AQQhDAQgXAGQkKBRiMAFIgbABQi4AAi+hhg");
	this.shape_420.setTransform(-47.7008,-17.4523,0.1107,0.1107);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#66271E").s().p("AksC4QACkLgzjIQAkgCBHAFQBAAAAngXQAWgNBAiJQA0hwAXhDQAlgIAIAWQAEAOAFAlQAUBHAGBCIAHCJQACAbgBAYQAEAHAngaIAiAWQBFjKAEjDIAYgSQAaBJACCrQACCgAkBMIAAABQhZBRhvBvIjBDIQAIgtAsi2QAkiMgBhbQgVgdgzDmQg5D3gNAJIjkG1QAZldABh6g");
	this.shape_421.setTransform(-6.1179,-32.0762,0.1107,0.1107);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#302C2A").s().p("AFbDPIhYgEQgmgDm6hAQmAg4gqAOQgTg2AGgUQACgHAhgxIBeg1QFag5Ftg0IAYAfIA0gnQBcgDCFAqQCZAvAcA+QgSA+hNBcQhRBgg1AKQgZAGgtAAIgQgBg");
	this.shape_422.setTransform(17.9724,-21.2688,0.1107,0.1107);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#E0A844").s().p("AhgANQhRheikiqQisizhLhVQgEgaA2goQAQgMBAgnQAkAIAYAKQAjAOAQAPQEoEIDLEsIABAAQAGAGAvBHQAbApAHgfIATAnQAJAYgGAYQAZAFATgQQAIgFAXgdQAogyBajWQBajWAKhCQAXgQgBA8QgTCEg5DZQgQA5g3CDQgoB1AiBBQgUAtgQAeQgdA4gLAAQgLAAgMgjQgMghgTADIgsDwQhXkvkPk9g");
	this.shape_423.setTransform(27.0026,2.737,0.1107,0.1107);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3A3531").s().p("AspD5QgtgIgzATQiLADh7ATIgWhBQFihCEQg9QFPhKEahSQAHgGgegcIg9g8QhThYBIgjQC/BEGHA1QGYA4CsA3QAjALAHAEQAXANAEAWQimAWlIABQlPACiiAVQiRASkiBOQkpBPiEASIg6AuQgxgdglgGg");
	this.shape_424.setTransform(11.4063,12.9078,0.1107,0.1107);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A97935").s().p("AChOtQhnhfgigxQhHhoiFp2Qh4o4gVjkQgXj0AqhyQgBAxAJA6QANBLABAPQAqIJBvHMQBBg/BjApQAeANA1AfQA5AiAWAKQAIgLgZiiQgci2AAgaQAAg4ADgOQAIgoAigKICDV0IgGAYQgFANgLAHQgngzhshkg");
	this.shape_425.setTransform(-21.1355,14.5794,0.1107,0.1107);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#65261D").s().p("AiqK5QgXgKhOg9QhThBgpgXIgngpQABgXAugyQArgvBAgyQCah6A7ANQBGhpB+hRQgGg9ARgiQAVgrA6gGQg3iRA/hLIimjuIAYgwQgDgFgLglQgNgvAVADQAQABAqAhIBIA3QAnAbALgIQB/C4AjCqQAnDAhGDDIgrgWIgXCDIhWhXQgHAeAVAvQAYA4ACAPQAGA3igCLQixCRgkAlIgaALQgKADgLAAQgQAAgSgIg");
	this.shape_426.setTransform(-39.9282,-31.264,0.1107,0.1107);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#983929").s().p("AgvKsQgngEAJg3QAahAhbArQgZAXgHgHQgHgHARgfIABgbQABgRgNAAIiOCDQgFghAnghQAsgnAEgSQAJgqABiKQAAhygEhLQgBgegIgpIgNhGIArAgQAdhjCCg/QB4g7BxAPQASgSg8iTQg2iCgfgwQgQgZhGhIQg3g4gPgyQBLApBIBIQBLBLAnBKQAoBNAnCJQAoCPAUCRQAzFuhmB4QgNAQgVAIQgbAKgFAEQg5guhfBhQgqAegfAAIgGgBg");
	this.shape_427.setTransform(-31.1238,-36.3396,0.1107,0.1107);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#23211F").s().p("AiAEnQgugNgUhWQgNhWgEgFQgCgDgcgFQgdgFgNgNQgdgcg8hqQg6hognghQAAgZCcgZQAkgGCdgVIADDNIA+ESIgrnfQAcAVBMgYQBLgYAMALQADADABAUQAAAQALgBQAxgzBuADQAeABA+AFQA3ADAhgFQgJAvAQBQQARBZgBAjQgBASgdBmQgdBngHAMQgQAahlAHQhjAGgPgWQgKgOACg2QABgpgZgCQgDAPAEBFQAEA+gGAGQgHAHh+ATQhrARgXAAIgFgBg");
	this.shape_428.setTransform(15.5251,16.8418,0.1107,0.1107);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#5F574D").s().p("Ar8IaQgklSASj9QAQjrA6jkQBGkbBsiTQBThyChguQCpgxBuBMQE0DWDTGqQCZE1B8HhQACAqgQgLQgPgJgKgbQhckDgvh/QhUjlhUiUQgthQiKinQh8iVguhmQgTgUgCARQgDAcgCACQgGAFgzgJIhygVQi0gchWAqQgiAQhIBMQhKBOgLAhQgHAWAMADQAHACAXgGQAXgHAGACQALAEgKAXQgLAagyBOQgwBIgRAvQhiEYAdGUQAHBhAcD3QAZDZAFB8QAEBdgBAMQgGBBgpARQg/k5gckTg");
	this.shape_429.setTransform(-26.4555,49.4983,0.1107,0.1107);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#3B3532").s().p("AkFDUQgTgCgJAbQgKAfgTAGQhIAZhZgLQhsgMgXhAQB7gDB6gRQCFgTBrghQALgEAegGQAXgHgDgUQg/AFhlARIikAbQjDAciEgiQgIgegNguIgXhMQAThWAvgbQAwgbBsANINPhgQCCgLBCgxIAAgWQAZgjAaAIQAZAHAMAqIg3ArQAVASAdgDQARgDAlgQQBQgiAtARQACCBhIAJQgSACgxgGQgsgGgVAFQgTAFg7A/Qg/BCglARQgqASifAXQiZAWgFAEIgOAtQgOAwgRAYQhMBphSAdQgSAGgOAAQhAAAANiBg");
	this.shape_430.setTransform(-28.3605,-15.3194,0.1107,0.1107);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EDCB65").s().p("AVLHkQgtgJgYgLQoVj0kKhyQmyi4mBiDQkGgfj1hNIgDAwQieBdinAiQAhAZgHASQgGASgqAEIkGgrQCklzGbACQCdABDUA3QBtAcD9BSQF9B8G2DbQErCVHfEWIgVArQgvgCgdgEg");
	this.shape_431.setTransform(-4.7909,-0.2686,0.1107,0.1107);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#73685B").s().p("AFIIzQg2g9g9h3QhHiMgigxQiNjIjMiHQj1ijjMAnQgIgnAQgEQAJgDAegEQB0g2B4AQQBFhBBxBYQA3glgrg0Qgagfg6giQgDgJgQgOQgTgOgGgHQADgBAHABIAMAAIBQgkQCVADCiBZQBmA3CrCGQBOAUA1BTQA1BTgTBIQAAA7BfDXQBaDMgLA3QgGAcgfgCQgQgBgigNQgTAkgZhQQgdgtgsgtQg8g9gUgYQgQhRgfhUQioi2AwB5QAqBoBaB/IgeAnQAcBFAJA/QAMBYguAAIgOgCg");
	this.shape_432.setTransform(58.2958,25.2678,0.1107,0.1107);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#38332F").s().p("Ai1F5QnFhshUgWQj0g+gPgYQgIgNACg5QACg7AMAAIIsCEQAIgtglgpIghgiQgUgVgJgTQgRghgZhDIgqh1Qg4iRg/guQgPgLg7gVQgwgRgUgcQAWhKA3gjQAPgKBogrIA9AfQBSC6BHB7QBgClBpBqQAmA/AwBeQAtBEBYAkQB7BNCgA8QCjA8COAWQA8AVBpAyQBeAjBbgTQgMgcghgKQgVgHgwgCQg0gCgVgFQglgIgRgZIEyAAQAABghbAxQg7Agh5ATQhihOsci9g");
	this.shape_433.setTransform(44.3851,41.5355,0.1107,0.1107);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#D55139").s().p("AC4KvQADgNATgcQATgaABgNQACgbiihxQiph4gRgrQgMgcBEgXQBJgYAAgWQgMgJglAHIhDASQhUATAFg6QBPguAfg1QAnhDgohJQgWAFgNAjQgSAugLAMQgPAQgmAVQgoAXgRAQIg2gPQgDi3gJkZQgTALgHgXIgDgXQAQFbh2BQQgdA4gRAAQgSgBgYg9QAAjCgrirQAviBAJgoQAXhcgNhYQCEAjCKCWQBTBbB3C0QBIBvBgCuQBZCRCFB1QAUARBkBEQBfA/ADAFQAhA2g0AuQhKAxgcAaIAshiQAIgchNAwIhbA8QhvBAgbAAQgFAAgDgCg");
	this.shape_434.setTransform(0.5411,-35.3257,0.1107,0.1107);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#34312E").s().p("AgXHNQkTgDgTgLQgQgKh/jGQh/jGgEgTQgCgNAVglQAVgmgFgWICCB4QAYANAsBUIAsBXQAQAMBeggQBwgnALgBQARgDAcALQAYAKABgBQADgDgDgaQgDgdADgHQgCg2gSg1QgQgtgjhAIAcgtQAhgEBTgWQBYgZAZgOQA/gmAYhBQAXg8gNhOQAYgFAWAIIAqATQAZAMBbAxQBgA1AGAGQAlAog+CoQg9CjgtAWQgNAHg6gMIhwgWQiUgVAEBbQABAbAzADQAfACBNgEQBFAAAcAVQAnAbgRBHQgEARgyBSQg1BVgMAEQgYAIirAAIhsgBg");
	this.shape_435.setTransform(-17.3514,-31.8147,0.1107,0.1107);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#312B29").s().p("AJiJjIy7rdQg+gXgWhUQgUhLAQhgQAPheAng+QAqhCAwAHQApAHCWBeQCKBXA0AsQBlBWBuCWQBABWB8CzQBwCdBcBYQB6B1CJA1QgbA5gEAFQgQAWgUAAQgKAAgLgGg");
	this.shape_436.setTransform(-65.0897,28.993,0.1107,0.1107);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#60231D").s().p("AjzCPIB5gBQAagUhxgcQh6gZgJgDQgbgKglgUIg/gjQhMgmg8AGQgIghAcgRIA5gkQBchbBohxQBWhUCQhVIAtAHQA6gfA0ACQAvACAUAZQATAagYAeQgcAihKAWQCNByCyCNIATAyICxhpQCWgGiUCUQg0AsgUAUQgiAigVAvQggBKgLB9QgOCWgNAzg");
	this.shape_437.setTransform(-0.4023,-27.8452,0.1107,0.1107);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#76644E").s().p("AnXIDQgHhmAOgiIBAg4QhGhIAbg8IAVgMQAHghgigmQglgpgBgdIAIgcQA1gIAGggQAFgcgcgzQgoimAogYQAogYBbCQQBqAlAvCUQAFBtBSBdQBaBmBkgqQAIgEgEiBQgDhsgFgvQgBgJAPgJQifhUg/iQIhqhrQg+gRgYg3Qgag6A+gXQEBAkC2g8IAAgBQAjgFBHgiQBbgqATgHQA3gUASAUQAVAYgaBWIivgVQgEAZAMAMQAIAHAXAGQA3AOALAmQAgBmhjEuIhPDnQgpB9gKA8QgaAygoANQgzAIgfAKQhFAZgmAAQgxAAg5giQAmAuAGAyQAHA6g3AIQg7Ayh0gcQgRABgbgJQgbgLgFABQgJAAgKASQgKAUgEACQgVgegHhpg");
	this.shape_438.setTransform(-39.8814,28.4214,0.1107,0.1107);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DACFB7").s().p("AkRFoQgWgCi9hTQjDhWAAgPQBYh4A2hsQALgVAahEQAahDASgkQA9h4BLAHQAKABBoAxQBkAwAYAOQBKArB6BjQCSB0AsAfQAMAIDNBxQC/B1gnAkQgKALgugkQg1gpgfgBQhrgCkxA/Qj4AzhxAAIghgBg");
	this.shape_439.setTransform(-3.1817,-23.7269,0.1107,0.1107);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#DA583D").s().p("AtCJdQgcgLAcgLQBXjFA3hoQBKiNBniQQAMgSAvgpQApgmAHgPQAIgTAEgyQADgtAQgdQAeg0CMhEQBKgkCBgyQBTgGAwAMQBBAQAsA3QA8BaAeAiQAoAsAlAIQAnAJA3gZQAwgWBcg9Qi+h/gPieQADAAAKgMQAPgKAVADQATADARAQIAYAWQFNEygbELQiQAPhVAmQhqAxhCBoQghAOgZhJQgDgpgFgXQgIgqgcgDQATCMAEBDQAHB0gTBbQgTgygqiTQgkh9gihGQguhbhLhcQhVhnhLgrQghgSgOgDQgfgIAAAfQBIAaBBBLQAfAjBHBoQgFA5g2gdQgigSgxgyIggASQgBAjgXAqQgWApgeAYQghAagZgKQgdgMgLg7QhJgkhdBwIgfgLQAJAfgfgJIiDEcQgBCDhAgWQAZBAhIAYQggAKgfAAQghAAgggLg");
	this.shape_440.setTransform(-38.2128,-37.5645,0.1107,0.1107);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#140F0F").s().p("ApiJgQgZgWgUgrQgUgqgEgmQgGgpARgRQgYgYglgBQgtAEgagBQAGhMBvAPIAPgaQAChpAfhMQAihQBKhBQAPgMBEgnQA6gmgUgVQhFgRh8gqQiHgvg7gQQjmhAiqA3QgaAYgVgIQgRgHgEgXQgEgXAQgKQATgNAlAQQAMAECQgVQCVgQAsAhQgyhbiGgPQgsgFhKABQhXACgagBICZgsQgog3iSgPQh4gMhWARQgegJAegNQAfhhDoAkQBZAOBHAgQBhArAEA7IAqgaQCBBkCHBPQADABAVAPQAXANASgHIgWArQAuAFA5AOQAdAIBHAWQBeAdBcAVQB4AcBHAEQAfABA+gYQA/gYAmACQARABBKAeQBAAZAJgKQABghALgkQAWhGBDghQAggQBegPQBTgOAygCQA3gCBlALQBuAMA9AAIICABIiDAsQgQgFhjAIQhmAIhqAQQkgArArAnQBKgIAVBQQAHAcADAuIAFBHIAVhWQA0AAAKBDQAJBEgxARIAAAWQAAAMgFAHQgFAIhRAPQg4ALgxAHQigAXkxAlQmHAvgcgJQhEgWgbhKQgZhBASg4QATg5ApAUQAxAYA1CCIA9gKQgxhfACg9QAAg1AmgGQAlgFAsAtQAzA0AeBbIAggHQhlluEcFUQgVh8hogrQhZgniGAbQh4AYhyBBQhxBDgsBJQBBA7AVA6QAaBIgvA+QA1ATANAsQANAtgkAtIAAAVQg0gjhkAMQhXAKhCAjQgHAEgHAAQgRAAgUgTg");
	this.shape_441.setTransform(-33.5168,-20.1171,0.1107,0.1107);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#D24F36").s().p("AGvHDQgSgEgIgQQgJgSAKgbQgggrAMhJIgXAHQgiAXgsgfQgbAlg9AcQg8AchAAHQhFAHgtgTQgzgWgJg0Qi8Aqi4iFIkUgZIgXgrQgCgOABgdQACgfgBgOQAGgGAPgSQAOgQAJgCQA+gpAThRIAygJQA4g2AsghQA2gnA1gVQgOAEgMgFQgOgGgOgVQgmgGgEgdQgEgZAWgcQAWgcAegIQAigKAZAZQAzgaBYgDQBWgEA7AUQAwAQBKAhQBFAgAzAcQCMBMAEAiQACANgVAFQCCAVBgA7QG1BOk7CZQg6AyggBEQgfBCgEBOIgtAgQADAXgOAMQgJAJgMAAIgJgBgAimi2Qg6ARggASQggASAhgCQAngBB2ggQAbAYAzgBQASgBgGgFQgGgFglgHQApgWAwgMQgyABgngLQgxAChCATg");
	this.shape_442.setTransform(-46.1527,-21.3557,0.1107,0.1107);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F3CB5D").s().p("AB3JfQgGgcAMhAIBOjlQhgDmhFAAQg2AAgUgwQgVgvAnghQhEiriEjNQiejohPh6QAIgiENhVQE1hhASgKQAYgMAcgbQAegeAJgGQAogaA8BMQBiB6ALCgQAGBegRDKQgBAOAPBsQAKBKgXA2IhBhCQg2CTgmBgQg2CEgzBqIgIAAQgqAAgIgrgAE1hyQAGAqgbBnIgOA2IA4ibQgCgwgLAAQgEAAgEAEg");
	this.shape_443.setTransform(29.8661,-0.8319,0.1107,0.1107);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#4382AC").s().p("Ab/OXQjigvgogWQgogXiDhvQiOh4g1gjQoLlaofkZQpnlBoEisQk+hqjWgqQlnhFijBQQhGAaAbgvQBuhECfgoQCOgkCUgHQAZgBBKANQBCAMAxgGQAtgGBUgsQBVgrA4gJQBrgQB0AGQCCAGBZAfQgbAdgnAZIhEAmQhQAugbBGQAWApArAfQAdAVBCAiIJAD/QEpC6EqCXQGBDfFZD+IANgSQACglAdAEQAPACATAJICZBBQAEAfgPANQgLAKggAHQDQBsCfA+QDLBQC8AgIAnAzQgIAigGAMQgKAUg0AAQg5AAjcgtg");
	this.shape_444.setTransform(5.4434,1.9847,0.1107,0.1107);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#66251D").s().p("As/FAQglABjphEQjohDgQgOQghgdANgRQAMgRAsADQAXgnA/gyQBAgzApgIQAjgHA7ANQBEAPAdgBQCWgFCigjQCmgkCGg4QAHgCAGAlQAGAoAbAJQAhALCIAJQB7AHA3gCQBmgDAtgLQAygLASgdQARgagCg6QAAgbgNh4QALANAoBdQAhBOAdAKQA0ARD+gLQD4gKBHgUQA1gOAYgfQARgVAUg8QAcAWghBKIgYAyQgKAXAGAGIEGAAIACBVQAAA/gFAsQgOCGhAATQgpAMj8g/QkDhBhCAKQASgaAugLQmmApmdgUQiKAMgyAjQgxAkgzB8QjIhjj1Beg");
	this.shape_445.setTransform(-25.6576,-24.6148,0.1107,0.1107);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#342F2B").s().p("AjIHGQh6g6hYhyQhahzgjiTQBBgWAnAKQAfAKAXAmQAOAXAcA6QAcA4AiAjQArAtAlAUQAgARA/APQB6BDBxgnQBlgjBJhuQBFhoAViBQAUiGgnhoQgegjgkg1IgGgGQgIgGgHADQgVALgzApQgxAoggAQQjABekTBaQk2BkitAKQgdABgCgEQABgNgCgRQgEgZgCh+QgBhMglhZIgOgXQgJgQABgFQADgFAVgNQAUgVAAgwQCwgPC3gzIAiAsQAhBpAGAcQAWBfgUAfQgFAIh6AgIiaAoQgYAFgLAFQgTAJAVAOQCbgeA8gOQB7gbBXgcQBIgYEEh4QDqhrBTgRQBggTCyAVQDJAXBLgGQBHEEiChGQgFgDgGgNIgKgYQgQgfghAKQgFAYAWAZQAYAdABATQABAcgVBpQgRBPgQA9QhJD3gZgcIgshYQgdAcAABGQABBKgDAEQgMARhWAcQhbAegUgVIDEivQg0gThABAQhEBSgjAYQiEBciRAMQgUABgUAAQhxAAhrgzg");
	this.shape_446.setTransform(-45.1538,64.645,0.1107,0.1107);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E5B24C").s().p("AYBHSQjogzhJgNQiLgYgRASQgEADADAjQADAngCAKQhfgViUg1QjFhHgugOQkUhVuikFQrwjTnDicQhugOg2CQQgjBfgGCSQg1hCAfiDQAJkPBlg4QN0CsOzFIIBFACQAhgSBdAeIAcAJQkChnmAiRIgPgjQgUgOAFgGQAGgFAfADQA0gKAiAJQGeBtJ1EfQAdANAqAcQAngiArAaQAnAYAKAxIAygcQAfAgFxBXQFyBXgJgfQjfiIjlhtIgKg2QgngXAIgOQAJgPAsAJIHCEDQD+CaCqCPQgQAFghAAQh3AAlihNg");
	this.shape_447.setTransform(-1.8347,4.8845,0.1107,0.1107);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#312D29").s().p("AGBNvQiegLgUgNQgJgGgXg7QgbhFgKgQQhFhygdhIQgihgglheQg7iRhqgoQhYggivAZQgUgDg2iFQg1iCAJgKQAaAECeAnQBwAbBLgFQgFhDgdhEQgdhDgtgyQgNgPgbgJQgZgGgCgCQgQgVA+gtIBehDQAqgrAaguQAig6gBgvII2EyQhWhnjBhqQhpg3gygeQhXgyg7gvQgZgHgEAIQgBAOgFAKIgbA+QgPAhgTAfQglAdgUgOQgUgOAMgtIAAAAIBjjbQA7AjExCKQEbCIAcA/QAJAVAQCUQAQCXgIAIQgvAAgjgSQgOgHgngdQhAgvhfAPQhjAPgSBXQgNBAAeBpQAgBzB7ECQB3D6AhCBQAogVATABQANABAlATQgFAlgRAFQgQAEgcgYIAABCQAbgnAoAIQAmAJAaAsQgRAShVAAQgnAAg1gEg");
	this.shape_448.setTransform(-54.5934,44.8929,0.1107,0.1107);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1E3643").s().p("ApNUVQAmhmAFgVQAahjA+jFQBLjpAlh5QCLnAANinQACgYgLg2QgJgvAJghQAFgSBUilQBTijATggQBSiKDRkBQDUkCBSiJIAsDPQgNDXg3EEQg0D3hKDaQgPAsgYAuQgRAfgiA1QgzA3hWBrQhdB1gqAwQiuCwhlBsQi6DHgZBlQgPA/gFBoQgGCFgEAdQgKBZggA6QgoBJhPAuQgBgpAchIg");
	this.shape_449.setTransform(-31.5631,22.8627,0.1107,0.1107);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#2D2927").s().p("AlCP0QghgLgjhMIgvhpQgIgMgigSQgegRgDgLQgDgNBrjVQB0jmAOgzQAdhmAUilQADgWAbkXQAml9BLiTQBDiDAiBBQAbAwACCAQArgagLhjQgIgxgBgTQgCgfALgGQBGAACkguQCQgaA7BTIhXgVQAOAcgBAZQgBAZgPAcIiAADQgGgJA9gqQAYgQADgIQADgLgegBIiuBuIijLGQgPBBAUAzQAEALA1BXIiWNKQApAHACgQQgEgaAEgTQBTmPAwmOQAlAOAJBBQAJBLAPAPQAYAZBJACQAlABAkgBQAcAbgwDvQg1ELAEAgQgUAhkGBPQjcBChFAAQgOAAgHgDg");
	this.shape_450.setTransform(-4.0648,27.5226,0.1107,0.1107);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#3B78A0").s().p("ANFI1QgcgBgtgJIhOgQQg6gKhsgmQhwgngsgJQgTgDgPAKQgMALgDAAQgQAtgxgXIgSAPQphmnp2mLQgShQCeAgID5AiIMrCQIANgZQAGgcAQAcIAWABIAWAAIABgmQAAgXgBgPQgEgwglhbQgihXgCgwIDPDOQB7B6BQBYQDgD0B4DgIghikQBPBfANBHQAPBUhBBhQgqA+hLAAIgEAAg");
	this.shape_451.setTransform(15.7734,1.7381,0.1107,0.1107);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#1E323D").s().p("AEdJZQiIlrhjieQidj7j9iIQhPgqiCgUQh9gSiLAHQk7AQiMB0QgaAWAFAKQADAGAGACQgxBBg2BUQgUAggGAAQgHAAAGgmQAGgjAdgpQAigvAHgUQARgvAaiUQAYiEAfhCQDwADF1BiIErBNQCrAqCDASQAnAGDOAGQDAAJATAZQAKANAJAwIANBGQgKALhFglQhKgngLAAIk7AAIFbA3IAvATQAeAMAMAMQAHAIANAwQAJAgAZgMQAlgRgTheQgchngBgaIHhhtQAGAXgNAQQgRAQgJAKQgmAyiJB9Qh2BsgtBOQAiARA1gpQAPgLA9g/QBLhMB3iRQCNitAwg1QAzgcBIgGQAigCBfACQAVABAlgDQAZAEgIAqQAdBXiKBBQhDBGjHC6QivCihUBeQgYAcgeBKQgdBGgjAlQg+BBiABdQiPBqg0AAIgHgBg");
	this.shape_452.setTransform(-32.8171,-2.6928,0.1107,0.1107);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#62241C").s().p("Al8GuQjagzjFhkQjGhliPiHQgjg1gEg7QgDg3AYgeQAYgfAlASQArAUAqBPIAYgpQABgkAsgaQAogYA6gFQA7gGAtARQAxASAKApQANAIAtA5QApAzAmASQBFAiBDgIIA0gIQAfgEAZADQAYADAZAUIAqAiQA2AgBghDQAkgYBChVQBDhVARgLQAegTA1gLIBlgRQCJgWBIg+QAMgKAcgtQAXgmAQgEQAOgEApAMQAqANAZgFQAWgEAlgVIBGgpQBfgzBLAWQAbAIA/A6QBDA8gEAYQgDANiXB/QicCCgQAnQgWAzBCgnQBSgwAFADQAQAThBBmQg+BhgfAWQgUAOigBRQidBPgnARQjUBZj6AAQi0AAjJgvg");
	this.shape_453.setTransform(-28.8208,-12.0042,0.1107,0.1107);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#272323").s().p("Ao5KiQgFgTATgDQAYgFAFgKQARgmAGhDQAGhBgIgrQgciVAMjSIAMiwQAGhqgBhQQAAgUgSheQgPhMALguQAFgVAsgHIA9gIIAAgBQA1gJAXBLQAngZAsgRQAmgPA0gMQBkgXEVgrQE9gyATAPIAZAWQgLBEgBBSQAAA+AGBZQgSBsgTAXQggAaglA1Qg4BSgDB0QgDBFgDAVQgHA0gXAsQgxBehEBNQhPBahNAiQiuBMiTAiQiCAeh3AAQguAAgsgEg");
	this.shape_454.setTransform(2.8524,62.7165,0.1107,0.1107);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#38729A").s().p("AKCQEQgVgWAKgmQh8gsiPhSQhqg+iShkQgag0hDgfQgOAbgcgEQgagCgbgYQgbgYgLgdQgLggAOgWQjrkmjJk8Qg0ALgOgYQgLgUALg2Ih4h8IALgdIAPgaQHVCKHNB/QAcAVAJhVQgQgZAGgGQAGgGAZAPIgJhEQl+lZmElxIgGgwIABAAQDWBcEmDEQCZBmDWCkQEZDZAbBAQAkBZglA6QgXAdgKAQQgQAZgBAbQgBAwArA1QAtA5AEAnQAEAogOBFQgPBMAAAiQAAAdAWBiQAVBZgFAaQAAAFgSAMQgXAQgMAOQguA0AYBaQAEARAOASIAYAdQAXAjgbAwQgOAIgMAAQgQAAgMgNg");
	this.shape_455.setTransform(-56.6187,26.5901,0.1107,0.1107);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#4481A9").s().p("AmbUSQgggJgvg4QgFg3ALhOQAOhkACgdQBwjogPkVQCAg0BQh0QAdg9gHgwIAAiDQgBgHACgQQABgQgCgFQhvgIAjhhQAehUBVg+QilgNAzhdIjFC9QhjgJAohLQgLAFgNAAQglAAgtgqQgoglggg3Qggg1gGgnQhBARgVgtQgEiWA4jpQA4jmBHiIQAXgrAcgKQASgHA6ABIAAAAIAbAvQgVB0ghBfQgeBVg4BwIAWgkQAcglATALQEEiNEgABQE+ACDLC1IgsAWQBcAQBBBAQAdAdBMBuQgNABgegCQgdgBgPACIlTimIgKgfQgwgRALgpQAIgXADgNQAEgVgKgQQgcgviYABQg+AAguAKQgvALgFASQgYBjBTA/QAXARA5AgQA2AeAYATQBZBHA4BiQARAcBQCtQABAEgkALIhRAZQh5AogDAoIDwgWIgWgrIBfgDQAwgCAYAFQBBANAvBaQAKASAQAWQAEANgvgEQhsABjMAwQj7A6AABCQABAaAHAoQARBlAhBrQAgBpAqBeQgHBSAJBSQgwAsAjBOQAeBEBBArIgYAwQAEAJARAZQAKAWgUAKQhtg7hxh6Qh7iOhFhGQgGAahBAaQg5AYAIAWQAEAIApApIBUBTQBxB1gYAYQhAgJhEg4QhIhGgkgdQgTgWgMgIQgVgOgOAWQAXBRBNBpQBiCHAVAnQgPgDiHgrQhagdhCAKQAYAqAIAtQAJAsgKAZQgIAUgSAAQgGAAgHgCgAm4mXQACg4ANgyQgJgogXAFQgTAFgRAfQgQAgADAZQAFAeAhgBIAHgBQAMAAAJAUg");
	this.shape_456.setTransform(-41.5355,5.0438,0.1107,0.1107);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#1E3743").s().p("AlzS9QgkgCiagXQifgXgLgGQgggPgIgmIgEhDQAagPARAFQAMADAZAWQgtiKBBgbQAygUCEAuQixjABRiNQBtBCAMAAQANABhVhCQgTgjAUgkQASghAqgXQApgWApgCQAtgDAWAXQDIDgB/B5QABABAMgVIAQgoQhBhIgcg7QgqhZA+geQg3k2hOk9QBuhpCrgkQCVgfCcAaIgKgDQgWgJAIgQQgqhbhFgTQhKgVhLBDQhvAXhDgLQg/gKgHggQgIggA0gmQA4gpBqggQgthpgohBQg4hXhHg1QhggohDhDQhAhAgKg9QgLhBA6ggQBBgkCKAQQB+APAiAdQAuApghBwIgKAbQBUATBNApQBGAmBJA8IA3AMQAXhDBBBDQBPByA1B+QAxByAlCUQgbgNgpgsQgpgsgcgNQgcgOgfgFQgtgGABAeQCXAlBPB+QBFBvAHCnQAGCWgsCjQgpCZhGBvQgYAmhQBDQhLBAAAACQgKAoAkgBQASAAAVgGQAQAbg4BLQhCBNgMATQgMATgLAyQgLAvgLANQgsA1kqAYQimANhyAAQg3AAgrgDg");
	this.shape_457.setTransform(-38.3865,7.1921,0.1107,0.1107);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#474039").s().p("AFJTMQghpfh0mMQigojlak0QitiYiNgqQiyg1i3BiQgPAIiDBYQiDBYgLAIQgNALgaA9QgVAyglALIAAgBQAXhJAwhPQA3haARgpQAIgTABgnQAAgpAGgRQASg5CuhRQAigPBogtQBLggAagPQAmgWgbgJIgWgGQgMgDACgEQAJgQBbgqQBYgpAUAAQAiABALAeQAGAQAEATQANAJAuggQA4gnAPgDQBTAKgnAiIAFAHQAIAAARALQAeATALAYQAPAcgeAMQglAOhigQIgfAgQgfA1hSgJQEcBCDiDsQC2C+CXE1QgdhaApg5QgMgtAUgOQAUgNAmAdQAXgKAjARQAhAPAcAgQAeAgAKAgQALAjgSAVQATA7AZgPQBLgkg7hoIiIlQQgTgoA0geIAYgUQBnB3BSB/QAXgWASAEQARADAQAdQAwgSAaAtQAZAsghAnQBWB/AdByIAQgXQABjWhrjJQg6iQA3hgQBlgxAwBYQAnBJgOBqIh4iYQgJAZA6CIQA4CDAQANQAuAIgDgTIgLh4QBVBbBKC7QBFCuAsC0QA1DXgECSQAAAWARAxQAHAkgygJQADhrgfh0QgLgpgKgUQgSgpgUgCIBBG0IBXgrQAPAnAEAwIADBXQACAbgCAyIAABMQgWAAgEgyQgDg1gagGQgggHgNAsQgPAygHACQiDAkglhlQgHgVgLg8QgIgsgLgIQgMgJgcAQQgaAPABALIAQARQARASAFANQAVA/gZAGQgpgCgVAKQg8AlghARQg7Aeg0gJQgJgBgNgXQgNgagNgIQhbg1gXBUQgDAOgIA4QgFAogJAIQgEACg9AJQg5AIgRAcQgLATgBAtIAABKQgCAmgSALQgJAFgMAAQgVAAghgPg");
	this.shape_458.setTransform(59.2741,33.1659,0.1107,0.1107);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#2F2A28").s().p("AkiQSQjlgNhLgkQgHgvgvhPQgjg8gqg2QgMgcACgIQADgMAdAEIAAAAQAwiDgznyQgekKgMh5QgWjRABhfQAAg4AJh5QAKiCAIgmQAIgiAegiQALgOAtgqIBFBpIJKCxQAbARAfA5QAhA9gQASQgDADgdAKQgiAKgTALQhGApAZBPQBqAEAdACQBdAHAhAVQAWANAjBfQAiBaApATQBDAeB2gVQBCgLB4geQAvgIAGAXQAHAWgnAcQgyAIhNAOQhdASgaAIQhnAhhHE+QgyDkgKDKQgbgFgJgYQgEgLgFgkQgIhNAAjBQAAi5gNhbIgri5QgZCaAbDzIAYDJQAOB2ADBQIAFCIQABBVgKA6QgeChiAAeQhKgZj1gOg");
	this.shape_459.setTransform(-9.6914,18.335,0.1107,0.1107);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#2E2A28").s().p("AmoP8QBqAlAog4QAkg0gghsQgDgLgPgTIgWgdQgWghAqgNQBYgaAhBTQAdBMghBSQBHAMgNhmQgFgmgOgoQgPgmgMgMQg2g3iWA8QhRAjgmAPQhBAbghABQhuBWiUAgQhvAYisAAQjCgGhiADQioAEh2AkQAfgjBLgXQBUgZAkgdQAtglASg6QAVhBAKgNQArg1CdhPQCmhUAtgtQARBSgrB9QgMAigaBEQgWA8gJAnQgGAcATAHQAQAFALgLQAagaApjOQAqjSAXgbQA6hGCRgjQCEggBlAQIiYogQBFAKA1AcQA9AgAgA1IETLXICkAsIhXDEQAUAVAsg8QATgaAdgzQASgfBLiuQBNixABgQQADgigThsQgUhygRgRQgQgPhagvQhFgkgygZQhZgqjahQQirhAhPgyQh0hKg7hyQhEiDgNjXQAPgVAIACQgIhpAqhOQA1hkB4gWQHYg9FVglQHIgyF3gZICGAQQBahCCcgCQCkgCBGBOQAcAgAVBiQATBeAEBvQADB1gQBPQgTBagoAOQgnAOgRgOQgRgNAIgoIgogYQAGh5gWiTQgdjMhCgEQiGAlhAg9QgEAhgRAGQgNAFgfgMQgCAhgRAIQgQAHgfgOQl2BMnbA/QgSACglgKQgYgGghgQIgdAmQA3FJBOFKQAbBcgGBUQgIBmhJhQQgbANgTgRIjEtGQgKgKhnAAQhwgBhuAOQk3AmAkBsIgqAmQgtAmApB6QAfBfAzBLQA6BWBOAzQA8AnB2ArIGGCRQB7AUBJBDQBOBFATB2QBSgSgBA2IgyB8QClhVDXgOIAKhAQD7gBAqiGQABgvAbABQAaABALAtQgJBsgOAdIgVAnQgTAggTAvQhGCqggCaQgoDAAZCOQibAemMBRQleBIjJAkQghAGgqgEQgKgBhBgKIrFERg");
	this.shape_460.setTransform(22.6792,33.5397,0.1107,0.1107);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#272322").s().p("Ah0X4QgPgDACgdQADgigCgBQhCA7hygiQgggJg/gaQg8gZgagIQgQgEg1ADQgvACgZgMQgcgOgLgwQgNg4gNgOQgLgMhKgqQhMgrgZgXQgmglipkHQipkIgRgxQgIgZAJgVQAKgQAAgCQAoA4BLB7QBHB1AqA4QCNC8DBAsQEIA8CJhHQCEhGBuj3QBIilAajVIAUizQAMhsAShQQAGgcAagaQAagbACgKQAFgagNgzQgTg9gHggQgah5BOg3IgjnAQAYAXAtALQAaAGAwAIQAnAIAMAVQAQAagRA4QgBAEguA/QgjA7A1gCQAIAAA6hCQA7hFAQgFQAegLA7AKQBQAOAPAAQAwAAAUgiQAYgqgNhmIAWCDIBBAAIgWjFQAmgGAFANQADAJAEAgQAKAbAKAvIASBLQAFADBLgTQBKgUAIgFQAqgdgmksIg5l1QAUgDAIAXQAEANAFAcQApB/AKB2IAVivIBCAsIAAAsIAQA9QgjBjASBmQAPBTAzBbQAAAEgRAvQgOApAIAbQACAIANADIAbAFQAnAIAIArQAMA9gDC3QgCCAgICCQgFBhgOBUQgFA/AYB/QAQBagZAyIgbAsQgSAdgKAbQgLAfgIBFQgIBXgFAZQgYB9hhgVQAGghAZg7QAag7AGgkQAHgsAAgiQgBg8gagCQgNBSgeBpQgLApgsCPQgFAPgYAnQgVAigBAOQgCAWAUAUQAMALAaAWQAsAqhABIQhrB6ANhUQADgVAQg7QAPg0gBgLQgDgpgiApQgjAzgEADQhcBRgxApQh9BpgIgJQgCgeAcgeQAmgqAGgNQAlhNAKhLQANhphXA3QgKAGgsBkQgzB3gHAMQgnAsgPAWQgbAoA9AGQAPABAegEQAcgDAKABQAgAHglBLQgSAmhRAlQhvAzgIAFQgZgKAFgcQAKgagBgBQgvgYg7AQQgoAKhHAnQhQAsghAMQgsARgnAAQgRAAgQgDg");
	this.shape_461.setTransform(-17.2638,65.3689,0.1107,0.1107);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#443D37").s().p("Al6bKIgNg9QgXhIhoALQgQACgWAQQgYARgKADQhGAUACgYQAQgpgDgXQgJhJhGgFQhKAGgMgKIgQgzQgPgvgbgIQgMgBgBARIACAbQgbgTgkgwQgkgwgIgdQgGgVAZgJQAagJgCgWQgEgkg2h0Qguhlgfg1QgHgMgbgOQgZgNgEgMQgbhagwj4QgzkBgDhQQgCgcAMg0QAMg0gCgcQAPgdARAAQAQAAATAaQgDkRAQh+QAajHBeivIAqgSQAWigCSh1QCGhqCsgYQidgzinByQiMBghcCkIgzAFQgwiBAQhHQAMg4BWhzQAWgIAMAAQAQABAGAQQDhjrDdAKQDMAKD/DfQG6Ibk9m1QgVhRAfghQAagcAzAQQAyAQAdAsQAhAxgUAzQAKBPD1gkQBZgNBZgZQBSgWAUgPQAQgLAHgLQAIgMACgWIgogLQgSg9g0ghQg0gig/AKQiLAwiWgQQhpgMipg4IgTg1IHWiYQAQgrgWgnQgNgXgrgpQgsgogMgWQgVglARgoQAyAFBpAVQBVARBYABIAAAAICDCDIjlhBQgPAHAYAbIAiAgQBWBNCXBZQCkBhBQBBQAGAFA/AaQAuAZhHAIQgLAChXABQg7AAgqARQgWABgFACQgHACADAdQAJBDBYBcIBIBIQApAoASAaQBhCJAzC6QA9DehFB0QgfA2hQBJQhbBTguAAIn2AAQgiAAAJBNQAFApALBEQgMFNgbDOQgoFAhXDIQgIAThxCjQhyCigQAQQgzAwhAAPIgsAHQgWAEgKAHQgCACgGAYQgGAZgMAKQgjgUgeg2QgcA6gmAQQgogGgOAGQgUAJAIAjQgPgQgIglg");
	this.shape_462.setTransform(-76.6356,61.235,0.1107,0.1107);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#262222").s().p("AgSDqIgWgCQgOgBgigIQghgIgXgSQgYgSgKgcQAfgNAcABQAUABAfAHIAYAGQASgbAIglQAJgpgDhAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAQACAAADACQACgFABAAIAbgBIAbABIAEAFIABgFQAegPgCggQgCgZgUgeQgUgSgFgLQgIgSAdgCIgvgeQgFgDgFgEQgEgFgBgEQgFgKARACIADgFIAhABQAZACADAHQAEAHgNAAQgQgCgDABIgZAGIA0AAQAEADAJAXQAJAXgCACQgQgBgRAEIgEAAIAAAFQADABATgBIASgCQADACAFAOIAKAdQAPApAQAIQACACAMACQALACABADIADAJIACAKIgDAFQAAABgBABQAAAAAAABQAAAAABAAQAAABABAAQAFgBAAABIgCAFIAAA5QgIALACATIACAPIABAOQgCAMgFAFQgGAGgLgDQAAABAAABQAAAAAAAAQAAABABAAQAAABABAAIAFACQAEAFgGAKIgGAIIgDAGIgCALQgBAHgEAFQgGAJgfANQggAOgKgDQgEgBABgEQAAgEADgEIAEgCQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQgLgBgGACQgHADACAJIAMgIIgCAHQgBADgDACQgHADgIAHQgHAGgMAEIgTAEIgNACIgCAAg");
	this.shape_463.setTransform(-70.7161,63.0012,0.9,0.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#443D37").s().p("AkseJQjdgMjCirQjMi1hfknQgZhdhlkjQhRjqghioIAOhkQhQoqACoyIgtAlQANhEgTh+QgUiLADgwQAEg+AxhUQAxhXAEgjQAFgkgHg7QgJhJAAgWQgBhwBdhLIAKBtIAKgsQAGgbAGgQICSiSIAzAPQAsgoBAgbQBDgcBCgDQCggJA5CBQDEBjCLDUQCvENDPF+QAlAdAugtQAggfATgqQArgRBHBAQgaiDAVhwQAVg2BDApQAUgjhcjXQhRi+gvhHIAZgsQgZgmAOgNQAOgMApATIAdgMQBoCvCBCPQAgAMAKAyQAKAzgfASQgKAzAvB/QAuB6AhAdQAJAHBIjNQBHgrAIg/QAGgugfhaIAhgqQANACAMgJIATgPQAvAbAYBIQAZBLgfAtQgCAiAKAXQAMAcAYgUQgSgxAFgTQAHgbAyAIQBECUBEDPQBRD5ABB0Qg+BKgQBmQgQBmAlBkQAaCDhYA8QhUA7h1guQhdA0hSANQhQANhsgTQg7BNg2AlQgzAigdgMQgegMAFg3QAGg8AwhcIhrgXIAZFqQhhCDBSC0QADBKhABJIg/HIQgwFdi1C1QiYCZjQAAIgegBg");
	this.shape_464.setTransform(-20.025,56.6064,0.1107,0.1107);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#F4F1EC").s().p("AjEAYQAigtBwgEICqAHQAVABAlgEQAZAFgHAoIjEACIjEgCg");
	this.shape_465.setTransform(-71.135,13.3423,0.1107,0.1107);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F7F7F4").s().p("AkRDoQACgGAfgeQAhggBPg7QBMg4AfggQBqhsg1iVQAbASB6A8QBqA+gPAtQgDAJjiByQjpB2gnA2IgUABQgaAAACgJg");
	this.shape_466.setTransform(-61.3519,37.5502,0.1107,0.1107);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#262222").s().p("AgBDjQgpgHgqgeQgpgegagoQgbgrABgoQiuBDjAgOIgkggQABgrAkgaQAJgHA/ggQAXAEBigJQBkgJgCgJIgWgrQAVgFAvgSQArgNAgACQALABATAUQASASAFgFQADgCgDgTQgCgUACgCQAEgFARgGQASgHAFgEQgDAyANgJIAQgOQAKgLAJgDQCdgxBIgGQAkgCAHABQAXAFgOAaQgKAUijAwQiIAohFANIAeAsQgEAeALAiQALAgAQAPQARAQALgOQANgRABg1QASggB4gbQB9gcAhAiQA7gBAJgHQAIgIgWgeQgLgPAVgnIAKgHQALgHABgHIhCgBQgJg3AUgKQAMgGBAAGQC0CXgbCdQgRAdjYA8QjfA/gugYQgYASggAAQgKAAgKgCg");
	this.shape_467.setTransform(-78.0197,43.9145,0.1107,0.1107);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#0D0C0B").s().p("AitZDQgHgggwhPQguhMgEgZQgCgSAKgtQAKgogJgjQgRhBhShSQhOhNgIg1QgDgVAXgIQAYgHgCgXQgGhLhSj5QhKjjAIhfQgugHAKg6QAJg6AogFIAJgvQgChKgUhgQgVhogDgpQgBgXALh6QAMh5AFgQQAGgUAogNQArgPAOgXQAvhPgShbIgRhJQgIgrAEghQAHg0BGiGQBIiKAlgVQAcgRAqAFQArAEADgCQAOgIAMgjQAOgnAJgKQAIgIBihVQBlhWAKgGQArgcCJgrQCGgrAzgEQAegDATAJQALAGAcAXIAAAAQAmAagDASQgCAPgdAEQgcAEgkgHQglgIgWgQIhOAIQgMBZi4gYIgBAxQg5ACgzA6QgSBOhYBOQhRBGhZAeQgpBJg2gXIAKA9QhWCBALC1QAiAmgZBUQgZBUgyANQgqAtgQBBQgLAtgDBVQgEBeARDhQAEAsAMAdQAdAGgdAQQA7HKBXFnQBLA1A8CAQA4B2AIBlIgeAtQBFBHgNBAQAKgbAUAaQATAZgGAZQgHAfgyADIgGABQgsAAgCgog");
	this.shape_468.setTransform(-85.1815,59.9268,0.1107,0.1107);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FDFEFD").s().p("AE0J6QgFAAguhFQg0hNgUgUQiRiRjQhAQjVhBjGAtQBFiRgei9QgViHhRjBQAwglBXgyQBFgwAihLQA0AaCdBFQCEA7BJArQhoB8gXCJQgaCWBPCEQCRBeDPB/IFjDZQgaAXg4ACQhQADgOADQgQAEhDAgQgwAWgXAAIgFAAg");
	this.shape_469.setTransform(-71.9831,26.4379,0.1107,0.1107);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#101110").s().p("EgoXAhFIgEgbQgEgNgOgEQBDjHCYjKQAkgwBkh9QBahvA1hJQBQhvCMj5QCJjzBUhxQAQgXAugeQArgeAFgJQAWglAHgrQAFgtAFgVQARhJB2hHIgBAAQBKgtFThpQE/hjAKgNQAFgGgKgpQgNg4gDggQgKiEBrg9QAngWCngZQCdgXALgPQAEhhgiiZQgrjIgGgrQgJhKgKh5QgBgQAfiRQAfiTAIgQQARglA7hTQAtg/AghkQAfhdCUhWQBeg1Ceg5QG/ihGZCXQCoA+DHB/QB7BPD1C1QCWBvDHCZQEgDfAKAZQAJAUgJAfQgJAggRAEQgbAHjygHQjWgHgYAfQgEAFAAAoQABAqgKAUQgHAPgcANQgeAOgFAHQgUAXgICvQgJDEgPAuQgEAOgqA+QgdArALAuQgLglgKgNQgPgSgeADQhNBrhhgUQgagWgGgOIgMgdQhmgFA6AaIALAWQAGAPAFAHQAUAriOBdQiDBUg2AHQi8goi2hkQgIAPgGAmIgIA5QhVAEh9hYQhchChahiQhAhHgYg1QhYiHiChTIgWAAQgzAWhBhGQg+hEAEg7IhLgTQg0hVgaA9QEpG7FlGXIAbgOQA3A7BHAVQAVAAAHAHQCyC4B0B6QAMAMgPAHQgOAHgVgMQgUARgFgDIgMgGQAKAJAFAbQBQgBBQA1QBHAvA1BMIgWArQgxBDgdBsQgtBIh1AtQh8Avgyg3QgUArgjAAQgdAAgogeQhKhqhqAXQhVAjg3ABQgxABgJgaQgKgZAhgkQAjgnBGggIhziPQgpAWgoACQglACgUgRQgVgQAHgcQAJgeArgiQgMhNgUgNQgXgRhJAdIgvgNIgVgsQgZgwBQgRQgfAAgggVQgcgSgPgZQgOgaALgNQAMgPAqAJQAchJBiA/QgOhbgwhQQgxhThKgzIgHg4QgpAVgogEQgmgDgYgYQgYgYABgkQACgnAhgrQAEgsAMABQANABAPAqQAhhVgrgPQgdgKhcAWIggAuQjLAbgEBeQgEBUCbB4QATgFAOACQAQADA8CAQA+CFgSAWIgVAWIggACQhjiQiEh4IgaARQgkg7gvAUIgcAyQhXAlhyAYQh9AahTgGQAMAegVAUQlFBJgfD1QkCEdiXFrIg3AgQlTGRjxHPIggAKQAZAigOANQgGAGgLAAQgPAAgWgJgAC8gsQgbALgBAIQgBAZBYA3QA4AkBAAfIgEAdQA8AbBCAiQgngcgagYQgGgFALgZQgWADgEgEQgFgDAJgSQhkg0hOhXQgXgYgSgaQAGAVgGAQgACQieQgOgegHgfQgagBgLgKIgFgGQAFAUgHATIABAAQAeAAAiAngAArkfQAVASAKASIgCgMIi8kbQgPAsAUBEQASBAAqBAQAPgJAQAAQAcAAAjAcg");
	this.shape_470.setTransform(-26.0955,-44.389,0.1107,0.1107);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#272323").s().p("AgLDvQgQABgGgHQAEgIgHAAQgIACgDAAIgRgKIgRgKQgZgSgWgjQgTgegNgjQgJgagEgVQACgCARACQASACAEACIALAVIANAbQAQAXATAJQAXAKAWgPQAdgUAAhKQAAgbgDgfQgEgbgFgTQgIgYgNgXQgOgagRgOQgTgQgSAEQgWAEgSAfIgEABIgSgKQgIgEgCgDQgDgEAAgHQABgGAEgOQAJgRANgMQANgNAQgGQAjgOAgAXQA0AmAXBHQARAxAGBQQgBgYAVAAQABgQAJgFQAKgFAKAOQABABAMgFIANgIQgEgEAAgEQAAgEADgDQADgCAEAAQAEABAEAEQABANAGAGQAGAHAGgOQAKgHADAHQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAGA8QgDAMgCAXQgCAZgCAJIgEALQgEAGABADIACAFQADAEgBADQAAAEgIAOQgIANgCgCIAAgDQAAgBAAgBQAAAAAAAAQgBAAAAgBQgBAAgBABQAAADgEAGQgDAFgBADQAAABAAABQAAABABAAQAAABAAAAQABAAAAABIAEgBQADADgCAHIgHAOIgFAEQgDADgEACQgCABgJABQgGABgDAFQAPAThAANQgSADgQABIgIAAQgPAAgIgDg");
	this.shape_471.setTransform(59.4597,45.2541,0.9,0.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#0B0A0A").s().p("AsALjQAngCAggKIgBAAQgDgHAFgGQAEgFAIgCQAIgCAFACQAGADgBAHIgIAGQgCADAEgBQAFAAAMgDIAIgDQATgHAMgHQAVgNgBgTQAKgMACgNQgGgBgBgFQAAgEAFgDQALABAEgGQACgEABgMQgIgeALgZIAAg1IAFgDQAKAAAAAPIAAAKQADgDAKgEQAIgEAKgDQAJgDACAAQgBgLgEgLIAEgFQgIgDgBgNQgDAGgSAAQgHAAgGgCIgDgBIACAGQABAGgFADQAFAGgCAEQgCAFgHgEQgGACAAgEQAAgEAEgEIgFgPQgWgCgMgMQgIgJgLgYIgUg1IgjACQgXgSAzgCQgHgYgJgPQgHABgTgBQgVgBgDgFIABgEIAagHQARABADgBQACgBgJgBIgUgDIgRAAIgLgFQgEAGgRgCQgHgBgFgDQgGgCgBgEQgGACAEALIgEgCIgBADQgYAEgWAJIgGgDQgEABgCgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgFAIgDQgBgFADgCQALgKAWgCIASgBIASgBIAJgDQAGgCAGAAQAQgBASAGIAgAOIACgKQABgGADgDIgBgDQAbgVAdgQQgPgHgIgMIgrgbIgNgEQgIgCgEgDQgqgZgYgQQgFgEgCgKQgCgJABgLQABgLADgKQAEgKAFgEIgngSIgEgIIgpgVQgfgPgGgFQgEgEgFgMQgEgMACgDQALgDASAGIANAFQAIADAFAAQALAAAXgBIAjgCQAMgDAMAAQANAAALADIAcABQARABAKgCQAMgCAbgKQAcgKANgCIA+gHQAzgFACgDIACgGIgBgGIgIgOIgLgPIgEgFIgFgFQgGgFgDgKQgMghACgdQABgYANglQgDgIABgFQACgFAIgEIADgEQACgDAAgCQAAgCgFgIQgFgGAAgFQAAgEAGgOIAEgOIgQgDQgLgCgFgDQgGADgSgMIgNgKQgFgFAAgBIACgEIgDgMIgDgMQgGgDABgHQABgGAHgBQAFgEAAADQABACgDAFQAFABAAAEQAAADgFADIAGADQAFARAPAMQANAKATAFQARAEAUgBQATgCAQgGIAHADQARgEgBAHIgWAOIgRABIAFAFQAGgGALALQAJAKACALIAJAAQAiAcAqAMQAsAMAqgIQAFAAANgFQAOgFANgHQAkgRgCgJQgMAAACgIQABgHAJgHIAdgZQgLgQgPAEQgTAPgSgGQgSAZglACQgdAtgcgVQgRADgOgFQgQgGAAgQQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQANgFASACQAagGAZABQAAANAIgRQAogBAagaQAHABAHgBQAFgBACgCQACgCgEAAQgFAAgJADQgFAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDACgBQADgCAEAAQABgGALgBQAKAAAEADQADAJAFAAQADABAJgGIADgBQADAEAMALIAcAUQAmAaAFgFIAAgEQAPgFABgLQgJAFgPgEQgLgDgOgHQgYgTgbgKQgEACgBgHIgCgBIAAABQgFAEgEgQQgDgNABgHIgpACQACALgHAFQgCAegLgoQgFgBgCgDQgBgCABgGQABgGAggCQAVgCASAAIABADQAKgBAHgDIAuAKQAXAIgFgmQgWADgLgLQgXAEgRABQgXACgRgCQgEgBgEgEQgBAIgMAEQgKAEgPAAQgNAAgOgCQgNgCgFgDIgCgFQgZAJgWADQgZAEgXgEQgJADgJAKIgGAAQgDAGgDgBQgEgCACgGIgCgDQAVgTAUgWQgJgYAPABQAAADAFgFIAGgIQAHgMgGgZQgGgYgJgNIABgHIgQgPQgLgGgEgHQgEgFADgDQADgDAIADQAIADAJAJQAKAKAIANQAIAMAEAOQgDgLADgFQADgFAEABQAFABABAEQABAFgFAGQALAKgDAVIAAAbQAGAAABAEQABADgFACQgBAFgHAHQgMAKAAADQABADAIgDIASgHIAQgIQALgLAJAEIAAgGQAPgRgFgnQgEgZgMgjQgBgCAEgCIgBgEIAEABQACAAAFAIIgUgpIACgFIAFABQAIADANAUQANAVgCAJQAGgBAAACQABABgEAEIAIADQAKAcAPAWQAQAYAVASQAHgDAJAAQAKAAAEAEQAEACABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCADgDAAQgEABgEgBIgQAFQgHACgEgBQgJgCgIgTIgHgHQgGgEAAACQAAACAOAXQAPAXACABQACABAgABQAgAAACgBIAEgFIAFgJQAHgOgJABQgLACgIgDQgIgDgCgFQgCgGAEgEQAGgFAMAAQASAGAHgFQAFgDAFgTQAJgSgdgJIgBgGQgFgDABgBQABgCAGABQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgTgNgRgRQgSgRgNgTIACgCIAEgBIgPgKQAAABgBABQAAAAAAAAQgBAAAAAAQAAgBAAgBIgEgBIgPgTIgOgTIAAgEQgHgDgHgKQgIgLAEgFQAAgBAAAAQAAgBABAAQAAAAAAABQABAAAAABQAIAEAIAIQAGAIAFAJQALAOASAOQAPAMAPAJIAAgGQgFgEABgFQAAgEAHAAIACgBQAOAJAHADQAKAFAHAAQAQABAWgTQAFADAAgMQgEABgBgCQAAgCADgCQgBgBAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAFgBABACQACACgDAFQANABAJgMQAHgNABAVIABAIIACAIQAHABAAAPQARAIANANQAMALAKASQAgA+ApAgQAzAnA7gQQASAHALgBQAKgBATgJQAKgEASAWIANARQAGAJABAFQAFAMgDAQQgCAPgJAMQgIANgNAGQgNAGgPgEQghgOgGAVQgTAFgSgEQgUgEgLgOIgeAKIgGAsQgFADgBAEIAAANQAAABAAAAQABABAAABQAAAAABAAQAAAAABAAIAIAAQAGAAAGACQAXAHAXAUIAUATIARATIAPANQALAJAEAFIAGgEIALgIQAPgNAIABQACAAAEADQADADAEgBIAhgMIAkgNIALgHIAIgFQAEgBAEACQAFADAHAJQANATAAATIgCARIgBAUIACAFQACAEAAADQAAADgDAIIgEAMIgDAcQgBATgCAIQgCAKgTAGIgNAFQgHACgBABIgEANQgDAMABABIAPADIASAfQAOAZACABQAFADALgCIAWgEQANgCAJACQALAEAHAMQAFAJADAcQADAagBAMQgCALgHAKIgQAPIgCADIAAADIAgAOIACgOIACgQIAKgWIAMgYQABgDAKgJQAJgJADgCIAGABQAFABACgBQADgCADgGQACgGACgBQADgDAOgFQAOgFAEAAQADAAAEACIAFACQAEAAAKgIQALgIAGgCQARgDATAIIAOAGQAIADAGgBQADAAAFgDQAFgCAEABQAUAFANAQIAKAPQAHAJAGAFIAFADIAHAEIANAbIAPAeQAXA3AJBNQAJBNgLA6IgEAKIgDAIIABAIQABAGgBAFIgEANIgGAMQgBADgEACIgGADQgHAEAAAGQgCAGgDgBQgDgBgDgGQgBgCACgEIAEgJQAIgLAFADQAFgEAEgKQAEgLgGgEQAJgmAEgcQAEglgFgeQAHgEgEgQQgHgCABgMQgFADgDgBQgDgCgFgaQgFgaABgCIAEgEIAGgCQgJgrgQgdQgFAGgGgFQgFgDgEgLQgEgJgCgJQgBgKABAAQAOAEgGgEQgEgDgJgDQgGAAgBgKIgLgCQgGgCgEgDQgIgIAOgGIgDgEIgGgGQgJgGgCAFQgGACgIgDQgIgCgBgGQgFACgDAAQgDgBgFgEIgDAFQgZgMgagBQADAJgQACIgDAAQABADgDAEQgDADgFABQgEABgDgBQgEgCgBgEQgKADgDACQgFAEgDAIIgjAQQgKAEgDAEQgEAFABAKIgYAjIAEAGQgMAbAjAJQAUgeAWgFQAUgEAUAQQARAOAQAaQANAXAIAZQAHAWAEAdQAFAjgBAeQgCBPgpATQghAOgeggQgUgWgSgpIgQgDQgNgCgBABQgCADAJAZIAMAfQARApAXAbQAaAgAjAQQAEgCAGABQAEABADACQADACAAACQgBADgGACQgFAGgOgBQgNgBgOgLQgPgLgFgKQgPgIgJgLQgLgNgEgPQgFgBAAgBQAAgBAFgCQgEgBgDgEIgGgIQgMgTgIgaQgIgYgDgYQgRABgIgIQgHgDgGAFIgngHQgegGgFgDIgFgFIgFAEQg0gWhFAPQgbAGghAMIg5AZQgBAbACAaIgFAEQAEAEAAAFQgBAFgGACQAGACgBAOQgBAMgDAIIgFALQgDADgHAEQAAAIgFAFIAFAFQgGA7g0ARIgCAFQgjABgiAEQgDASgEAIQgGALgNAEQAIAUgKANQgJALgWAGIgLAJIAFgBIgEADQgIABgFADIgIACIgGADIgGACIgpAHQgYAEgRgEIgagGIgWgEQgFAAgEgBIgJgCIgGgMQgQgIgMgOQgKgNgIgTQAEgDgBgDQgFADgDgDQgDgDADgFIgIgDIgQgqIACgGQgMgVgGgbIgGgGQgIgkgFA1IgGACQAFAHgHAOQgFAMgJAHQgIAGghAGQggAGgMgBQgZgCgSgSQgQgPgLgaIgUADQgBANgHAOQAIAWgFAUQgEARgQAWQgCANgHAEQAHAHgGAKQgFAJgKADIACAFIgKACIghALIgjAJQgTAFgYACIglACQgOAAgDABgAn8IjQgCABACAGQADAHAGAJQAKANANAHQANAHAOAAQAOAAANgGQANgHAKgMQAIgGAGgCQAJgEAFAEQAJgXADgaQgEgFAAgFQAAgEADgCQADgDAEACQAEACADAGQACACgBgIQgBgHgBgBQgDgCgegBQgegBgHADQg8AghCALQgFgBgBgBIAAAIQBRgNA0gkQAEACAAAEQAJAEgHAKQgFAIgKAFQgeANgiAIQgBABAMAOQAMAMAEACIgBAGQgLALgTgYQgFgLgEgGQgEgDgBAAIgBAAgAmNkYQgMgGgBgJQgIABgSgOQgSgOAAgGQgBgFAEgCIgVACIgKAYIgFABQAIANAPAEQAKACAUgDQATAEASAIIAAAAgAhCpIQAGAFAHACQAIACAGgCQgKgIgDgPQgVgWATgQQgeAPgjgVQgDABgDgBIgBADIgUgOQApAiAnAlgAI9I1IAEAAIgCAAIgCAAg");
	this.shape_472.setTransform(-4.2825,16.1113,0.9,0.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#0B0A0A").s().p("AFuDlQgpgFgMgpQhJAEglgaQg6hDh0gUQgVACgFgOQgFgNAJgTQjnAOjdguIgGghQgWAVgGgHQgGgGAMgdIAGggQBjgDAahLQgRgnAQgQQAOgPAbAMQAcAMAPAfQAQAkgOAuQFPBGFPBVIAfAnQAsAagGAkQgGAfglAXQgfATgeAAIgMgBg");
	this.shape_473.setTransform(46.0217,35.2797,0.1107,0.1107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},37).to({state:[]},1).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},33).wait(97));

	// Layer_10
	this.instance = new lib.ee6smokerolling2("synched",0);
	this.instance.setTransform(-16.45,78.05,0.2708,0.2708,-60.0001,0,0,-141.1,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({startPosition:37},0).to({_off:true},1).wait(33).to({_off:false,startPosition:71},0).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-67.9,213.2,159.9);


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
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(386));

	// Layer_9
	this.instance = new lib.Symbol1();
	this.instance.setTransform(342.65,181.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({x:272.65,alpha:1},9).wait(325));

	// lo
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(253.05,225.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({alpha:1},9).wait(333));

	// dis
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(109.25,227.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(341));

	// logo
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(230.2,50.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(348));

	// Heasd4
	this.instance_4 = new lib.text_04("synched",0);
	this.instance_4.setTransform(52,45.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(257).to({_off:false},0).to({x:72,alpha:1},8,cjs.Ease.get(1)).wait(115).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// Heasd3
	this.instance_5 = new lib.fr2();
	this.instance_5.setTransform(33.75,52.15,1.0986,1.0986,0,0,0,58,38.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(193).to({_off:false},0).to({regX:58.1,x:66.85,alpha:1},9,cjs.Ease.get(1)).wait(47).to({alpha:0},8).to({_off:true},1).wait(128));

	// Heasd2
	this.instance_6 = new lib.Heasd2("synched",0);
	this.instance_6.setTransform(103,45.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96).to({_off:false},0).to({x:113,alpha:1},8,cjs.Ease.get(1)).wait(81).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(193));

	// head
	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.setTransform(26.9,42.4,1.0986,1.0986,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:70.85,alpha:1},9,cjs.Ease.get(1)).wait(67).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(290));

	// PIC4
	this.instance_8 = new lib.Symbol1_1("synched",71);
	this.instance_8.setTransform(544.15,42.3,0.5,0.5,0,0,0,0.1,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(249).to({_off:false},0).wait(1).to({regX:-36.7,regY:25.9,x:528.55,y:55.25,alpha:0.2031,startPosition:72},0).wait(1).to({x:531.35,alpha:0.4047,startPosition:73},0).wait(1).to({x:534.15,alpha:0.6047,startPosition:74},0).wait(1).to({x:536.95,alpha:0.8031,startPosition:75},0).wait(1).to({regX:0.1,regY:0,x:558.1,y:42.3,alpha:1,startPosition:76},0).wait(1).to({regX:-36.7,regY:25.9,x:542.4,y:55.25,startPosition:77},0).wait(1).to({x:545.1,startPosition:78},0).wait(1).to({x:547.75,startPosition:79},0).wait(1).to({x:550.45,startPosition:80},0).wait(1).to({x:553.05,startPosition:81},0).wait(1).to({x:555.65,startPosition:82},0).wait(1).to({x:558.25,startPosition:83},0).wait(1).to({x:560.85,startPosition:84},0).wait(1).to({x:563.4,startPosition:85},0).wait(1).to({x:565.9,startPosition:86},0).wait(1).to({x:568.4,startPosition:87},0).wait(1).to({x:570.9,startPosition:88},0).wait(1).to({x:573.35,startPosition:89},0).wait(1).to({x:575.8,startPosition:90},0).wait(1).to({x:578.2,startPosition:91},0).wait(1).to({x:580.6,startPosition:92},0).wait(1).to({x:582.95,startPosition:93},0).wait(1).to({x:585.3,startPosition:94},0).wait(1).to({x:587.65,startPosition:95},0).wait(1).to({x:589.95,startPosition:96},0).wait(1).to({x:592.25,startPosition:97},0).wait(1).to({x:594.5,startPosition:98},0).wait(1).to({x:596.75,startPosition:99},0).wait(1).to({x:599,startPosition:100},0).wait(1).to({x:601.2,startPosition:101},0).wait(1).to({x:603.35,startPosition:102},0).wait(1).to({x:605.5,startPosition:103},0).wait(1).to({x:607.65,startPosition:104},0).wait(1).to({x:609.75,startPosition:105},0).wait(1).to({x:611.85,startPosition:106},0).wait(1).to({x:613.9,startPosition:107},0).wait(1).to({x:615.95,startPosition:108},0).wait(1).to({x:618,startPosition:109},0).wait(1).to({x:620,startPosition:110},0).wait(1).to({x:622,startPosition:111},0).wait(1).to({x:623.95,startPosition:112},0).wait(1).to({x:625.9,startPosition:113},0).wait(1).to({x:627.8,startPosition:114},0).wait(1).to({x:629.7,startPosition:115},0).wait(1).to({x:631.55,startPosition:116},0).wait(1).to({x:633.45,startPosition:117},0).wait(1).to({x:635.25,startPosition:118},0).wait(1).to({x:637.05,startPosition:119},0).wait(1).to({x:638.85,startPosition:120},0).wait(1).to({x:640.6,startPosition:121},0).wait(1).to({x:642.35,startPosition:122},0).wait(1).to({x:644.1,startPosition:123},0).wait(1).to({x:645.8,startPosition:124},0).wait(1).to({x:647.45,startPosition:125},0).wait(1).to({x:649.15,startPosition:126},0).wait(1).to({x:650.75,startPosition:127},0).wait(1).to({x:652.4,startPosition:128},0).wait(1).to({x:653.95,startPosition:129},0).wait(1).to({x:655.55,startPosition:130},0).wait(1).to({x:657.1,startPosition:131},0).wait(1).to({x:658.6,startPosition:132},0).wait(1).to({x:660.15,startPosition:133},0).wait(1).to({x:661.6,startPosition:134},0).wait(1).to({x:663.1,startPosition:135},0).wait(1).to({x:664.5,startPosition:136},0).wait(1).to({x:665.95,startPosition:137},0).wait(1).to({x:667.35,startPosition:138},0).wait(1).to({x:668.7,startPosition:139},0).wait(1).to({x:670.05,startPosition:140},0).wait(1).to({x:671.4,startPosition:141},0).wait(1).to({x:672.7,startPosition:142},0).wait(1).to({x:674,startPosition:143},0).wait(1).to({x:675.25,startPosition:144},0).wait(1).to({x:676.5,startPosition:145},0).wait(1).to({x:677.75,startPosition:146},0).wait(1).to({x:678.95,startPosition:147},0).wait(1).to({x:680.1,startPosition:148},0).wait(1).to({x:681.3,startPosition:149},0).wait(1).to({x:682.4,startPosition:150},0).wait(1).to({x:683.55,startPosition:151},0).wait(1).to({x:684.65,startPosition:152},0).wait(1).to({x:685.7,startPosition:153},0).wait(1).to({x:686.75,startPosition:154},0).wait(1).to({x:687.8,startPosition:155},0).wait(1).to({x:688.8,startPosition:156},0).wait(1).to({x:689.8,startPosition:157},0).wait(1).to({x:690.75,startPosition:158},0).wait(1).to({x:691.7,startPosition:159},0).wait(1).to({x:692.6,startPosition:160},0).wait(1).to({x:693.5,startPosition:161},0).wait(1).to({x:694.4,startPosition:162},0).wait(1).to({x:695.25,startPosition:163},0).wait(1).to({x:696.1,startPosition:164},0).wait(1).to({x:696.9,startPosition:165},0).wait(1).to({x:697.7,startPosition:166},0).wait(1).to({x:698.45,startPosition:167},0).wait(1).to({x:699.2,startPosition:0},0).wait(1).to({x:699.9,startPosition:1},0).wait(1).to({x:700.65,startPosition:2},0).wait(1).to({x:701.3,startPosition:3},0).wait(1).to({x:701.95,startPosition:4},0).wait(1).to({x:702.6,startPosition:5},0).wait(1).to({x:703.25,startPosition:6},0).wait(1).to({x:703.8,startPosition:7},0).wait(1).to({x:704.4,startPosition:8},0).wait(1).to({x:704.95,startPosition:9},0).wait(1).to({x:705.5,startPosition:10},0).wait(1).to({x:706,startPosition:11},0).wait(1).to({x:706.5,startPosition:12},0).wait(1).to({x:706.95,startPosition:13},0).wait(1).to({x:707.4,startPosition:14},0).wait(1).to({x:707.8,startPosition:15},0).wait(1).to({x:708.2,startPosition:16},0).wait(1).to({x:708.6,startPosition:17},0).wait(1).to({x:708.95,startPosition:18},0).wait(1).to({x:709.3,startPosition:19},0).wait(1).to({x:709.6,startPosition:20},0).wait(1).to({x:709.9,startPosition:21},0).wait(1).to({x:710.15,startPosition:22},0).wait(1).to({x:710.4,startPosition:23},0).wait(1).to({x:710.65,startPosition:24},0).wait(1).to({x:710.85,startPosition:25},0).wait(1).to({x:711.05,startPosition:26},0).wait(1).to({x:711.2,startPosition:27},0).wait(1).to({x:711.35,startPosition:28},0).wait(1).to({x:711.45,startPosition:29},0).wait(1).to({x:711.55,startPosition:30},0).wait(1).to({x:711.65,startPosition:31},0).wait(1).to({x:711.7,startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({regX:0.1,regY:0,x:730.15,y:42.3,startPosition:34},0).wait(1).to({startPosition:34},0).to({alpha:0},4).wait(1));

	// PIC3
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(720.25,54.8,0.6925,0.6925);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(193).to({_off:false},0).to({x:573.3},54).to({_off:true},2).wait(137));

	// PIC2
	this.instance_10 = new lib.PIC2();
	this.instance_10.setTransform(548.6,45.2,0.3635,0.3635,0,0,0,130.6,83.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96).to({_off:false},0).to({x:722.95},96).to({_off:true},1).wait(193));

	// PIC1
	this.instance_11 = new lib.pic1();
	this.instance_11.setTransform(478.6,45.2,0.3635,0.3635,0,0,0,115.5,110.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({x:725.95},86).to({_off:true},1).wait(290));

	// Layer_2
	this.instance_12 = new lib.Tween14("synched",0);
	this.instance_12.setTransform(150,125);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},9).wait(377));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhP/AHCIAAuDMCf/AAAIAAODg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(386));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,0,1053.6,90);


// stage content:
(lib.WBAY_213628_MM_1024x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP6gG8MCf1AAAIAAN5Mif1AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/AHCIAAuDMCf/AAAIAAODg");
	mask.setTransform(512,45);

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
p.nominalBounds = new cjs.Rectangle(511.5,44.5,513,205.5);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 1024,
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