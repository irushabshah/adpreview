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
p.nominalBounds = new cjs.Rectangle(0,0,300,125);


(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,177);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,953,227);


(lib.SF_Logo = function() {
	this.initialize(img.SF_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1552,444);// helper functions:

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


(lib.Logo2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SF_Logo();
	this.instance.setTransform(0,52,0.0589,0.0589);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(0,52,91.5,26.200000000000003), null);


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
	this.instance.setTransform(-211,4,0.1332,0.1332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-211,4,126.9,30.299999999999997), null);


(lib.Img1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-2,-2,0.5756,0.5756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(-2,-2,172.7,101.9), null);


(lib.Head = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FCFAFA").s().p("Ag/B9QgVgUAAgkIAAgNIA2AAIAAANQAAAeAdAAQAdAAAAgeQAAgSgKgJQgIgIgegPQgjgRgOgUQgNgTgBgfQAAgjAWgVQAWgWAnAAQApAAAVAWQAVAVAAAkIAAAIIg2AAIAAgIQAAgegcAAQgbAAAAAcQAAAQALAJQAIAIAeAOQAkASANAUQANATAAAgQAAAlgWAVQgXAWgoAAQgpAAgWgWg");
	this.shape.setTransform(236.15,14.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAFA").s().p("AhKCPIAAkdIA5AAIAADrIBcAAIAAAyg");
	this.shape_1.setTransform(219.475,14.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFAFA").s().p("AhKCPIAAkdIA5AAIAADrIBcAAIAAAyg");
	this.shape_2.setTransform(202.825,14.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFAFA").s().p("AAnCPIgJg0Ig/AAIgJA0Ig3AAIA7kdIBMAAIA8EdgAAVAqIgWh+IgXB+IAtAAg");
	this.shape_3.setTransform(184.075,14.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFAFA").s().p("AhKCPIAAkdICVAAIAAAyIhcAAIAABEIBIAAIAAAxIhIAAIAAB2g");
	this.shape_4.setTransform(166.575,14.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFAFA").s().p("AAlCPIgnhiIgpBiIg2AAIBCiRIhAiMIA+AAIAkBaIAlhaIA3AAIg/CMIBCCRg");
	this.shape_5.setTransform(136.175,14.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFAFA").s().p("Ag+B7QgWgVAAgnIAAjPIA5AAIAADSQAAAdAcAAQAdAAAAgdIAAjSIA3AAIAADPQAAAngWAVQgWAWgpAAQgpAAgVgWg");
	this.shape_6.setTransform(116.525,14.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFAFA").s().p("Ag/B9QgWgVAAgnIAAiAQAAgnAWgWQAWgWApAAQAqAAAWAWQAWAWAAAnIAACAQAAAngWAVQgWAWgqAAQgpAAgWgWgAgchBIAACEQAAAeAcAAQAdAAAAgeIAAiEQAAgfgdAAQgcAAAAAfg");
	this.shape_7.setTransform(97.075,14.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFAFA").s().p("AgbCPIAAkdIA4AAIAAEdg");
	this.shape_8.setTransform(83.1,14.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCFAFA").s().p("Ag/B9QgVgUAAgkIAAgNIA2AAIAAANQAAAeAdAAQAdAAAAgeQAAgSgKgJQgIgIgdgPQgkgRgPgUQgMgTAAgfQAAgjAVgVQAWgWAnAAQApAAAWAWQAUAVAAAkIAAAIIg2AAIAAgIQAAgegcAAQgbAAAAAcQAAAQAKAJQAJAIAdAOQAlASAOAUQAMATAAAgQAAAlgWAVQgXAWgoAAQgpAAgWgWg");
	this.shape_9.setTransform(69.7,14.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFAFA").s().p("AAgCPIhFjKIAADKIgzAAIAAkdIBGAAIA4ClIAAilIAzAAIAAEdg");
	this.shape_10.setTransform(44.525,14.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFAFA").s().p("Ag+B7QgWgVAAgnIAAjPIA5AAIAADSQAAAdAcAAQAdAAAAgdIAAjSIA3AAIAADPQAAAngWAVQgWAWgpAAQgpAAgVgWg");
	this.shape_11.setTransform(24.325,14.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFAFA").s().p("AAdCPQgEgMAAgcIAAglQAAgVgIgIQgIgIgTAAIgUAAIAAByIg5AAIAAkdIBVAAQBTAAAABJIAAALQAAAsglAOIAAABQAlAKAAA7IAAAhQAAAaAHAOgAgegUIAVAAQAhAAAAggIAAgLQAAgdgbAAIgbAAg");
	this.shape_12.setTransform(5.275,14.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-14,-20.4,267.6,65.5), null);


(lib.F2_Txt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAKA0IgNgfIgIAKIAAAVIgUAAIAAhnIAUAAIAAA5IATgdIAYAAIgXAbIAYAwg");
	this.shape.setTransform(85.4,-24.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAXIAAgGIATAAIAAAHQABALAKAAQALAAAAgLIAAgRQAAgKgLAAQgKAAgBAKIgTAAIAEg7IA2AAIAAASIgkAAIgBAVQAFgJAMABQAXgBAAAbIAAASQAAAegfAAQgeAAAAgeg");
	this.shape_1.setTransform(77.75,-24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKATIAIgSIgHAAIAAgTIAUAAIAAASIgLATg");
	this.shape_2.setTransform(69.475,-19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLA1IAAg6IgLAAIAAgRIALAAIAAgHQAAgXAXAAQAGAAAFACIAAARIgHgBQgIAAAAAIIAAAEIAPAAIAAARIgPAAIAAA6g");
	this.shape_3.setTransform(64.975,-24.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_4.setTransform(60.6,-24.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAiQgGgGAAgJQAAgSAWgFQAKgDAEgCQACgCAAgCQAAgJgIAAQgIAAAAAKIgTAAQAAgNAIgGQAHgIAMABQAQAAAGAHQAHAHAAAPIAAAYQAAAPACAIIgTAAQgBgBAAgMQgFAPgPAAQgJAAgGgGgAgBAHQgJADAAAGQAAAHAIAAQAKAAAAgOIAAgFIgJADg");
	this.shape_5.setTransform(55.225,-23.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALA0IAAgsIgVAAIAAAsIgVAAIAAhnIAVAAIAAAqIAVAAIAAgqIAVAAIAABng");
	this.shape_6.setTransform(47.725,-24.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKATIAIgSIgHAAIAAgTIAUAAIAAASIgLATg");
	this.shape_7.setTransform(39.125,-19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_8.setTransform(35.45,-24.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_9.setTransform(31.9,-24.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcANIAAgzIAUAAIAAAwQAAAGACADQABACAFAAQAKAAAAgNIAAguIATAAIAABLIgRAAIgBgNQgDAPgPAAQgWAAABgag");
	this.shape_10.setTransform(26.4,-23.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIA3AAIAAASIgiAAIAAAZIAaAAIAAARIgaAAIAAArg");
	this.shape_11.setTransform(19.625,-24.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2_Txt, new cjs.Rectangle(14,-36.4,77.2,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcA4QgKgKAAgRIAAg4QAAgnAmAAQASAAALAKQAKAKAAAQIgZAAQAAgNgNAAQgNAAAAARIAAASQAHgMAPABQAdgBAAAhIAAAQQAAARgKAKQgKALgTgBQgSABgKgLgAgMAQIAAAOQAAAOAMAAQANAAAAgOIAAgOQAAgOgNAAQgMAAAAAOg");
	this.shape.setTransform(155.675,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBCIAAgSQgBgNAGgJQAGgMAQgMQANgJAEgHQAGgGgBgJQABgNgNAAQgNAAAAAPIAAAKIgYAAIAAgKQAAgSAKgJQAJgLASAAQATAAAKAKQAJAKAAAPQABANgJAMQgHAJgUAQQgJAIgDAFQgDAFAAAEIAAABIAwAAIAAAXg");
	this.shape_1.setTransform(146.55,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcA4QgKgKAAgRIAAg5QAAgSAKgKQAKgKASAAQATAAAKAKQAKAKAAASIAAA5QAAARgKAKQgKALgTgBQgSABgKgLgAgMgeIAAA8QAAAOAMAAQAOAAAAgOIAAg8QAAgNgOAAQgMAAAAANg");
	this.shape_2.setTransform(137.4,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBCIAAgSQAAgNAGgJQAGgMAQgMQANgJAEgHQAFgGABgJQAAgNgNAAQgNAAAAAPIAAAKIgZAAIAAgKQABgSAJgJQALgLARAAQATAAAKAKQAKAKAAAPQAAANgIAMQgIAJgUAQQgJAIgDAFQgDAFAAAEIAAABIAwAAIAAAXg");
	this.shape_3.setTransform(128.35,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAYIAJgWIgJAAIAAgZIAZAAIAAAXIgNAYg");
	this.shape_4.setTransform(118.125,33.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA4QgKgKAAgRIAAg5QAAgSAKgKQAKgKASAAQATAAAKAKQAKAKAAASIAAA5QAAARgKAKQgKALgTgBQgSABgKgLgAgMgeIAAA8QAAAOAMAAQAOAAgBgOIAAg8QABgNgOAAQgMAAAAANg");
	this.shape_5.setTransform(111.15,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBCIAAgSQgBgNAGgJQAGgMAQgMQANgJAEgHQAGgGgBgJQAAgNgMAAQgNAAAAAPIAAAKIgYAAIAAgKQAAgSAKgJQAKgLARAAQATAAAKAKQAJAKAAAPQABANgJAMQgHAJgUAQQgIAIgEAFQgDAFAAAEIAAABIAwAAIAAAXg");
	this.shape_6.setTransform(102.1,27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANBBQgCgFAAgNIAAgRQAAgJgDgEQgEgEgIAAIgJAAIAAA0IgaAAIAAiBIAnAAQAkAAABAhIAAAFQAAAUgRAGIAAAAQARAFAAAbIAAAPQAAALADAHgAgNgJIAJAAQAPAAAAgOIAAgFQAAgNgLAAIgNAAg");
	this.shape_7.setTransform(89.75,27.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBBIAAiBIBFAAIAAAXIgrAAIAAAeIAiAAIAAAVIgiAAIAAAgIArAAIAAAXg");
	this.shape_8.setTransform(80.675,27.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIAnAAQAmAAAAAhIAAACQAAAUgRAGIAAAAQATAGAAAYIAAACQAAAkgmAAgAgNAqIAPAAQAMAAAAgNIAAgDQAAgJgDgEQgEgDgJAAIgLAAgAgNgMIAKAAQAPAAAAgOIAAgCQgBgNgMAAIgMAAg");
	this.shape_9.setTransform(71.65,27.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBBIAAhgIgUBgIgVAAIgThgIAABgIgWAAIAAiBIAkAAIARBaIAQhaIAkAAIAACBg");
	this.shape_10.setTransform(60.3,27.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBBIAAiBIBFAAIAAAXIgrAAIAAAeIAiAAIAAAVIgiAAIAAAgIArAAIAAAXg");
	this.shape_11.setTransform(49.925,27.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBBIAAhqIgbAAIAAgXIBPAAIAAAXIgbAAIAABqg");
	this.shape_12.setTransform(41,27.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglBBIAAiBIAlAAQAmAAAAAkIAAAIQAAAjgmAAIgLAAIAAAygAgLgHIALAAQANAAAAgNIAAgIQAAgNgNAAIgLAAg");
	this.shape_13.setTransform(32.275,27.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBBIAAiBIBFAAIAAAXIgrAAIAAAeIAiAAIAAAVIgiAAIAAAgIArAAIAAAXg");
	this.shape_14.setTransform(23.375,27.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcA4QgJgJAAgQIAAgGIAYAAIAAAGQAAAOANAAQAMAAAAgOQABgIgFgEQgEgEgMgGQgRgIgGgIQgGgKAAgOQAAgPAKgKQAKgKARAAQASAAAKAKQAKAKgBAQIAAAEIgYAAIAAgEQAAgOgNAAQgLAAAAANQAAAHAEAFQAFADAMAHQARAHAGAJQAGAJgBAOQAAARgKAJQgKALgSgBQgSABgKgLg");
	this.shape_15.setTransform(14.45,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(6.2,11.6,157.9,29.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAQA5IghhXIAABXIgRAAIAAhxIAYAAIAcBKIAAhKIARAAIAABxg");
	this.shape.setTransform(-51.9,84.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAyQgJgIAAgPIAAg0QAAgQAJgIQAJgJAPAAQARAAAIAJQAJAIAAAQIAAA0QAAAPgJAIQgIAIgRAAQgPAAgJgIgAgOgaIAAA1QAAAPAOAAQAPAAAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_1.setTransform(-60.45,84.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPA5IAAgyIgeAAIAAAyIgSAAIAAhxIASAAIAAAwIAeAAIAAgwIATAAIAABxg");
	this.shape_2.setTransform(-68.875,84.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_3.setTransform(-77.025,84.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_4.setTransform(-85.025,84.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgEgIABIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgFIAMAAQAQAAAAgQIAAgEQAAgPgOAAIgOAAg");
	this.shape_5.setTransform(-93.175,84.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_6.setTransform(-101.725,84.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbA5IAAhZIgUBZIgPAAIgUhZIAABZIgQAAIAAhxIAaAAIASBUIAThUIAaAAIAABxg");
	this.shape_7.setTransform(-111.325,84.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgEgIABIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgFIAMAAQAQAAAAgQIAAgEQAAgPgOAAIgOAAg");
	this.shape_8.setTransform(-123.775,84.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAPIghAAIAAAhIApAAIAAARg");
	this.shape_9.setTransform(-131.6,84.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(-137.45,84.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbA5IAAhZIgUBZIgPAAIgUhZIAABZIgQAAIAAhxIAaAAIASBUIAThUIAaAAIAABxg");
	this.shape_11.setTransform(-144.775,84.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAPIghAAIAAAhIApAAIAAARg");
	this.shape_12.setTransform(-153.75,84.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgEgIABIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgFIAMAAQAQAAAAgQIAAgEQAAgPgOAAIgOAAg");
	this.shape_13.setTransform(-161.725,84.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggA5IAAhxIAgAAQAgAAAAAfIAAAGQAAAeggAAIgOAAIAAAugAgOgEIAOAAQAHAAAEgDQADgEAAgIIAAgGQAAgHgDgEQgEgDgHgBIgOAAg");
	this.shape_14.setTransform(-169.8,84.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgNIAAgGIARAAIAAAGQAAAGAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgGQAAgJgEgEQgEgDgMgGQgOgHgGgHQgFgIAAgMQAAgOAIgIQAJgJAOAAQAQAAAIAJQAIAIAAAOIAAADIgRAAIAAgCQAAgPgPgBQgFAAgEAFQgEADAAAHQAAAHAFAEQADAEAMAGQAPAGAGAIQAFAIAAAMQAAAOgJAIQgIAJgQgBQgPAAgJgIg");
	this.shape_15.setTransform(4.175,66.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAWIgEgrIARAAIgEArg");
	this.shape_16.setTransform(-1.4,62.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg3IgLA3IAWAAg");
	this.shape_17.setTransform(-7.325,66.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_18.setTransform(-15.325,66.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAyQgJgIAAgPIAAg0QAAgQAJgIQAJgJAPAAQARAAAIAJQAJAIAAAQIAAA0QAAAPgJAIQgIAJgRgBQgPABgJgJgAgOgaIAAA1QAAAPAOABQAPgBAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_19.setTransform(-23.25,66.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA5IgUg2IgNARIAAAlIgSAAIAAhxIASAAIAAAzIAhgzIATAAIgcArIAdBGg");
	this.shape_20.setTransform(-31.35,66.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg3IgLA3IAWAAg");
	this.shape_21.setTransform(-40.125,66.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggA5IAAhxIAgAAQAhAAAAAgIAAAyQAAAfghAAgAgOAoIAOAAQAIABADgEQAEgEAAgHIAAgyQAAgJgEgDQgDgEgIAAIgOAAg");
	this.shape_22.setTransform(-48.325,66.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA5IAAgxIgeAAIAAAxIgSAAIAAhxIASAAIAAAwIAeAAIAAgwIATAAIAABxg");
	this.shape_23.setTransform(-59.875,66.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_24.setTransform(-68.025,66.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAxQgIgIAAgPIAAhTIASAAIAABUQAAAPAOAAQAPAAAAgPIAAhUIASAAIAABTQAAAPgIAIQgJAJgQAAQgPAAgJgJg");
	this.shape_25.setTransform(-76,66.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAyQgJgIAAgPIAAg0QAAgQAJgIQAJgJAPAAQARAAAIAJQAJAIAAAQIAAA0QAAAPgJAIQgIAJgRgBQgPABgJgJgAgOgaIAAA1QAAAPAOABQAPgBAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_26.setTransform(-84.3,66.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgNIAAgGIARAAIAAAGQAAAGAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgGQAAgJgEgEQgEgDgMgGQgOgHgGgHQgFgIAAgMQAAgOAIgIQAJgJAOAAQAQAAAIAJQAIAIAAAOIAAADIgRAAIAAgCQAAgPgPgBQgFAAgEAFQgEADAAAHQAAAHAFAEQADAEAMAGQAPAGAGAIQAFAIAAAMQAAAOgJAIQgIAJgQgBQgPAAgJgIg");
	this.shape_27.setTransform(-92.275,66.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_28.setTransform(-102.55,66.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAyQgJgIAAgPIAAg0QAAgQAJgIQAIgJAPAAQAQAAAIAJQAJAIAAAQIAAAIIgSAAIAAgJQAAgQgPAAQgNAAAAAQIAAA1QAAAQANAAQAPAAAAgQIAAgMIASAAIAAAMQAAAPgJAIQgIAIgQAAQgPAAgIgIg");
	this.shape_29.setTransform(-110.375,66.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPA5IgghXIAABXIgQAAIAAhxIAWAAIAcBKIAAhKIARAAIAABxg");
	this.shape_30.setTransform(-118.8,66.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_31.setTransform(-126.7,66.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_32.setTransform(-132.6,66.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgDgIAAIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAADQAAAUgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgGIAMAAQAQAAAAgPIAAgEQAAgPgOAAIgOAAg");
	this.shape_33.setTransform(-138.475,66.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_34.setTransform(-146.3,66.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAfAAQAhAAAAAfIAAAGQAAAeghAAIgNAAIAAAugAgNgEIANAAQAHAAAEgDQADgEAAgIIAAgGQAAgIgDgDQgEgEgHAAIgNAAg");
	this.shape_35.setTransform(-154,66.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASA5IgSgqIgTAqIgSAAIAcg5Igbg4IAUAAIARAoIASgoIASAAIgaA4IAbA5g");
	this.shape_36.setTransform(-162.425,66.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_37.setTransform(-170.05,66.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-177,53,188.3,43.2), null);


(lib.Cta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAQA7QgCgFAAgLIAAgQQAAgJgEgEQgEgEgJAAIgMAAIAAAxIgUAAIAAh1IAiAAQAjAAgBAeIAAAEQAAAUgRAEIAAAAQARAEAAAZIAAAOQABALACAFgAgPgGIAMAAQARAAAAgQIAAgEQAAgPgPAAIgOAAg");
	this.shape.setTransform(72.35,6.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAARIgrAAIAAAhIAjAAIAAAQIgjAAIAAAiIArAAIAAARg");
	this.shape_1.setTransform(63.95,6.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJA7IAAhkIgbAAIAAgRIBIAAIAAARIgaAAIAABkg");
	this.shape_2.setTransform(55.7,6.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZA0QgJgIAAgPIAAgFIATAAIAAAFQgBAHAEAEQAFAFAHAAQAGAAAFgFQAEgEAAgHQAAgIgEgEQgEgEgNgGQgQgHgGgIQgFgIAAgMQAAgPAIgIQAKgJAPAAQARAAAJAJQAIAIABAPIAAADIgTAAIAAgDQgBgPgPAAQgGAAgEAEQgEAEAAAGQAAAIAFAEQAEAEANAGQAQAHAFAIQAGAIAAANQAAAPgJAIQgJAJgRAAQgQAAgJgJg");
	this.shape_3.setTransform(47.55,6.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_4.setTransform(41.375,6.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZA0QgJgJAAgPIAAg2QAAgQAJgJQAJgJAQAAQARAAAJAJQAJAJAAAQIAAAGIgSAAIAAgHQAAgQgQAAQgPAAAAAQIAAA3QAAAQAPAAQAQAAAAgQIAAgRIgPAAIAAgRIAhAAIAAAiQAAAPgJAJQgJAJgRAAQgQAAgJgJg");
	this.shape_5.setTransform(35.075,6.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAARIgrAAIAAAhIAjAAIAAAQIgjAAIAAAiIArAAIAAARg");
	this.shape_6.setTransform(26.95,6.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQA7QgCgFAAgLIAAgQQAAgJgEgEQgFgEgIAAIgNAAIAAAxIgTAAIAAh1IAjAAQAhAAABAeIAAAEQgBAUgQAEIAAAAQAQAEABAZIAAAOQgBALADAFgAgQgGIANAAQARAAAAgQIAAgEQAAgPgPAAIgPAAg");
	this.shape_7.setTransform(18.5,6.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#173E6B").s().p("AmvB4QgKAAgHgHQgHgHAAgKIAAi/QAAgKAHgHQAHgHAKAAINfAAQAKAAAHAHQAHAHAAAKIAAC/QAAAKgHAHQgHAHgKAAg");
	this.shape_8.setTransform(45.575,7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(0,-7.7,91.2,27.7), null);


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

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(215));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(282,57.35,0.64,0.64,0,0,0,38.1,11.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:281.9,y:39.75,alpha:1},9,cjs.Ease.get(1)).wait(161));

	// Logo2
	this.instance_1 = new lib.Logo2();
	this.instance_1.setTransform(246.3,-29.65,1,1,0,0,0,71.5,20.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143).to({_off:false},0).to({x:274.8,alpha:1},9,cjs.Ease.get(1)).wait(63));

	// F2
	this.instance_2 = new lib.F2_Txt();
	this.instance_2.setTransform(176.25,81.75,1,1,0,0,0,73.9,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({x:204.25,alpha:1},9,cjs.Ease.get(1)).wait(126));

	// F1_D
	this.instance_3 = new lib.F2();
	this.instance_3.setTransform(267.6,24.3,1,1,0,0,0,54.6,36.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({x:212.6,alpha:1},9,cjs.Ease.get(1)).to({_off:true},63).wait(72));

	// F1
	this.instance_4 = new lib.F1();
	this.instance_4.setTransform(320.05,19.65,0.5,0.5,0,0,0,52.6,38);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,x:278.5,y:14.15,alpha:1},9,cjs.Ease.get(1)).to({_off:true},26).wait(144));

	// Head
	this.instance_5 = new lib.Head();
	this.instance_5.setTransform(186.15,29.5,0.5,0.5,0,0,0,74.7,50.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({x:219.15,alpha:1},9,cjs.Ease.get(1)).to({_off:true},44).wait(144));

	// Logo
	this.instance_6 = new lib.Logo_1();
	this.instance_6.setTransform(251,-9.7,1,1,0,0,0,36,17.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({y:22.2,alpha:1},9,cjs.Ease.get(1)).wait(197));

	// BG
	this.instance_7 = new lib.BG();
	this.instance_7.setTransform(122,242,1.6,1.6,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(215));

	// Img 1
	this.instance_8 = new lib.Img1_1();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(215));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(159.9998,25.0001,0.4396,0.5556);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-238,379.1,483.4);


// stage content:
(lib.KSFY_220800_MM_320x50 = function(mode,startPosition,loop,reversed) {
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
		{src:"BG.png", id:"BG"},
		{src:"Img1.jpg", id:"Img1"},
		{src:"Logo.png", id:"Logo"},
		{src:"SF_Logo.png", id:"SF_Logo"}
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