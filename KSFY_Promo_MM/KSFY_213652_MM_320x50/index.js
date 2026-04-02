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



(lib.Ace_Logo = function() {
	this.initialize(img.Ace_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,57);


(lib.BG1 = function() {
	this.initialize(img.BG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1384,778);


(lib.BG2 = function() {
	this.initialize(img.BG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1384,778);


(lib.Cloud1 = function() {
	this.initialize(img.Cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,795,315);


(lib.Cloud2 = function() {
	this.initialize(img.Cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,795,315);


(lib.Cooper = function() {
	this.initialize(img.Cooper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,204);


(lib.DNN_Logo = function() {
	this.initialize(img.DNN_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,66);


(lib.FIRSTALERT_Logo = function() {
	this.initialize(img.FIRSTALERT_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,64);


(lib.Paul_Logo = function() {
	this.initialize(img.Paul_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,120);


(lib.RAIN = function() {
	this.initialize(img.RAIN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,321);


(lib.Sunny_Logo = function() {
	this.initialize(img.Sunny_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,187);


(lib.THUNDER = function() {
	this.initialize(img.THUNDER);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,256);


(lib.Turnodo = function() {
	this.initialize(img.Turnodo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,362);// helper functions:

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


(lib.Turnodo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Turnodo();
	this.instance.setTransform(-93.45,-99.2,0.5481,0.5481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Turnodo_1, new cjs.Rectangle(-93.4,-99.2,186.9,198.4), null);


(lib.Sponsoredby = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Cooper();
	this.instance.setTransform(119,-4,0.2959,0.2959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Sunny_Logo();
	this.instance_1.setTransform(-37,-4,0.3342,0.3342);

	this.instance_2 = new lib.Paul_Logo();
	this.instance_2.setTransform(36,18,0.3184,0.3184);

	this.instance_3 = new lib.Ace_Logo();
	this.instance_3.setTransform(33,-4,0.3177,0.3177);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAaQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCgAgEgPQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(-52.775,27.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRApIAMgbIgWg2IANAAIAOAqIAQgqIAMAAIghBRg");
	this.shape_1.setTransform(-57.075,29.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAjQgFgCgDgEIAAAIIgMAAIAAhKIAMAAIAAAcQADgEAFgDQAFgDAGAAQAGAAAGAEQAHAEADAGQADAFABAJQgBAIgDAHQgDAGgHAEQgGAEgGAAQgGAAgFgDgAgHgGQgFACgCAEQgCADAAAGQAAAGACAEQACAEAFADQAEACADAAQAEAAAEgDQAEgCACgEQACgEAAgGQAAgGgCgDQgCgEgEgCQgEgDgEAAQgDAAgEADg");
	this.shape_2.setTransform(-63.35,26.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAiQgFgEgEgGQgEgHABgIQgBgJAEgFQAEgGAFgEQAHgEAHAAQAFAAAFADQAFACADAEIAAgbIALAAIAABKIgLAAIAAgJQgDAEgEADQgFADgGAAQgHAAgHgEgAgHgGQgEACgCAEQgCADgBAGQABAGACAEQACAEAEACQAEADADAAQAEAAAFgCQADgDACgEQADgEAAgGQAAgGgDgDQgCgEgDgCQgFgDgEAAQgDAAgEADg");
	this.shape_3.setTransform(-73.5,26.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAZQgGgDgDgHQgEgGAAgJQAAgIADgGQAEgGAGgEQAGgEAIAAQAHAAAGAEQAHADADAGQAEAHAAAIIgBAEIgpAAQAAAHAEAEQAFAEAGAAQAIAAAEgIIANAAQgCAIgIAFQgGAFgJAAQgIAAgGgEgAAPgEQAAgGgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAGIAdAAIAAAAg");
	this.shape_4.setTransform(-80,27.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAcIAAg2IALAAIAAAIQACgEAEgDQAEgCAGAAIAAAMIgDAAQgHAAgDADQgDAEAAAIIAAAcg");
	this.shape_5.setTransform(-84.95,27.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAZQgGgDgEgHQgDgGAAgJQAAgHADgHQAEgGAGgEQAHgEAHAAQAIAAAGAEQAHADADAHQAEAHAAAHQAAAIgEAHQgEAHgGADQgHAEgHAAQgIAAgGgEgAgIgPQgDACgDAEQgCAEAAAFQAAAJAFAFQAEAFAHAAQAEAAAEgCQADgCADgFQACgEAAgGQAAgFgCgEQgCgEgEgCQgEgDgEAAQgEAAgEADg");
	this.shape_6.setTransform(-90.475,27.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAaQgFgCgDgEQgDgEAAgFIAMAAQAAADADADQADACAEAAQAEAAADgCQADgCAAgDQAAgDgDgBIgJgEIgKgDQgEgBgCgDQgDgDAAgGQAAgEACgEQADgDAFgCQAFgDAFAAQAJAAAGAFQAGAFAAAIIgLAAQAAgDgDgDQgDgCgEAAQgEAAgCACQgDACAAACQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEACIAGADIAJADIAHAEQADADAAAFQAAAFgDAEQgCADgFADQgFACgGAAQgGAAgFgDg");
	this.shape_7.setTransform(-96.575,27.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOAcIAAgeQAAgHgEgEQgDgEgHAAQgFAAgEAEQgEAEAAAHIAAAeIgLAAIAAg2IALAAIAAAGQADgDAEgCQAFgCAEAAQAGAAAFADQAGACACAGQADAFAAAIIAAAfg");
	this.shape_8.setTransform(-102.675,27.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAZQgGgDgEgHQgDgGAAgJQAAgHADgHQAEgGAGgEQAHgEAHAAQAIAAAGAEQAHADADAHQAEAHAAAHQAAAIgEAHQgEAHgGADQgHAEgHAAQgIAAgGgEgAgIgPQgDACgDAEQgCAEAAAFQAAAJAFAFQAEAFAHAAQAEAAAEgCQADgCADgFQACgEAAgGQAAgFgCgEQgCgEgEgCQgEgDgEAAQgEAAgEADg");
	this.shape_9.setTransform(-109.325,27.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbApIAAhRIALAAIAAAJQADgEAFgCQAFgEAFAAQAIAAAFAFQAHADADAHQADAFABAJQgBAJgDAFQgDAGgHAEQgFAEgIAAQgFAAgFgDQgFgCgDgEIAAAigAgHgcQgFACgCAEQgCAFAAAFQAAAGACAFQACADAFACQAEACADAAQAEAAAEgDQAEgCACgDQACgEABgGQgBgGgCgEQgCgEgEgCQgEgDgEAAQgDAAgEADg");
	this.shape_10.setTransform(-115.9,29.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAhQgGgCgDgEQgDgFAAgHIAMAAQAAAFADADQAEADAEAAQAGAAAEgDQADgDAAgEQAAgDgCgDIgFgEIgIgCIgLgDQgEgBgDgEQgDgEAAgHQAAgGADgEQADgFAFgCQAGgCAGAAQAKAAAGAEQAHAGABAIIgNAAQAAgEgEgDQgDgCgEAAQgFAAgDACQgEADAAAFQAAADACACIAFAEIAIACIALADQAEACADADQADAEAAAHQAAAGgCAEQgDAFgGADQgFADgIAAQgGAAgFgDg");
	this.shape_11.setTransform(-122.725,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A6XFxIAArhMA0wAAAIAALhg");
	this.shape_12.setTransform(26.45,27.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sponsoredby, new cjs.Rectangle(-142.4,-9.7,337.70000000000005,73.7), null);


(lib.rainnnn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.RAIN();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rainnnn, new cjs.Rectangle(0,0,324,321), null);


(lib.lightnung = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.THUNDER();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lightnung, new cjs.Rectangle(0,0,384,256), null);


(lib.flash = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg2DALSQlFAAAAhGIAA0XQAAhGFFAAMBsHAAAQFEAAAABGIAAUXQAABGlEAAg");
	this.shape.setTransform(370.45,54.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash, new cjs.Rectangle(-8,-17.2,756.9,144.29999999999998), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAUAtIAAgwQAAgKgFgGQgGgGgJAAQgIAAgGAGQgFAGAAAKIAAAwIgXAAIAAhYIAXAAIAAALQAEgGAIgDQAHgDAHgBQAQAAAKALQAKAKAAASIAAAzg");
	this.shape.setTransform(92.375,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLALgFQAKgGAMAAQANAAAKAGQALAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgKAGgNAAQgMAAgLgGgAgPgTQgHAHAAAMQAAANAHAHQAFAHAKAAQAGAAAFgDQAGgDADgGQADgGAAgJQAAgMgHgHQgHgGgJAAQgJAAgGAGg");
	this.shape_1.setTransform(81.55,14.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgFgGQgEgHgBgIIAXAAQAAAFAFADQAEADAGAAQAGAAAEgCQAEgDgBgEQABgEgFgCIgNgFIgRgFQgGgDgFgEQgEgFAAgJQAAgIAEgGQAEgGAJgEQAHgDALAAQAPAAAKAIQAKAIABANIgXAAQAAgFgEgDQgEgDgGAAQgGAAgDACQgDACAAAEQAAAFAFACQAEADAIACIARAFQAFACAFAFQAFAFAAAJQAAAIgEAGQgFAGgHAEQgJADgKAAQgKAAgJgEg");
	this.shape_2.setTransform(71.65,14.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAoQgKgFgFgLQgFgLgBgNQABgNAFgKQAFgLAKgFQAJgGALAAQAJAAAIAEQAHAEAFAGIAAgNIAXAAIAABZIgXAAIAAgNQgFAGgHAEQgIAEgJAAQgLAAgJgGgAgLgWQgFADgEAGQgDAGABAHQgBAIADAGQAEAGAFADQAGADAFAAQAHAAAFgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_3.setTransform(61.3,14.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgFgGgJAAQgIAAgFAFQgHAGgBAJIAqAAIAAAAg");
	this.shape_4.setTransform(50.85,14.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgEgGQgGgHAAgIIAXAAQAAAFAEADQAFADAFAAQAHAAAEgCQADgDABgEQgBgEgEgCIgNgFIgQgFQgHgDgEgEQgFgFAAgJQAAgIAEgGQAFgGAHgEQAJgDAJAAQAQAAAKAIQAJAIABANIgVAAQgBgFgEgDQgDgDgHAAQgFAAgEACQgDACAAAEQAAAFAEACQAFADAJACIAQAFQAFACAGAFQAEAFAAAJQAAAIgEAGQgEAGgJAEQgHADgLAAQgKAAgJgEg");
	this.shape_5.setTransform(41.1,14.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAtIAAhYIAXAAIAAAOQADgHAHgEQAHgEAJgBIAAAZIgGAAQgKAAgGAEQgEAGAAALIAAAsg");
	this.shape_6.setTransform(29.45,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgGgGgJAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_7.setTransform(20.6,14.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA8IAAgyQAAgKgFgFQgGgGgJAAQgIAAgGAGQgFAFAAAKIAAAyIgXAAIAAh3IAXAAIAAApQAEgFAIgEQAHgDAIAAQAKAAAIAEQAIAFAEAIQAFAJAAALIAAA1g");
	this.shape_8.setTransform(10.025,12.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANA4QgcAAAAgcIAAgqIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAUAAIAAATIgUAAIAAAqQAAAFACACQACACAFAAIALAAIAAATg");
	this.shape_9.setTransform(1.175,13.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAoQgKgFgGgLQgEgLAAgNQAAgNAEgKQAGgLAKgFQAIgGAMAAQAJAAAIAEQAHAEAFAGIAAgNIAXAAIAABZIgXAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgIgGgAgLgWQgFADgEAGQgDAGAAAHQAAAIADAGQAEAGAFADQAGADAFAAQAHAAAFgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgFgDgHAAQgFAAgGADg");
	this.shape_10.setTransform(-7.9,14.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKABANIgCAIIhAAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_11.setTransform(-18.35,14.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAtIgQg+IgPA+IgYAAIgbhZIAXAAIAQBDIARhDIAXAAIAQBDIAQhDIAWAAIgaBZg");
	this.shape_12.setTransform(-30.45,14.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAGAKABANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_13.setTransform(-46.6,14.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAtIAAhYIAXAAIAAAOQADgHAHgEQAHgEAJgBIAAAZIgGAAQgLAAgFAEQgEAGAAALIAAAsg");
	this.shape_14.setTransform(-54.8,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQgBgJgFgFQgHgGgIAAQgIAAgFAFQgHAGAAAJIApAAIAAAAg");
	this.shape_15.setTransform(-63.65,14.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAtIghhZIAZAAIAVBEIAXhEIAYAAIghBZg");
	this.shape_16.setTransform(-73.775,14.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKAAgOQAAgNAFgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKAAANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_17.setTransform(-83.85,14.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAqQgJgEgFgGQgEgHgBgIIAXAAQAAAFAEADQAFADAGAAQAGAAAEgCQAEgDgBgEQABgEgFgCIgNgFIgRgFQgGgDgFgEQgEgFAAgJQAAgIAEgGQAFgGAHgEQAJgDAKAAQAPAAAKAIQAJAIACANIgXAAQAAgFgEgDQgDgDgHAAQgGAAgDACQgDACAAAEQAAAFAFACQAEADAIACIARAFQAFACAFAFQAFAFAAAJQAAAIgEAGQgFAGgHAEQgJADgKAAQgKAAgJgEg");
	this.shape_18.setTransform(-93.6,14.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA7QgMgJgCgPIAXAAQACAFAFAEQAGAEAIAAQAJAAAHgGQAGgGAAgMIAAgOQgEAHgJADQgHAFgJAAQgLAAgJgGQgKgGgGgKQgEgKAAgNQAAgOAEgLQAGgKAKgGQAJgFALAAQAJAAAIADQAIAEAEAHIAAgNIAXAAIAABZQAAANgGAJQgEAKgKAGQgLAGgOAAQgSgBgMgIgAgKgsQgGADgDAGQgEAHAAAIQAAAHAEAGQADAHAGACQAFADAFAAQAGAAAGgDQAFgCADgGQAEgGAAgIQAAgIgEgHQgDgFgFgEQgGgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(102.9,-1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUAuIAAgxQAAgKgFgHQgGgFgJAAQgIAAgGAFQgFAHAAAKIAAAxIgXAAIAAhZIAXAAIAAALQAEgGAIgDQAHgEAHABQAQAAAKAKQAKAKAAASIAAA0g");
	this.shape_20.setTransform(92.125,-3.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA/IAAhYIAWAAIAABYgAgJgoQgEgDAAgGQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAGgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_21.setTransform(84.275,-5.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA0AuIAAgxQAAgLgGgFQgGgFgJAAQgJAAgFAFQgFAFgBALIAAAxIgVAAIAAgxQAAgLgGgFQgFgFgJAAQgJAAgGAFQgFAFAAALIAAAxIgXAAIAAhZIAXAAIAAALQAEgGAHgDQAHgEAIABQAKgBAJAFQAHAEAFAJQAEgIAIgFQAIgEAKAAQARAAAKAKQAKAKAAASIAAA0g");
	this.shape_22.setTransform(73.3,-3.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQALgGAMAAQANAAALAGQAKAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAGgMAAQgMAAgLgGgAgQgTQgGAHAAAMQAAANAGAHQAHAHAJAAQAFAAAGgDQAFgDADgGQAEgGAAgJQAAgMgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_23.setTransform(59.35,-3.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAoQgKgFgGgLQgFgKAAgOQAAgNAFgKQAGgLAKgFQAKgGAMAAQAQAAAMAIQAKAIAEAPIgYAAQgCgFgEgEQgFgDgHAAQgJAAgFAHQgGAHAAAMQAAANAGAHQAFAHAJAAQAOAAAEgMIAYAAQgEAOgKAJQgMAIgQAAQgMAAgKgGg");
	this.shape_24.setTransform(49.05,-3.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgtBDIAAiDIAWAAIAAANQAFgGAIgFQAHgEAJAAQALAAAKAGQAJAGAFAKQAGALgBANQABAOgGAKQgFAKgJAGQgKAGgLAAQgJAAgHgEQgIgEgFgHIAAA4gAgKgrQgGAEgDAGQgDAFgBAJQABAIADAGQADAFAGADQAEADAGAAQAGAAAFgDQAGgDADgGQAEgGAAgIQAAgIgEgGQgDgGgGgDQgFgDgGAAQgGAAgEADg");
	this.shape_25.setTransform(38.75,-1.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYApQgJgEgEgJQgFgJABgMIAAgzIAWAAIAAAwQAAALAFAFQAGAGAIAAQAJAAAGgGQAFgFAAgLIAAgwIAWAAIAABYIgWAAIAAgLQgEAGgIADQgGADgIAAQgLAAgHgEg");
	this.shape_26.setTransform(27.35,-3.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKABANIgCAIIhAAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgFAFQgGAGgCAJIAqAAIAAAAg");
	this.shape_27.setTransform(12.7,-3.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUA8IAAgyQAAgKgFgFQgGgGgJAAQgIAAgGAGQgFAFAAAKIAAAyIgXAAIAAh3IAXAAIAAApQAEgFAIgEQAHgDAIAAQAKAAAIAEQAIAFAEAIQAFAJAAALIAAA1g");
	this.shape_28.setTransform(2.125,-4.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANA4QgcAAAAgcIAAgqIgLAAIAAgTIALAAIAAgWIAWAAIAAAWIAUAAIAAATIgUAAIAAAqQAAAFACACQACACAFAAIALAAIAAATg");
	this.shape_29.setTransform(-6.725,-4.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAFQgEAEAAAMIAAAtg");
	this.shape_30.setTransform(-17.1,-3.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAoQgKgFgGgLQgGgKAAgOQAAgNAGgKQAGgLAKgFQALgGAMAAQANAAALAGQAKAFAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAGgMAAQgMAAgLgGgAgQgTQgGAHAAAMQAAANAGAHQAHAHAJAAQAFAAAGgDQAFgDADgGQAEgGAAgJQAAgMgHgHQgGgGgKAAQgJAAgHAGg");
	this.shape_31.setTransform(-26.15,-3.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNA/IAAhGIgKAAIAAgTIAKAAIAAgEQAAgRAJgHQAJgIASAAIAAATQgIAAgDADQgDADAAAIIAAADIAPAAIAAATIgPAAIAABGg");
	this.shape_32.setTransform(-34.375,-5.1265);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgFgKAAgOQAAgNAFgKQAFgLALgFQAKgGAMAAQANAAAKAFQAKAGAFAKQAHAKAAANIgBAIIhBAAQABAKAGAFQAGAFAIAAQAMAAAGgKIAYAAQgEANgLAIQgLAIgQAAQgLAAgLgGgAAVgHQAAgJgHgFQgGgGgIAAQgIAAgGAFQgFAGgCAJIAqAAIAAAAg");
	this.shape_33.setTransform(-46.5,-3.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAFQgEAEAAAMIAAAtg");
	this.shape_34.setTransform(-54.7,-3.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAoQgJgFgGgLQgEgLAAgNQAAgNAEgKQAGgLAJgFQAKgGALAAQAJAAAHAEQAIAEAFAGIAAgNIAWAAIAABZIgWAAIAAgNQgEAGgJAEQgHAEgJAAQgLAAgKgGgAgKgWQgGADgDAGQgDAGgBAHQABAIADAGQADAGAGADQAFADAFAAQAGAAAGgDQAFgDADgGQAEgGAAgIQAAgHgEgGQgDgGgFgDQgGgDgGAAQgGAAgEADg");
	this.shape_35.setTransform(-64.3,-3.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtBDIAAiDIAWAAIAAANQAEgGAIgFQAIgEAJAAQAMAAAJAGQAJAGAFAKQAFALABANQgBAOgFAKQgFAKgJAGQgJAGgMAAQgJAAgIgEQgHgEgFgHIAAA4gAgLgrQgFAEgEAGQgDAFAAAJQAAAIADAGQAEAFAFADQAGADAFAAQAGAAAFgDQAGgDADgGQADgGAAgIQAAgIgDgGQgDgGgGgDQgFgDgGAAQgFAAgGADg");
	this.shape_36.setTransform(-74.95,-1.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKABgOQgBgNAGgKQAGgLAKgFQAKgGAMAAQANAAAKAFQAKAGAGAKQAFAKAAANIgBAIIhAAAQABAKAGAFQAGAFAIAAQANAAAEgKIAZAAQgEANgLAIQgLAIgQAAQgMAAgKgGgAAVgHQAAgJgHgFQgFgGgJAAQgIAAgFAFQgHAGgBAJIAqAAIAAAAg");
	this.shape_37.setTransform(-85.95,-3.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAuIAAhZIAXAAIAAAOQADgHAHgEQAHgFAJABIAAAXIgGAAQgKABgGAFQgEAEAAAMIAAAtg");
	this.shape_38.setTransform(-94.15,-3.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtBDIAAiDIAWAAIAAANQAFgGAIgFQAHgEAJAAQALAAAKAGQAJAGAFAKQAFALAAANQAAAOgFAKQgFAKgJAGQgKAGgLAAQgJAAgHgEQgIgEgFgHIAAA4gAgKgrQgGAEgDAGQgEAFAAAJQAAAIAEAGQADAFAGADQAFADAFAAQAGAAAFgDQAGgDADgGQADgGAAgIQAAgIgDgGQgDgGgGgDQgFgDgGAAQgFAAgFADg");
	this.shape_39.setTransform(-103.2,-1.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgbApQgIgEgFgKQgEgIAAgMIAAg0IAcAAIAAAxQAAAIAEAFQAFAGAHAAQAIAAAEgGQAFgFABgIIAAgxIAbAAIAABZIgbAAIAAgMQgFAGgHAEQgGAEgJgBQgKABgIgFg");
	this.shape_40.setTransform(45.2,-20.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAoQgLgFgGgLQgGgKAAgOQAAgNAGgKQAHgLAKgGQALgFAMAAQANAAALAFQALAGAGALQAGAKAAANQAAAOgGAKQgHALgKAFQgLAHgNAAQgMAAgLgHgAgMgPQgGAFAAAKQAAALAGAGQAFAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgFQgFgHgIAAQgHAAgFAHg");
	this.shape_41.setTransform(34.375,-20.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiBCIAVgtIglhXIAeAAIAVA4IAUg4IAeAAIg3CEg");
	this.shape_42.setTransform(23.85,-18.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdA6QgNgJgBgQIAbAAQABAFAFADQAFADAHAAQAIAAAFgFQAFgFAAgLIAAgMQgEAGgHAEQgHAEgJAAQgLAAgJgGQgJgFgFgLQgFgKgBgOQABgNAFgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgNIAcAAIAABZQAAANgGAKQgEAKgKAGQgKAGgPAAQgUAAgMgKgAgMglQgGAGgBAKQABALAGAFQAFAFAIABQAIgBAFgFQAGgFAAgLQAAgKgGgGQgFgGgIAAQgIAAgFAGg");
	this.shape_43.setTransform(9,-18.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARAtIAAgvQAAgJgEgGQgFgEgIAAQgHAAgEAEQgFAGAAAJIAAAvIgcAAIAAhZIAcAAIAAANQAEgHAHgDQAGgDAJgBQAQAAAJAKQAKALAAASIAAAzg");
	this.shape_44.setTransform(-1.875,-21);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgmQgEgEAAgHQAAgGAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgHAAQgGAAgFgEg");
	this.shape_45.setTransform(-10.025,-22.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgvBDIAAiEIAcAAIAAANQAEgGAHgEQAIgEAIAAQALAAAJAGQAJAFAFALQAGAKAAAOQAAAOgGAKQgFAKgJAGQgJAGgLAAQgJAAgGgEQgIgEgEgGIAAA3gAgOgkQgFAGAAAKQAAALAFAFQAGAFAIAAQAIAAAFgFQAHgGAAgKQgBgKgFgGQgGgGgIAAQgIAAgGAGg");
	this.shape_46.setTransform(-17.9,-18.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_47.setTransform(-26.325,-22.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAoQgLgFgFgLQgGgKAAgOQAAgNAGgKQAFgLALgGQAKgFAMAAQANgBALAGQAKAFAGALQAFAKAAAOIAAAGIg+AAQABAJAFAFQAEAEAHAAQAKAAAEgJIAdAAQgCAJgGAHQgGAHgJAEQgJAEgLABQgMAAgKgHgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_48.setTransform(-33.925,-20.95);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAWA5IAAgvIgqAAIAAAvIgcAAIAAhxIAcAAIAAAtIAqAAIAAgtIAbAAIAABxg");
	this.shape_49.setTransform(-45.1,-22.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-111,-35.4,222,61.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAzA/IAAhPIgzA8IgBAAIgyg8IAABPIgjAAIAAh9IAoAAIAuA9IAwg9IAnAAIAAB9g");
	this.shape.setTransform(421.775,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuA/IgMgYIhEAAIgMAYIgmAAIBBh9IAnAAIBBB9gAAWANIgWgsIgVAsIArAAg");
	this.shape_1.setTransform(402.475,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCA/IAAh9ICDAAIAAAcIhfAAIAAAVIBOAAIAAAaIhOAAIAAAWIBhAAIAAAcg");
	this.shape_2.setTransform(385.875,-0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA/IAAhgIg0AAIAAgdICNAAIAAAdIg1AAIAABgg");
	this.shape_3.setTransform(369.675,-0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.FIRSTALERT_Logo();
	this.instance.setTransform(189,-22,0.5913,0.5913);

	this.instance_1 = new lib.DNN_Logo();
	this.instance_1.setTransform(25,-23,0.5913,0.5913);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAZIgvAAIAAAbIApAAIAAAXIgpAAIAAAdIAvAAIAAAZg");
	this.shape_4.setTransform(6.975,-3.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBBIAAg2IgxAAIAAA2IggAAIAAiBIAgAAIAAAzIAxAAIAAgzIAgAAIAACBg");
	this.shape_5.setTransform(-5.325,-3.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBBIAAhoIgjAAIAAgZIBlAAIAAAZIgjAAIAABog");
	this.shape_6.setTransform(-18.05,-3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBBIg0hQIAABQIghAAIAAiBIAhAAIA0BQIAAhQIAfAAIAACBg");
	this.shape_7.setTransform(-35.25,-3.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_8.setTransform(-45.35,-3.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA6QgPgIgJgPQgJgQAAgTQAAgSAJgQQAJgPAPgIQAQgJARAAQATAAAPAJQAQAIAIAPQAJAQAAASQAAATgJAQQgJAPgPAIQgPAJgTAAQgRAAgQgJgAgYgbQgJAKAAARQAAARAJALQAJAKAPAAQAQAAAJgKQAKgLAAgRQAAgQgKgLQgJgKgQAAQgPAAgJAKg");
	this.shape_9.setTransform(-55.775,-3.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA2QgMgLAAgWIAfAAQAAAIAEAEQADAFAFAAQAGAAADgEQADgEAAgHIAAhYIAgAAIAABYQAAAVgLALQgMALgUAAQgTAAgNgMg");
	this.shape_10.setTransform(-69.325,-3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-75.4,-23,510.1,39), null);


(lib.Date = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BfIA7iMIhCAAIAAgxIB9AAIAAAqIg7CTg");
	this.shape.setTransform(49.925,-5.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBfIAAiHIgcAAIAAg2IBXAAIAAC9g");
	this.shape_1.setTransform(36.925,-5.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8AYIAAgvIB5AAIAAAvg");
	this.shape_2.setTransform(18.375,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBSQgTgQgBgiIA5AAQgBAJAEAFQADAEAHABQAFgBADgDQADgEAAgFQAAgIgFgEQgFgDgKAAIgKAAIAAgtIAJAAQARABAAgQQAAgGgDgDQgCgDgEAAQgJAAAAAPIg5AAQABgeASgRQARgRAfAAQAUAAAPAHQAPAIAHAMQAHAMAAAPQAAASgIAKQgJALgLAEIAAAAQAgALAAAgQAAARgIAMQgIAOgOAGQgPAIgUgBQggAAgUgQg");
	this.shape_3.setTransform(-1.875,-5.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBfIAAiHIgcAAIAAg2IBXAAIAAC9g");
	this.shape_4.setTransform(-15.925,-5.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BcIAAi3IA5AAIAACLIA4AAIAAAsg");
	this.shape_5.setTransform(-32.225,-4.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBcIAAi3IA5AAIAAC3g");
	this.shape_6.setTransform(-43.9,-4.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBcIgihCIAABCIg6AAIAAi3IBVAAQAWAAAQAIQAQAIAIANQAIAOAAARQAAATgKANQgLAOgTAHIAoBGgAgTgMIAWAAQAIAAAEgDQAEgEAAgIQAAgIgEgEQgEgEgIAAIgWAAg");
	this.shape_7.setTransform(-56.975,-4.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLBcIAAi3IBQAAQAiAAATARQARARABAdQAAARgJAOQgHAOgRAIQgPAJgXAAIgVAAIAAA6gAgQgLIAQAAQARAAAAgRQAAgRgRAAIgQAAg");
	this.shape_8.setTransform(-74.7,-4.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoBcIgJgcIg9AAIgJAcIg9AAIBEi3IBCAAIBDC3gAARAVIgRgzIgQAzIAhAAg");
	this.shape_9.setTransform(-94.125,-4.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Date, new cjs.Rectangle(-105.7,-24.4,164.3,39.5), null);


(lib.Cloud2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cloud2();
	this.instance.setTransform(-289.45,-114.7,0.7282,0.7282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud2_1, new cjs.Rectangle(-289.4,-114.7,578.9,229.4), null);


(lib.Cloud1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Cloud1();
	this.instance.setTransform(-289.45,-114.7,0.7282,0.7282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cloud1_1, new cjs.Rectangle(-289.4,-114.7,578.9,229.4), null);


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


(lib.RAIN_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rainnnn();
	this.instance.setTransform(162,128.5,1,1,0,0,0,162,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:235.05},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,324,427.6);


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
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(160,45,1.0666,0.2,0,0,0,150,225);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// Sponsored by:
	this.instance = new lib.Sponsoredby();
	this.instance.setTransform(214.75,30.45,0.5121,0.5121,0,0,0,0,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({regY:0,y:10},9,cjs.Ease.get(1)).wait(102));

	// Helping you prepare for the upcoming severe weather season
	this.instance_1 = new lib.F2();
	this.instance_1.setTransform(10.2,23.65,0.5453,0.5453,0,0,0,0.2,-0.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:70.15,alpha:1},9,cjs.Ease.get(1)).wait(112));

	// JOIN THE
	this.instance_2 = new lib.F1();
	this.instance_2.setTransform(122.35,51.35,0.442,0.442,0,0,0,0.2,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regY:-0.1,y:24.75,alpha:1},9,cjs.Ease.get(1)).to({_off:true},100).wait(121));

	// APRIL 6 - 10
	this.instance_3 = new lib.Date();
	this.instance_3.setTransform(55.05,5.85,0.442,0.442,0,0,0,0.2,-0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0,y:24.9,alpha:1},9,cjs.Ease.get(1)).to({_off:true},110).wait(121));

	// FLash
	this.instance_4 = new lib.flash();
	this.instance_4.setTransform(69.5,64.15,0.4342,0.4342,0,0,0,162.7,144.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(1)).wait(79));

	// RAIN
	this.instance_5 = new lib.RAIN_1();
	this.instance_5.setTransform(162.6,58.75,0.9996,0.9996,0,0,0,161.9,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

	// Cloud2
	this.instance_6 = new lib.Cloud2_1();
	this.instance_6.setTransform(203.75,-6.6,0.4466,0.4466,0,0,0,0.4,-0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,x:201.9098,y:-6.55,alpha:0.3347},0).wait(1).to({x:200.2765,alpha:0.6681},0).wait(1).to({regX:0.4,regY:-0.1,x:198.85,y:-6.6,alpha:1},0).wait(1).to({regX:0,regY:0,x:197.7629,y:-6.55,alpha:0.6652},0).wait(1).to({x:196.8796,alpha:0.3319},0).wait(1).to({regX:0.4,regY:-0.1,x:196.2,y:-6.6,alpha:0},0).wait(1).to({regX:0,regY:0,x:195.127,y:-6.55,alpha:0.0085},0).wait(1).to({x:194.2578,alpha:0.0169},0).wait(1).to({x:193.3923,alpha:0.0253},0).wait(1).to({x:192.5306,alpha:0.0337},0).wait(1).to({x:191.6726,alpha:0.042},0).wait(1).to({x:190.8184,alpha:0.0503},0).wait(1).to({x:189.9679,alpha:0.0585},0).wait(1).to({x:189.1212,alpha:0.0667},0).wait(1).to({x:188.2782,alpha:0.0749},0).wait(1).to({x:187.439,alpha:0.083},0).wait(1).to({x:186.6036,alpha:0.0911},0).wait(1).to({x:185.7719,alpha:0.0992},0).wait(1).to({x:184.944,alpha:0.1072},0).wait(1).to({x:184.1198,alpha:0.1152},0).wait(1).to({x:183.2994,alpha:0.1232},0).wait(1).to({x:182.4827,alpha:0.1311},0).wait(1).to({x:181.6698,alpha:0.139},0).wait(1).to({x:180.8606,alpha:0.1469},0).wait(1).to({x:180.0552,alpha:0.1547},0).wait(1).to({x:179.2536,alpha:0.1624},0).wait(1).to({x:178.4557,alpha:0.1702},0).wait(1).to({x:177.6615,alpha:0.1779},0).wait(1).to({x:176.8712,alpha:0.1856},0).wait(1).to({x:176.0845,alpha:0.1932},0).wait(1).to({x:175.3016,alpha:0.2008},0).wait(1).to({x:174.5225,alpha:0.2083},0).wait(1).to({x:173.7472,alpha:0.2159},0).wait(1).to({x:172.9755,alpha:0.2233},0).wait(1).to({x:172.2077,alpha:0.2308},0).wait(1).to({x:171.4436,alpha:0.2382},0).wait(1).to({x:170.6832,alpha:0.2456},0).wait(1).to({x:169.9266,alpha:0.2529},0).wait(1).to({x:169.1738,alpha:0.2602},0).wait(1).to({x:168.4247,alpha:0.2675},0).wait(1).to({x:167.6794,alpha:0.2747},0).wait(1).to({x:166.9378,alpha:0.2819},0).wait(1).to({regX:0.4,regY:-0.1,x:166.4,y:-6.6,alpha:0.2891},0).wait(1).to({regX:0,regY:0,x:165.4629,y:-6.55,alpha:0.5273},0).wait(1).to({x:164.7296,alpha:0.7642},0).wait(1).to({regX:0.4,regY:-0.1,x:164.2,y:-6.6,alpha:1},0).wait(1).to({regX:0,regY:0,x:163.2796,y:-6.55,alpha:0.6649},0).wait(1).to({x:162.5629,alpha:0.3316},0).wait(1).to({regX:0.4,regY:-0.1,x:162.05,y:-6.6,alpha:0},0).wait(1).to({regX:0,regY:0,x:161.1387,y:-6.55},0).wait(1).to({x:160.4311},0).wait(1).to({x:159.7273},0).wait(1).to({x:159.0273},0).wait(1).to({x:158.331},0).wait(1).to({x:157.6385},0).wait(1).to({x:156.9497},0).wait(1).to({x:156.2647},0).wait(1).to({x:155.5834},0).wait(1).to({x:154.9059},0).wait(1).to({x:154.2321},0).wait(1).to({x:153.5621},0).wait(1).to({x:152.8958},0).wait(1).to({x:152.2333},0).wait(1).to({x:151.5745},0).wait(1).to({x:150.9195},0).wait(1).to({x:150.2683},0).wait(1).to({x:149.6208},0).wait(1).to({x:148.9771},0).wait(1).to({x:148.3371},0).wait(1).to({x:147.7008},0).wait(1).to({x:147.0684},0).wait(1).to({x:146.4396},0).wait(1).to({x:145.8147},0).wait(1).to({x:145.1934},0).wait(1).to({x:144.576},0).wait(1).to({x:143.9623},0).wait(1).to({x:143.3523},0).wait(1).to({x:142.7461},0).wait(1).to({x:142.1436},0).wait(1).to({x:141.5449},0).wait(1).to({regX:0.4,regY:-0.1,x:141.15,y:-6.6},0).wait(1).to({regX:0,regY:0,x:140.3405,y:-6.55,alpha:0.3355},0).wait(1).to({x:139.7348,alpha:0.6688},0).wait(1).to({regX:0.2,regY:-0.1,x:139.3,y:-6.6,alpha:1},0).wait(1).to({regX:0,regY:0,x:138.6147,y:-6.55,alpha:0.6645},0).wait(1).to({x:138.0331,alpha:0.3312},0).wait(1).to({regX:0.1,regY:-0.1,x:137.55,y:-6.6,alpha:0},0).wait(1).to({regX:0,regY:0,x:136.9319,y:-6.55},0).wait(1).to({x:136.3675},0).wait(1).to({x:135.8069},0).wait(1).to({x:135.25},0).wait(1).to({x:134.6969},0).wait(1).to({x:134.1475},0).wait(1).to({x:133.6019},0).wait(1).to({x:133.06},0).wait(1).to({x:132.5219},0).wait(1).to({x:131.9875},0).wait(1).to({x:131.4569},0).wait(1).to({x:130.93},0).wait(1).to({x:130.4069},0).wait(1).to({x:129.8875},0).wait(1).to({x:129.3719},0).wait(1).to({x:128.86},0).wait(1).to({x:128.3519},0).wait(1).to({x:127.8475},0).wait(1).to({x:127.3469},0).wait(1).to({x:126.85},0).wait(1).to({x:126.3569},0).wait(1).to({x:125.8675},0).wait(1).to({x:125.3819},0).wait(1).to({x:124.9},0).wait(1).to({x:124.4219},0).wait(1).to({x:123.9475},0).wait(1).to({x:123.4769},0).wait(1).to({x:123.01},0).wait(1).to({x:122.5469},0).wait(1).to({x:122.0875},0).wait(1).to({x:121.6319},0).wait(1).to({x:121.18},0).wait(1).to({x:120.7319},0).wait(1).to({x:120.2875},0).wait(1).to({x:119.8469},0).wait(1).to({x:119.41},0).wait(1).to({x:118.9769},0).wait(1).to({x:118.5475},0).wait(1).to({x:118.1219},0).wait(1).to({x:117.7},0).wait(1).to({x:117.2819},0).wait(1).to({x:116.8675},0).wait(1).to({x:116.4569},0).wait(1).to({regX:0.1,regY:-0.1,x:116.1,y:-6.6},0).wait(1).to({regX:0,regY:0,x:115.6652,y:-6.55,alpha:0.3365},0).wait(1).to({x:115.284,alpha:0.6698},0).wait(1).to({regX:0.5,regY:-0.1,x:114.95,y:-6.6,alpha:1},0).wait(1).to({regX:0,regY:0,x:114.3422,y:-6.55,alpha:0.6634},0).wait(1).to({x:113.9383,alpha:0.3301},0).wait(1).to({regX:0.2,regY:-0.1,x:113.75,y:-6.6,alpha:0},0).wait(1).to({regX:0,regY:0,x:113.2695,y:-6.55},0).wait(1).to({x:112.8928},0).wait(1).to({x:112.5198},0).wait(1).to({x:112.1506},0).wait(1).to({x:111.7851},0).wait(1).to({x:111.4234},0).wait(1).to({x:111.0654},0).wait(1).to({x:110.7111},0).wait(1).to({x:110.3606},0).wait(1).to({x:110.0139},0).wait(1).to({x:109.6709},0).wait(1).to({x:109.3317},0).wait(1).to({x:108.9962},0).wait(1).to({x:108.6644},0).wait(1).to({x:108.3364},0).wait(1).to({x:108.0122},0).wait(1).to({x:107.6917},0).wait(1).to({x:107.3749},0).wait(1).to({x:107.0619},0).wait(1).to({x:106.7527},0).wait(1).to({x:106.4471},0).wait(1).to({x:106.1454},0).wait(1).to({x:105.8474},0).wait(1).to({x:105.5531},0).wait(1).to({x:105.2626},0).wait(1).to({x:104.9758},0).wait(1).to({x:104.6928},0).wait(1).to({x:104.4136},0).wait(1).to({x:104.138},0).wait(1).to({x:103.8663},0).wait(1).to({x:103.5982},0).wait(1).to({x:103.334},0).wait(1).to({x:103.0734},0).wait(1).to({x:102.8167},0).wait(1).to({x:102.5636},0).wait(1).to({x:102.3144},0).wait(1).to({x:102.0688},0).wait(1).to({x:101.827},0).wait(1).to({x:101.589},0).wait(1).to({x:101.3547},0).wait(1).to({x:101.1242},0).wait(1).to({x:100.8974},0).wait(1).to({x:100.6744},0).wait(1).to({x:100.4551},0).wait(1).to({x:100.2395},0).wait(1).to({x:100.0277},0).wait(1).to({x:99.8197},0).wait(1).to({x:99.6154},0).wait(1).to({x:99.4149},0).wait(1).to({x:99.2181},0).wait(1).to({x:99.025},0).wait(1).to({x:98.8357},0).wait(1).to({x:98.6501},0).wait(1).to({x:98.4683},0).wait(1).to({x:98.2903},0).wait(1).to({x:98.116},0).wait(1).to({x:97.9454},0).wait(1).to({x:97.7786},0).wait(1).to({x:97.6155},0).wait(1).to({x:97.4562},0).wait(1).to({x:97.3007},0).wait(1).to({x:97.1488},0).wait(1).to({x:97.0008},0).wait(1).to({x:96.8565},0).wait(1).to({x:96.7159},0).wait(1).to({x:96.5791},0).wait(1).to({x:96.446},0).wait(1).to({x:96.3167},0).wait(1).to({x:96.1911},0).wait(1).to({x:96.0693},0).wait(1).to({x:95.9512},0).wait(1).to({x:95.8369},0).wait(1).to({x:95.7263},0).wait(1).to({x:95.6194},0).wait(1).to({x:95.5163},0).wait(1).to({x:95.417},0).wait(1).to({x:95.3214},0).wait(1).to({x:95.2296},0).wait(1).to({x:95.1415},0).wait(1).to({x:95.0572},0).wait(1).to({x:94.9766},0).wait(1).to({x:94.8997},0).wait(1).to({x:94.8266},0).wait(1).to({x:94.7573},0).wait(1).to({x:94.6917},0).wait(1).to({x:94.6298},0).wait(1).to({x:94.5717},0).wait(1).to({x:94.5174},0).wait(1).to({x:94.4668},0).wait(1).to({x:94.4199},0).wait(1).to({x:94.3768},0).wait(1).to({x:94.3374},0).wait(1).to({x:94.3018},0).wait(1).to({x:94.27},0).wait(1).to({x:94.2418},0).wait(1).to({x:94.2175},0).wait(1).to({x:94.1969},0).wait(1).to({x:94.18},0).wait(1).to({x:94.1669},0).wait(1).to({x:94.1575},0).wait(1).to({x:94.1519},0).wait(1).to({regX:0.2,regY:-0.1,x:94.25,y:-6.6},0).wait(1));

	// Cloud1
	this.instance_7 = new lib.Cloud1_1();
	this.instance_7.setTransform(201.4,-6.6,0.4466,0.4466,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.2,x:94.25},239,cjs.Ease.get(1)).wait(1));

	// LIghtning
	this.instance_8 = new lib.lightnung();
	this.instance_8.setTransform(153.95,11.65,0.298,0.298,0,-3.696,176.304,191.5,127.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},3).to({alpha:0},3).wait(37).to({alpha:1},3).to({alpha:0},3).wait(32).to({alpha:1},3).to({alpha:0},3).wait(44).to({alpha:1},3).to({alpha:0},3).wait(103));

	// Turnodo
	this.instance_9 = new lib.Turnodo_1();
	this.instance_9.setTransform(137.9,25.4,0.2359,0.2359,0,0,0,0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:0.5,scaleX:0.2879,scaleY:0.2879,x:175.75,y:20.6},239,cjs.Ease.get(1)).wait(1));

	// BG2
	this.instance_10 = new lib.BG2();
	this.instance_10.setTransform(-3,-111,0.2355,0.2355);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(240));

	// BG1
	this.instance_11 = new lib.BG1();
	this.instance_11.setTransform(-3,-111,0.2355,0.2355);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-133.4,383.29999999999995,320.8);


// stage content:
(lib.KSFY_213652_MM_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

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
	this.instance.setTransform(160,10.4,1.0667,0.0833,0,0,0,150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,26);
// library properties:
lib.properties = {
	id: '975D5B5BE9CB1949972A01487C3AD994',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Ace_Logo.jpg", id:"Ace_Logo"},
		{src:"BG1.jpg", id:"BG1"},
		{src:"BG2.jpg", id:"BG2"},
		{src:"Cloud1.png", id:"Cloud1"},
		{src:"Cloud2.png", id:"Cloud2"},
		{src:"Cooper.png", id:"Cooper"},
		{src:"DNN_Logo.png", id:"DNN_Logo"},
		{src:"FIRSTALERT_Logo.png", id:"FIRSTALERT_Logo"},
		{src:"Paul_Logo.jpg", id:"Paul_Logo"},
		{src:"RAIN.png", id:"RAIN"},
		{src:"Sunny_Logo.jpg", id:"Sunny_Logo"},
		{src:"THUNDER.png", id:"THUNDER"},
		{src:"Turnodo.png", id:"Turnodo"}
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