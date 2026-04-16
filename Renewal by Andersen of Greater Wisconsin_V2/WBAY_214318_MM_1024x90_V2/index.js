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
p.nominalBounds = new cjs.Rectangle(0,0,1024,90);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);// helper functions:

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
	this.shape.graphics.f("#12127D").s().p("AgRATQgIgGAAgNQAAgMAIgGQAHgFALAAQAKAAAIAFQAHAGABAMQgBANgHAGQgIAFgKAAQgLAAgHgFg");
	this.shape.setTransform(284.5,25.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AggBDQgRgIgKgQQgJgRgBgZQABgZAIgQQAJgRAQgIQAQgJAUAAQAWABAOAHQAQAHAIAPQAJAPAAAVIAAAWIhYAAQAAALAIAHQAIAHAOAAQAOAAALgDQALgCAMgFIAAAjQgLAFgMADQgMADgTAAQgUAAgSgIgAAYgRQAAgGgDgGQgCgFgEgDQgFgCgHAAQgIAAgFAFQgHAFgBAMIAqAAIAAAAg");
	this.shape_1.setTransform(272.75,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgbBDQgQgIgIgRQgJgPAAgaQAAgaAKgQQAJgQARgIQASgJAUAAQAOAAALADQAMAEAKAEIgOAlIgRgGQgHgDgJAAQgHABgGAEQgFAEgDAHQgDAJAAAKQAAANADAIQAEAHAEAEQAGADAIAAQAKAAALgDQALgEAJgFIAAAnQgIAGgMADQgLAEgPAAQgUAAgRgIg");
	this.shape_2.setTransform(257.925,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgYBlIAAiPIAwAAIAACPgAgSg8QgHgFgBgNQABgNAHgFQAIgEAKAAQALAAAHAEQAIAFAAANQAAANgIAFQgHAEgLAAQgKAAgIgEg");
	this.shape_3.setTransform(246.5,17.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgXBIIg3iPIAzAAIAYBUIACAGIABAJIAAAAIAAgIIACgGIAZhVIA0AAIg3CPg");
	this.shape_4.setTransform(234.35,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgyBJIAAiPIAlAAIAIAXIACAAQADgHAHgFQAFgGAIgEQAIgDAIAAIAJABIAGAAIgFAvIgFgBIgLAAIgLABQgFAAgFADQgEADgDAGQgCAGAAAJIAABGg");
	this.shape_5.setTransform(221,20.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AggBDQgRgIgJgQQgLgRABgZQgBgZAKgQQAIgRAQgIQAQgJAVAAQAUABAQAHQAPAHAIAPQAJAPgBAVIAAAWIhYAAQABALAIAHQAIAHAOAAQANAAAMgDQALgCAMgFIAAAjQgLAFgMADQgMADgTAAQgUAAgSgIgAAYgRQAAgGgCgGQgCgFgGgDQgEgCgHAAQgHAAgHAFQgFAFgBAMIApAAIAAAAg");
	this.shape_6.setTransform(206.2,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgeBJQgNgCgMgEIAAgoQANAGAOADQAOADAJAAQAHAAAEgDQAEgBgBgEQAAgDgCgCIgIgFIgTgIQgMgFgHgGQgIgFgFgIQgDgIAAgMQAAgVAQgLQAQgKAagBQAOABANADQAMADANAGIgNAgQgLgFgKgDQgLgDgHAAQgFAAgDABQgDACAAADQAAADACACIAHAFIASAHQANAFAJAGQAHAGAEAHQAEAIABANQgBAOgFAKQgHAKgNAHQgOAFgUABQgPAAgMgCg");
	this.shape_7.setTransform(191.5,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgYBjIAAjFIAxAAIAADFg");
	this.shape_8.setTransform(173.8,17.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AguBFQgKgEgFgLQgGgKAAgQQAAgXAQgKQAQgMAegBIAXgBIAAgBQAAgKgFgFQgFgDgHgBQgIABgKACQgLAEgLAEIgNggQAMgHAQgDQAQgDASgBQAbAAAPAOQAQANAAAaIAABdIgjAAIgJgTIgBAAQgGAHgGAGQgHAEgHACQgIADgMAAQgNgBgKgFgAAHAIQgNABgFAEQgGAFABAHQgBAIAEADQAEADAGABQAJgBAGgFQAHgGAAgJIAAgLg");
	this.shape_9.setTransform(161.2,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAVBJIAAhNQAAgPgEgHQgFgHgJAAQgNAAgFALQgEAMAAAUIAAA/IgyAAIAAiPIAlAAIAHATIACAAQAFgGAGgFQAGgFAHgDQAJgCAKAAQAWAAAOAMQAOANAAAcIAABcg");
	this.shape_10.setTransform(144.775,20.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgcBFQgNgEgKgKQgJgKgFgNQgGgOAAgSQAAgXAJgQQAJgRAQgJQAQgJAVAAQAVAAAQAJQAQAJAKARQAJAQAAAXQAAASgFAOQgFANgKAKQgJAKgNAEQgOAFgQABQgPgBgNgFgAgPgbQgFAJAAASQAAAMACAJQACAIAFAEQAEAEAHABQAIgBAEgEQAFgEACgIQACgJAAgMQAAgMgCgIQgCgIgFgEQgEgEgIgBQgKAAgFAKg");
	this.shape_11.setTransform(127.775,20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgYBlIAAiPIAwAAIAACPgAgRg8QgIgFAAgNQAAgNAIgFQAHgEAKAAQAKAAAJAEQAHAFABANQgBANgHAFQgJAEgKAAQgKAAgHgEg");
	this.shape_12.setTransform(115.3,17.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgLBTQgLgEgGgLQgGgLAAgUIAAg5IgSAAIAAgVIAXgPIAMgfIAgAAIAAAdIAkAAIAAAmIgkAAIAAA3QAAAGADAEQAFAEAFgBIANgBIAMgDIAAAkIgSAFQgJADgOAAQgMAAgLgFg");
	this.shape_13.setTransform(105,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AhFBoIAAjNIApAAIAHASIACAAIAJgKQAFgFAGgDQAHgDAKAAQAZAAANAUQAOATAAAkQAAAZgIAPQgGARgMAIQgMAJgPAAQgKAAgHgDQgGgCgFgEIgIgIIgBAAIABALIAAANIAAA0gAgKg9QgFAEgCAHQgBAHgBAKIAAADQABAMABAIQACAHAEAEQAFADAGAAQAGABAEgEQAEgDADgHQACgIAAgNQAAgSgFgJQgFgHgJgBQgHAAgDAEg");
	this.shape_14.setTransform(91.05,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AggBDQgRgIgJgQQgLgRAAgZQABgZAIgQQAJgRAQgIQAQgJAUAAQAWABAOAHQAQAHAIAPQAJAPAAAVIAAAWIhYAAQAAALAIAHQAIAHAOAAQAOAAALgDQALgCAMgFIAAAjQgKAFgNADQgMADgTAAQgUAAgSgIgAAYgRQAAgGgCgGQgDgFgEgDQgFgCgHAAQgIAAgFAFQgHAFgBAMIAqAAIAAAAg");
	this.shape_15.setTransform(74.4,20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgbBDQgQgIgIgRQgJgPAAgaQAAgaAKgQQAJgQARgIQASgJAUAAQAOAAALADQAMAEAKAEIgOAlIgRgGQgHgDgJAAQgHABgGAEQgFAEgDAHQgDAJAAAKQAAANADAIQAEAHAEAEQAGADAIAAQAKAAALgDQALgEAJgFIAAAnQgIAGgMADQgLAEgPAAQgUAAgRgIg");
	this.shape_16.setTransform(59.575,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAYBIIgYgrIgXArIg4AAIAuhJIgshGIA4AAIAVApIAWgpIA4AAIgtBGIAwBJg");
	this.shape_17.setTransform(44.2,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("Ag2BdIAAi5IBtAAIAAAoIg7AAIAAAeIA3AAIAAAnIg3AAIAAAjIA7AAIAAApg");
	this.shape_18.setTransform(29.275,18.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AgSATQgHgGgBgNQABgMAHgGQAJgFAJAAQALAAAHAFQAJAGgBAMQABANgJAGQgHAFgLAAQgJAAgJgFg");
	this.shape_19.setTransform(275.1,-7.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgfBJQgMgCgNgEIAAgoQAOAGAOADQAOADAJAAQAHgBAEgCQAEgBAAgEQAAgDgDgCIgIgFIgTgIQgMgFgIgGQgHgFgEgIQgFgIAAgMQAAgVAQgLQARgLAaAAQAOABANADQAMADAOAGIgOAgQgKgFgLgDQgLgDgHAAQgFAAgDACQgDABAAADQAAADACACIAIAEIASAIQAMAFAIAGQAJAFADAIQAFAIAAANQAAAOgHAKQgFAKgOAHQgNAFgWABQgOAAgNgCg");
	this.shape_20.setTransform(264.7,-12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgLBTQgLgEgGgLQgGgLAAgUIAAg6IgRAAIAAgUIAWgQIAMgeIAgAAIAAAdIAkAAIAAAlIgkAAIAAA4QAAAGADAEQAFAEAGgBIAMgBIALgDIAAAkIgRAFQgIACgPABQgMAAgLgFg");
	this.shape_21.setTransform(251.9,-14.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AgbBDQgQgIgIgRQgJgPAAgaQAAgaAKgQQAJgRARgHQASgJAUAAQAOAAALADQAMAEAKAEIgOAlIgRgGQgHgDgJAAQgHAAgGAFQgFAEgDAHQgDAIAAALQAAANADAIQAEAHAEAEQAGADAIAAQAKAAALgDQALgEAJgFIAAAnQgIAFgMAEQgLAEgPAAQgUAAgRgIg");
	this.shape_22.setTransform(239.225,-12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgsBEQgMgGgGgLQgHgMAAgSIAAhdIAxAAIAABNQAAAOAFAIQAEAHAIAAQAJAAAGgFQAFgFACgKQACgKAAgNIAAg/IAxAAIAACPIgmAAIgFgSIgEAAQgEAHgGAFQgIAEgHACQgIACgJAAQgOAAgLgFg");
	this.shape_23.setTransform(223.3,-12.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("Ag2BRQgPgTAAgkQAAgkAPgTQAPgTAXAAQAKAAAGADQAHADAFAFQAFAEAEAGIABAAIgCgPIAAgTIAAgmIAyAAIAADFIgmAAIgLgSIgBAAIgJAKQgFAFgGACQgIADgJAAQgXAAgOgTgAgNAAQgFAJAAASQAAARAFAJQAHAIAIAAQAMAAAFgHQAEgJAAgPIAAgDQABgRgFgKQgFgIgNAAQgIAAgGAIg");
	this.shape_24.setTransform(205.95,-15.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AgcBGQgNgFgKgKQgJgKgFgNQgGgOAAgSQAAgXAJgQQAJgRAQgJQAQgJAVAAQAVAAAQAJQAQAJAKARQAJAQAAAXQAAASgFAOQgFANgKAKQgJAKgNAFQgOAEgQABQgPgBgNgEgAgPgbQgFAJAAASQAAAMACAJQACAIAFAFQAEADAHAAQAIAAAEgDQAFgFACgIQACgJAAgMQAAgLgCgJQgCgIgFgEQgEgEgIgBQgKAAgFAKg");
	this.shape_25.setTransform(189.625,-12.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgyBJIAAiPIAlAAIAIAXIACAAQADgHAGgFQAHgGAHgEQAIgDAIAAIAIABIAHAAIgEAvIgGgBIgLAAIgKABQgGAAgEADQgFADgDAGQgCAGAAAJIAABGg");
	this.shape_26.setTransform(175.95,-12.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AhEBoIAAjNIAoAAIAHASIACAAIAJgKQAFgEAHgEQAGgDALAAQAXAAAOAUQANATAAAkQABAZgIAPQgGARgMAIQgMAJgPAAQgKAAgHgDQgHgCgEgEIgIgIIgBAAIABALIAAANIAAA0gAgLg9QgEADgBAIQgDAGAAALIAAADQAAAMACAIQACAHAEAEQAEADAHAAQAGAAAFgDQAEgCACgJQACgHAAgNQAAgSgFgJQgFgHgJgBQgGAAgFAEg");
	this.shape_27.setTransform(161.1,-9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgyBJIAAiPIAlAAIAIAXIACAAQADgHAGgFQAHgGAHgEQAIgDAIAAIAIABIAHAAIgEAvIgGgBIgLAAIgKABQgGAAgFADQgEADgDAGQgCAGAAAJIAABGg");
	this.shape_28.setTransform(140.3,-12.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AgcBGQgNgFgKgKQgJgKgFgNQgGgOAAgSQAAgXAJgQQAJgRAQgJQAQgJAVAAQAVAAAQAJQAQAJAKARQAJAQAAAXQAAASgFAOQgFANgKAKQgJAKgNAFQgOAEgQABQgPgBgNgEgAgPgbQgFAJAAASQAAAMACAJQACAIAFAFQAEADAHAAQAIAAAEgDQAFgFACgIQACgJAAgMQAAgLgCgJQgCgIgFgEQgEgEgIgBQgKAAgFAKg");
	this.shape_29.setTransform(125.225,-12.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgYBlIAAiPIAxAAIAACPgAgSg8QgHgFgBgNQABgNAHgFQAIgEAKAAQALAAAHAEQAJAFgBANQABANgJAFQgHAEgLAAQgKAAgIgEg");
	this.shape_30.setTransform(112.75,-15.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AgyBJIAAiPIAlAAIAIAXIACAAQADgHAHgFQAFgGAIgEQAIgDAIAAIAJABIAGAAIgFAvIgFgBIgLAAIgLABQgFAAgFADQgEADgDAGQgCAGAAAJIAABGg");
	this.shape_31.setTransform(103.1,-12.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20000").s().p("AggBDQgRgIgKgQQgKgRABgZQgBgZAKgQQAIgSAQgHQAQgJAVAAQAUABAQAHQAPAHAIAPQAJAPgBAVIAAAWIhYAAQABALAIAHQAIAHAOAAQANAAAMgDQALgCAMgGIAAAkQgLAFgMADQgMADgTAAQgUAAgSgIgAAYgRQAAgGgCgFQgCgFgGgEQgEgCgHAAQgHgBgHAGQgFAFgBAMIApAAIAAAAg");
	this.shape_32.setTransform(88.3,-12.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20000").s().p("AhFBoIAAjNIApAAIAHASIADAAIAIgKQAFgEAHgEQAGgDALAAQAYAAANAUQANATAAAkQAAAZgGAPQgHARgMAIQgMAJgPAAQgKAAgHgDQgGgCgFgEIgHgIIgCAAIABALIABANIAAA0gAgLg9QgEADgBAIQgCAGAAALIAAADQAAAMABAIQACAHAEAEQAFADAGAAQAHAAAEgDQADgCADgJQACgHAAgNQAAgSgFgJQgFgHgJgBQgGAAgFAEg");
	this.shape_33.setTransform(72.2,-9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20000").s().p("AgsBEQgMgGgGgLQgHgMAAgSIAAhdIAyAAIAABNQAAAOADAIQAEAHAKAAQAIAAAFgFQAGgFACgKQABgKAAgNIAAg/IAyAAIAACPIglAAIgGgSIgDAAQgFAHgHAFQgGAEgIACQgIACgJAAQgOAAgLgFg");
	this.shape_34.setTransform(54.85,-12.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20000").s().p("AgdBeQgKgBgIgCIgRgHIAAgtQAPAIAQAEQAPAEAMAAQAHAAAEgCQAFgCACgDQADgDAAgEQAAgFgDgDQgEgDgHgEIgSgJIgUgKQgIgGgFgFQgHgHgCgIQgEgJAAgMQAAgSAJgMQAJgMAPgGQAQgHAUAAQASAAAPAFQAPAEALAFIgQAnQgMgGgLgDQgLgDgLAAQgFAAgEABQgEACgCACQgCADAAAEQAAAEADADQAEAEAHAEIAVALQAOAFAKAHQAJAHAFAJQAFAKAAAOQAAAPgIAOQgHAOgRAIQgQAJgYAAg");
	this.shape_35.setTransform(38.8,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-35.4,407.9,72.8);


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
	this.shape.graphics.f("#12127D").s().p("AAiBBIAAhRQAAgQgHgIQgHgIgPAAQgVAAgJAMQgIAMAAAXIAABCIgUAAIAAh/IAQAAIADASIABAAQAEgGAHgFQAGgEAIgDQAHgDAJABQAWAAAMALQALALAAAZIAABSg");
	this.shape.setTransform(292.2,-30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AAgBAIgXhKIgCgJIgDgJIgCgIIgCgGIAAAAIgBAGIgBAIIgDAJIgDAKIgYBJIgWAAIgjh/IAUAAIASBFIAEAOIADANIACALIAAAAIADgHIACgJIABgJIADgJIAYhJIAUAAIAXBJIADAMIAEALIACALIAAAAIACgKIADgNIAEgPIAThFIATAAIgkB/g");
	this.shape_1.setTransform(275.55,-30.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgXA+QgLgEgHgJQgJgJgEgMQgEgMAAgQQAAgUAHgPQAHgPAOgIQANgIARAAQARAAAOAIQANAIAHAPQAIAPAAAUQAAAQgFAMQgEAMgHAJQgIAJgLAEQgLAFgNAAQgNAAgKgFgAgdgkQgJANAAAXQAAAPAEAMQAEALAJAGQAJAGAMAAQANAAAJgGQAJgGADgLQAFgMAAgPQgBgPgEgLQgDgLgJgGQgIgGgOAAQgTAAgKANg");
	this.shape_2.setTransform(259.1,-30.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AhDBWIAAirIAzAAQAaAAASAKQAUAKAKASQAKATAAAbQAAAcgKAUQgLATgUAKQgUAKgbAAgAgvBFIAYAAQAjAAARgSQASgRAAgiQAAgXgHgPQgIgPgPgHQgPgIgUAAIgdAAg");
	this.shape_3.setTransform(243.6,-32.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgyBcIgHgBIAAgQIAGABIAIABQAIAAAFgDQAFgDAEgFQAEgFACgHIAIgTIg0h/IAVAAIAdBKIAEANIAEAKIACALIAAAAIAFgPIAGgTIAbhKIAVAAIg4CSQgEAMgFAJQgGAJgIAEQgJAFgMAAg");
	this.shape_4.setTransform(222.25,-27.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgYA7QgOgIgIgOQgHgPAAgVQAAgUAHgPQAHgPAMgIQANgJAQAAQARAAALAIQAMAHAGANQAGANAAASIAAALIhXAAQAAAWALAMQALAMATAAQAMAAAJgCQAKgCAKgFIAAARQgKAFgJACQgKACgNAAQgSAAgNgIgAAigLQAAgLgDgJQgEgJgHgFQgHgFgLAAQgPAAgJALQgJAKgCASIBDAAIAAAAg");
	this.shape_5.setTransform(209.575,-30.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AAjBBIAAhRQAAgQgIgIQgHgIgQAAQgTAAgJAMQgJAMAAAXIAABCIgTAAIAAh/IAPAAIADASIABAAQAFgGAFgFQAHgEAIgDQAIgDAIABQAWAAAMALQAMALAAAZIAABSg");
	this.shape_6.setTransform(195.5,-30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgXA+QgLgEgIgJQgHgJgFgMQgEgMAAgQQAAgUAHgPQAHgPAOgIQANgIARAAQASAAANAIQANAIAIAPQAHAPAAAUQAAAQgFAMQgDAMgIAJQgIAJgLAEQgLAFgNAAQgMAAgLgFgAgcgkQgKANAAAXQAAAPAEAMQAEALAJAGQAJAGAMAAQANAAAJgGQAJgGAEgLQADgMAAgPQAAgPgDgLQgEgLgJgGQgJgGgNAAQgUAAgIANg");
	this.shape_7.setTransform(180.95,-30.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("ABABWIAAhtIABgPIAAgPIABgMIgBAAIg6CXIgPAAIg5iXIgBAAIAAAMIABAPIAAAQIAABsIgSAAIAAirIAdAAIA2COIAAAAIA3iOIAdAAIAACrg");
	this.shape_8.setTransform(162.95,-32.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgXA+QgLgEgHgJQgJgJgEgMQgEgMAAgQQAAgUAHgPQAHgPANgIQAOgIARAAQASAAANAIQANAIAHAPQAIAPAAAUQAAAQgEAMQgFAMgHAJQgIAJgLAEQgLAFgNAAQgNAAgKgFgAgdgkQgJANAAAXQAAAPAEAMQAEALAJAGQAIAGANAAQANAAAJgGQAIgGAFgLQAEgMAAgPQAAgPgEgLQgFgLgIgGQgIgGgOAAQgUAAgJANg");
	this.shape_9.setTransform(138.8,-30.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAsBWIhciPIgBAAIABANIAAAQIABAQIAABiIgTAAIAAirIAXAAIBcCPIABAAIgBgMIAAgQIgBgQIAAhjIATAAIAACrg");
	this.shape_10.setTransform(122.55,-32.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgRAeIAGgUIAEgUIADgTIAUAAIACAEIgGASIgHASIgGATg");
	this.shape_11.setTransform(414.95,-54.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AAABNQgJgEgFgJQgFgIAAgPIAAhLIgSAAIAAgKIASgIIAIgbIALAAIAAAdIAlAAIAAAQIglAAIAABKQAAAMAFAGQAGAGAJAAIAKgBIAIgCIAAAPIgJADIgMABQgLAAgGgDg");
	this.shape_12.setTransform(407.9,-62.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgbBAQgKgCgIgDIAAgSIATAHQALADALAAQAQAAAHgGQAIgFAAgJQAAgGgDgEQgDgEgHgDQgHgEgLgFIgWgIQgJgFgFgGQgEgHAAgLQAAgQANgJQANgJAUAAQAMAAAKADIATAGIgHAPIgRgFQgJgDgJAAQgMAAgIAFQgHAEAAAIQAAAGAEAEQADAEAHADIATAIIAVAIQAIAFAFAHQAFAHAAAKQAAAMgGAJQgGAIgMAEQgLAFgPAAQgOAAgJgDg");
	this.shape_13.setTransform(398.075,-61.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgYA7QgOgIgIgOQgHgPAAgVQAAgUAHgPQAHgPAMgIQANgJAQAAQARAAALAIQAMAHAGANQAGANAAASIAAALIhXAAQAAAWALAMQALAMATAAQAMAAAJgCQAKgCAKgFIAAARQgKAFgJACQgKACgNAAQgSAAgNgIgAAigLQAAgLgDgJQgEgJgHgFQgHgFgLAAQgPAAgJALQgJAKgCASIBDAAIAAAAg");
	this.shape_14.setTransform(385.625,-61.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgkBBIAAh/IAQAAIADAYIAAAAQAEgHAGgHQAFgFAHgEQAHgEAJABIAIAAIAIABIgCASIgHgBIgIAAQgIAAgGACQgGAEgGAFQgEAHgEAIQgCAHAAALIAABDg");
	this.shape_15.setTransform(374.8,-61.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgYA7QgOgIgIgOQgHgPAAgVQAAgUAHgPQAHgPAMgIQANgJAQAAQARAAALAIQAMAHAGANQAGANAAASIAAALIhXAAQAAAWALAMQALAMATAAQAMAAAJgCQAKgCAKgFIAAARQgKAFgJACQgKACgNAAQgSAAgNgIgAAigLQAAgLgDgJQgEgJgHgFQgHgFgLAAQgPAAgJALQgJAKgCASIBDAAIAAAAg");
	this.shape_16.setTransform(362.375,-61.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgBBNQgIgEgFgJQgFgIAAgPIAAhLIgSAAIAAgKIASgIIAIgbIALAAIAAAdIAlAAIAAAQIglAAIAABKQAAAMAFAGQAGAGAJAAIAKgBIAIgCIAAAPIgKADIgLABQgKAAgIgDg");
	this.shape_17.setTransform(351.25,-62.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AAiBBIAAhRQABgQgIgIQgHgIgPAAQgVAAgIAMQgJANAAAWIAABCIgTAAIAAh/IAPAAIADASIABAAQAFgGAGgFQAGgEAIgDQAIgDAHABQAXAAAMALQAMALgBAZIAABSg");
	this.shape_18.setTransform(339.75,-61.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_19.setTransform(329,-63.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgXA+QgLgEgHgJQgJgJgEgMQgEgMAAgQQAAgUAHgPQAHgPANgIQAOgIARAAQARAAAOAIQANAIAHAPQAIAPAAAUQAAAQgEAMQgFAMgHAJQgIAJgLAEQgLAFgNAAQgNAAgKgFgAgdgkQgJANAAAXQAAAPAEAMQAEALAJAGQAIAGANAAQANAAAJgGQAJgGADgLQAFgMAAgPQAAgPgFgLQgDgLgJgGQgIgGgOAAQgTAAgKANg");
	this.shape_20.setTransform(312.3,-61.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAsBWIhdiPIgBAAIABANIABAQIABAQIAABiIgTAAIAAirIAXAAIBcCPIAAAAIAAgMIgBgQIAAgQIAAhjIATAAIAACrg");
	this.shape_21.setTransform(296.05,-63.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgQAeIAEgUIAFgUIADgTIAUAAIACAEIgGASIgHASIgHATg");
	this.shape_22.setTransform(277.3,-54.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgbBAQgKgCgIgDIAAgSIATAHQALADALAAQAQAAAHgGQAIgFAAgJQAAgGgDgEQgDgEgHgDQgHgEgLgFIgWgIQgJgFgFgGQgEgHAAgLQAAgQANgJQANgJAUAAQAMAAAKADIATAGIgHAPIgRgFQgJgDgJAAQgMAAgIAFQgHAEAAAIQAAAGAEAEQADAEAHADIATAIIAVAIQAIAFAFAHQAFAHAAAKQAAAMgGAJQgGAIgMAEQgLAFgPAAQgOAAgJgDg");
	this.shape_23.setTransform(268.975,-61.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgBBNQgIgEgFgJQgFgIAAgPIAAhLIgSAAIAAgKIASgIIAIgbIALAAIAAAdIAlAAIAAAQIglAAIAABKQAAAMAFAGQAGAGAJAAIAKgBIAIgCIAAAPIgJADIgMABQgLAAgHgDg");
	this.shape_24.setTransform(258.85,-62.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AAjBBIAAhRQAAgQgIgIQgHgIgQAAQgTAAgJAMQgJANAAAWIAABCIgTAAIAAh/IAPAAIADASIABAAQAFgGAFgFQAHgEAIgDQAIgDAIABQAWAAAMALQAMALAAAZIAABSg");
	this.shape_25.setTransform(247.35,-61.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgYA7QgOgIgIgOQgHgPAAgVQAAgUAHgPQAHgPAMgIQANgJAQAAQARAAALAIQAMAHAGANQAGANAAASIAAALIhXAAQAAAWALAMQALAMATAAQAMAAAJgCQAKgCAKgFIAAARQgKAFgJACQgKACgNAAQgSAAgNgIgAAigLQAAgLgDgJQgEgJgHgFQgHgFgLAAQgPAAgJALQgJAKgCASIBDAAIAAAAg");
	this.shape_26.setTransform(233.275,-61.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("ABIBBIAAhSQAAgPgGgIQgIgIgNAAQgSAAgJALQgIALAAAUIAABHIgTAAIAAhSQAAgKgCgHQgEgHgFgEQgGgDgKAAQgMAAgIAFQgHAGgEAKQgEALAAAPIAABCIgTAAIAAh/IAQAAIACASIABAAQAFgGAGgFQAFgEAIgDQAHgDAIABQAPgBAJAGQAJAFAFAMIABAAQAGgMALgFQAMgGANABQAVAAAKALQALALAAAYIAABTg");
	this.shape_27.setTransform(215.45,-61.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgyBcIgHgBIAAgQIAGABIAIABQAHAAAGgDQAFgDAEgFQAEgFACgHIAIgTIg0h/IAVAAIAdBKIAEANIAEAKIACALIAAAAIAFgPIAGgTIAbhKIAVAAIg4CSQgEAMgFAJQgGAJgIAEQgJAFgMAAg");
	this.shape_28.setTransform(198.3,-58.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgfA+QgJgEgFgIQgFgJgBgMQAAgUAQgJQAPgKAegBIAWgBIAAgIQABgQgIgHQgHgHgNAAQgJAAgJADIgSAHIgFgPQAIgEAMgDQALgEALAAQAXAAALALQAMAKAAAWIAABXIgPAAIgDgTIgCAAQgFAHgGAFQgGAEgHADQgIADgKgBQgMAAgJgEgAAMACQgXAAgKAIQgJAHAAAMQAAALAGAGQAHAEALAAQARAAAKgJQALgJAAgUIAAgLg");
	this.shape_29.setTransform(185.25,-61.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("Ag1BWIAAirIAsAAQAhAAAPANQAPANAAAYQAAALgDAKQgEAKgIAGQgIAIgNAEQgNAEgSAAIgUAAIAABEgAghABIASAAQAQAAALgCQALgEAFgIQAGgIAAgNQAAgRgLgIQgLgJgWAAIgXAAg");
	this.shape_30.setTransform(172.375,-63.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgXA+QgLgEgIgJQgHgJgFgMQgEgMAAgQQAAgUAHgPQAHgPAOgIQANgIARAAQASAAANAIQANAIAIAPQAHAPAAAUQAAAQgFAMQgDAMgIAJQgIAJgLAEQgLAFgNAAQgMAAgLgFgAgcgkQgKANAAAXQAAAPAEAMQAEALAJAGQAJAGAMAAQANAAAJgGQAJgGAEgLQADgMAAgPQAAgPgDgLQgEgLgJgGQgJgGgNAAQgUAAgIANg");
	this.shape_31.setTransform(151.25,-61.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAsBWIhciPIgBAAIABANIAAAQIAAAQIAABiIgSAAIAAirIAXAAIBcCPIAAAAIAAgMIAAgQIgBgQIAAhjIATAAIAACrg");
	this.shape_32.setTransform(135,-63.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgJBAQgEgEAAgIQAAgJAEgDQAEgEAFABQAGgBAEAEQAEADAAAJQAAAIgEAEQgEADgGAAQgFAAgEgDgAgJgoQgEgDAAgIQAAgJAEgDQAEgDAFgBQAGABAEADQAEADAAAJQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_33.setTransform(116.6,-61.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgbBAQgKgCgIgDIAAgSIATAHQALADALAAQAQAAAHgGQAIgFAAgJQAAgGgDgEQgDgEgHgDQgHgEgLgFIgWgIQgJgFgFgGQgEgHAAgLQAAgQANgJQANgJAUAAQAMAAAKADIATAGIgHAPIgRgFQgJgDgJAAQgMAAgIAFQgHAEAAAIQAAAGAEAEQADAEAHADIATAIIAVAIQAIAFAFAHQAFAHAAAKQAAAMgGAJQgGAIgMAEQgLAFgPAAQgOAAgJgDg");
	this.shape_34.setTransform(107.825,-61.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AAiBbIAAhSQAAgPgHgIQgHgIgPAAQgOAAgIAFQgJAGgDAKQgEAKAAAPIAABDIgUAAIAAi1IAUAAIAAA2IgBAKIAAAJIABAAQAEgHAHgFQAGgEAHgDQAIgCAIAAQAQAAAKAFQAKAFAGAKQAEAKAAAQIAABTg");
	this.shape_35.setTransform(94.75,-64.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAABNQgJgEgFgJQgFgIAAgPIAAhLIgSAAIAAgKIASgIIAIgbIALAAIAAAdIAlAAIAAAQIglAAIAABKQAAAMAFAGQAGAGAJAAIAKgBIAIgCIAAAPIgJADIgMABQgLAAgGgDg");
	this.shape_36.setTransform(83,-62.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AAjBBIAAhRQAAgQgIgIQgHgIgQAAQgTAAgKAMQgIANAAAWIAABCIgTAAIAAh/IAPAAIADASIABAAQAFgGAFgFQAHgEAIgDQAHgDAJABQAWAAAMALQAMALAAAZIAABSg");
	this.shape_37.setTransform(71.5,-61.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgXA+QgLgEgHgJQgJgJgEgMQgEgMAAgQQAAgUAHgPQAHgPAOgIQANgIARAAQARAAAOAIQANAIAIAPQAHAPAAAUQAAAQgFAMQgEAMgHAJQgIAJgLAEQgLAFgNAAQgNAAgKgFgAgdgkQgJANAAAXQAAAPAEAMQAEALAJAGQAJAGAMAAQANAAAJgGQAJgGADgLQAEgMABgPQgBgPgEgLQgDgLgJgGQgIgGgOAAQgTAAgKANg");
	this.shape_38.setTransform(56.95,-61.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("ABABWIAAhtIABgPIABgPIABgMIgBAAIg7CXIgPAAIg5iXIgBAAIAAAMIABAPIAAAQIAABsIgSAAIAAirIAdAAIA2COIAAAAIA3iOIAeAAIAACrg");
	this.shape_39.setTransform(38.95,-63.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AATBWIAAgnIhSAAIAAgRIBRhzIAUAAIAAByIAaAAIAAASIgaAAIAAAngAAOg2IgFAJIg0BKIA+AAIAAg3IAAgMIABgJIAAgJIAAgIIgBAAg");
	this.shape_40.setTransform(15.125,-63.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("Ag3BXIAAgRIAtguIAVgXQAJgJAEgKQAFgKAAgLQAAgOgIgJQgJgHgOAAQgMAAgJAEQgKAFgJAHIgLgNIAPgKQAIgEAJgDQAJgDAKAAQAPAAAMAFQALAGAHALQAGAKAAAOQAAAOgGALQgFAMgJAKQgKALgNANIglAmIAAAAIBXAAIAAASg");
	this.shape_41.setTransform(1.35,-63.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-82.7,540.9,67.4);


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
	this.shape.graphics.f("#B20000").s().p("AgSBZQgIgGAAgNQAAgNAIgGQAIgFAKAAQALAAAHAFQAIAGAAANQAAANgIAGQgHAFgLAAQgKAAgIgFgAgUAaIgGh3IA2AAIgHB3g");
	this.shape.setTransform(370.65,60.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgYBdIAAhHIg9hyIA2AAIAfBFIAghFIA2AAIg9BwIAABJg");
	this.shape_1.setTransform(358.225,60.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAoBdIgJgjIg8AAIgKAjIg2AAIA8i5IBCAAIA9C5gAAUARIgIgdIgEgOIgEgTIgEgRIgDAQIgDATIgFAPIgIAdIAnAAg");
	this.shape_2.setTransform(340.2,60.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AA8BdIAAhSIAAgRIABgTIABgPIgCAAIglCFIgvAAIgmiFIgBAAIABAOIABATIABATIAABRIgtAAIAAi5IBDAAIAmCDIABAAIAmiDIBDAAIAAC5g");
	this.shape_3.setTransform(318.225,60.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgYBdIAAiQIgtAAIAAgpICLAAIAAApIgtAAIAACQg");
	this.shape_4.setTransform(291.225,60.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("Ag6BLQgVgUAAgkIAAhwIAzAAIAABsQAAAUAIAIQAGAKAOgBQAKAAAHgDQAGgFADgIQADgIAAgNIAAhsIAzAAIAABuQAAAYgJARQgKASgRAJQgSAJgaAAQgmAAgUgTg");
	this.shape_5.setTransform(273.75,60.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgnBZQgRgHgLgNQgLgNgGgRQgFgSAAgVQAAgcAKgWQAJgVAUgMQAUgLAegBQAgABAUALQAUAMAJAVQAJAWAAAcQAAAVgFASQgFARgLANQgLANgRAHQgRAHgYgBQgWABgRgHgAgUgvQgJAHgDAMQgEAMAAAQQAAARAEAMQADAMAJAHQAIAGAMAAQAOAAAIgGQAIgHAEgMQAEgMAAgRQAAgYgJgPQgIgOgVAAQgMgBgIAHg");
	this.shape_6.setTransform(253.525,60.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AAdBdIAAhMIg5AAIAABMIgzAAIAAi5IAzAAIAABFIA5AAIAAhFIAzAAIAAC5g");
	this.shape_7.setTransform(233.25,60.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AglBVQgUgLgLgUQgMgWAAggQAAgcAMgWQALgVAWgMQAVgLAfgBQARABAQADQAQADALAFIgQAoQgKgFgLgCQgKgDgNAAQgQAAgJAIQgLAHgEANQgFAMAAAOQAAARAFAMQAFAMAKAGQAIAGANABIALgBIAKgCIAAgdIghAAIAAglIBQAAIAABiQgOAFgTAEQgSACgVAAQgaAAgUgKg");
	this.shape_8.setTransform(213.475,60.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("Ag6BLQgVgUABgkIAAhwIAyAAIAABsQAAAUAIAIQAHAKANgBQAKAAAHgDQAGgFADgIQADgIAAgNIAAhsIAyAAIAABuQABAYgKARQgIASgSAJQgSAJgaAAQgmAAgUgTg");
	this.shape_9.setTransform(194.3,60.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgnBZQgRgHgLgNQgLgNgGgRQgFgSAAgVQAAgcAKgWQAJgVAUgMQAUgLAegBQAgABAUALQAUAMAJAVQAJAWAAAcQAAAVgFASQgFARgLANQgLANgRAHQgRAHgYgBQgWABgRgHgAgUgvQgJAHgDAMQgEAMAAAQQAAARAEAMQADAMAJAHQAIAGAMAAQAOAAAIgGQAIgHAEgMQAEgMAAgRQAAgYgJgPQgIgOgVAAQgMgBgIAHg");
	this.shape_10.setTransform(174.075,60.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAXBdIgmhEIgOAAIAABEIgxAAIAAi5IA8AAQAZAAAQAGQARAGAJANQAIAMAAASQAAALgEAKQgDAJgIAHQgGAGgLAGIA2BRgAgdgLIAKAAQALAAAIgGQAGgFAAgNQAAgJgFgFQgGgFgOAAIgKAAg");
	this.shape_11.setTransform(156.15,60.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AAdBdIAAhMIg5AAIAABMIgyAAIAAi5IAyAAIAABFIA5AAIAAhFIAyAAIAAC5g");
	this.shape_12.setTransform(136.25,60.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgYBdIAAiQIgtAAIAAgpICLAAIAAApIgtAAIAACQg");
	this.shape_13.setTransform(118.625,60.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgdBeQgKgBgIgCIgRgHIAAgtQAPAIAQAEQAPAEAMAAQAHAAAEgCQAFgCADgDQACgDAAgEQAAgFgDgDQgEgDgHgEIgSgJIgUgLQgIgFgFgFQgHgGgCgJQgEgJAAgMQAAgSAJgMQAJgMAPgGQAQgGAUgBQASABAPAEQAPAEALAFIgQAnQgMgFgLgEQgLgDgLAAQgFAAgEACQgEABgCACQgCADAAAEQAAAEADAEQAEADAHAEIAVALQAOAGAKAGQAJAHAFAJQAFAKAAAPQAAAPgHAOQgIANgRAIQgQAJgYgBg");
	this.shape_14.setTransform(96.85,60.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AglBVQgUgLgLgUQgMgWAAggQAAgcAMgWQALgVAWgMQAVgLAfgBQARABAQADQAQADALAFIgQAoQgKgFgLgCQgKgDgNAAQgQAAgJAIQgLAHgEANQgFAMAAAOQAAARAFAMQAFAMAKAGQAIAGANABIALgBIAKgCIAAgdIghAAIAAglIBQAAIAABiQgOAFgTAEQgSACgVAAQgaAAgUgKg");
	this.shape_15.setTransform(79.375,60.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAXBdIhEiCIgBAAIABAOIABARIABAPIAABUIgtAAIAAi5IBCAAIBCCAIABAAIgBgOIAAgQIgBgOIAAhUIAtAAIAAC5g");
	this.shape_16.setTransform(59.2,60.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgYBdIAAi5IAxAAIAAC5g");
	this.shape_17.setTransform(43.825,60.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgdBdIg8i5IA4AAIAZBdIAEAOIADAQIABAOIACgNIADgRIADgNIAaheIA4AAIg9C5g");
	this.shape_18.setTransform(30.325,60.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAnBdIgJgjIg7AAIgKAjIg3AAIA9i5IBCAAIA9C5gAAUARIgIgdIgEgOIgFgTIgDgRIgDAQIgDATIgFAPIgHAdIAmAAg");
	this.shape_19.setTransform(11.9,60.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgdBeQgJgBgJgCIgRgHIAAgtQAPAIAPAEQAQAEAMAAQAGAAAGgCQAEgCACgDQADgDAAgEQAAgFgEgDQgDgDgIgEIgRgJIgTgLQgJgFgGgFQgFgGgEgJQgDgJAAgMQAAgSAJgMQAJgMAQgGQAQgGATgBQATABAOAEQAPAEALAFIgPAnQgMgFgMgEQgLgDgKAAQgGAAgEACQgEABgCACQgCADAAAEQAAAEAEAEQADADAGAEIAXALQANAGAJAGQAKAHAFAJQAFAKAAAPQAAAPgIAOQgHANgQAIQgQAJgZgBg");
	this.shape_20.setTransform(-4.9,60.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgYBdIAAhHIg9hyIA2AAIAfBFIAghFIA2AAIg9BwIAABJg");
	this.shape_21.setTransform(272.675,28.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAnBdIgJgjIg7AAIgJAjIg4AAIA9i5IBCAAIA9C5gAAUARIgIgdIgEgOIgFgTIgDgRIgCAQIgFATIgDAPIgIAdIAmAAg");
	this.shape_22.setTransform(254.65,28.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AhOBdIAAi5IBBAAQAdAAAUAKQAVALALAUQALATAAAdQAAAfgMAWQgMAVgWALQgWALgdAAgAgcA0IAMAAQAVAAALgOQALgNAAgaQAAgRgFgLQgEgLgJgGQgJgFgNAAIgPAAg");
	this.shape_23.setTransform(236.025,28.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("Ag8BdIAAi5IAyAAIAACQIBHAAIAAApg");
	this.shape_24.setTransform(212.375,28.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAnBdIgJgjIg7AAIgJAjIg3AAIA8i5IBCAAIA+C5gAAUARIgIgdIgEgOIgFgTIgDgRIgCAQIgFATIgDAPIgIAdIAmAAg");
	this.shape_25.setTransform(194.9,28.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgYBdIAAi5IAxAAIAAC5g");
	this.shape_26.setTransform(180.925,28.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AAXBdIgnhEIgMAAIAABEIgzAAIAAi5IA9AAQAYAAASAGQAQAGAIANQAJAMAAASQAAALgEAKQgEAJgGAHQgIAGgJAGIA2BRgAgcgLIAJAAQAMAAAHgGQAHgFAAgNQAAgJgHgFQgFgFgNAAIgKAAg");
	this.shape_27.setTransform(168.8,28.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgnBZQgRgHgLgNQgLgNgGgRQgFgSAAgVQAAgcAKgWQAJgVAUgMQAUgLAegBQAgABAUALQAUAMAJAVQAJAWAAAcQAAAVgFASQgFARgLANQgLANgRAHQgRAHgYgBQgWABgRgHgAgUgvQgJAHgDAMQgEAMAAAQQAAARAEAMQADAMAJAHQAIAGAMAAQAOAAAIgGQAIgHAEgMQAEgMAAgRQAAgYgJgPQgIgOgVAAQgMgBgIAHg");
	this.shape_28.setTransform(148.475,28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AA8BdIAAhSIAAgRIABgTIABgPIgCAAIglCFIgvAAIgmiFIgBAAIABAOIABATIABATIAABRIgtAAIAAi5IBDAAIAmCDIABAAIAmiDIBDAAIAAC5g");
	this.shape_29.setTransform(125.625,28.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("Ag2BdIAAi5IBtAAIAAAoIg7AAIAAAeIA3AAIAAAnIg3AAIAAAjIA7AAIAAApg");
	this.shape_30.setTransform(106.325,28.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AA8BdIAAhSIAAgRIABgTIABgPIgCAAIglCFIgvAAIgmiFIgBAAIABAOIABATIABATIAABRIgtAAIAAi5IBDAAIAmCDIABAAIAmiDIBDAAIAAC5g");
	this.shape_31.setTransform(86.275,28.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,7.6,538.9,71.80000000000001);


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
	this.shape.setTransform(178.5216,92.0281,1.4536,1.4536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(84.6859,80.4956,1.4534,1.4534);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(123.1832,38.8211,1.4534,1.4534);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(123.2749,40.7288,1.4534,1.4534);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(123.55,35.2602,1.4534,1.4534);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(119.496,30.1186,1.4534,1.4534);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(116.8008,49.1043,1.4534,1.4534);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(117.8245,35.0813,1.4534,1.4534);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(99.4384,81.8262,1.4534,1.4534);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(175.6079,73.8449,1.4534,1.4534);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(171.2761,84.507,1.4534,1.4534);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(170.5443,81.4389,1.4534,1.4534);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(171.3865,79.2205,1.4534,1.4534);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(172.2157,77.1575,1.4534,1.4534);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(166.9873,90.3094,1.4534,1.4534);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(180.8677,46.161,1.4534,1.4534);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(146.5664,70.2155,1.4534,1.4534);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(152.9252,55.2087,1.4534,1.4534);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(110.3791,56.9394,1.4532,1.4532);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(122.7355,51.4172,1.4532,1.4532);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(95.9724,66.7818,1.4532,1.4532);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(102.1122,49.9685,1.4532,1.4532);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(89.2876,67.937,1.4532,1.4532);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(125.7993,22.114,1.4532,1.4532);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(109.9958,22.9708,1.4532,1.4532);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(118.4243,110.7199,1.4532,1.4532);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(126.9982,108.8187,1.4532,1.4532);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(123.45,109.7996,1.4532,1.4532);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(136.2987,102.8242,1.4532,1.4532);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(114.9029,110.4535,1.4532,1.4532);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(100.6953,103.6598,1.4532,1.4532);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(131.3215,106.9295,1.4532,1.4532);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(104.5826,107.3291,1.4532,1.4532);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(117.8431,109.9449,1.4532,1.4532);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(94.9188,103.3692,1.4532,1.4532);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(133.8799,69.6342,1.4534,1.4534);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(137.2943,64.7371,1.4536,1.4536);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(160.0378,44.5943,1.4534,1.4534);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(79.631,44.5943,1.4534,1.4534);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(79.6352,44.5986,1.4534,1.4534);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(119.9058,44.605,1.4536,1.4536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(267.8336,50.3953,1.4531,1.4531);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(330.1721,50.3953,1.4531,1.4531);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(246.1823,50.2137,1.4531,1.4531);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(388.0785,50.3953,1.4531,1.4531);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(367.2264,50.4316,1.4531,1.4531);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(348.6265,50.3953,1.4531,1.4531);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(309.7559,50.4316,1.4531,1.4531);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(290.3932,50.3953,1.4531,1.4531);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(216.2483,48.361,1.4531,1.4531);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(227.8368,53.4832,1.4531,1.4531);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(388.2964,18.3906,1.4531,1.4531);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(220.9709,18.3543,1.4531,1.4531);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(360.0698,18.1363,1.4531,1.4531);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(331.0802,18.6812,1.4531,1.4531);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(301.2915,18.3906,1.4531,1.4531);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(273.0648,18.3906,1.4531,1.4531);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(245.7464,18.3906,1.4531,1.4531);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(303.7745,79.9108,1.4534,1.4534);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(303.7928,67.89,1.4534,1.4534);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38,2.6,358.7,122.80000000000001);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,200,90), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,200,90), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,200,90), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATA5IgagsIgOAAIAAAsIgXAAIAAhxIAgAAQAPAAAKAEQAKADAGAIQAEAHAAAMQAAAIgCAGQgEAFgFAEQgEAEgGACIAiAygAgVgFIAIAAQANAAAEgEQAFgFAAgIQAAgHgFgEQgGgDgLAAIgIAAg");
	this.shape.setTransform(120.25,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAYIAmAAIAAAUIgmAAIAAAdIApAAIAAAUg");
	this.shape_1.setTransform(110.025,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAdIAmAAIAAATIgmAAIAAAtg");
	this.shape_2.setTransform(101.275,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAdIAmAAIAAATIgmAAIAAAtg");
	this.shape_3.setTransform(92.525,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA3QgLgFgGgHQgHgIgDgLQgDgLAAgNQAAgRAFgNQAGgNAMgHQAMgIASAAQATAAAMAIQAMAHAGANQAFANAAARQAAANgDALQgDALgHAIQgHAHgKAFQgKAEgOAAQgNAAgKgEgAgQghQgGAFgDAIQgDAJAAALQAAAMADAJQADAIAGAFQAHAFAJAAQAKAAAHgFQAGgFADgIQADgJAAgMQAAgRgHgKQgHgLgPAAQgJAAgHAFg");
	this.shape_4.setTransform(81.475,15.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA5IAAhdIgfAAIAAgUIBVAAIAAAUIgfAAIAABdg");
	this.shape_5.setTransform(66.325,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAYIAmAAIAAAUIgmAAIAAAdIApAAIAAAUg");
	this.shape_6.setTransform(57.475,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA0QgMgHgGgNQgGgNAAgTQAAgRAHgNQAHgNANgHQAOgIASAAQAJAAAJACIAQAFIgIAUIgMgFIgOgBQgLAAgHAEQgIAFgEAJQgEAJAAAKQAAAMADAIQADAJAHAFQAGAFAKAAIAIgBIAHgBIAAgYIgWAAIAAgTIAuAAIAAA6IgTAFQgKACgMAAQgQAAgMgHg");
	this.shape_7.setTransform(46.825,15.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CC14C").s().p("Ap1CWIAAkrITrAAIAAErg");
	this.shape_8.setTransform(83,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,0,126,30);


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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,1024,90), null);


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
	this.shape.graphics.f("#6CC14C").s().p("AgdHCIAAuDIA7AAIAAODg");
	this.shape.setTransform(3,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,90);


// stage content:
(lib.WBAY_214318_MM_1024x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhP/gHBMCf/AAAIAAODMif/AAAg");
	this.shape.setTransform(512,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(888,100,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202).to({_off:false},0).to({y:45,alpha:1},14).wait(54));

	// Layer_1
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(615.95,-29.5,1,1,0,0,0,130.4,11.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({_off:false},0).to({y:55.5,alpha:1},12,cjs.Ease.get(1)).wait(68));

	// text2
	this.instance_2 = new lib.text3("synched",0);
	this.instance_2.setTransform(576.5,106.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).to({y:118.6,alpha:1},14,cjs.Ease.get(1)).wait(62).to({startPosition:0},0).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(67));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(602.25,16.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:26.6,alpha:1},14,cjs.Ease.get(1)).wait(58).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(141));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(296.1,-35.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:43,alpha:1},14,cjs.Ease.get(1)).wait(228));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(280,5,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},14).wait(242));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(68));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(62).to({alpha:0},12,cjs.Ease.get(1)).wait(68));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(86).to({alpha:0},14,cjs.Ease.get(1)).wait(142));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(256));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511,-31.4,514,146.4);
// library properties:
lib.properties = {
	id: '54377EF7CB6A4D3EACDA97009AD97BD3',
	width: 1024,
	height: 90,
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
an.compositions['54377EF7CB6A4D3EACDA97009AD97BD3'] = {
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