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
	this.shape.graphics.f("#12127D").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(135.775,33.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgVAdQgKgKAAgSQABgSAIgKQAJgLAOAAQAPAAAIAJQAHAJAAAQIAAAGIgyAAQABANAGAHQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgGgJgBQgIABgFAGQgFAGgBAKIAlAAIAAAAg");
	this.shape_1.setTransform(130,30.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgRAdQgJgKAAgSQAAgTAJgKQAJgKAQAAIAKABIAJADIgDAKIgIgCIgIgCQgXABAAAcQAAANAGAIQAGAHAKAAQAJAAAKgEIAAAKQgHAEgMAAQgQAAgIgKg");
	this.shape_2.setTransform(122.9,30.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(117.675,28.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgFAmIgdhLIAMAAIARAsQAFAQAAAEIAAAAIAFgOIASgyIAMAAIgdBLg");
	this.shape_4.setTransform(112.4,30.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgUAmIAAhKIAJAAIABAOIAAAAQAFgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgFAIQgHAHAAALIAAAng");
	this.shape_5.setTransform(106.55,30.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgVAdQgKgKAAgSQABgSAIgKQAJgLAOAAQAPAAAHAJQAIAJAAAQIAAAGIgyAAQAAANAHAHQAGAHAKAAQAMAAANgFIAAAKIgMAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgGgJgBQgIABgFAGQgGAGAAAKIAlAAIAAAAg");
	this.shape_6.setTransform(99.3,30.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgZAiIAAgLQAFADAGACIAMACQAIAAAFgDQAFgDAAgGQAAgEgEgDQgEgDgKgFQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgFQAHgGAMAAQAMAAAMAFIgEAKQgLgFgJgBQgHAAgFADQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAEQAFAFAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_7.setTransform(92.075,30.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_8.setTransform(83.375,28.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgDgFgJAAQgIAAgMAGIgEgIIANgFIALgCQAOAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAHgGQAFgFABgLIAAgHg");
	this.shape_9.setTransform(77.5,30.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_10.setTransform(69.625,30.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgRAiQgIgEgEgJQgEgJAAgMQAAgRAJgLQAJgKAPAAQAQAAAJAKQAJALAAARQAAASgJALQgJAKgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAHAKABQALgBAGgHQAGgIAAgOQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_11.setTransform(61.075,30.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_12.setTransform(55.125,28.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgKAYIAAgsIgLAAIAAgFIALgFIAEgQIAGAAIAAARIAWAAIAAAJIgWAAIAAArQAAAIADADQADADAGABIAGgBIAEgBIAAAJIgFACIgHAAQgUAAAAgXg");
	this.shape_13.setTransform(50.875,29.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AggA3IAAhsIAJAAIACALIAAAAQAFgGAGgDQAFgDAHAAQAPAAAIAKQAIALAAASQAAARgIALQgJAKgOAAQgHAAgFgDQgGgCgFgGIgBAAIABAMIAAAfgAgQgmQgEAGgBAOIAAADQABAPAEAGQAGAIALAAQAJAAAGgIQAFgIAAgNQAAgOgFgIQgGgHgJAAQgLAAgGAGg");
	this.shape_14.setTransform(44.4,31.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgVAdQgJgKAAgSQgBgSAJgKQAJgLAOAAQAPAAAHAJQAJAJAAAQIAAAGIgzAAQAAANAHAHQAGAHALAAQAMAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQAAgLgFgFQgFgGgJgBQgIABgFAGQgGAGgBAKIAnAAIAAAAg");
	this.shape_15.setTransform(36,30.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgRAdQgJgKAAgSQAAgTAJgKQAJgKAPAAIAMABIAIADIgEAKIgIgCIgIgCQgVABAAAcQAAANAFAIQAGAHAJAAQAKAAAKgEIAAAKQgIAEgLAAQgPAAgJgKg");
	this.shape_16.setTransform(28.9,30.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAVAmIgVgfIgUAfIgNAAIAbgmIgZglIANAAIASAeIAUgeIANAAIgaAlIAbAmg");
	this.shape_17.setTransform(21.75,30.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgbAyIAAhjIA3AAIAAAKIgrAAIAAAhIAoAAIAAAJIgoAAIAAAkIArAAIAAALg");
	this.shape_18.setTransform(14.5,29);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_19.setTransform(132.775,16.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMABQAIAAAFgDQAFgCAAgGQAAgEgEgEQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHgBgFADQgEADAAAEQAAADACADIAFAEIAMAFQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_20.setTransform(127.625,13.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_21.setTransform(121.775,12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgRAdQgJgKAAgTQAAgRAJgKQAJgLAPAAIAMABIAIADIgEAJIgIgCIgIAAQgVgBAAAcQAAAOAFAIQAGAHAJAAQAKAAAKgEIAAAKQgIAEgLAAQgPAAgJgKg");
	this.shape_22.setTransform(116.2,13.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgYAgQgGgHgBgOIAAgwIAMAAIAAAvQAAAKAEAEQAFAFAJAAQAKAAAGgHQAFgGAAgPIAAgmIALAAIAABKIgJAAIgCgKIAAAAQgEAFgGADQgGADgHAAQgNAAgIgGg");
	this.shape_23.setTransform(108.4,13.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgYAsQgIgKAAgTQAAgSAIgJQAIgLAPAAQAOAAAJALIAAAAIAAgFIAAgFIAAgfIALAAIAABpIgJAAIgCgKIAAAAQgJAMgOAAQgPAAgIgKgAgPgFQgFAGAAAOQAAAPAFAHQAFAIAKgBQALABAFgHQAGgGAAgPIAAgCQAAgPgGgGQgFgIgLABQgKgBgFAJg");
	this.shape_24.setTransform(99.7,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_25.setTransform(91.375,13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgVAmIAAhKIAKAAIABAOIABAAQAEgHAFgEQAGgEAGAAIAJABIgBAKIgIgBQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_26.setTransform(84.8,13.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AggA3IAAhsIAKAAIABALIAAAAQAFgHAFgCQAHgDAGAAQAPAAAIALQAIAJAAATQAAASgIAJQgJALgOAAQgGAAgHgDQgGgDgEgFIAAAAIAAANIAAAegAgPgmQgGAHAAAOIAAACQAAAPAGAHQAFAGALAAQAJAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgJAAQgLAAgFAGg");
	this.shape_27.setTransform(77.4,14.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgUAmIAAhKIAJAAIABAOIAAAAQAFgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_28.setTransform(66.95,13.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_29.setTransform(59.375,13.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_30.setTransform(53.425,11.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgUAmIAAhKIAJAAIABAOIAAAAQAFgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgFAIQgHAHAAALIAAAng");
	this.shape_31.setTransform(49.3,13.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAHAKQAJAJgBAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQAMAAANgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQgBgLgEgFQgFgHgJABQgIgBgFAHQgGAFAAALIAmAAIAAAAg");
	this.shape_32.setTransform(42.05,13.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AggA3IAAhsIAJAAIACALIAAAAQAFgHAGgCQAFgDAHAAQAPAAAIALQAIAJAAATQAAASgIAJQgJALgOAAQgHAAgFgDQgGgDgFgFIgBAAIABANIAAAegAgPgmQgFAHgBAOIAAACQABAPAFAHQAFAGALAAQAJAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgJAAQgLAAgFAGg");
	this.shape_33.setTransform(34.05,14.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgYAgQgGgHAAgOIAAgwIALAAIAAAvQAAAKAEAEQAFAFAJAAQAKAAAGgHQAFgGAAgPIAAgmIAMAAIAABKIgKAAIgCgKIAAAAQgDAFgHADQgGADgHAAQgNAAgIgGg");
	this.shape_34.setTransform(25.25,13.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgfAvIAAgMIAOAFIAOABQALAAAGgEQAGgEAAgIQAAgFgCgEQgCgEgFgCQgFgDgJgDQgOgFgGgHQgGgGAAgLQAAgLAIgIQAKgGANAAQAOgBANAGIgEAKQgMgFgLAAQgJAAgFAEQgFAEAAAHQAAAFACADQACAEAEADQAEACAJAEQAQAFAGAGQAFAGAAALQAAAMgJAIQgJAHgQABQgSgBgKgEg");
	this.shape_35.setTransform(17.2,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,40.1);


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
	this.shape.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape.setTransform(124.125,50.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AATAlIgOgrIgFgSIAAAAIgEASIgPArIgMAAIgVhJIAMAAIALAqIAFAUIAAAAIACgKIADgKIAOgqIALAAIAOAqIAFAUIAAAAIACgJIAOg1IAMAAIgVBJg");
	this.shape_1.setTransform(114.4,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgKQAJgKAPAAQAQAAAJAKQAJALAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_2.setTransform(104.725,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgnAyIAAhjIAfAAQAWAAANANQANANAAAXQAAAYgOANQgNANgYAAgAgbAoIAOAAQAUAAAKgKQAKgKAAgUQAAgTgJgKQgKgKgTAAIgQAAg");
	this.shape_3.setTransform(95.65,48.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_4.setTransform(83.175,51.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgVAdQgJgKAAgTQAAgRAJgKQAIgLAOAAQAOAAAJAKQAHAJABAPIAAAGIgzAAQABAOAGAGQAGAHALAAQAMAAALgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQABgLgFgFQgFgHgJABQgIgBgFAHQgFAFgBALIAlAAIAAAAg");
	this.shape_5.setTransform(75.75,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_6.setTransform(67.575,50.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgKQAJgKAPAAQAQAAAJAKQAJALAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_7.setTransform(59.025,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAmAyIAAg/IABgZIAAAAIgiBYIgJAAIgihYIgBAAIABAaIAAA+IgKAAIAAhjIARAAIAfBSIAAAAIAhhSIARAAIAABjg");
	this.shape_8.setTransform(48.5,48.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgKQAJgKAPAAQAQAAAJAKQAJALAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_9.setTransform(34.375,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIABAbIAAA4IgLAAIAAhjIANAAIA2BTIAAAAIAAgMIgBgPIAAg4IALAAIAABjg");
	this.shape_10.setTransform(24.875,48.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgJARIAEgRIADgQIALAAIABACIgFAOIgGARg");
	this.shape_11.setTransform(110.225,36.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAAqQAAAIADADQADADAGABIAGgBIAEgBIAAAJIgFACIgHAAQgUAAAAgXg");
	this.shape_12.setTransform(106.275,32.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgZAiIAAgLQAFAEAGABIAMACQAIAAAFgDQAFgDAAgGQAAgEgEgDQgEgDgKgFQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgFQAHgGAMAAQAMAAAMAFIgEAKQgLgFgJgBQgHAAgFADQgEADAAAEQAAADACACIAFAFIAMAFQANAEAFAEQAFAGAAAHQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_13.setTransform(100.575,33.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgVAdQgJgKAAgSQAAgSAJgKQAIgLAOAAQAOAAAJAJQAHAKABAPIAAAGIgzAAQABANAGAHQAGAHALAAQALAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQABgLgFgGQgFgFgJgBQgIABgFAFQgFAHgCAKIAmAAIAAAAg");
	this.shape_14.setTransform(93.3,33.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgUAmIAAhKIAJAAIABAOIABAAQAEgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgFAIQgHAHAAALIAAAng");
	this.shape_15.setTransform(87,32.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgVAdQgKgKAAgSQAAgSAJgKQAJgLAOAAQAPAAAHAJQAJAKgBAPIAAAGIgyAAQAAANAHAHQAGAHAKAAQANAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQgBgLgEgGQgFgFgJgBQgIABgFAFQgFAHgCAKIAnAAIAAAAg");
	this.shape_16.setTransform(79.75,33.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAAqQAAAIADADQADADAGABIAGgBIAEgBIAAAJIgFACIgHAAQgUAAAAgXg");
	this.shape_17.setTransform(73.325,32.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_18.setTransform(66.675,32.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_19.setTransform(60.4,31.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgRAiQgIgEgEgJQgEgJAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAKQgJAKgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAHAKABQALgBAGgHQAGgIAAgOQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_20.setTransform(50.625,33.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIABAbIAAA4IgLAAIAAhjIANAAIA2BTIAAAAIAAgMIgBgOIAAg5IALAAIAABjg");
	this.shape_21.setTransform(41.125,31.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgJARIAEgRIADgQIALAAIABACIgFAOIgGARg");
	this.shape_22.setTransform(117.125,19.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMACQAIgBAFgDQAFgCAAgGQAAgFgEgDQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgFQAHgGAMAAQAMAAAMAFIgEAKQgLgGgJABQgHAAgFACQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_23.setTransform(112.375,16);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgKAYIAAgsIgLAAIAAgFIALgFIAEgQIAGAAIAAARIAWAAIAAAJIgWAAIAAAsQAAAGADAEQADAEAGAAIAGgBIAEgBIAAAJIgFACIgHAAQgUAAAAgXg");
	this.shape_24.setTransform(106.525,15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_25.setTransform(99.875,15.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAHAKQAIAJAAAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgHgJABQgIgBgFAHQgGAFAAALIAlAAIAAAAg");
	this.shape_26.setTransform(91.65,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgJAAQgKAAgGAGQgEAGAAAMIAAApIgLAAIAAgvQAAgJgEgFQgEgEgHAAQgLAAgFAGQgFAGAAAPIAAAmIgMAAIAAhKIAKAAIACALIAAAAQAEgGAFgDQAGgDAHAAQASAAAFANIAAAAQADgGAHgEQAGgDAIAAQANAAAGAHQAGAGAAAOIAAAwg");
	this.shape_27.setTransform(81.25,15.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_28.setTransform(71.175,17.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgDgFgJAAQgIAAgMAGIgEgIIANgFIAMgCQANAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAHgGQAFgFABgLIAAgHg");
	this.shape_29.setTransform(63.55,16.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgfAyIAAhjIAaAAQAlAAAAAdQAAAPgKAIQgLAHgSABIgMAAIAAAngAgTAAIALAAQAOAAAHgDQAHgFAAgMQAAgJgHgFQgGgFgNAAIgNAAg");
	this.shape_30.setTransform(56.025,14.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgRAiQgIgFgEgIQgEgJAAgMQAAgSAJgKQAJgKAPAAQAQAAAJAKQAJALAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKAAQALAAAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_31.setTransform(43.675,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIABAbIAAA4IgLAAIAAhjIANAAIA2BSIAAAAIAAgLIgBgPIAAg4IALAAIAABjg");
	this.shape_32.setTransform(34.175,14.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFAmQgCgDAAgFQAAgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAFgCACQgCADgEgBQgDAAgCgBgAgFgWQgCgCAAgFQAAgKAHAAQAIAAAAAKQAAAEgCACQgCADgEAAQgDAAgCgCg");
	this.shape_33.setTransform(108.875,-1.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgZAiIAAgLQAFAEAGABQAGACAGgBQAIAAAFgCQAFgDAAgGQAAgFgEgCQgEgDgKgFQgKgDgFgDQgEgDgCgDQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHAAgFACQgEADAAAEQAAADACACIAFAFIAMAFQANAEAFAEQAFAGAAAHQAAALgIAFQgIAGgNAAQgPAAgIgFg");
	this.shape_34.setTransform(103.725,-1.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AAUA1IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAOIAAAnIgLAAIAAhpIALAAIAAAgIAAAKIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAANIAAAxg");
	this.shape_35.setTransform(96.125,-2.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_36.setTransform(89.325,-1.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_37.setTransform(82.675,-1.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAKQgJAKgQAAQgJAAgIgFgAgQgVQgGAHAAAOQAAAOAGAIQAGAHAKAAQALAAAGgHQAGgIAAgOQAAgNgGgIQgGgHgLAAQgKAAgGAHg");
	this.shape_38.setTransform(74.125,-1.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgJAAQgKAAgFAGQgGAGAAAMIAAApIgKAAIAAgvQAAgJgEgFQgDgEgJAAQgKAAgFAGQgFAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAFgDQAGgDAHAAQASAAAFANIAAAAQADgGAHgEQAGgDAIAAQANAAAGAHQAHAGgBAOIAAAwg");
	this.shape_39.setTransform(63.45,-1.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AAMAyIAAgXIgwAAIAAgKIAuhCIANAAIAABCIAOAAIAAAKIgOAAIAAAXgAAGgaIgfArIAlAAIAAggIAAgWIAAAAg");
	this.shape_40.setTransform(49.3,-2.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AggAzIAAgKIAagaIAPgRIAGgKQACgFAAgGQAAgIgFgEQgFgFgHAAQgHAAgFACQgGACgHAGIgGgIQAOgMAQAAQAOAAAIAIQAIAHAAAMQAAAJgGAKQgFAIgPAOIgVAWIAAAAIAzAAIAAALg");
	this.shape_41.setTransform(41.275,-2.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.2,148,74.2);


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
	this.shape.graphics.f("#12127D").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAGgUIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAEQAEAFAHAAIAIgBIAGgBIAAALIgHACIgJABQgbAAAAgdg");
	this.shape.setTransform(127.075,74.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgWAlQgMgNAAgXQAAgYAMgNQAMgNAUAAIAOABQAHACAEACIgFAMIgKgDIgKgBQgdAAAAAlQAAARAIAKQAHAJANAAQAMAAANgFIAAANQgKAFgPAAQgUAAgLgNg");
	this.shape_1.setTransform(119.875,75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgbAlQgNgNAAgXQAAgXAMgNQALgOATAAQASAAAKAMQALALAAAUIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgHIAAAOIgPAEQgHACgKAAQgUAAgMgNgAAZgIQAAgOgGgIQgGgHgMAAQgKAAgHAHQgHAIgBAOIAxAAIAAAAg");
	this.shape_2.setTransform(110.425,75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgUBVIAAgLQAHABAFAAQAHAAADgDQADgEAAgIIAAhvIAOAAIAABuQAAAcgZAAQgIAAgGgCgAAGhFQgDgDAAgFQAAgFADgCQACgCAEgBQAEABACACQADACAAAFQAAAFgDADQgCACgEAAQgEAAgCgCg");
	this.shape_3.setTransform(101.875,76.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgWAsQgKgHgGgKQgFgMAAgPQAAgXAMgNQALgNAUAAQAVAAALAOQAMANAAAWQAAAYgMANQgLANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAHAKQAIAJANABQAOgBAIgJQAHgJAAgTQAAgSgHgJQgIgJgOAAQgNAAgIAJg");
	this.shape_4.setTransform(95.375,75.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCAOIgLgCQgMAAgHAKQgIAJAAAOIAAAzg");
	this.shape_5.setTransform(86.975,75.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgqBGIAAiKIANAAIACANIAAAAQAFgHAIgEQAIgEAIABQAUgBAKANQALANAAAYQgBAXgKANQgLAOgTAAQgIgBgIgDQgIgEgFgHIgBAAIABAQIAAAngAgUgxQgHAIAAASIAAADQAAAUAHAJQAHAIANAAQANAAAHgKQAHgJAAgSQAAgSgHgKQgHgJgNAAQgOAAgGAIg");
	this.shape_6.setTransform(77.45,77.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgbAlQgNgNAAgXQAAgXAMgNQALgOATAAQASAAAKAMQALALAAAUIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgHIAAAOIgPAEQgHACgKAAQgUAAgMgNgAAZgIQAAgOgGgIQgGgHgMAAQgKAAgHAHQgHAIgBAOIAxAAIAAAAg");
	this.shape_7.setTransform(62.025,75.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCAOIgLgCQgMAAgHAKQgIAJAAAOIAAAzg");
	this.shape_8.setTransform(53.975,75.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgGBCIAAhgIANAAIAABggAgFgwQgDgCAAgFQAAgGADgBQACgDADAAQAEAAACADQADABAAAGQAAAFgDACQgCADgEAAQgDAAgCgDg");
	this.shape_9.setTransform(47.375,74.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAGgUIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAEQAEAFAHAAIAIgBIAGgBIAAALIgHACIgJABQgbAAAAgdg");
	this.shape_10.setTransform(41.875,74.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAaAxIAAg+QAAgLgGgGQgFgGgMABQgOAAgHAIQgHAHAAAUIAAAxIgOAAIAAhgIAMAAIACAOIABAAQAEgIAIgDQAIgEAJAAQASAAAIAIQAJAIAAATIAAA+g");
	this.shape_11.setTransform(33.325,75.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgbAlQgNgNAAgXQAAgXAMgNQALgOATAAQASAAAKAMQALALAAAUIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgHIAAAOIgPAEQgHACgKAAQgUAAgMgNgAAZgIQAAgOgGgIQgGgHgMAAQgKAAgHAHQgHAIgBAOIAxAAIAAAAg");
	this.shape_12.setTransform(22.775,75.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgXBJIAAhSIgPAAIAAgNIAPgIIAAgIQAAgRAJgIQAJgJASAAQAPAAALAFIgHAVQgIgDgIAAQgGAAgCADQgEAEAAAGIAAAGIAZAAIAAAVIgZAAIAABSg");
	this.shape_13.setTransform(108.2,51.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgXBJIAAhSIgPAAIAAgNIAPgIIAAgIQAAgRAJgIQAJgJASAAQAOAAAMAFIgHAVQgJgDgHAAQgGAAgCADQgDAEAAAGIAAAGIAYAAIAAAVIgYAAIAABSg");
	this.shape_14.setTransform(100.85,51.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgaAvQgLgGgGgNQgGgMAAgQQAAgZANgOQANgOAXAAQAPAAAMAHQALAGAGAMQAGAMAAAQQAAAZgNAOQgNAPgYAAQgOAAgMgHgAgPgWQgFAHAAAPQAAAPAFAIQAFAIAKAAQALAAAFgIQAFgIAAgPQAAgPgFgHQgFgIgLAAQgKAAgFAIg");
	this.shape_15.setTransform(90.675,53.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgiA0QgMgSAAgiQAAgjALgQQAMgSAXAAQAXAAAMASQAMASAAAhQAAAjgLASQgMARgYAAQgXAAgLgSgAgOgjQgEALAAAYQAAAZAEALQAFALAJAAQAKAAAEgLQAFgLAAgZQAAgYgFgLQgEgKgKgBQgJABgFAKg");
	this.shape_16.setTransform(74.525,52.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgiA0QgMgSAAgiQAAgjALgQQAMgSAXAAQAXAAAMASQAMASAAAhQAAAjgLASQgMARgYAAQgXAAgLgSgAgOgjQgEALAAAYQAAAZAEALQAFALAJAAQAKAAAEgLQAFgLAAgZQAAgYgFgLQgEgKgKgBQgJABgFAKg");
	this.shape_17.setTransform(63.725,52.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgsA9IAAgYQAHADAKADQAJACAJAAQAZAAAAgVQAAgVgaAAIgLABIgJACIgMgGIAFhEIBJAAIAAAYIgwAAIgCAbIADgBIANgBQAUAAAMALQALAKAAATQAAAXgOAMQgOANgZAAQgXAAgNgIg");
	this.shape_18.setTransform(52.975,52.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgGBOIAAgTQgWAAgRgIIAAgYQAIAEALADQALADAJAAIAAgcIgGgDQgSgGgIgJQgIgIAAgNQAAgOALgIQAKgJATgBIAAgPIAMAAIAAAOQAVABARAIIgIAVQgPgFgPgCIAAAcQASAHAIAFQAHADAEAHQAEAGAAAIQAAAPgLAJQgLAJgTACIAAATgAAGAkQANgBAAgJQAAgEgEgDQgDgDgGgCgAgSgeQAAAEADADQADADAGADIAAgWQgMACAAAHg");
	this.shape_19.setTransform(42.175,52.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgJAuIAAgkIgkAAIAAgTIAkAAIAAgkIATAAIAAAkIAkAAIAAATIgkAAIAAAkg");
	this.shape_20.setTransform(126.625,29.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAXA7QgIgLAAgVQAAgpAgAAQAQgBAIAMQAJAJAAAVQAAAVgJALQgIAKgQAAQgPABgJgLgAApAKQgDAFAAAMQAAAMADAGQACAFAEAAQAJABAAgYQAAgXgJAAQgEAAgCAGgAgwBEIBKiHIAWAAIhKCHgAhHAFQgIgKAAgVQAAgqAgAAQAQgBAIALQAJALAAAVQAAAVgJAKQgIAKgQAAQgPABgJgLgAg1grQgDAFAAAMQAAAMADAFQACAHAEgBQAJABAAgYQAAgXgJAAQgEAAgCAGg");
	this.shape_21.setTransform(107.775,29.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgiA0QgMgSAAgiQAAgjALgQQAMgSAXAAQAXAAAMASQAMASAAAhQAAAkgLARQgMARgYAAQgXAAgLgSgAgOgiQgEAKAAAYQAAAZAEALQAFALAJAAQAKAAAEgLQAFgLAAgZQAAgYgFgKQgEgMgKAAQgJAAgFAMg");
	this.shape_22.setTransform(93.825,29.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AguBFIAAgUIAigjQAOgOAFgGQAEgGACgFQACgFAAgGQAAgIgEgEQgFgEgGAAQgIAAgHAEQgIADgIAHIgQgSIARgNQAHgDAHgCQAIgCAJAAQANAAAJAFQAKAEAFAJQAGAIAAALQAAAJgDAJQgEAIgHAHQgHAJgRAQIgQAQIAAACIA6AAIAAAYg");
	this.shape_23.setTransform(83.075,29.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgvA0QgRgTAAghQABghAQgSQARgSAeAAQAgAAAQASQAQASABAhQgBAhgQATQgRASgfAAQgeAAgRgSgAgYghQgJALAAAWQAAAXAJALQAIAMAQAAQAigBAAgtQABgtgjAAQgQAAgIAMg");
	this.shape_24.setTransform(65.15,29.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgmA0QgRgSAAgiQAAggATgSQATgTAgAAQAVAAATAJIgJAXQgPgIgQAAQgSAAgLANQgLAMAAAUQAAAWAJAMQAJAMAQAAQAJAAAKgCIAAgcIgaAAIAAgXIA2AAIAABFQgNAEgMACQgMACgMAAQgdAAgQgSg");
	this.shape_25.setTransform(50.525,29.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgvA0QgQgTAAghQgBghASgSQAQgSAfAAQAeAAARASQARASAAAhQAAAhgRATQgRASgfAAQgeAAgRgSgAgYghQgKALABAWQgBAXAKALQAIAMAQAAQAjgBAAgtQgBgtghAAQgRAAgIAMg");
	this.shape_26.setTransform(36.3,29.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgxBEIAAiHIAqAAQAcAAANAIQANAJAAARQAAANgGAHQgFAIgKACIAAABQANACAGAHQAFAIAAANQAAATgNAKQgNALgXAAgAgUAsIASAAQALAAAGgFQAGgEAAgJQAAgRgYAAIgRAAgAgUgNIAQAAQALAAAFgEQAFgDAAgJQAAgIgFgDQgGgDgLAAIgPAAg");
	this.shape_27.setTransform(22.725,29.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgMAWIAFgWIAEgVIAPAAIABACIgGAUIgIAVg");
	this.shape_28.setTransform(110.675,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgrBEIAAgLIALABQAPAAAGgRIAGgOIgnhgIAQAAIAVA3QAHASAAAJIABAAIAFgPIAYhDIAPAAIgpBtQgFAQgIAHQgJAHgMAAIgNgCg");
	this.shape_29.setTransform(104.275,10.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgdArQgIgIAAgNQAAgdAtgBIARgBIAAgGQgBgLgFgFQgEgGgLAAQgLAAgQAIIgEgLQAHgFAJgBQAIgDAHAAQASAAAIAHQAJAJgBAQIAABBIgKAAIgDgNIgBAAQgHAJgHACQgIAEgJAAQgPAAgHgHgAAKABQgRABgIAFQgHAEgBALQABAIAFAEQAEADAIAAQAOABAHgIQAIgHAAgOIAAgJg");
	this.shape_30.setTransform(94.45,8.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AAxBAIAAhSIABgeIgBAAIgsBwIgLAAIgrhxIgBAAQABAOAAATIAABQIgOAAIAAh/IAXAAIAoBpIAAAAIAphpIAXAAIAAB/g");
	this.shape_31.setTransform(81.625,7.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AghAsIAAgOQAHADAIACQAIACAHAAQAKABAHgEQAGgDAAgIQAAgFgFgEQgEgEgOgGQgOgEgFgEQgFgDgEgFQgCgFAAgHQAAgLAJgHQAKgHAQAAQAPAAAPAGIgFAMQgOgGgMAAQgKAAgFADQgGAEABAFQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_32.setTransform(64.65,8.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgDgDAAgEQAAgFADgDQACgCADAAQAEAAACACQADADAAAFQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_33.setTransform(58.025,6.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAaBFIAAg/QAAgKgGgHQgFgFgMAAQgOAAgHAIQgHAIAAASIAAAzIgOAAIAAiIIAOAAIAAApIAAANIAAAAQAFgIAIgDQAIgFAJAAQASAAAIAJQAJAIAAASIAAA/g");
	this.shape_34.setTransform(50.325,6.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgGBAIAAhyIgpAAIAAgNIBfAAIAAANIgpAAIAAByg");
	this.shape_35.setTransform(39.775,7.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.7,148,95.7);


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
	this.shape.graphics.f("#B20000").s().p("AgLA2QgFgEAAgHQAAgHAFgEQAEgEAHAAQAIAAAEAEQAEAEAAAHQAAAHgEAEQgEAEgIAAQgHAAgEgEgAgMAQIgEhJIAhAAIgEBJg");
	this.shape.setTransform(92.825,69.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgPA5IAAgrIglhGIAhAAIATAqIAUgqIAhAAIgmBEIAAAtg");
	this.shape_1.setTransform(85.225,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAZA5IgGgVIgkAAIgGAVIgiAAIAmhxIAnAAIAmBxgAAMALIgEgSIgFgQIgDgPIgBAOIgKAjIAXAAg");
	this.shape_2.setTransform(74.1,69.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAlA5IAAgyIAAgHIAAgYIAAAAIgXBRIgdAAIgWhSIgCAAIACAhIAAAxIgbAAIAAhxIApAAIAXBQIABAAIAXhQIApAAIAABxg");
	this.shape_3.setTransform(60.6,69.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgOA5IAAhYIgcAAIAAgZIBVAAIAAAZIgcAAIAABYg");
	this.shape_4.setTransform(127.125,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgjAuQgNgMAAgXIAAhEIAfAAIAABCQAAAMAFAGQAFAFAHAAQAJAAAFgFQAEgGAAgMIAAhCIAfAAIAABEQAAAWgNANQgNAMgXAAQgWAAgNgMg");
	this.shape_5.setTransform(116.35,51.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgoAsQgOgPAAgdQAAgcAOgPQAOgPAbAAQAbAAAOAPQAOAPgBAcQABAdgOAPQgOAPgcAAQgaAAgOgPgAgWAAQAAAhAWAAQAMAAAGgIQAFgIAAgRQAAgQgFgIQgHgIgKAAQgXAAAAAgg");
	this.shape_6.setTransform(103.9,50.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AASA5IAAgvIgjAAIAAAvIgfAAIAAhxIAfAAIAAAqIAjAAIAAgqIAfAAIAABxg");
	this.shape_7.setTransform(91.425,51);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgiAsQgPgQAAgcQAAgbAQgPQAQgQAbAAQALAAAKACQAJACAHAEIgJAYQgNgGgOAAQgNAAgHAJQgIAIAAAQQAAAQAHAIQAHAIALAAIANgBIAAgSIgVAAIAAgXIAyAAIAAA9QgUAHgYAAQgaAAgOgPg");
	this.shape_8.setTransform(79.275,50.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgjAuQgNgMAAgXIAAhEIAfAAIAABCQAAAMAFAGQAEAFAIAAQAKAAAEgFQAEgGAAgMIAAhCIAfAAIAABEQAAAWgNANQgMAMgYAAQgXAAgMgMg");
	this.shape_9.setTransform(67.45,51.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgoAsQgPgPAAgdQAAgcAPgPQAOgPAbAAQAbAAANAPQAOAPABAcQgBAdgOAPQgOAPgbAAQgZAAgPgPgAgWAAQAAAhAWAAQAMAAAGgIQAFgIAAgRQAAgQgFgIQgHgIgKAAQgXAAAAAgg");
	this.shape_10.setTransform(55,50.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAOA5IgXgpIgIAAIAAApIgfAAIAAhxIAmAAQAtAAAAAiQAAAUgTAJIAhAygAgRgHIAGAAQAPAAAAgOQAAgMgPAAIgGAAg");
	this.shape_11.setTransform(43.975,51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AASA5IAAgvIgjAAIAAAvIgfAAIAAhxIAfAAIAAAqIAjAAIAAgqIAfAAIAABxg");
	this.shape_12.setTransform(31.725,51);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgOA5IAAhYIgcAAIAAgZIBVAAIAAAZIgcAAIAABYg");
	this.shape_13.setTransform(20.875,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgXA5QgIgBgIgEIAAgcQAJAFAKACQAJADAIAAQAGAAADgDQADgCAAgEIgBgEIgEgDIgOgIQgLgFgGgFQgGgDgCgHQgDgGAAgIQAAgQAMgJQALgJATAAQASAAASAJIgKAXQgPgHgMAAQgFAAgDACQgCACgBADQABAEADACQADADAPAHQAOAHAHAGQAFAIAAAMQAAAKgFAIQgGAJgKAEQgKAFgMAAQgMAAgIgCg");
	this.shape_14.setTransform(105.35,32.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgiAsQgPgQAAgcQAAgbAQgPQAQgQAbAAQALAAAKACQAJACAHAEIgJAYQgNgGgOAAQgNAAgHAJQgIAIAAAQQAAAQAHAIQAHAIALAAIANgBIAAgSIgVAAIAAgXIAyAAIAAA9QgUAHgYAAQgaAAgOgPg");
	this.shape_15.setTransform(94.625,32.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAOA5IgphPIgBAAIACAcIAAAzIgbAAIAAhxIAoAAIAoBOIABAAIgBgaIAAg0IAbAAIAABxg");
	this.shape_16.setTransform(82.225,32.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgOA5IAAhxIAdAAIAABxg");
	this.shape_17.setTransform(72.8,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgRA5IgmhxIAjAAIAQA4QAEAUAAAHIACgNIADgNIAQg5IAjAAIgmBxg");
	this.shape_18.setTransform(64.45,32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAYA5IgFgVIglAAIgFAVIgiAAIAlhxIApAAIAlBxgAANALIgGgSIgDgQIgEgPIgCAOIgJAjIAYAAg");
	this.shape_19.setTransform(53.1,32.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgXA5QgIgBgIgEIAAgcQAJAFAKACQAJADAIAAQAGAAADgDQADgCAAgEIgBgEIgEgDIgOgIQgLgFgGgFQgGgDgCgHQgDgGAAgIQAAgQALgJQAMgJATAAQASAAASAJIgKAXQgPgHgMAAQgFAAgDACQgCACgBADQABAEADACQADADAPAHQAOAHAHAGQAFAIAAAMQAAAKgFAIQgGAJgKAEQgKAFgMAAQgMAAgIgCg");
	this.shape_20.setTransform(42.8,32.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgPA5IAAgrIglhGIAhAAIATAqIAUgqIAhAAIgmBFIAAAsg");
	this.shape_21.setTransform(132.875,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAZA5IgGgVIgkAAIgGAVIgiAAIAmhxIAnAAIAmBxgAAMALIgEgSIgFgQIgDgPIgBAOIgKAjIAXAAg");
	this.shape_22.setTransform(121.1,13.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgvA5IAAhxIAnAAQAbAAAOAOQAPAOABAaQgBAcgPAQQgQAPgcAAgAgRAgIAHAAQANAAAGgJQAIgIgBgQQAAgPgGgHQgGgJgMABIgJAAg");
	this.shape_23.setTransform(109.7,13.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgkA5IAAhxIAeAAIAABYIArAAIAAAZg");
	this.shape_24.setTransform(95.125,13.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAYA5IgFgVIgkAAIgGAVIgiAAIAlhxIApAAIAlBxgAAMALIgEgSIgFgQIgDgPIgCAOIgJAjIAXAAg");
	this.shape_25.setTransform(84.35,13.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgOA5IAAhxIAdAAIAABxg");
	this.shape_26.setTransform(75.8,13.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AAOA5IgXgqIgIAAIAAAqIgfAAIAAhxIAmAAQAtAAAAAiQAAATgTAKIAhAygAgRgHIAGAAQAPAAAAgOQAAgMgPAAIgGAAg");
	this.shape_27.setTransform(68.325,13.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgoAsQgPgPAAgdQAAgcAPgPQAOgPAbAAQAbAAANAPQAPAPAAAcQAAAdgPAPQgOAPgbAAQgZAAgPgPgAgWAAQAAAhAWAAQAMAAAFgIQAGgIAAgRQAAgQgGgIQgGgIgKAAQgXAAAAAgg");
	this.shape_28.setTransform(55.8,13.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAkA5IAAgyIAAgIIACgXIgBAAIgXBRIgcAAIgYhRIgBAAIACAfIAAAyIgbAAIAAhxIApAAIAXBQIAAAAIAYhQIApAAIAABxg");
	this.shape_29.setTransform(41.75,13.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AghA5IAAhxIBDAAIAAAZIgkAAIAAASIAhAAIAAAYIghAAIAAAVIAkAAIAAAZg");
	this.shape_30.setTransform(29.875,13.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAlA5IAAgyIAAgIIABgXIgBAAIgXBRIgcAAIgYhRIgBAAIACAfIAAAyIgbAAIAAhxIApAAIAXBQIABAAIAXhQIApAAIAABxg");
	this.shape_31.setTransform(17.55,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,82.2);


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
	this.shape.setTransform(114.525,79.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(49.975,71.4479);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(76.4619,42.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(76.525,44.0875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(76.7143,40.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(73.925,36.7875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(72.0706,49.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(72.775,40.2019);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(60.125,72.3634);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(112.5382,66.8763);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(109.5577,74.2125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(109.0542,72.1014);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(109.6337,70.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(110.2042,69.1556);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(106.6,78.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(116.15,47.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(92.55,64.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(96.925,54.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(67.6637,55.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(76.1667,51.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(57.75,62.0229);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(61.975,50.4531);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(53.15,62.8179);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(78.275,31.2854);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(67.4,31.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(73.2,92.2583);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(79.1,90.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(76.6583,91.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(85.5,86.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(70.7768,92.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(61,87.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(82.075,89.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(63.675,89.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(72.8,91.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(57.025,87.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(83.8214,63.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(86.1625,60.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(101.825,46.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(46.5,46.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(46.5,46.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(74.2,46.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(176.025,50.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(218.925,50.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(161.125,50.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(258.775,50.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(244.425,50.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(231.625,50.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(204.875,50.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(191.55,50.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(140.525,49.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(148.5,52.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(258.925,28.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(143.775,28.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(239.5,28.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(219.55,28.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(199.05,28.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(179.625,28.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(160.825,28.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(200.725,71.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(200.725,62.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,17.9,246.70000000000002,84.4);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAASIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
	this.shape.setTransform(104.725,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAyIgWgnIgMAAIAAAnIgVAAIAAhjIAdAAQATAAALAHQAJAIAAAPQAAAJgFAHQgFAGgIAEIAdArgAgSgEIAHAAQAKAAAEgEQAFgEgBgGQABgIgFgCQgEgDgKAAIgHAAg");
	this.shape_1.setTransform(96.65,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAmQgNgOAAgYQAAgYANgNQAMgOAWAAQAXAAAMAOQANANAAAYQAAAYgNAOQgMAOgXAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAGAJAMAAQAZgBAAghQAAghgZAAQgMAAgGAIg");
	this.shape_2.setTransform(85.875,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAyIAAgwIABgGIAAgXIAAAAIgaBNIgSAAIgYhNIgBAAIACAfIAAAuIgUAAIAAhjIAeAAIAXBLIAAAAIAYhLIAdAAIAABjg");
	this.shape_3.setTransform(73.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAyIgrhLIgBAAIACAcIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgaIAAgwIATAAIAABjg");
	this.shape_4.setTransform(57.825,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAyIgYgnIgKAAIAAAnIgWAAIAAhjIAdAAQATAAAKAHQAKAIAAAPQAAAJgEAHQgGAGgJAEIAeArgAgRgEIAGAAQAKAAAEgEQAEgEABgGQgBgIgEgCQgEgDgKAAIgGAAg");
	this.shape_5.setTransform(48.2,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_6.setTransform(38.125,14.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAASIgjAAIAAAWIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
	this.shape_7.setTransform(29.625,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIAVAAIAABSIAoAAIAAARg");
	this.shape_8.setTransform(21.95,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6CC14C").s().p("Ap1CWIAAkrITrAAIAAErg");
	this.shape_9.setTransform(63,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,30);


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
(lib.WBAY_214318_MM_160x600 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(259));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(80,508,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({y:473,alpha:1},14).wait(96));

	// text4
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(80,486.9,1,1,0,0,0,74,37.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(137).to({_off:false},0).to({y:436.9,alpha:1},14,cjs.Ease.get(1)).wait(108));

	// text_3
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(80,351.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).to({y:331.6,alpha:1},14,cjs.Ease.get(1)).wait(113));

	// text
	this.instance_3 = new lib.text3("synched",0);
	this.instance_3.setTransform(80,464.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({y:444.6,alpha:1},14,cjs.Ease.get(1)).wait(53).to({startPosition:0},0).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// text1
	this.instance_4 = new lib.text1("synched",0);
	this.instance_4.setTransform(80,324.6,1,1,0,0,0,74,25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({y:344.6,alpha:1},14,cjs.Ease.get(1)).wait(67).to({startPosition:0},0).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// logo
	this.instance_5 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_5.setTransform(80.1,238.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({y:248.5,alpha:1},14,cjs.Ease.get(1)).wait(217));

	// bar
	this.instance_6 = new lib.bar("synched",0);
	this.instance_6.setTransform(80,203,1,1,0,0,0,80,5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({alpha:1},14).wait(231));

	// image3
	this.instance_7 = new lib.image3_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(213).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(31));

	// image2
	this.instance_8 = new lib.image2_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(31).to({alpha:0},15,cjs.Ease.get(1)).wait(31));

	// image1
	this.instance_9 = new lib.image1_1();
	this.instance_9.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(139).to({alpha:0},15,cjs.Ease.get(1)).wait(77));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},14,cjs.Ease.get(1)).wait(245));

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