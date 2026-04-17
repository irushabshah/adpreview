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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,200);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,200);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,200);// helper functions:

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
	this.shape.graphics.f("#12127D").s().p("AgQARQgHgGAAgLQAAgLAHgFQAIgFAJABQAJgBAHAFQAHAFgBALQABALgHAGQgHAEgJAAQgJAAgIgEg");
	this.shape.setTransform(116.4,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgcA7QgPgHgJgOQgIgOgBgXQABgWAHgPQAJgOAOgIQAOgHARAAQATAAAOAHQANAGAHANQAHANAAATIAAATIhNAAQABAKAGAGQAIAHAMAAQAMAAAKgDQAKgCAKgFIAAAgQgJAFgLACQgLACgQAAQgTAAgPgHgAAWgPQAAgFgDgFQgBgEgFgDQgEgDgGAAQgGAAgGAFQgFAFgBAKIAlAAIAAAAg");
	this.shape_1.setTransform(106,38.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgXA7QgOgHgJgOQgHgPgBgWQABgWAIgPQAJgPAPgHQAPgHATAAQAMAAAKADQAKACAJAFIgMAgIgQgFQgGgCgHAAQgHAAgFADQgEAEgDAHQgDAHAAAKQAAALADAGQADAHAEADQAFADAHAAQAKAAAJgDQAKgDAIgFIAAAjQgIAFgKADQgJADgOAAQgSAAgOgHg");
	this.shape_2.setTransform(92.95,38.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgVBZIAAh+IArAAIAAB+gAgQg1QgGgEAAgMQAAgLAGgEQAHgEAJAAQAJAAAHAEQAHAEAAALQAAAMgHAEQgHAEgJAAQgJAAgHgEg");
	this.shape_3.setTransform(82.875,35.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgVA/Igwh9IAuAAIAVBJIABAGIABAIIAAAAIABgIIABgGIAXhJIAtAAIgwB9g");
	this.shape_4.setTransform(72.125,38.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgsBBIAAh+IAhAAIAGAUIADAAQACgGAGgGQAFgFAHgDQAHgDAHAAIAHABIAGABIgEApIgFgBIgKAAIgJAAIgJAEQgEACgCAFQgCAGAAAHIAAA/g");
	this.shape_5.setTransform(60.375,38.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgcA7QgPgHgIgOQgJgOAAgXQAAgWAIgPQAHgOAPgIQANgHATAAQASAAANAHQAOAGAHANQAIANgBATIAAATIhNAAQABAKAGAGQAIAHAMAAQAMAAAKgDQAJgCALgFIAAAgQgJAFgLACQgLACgRAAQgRAAgQgHgAAWgPQAAgFgCgFQgCgEgFgDQgEgDgGAAQgGAAgGAFQgFAFgBAKIAlAAIAAAAg");
	this.shape_6.setTransform(47.25,38.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgbBBQgLgCgKgEIAAgjQALAFANADQANACAGAAQAHAAAEgBQADgCAAgDQAAgDgCgCIgHgFIgRgHQgLgEgHgFQgHgEgDgIQgEgHAAgKQAAgTAOgJQAPgKAWAAQANAAAMADQALADAMAFIgNAcIgTgHQgKgCgFAAQgFAAgCABQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGAFIARAGQALAFAHAFQAHAFADAGQAEAHAAAMQAAAMgFAJQgGAJgMAGQgMAFgRAAIgZgBg");
	this.shape_7.setTransform(34.25,38.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgVBXIAAitIArAAIAACtg");
	this.shape_8.setTransform(139.35,6.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgpA+QgIgFgFgJQgFgJAAgOQAAgVAOgIQAOgKAbgCIAUAAIAAgCQAAgJgEgDQgEgEgHAAQgHAAgJADIgTAHIgMgdQAKgGAOgDQAOgDARAAQAYAAANAMQAOAMAAAWIAABTIgfAAIgIgRIgBAAQgFAHgFAEQgGAEgGACQgIACgKAAQgLAAgKgEgAAHAHQgMABgEAEQgGADAAAHQABAHADADQAEADAFAAQAHAAAGgFQAFgFABgIIAAgKg");
	this.shape_9.setTransform(128.2,8.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AASBBIAAhFQAAgMgDgHQgEgGgIAAQgMAAgEAKQgEAKAAASIAAA4IgsAAIAAh+IAhAAIAGAQIACAAQAEgGAFgEQAGgEAGgCQAIgDAJAAQATAAANALQAMALAAAZIAABSg");
	this.shape_10.setTransform(113.675,8.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgZA+QgLgFgIgIQgJgIgEgNQgGgMABgQQgBgUAJgPQAHgOAOgIQAPgIASAAQATAAAOAIQAPAIAHAOQAJAPgBAUQAAAQgDAMQgFANgJAIQgHAIgMAFQgMAEgPAAQgNAAgMgEgAgOgYQgEAJAAAPQAAALACAHQACAIAFAEQAEADAFAAQAHAAAEgDQAEgEACgIQACgHAAgLQAAgKgCgHQgCgIgEgDQgEgEgHAAQgJAAgFAIg");
	this.shape_11.setTransform(98.6,8.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgVBZIAAh+IArAAIAAB+gAgQg1QgGgEAAgMQAAgLAGgEQAHgEAJAAQAJAAAHAEQAHAEAAALQAAAMgHAEQgHAEgJAAQgJAAgHgEg");
	this.shape_12.setTransform(87.625,6.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgKBKQgJgEgGgKQgFgJAAgSIAAgzIgPAAIAAgSIATgOIAMgaIAbAAIAAAZIAgAAIAAAhIggAAIAAAwQAAAHADADQAEADAFAAIALgBIAKgEIAAAgQgHAEgIACQgIABgMAAQgMAAgJgDg");
	this.shape_13.setTransform(78.525,7.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("Ag9BdIAAi2IAkAAIAHAQIABAAQADgFAFgEQAFgFAFgCQAGgCAKgBQAUABANARQALARABAfQAAAWgHANQgFAQgLAHQgLAHgNAAQgJAAgGgCQgGgCgDgDIgIgIIgBAAIABAKIAAAMIAAAvgAgJg2QgEADgCAGIgCAQIAAADQABAKABAHQACAHAEACQADAEAGAAQAGAAADgEQAEgBACgIQACgGAAgMQAAgQgFgHQgEgHgIAAQgFAAgEADg");
	this.shape_14.setTransform(66.2,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgcA7QgPgHgJgOQgIgOgBgXQABgWAHgPQAJgOAOgIQAOgHARAAQATAAAOAHQANAGAHANQAHANABATIAAATIhOAAQABAKAGAGQAIAHAMAAQAMAAAKgDQAKgCAKgFIAAAgQgJAFgLACQgLACgQAAQgSAAgQgHgAAWgPQgBgFgCgFQgCgEgEgDQgEgDgGAAQgHAAgFAFQgFAFgBAKIAlAAIAAAAg");
	this.shape_15.setTransform(51.45,8.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgYA7QgNgHgJgOQgIgPAAgWQAAgWAJgPQAJgPAPgHQAPgHATAAQALAAALADQALACAIAFIgMAgIgQgFQgGgCgHAAQgHAAgFADQgEAEgDAHQgDAHAAAKQAAALADAGQADAHAEADQAFADAHAAQAKAAAJgDQAKgDAIgFIAAAjQgIAFgKADQgJADgOAAQgSAAgPgHg");
	this.shape_16.setTransform(38.4,8.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAVBAIgVgnIgUAnIgzAAIAqhAIgng+IAyAAIASAjIATgjIAzAAIgoA+IAqBAg");
	this.shape_17.setTransform(24.8,8.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgwBSIAAijIBhAAIAAAjIg0AAIAAAaIAwAAIAAAjIgwAAIAAAfIA0AAIAAAkg");
	this.shape_18.setTransform(11.575,7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AgQARQgGgGgBgLQABgLAGgFQAIgFAIAAQAKAAAHAFQAHAFAAALQAAALgHAGQgHAEgKAAQgIAAgIgEg");
	this.shape_19.setTransform(126.5,-15.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgbBBQgLgCgLgEIAAgjQANAFAMADQAMACAHAAQAHAAADgBQAEgCAAgDQAAgDgCgCIgHgFIgRgHQgLgEgHgFQgHgEgDgIQgEgHAAgKQAAgTAPgJQAOgKAWAAQANAAAMADQAKADAMAFIgLAcIgUgHQgJgCgGAAQgFAAgCABQgDACAAACQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAHAFIAQAGQALAFAHAFQAHAFAEAGQADAHAAAMQAAAMgFAJQgFAJgMAGQgMAFgTAAIgYgBg");
	this.shape_20.setTransform(117.3,-20.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgKBKQgJgEgGgKQgFgJAAgSIAAgzIgPAAIAAgSIATgOIAMgaIAbAAIAAAZIAgAAIAAAhIggAAIAAAwQAAAHADADQAEADAFAAIALgBIAKgEIAAAgQgHAEgIACQgIABgMAAQgMAAgJgDg");
	this.shape_21.setTransform(106.025,-21.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AgXA7QgOgHgJgOQgHgPgBgWQABgWAIgPQAJgPAPgHQAQgHASAAQAMAAAKADQALACAIAFIgMAgIgQgFQgGgCgHAAQgHAAgFADQgEAEgDAHQgDAHAAAKQAAALADAGQADAHAEADQAFADAHAAQAKAAAJgDQAKgDAIgFIAAAjQgIAFgKADQgJADgOAAQgSAAgOgHg");
	this.shape_22.setTransform(94.85,-20.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgnA8QgLgFgFgKQgGgKAAgRIAAhRIAsAAIAABEQAAAMADAHQAEAGAIAAQAIAAAEgEQAFgFABgJQACgIAAgMIAAg3IAsAAIAAB+IghAAIgGgRIgCAAQgEAHgGAEQgGAEgHACQgHACgHgBQgNAAgKgEg");
	this.shape_23.setTransform(80.75,-20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgvBIQgOgRAAggQAAggAOgRQANgQAVAAQAIAAAFACQAHADAEAEIAHAJIABAAIgBgNIgBgQIAAgiIAtAAIAACtIgiAAIgJgQIgCAAQgDAFgEAEQgFAFgFACQgHACgJAAQgTAAgMgQgAgLAAQgFAHAAAQQAAAQAGAIQAFAHAGAAQALAAAFgHQAEgHAAgNIAAgEQAAgPgEgIQgEgHgMAAQgGAAgGAHg");
	this.shape_24.setTransform(65.4,-22.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AgYA+QgMgFgIgIQgJgIgFgNQgEgMAAgQQAAgUAHgPQAIgOAPgIQANgIAUAAQASAAAOAIQAOAIAJAOQAHAPABAUQAAAQgFAMQgEANgIAIQgJAIgLAFQgMAEgPAAQgNAAgLgEgAgOgYQgEAJAAAPQAAALACAHQACAIAEAEQAFADAGAAQAGAAAEgDQAFgEABgIQACgHAAgLQAAgKgCgHQgBgIgFgDQgEgEgHAAQgJAAgFAIg");
	this.shape_25.setTransform(50.95,-20.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgsBBIAAh+IAhAAIAGAUIADAAQACgGAGgGQAFgFAHgDQAHgDAHAAIAHABIAGABIgEApIgFgBIgKAAIgJAAIgJAEQgEACgCAFQgCAGAAAHIAAA/g");
	this.shape_26.setTransform(38.925,-20.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("Ag9BdIAAi2IAkAAIAHAQIABAAQADgFAFgEQAEgFAGgCQAGgCAKgBQAVABAMARQAMAQAAAgQAAAWgHANQgFAPgLAIQgLAHgNAAQgJAAgGgCQgGgCgDgDIgIgIIgBAAIABAKIAAAMIAAAvgAgJg2QgEADgCAGIgCAQIAAADQABAKABAHQACAHAEACQADAEAGAAQAFAAAEgEQAEgBACgIQACgGAAgMQAAgQgEgHQgFgHgIAAQgGAAgDADg");
	this.shape_27.setTransform(25.8,-17.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgsBBIAAh+IAhAAIAGAUIADAAQACgGAGgGQAFgFAHgDQAHgDAHAAIAHABIAGABIgEApIgFgBIgKAAIgJAAIgJAEQgEACgCAFQgCAGAAAHIAAA/g");
	this.shape_28.setTransform(119.875,-49.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AgYA+QgMgFgIgIQgJgIgFgNQgEgMAAgQQgBgUAJgPQAHgOAOgIQAOgIAUAAQASAAAOAIQAOAIAJAOQAIAPAAAUQAAAQgFAMQgEANgIAIQgJAIgLAFQgNAEgOAAQgNAAgLgEgAgOgYQgEAJAAAPQAAALACAHQACAIAFAEQADADAHAAQAGAAAEgDQAEgEACgIQACgHAAgLQAAgKgCgHQgCgIgEgDQgEgEgHAAQgJAAgFAIg");
	this.shape_29.setTransform(106.5,-49.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgVBZIAAh+IArAAIAAB+gAgQg1QgGgEAAgMQAAgLAGgEQAHgEAJAAQAJAAAHAEQAHAEAAALQAAAMgHAEQgHAEgJAAQgJAAgHgEg");
	this.shape_30.setTransform(95.525,-52.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AgsBBIAAh+IAhAAIAGAUIADAAQACgGAGgGQAFgFAHgDQAHgDAHAAIAHABIAGABIgEApIgFgBIgKAAIgJAAIgJAEQgEACgCAFQgCAGAAAHIAAA/g");
	this.shape_31.setTransform(87.025,-49.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20000").s().p("AgcA7QgPgHgIgOQgKgOABgXQgBgWAJgPQAHgOAOgIQAOgHATAAQASAAANAHQAOAGAHANQAIANgBATIAAATIhNAAQAAAKAIAGQAGAHANAAQAMAAAKgDQAJgCALgFIAAAgQgJAFgLACQgLACgRAAQgRAAgQgHgAAWgPQgBgFgBgFQgCgEgFgDQgEgDgGAAQgHAAgFAFQgFAFgBAKIAlAAIAAAAg");
	this.shape_32.setTransform(73.9,-49.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20000").s().p("Ag8BcIAAi1IAkAAIAGAQIACAAQADgFAEgEQAFgEAFgDQAHgDAJABQAUAAAMARQANAQAAAgQgBAWgFANQgHAQgKAHQgKAHgOAAQgJAAgGgCQgFgCgEgDIgHgHIgCAAIABAJIABAMIAAAugAgJg2QgEADgCAGIgBAQIAAADQgBAKACAHQABAHAFACQAEAEAFAAQAGAAAEgEQADgBACgIQACgGAAgMQAAgQgFgHQgEgHgIAAQgGAAgDADg");
	this.shape_33.setTransform(59.7,-47.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20000").s().p("AgnA8QgKgFgGgKQgGgKAAgRIAAhRIAsAAIAABEQAAAMAEAGQADAHAIAAQAIAAAEgEQAEgFACgJQACgIAAgMIAAg3IAsAAIAAB+IghAAIgFgQIgDAAQgEAGgGAEQgGAEgGACIgQABQgMAAgKgEg");
	this.shape_34.setTransform(44.35,-49.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20000").s().p("AgZBTIgQgDIgQgGIAAgnQAOAGANAEQAOADALAAQAGAAAEgBQAEgCACgCQACgDAAgEQAAgEgCgDQgEgDgGgDIgQgIIgRgJQgHgFgGgEQgEgGgDgIQgEgIAAgKQABgQAHgLQAJgLAOgFQAOgFAQAAQAQAAANADQANAEALAEIgOAjQgLgFgKgDQgKgDgIAAQgFAAgEACQgEABgCACQgBADAAADQAAAEADADQADADAGADIATAJQAMAGAJAGQAIAFAEAJQAEAJABAMQgBAOgGAMQgHAMgOAHQgPAHgUAAg");
	this.shape_35.setTransform(30.15,-51.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-70,148,123.4);


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
	this.shape.graphics.f("#12127D").s().p("AgOBEQgFgEAAgKQAAgKAFgFQAHgEAHAAQAIAAAHAEQAFAFAAAKQAAAKgFAEQgHAFgIAAQgHAAgHgFgAgPAUIgFhcIApAAIgFBcg");
	this.shape.setTransform(103.45,9.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgJAAgEAJQgDAIgBAQIAAAwIgmAAIAAhtIAdAAIAFAOIACAAQADgFAFgEQAFgDAGgCQAFgCAJAAQARAAALAJQAKAKAAAVIAABHg");
	this.shape_1.setTransform(93.9,10.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AARA3IgLgwIgCgIIgBgJIgCgJIgBgGIAAAAIgBAGIgBAJIgCAKIgCAIIgLAvIgoAAIgfhtIAmAAIAJAqIACALIACANIABALIAAAAIABgJIACgKIACgIIABgGIAKgsIAqAAIAJAtIACAJIACAMIABALIABAAIABgMIACgMIACgLIAKgqIAkAAIgeBtg");
	this.shape_2.setTransform(78.1,11.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_3.setTransform(62.675,11.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("Ag7BIIAAiPIAxAAQAWAAAQAJQAQAHAJAQQAHAPAAAWQAAAYgJAQQgJARgQAJQgSAIgWAAgAgVAoIAIAAQARAAAIgLQAJgKAAgTQgBgNgDgJQgDgIgIgFQgGgEgKAAIgLAAg");
	this.shape_4.setTransform(49.25,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgrBPIgHgBIAAgeIAFAAIAHABQAGAAAEgDQAEgCACgEIAFgJIABgBIgshsIAoAAIATA/IABAEIAAAEIAAAEIABAAIAAgHIACgFIATg/IAnAAIgsB0QgFAOgGAJQgGAJgKAFQgKAEgOAAg");
	this.shape_5.setTransform(120.1,-11.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_6.setTransform(107.825,-14.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgJAAgEAJQgEAIAAAQIAAAwIgmAAIAAhtIAdAAIAFAOIACAAQADgFAFgEQAFgDAFgCQAHgCAIAAQAQAAAMAJQAKAKAAAVIAABHg");
	this.shape_7.setTransform(95,-14.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_8.setTransform(81.975,-14.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AAuBHIAAg+IAAgNIABgPIAAgLIgBAAIgcBlIgkAAIgdhlIgBAAIABAKIAAAQIABANIAAA+IgiAAIAAiOIAzAAIAdBlIABAAIAdhlIAzAAIAACOg");
	this.shape_9.setTransform(65.975,-15.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_10.setTransform(44.825,-14.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AARBHIgzhjIAAAAIAAALIABANIAAALIAABAIgiAAIAAiOIAzAAIAyBjIABAAIgBgLIAAgMIgBgKIAAhCIAjAAIAACOg");
	this.shape_11.setTransform(30.15,-15.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgVAdIAEgUIADgTIACgRIAhAAIABACIgEARIgGATIgHASg");
	this.shape_12.setTransform(132.425,-34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgIBAQgJgDgFgJQgEgIAAgPIAAgsIgOAAIAAgQIARgMIAKgYIAYAAIAAAXIAbAAIAAAdIgbAAIAAApQAAAGAEACQACAEAFAAIAJgCIAJgDIAAAcIgNAFQgHABgKABQgLgBgHgDg");
	this.shape_13.setTransform(125.05,-40.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgXA4QgKgBgJgEIAAgfQAKAFALACQALACAGAAIAIgBQADgBABgDQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgFgEIgPgGQgJgEgHgFQgGgDgDgGQgCgHAAgJQAAgQAMgIQANgIATAAQALAAAJACQALACAJAFIgKAZQgIgEgJgCQgIgDgFAAQgEAAgCACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAGADIAOAGQAKAEAGAEQAGAFADAFQADAHABAJQgBALgFAIQgEAIgKAFQgKAEgRAAQgLAAgJgBg");
	this.shape_14.setTransform(115.4,-39.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_15.setTransform(104.025,-39.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgmA4IAAhtIAcAAIAGARIACAAQACgFAFgFQAFgEAGgDQAFgCAHAAIAGAAIAFABIgDAkIgFgBIgIAAIgIAAIgHADQgEACgDAFQgBAEAAAHIAAA2g");
	this.shape_16.setTransform(93.725,-39.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_17.setTransform(82.325,-39.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgJBAQgIgDgEgJQgFgIAAgPIAAgsIgNAAIAAgQIARgMIAKgYIAYAAIAAAXIAbAAIAAAdIgbAAIAAApQAAAGACACQADAEAFAAIAKgCIAIgDIAAAcIgNAFQgHABgKABQgKgBgJgDg");
	this.shape_18.setTransform(71.55,-40.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgJAAgEAJQgEAIAAAQIAAAwIgmAAIAAhtIAdAAIAFAOIABAAQAEgFAFgEQAFgDAFgCQAHgCAIAAQAQAAAMAJQAKAKAAAVIAABHg");
	this.shape_19.setTransform(60.35,-39.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgSBIIAAiOIAlAAIAACOg");
	this.shape_20.setTransform(50.175,-41.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_21.setTransform(35.225,-39.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AASBIIg0hkIAAAAIAAALIABANIAAALIAABBIgiAAIAAiOIAzAAIAzBiIAAAAIAAgLIgBgNIAAgKIAAhAIAiAAIAACOg");
	this.shape_22.setTransform(20.55,-41.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgVAcIAEgTIADgTIACgSIAhAAIABACIgEARIgGAUIgHARg");
	this.shape_23.setTransform(142.125,-59.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgYA4QgJgBgKgEIAAgfQALAFALACQALACAGAAIAJgBQADgBAAgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgGgEIgPgGQgKgEgFgFQgHgDgCgGQgEgHAAgJQAAgQANgIQAMgIAUAAQALAAAKACQAJACALAFIgLAZQgIgEgIgCQgJgDgFAAQgDAAgCACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAOAGQAKAEAGAEQAGAFAEAFQADAHAAAJQAAALgGAIQgEAIgKAFQgKAEgQAAQgMAAgKgBg");
	this.shape_24.setTransform(134.25,-64.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgJBAQgIgEgEgHQgFgJAAgPIAAgtIgNAAIAAgPIARgMIAKgYIAYAAIAAAXIAbAAIAAAcIgbAAIAAArQAAAFADADQACACAFAAIAKgBIAJgCIAAAcIgOAEQgHABgLAAQgJAAgJgDg");
	this.shape_25.setTransform(124.45,-65.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgJAAgEAJQgDAIgBAQIAAAwIgmAAIAAhtIAdAAIAFAOIACAAQADgFAFgEQAFgDAGgCQAFgCAJAAQARAAALAJQAKAKAAAVIAABHg");
	this.shape_26.setTransform(113.25,-64.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_27.setTransform(100.375,-64.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AAxA4IAAg7QAAgNgEgEQgCgFgIAAQgJAAgDAIQgEAIAAAOIAAAzIglAAIAAg7QAAgIgBgFQgCgFgDgCQgDgCgEAAQgGAAgEAEQgEAEgBAHQgBAIAAAKIAAAwIgnAAIAAhtIAdAAIAFANIABAAQAEgEAEgEQAFgDAGgCQAHgCAIAAQAMAAAHAEQAIAEAFAHIABAAQAGgHAHgEQAJgEAKAAQATAAAKAJQAKAKAAAVIAABHg");
	this.shape_28.setTransform(84.2,-64.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgrBPIgHgBIAAgeIAFAAIAHABQAGAAAEgDQAEgCACgEIAFgJIABgBIgshsIAoAAIATA/IABAEIAAAEIAAAEIABAAIABgHIABgFIATg/IAnAAIgsB0QgFAOgHAJQgFAJgKAFQgKAEgOAAg");
	this.shape_29.setTransform(68.15,-62.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgjA1QgHgEgFgIQgEgHAAgNQAAgRAMgIQANgIAWgCIASAAIAAgCQAAgHgDgDQgEgDgGAAQgGAAgIACIgQAGIgLgZQAJgFANgDQALgCAPAAQAUAAAMAKQANAKAAAUIAABHIgbAAIgHgOIgBAAIgKAJQgFAEgFACQgHABgIAAQgKAAgIgEgAAFAGQgJABgEADQgEADgBAGQAAAGAEADQADACAEAAQAGAAAGgEQAEgFAAgHIAAgIg");
	this.shape_30.setTransform(55.55,-64.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgzBHIAAiOIAyAAQAaAAANANQAOAMAAAVQAAAKgDAJQgDAIgGAHQgGAHgLAEQgKAEgOAAIgLAAIAAAvgAgMgHIAHAAQAFAAAEgBQAEgBADgEQACgFAAgGQAAgGgEgFQgEgEgHAAIgKAAg");
	this.shape_31.setTransform(43.725,-66.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_32.setTransform(25.525,-64.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AASBHIg0hjIgBAAIABALIABANIAAALIAABAIgiAAIAAiOIAyAAIA0BjIAAAAIAAgLIgBgMIAAgKIAAhCIAiAAIAACOg");
	this.shape_33.setTransform(10.85,-66.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgNA1QgGgFAAgJQAAgLAGgEQAGgEAHAAQAJAAAGAEQAFAEAAALQAAAJgFAFQgGAEgJAAQgHAAgGgEgAgNgXQgGgFAAgKQAAgKAGgEQAGgEAHAAQAJAAAGAEQAFAEAAAKQAAAKgFAFQgGAEgJAAQgHAAgGgEg");
	this.shape_34.setTransform(127.325,-89.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgXA4QgKgBgJgEIAAgfQAKAFALACQAKACAHAAIAIgBQADgBAAgDQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgGgEIgOgGQgJgEgHgFQgFgDgEgGQgCgHAAgJQAAgQAMgIQANgIATAAQALAAAJACQALACAJAFIgKAZQgIgEgJgCQgIgDgFAAQgEAAgCACQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAOAGQAJAEAHAEQAGAFADAFQADAHAAAJQAAALgEAIQgFAIgKAFQgLAEgQAAQgLAAgJgBg");
	this.shape_35.setTransform(119.35,-89.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAQBMIAAg9QAAgKgEgFQgCgFgIgBQgFAAgEAEQgEAEgCAHQgBAIgBALIAAAwIgmAAIAAiXIAmAAIAAAWIAAAUIgBANIABAAQAEgGAFgDQAEgEAFgBQAGgBAGAAQALAAAJADQAIAFAGAJQAFAJAAANIAABIg");
	this.shape_36.setTransform(107.5,-92.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AgJBAQgIgDgEgJQgFgIAAgPIAAgsIgNAAIAAgQIARgMIAKgXIAYAAIAAAWIAbAAIAAAdIgbAAIAAApQAAAGADACQACADAFABIAKgCIAJgDIAAAcIgOAFQgHABgLABQgJgBgJgDg");
	this.shape_37.setTransform(96.2,-91);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AAQA4IAAg7QAAgLgDgGQgDgFgIAAQgJAAgEAJQgDAIgBAQIAAAwIgmAAIAAhtIAdAAIAFAOIACAAQADgFAFgEQAFgDAFgCQAHgCAIAAQAQAAAMAJQAKAKAAAVIAABHg");
	this.shape_38.setTransform(85,-90.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_39.setTransform(71.975,-89.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AAuBIIAAg/IAAgOIABgOIAAgLIgBAAIgcBmIgkAAIgdhnIgBAAIABALIAAAPIABAPIAAA+IgiAAIAAiOIAzAAIAdBkIABAAIAdhkIAzAAIAACOg");
	this.shape_40.setTransform(55.975,-91.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AACBIIAAgcIg4AAIAAgdIA6hVIAkAAIAABVIAPAAIAAAdIgPAAIAAAcgAgBgOIgEAHIgQAWIAXAAIAAgPIAAgGIAAgHIAAgGIAAgDIgBAAg");
	this.shape_41.setTransform(35.325,-91.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#12127D").s().p("AgyBJIAAgaIAjgjIAPgRQAGgHADgFQACgFAAgFQAAgGgDgDQgEgDgFAAQgHAAgHAEIgPAMIgWgaIAOgKQAHgFAKgEQAKgDANAAQAOgBALAGQALAFAGAJQAGAIAAAMQAAAMgFAKQgEAKgJAJIgXAVIgJAKIAAAAIA1AAIAAAhg");
	this.shape_42.setTransform(23.45,-91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-107.8,148,132.2);


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
	this.shape.graphics.f("#B20000").s().p("AgOBEQgFgEAAgKQAAgKAFgFQAHgEAHAAQAJAAAFAEQAGAFAAAKQAAAKgGAEQgFAFgJAAQgHAAgHgFgAgPAUIgFhcIApAAIgFBcg");
	this.shape.setTransform(97.5,103.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgTBIIAAg3IguhXIAqAAIAXA1IAZg1IAqAAIgwBVIAAA5g");
	this.shape_1.setTransform(88,103.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAeBIIgHgbIgtAAIgHAbIgqAAIAuiPIAzAAIAvCPgAAQANIgGgWIgDgLIgEgPIgDgMIgBAMIgEAOIgCAMIgHAWIAeAAg");
	this.shape_2.setTransform(74.1,103.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAuBIIAAg/IAAgOIABgOIAAgLIgBAAIgcBmIgkAAIgdhnIgBAAIABALIAAAPIABAPIAAA+IgiAAIAAiOIAzAAIAdBkIABAAIAdhkIAzAAIAACOg");
	this.shape_3.setTransform(57.225,103.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgjAAIAABtg");
	this.shape_4.setTransform(140.35,79.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgtA6QgPgQAAgbIAAhXIAnAAIAABUQAAAPAFAGQAGAIAKAAQAIAAAFgDQAFgEACgGQACgHAAgJIAAhUIAnAAIAABWQAAARgHAOQgHANgNAIQgOAGgUAAQgdAAgQgOg");
	this.shape_5.setTransform(126.925,79.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgeBFQgNgGgJgKQgIgKgEgNQgFgOABgQQgBgVAIgRQAHgQAQgKQAQgJAWAAQAZAAAPAJQAQAKAGAQQAIARAAAVQAAAQgEAOQgFANgIAKQgIAKgNAGQgOAEgSAAQgRAAgNgEgAgQgkQgGAFgDAKQgCAJgBAMQABANACAJQADAKAGAEQAHAGAJAAQALAAAGgGQAGgEADgKQADgJAAgNQAAgTgGgKQgHgMgQAAQgJAAgHAFg");
	this.shape_6.setTransform(111.4,79.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AAWBHIAAg5IgsAAIAAA5IgmAAIAAiOIAmAAIAAA1IAsAAIAAg1IAnAAIAACOg");
	this.shape_7.setTransform(95.825,79.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgcBCQgQgIgIgRQgJgQAAgZQAAgVAJgRQAIgQARgKQARgJAXAAQANABAMACIAVAGIgMAfQgIgEgIgBQgIgCgKAAQgNgBgGAGQgIAGgEAKQgDAJAAAKQAAAOAEAJQADAJAIAFQAGAEAKABIAJgBIAHgBIAAgXIgZAAIAAgcIA9AAIAABMQgLADgOADQgOACgQAAQgUAAgPgHg");
	this.shape_8.setTransform(80.575,79.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgtA6QgPgQAAgbIAAhXIAnAAIAABUQAAAPAFAGQAGAIAKAAQAIAAAFgDQAFgEACgGQACgHAAgJIAAhUIAnAAIAABWQAAARgHAOQgHANgNAIQgOAGgUAAQgdAAgQgOg");
	this.shape_9.setTransform(65.825,79.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgeBFQgNgGgIgKQgJgKgEgNQgFgOABgQQgBgVAIgRQAHgQAQgKQAQgJAWAAQAYAAAQAJQAPAKAHAQQAIARgBAVQAAAQgDAOQgFANgIAKQgIAKgNAGQgOAEgSAAQgRAAgNgEgAgPgkQgHAFgDAKQgCAJgBAMQABANACAJQADAKAHAEQAGAGAJAAQAKAAAHgGQAHgEACgKQADgJAAgNQAAgTgGgKQgHgMgQAAQgJAAgGAFg");
	this.shape_10.setTransform(50.3,79.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQATABANAFQANAEAGAJQAHAKAAAOQAAAIgDAIQgDAHgGAFQgFAFgIAEIAqA+gAgWgJIAHAAQAJAAAGgDQAFgFAAgKQAAgGgFgEQgEgEgKAAIgIAAg");
	this.shape_11.setTransform(36.525,79.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AAWBHIAAg5IgsAAIAAA5IgmAAIAAiOIAmAAIAAA1IAsAAIAAg1IAnAAIAACOg");
	this.shape_12.setTransform(21.225,79.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgiAAIAABtg");
	this.shape_13.setTransform(7.65,79.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgXBJIgNgDIgNgFIAAgjQALAGAMADQAMADAJAAQAGAAADgCQAEAAACgDQABgCAAgEQAAgDgCgDIgIgFIgPgIIgOgHQgGgEgFgEQgEgFgDgHQgCgGAAgKQAAgOAGgIQAIgKALgFQAMgEAPAAQAOgBAMAEQALADAJAEIgMAdIgSgGQgJgCgIgBQgDABgEABQgDABgBACQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQAAAEADADQACACAGADIAQAIQALAFAHAFQAHAFAEAIQAEAHAAALQAAAMgGAKQgGAKgMAHQgNAGgSABg");
	this.shape_14.setTransform(113.25,55.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgcBBQgQgHgIgRQgJgQAAgZQAAgWAJgQQAIgRARgIQARgJAXAAQANAAAMACIAVAHIgMAeQgIgEgIgCQgIgCgKAAQgNABgGAFQgIAGgEAKQgDAJAAALQAAANAEAJQADAJAIAFQAGAFAKgBIAJAAIAHgBIAAgWIgZAAIAAgdIA9AAIAABMQgLAEgOACQgOACgQABQgUAAgPgJg");
	this.shape_15.setTransform(99.775,55.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AASBIIg0hkIAAAAIAAALIABANIAAALIAABBIgiAAIAAiOIAzAAIAyBiIABAAIgBgLIAAgNIgBgKIAAhAIAjAAIAACOg");
	this.shape_16.setTransform(84.25,55.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgSBIIAAiOIAlAAIAACOg");
	this.shape_17.setTransform(72.425,55.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgWBIIgviOIAsAAIATBHIADAKIADAOIAAAKIABgKIADgNIADgKIAThIIAsAAIgwCOg");
	this.shape_18.setTransform(62.05,55.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAfBIIgHgbIguAAIgHAbIgrAAIAviPIAzAAIAuCPgAAQANIgHgWIgCgLIgEgPIgDgMIgBAMIgDAOIgEAMIgGAWIAeAAg");
	this.shape_19.setTransform(47.85,55.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgWBJIgOgDIgNgFIAAgjQALAGAMADQAMADAKAAQAEAAAEgCQAEAAABgDQACgCAAgEQAAgDgDgDIgIgFIgNgIIgPgHQgGgEgFgEQgEgFgDgHQgCgGAAgKQAAgOAHgIQAGgKANgFQAMgEAPAAQANgBAMAEQALADAJAEIgMAdIgSgGQgJgCgHgBQgFABgCABQgEABgCACQAAAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQAAAEACADQADACAFADIARAIQALAFAHAFQAHAFAEAIQAEAHAAALQAAAMgGAKQgGAKgMAHQgMAGgTABg");
	this.shape_20.setTransform(35,55.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgSBHIAAg2IgwhYIAqAAIAYA1IAZg1IApAAIgvBWIAAA4g");
	this.shape_21.setTransform(89.4,30.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAeBIIgGgbIguAAIgHAbIgrAAIAviPIAzAAIAuCPgAAQANIgHgWIgCgLIgEgPIgDgMIgBAMIgEAOIgDAMIgGAWIAeAAg");
	this.shape_22.setTransform(73.85,30.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("Ag8BHIAAiOIAyAAQAWABAQAHQAQAJAJAPQAIAPAAAWQAAAYgJARQgKAQgQAIQgSAIgVAAgAgVAoIAJAAQAQAAAJgKQAHgKAAgVQAAgNgDgIQgEgIgGgFQgHgEgKAAIgLAAg");
	this.shape_23.setTransform(59.55,30.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AguBIIAAiPIAnAAIAABvIA2AAIAAAgg");
	this.shape_24.setTransform(124.625,6.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAfBIIgIgbIgtAAIgHAbIgrAAIAviPIAyAAIAwCPgAAPANIgFgWIgEgLIgDgPIgDgMIgCAMIgCAOIgDAMIgHAWIAdAAg");
	this.shape_25.setTransform(111.15,6.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgSBIIAAiPIAlAAIAACPg");
	this.shape_26.setTransform(100.425,6.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiPIAuAAQATAAANAGQANAEAGAJQAHAKAAAOQAAAJgDAGQgDAIgGAFQgFAFgIAFIAqA+gAgWgIIAHAAQAJAAAGgFQAFgDAAgKQAAgIgFgDQgEgEgKAAIgIAAg");
	this.shape_27.setTransform(91.125,6.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgeBFQgNgGgIgJQgJgLgEgNQgFgOABgQQgBgWAIgQQAHgRAQgIQAQgKAWABQAYgBAQAKQAPAIAHARQAIARgBAVQAAARgDANQgFAOgIAJQgIAKgNAGQgOAEgSAAQgRAAgNgEgAgPgkQgHAGgDAIQgCAKgBAMQABANACAJQADAKAHAFQAGAEAJABQAKgBAHgEQAHgFACgKQADgJAAgNQAAgTgGgKQgHgMgQAAQgJAAgGAFg");
	this.shape_28.setTransform(75.5,6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAuBIIAAg/IAAgOIABgOIAAgLIgBAAIgcBmIgkAAIgdhnIgBAAIABAMIAAAOIABAPIAAA+IgiAAIAAiPIAzAAIAdBlIABAAIAdhlIAzAAIAACPg");
	this.shape_29.setTransform(57.925,6.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgpBIIAAiPIBTAAIAAAfIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_30.setTransform(43.075,6.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAuBIIAAg/IAAgOIABgOIAAgLIgBAAIgcBmIgkAAIgdhnIgBAAIABAMIAAAOIABAPIAAA+IgiAAIAAiPIAzAAIAdBlIABAAIAdhlIAzAAIAACPg");
	this.shape_31.setTransform(27.675,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-9.5,160,128.2);


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
	this.shape.setTransform(114.525,113.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(49.975,105.3979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(76.4619,76.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(76.525,78.0375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(76.7143,74.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(73.925,70.7375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(72.0706,83.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(72.775,74.1519);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(60.125,106.3134);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(112.5382,100.8263);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(109.5577,108.1625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(109.0542,106.0514);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(109.6337,104.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(110.2042,103.1056);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(106.6,112.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(116.15,81.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(92.55,98.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(96.925,88);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(67.6637,89.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(76.1667,85.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(57.75,95.9729);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(61.975,84.4031);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(53.15,96.7679);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(78.275,65.2354);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(67.4,65.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(73.2,126.2083);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(79.1,124.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(76.6583,125.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(85.5,120.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(70.7768,126.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(61,121.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(82.075,123.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(63.675,123.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(72.8,125.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(57.025,121.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(83.8214,97.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(86.1625,94.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(101.825,80.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(46.5,80.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(46.5,80.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(74.2,80.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(176.025,84.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(218.925,84.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(161.125,84.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(258.775,84.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(244.425,84.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(231.625,84.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(204.875,84.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(191.55,84.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(140.525,83.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(148.5,86.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(258.925,62.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(143.775,62.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(239.5,62.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(219.55,62.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(199.05,62.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(179.625,62.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(160.825,62.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(200.725,105);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(200.725,96.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,51.8,246.70000000000002,84.50000000000001);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,160,200), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,160,200), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,160,200), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATA5IgbgsIgMAAIAAAsIgZAAIAAhxIAhAAQAPAAALAEQAKADAFAIQAEAHAAAMQAAAIgCAGQgDAGgFADQgFADgGADIAhAygAgUgGIAIAAQALAAAFgDQAFgFAAgIQAAgHgFgEQgGgEgLABIgHAAg");
	this.shape.setTransform(100.25,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAYIAmAAIAAAUIgmAAIAAAdIApAAIAAAUg");
	this.shape_1.setTransform(90.025,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAdIAmAAIAAATIgmAAIAAAtg");
	this.shape_2.setTransform(81.275,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAdIAmAAIAAATIgmAAIAAAtg");
	this.shape_3.setTransform(72.525,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA3QgLgFgGgHQgHgIgDgLQgDgLAAgNQAAgRAFgNQAGgNAMgHQAMgIASAAQATAAAMAIQAMAHAGANQAFANAAARQAAANgDALQgDALgHAIQgHAHgKAFQgKAEgOAAQgNAAgKgEgAgQghQgGAFgDAIQgDAJAAALQAAAMADAJQADAIAGAFQAHAFAJAAQAKAAAHgFQAGgFADgIQADgJAAgMQAAgRgHgKQgHgLgPAAQgJAAgHAFg");
	this.shape_4.setTransform(61.475,25.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA5IAAhdIgfAAIAAgUIBVAAIAAAUIgfAAIAABdg");
	this.shape_5.setTransform(46.325,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAYIAmAAIAAAUIgmAAIAAAdIApAAIAAAUg");
	this.shape_6.setTransform(37.475,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA0QgMgHgGgNQgGgNAAgTQAAgRAHgNQAHgNANgHQAOgIASAAQAJAAAJACIAQAFIgIAUIgMgFIgOgBQgLAAgHAEQgIAFgEAJQgEAJAAAKQAAAMADAIQADAJAHAFQAGAFAKAAIAIgBIAHgBIAAgYIgWAAIAAgTIAuAAIAAA6IgTAFQgKACgMAAQgQAAgMgHg");
	this.shape_7.setTransform(26.825,25.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CC14C").s().p("Ap1CWIAAkrITrAAIAAErg");
	this.shape_8.setTransform(63,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,126,30);


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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,160,600), null);


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
	this.shape.graphics.f("#6CC14C").s().p("AsfAyIAAhjIY/AAIAABjg");
	this.shape.setTransform(80,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,10);


// stage content:
(lib.WBAY_214318_MM_160x600_V3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(80,508,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({y:473,alpha:1},14).wait(134).to({startPosition:0},0).to({regX:63.1,regY:15.1,scaleX:1.0404,scaleY:1.0404,x:80.05,y:473.05},7,cjs.Ease.get(1)).to({regX:63,regY:15,scaleX:1,scaleY:1,x:80,y:473},7,cjs.Ease.get(1)).to({regX:63.1,regY:15.1,scaleX:1.0404,scaleY:1.0404,x:80.05,y:473.05},7,cjs.Ease.get(1)).to({regX:63,regY:15,scaleX:1,scaleY:1,x:80,y:473},7,cjs.Ease.get(1)).wait(38));

	// text4
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(80,406.9,1,1,0,0,0,74,37.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({_off:false},0).to({y:436.9,alpha:1},14,cjs.Ease.get(1)).wait(66));

	// text2
	this.instance_2 = new lib.text3("synched",0);
	this.instance_2.setTransform(80,404.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({y:444.6,alpha:1},14,cjs.Ease.get(1)).wait(61).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(71));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(80,324.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:344.6,alpha:1},14,cjs.Ease.get(1)).wait(59).to({startPosition:0},0).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(148));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(80.1,238.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:248.5,alpha:1},14,cjs.Ease.get(1)).wait(228));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(80,203,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},14).wait(242));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(66));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(61).to({alpha:0},14,cjs.Ease.get(1)).wait(66));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(87).to({alpha:0},14,cjs.Ease.get(1)).wait(141));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(256));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79,299,82,302);
// library properties:
lib.properties = {
	id: '60A317C8081C4101BFC31B87128024F2',
	width: 160,
	height: 600,
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
an.compositions['60A317C8081C4101BFC31B87128024F2'] = {
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