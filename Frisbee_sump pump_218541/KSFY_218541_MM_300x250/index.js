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


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame1 = function() {
	this.initialize(img.frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame2 = function() {
	this.initialize(img.frame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame3 = function() {
	this.initialize(img.frame3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
	this.shape.graphics.f("#780031").s().p("AgRBSQgGgHAAgJQAAgKAGgGQAHgHAKAAQALAAAGAHQAHAGAAAKQAAAJgHAHQgGAGgLAAQgKAAgHgGgAgRAbIgFhyIAsAAIgFByg");
	this.shape.setTransform(148.625,-111.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgdBQQgQgGgIgLQgJgMgBgRIAtAAQAAAKAGAFQAFAFAIAAQAJAAAGgFQAFgEAAgHQAAgHgEgEQgFgEgFgCIgRgGQgRgFgKgFQgKgFgIgJQgHgKAAgQQAAgYARgNQARgNAcAAQAbAAARANQAQANACAYIgtAAQgBgIgFgFQgGgEgHAAQgHAAgFAEQgEAEAAAHQAAAIAHAFQAIAEAPAGQARAFAJAFQALAEAHAKQAIAJgBAQQABAOgIAMQgHAMgOAGQgNAHgUAAQgRAAgOgGg");
	this.shape_1.setTransform(136.5,-110.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("Ag/BUIAAinIBBAAQAUAAAOAHQAOAHAHAMQAHAMAAAQQAAAPgHAMQgGALgOAHQgOAIgVAAIgYAAIAAA8gAgWgIIAWAAQALAAAFgFQAGgGAAgKQAAgKgGgGQgFgFgLAAIgWAAg");
	this.shape_2.setTransform(122.125,-110.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AA2BUIAAhkIglBkIggAAIgmhkIAABkIgpAAIAAinIAwAAIAuBzIAvhzIAwAAIAACng");
	this.shape_3.setTransform(103.225,-110.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AgkBNQgPgIgJgPQgKgQAAgWIAAhkIApAAIAABkQAAAPAIAIQAHAIAOAAQAOAAAIgIQAIgIAAgPIAAhkIApAAIAABkQAAAWgKAQQgKAQgQAHQgQAIgTAAQgUAAgQgIg");
	this.shape_4.setTransform(83.775,-110.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("Ag/BUIAAinIBBAAQAUAAAOAHQAOAHAHAMQAHAMAAAQQAAAPgHAMQgGALgOAHQgOAIgVAAIgYAAIAAA8gAgWgIIAWAAQALAAAFgFQAGgGAAgKQAAgKgGgGQgFgFgLAAIgWAAg");
	this.shape_5.setTransform(68.275,-110.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("Ag/BUIAAinIBBAAQAUAAAOAHQAOAHAHAMQAHAMAAAQQAAAPgHAMQgGALgOAHQgOAIgVAAIgYAAIAAA8gAgWgIIAWAAQALAAAFgFQAGgGAAgKQAAgKgGgGQgFgFgLAAIgWAAg");
	this.shape_6.setTransform(48.275,-110.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AA2BUIAAhkIglBkIggAAIgmhkIAABkIgpAAIAAinIAwAAIAuBzIAvhzIAwAAIAACng");
	this.shape_7.setTransform(29.375,-110.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AgkBNQgPgIgJgPQgKgQAAgWIAAhkIApAAIAABkQAAAPAIAIQAHAIAOAAQAOAAAIgIQAIgIAAgPIAAhkIApAAIAABkQAAAWgKAQQgKAQgQAHQgQAIgTAAQgUAAgQgIg");
	this.shape_8.setTransform(9.925,-110.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgeBQQgOgGgJgLQgJgMgBgRIAsAAQABAKAGAFQAFAFAIAAQAKAAAEgFQAGgEAAgHQAAgHgFgEQgDgEgHgCIgQgGQgRgFgKgFQgKgFgIgJQgHgKAAgQQAAgYARgNQARgNAbAAQAbAAARANQARANABAYIgsAAQAAgIgGgFQgGgEgHAAQgHAAgFAEQgEAEgBAHQAAAIAIAFQAIAEAPAGQAQAFALAFQAKAEAIAKQAGAJAAAQQAAAOgGAMQgIAMgOAGQgOAHgSAAQgSAAgPgGg");
	this.shape_9.setTransform(-5.95,-110.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AguBUIAAinIApAAIAACIIA0AAIAAAfg");
	this.shape_10.setTransform(173.475,-135.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AguBUIAAinIApAAIAACIIA0AAIAAAfg");
	this.shape_11.setTransform(162.075,-135.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AApBUIgKgeIg+AAIgKAeIgrAAIA9inIAvAAIA9CngAAUAXIgUg9IgUA9IAoAAg");
	this.shape_12.setTransform(147.075,-135.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgTBUIAAiGIgtAAIAAghICBAAIAAAhIgsAAIAACGg");
	this.shape_13.setTransform(131.125,-135.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AgeBQQgOgGgJgLQgJgMAAgRIArAAQABAKAFAFQAGAFAIAAQAKAAAEgFQAGgEAAgHQAAgHgFgEQgDgEgHgCIgQgGQgQgFgLgFQgKgFgIgJQgHgKAAgQQAAgYARgNQARgNAbAAQAcAAAQANQASANAAAYIgsAAQAAgIgGgFQgGgEgHAAQgHAAgFAEQgFAEAAAHQAAAIAIAFQAIAEAPAGQARAFAKAFQAKAEAIAKQAGAJABAQQgBAOgGAMQgIAMgNAGQgOAHgTAAQgSAAgPgGg");
	this.shape_14.setTransform(116.65,-135.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AAiBUIhDhnIAABnIgpAAIAAinIApAAIBDBnIAAhnIApAAIAACng");
	this.shape_15.setTransform(100.325,-135.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_16.setTransform(87.8,-135.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("Ag8BRQgPgGgHgMQgIgMAAgPQgBgQAJgNQAJgMARgIQgGgIgDgHQgDgHAAgIQAAgMAHgKQAFgKANgFQALgGARAAQAQAAALAGQAMAGAFAKQAGAKAAAMIgnAAQABgGgDgEQgEgDgFAAQgGAAgEADQgEADAAAGQAAAFADAFQAEAGAHAHIAoAnIABgDIACgEIAJgOIAoAAIgLAUQgGAOgJANIApAoIgwAAIgQgPQgXARgfAAQgUAAgOgGgAgzAhQAAAJAIAGQAGAGANAAQAPAAAMgJIglgkQgQAJgBAPg");
	this.shape_17.setTransform(70.05,-135.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AguBUIAAinIApAAIAACIIA0AAIAAAfg");
	this.shape_18.setTransform(49.825,-135.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AguBUIAAinIApAAIAACIIA0AAIAAAfg");
	this.shape_19.setTransform(38.425,-135.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#780031").s().p("AgyBUIAAinIBmAAIAAAhIg+AAIAAAiIA2AAIAAAeIg2AAIAAAlIA+AAIAAAhg");
	this.shape_20.setTransform(25.9,-135.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#780031").s().p("AgdBQQgQgGgIgLQgJgMgBgRIAtAAQAAAKAGAFQAFAFAIAAQAJAAAGgFQAFgEAAgHQAAgHgEgEQgFgEgFgCIgRgGQgRgFgKgFQgKgFgHgJQgIgKAAgQQAAgYARgNQARgNAbAAQAcAAARANQAQANACAYIgtAAQAAgIgGgFQgGgEgHAAQgHAAgFAEQgEAEAAAHQAAAIAHAFQAIAEAPAGQARAFAJAFQALAEAHAKQAIAJgBAQQABAOgIAMQgHAMgOAGQgNAHgUAAQgRAAgOgGg");
	this.shape_21.setTransform(11.85,-135.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#780031").s().p("AgyBUIAAinIBlAAIAAAhIg9AAIAAAiIA2AAIAAAeIg2AAIAAAlIA9AAIAAAhg");
	this.shape_22.setTransform(-6.85,-135.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#780031").s().p("AAbBUIgbhuIgbBuIgxAAIgrinIAsAAIAYB5IAeh5IAsAAIAdB5IAYh5IAsAAIgrCng");
	this.shape_23.setTransform(-26.075,-135.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-154.3,298,62.20000000000002);


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
	this.shape.graphics.f("#780031").s().p("AgRBSQgGgHAAgJQAAgKAGgGQAHgHAKAAQALAAAGAHQAHAGAAAKQAAAJgHAHQgGAGgLAAQgKAAgHgGgAgRAbIgFhyIAsAAIgFByg");
	this.shape.setTransform(205.075,-54.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgkBNQgPgIgJgPQgKgQAAgWIAAhkIApAAIAABkQAAAPAIAIQAHAIAOAAQAOAAAIgIQAIgIAAgPIAAhkIApAAIAABkQAAAWgKAQQgKAQgQAHQgQAIgTAAQgUAAgQgIg");
	this.shape_1.setTransform(191.925,-54.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AgqBLQgUgLgMgTQgLgUAAgZQAAgYALgTQAMgUAUgLQAUgLAWAAQAYAAAUALQAUALALAUQALATAAAYQAAAZgLAUQgMATgTALQgUALgYAAQgWAAgUgLgAgfgjQgMAOAAAVQAAAWAMAOQAMANATAAQAUAAANgNQAMgOAAgWQAAgVgMgOQgNgNgUAAQgTAAgMANg");
	this.shape_2.setTransform(174.025,-54.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AgTBUIAAg3Ig7hwIAvAAIAgBGIAghGIAuAAIg7BwIAAA3g");
	this.shape_3.setTransform(156.55,-54.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AgyBUIAAinIBlAAIAAAhIg9AAIAAAiIA2AAIAAAeIg2AAIAAAlIA9AAIAAAhg");
	this.shape_4.setTransform(137.15,-54.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AhCBUIAAinIBKAAQAaAAAPAMQAOALAAAUQAAAPgIAKQgHAKgNAEQAOACAJALQAJAMAAAOQAAAWgPAMQgOAMgbAAgAgZAzIAdAAQAKAAAGgFQAGgEAAgJQAAgJgGgFQgGgFgLAAIgcAAgAgZgPIAaAAQAKAAAFgFQAFgEAAgJQAAgIgFgFQgFgEgKAAIgaAAg");
	this.shape_5.setTransform(122.925,-54.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AgeBQQgOgGgJgLQgJgMAAgRIArAAQABAKAFAFQAGAFAIAAQAKAAAEgFQAGgEAAgHQAAgHgFgEQgDgEgHgCIgQgGQgQgFgLgFQgKgFgIgJQgHgKAAgQQAAgYARgNQARgNAbAAQAcAAAQANQASANAAAYIgsAAQAAgIgGgFQgGgEgHAAQgHAAgFAEQgFAEAAAHQAAAIAIAFQAIAEAPAGQARAFAKAFQAKAEAIAKQAGAJABAQQgBAOgGAMQgIAMgNAGQgOAHgTAAQgSAAgPgGg");
	this.shape_6.setTransform(102.25,-54.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_7.setTransform(91.4,-54.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AAgBUIAAhFIg/AAIAABFIgpAAIAAinIApAAIAABCIA/AAIAAhCIApAAIAACng");
	this.shape_8.setTransform(79.15,-54.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgTBUIAAiGIgtAAIAAghICBAAIAAAhIgsAAIAACGg");
	this.shape_9.setTransform(63.275,-54.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgTBUIAAiGIgtAAIAAghICBAAIAAAhIgsAAIAACGg");
	this.shape_10.setTransform(44.075,-54.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AgyBUIAAinIBlAAIAAAhIg9AAIAAAiIA3AAIAAAeIg3AAIAAAlIA9AAIAAAhg");
	this.shape_11.setTransform(30.7,-54.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AguBUIAAinIApAAIAACIIA0AAIAAAfg");
	this.shape_12.setTransform(18.875,-54.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgTBUIAAiGIgtAAIAAghICBAAIAAAhIgsAAIAACGg");
	this.shape_13.setTransform(0.525,-54.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AgaAgIANg/IAoAAIgaA/g");
	this.shape_14.setTransform(-10.175,-59.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AAiBUIhDhnIAABnIgpAAIAAinIApAAIBDBnIAAhnIApAAIAACng");
	this.shape_15.setTransform(-23.025,-54.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgqBLQgUgLgMgTQgLgUAAgZQAAgYALgTQAMgUAUgLQAUgLAWAAQAYAAAUALQAUALALAUQALATAAAYQAAAZgLAUQgMATgTALQgUALgYAAQgWAAgUgLgAgfgjQgMAOAAAVQAAAWAMAOQAMANATAAQAUAAANgNQAMgOAAgWQAAgVgMgOQgNgNgUAAQgTAAgMANg");
	this.shape_16.setTransform(-41.475,-54.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AhLBUIAAinIA/AAQAaAAAUAKQAUALALATQALATAAAYQAAAZgLATQgLATgUALQgUAKgaAAgAgiAxIAUAAQAWAAANgNQANgNAAgXQAAgWgNgNQgNgNgWAAIgUAAg");
	this.shape_17.setTransform(-59.225,-54.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-73,291.5,37.6);


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
	this.shape.graphics.f("#780031").s().p("AghBXQgHgGAAgKQAAgKAHgHQAHgHALAAQALAAAGAHQAHAHAAAKQAAAKgHAGQgGAHgLAAQgLAAgHgHgAgiAdIgBguIAPAAQATAAAJgFQAKgEAAgNQAAgJgFgFQgFgFgIAAQgIAAgFAGQgFAFAAAJIgoAAQgBgQAHgMQAHgMAOgHQANgIATAAQAaAAAQAOQAQAPAAAZQAAAXgPAOQgPAMgaAAIgBATg");
	this.shape.setTransform(106.6733,-41.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgUBYIAAg6Ig9h1IAxAAIAgBKIAihKIAwAAIg9B1IAAA6g");
	this.shape_1.setTransform(91.675,-41.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AhOBYIAAivIBCAAQAbAAAVALQAUALAMAUQALAUAAAZQAAAagLAUQgMAUgVALQgUALgbAAgAgjAzIAUAAQAYAAANgOQAOgNAAgYQAAgXgOgOQgNgNgYAAIgUAAg");
	this.shape_2.setTransform(74.575,-41.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AArBYIgKgfIhBAAIgLAfIgsAAIA/ivIAxAAIA/CvgAAWAYIgWhAIgVBAIArAAg");
	this.shape_3.setTransform(55.975,-41.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("Ag1BYIAAivIBrAAIAAAjIhAAAIAAAjIA4AAIAAAgIg4AAIAAAmIBAAAIAAAjg");
	this.shape_4.setTransform(40.175,-41.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AAVBYIgkhDIgKAAIAABDIgrAAIAAivIBHAAQAVAAAOAIQAPAHAHAMQAHANAAAQQAAARgJAOQgKANgTAFIAoBGgAgZgIIAZAAQAMAAAGgGQAGgFAAgLQAAgKgGgGQgGgFgMAAIgZAAg");
	this.shape_5.setTransform(25.375,-41.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AhCBYIAAivIBEAAQAVAAAPAIQAOAHAIANQAHAMAAARQAAAPgHANQgHALgPAIQgOAIgWAAIgZAAIAAA/gAgXgIIAXAAQALAAAGgGQAGgGAAgKQAAgLgGgGQgGgFgLAAIgXAAg");
	this.shape_6.setTransform(183.95,-63.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AA5BYIAAhoIgoBoIghAAIgohpIAABpIgqAAIAAivIAyAAIAwB5IAxh5IAyAAIAACvg");
	this.shape_7.setTransform(164.225,-63.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AglBQQgRgIgJgQQgJgQAAgYIAAhnIAqAAIAABnQAAARAIAHQAIAKAOAAQAPAAAIgKQAIgHAAgRIAAhnIAqAAIAABnQAAAYgKAQQgKAQgQAIQgRAIgUAAQgVAAgQgIg");
	this.shape_8.setTransform(143.975,-63.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AhCBYIAAivIBEAAQAVAAAPAIQAPAHAGANQAIAMAAARQAAAPgIANQgGALgPAIQgOAIgWAAIgZAAIAAA/gAgXgIIAXAAQALAAAGgGQAGgGAAgKQAAgLgGgGQgGgFgLAAIgXAAg");
	this.shape_9.setTransform(127.8,-63.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AhCBYIAAivIBEAAQAVAAAOAIQAQAHAHANQAHAMAAARQAAAPgHANQgHALgPAIQgOAIgWAAIgZAAIAAA/gAgXgIIAXAAQALAAAGgGQAGgGAAgKQAAgLgGgGQgGgFgLAAIgXAAg");
	this.shape_10.setTransform(106.9,-63.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AA5BYIAAhoIgoBoIghAAIgohpIAABpIgqAAIAAivIAyAAIAwB5IAxh5IAyAAIAACvg");
	this.shape_11.setTransform(87.175,-63.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AglBQQgRgIgJgQQgJgQAAgYIAAhnIAqAAIAABnQAAARAIAHQAIAKAOAAQAPAAAIgKQAIgHAAgRIAAhnIAqAAIAABnQAAAYgKAQQgKAQgQAIQgRAIgUAAQgVAAgQgIg");
	this.shape_12.setTransform(66.925,-63.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgfBUQgPgGgKgNQgJgMAAgRIAtAAQABAKAGAFQAGAFAIAAQAKAAAFgFQAGgEAAgIQAAgGgFgEQgEgFgHgDIgRgGQgRgFgLgFQgKgFgIgKQgIgKAAgQQAAgZASgOQASgOAcAAQAcAAASAOQASAOABAZIguAAQgBgJgFgFQgGgFgIAAQgIAAgFAFQgEAEAAAHQAAAJAHAFQAJAFAPAFQASAGAKAFQALAEAIAKQAHAKAAAQQAAAPgHAMQgIANgOAHQgPAHgUAAQgSAAgPgGg");
	this.shape_13.setTransform(50.425,-63.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AAVBYIgkhDIgKAAIAABDIgrAAIAAivIBHAAQAVAAAOAIQAPAHAHAMQAHANAAAQQAAARgJAOQgKANgTAFIAoBGgAgZgIIAZAAQAMAAAGgGQAGgFAAgLQAAgKgGgGQgGgFgMAAIgZAAg");
	this.shape_14.setTransform(29.575,-63.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AglBQQgRgIgJgQQgJgQAAgYIAAhnIAqAAIAABnQAAARAIAHQAIAKAOAAQAPAAAIgKQAIgHAAgRIAAhnIAqAAIAABnQAAAYgKAQQgKAQgQAIQgRAIgUAAQgVAAgQgIg");
	this.shape_15.setTransform(12.375,-63.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgsBOQgVgLgMgVQgMgUAAgaQAAgZAMgUQAMgVAVgLQAUgMAYAAQAZAAAVAMQAUALAMAVQAMAUAAAZQAAAagMAUQgMAVgUALQgVAMgZAAQgYAAgUgMgAghgkQgMAOAAAWQAAAXAMAOQANAOAUAAQAVAAANgOQANgOAAgXQAAgWgNgOQgNgOgVAAQgUAAgNAOg");
	this.shape_16.setTransform(-6.275,-63.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgUBYIAAg6Ig9h1IAxAAIAgBKIAihKIAwAAIg9B1IAAA6g");
	this.shape_17.setTransform(-24.475,-63.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AgfBUQgPgGgKgNQgJgMAAgRIAtAAQABAKAGAFQAGAFAIAAQAKAAAFgFQAGgEAAgIQAAgGgFgEQgEgFgHgDIgRgGQgRgFgLgFQgKgFgIgKQgIgKAAgQQAAgZASgOQASgOAcAAQAcAAASAOQASAOABAZIguAAQgBgJgFgFQgGgFgIAAQgIAAgFAFQgEAEAAAHQAAAJAHAFQAJAFAPAFQASAGAKAFQALAEAIAKQAHAKAAAQQAAAPgHAMQgIANgOAHQgPAHgUAAQgSAAgPgGg");
	this.shape_18.setTransform(-45.825,-63.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgUBYIAAivIApAAIAACvg");
	this.shape_19.setTransform(-57.175,-63.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-83,280.5,61);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


// stage content:
(lib.WBAY_218541_MM_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(150,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(277));

	// car_png
	this.instance = new lib.car_1("synched",0);
	this.instance.setTransform(245,224.1,0.6,0.6,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:80,y:300},20,cjs.Ease.get(1)).wait(76));

	// CTA_png
	this.instance_1 = new lib.CTA_1("synched",0);
	this.instance_1.setTransform(80,282);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181).to({startPosition:0},0).to({y:300},13,cjs.Ease.get(1)).wait(83));

	// Logo_png
	this.instance_2 = new lib.Logo_1("synched",0);
	this.instance_2.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(277));

	// t3
	this.instance_3 = new lib.t3("synched",0);
	this.instance_3.setTransform(159.5,31,0.5,0.5,0,0,0,79.5,-123);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(1)).wait(83));

	// frame3_png
	this.instance_4 = new lib.frame3_1("synched",0);
	this.instance_4.setTransform(80,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).to({alpha:1},13).wait(83));

	// water_png
	this.instance_5 = new lib.water_1("synched",0);
	this.instance_5.setTransform(80,344);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({y:300},18,cjs.Ease.get(1)).wait(65).to({startPosition:0},0).to({y:404},13).to({_off:true},1).wait(96));

	// t2
	this.instance_6 = new lib.t2("synched",0);
	this.instance_6.setTransform(163.25,19.2,0.6,0.6,0,0,0,84.1,-54.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({regX:84,scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({regX:84.1,scaleX:0.6,scaleY:0.6,alpha:0},13).to({_off:true},1).wait(96));

	// frame2_png
	this.instance_7 = new lib.frame2_1("synched",0);
	this.instance_7.setTransform(80,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({alpha:1},13).wait(194));

	// t1
	this.instance_8 = new lib.t1("synched",0);
	this.instance_8.setTransform(155.25,30.7,0.6,0.6,0,0,0,70.6,-53.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:70.5,scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:70.6,scaleX:0.6,scaleY:0.6,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(207));

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
p.nominalBounds = new cjs.Rectangle(149,107,228,247);
// library properties:
lib.properties = {
	id: 'C00A36863C9C464AA8ADF1E18C148E10',
	width: 300,
	height: 250,
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
an.compositions['C00A36863C9C464AA8ADF1E18C148E10'] = {
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