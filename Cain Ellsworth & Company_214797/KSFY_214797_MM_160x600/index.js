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
p.nominalBounds = new cjs.Rectangle(0,0,300,189);


(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,201);


(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,461);


(lib.Img3 = function() {
	this.initialize(img.Img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,994,724);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,215);// helper functions:

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


(lib.Pic3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img3();
	this.instance.setTransform(-155.95,-113.55,0.3138,0.3138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pic3, new cjs.Rectangle(-155.9,-113.5,311.9,227.1), null);


(lib.PIc2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img2();
	this.instance.setTransform(-151.2,-100.85,0.4377,0.4377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIc2, new cjs.Rectangle(-151.2,-100.8,302.4,201.7), null);


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
	this.instance = new lib.Img1();
	this.instance.setTransform(-80,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-100.5,160,201);


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
	this.instance.setTransform(-59.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-59.5,-16,271,215), null);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAmKIAAMV");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-1,-40.5,2,81), null);


(lib.Heading = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCA230").s().p("AgqBjQgVgKgNgQQgNgQgBgVIBAAAQABALAJAHQAJAGAMAAQAMABAHgFQAGgFAAgHQAAgKgJgEQgKgEgTgGQgXgEgQgGQgPgHgKgLQgLgNAAgVQAAgSAKgPQAKgPATgIQAUgJAaAAQAnAAAXAUQAWATAEAhIg8AAQgBgLgIgHQgIgGgNgBQgKABgHAEQgGAEAAAIQAAAJAJAEQALAFASAEQAYAHAPAFQAOAGAMAMQAKANABAWQAAASgKAPQgLAOgTAJQgUAIgZAAQgaAAgWgJg");
	this.shape.setTransform(99.2,-30.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCA230").s().p("AhABqIAAjRIBAAAIAAAjQAKgRARgKQARgKAVAAIAABEIgSAAQgYAAgMAKQgLALAAAZIAABhg");
	this.shape_1.setTransform(81.775,-30.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCA230").s().p("Ag1BfQgZgOgNgYQgOgYAAghQAAggAOgZQANgYAYgNQAYgNAfAAQAeAAAYAMQAYANANAYQANAYABAfIgBASIiRAAQABAUALAKQAMALAQAAQAXgBAJgTIBEAAQgFAUgOARQgNAQgVAKQgVAJgZAAQgeAAgYgNgAAogUQAAgQgMgKQgLgKgRAAQgPAAgMAKQgLAJgCARIBQAAIAAAAg");
	this.shape_2.setTransform(61.35,-30.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCA230").s().p("AhBB/QgUgNgNgZQgMgYAAggQAAghAMgYQANgYAUgNQAWgNAZAAQAUAAASAJQARAIAKAPIAAhiIBAAAIAAEWIhAAAIAAgeQgKAPgQAJQgRAJgWAAQgZAAgWgOgAgfgFQgOANAAAZQAAAXAOAPQANAOASAAQAUAAANgOQAOgOAAgYQAAgYgOgNQgNgOgUAAQgSAAgNANg");
	this.shape_3.setTransform(36.35,-34.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA230").s().p("AhABeQgWgNgLgZQgNgYAAggQAAggANgZQALgYAWgNQAVgNAaAAQAVAAAQAJQARAJAJAOIAAgeIBBAAIAADSIhBAAIAAgeQgJAPgRAJQgQAJgVAAQgaAAgVgOgAgfgmQgNAOAAAYQAAAXANAPQAOAOASAAQATAAANgOQANgOAAgYQAAgXgNgOQgNgOgTAAQgSAAgOANg");
	this.shape_4.setTransform(10.75,-30.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCA230").s().p("Ag1BfQgZgOgNgYQgNgYAAghQAAggANgZQAOgYAYgNQAXgNAfAAQAeAAAYAMQAYANAOAYQAMAYAAAfIgBASIiRAAQACAUALAKQAMALAPAAQAXgBAKgTIBFAAQgGAUgNARQgOAQgVAKQgUAJgaAAQgeAAgYgNgAAngUQAAgQgLgKQgLgKgRAAQgPAAgLAKQgLAJgDARIBPAAIAAAAg");
	this.shape_5.setTransform(-12.95,-30.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCA230").s().p("AhJCEIAAkHIBAAAIAADWIBTAAIAAAxg");
	this.shape_6.setTransform(-32.675,-33.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCA230").s().p("AglCUIAAicIgXAAIAAg2IAXAAIAAgGQAAgmAWgUQAVgVArAAIALABIAAA2QgSgBgIAHQgIAGAAARIAAABIAjAAIAAA2IgjAAIAACcg");
	this.shape_7.setTransform(-57.075,-35.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCA230").s().p("Ag3BfQgZgOgOgYQgOgYAAghQAAgfAOgaQAOgYAZgNQAZgNAeAAQAfAAAZANQAZANAOAYQAOAaAAAfQAAAhgOAYQgPAYgZAOQgZANgeAAQgfAAgYgNgAgegmQgNANAAAZQAAAZANAOQAMANASAAQASAAANgNQANgOAAgZQAAgZgNgNQgMgNgTAAQgSAAgMANg");
	this.shape_8.setTransform(-75.825,-30.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCA230").s().p("AApBqIAAhxQAAgVgMgMQgKgLgTAAQgSAAgKALQgLAMAAAVIAABxIhAAAIAAjRIBAAAIAAAcQAJgOASgIQAPgIAVAAQAlAAAVAYQAXAYAAApIAAB6g");
	this.shape_9.setTransform(107.25,-67.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCA230").s().p("Ag3BfQgZgNgOgZQgOgZAAggQAAgfAOgZQAOgZAZgNQAZgNAeAAQAfAAAZANQAZANAOAZQAOAZAAAfQAAAggOAZQgPAZgZANQgZANgeAAQgfAAgYgNgAgegmQgNANAAAZQAAAZANAOQAMANASAAQASAAANgNQANgOAAgZQAAgYgNgOQgMgOgTAAQgSAAgMAOg");
	this.shape_10.setTransform(82.475,-67.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCA230").s().p("AgfCXIAAjSIA/AAIAADSgAgbhaQgKgKAAgPQAAgPAKgKQALgKAQAAQARAAAKAKQALAKAAAPQAAAPgLAKQgKAKgRAAQgQAAgLgKg");
	this.shape_11.setTransform(65.025,-72.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCA230").s().p("AAiCDQgjAAgTgRQgUgRAAgnIAAhTIgZAAIAAg2IAZAAIAAgzIBAAAIAAAzIAqAAIAAA2IgqAAIAABTQAAAKAEAEQAFAEAKAAIAXAAIAAA3g");
	this.shape_12.setTransform(51.675,-70.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCA230").s().p("AhBBfQgUgNgMgaQgNgYAAggQAAggANgYQAMgZAUgNQAWgNAaAAQAVAAARAJQAQAJAKAPIAAgfIBAAAIAADSIhAAAIAAgeQgKAPgQAJQgSAJgUAAQgaAAgWgNgAgfglQgNANAAAYQAAAYANANQANAPATAAQATAAANgOQAOgOAAgYQAAgXgOgOQgNgOgTAAQgTAAgNAOg");
	this.shape_13.setTransform(30.8,-67.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCA230").s().p("AhABqIAAjRIBAAAIAAAjQAKgRARgKQARgKAVAAIAABEIgSAAQgYAAgMAKQgLALAAAZIAABhg");
	this.shape_14.setTransform(11.525,-67.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCA230").s().p("Ag1BfQgZgNgNgZQgNgZAAggQAAggANgYQAOgZAYgNQAXgNAfAAQAeAAAYAMQAYANAOAYQAMAYAAAgIgBASIiRAAQACATALAKQAMAKAPAAQAXAAAKgUIBFAAQgGAVgNAQQgOARgVAJQgUAKgaAAQgeAAgYgNgAAngTQAAgRgLgKQgLgJgRAAQgPAAgLAJQgLAJgDASIBPAAIAAAAg");
	this.shape_15.setTransform(-8.9,-67.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCA230").s().p("AAoBqIAAhxQAAgVgLgMQgKgLgTAAQgRAAgLALQgLAMAAAVIAABxIhBAAIAAjRIBBAAIAAAcQAKgOAQgIQAQgIAUAAQAlAAAXAYQAWAYgBApIAAB6g");
	this.shape_16.setTransform(-33,-67.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCA230").s().p("Ag1BfQgYgNgOgZQgNgZAAggQAAggANgYQANgZAYgNQAZgNAeAAQAeAAAYAMQAYANAOAYQANAYAAAgIgBASIiRAAQABATALAKQALAKAQAAQAYAAAJgUIBEAAQgFAVgOAQQgNARgVAJQgVAKgZAAQgeAAgYgNgAAogTQAAgRgMgKQgLgJgRAAQgPAAgMAJQgLAJgCASIBQAAIAAAAg");
	this.shape_17.setTransform(-57.35,-67.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA230").s().p("AhBB1QgfgRgRgeQgRgfAAgnQAAgmARgfQARgfAfgRQAegRAnAAQAvAAAhAXQAgAXALApIhHAAQgIgNgNgHQgOgHgRAAQgfAAgTAUQgSAVgBAhQAAAlAUAUQAUAVAhAAQAYAAARgMQARgMAHgXIhRAAIAAguICLAAIAAA7QgHAYgRAUQgRAVgaANQgbANghAAQgmAAgfgSg");
	this.shape_18.setTransform(-83.25,-70.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCA230").s().p("AAiCDQgjAAgTgRQgUgRAAgnIAAhTIgZAAIAAg2IAZAAIAAgzIBAAAIAAAzIAqAAIAAA2IgqAAIAABTQAAAKAEAEQAFAEAKAAIAXAAIAAA3g");
	this.shape_19.setTransform(47.625,-106.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCA230").s().p("AAlBpIgog6IgiA6IhFAAIBFhqIhHhnIBIAAIAoA6IAig6IBFAAIhGBpIBIBog");
	this.shape_20.setTransform(29.25,-104.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCA230").s().p("Ag1BfQgYgOgOgYQgOgZAAggQAAggAOgZQANgYAZgNQAYgNAeAAQAfAAAXANQAYANANAXQAOAYAAAfIgCASIiRAAQACAUALAKQALALARAAQAWAAAKgVIBEAAQgEAVgOAQQgOARgVAJQgVAKgZAAQgeAAgYgNgAAngUQAAgQgLgKQgLgKgRAAQgPAAgLAKQgMAJgCARIBPAAIAAAAg");
	this.shape_21.setTransform(6.6,-104.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCA230").s().p("AA2CEIhriiIAACiIhAAAIAAkHIBAAAIBrCjIAAijIBAAAIAAEHg");
	this.shape_22.setTransform(-19.125,-106.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#315746").s().p("Ag1BfQgYgOgOgYQgNgYAAghQAAggANgZQANgYAYgNQAZgNAeAAQAeAAAYAMQAYANAOAYQANAYAAAfIgBASIiRAAQABAUALAKQALALAQAAQAYgBAJgTIBEAAQgFAUgOARQgNAQgVAKQgVAJgZAAQgeAAgYgNgAAogUQAAgQgMgKQgLgKgRAAQgPAAgMAKQgLAJgCARIBQAAIAAAAg");
	this.shape_23.setTransform(116.8,-154.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#315746").s().p("AAoCMIAAhzQABgVgLgKQgMgMgSAAQgRAAgLAMQgLAKAAAVIAABzIhAAAIAAkWIBAAAIAABhQAJgOARgJQARgIAUAAQAlAAAWAYQAVAYAAAoIAAB8g");
	this.shape_24.setTransform(92.7,-157.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#315746").s().p("AAiCDQgjAAgTgRQgUgRAAgnIAAhTIgZAAIAAg2IAZAAIAAgzIBAAAIAAAzIAqAAIAAA2IgqAAIAABTQAAAKAEAEQAFAEAKAAIAXAAIAAA3g");
	this.shape_25.setTransform(72.125,-156.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#315746").s().p("AhFCIQgdgWgEglIBAAAQACAMAMAHQAMAHAPAAQATAAAMgMQAMgLAAgaIAAgdQgJAOgRAJQgQAKgWAAQgZAAgVgOQgWgNgMgZQgMgXAAghQAAggAMgZQAMgYAWgNQAVgNAZAAQAWAAAQAJQASAJAIAOIAAgeIBBAAIAADRQAAAdgMAYQgLAYgYANQgXAOgjAAQguAAgdgWgAgfhYQgOAOAAAYQAAAYAOAOQAOAOARAAQAUAAANgNQANgOAAgYQAAgYgNgOQgNgOgUAAQgRAAgOANg");
	this.shape_26.setTransform(43.35,-149.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#315746").s().p("AApBqIAAhxQgBgVgKgMQgMgLgSAAQgSAAgKALQgLAMAAAVIAABxIhAAAIAAjRIBAAAIAAAcQAKgOARgIQAPgIAVAAQAlAAAVAYQAXAYAAApIAAB6g");
	this.shape_27.setTransform(18.7,-154.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#315746").s().p("AgfCXIAAjSIA/AAIAADSgAgbhaQgKgKAAgPQAAgPAKgKQALgKAQAAQARAAAKAKQALAKAAAPQAAAPgLAKQgKAKgRAAQgQAAgLgKg");
	this.shape_28.setTransform(0.425,-158.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#315746").s().p("AAiBpIghiHIgiCHIhHAAIg5jRIBBAAIAdCVIAkiVIBDAAIAkCVIAdiVIA9AAIg5DRg");
	this.shape_29.setTransform(-21.375,-154.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#315746").s().p("Ag3BfQgZgOgOgYQgOgYAAghQAAgfAOgaQAOgYAZgNQAZgNAeAAQAfAAAZANQAZANAOAYQAOAaAAAfQAAAhgOAYQgPAYgZAOQgZANgeAAQgfAAgYgNgAgegmQgNANAAAZQAAAZANAOQAMANASAAQASAAANgNQANgOAAgZQAAgZgNgNQgMgNgTAAQgSAAgMANg");
	this.shape_30.setTransform(-49.725,-154.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#315746").s().p("AhABqIAAjRIBAAAIAAAjQAKgRARgKQARgKAVAAIAABEIgSAAQgYAAgMAKQgLALAAAZIAABhg");
	this.shape_31.setTransform(-68.825,-154.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#315746").s().p("AhBB1QgfgRgRgeQgRgfAAgnQAAgmARgfQARgfAfgRQAfgRAmAAQAvAAAhAXQAgAXAKApIhHAAQgHgNgNgHQgNgHgSAAQgfAAgTAUQgSAVgBAhQAAAlAUAUQAUAVAhAAQAZAAAQgMQAQgMAIgXIhRAAIAAguICLAAIAAA7QgHAYgRAUQgRAVgbANQgaANghAAQgmAAgfgSg");
	this.shape_32.setTransform(-92,-156.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heading, new cjs.Rectangle(-124.9,-188.6,272,186.79999999999998), null);


(lib.F3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgMAAgOQAAgOAGgLQAGgLALgGQALgFANgBQANAAAKAGQALAGAGALQAGAKAAAOIgBAIIhEAAQABAKAHAGQAFAGAJAAQANAAAGgLIAZAAQgDANgMAJQgMAIgQAAQgNAAgLgFgAAWgIQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape.setTransform(40.05,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWArQgKgHgHgKQgFgMgBgOQABgNAFgLQAHgLAKgHQAKgFANgBQARAAAMAJQALAJAFAPIgaAAQgCgFgFgEQgFgEgHABQgJgBgGAIQgGAIAAAMQAAANAGAIQAGAHAJAAQAPAAAEgNIAaAAQgFAQgLAIQgMAKgRgBQgNAAgKgFg");
	this.shape_1.setTransform(29.7,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAwIAAgzQAAgMgFgGQgGgGgKAAQgJAAgFAGQgGAGAAAMIAAAzIgYAAIAAhdIAYAAIAAALQAFgGAHgDQAHgEAJAAQAQAAAKALQALAKAAATIAAA3g");
	this.shape_2.setTransform(19.05,11.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgMAAgOQAAgOAGgLQAGgLALgGQALgFANgBQANAAAKAGQALAGAGALQAGAKAAAOIgBAIIhEAAQABAKAHAGQAFAGAJAAQANAAAGgLIAaAAQgFANgLAJQgMAIgQAAQgNAAgLgFgAAWgIQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_3.setTransform(8.2,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_4.setTransform(0.6,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_5.setTransform(-4.1,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgMAAgOQAAgOAGgLQAGgLAKgGQALgFANgBQAOAAALAGQAKAGAGALQAGAKAAAOIgBAIIhEAAQABAKAGAGQAHAGAIAAQANAAAFgLIAaAAQgDANgMAJQgMAIgRAAQgMAAgLgFgAAWgIQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape_6.setTransform(-11.65,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWArQgLgHgFgKQgHgMAAgOQAAgNAHgLQAFgLALgHQALgFAMgBQARAAAMAJQAMAJADAPIgZAAQgCgFgFgEQgFgEgHABQgJgBgGAIQgGAIAAAMQAAANAGAIQAGAHAJAAQAOAAAFgNIAZAAQgDAQgMAIQgMAKgRgBQgMAAgLgFg");
	this.shape_7.setTransform(-22,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAvIgSgdIgSAdIgZAAIAegvIgeguIAaAAIASAdIASgdIAZAAIgfAuIAgAvg");
	this.shape_8.setTransform(-31.65,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiA8IAAh3IBFAAIAAAUIgsAAIAAAeIAmAAIAAASIgmAAIAAAfIAsAAIAAAUg");
	this.shape_9.setTransform(-40.65,9.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVA/IAAg0QAAgLgGgGQgFgFgJAAQgJAAgGAFQgGAGAAALIAAA0IgYAAIAAh9IAYAAIAAAsQAFgGAHgEQAIgEAIAAQALAAAJAFQAHAFAFAJQAFAJAAAMIAAA3g");
	this.shape_10.setTransform(37,-10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANA7QgdAAAAgdIAAgtIgLAAIAAgTIALAAIAAgYIAXAAIAAAYIAVAAIAAATIgVAAIAAAtQAAAEADADQACACAFAAIALAAIAAAUg");
	this.shape_11.setTransform(28.025,-9.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBDIAAhdIAXAAIAABdgAgJgqQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(22.475,-10.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA7IgWhTIgWBTIgdAAIgfh1IAZAAIAVBbIAZhbIAZAAIAWBaIAWhaIAZAAIghB1g");
	this.shape_13.setTransform(11.4,-9.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA6QgLgGgFgMQgGgLAAgOQAAgOAGgLQAFgLALgFQAJgGAMAAQAJAAAIAEQAIAEAFAGIAAgtIAYAAIAAB9IgYAAIAAgOQgEAHgJAFQgIAEgJAAQgMAAgJgGgAgLgIQgFADgEAFQgDAGgBAJQABAIADAHQAEAGAFAEQAGADAFAAQAHAAAFgDQAHgEADgGQAEgGAAgJQAAgJgEgGQgDgFgHgDQgFgEgHAAQgGAAgFAEg");
	this.shape_14.setTransform(-7.35,-10.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbArQgKgHgFgLQgGgLAAgOQAAgNAGgMQAFgLAKgGQAKgFAMgBQAKABAHAEQAJAEAFAGIAAgNIAXAAIAABdIgXAAIAAgOQgFAHgJAEQgHAFgKgBQgMAAgKgFgAgLgYQgGADgDAHQgEAGAAAIQAAAIAEAGQADAHAGAEQAGADAFAAQAHAAAFgDQAHgEADgGQADgGABgJQgBgIgDgGQgDgGgHgEQgFgDgHAAQgFAAgGADg");
	this.shape_15.setTransform(-18.85,-8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgMAAgOQAAgOAGgLQAGgLAKgGQAMgFANgBQANAAAKAGQALAGAGALQAGAKAAAOIgBAIIhEAAQABAKAGAGQAHAGAIAAQANAAAGgLIAaAAQgFANgLAJQgMAIgQAAQgNAAgLgFgAAWgIQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_16.setTransform(-29.5,-8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfA7IAAh1IAZAAIAABiIAlAAIAAATg");
	this.shape_17.setTransform(-38.25,-9.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-49.3,-23.8,98.69999999999999,47.6), null);


(lib.F2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(91.575,56.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAmQgIgEgEgGQgFgGAAgHIAUAAQABAEAEADQAEADAFAAQAFAAAEgCQADgCAAgEQAAgEgEgCIgMgEQgJgCgFgDQgGgCgEgEQgEgEAAgIQAAgHAEgGQADgFAHgDQAIgDAIAAQAPAAAIAHQAIAHABAMIgTAAQAAgFgEgDQgDgCgGAAQgFAAgDACQgDACAAADQAAAEAEACQAEADAIACIAOAEQAGACAEAEQAEAFAAAIQAAAHgEAFQgEAGgHADQgHADgJAAQgJAAgIgDg");
	this.shape_1.setTransform(85.775,53.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApIAAhQIAUAAIAAANQADgGAGgEQAGgDAIAAIAAAUIgFAAQgKAAgEAFQgEAFAAAKIAAAog");
	this.shape_2.setTransform(79.325,53.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAkQgJgFgGgKQgEgJAAgMQAAgLAEgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAKAEAFAJQAEAJABAMIgBAHIg6AAQABAJAGAEQAFAFAHAAQALAAAFgJIAVAAQgDALgJAIQgLAHgOAAQgKAAgJgFgAASgHQABgHgGgFQgFgFgIAAQgHAAgFAFQgFAEgBAIIAkAAIAAAAg");
	this.shape_3.setTransform(71.7,53.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAxQgIgGgFgJQgFgKAAgLQAAgNAFgIQAFgKAIgEQAIgGALAAQAHABAGADQAIADAEAGIAAgmIAVAAIAABqIgVAAIAAgMQgEAFgHAEQgGAEgJAAQgJAAgJgFgAgJgHQgFACgDAFQgDAFAAAIQAAAGADAGQADAGAFACQAEADAFAAQAGAAAEgCQAFgDADgGQADgFAAgHQAAgIgDgFQgDgEgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_4.setTransform(62.15,52.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAkQgIgFgFgKQgFgJABgMQgBgLAFgKQAFgJAIgFQAJgFAKAAQAHAAAHADQAHAEAEAFIAAgLIAVAAIAABPIgVAAIAAgMQgEAGgHADQgHAEgHAAQgKAAgJgFgAgKgUQgEADgDAFQgDAFAAAHQAAAHADAFQADAGAEACQAFADAFAAQAFAAAFgCQAGgDACgGQADgFAAgHQAAgGgDgGQgCgFgGgDQgFgDgFAAQgFAAgFADg");
	this.shape_5.setTransform(52.45,53.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAkQgJgFgGgKQgEgJAAgMQAAgLAEgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAKAEAEAJQAFAJABAMIgBAHIg5AAQAAAJAGAEQAFAFAHAAQALAAAFgJIAVAAQgDALgJAIQgLAHgOAAQgKAAgJgFgAASgHQABgHgGgFQgFgFgIAAQgHAAgFAFQgFAEgBAIIAkAAIAAAAg");
	this.shape_6.setTransform(43.35,53.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAyIAAhjIAUAAIAABTIAhAAIAAAQg");
	this.shape_7.setTransform(35.95,52.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZA0QgLgIgCgNIAVAAQACAFAEADQAGADAHAAQAIAAAFgFQAGgFAAgLIAAgMQgEAGgGADQgIAEgIAAQgJAAgJgFQgIgFgFgKQgEgIgBgMQABgMAEgKQAFgJAIgFQAIgFAKAAQAIAAAIADQAGAEAEAFIAAgLIAUAAIAABPQABALgFAJQgEAJgKAFQgIAFgNAAQgQAAgLgIgAgJgnQgGADgCAFQgDAFAAAIQAAAHADAFQACAGAGABQAFADAEAAQAGAAAFgCQAEgCADgGQADgFAAgHQAAgHgDgGQgDgFgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_8.setTransform(98.3,38.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhPIAUAAIAAAKQAEgEAHgEQAFgDAHAAQAOAAAJAJQAJAKAAAQIAAAtg");
	this.shape_9.setTransform(88.95,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJA4IAAhPIATAAIAABPgAgIgjQgDgEAAgEQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_10.setTransform(82.225,35.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AALAyQgZAAAAgZIAAglIgJAAIAAgRIAJAAIAAgUIAUAAIAAAUIASAAIAAARIgSAAIAAAlQAAAEACACQACACAFAAIAJAAIAAARg");
	this.shape_11.setTransform(77.35,36.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAkQgIgFgFgKQgFgJABgMQgBgLAFgKQAFgJAIgFQAJgFAKAAQAHAAAHADQAHAEAEAFIAAgLIAVAAIAABPIgVAAIAAgMQgEAGgHADQgHAEgHAAQgKAAgJgFgAgKgUQgEADgDAFQgDAFAAAHQAAAHADAFQADAGAEACQAFADAFAAQAFAAAFgCQAGgDACgGQADgFAAgHQAAgGgDgGQgCgFgGgDQgFgDgFAAQgFAAgFADg");
	this.shape_12.setTransform(69.55,37.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAoIgehPIAWAAIATA9IAUg9IAWAAIgeBPg");
	this.shape_13.setTransform(60.625,37.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJA4IAAhPIATAAIAABPgAgIgjQgDgEAAgEQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_14.setTransform(54.375,35.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALAyQgZAAAAgZIAAglIgJAAIAAgRIAJAAIAAgUIAUAAIAAAUIASAAIAAARIgSAAIAAAlQAAAEACACQACACAFAAIAJAAIAAARg");
	this.shape_15.setTransform(49.55,36.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_16.setTransform(44.8,35.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAlQgIgFgDgHQgFgIAAgLIAAguIAUAAIAAArQAAAKAFAGQAFAEAHAAQAIAAAFgEQAFgGAAgKIAAgrIAUAAIAABPIgUAAIAAgKQgEAFgGAEQgGACgHAAQgJAAgHgDg");
	this.shape_17.setTransform(38.05,37.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAtQgMgGgGgNQgHgLAAgPQAAgOAHgLQAGgMAMgHQAMgGANAAQARgBANAKQAMAIAFAPIgXAAQgEgHgGgEQgGgDgIAAQgIAAgHAEQgGAEgEAIQgEAHAAAJQAAAKAEAHQAEAIAGAFQAHADAIAAQAIAAAGgDQAGgEAEgHIAXAAQgFAPgMAJQgNAIgRAAQgNAAgMgGg");
	this.shape_18.setTransform(27.7,36);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_19.setTransform(117.875,23.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPAmQgIgEgEgGQgFgGAAgHIAUAAQABAEAEADQAEADAFAAQAFAAAEgCQADgCAAgEQAAgEgEgCIgMgEQgJgCgFgDQgGgCgEgEQgEgEAAgIQAAgHAEgGQADgFAHgDQAIgDAIAAQAPAAAIAHQAIAHABAMIgTAAQAAgFgEgDQgDgCgGAAQgFAAgDACQgDACAAADQAAAEAEACQAEADAIACIAOAEQAGACAEAEQAEAFAAAIQAAAHgEAFQgEAGgHADQgHADgJAAQgJAAgIgDg");
	this.shape_20.setTransform(112.075,20.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_21.setTransform(106.25,19.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_22.setTransform(102.3,19.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJA4IAAhPIATAAIAABPgAgIgjQgDgEAAgEQAAgFADgEQAEgEAEABQAFgBAEAEQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_23.setTransform(98.375,18.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAKA1IgagiIAAAiIgUAAIAAhpIAUAAIAAA7IAaghIAaAAIgjAoIAkAng");
	this.shape_24.setTransform(92.625,19.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRAwQgIgEgFgGQgFgHAAgJIAVAAQABAFAEAEQAEAEAFAAQAIAAAEgEQAEgDAAgGQAAgEgDgDQgDgDgEgBIgKgEQgKgCgGgDQgGgCgFgGQgEgGAAgJQAAgJAEgHQAFgGAIgEQAIgDAKAAQAPAAAKAHQAJAIABANIgWAAQAAgFgEgEQgEgCgGAAQgGAAgEACQgDADAAAGQAAAEADADQACADAEABIAKAEQAKACAGADQAHADAEAFQAEAGAAAKQAAAIgEAHQgEAHgIAEQgIADgLAAQgKABgIgEg");
	this.shape_25.setTransform(83.575,19.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZA0QgLgIgBgNIATAAQACAFAGADQAFADAGAAQAJAAAGgFQAFgFAAgLIAAgMQgEAGgHADQgGAEgJAAQgJAAgJgFQgIgFgFgKQgFgIAAgMQAAgMAFgKQAFgJAIgFQAJgFAJAAQAJAAAGADQAHAEAEAFIAAgLIAVAAIAABPQAAALgFAJQgFAJgIAFQgJAFgNAAQgQAAgLgIgAgJgnQgFADgDAFQgDAFAAAIQAAAHADAFQADAGAFABQAEADAFAAQAGAAAEgCQAFgCADgGQADgFAAgHQAAgHgDgGQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_26.setTransform(70.7,22.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIgBQgHABgFAFQgFAFAAAJIAAArIgUAAIAAhPIAUAAIAAAKQAEgEAGgDQAHgEAGAAQAOABAJAIQAJAKAAAQIAAAtg");
	this.shape_27.setTransform(61.35,20.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJA4IAAhPIATAAIAABPgAgIgjQgDgEAAgEQAAgFADgEQAEgEAEABQAFgBAEAEQADAEAAAFQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_28.setTransform(54.625,18.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAoIAAhPIAUAAIAAANQADgGAGgEQAGgDAIgBIAAAWIgFAAQgKgBgEAFQgEAEAAALIAAAng");
	this.shape_29.setTransform(50.075,20.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAlQgGgEgEgIQgFgIAAgKIAAgvIAVAAIAAArQgBAKAFAGQAFAEAHAAQAIAAAFgEQAFgGAAgKIAAgrIAUAAIAABPIgUAAIAAgKQgEAFgGAEQgGACgHAAQgJAAgIgDg");
	this.shape_30.setTransform(42.05,20.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AALAyQgZAAABgZIAAglIgKAAIAAgRIAKAAIAAgUIATAAIAAAUIASAAIAAARIgSAAIAAAlQAAAEACACQACACAFAAIAJAAIAAARg");
	this.shape_31.setTransform(34.55,19.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAoIAAhPIAUAAIAAANQADgGAGgEQAGgDAIgBIAAAWIgFAAQgKgBgEAFQgEAEAAALIAAAng");
	this.shape_32.setTransform(29.225,20.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAlQgGgEgEgIQgFgIAAgKIAAgvIAVAAIAAArQgBAKAFAGQAFAEAHAAQAIAAAFgEQAFgGAAgKIAAgrIAUAAIAABPIgUAAIAAgKQgEAFgGAEQgGACgHAAQgJAAgIgDg");
	this.shape_33.setTransform(21.25,20.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAXAyIgthEIAABEIgUAAIAAhjIAUAAIAtBEIAAhEIAUAAIAABjg");
	this.shape_34.setTransform(11.3,19.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_35.setTransform(103.625,6.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAkQgIgFgFgKQgGgJAAgMQAAgLAGgKQAFgJAIgFQAKgFALAAQAKAAAKAFQAJAEAEAJQAGAJAAAMIgBAHIg6AAQACAJAEAEQAGAFAHAAQALAAAFgJIAWAAQgEALgKAIQgJAHgOAAQgLAAgKgFgAATgHQAAgHgGgFQgGgFgHAAQgHAAgFAFQgFAEgBAIIAlAAIAAAAg");
	this.shape_36.setTransform(97.3,3.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZA0QgLgIgBgNIAUAAQABAFAGADQAFADAGAAQAJAAAGgFQAFgFAAgLIAAgMQgEAGgHADQgGAEgJAAQgJAAgJgFQgIgFgFgKQgFgIAAgMQAAgMAFgKQAFgJAIgFQAJgFAJAAQAJAAAGADQAHAEAEAFIAAgLIAVAAIAABPQAAALgFAJQgFAJgIAFQgJAFgNAAQgQAAgLgIgAgJgnQgFADgDAFQgDAFAAAIQAAAHADAFQADAGAFABQAEADAFAAQAGAAAEgCQAFgCADgGQADgFAAgHQAAgHgDgGQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_37.setTransform(87.8,5.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXAxQgIgGgFgJQgEgJgBgMQABgMAEgJQAFgKAIgEQAJgFAKgBQAGAAAIAEQAGADAFAGIAAgmIAUAAIAABpIgUAAIAAgLQgEAFgGAEQgIAEgIAAQgJAAgJgFgAgJgHQgGADgCAEQgDAFAAAIQAAAGADAGQACAFAGADQAFADAEAAQAGAAAFgDQAEgDADgFQADgFAAgHQAAgIgDgFQgDgEgEgDQgFgDgGAAQgEAAgFADg");
	this.shape_38.setTransform(78.05,2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTAkQgJgFgGgKQgEgJAAgMQAAgLAEgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAKAEAFAJQAEAJABAMIgBAHIg5AAQAAAJAGAEQAFAFAHAAQALAAAFgJIAVAAQgDALgJAIQgLAHgOAAQgKAAgJgFgAASgHQABgHgGgFQgFgFgIAAQgHAAgFAFQgFAEgBAIIAkAAIAAAAg");
	this.shape_39.setTransform(69,3.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_40.setTransform(62.6,2.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAPAoIgPg3IgNA3IgWAAIgYhPIAVAAIAOA8IAPg8IAUAAIAPA8IAOg8IAUAAIgYBPg");
	this.shape_41.setTransform(54.525,3.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAkQgKgFgFgKQgFgJAAgMQAAgLAFgKQAGgJAJgFQAKgFAKAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAJQgFAKgJAFQgKAFgLAAQgLAAgJgFgAgOgRQgFAGAAALQAAALAFAGQAGAHAIAAQAFAAAEgDQAGgDACgFQADgGAAgHQAAgLgFgGQgHgGgIAAQgIAAgGAGg");
	this.shape_42.setTransform(43.9,3.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgEgFgJgBQgHABgFAFQgFAFAAAJIAAArIgUAAIAAhPIAUAAIAAALQAEgGAGgCQAHgEAGAAQAOABAJAIQAJAKAAAPIAAAug");
	this.shape_43.setTransform(34.6,3.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAQAyIgkgtIAAAtIgUAAIAAhjIAUAAIAAAtIAkgtIAYAAIgoAxIApAyg");
	this.shape_44.setTransform(25.35,2.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZA0QgLgIgCgNIAUAAQACAFAFADQAGADAHAAQAIAAAFgFQAGgFAAgLIAAgMQgEAGgGADQgIAEgHAAQgLAAgHgFQgJgFgFgKQgFgIABgMQgBgMAFgKQAFgJAIgFQAJgFAKAAQAHAAAIADQAGAEAEAFIAAgLIAVAAIAABPQgBALgEAJQgEAJgJAFQgKAFgMAAQgQAAgLgIgAgKgnQgEADgDAFQgDAFAAAIQAAAHADAFQADAGAEABQAFADAFAAQAFAAAGgCQAFgCACgGQADgFAAgHQAAgHgDgGQgCgFgFgDQgGgDgFAAQgFAAgFADg");
	this.shape_45.setTransform(88.1,-10.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AASAoIAAgqQAAgKgFgFQgEgGgJAAQgIAAgEAGQgFAFAAAKIAAAqIgUAAIAAhOIAUAAIAAAKQAEgGAHgCQAFgDAHgBQAPABAIAIQAJAKAAAPIAAAug");
	this.shape_46.setTransform(78.75,-12.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_47.setTransform(72.025,-14.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AALAyQgZAAABgZIAAglIgKAAIAAgRIAKAAIAAgUIATAAIAAAUIASAAIAAARIgSAAIAAAlQAAAEACACQACACAEAAIAKAAIAAARg");
	this.shape_48.setTransform(67.15,-13.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AASAoIAAgqQAAgKgFgFQgEgGgJAAQgHAAgFAGQgFAFAAAKIAAAqIgUAAIAAhOIAUAAIAAAKQAEgGAHgCQAFgDAHgBQAOABAJAIQAJAKAAAPIAAAug");
	this.shape_49.setTransform(59.75,-12.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAkQgIgFgFgKQgFgJABgMQgBgLAFgKQAFgJAIgFQAJgFAKAAQAHAAAIADQAGAEAEAFIAAgLIAUAAIAABPIgUAAIAAgMQgEAGgGADQgIAEgHAAQgKAAgJgFgAgKgUQgEADgDAFQgDAFAAAHQAAAHADAFQADAGAEACQAFADAFAAQAFAAAGgCQAFgDACgGQADgFAAgHQAAgGgDgGQgCgFgFgDQgGgDgFAAQgFAAgFADg");
	this.shape_50.setTransform(49.85,-12.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_51.setTransform(43.25,-13.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgjAyIAAhjIAkAAQALAAAIAEQAJAEADAHQAFAHAAAJQgBAIgDAHQgEAGgIAEQgIAFgMAAIgRAAIAAAmgAgQgEIAQAAQAIAAAEgDQAEgEAAgHQAAgPgQAAIgQAAg");
	this.shape_52.setTransform(37.2,-13.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-4.1,-26.1,133.9,91.19999999999999), null);


(lib.F1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgOAmQgJgEgEgGQgFgGAAgIIAUAAQABAFADADQAFADAFAAQAFAAAEgCQADgCAAgEQAAgEgFgCQgDgCgIgCIgPgEQgFgDgEgDQgEgFAAgJQAAgGADgGQAFgEAHgEQAGgDAJAAQAPAAAIAHQAIAHABAMIgTAAQgBgEgDgDQgDgDgGAAQgFAAgDACQgDACAAADQAAAFAFABIALAFIAOAEQAFACAFAEQAEAFAAAIQAAAHgEAFQgEAGgHADQgHADgJAAQgJAAgHgDg");
	this.shape.setTransform(132.2,72.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAjQgJgFgFgIQgGgKAAgMQABgLAFgJQAFgKAIgFQAKgFALAAQALAAAIAFQAKAEAFAKQAEAJAAALIAAAHIg5AAQABAIAFAGQAGAEAGAAQALAAAFgKIAWAAQgEAMgKAHQgJAIgOAAQgLAAgJgGgAATgGQgBgIgFgFQgGgFgHABQgGgBgGAFQgFAEgBAJIAlAAIAAAAg");
	this.shape_1.setTransform(123.95,72.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAjQgJgFgFgIQgGgKABgMQAAgLAEgJQAFgKAKgFQAIgFAMAAQALAAAIAFQAJAEAGAKQAEAJAAALIAAAHIg5AAQABAIAFAGQAFAEAHAAQALAAAFgKIAVAAQgDAMgJAHQgLAIgNAAQgLAAgJgGgAATgGQAAgIgGgFQgGgFgHABQgGgBgFAFQgGAEgBAJIAlAAIAAAAg");
	this.shape_2.setTransform(115.15,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaA6IARgnIgghMIAWAAIAUA3IAUg3IAVAAIgwBzg");
	this.shape_3.setTransform(106.4,74.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAjQgJgFgGgIQgFgKAAgMQAAgLAFgJQAGgKAJgFQAJgFALAAQALAAAKAFQAJAFAFAKQAGAJAAALQAAAMgGAKQgFAIgKAFQgJAGgLAAQgLAAgJgGgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAFAAAFgDQAEgDADgFQADgGAAgHQAAgKgGgHQgGgFgIAAQgIAAgGAFg");
	this.shape_4.setTransform(97.625,72.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_5.setTransform(91.05,71.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoA7IAAh0IAUAAIAAALQAEgFAGgEQAIgDAHAAQAKAAAIAFQAJAFAEAJQAFAJAAAMQAAANgFAIQgEAJgJAFQgIAGgKAAQgHAAgIgEQgGgEgEgFIAAAxgAgKgmQgEADgDAFQgDAFAAAIQAAAHADAFQADAFAEACQAFADAFAAQAGAAAEgDQAFgCADgFQADgFAAgIQAAgHgDgFQgDgFgFgDQgEgDgGAAQgFAAgFADg");
	this.shape_6.setTransform(84.5,74.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAtAoIAAgrQAAgJgEgFQgFgFgIAAQgIAAgFAFQgFAFAAAJIAAArIgTAAIAAgrQAAgJgFgFQgEgFgIAAQgJAAgFAFQgEAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQADgFAHgDQAGgDAHAAQAJAAAHAEQAHAEAEAHQAEgHAHgEQAHgEAJAAQAPAAAIAJQAJAJAAAQIAAAtg");
	this.shape_7.setTransform(71.975,72.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAyIAAhjIA5AAIAAARIglAAIAAAZIAgAAIAAAPIggAAIAAAZIAlAAIAAARg");
	this.shape_8.setTransform(60.75,71.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYA0QgLgIgCgOIAUAAQACAGAFADQAFADAHAAQAIAAAGgFQAFgFAAgLIAAgMQgEAGgGADQgHAEgIAAQgKAAgIgFQgIgFgFgKQgFgIAAgMQAAgMAFgJQAFgKAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgLIAUAAIAABOQAAALgEAJQgEAJgJAFQgJAFgNAAQgQAAgKgIgAgJgmQgFACgDAFQgDAGAAAHQAAAHADAFQADAGAFACQAFACAEAAQAGAAAFgCQAFgCACgFQADgGAAgHQAAgHgDgFQgCgGgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_9.setTransform(128.025,55.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_10.setTransform(118.825,53.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgEgEABgFQgBgEAEgEQADgDAFAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_11.setTransform(112.1,52.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAmQgHgEgFgGQgEgGgBgHIAVAAQAAAEAEADQAEADAEAAQAGAAADgCQADgCAAgEQAAgEgDgCQgEgCgIgCIgOgEQgGgDgEgDQgEgFAAgJQAAgGAEgGQAEgEAGgEQAIgDAIAAQAPAAAIAHQAIAHABAMIgTAAQAAgEgEgDQgEgDgFAAQgFAAgCACQgDACAAADQAAAFADABIAMAFIAOAEQAGACADAEQAEAFABAIQAAAHgEAFQgEAGgHADQgHADgKAAQgIAAgIgDg");
	this.shape_12.setTransform(106.15,53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgDgEgBgFQABgEADgEQAEgDAEAAQAFAAAEADQADAEABAEQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_13.setTransform(100.35,52.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAtAoIAAgrQAAgJgEgFQgFgFgIAAQgIAAgFAFQgFAFAAAJIAAArIgTAAIAAgrQAAgJgFgFQgEgFgIAAQgJAAgFAFQgEAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQADgFAHgDQAGgDAHAAQAJAAAHAEQAHAEAEAHQAEgHAHgEQAHgEAJAAQAPAAAIAJQAJAJAAAQIAAAtg");
	this.shape_14.setTransform(90.925,53.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAjQgJgFgGgIQgFgKAAgMQAAgLAFgJQAGgKAJgFQAJgFALAAQALAAAKAFQAJAFAFAKQAGAJAAALQAAAMgGAKQgFAIgKAFQgJAGgLAAQgLAAgJgGgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAFAAAFgDQAEgDADgFQADgGAAgHQAAgKgGgHQgGgFgIAAQgIAAgGAFg");
	this.shape_15.setTransform(78.925,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAoIAAhOIAUAAIAAAMQADgGAGgEQAGgDAIAAIAAAVIgFAAQgKAAgEAEQgEAFAAAKIAAAng");
	this.shape_16.setTransform(71.75,53.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjAyIAAhjIAjAAQAMAAAIAEQAIAEAEAHQAEAHAAAJQAAAIgDAHQgEAGgIAFQgIAEgNgBIgPAAIAAAngAgPgEIAPAAQAIAAAEgDQAEgEAAgHQAAgOgQgBIgPAAg");
	this.shape_17.setTransform(64.475,52.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYA0QgLgIgCgOIAUAAQACAGAFADQAFADAHAAQAIAAAGgFQAFgFAAgLIAAgMQgEAGgGADQgHAEgIAAQgKAAgIgFQgIgFgFgKQgFgIAAgMQAAgMAFgJQAFgKAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgLIAUAAIAABOQAAALgEAJQgEAJgJAFQgJAFgNAAQgQAAgKgIgAgJgmQgFACgDAFQgDAGAAAHQAAAHADAFQADAGAFACQAFACAEAAQAGAAAFgCQAFgCACgFQADgGAAgHQAAgHgDgFQgCgGgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_18.setTransform(132.425,36.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_19.setTransform(123.225,34.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAADADQAEAEgBAEQABAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_20.setTransform(116.5,33.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoA7IAAh0IAUAAIAAALQAEgFAGgEQAIgDAHAAQAKAAAIAFQAIAFAGAJQAEAJAAAMQAAANgEAIQgGAJgIAFQgIAGgKAAQgHAAgIgEQgGgEgEgFIAAAxgAgKgmQgFADgCAFQgDAFAAAIQAAAHADAFQACAFAFACQAGADAEAAQAGAAAEgDQAFgCADgFQADgFAAgIQAAgHgDgFQgDgFgFgDQgEgDgGAAQgEAAgGADg");
	this.shape_21.setTransform(109.9,36.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAjQgJgFgGgIQgFgKAAgMQAAgLAFgJQAGgKAJgFQAJgFALAAQALAAAKAFQAJAFAFAKQAGAJAAALQAAAMgGAKQgFAIgKAFQgJAGgLAAQgLAAgJgGgAgOgRQgGAHAAAKQAAALAGAGQAGAHAIAAQAFAAAFgDQAEgDADgFQADgGAAgHQAAgKgGgHQgGgFgIAAQgIAAgGAFg");
	this.shape_22.setTransform(100.275,35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_23.setTransform(93.75,33.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAjQgJgFgFgIQgGgKABgMQAAgLAEgJQAGgKAJgFQAIgFALAAQAMAAAIAFQAKAEAFAKQAEAJAAALIAAAHIg5AAQABAIAFAGQAGAEAGAAQALAAAFgJIAVAAQgDALgJAHQgLAIgOAAQgKAAgJgGgAATgGQgBgIgFgFQgFgFgIABQgHgBgEAFQgFAEgCAJIAlAAIAAAAg");
	this.shape_24.setTransform(87.35,35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAoIgdhOIAVAAIATA7IAUg7IAVAAIgdBOg");
	this.shape_25.setTransform(78.725,35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAjQgJgFgFgIQgGgKAAgMQABgLAEgJQAFgKAKgFQAIgFAMAAQALAAAIAFQAJAEAGAKQAEAJAAALIAAAHIg5AAQABAIAFAGQAGAEAGAAQALAAAFgJIAWAAQgEALgJAHQgKAIgOAAQgLAAgJgGgAATgGQgBgIgFgFQgGgFgHABQgGgBgGAFQgFAEgBAJIAlAAIAAAAg");
	this.shape_26.setTransform(70.05,35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgrAyIAAhjIAjAAQAPAAAMAHQAMAFAGAMQAHALAAAOQAAAPgHAMQgGAKgMAHQgMAGgPAAgAgXAhIAOAAQAPAAAJgJQAIgIAAgQQAAgPgIgIQgJgJgPAAIgOAAg");
	this.shape_27.setTransform(60.775,33.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAwQgJgEgEgHQgFgHAAgJQAAgJAGgIQAFgHALgFQgEgFgBgEQgCgEAAgGQAAgGADgGQAEgFAGgEQAHgDAJAAQAIAAAHAEQAGADADAGQADAGAAAHIgTAAQAAgFgCgDQgDgCgDAAQgEAAgDACQgDADAAADQAAAEACADIAIAJIAYAYIAAgBIAAAAIAJgNIAUAAIgKARIgGAKIAYAYIgZAAIgKgLQgOANgTAAQgLAAgIgEgAghAUQAAAHAGAEQAFAEAHAAQAMAAAIgIIgXgYQgOAGgBALg");
	this.shape_28.setTransform(133.15,14.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYA0QgLgIgCgOIAUAAQACAGAFADQAFADAHAAQAIAAAGgFQAFgFAAgLIAAgMQgEAGgGADQgHAEgIAAQgKAAgIgFQgIgFgFgKQgFgIAAgMQAAgMAFgJQAFgKAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgLIAUAAIAABOQAAALgEAJQgEAJgJAFQgJAFgNAAQgQAAgKgIgAgJgmQgFACgDAFQgDAGAAAHQAAAHADAFQADAGAFACQAFACAEAAQAGAAAFgCQAFgCACgFQADgGAAgHQAAgHgDgFQgCgGgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_29.setTransform(118.875,17.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_30.setTransform(109.675,15.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgDgDAAgFQAAgGADgDQADgDAFAAQAGAAADADQADADABAGQgBAFgDADQgDADgGABQgFgBgDgDg");
	this.shape_31.setTransform(102.95,14.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_32.setTransform(96.325,15.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgEgDABgFQgBgGAEgDQADgDAFAAQAFAAAEADQADADAAAGQAAAFgDADQgEADgFABQgFgBgDgDg");
	this.shape_33.setTransform(89.6,14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgMIAUAAIAABOIgUAAIAAgLQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgTQgFACgDAFQgDAFAAAHQAAAHADAFQADAFAFADQAFADAEAAQAGAAAFgDQAFgCACgGQADgFAAgHQAAgGgDgGQgCgFgFgCQgFgEgGAAQgEAAgFAEg");
	this.shape_34.setTransform(82.475,16.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AALAxQgYABAAgZIAAgmIgKAAIAAgQIAKAAIAAgUIATAAIAAAUIASAAIAAAQIgSAAIAAAmQAAAEACACQACABAEAAIAKAAIAAARg");
	this.shape_35.setTransform(75.125,15.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTAkQgJgGgFgJQgGgJABgMQAAgMAEgJQAGgJAJgFQAIgFALAAQAMAAAIAFQAKAFAFAIQAEAJAAAMIAAAHIg5AAQABAJAFAFQAGAEAGAAQALAAAFgKIAVAAQgDAMgJAIQgLAHgOAAQgKAAgJgFgAATgGQgBgIgFgFQgFgEgIgBQgHABgEAEQgFAEgCAJIAlAAIAAAAg");
	this.shape_36.setTransform(68,16.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAOAyIgVgnIgJAAIAAAnIgUAAIAAhjIAkAAQAMAAAIAEQAIAEAEAHQAEAHAAAJQAAAJgGAJQgFAHgMACIAYApgAgQgDIAQAAQAHAAAFgEQAEgEAAgHQAAgHgEgDQgFgEgHAAIgQAAg");
	this.shape_37.setTransform(59.175,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(30.5,2.8,132.1,81.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAoQgIgDgEgGQgEgGgBgIIAWAAQABAFACACQADADAEAAQAEAAADgCQACgDAAgDQAAgDgCgCIgFgEIgIgDIgNgFQgFgCgEgEQgDgFAAgIQAAgMAIgHQAJgGANAAQANAAAJAGQAIAHABAMIgWAAQgBgEgCgCQgDgDgDAAQgEAAgCACQgDACAAAEQAAAEAEACQAEADAHACIANAFQAFACAEAFQAEAFAAAHQAAAHgEAGQgDAGgHAEQgHADgKAAQgIAAgHgDg");
	this.shape.setTransform(33.025,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgFgIQgEgIAAgLIAAgyIAUAAIAAAyQAAAIAEAEQAEAEAGAAQAHAAAEgEQAEgEAAgIIAAgyIAUAAIAAAyQAAALgEAIQgFAIgIAEQgIAEgKAAQgJAAgIgEg");
	this.shape_1.setTransform(25.125,-1.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAqIAAhDIgXAAIAAgQIBBAAIAAAQIgXAAIAABDg");
	this.shape_2.setTransform(14.9,-1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_3.setTransform(6.775,-1.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAqIgFgPIgfAAIgFAPIgVAAIAehTIAXAAIAeBTgAAKAMIgKgeIgJAeIATAAg");
	this.shape_4.setTransform(-2.125,-1.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAqIAAhDIgXAAIAAgQIBAAAIAAAQIgWAAIAABDg");
	this.shape_5.setTransform(-10.05,-1.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAqIghgzIAAAzIgVAAIAAhTIAVAAIAhAzIAAgzIAVAAIAABTg");
	this.shape_6.setTransform(-18.075,-1.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgFgKQgGgKAAgMQAAgLAGgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAFAKQAGAKAAALQAAAMgGAKQgFAKgKAGQgKAFgMAAQgLAAgKgFgAgPgRQgGAHAAAKQAAALAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-27.275,-1.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_8.setTransform(-36.575,-1.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DBA76").s().p("Al8BqQgpAAgegeQgdgdAAgpIAAgMQAAgpAdgdQAdgdAqAAIL6AAQApAAAdAdQAdAdAAApIAAAMQAAApgdAdQgdAegpAAg");
	this.shape_9.setTransform(-2.125,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-50.3,-12.1,96.3,21.2), null);


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
	this.instance.setTransform(-150,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(-150,-94.5,300,189), null);


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
	this.shape.graphics.f("#00FF00").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(150,300.0046,1.875,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(80,125,0.5333,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(312));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(82.9,583.05,1.107,1.107,0,0,0,0.4,0.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regY:0.4,y:560.9,alpha:1},9,cjs.Ease.get(1)).wait(276));

	// F3
	this.instance_1 = new lib.F3();
	this.instance_1.setTransform(78.7,474.2,1.2425,1.2425,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({_off:false},0).to({y:480.45,alpha:1},10,cjs.Ease.get(1)).wait(84));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(3.8,451.9,1.2177,1.2177,0,0,0,0.3,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({y:456.1,alpha:1},9,cjs.Ease.get(1)).to({_off:true},90).wait(94));

	// F1
	this.instance_3 = new lib.F1();
	this.instance_3.setTransform(-37.4,411.25,1.2177,1.2177,0,0,0,0.1,0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({regY:0.4,y:426.3,alpha:1},9).to({_off:true},93).wait(192));

	// Line
	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(80.75,411.3,0.8558,0.8558,-90,0,0,-0.3,0.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(294));

	// Heading
	this.instance_5 = new lib.Heading();
	this.instance_5.setTransform(65.45,374.25,0.5845,0.5845,0,0,0,0.2,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({regX:0.5,x:73.6,alpha:1},9,cjs.Ease.get(1)).wait(294));

	// Logo.png
	this.instance_6 = new lib.Logo_1();
	this.instance_6.setTransform(34.7,118.55,0.5104,0.5104,0,0,0,0.4,0.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:130.5,alpha:1},9,cjs.Ease.get(1)).wait(303));

	// Bg
	this.instance_7 = new lib.Bg_1();
	this.instance_7.setTransform(149,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(312));

	// Pic3
	this.instance_8 = new lib.Pic3();
	this.instance_8.setTransform(90,89.85,0.8018,0.8018,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(218).to({_off:false},0).wait(94));

	// Pic2
	this.instance_9 = new lib.PIc2();
	this.instance_9.setTransform(101,87.05,0.882,0.882,0,0,0,0.2,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).wait(193));

	// Pic1.jpg
	this.instance_10 = new lib.pic1("synched",0);
	this.instance_10.setTransform(80,100.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},9).wait(303));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(312));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-2,334.1,602);


// stage content:
(lib.KSFY_214797_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(80.0153,300.0046,0.5318,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(79.9998,299.9924);

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
p.nominalBounds = new cjs.Rectangle(79.5,299.5,220.5,301);
// library properties:
lib.properties = {
	id: '9AB1DC1B8C18844BBBA000473B7B24CE',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bg.png", id:"Bg"},
		{src:"Img1.jpg", id:"Img1"},
		{src:"Img2.jpg", id:"Img2"},
		{src:"Img3.jpg", id:"Img3"},
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
an.compositions['9AB1DC1B8C18844BBBA000473B7B24CE'] = {
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