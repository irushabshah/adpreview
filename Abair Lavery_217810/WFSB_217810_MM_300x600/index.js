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



(lib.IMG1 = function() {
	this.initialize(img.IMG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.IMG2 = function() {
	this.initialize(img.IMG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.OSHALogo = function() {
	this.initialize(img.OSHALogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,91);


(lib.TICK = function() {
	this.initialize(img.TICK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,159);// helper functions:

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
	this.shape.setTransform(194.675,370.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAxQgYABAAgZIAAgmIgKAAIAAgQIAKAAIAAgUIATAAIAAAUIASAAIAAAQIgSAAIAAAmQAAAEACACQACACAEgBIAKAAIAAARg");
	this.shape_1.setTransform(190.325,366.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_2.setTransform(183.775,367.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgMIAUAAIAABOIgUAAIAAgLQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgUQgFADgDAFQgDAFAAAHQAAAHADAFQADAGAFADQAFACAEAAQAGAAAFgCQAFgEACgFQADgFAAgHQAAgGgDgGQgCgFgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_3.setTransform(174.775,367.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA4IAAhOIATAAIAABOgAgIgjQgEgDAAgGQAAgFAEgDQAEgDAEAAQAGAAADADQAEADgBAFQABAGgEADQgDADgGABQgEgBgEgDg");
	this.shape_4.setTransform(169.05,365.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_5.setTransform(165.5,366.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IAUAAIAAALQAEgFAGgEQAIgDAHAAQAKAAAJAFQAHAFAFAJQAFAJAAAMQAAANgFAIQgFAJgHAFQgJAGgKAAQgHAAgIgEQgGgEgEgFIAAAxgAgKgmQgEADgDAFQgDAFAAAIQAAAHADAFQADAFAEACQAFADAFAAQAGAAAEgDQAFgCADgFQADgFAAgIQAAgHgDgFQgDgFgFgDQgEgDgGAAQgFAAgFADg");
	this.shape_6.setTransform(159.55,369.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtAoIAAgrQAAgJgEgFQgFgFgIAAQgIAAgFAFQgFAFAAAJIAAArIgTAAIAAgrQAAgJgFgFQgEgFgIAAQgJAAgFAFQgEAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQADgFAHgDQAGgDAHAAQAJAAAHAEQAHAEAEAHQAEgHAHgEQAHgEAJAAQAPAAAIAJQAJAJAAAQIAAAtg");
	this.shape_7.setTransform(148.425,367.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAkQgJgGgGgJQgFgJAAgMQAAgLAFgKQAGgJAJgFQAJgFALAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAJQgFAJgKAGQgJAFgLAAQgLAAgJgFgAgOgQQgGAFAAALQAAALAGAHQAGAFAIAAQAFAAAFgCQAEgDADgFQADgGAAgHQAAgLgGgFQgGgHgIAAQgIAAgGAHg");
	this.shape_8.setTransform(137.525,367.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAtQgLgHgHgMQgHgLAAgPQAAgOAHgMQAHgLALgHQAMgGANAAQARAAAMAIQANAJAFAPIgXAAQgEgHgGgDQgGgEgIAAQgIAAgHAEQgHAEgDAHQgEAIAAAJQAAAKAEAIQADAHAHAEQAHAEAIAAQAIAAAGgEQAGgDAEgIIAXAAQgFAQgNAJQgMAIgRAAQgNAAgMgGg");
	this.shape_9.setTransform(128.025,366.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbA6IARgnIgfhMIAWAAIATA3IAWg3IAVAAIgwBzg");
	this.shape_10.setTransform(115.9,369.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAxQgYABAAgZIAAgmIgKAAIAAgQIAKAAIAAgUIATAAIAAAUIASAAIAAAQIgSAAIAAAmQAAAEACACQACACAEgBIAKAAIAAARg");
	this.shape_11.setTransform(109.275,366.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAkQgJgGgFgJQgGgJAAgMQABgMAFgJQAFgJAIgFQAKgFALAAQALAAAJAFQAJAFAFAIQAEAKAAALIAAAHIg5AAQABAJAFAFQAGAEAGAAQALAAAFgKIAWAAQgEAMgKAHQgJAIgOAAQgLAAgJgFgAATgGQgBgIgFgFQgGgEgHAAQgGAAgGAEQgFAEgBAJIAlAAIAAAAg");
	this.shape_12.setTransform(102.8,367.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMA4IAAg+IgJAAIAAgQIAJAAIAAgEQAAgPAJgHQAHgHARABIAAAQQgIAAgCADQgDADAAAGIAAAEIANAAIAAAQIgNAAIAAA+g");
	this.shape_13.setTransform(96.5,365.7983);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgMIAUAAIAABOIgUAAIAAgLQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgUQgFADgDAFQgDAFAAAHQAAAHADAFQADAGAFADQAFACAEAAQAGAAAFgCQAFgEACgFQADgFAAgHQAAgGgDgGQgCgFgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_14.setTransform(89.425,367.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAvQgIgDgFgHQgFgGAAgKIAVAAQAAAGAFAEQADADAHABQAHgBADgDQAFgDAAgFQAAgFgEgDQgCgDgEgCIgLgDIgPgGQgGgCgFgFQgEgGAAgJQAAgJAEgGQAFgIAIgCQAIgEAKAAQAOAAALAHQAJAIABAOIgWAAQgBgGgDgDQgEgEgGAAQgGAAgDAEQgEADAAAFQAAAEADACQACADAEACIAKAEQAKADAGADQAGACAEAFQAFAGAAAJQAAAIgEAHQgEAHgIAEQgIAEgLAAQgJAAgJgEg");
	this.shape_15.setTransform(80.95,366.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAwQgIgEgEgHQgFgHAAgJQAAgJAGgIQAFgHALgFQgEgFgBgEQgCgEAAgGQAAgGADgGQAEgFAGgEQAHgDAJAAQAIAAAHAEQAGADADAGQADAGAAAHIgTAAQAAgFgCgDQgDgCgDAAQgEAAgDACQgDADAAADQAAAEACADIAIAJIAYAYIAAgBIAAAAIAJgNIAUAAIgKARIgGAKIAYAYIgZAAIgKgLQgOANgTAAQgLAAgJgEgAghAUQABAHAFAEQAFAEAHAAQAMAAAIgIIgXgYQgPAGAAALg");
	this.shape_16.setTransform(211.55,352.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAwQgIgFgFgJQgFgJAAgNQAAgMAFgIQAFgJAIgFQAIgFAKAAQAHAAAHADQAHADAEAGIAAgmIAUAAIAABpIgUAAIAAgLQgEAFgGAEQgHAEgIAAQgKAAgIgGgAgJgHQgFADgDAEQgDAFAAAHQAAAIADAFQADAFAFADQAFADAEAAQAGAAAFgDQAFgDACgFQADgFAAgHQAAgIgDgFQgCgEgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_17.setTransform(198.425,351.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAkQgJgGgGgJQgFgJAAgMQAAgLAFgKQAGgJAJgFQAJgFALAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAJQgFAJgKAGQgJAFgLAAQgLAAgJgFgAgOgQQgGAFAAALQAAALAGAHQAGAFAIAAQAFAAAFgDQAEgCADgFQADgGAAgHQAAgLgGgFQgGgHgIAAQgIAAgGAHg");
	this.shape_18.setTransform(189.625,353.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAkQgJgGgGgJQgFgJAAgMQAAgLAFgKQAGgJAJgFQAJgFALAAQALAAAKAFQAJAFAFAJQAGAKAAALQAAAMgGAJQgFAJgKAGQgJAFgLAAQgLAAgJgFgAgOgQQgGAFAAALQAAALAGAHQAGAFAIAAQAFAAAFgDQAEgCADgFQADgGAAgHQAAgLgGgFQgGgHgIAAQgIAAgGAHg");
	this.shape_19.setTransform(181.075,353.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAQIgpAAIAAAaIAfAAIAAAPIgfAAIAAAqg");
	this.shape_20.setTransform(171.825,352.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAwQgIgFgFgJQgFgJAAgNQAAgMAFgIQAFgJAIgFQAIgFAKAAQAHAAAHADQAHADAEAGIAAgmIAUAAIAABpIgUAAIAAgLQgEAFgGAEQgHAEgIAAQgKAAgIgGgAgJgHQgFADgDAEQgDAFAAAHQAAAIADAFQADAFAFADQAFADAEAAQAGAAAFgDQAFgDACgFQADgFAAgHQAAgIgDgFQgCgEgFgDQgFgDgGAAQgEAAgFADg");
	this.shape_21.setTransform(160.475,351.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAoIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgUAAIAAhOIAUAAIAAAKQAEgFAGgDQAHgDAGAAQAOAAAJAJQAJAJAAAQIAAAtg");
	this.shape_22.setTransform(152.075,353.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgJAIgFQAIgFAKAAQAIAAAHAEQAGADAEAGIAAgMIAUAAIAABOIgUAAIAAgLQgEAGgGADQgHAEgIAAQgKAAgIgFgAgJgTQgFACgDAFQgDAFAAAHQAAAHADAFQADAFAFADQAFADAEAAQAGAAAFgDQAFgCACgGQADgFAAgHQAAgGgDgGQgCgFgFgCQgFgEgGAAQgEAAgFAEg");
	this.shape_23.setTransform(143.325,353.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAaAyIgGgTIgnAAIgHATIgVAAIAkhjIAXAAIAkBjgAAOAPIgOgpIgOApIAcAAg");
	this.shape_24.setTransform(131.225,352.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAyIAAgqIgpAAIAAAqIgUAAIAAhjIAUAAIAAApIApAAIAAgpIAUAAIAABjg");
	this.shape_25.setTransform(120.925,352.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAvQgJgDgEgHQgFgHAAgJIAVAAQAAAGAFAEQADADAHABQAHgBADgDQAFgDAAgFQAAgFgEgDQgCgDgEgCIgLgDIgPgGQgGgCgFgFQgEgGAAgJQAAgJAEgGQAFgIAIgCQAIgEAKAAQAOAAALAHQAJAIABAOIgWAAQgBgGgDgDQgEgEgGAAQgGAAgDAEQgEADAAAFQAAAEADACQACAEAEABIAKAEQAKADAGADQAGACAEAFQAFAGAAAJQAAAIgEAHQgEAHgIAEQgIAEgLAAQgJAAgJgEg");
	this.shape_26.setTransform(110.65,352.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAsQgMgGgHgMQgHgLAAgPQAAgOAHgMQAHgLAMgHQALgGANAAQAOAAAMAGQAMAHAGALQAHAMAAAOQAAAPgHALQgGAMgMAGQgMAHgOAAQgNAAgLgHgAgOgcQgIAEgDAHQgFAIAAAJQAAAKAFAHQADAIAIAEQAGAEAIAAQAJAAAHgEQAHgEAEgIQADgHABgKQgBgJgDgIQgEgHgHgEQgHgEgJAAQgIAAgGAEg");
	this.shape_27.setTransform(100.8,352.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPAuQgGgGAAgLQAAgLAGgGQAHgHAKAAQAKAAAGAHQAGAGAAALQAAALgGAGQgGAGgKAAQgLAAgGgGgAAXAdQAAALAIAAQAIAAAAgLQAAgLgIAAQgIAAAAALgAglAyIA3hjIAUAAIg3BjgAgvgKQgGgGAAgLQAAgLAGgGQAHgHAKAAQAKAAAGAHQAHAGAAALQAAALgHAGQgGAGgKAAQgKAAgHgGgAgmgbQAAALAIAAQAEAAACgDQACgDAAgFQAAgMgIAAQgIAAAAAMg");
	this.shape_28.setTransform(84.525,352.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAnQgJgOAAgZQAAgYAJgNQAJgPAUAAQAVAAAJAPQAJANAAAYQAAAZgJAOQgJAOgVAAQgUAAgJgOgAgLgcQgEAEgCAHIgBARIABASQACAHAEAFQAEAEAHAAQAIAAAEgEQAEgFABgHQACgHAAgLQAAgKgCgHQgBgHgEgEQgEgFgIAAQgHAAgEAFg");
	this.shape_29.setTransform(75.325,351.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAnQgJgOAAgZQAAgYAJgNQAJgPAUAAQAVAAAJAPQAJANAAAYQAAAZgJAOQgJAOgVAAQgUAAgJgOgAgLgcQgEAEgCAHIgBARIABASQACAHAEAFQAEAEAHAAQAIAAAEgEQAEgFABgHQACgHAAgLQAAgKgCgHQgBgHgEgEQgEgFgIAAQgHAAgEAFg");
	this.shape_30.setTransform(67.375,351.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCA0IAAhVIgOAAIAAgSIAhAAIAABng");
	this.shape_31.setTransform(60.275,351.85);

	this.instance = new lib.OSHALogo();
	this.instance.setTransform(83,307,0.4221,0.4221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OSHALogo_1, new cjs.Rectangle(55.1,307,163.20000000000002,70.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgTASQgHgHAAgKQAAgLAHgGQAIgIALAAQAMAAAIAIQAHAGAAALQAAAKgHAHQgIAHgMAAQgLAAgIgHg");
	this.shape.setTransform(154.675,-70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BvIAjhNIg+iQIA0AAIAiBeIAjheIAxAAIhdDdg");
	this.shape_1.setTransform(147.1,-71.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBEQgPgJgIgSQgKgSABgXQgBgWAKgSQAIgRAPgKQAPgJATAAQAPAAAMAGQAMAGAGALIAAgVIAvAAIAACWIgvAAIAAgWQgGAKgNAHQgMAGgPABQgRgBgQgJgAgWgaQgKAKAAAQQAAARAKAKQAJALAOAAQANAAAKgLQAKgJgBgSQABgQgKgKQgKgKgNAAQgOAAgJAKg");
	this.shape_2.setTransform(129.8,-75.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBbQgPgJgIgSQgJgRAAgXQAAgYAJgRQAIgRAPgKQAPgJATAAQAOAAAMAHQAMAGAHAKIAAhGIAuAAIAADHIguAAIAAgVQgGAKgMAHQgMAGgPAAQgTAAgPgKgAgWgCQgJAIAAASQAAAQAJALQAKAKANAAQAOAAAJgKQAJgKAAgRQAAgRgJgJQgJgLgOABQgNgBgKALg");
	this.shape_3.setTransform(112.05,-77.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBEQgSgJgKgSQgKgRAAgYQAAgWAKgSQAKgRASgKQASgJAVAAQAWAAASAJQASAKAKARQAKASAAAWQAAAYgKARQgKASgSAJQgSAJgWABQgWgBgRgJgAgVgbQgJAKAAARQAAASAJAKQAIAKANAAQANAAAJgKQAJgKAAgSQAAgRgJgKQgJgJgNgBQgMABgJAJg");
	this.shape_4.setTransform(94.925,-75.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBeQgZAAgOgNQgOgMAAgcIAAg7IgSAAIAAgmIASAAIAAglIAtAAIAAAlIAeAAIAAAmIgeAAIAAA8QAAAHADADQADADAIAAIAQAAIAAAng");
	this.shape_5.setTransform(81.4,-77.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBMIAAhRQAAgPgIgIQgHgIgNAAQgNAAgIAIQgHAIAAAPIAABRIgvAAIAAiVIAvAAIAAAUQAGgKANgGQAKgGAPAAQAaAAAQARQAQARAAAeIAABXg");
	this.shape_6.setTransform(213.05,-104.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBEQgSgJgKgSQgKgSAAgXQAAgWAKgSQAKgRASgKQASgKAVABQAWgBASAKQASAKAKARQAKASAAAWQAAAXgKASQgKASgSAJQgSAKgWAAQgWAAgRgKgAgVgbQgJAKAAARQAAASAJAKQAIAJANAAQANAAAJgJQAJgKAAgSQAAgRgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_7.setTransform(196.225,-104.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBsIAAiWIAtAAIAACWgAgThAQgHgIAAgKQAAgLAHgHQAIgHALAAQAMAAAIAHQAHAHAAALQAAAKgHAIQgIAGgMABQgLgBgIgGg");
	this.shape_8.setTransform(183.925,-107.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBeQgYAAgOgNQgOgMAAgcIAAg7IgTAAIAAgmIATAAIAAglIAtAAIAAAlIAfAAIAAAmIgfAAIAAA8QAAAHAEADQADADAHAAIARAAIAAAng");
	this.shape_9.setTransform(174.5,-106.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBEQgPgJgJgSQgIgSgBgXQABgXAIgRQAJgRAPgKQAQgKASABQAPgBAMAHQAMAGAHALIAAgVIAuAAIAACWIguAAIAAgWQgIAKgLAHQgMAGgPABQgSAAgQgKgAgWgaQgKAJABARQgBARAKAKQAKAKAMAAQAPAAAJgKQAKgKAAgRQAAgQgKgKQgJgKgPAAQgMAAgKAKg");
	this.shape_10.setTransform(159.9,-104.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBeQgZAAgOgNQgOgMAAgcIAAg7IgSAAIAAgmIASAAIAAglIAtAAIAAAlIAeAAIAAAmIgeAAIAAA8QAAAHADADQADADAIAAIAQAAIAAAng");
	this.shape_11.setTransform(145.75,-106.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBFQgMgIgIgPQgHgOAAgUIAAhXIAuAAIAABRQAAAPAIAIQAIAJAMgBQANABAIgJQAIgJAAgOIAAhRIAuAAIAACWIguAAIAAgVQgHAKgMAGQgLAGgPAAQgRAAgOgHg");
	this.shape_12.setTransform(131.75,-104.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOBxIAAjeIAuAAIAAAVQAGgLAMgGQAMgHAPABQATgBAPAKQAPAKAJARQAJASAAAXQAAAXgJARQgJASgPAJQgPAKgTAAQgPgBgMgGQgMgHgGgKIAABegAgXg9QgKAKAAARQAAARAKAKQAJAJAOAAQANAAAKgJQAKgKAAgRQAAgSgKgJQgKgKgNAAQgNAAgKAKg");
	this.shape_13.setTransform(115.05,-100.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmBEQgRgJgKgSQgKgSABgXQAAgXAJgRQAKgRARgKQASgKAUABQAXgBARAKQARAJAJARQAKARAAAXIgBAMIhoAAQACAOAHAIQAJAHALAAQARAAAGgPIAxAAQgDAPgKANQgLALgOAHQgPAGgTABQgUAAgSgKgAAdgNQgBgMgHgIQgJgGgMAAQgKAAgJAGQgHAHgCANIA5AAIAAAAg");
	this.shape_14.setTransform(98,-104.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguBMIAAiVIAuAAIAAAZQAIgNAMgHQAMgHAPAAIAAAxIgNAAQgRAAgJAHQgIAIAAARIAABGg");
	this.shape_15.setTransform(85.325,-104.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBMIAAiVIAuAAIAAAZQAIgNAMgHQAMgHAPAAIAAAxIgNAAQgRAAgJAHQgIAIAAARIAABGg");
	this.shape_16.setTransform(68.875,-104.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvBFQgNgIgHgPQgHgOAAgUIAAhXIAuAAIAABRQAAAPAHAIQAJAJAMgBQANABAIgJQAIgJAAgOIAAhRIAuAAIAACWIguAAIAAgVQgHAKgMAGQgLAGgPAAQgRAAgOgHg");
	this.shape_17.setTransform(55.1,-104.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnBEQgSgJgKgSQgKgSAAgXQAAgWAKgSQAKgRASgKQASgKAVABQAWgBASAKQASAKAKARQAKASAAAWQAAAXgKASQgKASgSAJQgSAKgWAAQgWAAgRgKgAgVgbQgJAKAAARQAAASAJAKQAIAJANAAQANAAAJgJQAJgKAAgSQAAgRgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_18.setTransform(38.875,-104.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag6BvIAjhNIg+iQIA1AAIAhBeIAjheIAxAAIhdDdg");
	this.shape_19.setTransform(24.05,-100.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguBbQgPgJgIgSQgJgRAAgYQAAgXAJgQQAIgSAPgJQAQgKASAAQAOAAAMAHQANAFAGALIAAhGIAuAAIAADHIguAAIAAgWQgGALgMAGQgMAHgPAAQgSAAgQgKgAgWgDQgJAJAAARQAAASAJAJQAJALANAAQAOAAAKgKQAJgKAAgSQAAgRgJgJQgKgJgOgBQgNABgJAJg");
	this.shape_20.setTransform(179.9,-135.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBMIAAiVIAuAAIAAAZQAIgNAMgHQAMgHAPAAIAAAxIgNAAQgRAAgJAHQgIAIAAARIAABGg");
	this.shape_21.setTransform(166.075,-133.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguBEQgPgKgIgRQgKgSABgXQgBgWAKgSQAIgRAPgKQAPgKATAAQAPAAAMAHQAMAHAGAKIAAgVIAvAAIAACVIgvAAIAAgVQgGALgNAGQgMAHgPAAQgRAAgQgKgAgWgaQgKAJAAARQAAARAKAKQAJAKAOAAQANABAKgKQAKgKgBgSQABgQgKgKQgKgKgNAAQgOAAgJAKg");
	this.shape_22.setTransform(150.95,-133.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AguBFQgOgIgHgPQgHgPAAgTIAAhXIAuAAIAABRQAAAPAIAIQAHAIANAAQANAAAIgIQAIgJAAgOIAAhRIAuAAIAACVIguAAIAAgUQgHAKgMAGQgLAGgPAAQgRAAgNgHg");
	this.shape_23.setTransform(134.05,-133.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxBiQgVgQgDgbIAuAAQACAJAIAFQAIAFALAAQAPAAAIgJQAJgHAAgTIAAgVQgIALgLAGQgMAHgPAAQgSAAgQgKQgPgKgJgRQgIgRgBgXQABgXAIgSQAJgRAPgKQAQgKASAAQAPAAAMAHQAMAHAHAKIAAgVIAuAAIAACVQAAAVgJARQgIARgRAJQgQALgaAAQgggBgVgPgAgWg+QgKAJABASQgBARAKAKQAKAJAMAAQAPABAJgJQAKgKAAgSQAAgRgKgKQgJgKgPAAQgMAAgKAKg");
	this.shape_24.setTransform(116.7,-129.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmBEQgRgJgKgSQgJgRgBgYQAAgWAKgSQAKgRARgKQARgKAWAAQAVAAASAKQARAJAJARQAKARAAAXIgBAMIhoAAQACAOAHAIQAJAHALAAQAQAAAHgOIAyAAQgFAPgKAMQgKALgOAHQgPAHgSAAQgVAAgSgKgAAdgOQgBgLgHgIQgJgGgMgBQgLABgIAGQgHAHgCAMIA5AAIAAAAg");
	this.shape_25.setTransform(99.55,-133.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBqIAAhwIgRAAIAAgmIARAAIAAgEQAAgcAQgOQAOgPAfAAIAIAAIAAAnQgNAAgGAEQgFAFAAAMIAAABIAZAAIAAAmIgZAAIAABwg");
	this.shape_26.setTransform(86.85,-136.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguBEQgPgKgJgRQgIgSgBgXQABgWAIgSQAJgRAPgKQAPgKATAAQAPAAAMAHQAMAHAHAKIAAgVIAuAAIAACVIguAAIAAgVQgHALgMAGQgMAHgPAAQgTAAgPgKgAgWgaQgKAJAAARQAAARAKAKQAKAKAMAAQAPABAJgKQAKgKAAgSQAAgQgKgKQgJgKgPAAQgMAAgKAKg");
	this.shape_27.setTransform(72.95,-133.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiBaQgRgHgJgNQgKgNAAgSIAwAAQABAKAHAFQAGAGAJAAQALAAAFgFQAGgEAAgJQAAgHgEgEQgFgFgHgDIgTgHQgSgFgMgGQgMgFgHgLQgJgLAAgSQAAgbATgPQATgOAfAAQAeAAATAOQAUAPABAcIgyAAQAAgKgHgFQgGgGgJABQgIgBgFAFQgFAEAAAJQAAAJAIAFQAJAFARAGQATAGALAHQAMAEAIALQAJAKAAASQAAAQgJANQgIANgQAIQgPAIgWAAQgTAAgRgHg");
	this.shape_28.setTransform(56.55,-135.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AseAAIY9AA");
	this.shape_29.setTransform(118.625,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Newtext, new cjs.Rectangle(13.5,-148.5,207.5,145.5), null);


(lib.Img2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img2, new cjs.Rectangle(0,0,300,600), null);


(lib.Img1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape.graphics.f("#14A751").s().p("AgoA3QgJgLAAgVQAAgXANgMQANgMAUAAQAKAAAGADIAAgZQAAgIgFgBIgGgBIAAgGIAjgFIABABIAAB0QAAAGACABQACABAIABIAAAGIglAAIAAgJQgNAMgNAAQgRAAgKgNgAgRgHQgGAIAAATQAAAQAGAKQAFAJAKAAQAJAAAEgIQACgDAAgGIAAglQAAgGgCgDQgEgIgJAAQgJAAgGAJg");
	this.shape.setTransform(94.875,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AAGAtIAAgGIAIgCQADgBAAgFIAAgsQAAgSgQAAQgKAAgFAKQgCADAAAHIAAApQAAAGADABIAIACIAAAGIgwAAIAAgGQAJgBACgBQABgCAAgFIAAg1QAAgIgEgBIgGgBIAAgGIAhgFIACAMIAQgIQAHgEAIAAQAaAAAAAcIAAAtQAAAGACACQACABAJABIAAAGg");
	this.shape_1.setTransform(84.275,32.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_2.setTransform(73.525,32.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AgsAAQgBgtAtAAQAtAAAAAtQAAAvgtgBQgtABABgvgAgSABQgBAmATgBQATAAAAgmQAAglgTAAQgTAAABAmg");
	this.shape_3.setTransform(62.6,32.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAtA+QgNAAgHgEQgHgEgDgJQgCgJgDgRQgCgJgFgDQgDgDgIAAIgIAAIAAApQAAAHACABQACACAKABIAAAGIg4AAIAAgGQAKgBACgCQADgBAAgHIAAhZQAAgHgDgCQgCgBgKgBIAAgGIA7AAQAVAAAJAGQAMAHAAARQAAANgIAIQgIAIgOACIAAAAQAYAFAEAaQACAMADAFQAFAHAIABIAAAGgAgPg0QgBABAAAFIAAArIAJAAQAMAAAFgHQAFgGAAgNQAAgZgVAAQgHAAgCACg");
	this.shape_4.setTransform(51.025,30.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("AgWAHIAAgNIAtAAIAAANg");
	this.shape_5.setTransform(41.675,32.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQQAJgJAFgDQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_6.setTransform(35.775,32.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AAIAkIgKAHQgIADgHAAQgNABgHgJQgHgHAAgLQAAgQATgFQAcgKAFgDIAAgIQAAgPgMAAQgKgBgFATQgDAGgEAAQgFAAgEgDQgGgCAAgGQAAgIAKgGQALgIATABQAgAAAAAaIAAAnQABAMAFACIAIABIAAAGQgKAFgNAAQgLAAgDgKgAgJABQgJAFAAAMQgBAGAFAFQAEAFAFAAQANAAAAgPIAAgZg");
	this.shape_7.setTransform(26.4,32.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("AgoAAQAAgTAKgNQALgOAVABQAXAAAKANQAGAJAAAPQAAAIgJAAIguAAQAAAhAXABQAQAAAJgRIAGADQgKAagcAAQgqABAAgvgAgLgbQgDAHAAALIAYAAQAGAAAAgGQAAgWgOAAQgIAAgFAKg");
	this.shape_8.setTransform(15.425,32.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgeA+IAAgGQAMgBADgCQADgBAAgHIAAgcQAAgFgEgHIgcgyQgDgGgDgCQgCgBgHgBIAAgGIA3AAIAAAGIgKABQgEABACAFQAKAVAPAcIAAAAQAOgaAIgWQADgGgFgBIgKgBIAAgGIApAAIAAAGQgIABgDACQgDABgDAGQgJAOgRAjQgDAGAAAGIAAAdQAAAHACABQADACANABIAAAGg");
	this.shape_9.setTransform(6.175,30.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgPAVAAQAXAAAKAOQAGAKAAAOQAAAIgJgBIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgWgOgBQgIABgFAJg");
	this.shape_10.setTransform(123.175,14.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("AAiAtIAAgGIAIgCQADgBgBgFIAAgsQABgSgPAAQgNAAgDANIgBAJIAAAoQAAAFACABQABABAHABIAAAGIgtAAIAAgGQAHgBABgBQACgBABgFIAAgsQgBgSgOAAQgMAAgFANIgBAIIAAApQAAAFADABIAIACIAAAGIgwAAIAAgGQAJgBACgBQACgCAAgGIAAg0QAAgIgFgBIgHgBIAAgGIAigFIACAMIAPgIQAIgEAIAAQAQAAAHANIAOgIQAJgFAJAAQAbAAAAAcIAAAtQAAAGACACQACABAIABIAAAGg");
	this.shape_11.setTransform(110.95,14.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgtAAQABgtAsgBQAtABABAtQgBAugtABQgsgBgBgugAgTABQABAlASABQATAAAAgnQAAgmgTAAQgSABgBAmg");
	this.shape_12.setTransform(97.2,14.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AAKA+IAAgGQAKgBACgCQACgBAAgHIAAgtIgwAAIAAAtQAAAHACABQADACAKABIAAAGIg5AAIAAgGQAKgBADgCQACgBAAgHIAAhZQAAgHgCgCQgDgBgKgBIAAgGIA5AAIAAAGQgKABgDABQgCACAAAHIAAAlIAwAAIAAglQAAgHgCgCQgCgBgKgBIAAgGIA5AAIAAAGQgLABgCABQgCACAAAHIAABZQAAAHACABQACACALABIAAAGg");
	this.shape_13.setTransform(85.575,13.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQIAOgMQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_14.setTransform(70.625,14.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AgpATIAAgsQAAgJgEgBIgHgBIAAgGIAjgDIABABIAAA4QAAAUAQAAQAKAAAEgJQACgEAAgGIAAgmQAAgJgFgBIgGgBIAAgGIAigDIACABIAABIQAAAFACACQABABAJABIAAAGIgkAAIgBgKIgMAIQgJAFgKAAQgaAAAAgbg");
	this.shape_15.setTransform(61.625,14.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgsAAQAAgtAsgBQAtABABAtQgBAugtABQgsgBAAgugAgTABQABAlASABQATAAAAgnQAAgmgTAAQgSABgBAmg");
	this.shape_16.setTransform(51.4,14.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AgeA+IAAgGQAMgBADgCQADgBAAgHIAAgcQAAgFgEgHIgcgyQgDgGgDgCQgCgBgHgBIAAgGIA3AAIAAAGIgKABQgEABACAFQAKAVAPAcIAAAAQAOgaAIgWQADgGgFgBIgKgBIAAgGIApAAIAAAGQgIABgDACQgDABgDAGQgJAOgRAjQgDAGAAAGIAAAdQAAAHACABQADACANABIAAAGg");
	this.shape_17.setTransform(41.975,13.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AgKAzQgHgGAAgLIAAg6IgLAAIAAgJIAMAAIAPgXIAIAAIAAAXIATAAIAAAJIgTAAIAAAzQAAAQALAAIAJgBIACAGQgOAIgLABQgIgBgGgFg");
	this.shape_18.setTransform(29.175,13.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgcAjQgLgLAAgXQAAgVALgMQAMgOAVAAQANAAAKAGQAKAFAAAJQAAAFgEADQgFADgEAAQgHgBgBgFQgGgQgIgBQgGAAgFAJQgFAJAAARQAAASAHAJQAGAKAKgBQAQABAIgSIAGADQgIAcgfAAQgSAAgLgMg");
	this.shape_19.setTransform(21.1,14.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgoAAQAAgUAKgLQALgPAVAAQAXAAAKAOQAGAKAAAOQAAAIgJgBIguAAQAAAjAXgBQAQAAAJgQIAGAEQgKAagcAAQgqgBAAgugAgLgcQgDAIAAALIAYAAQAGAAAAgGQAAgWgOgBQgIABgFAJg");
	this.shape_20.setTransform(10.625,14.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgKAzQgHgGAAgLIAAg6IgLAAIAAgJIAMAAIAPgXIAIAAIAAAXIATAAIAAAJIgTAAIAAAzQAAAQALAAIAJgBIACAGQgOAIgLABQgIgBgGgFg");
	this.shape_21.setTransform(3.625,13.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgsAAQAAgtAsgBQAuABgBAtQABAuguABQgsgBAAgugAgSABQAAAlASABQATAAAAgnQAAgmgTAAQgSABAAAmg");
	this.shape_22.setTransform(-5,14.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AgjAtIAAgGQAIgBACgBQACgCAAgGIAAg0QAAgIgFgBIgGgBIAAgGIAhgFIABAQIAOgMQAFgEAFAAQAMAAAAAMQAAAFgDAFQgDAEgGAAQgCAAgEgDQgGgEgEAAQgHAAAAAPIAAAnQAAAGACACQADABALABIAAAGg");
	this.shape_23.setTransform(-13.425,14.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AgzA+IAAgGQAKgBACgCQADgBAAgHIAAhZQAAgHgDgCQgCgBgKgBIAAgGIA5AAQAWAAAKAGQAOAJAAAUQAAAXgRAJQgMAHgVAAQgHAAgEgBIAAAhQAAAHACACQADABALABIAAAGgAgIg0QgBABAAAEIAAAtQAAAHAMAAQAVAAAAgdQAAgPgHgIQgGgHgLAAQgGAAgCACg");
	this.shape_24.setTransform(-22.975,13.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLALQgEgFgBgGQABgFAEgFQAFgEAGAAQAHAAAFAEQAEAFABAFQgBAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_25.setTransform(87.35,89.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWApQgLgGgFgKQgGgLgBgOQABgNAGgLQAFgKALgGQAKgGAMAAQANAAAKAGQALAFAGALQAGAKgBANIAAAIIg+AAQABAIAEAEQAFAFAHAAQAKAAAEgJIAdAAQgCAJgGAHQgGAHgIAEQgKAFgLAAQgMAAgKgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgCAHIAiAAIAAAAg");
	this.shape_26.setTransform(80,86.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_27.setTransform(72.75,84.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIA5QgHgEgEgGIAAAMIgcAAIAAh3IAcAAIAAAqQAEgGAHgEQAIgEAIAAQALAAAJAGQAJAGAGAKQAFAKAAAOQAAAOgFAKQgGALgJAGQgJAGgLAAQgJAAgHgEgAgNgBQgGAFAAAKQAAAKAGAGQAFAGAIAAQAIAAAGgGQAGgGAAgKQAAgLgGgFQgGgFgIAAQgIAAgFAGg");
	this.shape_28.setTransform(66.075,84.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbApQgJgGgFgLQgGgKAAgOQAAgNAGgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgMIAcAAIAABZIgcAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgQQgFAGAAAKQAAAKAFAGQAGAGAHAAQAJAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgJAAQgHAAgGAFg");
	this.shape_29.setTransform(55.275,86.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_30.setTransform(47.8,84.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgnQgFgEABgGQgBgHAFgDQAEgFAHAAQAHAAAFAFQAFADgBAHQABAGgFAEQgFAFgHAAQgHAAgEgFg");
	this.shape_31.setTransform(43.2,84.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgbApQgJgGgFgLQgGgKAAgOQAAgNAGgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgMIAcAAIAABZIgcAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgQQgFAGAAAKQAAAKAFAGQAGAGAHAAQAJAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgJAAQgHAAgGAFg");
	this.shape_32.setTransform(35.925,86.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAtIgghZIAdAAIATA/IAUg/IAdAAIggBZg");
	this.shape_33.setTransform(26.175,86.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAcA5IgHgUIgqAAIgGAUIgeAAIAqhxIAfAAIApBxgAAOAPIgOgoIgNAoIAbAAg");
	this.shape_34.setTransform(15.5,85.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAqQgKgEgFgHQgFgHgBgIIAbAAQABAEAEADQAEADAEAAQAGAAACgCQADgCAAgDQAAgEgEgCIgMgEIgQgFQgHgCgEgFQgFgFAAgKQAAgHAEgHQAEgGAJgEQAIgEALAAQARAAAKAJQAJAIACAOIgaAAQAAgEgEgDQgDgDgGAAQgEAAgDACQgCACAAADQAAAEAEACIAMAEIAQAFQAHACAEAFQAFAFAAAKQAAAIgEAGQgFAGgIAEQgIAEgLAAQgLAAgJgFg");
	this.shape_35.setTransform(111.325,69.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAuIAAgwQAAgKgFgFQgFgFgIAAQgGAAgGAFQgEAFAAAKIAAAwIgcAAIAAhaIAcAAIAAAMQAEgGAHgDQAGgEAKAAQAPAAAKAKQAJALAAASIAAA0g");
	this.shape_36.setTransform(102.35,69.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgbApQgJgGgFgLQgGgKAAgOQAAgNAGgLQAFgKAJgGQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgMIAcAAIAABZIgcAAIAAgNQgEAHgHAEQgHAEgJAAQgLAAgJgGgAgNgQQgFAGAAAKQAAAKAFAGQAGAGAHAAQAJAAAFgGQAGgGAAgKQAAgJgGgGQgFgGgJAAQgHAAgGAFg");
	this.shape_37.setTransform(92.025,69.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_38.setTransform(84.55,68);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrA5IAAhxIAsAAQAOAAAKAFQAJAEAEAIQAGAJAAAKQgBALgEAIQgFAHgJAFQgJAFgPAAIgQAAIAAApgAgPgFIAPAAQAHAAAEgEQAEgDAAgIQAAgGgEgEQgEgDgHAAIgPAAg");
	this.shape_39.setTransform(77.35,68.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AARAuIAAgwQABgKgFgFQgFgFgIAAQgHAAgFAFQgEAFAAAKIAAAwIgcAAIAAhaIAcAAIAAAMQAEgGAHgDQAHgEAJAAQAPAAAJAKQAKALAAASIAAA0g");
	this.shape_40.setTransform(63,69.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXApQgLgGgGgKQgGgLAAgOQAAgNAGgLQAGgKALgGQALgGAMAAQANAAALAGQALAGAGAKQAGALAAANQAAAOgGALQgGAKgLAGQgLAGgNAAQgMAAgLgGgAgNgQQgEAGAAAKQAAALAEAGQAGAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape_41.setTransform(52.6,69.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNBBIAAhZIAbAAIAABZgAgLgnQgEgDgBgHQABgGAEgEQAFgFAGAAQAHAAAFAFQAEAEABAGQgBAHgEADQgFAFgHAAQgGAAgFgFg");
	this.shape_42.setTransform(45.05,67.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOA4QgOAAgIgHQgJgHABgRIAAgjIgMAAIAAgXIAMAAIAAgWIAaAAIAAAWIATAAIAAAXIgTAAIAAAjQAAAEACACQACACAFAAIAKAAIAAAXg");
	this.shape_43.setTransform(39.7,68.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVApQgLgGgFgKQgHgLAAgOQAAgNAHgLQAFgKALgGQAJgGANAAQARAAALAJQAMAJADAQIgdAAQgDgKgMAAQgGAAgEAGQgFAGAAAKQAAALAFAGQAEAGAGAAQAMAAADgLIAdAAQgDAQgMAJQgLAKgRAAQgNAAgJgGg");
	this.shape_44.setTransform(32.1,69.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXApQgJgGgHgKQgFgLAAgOQAAgNAFgLQAGgKAKgGQALgGANAAQANAAAJAGQALAFAGALQAFAKABANIgBAIIg+AAQABAIAEAEQAGAFAGAAQAKAAAEgJIAeAAQgDAJgGAHQgGAHgIAEQgJAFgLAAQgNAAgLgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_45.setTransform(21.8,69.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAPA4QgPAAgIgHQgJgHAAgRIAAgjIgLAAIAAgXIALAAIAAgWIAbAAIAAAWIATAAIAAAXIgTAAIAAAjQAAAEACACQACACAEAAIALAAIAAAXg");
	this.shape_46.setTransform(13.85,68.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXApQgLgGgGgKQgGgLAAgOQAAgNAGgLQAGgKALgGQALgGAMAAQANAAALAGQALAGAGAKQAGALAAANQAAAOgGALQgHAKgKAGQgLAGgNAAQgNAAgKgGgAgNgQQgEAGAAAKQAAALAEAGQAGAFAHAAQAIAAAFgFQAGgGAAgLQAAgKgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape_47.setTransform(5.6,69.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgbAuIAAhaIAbAAIAAAPQAEgHAIgFQAHgEAJAAIAAAeIgIAAQgKAAgFAEQgFAEAAALIAAAqg");
	this.shape_48.setTransform(-2.175,69.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgrA5IAAhxIAsAAQAOAAAKAFQAJAEAEAIQAGAJgBAKQAAALgEAIQgEAHgKAFQgJAFgPAAIgQAAIAAApgAgPgFIAPAAQAIAAADgEQAEgDAAgIQAAgGgEgEQgDgDgIAAIgPAAg");
	this.shape_49.setTransform(-10.65,68.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAxAuIAAgwQAAgJgFgFQgFgFgIAAQgIAAgEAFQgFAFAAAJIAAAwIgbAAIAAgwQAAgJgEgFQgFgFgIAAQgIAAgFAFQgEAFAAAJIAAAwIgcAAIAAhaIAcAAIAAAMQAEgGAHgDQAGgEAJAAQAKAAAIAFQAHAEAFAIQAFgHAIgFQAIgFAJAAQARAAAKAKQAKALAAASIAAA0g");
	this.shape_50.setTransform(75.175,52.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXApQgLgGgGgKQgGgLAAgOQAAgNAGgLQAHgKAKgGQALgGAMAAQAOAAAKAGQALAGAGAKQAGALAAANQAAAOgGALQgHAKgKAGQgLAGgNAAQgMAAgLgGgAgMgQQgFAGgBAKQABALAFAGQAFAFAHAAQAIAAAGgFQAFgGAAgLQAAgKgFgGQgGgGgIAAQgHAAgFAGg");
	this.shape_51.setTransform(61.65,52.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAPA4QgPAAgIgHQgJgHAAgRIAAgjIgKAAIAAgXIAKAAIAAgWIAbAAIAAAWIASAAIAAAXIgSAAIAAAjQAAAEACACQACACAEAAIAKAAIAAAXg");
	this.shape_52.setTransform(54.15,51.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgRAqQgKgEgFgHQgFgHgBgIIAbAAQABAEAEADQAEADAEAAQAGAAACgCQADgCAAgDQAAgEgEgCIgMgEIgQgFQgHgCgEgFQgFgFAAgKQAAgHAEgHQAEgGAJgEQAIgEALAAQARAAAKAJQAJAIACAOIgaAAQAAgEgEgDQgDgDgGAAQgEAAgDACQgCACAAADQAAAEAEACIAMAEIAQAFQAHACAEAFQAFAFAAAKQAAAIgEAGQgFAGgIAEQgIAEgLAAQgLAAgJgFg");
	this.shape_53.setTransform(46.225,52.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgbApQgJgEgEgJQgEgJAAgMIAAg0IAcAAIAAAwQAAAJAEAFQAFAFAHAAQAIAAAEgFQAGgFAAgJIAAgwIAbAAIAABaIgbAAIAAgNQgFAGgHAEQgHAEgIAAQgLAAgHgFg");
	this.shape_54.setTransform(37.2,52.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgbAzQgNgIgIgNQgHgNAAgRQAAgQAHgNQAIgNANgIQANgHAPAAQAVAAAOALQAPAKAFATIgfAAQgDgHgHgEQgGgEgIAAQgMAAgIAJQgIAJAAAOQAAAPAIAJQAIAJAMAAQAIAAAGgEQAHgEADgHIAfAAQgFATgPAKQgOALgVAAQgPAAgNgHg");
	this.shape_55.setTransform(25.125,51.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnxAAIPjAA");
	this.shape_56.setTransform(50.05,108.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F2, new cjs.Rectangle(-29.9,3.5,160,106.1), null);


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
	this.shape.graphics.f("#14A751").s().p("AgnBLQgEgEAAgFQAAgHADgEQAFgGAEAAQADAAAGAFQAEADAEAAQAFAAAFgPQABgFgCgIQgMgdgag7QgDgHgDgBIgKgCIAAgIIA5AAIAAAIIgHABQgGAAACAHIAYA9IABAAQANgmAGgXQABgHgEAAIgKgBIAAgIIApAAIAAAIQgHAAgEADQgCACgDAIIglBgQgGAWgJAJQgHAHgLAAQgGAAgGgDg");
	this.shape.setTransform(114.5,119.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14A751").s().p("AgcBOIAAgHQAKgBACgCQADgCAAgGIAAhxQAAgKgGgBIgIgBIAAgHIAogFIACAAIAACJQAAAGACACQACACAKABIAAAHg");
	this.shape_1.setTransform(105.725,114.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#14A751").s().p("AgcBLIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgHgBIAAgHIAngFIACABIAABVQAAAHACABQACACAKABIAAAHgAgMguQgEgEAAgIQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_2.setTransform(99.175,114.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_3.setTransform(86.125,116.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14A751").s().p("AAJArIgMAHQgIAFgJgBQgPABgJgKQgIgIAAgNQAAgTAWgGQAhgMAGgEIAAgJQgBgSgNAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLANgHQAMgJAWAAQAnABAAAeIAAAvQAAAOAGADQADAAAHAAIAAAIQgMAFgPAAQgMABgFgMgAgLACQgLAFAAANQAAAJAFAGQAFAEAGABQAOAAABgQIAAgfg");
	this.shape_4.setTransform(70.05,116.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#14A751").s().p("Ag3BJIAAgHQAMgBADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMgBIAAgIIBvAAIAAAnIgIAAQgFgRgFgFQgGgHgQAAIgPAAQgDAAgCABQgBACAAAFIAAAzIAXAAQAKAAAEgEQADgEADgLIAIAAIAAAwIgIAAQgDgMgDgDQgEgEgKAAIgXAAIAAAvQAAAIADACQACACAOABIAAAHg");
	this.shape_5.setTransform(57.675,114.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAOAAABAOQgBAGgDAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_6.setTransform(42.45,116.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_7.setTransform(31.775,116.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14A751").s().p("Ag1AAQAAg2A1AAQA2AAAAA2QAAA2g2AAQg1AAAAg2gAgWAAQAAAuAWgBQAXABAAguQAAgsgXAAQgWAAAAAsg");
	this.shape_8.setTransform(18.875,116.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14A751").s().p("AgkBJIAAgHQAPgBADgCQADgCAAgIIAAggQABgGgFgIIghg8IgGgJQgEgCgIgBIAAgIIBCAAIAAAIIgNACQgFAAADAHIAdA5IABAAQAQgeAKgaQADgIgGgBIgLgBIAAgIIAwAAIAAAIQgJABgEACQgDACgEAHQgLARgUApQgDAHgBAHIAAAiQAAAIADACQAEACAOABIAAAHg");
	this.shape_9.setTransform(7.8,114.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#14A751").s().p("AgmBPIAAgIQAJgBADgBQACgCAAgHIAAhKIgOAAIAAgKIAOAAIAAgGQAAgXAKgMQALgMASAAQAMAAAHAFQAFAFAAAFQAAAGgEADQgEAEgFAAQgGAAgCgGQgGgNgFAAQgGAAABANIACAfIAUAAIAAAKIgUAAIAABKQAAAHADACIANACIAAAIg");
	this.shape_10.setTransform(122.325,93.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#14A751").s().p("Ag1ABQAAg2A1AAQA2AAAAA2QAAA2g2AAQg1AAAAg2gAgWABQAAAsAWABQAXgBAAgsQAAgtgXAAQgWAAAAAtg");
	this.shape_11.setTransform(111.625,96.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaABQAagBAMAQQAIALAAASQAAAIgLABIg3AAQAAAnAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAJAAANIAdAAQAHAAAAgGQAAgbgRAAQgKAAgFALg");
	this.shape_12.setTransform(92.375,96.5002);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAPAAAAAOQAAAGgEAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_13.setTransform(83.2,96.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14A751").s().p("AAJAqIgMAIQgIAEgJABQgQgBgIgIQgIgJAAgNQAAgTAWgHQAhgKAFgFIAAgJQABgSgNAAQgNAAgGAVQgDAIgGAAQgFAAgFgDQgHgDAAgGQAAgLANgHQANgIAVAAQAngBAAAfIAAAvQAAAOAGACQAEABAGAAIAAAHQgMAHgPAAQgNgBgEgMgAgLACQgLAGAAANQAAAIAFAGQAFAEAGAAQAPABgBgRIAAgdg");
	this.shape_14.setTransform(72.15,96.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#14A751").s().p("AhAACQAAgjATgUQAUgXApAAQAeAAAQAJIAAAlIgIAAQgFgSgHgHQgKgMgSAAQgYAAgLAaQgHARAAAYQAAAZAIASQALAZAZAAQARAAAKgMQAHgIAHgVIAIAAIgDAoQgRAKggAAQhNAAAAhLg");
	this.shape_15.setTransform(58.125,94.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#14A751").s().p("AgwAAQAAgXAMgPQANgQAaABQAagBAMAQQAIALAAASQAAAIgLABIg3AAQAAAnAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAJAAANIAdAAQAHAAAAgGQAAgbgRAAQgKAAgFALg");
	this.shape_16.setTransform(37.725,96.5002);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#14A751").s().p("AApBPQgUAAgKgNQgKgOgPgbIAAgCIAdgqQAFgFAGAAIAdAAIAAAGQgaAFgIAIIgNAMQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAAAQAQAbAUAYQAHAJAJACIAAAHgAg7BPIAAgJQALAAACgBQACgCAAgHIAAhxQAAgKgGgBIgHgBIAAgHIAogFIACABIAACIQAAAHADACQACABAJAAIAAAJg");
	this.shape_17.setTransform(27.05,93.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#14A751").s().p("AAJAqIgMAIQgJAEgIABQgQgBgIgIQgIgJAAgNQAAgTAWgHQAhgKAGgFIAAgJQgBgSgNAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgDAAgGQAAgLANgHQANgIAVAAQAngBAAAfIAAAvQAAAOAGACQAEABAGAAIAAAHQgMAHgPAAQgNgBgEgMgAgLACQgLAGAAANQAAAIAFAGQAFAEAGAAQAOABABgRIAAgdg");
	this.shape_18.setTransform(14.45,96.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#14A751").s().p("AgkBKIAAgJIAMAAQAFgBACgCQACgDAAgFIAAh1IgKAAQgOAAgGAGQgEAGgGASIgHAAIAAgnIB9AAIAAAnIgIAAQgFgSgEgGQgGgGgOAAIgKAAIAAB1QAAAFABADQADACAGABIALAAIAAAJg");
	this.shape_19.setTransform(3.75,94.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#14A751").s().p("AgmBLQgGgFAAgEQAAgHAFgEQAEgGAEAAQAEAAAFAEQAEAEADAAQAHAAAEgPQACgFgEgIQgLgegag6QgDgHgCgBIgLgCIAAgIIA6AAIAAAIIgIABQgGAAADAHIAXA9IAAAAQAOgmAGgXQABgHgFAAIgKgBIAAgIIArAAIAAAIQgIAAgEADQgBACgEAIIgkBhQgIAWgIAIQgHAHgLAAQgGAAgFgDg");
	this.shape_20.setTransform(89.6,80.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#14A751").s().p("AgcBOIAAgHQAKgBACgCQADgCAAgGIAAhxQAAgKgGgBIgIgBIAAgHIAogFIACABIAACIQAAAGACACQACACAKABIAAAHg");
	this.shape_21.setTransform(81.525,74.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#14A751").s().p("AgcBLIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgHgBIAAgHIAngFIACABIAABVQAAAHACABQACACAKABIAAAHgAgMguQgEgFAAgHQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAQgIAAgEgFg");
	this.shape_22.setTransform(75.275,75.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#14A751").s().p("AAoA1IAAgHIAJgCQADgCAAgGIAAgzQAAgWgSAAQgOABgEAOIgBALIAAAvQAAAGACACIAKACIAAAHIg1AAIAAgHIAKgCQACgCAAgGIAAgzQAAgWgQAAQgQAAgEAPIgBALIAAAvQAAAGADACIAJACIAAAHIg4AAIAAgHQAKgBACgCQACgBAAgHIAAg+QAAgKgFgBIgIgBIAAgHIAogGIADAPIAQgKQAKgFAJAAQATAAAJAQIAQgKQALgGAKAAQAgAAAAAhIAAA2QAAAHADABQACACAKABIAAAHg");
	this.shape_23.setTransform(62.225,77.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#14A751").s().p("AAJArIgMAHQgJAEgIAAQgPABgJgKQgIgIAAgNQAAgTAWgGQAhgMAGgEIAAgJQgBgSgNAAQgMAAgGAVQgDAIgGAAQgFAAgFgDQgHgEAAgFQAAgLANgHQANgJAVAAQAnABAAAeIAAAvQAAAOAGADQADABAHgBIAAAHQgMAHgPgBQgMABgFgMgAgLACQgLAFAAANQAAAJAFAGQAFAEAGAAQAOAAABgPIAAgfg");
	this.shape_24.setTransform(45.85,77.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#14A751").s().p("Ag3BJIAAgIQAMAAADgCQADgCAAgIIAAhpQAAgIgDgCQgDgCgMAAIAAgIIBvAAIAAAmIgIAAQgFgRgFgFQgGgHgQAAIgPAAQgDAAgCABQgBACAAAFIAAAzIAXAAQAKAAAEgEQADgEADgMIAIAAIAAAxIgIAAQgDgLgDgEQgEgFgKABIgXAAIAAAvQAAAJADABQACACAOAAIAAAIg");
	this.shape_25.setTransform(32.175,75.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#14A751").s().p("AgqA1IAAgHQAKgBADgCQACgBAAgHIAAg+QgBgKgFgBIgHgBIAAgHIAngGIABASQALgKAFgEQAHgEAFAAQAOAAABAOQgBAGgDAFQgEAGgHAAQgCAAgFgEQgHgFgEAAQgJAAAAASIAAAvQAAAGADACQADACAMABIAAAHg");
	this.shape_26.setTransform(94.1,58.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#14A751").s().p("AgwAWIAAgzQAAgLgFgBIgIgBIAAgHIApgEIABACIAABCQAAAXATAAQAMAAAFgLQACgEAAgIIAAgsQAAgLgGgBIgIgBIAAgHIApgEIACACIAABUQAAAHACABQACACAKABIAAAHIgqAAIgBgLIgPAIQgKAGgLAAQgfAAAAggg");
	this.shape_27.setTransform(83.475,58.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#14A751").s().p("Ag1A4QgSgTAAglQAAgjASgUQATgVAiAAQAkAAATAVQARAUABAjQgBAlgRATQgTAVgkAAQgjAAgSgVgAgkAAQAABEAkAAQAlAAAAhEQAAhDglAAQgkAAAABDg");
	this.shape_28.setTransform(68.8,56.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#14A751").s().p("AgMA9QgIgIAAgNIAAhFIgNAAIAAgKIAOAAIASgbIAKAAIAAAbIAWAAIAAAKIgWAAIAAA9QgBAUANAAQAGAAAFgCIACAGQgRALgNAAQgIgBgIgFg");
	this.shape_29.setTransform(52.05,57.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#14A751").s().p("AgwAAQAAgXAMgOQANgRAaAAQAaAAAMARQAIAKAAASQAAAIgLABIg3AAQAAAnAcAAQATAAAKgTIAHAEQgLAegiAAIgBABQgxAAAAg3gAgNghQgEAKAAANIAdAAQAHgBAAgHQAAgagRAAQgKAAgFALg");
	this.shape_30.setTransform(42.525,58.3502);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#14A751").s().p("Ag5BJIAAgIQAMAAACgCQADgCAAgIIAAhpQAAgIgDgCQgCgCgMAAIAAgIIBEAAIAAAIQgNAAgDACQgDACAAAIIAABkQAAAKAFAEQADACAPAAQARABAHgJQAFgGAGgTIAIAAIgDAqg");
	this.shape_31.setTransform(30.825,56.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAKA3QgLAAgGgGQgHgGAAgNIAAgvIgKAAIAAgPIAKAAIAAgWIARAAIAAAWIAWAAIAAAPIgWAAIAAAvQAAAFADACQACADAGAAIALAAIAAAPg");
	this.shape_32.setTransform(128.3,23.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWAsIAAgvQAAgNgFgFQgHgHgKAAQgJAAgGAHQgGAFAAANIAAAvIgSAAIAAhWIASAAIAAAKQAEgFAIgDQAGgEAHAAQAKAAAJAFQAIAEAFAIQAEAJAAALIAAAzg");
	this.shape_33.setTransform(121.25,24.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_34.setTransform(112.125,24.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA1AsIAAgvQAAgNgGgFQgFgHgLAAQgKAAgGAHQgGAFAAANIAAAvIgRAAIAAgvQAAgNgGgFQgFgHgLAAQgKAAgGAHQgGAFAAANIAAAvIgSAAIAAhWIASAAIAAAKQAFgFAGgDQAIgEAHAAQAKAAAJAFQAHAFAFAHQAEgHAIgFQAJgFAJAAQAKAAAJAFQAIAEAEAIQAFAJAAALIAAAzg");
	this.shape_35.setTransform(99.95,24.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_36.setTransform(86.975,24.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgaA6QgMgJgCgOIASAAQACAHAHAEQAGAEAJAAQALAAAHgGQAGgHABgNIAAgOQgFAGgIAEQgIAEgJAAQgLAAgKgGQgJgFgFgLQgGgJAAgNQAAgOAGgKQAFgKAJgGQAKgFALAAQAKAAAIAEQAHAEAFAGIAAgNIASAAIAABYQAAAMgFAKQgFAJgKAGQgJAFgOAAQgRAAgLgIgAgMguQgGADgEAHQgEAGAAAKQAAAJAEAGQAEAGAGAEQAGADAGAAQAHAAAGgDQAGgEAEgFQADgHABgJQgBgJgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_37.setTransform(76.9,26.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAKAAAIAEQAHAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgKgGgAgMgZQgGADgEAHQgEAGAAAJQAAAJAEAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHABgJQgBgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_38.setTransform(67,24.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWAsIAAgvQAAgNgFgFQgHgHgKAAQgJAAgGAHQgGAFAAANIAAAvIgSAAIAAhWIASAAIAAAKQAEgFAIgDQAGgEAHAAQAKAAAJAFQAIAEAFAIQAEAJAAALIAAAzg");
	this.shape_39.setTransform(57.65,24.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAnQgKgFgGgLQgFgKAAgNQAAgNAFgKQAGgKAKgGQAJgFALAAQAJAAAIAEQAIAEAFAGIAAgNIASAAIAABXIgSAAIAAgNQgFAGgIAEQgIAEgJAAQgLAAgJgGgAgMgZQgGADgEAHQgDAGAAAJQAAAJADAGQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQAEgHAAgJQAAgIgEgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_40.setTransform(47.8,24.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAoA3IAAhLIgiBLIgLAAIgihLIAABLIgSAAIAAhtIATAAIAmBVIAnhVIATAAIAABtg");
	this.shape_41.setTransform(36.175,23.475);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALA3QgMAAgGgGQgGgGAAgNIAAgvIgLAAIAAgPIALAAIAAgWIARAAIAAAWIAVAAIAAAPIgVAAIAAAvQgBAFADACQACADAGAAIALAAIAAAPg");
	this.shape_42.setTransform(23.3,23.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQApQgIgDgFgHQgFgGAAgIIATAAQAAAFAFAEQAFAEAGAAQAIAAAEgDQAEgDAAgFQAAgFgEgCIgOgFIgQgFQgHgCgEgFQgFgFAAgJQAAgHAEgGQAFgGAHgDQAIgDAJAAQAPAAAJAHQAJAIABANIgSAAQgBgGgEgEQgEgDgHAAQgHAAgEADQgDACAAAFQAAADACADQADACADABIAKAEIAQAFQAGACAEAFQAFAFAAAIQAAAIgEAGQgEAFgIAEQgHADgLAAQgJAAgIgEg");
	this.shape_43.setTransform(16.575,24.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_44.setTransform(8.425,24.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIAmAAQAMAAAJAEQAJAEAEAIQAFAHAAAKQAAAIgEAHQgEAHgJAFQgJAEgNAAIgUAAIAAAtgAgUgDIAUAAQAKAAAFgFQAFgFAAgIQAAgTgUAAIgUAAg");
	this.shape_45.setTransform(-0.625,23.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbBAIASgqIgjhVIAVAAIAXBBIAahBIATAAIg1B/g");
	this.shape_46.setTransform(104.775,9.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAtIAAhXIASAAIAAANQADgHAGgEQAHgDAJAAIAAASIgEAAQgLAAgGAGQgEAFAAAOIAAAtg");
	this.shape_47.setTransform(97.375,7.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgFgLAAgNQAAgNAFgKQAGgKAKgGQAKgFALAAQANAAAKAFQAJAFAGAKQAFAKAAANIgBAIIhCAAQABAKAHAHQAHAGAJAAQAPAAAGgMIAUAAQgEAMgLAHQgKAIgQAAQgLAAgKgFgAAYgHQAAgKgHgGQgHgGgKAAQgJAAgGAGQgHAGgBAKIAvAAIAAAAg");
	this.shape_48.setTransform(89.875,7.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAsIghhXIATAAIAYBHIAZhHIATAAIghBXg");
	this.shape_49.setTransform(81.375,7.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHAAgJQAAgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_50.setTransform(71.7,7.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbA3IAAhtIASAAIAABfIAlAAIAAAOg");
	this.shape_51.setTransform(63.725,6.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAtIAAhXIASAAIAAANQADgHAGgEQAHgDAJAAIAAASIgEAAQgLAAgGAGQgEAFAAAOIAAAtg");
	this.shape_52.setTransform(53.475,7.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgIA9IAAhWIARAAIAABWgAgHgoQgDgEgBgFQABgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_53.setTransform(48.6,5.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYAnQgJgFgFgLQgGgKAAgNQAAgNAGgKQAFgKAJgGQAKgFALAAQAJAAAJAEQAHAEAEAGIAAgNIATAAIAABXIgTAAIAAgNQgEAGgIAEQgIAEgJAAQgMAAgJgGgAgMgZQgGADgDAHQgFAGAAAJQAAAJAFAGQADAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgGQADgHAAgJQAAgIgDgHQgEgHgGgDQgGgEgHAAQgGAAgGAEg");
	this.shape_54.setTransform(42,7.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOA4QgHgEgFgGIAAAMIgSAAIAAh1IASAAIAAAsQAFgHAHgEQAIgEAJAAQAMAAAKAGQAJAFAFALQAGAJAAANQAAANgGALQgFAKgJAGQgKAGgMAAQgJAAgIgEgAgNgLQgFAEgEAHQgEAFAAAJQAAAJAEAHQAEAHAFADQAHAEAGAAQAGAAAHgEQAGgDADgHQAFgHAAgJQAAgJgFgGQgDgGgGgEQgHgDgGAAQgGAAgHADg");
	this.shape_55.setTransform(32.25,6.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAfA3IgIgWIgtAAIgIAWIgTAAIAnhtIAVAAIAnBtgAASASIgSgzIgRAzIAjAAg");
	this.shape_56.setTransform(21.5,6.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F1, new cjs.Rectangle(-8.2,-1.2,140.5,129.39999999999998), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AANAgIgNgpIgBAAIgMApIgNAAIgRg0IgDgFIgFgBIAAgFIAgAAIAAAFIgEAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIALAkIAMgtIAMAAIAOAtIABAAIAJgkQABgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgGgBIAAgFIAaAAIAAAFQgEAAgCABQgCACgCAEQgFAQgLAjg");
	this.shape.setTransform(88.1,13.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAAQAAggAhAAQAgAAAAAgQAAAhghAAQggAAAAghgAgNAAQAAAcANAAQAOAAAAgcQAAgbgOAAQgNAAAAAbg");
	this.shape_1.setTransform(79.15,13.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAtIgwhJIgBAAIAAApIABAUQABAFADABIAJABIAAAFIggAAIAAgFIAIgBQACgCAAgEIABgUIAAgtQAAgEgBgCQgCgBgHAAIAAgFIAdAAIAqA/IABAAIAAggIgBgTQgBgFgCgBIgJgBIAAgFIAfAAIAAAFIgIABQgCABgBAFIAAATIAAA6g");
	this.shape_2.setTransform(70.35,12.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAbIgBgTIAEAAQAGAUANAAQADAAADgDQADgCAAgEQAAgHgNgFQgKgEgFgDQgEgFAAgHQAAgKAHgFQAHgFALAAQALAAAHAEIAAARIgFAAQgBgHgEgEQgEgFgFAAQgDAAgDADQgCACAAADQAAAHAMAFQALAEAEADQAFAFgBAHQAAAKgGAGQgIAFgLAAQgPAAgGgGg");
	this.shape_3.setTransform(57.7,13.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAiQgEgIAAgMIAAgvQAAgEgCgCQgBgBgHAAIAAgFIAoAAIAAAFQgHAAgCABQgCACAAAEIAAAwQAAAZARAAQASAAAAgZIAAgwQAAgEgBgCQgCgBgHAAIAAgFIAnAAIAAAFQgHAAgBABQgCACAAAEIAAAvQAAALgEAHQgIAOgZAAQgYAAgIgMg");
	this.shape_4.setTransform(49.825,12.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAlQgFgEAAgIIAAgqIgIAAIAAgGIAJAAIAKgRIAGAAIAAARIAOAAIAAAGIgOAAIAAAlQAAAMAIAAIAGgCIACAEQgLAHgHAAQgFAAgFgEg");
	this.shape_5.setTransform(39.575,12.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAZQgJgIAAgQQAAgPAJgJQAIgJAOAAQALAAAGADQAIAEAAAGQAAAEgDACQgEACgDAAQgEAAgCgEQgDgMgHAAQgDAAgEAGQgEAHAAANQAAAMAFAHQAEAGAIAAQALAAAGgMIAEACQgGATgWAAQgNAAgHgIg");
	this.shape_6.setTransform(33.7,13.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAaIgHAFQgGACgFAAQgKAAgEgFQgFgFgBgIQAAgMAOgEQAUgGADgDIAAgGQAAgLgHAAQgIAAgEANQgCAFgDAAQgEAAgCgCQgEgCAAgEQgBgGAIgEQAIgFANAAQAXAAAAASIAAAdQABAIAEACIAFAAIABAFQgIADgJAAQgIAAgCgHgAgHABQgGAEAAAIQAAAFADADQADADAEAAQAIAAAAgKIAAgSg");
	this.shape_7.setTransform(26.5,13.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAlQgFgEAAgIIAAgqIgIAAIAAgGIAJAAIAKgRIAGAAIAAARIAOAAIAAAGIgOAAIAAAlQAAAMAIAAIAGgCIACAEQgLAHgHAAQgFAAgFgEg");
	this.shape_8.setTransform(21.275,12.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAEAgIAAgEIAGgBQACgBAAgEIAAggQAAgNgLAAQgHAAgEAIQgBACAAAFIAAAdQAAAEACACIAFABIAAAEIgiAAIAAgEIAIgBQABgCAAgEIAAglQAAgHgDAAIgFAAIAAgFIAYgDIACAIIALgGQAFgCAFAAQAUAAAAATIAAAhQAAAEABACIAIABIAAAEg");
	this.shape_9.setTransform(15.425,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAAQAAggAgAAQAhAAAAAgQAAAhghAAQggAAAAghgAgNAAQAAAcANAAQAOAAAAgcQAAgbgOAAQgNAAAAAbg");
	this.shape_10.setTransform(7.45,13.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnABQAAgUAMgNQAMgOAZAAQASAAAKAGIAAAWIgFAAQgDgKgEgFQgHgHgKAAQgPAAgGAPQgFALAAAOQAAAPAFALQAHAQAPAAQAKAAAGgHQAFgGAEgMIAFAAIgCAYQgKAGgUAAQgvAAAAgug");
	this.shape_11.setTransform(-1.775,12.325);

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


(lib.aa = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.TICK();
	this.instance.setTransform(-75,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-79.5,150,159);


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
	this.shape.graphics.f("#170648").s().p("AofSqIhPgSIAAkEIBsAZIA7AFQBPAAAlgaIA/hBIA5iBIBIiuIp17VIFEAAIHGVnIHL1nIE8AAIkMLqIkFLJQj3KLhlCOQhlCPj4AAg");
	this.shape.setTransform(1742.775,159.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_1.setTransform(1616.475,122.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AonKdQjbjoAAmgQAAmYDdkAQDcj/FkAAQCzAACqBVQCoBUBZCIQBUCAAdCsQAZB1AAEAIzTAAQAIECBxCeQByCdDtAAQDeAACEiUQBLhXAehwIEZAAQgMBdg9B0QhAByhOBJQiAB/i/AtQhnAZh/AAQk8AAjbjmgAHeiSQgSi5g/hwQh0jOkPAAQjDAAiFCPQiECNgHDbIOnAAIAAAAg");
	this.shape_2.setTransform(1461.075,125.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AieNSIpy6jIFLAAIHFVnIHZ1nIE4AAIqBajg");
	this.shape_3.setTransform(1290.65,124.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AqML1QiXiRAAjYQAAjrCUiCQCUiBDvgeIHHg5QBigNAhhGQATgmAAhHQAAiUhnhBQhphCi/AAQjfAAheB4Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7BzQC6ByAADxIAAPSQAAAtATAbQASAbA6AAIArgCIAzgIIAADTIhmAYIhfAEQiTAAhDhoQgjg4gOhmQhYBzijBUQiiBUjFAAQjtAAiViOgADDAjIiiAfIirAWQibAVhOAtQiFBKAACiQAAB7BaBIQBbBIB7AAQCXAACMhGQDuh0AAkIIAAjkQg0AhhSAXg");
	this.shape_4.setTransform(1122.875,125.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("ArmSOMAAAgkaIE8AAMAAAAgEISRAAIAAEWg");
	this.shape_5.setTransform(947.825,92.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("AmcNlIAA6jIEPAAIAAEmQAhhWCBh6QCDh8CpAAQAPAAAMACIBBAGIAAEuIgugHIgvgBQjYAAhzCLQh0CKAAC1IAAPRg");
	this.shape_6.setTransform(713.425,122.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("AiQSOIAA6bIEhAAIAAabgAiQtJIAAlDIEhAAIAAFDg");
	this.shape_7.setTransform(613.625,92.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("AqML1QiXiRAAjYQAAjrCUiCQCUiBDvgeIHHg5QBigNAhhGQATgmAAhHQAAiUhnhBQhphCi/AAQjfAAheB4Qg0BEgQCEIkLAAQAIk8DDh6QDFh8EDAAQEpAAC7BzQC6ByAADxIAAPSQAAAtATAbQASAbA6AAIArgCIAzgIIAADTIhmAYIhfAEQiTAAhDhoQgjg4gOhmQhYBzijBUQiiBUjFAAQjtAAiViOgADDAjIiiAfIirAWQibAVhOAtQiFBKAACiQAAB7BaBIQBbBIB7AAQCXAACMhGQDuh0AAkIIAAjkQg0AhhSAXg");
	this.shape_8.setTransform(490.825,125.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("Ak8RPQhQg3hah7IAADaIkIAAMAAAgkiIEWAAIAANNQBeh6CDhAQCDhBCXABQE/AADGDaQDHDaAAGoQAAGTjEELQjEEKlcABQjAAAiHhegAlUjJQiUCRAAFKQAADwA9CWQBwEYE2AAQDoAAByi4QB0i4AAkuQAAkLh0iwQhyiwjhAAQjDAAiTCQg");
	this.shape_9.setTransform(310.375,95.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AK2SOIjsq7IuZAAIj8K7IlEAAMANtgkaIFkAAMANOAkagAFkDSIliwFIl3QFILZAAg");
	this.shape_10.setTransform(108.775,92.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-2,-42.7,1828.3,329), null);


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
	this.shape.setTransform(982.2,39.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170648").s().p("ACbFOIAAmbQAAg8gSgkQgeg9hMAAQgmAAgZAIQgtANgjAoQgbAhgIAjQgJAiAABAIAAFVIhuAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA+AAQCMAAAwBhQAbA1AABjIAAGig");
	this.shape_1.setTransform(930.8,47.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#170648").s().p("AjUEBQhThZAAigQgBicBVhiQBVhjCJAAQBEAABCAhQBBAhAiA0QAgAxALBCQAKAtAABiInbAAQADBjAsA9QArA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgwAAQh6AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_2.setTransform(860.6,48.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_3.setTransform(774.525,47.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#170648").s().p("AjUEBQhThZAAigQAAicBUhiQBVhjCIAAQBFAABCAhQBAAhAjA0QAgAxALBCQAKAtAABiInbAAQADBjArA9QAsA8BbAAQBVAAAzg4QAdgiAMgrIBsAAQgFAkgXAsQgZAsgeAcQgyAxhIARQgoAKgxAAQh5AAhVhZgAC3g3QgGhIgYgqQgthQhpAAQhJAAg0A3QgzA2gDBVIFnAAIAAAAg");
	this.shape_4.setTransform(687,48.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170648").s().p("Ai4GoQhIgwgIhkIBvAAQAIArAYAZQAlAkBQAAQB8AAAnhZQAXg1gCiGQghAyguAYQguAYhLABQhqgBhPhKQhQhMAAitQAAikBQhdQBQhcBxAAQBMAAA5AmQAfAVAgApIAAhSIBmAAIAAJRQAAB9glBIQhECFi8AAQhpAAhIgvgAiVkIQgXA6AABeQAABvAtA5QAtA5BLAAQB1gBAwhqQAag8AAhQQAAh6gyg6Qgxg6hOAAQhygBgqBtg");
	this.shape_5.setTransform(615.775,61.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_6.setTransform(549.925,48.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#170648").s().p("ACaFOIAAmbQAAg8gRgkQgeg9hMAAQgmAAgaAIQgsANgjAoQgbAhgIAjQgJAiABBAIAAFVIhvAAIAAqMIBpAAIAABcQAvg5AzgZQA0gZA/AAQCKAAAyBhQAbA1AABjIAAGig");
	this.shape_7.setTransform(479.2,47.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#170648").s().p("Aj6EjQg6g4AAhTQAAhaA5gyQA4gxBcgMICvgWQAmgFAMgaQAIgPAAgcQAAg4gogZQgogahJAAQhWAAgkAuQgUAbgGAyIhnAAQADh5BLgvQBMgwBjAAQByAABIAsQBHAsAABdIAAF3QAAASAIAKQAGAKAXAAIARAAIATgDIAABRIgnAJIglACQg4AAgagoQgNgWgGgnQghAsg/AgQg+AhhMAAQhbAAg5g3gABLANIg/AMIhAAJQg8AIgeARQgzAdAAA+QAAAvAiAcQAjAbAwAAQA6AAA1gbQBcgsAAhlIAAhXQgVAMgfAIg");
	this.shape_8.setTransform(410.925,48.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#170648").s().p("AFGFOIAAnFQAAhBghgZQghgYgvAAQhAAAgvArQgvAsAABlIAAF7IhuAAIAAmpQAAhDgQgeQgZguhFAAQg+AAgzAwQgzAwAAB/IAAFZIhuAAIAAqMIBtAAIAABcQAngwAggWQA2glBFAAQBOAAAwAmQAaAWAWArQAkg0AygZQAxgaA+AAQCEAAAvBfQAaAzAABXIAAGyg");
	this.shape_9.setTransform(322.925,47.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#170648").s().p("AgjGAQgcgoABg+IAAmwIhZAAIAAhaIBZAAIAAi2IBtAAIAAC2IBpAAIAABaIhpAAIAAGpQAAAjAYALQAMAHAeAAIARgBIAWgCIAABYIgnAIIgtACQhLAAgcgng");
	this.shape_10.setTransform(218.1,39.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#170648").s().p("AjPEaQg9hCgEhiIBqAAQAEA3AYAdQApA2BoAAQA/AAAvgbQAvgbABg3QAAgrgngVQgYgOhGgSIhZgVQhVgWgogYQhIgsAAhPQAAhdBEg6QBDg5BzAAQCVAABCBXQApA3gBBAIhnAAQgEgmgXgeQgngrhfAAQhAAAggAXQghAZAAAmQAAAqArAaQAYAPAxAMIBJASQB5AcApAbQBAApAABbQAABXhDA/QhDBAiJAAQiSAAg/hCg");
	this.shape_11.setTransform(170.35,48.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#170648").s().p("AjTEBQhUhZAAigQAAicBUhiQBVhjCJAAQBFAABBAhQBAAhAjA0QAgAxALBCQAKAtgBBiInaAAQADBjAsA9QAsA8BaAAQBWAAAyg4QAdgiALgrIBsAAQgEAkgYAsQgYAsgeAcQgyAxhIARQgpAKgvAAQh6AAhUhZgAC4g3QgHhIgZgqQgshQhoAAQhLAAgyA3Qg0A2gCBVIFnAAIAAAAg");
	this.shape_12.setTransform(103.5,48.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#170648").s().p("AkgHRIAAuOIBsAAIAABWQAhgsAngYQA4glBKAAQBvAABOBVQBOBVAACeQAADVhxBcQhHA5heAAQhJABgzghQgdgSgkgsIAAFNgAigj9QgWA9AABdQAABMAWA1QArBkByABQBMgBAzg/QA0hBAAiAQAAhOgXg4QgrhshxAAQhzABgqByg");
	this.shape_13.setTransform(36.025,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-2,-17.7,1004.5,129), null);


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

	// 211604_v4_Abair+Logo+Vector+File.svg
	this.instance = new lib.text1();
	this.instance.setTransform(110.8,51.55,0.0822,0.0822,0,0,0,473.6,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170648").s().p("Eh8YABnIAAjOMD4xAAAIAADOg");
	this.shape.setTransform(110.5997,44.7286,0.0822,0.0822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008000").s().p("AwuIkMAgzgSkIAqBdMggzASkg");
	this.shape_1.setTransform(38.7403,28.4811,0.0822,0.0822);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008000").s().p("AkGSxQh/gmgMl7QgMl7BtnxQBtnxCnlFQBOiZBKhLQBOhNA9ATQB/AnAMF6QAMF7htHxQhuHximFFQhOCZhKBLQg+A+g0AAQgNAAgMgEg");
	this.shape_2.setTransform(19.7644,48.339,0.0822,0.0822);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008000").s().p("AEsS+QhkhMhzihQj0lTjFoPQjFoNgjmVQgRi/Ach1QAdh4BIgXQBJgWBoBPQBkBMB0ChQDzFTDFIPQDGINAjGVQAQC/gcB1QgcB4hJAXQgQAFgSAAQg+AAhRg+g");
	this.shape_3.setTransform(30.3316,47.712,0.0822,0.0822);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008000").s().p("AGySLQhog+iAiQQkOkwj7nvQj7nuhTmNQgoi7ALh3QAMh7BBghQBBggBrBBQBoA+CACQQEOEvD7HwQD7HuBTGNQAoC7gLB3QgMB8hBAgQgWAKgaAAQg1AAhHgrg");
	this.shape_4.setTransform(20.1776,23.3552,0.0822,0.0822);

	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(114.6,30.5,0.0822,0.0822,0,0,0,849.3,159.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008000").s().p("AsVQcMAXVghyIBWA7MgXVAhyg");
	this.shape_5.setTransform(34.6774,22.3395,0.0822,0.0822);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008000").s().p("Ag+FKQoQg9ljiMQinhChWhGQhYhJANhDQAMhDBwgyQBsgwC5gZQGIg1IPA9QIQA9FjCMQCnBCBWBFQBYBJgNBDQgaCJmHA2Qi2AZjUAAQjzAAkaghg");
	this.shape_6.setTransform(11.1965,33.6467,0.0822,0.0822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0.7,13.2,194.3,45.099999999999994), null);


(lib.a = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.aa("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2437},6).to({rotation:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-83.6,158.7,167.3);


(lib.TICK_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.a("synched",0);
	this.instance.setTransform(507.6,-112.15,0.32,0.32,-98.013,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.1,scaleX:0.2591,scaleY:0.2591,rotation:-98.0113,x:-77.1,y:-421.55,startPosition:9},96,cjs.Ease.get(-1)).to({_off:true},1).wait(18));

	// Layer_2
	this.instance_1 = new lib.a("synched",0);
	this.instance_1.setTransform(535.1,-2.15,0.32,0.32,-98.013,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({scaleX:0.2672,scaleY:0.2672,rotation:-98.0117,x:3.1,y:-248.65,startPosition:6},78).to({_off:true},1).wait(13));

	// Layer_4
	this.instance_2 = new lib.a("synched",0);
	this.instance_2.setTransform(-79.5,-393.6,0.3999,0.3999,67.8389,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.3992,scaleY:0.3992,rotation:67.0077,x:-69.2293,y:-392.2733,startPosition:1},0).wait(1).to({scaleX:0.3985,scaleY:0.3985,rotation:66.1838,x:-59.0003,y:-390.9089,startPosition:2},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,rotation:65.3673,x:-48.8628,y:-389.5566,startPosition:3},0).wait(1).to({scaleX:0.3971,scaleY:0.3971,rotation:64.5582,x:-38.8171,y:-388.2166,startPosition:4},0).wait(1).to({scaleX:0.3964,scaleY:0.3964,rotation:63.7565,x:-28.863,y:-386.8888,startPosition:5},0).wait(1).to({scaleX:0.3958,scaleY:0.3958,rotation:62.9621,x:-19.0005,y:-385.5732,startPosition:6},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,rotation:62.1752,x:-9.2297,y:-384.2698,startPosition:7},0).wait(1).to({scaleX:0.3944,scaleY:0.3944,rotation:61.3956,x:0.4495,y:-382.9787,startPosition:8},0).wait(1).to({scaleX:0.3938,scaleY:0.3938,rotation:60.6234,x:10.037,y:-381.6998,startPosition:9},0).wait(1).to({scaleX:0.3931,scaleY:0.3931,rotation:59.8586,x:19.5329,y:-380.4331,startPosition:10},0).wait(1).to({scaleX:0.3925,scaleY:0.3925,rotation:59.1011,x:28.9371,y:-379.1786,startPosition:11},0).wait(1).to({scaleX:0.3919,scaleY:0.3919,rotation:58.3511,x:38.2497,y:-377.9363,startPosition:0},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:57.6084,x:47.4707,y:-376.7063,startPosition:1},0).wait(1).to({scaleX:0.3906,scaleY:0.3906,rotation:56.8731,x:56.6,y:-375.4885,startPosition:2},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:56.1452,x:65.6376,y:-374.2829,startPosition:3},0).wait(1).to({scaleX:0.3894,scaleY:0.3894,rotation:55.4247,x:74.5836,y:-373.0895,startPosition:4},0).wait(1).to({scaleX:0.3888,scaleY:0.3888,rotation:54.7116,x:83.4379,y:-371.9084,startPosition:5},0).wait(1).to({scaleX:0.3882,scaleY:0.3882,rotation:54.0058,x:92.2006,y:-370.7395,startPosition:6},0).wait(1).to({scaleX:0.3876,scaleY:0.3876,rotation:53.3075,x:100.8717,y:-369.5828,startPosition:7},0).wait(1).to({scaleX:0.387,scaleY:0.387,rotation:52.6165,x:109.4511,y:-368.4383,startPosition:8},0).wait(1).to({scaleX:0.3864,scaleY:0.3864,rotation:51.9329,x:117.9388,y:-367.306,startPosition:9},0).wait(1).to({scaleX:0.3858,scaleY:0.3858,rotation:51.2566,x:126.3349,y:-366.186,startPosition:10},0).wait(1).to({scaleX:0.3853,scaleY:0.3853,rotation:50.5878,x:134.6394,y:-365.0782,startPosition:11},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:49.9263,x:142.8522,y:-363.9826,startPosition:0},0).wait(1).to({scaleX:0.3842,scaleY:0.3842,rotation:49.2723,x:150.9733,y:-362.8993,startPosition:1},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:48.6256,x:159.0028,y:-361.8282,startPosition:2},0).wait(1).to({scaleX:0.3831,scaleY:0.3831,rotation:47.9862,x:166.9407,y:-360.7693,startPosition:3},0).wait(1).to({scaleX:0.3825,scaleY:0.3825,rotation:47.3543,x:174.7869,y:-359.7226,startPosition:4},0).wait(1).to({scaleX:0.382,scaleY:0.382,rotation:46.7298,x:182.5414,y:-358.6881,startPosition:5},0).wait(1).to({scaleX:0.3815,scaleY:0.3815,rotation:46.1126,x:190.2043,y:-357.6659,startPosition:6},0).wait(1).to({scaleX:0.3809,scaleY:0.3809,rotation:45.5028,x:197.7755,y:-356.6559,startPosition:7},0).wait(1).to({scaleX:0.3804,scaleY:0.3804,rotation:44.9004,x:205.2551,y:-355.6581,startPosition:8},0).wait(1).to({scaleX:0.3799,scaleY:0.3799,rotation:44.3054,x:212.6431,y:-354.6726,startPosition:9},0).wait(1).to({scaleX:0.3794,scaleY:0.3794,rotation:43.7177,x:219.9393,y:-353.6992,startPosition:10},0).wait(1).to({scaleX:0.3789,scaleY:0.3789,rotation:43.1375,x:227.144,y:-352.7381,startPosition:11},0).wait(1).to({scaleX:0.3785,scaleY:0.3785,rotation:42.5646,x:234.2569,y:-351.7893,startPosition:0},0).wait(1).to({scaleX:0.378,scaleY:0.378,rotation:41.9991,x:241.2783,y:-350.8526,startPosition:1},0).wait(1).to({scaleX:0.3775,scaleY:0.3775,rotation:41.441,x:248.2079,y:-349.9282,startPosition:2},0).wait(1).to({scaleX:0.377,scaleY:0.377,rotation:40.8903,x:255.0459,y:-349.016,startPosition:3},0).wait(1).to({scaleX:0.3766,scaleY:0.3766,rotation:40.3469,x:261.7923,y:-348.1161,startPosition:4},0).wait(1).to({scaleX:0.3761,scaleY:0.3761,rotation:39.811,x:268.447,y:-347.2283,startPosition:5},0).wait(1).to({scaleX:0.3757,scaleY:0.3757,rotation:39.2824,x:275.0101,y:-346.3528,startPosition:6},0).wait(1).to({scaleX:0.3752,scaleY:0.3752,rotation:38.7612,x:281.4814,y:-345.4895,startPosition:7},0).wait(1).to({scaleX:0.3748,scaleY:0.3748,rotation:38.2474,x:287.8612,y:-344.6385,startPosition:8},0).wait(1).to({scaleX:0.3744,scaleY:0.3744,rotation:37.7409,x:294.1493,y:-343.7996,startPosition:9},0).wait(1).to({scaleX:0.3739,scaleY:0.3739,rotation:37.2419,x:300.3457,y:-342.973,startPosition:10},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,rotation:36.7502,x:306.4505,y:-342.1586,startPosition:11},0).wait(1).to({scaleX:0.3731,scaleY:0.3731,rotation:36.2659,x:312.4636,y:-341.3565,startPosition:0},0).wait(1).to({scaleX:0.3727,scaleY:0.3727,rotation:35.789,x:318.3851,y:-340.5666,startPosition:1},0).wait(1).to({scaleX:0.3723,scaleY:0.3723,rotation:35.3195,x:324.2149,y:-339.7889,startPosition:2},0).wait(1).to({scaleX:0.3719,scaleY:0.3719,rotation:34.8573,x:329.953,y:-339.0234,startPosition:3},0).wait(1).to({scaleX:0.3715,scaleY:0.3715,rotation:34.4026,x:335.5995,y:-338.2702,startPosition:4},0).wait(1).to({scaleX:0.3712,scaleY:0.3712,rotation:33.9552,x:341.1543,y:-337.5292,startPosition:5},0).wait(1).to({scaleX:0.3708,scaleY:0.3708,rotation:33.5152,x:346.6175,y:-336.8004,startPosition:6},0).wait(1).to({scaleX:0.3704,scaleY:0.3704,rotation:33.0826,x:351.989,y:-336.0838,startPosition:7},0).wait(1).to({scaleX:0.3701,scaleY:0.3701,rotation:32.6574,x:357.2689,y:-335.3795,startPosition:8},0).wait(1).to({scaleX:0.3697,scaleY:0.3697,rotation:32.2395,x:362.4571,y:-334.6874,startPosition:9},0).wait(1).to({scaleX:0.3694,scaleY:0.3694,rotation:31.829,x:367.5537,y:-334.0075,startPosition:10},0).wait(1).to({scaleX:0.369,scaleY:0.369,rotation:31.426,x:372.5585,y:-333.3399,startPosition:11},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:31.0303,x:377.4718,y:-332.6844,startPosition:0},0).wait(1).to({scaleX:0.3683,scaleY:0.3683,rotation:30.6419,x:382.2933,y:-332.0412,startPosition:1},0).wait(1).to({scaleX:0.368,scaleY:0.368,rotation:30.261,x:387.0233,y:-331.4103,startPosition:2},0).wait(1).to({scaleX:0.3677,scaleY:0.3677,rotation:29.8874,x:391.6615,y:-330.7915,startPosition:3},0).wait(1).to({scaleX:0.3674,scaleY:0.3674,rotation:29.5213,x:396.2081,y:-330.185,startPosition:4},0).wait(1).to({scaleX:0.3671,scaleY:0.3671,rotation:29.1625,x:400.6631,y:-329.5908,startPosition:5},0).wait(1).to({scaleX:0.3668,scaleY:0.3668,rotation:28.8111,x:405.0263,y:-329.0087,startPosition:6},0).wait(1).to({scaleX:0.3665,scaleY:0.3665,rotation:28.467,x:409.298,y:-328.4389,startPosition:7},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,rotation:28.1304,x:413.4779,y:-327.8813,startPosition:8},0).wait(1).to({scaleX:0.3659,scaleY:0.3659,rotation:27.8011,x:417.5662,y:-327.3359,startPosition:9},0).wait(1).to({scaleX:0.3657,scaleY:0.3657,rotation:27.4793,x:421.5629,y:-326.8028,startPosition:10},0).wait(1).to({scaleX:0.3654,scaleY:0.3654,rotation:27.1648,x:425.4678,y:-326.2818,startPosition:11},0).wait(1).to({scaleX:0.3651,scaleY:0.3651,rotation:26.8576,x:429.2812,y:-325.7732,startPosition:0},0).wait(1).to({scaleX:0.3649,scaleY:0.3649,rotation:26.5579,x:433.0028,y:-325.2767,startPosition:1},0).wait(1).to({scaleX:0.3646,scaleY:0.3646,rotation:26.2656,x:436.6328,y:-324.7925,startPosition:2},0).wait(1).to({scaleX:0.3644,scaleY:0.3644,rotation:25.9806,x:440.1712,y:-324.3205,startPosition:3},0).wait(1).to({scaleX:0.3642,scaleY:0.3642,rotation:25.703,x:443.6179,y:-323.8607,startPosition:4},0).wait(1).to({scaleX:0.3639,scaleY:0.3639,rotation:25.4328,x:446.9729,y:-323.4131,startPosition:5},0).wait(1).to({scaleX:0.3637,scaleY:0.3637,rotation:25.17,x:450.2362,y:-322.9778,startPosition:6},0).wait(1).to({scaleX:0.3635,scaleY:0.3635,rotation:24.9145,x:453.4079,y:-322.5547,startPosition:7},0).wait(1).to({scaleX:0.3633,scaleY:0.3633,rotation:24.6665,x:456.488,y:-322.1438,startPosition:8},0).wait(1).to({scaleX:0.3631,scaleY:0.3631,rotation:24.4258,x:459.4763,y:-321.7452,startPosition:9},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,rotation:24.1925,x:462.3731,y:-321.3588,startPosition:10},0).wait(1).to({scaleX:0.3627,scaleY:0.3627,rotation:23.9666,x:465.1781,y:-320.9846,startPosition:11},0).wait(1).to({scaleX:0.3625,scaleY:0.3625,rotation:23.7481,x:467.8915,y:-320.6226,startPosition:0},0).wait(1).to({scaleX:0.3623,scaleY:0.3623,rotation:23.5369,x:470.5132,y:-320.2729,startPosition:1},0).wait(1).to({scaleX:0.3622,scaleY:0.3622,rotation:23.3332,x:473.0433,y:-319.9354,startPosition:2},0).wait(1).to({scaleX:0.362,scaleY:0.362,rotation:23.1368,x:475.4817,y:-319.6101,startPosition:3},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,rotation:22.9478,x:477.8285,y:-319.2971,startPosition:4},0).wait(1).to({scaleX:0.3617,scaleY:0.3617,rotation:22.7662,x:480.0836,y:-318.9963,startPosition:5},0).wait(1).to({scaleX:0.3615,scaleY:0.3615,rotation:22.5919,x:482.247,y:-318.7077,startPosition:6},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,rotation:22.4251,x:484.3188,y:-318.4313,startPosition:7},0).wait(1).to({scaleX:0.3612,scaleY:0.3612,rotation:22.2656,x:486.2989,y:-318.1672,startPosition:8},0).wait(1).to({scaleX:0.3611,scaleY:0.3611,rotation:22.1135,x:488.1873,y:-317.9153,startPosition:9},0).wait(1).to({scaleX:0.361,scaleY:0.361,rotation:21.9688,x:489.9841,y:-317.6756,startPosition:10},0).wait(1).to({scaleX:0.3609,scaleY:0.3609,rotation:21.8315,x:491.6892,y:-317.4481,startPosition:11},0).wait(1).to({scaleX:0.3608,scaleY:0.3608,rotation:21.7015,x:493.3027,y:-317.2329,startPosition:0},0).wait(1).to({scaleX:0.3607,scaleY:0.3607,rotation:21.579,x:494.8244,y:-317.0299,startPosition:1},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:21.4638,x:496.2546,y:-316.8391,startPosition:2},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.3605,scaleY:0.3605,rotation:21.356,x:497.65,y:-316.6,startPosition:3},0).to({_off:true},1).wait(13));

	// Layer_1
	this.instance_3 = new lib.a("synched",0);
	this.instance_3.setTransform(-60.5,-150.55,0.3999,0.3999,5.4274,0,0,0.2,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regX:0.3,scaleX:0.36,scaleY:0.36,rotation:-29.2716,x:505.15,y:-423.4,startPosition:5},78).to({_off:true},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-461,683.9,486.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:165.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},93).wait(258));

	// Sh
	this.instance_6 = new lib.Sh();
	this.instance_6.setTransform(158,596.5,1,1,0,0,0,175.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Bug
	this.instance_7 = new lib.TICK_1("synched",0);
	this.instance_7.setTransform(22.45,477.3,0.6,0.6,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},102).wait(258));

	// Img2
	this.instance_8 = new lib.Img2();
	this.instance_8.setTransform(150,105,1,1,0,0,0,150,105);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(249));

	// Img1
	this.instance_9 = new lib.Img1();
	this.instance_9.setTransform(150,105,1,1,0,0,0,150,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-0.5,410.2,679.9);


// stage content:
(lib.WFSB_217810_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
		{src:"IMG1.png", id:"IMG1"},
		{src:"IMG2.png", id:"IMG2"},
		{src:"OSHALogo.png", id:"OSHALogo"},
		{src:"TICK.png", id:"TICK"}
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