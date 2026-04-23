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
	this.shape.graphics.f("#CCA230").s().p("AgSArQgKgEgFgHQgFgHgBgJIAcAAQABAFAEADQADADAFAAQAGAAADgCQACgCAAgEQAAgEgEgCQgEgCgJgCIgQgFQgHgCgFgFQgEgFAAgKQAAgIAEgGQAEgHAJgEQAJgEALAAQARAAAKAJQAKAJABAOIgaAAQgBgFgDgDQgEgDgFAAQgEAAgDACQgCACAAAEQAAAEADACIAMAEIARAFQAHACAFAFQAEAGABAJQAAAJgEAGQgFAGgJAEQgIAEgLAAQgLAAgKgFg");
	this.shape.setTransform(33.95,31.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCA230").s().p("AgcAvIAAhcIAcAAIAAAQQAEgIAIgEQAIgFAIAAIAAAeIgHAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_1.setTransform(26.25,31.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLABgOQgBgNAHgLQAFgLALgGQALgGAMAAQAOAAALAGQAKAGAGAKQAFALAAANIAAAIIg/AAQAAAIAGAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_2.setTransform(17.25,31.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCA230").s().p("AgcA4QgJgGgGgLQgFgLAAgOQAAgOAFgKQAGgLAJgFQAKgGALgBQAIAAAIAFQAHAEAEAGIAAgrIAdAAIAAB6IgdAAIAAgOQgDAHgIAEQgIAEgIAAQgLAAgKgGgAgNgBQgGAEAAALQAAALAGAGQAGAGAIAAQAIAAAGgGQAFgGAAgKQAAgMgFgEQgGgHgIAAQgIAAgGAHg");
	this.shape_3.setTransform(6.25,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA230").s().p("AgcAqQgJgGgGgLQgFgLAAgOQAAgNAFgLQAGgLAJgGQAKgGALAAQAIAAAIAEQAIAEADAHIAAgNIAdAAIAABbIgdAAIAAgNQgDAHgIAEQgIAEgIAAQgLAAgKgGgAgNgQQgGAGAAAKQAAAKAGAHQAGAGAHAAQAJAAAGgGQAFgGAAgLQAAgKgFgGQgGgGgJAAQgHAAgGAGg");
	this.shape_4.setTransform(-5,31.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAAKAGQAKAGAHAKQAFALABANIgBAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgJAFgMAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_5.setTransform(-15.4,31.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCA230").s().p("AggA6IAAhzIAcAAIAABdIAlAAIAAAWg");
	this.shape_6.setTransform(-24.075,30.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCA230").s().p("AgQBBIAAhEIgKAAIAAgYIAKAAIAAgCQAAgRAKgJQAJgJATAAIAEAAIAAAYQgIAAgDADQgDACAAAIIAAAAIAPAAIAAAYIgPAAIAABEg");
	this.shape_7.setTransform(59.975,13.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCA230").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_8.setTransform(51.725,15.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCA230").s().p("AASAvIAAgyQAAgJgFgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAEgHAIgDQAGgEAJAAQAQAAAKALQAKAKAAATIAAA1g");
	this.shape_9.setTransform(37.45,15.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCA230").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_10.setTransform(26.575,15.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCA230").s().p("AgNBDIAAhcIAbAAIAABcgAgLgnQgFgFAAgGQAAgHAFgEQAEgEAHgBQAIABAEAEQAFAEAAAHQAAAGgFAFQgEAFgIAAQgHAAgEgFg");
	this.shape_11.setTransform(18.9,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCA230").s().p("AAPA6QgPgBgIgHQgJgHAAgSIAAgkIgLAAIAAgXIALAAIAAgXIAbAAIAAAXIATAAIAAAXIgTAAIAAAkQAAAFACACQACABAFAAIAKAAIAAAZg");
	this.shape_12.setTransform(13.025,14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCA230").s().p("AgcAqQgJgGgGgLQgFgLAAgOQAAgNAFgLQAGgLAJgGQAJgGAMAAQAJAAAHAEQAHAEAFAHIAAgNIAcAAIAABbIgcAAIAAgNQgFAHgHAEQgHAEgJAAQgMAAgJgGgAgNgQQgGAGAAAKQAAAKAGAHQAGAGAHAAQAIAAAHgGQAFgGABgLQgBgKgFgGQgHgGgIAAQgHAAgGAGg");
	this.shape_13.setTransform(3.85,15.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCA230").s().p("AgbAvIAAhcIAbAAIAAAQQAEgIAIgEQAHgFAJAAIAAAeIgHAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_14.setTransform(-4.65,15.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCA230").s().p("AgXAqQgKgGgHgLQgFgLAAgOQAAgNAFgLQAHgLAKgGQAKgGAOAAQANAAALAGQAJAGAGAKQAHALAAANIgBAIIg/AAQAAAIAFAFQAFAFAHAAQAKAAAEgJIAfAAQgDAJgGAHQgGAHgJAEQgJAFgLAAQgNAAgLgGgAASgIQAAgHgGgFQgEgEgIAAQgGAAgFAEQgFAEgBAIIAjAAIAAAAg");
	this.shape_15.setTransform(-13.65,15.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCA230").s().p("AASAvIAAgyQgBgJgEgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAEgHAIgDQAGgEAJAAQAQAAAKALQAKAKAAATIAAA1g");
	this.shape_16.setTransform(-24.25,15.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCA230").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQALgGAMAAQAOAAALAGQAJAGAHAKQAFALAAANIAAAIIg/AAQAAAIAGAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgLAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_17.setTransform(-34.95,15.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA230").s().p("AgcA0QgOgIgHgNQgIgOAAgRQAAgQAIgOQAHgNAOgIQANgHAQAAQAVAAAPAKQAOAKAFASIggAAQgDgGgGgDQgGgDgIAAQgMAAgJAJQgIAJAAAOQAAAQAJAJQAIAJAPAAQAKAAAHgFQAIgGADgKIgjAAIAAgTIA9AAIAAAZQgEALgHAJQgIAJgLAFQgMAGgOAAQgRAAgNgHg");
	this.shape_18.setTransform(-46.375,14.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCA230").s().p("AAPA6QgPgBgIgHQgJgHAAgSIAAgkIgLAAIAAgXIALAAIAAgXIAbAAIAAAXIATAAIAAAXIgTAAIAAAkQAAAFACABQACACAFAAIAKAAIAAAZg");
	this.shape_19.setTransform(21.225,-1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCA230").s().p("AAQAuIgRgZIgOAZIggAAIAfguIgfgtIAgAAIARAZIAOgZIAfAAIgfAtIAgAug");
	this.shape_20.setTransform(13.15,-0.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCA230").s().p("AgXAqQgKgGgHgLQgFgLgBgOQABgNAFgLQAHgLAKgGQALgGANAAQANAAAKAGQALAGAGAKQAFALABANIgBAIIg/AAQABAIAEAFQAFAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgKAFgKAAQgNAAgLgGgAARgIQAAgHgEgFQgFgEgIAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_21.setTransform(3.15,-0.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCA230").s().p("AAXA6IguhHIAABHIgcAAIAAhzIAcAAIAuBHIAAhHIAdAAIAABzg");
	this.shape_22.setTransform(-8.1,-1.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#315746").s().p("AgXAqQgLgGgFgLQgHgLAAgOQAAgNAHgLQAFgLALgGQAKgGANAAQAOAAAKAGQAKAGAHAKQAFALABANIgBAIIg/AAQABAIAFAFQAEAFAHAAQAKAAAEgJIAeAAQgCAJgGAHQgGAHgJAEQgJAFgMAAQgMAAgLgGgAARgIQAAgHgEgFQgGgEgHAAQgGAAgFAEQgFAEgBAIIAiAAIAAAAg");
	this.shape_23.setTransform(51.65,-22.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#315746").s().p("AARA9IAAgyQAAgJgEgEQgFgGgIAAQgHAAgFAGQgFAEAAAJIAAAyIgcAAIAAh5IAcAAIAAAqQAEgGAIgEQAHgDAIAAQARAAAJAKQAKALAAARIAAA2g");
	this.shape_24.setTransform(41.1,-24.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#315746").s().p("AAPA6QgPAAgIgIQgJgHAAgRIAAgkIgLAAIAAgYIALAAIAAgWIAbAAIAAAWIATAAIAAAYIgTAAIAAAkQAAAEACACQACACAFAAIAKAAIAAAYg");
	this.shape_25.setTransform(32.025,-23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#315746").s().p("AgeA8QgMgKgDgQIAdAAQABAFAFADQAFADAGAAQAJAAAFgFQAFgFABgLIAAgNQgFAGgHAEQgIAFgIAAQgMAAgJgGQgJgGgFgLQgGgKAAgOQAAgOAGgLQAFgLAJgGQAJgGAMAAQAIAAAIAEQAHAEAFAHIAAgNIAcAAIAABbQAAANgGAKQgFALgJAGQgLAGgPAAQgUAAgNgKgAgNgmQgGAGAAALQAAAKAGAHQAGAFAIAAQAIAAAFgFQAHgGAAgLQAAgLgHgGQgFgGgIAAQgIAAgGAGg");
	this.shape_26.setTransform(19.35,-20.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#315746").s().p("AASAvIAAgyQgBgJgEgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAAyIgcAAIAAhcIAcAAIAAANQAFgHAHgDQAGgEAJAAQARAAAJALQAKAKAAATIAAA1g");
	this.shape_27.setTransform(8.5,-22.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#315746").s().p("AgNBDIAAhcIAbAAIAABcgAgLgnQgFgFAAgGQAAgGAFgFQAEgFAHABQAIgBAEAFQAFAFAAAGQAAAGgFAFQgEAFgIgBQgHABgEgFg");
	this.shape_28.setTransform(0.45,-24.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#315746").s().p("AAPAuIgPg7IgOA7IgfAAIgZhbIAcAAIANBBIAQhBIAdAAIAQBBIANhBIAaAAIgZBbg");
	this.shape_29.setTransform(-9.125,-22.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#315746").s().p("AgYAqQgLgGgGgLQgGgLAAgOQAAgNAGgLQAGgLALgGQALgGANAAQAOAAAKAGQALAGAHALQAGALAAANQAAAOgGALQgHALgLAGQgLAGgNAAQgNAAgLgGgAgNgQQgFAGAAAKQAAALAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgGAGg");
	this.shape_30.setTransform(-21.575,-22.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#315746").s().p("AgcAvIAAhcIAcAAIAAAQQAEgIAIgEQAIgFAIAAIAAAeIgHAAQgLAAgFAFQgFAEAAALIAAArg");
	this.shape_31.setTransform(-30,-22.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#315746").s().p("AgcA0QgOgIgHgNQgIgOAAgRQAAgQAIgOQAHgNAOgIQANgHAQAAQAVAAAPAKQAOAKAFASIggAAQgDgGgGgDQgGgDgIAAQgMAAgJAJQgIAJAAAOQAAAQAJAJQAIAJAPAAQAKAAAHgFQAIgGADgKIgjAAIAAgTIA9AAIAAAZQgEALgHAJQgIAJgLAFQgMAGgOAAQgRAAgNgHg");
	this.shape_32.setTransform(-40.175,-23.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heading, new cjs.Rectangle(-71.8,-37.7,153.89999999999998,82.1), null);


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
	this.shape.graphics.f("#000000").s().p("AgXApQgKgFgGgLQgFgLAAgOQgBgNAGgLQAGgLAKgFQALgGANAAQAMAAALAFQAKAGAGAKQAFALABANIgBAIIhCAAQABAKAGAFQAGAGAIAAQANAAAFgLIAZAAQgEANgLAJQgLAIgQAAQgNAAgLgGgAAVgIQAAgJgGgFQgGgFgJAAQgIAAgGAFQgFAFgCAJIAqAAIAAAAg");
	this.shape.setTransform(103.35,-16.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApQgLgFgGgLQgFgLAAgOQAAgNAFgLQAGgLALgFQAKgGAMAAQARAAALAIQALAJAEAPIgZAAQgCgGgFgDQgEgEgHAAQgJAAgGAIQgGAHAAAMQAAANAGAHQAGAHAJAAQAOAAAEgMIAZAAQgEAPgLAIQgLAJgRAAQgMAAgKgGg");
	this.shape_1.setTransform(93.325,-16.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAvIAAgyQABgLgGgGQgGgGgJABQgJgBgFAGQgFAGAAALIAAAyIgYAAIAAhbIAYAAIAAAMQAEgGAHgEQAIgEAHAAQARAAAKALQAKALAAASIAAA1g");
	this.shape_2.setTransform(82.95,-17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXApQgKgFgFgLQgHgLABgOQAAgNAFgLQAGgLAKgFQALgGANAAQAMAAALAFQAKAGAGAKQAFALABANIgBAIIhCAAQABAKAGAFQAGAGAIAAQANAAAFgLIAZAAQgEANgLAJQgLAIgQAAQgNAAgLgGgAAVgIQABgJgHgFQgGgFgJAAQgIAAgGAFQgFAFgCAJIAqAAIAAAAg");
	this.shape_3.setTransform(72.4,-16.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKA9IAAh5IAWAAIAAB5g");
	this.shape_4.setTransform(65.05,-18.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKA9IAAh5IAVAAIAAB5g");
	this.shape_5.setTransform(60.45,-18.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWApQgLgFgGgLQgFgLgBgOQAAgNAGgLQAGgLALgFQAKgGANAAQANAAAKAFQAKAGAGAKQAGALAAANIgBAIIhCAAQABAKAGAFQAGAGAIAAQANAAAFgLIAZAAQgEANgLAJQgLAIgQAAQgNAAgKgGgAAWgIQgBgJgGgFQgGgFgJAAQgIAAgFAFQgHAFgBAJIArAAIAAAAg");
	this.shape_6.setTransform(53.1,-16.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVApQgLgFgGgLQgFgLAAgOQAAgNAFgLQAGgLALgFQAKgGAMAAQARAAALAIQALAJAEAPIgZAAQgCgGgFgDQgEgEgHAAQgJAAgGAIQgGAHAAAMQAAANAGAHQAGAHAJAAQAOAAAEgMIAZAAQgEAPgLAIQgLAJgRAAQgMAAgKgGg");
	this.shape_7.setTransform(43.075,-16.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AARAuIgSgdIgQAdIgZAAIAeguIgegtIAaAAIARAcIARgcIAZAAIgeAtIAeAug");
	this.shape_8.setTransform(33.675,-16.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggA6IAAhzIBBAAIAAATIgqAAIAAAdIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_9.setTransform(24.95,-18.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUA9IAAgyQABgLgGgFQgFgGgKAAQgIAAgGAGQgGAFABALIAAAyIgYAAIAAh5IAYAAIAAAqQAEgGAIgDQAHgEAIAAQAKAAAJAFQAHAFAFAIQAEAJABAMIAAA1g");
	this.shape_10.setTransform(11.2,-18.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANA5QgdAAABgdIAAgrIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAVAAIAAATIgVAAIAAAsQAAAFACACQACABAGAAIALAAIAAAUg");
	this.shape_11.setTransform(2.45,-18.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBBIAAhbIAWAAIAABbgAgJgpQgEgDAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(-2.925,-18.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA6IgWhRIgVBRIgcAAIgfhzIAZAAIAUBZIAYhZIAZAAIAVBYIAVhYIAZAAIggBzg");
	this.shape_13.setTransform(-13.7,-18.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA4QgKgGgFgLQgGgKAAgOQAAgOAGgKQAFgLAKgGQAJgFAMgBQAIABAIAEQAIADAFAGIAAgrIAYAAIAAB6IgYAAIAAgOQgEAHgIAEQgIAEgJAAQgMAAgJgGgAgLgIQgFADgEAFQgDAGAAAJQAAAHADAHQAEAGAFADQAGAEAFAAQAGAAAGgEQAGgDADgGQADgGAAgIQAAgIgDgHQgDgEgGgEQgGgDgGAAQgFAAgGADg");
	this.shape_14.setTransform(-31.925,-18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaApQgKgGgFgKQgGgLAAgOQAAgNAGgLQAFgLAKgFQAJgGAMAAQAJAAAIAEQAIAEAEAGIAAgNIAYAAIAABbIgYAAIAAgOQgEAHgIAEQgIAEgJAAQgMAAgJgGgAgLgXQgFADgEAGQgDAGAAAIQAAAIADAGQAEAGAFAEQAGADAFAAQAGAAAGgDQAGgEADgGQADgGAAgIQAAgHgDgGQgDgGgGgEQgGgDgGAAQgFAAgGADg");
	this.shape_15.setTransform(-43.075,-16.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXApQgKgFgGgLQgFgLAAgOQgBgNAGgLQAGgLAKgFQALgGANAAQANAAAKAFQAKAGAGAKQAGALAAANIgBAIIhCAAQABAKAGAFQAGAGAIAAQANAAAFgLIAZAAQgEANgLAJQgLAIgQAAQgNAAgLgGgAAVgIQAAgJgGgFQgGgFgJAAQgIAAgGAFQgFAFgCAJIAqAAIAAAAg");
	this.shape_16.setTransform(-53.45,-16.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdA6IAAhzIAWAAIAABgIAmAAIAAATg");
	this.shape_17.setTransform(-61.95,-18.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-70.1,-31.6,182.5,27), null);


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
	this.shape.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(184.975,8.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAdQgGgDgDgFQgEgEAAgGIAPAAQABAEACACQADACAEAAQAEAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQABgDgEgBIgIgEIgLgDQgFgCgCgCQgEgEAAgGQAAgFADgEQADgEAGgDQAEgCAHAAQALAAAGAFQAGAGACAJIgQAAQAAgEgCgCQgDgCgEAAQgDAAgDACQAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAAADADABQADACAGACIALADQADABAEADQACAEABAGQAAAFgDAEQgDAFgFACQgGACgHAAQgGAAgGgCg");
	this.shape_1.setTransform(180.6,5.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAfIAAg8IAPAAIAAAJQACgEAFgDQAFgCAGgBIAAARIgEAAQgIAAgDACQgCAEgBAIIAAAeg");
	this.shape_2.setTransform(175.75,5.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAIgEAIAAQAIAAAHAEQAGADAFAHQADAHAAAJIgBAFIgrAAQABAGAEAEQAEAEAFAAQAIAAAEgIIARAAQgDAJgHAGQgIAFgKAAQgIAAgIgEgAAOgFQAAgFgEgEQgEgEgGAAQgEAAgEAEQgFADgBAGIAcAAIAAAAg");
	this.shape_3.setTransform(169.95,5.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAlQgGgEgEgHQgEgHAAgKQAAgJAEgGQAEgHAGgEQAHgEAHAAQAFAAAGADQAFADADAEIAAgdIAPAAIAABQIgPAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgEgAgHgFQgEACgCADQgCAEAAAFQAAAGACAEQACAEAEACQAEACADAAQAFAAADgCQADgCADgEQACgEAAgFQAAgGgCgEQgDgDgDgCQgDgCgFAAQgDAAgEACg");
	this.shape_4.setTransform(162.75,4.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAbQgGgEgEgHQgDgHgBgJQABgIADgHQAEgHAGgEQAHgEAHAAQAGAAAFADQAFACADAFIAAgJIAPAAIAAA7IgPAAIAAgJQgDAFgFACQgFADgGAAQgHAAgHgEgAgHgPQgEACgCAEQgCAEAAAFQAAAFACAEQACAFAFACQADACADAAQAEAAAEgCQADgCADgEQACgEAAgGQAAgEgCgEQgDgEgDgDQgEgCgEAAQgDAAgEACg");
	this.shape_5.setTransform(155.35,5.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAJAAAHAEQAHADADAHQAEAHAAAJIgBAFIgrAAQABAGAEAEQAEAEAFAAQAIAAAEgIIAQAAQgCAJgIAGQgHAFgLAAQgIAAgHgEgAAPgFQgBgFgEgEQgEgEgGAAQgFAAgDAEQgEADgCAGIAdAAIAAAAg");
	this.shape_6.setTransform(148.55,5.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAmIAAhLIAPAAIAAA/IAYAAIAAAMg");
	this.shape_7.setTransform(143.025,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAoQgIgGgCgLIAQAAQABAFADACQAFADAEgBQAHAAAEgDQAEgFAAgIIAAgJQgDAEgFADQgFADgGAAQgHAAgHgEQgGgEgEgHQgEgGABgKQgBgIAEgIQAEgGAGgEQAHgEAHAAQAGAAAFADQAFACADAFIAAgJIAQAAIAAA7QAAAJgEAGQgDAHgHAEQgHAEgKAAQgLgBgIgFgAgHgdQgDACgCAEQgDAEAAAFQAAAGADAEQACAEADACQAEACADAAQAEAAAEgCQAEgCACgEQACgDAAgGQAAgGgCgDQgCgEgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_8.setTransform(133.8,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAfIAAghQAAgHgEgEQgEgDgGAAQgFAAgEADQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAIQADgEAEgDQAFgCAFAAQAKABAHAGQAHAHAAAMIAAAjg");
	this.shape_9.setTransform(126.725,5.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHArIAAg8IAPAAIAAA8gAgGgaQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(121.625,4.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAIAmQgSAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgOIAPAAIAAAOIANAAIAAANIgNAAIAAAcIABAEIAFABIAHAAIAAAOg");
	this.shape_11.setTransform(117.975,5.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAGgEAIAAQAGAAAFADQAFACADAFIAAgJIAPAAIAAA7IgPAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgPQgDACgDAEQgCAEAAAFQAAAFACAEQADAFADACQAEACADAAQAFAAADgCQAEgCACgEQACgEAAgGQAAgEgCgEQgCgEgEgDQgDgCgFAAQgDAAgEACg");
	this.shape_12.setTransform(112,5.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAeIgXg7IARAAIAOAtIAQgtIAPAAIgVA7g");
	this.shape_13.setTransform(105.25,5.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHArIAAg8IAPAAIAAA8gAgGgaQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_14.setTransform(100.525,4.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAIAmQgSAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgOIAPAAIAAAOIANAAIAAANIgNAAIAAAcIABAEIAFABIAHAAIAAAOg");
	this.shape_15.setTransform(96.875,5.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAoIAAhPIAPAAIAABPg");
	this.shape_16.setTransform(93.325,4.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAcQgGgDgDgGQgDgGAAgIIAAgiIAPAAIAAAgQAAAHAEAEQAEAEAFAAQAGAAAEgEQADgEAAgHIAAggIAQAAIAAA7IgQAAIAAgHQgDAEgEABQgFACgFAAQgHAAgFgCg");
	this.shape_17.setTransform(88.175,5.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAiQgJgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAJgFQAIgFALAAQAMAAAJAHQAKAGAEAMIgSAAQgCgGgFgCQgFgDgFAAQgHAAgEADQgGADgCAGQgDAGgBAGQABAIADAFQACAGAGADQAEADAHAAQAFAAAFgCQAFgDACgGIASAAQgDAMgKAGQgKAHgMAAQgLAAgIgFg");
	this.shape_18.setTransform(80.4,5.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_19.setTransform(72.325,8.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAdQgGgDgEgFQgDgEAAgGIAPAAQABAEADACQADACADAAQAEAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgDgEgBIgJgEIgLgDQgEgCgDgCQgDgEAAgGQAAgFADgEQADgEAFgDQAFgCAHAAQALAAAGAFQAGAGABAJIgOAAQgBgEgDgCQgCgCgEAAQgEAAgCACQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAADADABQADACAGACIAKADQAEABAEADQADAEAAAGQAAAFgDAEQgDAFgFACQgFACgIAAQgGAAgGgCg");
	this.shape_20.setTransform(67.95,5.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAoIAAhPIAPAAIAABPg");
	this.shape_21.setTransform(63.525,4.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHAoIAAhPIAPAAIAABPg");
	this.shape_22.setTransform(60.475,4.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHArIAAg8IAPAAIAAA8gAgGgaQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_23.setTransform(57.475,4.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAIAoIgTgZIAAAZIgQAAIAAhPIAQAAIAAAtIATgZIAUAAIgbAdIAbAeg");
	this.shape_24.setTransform(53.125,4.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAkQgGgCgEgGQgDgFAAgHIAQAAQAAAFADADQADACAFAAQAFAAADgCQADgDAAgEQAAgDgCgCQgDgDgDgBIgHgDIgMgEQgFgBgDgEQgDgFAAgHQAAgGADgFQAEgGAFgCQAHgDAHAAQALAAAIAGQAHAGABAKIgRAAQAAgEgDgDQgEgCgDAAQgFAAgCACQgDACAAAFQAAADACACIAEADIAIADIAMAEQAFABAEAFQADAEAAAHQAAAGgDAGQgEAFgGADQgGADgIAAQgHAAgHgDg");
	this.shape_25.setTransform(46.3,5.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAoQgHgGgCgLIAPAAQABAFAFACQAEADAEgBQAHAAAEgDQAEgFAAgIIAAgJQgDAEgFADQgFADgGAAQgHAAgHgEQgGgEgEgHQgDgGgBgKQABgIADgIQAEgGAGgEQAHgEAHAAQAGAAAFADQAFACADAFIAAgJIAPAAIAAA7QAAAJgDAGQgDAHgHAEQgHAEgJAAQgMgBgJgFgAgHgdQgEACgCAEQgCAEAAAFQAAAGACAEQACAEAFACQADACADAAQAEAAAEgCQADgCADgEQACgDAAgGQAAgGgCgDQgDgEgDgDQgEgCgEAAQgDAAgEACg");
	this.shape_26.setTransform(36.55,7.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOAfIAAghQAAgHgEgEQgEgDgGAAQgFAAgEADQgDAEAAAHIAAAhIgQAAIAAg8IAQAAIAAAIQADgEAEgDQAFgCAFAAQAKABAHAGQAHAHAAAMIAAAjg");
	this.shape_27.setTransform(29.525,5.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHArIAAg8IAPAAIAAA8gAgGgaQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_28.setTransform(24.425,4.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQAfIAAg8IAPAAIAAAJQACgEAFgDQAFgCAGgBIAAARIgEAAQgIAAgDACQgCAEgBAIIAAAeg");
	this.shape_29.setTransform(20.95,5.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQAcQgGgDgDgGQgDgGAAgIIAAgiIAPAAIAAAgQAAAHAEAEQAEAEAFAAQAGAAAEgEQADgEAAgHIAAggIAQAAIAAA7IgQAAIAAgHQgDAEgEABQgFACgFAAQgHAAgFgCg");
	this.shape_30.setTransform(14.925,5.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAIAmQgSAAAAgTIAAgcIgHAAIAAgNIAHAAIAAgOIAPAAIAAAOIANAAIAAANIgNAAIAAAcIABAEIAFABIAHAAIAAAOg");
	this.shape_31.setTransform(9.225,5.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAfIAAg8IAQAAIAAAJQABgEAFgDQAFgCAGgBIAAARIgFAAQgGAAgEACQgDAEABAIIAAAeg");
	this.shape_32.setTransform(5.25,5.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAcQgGgDgDgGQgDgGAAgIIAAgiIAPAAIAAAgQAAAHAEAEQAEAEAFAAQAGAAAEgEQADgEAAgHIAAggIAQAAIAAA7IgQAAIAAgHQgDAEgEABQgFACgFAAQgHAAgFgCg");
	this.shape_33.setTransform(-0.825,5.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAmIgigzIAAAzIgQAAIAAhLIAQAAIAiAzIAAgzIAOAAIAABLg");
	this.shape_34.setTransform(-8.35,5.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_35.setTransform(142.075,-8.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgPAbQgGgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAGgEQAHgEAIAAQAJAAAHAEQAHADADAHQAEAHAAAJIgBAFIgrAAQABAGAEAEQAEAEAFAAQAIAAAEgIIAQAAQgCAJgIAGQgHAFgLAAQgIAAgHgEgAAPgFQgBgFgEgEQgEgEgGAAQgFAAgDAEQgEADgCAGIAdAAIAAAAg");
	this.shape_36.setTransform(137.3,-10.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAoQgJgGgBgKIAQAAQABAEADACQAEACAFABQAHAAAEgFQAEgDAAgJIAAgJQgDAFgFACQgFADgGAAQgHAAgHgEQgGgEgEgHQgDgGAAgJQAAgKADgGQAEgIAGgDQAHgFAHAAQAGAAAFADQAFADADAEIAAgJIAQAAIAAA8QAAAJgEAHQgEAGgGAEQgHAEgKgBQgMAAgHgFgAgHgdQgEACgBAEQgDAEAAAGQAAAFADAEQACAEADABQAEACADABQAEgBAEgCQAEgBACgDQACgEAAgGQAAgFgCgEQgCgEgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_37.setTransform(130.1,-8.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRAlQgGgEgEgHQgEgHAAgKQAAgJAEgGQAEgHAGgEQAHgEAHAAQAFAAAGADQAFADADAEIAAgdIAPAAIAABQIgPAAIAAgJQgDAEgFADQgFADgGAAQgIAAgGgEgAgHgFQgEACgCADQgCAEAAAFQAAAGACAEQACAEAFACQADACADAAQAFAAADgCQADgCADgEQACgEAAgFQAAgGgCgEQgDgDgDgCQgDgCgFAAQgDAAgEACg");
	this.shape_38.setTransform(122.7,-11.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAIAAAHAEQAGADAFAHQADAHAAAJIAAAFIgsAAQABAGAEAEQAEAEAFAAQAIAAAEgIIARAAQgDAJgHAGQgIAFgKAAQgIAAgHgEgAAOgFQAAgFgEgEQgEgEgGAAQgEAAgEAEQgFADgBAGIAcAAIAAAAg");
	this.shape_39.setTransform(115.85,-10.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAoIAAhPIAPAAIAABPg");
	this.shape_40.setTransform(111.025,-11.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AALAeIgLgpIgKApIgQAAIgSg7IAPAAIALAtIAMgtIAPAAIALAtIALgtIAOAAIgRA7g");
	this.shape_41.setTransform(104.925,-10.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPAbQgHgEgEgHQgEgHAAgJQAAgIAEgHQAEgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAHQAEAHAAAIQAAAJgEAHQgEAHgIAEQgHAEgIAAQgIAAgHgEgAgKgMQgFAEAAAIQAAAJAFAEQAEAFAGAAQAEAAADgCQAEgCACgEQACgEAAgGQAAgIgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_42.setTransform(96.875,-10.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAOAeIAAggQAAgHgEgEQgEgDgGgBQgFABgEADQgDAEAAAHIAAAgIgQAAIAAg7IAQAAIAAAIQADgEAEgCQAFgCAFAAQAKgBAHAHQAHAHAAAMIAAAig");
	this.shape_43.setTransform(89.875,-10.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAMAmIgagiIAAAiIgQAAIAAhLIAQAAIAAAiIAagiIATAAIgfAlIAfAmg");
	this.shape_44.setTransform(82.9,-11.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAoQgIgGgCgKIAQAAQABAEADACQAFACAEABQAHAAAEgFQAEgDAAgJIAAgJQgDAFgFACQgFADgGAAQgHAAgHgEQgGgEgEgHQgEgGABgJQgBgKAEgGQAEgIAGgDQAHgFAHAAQAGAAAFADQAFADADAEIAAgJIAQAAIAAA8QAAAJgEAHQgDAGgHAEQgHAEgKgBQgLAAgIgFgAgHgdQgDACgCAEQgDAEAAAGQAAAFADAEQACAEADABQAEACADABQAEgBAEgCQAEgBACgDQACgEAAgGQAAgFgCgEQgCgEgEgDQgEgCgEAAQgDAAgEACg");
	this.shape_45.setTransform(72.6,-8.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAOAeIAAggQAAgHgEgEQgEgDgGgBQgFABgEADQgDAEAAAHIAAAgIgQAAIAAg7IAQAAIAAAIQADgEAEgCQAFgCAFAAQAKgBAHAHQAHAHAAAMIAAAig");
	this.shape_46.setTransform(65.575,-10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHArIAAg8IAPAAIAAA8gAgGgaQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_47.setTransform(60.425,-11.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAIAlQgSAAAAgSIAAgdIgHAAIAAgMIAHAAIAAgPIAPAAIAAAPIANAAIAAAMIgNAAIAAAdIABAFIAFAAIAHAAIAAANg");
	this.shape_48.setTransform(56.775,-11);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAOAeIAAggQAAgHgEgEQgEgDgGgBQgFABgEADQgDAEAAAHIAAAgIgQAAIAAg7IAQAAIAAAIQADgEAEgCQAFgCAFAAQAKgBAHAHQAHAHAAAMIAAAig");
	this.shape_49.setTransform(51.175,-10.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgRAbQgGgEgEgHQgDgHAAgJQAAgIADgHQAEgHAGgEQAGgEAIAAQAGAAAFADQAFACADAFIAAgJIAPAAIAAA7IgPAAIAAgJQgDAFgFACQgFADgGAAQgIAAgGgEgAgHgPQgDACgDAEQgCAEAAAFQAAAFACAEQACAFAFACQADACADAAQAFAAADgCQADgCADgEQACgEAAgGQAAgEgCgEQgDgEgDgDQgDgCgFAAQgDAAgEACg");
	this.shape_50.setTransform(43.65,-10.275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHAoIAAhPIAPAAIAABPg");
	this.shape_51.setTransform(38.675,-11.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbAmIAAhLIAbAAQAJAAAGADQAGADAEAGQADAFAAAGQAAAGgDAGQgDAEgGADQgGAEgKAAIgLAAIAAAdgAgLgDIALAAQAGAAADgCQADgEAAgFQAAgLgMABIgLAAg");
	this.shape_52.setTransform(34.075,-11.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-14.4,-20.7,202.9,35.5), null);


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
	this.shape.graphics.f("#000000").s().p("AgMAfQgHgDgDgFQgEgFgBgGIARAAQABAEADADQADACAEAAQAFAAADgCQADgCAAgDQAAgDgEgCIgJgDIgMgEQgFgCgEgDQgDgEAAgGQAAgGADgEQADgFAGgDQAGgCAHAAQAMAAAHAGQAHAGABAKIgQAAQAAgEgDgDQgDgCgFAAQgEAAgCACQgDABAAADQAAAEAEABQADACAGACIAMAEQAFABADAEQAEAEAAAGQAAAGgEAFQgDAEgGADQgGACgIAAQgHAAgGgDg");
	this.shape.setTransform(182.825,11.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAHgEQAHgEAJAAQAKAAAIAEQAHAEAEAHQAEAIAAAKIAAAFIgwAAQABAHAEAEQAFAEAFAAQAKAAADgIIASAAQgCAKgJAGQgIAGgMAAQgJAAgHgEgAAQgFQAAgHgFgEQgFgEgGAAQgFAAgEAEQgFAEgBAHIAfAAIAAAAg");
	this.shape_1.setTransform(175.9,11.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAHgEQAIgEAJAAQAJAAAIAEQAHAEAEAHQAEAIAAAKIgBAFIgvAAQABAHAEAEQAFAEAFAAQAKAAADgIIASAAQgCAKgIAGQgJAGgLAAQgJAAgIgEgAAPgFQABgHgFgEQgEgEgHAAQgFAAgEAEQgFAEgBAHIAeAAIAAAAg");
	this.shape_2.setTransform(168.5,11.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAxIAOghIgbhAIATAAIAQAvIASgvIASAAIgpBhg");
	this.shape_3.setTransform(161.175,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAIgEQAHgEAJAAQAKAAAHAEQAIAEAFAIQAEAIAAAJQAAAKgEAIQgFAIgIAEQgIAEgJAAQgJAAgIgEgAgLgOQgFAGAAAIQAAAKAFAFQAEAFAHAAQAEAAAEgDQAEgCADgEQACgFAAgGQAAgIgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_4.setTransform(153.725,11.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAtIAAhYIAPAAIAABYg");
	this.shape_5.setTransform(148.275,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAyIAAhhIARAAIAAAJQADgFAGgDQAGgCAGAAQAJAAAGADQAHAFAFAIQAEAHgBALQABAJgEAIQgFAHgHAFQgGAEgJAAQgGAAgGgDQgGgDgDgFIAAAqgAgIgfQgEACgDAEQgCAFAAAGQAAAGACAEQADAEAEACQAEACAEABQAEgBAEgCQAEgCADgEQACgEAAgGQAAgHgCgEQgDgEgEgCQgEgDgEAAQgEAAgEADg");
	this.shape_6.setTransform(142.8,12.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAmAiIAAgkQAAgIgEgEQgEgEgHAAQgHAAgEAEQgEAEAAAIIAAAkIgPAAIAAgkQAAgIgEgEQgEgEgHAAQgHAAgEAEQgEAEAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAFgCQAFgDAGAAQAIAAAGAEQAFADAEAGQADgGAGgDQAGgEAIAAQAMAAAHAIQAIAHAAAOIAAAmg");
	this.shape_7.setTransform(132.275,11.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAqIAAhTIAvAAIAAAOIgfAAIAAAVIAcAAIAAAMIgcAAIAAAXIAfAAIAAANg");
	this.shape_8.setTransform(122.875,10.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVArQgJgGAAgMIAQAAQABAFAEADQAFACAGAAQAGAAAFgEQAFgEAAgJIAAgLQgEAFgFADQgGADgGAAQgIAAgIgEQgHgEgEgIQgDgHAAgKQAAgKADgIQAEgIAHgEQAIgEAIAAQAHAAAFADQAFADAEAEIAAgJIAQAAIAABCQABAJgEAHQgEAIgHAEQgHAEgLAAQgNAAgKgHgAgHggQgEACgDAEQgCAFAAAGQAAAGACAEQADAFAEABQAEADADAAQAFAAAEgDQAEgBACgEQADgFAAgGQAAgGgDgEQgCgFgEgCQgEgDgFAAQgDAAgEADg");
	this.shape_9.setTransform(112.5,12.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgEQgEgEgHAAQgGAAgEAEQgEAEAAAIIAAAkIgQAAIAAhCIAQAAIAAAJQADgFAGgCQAFgDAFAAQAMAAAHAIQAIAHAAAOIAAAmg");
	this.shape_10.setTransform(104.75,11.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAvIAAhBIAPAAIAABBgAgGgdQgDgDAAgEQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_11.setTransform(99.125,9.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMAfQgHgDgDgFQgEgFgBgGIARAAQABAEADADQADACAEAAQAFAAADgCQADgCAAgDQAAgDgEgCIgJgDIgMgEQgFgCgEgDQgDgEAAgGQAAgGADgEQADgFAGgDQAGgCAHAAQAMAAAHAGQAHAGABAKIgQAAQAAgEgDgDQgDgCgFAAQgEAAgCACQgDABAAADQAAAEAEABQADACAGACIAMAEQAFABADAEQAEAEAAAGQAAAGgEAFQgDAEgGADQgGACgIAAQgHAAgGgDg");
	this.shape_12.setTransform(94.175,11.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAvIAAhBIAPAAIAABBgAgGgdQgDgDAAgEQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_13.setTransform(89.325,9.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAmAiIAAgkQAAgIgEgEQgEgEgHAAQgHAAgEAEQgEAEAAAIIAAAkIgPAAIAAgkQAAgIgEgEQgEgEgHAAQgHAAgEAEQgEAEAAAIIAAAkIgRAAIAAhCIARAAIAAAIQADgEAFgCQAFgDAGAAQAIAAAGAEQAFADAEAGQADgGAGgDQAGgEAIAAQAMAAAHAIQAIAHAAAOIAAAmg");
	this.shape_14.setTransform(81.425,11.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAIgEQAHgEAJAAQAKAAAHAEQAIAEAFAIQAEAIAAAJQAAAKgEAIQgFAIgIAEQgIAEgJAAQgJAAgIgEgAgLgOQgFAGAAAIQAAAKAFAFQAEAFAHAAQAEAAAEgDQAEgCADgEQACgFAAgGQAAgIgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_15.setTransform(71.275,11.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAiIAAhCIAQAAIAAALQACgGAFgDQAGgDAHAAIAAASIgFAAQgIAAgEAEQgDADAAAJIAAAhg");
	this.shape_16.setTransform(65.35,11.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAqIAAhTIAdAAQAKAAAGADQAIAEADAGQADAGABAHQgBAHgDAGQgDAEgHAEQgHAEgKAAIgNAAIAAAggAgNgDIANAAQAHABACgEQAEgDAAgGQAAgMgNAAIgNAAg");
	this.shape_17.setTransform(59.3,10.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUArQgJgGgCgMIARAAQACAFAEADQAEACAFAAQAIAAAEgEQAFgEAAgJIAAgLQgDAFgGADQgGADgGAAQgJAAgGgEQgIgEgDgIQgFgHAAgKQAAgKAFgIQADgIAIgEQAGgEAJAAQAHAAAFADQAGADADAEIAAgJIARAAIAABCQgBAJgDAHQgEAIgHAEQgIAEgKAAQgOAAgIgHgAgIggQgDACgDAEQgCAFAAAGQAAAGACAEQADAFADABQAEADAEAAQAFAAAEgDQAEgBADgEQACgFAAgGQAAgGgCgEQgDgFgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_18.setTransform(187.6,-2.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgEQgEgEgHAAQgGAAgEAEQgEAEAAAIIAAAkIgRAAIAAhCIARAAIAAAJQAEgFAEgCQAGgDAFAAQAMAAAIAIQAGAHAAAOIAAAmg");
	this.shape_19.setTransform(179.85,-4.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAvIAAhCIAPAAIAABCgAgGgdQgDgDAAgFQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_20.setTransform(174.225,-5.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAxIAAhhIAQAAIAAAKQAEgEAFgDQAFgEAHAAQAIAAAIAFQAHAEAEAHQADAJAAAKQAAAJgDAHQgEAJgHAEQgIAEgIAAQgHAAgFgDQgFgDgEgEIAAAogAgIggQgEADgCAFQgDADAAAHQAAAGADAEQACAEAEACQAEADAEgBQAFABADgDQAEgCADgEQACgFAAgFQAAgGgCgFQgDgEgEgDQgDgCgFAAQgEAAgEACg");
	this.shape_21.setTransform(168.75,-2.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAIgEQAHgEAJAAQAKAAAHAEQAIAEAFAIQAEAIAAAJQAAAKgEAIQgFAIgIAEQgIAEgJAAQgJAAgIgEgAgLgOQgFAGAAAIQAAAKAFAFQAEAFAHAAQAEAAAEgDQAEgCADgEQACgFAAgGQAAgIgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_22.setTransform(160.625,-4.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAsIAAhYIAPAAIAABYg");
	this.shape_23.setTransform(155.175,-5.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAHgEQAHgEAKAAQAJAAAIAEQAHAEAEAHQAEAIAAAKIAAAFIgwAAQABAHAEAEQAFAEAFAAQAKAAADgIIASAAQgCAKgJAGQgIAGgLAAQgKAAgHgEgAAQgFQAAgHgFgEQgFgEgGAAQgFAAgEAEQgFAEgBAHIAfAAIAAAAg");
	this.shape_24.setTransform(149.8,-4.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAhIgZhBIASAAIAQAyIARgyIASAAIgZBBg");
	this.shape_25.setTransform(142.525,-4.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAeQgIgEgEgIQgEgIAAgKQAAgJAEgIQAEgIAIgEQAIgEAIAAQAKAAAHAEQAIAEAEAHQAEAIAAAKIAAAFIgwAAQAAAHAFAEQAEAEAGAAQAJAAAFgIIASAAQgDAKgIAGQgJAGgMAAQgIAAgIgEgAAQgFQgBgHgEgEQgEgEgHAAQgGAAgEAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_26.setTransform(135.25,-4.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjAqIAAhTIAdAAQAMAAAKAGQAKAEAFAKQAFAKABALQgBANgFAKQgFAIgKAGQgKAFgMAAgAgTAbIAMAAQAMABAHgIQAIgGAAgOQAAgMgIgHQgHgHgMgBIgMAAg");
	this.shape_27.setTransform(127.45,-5.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAoQgHgDgEgFQgEgGAAgJQAAgIAFgGQAFgGAJgEIgFgIQgBgDAAgFQAAgFADgFQADgFAFgCQAGgCAHgBQAHAAAFAEQAGACACAFQADAFAAAGIgQAAQAAgFgCgBQgCgCgDAAQgDAAgDACQgCABAAADIACAGIAGAIIAUATIAAAAIABgBIAGgJIASAAIgJANIgFAJIAVAUIgVAAIgJgJQgMALgQAAQgJgBgHgDgAgbARQAAAFAEAEQAEAEAHgBQAKAAAGgGIgTgVQgMAGAAAJg");
	this.shape_28.setTransform(115.675,-5.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVArQgIgGgCgMIARAAQABAFAFADQAEACAGAAQAGAAAFgEQAFgEAAgJIAAgLQgDAFgGADQgGADgGAAQgJAAgGgEQgHgEgFgIQgDgHAAgKQAAgKADgIQAFgIAHgEQAGgEAJAAQAGAAAGADQAGADADAEIAAgJIARAAIAABCQAAAJgEAHQgEAIgHAEQgHAEgLAAQgOAAgJgHgAgHggQgFACgCAEQgDAFABAGQgBAGADAEQACAFAFABQAEADADAAQAFAAAEgDQAEgBACgEQADgFAAgGQAAgGgDgEQgCgFgEgCQgEgDgFAAQgDAAgEADg");
	this.shape_29.setTransform(103.7,-2.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgEQgEgEgHAAQgGAAgEAEQgEAEAAAIIAAAkIgRAAIAAhCIARAAIAAAJQAEgFAFgCQAFgDAFAAQAMAAAHAIQAIAHgBAOIAAAmg");
	this.shape_30.setTransform(95.95,-4.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHAvIAAhCIAPAAIAABCgAgGgdQgDgDAAgFQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_31.setTransform(90.325,-5.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAiIAAgkQAAgIgEgEQgEgEgHAAQgGAAgEAEQgEAEAAAIIAAAkIgQAAIAAhCIAQAAIAAAJQADgFAFgCQAGgDAFAAQAMAAAIAIQAGAHABAOIAAAmg");
	this.shape_32.setTransform(84.75,-4.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAvIAAhCIAPAAIAABCgAgGgdQgDgDAAgFQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_33.setTransform(79.125,-5.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAeQgHgEgFgIQgEgIAAgKQAAgJAEgIQAFgIAHgEQAGgEAJAAQAGAAAGADQAGADADAEIAAgJIARAAIAABBIgRAAIAAgJQgDAEgGADQgGADgHAAQgHAAgHgEgAgHgQQgEACgDAEQgDAFABAFQgBAGADAEQADAFAEACQADADAEAAQAFAAAEgDQAEgCADgEQACgFAAgGQAAgFgCgEQgDgFgEgCQgEgDgFAAQgEAAgDADg");
	this.shape_34.setTransform(73.2,-4.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJApQgUABAAgVIAAgfIgIAAIAAgOIAIAAIAAgQIAQAAIAAAQIAPAAIAAAOIgPAAIAAAfQAAAEACABQABACAEAAIAIAAIAAANg");
	this.shape_35.setTransform(66.975,-5.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAeQgIgEgEgIQgEgIAAgKQAAgJAEgIQAEgIAIgEQAIgEAIAAQAKAAAHAEQAIAEAEAHQAEAIAAAKIAAAFIgwAAQAAAHAFAEQAEAEAGAAQAJAAAFgIIASAAQgDAKgIAGQgJAGgMAAQgIAAgIgEgAAQgFQgBgHgEgEQgEgEgHAAQgGAAgEAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_36.setTransform(61,-4.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAMAqIgSghIgIAAIAAAhIgQAAIAAhTIAeAAQAKAAAHAEQAGADAEAGQADAGAAAHQAAAIgFAHQgEAGgKACIAUAigAgOgCIAOAAQAGAAAEgEQADgDAAgGQAAgFgDgEQgEgDgGAAIgOAAg");
	this.shape_37.setTransform(53.625,-5.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(2.6,-15.7,236.3,36.599999999999994), null);


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
	this.shape.setTransform(33.625,-2.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgFgIQgEgIAAgLIAAgyIAUAAIAAAyQAAAIAEAEQAEAEAGAAQAHAAAEgEQAEgEAAgIIAAgyIAUAAIAAAyQAAALgEAIQgFAIgIAEQgIAEgKAAQgJAAgIgEg");
	this.shape_1.setTransform(25.725,-2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAqIAAhDIgXAAIAAgQIBAAAIAAAQIgWAAIAABDg");
	this.shape_2.setTransform(15.5,-2.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_3.setTransform(7.375,-2.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAqIgFgPIgfAAIgFAPIgVAAIAehTIAXAAIAeBTgAAKAMIgKgeIgJAeIATAAg");
	this.shape_4.setTransform(-1.525,-2.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAqIAAhDIgVAAIAAgQIA/AAIAAAQIgWAAIAABDg");
	this.shape_5.setTransform(-9.45,-2.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAqIghgzIAAAzIgVAAIAAhTIAVAAIAhAzIAAgzIAVAAIAABTg");
	this.shape_6.setTransform(-17.475,-2.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgFgKQgGgKAAgMQAAgLAGgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAFAKQAGAKAAALQAAAMgGAKQgFAKgKAGQgKAFgMAAQgLAAgKgFgAgPgRQgGAHAAAKQAAALAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-26.675,-2.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_8.setTransform(-35.975,-2.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DBA76").s().p("Al8BqQgpAAgegeQgdgdAAgpIAAgMQAAgpAdgdQAdgdAqAAIL6AAQApAAAdAdQAdAdAAApIAAAMQAAApgdAdQgdAegpAAg");
	this.shape_9.setTransform(-2.125,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-50.2,-12.4,96.2,21.5), null);


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
	this.ad_clickBtn.setTransform(160,25,1.0667,0.2,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).to({_off:true},241).wait(72));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(249.1,51.35,0.6944,0.6944,0,0,0,0.3,0.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regY:0.5,y:37.6,alpha:1},9,cjs.Ease.get(1)).wait(277));

	// F3
	this.instance_1 = new lib.F3();
	this.instance_1.setTransform(233.9,25.2,0.729,0.729,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({_off:false},0).to({y:28.85,alpha:1},10,cjs.Ease.get(1)).wait(85));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(193.5,9.55,0.6495,0.6495,0,0,0,0.2,0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({regY:0.2,y:17.55},9,cjs.Ease.get(1)).to({_off:true},90).wait(95));

	// F1
	this.instance_3 = new lib.F1();
	this.instance_3.setTransform(177.9,6.2,0.5905,0.5905,0,0,0,0.4,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({regY:0.4,y:13.6,alpha:1},9).to({_off:true},93).wait(193));

	// Line
	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(178.7,24,0.5314,0.5314,0,0,0,0.5,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(295));

	// Heading
	this.instance_5 = new lib.Heading();
	this.instance_5.setTransform(123.15,22.9,0.5845,0.5845,0,0,0,0.2,0.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:131.1,alpha:1},9,cjs.Ease.get(1)).wait(295));

	// Logo.png
	this.instance_6 = new lib.Logo_1();
	this.instance_6.setTransform(19.65,1.5,0.2038,0.2038,0,0,0,0.2,1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.8,regY:0.2,scaleX:0.2017,scaleY:0.2017,x:19.95,y:6.5,alpha:1},9,cjs.Ease.get(1)).wait(304));

	// Bg
	this.instance_7 = new lib.Bg_1();
	this.instance_7.setTransform(90.6,79.95,0.5314,0.5314,-90,0,0,-0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(313));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(159.9998,25.0001,0.4396,0.5556);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},241).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.1,320,163.5);


// stage content:
(lib.KSFY_214797_MM_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(160.0221,24.9755,0.4388,0.5506);

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
	this.instance.setTransform(150,52.1,1,0.4167,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,225.5);
// library properties:
lib.properties = {
	id: '975D5B5BE9CB1949972A01487C3AD994',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bg.png", id:"Bg"},
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