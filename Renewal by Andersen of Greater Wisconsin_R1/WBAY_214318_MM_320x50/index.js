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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);// helper functions:

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


(lib.text4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#12127D").s().p("AgDAFQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape.setTransform(161.6,11.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgNATQgGgHgBgLQAAgLAHgHQAFgHAJAAQAIAAAGAGQAFAGABAJIAAAEIghAAQAAAIAFAFQAEAEAGABQAHAAAIgEIAAAHIgHACIgIABQgKAAgGgGgAANgEQAAgGgDgEQgEgEgFAAQgFAAgDAEQgEAEgBAGIAZAAIAAAAg");
	this.shape_1.setTransform(157.95,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgKATQgHgHABgMQgBgLAHgGQAFgHAKAAIAHABIAGABIgDAHIgFgCIgFAAQgOAAAAARQAAAJADAFQAFAEAFABQAGgBAHgCIAAAGQgFADgIAAQgJAAgFgGg");
	this.shape_2.setTransform(153.4,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgDAhIAAgvIAHAAIAAAvgAgCgYQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACgBIADABIABAEIgBADIgDABIgCgBg");
	this.shape_3.setTransform(150.025,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgDAYIgTgvIAIAAIAKAbIAEAOIADgKIAMgfIAHAAIgSAvg");
	this.shape_4.setTransform(146.65,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgNAZIAAgvIAGAAIABAJIABAAQACgGADgCQADgDAFAAIAGABIgBAHIgGgBQgFAAgDAFQgEAFAAAGIAAAag");
	this.shape_5.setTransform(142.9,9.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgNATQgGgHAAgLQgBgLAHgHQAFgHAIAAQAKAAAFAGQAGAGgBAJIAAAEIggAAQAAAIAEAFQAFAEAGABQAIAAAHgEIAAAHIgHACIgJABQgJAAgGgGgAANgEQgBgGgDgEQgCgEgHAAQgEAAgEAEQgDAEAAAGIAYAAIAAAAg");
	this.shape_6.setTransform(138.3,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgQAWIAAgHIAIADIAHABQAFAAADgCQADgCAAgDQAAgDgCgDIgJgEIgJgEIgFgDQgBgDAAgEQAAgFAFgEQAEgDAIAAQAIAAAHADIgDAGQgHgDgGAAQgEAAgDACQgCACAAACIABAEIADACIAHADQAJADADADQADADAAAFQAAAGgFAEQgFAEgIAAQgKAAgFgDg");
	this.shape_7.setTransform(133.675,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgDAiIAAhDIAHAAIAABDg");
	this.shape_8.setTransform(128.075,8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgOAVQgEgEgBgGQAAgOAXgBIAIAAIAAgDQAAgFgCgDQgCgDgGAAQgFAAgIAEIgCgGIAIgDIAIgBQAIAAAEAEQAEAEABAIIAAAgIgGAAIgBgHIgBAAQgEAEgDACQgEACgEAAQgHAAgEgEgAgHADQgEACAAAGQAAAEADACQACACAEAAQAGAAAEgEQAEgDAAgIIAAgDIgIAAQgHAAgEACg");
	this.shape_9.setTransform(124.3,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AANAZIAAgfQAAgFgDgEQgCgDgGAAQgHAAgDAFQgEAEAAAJIAAAZIgHAAIAAgvIAGAAIABAGQADgDAEgCQAEgCAEgBQAIABAFAEQAEAEAAAJIAAAfg");
	this.shape_10.setTransform(119.225,9.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgLAWQgFgDgCgGQgDgGAAgHQAAgLAGgGQAGgHAJAAQAKAAAGAHQAGAGAAALQAAALgGAIQgGAGgKAAQgGAAgFgDgAgKgNQgEAFAAAIQAAAJAEAFQAEAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgEAFg");
	this.shape_11.setTransform(113.775,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgDAhIAAgvIAHAAIAAAvgAgCgYQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACgBIADABIABAEIgBADIgDABIgCgBg");
	this.shape_12.setTransform(109.925,8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgGAPIAAgbIgHAAIAAgEIAHgDIADgKIADAAIAAALIAOAAIAAAGIgOAAIAAAbQAAAEACADQACACAEAAIADAAIADgBIAAAGIgDABIgFAAQgMAAAAgPg");
	this.shape_13.setTransform(107.225,8.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgUAjIAAhEIAGAAIABAGIAAAAQADgEAEgCQAEgBADAAQAKAAAFAGQAFAHAAAMQAAAKgFAHQgFAHgKAAQgDAAgEgCQgEgCgDgDIAAAAIAAAIIAAATgAgJgYQgEAEAAAJIAAACQAAAJAEAEQADAFAHAAQAGAAADgGQAEgEAAgIQAAgJgEgFQgDgFgHAAQgGAAgDAEg");
	this.shape_14.setTransform(103.025,10.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgNATQgGgHAAgLQAAgLAFgHQAGgHAIAAQAKAAAFAGQAGAGgBAJIAAAEIggAAQABAIADAFQAEAEAHABQAHAAAIgEIAAAHIgHACIgJABQgJAAgGgGgAAMgEQAAgGgDgEQgCgEgHAAQgEAAgEAEQgDAEAAAGIAXAAIAAAAg");
	this.shape_15.setTransform(97.7,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgLATQgFgHAAgMQAAgLAFgGQAGgHAKAAIAHABIAFABIgCAHIgFgCIgFAAQgOAAAAARQAAAJAEAFQADAEAGABQAGgBAGgCIAAAGQgEADgIAAQgJAAgGgGg");
	this.shape_16.setTransform(93.15,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAOAYIgOgUIgMAUIgJAAIASgYIgRgXIAJAAIALASIANgSIAIAAIgRAXIASAYg");
	this.shape_17.setTransform(88.55,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgRAgIAAg/IAjAAIAAAGIgbAAIAAAVIAZAAIAAAGIgZAAIAAAYIAbAAIAAAGg");
	this.shape_18.setTransform(83.875,8.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgDAFQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_19.setTransform(77.75,11.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgQAWIAAgHIAIADIAHABQAFAAADgCQADgCAAgDQAAgDgCgDIgJgEIgJgEIgFgDQgBgDAAgEQAAgFAFgEQAEgDAIAAQAIAAAHADIgDAGQgHgDgGAAQgEAAgDACQgCACAAACIABAEIADACIAHADQAJADADADQADADAAAFQAAAGgFAEQgFAEgIAAQgKAAgFgDg");
	this.shape_20.setTransform(74.475,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AgGAPIAAgbIgHAAIAAgEIAHgDIADgKIADAAIAAALIAOAAIAAAGIgOAAIAAAbQAAAEACADQACACAEAAIADAAIADgBIAAAGIgDABIgFAAQgMAAAAgPg");
	this.shape_21.setTransform(70.725,8.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgLATQgFgHAAgMQAAgLAFgGQAGgHAKAAIAHABIAGABIgDAHIgFgCIgFAAQgOAAAAARQAAAJAEAFQAEAEAFABQAHgBAFgCIAAAGQgEADgIAAQgJAAgGgGg");
	this.shape_22.setTransform(67.15,9.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgPAUQgEgEAAgJIAAgeIAHAAIAAAeQAAAFADAEQADACAFAAQAHABADgFQAEgEAAgKIAAgXIAHAAIAAAvIgGAAIgBgHIAAAAQgCAEgEACQgEABgFAAQgIAAgFgEg");
	this.shape_23.setTransform(62.125,9.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgPAcQgFgGAAgMQAAgLAFgHQAFgGAKAAQAJAAAFAHIAAAAIAAgEIAAgDIAAgUIAHAAIAABEIgGAAIgBgHIAAAAQgFAIgJAAQgKAAgFgHgAgJgDQgEAEAAAJQAAAJAEAFQADAFAGAAQAHAAAEgFQADgEAAgJIAAgBQAAgKgEgEQgDgEgHAAQgGAAgDAFg");
	this.shape_24.setTransform(56.525,8.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgLAWQgFgDgCgGQgDgGAAgHQAAgLAGgGQAGgHAJAAQAKAAAGAHQAGAGAAALQAAALgGAIQgGAGgKAAQgGAAgFgDgAgKgNQgEAFAAAIQAAAJAEAFQAEAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgEAFg");
	this.shape_25.setTransform(51.225,9.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgNAZIAAgvIAHAAIAAAJIABAAQACgGADgCQADgDAFAAIAGABIgBAHIgFgBQgGAAgEAFQgDAFAAAGIAAAag");
	this.shape_26.setTransform(47,9.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgUAjIAAhEIAGAAIABAGIAAAAQADgEAEgCQAEgBADAAQAKAAAFAGQAFAHAAAMQAAAKgFAHQgFAHgKAAQgDAAgEgCQgEgCgDgDIAAAAIAAAIIAAATgAgJgYQgEAEAAAJIAAACQAAAJAEAEQADAFAHAAQAGAAADgGQAEgEAAgIQAAgJgEgFQgDgFgHAAQgGAAgDAEg");
	this.shape_27.setTransform(42.225,10.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgNAZIAAgvIAHAAIAAAJIABAAQACgGADgCQAEgDAEAAIAGABIgBAHIgGgBQgFAAgEAFQgDAFAAAGIAAAag");
	this.shape_28.setTransform(35.55,9.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgLAWQgFgDgCgGQgDgGAAgHQAAgLAGgGQAGgHAJAAQAKAAAGAHQAGAGAAALQAAALgGAIQgGAGgKAAQgGAAgFgDgAgKgNQgEAFAAAIQAAAJAEAFQAEAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgEAFg");
	this.shape_29.setTransform(30.725,9.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgDAhIAAgvIAHAAIAAAvgAgCgYQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIACgBIADABIABAEIgBADIgDABIgCgBg");
	this.shape_30.setTransform(26.875,8.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgNAZIAAgvIAGAAIABAJIAAAAQADgGADgCQAEgDAEAAIAGABIgBAHIgFgBQgGAAgDAFQgFAFAAAGIAAAag");
	this.shape_31.setTransform(24.25,9.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgNATQgHgHABgLQAAgLAFgHQAGgHAJAAQAJAAAFAGQAFAGAAAJIAAAEIggAAQABAIAEAFQADAEAHABQAIAAAHgEIAAAHIgHACIgJABQgJAAgGgGgAAMgEQAAgGgCgEQgEgEgFAAQgFAAgDAEQgEAEgBAGIAYAAIAAAAg");
	this.shape_32.setTransform(19.65,9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgUAjIAAhEIAGAAIABAGIAAAAQADgEAEgCQAEgBADAAQAKAAAFAGQAFAHAAAMQAAAKgFAHQgFAHgKAAQgDAAgEgCQgEgCgDgDIAAAAIAAAIIAAATgAgJgYQgEAEAAAJIAAACQAAAJAEAEQADAFAHAAQAGAAADgGQAEgEAAgIQAAgJgEgFQgDgFgHAAQgGAAgDAEg");
	this.shape_33.setTransform(14.475,10.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgPAUQgEgEAAgJIAAgeIAHAAIAAAeQAAAFADAEQADACAFAAQAHABADgFQAEgEAAgKIAAgXIAHAAIAAAvIgGAAIgBgHIAAAAQgCAEgEACQgEABgFAAQgIAAgFgEg");
	this.shape_34.setTransform(8.825,9.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgTAeIAAgIIAJAEIAJABQAGAAAEgEQAEgDAAgEQAAgDgCgDQgBgCgDgCIgJgEQgJgCgDgFQgEgEAAgHQAAgIAFgEQAGgEAIAAQAKAAAIAEIgDAGQgIgDgHAAQgFgBgDADQgEADAAAEQAAADACADIAEAEIAIADQAKADAEAEQADAFAAAGQAAAJgGAEQgGAFgKAAQgLAAgGgDg");
	this.shape_35.setTransform(3.675,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,166,16.3);


(lib.text3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#12127D").s().p("AALAWIAAgbQAAgFgCgDQgCgCgFAAQgGAAgDADQgDAEAAAIIAAAWIgHAAIAAgqIAFAAIABAGIABAAQACgDADgCQAEgCADAAQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape.setTransform(115.775,-116.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AALAWIgIgZIgDgKIgCAKIgIAZIgIAAIgLgrIAGAAIAHAYIACALIABAAIABgFIACgGIAHgYIAGAAIAIAYIADALIABgEIAIgfIAHAAIgMArg");
	this.shape_1.setTransform(110.225,-116.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgJATQgFgCgCgFQgDgFAAgHQAAgKAFgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgFAAgEgDgAgJgMQgDAFAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgFQgEgEgGAAQgGAAgDAEg");
	this.shape_2.setTransform(104.725,-116.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgWAcIAAg3IASAAQAMgBAHAIQAIAHAAANQAAANgIAIQgIAHgNAAgAgPAXIAIAAQALAAAGgGQAGgGAAgLQAAgKgGgGQgGgGgKAAIgJAAg");
	this.shape_3.setTransform(99.575,-117.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgSAfIAAgGIAEABQAHAAADgIIACgGIgRgqIAHAAIAJAYIADAMIABAAIACgGIAKgeIAHAAIgSAwQgCAHgEADQgDADgGAAIgFAAg");
	this.shape_4.setTransform(92.45,-115.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgLAQQgGgGAAgKQAAgJAFgGQAFgGAIAAQAIAAAFAFQAEAFAAAJIAAADIgcAAQAAAIADADQAEAEAFAAQAHAAAIgDIAAAGIgHACIgIABQgIAAgFgGgAALgDQAAgGgDgEQgCgDgGAAQgEAAgDADQgDAEAAAGIAVAAIAAAAg");
	this.shape_5.setTransform(88.25,-116.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AALAWIAAgbQAAgFgCgDQgCgCgFAAQgGAAgDADQgDAEAAAIIAAAWIgHAAIAAgqIAFAAIABAGIABAAQACgDADgCQAEgCADAAQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape_6.setTransform(83.575,-116.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgJATQgFgCgCgFQgDgFAAgHQAAgKAFgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgFAAgEgDgAgJgMQgDAFAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgFQgEgEgGAAQgGAAgDAEg");
	this.shape_7.setTransform(78.725,-116.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAWAcIAAgjIAAgOIAAAAIgUAxIgEAAIgTgxIgBAAIABAOIAAAjIgGAAIAAg3IAKAAIARAuIAAAAIASguIAKAAIAAA3g");
	this.shape_8.setTransform(72.725,-117.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgJATQgFgCgCgFQgDgFAAgHQAAgKAFgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgFAAgEgDgAgJgMQgDAFAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgFQgEgEgGAAQgGAAgDAEg");
	this.shape_9.setTransform(64.675,-116.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAPAcIgfguIABAPIAAAfIgGAAIAAg3IAHAAIAeAuIABAAIgBgHIAAgIIAAgfIAGAAIAAA3g");
	this.shape_10.setTransform(59.275,-117.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgFAKIACgKIACgJIAGAAIABABIgDAIIgDAKg");
	this.shape_11.setTransform(53.1,-114.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgFANIAAgYIgHAAIAAgDIAHgDIACgJIADAAIAAAKIANAAIAAAFIgNAAIAAAYQAAAEACACQACACADAAIADAAIADgBIAAAFIgDABIgEABQgLAAAAgOg");
	this.shape_12.setTransform(50.825,-117.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgOATIAAgGIAHADIAGABQAFAAACgCQADgCAAgDQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgIgEIgIgDQgDgCgBgCQgBgCAAgDQAAgFAEgDQAEgDAHAAQAHAAAGACIgCAGQgGgDgGAAQgDAAgDACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAABIABACIADADIAGADQAIACADADQACACAAAFQAAAGgEADQgFADgHAAQgIAAgFgDg");
	this.shape_13.setTransform(47.575,-116.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgLAQQgGgGAAgKQAAgJAFgGQAFgGAIAAQAIAAAFAFQAEAFAAAJIAAADIgdAAQABAIADADQAEAEAGAAQAHAAAGgDIAAAGIgGACIgHABQgJAAgFgGgAAMgDQgBgGgDgEQgCgDgGAAQgDAAgEADQgCAEgBAGIAWAAIAAAAg");
	this.shape_14.setTransform(43.45,-116.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgLAWIAAgqIAFAAIABAIIAAAAQACgEADgDQADgCAEAAIAFABIgBAGIgEgBQgGAAgCAEQgEAEAAAHIAAAWg");
	this.shape_15.setTransform(39.875,-116.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgMAQQgFgGAAgKQAAgJAFgGQAFgGAIAAQAIAAAEAFQAFAFAAAJIAAADIgdAAQABAIAEADQADAEAGAAQAHAAAHgDIAAAGIgHACIgHABQgJAAgGgGgAAMgDQAAgGgDgEQgDgDgFAAQgFAAgCADQgDAEgBAGIAWAAIAAAAg");
	this.shape_16.setTransform(35.75,-116.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgFANIAAgYIgHAAIAAgDIAHgDIACgJIADAAIAAAKIANAAIAAAFIgNAAIAAAYQAAAEACACQACACADAAIADAAIADgBIAAAFIgDABIgEABQgLAAAAgOg");
	this.shape_17.setTransform(32.075,-117.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AALAWIAAgbQAAgFgCgDQgCgCgFAAQgGAAgDADQgDAEAAAIIAAAWIgHAAIAAgqIAFAAIABAGIABAAQACgDADgCQAEgCADAAQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape_18.setTransform(28.275,-116.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgCAcIAAg3IAFAAIAAA3g");
	this.shape_19.setTransform(24.725,-117.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgJATQgFgCgCgFQgDgFAAgHQAAgKAFgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgFAAgEgDgAgJgMQgDAFAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgFQgEgEgGAAQgGAAgDAEg");
	this.shape_20.setTransform(19.175,-116.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAPAcIgfguIABAPIAAAfIgGAAIAAg3IAHAAIAeAuIABAAIgBgHIAAgIIAAgfIAGAAIAAA3g");
	this.shape_21.setTransform(13.775,-117.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgFAKIACgKIACgJIAGAAIABABIgDAIIgDAKg");
	this.shape_22.setTransform(111,-123.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgOATIAAgGIAHADIAGABQAFAAACgCQADgCAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgIgEIgIgDQgDgCgBgCQgBgCAAgDQAAgFAEgDQAEgDAHAAQAHAAAGACIgCAGQgGgDgGAAQgDAAgDACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIABACIADADIAGADQAIACADADQACACAAAFQAAAGgEADQgFADgHAAQgIAAgFgDg");
	this.shape_23.setTransform(108.275,-125.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgFANIAAgYIgHAAIAAgDIAHgDIACgJIADAAIAAAKIANAAIAAAFIgNAAIAAAYQAAAEACACQACACADAAIADAAIADgBIAAAFIgDABIgEABQgLAAAAgOg");
	this.shape_24.setTransform(104.925,-126.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AALAWIAAgbQAAgFgCgDQgCgCgFAAQgGAAgDADQgDAEAAAIIAAAWIgHAAIAAgqIAFAAIABAGIABAAQACgDADgCQAEgCADAAQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape_25.setTransform(101.125,-125.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgLAQQgGgGAAgKQAAgJAFgGQAFgGAIAAQAIAAAFAFQAEAFAAAJIAAADIgcAAQAAAIADADQAEAEAFAAQAHAAAIgDIAAAGIgHACIgIABQgIAAgFgGgAALgDQAAgGgDgEQgCgDgGAAQgDAAgEADQgDAEAAAGIAVAAIAAAAg");
	this.shape_26.setTransform(96.45,-125.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAYAWIAAgbQAAgFgCgDQgDgCgEAAQgGAAgDADQgDAEAAAHIAAAXIgGAAIAAgbQAAgFgBgDQgCgCgGAAQgGAAgDADQgCAEAAAIIAAAWIgHAAIAAgqIAGAAIABAGIAAAAIAFgFQADgCAEAAQALAAACAHQACgDADgCQAFgCAEAAQAHAAAEAEQADAEAAAIIAAAbg");
	this.shape_27.setTransform(90.55,-125.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgSAfIAAgGIAEABQAHAAADgIIACgGIgRgqIAHAAIAJAZIADALIABAAIACgGIAKgeIAHAAIgSAwQgCAHgEADQgDADgGAAIgFAAg");
	this.shape_28.setTransform(84.8,-124.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgMATQgEgEAAgGQAAgMAUAAIAHAAIAAgDQAAgFgCgCQgCgDgFAAQgFAAgGADIgCgFIAHgCIAGgBQAIAAAEADQADAEAAAHIAAAcIgFAAIgBgGIAAAAQgDAEgEACQgDABgDAAQgHAAgDgDgAgGADQgDACAAAEQAAAEACACQACACAEAAQAFAAADgEQAEgDAAgGIAAgEIgHAAQgGABgEACg");
	this.shape_29.setTransform(80.475,-125.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgRAcIAAg3IAPAAQAUAAAAAQQAAAJgGADQgGAFgKAAIgGAAIAAAWgAgKAAIAGAAQAHAAAEgBQAEgEAAgFQAAgHgDgCQgEgDgHAAIgHAAg");
	this.shape_30.setTransform(76.2,-126.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgJATQgFgCgCgFQgDgFAAgHQAAgKAFgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgFAAgEgDgAgJgMQgDAFAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgFQgEgEgGAAQgGAAgDAEg");
	this.shape_31.setTransform(69.175,-125.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAPAcIgfguIABAPIAAAfIgGAAIAAg3IAHAAIAeAuIABAAIgBgHIAAgIIAAgfIAGAAIAAA3g");
	this.shape_32.setTransform(63.775,-126.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgCAVQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgFQABAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgDABIgCgBgAgCgMQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAEgBQAFABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDABIgCgBg");
	this.shape_33.setTransform(57.675,-125.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgOATIAAgGIAHADIAGABQAFAAACgCQADgCAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgIgEIgIgDQgDgCgBgCQgBgCAAgDQAAgFAEgDQAEgDAHAAQAHAAAGACIgCAGQgGgDgGAAQgDAAgDACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIABACIADADIAGADQAIACADADQACACAAAFQAAAGgEADQgFADgHAAQgIAAgFgDg");
	this.shape_34.setTransform(54.725,-125.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AALAeIAAgbQAAgFgCgCQgCgDgFABQgGAAgDADQgDADAAAIIAAAWIgHAAIAAg8IAHAAIAAATIgBAFIABAAQACgCADgCQAEgCADAAQAIAAAEAEQAEADAAAHIAAAcg");
	this.shape_35.setTransform(50.375,-126.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AgFANIAAgYIgHAAIAAgDIAHgDIACgJIADAAIAAAKIANAAIAAAFIgNAAIAAAYQAAAEACACQACACADAAIADAAIADgBIAAAFIgDABIgEABQgLAAAAgOg");
	this.shape_36.setTransform(46.475,-126.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AALAWIAAgbQAAgFgCgDQgCgCgFAAQgGAAgDADQgDAEAAAIIAAAWIgHAAIAAgqIAFAAIABAGIABAAQACgDADgCQAEgCADAAQAIAAAEAEQAEAEAAAIIAAAbg");
	this.shape_37.setTransform(42.675,-125.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgJATQgFgCgCgFQgDgFAAgHQAAgKAFgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAKgGAGQgFAGgJAAQgFAAgEgDgAgJgMQgDAFAAAHQAAAIADAEQAEAFAFAAQAGAAAEgFQADgEAAgIQAAgHgDgFQgEgEgGAAQgGAAgDAEg");
	this.shape_38.setTransform(37.825,-125.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAYAWIAAgbQAAgFgCgDQgCgCgFAAQgGAAgDADQgDAEAAAHIAAAXIgFAAIAAgbQAAgFgCgDQgCgCgFAAQgHAAgCADQgDAEAAAIIAAAWIgGAAIAAgqIAEAAIACAGIAAAAIAFgFQAEgCAEAAQAKAAACAHQACgDADgCQAEgCAFAAQAHAAAEAEQAEAEAAAIIAAAbg");
	this.shape_39.setTransform(31.75,-125.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AAHAdIAAgNIgbAAIAAgGIAagmIAHAAIAAAmIAIAAIAAAGIgIAAIAAANgAADgPIgRAZIAVAAIAAgSIAAgNIAAAAg");
	this.shape_40.setTransform(23.675,-126.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AgSAdIAAgGIAPgPIAIgJIAEgFIABgGQAAgFgDgDQgDgCgEAAIgHABIgHAEIgDgEQAIgHAJAAQAHAAAFAEQAEAEAAAIQAAAEgDAGQgDAEgIAJIgMAMIAAAAIAdAAIAAAGg");
	this.shape_41.setTransform(19.125,-126.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-134.2,148,23.799999999999983);


(lib.text2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#12127D").s().p("AgHARIAAgfIgIAAIAAgDIAIgEIADgMIAEAAIAAANIAQAAIAAAGIgQAAIAAAfQAAAFACACQADADAEAAIAEAAIADgBIAAAGIgEABIgFABQgOAAAAgRg");
	this.shape.setTransform(102.275,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgMAVQgHgIABgNQgBgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_1.setTransform(98.3,-30.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_2.setTransform(93.025,-30.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgLAwIAAgHIAHABQAEAAABgCQABgCABgEIAAg+IAIAAIAAA9QAAAQgOAAIgIgBgAAEgmQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_3.setTransform(88.3,-30.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_4.setTransform(84.725,-30.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgPAbIAAg0IAIAAIAAAKIAAAAQADgGAEgCQAEgDAFAAIAHAAIgBAIIgGgBQgHAAgDAFQgGAGAAAIIAAAbg");
	this.shape_5.setTransform(80.05,-30.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgEgCgEgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_6.setTransform(74.75,-29.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_7.setTransform(66.225,-30.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgOAbIAAg0IAHAAIAAAKIABAAQADgGADgCQAEgDAFAAIAGAAIgBAIIgFgBQgHAAgEAFQgEAGAAAIIAAAbg");
	this.shape_8.setTransform(61.75,-30.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_9.setTransform(58.125,-31.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AgHARIAAgfIgIAAIAAgDIAIgEIADgMIAEAAIAAANIAQAAIAAAGIgQAAIAAAfQAAAFACACQADADAEAAIAEAAIADgBIAAAGIgEABIgFABQgOAAAAgRg");
	this.shape_10.setTransform(55.075,-31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAOAbIAAghQAAgHgDgDQgDgDgGAAQgIAAgDAEQgFAFAAAKIAAAbIgIAAIAAg0IAHAAIABAHIABAAQACgEAFgCQAEgCAFAAQAJAAAGAEQAEAFAAAKIAAAig");
	this.shape_11.setTransform(50.35,-30.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_12.setTransform(44.475,-30.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgKAiIAAglIgHAAIAAgHIAHgDIAAgEQgBgJAFgDQAEgEAIAAQAHAAAFACIgDAKIgHgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIAAAEIAMAAIAAAKIgMAAIAAAlg");
	this.shape_13.setTransform(140.45,-41.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgLAiIAAglIgGAAIAAgHIAGgDIAAgEQAAgJAFgDQAEgEAIAAQAHAAAGACIgEAKIgHgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIAAAEIALAAIAAAKIgLAAIAAAlg");
	this.shape_14.setTransform(137,-41.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgMAWQgFgDgDgGQgDgFAAgIQAAgLAHgHQAGgHAKABQAHAAAGACQAFAEADAGQADAFAAAHQAAAMgGAHQgHAGgLAAQgGAAgGgDgAgHgKQgCADAAAHQAAAHACAEQADADAEAAQAGAAACgDQACgEAAgHQAAgHgCgDQgDgDgFAAQgEAAgDADg");
	this.shape_15.setTransform(132.175,-40.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgQAZQgFgJAAgQQAAgQAFgIQAFgIALAAQALAAAGAIQAFAJAAAPQAAARgFAIQgGAIgLAAQgKAAgGgIgAgGgQQgCAFAAALQAAAMACAFQACAFAEAAQAFAAACgFQACgFAAgMQAAgLgCgFQgCgFgFAAQgEAAgCAFg");
	this.shape_16.setTransform(124.575,-41.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgQAZQgFgJAAgQQAAgQAFgIQAFgIALAAQALAAAGAIQAFAJAAAPQAAARgFAIQgGAIgLAAQgKAAgGgIgAgGgQQgCAFAAALQAAAMACAFQACAFAEAAQAFAAACgFQACgFAAgMQAAgLgCgFQgCgFgFAAQgEAAgCAFg");
	this.shape_17.setTransform(119.475,-41.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgVAdIAAgMIAIADIAJABQALAAAAgKQAAgJgLAAIgGAAIgEABIgGgDIADggIAiAAIAAAMIgWAAIgBANIACgBIAFAAQAJAAAGAEQAFAFABAJQAAALgIAGQgGAFgMAAQgKABgHgEg");
	this.shape_18.setTransform(114.4,-41.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgCAlIAAgJQgLAAgIgEIAAgLIAJADIAKACIAAgOIgDgBQgJgDgDgDQgEgEAAgGQAAgHAFgEQAFgEAJgBIAAgHIAFAAIAAAHQAKAAAIAEIgEAKIgOgDIAAANIAMAFQADACACADQACADAAAEQAAAHgFAEQgFAEgJABIAAAJgAADASQAGgBAAgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIgFgCgAgIgNQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABIAFACIAAgKQgGABAAAEg");
	this.shape_19.setTransform(109.3,-41.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgEAWIAAgRIgRAAIAAgJIARAAIAAgRIAJAAIAAARIARAAIAAAJIgRAAIAAARg");
	this.shape_20.setTransform(101.875,-41.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AALAbQgEgFAAgJQAAgUAPAAQAIABAEAFQAEAEAAAKQAAAJgEAFQgEAGgIAAQgHAAgEgGgAATAFIgBAIIABAIQAAABABAAQAAABABAAQAAAAAAAAQABABAAAAQAEgBAAgKQAAgMgEAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAABgAgWAgIAig/IALAAIgjA/gAghACQgEgEAAgKQAAgUAPAAQAIAAAEAFQAEAFAAAKQAAAKgEAEQgEAFgIAAQgHAAgEgFgAgZgUIgBAIIABAJQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQAEAAAAgLQAAgLgEAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAABg");
	this.shape_21.setTransform(92.975,-41.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgQAZQgFgJAAgQQAAgQAFgIQAFgIALAAQALAAAGAIQAFAJAAAPQAAARgFAIQgGAIgLAAQgKAAgGgIgAgGgQQgCAFAAALQAAAMACAFQACAFAEAAQAFAAACgFQACgFAAgMQAAgLgCgFQgCgFgFAAQgEAAgCAFg");
	this.shape_22.setTransform(86.375,-41.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgWAgIAAgJIAQgRIAJgJIAEgEIAAgGQAAgDgCgDQgCgCgDAAQgEAAgDACQgEACgDADIgIgJIAIgFQADgCAEgBIAIgBQAFABAFABQAEADADAEQADAEgBAFQABAEgCAEIgFAHIgLAMIgIAIIAAAAIAbAAIAAALg");
	this.shape_23.setTransform(81.3,-41.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgIAOAAQAPAAAIAJQAIAIAAAPQAAAQgIAJQgIAIgPAAQgOAAgIgIgAgLgPQgEAFAAAKQAAALAEAFQAEAGAHAAQAQAAAAgWQAAgVgQAAQgHAAgEAGg");
	this.shape_24.setTransform(72.825,-41.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgRAZQgJgJABgQQgBgPAKgJQAIgIAQAAQAJAAAKAEIgFAKQgHgDgIAAQgIAAgFAGQgGAGAAAJQAAAKAFAGQAFAGAGAAIAJgCIAAgNIgMAAIAAgKIAaAAIAAAgQgHACgFABIgMABQgNAAgHgIg");
	this.shape_25.setTransform(65.9,-41.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgIAOAAQAPAAAIAJQAIAIAAAPQAAAQgIAJQgIAIgPAAQgOAAgIgIgAgLgPQgEAFAAAKQAAALAEAFQAEAGAHAAQAQAAAAgWQAAgVgQAAQgHAAgEAGg");
	this.shape_26.setTransform(59.175,-41.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgXAgIAAg/IAUAAQANAAAGAEQAGADAAAJQAAAGgCADQgDAEgFABIAAAAQAHABACAEQADADAAAHQAAAIgGAFQgHAFgLAAgAgJAVIAJAAQAEAAADgDQADgCAAgEQAAgIgLAAIgIAAgAgJgGIAIAAQAEAAADgCQACgBAAgEQAAgEgCgCQgDgBgFAAIgHAAg");
	this.shape_27.setTransform(52.775,-41.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgGAMIADgMIABgLIAIAAIABABIgDAKIgFAMg");
	this.shape_28.setTransform(45.9,-38.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_29.setTransform(42.375,-39.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgFAFgEACQgEACgEAAQgJAAgEgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_30.setTransform(36.9,-41.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AAbAkIAAgtIABgRIgBAAIgYA+IgGAAIgYg/IAAASIAAAtIgHAAIAAhHIAMAAIAWA6IAAAAIAXg6IAMAAIAABHg");
	this.shape_31.setTransform(29.825,-42.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgSAYIAAgHIAJADIAIABQAFAAAEgCQADgCAAgEQAAgDgDgCQgCgDgHgDIgKgEIgGgEQgBgDAAgEQAAgGAGgEQAFgEAIAAQAIAAAJAEIgDAGQgIgDgHAAQgEAAgDACQgDACAAADIABADQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAJAEQAKADADADQADAEAAAFQAAAIgFAEQgGAEgJAAQgKAAgHgEg");
	this.shape_32.setTransform(20.4,-41.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_33.setTransform(16.775,-42.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAOAmIAAgiQAAgGgDgDQgCgDgHgBQgHAAgFAFQgDAEAAAKIAAAcIgIAAIAAhLIAIAAIAAAXIAAAHIAAAAQACgEAFgCQAEgCAFAAQAJAAAFAEQAGAFAAAJIAAAjg");
	this.shape_34.setTransform(12.5,-42.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgDAkIAAg/IgXAAIAAgIIA1AAIAAAIIgXAAIAAA/g");
	this.shape_35.setTransform(6.675,-42.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-51.2,148.8,28.300000000000004);


(lib.text1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B20000").s().p("AgGAiQgEgCAAgFQAAgEAEgDQACgCAEAAQAFAAACACQADADAAAEQAAAFgDACQgCACgFAAQgEAAgCgCgAgHAKIgDgtIAVAAIgDAtg");
	this.shape.setTransform(114.3,15.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgJAkIAAgcIgXgrIAVAAIALAbIAMgbIAVAAIgXArIAAAcg");
	this.shape_1.setTransform(109.575,15.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAPAkIgDgOIgWAAIgEAOIgVAAIAXhHIAZAAIAXBHgAAIAHIgDgLIgDgKIgCgJIgBAIIgFAWIAOAAg");
	this.shape_2.setTransform(102.625,15.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAXAkIAAggIAAgEIABgPIgBAAIgOAzIgRAAIgPgzIABAUIAAAfIgSAAIAAhHIAaAAIAOAyIAPgyIAaAAIAABHg");
	this.shape_3.setTransform(94.175,15.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgJAkIAAg3IgRAAIAAgQIA1AAIAAAQIgSAAIAAA3g");
	this.shape_4.setTransform(83.85,15.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgWAdQgIgIAAgOIAAgqIATAAIAAApQABAHADAEQADADAEAAQAGAAADgDQACgEAAgHIAAgpIATAAIAAAqQABAOgJAIQgHAHgPAAQgOAAgIgHg");
	this.shape_5.setTransform(77.15,15.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgZAbQgJgJAAgSQAAgRAJgJQAJgKAQAAQARAAAJAKQAJAJAAARQAAASgJAJQgJAKgRAAQgQAAgJgKgAgNAAQAAAVANAAQAHAAAEgFQADgFAAgLQAAgKgDgFQgEgFgHAAQgNAAAAAUg");
	this.shape_6.setTransform(69.375,15.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AALAkIAAgdIgVAAIAAAdIgUAAIAAhHIAUAAIAAAbIAVAAIAAgbIAUAAIAABHg");
	this.shape_7.setTransform(61.575,15.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgVAbQgJgJAAgSQAAgQAKgKQAKgKARAAQAHAAAFACQAHABADACIgFAPQgIgEgJAAQgIAAgFAGQgEAFAAAJQAAAKAEAGQAEAFAHAAIAIgBIAAgLIgNAAIAAgOIAfAAIAAAlQgNAFgPAAQgPAAgJgKg");
	this.shape_8.setTransform(53.95,15.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgWAdQgHgIAAgOIAAgqIATAAIAAApQgBAHADAEQAEADAEAAQAGAAACgDQADgEAAgHIAAgpIAUAAIAAAqQgBAOgHAIQgJAHgOAAQgOAAgIgHg");
	this.shape_9.setTransform(46.6,15.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgZAbQgJgJAAgSQAAgRAJgJQAJgKAQAAQARAAAJAKQAJAJAAARQAAASgJAJQgJAKgRAAQgQAAgJgKgAgNAAQAAAVANAAQAHAAAEgFQADgFAAgLQAAgKgDgFQgEgFgHAAQgNAAAAAUg");
	this.shape_10.setTransform(38.825,15.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAJAkIgOgaIgFAAIAAAaIgUAAIAAhHIAYAAQAcAAAAAVQAAANgMAGIAVAfgAgKgEIADAAQAJAAAAgJQAAgHgIAAIgEAAg");
	this.shape_11.setTransform(31.925,15.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AALAkIAAgdIgVAAIAAAdIgUAAIAAhHIAUAAIAAAbIAVAAIAAgbIAUAAIAABHg");
	this.shape_12.setTransform(24.275,15.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgIAkIAAg3IgSAAIAAgQIA1AAIAAAQIgRAAIAAA3g");
	this.shape_13.setTransform(17.5,15.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgOAkIgKgEIAAgRIALAEQAHACAFAAQADAAABgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIgDgCIgIgFQgIgDgCgDQgEgCgCgEQgBgDgBgGQAAgKAIgFQAGgGAMAAQALAAAMAFIgGAPQgKgEgHAAQgDAAgCABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIAMAGQAIAEAEAEQAEAFAAAHQAAAHgEAFQgDAFgGADQgGADgIAAIgMgBg");
	this.shape_14.setTransform(125.85,4.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgVAbQgJgJAAgSQAAgQAKgKQAKgKARAAQAHAAAGACQAFABAEACIgGAPQgHgEgJAAQgIAAgFAGQgEAFAAAJQAAAKAEAGQAEAFAHAAIAIgBIAAgLIgMAAIAAgOIAeAAIAAAlQgNAFgPAAQgPAAgJgKg");
	this.shape_15.setTransform(119.1,4.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAJAkIgZgyIAAAAIABASIAAAgIgSAAIAAhHIAaAAIAZAxIgBgQIAAghIARAAIAABHg");
	this.shape_16.setTransform(111.35,4.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_17.setTransform(105.475,4.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgKAkIgYhHIAWAAIAKAkQACAMAAAEIABgIIACgIIAKgkIAWAAIgYBHg");
	this.shape_18.setTransform(100.325,4.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAPAkIgDgOIgWAAIgEAOIgVAAIAXhHIAZAAIAXBHgAAIAHIgDgLIgDgKIgCgJIgBAIIgFAWIAOAAg");
	this.shape_19.setTransform(93.225,4.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgOAkIgKgEIAAgRIALAEQAGACAGAAQACAAACgBQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIgBgDIgDgCIgJgFQgGgDgDgDQgEgCgCgEQgBgDgBgGQAAgKAIgFQAHgGALAAQALAAAMAFIgGAPQgKgEgIAAQgCAAgCABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIALAGQAJAEADAEQAEAFAAAHQAAAHgEAFQgDAFgGADQgHADgHAAIgMgBg");
	this.shape_20.setTransform(86.8,4.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgJAkIAAgcIgXgrIAVAAIALAbIAMgbIAVAAIgXArIAAAcg");
	this.shape_21.setTransform(78.025,4.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAPAkIgDgOIgWAAIgEAOIgVAAIAXhHIAZAAIAXBHgAAIAHIgDgLIgDgKIgCgJIgBAIIgFAWIAOAAg");
	this.shape_22.setTransform(71.075,4.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgdAkIAAhHIAYAAQARAAAJAJQAKAJgBARQAAAQgKAKQgJAKgRAAgAgKAUIAEAAQAIAAAEgFQAFgFgBgKQAAgKgDgEQgFgFgHAAIgFAAg");
	this.shape_23.setTransform(63.95,4.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgWAkIAAhHIATAAIAAA3IAaAAIAAAQg");
	this.shape_24.setTransform(54.9,4.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAPAkIgDgOIgWAAIgEAOIgVAAIAXhHIAZAAIAXBHgAAIAHIgDgLIgDgKIgCgJIgBAIIgFAWIAOAAg");
	this.shape_25.setTransform(48.175,4.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_26.setTransform(42.825,4.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AAJAkIgOgaIgFAAIAAAaIgUAAIAAhHIAYAAQAcAAAAAVQAAANgMAGIAVAfgAgKgEIADAAQAJAAAAgJQAAgHgIAAIgEAAg");
	this.shape_27.setTransform(38.175,4.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgZAbQgJgJAAgSQAAgRAJgJQAJgKAQAAQARAAAJAKQAJAJAAARQAAASgJAJQgJAKgRAAQgQAAgJgKgAgNAAQAAAVANAAQAHAAAEgFQADgFAAgLQAAgKgDgFQgEgFgHAAQgNAAAAAUg");
	this.shape_28.setTransform(30.375,4.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAXAkIAAggIAAgEIABgPIgBAAIgOAzIgRAAIgPgzIABAUIAAAfIgSAAIAAhHIAaAAIAOAyIAPgyIAaAAIAABHg");
	this.shape_29.setTransform(21.575,4.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgUAkIAAhHIApAAIAAAQIgWAAIAAALIAVAAIAAAPIgVAAIAAANIAWAAIAAAQg");
	this.shape_30.setTransform(14.175,4.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAXAkIAAggIAAgEIABgPIgBAAIgOAzIgRAAIgPgzIABAUIAAAfIgSAAIAAhHIAaAAIAOAyIAPgyIAaAAIAABHg");
	this.shape_31.setTransform(6.475,4.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-4.7,131.79999999999998,28.3);


(lib.LOGORbAHorizontalRGBsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO_RbA_Horizontal_RGB_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACgBIgCAOIgEAAIAEgaIAJASIAIgSIAAABIAFAZIgEAAIgCgOIgHAPgAgPANIAAgUIgGAAIAAgEIAPAAIAAAEIgGAAIAAAUg");
	this.shape.setTransform(122.4438,54.0844,0.4811,0.4811);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(91.3904,50.2699,0.481,0.481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(104.1319,36.4769,0.481,0.481);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(104.1622,37.1082,0.481,0.481);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(104.2533,35.2983,0.481,0.481);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(102.9115,33.5966,0.481,0.481);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(102.0195,39.8803,0.481,0.481);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(102.3583,35.2391,0.481,0.481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(96.273,50.7103,0.481,0.481);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(121.4812,48.0677,0.481,0.481);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(120.0476,51.5964,0.481,0.481);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(119.8054,50.581,0.481,0.481);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(120.0841,49.8468,0.481,0.481);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(120.3585,49.164,0.481,0.481);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(118.6298,53.518,0.481,0.481);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(123.2238,38.9061,0.481,0.481);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(111.8711,46.8675,0.481,0.481);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(113.9756,41.9007,0.481,0.481);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(99.8954,42.4746,0.481,0.481);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(103.9852,40.6468,0.481,0.481);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(95.127,45.7323,0.481,0.481);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(97.1592,40.1673,0.481,0.481);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(92.9145,46.1146,0.481,0.481);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(104.9993,30.9479,0.481,0.481);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(99.7686,31.2315,0.481,0.481);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(102.5583,60.2751,0.481,0.481);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(105.3961,59.6458,0.481,0.481);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(104.2217,59.9705,0.481,0.481);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(108.4744,57.6617,0.481,0.481);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(101.3928,60.1869,0.481,0.481);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(96.6902,57.9383,0.481,0.481);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(106.8271,59.0205,0.481,0.481);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(97.9769,59.1528,0.481,0.481);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(102.3659,60.0186,0.481,0.481);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(94.7783,57.8421,0.481,0.481);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(107.6722,46.6751,0.481,0.481);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(108.7997,45.0525,0.4811,0.4811);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(116.3281,38.3869,0.481,0.481);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(89.7166,38.3869,0.481,0.481);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(89.7188,38.389,0.481,0.481);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(103.0449,38.3897,0.4811,0.4811);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(152.0078,40.3078,0.4809,0.4809);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(172.6402,40.3078,0.4809,0.4809);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(144.8417,40.2477,0.4809,0.4809);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(191.8057,40.3078,0.4809,0.4809);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(184.9042,40.3198,0.4809,0.4809);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(178.7481,40.3078,0.4809,0.4809);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(165.883,40.3198,0.4809,0.4809);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(159.4744,40.3078,0.4809,0.4809);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(134.9343,39.6345,0.4809,0.4809);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(138.7699,41.3298,0.4809,0.4809);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(191.8779,29.7151,0.4809,0.4809);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(136.4974,29.703,0.4809,0.4809);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(182.5356,29.6309,0.4809,0.4809);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(172.9408,29.8112,0.4809,0.4809);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(163.0815,29.7151,0.4809,0.4809);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(153.7392,29.7151,0.4809,0.4809);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(144.6975,29.7151,0.4809,0.4809);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(163.8993,50.0752,0.481,0.481);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(163.9085,46.0978,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,24.5,118.69999999999999,40.599999999999994);


(lib.image3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,50,50), null);


(lib.image2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,50,50), null);


(lib.image1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,50,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgSAgIAAg/IAkAAIAAALIgWAAIAAAOIAVAAIAAAKIgVAAIAAARIAWAAIAAALg");
	this.shape.setTransform(59.75,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAgIgPgYIgHAAIAAAYIgOAAIAAg/IATAAQAMAAAGAFQAHAEAAAKQAAAFgDAFQgEADgFADIATAcgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_1.setTransform(54.575,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgIAOAAQAPAAAIAJQAIAIAAAPQAAAQgIAJQgIAIgPAAQgOAAgIgIgAgLgPQgEAFAAAKQAAALAEAFQAEAGAHAAQAQAAAAgWQAAgVgQAAQgHAAgEAGg");
	this.shape_2.setTransform(47.625,9.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAgIAAgfIAAgEIAAgOIgQAxIgMAAIgPgxIgBAAIABATIAAAeIgNAAIAAg/IATAAIAPAwIAQgwIASAAIAAA/g");
	this.shape_3.setTransform(39.85,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAgIgbgvIAAAAIABARIAAAeIgMAAIAAg/IARAAIAbAvIAAAAIAAgRIAAgeIALAAIAAA/g");
	this.shape_4.setTransform(29.65,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAgIgPgYIgHAAIAAAYIgOAAIAAg/IATAAQAMAAAGAFQAHAEAAAKQAAAFgDAFQgEADgFADIATAcgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_5.setTransform(23.475,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAgIgEgPIgXAAIgEAPIgPAAIAWg/IAQAAIAXA/gAAIAGIgGgXIgCgEIgHAbIAPAAg");
	this.shape_6.setTransform(17,9.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAgIAAg/IAkAAIAAALIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAALg");
	this.shape_7.setTransform(11.55,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAgIAAg/IAOAAIAAA0IAZAAIAAALg");
	this.shape_8.setTransform(6.65,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6CC14C").s().p("AlJBaIAAizIKTAAIAACzg");
	this.shape_9.setTransform(33,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,18);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,320,50), null);


(lib.bar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#6CC14C").s().p("AgTD6IAAnzIAnAAIAAHzg");
	this.shape.setTransform(2,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,50);


// stage content:
(lib.WBAY_214318_MM_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(311));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(126.75,68.25,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:false},0).to({y:42.75,alpha:1},14).wait(119));

	// logo
	this.instance_1 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_1.setTransform(100.1,-4,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({y:33.4,alpha:1},14,cjs.Ease.get(1)).wait(136).to({startPosition:0},0).to({y:23.5},14,cjs.Ease.get(1)).wait(119));

	// text4
	this.instance_2 = new lib.text4("synched",0);
	this.instance_2.setTransform(215.5,37.9,1,1,0,0,0,74,7.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).to({y:35.4,alpha:1},14,cjs.Ease.get(1)).wait(133));

	// text3
	this.instance_3 = new lib.text2("synched",0);
	this.instance_3.setTransform(224.65,82.1,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({y:79.6,alpha:1},14,cjs.Ease.get(1)).wait(146));

	// text2
	this.instance_4 = new lib.text3("synched",0);
	this.instance_4.setTransform(221.25,186.6,1,1,0,0,0,74,25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({y:183.1,alpha:1},14,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(159));

	// text1
	this.instance_5 = new lib.text1("synched",0);
	this.instance_5.setTransform(220,16.6,1,1,0,0,0,74,25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({y:29.1,alpha:1},14,cjs.Ease.get(1)).wait(80).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(159));

	// bar
	this.instance_6 = new lib.bar("synched",0);
	this.instance_6.setTransform(130,5,1,1,0,0,0,80,5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({alpha:1},14).wait(283));

	// image3
	this.instance_7 = new lib.image3_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(265).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(31));

	// image2
	this.instance_8 = new lib.image2_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(205).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(1)).wait(31));

	// image1
	this.instance_9 = new lib.image1_1();
	this.instance_9.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(177).to({alpha:0},15,cjs.Ease.get(1)).wait(91));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},14,cjs.Ease.get(1)).wait(297));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,1.6,162,69.7);
// library properties:
lib.properties = {
	id: '621E6D53287E4D2D8E270160E2E63EC6',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"image1.jpg", id:"image1"},
		{src:"image2.jpg", id:"image2"},
		{src:"image3.jpg", id:"image3"}
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
an.compositions['621E6D53287E4D2D8E270160E2E63EC6'] = {
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