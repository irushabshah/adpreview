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
	this.instance.setTransform(0,35,0.0921,0.0921);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(0,35,143,40.900000000000006), null);


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
	this.instance.setTransform(-185,2,0.2539,0.2539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-185,2,242,57.7), null);


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
	this.shape.graphics.f("#173E6B").s().p("AgEGuIAAtbIAJAAIAANbg");
	this.shape.setTransform(0.5,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(0,5,1,86), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(0,0,300,177), null);


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
	this.shape.setTransform(63.775,40.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIAwAAIAADDIBNAAIAAAqg");
	this.shape_1.setTransform(49.825,40.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIAwAAIAADDIBNAAIAAAqg");
	this.shape_2.setTransform(35.975,40.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFAFA").s().p("AAhB3IgIgrIg1AAIgHArIgtAAIAxjtIA/AAIAxDtgAARAjIgShpIgTBpIAlAAg");
	this.shape_3.setTransform(20.375,40.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIB9AAIAAApIhNAAIAAA5IA8AAIAAApIg8AAIAABig");
	this.shape_4.setTransform(5.775,40.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFAFA").s().p("AAfB3IgghRIgjBRIgtAAIA3h5Ig1h0IAzAAIAeBLIAfhLIAuAAIg0B0IA3B5g");
	this.shape_5.setTransform(115.9,11.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFAFA").s().p("Ag0BmQgSgSAAggIAAirIAwAAIAACuQAAAYAXAAQAYAAAAgYIAAiuIAuAAIAACrQAAAggSASQgTASgiAAQgiAAgSgSg");
	this.shape_6.setTransform(99.525,11.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFAFA").s().p("Ag0BoQgTgSAAggIAAhrQAAggATgSQASgSAiAAQAjAAATASQASASAAAgIAABrQAAAggSASQgTASgjAAQgiAAgSgSgAgXg2IAABtQgBAaAYAAQAYAAAAgaIAAhtQAAgagYAAQgYAAABAag");
	this.shape_7.setTransform(83.35,11.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFAFA").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_8.setTransform(71.675,11.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCFAFA").s().p("Ag0BoQgSgRAAgeIAAgLIAtAAIAAALQAAAZAYAAQAYAAAAgZQAAgPgIgHQgHgHgYgMQgegOgMgRQgLgQAAgZQAAgeASgRQATgSAgAAQAiAAASASQARARAAAeIAAAHIgtAAIAAgGQAAgagXAAQgWAAAAAYQAAANAIAIQAHAGAZAMQAeAOALARQALAQAAAbQAAAfgTARQgTASghAAQgiAAgSgSg");
	this.shape_9.setTransform(60.525,11.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFAFA").s().p("AAbB3Ig6ioIAACoIgqAAIAAjtIA6AAIAvCJIAAiJIAqAAIAADtg");
	this.shape_10.setTransform(39.55,11.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFAFA").s().p("Ag0BmQgSgSAAggIAAirIAwAAIAACuQAAAYAXAAQAYAAAAgYIAAiuIAuAAIAACrQAAAggSASQgTASgiAAQgiAAgSgSg");
	this.shape_11.setTransform(22.725,11.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFAFA").s().p("AAZB3QgEgKAAgYIAAgeQAAgRgHgHQgHgHgPAAIgRAAIAABfIgvAAIAAjtIBGAAQBFAAAAA9IAAAJQAAAlgeALIAAABQAfAIAAAxIAAAcQAAAVAFAMgAgZgRIASAAQAbAAAAgaIAAgJQAAgZgWAAIgXAAg");
	this.shape_12.setTransform(6.825,11.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-9.2,-17.4,145.1,83.30000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AARBTIgXgyIgMAQIAAAiIghAAIAAilIAhAAIAABbIAgguIAkAAIgjAsIAlBMg");
	this.shape.setTransform(122,-33.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAkIAAgKIAfAAIAAAMQAAARARAAQAQAAAAgRIAAgaQAAgSgQABQgQAAgBAQIgfAAIAGheIBWAAIAAAdIg5AAIgCAhQAJgOATAAQAkABAAAqIAAAcQAAAwgxAAQgwAAAAgwg");
	this.shape_1.setTransform(109.925,-33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAfIANgdIgMAAIAAggIAgAAIAAAeIgRAfg");
	this.shape_2.setTransform(96.8,-25.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBUIAAheIgRAAIAAgaIARAAIAAgKQAAglAlAAQAJAAAIADIAAAbQgFgCgGAAQgMAAAAAOIAAAFIAXAAIAAAaIgXAAIAABeg");
	this.shape_3.setTransform(89.675,-33.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_4.setTransform(82.75,-33.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA2QgJgJAAgOQAAgeAjgIQAQgEAGgDQAEgDAAgFQAAgOgNAAQgNAAAAAQIgeAAQAAgUALgLQAMgLAUAAQAYAAALANQAKALAAAXIAAAmQAAAZAEAMIgeAAQgCgBgBgUQgHAYgYAAQgPAAgJgJgAgCAMQgOAEAAAKQAAALAMAAQARAAAAgWIAAgJQgFADgKADg");
	this.shape_5.setTransform(74.325,-31.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBTIAAhGIgjAAIAABGIghAAIAAilIAhAAIAABDIAjAAIAAhDIAhAAIAAClg");
	this.shape_6.setTransform(62.425,-33.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAfIAMgdIgLAAIAAggIAgAAIAAAeIgRAfg");
	this.shape_7.setTransform(48.8,-25.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_8.setTransform(43.05,-33.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_9.setTransform(37.4,-33.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguAVIAAhRIAgAAIAABMQAAAJADAFQADAEAIAAQAPAAAAgVIAAhJIAgAAIAAB3IgcAAIgBgVQgHAYgYgBQggAAgBgog");
	this.shape_10.setTransform(28.7,-31.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBTIAAilIBXAAIAAAdIg2AAIAAAoIAqAAIAAAbIgqAAIAABFg");
	this.shape_11.setTransform(18.025,-33.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2_Txt, new cjs.Rectangle(8.9,-52.2,122.19999999999999,35), null);


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
	this.shape.setTransform(68.325,51.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBEIAAgRQAAgOAGgKQAGgMARgNQANgKAFgGQAFgHAAgJQAAgOgNAAQgNAAAAAPIAAALIgaAAIAAgLQAAgSAKgKQALgKASAAQAUAAAKAKQAKAKAAAQQAAAOgIAMQgIAJgUARQgKAIgDAFQgEAFAAAFIAAABIAyAAIAAAXg");
	this.shape_1.setTransform(58.875,51.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA7QgLgKAAgTIAAg8QAAgSALgKQAKgKATAAQAUAAAKAKQALAKAAASIAAA8QAAATgLAKQgKAKgUAAQgTAAgKgKgAgNgfIAAA+QAAAPANAAQAOAAAAgPIAAg+QAAgOgOAAQgNAAAAAOg");
	this.shape_2.setTransform(49.325,51.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBEIAAgRQAAgOAGgKQAGgMARgNQANgKAFgGQAFgHAAgJQAAgOgNAAQgNAAAAAPIAAALIgaAAIAAgLQAAgSAKgKQALgKASAAQAUAAAKAKQAKAKAAAQQAAAOgIAMQgIAJgUARQgKAIgDAFQgEAFAAAFIAAABIAyAAIAAAXg");
	this.shape_3.setTransform(39.875,51.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAZIALgXIgKAAIAAgaIAaAAIAAAYIgOAZg");
	this.shape_4.setTransform(109.25,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA7QgLgKAAgTIAAg8QAAgSALgKQAKgKATAAQAUAAAKAKQALAKAAASIAAA8QAAATgLAKQgKAKgUAAQgTAAgKgKgAgNgfIAAA+QAAAPANAAQAOAAAAgPIAAg+QAAgOgOAAQgNAAAAAOg");
	this.shape_5.setTransform(101.975,31.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBEIAAgRQAAgOAGgKQAGgMARgNQANgKAFgGQAFgHAAgJQAAgOgNAAQgNAAAAAPIAAALIgaAAIAAgLQAAgSAKgKQALgKASAAQAUAAAKAKQAKAKAAAQQAAAOgIAMQgIAJgUARQgKAIgDAFQgEAFAAAFIAAABIAyAAIAAAXg");
	this.shape_6.setTransform(92.575,31.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBDQgDgFAAgOIAAgRQABgKgEgDQgEgFgIAAIgKAAIAAA2IgbAAIAAiGIApAAQAmAAAAAjIAAAFQAAAVgRAGIAAABQARAEAAAcIAAAQQAAAMAEAGgAgOgJIALAAQAOAAAAgPIAAgFQAAgOgLAAIgOAAg");
	this.shape_7.setTransform(79.7,31.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBDIAAiGIBJAAIAAAYIguAAIAAAfIAkAAIAAAXIgkAAIAAAhIAuAAIAAAXg");
	this.shape_8.setTransform(70.275,31.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpBDIAAiGIApAAQAnABAAAhIAAADQAAAUgSAGIAAABQAVAGAAAZIAAACQAAAlgpAAgAgOAsIAPAAQAOAAAAgOIAAgDQAAgJgEgFQgEgDgIAAIgNAAgAgOgNIALAAQAPAAAAgOIAAgDQAAgNgMAAIgOAAg");
	this.shape_9.setTransform(60.8,31.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBDIAAhjIgUBjIgVAAIgUhjIAABjIgYAAIAAiGIAmAAIARBeIASheIAmAAIAACGg");
	this.shape_10.setTransform(49.075,31.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBDIAAiGIBJAAIAAAYIguAAIAAAfIAkAAIAAAXIgkAAIAAAhIAuAAIAAAXg");
	this.shape_11.setTransform(38.225,31.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBDIAAhuIgcAAIAAgYIBSAAIAAAYIgcAAIAABug");
	this.shape_12.setTransform(28.95,31.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBDIAAiGIAnAAQAoAAAAAmIAAAIQAAAlgoAAIgMAAIAAAzgAgMgHIAMAAQANAAAAgOIAAgIQAAgOgNAAIgMAAg");
	this.shape_13.setTransform(19.85,31.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkBDIAAiGIBJAAIAAAYIguAAIAAAfIAkAAIAAAXIgkAAIAAAhIAuAAIAAAXg");
	this.shape_14.setTransform(10.575,31.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdA7QgKgKAAgRIAAgGIAZAAIAAAGQAAAOAOAAQANAAAAgOQAAgIgEgEQgEgEgOgHQgRgIgGgJQgGgJAAgPQAAgRAKgJQAKgKASAAQATAAALAKQAJAJAAASIAAAEIgZAAIAAgEQAAgPgNAAQgNAAAAAOQAAAHAFAFQAEADAOAHQARAIAGAJQAGAJAAAQQAAARgKAKQgLAKgTAAQgTAAgKgKg");
	this.shape_15.setTransform(1.225,31.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-7.4,15,123.2,51.400000000000006), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AANAvIgbhHIAABHIgOAAIAAhdIAUAAIAXA9IAAg9IAOAAIAABdg");
	this.shape.setTransform(-67.025,82.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAqQgHgHAAgNIAAgrQAAgNAHgHQAIgHAMAAQAOAAAHAHQAHAHAAANIAAArQAAANgHAHQgHAHgOAAQgMAAgIgHgAgMgWIAAAsQAAANAMAAQANAAAAgNIAAgsQAAgMgNAAQgMAAAAAMg");
	this.shape_1.setTransform(-74.15,82.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAvIAAgpIgZAAIAAApIgPAAIAAhdIAPAAIAAAoIAZAAIAAgoIAPAAIAABdg");
	this.shape_2.setTransform(-81.175,82.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAvIAAhQIgUAAIAAgNIA3AAIAAANIgUAAIAABQg");
	this.shape_3.setTransform(-87.9,82.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAvIgEgSIgYAAIgEASIgPAAIAWhdIATAAIAWBdgAAJAQIgJguIgJAuIASAAg");
	this.shape_4.setTransform(-94.625,82.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANAvQgCgEAAgIIAAgNQAAgIgDgDQgDgDgHAAIgKAAIAAAnIgPAAIAAhdIAbAAQAagBAAAYIAAAEQAAAQgNADIAAABQANACAAAUIAAAMQAAAIACAEgAgMgFIAKAAQANABAAgNIAAgEQAAgLgLgBIgMAAg");
	this.shape_5.setTransform(-101.425,82.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAvIgEgSIgYAAIgEASIgPAAIAWhdIATAAIAWBdgAAJAQIgJguIgJAuIASAAg");
	this.shape_6.setTransform(-108.525,82.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAvIAAhJIgRBJIgMAAIgRhJIAABJIgOAAIAAhdIAWAAIAPBFIAQhFIAWAAIAABdg");
	this.shape_7.setTransform(-116.525,82.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAvQgCgEAAgIIAAgNQAAgIgDgDQgDgDgHAAIgKAAIAAAnIgPAAIAAhdIAbAAQAagBAAAYIAAAEQAAAQgNADIAAABQANACAAAUIAAAMQAAAIACAEgAgMgFIAKAAQANABAAgNIAAgEQAAgLgLgBIgMAAg");
	this.shape_8.setTransform(-126.875,82.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAANIghAAIAAAbIAbAAIAAAMIgbAAIAAAcIAhAAIAAANg");
	this.shape_9.setTransform(-133.45,82.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAvIAAhdIAPAAIAABdg");
	this.shape_10.setTransform(-138.275,82.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXAvIAAhJIgRBJIgMAAIgRhJIAABJIgOAAIAAhdIAWAAIAPBFIAQhFIAWAAIAABdg");
	this.shape_11.setTransform(-144.375,82.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAANIghAAIAAAbIAbAAIAAAMIgbAAIAAAcIAhAAIAAANg");
	this.shape_12.setTransform(-151.9,82.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAvQgCgEAAgIIAAgNQAAgIgDgDQgDgDgHAAIgKAAIAAAnIgPAAIAAhdIAbAAQAagBAAAYIAAAEQAAAQgNADIAAABQANACAAAUIAAAMQAAAIACAEgAgMgFIAKAAQANABAAgNIAAgEQAAgLgLgBIgMAAg");
	this.shape_13.setTransform(-158.525,82.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIAaAAQAbAAAAAZIAAAFQAAAZgbAAIgLAAIAAAmgAgLgEIALAAQAGAAADgCQADgDAAgHIAAgFQAAgGgDgDQgDgCgGgBIgLAAg");
	this.shape_14.setTransform(-165.275,82.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAqQgHgHAAgMIAAgEIAOAAIAAAEQAAAGADADQAEADAFAAQAFAAAEgDQADgDAAgGQAAgGgDgEQgEgDgJgFQgNgFgFgGQgEgHAAgKQAAgLAHgHQAHgHAMAAQANAAAHAHQAHAHAAAMIAAACIgPAAIAAgCQAAgNgMAAQgEAAgDAEQgEADAAAFQAAAGAEADQADADAKAGQANAFAEAGQAEAGAAALQAAAMgHAGQgHAIgNAAQgMAAgHgHg");
	this.shape_15.setTransform(-20.275,67.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDASIgEgjIAPAAIgEAjg");
	this.shape_16.setTransform(-24.95,64.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAwIgEgTIgYAAIgEATIgPAAIAWhfIATAAIAWBfgAAJAPIgJgtIgJAtIASAAg");
	this.shape_17.setTransform(-29.875,67.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAwIAAhQIgWAAIAAgPIA5AAIAAAPIgWAAIAABQg");
	this.shape_18.setTransform(-36.45,67.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAqQgHgHAAgNIAAgrQAAgNAHgHQAIgHAMAAQAOAAAHAHQAHAHAAANIAAArQAAANgHAHQgHAHgOAAQgMAAgIgHgAgMgWIAAAsQAAANAMAAQANAAAAgNIAAgsQAAgMgNAAQgMAAAAAMg");
	this.shape_19.setTransform(-43.1,67.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOAwIgSgtIgKAOIAAAfIgPAAIAAhfIAPAAIAAAsIAcgsIAQAAIgYAkIAYA7g");
	this.shape_20.setTransform(-49.875,67.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQAwIgEgTIgYAAIgEATIgPAAIAWhfIATAAIAWBfgAAJAPIgJgtIgJAtIASAAg");
	this.shape_21.setTransform(-57.175,67.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIAbAAQAcABAAAaIAAApQAAAbgcAAgAgLAiIALAAQAHAAADgDQACgDAAgGIAAgqQAAgHgCgDQgDgCgHAAIgLAAg");
	this.shape_22.setTransform(-64.025,67.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANAwIAAgqIgZAAIAAAqIgPAAIAAhfIAPAAIAAApIAZAAIAAgpIAPAAIAABfg");
	this.shape_23.setTransform(-73.675,67.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAwIAAhQIgUAAIAAgPIA3AAIAAAPIgVAAIAABQg");
	this.shape_24.setTransform(-80.4,67.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTApQgIgHAAgNIAAhEIAQAAIAABFQAAANALAAQANAAAAgNIAAhFIAOAAIAABEQAAANgGAHQgIAHgNAAQgMAAgHgHg");
	this.shape_25.setTransform(-87.05,67.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAqQgIgHAAgNIAAgrQAAgNAIgHQAGgHANAAQANAAAIAHQAHAHAAANIAAArQAAANgHAHQgIAHgNAAQgNAAgGgHgAgLgWIAAAsQAAANALAAQANAAAAgNIAAgsQAAgMgNAAQgLAAAAAMg");
	this.shape_26.setTransform(-94,67.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAqQgHgHAAgMIAAgEIAOAAIAAAEQAAAGADADQAEADAFAAQAFAAAEgDQADgDAAgGQAAgGgDgEQgEgDgJgFQgNgFgFgGQgEgHAAgKQAAgLAHgHQAHgHAMAAQANAAAHAHQAHAHAAAMIAAACIgPAAIAAgCQAAgNgMAAQgEAAgDAEQgEADAAAFQAAAGAEADQADADAKAGQANAFAEAGQAEAGAAALQAAAMgHAGQgHAIgNAAQgMAAgHgHg");
	this.shape_27.setTransform(-100.625,67.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAwIAAhfIAxAAIAAAPIghAAIAAAaIAbAAIAAAMIgbAAIAAAcIAhAAIAAAOg");
	this.shape_28.setTransform(-109.25,67.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAqQgHgHAAgNIAAgrQAAgNAHgHQAHgHAMAAQANAAAHAHQAHAHAAANIAAAHIgOAAIAAgIQAAgNgNAAQgLAAAAANIAAAsQAAANALAAQANAAAAgNIAAgKIAOAAIAAAKQAAANgHAHQgHAHgNAAQgMAAgHgHg");
	this.shape_29.setTransform(-115.775,67.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAwIgbhIIAABIIgOAAIAAhfIAUAAIAXA+IAAg+IAOAAIAABfg");
	this.shape_30.setTransform(-122.775,67.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAwIAAhfIAxAAIAAAPIgiAAIAAAaIAbAAIAAAMIgbAAIAAAcIAiAAIAAAOg");
	this.shape_31.setTransform(-129.35,67.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAwIAAhfIAPAAIAABfg");
	this.shape_32.setTransform(-134.225,67.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAwQgCgFAAgJIAAgMQAAgIgDgDQgDgDgHAAIgKAAIAAAoIgPAAIAAhfIAbAAQAaAAAAAZIAAACQAAARgNADIAAAAQANAEAAATIAAALQAAAJACAFgAgMgEIAKAAQANgBAAgNIAAgCQAAgMgLAAIgMAAg");
	this.shape_33.setTransform(-139.125,67.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAwIAAhfIAxAAIAAAPIgiAAIAAAaIAbAAIAAAMIgbAAIAAAcIAiAAIAAAOg");
	this.shape_34.setTransform(-145.65,67.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAwIAAhfIAaAAQAbAAAAAbIAAAFQAAAYgbAAIgLAAIAAAngAgLgDIALAAQAGgBADgCQADgDAAgGIAAgFQAAgHgDgDQgDgCgGAAIgLAAg");
	this.shape_35.setTransform(-152.075,67.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAPAwIgPgjIgQAjIgPAAIAXgwIgWgvIARAAIAOAiIAPgiIAPAAIgWAvIAXAwg");
	this.shape_36.setTransform(-159.125,67.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAwIAAhfIAxAAIAAAPIghAAIAAAaIAbAAIAAAMIgbAAIAAAcIAhAAIAAAOg");
	this.shape_37.setTransform(-165.5,67.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-171.2,56.7,156.79999999999998,36), null);


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
	this.shape.setTransform(72.35,7.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAARIgrAAIAAAhIAjAAIAAAQIgjAAIAAAiIArAAIAAARg");
	this.shape_1.setTransform(63.95,7.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJA7IAAhkIgbAAIAAgRIBIAAIAAARIgaAAIAABkg");
	this.shape_2.setTransform(55.7,7.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZA0QgJgIAAgPIAAgFIATAAIAAAFQgBAHAEAEQAFAFAHAAQAGAAAFgFQAEgEAAgHQAAgIgEgEQgEgEgNgGQgQgHgGgIQgFgIAAgMQAAgPAIgIQAKgJAPAAQARAAAJAJQAIAIABAPIAAADIgTAAIAAgDQgBgPgPAAQgGAAgEAEQgEAEAAAGQAAAIAFAEQAEAEANAGQAQAHAFAIQAGAIAAANQAAAPgJAIQgJAJgRAAQgQAAgJgJg");
	this.shape_3.setTransform(47.55,7.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_4.setTransform(41.375,7.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZA0QgJgJAAgPIAAg2QAAgQAJgJQAJgJAQAAQARAAAJAJQAJAJAAAQIAAAGIgSAAIAAgHQAAgQgQAAQgPAAAAAQIAAA3QAAAQAPAAQAQAAAAgQIAAgRIgPAAIAAgRIAhAAIAAAiQAAAPgJAJQgJAJgRAAQgQAAgJgJg");
	this.shape_5.setTransform(35.075,7.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAARIgrAAIAAAhIAjAAIAAAQIgjAAIAAAiIArAAIAAARg");
	this.shape_6.setTransform(26.95,7.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQA7QgCgFAAgLIAAgQQAAgJgEgEQgFgEgIAAIgNAAIAAAxIgTAAIAAh1IAjAAQAhAAABAeIAAAEQgBAUgQAEIAAAAQAQAEABAZIAAAOQgBALADAFgAgQgGIANAAQARAAAAgQIAAgEQAAgPgPAAIgPAAg");
	this.shape_7.setTransform(18.5,7.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#173E6B").s().p("AmvB4QgKAAgHgHQgHgHAAgKIAAi/QAAgKAHgHQAHgHAKAAINfAAQAKAAAHAHQAHAHAAAKIAAC/QAAAKgHAHQgHAHgKAAg");
	this.shape_8.setTransform(45.575,7.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(0,-7,91.2,27.8), null);


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
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(191));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(219.25,257.05,1,1,0,0,0,38,11.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:224.1,y:229.55,alpha:1},9,cjs.Ease.get(1)).wait(137));

	// Logo2
	this.instance_1 = new lib.Logo2();
	this.instance_1.setTransform(55,177.4,1,1,0,0,0,71.5,20.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({x:83.5,alpha:1},9,cjs.Ease.get(1)).wait(87));

	// F2
	this.instance_2 = new lib.F2_Txt();
	this.instance_2.setTransform(55.25,218.25,1,1,0,0,0,73.9,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({x:83.25,alpha:1},9,cjs.Ease.get(1)).wait(87));

	// F1_D
	this.instance_3 = new lib.F2();
	this.instance_3.setTransform(287.1,184.3,1,1,0,0,0,54.6,36.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({x:232.1,alpha:1},9,cjs.Ease.get(1)).wait(137));

	// F1
	this.instance_4 = new lib.F1();
	this.instance_4.setTransform(284.55,183.85,1,1,0,0,0,52.6,37.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({x:229.55,alpha:1},9,cjs.Ease.get(1)).to({_off:true},50).wait(96));

	// Line
	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(166.95,197.4,1,1,0,0,0,0.5,43);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(155));

	// Head
	this.instance_6 = new lib.Head();
	this.instance_6.setTransform(16.7,197.65,1,1,0,0,0,74.7,50.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:82.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},68).wait(96));

	// Logo
	this.instance_7 = new lib.Logo_1();
	this.instance_7.setTransform(251,-9.7,1,1,0,0,0,36,17.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:22.2,alpha:1},9,cjs.Ease.get(1)).wait(173));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.setTransform(0,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191));

	// Img 1
	this.instance_9 = new lib.Img1_1();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(191));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(191));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.2,-24.9,415.5,291.09999999999997);


// stage content:
(lib.KSFY_220800_MM_300x250 = function(mode,startPosition,loop,reversed) {
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