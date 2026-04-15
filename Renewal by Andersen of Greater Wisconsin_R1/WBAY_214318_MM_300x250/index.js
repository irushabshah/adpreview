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
	this.shape.graphics.f("#12127D").s().p("AgEAHQgDgCAAgFQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgCAAgCgCg");
	this.shape.setTransform(131.325,40.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_1.setTransform(126.025,38.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAAAAaQABANAFAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgOAAgIgJg");
	this.shape_2.setTransform(119.45,38.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_3.setTransform(114.6,36.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgFAjIgahFIALAAIAPAoQAFAPAAAEIAAAAIAFgOIARgtIALAAIgbBFg");
	this.shape_4.setTransform(109.7,38.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgTAjIAAhEIAJAAIABANIABAAQAEgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAkg");
	this.shape_5.setTransform(104.25,38.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_6.setTransform(97.575,38.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_7.setTransform(90.825,38.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgEAxIAAhiIAJAAIAABig");
	this.shape_8.setTransform(82.725,36.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgVAfQgGgGAAgKQAAgUAggBIAMAAIAAgFQABgHgEgEQgEgFgHAAQgIAAgLAGIgDgIQAFgDAGgBQAGgCAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgKIgBAAQgFAHgFACQgFADgHAAQgLAAgFgFgAgLAFQgFADAAAHQAAAGAEADQADADAGAAQAJAAAGgFQAFgGAAgKIAAgGIgLAAQgLABgGAEg");
	this.shape_9.setTransform(77.3,38.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AATAjIAAgsQAAgIgEgEQgEgFgIAAQgKABgFAGQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAKIABAAQADgGAGgCQAGgEAGAAQAMAAAHAHQAGAGAAANIAAAsg");
	this.shape_10.setTransform(69.975,38.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_11.setTransform(62.025,38.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_12.setTransform(56.5,36.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAFgBIAFAAIAAAIIgGABIgGABQgSAAgBgWg");
	this.shape_13.setTransform(52.55,37.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgeAzIAAhjIAJAAIABAJIABAAQAEgGAFgDQAGgCAGAAQAOAAAHAKQAIAJAAARQAAARgIAJQgIAKgNAAQgGgBgGgCQgFgCgEgGIgBAAIABAMIAAAcgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAGAKABQAJgBAFgHQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_14.setTransform(46.525,39.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_15.setTransform(38.775,38.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAIgJAPAAIAKABIAIADIgDAIIgIgCIgHgBQgUAAAAAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgKAAQgOAAgJgJg");
	this.shape_16.setTransform(32.2,38.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAUAjIgUgcIgTAcIgLAAIAZgjIgYgiIALAAIASAbIASgbIAMAAIgYAiIAaAjg");
	this.shape_17.setTransform(25.55,38.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgZAuIAAhbIAzAAIAAAJIgoAAIAAAeIAlAAIAAAIIglAAIAAAjIAoAAIAAAJg");
	this.shape_18.setTransform(18.825,36.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgEAHQgDgCAAgFQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgCAAgCgCg");
	this.shape_19.setTransform(128.575,25.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_20.setTransform(123.775,22.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AgKAWIAAgpIgKAAIAAgEIAKgFIAFgOIAFAAIAAAQIAUAAIAAAHIgUAAIAAApQAAAGADADQADADAFAAIAFAAIAFgBIAAAIIgGACIgFAAQgUAAAAgVg");
	this.shape_21.setTransform(118.35,21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAIgJAPAAIAKABIAIADIgDAIIgIgCIgHgBQgUAAAAAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgKAAQgOAAgJgJg");
	this.shape_22.setTransform(113.2,22.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgWAdQgGgGAAgNIAAgsIALAAIAAAsQAAAIADAFQAEADAIAAQALAAAEgFQAGgHAAgNIAAgjIAKAAIAABEIgIAAIgCgKIAAAAQgEAGgFACQgHADgGAAQgMABgHgHg");
	this.shape_23.setTransform(105.95,22.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgWApQgIgKAAgRQAAgQAIgKQAHgJAOAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIAKAAIAABiIgIAAIgBgKIgBAAQgHALgOAAQgOAAgHgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_24.setTransform(97.85,21.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_25.setTransform(90.125,22.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgTAkIAAhFIAJAAIABANIABAAQAEgHAEgEQAGgDAGAAIAIAAIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAlg");
	this.shape_26.setTransform(84,22.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgeAzIAAhjIAJAAIABAJIABAAQAEgGAFgCQAGgDAGAAQAOAAAHAJQAIAKAAARQAAAQgIAKQgIAKgNgBQgGAAgGgCQgFgDgEgFIgBAAIABAMIAAAcgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAHAKgBQAJABAFgIQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_27.setTransform(77.125,23.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAEgHAFgEQAGgDAGAAIAIAAIgBAKIgIgBQgJAAgEAHQgGAHgBAKIAAAlg");
	this.shape_28.setTransform(67.4,22.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_29.setTransform(60.375,22.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_30.setTransform(54.85,21.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAEgHAFgEQAGgDAGAAIAIAAIgBAKIgIgBQgJAAgEAHQgHAHAAAKIAAAlg");
	this.shape_31.setTransform(51,22.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_32.setTransform(44.325,22.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgeAzIAAhjIAJAAIABAJIABAAQAEgGAFgCQAGgDAGAAQAOAAAHAJQAIAKAAARQAAAQgIAKQgIAKgNgBQgGAAgGgCQgFgDgEgFIgBAAIABAMIAAAcgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAHAKgBQAJABAFgIQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_33.setTransform(36.875,23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAFQAEADAHAAQALAAAFgFQAEgHAAgNIAAgjIALAAIAABEIgIAAIgCgKIgBAAQgDAGgGACQgFADgHAAQgMABgGgHg");
	this.shape_34.setTransform(28.7,22.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgcArIAAgKIAMAEIAOABQAKAAAFgEQAFgEAAgHQAAgFgBgDQgCgDgFgDIgNgGQgNgEgFgGQgGgGAAgKQAAgLAIgHQAIgGANAAQANAAAMAFIgDAKQgMgFgLAAQgHAAgFADQgFAEAAAHQAAAEACAEQACADAEACIAMAGQAOAEAGAGQAFAGAAAKQAAAMgJAHQgIAHgPAAQgQAAgJgFg");
	this.shape_35.setTransform(21.225,21.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,148,37.4);


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
	this.shape.graphics.f("#12127D").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAtg");
	this.shape.setTransform(122.575,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AASAjIgOgoIgEgRIAAAAIgEARIgNAoIgMAAIgThFIALAAIALAnIAEATIAAAAIACgKIADgJIANgnIAKAAIANAnIAEASIAAAAIACgHIAOgyIAKAAIgTBFg");
	this.shape_1.setTransform(113.5,25.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_2.setTransform(104.525,25.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgkAuIAAhbIAcAAQAVAAAMALQAMANAAAVQAAAWgMANQgNAMgWgBgAgZAlIAMAAQATAAAKgJQAJgKABgSQgBgSgIgJQgKgJgRAAIgPAAg");
	this.shape_3.setTransform(96.15,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_4.setTransform(84.525,27.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_5.setTransform(77.675,25.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAtg");
	this.shape_6.setTransform(70.075,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(62.125,25.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAjAuIAAg7IABgVIAAAAIggBQIgIAAIgfhRIgBAAIABAXIAAA6IgKAAIAAhbIAQAAIAdBLIAAAAIAehLIAQAAIAABbg");
	this.shape_8.setTransform(52.375,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_9.setTransform(39.225,25.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAYAuIgyhNIgBAAIABAaIAAAzIgJAAIAAhbIAMAAIAxBMIABAAIgBgLIAAgNIAAg0IAKAAIAABbg");
	this.shape_10.setTransform(30.4,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgJAQIAFgQIACgPIAKAAIABACIgEANIgGAQg");
	this.shape_11.setTransform(109.6,13.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgJAWIAAgpIgLAAIAAgEIALgFIAEgOIAFAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADADQADAEAFgBIAGAAIADgBIAAAJIgFABIgFAAQgUABABgWg");
	this.shape_12.setTransform(105.95,9.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_13.setTransform(100.625,10.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_14.setTransform(93.925,10.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgTAkIAAhFIAJAAIABANIABAAQAEgHAEgEQAGgDAGAAIAIABIgBAJIgIgBQgIAAgGAHQgFAHAAAKIAAAlg");
	this.shape_15.setTransform(88.05,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_16.setTransform(81.375,10.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgKAWIAAgpIgKAAIAAgEIAKgFIAFgOIAFAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADADQADAEAFgBIAFAAIAFgBIAAAJIgFABIgHAAQgSABgBgWg");
	this.shape_17.setTransform(75.4,9.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AATAkIAAgsQAAgJgEgEQgEgFgIABQgKAAgFAFQgGAHAAANIAAAkIgKAAIAAhFIAIAAIACAKIABAAQADgFAGgEQAGgCAGAAQAMgBAHAHQAGAGAAANIAAAtg");
	this.shape_18.setTransform(69.225,10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_19.setTransform(63.425,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_20.setTransform(54.325,10.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAYAvIgyhNIgBAAIABAZIAAA0IgJAAIAAhdIAMAAIAyBOIAAAAIAAgLIgBgOIAAg1IAKAAIAABdg");
	this.shape_21.setTransform(45.5,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgIAQIADgQIADgPIALAAIABABIgFAOIgFAQg");
	this.shape_22.setTransform(116.05,-2.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_23.setTransform(111.625,-5.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAFgBIAFAAIAAAIIgGABIgFABQgUgBAAgVg");
	this.shape_24.setTransform(106.2,-6.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgDQAGgEAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_25.setTransform(100.025,-5.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_26.setTransform(92.425,-5.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAnAjIAAgsQAAgIgDgEQgEgEgIgBQgJAAgFAHQgFAFAAAMIAAAlIgJAAIAAgsQAAgIgEgEQgDgEgIgBQgKAAgEAHQgFAFAAAOIAAAjIgLAAIAAhEIAJAAIACAJIAAAAQADgEAGgDQAFgEAHAAQAQABAEAMIABAAQADgGAGgDQAGgDAHgBQAMABAGAGQAGAGAAANIAAAsg");
	this.shape_27.setTransform(82.775,-5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_28.setTransform(73.425,-4.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgVAfQgGgGAAgKQAAgUAggBIANAAIAAgFQAAgIgEgDQgDgFgJAAQgHABgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgKIAAAAQgGAHgFADQgFACgHAAQgLAAgFgFgAgLAFQgFADAAAHQAAAGADADQAEADAGAAQAJAAAGgFQAFgGAAgKIAAgGIgLAAQgLABgGAEg");
	this.shape_29.setTransform(66.35,-5.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgcAuIAAhbIAYAAQAhAAAAAbQAAAOgJAGQgKAIgRAAIgLAAIAAAkgAgSAAIAKAAQANAAAHgDQAGgEAAgLQAAgJgGgFQgGgEgMAAIgMAAg");
	this.shape_30.setTransform(59.375,-6.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_31.setTransform(47.875,-5.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAYAuIgyhNIgBAAIABAaIAAAzIgJAAIAAhbIAMAAIAxBMIABAAIgBgLIAAgNIAAg0IAKAAIAABbg");
	this.shape_32.setTransform(39.05,-6.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgEAjQgDgCAAgFQAAgEACgCQACgDADAAQAEAAACADQACACAAAEQAAAEgCACQgCADgEAAQgCAAgCgCgAgEgUQgDgCAAgFQAAgJAHAAQAIAAAAAJQAAAEgCACQgCADgEAAQgCAAgCgCg");
	this.shape_33.setTransform(108.325,-21.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_34.setTransform(103.525,-21.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AATAyIAAgtQAAgIgEgEQgEgFgIABQgKAAgFAFQgGAGAAANIAAAlIgKAAIAAhiIAKAAIAAAeIAAAIIABAAQADgEAFgEQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAug");
	this.shape_35.setTransform(96.475,-22.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AgKAWIAAgpIgJAAIAAgEIAJgFIAFgOIAFAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADADQADAEAFgBIAGAAIADgBIAAAIIgEACIgHAAQgSAAgBgVg");
	this.shape_36.setTransform(90.15,-22.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AATAkIAAgsQAAgJgEgEQgEgFgIABQgKAAgFAFQgGAHAAANIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgCAGAAQAMAAAHAGQAGAGAAANIAAAtg");
	this.shape_37.setTransform(83.975,-21.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_38.setTransform(76.025,-21.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAnAkIAAgtQAAgIgDgEQgEgFgIABQgJAAgFAFQgFAGAAALIAAAnIgJAAIAAgtQAAgIgEgEQgDgFgIABQgKAAgEAFQgFAHAAANIAAAkIgLAAIAAhFIAJAAIACAJIAAAAQADgEAGgEQAFgCAHAAQAQgBAEAMIABAAQADgFAGgDQAGgEAHABQAMAAAGAGQAGAGAAANIAAAtg");
	this.shape_39.setTransform(66.125,-21.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AALAvIAAgWIgsAAIAAgJIArg+IALAAIAAA+IANAAIAAAJIgNAAIAAAWgAAGgYIgcAoIAhAAIAAgeIABgVIgBAAg");
	this.shape_40.setTransform(53,-22.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AgdAvIAAgJIAYgZIANgPIAGgJQABgFABgFQgBgHgEgFQgEgEgHAAQgGAAgFACQgGACgGAFIgFgHQANgLAPAAQALAAAIAGQAHAIAAAKQAAAJgEAJQgGAIgNANIgUAUIAAAAIAwAAIAAAKg");
	this.shape_41.setTransform(45.6,-22.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-33.7,148,68.80000000000001);


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
	this.shape.graphics.f("#12127D").s().p("AgMAbIAAgxIgMAAIAAgHIAMgFIAFgTIAHAAIAAAVIAZAAIAAAKIgZAAIAAAxQAAAHAEAFQADAEAHAAIAGgBIAFAAIAAAJIgGACIgHAAQgYAAAAgag");
	this.shape.setTransform(124.175,59.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgUAhQgKgMAAgVQAAgUAKgMQAKgLATAAIAMABIAKADIgEALIgKgDIgJgBQgZAAAAAgQAAAQAHAJQAGAIALAAQAMAAALgFIAAAMQgJAEgNAAQgSAAgKgLg");
	this.shape_1.setTransform(117.8,60.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgYAhQgLgMAAgUQAAgUAKgMQAKgMAQAAQAQAAAKAKQAJALAAARIAAAHIg6AAQABAPAHAIQAHAIAMAAQAOAAANgGIAAAMIgMAEIgPABQgSAAgLgLgAAWgHQAAgNgFgGQgGgHgKAAQgJAAgGAHQgGAHgCAMIAsAAIAAAAg");
	this.shape_2.setTransform(109.375,60.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgRBMIAAgKQAFABAFAAQAGAAACgEQADgCAAgIIAAhiIANAAIAABhQAAAagWAAQgIAAgEgCgAAFg+QgCgCAAgEQAAgFACgCQACgCAEAAQADAAACACQACADAAAEQAAAEgCACQgCADgDAAQgEAAgCgDg");
	this.shape_3.setTransform(101.825,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgUAnQgJgFgEgLQgFgKAAgNQAAgUAKgMQALgLARAAQASAAALAMQAKALAAAUQAAAVgKAMQgLALgSAAQgLAAgJgFgAgSgYQgHAIAAAQQAAAQAHAJQAGAIAMAAQANAAAGgIQAHgJAAgQQAAgPgHgJQgGgIgNAAQgMAAgGAIg");
	this.shape_4.setTransform(96.025,60.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgXAsIAAhVIAKAAIACAQIAAAAQAFgJAGgEQAGgEAJgBIAJABIgBAMIgJgBQgLAAgGAIQgIAJAAANIAAAtg");
	this.shape_5.setTransform(88.55,60.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgkA/IAAh7IAKAAIABALIABAAQAFgHAHgDQAGgDAIAAQARAAAJAMQAKALgBAVQABAUgKAMQgJAMgRAAQgIAAgGgDQgHgDgFgHIgBAAIABAOIAAAkgAgSgsQgFAIgBAPIAAADQAAASAGAHQAHAIALAAQAMAAAGgJQAGgIAAgQQAAgQgGgIQgGgJgMAAQgMAAgGAHg");
	this.shape_6.setTransform(80.05,62.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgYAhQgLgMAAgUQAAgUAKgMQAKgMAQAAQAQAAAKAKQAJALAAARIAAAHIg6AAQABAPAHAIQAHAIAMAAQAOAAANgGIAAAMIgMAEIgPABQgSAAgLgLgAAWgHQAAgNgFgGQgGgHgKAAQgJAAgGAHQgGAHgCAMIAsAAIAAAAg");
	this.shape_7.setTransform(66.325,60.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgXAsIAAhVIAKAAIABAQIABAAQAFgJAGgEQAHgEAHgBIAKABIgBAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_8.setTransform(59.15,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgFA7IAAhVIALAAIAABVgAgEgrQgDgCAAgEQAAgFADgCQACgCACAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_9.setTransform(53.325,59.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AgMAbIAAgxIgMAAIAAgHIAMgFIAFgTIAHAAIAAAVIAZAAIAAAKIgZAAIAAAxQAAAHAEAFQADAEAHAAIAGgBIAFAAIAAAJIgGACIgHAAQgYAAAAgag");
	this.shape_10.setTransform(48.475,59.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAXAsIAAg3QAAgLgFgEQgFgGgKAAQgNAAgGAIQgGAHAAARIAAAsIgNAAIAAhVIALAAIACALIAAAAQAEgGAHgDQAIgDAHgBQAQABAIAHQAIAHAAAQIAAA4g");
	this.shape_11.setTransform(40.875,60.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgYAhQgLgMAAgUQAAgUAKgMQAKgMAQAAQAQAAAKAKQAJALAAARIAAAHIg6AAQABAPAHAIQAHAIAMAAQAOAAANgGIAAAMIgMAEIgPABQgSAAgLgLgAAWgHQAAgNgFgGQgGgHgKAAQgJAAgGAHQgGAHgCAMIAsAAIAAAAg");
	this.shape_12.setTransform(31.475,60.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgGQAAgRAIgHQAHgHAQAAQAOAAAKAEIgHATQgHgDgGAAQgGAAgCADQgDAEAAAEIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_13.setTransform(107.7,39.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgGQAAgRAIgHQAHgHARAAQANAAAKAEIgGATQgIgDgGAAQgGAAgDADQgCAEAAAEIAAAGIAWAAIAAATIgWAAIAABJg");
	this.shape_14.setTransform(101.15,39.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgWArQgLgGgFgMQgGgLAAgOQAAgWAMgNQAMgMAUAAQAOAAAKAGQAKAGAGAKQAFAMAAANQAAAWgMANQgMANgVAAQgNAAgJgFgAgNgTQgFAGAAANQAAAOAFAHQAEAHAJAAQALAAAEgHQAEgHAAgOQAAgNgEgGQgEgIgLAAQgJAAgEAIg");
	this.shape_15.setTransform(92.05,41.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgeAvQgMgQAAgfQAAgfALgPQAKgQAVAAQAVABALAQQALAPAAAeQAAAggLAPQgLAQgVgBQgUAAgKgPgAgMgeQgEAJAAAVQAAAXAEAKQAEAJAIAAQAJAAAEgKQAEgJAAgXQAAgVgEgJQgEgKgJAAQgIAAgEAKg");
	this.shape_16.setTransform(77.55,39.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgeAvQgLgQAAgfQAAgfAKgPQAKgQAVAAQAVABALAQQAKAPAAAeQAAAggKAPQgLAQgVgBQgUAAgKgPgAgMgeQgEAJAAAVQAAAXAEAKQAEAJAIAAQAJAAAEgKQAEgJAAgXQAAgVgEgJQgEgKgJAAQgIAAgEAKg");
	this.shape_17.setTransform(67.85,39.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgnA3IAAgWQAGADAIADQAJACAIAAQAWAAABgTQAAgTgYAAIgKABIgIACIgKgGIAEg9IBBAAIAAAXIgqAAIgCAXIADgBIALgBQARABALAJQALAJAAARQAAAVgNALQgMALgXgBQgUAAgMgGg");
	this.shape_18.setTransform(58.2,39.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgFBGIAAgRQgUgBgPgGIAAgXQAGAEALADQAKADAIAAIAAgZIgGgDQgQgFgHgHQgGgJAAgKQAAgNAJgHQAJgIARgCIAAgNIALAAIAAANQASABAQAGIgIAUQgNgFgNgBIAAAYQAPAGAIAFQAGAEAEAFQADAGAAAGQAAAOgKAIQgJAIgRACIAAARgAAGAgQALgCgBgHQABgDgDgDIgIgFgAgPgaQAAADACACQADADAFACIAAgTQgLABABAIg");
	this.shape_19.setTransform(48.5,39.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgIApIAAggIggAAIAAgRIAgAAIAAggIARAAIAAAgIAgAAIAAARIggAAIAAAgg");
	this.shape_20.setTransform(124.1,19.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAVA0QgHgJgBgTQAAglAdAAQAPAAAHAKQAIAJAAASQAAATgIAKQgHAJgPAAQgOAAgHgKgAAlAJQgCAFgBAKQABALACAFQACAFADAAQAJAAgBgVQABgVgJAAQgDAAgCAGgAgqA9IBBh5IAUAAIhCB5gAg/AEQgIgJABgSQAAgmAdAAQANAAAIAKQAHAJAAATQAAATgHAIQgIAKgNAAQgOAAgIgKgAgwgnQgBAFAAALQAAAKABAGQADAFAEAAQAHAAABgVQgBgVgHAAQgEAAgDAFg");
	this.shape_21.setTransform(107.2,19.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgfAvQgLgQABgfQAAgfAKgPQAKgQAVAAQAVAAALAQQALAQgBAeQABAggLAQQgKAPgWgBQgUAAgLgPgAgMgeQgEAJAAAVQAAAWAEALQAEAJAIAAQAJAAAEgKQAEgJAAgXQAAgVgEgJQgEgKgJAAQgIAAgEAKg");
	this.shape_22.setTransform(94.7,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgpA+IAAgSIAegfIARgTQAEgEACgFQACgFAAgEQAAgIgEgDQgFgEgFAAQgHAAgGADQgIADgHAHIgNgRQAIgIAGgDIANgFQAHgCAIABQALAAAJADQAJAFAEAHQAFAIAAAKQAAAHgCAIQgEAHgGAHQgGAIgQAOIgOAPIAAABIAzAAIAAAWg");
	this.shape_23.setTransform(85.05,19.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgqAuQgPgQAAgeQAAgdAPgQQAPgRAbAAQAcAAAPARQAPAQAAAdQAAAegPAQQgPARgcgBQgbABgPgRgAgWgdQgIAKAAATQAAAUAIALQAIAKAOAAQAfAAAAgpQAAgogfAAQgOAAgIALg");
	this.shape_24.setTransform(69.025,19.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgiAuQgPgQAAgeQAAgcARgRQARgQAdAAQASAAASAHIgJAVQgNgHgPAAQgPAAgKALQgKALAAASQAAAUAIALQAIAKAOAAIARgCIAAgZIgXAAIAAgUIAwAAIAAA+QgMADgKACIgVABQgbAAgOgQg");
	this.shape_25.setTransform(55.925,19.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgqAuQgPgQAAgeQAAgdAPgQQAPgRAbAAQAcAAAPARQAPAQAAAdQAAAegPAQQgPARgcgBQgbABgPgRgAgWgdQgIAKAAATQAAAUAIALQAIAKAOAAQAfAAAAgpQAAgogfAAQgOAAgIALg");
	this.shape_26.setTransform(43.225,19.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AgsA9IAAh5IAlAAQAZAAAMAIQAMAHAAAQQgBALgFAHQgEAHgJABIAAABQAMACAEAHQAGAHAAAMQAAAQgMAJQgMAKgVAAgAgSAoIARAAQAJAAAFgFQAFgEAAgIQAAgPgUAAIgQAAgAgSgMIAPAAQAJAAAEgDQAGgDAAgHQgBgHgFgDQgFgEgKAAIgNAAg");
	this.shape_27.setTransform(31.1,19.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgLAUIAFgUIADgTIAOAAIABACIgGASIgHATg");
	this.shape_28.setTransform(109.575,5.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgmA8IAAgKIAKABQANAAAGgPIAEgMIgihVIAOAAIATAxQAGAQAAAHIABAAIAEgNIAVg7IAOAAIglBgQgEAPgHAGQgIAGgKAAQgGAAgGgCg");
	this.shape_29.setTransform(103.875,3.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgaAmQgHgHAAgMQAAgZAogBIAPgBIAAgFQAAgKgFgFQgEgFgKAAQgJAAgOAHIgEgKQAHgDAHgCQAIgCAGAAQAQAAAHAHQAHAGAAAPIAAA6IgJAAIgDgMIgBAAQgGAIgGADQgHACgIAAQgNAAgHgGgAAIABQgOABgHAEQgHAEAAAJQAAAHAEAEQAFAEAHAAQALAAAHgHQAHgHAAgMIAAgHg");
	this.shape_30.setTransform(95.175,1.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AArA5IAAhJIABgbIAAAAIgnBkIgKAAIgnhkIAAAAIABAcIAABIIgNAAIAAhxIAUAAIAkBdIAAAAIAlhdIAUAAIAABxg");
	this.shape_31.setTransform(83.825,0.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgdAnIAAgMQAGADAHACQAHACAHAAQAJAAAFgEQAGgDAAgHQAAgFgFgDQgEgEgMgEQgLgEgFgDQgGgEgCgEQgCgEAAgGQAAgKAIgGQAJgGANAAQAOAAANAFIgEALQgNgGgLAAQgIAAgEADQgFADAAAFQAAAEACACQABADAEACIAOAGQAQAFAFAFQAFAGAAAIQAAAMgJAHQgJAGgPAAQgRAAgJgFg");
	this.shape_32.setTransform(68.725,1.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgFA7IAAhVIALAAIAABVgAgEgrQgDgCAAgEQAAgFADgCQACgCACAAQADAAACACQADADAAAEQAAAEgDACQgCADgDAAQgCAAgCgDg");
	this.shape_33.setTransform(62.875,-0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAXA9IAAg4QAAgJgFgFQgFgFgKAAQgNAAgGAHQgGAHAAAQIAAAtIgNAAIAAh5IANAAIAAAlIgBALIABAAQAEgGAHgEQAHgDAIAAQAQAAAIAHQAIAIAAAPIAAA4g");
	this.shape_34.setTransform(56.025,-0.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgGA5IAAhmIgkAAIAAgLIBVAAIAAALIgkAAIAABmg");
	this.shape_35.setTransform(46.625,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,-13.2,148,84.9);


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
	this.shape.setTransform(95.825,69.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgPA5IAAgrIglhGIAhAAIATAqIAUgqIAhAAIgmBEIAAAtg");
	this.shape_1.setTransform(88.225,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AAZA5IgGgVIglAAIgFAVIgiAAIAmhxIAnAAIAmBxgAANALIgGgSIgDgQIgEgPIgBAOIgKAjIAYAAg");
	this.shape_2.setTransform(77.1,69.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAkA5IAAgyIAAgHIABgYIAAAAIgXBRIgdAAIgWhSIgBAAIABAhIAAAxIgbAAIAAhxIApAAIAXBQIAAAAIAYhQIApAAIAABxg");
	this.shape_3.setTransform(63.6,69.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgOA5IAAhYIgcAAIAAgZIBVAAIAAAZIgcAAIAABYg");
	this.shape_4.setTransform(130.125,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgjAuQgNgMAAgXIAAhEIAfAAIAABCQAAAMAFAGQAEAFAIAAQAJAAAFgFQAEgGAAgMIAAhCIAfAAIAABEQAAAWgMANQgOAMgXAAQgWAAgNgMg");
	this.shape_5.setTransform(119.35,51.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgoAsQgPgPAAgdQAAgcAPgPQAOgPAaAAQAbAAAPAPQANAPAAAcQAAAdgNAPQgOAPgcAAQgaAAgOgPgAgWAAQAAAhAWAAQAMAAAFgIQAGgIAAgRQAAgQgGgIQgFgIgMAAQgWAAAAAgg");
	this.shape_6.setTransform(106.9,50.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AASA5IAAgvIgjAAIAAAvIgfAAIAAhxIAfAAIAAAqIAjAAIAAgqIAfAAIAABxg");
	this.shape_7.setTransform(94.425,51);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgiAsQgPgQAAgcQAAgbAQgPQAQgQAbAAQALAAAKACQAJACAHAEIgJAYQgNgGgOAAQgNAAgHAJQgIAIAAAQQAAAQAHAIQAHAIALAAIANgBIAAgSIgVAAIAAgXIAyAAIAAA9QgUAHgYAAQgaAAgOgPg");
	this.shape_8.setTransform(82.275,50.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgjAuQgNgMAAgXIAAhEIAfAAIAABCQAAAMAFAGQAFAFAHAAQAJAAAFgFQAEgGAAgMIAAhCIAfAAIAABEQAAAWgNANQgNAMgXAAQgWAAgNgMg");
	this.shape_9.setTransform(70.45,51.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgoAsQgOgPAAgdQAAgcAOgPQAOgPAbAAQAbAAAOAPQAOAPgBAcQABAdgOAPQgOAPgcAAQgaAAgOgPgAgWAAQAAAhAWAAQAMAAAGgIQAFgIAAgRQAAgQgFgIQgHgIgKAAQgXAAAAAgg");
	this.shape_10.setTransform(58,50.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAOA5IgXgpIgIAAIAAApIgfAAIAAhxIAmAAQAtAAAAAiQAAAUgTAJIAhAygAgRgHIAGAAQAPAAAAgOQAAgMgPAAIgGAAg");
	this.shape_11.setTransform(46.975,51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AASA5IAAgvIgjAAIAAAvIgfAAIAAhxIAfAAIAAAqIAjAAIAAgqIAfAAIAABxg");
	this.shape_12.setTransform(34.725,51);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgOA5IAAhYIgcAAIAAgZIBVAAIAAAZIgcAAIAABYg");
	this.shape_13.setTransform(23.875,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgXA5QgHgBgJgEIAAgcQAJAFAKACQAJADAIAAQAGAAADgDQADgCAAgEIgBgEIgEgDIgPgIQgLgFgFgFQgGgDgDgHQgCgGAAgIQAAgQALgJQAMgJATAAQASAAASAJIgJAXQgQgHgMAAQgFAAgDACQgDACAAADQAAAEAEACQAEADAOAHQAPAHAFAGQAGAIAAAMQAAAKgGAIQgEAJgLAEQgKAFgMAAQgMAAgIgCg");
	this.shape_14.setTransform(108.35,32.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgiAsQgPgQAAgcQAAgbAQgPQAQgQAbAAQALAAAKACQAJACAHAEIgJAYQgNgGgOAAQgNAAgHAJQgIAIAAAQQAAAQAHAIQAHAIALAAIANgBIAAgSIgVAAIAAgXIAyAAIAAA9QgUAHgYAAQgaAAgOgPg");
	this.shape_15.setTransform(97.625,32.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAOA5IgphPIgBAAIACAcIAAAzIgbAAIAAhxIAoAAIAoBOIABAAIgBgaIAAg0IAbAAIAABxg");
	this.shape_16.setTransform(85.225,32.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgOA5IAAhxIAdAAIAABxg");
	this.shape_17.setTransform(75.8,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgRA5IglhxIAiAAIAPA4QAFAUAAAHIACgNIADgNIAQg5IAiAAIglBxg");
	this.shape_18.setTransform(67.45,32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AAZA5IgGgVIgkAAIgGAVIgiAAIAmhxIAnAAIAmBxgAAMALIgEgSIgFgQIgDgPIgBAOIgKAjIAXAAg");
	this.shape_19.setTransform(56.1,32.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgXA5QgHgBgJgEIAAgcQAJAFAKACQAJADAIAAQAGAAADgDQADgCAAgEIgBgEIgEgDIgPgIQgLgFgFgFQgGgDgDgHQgCgGAAgIQAAgQALgJQAMgJATAAQASAAASAJIgJAXQgQgHgMAAQgFAAgDACQgDACAAADQAAAEAEACQAEADAOAHQAPAHAFAGQAGAIAAAMQAAAKgGAIQgEAJgLAEQgKAFgMAAQgMAAgIgCg");
	this.shape_20.setTransform(45.8,32.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgPA5IAAgrIglhGIAhAAIATAqIAUgqIAhAAIgmBFIAAAsg");
	this.shape_21.setTransform(135.575,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AAZA5IgGgVIglAAIgFAVIgiAAIAmhxIAoAAIAlBxgAANALIgGgSIgDgQIgEgPIgBAOIgKAjIAYAAg");
	this.shape_22.setTransform(124.45,13.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgwA5IAAhxIAoAAQAaAAAPAOQAPAOABAaQgBAcgQAQQgPAPgcAAgAgRAgIAHAAQANAAAHgJQAGgIAAgQQABgPgHgHQgGgJgMABIgJAAg");
	this.shape_23.setTransform(113.05,13.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgkA5IAAhxIAeAAIAABYIArAAIAAAZg");
	this.shape_24.setTransform(98.475,13.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AAZA5IgGgVIgkAAIgGAVIgiAAIAmhxIAnAAIAmBxgAAMALIgEgSIgFgQIgDgPIgBAOIgKAjIAXAAg");
	this.shape_25.setTransform(87.7,13.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgPA5IAAhxIAfAAIAABxg");
	this.shape_26.setTransform(79.15,13.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AAOA5IgXgqIgIAAIAAAqIgfAAIAAhxIAmAAQAtAAAAAiQAAATgTAKIAhAygAgRgHIAGAAQAPAAAAgOQAAgMgPAAIgGAAg");
	this.shape_27.setTransform(71.675,13.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgoAsQgOgPAAgdQAAgcAOgPQAOgPAbAAQAaAAAOAPQAOAPABAcQgBAdgOAPQgOAPgbAAQgaAAgOgPgAgWAAQAAAhAWAAQAMAAAGgIQAFgIAAgRQAAgQgFgIQgGgIgLAAQgXAAAAAgg");
	this.shape_28.setTransform(59.15,13.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAlA5IAAgyIAAgIIABgXIgBAAIgXBRIgcAAIgYhRIgBAAIACAfIAAAyIgbAAIAAhxIApAAIAXBQIABAAIAXhQIApAAIAABxg");
	this.shape_29.setTransform(45.1,13.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AghA5IAAhxIBDAAIAAAZIgkAAIAAASIAhAAIAAAYIghAAIAAAVIAkAAIAAAZg");
	this.shape_30.setTransform(33.225,13.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAlA5IAAgyIAAgIIABgXIgBAAIgXBRIgcAAIgYhRIgBAAIACAfIAAAyIgbAAIAAhxIApAAIAXBQIABAAIAXhQIApAAIAABxg");
	this.shape_31.setTransform(20.9,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,82.2);


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
	this.shape.setTransform(102.7839,68.9611,0.729,0.729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(55.7289,63.1815,0.7289,0.7289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(75.0363,42.2805,0.7289,0.7289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(75.0824,43.2373,0.7289,0.7289);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(75.2203,40.4946,0.7289,0.7289);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(73.1871,37.916,0.7289,0.7289);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(71.8354,47.4378,0.7289,0.7289);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(72.3488,40.4049,0.7289,0.7289);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(63.1277,63.8488,0.7289,0.7289);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(101.3322,59.8479,0.7289,0.7289);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(99.1596,65.1955,0.7289,0.7289);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(98.7926,63.6567,0.7289,0.7289);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(99.215,62.5441,0.7289,0.7289);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(99.6309,61.5094,0.7289,0.7289);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(97.0053,68.1033,0.7289,0.7289);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(103.9667,45.9617,0.7289,0.7289);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(86.7637,58.0257,0.7289,0.7289);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(89.9528,50.4994,0.7289,0.7289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(68.6209,51.3724,0.7289,0.7289);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(74.8188,48.6025,0.7289,0.7289);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(61.3947,56.3093,0.7289,0.7289);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(64.4743,47.8759,0.7289,0.7289);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(58.0417,56.8887,0.7289,0.7289);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(76.3556,33.9043,0.7289,0.7289);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(68.4287,34.3341,0.7289,0.7289);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(72.6564,78.3482,0.7289,0.7289);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(76.957,77.3946,0.7289,0.7289);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(75.1772,77.8866,0.7289,0.7289);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(81.622,74.3878,0.7289,0.7289);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(70.8901,78.2146,0.7289,0.7289);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(63.7637,74.8069,0.7289,0.7289);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(79.1255,76.447,0.7289,0.7289);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(65.7135,76.6474,0.7289,0.7289);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(72.3648,77.9595,0.7289,0.7289);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(60.8662,74.6612,0.7289,0.7289);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(80.401,57.7341,0.7289,0.7289);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(82.1089,55.2749,0.729,0.729);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(93.5231,45.1774,0.7289,0.7289);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(53.1951,45.1774,0.7289,0.7289);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(53.1958,45.1781,0.7289,0.7289);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(73.3887,45.1788,0.729,0.729);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(147.6014,48.0908,0.7289,0.7289);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(178.8705,48.0908,0.7289,0.7289);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(136.7411,47.9996,0.7289,0.7289);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(207.9164,48.0908,0.7289,0.7289);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(197.4569,48.109,0.7289,0.7289);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(188.1273,48.0908,0.7289,0.7289);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(168.6297,48.109,0.7289,0.7289);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(158.9173,48.0908,0.7289,0.7289);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(121.7261,47.0703,0.7289,0.7289);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(127.539,49.6396,0.7289,0.7289);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(208.0257,32.0371,0.7289,0.7289);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(124.095,32.0189,0.7289,0.7289);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(193.8672,31.9096,0.7289,0.7289);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(179.326,32.1829,0.7289,0.7289);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(164.3839,32.0371,0.7289,0.7289);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(150.2254,32.0371,0.7289,0.7289);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(136.5224,32.0371,0.7289,0.7289);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(165.614,62.8903,0.7289,0.7289);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(165.6171,56.8594,0.7289,0.7289);

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
(lib.WBAY_214318_MM_300x250 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(260));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(223,205,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156).to({_off:false},0).to({x:221.5,y:177,alpha:1},14).wait(90));

	// text4
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(221.5,140,1,1,0,0,0,74,34.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({_off:false},0).to({y:130,alpha:1},12,cjs.Ease.get(1)).wait(100));

	// text3
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(218.5,35.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({y:55.6,alpha:1},14,cjs.Ease.get(1)).wait(112));

	// text2
	this.instance_3 = new lib.text3("synched",0);
	this.instance_3.setTransform(221,186.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:176.6,alpha:1},14,cjs.Ease.get(1)).wait(64).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(125));

	// text1
	this.instance_4 = new lib.text1("synched",0);
	this.instance_4.setTransform(220,16.6,1,1,0,0,0,74,25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:48.6,alpha:1},14,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(125));

	// logo
	this.instance_5 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_5.setTransform(80.1,273.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({y:228.5,alpha:1},14,cjs.Ease.get(1)).wait(232));

	// bar
	this.instance_6 = new lib.bar("synched",0);
	this.instance_6.setTransform(220,5,1,1,0,0,0,80,5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},14).wait(246));

	// image3
	this.instance_7 = new lib.image3_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(216).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(29));

	// image2
	this.instance_8 = new lib.image2_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(177).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(24).to({alpha:0},15,cjs.Ease.get(1)).wait(29));

	// image1
	this.instance_9 = new lib.image1_1();
	this.instance_9.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(163).to({alpha:0},15,cjs.Ease.get(1)).wait(68));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},14,cjs.Ease.get(1)).wait(246));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,116.6,152,170.70000000000002);
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