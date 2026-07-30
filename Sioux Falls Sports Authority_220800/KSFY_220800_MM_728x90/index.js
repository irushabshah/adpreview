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
p.nominalBounds = new cjs.Rectangle(0,0,425,90);


(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,90);


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
	this.instance.setTransform(-38,15,0.142,0.142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo2, new cjs.Rectangle(-38,15,220.4,63.099999999999994), null);


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
	this.instance.setTransform(-87,0,0.2037,0.2037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-87,0,194.1,46.3), null);


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
	this.shape.graphics.f("#173E6B").s().p("AgEGQIAAsfIAJAAIAAMfg");
	this.shape.setTransform(0.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(0,5,1,80), null);


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

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(0,0,372,90), null);


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
	this.shape.setTransform(194.475,16.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIAwAAIAADDIBNAAIAAAqg");
	this.shape_1.setTransform(180.525,16.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIAwAAIAADDIBNAAIAAAqg");
	this.shape_2.setTransform(166.625,16.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFAFA").s().p("AAhB3IgIgrIg1AAIgHArIgtAAIAxjtIA/AAIAxDtgAARAjIgShpIgTBpIAlAAg");
	this.shape_3.setTransform(151.025,16.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCFAFA").s().p("Ag+B3IAAjtIB9AAIAAApIhNAAIAAA5IA8AAIAAApIg8AAIAABig");
	this.shape_4.setTransform(136.425,16.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCFAFA").s().p("AAfB3IgghRIgjBRIgtAAIA3h5Ig1h0IAzAAIAeBLIAfhLIAuAAIg0B0IA3B5g");
	this.shape_5.setTransform(115.9,16.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCFAFA").s().p("Ag0BmQgSgSAAggIAAisIAwAAIAACvQAAAYAXAAQAYAAAAgYIAAivIAuAAIAACsQAAAggSASQgTATgiAAQgiAAgSgTg");
	this.shape_6.setTransform(99.525,16.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFAFA").s().p("Ag0BoQgTgSAAggIAAhrQAAggATgSQASgSAiAAQAjAAATASQASASAAAgIAABrQAAAggSASQgTASgjAAQgiAAgSgSgAgXg2IAABtQgBAaAYAAQAYAAAAgaIAAhtQAAgagYAAQgYAAABAag");
	this.shape_7.setTransform(83.35,16.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCFAFA").s().p("AgXB3IAAjtIAvAAIAADtg");
	this.shape_8.setTransform(71.675,16.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCFAFA").s().p("Ag0BoQgSgRAAgeIAAgLIAtAAIAAALQAAAZAYAAQAYAAAAgZQAAgPgIgHQgHgHgYgMQgegOgMgRQgLgQAAgZQAAgeASgRQATgSAgAAQAiAAASASQARARAAAeIAAAHIgtAAIAAgGQAAgagXAAQgWAAAAAYQAAANAIAIQAHAGAZAMQAeAOALARQALAQAAAbQAAAfgTARQgTASghAAQgiAAgSgSg");
	this.shape_9.setTransform(60.525,16.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFAFA").s().p("AAbB3Ig6ioIAACoIgqAAIAAjtIA6AAIAvCJIAAiJIAqAAIAADtg");
	this.shape_10.setTransform(39.55,16.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCFAFA").s().p("Ag0BmQgSgSAAggIAAisIAwAAIAACvQAAAYAXAAQAYAAAAgYIAAivIAuAAIAACsQAAAggSASQgTATgiAAQgiAAgSgTg");
	this.shape_11.setTransform(22.725,16.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFAFA").s().p("AAZB3QgEgKAAgYIAAgeQAAgRgHgHQgHgHgPAAIgRAAIAABfIgvAAIAAjtIBGAAQBFAAAAA9IAAAJQAAAlgeALIAAABQAfAIAAAxIAAAcQAAAVAFAMgAgZgRIASAAQAbAAAAgaIAAgJQAAgZgWAAIgXAAg");
	this.shape_12.setTransform(6.825,16.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-9.2,-12.4,218.1,54.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAOBIIgTgrIgLAOIAAAdIgcAAIAAiPIAcAAIAABPIAcgoIAfAAIgeAmIAgBCg");
	this.shape.setTransform(169.275,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAgIAAgJIAcAAIAAAJQAAAQAOAAQAOAAAAgQIAAgWQAAgPgOAAQgNABgBAOIgcAAIAFhSIBLAAIAAAZIgxAAIgCAdQAIgMAQAAQAgAAAAAlIAAAZQAAApgrAAQgqAAAAgpg");
	this.shape_1.setTransform(158.75,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAbIALgZIgKAAIAAgcIAcAAIAAAaIgPAbg");
	this.shape_2.setTransform(147.325,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBJIAAhRIgPAAIAAgXIAPAAIAAgJQABggAfAAQAJAAAGADIAAAXIgJgBQgLAAAAALIAAAFIAUAAIAAAXIgUAAIAABRg");
	this.shape_3.setTransform(141.15,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_4.setTransform(135.125,-5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAvQgHgHgBgNQABgbAegFQAOgEAFgDQADgDAAgEQAAgMgLAAQgLAAAAAOIgaAAQAAgRAKgKQAKgKASAAQAVAAAIALQAJAKAAAUIAAAhQAAAWAEAKIgaAAQgCAAAAgSQgHAVgVgBQgNABgIgIgAgBALQgNADAAAJQAAAJALAAQAOAAAAgTIAAgIQgEADgIADg");
	this.shape_5.setTransform(127.75,-3.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQBIIAAg9IgfAAIAAA9IgcAAIAAiPIAcAAIAAA6IAfAAIAAg6IAcAAIAACPg");
	this.shape_6.setTransform(117.4,-5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAbIALgZIgKAAIAAgcIAcAAIAAAaIgPAbg");
	this.shape_7.setTransform(105.575,1.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_8.setTransform(100.525,-5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_9.setTransform(95.625,-5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnASIAAhGIAbAAIAABCQAAAIACAEQADADAHAAQANAAAAgSIAAg/IAcAAIAABnIgZAAIgBgSQgFAUgVAAQgdAAABgjg");
	this.shape_10.setTransform(88.1,-3.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglBIIAAiPIBLAAIAAAZIgvAAIAAAiIAkAAIAAAYIgkAAIAAA8g");
	this.shape_11.setTransform(78.8,-5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2_Txt, new cjs.Rectangle(70.9,-21.4,106.19999999999999,30.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AglBLQgOgNAAgXIAAhLQAAgzAzAAQAYAAAOANQANAMAAAWIggAAQAAgRgSAAQgSAAAAAWIAAAZQALgQAUAAQAmAAAAArIAAAWQAAAXgOANQgNANgZAAQgYAAgNgNgAgRAVIAAATQAAASARAAQASAAAAgSIAAgSQAAgTgSAAQgRAAAAASg");
	this.shape.setTransform(147.65,39.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBXIAAgWQAAgSAHgNQAIgPAVgQQARgOAGgHQAIgJAAgLQAAgSgRAAQgSAAAAATIAAAOIggAAIAAgOQAAgXANgNQANgNAYAAQAZAAANANQANAMAAAWQAAARgLAPQgJANgaAUQgNALgEAHQgFAGAAAGIAAABIBAAAIAAAeg");
	this.shape_1.setTransform(135.625,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBLQgNgNAAgXIAAhNQAAgXANgNQAOgNAYAAQAZAAANANQAOANAAAXIAABNQAAAXgOANQgNANgZAAQgYAAgOgNgAgRgnIAABPQAAASARAAQASAAAAgSIAAhPQAAgSgSAAQgRAAAAASg");
	this.shape_2.setTransform(123.525,39.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBXIAAgWQAAgSAHgNQAIgPAVgQQARgOAGgHQAIgJAAgLQAAgSgRAAQgSAAAAATIAAAOIggAAIAAgOQAAgXANgNQANgNAYAAQAZAAANANQANAMAAAWQAAARgLAPQgJANgaAUQgNALgEAHQgFAGAAAGIAAABIBAAAIAAAeg");
	this.shape_3.setTransform(111.475,39.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAgIANgdIgMAAIAAgiIAiAAIAAAfIgTAgg");
	this.shape_4.setTransform(97.925,47.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBLQgNgNAAgXIAAhNQAAgXANgNQAOgNAYAAQAZAAANANQAOANAAAXIAABNQAAAXgOANQgNANgZAAQgYAAgOgNgAgRgnIAABPQAAASARAAQASAAAAgSIAAhPQAAgSgSAAQgRAAAAASg");
	this.shape_5.setTransform(88.725,39.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBXIAAgWQAAgSAHgNQAIgPAVgQQARgOAGgHQAIgJAAgLQAAgSgRAAQgSAAAAATIAAAOIggAAIAAgOQAAgXANgNQANgNAYAAQAZAAANANQANAMAAAWQAAARgLAPQgJANgaAUQgNALgEAHQgFAGAAAGIAAABIBAAAIAAAeg");
	this.shape_6.setTransform(76.725,39.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASBWQgDgHAAgRIAAgXQAAgMgFgFQgFgFgLAAIgMAAIAABFIgiAAIAAirIAzAAQAyAAAAAsIAAAGQAAAbgXAIIAAAAQAXAGAAAkIAAAUQAAAPAEAJgAgSgMIANAAQATAAAAgTIAAgGQAAgSgPAAIgRAAg");
	this.shape_7.setTransform(60.325,39.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAeIg7AAIAAAoIAvAAIAAAdIgvAAIAAAqIA7AAIAAAeg");
	this.shape_8.setTransform(48.325,39.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BWIAAirIA0AAQAyAAAAArIAAADQAAAagWAIIAAABQAZAHAAAhIAAADQAAAvgzAAgAgSA4IAUAAQARAAAAgRIAAgFQAAgMgFgFQgFgEgLAAIgQAAgAgSgQIAOAAQATAAAAgTIAAgDQAAgRgQAAIgRAAg");
	this.shape_9.setTransform(36.325,39.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAnBWIAAh/IgaB/IgbAAIgah/IAAB/IgeAAIAAirIAwAAIAWB3IAXh3IAwAAIAACrg");
	this.shape_10.setTransform(21.375,39.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAeIg7AAIAAAoIAvAAIAAAdIgvAAIAAAqIA7AAIAAAeg");
	this.shape_11.setTransform(7.575,39.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQBWIAAiNIgkAAIAAgeIBpAAIAAAeIgkAAIAACNg");
	this.shape_12.setTransform(-4.25,39.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBWIAAirIAyAAQAzAAAAAwIAAAKQAAAugzAAIgQAAIAABDgAgQgKIAQAAQAQAAAAgRIAAgKQAAgSgQAAIgQAAg");
	this.shape_13.setTransform(-15.825,39.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguBWIAAirIBdAAIAAAeIg7AAIAAAoIAvAAIAAAdIgvAAIAAAqIA7AAIAAAeg");
	this.shape_14.setTransform(-27.575,39.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmBLQgMgMAAgWIAAgHIAgAAIAAAHQAAASASAAQAQAAAAgSQABgKgGgGQgFgFgSgJQgVgKgIgLQgJgMABgSQgBgWANgMQAOgNAYAAQAXAAAOANQAMAMgBAWIAAAFIgfAAIAAgFQAAgSgRAAQgQAAAAARQAAAKAGAFQAFAFARAIQAWALAIAMQAIALAAATQAAAXgNAMQgOANgYAAQgZAAgNgNg");
	this.shape_15.setTransform(-39.5,39.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-50.4,18.9,209.20000000000002,39.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAPA5IgghXIAABXIgQAAIAAhxIAWAAIAcBKIAAhKIARAAIAABxg");
	this.shape.setTransform(-46.9,88.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAyQgJgIABgPIAAg0QgBgQAJgIQAJgJAPAAQAQAAAJAJQAIAIAAAQIAAA0QAAAPgIAIQgJAIgQAAQgPAAgJgIgAgOgaIAAA1QAAAPAOAAQAPAAAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_1.setTransform(-55.45,88.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPA5IAAgyIgeAAIAAAyIgSAAIAAhxIASAAIAAAwIAeAAIAAgwIATAAIAABxg");
	this.shape_2.setTransform(-63.875,88.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_3.setTransform(-72.025,88.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_4.setTransform(-80.025,88.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgEgIABIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgFIAMAAQAQAAAAgQIAAgEQAAgPgOAAIgOAAg");
	this.shape_5.setTransform(-88.175,88.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg4IgLA4IAWAAg");
	this.shape_6.setTransform(-96.725,88.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbA5IAAhZIgUBZIgPAAIgUhZIAABZIgQAAIAAhxIAaAAIASBUIAThUIAaAAIAABxg");
	this.shape_7.setTransform(-106.325,88.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgEgIABIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgFIAMAAQAQAAAAgQIAAgEQAAgPgOAAIgOAAg");
	this.shape_8.setTransform(-118.775,88.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAPIghAAIAAAhIApAAIAAARg");
	this.shape_9.setTransform(-126.6,88.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(-132.45,88.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbA5IAAhZIgUBZIgPAAIgUhZIAABZIgQAAIAAhxIAaAAIASBUIAThUIAaAAIAABxg");
	this.shape_11.setTransform(-139.775,88.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAPIghAAIAAAhIApAAIAAARg");
	this.shape_12.setTransform(-148.75,88.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgEgIABIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAAEQAAATgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgFIAMAAQAQAAAAgQIAAgEQAAgPgOAAIgOAAg");
	this.shape_13.setTransform(-156.725,88.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAfAAQAhAAgBAfIAAAGQABAeghAAIgNAAIAAAugAgNgEIANAAQAHAAAEgDQADgEAAgIIAAgGQAAgHgDgEQgEgDgHgBIgNAAg");
	this.shape_14.setTransform(-164.8,88.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgNIAAgGIARAAIAAAGQAAAGAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgGQAAgJgEgEQgEgDgMgGQgOgHgGgHQgFgIAAgMQAAgOAIgIQAJgJAOAAQAQAAAIAJQAIAIAAAOIAAADIgRAAIAAgCQAAgPgPgBQgFAAgEAFQgEADAAAHQAAAHAFAEQADAEAMAGQAPAGAGAIQAFAIAAAMQAAAOgJAIQgIAJgQgBQgPAAgJgIg");
	this.shape_15.setTransform(9.175,70.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAWIgFgrIATAAIgFArg");
	this.shape_16.setTransform(3.6,67.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg3IgLA3IAWAAg");
	this.shape_17.setTransform(-2.325,70.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_18.setTransform(-10.325,70.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAyQgIgIgBgPIAAg0QABgQAIgIQAJgJAPAAQAQAAAJAJQAJAIgBAQIAAA0QABAPgJAIQgJAJgQgBQgPABgJgJgAgOgaIAAA1QAAAPAOABQAPgBAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_19.setTransform(-18.25,70.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQA5IgVg2IgMARIAAAlIgSAAIAAhxIASAAIAAAzIAigzIATAAIgdArIAdBGg");
	this.shape_20.setTransform(-26.35,70.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATA5IgFgWIgdAAIgEAWIgSAAIAZhxIAYAAIAaBxgAALATIgLg3IgLA3IAWAAg");
	this.shape_21.setTransform(-35.125,70.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggA5IAAhxIAgAAQAhAAAAAgIAAAyQAAAfghAAgAgOAoIAOAAQAIABADgEQAEgEAAgHIAAgyQAAgJgEgDQgDgEgIAAIgOAAg");
	this.shape_22.setTransform(-43.325,70.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPA5IAAgxIgeAAIAAAxIgSAAIAAhxIASAAIAAAwIAeAAIAAgwIATAAIAABxg");
	this.shape_23.setTransform(-54.875,70.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIA5IAAhhIgZAAIAAgQIBDAAIAAAQIgZAAIAABhg");
	this.shape_24.setTransform(-63.025,70.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAxQgJgIAAgPIAAhTIASAAIAABUQAAAPAOAAQAPAAAAgPIAAhUIASAAIAABTQAAAPgJAIQgIAJgQAAQgPAAgIgJg");
	this.shape_25.setTransform(-71,71.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAyQgJgIABgPIAAg0QgBgQAJgIQAJgJAPAAQAQAAAJAJQAIAIAAAQIAAA0QAAAPgIAIQgJAJgQgBQgPABgJgJgAgOgaIAAA1QAAAPAOABQAPgBAAgPIAAg1QAAgPgPAAQgOAAAAAPg");
	this.shape_26.setTransform(-79.3,70.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAyQgIgIAAgNIAAgGIARAAIAAAGQAAAGAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgGQAAgJgEgEQgEgDgMgGQgOgHgGgHQgFgIAAgMQAAgOAIgIQAJgJAOAAQAQAAAIAJQAIAIAAAOIAAADIgRAAIAAgCQAAgPgPgBQgFAAgEAFQgEADAAAHQAAAHAFAEQADAEAMAGQAPAGAGAIQAFAIAAAMQAAAOgJAIQgIAJgQgBQgPAAgJgIg");
	this.shape_27.setTransform(-87.275,70.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_28.setTransform(-97.55,70.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAyQgJgIAAgPIAAg0QAAgQAJgIQAIgJAPAAQAQAAAIAJQAJAIAAAQIAAAIIgSAAIAAgJQAAgQgPAAQgNAAAAAQIAAA1QAAAQANAAQAPAAAAgQIAAgMIASAAIAAAMQAAAPgJAIQgIAIgQAAQgPAAgIgIg");
	this.shape_29.setTransform(-105.375,70.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAQA5IghhXIAABXIgRAAIAAhxIAYAAIAbBKIAAhKIASAAIAABxg");
	this.shape_30.setTransform(-113.8,70.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_31.setTransform(-121.7,70.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_32.setTransform(-127.6,70.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPA5QgCgFAAgLIAAgOQAAgKgEgEQgEgDgIAAIgMAAIAAAvIgSAAIAAhxIAgAAQAgAAAAAdIAAADQAAAUgQAEIAAABQAQADAAAYIAAANQAAAKADAGgAgPgGIAMAAQAQAAAAgPIAAgEQAAgPgOAAIgOAAg");
	this.shape_33.setTransform(-133.475,70.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_34.setTransform(-141.3,70.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggA5IAAhxIAgAAQAgAAABAfIAAAGQgBAeggAAIgOAAIAAAugAgOgEIAOAAQAHAAADgDQAEgEAAgIIAAgGQAAgIgEgDQgDgEgHAAIgOAAg");
	this.shape_35.setTransform(-149,70.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASA5IgSgqIgTAqIgSAAIAcg5Igbg4IAUAAIARAoIASgoIASAAIgaA4IAbA5g");
	this.shape_36.setTransform(-157.425,70.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdA5IAAhxIA7AAIAAAQIgpAAIAAAgIAhAAIAAAQIghAAIAAAgIApAAIAAARg");
	this.shape_37.setTransform(-165.05,70.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-172,57.5,188.3,43.2), null);


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
	this.ad_clickBtn.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(277));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(658.2,74,1,1,0,0,0,38,11.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:658.05,y:46.5,alpha:1},9,cjs.Ease.get(1)).wait(223));

	// Logo2
	this.instance_1 = new lib.Logo2();
	this.instance_1.setTransform(472.35,18.6,1,1,0,0,0,71.5,20.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(114));

	// F2
	this.instance_2 = new lib.F2_Txt();
	this.instance_2.setTransform(429.25,76.45,1,1,0,0,0,73.9,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({x:423.25,y:80.45,alpha:1},9,cjs.Ease.get(1)).to({_off:true},40).wait(124));

	// F1_D
	this.instance_3 = new lib.F2();
	this.instance_3.setTransform(525.05,28.1,1,1,0,0,0,54.6,36.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).to({x:473.8,y:32.1,alpha:1},9,cjs.Ease.get(1)).to({_off:true},49).wait(124));

	// F1
	this.instance_4 = new lib.F1();
	this.instance_4.setTransform(653,19.35,1,1,0,0,0,52.6,37.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({x:598,alpha:1},9,cjs.Ease.get(1)).to({_off:true},50).wait(182));

	// Line
	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(599.9,44.9,1,1,0,0,0,0.5,43);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(241));

	// Head
	this.instance_6 = new lib.Head();
	this.instance_6.setTransform(386.9,61,1,1,0,0,0,74.7,50.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({x:452.9,alpha:1},9,cjs.Ease.get(1)).to({_off:true},68).wait(182));

	// Logo
	this.instance_7 = new lib.Logo_1();
	this.instance_7.setTransform(251,-9.7,1,1,0,0,0,36,17.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:22.2,alpha:1},9,cjs.Ease.get(1)).wait(259));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.setTransform(303,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(277));

	// Img 1
	this.instance_9 = new lib.Img1_1();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(277));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(277));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26.9,728,116.9);


// stage content:
(lib.KSFY_220800_MM_728x90 = function(mode,startPosition,loop,reversed) {
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