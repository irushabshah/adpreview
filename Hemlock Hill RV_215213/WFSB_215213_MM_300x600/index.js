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



(lib.AWARDS = function() {
	this.initialize(img.AWARDS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,149);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.COR = function() {
	this.initialize(img.COR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,146);


(lib.LOGO = function() {
	this.initialize(img.LOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,96);// helper functions:

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


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LOGO();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,247,96), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(227.2,144.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQArIgQgzIgPAzIgNAAIgYhVIASAAIAOA1IAPg1IAMAAIAPA1IANg1IASAAIgXBVg");
	this.shape_1.setTransform(220.2,140.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAiQgGgGgCgJIAAgTIAAgSQACgJAGgGQAKgJAMAAQAOAAAJAJQAGAGACAJIABASIgBATQgCAJgGAGQgJAJgOAAQgMAAgKgJgAgKgXQgCADgBAEIgBAQIABARQABAEACADQAFAFAFAAQAHAAAEgFQACgDABgEIABgRIgBgQQgBgEgCgDQgEgEgHAAQgFAAgFAEg");
	this.shape_2.setTransform(211.05,140.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASArIghg0IAAA0IgRAAIAAhVIAPAAIAhA0IAAg0IARAAIAABVg");
	this.shape_3.setTransform(202.975,140.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAoQgIgBgFgFQgEgFAAgHIAAgfIgHAAIAAgLIAHAAIAAgTIAPAAIAAATIALAAIAAALIgLAAIAAAeQAAAFAFAAIAGAAIAAAOg");
	this.shape_4.setTransform(193.775,141.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKArIAAgmQAAgFgDgDQgDgCgEAAQgDAAgDACQgDADAAAFIAAAmIgPAAIAAhVIAPAAIAAAdQAGgGAIAAQAKAAAFAGQAFAGABAJIAAApg");
	this.shape_5.setTransform(188.4,140.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAjIALgKQAEAFAIAAQAFAAAEgEQACgDAAgGIAAgGQgGAGgHAAQgKAAgFgFQgEgEgCgHIgBgNIABgOQACgHAEgEQAFgFAKAAQAIAAAFAGIAAgGIAQAAIAAA7QAAAMgIAHQgHAHgLAAQgPAAgJgIgAgIgXQgCADAAAIQAAAHACAEQACAEAGAAQAGAAACgEQACgEAAgHQAAgIgCgDQgCgFgGAAQgGAAgCAFg");
	this.shape_6.setTransform(181.5,143.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHArIAAg+IAPAAIAAA+gAgHgdIAAgNIAPAAIAAANg");
	this.shape_7.setTransform(176.65,140.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAgIAAg+IAPAAIAAAGQAGgGAJAAQAJAAAGAFIgMAMQgEgEgEAAQgDAAgDADQgDADAAAGIAAAlg");
	this.shape_8.setTransform(172.725,142.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAlQgEgDgBgIIgBgPIABgNQABgIAEgEQAGgFAJAAQAJgBAGAHIAAgdIAPAAIAABVIgPAAIAAgHQgGAHgIAAQgKAAgGgGgAgIAAQgCACAAAJQAAAJACAEQADAFAFAAQAGAAADgFQACgEAAgJQAAgJgCgCQgDgFgGgBQgFABgDAFg");
	this.shape_9.setTransform(163.325,141);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAaQgFgFAAgJQAAgIAFgEQAGgFAKAAIAOAAIAAgDQAAgKgKAAQgIAAgEAFIgKgJQAEgFAFgCQAFgCAIAAQAaAAAAAWIAAAoIgPAAIAAgFQgGAGgJAAQgKAAgGgGgAgKAMQAAAHAJAAQAGAAADgDQACgCAAgGIAAgDIgLAAQgJAAAAAHg");
	this.shape_10.setTransform(156.725,142.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAYQgEgEgCgGQgBgFgBgJQABgIABgFQACgGAEgEQAHgIALAAQAMAAAHAIQAFAEABAGQACAFgBAIQABAJgCAFQgBAGgFAEQgHAIgMAAQgLAAgHgIgAgGgOQgEADAAALQAAAMAEADQACADAEAAQAFAAACgDQAEgDAAgMQAAgLgEgDQgCgDgFAAQgEAAgCADg");
	this.shape_11.setTransform(150.45,142.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAgIAAg+IAPAAIAAAGQAGgGAJAAQAJAAAGAFIgMAMQgEgEgEAAQgDAAgDADQgDADAAAGIAAAlg");
	this.shape_12.setTransform(144.925,142.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAAQAAgOAHgJQAIgIALAAQANAAAHAJQAHAIAAANIAAAGIgmAAQAAAGAEAEQADAEAGAAQAIAAAGgGIAKAJQgGAFgEACQgGADgIAAQgcAAAAgggAAMgFIgBgHQgDgGgIAAQgGAAgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_13.setTransform(135.725,142.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKArIAAgmQAAgFgDgDQgDgCgEAAQgDAAgDACQgDADAAAFIAAAmIgQAAIAAhVIAQAAIAAAdQAGgGAIAAQAKAAAFAGQAGAGAAAJIAAApg");
	this.shape_14.setTransform(129.1,140.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIAoQgIgBgFgFQgEgFAAgHIAAgfIgHAAIAAgLIAHAAIAAgTIAPAAIAAATIALAAIAAALIgLAAIAAAeQAAAFAFAAIAGAAIAAAOg");
	this.shape_15.setTransform(123.475,141.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAIAoQgIgBgFgFQgEgFAAgHIAAgfIgHAAIAAgLIAHAAIAAgTIAPAAIAAATIALAAIAAALIgLAAIAAAeQAAAFAFAAIAGAAIAAAOg");
	this.shape_16.setTransform(116.525,141.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGArIAAg+IAOAAIAAA+gAgHgdIAAgNIAPAAIAAANg");
	this.shape_17.setTransform(112.85,140.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAKArIAAgmQAAgFgDgDQgDgCgEAAQgDAAgDACQgDADAAAFIAAAmIgPAAIAAhVIAPAAIAAAdQAGgGAIAAQAKAAAFAGQAFAGABAJIAAApg");
	this.shape_18.setTransform(107.85,140.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAYQgFgEgBgGQgCgFABgJQgBgIACgFQABgGAFgEQAHgIALAAQAMAAAIAIQADAEACAGQABAFABAIQgBAJgBAFQgCAGgDAEQgIAIgMAAQgLAAgHgIgAgGgOQgEADAAALQAAAMAEADQADADADAAQAEAAAEgDQADgDAAgMQAAgLgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_19.setTransform(98.4,142.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAIAoQgIgBgFgFQgEgFAAgHIAAgfIgHAAIAAgLIAHAAIAAgTIAPAAIAAATIALAAIAAALIgLAAIAAAeQAAAFAFAAIAGAAIAAAOg");
	this.shape_20.setTransform(92.975,141.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVArIAAgOIAEAAIAFgBIACgFIADgIIgVg5IAQAAIAMAnIANgnIAQAAIgbBIQgCAFgBADQgFAFgJAAg");
	this.shape_21.setTransform(85.275,143.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAlQgEgDgBgIIgBgPIABgNQABgIAEgEQAGgFAJAAQAJgBAGAHIAAgdIAPAAIAABVIgPAAIAAgHQgGAHgIAAQgKAAgGgGgAgIAAQgCACAAAJQAAAJACAEQADAFAFAAQAGAAADgFQACgEAAgJQAAgJgCgCQgDgFgGgBQgFABgDAFg");
	this.shape_22.setTransform(78.825,141);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAaQgFgFAAgJQAAgIAFgEQAGgFAKAAIAOAAIAAgDQAAgKgKAAQgIAAgEAFIgKgJQAEgFAFgCQAFgCAIAAQAaAAAAAWIAAAoIgPAAIAAgFQgGAGgJAAQgKAAgGgGgAgKAMQAAAHAJAAQAGAAADgDQACgCAAgGIAAgDIgLAAQgJAAAAAHg");
	this.shape_23.setTransform(72.225,142.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaAAQAAgOAHgJQAIgIALAAQANAAAHAJQAHAIAAANIAAAGIgmAAQAAAGAEAEQADAEAGAAQAIAAAGgGIAKAJQgGAFgEACQgGADgIAAQgcAAAAgggAAMgFIgBgHQgDgGgIAAQgGAAgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_24.setTransform(65.925,142.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAgIAAg+IAPAAIAAAGQAGgGAJAAQAJAAAGAFIgMAMQgEgEgEAAQgDAAgDADQgDADAAAGIAAAlg");
	this.shape_25.setTransform(60.375,142.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAeQgHgCgGgFIALgKQAFAGAKAAQALAAAAgHQAAgFgGgBIgJgBQgSgBAAgPQAAgJAHgGQAHgFAJAAQAQAAAIAHIgKAKQgFgEgJAAQgIAAAAAGQAAAFAGAAIAJABQATACAAAQQAAAKgIAFQgHAFgMAAQgIAAgFgCg");
	this.shape_26.setTransform(51.375,142.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFArIgchVIARAAIAQA3IARg3IARAAIgcBVg");
	this.shape_27.setTransform(45,140.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AANArIgQgiIgMAAIAAAiIgQAAIAAhVIAgAAQANAAAIAIQAHAHAAALQAAAJgFAGQgEAEgHADIATAlgAgPgEIAPAAQAGAAADgDQADgEAAgFQAAgFgDgDQgDgDgGAAIgPAAg");
	this.shape_28.setTransform(37.925,140.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJArIAAgwIgHAAIAAgLIAHAAIAAgIQAAgIAEgFQAFgFAIAAIAJAAIAAANIgHAAQgEAAAAAGIAAAHIALAAIAAALIgLAAIAAAwg");
	this.shape_29.setTransform(28.95,140.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAYQgEgEgCgGQgCgFABgJQgBgIACgFQACgGAEgEQAHgIALAAQAMAAAIAIQADAEACAGQACAFAAAIQAAAJgCAFQgCAGgDAEQgIAIgMAAQgLAAgHgIgAgGgOQgEADAAALQAAAMAEADQADADADAAQAFAAADgDQADgDAAgMQAAgLgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_30.setTransform(23.6,142.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNAeQgHgCgGgFIALgKQAFAGAKAAQALAAAAgHQAAgFgGgBIgJgBQgSgBAAgPQAAgJAHgGQAHgFAJAAQAQAAAIAHIgKAKQgFgEgJAAQgIAAAAAGQAAAFAGAAIAJABQATACAAAQQAAAKgIAFQgHAFgMAAQgIAAgFgCg");
	this.shape_31.setTransform(223.675,127.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAmQgEgEgBgIIgBgPIABgNQABgIAEgEQAGgGAJAAQAJABAGAFIAAgcIAPAAIAABUIgPAAIAAgFQgGAGgIAAQgKAAgGgFgAgIAAQgCACAAAJQAAAJACAEQADAFAFAAQAGAAADgFQACgEAAgJQAAgIgCgDQgDgGgGABQgFgBgDAGg");
	this.shape_32.setTransform(217.275,126.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAAQAAgOAHgJQAIgIALAAQANAAAHAJQAHAIAAANIAAAGIgmAAQAAAGAEAEQADAEAGAAQAIAAAGgGIAKAJQgGAFgEACQgGADgIAAQgcAAAAgggAAMgFIgBgHQgDgGgIAAQgGAAgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_33.setTransform(210.775,127.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAPAAIAAAGQAGgHAJAAQAJAAAGAGIgMAMQgEgDgEgBQgDABgDACQgDADAAAGIAAAkg");
	this.shape_34.setTransform(205.225,127.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAmQgEgEgBgIIgBgPIABgNQABgIAEgEQAGgGAJAAQAJABAGAFIAAgcIAPAAIAABUIgPAAIAAgFQgGAGgIAAQgKAAgGgFgAgIAAQgCACAAAJQAAAJACAEQADAFAFAAQAGAAADgFQACgEAAgJQAAgIgCgDQgDgGgGABQgFgBgDAGg");
	this.shape_35.setTransform(198.575,126.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAKAfIAAglQAAgFgDgDQgDgCgEgBQgDABgDACQgDADAAAFIAAAlIgQAAIAAg9IAPAAIAAAFQAGgFAJgBQAJAAAGAGQAGAGAAAMIAAAmg");
	this.shape_36.setTransform(191.975,127.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTAaQgGgGAAgMIAAgmIAPAAIAAAkQAAAGAEADQADACADAAQAEAAADgCQADgDABgGIAAgkIAPAAIAAA9IgPAAIAAgGQgHAHgIgBQgJAAgGgFg");
	this.shape_37.setTransform(185.05,127.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAKArIAAgmQAAgFgDgDQgDgCgEAAQgDAAgDACQgDADAAAFIAAAmIgPAAIAAhVIAPAAIAAAdQAGgGAIAAQAKAAAGAGQAEAGAAAJIAAApg");
	this.shape_38.setTransform(178.3,126.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgaAAQAAgOAHgJQAIgIALAAQANAAAHAJQAHAIAAANIAAAGIgmAAQAAAGAEAEQADAEAGAAQAIAAAGgGIAKAJQgGAFgEACQgGADgIAAQgcAAAAgggAAMgFIgBgHQgDgGgIAAQgGAAgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_39.setTransform(168.825,127.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAfIgXg9IARAAIALAlIANglIAQAAIgXA9g");
	this.shape_40.setTransform(162.6,127.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAaQgFgFAAgJQAAgIAFgEQAGgFAKAAIAOAAIAAgDQAAgKgKAAQgIAAgEAFIgKgJQAEgFAFgCQAFgCAIAAQAaAAAAAWIAAAoIgPAAIAAgFQgGAGgJAAQgKAAgGgGgAgKAMQAAAHAJAAQAGAAADgDQACgCAAgGIAAgDIgLAAQgJAAAAAHg");
	this.shape_41.setTransform(156.275,127.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAKArIAAgmQAAgFgDgDQgDgCgEAAQgEAAgCACQgDADAAAFIAAAmIgQAAIAAhVIAQAAIAAAdQAGgGAIAAQAKAAAFAGQAGAGAAAJIAAApg");
	this.shape_42.setTransform(149.9,126.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaAAQAAgOAHgJQAIgIALAAQANAAAHAJQAHAIAAANIAAAGIgmAAQAAAGAEAEQADAEAGAAQAIAAAGgGIAKAJQgGAFgEACQgGADgIAAQgcAAAAgggAAMgFIgBgHQgDgGgIAAQgGAAgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_43.setTransform(140.425,127.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AANAfIgNgmIgMAmIgNAAIgTg9IARAAIAKAlIAMglIAKAAIAOAlIAJglIARAAIgTA9g");
	this.shape_44.setTransform(132.6,127.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgIgRIARAAIAAAWIgRAOg");
	this.shape_45.setTransform(123.675,131.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFArIgchVIARAAIAQA3IARg3IASAAIgdBVg");
	this.shape_46.setTransform(118.55,126.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANArIgQgiIgMAAIAAAiIgQAAIAAhVIAgAAQANAAAIAIQAHAHAAALQAAAJgFAGQgEAEgHADIATAlgAgPgEIAPAAQAGAAADgDQADgEAAgFQAAgFgDgDQgDgDgGAAIgPAAg");
	this.shape_47.setTransform(111.475,126.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAFArQgIAAgFgGQgFgFAAgHIAAhDIAPAAIAABCQAAAGAGAAIAGAAIAAANg");
	this.shape_48.setTransform(102.775,126.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAFArQgIAAgFgGQgFgFAAgHIAAhDIAPAAIAABCQAAAGAGAAIAGAAIAAANg");
	this.shape_49.setTransform(98.875,126.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGArIAAg9IAOAAIAAA9gAgHgdIAAgNIAPAAIAAANg");
	this.shape_50.setTransform(95.05,126.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAOArIAAgkIgcAAIAAAkIgQAAIAAhVIAQAAIAAAjIAcAAIAAgjIARAAIAABVg");
	this.shape_51.setTransform(89.3,126.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAJArIgOgaIgHAHIAAATIgPAAIAAhVIAPAAIAAAwIAUgZIATAAIgXAYIAYAmg");
	this.shape_52.setTransform(79.475,126.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOAZQgJgIAAgRQAAgQAJgJQAHgGAKAAQANAAAIAIIgLALQgEgFgGAAQgEAAgDAEQgEAEAAAJQAAAKAEAEQADAEAEAAQAGAAAEgFIALAKQgIAJgNAAQgKAAgHgHg");
	this.shape_53.setTransform(73,127.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSAYQgEgEgCgGQgBgFgBgJQABgIABgFQACgGAEgEQAHgIALAAQAMAAAHAIQAFAEABAGQACAFgBAIQABAJgCAFQgBAGgFAEQgHAIgMAAQgLAAgHgIgAgGgOQgEADAAALQAAAMAEADQACADAEAAQAFAAADgDQADgDAAgMQAAgLgDgDQgDgDgFAAQgEAAgCADg");
	this.shape_54.setTransform(66.75,127.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAFArQgIAAgFgGQgFgFAAgHIAAhDIAPAAIAABCQAAAGAGAAIAGAAIAAANg");
	this.shape_55.setTransform(61.775,126.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAcAfIAAglQAAgFgDgDQgCgCgFgBQgEABgDABQgEADABAGIAAAlIgPAAIAAglQAAgFgDgDQgDgCgEgBQgFABgDACQgCADAAAFIAAAlIgQAAIAAg9IAPAAIAAAFQAHgFAIgBQALAAAFAIQAIgIALAAQAKAAAFAGQAHAGAAAMIAAAmg");
	this.shape_56.setTransform(54.4,127.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgaAAQAAgOAHgJQAIgIALAAQANAAAHAJQAHAIAAANIAAAGIgmAAQAAAGAEAEQADAEAGAAQAIAAAGgGIAKAJQgGAFgEACQgGADgIAAQgcAAAAgggAAMgFIgBgHQgDgGgIAAQgGAAgDAGQgCADAAAEIAXAAIAAAAg");
	this.shape_57.setTransform(45.825,127.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAOArIAAgkIgcAAIAAAkIgQAAIAAhVIAQAAIAAAjIAcAAIAAgjIARAAIAABVg");
	this.shape_58.setTransform(38.45,126.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAIAnQgIABgFgGQgEgFAAgIIAAgeIgHAAIAAgLIAHAAIAAgSIAPAAIAAASIALAAIAAALIgLAAIAAAdQAAAHAFAAIAGAAIAAAMg");
	this.shape_59.setTransform(29.425,126.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAUArIgFgPIgdAAIgFAPIgSAAIAfhVIANAAIAfBVgAALAOIgLgeIgJAeIAUAAg");
	this.shape_60.setTransform(23.575,126.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#006649").s().p("AgTCQQgIgCgHgEQgHgEgFgGQgFgHgCgHQgBgHACgIQABgIAGgGQAFgFAHgFQAHgEAJgCQAKgCAHABQAKACAHAFQAHAFAFAGQAEAFACAIQADAHgDAIQgCAHgFAHQgFAGgHAEQgIAEgIADIgIABIgLgCgAgkAqIgBhZIgBhiIBdAFIgeC6g");
	this.shape_61.setTransform(243.3929,95.2694);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#006649").s().p("AgzCTQgIgCgHgEQgHgEgFgHQgFgGgCgIQgCgHADgHQABgJAGgFQAFgGAHgEQAHgFAJgBQAKgCAIABQAKABAHAGQAHAEAFAGQADAGACAHQACAIgCAHQgCAIgEAGQgFAHgHAEQgIAEgJACIgIABIgLgBgAhFAvIgDg/QBKgRAFgcQAFgchVAEIAJg+QA+ADAnAPQA1AUgEAmQgGAyg3AdQgNAHgTAIIgFAbg");
	this.shape_62.setTransform(228.9665,95.0194);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#006649").s().p("AhbBkQgPgSgJgbQgIgaABgcQADgzAdgpQAlgyA7AAQAzAAAiAqQATAXAHAYQAHAZgBAcQgCAxgeAqQgmAyg7AAQgzAAgigqgAghgkQgLAYgBAYQgBAMADALQAFAQAKAHQAMAKAQAAQAYAAANgTQAJgQAAgZQABgZgLgaQgMgYgTAAQgXAAgPAfg");
	this.shape_63.setTransform(208.427,95.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#006649").s().p("AhECHQgXgLgQgUIgPgXIgJgZQgCgNgBgOQAAgOABgOQADgZALgXQALgYARgVQAWgaAbgNQAbgNAfAAQAbAAAWAMQAYAKARAWIgYAWIgXAXQgYgZgfAJQgaAIgUAfQgYAhAIAmQADATANAMQAPANAbgCQAVgBAQgNQARgMAGgUIgmAGIgkAIIABgcIADgaIBGgMIBIgKQAEAMgBAOQAAANgEAQQgEAOgGANQgFAMgIALQgWAiggAQQgfARgpAAQgcAAgWgKg");
	this.shape_64.setTransform(183.4788,94.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#006649").s().p("AhbBkQgPgSgJgbQgIgaABgcQADgzAdgpQAlgyA7AAQAzAAAiAqQATAXAHAYQAHAZgBAcQgCAxgeAqQgmAyg7AAQgzAAgigqgAghgkQgLAYgBAYQgBAMADALQAFAQAKAHQAMAKAQAAQAYAAANgTQAJgQAAgZQABgZgLgaQgMgYgTAAQgXAAgPAfg");
	this.shape_65.setTransform(149.877,95.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#006649").s().p("Agsg+IggADIglAEIAFhIIDQgRIAOBHIhOAEQgFAuAQCYIhbARg");
	this.shape_66.setTransform(127.325,95.25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#006649").s().p("AhMCKIAlhWIgphPIgphQIBdgjIAKAtQAFAbALAbIAkheIBYAKQgoBLgdBCQgdBEgTA9g");
	this.shape_67.setTransform(96.875,94.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#006649").s().p("AhuCJIgCjdIgBgtQA5gJAqADQAvAEAcATQApAdAJAlQADAOgBAOQgCAegPAaQgSAegiAXQgTAOgYAKQgwAVg+ABgAgcg/QgEAmAAAbQgBAdACAaQAfgMASgXQARgWgDgYQgEgUgSgKQgNgJgVAAIgEAAg");
	this.shape_68.setTransform(74.7625,95.139);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#006649").s().p("Ah9B/QAsiAAYiAIBvgPQAVB0AzCWIhVARIgNgvIg3AFIgJAwgAgUAqIAlAAIgUhjg");
	this.shape_69.setTransform(51.55,94.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#006649").s().p("AhbBNIgBhEIgBiFIBUgJIBUgJIAFAjIAGAjIgwACIgsAFIgCAUIgBASIAjgGIAjgEIADAZIADAZIgsAHIggAFIgBAkIAvgGIAvgIIAFAkIAFAjQglABguAHIhlASg");
	this.shape_70.setTransform(30.775,94.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#006649").s().p("Ahwh+QBMgSAzAAQBIAAAKAxQAHA8hCAkQAJAOBCBIIhFA3IhRhqQAAAyAEAqIhOARQAHjJgIhGgAghhMQgDANAAANIgBAaQASgGAOgKQAYgRgDgNQgBgKgPgBIgCAAQgMAAgTAFg");
	this.shape_71.setTransform(10.8,94.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#006649").s().p("AhoBzQgXgdAJg0IAciqIBYAGIgOBCIgPBBIgDAVQgDAPAAAJQAAAfAfAAQAVAAAMgNQAMgMAAgUIgUitIBWAEIAIBdIAIBeQAEAtgpAWQgfARhEAHIgWABQgwAAgTgbg");
	this.shape_72.setTransform(182.8724,61.3863);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#006649").s().p("AhbBkQgPgSgJgbQgIgaABgcQADgzAdgpQAlgyA7AAQAzAAAiAqQATAXAHAYQAHAZgBAcQgCAxgeAqQgmAyg7AAQgzAAgigqgAghgkQgLAYgBAYQgBAMADALQAFAQAKAHQAMAKAQAAQAYAAANgTQAJgQAAgZQABgZgLgaQgMgYgTAAQgXAAgPAfg");
	this.shape_73.setTransform(159.327,61.375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#006649").s().p("AhMCKIAlhXIgphOIgphQIBdgjIAKAtQAFAcALAbIAkhgIBYALQgoBLgdBCQgdBEgTA9g");
	this.shape_74.setTransform(136.325,61.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#006649").s().p("AhbBNIgBhEIgBiFIBUgJIBUgKIAFAkIAGAjIgwACIgsAFIgCAUIgBASIAjgGIAjgEIADAZIADAaIgsAGIggAFIgBAkIAvgHIAvgHIAFAkIAFAiQglADguAGIhlARg");
	this.shape_75.setTransform(107.375,61.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#006649").s().p("Ahwh+QBMgSAzAAQBIAAAKAxQAHA8hCAkQAKAOBBBIIhFA3IhRhqQAAAyAEAqIhOARQAHjJgIhGgAghhMQgDANAAANIgBAaQASgGAOgKQAYgRgDgNQgBgKgPgBIgCAAQgMAAgTAFg");
	this.shape_76.setTransform(87.4,61.325);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#006649").s().p("Ah9B/QAsiAAYiAIBwgPQATB0A0CWIhVARIgMgvIg4AFIgJAwgAgUAqIAlAAIgUhjg");
	this.shape_77.setTransform(64.35,61.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F6A81C").s().p("ABJAhQgGgDgGgFQgGgFgDgGQgCgGAAgIQAAgGACgGQADgHAGgEQAFgGAHgCQAIgDAHAAQAJAAAHADQAHACAFAGQAFAEADAHQAEAGAAAGQAAAIgEAGQgDAGgFAFQgFAFgHADQgHACgJAAQgHAAgIgCgAgQAhQgHgDgFgFQgFgFgDgGQgDgGAAgIQAAgGADgGQADgHAFgEQAFgGAHgCQAHgDAJAAQAHAAAHADQAHACAGAGQAFAEADAHQACAGAAAGQAAAIgCAGQgDAGgFAFQgGAFgHADQgHACgHAAQgJAAgHgCgAhnAhQgIgDgFgFQgGgFgCgGQgDgGAAgIQAAgGADgGQACgHAGgEQAFgGAIgCQAHgDAHAAQAJAAAHADQAIACAEAGQAGAEACAHQAEAGAAAGQAAAIgEAGQgCAGgGAFQgEAFgIADQgHACgJAAQgHAAgHgCg");
	this.shape_78.setTransform(195.1,29.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F6A81C").s().p("Ag1BnQgRgIgNgPIgLgSIgHgTQgCgLAAgKQAAgKABgMQACgSAIgSQAJgSANgRQARgUAUgJQAVgKAYAAQAVgBARAJQASAIANARIgSARIgSASQgTgUgXAIQgUAGgQAXQgSAaAGAcQACAPAKAKQAMAKAVgCQAQgBAMgJQANgJAFgQIgeAEIgbAGIABgUIACgVIA2gJIA3gHQADAIgBAMQAAAJgCAMQgDALgFAKQgEAJgGAJQgRAagYANQgZAMgfAAQgWAAgRgIg");
	this.shape_79.setTransform(170.6542,21.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F6A81C").s().p("AhWhmIBDgKIAGAaQAKAnAKAeQAGAQAGAKIAAhwIBEgJQgOBzAIBUIg9ANIgIgKIgegrQgIgKgCgDQAAAiADAgIg8ANg");
	this.shape_80.setTransform(151.075,21.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F6A81C").s().p("AghhgIAhgEIAigFQgHA6gCAxQgBAyAEAqIgdAHIggAFg");
	this.shape_81.setTransform(137.525,21.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F6A81C").s().p("AhChgIBCgKQgJBRABBCIBEgIIAHA2Qg2ADhPARg");
	this.shape_82.setTransform(126.75,21.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F6A81C").s().p("AhChgIBCgKQgIBRAABCIBEgIIAHA2Qg2ADhPARg");
	this.shape_83.setTransform(113,21.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F6A81C").s().p("AhgBiQAihjAShiIBWgLQAQBZAnByIhCAOIgJgkIgqADIgIAlgAgPAhIAdgBIgQhMg");
	this.shape_84.setTransform(96.475,21.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F6A81C").s().p("AgaBiQgYgNgNgbQgPgcgBgfQABgeAOgZQAMgbAUgOQAYgPAaAEQAfADAfAbIgRATIgQAUQghgTgQARQgSANACAcQABAdARAOQARAQAegUIAgAkQgZAdgdAFIgMABQgTAAgUgMg");
	this.shape_85.setTransform(79.7,21.0425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F6A81C").s().p("AhABnIAUg0QAPAHAOAAIANgCQALgCAKgEQAOgGgBgHQgCgIgQAAQgMAAgTADQgVAEgLAAQgPAAgJgEQgSgHAAgQQgDgfApgqQArgrAmgDQAlgBAKAqIAEAWIgdAJIgdAIQgCgNgLAAQgOAAgMAMQgIAJADAIQADAFAOAAQAHAAAMgCQARgCANAAQAiAAAKAQQADAGABAFQAFASgPAWQgTAcgoATQgVAKgWAAQgVAAgWgIg");
	this.shape_86.setTransform(55.3523,21.0738);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F6A81C").s().p("AghhgIAhgEIAigFQgHA6gCAxQgBAyAEAqIgdAHIggAFg");
	this.shape_87.setTransform(41.925,21.025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F6A81C").s().p("AhWhgQA7gPAnAAQA3AAAIAnQAFAtgzAcQAHALAzA3Ig1AqIg+hRQAAAnACAgIg7ANQAFibgGg1gAgag7IgBAUIgBAVQANgFALgIQATgNgDgKQgBgHgLgBIgCAAQgJAAgPADg");
	this.shape_88.setTransform(174.175,-4.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F6A81C").s().p("AhGA7IgBg0IAAhmIBAgHIBBgHIAEAaIAEAbIglADIghADIgCAPIgBAOIAbgEIAbgEIACAUIADATIgjAFIgYAEIgBAbIAkgEIAlgFIADAbIAEAaQgcACgkAFIhNANg");
	this.shape_89.setTransform(157.475,-4.825);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F6A81C").s().p("Ah9BkQAghZAPhuIA+gLIARBpIAQhkIA5gFQAOBjAmBtIhAAMIgYhrIgNBlIg1AEIgPhvIgTByg");
	this.shape_90.setTransform(137.55,-4.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F6A81C").s().p("Ah9BkQAghZAPhuIA+gLIARBpIAQhkIA5gFQAOBjAmBtIhAAMIgYhrIgNBlIg1AEIgOhvIgUByg");
	this.shape_91.setTransform(113.25,-4.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F6A81C").s().p("AhQBYQgRgWAGgoIAWiDIBDAFIgKAzIgMAyIgCAQQgCAMAAAHQAAAXAXAAQARAAAJgKQAJgJAAgPIgQiGIBDAEIAGBHIAGBIQADAjgfARQgYANg0AGIgRABQglAAgPgWg");
	this.shape_92.setTransform(91.8732,-4.727);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F6A81C").s().p("AhABnIAUg0QAPAHAOAAIANgCQALgCAKgEQAOgGgBgHQgCgIgQAAQgMAAgTADQgVAEgLAAQgPAAgJgEQgSgHAAgQQgDgfApgqQArgrAmgDQAlgBAKAqIAEAWIgdAJIgdAIQgCgNgLAAQgOAAgMAMQgIAJADAIQADAFAOAAQAHAAAMgCQARgCANAAQAiAAAKAQQADAGABAFQAFASgPAWQgTAcgoATQgVAKgWAAQgVAAgWgIg");
	this.shape_93.setTransform(73.3023,-4.7762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(3,1,1).p("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");
	this.shape_94.setTransform(124.15,46.9444);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#006649").s().p("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");
	this.shape_95.setTransform(124.15,78.3194);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F6A81C").s().p("AMYDwQgHgDgFgEQgGgFgDgHQgDgGAAgHQAAgHADgHQADgHAGgEQAFgFAHgDQAHgDAIABQAIgBAIADQAHADAFAFQAFAEADAHQAEAHAAAHQAAAHgEAGQgDAHgFAFQgFAEgHADQgIADgIAAQgIAAgHgDgAK+DwQgHgDgFgEQgFgFgDgHQgDgGAAgHQAAgHADgHQADgHAFgEQAFgFAHgDQAHgDAJABQAIgBAHADQAHADAGAFQAFAEADAHQACAHAAAHQAAAHgCAGQgDAHgFAFQgGAEgHADQgHADgIAAQgJAAgHgDgAJmDwQgHgDgFgEQgGgFgCgHQgDgGAAgHQAAgHADgHQACgHAGgEQAFgFAHgDQAHgDAIABQAJgBAHADQAHADAFAFQAGAEACAHQADAHAAAHQAAAHgDAGQgCAHgGAFQgFAEgHADQgHADgJAAQgIAAgHgDgADAAZIBDgKIAGAaQAJAnALAeQAGAQAHALIAAhxIBDgJQgOB0AIBUIg9ANIgmg1QgJgKgBgDQAAAiADAgIg9ANgAGlDnQgRgIgNgPIgLgSIgHgTQgCgLAAgKQgBgKABgMQADgTAIgSQAIgSAOgRQARgUAUgJQAVgKAYAAQAWgBARAJQASAIANARIgkAjQgTgUgXAIQgVAGgQAXQgSAbAGAcQACAPAKAKQAMAKAUgCQASgBAMgJQANgJAEgQIgdAEIgcAGIADgqIBugQQADAIgBAMQAAAKgDAMQgDALgEAKQgFAJgGAJQgQAagZANQgYAMghAAQgVAAgRgIgAlrDiIAIgYQgZAegeAFQgaAEgagPQgXgOgOgbQgPgcAAgfQABgfANgYQANgbAUgOQAYgPAbADQAeADAfAbIggAnQghgTgSARQgRAOABAdQABAdARAOQATAPAegUIAgAkQAchXAQhXIBWgLQAQBZAnBzIhBAOIgKgkIgrADIgHAlgAkbChIAegBIgQhNgArmDmIATgzQAPAGAPAAIAMgBQAMgDAKgEQAOgFgBgHQgCgIgQAAQgMAAgUADQgUAEgMAAQgPAAgJgFQgRgGgBgQQgDggApgqQArgsAngCQAlgBAKApIAEAXIg5ARQgDgNgLAAQgPAAgMALQgIAJADAJQADAFAPAAQAHAAAMgCQARgCANAAQAiAAAKAQQADAHABAEQAFATgPAWQgSAcgpASQgUALgYgBQgUABgWgJgAgfAeIBBgJQgIBRAABCIBFgHIAHA2Qg2ADhPARgAioAeIBBgJQgIBRABBCIBFgHIAHA2Qg2ADhQARgABtAeIBEgJQgHA6gCAyQgBAyAEAqIg+ANgAtOAeIBEgJQgHA6gCAyQgBAyAEAqIg+ANgAATgbIg4AKIgYhrIgNBlIg2AEIgOhwIgUBzIg/gLQAghZAQhvIA9gLIASBpIAQhkIA6gFQAMBdAiBoQAchTAPhnIA9gLIASBpIAQhkIA6gFQANBjAmBuIhAAMIgYhrIgNBlIg2AEIgOhwIgUBzgAGmjjQA7gOApAAQA2AAAJAmQAEAtgzAdQAIALAzA4Ig2ApIg+hRQgBAnADAgIg8ANQAGibgHg2gAHji9IgCAUIAAAUQANgFALgHQATgNgCgLQgBgHgMgBIgDAAQgIAAgPAEgAozgbIAUg0QAPAHAOAAIANgCQAMgCAKgEQAOgGgBgHQgCgIgQAAQgMABgUADQgVADgLAAQgPABgJgFQgSgHAAgQQgDggApgpQArgsAngCQAlgBAKApIAEAXIg6ARQgCgOgLAAQgPAAgMAMQgIAJADAJQADAEAOAAQAIAAAMgBQARgCANAAQAiAAAKAQQADAGABAFQAFATgPAVQgTAcgoATQgVAKgXAAQgVAAgWgIgAmKgpQgRgWAHgpIAViDIBEAEIgZB3QgCAMAAAGQAAAYAYAAQARAAAJgKQAJgJAAgPIgPiHIBCAEIANCQQADAiggASQgYANg1AFIgRABQglAAgPgVgAEOjjICCgNIAJA1IhIAGIgCAdIA2gIIAFAoIg7AJIgBAbIBJgKIAIA2QgcACgkAFIhOANg");
	this.shape_96.setTransform(123.225,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-26.4,-18.4,299.4,168.5), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AxBUAQi+AAAAi+MAAAglBMAlBAAAQC+AAAAC+MAAAAlBg");
	this.shape.setTransform(126.075,124.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1.9,-3.9,256,256), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,233,146), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AmhADQGbAWGogj");
	this.shape.setTransform(132.8,83.5887);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939598").s().p("AgiBBQgKgLgCgVIAcAAQACATAQAAQAIAAAFgFQAGgGAAgRQAAgagTAAQgOAAgEALIgZAAIAAhWIBXAAIAAAaIg+AAIAAAhQAJgIAOAAQASAAALAKQANAOAAAaQAAAOgDAJQgDAKgHAIQgNANgVAAQgWAAgMgNg");
	this.shape_1.setTransform(170.25,84.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939598").s().p("AgeBNIAwh/IgnAAIAAAYIgbAAIAAgyIBhAAIAAAaIgxB/g");
	this.shape_2.setTransform(159.075,84.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939598").s().p("AgbBOIAfhAQgEACgHAAQgQAAgMgMQgMgMAAgUQAAgXAOgNQANgMAUAAQAVAAANAMQAOANAAAWQAAAPgNAZIggBDgAgNgtQgGAGAAAKQAAAKAGAHQAFAFAIAAQAJAAAFgFQAGgHAAgKQAAgKgGgGQgFgGgJgBQgIABgFAGg");
	this.shape_3.setTransform(147.85,84.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939598").s().p("AgOggIAdAAIAAApIgdAYg");
	this.shape_4.setTransform(139.5,92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939598").s().p("AguBOIAAgaIA4hBQAIgKAAgJQAAgJgEgFQgFgGgJAAQgSAAAAAVIgcAAQAAgVAOgMQANgMATAAQAVAAAMAMQAOALAAAVQAAALgFAIQgDAGgJAJIgqAyIA7AAIAAAag");
	this.shape_5.setTransform(131.325,84.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("AguBOIAAgaIA4hBQAIgKAAgJQAAgJgEgFQgFgGgJAAQgSAAAAAVIgcAAQAAgVAOgMQANgMATAAQAVAAAMAMQAOALAAAVQAAALgFAIQgDAGgJAJIgqAyIA7AAIAAAag");
	this.shape_6.setTransform(120.125,84.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AACBNIAAh6IgfAbIAAgfIAfgbIAcAAIAACZg");
	this.shape_7.setTransform(108.2,84.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AgIBjIAAgXQgggBgTgTIAUgUQAMAMAWABIAAgnIgHgBQgTgCgLgKQgLgLAAgTQAAgSAMgNQAMgNAVgCIAAgTIAVAAIAAATQAaACARAQIgTASQgKgJgRgBIAAAmIAIABQAUADAKAJQAMAKAAAVQAAAUgOAMQgMAMgVACIAAAYgAAKAxQAUgDAAgQQAAgIgFgFQgEgEgLgBgAgYgiQAAAHAFAEQAFAFAJABIAAgkQgTADAAAQg");
	this.shape_8.setTransform(96.575,84.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("AgPAtIAAggIAfAAIAAAggAgPgMIAAggIAfAAIAAAgg");
	this.shape_9.setTransform(83.2,87.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("Ag2BNIAAiZIA6AAQAYAAAOAPQANANAAAUQAAAVgNAMQgOAOgYAAIgcAAIAAA6gAgYgHIAbAAQAKAAAHgGQAFgFAAgKQAAgJgFgGQgHgGgKAAIgbAAg");
	this.shape_10.setTransform(73.9,84.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("AAXBNIgdg+IgVAAIAAA+IgeAAIAAiZIA7AAQAXAAAOAOQANAOAAATQAAAQgJAKQgHAJgMAFIAiBCgAgbgIIAbAAQAKAAAGgGQAGgGAAgJQAAgIgGgGQgGgGgKAAIgbAAg");
	this.shape_11.setTransform(60.575,84.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("Ag4A6IAUgUQANANAXAAQAbAAAAgTQAAgIgFgFQgEgEgJgBIgSgDQgTgDgLgIQgLgLAAgUQAAgVAPgMQAOgNAYAAQAfAAATASIgTASQgLgKgVAAQgKAAgHAGQgGAFAAAIQAAAHAFAEQAFAFAJABIARADQAUADAKAJQAMAKAAAVQAAAWgRANQgQAMgYAAQgkAAgUgUg");
	this.shape_12.setTransform(46.825,84.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#939598").s().p("AAoBNIAAhZIgdA6IgUAAIgeg6IAABZIgdAAIAAiZIAdAAIAnBSIAohSIAdAAIAACZg");
	this.shape_13.setTransform(32.5,84.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#939598").s().p("AgVAxQgJgJAAgOIAAgzQAAgOAJgJQAJgIAMAAQANAAAJAIQAJAJAAAOIAAAzQAAAOgJAJQgJAIgNAAQgMAAgJgIgAgNgoQgFAGAAAJIAAAzQAAAJAFAGQAFAGAIAAQAJAAAGgGQAFgGAAgJIAAgzQAAgJgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_14.setTransform(144.775,64.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#939598").s().p("AgXAwQgJgJAAgOQAAgSARgIQgPgJAAgQQAAgNAJgJQAJgIAMAAQAOAAAIAIQAJAJAAANQAAARgOAIQAQAIAAASQAAAOgJAJQgKAJgOAAQgNAAgKgJgAgOAJQgHAHAAAJQAAAJAHAHQAGAGAIAAQAJAAAHgGQAGgHAAgJQAAgJgGgHQgHgGgJAAQgIAAgGAGgAgNgpQgGAGAAAJQAAAJAGAFQAFAGAIAAQAJAAAFgGQAGgFAAgJQAAgJgGgGQgFgFgJAAQgIAAgFAFg");
	this.shape_15.setTransform(136.925,64.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#939598").s().p("AgeA5IAAgKIArg4QAGgIABgJQgBgJgFgFQgFgGgJAAQgIAAgFAFQgGAFAAALIgLAAQAAgOAJgIQAIgJANAAQAOAAAJAIQAIAJAAANQAAAMgJALIgmAyIAvAAIAAAKg");
	this.shape_16.setTransform(129.15,64.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#939598").s().p("AgVAxQgJgJAAgOIAAgzQAAgOAJgJQAJgIAMAAQANAAAJAIQAJAJAAAOIAAAzQAAAOgJAJQgJAIgNAAQgMAAgJgIgAgNgoQgFAGAAAJIAAAzQAAAJAFAGQAFAGAIAAQAJAAAGgGQAFgGAAgJIAAgzQAAgJgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_17.setTransform(121.225,64.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#939598").s().p("AAFA4IAAhjIgUATIAAgNIAUgSIALAAIAABvg");
	this.shape_18.setTransform(112.925,64.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#939598").s().p("AgVAxQgJgJAAgOIAAgzQAAgOAJgJQAJgIAMAAQANAAAJAIQAJAJAAAOIAAAzQAAAOgJAJQgJAIgNAAQgMAAgJgIgAgNgoQgFAGAAAJIAAAzQAAAJAFAGQAFAGAIAAQAJAAAGgGQAFgGAAgJIAAgzQAAgJgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_19.setTransform(105.575,64.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#939598").s().p("AAEA4IAFgkIgYAAIgFAkIgMAAIAGgkIgPAAIAAgKIAQAAIAEgVIgPAAIAAgKIAQAAIAGgiIAMAAIgGAiIAYAAIAGgiIALAAIgFAiIAOAAIAAAKIgQAAIgDAVIAOAAIAAAKIgQAAIgGAkgAgNAKIAYAAIAEgVIgZAAg");
	this.shape_20.setTransform(96.875,64.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#939598").s().p("AATA4IgYgnIgPARIAAAWIgMAAIAAhvIAMAAIAABKIAignIAOAAIgaAcIAfAwg");
	this.shape_21.setTransform(84.575,64.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#939598").s().p("AgTAeQgKgKAAgUQAAgSAKgLQAJgKAPAAQAIAAAFACQAGADAGAGIgHAIQgJgJgJAAQgLAAgGAJQgGAHABANQgBAOAGAHQAGAJALAAQAJAAAJgJIAHAIQgGAGgGADQgFACgIAAQgPAAgJgKg");
	this.shape_22.setTransform(76.55,66.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#939598").s().p("AgVAfQgKgJAAgWQAAgUAKgKQAJgJAMAAQANAAAKAJQAJAKAAAUQAAAWgJAJQgKAJgNAAQgMAAgJgJgAgNgXQgGAHgBAQQABASAGAGQAGAGAHAAQAJAAAFgGQAHgGAAgSQAAgRgHgGQgFgGgJAAQgHAAgGAGg");
	this.shape_23.setTransform(68.75,66.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#939598").s().p("AALAzQgKAAgEgGQgFgGAAgJIAAgvIgKAAIAAgJIAKAAIAAgYIAKAAIAAAYIARAAIAAAJIgRAAIAAAvQAAALALAAIAGAAIAAAKg");
	this.shape_24.setTransform(62.175,65.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#939598").s().p("AgmAqIAJgIQALAMASAAQANAAAGgFQAIgGAAgJQAAgKgGgFQgEgDgKgCIgNgCQgNgCgHgGQgJgHAAgOQAAgOAKgJQAJgIARAAQATAAAOAMIgIAIQgKgKgQAAQgKAAgGAGQgHAFAAAKQAAAIAFAFQAGAEAKACIALACQAOACAGAFQAKAIAAAOQAAAPgLAJQgKAIgSAAQgXAAgPgPg");
	this.shape_25.setTransform(55.3,64.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#283A7C").s().p("AgoBUQgSgQAAgbIAAhRQAAgbASgQQAQgPAYAAQAZAAARAPQARAQAAAbIAABRQAAAbgRAQQgRAPgZAAQgYAAgQgPgAgQg7QgHAHAAAMIAABRQAAAMAHAHQAGAHAKAAQALAAAGgHQAHgHAAgMIAAhRQAAgMgHgHQgGgHgLAAQgJAAgHAHg");
	this.shape_26.setTransform(170.575,43.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#283A7C").s().p("AgoBUQgSgQAAgbIAAhRQAAgbASgQQAQgPAYAAQAZAAARAPQARAQAAAbIAABRQAAAbgRAQQgRAPgZAAQgYAAgQgPgAgQg7QgHAHAAAMIAABRQAAAMAHAHQAGAHAKAAQALAAAGgHQAHgHAAgMIAAhRQAAgMgHgHQgGgHgLAAQgJAAgHAHg");
	this.shape_27.setTransform(156.375,43.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#283A7C").s().p("AACBiIAAicIgnAiIAAgmIAngjIAkAAIAADDg");
	this.shape_28.setTransform(141.325,43.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#283A7C").s().p("AgqBVQgSgOgBgeIAjAAQABANAIAHQAHAGAKAAQAMAAAHgHQAHgHAAgNQAAgMgHgIQgHgHgMAAIgFAAIAAgdIAFAAQAXgBABgYQAAgMgHgHQgHgGgKAAQgKAAgGAGQgHAHAAALIgkAAQABgaARgPQAQgPAZAAQAaAAARAQQAQAQAAAYQAAAcgXAMQAaAMAAAfQAAAcgSAPQgRAPgbAAQgZAAgRgOg");
	this.shape_29.setTransform(127.95,43.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#283A7C").s().p("Ag/BiIAAgfIBSiBIhPAAIAAgjIB8AAIAAAfIhSCCIBSAAIAAAig");
	this.shape_30.setTransform(108.05,43.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#283A7C").s().p("AAKBiQgTAAgLgOQgKgLAAgQIAAiaIAjAAIAACYQgBAMANAAIAOAAIAAAfg");
	this.shape_31.setTransform(91.6,43.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#283A7C").s().p("Ag9AAQAAghARgUQARgTAbAAQAdAAARATQAQATAAAeIAAAPIhYAAQAAAOAIAJQAJAJANAAQATAAAOgOIAVAVQgLAMgMAFQgNAGgSAAQhBAAAAhJgAAbgMQAAgJgEgHQgGgOgRAAQgQAAgHAOQgDAHAAAJIA1AAIAAAAg");
	this.shape_32.setTransform(79.85,46.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#283A7C").s().p("AgsBWQgKgKgDgSQgCgLAAgWQAAgVACgKQADgSAKgKQANgMAVAAQAVAAANAOIAAhBIAkAAIAADCIgjAAIAAgOQgOAPgUAAQgWAAgNgMgAgTgDQgEAIAAAUQAAAVAEAJQAFALAOAAQAPAAAFgLQAEgJAAgVQAAgUgEgIQgFgLgPAAQgOAAgFALg");
	this.shape_33.setTransform(65.025,43.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#283A7C").s().p("AgrA3QgJgJgEgOQgDgMAAgUQAAgUADgLQAEgOAJgJQAQgSAbAAQAcAAAQASQAJAJAEAOQADALAAAUQAAAUgDAMQgEAOgJAJQgQASgcAAQgbAAgQgSgAgQgiQgIAJAAAZQAAAaAIAJQAHAGAJAAQAKAAAHgGQAIgJAAgaQAAgZgIgJQgHgGgKAAQgJAAgHAGg");
	this.shape_34.setTransform(50.875,46.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#283A7C").s().p("AAyBiIAAhxIglBJIgZAAIglhJIAABxIgmAAIAAjDIAlAAIAyBpIAzhpIAlAAIAADDg");
	this.shape_35.setTransform(33.025,43.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#283A7C").s().p("AgwBhIAAgfIAIAAQAHAAAEgDQAEgDADgHIAFgSIgxiDIAmAAIAcBYIAdhYIAmAAIg9CkQgFANgFAGQgLAKgUAAg");
	this.shape_36.setTransform(204.65,22.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#283A7C").s().p("Ag9AAQAAghARgUQARgTAbAAQAdAAARATQAQATAAAeIAAAPIhYAAQAAAOAIAJQAJAJANAAQATAAAOgOIAVAVQgLAMgMAFQgNAGgSAAQhBAAAAhJgAAbgMQAAgJgEgHQgGgOgRAAQgQAAgHAOQgDAHAAAJIA1AAIAAAAg");
	this.shape_37.setTransform(191.1,19.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#283A7C").s().p("AALBiQgUgBgLgNQgKgKAAgRIAAiaIAiAAIAACXQAAAOAOAAIANAAIAAAeg");
	this.shape_38.setTransform(180.3,17.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#283A7C").s().p("AAVBiIgig8IgPARIAAArIgkAAIAAjDIAkAAIAABuIAug5IArAAIgzA4IA3BWg");
	this.shape_39.setTransform(169.225,17.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#283A7C").s().p("AAYBIIAAhVQAAgOgIgGQgGgGgKAAQgJAAgGAGQgIAGAAAOIAABVIgjAAIAAiNIAjAAIAAANQANgPAVAAQAVAAANANQAOAOAAAaIAABag");
	this.shape_40.setTransform(153.725,19.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#283A7C").s().p("AgRBiIAAiNIAjAAIAACNgAgRhEIAAgdIAjAAIAAAdg");
	this.shape_41.setTransform(142.725,17.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#283A7C").s().p("AgzBIIAAiNIAjAAIAAANQAMgPAXAAQATAAAOANIgaAcQgJgJgKAAQgIAAgHAGQgHAIAAAMIAABVg");
	this.shape_42.setTransform(134.4,19.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#283A7C").s().p("AhGBiIAAjDIBOAAQAcABAQAPQAQAOAAAZQAAAPgIAMQgHAJgJAFQAbALAAAgQAAAagRAPQgQAPgbAAgAgfA/IAmAAQANABAGgIQAHgGAAgLQAAgKgHgGQgGgIgNABIgmAAgAgfgRIAkAAQAMAAAGgHQAHgFAAgLQAAgKgHgGQgGgGgMAAIgkAAg");
	this.shape_43.setTransform(119.175,17.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#283A7C").s().p("AgqBTQgSgRAAgcQAAgSARghIAphUIAmAAIgoBQQAFgCAJAAQAUAAAPAPQAQAQAAAaQAAAcgSAQQgQAQgbAAQgaAAgQgPgAgRARQgHAIAAANQAAANAHAIQAHAHAKAAQALAAAHgHQAHgIAAgNQAAgNgHgIQgHgHgLAAQgKAAgHAHg");
	this.shape_44.setTransform(97.375,17.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#283A7C").s().p("Ag6BiIAAggIBIhTQAKgMAAgMQAAgLgGgGQgHgHgLAAQgXAAAAAZIgjAAQAAgaARgQQARgPAYAAQAbAAAQAPQAQAQAAAZQAAAOgFAKQgEAIgLAMIg2A/IBKAAIAAAgg");
	this.shape_45.setTransform(83.325,17.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#283A7C").s().p("AgoBUQgSgQAAgbIAAhRQAAgbASgQQAQgPAYAAQAZAAARAPQARAQAAAbIAABRQAAAbgRAQQgRAPgZAAQgYAAgQgPgAgQg7QgHAHAAANIAABQQAAAMAHAHQAGAHAKAAQALAAAGgHQAHgHAAgMIAAhQQAAgNgHgHQgGgHgLAAQgJAAgHAHg");
	this.shape_46.setTransform(69.025,17.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#283A7C").s().p("Ag6BiIAAggIBIhTQAKgMAAgMQAAgLgGgGQgHgHgLAAQgXAAAAAZIgjAAQAAgaARgQQARgPAYAAQAbAAAQAPQAQAQAAAZQAAAOgFAKQgEAIgLAMIg2A/IBKAAIAAAgg");
	this.shape_47.setTransform(54.975,17.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#283A7C").s().p("AAeBHIgehYIgdBYIgdAAIgsiNIAmAAIAXBXIAdhXIAZAAIAdBXIAXhXIAmAAIgsCNg");
	this.shape_48.setTransform(32.025,19.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#283A7C").s().p("Ag9AAQAAghARgUQARgTAbAAQAdAAARATQAQATAAAeIAAAPIhYAAQAAAOAIAJQAJAJANAAQATAAAOgOIAVAVQgLAMgMAFQgNAGgSAAQhBAAAAhJgAAbgMQgBgJgDgHQgGgOgRAAQgQAAgHAOQgDAHAAAJIA1AAIAAAAg");
	this.shape_49.setTransform(14.85,19.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#283A7C").s().p("AApBiIhMh3IAAB3IgnAAIAAjDIAiAAIBMB3IAAh3IAnAAIAADDg");
	this.shape_50.setTransform(-1.725,17.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-14.5,-4.5,228.3,104.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.COR();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D376C").s().p("AAAAMIgKA8IgoACQgJhBgXhDIArgIIAOBCIAIhHIAjgCIAKBMIANhKIAqAHQgVA6gLBJIgsAHg");
	this.shape.setTransform(123.225,21.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D376C").s().p("AguAzQgIgJgEgOQgFgOABgOQABgaAPgUQATgaAeAAQAaAAASAWQAJALAEANQAEAMgBAOQgBAagQAVQgTAageAAQgaAAgRgWgAgRgSQgFAMAAAMQgBAHACAFQACAIAFAEQAGAEAIAAQAMABAHgKQAEgJABgMQAAgMgFgOQgHgMgKAAQgLAAgIAQg");
	this.shape_1.setTransform(109.3586,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D376C").s().p("Ag5hEIAtgGIAEARQAGAaAHATQAEAMAEAGIAAhKIAtgGQgJBMAFA4IgpAJIgFgHIgTgdQgGgGgBgDQAAAXACAWIgoAIg");
	this.shape_2.setTransform(97.375,21.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D376C").s().p("Ag0AEQACg6gEgLQAngJAWACQAXABAMAKQAMALAAAUQABARgJANQgIAKgNAHQgQAKgVADQgBANADAaIgrAEIABhFgAgOgnIABAkQANgBAJgHQAHgGABgJQACgLgKgEIgIgBQgGAAgJADg");
	this.shape_3.setTransform(81.7,21.6638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D376C").s().p("AguAzQgIgJgEgOQgFgOABgOQABgaAPgUQATgaAeAAQAaAAASAWQAJALAEANQAEAMgBAOQgBAagQAVQgTAageAAQgaAAgRgWgAgRgSQgFAMAAAMQgBAHACAFQACAIAFAEQAGAEAIAAQAMABAHgKQAEgJABgMQAAgMgFgOQgHgMgKAAQgLAAgIAQg");
	this.shape_4.setTransform(70.0586,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D376C").s().p("AAIATIgVAEQABAXACARIgsAJIgBiJIAwgHQgFAngBAbIAVgDIAAg4IAwgHQgJBPAGA4IgtAJg");
	this.shape_5.setTransform(58.375,21.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D376C").s().p("AgqBFIANgjQAKAFAKAAIAIgBQAHgCAGgDQAKgEgBgEQgBgFgLAAIgUACQgOACgIAAQgJAAgGgCQgMgFgBgLQgBgUAbgcQAcgdAagCQAYAAAHAcIADAOIgTAGIgUAGQgCgJgHAAQgJAAgIAIQgFAGACAFQACAEAKAAIALgBIAVgCQAWAAAHAKIADAHQADANgKAOQgMATgcANQgNAGgPAAQgNAAgPgFg");
	this.shape_6.setTransform(46.8057,21.6246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance_1 = new lib.AWARDS();
	this.instance_1.setTransform(152,-4,0.3456,0.3456);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5A91B").s().p("AmFCiQhDABgwgwQgvgvgBhEQABhDAvgvQAwgwBDAAIMLAAQBEAAAvAwQAwAvgBBDQABBEgwAvQgvAwhEgBg");
	this.shape_7.setTransform(85.7,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(30.5,-4,174.4,51.5), null);


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


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(126.7,208.9,1,1,0,0,0,99.2,49.2);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(127.55,87.45,1,1,0,0,0,116.5,73);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(128.05,21.45,1,1,0,0,0,126.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,256.1,259.8), null);


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

	// COR
	this.instance = new lib.Symbol1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// Layer_11
	this.instance_1 = new lib.Symbol3_1();
	this.instance_1.setTransform(142,588.55,1,1,0,0,0,76,-80.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:468.55},6,cjs.Ease.get(1)).wait(336));

	// New 2026 Brinkley Model Z 3100 Stock #010280 MSRP: $122,975
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(149.95,407.65,1,1,0,0,0,128,129.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},7).wait(342));

	// READY TO HIT THE ROAD!
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(149.4,191.3,1,1,0,0,0,122.2,71.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({alpha:1},5).wait(350));

	// LOGO
	this.instance_4 = new lib.Symbol6();
	this.instance_4.setTransform(150.5,52,1,1,0,0,0,123.5,48);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},5).wait(355));

	// BG
	this.instance_5 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,716.6);


// stage content:
(lib.WFSB_215213_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
		{src:"AWARDS.png", id:"AWARDS"},
		{src:"BG.png", id:"BG"},
		{src:"COR.png", id:"COR"},
		{src:"IMG.png", id:"IMG"},
		{src:"LOGO.png", id:"LOGO"}
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