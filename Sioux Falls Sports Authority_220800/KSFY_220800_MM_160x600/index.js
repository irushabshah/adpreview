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
	this.instance.setTransform(-2,49,0.0921,0.0921);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-2,49,143,40.900000000000006), null);


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
	this.instance.setTransform(-209,6,0.1567,0.1567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-209,6,149.4,35.6), null);


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
	this.shape.setTransform(-86.5,243.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-129.5,243,86,1), null);


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

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(8,-33,300,177), null);


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
	this.shape.graphics.f("#FCFAFA").s().p("Ag0BoQgSgRAAgeIAAgLIAtAAIAAALQAAAZAYAAQAYAAAAgZQAAgPgIgHQgHgHgYgMQgegOgMgRQgLgQAAgZQAAgeASgRQATgSAgAAQAiAAASASQARARAAAeIAAAHIgtAAIAAgGQAAgagXAAQgWAAAAAYQAAANAIAIQAHAGAZAMQAeAOALARQALAQAAAbQAAAfgTARQgTASghAAQgiAAgSgSg");
	this.shape.setTransform(86.925,54.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIAwAAIAADDIBNAAIAAAqg");
	this.shape_1.setTransform(72.975,54.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIAwAAIAADDIBNAAIAAAqg");
	this.shape_2.setTransform(59.125,54.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFAFA").s().p("AAhB3IgIgrIg1AAIgHArIgtAAIAxjtIA/AAIAxDtgAARAjIgShpIgTBpIAlAAg");
	this.shape_3.setTransform(43.525,54.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIB9AAIAAApIhNAAIAAA5IA8AAIAAApIg8AAIAABig");
	this.shape_4.setTransform(28.925,54.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFAFA").s().p("AAfB3IgghRIgjBRIgtAAIA3h5Ig1h0IA0AAIAdBLIAghLIAuAAIg1B0IA3B5g");
	this.shape_5.setTransform(112.65,25.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFAFA").s().p("Ag0BmQgSgSAAggIAAisIAwAAIAACvQAAAYAXAAQAYAAAAgYIAAivIAuAAIAACsQAAAggSASQgTATgiAAQgiAAgSgTg");
	this.shape_6.setTransform(96.275,25.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFAFA").s().p("Ag0BoQgTgSAAggIAAhrQAAggATgSQASgSAiAAQAjAAASASQATASAAAgIAABrQAAAggTASQgSASgjAAQgiAAgSgSgAgXg2IAABtQgBAaAYAAQAZAAgBgaIAAhtQABgagZAAQgYAAABAag");
	this.shape_7.setTransform(80.1,25.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFAFA").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_8.setTransform(68.425,25.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCFAFA").s().p("Ag0BoQgSgRAAgeIAAgLIAtAAIAAALQAAAZAYAAQAYAAAAgZQAAgPgIgHQgHgHgYgMQgegOgMgRQgLgQAAgZQAAgeASgRQATgSAgAAQAiAAASASQARARAAAeIAAAHIgtAAIAAgGQAAgagXAAQgWAAAAAYQAAANAIAIQAHAGAZAMQAeAOALARQALAQAAAbQAAAfgTARQgTASghAAQgiAAgSgSg");
	this.shape_9.setTransform(57.275,25.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFAFA").s().p("AAaB3Ig5ioIAACoIgqAAIAAjtIA7AAIAuCJIAAiJIArAAIAADtg");
	this.shape_10.setTransform(36.25,25.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFAFA").s().p("Ag0BmQgSgSAAggIAAisIAwAAIAACvQAAAYAXAAQAYAAAAgYIAAivIAuAAIAACsQAAAggSASQgTATgiAAQgiAAgSgTg");
	this.shape_11.setTransform(19.475,25.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFAFA").s().p("AAZB3QgEgKAAgYIAAgeQAAgRgHgHQgHgHgPAAIgRAAIAABfIgvAAIAAjtIBGAAQBFAAAAA9IAAAJQAAAlgeALIAAABQAfAIAAAxIAAAcQAAAVAFAMgAgZgRIASAAQAbAAAAgaIAAgJQAAgZgWAAIgXAAg");
	this.shape_12.setTransform(3.575,25.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-15.2,-3.4,145.1,83.30000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAQBPIgWgwIgMAQIAAAgIgeAAIAAidIAeAAIAABXIAfgsIAiAAIggApIAiBJg");
	this.shape.setTransform(123.45,24.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAjIAAgJIAeAAIAAAKQAAARAQAAQAPAAAAgRIAAgZQAAgQgPAAQgPAAgBAQIgeAAIAGhaIBSAAIAAAcIg2AAIgCAfQAIgMASAAQAjAAAAAoIAAAbQAAAtgvAAQguAAAAgtg");
	this.shape_1.setTransform(111.975,24.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAdIAMgbIgLAAIAAgeIAeAAIAAAcIgRAdg");
	this.shape_2.setTransform(99.475,31.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBQIAAhZIgQAAIAAgZIAQAAIAAgJQAAgkAjAAQAJAAAHADIAAAaIgKgCQgMAAAAANIAAAFIAWAAIAAAZIgWAAIAABZg");
	this.shape_3.setTransform(92.725,24.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBPIAAidIAdAAIAACdg");
	this.shape_4.setTransform(86.15,24.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAzQgJgHAAgOQABgdAhgHQAPgEAFgDQAFgDAAgEQAAgNgNAAQgMAAAAAOIgcAAQAAgSAKgLQALgKATAAQAXAAALALQAJALgBAWIAAAkQAAAYAEAMIgcAAQgCgCAAgSQgHAWgXAAQgPAAgIgJgAgCAMQgNADAAAJQAAALAMAAQAQAAAAgUIAAgJQgGADgJADg");
	this.shape_5.setTransform(78.1,26.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARBPIAAhCIghAAIAABCIgfAAIAAidIAfAAIAABAIAhAAIAAhAIAfAAIAACdg");
	this.shape_6.setTransform(66.775,24.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAdIAMgbIgLAAIAAgeIAeAAIAAAcIgRAdg");
	this.shape_7.setTransform(53.825,31.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBPIAAidIAdAAIAACdg");
	this.shape_8.setTransform(48.35,24.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOBPIAAidIAdAAIAACdg");
	this.shape_9.setTransform(42.95,24.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrAUIAAhNIAeAAIAABIQAAAKADADQADAEAHAAQAOAAAAgUIAAhFIAeAAIAABxIgaAAIgBgUQgGAWgXAAQgfAAAAgmg");
	this.shape_10.setTransform(34.725,26.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoBPIAAidIBSAAIAAAcIgzAAIAAAlIAoAAIAAAbIgoAAIAABBg");
	this.shape_11.setTransform(24.55,24.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2_Txt, new cjs.Rectangle(15.9,6.6,116.19999999999999,33.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgdA7QgLgKAAgTIAAg6QAAgoAoAAQATAAALAKQAKAJAAASIgZAAQAAgOgOAAQgOAAAAASIAAATQAIgNAQAAQAeAAAAAjIAAAQQAAATgLAKQgLAKgTAAQgTAAgKgKgAgNAQIAAAQQAAAOANAAQAOAAAAgOIAAgPQAAgPgOAAQgNAAAAAOg");
	this.shape.setTransform(68.325,79.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBEIAAgRQAAgOAGgKQAGgMARgNQANgKAFgGQAFgHAAgJQAAgOgNAAQgNAAAAAPIAAALIgaAAIAAgLQAAgSAKgKQALgKASAAQAUAAAKAKQAKAKAAAQQAAAOgIAMQgIAJgUARQgKAIgDAFQgEAFAAAFIAAABIAyAAIAAAXg");
	this.shape_1.setTransform(58.875,79.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA7QgLgKAAgTIAAg8QAAgSALgKQAKgKATAAQAUAAAKAKQALAKAAASIAAA8QAAATgLAKQgKAKgUAAQgTAAgKgKgAgNgfIAAA+QAAAPANAAQAOAAAAgPIAAg+QAAgOgOAAQgNAAAAAOg");
	this.shape_2.setTransform(49.325,79.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBEIAAgRQAAgOAGgKQAGgMARgNQANgKAFgGQAFgHAAgJQAAgOgNAAQgNAAAAAPIAAALIgaAAIAAgLQAAgSAKgKQALgKASAAQAUAAAKAKQAKAKAAAQQAAAOgIAMQgIAJgUARQgKAIgDAFQgEAFAAAFIAAABIAyAAIAAAXg");
	this.shape_3.setTransform(39.875,79.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAZIALgXIgKAAIAAgaIAaAAIAAAYIgOAZg");
	this.shape_4.setTransform(109.25,65.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA7QgLgKAAgTIAAg8QAAgSALgKQAKgKATAAQAUAAAKAKQALAKAAASIAAA8QAAATgLAKQgKAKgUAAQgTAAgKgKgAgNgfIAAA+QAAAPANAAQAOAAAAgPIAAg+QAAgOgOAAQgNAAAAAOg");
	this.shape_5.setTransform(101.975,59.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBEIAAgRQAAgOAGgKQAGgMARgNQANgKAFgGQAFgHAAgJQAAgOgNAAQgNAAAAAPIAAALIgaAAIAAgLQAAgSAKgKQALgKASAAQAUAAAKAKQAKAKAAAQQAAAOgIAMQgIAJgUARQgKAIgDAFQgEAFAAAFIAAABIAyAAIAAAXg");
	this.shape_6.setTransform(92.575,59.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBDQgDgFAAgOIAAgRQABgKgEgDQgEgEgIgBIgKAAIAAA2IgbAAIAAiGIApAAQAmAAAAAjIAAAFQAAAVgRAGIAAABQARAEAAAcIAAAQQAAAMAEAGgAgOgJIALAAQAOAAAAgPIAAgFQAAgOgLAAIgOAAg");
	this.shape_7.setTransform(79.7,59.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBDIAAiGIBJAAIAAAYIguAAIAAAgIAkAAIAAAWIgkAAIAAAhIAuAAIAAAXg");
	this.shape_8.setTransform(70.275,59.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpBDIAAiGIApAAQAnABAAAhIAAADQAAAVgSAFIAAABQAVAFAAAaIAAACQAAAlgpAAgAgOAsIAPAAQAOAAAAgOIAAgDQAAgJgEgFQgEgDgIAAIgNAAgAgOgNIALAAQAPAAAAgOIAAgCQAAgOgMAAIgOAAg");
	this.shape_9.setTransform(60.8,59.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBDIAAhjIgUBjIgVAAIgUhjIAABjIgYAAIAAiGIAmAAIARBeIASheIAmAAIAACGg");
	this.shape_10.setTransform(49.075,59.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBDIAAiGIBJAAIAAAYIguAAIAAAgIAkAAIAAAWIgkAAIAAAhIAuAAIAAAXg");
	this.shape_11.setTransform(38.225,59.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBDIAAhuIgcAAIAAgYIBSAAIAAAYIgcAAIAABug");
	this.shape_12.setTransform(28.95,59.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBDIAAiGIAnAAQAoAAAAAmIAAAIQAAAlgoAAIgMAAIAAAzgAgMgHIAMAAQANAAAAgOIAAgIQAAgOgNAAIgMAAg");
	this.shape_13.setTransform(19.85,59.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkBDIAAiGIBJAAIAAAYIguAAIAAAgIAkAAIAAAWIgkAAIAAAhIAuAAIAAAXg");
	this.shape_14.setTransform(10.575,59.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdA7QgKgKAAgRIAAgGIAZAAIAAAGQAAAOAOAAQANAAAAgOQAAgIgEgEQgEgEgOgHQgRgIgGgJQgGgJAAgPQAAgRAKgJQAKgKASAAQATAAALAKQAJAJAAASIAAAEIgZAAIAAgEQAAgPgNAAQgNAAAAAOQAAAHAFAFQAEADAOAHQARAIAGAJQAGAJAAAQQAAARgKAKQgLAKgTAAQgTAAgKgKg");
	this.shape_15.setTransform(1.225,59.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-7.4,43,123.2,51.400000000000006), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAQA5IghhWIAABWIgRAAIAAhxIAYAAIAcBKIAAhKIARAAIAABxg");
	this.shape.setTransform(-35.25,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAyQgJgIABgQIAAgzQgBgPAJgJQAJgIAPAAQAQAAAJAIQAIAJABAPIAAAzQgBAQgIAIQgJAJgQAAQgPAAgJgJgAgOgaIAAA1QAAAPAOAAQAPAAAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_1.setTransform(-43.85,110.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPA5IAAgyIgeAAIAAAyIgSAAIAAhxIASAAIAAAwIAeAAIAAgwIATAAIAABxg");
	this.shape_2.setTransform(-52.225,110.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA5IAAhgIgZAAIAAgRIBDAAIAAARIgZAAIAABgg");
	this.shape_3.setTransform(-60.375,110.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_4.setTransform(-68.375,110.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgPQAAgJgEgEQgEgEgIAAIgMAAIAAAwIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAAAQAQAEAAAXIAAAOQAAALADAFgAgPgFIAMAAQAQAAAAgQIAAgEQAAgOgOAAIgOAAg");
	this.shape_5.setTransform(-76.525,110.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_6.setTransform(-85.075,110.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbA5IAAhYIgUBYIgPAAIgUhYIAABYIgQAAIAAhxIAaAAIASBUIAThUIAaAAIAABxg");
	this.shape_7.setTransform(-94.675,110.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgPQAAgJgEgEQgEgEgIAAIgMAAIAAAwIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAAAQAQAEAAAXIAAAOQAAALADAFgAgPgFIAMAAQAQAAAAgQIAAgEQAAgOgOAAIgOAAg");
	this.shape_8.setTransform(-107.125,110.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAARIgpAAIAAAfIAhAAIAAAPIghAAIAAAiIApAAIAAAQg");
	this.shape_9.setTransform(-114.95,110.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(-120.8,110.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbA5IAAhYIgUBYIgPAAIgUhYIAABYIgQAAIAAhxIAaAAIASBUIAThUIAaAAIAABxg");
	this.shape_11.setTransform(-128.125,110.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAARIgpAAIAAAfIAhAAIAAAPIghAAIAAAiIApAAIAAAQg");
	this.shape_12.setTransform(-137.1,110.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgPQAAgJgEgEQgEgEgIAAIgMAAIAAAwIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAAAQAQAEAAAXIAAAOQAAALADAFgAgPgFIAMAAQAQAAAAgQIAAgEQAAgOgOAAIgOAAg");
	this.shape_13.setTransform(-145.075,110.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAfAAQAhAAAAAfIAAAGQAAAeghAAIgNAAIAAAugAgNgEIANAAQAHAAADgEQAEgDAAgIIAAgGQAAgIgEgDQgDgDgHAAIgNAAg");
	this.shape_14.setTransform(-153.2,110.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgNIAAgGIARAAIAAAGQAAAGAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgGQAAgJgEgEQgEgDgMgHQgOgGgGgHQgFgIAAgMQAAgOAIgIQAJgJAOAAQAQAAAIAJQAIAIAAAOIAAAEIgRAAIAAgDQAAgQgPABQgFAAgEADQgEAEAAAGQAAAHAFAFQADADAMAHQAPAGAGAIQAFAIAAAMQAAAOgJAIQgIAIgQAAQgPABgJgJg");
	this.shape_15.setTransform(-45.875,92.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAWIgEgrIASAAIgFArg");
	this.shape_16.setTransform(-51.45,89.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_17.setTransform(-57.375,92.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_18.setTransform(-65.325,92.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAyQgJgIAAgPIAAg0QAAgQAJgIQAJgJAPAAQARAAAIAJQAJAIAAAQIAAA0QAAAPgJAIQgIAIgRAAQgPAAgJgIgAgOgaIAAA1QAAAPAOAAQAPAAAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_19.setTransform(-73.3,92.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA5IgVg2IgMASIAAAkIgSAAIAAhxIASAAIAAA0IAig0IATAAIgdArIAdBGg");
	this.shape_20.setTransform(-81.4,92.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_21.setTransform(-90.175,92.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggA5IAAhxIAgAAQAhAAAAAgIAAAxQAAAgghAAgAgOAoIAOAAQAIAAADgDQAEgDAAgJIAAgxQAAgJgEgDQgDgDgIgBIgOAAg");
	this.shape_22.setTransform(-98.375,92.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA5IAAgyIgeAAIAAAyIgSAAIAAhxIASAAIAAAwIAeAAIAAgwIATAAIAABxg");
	this.shape_23.setTransform(-109.925,92.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_24.setTransform(-118.075,92.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAxQgIgIAAgPIAAhTIASAAIAABUQAAAPAOAAQAPAAAAgPIAAhUIASAAIAABTQAAAPgIAIQgJAJgQAAQgPAAgJgJg");
	this.shape_25.setTransform(-126.05,92.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgPIAAg0QAAgQAIgIQAJgJAPAAQAQAAAJAJQAJAIgBAQIAAA0QABAPgJAIQgJAIgQAAQgPAAgJgIgAgOgaIAAA1QAAAPAOAAQAPAAAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_26.setTransform(-134.35,92.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgNIAAgGIARAAIAAAGQAAAGAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgGQAAgJgEgEQgEgDgMgHQgOgGgGgHQgFgIAAgMQAAgOAIgIQAJgJAOAAQAQAAAIAJQAIAIAAAOIAAAEIgRAAIAAgDQAAgQgPABQgFAAgEADQgEAEAAAGQAAAHAFAFQADADAMAHQAPAGAGAIQAFAIAAAMQAAAOgJAIQgIAIgQAAQgPABgJgJg");
	this.shape_27.setTransform(-142.325,92.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_28.setTransform(-60.15,75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAyQgJgIAAgPIAAg0QAAgQAJgIQAIgJAPAAQAQAAAIAJQAJAIAAAQIAAAIIgSAAIAAgJQAAgQgPAAQgNAAAAAQIAAA1QAAAQANAAQAPAAAAgQIAAgMIASAAIAAAMQAAAPgJAIQgIAIgQAAQgPAAgIgIg");
	this.shape_29.setTransform(-67.975,75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPA5IgghXIAABXIgQAAIAAhxIAWAAIAdBKIAAhKIAQAAIAABxg");
	this.shape_30.setTransform(-76.4,75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_31.setTransform(-84.3,75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_32.setTransform(-90.15,75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgDgIAAIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAADQAAAUgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgGIAMAAQAQAAAAgPIAAgEQAAgPgOAAIgOAAg");
	this.shape_33.setTransform(-96.025,75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_34.setTransform(-103.85,75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAfAAQAhAAgBAfIAAAGQABAeghAAIgNAAIAAAugAgNgEIANAAQAHAAAEgDQADgEAAgIIAAgGQAAgIgDgDQgEgEgHAAIgNAAg");
	this.shape_35.setTransform(-111.6,75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASA5IgSgqIgTAqIgSAAIAcg5Igbg4IAUAAIARAoIASgoIASAAIgaA4IAbA5g");
	this.shape_36.setTransform(-120.025,75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_37.setTransform(-127.65,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-160.4,61.6,132.6,60.99999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATBHQgCgGAAgNIAAgUQAAgLgFgEQgFgGgLAAIgPAAIAAA8IgXAAIAAiNIApAAQApAAAAAkIAAAEQAAAZgUAFIAAABQAVAEAAAeIAAARQAAAMACAHgAgTgHIAPAAQAVgBAAgSIAAgGQAAgRgSgBIgSAAg");
	this.shape.setTransform(79.675,7.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBHIAAiNIBLAAIAAAUIg0AAIAAAoIAqAAIAAATIgqAAIAAApIA0AAIAAAVg");
	this.shape_1.setTransform(69.6,7.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBHIAAh5IghAAIAAgUIBXAAIAAAUIggAAIAAB5g");
	this.shape_2.setTransform(59.675,7.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfA/QgKgKAAgSIAAgGIAWAAIAAAGQAAAIAFAFQAGAFAIABQAJAAAFgGQAEgEABgJQAAgJgGgGQgEgFgQgHQgUgIgGgKQgIgJABgPQgBgRALgKQALgLAUAAQAUAAAKALQAKAKAAARIAAAEIgWAAIAAgEQAAgSgSAAQgIAAgFAEQgFAFABAJQgBAIAGAFQAFAFAQAIQATAIAGAKQAHAJAAAQQAAARgLALQgLAKgUAAQgTAAgMgKg");
	this.shape_3.setTransform(49.95,7.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBHIAAiNIAXAAIAACNg");
	this.shape_4.setTransform(42.575,7.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA/QgMgLAAgTIAAhBQABgSAKgLQAMgLATAAQAUAAALALQAMALAAASIAAAIIgXAAIAAgJQAAgSgTAAQgTAAABASIAABDQgBATATAAQATAAAAgTIAAgWIgSAAIAAgTIApAAIAAAoQAAATgMALQgLAKgUAAQgTAAgLgKg");
	this.shape_5.setTransform(34.95,7.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBHIAAiNIBLAAIAAAUIg0AAIAAAoIAqAAIAAATIgqAAIAAApIA0AAIAAAVg");
	this.shape_6.setTransform(25.25,7.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBHQgCgGAAgNIAAgUQAAgLgFgEQgFgGgLAAIgPAAIAAA8IgXAAIAAiNIApAAQApAAAAAkIAAAEQAAAZgUAFIAAABQAVAEAAAeIAAARQAAAMACAHgAgTgHIAPAAQAVgBAAgSIAAgGQAAgRgSgBIgSAAg");
	this.shape_7.setTransform(15.075,7.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#173E6B").s().p("AoFCQQgMAAgJgIQgIgJAAgMIAAjlQAAgMAIgJQAJgHAMAAIQLAAQAMAAAIAHQAJAJAAAMIAADlQAAAMgJAJQgIAIgMAAg");
	this.shape_8.setTransform(47.6,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-7.1,-9.7,109.39999999999999,33.4), null);


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

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(191));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(64.95,569.05,1,1,0,0,0,38,11.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({x:69.8,y:541.55,alpha:1},9,cjs.Ease.get(1)).wait(110));

	// Logo2
	this.instance_1 = new lib.Logo2();
	this.instance_1.setTransform(51.85,435.4,1,1,0,0,0,71.5,20.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({x:80.35,alpha:1},9,cjs.Ease.get(1)).wait(119));

	// F2
	this.instance_2 = new lib.F2_Txt();
	this.instance_2.setTransform(52.25,423.75,1,1,0,0,0,73.9,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({x:80.25,alpha:1},9,cjs.Ease.get(1)).wait(128));

	// F1_D
	this.instance_3 = new lib.F2();
	this.instance_3.setTransform(81.25,327.25,1,1,0,0,0,54.6,36.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(137));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(155));

	// Head
	this.instance_6 = new lib.Head();
	this.instance_6.setTransform(30.7,246.15,1,1,0,0,0,74.7,50.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:96.7,alpha:1},9,cjs.Ease.get(1)).wait(164));

	// Logo
	this.instance_7 = new lib.Logo_1();
	this.instance_7.setTransform(251,-9.7,1,1,0,0,0,36,17.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:22.2,alpha:1},9,cjs.Ease.get(1)).wait(173));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.setTransform(-112,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191));

	// Img 1
	this.instance_9 = new lib.Img1_1();
	this.instance_9.setTransform(11,157,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB6955").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(191));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-20.9,319,620.9);


// stage content:
(lib.KSFY_220800_MM_160x600 = function(mode,startPosition,loop,reversed) {
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