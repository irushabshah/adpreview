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
	this.instance.setTransform(120,-2,0.2842,0.2842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Sunny_Logo();
	this.instance_1.setTransform(-37,-4,0.3342,0.3342);

	this.instance_2 = new lib.Paul_Logo();
	this.instance_2.setTransform(37,18,0.3184,0.3184);

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
	this.shape.graphics.f("#FFFFFF").s().p("Eg1qAJ6QlDAAAAg9IAAx5QAAg9FDAAMBrVAAAQFDAAAAA9IAAR5QAAA9lDAAg");
	this.shape.setTransform(375.8,63.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash, new cjs.Rectangle(0,0,751.6,126.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA4BGIAAhZIg4BEIgBAAIg3hEIAABZIgoAAIAAiLIAtAAIAzBDIA1hDIAsAAIAACLg");
	this.shape.setTransform(447.875,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBGIgNgbIhMAAIgNAbIgrAAIBJiLIArAAIBJCLgAAYAOIgYgxIgYAxIAwAAg");
	this.shape_1.setTransform(426.475,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKBGIAAiLICSAAIAAAfIhqAAIAAAXIBYAAIAAAdIhYAAIAAAZIBtAAIAAAfg");
	this.shape_2.setTransform(408.125,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBGIAAhrIg5AAIAAggICbAAIAAAgIg5AAIAABrg");
	this.shape_3.setTransform(390.15,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.FIRSTALERT_Logo();
	this.instance.setTransform(196,-22,0.6371,0.6371);

	this.instance_1 = new lib.DNN_Logo();
	this.instance_1.setTransform(13,-23,0.6371,0.6371);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAZIgvAAIAAAbIApAAIAAAXIgpAAIAAAdIAvAAIAAAZg");
	this.shape_4.setTransform(-8.025,-3.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBBIAAg2IgxAAIAAA2IggAAIAAiBIAgAAIAAAzIAxAAIAAgzIAgAAIAACBg");
	this.shape_5.setTransform(-20.325,-3.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBBIAAhoIgiAAIAAgZIBkAAIAAAZIgjAAIAABog");
	this.shape_6.setTransform(-33.05,-3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbBBIg1hQIAABQIgfAAIAAiBIAfAAIA1BQIAAhQIAgAAIAACBg");
	this.shape_7.setTransform(-50.25,-3.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_8.setTransform(-60.35,-3.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghA6QgPgIgJgPQgJgQAAgTQAAgSAJgQQAJgPAPgIQAQgJARAAQATAAAPAJQAQAIAIAPQAJAQAAASQAAATgJAQQgJAPgPAIQgPAJgTAAQgRAAgQgJgAgYgbQgJAKAAARQAAARAJALQAJAKAPAAQAQAAAJgKQAKgLAAgRQAAgQgKgLQgJgKgQAAQgPAAgJAKg");
	this.shape_9.setTransform(-70.775,-3.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA2QgMgLAAgWIAfAAQAAAIAEAEQADAFAFAAQAGAAADgEQADgEAAgHIAAhYIAgAAIAABYQAAAVgLALQgMALgUAAQgTAAgNgMg");
	this.shape_10.setTransform(-84.325,-3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-90.4,-23,552.4,42.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BkIA+iTIhGAAIAAg0ICFAAIAAAsIg/Cbg");
	this.shape.setTransform(37.8,-5.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBkIAAiOIgeAAIAAg5IBdAAIAADHg");
	this.shape_1.setTransform(24.125,-5.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/AZIAAgxIB/AAIAAAxg");
	this.shape_2.setTransform(4.6,-4.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBWQgUgQAAglIA7AAQAAAKADAFQADAFAIABQAFAAADgFQADgDAAgHQABgHgGgEQgFgEgLAAIgKAAIAAgwIAKAAQASABgBgQQAAgHgCgDQgEgDgDAAQgKAAAAARIg7AAQAAghATgSQASgRAhAAQAWAAAOAIQAQAHAIANQAIAMAAARQgBASgIAMQgKALgLADIAAACQAiALAAAhQgBASgIANQgIANgQAIQgPAIgVgBQgiABgVgSg");
	this.shape_3.setTransform(-16.7,-5.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBkIAAiOIgeAAIAAg5IBdAAIAADHg");
	this.shape_4.setTransform(-31.475,-5.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BhIAAjBIA8AAIAACTIA7AAIAAAug");
	this.shape_5.setTransform(-48.65,-5.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBhIAAjBIA8AAIAADBg");
	this.shape_6.setTransform(-61,-5.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBhIgjhFIgBAAIAABFIg9AAIAAjBIBaAAQAYAAARAIQARAJAIAOQAIAOAAATQAAATgLAOQgKAPgVAHIArBKgAgVgMIAYAAQAIAAAFgEQAEgEABgJQgBgHgEgFQgFgEgIAAIgYAAg");
	this.shape_7.setTransform(-74.7,-5.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPBhIAAjBIBVAAQAkAAASASQATASAAAfQAAASgIAOQgJAPgQAJQgQAIgYAAIgYAAIAAA+gAgSgMIASAAQASAAAAgRQAAgSgSAAIgSAAg");
	this.shape_8.setTransform(-93.35,-5.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqBhIgJgdIhBAAIgJAdIhAAAIBHjBIBGAAIBGDBgAARAWIgRg1IgRA1IAiAAg");
	this.shape_9.setTransform(-113.8,-5.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Date, new cjs.Rectangle(-126,-25.7,172.9,41.5), null);


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
	this.ad_clickBtn.setTransform(364,45,2.4267,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(240));

	// Sponsored by:
	this.instance = new lib.Sponsoredby();
	this.instance.setTransform(479.55,56.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({y:16.95},9,cjs.Ease.get(1)).wait(102));

	// Helping you prepare for the upcoming severe weather season
	this.instance_1 = new lib.F2();
	this.instance_1.setTransform(59.5,42.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:169.5,alpha:1},9,cjs.Ease.get(1)).wait(112));

	// JOIN THE
	this.instance_2 = new lib.F1();
	this.instance_2.setTransform(296.5,97.2,0.8723,0.8723);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:44.85,alpha:1},9,cjs.Ease.get(1)).to({_off:true},100).wait(121));

	// APRIL 6 - 10
	this.instance_3 = new lib.Date();
	this.instance_3.setTransform(136.1,7.55,0.8723,0.8723);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:45.05,alpha:1},9,cjs.Ease.get(1)).to({_off:true},110).wait(121));

	// FLash
	this.instance_4 = new lib.flash();
	this.instance_4.setTransform(150.8,119.6,1,1,0,0,0,162.8,144.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(1)).wait(79));

	// RAIN
	this.instance_5 = new lib.RAIN_1();
	this.instance_5.setTransform(365.2,107.3,2.3021,2.3021,0,0,0,161.9,160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

	// Cloud2
	this.instance_6 = new lib.Cloud2_1();
	this.instance_6.setTransform(459.8,-43.4,1.0286,1.0286,0,0,0,0.1,0);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,x:455.9175,alpha:0.3347},0).wait(1).to({x:452.1508,alpha:0.6681},0).wait(1).to({regX:0.1,x:448.5,alpha:1},0).wait(1).to({regX:0,x:446.3752,alpha:0.6652},0).wait(1).to({x:444.359,alpha:0.3319},0).wait(1).to({regX:0.2,x:442.5,alpha:0},0).wait(1).to({regX:0,x:440.2873,alpha:0.0085},0).wait(1).to({x:438.2834,alpha:0.0169},0).wait(1).to({x:436.288,alpha:0.0253},0).wait(1).to({x:434.3013,alpha:0.0337},0).wait(1).to({x:432.3233,alpha:0.042},0).wait(1).to({x:430.3539,alpha:0.0503},0).wait(1).to({x:428.3932,alpha:0.0585},0).wait(1).to({x:426.4412,alpha:0.0667},0).wait(1).to({x:424.4978,alpha:0.0749},0).wait(1).to({x:422.563,alpha:0.083},0).wait(1).to({x:420.6369,alpha:0.0911},0).wait(1).to({x:418.7195,alpha:0.0992},0).wait(1).to({x:416.8107,alpha:0.1072},0).wait(1).to({x:414.9106,alpha:0.1152},0).wait(1).to({x:413.0192,alpha:0.1232},0).wait(1).to({x:411.1363,alpha:0.1311},0).wait(1).to({x:409.2622,alpha:0.139},0).wait(1).to({x:407.3967,alpha:0.1469},0).wait(1).to({x:405.5399,alpha:0.1547},0).wait(1).to({x:403.6917,alpha:0.1624},0).wait(1).to({x:401.8522,alpha:0.1702},0).wait(1).to({x:400.0213,alpha:0.1779},0).wait(1).to({x:398.1991,alpha:0.1856},0).wait(1).to({x:396.3856,alpha:0.1932},0).wait(1).to({x:394.5807,alpha:0.2008},0).wait(1).to({x:392.7844,alpha:0.2083},0).wait(1).to({x:390.9968,alpha:0.2159},0).wait(1).to({x:389.2179,alpha:0.2233},0).wait(1).to({x:387.4476,alpha:0.2308},0).wait(1).to({x:385.686,alpha:0.2382},0).wait(1).to({x:383.9331,alpha:0.2456},0).wait(1).to({x:382.1888,alpha:0.2529},0).wait(1).to({x:380.4531,alpha:0.2602},0).wait(1).to({x:378.7262,alpha:0.2675},0).wait(1).to({x:377.0078,alpha:0.2747},0).wait(1).to({x:375.2982,alpha:0.2819},0).wait(1).to({regX:0.1,x:373.8,alpha:0.2891},0).wait(1).to({regX:0,x:372.0075,alpha:0.5273},0).wait(1).to({x:370.3237,alpha:0.7642},0).wait(1).to({x:368.7,alpha:1},0).wait(1).to({x:367.0423,alpha:0.6649},0).wait(1).to({x:365.3933,alpha:0.3316},0).wait(1).to({regX:0.1,x:363.75,alpha:0},0).wait(1).to({regX:0,x:362.0112},0).wait(1).to({x:360.3811},0).wait(1).to({x:358.7596},0).wait(1).to({x:357.1468},0).wait(1).to({x:355.5426},0).wait(1).to({x:353.9471},0).wait(1).to({x:352.3602},0).wait(1).to({x:350.7819},0).wait(1).to({x:349.2124},0).wait(1).to({x:347.6514},0).wait(1).to({x:346.0991},0).wait(1).to({x:344.5555},0).wait(1).to({x:343.0205},0).wait(1).to({x:341.4941},0).wait(1).to({x:339.9764},0).wait(1).to({x:338.4674},0).wait(1).to({x:336.9669},0).wait(1).to({x:335.4752},0).wait(1).to({x:333.9921},0).wait(1).to({x:332.5176},0).wait(1).to({x:331.0518},0).wait(1).to({x:329.5946},0).wait(1).to({x:328.1461},0).wait(1).to({x:326.7062},0).wait(1).to({x:325.275},0).wait(1).to({x:323.8524},0).wait(1).to({x:322.4385},0).wait(1).to({x:321.0332},0).wait(1).to({x:319.6366},0).wait(1).to({x:318.2486},0).wait(1).to({x:316.8693},0).wait(1).to({regX:0.1,x:315.65},0).wait(1).to({regX:0,x:314.1914,alpha:0.3355},0).wait(1).to({x:312.8414,alpha:0.6688},0).wait(1).to({regX:0.1,x:311.6,alpha:1},0).wait(1).to({regX:0,x:310.1402,alpha:0.6645},0).wait(1).to({x:308.7893,alpha:0.3312},0).wait(1).to({x:307.55,alpha:0},0).wait(1).to({x:306.243},0).wait(1).to({x:304.9446},0).wait(1).to({x:303.6549},0).wait(1).to({x:302.3737},0).wait(1).to({x:301.1012},0).wait(1).to({x:299.8374},0).wait(1).to({x:298.5821},0).wait(1).to({x:297.3355},0).wait(1).to({x:296.0975},0).wait(1).to({x:294.8681},0).wait(1).to({x:293.6474},0).wait(1).to({x:292.4353},0).wait(1).to({x:291.2318},0).wait(1).to({x:290.0369},0).wait(1).to({x:288.8507},0).wait(1).to({x:287.6731},0).wait(1).to({x:286.5041},0).wait(1).to({x:285.3438},0).wait(1).to({x:284.1921},0).wait(1).to({x:283.049},0).wait(1).to({x:281.9145},0).wait(1).to({x:280.7887},0).wait(1).to({x:279.6715},0).wait(1).to({x:278.5629},0).wait(1).to({x:277.4629},0).wait(1).to({x:276.3716},0).wait(1).to({x:275.2889},0).wait(1).to({x:274.2148},0).wait(1).to({x:273.1494},0).wait(1).to({x:272.0925},0).wait(1).to({x:271.0443},0).wait(1).to({x:270.0048},0).wait(1).to({x:268.9738},0).wait(1).to({x:267.9515},0).wait(1).to({x:266.9378},0).wait(1).to({x:265.9328},0).wait(1).to({x:264.9363},0).wait(1).to({x:263.9485},0).wait(1).to({x:262.9693},0).wait(1).to({x:261.9988},0).wait(1).to({x:261.0369},0).wait(1).to({x:260.0836},0).wait(1).to({x:259.1389},0).wait(1).to({regX:0.1,x:258.2},0).wait(1).to({regX:0,x:257.1752,alpha:0.3365},0).wait(1).to({x:256.259,alpha:0.6698},0).wait(1).to({regX:0.1,x:255.4,alpha:1},0).wait(1).to({regX:0,x:254.3913,alpha:0.6634},0).wait(1).to({x:253.4913,alpha:0.3301},0).wait(1).to({regX:0.1,x:252.7,alpha:0},0).wait(1).to({regX:0,x:251.7219},0).wait(1).to({x:250.8525},0).wait(1).to({x:249.9917},0).wait(1).to({x:249.1396},0).wait(1).to({x:248.2961},0).wait(1).to({x:247.4613},0).wait(1).to({x:246.6351},0).wait(1).to({x:245.8176},0).wait(1).to({x:245.0087},0).wait(1).to({x:244.2085},0).wait(1).to({x:243.4169},0).wait(1).to({x:242.634},0).wait(1).to({x:241.8597},0).wait(1).to({x:241.0941},0).wait(1).to({x:240.3371},0).wait(1).to({x:239.5888},0).wait(1).to({x:238.8491},0).wait(1).to({x:238.1181},0).wait(1).to({x:237.3957},0).wait(1).to({x:236.682},0).wait(1).to({x:235.977},0).wait(1).to({x:235.2806},0).wait(1).to({x:234.5928},0).wait(1).to({x:233.9137},0).wait(1).to({x:233.2432},0).wait(1).to({x:232.5814},0).wait(1).to({x:231.9283},0).wait(1).to({x:231.2838},0).wait(1).to({x:230.6479},0).wait(1).to({x:230.0207},0).wait(1).to({x:229.4022},0).wait(1).to({x:228.7923},0).wait(1).to({x:228.191},0).wait(1).to({x:227.5984},0).wait(1).to({x:227.0145},0).wait(1).to({x:226.4392},0).wait(1).to({x:225.8725},0).wait(1).to({x:225.3145},0).wait(1).to({x:224.7652},0).wait(1).to({x:224.2245},0).wait(1).to({x:223.6925},0).wait(1).to({x:223.1691},0).wait(1).to({x:222.6543},0).wait(1).to({x:222.1482},0).wait(1).to({x:221.6508},0).wait(1).to({x:221.162},0).wait(1).to({x:220.6819},0).wait(1).to({x:220.2104},0).wait(1).to({x:219.7476},0).wait(1).to({x:219.2934},0).wait(1).to({x:218.8479},0).wait(1).to({x:218.411},0).wait(1).to({x:217.9827},0).wait(1).to({x:217.5632},0).wait(1).to({x:217.1522},0).wait(1).to({x:216.75},0).wait(1).to({x:216.3563},0).wait(1).to({x:215.9714},0).wait(1).to({x:215.595},0).wait(1).to({x:215.2274},0).wait(1).to({x:214.8684},0).wait(1).to({x:214.518},0).wait(1).to({x:214.1763},0).wait(1).to({x:213.8432},0).wait(1).to({x:213.5188},0).wait(1).to({x:213.203},0).wait(1).to({x:212.8959},0).wait(1).to({x:212.5975},0).wait(1).to({x:212.3076},0).wait(1).to({x:212.0265},0).wait(1).to({x:211.754},0).wait(1).to({x:211.4901},0).wait(1).to({x:211.2349},0).wait(1).to({x:210.9884},0).wait(1).to({x:210.7505},0).wait(1).to({x:210.5212},0).wait(1).to({x:210.3006},0).wait(1).to({x:210.0886},0).wait(1).to({x:209.8853},0).wait(1).to({x:209.6907},0).wait(1).to({x:209.5047},0).wait(1).to({x:209.3273},0).wait(1).to({x:209.1587},0).wait(1).to({x:208.9986},0).wait(1).to({x:208.8472},0).wait(1).to({x:208.7045},0).wait(1).to({x:208.5704},0).wait(1).to({x:208.4449},0).wait(1).to({x:208.3282},0).wait(1).to({x:208.22},0).wait(1).to({x:208.1205},0).wait(1).to({x:208.0297},0).wait(1).to({x:207.9475},0).wait(1).to({x:207.874},0).wait(1).to({x:207.8091},0).wait(1).to({x:207.7529},0).wait(1).to({x:207.7053},0).wait(1).to({x:207.6663},0).wait(1).to({x:207.6361},0).wait(1).to({x:207.6144},0).wait(1).to({x:207.6015},0).wait(1).to({x:207.7},0).wait(1));

	// Cloud1
	this.instance_7 = new lib.Cloud1_1();
	this.instance_7.setTransform(454.6,-43.4,1.0286,1.0286);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:207.7},239,cjs.Ease.get(1)).wait(1));

	// LIghtning
	this.instance_8 = new lib.lightnung();
	this.instance_8.setTransform(345.2,33.1,0.6864,0.6864,0,-3.7004,176.2996,191.8,128);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},3).to({alpha:0},3).wait(37).to({alpha:1},3).to({alpha:0},3).wait(32).to({alpha:1},3).to({alpha:0},3).wait(44).to({alpha:1},3).to({alpha:0},3).wait(103));

	// Turnodo
	this.instance_9 = new lib.Turnodo_1();
	this.instance_9.setTransform(308.3,30.45,0.5433,0.5433,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.6631,scaleY:0.6631,x:395.5,y:19.2},239,cjs.Ease.get(1)).wait(1));

	// BG2
	this.instance_10 = new lib.BG2();
	this.instance_10.setTransform(-15,-275,0.5423,0.5423);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(240));

	// BG1
	this.instance_11 = new lib.BG1();
	this.instance_11.setTransform(-15,-275,0.5423,0.5423);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-335.6,847.6,739);


// stage content:
(lib.KSFY_213652_MM_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(364,18.75,2.4267,0.15,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,365,46);
// library properties:
lib.properties = {
	id: 'C5015599BD542543B3A7BF6C0E894E50',
	width: 728,
	height: 90,
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