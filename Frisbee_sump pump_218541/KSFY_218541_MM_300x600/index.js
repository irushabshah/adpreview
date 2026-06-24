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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.frame1 = function() {
	this.initialize(img.frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.frame2 = function() {
	this.initialize(img.frame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.frame3 = function() {
	this.initialize(img.frame3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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
	this.shape.graphics.f("#780031").s().p("AgbCCQgKgKgBgPQABgPAKgLQALgKAQAAQARAAALAKQALALAAAPQAAAPgLAKQgLAKgRAAQgQAAgLgKgAgbAqIgIi1IBFAAIgHC1g");
	this.shape.setTransform(135.8,39.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgwB/QgXgKgOgSQgOgTgBgaIBFAAQACAPAJAIQAIAIANAAQAPAAAIgHQAJgGAAgMQAAgKgHgHQgHgGgJgEIgbgKQgagIgQgIQgQgHgMgQQgMgPAAgZQAAglAbgWQAbgUArgBQArABAbAUQAbAVACAnIhGAAQgBgNgJgIQgIgHgNAAQgMgBgHAHQgHAGAAAMQAAANAMAHQAMAHAZAJQAaAIAQAIQAQAHAMAQQAMAPAAAXQAAAYgMASQgMATgWAKQgWALgeAAQgcABgXgKg");
	this.shape_1.setTransform(116.675,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AhlCGIAAkKIBpAAQAfAAAXALQAWALALATQALAUAAAZQAAAXgLATQgLASgWAMQgWAMggAAIgoAAIAABggAgkgNIAkAAQARAAAJgJQAJgIAAgQQAAgRgJgIQgJgJgRAAIgkAAg");
	this.shape_2.setTransform(93.825,39.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("ABWCGIAAifIg8CfIgzAAIg8igIAACgIhBAAIAAkKIBNAAIBKC4IBKi4IBMAAIAAEKg");
	this.shape_3.setTransform(63.9,39.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("Ag5B7QgZgNgOgZQgPgZAAgjIAAifIBBAAIAACfQAAAYAMANQAMANAWAAQAWAAAMgNQANgNAAgYIAAifIBBAAIAACfQAAAjgQAZQgPAZgZAMQgaANgfAAQgfAAgZgMg");
	this.shape_4.setTransform(33.125,39.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AhlCGIAAkKIBpAAQAfAAAXALQAWALALATQALAUAAAZQAAAXgLATQgLASgWAMQgWAMggAAIgoAAIAABggAgkgNIAkAAQARAAAJgJQAJgIAAgQQAAgRgJgIQgJgJgRAAIgkAAg");
	this.shape_5.setTransform(8.525,39.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AhlCFIAAkJIBpAAQAfgBAXAMQAWALALATQALATAAAZQAAAYgLATQgLASgWAMQgWAMggAAIgoAAIAABfgAgkgNIAkAAQARAAAJgIQAJgKAAgQQAAgPgJgJQgJgJgRAAIgkAAg");
	this.shape_6.setTransform(191.625,1.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("ABWCFIAAifIg8CfIgzAAIg8ifIAACfIhBAAIAAkJIBNAAIBJC3IBKi3IBNAAIAAEJg");
	this.shape_7.setTransform(161.7,1.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("Ag5B7QgZgNgOgZQgPgZAAgjIAAifIBBAAIAACfQAAAYAMANQAMANAWAAQAWAAAMgNQANgNAAgYIAAifIBBAAIAACfQAAAjgQAZQgPAZgZAMQgaANgfAAQgfAAgZgMg");
	this.shape_8.setTransform(130.925,1.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgwB/QgXgJgOgTQgOgTgBgaIBFAAQACAPAJAIQAIAHANAAQAPAAAIgGQAJgGAAgNQAAgJgHgGQgHgHgJgFIgbgJQgagIgQgIQgQgHgMgQQgMgPAAgZQAAglAbgWQAbgVArABQArgBAbAVQAbAWACAmIhGAAQgBgOgJgHQgIgIgNAAQgMABgHAFQgHAHAAALQAAANAMAIQAMAHAZAIQAaAKAQAHQAQAHAMAQQAMAPAAAYQAAAXgMASQgMASgWAMQgWALgeAAQgcAAgXgKg");
	this.shape_9.setTransform(105.825,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AhKCFIAAkJIBBAAIAADYIBUAAIAAAxg");
	this.shape_10.setTransform(77.85,1.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AhKCFIAAkJIBBAAIAADYIBUAAIAAAxg");
	this.shape_11.setTransform(59.75,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("ABBCFIgQguIhiAAIgQAuIhEAAIBgkJIBLAAIBgEJgAAhAkIghhgIggBgIBBAAg");
	this.shape_12.setTransform(35.925,1.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgfCFIAAjVIhHAAIAAg0IDNAAIAAA0IhHAAIAADVg");
	this.shape_13.setTransform(10.675,1.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AgwB/QgXgJgOgTQgOgTgBgaIBFAAQACAPAJAIQAIAHANAAQAPAAAIgGQAJgGAAgNQAAgJgHgGQgHgHgJgFIgbgJQgagIgQgIQgQgHgMgQQgMgPAAgZQAAglAbgWQAbgVArABQArgBAbAVQAbAWACAmIhGAAQgBgOgJgHQgIgIgNAAQgMABgHAFQgHAHAAALQAAANAMAIQAMAHAZAIQAaAKAQAHQAQAHAMAQQAMAPAAAYQAAAXgMASQgMASgWAMQgWALgeAAQgcAAgXgKg");
	this.shape_14.setTransform(-12.225,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AA2CFIhrijIAACjIhBAAIAAkJIBBAAIBrCkIAAikIBBAAIAAEJg");
	this.shape_15.setTransform(-38.175,1.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgfCFIAAkJIA/AAIAAEJg");
	this.shape_16.setTransform(-58.05,1.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AhgCAQgXgKgMgTQgNgSAAgZQAAgZAOgUQANgTAbgNQgKgNgEgLQgEgLAAgNQAAgTAKgQQAKgPATgJQATgJAZAAQAaAAASAJQASAKAJAQQAJAQAAATIg9AAQABgLgGgFQgFgGgJAAQgKAAgGAGQgGAFAAAIQAAAIAGAJQAFAJALALIBAA/IACgFIACgGIAPgXIBAAAIgSAgQgKAXgNAUIBAA/IhMAAIgYgYQglAcgzAAQgeAAgXgKgAhRA0QAAAOALAKQALAKAUAAQAZAAATgPIg7g5QgbAOAAAYg");
	this.shape_17.setTransform(148.625,-36.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AhKCGIAAkLIBBAAIAADYIBUAAIAAAzg");
	this.shape_18.setTransform(116.5,-36.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AhKCGIAAkLIBBAAIAADYIBUAAIAAAzg");
	this.shape_19.setTransform(98.4,-36.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#780031").s().p("AhRCGIAAkLICjAAIAAA1IhiAAIAAA2IBWAAIAAAxIhWAAIAAA6IBiAAIAAA1g");
	this.shape_20.setTransform(78.525,-36.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#780031").s().p("AgwB/QgXgKgOgSQgOgSgBgbIBFAAQACAPAJAIQAIAIANAAQAPgBAIgGQAJgHAAgMQAAgJgHgHQgHgGgJgEIgbgKQgagIgQgIQgQgHgMgPQgMgQAAgZQAAgmAbgUQAbgWArAAQArAAAbAWQAbAUACAmIhGAAQgBgMgJgIQgIgHgNgBQgMAAgHAHQgHAGAAAMQAAANAMAHQAMAHAZAJQAaAIAQAIQAQAHAMAPQAMAQAAAXQAAAXgMATQgMATgWAKQgWAMgeAAQgcAAgXgKg");
	this.shape_21.setTransform(56.325,-37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#780031").s().p("AhRCGIAAkLICjAAIAAA1IhiAAIAAA2IBWAAIAAAxIhWAAIAAA6IBiAAIAAA1g");
	this.shape_22.setTransform(26.575,-36.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#780031").s().p("AArCGIgrivIgrCvIhPAAIhEkLIBGAAIAmDCIAwjCIBGAAIAuDCIAnjCIBFAAIhFELg");
	this.shape_23.setTransform(-3.9,-36.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-65.5,296.1,133.6);


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
	this.shape.graphics.f("#780031").s().p("AggCZQgNgLAAgSQAAgSANgMQANgMATAAQAUAAANAMQAMAMAAASQAAASgMALQgNAMgUAAQgTAAgNgMgAggAyIgJjWIBSAAIgJDWg");
	this.shape.setTransform(118.25,66.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AhDCRQgegPgRgdQgRgeAAgqIAAi7IBNAAIAAC8QAAAcAOAPQAOAPAaAAQAbAAAOgPQAOgPAAgcIAAi8IBNAAIAAC7QAAArgSAdQgSAdgeAPQgeAOglAAQglAAgdgOg");
	this.shape_1.setTransform(93.575,66.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AhQCNQglgUgXgmQgVglAAguQAAgtAVglQAXglAlgVQAkgVAtAAQAsAAAlAVQAlAVAVAlQAWAlAAAtQAAAugWAlQgVAmglAUQglAVgsAAQgtAAgkgVgAg8hCQgWAZgBApQABAqAWAZQAXAZAmAAQAlAAAWgaQAYgZAAgpQAAgpgYgZQgWgZglAAQgmAAgXAZg");
	this.shape_2.setTransform(60.05,66.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AglCeIAAhoIhujTIBXAAIA9CFIA9iFIBWAAIhuDTIAABog");
	this.shape_3.setTransform(27.3,66.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AhgCeIAAk7IDBAAIAAA+Ih0AAIAABAIBmAAIAAA6IhmAAIAABGIB0AAIAAA9g");
	this.shape_4.setTransform(139.625,25.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("Ah9CeIAAk7ICNAAQAwAAAbAWQAbAWAAAmQAAAcgOATQgPASgYAHQAbAFARAWQARAUAAAcQAAAogcAXQgcAXgxAAgAgwBgIA4AAQATAAAKgJQALgJAAgQQAAgRgLgKQgLgJgTAAIg3AAgAgwgdIAxAAQATAAAKgIQAKgJAAgQQAAgQgKgIQgKgJgTAAIgxAAg");
	this.shape_5.setTransform(112.9,25.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("Ag5CXQgcgMgQgWQgQgWgBgfIBSAAQABASALAJQAKAJAQAAQARAAAKgIQAKgIAAgNQAAgMgIgIQgIgHgMgFIgfgMQgfgJgTgKQgUgIgNgSQgOgTAAgeQAAgsAggZQAfgZA0AAQAzAAAgAZQAgAZACAtIhTAAQgBgQgKgIQgLgJgPAAQgOAAgIAHQgJAIAAAOQAAAPAOAJQAPAIAdAKQAfAKATAKQATAIAOASQAOASAAAdQAAAbgOAWQgNAWgaANQgaANgkAAQgiAAgbgLg");
	this.shape_6.setTransform(74.175,25.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AgmCeIAAk7IBNAAIAAE7g");
	this.shape_7.setTransform(53.75,25.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AA8CeIAAiCIh3AAIAACCIhNAAIAAk7IBNAAIAAB8IB3AAIAAh8IBNAAIAAE7g");
	this.shape_8.setTransform(30.725,25.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgmCeIAAj9IhTAAIAAg+IDzAAIAAA+IhTAAIAAD9g");
	this.shape_9.setTransform(1,25.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgmCeIAAj9IhTAAIAAg+IDzAAIAAA+IhTAAIAAD9g");
	this.shape_10.setTransform(168.5,-15.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AhgCeIAAk7IDBAAIAAA+Ih0AAIAAA/IBmAAIAAA7IhmAAIAABFIB0AAIAAA+g");
	this.shape_11.setTransform(143.375,-15.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AhYCeIAAk7IBNAAIAAEAIBkAAIAAA7g");
	this.shape_12.setTransform(121.125,-15.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AglCeIAAj9IhUAAIAAg+IDzAAIAAA+IhUAAIAAD9g");
	this.shape_13.setTransform(86.7,-15.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AgyA8IAXh3IBOAAIgyB3g");
	this.shape_14.setTransform(66.6,-25.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("ABACeIh/jCIAADCIhNAAIAAk7IBNAAIB/DDIAAjDIBNAAIAAE7g");
	this.shape_15.setTransform(42.425,-15.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AhQCNQglgUgXgmQgVglAAguQAAgtAVglQAXglAlgVQAkgVAtAAQAsAAAlAVQAlAVAVAlQAWAlAAAtQAAAugWAlQgVAmglAUQglAVgsAAQgtAAgkgVgAg8hCQgWAZgBApQABAqAWAZQAXAZAmAAQAlAAAWgaQAYgZAAgpQAAgpgYgZQgWgZglAAQgmAAgXAZg");
	this.shape_16.setTransform(7.85,-15.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AiNCeIAAk7IB2AAQAxAAAmAUQAlAUAUAkQAVAjAAAuQAAAvgVAkQgUAkglATQgmAUgxAAgAhABcIAkAAQArAAAYgZQAZgYAAgrQAAgrgZgYQgYgZgrAAIgkAAg");
	this.shape_17.setTransform(-25.55,-15.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-49,296.1,149);


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
	this.shape.graphics.f("#780031").s().p("Ag9CdQgNgMAAgSQAAgSANgMQANgMAUAAQAUAAAMAMQANAMAAASQAAASgNAMQgMAMgUgBQgUABgNgMgAg+AzIgDhSIAbAAQAjAAARgIQASgJAAgXQAAgQgIgIQgJgJgPAAQgPAAgJAJQgJAJAAAQIhJAAQgBgbANgWQAMgXAZgNQAYgMAiAAQAwAAAdAYQAdAaAAAuQAAAqgcAYQgbAXguAAIgCAhg");
	this.shape.setTransform(144.9463,55.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AglCeIAAhpIhujSIBXAAIA8CEIA+iEIBWAAIhuDSIAABpg");
	this.shape_1.setTransform(117.95,55.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AiNCeIAAk7IB2AAQAxAAAmAUQAlAUAUAkQAVAjAAAuQAAAvgVAjQgUAlglATQgmAUgxAAgAhABbIAlAAQAqAAAYgXQAYgYABgsQgBgrgYgYQgYgZgqABIglAAg");
	this.shape_2.setTransform(87.15,55.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("ABNCeIgTg4Ih1AAIgTA4IhQAAIByk7IBYAAIBzE7gAAnArIgnhzIgmBzIBNAAg");
	this.shape_3.setTransform(53.625,55.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AhgCeIAAk7IDBAAIAAA+Ih0AAIAABAIBmAAIAAA6IhmAAIAABGIB0AAIAAA9g");
	this.shape_4.setTransform(25.175,55.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AAlCeIhAh4IgTAAIAAB4IhNAAIAAk7ICAAAQAmAAAaANQAaANANAXQANAWAAAdQAAAfgSAZQgRAYgjAKIBJB9gAgugPIAuAAQAWAAALgKQAKgLAAgSQAAgSgKgKQgLgLgWAAIguAAg");
	this.shape_5.setTransform(-1.4,55.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("Ah3CeIAAk7IB7AAQAmAAAaANQAaANANAYQANAWAAAeQAAAbgMAXQgNAWgaAOQgaAOgnAAIguAAIAABxgAgqgPIAqAAQAVAAAKgLQALgLAAgSQAAgTgLgLQgKgKgVAAIgqAAg");
	this.shape_6.setTransform(190.725,14.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("ABmCeIAAi9IhHC9Ig9AAIhHi9IAAC9IhNAAIAAk7IBbAAIBYDaIBXjaIBbAAIAAE7g");
	this.shape_7.setTransform(155.275,14.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AhDCRQgegPgRgdQgRgdAAgrIAAi7IBNAAIAAC8QAAAcAOAPQAOAPAaAAQAbAAAOgPQAOgPAAgcIAAi8IBNAAIAAC7QAAAqgSAdQgSAegeAPQgeAPglAAQglAAgdgPg");
	this.shape_8.setTransform(118.775,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("Ah3CeIAAk7IB7AAQAmAAAaANQAaANANAYQANAWAAAeQAAAbgMAXQgNAWgaAOQgaAOgnAAIguAAIAABxgAgqgPIAqAAQAVAAAKgLQALgLAAgSQAAgTgLgLQgKgKgVAAIgqAAg");
	this.shape_9.setTransform(89.675,14.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("Ah3CeIAAk7IB7AAQAmAAAaANQAaANANAYQANAWAAAeQAAAbgMAXQgNAWgaAOQgaAOgnAAIguAAIAABxgAgqgPIAqAAQAVAAAKgLQALgLAAgSQAAgTgLgLQgKgKgVAAIgqAAg");
	this.shape_10.setTransform(52.125,14.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("ABmCeIAAi9IhHC9Ig9AAIhHi9IAAC9IhNAAIAAk7IBbAAIBYDaIBXjaIBbAAIAAE7g");
	this.shape_11.setTransform(16.675,14.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AhDCRQgegPgRgdQgRgdAAgrIAAi7IBNAAIAAC8QAAAcAOAPQAOAPAaAAQAbAAAOgPQAOgPAAgcIAAi8IBNAAIAAC7QAAAqgSAdQgSAegeAPQgeAPglAAQglAAgdgPg");
	this.shape_12.setTransform(-19.825,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("Ag5CXQgcgMgQgWQgQgWgBgfIBSAAQABASALAJQAKAJAQAAQARAAAKgIQAKgIAAgNQAAgMgIgIQgIgHgMgFIgfgMQgfgJgTgKQgUgIgNgSQgOgTAAgeQAAgsAggZQAfgZA0AAQAzAAAgAZQAgAZACAtIhTAAQgBgQgKgIQgLgJgPAAQgOAAgIAHQgJAIAAAOQAAAPAOAJQAPAIAdAKQAfAKATAKQATAIAOASQAOASAAAdQAAAbgOAWQgNAWgaANQgaANgkAAQgiAAgbgLg");
	this.shape_13.setTransform(-49.525,14.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AAlCeIhAh4IgTAAIAAB4IhNAAIAAk7ICAAAQAmAAAaANQAaANANAXQANAWAAAdQAAAfgSAZQgSAXgiALIBJB9gAgugPIAvAAQAVAAAKgKQALgLAAgSQAAgSgLgKQgKgLgVAAIgvAAg");
	this.shape_14.setTransform(144.65,-26.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AhDCRQgegOgRgeQgRgdAAgrIAAi8IBNAAIAAC8QAAAdAOAPQAOAPAaABQAbgBAOgPQAOgPAAgdIAAi8IBNAAIAAC8QAAArgSAdQgSAdgeAPQgeAOglAAQglAAgdgOg");
	this.shape_15.setTransform(113.625,-25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AhRCNQgkgUgWgmQgWglAAguQAAgtAWglQAWglAkgVQAlgVAtAAQAsAAAlAVQAlAVAVAlQAWAlAAAtQAAAugWAlQgVAmglAUQglAVgsAAQgtAAglgVgAg8hCQgWAZgBApQABAqAWAZQAXAZAmAAQAlAAAWgaQAYgZAAgpQAAgpgYgZQgWgZglAAQgmAAgXAZg");
	this.shape_16.setTransform(80.1,-26.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgmCeIAAhpIhtjSIBYAAIA8CEIA8iEIBXAAIhtDSIAABpg");
	this.shape_17.setTransform(47.35,-26.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("Ag5CXQgcgMgQgWQgQgWgBgfIBSAAQABASALAJQAKAJAQAAQARAAAKgIQAKgIAAgNQAAgMgIgIQgIgHgMgFIgfgMQgfgJgTgKQgUgIgNgSQgOgTAAgeQAAgsAggZQAfgZA0AAQAzAAAgAZQAgAZACAtIhTAAQgBgQgKgIQgLgJgPAAQgOAAgIAHQgJAIAAAOQAAAPAOAJQAPAIAdAKQAfAKATAKQATAIAOASQAOASAAAdQAAAbgOAWQgNAWgaANQgaANgkAAQgiAAgbgLg");
	this.shape_18.setTransform(8.925,-26.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgmCeIAAk7IBMAAIAAE7g");
	this.shape_19.setTransform(-11.5,-26.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-59.5,297.5,149);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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

	// Layer_2
	this.instance = new lib.frame3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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

	// Layer_2
	this.instance = new lib.frame2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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

	// Layer_2
	this.instance = new lib.frame1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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
(lib.KSFY_218541_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

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
	this.instance_2.setTransform(308,179.1,0.6,0.6,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:80,y:300},20,cjs.Ease.get(1)).wait(76));

	// t3
	this.instance_3 = new lib.t3("synched",0);
	this.instance_3.setTransform(149.6,155.3,0.5,0.5,0,0,0,69.6,1.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).wait(83));

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
	this.instance_6.setTransform(149.6,99.2,0.5,0.5,0,0,0,69.6,25.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({scaleX:0.5,scaleY:0.5,alpha:0},13).to({_off:true},1).wait(96));

	// frame2_png
	this.instance_7 = new lib.frame2_1("synched",0);
	this.instance_7.setTransform(80,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({alpha:1},13).wait(194));

	// t1
	this.instance_8 = new lib.t1("synched",0);
	this.instance_8.setTransform(150.3,99.2,0.5,0.5,0,0,0,70.3,15);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({scaleX:0.5,scaleY:0.5,alpha:0},14).to({_off:true},1).wait(207));

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
p.nominalBounds = new cjs.Rectangle(149,299,291,405);
// library properties:
lib.properties = {
	id: '1D42CF45455647789E9AE0A47792069B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"car.png", id:"car"},
		{src:"CTA.png", id:"CTA"},
		{src:"frame1.jpg", id:"frame1"},
		{src:"frame2.jpg", id:"frame2"},
		{src:"frame3.jpg", id:"frame3"},
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
an.compositions['1D42CF45455647789E9AE0A47792069B'] = {
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