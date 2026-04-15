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
	this.shape.graphics.f("#12127D").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(254.675,16.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgVAdQgKgKABgTQAAgRAJgKQAIgLAOAAQAOAAAJAKQAHAJABAPIAAAGIgzAAQABAOAGAGQAGAHALAAQALAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQABgLgFgFQgFgHgJABQgIgBgFAHQgFAFgBALIAlAAIAAAAg");
	this.shape_1.setTransform(248.9,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgRAdQgJgKAAgTQAAgRAJgKQAJgLAQAAIAKABIAJADIgDAJIgIgCIgIAAQgXgBAAAcQAAAOAGAIQAGAHAKAAQAJAAAKgEIAAAKQgIAEgLAAQgQAAgIgKg");
	this.shape_2.setTransform(241.8,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_3.setTransform(236.575,11.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgFAlIgdhKIAMAAIARAsQAFAQAAAEIABAAIAEgOIASgyIAMAAIgdBKg");
	this.shape_4.setTransform(231.3,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgVAmIAAhKIAKAAIABAOIAAAAQAFgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_5.setTransform(225.45,13.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAIAKQAHAJAAAPIAAAGIgyAAQABAOAGAGQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgHgJABQgIgBgFAHQgFAFgBALIAlAAIAAAAg");
	this.shape_6.setTransform(218.2,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMABQAIAAAFgDQAFgCAAgGQAAgEgEgEQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHgBgFADQgEADAAAEQAAADACADIAFAEIAMAFQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_7.setTransform(210.975,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_8.setTransform(202.275,11.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgXAhQgGgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgDgFgJAAQgIAAgMAGIgEgIIANgFQAGgCAFAAQAOAAAGAGQAHAGAAANIAAAyIgJAAIgBgKIgBAAQgGAHgFACQgGADgIAAQgKAAgHgGgAAIABQgNAAgGAEQgGAEAAAIQAAAGADADQAEADAHAAQAKAAAFgGQAHgFAAgLIAAgHg");
	this.shape_9.setTransform(196.4,13.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_10.setTransform(188.525,13.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_11.setTransform(179.975,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_12.setTransform(174.025,11.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_13.setTransform(169.775,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AggA3IAAhsIAJAAIACALIABAAQAEgHAGgCQAFgDAHAAQAPAAAIALQAIAJAAATQAAASgIAJQgIALgPAAQgHAAgFgDQgHgDgDgFIgCAAIACANIAAAegAgQgmQgEAHAAAOIAAACQAAAPAEAHQAGAGALAAQAJAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgJAAQgLAAgGAGg");
	this.shape_14.setTransform(163.3,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQAAgRAJgKQAJgLAOAAQAPAAAHAKQAJAJgBAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQANAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQgBgLgEgFQgFgHgJABQgIgBgFAHQgFAFgCALIAnAAIAAAAg");
	this.shape_15.setTransform(154.9,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgRAdQgJgKAAgTQAAgRAJgKQAJgLAQAAIALABIAIADIgEAJIgIgCIgHAAQgXgBAAAcQABAOAFAIQAGAHAJAAQAKAAAKgEIAAAKQgHAEgMAAQgPAAgJgKg");
	this.shape_16.setTransform(147.8,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAVAlIgVgeIgUAeIgNAAIAcglIgaglIAMAAIATAdIAUgdIANAAIgaAlIAbAlg");
	this.shape_17.setTransform(140.65,13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgbAyIAAhjIA3AAIAAALIgrAAIAAAfIApAAIAAAKIgpAAIAAAlIArAAIAAAKg");
	this.shape_18.setTransform(133.4,11.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_19.setTransform(123.825,16.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMABQAIAAAFgDQAFgCAAgGQAAgEgEgEQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHgBgFADQgEADAAAEQAAADACADIAFAEIAMAFQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_20.setTransform(118.675,13.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_21.setTransform(112.825,12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgRAdQgJgKAAgTQAAgRAJgKQAJgLAQAAIAKABIAJADIgDAJIgIgCIgIAAQgXgBAAAcQAAAOAGAIQAGAHAKAAQAJAAAKgEIAAAKQgIAEgLAAQgQAAgIgKg");
	this.shape_22.setTransform(107.25,13.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgXAgQgIgHABgOIAAgwIALAAIAAAvQAAAKAFAEQAEAFAIAAQALAAAFgHQAGgGAAgPIAAgmIAMAAIAABKIgKAAIgBgKIgBAAQgDAFgHADQgGADgHAAQgOAAgGgGg");
	this.shape_23.setTransform(99.45,13.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgYAsQgIgKAAgTQAAgSAIgJQAIgLAPAAQAOAAAIALIABAAIgBgFIAAgFIAAgfIAMAAIAABpIgKAAIgBgKIgBAAQgHAMgPAAQgPAAgIgKgAgPgFQgGAGAAAOQAAAPAGAHQAFAIAKgBQALABAFgHQAGgGgBgPIAAgCQABgPgGgGQgFgIgLABQgKgBgFAJg");
	this.shape_24.setTransform(90.75,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_25.setTransform(82.425,13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgUAmIAAhKIAJAAIABAOIAAAAQAFgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgFAIQgHAHAAALIAAAng");
	this.shape_26.setTransform(75.85,13.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AggA3IAAhsIAJAAIACALIABAAQAEgHAGgCQAFgDAHAAQAPAAAIALQAIAJAAATQAAASgIAJQgIALgPAAQgHAAgFgDQgHgDgDgFIgBAAIABANIAAAegAgQgmQgEAHAAAOIAAACQAAAPAEAHQAGAGAKAAQAKAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgKAAQgKAAgGAGg");
	this.shape_27.setTransform(68.45,14.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgUAmIAAhKIAJAAIABAOIABAAQAEgHAFgEQAGgEAGAAIAJABIgBAKIgIgBQgJAAgFAIQgHAHAAALIAAAng");
	this.shape_28.setTransform(58,13.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_29.setTransform(50.425,13.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgFAzIAAhKIALAAIAABKgAgEglQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQACACAAAEQAAAEgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgCAAgCgCg");
	this.shape_30.setTransform(44.475,11.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgVAmIAAhKIAKAAIABAOIABAAQAEgHAFgEQAGgEAGAAIAJABIgBAKIgIgBQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_31.setTransform(40.35,13.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgVAdQgJgKAAgTQgBgRAKgKQAIgLAOAAQAOAAAJAKQAHAJABAPIAAAGIgzAAQABAOAGAGQAGAHALAAQAMAAALgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQABgLgFgFQgFgHgJABQgIgBgFAHQgFAFgCALIAmAAIAAAAg");
	this.shape_32.setTransform(33.1,13.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AggA3IAAhsIAKAAIABALIABAAQAEgHAFgCQAHgDAGAAQAPAAAIALQAIAJAAATQAAASgIAJQgJALgOAAQgGAAgHgDQgFgDgEgFIgBAAIABANIAAAegAgPgmQgGAHABAOIAAACQgBAPAGAHQAFAGAKAAQAKAAAGgHQAFgHAAgOQAAgOgFgHQgGgIgKAAQgKAAgFAGg");
	this.shape_33.setTransform(25.1,14.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgXAgQgIgHAAgOIAAgwIAMAAIAAAvQAAAKAFAEQAEAFAIAAQALAAAFgHQAGgGAAgPIAAgmIALAAIAABKIgJAAIgBgKIgBAAQgDAFgHADQgGADgHAAQgOAAgGgGg");
	this.shape_34.setTransform(16.3,13.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgeAvIAAgMIANAFIAPABQAKAAAGgEQAGgEAAgIQAAgFgCgEQgDgEgEgCQgFgDgJgDQgOgFgGgHQgGgGAAgLQAAgLAJgIQAIgGANAAQAPgBANAGIgDAKQgNgFgMAAQgIAAgFAEQgFAEAAAHQAAAFABADQACAEAFADQAEACAJAEQAQAFAGAGQAGAGAAALQAAAMgKAIQgKAHgPABQgSgBgJgEg");
	this.shape_35.setTransform(8.25,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260.9,23.1);


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
	this.shape.setTransform(288.975,-20.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AASAlIgNgrIgFgSIAAAAIgEASIgPArIgMAAIgVhKIAMAAIALArIAEAUIABAAIADgKIACgKIAOgrIALAAIANArIAGAUIAAAAIACgJIAOg2IAMAAIgVBKg");
	this.shape_1.setTransform(279.25,-20.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_2.setTransform(269.575,-20.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgnAyIAAhjIAfAAQAWAAANANQANANAAAXQAAAYgNANQgOANgYAAgAgbAoIAOAAQAUAAALgKQAKgKAAgUQgBgTgJgKQgKgKgSAAIgRAAg");
	this.shape_3.setTransform(260.5,-21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_4.setTransform(248.025,-18.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAHAKQAIAJAAAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQAMAAANgFIAAAKIgMAEIgNABQgPAAgKgKgAAUgGQgBgLgEgFQgFgHgJABQgIgBgFAHQgGAFAAALIAmAAIAAAAg");
	this.shape_5.setTransform(240.6,-20.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_6.setTransform(232.425,-20.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_7.setTransform(223.875,-20.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAmAyIAAg/IABgZIgBAAIghBYIgJAAIgihYIAAAAIABAaIAAA+IgLAAIAAhjIARAAIAfBSIAAAAIAhhSIARAAIAABjg");
	this.shape_8.setTransform(213.35,-21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_9.setTransform(199.225,-20.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIABAbIAAA4IgLAAIAAhjIANAAIA2BSIAAAAIAAgLIgBgPIAAg4IALAAIAABjg");
	this.shape_10.setTransform(189.725,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgJARIAEgRIADgQIALAAIABACIgFAOIgGARg");
	this.shape_11.setTransform(178.925,-16.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_12.setTransform(174.975,-21.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMABQAIAAAFgDQAFgCAAgGQAAgEgEgEQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHgBgFADQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_13.setTransform(169.275,-20.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgVAdQgJgKAAgTQgBgRAJgKQAJgLAOAAQAPAAAHAKQAJAJAAAPIAAAGIgzAAQAAAOAHAGQAGAHAKAAQANAAAMgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQAAgLgFgFQgFgHgJABQgIgBgFAHQgGAFgBALIAnAAIAAAAg");
	this.shape_14.setTransform(162,-20.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgVAmIAAhKIAKAAIABAOIAAAAQAFgHAFgEQAFgEAIAAIAJABIgCAKIgIgBQgJAAgGAIQgGAHAAALIAAAng");
	this.shape_15.setTransform(155.7,-20.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAIAKQAHAJAAAPIAAAGIgyAAQABAOAGAGQAGAHAKAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAATgGQAAgLgEgFQgFgHgJABQgIgBgFAHQgFAFgBALIAlAAIAAAAg");
	this.shape_16.setTransform(148.45,-20.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_17.setTransform(142.025,-21.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_18.setTransform(135.375,-20.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_19.setTransform(129.1,-21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_20.setTransform(119.325,-20.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIABAbIAAA4IgLAAIAAhjIANAAIA2BSIAAAAIAAgLIgBgPIAAg4IALAAIAABjg");
	this.shape_21.setTransform(109.825,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgJARIAEgRIADgQIALAAIABACIgFAOIgGARg");
	this.shape_22.setTransform(99.025,-16.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMABQAIAAAFgDQAFgCAAgGQAAgEgEgEQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHgBgFADQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_23.setTransform(94.275,-20.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_24.setTransform(88.425,-21.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_25.setTransform(81.775,-20.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgVAdQgKgKAAgTQABgRAIgKQAJgLAOAAQAPAAAHAKQAJAJgBAPIAAAGIgyAAQAAAOAHAGQAGAHAKAAQAMAAANgFIAAAKIgMAEIgNABQgQAAgJgKgAAUgGQgBgLgEgFQgFgHgJABQgIgBgFAHQgGAFAAALIAmAAIAAAAg");
	this.shape_26.setTransform(73.55,-20.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgJAAQgKAAgGAGQgEAGAAAMIAAApIgLAAIAAgvQAAgJgEgFQgEgEgHAAQgLAAgFAGQgFAGAAAPIAAAmIgMAAIAAhKIAKAAIABALIABAAQAEgGAFgDQAGgDAIAAQARAAAFANIAAAAQADgGAHgEQAGgDAIAAQAMAAAHAHQAGAGAAAOIAAAwg");
	this.shape_27.setTransform(63.15,-20.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AghA1IAAgJIAIABQAMAAAFgNIAEgLIgehKIAMAAIAQArIAGAUIABAAIADgLIATg0IAMAAIggBUQgEANgGAFQgHAFgJAAIgKgBg");
	this.shape_28.setTransform(53.075,-18.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgWAhQgHgGAAgKQAAgWAjgBIANgBIAAgEQAAgJgEgEQgEgFgIAAQgIAAgMAGIgEgIIAMgFQAHgCAGAAQANAAAGAGQAHAGAAANIAAAyIgIAAIgCgKIgBAAQgGAHgGACQgFADgHAAQgMAAgFgGgAAHABQgMAAgGAEQgGAEAAAIQAAAGAEADQADADAHAAQAJAAAHgGQAFgFABgLIAAgHg");
	this.shape_29.setTransform(45.45,-20.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgfAyIAAhjIAaAAQAlAAAAAdQAAAQgKAHQgLAHgSAAIgMAAIAAAogAgTAAIALAAQAOAAAHgDQAHgGAAgLQAAgJgHgFQgGgFgNAAIgNAAg");
	this.shape_30.setTransform(37.925,-21.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_31.setTransform(25.575,-20.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAaAyIg2hTIAAAAIABAbIAAA4IgLAAIAAhjIANAAIA2BSIAAAAIAAgLIgBgPIAAg4IALAAIAABjg");
	this.shape_32.setTransform(16.075,-21.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFAlQgCgCAAgEQAAgGACgBQACgDADAAQAEAAACADQACABAAAGQAAAEgCACQgCADgEAAQgDgBgCgCgAgFgWQgCgCAAgFQAAgJAHAAQAIAAAAAJQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_33.setTransform(5.375,-20.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgZAiIAAgKQAFADAGABIAMABQAIAAAFgDQAFgCAAgGQAAgEgEgEQgEgDgKgEQgKgDgFgCQgEgDgCgEQgDgEAAgFQAAgJAIgGQAHgFAMAAQAMAAAMAFIgEAJQgLgEgJAAQgHgBgFADQgEADAAAEQAAADACADIAFADIAMAGQANAEAFAFQAFAEAAAIQAAAKgIAGQgIAGgNAAQgPAAgIgFg");
	this.shape_34.setTransform(0.225,-20.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AAUA1IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAOIAAAnIgLAAIAAhpIALAAIAAAgIAAAKIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAANIAAAxg");
	this.shape_35.setTransform(-7.375,-22.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AgKAYIAAgrIgLAAIAAgGIALgFIAEgQIAGAAIAAARIAWAAIAAAKIgWAAIAAArQAAAGADAEQADADAGAAIAGAAIAEgBIAAAJIgFABIgHABQgUAAAAgXg");
	this.shape_36.setTransform(-14.175,-21.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AAUAmIAAgvQAAgJgEgFQgEgEgJAAQgLAAgFAGQgGAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAGgDQAGgDAHAAQAOAAAHAHQAGAGAAAOIAAAwg");
	this.shape_37.setTransform(-20.825,-20.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgRAiQgIgEgEgKQgEgIAAgMQAAgSAJgJQAJgLAPAAQAQAAAJALQAJAKAAARQAAATgJAJQgJALgQAAQgJAAgIgFgAgQgVQgGAIAAANQAAAPAGAHQAGAIAKgBQALABAGgIQAGgHAAgPQAAgOgGgGQgGgIgLAAQgKAAgGAHg");
	this.shape_38.setTransform(-29.375,-20.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAqAmIAAgvQAAgJgEgFQgDgEgJAAQgKAAgFAGQgGAGAAAMIAAApIgKAAIAAgvQAAgJgEgFQgDgEgJAAQgKAAgFAGQgFAGAAAPIAAAmIgLAAIAAhKIAJAAIACALIAAAAQAEgGAFgDQAGgDAHAAQASAAAFANIAAAAQADgGAGgEQAHgDAIAAQANAAAGAHQAHAGgBAOIAAAwg");
	this.shape_39.setTransform(-40.05,-20.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AAMAyIAAgXIgwAAIAAgKIAuhCIANAAIAABCIAOAAIAAAKIgOAAIAAAXgAAGgaIgfArIAlAAIAAggIAAgWIAAAAg");
	this.shape_40.setTransform(-54.2,-21.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AggAzIAAgKIAagaIAPgRIAGgKQACgFAAgGQAAgIgFgEQgFgFgHAAQgHAAgFACQgGACgHAGIgGgIQAOgMAQAAQAOAAAIAIQAIAHAAAMQAAAJgGAKQgFAIgPAOIgVAWIAAAAIAzAAIAAALg");
	this.shape_41.setTransform(-62.225,-21.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-33.7,378.9,23.000000000000004);


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
	this.shape.graphics.f("#12127D").s().p("AgLAaIAAgvIgMAAIAAgGIAMgFIAFgRIAGAAIAAASIAXAAIAAAKIgXAAIAAAuQAAAHADAEQAEAEAGAAIAGAAIAFgBIAAAJIgGACIgHAAQgWAAAAgYg");
	this.shape.setTransform(256.525,1.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgTAfQgJgLAAgTQAAgUAJgLQALgLAQAAIAMABIAJADIgEALIgJgDIgIgBQgXAAAAAeQAAAPAFAIQAHAIAKAAQAKAAALgEIAAALQgJADgMAAQgQAAgKgKg");
	this.shape_1.setTransform(250.55,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgWAfQgLgLAAgTQAAgTAKgMQAJgLAPAAQAPAAAJAKQAJAKAAARIAAAGIg3AAQABAOAHAHQAHAIAKAAQANAAAOgGIAAAMIgNADIgOABQgQABgKgLgAAVgHQAAgMgGgFQgEgHgKAAQgIAAgGAHQgGAGgBALIApAAIAAAAg");
	this.shape_2.setTransform(242.65,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgQBHIAAgJIAKABQAGAAACgDQACgEAAgGIAAhdIAMAAIAABcQAAAYgVAAQgHAAgEgCgAAFg6QgCgCAAgEQAAgEACgCQACgCADAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_3.setTransform(235.55,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgSAlQgJgGgEgJQgFgKAAgMQAAgTAKgLQAKgLAQAAQARAAAKALQAKAMAAASQAAAUgKALQgKALgRgBQgKAAgIgEgAgRgXQgGAJAAAOQAAAPAGAIQAGAIALAAQAMABAGgJQAGgIAAgPQAAgOgGgJQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(230.125,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgWApIAAhQIAKAAIABAPIABAAQAFgHAFgFQAGgEAIAAIAJABIgBALIgJgBQgKAAgGAIQgHAIAAAMIAAAqg");
	this.shape_5.setTransform(223.1,1.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgiA7IAAh0IAKAAIABALIABAAQAEgGAHgDQAGgDAHAAQAQAAAJALQAIALAAAUQAAASgIALQgJALgQAAQgHAAgGgDQgHgDgEgGIgBAAIABAOIAAAhgAgRgpQgFAHAAAPIAAADQAAAQAFAHQAGAHAMAAQAKAAAGgIQAGgIAAgPQAAgPgGgIQgGgIgLAAQgLAAgGAHg");
	this.shape_6.setTransform(215.175,3.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgXAfQgKgLAAgTQAAgTAJgMQAKgLAPAAQAPAAAJAKQAJAKAAARIAAAGIg3AAQABAOAGAHQAHAIALAAQANAAANgGIAAAMIgMADIgOABQgQABgLgLgAAVgHQAAgMgFgFQgGgHgJAAQgIAAgHAHQgFAGgBALIApAAIAAAAg");
	this.shape_7.setTransform(202.35,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgWApIAAhQIAKAAIACAPIAAAAQAEgHAGgFQAGgEAHAAIAKABIgCALIgJgBQgJAAgGAIQgHAIAAAMIAAAqg");
	this.shape_8.setTransform(195.6,1.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgFA3IAAhQIALAAIAABQgAgEgoQgCgCAAgEQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(190.15,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AgLAaIAAgvIgMAAIAAgGIAMgFIAFgRIAGAAIAAASIAXAAIAAAKIgXAAIAAAuQAAAHADAEQAEAEAGAAIAGAAIAFgBIAAAJIgGACIgHAAQgWAAAAgYg");
	this.shape_10.setTransform(185.625,1.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAWApIAAgzQAAgKgFgFQgFgFgJAAQgMAAgFAHQgHAHABAQIAAApIgMAAIAAhQIAKAAIACALIAAAAQAEgFAGgEQAHgDAIAAQAOAAAHAHQAHAHABAPIAAA0g");
	this.shape_11.setTransform(178.45,1.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgWAfQgLgLAAgTQAAgTAKgMQAJgLAPAAQAPAAAJAKQAJAKAAARIAAAGIg3AAQABAOAHAHQAGAIAMAAQANAAANgGIAAAMIgNADIgNABQgRABgKgLgAAVgHQAAgMgGgFQgEgHgKAAQgJAAgFAHQgGAGgBALIApAAIAAAAg");
	this.shape_12.setTransform(169.65,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgHQAAgQAIgHQAIgHAQAAQANAAAKAEIgGASQgIgCgHAAQgFAAgDADQgCADAAAFIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_13.setTransform(158.85,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgHQAAgQAHgHQAJgHAPAAQAOAAAKAEIgGASQgIgCgHAAQgFAAgDADQgCADAAAFIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_14.setTransform(152.3,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgWAqQgLgFgGgMQgFgLAAgOQAAgWAMgNQAMgMAVAAQANAAAKAGQAKAGAGALQAFAKAAAOQAAAXgMAMQgMANgVAAQgMAAgKgGgAgNgUQgFAHAAANQAAAOAFAHQAEAHAJAAQAKAAAFgHQAEgHAAgOQAAgNgFgHQgDgGgLgBQgJABgEAGg");
	this.shape_15.setTransform(143.2,1.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgeAvQgMgQABgfQAAgfAKgPQAKgQAVAAQAVAAALAQQAKAQAAAeQAAAggKAQQgKAPgWgBQgUAAgKgPgAgMgeQgEAJAAAVQAAAWAEALQAEAJAIAAQAJAAAEgKQAEgJAAgXQAAgVgEgJQgEgKgJAAQgIAAgEAKg");
	this.shape_16.setTransform(128.7,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgfAvQgLgQAAgfQABgfAKgPQAKgQAVAAQAVAAALAQQALAQgBAeQABAggLAQQgKAPgWgBQgUAAgLgPgAgMgeQgEAJAAAVQAAAWAEALQAEAJAIAAQAJAAAEgKQAEgJAAgXQAAgVgEgJQgEgKgJAAQgIAAgEAKg");
	this.shape_17.setTransform(119,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgnA3IAAgWQAGAEAJACQAIACAIAAQAXAAgBgTQAAgTgXAAIgKABIgIACIgLgGIAGg8IBAAAIAAAVIgqAAIgCAYIACAAIAMgCQASAAAKALQALAIAAASQgBATgMAMQgMALgXgBQgUAAgMgGg");
	this.shape_18.setTransform(109.35,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFBGIAAgRQgVAAgPgHIAAgWQAIADAKADQAKACAIABIAAgZIgGgCQgQgGgHgIQgGgIgBgKQAAgNAKgHQAJgIARgCIAAgNIAKAAIAAANQAUABAOAGIgHAUQgNgFgOgBIAAAYQARAGAHAFQAGADADAGQADAGAAAGQAAAOgJAIQgJAIgSACIAAARgAAFAhQAMgDAAgHQAAgDgDgDIgJgFgAgPgaQgBADADADQACACAGACIAAgTQgKACAAAHg");
	this.shape_19.setTransform(99.65,-0.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgIApIAAggIggAAIAAgRIAgAAIAAggIARAAIAAAgIAgAAIAAARIggAAIAAAgg");
	this.shape_20.setTransform(85.5,-0.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAVA0QgIgJAAgTQAAglAdAAQAPAAAHAKQAIAJAAASQAAATgIAKQgHAJgPAAQgOAAgHgKgAAlAJQgCAFAAAKQAAALACAFQABAFAEAAQAIAAAAgVQAAgVgIAAQgEAAgBAGgAgqA9IBBh5IAVAAIhDB5gAg/AEQgHgJAAgSQAAgmAcAAQAOAAAIAKQAHAJAAATQAAATgHAIQgIAKgOAAQgNAAgIgKgAgwgnQgCAFAAALQAAAKACAGQACAFAEAAQAJAAAAgVQAAgVgJAAQgEAAgCAFg");
	this.shape_21.setTransform(68.6,-0.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgfAvQgKgQgBgfQAAgfALgPQALgQAUAAQAVAAALAQQALAQAAAeQAAAggLAQQgKAPgWgBQgUAAgLgPgAgMgeQgEAJAAAVQAAAWAEALQAEAJAIAAQAJAAAEgKQAEgJAAgXQAAgVgEgJQgEgKgJAAQgIAAgEAKg");
	this.shape_22.setTransform(56.1,-0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgpA+IAAgSIAegfIARgTQAEgEACgFQACgFAAgEQAAgIgEgDQgFgEgFAAQgHAAgHADQgHADgHAHIgNgRQAJgIAGgDIAMgFQAHgCAIABQALAAAJADQAJAFAEAHQAFAIAAAKQAAAHgCAIQgEAHgGAHQgGAIgQAOIgOAPIAAABIAzAAIAAAWg");
	this.shape_23.setTransform(46.45,-0.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgqAuQgPgQAAgeQAAgdAPgQQAPgRAbAAQAcAAAPARQAPAQAAAdQAAAegPAQQgPARgcgBQgbABgPgRgAgWgdQgIAKAAATQAAAUAIALQAIAKAOAAQAfAAAAgpQAAgogfAAQgOAAgIALg");
	this.shape_24.setTransform(30.425,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgiAuQgPgQAAgeQAAgcARgRQARgQAdAAQASAAASAHIgJAVQgNgHgPAAQgPAAgKALQgKALAAASQAAAUAIALQAIAKAOAAIARgCIAAgZIgXAAIAAgUIAwAAIAAA+QgMADgKACQgLABgKAAQgbAAgOgQg");
	this.shape_25.setTransform(17.325,-0.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgqAuQgPgQAAgeQAAgdAPgQQAPgRAbAAQAcAAAPARQAPAQAAAdQAAAegPAQQgPARgcgBQgbABgPgRgAgWgdQgIAKAAATQAAAUAIALQAIAKAOAAQAfAAAAgpQAAgogfAAQgOAAgIALg");
	this.shape_26.setTransform(4.625,-0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgsA9IAAh5IAlAAQAZAAAMAIQAMAHAAAQQAAALgGAHQgEAHgJABIAAABQALACAGAHQAFAHAAAMQAAAQgMAJQgMAKgVAAgAgSAoIARAAQAJAAAFgFQAFgEAAgIQAAgPgUAAIgQAAgAgSgMIAPAAQAJAAAEgDQAGgDAAgHQgBgHgFgDQgFgEgKAAIgNAAg");
	this.shape_27.setTransform(-7.5,-0.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgKASIAEgSIAEgSIAMAAIABACIgGAQIgFASg");
	this.shape_28.setTransform(-19.5,6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgkA5IAAgKIAJABQANAAAFgOIAFgLIghhQIANAAIASAuIAGAVIABAAIAEgLIAUg4IANAAIgjBaQgEAOgHAGQgHAFgKAAIgLgBg");
	this.shape_29.setTransform(-24.825,3.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgZAkQgGgHAAgLQAAgYAmAAIANgBIAAgFQAAgKgEgEQgEgEgJgBQgJAAgNAHIgDgJQAGgEAHgCIANgCQAOABAHAGQAHAGAAAOIAAA2IgJAAIgCgLIgBAAQgGAHgGADQgGADgIgBQgMAAgHgFgAAIABQgOAAgGAEQgHAFAAAIQAAAHAEADQAEADAIAAQAKAAAGgGQAHgGAAgLIAAgHg");
	this.shape_30.setTransform(-32.975,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AApA2IAAhEIABgbIgBAAIglBfIgJAAIgkhfIgBAAIABAbIAABEIgLAAIAAhqIATAAIAhBXIAAAAIAihXIATAAIAABqg");
	this.shape_31.setTransform(-43.625,0.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgbAlIAAgMQAGADAGACQAHABAGAAQAIAAAGgCQAFgDAAgHQAAgEgEgEQgEgDgLgFIgQgGQgFgDgCgEQgCgEAAgGQAAgJAHgGQAIgFANgBQANAAANAGIgFAKQgMgGgJAAQgIABgFACQgEADAAAEQAAAEACACQABADAEABIANAHQAOAEAFAFQAFAFAAAIQAAALgIAHQgIAFgOAAQgQAAgJgEg");
	this.shape_32.setTransform(-57.775,1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFA3IAAhQIALAAIAABQgAgEgoQgCgCAAgEQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(-63.25,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAVA5IAAg0QABgJgFgEQgEgGgKAAQgMAAgGAIQgFAGAAAPIAAAqIgNAAIAAhxIANAAIAAAiIgBALIABAAQAEgGAGgDQAGgDAIgBQAPAAAHAIQAIAGAAAOIAAA1g");
	this.shape_34.setTransform(-69.7,0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgGA2IAAhfIghAAIAAgLIBPAAIAAALIgiAAIAABfg");
	this.shape_35.setTransform(-78.45,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-14.2,373.4,27.1);


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
	this.shape.graphics.f("#B20000").s().p("AgPBLQgHgGAAgKQAAgJAGgGQAGgFAKAAQALAAAGAFQAFAGAAAJQAAAKgFAGQgHAFgKAAQgJAAgGgFgAgQAWIgGhlIAtAAIgFBlg");
	this.shape.setTransform(196.05,46.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgUBOIAAg7Ig0hhIAuAAIAaA6IAbg6IAuAAIgzBfIAAA9g");
	this.shape_1.setTransform(185.55,46.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgFgXIgFgTIgDASIgMAxIAgAAg");
	this.shape_2.setTransform(170.275,46.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAzBOIAAhEIAAgMIABgfIgBAAIggBvIgnAAIgghvIgBAAIACAsIAABDIgmAAIAAicIA5AAIAgBvIAAAAIAhhvIA5AAIAACcg");
	this.shape_3.setTransform(151.7,46.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgUBOIAAh5IgnAAIAAgjIB2AAIAAAjIgmAAIAAB5g");
	this.shape_4.setTransform(128.9,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgxA/QgRgQAAgfIAAhfIArAAIAABbQAAARAGAIQAGAIALAAQANAAAGgIQAGgIAAgRIAAhbIAqAAIAABeQAAAfgRARQgSARggAAQggAAgRgRg");
	this.shape_5.setTransform(114.075,46.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("Ag4A8QgTgVAAgnQAAgmATgVQAUgVAkAAQAmAAATAVQAUAUAAAnQAAAogUAUQgTAVgmAAQgkAAgUgVgAgeAAQgBAuAfAAQAQAAAIgMQAIgLAAgXQAAgXgIgLQgIgLgQAAQgeAAAAAtg");
	this.shape_6.setTransform(97,46.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AAZBOIAAhAIgxAAIAABAIgqAAIAAicIAqAAIAAA6IAxAAIAAg6IAqAAIAACcg");
	this.shape_7.setTransform(79.825,46.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgwA8QgTgVgBgnQABglAVgVQAWgWAmAAQAPAAANADQAOADAJAEIgOAiQgQgJgVAAQgRAAgKAMQgLAMABAWQgBAWAKALQAJAMAQAAQAJAAAJgCIAAgYIgcAAIAAggIBDAAIAABTQgbAKgiAAQgiAAgVgVg");
	this.shape_8.setTransform(63.1,46.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgxA/QgRgQAAgfIAAhfIArAAIAABbQAAARAGAIQAGAIALAAQANAAAGgIQAGgIAAgRIAAhbIAqAAIAABeQAAAfgRARQgSARggAAQggAAgRgRg");
	this.shape_9.setTransform(46.825,46.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("Ag3A8QgVgVABgnQgBgmAVgVQATgVAkAAQAmAAATAVQATAUABAnQgBAogTAUQgUAVglAAQgkAAgTgVgAgeAAQgBAuAfAAQAQAAAIgMQAIgLAAgXQAAgXgIgLQgIgLgQAAQgeAAAAAtg");
	this.shape_10.setTransform(29.75,46.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AATBOIggg5IgLAAIAAA5IgqAAIAAicIAzAAQA/AAAAAvQAAAbgaAOIAtBEgAgYgJIAIAAQAVgBAAgTQAAgQgUAAIgJAAg");
	this.shape_11.setTransform(14.575,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AAZBOIAAhAIgxAAIAABAIgqAAIAAicIAqAAIAAA6IAxAAIAAg6IAqAAIAACcg");
	this.shape_12.setTransform(-2.275,46.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgUBOIAAh5IgnAAIAAgjIB3AAIAAAjIgnAAIAAB5g");
	this.shape_13.setTransform(-17.15,46.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AggBPQgLgDgLgFIAAgmQAMAGANAEQANADALAAQAJAAAFgDQADgDAAgFQABgEgCgCIgGgFIgTgKQgQgHgIgGQgHgGgEgIQgEgJAAgMQAAgVAQgMQAQgNAaAAQAZAAAZAMIgNAgQgWgKgQAAQgHAAgEADQgEADAAAEQAAAFAFAEQAFADAUAKQAUAJAJAKQAHAKAAAQQAAAPgHALQgHALgOAHQgPAGgRAAQgQAAgLgCg");
	this.shape_14.setTransform(221.6,19.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgwA8QgTgVgBgnQAAglAXgVQAVgWAmAAQAPAAANADQAOADAJAEIgNAiQgSgJgUAAQgRAAgLAMQgKAMAAAWQAAAWAJALQAKAMAQAAQAJAAAJgCIAAgYIgcAAIAAggIBDAAIAABTQgcAKggAAQgjAAgVgVg");
	this.shape_15.setTransform(206.85,19.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AATBPIg4huIgBAAIACAmIAABIIgmAAIAAicIA4AAIA4BsIAAAAIgBgmIAAhGIAmAAIAACcg");
	this.shape_16.setTransform(189.775,19.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgUBPIAAicIApAAIAACcg");
	this.shape_17.setTransform(176.775,19.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgYBPIgzicIAvAAIAWBOQAGAaAAALIADgTIAEgSIAWhOIAvAAIgzCcg");
	this.shape_18.setTransform(165.325,19.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgFgXIgFgTIgDASIgMAxIAgAAg");
	this.shape_19.setTransform(149.725,19.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgfBPQgMgDgLgFIAAgmQAMAGANAEQANADALAAQAJAAAFgDQAEgDAAgFQgBgEgBgCIgGgFIgTgKQgQgHgIgGQgHgGgEgIQgEgJAAgMQAAgVAQgMQAQgNAaAAQAZAAAZAMIgNAgQgWgKgQAAQgHAAgEADQgEADAAAEQAAAFAFAEQAFADAUAKQAVAJAIAKQAHAKAAAQQAAAPgHALQgHALgOAHQgPAGgRAAQgQAAgKgCg");
	this.shape_20.setTransform(135.55,19.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgVBPIAAg9IgzhfIAuAAIAaA6IAbg6IAuAAIgzBeIAAA+g");
	this.shape_21.setTransform(116.1,19.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgFgXIgFgTIgDASIgMAxIAgAAg");
	this.shape_22.setTransform(100.825,19.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AhCBPIAAicIA3AAQAkAAAVATQAVATAAAlQAAAmgWAVQgWAWgmAAgAgXArIAJAAQASABAJgLQAJgMAAgWQAAgVgIgLQgJgLgQAAIgMAAg");
	this.shape_23.setTransform(85.125,19.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgzBPIAAicIArAAIAAB5IA8AAIAAAjg");
	this.shape_24.setTransform(65.1,19.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAiBPIgIgeIgyAAIgIAeIgvAAIAzidIA4AAIA0CdgAARAPIgHgZIgFgXIgFgTIgDASIgMAxIAgAAg");
	this.shape_25.setTransform(50.275,19.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgUBPIAAicIApAAIAACcg");
	this.shape_26.setTransform(38.475,19.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AATBPIggg5IgLAAIAAA5IgqAAIAAicIAzAAQA/AAAAAuQAAAbgaAOIAtBFgAgYgKIAIAAQAVABAAgUQAAgRgUAAIgJAAg");
	this.shape_27.setTransform(28.225,19.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("Ag3A8QgUgVAAgnQAAgmAUgVQATgVAkAAQAmAAATAVQAUAUAAAnQAAAogUAUQgTAVgmAAQgkAAgTgVgAgeAAQgBAuAfAAQAQAAAIgMQAIgLAAgXQAAgXgIgLQgIgLgQAAQgeAAAAAtg");
	this.shape_28.setTransform(11.05,19.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAzBPIAAhGIAAgLIABggIgBAAIggBxIgnAAIgghxIgBAAIACAsIAABFIgmAAIAAicIA5AAIAgBuIAAAAIAhhuIA4AAIAACcg");
	this.shape_29.setTransform(-8.3,19.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AguBPIAAicIBdAAIAAAhIgyAAIAAAZIAuAAIAAAiIguAAIAAAdIAyAAIAAAjg");
	this.shape_30.setTransform(-24.65,19.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAzBPIAAhGIAAgLIABggIgBAAIggBxIgnAAIgghxIgBAAIACAsIAABFIgmAAIAAicIA5AAIAgBuIAAAAIAhhuIA4AAIAACcg");
	this.shape_31.setTransform(-41.6,19.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,1.5,345.4,60.9);


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
	this.shape.setTransform(144.4768,92.0318,1.4536,1.4536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(50.6405,80.5022,1.4535,1.4535);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(89.1402,38.825,1.4535,1.4535);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(89.2319,40.7328,1.4535,1.4535);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(89.5071,35.2639,1.4535,1.4535);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(85.4527,30.122,1.4535,1.4535);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(82.7573,49.1088,1.4535,1.4535);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(83.7812,35.085,1.4535,1.4535);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(65.3939,81.8329,1.4535,1.4535);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(141.5733,73.854,1.4535,1.4535);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(137.2411,84.5172,1.4535,1.4535);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(136.5093,81.4488,1.4535,1.4535);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(137.3516,79.2301,1.4535,1.4535);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(138.1808,77.167,1.4535,1.4535);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(132.947,90.3166,1.4535,1.4535);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(146.8283,46.1654,1.4535,1.4535);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(112.5249,70.2214,1.4535,1.4535);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(118.8841,55.2137,1.4535,1.4535);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(76.3414,56.9495,1.4534,1.4534);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(88.6994,51.4266,1.4534,1.4534);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(61.9329,66.7931,1.4534,1.4534);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(68.0735,49.9778,1.4534,1.4534);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(55.2474,67.9485,1.4534,1.4534);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(91.7637,22.1197,1.4534,1.4534);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(75.9581,22.9766,1.4534,1.4534);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(84.3877,110.7368,1.4534,1.4534);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(92.9627,108.8353,1.4534,1.4534);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(89.414,109.8164,1.4534,1.4534);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(102.2644,102.8401,1.4534,1.4534);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(80.8659,110.4704,1.4534,1.4534);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(66.6564,103.6758,1.4534,1.4534);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(97.2865,106.9459,1.4534,1.4534);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(70.5443,107.3456,1.4534,1.4534);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(83.8064,109.9617,1.4534,1.4534);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(60.8792,103.3851,1.4534,1.4534);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(99.8375,69.64,1.4535,1.4535);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(103.2483,64.7399,1.4536,1.4536);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(126.0017,44.6007,1.4535,1.4535);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(45.5873,44.6007,1.4535,1.4535);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(45.5895,44.6029,1.4535,1.4535);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(85.8592,44.6071,1.4536,1.4536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(233.8159,50.4046,1.4533,1.4533);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(296.1621,50.4046,1.4533,1.4533);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(212.1618,50.223,1.4533,1.4533);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(354.0759,50.4046,1.4533,1.4533);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(333.2211,50.4409,1.4533,1.4533);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(314.619,50.4046,1.4533,1.4533);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(275.7434,50.4409,1.4533,1.4533);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(256.3782,50.4046,1.4533,1.4533);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(182.224,48.37,1.4533,1.4533);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(193.814,53.4929,1.4533,1.4533);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(354.2939,18.3958,1.4533,1.4533);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(186.9472,18.3595,1.4533,1.4533);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(326.0636,18.1415,1.4533,1.4533);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(297.0704,18.6865,1.4533,1.4533);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(267.2779,18.3958,1.4533,1.4533);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(239.0477,18.3958,1.4533,1.4533);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(211.7258,18.3958,1.4533,1.4533);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(269.752,79.9206,1.4535,1.4535);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(269.7612,67.8958,1.4535,1.4535);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,2.6,358.6,122.80000000000001);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(265));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(888,100,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({_off:false},0).to({y:45,alpha:1},14).wait(81));

	// Layer_1
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(615.95,60.5,1,1,0,0,0,130.4,11.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).to({y:55.5,alpha:1},12,cjs.Ease.get(1)).wait(95));

	// text3
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(601.75,62.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({y:54.6,alpha:1},14,cjs.Ease.get(1)).wait(107));

	// text2
	this.instance_3 = new lib.text3("synched",0);
	this.instance_3.setTransform(576.5,106.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({y:118.6,alpha:1},14,cjs.Ease.get(1)).wait(50).to({startPosition:0},0).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// text1
	this.instance_4 = new lib.text1("synched",0);
	this.instance_4.setTransform(602.25,16.6,1,1,0,0,0,74,25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({y:26.6,alpha:1},14,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(120));

	// logo
	this.instance_5 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_5.setTransform(296.1,-35.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).to({y:43,alpha:1},14,cjs.Ease.get(1)).wait(223));

	// bar
	this.instance_6 = new lib.bar("synched",0);
	this.instance_6.setTransform(280,5,1,1,0,0,0,80,5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({alpha:1},14).wait(237));

	// image3
	this.instance_7 = new lib.image3_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(235).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(15));

	// image2
	this.instance_8 = new lib.image2_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(188).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(32).to({alpha:0},15,cjs.Ease.get(1)).wait(15));

	// image1
	this.instance_9 = new lib.image1_1();
	this.instance_9.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(160).to({alpha:0},15,cjs.Ease.get(1)).wait(62));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},14,cjs.Ease.get(1)).wait(251));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(511,-21.8,514,136.8);
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