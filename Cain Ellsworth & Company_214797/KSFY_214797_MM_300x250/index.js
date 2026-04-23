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


(lib.img1copy = function() {
	this.initialize(img.img1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,154);


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


(lib.img1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img1copy();
	this.instance.setTransform(-150,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-77,300,154);


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
	this.shape.graphics.f("#CCA230").s().p("AgSArQgJgEgGgHQgFgHgBgJIAcAAQAAAFAFADQAEADAEAAQAGAAADgCQACgCAAgEQAAgEgEgCQgEgCgJgCIgQgFQgHgCgFgFQgEgFAAgKQAAgIAEgGQAFgHAIgEQAJgEALAAQARAAAKAJQAKAJACAOIgbAAQAAgFgEgDQgDgDgGAAQgFAAgCACQgDACAAAEQABAEAEACIALAEIARAFQAHACAFAFQAFAGAAAJQAAAJgEAGQgFAGgJAEQgJAEgKAAQgLAAgKgFg");
	this.shape.setTransform(32.5,32.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCA230").s().p("AgcAvIAAhcIAcAAIAAAQQAFgIAHgEQAHgFAKAAIAAAeIgIAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_1.setTransform(24.85,32.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCA230").s().p("AgXAqQgKgGgHgLQgFgLgBgOQABgNAFgLQAHgLAKgGQALgGANAAQANAAAKAGQALAGAFAKQAHALAAANIgBAIIg/AAQABAIAEAFQAFAFAHAAQAKAAAEgJIAfAAQgDAJgGAHQgGAHgJAEQgKAFgKAAQgNAAgLgGgAASgIQgBgHgEgFQgFgEgIAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_2.setTransform(15.85,32.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCA230").s().p("AgcA4QgJgGgFgLQgGgLAAgOQAAgOAGgKQAFgLAJgGQAJgFAMgBQAIABAHAEQAIADAFAHIAAgrIAcAAIAAB6IgcAAIAAgOQgFAHgHAEQgIAEgIAAQgMAAgJgGgAgNgBQgGAEAAALQAAALAGAGQAGAGAHAAQAJAAAGgGQAFgGABgKQgBgMgFgEQgGgHgJAAQgHAAgGAHg");
	this.shape_3.setTransform(4.85,30.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA230").s().p("AgcAqQgJgGgFgLQgGgLAAgOQAAgNAGgLQAFgLAJgGQAJgGAMAAQAIAAAIAEQAHAEAFAHIAAgNIAcAAIAABbIgcAAIAAgNQgFAHgHAEQgIAEgIAAQgMAAgJgGgAgNgQQgGAGAAAKQAAAKAGAHQAGAGAHAAQAJAAAFgGQAGgGABgLQgBgKgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_4.setTransform(-6.4,32.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAAKAGQAKAGAHAKQAFALAAANIAAAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_5.setTransform(-16.85,32.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCA230").s().p("AggA6IAAhzIAcAAIAABdIAlAAIAAAWg");
	this.shape_6.setTransform(-25.475,30.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCA230").s().p("AgQBBIAAhEIgKAAIAAgYIAKAAIAAgCQAAgRAKgJQAJgJATAAIAEAAIAAAYQgIAAgDADQgDADAAAGIAAABIAPAAIAAAYIgPAAIAABEg");
	this.shape_7.setTransform(58.525,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCA230").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_8.setTransform(50.325,16.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCA230").s().p("AARAvIAAgyQAAgJgEgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAEgHAIgDQAGgEAJAAQAQAAAKALQAKAKAAATIAAA1g");
	this.shape_9.setTransform(36.05,16.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCA230").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(25.125,16.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCA230").s().p("AgNBDIAAhcIAbAAIAABcgAgLgnQgFgFAAgGQAAgGAFgFQAEgEAHgBQAHABAFAEQAFAFAAAGQAAAGgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_11.setTransform(17.45,14.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCA230").s().p("AAPA6QgPgBgIgHQgJgHAAgSIAAgkIgLAAIAAgXIALAAIAAgXIAbAAIAAAXIATAAIAAAXIgTAAIAAAkQAAAFACABQACACAFAAIAKAAIAAAZg");
	this.shape_12.setTransform(11.575,14.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCA230").s().p("AgcAqQgJgGgGgLQgFgLAAgOQAAgNAFgLQAGgLAJgGQAJgGAMAAQAIAAAIAEQAHAEAEAHIAAgNIAdAAIAABbIgdAAIAAgNQgEAHgHAEQgIAEgIAAQgMAAgJgGgAgNgQQgGAGAAAKQAAAKAGAHQAGAGAHAAQAIAAAHgGQAFgGAAgLQAAgKgFgGQgHgGgIAAQgHAAgGAGg");
	this.shape_13.setTransform(2.4,16.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCA230").s().p("AgbAvIAAhcIAbAAIAAAQQAEgIAIgEQAHgFAKAAIAAAeIgIAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_14.setTransform(-6.1,16.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAAKAGQAKAGAHAKQAFALAAANIAAAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_15.setTransform(-15.05,16.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCA230").s().p("AARAvIAAgyQABgJgFgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAEgHAIgDQAGgEAJAAQAQAAAKALQAKAKAAATIAAA1g");
	this.shape_16.setTransform(-25.65,16.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLABgOQgBgNAHgLQAFgLALgGQALgGAMAAQAOAAALAGQAKAGAGAKQAFALAAANIAAAIIg/AAQAAAIAGAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQABgHgGgFQgFgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_17.setTransform(-36.4,16.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA230").s().p("AgcA0QgOgIgHgNQgIgOAAgRQAAgQAIgOQAHgNAOgIQANgHAQAAQAVAAAPAKQAOAKAFASIggAAQgDgGgGgDQgGgDgIAAQgMAAgJAJQgIAJAAAOQAAAQAJAJQAIAJAPAAQAKAAAHgFQAIgGADgKIgjAAIAAgTIA9AAIAAAZQgEALgHAJQgIAJgLAFQgMAGgOAAQgRAAgNgHg");
	this.shape_18.setTransform(-47.775,14.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCA230").s().p("AAPA5QgPAAgIgHQgJgIAAgQIAAglIgLAAIAAgXIALAAIAAgXIAbAAIAAAXIATAAIAAAXIgTAAIAAAlQAAAEACABQACACAFAAIAKAAIAAAYg");
	this.shape_19.setTransform(19.775,-1.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCA230").s().p("AAQAuIgQgZIgQAZIgeAAIAeguIgfgtIAfAAIARAZIAQgZIAeAAIgfAtIAgAug");
	this.shape_20.setTransform(11.65,-0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAAKAGQAKAGAHAKQAFALABANIgBAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgJAFgMAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_21.setTransform(1.7,-0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCA230").s().p("AAXA6IguhHIAABHIgcAAIAAhzIAcAAIAuBHIAAhHIAdAAIAABzg");
	this.shape_22.setTransform(-9.6,-1.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#315746").s().p("AgXAqQgKgGgHgLQgFgLAAgOQAAgNAFgLQAHgLAKgGQAKgGAOAAQANAAALAGQAJAGAGAKQAHALAAANIgBAIIg/AAQAAAIAFAFQAFAFAHAAQAKAAAEgJIAfAAQgDAJgGAHQgGAHgJAEQgJAFgLAAQgNAAgLgGgAASgIQAAgHgGgFQgEgEgIAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_23.setTransform(50.25,-22.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#315746").s().p("AASA9IAAgyQgBgJgEgEQgFgGgIAAQgIAAgEAGQgFAEAAAJIAAAyIgcAAIAAh5IAcAAIAAAqQAEgGAIgEQAHgDAIAAQAQAAAKAKQAKALAAARIAAA2g");
	this.shape_24.setTransform(39.65,-23.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#315746").s().p("AAPA6QgPAAgIgIQgJgIAAgRIAAgkIgLAAIAAgXIALAAIAAgWIAbAAIAAAWIATAAIAAAXIgTAAIAAAkQAAAFACACQACABAFAAIAKAAIAAAZg");
	this.shape_25.setTransform(30.575,-23.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#315746").s().p("AgeA8QgNgKgBgQIAcAAQABAFAFADQAFADAGAAQAJAAAFgFQAGgFgBgLIAAgNQgDAGgIAEQgIAFgIAAQgLAAgKgGQgJgGgGgLQgFgKAAgOQAAgOAFgLQAGgLAJgGQAKgGALAAQAIAAAIAEQAIAEADAHIAAgNIAdAAIAABbQAAANgFAKQgGALgKAGQgKAGgQAAQgTAAgNgKgAgNgmQgGAGAAALQAAAKAGAHQAGAFAHAAQAJAAAGgFQAFgGAAgLQAAgLgFgGQgGgGgJAAQgHAAgGAGg");
	this.shape_26.setTransform(17.95,-19.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#315746").s().p("AARAvIAAgyQABgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAFgHAHgDQAGgEAJAAQAQAAAKALQAKAKAAATIAAA1g");
	this.shape_27.setTransform(7.1,-22.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#315746").s().p("AgNBDIAAhcIAbAAIAABcgAgLgnQgFgEAAgHQAAgGAFgFQAEgEAHAAQAHAAAFAEQAFAFAAAGQAAAHgFAEQgFAFgHgBQgHABgEgFg");
	this.shape_28.setTransform(-0.95,-24.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#315746").s().p("AAPAuIgPg7IgOA7IgfAAIgZhbIAcAAIANBBIAQhBIAdAAIAQBBIANhBIAaAAIgZBbg");
	this.shape_29.setTransform(-10.575,-22.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#315746").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_30.setTransform(-23.025,-22.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#315746").s().p("AgbAvIAAhcIAbAAIAAAQQAEgIAIgEQAIgFAIAAIAAAeIgHAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_31.setTransform(-31.45,-22.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#315746").s().p("AgcA0QgOgIgHgNQgIgOAAgRQAAgQAIgOQAHgNAOgIQANgHAQAAQAVAAAPAKQAOAKAFASIggAAQgDgGgGgDQgGgDgIAAQgMAAgJAJQgIAJAAAOQAAAQAJAJQAIAJAPAAQAKAAAHgFQAIgGADgKIgjAAIAAgTIA9AAIAAAZQgEALgHAJQgIAJgLAFQgMAGgOAAQgRAAgNgHg");
	this.shape_32.setTransform(-41.625,-23.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heading, new cjs.Rectangle(-69,-37.2,145.4,82.2), null);


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
	this.shape.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgFANAAQAOgBALAGQAKAGAGAKQAGALAAAOIgBAIIhEAAQABALAHAFQAFAGAJAAQANAAAFgLIAaAAQgDANgMAJQgMAJgRgBQgMAAgLgFgAAWgIQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape.setTransform(38.05,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWArQgLgHgFgKQgHgLAAgPQAAgOAHgLQAFgKALgHQALgFAMAAQARgBAMAJQAMAJADAPIgZAAQgCgFgFgEQgFgEgHABQgJAAgGAHQgGAIAAAMQAAANAGAIQAGAHAJAAQAPAAAEgNIAZAAQgDAQgMAIQgMAJgRAAQgMAAgLgFg");
	this.shape_1.setTransform(27.7,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAwIAAgzQAAgMgFgGQgGgGgJAAQgKAAgFAGQgGAGAAAMIAAAzIgYAAIAAhdIAYAAIAAALQAFgGAHgDQAHgEAJAAQAQAAALALQAKAKAAATIAAA3g");
	this.shape_2.setTransform(17.05,8.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgLAAgPQAAgOAGgLQAGgLALgGQAKgFANAAQAOgBAKAGQALAGAGAKQAGALAAAOIgBAIIhEAAQABALAHAFQAFAGAJAAQANAAAFgLIAaAAQgDANgMAJQgMAJgRgBQgMAAgLgFgAAWgIQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape_3.setTransform(6.2,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_4.setTransform(-1.4,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_5.setTransform(-6.1,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXArQgLgHgGgKQgGgLAAgPQAAgOAGgLQAGgLAKgGQAMgFANAAQANgBALAGQAKAGAGAKQAGALAAAOIgBAIIhEAAQABALAGAFQAHAGAIAAQANAAAGgLIAaAAQgFANgLAJQgMAJgQgBQgNAAgLgFgAAWgIQAAgJgGgGQgHgFgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_6.setTransform(-13.65,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWArQgKgHgHgKQgFgLAAgPQAAgOAFgLQAHgKAKgHQALgFAMAAQASgBALAJQAMAJAEAPIgaAAQgCgFgFgEQgFgEgHABQgJAAgGAHQgGAIAAAMQAAANAGAIQAGAHAJAAQAPAAAEgNIAaAAQgEAQgMAIQgLAJgSAAQgMAAgLgFg");
	this.shape_7.setTransform(-24,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAvIgTgdIgRAdIgZAAIAegvIgeguIAaAAIATAdIARgdIAZAAIgfAuIAgAvg");
	this.shape_8.setTransform(-33.65,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghA8IAAh3IBDAAIAAAUIgsAAIAAAeIAoAAIAAASIgoAAIAAAfIAsAAIAAAUg");
	this.shape_9.setTransform(-42.65,7.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVA/IAAg0QAAgLgGgGQgFgFgKAAQgIAAgGAFQgGAGAAALIAAA0IgYAAIAAh9IAYAAIAAArQAEgFAIgEQAIgDAIAAQALgBAIAFQAJAFAFAJQAEAJAAALIAAA4g");
	this.shape_10.setTransform(35,-12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANA7QgdAAAAgdIAAgtIgLAAIAAgTIALAAIAAgYIAXAAIAAAYIAVAAIAAATIgVAAIAAAtQAAAEADADQACACAFAAIALAAIAAAUg");
	this.shape_11.setTransform(26.025,-12.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBDIAAhdIAXAAIAABdgAgJgqQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(20.475,-13.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA7IgWhTIgXBTIgcAAIgfh1IAZAAIAVBbIAZhbIAZAAIAXBaIAUhaIAaAAIghB1g");
	this.shape_13.setTransform(9.4,-12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA6QgKgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgFQAJgGAMAAQAJAAAIAEQAIAEAFAGIAAgtIAYAAIAAB9IgYAAIAAgOQgEAHgJAFQgIAEgJAAQgMAAgJgGgAgLgIQgGADgDAFQgDAGAAAJQAAAIADAHQADAGAGAEQAGADAFAAQAHAAAFgDQAGgEAEgGQADgGAAgJQAAgJgDgGQgEgFgGgDQgFgEgHAAQgFAAgGAEg");
	this.shape_14.setTransform(-9.35,-12.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaArQgLgHgFgLQgGgLAAgOQAAgOAGgLQAFgLALgGQAJgFAMAAQAJAAAIADQAIAFAGAGIAAgNIAXAAIAABdIgXAAIAAgOQgGAHgIAEQgIAFgJgBQgMAAgJgFgAgLgYQgFADgEAHQgDAGgBAIQABAIADAHQAEAGAFAEQAGACAFAAQAHAAAFgCQAHgEADgGQAEgGAAgJQAAgIgEgGQgDgGgHgEQgFgDgHAAQgGAAgFADg");
	this.shape_15.setTransform(-20.85,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXArQgLgGgGgLQgGgLAAgPQAAgOAGgLQAGgLALgGQALgFANAAQANgBAKAGQALAGAGAKQAGALAAAOIgBAIIhEAAQABALAHAFQAFAGAJAAQANAAAGgLIAZAAQgEANgLAJQgMAJgQgBQgNAAgLgFgAAWgIQAAgJgHgGQgGgFgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_16.setTransform(-31.5,-11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeA7IAAh1IAXAAIAABiIAnAAIAAATg");
	this.shape_17.setTransform(-40.25,-12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-70,-26.4,136,47.599999999999994), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgDAEAAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape.setTransform(121.375,35.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAfQgHgCgEgGQgEgFAAgFIASAAQAAADADADQAEACADAAQAFABADgCQADgDgBgDQAAgDgCgBIgKgEIgNgEQgFgCgDgDQgDgEAAgGQAAgGADgEQADgFAGgDQAGgDAIABQAMAAAGAFQAIAGABAKIgRAAQAAgEgDgCQgDgCgFAAQgEAAgDABQgCACAAADQAAADADADIAKADIAMADQAFACAEAEQADAEAAAGQAAAGgDAFQgEAEgFADQgGACgJAAQgGAAgHgDg");
	this.shape_1.setTransform(116.5,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAiIAAhCIARAAIAAALQACgGAGgDQAFgDAHAAIAAASIgFAAQgIAAgEAEQgDADAAAIIAAAig");
	this.shape_2.setTransform(111.175,33.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAfQgIgFgEgIQgEgHAAgLQAAgKAEgHQAEgIAIgFQAHgDAJAAQAKAAAIADQAHAFAEAHQAEAIAAAJIAAAGIgwAAQABAHAEAEQAEAFAGAAQAJAAAEgIIATAAQgDAJgIAHQgJAFgMAAQgIAAgIgDgAAQgFQAAgHgFgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_3.setTransform(104.725,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTApQgHgEgEgIQgEgIAAgKQAAgLAEgHQAEgHAHgFQAHgEAIAAQAGAAAGADQAGADAEAFIAAggIARAAIAABYIgRAAIAAgKQgDAFgGADQgGADgHAAQgIAAgHgEgAgIgGQgEADgDADQgBAEAAAHQAAAGABAEQADAFAFACQADACAEAAQAFAAAEgCQAEgCADgFQACgEAAgGQAAgGgCgFQgDgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_4.setTransform(96.7,32.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAfQgHgFgEgIQgEgIAAgKQAAgKAEgHQAEgIAHgFQAHgDAIAAQAHAAAGACQAFADAEAFIAAgJIARAAIAABBIgRAAIAAgKQgEAGgFACQgGADgHAAQgIAAgHgDgAgIgQQgEACgDAEQgBAFAAAFQAAAGABAFQADAEAFADQADACAEAAQAFAAAEgCQAEgDADgEQACgFAAgGQAAgFgCgFQgDgEgEgCQgEgCgFgBQgDABgFACg");
	this.shape_5.setTransform(88.5,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAfQgIgFgEgIQgEgHAAgLQAAgKAEgHQAEgIAIgFQAHgDAJAAQAKAAAIADQAHAFAEAHQAEAIAAAJIAAAGIgwAAQABAHAEAEQAEAFAGAAQAJAAAEgIIATAAQgDAJgIAHQgJAFgMAAQgIAAgIgDgAAQgFQAAgHgFgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_6.setTransform(80.925,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAqIAAhTIARAAIAABGIAaAAIAAANg");
	this.shape_7.setTransform(74.775,32.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAsQgJgHgBgMIARAAQABAFAFADQAEADAFAAQAHAAAFgEQAFgFAAgJIAAgLQgEAGgFACQgGADgHAAQgIAAgHgDQgHgFgEgIQgEgHAAgKQAAgLAEgHQAEgIAHgFQAHgDAIAAQAHAAAGACQAGADADAFIAAgJIARAAIAABCQAAAKgEAGQgEAIgHAEQgHAEgLAAQgOAAgJgGgAgIggQgEACgCAEQgCAFAAAGQAAAGACAFQACAEAFACQAEACADAAQAFAAAEgCQAEgCACgEQADgFAAgGQAAgGgDgFQgCgEgEgCQgEgCgFgBQgDABgFACg");
	this.shape_8.setTransform(64.55,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgFQgEgDgHAAQgGAAgEADQgEAFAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAGgCQAFgDAFAAQAMAAAIAHQAHAIAAANIAAAng");
	this.shape_9.setTransform(56.675,33.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIAvIAAhBIAQAAIAABBgAgHgdQgDgDABgEQgBgEADgEQAEgCADAAQAFAAADACQACAEAAAEQAAAEgCADQgDADgFgBQgDABgEgDg");
	this.shape_10.setTransform(51,32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJAqQgUAAAAgVIAAgfIgIAAIAAgOIAIAAIAAgRIAQAAIAAARIAPAAIAAAOIgPAAIAAAfQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACABADAAIAIAAIAAAPg");
	this.shape_11.setTransform(46.95,32.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAfQgHgFgEgIQgEgIAAgKQAAgKAEgHQAEgIAHgFQAHgDAIAAQAHAAAGACQAFADAEAFIAAgJIARAAIAABBIgRAAIAAgKQgEAGgFACQgGADgHAAQgIAAgHgDgAgIgQQgEACgDAEQgBAFAAAFQAAAGABAFQADAEAFADQADACAEAAQAFAAAEgCQAEgDADgEQACgFAAgGQAAgFgCgFQgDgEgEgCQgEgCgFgBQgDABgFACg");
	this.shape_12.setTransform(40.35,33.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAhIgZhBIATAAIAQAyIAQgyIASAAIgYBBg");
	this.shape_13.setTransform(32.85,33.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIAvIAAhBIAQAAIAABBgAgHgdQgCgDAAgEQAAgEACgEQAEgCADAAQAFAAADACQACAEAAAEQAAAEgCADQgDADgFgBQgDABgEgDg");
	this.shape_14.setTransform(27.6,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAqQgVAAAAgVIAAgfIgIAAIAAgOIAIAAIAAgRIAQAAIAAARIAPAAIAAAOIgPAAIAAAfQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABQACABAEAAIAIAAIAAAPg");
	this.shape_15.setTransform(23.5,32.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAtIAAhZIAQAAIAABZg");
	this.shape_16.setTransform(19.55,32.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAfQgGgEgDgHQgEgGAAgIIAAgnIARAAIAAAkQAAAIAEAEQAEAFAGgBQAHABAEgFQAEgEAAgIIAAgkIARAAIAABCIgRAAIAAgIQgDAEgFADQgGACgFAAQgHAAgHgDg");
	this.shape_17.setTransform(13.8,33.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAmQgKgGgGgKQgFgKAAgMQAAgMAFgJQAGgKAKgGQAKgFAKAAQAOAAALAHQALAIAEANIgTAAQgDgGgFgEQgGgDgHAAQgGAAgFAEQgGADgDAHQgEAFAAAIQAAAIAEAHQADAGAGADQAFAEAGAAQAHAAAGgDQAFgDADgGIATAAQgEANgLAHQgKAHgPAAQgKAAgKgFg");
	this.shape_18.setTransform(5.2,32.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgDAEAAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_19.setTransform(108.025,20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMAgQgHgEgDgFQgEgFgBgFIARAAQABADADADQAEADAEAAQAEAAADgCQACgCABgEQAAgDgDgBIgLgEIgLgEQgFgCgEgDQgDgEAAgGQAAgGADgEQADgFAGgDQAGgCAIAAQAMAAAHAFQAGAHACAJIgRAAQAAgDgEgDQgCgCgFAAQgEAAgCABQgDACAAADQAAAEAEABIAJAEIAMADQAFACADAEQAEAEAAAGQAAAGgEAFQgCAEgHADQgGACgHAAQgIAAgGgCg");
	this.shape_20.setTransform(103.15,17.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAtIAAhZIAQAAIAABZg");
	this.shape_21.setTransform(98.25,16.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHAtIAAhZIAQAAIAABZg");
	this.shape_22.setTransform(94.9,16.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAvIAAhBIAQAAIAABBgAgGgdQgDgDAAgEQAAgFADgDQADgCADAAQAFAAADACQADADAAAFQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_23.setTransform(91.55,16.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAJAtIgWgdIAAAdIgRAAIAAhZIARAAIAAAyIAWgbIAWAAIgeAgIAeAig");
	this.shape_24.setTransform(86.725,16.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAoQgHgDgEgGQgEgFgBgIIATAAQAAAFADADQAEADAEAAQAGAAAEgDQADgCAAgFQAAgEgCgCQgCgDgEgBIgIgDIgOgFQgFgBgEgFQgDgFAAgIQAAgHADgGQAEgGAHgCQAHgDAIAAQANAAAIAGQAIAGABAMIgTAAQAAgFgEgDQgDgCgFAAQgFAAgDACQgDADAAAFQAAADADACIAFAEIAIADIAOAFQAFABAEAFQAEAFAAAIQAAAHgEAFQgDAGgHAEQgHADgJAAQgIAAgHgDg");
	this.shape_25.setTransform(79.175,16.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVAsQgJgHgBgMIAQAAQACAFAFADQAEADAFAAQAIAAAEgEQAFgFAAgJIAAgLQgEAFgFAEQgGACgHAAQgIAAgHgDQgHgFgEgIQgEgHAAgKQAAgLAEgIQAEgHAHgFQAHgDAIAAQAHAAAGADQAGACADAFIAAgJIARAAIAABCQAAAJgEAHQgDAIgIAEQgIAEgLABQgMgBgKgGgAgIggQgEACgDAEQgBAFgBAGQABAGABAFQADAEAFABQADADAEAAQAFAAAEgDQAEgBADgEQACgFAAgGQAAgGgCgFQgDgEgEgCQgEgDgFAAQgDAAgFADg");
	this.shape_26.setTransform(68.35,19.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgFQgEgDgHAAQgGAAgEADQgEAFAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAGgDQAFgCAFAAQAMAAAIAIQAHAHAAANIAAAng");
	this.shape_27.setTransform(60.475,17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIAvIAAhBIAQAAIAABBgAgGgdQgEgDAAgEQAAgFAEgDQADgCADAAQAEAAADACQADADABAFQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_28.setTransform(54.8,16.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAiIAAhCIARAAIAAAKQACgFAGgDQAFgDAHAAIAAASIgFAAQgIAAgEAEQgDADAAAJIAAAhg");
	this.shape_29.setTransform(50.975,17.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAeQgGgDgDgHQgEgGAAgIIAAgnIARAAIAAAkQAAAIAEAEQAEAFAGgBQAHABAEgFQAEgEAAgIIAAgkIARAAIAABCIgRAAIAAgIQgDAEgFADQgFACgGAAQgHAAgHgEg");
	this.shape_30.setTransform(44.25,17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKAqQgVAAAAgVIAAgfIgIAAIAAgOIAIAAIAAgRIAQAAIAAARIAPAAIAAAOIgPAAIAAAfQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABQACABAEAAIAIAAIAAAPg");
	this.shape_31.setTransform(37.9,16.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAiIAAhCIARAAIAAAKQACgFAGgDQAFgDAHAAIAAASIgFAAQgIAAgEAEQgDADAAAJIAAAhg");
	this.shape_32.setTransform(33.475,17.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSAeQgGgDgDgHQgEgGAAgIIAAgnIARAAIAAAkQAAAIAEAEQAEAFAGgBQAHABAEgFQAEgEAAgIIAAgkIARAAIAABCIgRAAIAAgIQgDAEgGADQgFACgFAAQgHAAgHgEg");
	this.shape_33.setTransform(26.75,17.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATAqIglg5IAAA5IgRAAIAAhTIARAAIAlA5IAAg5IARAAIAABTg");
	this.shape_34.setTransform(18.4,16.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgDAEAAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_35.setTransform(122.925,4.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAfQgIgFgEgIQgEgIAAgKQAAgJAEgJQAEgHAIgFQAHgDAJAAQAKAAAIADQAHAEAEAIQAEAHAAAKIAAAGIgwAAQABAIAEADQAEAFAGAAQAJgBAEgHIATAAQgDAJgIAHQgJAFgMAAQgIAAgIgDgAAQgFQAAgHgFgEQgEgDgHgBQgFABgFADQgEAEgBAHIAfAAIAAAAg");
	this.shape_36.setTransform(117.675,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAsQgJgHgBgMIAQAAQACAFAFADQAEADAFAAQAHAAAFgEQAFgFAAgJIAAgKQgEAEgFAEQgGACgHAAQgIAAgHgDQgHgFgEgIQgEgHAAgKQAAgKAEgJQAEgHAHgFQAHgDAIAAQAHAAAGADQAGADADAEIAAgJIARAAIAABCQAAAJgEAIQgDAHgIAEQgHAEgLABQgNgBgKgGgAgIghQgEADgDAEQgBAFAAAGQAAAGABAFQADAEAFABQADACAEABQAFgBAEgCQAEgBADgEQACgFAAgGQAAgGgCgFQgDgEgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_37.setTransform(109.65,3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTApQgHgEgEgIQgEgIAAgKQAAgLAEgHQAEgHAHgFQAHgEAIAAQAGAAAGADQAGADAEAFIAAggIARAAIAABYIgRAAIAAgKQgEAFgFADQgGADgHAAQgIAAgHgEgAgIgGQgEADgCADQgCAEAAAHQAAAGACAEQACAFAFACQAEACADAAQAFAAAEgCQAEgCACgFQADgEAAgGQAAgGgDgFQgCgDgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_38.setTransform(101.45,0.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAfQgIgFgEgIQgEgIAAgKQAAgJAEgJQAEgHAIgFQAHgDAJAAQAKAAAIADQAHAEAEAIQAEAHAAAKIAAAGIgwAAQABAIAEADQAEAFAGAAQAJgBAEgHIATAAQgDAJgIAHQgJAFgMAAQgIAAgIgDgAAQgFQAAgHgFgEQgEgDgHgBQgFABgFADQgEAEgBAHIAfAAIAAAAg");
	this.shape_39.setTransform(93.825,1.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIAtIAAhZIAQAAIAABZg");
	this.shape_40.setTransform(88.45,0.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAMAhIgMgtIgLAtIgTAAIgThBIARAAIAMAxIAMgxIARAAIANAxIAMgxIAQAAIgUBBg");
	this.shape_41.setTransform(81.725,1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgRAfQgHgFgFgIQgEgIAAgKQAAgKAEgHQAEgIAJgFQAHgDAJAAQAKAAAIADQAHAFAFAIQAFAHAAAKQAAAKgFAIQgFAIgHAFQgIADgKAAQgJAAgIgDgAgMgNQgEAEAAAJQAAAKAEAFQAGAFAGAAQAEAAAFgDQADgCACgEQADgFAAgGQAAgJgFgEQgFgGgHAAQgGAAgGAGg");
	this.shape_42.setTransform(72.75,1.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgFQgEgDgHAAQgGAAgEADQgEAFAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAGgDQAFgCAFAAQAMAAAIAIQAHAHAAANIAAAng");
	this.shape_43.setTransform(64.925,1.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AANAqIgdglIAAAlIgRAAIAAhTIARAAIAAAmIAdgmIAUAAIgiApIAjAqg");
	this.shape_44.setTransform(57.25,0.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAsQgJgHgBgMIARAAQABAFAEADQAFADAFAAQAIAAAEgEQAFgFAAgJIAAgKQgDAEgHAEQgFACgGAAQgJAAgHgDQgHgFgEgIQgEgHAAgKQAAgKAEgJQAEgHAHgFQAHgDAJAAQAGAAAGADQAGADADAEIAAgJIARAAIAABCQAAAJgEAIQgDAHgIAEQgIAEgKABQgNgBgKgGgAgIghQgEADgCAEQgCAFgBAGQABAGACAFQACAEAEABQAFACADABQAFgBAEgCQAEgBACgEQADgFAAgGQAAgGgDgFQgCgEgEgDQgEgCgFAAQgDAAgFACg");
	this.shape_45.setTransform(45.8,3.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgFQgEgDgHAAQgGAAgEADQgEAFAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAGgDQAFgCAFAAQAMAAAIAIQAHAHAAANIAAAng");
	this.shape_46.setTransform(37.925,1.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHAvIAAhBIAQAAIAABBgAgHgeQgCgCAAgEQAAgFACgCQADgDAEAAQAEAAAEADQACACAAAFQAAAEgCACQgEAEgEAAQgEAAgDgEg");
	this.shape_47.setTransform(32.25,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAKAqQgVAAAAgVIAAgfIgIAAIAAgOIAIAAIAAgRIAQAAIAAARIAPAAIAAAOIgPAAIAAAfQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQABABAEAAIAIAAIAAAPg");
	this.shape_48.setTransform(28.2,0.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgFQgEgDgHAAQgGAAgEADQgEAFAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAGgDQAFgCAFAAQAMAAAIAIQAHAHAAANIAAAng");
	this.shape_49.setTransform(21.925,1.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTAfQgHgFgEgIQgEgIAAgKQAAgJAEgJQAEgHAHgFQAHgDAIAAQAHAAAGADQAGADADAEIAAgJIARAAIAABBIgRAAIAAgJQgDAEgGAEQgGACgHAAQgIAAgHgDgAgIgRQgEADgCAEQgCAFAAAFQAAAGACAFQACAEAFACQAEACADABQAEgBAFgCQAEgCACgEQADgFAAgGQAAgFgDgFQgCgEgEgDQgFgCgEAAQgEAAgEACg");
	this.shape_50.setTransform(13.6,1.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHAtIAAhZIAQAAIAABZg");
	this.shape_51.setTransform(8.05,0.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeAqIAAhTIAeAAQAKAAAHADQAHAEADAGQAEAFAAAIQAAAHgEAGQgDAFgHADQgGAEgLAAIgNAAIAAAggAgNgDIANAAQAGAAAEgDQADgDAAgGQAAgMgNAAIgNAAg");
	this.shape_52.setTransform(2.975,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-14.5,-9.8,152.7,53), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAiQgGgDgEgFQgEgGgBgHIASAAQABAEAEADQADADAFAAQAFAAADgCQACgDAAgCQAAgEgDgCIgLgDIgMgFQgGgCgDgDQgEgEAAgIQAAgFADgFQAEgFAGgDQAHgDAHAAQANAAAIAGQAHAHABAKIgRAAQgBgEgDgCQgDgDgFAAQgEAAgDACQgCACAAADQAAAEADACIAKADIANAFQAGABADAEQAEAEAAAIQAAAFgDAGQgEAEgGAEQgHACgIAAQgIAAgIgDg");
	this.shape.setTransform(128.45,44.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAgQgJgEgEgJQgFgIAAgLQAAgKAFgIQAEgJAIgFQAJgEAJAAQAKAAAJAEQAIAFAEAIQAFAIAAALIgBAFIg0AAQABAIAFAFQAFAEAGAAQAKAAAEgJIAUAAQgDALgJAGQgJAHgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgFgHAAQgGAAgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_1.setTransform(120.975,44.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAgQgJgEgEgJQgFgIAAgLQAAgKAFgIQAEgJAIgFQAJgEAJAAQAKAAAJAEQAIAFAEAIQAFAIAAALIgBAFIg0AAQABAIAFAFQAFAEAGAAQAKAAAEgJIAUAAQgDALgJAGQgJAHgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgFgHAAQgGAAgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_2.setTransform(112.975,44.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYA1IAPgkIgdhFIAVAAIARAyIATgyIAUAAIgsBpg");
	this.shape_3.setTransform(105.025,46.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAgQgHgEgFgJQgFgIAAgLQAAgKAFgIQAFgJAIgFQAIgEAKAAQALAAAIAEQAIAFAFAJQAFAIAAAKQAAALgFAIQgFAJgJAEQgIAFgKAAQgKAAgJgFgAgMgPQgGAGAAAJQAAALAGAFQAFAGAHgBQAEABAFgDQAEgDADgFQACgEAAgHQABgJgGgGQgFgGgIAAQgHAAgFAGg");
	this.shape_4.setTransform(97,44.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAwIAAhfIARAAIAABfg");
	this.shape_5.setTransform(91.05,43.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkA2IAAhqIASAAIAAALQADgFAHgEQAFgDAIAAQAIAAAIAFQAHAEAFAJQAFAIgBALQABALgFAIQgFAIgHAFQgIAEgIAAQgIAAgFgDQgGgDgEgFIAAAtgAgIgiQgFACgDAFQgCAFAAAGQAAAHACAFQADAEAFACQAEACAEAAQAEAAAFgCQAEgCADgFQADgEAAgHQAAgHgDgEQgDgFgEgCQgFgDgEAAQgEAAgEADg");
	this.shape_6.setTransform(85.1,46.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AApAkIAAgmQAAgJgEgEQgEgEgIAAQgHAAgEAEQgFAEAAAJIAAAmIgRAAIAAgmQAAgJgEgEQgEgEgIAAQgHAAgFAEQgFAEABAJIAAAmIgSAAIAAhHIASAAIAAAJQADgFAGgCQAFgCAHgBQAIABAHADQAGAEADAGQAEgGAGgEQAHgDAIgBQANABAIAHQAJAJAAAOIAAApg");
	this.shape_7.setTransform(73.7,44.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAtIAAhaIAzAAIAAAQIghAAIAAAWIAdAAIAAANIgdAAIAAAZIAhAAIAAAOg");
	this.shape_8.setTransform(63.475,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAvQgKgHAAgMIASAAQABAFAFACQAFADAFAAQAIAAAFgEQAFgFAAgKIAAgLQgEAFgFAEQgHADgHAAQgJAAgIgFQgHgEgFgJQgDgHAAgLQAAgLADgJQAFgIAHgFQAIgEAJAAQAHAAAHADQAFADAEAFIAAgKIATAAIAABHQAAAKgFAIQgEAIgIAFQgIAEgLAAQgOAAgLgHgAgIgjQgFADgCAEQgDAFAAAHQAAAGADAFQACAFAFABQAEADAEAAQAFAAAFgDQAEgBADgFQACgFAAgGQAAgHgCgFQgDgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_9.setTransform(163.55,29.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAkIAAgmQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAmIgSAAIAAhHIASAAIAAAJQAEgEAFgDQAGgCAGgBQANAAAHAIQAIAJAAAOIAAApg");
	this.shape_10.setTransform(155.125,27.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_11.setTransform(149.025,26.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAiQgHgDgDgFQgFgGAAgHIASAAQABAFAEACQADADAFAAQAEAAAEgCQADgDAAgDQgBgDgDgCIgLgEIgMgDQgGgDgDgDQgEgFgBgGQAAgGAEgFQAEgGAGgCQAGgDAIAAQANAAAIAGQAHAGABALIgRAAQgBgEgDgCQgDgDgFAAQgEAAgDACQgDACAAADQAAAEAEACIAKAEIANADQAFACAEAEQADAFABAGQAAAGgDAGQgEAEgHAEQgGACgIAAQgIAAgIgDg");
	this.shape_12.setTransform(143.65,27.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_13.setTransform(138.375,26.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AApAkIAAgmQABgJgFgEQgFgEgGAAQgIAAgFAEQgEAEAAAJIAAAmIgRAAIAAgmQAAgJgFgEQgDgEgIAAQgIAAgEAEQgEAEgBAJIAAAmIgSAAIAAhHIASAAIAAAJQAEgFAFgCQAGgCAHgBQAJABAGADQAGAEADAGQAEgGAGgEQAHgDAIgBQANAAAIAIQAIAJAAAOIAAApg");
	this.shape_14.setTransform(129.8,27.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAgQgIgEgGgIQgEgJAAgLQAAgKAFgIQAEgJAJgFQAJgEAJAAQAKAAAJAEQAIAFAFAJQAFAIAAAKQAAALgFAJQgFAIgJAEQgIAFgKAAQgKAAgIgFgAgMgPQgGAFABAKQgBALAGAFQAEAFAIAAQAEABAFgDQAEgDADgEQACgFAAgHQAAgKgFgFQgFgGgIAAQgHAAgFAGg");
	this.shape_15.setTransform(118.85,27.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAkIAAhHIASAAIAAALQACgFAGgEQAGgDAHAAIAAATIgFAAQgIAAgFAFQgDADAAAJIAAAkg");
	this.shape_16.setTransform(112.375,27.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAtIAAhaIAhAAQAKAAAIAFQAGADAFAHQADAGAAAIQAAAHgDAHQgEAFgHAEQgIAEgKgBIgPAAIAAAjgAgOgDIAOAAQAHAAAEgEQADgDAAgGQABgNgPAAIgOAAg");
	this.shape_17.setTransform(105.75,26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAvQgKgHAAgMIARAAQACAFAFACQAFADAFAAQAIAAAFgEQAFgFAAgKIAAgLQgEAFgFAEQgHADgHAAQgJAAgIgFQgHgEgFgJQgDgHAAgLQAAgLADgJQAFgIAHgFQAIgEAJAAQAHAAAHADQAFADAEAFIAAgKIATAAIAABHQgBAKgDAIQgFAIgIAFQgIAEgLAAQgOAAgLgHgAgIgjQgFADgDAEQgCAFAAAHQAAAGACAFQADAFAFABQAEADAEAAQAFAAAFgDQAEgBADgFQACgFAAgGQAAgHgCgFQgDgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(93.9,29.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAkIAAgmQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAmIgSAAIAAhHIASAAIAAAJQAEgEAFgDQAGgCAGgBQANAAAHAIQAIAJAAAOIAAApg");
	this.shape_19.setTransform(85.475,27.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgDAAgEQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_20.setTransform(79.375,26.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkA2IAAhqIASAAIAAALQADgFAHgEQAFgDAIAAQAIAAAIAFQAHAEAFAJQAFAIgBALQABALgFAIQgFAIgHAFQgIAEgIAAQgIAAgFgDQgGgDgEgFIAAAtgAgIgiQgFACgDAFQgCAFAAAGQAAAHACAFQADAEAFACQAEACAEAAQAEAAAFgCQAEgCADgFQADgEAAgHQAAgHgDgEQgDgFgEgCQgFgDgEAAQgEAAgEADg");
	this.shape_21.setTransform(73.4,29.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAgQgIgEgGgIQgEgJAAgLQAAgKAFgIQAFgJAIgFQAJgEAJAAQALAAAIAEQAIAFAFAJQAFAIAAAKQAAALgFAJQgFAIgIAEQgJAFgKAAQgKAAgIgFgAgNgPQgEAFAAAKQAAALAEAFQAGAFAHAAQAEABAFgDQAEgDADgEQADgFAAgHQgBgKgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_22.setTransform(64.65,27.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAwIAAhfIARAAIAABfg");
	this.shape_23.setTransform(58.7,26.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgIQAEgJAIgFQAJgEAJAAQAKAAAJAEQAIAEAEAJQAFAIAAALIgBAFIg0AAQABAIAFAFQAFAEAGAAQAKAAAEgJIAUAAQgDALgJAGQgJAHgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHgBQgGABgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_24.setTransform(52.925,27.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAkIgahHIATAAIARA2IASg2IATAAIgaBHg");
	this.shape_25.setTransform(45.05,27.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgIQAEgJAIgFQAJgEAJAAQAKAAAJAEQAIAEAEAJQAFAIAAALIgBAFIg0AAQABAIAFAFQAFAEAGAAQAKAAAEgJIAUAAQgDALgJAGQgJAHgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHgBQgGABgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_26.setTransform(37.175,27.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnAtIAAhaIAgAAQANAAALAHQALAFAGAKQAGALAAAMQAAAOgGAKQgGALgLAFQgLAGgNgBgAgVAeIANAAQAOAAAHgIQAIgHAAgPQAAgNgIgIQgHgIgOAAIgNAAg");
	this.shape_27.setTransform(28.725,26.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAsQgIgEgEgGQgEgHAAgIQAAgJAFgHQAFgGAKgFIgFgIQgCgEAAgEQAAgHADgFQAEgEAGgEQAGgCAIAAQAHAAAGADQAGADADAFQACAFAAAHIgRAAQAAgEgCgCQgCgDgEAAQgDAAgDACQgCACAAADQAAAEACADIAGAIIAWAVIAAAAIABgBIAHgLIATAAIgJAPIgGAKIAWAVIgWAAIgKgJQgMALgSAAQgKAAgHgDgAgdASQAAAGAEAEQAFAEAHAAQALAAAHgHIgWgXQgMAGAAAKg");
	this.shape_28.setTransform(129.325,9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXAvQgKgHAAgMIARAAQACAFAFACQAFADAFAAQAIAAAFgEQAFgFAAgKIAAgLQgEAFgFAEQgHADgHAAQgJAAgIgFQgHgEgFgJQgDgHAAgLQAAgLADgJQAFgIAHgFQAIgEAJAAQAHAAAHADQAFADAEAFIAAgKIATAAIAABHQgBAKgDAIQgFAIgIAFQgIAEgLAAQgOAAgLgHgAgIgjQgFADgDAEQgCAFAAAHQAAAGACAFQADAFAFABQAEADAEAAQAFAAAFgDQAEgBADgFQACgFAAgGQAAgHgCgFQgDgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_29.setTransform(116.4,12.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAkIAAgmQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAmIgSAAIAAhHIASAAIAAAJQAEgEAFgDQAGgCAGgBQANAAAHAJQAIAHAAAPIAAApg");
	this.shape_30.setTransform(107.975,10.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDAEgFAAQgEAAgDgEg");
	this.shape_31.setTransform(101.875,8.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAQAkIAAgmQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAmIgSAAIAAhHIASAAIAAAJQAEgEAFgDQAGgCAGgBQANAAAHAJQAIAHAAAPIAAApg");
	this.shape_32.setTransform(95.825,10.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDAEgFAAQgEAAgDgEg");
	this.shape_33.setTransform(89.725,8.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAgQgIgEgFgIQgDgJAAgLQAAgKADgJQAFgIAIgEQAHgFAJAAQAIAAAFADQAGAEAEAEIAAgKIASAAIAABHIgSAAIAAgLQgEAGgGADQgGADgHAAQgJAAgHgFgAgJgRQgEACgDAEQgCAFAAAGQAAAGACAFQADAFAEADQAFACAEAAQAFAAAEgCQAFgDADgEQACgFAAgHQAAgFgCgGQgDgEgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_34.setTransform(83.3,10.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAtQgWAAAAgXIAAghIgJAAIAAgPIAJAAIAAgSIARAAIAAASIARAAIAAAPIgRAAIAAAiQAAADACACQACABAEABIAJAAIAAAPg");
	this.shape_35.setTransform(76.575,9.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAGIg0AAQABAIAFAFQAFAEAGAAQAKAAAEgJIAUAAQgDALgJAHQgJAGgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHgBQgGABgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_36.setTransform(70.125,10.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AANAtIgTgjIgJAAIAAAjIgSAAIAAhZIAhAAQAKAAAIADQAIAEADAHQAEAGAAAHQAAAKgFAHQgGAGgKADIAWAkgAgPgCIAPAAQAHAAAEgEQADgDAAgHQAAgGgDgEQgEgDgHAAIgPAAg");
	this.shape_37.setTransform(62.1,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(11.8,-1.6,168.5,56.6), null);


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
	this.shape.setTransform(29.125,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgFgIQgEgIAAgLIAAgyIAUAAIAAAyQAAAIAEAEQAEAEAGAAQAHAAAEgEQAEgEAAgIIAAgyIAUAAIAAAyQAAALgEAIQgFAIgIAEQgIAEgKAAQgJAAgIgEg");
	this.shape_1.setTransform(21.225,-1.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAqIAAhDIgXAAIAAgQIBAAAIAAAQIgWAAIAABDg");
	this.shape_2.setTransform(11,-1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_3.setTransform(2.875,-1.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAqIgFgPIgfAAIgFAPIgVAAIAehTIAXAAIAeBTgAAKAMIgKgeIgJAeIATAAg");
	this.shape_4.setTransform(-6.025,-1.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAqIAAhDIgVAAIAAgQIA/AAIAAAQIgWAAIAABDg");
	this.shape_5.setTransform(-13.95,-1.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAqIghgzIAAAzIgVAAIAAhTIAVAAIAhAzIAAgzIAVAAIAABTg");
	this.shape_6.setTransform(-21.975,-1.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgFgKQgGgKAAgMQAAgLAGgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAFAKQAGAKAAALQAAAMgGAKQgFAKgKAGQgKAFgMAAQgLAAgKgFgAgPgRQgGAHAAAKQAAALAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-31.175,-1.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_8.setTransform(-40.475,-1.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DBA76").s().p("Al8BqQgpAAgegeQgdgdAAgpIAAgMQAAgpAdgdQAdgdAqAAIL6AAQApAAAdAdQAdAdAAApIAAAMQAAApgdAdQgdAegpAAg");
	this.shape_9.setTransform(-6.125,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-54.2,-12.1,96.2,21.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ad_bg, new cjs.Rectangle(0,-1,300,600), null);


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

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(313));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(237.4,251.2,0.98,0.98,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({y:231.55,alpha:1},9,cjs.Ease.get(1)).wait(277));

	// F3
	this.instance_1 = new lib.F3();
	this.instance_1.setTransform(231.8,182.75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({_off:false},0).to({y:187.75,alpha:1},10,cjs.Ease.get(1)).wait(85));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(176.65,161.2,0.891,0.891,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({y:172.2},9,cjs.Ease.get(1)).to({_off:true},90).wait(95));

	// F1
	this.instance_3 = new lib.F1();
	this.instance_3.setTransform(153.9,156.7,0.81,0.81,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:166.7,alpha:1},9).to({_off:true},93).wait(193));

	// Line
	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(162,201.45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(295));

	// Heading
	this.instance_5 = new lib.Heading();
	this.instance_5.setTransform(61.35,197.75,1.1,1.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:76.35,alpha:1},9,cjs.Ease.get(1)).wait(295));

	// Logo.png
	this.instance_6 = new lib.Logo_1();
	this.instance_6.setTransform(30.5,70,0.3835,0.3835,0,0,0,0.1,0.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:78.95,alpha:1},9,cjs.Ease.get(1)).wait(304));

	// Bg
	this.instance_7 = new lib.Bg_1();
	this.instance_7.setTransform(150,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(313));

	// Pic3
	this.instance_8 = new lib.Pic3();
	this.instance_8.setTransform(149.95,88.55);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(218).to({_off:false},0).wait(95));

	// Pic2
	this.instance_9 = new lib.PIc2();
	this.instance_9.setTransform(151.2,78.85);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).wait(194));

	// Pic1.jpg
	this.instance_10 = new lib.img1("synched",0);
	this.instance_10.setTransform(150,77);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},9).wait(304));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(313));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-25,320.4,285);


// stage content:
(lib.KSFY_214797_MM_300x250 = function(mode,startPosition,loop,reversed) {
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
		{src:"Bg.png", id:"Bg"},
		{src:"img1copy.jpg", id:"img1copy"},
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