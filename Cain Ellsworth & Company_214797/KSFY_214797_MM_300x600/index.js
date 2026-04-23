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
p.nominalBounds = new cjs.Rectangle(0,0,300,217);


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
	this.instance.setTransform(-153,-104,0.4377,0.4377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIc2, new cjs.Rectangle(-153,-104,302.4,201.8), null);


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


(lib.img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-150,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-108.5,300,217);


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
	this.shape.graphics.f("#CCA230").s().p("AgbBAQgNgGgJgLQgHgLgCgNIAqAAQAAAHAGAFQAFAEAJAAQAHAAAEgDQAFgDAAgFQgBgGgFgDIgTgGQgPgDgKgEQgJgEgIgHQgGgIgBgOQAAgLAHgKQAGgKANgFQANgGAQAAQAZAAAPANQAPANACAUIgmAAQgCgHgEgEQgGgEgIAAQgGAAgFADQgDADAAAFQAAAFAFADQAHADAMADIAYAIQAKAEAHAHQAHAIABAOQgBAMgGAKQgHAJgMAFQgNAGgQAAQgRAAgOgGg");
	this.shape.setTransform(55.35,32.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCA230").s().p("AgpBEIAAiGIApAAIAAAXQAHgLALgHQALgGANAAIAAAsIgLAAQgQAAgIAGQgHAHAAAPIAAA/g");
	this.shape_1.setTransform(44,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCA230").s().p("AgiA9QgQgIgIgQQgJgQAAgVQAAgUAJgQQAIgQAPgIQAQgJATAAQAUAAAPAIQAPAJAKAPQAIAPAAAVIgBALIhdAAQABANAHAGQAHAHALAAQAOAAAHgNIAsAAQgDANgKALQgJALgNAGQgNAGgRAAQgSAAgQgJgAAZgMQAAgLgHgGQgHgHgLAAQgKAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_2.setTransform(30.85,32.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCA230").s().p("AgpBTQgOgKgIgPQgIgQAAgVQAAgVAIgPQAIgQAOgIQANgJARAAQANAAALAGQALAGAGAJIAAg/IApAAIAACzIgpAAIAAgTQgGAJgLAGQgKAGgOAAQgRAAgNgIgAgUgDQgJAJAAAPQAAAPAJAKQAJAJALAAQAMAAAKgJQAIgJAAgQQAAgPgIgJQgKgIgMgBQgLABgJAIg");
	this.shape_3.setTransform(14.75,30.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCA230").s().p("AgpA9QgOgJgIgPQgIgQABgVQgBgUAIgQQAIgQAOgIQAOgJAQAAQAOAAAKAGQALAGAGAJIAAgTIAqAAIAACHIgqAAIAAgTQgGAJgLAGQgLAGgNAAQgQAAgOgJgAgUgYQgJAJAAAPQAAAPAJAJQAJAJAMAAQALAAAKgJQAIgIAAgQQAAgPgIgJQgKgJgLAAQgMAAgJAJg");
	this.shape_4.setTransform(-1.7,32.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCA230").s().p("AgiA9QgPgIgKgQQgIgQAAgVQAAgUAIgQQAJgQAQgIQAPgJAUAAQATAAAQAIQAPAJAIAPQAJAPAAAVIgBALIhdAAQABANAHAGQAIAHAKAAQAOAAAHgNIAsAAQgDANgKALQgIALgOAGQgNAGgQAAQgUAAgPgJgAAZgMQABgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgBALIAyAAIAAAAg");
	this.shape_5.setTransform(-17,32.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCA230").s().p("AgvBVIAAipIAqAAIAACJIA1AAIAAAgg");
	this.shape_6.setTransform(-29.8,30.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCA230").s().p("AgXBfIAAhkIgQAAIAAgiIAQAAIAAgEQAAgZAOgNQAOgNAbAAIAHAAIAAAjQgMgBgFAFQgFAEAAAKIAAACIAXAAIAAAiIgXAAIAABkg");
	this.shape_7.setTransform(124.65,-0.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCA230").s().p("AgjA9QgQgIgJgQQgJgQAAgVQAAgUAJgQQAJgQAQgIQAQgJATAAQAUAAAQAJQAQAIAJAQQAJAQAAAUQAAAVgJAQQgJAQgQAIQgRAJgTAAQgTAAgQgJgAgTgYQgIAIAAAQQAAAQAIAJQAIAJALAAQALAAAJgJQAIgJAAgQQAAgPgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_8.setTransform(112.575,2.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCA230").s().p("AAaBFIAAhJQAAgNgHgJQgHgHgMAAQgLAAgHAHQgHAJAAANIAABJIgpAAIAAiHIApAAIAAASQAGgJALgFQAKgFANgBQAYAAAOAQQAPAPAAAbIAABPg");
	this.shape_9.setTransform(91.6,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCA230").s().p("AgjA9QgQgIgJgQQgJgQAAgVQAAgUAJgQQAJgQAQgIQAQgJATAAQAUAAAQAJQAQAIAJAQQAJAQAAAUQAAAVgJAQQgJAQgQAIQgRAJgTAAQgTAAgQgJgAgTgYQgIAIAAAQQAAAQAIAJQAIAJALAAQALAAAJgJQAIgJAAgQQAAgPgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_10.setTransform(75.675,2.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCA230").s().p("AgUBhIAAiGIApAAIAACGgAgRg6QgHgGAAgKQAAgKAHgGQAHgGAKAAQALAAAHAGQAHAGAAAKQAAAKgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape_11.setTransform(64.425,-0.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCA230").s().p("AAWBUQgWAAgMgLQgNgLAAgZIAAg1IgRAAIAAgiIARAAIAAghIAoAAIAAAhIAcAAIAAAiIgcAAIAAA2QAAAGADACQADADAHAAIAPAAIAAAjg");
	this.shape_12.setTransform(55.825,0.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCA230").s().p("AgqA9QgNgJgIgPQgIgQAAgVQAAgUAIgQQAIgQANgIQAOgJARAAQANAAALAGQALAGAGAJIAAgTIApAAIAACHIgpAAIAAgTQgGAJgLAGQgLAGgNAAQgRAAgOgJgAgUgYQgIAJAAAPQAAAPAIAJQAJAJALAAQAMAAAKgJQAIgIAAgQQAAgPgIgJQgKgJgMAAQgLAAgJAJg");
	this.shape_13.setTransform(42.45,2.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCA230").s().p("AgpBFIAAiHIApAAIAAAWQAHgLALgGQALgHANAAIAAAsIgMAAQgPABgHAGQgIAHAAAQIAAA/g");
	this.shape_14.setTransform(29.9,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCA230").s().p("AgiA9QgPgIgJgQQgJgQAAgVQAAgUAJgQQAIgQAQgIQAPgJAUAAQATAAAQAIQAPAJAIAPQAJAPAAAVIgBALIhdAAQABANAHAGQAIAHAKAAQAOAAAHgNIAsAAQgDANgKALQgIALgOAGQgNAGgQAAQgUAAgPgJgAAZgMQABgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgBALIAyAAIAAAAg");
	this.shape_15.setTransform(16.75,2.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCA230").s().p("AAaBFIAAhJQAAgNgHgJQgHgHgMAAQgLAAgHAHQgHAJAAANIAABJIgpAAIAAiHIApAAIAAASQAGgJALgFQAKgFANgBQAYAAAOAQQAPAPAAAbIAABPg");
	this.shape_16.setTransform(1.15,2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCA230").s().p("AgiA9QgPgIgKgQQgIgQAAgVQAAgUAIgQQAJgQAQgIQAPgJAUAAQATAAAQAIQAPAJAIAPQAJAPAAAVIgBALIhdAAQABANAHAGQAHAHALAAQAPAAAFgNIAtAAQgEANgIALQgJALgOAGQgNAGgQAAQgTAAgQgJgAAagMQAAgLgIgGQgHgHgLAAQgJAAgIAHQgHAGgBALIAzAAIAAAAg");
	this.shape_17.setTransform(-14.55,2.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCA230").s().p("AgpBMQgVgLgKgUQgMgUAAgZQAAgYAMgUQAKgUAVgLQATgLAYAAQAfAAAVAPQAVAPAHAaIguAAQgFgIgJgFQgIgEgMAAQgTAAgMANQgMANAAAVQAAAYAMANQAOANAUAAQAQAAAKgIQALgHAFgPIg0AAIAAgdIBZAAIAAAlQgEAQgLANQgLANgRAJQgRAIgWAAQgYAAgTgLg");
	this.shape_18.setTransform(-31.3,0.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCA230").s().p("AAWBUQgWAAgMgLQgNgLAAgZIAAg1IgRAAIAAgiIARAAIAAghIAoAAIAAAhIAcAAIAAAiIgcAAIAAA2QAAAGADACQADADAHAAIAPAAIAAAjg");
	this.shape_19.setTransform(-50.725,0.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCA230").s().p("AAYBEIgZgmIgWAmIgtAAIAthFIguhCIAvAAIAZAmIAVgmIAtAAIgtBDIAuBEg");
	this.shape_20.setTransform(-62.55,2.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCA230").s().p("AgiA9QgPgIgKgQQgIgQAAgVQAAgUAIgQQAJgQAQgIQAPgJAUAAQATAAAQAIQAPAJAIAPQAJAPAAAVIgBALIhdAAQABANAHAGQAIAHAKAAQAPAAAFgNIAtAAQgEANgIALQgJALgOAGQgNAGgQAAQgUAAgPgJgAAagMQAAgLgIgGQgHgHgLAAQgKAAgHAHQgHAGgBALIAzAAIAAAAg");
	this.shape_21.setTransform(-77.2,2.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCA230").s().p("AAjBVIhFhoIAABoIgpAAIAAipIApAAIBFBoIAAhoIApAAIAACpg");
	this.shape_22.setTransform(-93.775,0.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#315746").s().p("AgiA9QgQgIgIgQQgJgQAAgVQAAgUAJgQQAIgQAPgIQAQgJATAAQAUAAAPAIQAPAJAKAPQAIAPAAAVIgBALIhdAAQABANAHAGQAHAHALAAQAOAAAHgNIAsAAQgDANgKALQgIALgOAGQgNAGgRAAQgSAAgQgJgAAZgMQAAgLgHgGQgHgHgLAAQgKAAgHAHQgHAGgCALIAzAAIAAAAg");
	this.shape_23.setTransform(81.35,-27.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#315746").s().p("AAaBaIAAhJQAAgOgHgHQgHgIgMABQgLgBgHAIQgHAHAAAOIAABJIgpAAIAAizIApAAIAAA/QAGgJALgGQAKgFAOAAQAXAAAOAPQAPAQAAAZIAABQg");
	this.shape_24.setTransform(65.75,-30.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#315746").s().p("AAWBUQgWAAgMgLQgNgLAAgZIAAg1IgRAAIAAgiIARAAIAAghIAoAAIAAAhIAcAAIAAAiIgcAAIAAA2QAAAGADACQADADAHAAIAPAAIAAAjg");
	this.shape_25.setTransform(52.425,-29.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#315746").s().p("AgsBYQgTgOgCgZIAoAAQACAIAHAFQAIAEAJAAQAOAAAHgHQAIgIAAgQIAAgTQgGAJgLAGQgLAGgNAAQgRAAgOgIQgNgJgIgQQgIgPAAgVQAAgVAIgQQAIgPANgJQAOgIARAAQANAAALAGQALAFAGAKIAAgTIApAAIAACGQAAATgHAPQgIAPgOAJQgQAJgWAAQgeAAgSgOgAgUg4QgIAJAAAPQAAAQAIAJQAJAIALAAQAMAAAKgIQAIgJAAgPQAAgQgIgJQgKgJgMAAQgLAAgJAJg");
	this.shape_26.setTransform(33.9,-24.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#315746").s().p("AAaBEIAAhIQAAgOgHgHQgHgIgMAAQgLAAgHAIQgHAHAAAOIAABIIgqAAIAAiGIAqAAIAAASQAHgJAKgFQAKgGANAAQAYAAAOAQQAOAQAAAaIAABOg");
	this.shape_27.setTransform(17.95,-28.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#315746").s().p("AgUBhIAAiGIApAAIAACGgAgRg6QgHgGAAgKQAAgKAHgGQAHgGAKAAQALAAAHAGQAHAGAAAKQAAAKgHAGQgHAHgLAAQgKAAgHgHg");
	this.shape_28.setTransform(6.175,-30.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#315746").s().p("AAWBEIgWhXIgVBXIgtAAIgliHIApAAIATBgIAXhgIArAAIAXBgIAThgIAnAAIgkCHg");
	this.shape_29.setTransform(-7.875,-27.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#315746").s().p("AgjA9QgQgIgJgQQgJgQAAgVQAAgUAJgQQAJgQAQgIQAQgJATAAQAUAAAQAJQAQAIAJAQQAJAQAAAUQAAAVgJAQQgJAQgQAIQgRAJgTAAQgTAAgQgJgAgTgYQgIAIAAAQQAAAQAIAJQAIAJALAAQALAAAJgJQAIgJAAgQQAAgPgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_30.setTransform(-26.125,-27.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#315746").s().p("AgpBEIAAiGIApAAIAAAXQAHgLALgHQALgGANgBIAAAsIgMAAQgPABgHAGQgIAHAAAPIAAA/g");
	this.shape_31.setTransform(-38.5,-28.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#315746").s().p("AgpBMQgVgLgLgUQgKgUgBgZQABgYAKgUQALgUAVgLQATgLAZAAQAeAAAVAPQAVAPAHAaIguAAQgFgIgJgFQgIgEgLAAQgUAAgMANQgMANAAAVQAAAYAMANQAOANAUAAQAQAAAKgIQALgHAFgPIg0AAIAAgdIBaAAIAAAlQgFAQgLANQgLANgRAJQgRAIgVAAQgZAAgTgLg");
	this.shape_32.setTransform(-53.45,-29.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Heading, new cjs.Rectangle(-106.7,-50.5,239.60000000000002,102.1), null);


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
	this.shape.graphics.f("#000000").s().p("AgXAqQgLgFgGgMQgGgLAAgOQAAgNAGgMQAGgLAKgFQALgHANABQAOAAALAFQAKAGAGAKQAGALAAAOIgBAIIhEAAQABAKAGAGQAHAGAIAAQANAAAFgMIAaAAQgDAOgMAJQgMAJgRAAQgMAAgLgHgAAWgIQAAgJgGgFQgHgGgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape.setTransform(42.35,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAqQgLgFgFgMQgHgLABgOQgBgOAHgKQAFgMALgFQALgHAMABQARAAAMAIQAMAJADAQIgZAAQgCgHgFgDQgFgDgHgBQgJAAgGAIQgGAHAAANQAAAOAGAHQAGAHAJAAQAOAAAFgNIAZAAQgDAPgMAKQgMAIgRABQgMAAgLgHg");
	this.shape_1.setTransform(32,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAwIAAgzQAAgMgGgGQgFgGgJAAQgKAAgFAGQgGAGAAAMIAAAzIgYAAIAAhdIAYAAIAAALQAFgGAHgDQAIgEAIAAQARAAAKALQAKAKAAATIAAA3g");
	this.shape_2.setTransform(21.35,7.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAqQgLgFgGgMQgGgLAAgOQAAgNAGgMQAGgLAKgFQALgHANABQAOAAALAFQAKAGAGAKQAGALAAAOIgBAIIhEAAQABAKAGAGQAHAGAIAAQANAAAFgMIAaAAQgDAOgMAJQgMAJgRAAQgMAAgLgHgAAWgIQAAgJgGgFQgHgGgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape_3.setTransform(10.5,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_4.setTransform(2.9,6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLA/IAAh9IAXAAIAAB9g");
	this.shape_5.setTransform(-1.8,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAqQgLgFgGgMQgGgLAAgOQAAgNAGgMQAGgLALgFQALgHANABQANAAAKAFQALAGAGAKQAGALAAAOIgBAIIhEAAQABAKAHAGQAFAGAJAAQANAAAGgMIAaAAQgFAOgLAJQgMAJgQAAQgNAAgLgHgAAWgIQAAgJgHgFQgGgGgJAAQgIAAgGAFQgGAGgCAJIAsAAIAAAAg");
	this.shape_6.setTransform(-9.35,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAqQgKgFgHgMQgFgLAAgOQAAgOAFgKQAHgMAKgFQAKgHANABQASAAALAIQALAJAFAQIgaAAQgCgHgFgDQgFgDgHgBQgJAAgGAIQgGAHAAANQAAAOAGAHQAGAHAJAAQAOAAAFgNIAaAAQgFAPgLAKQgLAIgSABQgNAAgKgHg");
	this.shape_7.setTransform(-19.7,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAvIgTgdIgRAdIgaAAIAggvIggguIAbAAIATAdIAQgdIAaAAIgeAuIAeAvg");
	this.shape_8.setTransform(-29.35,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghA7IAAh1IBDAAIAAATIgsAAIAAAeIAoAAIAAARIgoAAIAAAgIAsAAIAAATg");
	this.shape_9.setTransform(-38.35,6.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVA/IAAg0QAAgLgFgFQgGgHgKAAQgJAAgFAHQgGAFAAALIAAA0IgYAAIAAh9IAYAAIAAArQAFgGAHgDQAIgDAIAAQALAAAIAEQAIAFAGAJQAEAJAAALIAAA4g");
	this.shape_10.setTransform(39.3,-13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANA7QgdAAAAgdIAAgtIgLAAIAAgTIALAAIAAgYIAXAAIAAAYIAVAAIAAATIgVAAIAAAtQAAAEADADQACACAFAAIALAAIAAAUg");
	this.shape_11.setTransform(30.325,-12.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBDIAAhdIAXAAIAABdgAgJgqQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(24.775,-13.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA7IgWhTIgXBTIgbAAIghh1IAaAAIAVBbIAYhbIAaAAIAXBaIAUhaIAbAAIgiB1g");
	this.shape_13.setTransform(13.7,-13.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbA6QgJgGgGgMQgGgLAAgOQAAgOAGgLQAGgLAJgFQAKgGANAAQAHAAAJAEQAIAEAFAGIAAgtIAYAAIAAB9IgYAAIAAgOQgFAHgHAFQgJAEgJAAQgMAAgKgGgAgLgIQgGADgDAFQgEAGABAJQgBAIAEAHQADAGAGAEQAGADAFAAQAHAAAGgDQAFgEAEgGQAEgGgBgJQABgJgEgGQgEgFgFgDQgGgEgHAAQgGAAgFAEg");
	this.shape_14.setTransform(-5.05,-13.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAqQgKgFgGgMQgGgLAAgOQAAgOAGgLQAGgLAKgFQAJgHAMABQAJAAAIADQAJAFAEAGIAAgNIAYAAIAABdIgYAAIAAgOQgEAHgJAEQgIAEgJABQgMAAgJgHgAgLgXQgGADgDAGQgDAGAAAIQAAAIADAGQADAHAGADQAGADAFAAQAHAAAFgDQAGgDAEgGQADgGAAgJQAAgIgDgGQgEgGgGgDQgFgEgHAAQgFAAgGAEg");
	this.shape_15.setTransform(-16.55,-11.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAqQgLgFgGgMQgGgLAAgOQAAgNAGgMQAGgLALgFQAKgHANABQAOAAAKAFQALAGAGAKQAGALAAAOIgBAIIhEAAQABAKAHAGQAFAGAJAAQANAAAFgMIAaAAQgDAOgMAJQgMAJgRAAQgMAAgLgHgAAWgIQAAgJgHgFQgGgGgJAAQgIAAgGAFQgGAGgBAJIArAAIAAAAg");
	this.shape_16.setTransform(-27.2,-11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeA7IAAh1IAXAAIAABiIAnAAIAAATg");
	this.shape_17.setTransform(-35.95,-13.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3, new cjs.Rectangle(-74.4,-26.9,153.5,47.599999999999994), null);


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
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(129.225,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAjQgIgEgEgFQgEgGAAgGIATAAQAAAEADADQAEACAEAAQAGAAACgCQADgCABgDQAAgEgEgBIgKgEIgOgEQgFgDgEgDQgDgEAAgIQAAgGADgFQAEgFAGgDQAHgDAHAAQANAAAIAHQAIAHAAALIgRAAQgBgFgDgCQgDgDgFAAQgFAAgCACQgCACAAADQAAAEADACIALAEIAMAEQAFABAEAEQAEAFABAHQAAAGgEAFQgEAFgGADQgHADgJAAQgHAAgHgDg");
	this.shape_1.setTransform(123.9,33.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlIAAhIIATAAIAAAMQACgHAGgDQAGgDAIAAIAAATIgGAAQgIAAgEAFQgEAEAAAIIAAAlg");
	this.shape_2.setTransform(118,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_3.setTransform(110.975,33.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAtQgHgFgEgJQgFgIAAgMQAAgLAFgHQAEgJAHgEQAIgFAJAAQAHAAAGADQAHADADAFIAAgiIATAAIAABgIgTAAIAAgLQgDAGgGADQgGADgIAAQgJAAgIgEgAgIgGQgFACgCAEQgDAFgBAGQABAHADAFQACAFAFADQAEACAEAAQAFAAAFgCQAEgDADgFQACgFABgGQgBgHgCgFQgDgEgEgCQgFgDgFAAQgEAAgEADg");
	this.shape_4.setTransform(102.25,32.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAhQgHgFgEgIQgFgJAAgLQAAgKAFgJQAEgIAHgFQAIgFAJAAQAHAAAHAEQAGADAEAFIAAgKIASAAIAABIIgSAAIAAgLQgEAFgGAEQgHADgHAAQgJAAgIgFgAgIgSQgFADgCAEQgDAFAAAGQAAAHADAEQACAFAFADQAEADAEAAQAFAAAFgDQAEgCADgFQACgFABgHQgBgGgCgEQgDgFgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_5.setTransform(93.35,33.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_6.setTransform(85.025,33.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAuIAAhbIATAAIAABNIAeAAIAAAOg");
	this.shape_7.setTransform(78.25,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAwQgJgHgCgNIASAAQACAFAFADQAFADAFAAQAIAAAGgFQAEgEAAgKIAAgMQgDAGgHADQgFADgHAAQgKAAgHgEQgIgFgFgJQgEgHAAgMQAAgLAEgIQAFgJAIgEQAHgFAKAAQAHAAAFADQAHADADAGIAAgLIATAAIAABJQAAAKgEAIQgEAIgJAFQgHAEgMAAQgPAAgKgHgAgIgjQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEACAEAAQAFAAAEgCQAFgCADgFQADgFgBgGQABgHgDgFQgDgFgFgCQgEgDgFAAQgEAAgEADg");
	this.shape_8.setTransform(67.1,34.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAlIAAgnQABgJgFgFQgEgEgIAAQgGAAgFAEQgFAFABAJIAAAnIgTAAIAAhIIATAAIAAAJQAEgFAFgCQAGgDAFAAQANAAAJAIQAIAIAAAPIAAAqg");
	this.shape_9.setTransform(58.6,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIA0IAAhIIARAAIAABIgAgHggQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_10.setTransform(52.4,31.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAuQgWAAAAgXIAAgiIgJAAIAAgPIAJAAIAAgSIARAAIAAASIARAAIAAAPIgRAAIAAAiQAAADACACQACACAEAAIAJAAIAAAQg");
	this.shape_11.setTransform(47.975,32.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAhQgJgFgDgIQgFgJAAgLQAAgKAFgJQADgIAJgFQAHgFAKAAQAGAAAGAEQAHADADAFIAAgKIATAAIAABIIgTAAIAAgLQgDAFgHAEQgFADgIAAQgJAAgHgFgAgJgSQgEADgDAEQgDAFAAAGQAAAHADAEQADAFAEADQAFADAEAAQAFAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgEQgDgFgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_12.setTransform(40.75,33.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAlIgahIIAUAAIARA2IATg2IATAAIgbBIg");
	this.shape_13.setTransform(32.6,33.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJA0IAAhIIASAAIAABIgAgHggQgDgDgBgFQABgEADgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_14.setTransform(26.9,31.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAuQgWAAAAgXIAAgiIgJAAIAAgPIAJAAIAAgSIARAAIAAASIARAAIAAAPIgRAAIAAAiQAAADACACQACACAEAAIAJAAIAAAQg");
	this.shape_15.setTransform(22.425,32.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_16.setTransform(18.125,32.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAhQgGgDgEgIQgEgHAAgJIAAgqIATAAIAAAnQAAAJAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgJIAAgnIATAAIAABIIgTAAIAAgJQgDAFgGACQgGADgFAAQgJAAgHgEg");
	this.shape_17.setTransform(11.925,33.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVApQgLgGgFgLQgHgKAAgOQAAgNAHgKQAFgLALgGQALgGAMAAQAPAAAMAIQALAIAFAOIgVAAQgDgHgGgDQgGgDgIAAQgGAAgGADQgHAEgDAHQgEAHAAAIQAAAJAEAHQADAHAHAEQAGAEAGAAQAIAAAGgEQAGgDADgHIAVAAQgFAOgLAIQgMAIgPAAQgMAAgLgGg");
	this.shape_18.setTransform(2.4,32.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_19.setTransform(114.625,19.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAjQgGgEgFgFQgEgGAAgGIATAAQAAAEADADQAEACAEAAQAFAAAEgCQACgCAAgDQABgEgEgBIgKgEIgOgEQgFgDgEgDQgEgEABgIQgBgGAEgFQADgFAHgDQAGgDAJAAQAMAAAIAHQAIAHAAALIgRAAQAAgFgDgCQgEgDgFAAQgEAAgDACQgDACABADQgBAEAEACIAKAEIAOAEQAFABAEAEQADAFAAAHQABAGgEAFQgDAFgHADQgGADgKAAQgIAAgHgDg");
	this.shape_20.setTransform(109.3,16.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_21.setTransform(103.975,15.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_22.setTransform(100.325,15.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJA0IAAhIIASAAIAABIgAgHggQgDgDgBgFQABgEADgEQADgDAEAAQAFAAADADQADAEABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_23.setTransform(96.75,15.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAKAxIgYgfIAAAfIgTAAIAAhhIATAAIAAA3IAXgeIAYAAIggAjIAhAlg");
	this.shape_24.setTransform(91.475,15.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAsQgIgDgFgHQgEgGAAgIIAUAAQAAAFADAEQAEADAFAAQAHAAAEgDQAEgDgBgFQAAgEgCgDQgDgDgDgBIgJgDIgQgGQgFgBgEgFQgEgGAAgIQAAgJAEgGQAEgGAHgDQAIgDAJAAQANAAAKAHQAJAHABAMIgVAAQAAgFgEgDQgDgDgGAAQgGAAgDADQgCADAAAFQAAAEABACQADADAEABIAJAEIAPAFQAFABAFAGQADAFAAAJQAAAHgDAGQgEAHgIADQgHAEgKAAQgJAAgHgDg");
	this.shape_25.setTransform(83.15,16.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWAwQgLgHgBgNIASAAQACAFAEADQAFADAGAAQAJAAAFgFQAEgEAAgKIAAgMQgDAGgHADQgGADgGAAQgKAAgHgEQgJgFgDgJQgFgHAAgMQAAgLAFgIQADgJAJgEQAHgFAKAAQAGAAAGADQAHADADAGIAAgLIATAAIAABJQAAAKgEAIQgEAIgIAFQgJAEgLAAQgPAAgJgHgAgJgjQgEACgDAFQgDAFAAAGQAAAHADAFQADAFAEACQAFACAEAAQAFAAAEgCQAFgCADgFQACgFAAgGQAAgHgCgFQgDgFgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_26.setTransform(71.35,18.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAlIAAgoQAAgIgEgFQgFgFgHAAQgGAAgFAFQgFAFAAAIIAAAoIgSAAIAAhIIASAAIAAAJQAFgFAFgCQAGgDAGAAQAMAAAJAIQAIAJAAAOIAAAqg");
	this.shape_27.setTransform(62.8,16.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgIA0IAAhIIARAAIAABIgAgHggQgEgDABgFQgBgEAEgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_28.setTransform(56.65,15.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAlIAAhIIASAAIAAALQADgFAFgEQAGgDAIAAIAAATIgGAAQgIAAgEAEQgEAFAAAJIAAAkg");
	this.shape_29.setTransform(52.45,16.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAiQgGgFgEgHQgEgGAAgKIAAgqIATAAIAAAnQAAAJAEAFQAEAEAHAAQAIAAAEgEQAEgFAAgJIAAgnIATAAIAABIIgTAAIAAgJQgDAFgGACQgGADgFAAQgJAAgHgDg");
	this.shape_30.setTransform(45.125,17.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKAtQgWAAAAgWIAAgiIgJAAIAAgQIAJAAIAAgSIARAAIAAASIARAAIAAAQIgRAAIAAAiQAAADACADQACABAEAAIAJAAIAAAPg");
	this.shape_31.setTransform(38.225,16.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAlIAAhIIASAAIAAALQADgFAGgEQAFgDAHAAIAAATIgEAAQgJAAgFAEQgDAFAAAJIAAAkg");
	this.shape_32.setTransform(33.35,16.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAiQgGgFgEgHQgEgGAAgKIAAgqIATAAIAAAnQAAAJAEAFQAEAEAHAAQAIAAAEgEQAEgFAAgJIAAgnIATAAIAABIIgTAAIAAgJQgDAFgGACQgGADgFAAQgJAAgHgDg");
	this.shape_33.setTransform(26.075,17.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVAuIgpg+IAAA+IgSAAIAAhbIASAAIApA+IAAg+IATAAIAABbg");
	this.shape_34.setTransform(16.9,16.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_35.setTransform(130.925,3.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_36.setTransform(125.125,0.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAwQgJgHgCgNIASAAQACAFAFADQAEADAHAAQAIAAAEgFQAGgEAAgKIAAgMQgEAGgGADQgHADgHAAQgJAAgIgEQgIgFgEgJQgEgHAAgMQAAgLAEgIQAEgJAIgEQAIgFAJAAQAHAAAHADQAGADAEAGIAAgLIASAAIAABJQAAAKgEAIQgEAIgJAFQgIAEgLAAQgPAAgKgHgAgIgjQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEACAEAAQAFAAAFgCQAEgCADgFQACgFABgGQgBgHgCgFQgDgFgEgCQgFgDgFAAQgEAAgEADg");
	this.shape_37.setTransform(116.4,2.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAtQgIgFgFgJQgEgIAAgMQAAgLAEgHQAFgJAIgEQAHgFAJAAQAHAAAGADQAGADAEAFIAAgiIATAAIAABgIgTAAIAAgLQgDAGgGADQgGADgIAAQgJAAgHgEgAgIgGQgFACgDAEQgCAFAAAGQAAAHACAFQADAFAFADQAEACAEAAQAFAAAFgCQAEgDADgFQADgFgBgGQABgHgDgFQgDgEgEgCQgFgDgFAAQgEAAgEADg");
	this.shape_38.setTransform(107.5,-0.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgSAhQgIgEgFgJQgEgJAAgLQAAgKAEgJQAFgIAIgFQAIgFAKAAQALAAAIAFQAIAEAFAJQAEAIAAALIAAAGIg1AAQABAIAFAEQAFAFAGAAQAKAAAFgJIATAAQgDAKgJAHQgJAHgNAAQgJAAgJgFgAARgGQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_39.setTransform(99.175,0.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_40.setTransform(93.275,-0.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AANAkIgNgxIgMAxIgUAAIgWhIIATAAIANA3IAOg3IASAAIAOA3IANg3IASAAIgWBIg");
	this.shape_41.setTransform(85.925,0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTAhQgIgEgEgJQgFgJgBgLQABgKAFgJQAEgIAJgFQAJgFAJAAQALAAAIAFQAJAFAFAIQAEAJABAKQAAALgGAJQgEAJgJAEQgJAFgKAAQgKAAgJgFgAgNgPQgFAGAAAJQAAALAFAFQAFAGAIAAQAFAAAEgDQAEgCADgFQADgFAAgHQAAgJgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_42.setTransform(76.15,0.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AARAlIAAgoQgBgIgEgFQgEgFgIAAQgGAAgFAFQgFAFAAAIIAAAoIgSAAIAAhIIASAAIAAAJQAEgFAGgCQAGgDAGAAQANAAAIAIQAIAIAAAPIAAAqg");
	this.shape_43.setTransform(67.65,0.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOAuIgggpIAAApIgTAAIAAhbIATAAIAAApIAggpIAXAAIglAtIAmAug");
	this.shape_44.setTransform(59.175,-0.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgWAwQgLgHgBgNIATAAQABAFAEADQAGADAGAAQAIAAAFgFQAEgEABgKIAAgMQgEAGgHADQgGADgGAAQgKAAgIgEQgIgFgDgJQgFgHAAgMQAAgLAFgIQADgJAIgEQAIgFAKAAQAGAAAGADQAHADAEAGIAAgLIASAAIAABJQAAAKgEAIQgEAIgIAFQgJAEgLAAQgPAAgJgHgAgJgjQgEACgCAFQgEAFAAAGQAAAHAEAFQACAFAEACQAFACAEAAQAFAAAEgCQAFgCADgFQADgFAAgGQAAgHgDgFQgDgFgFgCQgEgDgFAAQgEAAgFADg");
	this.shape_45.setTransform(46.7,2.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAQAlIAAgoQABgIgFgFQgFgFgHAAQgHAAgEAFQgFAFABAIIAAAoIgTAAIAAhIIATAAIAAAJQAEgFAFgCQAGgDAGAAQAMAAAJAIQAIAIAAAPIAAAqg");
	this.shape_46.setTransform(38.15,0.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIA0IAAhIIARAAIAABIgAgHggQgEgDABgFQgBgEAEgEQADgDAEAAQAFAAADADQAEAEgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_47.setTransform(32,-0.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAKAtQgWAAAAgWIAAgiIgJAAIAAgQIAJAAIAAgSIARAAIAAASIARAAIAAAQIgRAAIAAAiQAAAEACABQACACAEAAIAJAAIAAAPg");
	this.shape_48.setTransform(27.575,-0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AARAlIAAgoQgBgIgEgFQgEgFgIAAQgGAAgFAFQgEAFgBAIIAAAoIgSAAIAAhIIASAAIAAAJQAFgFAFgCQAGgDAGAAQANAAAIAIQAIAIAAAPIAAAqg");
	this.shape_49.setTransform(20.75,0.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVAhQgHgFgEgIQgFgJAAgLQAAgKAFgJQAEgIAHgFQAIgFAKAAQAHAAAGAEQAFADAFAFIAAgKIASAAIAABIIgSAAIAAgLQgEAFgGAEQgHADgHAAQgJAAgIgFgAgJgSQgEADgCAEQgEAFAAAGQAAAHAEAEQACAFAEADQAFADAEAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgEQgDgFgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_50.setTransform(11.7,0.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIAxIAAhhIARAAIAABhg");
	this.shape_51.setTransform(5.625,-0.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghAuIAAhbIAhAAQALAAAHADQAIAEAEAHQAEAGAAAJQAAAHgEAGQgDAFgIAEQgHAFgMAAIgOAAIAAAjgAgOgEIAOAAQAHABAEgEQAEgEAAgFQAAgOgPAAIgOAAg");
	this.shape_52.setTransform(0.075,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-14,-11.7,156.5,55.5), null);


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
	this.shape.graphics.f("#000000").s().p("AgOAiQgGgDgFgGQgEgFAAgGIATAAQAAAEADACQAEADAEAAQAGAAACgCQADgDAAgCQAAgEgDgCIgKgEIgOgDQgFgDgEgDQgDgFAAgGQAAgGADgGQADgEAHgEQAGgCAIAAQANAAAIAGQAHAHABALIgRAAQAAgFgEgCQgDgDgFAAQgEAAgDACQgDACABADQAAAEADABIALAFIAMAEQAGABADAEQAEAFAAAHQAAAFgDAFQgEAGgGACQgHADgJAAQgHAAgIgDg");
	this.shape.setTransform(130.1,41.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAHIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_1.setTransform(122.625,41.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAHIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_2.setTransform(114.625,41.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYA1IAPgkIgdhFIAVAAIARAzIATgzIAUAAIgsBpg");
	this.shape_3.setTransform(106.675,43.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAhQgIgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAJgEQAJgFAJAAQALAAAIAFQAIAEAFAIQAFAJAAAKQAAALgFAIQgFAJgIAFQgJAEgKAAQgKAAgJgEgAgNgPQgEAFAAAKQAAALAEAFQAFAGAIAAQAFAAAEgDQAEgCACgFQAEgFAAgHQAAgKgGgFQgGgFgHAAQgHAAgGAFg");
	this.shape_4.setTransform(98.65,41.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAwIAAhfIARAAIAABfg");
	this.shape_5.setTransform(92.7,40.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglA2IAAhqIASAAIAAALQAEgFAGgEQAHgDAHAAQAJAAAHAFQAHAEAFAJQAFAIAAALQAAALgFAIQgFAIgHAFQgHAEgJAAQgHAAgHgDQgFgDgFgFIAAAtgAgJgiQgEACgCAFQgEAFAAAGQAAAHAEAFQACAEAEACQAFACAEAAQAFAAAEgCQAEgCADgFQADgEAAgHQAAgHgDgEQgDgFgEgCQgEgDgFAAQgEAAgFADg");
	this.shape_6.setTransform(86.75,43.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AApAlIAAgoQABgHgFgFQgFgFgGAAQgIAAgFAFQgEAFAAAHIAAAoIgRAAIAAgoQAAgHgFgFQgDgFgIAAQgIAAgEAFQgEAFgBAHIAAAoIgSAAIAAhHIASAAIAAAIQAEgEAFgDQAGgCAHAAQAJgBAGAEQAGADADAHQAEgGAGgEQAHgEAIABQANAAAIAIQAIAHAAAPIAAAqg");
	this.shape_7.setTransform(75.35,41.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAuIAAhaIAzAAIAAAOIghAAIAAAXIAdAAIAAANIgdAAIAAAYIAhAAIAAAQg");
	this.shape_8.setTransform(65.125,40.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAvQgJgHgCgMIASAAQACAFAFACQAEADAGAAQAIAAAFgEQAFgFAAgKIAAgLQgEAFgGAEQgGADgHAAQgJAAgHgFQgIgEgFgJQgDgHAAgLQAAgLADgJQAFgIAIgFQAHgEAJAAQAIAAAFADQAGADAEAFIAAgKIASAAIAABHQAAAKgDAIQgFAIgIAFQgIAEgMAAQgOAAgKgHgAgIgjQgFADgDAEQgCAFAAAHQAAAGACAFQADAFAFABQAEADAEAAQAFAAAEgDQAFgBADgFQACgFAAgGQAAgHgCgFQgDgEgFgDQgEgCgFAAQgEAAgEACg");
	this.shape_9.setTransform(165.2,27.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQAlIAAgoQAAgIgEgEQgEgFgIAAQgGAAgFAFQgEAEAAAIIAAAoIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgCAGAAQANAAAHAIQAIAHAAAPIAAAqg");
	this.shape_10.setTransform(156.775,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHgfQgDgEAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDAEQgDACgFAAQgEAAgDgCg");
	this.shape_11.setTransform(150.675,23.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAiQgHgDgEgGQgDgFgBgGIATAAQAAAEADACQAEADAEAAQAFAAADgCQADgDAAgCQABgEgEgCIgKgDIgOgEQgFgDgEgDQgDgFAAgGQgBgGAEgGQADgEAHgEQAHgCAHAAQANAAAIAGQAHAHABALIgRAAQAAgFgEgCQgDgDgFAAQgEAAgDACQgDACABADQgBAEAEABIAKAFIANAEQAGABADAEQAEAFAAAHQAAAFgDAFQgEAGgGACQgHADgJAAQgIAAgHgDg");
	this.shape_12.setTransform(145.3,25.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHgfQgDgEAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDAEQgDACgFAAQgEAAgDgCg");
	this.shape_13.setTransform(140.025,23.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAqAlIAAgoQAAgHgFgFQgFgFgGAAQgIAAgEAFQgFAFAAAHIAAAoIgRAAIAAgoQAAgHgEgFQgFgFgHAAQgHAAgFAFQgFAFAAAHIAAAoIgSAAIAAhHIASAAIAAAIQAEgEAFgDQAGgCAHAAQAJgBAGAEQAFADAEAHQADgGAIgEQAGgEAIABQANAAAJAIQAHAHABAPIAAAqg");
	this.shape_14.setTransform(131.45,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAhQgHgFgFgJQgFgIAAgLQAAgKAFgJQAFgIAIgEQAIgFAKAAQAKAAAJAFQAIAEAFAIQAFAJAAAKQAAALgFAIQgFAJgJAFQgIAEgKAAQgKAAgJgEgAgMgPQgFAFgBAKQABALAFAFQAFAGAHAAQAFAAAEgDQAEgCACgFQADgFAAgHQABgKgGgFQgFgFgIAAQgHAAgFAFg");
	this.shape_15.setTransform(120.5,25.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAlIAAhHIASAAIAAALQACgGAGgDQAGgDAHAAIAAATIgFAAQgIAAgFADQgDAFAAAJIAAAkg");
	this.shape_16.setTransform(114.025,25.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAuIAAhaIAhAAQAKAAAIADQAGAEAEAGQAEAHAAAIQAAAHgEAGQgDAGgHAEQgHADgLABIgPAAIAAAjgAgOgDIAOAAQAHAAAEgDQADgEAAgGQAAgOgOAAIgOAAg");
	this.shape_17.setTransform(107.4,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAvQgLgHgBgMIASAAQACAFAFACQAEADAGAAQAIAAAFgEQAFgFAAgKIAAgLQgDAFgHAEQgGADgHAAQgJAAgHgFQgIgEgFgJQgDgHAAgLQAAgLADgJQAFgIAIgFQAHgEAJAAQAIAAAFADQAHADADAFIAAgKIASAAIAABHQAAAKgDAIQgFAIgIAFQgIAEgMAAQgOAAgJgHgAgJgjQgEADgDAEQgCAFAAAHQAAAGACAFQADAFAEABQAFADAEAAQAFAAAEgDQAFgBADgFQACgFAAgGQAAgHgCgFQgDgEgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_18.setTransform(95.55,27.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAlIAAgoQAAgIgEgEQgEgFgIAAQgGAAgFAFQgEAEAAAIIAAAoIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgCAGAAQANAAAHAIQAIAHAAAPIAAAqg");
	this.shape_19.setTransform(87.125,25.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHgfQgDgEAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDAEQgDACgFAAQgEAAgDgCg");
	this.shape_20.setTransform(81.025,23.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglA2IAAhqIASAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAHAFQAHAEAFAJQAFAIAAALQAAALgFAIQgFAIgHAFQgHAEgJAAQgIAAgGgDQgFgDgFgFIAAAtgAgJgiQgEACgCAFQgEAFAAAGQAAAHAEAFQACAEAEACQAFACAEAAQAFAAAEgCQAEgCADgFQADgEAAgHQAAgHgDgEQgDgFgEgCQgEgDgFAAQgEAAgFADg");
	this.shape_21.setTransform(75.05,27.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAhQgIgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAJgEQAIgFAKAAQAKAAAJAFQAIAEAFAIQAFAJAAAKQAAALgFAIQgFAJgJAFQgIAEgKAAQgKAAgJgEgAgMgPQgGAFAAAKQAAALAGAFQAFAGAHAAQAEAAAFgDQAEgCADgFQACgFAAgHQABgKgGgFQgFgFgIAAQgHAAgFAFg");
	this.shape_22.setTransform(66.3,25.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAwIAAhfIARAAIAABfg");
	this.shape_23.setTransform(60.35,24.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAHIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_24.setTransform(54.575,25.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAkIgbhHIAUAAIARA2IASg2IAUAAIgbBHg");
	this.shape_25.setTransform(46.7,25.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAHIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_26.setTransform(38.825,25.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnAuIAAhaIAgAAQANAAALAFQALAGAGAKQAGAKAAANQAAAOgGAKQgGAKgLAGQgLAFgNABgAgVAeIANAAQAOAAAHgIQAIgIAAgOQAAgNgIgIQgHgIgOAAIgNAAg");
	this.shape_27.setTransform(30.375,24.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAsQgIgEgEgGQgEgGAAgJQAAgIAFgIQAFgGAKgEIgFgIQgCgEAAgFQAAgGADgFQAEgGAGgCQAGgDAIAAQAHAAAGADQAGADADAGQACAEAAAHIgRAAQAAgFgCgCQgCgCgEAAQgDAAgDACQgCADAAADQAAADACADIAGAIIAWAVIAAAAIABAAIAHgMIATAAIgJAPIgGAKIAWAWIgWAAIgKgKQgMALgSAAQgKAAgHgDgAgdASQAAAGAEAEQAFAEAHAAQALAAAHgIIgWgVQgMAFAAAKg");
	this.shape_28.setTransform(130.975,8.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAvQgLgHgBgMIASAAQACAFAFACQAEADAGAAQAIAAAFgEQAFgFAAgKIAAgLQgDAFgHAEQgGADgHAAQgJAAgHgFQgIgEgFgJQgDgHAAgLQAAgLADgJQAFgIAIgFQAHgEAJAAQAIAAAFADQAHADADAFIAAgKIASAAIAABHQAAAKgDAIQgFAIgIAFQgIAEgMAAQgOAAgJgHgAgJgjQgEADgDAEQgCAFAAAHQAAAGACAFQADAFAEABQAFADAEAAQAFAAAEgDQAFgBADgFQACgFAAgGQAAgHgCgFQgDgEgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_29.setTransform(118.05,10.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAlIAAgoQAAgIgEgEQgEgFgIAAQgGAAgFAFQgEAEAAAIIAAAoIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgCAGAAQANAAAHAIQAIAHAAAPIAAAqg");
	this.shape_30.setTransform(109.625,9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_31.setTransform(103.525,7.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAQAlIAAgoQAAgIgEgEQgEgFgIAAQgGAAgFAFQgEAEAAAIIAAAoIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgCAGAAQANAAAHAIQAIAHAAAPIAAAqg");
	this.shape_32.setTransform(97.475,9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAzIAAhHIARAAIAABHgAgHggQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_33.setTransform(91.375,7.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAhQgIgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgEQAHgFAJAAQAIAAAFADQAHAEADAEIAAgKIATAAIAABHIgTAAIAAgLQgDAFgHAEQgGADgHAAQgJAAgHgEgAgJgSQgEADgCAFQgDAEAAAGQAAAGADAFQACAFAEACQAFADAEAAQAFAAAEgDQAFgCACgEQADgGAAgGQAAgGgDgEQgCgFgFgDQgEgCgFAAQgEAAgFACg");
	this.shape_34.setTransform(84.95,9.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAtQgWAAAAgWIAAgiIgJAAIAAgPIAJAAIAAgSIARAAIAAASIARAAIAAAPIgRAAIAAAiQAAAEACABQACACAEAAIAJAAIAAAPg");
	this.shape_35.setTransform(78.225,8.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgEQAJgFAJAAQAKAAAJAFQAIADAEAJQAFAIAAAKIgBAHIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_36.setTransform(71.775,9.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AANAuIgUgkIgIAAIAAAkIgSAAIAAhaIAhAAQALAAAHADQAHAEAEAGQAEAHAAAIQAAAIgFAIQgGAGgKADIAWAlgAgPgDIAPAAQAHABAEgEQADgDAAgHQAAgGgDgDQgEgEgHAAIgPAAg");
	this.shape_37.setTransform(63.75,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(11.6,-2.8,172.20000000000002,54.599999999999994), null);


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
	this.shape.setTransform(33.275,-1.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAnQgIgEgFgIQgEgIAAgLIAAgyIAUAAIAAAyQAAAIAEAEQAEAEAGAAQAHAAAEgEQAEgEAAgIIAAgyIAUAAIAAAyQAAALgEAIQgFAIgIAEQgIAEgKAAQgJAAgIgEg");
	this.shape_1.setTransform(25.375,-1.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAqIAAhDIgXAAIAAgQIBAAAIAAAQIgWAAIAABDg");
	this.shape_2.setTransform(15.15,-1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_3.setTransform(7.025,-1.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAqIgFgPIgfAAIgFAPIgVAAIAehTIAXAAIAeBTgAAKAMIgKgeIgJAeIATAAg");
	this.shape_4.setTransform(-1.875,-1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAqIAAhDIgWAAIAAgQIBAAAIAAAQIgWAAIAABDg");
	this.shape_5.setTransform(-9.8,-1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAqIghgzIAAAzIgVAAIAAhTIAVAAIAhAzIAAgzIAVAAIAABTg");
	this.shape_6.setTransform(-17.825,-1.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmQgKgGgFgKQgGgKAAgMQAAgLAGgKQAFgKAKgGQAKgFALAAQAMAAAKAFQAKAGAFAKQAGAKAAALQAAAMgGAKQgFAKgKAGQgKAFgMAAQgLAAgKgFgAgPgRQgGAHAAAKQAAALAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgKgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-27.025,-1.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgJgFgGgKQgFgKAAgMQAAgLAFgKQAGgKAJgFQAKgGALAAQAPAAALAIQAKAIAEAOIgXAAQgCgGgFgCQgEgDgGAAQgJAAgGAGQgFAHAAAKQAAALAFAHQAGAGAJAAQAGAAAEgCQAFgDACgGIAXAAQgEAOgKAIQgLAIgPAAQgLAAgKgGg");
	this.shape_8.setTransform(-36.325,-1.525);

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

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(312));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(153.15,579.35,1.7361,1.7361,0,0,0,0.2,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regY:0.2,y:544.7,alpha:1},9,cjs.Ease.get(1)).wait(276));

	// F3
	this.instance_1 = new lib.F3();
	this.instance_1.setTransform(146.6,446.75,1.9485,1.9485,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({_off:false},0).to({y:456.45,alpha:1},10,cjs.Ease.get(1)).wait(84));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(28.7,411.5,1.9097,1.9097,0,0,0,0.2,0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({regY:0.1,y:417.95,alpha:1},9,cjs.Ease.get(1)).to({_off:true},90).wait(94));

	// F1
	this.instance_3 = new lib.F1();
	this.instance_3.setTransform(-19,378.55,1.7361,1.7361,0,0,0,0.2,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:400,alpha:1},9).to({_off:true},93).wait(192));

	// Line
	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(149.9,367.35,1.6104,1.6104,-90,0,0,-0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(294));

	// Heading
	this.instance_5 = new lib.Heading();
	this.instance_5.setTransform(121.35,297.75,1.1,1.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:136.35,alpha:1},9,cjs.Ease.get(1)).wait(294));

	// Logo.png
	this.instance_6 = new lib.Logo_1();
	this.instance_6.setTransform(34.7,118.55,0.5104,0.5104,0,0,0,0.4,0.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:130.5,alpha:1},9,cjs.Ease.get(1)).wait(303));

	// Bg
	this.instance_7 = new lib.Bg_1();
	this.instance_7.setTransform(150,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(312));

	// Pic3
	this.instance_8 = new lib.Pic3();
	this.instance_8.setTransform(149.95,112.55);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(218).to({_off:false},0).wait(94));

	// Pic2
	this.instance_9 = new lib.PIc2();
	this.instance_9.setTransform(151.2,102.85);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).wait(193));

	// Layer_2
	this.instance_10 = new lib.img_1("synched",0);
	this.instance_10.setTransform(150,108.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},9).wait(303));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(312));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-1.1,311.9,601.1);


// stage content:
(lib.KSFY_214797_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"Bg.png", id:"Bg"},
		{src:"img1.jpg", id:"img1"},
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