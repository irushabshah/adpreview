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



(lib.Img1 = function() {
	this.initialize(img.Img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.OSHALogo = function() {
	this.initialize(img.OSHALogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,91);// helper functions:

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


(lib.W2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AAoA9QAAgLglgeQglgdgJglQgFgRgGgFIAAAAQAEABADACQAEADAJAKQAcAgAkAaQAPAKAFAHQAFAHAAAJQAAAJgEAIIgIAMIgBABQgCAAAAgIg");
	this.shape.setTransform(4.7438,7.7809,1,1,0,-10.2201,169.7799);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAKBUIgMgFQgIgEgFgIQgFgHAAgIQgBgJAGgRQAPgqADgrQACgOACgEQAAgEADgCQgCAIAGAPQAOAkgNAtQgMAuAGAKQAGAHgDAAIgCAAg");
	this.shape_1.setTransform(9.1,0.5,1,1,0,0,0,1.4,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{regX:0,regY:0,skewX:-10.2201,skewY:169.7799,x:4.7438,y:7.7809}}]}).to({state:[{t:this.shape,p:{regX:-5.6,regY:-6.5,skewX:-27.412,skewY:152.588,x:9.1,y:0.35}}]},2).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.9,17.1);


(lib.W1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCC").s().p("AAoA9QAAgLglgeQglgdgJglQgFgRgGgFIAAAAQAEABADACQAEADAJAKQAcAgAkAaQAPAKAFAHQAFAHAAAJQAAAJgEAIIgIAMIgBABQgCAAAAgIg");
	this.shape.setTransform(4.2062,7.7809,1,1,10.2201);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({regX:-5.2,regY:-6.5,rotation:20.6935,x:0.25,y:0.45},0).wait(2).to({regX:-5.3,regY:-7.1,rotation:25.4471,x:0.3,y:-0.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,9.1,16.700000000000003);


(lib.Sh = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A7dmeQAfgkA6gxQB2hkCMhFQHCjfIECiQCiAzFlCHQEKBkCNAcQDIApC3goQDMgrD3iZQEEigBsCfQBWCAgOFFQgKDng7E0QgeCagbBrMgz6ACcg");
	this.shape.setTransform(175.7975,82.8373);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sh, new cjs.Rectangle(0,3,351.6,159.7), null);


(lib.OSHALogo_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(197.025,369.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAyQgYAAAAgZIAAglIgKAAIAAgRIAKAAIAAgTIATAAIAAATIASAAIAAARIgSAAIAAAlQAAAEACACQACACAEgBIAKAAIAAASg");
	this.shape_1.setTransform(192.225,365.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_2.setTransform(185.475,366.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHADQAGAEAEAFIAAgLIAUAAIAABPIgUAAIAAgMQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgUQgFADgDAFQgDAFAAAHQAAAHADAFQADAGAFADQAFACAEAAQAGAAAFgCQAFgEACgFQADgFAAgHQAAgGgDgGQgCgFgFgDQgFgCgGAAQgEAAgFACg");
	this.shape_3.setTransform(176.275,366.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgEgEABgFQgBgFAEgDQADgDAFAAQAFAAAEADQADADAAAFQAAAFgDAEQgEAEgFAAQgFAAgDgEg");
	this.shape_4.setTransform(170.15,364.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_5.setTransform(166.55,365.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IAUAAIAAALQAEgFAGgEQAIgDAHAAQAKAAAIAFQAJAFAFAJQAEAJAAAMQAAANgEAIQgFAJgJAFQgIAGgKAAQgHAAgIgEQgGgEgEgFIAAAxgAgKgmQgFADgCAFQgDAFAAAIQAAAHADAFQACAFAFACQAGADAEAAQAFAAAFgDQAFgCADgFQADgFAAgIQAAgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgGADg");
	this.shape_6.setTransform(160.65,368.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtAoIAAgrQAAgJgEgFQgFgFgIAAQgIAAgFAFQgFAFAAAJIAAArIgTAAIAAgrQAAgJgFgFQgEgFgIAAQgJAAgFAFQgEAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQADgFAHgDQAGgDAHAAQAJAAAHAEQAHAEAEAHQAEgHAHgEQAHgEAJAAQAPAAAIAJQAJAJAAAQIAAAtg");
	this.shape_7.setTransform(148.425,366.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAkQgJgFgGgJQgFgKAAgMQAAgLAFgKQAGgJAJgFQAJgFALAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAKQgFAJgKAFQgJAFgLAAQgLAAgJgFgAgOgQQgGAFAAALQAAALAGAHQAGAFAIAAQAFAAAFgCQAEgDADgFQADgFAAgIQAAgLgGgFQgGgHgIABQgIgBgGAHg");
	this.shape_8.setTransform(137.525,366.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAtQgLgHgHgLQgHgMAAgPQAAgOAHgLQAHgMALgHQAMgGANAAQARAAAMAIQANAJAFAPIgXAAQgEgHgGgDQgGgEgIAAQgIAAgHAEQgHAEgDAIQgEAHAAAJQAAAKAEAIQADAHAHAEQAHAEAIAAQAIAAAGgEQAGgEAEgGIAXAAQgFAPgNAJQgMAIgRAAQgNAAgMgGg");
	this.shape_9.setTransform(128.025,365.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbA6IARgnIgfhMIAWAAIATA3IAWg3IAVAAIgwBzg");
	this.shape_10.setTransform(115.9,368.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAyQgYAAAAgZIAAglIgKAAIAAgRIAKAAIAAgTIATAAIAAATIASAAIAAARIgSAAIAAAlQAAAEACACQACACAEgBIAKAAIAAASg");
	this.shape_11.setTransform(108.025,365.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAkQgJgFgFgJQgFgKgBgMQAAgLAGgKQAFgJAIgFQAKgFALAAQALAAAJAFQAJAEAEAJQAGAKAAALIgBAHIg5AAQABAIAFAGQAGAEAGAAQALAAAFgKIAWAAQgEAMgKAHQgJAIgOAAQgLAAgJgFgAATgGQgBgIgFgFQgFgEgIAAQgGAAgGAEQgEAEgCAJIAlAAIAAAAg");
	this.shape_12.setTransform(100.9,366.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMA4IAAg+IgJAAIAAgQIAJAAIAAgEQAAgPAJgHQAHgHARABIAAAQQgHAAgDADQgDADAAAGIAAAEIAOAAIAAAQIgOAAIAAA+g");
	this.shape_13.setTransform(94.15,364.7983);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHADQAGAEAEAFIAAgLIAUAAIAABPIgUAAIAAgMQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgUQgFADgDAFQgDAFAAAHQAAAHADAFQADAGAFADQAFACAEAAQAGAAAFgCQAFgEACgFQADgFAAgHQAAgGgDgGQgCgFgFgDQgFgCgGAAQgEAAgFACg");
	this.shape_14.setTransform(86.825,366.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAvQgIgDgFgHQgFgHAAgJIAVAAQAAAHAFADQADADAHABQAGgBAEgDQAEgDABgGQgBgEgDgDQgCgDgEgCIgLgDIgPgGQgGgCgFgFQgEgGAAgJQAAgJAEgGQAFgIAIgCQAIgEAKAAQAOAAALAHQAJAIABANIgWAAQAAgFgEgEQgFgDgFAAQgGAAgDADQgEADAAAGQAAAEACACQADADAEACIAKAEQAKACAGAEQAGACAEAFQAFAGAAAJQAAAIgEAHQgEAHgIAEQgIAEgLAAQgJAAgJgEg");
	this.shape_15.setTransform(78.6,365.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiAwQgJgEgFgHQgEgHAAgJQAAgJAFgIQAGgHALgFQgEgFgBgEQgCgEAAgGQAAgGAEgGQADgFAHgEQAGgDAJAAQAIAAAGAEQAHADADAGQADAGAAAHIgTAAQAAgFgCgDQgCgCgEAAQgEAAgDACQgDADAAADQAAAEADADIAHAJIAXAYIABgBIAAAAIAIgNIAWAAIgLARIgGAKIAYAYIgYAAIgLgLQgOANgTAAQgLAAgIgEgAggAUQgBAHAGAEQAEAEAJAAQALAAAIgIIgXgYQgOAGAAALg");
	this.shape_16.setTransform(211.7,351.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAwQgIgFgFgJQgFgJAAgNQAAgMAFgIQAFgJAIgFQAIgFAKAAQAHAAAHADQAHADAEAGIAAgmIAUAAIAABpIgUAAIAAgLQgEAFgGAEQgHAEgIAAQgKAAgIgGgAgJgHQgFADgDAEQgDAFAAAHQAAAIADAFQADAFAFADQAFADAEAAQAGAAAFgDQAFgDACgFQADgFAAgHQAAgIgDgFQgCgEgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_17.setTransform(198.575,350.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAkQgJgGgGgJQgFgJAAgMQAAgLAFgKQAGgJAJgFQAJgFALAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAJQgFAJgKAGQgJAFgLAAQgLAAgJgFgAgOgQQgGAFAAALQAAALAGAHQAGAFAIAAQAFAAAFgDQAEgCADgFQADgGAAgHQAAgLgGgFQgGgHgIAAQgIAAgGAHg");
	this.shape_18.setTransform(189.575,352.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAkQgJgGgGgJQgFgJAAgMQAAgLAFgKQAGgJAJgFQAJgFALAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAJQgFAJgKAGQgJAFgLAAQgLAAgJgFgAgOgQQgGAFAAALQAAALAGAHQAGAFAIAAQAFAAAFgDQAEgCADgFQADgGAAgHQAAgLgGgFQgGgHgIAAQgIAAgGAHg");
	this.shape_19.setTransform(180.775,352.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAQIgpAAIAAAaIAfAAIAAAPIgfAAIAAAqg");
	this.shape_20.setTransform(173.075,351.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAwQgIgFgFgJQgFgJAAgNQAAgMAFgIQAFgJAIgFQAIgFAKAAQAHAAAHADQAHADAEAGIAAgmIAUAAIAABpIgUAAIAAgLQgEAFgGAEQgHAEgIAAQgKAAgIgGgAgJgHQgFADgDAEQgDAFAAAHQAAAIADAFQADAFAFADQAFADAEAAQAGAAAFgDQAFgDACgFQADgFAAgHQAAgIgDgFQgCgEgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_21.setTransform(161.675,350.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_22.setTransform(152.875,352.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgMIAUAAIAABOIgUAAIAAgLQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgUQgFADgDAFQgDAFAAAHQAAAHADAFQADAGAFACQAFADAEAAQAGAAAFgDQAFgDACgFQADgFAAgHQAAgGgDgGQgCgFgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_23.setTransform(143.875,352.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAaAyIgGgTIgnAAIgHATIgVAAIAkhjIAXAAIAkBjgAAOAPIgOgpIgOApIAcAAg");
	this.shape_24.setTransform(131.775,351.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAyIAAgqIgpAAIAAAqIgUAAIAAhjIAUAAIAAApIApAAIAAgpIAUAAIAABjg");
	this.shape_25.setTransform(121.475,351.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAvQgJgDgEgHQgFgGAAgKIAVAAQABAGAEAEQAEADAFABQAIgBADgDQAFgDAAgFQAAgFgEgDQgCgDgEgCIgLgDIgPgGQgGgCgEgFQgFgGAAgJQAAgJAFgGQAEgIAIgCQAIgEAKAAQAPAAAKAHQAJAIABAOIgWAAQgBgGgDgDQgEgEgGAAQgGAAgDAEQgEADAAAFQAAAEADACQACADAEACIAKAEQAKADAGADQAGACAFAFQAEAGAAAJQAAAIgEAHQgEAHgIAEQgIAEgLAAQgKAAgIgEg");
	this.shape_26.setTransform(111.2,351.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgZAtQgMgHgGgMQgHgLAAgPQAAgOAHgMQAGgLAMgHQAMgGANAAQAPAAALAGQALAHAHALQAHAMAAAOQAAAPgHALQgHAMgLAHQgMAGgOAAQgNAAgMgGgAgPgcQgGAEgFAHQgDAIAAAJQAAAKADAIQAFAHAGAEQAHAEAIAAQAJAAAHgEQAHgEAEgHQAEgIAAgKQAAgJgEgIQgEgHgHgEQgHgEgJAAQgIAAgHAEg");
	this.shape_27.setTransform(101.4,351.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPAuQgGgGAAgLQAAgLAGgGQAHgHAKAAQAKAAAGAHQAGAGAAALQAAALgGAGQgGAGgKAAQgLAAgGgGgAAXAdQAAALAIAAQAIAAAAgLQAAgLgIAAQgIAAAAALgAglAyIA3hjIAUAAIg3BjgAgvgKQgGgGAAgLQAAgLAGgGQAHgHAKAAQAKAAAGAHQAHAGAAALQAAALgHAGQgGAGgKAAQgKAAgHgGgAgmgbQAAALAIAAQAEAAACgDQACgDAAgFQAAgMgIAAQgIAAAAAMg");
	this.shape_28.setTransform(85.125,351.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAnQgJgOAAgZQAAgXAJgOQAJgPAUAAQAVAAAJAPQAJAOAAAXQAAAZgJAOQgJAOgVAAQgUAAgJgOgAgLgcQgEAEgCAHIgBARIABASQACAIAEAEQAEAEAHAAQAIAAAEgEQAEgEABgIQACgHAAgLQAAgKgCgHQgBgHgEgEQgEgFgIAAQgHAAgEAFg");
	this.shape_29.setTransform(75.675,350.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAnQgJgOAAgZQAAgXAJgOQAJgPAUAAQAVAAAJAPQAJAOAAAXQAAAZgJAOQgJAOgVAAQgUAAgJgOgAgLgcQgEAEgCAHIgBARIABASQACAIAEAEQAEAEAHAAQAIAAAEgEQAEgEABgIQACgHAAgLQAAgKgCgHQgBgHgEgEQgEgFgIAAQgHAAgEAFg");
	this.shape_30.setTransform(67.075,350.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCA0IAAhVIgOAAIAAgSIAhAAIAABng");
	this.shape_31.setTransform(60.175,350.85);

	this.instance = new lib.OSHALogo();
	this.instance.setTransform(83,307,0.4221,0.4221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(55,307,163.4,69.5), null);


(lib.Newtext = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTASQgHgHAAgLQAAgKAHgHQAIgHALAAQAMAAAIAHQAHAHAAAKQAAALgHAHQgIAHgMAAQgLAAgIgHg");
	this.shape.setTransform(154.175,-66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BvIAihMIg9iRIA0AAIAhBeIAiheIAzAAIheDdg");
	this.shape_1.setTransform(145.6,-67.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBEQgPgKgJgRQgIgSgBgXQABgWAIgSQAJgSAPgJQAPgKATAAQAPABAMAGQAMAHAHAKIAAgVIAuAAIAACVIguAAIAAgVQgHALgMAGQgMAHgPgBQgTABgPgKgAgWgaQgKAKAAAQQAAARAKAKQAKAKAMABQAPAAAJgKQAKgKAAgSQAAgQgKgKQgJgKgPAAQgMAAgKAKg");
	this.shape_2.setTransform(128.3,-71.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBcQgPgKgJgRQgIgSgBgYQABgXAIgQQAJgSAPgJQAQgKASAAQAOAAAMAGQAMAHAIAKIAAhGIAuAAIAADHIguAAIAAgWQgHALgMAGQgMAHgPAAQgSAAgQgJgAgWgDQgKAJABARQgBASAKAJQAKALAMAAQAPAAAJgKQAKgKAAgSQAAgQgKgKQgJgJgPgBQgMABgKAJg");
	this.shape_3.setTransform(111.3,-73.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBEQgSgJgKgSQgKgRAAgYQAAgWAKgSQAKgSASgJQASgKAVAAQAWAAASAKQASAJAKASQAKASAAAWQAAAYgKARQgKASgSAJQgSAKgWgBQgWABgRgKgAgVgaQgJAJAAARQAAATAJAJQAIAJANABQANgBAJgJQAJgJAAgTQAAgRgJgJQgJgKgNAAQgMAAgJAKg");
	this.shape_4.setTransform(94.675,-71.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYBeQgYAAgOgNQgOgMAAgcIAAg7IgTAAIAAgmIATAAIAAglIAtAAIAAAlIAfAAIAAAmIgfAAIAAA8QAAAHAEADQADADAHAAIARAAIAAAng");
	this.shape_5.setTransform(81.9,-73.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBMIAAhRQAAgPgHgIQgJgIgMAAQgNAAgIAIQgHAIgBAPIAABRIguAAIAAiVIAuAAIAAAUQAIgKAMgGQAKgGAPAAQAbAAAPARQAQARAAAeIAABXg");
	this.shape_6.setTransform(210.7,-102.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBEQgSgJgKgSQgKgRAAgYQAAgWAKgSQAKgRASgKQASgJAVAAQAWAAASAJQASAKAKARQAKASAAAWQAAAYgKARQgKASgSAJQgSAJgWABQgWgBgRgJgAgVgbQgJAKAAARQAAASAJAKQAIAKANAAQANAAAJgKQAJgKAAgSQAAgRgJgKQgJgJgNgBQgMABgJAJg");
	this.shape_7.setTransform(193.875,-102.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBsIAAiVIAtAAIAACVgAgThBQgHgHAAgKQAAgLAHgHQAIgHALAAQAMAAAIAHQAHAHAAALQAAAKgHAHQgIAIgMAAQgLAAgIgIg");
	this.shape_8.setTransform(182.825,-105.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBeQgZAAgOgNQgOgMAAgcIAAg7IgSAAIAAgmIASAAIAAglIAtAAIAAAlIAfAAIAAAmIgfAAIAAA8QAAAHAEADQADADAHAAIARAAIAAAng");
	this.shape_9.setTransform(174.4,-104.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBEQgPgJgIgSQgKgSABgXQgBgWAKgSQAIgRAPgKQAPgJATAAQAPAAAMAGQAMAGAGALIAAgVIAuAAIAACWIguAAIAAgWQgGAKgNAHQgMAGgPABQgRgBgQgJgAgWgaQgJAKAAAQQAAARAJAKQAJALAOAAQAOAAAJgLQAJgJAAgSQAAgQgJgKQgJgKgOAAQgOAAgJAKg");
	this.shape_10.setTransform(160.3,-102.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBeQgYAAgOgNQgOgMAAgcIAAg7IgTAAIAAgmIATAAIAAglIAtAAIAAAlIAfAAIAAAmIgfAAIAAA8QAAAHAEADQADADAHAAIARAAIAAAng");
	this.shape_11.setTransform(147.15,-104.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBEQgNgHgHgPQgHgOAAgUIAAhXIAuAAIAABQQAAAQAHAIQAJAJAMAAQANAAAIgJQAIgIAAgQIAAhQIAuAAIAACWIguAAIAAgVQgHAKgMAGQgLAGgPAAQgRAAgOgIg");
	this.shape_12.setTransform(133.65,-102.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOBxIAAjeIAuAAIAAAVQAGgLAMgGQANgGAOAAQATAAAPAJQAPAKAJARQAJASAAAXQAAAXgJARQgJASgPAJQgPAJgTABQgOgBgNgGQgMgHgGgKIAABegAgXg9QgJAKAAARQAAASAJAJQAJAKAOAAQAOAAAJgKQAKgKAAgRQAAgRgKgKQgJgKgOAAQgNAAgKAKg");
	this.shape_13.setTransform(117.2,-98.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBEQgSgJgJgSQgLgRAAgYQAAgWAKgSQAKgRARgKQARgJAWAAQAWAAAQAJQARAJAKARQAJARAAAWIAAAOIhnAAQABANAIAIQAHAHAMAAQARAAAGgPIAyAAQgEAPgLAMQgJAMgPAHQgPAGgSABQgWgBgQgJgAAcgNQABgNgJgGQgHgIgNABQgLgBgHAIQgJAGgBANIA4AAIAAAAg");
	this.shape_14.setTransform(100.65,-102.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguBMIAAiVIAuAAIAAAZQAIgNAMgHQAMgHAPAAIAAAxIgNAAQgRAAgJAHQgIAIAAARIAABGg");
	this.shape_15.setTransform(88.225,-102.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBMIAAiVIAuAAIAAAZQAIgNAMgHQAMgHAPAAIAAAxIgNAAQgRAAgJAHQgIAIAAARIAABGg");
	this.shape_16.setTransform(71.775,-102.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvBEQgNgHgHgPQgHgOAAgUIAAhXIAuAAIAABQQAAAQAHAIQAJAJAMAAQANAAAIgJQAIgIAAgQIAAhQIAuAAIAACWIguAAIAAgVQgHAKgMAGQgLAGgPAAQgRAAgOgIg");
	this.shape_17.setTransform(58.25,-102.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnBEQgSgJgKgSQgKgRAAgYQAAgWAKgSQAKgRASgKQASgJAVAAQAWAAASAJQASAKAKARQAKASAAAWQAAAYgKARQgKASgSAJQgSAJgWABQgWgBgRgJgAgVgbQgJAKAAARQAAASAJAKQAIAKANAAQANAAAJgKQAJgKAAgSQAAgRgJgKQgJgJgNgBQgMABgJAJg");
	this.shape_18.setTransform(41.775,-102.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BvIAihNIg9iQIA0AAIAhBeIAiheIAzAAIheDdg");
	this.shape_19.setTransform(26.45,-98.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguBbQgPgJgIgSQgKgRABgYQgBgXAKgQQAIgSAPgJQAPgKATAAQAOAAAMAHQANAFAGALIAAhGIAvAAIAADHIgvAAIAAgWQgGALgMAGQgMAHgPAAQgTAAgPgKgAgWgDQgKAJAAARQAAASAKAJQAJALAOAAQANAAAKgKQAKgKgBgSQABgRgKgJQgKgJgNgBQgOABgJAJg");
	this.shape_20.setTransform(179.3,-135.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBMIAAiVIAuAAIAAAZQAIgNAMgHQAMgHAPAAIAAAxIgNAAQgRAAgJAHQgIAIAAARIAABGg");
	this.shape_21.setTransform(165.975,-133.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguBEQgPgKgIgRQgJgSAAgXQAAgWAJgSQAIgRAPgKQAQgKASAAQAPAAAMAHQAMAHAGAKIAAgVIAuAAIAACVIguAAIAAgVQgGALgMAGQgNAHgOAAQgSAAgQgKgAgWgaQgJAJAAARQAAARAJAKQAJAKANAAQAOABAKgKQAJgKAAgSQAAgQgJgKQgKgKgOAAQgNAAgJAKg");
	this.shape_22.setTransform(151.1,-133.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvBFQgNgIgHgPQgHgPAAgTIAAhXIAuAAIAABRQAAAPAHAIQAJAIAMAAQANAAAIgIQAIgJAAgOIAAhRIAuAAIAACVIguAAIAAgUQgHAKgMAGQgLAGgPAAQgRAAgOgHg");
	this.shape_23.setTransform(134.2,-133.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxBiQgVgQgDgbIAuAAQACAJAIAFQAJAFAKAAQAOAAAJgJQAJgHAAgTIAAgVQgIALgLAGQgMAHgPAAQgSAAgQgKQgPgKgIgRQgKgRABgXQgBgXAKgSQAIgRAPgKQAQgKASAAQAPAAAMAHQAMAHAHAKIAAgVIAuAAIAACVQgBAVgHARQgJARgQAJQgRALgaAAQghgBgUgPgAgWg+QgKAJAAASQAAARAKAKQAJAJAOAAQANABAKgJQAKgKAAgSQAAgRgKgKQgKgKgNAAQgOAAgJAKg");
	this.shape_24.setTransform(116.85,-129.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglBEQgSgJgJgSQgLgRABgYQAAgWAJgSQAKgRARgKQASgKAUAAQAWAAASAKQAQAJAKARQAKARAAAXIgBAMIhoAAQABAOAJAIQAIAHALAAQARAAAGgOIAxAAQgDAPgKAMQgKALgPAHQgPAHgTAAQgUAAgRgKgAAcgOQAAgLgHgIQgIgGgNgBQgKABgJAGQgHAHgCAMIA4AAIAAAAg");
	this.shape_25.setTransform(99.7,-133.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBqIAAhwIgRAAIAAgmIARAAIAAgEQAAgcAQgOQAPgPAeAAIAIAAIAAAnQgNAAgFAEQgGAFAAAMIAAABIAZAAIAAAmIgZAAIAABwg");
	this.shape_26.setTransform(87,-136.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguBEQgPgKgIgRQgKgSABgXQgBgWAKgSQAIgRAPgKQAPgKATAAQAPAAAMAHQAMAHAGAKIAAgVIAvAAIAACVIgvAAIAAgVQgGALgNAGQgMAHgPAAQgRAAgQgKgAgWgaQgKAJAAARQAAARAKAKQAJAKAOAAQANABAKgKQAKgKgBgSQABgQgKgKQgKgKgNAAQgOAAgJAKg");
	this.shape_27.setTransform(73.1,-133.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiBaQgRgHgJgNQgKgNgBgSIAyAAQAAAKAHAFQAGAGAJAAQAKAAAGgFQAGgEAAgJQAAgHgFgEQgEgFgHgDIgTgHQgSgFgMgGQgLgFgJgLQgIgLAAgSQAAgbATgPQATgOAfAAQAfAAASAOQAUAPABAcIgyAAQAAgKgHgFQgGgGgIABQgJgBgFAFQgFAEAAAJQAAAJAJAFQAIAFASAGQASAGALAHQALAEAJALQAIAKAAASQAAAQgIANQgIANgQAIQgPAIgWAAQgTAAgRgHg");
	this.shape_28.setTransform(57.2,-135.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AseAAIY9AA");
	this.shape_29.setTransform(118.625,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(15.9,-148.5,202.79999999999998,145.5), null);


(lib.Img2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2_1, new cjs.Rectangle(0,0,300,600), null);


(lib.Img1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Img1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1_1, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape.graphics.f("#170648").s().p("AofSpIhPgRIAAkFIBsAaIA7AFQBPAAAlgZIA/hBIA5iDIBIisIp17WIFEAAIHGVmIHL1mIE8AAIkMLqIkFLJQj3KKhlCQQhlCOj4AAg");
	this.shape.setTransform(1742.775,159.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_1.setTransform(1616.475,122.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AonKcQjbjnAAmgQAAmYDdj/QDckAFkAAQCzAACqBWQCoBUBZCHQBUCAAdCrQAZB2AAEAIzTAAQAIEDBxCcQByCeDtAAQDeAACEiUQBLhXAehwIEZAAQgMBdg9B0QhAByhOBJQiAB/i/AsQhnAah/AAQk8AAjbjngAHeiSQgSi6g/huQh0jPkPAAQjDAAiFCPQiECNgHDbIOnAAIAAAAg");
	this.shape_2.setTransform(1461.075,125.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AieNSIpy6jIFLAAIHFVnIHZ1nIE4AAIqBajg");
	this.shape_3.setTransform(1290.65,124.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AqML0QiXiQAAjYQAAjrCUiCQCUiBDvgeIHHg6QBigMAhhGQATgmAAhIQAAiThnhBQhphDi/AAQjfAAheB5Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7ByQC6ByAADyIAAPSQAAAsATAbQASAbA6AAIArgBIAzgIIAADTIhmAXIhfAGQiTgBhDhoQgjg4gOhlQhYByijBUQiiBUjFAAQjtAAiViPgADDAiIiiAgIirAWQibAVhOAsQiFBLAAChQAAB9BaBHQBbBHB7AAQCXABCMhHQDuhzAAkIIAAjjQg0AghSAWg");
	this.shape_4.setTransform(1122.875,125.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("ArmSNMAAAgkaIE8AAMAAAAgFISRAAIAAEVg");
	this.shape_5.setTransform(947.825,92.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_6.setTransform(713.425,122.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("AiQSNIAA6aIEhAAIAAaagAiQtJIAAlEIEhAAIAAFEg");
	this.shape_7.setTransform(613.625,92.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("AqML0QiXiQAAjYQAAjrCUiCQCUiBDvgeIHHg6QBigMAhhGQATgmAAhIQAAiThnhBQhphDi/AAQjfAAheB5Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7ByQC6ByAADyIAAPSQAAAsATAbQASAbA6AAIArgBIAzgIIAADTIhmAXIhfAGQiTgBhDhoQgjg4gOhlQhYByijBUQiiBUjFAAQjtAAiViPgADDAiIiiAgIirAWQibAVhOAsQiFBLAAChQAAB9BaBHQBbBHB7AAQCXABCMhHQDuhzAAkIIAAjjQg0AghSAWg");
	this.shape_8.setTransform(490.825,125.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("Ak8RPQhQg3hah7IAADZIkIAAMAAAgkiIEWAAIAANOQBeh6CDg/QCDhCCXAAQE/ABDGDbQDHDZAAGoQAAGTjEELQjEELlcgBQjAAAiHhdgAlUjIQiUCQAAFLQAADvA9CWQBwEYE2AAQDoAAByi4QB0i4AAktQAAkMh0iwQhyiwjhAAQjDAAiTCRg");
	this.shape_9.setTransform(310.375,95.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AK2SNIjsq5IuZAAIj8K5IlEAAMANtgkaIFkAAMANOAkagAFkDSIliwEIl3QEILZAAg");
	this.shape_10.setTransform(108.775,92.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-2,-42.8,1828.3,329), null);


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
	this.shape.graphics.f("#170648").s().p("AgjGAQgcgoABg+IAAmwIhZAAIAAhaIBZAAIAAi2IBtAAIAAC2IBpAAIAABaIhpAAIAAGpQAAAjAYALQAMAHAeAAIARgBIAWgCIAABYIgnAIIgtACQhLAAgcgng");
	this.shape.setTransform(982.2,39.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("ACbFOIAAmbQAAg8gSgkQgeg9hMAAQgmAAgZAIQgtANgjAoQgbAhgIAjQgJAiAABAIAAFVIhuAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA+AAQCMAAAwBhQAbA1AABjIAAGig");
	this.shape_1.setTransform(930.8,47.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AjUEBQhThZAAigQgBicBVhiQBVhjCJAAQBEAABCAhQBBAhAiA0QAgAxALBCQAKAtAABiInbAAQADBjAsA9QArA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgwAAQh6AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_2.setTransform(860.6,48.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_3.setTransform(774.525,47.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AjUEBQhThZAAigQAAicBUhiQBVhjCIAAQBFAABCAhQBAAhAjA0QAgAxALBCQAKAtAABiInbAAQADBjArA9QAsA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgxAAQh5AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_4.setTransform(687,48.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("Ai4GoQhIgwgIhkIBvAAQAIArAYAYQAlAlBQAAQB8AAAnhZQAXg1gCiHQghAyguAZQguAYhLAAQhqABhPhMQhQhMAAitQAAijBQhcQBQhdBxAAQBMAAA5AmQAfAWAgApIAAhTIBmAAIAAJSQAAB8glBIQhECFi8AAQhpAAhIgvgAiVkIQgXA6AABeQAABvAtA4QAtA5BLAAQB1AAAwhqQAag7AAhRQAAh5gyg7Qgxg7hOAAQhyAAgqBtg");
	this.shape_5.setTransform(615.775,61.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_6.setTransform(549.925,48.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("ACaFOIAAmbQAAg8gRgkQgeg9hMAAQgmAAgaAIQgsANgjAoQgbAhgIAjQgJAiABBAIAAFVIhvAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA/AAQCKAAAyBhQAbA1AABjIAAGig");
	this.shape_7.setTransform(479.2,47.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_8.setTransform(410.925,48.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_9.setTransform(322.925,47.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AgjGAQgcgoABg+IAAmwIhZAAIAAhaIBZAAIAAi2IBtAAIAAC2IBpAAIAABaIhpAAIAAGpQAAAjAYALQAMAHAeAAIARgBIAWgCIAABYIgnAIIgtACQhLAAgcgng");
	this.shape_10.setTransform(218.1,39.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#170648").s().p("AjPEaQg9hDgEhhIBqAAQAEA3AYAdQApA2BoAAQA/AAAvgbQAvgbABg4QAAgqgngWQgYgNhGgRIhZgXQhVgUgogZQhIgtAAhOQAAhdBEg5QBDg6BzAAQCVAABCBXQApA3gBA/IhnAAQgEglgXgeQgngrhfAAQhAAAggAYQghAXAAAnQAAAqArAaQAYAQAxALIBJASQB5AcApAaQBAAqAABbQAABXhDBAQhDA/iJAAQiSAAg/hCg");
	this.shape_11.setTransform(170.35,48.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#170648").s().p("AjTEBQhUhZAAigQAAicBUhiQBVhjCJAAQBFAABBAhQBAAhAjA0QAgAxALBCQAKAtgBBiInaAAQADBjAsA9QAsA8BaAAQBWAAAyg4QAdgiALgrIBsAAQgEAkgYAsQgYAsgeAcQgyAxhIARQgpAKgvAAQh6AAhUhZgAC4g3QgHhIgZgqQgshQhoAAQhLAAgyA3Qg0A2gCBVIFnAAIAAAAg");
	this.shape_12.setTransform(103.5,48.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#170648").s().p("AkgHRIAAuOIBsAAIAABXQAhgtAngZQA4gkBKAAQBvAABOBWQBOBUAACfQAADUhxBcQhHA5heABQhJgBgzggQgdgSgkgtIAAFOgAigj9QgWA8AABfQAABLAWA0QArBmBygBQBMAAAzhAQA0hAAAh/QAAhPgXg3QgrhshxAAQhzgBgqBzg");
	this.shape_13.setTransform(36.025,60.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-2,-17.6,1004.5,129), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14A751").s().p("AgoA4QgJgMAAgVQAAgXANgMQANgMAUAAQAKAAAGADIAAgZQAAgJgFAAIgGgBIAAgGIAjgFIABABIAABzQAAAGACACQACACAIAAIAAAHIglAAIAAgJQgNALgNAAQgRAAgKgMgAgRgHQgGAJAAASQAAAQAGAKQAFAJAKAAQAJAAAEgHQACgEAAgGIAAgkQAAgHgCgDQgEgIgJAAQgJAAgGAJg");
	this.shape.setTransform(94.425,28.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAGAtIAAgGIAIgCQADgBAAgFIAAgsQAAgSgQAAQgKAAgFAKQgCADAAAHIAAApQAAAGADABIAIACIAAAGIgwAAIAAgGQAJgBACgBQABgCAAgFIAAg1QAAgIgEgBIgGgBIAAgGIAhgFIACAMIAQgIQAHgEAIAAQAaAAAAAcIAAAtQAAAGACACQACABAJABIAAAGg");
	this.shape_1.setTransform(83.875,30.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_2.setTransform(73.125,30.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AgsAAQAAguAsAAQAtAAABAuQgBAugtABQgsgBAAgugAgTAAQABAnASAAQATAAAAgnQAAgmgTAAQgSABgBAlg");
	this.shape_3.setTransform(62.2,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAtA+QgNAAgHgEQgHgEgDgJQgCgJgDgRQgCgJgFgDQgDgDgIAAIgIAAIAAApQAAAHACABQACACAKABIAAAGIg4AAIAAgGQAKgBACgCQADgBAAgHIAAhZQAAgHgDgCQgCgBgKgBIAAgGIA7AAQAVAAAJAGQAMAHAAARQAAANgIAIQgIAIgOACIAAAAQAYAFAEAaQACAMADAFQAFAHAIABIAAAGgAgPg0QgBABAAAFIAAArIAJAAQAMAAAFgHQAFgGAAgNQAAgZgVAAQgHAAgCACg");
	this.shape_4.setTransform(51.125,28.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgWAHIAAgNIAtAAIAAANg");
	this.shape_5.setTransform(41.775,30.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQIAOgMQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_6.setTransform(35.925,30.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAIAkIgKAGQgHAEgIABQgNgBgHgHQgHgIAAgKQAAgRATgGQAcgJAEgDIAAgIQAAgQgKAAQgLABgGARQgBAHgGAAQgEAAgFgCQgFgEAAgEQAAgJAKgGQAMgIARAAQAiAAAAAaIAAAoQgBAMAGACIAHABIABAGQgKAGgNAAQgKAAgEgLgAgJACQgKAEAAALQAAAIAFAEQAEAEAGAAQALABAAgOIAAgZg");
	this.shape_7.setTransform(26.55,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgOAVgBQAXAAAKAOQAGAKAAAOQAAAHgJAAIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgXgOAAQgIAAgFAKg");
	this.shape_8.setTransform(16.225,30.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgeA+IAAgGQAMgBADgCQADgBAAgHIAAgcQAAgFgEgHIgcgyQgDgGgDgCQgCgBgHgBIAAgGIA3AAIAAAGIgKABQgEABACAFQAKAVAPAcIAAAAQAOgaAIgWQADgGgFgBIgKgBIAAgGIApAAIAAAGQgIABgDACQgDABgDAGQgJAOgRAjQgDAGAAAGIAAAdQAAAHACABQADACANABIAAAGg");
	this.shape_9.setTransform(6.575,28.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgPAVAAQAXAAAKAOQAGAKAAAOQAAAIgJgBIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgWgOgBQgIABgFAJg");
	this.shape_10.setTransform(123.675,14.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAiAtIAAgGIAIgCQADgBgBgFIAAgsQABgSgPAAQgNAAgDANIgBAJIAAAoQAAAFACABQABABAHABIAAAGIgtAAIAAgGQAHgBABgBQACgBABgFIAAgsQgBgSgOAAQgMAAgFANIgBAIIAAApQAAAFADABIAIACIAAAGIgwAAIAAgGQAJgBACgBQACgCAAgGIAAg0QAAgIgFgBIgHgBIAAgGIAigFIACAMIAPgIQAIgEAIAAQAQAAAHANIAOgIQAJgFAJAAQAbAAAAAcIAAAtQAAAGACACQACABAIABIAAAGg");
	this.shape_11.setTransform(111.4,14.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgtAAQABgtAsgBQAtABAAAtQAAAugtABQgsgBgBgugAgTABQAAAlATABQATAAAAgnQAAgmgTAAQgTABAAAmg");
	this.shape_12.setTransform(97.55,14.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AAKA+IAAgGQAKgBACgCQACgBAAgHIAAgtIgwAAIAAAtQAAAHACABQADACAKABIAAAGIg5AAIAAgGQAKgBADgCQACgBAAgHIAAhZQAAgHgCgCQgDgBgKgBIAAgGIA5AAIAAAGQgKABgDABQgCACAAAHIAAAlIAwAAIAAglQAAgHgCgCQgCgBgKgBIAAgGIA5AAIAAAGQgLABgCABQgCACAAAHIAABZQAAAHACABQACACALABIAAAGg");
	this.shape_13.setTransform(85.775,13.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQQAJgJAFgDQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_14.setTransform(70.875,14.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_15.setTransform(61.875,14.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgtAAQABgtAsgBQAtABAAAtQAAAugtABQgsgBgBgugAgTABQAAAlATABQATAAAAgnQAAgmgTAAQgTABAAAmg");
	this.shape_16.setTransform(51.2,14.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AgeA+IAAgGQAMgBADgCQADgBAAgHIAAgcQAAgFgEgHIgcgyQgDgGgDgCQgCgBgHgBIAAgGIA3AAIAAAGIgKABQgEABACAFQAKAVAPAcIAAAAQAOgaAIgWQADgGgFgBIgKgBIAAgGIApAAIAAAGQgIABgDACQgDABgDAGQgJAOgRAjQgDAGAAAGIAAAdQAAAHACABQADACANABIAAAGg");
	this.shape_17.setTransform(41.775,13.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgKAzQgHgGAAgLIAAg6IgLAAIAAgJIAMAAIAPgXIAIAAIAAAXIATAAIAAAJIgTAAIAAAzQAAAQALAAIAJgBIACAGQgOAIgLABQgIgBgGgFg");
	this.shape_18.setTransform(29.025,13.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgcAjQgLgLAAgXQAAgVALgMQAMgOAVAAQANAAAKAGQALAFAAAJQgBAFgEADQgFADgFAAQgFgBgDgFQgEgQgJgBQgGAAgFAJQgFAJAAARQAAASAHAJQAGAKAKgBQAPABAJgSIAGADQgHAcggAAQgSAAgLgMg");
	this.shape_19.setTransform(20.95,14.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgPAVAAQAXAAAKAOQAGAKAAAOQAAAIgJgBIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgWgOgBQgIABgFAJg");
	this.shape_20.setTransform(10.875,14.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgKAzQgHgGAAgLIAAg6IgLAAIAAgJIAMAAIAPgXIAIAAIAAAXIATAAIAAAJIgTAAIAAAzQAAAQALAAIAJgBIACAGQgOAIgLABQgIgBgGgFg");
	this.shape_21.setTransform(3.425,13.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgtAAQAAgtAtgBQAtABAAAtQAAAugtABQgtgBAAgugAgTABQAAAlATABQATAAAAgnQAAgmgTAAQgTABAAAmg");
	this.shape_22.setTransform(-5.15,14.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQQAJgJAFgDQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_23.setTransform(-13.475,14.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AgzA+IAAgGQAKgBACgCQADgBAAgHIAAhZQAAgHgDgCQgCgBgKgBIAAgGIA5AAQAWAAAKAGQAOAJAAAUQAAAXgRAJQgMAHgVAAQgHAAgEgBIAAAhQAAAHACACQADABALABIAAAGgAgIg0QgBABAAAEIAAAtQAAAHAMAAQAVAAAAgdQAAgPgHgIQgGgHgLAAQgGAAgCACg");
	this.shape_24.setTransform(-23.425,13.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLALQgFgFABgGQgBgFAFgFQAFgEAGAAQAHAAAFAEQAFAFgBAFQABAGgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_25.setTransform(86.4,92.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXApQgJgGgGgKQgHgLABgOQgBgNAHgLQAFgKAKgGQALgGAMAAQAOAAAKAGQAKAFAGALQAFAKAAANIAAAIIg+AAQABAIAFAEQAEAFAHAAQAKAAAEgJIAeAAQgDAJgGAHQgGAHgJAEQgIAFgMAAQgMAAgLgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_26.setTransform(80.05,89.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_27.setTransform(72.95,87.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIA5QgHgEgEgGIAAAMIgcAAIAAh3IAcAAIAAAqQAEgGAHgEQAIgEAIAAQALAAAJAGQAJAGAGAKQAFAKAAAOQAAAOgFAKQgGALgJAGQgJAGgLAAQgJAAgHgEgAgNgBQgGAFAAAKQAAAKAGAGQAFAGAIAAQAIAAAGgGQAGgGAAgKQAAgLgGgFQgGgFgIAAQgIAAgFAGg");
	this.shape_28.setTransform(65.875,87.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbApQgJgGgFgLQgGgKAAgOQAAgNAGgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgMIAcAAIAABZIgcAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgQQgFAGAAAKQAAAKAFAGQAGAGAHAAQAJAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgJAAQgHAAgGAFg");
	this.shape_29.setTransform(55.075,89.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_30.setTransform(47.7,87.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgnQgFgEABgGQgBgHAFgDQAFgFAGAAQAHAAAFAFQAFADgBAHQABAGgFAEQgFAFgHAAQgGAAgFgFg");
	this.shape_31.setTransform(43.75,87.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbApQgJgGgFgLQgGgKAAgOQAAgNAGgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgMIAcAAIAABZIgcAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgQQgFAGAAAKQAAAKAFAGQAGAGAHAAQAJAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgJAAQgHAAgGAFg");
	this.shape_32.setTransform(36.175,89.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAtIgghZIAdAAIATA/IAUg/IAdAAIggBZg");
	this.shape_33.setTransform(26.675,89.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAcA5IgHgUIgqAAIgGAUIgeAAIAqhxIAfAAIApBxgAAOAPIgOgoIgNAoIAbAAg");
	this.shape_34.setTransform(17.85,88.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAqQgKgEgFgHQgFgHgBgIIAbAAQABAEAEADQAEADAEAAQAGAAACgCQADgCAAgDQAAgEgEgCIgMgEIgQgFQgHgCgEgFQgFgFAAgKQAAgHAEgHQAEgGAJgEQAIgEALAAQARAAAKAJQAJAIACAOIgaAAQAAgEgEgDQgDgDgGAAQgEAAgDACQgCACAAADQAAAEAEACIAMAEIAQAFQAHACAEAFQAFAFAAAKQAAAIgEAGQgFAGgIAEQgIAEgLAAQgLAAgJgFg");
	this.shape_35.setTransform(109.375,71.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AARAuIAAgwQABgKgFgFQgFgFgIAAQgHAAgFAFQgEAFAAAKIAAAwIgcAAIAAhaIAcAAIAAAMQAEgGAHgDQAHgEAJAAQAPAAAJAKQAKALAAASIAAA0g");
	this.shape_36.setTransform(100.35,70.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgbApQgJgGgFgLQgGgKAAgOQAAgNAGgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgMIAcAAIAABZIgcAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgQQgFAGAAAKQAAAKAFAGQAGAGAHAAQAJAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgJAAQgHAAgGAFg");
	this.shape_37.setTransform(89.925,71.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_38.setTransform(82.9,69.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAsAAQANAAAJAFQAKAFAEAHQAFAJABAKQAAAKgFAJQgFAHgJAFQgKAFgNAAIgQAAIAAApgAgOgFIAOAAQAHAAAFgEQADgDAAgIQAAgGgDgEQgFgEgHABIgOAAg");
	this.shape_39.setTransform(76.25,69.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AASAuIAAgwQAAgKgFgFQgFgFgIAAQgGAAgGAFQgEAFAAAKIAAAwIgcAAIAAhaIAcAAIAAAMQAEgGAHgDQAGgEAKAAQAPAAAKAKQAJALAAASIAAA0g");
	this.shape_40.setTransform(63.55,70.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXApQgLgGgGgKQgGgLAAgOQAAgNAGgLQAGgKALgGQALgGAMAAQANAAALAGQALAGAGAKQAGALAAANQAAAOgGALQgHAKgKAGQgLAGgNAAQgNAAgKgGgAgNgQQgEAGAAAKQAAALAEAGQAGAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape_41.setTransform(53.85,71.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgnQgEgEgBgGQABgHAEgDQAFgFAGAAQAHAAAFAFQAEADABAHQgBAGgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_42.setTransform(46.85,69.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOA4QgOAAgIgHQgIgHAAgRIAAgjIgLAAIAAgXIALAAIAAgWIAaAAIAAAWIATAAIAAAXIgTAAIAAAjQAAAEACACQACACAFAAIAKAAIAAAXg");
	this.shape_43.setTransform(41.6,69.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgWApQgKgGgGgKQgFgLAAgOQAAgNAFgLQAGgKAKgGQAKgGANAAQARAAAMAJQALAJAEAQIgeAAQgDgKgLAAQgHAAgFAGQgEAGAAAKQAAALAEAGQAFAGAHAAQALAAADgLIAeAAQgEAQgLAJQgMAKgRAAQgNAAgKgGg");
	this.shape_44.setTransform(33.95,71.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXApQgJgGgGgKQgHgLABgOQgBgNAHgLQAFgKAKgGQALgGANAAQANAAAKAGQAKAFAGALQAFAKABANIgBAIIg+AAQABAIAFAEQAEAFAHAAQAKAAAEgJIAeAAQgDAJgGAHQgGAHgJAEQgIAFgLAAQgNAAgLgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_45.setTransform(24.25,71.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAOA4QgOAAgIgHQgIgHAAgRIAAgjIgLAAIAAgXIALAAIAAgWIAaAAIAAAWIATAAIAAAXIgTAAIAAAjQAAAEACACQACACAFAAIAKAAIAAAXg");
	this.shape_46.setTransform(16.4,69.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXApQgLgGgGgKQgGgLAAgOQAAgNAGgLQAHgKAKgGQALgGAMAAQANAAALAGQALAGAGAKQAGALAAANQAAAOgGALQgHAKgKAGQgLAGgNAAQgMAAgLgGgAgMgQQgFAGgBAKQABALAFAGQAFAFAHAAQAIAAAGgFQAFgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgFAGg");
	this.shape_47.setTransform(8.55,71.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgbAuIAAhaIAbAAIAAAPQAEgHAIgFQAHgEAJAAIAAAeIgIAAQgKAAgFAEQgFAEAAALIAAAqg");
	this.shape_48.setTransform(0.725,70.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAsAAQANAAAJAFQAKAFAFAHQAEAJAAAKQABAKgFAJQgFAHgJAFQgJAFgOAAIgQAAIAAApgAgOgFIAOAAQAHAAAFgEQADgDAAgIQAAgGgDgEQgFgEgHABIgOAAg");
	this.shape_49.setTransform(-7.3,69.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAxAuIAAgwQAAgJgFgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAwIgbAAIAAgwQAAgJgEgFQgFgFgIAAQgIAAgFAFQgEAFAAAJIAAAwIgcAAIAAhaIAcAAIAAAMQAEgGAHgDQAGgEAJAAQAKAAAIAFQAHAEAFAIQAFgHAIgFQAIgFAJAAQARAAAKAKQAKALAAASIAAA0g");
	this.shape_50.setTransform(75.125,52.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXApQgLgGgGgKQgGgLAAgOQAAgNAGgLQAGgKALgGQALgGAMAAQANAAALAGQALAGAGAKQAGALAAANQAAAOgGALQgHAKgKAGQgLAGgNAAQgNAAgKgGgAgNgQQgEAGAAAKQAAALAEAGQAGAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape_51.setTransform(61.85,52.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAOA4QgOAAgIgHQgIgHAAgRIAAgjIgLAAIAAgXIALAAIAAgWIAaAAIAAAWIATAAIAAAXIgTAAIAAAjQAAAEACACQACACAFAAIAKAAIAAAXg");
	this.shape_52.setTransform(53.85,51.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgRAqQgKgEgFgHQgFgHgBgIIAbAAQABAEAEADQAEADAEAAQAGAAACgCQADgCAAgDQAAgEgEgCIgMgEIgQgFQgHgCgEgFQgFgFAAgKQAAgHAEgHQAEgGAJgEQAIgEALAAQARAAAKAJQAJAIACAOIgaAAQAAgEgEgDQgDgDgGAAQgEAAgDACQgCACAAADQAAAEAEACIAMAEIAQAFQAHACAEAFQAFAFAAAKQAAAIgEAGQgFAGgIAEQgIAEgLAAQgLAAgJgFg");
	this.shape_53.setTransform(46.675,52.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgcApQgHgEgFgJQgEgJAAgMIAAg0IAbAAIAAAwQAAAJAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgJIAAgwIAcAAIAABaIgcAAIAAgNQgEAGgHAEQgHAEgIAAQgKAAgJgFg");
	this.shape_54.setTransform(37.25,52.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAzQgNgIgIgNQgHgNAAgRQAAgQAHgNQAIgNANgIQANgHAPAAQAVAAAOALQAPAKAFATIgfAAQgDgHgHgEQgGgEgIAAQgMAAgIAJQgIAJAAAOQAAAPAIAJQAIAJAMAAQAIAAAGgEQAHgEADgHIAfAAQgFATgPAKQgOALgVAAQgPAAgNgHg");
	this.shape_55.setTransform(26.525,51.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_56.setTransform(50.05,108.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-30.4,3.5,161,106.1), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#14A751").s().p("AgnBKQgEgEAAgFQAAgFADgFQAFgGAEAAQADAAAGAFQAEADAEAAQAFAAAFgOQABgFgCgJQgMgegag7QgDgGgDgCIgKgBIAAgIIA5AAIAAAIIgHABQgGAAACAHIAYA9IABAAQANgmAGgXQABgHgEAAIgKgBIAAgIIApAAIAAAIQgHABgEACQgCACgDAIIglBgQgGAXgJAIQgHAHgLAAQgGAAgGgEg");
	this.shape.setTransform(116.75,98.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgcBPIAAgIQAKgBACgBQADgDAAgGIAAhxQAAgKgGgBIgIgBIAAgHIAogGIACABIAACJQAAAGACADQACABAKABIAAAIg");
	this.shape_1.setTransform(108.075,93.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgcBMIAAgIQAKgBACgBQACgCAAgHIAAg+QAAgJgFgCIgHgBIAAgGIAngGIACABIAABVQAAAHACACQACABAKABIAAAIgAgMguQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_2.setTransform(101.825,93.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_3.setTransform(88.825,96.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAJAqIgMAIQgJAFgIgBQgPAAgJgJQgIgIAAgNQAAgTAWgHQAhgLAGgEIAAgJQgBgSgNAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgDAAgHQAAgKANgIQANgHAVgBQAnAAAAAfIAAAvQAAAOAGADQADAAAHAAIAAAIQgMAFgPAAQgMAAgFgMgAgLACQgLAGAAANQAAAIAFAFQAFAGAGAAQAOgBABgPIAAgeg");
	this.shape_4.setTransform(72.85,96.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag3BKIAAgIQAMgBADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMgBIAAgIIBvAAIAAAnIgIAAQgFgRgFgGQgGgGgQAAIgPAAQgDAAgCACQgBABAAAEIAAA0IAXAAQAKAAAEgEQADgDADgMIAIAAIAAAwIgIAAQgDgMgDgDQgEgEgKgBIgXAAIAAAwQAAAJADABQACACAOABIAAAIg");
	this.shape_5.setTransform(60.175,94.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAPAAAAAOQAAAGgEAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_6.setTransform(44.95,96.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_7.setTransform(33.875,96.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag1AAQAAg2A1AAQA2AAAAA2QAAA2g2AAQg1AAAAg2gAgWAAQAAAuAWgBQAXABAAguQAAgsgXAAQgWAAAAAsg");
	this.shape_8.setTransform(21.425,96.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgjBKIAAgIQAOgBADgCQADgCAAgIIAAggQAAgHgEgIIghg7QgEgHgDgCQgCgCgJgBIAAgIIBBAAIAAAIIgLACQgGAAADAGIAeA6IAAAAQAQgeAKgbQADgGgGgCIgMgBIAAgIIAxAAIAAAIQgJABgEADQgDABgFAIQgJAQgVApQgEAHABAHIAAAiQAAAIACACQADACAPABIAAAIg");
	this.shape_9.setTransform(9.75,94.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgmBOIAAgHQAJgBADgCQACgBAAgHIAAhKIgOAAIAAgKIAOAAIAAgGQAAgXAKgNQALgMASABQAMAAAHAFQAFAFAAAGQAAAFgEAEQgEADgFAAQgGAAgCgGQgGgOgFABQgGgBABANIACAgIAUAAIAAAKIgUAAIAABKQAAAGADACIANADIAAAHg");
	this.shape_10.setTransform(124.525,73.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag1ABQAAg2A1AAQA2AAAAA2QAAA2g2AAQg1AAAAg2gAgWABQAAAsAWABQAXgBAAgsQAAgtgXAAQgWAAAAAtg");
	this.shape_11.setTransform(113.825,76);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgwAAQAAgXAMgOQANgRAaAAQAaAAAMARQAIAKAAARQAAAJgLAAIg3AAQAAAoAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAKAAANIAdAAQAHgBAAgHQAAgagRAAQgKAAgFALg");
	this.shape_12.setTransform(94.575,76.0002);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAOAAABAOQgBAGgDAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_13.setTransform(85.55,75.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAJArIgMAHQgIAEgJABQgQAAgIgJQgIgJAAgNQAAgTAWgGQAhgLAFgFIAAgJQABgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLAMgHQAOgJAVABQAnAAAAAeIAAAvQAAAOAGACQAEACAFgBIABAHQgMAHgQAAQgMAAgEgMgAgLACQgLAFAAANQAAAJAFAGQAEAEAIAAQAOAAgBgPIAAgfg");
	this.shape_14.setTransform(74.5,76);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AhAABQAAghATgVQAUgXApAAQAeAAAQAJIAAAmIgIAAQgFgTgHgHQgKgMgSAAQgYAAgLAaQgHARAAAYQAAAZAIASQALAZAZAAQARAAAKgMQAHgJAHgUIAIAAIgDAoQgRAKggAAQhNAAAAhMg");
	this.shape_15.setTransform(60.175,73.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgwAAQAAgXAMgOQANgRAaAAQAaAAAMARQAIAKAAARQAAAJgLAAIg3AAQAAAoAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAKAAANIAdAAQAHgBAAgHQAAgagRAAQgKAAgFALg");
	this.shape_16.setTransform(39.775,76.0002);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AAoBOQgSAAgLgMQgLgOgOgcIAAgBIAdgqQAFgFAGAAIAdAAIAAAGQgaAFgIAIIgNAMQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAABQAQAbAUAWQAIAKAHACIAAAGgAg7BOIAAgIQAKAAADgCQACgBAAgHIAAhxQAAgKgGgBIgIgBIAAgHIAqgFIABABIAACIQAAAGACACQACACAKAAIAAAIg");
	this.shape_17.setTransform(29.1,73.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAJArIgMAHQgIAEgJABQgQAAgIgJQgIgJAAgNQAAgTAWgGQAhgLAFgFIAAgJQABgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLAMgHQAOgJAVABQAnAAAAAeIAAAvQAAAOAGACQAEACAFgBIABAHQgMAHgQAAQgMAAgEgMgAgLACQgLAFAAANQAAAJAFAGQAEAEAIAAQAOAAgBgPIAAgfg");
	this.shape_18.setTransform(16.45,76);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgkBJIAAgIIAMAAQAGAAABgDQACgDAAgFIAAh1IgJAAQgPAAgGAHQgEAFgGASIgHAAIAAgnIB9AAIAAAnIgHAAQgGgTgEgEQgGgHgPAAIgJAAIAAB1QAAAFABADQACADAGAAIAMAAIAAAIg");
	this.shape_19.setTransform(5.75,73.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgnBLQgEgFAAgEQAAgGADgFQAEgGAFAAQADAAAGAFQAEADAEAAQAFAAAFgPQACgEgDgJQgMgegag6QgDgHgDgCIgKgBIAAgIIA5AAIAAAIIgIABQgEAAABAHIAYA9IABAAQANgmAGgXQACgHgFAAIgKgBIAAgIIApAAIAAAIQgHABgDACQgDACgDAIIglBgQgGAWgJAJQgIAHgKAAQgGAAgGgDg");
	this.shape_20.setTransform(91.45,59.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgcBPIAAgIQAKgBACgCQADgCAAgGIAAhxQAAgKgGgBIgIgBIAAgHIAogGIACABIAACJQAAAGACACQACACAKABIAAAIg");
	this.shape_21.setTransform(82.675,54.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgcBMIAAgIQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgHgBIAAgHIAngFIACABIAABVQAAAHACABQACACAKABIAAAIgAgMguQgEgEAAgIQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_22.setTransform(76.125,54.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_23.setTransform(62.825,56.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAJArIgMAHQgJAFgIgBQgPAAgJgJQgIgIAAgNQAAgTAWgGQAhgMAGgEIAAgJQAAgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgGQAAgKAMgIQANgHAWgBQAnABAAAeIAAAvQAAAOAGADQADAAAGAAIABAIQgMAFgQAAQgLAAgFgLgAgLACQgLAFAAAOQAAAIAFAFQAEAFAIABQAOAAAAgQIAAgfg");
	this.shape_24.setTransform(46.45,56.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag3BKIAAgIQAMgBADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMgBIAAgIIBvAAIAAAnIgIAAQgFgRgFgFQgGgHgQAAIgPAAQgDAAgCABQgBACAAAEIAAA0IAXAAQAKAAAEgEQADgDADgMIAIAAIAAAwIgIAAQgDgMgDgDQgEgEgKAAIgXAAIAAAvQAAAIADACQACACAOABIAAAIg");
	this.shape_25.setTransform(34.475,54.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAOAAABAOQgBAGgDAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_26.setTransform(96.35,37.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_27.setTransform(85.325,37.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag2A4QgSgUAAgkQAAgkASgTQATgVAjAAQAkAAATAVQASATAAAkQAAAkgSAUQgTAVgkAAQgjAAgTgVgAgkAAQAABEAkAAQAlAAAAhEQAAhDglAAQgkAAAABDg");
	this.shape_28.setTransform(70.65,35.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMA9QgIgIAAgNIAAhFIgNAAIAAgKIAOAAIASgbIAKAAIAAAbIAWAAIAAAKIgWAAIAAA9QgBAUANAAQAGAAAFgDIACAHQgRAKgNAAQgIAAgIgFg");
	this.shape_29.setTransform(53.85,36.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaAAQAaAAAMAQQAIAMAAAQQAAAKgLgBIg3AAQAAAoAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAJAAANIAdAAQAHABAAgIQAAgagRAAQgKAAgFALg");
	this.shape_30.setTransform(44.625,37.8502);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag5BJIAAgIQAMAAACgCQADgCAAgIIAAhpQAAgIgDgCQgCgCgMAAIAAgIIBEAAIAAAIQgNAAgDACQgDACAAAIIAABkQAAAKAFAEQADACAPAAQARAAAHgIQAFgFAGgUIAIAAIgDAqg");
	this.shape_31.setTransform(32.775,35.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AALA3QgLAAgHgGQgGgGAAgNIAAgvIgLAAIAAgPIALAAIAAgWIARAAIAAAWIAVAAIAAAPIgVAAIAAAvQgBAFADACQACADAGAAIALAAIAAAPg");
	this.shape_32.setTransform(128.7,1.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWAtIAAgxQAAgLgGgHQgFgGgLAAQgJAAgGAGQgGAHAAALIAAAxIgSAAIAAhXIASAAIAAAKQAFgGAGgDQAIgCAGAAQAKAAAJADQAIAFAEAJQAFAIAAALIAAA0g");
	this.shape_33.setTransform(121.5,3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_34.setTransform(112.075,3.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA1AtIAAgxQAAgLgGgHQgFgGgLAAQgKAAgGAGQgGAHAAALIAAAxIgRAAIAAgxQAAgLgFgHQgHgGgKAAQgKAAgGAGQgGAHAAALIAAAxIgSAAIAAhXIASAAIAAAKQAEgGAIgDQAGgCAIAAQAKAAAJAEQAHAEAFAJQADgIAJgFQAIgEAKAAQALAAAHADQAJAFAFAJQAEAIAAALIAAA0g");
	this.shape_35.setTransform(100.05,3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_36.setTransform(87.675,3.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgaA6QgMgJgCgOIASAAQACAHAHAEQAHAEAIAAQALAAAHgGQAHgHAAgNIAAgOQgFAGgIAEQgIAEgJAAQgLAAgJgGQgKgFgGgLQgFgJAAgNQAAgOAFgKQAGgKAKgGQAJgFALAAQAJAAAIAEQAIAEAFAGIAAgNIASAAIAABYQAAAMgFAKQgFAJgKAGQgKAFgNAAQgRAAgLgIgAgMguQgGADgEAHQgDAGAAAKQAAAJADAGQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgFQAEgHAAgJQAAgJgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_37.setTransform(77.95,5.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAKAAAIAEQAHAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgKgGgAgMgZQgGADgEAHQgEAGAAAJQAAAJAEAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHABgJQgBgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_38.setTransform(67.9,3.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWAtIAAgxQAAgLgFgHQgHgGgKAAQgJAAgGAGQgGAHAAALIAAAxIgSAAIAAhXIASAAIAAAKQAEgGAIgDQAGgCAHAAQAKAAAJADQAIAFAFAJQAEAIAAALIAAA0g");
	this.shape_39.setTransform(58.7,3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHABgJQgBgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_40.setTransform(48.65,3.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAoA3IAAhLIgiBLIgLAAIgihLIAABLIgSAAIAAhtIATAAIAmBVIAnhVIATAAIAABtg");
	this.shape_41.setTransform(37.175,1.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA3QgLAAgHgGQgGgGAAgNIAAgvIgLAAIAAgPIALAAIAAgWIARAAIAAAWIAVAAIAAAPIgVAAIAAAvQgBAFADACQACADAGAAIALAAIAAAPg");
	this.shape_42.setTransform(24.3,1.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQApQgIgDgFgHQgFgGAAgIIATAAQAAAFAFAEQAFAEAGAAQAIAAAEgDQAEgDAAgFQAAgFgEgCIgOgFIgQgFQgHgCgEgFQgFgFAAgJQAAgHAEgGQAFgGAHgDQAIgDAJAAQAPAAAJAHQAJAIABANIgSAAQgBgGgEgEQgEgDgHAAQgHAAgEADQgDACAAAFQAAADACADQADACADABIAKAEIAQAFQAGACAEAFQAFAFAAAIQAAAIgEAGQgEAFgIAEQgHADgLAAQgJAAgIgEg");
	this.shape_43.setTransform(17.625,3.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_44.setTransform(9.475,3.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIAmAAQAMAAAJAEQAJAEAEAIQAFAHAAAKQAAAIgEAHQgEAHgJAFQgJAEgNAAIgUAAIAAAtgAgUgDIAUAAQAKAAAFgFQAFgFAAgIQAAgTgUAAIgUAAg");
	this.shape_45.setTransform(0.275,1.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbBAIASgqIgjhVIAVAAIAXBBIAahBIATAAIg1B/g");
	this.shape_46.setTransform(105.575,-10.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAtIAAhXIASAAIAAAMQADgGAGgEQAHgEAJABIAAASIgEAAQgLAAgGAFQgEAGAAAOIAAAtg");
	this.shape_47.setTransform(98.175,-12.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_48.setTransform(90.675,-12.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAsIghhXIATAAIAYBHIAZhHIATAAIghBXg");
	this.shape_49.setTransform(82.225,-12.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgXAnQgKgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAKgGQAJgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgLAAgJgGgAgMgZQgGADgDAHQgEAGgBAJQABAJAEAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHgBgJQABgIgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_50.setTransform(72.35,-12.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbA3IAAhtIASAAIAABfIAlAAIAAAOg");
	this.shape_51.setTransform(64.075,-13.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAtIAAhXIASAAIAAAMQADgGAGgEQAHgEAJABIAAASIgEAAQgLAAgGAFQgEAGAAAOIAAAtg");
	this.shape_52.setTransform(53.825,-12.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgIA9IAAhWIARAAIAABWgAgHgoQgDgEgBgFQABgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_53.setTransform(48.95,-14.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXAnQgKgFgGgLQgFgKAAgNQAAgNAFgKQAGgKAKgGQAJgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgLAAgJgGgAgMgZQgGADgDAHQgEAGgBAJQABAJAEAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHgBgJQABgIgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_54.setTransform(42.2,-12.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA4QgHgEgFgGIAAAMIgSAAIAAh1IASAAIAAAsQAFgHAHgEQAJgEAIAAQANAAAIAGQAKAFAFALQAGAJAAANQAAANgGALQgFAKgKAGQgJAGgMAAQgIAAgJgEgAgNgLQgFAEgEAHQgEAFAAAJQAAAJAEAHQAEAHAFADQAHAEAGAAQAGAAAHgEQAGgDADgHQAFgHAAgJQAAgJgFgGQgDgGgGgEQgHgDgGAAQgGAAgHADg");
	this.shape_55.setTransform(32.6,-14.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAfA3IgIgWIgtAAIgIAWIgTAAIAohtIATAAIAoBtgAASASIgSgzIgRAzIAjAAg");
	this.shape_56.setTransform(22,-13.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-8.5,-21.7,142.4,129.4), null);


(lib.Cta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AANAgIgNgpIgBAAIgMApIgNAAIgRg0IgDgFIgFgBIAAgFIAgAAIAAAFIgEAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIALAkIAMgtIAMAAIAOAtIABAAIAJgkQABgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgGgBIAAgFIAaAAIAAAFQgFAAgBABQgCACgCAEQgFAQgLAjg");
	this.shape.setTransform(86.5,15.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAAQAAggAgAAQAhAAAAAgQAAAhghAAQggAAAAghgAgNAAQAAAcANAAQAOAAAAgcQAAgbgOAAQgNAAAAAbg");
	this.shape_1.setTransform(77.55,15.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAtIgwhJIgBAAIAAAqIABATQABAFADABIAJABIAAAFIggAAIAAgFIAHgBQADgCAAgEIACgTIAAgtQAAgFgCgCQgCgBgHAAIAAgFIAeAAIApA/IABAAIAAgfIgBgUQgBgFgDgBIgIgBIAAgFIAfAAIAAAFIgHABQgCACgCAEIAAAUIAAA5g");
	this.shape_2.setTransform(68.75,13.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAbIgCgTIAFAAQAGAUANAAQADAAADgDQACgCABgEQAAgHgNgFQgKgEgEgDQgFgFAAgHQAAgKAHgFQAHgFALAAQALAAAHAEIAAARIgEAAQgCgHgEgEQgEgFgFAAQgDAAgDADQgCACAAADQAAAHAMAFQAKAEAFADQAFAFAAAHQgBAKgGAGQgIAFgLAAQgPAAgGgGg");
	this.shape_3.setTransform(56.1,15.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAhQgEgHAAgMIAAguQAAgFgCgCQgBgBgHAAIAAgFIAoAAIAAAFQgHAAgCABQgCACAAAFIAAAvQAAAaARgBQASABAAgaIAAgvQAAgFgBgCQgCgBgHAAIAAgFIAnAAIAAAFQgHAAgBABQgCACAAAFIAAAuQAAALgEAHQgIAOgZAAQgYAAgIgNg");
	this.shape_4.setTransform(48.225,14.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAlQgFgEAAgIIAAgqIgIAAIAAgGIAJAAIAKgRIAGAAIAAARIAOAAIAAAGIgOAAIAAAlQAAAMAIAAIAGgCIACAEQgLAHgHAAQgFAAgFgEg");
	this.shape_5.setTransform(37.975,14.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAZQgJgIAAgQQAAgPAJgJQAIgJAPAAQAJAAAHADQAIAEAAAGQAAAEgDACQgDACgEAAQgFAAgBgEQgDgMgHAAQgEAAgDAGQgEAHAAANQAAAMAFAHQAEAGAIAAQAKAAAHgMIAEACQgGATgWAAQgNAAgHgIg");
	this.shape_6.setTransform(32.1,15.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAaIgHAFQgGACgFAAQgJAAgGgFQgEgFAAgIQAAgMANgEQAUgGADgDIAAgGQAAgLgHAAQgIAAgEANQgBAFgEAAQgEAAgDgCQgDgCAAgEQAAgGAHgEQAIgFANAAQAYAAAAASIAAAdQAAAIADACIAGAAIABAFQgIADgJAAQgIAAgCgHgAgHABQgGAEAAAIQAAAFADADQADADAEAAQAIAAAAgKIAAgSg");
	this.shape_7.setTransform(24.9,15.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAlQgFgEAAgIIAAgqIgIAAIAAgGIAJAAIAKgRIAGAAIAAARIAOAAIAAAGIgOAAIAAAlQAAAMAIAAIAGgCIACAEQgLAHgHAAQgFAAgFgEg");
	this.shape_8.setTransform(19.675,14.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAhIAAgFIAGgBQACgBAAgEIAAggQAAgNgLABQgHgBgEAIQgBACAAAFIAAAeQAAADACABIAFACIAAAFIgiAAIAAgFIAIgCQABgBAAgDIAAgnQAAgFgDAAIgFgBIAAgFIAYgDIACAJIALgHQAFgDAFABQAUAAAAAUIAAAgQAAAFABAAIAIACIAAAFg");
	this.shape_9.setTransform(13.825,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAAQAAggAhAAQAgAAAAAgQAAAhghAAQggAAAAghgAgNAAQAAAcANAAQAOAAAAgcQAAgbgOAAQgNAAAAAbg");
	this.shape_10.setTransform(5.85,15.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnABQAAgUAMgNQAMgOAZAAQASAAAKAGIAAAWIgFAAQgDgKgEgFQgHgHgKAAQgPAAgGAPQgFALAAAOQAAAPAFALQAHAQAPAAQAKAAAGgHQAFgGAEgMIAFAAIgCAYQgKAGgUAAQgvAAAAgug");
	this.shape_11.setTransform(-3.375,13.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16486A").s().p("AndCkQgeAAgUgVQgVgUAAgdIAAi7QAAgdAVgUQAUgVAeAAIO7AAQAeAAAUAVQAVAUAAAdIAAC7QAAAdgVAUQgUAVgeAAg");
	this.shape_12.setTransform(41.8,16.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-13,0,109.7,32.8), null);


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
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ad_bg, new cjs.Rectangle(0,0,300,250), null);


(lib.MosquitoANI = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.W2();
	this.instance.setTransform(-4.45,0.25,1,1,0,0,0,4.5,7.7);

	this.instance_1 = new lib.W1();
	this.instance_1.setTransform(-1.2,-6.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#545353").s().p("AgICQQgBg+gWgwQAHgfgDgrIgDguIgCgLQADgOAngtIgLAwIAHAWQANAkAFAoIAIA+QAIA3gfArQgFAHgEAAQgEAAgEgNg");
	this.shape.setTransform(-0.001,-0.0342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MosquitoANI, new cjs.Rectangle(-8.9,-15.7,16.7,31.4), null);


(lib.mosquito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mosquito ANI
	this.instance = new lib.MosquitoANI();
	this.instance.setTransform(45.8,57.15,0.2994,0.2705,0,-0.0452,179.9504,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:1.2,skewX:-21.0183,skewY:158.9767,x:45.85,y:52.25},7,cjs.Ease.get(1)).to({x:49.1,y:45},7).to({regY:0.9,skewX:-31.7519,skewY:148.246,x:51.85,y:21.4},26).to({x:45.85,y:25.85},40).to({x:53.1,y:20.8},24).wait(1));

	// Mosquito ANI
	this.instance_1 = new lib.MosquitoANI();
	this.instance_1.setTransform(105,35.85,0.4611,0.3618,0,-24.4877,155.5102,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.7,skewX:-43.9816,skewY:136.0163,x:92.55,y:33.4},7,cjs.Ease.get(1)).to({x:91.8,y:15.65},7).to({regY:0.6,skewX:-24.4877,skewY:155.5102,x:98.25,y:18.1},10).to({x:95,y:22.3},56).to({x:105,y:35.85},24).wait(1));

	// Mosquito ANI
	this.instance_2 = new lib.MosquitoANI();
	this.instance_2.setTransform(65.45,16.5,0.4611,0.3618,0,-44.4516,135.547,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.6,regY:-0.6,x:48.6,y:-1.25},7,cjs.Ease.get(1)).wait(7).to({regX:0.1,regY:0.4,x:53.2,y:-10.7},10).to({x:46.95,y:-10.5},56).to({x:38.95,y:-7.25},24).wait(1));

	// Mosquito ANI
	this.instance_3 = new lib.MosquitoANI();
	this.instance_3.setTransform(-40.05,-22.2,0.5398,0.5282,54.694,0,0,-0.2,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:2.7,y:-26.2},11,cjs.Ease.get(1)).wait(7).to({x:25.35,y:-38.95},10).to({regX:-1.2,regY:-2.5,x:78.8,y:-60.45},13).to({x:101.55,y:-61.45},24).to({x:112.45,y:-60.45},31).wait(1));

	// Mosquito ANI
	this.instance_4 = new lib.MosquitoANI();
	this.instance_4.setTransform(-6.45,50.25,0.5112,0.5016,31.9784,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-1.4,regY:-2,x:14.85,y:10.6},13,cjs.Ease.get(1)).wait(8).to({regX:-0.1,regY:0.1,x:9.95,y:10.4},10).to({x:7.95,y:11.25},12).to({x:-0.35,y:29.75},37).to({x:-6.7},24).wait(1));

	// Mosquito ANI
	this.instance_5 = new lib.MosquitoANI();
	this.instance_5.setTransform(86.65,4.6,0.476,0.5047,0,-40.957,139.0407,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:0.2,skewX:-70.448,skewY:109.5507,x:73.15,y:-14.1},7,cjs.Ease.get(1)).wait(7).to({regY:0.1,skewX:-40.957,skewY:139.0407,x:69.65,y:-21.4},10).to({regY:0.2,skewX:-57.9004,skewY:122.0971,x:66.2,y:-18.9},56).to({x:59.6,y:-19.65},24).wait(1));

	// Mosquito ANI
	this.instance_6 = new lib.MosquitoANI();
	this.instance_6.setTransform(75.9,46.1,0.5749,0.6025,0,-20.016,159.984,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.1,regY:0.4,scaleX:0.4586,scaleY:0.3797,skewX:-20.0167,skewY:159.9855,x:70.5,y:35.4},7,cjs.Ease.get(1)).wait(7).to({regX:0.2,regY:0.3,scaleX:0.5749,scaleY:0.6025,skewX:-20.016,skewY:159.984,x:75.9,y:46.1},10).to({regX:0.1,regY:0.4,scaleX:0.5748,skewX:-20.0151,skewY:159.9844,x:67.7,y:24.95},17).to({regX:0.2,regY:0.3,scaleX:0.5749,skewX:-20.016,skewY:159.984,x:64.85,y:39.6},39).to({y:12.85},24).wait(1));

	// Mosquito ANI
	this.instance_7 = new lib.MosquitoANI();
	this.instance_7.setTransform(27.85,31.45,0.6816,0.6309,-9.2486,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-0.1,regY:0.2,scaleX:0.5284,scaleY:0.4721,rotation:12.2476,x:28.55,y:20.25},7,cjs.Ease.get(1)).to({regX:-0.2,regY:0.1,rotation:-9.9589,x:30.2,y:-4.35},7).to({regX:0.1,scaleX:0.4588,scaleY:0.4568,rotation:17.2239,x:21.95,y:1.55},10).to({scaleX:0.4628,scaleY:0.4599,rotation:17.5849,x:28.9,y:-0.75},11).to({regX:0.2,scaleX:0.4667,scaleY:0.463,rotation:17.9429,x:31.75,y:0.25},10).to({regX:-1.1,regY:-1.7,scaleX:0.4569,scaleY:0.4341,rotation:37.4869,x:30.75,y:3.95},35).to({regX:0,regY:0.2,scaleX:0.6815,scaleY:0.6309,rotation:34.9951,x:30.3,y:17.7},24).wait(1));

	// Layer_11
	this.instance_8 = new lib.MosquitoANI();
	this.instance_8.setTransform(-38.1,12.5,0.5112,0.5015,46.9614,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-0.2,scaleX:0.2958,scaleY:0.2902,rotation:46.9601,x:-10.35,y:-2.55},14,cjs.Ease.get(0.88)).to({regX:-0.1,regY:0.3,scaleX:0.3437,scaleY:0.3372,rotation:46.9604,x:-9.5,y:-12},20).to({regY:0.4,scaleX:0.4346,scaleY:0.4264,rotation:46.962,x:-11.4,y:-16.45},38).to({regY:0.2,scaleX:0.5112,scaleY:0.5015,rotation:46.9614,x:-12.4,y:-13.25},32).wait(1));

	// Mosquito ANI
	this.instance_9 = new lib.MosquitoANI();
	this.instance_9.setTransform(-9.35,15.15,0.3687,0.3027,39.4239,0,0,-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-1.45,y:4.65},7,cjs.Ease.get(1)).to({regX:0.6,regY:-1.7,x:4.3,y:-0.05},7).to({regX:-0.6,regY:0.4,x:-7.35,y:-0.8},10).to({x:-9.35,y:15.15},56).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-66.4,167.3,127.60000000000001);


(lib.Logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text1();
	this.instance.setTransform(111.7,51.95,0.0836,0.0836,0,0,0,474.9,61.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABoIAAjPMD4xAAAIAADPg");
	this.shape.setTransform(111.444,45.0954,0.0836,0.0836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgygSkIArBdMggzASkg");
	this.shape_1.setTransform(38.4114,28.5827,0.0836,0.0836);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gngMl6QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA+ATQB+AmAMF7QAMF7htHwQhtHyinFFQhNCZhLBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(19.1252,48.7629,0.0836,0.0836);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzigQj0lUjFoOQjFoOgjmVQgRjAAch0QAdh4BIgXQBJgXBoBPQBkBNB0ChQDyFTDGIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(29.8654,48.1276,0.0836,0.0836);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nvhTmMQgoi7ALh3QAMh7BBggQBBggBrBAQBoA+CACQQEOEvD7HwQD7HuBTGMQAoC8gLB3QgMB7hBAhQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(19.5456,23.3731,0.0836,0.0836);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(115.5,30.6,0.0836,0.0836,0,0,0,849.6,158.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AheB+ICykCIALAHIizECg");
	this.shape_5.setTransform(34.108,22.2879,0.6976,0.6976);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("AgHAoQg/gIgrgQQgUgIgKgIQgKgJABgIQABgIAOgGQANgFAWgDQAvgHA+AHQBAAIAqARQAUAIALAHQAKAJgBAIQgCAIgNAGQgNAGgWADQgWACgZAAQgdAAgigDg");
	this.shape_6.setTransform(10.1985,33.803,0.6976,0.6976);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-0.5,13,197.7,45.9), null);


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
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(360));

	// New
	this.instance = new lib.Newtext();
	this.instance.setTransform(128.8,438.65,1,1,0,0,0,95.5,11.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(160));

	// OSHA
	this.instance_1 = new lib.OSHALogo_1();
	this.instance_1.setTransform(54.4,140.9,1,1,0,0,0,40.4,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// F2
	this.instance_2 = new lib.F2();
	this.instance_2.setTransform(152.85,370.7,1.584,1.584,0,0,0,51.6,75.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).to({_off:true},80).wait(169));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.setTransform(238,610.55,1.1,1.1,0,0,0,46.1,16.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({y:588.55,alpha:1},9,cjs.Ease.get(1)).wait(333));

	// Logo
	this.instance_4 = new lib.Logo();
	this.instance_4.setTransform(71.95,566.95,0.8,0.8,0,0,0,100,32);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:91.95,alpha:1},9,cjs.Ease.get(1)).wait(342));

	// F1
	this.instance_5 = new lib.F1();
	this.instance_5.setTransform(134.05,366.35,1.584,1.584,0,0,0,68,65.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:165.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(259));

	// Sh
	this.instance_6 = new lib.Sh();
	this.instance_6.setTransform(158,596.5,1,1,0,0,0,175.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Img2
	this.instance_7 = new lib.Img2_1();
	this.instance_7.setTransform(150,105,1,1,0,0,0,150,105);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// Layer_4
	this.instance_8 = new lib.mosquito();
	this.instance_8.setTransform(105.1,43.1,0.6142,0.9115,72.6667,0,0,8.6,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(360));

	// Layer_3
	this.instance_9 = new lib.mosquito();
	this.instance_9.setTransform(122.75,91.2,1,1,0,0,0,8.3,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Img1
	this.instance_10 = new lib.Img1_1();
	this.instance_10.setTransform(150,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-0.5,351.6,679.9);


// stage content:
(lib.WFSB_217823_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(150,299.9992);

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
	this.instance.setTransform(150,300,1,2.4,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,151,301);
// library properties:
lib.properties = {
	id: 'DF7533DE48737A4391F9B7075B15E698',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Img1.jpg", id:"Img1"},
		{src:"Img2.jpg", id:"Img2"},
		{src:"OSHALogo.png", id:"OSHALogo"}
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
an.compositions['DF7533DE48737A4391F9B7075B15E698'] = {
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