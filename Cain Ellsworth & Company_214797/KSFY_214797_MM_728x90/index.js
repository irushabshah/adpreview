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


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,90);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,90);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,90);


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


(lib.img1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img1();
	this.instance.setTransform(-115.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-45,231,90);


(lib.img_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img3();
	this.instance.setTransform(-115.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-45,231,90);


(lib.img_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.img2();
	this.instance.setTransform(-115.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-45,231,90);


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
	this.shape.graphics.f("#CCA230").s().p("AgSArQgJgEgGgHQgFgHgBgJIAcAAQAAAFAFADQAEADAEAAQAGAAADgCQACgCAAgEQAAgEgEgCQgEgCgJgCIgQgFQgHgCgEgFQgFgFAAgKQAAgIAEgGQAFgHAIgEQAJgEALAAQARAAAKAJQAKAJACAOIgbAAQAAgFgEgDQgDgDgGAAQgFAAgCACQgDACAAAEQABAEAEACIALAEIARAFQAHACAFAFQAFAGAAAJQAAAJgEAGQgFAGgJAEQgJAEgKAAQgLAAgKgFg");
	this.shape.setTransform(32.05,30.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCA230").s().p("AgbAvIAAhcIAbAAIAAAQQAEgIAIgEQAIgFAIAAIAAAeIgHAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_1.setTransform(24.35,30.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLABgOQgBgNAHgLQAFgLALgGQALgGAMAAQAOAAALAGQAKAGAGAKQAFALAAANIAAAIIg/AAQAAAIAGAFQAEAFAHAAQAKAAAEgJIAfAAQgDAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAASgIQAAgHgGgFQgFgEgHAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_2.setTransform(15.35,30.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCA230").s().p("AgcA4QgJgGgGgLQgFgLAAgOQAAgOAFgKQAGgLAJgFQAKgGALgBQAIAAAIAFQAHAEAEAGIAAgrIAdAAIAAB6IgdAAIAAgOQgDAHgIAEQgHAEgJAAQgLAAgKgGgAgNgBQgGAEAAALQAAALAGAGQAGAGAIAAQAHAAAGgGQAHgGgBgKQABgMgHgEQgGgHgHAAQgIAAgGAHg");
	this.shape_3.setTransform(4.35,28.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA230").s().p("AgcAqQgJgGgGgLQgFgLAAgOQAAgNAFgLQAGgLAJgGQAKgGALAAQAJAAAHAEQAIAEADAHIAAgNIAdAAIAABbIgdAAIAAgNQgDAHgIAEQgHAEgJAAQgLAAgKgGgAgNgQQgGAGAAAKQAAAKAGAHQAGAGAIAAQAHAAAGgGQAHgGgBgLQABgKgHgGQgGgGgHAAQgIAAgGAGg");
	this.shape_4.setTransform(-6.9,30.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAAKAGQAKAGAHAKQAFALAAANIAAAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_5.setTransform(-17.3,30.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCA230").s().p("AggA6IAAhzIAcAAIAABdIAlAAIAAAWg");
	this.shape_6.setTransform(-25.975,29.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCA230").s().p("AgQBBIAAhEIgKAAIAAgYIAKAAIAAgCQAAgRAKgJQAJgJATAAIAEAAIAAAYQgIAAgDADQgDACAAAHIAAABIAPAAIAAAYIgPAAIAABEg");
	this.shape_7.setTransform(58.075,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCA230").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_8.setTransform(49.825,14.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCA230").s().p("AASAvIAAgyQgBgJgEgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAEgHAIgDQAGgEAJAAQAQAAAKALQAKAKAAATIAAA1g");
	this.shape_9.setTransform(35.6,14.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCA230").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(24.675,14.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCA230").s().p("AgNBDIAAhcIAbAAIAABcgAgLgnQgFgFAAgGQAAgHAFgEQAEgEAHgBQAHABAFAEQAFAEAAAHQAAAGgFAFQgFAFgHAAQgHAAgEgFg");
	this.shape_11.setTransform(17,12.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCA230").s().p("AAPA6QgPgBgIgHQgJgHAAgSIAAgkIgLAAIAAgXIALAAIAAgXIAbAAIAAAXIATAAIAAAXIgTAAIAAAkQAAAFACACQACABAFAAIAKAAIAAAZg");
	this.shape_12.setTransform(11.125,13.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCA230").s().p("AgcAqQgJgGgGgLQgFgLAAgOQAAgNAFgLQAGgLAJgGQAKgGALAAQAIAAAIAEQAHAEAEAHIAAgNIAdAAIAABbIgdAAIAAgNQgEAHgHAEQgIAEgIAAQgLAAgKgGgAgNgQQgGAGAAAKQAAAKAGAHQAGAGAHAAQAIAAAHgGQAFgGAAgLQAAgKgFgGQgHgGgIAAQgHAAgGAGg");
	this.shape_13.setTransform(1.95,14.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCA230").s().p("AgbAvIAAhcIAbAAIAAAQQAEgIAIgEQAHgFAKAAIAAAeIgIAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_14.setTransform(-6.55,14.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCA230").s().p("AgXAqQgKgGgHgLQgFgLAAgOQAAgNAFgLQAHgLAKgGQAKgGAOAAQANAAAKAGQALAGAFAKQAHALAAANIgBAIIg/AAQAAAIAFAFQAFAFAHAAQAKAAAEgJIAfAAQgDAJgGAHQgGAHgJAEQgJAFgLAAQgNAAgLgGgAASgIQgBgHgFgFQgEgEgIAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_15.setTransform(-15.55,14.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCA230").s().p("AASAvIAAgyQgBgJgEgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAFgHAHgDQAGgEAJAAQARAAAJALQAKAKAAATIAAA1g");
	this.shape_16.setTransform(-26.15,14.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLABgOQgBgNAHgLQAFgLALgGQALgGAMAAQAOAAALAGQAKAGAGAKQAFALAAANIAAAIIg/AAQAAAIAGAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQABgHgGgFQgFgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_17.setTransform(-36.85,14.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA230").s().p("AgcA0QgOgIgHgNQgIgOAAgRQAAgQAIgOQAHgNAOgIQANgHAQAAQAVAAAPAKQAOAKAFASIggAAQgDgGgGgDQgGgDgIAAQgMAAgJAJQgIAJAAAOQAAAQAJAJQAIAJAPAAQAKAAAHgFQAIgGADgKIgjAAIAAgTIA9AAIAAAZQgEALgHAJQgIAJgLAFQgMAGgOAAQgRAAgNgHg");
	this.shape_18.setTransform(-48.225,12.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCA230").s().p("AAPA6QgPgBgIgHQgJgHAAgSIAAgkIgLAAIAAgXIALAAIAAgXIAbAAIAAAXIATAAIAAAXIgTAAIAAAkQAAAFACABQACACAFAAIAKAAIAAAZg");
	this.shape_19.setTransform(19.275,-3.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCA230").s().p("AAQAuIgQgZIgQAZIgeAAIAeguIgfgtIAfAAIARAZIAQgZIAeAAIgfAtIAgAug");
	this.shape_20.setTransform(11.2,-1.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCA230").s().p("AgXAqQgKgGgHgLQgFgLAAgOQAAgNAFgLQAHgLAKgGQAKgGAOAAQANAAALAGQAJAGAGAKQAHALgBANIAAAIIg/AAQAAAIAFAFQAFAFAHAAQAKAAAEgJIAfAAQgDAJgGAHQgGAHgJAEQgJAFgLAAQgNAAgLgGgAASgIQAAgHgGgFQgEgEgIAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_21.setTransform(1.2,-1.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCA230").s().p("AAXA6IguhHIAABHIgcAAIAAhzIAcAAIAuBHIAAhHIAdAAIAABzg");
	this.shape_22.setTransform(-10.05,-3.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#315746").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAALAGQAJAGAHAKQAFALAAANIAAAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_23.setTransform(49.75,-23.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#315746").s().p("AASA9IAAgyQgBgJgEgEQgFgGgIAAQgIAAgEAGQgFAEAAAJIAAAyIgcAAIAAh5IAcAAIAAAqQAEgGAIgEQAHgDAIAAQAQAAAKAKQAKALAAARIAAA2g");
	this.shape_24.setTransform(39.2,-25.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#315746").s().p("AAPA6QgPAAgIgIQgJgHAAgRIAAgkIgLAAIAAgYIALAAIAAgWIAbAAIAAAWIATAAIAAAYIgTAAIAAAkQAAAEACACQACACAFAAIAKAAIAAAYg");
	this.shape_25.setTransform(30.125,-25.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#315746").s().p("AgeA8QgMgKgDgQIAcAAQACAFAFADQAFADAGAAQAJAAAFgFQAGgFAAgLIAAgNQgFAGgHAEQgIAFgIAAQgMAAgJgGQgJgGgFgLQgGgKAAgOQAAgOAGgLQAFgLAJgGQAJgGAMAAQAIAAAIAEQAHAEAFAHIAAgNIAcAAIAABbQAAANgGAKQgFALgJAGQgLAGgPAAQgUAAgNgKgAgNgmQgGAGAAALQAAAKAGAHQAGAFAHAAQAJAAAFgFQAGgGABgLQgBgLgGgGQgFgGgJAAQgHAAgGAGg");
	this.shape_26.setTransform(17.45,-21.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#315746").s().p("AASAvIAAgyQgBgJgEgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAFgHAHgDQAGgEAJAAQARAAAJALQAKAKAAATIAAA1g");
	this.shape_27.setTransform(6.6,-23.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#315746").s().p("AgNBDIAAhcIAbAAIAABcgAgLgnQgFgFAAgGQAAgGAFgFQAEgFAHABQAHgBAFAFQAFAFAAAGQAAAGgFAFQgFAFgHgBQgHABgEgFg");
	this.shape_28.setTransform(-1.45,-25.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#315746").s().p("AAPAuIgPg7IgOA7IgfAAIgZhbIAcAAIANBBIAQhBIAdAAIAQBBIANhBIAaAAIgZBbg");
	this.shape_29.setTransform(-11.025,-23.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#315746").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_30.setTransform(-23.475,-23.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#315746").s().p("AgbAvIAAhcIAbAAIAAAQQAEgIAIgEQAIgFAIAAIAAAeIgHAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_31.setTransform(-31.9,-23.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#315746").s().p("AgcA0QgOgIgHgNQgIgOAAgRQAAgQAIgOQAHgNAOgIQANgHAQAAQAVAAAPAKQAOAKAFASIggAAQgDgGgGgDQgGgDgIAAQgMAAgJAJQgIAJAAAOQAAAQAJAJQAIAJAPAAQAKAAAHgFQAIgGADgKIgjAAIAAgTIA9AAIAAAZQgEALgHAJQgIAJgLAFQgMAGgOAAQgRAAgNgHg");
	this.shape_32.setTransform(-42.075,-25.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heading, new cjs.Rectangle(-57,-39.1,120.5,82.2), null);


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
	this.shape.graphics.f("#000000").s().p("AgXArQgLgGgGgMQgGgLAAgOQAAgNAGgMQAGgLALgFQALgHANABQANAAAKAFQALAGAGAKQAGALAAAOIgBAIIhEAAQABAKAHAGQAFAGAJAAQANAAAGgMIAZAAQgDAOgMAJQgMAJgQAAQgNgBgLgFgAAWgIQAAgJgHgFQgGgGgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape.setTransform(40.05,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWArQgKgGgHgMQgFgLgBgOQABgNAFgMQAHgKAKgGQAKgHANABQARAAAMAIQALAJAFAQIgaAAQgCgHgFgDQgFgDgHgBQgJABgGAHQgGAIAAAMQAAAOAGAHQAGAHAJAAQAPAAAEgNIAaAAQgFAQgLAJQgMAIgRABQgNgBgKgFg");
	this.shape_1.setTransform(29.7,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAwIAAgzQAAgMgFgGQgGgGgKAAQgJAAgFAGQgGAGAAAMIAAAzIgYAAIAAhdIAYAAIAAALQAFgGAHgDQAHgEAJAAQAQAAAKALQALAKAAATIAAA3g");
	this.shape_2.setTransform(19.05,6.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXArQgLgGgGgMQgGgLAAgOQAAgNAGgMQAGgLALgFQALgHANABQANAAAKAFQALAGAGAKQAGALAAAOIgBAIIhEAAQABAKAHAGQAFAGAJAAQANAAAGgMIAaAAQgFAOgLAJQgMAJgQAAQgNgBgLgFgAAWgIQAAgJgHgFQgGgGgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_3.setTransform(8.2,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_4.setTransform(0.6,4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_5.setTransform(-4.1,4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXArQgLgGgGgMQgGgLAAgOQAAgNAGgMQAGgLAKgFQALgHANABQAOAAALAFQAKAGAGAKQAGALAAAOIgBAIIhEAAQABAKAGAGQAHAGAIAAQANAAAFgMIAaAAQgDAOgMAJQgMAJgRAAQgMgBgLgFgAAWgIQAAgJgGgFQgHgGgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape_6.setTransform(-11.65,6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWArQgLgGgFgMQgHgLAAgOQAAgNAHgMQAFgKALgGQALgHAMABQARAAAMAIQAMAJADAQIgZAAQgCgHgFgDQgFgDgHgBQgJABgGAHQgGAIAAAMQAAAOAGAHQAGAHAJAAQAOAAAFgNIAZAAQgDAQgMAJQgMAIgRABQgMgBgLgFg");
	this.shape_7.setTransform(-22,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAvIgSgdIgSAdIgZAAIAegvIgeguIAaAAIASAdIASgdIAZAAIgfAuIAgAvg");
	this.shape_8.setTransform(-31.65,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiA8IAAh2IBFAAIAAATIgsAAIAAAeIAmAAIAAARIgmAAIAAAgIAsAAIAAAUg");
	this.shape_9.setTransform(-40.65,4.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVA/IAAg0QAAgLgGgFQgFgHgJAAQgJAAgGAHQgGAFAAALIAAA0IgYAAIAAh9IAYAAIAAArQAFgFAHgEQAIgDAIAAQALAAAJAEQAHAFAFAJQAFAJAAALIAAA4g");
	this.shape_10.setTransform(37,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANA7QgdAAAAgdIAAgtIgLAAIAAgTIALAAIAAgYIAXAAIAAAYIAVAAIAAATIgVAAIAAAtQAAAEADADQACACAFAAIALAAIAAAUg");
	this.shape_11.setTransform(28.025,-14.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBDIAAhdIAXAAIAABdgAgJgqQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(22.475,-15.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA7IgWhTIgWBTIgdAAIgfh1IAZAAIAVBbIAZhbIAZAAIAWBaIAWhaIAZAAIghB1g");
	this.shape_13.setTransform(11.4,-14.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA6QgLgGgFgMQgGgLAAgOQAAgOAGgLQAFgLALgFQAJgGAMAAQAJAAAIAEQAIAEAFAGIAAgtIAYAAIAAB9IgYAAIAAgOQgEAHgJAFQgIAEgJAAQgMAAgJgGgAgLgIQgFADgEAFQgDAGgBAJQABAIADAHQAEAGAFAEQAGADAFAAQAHAAAFgDQAHgEADgGQAEgGAAgJQAAgJgEgGQgDgFgHgDQgFgEgHAAQgGAAgFAEg");
	this.shape_14.setTransform(-7.35,-15.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbArQgKgHgFgLQgGgLAAgOQAAgNAGgMQAFgLAKgFQAKgHAMABQAKAAAHADQAJAFAFAGIAAgNIAXAAIAABdIgXAAIAAgOQgFAHgJAEQgHAFgKAAQgMgBgKgFgAgLgXQgGADgDAGQgEAGAAAIQAAAIAEAHQADAGAGADQAGADAFAAQAHAAAFgDQAHgDADgGQADgHABgIQgBgIgDgGQgDgGgHgDQgFgEgHAAQgFAAgGAEg");
	this.shape_15.setTransform(-18.85,-13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXArQgLgGgGgMQgGgLAAgOQAAgNAGgMQAGgLAKgFQAMgHANABQANAAAKAFQALAGAGAKQAGALAAAOIgBAIIhEAAQABAKAGAGQAHAGAIAAQANAAAGgMIAaAAQgFAOgLAJQgMAJgQAAQgNgBgLgFgAAWgIQAAgJgHgFQgGgGgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_16.setTransform(-29.5,-13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfA7IAAh1IAZAAIAABiIAlAAIAAATg");
	this.shape_17.setTransform(-38.25,-14.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-49.3,-28.8,98.69999999999999,47.6), null);


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
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(128.125,32.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAjQgGgEgFgFQgEgGAAgGIATAAQAAAEADADQAEACAEAAQAFAAAEgCQACgCAAgDQABgEgEgBIgKgEIgOgEQgFgDgEgDQgEgEABgIQgBgGAEgFQADgFAHgDQAGgDAJAAQAMAAAIAHQAIAHAAALIgRAAQAAgFgDgCQgEgDgFAAQgEAAgDACQgDACABADQgBAEAEACIAKAEIAOAEQAFABAEAEQADAFAAAHQABAGgEAFQgDAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_1.setTransform(122.8,30.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlIAAhIIATAAIAAAMQADgHAFgDQAGgDAIAAIAAATIgGAAQgIAAgEAFQgEADAAAKIAAAkg");
	this.shape_2.setTransform(116.9,30.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_3.setTransform(109.925,30.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAtQgIgFgDgJQgFgIAAgMQAAgLAFgHQADgJAIgEQAIgFAKAAQAFAAAHADQAGADAEAFIAAgiIATAAIAABgIgTAAIAAgLQgDAGgHADQgGADgGAAQgKAAgIgEgAgJgGQgEACgCAEQgEAFAAAGQAAAHAEAFQACAFAEADQAFACAEAAQAFAAAEgCQAFgDADgFQADgFAAgGQAAgHgDgFQgDgEgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_4.setTransform(101.15,29.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAhQgHgFgEgIQgFgJAAgLQAAgKAFgJQAEgIAHgFQAIgFAKAAQAHAAAGAEQAFADAFAFIAAgKIASAAIAABIIgSAAIAAgLQgEAFgGAEQgHADgHAAQgJAAgIgFgAgJgSQgEADgCAEQgEAFAAAGQAAAHAEAEQACAFAEADQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgEQgDgFgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_5.setTransform(92.25,30.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_6.setTransform(83.925,30.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAuIAAhbIASAAIAABNIAdAAIAAAOg");
	this.shape_7.setTransform(77.15,29.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAwQgLgHgBgNIATAAQABAFAEADQAGADAGAAQAIAAAFgFQAEgEABgKIAAgMQgEAGgHADQgGADgGAAQgKAAgHgEQgJgFgDgJQgFgHAAgMQAAgLAFgIQADgJAJgEQAHgFAKAAQAGAAAGADQAHADAEAGIAAgLIASAAIAABJQAAAKgEAIQgEAIgIAFQgJAEgLAAQgPAAgJgHgAgJgjQgEACgCAFQgEAFAAAGQAAAHAEAFQACAFAEACQAFACAEAAQAFAAAEgCQAFgCADgFQADgFAAgGQAAgHgDgFQgDgFgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_8.setTransform(66.05,31.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAlIAAgoQABgIgFgFQgFgEgHgBQgHABgEAEQgFAFABAIIAAAoIgTAAIAAhIIATAAIAAAJQAEgFAFgCQAGgDAGAAQAMAAAJAIQAIAIAAAPIAAAqg");
	this.shape_9.setTransform(57.5,30.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJA0IAAhIIASAAIAABIgAgHggQgDgDgBgFQABgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_10.setTransform(51.3,28.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAtQgWABAAgXIAAgiIgJAAIAAgPIAJAAIAAgTIARAAIAAATIARAAIAAAPIgRAAIAAAiQAAADACACQACACAEAAIAJAAIAAAPg");
	this.shape_11.setTransform(46.875,29.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAhQgHgFgEgIQgFgJAAgLQAAgKAFgJQAEgIAHgFQAIgFAJAAQAIAAAGAEQAFADAFAFIAAgKIASAAIAABIIgSAAIAAgLQgEAFgGAEQgHADgHAAQgJAAgIgFgAgIgSQgFADgCAEQgDAFgBAGQABAHADAEQACAFAFADQAEADAEAAQAFAAAFgDQAEgCADgFQACgFABgHQgBgGgCgEQgDgFgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_12.setTransform(39.7,30.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAkIgahHIATAAIASA2IATg2IATAAIgbBHg");
	this.shape_13.setTransform(31.5,30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJA0IAAhIIASAAIAABIgAgHggQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_14.setTransform(25.8,28.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAtQgWABAAgXIAAgiIgJAAIAAgPIAJAAIAAgTIARAAIAAATIARAAIAAAPIgRAAIAAAiQAAADACACQACACAEAAIAJAAIAAAPg");
	this.shape_15.setTransform(21.325,29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_16.setTransform(17.025,28.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAhQgGgDgEgIQgEgHAAgJIAAgqIATAAIAAAnQAAAJAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgJIAAgnIATAAIAABIIgTAAIAAgJQgDAEgGADQgGADgFAAQgJAAgHgEg");
	this.shape_17.setTransform(10.825,30.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVApQgKgGgHgLQgGgKAAgOQAAgNAGgKQAHgLAKgGQAKgGANAAQAPAAAMAIQAMAIAEAOIgVAAQgEgHgFgDQgGgDgHAAQgHAAgHADQgGAEgEAHQgDAHAAAIQAAAJADAHQAEAHAGAEQAHAEAHAAQAHAAAGgEQAFgDAEgHIAVAAQgEAOgMAIQgMAIgPAAQgNAAgKgGg");
	this.shape_18.setTransform(1.35,29.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_19.setTransform(113.575,15.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAjQgIgEgEgFQgEgGAAgGIATAAQAAAEADADQAEACAEAAQAGAAACgCQAEgCAAgDQAAgEgEgBIgLgEIgNgEQgFgDgEgDQgDgEgBgIQABgGADgFQAEgFAGgDQAHgDAHAAQAOAAAHAHQAIAHABALIgSAAQgBgFgDgCQgDgDgFAAQgFAAgCACQgCACgBADQABAEADACIALAEIAMAEQAGABADAEQAEAFABAHQAAAGgEAFQgDAFgHADQgHADgJAAQgHAAgHgDg");
	this.shape_20.setTransform(108.25,12.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_21.setTransform(102.875,11.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_22.setTransform(99.225,11.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJA0IAAhIIASAAIAABIgAgHggQgDgDgBgFQABgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_23.setTransform(95.65,11.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAKAxIgYgfIAAAfIgTAAIAAhhIATAAIAAA3IAXgeIAYAAIggAjIAhAlg");
	this.shape_24.setTransform(90.375,11.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgQAsQgHgDgEgHQgFgGgBgIIAVAAQAAAFADAEQAEADAFAAQAHAAADgDQAFgDAAgFQgBgEgCgDQgCgDgEgBIgJgDIgQgGQgFgBgEgFQgEgGAAgIQAAgJAEgGQAEgGAHgDQAIgDAJAAQANAAAKAHQAIAHACAMIgVAAQAAgFgEgDQgEgDgFAAQgGAAgDADQgCADAAAFQAAAEACACQACADAEABIAJAEIAOAFQAHABADAGQAFAFAAAJQAAAHgFAGQgDAHgIADQgHAEgKAAQgIAAgJgDg");
	this.shape_25.setTransform(82.05,11.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAwQgJgHgCgNIASAAQACAFAFADQAFADAFAAQAIAAAGgFQAEgEAAgKIAAgMQgDAGgHADQgFADgHAAQgKAAgHgEQgIgFgFgJQgEgHAAgMQAAgLAEgIQAFgJAIgEQAHgFAKAAQAHAAAFADQAHADADAGIAAgLIATAAIAABJQAAAKgEAIQgEAIgJAFQgHAEgMAAQgPAAgKgHgAgIgjQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEACAEAAQAFAAAEgCQAFgCADgFQADgFgBgGQABgHgDgFQgDgFgFgCQgEgDgFAAQgEAAgEADg");
	this.shape_26.setTransform(70.25,14.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AARAlIAAgoQgBgIgEgFQgEgFgIAAQgGAAgFAFQgEAFgBAIIAAAoIgSAAIAAhIIASAAIAAAJQAFgFAFgCQAGgDAGAAQANAAAIAIQAIAIAAAPIAAAqg");
	this.shape_27.setTransform(61.7,12.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIA0IAAhIIARAAIAABIgAgHggQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_28.setTransform(55.55,11.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAlIAAhIIASAAIAAAMQADgGAGgEQAFgDAHAAIAAATIgEAAQgJAAgFAEQgDAFAAAJIAAAkg");
	this.shape_29.setTransform(51.35,12.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAiQgGgFgEgHQgEgGAAgKIAAgqIATAAIAAAnQAAAJAEAFQAEAEAHAAQAIAAAEgEQAEgFAAgJIAAgnIATAAIAABIIgTAAIAAgJQgDAFgGACQgGADgFAAQgJAAgHgDg");
	this.shape_30.setTransform(44.025,12.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKAtQgWAAAAgWIAAgiIgJAAIAAgQIAJAAIAAgSIARAAIAAASIARAAIAAAQIgRAAIAAAiQAAAEACABQACACAEAAIAJAAIAAAPg");
	this.shape_31.setTransform(37.125,11.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAlIAAhIIATAAIAAAMQADgGAFgEQAGgDAIAAIAAATIgGAAQgIAAgEAEQgEAFAAAJIAAAkg");
	this.shape_32.setTransform(32.3,12.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAiQgGgFgEgHQgEgGAAgKIAAgqIATAAIAAAnQAAAJAEAFQAEAEAHAAQAIAAAEgEQAEgFAAgJIAAgnIATAAIAABIIgTAAIAAgJQgDAFgGACQgGADgFAAQgJAAgHgDg");
	this.shape_33.setTransform(24.975,12.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVAuIgpg+IAAA+IgSAAIAAhbIASAAIApA+IAAg+IASAAIAABbg");
	this.shape_34.setTransform(15.8,11.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_35.setTransform(129.775,-1.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_36.setTransform(123.975,-4.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAwQgJgHgCgNIASAAQACAFAFADQAFADAFAAQAIAAAGgFQAEgEAAgKIAAgMQgDAGgHADQgFADgHAAQgKAAgHgEQgIgFgFgJQgEgHAAgMQAAgLAEgIQAFgJAIgEQAHgFAKAAQAHAAAFADQAHADADAGIAAgLIATAAIAABJQAAAKgEAIQgEAIgJAFQgHAEgMAAQgPAAgKgHgAgIgjQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEACAEAAQAFAAAEgCQAFgCADgFQADgFgBgGQABgHgDgFQgDgFgFgCQgEgDgFAAQgEAAgEADg");
	this.shape_37.setTransform(115.25,-2.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAtQgIgFgFgJQgEgIAAgMQAAgLAEgHQAFgJAIgEQAHgFAKAAQAFAAAHADQAHADADAFIAAgiIATAAIAABgIgTAAIAAgLQgDAGgHADQgGADgGAAQgKAAgHgEgAgJgGQgEACgDAEQgCAFAAAGQAAAHACAFQADAFAEADQAFACAEAAQAFAAAEgCQAFgDADgFQACgFAAgGQAAgHgCgFQgDgEgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_38.setTransform(106.35,-5.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_39.setTransform(98.025,-4.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_40.setTransform(92.125,-5.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AANAlIgNgyIgMAyIgUAAIgWhJIATAAIANA3IAOg3IASAAIAOA3IANg3IASAAIgWBJg");
	this.shape_41.setTransform(84.775,-4.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSAhQgJgEgFgJQgEgJAAgLQAAgKAEgJQAGgIAIgFQAJgFAJAAQALAAAIAFQAJAFAFAIQAEAJABAKQAAALgGAJQgEAJgJAEQgIAFgLAAQgKAAgIgFgAgNgPQgFAGAAAJQAAALAFAFQAGAGAHAAQAEAAAFgDQAFgCACgFQACgFABgHQgBgJgFgGQgFgFgIAAQgHAAgGAFg");
	this.shape_42.setTransform(75,-4.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQAlIAAgnQABgJgFgFQgFgFgHABQgHgBgEAFQgFAFABAJIAAAnIgTAAIAAhIIATAAIAAAJQAEgFAFgDQAGgCAGAAQAMAAAJAIQAIAJAAAOIAAAqg");
	this.shape_43.setTransform(66.5,-4.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOAuIgggpIAAApIgTAAIAAhbIATAAIAAApIAggpIAXAAIglAtIAmAug");
	this.shape_44.setTransform(58.025,-5.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgWAwQgLgHgBgNIATAAQABAFAEADQAGADAGAAQAHAAAFgFQAGgEAAgKIAAgMQgEAGgGADQgGADgIAAQgJAAgIgEQgHgFgEgJQgFgHAAgMQAAgLAFgIQAEgJAHgEQAIgFAJAAQAIAAAGADQAGADAEAGIAAgLIASAAIAABJQAAAKgEAIQgEAIgIAFQgJAEgLAAQgPAAgJgHgAgIgjQgFACgCAFQgDAFgBAGQABAHADAFQACAFAFACQAEACAEAAQAFAAAFgCQAEgCADgFQACgFABgGQgBgHgCgFQgDgFgEgCQgFgDgFAAQgEAAgEADg");
	this.shape_45.setTransform(45.55,-2.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AARAlIAAgnQgBgJgEgFQgEgFgIABQgGgBgFAFQgFAFAAAJIAAAnIgSAAIAAhIIASAAIAAAJQAEgFAGgDQAGgCAGAAQANAAAIAIQAIAJAAAOIAAAqg");
	this.shape_46.setTransform(37.05,-4.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJA0IAAhIIASAAIAABIgAgHggQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_47.setTransform(30.85,-6.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAKAuQgWgBAAgWIAAgjIgJAAIAAgPIAJAAIAAgSIARAAIAAASIARAAIAAAPIgRAAIAAAjQAAAEACACQACABAEAAIAJAAIAAAQg");
	this.shape_48.setTransform(26.425,-5.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAQAlIAAgnQAAgJgEgFQgFgFgHABQgGgBgFAFQgFAFAAAJIAAAnIgSAAIAAhIIASAAIAAAJQAFgFAFgDQAGgCAGAAQAMAAAJAIQAIAJAAAOIAAAqg");
	this.shape_49.setTransform(19.6,-4.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVAhQgHgFgEgIQgFgJAAgLQAAgKAFgJQAEgIAHgFQAIgFAJAAQAHAAAHAEQAGADAEAFIAAgKIASAAIAABIIgSAAIAAgLQgEAFgGAEQgHADgHAAQgJAAgIgFgAgIgSQgFADgCAEQgDAFAAAGQAAAHADAEQACAFAFADQAEADAEAAQAFAAAFgDQAEgCADgFQACgFABgHQgBgGgCgEQgDgFgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_50.setTransform(10.55,-4.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_51.setTransform(4.475,-5.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghAuIAAhbIAhAAQALAAAHADQAIAFAEAGQAEAGAAAIQAAAIgEAGQgDAFgIAFQgHADgMAAIgOAAIAAAkgAgOgEIAOAAQAHAAAEgDQAEgEAAgGQAAgNgPAAIgOAAg");
	this.shape_52.setTransform(-1.025,-5.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-7.6,-16.9,141.4,57.6), null);


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
	this.shape.graphics.f("#000000").s().p("AgNAiQgIgDgDgGQgFgFAAgHIASAAQABAEAEADQADADAFAAQAEAAADgCQAEgDAAgDQgBgDgDgCIgLgEIgMgDQgGgCgDgEQgFgFAAgGQABgHADgEQAEgGAGgCQAHgDAHAAQANAAAIAGQAIAGAAAMIgRAAQgBgEgDgDQgDgDgFAAQgEAAgDACQgCACgBADQABAEADABIALAFIAMADQAGACADAEQADAFABAGQAAAHgEAEQgDAGgHACQgGADgIAAQgJAAgGgDg");
	this.shape.setTransform(125.9,36.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAGIg0AAQABAJAFADQAFAFAGAAQAKAAAEgJIAUAAQgDALgJAHQgJAGgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_1.setTransform(118.425,36.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAGIg0AAQABAJAFADQAFAFAGAAQAKAAAEgJIAUAAQgDALgJAHQgJAGgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_2.setTransform(110.425,36.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYA1IAPgkIgdhFIAVAAIARAyIATgyIAUAAIgsBpg");
	this.shape_3.setTransform(102.475,38.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAgQgIgEgGgIQgEgJAAgLQAAgKAFgJQAFgIAIgEQAJgFAJAAQAKAAAJAFQAIAEAFAIQAFAJAAAKQAAALgFAJQgFAIgIAEQgJAFgKAAQgKAAgIgFgAgNgPQgEAGAAAJQAAAKAEAGQAGAFAHABQAEgBAFgCQAEgDADgEQADgFAAgHQgBgJgFgGQgGgFgHgBQgHABgGAFg");
	this.shape_4.setTransform(94.45,36.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAwIAAhfIARAAIAABfg");
	this.shape_5.setTransform(88.5,35.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkA2IAAhqIASAAIAAALQADgFAHgEQAGgDAGAAQAKAAAHAFQAIAEAEAJQAEAIABALQgBALgEAIQgEAIgIAFQgHAEgKAAQgGAAgGgDQgHgDgDgFIAAAtgAgIgiQgFACgCAFQgDAFAAAGQAAAHADAFQACAEAFACQADACAFAAQAFAAAEgCQAFgCACgFQADgEAAgHQAAgHgDgEQgCgFgFgCQgEgDgFAAQgFAAgDADg");
	this.shape_6.setTransform(82.55,38.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAqAkIAAgmQAAgJgFgEQgFgFgGABQgIgBgEAFQgFAEAAAJIAAAmIgRAAIAAgmQAAgJgEgEQgFgFgHABQgHgBgFAFQgFAEAAAJIAAAmIgSAAIAAhGIASAAIAAAIQAEgEAFgDQAGgDAHABQAJAAAGADQAFADAEAHQADgGAIgEQAGgDAIAAQANgBAJAJQAHAHABAPIAAApg");
	this.shape_7.setTransform(71.15,36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAtIAAhZIAzAAIAAAPIghAAIAAAWIAdAAIAAAOIgdAAIAAAXIAhAAIAAAPg");
	this.shape_8.setTransform(60.925,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAvQgKgHgBgMIASAAQABAFAEACQAGADAFAAQAIAAAFgEQAFgFAAgKIAAgLQgDAFgHAEQgGADgHAAQgJAAgHgFQgIgEgEgJQgFgHAAgLQAAgLAFgJQAEgIAIgFQAHgEAJAAQAIAAAFADQAHADADAFIAAgKIATAAIAABHQgBAKgEAIQgEAIgIAFQgIAEgLAAQgPAAgJgHgAgJgjQgEADgCAEQgDAFAAAHQAAAGADAFQACAFAEABQAFADAEAAQAFAAAEgDQAFgBACgFQADgFAAgGQAAgHgDgFQgCgEgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_9.setTransform(161,21.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAlIAAgnQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAnIgSAAIAAhIIASAAIAAAKQAEgFAFgDQAGgDAGABQANgBAHAJQAIAHAAAPIAAAqg");
	this.shape_10.setTransform(152.575,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDADgFABQgEgBgDgDg");
	this.shape_11.setTransform(146.475,18.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAiQgHgDgFgGQgEgFAAgGIASAAQABADADADQAEADAEAAQAGAAACgCQAEgDAAgDQAAgDgEgCIgKgEIgNgDQgGgCgDgEQgFgFAAgGQABgHADgEQAEgGAGgCQAHgDAHAAQANAAAIAGQAIAGAAALIgRAAQgBgDgDgDQgDgDgFAAQgEAAgDACQgCACgBADQABAEADABIALAFIAMADQAFACAEAEQADAFABAGQAAAHgEAEQgDAGgHACQgGADgJAAQgHAAgHgDg");
	this.shape_12.setTransform(141.1,20.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDADgFABQgEgBgDgDg");
	this.shape_13.setTransform(135.825,18.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAqAlIAAgnQgBgJgEgEQgEgFgIABQgHgBgEAFQgFAEAAAJIAAAnIgRAAIAAgnQAAgJgEgEQgEgFgIABQgHgBgFAFQgFAEABAJIAAAnIgSAAIAAhIIASAAIAAAJQADgEAGgDQAFgDAHABQAIAAAHADQAGADADAHQAEgGAGgEQAHgDAIAAQANgBAIAJQAJAHgBAPIAAAqg");
	this.shape_14.setTransform(127.25,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAgQgJgEgFgIQgEgJAAgLQAAgKAFgJQAEgIAJgEQAIgFAKAAQALAAAIAFQAIAEAFAIQAFAJAAAKQAAALgFAJQgFAIgIAEQgJAFgKAAQgKAAgIgFgAgNgPQgEAGAAAJQAAAKAEAGQAGAFAHABQAFgBAEgCQAEgDACgEQAEgFAAgHQgBgJgFgGQgGgFgHgBQgHABgGAFg");
	this.shape_15.setTransform(116.3,20.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAlIAAhIIASAAIAAALQACgFAGgEQAGgCAHAAIAAATIgFAAQgIAAgFADQgDAFAAAIIAAAlg");
	this.shape_16.setTransform(109.825,20.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAuIAAhaIAgAAQALAAAHADQAIAEADAGQAEAHAAAIQAAAHgEAHQgDAFgHAEQgIADgLAAIgOAAIAAAkgAgOgDIAOAAQAHAAADgEQAFgDAAgGQgBgNgOAAIgOAAg");
	this.shape_17.setTransform(103.2,19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAvQgLgHAAgMIASAAQABAFAEACQAGADAFAAQAIAAAFgEQAFgFAAgKIAAgLQgDAFgGAEQgHADgHAAQgJAAgIgFQgHgEgEgJQgFgHAAgLQAAgLAFgJQAEgIAHgFQAIgEAJAAQAHAAAHADQAGADADAFIAAgKIATAAIAABHQAAAKgFAIQgEAIgIAFQgIAEgLAAQgOAAgKgHgAgJgjQgEADgCAEQgDAFAAAHQAAAGADAFQACAFAEABQAFADAEAAQAFAAAFgDQAEgBACgFQADgFAAgGQAAgHgDgFQgCgEgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_18.setTransform(91.35,21.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAlIAAgnQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAnIgSAAIAAhIIASAAIAAAKQAEgFAFgDQAGgDAGABQANgBAHAJQAIAHAAAPIAAAqg");
	this.shape_19.setTransform(82.925,20.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDADgFABQgEgBgDgDg");
	this.shape_20.setTransform(76.825,18.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkA2IAAhqIASAAIAAALQADgFAHgEQAGgDAGAAQAKAAAHAFQAIAEAEAJQAEAIABALQgBALgEAIQgEAIgIAFQgHAEgKAAQgGAAgGgDQgHgDgDgFIAAAtgAgIgiQgFACgCAFQgDAFAAAGQAAAHADAFQACAEAFACQADACAFAAQAFAAAEgCQAFgCACgFQADgEAAgHQAAgHgDgEQgCgFgFgCQgEgDgFAAQgFAAgDADg");
	this.shape_21.setTransform(70.85,21.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAgQgHgEgFgIQgFgJAAgLQAAgKAFgJQAFgIAIgEQAJgFAJAAQAKAAAJAFQAIAEAFAIQAFAJAAAKQAAALgFAJQgFAIgIAEQgJAFgKAAQgKAAgJgFgAgMgPQgFAGgBAJQABAKAFAGQAEAFAIABQAFgBAEgCQAEgDACgEQADgFABgHQAAgJgGgGQgFgFgIgBQgHABgFAFg");
	this.shape_22.setTransform(62.1,20.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAwIAAhfIARAAIAABfg");
	this.shape_23.setTransform(56.15,19.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAGIg0AAQABAJAFADQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHgBQgGABgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_24.setTransform(50.375,20.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAkIgahHIATAAIARA2IASg2IAUAAIgbBHg");
	this.shape_25.setTransform(42.5,20.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAGIg0AAQABAJAFADQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHgBQgGABgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_26.setTransform(34.625,20.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnAuIAAhaIAgAAQANgBALAHQALAFAGAKQAGALAAAMQAAAOgGAKQgGAKgLAGQgLAFgNABgAgVAeIANAAQAOAAAHgIQAIgHAAgPQAAgNgIgIQgHgIgOAAIgNAAg");
	this.shape_27.setTransform(26.175,19.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAsQgIgEgEgGQgEgGAAgJQAAgJAFgHQAFgGAKgEIgFgJQgCgDAAgFQAAgHADgEQAEgFAGgEQAGgCAIAAQAHAAAGADQAGADADAFQACAFAAAHIgRAAQAAgFgCgBQgCgDgEAAQgDAAgDACQgCACAAADQAAAEACADIAGAIIAWAVIAAAAIABgBIAHgLIATAAIgJAPIgGAKIAWAWIgWAAIgKgKQgMALgSAAQgKAAgHgDgAgdASQAAAGAEAEQAFAEAHAAQALAAAHgHIgWgXQgMAGAAAKg");
	this.shape_28.setTransform(126.775,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAvQgLgHAAgMIASAAQABAFAEACQAGADAFAAQAIAAAFgEQAFgFAAgKIAAgLQgDAFgGAEQgHADgHAAQgJAAgIgFQgHgEgEgJQgFgHAAgLQAAgLAFgJQAEgIAHgFQAIgEAJAAQAHAAAHADQAGADADAFIAAgKIATAAIAABHQAAAKgFAIQgEAIgIAFQgIAEgLAAQgOAAgKgHgAgJgjQgEADgCAEQgDAFAAAHQAAAGADAFQACAFAEABQAFADAEAAQAFAAAFgDQAEgBACgFQADgFAAgGQAAgHgDgFQgCgEgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_29.setTransform(113.85,5.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAlIAAgnQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAnIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgDAGABQANgBAHAJQAIAHAAAPIAAAqg");
	this.shape_30.setTransform(105.425,4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDADgFABQgEgBgDgDg");
	this.shape_31.setTransform(99.325,2.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAQAlIAAgnQAAgJgEgFQgEgEgIAAQgGAAgFAEQgEAFAAAJIAAAnIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgDAGABQANgBAHAJQAIAHAAAPIAAAqg");
	this.shape_32.setTransform(93.275,4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgCAAgGQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAGgDACQgDADgFABQgEgBgDgDg");
	this.shape_33.setTransform(87.175,2.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAgQgHgEgEgIQgEgJAAgLQAAgKAEgJQAEgIAHgEQAIgFAJAAQAHAAAHADQAFADAEAFIAAgKIATAAIAABHIgTAAIAAgLQgEAGgFADQgHADgHAAQgJAAgIgFgAgIgSQgFADgCAEQgDAFAAAGQAAAGADAFQACAFAFADQAEACAEAAQAFAAAFgCQAEgDADgEQACgGAAgGQAAgFgCgGQgDgEgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_34.setTransform(80.75,4.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAtQgWAAAAgWIAAgiIgJAAIAAgPIAJAAIAAgSIARAAIAAASIARAAIAAAPIgRAAIAAAiQAAAEACABQACABAEABIAJAAIAAAPg");
	this.shape_35.setTransform(74.025,3.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgRAgQgJgEgEgIQgFgJAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAGIg0AAQABAJAFADQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_36.setTransform(67.575,4.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AANAuIgUgkIgIAAIAAAkIgSAAIAAhaIAhAAQAKAAAIADQAIAEADAGQAEAHAAAIQAAAJgGAHQgEAGgLADIAWAlgAgPgCIAPAAQAHAAADgEQAEgEAAgGQAAgGgEgDQgDgEgHAAIgPAAg");
	this.shape_37.setTransform(59.55,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(19.2,-8,148.5,54.6), null);


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
	this.shape.setTransform(33.525,-1.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgFgIQgEgIAAgLIAAgyIAUAAIAAAyQAAAIAEAEQAEAEAGAAQAHAAAEgEQAEgEAAgIIAAgyIAUAAIAAAyQAAALgEAIQgFAIgIAEQgIAEgKAAQgJAAgIgEg");
	this.shape_1.setTransform(25.625,-1.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAqIAAhDIgVAAIAAgQIA/AAIAAAQIgWAAIAABDg");
	this.shape_2.setTransform(15.4,-1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_3.setTransform(7.275,-1.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAqIgFgPIgfAAIgFAPIgVAAIAehTIAXAAIAeBTgAAKAMIgKgeIgJAeIATAAg");
	this.shape_4.setTransform(-1.625,-1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAqIAAhDIgVAAIAAgQIA/AAIAAAQIgWAAIAABDg");
	this.shape_5.setTransform(-9.55,-1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAqIghgzIAAAzIgVAAIAAhTIAVAAIAhAzIAAgzIAVAAIAABTg");
	this.shape_6.setTransform(-17.575,-1.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgFgKQgGgKAAgMQAAgLAGgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAFAKQAGAKAAALQAAAMgGAKQgFAKgKAGQgKAFgMAAQgLAAgKgFgAgPgRQgGAHAAAKQAAALAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-26.775,-1.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_8.setTransform(-36.075,-1.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DBA76").s().p("Al8BqQgpAAgegeQgdgdAAgpIAAgMQAAgpAdgdQAdgdAqAAIL6AAQApAAAdAdQAdAdAAApIAAAMQAAApgdAdQgdAegpAAg");
	this.shape_9.setTransform(-2.125,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-50.2,-12.1,96.2,21.2), null);


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
	this.ad_clickBtn.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(313));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(675.8,65.3,0.7938,0.7938,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regY:0.3,y:49.5,alpha:1},9,cjs.Ease.get(1)).wait(277));

	// F3
	this.instance_1 = new lib.F3();
	this.instance_1.setTransform(571.4,45.7,0.9,0.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({_off:false},0).to({y:50.2,alpha:1},10,cjs.Ease.get(1)).wait(85));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(521.55,26.3,0.8018,0.8018,0,0,0,0.2,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({y:36.2},9,cjs.Ease.get(1)).to({_off:true},90).wait(95));

	// F1
	this.instance_3 = new lib.F1();
	this.instance_3.setTransform(502.25,22.2,0.729,0.729,0,0,0,0.2,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:31.2,alpha:1},9).to({_off:true},93).wait(193));

	// Line
	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(503.6,47.5,0.9,0.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(295));

	// Heading
	this.instance_5 = new lib.Heading();
	this.instance_5.setTransform(411.05,42.7,0.99,0.99);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:424.55,alpha:1},9,cjs.Ease.get(1)).wait(295));

	// Logo.png
	this.instance_6 = new lib.Logo_1();
	this.instance_6.setTransform(268.35,8.95,0.3451,0.3451,0,0,0,0.1,0.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:17,alpha:1},9,cjs.Ease.get(1)).wait(304));

	// Bg
	this.instance_7 = new lib.Bg_1();
	this.instance_7.setTransform(233.55,121.2,0.81,0.81,-90,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(313));

	// Layer_6
	this.instance_8 = new lib.img_3("synched",0);
	this.instance_8.setTransform(115.5,45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(218).to({_off:false},0).to({startPosition:0},10).wait(85));

	// img2.jpg
	this.instance_9 = new lib.img_2("synched",0);
	this.instance_9.setTransform(115.5,45);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).to({startPosition:0},9).wait(185));

	// img1
	this.instance_10 = new lib.img1_1("synched",0);
	this.instance_10.setTransform(115.5,45);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},9).wait(304));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(313));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,728,243);


// stage content:
(lib.KSFY_214797_MM_728x90 = function(mode,startPosition,loop,reversed) {
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
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"Bg.png", id:"Bg"},
		{src:"img1.jpg", id:"img1"},
		{src:"img2.jpg", id:"img2"},
		{src:"img3.jpg", id:"img3"},
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