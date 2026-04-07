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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.instance.setTransform(-150,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-124,300,250);


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
	this.shape.graphics.f("#000000").s().p("AgMA7IAAgbIAaAAIAAAbgAgGATIgIhKIAAgDIAdAAIAAADIgIBKg");
	this.shape.setTransform(23.45,-4.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAuIAAgyQAAgSgQAAQgPAAAAASIAAAyIgaAAIAAhaIAaAAIAAANQAMgPAOABQAOgBAJAKQAIAIAAARIAAA5g");
	this.shape_1.setTransform(15.475,-3.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_2.setTransform(4.875,-3.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsA7IAAh1IBZAAIAAAYIg/AAIAAAYIA3AAIAAAXIg3AAIAAAug");
	this.shape_3.setTransform(-5.575,-4.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAvIAAhaIAaAAIAAASQAHgVAUABIAAAbIgBAAQgbAAABAfIAAAig");
	this.shape_4.setTransform(-19.85,-3.6506);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_5.setTransform(-29.025,-3.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAiQgNgNAAgVIAAAAQAAgTAOgOQAOgOAUABQAVgBAOAOQAPAOAAATQAAAUgPAOQgOANgVAAQgUAAgPgNgAgRgRQgGAIAAAJQAAAKAHAHQAGAIAKAAQALAAAGgHQAHgHAAgLIAAAAQAAgJgHgIQgHgHgKAAQgKAAgHAHg");
	this.shape_6.setTransform(-39.9,-3.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMA7IAAguIguhHIAfAAIAbAvIAdgvIAeAAIguBGIAAAvg");
	this.shape_7.setTransform(-51.625,-4.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAiQgOgNAAgVIAAAAQAAgTANgNQANgOASgBQAWABAMAPQALAOAAATIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_8.setTransform(4.575,-18.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAhQgOgNAAgUIAAAAQAAgTAOgNQAOgOAUgBQAWAAAOAQIgQARQgJgKgMAAQgJAAgFAHQgHAIAAAJQAAALAHAHQAGAHAKAAQAKAAAKgKIAQAQQgQARgWAAQgTAAgOgPg");
	this.shape_9.setTransform(-5.35,-18.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAuIAAgxQAAgTgQAAQgPAAAAATIAAAxIgaAAIAAhaIAaAAIAAAOQAMgPAOgBQAOAAAJAJQAIAKAAAQIAAA5g");
	this.shape_10.setTransform(-15.525,-18.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgRAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_11.setTransform(-26.1,-18.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQAuIAAgxQAAgTgQAAQgPAAAAATIAAAxIgaAAIAAhaIAaAAIAAAOQAMgPAOgBQAOAAAJAJQAIAKAAAQIAAA5g");
	this.shape_12.setTransform(-36.125,-18.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_13.setTransform(-43.975,-20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsA7IAAh2IBZAAIAAAZIg/AAIAAAZIA3AAIAAAWIg3AAIAAAug");
	this.shape_14.setTransform(-51.725,-19.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-29.6,88.1,36);


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
	this.instance.setTransform(-61,-40,0.729,0.729);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-40,122.5,66.4);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgMA8IAAgbIAaAAIAAAbgAgGATIgIhKIAAgEIAdAAIAAAEIgIBKg");
	this.shape.setTransform(24.2,16.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMA8IAAgwIguhHIAfAAIAbAxIAdgxIAeAAIguBHIAAAwg");
	this.shape_1.setTransform(15.375,16.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkA8IgLgbIgxAAIgLAbIgbAAIAzh3IAXAAIAzB3gAAPAKIgPgmIgPAmIAeAAg");
	this.shape_2.setTransform(2.6,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2A8IAAh3IAuAAQAbAAASARQASARAAAZIAAAAQAAAZgSASQgSARgbAAgAgcAkIAUAAQAPAAAKgKQAKgKAAgPIAAgBQAAgPgKgKQgKgKgPAAIgUAAg");
	this.shape_3.setTransform(-10.425,16.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsAsQgSgSAAgZIAAgBQAAgYASgTQASgRAagBQAbABASARQASASAAAZIAAAAQAAAZgSATQgSARgbABQgagBgSgRgAgZgZQgKAKAAAPIAAAAQAAAQAKALQALALAOgBQAQABAKgLQAKgLAAgPIAAgBQAAgOgKgLQgLgMgPABQgPgBgKAMg");
	this.shape_4.setTransform(-24.575,16.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMA8IAAheIgkAAIAAgZIBhAAIAAAZIgkAAIAABeg");
	this.shape_5.setTransform(-37.275,16.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAjQgOgOAAgUIAAgBQAAgSANgPQANgOASAAQAWAAAMAPQALAPAAATIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNARgYABQgUAAgNgNgAAUgGQgCgJgEgFQgGgGgIABQgPAAgDATIAmAAIAAAAg");
	this.shape_6.setTransform(37.425,1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAhQgOgNAAgTIAAgBQAAgSAOgPQAOgOAUAAQAWABAOAPIgQARQgJgKgMAAQgJAAgFAIQgHAGAAAKQAAALAHAHQAGAHAKAAQAKAAAKgKIAQAQQgQARgWAAQgTgBgOgOg");
	this.shape_7.setTransform(27.5,1.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgPAOAAQAOABAJAIQAIAKAAAPIAAA7g");
	this.shape_8.setTransform(17.325,1.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgRAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_9.setTransform(6.75,1.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgPAOAAQAOABAJAIQAIAKAAAPIAAA7g");
	this.shape_10.setTransform(-3.275,1.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_11.setTransform(-11.125,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRA/IAAhEIgLAAIAAgVIALAAIAAgGQAAgPAIgHQAHgIAMAAQALAAAIADIAAAVQgGgCgGAAQgJAAAAAKIAAAEIAVAAIAAAVIgVAAIAABEg");
	this.shape_12.setTransform(-16.775,-0.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAjQgOgOAAgUIAAgBQAAgSANgPQANgOASAAQAWAAAMAPQALAPAAATIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNARgYABQgUAAgNgNgAAUgGQgCgJgEgFQgGgGgIABQgPAAgDATIAmAAIAAAAg");
	this.shape_13.setTransform(-25.375,1.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVA8IgZgmIgUAAIAAAmIgaAAIAAh2IA1AAQAXAAAMAMQAKAKAAARQAAAagaAKIAdArgAgYAAIAZAAQAKAAAFgGQAFgEAAgIIAAAAQAAgRgUAAIgZAAg");
	this.shape_14.setTransform(-36.225,0.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAvIAAhaIAZAAIAAASQAIgVAVABIAAAbIgCAAQgbAAAAAfIAAAig");
	this.shape_15.setTransform(10.45,-14.5506);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjAiQgNgOAAgUIAAAAQAAgTAOgOQAOgNAUAAQAVAAAOANQAPAOAAATQAAAUgPAOQgOAOgVgBQgUAAgPgNgAgRgRQgGAIAAAJQAAAKAHAIQAGAHAKAAQALAAAHgHQAGgHAAgLIAAAAQAAgJgHgIQgHgHgKAAQgKAAgHAHg");
	this.shape_16.setTransform(0.95,-14.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA1IAJgTQAGAEAFAAQAHAAACgGIgjhaIAbAAIATA9IAUg9IAbAAIgjBcQgFAOgHAGQgFAFgLAAQgNAAgLgGg");
	this.shape_17.setTransform(-14.9,-13.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_18.setTransform(-25.275,-14.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxA7IAAh1IA2AAQAUAAAKAKQAJAIAAAMQAAARgQAJQAWAIABAUIAAABQgBAQgMAIQgLAJgVgBgAgYAkIAeAAQATAAAAgMQAAgNgUAAIgdAAgAgYgLIAYAAQASAAAAgMIAAAAQAAgNgSAAIgYAAg");
	this.shape_19.setTransform(-36.3,-15.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-25.5,89.69999999999999,53);


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
	this.instance.setTransform(-38.05,-17.8,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-17.8,76.1,35.7);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAHAAIAAAIg");
	this.shape.setTransform(-60.5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_1.setTransform(-62.275,2.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_2.setTransform(-65.775,3.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAWIgTgrIAHAAIAOAjIAPgjIAHAAIgTArg");
	this.shape_3.setTransform(-69.85,3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAQQgGgHAAgIIAAgBQAAgJAGgGQAHgHAJAAQAKAAAHAHQAGAGAAAJQAAAJgGAHQgIAHgJAAQgJAAgHgHgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAHAAAEgFQAFgFAAgGIAAgBQAAgGgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_4.setTransform(-74.3,3.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_5.setTransform(-77.875,3.2219);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAGAAIAAAJQAHgKAJAAQAIAAAHAGQAGAGAAALQAAAJgGAHQgHAGgIAAQgJAAgHgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAEAFAGAAQAGAAAFgFQAFgEAAgHQAAgIgFgFQgFgEgGAAQgGAAgEAEg");
	this.shape_6.setTransform(-81.6,3.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAHAAIAAAJQAGgKAJAAQAJAAAFAGQAHAGAAALQAAAJgHAHQgFAGgJAAQgJAAgGgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAFAFAFAAQAHAAAEgFQAFgEgBgHQABgIgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_7.setTransform(-86.3,3.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_8.setTransform(-91.625,3.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_9.setTransform(76.325,-5.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAeIAAgrIAFAAIAAArgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_10.setTransform(73.925,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAaQgGgHAAgKQAAgKAGgGQAHgHAIAAQAJAAAHAKIAAgbIAGAAIAAA9IgGAAIAAgJQgHALgJgBQgIAAgHgFgAgKgDQgFADAAAJQAAAHAFAFQAFAFAFAAQAHAAAEgFQAFgFAAgHQAAgIgFgEQgEgFgHABQgFgBgFAFg");
	this.shape_11.setTransform(70.8,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAGAAAJIAAACIgiAAQABAHAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgBQAAgHgEgEQgDgEgHgBQgEABgEAEQgEAEgBAHIAbAAIAAAAg");
	this.shape_12.setTransform(65.925,-5.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_13.setTransform(62.575,-5.2781);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAQQgGgHAAgJIAAAAQAAgJAGgGQAHgHAIAAQALAAAHAIIgEAEQgHgGgHAAQgFAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAGgHIAEAFQgHAIgLAAQgIAAgHgHg");
	this.shape_14.setTransform(58.825,-5.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJIAAAAQAAgJAHgGQAGgHAJAAQAKAAAHAHQAGAGAAAJQAAAJgGAHQgIAHgJAAQgJAAgGgHgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAHAAAEgFQAFgEAAgIIAAAAQAAgGgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_15.setTransform(52.05,-5.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_16.setTransform(48.625,-5.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_17.setTransform(43.925,-5.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAQQgGgHAAgJIAAAAQAAgJAGgGQAHgHAIAAQALAAAHAIIgEAEQgHgGgHAAQgFAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAGgHIAEAFQgHAIgLAAQgIAAgHgHg");
	this.shape_18.setTransform(40.475,-5.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAGAAAJIAAACIgiAAQABAHAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgBQAAgHgEgEQgDgEgHgBQgEABgEAEQgEAEgBAHIAbAAIAAAAg");
	this.shape_19.setTransform(35.825,-5.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAlIAAgFIAEAAQAEAAAAgGIAAguIAGAAIAAAuQAAAMgKAAIgEgBgAAAgdIAAgIIAIAAIAAAIg");
	this.shape_20.setTransform(32.175,-5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAWIAAAIIgHAAIAAg9IAHAAIAAAbQAGgKAJAAQAJAAAFAHQAHAGAAAKQAAAKgHAHQgFAFgJAAQgJAAgGgJgAgKgDQgFAEAAAIQAAAHAFAFQAFAFAFAAQAGAAAFgFQAFgFgBgHQABgIgFgEQgFgFgGABQgFgBgFAFg");
	this.shape_21.setTransform(29.7,-6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOASQgEgFAAgIIAAgbIAGAAIAAAZQAAAGAEAEQADAEAFAAQAFgBAEgEQAEgDAAgHIAAgYIAGAAIAAArIgGAAIAAgHQgGAIgIAAQgIAAgFgEg");
	this.shape_22.setTransform(24.625,-5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAQIAEgFQAHAGAGAAQAFAAACgCQADgCAAgDIAAAAQAAgDgDgCIgIgDIgJgDQgFgDAAgFQABgGAEgEQAEgDAFAAQAJAAAHAFIgDAFQgGgEgHAAQgDAAgCABQgCACgBADIAAAAQABADADACIAHADIAJADQAFADAAAFQAAAHgFADQgEAEgHAAQgJAAgIgHg");
	this.shape_23.setTransform(19.85,-5.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANAWIAAgYQAAgHgEgDQgCgEgHABQgEAAgEADQgDAEAAAGIAAAYIgHAAIAAgrIAHAAIAAAIQAEgJAKAAQAHAAAFAGQAEAEAAAIIAAAag");
	this.shape_24.setTransform(13.4,-5.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAQQgGgHAAgJIAAAAQAAgJAGgGQAHgHAJAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgJAAgHgHgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAHAAAFgFQAEgEAAgIIAAAAQAAgGgEgFQgFgFgHAAQgGAAgEAFg");
	this.shape_25.setTransform(8.8,-5.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAeIAAgrIAFAAIAAArgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_26.setTransform(5.325,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_27.setTransform(3.525,-5.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_28.setTransform(-0.525,-5.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAQQgGgHAAgJIAAAAQAAgJAGgGQAHgHAIAAQALAAAHAIIgEAEQgHgGgHAAQgFAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAGgHIAEAFQgHAIgLAAQgIAAgHgHg");
	this.shape_29.setTransform(-4.625,-5.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgCAeIAAgrIAFAAIAAArgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_30.setTransform(-7.825,-6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_31.setTransform(-9.675,-6.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAGAAIAAAJQAHgKAJAAQAIAAAHAGQAGAGAAALQAAAJgGAHQgHAGgIAAQgJAAgHgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAFAFAFAAQAGAAAFgFQAEgEABgHQgBgIgEgFQgFgEgGAAQgFAAgFAEg");
	this.shape_32.setTransform(-12.55,-4.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAGAAIAAAJQAHgKAJAAQAIAAAHAGQAGAGAAALQAAAJgGAHQgHAGgIAAQgJAAgHgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAEAFAGAAQAGAAAFgFQAFgEAAgHQAAgIgFgFQgFgEgGAAQgGAAgEAEg");
	this.shape_33.setTransform(-17.25,-4.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXAeIgHgPIgfAAIgIAPIgGAAIAbg7IAFAAIAbA7gAANAIIgNgdIgNAdIAaAAg");
	this.shape_34.setTransform(-22.475,-6.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAHAAIAAAIg");
	this.shape_35.setTransform(-29.5,-3.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAbIACgGQADACAEAAQADAAACgCIAEgGIgUgrIAHAAIAPAkIAOgkIAHAAIgTAtQgCAGgDADQgDADgFAAQgEAAgFgCg");
	this.shape_36.setTransform(-32.3,-4.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_37.setTransform(-35.525,-6.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAGAAIAAAJQAHgKAJAAQAIAAAHAGQAGAGAAALQAAAJgGAHQgHAGgIAAQgJAAgHgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAEAFAGAAQAGAAAFgFQAFgEAAgHQAAgIgFgFQgFgEgGAAQgGAAgEAEg");
	this.shape_38.setTransform(-38.4,-4.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAHAAIAAAJQAGgKAJAAQAJAAAFAGQAHAGAAALQAAAJgHAHQgFAGgJAAQgJAAgGgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAFAFAFAAQAHAAAEgFQAFgEgBgHQABgIgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_39.setTransform(-43.1,-4.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_40.setTransform(-48.425,-5.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAQIAEgFQAHAGAGAAQAFAAACgCQADgCAAgDIAAAAQAAgDgDgCIgIgDIgJgDQgFgDAAgFQABgGAEgEQAEgDAFAAQAJAAAHAFIgDAFQgGgEgHAAQgDAAgCABQgCACgBADIAAAAQABADADACIAHADIAJADQAFADAAAFQAAAHgFADQgEAEgHAAQgJAAgIgHg");
	this.shape_41.setTransform(-55.3,-5.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AANAWIAAgYQAAgHgDgDQgEgEgFABQgFAAgEADQgDAEgBAGIAAAYIgGAAIAAgrIAGAAIAAAIQAFgJAKAAQAHAAAFAGQAEAEAAAIIAAAag");
	this.shape_42.setTransform(-59.4,-5.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJIAAAAQAAgJAHgGQAGgHAJAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgJAAgGgHgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgEAAgIIAAAAQAAgGgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape_43.setTransform(-64,-5.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCAeIAAgrIAFAAIAAArgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_44.setTransform(-67.475,-6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_45.setTransform(-69.275,-5.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNAQQgGgHAAgJIAAAAQAAgJAGgGQAHgHAIAAQALAAAHAIIgEAEQgHgGgHAAQgFAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAGgHIAEAFQgHAIgLAAQgIAAgHgHg");
	this.shape_46.setTransform(-72.725,-5.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAeIAAgrIAFAAIAAArgAgDgWIAAgIIAHAAIAAAIg");
	this.shape_47.setTransform(-75.925,-6.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_48.setTransform(-77.875,-5.2781);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_49.setTransform(-80.525,-5.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgQAQIADgFQAIAGAHAAQADAAADgCQADgCAAgDIAAAAQAAgDgDgCIgIgDIgJgDQgEgDgBgFQAAgGAFgEQADgDAHAAQAHAAAIAFIgDAFQgGgEgHAAQgDAAgCABQgDACABADIAAAAQgBADAEACIAHADIAJADQAFADAAAFQAAAHgFADQgEAEgGAAQgKAAgIgHg");
	this.shape_50.setTransform(-84.4,-5.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAGAAAJIAAACIgiAAQABAHAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgBQAAgHgEgEQgDgEgHgBQgEABgEAEQgEAEgBAHIAbAAIAAAAg");
	this.shape_51.setTransform(-88.625,-5.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_52.setTransform(-91.975,-5.2781);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAMAXIAAgZQAAgHgCgDQgEgEgFAAQgFAAgEAFQgDADgBAHIAAAYIgGAAIAAgrIAGAAIAAAHQAGgJAJABQAHAAAFAEQAEAGAAAHIAAAbg");
	this.shape_53.setTransform(87.85,-13.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_54.setTransform(84.475,-14.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_55.setTransform(80.975,-13.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_56.setTransform(77.975,-14.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_57.setTransform(75.475,-13.7781);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_58.setTransform(71.325,-13.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRAWQgJgJAAgNIAAAAQAAgMAJgJQAIgJAMAAQANAAAKAKIgEAFQgJgJgKAAQgJAAgGAIQgHAHAAAJQAAAKAHAHQAGAIAJAAQAKAAAJgJIAFAEQgLALgNAAQgMAAgIgJg");
	this.shape_59.setTransform(65.975,-14.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAHAAIAAAIg");
	this.shape_60.setTransform(59.05,-12);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAZQgHgGAAgLQAAgJAHgHQAFgFAJAAQAJAAAGAJIAAgaIAHAAIAAA9IgHAAIAAgJQgGAJgJABQgJAAgFgHgAgKgDQgEAEAAAHQAAAIAEAFQAFAEAFAAQAHAAAEgEQAFgFAAgIQAAgHgFgEQgEgFgHAAQgFAAgFAFg");
	this.shape_61.setTransform(56,-14.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_62.setTransform(51.125,-13.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_63.setTransform(47.775,-13.7781);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_64.setTransform(45.075,-14.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgOARQgEgEAAgIIAAgaIAGAAIAAAYQAAAHAEADQADADAFAAQAFAAAEgDQAEgEAAgGIAAgYIAGAAIAAArIgGAAIAAgIQgGAJgIAAQgIAAgFgGg");
	this.shape_65.setTransform(41.825,-13.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAPAdIAAgWQgGAKgJAAQgJAAgFgGQgHgHAAgJQAAgLAHgGQAFgGAJAAQAJAAAGAJIAAgIIAHAAIAAA4gAgKgSQgFAFABAIQgBAGAFAFQAEAFAGAAQAGAAAFgFQAFgFAAgGQAAgIgFgFQgFgEgGAAQgGAAgEAEg");
	this.shape_66.setTransform(37.25,-13.125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_67.setTransform(32.375,-13.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_68.setTransform(29.025,-13.7781);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgTAaIACgEQADABAEAAQADAAACgBIAEgHIgUgrIAHAAIAPAjIAOgjIAHAAIgSAsQgDAHgDADQgDADgFAAQgFAAgEgDg");
	this.shape_69.setTransform(22.95,-13.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_70.setTransform(19.775,-14.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_71.setTransform(17.375,-14.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_72.setTransform(15.525,-14.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_73.setTransform(13.675,-14.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAWIAAAJIgHAAIAAg9IAHAAIAAAbQAGgKAJAAQAJAAAFAFQAHAHAAAJQAAALgHAGQgFAHgJAAQgJAAgGgKgAgKgDQgFAEAAAHQAAAIAFAFQAFAEAFAAQAGAAAFgEQAFgEgBgJQABgHgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_74.setTransform(10.8,-14.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_75.setTransform(7.125,-14.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgTAXIADgFQAHAGAJAAQAHgBAEgEQAFgDAAgIIAAgFQgHAJgJAAQgJAAgGgFQgGgHAAgIQAAgJAGgGQAGgGAJABQAJAAAHAJIAAgIIAGAAIAAAjQAAAKgFAGQgHAFgKAAQgKAAgJgGgAgKgSQgEAEgBAGIAAAAQABAHAEADQAFAFAFAAQAGAAAFgFQAFgDAAgHQAAgHgFgDQgFgFgGAAQgFAAgFAFg");
	this.shape_76.setTransform(4,-13.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_77.setTransform(0.575,-14.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_78.setTransform(-1.275,-14.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_79.setTransform(-4.575,-13.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgVAdIAAg4IAGAAIAAAJQAHgKAJAAQAIAAAHAGQAGAGAAALQAAAJgGAHQgHAGgIAAQgJAAgHgKIAAAWgAgKgSQgFAFAAAIQAAAGAFAFQAFAFAFAAQAGAAAFgFQAEgEABgHQgBgIgEgFQgFgEgGAAQgFAAgFAEg");
	this.shape_80.setTransform(-11.2,-13.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_81.setTransform(-14.875,-14.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAMAfIAAgaQAAgFgDgEQgDgDgGAAQgEAAgEAEQgDADAAAGIAAAZIgHAAIAAg9IAHAAIAAAZQAEgIAJAAQAJAAAEAFQAEAFAAAGIAAAcg");
	this.shape_82.setTransform(-18.05,-14.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgQAQIAEgFQAHAGAGAAQAFAAACgCQADgCAAgDIAAAAQAAgDgDgCIgIgDIgJgDQgFgDAAgFQABgGAEgEQAEgDAFAAQAJAAAHAFIgDAFQgGgEgHAAQgDAAgCABQgCACgBADIAAAAQABADADACIAHADIAJADQAFADAAAFQAAAHgFADQgEAEgHAAQgJAAgIgHg");
	this.shape_83.setTransform(-22.9,-13.725);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_84.setTransform(-25.775,-13.7781);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_85.setTransform(-29.925,-13.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgOAWIAAAJIgHAAIAAg9IAHAAIAAAbQAGgKAJAAQAJAAAFAFQAHAHAAAJQAAALgHAGQgFAHgJAAQgJAAgGgKgAgKgDQgFAEAAAHQAAAIAFAFQAFAEAFAAQAGAAAFgEQAFgEgBgJQABgHgFgEQgFgFgGAAQgFAAgFAFg");
	this.shape_86.setTransform(-34.2,-14.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAbAXIAAgZQAAgHgDgDQgDgEgGAAQgFAAgDAEQgEAEAAAGIAAAZIgFAAIAAgZQAAgHgDgDQgDgEgGAAQgFAAgDAFQgEADAAAHIAAAYIgGAAIAAgrIAGAAIAAAHQAGgJAIABQAKAAADAJQAGgJAKAAQAHAAAFAEQAEAFAAAJIAAAag");
	this.shape_87.setTransform(-40.125,-13.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_88.setTransform(-46.375,-13.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAVAeIAAgvIgVAeIAAAAIgVgeIAAAvIgGAAIAAg7IAGAAIAVAgIAVggIAHAAIAAA7g");
	this.shape_89.setTransform(-52.25,-14.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAHAAIAAAIg");
	this.shape_90.setTransform(-59.6,-12);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgNARQgHgHAAgKQAAgIAGgHQAGgHAIAAQAKAAAGAHQAFAHAAAJIAAACIgiAAQABAHAEADQAEAFAFAAQAIAAAGgHIAEAEQgHAIgLAAQgIAAgGgGgAAOgCQAAgGgEgEQgDgFgHABQgEgBgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_91.setTransform(-62.825,-13.75);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_92.setTransform(-66.075,-14.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgOAWIAAAJIgHAAIAAg9IAHAAIAAAbQAGgKAJAAQAJAAAFAFQAHAHAAAJQAAALgHAGQgFAHgJAAQgJAAgGgKgAgKgDQgFAEAAAHQAAAIAFAFQAEAEAGAAQAGAAAFgEQAEgEAAgJQAAgHgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_93.setTransform(-68.95,-14.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_94.setTransform(-74.275,-13.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_95.setTransform(-77.325,-14.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgCAfIAAgrIAFAAIAAArgAgDgWIAAgHIAHAAIAAAHg");
	this.shape_96.setTransform(-79.175,-14.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_97.setTransform(-82.675,-13.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgCAWIgTgrIAHAAIAOAjIAPgjIAHAAIgTArg");
	this.shape_98.setTransform(-86.75,-13.725);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_99.setTransform(-91.625,-13.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgQAQIAEgFQAHAGAGAAQAEAAADgCQADgCAAgDIAAAAQAAgDgEgCIgHgDIgJgDQgFgDABgFQAAgGAEgEQAEgDAFAAQAJAAAHAFIgDAFQgGgEgHAAQgDAAgCABQgCACgBADIAAAAQABADADACIAHADIAKADQAEADAAAFQAAAHgEADQgFAEgHAAQgJAAgIgHg");
	this.shape_100.setTransform(86.1,-22.225);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAbAWIAAgYQAAgHgDgDQgDgDgGAAQgFAAgDADQgEAEAAAGIAAAYIgFAAIAAgZQAAgFgDgEQgDgDgGAAQgFAAgDADQgEAFAAAFIAAAYIgGAAIAAgrIAGAAIAAAIQAGgJAIAAQAKABADAIQAGgIAKgBQAHAAAFAGQAEAEAAAIIAAAag");
	this.shape_101.setTransform(81.075,-22.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_102.setTransform(76.175,-22.2781);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAHAAAIIAAADIgiAAQABAGAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgCQAAgGgEgEQgDgFgHAAQgEAAgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_103.setTransform(72.025,-22.25);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_104.setTransform(68.825,-22.875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgOAaQgHgHAAgKQAAgKAHgGQAFgHAJAAQAJAAAGAKIAAgbIAHAAIAAA9IgHAAIAAgJQgGAKgJAAQgJAAgFgFgAgKgDQgFADABAJQgBAHAFAFQAEAFAGAAQAGAAAFgFQAFgFAAgHQAAgIgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape_105.setTransform(62.8,-23.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AANAWIAAgYQAAgHgDgDQgEgDgFAAQgFAAgEADQgDAEgBAGIAAAYIgGAAIAAgrIAGAAIAAAIQAFgJAKAAQAHAAAFAGQAEAEAAAIIAAAag");
	this.shape_106.setTransform(58.05,-22.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_107.setTransform(53.025,-22.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgQAQIAEgFQAHAGAGAAQAEAAADgCQADgCAAgDIAAAAQAAgDgEgCIgHgDIgJgDQgFgDABgFQAAgGADgEQAEgDAGAAQAJAAAHAFIgDAFQgGgEgHAAQgDAAgCABQgDACAAADIAAAAQAAADAEACIAHADIAKADQAEADAAAFQAAAHgEADQgFAEgHAAQgJAAgIgHg");
	this.shape_108.setTransform(46.15,-22.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAHAAAIIAAADIgiAAQABAGAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgCQAAgGgEgEQgDgFgHAAQgEAAgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_109.setTransform(41.925,-22.25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_110.setTransform(38.725,-22.875);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_111.setTransform(34.675,-22.225);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_112.setTransform(31.525,-22.2781);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_113.setTransform(26.475,-23.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgCAfIAAg9IAFAAIAAA9g");
	this.shape_114.setTransform(24.625,-23.15);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_115.setTransform(21.125,-22.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_116.setTransform(15.625,-22.2781);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgPAQQgHgGAAgKIAAAAQAAgJAHgGQAGgHAJAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgJAAgGgHgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgEAAgIIAAAAQAAgGgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape_117.setTransform(11.7,-22.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgGAfIAAglIgHAAIAAgGIAHAAIAAgDQAAgIADgEQADgDAGAAIAHABIAAAGIgGgBQgHAAAAAJIAAADIANAAIAAAGIgNAAIAAAlg");
	this.shape_118.setTransform(8.3,-23.175);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgLAWIAAgrIAGAAIAAAMQADgGADgDQAFgEAGABIAAAHIAAAAQgIAAgEAFQgFAFAAAJIAAARg");
	this.shape_119.setTransform(3.425,-22.2781);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAHAAAIIAAADIgiAAQABAGAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgCQAAgGgEgEQgDgFgHAAQgEAAgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_120.setTransform(-0.725,-22.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgPAaQgGgHAAgKQAAgKAGgGQAHgHAIAAQAJAAAHAKIAAgbIAGAAIAAA9IgGAAIAAgJQgHAKgJAAQgIAAgHgFgAgKgDQgFADAAAJQAAAHAFAFQAFAFAFAAQAHAAAEgFQAFgFAAgHQAAgIgFgEQgEgEgHAAQgFAAgFAEg");
	this.shape_121.setTransform(-5.25,-23.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AANAWIAAgYQAAgHgEgDQgCgDgHAAQgEAAgEADQgDAEgBAGIAAAYIgGAAIAAgrIAGAAIAAAIQAFgJAKAAQAHAAAFAGQAEAEAAAIIAAAag");
	this.shape_122.setTransform(-10,-22.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgNAQQgHgGAAgKQAAgJAGgGQAGgHAIAAQAKAAAGAHQAFAHAAAIIAAADIgiAAQABAGAEAFQAEADAFAAQAIAAAGgGIAEAEQgHAIgLAAQgIAAgGgHgAAOgCQAAgGgEgEQgDgFgHAAQgEAAgEAFQgEAEgBAGIAbAAIAAAAg");
	this.shape_123.setTransform(-14.825,-22.25);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgTAeIAAg7IAHAAIAAA1IAgAAIAAAGg");
	this.shape_124.setTransform(-19.2,-23.025);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgRAYQgHgHAAgNIAAghIAHAAIAAAhQAAAJAFAGQAFAFAHAAQAJAAAEgFQAFgFAAgKIAAghIAHAAIAAAhQAAANgHAHQgHAGgLAAQgKAAgHgGg");
	this.shape_125.setTransform(-27.275,-22.975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgRAWQgJgJAAgNIAAAAQAAgMAJgJQAIgJAMAAQANAAAKAKIgEAFQgJgJgKAAQgJAAgGAIQgHAHAAAJQAAAKAHAHQAGAIAJAAQAKAAAJgJIAFAEQgLALgNAAQgMAAgIgJg");
	this.shape_126.setTransform(-33.325,-23.025);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAWAeIAAgvIgWAeIAAAAIgVgeIAAAvIgHAAIAAg7IAHAAIAVAgIAWggIAHAAIAAA7g");
	this.shape_127.setTransform(-39.95,-23.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgRAWQgJgJAAgNIAAAAQAAgMAJgJQAIgJAMAAQANAAAKAKIgEAFQgJgJgKAAQgJAAgGAIQgHAHAAAJQAAAKAHAHQAGAIAJAAQAKAAAJgJIAFAEQgLALgNAAQgMAAgIgJg");
	this.shape_128.setTransform(-46.475,-23.025);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgVAeIAAg7IAVAAQAKAAAGAFQAGAFAAAJQAAAKgHAEQgGAFgJAAIgPAAIAAAVgAgPADIAPAAQAGAAAFgDQAEgEAAgFIAAgBQAAgGgEgDQgEgEgHAAIgPAAg");
	this.shape_129.setTransform(-52.325,-23.025);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_130.setTransform(-60.125,-22.225);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_131.setTransform(-65.475,-22.875);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgNAQQgGgGAAgKIAAAAQAAgJAGgGQAHgHAIAAQALAAAHAIIgEAEQgHgGgHAAQgFAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAGgHIAEAFQgHAIgLAAQgIAAgHgHg");
	this.shape_132.setTransform(-68.925,-22.25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgNATQgFgEAAgGIAAAAQAAgHAFgDQAFgDAIAAQAGAAAHACIAAgCQAAgMgNAAQgFAAgHADIgCgFQAIgEAHAAQAJAAAFAFQAEAFAAAIIAAAaIgGAAIAAgHQgGAIgJAAQgGAAgFgEgAgIACQgEACAAAFQAAAEAEACQADADAEAAQAGAAAEgEQAEgDAAgFIAAgFQgGgBgHAAQgFAAgDACg");
	this.shape_133.setTransform(-73.775,-22.225);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgGARIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIANAAIAAAGIgNAAIAAAZQAAAHAHAAIAGgBIAAAFQgDACgFAAQgLAAAAgMg");
	this.shape_134.setTransform(-76.775,-22.875);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAMAWIAAgYQAAgHgDgDQgCgDgHAAQgEAAgEADQgEAEABAGIAAAYIgHAAIAAgrIAHAAIAAAIQAFgJAIAAQAJAAAEAGQAEAEAAAIIAAAag");
	this.shape_135.setTransform(-80.5,-22.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgQAQQgGgGAAgKIAAAAQAAgJAGgGQAHgHAJAAQAKAAAHAHQAGAGAAAJQAAAJgGAHQgIAHgJAAQgJAAgHgHgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAHAAAEgFQAFgEAAgIIAAAAQAAgGgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_136.setTransform(-85.1,-22.25);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgRAWQgJgJAAgNIAAAAQAAgMAJgJQAIgJAMAAQANAAAKAKIgEAFQgJgJgKAAQgJAAgGAIQgHAHAAAJQAAAKAHAHQAGAIAJAAQAKAAAJgJIAFAEQgLALgNAAQgMAAgIgJg");
	this.shape_137.setTransform(-90.675,-23.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-28.6,194.9,38);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgMA8IAAgbIAaAAIAAAbgAgGATIgIhKIAAgEIAdAAIAAAEIgIBKg");
	this.shape.setTransform(24.2,16.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMA8IAAgwIguhHIAfAAIAbAxIAdgxIAeAAIguBHIAAAwg");
	this.shape_1.setTransform(15.375,16.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkA8IgLgbIgxAAIgLAbIgbAAIAzh3IAXAAIAzB3gAAPAKIgPgmIgPAmIAeAAg");
	this.shape_2.setTransform(2.6,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2A8IAAh3IAuAAQAbAAASARQASARAAAZIAAAAQAAAZgSASQgSARgbAAgAgcAkIAUAAQAPAAAKgKQAKgKAAgPIAAgBQAAgPgKgKQgKgKgPAAIgUAAg");
	this.shape_3.setTransform(-10.425,16.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsAsQgSgSAAgZIAAgBQAAgYASgTQASgRAagBQAbABASARQASASAAAZIAAAAQAAAZgSATQgSARgbABQgagBgSgRgAgZgZQgKAKAAAPIAAAAQAAAQAKALQALALAOgBQAQABAKgLQAKgLAAgPIAAgBQAAgOgKgLQgLgMgPABQgPgBgKAMg");
	this.shape_4.setTransform(-24.575,16.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMA8IAAheIgkAAIAAgZIBhAAIAAAZIgkAAIAABeg");
	this.shape_5.setTransform(-37.275,16.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAjQgOgOAAgUIAAgBQAAgSANgPQANgOASAAQAWAAAMAPQALAPAAATIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNARgYABQgUAAgNgNgAAUgGQgCgJgEgFQgGgGgIABQgPAAgDATIAmAAIAAAAg");
	this.shape_6.setTransform(37.425,1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAhQgOgNAAgTIAAgBQAAgSAOgPQAOgOAUAAQAWABAOAPIgQARQgJgKgMAAQgJAAgFAIQgHAGAAAKQAAALAHAHQAGAHAKAAQAKAAAKgKIAQAQQgQARgWAAQgTgBgOgOg");
	this.shape_7.setTransform(27.5,1.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgPAOAAQAOABAJAIQAIAKAAAPIAAA7g");
	this.shape_8.setTransform(17.325,1.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgRAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_9.setTransform(6.75,1.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgPAOAAQAOABAJAIQAIAKAAAPIAAA7g");
	this.shape_10.setTransform(-3.275,1.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_11.setTransform(-11.125,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRA/IAAhEIgLAAIAAgVIALAAIAAgGQAAgPAIgHQAHgIAMAAQALAAAIADIAAAVQgGgCgGAAQgJAAAAAKIAAAEIAVAAIAAAVIgVAAIAABEg");
	this.shape_12.setTransform(-16.775,-0.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAjQgOgOAAgUIAAgBQAAgSANgPQANgOASAAQAWAAAMAPQALAPAAATIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNARgYABQgUAAgNgNgAAUgGQgCgJgEgFQgGgGgIABQgPAAgDATIAmAAIAAAAg");
	this.shape_13.setTransform(-25.375,1.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVA8IgZgmIgUAAIAAAmIgaAAIAAh2IA1AAQAXAAAMAMQAKAKAAARQAAAagaAKIAdArgAgYAAIAZAAQAKAAAFgGQAFgEAAgIIAAAAQAAgRgUAAIgZAAg");
	this.shape_14.setTransform(-36.225,0.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAvIAAhaIAZAAIAAASQAIgVAVABIAAAbIgCAAQgbAAAAAfIAAAig");
	this.shape_15.setTransform(10.45,-14.5506);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjAiQgNgOAAgUIAAAAQAAgTAOgOQAOgNAUAAQAVAAAOANQAPAOAAATQAAAUgPAOQgOAOgVgBQgUAAgPgNgAgRgRQgGAIAAAJQAAAKAHAIQAGAHAKAAQALAAAHgHQAGgHAAgLIAAAAQAAgJgHgIQgHgHgKAAQgKAAgHAHg");
	this.shape_16.setTransform(0.95,-14.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA1IAJgTQAGAEAFAAQAHAAACgGIgjhaIAbAAIATA9IAUg9IAbAAIgjBcQgFAOgHAGQgFAFgLAAQgNAAgLgGg");
	this.shape_17.setTransform(-14.9,-13.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_18.setTransform(-25.275,-14.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxA7IAAh1IA2AAQAUAAAKAKQAJAIAAAMQAAARgQAJQAWAIABAUIAAABQgBAQgMAIQgLAJgVgBgAgYAkIAeAAQATAAAAgMQAAgNgUAAIgdAAgAgYgLIAYAAQASAAAAgMIAAAAQAAgNgSAAIgYAAg");
	this.shape_19.setTransform(-36.3,-15.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-25.5,89.69999999999999,53);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAARIgsAAIAAAQIAnAAIAAAQIgnAAIAAARIAtAAIAAARg");
	this.shape.setTransform(15.85,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAqIgRgbIgPAAIAAAbIgSAAIAAhTIAlAAQAQAAAJAJQAHAGAAANQAAATgSAGIAUAegAgRAAIASAAQAHAAADgDQAEgDAAgGIAAAAQAAgMgOAAIgSAAg");
	this.shape_1.setTransform(7.625,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgRANgNQANgMASAAQATAAANAMQAMANAAARQAAASgMANQgNANgTgBQgTAAgMgMgAgSgSQgGAIgBAKQAAALAIAHQAHAIAKAAQALAAAHgIQAIgHAAgLQgBgKgHgIQgHgHgLgBQgKABgIAHg");
	this.shape_2.setTransform(-2.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAqIAAg2IgXAjIAAAAIgXgjIAAA2IgSAAIAAhTIAUAAIAVAkIAWgkIAUAAIAABTg");
	this.shape_3.setTransform(-12.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWAqIgog1IAAA1IgSAAIAAhTIARAAIAmAyIAAgyIASAAIAABTg");
	this.shape_4.setTransform(-25.925,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAqIgRgbIgPAAIAAAbIgSAAIAAhTIAlAAQAQAAAJAJQAHAGAAANQAAATgSAGIAUAegAgRAAIASAAQAHAAADgDQAEgDAAgGIAAAAQAAgMgOAAIgSAAg");
	this.shape_5.setTransform(-34.675,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAALAHIgLgaIgLAaIAWAAg");
	this.shape_6.setTransform(-44,-0.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAARIgsAAIAAAQIAnAAIAAAQIgnAAIAAARIAtAAIAAARg");
	this.shape_7.setTransform(-52.55,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_8.setTransform(-60.125,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F47B1F").s().p("AsjBzICUjlIWzAAIAADlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-80.3,-11.5,160.7,23), null);


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
	this.shape.setTransform(63.7568,-78.0042,1.1999,1.1999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737985").s().p("AgIAAQgEgNAMgHQAXAXgcASQACgEgFgRg");
	this.shape_1.setTransform(29.6494,-97.143,1.1999,1.1999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D6").s().p("AgGAPQgEgHAAgIIABgQQAKgJAEAIIAGAOIgBASQgFAGgDAAIgBABQgDAAgEgHg");
	this.shape_2.setTransform(25.8693,-97.3168,1.1999,1.1999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E6A78").s().p("AggABIAAAAQAKgGAQgDIAagDQAGgCAEADQAEADgBAHIgWAAQgMACgJAGQgFAFgEAAQgIAAgFgMg");
	this.shape_3.setTransform(43.3319,-88.9174,1.1999,1.1999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C7185").s().p("AgFgLQAZgIAXAIIgGAHQgTgCgVAHIgnAPQAKgSAbgJg");
	this.shape_4.setTransform(57.3972,-85.7365,1.1999,1.1999);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37424D").s().p("AAKAzQgCgKgFgBIgBAAQAOgSgSgVIgbg+QATAVAPAgQAJARAQAnIgNAOQgFgCgCgJg");
	this.shape_5.setTransform(63.1268,-34.1471,1.1999,1.1999);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010101").s().p("AgHAbQgHgEADgGQACgEgLgVQgHgPAXgGIAZAnQAEALgFAFQgEADgLABIgDAAQgFAAgEgDg");
	this.shape_6.setTransform(48.085,-68.3629,1.1999,1.1999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464F5D").s().p("AANAkIgzhvQAKAAAEAFIAGAKQAFANAaA1QAVApAFAdg");
	this.shape_7.setTransform(45.8479,-76.2671,1.1999,1.1999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#191B1C").s().p("AhXAiQBXg2BJgTIAPAHIinBIg");
	this.shape_8.setTransform(-6.6786,-71.9446,1.1999,1.1999);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#010101").s().p("AAMAkQgYgLgLgIQgcgRAMgZQAHgNAKgHQAMgGAOAFQAMAEAQgIQAKAKABAJQADAKgIALIgfAcIAgAZIgIAIQgOgDgFgMg");
	this.shape_9.setTransform(58.8968,-27.9676,1.1999,1.1999);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#86A2B2").s().p("AgCA4QADgWABgQQACgpgBgKQgDgcgUgRIAGgOQAaAXAHAtQAHAtgQAlQgEAKgPAZIAHglg");
	this.shape_10.setTransform(66.9572,-76.9243,1.1999,1.1999);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#374048").s().p("AACBoIgCgBQgOgOABgZIAAiRIAGgHQAHgEAAgKQAFgCADACIAGAGIgGAPIgCAMQgNA7ANA2IgBA8g");
	this.shape_11.setTransform(63.4868,-76.5043,1.1999,1.1999);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9E7E4").s().p("AgMhPIACgNQAUARADAcQABAJgCAqQgCAZgJAzIAAgBQgCANgMABg");
	this.shape_12.setTransform(65.7538,-75.2144,1.1999,1.1999);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#17191B").s().p("AApAyIAAgRQAAgQgGgEQgGgEgOAHQgNAHAEANQAGASgCADQgHgCgCgKQgBgLgEgCIgGgPQgEgHgLAIIgMANQgRgaAEgaQAEgaAYgQQALAKAAAUQAAAdABAEQAJAFARAAQAVgBAHADQADAIAAAUQgBATAFAKQgJgEgBgKg");
	this.shape_13.setTransform(27.7723,-101.5527,1.1999,1.1999);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#16191C").s().p("AgBAqQgGgEgGgOIgGgZQAAgHgEgDQgEgEgGACIgbAEQgQACgKAHIgVgPQgMgJAMgQQAOgIAGAIIAJASQA5gIAMAIQAKAIACAvQAVgbAfgGQAUgEAnAEQAAAJgIAEQgXgJgaAJQgbAJgKATQgHAEgGAAQgFAAgDgDg");
	this.shape_14.setTransform(49.785,-88.7185,1.1999,1.1999);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AgkBuQgIg2gUgQQgTgQg0AAIgJgIQAXgKAIgMQAIgPgKgYQgPgkAOgkIAHAOQAHAHACAAQACAAADgIQAZhJBQgBQBOANAKBLQAZAaAWgaIAAAhQgYAEgMAbQgMAaALAcQgKACgJAPQgKARgFAIQgUAbgkghQgJAUgGAGQgJANgUACQAOAOATAdQATAVAYACQgEAGgJABIgPABQgqglgQggg");
	this.shape_15.setTransform(-14.3881,-120.7514,1.1999,1.1999);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202326").s().p("AgNASQADgFAIgBQAIgCADgDQgLgHgXgEQgagFgKgFIAMgBQAGgBADgFQA6AGAsAlg");
	this.shape_16.setTransform(90.965,-49.1162,1.1999,1.1999);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#43505F").s().p("AAkBLQgSgggPgSIhLiRQAFgHAGAAIAKgBIAAAHQAGA2AwA0QAEADAIARQAHAOAOAAQgIAXALAWIAZAlIAIAKQADAHgIALIgfg2g");
	this.shape_17.setTransform(71.3632,-32.2273,1.1999,1.1999);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#475E7A").s().p("AhvALIABgHQA6geBeAEQAKAFAaAFQAXAEAMAIQgDADgKABQgHABgDAFQgNAJgSgEQhDgPhGATQgOAEgFAAQgKgBgEgLg");
	this.shape_18.setTransform(78.5158,-48.1604,1.1999,1.1999);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#070608").s().p("ABACoQgHgPgNACIgyABQgfABgUAHQgEgOgTgKQgWgLgEgJQgMgWgPgDQgPgDgUAMQgQgCAAgOQAMAHANgHQARgJAFAAQgHgUgDgZIgDgrIgYgGQgNgDgKACIAGgPQAkAIANgJQAMgKgIgcIAIgIQAjgEgVgdIAMgNQAcABAPgIQAOASASAgIAeA2QAJgLgEgHIgGgKIgZglQgLgXAGgWQAOgFAUABIAkABQAAgEAIgVQAGgPgMgLIAqAMQgOAAgFAMIgHAVQgDAJAIAGIAOAHQAbARATAXIAQAaQALARAOAAQAOAAAOgQQAFAEABAGIAAALQgLgCgLAEIgUAJQAGApgLA0IAcAPIgHAFQgDAAgMgFQgIgDgHADQgVAigxAkQAEAEAIANQAFAMAJADQgDAFgIgCQgJgBgCAFQgCgCgKgWgAgMBpQgIAHgDAIQAXAHAlgFQgDgRgRAEQgSAFgEgMIAAgBQgCAAgFAEgAhcAvIADAXQANAjAmAIQABgIgFgGIgIgIQgHgjgGgGQgEgEgKAAIgPABgABFA7QgEACgOAMQgIAIAFAJIAJAOQAPABAMgLQAFgGAKgSQAAAAAAgBQABgBgBAAQAAgBAAAAQgBgBAAAAQgEgDgDABQgIgGgHAAQgDAAgEABgABhAcQABANANAHQAHgVABgIQAAgPgLgNQgMAZABAMgABTAhIAEgRQADgKgEgIQgbAGAYAdgAA4g8IAbATQAHgXgOgLQgUgLgJgIQgFAWAOAMgAAAhXQAAAJADAEQAHAEAJgDQAIgSgFgLQgFgDgEAAQgLAAgCASg");
	this.shape_19.setTransform(79.2357,-13.3585,1.1999,1.1999);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C919A").s().p("AgpgJIBTAAQgIAIgOgBQgQgBgHABQgKAAgEAAQgHACAAAJg");
	this.shape_20.setTransform(24.5494,-50.5261,1.1999,1.1999);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F4A58").s().p("AAegQQgTAggoABg");
	this.shape_21.setTransform(-35.0267,-17.3183,1.1999,1.1999);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E5E73").s().p("AAFADQgGgDgJAHQgFAFgEgEQgDgEAAgHQAGgHAKAAQAFgBALACQAXADgQARQgIgGgEgCg");
	this.shape_22.setTransform(9.8139,-93.2207,1.1999,1.1999);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#586677").s().p("AgUAFQgGgEAHgLIArAEQgaANgEADQgMgDgCgCg");
	this.shape_23.setTransform(-96.2988,-26.3477,1.1999,1.1999);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E7E9A").s().p("AgogDQABgBALgBIA0gCIAUACQgOAHgdAAQgeAAgNAGQgEgJAGgCg");
	this.shape_24.setTransform(-108.8929,-20.4381,1.1999,1.1999);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F4858").s().p("AAAAGQgZAAgQgGIAKgBQAHgBADgFIA/AHIgBAIQgIgCghAAg");
	this.shape_25.setTransform(-46.156,-15.2784,1.1999,1.1999);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3541").s().p("AgdgXIAHgGIA0A7QglgVgWggg");
	this.shape_26.setTransform(-28.0672,-99.0928,1.1999,1.1999);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#435361").s().p("AglAQQAIgNAWgEQAYgHAIgIIANgCQgJASgYAHQgbAGgNAGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAg");
	this.shape_27.setTransform(-82.3936,-27.0076,1.1999,1.1999);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#303840").s().p("AAGgfIAEgKQADgFAHAAIgXBLIgFAMQgDAGgIAAg");
	this.shape_28.setTransform(31.9889,-19.5108,1.1999,1.1999);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#556173").s().p("AggAbIAggZIAhgcQgBANgKAKIgOAQIgaAOg");
	this.shape_29.setTransform(-27.0172,-87.3336,1.1999,1.1999);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#464F5A").s().p("AgeAGQACgbAYALQAGADALABIASABIgBAFIgTAAQgCAEAEAEQAGADAAADg");
	this.shape_30.setTransform(22.7495,-38.0387,1.1999,1.1999);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C6683").s().p("AgKARIgGgKIABgQQACgKAFgFIAZAJIgSApQgGgEgDgFg");
	this.shape_31.setTransform(-59.0551,-67.8649,1.1999,1.1999);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#131417").s().p("AgMAeIAJgdQAFgRgCgNIANgOQACAdgDAQQgFAYgNASQAAgKgGgEg");
	this.shape_32.setTransform(28.0471,-26.3777,1.1999,1.1999);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#556B80").s().p("AgdAeIAcgiQAPgVAQgLIgbA7QgHAKgEACQgDACgDAAQgHAAgIgHg");
	this.shape_33.setTransform(-32.1169,-77.1875,1.1999,1.1999);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1F252B").s().p("AABANIgWgTQAAgCgFgEQgFgDACgFIATAAIAoAZQgFAMgGAEIgDAAQgHAAgIgIg");
	this.shape_34.setTransform(27.6022,-35.5271,1.1999,1.1999);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#50637D").s().p("AgcACQgGgLgBgLIBHADIAAAGQgTADgIADQgMAFgGAPIgHAGIgMgTg");
	this.shape_35.setTransform(-29.6271,-104.4925,1.1999,1.1999);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0F1113").s().p("AhQAPIAKgDIAJgCQA7gBANgBQAogFAbgTQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQgBAIgHACIgNACQgJAEADAEIAHAIIh4ABg");
	this.shape_36.setTransform(-96.3384,-23.1379,1.1999,1.1999);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#607C96").s().p("Ah3ACQAGgFAMAAIAUABQB+gBBLAHg");
	this.shape_37.setTransform(-95.4727,-19.1181,1.1999,1.1999);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#15181A").s().p("AhCgQIANgGIBkAZIAIAHIANAGIAAAHQg0gJhSgeg");
	this.shape_38.setTransform(-22.8775,-68.3149,1.1999,1.1999);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333A45").s().p("AgBADQg2ABgOgBQAXgOAxACQAyACARARQgdgIgqABg");
	this.shape_39.setTransform(-39.7064,-43.3707,1.1999,1.1999);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#53647B").s().p("AAiAQQgCgNgKgBIgTAAQgFAAgTAFQgPAEgKgCQAFgRARgEQAKgDATgCQAQgEAKAJQAJAGAHAPQABAKgGAAQgDAAgFgDg");
	this.shape_40.setTransform(19.9984,-93.3056,1.1999,1.1999);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#839BAE").s().p("AgPAAQgPghAMgPQAXAkAUA9QgZgOgPgjg");
	this.shape_41.setTransform(-57.0353,-30.7274,1.1999,1.1999);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#45576D").s().p("AgtAJQgDgJAHgHIAPgLIBJAeIgpACQgWAAgOAEIgDABQgHAAgFgKg");
	this.shape_42.setTransform(-42.3257,-95.4271,1.1999,1.1999);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0E0E0F").s().p("AgdApIAbg7QAEgKAAgCQAAgHgKgBIAagPIAMAPIAAAAQgdA+gXAdQgBgJgGgDg");
	this.shape_43.setTransform(-28.2172,-79.3842,1.1999,1.1999);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#151719").s().p("AgaA2QAIAAADgFIAEgNIAYhKQgCgSAJggQALAVgGAcQgDAQgKAeIgfBRg");
	this.shape_44.setTransform(32.8959,-20.4081,1.1999,1.1999);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#425065").s().p("AAEAGQAFgMARg4IABAAIANAUQgJApgQAXQgTAdgjAMQAcgUAPglg");
	this.shape_45.setTransform(29.589,-61.2054,1.1999,1.1999);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#353B46").s().p("AhFgXQAPgZAlgCQArgDAcAXQAdAYgBAlQgZhShNALQgeAEgLATQgMARgGA0QgFgzAPgYg");
	this.shape_46.setTransform(-0.7501,-17.4286,1.1999,1.1999);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#44576E").s().p("AgIAiQgTgDgKABIAGghQAFgTAJgNIADAJIAKgJQAEAQANgBQAVAAAEABQgGAHgTAIQgPAHgHAJQAFAGAJAAQAKABAEAEQgKAJgOAAIgDAAg");
	this.shape_47.setTransform(-55.4554,-76.0189,1.1999,1.1999);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#465B72").s().p("AAnAaQgEgDAEgGQAEgGgEgEQgrAAgNgBQgggCgZgJQAHgNAFgDQAIgHAMADIBvAaQAGACAAADIgCAIIgQAIQgIAFgHAAIgDgBg");
	this.shape_48.setTransform(-2.5689,-95.4538,1.1999,1.1999);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#667E97").s().p("AhmAIQBygaBbARIAAAJg");
	this.shape_49.setTransform(-83.9835,-65.8706,1.1999,1.1999);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#40516B").s().p("AAcAhQAIgNgDgFQgEgDgGADQgIAEgDgCQgBgFAHgGQAHgGAAgGQgKgDgjgBQgegBgQgJQAFgCAXgDQATgCALgIIglgDIAAgFIAogBQANAIAAgPQAJAUARASQAMANAVARIgGAMQgIACgIAIIgNANQgLgJAHgKg");
	this.shape_50.setTransform(-19.7877,-101.3127,1.1999,1.1999);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F1113").s().p("AAYBUIgqgJIAjgpQgDgCgMgQQgIgKgLAAQACgOgLgQQgOgQgFgJIgLgOQgGgKAAgKQAPALASAdQASAdANAJQAGAFAHAOQAHALAOgDIANATQgHALAGAFQACACANADQgOAWgXAAIgCAAg");
	this.shape_51.setTransform(-104.6221,-32.5547,1.1999,1.1999);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#151A1E").s().p("AAlAhQARgSgXgDQgMgCgGABQgJAAgGAHIgHgBIACgHQAAgEgFgBIhwgaQgNgEgIAHQgEAEgHANQgCgMgGgDIAGgMIAPgBQAJAAAEgGIBYATQAzALAkAFQAUABAZgFIAqgLIAMgOIgBARQAAAJAEAGQAFAHAEgBQAEAAAFgGQACAHgHAHQgIAIAAAFQgHgQgIgGQgLgIgPADQgVACgKADQgRAEgEASIgKAGIgEAAQgEAAgEgDg");
	this.shape_52.setTransform(7.3272,-95.8331,1.1999,1.1999);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#121214").s().p("AiEDQQAfiAAZhAQAnhkA+hFQAagcASgMQAbgTAdgCIAIAIQg4AOgqAuQgeAgghBAQgsBPgRBOQgJAOgFASIgGAjIgBAKQgGAFgBAKIgBARg");
	this.shape_53.setTransform(-46.7859,-92.9433,1.1999,1.1999);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#51647A").s().p("AC4AXQgogCgagGQgqgKhMgBQhTAAgjgGIB5AAQhGgIiEABIgTgBQgMAAgHAGQgMACgFgBQgKAAgHgGQANgGAfAAQAdAAAOgIIB5AAQA9AABqATQB1ASAzAEQgDAEgHABIgLABIhDgBg");
	this.shape_54.setTransform(-81.4036,-18.3082,1.1999,1.1999);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#485464").s().p("AjvCOIgJgEIAHgHICWAAICUABQAgAAAUgLQAUgMAPgbIAlhFQAXgoAMgeQAOgRAFgZQADgRgCgcQAQAOgDAUQgBAKgKAXQgmBXg3BeQgWAmgpABQhBAChFAAQhaAAhhgDg");
	this.shape_55.setTransform(1.2912,-14.188,1.1999,1.1999);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D627C").s().p("AjHA0IgMgHICohIQBggbBXAEQAuABAMAMQAMALABAsIABAOIgCATIgNgTQgDgggJgJQgJgKgfgDQidgNiIBJQgZAOgYAAIgCAAg");
	this.shape_56.setTransform(9.1904,-72.5081,1.1999,1.1999);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A6079").s().p("ABxBbQANgxAKghQACgFgFgTQgDgOAMgIQgOgIgGgFQgKgIgBgMQgBgIgHgCIgMgDQgtgOg+gPIhtgaQgVgFgHgDQgOgGgHgMQAUgMAcAEIAvAHQBXAgAvAIQA2ATATAIQAeAMALAZQALAYgJAfQgYBUg3BgIAVhTg");
	this.shape_57.setTransform(-21.4046,-50.4551,1.1999,1.1999);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#506781").s().p("AigCZQAQhNAshRQAjhAAdggQAqguA4gOQA1gBASARQAUAQAIA2QAAAOgOgHQgPgXgdgHIg0gFQgFgGAHgJQAHgJgCgFQgiAVgEASQgFASASAnIhCgNQAMAOAWAJQAaALAJAHIhpAAQgBAGAEADIAGAFIgQAKQgHAHADALIgIgEQgEgCgBAFIgVAxQgNAdANAYIgBAHQgFAEgMABQgMAAgEAGIgJAJg");
	this.shape_58.setTransform(-38.1765,-98.3763,1.1999,1.1999);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#526982").s().p("ABvAQQgygbg1gFQhugMhhA5QgIgGgGgSQgEgQgJgFIABgFQAlgXAagMQAkgQAggDQCUgQB5BbQASANAiAhQgDAJgIAJIgRAOQgvgpgpgVg");
	this.shape_59.setTransform(-88.4532,-48.2391,1.1999,1.1999);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020202").s().p("ABXFsQABgLgBgGQgEgfgCgFQgHgTgUgHQgPgGACgQQACgcgegRIAEgLIAFgKQAWgbgRggQgZgsARg8IALgYQAFgOgDgMQgIACgSAKQgOAIgKABQgFgXgBgMQgCgUAbgEQgBgqgNgLQgNgKg0AAQgCgIAAgFQAAgtgMgMQgMgLgugCQhbgDhdAaIgPgHQAPgHAVgGIAmgKIANgCQAHgCAAgIQABgMAHgDQAEgBAMAAIAhgCQATABAPAPQAJAKAbACIAuADIASghQgVACAAgPQABgYgCgDQgWAegYgCQgbAAgNgCQgXgDgNgQQAKgDAMgNQAMgPAIgDQAOAJgCgQQAAgFAIgIQAHgIgCgGIABgTQAFACABAMQACAKAHACQAcgSgXgXQAagOAAAeIgBARQABAKAKAFIAYABQgLARAMAJIAUAPQAIATAPgLQAIgHAMgBIAXgBIAGAaQAMAdAWgNIAngPQAXgHASABIAACSQAAAZANAOQgGABgOAEQgMAFgJgBQgKgCAAAKQgBAMgFABIASAEQAMADgPAPQAOAIALAYQAMAZgGAPQBLgVAZgEQA4gJAtAMQgDAFgHABIgLABQhfgEg7AfIgKAAQgGABgFAHIBMCSQgOAIgcgBQgQgngJgSQgQghgSgUIAaA/QgQAHgMgEQgPgFgMAHQgKAGgHAOQgMAYAcATQAEADAgAPQgRAFgHASIgKAfIgGAPIgCA1QgFgGgBgJgAAdBFQgEAvAeAgIBEg/QgjgDgKgLQgJgKAAgiIgDgsQgiAngDAvgAgYkAIA0BvQgXAGAHAQQALAVgCAEQgDAHAHAEQAFAEAIgBQALgBAEgEQAFgFgFgKQgFgdgVgpQgbg2gEgOIgFgKQgFgEgIAAIgCAAg");
	this.shape_60.setTransform(44.1081,-54.5431,1.1999,1.1999);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#010101").s().p("AgIEpIgrgPQgbgKgSgBIghgPQhbg5gxhoIgLgwQgFgcAAgUQAAgMgDAAQgRgBABgMQAEgOAAgGQgBgGACgKIACgQQAGgJAHgWQAGgUAIgKQAeARgDAdQgBAQAOAFQAUAHAHATQACAGAFAfQABAFgBAKQAAAKAGAFIAPA1QgBAOAQABQAkBLBFAMIAFAHQADAEADABQAmAIAagBQAkgBAcgRQADgFAIACQAJABACgFQAxgbAYgsIAHgMQACgIgJgFIAIgGQALgDADgKIAEgTQAHgigGg0IAAgMQgBgGgFgEIgMgeQgIgSgUAAQAIgLgHgJIgOgNQgJgMgRgLIgdgRIgqgNQgdgCgOACIggABQgUADgJAPQgwg0gHg2QAFAMAJABQAFAAAOgEQBFgVBEAQQASAEANgJIAWABQAEAKAKADQBAAbA3BDIAMAOQA/B5gWBpQgnCFhnBEIghAPIgfAIQgHABgBACIgHADIgDACIgXAKIgDABg");
	this.shape_61.setTransform(78.2658,-11.6195,1.1999,1.1999);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#010101").s().p("AnDJAQgLgUgQAAIgbgGIAAAAQgNgLgTgEQhVg/gxhcQgehFAIhpQAXhYAkgyIglgJIhHCTIgFgNIAYhAQgGgCgJAGQgIAFgGgFQADgMAJgSQANgWADgIQAHgHALgVQAJgUALgHIAUASIBXhOQAJAFAFARQAEASAJAFQBig5BuAMQA1AFAyAcQApAUAuApIARgOQAJgJADgJIgZgXQgPgOgMgJQh4hbiVAQQggADglARQgYALgnAXQgoARgcAiQgIAIgLAAIgVgBQgQgKACgUQADgegBgEQAYgGAmAEQACAEgEALQgFAJAIAGQBMg+B5giQgKggAKgQQALgQAhgFQAggEArgBIBLAAQAPAAAIgBQALgDAJgIQAPgMAUAFQAUAGAIARIAPAJIAEAKQAEAGAGADIASgqIgYgJIABgKQAJgBATACQASABAKgKQgEgEgLAAQgJgBgEgGQAFgJARgHQATgIAFgHQgCgCgWABQgOAAgEgPQAEgGAMAAQANgBAEgEQABgGgBgBQgLgYAMgdIAUgxQACgFAEACIAIAEQAHAMAIgDQANgFAXAAQAeAAALgCIhKgeIgFgFQgDgEAAgGIBqAAQgIgHgbgLQgYgJgMgOIBFANQgTgnAEgSQAFgSAhgVQACAFgGAJQgHAJAFAGIA0AFQAdAHAPAXIgnAAIhJgDQABALAGAMIAMAUQAWAgAmAWIg0g9QAFgOAOgHQAHgDATgDIAlACQgLAJgSACQgYACgFACQAQAJAfABQAjACALADQAAAGgIAHQgGAGAAAFQADABAIgEQAGgDAFADQACAFgIANQgHALALAIIANgNQAIgIAIgCQAGADACAMQAYAKAhACQAMABAtAAQAEAEgEAGQgEAFADAEQAIABAKgFIARgJIAHAAQgBAIAEAEQADAFAGgFQAIgIAIAEQAEACAHAGQAGAFAFgDIALgFQAKACAPgEQASgFAGAAIATAAQALABACANQgIADgMAPQgLANgKADQgPAKgQADQgRADgOgGQgVgJghAAQgjACgTgBQg1gDgbgCQgugFghgNIgkAwIgNgOIAPgRQAKgKABgNIgiAdIggAZIANAAQALABABAHQAAADgEAKQgQAKgRAVIgcAjQAMALAJgFIAMgMQAGACABAKQgFAKAHACIALAEIgNAGIgwgIQgcgDgTALQAHANAOAGQAGADAVAFIBuAZQA+APAuAPIAMACQAGADACAIQABALAKAJQAGAFANAIQgLAHADAPQAEATgBAGQgLAhgMAwIgVBSQA2heAYhVQAKgggMgYQgLgYgdgNIhJgbIAAgGQAZABAagOQCHhLCfAOQAfADAIAJQAJAKAEAgIgXBFQgRAlgbAUQAjgMAUgeQAPgYAJgoIADgUQA0AAANALQANAKABAqQgbAEACAUQABAMAFAYQgSBYgaA9IgJAUQgDALACAKQgKAeACATQgHAAgDAFIgEAKIgaBPIAHAiIgkBxQgjA7g8gEQhKgGg5ACIhAgCQglgBgbAMQgRAIgSgBQgUAAgMgLQgKgKgMgCQgFgCgRAAIiGAAQgOAAgIgEQgJgFAAgPQAGgEARACQAPACAIgHQgTgIgegDQghgDgQgCQgVgDgNAWQgyBShBAgIg0AWQgMgCgOAHQgPAKgIAEQgiABgeAAQgeAAgbgBgAm1GGQgEACACAEIACAHQgMAFgFAMQgCAHAAARQAlAPAeACQAkACAigRIgRggQABgUgUAAIhLAAIgHgEIAAAAgAlDGWQADAHAEAMQAFALAHAFQANgDAOgKIAXgWQgagDgHAAIgIgBQgPAAgNAEgAojFtQAUApAxAfQAIgHAEgMQADgHADgRQgJgBgLgKIgRgSQgKgLgNAAQgMAAgPALgABwGmQgNAAgeAFQATAHAYABQAOAAAdgEQgSgJgWAAIgDAAgAJGF/QgPAkgPAPQAdgMALggQALgoAHgSQgNAOgPAlgAn8FHIFnACICwAtIA6AOQAjAHAaAAIAJAEQCsAHCXgFQApgCAVglQA2hdAohZQAKgYAAgKQADgUgQgOIgOAOIgSgUQgMgLgOgBIgYAyQgPAcgPATIBGAUIAQgZQAFAEACAKQgMAdgXApIgmBFQgOAcgVALQgUAMgfgBIiWgBIiVABIh4gWIAAAAQgIgEgrgKQgigIgQgTQgOALgWgGQgggKgGAAQgUgGgXAAIlEgBgAHAFWQgJAJABAMQARAJAIgJQAGgEAFgSQAPgcgDgZIgRARQgJALACALIAAAAIgQAPgAorFgIAigOIgDgkQAlgDAbABQgZgQgnACQgEgSgQgLIghgPQgHA6AdA0gAFwFFQgPgDgRgKIgegTQAXAlAngFgAFoCzQgkADgPAYQgQAaAFAyQAHgzALgTQAMgSAdgEQBOgLAZBTQABgngcgXQgagVglAAIgKAAgAmbDdQAjAGBTAAQBNABApAKQAaAHAoABIBEACQAQAHAZAAQAhAAAIABIABgIIg/gHQgzgDh0gUQhsgSg8gBQgGgFgBgDQgDgEAKgEIAMgDQAHgDABgIQANgGAbgGQAYgHAJgSQAGgMgBgHQgCgKgMgGQgwgcguACQgHAQAFAIQAEAJARACQAfAFAoAWQgIAJgYAGQgXAGgHAMQgcAUgoAFQgNABg8ABIgTAFIg1ACQgKAAgCABQgGADAFAJQAGAHAKAAQAGABAMgCgAA/D5QApgCASghgAnOC8QAYACAOgXIAfgSIgsgDIgOgUQAOgMAcgGQASgDAEgKQADgJgFgQQg7ADgkAaQgPgKgRgcQgSgegPgLQABALAFAJIAKAPQAGAJANAQQAMAPgDAPQgSATggAxQALALAOgDIAZgHIArAJgAhqB4QAPAjAaAOQgUg+gYgkQgMAOAPAjgAIfBBIAyAIIAWAUQALAKAHgDQAGgDAGgMQATgVgHgdIg0ARIgSgBQgLAAgHgEQgHgDgEAAQgNAAgCAVgAJPgiIAWARQAKAEgHAQQgHAWADAHQApgFANgVQANgTgCg2IgtANIhVAAIARATQAHgFAGAAQAHAAAHAGgAB7AZQgQgTgygCQgygCgWAPQAOACA1gBQArgBAcAIIAAAAgAmiikIDOAAIABgKQgjgHgmAAQg+AAhIARg");
	this.shape_62.setTransform(-46.156,-45.0814,1.1999,1.1999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-136.4,-142.2,251.3,166.39999999999998), null);


(lib.heasd2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(55.625,24.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgOAOAAQAOAAAJAJQAIAIAAAQIAAA7g");
	this.shape_1.setTransform(47.975,21.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgNAFIgHgUQARgHARAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgQAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFABgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_2.setTransform(37.4,21.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAiQgOgOAAgTIAAgBQAAgTAOgOQAOgNAUAAQAVAAAOANQAPAOAAATQAAAUgPAOQgOAOgVgBQgUAAgOgNgAgQgQQgHAHAAAJQAAAKAHAIQAHAHAJAAQALAAAGgHQAHgHAAgKIAAgBQAAgJgHgHQgHgIgKAAQgKAAgGAIg");
	this.shape_3.setTransform(27,21.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqA8IAAh2IAaAAIAABdIA7AAIAAAZg");
	this.shape_4.setTransform(16.575,20.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAjQgOgNAAgVIAAgBQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_5.setTransform(0.525,21.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_6.setTransform(-7.175,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAiQgNgOAAgTIAAgBQAAgTANgOQAOgNATAAQAXAAAOAPIgQARQgKgKgLAAQgIAAgHAIQgGAHAAAJQAAALAGAHQAHAHAJAAQALAAAKgJIAPAPQgPAQgWAAQgTABgOgOg");
	this.shape_7.setTransform(-14.5,21.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_8.setTransform(-21.975,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQA+IAAgzQAAgRgQAAQgPAAAAARIAAAzIgaAAIAAh7IAaAAIAAAuQAMgPAOAAQAOAAAJAJQAIAJAAAPIAAA7g");
	this.shape_9.setTransform(-29.775,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAjQgOgNAAgVIAAgBQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_10.setTransform(-40.325,21.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLA8Igwh3IAdAAIAeBTIAfhTIAdAAIgwB3g");
	this.shape_11.setTransform(-51.875,20.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_12.setTransform(48.225,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgQAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_13.setTransform(40.4,3.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAQAvIAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAhaIAaAAIAAAMQAMgOAOAAQAOAAAJAJQAIAIAAAQIAAA7g");
	this.shape_14.setTransform(30.375,3.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiAiQgOgOgBgTIAAgBQAAgTAPgOQAOgNAUAAQAVAAAOANQAOAOAAATQAAAUgOAOQgOAOgVgBQgUAAgOgNgAgQgQQgHAHAAAJQAAAKAHAIQAHAHAJAAQALAAAHgHQAGgHAAgKIAAgBQAAgJgHgHQgHgIgKAAQgKAAgGAIg");
	this.shape_15.setTransform(19.45,3.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_16.setTransform(11.275,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAeIAAgqIgLAAIAAgVIALAAIAAgYIAYAAIAAAYIAWAAIAAAVIgWAAIAAAnQAAAIAJABQAHAAAGgEIAAAVQgJAFgLAAQgaAAAAgcg");
	this.shape_17.setTransform(5.05,2.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgTAAQgLAAgOAFIgGgUQAQgHATAAQAUAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgRAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_18.setTransform(-3.6,3.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAjQgOgNAAgVIAAgBQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIAAQgPgBgDAUIAmAAIAAAAg");
	this.shape_19.setTransform(-13.625,3.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbAvIAAhaIAbAAIAAASQAHgVAUABIAAAbIgBAAQgbAAABAfIAAAig");
	this.shape_20.setTransform(-22,3.4494);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcAiQgOgOAAgTIAAgBQAAgTAOgOQAOgNAUAAQAWAAAOAPIgQARQgJgKgMAAQgJAAgFAIQgHAHAAAJQAAALAHAHQAGAHAKAAQAKAAAKgJIAQAPQgQAQgWAAQgTABgOgOg");
	this.shape_21.setTransform(-30.65,3.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAjQgOgNAAgVIAAgBQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIAAQgPgBgDAUIAmAAIAAAAg");
	this.shape_22.setTransform(-40.825,3.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVA8IgZgmIgUAAIAAAmIgaAAIAAh2IA1AAQAXgBAMAMQAKALAAARQAAAbgaAJIAdArgAgYgBIAZAAQAKAAAFgEQAFgFAAgIIAAAAQAAgRgUAAIgZAAg");
	this.shape_23.setTransform(-51.675,2.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAjQgOgNAAgWIAAAAQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_24.setTransform(5.125,-14.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_25.setTransform(-2.575,-16.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAxIAAAMIgaAAIAAh7IAaAAIAAAuQALgPARAAQARAAALANQANANAAAVQAAAWgNANQgLAMgRAAQgQAAgMgOgAgPgCQgGAGAAAMQAAALAGAHQAHAHAIAAQAJAAAHgHQAGgHAAgLQAAgMgGgGQgHgHgJAAQgIAAgHAHg");
	this.shape_26.setTransform(-10.675,-16.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_27.setTransform(-19.125,-16.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAtIgSgcIgSAcIgbAAIAggtIgfgsIAcAAIAQAaIARgaIAbAAIgeAsIAgAtg");
	this.shape_28.setTransform(-26.625,-14.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAjQgOgNAAgWIAAAAQAAgTANgOQANgNASAAQAWAAAMAOQALAOAAAUIgBAHIg+AAQAEASARAAQAMAAAKgJIAPAMQgNASgYgBQgUABgNgNgAAUgGQgCgJgEgFQgGgFgIgBQgPAAgDAUIAmAAIAAAAg");
	this.shape_29.setTransform(-36.825,-14.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_30.setTransform(-44.525,-16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgsA7IAAh1IBZAAIAAAXIg/AAIAAAZIA3AAIAAAYIg3AAIAAAtg");
	this.shape_31.setTransform(-52.275,-15.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-25.5,120.5,57);


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
	this.shape.graphics.f("#000000").s().p("AgNANIAAgaIAbAAIAAAag");
	this.shape.setTransform(97.175,50.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASgBQAWABAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_1.setTransform(89.525,47.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAZAAIAAAXIAVAAIAAAXIgVAAIAAAmQAAAJAIgBQAHAAAGgDIAAAVQgJAFgMAAQgZAAAAgcg");
	this.shape_2.setTransform(80.7,45.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgNAFIgHgUQARgHARAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgQAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFABgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_3.setTransform(72.05,47.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVA7IgZgmIgUAAIAAAmIgaAAIAAh2IA1AAQAXABAMALQAKALAAARQAAAagaAKIAdAqgAgYAAIAZAAQAKgBAFgFQAFgEAAgHIAAgBQAAgRgUAAIgZAAg");
	this.shape_4.setTransform(61.575,45.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAYAAIAAAXIAWAAIAAAXIgWAAIAAAmQAAAJAJgBQAHAAAGgDIAAAVQgJAFgMAAQgZAAAAgcg");
	this.shape_5.setTransform(46.25,45.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAoQgKgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgOAFIgGgUQAQgHASAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgLAMgQAAQgNAAgIgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAGgFgBgHIAAgEQgHgEgJAAQgRAAAAANg");
	this.shape_6.setTransform(37.6,47.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASgBQAWABAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_7.setTransform(27.575,47.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAvIAAhaIAaAAIAAASQAHgVAVABIAAAbIgCAAQgaAAAAAfIAAAig");
	this.shape_8.setTransform(19.2,46.9494);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmAsQgSgRAAgaIAAgBQAAgZASgRQASgSAaAAQAbgBATARIgQAUQgPgMgQAAQgNAAgKALQgKALAAAOIAAAAQAAAQAKALQAKALAPAAQAOAAAKgIIAAgRIgaAAIAAgVIA0AAIAAAyQgXAUgcAAQgbgBgRgRg");
	this.shape_9.setTransform(8.575,45.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPALgGQAJgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgNAFIgHgUQARgHARAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgQAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFABgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_10.setTransform(104.9,29.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAQA+IAAgzQAAgSgQAAQgPAAAAASIAAAzIgaAAIAAh7IAaAAIAAAuQAMgPAOAAQAOAAAJAJQAIAJAAAPIAAA7g");
	this.shape_11.setTransform(89.775,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAYAAIAAAXIAWAAIAAAXIgWAAIAAAmQAAAJAJAAQAHgBAGgDIAAAVQgJAFgMAAQgZAAAAgcg");
	this.shape_12.setTransform(80.8,27.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_13.setTransform(74.875,27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAuIgRg3IgRA3IgXAAIgchbIAaAAIAPA2IARg2IAVAAIARA3IAPg3IAaAAIgcBbg");
	this.shape_14.setTransform(65.025,29.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAiIALgSQAPALANAAQALAAgBgGIAAgBQAAgDgFgDIgMgFQgNgDgFgFQgKgGAAgMQAAgOAKgHQAKgIANAAQASAAAQAKIgKASQgPgIgJAAQgJAAAAAGIAAAAQAAAEAFADIANAEQAMAFAGAEQAJAHAAAKIAAABQAAAPgKAHQgKAHgPAAQgUAAgSgNg");
	this.shape_15.setTransform(48.25,29.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAZAAIAAAXIAVAAIAAAXIgVAAIAAAmQAAAJAIAAQAHgBAGgDIAAAVQgJAFgLAAQgaAAAAgcg");
	this.shape_16.setTransform(40.45,27.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAvIAAhaIAZAAIAAASQAIgVAVABIAAAbIgCAAQgbAAAAAfIAAAig");
	this.shape_17.setTransform(33.85,28.9494);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggAoQgJgIAAgNIAAAAQAAgPAKgGQAKgHARAAQAKAAALADIAAgBQAAgRgSAAQgMAAgNAFIgHgUQARgHARAAQAVAAAKAKQAKAKAAATIAAA0IgZAAIAAgKQgKAMgQAAQgOAAgJgHgAgQASIAAAAQAAAFAEADQAEADAGAAQAIAAAGgEQAFgFABgHIAAgEQgIgEgJAAQgRAAAAANg");
	this.shape_18.setTransform(24.7,29.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAZAAIAAAXIAVAAIAAAXIgVAAIAAAmQAAAJAIAAQAHgBAGgDIAAAVQgJAFgLAAQgaAAAAgcg");
	this.shape_19.setTransform(16.25,27.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguAqIAPgTQASAPARAAQARAAAAgLIAAAAQAAgGgFgCQgEgEgOgDQgVgGgIgGQgKgHAAgRIAAAAQAAgQALgKQAMgKASAAQAZAAASAPIgNAUQgRgMgNAAQgHAAgEADQgEADAAAFQAAAFAFAEQAFACAOAEQAUAGAIAGQAKAIAAAPIAAAAQAAASgMAJQgMAKgUAAQgcAAgVgTg");
	this.shape_20.setTransform(7.325,27.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASAAQAWAAAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_21.setTransform(87.875,11.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAvIAAhaIAaAAIAAASQAHgVAVABIAAAbIgCAAQgaAAAAAfIAAAig");
	this.shape_22.setTransform(79.5,10.9494);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghAlQgIgJAAgPIAAg6IAaAAIAAAxQAAATAPAAQAQAAAAgTIAAgxIAaAAIAABaIgaAAIAAgNQgMAOgOAAQgPAAgIgJg");
	this.shape_23.setTransform(70.325,11.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAeIAAgpIgLAAIAAgXIALAAIAAgXIAZAAIAAAXIAVAAIAAAXIgVAAIAAAmQgBAJAJAAQAHgBAGgDIAAAVQgJAFgLAAQgaAAAAgcg");
	this.shape_24.setTransform(61.4,9.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAQAuIAAgxQAAgTgQAAQgPAAAAATIAAAxIgaAAIAAhaIAaAAIAAAOQAMgPAOAAQAOgBAJAKQAIAJAAAQIAAA5g");
	this.shape_25.setTransform(52.775,10.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAiQgOgMAAgWIAAAAQAAgTANgNQANgOASAAQAWAAAMAPQALANAAAUIgBAHIg+AAQAEASARAAQAMAAAKgKIAPAOQgNARgYAAQgUAAgNgOgAAUgGQgCgJgEgFQgGgGgIAAQgPABgDATIAmAAIAAAAg");
	this.shape_26.setTransform(42.225,11.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLAuIgkhbIAcAAIATA8IAVg8IAbAAIgkBbg");
	this.shape_27.setTransform(31.95,11.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAzQgNgNAAgWQAAgVANgNQAMgNARAAQAQAAALAOIAAgtIAaAAIAAB7IgaAAIAAgNQgLAPgQAAQgRAAgMgMgAgOgCQgHAGAAAMQAAALAHAHQAGAHAIAAQAKAAAGgHQAGgHAAgLQAAgMgGgGQgGgHgKAAQgIAAgGAHg");
	this.shape_28.setTransform(20.925,9.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAkA8IgLgaIgyAAIgKAaIgbAAIAzh3IAXAAIAzB3gAAQAKIgQglIgPAlIAfAAg");
	this.shape_29.setTransform(8.7,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fr2, new cjs.Rectangle(0,0,112.4,57), null);


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
	var mask_graphics_0 = new cjs.Graphics().p("AoqRBQhIgjgmgqQhjAdhUgpQhwg3gphuQgJgXgFgaQAFAaAJAXQiaAShfhnQhsh1BZh0QgggxgRg5QhGjsCpixQCti0D1BIQgthKBmhVQg5g1ANhnIABgGQipjfDgibQA0gkA/gIQBgj/D9gHQD4gGBgDkQA5gjA5BSQB+iCCdAMQCgAMBcCAQBcB/guCbQgXBOguBFQCAAYAABzQB9hACbBBQCPA9A8CUQA/CahgCMQhLBtg4ARIgBgBQgUhPgTgVQATAVAUBPIAAABQAEBJgOBHQgRBRhGAnQhFAnhLANQhPAOg6gpQAdgSAYgaQgYAagdASQgjAVgqAJQhGAPhIgLQgmgGghgNQhIgdgug4IgDgBQAGgcADgbQgDAbgGAcIgHAYQgUAvgmAlQg6A7hNABQgVAAgRgFQAGASgbAdQgkAkgoAHIgBABIgSABIAAAAIgBAAQgQAAgRgFIgCgBIACABQARAFAQAAIABAAIAAAAIASgBIABgBQgKAwg5AnQhFAuhEgZQAIgVACgVQgCAVgIAVIgBADQgdBHg/AqQg9AqhMAEIgXABQhBAAg5gbgAB6LzQhPgWgqgrQAqArBPAWgApSLUQhZgPAAhMQAAgdAOgnQgOAnAAAdQAABMBZAPgAqdI1QAjAXA6ALQg6gLgjgXQg6gmAAg/QAAggAQgoIAAAAQgCABgEAAIAAAAIgBAAIgEAAIAAAAIgBgBIAAAAIgDAAIgBgBQgJgCgOgIIgBAAIAAAAIgCgBIgIgFIgCgBIAAAAIgBgBIgBAAIgBAAQh0hEAAhPQAAgkAYgnQgYAnAAAkQAABPB0BEIABAAIABAAIABABIAAAAIACABIAIAFIACABIAAAAIABAAQAOAIAJACIABABIADAAIAAAAIABABIAAAAIAEAAIABAAIAAAAQAEAAACgBIAAAAQgQAoAAAgQAAA/A6AmgACzE8QgzgdgBg3QAAgPAEgRQAGgaAXgOQgYglAAgoQAAgwAjgzQAjg0A8gKIAAAAIADgBQAKgCAKAAIAAAAIABAAQAlABAeAXIABABIABAAIABABQAPANAOATQgOgTgPgNIAAgBIABgDQAOgyA3AAIAAAAIABAAQAPAAATAEIABAAIABAAIACABQBUAUAbBLQgbhLhUgUIgCgBIgBAAIgBAAQgTgEgPAAIgBAAIAAAAQg3AAgOAyIgBADIAAABIgBgBIgBAAIgBgBQgegXglgBIgBAAIAAAAQgKAAgKACIgDABIAAAAQg8AKgjA0QgjAzAAAwQAAAoAYAlQgXAOgGAaQgEARAAAPQABA3AzAdgArog3QgngbgRgcQARAcAnAbgAqgjlQgrgOgcgaQAcAaArAOgAjdlWQAMgdAAgeQAAgfgNgfQgZg/g7gkIgCgBQgcgQgeAAIgBAAIAAAAQgkAAglAXIgCABIgBABIgBABIgEgEIAAgBQgfgigmAAIAAAAIgBAAQgdABgjAUIgCABIACgBQAjgUAdgBIABAAIAAAAQAmAAAfAiIAAABIAEAEIABgBIABgBIACgBQAlgXAkAAIAAAAIABAAQAeAAAcAQIACABQA7AkAZA/QANAfAAAfQAAAegMAdgAsSmvQAGgiASghQgSAhgGAigAvoNDIAAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Al9Q/QhCgagng6QgbA1g6AJQjeAnhWjKIAAgCQgEgSgBgTQABATAEASIAAACQgxAnhPgGQhQgGg1gzQgzgwgRhIQgThQAVg8Qg4gvgig6QgnhBgHhHQgIhQAXhGQAYhLAvg6QAqgyA+gsQBAgtBOgDQBNgEBKALIAHABIAAALQAAAeARAaQgRgaAAgeIAAgLQADgbAPgfQAhhFA9gQQgHgaABgcQAEg3ARgoQAJgUALgPQgLAPgJAUIgIgDQgcgUgfgjQgxg1ALhOQAJhIAihAQAihDA6ghQAvgbAAgHQALkEENgvQD9gsCCDZQAzgnAsA+QA2gZBAAaQBKAdAPBNQAzgwBEgZQBGgaBMADQBRAEA8AeQA/AfAoBAQAnA/ABBPQABBRgRBKQgNA5geAqQAmAZAnA5QAkAzADBFIAAAMIAAAFQgBAsgKApQAKgpABgsIAAgFIAAgMQDWgJCBClQApA1AVBAQBFDejVBiQg2AYg6AGQgBgkgMghQAMAhABAkQACAkgKAlQgTBNg8AgQg/AihPADQhVADgrg4QgPgTABgEQg9BShjgFQh3gJhVhZQAGAlgYAqQgmBAhSACQgSAAgQgCQg7gJgdgsQAdAsA7AJQgRAYgTANQAHAhgCAUQgIBRhEAwQhCAvhFgIQAKgeAAgjIAAgBQAAgWgGgTQAGATAAAWIAAABQAAAjgKAeQgMAjgbAaQg0AzhJAKQgUACgTAAQg0AAgxgTgABRMJQAZgBAXgPQgXAPgZABgAyuJyQANAKAQACQgQgCgNgKIgIgIIAIAIgAluJPIALgBIABAAQAbgCAJgXQgJAXgbACIgBAAIgLABIAAAAIgBAAQhLgBgghMQAgBMBLABIABAAIAAAAgAn6IHQAOAAAPgEIAAAAIABAAIACgBQANgEANgGQgNAGgNAEIgCABIgBAAIAAAAQgPAEgOAAIAAAAIAAAAQgngBgjgcIgBgBIgCgBIgCgCQgngiAAg0QAAgaAJgdQgOANgnAAIgBAAIAAAAIgQgBIgBAAIgDAAQg4gEg1g7QgfgjAAgsQAAgfAOgjQgOAjAAAfQAAAsAfAjQA1A7A4AEIADAAIABAAIAQABIAAAAIABAAQAnAAAOgNQgJAdAAAaQAAA0AnAiIACACIACABIABABQAjAcAnABIAAAAIAAAAgABpCFQABAiAVATQgVgTgBgiIAAgGQAAhUA/gZQgIgDAAgUIABgUQALhSBTgSIACAAQAYgFAXAAIABAAIAAAAQA0AAAuAaIABABIgBgBQgugag0AAIAAAAIgBAAQgXAAgYAFIgCAAQhTASgLBSIgBAUQAAAUAIADQg/AZAABUIAAAGgAJQh7QAUAWAIAXQgIgXgUgWIgBgCQghghgoAAIAAAAIgBAAQgZAAgbANIgBABIgBAAIgBABIABgBIABAAIABgBQAbgNAZAAIABAAIAAAAQAoAAAhAhIABACgAqshcQgsgrgMgwQAMAwAsArgAjclCIABgOQgBhGgog0IgBgCIgBgBQgpg0hJAAIAAAAIAAAAIgJABIgCAAQhFADgZAsQgbgNgZAAIAAAAIgBAAQglAAgfAeIAAABIgCABIAAABIgBABIgBAAIABAAIABgBIAAgBIACgBIAAgBQAfgeAlAAIABAAIAAAAQAZAAAbANQAZgsBFgDIACAAIAJgBIAAAAIAAAAQBJAAApA0IABABIABACQAoA0ABBGIgBAOgAClLUIAAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Ao4Q9QhQgMg7g3QgnglgZgvIAAAAIgMgbIAMAbIAAAAQgkAZgyAIQhRAOg+gaQhHgegmg7QgRgbgGggQgRhRAbg3QjthnAmj/QAokLEBgoQAtgFAtAFQgFATAAAVIABANIgBgNQAAgVAFgTIAAAAQAJgmAcgdQA1g5BJAYIAEACIgCgIQgVhMAihEQAZgzAqgkIgYgaQizjSDRi0QgVkSEBg5QCkglBzCBIAQgIQDXhIAwDJQA/g/A8BLIATgHQCYgtA1CaQC0h0CzBVQBfAvAlBlQBBC0iUB/QAwAYAqAlQA0AuAZBFQARAwgJAzQgDAQgGAQQgTA6ghAmQAhgmATg6QAGgQADgQIAJACQDZAhAwDKQA3DljCBRQghAOgmABQgxAEg0gSQAGgxADgMQgDAMgGAxQhYEXkAiWQglgUgXgmQh+BgiHhpIgPgNQAFgTAAgQIgBgKIABAKQAAAQgFATQgDAPgHASQgdBMhHAWIAAAAIAAAAQgHAFgLABIAAAAIgBAAQgNgBgTgHIgBgBIABABQATAHANABIABAAIAAAAQALgBAHgFIAAAAQgCCnieAhQgKADgKABQACgOAAgOQAAgZgFgZQAFAZAAAZQAAAOgCAOQgFAlgSAhQglBFhHAUQhJAWhHgTQhNgUgmgxQgTA5g3AeQgyAcg3AAQgQAAgRgDgAGoGJQADgdATgYQgOgEgHgVQgJgYAAgUQABgsAqgVQgqAVgBAsQAAAUAJAYQAHAVAOAEQgTAYgDAdgAmNGFQAiAAAhgTIABgBIAAAAIABgBIABAAIACgCQAOgIAMgLIABACIACABQAbAYAcAAIAAAAIABAAQAgAAAhghIADgDIgDADQghAhggAAIgBAAIAAAAQgcAAgbgYIgCgBIgBgCQATgSALgXQgLAXgTASQgMALgOAIIgCACIgBAAIgBABIAAAAIgBABQghATgiAAIAAAAIAAAAQgfAAgfgQIgFgCIgBgBQhEglgFhEIgBABQgmAVgyAAIAAAAIgBAAQhMAAg2gsQgoghAAgwQAAgUAHgYQgHAYAAAUQAAAwAoAhQA2AsBMAAIABAAIAAAAQAyAAAmgVIABgBQAFBEBEAlIABABIAFACQAfAQAfAAIAAAAIAAAAgABgAnQgFgKAAgMQAAgPAJgQIAAgCIABgBQAcg2AtAAIAAAAIAAAAQAPAAAQAFIABAAQAAgNADgMIABgCIAAgBIAAgBIAAAAIAAgBIABgBIAAAAQAbhrBYAAIAAAAIABAAQAkAAAuASIAAAAIABABIABAAIABABIACAAIgCAAIgBgBIgBAAIgBgBIAAAAQgugSgkAAIgBAAIAAAAQhYAAgbBrIAAAAIgBABIAAABIAAAAIAAABIAAABIgBACQgDAMAAANIgBAAQgQgFgPAAIAAAAIAAAAQgtAAgcA2IgBABIAAACQgJAQAAAPQAAAMAFAKgArSgVQgbgKgSg9QASA9AbAKgAJxiXIgBgCIgBAAIgCgDIAAAAQgrg8gxAAIgBAAIAAAAQgVAAgWALIgCABIACgBQAWgLAVAAIAAAAIABAAQAxAAArA8IAAAAIACADIABAAIABACIAAAAgAk4nAQA/A2AMBQQgMhQg/g2QgkgfgkAAIAAAAIAAAAQgfAAggAXIgBABQgvAkgDATIgDgBQgZgPgVAAIAAAAIAAAAQgjAAgWApIAAAAIgBABIgBABIABgBIABgBIAAAAQAWgpAjAAIAAAAIAAAAQAVAAAZAPIADABQADgTAvgkIABgBQAggXAfAAIAAAAIAAAAQAkAAAkAfIAAAAgANilHIgYgLIAYALgAqxlLQAPgNARgLQgRALgPANgAsDOmIAAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AndQoQhZgOg0gwQglgigcgdIgMALQg7AyhUABQhUABg4gvQgzgrgZhGQgTg1gEhXQgvgDgsgWQghgRgZgVQg3gsgPhDQgRhLAPhKQAQhMAXhCQAZhFA8grQA9gsBQgHQADgXAGgXQAWhOBMgaQBJgYBMAMQgCAPAAAQIACAdQAFA2AIACQgIgCgFg2IgCgdQAAgQACgPQAEgwAUgrQAYg2AkgpIASgTIgSATQgYgTgOgRQgqgugVhJQgXhRAihDQAghABAgfIgNgcQgdhCALhRQAKhMAsg9QAug/BOgPQBOgPBHAbQBMAeAvAuQA6g1BNgNQBZgPAwA7QAyA9AbBTQgSAKgNAUQANgUASgKQAZgPAiADQAMgPASgFQBRgWAnA/IAZgJQDCg5A6DFQDwhyC3CYQAsAkAQA4QAkB7hCCaQAbAdARAiQBKCMggBmQgcBahrA9QBrg9AchaQD5Cog8DcQg9DcjkgfQhIgJg9gmIgFgCQALgbAGggQgGAggLAbQgRAogeAcQgxAvhKAJQhKAJg/goQgpgagOgtQg9AThNgOIgIgCIABADQAFAWgVAiQgWAlhBgRIgBATQgKCTiUgNQgDgPgFgOQgEgMgBgOQABAOAEAMQAFAOADAPQANA8gPA/QgUBVhOAaQhJAZhOgWQhCgTgtgxQgTA3g2AjQgmAYg3AAQgXAAgZgEgAGQGqQgQgWAAgTQAAgeAlgZQgegDgHgjQgEgQAAgPQAAg7A9gXQg9AXAAA7QAAAPAEAQQAHAjAeADQglAZAAAeQAAATAQAWgAlIEPQBPAAAsg/IACgCIAAgBIADgEQAPgYAIgbIALABIAAAAIAAAAQA1AAAFhJQgFBJg1AAIAAAAIAAAAIgLgBQAFgPACgRQgCARgFAPQgIAbgPAYIgDAEIAAABIgCACQgsA/hPAAIAAAAIAAAAIgFAAQgxgBghgaQAhAaAxABIAFAAIAAAAIAAAAgApYEDQAXAAAYgFIAEgBIABAAQAegGAXgQQgXAQgeAGIgBAAIgEABQgYAFgXAAIgBAAIAAAAQgugBgrgRIAAAAIgBgBIgBAAQhLgggGhRQAGBRBLAgIABAAIABABIAAAAQArARAuABIAAAAIABAAgAwHCzQgFgfAAgeQAAgWADgWQgDAWAAAWQAAAeAFAfgAE9kYQhNAMgWBFQgIAYAAAGQhXAKgGBXQAGhXBXgKQAAgGAIgYQAWhFBNgMIACAAQASgDAQAAIAAAAIAAAAQA4AAArAeIADACIgDgCQgrgeg4AAIAAAAIAAAAQgQAAgSADIgCAAgAJpjiIAVAYIgVgYQghgkgqgBIAAAAIgBAAQgWAAgYAKIgCABIgCABIACgBIACgBQAYgKAWAAIABAAIAAAAQAqABAhAkIAAAAgAkrljQASAYAOAaQgOgagSgYIgDgEIgBgBQglgvgzAAIgBAAIAAAAQgSAAgTAGIgBAAQhHAVguA6IgBgBIgCgBIgCgBIAAgBQgUgOgRgBIAAAAIgBAAQgVAAgRAWIAAAAIgBAAIAAABIgBABIABgBIAAgBIABAAIAAAAQARgWAVAAIABAAIAAAAQARABAUAOIAAABIACABIACABIABABQAug6BHgVIABAAQATgGASAAIAAAAIABAAQAzAAAlAvIABABIADAEgAP8kxQgMgLgNgJQANAJAMALg");
	var mask_graphics_8 = new cjs.Graphics().p("AlnQGQhMgGg9geQg+gegZgoQgtA+hGATQhPAUhEgiQhBghgog5Qgqg8gKhNQjZgKgrjwQgrjxDeh0IAAAEQAAAZAHAYQgHgYAAgZIAAgEQABgrAUgvQAdhEBIgiQBCgfBQgBQASgBAQADQAKgzAjgrQAfglAkgcQhFghgkg9Qglg+AfhSQAchIA2gsQh6jLCoiXQBJhBBiACQBfAFAhAgQDginCGDgQAIANAGAPQBMgfA2AxIAMAMQAjgsBHgVQBLgWBBAqQAtAdAPAxQAZgGAdADQA5AFAmAnQA4A6ALA+QEhhkB/DBQB+C/iqDDQAuAxAWA8QAcBMgEA9QgBAVgFAUQgeBxiiAsQCigsAehxIAYgYQCzC7h+DQQgtBKhUAdQinA3iWheIgIgGQARgeAEghQgEAhgRAeQgQAbgbAZQg2AzhRgBQhJgBg8gwQgVgRgPgWQgRgbgGghQAGAhARAbQgzAhg1gaIAAAAQgMgGgMgJQAMAJAMAGIgEAGQgFA5gbAxQgsBNgxgQIgBgRQgCgmgTgOQATAOACAmIABARQAABFggA9QglBGhMAWQhLAWhIgbQg3gVAEgIQgYAcgiAcQg1AuhHAAIgSAAgAGNHBQgeghAAgcQAAgVAQgSQgmgaAAgjQAAgSAKgUQAjhIBNgKQhNAKgjBIQgKAUAAASQAAAjAmAaQgQASAAAVQAAAcAeAhgAo9DmQASAAARgEQgRAEgSAAIAAAAIAAAAQgnAAgngVQhGgngVhOQAVBOBGAnQAnAVAnAAIAAAAIAAAAgAlCDdQARAAASgDQBSgPAZhRIADgJIgDAJQgZBRhSAPQgSADgRAAIgBAAIAAAAIgRgBIARABIAAAAIABAAgAixBxQA5gOAAg1QAAgOgEgSQAEASAAAOQAAA1g5AOQACgKAAgJQAAgMgEgMQAEAMAAAMQAAAJgCAKgAsEAmQgMgmAAghQAAgRADgPQgDAPAAARQAAAhAMAmgAQfiqQgSgPgTgLQATALASAPgACGjdIABgBIADgCIABAAQAYgQAbgBIABAAIAAAAQALAAAMADIABABQAdhgBqAAIAAAAIAAAAQAPAAARACIADAAIABAAIgBAAIgDAAQgRgCgPAAIAAAAIAAAAQhqAAgdBgIgBgBQgMgDgLAAIAAAAIgBAAQgbABgYAQIgBAAIgDACIgBABgApsjxIABgBIAAgBIAAgBIAAAAQAQgmAdAAIAAAAIABAAQASAAAXAPIACACIABgCIABgBIABgBQA6hPBBAAIAAAAIABAAQArAAAtAjIAAAAIAGAEIABABQAhAaAGAQQgGgQghgaIgBgBIgGgEIAAAAQgtgjgrAAIgBAAIAAAAQhBAAg6BPIgBABIgBABIgBACIgCgCQgXgPgSAAIgBAAIAAAAQgdAAgQAmIAAAAIAAABIAAABIgBABgAKEkTIgBgBQgWgbgoAAIAAAAIAAAAIgLABIALgBIAAAAIAAAAQAoAAAWAbIABABgAgGoPQAEgUAAgRQAAg+g7gTQA7ATAAA+QAAARgEAUgAGhIwIAAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AumNnQiFAMhnh0Qgzg6gQhLQgrjNCriLQghj4DzgkIAfgCQACAzAWA6QgWg6gCgzQgEiCCEhZIAYgQQAeAYAmATQgmgTgegYIgPgMQgzgtAMhTQALhNBCgpQgqgdACgyQg4gugHhTQgGhNAahJQAXhDBEgqQBFgpBQASQBNASA8AfQgFAQgEARQAEgRAFgQQASg1AigkQAVgVAjgLQBJgWBCAtQAsAgAYAfQAMAQAGAQQgGgQgMgQQAsgTBXAHQBLAFA8AnQAcATAVATQAQAPAMAQQgMgQgQgPQA8gbBPAHQBIAHA6AfQA/AiAcBQIgGAAIgGAAIAAAAIgBAAIgWABIgDAAIADAAIAWgBIABAAIAAAAIAGAAIAGAAQAsACAyATQBBAYAbBKQAUA4gMAuQBBgfBNgIQBNgIBDAZQBMAcAcBAIA3CBQAbBCgQBSQgPBIguBTQBkC3h7COQBYDUiqB5QhEAxhVALQjAAWhginIgFgFQANgPAJgVQgJAVgNAPQgeAngzAHQhCAIgvgUQAEgQAAgRQAAARgEAQQgLA0gsAeQg+AshPgUQAAgQgEgRQAEARAAAQQABAYgGAZQgQBLg4AuQg2AshRADQhOADgrgdQgHA7gmArQgwA1hPAKQhMAJg/gTQhIgVgggwIAPgVIgPAVQgcAjgoAYQhcA3hHAAQiEAAg+i8gAsrK0QgIgNAAgOQAAgRAMgSQgUgLgRgRQARARAUALQgMASAAARQAAAOAIANgAE9GlQgSghAAgaQAAglAigYQgjguAAgoQAAggAVgcIACgCIAAgBIABAAQAkgvBLAAIAAAAIAAAAIADAAIABAAIACAAIgCAAIgBAAIgDAAIAAAAIAAAAQhLAAgkAvIgBAAIAAABIgCACQgVAcAAAgQAAAoAjAuQgiAYAAAlQAAAaASAhgAPaFzQBTAAA/g7IACgBIACgDIAVgXIgVAXIgCADIgCABQg/A7hTAAIAAAAIAAAAIgagBIAaABIAAAAIAAAAgAuoFdQgFgXAAgVQAAgqAUggQgUAgAAAqQAAAVAFAXgApHCwQhJAAghhDQAhBDBJAAgAjeAwQgCBShWAUQBWgUAChSQA1gTACg9QgCA9g1ATgAScgoQgYgrgpgrQApArAYArgAnZjwIAAgBIACgEQATgzA+AAIAAAAIAAAAIAHAAQBMADAuAxQgugxhMgDIgHAAIAAAAIAAAAQg+AAgTAzIgCAEIAAABIgBAAQgPgJgWAAIAAAAIAAAAIgMABIgCAAIgBAAIABAAIACAAIAMgBIAAAAIAAAAQAWAAAPAJIABAAgADGk1QALgdAigVQgiAVgLAdIgBgBQgNgKgPgBIAAAAIgBAAQgLABgNAFIAAABIgCAAIAAAAIAAAAIACAAIAAgBQANgFALgBIABAAIAAAAQAPABANAKIABABIAAAAgAghnQQAGgPAAgSQAAgjgUgyQgbhFhKgQQgBgsgrgSQArASABAsQBKAQAbBFQAUAyAAAjQAAASgGAPgAJPr7IAAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("As+QQQg/ghgug1QiCAihVhhQioi/BtjwQgkgzgBhAQgBjQDJg8QgVkQECg+IAHgCIABAAIAAgBIgCgGIgCgHQgHg9A7g7IAQAMIgQgMIgPgMIgKgIQhWhMArhrQhdhYAphhQBcjcDkBuQgJhCAog1QA0hFBUARQBVARAlA8QA6gvBIgLQDCgeB8CBQEKhYB1DeQAdA5gKBCQDSAdgdDNIgFAbQEUh0CVDPQCbDZirDRQAVA4AFA/QAGBQgyA6QgwA4hHAXIgVAFQABBDgsA8QgtA+hBAgQhCAghMABQhPABg/gkQg9gjg0hQQAQgPAKgTQgKATgQAPQgeAdgwARQhHAZhXAAQgQBMg9AyQg6AwhIAPQgnAJgmgFQgRgCgRgFQgSgGgQgIQAQAIASAGIgHAQQh4D/kPhrIgGgEQAKgSAIgVQgIAVgKASQgZAsgmAWQgzAfhKANQgTAEgUAAQg1AAgzgbgAseLDQgUgXAAgXQAAgeAjgeQhAgggChCQACBCBAAgQgjAeAAAeQAAAXAUAXgAy9HMQAKgIAKgOQgKAOgKAIgAO3G3QAaAAAagFIABgBIAFgBIgFABIgBABQgaAFgaAAIAAAAIAAAAQgPAAgOgCIgCAAIAAAAIgCAAIACAAIAAAAIACAAQAOACAPAAIAAAAIAAAAgAtxGeQhGgwAAg/QAAglAYgqIAIgOIgIAOQgYAqAAAlQAAA/BGAwgADKFfQgJgZAAgXQAAgwApgsQgSg1AAgoQAAg1AggcIABgBIACgCQAggbAjAAIAAAAIABAAQAZAAAbAOQgbgOgZAAIgBAAIAAAAQgjAAggAbIgCACIgBABQggAcAAA1QAAAoASA1QgpAsAAAwQAAAXAJAZgAvmCvQgngTgNhPQANBPAnATgASGBDIAJAYIgJgYQgehDg4gmQA4AmAeBDgAmSBSQA7gKAAg/QAAgOgDgSQAvgHAAg4IgBgPIABAPQAAA4gvAHQADASAAAOQAAA/g7AKgAG/AWIAAgCQALgsAxAAIAAAAIABAAQAPAAATAFIACAAIABAAIACABIgCgBIgBAAIgCAAQgTgFgPAAIgBAAIAAAAQgxAAgLAsIAAACgAslkDQASA4BAAjQhAgjgSg4IAAAAIAAAAIAAAAIAAAAIAAAAgAlOjLIgBgCQgZg9hBAAIAAAAIAAAAQgOAAgQADQAQgDAOAAIAAAAIAAAAQBBAAAZA9IABACgAiHm5IgGAXIAGgXQAGggAAgbQAAiHibgoIAAgFQAAg8hWgMQBWAMAAA8IAAAFQCbAoAACHQAAAbgGAgg");
	var mask_graphics_14 = new cjs.Graphics().p("ArNQ9QhGgVglhCQgjAFghgGQkDgsAbkGIACgYIgCAYQgyAGgvgtQgmgkgRgxQgYhHAOhNQANhJAhg6Qguj+DSiZQBthPCJAKQgUhOA4g1QghgdgJgoQgOg7ARgyIAFAEIgFgEQAFgOAIgPQgIAPgFAOQhIhBAQhiQAljrDmAmQAoh2BqBRIALAKQBCkGEUA4QC1AlA/CtQDbiUDTCmQCpCFhfDBIgEAHIAVAAQCgATggC2QEChQCpC7QC3DLipDKQgXAcgkAUIgMAGQgVgsgdgkQAdAkAVAsQAJATAHAUQAaBEgNBRQgMBHg8A0Qg7AzhNAQQhLAQgogmQgZBEg5AiQg/AkhLAFQhGAEhDgpQg+glgqhQQAMgWAFgcQgFAcgMAWQgTAngkAaQgqAfg2AKQgRAEgTABIgDABIgLAAIAAAAIgBAAQhGAAgmg7IgBgCIABACQAmA7BGAAIABAAIAAAAIALAAIADgBQATgBARgEIgpBDQgvA2hKgCQgRAAgPgCQg6gJgggnQAgAnA6AJQgnBQhYAFIgLAOQgyA5hKAPQhLAPhNgBQAOgWAGgcQgGAcgOAWQgWAmgqAZQg/AmhLAHIgkABQg4AAgxgPgArHLaQgpglAAguQAAgYAMgcQANAKARAGQgRgGgNgKQgpgbgOg3QAOA3ApAbQgMAcAAAYQAAAuApAlgAuNFPQAgBIBJAEQhJgEgghIQgRgnAAgsQAAgeAIgfQgIAfAAAeQAAAsARAngACFE0QAGAfAKAHQgKgHgGgfQgDgSAAgQQAAg5ArgeQgDgEgHgeQgEgYAAgVQAAgyAZgpQATgcAigHIACAAQAVgEASAAIAAAAIABAAQAwAAAeAbIABAAIABABIABABIgBgBIgBgBIgBAAQgegbgwAAIgBAAIAAAAQgSAAgVAEIgCAAQgiAHgTAcQgZApAAAyQAAAVAEAYQAHAeADAEQgrAeAAA5QAAAQADASgAmxA0QAQgSAAgTQAAgOgIgMQAWgJAIgcQgIAcgWAJQAIAMAAAOQAAATgQASgAH9giQAOAJAFAJQgFgJgOgJIgBgBIgCgBQgfgUgbAAIAAAAIAAAAQgkAAgdAiIAAAAIgCACIACgCIAAAAQAdgiAkAAIAAAAIAAAAQAbAAAfAUIACABIABABIAAAAgAs+i5QARBBAqAOQgqgOgRhBIAAgDIAAADgArSkZIAEAAIgEAAIAAAAIgBAAQgNAAgLgFIgCgCQgagNgTgSQATASAaANIACACQALAFANAAIABAAIAAAAgAjRl3QAFgZAAgYQAAgzgWgtQgjhFhKgVIgCAAIgBAAIAAAAQgSgFgTAAIgBAAIAAAAQgRAAgRAEIgCAAQgOg6hEgDQBEADAOA6IACAAQARgEARAAIAAAAIABAAQATAAASAFIAAAAIABAAIACAAQBKAVAjBFQAWAtAAAzQAAAYgFAZgAAoMmIAAAAgADqKxgArkJTIAAAAg");

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
	var mask_graphics_4 = new cjs.Graphics().p("Ai8KiQglBGhhgOQhVgMhNgkQhMgkglhDQgnhIALhiQgGgYgJgcQgXhJAxhDQgkgHgkgWQhDgmgqg8Qgpg8gOhCQgPhIAWgtQAGgLAIgKQgIAKgGALIgEgBQgqgVgRgrQgdhQBHg7QBAg2BXgCQgMgIgIgQQgjhHAShQQARhKA+g5QBAg6BXgCQBYgBBOAkQBZApAgAqQBTgcBSArIAOAIQAKAHAJAKQgLAWgEAaIgDAYIADgYQAEgaALgWIADgEIAAgBQAQgbAbgVQCQhsBbB9QAegXArACQAnADAgAPQBXAnAHA0QD5g2CADFQBuCqhyCSQgPATgWANQAjAugBA8QgBBIg5A5Qg2A4hKAZQgdAKgbADQAAgmgHglQAHAlAAAmQgBAlgGAmQgNBNhKArQhPAthDgcQANAsgXBHQgUA8g8AbQhfArhHgqQgQA2g1AbQg+AhgwAAQhXAAgmhqgAmZF4QAaAAAcgKIACgBIABAAIABgBIgBABIgBAAIgCABQgcAKgaAAIAAAAIgBAAQgyAAgxgjQg2gmAAgwQAAgRAHgSIgDAAIgRABIgBAAIAAAAQgQAAgRgDIgEgBIAEABQARADAQAAIAAAAIABAAIARgBIADAAQgHASAAARQAAAwA2AmQAxAjAyAAIABAAIAAAAgAM0hOQgJgNgNgLQANALAJANg");
	var mask_graphics_6 = new cjs.Graphics().p("AlLO8QhqgLhEhfQAQgYAOgOQgOAOgQAYQgJAIgIAKQhFBIhbAEQhAAAg4ggQhbg7gxheQgzhlAchXQhggig2hdQgzhZAUheQANhNAthCQAIgRAOgMQgOAMgIARQgIgNgGgOQhojYDagjQgzhcAVhgQAThbBGg3QBIg5BhgFQAbgCAZAEQg5ipCNgGIAAgBIABAAIAAABIgBgBIABABIgBAAIABAAIAAgBIgBAAIACggQAPjyDwBuQAugtA/gQQCZARBxAIQBvAbBACsQgfABgeAPQAegPAfgBQBCgEA0BAQCCimCDCVIACACIANARIABgBQBWhTB9AYQBwATBIBiQC9DxieDpQgVgKgVgEQAVAEAVAKQA+AcApBHQAvBUgBBnQgDBshRBBQghAZgjARQgEBIhFAyQhUA5hiAWQhvARg2hVQgtAqg8ANQhhARhOghQAcgQAYg5QgYA5gcAQQgOAkhBAgQhNAkg0gjQAMgdASgfQgSAfgMAdQgkBBgUAZQhLBUhWgaQAEgYADgWQgDAWgEAYQgNA8ggA5QgzBXhiAAIgNAAgAtQGSQAaBaBEAiQhEgigahaQgKghAAgeQAAhDAug3Qgog0AAgsQAAgdASgZQgSAZAAAdQAAAsAoA0QguA3AABDQAAAeAKAhgAEpD2IAAgEQgIiHBugBIABAAIAAAAIAHABIgBgMQAAgwArgPQgrAPAAAwIABAMIgHgBIAAAAIgBAAQhuABAICHIAAAEgAhcnWIABgYQAAiZiWgPIABgRQAAgjgWgWQAWAWAAAjIgBARQCWAPAACZIgBAYgApdoGQgvgeg4gGQA4AGAvAeg");

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
	this.shape_9.graphics.f().s("#C4C1AC").ss(1,1,1).p("AgjptQgJgKgKgHQgEgDgEgCQgDgCgDgBQhSgrhTAcQgggqhZgpQhOgkhYABQhXAChAA6Qg+A5gRBKQgSBQAjBHQAIAQAMAIQhXAChAA2QhHA7AdBQQARArAqAVAs9iuQgIAKgGALQgWAtAPBIQAOBCApA8QAqA8BDAmQAkAWAkAHQAdAGAdgDQgaBGBJAzQBNA2BRgfAgjptQgLAWgEAaQgBAMgCAMAM0hOQAWgNAPgTQByiShuiqQiAjFj5A2QgHg0hXgnQgggPgngDQgrgCgeAXQhbh9iQBsQgbAVgQAbQAAAAAAABQgCACgBACAJkD7QAbgDAdgKQBKgZA2g4QA5g5ABhIQABg8gjguQgJgNgNgLAJkD7QAAgmgHglApmDZQgxBDAXBJQAJAcAGAYQgLBiAnBIQAlBDBMAkQBNAkBVAMQBhAOAlhGQA7CkCwhbQA1gbAQg2QBHAqBfgrQA8gbAUg8QAXhHgNgsQBDAcBPgtQBKgrANhNQAGgmABgl");
	this.shape_9.setTransform(-161.9653,-32.8184);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4D2C7").s().p("Ai8KiQglBGhhgOQhVgMhNgkQhMgkglhDQgnhIALhiQgGgYgJgcQgXhJAxhDQgkgHgkgWQhDgmgqg8Qgpg8gOhCQgPhIAWgtQAGgLAIgKQgIAKgGALIgEgBQgqgVgRgrQgdhQBHg7QBAg2BXgCQgMgIgIgQQgjhHAShQQARhKA+g5QBAg6BXgCQBYgBBOAkQBZApAgAqQBTgcBSArIAOAIQAKAHAJAKQgLAWgEAaIgDAYIADgYQAEgaALgWIADgEIAAgBQAQgbAbgVQCQhsBbB9QAegXArACQAnADAgAPQBXAnAHA0QD5g2CADFQBuCqhyCSQgPATgWANQAjAugBA8QgBBIg5A5Qg2A4hKAZQgdAKgbADQAAgmgHglQAHAlAAAmQgBAlgGAmQgNBNhKArQhPAthDgcQANAsgXBHQgUA8g8AbQhfArhHgqQgQA2g1AbQg+AhgwAAQhXAAgmhqgAmZF4QAaAAAcgKIACgBIABAAIABgBIgBABIgBAAIgCABQgcAKgaAAIAAAAIgBAAQgyAAgxgjQg2gmAAgwQAAgRAHgSIgDAAIgRABIgBAAIAAAAQgQAAgRgDIgEgBIAEABQARADAQAAIAAAAIABAAIARgBIADAAQgHASAAARQAAAwA2AmQAxAjAyAAIABAAIAAAAgAM0hOQgJgNgNgLQANALAJANg");
	this.shape_10.setTransform(-161.9653,-32.8184);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C4C1AC").ss(1,1,1).p("AC3rbQhAishvgbQhxgIiZgRQg/AQguAtQjwhugPDyQgCAPAAARIABAAIAAABIgBAAIAAgBAxAB2QAIgRAOgMAtCBDQgsA/BCBXQhDBRAfBoQAaBaBEAiAxAB2QgtBCgNBNQgUBeAzBZQA2BdBgAiQgcBXAzBlQAxBeBbA7QA4AgBAAAQBbgEBFhIQAIgKAJgIQBEBfBqALQBrAGA3hdQAgg5ANg8QBWAaBLhUQAUgZAkhBQA0AjBNgkQBBggAOgkQBOAhBhgRQA8gNAtgqQA2BVBvgRQBigWBUg5QBFgyAEhIQAjgRAhgZQBRhBADhsQABhngvhUQgphHg+gcQCejpi9jxQhIhihwgTQh9gYhWBTQAAABgBAAQgGgJgHgIQgCgBAAgBQiDiViCCmQg0hAhCAEQgfABgeAPAvcigQjaAjBoDYQAGAOAIANAPsiKQgVgKgVgEABdJcQAMgdASgfAh8LwQAEgYADgWAn5NSQAQgYAOgO");
	this.shape_11.setTransform(-165.6285,-32.8556);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C4C1AC").ss(1,1,1).p("AlQp1IABABAAZp7QAbAbgGAvQChAQgMCwAmknFQgZgEgbACQhhAFhIA5QhGA3gTBbQgVBhAzBbAmknFQA4AGAvAeAlQp0QiNAHA5CoALhCFQgwARAGA6Qh4gFAKCQAJNJ8QAcgQAYg5");
	this.shape_12.setTransform(-194.4344,-42.9625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D2C7").s().p("AlLO8QhqgLhEhfQAQgYAOgOQgOAOgQAYQgJAIgIAKQhFBIhbAEQhAAAg4ggQhbg7gxheQgzhlAchXQhggig2hdQgzhZAUheQANhNAthCQAIgRAOgMQgOAMgIARQgIgNgGgOQhojYDagjQgzhcAVhgQAThbBGg3QBIg5BhgFQAbgCAZAEQg5ipCNgGIAAgBIABAAIAAABIgBgBIABABIgBAAIABAAIAAgBIgBAAIACggQAPjyDwBuQAugtA/gQQCZARBxAIQBvAbBACsQgfABgeAPQAegPAfgBQBCgEA0BAQCCimCDCVIACACIANARIABgBQBWhTB9AYQBwATBIBiQC9DxieDpQgVgKgVgEQAVAEAVAKQA+AcApBHQAvBUgBBnQgDBshRBBQghAZgjARQgEBIhFAyQhUA5hiAWQhvARg2hVQgtAqg8ANQhhARhOghQAcgQAYg5QgYA5gcAQQgOAkhBAgQhNAkg0gjQAMgdASgfQgSAfgMAdQgkBBgUAZQhLBUhWgaQAEgYADgWQgDAWgEAYQgNA8ggA5QgzBXhiAAIgNAAgAtQGSQAaBaBEAiQhEgigahaQgKghAAgeQAAhDAug3Qgog0AAgsQAAgdASgZQgSAZAAAdQAAAsAoA0QguA3AABDQAAAeAKAhgAEpD2IAAgEQgIiHBugBIABAAIAAAAIAHABIgBgMQAAgwArgPQgrAPAAAwIABAMIgHgBIAAAAIgBAAQhuABAICHIAAAEgAhcnWIABgYQAAiZiWgPIABgRQAAgjgWgWQAWAWAAAjIgBARQCWAPAACZIgBAYgApdoGQgvgeg4gGQA4AGAvAeg");
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
	var mask_graphics_2 = new cjs.Graphics().p("Ai9qOIAEgEQgHgPgBgVQgDhAAUg3QABgDADgDIADgCQgBgwAXglQACgEAEgCIAKgGQAdgOAXAaIABAAIAGAAQAFgJAJgDIAGgDQAOgeAegEQAvAXABA7QAAAfgJAbIgIhRIAIBRICkaWIhTAiIhcuZIBcOZIh6AzgAhUgYIhYsbgAhsqgIgXj2g");
	var mask_graphics_3 = new cjs.Graphics().p("Ai2qYIAEgDIAAgFIABgIQgWhKAWhIIACgGQACgHAGgDQATgKAIgSQALgZAcADQAMgNAOgKQAYgSAcgLQA8AQgHBAIgGAlIgBAEIgHhNIAHBNICmaaIhdAnIgSjoIASDoIgeAMIgIheIAIBeIhAAbgAAcAdIhnuwgAiSorIgfkPg");
	var mask_graphics_4 = new cjs.Graphics().p("AipppIgLhaQAGhBAPhBQADgPAOgFIAJgBIANgBQgCg4AugPIAFgBQAKgBAHAIIADACIAGAAQAJgcAcgCIAAAAQAxAVgKA+QgFAbAAAcQAAAQgDANIChaDIhXAkIhVt0IBVN0IgiAOIhJqyIBJKyIgzAVgAgoqaIgfkJgAAXsRIgKhjgABhOWgAizp8QgEgKAAgLIADgyIALBaQgGgHgEgMgAi0rDg");
	var mask_graphics_5 = new cjs.Graphics().p("AigqAIgLhhIALBhQgFgIgBgJQgFgoAAgoQgBgpAFgpQAEgoAtgDQADggANgeQAIgRARgBQAMABAJAHIAEACQA/gCAABBQAAAggEAfIgHhIIAHBIIClaVIg0AWIgKh4IAKB4IhlAqgAAtL+IhjtWgABGKkIhjxug");
	var mask_graphics_6 = new cjs.Graphics().p("AiiqbIABgBIgCgJIgJhDIAJBDQgFgXgDgYQgBgKAAgKQACgcAPgXQADgJAAgKQABgIAFgHQgJgrAcgaQAFgFAGgCQAKgcAeAEIAGAAQAKgLAOgEIAIgBQApAQACAuIAAAFIgBAEIACAEQAdAxgVA5ICfZzIg0AWIgflWIAfFWIhaAlgAA7MeIh1wYgAAOr8IgIhqgAB5ONg");
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
	this.shape_8.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADaNnIgFg8Iik6MIgLhzAjZvhIAEBcIALC+IAAAQICtZHIAIBSAhTgQQALBoBXMlQAEAkAEAlAgDtwICPXoAhgqIIBZPa");
	this.shape_8.setTransform(3.625,37.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D4D2C7").s().p("AjJptIAGgFQgCgFgFgGIgKi+QBjgNAQgKIAIgDQAVgdAjgGQAEAAADgGQAFgOAHgNQghgrAxgTIAHgCQAzAWABA9QACA5gOA2ICkaMIjFBSIhiuOIBiOOIgtATgACMLCIiO3ogAgGGcIhZvagAAxsXIgLhzgAAQPHIAAAAg");
	this.shape_9.setTransform(3.575,29.6875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADSN6IgFg3Iiq6qIgBgMIgJhWAAjmFIg7psAjRsaIADAbIAJBQIAAAHICuZKIAJBQABkNhIgemBAiBumIBfQoAiVoqICHS0");
	this.shape_10.setTransform(3.75,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4D2C7").s().p("AjDp6IABgBIAAgCIgCgFIgIhPIAIBPQgLgpADgmQACgnASglQAFgKAHgJQANgSAFgVQANguAggiQAIgKAOAEQANADAIAKQAHAFAIgFQAFgDAGgCQACgIABgJQAAgMAIgJIADgBIAGgBIAAgBQA4AEABA0QAAAogCAoIgIhWIAIBWIgBAOIACgCICqaqIjjBfgABmOOIgemBgAgMK3IiHy0gAggCvIhfwogAAllYIg7psgAAjtGg");
	this.shape_11.setTransform(3.5967,30.4875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C4C1AC").ss(1,1,1).p("AAZuNIAIBQICjaWIAEAuAjHsCIALBnIC0ZKIAIBTAAWgeIBbOaIADAaAhTglIhYscIgBgPAhrquIgXj2IgJhd");
	this.shape_12.setTransform(3.725,33.1125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D4D2C7").s().p("Ai9qOIAEgEQgHgPgBgVQgDhAAUg3QABgDADgDIADgCQgBgwAXglQACgEAEgCIAKgGQAdgOAXAaIABAAIAGAAQAFgJAJgDIAGgDQAOgeAegEQAvAXABA7QAAAfgJAbICkaWIhTAiIhcuZIBcOZIh6AzgAhUgYIhYsbgAhsqgIgXj2gAAfsvIgIhRgABwOJg");
	this.shape_13.setTransform(3.8684,31.7375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C4C1AC").ss(1,1,1).p("AAQu1IAIBNICmaaIAGBDABoO2IgHheIgSjnABKPAIgIhbIgHheAjDtCIANB4IC4ZJIAMBkAi+viIANB2IAgEQAhLvJIAAAEIBoOy");
	this.shape_14.setTransform(3.375,37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D2C7").s().p("Ai2qYIAEgDIAAgFIABgIQgWhKAWhIIACgGQACgHAGgDQATgKAIgSQALgZAcADQAMgNAOgKQAYgSAcgLQA8AQgHBAIgGAlIgBAEICmaaIhdAnIgSjoIASDoIgeAMIgIheIAIBeIhAAbgAAcAdIhnuwgAiSorIgfkPgAAXs3IgHhNgABgOKg");
	this.shape_15.setTransform(3.4254,32.5625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C4C1AC").ss(1,1,1).p("AC9OSIgGg2Iih6DIgKhjAhRwFIAJBMIAfEJAAXQGIgMhjIi14iIgLhaIgHg9AALALIBVN1IALB2ABIPnIgKhZIhJqy");
	this.shape_16.setTransform(3.475,33.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D4D2C7").s().p("AipppIgLhaIALBaQgGgHgEgMQgEgKAAgLIADgyQAGhBAPhBQADgPAOgFIAJgBIANgBQgCg4AugPIAFgBQAKgBAHAIIADACIAGAAQAJgcAcgCIAAAAQAxAVgKA+QgFAbAAAcQAAAQgDANIChaDIhXAkIhVt0IBVN0IgiAOIhJqyIBJKyIgzAVgAgoqaIgfkJgAAXsRIgKhjgABhOWg");
	this.shape_17.setTransform(3.3972,31.3125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C4C1AC").ss(1,1,1).p("AgCu9IAHBJIClaVIAIBNAAcO+IgLheIi04vIgLhgIgDgbABsK/IAKB4IAFA3AggoZIBkRvAg5inIBkNX");
	this.shape_18.setTransform(4,39.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D4D2C7").s().p("AigqAIgLhhQgBgpAFgpQAEgoAtgDQADggANgeQAIgRARgBQAMABAJAHIAEACQA/gCAABBQAAAggEAfIClaVIg0AWIgKh4IAKB4IhlAqgAAtL+IhjtWgABGKkIhjxugAAHsmIgHhIgAB4OFgAimqRQgFgoAAgoIALBhQgFgIgBgJgAirrhg");
	this.shape_19.setTransform(3.7738,31.8875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C4C1AC").ss(1,1,1).p("ACwNwIgHhJIie50IgIhqIgBgMAivs4IAIBCIABAKIDBZNIAMBjABXHmIAeFWIAEAkAg+lLIB1QZAg9spIBJMT");
	this.shape_20.setTransform(3.7875,39.2875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D4D2C7").s().p("AiiqbIABgBIgCgJIgJhDIAJBDQgFgXgDgYQgBgKAAgKQACgcAPgXQADgJAAgKQABgIAFgHQgJgrAcgaQAFgFAGgCQAKgcAeAEIAGAAQAKgLAOgEIAIgBQApAQACAuIAAAFIgBAEIACAEQAdAxgVA5IgIhqIAIBqICfZzIg0AWIgflWIAfFWIhaAlgAA7MeIh1wYgAAPA6IhIsSg");
	this.shape_21.setTransform(3.4299,31.2125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADDNQIgFg2IiZ5wIgMiFAjCsnIAIBHICyZMIAIBNAAePcIgIh9IgRkEAB4J+IhavtABBNOIhKq6AhotFIA3JdAhFvWIAyGu");
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
	this.shape_8.graphics.f("#D4D2C7").s().p("AilBmQAFgIAIgFQAMgJAQgDQABgLADgLIAHgQIgBAAQgBgEACgEIABgCIAEgGIABgBIABgBIABAAIACABIADgEIAEAAIAAAAIABAAIAFAAIAAAAIAIACIAMAFIgBgSIAAgBIADgKIABgBQAIgmAcgbIAOgLQAVgQAYgDQBEgEAnAoIABABQANAOAKAUQAFAKABAMQAIA1gyAOQghAJgPgeQgKgRAEgTIgCgDIgCgBQgLgHgNACIgDADQgIAFgGAIQgBAcgKAZQgMAfgigDIgBALgABhhVQAXAJAPAMQgPgMgXgJIgBgBIgDgBIAAAAQgbgKgYAAIAAAAIgBAAQgmAAggAZIAAABIgBAAIAAAAIgBABIABgBIAAAAIABAAIAAgBQAggZAmAAIABAAIAAAAQAYAAAbAKIAAAAIADABIABABgAhSAUQAEAAAEgDIABgBIACgKIAAABIABASIgMgFgAhaASIAAAAgAhaASIgFAAIgBAAIAAAAIgEAAIACgCIAGABIACABIAAAAgAhHAGIAAAAg");
	this.shape_8.setTransform(-7.6357,-97.7681);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C4C1AC").ss(1,1,1).p("Am2DTQgehxBzgbQgog3BGgTQgTgSAMgQQAAhrBgAWQBehqCSAmQBPAVAUBPQARBBgeA3ADDheQAJAnAlgZQAJgGgDgMQgEgPgDgIQAqggghgnQghgngXAsQgLAWATAMQgWgEAAANQgyAKAoArQAVAEAFgHgAG9ABQAIgxhggPQhXgrgmBdQg5ARgfAl");
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
	this.shape_13.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADBg4QgqAPgYAmQgaAoAcAkQAcAlArAIQgrAiAgAoQAbAhAtACQA3ADAEg0QACgTgHgKQAvAJAfgjQAPgTgGgYQgJgfgfgCQAJgYgegHQgMgCgOALQgNgogigdQgggdgrARgABlisQhRA0BWADQAaABgCgdQgCgegbADgAgJgPQgmhAhQgDQAYh/hYgmQhagng8BRQg+BSBHBCQAMALANAJQgugKAJAgQhvAhBiBGQg2AzBABQQA9BMBKhAQA0gsgRhEQA5A+BRg3QBRg3gzhWg");
	this.shape_13.setTransform(8.8553,-144.1348);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D4D2C7").s().p("AlbDbQhAhQA2gzQhihGBvghQgJggAuAKQgNgJgMgLQhHhCA+hSQA8hRBaAnQBYAmgYB/QBQADAmBAQAzBWhRA3QhRA3g5g+QARBEg0AsQghAdggAAQglAAghgpgAEFDjQgtgCgbghQgggoArgiQgrgIgcglQgcgkAagoQAYgmAqgPQArgRAgAdQAiAdANAoQAOgLAMACQAeAHgJAYQAfACAJAfQAGAYgPATQgfAjgvgJQAHAKgCATQgEAxgxAAIgGAAgABqh1QhWgDBRg0QAbgDACAeQACAcgYAAIgCAAg");
	this.shape_14.setTransform(8.8553,-144.1348);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C4C1AC").ss(1,1,1).p("AgJAUQgRgYALgTQA8ALgqAiQgHAGgFgIg");
	this.shape_15.setTransform(18.5858,-171.8415);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C4C1AC").ss(1,1,1).p("Ag6gGQgaAmgoAUQgoAUgXgYQgIA9g6gGQgygFgJgtQgDgOAGgNQg1ABAPg1QAFgUAOgCQgngPAAg3QAAgvApgXQAogYAtAJQAkAHAJAmQAsgMAoARQApAQATArQAVAtgbArgAEtBOQAbgRALAhQAngMgNA4QgNA3g1gZQgXAmgxAAQguAAgTgqQgIgSAKgOQAFgJANgEQgmgbAFgyQAFgtAkgbQAmgdAoAYQApAZABAtQAAAggJALQgDADgDAC");
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
	this.shape_23.graphics.f().s("#C4C1AC").ss(1,1,1).p("AFCBWQADg0gygEQgdgCgHAfQgzgxgSBAQgNAvA1AGQAUACALgQQANA4AtgjQAcgWgFgagAkJhzQgOAgAcAVQAoAfAjgaQAHgGACgHQALgwgsgVQgsgWgVAugAk6gEQAHAHAMgCQgnAvA6AeQAhATgBgqQA4APgBg6QAAgUgVgBQgQgBgGANQAEglgrAAQgmghgMArQgDALAKAJg");
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
	this.shape_14.graphics.f().s("#C4C1AC").ss(1,1,1).p("ADWg/QguASgaApQgdAtAfApQAfAoAwAJQgxAmAkAsQAeAlAyACQA9ADAFg5QACgVgIgMQA0ALAignQASgVgIgbQgKgighgCQAJgcghgHQgNgCgQAMQgPgtglggQgkgggwASgABxi/QhaA5BfAEQAdABgCggQgDgigdAEgAgKgQQgrhIhYgDQAaiNhhgqQhkgrhDBZQhFBbBPBJQAOANAOAKQgzgLAKAkQh7AkBsBOQg8A4BHBZQBEBVBThHQA5gxgThLQA/BEBbg9QBag9g5hfg");
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

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED2224").s().p("AgEgJQABgGAGAAIABAAIACATIgLAMg");
	this.shape.setTransform(86.7139,-10.8202,0.8099,0.8099,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68C49").s().p("AgDgqIAMAAIgEAuIgFABIAEAEIgCAUQgEADgFALQABgvADgmg");
	this.shape_1.setTransform(86.6127,-16.2665,0.8099,0.8099,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C62127").s().p("AgIBYQgGAAABgGQgCg1AJh0IARAAQAEAAAAAEQgEA0AAAaQgOAEADACIALABQgCAoACAqQgBAEgLAAIgHAAg");
	this.shape_2.setTransform(86.5863,-12.9938,0.8099,0.8099,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E4E4E").s().p("AoHBEQgDgKAJACQgEgJgEAAQgLABAAAMQgIgEgFgGQAEgCAAgEQgEgDAAgFQgBgCAHAAQAAgHgGgBQgGAAgDAJQgEgMgBgPQAIAIAFgMIgEgFQgCgGAGABQgCgGgIgEQACgIAEgGQABAIAIACQAEgBgDgDQgDgMAKADQACgHgGgGQAIgFAIgBQgGALAIAGQAJADAAgGQgDgIAKAAIgBgBIAAgBQAFADAGAHQgGACgBAJQAGAQADgHIABgGIAFgCQAEALACAMQgJgBgBAGQgBAQAKADQgBAJgFALQgCgKgHAAQgIAEACAKQAAAGAEAEQgJAIgMABgAoWgLQgGAJAAAMQAAANAGAIQAHAJAIgBQAIAAAGgGQgGAEgEAAQgIAAgFgHQgGgIAAgLQABgLAFgGQAEgJAIABQALAAAFANQgFgTgOAAQgJAAgGAJgAHyA/QgEgLAOACQgFgKgHAAQgQABgCANQgKgEgIgHQAGgBAAgHQgGgCABgFQgDgDALAAQABgJgKABQgKgBgDAKQgHgOgBgPQALAIAIgNIgGgEQgCgIAJABQgDgHgNgEQADgJAGgHQADAIALACQAHgBgFgDQgFgNAPAEQADgIgIgHQAMgHALAAQgIANALAGQANAEAAgHQgCgJANAAIgBgCIABAAQAJAEAHAHQgJADAAAIQAIATAEgIIACgGIAHgDQAGALADAPQgNAAgCAGQgCARAQADQgDALgHAMQgEgMgJABQgNAFADAKQAAAHAGAFQgPAJgRABgAHdgZQgJAKAAAOQAAANAKAJQAJALANgBQALABAJgJQgGAFgIAAQgMAAgIgIQgIgIAAgMQgBgMAJgJQAIgIALgBQARAAAHAQQgDgKgJgGQgHgFgLAAIAAAAQgNAAgJAKg");
	this.shape_3.setTransform(25.0228,8.4748,0.8099,0.8099,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#818181").s().p("Ao0BHQgRgYgBgkQAAghARgZQAQgZAYAAQAYgBASAZQARAYAAAiQABAjgRAZQgQAYgYABIgBAAQgYAAgRgYgAoNg3QgTAAgNAUQgNAUAAAaQABAcANAUQAOATATAAQATgBAOgUQANgTgBgcQAAgagOgUQgNgTgTAAIgBAAgAGyBCQgagbgBgnQAAglAZgcQAagcAkgBQAkgBAaAbQAaAcABAnQABAmgaAbQgZAcglABIgBAAQgkAAgZgbgAHuhKQgdAAgUAWQgUAWAAAeQABAeAVAXQAUAVAdgBQAdAAAUgWQAUgWAAgeQgBgegUgXQgVgVgcAAIgBABg");
	this.shape_4.setTransform(24.6372,8.3533,0.8099,0.8099,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4E4E").s().p("AJFB5IAGABQgHAKgGACQAEgFADgIgAJHByQAEgFABgGIAJgCQgFANgGAAIgDAAgAnaBhIAEABIAAAAQgFAIgEABQACgCADgIgAJPBeQACgDADgLIALgBIABADIgGAGIAAAEQgFADgDAAIgDgBgAnZBbQACgCACgHIAFgBIAAAAQgDALgEAAIgCgBgAnTBLIADgLIAHgBIAAADIgDAEIAAAEQgDACgCAAIgCgBgAJWBGQADgGABgNIALgCQAGABgDAFIgFAFIADACQABAIgLAAIgGAAgAnPA3IACgPIAIgCQAEACgCAEIgEADIADACQAAAGgHAAIgEAAgAJWAnIABgPQAHAFAHADQABAGABABQgEAEgEAAQgEAAgFgEgAnPAfIAAgNIAHgDQAFABAAAEIgDAEIACAHQgDADgCAAQgDAAgDgDgAnPAJIgBgKQAJgBAAABQADgBABADQAAAJgIAAgAnTgGIgBgHIgCgBQACgFADAAIAIgBIAAAIQADAFgEAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgBgAnEgPIACgGIAGACIgBAFQAHAHgKAAQgFgBABgHgAm8gTIAAAAIAAAAgAnGgaQgBgCgCgKIADgDIACAEQAEACgCAKgAnXgaIgEgLIgDgBIALgFQAFADgBAEIgCADIAEAAQAEAHgFAAIgEABIgFgBgAnhgtIgFgJIAIgFQAFABAAACIgBAEQAEABgBADIAAAAQgBADgFAAIgEAAgAnTg0IADgIQAEABgDAFIAFAEIgCACIgBAAQgCAAgEgEgAnpg7IgBgCIgHgHQgCgDAJgDQAGAAAAADQgBAAAAABQAAABAAAAQAAABAAAAQAAAAABAAIAEABIADAEQgDACgHACIgBAAIgBAAgAnZg/IgDgIIAAgEIAEABQAAAFAFADIAAADQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgBgAo8hlQAFgDASgCQAGADgDgEIAIgBIAGAEQABAAAAAAQABAAAAAAQgBgBAAgBQgBgBgBgBIAGgBQAHAAgDAEQAAAAgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAGADAAACIgJADIgDADIABgDIgGgCIADgFQgBgDgJAJQgEABgEgDIACgFQAAgDgIAIIgHgCQgbADgZAeQAOgYAegLgAIuhJIgLgKQgCgCAIgDIAGAQgAn3hNIgEgEQgCgBAJgEIgBAAQAHgBgBAEIAEAEQABACgKABIgDACIAAgDgAnlhOIgDgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgDIACACQAFABAAAFQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAIgCAAgAGvh7QALgDAYgDQAKAEgEgFIAMgBIAJAEQAGAEgIgIIAJgBQAMgBgFAFIAAAAQgEADABABQAJACAAAEIgOADIgFAFIABgFIgJgCIAEgGQgBgDgNAKQgHACgGgEIAEgGQgBgDgMAJIgLgCQgoAEgoAkQAWgdAugOgAoBhYIgHgEQgCgCAGgDQAHgBAGAGQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgHADIgDADgAIahdIgHgFQgCgCAMgEIAGgBIAEAMIgJAAIgEADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBABAAgAnyhbIgCgFQgBAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAJgCgDAFIABAEQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgEAAgAoBhjIgGgDQgDgBAEgEQARgBgGAEIABADQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEAAgAIJhqIgKgGQgDgBAKgEQAKgCAJAHQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgMAEIgEAEgAIJh5IgJgDQgEgBAHgFIASAAIABACIgCABIABAEQAAADgGAAIgGgBg");
	this.shape_5.setTransform(22.2085,6.0384,0.8099,0.8099,0,0,180);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-32.05,-37.4,0.8099,0.8099,0,0,180,27.4,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AD9ByQAcgHABgWIAJg7QhBgQhoATQhVAQghgaIASiEIEigSQAQAAgBAMIggDOQgGAkgkABIj7AIgAjwgaQhHgKgPAOIADgdQABgLAPgBICjgIQAMgBgBALIgEAuIgDAAQgSAAhSgLg");
	this.shape_6.setTransform(46.745,-35.3192,0.8099,0.8099,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#818181").s().p("AgFgTIALABQgEASgBAUQgGgcAAgLg");
	this.shape_7.setTransform(-1.4394,-5.0297,0.8099,0.8099,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgKgJQAAgFADgBIASAAIAAAPIgPAAIgDAQQgDgPAAgKg");
	this.shape_8.setTransform(87.2606,-2.6608,0.8099,0.8099,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B3B3").s().p("AoFAgQgbgDgBgYQAKASAXABIgCgTIBTAGIAQgYQgEAjAAAXgAhEAXIAAgBIJJgIQAJglAUgUQgLAeACAtIpaAJQAFgHgIgLg");
	this.shape_9.setTransform(42.455,3.4536,0.8099,0.8099,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#676767").s().p("AgPgSIASABQAIADAAAGIAAANIAFAOg");
	this.shape_10.setTransform(-48.7757,-30.3378,0.8099,0.8099,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#676767").s().p("AgYFsIgrgBQgCAPAKAWQgRgGAAglIAClrIAqlbQADgVAGgKQAIgLAPgCQgOAHgHAYIBJgHQAFgWAUgJQgMALgEAbQgTCLgcDmIACE2QABAdgfATQgCAUAPAXQgUgOgDgagAhADwIgCBxIArABQAcgMADgeIgBhKgAg/B5IgBBtIBHgCIgChugAg+gDIgBBuIBEgCIgBhlIABgIgAgxh6IgNBtIBEgBIAOhtgAgkjsIgMBpIBFgBIAOhsgAgWlnIgNBzIBHgEIAPh2g");
	this.shape_11.setTransform(49.6628,-26.7542,0.8099,0.8099,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5E5E5").s().p("AiQgOIAAgOIEhAtIAAAMg");
	this.shape_12.setTransform(-11.7853,-60.8898,0.8099,0.8099,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#818181").s().p("ApsAtIAugFIAAgbIgrADQgKACAAAGQgGgFAFgGQAEgGAIgBIFjgdQAaABAMAdIBHgHQAHgeAbgHIEDgUQAYAAAXAaIBkgKQAmgCAVADIERApQAKACABAGQACAGgJAAIkagpQglgDhJAIQATANAaAFQAPADAiACIEtAsQAGAIgJACIk8gtIgngFQgTgEgSgJQgTgKgRAAIsyBLQgJgIALgFgAo3AMIABAcIFHgfQgIgVgTAAgAhxgZQgJABgGAHQgHAHgBAKICMgNIgBgVgAANgjIAAAWICdgPQgKgPgUgDg");
	this.shape_13.setTransform(27.0696,-61.5174,0.8099,0.8099,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#676767").s().p("AABATIgQgBQgBgGABgKIAVADQgCAMAEAMQgEgDgDgHgAgIgSQADgJAHgBIAPAKIgCACg");
	this.shape_14.setTransform(-43.2727,-17.8052,0.8099,0.8099,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#818181").s().p("AgwACIAVAAQAPAAAKgHIApgsQAhgkhIBbQgJAKgQAAQAFALALAhQgUgmgTgUg");
	this.shape_15.setTransform(-25.0897,-8.428,0.8099,0.8099,0,0,180);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(-12.1,-52.35,0.8099,0.8099,0,0,180,29,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACQAmIhIglIAGALQiQgiiUgWQDQAIBMARQB2AyAbAOg");
	this.shape_16.setTransform(-43.3294,-24.4663,0.8099,0.8099,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#989898").s().p("AAPAjIiGgtQgXgJAAgfIEdBZIAAAAIgFAMg");
	this.shape_17.setTransform(-29.4201,-24.3043,0.8099,0.8099,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B3B3").s().p("AAbAuIALgJQgrhQAkA1IAUAfQACAFgJAAgAgpAcQgIAAABgFIgCg9QAAgIAIABIAhAAQgRADgEAJIABA2QAAADAEAEg");
	this.shape_18.setTransform(-5.6929,-30.6212,0.8099,0.8099,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#676767").s().p("ABfB/IgOgCIAAgBIANgKIg9gDQgOAAgCgLIAAhHQgBgSAWgBIAdAAIg/hfQAAC/gDgDQgCgEgFjFQgFgJgTgFIhfgFQgNgBgBARIADCQQABASAHAKQgQgKgBgWQgDhIAAhKQABgVAQAAIBmAEQAYAEAOAZICKDSQAGAPgLAAg");
	this.shape_19.setTransform(0.8952,-36.3105,0.8099,0.8099,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#676767").s().p("AgcgDQAAAAABABQAAAAABABQAAAAABAAQAAABABAAIAEAAIArgBQADgCAAgEQAGAJgGAFIgxABQgFAAAAgLg");
	this.shape_20.setTransform(12.4242,-21.6723,0.8099,0.8099,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#989898").s().p("AA4g7IgEAIIABAAQARABASAQQg7gWgsAaQgqAYgeBCQAviBBgAKg");
	this.shape_21.setTransform(-10.0846,-8.4425,0.8099,0.8099,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B3B3").s().p("AASABQgCANgJAHQADgKgBgLIgIgBQgBAOgFAGQgNAJgOgmIgsgLIB6AOIgFAHIAkAWgAhMgMIATAEQAGAOAOAKQgRgGgWgWg");
	this.shape_22.setTransform(-33.4086,-17.6635,0.8099,0.8099,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpAXQgggHgbgrQgHgJANAAQAvADA3AHQA5AHAgAHQgFAVALAZQgLADgIAAQg8gEhBgKg");
	this.shape_23.setTransform(-32.6909,-17.299,0.8099,0.8099,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#818181").s().p("AADAkQgVgBgEghQgDgfAWgGQAZgBABAkQACAkgUAAIgCAAgAAAgZQgPAEADAXQADAXANABQAOABgBgbQgBgZgQAAIAAAAg");
	this.shape_24.setTransform(-57.6488,-13.0452,0.8099,0.8099,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4E4E").s().p("Ag+AtQgSgCgKgQIAAAAIBTACQAJAGAMABQgOgIgJgSIhQgFQgJgCgCgBQgMgIABgKIBhADIAAgDQgBgGAOgGIhvgHQgFAAgDgDQgFgHAGgIICVAJQA+AEAYADQAHALgEAFIg8gCIADAUIA1ACQAGADACAIQACAJgHgCIg3gBQgDAPgIAHIBBABQADAEAAADQgCAHgJABQhhAAhKgJg");
	this.shape_25.setTransform(-55.1256,-12.9258,0.8099,0.8099,0,0,180);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(-54.15,-13.3,0.8099,0.8099,0,0,180,24.2,22.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#818181").s().p("AhNANQAVgjASgEIAFAEQAFACAKAAQB7AEgfAEIhXgBQgSABgKAFQgSAIgSAaQgFgFAFgJg");
	this.shape_26.setTransform(-36.337,-6.9733,0.8099,0.8099,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#818181").s().p("ADnAVInCgXQADAJAnAHIgZgCQgPgCgJgGQgRgMAGgVQACATAMgBIGLAUQAXADAMgjIgGAdIAiACQAHAFgDARQgCgJgGAAg");
	this.shape_27.setTransform(-48.6674,-0.5349,0.8099,0.8099,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#989898").s().p("AgXAFQACgEAtgRIgaAhg");
	this.shape_28.setTransform(-39.9482,-4.807,0.8099,0.8099,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#676767").s().p("AgWARQgCgGAZgcQgKAVADAGQAGADAYAEIgcABIgSgBg");
	this.shape_29.setTransform(-32.8359,-4.3413,0.8099,0.8099,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAFQgBgIAPgIQANAEAAAJQgBAKgKAAIgDAAQgMAAgBgHg");
	this.shape_30.setTransform(-34.826,-4.7015,0.8099,0.8099,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4E4E4E").s().p("AICCdQAHAAAAgIQgFgGAGgFQAHABgBgIQgHgCAIgHQAFAAgCgHQgGgCAFgKQAIAAgGgJQgIgIAMgCQACABAGgIQAEBehbApQAugbAKgcgAn7C6QALgJAFgNQAHABAAgIQgFgFAFgFQAIABgCgGQgGgDAHgGQAFABgBgHQgGgCAEgJQAJAAgGgIQgJgIAMgBQADABAFgHQABArgTAdQgVAfgqAGQAYgJALgHgAqKB1QAMAAAEAGQAQAfAUABQgYgOgEgZIAOAAQARAnAcgJQATgIAFggIAMgBQgOA4goAHIgIAAQgoAAgRgzgAFOCFIAQAAQAPAXAVACQgJgFgIgIQgHgHgCgFQALABAKAIQAWAPAXgJQAWgJAIgXQADgDAIACQgIApgyAKQgJABgIAAQgmAAgUgigAJ2AAImqgVQgcgCgQgRQANAWAZAIQgMANgWAFIgoACQABAMAIAMQgPgFgGgPQgTh0g5gqIAsgBQAPgBAHgHIA5g6QBUAJArABQAMAAAOgEQAVAuAcAdQALAKALAFQAJADASADQAwAGBKABQBMACAHgIQAOgQAEgkIAKB3QAFAEACAKQABANgDAOQgNAUgpAVQAlgagBgPgAFuhdIAKABQAIAfAWACQBRAHBYADQAFAAAGgCQAGgCACgFQgLAFgBgFQAEgFAGgQQACgCAKAAQAKgBAEAFQAGAFALASQgIgigNgDQhxABiIgMQgagDgaAiQAPgMAKgEQANgHALAAIAEABgADDhxQgTATgIATQgDAKALACIBcgBQALgCADgHIgYgQQADgNAIgBIA4gYIhcAAIgCAAQgVAAgPAOg");
	this.shape_31.setTransform(-16.2092,3.0487,0.8099,0.8099,0,0,180);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(31.75,-7.6,0.8099,0.8099,0,0,180,66,10.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AnsEMIgWAKQASgcALgKQgBgIgJABQhUADg8AEQABg5ADg0IAAAAQAAgJgMABIgRAAQAVjpAuh9QARgqAegKQgRALgJARQgHANgHAaQgSA/gLBIQgLBDgBAwQAHgSAMgTQgNA3gEAyQAAAdAXACIFAgQIgBAvIlLAKQAEAHAOADQAMADAJAAIEkgKIgBBPIgXABQgXgVgagFQAPAJARARQARATANATIgrAAQhShJhGBVIgfABQASgaAOgKgAG7DvIjoAEIgGhXIB9gEQgNgFhwABQgFhbgChgQgDBcAEBfIgXABQAFh3AIhfIAcADQgBgIAIhqQgDBVAFBXQAFAjAaAOQBXAjA3ALQAbAFAjADIAoAEIgBAMQgkgEghgBQAMAsARAAQggAkAHAeQAcgXAkgLIAAAKQgWASgSAkQASgeAfgUIgBgQQAkgIAsAEQheATgnBIIgUABQAEgXAFgKgADrBeQgKAAgDAEQgDAEAAAJQAAASAJABIAxgBQARAAgBgSQgCgSgSAAgAkFCzIA3gCIABBKIg5ABgAi2CpIFegMIgCBXIlbAGgACwCdIAXgBQACAxADAmIgeABgAH8B0IABgMQBtARAvAuQgygnhrgMgAi2BsIEXgOQAmgGANgqIASh9IACAMIAOABQgKBcgEB7QiVABjJAHgAkEBwIA2gDIAAApIg3ACgAowjoQALgGAXgCQA0gHDDgRIAhgDIgBAMQjMARhdALQgNACgLAFQgLAFgDAFQAGgPAQgHgADpkjIgKABIADgNIAFAAQBcgGAtA3QgwgshXAHgAjekNIA5gFIgCANIg5AFgAiKkUQDEgQCmgKIgEAMIlnAbg");
	this.shape_32.setTransform(33.1012,-30.949,0.8099,0.8099,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#818181").s().p("AmeBIIh1gSQgJAAgIgOQgLgPgKhiQAAgJAGgDIAggBQAEBtAKAHQgCgSAAglIB5ACQgKA4AAA2QgGgGAAgJgAIkA8IrLAGQgKgDgDgPIAAAAQgLg0gKgcIAegBIAAAcQABAzAkAEQAIgKgIgFQgLgLgBgPIAdgBQAJApAgABQAFgCgDgJQgWgPADgUQAYgOAEgaIFegKQAEAcAJAgQgEgXgCglIAlgBQAHA6AOAUQgJgVgFg5IDqgGQgNBCADA/QgKgDgCgNgAiRgQIAAgRIA2gCQgGANgPAGg");
	this.shape_33.setTransform(42.5982,2.5628,0.8099,0.8099,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#818181").s().p("Ai7gNQAGAHAOABIErgHIAAALIkuAPQgQgGgBgVgACdgMIAfgBQAAAKgIgBIgXACg");
	this.shape_34.setTransform(67.0141,-25.0535,0.8099,0.8099,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ai+BUQgKgiAehhIgBAiIA1gCQgCAjAVACIC3gIQAYgGADgUIAGg6QgCgSgOgDQAWABABAVIgFA6QgBALgGAIIAQAAIgJBJIgBAAIkcALIgGAAQgRAAgBgIgACZAIIApgBIgLBHIgmACg");
	this.shape_35.setTransform(65.7273,-35.1077,0.8099,0.8099,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AuECdQAAgJgMABIgQAAQATjmAwiAQATgyAogFQB9gPCugSIgEAZIgMBeQiDAKiQAOQgwAHgSAXQAXgTAqgEQCegPB1gJIgDAXQjEAOhQAKQgbAEgNARQgLANgIAfQAMgbAKgMQAPgPAWgEQDQgRBEgEIgbDTIAAArIk6ARQgIAAgDgCQgCgDgCgHQgBgPADguQgCAHgDAUQgDAUAAAPQAAAVARAAIE+gPIgDDIIhXADQgsgUgoAYIizAGQgDhbAGhdgApGhxIioAKQgUACgDAUIgEAuIABAAQgDAbAagCICdgIQATgBAIgGQAHgGACgPIACgqQACgOgGgGQgFgFgLAAIgEAAgAoPFEIA6gCIAAADIg6ACgAm/B7IEEgMQAiAAAPgSQALgOAEgfIAfjCQAGgdgdAAIkrAUIACgXQDXgOCJgDQgkC4gDFEIlbAMgAg2jDQA/gCBBABQA5ABAWAeQAlAzAwBIQAIARgCAYIhfiSQgRgZgigDQgzgEgvAAQgMgBgHAJQgGAHgBAOQAAB7ACAdQACAUAJAMQAJALASAIQBPAhBBAIQApAFAnACQgDAigBBXQgWASgRAkQARgeAfgUQgChAAEg8IAjABQAbADgJgYIgwhMQAFgegMgWQg6hXgbgmQgZgegsgBQhAgChPACQANhGAQgzQgSAzgPBGQiLACjVAOIANhoQACgJADgJQC/gSCvgOQBQABBRBfQg3hIgggRQDRAPBgAZQAzANAsAgQApAeA4A+QgggJhcgHIjpgOQgQACAIANQBSB4A9BTQAHAJANAFQABAaAGAOQAJASAUAHIBvAkQgYgCgYAAQgLgBgDAGQgFAGAHAJQAPAaATASQAQAQANAEIgqAoQgRARgPgFQgthAhFAGQhFAHgsBKIjxAIQgNiSgDizQgGCOAOC3IghABQABk5AjjDgAgdB4QgJAAgEAEQgDAEAAAJQAAASAJABIAxgBQARAAgCgSQgCgSgSAAgAoNDNIA3gCIABBfIg5ACgAoNB/IA2gDIABA0Ig3ACgAIICWIiIgtQgggLgBguIAMACQDWABCgAUQgng8gagfIBcBqQB5AwAsAcQiKgThzAAQgMAAgFAHQgEAEgGAOQhUgNgtgFgAoMBPIA1gBIgBAIIABAaIg2ADgAoAgmIA2AAIgMBdIAAACIg1ABgAnziMIA3gDIAAACQgGAlgCAaIgDARIg1ABgAnvi0IALheIA7gHIgOBhIg4AEgAnekrIA5gGIgCAEIg5AHg");
	this.shape_36.setTransform(11.6601,-33.0508,0.8099,0.8099,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#010101").s().p("AE1IqQg0gGgnggQgsglgPg9IkUgNQgKBKgcAcQgbAbg8ACQg3ACgcgVQgcgVgOg1QhkASgLgCQgagFgNggIgdAAQgKBEgwAhQgpAdg2gGQgkgEgcgXQgfgagJgmIgPgFQgFgDAAgJIgDgjIhtgUQgTgEgJgNQgLgOgEgdIgOhdIgBgUQACgKAJgGIAAAAQANlUA+i6QATg8AigSQgFgJADgLQADgLAIgEQgHgCgDgCQgGgDgBgJQgBgVAbgGIFsgfQAegDAUAiIAsgFQASgrAhABID7gTQAUgBAQAGQANAFASAPIBigJQAZgBAYADIEMAoQAQADAGAEQAHAFAAAIIABA1QgDALgPACQA9AiDeD5IAiACQAOABACARIAAAlIAWAUQCOA1AeApQAYAnARC5IAHAMQACAfgFAOQgOAZhJAnQgJAFgJAAQAAA8gcAmQgaAlgxAOQhAASg7gZQg/gbgPg9IhdgHQgRA7g0AgQgpAXgvAAIgWgBg");
	this.shape_37.setTransform(10.0357,-22.5061,0.8099,0.8099,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_3},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-74,163.4,96.5);


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
	this.shape.setTransform(92.4692,93.4047,1.5838,1.5838);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282521").s().p("Ah9LoQgcknAFj+QAHlYBNj4QA2isBShoQApg0AggSIAEADQggASgpA0QhSBpg2CrQhJDogJFTQgHEDAeE0g");
	this.shape_1.setTransform(-64.8432,149.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#144154").s().p("AAAHHIgHuMIAHgBIAIONg");
	this.shape_2.setTransform(-65.325,178.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#144961").s().p("AAnABQgDgGgJgFQgMgHgOgBQgMgBgSAFIgQAFIAVgJQATgGAUABQATACAJAMQADAHAAAFQgbAIg+ANQAegMA0gLg");
	this.shape_3.setTransform(-59.9731,124.7321,1.5838,1.5838);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00263A","#141116"],[0,1],-2.9,-39.3,7.1,8.3).s().p("AgUHyIgEgDIgGugQgbAJgegIIgZgKQAqgTBfgVQAwgKAogHQgBARgxAUQgZAKgYAFQABALgHABIgFgCIAGOkQgBAFgNAAQgKABgFgDg");
	this.shape_4.setTransform(-63.9,174.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00263A").s().p("AhHARQAHgTAqgRQAugSAaAGQAWAFABASQhlAXgpASQgFgGADgKg");
	this.shape_5.setTransform(-64.1405,126.4198,1.5838,1.5838);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#801517").s().p("AgHAwIABhjIANgBIAABpg");
	this.shape_6.setTransform(-62.3488,164.9833,1.5838,1.5838);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E5BD76","#E94D4D"],[0,1],-17.2,0,17.3,0).s().p("AisACIAAhMQD/gEBaACQgbAIgcANQg5AYgGAVQgGAUAcAYQAPAMAPAHIgIAYQjMg3hDgUg");
	this.shape_7.setTransform(-33.0878,170.078,1.5838,1.5838);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B3042").s().p("AiNgeIABgCIEaA5IgDAIg");
	this.shape_8.setTransform(207.098,175.9117,1.5838,1.5838);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#6B665F","#C1986A"],[0,1],-1.9,0,1.9,0).s().p("AAAABIAEgOIAEgJIAIAEQAGAHgFAMQgFAOgPAFIgPADQARgOABgIg");
	this.shape_9.setTransform(125.5134,159.0044,1.5838,1.5838);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#AF6F3D","#F4AC5A"],[0,1],-3.6,0,3.7,0).s().p("AgSAaQASgLAGgHQAKgIAUgkQACAMgGAPQgGAPgMAKQgLAIgUAHIgTAGg");
	this.shape_10.setTransform(99.8377,110.3615,1.5838,1.5838);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-0.2,-2.5,0.2,2.1).s().p("AgCARIgFAAIAJgCQADgBABgEIAAgKQgBgFgFgGIgGgFQALAEACAOQABAHAAACQAAAEgEABIgEABIgCAAg");
	this.shape_11.setTransform(96.795,139.5334,1.5838,1.5838);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808B91").s().p("AgJADQgEgBAAgCQAAgEANAAQAOAAAAAEQAAAFgOAAQgFAAgEgCg");
	this.shape_12.setTransform(89.4996,138.4544,1.5838,1.5838);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#786F8B").s().p("AgWAPQgOgCACgHIABgPIADgHIAHAAIgFALQgBAEABAJQABAEAHAAIAUAAQAQABAUAEg");
	this.shape_13.setTransform(87.6986,139.4839,1.5838,1.5838);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#808B91").s().p("AAxALQAAgJgEgDQgEgGgMAAIhPAAIAAgBIBAgCQATAAAKAEQAIADAAAOg");
	this.shape_14.setTransform(90.8876,138.0981,1.5838,1.5838);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#808B91").s().p("AACgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgCQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQgBAAAAABIAHAJIgCACgAgIgFIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIADAGIgBABg");
	this.shape_15.setTransform(100.2299,140.8565,1.5838,1.5838);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#808B91").s().p("AA2AWQAAgOgCgKQgDgPgkAAIhFABQABgCAdgCQAagBAPABQAdAAAIAKQAGAHgBAZg");
	this.shape_16.setTransform(91.5707,136.7597,1.5838,1.5838);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#171A1C","#786F8B"],[0,0.988],0.7,-0.8,-7.9,0).s().p("AAOAgIgtgCQgWAAgIgLQgJgMAJgQIAEgKQAFgKAIAAQBPgDAJAAQATACACASIACAWQgBARgNADQgKADgSAAIgLgBg");
	this.shape_17.setTransform(90.5585,138.692,1.5838,1.5838);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#171A1C").s().p("AAAAOQgHgBgCgBIgDgDQgCgCACgLIACgIQAAgBABAAQAAAAABAAQAAAAABAAQAAABABABQAEADAQAEQAAALgDAEQgCADgGAAIgDAAg");
	this.shape_18.setTransform(81.1845,137.2572,1.5838,1.5838);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#282521").s().p("Ai1M7IACgIQDOtWBkmlQBEkcgVhDQgHgVgOADIgNAIIACgEQA1gfgSCyQgNB7gYBfQhgFwjROLIgCAIg");
	this.shape_19.setTransform(172.0018,147.5264);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCBCB").s().p("AgFADQgDgEAAgEIAAgEIACAAIAAADQAAADACADQAGAKAHgDQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgCAAQgGAAgFgHg");
	this.shape_20.setTransform(184.5998,64.7761,1.5838,1.5838);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-1.3,0,1.3,0.1).s().p("AADAMQgEgCgEgFQgFgFgBgEQgCgFACgCIAJgBQADACAFAFQAFAFABAEQACAFgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBgAgEgHQgEADAHAHQAGAGADgDQAFgDgIgHQgEgEgCAAIgDABg");
	this.shape_21.setTransform(184.6806,64.6931,1.5838,1.5838);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#282521").s().p("AgiAkIgVgEQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIABAAIATADQAWABAXgLQAXgKANgYQAHgNADgLIABAAQgCAKgGAMQgMAXgYANQgUANgXAAIgEAAgAA5gjIAAAAIAAAAg");
	this.shape_22.setTransform(177.2034,71.5101,1.5838,1.5838);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBCBCB").s().p("AgFADQgEgFAAgEIAAgEIADAAIgBADQAAAEACADQAGAKAIgDQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAAQgIAAgFgIg");
	this.shape_23.setTransform(166.6824,75.5395,1.5838,1.5838);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-1.3,0,1.5,0.1).s().p("AAEANQgFgBgEgGQgLgLAEgHIAKgBQAEADAFAEQAFAGACAFQABAFgCADQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgEgBgAgEgHQgEADAHAHQAGAIAFgEQABgBgBgEQgBgCgDgDQgFgGgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape_24.setTransform(166.7502,75.4097,1.5838,1.5838);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#282521").s().p("AghAhIgRgEIABgBIARACQAWAAATgKQATgKANgVQAGgLACgJIACgBQAAAIgGALQgKAVgXANQgVAMgWAAIgCAAg");
	this.shape_25.setTransform(160.3556,81.9929,1.5838,1.5838);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CBCBCB").s().p("AgFADQgDgEgBgEIAAgEIACAAIAAADQAAADADADQAGAKAIgDQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgDAAQgHAAgFgHg");
	this.shape_26.setTransform(150.7339,85.6915,1.5838,1.5838);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-225.4,0,-228.2,0).s().p("AAFANQgFgCgFgFQgMgKAFgHIAKgCQAFACAEAFQAFAFACAEQACAGgDADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEgBgAgFgIQgDAFAHAGQAHAHAEgEQAEgEgIgGQgDgDgDgBIgCAAIgDAAg");
	this.shape_27.setTransform(150.803,85.5599,1.5838,1.5838);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#282521").s().p("Ag5AzIAcgEQAfgGAVgRQAUgQAIgeIAFgcIACgBIgEAfQgJAggVAOQgXAQgZAGQgOAEgKAAIgJgBg");
	this.shape_28.setTransform(143.0722,95.005,1.5838,1.5838);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9E6565").s().p("AgMADQACAAAAAIQAIgDABgCQABgBgCgGIACAEQAAAFgBABIgJADgAgYAFIABACQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAEgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgDABgAAGAAQABAAAAAHQAGgCABgCQAAgBAAgGIABAEQAAAFgBABIgIADgAAUgLQABABAAAIIAEgFIAAACQgBADgEACg");
	this.shape_29.setTransform(101.8929,130.8323,1.5838,1.5838);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E6565").s().p("AgFAZQgBgXgEgEQgCgDgIgFIgIgFIAJAFQAKAFACAFQADAGADAVgAALAWQgBgUgDgGQgCgEgIgHIgJgGIAJAFQAIAFADAGQAEAHAFAXQgEAAgCgDgAAbgHQgBgEgHgIIgHgHIAGAEQAHAGACADQADAGgBAYIgDACQADgUgCgGg");
	this.shape_30.setTransform(100.1903,128.516,1.5838,1.5838);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-4.2,0,4.2,0).s().p("AgYASIgMgFQgDAAgCgDQgBgCABgDIADgFQAEgGAEABQADAAAFgEQAGgFADAAQAIAAAEgDQABgCAEABIAGACIAEgCQACgDADABQAFABAJAIQAJAIAAAEQAAAFgDACQgDABgDgBQgDAHgGgBIgLgDQABAFgGABQgDAAgFgCIgEgCQADAHgIACIgCAAQgEAAgJgEg");
	this.shape_31.setTransform(99.2203,126.0161,1.5838,1.5838);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2ACA2").s().p("AgJAVIgFgEQgBAGgEgCQgDgBgDgLIgDgKIAFgGQAGgGAFgBIAogIQADAYgGAFIgHAEQAAAEgFACQgEACgEgCIgDgDQAAAGgDACIgCABIgGgCg");
	this.shape_32.setTransform(101.5412,129.7038,1.5838,1.5838);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#282521").s().p("AABgKIgZAFQgBABgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAagGIADgBIAbAdIAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_33.setTransform(105.1134,129.7038,1.5838,1.5838);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7DC14").s().p("AgGAAQAAgIAGAAQAHAAAAAIQAAAIgHABQgGgBAAgIg");
	this.shape_34.setTransform(109.4161,132.04,1.5838,1.5838);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E4C620").s().p("AgDAKIgFgCIABAAQAHgCAAgHQgBgEgDgBIgDAAQAGgGAFAFQAHAEgCAGQgDAHgGAAIgDAAg");
	this.shape_35.setTransform(110.2848,132,1.5838,1.5838);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EEA92E").s().p("AgIAHIgCgEQAKAIAEgHQAGgJgIgFIADABQAEABABAFQACAEgDAFQgEAFgFAAQgFgBgDgDg");
	this.shape_36.setTransform(110.1864,132.2379,1.5838,1.5838);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2DFDB").s().p("AgHgIIAGAAIAJALQgEAEgFABIgEABg");
	this.shape_37.setTransform(111.1187,135.2076,1.5838,1.5838);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7DC14").s().p("AgQATQgGgIAAgLQAAgLAGgHQAIgIAIAAQAJAAAHAIQAHAIAAAKQAAALgHAIQgHAIgJAAQgIAAgIgIg");
	this.shape_38.setTransform(110.1288,132.3567,1.5838,1.5838);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EEA92E").s().p("AgQAVQgIgJAAgMQAAgLAIgJQAHgIAJAAQAKAAAIAIQAHAJAAALQAAAMgHAJQgIAJgKAAQgJAAgHgJg");
	this.shape_39.setTransform(110.4456,132.3567,1.5838,1.5838);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#282521").s().p("AgIAHQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAOgGQAFAAADAFIgMAGQgFACgCAAIgBAAg");
	this.shape_40.setTransform(97.4451,130.0958,1.5838,1.5838);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9E6565").s().p("AAHAMIgBgMQAAgFgEgDIgYgYIAtAdIgJAHIgDAPQgBAHgEAGQAEgHgDgNg");
	this.shape_41.setTransform(90.4103,126.0215,1.5838,1.5838);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-2.6,0.8,0.3,-3.7).s().p("AAGAgQgcgLgkgYIAAgNQACgNAHgEQALgIATAIIAXARQAaARAKAEQABABABAAQAAAAABABQAAAAAAABQABAAAAAAIANACQADAMgCAHQgCAEgHACIgSACIgEABQgLAAgKgGg");
	this.shape_42.setTransform(89.649,126.1018,1.5838,1.5838);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CBCBCB").s().p("AgEADQgEgEgBgFIAAgDIACAAIAAADQAAADADADQAGAKAIgDIAAADIgCAAQgIAAgEgHg");
	this.shape_43.setTransform(132.7774,101.9958,1.5838,1.5838);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-202.8,0,-205.6,0).s().p("AAFANQgFgBgFgGQgFgEgCgEQgCgGACgDIACgBIAHAAQAFABAEAFQAGAFACAFQACAFgDADQgCACgDAAIgDgBgAgFgHQgCABACAEQABACADADQAHAHAEgEIgBAAQAEgDgHgHQgFgFgDAAIgDACg");
	this.shape_44.setTransform(132.927,101.8551,1.5838,1.5838);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#282521").s().p("AhEBYIAugLQAygTATgnQARgmADgnIgBgfIADAAIAAAjQgDArgTAiQgVAkgvATIgsAMg");
	this.shape_45.setTransform(123.4329,117.9044,1.5838,1.5838);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D14F50").s().p("AgHABIAPgNIAAACIgFAFIgFAHQgCAGACAFQgEgEgBgIg");
	this.shape_46.setTransform(129.8077,98.8986,1.5838,1.5838);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AF4340").s().p("AgIAPQgGgDgBgJIAAgCIACgCIANgOIACgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIACADQACAEAHAGIgBAEQgNAQgCAAIgBAAQgDAAgEgCg");
	this.shape_47.setTransform(130.758,99.2088,1.5838,1.5838);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D14F50").s().p("AgHAAIAPgJIAAABIgFAEQgEAEgCABQgBAEAAADIABACQgEgDAAgHg");
	this.shape_48.setTransform(148.18,82.7041,1.5838,1.5838);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AF4340").s().p("AgIAMQgFgEgBgHIAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAOgJIACgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABAEQACAFAGAEQAAAEgDACQgLAIgCABQgEAAgDgDg");
	this.shape_49.setTransform(149.0511,83.2056,1.5838,1.5838);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D14F50").s().p("AgFAAIALgHIAAABIgIAHIgBAFIAAACQgCgEAAgEg");
	this.shape_50.setTransform(182.7006,61.6393,1.5838,1.5838);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AF4340").s().p("AgJgBIACgDIAJgFIACAAQAHADgBAIQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAABQgIAEgCAAQgGAAAAgLg");
	this.shape_51.setTransform(183.2643,62.0353,1.5838,1.5838);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D14F50").s().p("AgGAAIANgIIAAACIgBAAIgEADIgFAEIgBAFIAAADQgDgEABgFg");
	this.shape_52.setTransform(164.6319,71.9737,1.5838,1.5838);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AF4340").s().p("AgIAJQgDgFAAgGIACgDIAKgGIAEgBIABADQABAEAFAFQABABgFAEQgJAIgCAAQgCAAgDgEg");
	this.shape_53.setTransform(165.2588,72.5281,1.5838,1.5838);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9E6565").s().p("AgXAPIABgDIAIADQAKADAFAFgAgEAAIgMAAIgEAAIAHgEIAAAAIAUAFQAHAEADADQgLgFgKgDgAAFgQQgFgCgHAAIgGAAIAGgEIAAABIAHABIAOAFQAHADADAFQgHgFgMgEg");
	this.shape_54.setTransform(117.7311,117.5084,1.5838,1.5838);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-2.2,0.1,2.6,0).s().p("AgPAjQgMgGgDgGQgCgEACgDIADgBQACgDgCgGQAAgEAFgDIAFgDQgCAAAAgHQAAgEAEgDIAEgDQgDgCABgEQAAgEADgCQADgCAHAAIAHABQANAEAEAEQAJAKgBAEIgEAEQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAEgFAFQgGAGAAAEQgBAIgFACQgFADgEAGQgCACgEAAIgJgBg");
	this.shape_55.setTransform(118.3112,117.5387,1.5838,1.5838);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9E6565").s().p("AgOASIAIgOIAXgbQABAKgDAGIgFALQgDAHgEADQgDAEgJAEIgIACIADgGg");
	this.shape_56.setTransform(120.5876,119.1319,1.5838,1.5838);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2ACA2").s().p("AgHAMQgDgEADgEQADgDABgEIACgIQAAgCAFAAIAGAAIgBAMQABAIgJAGIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_57.setTransform(115.3554,114.6681,1.5838,1.5838);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-175.1,0,-181,0).s().p("AgdBWQAFgZAHgXIANgqQAJgbAAgEIgCgIIATgrIAIADQgOAegTBHIgRBDQgBACgDAAIgFgBg");
	this.shape_58.setTransform(112.1878,135.4056,1.5838,1.5838);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#938C8A","#565A5C"],[0.02,1],-205.9,0,-247.7,0).s().p("AjQCsIAAAAIAmg2QAwg/AygoQBUhCBVg5QBVg4AbgIIAAAKQgzAbhEAsQiFBXhNBQQgqArgUAeIgLAWIgLACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_59.setTransform(150.7933,88.3695,1.5838,1.5838);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#938C8A","#A9BDC4"],[0.02,1],-24.5,0,24.6,0).s().p("AjvEVIgGgDQACgKAIgeQARg6AmheQAzh9C+iCQBghBBVgnIAEAAIAAADQg8AjhIAuQiSBehDBNQhEBOgmB3QgTA7gFArIgFABIgFgBg");
	this.shape_60.setTransform(145.2103,105.0557,1.5838,1.5838);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#808B91").s().p("AAAgOQAFAAACgDIgGAgIgHACg");
	this.shape_61.setTransform(108.2678,152.3128,1.5838,1.5838);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#25292B").s().p("AAAAGQgGAAgDgDQgEgDAAgBQABgHANACQAOADgBAFQgBADgEABIgFABIgEgBg");
	this.shape_62.setTransform(107.3976,148.6724,1.5838,1.5838);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#484E52").s().p("AgEAWQgFgBgDgDQgEgDABgDIAFghQALAIAQgEIgGAiQgBADgFABIgFABIgEAAg");
	this.shape_63.setTransform(106.9562,151.8693,1.5838,1.5838);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],1.8,0,0.3,0).s().p("AgDAoQgJgFgDgKIgSg1IAHgHQAOgHAbAAIATAxQACAGgGALIgIAOQgCADgGABIgIABQgEAAgFgDg");
	this.shape_64.setTransform(81.1291,119.2084,1.5838,1.5838);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#171A1C").s().p("AgqAAIALAAQAPAAAQgDQAQgDAMgGIAKgFIAFAJQABAEgBACQgBACgGACQgTAMgfADIgcABg");
	this.shape_65.setTransform(107.0324,135.8015,1.5838,1.5838);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#040404").s().p("AgYAdIgHgDIADgIQAGgIAQgEQATgEALABQAKABgBAGQgCAOgfAFIgMABIgMgBgAgTgJQACgEgQALIAHgIQAIgJAKgEQAOgGAJABQgRAIgGAHQgEAEAQACQAIABAKgBQgRAHgPABQgJACgHADIgFAEIAMgTg");
	this.shape_66.setTransform(80.0432,111.9142,1.5838,1.5838);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#171A1C","#786F8B"],[0,0.988],1.8,0.2,-5,0).s().p("AgTBNQgEABABgGQABgGgDgCQgDgDABgDQABAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgCAAgFIAAgUQgBgLgFgZQgFgbgBgNQgBgPAWgIQALgFAKgCQANAIAHAlQAEAUAEAdQAGAZAIAPQADAGgHAFQgGADgQAFQgMADgKAAIgNgBg");
	this.shape_67.setTransform(78.6391,103.7688,1.5838,1.5838);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-6.9,0,7,0).s().p("Ag0ALIgRgIQAFgBAOgGIAKAEQAOACAVgCQAggDAdgMIANAAQgEAGgNAHQgYANghAEIgPABQgRAAgPgFg");
	this.shape_68.setTransform(91.5189,90.5524,1.5838,1.5838);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#293133").s().p("AgFACIAKgFIABADQgEABgDADg");
	this.shape_69.setTransform(77.621,62.7084,1.5838,1.5838);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#373C3F","#786F8B"],[0,0.988],-0.5,-0.2,1.3,0.6).s().p("AgMgFIABAAIACgBIAVAKIAAADg");
	this.shape_70.setTransform(83.5339,60.8474,1.5838,1.5838);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#373C3F","#786F8B"],[0,0.988],0.3,-0.3,-0.3,0.4).s().p("AgOgGIAFgDIAYAPQgEADgFABg");
	this.shape_71.setTransform(82.0952,61.9165,1.5838,1.5838);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#171A1C").s().p("AgUAGQgCgIAOgHQARgJAIAIQAGAFgCAGQgCAEgHAEQgIAEgKABIgCABQgKAAgCgJg");
	this.shape_72.setTransform(82.1726,61.7253,1.5838,1.5838);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#293133").s().p("AgXAHQgCgJAPgIQAMgHAJADQAFABADACQAHAGgDAHQgBAEgJAEQgJAFgLABIgCAAQgMAAgCgJg");
	this.shape_73.setTransform(82.0986,61.8716,1.5838,1.5838);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#373C3F","#786F8B"],[0,0.988],0.4,1.3,-0.3,-0.4).s().p("AgCAKIADgTIACgBIgDAVg");
	this.shape_74.setTransform(72.9487,65.7572,1.5838,1.5838);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#373C3F","#786F8B"],[0,0.988],-0.9,0.1,0,0).s().p("AgDgLIAFgBIACAVIgHAEg");
	this.shape_75.setTransform(74.9285,65.3217,1.5838,1.5838);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#171A1C").s().p("AgKAOQgEgBgCgEIgBgDQAAgDABgDQADgGALgEQALgGAGAGQAGAFgHAHQgGAGgIAEQgFACgDAAIgCAAg");
	this.shape_76.setTransform(74.7023,65.3613,1.5838,1.5838);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#293133").s().p("AgLAQQgFgBgCgEIgBgEIABgHQAEgHAMgFQANgHAHAHQAGAHgIAHQgHAIgJAEQgFACgEAAIgCAAg");
	this.shape_77.setTransform(74.882,65.329,1.5838,1.5838);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#171A1C").s().p("AgOgKQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAQACgGgDgEIAtAoIgDADg");
	this.shape_78.setTransform(89.064,63.8171,1.5838,1.5838);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#805252").s().p("AgfAEQADgFAFgEQAFgDAJgBIAHgCQAFgDAIgBIAVgBIACAJQgEAEgGADQgNAFgLgFIgGgBIgEABIgEAGQgCAFgEACQgFAEgEAAIgEABQgBgFADgJg");
	this.shape_79.setTransform(80.357,64.8861,1.5838,1.5838);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F1CCBF").s().p("AgBABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAGgBIACABQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDABIgBgBg");
	this.shape_80.setTransform(84.7165,82.0046,1.5838,1.5838);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B57675").s().p("AAAgBIgFgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAIAEAFg");
	this.shape_81.setTransform(87.2426,77.6359,1.5838,1.5838);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgNADQAGgDAKgBIALgEIAAAFQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHACQgHADgGAAg");
	this.shape_82.setTransform(83.7978,79.0217,1.5838,1.5838);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5C4A4C").s().p("AgFAKQgBgDgFgEIgFgDIAFAAIASgFQAHgCADgEQABALgEAGQgDAEgIACIgEAAQgEAAAAgCg");
	this.shape_83.setTransform(83.8137,79.5325,1.5838,1.5838);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-1.4,0.3,0.7,-0.4).s().p("AgKAPIABgFQACgKgBgDIgDgMIAIAJQAEAPADgBQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAAAAABABQgBACgGAAQgFAAgEADIgEABIgCgBg");
	this.shape_84.setTransform(81.0658,74.5782,1.5838,1.5838);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgBABQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIABAAIABABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_85.setTransform(78.6768,73.3002,1.5838,1.5838);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#271C1A").s().p("AgEAAQACgBACgBQAFAAACACQgEgCgEACIgEACIgBABQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAg");
	this.shape_86.setTransform(78.1278,73.0758,1.5838,1.5838);

	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(77.85,73.7,1.5838,1.5838,0,0,0,0.8,0.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B57675").s().p("AgEABIAEgCQADgCAEACQgEgBgDACIgGADg");
	this.shape_87.setTransform(77.8981,72.8052,1.5838,1.5838);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D3D6DB").s().p("AgCAFQgDgCgBgDIAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAFgDADADIABADQgBADgDACIgDABIgCgBg");
	this.shape_88.setTransform(78.2347,73.5688,1.5838,1.5838);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B57675").s().p("AgDACIgCgEIALAFg");
	this.shape_89.setTransform(84.273,76.1708,1.5838,1.5838);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#C3816D","#765652"],[0,1],-1.3,-0.2,1.3,0.1).s().p("AgIAIQgCgGAEgFQAGgIAKgCIgFAHIgHAFQgFACAAAHIABAGIgCgGg");
	this.shape_90.setTransform(75.0149,66.7471,1.5838,1.5838);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-0.8,0.2,0.8).s().p("AgBACQgCgFgEgDIgEgCQAKAAADAKQADAHAHgBIgHABQgEgBgCgGg");
	this.shape_91.setTransform(91.0042,60.3327,1.5838,1.5838);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-1.1,0.3,1).s().p("AAFADQgEgMgFgCIgEgDIAIADQAEADADAIQAEANgHACQADgEgCgIg");
	this.shape_92.setTransform(88.5908,64.0942,1.5838,1.5838);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#805252").s().p("AgHABIAEABIgDABIgBgCgAAAgCIAAAAIAIAAIgHACQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_93.setTransform(81.4256,77.6698,1.5838,1.5838);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B57675").s().p("AgSAGQACgBABgDIADgFQABAFgDACIgDACgAAKgBIgGgCIgCgCIAHACIALAAQgFACgEAAIgBAAg");
	this.shape_94.setTransform(81.6993,73.9535,1.5838,1.5838);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#C3816D","#765652"],[0,1],-0.1,-0.9,-0.4,0.8).s().p("AADAHIgEgFIgKgJIADAAIAHAGQAFAFAIAEIgJgBg");
	this.shape_95.setTransform(89.5392,61.4809,1.5838,1.5838);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#997363","#523A38"],[0,1],0.4,-1.4,-0.2,0.5).s().p("AAFgEQgFgFgGACIgHACQAAgFAJgBQAIgBAFAGQAIAHgFALQACgJgJgHg");
	this.shape_96.setTransform(84.5233,62.2219,1.5838,1.5838);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#997363").s().p("AggAMQAKgDAFAEQACACABACQgDgEgSAGQgJADgFAEIgDAEQgBgLAVgHgAgWgDQgHgBgGACIgEABIAFgDQAHgCAJABQAQACAAAGQgIgEgOABQgJAAgHADIgFACQAGgHARgBgAAYgWIAIgEQgFAAgEACIgDACIAEgEQAFgDAHAAQAMAAAFAKQgLgKgNAGQgIAEgCAFIAAAEIgBAAQgCgHAIgFg");
	this.shape_97.setTransform(81.3393,60.8078,1.5838,1.5838);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#523A38").s().p("AAJAJQgFgFgCgHIAAgIIACAIQADAHAFADQAHAEADAJIgCADQgCADAAAFQgCgPgHgHgAAaARIgDgPQgDgMgLgJIAGADQAHAEADAHQAFAJAAADQABgOgEgJIgFgKIgDgEIAFAEQAFAGAEAJQAGAQgBAMQgEgGgIAGgAgDgEQgGgNgKAAQgKgBgFAEIgEAEQABgGAJgEQAKgDAIAGQAMAKgBAOQgBgGgDgFg");
	this.shape_98.setTransform(88.3619,64.3714,1.5838,1.5838);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEACQAAgCAEgCQAEgCAAADQACACgFACIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_99.setTransform(83.8374,71.5382,1.5838,1.5838);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#271C1A").s().p("AAAgCQAGgCAGADQgJgCgFACIgJAFQgCgEANgCg");
	this.shape_100.setTransform(83.4204,71.0789,1.5838,1.5838);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(83.4,72,1.5838,1.5838,0,0,0,1.4,1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D3D6DB").s().p("AgFAHQgCAAgCgEIAAgDIAAgCIAJgEQAFgBAFABQACAKgLADIgDABIgDgBg");
	this.shape_101.setTransform(83.4827,71.7639,1.5838,1.5838);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#523A38").s().p("Ag3ALQAFgDAGAAQgLAEgGAJIgDAHQgBgMAKgFgAAwAKQgCgMgOgFIABAAQAGAAAGAFQAGAFAAAFQAAAIAMgCQgFAEgEAAQgFAAgBgIgAA7gKQgIAAgCgGQgDgLgLAAQAEgBAEACQAFADADAGQADAIALgCIgEACIgCgBg");
	this.shape_102.setTransform(82.6823,63.3985,1.5838,1.5838);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#523A38").s().p("AABgDQgHgBgHAEIgFAEQACgFAHgDQAGgDAIABQAMABACAMQgFgKgNAAg");
	this.shape_103.setTransform(87.5594,58.3353,1.5838,1.5838);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#523A38").s().p("AAdgBQgGgGgJADIgIAEQABgFAIgCQAIgDAIACQAKACACALQgCgEgEgCQgDgDgGgBIgGgCIAEACQAGADADAEQAFAHAMADIgCABQgIAAgNgOgAgagHQgKAAgIAFIgHADQABgIAVgEQAJgCAJAGQAGAFAAACQAAABAAAAQAAABAAAAQAAABgBAAQgBAAAAABQgEgLgPAAg");
	this.shape_104.setTransform(82.5308,60.6596,1.5838,1.5838);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#523A38").s().p("AAEgEQgEgGgFAAIgGACIADgCQADgCAFAAQAGABADAFQAEAFgCACIgFAHQgDAEgEABQALgIgGgJg");
	this.shape_105.setTransform(81.0231,59.7123,1.5838,1.5838);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#523A38").s().p("AggASIADgCIgFAAIADgDQAGgEAKgCQAQgCAOAGQgOgCgPAEQgLACgGAEIgEADQABgCACgCgAAPALQANgFgCgLQAAgIgKgDQgJgEgHAHIACgDQAFgEAIAAQAIABAEAGQADAEAAAFQAEgLgJgHQAJACABAIQACAIgFAFQgFAHgMADIAAAAg");
	this.shape_106.setTransform(78.3215,60.1347,1.5838,1.5838);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F1CCBF").s().p("AgFAIIgCgCIAEAAQAEAAACgDQAEgFAAgFQACAJgIAEQgCACgCAAIgCAAg");
	this.shape_107.setTransform(93.755,71.4986,1.5838,1.5838);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-0.8,0.4,0.8,-0.3).s().p("AgMACQADgPAJgGQAHgDAEAVQAFAVgHgCQgGgBgFACIgEACg");
	this.shape_108.setTransform(77.1728,67.7951,1.5838,1.5838);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F1CCBF").s().p("AgDAAIABgCQACACAEAAIgEADQAAAAgBgBQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_109.setTransform(76.5519,72.7656,1.5838,1.5838);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#F1CCBF","#E2ACA2"],[0,1],-1.1,2,0,-1.1,2,2.7).s().p("AALAeQgLgKgNgEQgGgBgCgEIgCgFQgCgGgCgEIgCgDQAIAEAQgPQAMgGAEgHIAGAHQAGAHABAFIACAKQABAGADAFQACAGgEADQgHAGgCAFQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_110.setTransform(86.8382,73.8167,1.5838,1.5838);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#523F3E").s().p("AgiALIAAgDIACgBQADgCAEAAQAHABADADQgJgCgFADIgEAEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAgAACgIQAFgDAHgBQAGgBAEABQAFABAGgCIgDAGQgLgFgMAFQgIADgDAEIgDAEQgDgFAKgHg");
	this.shape_111.setTransform(81.2637,70.3107,1.5838,1.5838);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B57675").s().p("AAcANIgDgNIAAgFQABgFADgDQAFgEAFAGQACACAAAIIABAEIgDgIQAAgEgDgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIAFABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQgCAIACABQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAgBABQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgBgHQgCgHgCAEQAAABADAFQAAACgDAFIAFABIgFABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABgBgAgpAJIAKgFQAHgCAGAEQgFgCgHABIgLAFg");
	this.shape_112.setTransform(88.1137,69.4476,1.5838,1.5838);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B57675").s().p("AgIALIgEgBQgDgCABgFIAEgNIgCALQgBAEACACQAGgFAJABQAMABgEgFIgDgDQADAAADADQACABgGADQgJADgFADIgFACIAAAAg");
	this.shape_113.setTransform(81.4577,76.4942,1.5838,1.5838);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],-0.5,0.4,1,-0.1).s().p("AgEACIgEgMIgBgIIACADQAEgBADgGIADABQADADgBAEIgBAMQgBAHACABQAEABAAAFQgBAEACAHQgKgNgEgIg");
	this.shape_114.setTransform(78.888,77.0815,1.5838,1.5838);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#765652").s().p("AAoAYQgLgLgGgLQABAAABABQABAAAAAAQAAAAABAAQAAgBAAAAQgBgDgDgGQgEgHgHgCQgGgCgGACIgGADQgCgEgHAFQgIABgEAEQgIAAgEAFQgLAFgCASIgBABQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIgBgDQAAgEADgDIgCABIgFAGIgCAGIAAABIgCgFQAAgGAEgGIgDACIgEAFQgCgEABgFQABgKANgGQgFgFgGAEIACgDQACgDAEgBQgCgBgFACIACgJQAGgLAQgHIACgDQADgEAJgCQAUgGAHADQAEABABADQgCgHgDgBQAGgBACAHIAGgFQAHgEALAFQAWAJADAMIAIAPQAHAPgCAQQgFgGgJAIQgGAFAAAFIADALQADAJgCAIIgEADQgBgUgJgNg");
	this.shape_115.setTransform(83.35,64.7849,1.5838,1.5838);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#805252").s().p("AAJAOIgFgGIgBgDQAEgFgEgEIgFgFQACAHgDACQAAgEgDgEQgCgDgEgCIgDgCQADgBAEABIAAgCQATALABAIQABAJADAHg");
	this.shape_116.setTransform(86.3319,64.4902,1.5838,1.5838);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E2ACA2").s().p("AgHBLQgFgBgGgJIgVgfQgEgFgCgIIgCgKQgBgDgGgEQgCgBgBgDIAAgHIgFgUQgFgLAPgYQAFgHAMgCIAUgDQAKgCAPAIQAPAIAAAGQABAIANAZIAAgFQAAgGACgDQADgEAHgBQAHAAACAFQAHAUgEAKQgFAIgHAAQACAKgGATQgJAbgaAMQgKAEgFAAIgEAAg");
	this.shape_117.setTransform(84.9975,72.5756,1.5838,1.5838);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C03B3A").s().p("AgJBBQAEgBABgLIAEgwIADgyQAAgJgDgGIgEgFQANAAABAQIgEA0QgEAvgCAHQgCAJgGAAIgBgBg");
	this.shape_118.setTransform(64.2377,133.1562,1.5838,1.5838);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#F8D371","#F2E47A"],[0,1],-80.5,0,80.5,0).s().p("AH5AlQlRg8kggWQkfgWi8APQg6AFgqAIIgeAHIhPgSQAqgRBmgMQDOgZEzAYQEyAZFiA5QCwAdB0AZIgLAVIABAAIgKAQQhvgaipgeg");
	this.shape_119.setTransform(114.8802,194.4917,1.5838,1.5838);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#8A9FA8","#E1E2E1"],[0,1],-96.1,0,96.2,0).s().p("AH8CYQlAgZk+g0QkVgtkhhSQiQgqhYghIAAAAIghgnQBXAkEXBDQFWBQFdA1QFGAxEvAOQCXAGBWgDQgGAMgHAJIgFAHQgtADg/AAQh/AAjJgPg");
	this.shape_120.setTransform(81.4221,198.226,1.5838,1.5838);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#849FAD").s().p("AIFCXQlWgTkxgyQkVgtkhhSQiQgqhYghIAAAAIghgnQBXAkEXBDQFWBQFdA1QFGAxEvAOQCXAGBWgDIAAALQhCAGheAAQh4AAilgJg");
	this.shape_121.setTransform(81.4221,195.3315,1.5838,1.5838);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E94D4D").s().p("AJXAoQj1gqjMgWQj1gajpgIQjsgJhXAQQhKAMgjAKIgVAIIgYgGQABgEAIgFQARgLAlgJQB5gbEgAGQEhAGHFBJQDjAlCqAkIgBADIgBABQhSgRh7gWg");
	this.shape_122.setTransform(115.0386,190.7654,1.5838,1.5838);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#581211").s().p("AhFCKQg7gDhOgWIhDgVIAAgBIA8grQBCgzAigqQAhgrANgdIAGgVIB/AeQCNAlBDAfQAAAFgPAfIgMAVQgLAVAFgSQgEAAgEAEQgIAIACAWQgQAdgSAcQgNAShaAHQgsADguAAQghAAgkgBg");
	this.shape_123.setTransform(203.1793,200.6136,1.5838,1.5838);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#C03B3A","#801517"],[0,1],-102.9,0,103,0).s().p("AMhDKQjsgEm3gxQm3gxl3hsQi7g3hkgtQghgngOgXIgGgPQL9g4LSCJQFqBFDQBPQgCANggA7IghA5IgOAWQgZAHhXAAIgjAAg");
	this.shape_124.setTransform(83.6395,187.1791,1.5838,1.5838);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8A9FA8").s().p("ADGDRQhbgqhlhJQjLiSg2iaQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAABAAQAqBGBUBYQCmCuDQBWIgWABIgggBg");
	this.shape_125.setTransform(-39.9554,191.0569,1.5838,1.5838);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5A6A72").s().p("AgwAmInMgUQGfgHBQgdQAngQgrgOQBcgEDhAWQByAMBfAMQABAGgHAKQgNAVgkANQgPAFhYAAQh+AAkRgLg");
	this.shape_126.setTransform(150.2099,223.5158,1.5838,1.5838);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#8A9FA8","#FFFFFF"],[0,1],80.7,-17.9,-19,49.1).s().p("AHzDiQlFgLrYgWQj0h1iMiiQgrgygcgyIgTgnQNGgfK1B/QFbBACzBFQg3B1gsA9QgfArhPAGQgQABglAAQhTAAi5gGg");
	this.shape_127.setTransform(83.5603,193.5705,1.5838,1.5838);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FDD2BA").s().p("AgDABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAIAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCAAIgCAAg");
	this.shape_128.setTransform(39.5808,110.4704,1.5838,1.5838);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#99816E").s().p("AgcAaQAbgPAZglIAAgBIAFACQgRAcgeAZg");
	this.shape_129.setTransform(45.6675,155.8368,1.5838,1.5838);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D0B9A6").s().p("AAlAiIg2gJQgXgDgbgHIgXgHQAKgLATgMQAlgYAmAFQAoAGAXAMQALAGADAFQgHAigLAFQgDACgIAAQgJAAgQgCg");
	this.shape_130.setTransform(40.4805,155.5403,1.5838,1.5838);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#101518").s().p("Ag3AcIgOgTIAOAHQAOAIACADQADAHgNARQACgMgIgLgAgRAKQgJgGgEABIgTAAQAGgCACgEQAAgDAGABIALACQAJABAFAPgAAeglIAGgEIAOgHQAKgEAKAEIgKAEQgJAEgCADQgCADAFAGIAGAGQgagIgCgHg");
	this.shape_131.setTransform(43.2521,139.4839,1.5838,1.5838);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#974A48").s().p("AAKAQIgNgCIABgCIANACIAAACIgBAAgAgKAAIADgBIALAAIAAABgAgKgNIACgBIAAgBIAJABIAAABg");
	this.shape_132.setTransform(22.3062,147.5297,1.5838,1.5838);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-3.2,0,3.3,0).s().p("AgGAmQgGAAgBgEQgBgFgCgBQgDgBAAgEQAAgFgFgCQgFgDABgFQADgFAAgDQAAgBgEgDQgEgCABgEQAAgFAIgEIAIgEIgFgNQARgEAOAIQAIAFAEAEQANAQgCAVQgHALgNAIQgLAFgGAAIgCAAg");
	this.shape_133.setTransform(27.7969,145.9433,1.5838,1.5838);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#809BB2").s().p("AgEgDIABgFIAIAMIgCAGg");
	this.shape_134.setTransform(38.8966,120.8741,1.5838,1.5838);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#B86D66","#F9B49E"],[0,1],-2.1,0,2.2,0).s().p("AgDAVQgEgDAAgCIABgCQgJAAgBgHQgBgEADgCIADgBQgFgBgBgGQAAgDADgCIACAAQgHgBgBgFQgBgFAFgDQAGgEARAEIAAAAQAPAmAAAFQAAAGgDAGQgQgEgGgEg");
	this.shape_135.setTransform(23.0057,147.205,1.5838,1.5838);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#101518").s().p("AgmAlIAMggIACAAIgCALIgFARIgIAQQgBgGACgGgAAagDIgIgFIAJgfIACgCIAAgBQAAgFAGAAQAGAAAAAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIAAAAIACADIgJAgIgDAAIgDAAgAAYgMQAAADADAAQAEAAAAgDQAAgFgEAAQgDAAAAAFg");
	this.shape_136.setTransform(34.0185,125.2295,1.5838,1.5838);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#679B94").s().p("AgIALIAPghIADABIgOAfQgCAGAAAHQgEgFACgHg");
	this.shape_137.setTransform(26.0545,128.9911,1.5838,1.5838);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#101518").s().p("AAJAGIghgHQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCIAmAIQAHAAABgCIAEgIQgBAIgCACQgDADgFAAIgGgBg");
	this.shape_138.setTransform(31.126,125.7358,1.5838,1.5838);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CBCBCB").s().p("AgIAKIAAgDQAHADAGgKQADgFgCgEIADAAQABAFgFAHQgEAHgIAAIgBAAg");
	this.shape_139.setTransform(-48.7798,74.6685,1.5838,1.5838);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.3,0,-1.3,0.1).s().p("AgKALQgDgCACgFQABgFAFgFQADgDAFgDQAFgBAEACQACACgCAGQgBAEgFAEQgHAIgFAAQgCAAgCgCgAABgIQgDABgCADQgIAHAFADQADAEAGgHQAHgHgEgDIgCgBIgCAAg");
	this.shape_140.setTransform(-48.9001,74.5771,1.5838,1.5838);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#282521").s().p("AgNAYQgYgOgMgYIgIgVIACAAIAJAXQAOAZAXAKQAWALAYgBQAMAAAHgDQABAAAAAAQAAAAAAABQABAAgBAAQAAAAAAABQgIADgNABIgFAAQgXAAgVgMg");
	this.shape_141.setTransform(-41.3583,81.4881,1.5838,1.5838);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CBCBCB").s().p("AgIALIgBgEQAJADAFgKQAEgGgCgEIACAAQACAFgFAIQgFAIgIAAIgBAAg");
	this.shape_142.setTransform(-30.7095,85.5571,1.5838,1.5838);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0.1).s().p("AgLANQgDgDABgGQACgFAFgFQAFgFAEgCQAFgBAFACQAFAHgLALQgFAFgFACIgEABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgFgEQgDADgBADQgBADACACQAEAEAGgIQADgDABgDQABgDgBgCIgDgBQgDAAgFAFg");
	this.shape_143.setTransform(-30.8655,85.401,1.5838,1.5838);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#282521").s().p("AgLAVQgXgMgLgVIgGgUIACABIAJAVQANAVATAKQATAKAWAAQALAAAGgCIACABIAAAAQgHADgLAAIgDAAQgVAAgVgMg");
	this.shape_144.setTransform(-24.2976,92.0147,1.5838,1.5838);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CBCBCB").s().p("AgJAIIAAgBQAIAEAHgLQAEgFgCgEIACAAQACAFgGAHQgEAGgFABIgGAAIAAgCg");
	this.shape_145.setTransform(-14.6258,95.8102,1.5838,1.5838);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0).s().p("AgMAMQgDgDACgFQACgFAFgFQAFgEAFgDQAFAAAFACQACADgCAFQgDAFgFAFQgFAFgFABIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgFgEQgHAGADAFQAEAEAHgIQAIgGgEgEIgDgCQgDAAgFAFg");
	this.shape_146.setTransform(-14.7067,95.6488,1.5838,1.5838);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#282521").s().p("AAaAxQgagGgXgQQgVgOgJghIgEgfIACABIAEAcQAJAeAVARQAUARAgAGQAQADAMAAIgLABQgJAAgNgDg");
	this.shape_147.setTransform(-6.9152,105.1646,1.5838,1.5838);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CBCBCB").s().p("AgJAIIAAgBQAIADAHgKQAEgFgCgEIACAAQACAFgGAHQgEAFgFACIgGAAIAAgCg");
	this.shape_148.setTransform(3.5089,112.2818,1.5838,1.5838);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#938C8A","#565A5C"],[0.02,1],1.5,0,-1.4,0).s().p("AgMAMQgDgDACgGQACgEAFgFQAGgFAEgCQAFAAAEACQADADgCAFQgCAEgGAFQgFAGgFABIgDABQgEAAgBgCgAABgIQgDABgDADQgHAHADADQACACADgBQAEgBACgDQAIgHgEgDQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCABg");
	this.shape_149.setTransform(3.4192,112.1155,1.5838,1.5838);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#282521").s().p("AAYBNQgogFgUgjQgVgkgDgqIABgkIACAAIgBAfQADAoATAmQASAnAoAFQAVADARgGIABACQgLADgMAAIgOgBg");
	this.shape_150.setTransform(11.4966,126.2901,1.5838,1.5838);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D14F50").s().p("AADADQgBgDgEgFIgFgGIAAgBIAPANQgBAHgEAFQACgGgCgEg");
	this.shape_151.setTransform(6.5076,109.1538,1.5838,1.5838);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#AF4340").s().p("AABASQgBgBgGgHIgIgJIgBgEQALgJAAgEIAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAIAOAPQADABgBADQgBAJgGAEQgEACgDAAIgBAAg");
	this.shape_152.setTransform(5.5639,109.4263,1.5838,1.5838);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D14F50").s().p("AAEACQgBgCgEgEIgGgEIgBAAIABgCIAQALQAAAGgEAEQABgFgCgEg");
	this.shape_153.setTransform(-12.0627,92.7613,1.5838,1.5838);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#AF4340").s().p("AACAPIgOgJIgDgGQALgIgBgFIAAgBIAEABIAOAJQADACgBADQgBAHgFAEQgDADgDAAIgBAAg");
	this.shape_154.setTransform(-12.9281,93.2817,1.5838,1.5838);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D14F50").s().p("AADABIgEgEIgEgCIAAgBIALAGQAAAEgCADQABgDgCgDg");
	this.shape_155.setTransform(-46.9383,71.5382,1.5838,1.5838);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#AF4340").s().p("AgGAGIgDgDQgBgFAEgEIADgDIACAAIAJAFIACADQAAAFgCADQAAABgBABQAAAAgBABQAAAAAAAAQgBAAAAAAIgLgEg");
	this.shape_156.setTransform(-47.5055,71.8747,1.5838,1.5838);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D14F50").s().p("AAEABQgBgBgEgDIgFgDIAAgBIAAgBIANAIQAAAFgCAEQABgEgCgEg");
	this.shape_157.setTransform(-28.6465,81.9518,1.5838,1.5838);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AF4340").s().p("AgHAFIgEgEIAAgBQAHgIAAgEIADAAIALAGIACADQAAAGgDAGQgDAEgCAAIgLgIg");
	this.shape_158.setTransform(-29.2867,82.5457,1.5838,1.5838);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#938C8A","#565A5C"],[0.02,1],20.9,0,-20.8,0).s().p("AC8CYQgVgggqgsQhNhRiHhYQhEgsg0gbQgBgEAAgDIABgDQAbAIBWA5QBXA6BTBCQAzAoAuA+QAXAfANAXIgIAEQgCgHgLgQg");
	this.shape_159.setTransform(-15.1247,98.5818,1.5838,1.5838);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#938C8A").s().p("ADpEYIAAAAQgGgsgTg8Qgmh3hGhPQhEhOiThfQhJgvg7gjQAAgEADABQBWAoBhBBQDACDA0B/QAmBfARA7QAJAeABAKQgGAEgFAAIgEgBg");
	this.shape_160.setTransform(-9.0138,115.3723,1.5838,1.5838);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#808B91").s().p("AAAAOIgGgfIACACQADABACAAIAGAgQgEgBgDgDg");
	this.shape_161.setTransform(28.2851,163.1224,1.5838,1.5838);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#25292B").s().p("AgNACQgBgCAEgCQAEgDAGgBQAMgBACAGQABABgEADQgEADgGAAIgFABQgIAAgBgFg");
	this.shape_162.setTransform(29.1562,159.4683,1.5838,1.5838);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#484E52").s().p("AgEAVQgFgBgBgDIgGgiQAQAEALgIIAFAhQABADgEADQgDADgFABIgDAAIgGgBg");
	this.shape_163.setTransform(29.5967,162.6571,1.5838,1.5838);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#282521").s().p("AgHAOQgEgEgBgHQgBgGADgGQACgGAFgBIAGgCIABADQAHAEACALQAAAEgBAFIACAHIgLACIAAAAIgCAAIgBABQgDAAgEgFg");
	this.shape_164.setTransform(20.6234,136.3994,1.5838,1.5838);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#F6C55C","#D0924A"],[0,1],-2.1,0.1,0,1).s().p("AgLAXQgIgHgCgNQgCgMAGgJQAFgKAJAAQAIgCAIAIQAHAIACAMQACALgFAKQgFAJgKACIgDAAQgGAAgGgHg");
	this.shape_165.setTransform(20.5491,136.633,1.5838,1.5838);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFDBA1").s().p("AgLAXQgIgHgCgNQgCgLAGgKQAFgJAJgCQAIgBAIAIQAHAIACAMQACALgGAKQgFAKgJABIgDAAQgGAAgGgHg");
	this.shape_166.setTransform(19.8908,136.7618,1.5838,1.5838);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B86D66").s().p("AAIALQgBAAAAgFIACgGIAAAJQABABAHADIABgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIgBAJQgIgCgCgCgAgGAJQgCgBAAgGIABgEIABAIQAAACAGABIAAgDIAAAFQgFgBgBgBgAgSgHIAAgCIAFAEIAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAAAMQgEgCgCgDg");
	this.shape_167.setTransform(10.5463,137.7417,1.5838,1.5838);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#B86D66").s().p("AAEAPQACgMACgDQACgFAKgGIAKgEQgPAIgEAFQgCACgCAMIgBAMIgEAEIACgNgAgHgFQADgGAIgGIAJgFIgJAHQgIAGgCAFQgDAGgBAUQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgCABQAFgXAEgHgAgdALQAAgSADgGQACgEAHgFIAHgEIgIAGQgHAIgBAFQgCAGACANg");
	this.shape_168.setTransform(13.2332,135.8411,1.5838,1.5838);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F9B49E").s().p("AAKAWQgFgBgBgEIAAgEQgGAFgGgBQgDgBgBgCIAAgDQgEACgHABQgEABgDgEIgDgDQgCABgDgBQgEgCAAgFQAAgEAKgIQAIgIAFgBQADgBADACIADADIAGgCQAEgCACACQADAEAIAAQAEAAAGAEQAFAFADgBQAGAAAFALQABADgBACQgCADgDAAIgMAFQgJAEgEAAIgCAAg");
	this.shape_169.setTransform(14.2485,133.2988,1.5838,1.5838);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#B86D66","#F9B49E"],[0,1],3.1,0,-3,0).s().p("AAOAUIgBgEQgJAHgDgCQgCgBgBgEIgBgDQgFAEgFgBQgFgBgBgGIAAgGQgCACgFgFQgEgCABgLIABgKIAnAIQAJABALAKQgBAbgKABIgBAAQgDAAgCgEg");
	this.shape_170.setTransform(12.1648,137.2309,1.5838,1.5838);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B86D66").s().p("AACAZIgEgEQgDgDgGAAIgUgBQgEAAAEgHQAEgIAJAAQAIAAAEgEIAHgKQAFgEALgEIANgEQAEAAAAASIgHAHQgIAJgDAEQgCAFgFAEQgDACgCAAIgCAAg");
	this.shape_171.setTransform(16.1583,138.8295,1.5838,1.5838);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#101518").s().p("AgJADIgDgTQAAgFAEgEIAHABQAHAEAEAPQAEARgBAHQAAAFgGACIgDAAQgIAAgFgXg");
	this.shape_172.setTransform(30.8336,145.5743,1.5838,1.5838);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B86D66").s().p("AgCAGIgLgCIAGgEQAHgEAGgBQAHAAABAFQAAAEgDABIgGABIgHAAg");
	this.shape_173.setTransform(22.2319,142.3232,1.5838,1.5838);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#101518").s().p("AAKAHIgigHQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgBIAAAAIAmAGQAHgBACgDIADgIQAAAIgCADQgEAEgFAAIgFgBg");
	this.shape_174.setTransform(44.3113,145.3497,1.5838,1.5838);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#34465E","#101518"],[0,1],-1,0.5,-0.9,-4.1).s().p("AhEADQgBgHgGgBQgFAAACgEQABgEAYgBQAXAAABgGQACgGAKAAQARgBAIgDQAKgEAJgGQAGgFAIgBQANgBAYAYQACACgBAKQgBALgGAKQgGAJgNABQgUABgLAEIgWAJQgEACgJAAQgHABgMAFQgMAFgFAAIAAAAQgMAAgHgsg");
	this.shape_175.setTransform(40.1566,142.1736,1.5838,1.5838);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#34465E","#101518"],[0,1],-1.5,2.5,2,0.6).s().p("AgcBRQgIgCgIgQQgIgRAEgMIASglQAOgfAEgPQAJgmArAGIAIAPQAGATgHATIgOAgQgKAWgBALQgCANgLALIgQAPQgHAGgDABIgCAAIgJgCg");
	this.shape_176.setTransform(53.5725,129.6074,1.5838,1.5838);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#EBD165","#C8995C"],[0,1],-6.9,-0.7,7,1.5).s().p("AANALIgfgEQgTgBgUACIgPADQAFgEAXgKIABAAIAKgEQAOgEAYAAQAoAAAcAJQgHADgPAFIgXAGIgDAAIgMgBg");
	this.shape_177.setTransform(38.3027,92.3357,1.5838,1.5838);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFF8E7").s().p("AASAMQgSgEgVgBQgXgCgMADIgPAEQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgCAOgHIAPgHQAjgIAtAEQAXACAQAEQgbARgVAAIgJgBg");
	this.shape_178.setTransform(38.4554,92.7523,1.5838,1.5838);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0A0D0D").s().p("AAEAaIgHgBQABgHgCgSQgBgKgHgJIgHgIQAcAKAIAXQAEALgCAKIgDABIgMgCg");
	this.shape_179.setTransform(50.0362,87.7822,1.5838,1.5838);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#34465E","#101518"],[0,1],-1.4,0,4.7,0.1).s().p("Ag8ABQAQgdAfgBQAqgCAWARQAUAPgBAcQhOgBg+ADg");
	this.shape_180.setTransform(41.8701,87.3667,1.5838,1.5838);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#817B87").s().p("AgEAfQAEgJAAgPQAAgJgCgHIgBgHQACgHAAgHIACAGQADAIABAMQACAVgEAKQgDABgEADg");
	this.shape_181.setTransform(52.3155,92.5237,1.5838,1.5838);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5C5654").s().p("AgeAAIgNABIgGADIAAgCIAAgFIACADIAAgDIABACIADgCQAEgCAJABQAPABAEAJQgHgGgMAAgAAWAAQgMAAgFADIgDADQgCgDAEgDQAFgDAKgCQARgCAKAGQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAAABIABAAIgGAGQgFgHgRABg");
	this.shape_182.setTransform(40.5992,95.0182,1.5838,1.5838);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B86D66").s().p("AgBADIADgCIgCADIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAAAgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQABABAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_183.setTransform(32.7084,99.1015,1.5838,1.5838);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.4,0,1.4,0).s().p("AgFAFQgHgCgBgEIAEACQAFACAFAAQAKgBADgGQgBAGgHACIgGABIgFAAg");
	this.shape_184.setTransform(35.729,100.1964,1.5838,1.5838);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B86D66").s().p("AACADQgDAAgBgCIADAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAIgCABIgCgBgAgFAAIAFgBQADgCABABQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAIgCAAg");
	this.shape_185.setTransform(47.2117,99.7565,1.5838,1.5838);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.4,-0.2,1.4,0.2).s().p("AgGAEQgHgEAAgFIADAEQAFADAFAAQAKABAEgHQgCAHgHACIgEABQgDAAgEgCg");
	this.shape_186.setTransform(43.8065,100.4824,1.5838,1.5838);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgDAAQAAgCADgBQAEABAAACQAAADgEABQgDgBAAgDg");
	this.shape_187.setTransform(35.6498,99.3341,1.5838,1.5838);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#1B2228").s().p("AAAgCQgGAAgEACIgDADQAAgCAEgCQAFgEAFABQAKABADAHIgCABQgDgIgJABg");
	this.shape_188.setTransform(35.6894,98.4185,1.5838,1.5838);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(35.35,99.25,1.5838,1.5838,0,0,0,1.2,1.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-1.3,0,1.4,0).s().p("AAGACQgJgDgKAGIAAAAIACgFQADgFAHgBQAGgBAFAGQADADABAFQgDgDgFgCg");
	this.shape_189.setTransform(35.7686,97.5798,1.5838,1.5838);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D8DDDC").s().p("AgJAGQgEgDACgEIACgDQADgEAGAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	this.shape_190.setTransform(35.7215,99.0978,1.5838,1.5838);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADABQAEgBABADQgBADgEAAQgDAAAAgDg");
	this.shape_191.setTransform(43.4501,99.255,1.5838,1.5838);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#1B2228").s().p("AAMAFQgDgIgJABQgGAAgEACIgDADQAAgCAEgCQAFgEAFABQAKABADAIg");
	this.shape_192.setTransform(43.7273,98.4185,1.5838,1.5838);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.setTransform(43.4,99.25,1.5838,1.5838,0,0,0,1.4,1.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-1.3,0,1.4,0).s().p("AAGACQgJgDgKAGIACgFQADgFAHgBQAGgBAFAGQAEADAAAFQgDgDgFgCg");
	this.shape_193.setTransform(43.7273,97.5798,1.5838,1.5838);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D8DDDC").s().p("AgJAGQgEgDACgEIACgDQAEgEAFAAQALAAABAJQABACgDADQgEACgFAAIgBABQgFAAgEgDg");
	this.shape_194.setTransform(43.7197,99.0978,1.5838,1.5838);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],1.4,0,-1,-0.1).s().p("AgOAAQAAgWACAAIACACQADACAHABQAIABAHgFQgBALgHAGQgFADgEAMQgFAMgCAAIgBAAQgEAAAAgXg");
	this.shape_195.setTransform(35.3727,103.9676,1.5838,1.5838);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#B86D66","#F9B49E"],[0,1],-2.8,0,1,0.1).s().p("AgvAaIgJgDIgEgnIAIgFQANgEAWgBQAigBAsAJQAAALgJAKQAEAGgDANQgCACgPgCQgHgBgLACQgOADgQABIgNAAQgNAAgJgBg");
	this.shape_196.setTransform(41.1536,95.0363,1.5838,1.5838);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-2.5,0,0.3,0.4).s().p("AgEALQgSgRgEgQIAGAEQAIADAIgCQALgEAAgEIAUACQgDARgJADQgGACAAANQAAAIACAGQgIgGgHgJg");
	this.shape_197.setTransform(45.1527,104.3628,1.5838,1.5838);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B8B5B3").s().p("AgMA9QAEgfAAgLQABgHgDgKIgCgHQAIgCAEgTIABgYIAAgKIAFAGQAFAIABAQQACAZgEAIQgDABgDACQgFAGgCAMIgFAlg");
	this.shape_198.setTransform(51.0089,96.3645,1.5838,1.5838);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B86D66").s().p("AgQACQgKgCABgCIADACIAJABQASACAMgCQAGgBADgCQgCADgIABIgRABIgPgBg");
	this.shape_199.setTransform(39.6025,107.0751,1.5838,1.5838);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#B86D66","#F9B49E"],[0,1],-0.7,4.8,2.3,-1.3).s().p("AAIAIIgLgMQgDgDgEAAIgEAAIAAgHIgEgNQAKAEAEAQQAMAKAGAIQAHAJgCAIQgDgMgIgIg");
	this.shape_200.setTransform(42.337,105.1547,1.5838,1.5838);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#FDD2BA","#F9B49E"],[0,1],-0.5,0,0.6,0).s().p("AABALQgFgBgBgCIACgJQACgJABgBQADAAABAJIACAKQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgCgBg");
	this.shape_201.setTransform(38.8175,102.2895,1.5838,1.5838);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgPACQgEgBgBgCIAAgCIAWACQAMAAAHgCIgBADQAAABgMACIgIABQgIAAgHgCg");
	this.shape_202.setTransform(39.6094,107.6541,1.5838,1.5838);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DF8080").s().p("AgQAAIAAAAIACgCQAEgCAKgBQANgBAFAGQgDAEgJABIgFABQgMAAgFgGg");
	this.shape_203.setTransform(39.4906,109.0821,1.5838,1.5838);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#512A2A").s().p("AgJAHQgFAAgFgIIgDgHQAJACAXABQAFgBAIgCQgDANgIACQgEACgFAAIgMgCg");
	this.shape_204.setTransform(39.4906,108.4411,1.5838,1.5838);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#B86D66","#F9B49E"],[0,1],-1.5,0,1.5,0).s().p("AgGACIgFgCIgDgBIAAABQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAABAAQADgBADACIADACIADAAIAFAAQADgCACABQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgHAAgDACIgEABQgDAAgDgCg");
	this.shape_205.setTransform(39.06,104.4479,1.5838,1.5838);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#B86D66","#F9B49E"],[0,1],0.2,2.1,-0.4,-0.7).s().p("AgHANQABgHADgGIAHgMIAEgFIAAAHIgBAAIgEAGIgGAKIgEAMIAAgFg");
	this.shape_206.setTransform(35.6498,105.9862,1.5838,1.5838);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F9B49E").s().p("AgYBeQgNgDgHgFQgGgEgEgKQgEgHgCgeIgFg9QgDggAbgVQAagTAdAFQAYAEAPAOQAIAHACAGIADAMQABAQgCARQgDAagMA5QgBAMgOAGIgXAGIgQAFIgHAAIgNgBg");
	this.shape_207.setTransform(42.0834,98.11,1.5838,1.5838);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B8B5B3").s().p("AgEA+IgIg7QgDgWAMgWQAHgQAKgEIgKAPQgKATAAAMQgBAUADAWIACAjg");
	this.shape_208.setTransform(33.1458,95.4736,1.5838,1.5838);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B86D66").s().p("AA8AIIAAgOIADgFQADgFAEABQAGABABAEQABAEgCAEIgFAEQAFgGgBgEQgCgEgEACQgDABABAEQAAAGgBABQgEAEADADQAAABAEgEQgEALgDACIgBAAQgDAAACgLgAg9AQQgCgBgCgGIgCgFQAAABABAAQABABAAAAQAAAAABAAQAAAAAAAAQADgCgEgEQAAgBAAgHQAAgDgDgCQgEgBgCADQAAADABAFIADADQgCAAgCgFQgCgEABgDQAAgFAGgBQAGgBAEALIABAOQACALgDAAIgCgBg");
	this.shape_209.setTransform(41.8663,100.6489,1.5838,1.5838);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F9B49E").s().p("AA3AYQgDgBAEgUIADgTIAEgFQAEgFAGADQAGAEgBAOQgCALgGAJQgFAIgEACIgCABIgEgCgAg+AWQgFgEgEgJQgMgZALgHQAJgGAEANQAJAmgEACIgCABQgCAAgEgDg");
	this.shape_210.setTransform(41.8679,100.8917,1.5838,1.5838);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D0924A").s().p("AAOAAQAGgJgZgOIACgJIAKABQANABAIAFQAOAIgEAIQgCAFgFACQACgCAAgDQAAgHgKgFIAFAIQAEAKgJAGQgJAGgTAKIgSAIIgOAEQAsgZAHgIg");
	this.shape_211.setTransform(48.8283,111.7275,1.5838,1.5838);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#101518").s().p("AgFALIALggIACAAIgCALIgFAQQgDAJgFAHQAAgFACgGg");
	this.shape_212.setTransform(43.8065,131.6836,1.5838,1.5838);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#385169").s().p("AgIAMIAPgiIADABIgNAfQgDAGAAAHQgEgFACgGg");
	this.shape_213.setTransform(41.0433,131.2481,1.5838,1.5838);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#101518").s().p("AAJAGIgSgFIgPgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIAmAIQAHAAACgDIAEgHQgBAHgCADQgEADgFAAIgFgBg");
	this.shape_214.setTransform(46.1723,128.0104,1.5838,1.5838);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B86D66").s().p("AgigDIgGgNIBRgHQgCAJgRAMQgLAHgQAKIgPAJQgHgLgHgQg");
	this.shape_215.setTransform(42.4602,114.1428,1.5838,1.5838);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D0924A").s().p("AAGAHQgDgHgDgDQgFgEgCABQgCABAEAFIAEAFQgTgGAFgKQABgFAEgBIADgBIAHAAQAGABACADQADAFAGAcQgHgFgEgHg");
	this.shape_216.setTransform(35.542,113.3509,1.5838,1.5838);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F6C55C").s().p("AgxAVQgzgUAtgMIBWgbIAUACQAUAEAEAIQAFAMgFALQABABgBAEQgEAGgPAFIhQAYQgMgNgNgFg");
	this.shape_217.setTransform(43.205,111.8463,1.5838,1.5838);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#161B1C").s().p("AACAAQADgFAHgIQAHgJABABIAAAAIAHAEQAHAFABAIQACASgbACIgsAGQAigOACgIg");
	this.shape_218.setTransform(52.0532,112.1235,1.5838,1.5838);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#34465E","#101518"],[0,1],-10,0,10.1,0).s().p("AgqAhQgRgBgFgHQgEgEgSgFQgPgEABgFQABgHALgHQAKgHAIgBICAgRIANABQANACADAFQACADAAAFQgBAEADACQAKAHAAAHIAAAJQgBAFgEACQgFACgmAEIhQAHIgHAAIgIAAg");
	this.shape_219.setTransform(43.9618,112.8164,1.5838,1.5838);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#99816E").s().p("AgYAeQgZgCgegHIgagFIAugVQAwgXAIgBQAFgBAaAGQAaAHAIAAQAQABAcgBIhAAqQgTAGgZAAIgWgBg");
	this.shape_220.setTransform(20.2472,153.0993,1.5838,1.5838);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F6C55C").s().p("AgXBtQAHg4ALg2QAFgjAKgnIAIghIAGgBIgJAkIgOBFQgHApgKBJg");
	this.shape_221.setTransform(36.3625,135.2472,1.5838,1.5838);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#101518").s().p("AAXBsIgUgDQALgXgBgNQgBgIgKgFQgGgDgRgDIgmgFIAGgYQABgGAIgEIAUgHQAbgJAGgYQADgIgIgJQgKgMgCgMQgDgPABgMIACgKQAFAWAMAOQAGAHAFACQAUACALAfQAKAagBAdQgCA3gKAUQgEAHgPAAIgGAAg");
	this.shape_222.setTransform(49.9909,137.4428,1.5838,1.5838);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#487773","#34465E","#101518"],[0,0.459,1],-7.9,1.3,3.9,-5.3).s().p("AAmCAQg0gEgogFQhMgKADgVIAEgtQAFgpAOgWQAagsAOgwQACgIAHgBQANgBAJgEQAWgJCBAOIAGAGQAGALgDAYQgCARABAgQAAAhgDAhQgIBegQACIgGAAQgPAAgogDg");
	this.shape_223.setTransform(39.7778,133.5341,1.5838,1.5838);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#679B94").s().p("AgxA0QA1hKAFgKQAIgQAGgDQACgBAMAAQAMAAABACQABADgEACIgLgBQgLAAgBADQgQAagWAbQgOASgRAZg");
	this.shape_224.setTransform(22.5596,122.4843,1.5838,1.5838);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#101518").s().p("AADBDQgFAAAIgkQgJAAgSgGIgRgFIAOgFQAQgFAEABQAHACgEgbIAFAIQAGAJABAIIAGgQQACgFAHgKQADgEgCgJQgCgJAFgOIAGgKIAAASQgBALAEASQgcBWgIAAIAAAAg");
	this.shape_225.setTransform(20.7619,128.5558,1.5838,1.5838);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#101518").s().p("AgRAZQgPgHgEgPIgBgNQADgQAYgEQAVgDAPAHQATAIgMAkQgDALgPACIgHABQgLAAgOgHg");
	this.shape_226.setTransform(14.2798,138.5654,1.5838,1.5838);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#34465E","#101518"],[0,1],-7.2,0,7.2,0).s().p("AgwBdQgGgBgGgJQgIgKgDgOQgCgKAOgLQARgOADgHQAEgIAjguQAiguACgHQACgIAQAAQAHAAAHABQAKAGgOAhIgaA2QgIAQgFAhQgGAigCAFQgGALgLADIgLABQgOAAgXgGg");
	this.shape_227.setTransform(19.904,129.907,1.5838,1.5838);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#600E10").s().p("AgQBCQgEgCAJiCIAZACIABAAIgDANQgCAOAFAGQAFAIgDAQQgDAOgGAHQgEAGABAYIADAXIgIAAQgMAAgEgBg");
	this.shape_228.setTransform(59.829,132.8794,1.5838,1.5838);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#C03B3A","#801517"],[0,1],0.1,-5.1,0,4.8).s().p("AgbBAIAJiCIAlAEIAFAEQAEAFAAAIQAAANgIBbQgCAIgIAAg");
	this.shape_229.setTransform(60.9909,132.8715,1.5838,1.5838);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111416").s().p("AgIBFIAKiKIAHABIgKCKg");
	this.shape_230.setTransform(59.2487,151.4417,1.5838,1.5838);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#171A1C").s().p("AgMgKIABgCIAYAUIAAAGg");
	this.shape_231.setTransform(73.9782,68.9249,1.5838,1.5838);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#9E6565").s().p("AAMAbQgDgEgDABQgDADgDABQgFADgKgDIgIgDIgCgGQgCgHABgCQABgDAZgcIAbgeIAAAnQgCAXgCAMQgEAUgEAJQACgSgFgHg");
	this.shape_232.setTransform(88.8344,81.635,1.5838,1.5838);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E2ACA2").s().p("AgfA6IgbgCQAYgMgCgIIgFgYIAyhFIAJA+QACAWAUAIQAJAEAJgBQgTAIgaAIQgNAEgWAAIgJAAg");
	this.shape_233.setTransform(91.3606,81.8858,1.5838,1.5838);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#AF6F3D").s().p("AgYAcQgXgFgIgGIgPgMIAWgIQAZgKAPAAQAMAAAGAHQAHAFACgBQAJgBAagbIgCANQgGANgQAFQgRAHAIAGQAGAGAPgBQARAAAMgFQgDADgGAEQgNAHgXACIgRABQgQAAgRgDg");
	this.shape_234.setTransform(97.6958,135.036,1.5838,1.5838);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#AF6F3D").s().p("AgZCNQAJhpAChJQAAgegEgQQANgPAFgNQAGgNADgVIABARQABATgCALQgJAeAJATQAFANACAiQACAlgFAfQgEAbAIAcQAFAOAFAJQgNACgKAAQgRAAgMgFg");
	this.shape_235.setTransform(83.2831,119.1654,1.5838,1.5838);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#FEC97C","#F4AC5A"],[0,1],9.1,1.6,-4,-4).s().p("AhiCnQgCgCAGgeQAHgsgBguQgChNgXhlQgBgGADgEQADgFAGgBQAIAAALgDIAzgIQA2gIAXgBQAPgBAFADQAGAEADAQQABAKADBPQADBMADAQQAHAiAWA/QADAKgUAJQgVAJgoAFQgkAGgwAAQgsAAgFgDg");
	this.shape_236.setTransform(95.3278,114.9567,1.5838,1.5838);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#F1CCBF","#E2ACA2"],[0,1],1.2,-0.1,0.2,-1.5).s().p("AglAAQgFgIADgFQACgEAMgJQAOgKALAFIAOATQAHAJAVAPIgWAVQgygXgHgKg");
	this.shape_237.setTransform(113.9992,117.3191,1.5838,1.5838);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#9E6565","#E2ACA2"],[0,1],-1.3,-0.3,1.2,0.5).s().p("AgIAhQgEgCgHgVIgGgUIAIgLQALgMAQAAIAPAqQACAEgDAFQgCAFgFAEQgFADgHACIgIACIgFgBg");
	this.shape_238.setTransform(110.0804,111.4617,1.5838,1.5838);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#171A1C").s().p("AgSANQgCgEADgFIAEgEIAAAAIAGgHQAJgJASABQABAMgLAFIgTAMIgGACQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_239.setTransform(110.1035,108.554,1.5838,1.5838);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#39322A").s().p("AAzAPQgNgGgwAGQgUADgUgDIgQgCIgBAAIgFgXQCIgTAGAIQAGAIgEAmg");
	this.shape_240.setTransform(91.2497,142.2262,1.5838,1.5838);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#39322A").s().p("AABBBIgQiBIAFAEIAEAiIAIgJQAGgGAFgTIADAAIgHATQgGALgJAHIAKBYg");
	this.shape_241.setTransform(85.1441,152.4316,1.5838,1.5838);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#171A1C").s().p("AgPAKIACgRIAEgFQAEgFADgBIAIgGIgFATQgBAGAQAGQACAAgeASIgBAAQgDAAABgPg");
	this.shape_242.setTransform(108.6792,103.1601,1.5838,1.5838);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["#6B665F","#C1986A"],[0,1],-7.2,0,7.3,0).s().p("AAWBlQgcgCgZgHQgIgCAFgJQAGgKgIgDQgIgDABgFQACgHgEgEQgFgFAAgJQAAgRgDgOIgThZIBIgOQBGgIACAZQABAcgCBCQgCA8gDAUQgBAKgZAAIgSgBg");
	this.shape_243.setTransform(91.1279,153.4983,1.5838,1.5838);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#39322A").s().p("AAABlQhFhxgMgeQgHgVASgOQAPgLAogMQgGAQgTALQgMAGAMAOQAGAHAIAFQA3gBgMAFIgUALQgOAFgNgCQgOgDAPASQAJALAeAgQAUAUAdAJQAOADALAAQgkAZgUAGQgMACgKABg");
	this.shape_244.setTransform(112.1319,153.6591,1.5838,1.5838);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#171A1C","#786F8B"],[0,0.988],-1.6,-0.4,2,0).s().p("AgYBGQgFAAAEhGIAFhFIAKAEQAKAGACAIQACAGAGAZQAFAYAEAJIAHAQQADAEgDADQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQABACgEAEQgGAHgSAJQgRAIgGAAIgBAAg");
	this.shape_245.setTransform(108.8796,99.5342,1.5838,1.5838);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#58666E").s().p("ACVAyQAAgLgFgMQgKgagYgLQgYgMhUgMQhAgJglgCQgSgBgSADIgPADIABgCQAEgDAUgDQApgEBdAPQAwAJAWAFQAiAIAPAKQAOAIAGAYQADAMAAALg");
	this.shape_246.setTransform(144.0621,133.2664,1.5838,1.5838);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#6B665F","#C1986A"],[0,1],-10.9,0,11,0).s().p("Ahpg0QgOgPArgUQArgVAZAJIBjBuQAMAPgCADIAFABQAFAAgCAFQgBAHgLAOQgMAOgIAFQgHAEgkAMIgiALQhXiGgSgUg");
	this.shape_247.setTransform(113.8184,152.2343,1.5838,1.5838);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#222528").s().p("ACoCzQABg9ANheQANhYgBgPQgCgjghgQQgpgThigMQhkgLgMASQgUAhhTC9IgUgCQAXg6Abg6QA1h2ASgGQAWgHBKAGQBNAGAzAOQA3APAQALQASAMgDAWIgRB1QgOBpgBA0g");
	this.shape_248.setTransform(135.1483,153.2418,1.5838,1.5838);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#58666E").s().p("AgyAFQgBAAAAAAQAAgBABAAQAAgBABAAQABgBABgBQAHgDAEgBQAHgCANACQASACAyACIAAADQg+gEgNAAQgIAAgJACIgHADIgCAAIgBAAg");
	this.shape_249.setTransform(71.8499,122.933,1.5838,1.5838);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#9E6565").s().p("AgvgEIA0gfIARATQASAUADAHQAEALABAHIhSAHg");
	this.shape_250.setTransform(128.5407,164.7062,1.5838,1.5838);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#222528").s().p("AgaB0IBhjJQAHgQgDgFQgDgGgRABQgQABhegHQgSgBgPAGIgLAHIAEgRQARgJAlAEQA6AGAYgBQAsgBAMAIQAFADgDAEQgVAfgxBqIgtBkg");
	this.shape_251.setTransform(78.5759,142.2176,1.5838,1.5838);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("ABiCbIgTkiQAdAFAhAKIAVETgAiRCFIgQiOIAbhCQAghDAegMIApEfgAAKB+IgfkUQAhgEAcALIAAENg");
	this.shape_252.setTransform(134.678,150.4518,1.5838,1.5838);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#5D686E").s().p("AgWAjIAphHIAEABIgoBIg");
	this.shape_253.setTransform(150.0806,164.7854,1.5838,1.5838);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgVB1IgLixIAGghQAOgfAsAKIgKDng");
	this.shape_254.setTransform(66.7322,141.7284,1.5838,1.5838);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#222528").s().p("Ah8AnIAshgIDFAmIAIBNg");
	this.shape_255.setTransform(135.2719,162.2909,1.5838,1.5838);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#222528").s().p("AgmAmQgQgQAAgWQAAgWAQgPQAQgQAWAAQAXAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgXAAQgWAAgQgQgAghgfQgNANAAASQAAATAOAOQANANATAAQATAAAOgNQAOgOAAgTQAAgMgIgNQgHgLgNgFQgIABgFARIgCARIgEgBQADgLAAgMQAAgJgEgGQgTABgNANg");
	this.shape_256.setTransform(139.5482,157.6978,1.5838,1.5838);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3B3042").s().p("AgmAlIAOhEIAFgHQAHgHAKABQAPACAYAHIACAPQAAAXgMAqg");
	this.shape_257.setTransform(231.37,185.6423,1.5838,1.5838);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#161319").s().p("Ai0ABIAehTIAJgIQALgIAPACIEhA+IAEADQAEAGgBAMQgCATgUBbg");
	this.shape_258.setTransform(208.6184,183.7974,1.5838,1.5838);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["#00263A","#3C7792"],[0,0.969],-0.6,-0.4,0.4,0.3).s().p("AgcAMQAKgHALgFIAqgRQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgPAGQgSAIgJAFQgRAKAAADIgLACIAHgGg");
	this.shape_259.setTransform(-50.0347,142.3744,1.5838,1.5838);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#060707").s().p("ABVAAQAAgFAFAAQAFAAAAAFQAAAGgFAAQgFAAAAgGgAheAAQAAgEAFAAQAFAAAAAEQAAAGgFAAQgFAAAAgGg");
	this.shape_260.setTransform(-57.0826,156.114,1.5838,1.5838);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#00263A","#3C7792","#141116"],[0,0.969,1],5.6,0,-5.5,0).s().p("AgRABQAqgTAfgCIgCAKQgGAKgRAFQgRAGgRACIgaADIgaAFQAQgKAWgKg");
	this.shape_261.setTransform(-66.8627,148.7096,1.5838,1.5838);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#00263A","#3C7792","#141116"],[0,0.969,1],13.2,0,-13.1,0).s().p("AB9AdQABgLgDgMQgGgXgTgGQhXgDgyAGQgzAHgpAOQAAgCAGgGQAWgLA4gEQCCgLAWAKQAOAGAGALQAFAKACAZg");
	this.shape_262.setTransform(-57.5578,154.6282,1.5838,1.5838);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["#00263A","#141116"],[0,1],14,0,-14,0).s().p("Ah4AuQgFgCgFgEQgLgJACgNQACgOA3gWQA1gWAYgBQAOAAAqgDQAogBAWALQAWAKAEAgQADAQgDAOQgBAHgFABg");
	this.shape_263.setTransform(-56.2066,151.9943,1.5838,1.5838);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#00263A","#141116"],[0,1],-0.6,-0.5,0.6,0.4).s().p("AglAPQAFgHAXgLQAQgIAQgFQAJgEADAAQACAAACAEQADAHgLAAQgIgBgEAHQgCADgIADQgJAFAAAKQgUADgJAAQgNAAAFgGg");
	this.shape_264.setTransform(-49.7844,142.6477,1.5838,1.5838);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#00263A","#141116"],[0,1],2.5,-5.9,1.2,0.8).s().p("ABTBGQgWgcgxgFQhHgHgSgIQgdgMAFgkQAFgiAdgVIAcgOIAMADIgRAGQgTAJgOAUQgTAcAIAYQAIAbAsgCQAwgCAtAXQAuAXAAAbIgJAFQAAgMgLgOg");
	this.shape_265.setTransform(-63.5149,143.0079,1.5838,1.5838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.instance_3},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.instance_2},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_1},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.instance},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-79.9,55.8,326.6,175.5), null);


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
	this.shape_10.setTransform(-87.5573,98.0801,0.1353,0.1353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ABA08B").s().p("AgxAVQgrhSgoiGQAmAnBHBUQBDBPAtAsQANANAXAMQAOAPgKAoQgEALgEAYQgGAVgTAJQhUg5g9h2g");
	this.shape_11.setTransform(-84.9002,96.5862,0.1353,0.1353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#988C79").s().p("AAaCRQhhgGgvAEQgEgOgTgxQgOgngHgdQgHg4AdgoQAagkAxgPQAvgOAyAJQA0AKAlAhQAHAvANBBQAPBNAJAdQgxAYhRAAIgJAAg");
	this.shape_12.setTransform(-89.5197,92.8854,0.1353,0.1353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2A791").s().p("AgrDZQhqhlhFihQgRgogOg8IgYhgQAPgwB0gCQBsgCAsAeQAUA+AzBfQA0BfAqAyQARAVAhAaQAgAYAJAMQAdAohNBNQg0A1g8AAQhGAAhPhLg");
	this.shape_13.setTransform(-87.4274,98.0968,0.1353,0.1353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3935").s().p("AisFmQgPhEgDgvQgQj2A0jRQBMk1DHA8QBWAagPA/QgFASgSAjQgSAjgEAPQhCEIA4FwIgYASQhhghg1AVQgwATg9BUIgahyg");
	this.shape_14.setTransform(-89.7354,86.653,0.1353,0.1353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3733").s().p("AhwETQg/jWgGjcQgHjhA2jVQAhgdBKCDQAqBMAjBUQBODAAmEXQAqE9g7CWIAAAAQiqh3hbjRg");
	this.shape_15.setTransform(-85.1701,90.1974,0.1353,0.1353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3733").s().p("AggBHQgTgxgGhWQgFghABgTQABgkAaABQAVAAAeCKQAiCVAMARQhBgFgehNg");
	this.shape_16.setTransform(-16.0362,79.1505,0.1353,0.1353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7E1CE").s().p("AAACuQhCgBgohOQgcg3AFhaQAHhnA5gVQAkBKA2BZQBFBvAkAfQhSAsgvAAIgBgBg");
	this.shape_17.setTransform(-19.0185,94.8084,0.1353,0.1353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#877C6B").s().p("AhmABQgYhHgPg8IDZAAQAMAuA2CVIjDBCIgxiCg");
	this.shape_18.setTransform(-23.0182,88.9011,0.1353,0.1353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B4A892").s().p("AhWCeQhziohej7QgKgWAYgXQAVgUAogNQAngMAhACQAlACAMAUQAOAmAbA9QAZA3AVArQhOFqDdhQIA1AXQAMAKAhANQAmAPAMAHQAwAehCA5QgyArg2AAQhxAAiCjAg");
	this.shape_19.setTransform(-19.7461,94.2214,0.1353,0.1353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A99D88").s().p("AiSA1Qhijvgok6QAGABATgCQAQgBADACQABABAFAdQAFAeAKALQBFBVAWBOIATBNQAOA1ATAyQBrEdB5g4QAhgPAghGQAbg7AnACQAIBLgfDJQgiDfgpACQjNiKh+k3g");
	this.shape_20.setTransform(-18.1316,90.0674,0.1353,0.1353);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D3833").s().p("AgOLpQgogBgfgMQghgOgHgXQhLk1gOlfQgRmwBljTQA+iBBtgGQBugGBCB8Qi8DFgNGxQgKFLBWFnQgKAyhcAAIgEAAg");
	this.shape_21.setTransform(-23.231,77.7282,0.1353,0.1353);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C3733").s().p("AAUKyQguhVgjhnQgMglgchfQgehqgCgSQgCgQAGgbIAKgpQAFgtg4gIIg3BXQgLBUghhUQgok7ARjNQAYksCNi3QAdAABnC6QBOCLAoBZQACA9gMAHQgJAFgXgbQgegmgRgSQgegggXgCQhvgKgdDVQgIA8gFBwQgEBkgFAbICNjEIB3hXQACBsACAbQAGBjARAXQAGAIAoAJQArAKAPALQAoAdANCtQAPDDATAoQAHAwgngTQgmgTgMgmQgLgmAFgrQAFgoATgmQghgFgcAgQgnAqgKAFQgHAEgSgIQgRgHgBADQgTAfBZBHIBCAzQAhAaADAKQALAggqBcQgpBcgbAIQgHACgGAAQg1AAhDh2g");
	this.shape_22.setTransform(-18.3316,80.636,0.1353,0.1353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F0E0D").s().p("AAOM1QiIhGiEk0Qh0kMgTjBQgJhZADh3QADiTAXh7QA9lOCsgWQDOgbCqGOQA/CTAsCxQAmCYAIBiQAHBmgHB+QgJCmgiB5QhDD3iUAAQg3AAhCgig");
	this.shape_23.setTransform(-87.5901,91.0521,0.1353,0.1353);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D0C0B").s().p("AA3R0QiQhkiTlAQh2j/g7jyQhEkXgDldQgDmQBgjYQBJikB0gFQBkgFBxBuQBmBjBKCUQBJCTADBrIgngIIAHALIAFALQAHgOAUAAQBvD1A/FbQBAFegUEMQgSD7hUClQhMCWhtAAQhAAAhLg0gAiBAEQA1CDAGAEQAHAEgqh6IATgRQgSgNgBgTgAhvn1QgLCZAbEdQAJgQATgVQgSiBAPiZQATjDBCg6QBYhMBSBIQALAKAJALQhcighdiZQhwCugTEAg");
	this.shape_24.setTransform(-20.2189,83.2299,0.1353,0.1353);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A262A").s().p("AFtDJQgkgIhGgbQhJgcghgJIpNlRQBnAcB4A8QA9AeCVBWQCEBLBQAkQB4A3BrAWQAEAZgdAAQgKAAgkgIg");
	this.shape_25.setTransform(23.8229,7.2124,0.1353,0.1353);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1F29").s().p("AEGBUQiNgKiZgXQjLghhKglQg9gggLglQBZAOEjBHQDrA5CUAJQAAAZgyACIhGgGg");
	this.shape_26.setTransform(17.1715,7.0805,0.1353,0.1353);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#332E2B").s().p("Ah9A4QgegeAogfQAjgdBDgOQBDgPArANQAzAPgMAvQgcAAh4AaQhVATgVAAQgFAAgCgBg");
	this.shape_27.setTransform(76.938,55.9359,0.1353,0.1353);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8C7B64").s().p("ACID/QgmgRgPgPQgjgkAShxIgsCYQgTiBhGiHQgyhghkiMQBeguA+BRQALAOAnBAQAdAyAZAXQAPAOAxAcQAzAfARAOQA/AziBAYIBtDaIhSglg");
	this.shape_28.setTransform(-38.5371,46.8297,0.1353,0.1353);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36211A").s().p("AgIBLIgWhWQARgxAFgRQAHAdAdBMQAMAyghAAQgHAAgIgDg");
	this.shape_29.setTransform(-39.8835,-30.025,0.1353,0.1353);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#351616").s().p("AgTgCQg2gwgLgkQA/ACBAA+QBEBBgrAtQgWgjhBg3g");
	this.shape_30.setTransform(-39.4568,-25.7574,0.1353,0.1353);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#913326").s().p("ABSBCIg+hQQhHhRh8AJQAEgPAPgLIAZgSQASgEAkgKQAggJAXABQCCBHAWBnIgHAHQgGAHAEAIQAHANAjAjQAaAhgaAcQgogigpg1g");
	this.shape_31.setTransform(-40.2897,-24.875,0.1353,0.1353);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#71675A").s().p("AA4BaIghglQgngogggjQg7hDAJgIQAkgfBaBoQAiAnAWAlQAWAngJAIQgFAGgIAAQgMAAgQgPg");
	this.shape_32.setTransform(87.2154,45.0069,0.1353,0.1353);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A2724").s().p("AglCNQgzg+gqheQg5h8A7gLIAsBCIgKhCQALAAAWAMQAWAMAJAAQAEAAANgnQAPggAWAZQAMAPgWAnQgXApgfgHQgFAVAYAEQATADAPgHQALgFANgZIAZgxQAlg/A4AMQAKAKgTBkQgOBJgOAzQggB2gQAUQgNARgRAAQggAAgtg3g");
	this.shape_33.setTransform(33.2388,42.1826,0.1353,0.1353);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2D2A26").s().p("ABXFcQg0gUhLgvQhVg0gagjQgXgfhAisQhCiwAKgLQAVgaAQAbQAIAOAJAcQAUAgBECKQA4BzAgAoQAjAtASAGQAPAFgBgYQgDg7g2g6IAjAAQATgBAMgNQAmgpAhioQAjiwAMgRQAQgXA8AAIBYADQARAPhWDFQhhDcgDATQgHAnADBGQADBLgEAeIgEAeQgDAHgIAAQgHAAgLgFg");
	this.shape_34.setTransform(34.3209,44.2915,0.1353,0.1353);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#554F46").s().p("AhLhVQACgOAZAAQAWAAANAIQAJAFAoBRQAqBTgCAWg");
	this.shape_35.setTransform(52.04,39.3838,0.1353,0.1353);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#413D3B").s().p("AhHghQBGgRCPgNIjoB/QhvhCCCgfg");
	this.shape_36.setTransform(48.4929,38.9406,0.1353,0.1353);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#403B37").s().p("AiXA6QgPgwBvhBQAsgbAogNQAqgOAOAIQAHAEAhBEQAiBFgGAIQhkAmg/ANQggAGgaAAQhEAAgPgvg");
	this.shape_37.setTransform(49.8207,40.0848,0.1353,0.1353);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A19682").s().p("AgKNzQjKhziDmMQg2ihgciuQgbijADh9QAGjcBFi+QBfkECsgKQDtgOCqGxQA/CgAqDBQAkCjAGBzQAHB7gMCOQgQCzgqCAQhRDxidAAQhHAAhVgxg");
	this.shape_38.setTransform(-87.7188,90.9679,0.1353,0.1353);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#756A5E").s().p("AgJAtQg7hngSgPQAHgDgCgpQgBgkAcAPQAeAPArBDQAwBKAUARQgCAUABAmQgEAhgbARQgKAAg2hig");
	this.shape_39.setTransform(-5.141,58.8781,0.1353,0.1353);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4B453E").s().p("AhPgJQgLmeB8j9IAvBiQhPD+ADE6QADD9A7E+IghAyIgWBCQhTl2gIk4g");
	this.shape_40.setTransform(-26.289,77.9664,0.1353,0.1353);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AB9F8B").s().p("AhaR9QiJiJhwkMQhXjTg4j4QgJg7AfgGIAyATQBVEVBCCZQBoDwCGCRQBpByBigiQBUgeBAiCQA5h0ATiSQASiRgehSQAajkg9kNQgoithwk3QAPgTABgZQABgSgIgdQgQhYhCh8QhGiFhUhbQhkhqhYgMQhogNhJB5Ig1AJQgnAjARhPQCGkPC/BZQCSBFCPD8QBjCvBOD6QBMD0AoELQBYJSh0F7QhEDeiDA3QglAQgnAAQhuAAh8h8g");
	this.shape_41.setTransform(-19.5868,83.2652,0.1353,0.1353);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#443D37").s().p("AhWhXICtCDIgaASQgZATgOAHg");
	this.shape_42.setTransform(-78.7234,71.7616,0.1353,0.1353);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#25170E").s().p("AgFArQgVgGgLgWQgKgTADgTQAEgTARgCQATgCAcAZQACAHAIAOQAKAPACAHQgHAHgKAHQgMAJgNAAQgEAAgFgCg");
	this.shape_43.setTransform(9.3097,-57.9694,0.1353,0.1353);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#303630").s().p("ABCBOQgWgPg3g/Qgzg7gjgRQAkgdBDBIQAkAlA4BIQgCAEgFADQgDACgEAAQgHAAgLgHg");
	this.shape_44.setTransform(7.421,-60.4728,0.1353,0.1353);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E211A").s().p("Ag5gGQiihsgfgbQBDAEBGAkQAsAYBLA2QBRA5AlAUQBDAmA8AGIiDAsQgxhAiAhUg");
	this.shape_45.setTransform(1.5104,-57.2284,0.1353,0.1353);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D231D").s().p("ACODaQg6iRg9hJQglgtiViBIgLgLIgLgLIAhgsIFSFdQgDAVACAsQACAtgCAVIgCABQgHAAgigXg");
	this.shape_46.setTransform(-17.1042,-60.6242,0.1353,0.1353);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7E0E6").s().p("AgrDfIArnKQAlgFAGAMQACAFgCArQgEBDgPB0IgYC7QgEAegJAMQgEAGgGAAQgJAAgLgPg");
	this.shape_47.setTransform(-3.9484,-47.3911,0.1353,0.1353);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#76664E").s().p("ACnBJQhAgPgagBQjMgFhbAGIAAAAQAGgNAlgJIBMgPQBngYgEhFQBDACBAAUQBYAcAAAvQAAAwgsAAIgIAAg");
	this.shape_48.setTransform(-40.8919,57.0874,0.1353,0.1353);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B2825").s().p("AlBDHQgpgBADgZQBIgeBng8QA8gjB7hMQDniNCCgdQgeBDAEA2QABASAZBlQgvgBg/APQhIAVgkAIQgnAKimAwQiCAmhGAMQgkAGgTAAIgDAAg");
	this.shape_49.setTransform(34.3097,-18.0467,0.1353,0.1353);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#171410").s().p("ABaBbQglgXgTgJQgmgSgzghQg4gmgdgTQACgCgCgQQgCgRADgHIAggCID5CjQgPAYgVAAQgIAAgIgDg");
	this.shape_50.setTransform(-40.7615,68.8919,0.1353,0.1353);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DACFB5").s().p("AhkC6IgegVQhPhyA/hgQAVgfAxgxQA7g6ARgWQAngNA+ApQA9AoANApQgwARggApQgWAdgaA4QgeBEgOAWQgcAwgnAYQgUgMgQgLg");
	this.shape_51.setTransform(-42.6728,71.0042,0.1353,0.1353);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1B1817").s().p("AAHAiQgzgEgIgPQgEgZgLgWQAKABAXgCQAXgBAJACQA7AOAKAbQAJAZgyAAIgTAAg");
	this.shape_52.setTransform(11.7465,74.5736,0.1353,0.1353);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7EABC5").s().p("AhMhLQALAIBDApQBBAoAIATQAGANgMAOQgNAMgCAFg");
	this.shape_53.setTransform(-66.7414,41.7656,0.1353,0.1353);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E7BA3").s().p("AETFDQmUhNjlgTQgMgBgOgHIgTgKQgPgEAEAuQhXgwhegsQgUgJghgHQgpgJgKgDQg2gSgKg7QALABAVAAIAhgBQAQgMhggkQg4gUg9gSICvAWQAEgDgPgbQgPgcAEgHQAEgEBxgxQBxgxAIgLQACgDgLgTQgLgSABAAQAzAABjgiQAugRCPg6QD8hnBFASQAlAKBjCRICDC/QAzA9DLCyQCnCVBGBxQi9gUmvhSg");
	this.shape_54.setTransform(21.1604,6.0126,0.1353,0.1353);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#181614").s().p("ABzCZQgagKgngqQgKgKg+hJQhkhzg7gKQgOhCBCAaQALAEAmAjIBLBFQBmBZAbgbQAYgXg7hBIgvgxQgYgagDgKQBcAnAtA/QA3BLgnBUQgMAYgIAJQgKALgMAAQgFAAgGgCg");
	this.shape_55.setTransform(-9.774,54.3053,0.1353,0.1353);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1B1916").s().p("AADBiQgzgbgrgxQgtgzgFgrIDZBWQAGghgcgXQgjgVgQgNQgagTgGgIQgNgPAqACQApAOAnAtIA+BHQgCBNgqAUQgOAGgQAAQgcAAglgTg");
	this.shape_56.setTransform(-14.7427,55.9093,0.1353,0.1353);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1B1815").s().p("AgFAGIgLgQIAKgKIgDAEQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIAIAKIAIAJQAKACgEgLIgEgKIgFgGIAQAMIAAADIgBANQgCAEgIAGQgGgFgGgKg");
	this.shape_57.setTransform(-11.183,61.0979,1.0999,1.0999);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#474038").s().p("ABfCMQgggLgOgJQgNgHhVgoQg8gbgmgjQgMg8BEgwQABhAAfgYIDNExQAHAMgIAXQgJAbAAAEQgNgfgcgPg");
	this.shape_58.setTransform(-8.4619,63.3406,0.1353,0.1353);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#534C43").s().p("AEcEQQg0ghhTiAIgugWQg4g9hohKQiAhcguAJQgFABgFAMQgGAOgIAGQgcAXhdgiQgIgPgGgbQgHgbgBgSQANAGAnAlQAbAZAjgGQBhgnAEgEQAGgIgDgzQgDgsAZgDQDFDbA5h8IAdgIIAAAAICXCIQBnBhASAyQAFAQgHANIgIAPIgaAQQABCFgwAAQgNAAgRgKg");
	this.shape_59.setTransform(-14.5132,58.7395,0.1353,0.1353);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0E100C").s().p("AhXAOQAggmA8ABQA/ABATAug");
	this.shape_60.setTransform(75.5361,58.4314,0.1353,0.1353);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0B0A0A").s().p("AhuBJQgOgSgDgkQgEglgDgEQgGgMgngQQgkgPgGgXQADAAALgMQAOgLAVAEQATAEAnAeQAjAbASgCQALgBAegRQAfgSAUgDQBLgLA6AVQBNAbgaBGIgWAAQgFASgnAXQgnAWgzANQgwANgjAAQg8AAgagkg");
	this.shape_61.setTransform(76.1728,55.8237,0.1353,0.1353);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#201111").s().p("AjPEyIBbhUQAvgtAmguQAfgoAmg7IBAhoIBpjpQg1E2h5CUQgrA1hBAvQhKA1gyAAIgIAAg");
	this.shape_62.setTransform(-27.7479,-25.4608,0.1353,0.1353);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D779D").s().p("AgTAQQovi6oLhbQARgWCIhHQCChEAsgOQAuAtBjA3QBnA5A5AJQArAHA+gVQBDgYAkACQBGADGODFQEpCRDHBuIDUB1QCZBXAjAoIhYAsQoNj5n9isg");
	this.shape_63.setTransform(5.0561,13.8436,0.1353,0.1353);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#402226").s().p("AgKAUQgpgSgOghQAugGAhAPQAkAQAQAnIgMABQgiAAgegOg");
	this.shape_64.setTransform(14.0691,-27.0999,0.1353,0.1353);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#271713").s().p("AhQD2IAghfQAoh/AShhQAUhpAJiBQAYAEAJAVQAEANAGAcQARBrgnC7QgsDUhLAmQgJAFgFAAQgWAAAPg+g");
	this.shape_65.setTransform(7.049,-32.2321,0.1353,0.1353);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0E0C0B").s().p("ABEE8QhHgXgfhVQgahogYgyQgUgsgig6Ig7hlQg8hlgbgzQB1g6A3AVQAYAJAjAdIBKBAICCBoQBMA9A1AvQgPBAAJBgQALB5AAANQgDA6gqANQgNAEgTAAQgzAAhZgdg");
	this.shape_66.setTransform(-38.5201,46.8996,0.1353,0.1353);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D49749").s().p("AiWB/IAuhTQA4hkgIhPIAWgWQAeAjgSBJQgKAogYBFQAiALAPgjIAQg+QAdgMgHg1QACgJgCgXQgCgYACgKIAWALQAOAGAHAFQAEAwALBAQAOBRAOANQAGAFAoAAQAiALgOA9QhdhAhkAZQhUAVhcBTQAKgmAagwgAB5gsQgRhQgIgLQgCgCgIACQgJACgDgCQgCgjAHgWQAKgkAdAcQAKAJARBlQAOBZADAoQgagMgPhHg");
	this.shape_67.setTransform(-40.4261,-29.8275,0.1353,0.1353);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#211A1B").s().p("AjvDxQAVglAehzQAdhtAggzQARgaAagUQAjgbAGgHQAPAGAFANIACgpQAVgSAVghQAYgcAugQQBHgYAHANQACADAAAPQgBAOAFAJQAOBPAiCfQAZCLgIBmQgkgFg2goQg1gogqgEQg9gGghAQQgWAKgvAvQAZAbhFARQgPABgVAIIgfAMIgGABQgVAAAHgsgAAZAtQBxBFhHj3IAUgSQgbgBgQAtQAPBDglgCQAIA8gFAbgAg4AYQARgyAJg2QgXBEgDAkg");
	this.shape_68.setTransform(-40.5987,-29.611,0.1353,0.1353);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#89857F").s().p("AjDAIIgBAAQBPgcCNgJQCzgLgHBGIkEAAIhIACIgBAAQgrAAgPgYg");
	this.shape_69.setTransform(-20.804,-15.2251,0.1353,0.1353);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3A3B38").s().p("AgtBkQgEgEgJhMQgIhLACgGQAFgYAsgLQApgKAOALQAHAGAMBaQALBcgHAHQgLgCgyADIgdABQgRAAgBgCg");
	this.shape_70.setTransform(-36.43,-5.8324,0.1353,0.1353);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5C5549").s().p("AhhBBIAAiCIDDAAQgCBag1AbQgdAOhDAAIgsgBg");
	this.shape_71.setTransform(-18.5895,-11.2685,0.1353,0.1353);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#737169").s().p("AjeCjQgggeA0hKQAwhFBZhCQBehFBPgRQBbgUAkA+QhTAKhGAzQgwAjhFBPQgPARgRAfQgQAdgJAKQgXAag4AAQgXAAgcgFg");
	this.shape_72.setTransform(-34.3318,-11.4169,0.1353,0.1353);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3D3832").s().p("AhBDEQgGgIAChBIAEhxQgCg6gOAAQgSABgqBaIhMiNIBXggIhCgWQABgPAPgNQALgJARgHQBegHAlAdIAAAAIDvA3QgUAWggAQQgVAKgoANQgeAKglADQgjAEgIADQghANgGBmQgBAcAUA6QAHAjgfAAQgHAAgJgCg");
	this.shape_73.setTransform(-21.3908,-12.4587,0.1353,0.1353);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5F5A53").s().p("ApEEOQgDgMgEg0QgEgrgPgeQgNgagbgbQgdgdgFgJQgZgoBIhPQA4g+C/hGQC8hFBSAIQB4ALA9BRQAXAeAaA3IAwBlQg+AOgkgNQgdgJgUghQgVgrgOgXQgYgqghgZQgHAwAYA3QAOAgAiA8QgUgFgrANQgsANgLgCQgUgFgthcQgshdgYgCQgugDAzBmIAnBKQASAmgHAGQgTgGg/ARQg8ARgJgHQgSgvgSgpQgkhRgngEQgDAsAhBDQAjBHAmALIQdh/QgBAIACARQAAAOgOAGQh6AzjAAOQjWAHhnANQoTBFghARQgJAFgDAPIgDAaQgDAXgXAAQgHAAgKgCg");
	this.shape_74.setTransform(-25.3575,-9.9059,0.1353,0.1353);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D24F36").s().p("AlSHdQiCgbiPApIgrgLQAPgxBGgsQBRg0AHgJQANgTAqhiIA4iFQAcgeBBgJQA7gJAWgmIATAHQAGgWAcAGQAdAFAGAZQAngVAmgCQgSgGgQgOQAMhbBvgHQBngHBRA6QAuhTg7gxQgRioAGhvQAXAqATAAQAPAAAUgcIApg5QAbgiAegLQAtBVB9CiQBlCVgJCAIhtjaQgLAjAUBTQAVBVgHAYQgDAMghAFQgjAEgIAMQgKAOABAnQACAogIAMQgQAeixB6QjSCRgRAOQg+AvgeAeQg3A1AFAtQiThRhogVgAAGgIQBQASBJByIAlgEQgahqh/hEQgCApgjAFg");
	this.shape_75.setTransform(-41.188,-26.2006,0.1353,0.1353);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1F1614").s().p("AhlB/QgEg1gDgJQAYhtArg+QA3hRBfgJQhjBOgpBSQgwBdAPB1IgIALQgHAKgGACQgMgVgEgxg");
	this.shape_76.setTransform(-38.2394,-10.6816,0.1353,0.1353);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D1717").s().p("AiLAPQArg3ArgWQAWgMA4gOQA0gOAggEQAngFAUABQAqACgDAYImdDEQAxhLASgWg");
	this.shape_77.setTransform(-49.9103,-16.9214,0.1353,0.1353);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1D100F").s().p("AjNBMQAigmAqglQBfhSBPglQBogvBnAPIABAAIjLBcQgwAWhhBcQhWBShEARQgPgPA7hAg");
	this.shape_78.setTransform(-43.4296,-12.7813,0.1353,0.1353);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DD7759").s().p("AhKgiQCdhqA7AEQAaACAQAWQAIAKAFALIgsArQAHABAPAAQAPgBAHABQAMACAggFQAYABgDAXIjrAlIkgB+QAahBChhqg");
	this.shape_79.setTransform(-47.9904,-15.054,0.1353,0.1353);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#413D2A").s().p("AgVBXIAVjZQAaA8gGBGQgDArgRBYg");
	this.shape_80.setTransform(52.781,8.8195,0.1353,0.1353);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0D0B0C").s().p("AjLE6QgagIgPgTIgXgdQBeAXA7gGQBIgIBFg0QAZgTAWgjQAZgoAJgJQABgBAVAEQAUAEAHgMQAegvARikQAPiUgHhOIAAAAQA0A3AEA4QACAfgUBnQgqDQhhBuQhYBih3AAQgzAAg4gRg");
	this.shape_81.setTransform(-41.1072,92.5006,0.1353,0.1353);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7C9280").s().p("AA7BKQgXgIgpgYQgsgZgWgIIAAgVQgRgvAggLQAfgLAoAZQAXAbAPAeQAJASAQAtIgTALg");
	this.shape_82.setTransform(19.7724,19.928,0.1353,0.1353);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BB8F38").s().p("AmThjQAngbBMANQAqAGBPAXQB3AbCoA5IEcBhIgWAVQl3iBmahYg");
	this.shape_83.setTransform(-2.9216,12.8289,0.1353,0.1353);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0B0A0A").s().p("AKHDnQk/h8ifg/Iprj2QlUh/kzg/IgrgWQgDgPAKgEIAOgDQFbAZG3DCIAAAAQFsB+FICCQG2CvDgB8IBTAxQBEAug1AEQjAhekYhwg");
	this.shape_84.setTransform(6.7667,17.3859,0.1353,0.1353);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D59E42").s().p("ATwJEQiNgMjog/QjIg2ilg/QhGhEAag/Ig5AIQlmjYkciTQlli4k9h1QhgAhg4ABQg4AAhegeQhEgVhCgvQhUg8AQgwQBEgXCWAfQAZAGDLA1QHBB1HkDKQGnCvHUD2IAAAAQA6AeDFBlQC0BeA1AoQBAAwgxAVQgcAMgvAAQgSAAgVgCg");
	this.shape_85.setTransform(13.459,15.6765,0.1353,0.1353);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0B0A0A").s().p("AgIAXQhAgGgjgGQAUg0A3AUIAsAVQAaAMAPAAQAKgBAKgRQALgWAFgEIATA0IgTANQgbgEhGgGg");
	this.shape_86.setTransform(-50.0707,78.4097,0.1353,0.1353);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7DAAC6").s().p("AgZgNQk0kyASgTIDbCkQDHDKAfAjQB9CPA6CFQgOgalIlGg");
	this.shape_87.setTransform(39.0304,16.9461,0.1353,0.1353);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0E1011").s().p("AK5HvQgegNhPhCQhdhOgVgOQhqhIiThfIj/ijIlFjWQjFiAiFhJQgogeABgQQACgRAwgQQJfBZJWBtIBdA4IAAgBQALABAhgBQAYAogDADQgCABgugFQiPgRlqhJQlDhBi2gOQhLgGgOABQhBABgJAZITbMnIATAhQAHARgNAAQgIAAgPgGg");
	this.shape_88.setTransform(24.8828,15.1224,0.1353,0.1353);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#10090A").s().p("AmoDEQgDglADgDQAEgDAcAAQDaghBFgRQCGgjCFhRQAegSBjhRQBNhAA6gUQiRDCjoBpQjMBejYAAIg1gBg");
	this.shape_89.setTransform(-16.8176,-1.2191,0.1353,0.1353);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D2E36").s().p("ADECDQgIgHgWgOIgjgXQgEgCgSgYQgSgXgSgMQgwghimheQiHhOhIg8QAgARBNAlQBHAiAmAVIDABnQB+BGA0AsQAfAaAfAyIAvBNQhNgZhMhUg");
	this.shape_90.setTransform(-70.448,38.9609,0.1353,0.1353);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#131A1F").s().p("AgQANQiDjVhGhpIG0JjQhzhth4i4g");
	this.shape_91.setTransform(-61.8782,47.5273,0.1353,0.1353);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111718").s().p("AEODLIgwgZQkGiHiehiQg3gdgagVQgugmAZgnQAHAAAygQQArgNAJAHQACACADAnQAGArARAUQAdAjC/BsQDuCHAPAKQgFATgRAAQgIAAgKgEg");
	this.shape_92.setTransform(-53.0699,55.6182,0.1353,0.1353);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#82AFC8").s().p("AIEF0QnfiehFgVIgbAQIlYjpQAOgYAngBQAJAAA3AGQBQAIChAUQCNAPBkgCQAdgCgogfQibhymHh5Qm0h6idg2QgcgFgNgEQgXgHAEgUQBHAJCDAEQCSAEA3AFQDAARBQAJQCtATBaAUQCcAiGDEnQCjB7CEB2QCJB7AzBGQAqA7AXAyQgJAGgZAAQhmAAlrhvg");
	this.shape_93.setTransform(-66.7566,37.5287,0.1353,0.1353);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1B2C35").s().p("AhJB7QghglAQgzQARg0A7hBQBGhNApAfQgYAagQAqQgKAZgQAxQgCAGgXAkQgRAdgBAQIABAAQgSAlgTAAQgMAAgNgPg");
	this.shape_94.setTransform(-45.1593,11.5919,0.1353,0.1353);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0F181B").s().p("AkRDDQA6iVCmhvQCXhnCqgcQAGAjgMAHQgVAEgRAHIh3AvQhBAZg1AoIiHCFQhiBfgZAAQgEAAgCgCg");
	this.shape_95.setTransform(-43.9856,8.242,0.1353,0.1353);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#070C0F").s().p("ACZBnQgXgIgogjQgsglgXgLIiDguQhPgdgegrIArgBQAcgBAQACIAAAAQBXAHBkBCQAhAVCABlQgIAIgKAGQgJAFgMAAQgLAAgPgFg");
	this.shape_96.setTransform(-32.6232,9.0857,0.1353,0.1353);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0B0F10").s().p("AjqGEQhChngsg9QgKgOgzg1Qg5g7gdgkQhoh/Atg8QATgaASAbQAJAOAKAaQCjDZBKBcQAJAMAFAWQAHAQAjgJQgQhKg/j1Qg0jHgTh5QBehqCygtQCigqCYAaIAAAAQA0AZgIASQgpgMhcAGQhbAFhhAUQjxAzgZBMQgGAWA8DHQA7DFARAOQARAOByAxQBtAwAhAIQBAAQAwAGQA6AHA5gGQAEASgZAMQgSAHgVACQhgAKiEg2IjVhoQAGAlgGBBQgJBZgBASQgCB6BiAeQB3AmCCgZQCRgcBBhfQAagmAti1QAeh6AYh7QARhaAHhAQAJhUgFhIQAbAFAJAYQAEALAEAjQAJBMgxENQgvEHghBQQgkBWhlA2QhZAxhmAHQgeADhjgMQhLgJguATQgUgqhPh5g");
	this.shape_97.setTransform(-33.1439,24.4115,0.1353,0.1353);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1C1915").s().p("AAVCzQgDgCgQgeQgUgogjhoQgjhmgIguQgFgdARgGQAPgFAMAMQAJAJAeB3QAcBxAfAUIALhYQAsALADBKQACBJgnARQgSAHgLAAQgIAAgEgDg");
	this.shape_98.setTransform(99.0765,50.7776,0.1353,0.1353);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#141210").s().p("Ag6BCQgFgNghiUQASAFAwBiQAtBfAIgDQAWgJAFgaQAEgXgMgYIgeizQAIANASAQIASAPQAhBSAHBQQAKBwhDAFIgGAAQg6AAghhgg");
	this.shape_99.setTransform(90.4481,52.0828,0.1353,0.1353);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1B1915").s().p("AgeCgQgDgQABgqQABgqgDgTQgHgpgYhKQgZhQgHgjQA6AuAbBoQAPA/AIBxQBBgxgUhqQgGgcgSg9QgRg4gEgaQAgAQAXA1QAVAwAIA/QAIA+gKAwQgKA1gcAQQgiAUgVAAQgZAAgFgeg");
	this.shape_100.setTransform(92.2345,59.8535,0.1353,0.1353);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#13100D").s().p("AguB0QgSgtgWhVQgXhXgGgQQAhAVAeA2IArBaQAJAUATBAQAUAqAZg6QAUgsgqhvQg1h9gRgpQAiAdAqBJQAnBDAPAxQAPAxgBAeQAAAogZAhQggApgcAAQgpAAgkhag");
	this.shape_101.setTransform(95.1354,50.6042,0.1353,0.1353);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#171512").s().p("AgrCvQgri7gYjXQA2A3AbB3QANA4APCMQBWgLgIhPQgCgXgOgvQgOgygCgVQgHggABgQQAAgdAZADQAEA1AkB/QAWBzgyA3QglAogiAAIAAAAQgkAAgMg1g");
	this.shape_102.setTransform(97.1295,58.5973,0.1353,0.1353);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#27231F").s().p("AgPBmIg5hYQhChsAThXQAPgRA0AbQA0AaAvAyQA1A5ARA5QAUBGgnA4QgFAHgZAOQgcAQgHAHQgPgkghgzg");
	this.shape_103.setTransform(87.2097,45.5662,0.1353,0.1353);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2C2823").s().p("ACkDCQg4gWg3gsQgJgIhRhMQhzhoh5gRQgzhFBXAAQAPgBA/AFQAuAEAPgFIhYgtQABgFALgIIAKgHQBhAHAiArQAmAxg8BMQA1gIBHAxIA3AoQAfAVATAGQA6ARgpg7Qg1hAADgCQBcAVAnBAQArBFguBSQgRAGgTAAQgfAAgmgPg");
	this.shape_104.setTransform(81.3125,39.7169,0.1353,0.1353);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0B0B0A").s().p("AkmADQAthoAZgzIABAAQgJAigOBCQgPA5gcAmQAMAJENg7QEbhAA5AGQAcADALAJQAPAMgVAUQgLALlQBBQlXBFgzAdQAog5Aqhdg");
	this.shape_105.setTransform(46.3623,63.1918,0.1353,0.1353);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0C0C0B").s().p("AjBFMQgEhWgNg9IBDqEQAtAABLgMQA9gKAaADQAoAGAZAiQAcAnAVBYQAPBAALCAQANCMgMArQgHAeitCqQi/C8gVAbIgGiTg");
	this.shape_106.setTransform(57.977,42.8163,0.1353,0.1353);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0B0B0A").s().p("AFkHHQg0gLkChoQkGhrghgaQg5gthFiZQhCiSgFhQQgFhLAOglQATgxA/gVQBeggDcgUQD2gWAqArIDJNjQgbAPgLAEQgIADgMAAQgOAAgUgEg");
	this.shape_107.setTransform(35.7807,45.1591,0.1353,0.1353);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0F0E0D").s().p("AkdLLQAahtATg7QAJgdARgHQAhgNAHgFQBmgBC/guQDgg2BIgIIAAuqIjjA/IpahVQgUAUBiGlQBxHiADAcIAGAwQgBAdgYgDQhdmOgtjGQhOlfgZj9QCCgPElgxQERgtCXgQQARgBAsgHQAmgCAOAaIABAAQgiDgAGFsIAHEoQADCsgFB6QAAANACAuQACApgGAHQgIAJh5ARIiYAUIArAWQAEAUgFALQgFANgQAKQgdATiqAXQilAXgoAgQgHAFgxBnIg/CGIAqirg");
	this.shape_108.setTransform(47.7595,49.1406,0.1353,0.1353);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5C544B").s().p("AEwJnQhZAAgPgjQgJg4gegnQg1hFh9g8QhSgoitg7QjAhChJgfQiKg7hFhBQhdhWgxiMQg0iYAqhwIArBBIAwAbQAeBvAlBSQAvBlA/BFQE3CZFnBvIAYACQAQABAEgQQAZhkhUlOQg4jfgHgfQgeiHgBhFQAGgSAbAMIAhARIAAAAQAuA2ATBTIJZBQQCShJBSA0IAUAEIADOYIgXAOQhfA8iVAKQg+AyhvAUQgmAHgeAAQhHAAghglg");
	this.shape_109.setTransform(41.2839,47.4892,0.1353,0.1353);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#151312").s().p("AAKCpQAEgagFgSQgsi1gQhWQgFgdASgGQAPgFAMALIAAABQAPAQAZCSQAYCKAAAwQgMACgJAAQgUAAgCgLg");
	this.shape_110.setTransform(-67.3272,79.1079,0.1353,0.1353);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#71675C").s().p("AivBPQgFgBgYg5QgYg3gDgTQAOgNCxgIQCtgIAnAIQAbAFAUATQAWAWgPATQgIAKi+AoQiwAmgZAAIgCAAg");
	this.shape_111.setTransform(-72.3302,77.8072,0.1353,0.1353);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1E1C1A").s().p("AinBgQhXgMgFg3QgBgTAHgnQAJgyACgVQApgKANApQADAIAEAYQADARAEAEQARAPCcgRQCzgTAbACQARACAagDQAQADgFAfQgLBIiwAXQhIAKhBAAQg2AAgwgHg");
	this.shape_112.setTransform(-71.291,81.1069,0.1353,0.1353);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#22201D").s().p("AkHBXQgtgYgHglQgCgJAKgKIAKgJQALgIAWgFQAbgGAGgDQgUgqAXgOQAWgMAoAZQBrglBtAAQASAADKAPQAFAKAlAYQAUAahEAfQgfAPi8ArQi4ArgpACIgLAAQglAAgjgSg");
	this.shape_113.setTransform(-75.2767,73.2831,0.1353,0.1353);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0E0D0B").s().p("ABgPMQiLgXh3iOQigjBhflPQhbk+ARkLQANjFBHi7QBej2CRgeQB9gaBhA6QBKAsBZB1QBiCBBHDcQBFDWAaDvQAbD5gdDRQgfDjhbCFQhXCAiAAAQgWAAgYgDg");
	this.shape_114.setTransform(-87.746,91.1258,0.1353,0.1353);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#12100E").s().p("AgOBPQgFgNgghoQgPgigEgTQgHghAbgNQAIASANASIAWAeQACACAEAnQAJAgAcgeQACgCgEgwQgEgoAbADQgBAqAPBQQAIBIggAuQgIANgKAAQgUAAgXg7g");
	this.shape_115.setTransform(2.6505,66.5324,0.1353,0.1353);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#110F0F").s().p("Ag2BvQgIgcgGg7QgGhEgEgWQAbAJATBZIAUBhQAzA4gPiDQgOh+gagtQgKgRgegNQgXgKABgSQBPgaAzCyQASA/AGBAQAHA9gJAIQgYAGgTAAQhBAAgUhEg");
	this.shape_116.setTransform(-4.9569,75.3302,0.1353,0.1353);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#141210").s().p("Ag2AZQgtixgJhXQAUgDAIAXQAEANAFAcQAwCOAXCRQBQgJgOhgQgEgcgQg1QgQg1gDgQQgHgfgBgPQAAgcAZADQAGAqAXBOQAZBSAGAjQAXCHheBVIAAAAQghAAg2jXg");
	this.shape_117.setTransform(-0.1201,74.7121,0.1353,0.1353);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#181614").s().p("AAeCbQgTgZg6h8QgyhngygoQACgEgCgQQgCgRACgHQAigFAfAbIAAAAIAwgCQA4CHBGgYQABgHAHgHQAGgGAIgCQApBZgIAoQgCAKgMAiQgNAigGAhQgjAOgLAAIgBAAQgPAAgWgbg");
	this.shape_118.setTransform(-5.2086,60.0367,0.1353,0.1353);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1D1A16").s().p("AAUD6QgWgFgviKQgghfgUhMQgRgkgCgKQgCgPAsAFQANAmAgBSQAeBMAMArQBogPgkhvQgKgjgfg8QghhBgFgSQgLgegBgMQgCgbAZADQAHAuAwBVQAvBUAHAuIAAAAQAKBGgVBRQgXBbgyAAQgHAAgHgCg");
	this.shape_119.setTransform(-2.3015,65.7155,0.1353,0.1353);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1E1B18").s().p("AATDCQgIgEgZgfQgZgegGgMQgVgngUhNQgVhLgDgwQAWAHAQAqQARAwATAOQAUAOAQAEQARAEAYgDQAHgvgYg3Qggg9gPggQAfglAfAdQAcAbgEAuQABAHgBAPQgBAPABAHQACAMAVBMQATBGAFAoQAKBZgxAAQgVAAgfgPg");
	this.shape_120.setTransform(-7.4689,67.5169,0.1353,0.1353);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#585046").s().p("AFGEYQhLANg5iCIgrAIQgcARglAEQgGAKgPANIgXAVQgig1hfhvQgZgchyhhQhrhcgHgLQgGgLAHgqQAGgngRgRQAVADAhgNIAhgMQBsAPBDAdQBAAvAlAsQA/BHgcApQhCATAJAQQAIAOBBAJQCXBSAOAKQBNA3AqBdQAFAZgDAEQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgGAAgPgIg");
	this.shape_121.setTransform(-8.3698,55.5691,0.1353,0.1353);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#100E0D").s().p("AAPTYQiahth9jxQhujWhOkoQhFkJgfkXQgckIAOjCQAPjQBDi8QBdkCCSgdQDVgrC8EUQB2CsBnElQB7FdAuFhQA0GKg2FHQgtELhxCHQhQBehkAAQhYAAhnhIg");
	this.shape_122.setTransform(-20.2166,83.3023,0.1353,0.1353);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#756A5D").s().p("ADaI8QhTjmh7jbQh5jZiZjCQgVgbhfhXQhQhJgWgrQAbgUBIAQQAjgZAWgKQAigRAZADQANACAyAfQA3AhAxAnQCIBrgmAlQA9AoBBBNQBNBbgHA2QAogWBVArQBWAqgOAuQAgAXAZAuQAZAtAFArQAFAugUAVQgYAYg1gRQALAUgEATQgFARgTASQAYBuhEAQQgSAEgkgCQgdgBgEAEQgCACAEAwQADAlgXAAIgEAAg");
	this.shape_123.setTransform(-13.1143,64.3095,0.1353,0.1353);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#766B5F").s().p("AiNAPQAngSA5gSQAigLBBgRQASAEAogIQAegBAAAmQAAAZgkASQghASgzAGQgZADgXAAQhQAAgjgng");
	this.shape_124.setTransform(-88.0308,65.3507,0.1353,0.1353);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#443D37").s().p("AgMDEQAFhugDgTQgCgPgWgqQgUgjgBgnQAAgQAKheQAKheADgMQAEgNAigHQApgHAJgIQgaCFgQC5QgRDYAPBhQgbgoADhQg");
	this.shape_125.setTransform(-98.9825,83.4321,0.1353,0.1353);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#584F46").s().p("AlbKTQgKhMgKgiQgFgRgRgLQgQgIgBgBQgBgEABgHIAAgLQgUi5gEhsQgFikAXiBIAyguQAJguAThCQAVhIAQgjQBIidCYh1QCniCCfAQQArAEBIAgQBZAngiAdQidgVifBbQigBcg5CRQgJAXgBAqQgBApgBADIgRgHQgSgHgJAFQhiAygZGaQgKCdAFCfQAFCUAOBCQg4gcgQhBg");
	this.shape_126.setTransform(-93.3094,81.0916,0.1353,0.1353);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#73685B").s().p("AHLJVQgDgEgYhYQgYhfgLgZQiBkjiIifQiljDj+hqQgKgEgJgSQgHgRgHgBQiLghinBVQifBShNB/Ig2hXQA/hVASgGQAIgCAWgDQAagGAlgSQAJgEBGhRQBGhPAwgWIAAAAQBGggA2AKIAoALQAWAGARAAQALgBB6goQBqgkARARQgmBUBNA7QAqAhByAqQBHAaBZAaQBxAiAsACQAyADBMgRQBtgZAMgCQBDgKAxARQA8AVAwBCQAOATACAbIAEAfIgoApQizgeiqAqIgwgfQg0AAgNAsQABAugUAFQgTAGgcgjQgRhMhGgoQgdgQgSAHQgTAIADAlQABAQA5BWQBBBiAJARQBXCwAeBJQBDCngNBaQgEAegIAKQgEAGgGAAQgJAAgMgNg");
	this.shape_127.setTransform(-84.0419,74.3318,0.1353,0.1353);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#82796D").s().p("AA1geIhAAAQgrgBgWABQASgZA0AAIBSADQgCATADAqQAAAlgYAKg");
	this.shape_128.setTransform(-23.5933,-46.3141,0.1353,0.1353);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333D36").s().p("AB4ggIAAAWQgYACheAQQhXAQgiAJg");
	this.shape_129.setTransform(-7.3571,-64.3231,0.1353,0.1353);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5A5D63").s().p("AgfCuIAqlcQAtBOgzDRIgIApQgIAVgQAAIgEgBg");
	this.shape_130.setTransform(5.3512,-48.8001,0.1353,0.1353);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8D9283").s().p("AgeAbQgZguAPhZQADgIAGgCIANgBIBADvQhGhSgGgLg");
	this.shape_131.setTransform(-21.4327,-47.4779,0.1353,0.1353);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D9A853").s().p("AgJA1QgRgNhzhdQAZgHAIgTIALgoIDvDvQhEgJhTg6g");
	this.shape_132.setTransform(-15.3348,-55.1646,0.1353,0.1353);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E1BE57").s().p("AAwBVQg8gmgagUQhkhKgOheIExEFIgWAWQgagVg5gkg");
	this.shape_133.setTransform(2.8401,-62.2559,0.1353,0.1353);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#354A56").s().p("AhKBBQgOgBhIgfQg7gZgpAOQgGgQANgWQAPgVAAgFIAAgWQBXBiCZgSQArgFBXgPQBPgMA0AGQAAALihAhQiTAfgaAAIgDAAg");
	this.shape_134.setTransform(-10.4689,-54.724,0.1353,0.1353);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D5B988").s().p("AAKBUQgygrgOgeQgUhMgHglQgNgZgDgHQgDgJAjACQA4BNBrB3IgWBXQgHgKg7gwg");
	this.shape_135.setTransform(-21.8328,-52.8,0.1353,0.1353);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4E423C").s().p("AD3AZQgvgWgYgDQg4gHiWALQinAPg1ADQgGgSgWgDIglAAIHTgsQAzAHAqAUQAyAXAVAlIgCAAQgcAAgngTg");
	this.shape_136.setTransform(1.2127,-51.7709,0.1353,0.1353);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A57B37").s().p("AA2B4QhBgigcgeQgNgOgCgRQABgNgBgBQgRgUgog9Qgmg4gOgPIAsgWQAwBDBXBnQBhBxAzAsQgtgKhBgig");
	this.shape_137.setTransform(-16.8099,-42.4537,0.1353,0.1353);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#395E71").s().p("AhFCBQgGgOghhTQAMgNAHgEIgBgCQgHgTgDgSQgJg6AtAGIASg9QANgpgKgcQAGAFBHAsQA4AjATAkQhRAUgiAhQgsApAHBNQADAXAUAhQATAiABAKIAAAXQgpgagcg1g");
	this.shape_138.setTransform(-13.7074,-58.1148,0.1353,0.1353);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#76A1AF").s().p("ABBA8Iitg8QhKgbgVgPQgpgcgRg8QBbAjCsBVQCtBXBXAhIgWAVQhCgjhtgkg");
	this.shape_139.setTransform(-11.9346,-62.4048,0.1353,0.1353);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6B8CAC").s().p("AghDQIgVgLIAsmeQAKgCAWACQAWABALgBQgGBFgGCbQgMCJgpBLIgXgLg");
	this.shape_140.setTransform(-5.2865,-47.6318,0.1353,0.1353);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#498BAE").s().p("AgWACQgUAcAnAlIA5A3QgDANgYAAQgbgDgKABIivkbQAPgUB9BgQBlBNAqAqQAQASAiAoQAoAwgDADg");
	this.shape_141.setTransform(-0.8496,-61.5383,0.1353,0.1353);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#324F55").s().p("AA2BTQiXgXgWgFIhtgWQAbgBA8ACQA5ABAfgCIAIgdQhPhfAggXQAfgYBWBUQDLDSitjRIALgLIALgLICYDEQg6gVh1gRg");
	this.shape_142.setTransform(-0.2658,-60.1932,0.1353,0.1353);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#347091").s().p("ABLCgQgFgFgxgkQgugigegiQgrhHgPgsQgZhFASg3QAogCBSBwQAsA7A9BeQAIAMACAZQABAZABACQASApgQAHIgGACQgPAAgZgdg");
	this.shape_143.setTransform(-20.0494,-46.5498,0.1353,0.1353);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#AAC0CB").s().p("AAXAlQiShzhYhVIgigaQgSgPgOgYQAkgBArAPQAZAJAxAUQA/BCBRAfIAIAiQAmA4BKA9QAqAjBWBCQALAUgCAOIgJAfIj1jAg");
	this.shape_144.setTransform(-13.7941,-61.6643,0.1353,0.1353);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D1BF90").s().p("AgmBEQirh5g0hXQgqhIAggbQAZAUB+CGQBcBgBJAhQBmBDB1BWQAHAGAOAPIhBAWQilhqhdhCg");
	this.shape_145.setTransform(-18.1655,-42.897,0.1353,0.1353);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5A5253").s().p("AhBDWQgEgNgGgGQAriUAAj0QAPAAAjgQQAhgJAPAYQAVBdgYCAQgbCThDAlQgSAJgJAAQgEAAgDgCg");
	this.shape_146.setTransform(3.2769,-48.1978,0.1353,0.1353);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#94A8AE").s().p("ADoCzQichahshEQiDhQiAhYQgPgeAagDQAVgDAhAOIAAAAQBKA6CeBjQBYA2CgBeQAHAEANALQAMAIALgBQAFAWgWABQgfgDgRABg");
	this.shape_147.setTransform(-11.2313,-37.6431,0.1353,0.1353);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F6E499").s().p("AiDgbQA/gpA3gKQBkgTC6BdQguAZhTAAQh6AAgQACQgvAGhZAYQhaAXg0AHQBZhNA0ghg");
	this.shape_148.setTransform(-12.3812,-67.3584,0.1353,0.1353);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#846651").s().p("AkpAqIAljTQBYgLChgXQCKgQBwAEQBFgOgDAjQhbAHiWATQiyAWg+AGQgfAVgWCuQgLBWgGAcQgLAzgQAAQgugBAWixg");
	this.shape_149.setTransform(-6.3082,-48.8363,0.1353,0.1353);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#485B71").s().p("An1AVQAggbA5AGQBWAJAHgBQAxgFB1gcQBrgbA4gDQBXgGCfAaQCnAbBPgDQADAXgdABQglgEgNABQhUADi9gEQiwgFhgAGQgiACg8APQhRAUgTADQgkAHgfAAQhKAAgvgkg");
	this.shape_150.setTransform(-6.0249,-53.0798,0.1353,0.1353);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E2BA55").s().p("ADmDCQg9gXibiOQiiiUhFgjIgNgNQgLgKgUABIAAgWQDQBABeA0QCoBbAtCLQAKAdgCALQgCALgMAAQgHAAgLgFg");
	this.shape_151.setTransform(-0.4123,-65.9217,0.1353,0.1353);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D4A13E").s().p("AhfAXQgvhugNh+QAYgMAGAEQBrBRBTBnQByCLgdBNQgXgPgng1QgkgwghgPQAaBGACASQAEAZgKA+QhUhOg0h6g");
	this.shape_152.setTransform(-17.2165,-60.1006,0.1353,0.1353);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2E648C").s().p("AgvAYQjtkjgridQA1gIApArQApAqgEA2QALAOAVAnQAVAmANASQBNBlBhB3QA6BHB9CTQAzA8AOAVQAoA6gEAhQiwidjHj1g");
	this.shape_153.setTransform(-18.1404,-46.8933,0.1353,0.1353);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#DDC96A").s().p("ADsERQghgpg5ghQg7ghgwgCQghAKgGgPQgHgOAYgZQgBgEADgZQACgVgIgLQgDgEgWgJIgjgNQhYhehtg6IgWAAIgzhLQghgvAIgfQBAA2EgDSQDbCfB0B6IhtAAg");
	this.shape_154.setTransform(9.4042,-59.891,0.1353,0.1353);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EAC65A").s().p("ACkCvQg5gThYgvQhcgxgugQQgzgYgpg7QgbgngihKQAFgEAHgKQAHgIAOgBQA2gCC3CQQDCCXA7ANIANACQALAFgCAPIhCAWQgGgCgQACIgLABIgKgBg");
	this.shape_155.setTransform(4.4637,-59.1527,0.1353,0.1353);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D79F39").s().p("AA5BsQiNgphPgzQgPgKgvgzQgvg2gWgPQAjglAkAGIBLAbQBzAsB1BHQBzBEBgBSIgJAAQhcAAiJgng");
	this.shape_156.setTransform(-1.1522,-56.7082,0.1353,0.1353);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#457FA5").s().p("ABbCJQhmAEgYgGQgJhEhKhHIg+g6QgigigSgeQAoAOBDgPIBagVQAOgMAQAHQAPAIgDATIAAAAQgaAFAXAcQAMAOAYATQATARBpBUQBaBUgcAgQgugXhZADg");
	this.shape_157.setTransform(-3.4687,-66.2977,0.1353,0.1353);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8FBACA").s().p("AD5CHQgvg8gRgOQi5iUlHhRQCighCfARQCAAOC3A4QAcAKgcAMQAFA/hlADQCrCMhLBNQgPgEgpg0g");
	this.shape_158.setTransform(-8.0902,-67.0538,0.1353,0.1353);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#36332F").s().p("ACNDlQhahXhfAAQgBgegcg5QglhCgQgjQg9iCBNg0QBwBBA/B0QAsBRAqCjQAEANgCAJQgBAKgIAAIgDAAg");
	this.shape_159.setTransform(-20.196,-40.3838,0.1353,0.1353);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#9BC6DE").s().p("AAvCeQgGgPgFgHQACgkgIgSQgLgciZhcQiQhXg4gVIAAgWQBugSBIAKQBeANBIA8QAygkBrA2QBnA0AYA8QAEANAaAaQARAXgZAPQgNAIhxAhQhxAggXADQgEgGgHgQg");
	this.shape_160.setTransform(2.6486,-57.1583,0.1353,0.1353);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7FAFBE").s().p("ABlDHQhHgIh4ggQgHgcAzgPQgqg3hIg9Ih/hmQgVgXAHgHQAHgHAdAPIBtAsQgPgTgLgkQgOgvgDgHQAJgdAMAdQBrA5BZBgIAAAAQASgUAdAGQAZAGATAWQAUAWgEATQgFAXgkAIQg7AXBQAVQATgcAmAAQAhABAlAWQAjAWAVAeQAVAigHAcIhKABQhNAAgygFg");
	this.shape_161.setTransform(8.5017,-58.945,0.1353,0.1353);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E7CD83").s().p("AGlDnIgWAAIiTg6Qh3hQheguQh5g6hrgTIiAhcQhLg0g7gfQgYgRAGgGQAFgFAjAGQBMAdBsAWQA+ANB9AXQA7gBAxAXQAdAJgdANQBcAmBoBCQBEAtBwBVQAIAGgCAPQgCANgJAPQAtgHAFAKQAFAKghAfIgNAAIgJAAg");
	this.shape_162.setTransform(-2.5655,-57.8398,0.1353,0.1353);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#51627C").s().p("AgoCuQgrgNgNgJQgVgNgGghQgGggAFhJQAFhQAKgjQAKgoAWgQQAUgPAsgHIBqgPQASADAKAHQARANgbDAQgbDFgjADQgmgTgzgPg");
	this.shape_163.setTransform(-6.6874,-47.7756,0.1353,0.1353);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#A1988B").s().p("AixBOQgvg8AOg4QAOg4BHglQBKgnB3gHQBZgXAgAMQAsARgiBSQgFACgPgCQgRgCgHACIg1AOQggAHgYABIBXBLIhtB4QgQgVhEg5QhOg/gLALQAMAtAyAwQBEBCAKAPQAEAGgGAIIgHAHQhsgzgzhAg");
	this.shape_164.setTransform(-25.5667,-44.3338,0.1353,0.1353);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#DB674D").s().p("AkvG2IgLgKQAIgyAfhKQAxhyCtjwQCSjMB0iIQAYgcANgJQAWgRAcAAQgBADABAIQABAHgBADQAqAdgyB3QgsBngxAyQhoAvgjBDIAAAVQgdAGgjAiQgqAoAUAdIAEAwIidB/IglBTQgWAxgrAPIgEABQgGAAgIgHg");
	this.shape_165.setTransform(-50.2224,-19.436,0.1353,0.1353);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#37749E").s().p("AjNCHQgWgVAGgGQAEgEAYACQBEAGAHgKQAGgIgEgbQgFgegMgcQgghLgzAQQgeAKAAA7QgBA5gXAEQgTiTBSgXQBAgSCGA6QACgHgCgQQgBgPACgGQgRgYgDgNQgDgUAXgIIBtBWQBDA0ApAkQALAKAcAVQAXATADAPQgzAChHAVIh4AmQhDATg4AAQhAAAgygZg");
	this.shape_166.setTransform(-10.0393,-57.2758,0.1353,0.1353);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EFDEA7").s().p("ACAEeQhbhMhXhaQh7h8gQg6QgUhLAthDQAKgPAfgkQAZgeAJgSQAEAPAPALIAZASQAWgUAHAIQAHAHgOAbQAyBfA2B4QAmBWA1CGIAAAMQABAHgBADQAhAygLAXQgGALgNAAQgRAAgegSg");
	this.shape_167.setTransform(-18.993,-59.7701,0.1353,0.1353);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#294F68").s().p("AFND0QgVgIglgWQgzghgMgGQhPgrg3AdQhHAGhAg3Qg7g0gXhJQhBgIhahJQhhhQALg6QAWgVAJACQBTAbBTAnQBbAqA+AqQBpAYA6AeQBcAvAGBJQAvgWA2A2QA1A2gXAtQAlAwgeAAQgNAAgXgIg");
	this.shape_168.setTransform(-8.2608,-59.2581,0.1353,0.1353);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A27559").s().p("AhhCYQAMgUAdgQQAQgJAggPQA0gcgUhAQgJgehsheQhuhegZABQg9hpgFgEQBxBtDPCUQAVAQB+BHQBzBCAEAHQAIANgWBiQgaBygBAMg");
	this.shape_169.setTransform(-14.7486,-51.4701,0.1353,0.1353);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#346B90").s().p("AgEBWIkXhgQAAgLApgbQAigXAMgEQApgQAZgGQB7gnB0gFQBNgFAsBtQAYA7AeB4Qh/gGihgyg");
	this.shape_170.setTransform(-7.2082,-62.5521,0.1353,0.1353);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EED27A").s().p("Ai7ArQgoAggPgOQgOgOAZgvQAPgcgHg6QgGg3ASgXQAcgnC4hSQC+hVA5AKQgJAJidBtQh+BXgJAoQgDAMAKAIQAFAFAHADQABAEgCAIQgBAIACACQBOAagOAnQAUAxA4BCQAsA1A3AyQAuAmgFAsQgFAug6ADIgcANQiRjEjFh7g");
	this.shape_171.setTransform(-17.0721,-63.8742,0.1353,0.1353);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#B88B64").s().p("ACwFUQg0gLhRg2QhOg1hMhKQi3ixAEhxQABgPAPhUQAQhVAFgFQATgXAOATQAHAKAKAVQARAUBgB6QBFBXAyAxIgbgGQgbgHgKgIIBAB2QgNAPgUAIIghAKQggAMAMA2QAOAOA8gwQBDg1ALAAIAeAtQAVAjgHAHQgnAEgYAKQgxAVAzAvQAaAYBjAKQBYAJAAARQAAAZgtAFQgOACgOAAQgVAAgVgEg");
	this.shape_172.setTransform(-19.1313,-55.5431,0.1353,0.1353);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#DF6F53").s().p("AAWDRQgigQhDhdQhGhigkgVQgcgSg4gPQg2gOgagTQBsgpBtghQCBgoBagRQApgIAFAlIAEAjQAEAWAKAOQALAQAiAZIBAAwQBTBAAHA/QglAEgvAaIhSAwQhDAogyAAQgYAAgVgJg");
	this.shape_173.setTransform(-30.2549,-38.4881,0.1353,0.1353);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E9B74E").s().p("ABtCJQhGAbhMgNQg2gJhTgkQhugwgbgIQhPgbhEAFQAQghAcgYQAfgYAigFQB9hRCNgTQB6gRCeAdQCmBTBfBmIgrALQhqApiGAYQgIAtgNAFIgDAAQgOAAgcgcg");
	this.shape_174.setTransform(-11.3459,-65.4377,0.1353,0.1353);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6D4738").s().p("AibBfQh5iug6jtIKQG9QAgAqgvBIQguBIg8ACIgJAAQjBAAiajeg");
	this.shape_175.setTransform(-13.6056,-36.2412,0.1353,0.1353);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#4C6E89").s().p("AjSEBQgegFghgWQgngcgHgCQgRgPAAgKQAEg9ASiXQAVixAKgIQAJgIAVgGQAIgBAOABIAWAAQBtgJCLgFQA4gDDFgFQA5A9gPCPQgQCPhGAtQgMgKgOgTIgWgeQgcghgrAEQgcADgnAlIhIBOQhbBfhWAAQgLAAgMgCg");
	this.shape_176.setTransform(-1.1141,-47.3748,0.1353,0.1353);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A69B87").s().p("AgjAgQgRgRANgeQAPghAqAPQAaAKABAQQABANgQAOQgQANgSAEIgMACQgMAAgHgHg");
	this.shape_177.setTransform(30.519,54.1923,0.1353,0.1353);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#2D2927").s().p("AgBAqQgRgMgKgaQgLgaAGgPQAGgSAaAKQATAIAMAjQAMAggLALQgHAIgJAAQgIAAgIgHg");
	this.shape_178.setTransform(13.6455,34.5555,0.1353,0.1353);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1E1C1A").s().p("AgrggIArgWIAWAYQAUATABABIgrBAg");
	this.shape_179.setTransform(60.1693,56.8414,0.1353,0.1353);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#5E574C").s().p("AhTA2QgcgYBdgsQBXgsAWAEQgIAXhPAvQhBAngSAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_180.setTransform(12.2536,66.0065,0.1353,0.1353);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#97886E").s().p("AgPAKQghgzgGgtQAqAVAfA1QAcAwAHAzQgmgbgfgyg");
	this.shape_181.setTransform(49.0858,33.3447,0.1353,0.1353);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D9D8DA").s().p("AgzBBQAJgJAGgbIAJgxQANhAAmAIQAkAGgLAZQgGANgRAWQgfBSgDADQgNADgKAAQgWAAACgNg");
	this.shape_182.setTransform(17.4325,-3.4338,0.1353,0.1353);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E1D8C2").s().p("AACBtQgNhCgIgzQgPhkAaAAQAdAnAEBCQACAlgDBLg");
	this.shape_183.setTransform(-47.4256,40.436,0.1353,0.1353);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#716056").s().p("AhXAbQAKgEBNgtQA7gjAdgCQghBSgiAZQgRAMgTAAQghAAgnghg");
	this.shape_184.setTransform(3.1344,-44.7407,0.1353,0.1353);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8D8274").s().p("AhiAbIABgbQAQgDALgPIARgZICYAWIi5BAIgBABQgMAAABgRg");
	this.shape_185.setTransform(57.0596,53.7357,0.1353,0.1353);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#7D7768").s().p("Ahth2QAKgJAmAcQAkAaApAsQBpBtgNApg");
	this.shape_186.setTransform(10.5331,-1.9811,0.1353,0.1353);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D4D3D2").s().p("AgeArQgggEgYgYQgagaAEggIDZArQgEAXg8ANQgkAIgYAAIgPgBg");
	this.shape_187.setTransform(44.2094,28.6276,0.1353,0.1353);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#867C6E").s().p("AhbAnQgIgPAhgYQAggYAsgPQAzgQAhAHIhtBhQgSACgOAAQglAAgHgMg");
	this.shape_188.setTransform(12.8021,64.1455,0.1353,0.1353);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#BCB6A4").s().p("Aijg+IFHBsIhIARg");
	this.shape_189.setTransform(0.3263,-12.1939,0.1353,0.1353);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#625E57").s().p("AhWg1QAwgHAuAZQAeAPAxAqQgJATguAGQgyAGgDACg");
	this.shape_190.setTransform(32.6871,-20.8904,0.1353,0.1353);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#38729A").s().p("AgVA3QgOgFgkgTQghgTgEAAQAPgGAagZQAZgZAOgFQAngOALAXIAIAWQAFAOAHAFQAHAGAlATQAYALgBASg");
	this.shape_191.setTransform(-64.5374,29.9324,0.1353,0.1353);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#494642").s().p("Ah4A1QAfgsBNgdQA5gXBKgMQAHAkgOAHQgWADgOAIQg2AggnANQgkAMgjAAQgQAAgQgDg");
	this.shape_192.setTransform(7.4353,68.3787,0.1353,0.1353);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#817568").s().p("AhhAjQgPgBgHABQAdg5BYgLQBZgMAhA6QgjANhBACQhNAEgSADIgJABIgNgBg");
	this.shape_193.setTransform(-20.6533,52.6672,0.1353,0.1353);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A79A8B").s().p("AgegSQB6hKAqAGQgkAzhVAvQhhAygrAZQgdgeB+hLg");
	this.shape_194.setTransform(12.5574,67.0321,0.1353,0.1353);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E6E5E5").s().p("AgPAHQgvgcgLgPQgcgkCzAIIgBCCIhcg7g");
	this.shape_195.setTransform(62.0756,58.1568,0.1353,0.1353);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A5947E").s().p("AhAhAQALgFAUgLQASgJAPADIBBCNQgKATgUAGQgXAEgMAEg");
	this.shape_196.setTransform(48.0471,33.6371,0.1353,0.1353);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#292522").s().p("AgqCIQgLgTgBgRQgBgqAChTQAChVgCgqQALAVAPAlQARAqABAJIAAAAQAAADgOAUQgNASAFACIBWAAQgXAZgPAcQgFAJgVAvIgNAUQgJANAAALIgLgRg");
	this.shape_197.setTransform(7.4065,77.6721,0.1353,0.1353);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#BCB5A7").s().p("AgJAYQhZgUgggpQBAgYBNAcQBMAaAsA4QhcgOgwgLg");
	this.shape_198.setTransform(-1.2977,-11.0567,0.1353,0.1353);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9B9182").s().p("AgggJIAQhnQAMhBAlgSIgsGHg");
	this.shape_199.setTransform(20.7206,-8.3235,0.1353,0.1353);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#B6A58B").s().p("AAyA3QgqADghgKIg3gPQgZgTAZguQAVgRAHgDQAOgGAXAFQAaAOAfAfIAzA0QABAMgQAAQgVgCgHABg");
	this.shape_200.setTransform(-47.775,78.4095,0.1353,0.1353);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#AF823B").s().p("Ahth0QAQgTAyAkQAgAXAhAkQAoAoAPAaIAgBLQABAEgBAHQgBAIABADg");
	this.shape_201.setTransform(-16.365,-48.1124,0.1353,0.1353);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#1E1C1A").s().p("AjjA/QgCgwAAgaQgBgwAZgIIAKANQAGAHAGACQAFARgJAlQgCAeAmACQBCAFB8gEQCEgEA8ADQgPAXgoACIhBgDIiqAFIgpAAQhNAAgygFg");
	this.shape_202.setTransform(64.4387,55.8386,0.1353,0.1353);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#1D3444").s().p("ABTAmQhKgIg+gXQgvgQhOgoQASgNADgIQATAIAlAFQApAFANAEIAAgBIClAnQAlgKAQAUQAOASgJAZQgJAZgYADIgEAAQgaAAgeghg");
	this.shape_203.setTransform(9.7043,6.2362,0.1353,0.1353);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#807464").s().p("AAAAJIi5AXQBBhPB5AGQB3AGBCBOQhaglhgADg");
	this.shape_204.setTransform(14.5123,49.6119,0.1353,0.1353);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#929085").s().p("AgYAkQgQhCAAglQgBgbAMgYQAMgTAAgEQAnAkAPBxQAQB4gxAOIgchqg");
	this.shape_205.setTransform(14.3153,-1.6754,0.1353,0.1353);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#807767").s().p("AhUg5IgjgwQgUglAdgKIBwB9QBHBOAkAvQATAaABAEQAAAFgWAUQhmhbhZh3g");
	this.shape_206.setTransform(10.2522,-0.6418,0.1353,0.1353);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#80766A").s().p("AAKATQhXgYg8AHIgPgQQBHgzBaAXQBUAVA8BHQgpgChmgdg");
	this.shape_207.setTransform(-14.2995,50.3967,0.1353,0.1353);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DAD8D8").s().p("AhhipQAmgmBECJQAjBGAhBcQAEANAQAiQAIAdgcALg");
	this.shape_208.setTransform(62.9759,61.6576,0.1353,0.1353);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#463A2F").s().p("AgsAtQgKgagIgxQgKg+gFgRQAgAFBEBjQBEBigQAPQgPACgNAAQhCAAgZhBg");
	this.shape_209.setTransform(-46.6353,73.8494,0.1353,0.1353);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#797167").s().p("AgCgSQCTgYA0AMIinA+IjhADQApgeCYgXg");
	this.shape_210.setTransform(24.1174,-17.0677,0.1353,0.1353);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#7A5B3F").s().p("AgkgzQBDgWBkALIkFCBQgBhXBfgfg");
	this.shape_211.setTransform(12.8849,56.076,0.1353,0.1353);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BFBAAB").s().p("AgcgbQAxg8BYgmIAABCIjZC5QAjhlAtg0g");
	this.shape_212.setTransform(18.7955,-13.1243,0.1353,0.1353);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#AEA38F").s().p("AixAfQABgWgBgKIAWgYQAOgSAHgBQATgFBTgIQBUgIAPACQCOAwgmAjQgDADgtgLQg8gPgogEQiTgSg1BZQgBgKABgXg");
	this.shape_213.setTransform(12.936,62.9184,0.1353,0.1353);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#385562").s().p("AhCCMIAMg2QAQhEAehFQAkhVAmgmQAHBVglBhQgHARhHCWIgDAAQgYAAADgjg");
	this.shape_214.setTransform(3.1223,-35.5106,0.1353,0.1353);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C7995C").s().p("AAfCNIiCjwIASgdQANgVANARQAPApA9BUQA/BVAMAeQANAfgeACQglgDgLADg");
	this.shape_215.setTransform(52.0645,32.3324,0.1353,0.1353);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A59A8B").s().p("Ag/ARQgsg5AZgjQBGgGAoAlQAeAaAiBJQgmADgcATQgtgDgsg5g");
	this.shape_216.setTransform(46.8085,30.8261,0.1353,0.1353);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#562722").s().p("ADYA5IgugIQiGgYhCgKQh2gRhbANQACgJgCgcQgCgZADgDQALgMDTAtIEBA2QACAYgYAAIgDAAg");
	this.shape_217.setTransform(-6.6247,-12.3121,0.1353,0.1353);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#383331").s().p("AhNAeQghghANg3QA2ANArAAQAsAAA2gNQANA3ghAhQgdAdgxAAQgwAAgdgdg");
	this.shape_218.setTransform(10.6689,48.3325,0.1353,0.1353);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#46423D").s().p("AhCE4QAEglgBgNQgDhhAXiYQAViNAehpQAMgqAIgTQASgpAVgCQgUBwg1DfQgpDHAGCNIgEAAQgUAAgBgag");
	this.shape_219.setTransform(16.4103,-5.2158,0.1353,0.1353);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#1E1C1A").s().p("AgsAKQgkgQAGA7IgVAAQgBgRABglQACgkgCgSQAUgSAqgBQAmAAAlAOQAmAPAMAXQAOAZgcAcQgFACgWARQgWASgQAHQgXgxgigQg");
	this.shape_220.setTransform(69.7491,57.4537,0.1353,0.1353);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1E1C1A").s().p("AghAJQAAhdAXg5QABgBAKgGQAKgHAAgHQASACADAOQACAHgBAUIhAEbIgCibg");
	this.shape_221.setTransform(67.9921,58.3165,0.1353,0.1353);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#8B8477").s().p("AhUhbQgFgQA0gHQA0gGAaAYQAjAiAIBCQAHBAgXAwg");
	this.shape_222.setTransform(15.2173,-10.7754,0.1353,0.1353);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#695E51").s().p("AgDBLQhGgogPgEQAvALgBgxQgBgngZg2QC6AZgiCrQgFAFgKAAQgXAAgxgag");
	this.shape_223.setTransform(19.1413,36.1887,0.1353,0.1353);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#433D39").s().p("AhOAcQg7guCEhEQA6AvATAaQAhAtgKA2QiKgfgjgbg");
	this.shape_224.setTransform(1.2569,-7.7246,0.1353,0.1353);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DCDCD7").s().p("AgkgEQA6hYAJgbQAiAFAKBaQAKBTgNAPQgDADhBATIhSAYQgEg4AuhEg");
	this.shape_225.setTransform(18.6801,-2.5618,0.1353,0.1353);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#2E2A28").s().p("AgPBgQgfglgOg/QgPhBAQggQAUglAyAhQAPAKAbBbQAcBhgaATQgNAKgOAAQgWAAgVgag");
	this.shape_226.setTransform(34.592,65.5196,0.1353,0.1353);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#43738D").s().p("ACOC6Qg6hchVhpQgvg4hziAIBBAAQAsA6BdBvQBSBmAqBNQgCAHADAbQAAAJgFAAQgGAAgLgKg");
	this.shape_227.setTransform(-14.7427,-43.7893,0.1353,0.1353);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#2D2927").s().p("AglA0QgshMgQgHQAJgmAOADQAKABAUAbQAcAmAJAHQAVAWATgGQgBhZgigQQgQgGggAAIhFADQAjgcBPADQBwAFANgCQgiAVgXBfQgXBdgSAIIgGABQgUAAghg7g");
	this.shape_228.setTransform(15.1044,33.0361,0.1353,0.1353);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A5835B").s().p("AhBCZIBXk7QAYgIALAOQAFAHAEAJIgsEwQgEgBgvADIgHAAQgdAAAAgNg");
	this.shape_229.setTransform(9.9313,43.2371,0.1353,0.1353);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6D6356").s().p("AgICJQgNgZALgaQgxhrgQhvQACgBAGgNQAJgMAOAFQAjAJAlBXQAVAuAbBLIgrBXQgJAEgHAAQgQAAgJgSg");
	this.shape_230.setTransform(2.0991,63.508,0.1353,0.1353);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A49884").s().p("AiLBiQgKhdAVgKQAFgCAfgGQAhgFAdgNQgKguATgOQAUgOAjAeQBaglAQAXQAEAHgBAOQgBANACACQgNAVgaARQgMAIglASQgoAWhAAeQhMAkgNAAIgCgBg");
	this.shape_231.setTransform(70.3446,58.9036,0.1353,0.1353);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#574D45").s().p("Ai4CPQAogyCMhqQCFhnAvhDQASALgMAeIgRAuQgiAchrBiQhUBQg9AqQgqAegDABIgHABQgRAAAGgpg");
	this.shape_232.setTransform(-21.2538,17.2195,0.1353,0.1353);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#31607D").s().p("AjEC5ICkjaQAngvAvgmQAmgeA9glIAsAWQgrAVhHA/Qg6AyguAyQgQARgXAkQgcAugIAKQgoA4gyAAIgKgBg");
	this.shape_233.setTransform(-12.5301,7.7844,0.1353,0.1353);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#67605A").s().p("AjfAtQgYgMABglQAAgnAagHQA+AXCgALQCqAMBCASQANAXgGAHQgGAHgXgPIgWAAQhmAPiHAAQhUAAhggGg");
	this.shape_234.setTransform(64.9285,55.9011,0.1353,0.1353);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D0BA95").s().p("AgtCkQgtgKAfh8QAbhuAfgmQAHgKAhgTQAggTACADQgYCCgQA5QglCMglAAIgEAAg");
	this.shape_235.setTransform(8.6414,43.2441,0.1353,0.1353);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#9A8E79").s().p("AAAAOQhcgOhUAuQgThPA9gYQAzgUBYAWQBSAUA3AlQA5AogbAaQiIgwgkgGg");
	this.shape_236.setTransform(16.4584,41.8839,0.1353,0.1353);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#554F47").s().p("Ah8BYQgfgfBXhDQBCg0A0gXQARgKATASQASAQANAfQAgBJgiAYQg0AShBAEIgqABIhQgCg");
	this.shape_237.setTransform(46.4883,33.9206,0.1353,0.1353);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#63251D").s().p("ABBAeQg8glgVgMQhhgzhdATIgBAAQA5gnCsARQAhAEBIASQBSAVgBAMIg4BhQgigQg1ghg");
	this.shape_238.setTransform(-7.0593,-10.568,0.1353,0.1353);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#1D323D").s().p("AhwAbIgdgNQgQgHAAgHQAAgXAWgZIAXgaQgKAzA2gRIA1gTQAigNAVgCQCXgOgqA5QgCAEg3AaIhKAjQgVALgwANQguAMgPAIQAjghgjgSg");
	this.shape_239.setTransform(-41.4369,22.246,0.1353,0.1353);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B7AB93").s().p("AApA/QgOgDghADIg8AEQhIABAFgmQAKhKA6gUQAqgPBVAMQAkAOAUAeQATAbgCAbQgDAcgXAKQgKAFgNAAQgUAAgZgLg");
	this.shape_240.setTransform(17.3635,35.7495,0.1353,0.1353);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D64F3C").s().p("AidBmQADgHAbgfQBChdAvgjQBHg5BaAOIAAAAQAVARgSATIgkAdQgpAkhGAsIh1BIIgTABQgbAAADgJg");
	this.shape_241.setTransform(24.7826,-19.568,0.1353,0.1353);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#44392E").s().p("AhBAuQgCgcAXh+QAgAJAMgaIAHgYQAGgQAIgJIAAAAQgPA/AggGQAUgEACAAQAKADgFAVQgKAvgcBUQgTBMANBBQhRgvgFhSg");
	this.shape_242.setTransform(-47.3858,69.6944,0.1353,0.1353);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#1D2E36").s().p("AAAAFQjQhviBg5IALgKQAHgHADgEQDPBhCCBHQC3BjCGBnIlSi1g");
	this.shape_243.setTransform(-80.3474,32.9015,0.1353,0.1353);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#62231E").s().p("AAgAjQiLgVhjgYQgngEgNgFQgVgIAIglQB8AHB0AUQCCAWBmAiQAOAFAfAHQAYAJAEAZQi0gVg+gJg");
	this.shape_244.setTransform(-6.4836,-13.3476,0.1353,0.1353);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B9AD94").s().p("ABmAqQhVgZgTgBQgaAAhCAPQg6AOgjgGQAchWBXgMQA8gIBkAeQAEABADAMQAEANACABQAEACAWgIQAVgHANAHQAQAJAHAdQAHAegIAJIgCAAQgMAAhDgTg");
	this.shape_245.setTransform(16.0196,43.75,0.1353,0.1353);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#4F4841").s().p("AAQDLQgFghgHgQQgEgOgjhEQgeg9gBgFQgBgFAehfQAfhkABgYQAFAKAQAWQAQAVAGAMQAWBgAFA5QAHBKgMBOIAABBQgKACgHAAQgVAAgGgQg");
	this.shape_246.setTransform(6.1697,77.6863,0.1353,0.1353);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#322E2A").s().p("ABZBdQhBg0gYAOQBCBRgqgQQgqgRgug8QA+gCg1g4QgWgYhLg6IBCgsQBxBmAYAZQBKBOAcBOIAAAAQgEAAg8gxg");
	this.shape_247.setTransform(8.1585,-5.8094,0.1353,0.1353);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#3E7495").s().p("AhpAPQAnhAAXgOQAWgMBRgJQBTgJAKAJQgGBchvAgQiHAWg1AbQADgCAshIg");
	this.shape_248.setTransform(-8.3923,2.8793,0.1353,0.1353);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#686055").s().p("AEHB2Ig0gTQhbgbiog8Qixg9hTgaIAdgsQB0AwCvBAIEpBqQgKAVgXAAIgNgCg");
	this.shape_249.setTransform(69.5782,68.0634,0.1353,0.1353);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6D4D29").s().p("AgXBjQgHgLgphWQgphYAAgHQgBgMAlgJIAzgNQAYgKACADQAyBEAfA6QAuBYgXAhQguATgUADIgHABQgeAAgZglg");
	this.shape_250.setTransform(51.0555,32.7098,0.1353,0.1353);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#7F7464").s().p("AAnBxQhAhLgBgFQAAgEAKgbQAJgWgHgMQgxglgegfQg5g7AlgvQBJBGA6BOQBLBkAWBOQALAnABAIQAFAfgRAKQgIgQhEhPg");
	this.shape_251.setTransform(-0.3493,58.0188,0.1353,0.1353);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#619DBE").s().p("AhiBjQgSgVAWgoQAEgQgEhFQgEg/AEgEQBkgCA0AYQAyAXgBArQgBAqgwAWQgCAggiAWQgdAUglADIgIAAQggAAgOgQg");
	this.shape_252.setTransform(-41.6841,20.716,0.1353,0.1353);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#70695D").s().p("AhyAtQgtgBAFgTQAEgOAkgeQBggoAbgFQA6gJBQAgQAKAsgDATIgHAtg");
	this.shape_253.setTransform(21.8242,-14.5465,0.1353,0.1353);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#302C29").s().p("AAIBOQhhgTgaAOQAEh1AugkQAlgdA1AgQAyAeAaA1QAcA5gbAgIgBAAQgJAAhUgRg");
	this.shape_254.setTransform(18.0005,33.2442,0.1353,0.1353);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#332E2A").s().p("AhtClQAKhKANhMQAQhdAPg0QAHgbAIADQAGABAIARQAKATADADQAHAFAGgVIAPAfQAJASgDARIAVAAQABgeAQgmQATgqAIgVQA9BPhUBIQgSAQgwAfQgjAWgCAKQgFAVAKAbIARAqQAMArhSARQgSALgEAAIAAAAQgDAAAEgfg");
	this.shape_255.setTransform(18.5156,-7.437,0.1353,0.1353);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#453D36").s().p("AiYiJQAgALAIgZQAFgNAAgQQAagTAPAbIAYAsQAIAIARACIARADQAEADAHASQAGASAFAEIAVA9QC0CfhyAUQgkgXgDABQgHACADApQhCh3iYjPg");
	this.shape_256.setTransform(-2.1843,56.1979,0.1353,0.1353);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#2D2A28").s().p("AhyCkQgggLBDiPQA/iEAVgTQAXgVAjgCQAUgBAqACIijEaQgOAWgTANQgQALgPAAQgGAAgGgBg");
	this.shape_257.setTransform(-0.6316,52.4081,0.1353,0.1353);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#746F65").s().p("ABoBwQheg8hJg0QiPhnAbgYQBYgKBlBHQAfAVCBByQAdAngcAQQgKAFgMAAQgUAAgZgRg");
	this.shape_258.setTransform(4.6828,-8.6598,0.1353,0.1353);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B5AF9F").s().p("AhJC9QgOgXAYg5QgQgkgMgiQgRgyAEgQQAFgVBOhGQBMhEAXgJQAygUgnBXQgUAtgjA+QgFANgCAWQgBAXgDAGQANAygVAtQgQAmgeARQgOAHgKAAQgMAAgGgLg");
	this.shape_259.setTransform(19.373,-10.684,0.1353,0.1353);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B7A385").s().p("AiaB7IAHg/QARihA/gnQA9glChAyQgMAXgkAAQgrgDgSACIghgCQgUgBgIAGQgOAKgHApQgEAZgGA5QgOBxg5ALIgKABQgZAAgCghg");
	this.shape_260.setTransform(11.0851,37.1457,0.1353,0.1353);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373330").s().p("AhTgGQAPhXACgCQAGgGBHAEQBRADAPgCQAUBzhAArQgvAgh+AFQAMgSAPhXg");
	this.shape_261.setTransform(-2.1506,-20.8981,0.1353,0.1353);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#60594F").s().p("AA7AsQhDgfgmAAQgdAAgiAZIg5AnQgCABgIgBQgIgCgDACQgDg7CUg9QCBg3A/ABQAxAAgOAbQgNAbghABQAnAYgDAmQgBAXgNA4Qg1ghgxgWg");
	this.shape_262.setTransform(13.3681,60.678,0.1353,0.1353);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#50473C").s().p("AgMB6QgPgBgrhLQgshMAHgbQAJglA1gSQAygSAhATQAKAGAgBBQAgBDgDARQAAAFg6AlQg5AkgGAAIAAAAg");
	this.shape_263.setTransform(49.2611,29.3136,0.1353,0.1353);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7C7061").s().p("AgPB+Qg8gbgMgBIAsjwQBJAJAeAZQAbAVABAoQABAWgMA+QgMBAAAAoQgIACgJAAQgbAAgkgRg");
	this.shape_264.setTransform(16.7386,47.0955,0.1353,0.1353);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#2E2927").s().p("AgVA8QhRgOgxgeQg5giAAgyQAhATC+AKQC5AKAGAFQAEAFgDAXQgCAagJAMQgPAUhBAFQgUACgVAAQguAAgygJg");
	this.shape_265.setTransform(29.8973,-10.6432,0.1353,0.1353);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#CEC0A4").s().p("AhLCOIArkGQAMgDArgJQAtgJAIAAIAAEbg");
	this.shape_266.setTransform(13.6259,52.4093,0.1353,0.1353);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#7A6D5C").s().p("AAcCCQg8gpgGgBQgEgpANg2IAQhKQADghgVgLQgZgNhFAIQAggsBmAjQBhAhASAoQAIASgXBVQgYBZAHAbQgDADgGAAQgQAAgngag");
	this.shape_267.setTransform(17.8486,39.2546,0.1353,0.1353);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D8A248").s().p("AB7DCQhEhOgjgmQg8hBg2glQgnAFgYgpQgYgoAVghQhDhYBZABQAYAbBEA/QA9A7AVAZQAbAiAzBXQA3BcATAbQAGAbgQAAQgQAAgngbg");
	this.shape_268.setTransform(-18.6233,-49.063,0.1353,0.1353);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#2C2A27").s().p("AghBjQh2gGAWhHQAGgTBZg0QBYg1ATAEQAlAJAPBMQAMA9gHAwQgNgCg4ADQgsACgcAAIgWAAg");
	this.shape_269.setTransform(-19.6139,-24.1018,0.1353,0.1353);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CBB797").s().p("AgaENQgTgCABgNQgCkigpjoQAQgCAeAfQARARAYAeQBwCDgfAhIgpAaQgdAQgIAbQgJAiAEBMQAFBYgDAbQgIADgLAAIgHAAg");
	this.shape_270.setTransform(-42.9579,52.5024,0.1353,0.1353);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D4C8B2").s().p("AAaBcQhZgPhihiQAihfBoAdQAJACBSAeQA6AVAkACQgVB/haAAQgMAAgNgDg");
	this.shape_271.setTransform(-2.3025,-9.0628,0.1353,0.1353);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#CEBDA1").s().p("AjEBwQACgIgBgrQgBggALgZQALgWAxgiQAxgiA9gcQCXhGAnAtQAlAqgYAMQgrALgWAPQhCA3gyAiQhjBFAbg/QAJgUAvgaQAsgbAIgYQg1AEgtAgQgfAWgsAyQACBvgZAAQgQAAgbgug");
	this.shape_272.setTransform(-45.321,66.6959,0.1353,0.1353);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#947B6B").s().p("ABCB8QgggBighIQg9gciRhEQgegJgNgGQgZgLgDgXQBEAFBXAmQAwAWBfAtQBSAkA8ACQBQADBMgvQAlgWBKhTQBAg5AkA5QgNgBgLAIIgTAPQgeAUgnAoQgsAsgWAVQhNBIhMAAIgHAAg");
	this.shape_273.setTransform(-4.1058,-43.9701,0.1353,0.1353);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BCAD90").s().p("AiDByQADhpAJgmQARhABRgKQBAgXApARQAkAPAJAqQAIAogRAtQgSAwglAhQgTgEhZAFIg9ACQgYAAgDgDg");
	this.shape_274.setTransform(16.4378,38.8903,0.1353,0.1353);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DEBE77").s().p("Ah3DlIDvnKIgKDEQgGCVgQAaQgIANhgAoQhVAjgPAAIgDgBg");
	this.shape_275.setTransform(51.745,19.9042,0.1353,0.1353);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#1F323F").s().p("ADME5QgigrgRgQQjVkMjskbIgJg7QBDgXBOBYQBIBSACBHQC3CbCPDCQABgCAKACQALABAAgBQAOAEADAOQADAIACARIAJAhQAFASAIAPIggAqQgkgLgigmg");
	this.shape_276.setTransform(-15.7814,-44.5621,0.1353,0.1353);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B99F7A").s().p("AiNAYQAMg5gBhAQAiAMAwgNIBUgdQAxgRAcADQAnAEAXAoQgRAogvAeQgeAUhDAcQhJAfgfASQg3AggdAoQAahVAHghg");
	this.shape_277.setTransform(-45.9194,64.5217,0.1353,0.1353);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#71685C").s().p("AEQClQgTgIhdhNQhhhPgqgVQhKgnhWgfQhEgYhjgaQB0gwBRAkQAOAGA2AfQArAZAjAKQAUAGAdgBQAhgBAKACQARAeBLBIQBFBEAOAkQAIAUgLALQgFAFgJAAQgHAAgIgDg");
	this.shape_278.setTransform(84.4236,37.0271,0.1353,0.1353);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#2E2A28").s().p("AjlC3QALggAigpQAmgvCPiEQB/h2AzhLIBMAYQhKBminCaQjiDSgiAjQAQhFAFgLg");
	this.shape_279.setTransform(58.5454,48.7013,0.1353,0.1353);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#978D7B").s().p("ABThQIDTh4QB+hDBdgaQgwAthRAyIiMBSQjsCKiJBNQjRBziuBQQDdihF2jVg");
	this.shape_280.setTransform(22.7877,60.9757,0.1353,0.1353);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#2D2A28").s().p("AA/BaQhCgPgKAAQgWAAgdAJQgbAJgIAAQgdgBgThlQgIgmAhgXQAcgUA0gEQAvgDAuAMQAxANAVAYQAXAZAFAsQAFAxgaATQgJAGgSAAQgQAAgWgFg");
	this.shape_281.setTransform(37.4647,54.1763,0.1353,0.1353);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#678992").s().p("AEqE/QgmgbgOgIQgygdhcg7Qhhg9gsgaQgCgXASgBIABAAQgGgIALgMQAcgJgZgXIgogdQhXhEgzg0QhHhIgmhJQgvAIgHgXQgGgWAmgdIAhAWIAhAWQgBAbASAXQALANAaAZQDUDqFYEVQgMAMgPAAQgOAAgQgJg");
	this.shape_282.setTransform(-7.5799,-36.6893,0.1353,0.1353);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#DDD4C0").s().p("AgvBMQiOgfAdhUQAQguA5gLQA0gKA+AYQBAAYAmAuQArAzgHA9QiJgIhLgQg");
	this.shape_283.setTransform(-60.8586,64.2052,0.1353,0.1353);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#C5B498").s().p("AhTBOQgdhAgSgtQBMAGBChCIA2g1QAhgdAggLQAAAKgUB4QgOBVAOA2Qg0AWgbARQglAYgbAlIgzhrg");
	this.shape_284.setTransform(-50.6492,68.9535,0.1353,0.1353);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#614F3B").s().p("AiUBAQgogsgbg2QgQgigbhLQARAVAmATIA3AaQAfgiAXAQQAXARgMAtIARAUQAOASASAJQBXAqA7gSQAZgHAjgVIBIgrQAWAagKAQQgEAIggAXQh/BYg5AMQgRAEgRAAQhNAAhJhQg");
	this.shape_285.setTransform(-42.4186,74.2961,0.1353,0.1353);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#38342F").s().p("AgjCWQhggiAOhJQAHghBGgfQBUgmAJgKQAKgKARguQANgjAagHIAAFHIABAAQgdAIgeAAQguAAgygSg");
	this.shape_286.setTransform(-33.3525,76.3945,0.1353,0.1353);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3C7DAC").s().p("AC8FSIgKgTIgMgYIgLgiQgGgXgIgPQglhGiQjIQiFi4gfhKQgFgLADgMQACgMAKADQCHBQBnCtQBJB7BIDIIASA2QAHAigaAMg");
	this.shape_287.setTransform(31.3298,6.3052,0.1353,0.1353);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#4F4843").s().p("Ah4BRQghg4AEgVQAIgtBCg7QBDg7AygEQBOBGAfBTIh6BUQhDAwgyAqQACgagig5g");
	this.shape_288.setTransform(45.1251,32.0117,0.1353,0.1353);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B9AD95").s().p("Ah2AFQAJg6ARgcQAohBCcASQAXALAHAmQAGAigIAtQgJArgSAfQgVAigYAEQgxgHgyAFQg4AFgoASIARiAg");
	this.shape_289.setTransform(14.7377,46.9075,0.1353,0.1353);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#DAC6A7").s().p("AiFB7QgTgVAGgaQACgKAvhhQAvhlAHgEQANgIAkADQAtADALgCIBXAhQgUBjhLA8QgvAmh3A1IgVgUg");
	this.shape_290.setTransform(-46.1612,60.0752,0.1353,0.1353);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#CDBA9B").s().p("AgeCgQgngUgMgcQgJgVgBgzQgChMgEgnQAJgdANAdQA1AOAXgwQAJgQAIgfIAPgzQAEADAbAAQAbACAHASQgsBwADBSQADA6AmCLQhbgaglgVg");
	this.shape_291.setTransform(-46.0683,42.9498,0.1353,0.1353);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#423C36").s().p("ACIDgQgqgBgdgaIkPl9QBLg+AsAlQAbAXAyBOQBfCeB6CTQgdAbgpAAIgBAAg");
	this.shape_292.setTransform(8.9029,-1.2398,0.1353,0.1353);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#34312E").s().p("Ah3DwIBBgsQg0g1AXgkQAEgHAZgdQAXgZALgXQAyhnAuifIAsDOQADAXgZAWQgZAXgSgPQgCgBACgWQABgTgNABIghBAQA/gPAYA/QAXA9ggAuQgOAUhRANQg6AJgoAAIgOAAg");
	this.shape_293.setTransform(-2.0303,-26.053,0.1353,0.1353);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#6B4533").s().p("AiOBxQglgThBg0QhOg+gngZIADgMQACgIAGgCQA3ACCFBDQB/BCA1gFQA8gGBfhLQA0gpBahKIAAABIAmA4QAPAfgJArQhsgXgnAXQgMAGgbAYQgdAbgbASQhdA9hOAAQguAAgqgVg");
	this.shape_294.setTransform(-3.1965,-42.5713,0.1353,0.1353);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#877C6F").s().p("AguC6QgdhLgOgnQgYhDAKg7QAOhXA3goQAhgZBVgsQAqAfgmApQgzAsgHAQQgdBAAgCbIAXBlQAKAtgEAEg");
	this.shape_295.setTransform(-64.7938,64.2237,0.1353,0.1353);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3B3733").s().p("AhcBYQgtgIgMgKQgDgDgLgqQgKgpABgGQAEgRA/gYQBCgYBBgHQBQgHAlAaQAuAfgYBKQgVBBiJACIgGAAQgvAAgugJg");
	this.shape_296.setTransform(-1.874,1.3279,0.1353,0.1353);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#2C2927").s().p("AgSAWIiehKQgfgNgLgIQgSgOAGgfIHKAsIAAAAQARAPgrBTQgrBTgdAMQgzg1hhgsg");
	this.shape_297.setTransform(-4.3773,50.9139,0.1353,0.1353);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#493C2C").s().p("AijCuIABgsQABgbgCgQIAHgzQDqhPhDiZQARgDAkgKIAigJIAWAAQgCAEABAQIABAYQgFA+ARBmIAgCiIgMALQgIAHgCAEIhYABQhVAsg3AAQg3AAgWgtg");
	this.shape_298.setTransform(-45.4796,60.8387,0.1353,0.1353);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C4B295").s().p("AgDBaQgUgYg0gIQgNgChVgFQg6gDgZgNQghgRAGgqQARh3CSA5QAiAOBPApQA+AgAUADQAqAFAfgUQAqgcADgBIAAAAQAGgBAPAAIAXABQASAFALAHQA8AviCAmQhLAWhnALQgBAPgGAAQgFAAgJgPg");
	this.shape_299.setTransform(-44.1006,56.6488,0.1353,0.1353);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#A49985").s().p("AgxCJQg2hYgJgoQggiJAPgtQAYhDCCAOQhJBmAlBsQAhBlBwA7QABALgBALIAAAAQgLAFgpAfQgjAagPABIgBAAQgYAAg4hcg");
	this.shape_300.setTransform(76.3832,63.6044,0.1353,0.1353);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#3D7AA4").s().p("AAWBfQhoidgzgLQAZgdAThAQAQg2AGgyQBmBrA9CYQBFCwg5BqQALgfhhiRg");
	this.shape_301.setTransform(46.0263,23.4182,0.1353,0.1353);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#292724").s().p("AA1CdQgehTgRgcQgXgngzhHQgzhKgXglIEFghQgBATABAuQACArgCAXQAgCPgKCMQgLADgKAAQgpAAgag0g");
	this.shape_302.setTransform(12.4625,-2.5404,0.1353,0.1353);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#AC8958").s().p("AikCkQgOgEgIgpQhLg2gWhGQgXhIAhhWQAOAKA2BFQAqA1ApALQAVAGA4gLQA+gLAZACQAVABBoAQQBMAMAygGIAABBQgogOhzARQh4ARgRgDQghgbgcgRQg3gggbAmQgWAfAfAYQAPAMAUAJQAAATgLAIIgMAFQgcAXgMAAIgDAAg");
	this.shape_303.setTransform(-43.094,38.5266,0.1353,0.1353);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#60241D").s().p("AkQBcQAogiBhg4QAKgGAagpQAVggAZgIQACAHAGAHQAGAGAIACQgPArBPgVIABAAQAfAeA0geQAXgNBAg4QAygsASADQAbAEgDBUQh0BRh3A6QiaBLhkABIgHAAQiOAABGg8g");
	this.shape_304.setTransform(-27.7592,-22.8248,0.1353,0.1353);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#93887B").s().p("ACvFEIghglQh1h0hWiaQg7hmhWjNQALgEAagcQAagWAZATQAaA4A9BuQAlACAKAYQAKAXgPAmIBfDFQA4B2AuBNQgDAPgKAAQgHAAgNgLg");
	this.shape_305.setTransform(60.0205,58.5653,0.1353,0.1353);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#918878").s().p("AjlBMIgggrQArgTBEgOIB3gVQCPgdA/hFQBABSAXBGQhRAoiOAUQihAQhKALQgNgQgUgcg");
	this.shape_306.setTransform(11.7042,-9.3554,0.1353,0.1353);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B9A88D").s().p("Ag4AuQgbhBgTg+QgSg7AEgIQACgEA3ggQA4ghAEAAQBKgBAHBXQADAvgHBJQABALAPArQAPAvAFAaQARBbhDALIgEAAQguAAhGisg");
	this.shape_307.setTransform(-49.3318,73.8174,0.1353,0.1353);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#514941").s().p("Ai5A6QAAgWgNg1QgMgxAEgcIFSAAQArAAAQAzQAJAcAIAzQgkgGg/ARIhuAhQg2APgoAAQg+AAgcglg");
	this.shape_308.setTransform(-52.5743,84.8713,0.1353,0.1353);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#B3A793").s().p("AgwEAQgYgCgLgeQgWgjAAgIQgDgjAUiHQATiHAMgcQAMgaA0ggQAegSA1gbQAVAJgGAkQgDATgKAjIgZCeQgPBegRA/QgFATgEAgQgJAWgjgIQgFAggXAAIgCAAg");
	this.shape_309.setTransform(11.9605,71.0887,0.1353,0.1353);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#7F7363").s().p("AjDCZQANgmACg1QAAg3ACgYQAIhVBUgcIAnAfQgYBkADA3QADAvASgLQASgKAJg3QALhBgMhUIArgeQC7ACgOCXQgFA1gbAzQgaAwgRAAg");
	this.shape_310.setTransform(14.3628,52.5548,0.1353,0.1353);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#4380A6").s().p("Akmk8QDYA5CODEQAuA/BFB4QBQCOAkA3g");
	this.shape_311.setTransform(27.2198,3.0544,0.1353,0.1353);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#4A433D").s().p("AkbDTIAKggQAGgUAGgNQALgaAYgjIAfgxQAsgUCJhtQB2hfBHgPQAPgOAJgBQALgCAIARQAjAJgBAaQgBANgFAOQAGAFAQgBIAQAAQACACgXAnQgYAngDACQgOAIgmgCQgqgCgQAGQhsArhCAWQgUAHgVATQgaAYAdAKQgNAIgdAfIgzA2QgxAuggAAQgNAAgKgIg");
	this.shape_312.setTransform(-24.6439,55.9012,0.1353,0.1353);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#2B2928").s().p("AAFC0Qg5gBg0gQQiSgqA/hmQAEgGCmhPQClhQAVghQAYAJAKAuQAJArgKALQgIAHgwgRQgwgRgFAFQgJAXAXAXQAZAZAAAGQAAAHgZAVQgbAYgFAQQgFATABAyQACAtgCACQgKALgvAAIgJAAg");
	this.shape_313.setTransform(28.1828,52.6298,0.1353,0.1353);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#2D2A27").s().p("AjrEBQgNgIgZg8IgghRQBehvDAhjQAtgYB3g4QBogxA5gfQgGATgDAZQgEAVgVATQhCA6jGBiQjEBhhJBCIBXgBQAogmCWhXQCfhaASAPQACABACASQACAQAIAEQAGgDADgKIACgKQAIgbAOAbIAAAsQATAUgTARQgUARgXgLQgBgHABgPQAAgPgBgGQgjAKgRBWQgRBWggALQgqAOhagXQh0gfgVgBICZBXQgbgHhVAUQgtALgbAAQgUAAgKgGg");
	this.shape_314.setTransform(7.8591,62.3174,0.1353,0.1353);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#13110E").s().p("AiyB3QgIhEgEgSQgKgugWgcQgrgCABgOQAAgNAqgPQCbgmCagFQBAAPAPgEQANgDgagOQhGgmhDABIgTgtQgMAdgMABQgNAAgHgeIAAgVQAZgDA0gQQAzgMAuAJQBSAPAlA9QAnBAgmBOQgiBFiogjIh0gdQg3gNgIAIIAVExQg1gjgMhug");
	this.shape_315.setTransform(-40.8345,59.0302,0.1353,0.1353);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F5F2E7").s().p("AhhCGQgqhcgPg3QgbhmA3gkQAfgUAzACQAvACAxAUQB0AwgEBRQgrBchJA7QguAlgjAAQgkAAgcgkg");
	this.shape_316.setTransform(-51.0928,66.7007,0.1353,0.1353);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#6D655B").s().p("AF/DwQgzgEhXg3IiIhVQi6hZhegtQinhThihNQAEgCAHgSQAKgRAPgEIA0AGIMQHBIABAAIgSANQgSALgQAAIgCAAg");
	this.shape_317.setTransform(65.4912,51.696,0.1353,0.1353);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#71665B").s().p("AkJBgQg7g7BIhEQAtgsChglQCWgjBPAGQABAJA1AmQA1AmADAYQgjgFg2ARQhDAUgSABQgMABgWgMQgVgNgNACQgSAChUAXQhYAYgEAFQgIALASAvQAQAvgEAEIgTABQhMAAgxgvg");
	this.shape_318.setTransform(-80.9085,66.293,0.1353,0.1353);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#3C3633").s().p("ADOCwQgWAAgIg/QgKhHgNgJQgZgShxAbQh7AegegIQgigJgcgwQgbg1gOgRIAggwQDAgKC4g2IAyAZQATA7AFB7QAGCQgpAAIAAAAg");
	this.shape_319.setTransform(12.3184,-6.8687,0.1353,0.1353);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#79ADCD").s().p("AiXFXQABgVgMgtQgLguABgbQAFhmA5ilQBCi/BCgjQAZg1AbgNQAggOAvAkQAuAMg6BKQgmAygqAVQgtAXg6gFQAqBigVCHQgNBZg0CSQgOAogHAGQgEAEgHAAQgNAAgUgRg");
	this.shape_320.setTransform(-43.264,27.2259,0.1353,0.1353);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#37332F").s().p("AlGBfQgfgGg5hGQg3hCABgUQAAgPAdgLQAXgIAYgBQA6gDBUA/QBbBCAyAHQBeANCbgNID8gXIBNBCQh2gXkfAhQiuAThrAAQhEAAgpgIg");
	this.shape_321.setTransform(-41.0409,77.8542,0.1353,0.1353);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#1A1914").s().p("AgFAdQjgjZhMhAIALgSQAHABALAHQALAJAEABQAuA1BxAfQCCAkAwAhQBMA1BGBwQBHBxANBcQhkgtjTjFg");
	this.shape_322.setTransform(-3.3648,-35.3421,0.1353,0.1353);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#A38D6C").s().p("AiDBTQg2hTgIhAIBBAAQgGgvAGghQAEgcASgtICCAVIgrAhQAqATAGALQAFAJgTAJQgbALgPAHQgbAOgIASQBWABAYACQBFAFAmAOQBRAghUA4QhzA+gYAXQgNAOgPAdQgRAjgIAKIhbiHg");
	this.shape_323.setTransform(-40.3344,63.7838,0.1353,0.1353);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#302C29").s().p("AiPABQgehsgBgrQC0gMBAAcQBhAqAICfIkxBYQAMg+gZhcg");
	this.shape_324.setTransform(-45.3307,85.9214,0.1353,0.1353);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#4D4943").s().p("AhGCBQgegbgTgOQhIg0hCAxQgpgpC7hfQBBgiBKgfQBCgbASgDQAogHAmAqQAnAtAlgBQgBABAAARQgCASgNAIQkKCogQADIgDAAQgMAAgXgTg");
	this.shape_325.setTransform(28.7973,-19.2264,0.1353,0.1353);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#2B2927").s().p("AiYELICOoMQAKgRA9AMQBHANAVgHQgSAqgbBwQgeB9gSA1QhBDAh8AAIgXgBg");
	this.shape_326.setTransform(38.5943,32.6902,0.1353,0.1353);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#4F3F2D").s().p("Ag/DYQABgWgFgHQgHgLhHgOQhSgQgMgFIAAgVQgUiMDVhYIADghIAAhtQBlAHBiCCQBeB8gJBiQgHBIhQgrQhghCgjgJQgogIhIAFQhDAHgogNIAABCQBagHBNAKQBPAKBRAfQAPAShgAjQhQAdgjAFQgBgHADgcg");
	this.shape_327.setTransform(-37.6458,65.1168,0.1353,0.1353);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#403B36").s().p("AmAA1QAZgBBJAPQA5AMArgNQAcgJBohbQBihXATAAIE9AAQAXAUhUA6QhRA1gXAAQgdABgXgnQgZgsgUgFQgBAMASBDQAQA4gNAPQgKAMhOAOQhSAQhZAFQgjACgdAAQi3AAgQhFg");
	this.shape_328.setTransform(-38.6458,76.0673,0.1353,0.1353);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F7F8F6").s().p("ACdEyQgSgBgKgOQgNgSgMgiQgNgogJgVQgehOg9gkQgpgYhKAQQgbAGgKgEQgNgGAAgfQAKgiARiJQAPh9AEgGQADgDAtgJQAzgKAIgCQAFAQAMA7QAJAxAKAYQAGANAUAKQATALAEAJQAWA+AhCRQAjCXAVA9IgMABIgGAAg");
	this.shape_329.setTransform(-30.5527,93.0434,0.1353,0.1353);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EFCE63").s().p("ADPDpIhthzQhKhNh9h4QigiYgsgrQAPgJAdgWQAYgTAOgGQAqgTA0ApQBdBJCODmQBOB9B6DZQgggghDhIg");
	this.shape_330.setTransform(42.7354,11.0557,0.1353,0.1353);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#322D2A").s().p("Ai4D7QgJh0AhgtQAng2BwASQADgKgMgGQgNgEAAgBQgogTABgiQABgiAmgWIAKgHQAIgIgGgGQgagbhRACQhzAEgJgCQgEgDATgcQATgbAKgHQDAgbDIgmQALACAcAYQAaAWAAAGQAAAGg2ArQhIA4gkAjQiLCIBpA+IgOAUQgRAUgSAIQghAOhFAXQhHAYgNAAIgEAAg");
	this.shape_331.setTransform(24.2537,-14.0801,0.1353,0.1353);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#7EABC5").s().p("AsBmTQA+ANBoAiQBfAhBDAdQFhCFFDDYIAsAVIHBEDQA/AjggAig");
	this.shape_332.setTransform(-78.9467,34.6743,0.1353,0.1353);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#9E9282").s().p("ACNDCQg8gQjXibQjCiMhLhGQAZgUAaABQANAAAmANQBPAaCVBnQCVBoBSAdQAvARBQALQBYAMAfAIQgJBGhkAQQgdAEgcAAQgxAAgwgNg");
	this.shape_333.setTransform(-3.808,-7.8438,0.1353,0.1353);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#A69B88").s().p("AF/EqQg8jwhVi8Qjon9lHA2QgYAEg1AfQgqAYgcgJQDwjuD9DxQBgBcBZCYQBIB8AzCIQA1CKAiCmQAYB3AZDCIgVBBQgQifgxjFg");
	this.shape_334.setTransform(77.1634,57.5925,0.1353,0.1353);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D8C4A1").s().p("AAHDSQhUgNgDgDQgPgPgLjLQgKjKALgNQAgAcBIgNQAjgGAigJIABAAQARALAHDRQAIDiALAhQgTgShWgMg");
	this.shape_335.setTransform(-45.6657,52.2571,0.1353,0.1353);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#82796D").s().p("AjThHQgKgbgMgRQgngsBShLQgngdgEghQgEgcAYgVQAWgUAfABQAjACAXAdIAAAAIBBBCIhXAKQAXAdAyARQBFAZAKAGQgBCnBpCnIgmAkIgQATQgOASAIAHQAGAFBSARQBQAYAGApIiYAsQiSkKifiqg");
	this.shape_336.setTransform(-22.0694,-41.0402,0.1353,0.1353);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#292522").s().p("Ag4DZIAAABIhXm0QDHgNA5AxQBFA7hSC1QgTApgzA+QgxA9gZAAQgHAAgFgFg");
	this.shape_337.setTransform(8.0454,72.6576,0.1353,0.1353);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BBB29D").s().p("AhtBpIjbiYQBIADDWgxQDNgwBBAHQAgADAaAdQAPARAZAmIAAAAQAVBLiqA4Qh1AniCANg");
	this.shape_338.setTransform(9.652,-10.3317,0.1353,0.1353);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#AC722B").s().p("ADtFRQgwgphLhVQhRhbgdgaIjXjEQiEh2hZhDQgjAZgehFQgsALAWg3QABgBgCgYQgCgTAOABQBAAoBTBMICJB9QALAJAVAFIAWAHQCgBeCkCOQCaCFCFCaQAOAHAYAOQAXAJAagIQg0Aeg2AAQhZAAhghSg");
	this.shape_339.setTransform(-5.1892,-36.6367,0.1353,0.1353);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#15232B").s().p("AJzBLQj/jEkBh7IgQgyQgWgbhDgrQg6gkgVgvIw1AAQAPgWApgCQAWgBArADQCigBFbgIQEzgDDHAMIJWGgQBgBRDFCbQCqCNBfB8QgDACgHAIQgIAJgDACIgwALQjajkjoixg");
	this.shape_340.setTransform(-69.1184,36.1544,0.1353,0.1353);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#44403B").s().p("AhsBvQgmAAgthNQguhKAKgsQBQgSCTgHQCugIAYAgQAQAWAJBHQAGAxABA2g");
	this.shape_341.setTransform(-19.1883,-20.47,0.1353,0.1353);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#453F38").s().p("AhLBiQh8hKgdi5QDHgOBmBMQBiBJA6C/QjQgKhgg5g");
	this.shape_342.setTransform(-55.8188,76.9165,0.1353,0.1353);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#38729A").s().p("AgGgMImikkINRGKQAEAEgRBfQgSBmAAAPQijiTjtirg");
	this.shape_343.setTransform(-54.051,36.596,0.1353,0.1353);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#618C9C").s().p("AC9FFQgggCAHghQh4jbitiKQi1glhdiAIC6A2QBmAXBfgMQAygGA/grQAjgYBCgyQA5glArADQA3ADA3BCQgTAKhKgEQhIgFgFADQgDABhABWQhBBWgWAMQgFAYApBAIA7BeQAOAeAOBIQASAyAvgcQACAAAKgjQAOgdAWAbQAOARgcApQgaAkgZAPQglANgWAAIgDAAg");
	this.shape_344.setTransform(-1.4414,-35.6003,0.1353,0.1353);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#393531").s().p("Aj2kzQBzgqBFBBQAqAnBLB/IBoCXQBVB+ACALQAFAUgiA1QgiA0AHAeg");
	this.shape_345.setTransform(25.0885,35.1598,0.1353,0.1353);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#DAC7AA").s().p("AAuCeQhzAAgNgIQgNgIg3iVQg5iZANgMQC+gSBdBaQBWBTAXDBQgigSh2AAg");
	this.shape_346.setTransform(-58.0502,72.04,0.1353,0.1353);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#D3563C").s().p("AjYC8QgJhTAPg9QAOg7AuhEIhCgLQBLhAAxgWQAugVArAJQAdAFA+AfQBVArAvATQgaAYhKAgQhGAfgbAfQgWAbgSAsQgVAxgJAMQgbAohIAAQgfAAgngIg");
	this.shape_347.setTransform(22.0202,-20.3289,0.1353,0.1353);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#312D29").s().p("ApEExQCMhMFzi/QFOivCQhrQAsghAJgJQAagcABgjQAdANAhAjQAoApgOAUIxNJOg");
	this.shape_348.setTransform(22.5148,53.1537,0.1353,0.1353);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#692820").s().p("ADjBzQhDgfgggNQg4gXgogFQgqgFgvAEIhMALQhaALhRgiQhLgegcgeQgngoALg/QAxgBBuAhQBcASAWhHQBGBJBeAmQBpAqBagWQAjAXBdAwQBTAxAeA1QgWAFgYAAQhHAAhegog");
	this.shape_349.setTransform(-41.5039,-0.0161,0.1353,0.1353);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#835A37").s().p("AjDF4QAygQA6ADIBsANQAFgMgVgQQgPgNgLgDQgvgbAbh6QAXhwAogsIAlAOQAXAEAFgeQALg3hVACQhfAPgVACQgcAGgLgCQgWgCAMgeQAWg1BnALIBUAMQAwAFAagIQgEgdg9gOQg8gNgCgTQgDgaAjhXQAWg4Aeg9QAggcBMAGIgFDJQgOBUg1DkQg6D9gUAcQgDAFglAIQgoAIgpAEQgVABgSAAQhPAAgCgjg");
	this.shape_350.setTransform(10.5234,40.9649,0.1353,0.1353);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#121415").s().p("AHzCNQlCh3kZhZQmRiLmXg6QANAXAIAVIhtgXQhCgOgrgHQAgADAIgCQASgDAIgUIADgaQACgSAQgVIBKgQQISBhHNCMQInCnGKDUQAyAbA5BHIABAAQAcAJgcANQlwiPjlhVg");
	this.shape_351.setTransform(3.9718,15.0582,0.1353,0.1353);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#73A7C4").s().p("AHfEvQiiiOl7icIkjh3QiehEhghAQg7gngEgHQgIgOAUg2QALAJAXAFQAaAGAGADQBNAKA+ASQBSAZApAiQCeA3ChBMIAdBBQCMgIAMBUQEGCfDxC0g");
	this.shape_352.setTransform(15.2987,10.1457,0.1353,0.1353);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#2A2725").s().p("ACtBrQh5gChGgHQjdgWh5hqICDhMICVgEQBegDAyAIQAiAGAoAaQAXAPArAfQBPAzBNgrQgDAVACArQADAvgCAUQgugDiNgCg");
	this.shape_353.setTransform(-36.6027,83.5521,0.1353,0.1353);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#262321").s().p("AnDDZQCDhJD8ihQDkiLCug+QgzBBhwA+IheAxQg5AegiAWQgbAJgOAIQgcAPAaAWQADADAmgMQArgNANAAQAbgBBRACQBEABAogEQAdgDB1gfQBZgNhGBRQg0A+jkATQj6AKhEAJQgWAChxAdQg8AOgtAAQgSAAgQgCg");
	this.shape_354.setTransform(16.9278,77.9867,0.1353,0.1353);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#2E2A27").s().p("AgCFWQgegggKgeQgUg5gjinQgjilgFg9QgFg3AXhXQAbhnAoAoIAAgBQACADADAnQAJAqAdAPQAXAMA3gBQA0gBABABQAFAFAHBpQAHBlgCANQgHA2hLCNQg5CJA4BiQgfgQgbgeg");
	this.shape_355.setTransform(-32.492,63.857,0.1353,0.1353);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#24201C").s().p("AHVGwQgZgTg+h5Qg5hvg0gXQgTgSgXhHQgXhHgHgIQgFgFgagHQgcgHgKgIQi/iXiAhDQjJhqioASIA1gvQAjgfAVgJQBogNB/AyQBPAfCFBNQgkgcAeg0IBAAKIBCAMIgsAhQAOASBIBBQA8A3ANAgQAJAWgFAeQgEAeACAGQAdBLBVB3QBaB9AdBCQApgGgLgxQgGgbAAgIQABgQASgDQAJAYAMBBQAMA7ALAaQgRgDgfAXQgWAQgLAAQgEAAgDgCg");
	this.shape_356.setTransform(86.3253,40.96,0.1353,0.1353);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#4B3F2F").s().p("AAFDPQgXgBgdgSQgdgRgEAAQgKgBgbANQgkASgLAEQg8AVAChAQAUgLA5gvQAzgpAggOICng8QhGgIhpg+Qh1hFg5gOQAjgFBIgRQBGgRAjgFQB2gOBKBPQA5A7ANA0QARBChigYQgBAVAkAFQAoAEAJAbQAnBthXAaQgdAJg7AAQgnAAg1gEg");
	this.shape_357.setTransform(-35.2195,71.0419,0.1353,0.1353);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#423C38").s().p("AALJEQidgoiMiwQiQi0hCj6QAmAxA1BeQA7BqAcApQCSDQCTA7QC+BMCOjUQBqifAekKQAXjPgYj3QgFg1AagNQAaDEAFBlQAJCdgUCPQgvFRiICTQhcBkh3AAQgmAAgogLg");
	this.shape_358.setTransform(77.2415,73.549,0.1353,0.1353);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#7CABC6").s().p("AgIgMQjrirlvjmIgBgtQCtAKBDAMIABAAQBgg0gJBgQAIACAOAJIAWAKQBtBzFDESQEaDvCICpQADAHgcAJIgoAQQjrjtk/jpg");
	this.shape_359.setTransform(-60.9898,36.0073,0.1353,0.1353);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#695F53").s().p("AjiCZIgWhYQAYhNCBgEQghiWBjgzQASgEATADQAKgCgEgpQCKCCA1BoQBHCLgsCWQkIhhjCgMg");
	this.shape_360.setTransform(39.5946,-17.7797,0.1353,0.1353);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#312D2A").s().p("AggEQQg6gwgshCQgshDAEgiQADgeA7gnQBCgtAOgcQAHgQAGgrQAFgnAOgXQAMgWBCgsQBCguAfgGIAAHUQAAAEgLATQgMAUgCAJQhHAWhEgzIg3gsQghgZgegIQAWBGBVAtQBMApBNgDQgQBRg5ABIgBAAQgvAAhAg1g");
	this.shape_361.setTransform(80.254,71.7312,0.1353,0.1353);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#6A6259").s().p("AjfJOQgoAGgEgQQACgfgCgZIAbheIE+lEIAvADQA+A3Adh0QAQhAAChnQAFimgfhXQgdhRhEgcQg5gZhsAGIjqAVIBBhYQA1gECWgVQCGgKA5AtQBRBAAaEBQAVDPgTCWQgFAmgUAcQgaAfgQAWQggAjghgJQhEBPhfBbQg4A1h2Bpg");
	this.shape_362.setTransform(59.0622,42.2055,0.1353,0.1353);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#2D2927").s().p("Ah5FKQgMgKgGgTQgRg2gGiCQgFiAgTg5QgDgMAJgIIAPgKQAfgDgCAUQDAjNB/g0QgCAdAGCOQAEBvgNAzQgHAZh7CdQh5CdgQAEIgJABQgNAAgKgJg");
	this.shape_363.setTransform(-21.5033,20.4953,0.1353,0.1353);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#33302C").s().p("AEAEdQhlgDg8gLQh0gVjYiUQhghBhqhYQiRh3gRgyQgCgIACgZQADgYgDgJQAPAOAdAeQDKBPC4CgQBrBWBdATQBpAUBzg7QAVAFAWAbIiYCOQBrgQBMhIQBWhSgxhZQAKAQCEBPQB6BLgZAYQgLAChVAJQhLAHgEAEQgEAEAPAjQAJAjgiAKQgeAJhGAAIg2gCg");
	this.shape_364.setTransform(-1.7172,-7.1019,0.1353,0.1353);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#4B443E").s().p("AhIJ5QgmmeANmvQgehRAKhdQALhlA4g6IAOgNQANgOgGgRIhXgVQAsgeBBALQAhAGA2AMIApAYIhCJpQAUBmAAAzQgBBTgmA9QAkAQAIAyQABBGhDBTIgMAoQgHAXgCAYg");
	this.shape_365.setTransform(54.9559,44.8736,0.1353,0.1353);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#544B42").s().p("An3AgQgQgEgWgOQgWgOgEAAQCvgYEfAUIDpARQCGAJBigCQAggGAYgcQAKgNAcgvQAWgnAUgQQAdgZArABQgHAbgFAyQgGA5gEATQgEAVgRAvQgMAuALAmQg1ACg1AAQm6AAnfh6g");
	this.shape_366.setTransform(-53.6062,29.5165,0.1353,0.1353);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#62251E").s().p("Al8DEQgOiPA0iBQA0iABrhbIAAAAQBYgoAHAvQAFAlgsBQQgZBOALAeQAOAnBLgoQAphwBHg8QBThGBuALQANAFA4AMQApAJAVASQgGAUgJAFQkVCcAQAPQAIAGAGAQQh6BMgtAfQhWA7hJA/QgMALgmAtQghApgSANQgNAIgLAAQgnAAgMh2g");
	this.shape_367.setTransform(21.579,-17.6124,0.1353,0.1353);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EBD6AC").s().p("AmcB8QhVgeA2hYQAohABJg0QBLg1BKAiQANAGA2AfQAtAaAiALQBJAYCXAXQChAYBEATQAZAHAVABQAFAEgYAmQgPgBgHABQlTAohcAIQiCAKhdAAQh9AAg4gTg");
	this.shape_368.setTransform(13.078,27.1672,0.1353,0.1353);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#7E7366").s().p("AmqCpQA1gsBag7QCSheD4h+QE/ihBBAZQAFACAJAQQAJARAEAEQAXAZACAYQACAUgNAKQgMAKgRgIQgSgKgLgcIgsA6QkABtjoCfIEFhKIA1AfQAvgIAIAkQAJAlgqAXQiSgJkKA/QilAngtAKQh1AYhaAEQAog8BRhBg");
	this.shape_369.setTransform(32.7126,-17.9148,0.1353,0.1353);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FCFCFC").s().p("Ag/CuIgKgiQgKgkgOgQQg2hEhCgQQgsgKhsAGQgGgFAMhTQAKhRAGgFQADgEBNAWQBWAYAUABQAtAECPgPQCDgOAYAHQAtANBABuQAiA6AvBiQgugcjDAlIiCAbQgsAJgOAAQgEAAgCgBg");
	this.shape_370.setTransform(3.119,-0.6333,0.1353,0.1353);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#7AACC9").s().p("AEKCbQhxgXhLgcQhSgeixhSQjAhYg0glQgQgKgIgHQgMgKAAgOQAfAPBEgRIBMgUQAkABBRAVICUAmQC7ApAxg4QAiguA+A9QAiAhAxBNQArBCANAlQAVA8gQA8Ii9gqg");
	this.shape_371.setTransform(41.3036,24.4772,0.1353,0.1353);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#2F2D2B").s().p("ABUDyQgwjVhrjzQgqhggcgzQgbgzg4hWQgqgvhVhMQgqhDAXgYQAUgVA2ATQA1ATAkAoQApAugOAtIAAABQAogUAHAPQAHAPggAhQA2CSCLEBIDhGbIBDCAQAsBXAHAoQALA6hrAuIhZAiQgxAUgTARQAQjpg5j5g");
	this.shape_372.setTransform(-22.7842,-34.9634,0.1353,0.1353);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#2D2927").s().p("AjTGwQgBhCACgxQACgoAejYQAYiqgKhMQgCgWgYgOQgZgPgGgVQgIgdgFgrQgFg0gDgPQgOhLg+gzQAMACA3gEQAugDAPAJQAIAFA9B2QBGB7A1AgQAMAIAgACQAcACAKALQAKALBjCbQBjCZAGAOQALAcADAdQACARABAoQAEA1gBAGQgCAqgXgCQhqjmhtixQgVgqgRgZQgggvgUAUQgZAXhEEwQhLFKgSApQgLAAgCheg");
	this.shape_373.setTransform(23.1096,38.3521,0.1353,0.1353);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#6E96A9").s().p("Ai1DHQjLhtiliQQhOhFgggnQgqg0gihQIAAgWQBtBwB3BbQBsBTCRBVQA7AjBTA4QBIAnBlACQBkABBog6IBQgsQAugXArgHQDBgeA6AlQBIAvgeC5Qg2gJgBhqQAIhngHgBQgWBAg6ADQhJgHgnAKQgZAHhYBMQhUBJg2AKQgZAFgdAAQiNAAjYh2g");
	this.shape_374.setTransform(-4.9342,-42.4519,0.1353,0.1353);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#332E2B").s().p("AE8DbQgOhhhwAGQhdAFhRA5QghglgagQQgggUgsgHQgIABgOgBIgWAAIjEh3QCZkJDTBGQC0A7CQD+QAOAZAGAlQAHAoAEAIg");
	this.shape_375.setTransform(74.8019,53.127,0.1353,0.1353);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#2C2826").s().p("AlDD1QAsgXAKgOQAJgOAqhKQAqhKACgHQAFgVgMgpQgKglAIgPQALgSC9hpQDBhqALALQgEAjBLCJQBFB/gRAcQgMASidBNQiqBTgWASQAHijgKgyQgQhVhkB9QgSAXgZAtQghA6gKAOQg2BUhFAOQgHgjAdgPg");
	this.shape_376.setTransform(22.0027,57.4197,0.1353,0.1353);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D3C3A7").s().p("AijEuQhggIhzgtQiVg8AKhIQAVgbAIAAQAGAAAXAMQAbAJCUBMQCMBDAUgRQATgQglgeQgxgogEgHQgJgSgZhgQgZhgABgOQACgwBuhWQBrhTA2gEQA7gFC1ARQCmAPBSgMIABAAQAHAkgXAIIg1AHQhTANhvACIjEAAICvDaIguARQgSgcgogYQglgXgkgGQgmgHgLASQgMAUAcAuIgJBJIhshsQgDAaALBCQAPBVACAaQAJB8hYAAIgLgBg");
	this.shape_377.setTransform(-41.3309,43.7283,0.1353,0.1353);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#2A2625").s().p("AAbC0QhegYhegoQhWglgLgRQgLgRgFhVQgGhcgKgZQBjAdCDgaIBvgZQBFgQAvgGQgWA4BGB5QASAeAhA1QAZAqAAAOQABBXh1AAQg7AAhZgWg");
	this.shape_378.setTransform(72.0886,65.9209,0.1353,0.1353);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#EECD6D").s().p("AOEENQgHgBg1gLQi+gqjshHQhbgalGhnQoYinlOg9QgrADgPgBQgZgDAIgrQAjgUChAPQBeAIB9ATQAcAHAQgFQATgHAKgaQBRAKBABBQJ9BtJVEbIAgAsQgNAYghAAIgFAAg");
	this.shape_379.setTransform(-3.8197,14.6661,0.1353,0.1353);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#2D2926").s().p("AmIAXQAWhTgLg8IMngqQhiBPhpBJQiVBog+AQQg1AOiiAHQiWAIhIAZQADgWAeh3g");
	this.shape_380.setTransform(20.7172,69.2512,0.1353,0.1353);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#574F46").s().p("ABBDIQgFgJgGgcQgEgUgJgDQgUgGhBAEQhSAEgPAAQgdgCgRgDQgXgFgSgMQABgcgLg4QgMg9AAgHQgCgfABg4QABg9gBgbIGfgWQAFCgAVBWQAFARARALQAJAGAIADQABAEgBAHQgBAIABADQAvBAgvACQAEAqgEAJQgGAPgkALQglALgbAAQgrAAgPgeg");
	this.shape_381.setTransform(-12.9658,-12.0129,0.1353,0.1353);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#73685D").s().p("AwVEMQgJiPAehQQAbhIBCgjQA2gbBpgNQBAgICagOQEGgeIQhAQHQg1FIgcQA9Ayh+AlQkqAbmuAvQnjA2jwAZQiJAMg+AHQhpANg9AbQicBEAHDog");
	this.shape_382.setTransform(42.1193,38.5887,0.1353,0.1353);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#35302C").s().p("AJZFpQgJAAgIghIgRhIQgZhognAAQiNgSkDgCQkfgDhugJQj0gVhvh2Qgxg1guhbQgXgwg/iUQA6gFAtA4QAaAgAuBGIAAAAQBNBYALAIQAmAbBcAIQAJAGAkApQAhAmADABQBGAPC3gIQDlgJAnABQARABATALIAQALIqjAAQgEAOAwAQQApAOANAAIPAAAQAHAABUBXQBbBTAvgRQANAQhrA8QhjA3gfAAIgEAAg");
	this.shape_383.setTransform(-50.639,81.6604,0.1353,0.1353);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#766D62").s().p("AvVG/IAWgVIeAvhQBIBWimBMQhlBEmFDWQmgDkgkgEQgNgCgUgMIjFBtQi0CfjyBlQhgBPhdAhQgfhIgigxg");
	this.shape_384.setTransform(16.1385,56.1005,0.1353,0.1353);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#534C46").s().p("AMABzQiriIjvAuIgggrQhegCjIADQjBAChlgDQkngNkgACQgxgJgUgVQgZgaAWgqQDKARGTgPQGkgPC7AMQA9AEBeAQICdAdQC/AeB2giQAOA+gCASQgBAOgLA5QgHA5guAIIgQABQghAAgugTg");
	this.shape_385.setTransform(-44.134,82.3637,0.1353,0.1353);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#74695D").s().p("ANZB/QrshysPA7QhEgEg9gvQgTAkgsgBQgoAAgsgbQgsgcgVgkQgYgpARghIANgVQAkAAAyAlQA1AoAoAFQAXACAXgJIAYgKQBbABEeANQDqAKCQgCQAzAAFzgeQEmgYBxASQANADAUAXQAWAZANADQAeAIAbgLQAOgGATgKQANgFAJAUQALAXAPBHQgbBChcAAQgZAAgdgEg");
	this.shape_386.setTransform(-45.6733,80.3464,0.1353,0.1353);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#5B4832").s().p("AkKGAIgWAAQhGgogGhtQgFhcAlhWIBcgZQDJAoBtgUQCZgcjEiZIgKggQAKg9gQglQgLgdgigYQgngbgTgQQgfgcgMgoQAKgJAyAUQAPAFBdArQCgBHApgUQgZANgNAFQgZAKgXgHQASA/BdgeQAYgIArgSQAhgMAHAFQhIDcgSBaQgkC1AmCNQhmhMhqgnQh3gsh0AGQgQADABARIABAYQAXAaABAvQABArgQAlQgRAmgZAEIgFAAQgZAAgYgqg");
	this.shape_387.setTransform(-39.3463,57.6944,0.1353,0.1353);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#2A2725").s().p("AjsEkQhRgugqhHQgGg0AGgkQAgg9BVAnQAYAMAxAbQAtAXAbAEQgJgehqg7Qhug9gZgvQgOgbgQh6QgPh6ALgMIDxAAQgGAhAGBFQAFBQgBAZQgFB0htgQQAAALANAOQAMANAKADQAaAEA/gZQAcgKBjgvQCzhSA3AOQAIACA6AiQA6AjADAEQAMAUAJBBQAIBCgJAIQgPAPjTASQjOARgvgGQAGARAKBgQALBjgFAHQhcgShFgog");
	this.shape_388.setTransform(68.8811,61.7133,0.1353,0.1353);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#463F38").s().p("AG4DlQgKhXAVg2QgUgPlMA4QkrAyhfAYQgiAJgqAYQgpAXgMADQgYAGgSgWQgUgYgXhEQA0gYAjgUIDwhSQEogBERhFQg6ANiwAMQjJAOgMgPQgVgZAEgRQADgSAcgPIGajpQAVgHApgYQAlgTAgAHQASDRgECiQgEC3ggC7QgZhIgIhHg");
	this.shape_389.setTransform(16.5336,79.4335,0.1353,0.1353);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#2F2B29").s().p("ACZCdQh2gUgmgDQg1gGh2AHIgJgIQgJgHgKABQgKAAiYAXQiAATgJgHQBbjyDlhNQDPhGECBVIAAAAQAJADAiATQCMA+AjCFQgngYhUALQheAMgIgCQgMgDgXgXQgZgYgPgHQhfgmg3gKQhVgPhGAgQgdAMgRAdQgTAfAQATQATAWAVgcQAMgOAOgXQBPgQBOATQBFARBOAtIAWAWIAAAWQgRAqgYAOQgIAFgHAAQgUAAgLgng");
	this.shape_390.setTransform(-15.1859,49.8392,0.1353,0.1353);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#D45239").s().p("AAhDxQhwghhKhAQg5AqhjgQQhjgPgdg7QAFgcAlhjQAmhmAKgHQAJgFC5gRQDCgRAdgIQAZgvAugNQAfgJBCAEIABAAQAHAHArBaIA7B5QAIAPAxBKQArBIgNANQhKgFg5hSIguhEQgbgpgZgWIgLDEQhCg+gqgrQg4g5grg3QANBbgQgFQgEgChGhHQgNgNgQAOQgNAMAAAGQAAARCRB1QB2BeA/AsQgSAxhBAAQghAAgugNg");
	this.shape_391.setTransform(-41.4681,-3.1176,0.1353,0.1353);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FCFCFC").s().p("AhDD8QhIgPgZgCQgUgBgfAKQghAKgJAAQhAABAjg5QAIgNAbgiQAWgdAFgLQAKgYANhFQALg9ASghQAKgSBShTQBQhTAKAAQAVAbCBBMQB9BKAKAPQAMATgTByQgTBvgNANQgGAGhlAgQhkAggRABIgUABQghAAgugJg");
	this.shape_392.setTransform(-6.8951,-2.6681,0.1353,0.1353);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#3C769A").s().p("ABOosQAJA5BAEyQAuDdAJCPQgjAhitCdQiBB1hKBPg");
	this.shape_393.setTransform(-19.4928,31.7207,0.1353,0.1353);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#1E1C1A").s().p("AHRENQiNg4hBgQQgQgEihgXQiNgUgHgJQgHgJADgyQAEg5gCgMQgQgGgOANQgMAOgCAAQgDAUgIAKQgOATiLgkQiDgigggVQgJgSgogmQgugqgOALQgFAfgdAdQglAfgRARQAgAagVATQgUASgigUQgLgTgEgKQgIgSAKgRQA2goBdhnQBbhjA7gqIAngHIMNGiIA0ADIAnABQATABAdgCQAHgrAMAAQAMABANAqQAkgCAeARQAiAUgNAeQgXAMAAAmIACA7QgVAEgZAAQhEAAhfgfg");
	this.shape_394.setTransform(64.9438,52.9751,0.1353,0.1353);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#316281").s().p("AjCDEQhxhticjkQixkDhPhaQApAPAagmIAqhWQgXgYAGgLQAGgKAgACQAJAMAYAeQAVAcAMARQDLFADqEiQARAQAuAzQApAqAaABQCLB5CXBdQCjBlCeA4QASAMARASIAfAjIgNAYQgIANgMAGg");
	this.shape_395.setTransform(-57.7439,50.9194,0.1353,0.1353);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#716659").s().p("AgjCOQj/gQjUgbQgogLgngCQgygCgXAPIgWgrQEehkF+g0QDGgbHngnQgFAOgSAoQgQAigFAVQhOCLh7BNQkWgJi9gMg");
	this.shape_396.setTransform(-54.4892,28.1649,0.1353,0.1353);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#312D2A").s().p("AgkDNQhmhMhiiPQhYiBguh7QAgAHDJgJQC8gIAOAKQAFADAcA6QAjBIAdAsQBnCeBqgeQhKDBhzAiQgYAHgZAAQhPAAhahEg");
	this.shape_397.setTransform(76.4259,76.2679,0.1353,0.1353);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B99867").s().p("AjhFCQhGgrApgtQAKg2ArhfQAthlAhgfQAggcAPgFQAUgFAqAOQAcADgOgUQgNgSgogaQhnhCghASIAHA6Qi2B/BDCMIgXAtQg0A3g5h5QgTgpgJgWQgPgoAIgbQARg+B2h6QA0g1B5hwQAUAuATAOQAIAHAzAUQgCgUBfANQBfANAPAPQAZAXgKAdQgKAdgiAIIgNAJQgIAIAVAEQBIACBaAcQBdAdA0AnQA8AsgVAnQgYAuiEAfQhfBZhJgUIghAWQgVAPgMAHQgBAihGAsQhBAogrADIgLABQgyAAg5gig");
	this.shape_398.setTransform(-40.1004,70.6686,0.1353,0.1353);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#2F2B28").s().p("AgNGeQgpgehXjCQhajRgXguQgKgVgqgxQgmgtgDgMQgDgNAqhmQArhmAMgKQAhgZA6AMQBOASASgCQACAjgnAlQgvAtgIATQgkBYAfCPQAbB7A7BiQAEgtgPhBIgehzQgmiQAthPQBDh1CPAiQAdAHBgAiQBPAcAtAFQgaAkg8AmQhKArglAXQiNBVgKBcQgCAUAOCOQAOCOAFALQAJARAgAVQAfAVAUACQAZAEBFgVQA1gKgJA1QgQgCh/AFIgWAAQhNAAgggXg");
	this.shape_399.setTransform(4.9228,25.4029,0.1353,0.1353);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#635B51").s().p("Ar8HBQgKgQgCgGQhCiXBCgCQA9gnBChVQBch1AVgVQApgJAFAKQAFALgdAfQBYA7gXg7QAYjxBVjuQAOgHAXgZQAYgTAaAHQgMCZglDgQgEAbgaA3QgQAvAeAdQApAoBOgbQAGgBB0g4QCehMEUijQFBi+B1g+QAeAJgdAXIgrAZQqKGvpFFDQhhA2gmASQhRAog9APQAAgGgJgPg");
	this.shape_400.setTransform(17.7924,73.3728,0.1353,0.1353);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#776B5F").s().p("AEuIXQgkhuhJhsQgMgfgZgiQgZgigEgKQg1gVgzgOIhTiWQifiugejYQjDiyCHALQATAEBIAYQA7ATANgBQAHgBAEgTQAFgUABAAQARgJArATQAoATAoAjQBnBYgfA9IhWgLQASA2BNATIA4ALQAcAFAHAGQAbAYACAhIACA3QAIAgAOBTQAMBHALApQAJAfAfBHQAjBPAMAmQAwCQhGBAg");
	this.shape_401.setTransform(92.1393,43.5341,0.1353,0.1353);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#5C524A").s().p("AD/MbQhUgcg0g7IgggFIg3AAQgrhYhLhAQiWllhwmBQAGgTAMgHQANgIAQAKQgoiLARhWQARhXBZhlQEUi0AzAGQAHABAYASQAZAVAKADQhCBqhWAwIhPAoQg0AbgqAgQhjBJAYByQAPBDBGCUQBBCpB1EPQCfFnAnATQAMAGAvAEQAlAEANATQABA4gxAAQgTAAgbgIg");
	this.shape_402.setTransform(-60.6941,69.3365,0.1353,0.1353);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#47413D").s().p("ACDGzQgPgBiFiRQiAiKgbgmQg+hWhIieQhhjWgWgpQAYgkA7gJQA5gKAkAVQAYAPADAnQAEAsACACQAIAJAmAPQAdAQgWAYIg5AIQg0AJAAAbQAWADAxgPQAvgPAUAEQAHABA/BJQA+BIADAIQARAmgOAWQgJARghANQgoAOgTAJQghAQgLAXQAigDAugPIBJgZQBWgaBAAmQAVANAUAWIAfAiQAkAiBFgGIBWC6QACAagTAVQgWAUgEAJQgkANg1gBQg5gEgeABQgKABgcAOQgXAMgMAAIgCAAg");
	this.shape_403.setTransform(-14.7487,-30.2665,0.1353,0.1353);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#1D323D").s().p("AiBDxQg1hkgDhVQgRgFgGAgQgFAdgagNQgvgXgyjEQgrisgChYQBighAZApQAHAJAOAoQANAnARAZQAwBGArATQA4AYAGhgQACgbgMgZQgMgSAAgCQgYgJgHgRQgGgQAJgRQAXgoAxALQgMAqAPBQQASBcgBARQgBATgYAdQgVAZAFAYQAbgYA1g4QA1g3AegZQBjhUBsAEIiDB4IDEAhQgOAThPBFQg2AwgSA7QgQAzATAPIARAJQALAFADAHIiwAKIhgESQhKhlgig/g");
	this.shape_404.setTransform(-44.2954,17.2198,0.1353,0.1353);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#48423C").s().p("Ah5FIQhUhGhKhPQhyh4AKgvQBMgjC3gpQCugnBUgsQBEgkA0gwQBPhJgogsQAGgBAPgKQAOgKAIgBIAOA2QAGAeADAZQAoBrgVCGQgVCBhEBnQhJBuhmAiQgpAPgrAAQhJAAhOgrg");
	this.shape_405.setTransform(-43.0877,91.5555,0.1353,0.1353);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#2F2B28").s().p("Ap7kCQAEgTAZgPQAXgNAdgDQBJgFgCA3QIBBhINAOQAEhrBHgEQAQCjgcCEQgcCEhQCMg");
	this.shape_406.setTransform(-54.7462,33.0098,0.1353,0.1353);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#37322E").s().p("AvBIvIABhPIAUgzQF3i1GWjtQF5jcF0j5IAAgBQBfgyDIh6QAhAjAWAkQAhA1gPAYI9zRbQgOgZACgwg");
	this.shape_407.setTransform(20.5705,73.2502,0.1353,0.1353);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#2C2927").s().p("Aj3J8QghgGgkg3QAWhMAEjkQACjWAghLQARgoGHmoQBfhnBFgyQADAXgHAcQgFAQgMAgQhRD6heD6Qh7FNhOCPQgUAlgdAWIhMhBIgBAAQAWAtABAzQABAwgRAfQgQAbgXAAIgIAAg");
	this.shape_408.setTransform(-28.3342,51.1156,0.1353,0.1353);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#387198").s().p("AMTIhQiFiWjYiMQimhskEiBQkqiOiRhHQj+h9iXhiQhDhNgKglQgOg3BjATQF0CZGZDbQFbC7GQD4QAcgWAZAQQAZAQgNAiQBwBFATBUQAWAYgCAiQgDAfgUAYQgWAYgbABIgDAAQgeAAgYgdg");
	this.shape_409.setTransform(-78.1388,36.907,0.1353,0.1353);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#72A6C3").s().p("AOwH2QgNgBgOgVQjWiWjOjfQioi0i4j+QgXgKkFBYQj4BUg2AcQhOBiiUAnQAKAfgIARQgIASgdgDIirgqQgQAbgngKQgkgKgSgcIAKghQAFgSAQgPQBWhRGSisQGPirB6gLQAlgDAaAHQAQAEAmANQFfD6DuF+QAcAqA4BEIBbBsQAVgEAGAOQAFAOgKAUIAJAhQAFAVAIAMIgWAAQgFAWgLAAIgBAAg");
	this.shape_410.setTransform(20.866,5.2816,0.1353,0.1353);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#2D2A27").s().p("AnMNSIAAAAIgqhIIHMybQC1jSAagdQB8iEBwhQQAZACAsCxQAsCwgPAQQheARh4AnQg7AUiYA4Qi1HGgpBgQiCE2h1DmQAdAmgZAqQgTAggfAAQgJAAgKgDg");
	this.shape_411.setTransform(-21.9454,46.3729,0.1353,0.1353);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#756A5E").s().p("ADdJDQgcgtgShEQgRhDADgwQgTgmgGgNQgIgUAMg8IgigtQAvhegNhkQhHhLhOhRQg3AGgjgOQgxgTAFg5IgYgTQANhZgfgzQgYgohXg/QhNAzhihfQgcgJAcgNQA1gkBkAOQAbAEAyAKQArAHAXgBQARgBAVgQQAXgRAHgCQAhgFBYAsQBbAtAMAfQgHAigZgCQgTgCgjgZQgogfgTgMQghgVgRAEQASAhAyAjQA6AqARAUQAOAQAHAXQAIAZACACQBsAPArCWQBhBRgeBSIBHB6QAwBWAMAfQAIATARBKQARBNgCALQgHAqgmAwQguA6gkgtQgagfAKBcQgaBOgiAFIgEAAQgcAAgdgvg");
	this.shape_412.setTransform(-5.5524,59.3255,0.1353,0.1353);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3F7CA6").s().p("AHNEfIlDgyQh0gfhlhOQgYAYgMgHQgNgGAFghQk+i7lRi3QABgCgBgKQgCgJACgBQIZgbIiAPQArAPBBA4QBKBAgWAeIgnAlQkAgrlagWQGkBuGLCtQBtA8AZAsQAWAmgtAVQgoAThSAAQhQAAhXgRg");
	this.shape_413.setTransform(-74.0882,33.9735,0.1353,0.1353);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#2C2826").s().p("AkwIsQgJhjAciPQAkieALhRQAZgDAAAdQAAAQgGAgQgCARgkCdQggCLAHAGQADADAZgCQAdgCAIACICEwCIFAIyQAGAXApBaQAjBVgNAWQgPAakfCgQkFCTgnAAQgEAAgCgCg");
	this.shape_414.setTransform(24.4007,44.4404,0.1353,0.1353);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#2D2927").s().p("Al1jIQATgXAygKQA5gLAPgKQASgMAQgmQAQgnAUgRQAWgTBhgnQBcglAkgHQBMgNAZAeIAYAlQARAbAWAUQARAQAuAiQApAeAQARQAQARB2CcQBhCAAfAPIAAAAQAEAYgBAXQgBAigMAGQgOgIgbgmQglg1gJgLQg7hGgoBHQgdAhgLgFQgKgGAGgsQAggVgJhFQgIhCgfgRQhrg7j0BmQhhAphaA4QhYA1gsAuQgoApglBHQgmBSgVAnQgjBCgoAkQg0AthMANg");
	this.shape_415.setTransform(-16.6427,47.709,0.1353,0.1353);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#7B6F62").s().p("AKeIlQgWgMAAgLQgBgMAXgJIgUguQiFiGgri/QgdgGAdgQQhjiVikh4IABg6QhHAvhSgfQhGgbg8hMQgKAYAIAdQAGAUASAeQgCAbhnAYQhOARg6AEQgRgGhPgvQg5gig3gBQgygChPAVQhPAVgqAaQgNAPgOABQgPABgIgPQgZg0CchIQBAgdA8gPQA/gQAcAJQAPgdANgKQARgMAeAGIBoAAQBAgFAegcQALgKgCgWIgHgpQgHg3AvgOQASgaAxgNQAtgNA3AEQCBAHAfA/QA+gWgSBwQBOA8B9B2QCbCTADAmQACAXgOAaQBLBzBPDFQBoEAg+Aqg");
	this.shape_416.setTransform(-15.6877,59.0184,0.1353,0.1353);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#585047").s().p("AAsHeQhLgNA0g1IA0guQAfgbAHgPQAJgSgKgNQgLgKAAgBQgcgMAcgKIANgNQALgOgLgQQgHgJg8glQgtgdgJgvQgJguAOgsQAFgTAZgzQAVgqAEgcQAEgogWgtQgYgEACAhQACAkgNACQhlASh0gcQiEgphLgQQgQgoAggUQAegTApAOQAHAFAtgDQAugEAMgIQASgMACgYQgBgdACgNQgagFgNgWQgMgUAEgXQADgXASgMQATgNAdAJIAwATQgsBnCCgQQBigMBegyQAGgdAQAdQAKgfAMAAQANAAAJAfIBKCQQA4B3gVAVQgEAEgXgGQglgLgGgBQg8gLgBA5QArA/AxgTQAZgKAZgWQAbgBArDKQAqDIgMArQgDALgeAGQgjAIgKAJIhGA7QgiAdgZAMQglASg4AAQgmAAgugIg");
	this.shape_417.setTransform(76.8606,62.0419,0.1353,0.1353);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#2E2A28").s().p("AA4CbQndhFnOiEQgvgLgbgIQgygPgHgVQBAgRB8gTQCCgVA6gOQAVgFAigYQAggXAGAAQAEAAAeARQAhASARAFIKOCdQF7BeEMBSQAcAJBFARQA7ATATAfQncgBnjhFg");
	this.shape_418.setTransform(60.0238,69.0008,0.1353,0.1353);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#D8B883").s().p("ApfEqQgUgEgxgNIAAl9QAAgTClhdQCphfAqAEQBoAJEBBvQDxBnBsBJQAQAKAVAfQATAbAIACQAcAIBHgGQBLgHAdAFQgNAXg3APIhUARQgxALg8AIIhuANQgsgnhLAJIAxABQA2AGgGAXQkIA/iQAfQkBA3iaAFIgMAAQgdAAgfgGg");
	this.shape_419.setTransform(14.9555,26.2845,0.1353,0.1353);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#65261D").s().p("AlHCEQiNhHhAhEQhRhWgTiHQAsAEByAFQBoAFAxANQAXAGBaAzQBOAtA3ADQBDAFBAgiQBkg1ATgGIhtCYQAnAABQACQBFgBAwgPQAogMAlgnQAngoAIgDQAVgIA3BJQAZgEACAsQABAhgJAcIAZAHQALADARAPIAbAZIAKgVQAAABANAKQALALgCAIQgFATg6AQQhDAQgXAGQkKBRiMAFIgbABQi4AAi+hhg");
	this.shape_420.setTransform(-46.5152,-8.77,0.1353,0.1353);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#66271E").s().p("AksC4QACkLgzjIQAkgCBHAFQBAAAAngXQAWgNBAiJQA0hwAXhDQAlgIAIAWQAEAOAFAlQAUBHAGBCIAHCJQACAbgBAYQAEAHAngaIAiAWQBFjKAEjDIAYgSQAaBJACCrQACCgAkBMIAAABQhZBRhvBvIjBDIQAIgtAsi2QAkiMgBhbQgVgdgzDmQg5D3gNAJIjkG1QAZldABh6g");
	this.shape_421.setTransform(4.3185,-26.6472,0.1353,0.1353);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#302C2A").s().p("AFbDPIhYgEQgmgDm6hAQmAg4gqAOQgTg2AGgUQACgHAhgxIBeg1QFag5Ftg0IAYAfIA0gnQBcgDCFAqQCZAvAcA+QgSA+hNBcQhRBgg1AKQgZAGgtAAIgQgBg");
	this.shape_422.setTransform(33.7682,-13.4356,0.1353,0.1353);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#E0A844").s().p("AhgANQhRheikiqQisizhLhVQgEgaA2goQAQgMBAgnQAkAIAYAKQAjAOAQAPQEoEIDLEsIABAAQAGAGAvBHQAbApAHgfIATAnQAJAYgGAYQAZAFATgQQAIgFAXgdQAogyBajWQBajWAKhCQAXgQgBA8QgTCEg5DZQgQA5g3CDQgoB1AiBBQgUAtgQAeQgdA4gLAAQgLAAgMgjQgMghgTADIgsDwQhXkvkPk9g");
	this.shape_423.setTransform(44.8073,15.9108,0.1353,0.1353);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3A3531").s().p("AspD5QgtgIgzATQiLADh7ATIgWhBQFihCEQg9QFPhKEahSQAHgGgegcIg9g8QhThYBIgjQC/BEGHA1QGYA4CsA3QAjALAHAEQAXANAEAWQimAWlIABQlPACiiAVQiRASkiBOQkpBPiEASIg6AuQgxgdglgGg");
	this.shape_424.setTransform(25.7413,28.3442,0.1353,0.1353);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A97935").s().p("AChOtQhnhfgigxQhHhoiFp2Qh4o4gVjkQgXj0AqhyQgBAxAJA6QANBLABAPQAqIJBvHMQBBg/BjApQAeANA1AfQA5AiAWAKQAIgLgZiiQgci2AAgaQAAg4ADgOQAIgoAigKICDV0IgGAYQgFANgLAHQgngzhshkg");
	this.shape_425.setTransform(-14.0399,30.3877,0.1353,0.1353);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#65261D").s().p("AiqK5QgXgKhOg9QhThBgpgXIgngpQABgXAugyQArgvBAgyQCah6A7ANQBGhpB+hRQgGg9ARgiQAVgrA6gGQg3iRA/hLIimjuIAYgwQgDgFgLglQgNgvAVADQAQABAqAhIBIA3QAnAbALgIQB/C4AjCqQAnDAhGDDIgrgWIgXCDIhWhXQgHAeAVAvQAYA4ACAPQAGA3igCLQixCRgkAlIgaALQgKADgLAAQgQAAgSgIg");
	this.shape_426.setTransform(-37.0134,-25.6543,0.1353,0.1353);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#983929").s().p("AgvKsQgngEAJg3QAahAhbArQgZAXgHgHQgHgHARgfIABgbQABgRgNAAIiOCDQgFghAnghQAsgnAEgSQAJgqABiKQAAhygEhLQgBgegIgpIgNhGIArAgQAdhjCCg/QB4g7BxAPQASgSg8iTQg2iCgfgwQgQgZhGhIQg3g4gPgyQBLApBIBIQBLBLAnBKQAoBNAnCJQAoCPAUCRQAzFuhmB4QgNAQgVAIQgbAKgFAEQg5guhfBhQgqAegfAAIgGgBg");
	this.shape_427.setTransform(-26.2504,-31.859,0.1353,0.1353);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#23211F").s().p("AiAEnQgugNgUhWQgNhWgEgFQgCgDgcgFQgdgFgNgNQgdgcg8hqQg6hognghQAAgZCcgZQAkgGCdgVIADDNIA+ESIgrnfQAcAVBMgYQBLgYAMALQADADABAUQAAAQALgBQAxgzBuADQAeABA+AFQA3ADAhgFQgJAvAQBQQARBZgBAjQgBASgdBmQgdBngHAMQgQAahlAHQhjAGgPgWQgKgOACg2QABgpgZgCQgDAPAEBFQAEA+gGAGQgHAHh+ATQhrARgXAAIgFgBg");
	this.shape_428.setTransform(30.7764,33.1535,0.1353,0.1353);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#5F574D").s().p("Ar8IaQgklSASj9QAQjrA6jkQBGkbBsiTQBThyChguQCpgxBuBMQE0DWDTGqQCZE1B8HhQACAqgQgLQgPgJgKgbQhckDgvh/QhUjlhUiUQgthQiKinQh8iVguhmQgTgUgCARQgDAcgCACQgGAFgzgJIhygVQi0gchWAqQgiAQhIBMQhKBOgLAhQgHAWAMADQAHACAXgGQAXgHAGACQALAEgKAXQgLAagyBOQgwBIgRAvQhiEYAdGUQAHBhAcD3QAZDZAFB8QAEBdgBAMQgGBBgpARQg/k5gckTg");
	this.shape_429.setTransform(-20.5435,73.075,0.1353,0.1353);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#3B3532").s().p("AkFDUQgTgCgJAbQgKAfgTAGQhIAZhZgLQhsgMgXhAQB7gDB6gRQCFgTBrghQALgEAegGQAXgHgDgUQg/AFhlARIikAbQjDAciEgiQgIgegNguIgXhMQAThWAvgbQAwgbBsANINPhgQCCgLBCgxIAAgWQAZgjAaAIQAZAHAMAqIg3ArQAVASAdgDQARgDAlgQQBQgiAtARQACCBhIAJQgSACgxgGQgsgGgVAFQgTAFg7A/Qg/BCglARQgqASifAXQiZAWgFAEIgOAtQgOAwgRAYQhMBphSAdQgSAGgOAAQhAAAANiBg");
	this.shape_430.setTransform(-22.8723,-6.1625,0.1353,0.1353);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EDCB65").s().p("AVLHkQgtgJgYgLQoVj0kKhyQmyi4mBiDQkGgfj1hNIgDAwQieBdinAiQAhAZgHASQgGASgqAEIkGgrQCklzGbACQCdABDUA3QBtAcD9BSQF9B8G2DbQErCVHfEWIgVArQgvgCgdgEg");
	this.shape_431.setTransform(5.9408,12.2365,0.1353,0.1353);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#73685B").s().p("AFIIzQg2g9g9h3QhHiMgigxQiNjIjMiHQj1ijjMAnQgIgnAQgEQAJgDAegEQB0g2B4AQQBFhBBxBYQA3glgrg0Qgagfg6giQgDgJgQgOQgTgOgGgHQADgBAHABIAMAAIBQgkQCVADCiBZQBmA3CrCGQBOAUA1BTQA1BTgTBIQAAA7BfDXQBaDMgLA3QgGAcgfgCQgQgBgigNQgTAkgZhQQgdgtgsgtQg8g9gUgYQgQhRgfhUQioi2AwB5QAqBoBaB/IgeAnQAcBFAJA/QAMBYguAAIgOgCg");
	this.shape_432.setTransform(83.0621,43.4539,0.1353,0.1353);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#38332F").s().p("Ai1F5QnFhshUgWQj0g+gPgYQgIgNACg5QACg7AMAAIIsCEQAIgtglgpIghgiQgUgVgJgTQgRghgZhDIgqh1Qg4iRg/guQgPgLg7gVQgwgRgUgcQAWhKA3gjQAPgKBogrIA9AfQBSC6BHB7QBgClBpBqQAmA/AwBeQAtBEBYAkQB7BNCgA8QCjA8COAWQA8AVBpAyQBeAjBbgTQgMgcghgKQgVgHgwgCQg0gCgVgFQglgIgRgZIEyAAQAABghbAxQg7Agh5ATQhihOsci9g");
	this.shape_433.setTransform(66.0569,63.3406,0.1353,0.1353);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#D55139").s().p("AC4KvQADgNATgcQATgaABgNQACgbiihxQiph4gRgrQgMgcBEgXQBJgYAAgWQgMgJglAHIhDASQhUATAFg6QBPguAfg1QAnhDgohJQgWAFgNAjQgSAugLAMQgPAQgmAVQgoAXgRAQIg2gPQgDi3gJkZQgTALgHgXIgDgXQAQFbh2BQQgdA4gRAAQgSgBgYg9QAAjCgrirQAviBAJgoQAXhcgNhYQCEAjCKCWQBTBbB3C0QBIBvBgCuQBZCRCFB1QAUARBkBEQBfA/ADAFQAhA2g0AuQhKAxgcAaIAshiQAIgchNAwIhbA8QhvBAgbAAQgFAAgDgCg");
	this.shape_434.setTransform(12.459,-30.6197,0.1353,0.1353);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#34312E").s().p("AgXHNQkTgDgTgLQgQgKh/jGQh/jGgEgTQgCgNAVglQAVgmgFgWICCB4QAYANAsBUIAsBXQAQAMBeggQBwgnALgBQARgDAcALQAYAKABgBQADgDgDgaQgDgdADgHQgCg2gSg1QgQgtgjhAIAcgtQAhgEBTgWQBYgZAZgOQA/gmAYhBQAXg8gNhOQAYgFAWAIIAqATQAZAMBbAxQBgA1AGAGQAlAog+CoQg9CjgtAWQgNAHg6gMIhwgWQiUgVAEBbQABAbAzADQAfACBNgEQBFAAAcAVQAnAbgRBHQgEARgyBSQg1BVgMAEQgYAIirAAIhsgBg");
	this.shape_435.setTransform(-9.4141,-26.3275,0.1353,0.1353);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#312B29").s().p("AJiJjIy7rdQg+gXgWhUQgUhLAQhgQAPheAng+QAqhCAwAHQApAHCWBeQCKBXA0AsQBlBWBuCWQBABWB8CzQBwCdBcBYQB6B1CJA1QgbA5gEAFQgQAWgUAAQgKAAgLgGg");
	this.shape_436.setTransform(-67.7726,48.0078,0.1353,0.1353);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#60231D").s().p("AjzCPIB5gBQAagUhxgcQh6gZgJgDQgbgKglgUIg/gjQhMgmg8AGQgIghAcgRIA5gkQBchbBohxQBWhUCQhVIAtAHQA6gfA0ACQAvACAUAZQATAagYAeQgcAihKAWQCNByCyCNIATAyICxhpQCWgGiUCUQg0AsgUAUQgiAigVAvQggBKgLB9QgOCWgNAzg");
	this.shape_437.setTransform(11.3056,-21.475,0.1353,0.1353);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#76644E").s().p("AnXIDQgHhmAOgiIBAg4QhGhIAbg8IAVgMQAHghgigmQglgpgBgdIAIgcQA1gIAGggQAFgcgcgzQgoimAogYQAogYBbCQQBqAlAvCUQAFBtBSBdQBaBmBkgqQAIgEgEiBQgDhsgFgvQgBgJAPgJQifhUg/iQIhqhrQg+gRgYg3Qgag6A+gXQEBAkC2g8IAAgBQAjgFBHgiQBbgqATgHQA3gUASAUQAVAYgaBWIivgVQgEAZAMAMQAIAHAXAGQA3AOALAmQAgBmhjEuIhPDnQgpB9gKA8QgaAygoANQgzAIgfAKQhFAZgmAAQgxAAg5giQAmAuAGAyQAHA6g3AIQg7Ayh0gcQgRABgbgJQgbgLgFABQgJAAgKASQgKAUgEACQgVgegHhpg");
	this.shape_438.setTransform(-36.9563,47.3091,0.1353,0.1353);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DACFB7").s().p("AkRFoQgWgCi9hTQjDhWAAgPQBYh4A2hsQALgVAahEQAahDASgkQA9h4BLAHQAKABBoAxQBkAwAYAOQBKArB6BjQCSB0AsAfQAMAIDNBxQC/B1gnAkQgKALgugkQg1gpgfgBQhrgCkxA/Qj4AzhxAAIghgBg");
	this.shape_439.setTransform(7.9079,-16.4404,0.1353,0.1353);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#DA583D").s().p("AtCJdQgcgLAcgLQBXjFA3hoQBKiNBniQQAMgSAvgpQApgmAHgPQAIgTAEgyQADgtAQgdQAeg0CMhEQBKgkCBgyQBTgGAwAMQBBAQAsA3QA8BaAeAiQAoAsAlAIQAnAJA3gZQAwgWBcg9Qi+h/gPieQADAAAKgMQAPgKAVADQATADARAQIAYAWQFNEygbELQiQAPhVAmQhqAxhCBoQghAOgZhJQgDgpgFgXQgIgqgcgDQATCMAEBDQAHB0gTBbQgTgygqiTQgkh9gihGQguhbhLhcQhVhnhLgrQghgSgOgDQgfgIAAAfQBIAaBBBLQAfAjBHBoQgFA5g2gdQgigSgxgyIggASQgBAjgXAqQgWApgeAYQghAagZgKQgdgMgLg7QhJgkhdBwIgfgLQAJAfgfgJIiDEcQgBCDhAgWQAZBAhIAYQggAKgfAAQghAAgggLg");
	this.shape_440.setTransform(-34.9164,-33.3564,0.1353,0.1353);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#140F0F").s().p("ApiJgQgZgWgUgrQgUgqgEgmQgGgpARgRQgYgYglgBQgtAEgagBQAGhMBvAPIAPgaQAChpAfhMQAihQBKhBQAPgMBEgnQA6gmgUgVQhFgRh8gqQiHgvg7gQQjmhAiqA3QgaAYgVgIQgRgHgEgXQgEgXAQgKQATgNAlAQQAMAECQgVQCVgQAsAhQgyhbiGgPQgsgFhKABQhXACgagBICZgsQgog3iSgPQh4gMhWARQgegJAegNQAfhhDoAkQBZAOBHAgQBhArAEA7IAqgaQCBBkCHBPQADABAVAPQAXANASgHIgWArQAuAFA5AOQAdAIBHAWQBeAdBcAVQB4AcBHAEQAfABA+gYQA/gYAmACQARABBKAeQBAAZAJgKQABghALgkQAWhGBDghQAggQBegPQBTgOAygCQA3gCBlALQBuAMA9AAIICABIiDAsQgQgFhjAIQhmAIhqAQQkgArArAnQBKgIAVBQQAHAcADAuIAFBHIAVhWQA0AAAKBDQAJBEgxARIAAAWQAAAMgFAHQgFAIhRAPQg4ALgxAHQigAXkxAlQmHAvgcgJQhEgWgbhKQgZhBASg4QATg5ApAUQAxAYA1CCIA9gKQgxhfACg9QAAg1AmgGQAlgFAsAtQAzA0AeBbIAggHQhlluEcFUQgVh8hogrQhZgniGAbQh4AYhyBBQhxBDgsBJQBBA7AVA6QAaBIgvA+QA1ATANAsQANAtgkAtIAAAVQg0gjhkAMQhXAKhCAjQgHAEgHAAQgRAAgUgTg");
	this.shape_441.setTransform(-29.1757,-12.0276,0.1353,0.1353);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#D24F36").s().p("AGvHDQgSgEgIgQQgJgSAKgbQgggrAMhJIgXAHQgiAXgsgfQgbAlg9AcQg8AchAAHQhFAHgtgTQgzgWgJg0Qi8Aqi4iFIkUgZIgXgrQgCgOABgdQACgfgBgOQAGgGAPgSQAOgQAJgCQA+gpAThRIAygJQA4g2AsghQA2gnA1gVQgOAEgMgFQgOgGgOgVQgmgGgEgdQgEgZAWgcQAWgcAegIQAigKAZAZQAzgaBYgDQBWgEA7AUQAwAQBKAhQBFAgAzAcQCMBMAEAiQACANgVAFQCCAVBgA7QG1BOk7CZQg6AyggBEQgfBCgEBOIgtAgQADAXgOAMQgJAJgMAAIgJgBgAimi2Qg6ARggASQggASAhgCQAngBB2ggQAbAYAzgBQASgBgGgFQgGgFglgHQApgWAwgMQgyABgngLQgxAChCATg");
	this.shape_442.setTransform(-44.6227,-13.5417,0.1353,0.1353);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F3CB5D").s().p("AB3JfQgGgcAMhAIBOjlQhgDmhFAAQg2AAgUgwQgVgvAnghQhEiriEjNQiejohPh6QAIgiENhVQE1hhASgKQAYgMAcgbQAegeAJgGQAogaA8BMQBiB6ALCgQAGBegRDKQgBAOAPBsQAKBKgXA2IhBhCQg2CTgmBgQg2CEgzBqIgIAAQgqAAgIgrgAE1hyQAGAqgbBnIgOA2IA4ibQgCgwgLAAQgEAAgEAEg");
	this.shape_443.setTransform(48.3078,11.548,0.1353,0.1353);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#4382AC").s().p("Ab/OXQjigvgogWQgogXiDhvQiOh4g1gjQoLlaofkZQpnlBoEisQk+hqjWgqQlnhFijBQQhGAaAbgvQBuhECfgoQCOgkCUgHQAZgBBKANQBCAMAxgGQAtgGBUgsQBVgrA4gJQBrgQB0AGQCCAGBZAfQgbAdgnAZIhEAmQhQAugbBGQAWApArAfQAdAVBCAiIJAD/QEpC6EqCXQGBDfFZD+IANgSQACglAdAEQAPACATAJICZBBQAEAfgPANQgLAKggAHQDQBsCfA+QDLBQC8AgIAnAzQgIAigGAMQgKAUg0AAQg5AAjcgtg");
	this.shape_444.setTransform(18.4519,14.9912,0.1353,0.1353);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#66251D").s().p("As/FAQglABjphEQjohDgQgOQghgdANgRQAMgRAsADQAXgnA/gyQBAgzApgIQAjgHA7ANQBEAPAdgBQCWgFCigjQCmgkCGg4QAHgCAGAlQAGAoAbAJQAhALCIAJQB7AHA3gCQBmgDAtgLQAygLASgdQARgagCg6QAAgbgNh4QALANAoBdQAhBOAdAKQA0ARD+gLQD4gKBHgUQA1gOAYgfQARgVAUg8QAcAWghBKIgYAyQgKAXAGAGIEGAAIACBVQAAA/gFAsQgOCGhAATQgpAMj8g/QkDhBhCAKQASgaAugLQmmApmdgUQiKAMgyAjQgxAkgzB8QjIhjj1Beg");
	this.shape_445.setTransform(-19.5681,-17.5259,0.1353,0.1353);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#342F2B").s().p("AjIHGQh6g6hYhyQhahzgjiTQBBgWAnAKQAfAKAXAmQAOAXAcA6QAcA4AiAjQArAtAlAUQAgARA/APQB6BDBxgnQBlgjBJhuQBFhoAViBQAUiGgnhoQgegjgkg1IgGgGQgIgGgHADQgVALgzApQgxAoggAQQjABekTBaQk2BkitAKQgdABgCgEQABgNgCgRQgEgZgCh+QgBhMglhZIgOgXQgJgQABgFQADgFAVgNQAUgVAAgwQCwgPC3gzIAiAsQAhBpAGAcQAWBfgUAfQgFAIh6AgIiaAoQgYAFgLAFQgTAJAVAOQCbgeA8gOQB7gbBXgcQBIgYEEh4QDqhrBTgRQBggTCyAVQDJAXBLgGQBHEEiChGQgFgDgGgNIgKgYQgQgfghAKQgFAYAWAZQAYAdABATQABAcgVBpQgRBPgQA9QhJD3gZgcIgshYQgdAcAABGQABBKgDAEQgMARhWAcQhbAegUgVIDEivQg0gThABAQhEBSgjAYQiEBciRAMQgUABgUAAQhxAAhrgzg");
	this.shape_446.setTransform(-43.4016,91.5912,0.1353,0.1353);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E5B24C").s().p("AYBHSQjogzhJgNQiLgYgRASQgEADADAjQADAngCAKQhfgViUg1QjFhHgugOQkUhVuikFQrwjTnDicQhugOg2CQQgjBfgGCSQg1hCAfiDQAJkPBlg4QN0CsOzFIIBFACQAhgSBdAeIAcAJQkChnmAiRIgPgjQgUgOAFgGQAGgFAfADQA0gKAiAJQGeBtJ1EfQAdANAqAcQAngiArAaQAnAYAKAxIAygcQAfAgFxBXQFyBXgJgfQjfiIjlhtIgKg2QgngXAIgOQAJgPAsAJIHCEDQD+CaCqCPQgQAFghAAQh3AAlihNg");
	this.shape_447.setTransform(9.5547,18.536,0.1353,0.1353);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#312D29").s().p("AGBNvQiegLgUgNQgJgGgXg7QgbhFgKgQQhFhygdhIQgihgglheQg7iRhqgoQhYggivAZQgUgDg2iFQg1iCAJgKQAaAECeAnQBwAbBLgFQgFhDgdhEQgdhDgtgyQgNgPgbgJQgZgGgCgCQgQgVA+gtIBehDQAqgrAaguQAig6gBgvII2EyQhWhnjBhqQhpg3gygeQhXgyg7gvQgZgHgEAIQgBAOgFAKIgbA+QgPAhgTAfQglAdgUgOQgUgOAMgtIAAAAIBjjbQA7AjExCKQEbCIAcA/QAJAVAQCUQAQCXgIAIQgvAAgjgSQgOgHgngdQhAgvhfAPQhjAPgSBXQgNBAAeBpQAgBzB7ECQB3D6AhCBQAogVATABQANABAlATQgFAlgRAFQgQAEgcgYIAABCQAbgnAoAIQAmAJAaAsQgRAShVAAQgnAAg1gEg");
	this.shape_448.setTransform(-54.9412,67.445,0.1353,0.1353);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1E3643").s().p("ApNUVQAmhmAFgVQAahjA+jFQBLjpAlh5QCLnAANinQACgYgLg2QgJgvAJghQAFgSBUilQBTijATggQBSiKDRkBQDUkCBSiJIAsDPQgNDXg3EEQg0D3hKDaQgPAsgYAuQgRAfgiA1QgzA3hWBrQhdB1gqAwQiuCwhlBsQi6DHgZBlQgPA/gFBoQgGCFgEAdQgKBZggA6QgoBJhPAuQgBgpAchIg");
	this.shape_449.setTransform(-26.7873,40.5138,0.1353,0.1353);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#2D2927").s().p("AlCP0QghgLgjhMIgvhpQgIgMgigSQgegRgDgLQgDgNBrjVQB0jmAOgzQAdhmAUilQADgWAbkXQAml9BLiTQBDiDAiBBQAbAwACCAQArgagLhjQgIgxgBgTQgCgfALgGQBGAACkguQCQgaA7BTIhXgVQAOAcgBAZQgBAZgPAcIiAADQgGgJA9gqQAYgQADgIQADgLgegBIiuBuIijLGQgPBBAUAzQAEALA1BXIiWNKQApAHACgQQgEgaAEgTQBTmPAwmOQAlAOAJBBQAJBLAPAPQAYAZBJACQAlABAkgBQAcAbgwDvQg1ELAEAgQgUAhkGBPQjcBChFAAQgOAAgHgDg");
	this.shape_450.setTransform(6.8284,46.2103,0.1353,0.1353);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#3B78A0").s().p("ANFI1QgcgBgtgJIhOgQQg6gKhsgmQhwgngsgJQgTgDgPAKQgMALgDAAQgQAtgxgXIgSAPQphmnp2mLQgShQCeAgID5AiIMrCQIANgZQAGgcAQAcIAWABIAWAAIABgmQAAgXgBgPQgEgwglhbQgihXgCgwIDPDOQB7B6BQBYQDgD0B4DgIghikQBPBfANBHQAPBUhBBhQgqA+hLAAIgEAAg");
	this.shape_451.setTransform(31.0799,14.6897,0.1353,0.1353);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#1E323D").s().p("AEdJZQiIlrhjieQidj7j9iIQhPgqiCgUQh9gSiLAHQk7AQiMB0QgaAWAFAKQADAGAGACQgxBBg2BUQgUAggGAAQgHAAAGgmQAGgjAdgpQAigvAHgUQARgvAaiUQAYiEAfhCQDwADF1BiIErBNQCrAqCDASQAnAGDOAGQDAAJATAZQAKANAJAwIANBGQgKALhFglQhKgngLAAIk7AAIFbA3IAvATQAeAMAMAMQAHAIANAwQAJAgAZgMQAlgRgTheQgchngBgaIHhhtQAGAXgNAQQgRAQgJAKQgmAyiJB9Qh2BsgtBOQAiARA1gpQAPgLA9g/QBLhMB3iRQCNitAwg1QAzgcBIgGQAigCBfACQAVABAlgDQAZAEgIAqQAdBXiKBBQhDBGjHC6QivCihUBeQgYAcgeBKQgdBGgjAlQg+BBiABdQiPBqg0AAIgHgBg");
	this.shape_452.setTransform(-28.3203,9.273,0.1353,0.1353);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#62241C").s().p("Al8GuQjagzjFhkQjGhliPiHQgjg1gEg7QgDg3AYgeQAYgfAlASQArAUAqBPIAYgpQABgkAsgaQAogYA6gFQA7gGAtARQAxASAKApQANAIAtA5QApAzAmASQBFAiBDgIIA0gIQAfgEAZADQAYADAZAUIAqAiQA2AgBghDQAkgYBChVQBDhVARgLQAegTA1gLIBlgRQCJgWBIg+QAMgKAcgtQAXgmAQgEQAOgEApAMQAqANAZgFQAWgEAlgVIBGgpQBfgzBLAWQAbAIA/A6QBDA8gEAYQgDANiXB/QicCCgQAnQgWAzBCgnQBSgwAFADQAQAThBBmQg+BhgfAWQgUAOigBRQidBPgnARQjUBZj6AAQi0AAjJgvg");
	this.shape_453.setTransform(-23.4351,-2.1099,0.1353,0.1353);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#272323").s().p("Ao5KiQgFgTATgDQAYgFAFgKQARgmAGhDQAGhBgIgrQgciVAMjSIAMiwQAGhqgBhQQAAgUgSheQgPhMALguQAFgVAsgHIA9gIIAAgBQA1gJAXBLQAngZAsgRQAmgPA0gMQBkgXEVgrQE9gyATAPIAZAWQgLBEgBBSQAAA+AGBZQgSBsgTAXQggAaglA1Qg4BSgDB0QgDBFgDAVQgHA0gXAsQgxBehEBNQhPBahNAiQiuBMiTAiQiCAeh3AAQguAAgsgEg");
	this.shape_454.setTransform(15.2845,89.2338,0.1353,0.1353);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#38729A").s().p("AKCQEQgVgWAKgmQh8gsiPhSQhqg+iShkQgag0hDgfQgOAbgcgEQgagCgbgYQgbgYgLgdQgLggAOgWQjrkmjJk8Qg0ALgOgYQgLgUALg2Ih4h8IALgdIAPgaQHVCKHNB/QAcAVAJhVQgQgZAGgGQAGgGAZAPIgJhEQl+lZmElxIgGgwIABAAQDWBcEmDEQCZBmDWCkQEZDZAbBAQAkBZglA6QgXAdgKAQQgQAZgBAbQgBAwArA1QAtA5AEAnQAEAogOBFQgPBMAAAiQAAAdAWBiQAVBZgFAaQAAAFgSAMQgXAQgMAOQguA0AYBaQAEARAOASIAYAdQAXAjgbAwQgOAIgMAAQgQAAgMgNg");
	this.shape_455.setTransform(-57.417,45.0704,0.1353,0.1353);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#4481A9").s().p("AmbUSQgggJgvg4QgFg3ALhOQAOhkACgdQBwjogPkVQCAg0BQh0QAdg9gHgwIAAiDQgBgHACgQQABgQgCgFQhvgIAjhhQAehUBVg+QilgNAzhdIjFC9QhjgJAohLQgLAFgNAAQglAAgtgqQgoglggg3Qggg1gGgnQhBARgVgtQgEiWA4jpQA4jmBHiIQAXgrAcgKQASgHA6ABIAAAAIAbAvQgVB0ghBfQgeBVg4BwIAWgkQAcglATALQEEiNEgABQE+ACDLC1IgsAWQBcAQBBBAQAdAdBMBuQgNABgegCQgdgBgPACIlTimIgKgfQgwgRALgpQAIgXADgNQAEgVgKgQQgcgviYABQg+AAguAKQgvALgFASQgYBjBTA/QAXARA5AgQA2AeAYATQBZBHA4BiQARAcBQCtQABAEgkALIhRAZQh5AogDAoIDwgWIgWgrIBfgDQAwgCAYAFQBBANAvBaQAKASAQAWQAEANgvgEQhsABjMAwQj7A6AABCQABAaAHAoQARBlAhBrQAgBpAqBeQgHBSAJBSQgwAsAjBOQAeBEBBArIgYAwQAEAJARAZQAKAWgUAKQhtg7hxh6Qh7iOhFhGQgGAahBAaQg5AYAIAWQAEAIApApIBUBTQBxB1gYAYQhAgJhEg4QhIhGgkgdQgTgWgMgIQgVgOgOAWQAXBRBNBpQBiCHAVAnQgPgDiHgrQhagdhCAKQAYAqAIAtQAJAsgKAZQgIAUgSAAQgGAAgHgCgAm4mXQACg4ANgyQgJgogXAFQgTAFgRAfQgQAgADAZQAFAeAhgBIAHgBQAMAAAJAUg");
	this.shape_456.setTransform(-38.9784,18.7307,0.1353,0.1353);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#1E3743").s().p("AlzS9QgkgCiagXQifgXgLgGQgggPgIgmIgEhDQAagPARAFQAMADAZAWQgtiKBBgbQAygUCEAuQixjABRiNQBtBCAMAAQANABhVhCQgTgjAUgkQASghAqgXQApgWApgCQAtgDAWAXQDIDgB/B5QABABAMgVIAQgoQhBhIgcg7QgqhZA+geQg3k2hOk9QBuhpCrgkQCVgfCcAaIgKgDQgWgJAIgQQgqhbhFgTQhKgVhLBDQhvAXhDgLQg/gKgHggQgIggA0gmQA4gpBqggQgthpgohBQg4hXhHg1QhggohDhDQhAhAgKg9QgLhBA6ggQBBgkCKAQQB+APAiAdQAuApghBwIgKAbQBUATBNApQBGAmBJA8IA3AMQAXhDBBBDQBPByA1B+QAxByAlCUQgbgNgpgsQgpgsgcgNQgcgOgfgFQgtgGABAeQCXAlBPB+QBFBvAHCnQAGCWgsCjQgpCZhGBvQgYAmhQBDQhLBAAAACQgKAoAkgBQASAAAVgGQAQAbg4BLQhCBNgMATQgMATgLAyQgLAvgLANQgsA1kqAYQimANhyAAQg3AAgrgDg");
	this.shape_457.setTransform(-35.1287,21.357,0.1353,0.1353);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#474039").s().p("AFJTMQghpfh0mMQigojlak0QitiYiNgqQiyg1i3BiQgPAIiDBYQiDBYgLAIQgNALgaA9QgVAyglALIAAgBQAXhJAwhPQA3haARgpQAIgTABgnQAAgpAGgRQASg5CuhRQAigPBogtQBLggAagPQAmgWgbgJIgWgGQgMgDACgEQAJgQBbgqQBYgpAUAAQAiABALAeQAGAQAEATQANAJAuggQA4gnAPgDQBTAKgnAiIAFAHQAIAAARALQAeATALAYQAPAcgeAMQglAOhigQIgfAgQgfA1hSgJQEcBCDiDsQC2C+CXE1QgdhaApg5QgMgtAUgOQAUgNAmAdQAXgKAjARQAhAPAcAgQAeAgAKAgQALAjgSAVQATA7AZgPQBLgkg7hoIiIlQQgTgoA0geIAYgUQBnB3BSB/QAXgWASAEQARADAQAdQAwgSAaAtQAZAsghAnQBWB/AdByIAQgXQABjWhrjJQg6iQA3hgQBlgxAwBYQAnBJgOBqIh4iYQgJAZA6CIQA4CDAQANQAuAIgDgTIgLh4QBVBbBKC7QBFCuAsC0QA1DXgECSQAAAWARAxQAHAkgygJQADhrgfh0QgLgpgKgUQgSgpgUgCIBBG0IBXgrQAPAnAEAwIADBXQACAbgCAyIAABMQgWAAgEgyQgDg1gagGQgggHgNAsQgPAygHACQiDAkglhlQgHgVgLg8QgIgsgLgIQgMgJgcAQQgaAPABALIAQARQARASAFANQAVA/gZAGQgpgCgVAKQg8AlghARQg7Aeg0gJQgJgBgNgXQgNgagNgIQhbg1gXBUQgDAOgIA4QgFAogJAIQgEACg9AJQg5AIgRAcQgLATgBAtIAABKQgCAmgSALQgJAFgMAAQgVAAghgPg");
	this.shape_458.setTransform(84.2581,53.1091,0.1353,0.1353);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#2F2A28").s().p("AkiQSQjlgNhLgkQgHgvgvhPQgjg8gqg2QgMgcACgIQADgMAdAEIAAAAQAwiDgznyQgekKgMh5QgWjRABhfQAAg4AJh5QAKiCAIgmQAIgiAegiQALgOAtgqIBFBpIJKCxQAbARAfA5QAhA9gQASQgDADgdAKQgiAKgTALQhGApAZBPQBqAEAdACQBdAHAhAVQAWANAjBfQAiBaApATQBDAeB2gVQBCgLB4geQAvgIAGAXQAHAWgnAcQgyAIhNAOQhdASgaAIQhnAhhHE+QgyDkgKDKQgbgFgJgYQgEgLgFgkQgIhNAAjBQAAi5gNhbIgri5QgZCaAbDzIAYDJQAOB2ADBQIAFCIQABBVgKA6QgeChiAAeQhKgZj1gOg");
	this.shape_459.setTransform(-0.0499,34.9788,0.1353,0.1353);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#2E2A28").s().p("AmoP8QBqAlAog4QAkg0gghsQgDgLgPgTIgWgdQgWghAqgNQBYgaAhBTQAdBMghBSQBHAMgNhmQgFgmgOgoQgPgmgMgMQg2g3iWA8QhRAjgmAPQhBAbghABQhuBWiUAgQhvAYisAAQjCgGhiADQioAEh2AkQAfgjBLgXQBUgZAkgdQAtglASg6QAVhBAKgNQArg1CdhPQCmhUAtgtQARBSgrB9QgMAigaBEQgWA8gJAnQgGAcATAHQAQAFALgLQAagaApjOQAqjSAXgbQA6hGCRgjQCEggBlAQIiYogQBFAKA1AcQA9AgAgA1IETLXICkAsIhXDEQAUAVAsg8QATgaAdgzQASgfBLiuQBNixABgQQADgigThsQgUhygRgRQgQgPhagvQhFgkgygZQhZgqjahQQirhAhPgyQh0hKg7hyQhEiDgNjXQAPgVAIACQgIhpAqhOQA1hkB4gWQHYg9FVglQHIgyF3gZICGAQQBahCCcgCQCkgCBGBOQAcAgAVBiQATBeAEBvQADB1gQBPQgTBagoAOQgnAOgRgOQgRgNAIgoIgogYQAGh5gWiTQgdjMhCgEQiGAlhAg9QgEAhgRAGQgNAFgfgMQgCAhgRAIQgQAHgfgOQl2BMnbA/QgSACglgKQgYgGghgQIgdAmQA3FJBOFKQAbBcgGBUQgIBmhJhQQgbANgTgRIjEtGQgKgKhnAAQhwgBhuAOQk3AmAkBsIgqAmQgtAmApB6QAfBfAzBLQA6BWBOAzQA8AnB2ArIGGCRQB7AUBJBDQBOBFATB2QBSgSgBA2IgyB8QClhVDXgOIAKhAQD7gBAqiGQABgvAbABQAaABALAtQgJBsgOAdIgVAnQgTAggTAvQhGCqggCaQgoDAAZCOQibAemMBRQleBIjJAkQghAGgqgEQgKgBhBgKIrFERg");
	this.shape_460.setTransform(39.5221,53.5661,0.1353,0.1353);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#272322").s().p("Ah0X4QgPgDACgdQADgigCgBQhCA7hygiQgggJg/gaQg8gZgagIQgQgEg1ADQgvACgZgMQgcgOgLgwQgNg4gNgOQgLgMhKgqQhMgrgZgXQgmglipkHQipkIgRgxQgIgZAJgVQAKgQAAgCQAoA4BLB7QBHB1AqA4QCNC8DBAsQEIA8CJhHQCEhGBuj3QBIilAajVIAUizQAMhsAShQQAGgcAagaQAagbACgKQAFgagNgzQgTg9gHggQgah5BOg3IgjnAQAYAXAtALQAaAGAwAIQAnAIAMAVQAQAagRA4QgBAEguA/QgjA7A1gCQAIAAA6hCQA7hFAQgFQAegLA7AKQBQAOAPAAQAwAAAUgiQAYgqgNhmIAWCDIBBAAIgWjFQAmgGAFANQADAJAEAgQAKAbAKAvIASBLQAFADBLgTQBKgUAIgFQAqgdgmksIg5l1QAUgDAIAXQAEANAFAcQApB/AKB2IAVivIBCAsIAAAsIAQA9QgjBjASBmQAPBTAzBbQAAAEgRAvQgOApAIAbQACAIANADIAbAFQAnAIAIArQAMA9gDC3QgCCAgICCQgFBhgOBUQgFA/AYB/QAQBagZAyIgbAsQgSAdgKAbQgLAfgIBFQgIBXgFAZQgYB9hhgVQAGghAZg7QAag7AGgkQAHgsAAgiQgBg8gagCQgNBSgeBpQgLApgsCPQgFAPgYAnQgVAigBAOQgCAWAUAUQAMALAaAWQAsAqhABIQhrB6ANhUQADgVAQg7QAPg0gBgLQgDgpgiApQgjAzgEADQhcBRgxApQh9BpgIgJQgCgeAcgeQAmgqAGgNQAlhNAKhLQANhphXA3QgKAGgsBkQgzB3gHAMQgnAsgPAWQgbAoA9AGQAPABAegEQAcgDAKABQAgAHglBLQgSAmhRAlQhvAzgIAFQgZgKAFgcQAKgagBgBQgvgYg7AQQgoAKhHAnQhQAsghAMQgsARgnAAQgRAAgQgDg");
	this.shape_461.setTransform(-9.3069,92.4762,0.1353,0.1353);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#443D37").s().p("Al6bKIgNg9QgXhIhoALQgQACgWAQQgYARgKADQhGAUACgYQAQgpgDgXQgJhJhGgFQhKAGgMgKIgQgzQgPgvgbgIQgMgBgBARIACAbQgbgTgkgwQgkgwgIgdQgGgVAZgJQAagJgCgWQgEgkg2h0Qguhlgfg1QgHgMgbgOQgZgNgEgMQgbhagwj4QgzkBgDhQQgCgcAMg0QAMg0gCgcQAPgdARAAQAQAAATAaQgDkRAQh+QAajHBeivIAqgSQAWigCSh1QCGhqCsgYQidgzinByQiMBghcCkIgzAFQgwiBAQhHQAMg4BWhzQAWgIAMAAQAQABAGAQQDhjrDdAKQDMAKD/DfQG6Ibk9m1QgVhRAfghQAagcAzAQQAyAQAdAsQAhAxgUAzQAKBPD1gkQBZgNBZgZQBSgWAUgPQAQgLAHgLQAIgMACgWIgogLQgSg9g0ghQg0gig/AKQiLAwiWgQQhpgMipg4IgTg1IHWiYQAQgrgWgnQgNgXgrgpQgsgogMgWQgVglARgoQAyAFBpAVQBVARBYABIAAAAICDCDIjlhBQgPAHAYAbIAiAgQBWBNCXBZQCkBhBQBBQAGAFA/AaQAuAZhHAIQgLAChXABQg7AAgqARQgWABgFACQgHACADAdQAJBDBYBcIBIBIQApAoASAaQBhCJAzC6QA9DehFB0QgfA2hQBJQhbBTguAAIn2AAQgiAAAJBNQAFApALBEQgMFNgbDOQgoFAhXDIQgIAThxCjQhyCigQAQQgzAwhAAPIgsAHQgWAEgKAHQgCACgGAYQgGAZgMAKQgjgUgeg2QgcA6gmAQQgogGgOAGQgUAJAIAjQgPgQgIglg");
	this.shape_462.setTransform(-81.8871,87.4226,0.1353,0.1353);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#262222").s().p("AgSDqIgWgCQgOgBgigIQghgIgXgSQgYgSgKgcQAfgNAcABQAUABAfAHIAYAGQASgbAIglQAJgpgDhAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAQACAAADACQACgFABAAIAbgBIAbABIAEAFIABgFQAegPgCggQgCgZgUgeQgUgSgFgLQgIgSAdgCIgvgeQgFgDgFgEQgEgFgBgEQgFgKARACIADgFIAhABQAZACADAHQAEAHgNAAQgQgCgDABIgZAGIA0AAQAEADAJAXQAJAXgCACQgQgBgRAEIgEAAIAAAFQADABATgBIASgCQADACAFAOIAKAdQAPApAQAIQACACAMACQALACABADIADAJIACAKIgDAFQAAABgBABQAAAAAAABQAAAAABAAQAAABABAAQAFgBAAABIgCAFIAAA5QgIALACATIACAPIABAOQgCAMgFAFQgGAGgLgDQAAABAAABQAAAAAAAAQAAABABAAQAAABABAAIAFACQAEAFgGAKIgGAIIgDAGIgCALQgBAHgEAFQgGAJgfANQggAOgKgDQgEgBABgEQAAgEADgEIAEgCQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQgLgBgGACQgHADACAJIAMgIIgCAHQgBADgDACQgHADgIAHQgHAGgMAEIgTAEIgNACIgCAAg");
	this.shape_463.setTransform(-74.7833,89.4365,1.0999,1.0999);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#443D37").s().p("AkseJQjdgMjCirQjMi1hfknQgZhdhlkjQhRjqghioIAOhkQhQoqACoyIgtAlQANhEgTh+QgUiLADgwQAEg+AxhUQAxhXAEgjQAFgkgHg7QgJhJAAgWQgBhwBdhLIAKBtIAKgsQAGgbAGgQICSiSIAzAPQAsgoBAgbQBDgcBCgDQCggJA5CBQDEBjCLDUQCvENDPF+QAlAdAugtQAggfATgqQArgRBHBAQgaiDAVhwQAVg2BDApQAUgjhcjXQhRi+gvhHIAZgsQgZgmAOgNQAOgMApATIAdgMQBoCvCBCPQAgAMAKAyQAKAzgfASQgKAzAvB/QAuB6AhAdQAJAHBIjNQBHgrAIg/QAGgugfhaIAhgqQANACAMgJIATgPQAvAbAYBIQAZBLgfAtQgCAiAKAXQAMAcAYgUQgSgxAFgTQAHgbAyAIQBECUBEDPQBRD5ABB0Qg+BKgQBmQgQBmAlBkQAaCDhYA8QhUA7h1guQhdA0hSANQhQANhsgTQg7BNg2AlQgzAigdgMQgegMAFg3QAGg8AwhcIhrgXIAZFqQhhCDBSC0QADBKhABJIg/HIQgwFdi1C1QiYCZjQAAIgegBg");
	this.shape_464.setTransform(-12.6824,81.7644,0.1353,0.1353);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#F4F1EC").s().p("AjEAYQAigtBwgEICqAHQAVABAlgEQAZAFgHAoIjEACIjEgCg");
	this.shape_465.setTransform(-75.1627,28.8754,0.1353,0.1353);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F7F7F4").s().p("AkRDoQACgGAfgeQAhggBPg7QBMg4AfggQBqhsg1iVQAbASB6A8QBqA+gPAtQgDAJjiByQjpB2gnA2IgUABQgaAAACgJg");
	this.shape_466.setTransform(-63.2032,58.4688,0.1353,0.1353);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#262222").s().p("AgBDjQgpgHgqgeQgpgegagoQgbgrABgoQiuBDjAgOIgkggQABgrAkgaQAJgHA/ggQAXAEBigJQBkgJgCgJIgWgrQAVgFAvgSQArgNAgACQALABATAUQASASAFgFQADgCgDgTQgCgUACgCQAEgFARgGQASgHAFgEQgDAyANgJIAQgOQAKgLAJgDQCdgxBIgGQAkgCAHABQAXAFgOAaQgKAUijAwQiIAohFANIAeAsQgEAeALAiQALAgAQAPQARAQALgOQANgRABg1QASggB4gbQB9gcAhAiQA7gBAJgHQAIgIgWgeQgLgPAVgnIAKgHQALgHABgHIhCgBQgJg3AUgKQAMgGBAAGQC0CXgbCdQgRAdjYA8QjfA/gugYQgYASggAAQgKAAgKgCg");
	this.shape_467.setTransform(-83.579,66.249,0.1353,0.1353);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#0D0C0B").s().p("AitZDQgHgggwhPQguhMgEgZQgCgSAKgtQAKgogJgjQgRhBhShSQhOhNgIg1QgDgVAXgIQAYgHgCgXQgGhLhSj5QhKjjAIhfQgugHAKg6QAJg6AogFIAJgvQgChKgUhgQgVhogDgpQgBgXALh6QAMh5AFgQQAGgUAogNQArgPAOgXQAvhPgShbIgRhJQgIgrAEghQAHg0BGiGQBIiKAlgVQAcgRAqAFQArAEADgCQAOgIAMgjQAOgnAJgKQAIgIBihVQBlhWAKgGQArgcCJgrQCGgrAzgEQAegDATAJQALAGAcAXIAAAAQAmAagDASQgCAPgdAEQgcAEgkgHQglgIgWgQIhOAIQgMBZi4gYIgBAxQg5ACgzA6QgSBOhYBOQhRBGhZAeQgpBJg2gXIAKA9QhWCBALC1QAiAmgZBUQgZBUgyANQgqAtgQBBQgLAtgDBVQgEBeARDhQAEAsAMAdQAdAGgdAQQA7HKBXFnQBLA1A8CAQA4B2AIBlIgeAtQBFBHgNBAQAKgbAUAaQATAZgGAZQgHAfgyADIgGABQgsAAgCgog");
	this.shape_468.setTransform(-92.3341,85.8234,0.1353,0.1353);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FDFEFD").s().p("AE0J6QgFAAguhFQg0hNgUgUQiRiRjQhAQjVhBjGAtQBFiRgei9QgViHhRjBQAwglBXgyQBFgwAihLQA0AaCdBFQCEA7BJArQhoB8gXCJQgaCWBPCEQCRBeDPB/IFjDZQgaAXg4ACQhQADgOADQgQAEhDAgQgwAWgXAAIgFAAg");
	this.shape_469.setTransform(-76.1995,44.8844,0.1353,0.1353);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#101110").s().p("EgoXAhFIgEgbQgEgNgOgEQBDjHCYjKQAkgwBkh9QBahvA1hJQBQhvCMj5QCJjzBUhxQAQgXAugeQArgeAFgJQAWglAHgrQAFgtAFgVQARhJB2hHIgBAAQBKgtFThpQE/hjAKgNQAFgGgKgpQgNg4gDggQgKiEBrg9QAngWCngZQCdgXALgPQAEhhgiiZQgrjIgGgrQgJhKgKh5QgBgQAfiRQAfiTAIgQQARglA7hTQAtg/AghkQAfhdCUhWQBeg1Ceg5QG/ihGZCXQCoA+DHB/QB7BPD1C1QCWBvDHCZQEgDfAKAZQAJAUgJAfQgJAggRAEQgbAHjygHQjWgHgYAfQgEAFAAAoQABAqgKAUQgHAPgcANQgeAOgFAHQgUAXgICvQgJDEgPAuQgEAOgqA+QgdArALAuQgLglgKgNQgPgSgeADQhNBrhhgUQgagWgGgOIgMgdQhmgFA6AaIALAWQAGAPAFAHQAUAriOBdQiDBUg2AHQi8goi2hkQgIAPgGAmIgIA5QhVAEh9hYQhchChahiQhAhHgYg1QhYiHiChTIgWAAQgzAWhBhGQg+hEAEg7IhLgTQg0hVgaA9QEpG7FlGXIAbgOQA3A7BHAVQAVAAAHAHQCyC4B0B6QAMAMgPAHQgOAHgVgMQgUARgFgDIgMgGQAKAJAFAbQBQgBBQA1QBHAvA1BMIgWArQgxBDgdBsQgtBIh1AtQh8Avgyg3QgUArgjAAQgdAAgogeQhKhqhqAXQhVAjg3ABQgxABgJgaQgKgZAhgkQAjgnBGggIhziPQgpAWgoACQglACgUgRQgVgQAHgcQAJgeArgiQgMhNgUgNQgXgRhJAdIgvgNIgVgsQgZgwBQgRQgfAAgggVQgcgSgPgZQgOgaALgNQAMgPAqAJQAchJBiA/QgOhbgwhQQgxhThKgzIgHg4QgpAVgogEQgmgDgYgYQgYgYABgkQACgnAhgrQAEgsAMABQANABAPAqQAhhVgrgPQgdgKhcAWIggAuQjLAbgEBeQgEBUCbB4QATgFAOACQAQADA8CAQA+CFgSAWIgVAWIggACQhjiQiEh4IgaARQgkg7gvAUIgcAyQhXAlhyAYQh9AahTgGQAMAegVAUQlFBJgfD1QkCEdiXFrIg3AgQlTGRjxHPIggAKQAZAigOANQgGAGgLAAQgPAAgWgJgAC8gsQgbALgBAIQgBAZBYA3QA4AkBAAfIgEAdQA8AbBCAiQgngcgagYQgGgFALgZQgWADgEgEQgFgDAJgSQhkg0hOhXQgXgYgSgaQAGAVgGAQgACQieQgOgegHgfQgagBgLgKIgFgGQAFAUgHATIABAAQAeAAAiAngAArkfQAVASAKASIgCgMIi8kbQgPAsAUBEQASBAAqBAQAPgJAQAAQAcAAAjAcg");
	this.shape_470.setTransform(-20.1035,-41.6992,0.1353,0.1353);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#272323").s().p("AgLDvQgQABgGgHQAEgIgHAAQgIACgDAAIgRgKIgRgKQgZgSgWgjQgTgegNgjQgJgagEgVQACgCARACQASACAEACIALAVIANAbQAQAXATAJQAXAKAWgPQAdgUAAhKQAAgbgDgfQgEgbgFgTQgIgYgNgXQgOgagRgOQgTgQgSAEQgWAEgSAfIgEABIgSgKQgIgEgCgDQgDgEAAgHQABgGAEgOQAJgRANgMQANgNAQgGQAjgOAgAXQA0AmAXBHQARAxAGBQQgBgYAVAAQABgQAJgFQAKgFAKAOQABABAMgFIANgIQgEgEAAgEQAAgEADgDQADgCAEAAQAEABAEAEQABANAGAGQAGAHAGgOQAKgHADAHQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAGA8QgDAMgCAXQgCAZgCAJIgEALQgEAGABADIACAFQADAEgBADQAAAEgIAOQgIANgCgCIAAgDQAAgBAAgBQAAAAAAAAQgBAAAAgBQgBAAgBABQAAADgEAGQgDAFgBADQAAABAAABQAAABABAAQAAABAAAAQABAAAAABIAEgBQADADgCAHIgHAOIgFAEQgDADgEACQgCABgJABQgGABgDAFQAPAThAANQgSADgQABIgIAAQgPAAgIgDg");
	this.shape_471.setTransform(84.3163,67.7462,1.0999,1.0999);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#0B0A0A").s().p("AsALjQAngCAggKIgBAAQgDgHAFgGQAEgFAIgCQAIgCAFACQAGADgBAHIgIAGQgCADAEgBQAFAAAMgDIAIgDQATgHAMgHQAVgNgBgTQAKgMACgNQgGgBgBgFQAAgEAFgDQALABAEgGQACgEABgMQgIgeALgZIAAg1IAFgDQAKAAAAAPIAAAKQADgDAKgEQAIgEAKgDQAJgDACAAQgBgLgEgLIAEgFQgIgDgBgNQgDAGgSAAQgHAAgGgCIgDgBIACAGQABAGgFADQAFAGgCAEQgCAFgHgEQgGACAAgEQAAgEAEgEIgFgPQgWgCgMgMQgIgJgLgYIgUg1IgjACQgXgSAzgCQgHgYgJgPQgHABgTgBQgVgBgDgFIABgEIAagHQARABADgBQACgBgJgBIgUgDIgRAAIgLgFQgEAGgRgCQgHgBgFgDQgGgCgBgEQgGACAEALIgEgCIgBADQgYAEgWAJIgGgDQgEABgCgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgFAIgDQgBgFADgCQALgKAWgCIASgBIASgBIAJgDQAGgCAGAAQAQgBASAGIAgAOIACgKQABgGADgDIgBgDQAbgVAdgQQgPgHgIgMIgrgbIgNgEQgIgCgEgDQgqgZgYgQQgFgEgCgKQgCgJABgLQABgLADgKQAEgKAFgEIgngSIgEgIIgpgVQgfgPgGgFQgEgEgFgMQgEgMACgDQALgDASAGIANAFQAIADAFAAQALAAAXgBIAjgCQAMgDAMAAQANAAALADIAcABQARABAKgCQAMgCAbgKQAcgKANgCIA+gHQAzgFACgDIACgGIgBgGIgIgOIgLgPIgEgFIgFgFQgGgFgDgKQgMghACgdQABgYANglQgDgIABgFQACgFAIgEIADgEQACgDAAgCQAAgCgFgIQgFgGAAgFQAAgEAGgOIAEgOIgQgDQgLgCgFgDQgGADgSgMIgNgKQgFgFAAgBIACgEIgDgMIgDgMQgGgDABgHQABgGAHgBQAFgEAAADQABACgDAFQAFABAAAEQAAADgFADIAGADQAFARAPAMQANAKATAFQARAEAUgBQATgCAQgGIAHADQARgEgBAHIgWAOIgRABIAFAFQAGgGALALQAJAKACALIAJAAQAiAcAqAMQAsAMAqgIQAFAAANgFQAOgFANgHQAkgRgCgJQgMAAACgIQABgHAJgHIAdgZQgLgQgPAEQgTAPgSgGQgSAZglACQgdAtgcgVQgRADgOgFQgQgGAAgQQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQANgFASACQAagGAZABQAAANAIgRQAogBAagaQAHABAHgBQAFgBACgCQACgCgEAAQgFAAgJADQgFAAgDgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgDACgBQADgCAEAAQABgGALgBQAKAAAEADQADAJAFAAQADABAJgGIADgBQADAEAMALIAcAUQAmAaAFgFIAAgEQAPgFABgLQgJAFgPgEQgLgDgOgHQgYgTgbgKQgEACgBgHIgCgBIAAABQgFAEgEgQQgDgNABgHIgpACQACALgHAFQgCAegLgoQgFgBgCgDQgBgCABgGQABgGAggCQAVgCASAAIABADQAKgBAHgDIAuAKQAXAIgFgmQgWADgLgLQgXAEgRABQgXACgRgCQgEgBgEgEQgBAIgMAEQgKAEgPAAQgNAAgOgCQgNgCgFgDIgCgFQgZAJgWADQgZAEgXgEQgJADgJAKIgGAAQgDAGgDgBQgEgCACgGIgCgDQAVgTAUgWQgJgYAPABQAAADAFgFIAGgIQAHgMgGgZQgGgYgJgNIABgHIgQgPQgLgGgEgHQgEgFADgDQADgDAIADQAIADAJAJQAKAKAIANQAIAMAEAOQgDgLADgFQADgFAEABQAFABABAEQABAFgFAGQALAKgDAVIAAAbQAGAAABAEQABADgFACQgBAFgHAHQgMAKAAADQABADAIgDIASgHIAQgIQALgLAJAEIAAgGQAPgRgFgnQgEgZgMgjQgBgCAEgCIgBgEIAEABQACAAAFAIIgUgpIACgFIAFABQAIADANAUQANAVgCAJQAGgBAAACQABABgEAEIAIADQAKAcAPAWQAQAYAVASQAHgDAJAAQAKAAAEAEQAEACABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCADgDAAQgEABgEgBIgQAFQgHACgEgBQgJgCgIgTIgHgHQgGgEAAACQAAACAOAXQAPAXACABQACABAgABQAgAAACgBIAEgFIAFgJQAHgOgJABQgLACgIgDQgIgDgCgFQgCgGAEgEQAGgFAMAAQASAGAHgFQAFgDAFgTQAJgSgdgJIgBgGQgFgDABgBQABgCAGABQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQgTgNgRgRQgSgRgNgTIACgCIAEgBIgPgKQAAABgBABQAAAAAAAAQgBAAAAAAQAAgBAAgBIgEgBIgPgTIgOgTIAAgEQgHgDgHgKQgIgLAEgFQAAgBAAAAQAAgBABAAQAAAAAAABQABAAAAABQAIAEAIAIQAGAIAFAJQALAOASAOQAPAMAPAJIAAgGQgFgEABgFQAAgEAHAAIACgBQAOAJAHADQAKAFAHAAQAQABAWgTQAFADAAgMQgEABgBgCQAAgCADgCQgBgBAAgBQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAFgBABACQACACgDAFQANABAJgMQAHgNABAVIABAIIACAIQAHABAAAPQARAIANANQAMALAKASQAgA+ApAgQAzAnA7gQQASAHALgBQAKgBATgJQAKgEASAWIANARQAGAJABAFQAFAMgDAQQgCAPgJAMQgIANgNAGQgNAGgPgEQghgOgGAVQgTAFgSgEQgUgEgLgOIgeAKIgGAsQgFADgBAEIAAANQAAABAAAAQABABAAABQAAAAABAAQAAAAABAAIAIAAQAGAAAGACQAXAHAXAUIAUATIARATIAPANQALAJAEAFIAGgEIALgIQAPgNAIABQACAAAEADQADADAEgBIAhgMIAkgNIALgHIAIgFQAEgBAEACQAFADAHAJQANATAAATIgCARIgBAUIACAFQACAEAAADQAAADgDAIIgEAMIgDAcQgBATgCAIQgCAKgTAGIgNAFQgHACgBABIgEANQgDAMABABIAPADIASAfQAOAZACABQAFADALgCIAWgEQANgCAJACQALAEAHAMQAFAJADAcQADAagBAMQgCALgHAKIgQAPIgCADIAAADIAgAOIACgOIACgQIAKgWIAMgYQABgDAKgJQAJgJADgCIAGABQAFABACgBQADgCADgGQACgGACgBQADgDAOgFQAOgFAEAAQADAAAEACIAFACQAEAAAKgIQALgIAGgCQARgDATAIIAOAGQAIADAGgBQADAAAFgDQAFgCAEABQAUAFANAQIAKAPQAHAJAGAFIAFADIAHAEIANAbIAPAeQAXA3AJBNQAJBNgLA6IgEAKIgDAIIABAIQABAGgBAFIgEANIgGAMQgBADgEACIgGADQgHAEAAAGQgCAGgDgBQgDgBgDgGQgBgCACgEIAEgJQAIgLAFADQAFgEAEgKQAEgLgGgEQAJgmAEgcQAEglgFgeQAHgEgEgQQgHgCABgMQgFADgDgBQgDgCgFgaQgFgaABgCIAEgEIAGgCQgJgrgQgdQgFAGgGgFQgFgDgEgLQgEgJgCgJQgBgKABAAQAOAEgGgEQgEgDgJgDQgGAAgBgKIgLgCQgGgCgEgDQgIgIAOgGIgDgEIgGgGQgJgGgCAFQgGACgIgDQgIgCgBgGQgFACgDAAQgDgBgFgEIgDAFQgZgMgagBQADAJgQACIgDAAQABADgDAEQgDADgFABQgEABgDgBQgEgCgBgEQgKADgDACQgFAEgDAIIgjAQQgKAEgDAEQgEAFABAKIgYAjIAEAGQgMAbAjAJQAUgeAWgFQAUgEAUAQQARAOAQAaQANAXAIAZQAHAWAEAdQAFAjgBAeQgCBPgpATQghAOgeggQgUgWgSgpIgQgDQgNgCgBABQgCADAJAZIAMAfQARApAXAbQAaAgAjAQQAEgCAGABQAEABADACQADACAAACQgBADgGACQgFAGgOgBQgNgBgOgLQgPgLgFgKQgPgIgJgLQgLgNgEgPQgFgBAAgBQAAgBAFgCQgEgBgDgEIgGgIQgMgTgIgaQgIgYgDgYQgRABgIgIQgHgDgGAFIgngHQgegGgFgDIgFgFIgFAEQg0gWhFAPQgbAGghAMIg5AZQgBAbACAaIgFAEQAEAEAAAFQgBAFgGACQAGACgBAOQgBAMgDAIIgFALQgDADgHAEQAAAIgFAFIAFAFQgGA7g0ARIgCAFQgjABgiAEQgDASgEAIQgGALgNAEQAIAUgKANQgJALgWAGIgLAJIAFgBIgEADQgIABgFADIgIACIgGADIgGACIgpAHQgYAEgRgEIgagGIgWgEQgFAAgEgBIgJgCIgGgMQgQgIgMgOQgKgNgIgTQAEgDgBgDQgFADgDgDQgDgDADgFIgIgDIgQgqIACgGQgMgVgGgbIgGgGQgIgkgFA1IgGACQAFAHgHAOQgFAMgJAHQgIAGghAGQggAGgMgBQgZgCgSgSQgQgPgLgaIgUADQgBANgHAOQAIAWgFAUQgEARgQAWQgCANgHAEQAHAHgGAKQgFAJgKADIACAFIgKACIghALIgjAJQgTAFgYACIglACQgOAAgDABgAn8IjQgCABACAGQADAHAGAJQAKANANAHQANAHAOAAQAOAAANgGQANgHAKgMQAIgGAGgCQAJgEAFAEQAJgXADgaQgEgFAAgFQAAgEADgCQADgDAEACQAEACADAGQACACgBgIQgBgHgBgBQgDgCgegBQgegBgHADQg8AghCALQgFgBgBgBIAAAIQBRgNA0gkQAEACAAAEQAJAEgHAKQgFAIgKAFQgeANgiAIQgBABAMAOQAMAMAEACIgBAGQgLALgTgYQgFgLgEgGQgEgDgBAAIgBAAgAmNkYQgMgGgBgJQgIABgSgOQgSgOAAgGQgBgFAEgCIgVACIgKAYIgFABQAIANAPAEQAKACAUgDQATAEASAIIAAAAgAhCpIQAGAFAHACQAIACAGgCQgKgIgDgPQgVgWATgQQgeAPgjgVQgDABgDgBIgBADIgUgOQApAiAnAlgAI9I1IAEAAIgCAAIgCAAg");
	this.shape_472.setTransform(6.4112,32.1281,1.0999,1.0999);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#0B0A0A").s().p("AFuDlQgpgFgMgpQhJAEglgaQg6hDh0gUQgVACgFgOQgFgNAJgTQjnAOjdguIgGghQgWAVgGgHQgGgGAMgdIAGggQBjgDAahLQgRgnAQgQQAOgPAbAMQAcAMAPAfQAQAkgOAuQFPBGFPBVIAfAnQAsAagGAkQgGAfglAXQgfATgeAAIgMgBg");
	this.shape_473.setTransform(68.0575,55.6932,0.1353,0.1353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[]},1).to({state:[{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},68).wait(97));

	// Layer_10
	this.instance = new lib.ee6smokerolling2("synched",0);
	this.instance.setTransform(-16.45,78.05,0.2708,0.2708,-60.0001,0,0,-141.1,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:2},0).to({_off:true},1).wait(68).to({_off:false,startPosition:71},0).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-70.5,241.7,185.7);


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

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(385));

	// Layer_9
	this.instance = new lib.Symbol1();
	this.instance.setTransform(272.65,181.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(385));

	// lo
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(253.05,225.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(385));

	// dis
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(109.25,227.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(385));

	// logo
	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(230.2,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(385));

	// Heasd4
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(46.65,38.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(56.65,38.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(283).to({_off:false},0).to({_off:true,x:56.65,alpha:1},7,cjs.Ease.get(1)).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(283).to({_off:false},7,cjs.Ease.get(1)).wait(89).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// Heasd3
	this.instance_6 = new lib.fr2();
	this.instance_6.setTransform(40.1,51.35,1,1,0,0,0,58.1,38.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).to({x:70.1,alpha:1},9,cjs.Ease.get(1)).wait(72).to({alpha:0},7).to({_off:true},1).wait(101));

	// Heasd2
	this.instance_7 = new lib.heasd2("synched",0);
	this.instance_7.setTransform(64.3,38.35);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({_off:false},0).to({x:74.3,alpha:1},10,cjs.Ease.get(1)).wait(77).to({startPosition:0},0).to({alpha:0},6).to({_off:true},7).wait(191));

	// head
	this.instance_8 = new lib.Tween10("synched",0);
	this.instance_8.setTransform(33.75,42.45);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({x:73.75,alpha:1},9,cjs.Ease.get(1)).wait(66).to({startPosition:0},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(290));

	// PIC4
	this.instance_9 = new lib.Symbol1_1("synched",71);
	this.instance_9.setTransform(-96.35,196.65,0.5,0.5,0,0,0,-27.1,110.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(283).to({_off:false},0).to({regX:-8.3,regY:113.2,guide:{path:[-96.3,196.7,15.5,194.9,127.2,193,140.2,188.9,144.9,183.5,149.5,178,167.5,173.5,185.5,169.1,210.7,168.2,235.8,167.3,301.9,166.8,355.9,166.5,390.4,166.7]},startPosition:167},100,cjs.Ease.get(1)).wait(2));

	// PC3
	this.instance_10 = new lib.Tween12("synched",0);
	this.instance_10.setTransform(420,172);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(195).to({_off:false},0).to({x:-110},88).wait(102));

	// PIC2
	this.instance_11 = new lib.PIC2();
	this.instance_11.setTransform(-96.35,181.8,0.5249,0.5249);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95).to({_off:false},0).to({guide:{path:[-96.3,178.7,11.8,177.9,120,177,138.4,176.6,153.4,173.6,168.4,170.6,182.5,163.5,196.6,156.3,219.7,154.5,242.8,152.6,301.3,152.8,358.6,153,393.6,152.4], orient:'fixed'}},98).wait(192));

	// PIC1
	this.instance_12 = new lib.pic1();
	this.instance_12.setTransform(410.5,134.05,0.5249,0.5249,0,0,0,115.5,110.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({x:-73.5},86).wait(290));

	// Layer_2
	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(385));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(385));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.4,0,690.9,251);


// stage content:
(lib.WBAY_213628_MM_300x250 = function(mode,startPosition,loop,reversed) {
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