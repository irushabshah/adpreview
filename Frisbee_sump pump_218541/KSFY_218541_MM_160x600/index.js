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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.frame1 = function() {
	this.initialize(img.frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.frame2 = function() {
	this.initialize(img.frame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.frame3 = function() {
	this.initialize(img.frame3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.water_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.water();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.t3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#780031").s().p("AgSBYQgHgGAAgLQAAgJAHgIQAHgHALAAQALAAAIAHQAHAIAAAJQAAALgHAGQgIAIgLAAQgLAAgHgIgAgTAdIgFh7IAvAAIgFB7g");
	this.shape.setTransform(45.275,40.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AggBXQgQgHgKgNQgJgMgBgSIAwAAQABAKAGAFQAFAGAJgBQAKAAAGgEQAFgEAAgJQAAgGgEgEQgFgFgGgDIgSgHQgSgFgLgGQgLgEgIgLQgIgKAAgSQAAgZASgOQATgOAdgBQAdABATAOQASAOACAaIgwAAQgBgJgGgFQgGgFgIAAQgIAAgFAFQgFADAAAJQAAAJAIAFQAIAFARAFQASAGALAGQALAEAIALQAIAKAAAQQAAAQgIANQgIAMgPAIQgPAHgVABQgTgBgPgGg");
	this.shape_1.setTransform(32.175,41.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AhFBbIAAi1IBHAAQAWAAAPAHQAPAIAIANQAIANAAARQAAAQgIAOQgHAMgPAIQgPAIgXAAIgaAAIAABBgAgYgJIAYAAQAMAAAGgGQAGgGAAgLQAAgKgGgGQgGgGgMAAIgYAAg");
	this.shape_2.setTransform(16.575,41.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AA7BbIAAhsIgpBsIgjAAIgphsIAABsIgsAAIAAi1IA0AAIAyB9IAzh9IA1AAIAAC1g");
	this.shape_3.setTransform(-3.9,41.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AgnBUQgRgJgJgRQgKgRAAgYIAAhsIAsAAIAABsQAAAQAIAJQAIAJAPAAQAPAAAJgJQAIgJAAgQIAAhsIAsAAIAABsQAAAYgKARQgKARgSAJQgRAIgVAAQgWAAgRgIg");
	this.shape_4.setTransform(-24.975,41.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AhFBbIAAi1IBHAAQAWAAAPAHQAPAIAIANQAIANAAARQAAAQgIAOQgHAMgPAIQgPAIgXAAIgaAAIAABBgAgYgJIAYAAQAMAAAGgGQAGgGAAgLQAAgKgGgGQgGgGgMAAIgYAAg");
	this.shape_5.setTransform(-41.775,41.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AhFBbIAAi1IBHAAQAWAAAPAHQAPAIAIANQAIANAAARQAAAQgIAOQgHAMgPAIQgPAIgXAAIgaAAIAABBgAgYgJIAYAAQAMAAAGgGQAGgGAAgLQAAgKgGgGQgGgGgMAAIgYAAg");
	this.shape_6.setTransform(29.525,13.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AA7BbIAAhsIgpBsIgjAAIgphsIAABsIgsAAIAAi1IA0AAIAyB9IAzh9IA1AAIAAC1g");
	this.shape_7.setTransform(9.05,13.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AgnBUQgRgJgJgRQgKgRAAgYIAAhsIAsAAIAABsQAAAQAIAJQAIAJAPAAQAPAAAJgJQAIgJAAgQIAAhsIAsAAIAABsQAAAYgKARQgKARgSAJQgRAIgVAAQgWAAgRgIg");
	this.shape_8.setTransform(-12.025,13.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AggBXQgQgGgKgNQgJgNgBgSIAwAAQABAKAGAFQAFAFAJABQAKAAAGgFQAFgFAAgHQAAgHgEgFQgFgEgGgDIgSgGQgSgGgLgFQgLgFgIgKQgIgLAAgRQAAgaASgPQATgOAdABQAdgBATAOQASAPACAaIgwAAQgBgJgGgFQgGgFgIAAQgIAAgFAEQgFAFAAAIQAAAIAIAFQAIAFARAGQASAGALAGQALAEAIAKQAIALAAAQQAAAQgIAMQgIAOgPAHQgPAIgVAAQgTAAgPgHg");
	this.shape_9.setTransform(-29.175,13.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgyBbIAAi1IAsAAIAACTIA5AAIAAAig");
	this.shape_10.setTransform(45.55,-13.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AgzBbIAAi1IAtAAIAACTIA6AAIAAAig");
	this.shape_11.setTransform(33.15,-13.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AAtBbIgMggIhCAAIgLAgIgvAAIBCi1IAzAAIBCC1gAAWAZIgWhCIgWBCIAsAAg");
	this.shape_12.setTransform(16.85,-13.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgVBbIAAiSIgxAAIAAgjICNAAIAAAjIgxAAIAACSg");
	this.shape_13.setTransform(-0.425,-13.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AggBXQgQgHgKgNQgJgMgBgSIAwAAQABAKAGAGQAFAEAJAAQAKAAAGgEQAFgEAAgJQAAgGgEgFQgFgEgGgDIgSgHQgSgFgLgGQgLgEgIgLQgIgKAAgSQAAgZASgOQATgPAdAAQAdAAATAPQASAOACAaIgwAAQgBgJgGgFQgGgFgIAAQgIAAgFAFQgFAEAAAHQAAAJAIAGQAIAFARAFQASAGALAFQALAFAIALQAIAKAAAQQAAAQgIAMQgIANgPAIQgPAHgVAAQgTAAgPgGg");
	this.shape_14.setTransform(-16.075,-13.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AAlBbIhJhvIAABvIgtAAIAAi1IAtAAIBJBwIAAhwIAtAAIAAC1g");
	this.shape_15.setTransform(-33.825,-13.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgVBbIAAi1IArAAIAAC1g");
	this.shape_16.setTransform(-47.425,-13.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AhCBXQgPgHgIgMQgJgNAAgQQAAgSAJgOQAKgNASgIQgHgJgDgHQgDgIAAgJQAAgNAHgLQAHgKAMgHQANgFATAAQAQAAANAGQAMAHAGAKQAHALgBANIgpAAQAAgHgDgDQgEgEgGgBQgGAAgFAEQgEAEAAAGQAAAFADAGQAEAGAIAIIArArIACgEIACgEIAJgPIAtAAIgNAVQgHAQgJAOIAsAqIgzAAIgRgQQgaAUgiAAQgVAAgQgIgAg3AjQAAAKAHAHQAIAGANABQARgBANgJIgogoQgSAKAAAQg");
	this.shape_17.setTransform(54.1,-41.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AgzBbIAAi1IAtAAIAACTIA6AAIAAAig");
	this.shape_18.setTransform(32.1,-41.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgyBbIAAi1IAsAAIAACTIA5AAIAAAig");
	this.shape_19.setTransform(19.7,-41.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#780031").s().p("Ag3BbIAAi1IBvAAIAAAjIhCAAIAAAlIA6AAIAAAiIg6AAIAAAoIBCAAIAAAjg");
	this.shape_20.setTransform(6.1,-41.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#780031").s().p("AggBXQgQgGgKgNQgJgNgBgSIAwAAQABAKAGAFQAFAFAJABQAKAAAGgFQAFgFAAgHQAAgIgEgDQgFgFgGgDIgSgHQgSgFgLgFQgLgFgIgKQgIgLAAgRQAAgaASgPQATgOAdABQAdgBATAOQASAPACAaIgwAAQgBgJgGgFQgGgFgIAAQgIAAgFAEQgFAFAAAIQAAAIAIAFQAIAFARAGQASAGALAGQALAEAIAKQAIALAAAQQAAAQgIANQgIANgPAHQgPAIgVAAQgTAAgPgHg");
	this.shape_21.setTransform(-9.075,-41.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#780031").s().p("Ag3BbIAAi1IBvAAIAAAjIhCAAIAAAlIA6AAIAAAiIg6AAIAAAoIBCAAIAAAjg");
	this.shape_22.setTransform(-29.4,-41.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#780031").s().p("AAdBbIgdh3IgdB3Ig2AAIgui1IAvAAIAbCEIAgiEIAwAAIAfCEIAbiEIAvAAIgvC1g");
	this.shape_23.setTransform(-50.275,-41.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-61.3,150,122.6);


(lib.t2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#780031").s().p("AgVBmQgJgIAAgLQAAgMAJgJQAIgIANAAQAOAAAIAIQAJAJAAAMQAAALgJAIQgIAIgOAAQgNAAgIgIgAgVAhIgHiOIA3AAIgGCOg");
	this.shape.setTransform(53.55,32.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgtBhQgTgKgMgUQgLgTAAgdIAAh8IAzAAIAAB9QAAATAKAKQAJAKARAAQASAAAJgKQAKgKAAgTIAAh9IAzAAIAAB8QAAAdgMATQgMAUgUAJQgUAKgYAAQgZAAgUgJg");
	this.shape_1.setTransform(37.075,33.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("Ag2BeQgYgOgOgYQgPgZAAgfQAAgeAPgZQAOgYAYgOQAagOAcAAQAeAAAYAOQAaAOAOAYQAOAZAAAeQAAAfgOAZQgPAYgZAOQgYAOgeAAQgcAAgagOgAgngsQgPARgBAbQABAcAPAQQAOARAZAAQAaAAAPgRQAPgRAAgbQAAgbgPgRQgPgQgaAAQgZAAgOAQg");
	this.shape_2.setTransform(14.75,32.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AgYBpIAAhFIhJiMIA6AAIAoBYIAohYIA6AAIhJCMIAABFg");
	this.shape_3.setTransform(-7.1,32.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AhABpIAAjRICBAAIAAApIhNAAIAAAqIBEAAIAAAnIhEAAIAAAuIBNAAIAAApg");
	this.shape_4.setTransform(-31.4,32.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AhTBpIAAjRIBeAAQAgAAASAOQASAPABAZQgBATgJAMQgKAMgQAFQASADALAOQALAPAAASQAAAagTAQQgSAPghAAgAggBAIAlAAQANAAAHgGQAIgGgBgLQABgLgIgGQgHgHgOAAIgkAAgAgggTIAhAAQANAAAGgGQAHgFAAgLQAAgLgHgGQgGgFgNAAIghAAg");
	this.shape_5.setTransform(-49.2,32.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AglBkQgTgHgLgPQgLgPgBgUIA3AAQACALAGAHQAHAGAKAAQAMAAAGgFQAHgGAAgJQAAgIgGgFQgFgFgHgDIgVgIQgUgGgNgGQgNgGgKgMQgJgMAAgUQAAgeAWgQQAVgRAiAAQAiAAAVARQAVAQACAeIg3AAQgBgKgHgGQgHgGgKAAQgJAAgGAFQgGAFAAAJQAAALAKAFQAKAGATAHQAVAHAMAGQANAFAJAMQAKAMAAATQAAASgKAPQgJAPgRAIQgSAJgXAAQgXAAgRgIg");
	this.shape_6.setTransform(51.45,-0.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AgZBpIAAjRIAzAAIAADRg");
	this.shape_7.setTransform(37.875,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AAoBpIAAhWIhPAAIAABWIgzAAIAAjRIAzAAIAABSIBPAAIAAhSIAzAAIAADRg");
	this.shape_8.setTransform(22.525,-0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgYBpIAAioIg5AAIAAgpICjAAIAAApIg4AAIAACog");
	this.shape_9.setTransform(2.7,-0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgZBpIAAioIg4AAIAAgpICiAAIAAApIg3AAIAACog");
	this.shape_10.setTransform(-21.35,-0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("Ag/BpIAAjRIB/AAIAAApIhMAAIAAAqIBDAAIAAAnIhDAAIAAAuIBMAAIAAApg");
	this.shape_11.setTransform(-38.1,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("Ag6BpIAAjRIAzAAIAACqIBCAAIAAAng");
	this.shape_12.setTransform(-52.925,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgZBpIAAioIg3AAIAAgpIChAAIAAApIg3AAIAACog");
	this.shape_13.setTransform(38.65,-33.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AghAoIAQhPIAzAAIgiBPg");
	this.shape_14.setTransform(25.275,-39.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AArBpIhViBIAACBIgzAAIAAjRIAzAAIBVCBIAAiBIAzAAIAADRg");
	this.shape_15.setTransform(9.125,-33.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("Ag2BeQgYgOgOgYQgPgZAAgfQAAgeAPgZQAOgYAYgOQAZgOAdAAQAeAAAYAOQAZAOAOAYQAPAZAAAeQAAAfgPAZQgOAYgZAOQgYAOgeAAQgdAAgZgOgAgngsQgQARABAbQgBAcAQAQQAPARAYAAQAZAAAQgRQAPgRgBgbQABgbgPgRQgQgQgZAAQgYAAgPAQg");
	this.shape_16.setTransform(-13.9,-33.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AheBpIAAjRIBPAAQAhAAAYANQAZANAOAYQAOAYAAAeQAAAfgOAYQgOAYgZANQgZANggAAgAgqA9IAYAAQAcAAAQgQQAQgQAAgdQAAgcgQgQQgQgRgcAAIgYAAg");
	this.shape_17.setTransform(-36.175,-33.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-56,150,112);


(lib.t1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#780031").s().p("AgpBpQgIgJAAgLQAAgMAIgJQAJgHAOAAQANAAAHAHQAJAJAAAMQAAALgJAJQgHAHgNABQgOgBgJgHgAgqAiIgBg2IASAAQAXgBALgFQAMgGAAgPQAAgKgFgHQgGgFgKgBQgKAAgGAHQgGAGAAAKIgwAAQgBgSAIgPQAJgOAQgIQAQgKAWABQAggBAUASQATAQAAAfQAAAcgSAQQgTAOgeABIgCAWg");
	this.shape.setTransform(49.7735,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgZBpIAAhFIhJiMIA7AAIAnBYIAphYIA5AAIhICMIAABFg");
	this.shape_1.setTransform(31.75,43.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AheBpIAAjRIBPAAQAhAAAYANQAZANAOAYQAOAYAAAeQAAAfgOAYQgOAYgZANQgZANggAAgAgqA9IAYAAQAcAAAQgQQAQgQAAgdQAAgcgQgQQgQgRgcAAIgYAAg");
	this.shape_2.setTransform(11.225,43.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AA0BpIgNglIhOAAIgMAlIg2AAIBMjRIA7AAIBMDRgAAaAcIgahMIgZBMIAzAAg");
	this.shape_3.setTransform(-11.125,43.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("Ag/BpIAAjRIB/AAIAAApIhMAAIAAAqIBDAAIAAAnIhDAAIAAAuIBMAAIAAApg");
	this.shape_4.setTransform(-30.1,43.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AAZBpIgrhPIgMAAIAABPIg0AAIAAjRIBVAAQAZAAASAIQARAJAJAPQAJAPAAATQAAAVgMAQQgMAQgXAHIAxBTgAgegKIAeAAQAPAAAHgHQAHgGAAgNQAAgMgHgHQgHgHgPAAIgeAAg");
	this.shape_5.setTransform(-47.825,43.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AhPBpIAAjRIBSAAQAZAAASAIQARAJAJAPQAIAQAAATQAAATgIAPQgIAOgSAJQgRAKgaAAIgfAAIAABLgAgcgKIAcAAQAOAAAHgHQAHgHAAgNQAAgMgHgHQgHgHgOAAIgcAAg");
	this.shape_6.setTransform(34.175,14.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("ABEBpIAAh9IgvB9IgoAAIgwh9IAAB9IgzAAIAAjRIA8AAIA7CRIA6iRIA8AAIAADRg");
	this.shape_7.setTransform(10.575,14.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AgtBhQgTgKgMgUQgLgTAAgdIAAh8IAzAAIAAB9QAAATAKAKQAJAKARAAQASAAAJgKQAKgKAAgTIAAh9IAzAAIAAB8QAAAdgMATQgMAUgUAJQgUAKgYAAQgZAAgUgJg");
	this.shape_8.setTransform(-13.775,14.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AhPBpIAAjRIBSAAQAZAAASAIQARAJAJAPQAIAQAAATQAAATgIAPQgIAOgSAJQgRAKgaAAIgfAAIAABLgAgcgKIAcAAQAOAAAHgHQAHgHAAgNQAAgMgHgHQgHgHgOAAIgcAAg");
	this.shape_9.setTransform(-33.175,14.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AhPBpIAAjRIBSAAQAZAAASAIQARAJAJAPQAIAQAAATQAAATgIAPQgIAOgSAJQgRAKgaAAIgfAAIAABLgAgcgKIAcAAQAOAAAHgHQAHgHAAgNQAAgMgHgHQgHgHgOAAIgcAAg");
	this.shape_10.setTransform(34.075,-14.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("ABEBpIAAh9IgvB9IgoAAIgwh9IAAB9IgzAAIAAjRIA8AAIA7CRIA6iRIA8AAIAADRg");
	this.shape_11.setTransform(10.475,-14.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AgtBhQgTgKgMgUQgLgTAAgdIAAh8IAzAAIAAB9QAAATAKAKQAJAKARAAQASAAAJgKQAKgKAAgTIAAh9IAzAAIAAB8QAAAdgMATQgMAUgUAJQgUAKgYAAQgZAAgUgJg");
	this.shape_12.setTransform(-13.875,-14.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AglBkQgTgHgLgPQgLgPgBgUIA3AAQACALAGAHQAHAGAKAAQAMAAAGgFQAHgGAAgJQAAgIgGgFQgEgFgIgDIgVgIQgVgGgMgGQgNgGgKgMQgJgMAAgUQAAgeAWgQQAVgRAiAAQAiAAAVARQAVAQACAeIg4AAQAAgKgHgGQgHgGgKAAQgJAAgGAFQgGAFAAAJQAAALAKAFQAKAGATAHQAVAHAMAGQANAFAKAMQAJAMAAATQAAASgJAPQgKAPgRAIQgRAJgYAAQgXAAgRgIg");
	this.shape_13.setTransform(-33.7,-14.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AAZBpIgrhPIgMAAIAABPIg0AAIAAjRIBVAAQAZAAASAIQARAJAJAPQAJAPAAATQAAAVgMAQQgMAQgXAHIAxBTgAgegKIAeAAQAPAAAHgHQAHgGAAgNQAAgMgHgHQgHgHgPAAIgeAAg");
	this.shape_14.setTransform(49.525,-43.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AgtBhQgTgKgMgUQgLgTAAgdIAAh8IAzAAIAAB9QAAATAKAKQAJAKARAAQASAAAJgKQAKgKAAgTIAAh9IAzAAIAAB8QAAAdgMATQgMAUgUAJQgUAKgYAAQgZAAgUgJg");
	this.shape_15.setTransform(28.825,-43.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("Ag1BeQgZgOgPgYQgOgZAAgfQAAgeAOgZQAPgYAZgOQAZgOAcAAQAeAAAZAOQAZAOANAYQAPAZAAAeQAAAfgPAZQgOAYgYAOQgZAOgeAAQgcAAgZgOgAgogsQgOARAAAbQAAAcAOAQQAPARAZAAQAZAAAPgRQAPgRABgbQgBgbgPgRQgPgQgZAAQgZAAgPAQg");
	this.shape_16.setTransform(6.5,-43.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgZBpIAAhFIhJiMIA7AAIAnBYIAphYIA6AAIhJCMIAABFg");
	this.shape_17.setTransform(-15.35,-43.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AglBkQgTgHgLgPQgLgPgBgUIA3AAQACALAGAHQAHAGAKAAQAMAAAGgFQAHgGAAgJQAAgIgGgFQgEgFgIgDIgVgIQgVgGgMgGQgNgGgKgMQgJgMAAgUQAAgeAWgQQAVgRAiAAQAiAAAVARQAWAQABAeIg4AAQAAgKgHgGQgHgGgKAAQgJAAgGAFQgFAFgBAJQAAALAKAFQAJAGAUAHQAVAHAMAGQANAFAKAMQAIAMABATQgBASgIAPQgKAPgRAIQgRAJgYAAQgXAAgRgIg");
	this.shape_18.setTransform(-41,-43.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgZBpIAAjRIAzAAIAADRg");
	this.shape_19.setTransform(-54.575,-43.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-66.5,150,133);


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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.frame3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.frame2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.frame1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.CTA_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CTA();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.car_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.car();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.BG_png = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


// stage content:
(lib.WBAY_218541_MM_160x600 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(277));

	// CTA_png
	this.instance = new lib.CTA_1("synched",0);
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(277));

	// Logo_png
	this.instance_1 = new lib.Logo_1("synched",0);
	this.instance_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(277));

	// car_png
	this.instance_2 = new lib.car_1("synched",0);
	this.instance_2.setTransform(210,179.1,0.6,0.6,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:80,y:300},20,cjs.Ease.get(1)).wait(76));

	// t3
	this.instance_3 = new lib.t3("synched",0);
	this.instance_3.setTransform(80,154,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(1)).wait(83));

	// frame3_png
	this.instance_4 = new lib.frame3_1("synched",0);
	this.instance_4.setTransform(80,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).to({alpha:1},13).wait(83));

	// water_png
	this.instance_5 = new lib.water_1("synched",0);
	this.instance_5.setTransform(80,404);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({y:300},26).wait(57).to({startPosition:0},0).to({y:404},13).to({_off:true},1).wait(96));

	// t2
	this.instance_6 = new lib.t2("synched",0);
	this.instance_6.setTransform(80,73.7,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.4,scaleY:0.4,alpha:0},13).to({_off:true},1).wait(96));

	// frame2_png
	this.instance_7 = new lib.frame2_1("synched",0);
	this.instance_7.setTransform(80,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({alpha:1},13).wait(194));

	// t1
	this.instance_8 = new lib.t1("synched",0);
	this.instance_8.setTransform(80,84.2,0.6,0.6,0,0,0,0.1,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0,scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:0.1,scaleX:0.6,scaleY:0.6,alpha:0},14).to({_off:true},1).wait(207));

	// frame1_png
	this.instance_9 = new lib.frame1_1("synched",0);
	this.instance_9.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(277));

	// BG_png
	this.instance_10 = new lib.BG_png("synched",0);
	this.instance_10.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(277));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79,299,179,405);
// library properties:
lib.properties = {
	id: '9FDEB53A9669492982F620CA953230C7',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"car.png", id:"car"},
		{src:"CTA.png", id:"CTA"},
		{src:"frame1.png", id:"frame1"},
		{src:"frame2.png", id:"frame2"},
		{src:"frame3.png", id:"frame3"},
		{src:"Logo.png", id:"Logo"},
		{src:"water.png", id:"water"}
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
an.compositions['9FDEB53A9669492982F620CA953230C7'] = {
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