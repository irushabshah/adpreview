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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,200);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,200);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,200);// helper functions:

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
	this.shape.graphics.f("#12127D").s().p("AgNAOQgGgEAAgKQAAgJAGgFQAGgEAHAAQAJAAAGAEQAFAFAAAJQAAAKgFAEQgGAFgJAAQgHAAgGgFg");
	this.shape.setTransform(112.875,29.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_1.setTransform(103.825,25.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgUAzQgNgGgHgMQgGgNAAgUQAAgTAHgMQAIgNANgGQANgGAQAAQAKAAAJACQAJACAIAEIgLAcIgNgFQgGgBgGAAQgGAAgEADQgEADgCAGQgDAGAAAIQAAAKADAGQACAGAEACQAEADAGAAQAIAAAJgDQAIgCAHgFIAAAeQgHAFgIADQgJACgLAAQgQAAgMgGg");
	this.shape_2.setTransform(92.475,25.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgSBNIAAhtIAlAAIAABtgAgNgvQgGgDAAgJQAAgLAGgEQAFgCAIAAQAIAAAGACQAGAEAAALQAAAJgGADQgGAEgIAAQgIAAgFgEg");
	this.shape_3.setTransform(83.675,22.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgSA3IgqhtIAoAAIATBAIABAFIAAAGIAAAAIAAgGIACgFIAThAIAoAAIgqBtg");
	this.shape_4.setTransform(74.3,25.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgmA4IAAhtIAcAAIAGARIACAAQACgFAFgFQAFgEAGgDQAFgCAHAAIAGAAIAFABIgDAkIgFgBIgIAAIgIAAIgHADQgEACgDAFQgBAEAAAHIAAA2g");
	this.shape_5.setTransform(64.075,25.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_6.setTransform(52.675,25.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgXA4QgKgBgJgEIAAgfQAKAFALACQAKACAHAAIAJgBQACgBAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgEIgOgGQgJgEgGgFQgGgDgDgGQgDgHAAgJQAAgQAMgIQAMgIAUAAQALAAAKACQAJACAKAFIgKAZQgIgEgJgCQgIgDgFAAQgDAAgCACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAOAGQAJAEAHAEQAHAFADAFQACAHAAAJQAAALgEAIQgFAIgKAFQgLAEgQAAQgLAAgJgBg");
	this.shape_7.setTransform(41.4,25.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgSBMIAAiXIAlAAIAACXg");
	this.shape_8.setTransform(132.775,-2.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgjA1QgHgEgFgIQgEgHAAgNQAAgRAMgIQANgIAWgCIASAAIAAgCQAAgHgDgDQgEgDgGAAQgGAAgIACIgQAGIgLgZQAJgFANgDQALgCAPAAQAUAAAMAKQANAKAAAUIAABHIgbAAIgHgOIgBAAIgKAJQgFAEgFACQgHABgIAAQgKAAgIgEgAAFAGQgJABgEADQgEADgBAGQAAAGAEADQADACAEAAQAGAAAGgEQAEgFAAgHIAAgIg");
	this.shape_9.setTransform(123.05,-0.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAQA4IAAg7QAAgLgDgGQgEgFgGAAQgKAAgEAJQgDAIAAAQIAAAwIgnAAIAAhtIAdAAIAFAOIACAAQADgFAFgEQAFgDAGgCQAFgCAIAAQASAAALAJQAKAKAAAVIAABHg");
	this.shape_10.setTransform(110.45,-0.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_11.setTransform(97.425,-0.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgSBOIAAhuIAlAAIAABugAgNguQgGgEAAgKQAAgKAGgDQAFgEAIAAQAIAAAGAEQAGADAAAKQAAAKgGAEQgGADgIAAQgIAAgFgDg");
	this.shape_12.setTransform(87.825,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgIBAQgJgDgFgJQgEgIAAgPIAAgtIgOAAIAAgPIARgMIAKgXIAYAAIAAAWIAbAAIAAAcIgbAAIAAAqQAAAGADACQADADAFAAIAJgBIAJgCIAAAbIgNAFQgHABgKABQgLgBgHgDg");
	this.shape_13.setTransform(79.95,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("Ag1BQIAAidIAgAAIAFAOIACAAQACgFAEgDQAFgEAEgCQAFgCAJAAQARAAALAOQAKAPAAAcQABATgGALQgFANgJAHQgKAGgLAAQgIAAgFgCQgFgCgDgDIgGgGIgBAAIABAJIAAAKIAAAogAgIgvQgDADgBAFQgCAGAAAHIAAADIABAPQACAGADACQADADAFAAQAFAAADgCQADgCACgGQABgGABgKQgBgOgDgGQgEgGgHAAQgFAAgDACg");
	this.shape_14.setTransform(69.2,2.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_15.setTransform(56.375,-0.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgUAzQgNgGgHgMQgGgNAAgUQAAgTAHgMQAIgNANgGQANgGAQAAQAKAAAJACQAJACAIAEIgLAcIgNgFQgGgBgGAAQgGAAgEADQgEADgCAGQgDAGAAAIQAAAKADAGQACAGAEACQAEADAGAAQAIAAAJgDQAIgCAHgFIAAAeQgHAFgIADQgJACgLAAQgQAAgMgGg");
	this.shape_16.setTransform(45.025,-0.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AASA3IgSghIgSAhIgrAAIAjg3Ighg2IArAAIAQAfIARgfIArAAIgiA2IAkA3g");
	this.shape_17.setTransform(33.2,-0.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_18.setTransform(21.725,-1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AgNAOQgGgEAAgKQAAgJAGgFQAGgEAHAAQAJAAAGAEQAFAFAAAJQAAAKgFAEQgGAFgJAAQgHAAgGgFg");
	this.shape_19.setTransform(121.625,-21.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgXA4QgKgBgKgEIAAgfQALAFALACQALACAGAAIAJgBQACgBAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgEIgOgGQgKgEgFgFQgHgDgCgGQgDgHgBgJQAAgQANgIQAMgIAUAAQALAAAKACQAKACAKAFIgLAZQgIgEgIgCQgJgDgFAAQgDAAgCACQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAOAGQAKAEAGAEQAHAFADAFQACAHAAAJQAAALgEAIQgFAIgKAFQgKAEgQAAQgMAAgJgBg");
	this.shape_20.setTransform(113.65,-25.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgJBAQgIgEgEgHQgFgJAAgPIAAgsIgNAAIAAgQIARgMIAKgYIAYAAIAAAXIAbAAIAAAdIgbAAIAAAqQAAAFADADQACADAFAAIAKgCIAJgDIAAAdIgOAEQgHACgLgBQgJABgJgEg");
	this.shape_21.setTransform(103.85,-26.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AgUAzQgNgGgHgMQgGgNAAgUQAAgTAHgMQAIgNANgGQANgGAQAAQAKAAAJACQAJACAIAEIgLAcIgNgFQgGgBgGAAQgGAAgEADQgEADgCAGQgDAGAAAIQAAAKADAGQACAGAEACQAEADAGAAQAIAAAJgDQAIgCAHgFIAAAeQgHAFgIADQgJACgLAAQgQAAgMgGg");
	this.shape_22.setTransform(94.125,-25.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgiA0QgJgEgFgJQgFgJAAgOIAAhHIAmAAIAAA7QAAALADAFQAEAGAGAAQAHAAADgEQAEgEACgHQACgIgBgKIAAgwIAnAAIAABtIgdAAIgFgOIgCAAQgDAGgFAEIgMAFQgGABgGAAQgLAAgJgEg");
	this.shape_23.setTransform(81.9,-25.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgqA+QgKgOgBgcQABgbAKgPQAMgPASAAQAHAAAFACQAFADAEAEIAHAIIABAAIgBgMIgBgOIAAgeIAmAAIAACXIgcAAIgIgOIgCAAQgDAFgEADQgDAEgFACQgGACgHAAQgSAAgLgPgAgKAAQgEAGAAAOQAAAOAEAHQAFAGAGAAQAJAAAEgGQAEgGAAgMIAAgDQAAgNgDgHQgEgGgKAAQgGAAgFAGg");
	this.shape_24.setTransform(68.55,-27.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_25.setTransform(56.025,-25.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgmA4IAAhtIAcAAIAGARIACAAQACgFAFgFQAFgEAGgDQAFgCAHAAIAGAAIAFABIgDAkIgFgBIgIAAIgIAAIgHADQgEACgDAFQgBAEAAAHIAAA2g");
	this.shape_26.setTransform(45.525,-25.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("Ag1BQIAAidIAgAAIAFAOIACAAQACgFAEgDQAFgEAEgCQAFgCAIAAQASAAALAOQAKAPAAAcQABATgGALQgFANgJAHQgKAGgLAAQgIAAgFgCQgFgCgDgDIgGgGIgBAAIABAJIAAAKIAAAogAgIgvQgDADgBAFQgCAGAAAHIAAADIABAPQACAGADACQADADAFAAQAFAAADgCQADgCACgGQABgGAAgKQAAgOgDgGQgEgGgHAAQgFAAgDACg");
	this.shape_27.setTransform(34.1,-23.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgmA4IAAhtIAcAAIAGARIACAAQACgFAFgFQAFgEAGgDQAFgCAHAAIAGAAIAFABIgDAkIgFgBIgIAAIgIAAIgHADQgEACgDAFQgBAEAAAHIAAA2g");
	this.shape_28.setTransform(115.825,-50.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AgVA1QgKgDgIgIQgHgHgEgLQgEgKAAgOQAAgSAGgMQAHgNANgHQAMgGAQAAQAQAAANAGQAMAHAHANQAHAMAAASQAAAOgEAKQgEALgHAHQgHAIgKADQgKAEgNAAQgLAAgKgEgAgMgVQgEAIAAANQAAAJACAHQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQABgHAAgJQAAgJgBgGQgCgGgEgEQgDgDgGAAQgIAAgEAHg");
	this.shape_29.setTransform(104.275,-50.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgSBNIAAhtIAlAAIAABtgAgNguQgGgEAAgKQAAgKAGgDQAFgEAIAAQAIAAAGAEQAGADAAAKQAAAKgGAEQgGADgIAAQgIAAgFgDg");
	this.shape_30.setTransform(94.675,-52.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AgmA4IAAhtIAcAAIAGARIACAAQACgFAFgFQAFgEAGgDQAFgCAHAAIAGAAIAFABIgDAkIgFgBIgIAAIgIAAIgHADQgEACgDAFQgBAEAAAHIAAA2g");
	this.shape_31.setTransform(87.275,-50.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20000").s().p("AgYAzQgNgGgIgMQgHgNAAgTQAAgTAGgNQAHgNANgGQAMgGAPAAQAQAAAMAFQAMAGAGALQAGALAAARIAAAQIhDAAQABAJAGAFQAGAGAKAAQALAAAIgCIASgGIAAAbQgIAEgJACQgKACgOAAQgQAAgNgGgAATgNQAAgFgCgEQgCgEgEgCQgDgCgFAAQgGAAgFAEQgEAEgBAJIAgAAIAAAAg");
	this.shape_32.setTransform(75.875,-50.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20000").s().p("Ag1BQIAAidIAgAAIAFAOIACAAQADgFADgDQAEgEAFgCQAFgCAJAAQASAAAKAOQALAPgBAcQAAATgFALQgFANgJAHQgJAGgMAAQgIAAgFgCQgFgCgDgDIgGgGIgCAAIABAJIABAKIAAAogAgIgvQgDADgBAFQgCAGAAAHIAAADIABAPQABAGAEACQADADAFAAQAFAAADgCQAEgCABgGQACgGAAgKQAAgOgEgGQgEgGgHAAQgFAAgDACg");
	this.shape_33.setTransform(63.5,-48.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20000").s().p("AgiA0QgJgEgFgJQgFgJAAgOIAAhHIAmAAIAAA7QAAALAEAFQACAGAIAAQAGAAADgEQAFgEABgHQABgIAAgKIAAgwIAnAAIAABtIgdAAIgFgOIgCAAQgDAGgGAEIgKAFQgGABgHAAQgLAAgJgEg");
	this.shape_34.setTransform(50.2,-50.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20000").s().p("AgXBJIgNgEIgNgEIAAgjQALAGAMADQAMADAKAAQAEAAAEgCQAEgBACgCQABgDAAgDQAAgDgCgDIgIgFIgOgHIgPgIQgHgEgEgEQgFgFgCgGQgCgIAAgJQAAgNAHgKQAGgJAMgEQANgFAOgBQAPAAALAEQALADAJAEIgMAeIgSgHQgJgDgHABQgEgBgEACQgDABgBACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAADADACQACAEAGACIAQAIQAKAFAIAFQAHAFAEAIQAEAHAAALQAAAMgGAKQgGAKgMAHQgMAHgTAAg");
	this.shape_35.setTransform(37.9,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-68.4,148,107);


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
	this.shape.graphics.f("#12127D").s().p("AgMA9QgGgDAAgJQAAgKAGgDQAFgEAHAAQAHAAAGAEQAGADgBAKQABAJgGADQgGAEgHAAQgHAAgFgEgAgNASIgFhSIAlAAIgEBSg");
	this.shape.setTransform(102.5,-1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AAOAzIAAg2QAAgJgDgGQgDgFgGAAQgJAAgDAIQgDAIgBAOIAAAsIgiAAIAAhjIAaAAIAFANIABAAQADgEAFgEQAEgDAFgCQAGgCAGAAQAQAAAKAJQAJAJAAATIAABAg");
	this.shape_1.setTransform(93.9,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AAQAyIgLgsIgBgGIgCgJIgBgIIgBgGIAAAAIAAAGIgCAIIgBAJIgCAHIgKArIgkAAIgchjIAiAAIAIAmIACALIACAKIABALIAAAAIABgIIACgKIABgHIABgFIAJgoIAlAAIAJApIACAIIACALIABAKIAAAAIACgLIABgLIACgKIAJgmIAhAAIgbBjg");
	this.shape_2.setTransform(79.675,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgTAwQgJgDgHgHQgGgGgEgKQgEgKAAgMQAAgQAGgLQAGgMAMgGQALgGAOAAQAPAAALAGQALAGAGAMQAHALAAAQQAAAMgEAKQgDAKgHAGQgGAHgJADQgKAEgLAAQgKAAgJgEgAgKgTQgEAHAAAMQAAAIACAGQABAGAEADQADADAEAAQAGAAADgDQADgDABgGQACgGAAgIQAAgIgCgFQgBgGgDgDQgEgDgFAAQgHAAgDAGg");
	this.shape_3.setTransform(65.775,0.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("Ag2BAIAAh/IAtAAQATAAAPAHQAPAHAHAOQAHANAAAUQAAAWgIAPQgIAOgPAIQgPAHgUAAgAgTAkIAIAAQAOAAAIgJQAHgKAAgRQAAgMgCgIQgEgIgGgDQgGgEgJAAIgKAAg");
	this.shape_4.setTransform(53.7,-1.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgnBHIgGgBIAAgbIAFABIAGAAQAFAAAEgCQADgCACgEIAFgIIAAgBIgnhhIAkAAIARA5IAAADIABAEIAAAEIABAAIABgHIABgEIARg5IAjAAIgoBpQgEAMgGAIQgFAIgJAEQgJAEgNAAg");
	this.shape_5.setTransform(117.55,-20.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgWAuQgMgFgGgLQgHgMAAgRQAAgRAGgMQAGgLALgGQALgGAOAAQAPAAAKAGQALAFAGAKQAFAKAAAPIAAAOIg8AAQAAAIAFAFQAGAFAKAAQAJAAAIgCIAPgFIAAAYQgGAEgJACQgIACgOAAQgOAAgMgGgAARgLQAAgFgBgDIgFgGQgEgCgFAAQgEAAgFAEQgEADgBAJIAdAAIAAAAg");
	this.shape_6.setTransform(106.5,-22.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AAOAzIAAg2QAAgJgCgGQgDgFgHAAQgIAAgEAIQgDAIAAAOIAAAsIgjAAIAAhjIAbAAIAEANIACAAQADgEAEgEQAEgDAFgCQAGgCAHAAQAPAAAKAJQAKAJAAATIAABAg");
	this.shape_7.setTransform(94.95,-22.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgTAwQgJgDgHgHQgGgGgEgKQgEgKAAgMQAAgQAGgLQAGgMAMgGQALgGAOAAQAPAAALAGQALAGAGAMQAHALAAAQQAAAMgEAKQgDAKgHAGQgGAHgJADQgKAEgLAAQgKAAgJgEgAgKgTQgEAHAAAMQAAAIACAGQABAGAEADQADADAEAAQAGAAADgDQADgDABgGQACgGAAgIQAAgIgCgFQgBgGgDgDQgEgDgFAAQgHAAgDAGg");
	this.shape_8.setTransform(83.175,-22.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AAqBAIAAg4IAAgMIAAgNIAAgKIAAAAIgaBbIggAAIgahbIgBAAIABAJIABAOIAAAMIAAA4IgfAAIAAh/IAuAAIAaBaIAAAAIAbhaIAuAAIAAB/g");
	this.shape_9.setTransform(68.75,-23.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AgTAwQgJgDgHgHQgGgGgEgKQgEgKAAgMQAAgQAGgLQAGgMAMgGQALgGAOAAQAPAAALAGQALAGAGAMQAHALAAAQQAAAMgEAKQgDAKgHAGQgGAHgJADQgKAEgLAAQgKAAgJgEgAgKgTQgEAHAAAMQAAAIACAGQABAGAEADQADADAEAAQAGAAADgDQADgDABgGQACgGAAgIQAAgIgCgFQgBgGgDgDQgEgDgFAAQgHAAgDAGg");
	this.shape_10.setTransform(49.675,-22.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAPBAIgthZIgBAAIABAKIAAAMIAAAJIAAA6IgeAAIAAh/IAtAAIAuBYIABAAIgBgKIAAgLIAAgJIAAg6IAeAAIAAB/g");
	this.shape_11.setTransform(36.45,-23.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgTAaIAEgSIADgRIABgQIAeAAIABACIgEAQIgFARIgGAQg");
	this.shape_12.setTransform(128.6,-40.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgHA6QgIgEgEgHQgFgIABgNIAAgoIgNAAIAAgOIAQgLIAJgVIAWAAIAAAUIAYAAIAAAaIgYAAIAAAmQAAAFACACQADACAEAAIAIgBIAJgCIAAAZIgNAEQgGACgKAAQgIAAgHgDg");
	this.shape_13.setTransform(121.95,-45.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgVAyQgIgBgJgDIAAgcQAJAFAKACQAKACAGAAQAEAAADgCQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgEIgNgFQgJgEgFgEQgGgDgCgFQgDgGAAgIQAAgPALgHQALgIASAAQAKAAAIADQAJACAJAEIgJAWIgPgFIgMgCIgFABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIAFADIANAFQAIAEAGAEQAGAEACAFQADAFAAAJQAAAKgEAHQgEAHgKAEQgJAFgOAAQgLAAgIgCg");
	this.shape_14.setTransform(113.225,-44.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgWAuQgLgFgHgLQgHgMAAgRQAAgRAGgMQAGgLALgGQALgGAOAAQAPAAAKAGQALAFAGAKQAFAKAAAPIAAAOIg8AAQAAAIAFAFQAGAFAKAAQAJAAAIgCIAQgFIAAAYQgIAEgIACQgIACgOAAQgOAAgMgGgAARgLQAAgFgBgDIgGgGQgDgCgFAAQgFAAgEAEQgEADAAAJIAcAAIAAAAg");
	this.shape_15.setTransform(103,-44.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgiAzIAAhjIAZAAIAGAQIABAAQACgFAEgEQAEgEAGgCQAFgDAGAAIAGABIAEAAIgDAhIgEgBIgIAAIgHAAIgGADQgEACgCAEQgBAEAAAGIAAAxg");
	this.shape_16.setTransform(93.775,-45.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgVAuQgMgFgHgLQgHgMAAgRQAAgRAGgMQAHgLALgGQAKgGAOAAQAPAAAKAGQALAFAGAKQAFAKAAAPIAAAOIg8AAQAAAIAFAFQAGAFAJAAQAKAAAHgCIARgFIAAAYQgIAEgIACQgIACgNAAQgOAAgMgGgAARgLQAAgFgBgDIgGgGQgDgCgEAAQgFAAgFAEQgEADAAAJIAcAAIAAAAg");
	this.shape_17.setTransform(83.5,-44.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgHA6QgIgEgEgHQgFgIABgNIAAgoIgNAAIAAgOIAQgLIAJgVIAWAAIAAAUIAYAAIAAAaIgYAAIAAAmQAAAFACACQADACAEAAIAIgBIAJgCIAAAZIgNAEQgGACgKAAQgIAAgHgDg");
	this.shape_18.setTransform(73.8,-45.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AAOAzIAAg2QAAgJgCgGQgEgFgGAAQgJAAgDAIQgEAIABAOIAAAsIgiAAIAAhjIAaAAIAEANIABAAQADgEAFgEQAEgDAFgCQAFgCAIAAQAPAAAKAJQAKAJAAATIAABAg");
	this.shape_19.setTransform(63.7,-45.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgQBAIAAh/IAiAAIAAB/g");
	this.shape_20.setTransform(54.55,-46.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AgTAwQgJgDgHgHQgGgGgEgKQgEgKAAgMQAAgQAGgLQAGgMAMgGQALgGAOAAQAPAAALAGQALAGAGAMQAHALAAAQQAAAMgEAKQgDAKgHAGQgGAHgJADQgKAEgLAAQgKAAgJgEgAgKgTQgEAHAAAMQAAAIACAGQABAGAEADQADADAEAAQAGAAADgDQADgDABgGQACgGAAgIQAAgIgCgFQgBgGgDgDQgEgDgFAAQgHAAgDAGg");
	this.shape_21.setTransform(41.025,-44.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AAPBAIgthZIgBAAIABAKIABAMIAAAJIAAA6IgfAAIAAh/IAtAAIAuBYIABAAIgBgKIAAgLIAAgJIAAg6IAeAAIAAB/g");
	this.shape_22.setTransform(27.8,-46.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgTAaIAEgSIACgRIACgQIAeAAIABACIgEAQIgFARIgHAQg");
	this.shape_23.setTransform(137.35,-62.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgVAyQgIgBgJgDIAAgcQAJAFAKACQAKACAGAAQAEAAADgCQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgFgEIgNgFQgJgEgFgEQgGgDgCgFQgDgGAAgIQAAgPALgHQALgIASAAQAKAAAIADQAJACAJAEIgJAWIgPgFIgMgCIgFABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIAFADIANAFQAIAEAGAEQAGAEACAFQADAFAAAJQAAAKgEAHQgEAHgKAEQgJAFgOAAQgLAAgIgCg");
	this.shape_24.setTransform(130.225,-67.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgIA6QgHgEgEgHQgFgIABgNIAAgoIgNAAIAAgOIAQgLIAJgVIAWAAIAAAUIAYAAIAAAaIgYAAIAAAmQAAAFACACQADACAEAAIAIgBIAIgCIAAAZIgMAEQgGACgKAAQgIAAgIgDg");
	this.shape_25.setTransform(121.4,-68.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AAOAzIAAg2QAAgJgDgGQgDgFgGAAQgIAAgEAIQgDAIAAAOIAAAsIgiAAIAAhjIAaAAIAEANIABAAQAEgEAEgEQAEgDAFgCQAFgCAIAAQAPAAAKAJQAKAJAAATIAABAg");
	this.shape_26.setTransform(111.3,-67.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgVAuQgMgFgHgLQgHgMAAgRQAAgRAGgMQAHgLALgGQAKgGAOAAQAPAAAKAGQALAFAGAKQAFAKAAAPIAAAOIg8AAQAAAIAFAFQAGAFAJAAQAKAAAHgCIARgFIAAAYQgIAEgIACQgIACgNAAQgOAAgMgGgAARgLQAAgFgCgDIgFgGQgDgCgEAAQgFAAgFAEQgEADAAAJIAcAAIAAAAg");
	this.shape_27.setTransform(99.7,-67.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AAsAzIAAg1QAAgMgDgEQgDgFgGAAQgJAAgDAIQgDAHAAAMIAAAvIghAAIAAg1QAAgIgCgEQgBgEgCgCQgDgDgEAAQgGAAgDAEQgDAEgCAGQgBAHAAAJIAAAsIgiAAIAAhjIAaAAIAFAMIABAAQACgEAEgDIAKgFQAGgCAHAAQALAAAHAEQAHAEAEAGIABAAQAFgGAHgEQAIgEAJAAQARAAAJAJQAJAJAAATIAABAg");
	this.shape_28.setTransform(85.175,-67.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgnBHIgGgBIAAgbIAEABIAGAAQAGAAAEgCQAEgCACgEIADgIIABgBIgnhhIAkAAIARA5IABADIAAAEIAAAEIAAAAIABgHIABgEIARg5IAkAAIgnBpQgFAMgGAIQgFAIgJAEQgJAEgNAAg");
	this.shape_29.setTransform(70.7,-65.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgfAwQgHgEgEgHQgEgHAAgLQAAgQALgGQALgIAVgBIAQgBIAAgBQAAgHgDgDQgEgCgFAAQgFAAgHACIgPAFIgKgXQAIgEAMgCQALgDAMAAQATAAALAKQAKAJAAARIAABBIgXAAIgHgNIgBAAIgIAIQgFADgFACQgFACgJAAQgJAAgGgEgAAFAGQgJAAgDADQgEADAAAFQAAAFADADQADACAEAAQAFAAAFgEQAEgEAAgGIAAgIg");
	this.shape_30.setTransform(59.35,-67.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AguBAIAAh/IAtAAQAYAAALAKQAMALABAUQgBAIgCAIQgCAIgGAGQgFAGgKAEQgJAEgNAAIgKAAIAAAqgAgLgGIAHAAQAEAAAEgBQADgCADgDQACgEAAgFQAAgHgEgDQgEgEgGAAIgJAAg");
	this.shape_31.setTransform(48.7,-68.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgTAwQgJgDgHgHQgGgGgEgKQgEgKAAgMQAAgQAGgLQAGgMAMgGQALgGAOAAQAPAAALAGQALAGAGAMQAHALAAAQQAAAMgEAKQgDAKgHAGQgGAHgJADQgKAEgLAAQgKAAgJgEgAgKgTQgEAHAAAMQAAAIACAGQABAGAEADQADADAEAAQAGAAADgDQADgDABgGQACgGAAgIQAAgIgCgFQgBgGgDgDQgEgDgFAAQgHAAgDAGg");
	this.shape_32.setTransform(32.275,-67.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AAQBAIguhZIgBAAIABAKIABAMIAAAJIAAA6IgfAAIAAh/IAtAAIAuBYIABAAIgBgKIAAgLIAAgJIAAg6IAeAAIAAB/g");
	this.shape_33.setTransform(19.05,-68.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgMAwQgGgEABgJQgBgKAGgDQAFgEAIAAQAGAAAGAEQAFADABAKQgBAJgFAEQgGADgGAAQgIAAgFgDgAgMgVQgGgEABgIQgBgKAGgEQAFgDAIAAQAGAAAGADQAFAEABAKQgBAIgFAEQgGAFgGAAQgIAAgFgFg");
	this.shape_34.setTransform(124.05,-89.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgVAyQgIgBgJgDIAAgcQAJAFAKACQAKACAGAAQAEAAADgCQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgEIgNgFQgJgEgFgEQgGgDgCgFQgDgGAAgIQAAgPALgHQALgIASAAQAKAAAIADQAJACAJAEIgJAWIgPgFIgMgCIgFABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABIAFADIANAFQAIAEAGAEQAGAEACAFQADAFAAAJQAAAKgEAHQgEAHgKAEQgJAFgOAAQgLAAgIgCg");
	this.shape_35.setTransform(116.825,-89.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAOBEIAAg2QAAgKgDgEQgDgFgGAAQgFAAgEADQgDAEgCAGQgCAHAAAJIAAAsIghAAIAAiHIAhAAIAAATIAAATIgBALIACAAQADgFAEgDQAFgDADgCQAGgBAFAAQAKAAAIAEQAIADAFAJQAFAIgBAMIAABAg");
	this.shape_36.setTransform(106.15,-91.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AgHA6QgIgEgEgHQgEgIAAgNIAAgoIgMAAIAAgOIAPgLIAJgVIAWAAIAAAUIAYAAIAAAaIgYAAIAAAmQgBAFADACQACACAFAAIAIgBIAJgCIAAAZIgNAEQgGACgJAAQgKAAgGgDg");
	this.shape_37.setTransform(95.95,-90.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AAOAzIAAg2QAAgJgCgGQgEgFgGAAQgJAAgDAIQgEAIABAOIAAAsIgiAAIAAhjIAaAAIAEANIACAAQADgEAEgEQAEgDAFgCQAFgCAIAAQAPAAAKAJQAKAJAAATIAABAg");
	this.shape_38.setTransform(85.85,-90.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AgTAwQgJgDgHgHQgGgGgEgKQgEgKAAgMQAAgQAGgLQAGgMAMgGQALgGAOAAQAPAAALAGQALAGAGAMQAHALAAAQQAAAMgEAKQgDAKgHAGQgGAHgJADQgKAEgLAAQgKAAgJgEgAgKgTQgEAHAAAMQAAAIACAGQABAGAEADQADADAEAAQAGAAADgDQADgDABgGQACgGAAgIQAAgIgCgFQgBgGgDgDQgEgDgFAAQgHAAgDAGg");
	this.shape_39.setTransform(74.075,-89.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AAqBAIAAg4IAAgMIAAgNIABgKIgBAAIgaBbIggAAIgbhbIAAAAIAAAJIACAOIAAAMIAAA4IgfAAIAAh/IAuAAIAaBaIAAAAIAbhaIAuAAIAAB/g");
	this.shape_40.setTransform(59.65,-91.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AACBAIAAgZIgzAAIAAgZIA1hNIAgAAIAABMIAOAAIAAAaIgOAAIAAAZgAgBgNIgDAGIgPAUIAVAAIAAgNIAAgGIAAgGIAAgFIAAgCIgBAAg");
	this.shape_41.setTransform(41.075,-91.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#12127D").s().p("AgtBBIAAgXIAfgfIAPgQQAFgGACgEQACgEAAgFQAAgGgDgCQgEgDgEAAQgGAAgGAEIgOAKIgTgXIAMgJQAHgFAIgDQAJgDAMAAQANAAAKAEQAJAFAGAIQAFAIAAAKQAAALgEAJQgEAJgIAIIgVATIgIAJIAAABIAvAAIAAAcg");
	this.shape_42.setTransform(30.425,-91.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-106.2,148,118.5);


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
	this.shape.graphics.f("#B20000").s().p("AgMA9QgGgDABgJQgBgKAGgDQAGgEAGAAQAIAAAFAEQAGADAAAKQAAAJgGADQgFAEgIAAQgGAAgGgEgAgNASIgFhSIAlAAIgFBSg");
	this.shape.setTransform(98.2,97.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgQBAIAAgxIgrhOIAmAAIAVAvIAWgvIAmAAIgqBNIAAAyg");
	this.shape_1.setTransform(89.625,97.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAbBAIgGgYIgpAAIgGAYIgmAAIAqh/IAtAAIAqB/gAAOAMIgGgUIgCgKIgDgNIgDgMIgBALIgDAOIgDAKIgFAUIAaAAg");
	this.shape_2.setTransform(77.125,97.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAqBAIAAg4IAAgMIAAgNIABgKIgBAAIgaBbIggAAIgbhbIAAAAIAAAJIACAOIAAAMIAAA4IgfAAIAAh/IAuAAIAaBaIAAAAIAbhaIAuAAIAAB/g");
	this.shape_3.setTransform(61.9,97.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgQBAIAAhjIggAAIAAgcIBhAAIAAAcIggAAIAABjg");
	this.shape_4.setTransform(136.675,76.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgoAzQgOgNAAgZIAAhNIAjAAIAABKQAAAOAFAGQAGAGAIAAQAHAAAFgDQAFgCABgGQADgGAAgJIAAhKIAiAAIAABMQAAAQgGAMQgGAMgMAHQgNAGgSAAQgaAAgOgOg");
	this.shape_5.setTransform(124.55,76.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgbA9QgLgEgJgJQgHgJgDgMQgEgMgBgPQABgTAGgPQAHgPAOgIQAOgIAUAAQAXAAANAIQAOAIAGAPQAHAPgBATQABAPgEAMQgDAMgIAJQgIAJgLAEQgMAFgRAAQgPAAgMgFgAgOggQgFAEgDAJQgDAIAAALQAAALADAJQADAIAFAFQAGAEAIAAQAKAAAFgEQAGgFADgIQACgJAAgLQAAgRgFgKQgHgKgOAAQgIAAgGAFg");
	this.shape_6.setTransform(110.6,76.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AAUBAIAAg0IgnAAIAAA0IgjAAIAAh/IAjAAIAAAvIAnAAIAAgvIAjAAIAAB/g");
	this.shape_7.setTransform(96.6,76.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgZA7QgOgHgIgPQgIgPAAgWQAAgUAIgOQAHgPAQgIQAPgIAVAAQAMAAAKACQALACAJAEIgMAbQgGgDgIgCQgHgCgJAAQgLAAgGAGQgIAFgDAIQgDAJAAAKQAAALAEAJQADAIAHAEQAFAEAJAAIAHAAIAHgBIAAgUIgWAAIAAgaIA3AAIAABEQgKAEgNACQgNACgOAAQgRAAgOgHg");
	this.shape_8.setTransform(82.9,76.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgoAzQgOgNAAgZIAAhNIAjAAIAABKQAAAOAFAGQAGAGAIAAQAHAAAFgDQAFgCACgGQABgGAAgJIAAhKIAjAAIAABMQAAAQgGAMQgGAMgNAHQgMAGgSAAQgaAAgOgOg");
	this.shape_9.setTransform(69.6,76.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgbA9QgMgEgHgJQgIgJgEgMQgDgMAAgPQgBgTAIgPQAGgPAOgIQANgIAWAAQAWAAANAIQAOAIAGAPQAGAPABATQgBAPgDAMQgDAMgIAJQgIAJgLAEQgMAFgRAAQgPAAgMgFgAgOggQgGAEgCAJQgDAIAAALQAAALADAJQACAIAGAFQAGAEAIAAQAJAAAHgEQAFgFACgIQADgJAAgLQAAgRgGgKQgFgKgOAAQgJAAgGAFg");
	this.shape_10.setTransform(55.65,76.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAQBAIgagvIgJAAIAAAvIgjAAIAAh/IAqAAQAQAAAMAEQALAEAHAJQAFAIAAANQAAAIgDAGQgCAGgFAFQgEAEgHAEIAlA4gAgTgIIAGAAQAIAAAFgDQAFgEAAgJQAAgGgFgDQgDgEgJAAIgHAAg");
	this.shape_11.setTransform(43.25,76.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AAUBAIAAg0IgnAAIAAA0IgjAAIAAh/IAjAAIAAAvIAnAAIAAgvIAjAAIAAB/g");
	this.shape_12.setTransform(29.5,76.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgQBAIAAhjIggAAIAAgcIBhAAIAAAcIggAAIAABjg");
	this.shape_13.setTransform(17.325,76.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgUBBIgMgCIgMgFIAAgfQALAFAKADQAKADAKAAIAHgBIAEgEQACgCAAgDQAAgDgCgCIgIgFIgMgHIgNgHQgGgDgEgEQgEgEgCgGQgCgGAAgIQAAgNAGgIQAGgJALgEQALgEANAAQANAAAKADIASAGIgLAbIgQgGQgIgCgHAAIgGABQgDABgCACIgBAEQAAADACACQADADAEACIAQAIQAJAEAHAFQAGAEAEAGQADAHAAAKQAAALgFAJQgGAJgKAGQgMAGgQAAg");
	this.shape_14.setTransform(112.3,54.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgZA7QgOgHgIgPQgIgPAAgWQAAgUAIgOQAIgPAPgIQAPgIAUAAQANAAALACQAKACAJAEIgLAbQgIgDgHgCQgIgCgIAAQgLAAgHAGQgGAFgEAIQgDAJAAAKQAAALAEAJQADAIAGAEQAGAEAJAAIAIAAIAGgBIAAgUIgWAAIAAgaIA3AAIAABEQgKAEgNACQgMACgOAAQgTAAgNgHg");
	this.shape_15.setTransform(100.2,54.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAQBAIguhZIgBAAIABAKIABAMIAAAJIAAA6IgfAAIAAh/IAtAAIAuBYIABAAIgBgKIAAgLIAAgJIAAg6IAeAAIAAB/g");
	this.shape_16.setTransform(86.2,54.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgQBAIAAh/IAhAAIAAB/g");
	this.shape_17.setTransform(75.6,54.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgUBAIgph/IAnAAIARBAIACAJIACAMIABAJIACgJIABgLIACgKIAShAIAoAAIgqB/g");
	this.shape_18.setTransform(66.25,54.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAbBAIgGgXIgpAAIgGAXIgmAAIAqh/IAtAAIAqB/gAAOAMIgGgUIgCgKIgDgNIgDgMIgBAMIgDANIgDAKIgFAUIAaAAg");
	this.shape_19.setTransform(53.475,54.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgUBBIgMgCIgMgFIAAgfQAKAFALADQALADAJAAIAHgBIAFgEQABgCAAgDQAAgDgCgCIgIgFIgMgHIgNgHQgGgDgEgEQgEgEgCgGQgCgGAAgIQAAgNAGgIQAGgJALgEQALgEANAAQANAAAKADIASAGIgKAbIgRgGQgIgCgHAAIgGABQgDABgCACIgBAEQAAADACACQADADAEACIAQAIQAJAEAHAFQAGAEAEAGQADAHAAAKQAAALgGAJQgFAJgKAGQgMAGgRAAg");
	this.shape_20.setTransform(41.9,54.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgQBAIAAgxIgrhOIAmAAIAVAvIAWgvIAmAAIgqBNIAAAyg");
	this.shape_21.setTransform(90.125,33.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAbBAIgGgXIgpAAIgGAXIgmAAIAqiAIAtAAIAqCAgAAOAMIgGgUIgCgKIgDgNIgDgMIgBAMIgDAMIgDALIgFAUIAaAAg");
	this.shape_22.setTransform(77.625,33.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("Ag1BAIAAh/IAsAAQAUAAAOAHQAOAHAIAOQAHANABAUQgBAWgIAPQgIAOgQAIQgOAHgUAAgAgTAkIAIAAQAOAAAIgJQAHgKAAgRQAAgMgCgIQgEgIgGgDQgGgEgJAAIgKAAg");
	this.shape_23.setTransform(64.75,33.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgpBAIAAh/IAiAAIAABjIAxAAIAAAcg");
	this.shape_24.setTransform(122.55,11.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAbBBIgGgYIgpAAIgGAYIgmAAIAqiBIAtAAIAqCBgAAOAMIgGgUIgCgKIgDgNIgDgLIgBALIgDAMIgDALIgFAUIAaAAg");
	this.shape_25.setTransform(110.425,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgQBAIAAh/IAhAAIAAB/g");
	this.shape_26.setTransform(100.8,11.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AAQBAIgagvIgJAAIAAAvIgjAAIAAh/IAqAAQARAAALAEQALAEAHAJQAFAIABANQgBAIgDAGQgCAGgFAFQgEAEgIAEIAmA4gAgTgIIAGAAQAIAAAFgDQAFgEAAgJQAAgGgFgDQgDgEgJAAIgHAAg");
	this.shape_27.setTransform(92.4,11.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgbA9QgLgEgIgJQgIgJgDgMQgFgMAAgPQAAgTAIgPQAGgPAOgIQANgIAVAAQAXAAANAIQAOAIAGAPQAGAPAAATQAAAPgDAMQgEAMgHAJQgIAJgMAEQgMAFgQAAQgPAAgMgFgAgOggQgGAEgCAJQgDAIAAALQAAALADAJQACAIAGAFQAGAEAIAAQAJAAAHgEQAFgFADgIQACgJAAgLQAAgRgGgKQgFgKgPAAQgIAAgGAFg");
	this.shape_28.setTransform(78.35,11.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAqBAIAAg4IAAgMIAAgNIABgKIgBAAIgaBbIggAAIgbhbIAAAAIAAAJIABAOIAAAMIAAA4IgeAAIAAh/IAuAAIAaBaIABAAIAahaIAuAAIAAB/g");
	this.shape_29.setTransform(62.5,11.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AglBAIAAh/IBLAAIAAAcIgpAAIAAAUIAmAAIAAAbIgmAAIAAAYIApAAIAAAcg");
	this.shape_30.setTransform(49.15,11.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAqBAIAAg4IAAgMIAAgNIABgKIgBAAIgaBbIggAAIgbhbIAAAAIAAAJIABAOIAAAMIAAA4IgeAAIAAh/IAuAAIAaBaIAAAAIAbhaIAuAAIAAB/g");
	this.shape_31.setTransform(35.25,11.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.2,154,114.5);


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
	this.shape.setTransform(102.7804,68.9586,0.7289,0.7289);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(55.7274,63.1793,0.7289,0.7289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(75.034,42.2792,0.7289,0.7289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(75.08,43.2359,0.7289,0.7289);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(75.218,40.4934,0.7289,0.7289);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(73.1848,37.9149,0.7289,0.7289);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(71.8332,47.4363,0.7289,0.7289);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(72.3466,40.4037,0.7289,0.7289);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(63.1259,63.8466,0.7289,0.7289);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(101.3271,59.8449,0.7289,0.7289);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(99.1546,65.1921,0.7289,0.7289);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(98.7876,63.6534,0.7289,0.7289);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(99.21,62.5408,0.7289,0.7289);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(99.6258,61.5062,0.7289,0.7289);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(97.0021,68.1009,0.7289,0.7289);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(103.9632,45.9602,0.7289,0.7289);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(86.7608,58.0237,0.7289,0.7289);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(89.9498,50.4977,0.7289,0.7289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(68.6158,51.3682,0.7288,0.7288);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(74.813,48.5986,0.7288,0.7288);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(61.3903,56.3045,0.7288,0.7288);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(64.4696,47.8721,0.7288,0.7288);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(58.0376,56.8839,0.7288,0.7288);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(76.3496,33.9019,0.7288,0.7288);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(68.4236,34.3316,0.7288,0.7288);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(72.6508,78.3412,0.7288,0.7288);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(76.9509,77.3876,0.7288,0.7288);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(75.1714,77.8796,0.7288,0.7288);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(81.6155,74.3812,0.7288,0.7288);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(70.8847,78.2076,0.7288,0.7288);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(63.759,74.8003,0.7288,0.7288);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(79.1192,76.4402,0.7288,0.7288);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(65.7086,76.6406,0.7288,0.7288);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(72.3593,77.9525,0.7288,0.7288);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(60.8619,74.6545,0.7288,0.7288);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(80.3985,57.7322,0.7289,0.7289);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(82.1062,55.273,0.7289,0.7289);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(93.5184,45.1752,0.7289,0.7289);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(53.193,45.1752,0.7289,0.7289);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(53.1944,45.1767,0.7289,0.7289);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(73.3864,45.1774,0.7289,0.7289);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(147.588,48.0869,0.7288,0.7288);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(178.8538,48.0869,0.7288,0.7288);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(136.7288,47.9958,0.7288,0.7288);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(207.8967,48.0869,0.7288,0.7288);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(197.4383,48.1051,0.7288,0.7288);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(188.1096,48.0869,0.7288,0.7288);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(168.614,48.1051,0.7288,0.7288);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(158.9027,48.0869,0.7288,0.7288);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(121.7154,47.0666,0.7288,0.7288);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(127.5276,49.6356,0.7288,0.7288);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(208.006,32.0349,0.7288,0.7288);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(124.084,32.0167,0.7288,0.7288);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(193.8489,31.9074,0.7288,0.7288);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(179.3093,32.1807,0.7288,0.7288);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(164.3687,32.0349,0.7288,0.7288);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(150.2117,32.0349,0.7288,0.7288);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(136.5102,32.0349,0.7288,0.7288);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(165.6048,62.8871,0.7289,0.7289);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(165.6109,56.8575,0.7289,0.7289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.3,24.1,179.89999999999998,61.6);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,140,200), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,140,200), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,140,200), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATA5IgbgsIgMAAIAAAsIgZAAIAAhxIAhAAQAPAAALADQAKAEAFAIQAEAHAAAMQAAAIgCAFQgDAGgFADQgFAEgGADIAhAygAgUgGIAIAAQALAAAFgDQAFgEAAgIQAAgJgFgDQgGgDgLAAIgHAAg");
	this.shape.setTransform(100.25,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAZIAmAAIAAATIgmAAIAAAdIApAAIAAAUg");
	this.shape_1.setTransform(90.025,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAdIAmAAIAAATIgmAAIAAAtg");
	this.shape_2.setTransform(81.275,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAdIAmAAIAAATIgmAAIAAAtg");
	this.shape_3.setTransform(72.525,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA3QgLgFgGgHQgHgIgDgLQgDgLAAgNQAAgRAFgNQAGgNAMgHQAMgIASAAQATAAAMAIQAMAHAGANQAFANAAARQAAANgDALQgDALgHAIQgHAHgKAFQgKAEgOAAQgNAAgKgEgAgQghQgGAFgDAIQgDAJAAALQAAAMADAJQADAIAGAFQAHAFAJAAQAKAAAHgFQAGgFADgIQADgJAAgMQAAgRgHgKQgHgLgPAAQgJAAgHAFg");
	this.shape_4.setTransform(61.475,0.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA5IAAhdIgfAAIAAgUIBVAAIAAAUIgfAAIAABdg");
	this.shape_5.setTransform(46.325,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAZIAmAAIAAATIgmAAIAAAdIApAAIAAAUg");
	this.shape_6.setTransform(37.475,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA0QgMgHgGgNQgGgNAAgTQAAgRAHgNQAHgNANgHQAOgIASAAQAJAAAJACIAQAFIgIAUIgMgFIgOgBQgLAAgHAEQgIAFgEAJQgEAJAAAKQAAAMADAIQADAJAHAFQAGAFAKAAIAIgBIAHgBIAAgYIgWAAIAAgTIAuAAIAAA6IgTAFQgKACgMAAQgQAAgMgHg");
	this.shape_7.setTransform(26.825,0.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CC14C").s().p("Ap1CWIAAkrITrAAIAAErg");
	this.shape_8.setTransform(63,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,126,30);


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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.shape.graphics.f("#6CC14C").s().p("AgdTiMAAAgnDIA7AAMAAAAnDg");
	this.shape.setTransform(3,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,250);


// stage content:
(lib.WBAY_214318_MM_300x250_V3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(223,205,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({x:221.5,y:177,alpha:1},14).wait(134).to({startPosition:0},0).to({regX:63.1,regY:15.1,scaleX:1.0404,scaleY:1.0404},7,cjs.Ease.get(1)).to({regX:63,regY:15,scaleX:1,scaleY:1},7,cjs.Ease.get(1)).to({regX:63.1,regY:15.1,scaleX:1.0404,scaleY:1.0404},7,cjs.Ease.get(1)).to({regX:63,regY:15,scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(52));

	// text4
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(221.5,30,1,1,0,0,0,74,34.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).to({y:130,alpha:1},14,cjs.Ease.get(1)).wait(80));

	// text2
	this.instance_2 = new lib.text3("synched",0);
	this.instance_2.setTransform(221,129.35,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({y:149.35,alpha:1},14,cjs.Ease.get(1)).wait(60).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(86));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(220,16.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({y:48.6,alpha:1},14,cjs.Ease.get(1)).wait(60).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(160));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(80.1,273.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({y:228.5,alpha:1},14,cjs.Ease.get(1)).wait(242));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(220,5,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},14).wait(256));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(80));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(60).to({alpha:0},14,cjs.Ease.get(1)).wait(80));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},14,cjs.Ease.get(1)).wait(88).to({alpha:0},14,cjs.Ease.get(1)).wait(154));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(256));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,52.2,152,235.10000000000002);
// library properties:
lib.properties = {
	id: 'D40151DE091C4EC7B98ADAA070326B17',
	width: 300,
	height: 250,
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
an.compositions['D40151DE091C4EC7B98ADAA070326B17'] = {
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