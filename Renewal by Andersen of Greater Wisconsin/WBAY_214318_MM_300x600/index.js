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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,230);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,230);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,230);// helper functions:

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
	this.shape.graphics.f("#12127D").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgQAAgGAKQgGAIAAASIAAAxIgPAAIAAhgIALAAIADAOIABAAQACgEAGgEQAEgEAGgBQAGgCAFAAQARAAAJAIQAJAIAAATIAAA+g");
	this.shape.setTransform(240.85,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AAYAwIgRg3IgCgHIgCgHIgCgGIgBgFIAAAAIAAAFIgCAGIgCAHIgCAHIgSA3IgQAAIgbhfIAPAAIAOA0IADAKIACAKIACAIIAAAAIACgFIABgHIACgHIACgGIARg3IAPAAIARA2IADAJIACAJIACAIIAAAAIACgIIACgJIADgLIAOg0IAPAAIgbBfg");
	this.shape_1.setTransform(228.375,23.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgRAvQgIgEgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIAEQgIADgKAAQgJAAgIgDgAgVgbQgHAKAAARQAAAMADAIQADAJAGAEQAHAEAJABQAKgBAHgEQAGgEADgJQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_2.setTransform(216.025,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgyBAIAAh/IAnAAQASAAAPAHQAOAHAHAOQAIAOAAAVQAAAUgIAPQgIAPgOAHQgPAHgVAAgAgjAzIASAAQAaAAANgNQAOgNAAgZQgBgRgFgLQgGgMgLgFQgMgGgOAAIgWAAg");
	this.shape_3.setTransform(204.4,22.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AglBFIgFgBIAAgMIAFABIAFAAQAFAAAEgBQAFgCACgFQADgEADgFIAFgNIgnhgIAQAAIAVA4IADAJIAEAIIABAIIAAAAIADgLIAGgOIATg4IAQAAIgqBtQgDAKgEAGQgEAHgHADQgFAEgKAAg");
	this.shape_4.setTransform(188.4,25.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAKQAIAJAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgDQgFgEgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_5.setTransform(178.875,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgMAAQgOAAgHAKQgGAIgBASIAAAxIgOAAIAAhgIAMAAIACAOIAAAAQADgEAFgEQAFgEAGgBQAGgCAGAAQAQAAAKAIQAIAIAAATIAAA+g");
	this.shape_6.setTransform(168.35,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgRAvQgIgEgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIAEQgIADgKAAQgJAAgIgDgAgVgbQgHAKAAARQAAAMADAIQADAJAGAEQAHAEAJABQAKgBAHgEQAGgEADgJQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_7.setTransform(157.425,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAwBAIAAhRIAAgLIABgLIAAgJIAAAAIgrBwIgMAAIgrhwIgBAAIABAIIAAAMIAAAMIAABQIgNAAIAAh/IAVAAIApBqIAAAAIAqhqIAWAAIAAB/g");
	this.shape_8.setTransform(143.95,22.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgRAvQgIgEgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIAEQgIADgKAAQgJAAgIgDgAgVgbQgHAKAAARQAAAMADAIQADAJAGAEQAHAEAJABQAKgBAHgEQAGgEADgJQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_9.setTransform(125.825,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAhBAIhFhrIgBAAIABAKIABAMIAAAMIAABJIgOAAIAAh/IARAAIBFBqIAAAAIAAgIIgBgNIAAgMIAAhJIAOAAIAAB/g");
	this.shape_10.setTransform(113.625,22.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgMAWIAEgPIADgOIACgOIAPAAIABACIgEAOIgFANIgFAOg");
	this.shape_11.setTransform(99.575,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgBA5QgFgCgEgHQgEgGAAgMIAAg4IgOAAIAAgHIAOgFIAGgVIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAHAAIAIgBIAFgBIAAALIgGACIgJABQgIAAgGgDg");
	this.shape_12.setTransform(94.3,22.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgUAwQgIgBgFgDIAAgOIAOAGQAIACAJAAQALAAAGgEQAFgEAAgHQAAgEgCgDQgCgDgFgDIgOgHIgQgFQgHgEgDgFQgEgFAAgIQAAgMAKgGQAKgHAPAAQAJAAAHABIAOAFIgFAMIgMgEIgOgCQgJAAgGADQgFAEAAAFQAAAFADADQACADAGACIANAGIAQAGQAGAEAEAFQADAFAAAHQAAAKgEAGQgFAHgIADQgJADgLAAQgKAAgHgCg");
	this.shape_13.setTransform(86.925,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAKQAIAJAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgDQgFgEgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_14.setTransform(77.575,23.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgbAxIAAhgIAMAAIACASIAAAAQADgFAFgFQAEgEAFgCQAFgDAHAAIAGAAIAGABIgCAOIgGgBIgFAAQgGAAgFABQgEADgEAFQgEAEgCAGQgCAGAAAHIAAAzg");
	this.shape_15.setTransform(69.475,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAKQAIAJAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgDQgFgEgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_16.setTransform(60.125,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAAA5QgGgCgEgHQgEgGAAgMIAAg4IgNAAIAAgHIANgFIAGgVIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAHAAIAIgBIAFgBIAAALIgHACIgJABQgHAAgFgDg");
	this.shape_17.setTransform(51.8,22.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgQAAgGAKQgHAIABASIAAAxIgPAAIAAhgIALAAIADAOIABAAQACgEAGgEQAEgEAGgBQAGgCAFAAQARAAAKAIQAIAIAAATIAAA+g");
	this.shape_18.setTransform(43.2,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_19.setTransform(35.15,22.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgRAvQgIgEgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIAEQgIADgKAAQgJAAgIgDgAgVgbQgHAKAAARQAAAMADAIQADAJAGAEQAHAEAJABQAKgBAHgEQAGgEADgJQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_20.setTransform(22.625,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAhBAIhFhrIgBAAIABAKIABAMIAAAMIAABJIgOAAIAAh/IARAAIBFBqIAAAAIAAgIIgBgNIAAgMIAAhJIAOAAIAAB/g");
	this.shape_21.setTransform(10.425,22.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgMAWIAEgPIADgOIACgOIAPAAIABACIgEAOIgFANIgFAOg");
	this.shape_22.setTransform(237.325,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgUAwQgIgBgFgDIAAgOIAOAGQAIACAJAAQALAAAGgEQAFgEAAgHQAAgEgCgDQgCgDgFgDIgOgHIgQgFQgHgEgDgFQgEgFAAgIQAAgMAKgHQAKgGAPAAQAJAAAHABIAOAFIgFAMIgMgEIgOgCQgJAAgGADQgFAEAAAFQAAAFADADQACADAGACIANAGIAQAGQAGAEAEAFQADAFAAAHQAAAKgEAGQgFAHgIACQgJAEgLAAQgKAAgHgCg");
	this.shape_23.setTransform(231.075,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AAAA5QgHgCgDgHQgEgGAAgMIAAg4IgNAAIAAgHIANgFIAGgVIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAHAAIAHgBIAHgBIAAALIgIACIgJABQgHAAgFgDg");
	this.shape_24.setTransform(223.5,0.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgQAAgGAKQgHAIAAASIAAAxIgOAAIAAhgIALAAIADAOIAAAAQAEgEAEgEQAFgEAGgBQAGgCAGAAQAQAAAKAIQAIAIAAATIAAA+g");
	this.shape_25.setTransform(214.9,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgSAsQgKgFgGgLQgGgMAAgPQAAgPAGgLQAFgMAJgGQAKgGAMAAQAMAAAJAGQAJAFAEAKQAFAJAAANIAAAIIhCAAQABARAIAKQAIAJAOAAQAJAAAHgCQAHgCAIgEIAAAOQgIADgHABQgHACgKAAQgNAAgKgGgAAagIQAAgIgDgHQgDgHgFgEQgFgDgIAAQgLAAgHAHQgHAIgBAOIAyAAIAAAAg");
	this.shape_26.setTransform(204.325,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AA2AxIAAg+QAAgLgFgGQgFgGgKAAQgOAAgGAJQgHAIAAAPIAAA1IgNAAIAAg+QAAgHgCgFQgDgFgEgDQgFgDgGAAQgKAAgGAEQgGAEgCAIQgDAHAAAMIAAAyIgOAAIAAhgIALAAIADAOIAAAAQADgEAFgEQAEgDAGgDQAFgBAGAAQALAAAIAEQAGAEADAIIABAAQAFgIAIgEQAIgEAKAAQAQAAAIAIQAIAIAAATIAAA+g");
	this.shape_27.setTransform(190.975,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AglBFIgFgBIAAgLIAEAAIAGAAQAFAAAFgBQADgCAEgFQADgEABgFIAGgNIgnhgIAQAAIAVA4IAEAJIACAIIABAIIABAAIAEgLIAEgOIAVg4IAPAAIgpBtQgEAKgDAGQgFAHgGADQgGAEgJAAg");
	this.shape_28.setTransform(178.1,3.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgXAuQgHgDgEgFQgDgHgBgKQABgOAKgHQAMgIAWAAIARAAIAAgHQAAgMgFgFQgGgFgJAAQgHAAgHACIgNAFIgFgLIAPgFQAJgDAIAAQASAAAIAIQAJAHAAASIAABAIgLAAIgDgOIgBAAIgIAJQgFADgGACQgFACgHAAQgJAAgHgEgAAKABQgSABgHAFQgHAFAAAJQAAAJAEAEQAGAEAIAAQALAAAJgHQAIgIAAgNIAAgJg");
	this.shape_29.setTransform(168.3,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgoBAIAAh/IAiAAQAYAAALAKQAMAJAAASQAAAIgDAIQgDAHgGAFQgGAFgJAEQgKADgNAAIgQAAIAAAygAgZABIAOAAQAMAAAIgCQAIgCAEgGQAEgGAAgKQAAgNgIgGQgIgHgRAAIgRAAg");
	this.shape_30.setTransform(158.625,-0.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgRAuQgIgDgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIADQgIAEgKAAQgJAAgIgEgAgVgbQgHAKAAARQAAAMADAIQADAJAGAEQAHAEAJABQAKgBAHgEQAGgEADgJQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_31.setTransform(142.775,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAhBAIhFhrIgBAAIABAKIABAMIAAAMIAABJIgOAAIAAh/IARAAIBFBqIAAAAIAAgIIgBgNIAAgMIAAhJIAOAAIAAB/g");
	this.shape_32.setTransform(130.575,-0.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgHAvQgDgCAAgGQAAgHADgCQADgDAEABQAEgBADADQADACAAAHQAAAGgDACQgDADgEAAQgEAAgDgDgAgHgeQgDgCAAgGQAAgGADgDQADgCAEgBQAEABADACQADADAAAGQAAAGgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_33.setTransform(116.8,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgUAwQgIgBgFgDIAAgOIAOAGQAIACAJAAQALAAAGgEQAFgEAAgHQAAgEgCgDQgCgDgFgDIgOgHIgQgFQgHgEgDgFQgEgFAAgIQAAgMAKgHQAKgGAPAAQAJAAAHABIAOAFIgFAMIgMgEIgOgCQgJAAgGADQgFAEAAAFQAAAFADADQACADAGACIANAGIAQAGQAGAEAEAFQADAFAAAHQAAAKgEAGQgFAHgIACQgJAEgLAAQgKAAgHgCg");
	this.shape_34.setTransform(110.225,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AAaBFIAAg+QAAgMgFgFQgGgHgLAAQgKABgHAEQgGAEgDAIQgCAHAAALIAAAzIgPAAIAAiJIAPAAIAAApIAAAIIgBAGIABAAQACgFAGgDQAEgEAGgCQAGgBAFAAQAMAAAHADQAIAEAFAHQADAJAAALIAAA/g");
	this.shape_35.setTransform(100.45,-0.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAAA5QgHgCgDgHQgEgGAAgMIAAg4IgNAAIAAgHIANgFIAGgVIAIAAIAAAWIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAHAAIAHgBIAGgBIAAALIgHACIgJABQgHAAgFgDg");
	this.shape_36.setTransform(91.65,0.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgQAAgGAKQgHAIAAASIAAAxIgOAAIAAhgIALAAIADAOIAAAAQAEgEAEgEQAFgEAGgBQAGgCAGAAQAQAAAKAIQAIAIAAATIAAA+g");
	this.shape_37.setTransform(83.05,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgRAuQgIgDgGgGQgGgHgDgJQgDgJAAgMQAAgPAFgLQAFgMALgFQAJgGANAAQANAAAKAGQAKAFAGAMQAFALAAAPQAAAMgDAJQgDAJgGAHQgGAGgIADQgIAEgKAAQgJAAgIgEgAgVgbQgHAKAAARQAAAMADAIQADAJAGAEQAHAEAJABQAKgBAHgEQAGgEADgJQADgIAAgMQAAgLgDgIQgDgJgGgEQgHgFgKAAQgOAAgHAKg");
	this.shape_38.setTransform(72.125,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AA2AxIAAg+QAAgLgFgGQgFgGgKAAQgOAAgGAJQgHAIAAAPIAAA1IgNAAIAAg+QAAgHgCgFQgDgFgEgDQgFgDgGAAQgKAAgGAEQgGAEgCAIQgDAHAAAMIAAAyIgOAAIAAhgIALAAIADAOIAAAAQADgEAFgEQAEgDAGgDQAFgBAGAAQALAAAIAEQAGAEADAIIABAAQAFgIAIgEQAIgEAKAAQAQAAAIAIQAIAIAAATIAAA+g");
	this.shape_39.setTransform(58.425,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AgpBBIAAgMIAigjIAQgRQAGgHAEgHQADgHAAgJQAAgLgHgGQgGgGgJAAQgKAAgHAEQgHADgIAGIgIgKQAGgFAFgDQAGgDAIgCQAGgCAJAAQAKAAAJAEQAIAEAFAIQAFAHAAALQAAAKgEAJQgEAJgIAHIgRASIgbAcIAAABIBBAAIAAANg");
	this.shape_40.setTransform(40.25,-0.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AAJBAIAAhaIAAgJIAAgHIABgGIgFAFIgFAFIgPALIgHgJIAhgbIAMAAIAAB/g");
	this.shape_41.setTransform(28.875,-0.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#12127D").s().p("AgFArIAAglIgkAAIAAgLIAkAAIAAglIALAAIAAAlIAkAAIAAALIgkAAIAAAlg");
	this.shape_42.setTransform(15.125,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15.2,250,51);


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
	this.shape.graphics.f("#12127D").s().p("AAABAQgHgDgEgHQgEgIAAgMIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA+QAAAJAFAGQAEAEAIAAIAIAAIAHgBIAAAMIgIACIgKABQgIAAgGgDg");
	this.shape.setTransform(173.975,56.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgPAyQgLgHgGgLQgGgNAAgTQAAgSAGgMQAHgNALgFQAMgHANABQAIgBAIACQAHACAFACIgFAOIgLgEIgMgCQgLABgHAEQgHAFgEAKQgDAJAAAMQAAANADAKQAEAIAHAFQAHAFAKABQAIAAAHgDIAMgDIAAAOIgMAEQgGACgJgBQgOAAgLgFg");
	this.shape_1.setTransform(165.975,57.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgUAxQgMgGgGgNQgGgLgBgSQAAgRAHgMQAFgNALgGQALgIANABQAOgBAJAHQAKAGAFAKQAGAMgBAOIAAAJIhIAAQAAATAJAKQAJAJAQABQAKAAAIgDQAHgBAJgDIAAANIgQAGQgIACgLgBQgOAAgMgGgAAcgJQAAgJgDgIQgDgHgFgEQgGgEgKAAQgMAAgHAIQgIAJgBAPIA3AAIAAAAg");
	this.shape_2.setTransform(155.4,57.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgQBhIgGgCIAAgNIAGACIAHAAQAHAAADgEQAEgEAAgJIAAh8IARAAIAAB8QAAAJgEAHQgDAHgHAEQgGAEgJgBgAAHhOQgDgCAAgGQAAgFADgDQACgCAFAAQADAAADACQADADAAAFQAAAGgDACQgDACgDABQgFgBgCgCg");
	this.shape_3.setTransform(145.95,58.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgTA0QgJgEgGgHQgHgIgEgJQgDgLAAgNQAAgRAGgMQAGgMALgHQALgGAOAAQAPAAALAGQALAHAGAMQAGAMAAARQAAANgDALQgEAJgGAIQgHAHgJAEQgJADgLAAQgKAAgJgDgAgYgeQgHALAAATQAAAMADAKQAEAJAHAGQAHAFAKAAQALAAAHgFQAHgGAEgJQADgKAAgMQAAgMgDgJQgEgKgHgFQgHgFgLAAQgQAAgIALg");
	this.shape_4.setTransform(138.775,57.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgeA3IAAhrIAOAAIACAUIAAAAQAEgGAEgFQAFgFAFgDQAGgCAIAAIAHAAIAGABIgCAPIgGgBIgGAAQgGAAgGACQgFADgEAFQgEAEgDAHQgCAHAAAIIAAA5g");
	this.shape_5.setTransform(129.375,57.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AguBOIAAiaIAOAAIACARIAAAAQADgFAFgEQAFgEAGgDQAGgDAJABQAUgBALAOQAMAOAAAcQAAASgFALQgGANgKAGQgJAGgOAAQgHABgHgDQgGgCgFgEQgFgDgDgFIgBAAIABAJIAAAJIAAAsgAgQg7QgHAEgEAIQgDAJAAANIAAADQAAANADAJQAEAJAHAFQAGAFALAAQAJAAAHgGQAHgFAEgJQADgJAAgMQgBgUgHgKQgHgMgPAAQgLAAgGAFg");
	this.shape_6.setTransform(118.8,59.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgUAxQgMgGgGgNQgHgLAAgSQABgRAFgMQAHgNAKgGQAKgIAOABQANgBAKAHQAKAGAFAKQAGAMAAAOIAAAJIhKAAQAAATAKAKQAJAJAPABQALAAAHgDQAIgBAIgDIAAANIgQAGQgHACgMgBQgNAAgMgGgAAdgJQAAgJgEgIQgCgHgHgEQgFgEgJAAQgNAAgHAIQgIAJgCAPIA5AAIAAAAg");
	this.shape_7.setTransform(101.7,57.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgeA3IAAhrIAOAAIACAUIAAAAQAEgGAEgFQAFgFAFgDQAGgCAIAAIAHAAIAGABIgCAPIgGgBIgGAAQgGAAgGACQgFADgEAFQgEAEgDAHQgCAHAAAIIAAA5g");
	this.shape_8.setTransform(92.675,57.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgHBKIAAhrIAPAAIAABrgAgGg2QgDgCAAgGQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAGgDACQgDACgEABQgDgBgDgCg");
	this.shape_9.setTransform(85.425,55.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAABAQgHgDgEgHQgEgIAAgMIAAg+IgQAAIAAgIIAQgHIAGgXIAJAAIAAAZIAfAAIAAANIgfAAIAAA+QAAAJAFAGQAEAEAIAAIAIAAIAHgBIAAAMIgIACIgKABQgIAAgGgDg");
	this.shape_10.setTransform(79.275,56.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AAdA3IAAhEQAAgOgGgGQgHgHgMAAQgRAAgHAKQgHAKAAAUIAAA3IgRAAIAAhrIANAAIADAQIABAAQADgGAFgDQAGgFAGgCQAHgBAGAAQATAAAKAJQAKAJAAAVIAABFg");
	this.shape_11.setTransform(69.725,57.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgUAxQgLgGgHgNQgGgLAAgSQgBgRAHgMQAFgNALgGQALgIANABQAOgBAJAHQAKAGAFAKQAFAMABAOIAAAJIhJAAQAAATAJAKQAJAJAQABQAJAAAJgDQAHgBAIgDIAAANIgPAGQgJACgKgBQgPAAgLgGgAAcgJQAAgJgCgIQgDgHgGgEQgGgEgKAAQgLAAgIAIQgIAJgBAPIA3AAIAAAAg");
	this.shape_12.setTransform(58,57.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgZBQIAAhaIgRAAIAAgPIARgIIAAgJQAAgOAFgJQAFgIAJgDQAIgDANAAQAJAAAHABIAMADIgIAXIgHgCIgKgBQgGAAgDAEQgEAEAAAGIAAAIIAcAAIAAAXIgcAAIAABag");
	this.shape_13.setTransform(219.925,30.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgZBQIAAhaIgRAAIAAgPIARgIIAAgJQAAgOAFgJQAFgIAJgDQAIgDANAAQAJAAAHABIAMADIgIAXIgHgCIgKgBQgGAAgDAEQgEAEAAAGIAAAIIAcAAIAAAXIgcAAIAABag");
	this.shape_14.setTransform(211.825,30.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgVA3QgLgDgHgIQgHgIgEgKQgFgMAAgOQABgSAGgOQAHgMAMgHQANgIAQAAQARAAAMAIQAMAHAIAMQAGAOABASQAAAOgEAMQgEAKgHAIQgIAIgKADQgKAEgNAAQgLAAgKgEgAgRgYQgGAIABAQQgBAMADAHQACAIAGADQAEAFAIAAQAJAAAFgFQAFgDACgIQACgHABgMQgBgLgCgHQgCgHgFgFQgFgDgJAAQgMAAgFAJg");
	this.shape_15.setTransform(200.6,32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgdBEQgLgJgGgRQgFgSgBgYQAAgXAGgRQAEgSAMgJQAMgJASAAQASAAALAJQAMAJAFASQAHARAAAXQAAASgEAPQgCAOgHAKQgGAKgJAFQgLAFgOAAQgRAAgMgJgAgLgtQgFAGgCAMQgCALAAAQQAAARACAMQACALAFAGQAEAGAHAAQAIAAAEgGQAFgGACgLQACgLAAgSQAAgQgCgLQgCgMgFgGQgEgFgIAAQgHAAgEAFg");
	this.shape_16.setTransform(182.65,30.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AgdBEQgMgJgFgRQgGgSABgYQAAgXAEgRQAGgSALgJQAMgJASAAQASAAAMAJQALAJAGASQAFARAAAXQAAASgDAPQgCAOgHAKQgFAKgLAFQgKAFgOAAQgRAAgMgJgAgMgtQgEAGgCAMQgCALAAAQQAAARACAMQACALAEAGQAFAGAHAAQAIAAAFgGQAEgGACgLQACgLAAgSQAAgQgCgLQgCgMgEgGQgFgFgIAAQgHAAgFAFg");
	this.shape_17.setTransform(170.65,30.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgfBKQgLgCgHgEIAAgbQAIAEAKADQALACAKAAQAJABAGgDQAGgCAEgGQADgFAAgJQAAgKgHgGQgIgGgOAAIgMABIgKACIgNgGIAFhMIBQAAIAAAbIg0AAIgCAdIAHgBIAKgBQAOAAALAGQALAEAGALQAGAJAAAPQAAAQgGAMQgIALgNAHQgNAGgTAAQgLAAgLgCg");
	this.shape_18.setTransform(158.7,31.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgGBWIAAgVQgOAAgKgCQgMgDgIgDIAAgcQAIAFAMADQANAEALAAIAAggQgRgGgJgFQgKgGgEgHQgFgIABgKQgBgKAGgIQAFgIAKgEQALgFANgBIAAgQIAMAAIAAAQQAMAAALACQAKADAKAEIgJAYIgSgFIgQgDIAAAeIAXAJQAJAFAHAHQAGAIAAAMQABAPgLALQgMAKgXACIAAAVgAAGApQAIgCADgDQADgDABgFIgCgFIgFgEIgIgEgAgNgpQgDABgCACQgBACgBADQABADABACQABADADACIAIAEIAAgYg");
	this.shape_19.setTransform(146.7,31.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgKAzIAAgoIgoAAIAAgVIAoAAIAAgoIAVAAIAAAoIAoAAIAAAVIgoAAIAAAog");
	this.shape_20.setTransform(129.2,31.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAaBBQgJgNAAgWQAAgXAJgLQAIgMATAAQARAAAJAMQAJALAAAXQAAAWgIANQgJAMgSAAQgSAAgJgMgAAtALQgCAGAAANQAAANACAHQADAFAFABQAFgBACgFQACgHABgNQgBgNgCgGQgCgHgFAAQgFAAgDAHgAg1BLIBSiVIAZAAIhSCVgAhOAFQgJgMAAgWQAAgWAJgNQAIgMATAAQARAAAJAMQAJANAAAWQAAAWgIAMQgJAMgSAAQgSAAgJgMgAg7gwQgCAGAAANQAAANACAGQADAHAFAAQAEAAADgHQADgGgBgNQABgNgDgGQgDgHgEAAQgFAAgDAHg");
	this.shape_21.setTransform(108.3,30.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgdBEQgMgJgFgRQgGgSAAgYQABgXAFgRQAEgSAMgJQALgJATAAQASAAALAJQAMAJAFASQAHARAAAXQAAASgDAPQgEAOgFAKQgGAKgKAFQgLAFgOAAQgRAAgMgJgAgLgtQgFAGgCAMQgCALAAAQQAAARACAMQACALAFAGQAEAGAHAAQAIAAAFgGQAEgGACgLQACgLAAgSQAAgQgCgLQgCgMgEgGQgFgFgIAAQgHAAgEAFg");
	this.shape_22.setTransform(92.85,30.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgzBMIAAgWIAmgmIARgSQAHgJADgGQADgHAAgHQAAgIgFgFQgFgFgHABQgJAAgIADQgJAFgJAHIgQgVIANgKQAIgFAJgDQAJgDANAAQAPAAAKAFQALAGAGAJQAFAJABALQAAANgGAKQgFAKgIAJIgYAXIgRASIAAACIA/AAIAAAag");
	this.shape_23.setTransform(80.9,30.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AgfBIQgNgGgJgKQgIgKgFgOQgEgPAAgRQgBgWAJgSQAHgRAQgJQAQgKAYAAQAYAAAPAKQAQAJAIARQAIASAAAWQgBARgEAPQgEAOgJAKQgIAKgOAGQgNAFgTAAQgSAAgNgFgAgVgrQgIAGgEALQgEALAAAPQAAAQAEALQAEALAIAHQAIAGANAAQANAAAJgGQAIgHAFgLQADgLAAgQQAAgWgJgOQgJgOgTAAQgNAAgJAHg");
	this.shape_24.setTransform(61.05,30.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AgcBEQgQgIgIgSQgIgRAAgZQgBgWAKgSQAJgRARgJQASgKAYAAQAMAAALACQAMADAKAEIgLAaIgPgGQgKgCgJAAQgOAAgJAFQgLAHgFALQgGAMABAOQAAAPADALQAEAMAJAGQAJAGANABIALgBIAIgBIAAggIgcAAIAAgZIA8AAIAABMQgMAEgNADQgMACgQAAQgWAAgPgJg");
	this.shape_25.setTransform(44.85,30.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgeBIQgOgGgJgKQgIgKgFgOQgFgPAAgRQABgWAHgSQAIgRAQgJQAQgKAXAAQAZAAAQAKQAPAJAIARQAIASgBAWQABARgFAPQgEAOgJAKQgJAKgNAGQgOAFgSAAQgRAAgNgFgAgUgrQgJAGgEALQgEALAAAPQAAAQAEALQAEALAJAHQAIAGAMAAQAOAAAIgGQAJgHADgLQAEgLAAgQQAAgWgIgOQgJgOgVAAQgMAAgIAHg");
	this.shape_26.setTransform(29.15,30.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("Ag2BLIAAiVIAuAAQAdAAAQAJQAOAIAAAVQAAAIgCAIQgDAHgFADQgFAFgHACIAAABQAHABAGADQAGADAEAIQADAGABANQgBANgGAKQgHAJgMAGQgMAFgRAAgAgXAxIAVAAQANAAAGgGQAGgGgBgIQABgGgDgFQgDgEgFgCQgGgDgJAAIgUAAgAgXgOIASAAQANAAAGgFQAFgFAAgIQAAgIgGgEQgHgEgMAAIgRAAg");
	this.shape_27.setTransform(14.15,30.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgOAYIAFgQIADgQIADgPIAQAAIACACIgFAOIgGAQIgFAPg");
	this.shape_28.setTransform(155.65,13.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgpBNIgGgBIAAgNIAFABIAGAAQAHAAAEgCQAEgCADgFQAEgEACgGIAGgQIgrhqIASAAIAXA+IAEALIADAIIABAJIABAAIAEgMIAGgQIAWg+IARAAIguB6QgEAKgEAIQgFAGgHAFQgHADgKAAg");
	this.shape_29.setTransform(148.4,10.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgaA0QgHgEgEgGQgFgHAAgLQAAgQANgIQAMgIAZgBIATAAIAAgHQAAgOgGgGQgGgFgKAAQgIAAgIACIgOAGIgFgMQAHgEAKgDQAJgDAJAAQAUAAAJAKQAJAIAAASIAABIIgMAAIgDgQIgBAAQgFAHgFADQgEAFgGABQgHACgIAAQgKABgIgEgAAKABQgSABgJAGQgIAGAAALQAAAJAFAEQAGAEAKABQANAAAIgIQAKgIAAgRIAAgJg");
	this.shape_30.setTransform(137.5,7.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AA2BHIAAhaIAAgMIAAgNIABgKIgBAAIgwB9IgNAAIgvh9IgBAAIABAKIAAANIAAANIAABZIgQAAIAAiOIAZAAIAtB2IAAAAIAuh2IAZAAIAACOg");
	this.shape_31.setTransform(123.35,6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AgXA1QgIgBgGgDIAAgPIAPAGQAKADAJAAQANgBAGgEQAGgEAAgIQAAgFgCgDQgDgEgFgDQgGgDgKgDIgRgHQgIgFgEgFQgEgFAAgKQAAgNALgHQALgHARgBQAKABAIABIAQAGIgGAMIgOgEQgHgCgIAAQgKAAgGAEQgGADAAAHQAAAEACAEQADADAGADIAPAGIASAHQAHAEAEAGQAEAGAAAIQAAAKgFAIQgFAGgKAEQgJAEgMgBQgMAAgIgCg");
	this.shape_32.setTransform(104.525,7.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgHBJIAAhqIAPAAIAABqgAgGg2QgDgCAAgGQAAgFADgDQADgDADABQAEgBADADQADADAAAFQAAAGgDACQgDADgEgBQgDABgDgDg");
	this.shape_33.setTransform(97.225,5.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AAdBMIAAhEQAAgNgGgGQgHgIgMABQgLgBgHAGQgHAEgDAJQgDAIAAAMIAAA4IgRAAIAAiXIARAAIAAAuIgBAIIAAAGIABAAQADgFAFgEQAFgEAHgBQAGgDAHAAQANAAAIAFQAJADAEAJQAFAJAAANIAABFg");
	this.shape_34.setTransform(88.625,5.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AgHBHIAAh+IgtAAIAAgQIBpAAIAAAQIgtAAIAAB+g");
	this.shape_35.setTransform(76.95,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.2,230,81.10000000000001);


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
	this.shape.graphics.f("#B20000").s().p("AgYBdIAAiQIgtAAIAAgpICLAAIAAApIgtAAIAACQg");
	this.shape.setTransform(150.575,36.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AAXBdIhEiCIgBAAIABAOIABARIABAPIAABUIgtAAIAAi5IBCAAIBCCAIABAAIgBgOIAAgQIgBgOIAAhUIAtAAIAAC5g");
	this.shape_1.setTransform(132.1,36.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("Ag2BdIAAi5IBtAAIAAAoIg7AAIAAAeIA3AAIAAAnIg3AAIAAAjIA7AAIAAApg");
	this.shape_2.setTransform(114.525,36.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AgdBdIg8i5IA4AAIAZBdIAEAOIADAQIABAOIACgNIADgRIADgNIAaheIA4AAIg9C5g");
	this.shape_3.setTransform(98.025,36.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("Ag2BdIAAi5IBtAAIAAAoIg7AAIAAAeIA3AAIAAAnIg3AAIAAAjIA7AAIAAApg");
	this.shape_4.setTransform(82.275,36.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgdBfQgKgBgIgDIgRgHIAAgtQAPAIAQAEQAPAEAMAAQAHAAAFgCQAEgCADgDQACgDAAgEQAAgFgDgDQgEgEgIgEIgSgJIgTgKQgHgEgGgGQgHgHgCgIQgEgJAAgMQAAgSAJgMQAJgMAQgGQAPgGAUAAQASAAAPAEQAOAEAMAFIgPAnQgMgGgMgDQgLgDgKAAQgGAAgEACQgEABgCADQgCACAAAEQAAAEADAEQADADAHAEIAXALQANAFAJAIQAKAGAFAKQAFAJAAAPQAAAPgHAOQgJANgQAIQgPAIgZAAg");
	this.shape_5.setTransform(60.65,36.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("Ag2BdIAAi5IBtAAIAAAoIg7AAIAAAeIA3AAIAAAnIg3AAIAAAjIA7AAIAAApg");
	this.shape_6.setTransform(46.275,36.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("Ag8BdIAAi5IAyAAIAACQIBHAAIAAApg");
	this.shape_7.setTransform(31.725,36.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AAnBdIgJgjIg7AAIgKAjIg3AAIA9i5IBCAAIA9C5gAAUARIgIgdIgEgOIgFgTIgDgRIgDAQIgEATIgDAPIgIAdIAmAAg");
	this.shape_8.setTransform(14.25,36.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgdBfQgJgBgJgDIgRgHIAAgtQAPAIAPAEQAQAEAMAAQAGAAAGgCQAEgCADgDQACgDAAgEQAAgFgEgDQgDgEgIgEIgSgJIgTgKQgIgEgGgGQgFgHgEgIQgDgJAAgMQAAgSAJgMQAJgMAQgGQAQgGATAAQATAAAOAEQAOAEAMAFIgPAnQgNgGgLgDQgMgDgJAAQgGAAgEACQgEABgCADQgCACAAAEQAAAEADAEQAEADAGAEIAXALQANAFAJAIQAKAGAFAKQAFAJAAAPQAAAPgHAOQgJANgPAIQgQAIgZAAg");
	this.shape_9.setTransform(-2.55,36.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgYBdIAAhHIg9hyIA2AAIAfBFIAghFIA2AAIg9BwIAABJg");
	this.shape_10.setTransform(169.225,4.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAoBdIgJgjIg8AAIgKAjIg2AAIA8i5IBCAAIA+C5gAAUARIgIgdIgEgOIgEgTIgEgRIgDAQIgDATIgFAPIgIAdIAnAAg");
	this.shape_11.setTransform(151.2,4.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AhOBdIAAi5IBBAAQAdAAAUAKQAVALALAUQALATAAAdQAAAfgMAWQgMAVgWALQgWALgdAAgAgcA0IAMAAQAVAAALgOQALgNAAgaQAAgRgFgLQgEgLgJgGQgJgFgNAAIgPAAg");
	this.shape_12.setTransform(132.575,4.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("Ag8BdIAAi5IAyAAIAACQIBHAAIAAApg");
	this.shape_13.setTransform(108.925,4.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AAoBdIgKgjIg7AAIgKAjIg3AAIA9i5IBCAAIA9C5gAAUARIgIgdIgEgOIgEgTIgEgRIgDAQIgDATIgFAPIgIAdIAnAAg");
	this.shape_14.setTransform(91.45,4.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgYBdIAAi5IAxAAIAAC5g");
	this.shape_15.setTransform(77.475,4.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAXBdIgmhEIgOAAIAABEIgxAAIAAi5IA9AAQAXAAARAGQARAGAJANQAIAMAAASQAAALgEAKQgDAJgIAHQgGAGgLAGIA2BRgAgdgLIAKAAQALAAAIgGQAHgFgBgNQAAgJgFgFQgGgFgOAAIgKAAg");
	this.shape_16.setTransform(65.35,4.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgnBZQgRgHgLgNQgLgMgGgSQgFgRAAgWQAAgdAKgUQAJgWAUgMQAUgMAeABQAggBAUAMQAUAMAJAWQAJAVAAAcQAAAWgFARQgFASgLAMQgLANgRAHQgRAGgYAAQgWAAgRgGgAgUgvQgJAHgDAMQgEAMAAAQQAAAQAEANQADAMAJAHQAIAGAMAAQAOAAAIgGQAIgHAEgMQAEgNAAgQQAAgYgJgPQgIgPgVAAQgMAAgIAHg");
	this.shape_17.setTransform(45.025,4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AA8BdIAAhSIAAgRIABgTIABgPIgCAAIglCFIgvAAIgmiFIgBAAIABAOIABATIABATIAABRIgtAAIAAi5IBDAAIAmCDIABAAIAmiDIBDAAIAAC5g");
	this.shape_18.setTransform(22.175,4.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("Ag2BdIAAi5IBtAAIAAAoIg7AAIAAAeIA3AAIAAAnIg3AAIAAAjIA7AAIAAApg");
	this.shape_19.setTransform(2.875,4.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AA8BdIAAhSIAAgRIABgTIABgPIgCAAIglCFIgvAAIgmiFIgBAAIABAOIABATIABATIAABRIgtAAIAAi5IBDAAIAmCDIABAAIAmiDIBDAAIAAC5g");
	this.shape_20.setTransform(-17.175,4.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-16,216,71.8);


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
	this.shape.setTransform(103.6478,138.5966,1.3311,1.3285);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(17.7225,128.0647,1.3311,1.3284);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(52.9796,89.9743,1.3311,1.3284);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(53.0636,91.7178,1.3311,1.3284);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(53.3156,86.7196,1.3311,1.3284);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(49.6027,82.0202,1.3311,1.3284);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(47.1344,99.373,1.3311,1.3284);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(48.0719,86.5561,1.3311,1.3284);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(31.2333,129.2808,1.3311,1.3284);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(100.9997,121.9904,1.3311,1.3284);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(97.0323,131.7361,1.3311,1.3284);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(96.3621,128.9317,1.3311,1.3284);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(97.1334,126.904,1.3311,1.3284);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(97.8928,125.0183,1.3311,1.3284);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(93.0969,137.0344,1.3311,1.3284);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(105.8091,96.6829,1.3311,1.3284);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(74.3948,118.6687,1.3311,1.3284);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(80.2184,104.9525,1.3311,1.3284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(41.2652,106.5441,1.3311,1.3284);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(52.5832,101.4962,1.3311,1.3284);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(28.0693,115.5412,1.3311,1.3284);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(33.6931,100.1719,1.3311,1.3284);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(21.9464,116.5972,1.3311,1.3284);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(55.3895,74.7095,1.3311,1.3284);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(40.9141,75.4927,1.3311,1.3284);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(48.6343,155.7059,1.3311,1.3284);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(56.4876,153.968,1.3311,1.3284);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(53.2376,154.8646,1.3311,1.3284);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(65.0065,148.4883,1.3311,1.3284);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(45.4089,155.4624,1.3311,1.3284);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(32.3953,149.2521,1.3311,1.3284);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(60.4476,152.241,1.3311,1.3284);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(35.9559,152.6063,1.3311,1.3284);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(48.1019,154.9975,1.3311,1.3284);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(27.1043,148.9865,1.3311,1.3284);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(62.776,118.1373,1.3311,1.3284);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(65.8936,113.6547,1.3311,1.3285);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(86.7393,95.2541,1.3311,1.3284);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(13.0962,95.2541,1.3311,1.3284);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(13.0969,95.2548,1.3311,1.3284);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(49.9699,95.2555,1.3311,1.3285);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(185.4989,100.5655,1.3311,1.3284);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(242.6012,100.5655,1.3311,1.3284);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(165.6662,100.3995,1.3311,1.3284);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(295.6437,100.5655,1.3311,1.3284);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(276.543,100.5987,1.3311,1.3284);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(259.5055,100.5655,1.3311,1.3284);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(223.8998,100.5987,1.3311,1.3284);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(206.1635,100.5655,1.3311,1.3284);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(138.2465,98.7058,1.3311,1.3284);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(148.8616,103.3883,1.3311,1.3284);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(295.8433,71.3078,1.3311,1.3284);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(142.5724,71.2746,1.3311,1.3284);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(269.9876,71.0754,1.3311,1.3284);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(243.4331,71.5735,1.3311,1.3284);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(216.1464,71.3078,1.3311,1.3284);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(190.2907,71.3078,1.3311,1.3284);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(165.2669,71.3078,1.3311,1.3284);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(218.3851,127.535,1.3311,1.3284);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(218.3882,116.5432,1.3311,1.3284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,56.9,328.5,112.19999999999999);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,300,230), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,300,230), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,300,230), null);


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
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAyIgWgnIgMAAIAAAnIgVAAIAAhjIAdAAQANAAAJAEQAIADAFAGQAEAHAAAKQAAAHgDAFQgCAFgEACIgJAHIAdArgAgSgEIAHAAQAKAAAEgEQAFgEgBgGQABgIgFgCQgEgDgKAAIgHAAg");
	this.shape_1.setTransform(96.65,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAvQgJgDgGgHQgGgHgDgJQgDgJAAgMQAAgPAGgLQAFgMAKgGQALgHAPAAQAQAAALAHQAKAGAFAMQAGAMAAAOQAAAMgDAJQgDAJgGAHQgGAHgJADQgJAFgMAAQgLAAgJgFgAgNgdQgGAFgDAHQgCAHAAAKQAAAKACAIQADAHAFAEQAGAFAIAAQAJAAAGgFQAFgEADgHQACgIAAgKQAAgPgGgJQgFgJgOAAQgIAAgFAEg");
	this.shape_2.setTransform(85.875,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAyIAAgwIABgJIAAgMIAAgIIAAAAIgaBNIgSAAIgYhNIgBAAIAAAIIABAMIABALIAAAuIgUAAIAAhjIAeAAIAXBLIAAAAIAYhLIAdAAIAABjg");
	this.shape_3.setTransform(73.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAyIgrhLIgBAAIABAKIAAAJIABAJIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIAAgJIAAgJIgBgIIAAgwIATAAIAABjg");
	this.shape_4.setTransform(57.825,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAyIgYgnIgKAAIAAAnIgWAAIAAhjIAdAAQANAAAIAEQAKADAEAGQAEAHAAAKQAAAHgCAFQgDAFgFACIgJAHIAeArgAgRgEIAGAAQALAAADgEQAEgEABgGQgBgIgEgCQgEgDgKAAIgGAAg");
	this.shape_5.setTransform(48.2,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgHgXIgCgGIgCgHIgCgHIgBAHIgCAIIgCAFIgHAXIAZAAg");
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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape.graphics.f("#6CC14C").s().p("A3bAyIAAhjMAu3AAAIAABjg");
	this.shape.setTransform(150,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,10);


// stage content:
(lib.WBAY_214318_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(150,558,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:538,alpha:1},14).wait(112));

	// text3
	this.instance_1 = new lib.text3("synched",0);
	this.instance_1.setTransform(99,490.6,1,1,0,0,0,74,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({y:500.6,alpha:1},14,cjs.Ease.get(1)).wait(126));

	// text2
	this.instance_2 = new lib.text2("synched",0);
	this.instance_2.setTransform(109,406.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({y:416.6,alpha:1},14,cjs.Ease.get(1)).wait(140));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(149.95,344.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:354.6,alpha:1},14,cjs.Ease.get(1)).wait(154));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(151.2,238.5,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:248.5,alpha:1},14,cjs.Ease.get(1)).wait(168));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(80,229,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({y:227,alpha:1},14).wait(182));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(164).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(31));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(35).to({alpha:0},15,cjs.Ease.get(1)).wait(31));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(86).to({alpha:0},15,cjs.Ease.get(1)).wait(81));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(196));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,152,302);
// library properties:
lib.properties = {
	id: '9AF5F1D021874C488F1CC2205AADEF32',
	width: 300,
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
an.compositions['9AF5F1D021874C488F1CC2205AADEF32'] = {
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