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
p.nominalBounds = new cjs.Rectangle(0,0,300,451);


(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,270);


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
	this.instance.setTransform(19,46,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(19,46,248.3,71.1), null);


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
	this.instance.setTransform(-178,20,0.2369,0.2369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-178,20,225.8,53.8), null);


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
	this.shape.graphics.f("#173E6B").s().p("AmtAFIAAgJINbAAIAAAJg");
	this.shape.setTransform(-20.5,237.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-63.5,237,86,1), null);


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
	this.instance.setTransform(8,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(8,-33,300,270), null);


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
	this.shape.graphics.f("#FCFAFA").s().p("Ag/B9QgVgUAAgkIAAgNIA2AAIAAANQAAAeAdAAQAdAAAAgeQAAgSgKgJQgIgIgdgPQgkgRgPgUQgMgTAAgfQAAgjAVgVQAWgWAoAAQAoAAAWAWQAUAVAAAkIAAAIIg2AAIAAgIQAAgegcAAQgbAAAAAcQAAAQAKAJQAJAIAdAOQAlASAOAUQAMATAAAgQAAAlgWAVQgXAWgoAAQgpAAgWgWg");
	this.shape.setTransform(246.1,46.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAFA").s().p("AhKCPIAAkdIA5AAIAADrIBcAAIAAAyg");
	this.shape_1.setTransform(229.425,46.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFAFA").s().p("AhKCPIAAkdIA5AAIAADrIBcAAIAAAyg");
	this.shape_2.setTransform(212.775,46.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFAFA").s().p("AAnCPIgJg0Ig/AAIgJA0Ig3AAIA7kdIBMAAIA8EdgAAVAqIgWh+IgXB+IAtAAg");
	this.shape_3.setTransform(194.025,46.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFAFA").s().p("AhKCPIAAkdICVAAIAAAyIhcAAIAABEIBIAAIAAAxIhIAAIAAB2g");
	this.shape_4.setTransform(176.525,46.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFAFA").s().p("AAlCPIgnhiIgpBiIg2AAIBCiRIhAiMIA+AAIAkBaIAlhaIA3AAIg/CMIBCCRg");
	this.shape_5.setTransform(146.125,46.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFAFA").s().p("Ag+B7QgWgVAAgnIAAjPIA5AAIAADSQAAAdAcAAQAdAAAAgdIAAjSIA3AAIAADPQAAAngWAVQgWAWgpAAQgpAAgVgWg");
	this.shape_6.setTransform(126.475,46.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFAFA").s().p("Ag/B9QgWgVAAgnIAAiAQAAgnAWgWQAWgWApAAQAqAAAWAWQAWAWAAAnIAACAQAAAngWAVQgWAWgqAAQgpAAgWgWgAgchBIAACEQAAAeAcAAQAdAAAAgeIAAiEQAAgfgdAAQgcAAAAAfg");
	this.shape_7.setTransform(107.025,46.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFAFA").s().p("AgcCPIAAkdIA5AAIAAEdg");
	this.shape_8.setTransform(93.05,46.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCFAFA").s().p("Ag/B9QgVgUAAgkIAAgNIA2AAIAAANQAAAeAdAAQAdAAAAgeQAAgSgKgJQgIgIgegPQgjgRgOgUQgNgTgBgfQABgjAVgVQAWgWAoAAQAoAAAVAWQAVAVAAAkIAAAIIg2AAIAAgIQAAgegcAAQgbAAAAAcQAAAQALAJQAIAIAeAOQAkASAOAUQAMATAAAgQAAAlgWAVQgXAWgoAAQgpAAgWgWg");
	this.shape_9.setTransform(79.65,46.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFAFA").s().p("AAgCPIhFjKIAADKIgzAAIAAkdIBGAAIA4ClIAAilIAzAAIAAEdg");
	this.shape_10.setTransform(54.475,46.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFAFA").s().p("Ag+B7QgWgVAAgnIAAjPIA5AAIAADSQAAAdAcAAQAdAAAAgdIAAjSIA3AAIAADPQAAAngWAVQgWAWgpAAQgpAAgVgWg");
	this.shape_11.setTransform(34.275,46.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFAFA").s().p("AAdCPQgEgMAAgcIAAglQAAgVgIgIQgIgIgTAAIgUAAIAAByIg5AAIAAkdIBVAAQBTAAAABJIAAALQAAAsglAOIAAABQAlAKAAA7IAAAhQAAAaAHAOgAgegUIAVAAQAhAAAAggIAAgLQAAgdgbAAIgbAAg");
	this.shape_12.setTransform(15.225,46.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-4.4,12.1,267.5,65.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUBpIgcg/IgQAVIAAAqIgoAAIAAjRIAoAAIAABzIApg6IAuAAIgsA3IAuBhg");
	this.shape.setTransform(207.875,15.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AuIAAgMIAnAAIAAANQAAAXAWAAQAVAAgBgXIAAggQABgWgVAAQgUAAgCAVIgnAAIAHh3IBtAAIAAAkIhHAAIgEApQAMgQAYAAQAvAAAAA2IAAAkQAAA8g/AAQg9AAAAg8g");
	this.shape_1.setTransform(192.55,15.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAnIAQgkIgOAAIAAgpIApAAIAAAmIgXAng");
	this.shape_2.setTransform(175.95,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBqIAAh2IgWAAIAAghIAWAAIAAgNQAAgvAvAAQAMAAAKAEIAAAiQgHgCgHAAQgPAAAAAQIAAAIIAdAAIAAAhIgdAAIAAB2g");
	this.shape_3.setTransform(166.925,15.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBpIAAjRIAnAAIAADRg");
	this.shape_4.setTransform(158.175,15.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBFQgMgLAAgTQAAgmAtgKQAUgFAHgEQAGgEAAgGQAAgSgRAAQgQAAAAAVIgmAAQAAgaAOgOQAPgNAaAAQAeAAAOAPQAMAOAAAeIAAAwQAAAgAFAPIglAAQgDgBgBgZQgJAdgeAAQgUAAgLgKgAgCAPQgSAFAAAMQAAAOAQAAQAVAAAAgbIAAgMQgHAEgMAEg");
	this.shape_5.setTransform(147.425,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBpIAAhYIgsAAIAABYIgqAAIAAjRIAqAAIAABVIAsAAIAAhVIApAAIAADRg");
	this.shape_6.setTransform(132.375,15.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAnIAPgkIgOAAIAAgpIApAAIAAAmIgXAng");
	this.shape_7.setTransform(115.1,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBpIAAjRIAnAAIAADRg");
	this.shape_8.setTransform(107.825,15.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBpIAAjRIAnAAIAADRg");
	this.shape_9.setTransform(100.675,15.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6AbIAAhoIApAAIAABhQAAANADAFQAEAFAJAAQAUAAAAgbIAAhdIAoAAIAACYIgjAAIgBgbQgJAegeAAQgqAAAAgzg");
	this.shape_10.setTransform(89.65,18.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BpIAAjRIBtAAIAAAlIhDAAIAAAyIA0AAIAAAjIg0AAIAABXg");
	this.shape_11.setTransform(76.075,15.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2_Txt, new cjs.Rectangle(64.6,-8.4,154.8,44.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgrBVQgPgOAAgbIAAhVQAAg6A6AAQAcAAAPAPQAPAOAAAZIglAAQAAgUgUAAQgUAAAAAaIAAAbQAMgSAXAAQArAAAAAyIAAAYQAAAbgPAOQgQAPgcAAQgbAAgQgPgAgTAYIAAAWQAAAUATAAQAUAAAAgUIAAgVQAAgWgUAAQgTAAAAAVg");
	this.shape.setTransform(227.975,68.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BiIAAgZQAAgTAIgQQAKgQAYgSQATgQAHgIQAIgLAAgNQAAgTgTAAQgUAAAAAVIAAAQIglAAIAAgQQAAgaAPgOQAPgPAbgBQAcABAPAPQAPANAAAYQAAAUgMARQgLAOgeAYQgNAMgGAIQgFAHAAAGIAAABIBJAAIAAAig");
	this.shape_1.setTransform(214.3,68.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBVQgQgOAAgbIAAhXQAAgaAQgPQAPgPAbAAQAcAAAQAPQAPAPAAAaIAABXQAAAbgPAOQgQAPgcAAQgbAAgPgPgAgTgsIAABZQAAAVATAAQAUAAAAgVIAAhZQAAgVgUAAQgTAAAAAVg");
	this.shape_2.setTransform(200.575,68.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BiIAAgZQAAgTAJgQQAIgQAYgSQAUgQAHgIQAIgLAAgNQAAgTgTAAQgUAAAAAVIAAAQIgkAAIAAgQQAAgaAOgOQAPgPAbgBQAcABAPAPQAPANAAAYQAAAUgMARQgLAOgdAYQgOAMgGAIQgFAHAAAGIAAABIBIAAIAAAig");
	this.shape_3.setTransform(187,68.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAkIAPghIgOAAIAAgmIAmAAIAAAjIgVAkg");
	this.shape_4.setTransform(171.7,78.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBVQgQgOAAgbIAAhXQAAgaAQgPQAPgPAbAAQAcAAAQAPQAPAPAAAaIAABXQAAAbgPAOQgQAPgcAAQgbAAgPgPgAgTgsIAABZQAAAVATAAQAUAAAAgVIAAhZQAAgVgUAAQgTAAAAAVg");
	this.shape_5.setTransform(161.225,68.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BiIAAgZQAAgTAJgQQAIgQAYgSQAUgQAHgIQAIgLAAgNQAAgTgTAAQgUAAAAAVIAAAQIgkAAIAAgQQAAgaAOgOQAPgPAbgBQAcABAQAPQAOANAAAYQAAAUgMARQgLAOgdAYQgOAMgGAIQgFAHAAAGIAAABIBJAAIAAAig");
	this.shape_6.setTransform(147.65,68.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBhQgDgIAAgTIAAgZQAAgOgGgGQgFgFgNAAIgNAAIAABNIgnAAIAAjBIA6AAQA4AAAAAyIAAAGQAAAfgZAJIAAABQAaAGgBAoIAAAXQAAARAFAKgAgUgOIAOAAQAWABABgWIAAgIQgBgTgRAAIgTAAg");
	this.shape_7.setTransform(129.1,68.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIBpAAIAAAiIhCAAIAAAtIA0AAIAAAhIg0AAIAAAvIBCAAIAAAig");
	this.shape_8.setTransform(115.525,68.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7BhIAAjBIA7AAQA4AAAAAwIAAAEQAAAegZAIIAAABQAdAJAAAkIAAAEQAAA1g6AAgAgUA/IAWAAQATAAAAgTIAAgGQAAgOgFgEQgGgGgNAAIgRAAgAgUgSIAPAAQAWAAAAgWIAAgDQAAgTgTAAIgSAAg");
	this.shape_9.setTransform(101.975,68.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsBhIAAiPIgdCPIggAAIgciPIAACPIgiAAIAAjBIA2AAIAZCGIAaiGIA2AAIAADBg");
	this.shape_10.setTransform(85,68.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIBpAAIAAAiIhCAAIAAAtIA0AAIAAAhIg0AAIAAAvIBCAAIAAAig");
	this.shape_11.setTransform(69.375,68.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBhIAAifIgpAAIAAgiIB3AAIAAAiIgpAAIAACfg");
	this.shape_12.setTransform(55.975,68.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BhIAAjBIA4AAQA5AAAAA1IAAAMQAAA1g5AAIgSAAIAABLgAgSgLIASAAQATAAAAgUIAAgMQAAgTgTAAIgSAAg");
	this.shape_13.setTransform(42.925,68.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BhIAAjBIBpAAIAAAiIhCAAIAAAtIA0AAIAAAhIg0AAIAAAvIBCAAIAAAig");
	this.shape_14.setTransform(29.575,68.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrBVQgOgOAAgYIAAgJIAlAAIAAAJQAAAUAUAAQATAAAAgUQAAgMgHgGQgFgGgUgKQgYgLgKgOQgJgNAAgVQAAgYAPgOQAPgPAaAAQAcAAAOAPQAOAOAAAZIAAAFIgkAAIAAgFQAAgVgTAAQgSAAAAAUQAAAKAHAHQAFAFAUAKQAZAMAJANQAJANAAAWQAAAZgPAOQgQAPgbAAQgcAAgPgPg");
	this.shape_15.setTransform(16.125,68.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(3.8,45.2,236.79999999999998,44.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAXBSIgwh8IAAB8IgYAAIAAijIAiAAIApBrIAAhrIAYAAIAACjg");
	this.shape.setTransform(61.725,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBIQgMgMAAgWIAAhLQAAgWAMgMQANgMAWAAQAXAAANAMQAMAMAAAWIAABLQAAAWgMAMQgNAMgXAAQgWAAgNgMgAgVgmIAABNQAAAWAVAAQAVAAAAgWIAAhNQAAgWgVAAQgVAAAAAWg");
	this.shape_1.setTransform(49.45,111.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBSIAAhHIgrAAIAABHIgbAAIAAijIAbAAIAABFIArAAIAAhFIAbAAIAACjg");
	this.shape_2.setTransform(37.275,111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBSIAAiMIgkAAIAAgXIBhAAIAAAXIgkAAIAACMg");
	this.shape_3.setTransform(25.575,111);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBSIgGggIgqAAIgHAgIgZAAIAkijIAjAAIAkCjgAAQAbIgQhQIgRBQIAhAAg");
	this.shape_4.setTransform(14,111);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBSQgDgHAAgQIAAgVQAAgNgGgGQgFgGgNAAIgQAAIAABFIgbAAIAAijIAvAAQAuAAAAApIAAAGQAAAcgXAGIAAABQAYAFAAAhIAAAUQAAAPADAIgAgVgIIAQAAQAYgBAAgWIAAgFQAAgWgUAAIgUAAg");
	this.shape_5.setTransform(2.275,111);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBSIgGggIgqAAIgHAgIgaAAIAlijIAjAAIAkCjgAAQAbIgQhQIgRBQIAhAAg");
	this.shape_6.setTransform(-10,111);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoBSIAAiAIgeCAIgVAAIgeiAIAACAIgXAAIAAijIAmAAIAaB5IAbh5IAmAAIAACjg");
	this.shape_7.setTransform(-23.825,111);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBSQgDgHAAgQIAAgVQAAgNgGgGQgFgGgNAAIgQAAIAABFIgbAAIAAijIAvAAQAuAAAAApIAAAGQAAAcgXAGIAAABQAYAFAAAhIAAAUQAAAPADAIgAgVgIIAQAAQAYgBAAgWIAAgFQAAgWgUAAIgUAAg");
	this.shape_8.setTransform(-41.775,111);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBSIAAijIBVAAIAAAXIg7AAIAAAuIAwAAIAAAXIgwAAIAAAvIA7AAIAAAYg");
	this.shape_9.setTransform(-53.025,111);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBSIAAijIAZAAIAACjg");
	this.shape_10.setTransform(-61.475,111);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBSIAAiAIgeCAIgVAAIgeiAIAACAIgXAAIAAijIAmAAIAaB5IAbh5IAmAAIAACjg");
	this.shape_11.setTransform(-72.025,111);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBSIAAijIBVAAIAAAXIg7AAIAAAuIAwAAIAAAXIgwAAIAAAvIA7AAIAAAYg");
	this.shape_12.setTransform(-84.925,111);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBSQgDgHAAgQIAAgVQAAgNgGgGQgFgGgNAAIgQAAIAABFIgbAAIAAijIAvAAQAuAAAAApIAAAGQAAAcgXAGIAAABQAYAFAAAhIAAAUQAAAPADAIgAgVgIIAQAAQAYgBAAgWIAAgFQAAgWgUAAIgUAAg");
	this.shape_13.setTransform(-96.425,111);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguBSIAAijIAuAAQAvAAAAAtIAAAIQAAArgvABIgTAAIAABCgAgTgHIATAAQAKABAGgGQAEgEAAgMIAAgIQAAgMgEgEQgGgFgKgBIgTAAg");
	this.shape_14.setTransform(-108.05,111);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiBIQgMgLAAgVIAAgHIAZAAIAAAHQAAAKAFAFQAGAGAKAAQAJAAAGgFQAGgGAAgKQAAgLgGgGQgGgGgRgIQgWgJgIgMQgIgLAAgRQAAgUAMgLQANgMAVAAQAXAAAMAMQALALAAAVIAAAEIgZAAIAAgEQAAgWgVAAQgIAAgGAGQgFAGAAAJQAAAKAGAGQAGAFASAJQAVAKAIALQAHALAAASQAAAUgMAMQgNAMgWAAQgWAAgMgMg");
	this.shape_15.setTransform(102.475,85.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAfIgHg+IAaAAIgFA+g");
	this.shape_16.setTransform(94.45,80.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcBSIgHggIgrAAIgGAgIgZAAIAkijIAjAAIAkCjgAAQAbIgQhQIgQBQIAgAAg");
	this.shape_17.setTransform(85.9,85.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBSIAAiMIgkAAIAAgXIBhAAIAAAXIgkAAIAACMg");
	this.shape_18.setTransform(74.475,85.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjBIQgMgMAAgWIAAhLQAAgWAMgMQAMgMAXAAQAXAAAMAMQANAMAAAWIAABLQAAAWgNAMQgMAMgXAAQgXAAgMgMgAgVgmIAABNQAAAWAVAAQAVAAAAgWIAAhNQAAgWgVAAQgVAAAAAWg");
	this.shape_19.setTransform(63.05,85.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXBSIgdhOIgSAZIAAA1IgbAAIAAijIAbAAIAABKIAwhKIAbAAIgoA+IApBlg");
	this.shape_20.setTransform(51.3,85.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBSIgHggIgqAAIgHAgIgaAAIAlijIAjAAIAlCjgAAQAbIgQhQIgQBQIAgAAg");
	this.shape_21.setTransform(38.7,85.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvBSIAAijIAwAAQAvAAAAAuIAABIQAAAtgvAAgAgVA6IAVAAQALAAAGgEQAEgGAAgLIAAhIQAAgMgEgFQgGgFgLgBIgVAAg");
	this.shape_22.setTransform(26.85,85.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWBSIAAhHIgrAAIAABHIgbAAIAAijIAbAAIAABFIArAAIAAhFIAbAAIAACjg");
	this.shape_23.setTransform(10.275,85.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMBSIAAiMIgkAAIAAgXIBhAAIAAAXIgkAAIAACMg");
	this.shape_24.setTransform(-1.475,85.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiBHQgNgMAAgWIAAh3IAbAAIAAB4QAAAWAVAAQAVAAAAgWIAAh4IAaAAIAAB3QgBAWgLAMQgNAMgXAAQgXAAgLgMg");
	this.shape_25.setTransform(-12.95,85.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjBIQgNgMAAgWIAAhLQAAgWANgMQANgMAWAAQAXAAANAMQANAMgBAWIAABLQABAWgNAMQgNAMgXAAQgWAAgNgMgAgVgmIAABNQAAAWAVAAQAWAAgBgWIAAhNQABgWgWAAQgVAAAAAWg");
	this.shape_26.setTransform(-24.9,85.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiBIQgMgLAAgVIAAgHIAZAAIAAAHQAAAKAFAFQAGAGAKAAQAJAAAGgFQAGgGAAgKQAAgLgGgGQgGgGgRgIQgWgJgIgMQgIgLAAgRQAAgUAMgLQANgMAVAAQAXAAAMAMQALALAAAVIAAAEIgZAAIAAgEQAAgWgVAAQgIAAgGAGQgFAGAAAJQAAAKAGAGQAGAFASAJQAVAKAIALQAHALAAASQAAAUgMAMQgNAMgWAAQgWAAgMgMg");
	this.shape_27.setTransform(-36.375,85.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgqBSIAAijIBVAAIAAAXIg7AAIAAAuIAwAAIAAAXIgwAAIAAAvIA7AAIAAAYg");
	this.shape_28.setTransform(-51.225,85.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiBIQgMgMAAgWIAAhLQAAgWAMgMQAMgMAWAAQAXAAAMAMQAMAMAAAWIAAAMIgaAAIAAgNQABgXgWAAQgTAAAAAXIAABNQAAAWATAAQAWAAgBgWIAAgSIAaAAIAAARQAAAWgMAMQgMAMgXAAQgWAAgMgMg");
	this.shape_29.setTransform(-62.5,85.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAXBSIgwh8IAAB8IgYAAIAAijIAiAAIApBrIAAhrIAYAAIAACjg");
	this.shape_30.setTransform(-74.625,85.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqBSIAAijIBVAAIAAAXIg7AAIAAAuIAwAAIAAAXIgwAAIAAAvIA7AAIAAAYg");
	this.shape_31.setTransform(-86.025,85.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMBSIAAijIAZAAIAACjg");
	this.shape_32.setTransform(-94.425,85.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWBSQgDgHAAgQIAAgVQAAgNgGgGQgFgGgNAAIgQAAIAABFIgbAAIAAijIAvAAQAuAAAAApIAAAGQAAAcgXAGIAAABQAYAFAAAhIAAAUQAAAPADAIgAgVgIIAQAAQAYgBAAgWIAAgFQAAgWgUAAIgUAAg");
	this.shape_33.setTransform(-102.875,85.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgqBSIAAijIBVAAIAAAXIg7AAIAAAuIAwAAIAAAXIgwAAIAAAvIA7AAIAAAYg");
	this.shape_34.setTransform(-114.175,85.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AguBSIAAijIAuAAQAvAAAAAtIAAAIQAAArgvABIgUAAIAABCgAgUgHIAUAAQALABAEgGQAFgEABgMIAAgIQgBgMgFgEQgEgFgLgBIgUAAg");
	this.shape_35.setTransform(-125.3,85.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAaBSIgag9IgcA9IgaAAIAohSIgmhRIAdAAIAYA5IAag5IAaAAIgmBRIAoBSg");
	this.shape_36.setTransform(-137.375,85.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgqBSIAAijIBVAAIAAAXIg7AAIAAAuIAwAAIAAAXIgwAAIAAAvIA7AAIAAAYg");
	this.shape_37.setTransform(-148.425,85.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-158.5,66,271,62.19999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATBHQgCgHAAgNIAAgSQAAgMgFgFQgFgEgLAAIgPAAIAAA7IgXAAIAAiNIApAAQApAAAAAkIAAAFQAAAXgUAGIAAAAQAVAFAAAdIAAARQAAANACAHgAgTgIIAPAAQAVABAAgUIAAgEQAAgTgSABIgSAAg");
	this.shape.setTransform(150.675,30.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBHIAAiNIBMAAIAAAVIg0AAIAAAnIAqAAIAAATIgqAAIAAAqIA0AAIAAAUg");
	this.shape_1.setTransform(140.6,30.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBHIAAh4IghAAIAAgVIBXAAIAAAVIggAAIAAB4g");
	this.shape_2.setTransform(130.675,30.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA+QgLgKAAgRIAAgGIAWAAIAAAGQABAIAEAFQAGAGAIgBQAJAAAFgEQAEgGAAgIQABgKgGgFQgEgFgRgHQgTgIgGgKQgIgJABgPQgBgRAMgLQALgKASAAQAVAAAKAKQALALAAARIAAAEIgXAAIAAgEQAAgSgTAAQgHAAgFAFQgFAFAAAHQAAAJAGAGQAFAEAPAHQAUAJAGAJQAHAKAAAPQAAASgLAKQgLALgUAAQgTAAgLgLg");
	this.shape_3.setTransform(120.95,30.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBHIAAiNIAXAAIAACNg");
	this.shape_4.setTransform(113.575,30.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA+QgLgKAAgTIAAhAQgBgUALgLQAMgKATAAQAUAAALAKQAMALgBAUIAAAHIgWAAIAAgIQAAgUgTAAQgTAAABAUIAABCQgBATATAAQATAAAAgTIAAgVIgSAAIAAgVIAoAAIAAApQAAATgLAKQgLALgUAAQgTAAgLgLg");
	this.shape_5.setTransform(105.95,30.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBHIAAiNIBLAAIAAAVIg0AAIAAAnIAqAAIAAATIgqAAIAAAqIA0AAIAAAUg");
	this.shape_6.setTransform(96.25,30.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBHQgCgHAAgNIAAgSQAAgMgFgFQgFgEgLAAIgPAAIAAA7IgXAAIAAiNIApAAQApAAAAAkIAAAFQAAAXgUAGIAAAAQAVAFAAAdIAAARQAAANACAHgAgTgIIAPAAQAVABAAgUIAAgEQAAgTgSABIgSAAg");
	this.shape_7.setTransform(86.075,30.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#173E6B").s().p("AptCsQgOAAgLgJQgJgLAAgOIAAkTQAAgOAJgLQALgJAOAAITbAAQAOAAAKAJQAKALAAAOIAAETQAAAOgKALQgKAJgOAAg");
	this.shape_8.setTransform(118.625,30.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(53,13.2,131.3,34.400000000000006), null);


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
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ad_bg, new cjs.Rectangle(0,0,300,250), null);


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
	this.ad_clickBtn.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(191));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(64.95,569.05,1,1,0,0,0,38,11.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({x:71.3,y:541.55,alpha:1},9,cjs.Ease.get(1)).wait(110));

	// Logo2
	this.instance_1 = new lib.Logo2();
	this.instance_1.setTransform(51.85,435.4,1,1,0,0,0,71.5,20.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({x:80.25,alpha:1},9,cjs.Ease.get(1)).wait(119));

	// F2
	this.instance_2 = new lib.F2_Txt();
	this.instance_2.setTransform(52.25,423.75,1,1,0,0,0,73.9,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({x:81.95,alpha:1},9,cjs.Ease.get(1)).wait(128));

	// F1_D
	this.instance_3 = new lib.F2();
	this.instance_3.setTransform(81.25,327.25,1,1,0,0,0,54.6,36.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({x:84.35,alpha:1},9,cjs.Ease.get(1)).wait(137));

	// F1
	this.instance_4 = new lib.F1();
	this.instance_4.setTransform(227.55,246.8,1,1,0,0,0,52.6,37.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(146));

	// Line
	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(166.95,197.4,1,1,0,0,0,0.5,43);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({x:172.9,alpha:1},9,cjs.Ease.get(1)).wait(155));

	// Head
	this.instance_6 = new lib.Head();
	this.instance_6.setTransform(30.7,246.15,1,1,0,0,0,74.7,50.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:97.3,alpha:1},9,cjs.Ease.get(1)).wait(164));

	// Logo
	this.instance_7 = new lib.Logo_1();
	this.instance_7.setTransform(251,-9.7,1,1,0,0,0,36,17.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:22.2,alpha:1},9,cjs.Ease.get(1)).wait(173));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.setTransform(0,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191));

	// Img 1
	this.instance_9 = new lib.Img1_1();
	this.instance_9.setTransform(142,158,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(191));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-6.9,348.4,614.9);


// stage content:
(lib.KSFY_220800_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,299.9992);

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
	this.instance.setTransform(150,300,1,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,151,301);
// library properties:
lib.properties = {
	id: 'DF7533DE48737A4391F9B7075B15E698',
	width: 300,
	height: 600,
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
an.compositions['DF7533DE48737A4391F9B7075B15E698'] = {
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