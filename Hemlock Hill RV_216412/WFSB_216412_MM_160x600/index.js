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



(lib.BGG = function() {
	this.initialize(img.BGG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,961);


(lib.Corner = function() {
	this.initialize(img.Corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,72);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,150);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,107);


(lib.newheader_Png = function() {
	this.initialize(img.newheader_Png);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,104);


(lib.SBH_01 = function() {
	this.initialize(img.SBH_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,257);


(lib.Sparkle = function() {
	this.initialize(img.Sparkle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,207);


(lib.Subhead_02 = function() {
	this.initialize(img.Subhead_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,231);// helper functions:

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


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtxIIQhpAAAAhqIAAs8QAAhpBpAAIbjAAQBpAAAABpIAAM8QAABqhpAAg");
	mask.setTransform(1.375,24.375);

	// Layer_2
	this.instance = new lib.newheader_Png();
	this.instance.setTransform(-182,-40,1.2,1.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-97.3,-27.6,197.39999999999998,104), null);


(lib.subhead_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("AiOC+IAQhKICaiYQASgRAFgJQAIgLgBgNQAAgdgbAAQgfAAgJAmIhTAAQAShwB0AAQAvAAAbAZQAbAaAAAvQgBAegPAaQgMATgeAbIhqBoICBAAIgQBLg");
	this.shape.setTransform(-64.4,-11.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.Subhead_02();
	this.instance.setTransform(-57,-39,0.2592,0.2592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.4,-48.4,146.5,69.3);


(lib.subhead_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("Ag/DAIA6kgIhbBAIAThfIBZhAIBVAAIhNF/g");
	this.shape.setTransform(-61.025,-14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.SBH_01();
	this.instance.setTransform(-63,-42,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-52.2,150.8,84.2);


(lib.sparkle1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Sparkle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sparkle1, new cjs.Rectangle(0,0,207,207), null);


(lib.phn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("AAbArIAKgyIABgFQAAgEgDgCQgCgCgDAAQgKAAgDANIgKAyIgYAAIAKgyIABgFQAAgEgDgCQgCgCgDAAQgKAAgDANIgKAyIgZAAIARhUIAYAAIgCAHQAJgIAMAAQAKAAAGAJQALgJAPAAQAJgBAGAGQAIAGAAAMIgBAKIgKA0g");
	this.shape.setTransform(60.775,10.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgbAlQgJgIAAgNIABgQQADgNAEgGQACgIAHgGQAKgKAQAAQAMAAAIAHQAKAIAAANQAAAHgCAIQgDAOgDAGQgDAIgGAGQgKAKgRAAQgMAAgIgHgAgCgSQgFAEgCAOIgCANQAAAIAIABQADgBADgDQAEgDADgPIACgLQAAgKgHABQgFAAgCACg");
	this.shape_1.setTransform(50.45,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgYAlQgKgJAAgOIABgOQAIgrAjAAQAQAAAJAMIgSAQQgFgGgFABQgFAAgCADQgGAGgCALIgBAKQAAAMAJAAQAFgBAFgFIAOASQgLAKgQAAQgMAAgJgHg");
	this.shape_2.setTransform(43.275,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgQAOIAGgcIAbAAIgGAcg");
	this.shape_3.setTransform(36.775,13.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AggA5IgNhxIAbAAIAFBBIAfhBIAcAAIg5Bxg");
	this.shape_4.setTransform(32.25,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AAKA5IgMgrIgKAAIgJArIgaAAIAXhxIAnAAQARAAAJAKQAHAJAAAOQAAAKgGAJQgHAJgMAGIAQAugAgHgHIAMAAQAJgBAEgFQADgEAAgFQAAgKgKAAIgOAAg");
	this.shape_5.setTransform(21.6,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AABA5QgJAAgHgGQgFgGAAgIIAAgHIARhWIAYAAIgRBWIAAACQAAAEAEAAIAKAAIgFAVg");
	this.shape_6.setTransform(14.225,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AABA5QgJAAgHgGQgFgGAAgIIAAgHIARhWIAYAAIgRBWIAAACQAAAEAEAAIAKAAIgFAVg");
	this.shape_7.setTransform(9.275,9.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgXA5IARhRIAYAAIgRBRgAgEglIAEgTIAYAAIgEATg");
	this.shape_8.setTransform(5.025,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AADA5IAJguIgcAAIgJAuIgaAAIAXhxIAbAAIgJAsIAbAAIAJgsIAaAAIgXBxg");
	this.shape_9.setTransform(-2.1,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AADA5IgLgiIgIAHIgEAbIgZAAIAWhxIAYAAIgKA5IAbgdIAcAAIglAkIAXAxg");
	this.shape_10.setTransform(-11.3,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgYAlQgKgJAAgOIABgOQAIgrAjAAQAQAAAJAMIgSAQQgFgGgFABQgFAAgCADQgGAGgCALIgBAKQAAAMAJAAQAFgBAFgFIAOASQgLAKgQAAQgMAAgJgHg");
	this.shape_11.setTransform(-19.025,10.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AgbAlQgJgIAAgNIACgQQACgNADgGQAEgIAFgGQALgKAQAAQAMAAAJAHQAJAIAAANQAAAHgCAIQgCAOgEAGQgDAIgGAGQgKAKgQAAQgMAAgJgHgAgDgSQgEAEgDAOIgCANQABAIAHABQAEgBADgDQAFgDACgPIACgLQAAgKgIABQgEAAgDACg");
	this.shape_12.setTransform(-26.9,10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AABA5QgJAAgHgGQgFgGAAgIIAAgHIARhWIAYAAIgRBWIAAACQAAAEAEAAIAKAAIgFAVg");
	this.shape_13.setTransform(-33.425,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AAbArIAKgyIABgFQAAgEgDgCQgCgCgDAAQgKAAgDANIgKAyIgYAAIAKgyIABgFQAAgEgDgCQgCgCgDAAQgKAAgDANIgKAyIgZAAIARhUIAYAAIgCAHQAJgIAMAAQAKAAAGAJQALgJAPAAQAJgBAGAGQAIAGAAAMIgBAKIgKA0g");
	this.shape_14.setTransform(-42.625,10.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgaAmQgLgJAAgPQAAgYALgQQAMgRAUAAQAOAAAJAIQAJAJAAAPQAAAIgDALIgwAAIgBADQAAAMANAAQAJAAAIgIIANARQgNAMgUAAQgNAAgJgGgAgKgIIAYAAIABgDQAAgLgKAAQgLAAgEAOg");
	this.shape_15.setTransform(-53.025,10.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AADA5IAJguIgcAAIgJAuIgaAAIAXhxIAbAAIgJAsIAbAAIAIgsIAbAAIgXBxg");
	this.shape_16.setTransform(-61.95,9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgdAzQgKgJAAgMIAAgHIAZAAIAAADQAAAJAKAAQAEABAEgFQAEgFAAgGQAAgLgJAAIgDAAIAEgUIACAAQAFAAAEgEQAEgFAAgFQAAgKgIAAQgJAAgCAMIgZAAQAHgiAhAAQANAAAIAJQAIAIAAALQAAAUgQAJQAJAFAAAOQAAARgMALQgLALgOAAQgQAAgJgHg");
	this.shape_17.setTransform(43.225,-7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AgeAzQgKgJAAgQQAAgTASgJQgIgIAAgMQAAgOALgLQALgKAQAAQAOAAAKAJQAJAJAAAOQAAAIgFAHQgFAIgGACQAIAIAAAMQAAARgLAKQgLALgRAAQgPAAgJgHgAgLAOQgEAEAAAGQAAAFADADQACAEAFgBQAFAAAEgDQAEgFAAgGQAAgFgDgCQgCgEgEAAQgGAAgEAEgAgBgeQgEADAAAHQAAADADADQACADADAAQAFAAAEgDQADgFAAgFQAAgEgCgDQgCgEgEAAQgFABgDAEg");
	this.shape_18.setTransform(35.125,-7.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgkA5IAfguIgGABQgKAAgIgIQgGgIgBgNQAAgRALgLQAKgMASAAQARAAAJALQAIAJAAAMQAAAIgEAJIgKARIggAwgAgHgdQgDAEgBAHQABALAJAAQAGAAADgFQAEgEAAgHQAAgLgKAAQgGAAgDAFg");
	this.shape_19.setTransform(27.45,-7.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgeAzQgKgJAAgQQAAgTASgJQgIgIAAgMQAAgOALgLQALgKAQAAQAOAAAKAJQAJAJAAAOQAAAIgFAHQgFAIgGACQAIAIAAAMQAAARgLAKQgLALgRAAQgPAAgJgHgAgLAOQgEAEAAAGQAAAFADADQACAEAFgBQAFAAAEgDQAEgFAAgGQAAgFgDgCQgCgEgEAAQgGAAgEAEgAgBgeQgEADAAAHQAAADADADQACADADAAQAFAAAEgDQADgFAAgFQAAgEgCgDQgCgEgEAAQgFABgDAEg");
	this.shape_20.setTransform(18.825,-7.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgaAMIAEgXIAxAAIgEAXg");
	this.shape_21.setTransform(11.475,-6.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgSA5IARhVIgbATIAGgcIAagTIAZAAIgXBxg");
	this.shape_22.setTransform(4.725,-7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgqA5IAEgWIAvgtQAFgFABgDQADgEAAgDQAAgJgIAAQgKAAgCALIgZAAQAFghAigBQAPABAIAHQAIAIAAAOQAAAJgEAJQgEAFgJAHIgfAgIAlAAIgEAWg");
	this.shape_23.setTransform(-3.95,-7.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgcAvQgIgJAAgMQAAgIAEgJQACgGAIgLIAfgwIAcAAIgfAuIAFgBQALAAAHAIQAHAIAAANQAAARgKALQgLALgQAAQgSAAgJgKgAgIANQgDAEAAAHQAAALAKAAQAFAAAEgFQADgFAAgGQAAgLgKAAQgFAAgEAFg");
	this.shape_24.setTransform(-12.175,-7.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgaAMIAEgXIAxAAIgEAXg");
	this.shape_25.setTransform(-19.175,-6.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgfAyQgIgJAAgMIABgIIAJgqQADgTAMgJQAKgIANAAQAPAAAIAJQAIAIAAAMIgBAIIgJArQgDASgMAJQgKAIgNAAQgPAAgIgIgAgEgWIgJAsIgBAFQAAAJAIgBQAJAAACgMIAJgsIABgFQAAgJgIAAQgJAAgCANg");
	this.shape_26.setTransform(-26.125,-7.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AgcAvQgIgJAAgMQAAgIAEgJQACgGAIgLIAfgwIAcAAIgfAuIAFgBQALAAAHAIQAHAIAAANQAAARgKALQgLALgQAAQgSAAgJgKgAgIANQgDAEAAAHQAAALAKAAQAFAAAEgFQADgFAAgGQAAgLgKAAQgFAAgEAFg");
	this.shape_27.setTransform(-34.675,-7.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AgeAzQgKgJAAgQQAAgTASgJQgIgIAAgMQAAgOALgLQALgKAQAAQAOAAAKAJQAJAJAAAOQAAAIgFAHQgFAIgGACQAIAIAAAMQAAARgLAKQgLALgRAAQgPAAgJgHgAgLAOQgEAEAAAGQAAAFADADQACAEAFgBQAFAAAEgDQAEgFAAgGQAAgFgDgCQgCgEgEAAQgGAAgEAEgAgBgeQgEADAAAHQAAADADADQACADADAAQAFAAAEgDQADgFAAgFQAAgEgCgDQgCgEgEAAQgFABgDAEg");
	this.shape_28.setTransform(-42.475,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.4,-19.9,138.9,39.8);


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
	this.instance.setTransform(-76,-94,0.5531,0.5531);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-76,-94,153.2,59.2), null);


(lib.Img1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG();
	this.instance.setTransform(-148,-171,1.1006,1.1006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-148,-171,337.9,165.1), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02216C").s().p("AgOAgQgHgBgHgHIAMgKQAFAGAMAAQALAAAAgHQAAgFgHgCIgJgBQgUgBAAgQQAAgKAIgGQAHgGAKABQARgBAJAIIgLALQgFgFgKAAQgJAAAAAHQAAAEAHABIAKACQATABABASQgBAKgHAGQgJAGgMgBQgIAAgGgCg");
	this.shape.setTransform(27.55,-62.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgdAAQABgQAHgIQAJgJAMAAQAOAAAHAJQAJAIAAAPIAAAGIgqAAQAAAHAEAEQAEAEAGAAQAJAAAGgGIALAJQgGAGgFADQgHACgIAAQgfABAAgjgAANgFIgCgIQgDgGgIgBQgHABgEAGIgBAIIAZAAIAAAAg");
	this.shape_1.setTransform(20.9,-62.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgPAbQgKgIAAgTQAAgSAKgJQAIgGALAAQAOAAAIAJIgLALQgFgGgGAAQgFABgEAEQgDAFAAAJQAAAKADAFQAEAEAFAAQAGAAAFgFIALALQgJAJgNAAQgLAAgIgHg");
	this.shape_2.setTransform(14.325,-62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgHAuIAAhAIAQAAIAABAgAgIggIAAgNIARAAIAAANg");
	this.shape_3.setTransform(9.325,-63.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_4.setTransform(5.075,-62.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgbAuIAAhbIAQAAIAAAHQAGgHAKAAQAKAAAGAGQAEAEACAIIABAQIgBAPQgCAIgEAEQgGAHgKAAQgKAAgFgHIAAAegAgJgZQgBAEAAAKQAAAKABADQADAFAGAAQAHAAACgFQACgDAAgKQAAgKgCgEQgCgFgHAAQgGAAgDAFg");
	this.shape_5.setTransform(-1.825,-61.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgcAAQgBgQAJgIQAHgJANAAQAOAAAHAJQAIAIAAAPIAAAGIgpAAQAAAHAEAEQAEAEAGAAQAIAAAHgGIAKAJQgFAGgFADQgHACgIAAQgfABABgjgAANgFIgCgIQgDgGgIgBQgHABgDAGIgCAIIAZAAIAAAAg");
	this.shape_6.setTransform(-12.1,-62.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAFAuQgJAAgFgGQgFgFAAgJIAAhHIAQAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_7.setTransform(-17.5,-63.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFAMAAIAOAAIAAgEQAAgKgMAAQgHAAgFAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgQAAIAAgGQgHAGgJAAQgMAAgFgGgAgLANQAAAIAKAAQAGAAADgEQADgCAAgGIAAgEIgMAAQgKAAAAAIg");
	this.shape_8.setTransform(-23.5,-62.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgOAgQgHgBgHgHIAMgKQAFAGAMAAQALAAAAgHQAAgFgHgCIgKgBQgTgBAAgQQAAgKAIgGQAHgGAKABQARgBAJAIIgLALQgFgFgKAAQgJAAAAAHQAAAEAHABIAKACQATABABASQgBAKgHAGQgJAGgMgBQgIAAgGgCg");
	this.shape_9.setTransform(-30.05,-62.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AAOAiIgOgqIgNAqIgOAAIgVhDIASAAIAMApIANgpIALAAIAOApIALgpIARAAIgUBDg");
	this.shape_10.setTransform(-41.1,-62.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQACAFAAAJQAAAJgCAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_11.setTransform(-49.5,-62.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AAFAuQgJAAgFgGQgFgFAAgJIAAhHIAQAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_12.setTransform(-54.85,-63.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AgWAuIAAgPIADAAIAGgBQACgCABgDIACgIIgWg+IASAAIAMApIAOgpIASAAIgdBNQgDAGgBADQgFAFgKAAg");
	this.shape_13.setTransform(44.35,-74.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AgUAoQgFgEgBgJIgBgQIABgOQABgIAFgFQAGgFAKAAQAKgBAGAHIAAgfIAQAAIAABbIgQAAIAAgGQgGAIgKgBQgKABgGgHgAgIgBQgCADAAAJQAAALACADQACAGAGAAQAHAAADgGQACgEAAgKQAAgJgCgDQgDgGgHAAQgGAAgCAGg");
	this.shape_14.setTransform(37.375,-77.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFAMAAIAOAAIAAgEQAAgKgLAAQgJAAgEAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgRAAIAAgGQgGAGgJAAQgMAAgFgGgAgKANQgBAIALAAQAFAAADgEQADgCAAgGIAAgEIgLAAQgLAAABAIg");
	this.shape_15.setTransform(30.3,-76.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AgdAAQABgQAHgIQAJgJAMAAQAOAAAIAJQAIAIAAAPIAAAGIgqAAQAAAHAEAEQAEAEAGAAQAJAAAGgHIALAKQgGAGgGACQgFADgJAAQgfAAAAgigAANgFIgCgIQgDgGgIgBQgHABgEAGIgBAIIAZAAIAAAAg");
	this.shape_16.setTransform(23.5,-76.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_17.setTransform(17.475,-76.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AAFAuQgJAAgFgGQgFgGAAgHIAAhIIAQAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_18.setTransform(12.2,-77.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgVAcQgGgFAAgKQAAgIAGgFQAGgFAMAAIAOAAIAAgEQAAgKgMAAQgHAAgFAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgQAAIAAgGQgHAGgJAAQgMAAgFgGgAgLANQAAAIAKAAQAGAAADgEQADgCAAgGIAAgEIgMAAQgKAAAAAIg");
	this.shape_19.setTransform(6.2,-76.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_20.setTransform(-2.475,-76.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgUAcQgHgHAAgMIAAgqIARAAIAAAoQAAAGADADQADADAEAAQAEAAADgDQAEgDABgGIAAgoIAQAAIAABCIgQAAIAAgGQgHAHgJAAQgKAAgGgGg");
	this.shape_21.setTransform(-9.65,-76.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgUAaQgEgEgCgHQgBgGgBgJQABgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAHgEAEQgIAJgNgBQgMABgIgJgAgHgPQgDADAAAMQAAANADADQADADAEAAQAFAAADgDQAEgDAAgNQAAgMgEgDQgDgEgFAAQgEAAgDAEg");
	this.shape_22.setTransform(-16.85,-76.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgKAuIAAgzIgHAAIAAgNIAHAAIAAgIQAAgJAEgEQAGgHAIABIAKAAIAAANIgHAAQgFABAAAFIAAAIIAMAAIAAANIgMAAIAAAzg");
	this.shape_23.setTransform(-25.425,-77.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgUAaQgEgEgCgHQgBgGgBgJQABgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAHgEAEQgIAJgNgBQgMABgIgJgAgHgPQgEADAAAMQAAANAEADQADADAEAAQAFAAADgDQAEgDAAgNQAAgMgEgDQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(-31.25,-76.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgbAuIAAhbIAQAAIAAAHQAGgHAKAAQAKAAAGAGQAEAEACAIIABAQIgBAPQgCAIgEAEQgGAHgKAAQgKAAgFgHIAAAegAgJgZQgBAEAAAKQAAAKABADQADAFAGAAQAHAAACgFQACgDAAgKQAAgKgCgEQgCgFgHAAQgGAAgDAFg");
	this.shape_25.setTransform(-41.175,-74.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgUAaQgEgEgCgHQgCgGAAgJQAAgJACgFQACgHAEgEQAIgIAMAAQANAAAIAIQAFAEABAHQABAFABAJQgBAJgBAGQgBAHgFAEQgIAJgNgBQgMABgIgJgAgGgPQgFADAAAMQAAANAFADQADADADAAQAFAAADgDQAEgDAAgNQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_26.setTransform(-48.5,-76.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AAJArQgJAAgFgGQgFgGAAgIIAAggIgHAAIAAgNIAHAAIAAgUIAQAAIAAAUIAMAAIAAANIgMAAIAAAfQAAAHAGAAIAGAAIAAAOg");
	this.shape_27.setTransform(-54.325,-76.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AALAiIAAgoQAAgGgDgEQgEgCgEAAQgEAAgDACQgDAEAAAGIAAAoIgRAAIAAhDIARAAIAAAHQAGgHAJAAQAKAAAGAGQAHAHAAAMIAAAqg");
	this.shape_28.setTransform(-63.15,-76.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgUAaQgEgEgCgHQgBgGgBgJQABgJABgFQACgHAEgEQAIgIAMAAQANAAAIAIQAEAEACAHQABAFAAAJQAAAJgBAGQgCAHgEAEQgIAJgNgBQgMABgIgJgAgHgPQgEADAAAMQAAANAEADQADADAEAAQAFAAADgDQAEgDAAgNQAAgMgEgDQgDgEgFAAQgEAAgDAEg");
	this.shape_29.setTransform(-70.4,-76.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#02216C").s().p("AgiBOIAHgjIAiAAIgGAjgAgSAaIALhnIAqAAIgeBng");
	this.shape_30.setTransform(43.125,-97.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#02216C").s().p("AgqBLQgNgFgLgMIAbgXQALAMAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgDQglgKAAgcQAAgZASgPQASgPAcAAQAfAAAQAUIgaAWQgIgKgSAAQgKAAgGAGQgGAFAAAGQAAAGAEADIAIADIAMADQAUAFAJAKQAIAJAAASQAAAagUAOQgSANgaAAQgUAAgMgFg");
	this.shape_31.setTransform(32.375,-97.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#02216C").s().p("AgtBOIAZh7IglAAIAHggIBsAAIgGAgIgkAAIgYB7g");
	this.shape_32.setTransform(21.725,-97.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02216C").s().p("AAMBOIgghQIgQBQIglAAIAfibIAfAAIAgBQIAQhQIAlAAIgfCbg");
	this.shape_33.setTransform(7.25,-97.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#02216C").s().p("Ag0BCQgOgNAAgUIABgOIAUhhIAkAAIgUBkIgBAIQAAAQAQAAQATAAAGgbIAUhhIAkAAIgUBlQgGAcgTAPQgQANgWAAQgXAAgNgNg");
	this.shape_34.setTransform(-6.3,-96.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAXAAAOAOQAMANAAATQAAANgEAUQgFAZgEAKQgFAQgKAKQgRATgbAAQgXAAgOgPgAgGgnQgHAHgGAgQgEAVAAAKQAAAIAEAEQAEAEAHAAQAIAAAHgHQAHgHAGghQAEgUAAgKQAAgIgEgEQgEgFgHAAQgJAAgGAIg");
	this.shape_35.setTransform(-20.225,-97.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAYAAANAPQAMANAAAWIgkAAQgBgSgOAAQgJAAgGAHQgHAHgHAhQgEAVAAAKQAAAQAQAAQAOAAAGgRIAmAAQgQAygtAAQgYAAgOgPg");
	this.shape_36.setTransform(-32.875,-97.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#02216C").s().p("AgqBLQgNgFgLgMIAbgXQALAMAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgDQglgKAAgcQAAgZASgPQASgPAcAAQAfAAAQAUIgaAWQgIgKgSAAQgKAAgGAGQgGAFAAAGQAAAGAEADIAIADIAMADQAUAFAJAKQAIAJAAASQAAAagUAOQgSANgaAAQgUAAgMgFg");
	this.shape_37.setTransform(-45.925,-97.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_38.setTransform(-55,-97.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_39.setTransform(-65.225,-97.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02216C").s().p("Ag0BOIAfibIAkAAIgYB7IA+AAIgGAgg");
	this.shape_40.setTransform(39.825,-121.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#02216C").s().p("AAfBOIgCgYIgtAAIgMAYIgnAAIBUibIAcAAIAXCbgAAaAYIgFgtIgWAtIAbAAg");
	this.shape_41.setTransform(26.325,-121.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#02216C").s().p("AAMBOIgghQIgQBQIglAAIAfibIAfAAIAgBQIAQhQIAlAAIgfCbg");
	this.shape_42.setTransform(13.9,-121.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAXAAAOAOQAMANAAATQAAANgEAUQgFAZgEAKQgFAQgKAKQgRATgbAAQgXAAgOgPgAgGgnQgHAHgGAgQgEAVAAAKQAAAIAEAEQAEAEAHAAQAIAAAHgHQAHgHAGghQAEgUAAgKQAAgIgEgEQgEgFgHAAQgJAAgGAIg");
	this.shape_43.setTransform(0.025,-121.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_44.setTransform(-9.8,-121.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#02216C").s().p("AgtBOIAZh7IglAAIAHggIBsAAIgGAgIgkAAIgYB7g");
	this.shape_45.setTransform(-17.875,-121.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_46.setTransform(-28.35,-121.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_47.setTransform(-38.625,-121.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_48.setTransform(-52.025,-121.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#02216C").s().p("AAfBOIgCgYIgtAAIgMAYIgnAAIBUibIAcAAIAXCbgAAaAYIgFgtIgWAtIAbAAg");
	this.shape_49.setTransform(-66.775,-121.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-82,-137.7,137.8,82.79999999999998), null);


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
	this.shape.graphics.f("#092D74").s().p("AguAoIgBgjIAAhFIArgEIArgFIACASIADASIgYABIgWADIgCAKIAAAKIASgEIARgCIACANIACANIgXADIgQADIgBASIAYgDIAYgEIADATIACARIgqAFIg0AJg");
	this.shape.setTransform(-103.925,-8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#092D74").s().p("Ag5hAQAngKAaAAQAlAAAFAaQADAegiATQAFAHAiAlIgjAcIgpg3QgBAbACAVIgoAJQAEhngEgkgAgRgnIgBAOIAAANQAJgDAHgFQAMgJgCgHQgBgFgHAAQgGAAgLACg");
	this.shape_1.setTransform(-114.625,-8.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#092D74").s().p("AguAzQgIgJgEgOQgFgNABgPQABgZAPgVQATgaAeAAQAaAAASAVQAKAMAEAMQADANgBAOQAAAZgQAWQgTAageAAQgbAAgRgWgAgRgSQgFAMAAAMQgBAGACAGQACAIAFAEQAGAFAIAAQANAAAGgKQAFgIAAgNQAAgNgFgNQgGgMgKAAQgMAAgIAQg");
	this.shape_2.setTransform(-127.1164,-8.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#092D74").s().p("AhTBCQAVg6ALhKIAogHIAMBGIAKhDIAngDQAJBCAZBJIgrAIIgPhIIgKBDIgjADIgJhKIgNBMg");
	this.shape_3.setTransform(-141.575,-8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#092D74").s().p("Ag5hEIAtgHIAEASQAGAaAGAUQAFALAEAGIAAhKIAtgHQgJBNAFA4IgpAJIgEgHIgUgcIgHgKQAAAYACAVIgoAJg");
	this.shape_4.setTransform(-160.7,-8.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#092D74").s().p("Ag5hAQAngKAaAAQAlAAAFAaQADAegiATQAFAHAiAlIgjAcIgpg3QgBAbACAVIgoAJQAEhngEgkgAgRgnIgBAOIAAANQAJgDAHgFQAMgJgCgHQgBgFgHAAQgGAAgLACg");
	this.shape_5.setTransform(-172.475,-8.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#092D74").s().p("AhABBQAXhBAMhCIA5gHQAKA7AbBNIgsAJIgGgZIgcADIgFAYgAAJAVIgKgyIgJAyIATAAg");
	this.shape_6.setTransform(-184.775,-8.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#092D74").s().p("AguAoIgBgjIAAhFIArgEIArgFIACASIADASIgYABIgWADIgCAKIAAAKIASgEIARgCIACANIACANIgXADIgQADIgBASIAYgDIAYgEIADATIACARIgqAFIg0AJg");
	this.shape_7.setTransform(-195.925,-8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#092D74").s().p("AgshAIAsgGQgFA1AAAsIAtgFIAFAkQgkACg1ALg");
	this.shape_8.setTransform(-205.475,-8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AkyiCIJlAAQA2AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg2AAIplAAQg2AAgngmQgmgmAAg3IAAAAQAAg2AmgmQAngmA2AAg");
	this.shape_9.setTransform(-155.7295,-8.5391,1.5444,1.1402);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6A81C").s().p("AkxCDQg3AAgmgmQgngmAAg3IAAAAQAAg2AngmQAmgmA3AAIJjAAQA3AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg3AAg");
	this.shape_10.setTransform(-155.7295,-8.5391,1.5444,1.1402);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-224.3,-24.5,137.20000000000002,32), null);


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


(lib.Sparkle_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sparkle1();
	this.instance.setTransform(219.5,32.55,0.3599,0.3599,0.5296,0,0,103.4,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-89.4704},14).to({rotation:0.5296,x:219.55,y:32.5},15).to({rotation:90.5296},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.9,-20.2,105.4,105.5);


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

	// timeline functions:
	this.frame_239 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(80,125,0.5333,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// glitter 1 copy 4
	this.instance = new lib.Sparkle_1();
	this.instance.setTransform(82.85,431.4,0.2086,0.2086,0,0,0,220.8,33.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).wait(182));

	// glitter 1 copy 5
	this.instance_1 = new lib.Sparkle_1();
	this.instance_1.setTransform(149.45,480.9,0.1473,0.1473,0,0,0,220.7,33.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({regY:33.7,scaleX:0.4171,scaleY:0.4171,x:149.5},10,cjs.Ease.get(1)).wait(177));

	// glitter 1 copy 2
	this.instance_2 = new lib.Sparkle_1();
	this.instance_2.setTransform(57.65,16.9,0.1357,0.1357,0,0,0,220.8,33.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).to({regX:220.6,regY:33.7,scaleX:0.3843,scaleY:0.3843,x:57.7},10,cjs.Ease.get(1)).wait(188));

	// glitter 1 copy 3
	this.instance_3 = new lib.Sparkle_1();
	this.instance_3.setTransform(19.05,18.65,0.2714,0.2714,0,0,0,220.3,33.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({regX:220.6,scaleX:0.7686,scaleY:0.7686,x:19.2},10,cjs.Ease.get(1)).wait(193));

	// glitter 1 copy
	this.instance_4 = new lib.Sparkle_1();
	this.instance_4.setTransform(153.9,72.35,0.083,0.083,0,0,0,221,33.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({regY:33.6,scaleX:0.2351,scaleY:0.2351,x:153.95},10,cjs.Ease.get(1)).wait(188));

	// glitter 1
	this.instance_5 = new lib.Sparkle_1();
	this.instance_5.setTransform(146.95,40.3,0.166,0.166,0,0,0,220.4,33.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.4703,scaleY:0.4703,x:147.05},10,cjs.Ease.get(1)).wait(193));

	// phone no & Website
	this.instance_6 = new lib.phn("synched",0);
	this.instance_6.setTransform(83.1,546.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({y:547.05,alpha:1},9,cjs.Ease.get(1)).wait(194));

	// Cta
	this.instance_7 = new lib.Cta();
	this.instance_7.setTransform(235.75,559.05);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({y:512.15,alpha:1},9,cjs.Ease.get(1)).wait(203));

	// Logo
	this.instance_8 = new lib.Logo_1();
	this.instance_8.setTransform(80.15,557.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({y:517.7,alpha:1},9,cjs.Ease.get(1)).wait(212));

	// Img 1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(70.3,426.15,0.72,0.72);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({regX:0.1,x:70.35,alpha:1},9,cjs.Ease.get(1)).wait(213));

	// sub head_02
	this.instance_10 = new lib.subhead_02("synched",0);
	this.instance_10.setTransform(71.4,270.25);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({x:81.4,alpha:1},11,cjs.Ease.get(1)).wait(135));

	// sub head_01
	this.instance_11 = new lib.subhead_01("synched",0);
	this.instance_11.setTransform(98.85,190.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({_off:false},0).to({x:78.85,alpha:1},11,cjs.Ease.get(1)).wait(144));

	// Head
	this.instance_12 = new lib.Head();
	this.instance_12.setTransform(79.55,236.5,1.2289,1.2289,0,0,0,-12.8,-102.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({y:214.5,alpha:1},9,cjs.Ease.get(1)).wait(56).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(154));

	// RRLogo
	this.instance_13 = new lib.Symbol8();
	this.instance_13.setTransform(78.65,71.1,0.1882,0.1882,0,0,0,0,0.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:0.1,scaleX:0.76,scaleY:0.76,alpha:1},9,cjs.Ease.get(1)).wait(231));

	// Corner
	this.instance_14 = new lib.Corner();
	this.instance_14.setTransform(141.1,601.15,0.7105,0.7105,180);

	this.instance_15 = new lib.Corner();
	this.instance_15.setTransform(20,-1,0.7105,0.7105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(240));

	// Background
	this.instance_16 = new lib.BGG();
	this.instance_16.setTransform(-114,-5,0.635,0.635);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An7dxMAAAg7hIP3AAMAAAA7hg");
	this.shape.setTransform(101.95,409.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_16}]}).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-11.1,508,616.4);


// stage content:
(lib.WFSB_216412_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
		{src:"BGG.png", id:"BGG"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"Logo.png", id:"Logo"},
		{src:"newheader_Png.png", id:"newheader_Png"},
		{src:"SBH_01.png", id:"SBH_01"},
		{src:"Sparkle.png", id:"Sparkle"},
		{src:"Subhead_02.png", id:"Subhead_02"}
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