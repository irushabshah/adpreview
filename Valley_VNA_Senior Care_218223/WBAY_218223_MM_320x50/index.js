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



(lib.Bg = function() {
	this.initialize(img.Bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,73);// helper functions:

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


(lib.T3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgcAsIAAgHIAIABQAJAAAFgLIADgJIgag/IALAAIAOAkIAEARIAAAAIAEgJIAQgsIAKAAIgbBHQgDALgGAFQgFADgIAAIgJgBg");
	this.shape.setTransform(265.4,-85.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAUIAAgkIgJAAIAAgFIAJgEIAFgNIAEAAIAAAOIASAAIAAAIIgSAAIAAAkQAAAFADAEQACADAFAAIAFgBIADgBIAAAIIgEABIgGAAQgQAAgBgTg");
	this.shape_1.setTransform(260.35,-87.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEArIAAg+IAJAAIAAA+gAgDgfQgCgBABgEQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAEABQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAEgBABIgEACQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(256.85,-87.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAgIAAgoQAAgHgEgEQgDgEgIAAQgIAAgFAFQgFAGAAAMIAAAgIgJAAIAAg+IAIAAIABAJIABAAQADgFAFgDQAFgCAGAAQALAAAGAFQAFAGAAAMIAAAog");
	this.shape_3.setTransform(251.825,-86.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAaQgFgFAAgMIAAgoIAJAAIAAAoQAAAHAEAFQADADAIAAQAJAAAEgFQAFgFAAgNIAAggIAJAAIAAA+IgIAAIgBgIIgBAAQgCAEgGADQgFACgFAAQgMAAgGgGg");
	this.shape_4.setTransform(244.575,-86.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjAgIAAgoQAAgIgDgDQgDgEgHAAQgJAAgEAFQgEAGAAAKIAAAiIgJAAIAAgoQAAgIgDgDQgDgEgHAAQgJAAgEAFQgEAGAAAMIAAAgIgKAAIAAg+IAIAAIACAJIAAAAQADgFAFgDQAFgCAGAAQAOAAAEALIAAAAQADgFAGgDQAFgDAHAAQAKAAAGAFQAFAGAAAMIAAAog");
	this.shape_5.setTransform(235.575,-86.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjAgIAAgoQAAgIgDgDQgDgEgHAAQgJAAgEAFQgEAGAAAKIAAAiIgJAAIAAgoQAAgIgDgDQgDgEgHAAQgJAAgEAFQgEAGAAAMIAAAgIgKAAIAAg+IAIAAIACAJIAAAAQADgFAFgDQAFgCAGAAQAOAAAEALIAAAAQADgFAGgDQAFgDAHAAQAKAAAGAFQAFAGAAAMIAAAog");
	this.shape_6.setTransform(224.725,-86.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAcQgGgEgEgGQgDgIAAgKQAAgPAIgIQAIgJAMAAQANABAIAIQAIAJAAAOQAAAPgIAJQgIAJgNgBQgHAAgIgEgAgNgRQgFAGAAALQAAAMAFAHQAEAFAJABQAJgBAFgFQAFgHAAgMQAAgLgFgGQgFgGgJgBQgJAAgEAHg");
	this.shape_7.setTransform(215.7,-86.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAZQgIgJAAgPQAAgQAIgIQAIgJANAAIAJABIAHADIgDAIIgHgCIgHgBQgSAAAAAYQAAALAFAGQAFAHAIAAQAIAAAIgEIAAAIQgGADgKAAQgNAAgHgHg");
	this.shape_8.setTransform(209.475,-86.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgHgJAAgQQAAgOAHgJQAHgIAMAAQAMAAAHAKIABAAIgBgFIAAgEIAAgaIAKAAIAABYIgIAAIgBgIIgBAAQgGAJgNAAQgMAAgHgIgAgMgFQgFAGAAAMQAAAMAFAGQAEAGAIAAQAJAAAFgFQAEgGAAgLIAAgDQAAgMgEgGQgFgFgJAAQgIAAgEAGg");
	this.shape_9.setTransform(297.275,-100.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgKAMAAQAMAAAHAJQAHAHAAANIAAAFIgrAAQAAALAGAGQAFAFAJAAQAKABAKgFIAAAJQgFACgFAAIgLABQgNAAgIgIgAAQgFQAAgJgEgFQgEgEgHAAQgHAAgEAEQgFAGgBAIIAgAAIAAAAg");
	this.shape_10.setTransform(290.625,-98.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAsIAAhYIAJAAIAABYg");
	this.shape_11.setTransform(285.825,-100.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgKAMAAQAMAAAHAJQAHAHAAANIAAAFIgrAAQAAALAGAGQAFAFAJAAQAKABAKgFIAAAJQgFACgFAAIgLABQgNAAgIgIgAAQgFQAAgJgEgFQgEgEgHAAQgHAAgEAEQgFAGgBAIIAgAAIAAAAg");
	this.shape_12.setTransform(281.125,-98.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAlQgHgJAAgQQAAgOAHgJQAHgIAMAAQAMAAAHAKIABAAIgBgFIAAgEIAAgaIAKAAIAABYIgIAAIgBgIIgBAAQgGAJgNAAQgMAAgHgIgAgMgFQgFAGAAAMQAAAMAFAGQAEAGAIAAQAJAAAFgFQAEgGAAgLIAAgDQAAgMgEgGQgFgFgJAAQgIAAgEAGg");
	this.shape_13.setTransform(274.025,-100.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAdQgHgFgEgGQgDgIAAgKQAAgOAIgJQAIgIAMgBQAOAAAHAKQAIAIAAAOQAAAPgIAJQgHAIgOAAQgHAAgHgDgAgNgRQgFAGAAALQAAAMAFAHQAFAFAIAAQAJAAAFgFQAFgHAAgMQAAgLgFgGQgFgGgJAAQgJgBgEAHg");
	this.shape_14.setTransform(267.1,-98.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjAgIAAgoQAAgHgDgEQgDgEgHAAQgJAAgEAFQgEAFAAALIAAAiIgJAAIAAgoQAAgHgDgEQgDgEgHAAQgJAAgEAFQgEAGAAAMIAAAgIgKAAIAAg+IAIAAIACAJIAAAAQADgFAFgCQAFgDAGAAQAOAAAEALIAAAAQADgFAGgDQAFgDAHAAQAKAAAGAFQAFAGAAAMIAAAog");
	this.shape_15.setTransform(258.125,-98.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgKAMAAQAMAAAHAJQAHAHAAANIAAAFIgrAAQAAALAGAGQAFAFAJAAQAKABAKgFIAAAJQgFACgFAAIgLABQgNAAgIgIgAAQgFQAAgJgEgFQgEgEgHAAQgHAAgEAEQgFAGgBAIIAgAAIAAAAg");
	this.shape_16.setTransform(249.425,-98.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIAAAAQAEgGAEgDQAFgEAGAAIAHABIgBAJIgHgCQgIAAgEAHQgGAGAAAKIAAAgg");
	this.shape_17.setTransform(244.125,-98.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAsIAAgHIAHABQAJAAAEgLIAEgJIgZg/IAKAAIANAkIAFARIABAAIADgJIAPgsIAKAAIgbBHQgDALgFAFQgFADgIAAIgIgBg");
	this.shape_18.setTransform(235.3,-97.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAsIAAhYIAJAAIAABYg");
	this.shape_19.setTransform(230.875,-100.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAfIgMgkIgEgPIAAAAIgDAPIgMAkIgLAAIgRg+IAKAAIAJAjIADASIABAAIACgJIACgJIAMgjIAJAAIALAjQAEAKABAIIAAAAIACgHIALguIAKAAIgRA+g");
	this.shape_20.setTransform(224.875,-98.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAYQgIgJAAgOQAAgOAIgJQAHgKAMAAQAMAAAHAJQAHAHAAANIAAAFIgrAAQAAALAGAGQAFAFAJAAQAKABAKgFIAAAJQgFACgFAAIgLABQgNAAgIgIgAAQgFQAAgJgEgFQgEgEgHAAQgHAAgEAEQgFAGgBAIIAgAAIAAAAg");
	this.shape_21.setTransform(217.025,-98.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAgIAAgoQAAgHgEgEQgDgEgIAAQgIAAgFAFQgFAGAAAMIAAAgIgJAAIAAg+IAIAAIABAJIABAAQADgFAFgCQAFgDAGAAQALAAAGAFQAFAGAAAMIAAAog");
	this.shape_22.setTransform(210.175,-98.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIAAAAQAEgGAEgDQAFgEAGAAIAHAAIgBAJIgHgBQgIABgEAGQgGAGAAAKIAAAgg");
	this.shape_23.setTransform(268.725,-111.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAbQgFgFAAgMIAAgpIAJAAIAAAoQAAAIAEADQADAEAIAAQAJAAAEgFQAFgGAAgMIAAggIAJAAIAAA+IgIAAIgBgJIgBAAQgCAFgGACQgFADgFAAQgMAAgGgFg");
	this.shape_24.setTransform(262.275,-111.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPAdQgGgFgEgHQgDgHAAgKQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAAOQAAAPgIAJQgIAIgNABQgIAAgHgEgAgOgSQgEAHAAALQAAAMAFAGQAEAHAJgBQAJABAFgHQAFgGAAgMQAAgLgFgGQgFgHgJABQgIAAgGAFg");
	this.shape_25.setTransform(255.2,-111.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AARAgIAAgnQAAgJgEgDQgDgEgIAAQgIAAgFAGQgFAFAAAMIAAAgIgJAAIAAg+IAIAAIABAJIABAAQADgFAFgCQAFgDAGAAQALAAAGAGQAFAFAAAMIAAAog");
	this.shape_26.setTransform(245.025,-111.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEArIAAg+IAIAAIAAA+gAgDgfQgBgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAIAEABQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQABADgCACIgEABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_27.setTransform(239.95,-112.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAOAtIgWgeIgHAGIAAAYIgJAAIAAhZIAJAAIAAAuIAAAKIAAAAIAIgJIATgUIALAAIgYAaIAaAkg");
	this.shape_28.setTransform(232.775,-112.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIAAAAQAEgGAEgDQAFgEAGAAIAHAAIgBAJIgHgBQgIABgEAGQgGAGAAAKIAAAgg");
	this.shape_29.setTransform(227.325,-111.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAdQgHgFgDgHQgEgHAAgKQAAgOAIgJQAHgIANAAQAOgBAHAKQAIAIAAAOQAAAPgIAJQgIAIgNABQgIAAgGgEgAgNgSQgFAHAAALQAAAMAFAGQAFAHAIgBQAJABAFgHQAFgGAAgMQAAgLgFgGQgFgHgJABQgJAAgEAFg");
	this.shape_30.setTransform(220.95,-111.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAVAqIgRg3IgDgKIgBgHIgDARIgRA3IgJAAIgXhTIALAAIANAzIAEATQABgKADgKIAPgyIAKAAIAQAzIAEATIAEgTIAOgzIAKAAIgXBTg");
	this.shape_31.setTransform(211.975,-112.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T3, new cjs.Rectangle(205,-122.3,97.80000000000001,43.89999999999999), null);


(lib.T2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgRAVQgHgIAAgNQAAgMAHgIQAGgHALAAQAMAAAHAHQAGAIAAAMQAAANgGAHQgHAIgMAAQgLABgGgIgAgNgQQgEAGAAAKQAAALAEAGQAFAGAIAAQAJAAAFgGQAFgGAAgLQAAgKgFgGQgFgGgJABQgIgBgFAGg");
	this.shape.setTransform(155.525,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAbIAAgwIgSAAIAAgGIApAAIAAAGIgSAAIAAAwg");
	this.shape_1.setTransform(150.425,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAbIAAg2IAPAAQAUABAAAQQAAAIgHADQgFAFgKAAIgGAAIAAAVgAgKAAIAFAAQAIAAAEgBQAEgDAAgGQAAgFgEgDQgDgDgHAAIgHAAg");
	this.shape_2.setTransform(146.2,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAHQgDgCAAgFQAAgDADgDQACgCADAAQAEAAACACQACADAAADQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(140.3,7.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAdIAAgaQAAgEgCgDQgDgCgEAAQgGAAgDADQgDADAAAIIAAAVIgGAAIAAg5IAGAAIAAARIAAAGIAAAAQACgDADgCQAEgCADAAQAIAAAEAEQADAEAAAGIAAAbg");
	this.shape_4.setTransform(197.825,-1.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgGAIABIAGAAIAFACIgCAFIgFgCIgEAAQgLAAAAAPQAAAIADADQADAFAFAAQAFAAAFgDIAAAGQgEACgGAAQgIABgFgGg");
	this.shape_5.setTransform(193.725,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_6.setTransform(190.425,-0.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMASQgEgDABgGQAAgLASgBIAIAAIAAgDQAAgEgCgDQgDgCgEAAQgFAAgGADIgCgFIAHgCIAGgBQAHAAAEADQADADAAAHIAAAbIgEAAIgBgFQgDAEgEABQgDABgEAAQgFABgEgEgAgFADQgEACAAAEQAAADACADQACABAEAAQAFAAADgDQADgDABgGIAAgEIgHAAQgHABgCACg");
	this.shape_7.setTransform(186.85,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXAVIAAgaQAAgEgCgDQgCgCgFAAQgFAAgDACQgDAEAAAHIAAAWIgFAAIAAgaQAAgEgCgDQgCgCgFAAQgGgBgDAEQgCAEAAAHIAAAVIgHAAIAAgoIAGAAIABAGIAAAAQACgDADgCQADgCAEAAQAKAAACAHQACgDADgCQAEgCAEAAQAIAAADADQAEAFAAAHIAAAag");
	this.shape_8.setTransform(181.25,-0.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_9.setTransform(173.775,0.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAVIAAgZQAAgFgCgDQgDgCgEAAQgGgBgDAEQgDAEAAAHIAAAVIgGAAIAAgoIAFAAIABAGIAAAAQACgDAEgCQADgCADAAQAIAAAEADQADAFAAAHIAAAag");
	this.shape_10.setTransform(169.525,-0.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQAAgLASgBIAIAAIAAgDQAAgEgCgDQgCgCgFAAQgEAAgHADIgCgFIAHgCIAGgBQAHAAAEADQAEADAAAHIAAAbIgFAAIgBgFQgEAEgDABQgDABgEAAQgFABgEgEgAgGADQgDACAAAEQAAADACADQACABAEAAQAEAAAEgDQADgDABgGIAAgEIgHAAQgHABgDACg");
	this.shape_11.setTransform(164.9,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_12.setTransform(160.675,0.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXAVIAAgaQAAgEgCgDQgCgCgFAAQgGAAgCACQgDAEAAAHIAAAWIgFAAIAAgaQAAgEgDgDQgCgCgEAAQgFgBgDAEQgDAEAAAHIAAAVIgGAAIAAgoIAEAAIABAGIABAAQACgDADgCQADgCAEAAQAKAAACAHQACgDAEgCQADgCAFAAQAGAAAEADQADAFAAAHIAAAag");
	this.shape_13.setTransform(154.65,-0.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJATQgEgDgDgFQgCgFAAgGQAAgJAFgGQAFgGAIABQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAFgJAAQgFAAgEgCgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_14.setTransform(148.775,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgGAIABIAGAAIAFACIgCAFIgFgCIgEAAQgLAAAAAPQAAAIADADQADAFAFAAQAFAAAFgDIAAAGQgEACgGAAQgIABgFgGg");
	this.shape_15.setTransform(144.675,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALAdIAAgaQAAgEgCgDQgDgCgEAAQgGAAgDADQgDADAAAIIAAAVIgGAAIAAg5IAGAAIAAARIAAAGIAAAAQACgDADgCQAEgCADAAQAIAAAEAEQADAEAAAGIAAAbg");
	this.shape_16.setTransform(175.775,-10.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_17.setTransform(172.025,-9.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_18.setTransform(169.775,-10.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAUIgHgWIgDgKIAAAAIgCAKIgHAWIgIAAIgLgnIAGAAIAHAWIACALIABgGIACgFIAHgWIAGAAIAIAWIACALIABAAIAAgFIAIgcIAHAAIgLAng");
	this.shape_19.setTransform(165.8,-9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAJAdIgOgTIgEAEIAAAPIgHAAIAAg5IAHAAIAAAeIAAAGIAAAAIAEgGIANgNIAIAAIgQARIARAXg");
	this.shape_20.setTransform(159.15,-10.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEAbIAAgmIAAgJIgBACIgIAHIgEgEIAOgMIAFAAIAAA2g");
	this.shape_21.setTransform(154.15,-10.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAVQgEgHAAgOQAAgOAEgGQAFgIAIAAQAJABAFAHQAEAHAAANQAAAOgEAHQgFAIgJgBQgIABgFgIgAgIgRQgDAGAAALQAAAMADAFQADAGAFAAQAGAAADgGQADgFAAgMQAAgLgDgGQgDgFgGAAQgFAAgDAFg");
	this.shape_22.setTransform(150.3,-10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAbIAAgMIgaAAIAAgGIAZgkIAIAAIAAAkIAIAAIAAAGIgIAAIAAAMgAADgOIgQAXIATAAIAAgRIAAgMg");
	this.shape_23.setTransform(145.9,-10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAHQgDgCAAgFQAAgDADgDQACgCADAAQAEAAACACQACADAAADQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_24.setTransform(140.3,-10.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_25.setTransform(183.425,-17.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgMASQgEgDABgGQAAgLATgBIAHAAIAAgCQAAgFgCgDQgDgCgEAAQgFAAgGADIgCgFIAHgDIAGgBQAHABAEADQADADAAAIIAAAbIgEAAIgBgHQgDAFgEABQgDABgEAAQgFAAgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAFAAADgDQADgEABgFIAAgDIgHAAQgHAAgCACg");
	this.shape_26.setTransform(179.2,-18.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAcIAAg2IAPAAQAUgBAAARQAAAIgHAEQgFAEgJAAIgHAAIAAAWgAgKABIAFAAQAIAAAEgCQAEgDAAgGQAAgGgEgCQgDgDgHAAIgHAAg");
	this.shape_27.setTransform(175.1,-19.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_28.setTransform(168.725,-17.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMASQgEgDAAgGQAAgLAUgBIAGAAIAAgCQAAgFgCgDQgBgCgGAAQgEAAgGADIgCgFIAHgDIAGgBQAIABADADQADADAAAIIAAAbIgEAAIgCgHQgDAFgCABQgEABgDAAQgGAAgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAEAAAEgDQADgEAAgFIAAgDIgGAAQgGAAgDACg");
	this.shape_29.setTransform(164.5,-18.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNAYQgEgGAAgKQAAgJAEgGQAFgFAIAAQAIAAADAGIABAAIAAgDIAAgDIAAgRIAGAAIAAA6IgFAAIgBgGQgFAHgHAAQgIAAgFgGgAgIgDQgCAEAAAHQAAAIACAEQADAEAFAAQAGAAADgDQADgEAAgHIAAgCQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_30.setTransform(160.05,-19.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_31.setTransform(156.875,-19.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_32.setTransform(154.925,-19.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJATQgEgDgDgFQgCgEAAgHQAAgJAFgGQAFgFAIgBQAJAAAFAHQAFAFAAAJQAAAKgFAFQgFAHgJgBQgFAAgEgCgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_33.setTransform(151.675,-18.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOAcIAAgaIgcAAIAAAaIgGAAIAAg2IAGAAIAAAXIAcAAIAAgXIAHAAIAAA2g");
	this.shape_34.setTransform(146.55,-19.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgFAHQgDgCAAgFQAAgDADgDQACgCADAAQAEAAACACQACADAAADQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_35.setTransform(140.3,-19.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgOASIAAgFIAHACIAHABQADAAADgCQACgBABgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgHgDIgIgDIgFgDIgBgGQAAgEAFgEQADgCAHAAQAHAAAGACIgDAGQgGgDgEAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAgBABIABADIADACIAGADQAHACADADQADACAAAEQgBAGgEADQgEADgGABQgJAAgFgEg");
	this.shape_36.setTransform(133.6,17.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_37.setTransform(130.375,17.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgEgCgDQgDgCgEgBQgGABgDADQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgDAEgBQADgCADAAQAIAAAEAEQADADAAAIIAAAag");
	this.shape_38.setTransform(126.725,17.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgKQAAgIAEgGQAFgHAIABQAHgBAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAFIgHADIgHABQgIAAgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_39.setTransform(122.225,17.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAVIgPgpIAGAAIAJAYIADALIAAAAIADgJIAKgaIAGAAIgPApg");
	this.shape_40.setTransform(118.125,17.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgKQAAgIAEgGQAFgHAIABQAHgBAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAFIgHADIgHABQgIAAgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_41.setTransform(114.075,17.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgEgCgDQgDgCgEgBQgGABgDADQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgDAEgBQADgCADAAQAIAAAEAEQADADAAAIIAAAag");
	this.shape_42.setTransform(107.625,17.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgGQAFgFAIAAQAJgBAFAHQAFAFAAAJQAAAKgFAFQgFAHgJAAQgFAAgEgEgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_43.setTransform(102.925,17.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_44.setTransform(99.675,16.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_45.setTransform(97.325,17.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMASQgEgDAAgGQAAgMAUAAIAGAAIAAgCQAAgFgCgDQgBgCgGAAQgEAAgGADIgCgFIAHgDIAGAAQAHAAAEADQADADABAIIAAAbIgFAAIgCgHQgDAEgCACQgEABgDABQgHgBgDgDgAgGADQgDACAAAEQAAADACACQACACAEAAQAFAAADgDQAEgDgBgGIAAgEIgGAAQgGABgEACg");
	this.shape_46.setTransform(93.75,17.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_47.setTransform(90.775,16.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgFAIAAIAGAAIAFABIgCAGIgFgBIgEgBQgLAAAAAPQAAAHADAFQADAEAFAAQAFAAAFgCIAAAFQgEACgGABQgIgBgFgFg");
	this.shape_48.setTransform(88.075,17.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgKQAAgIAEgGQAFgHAIABQAHgBAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAFIgHADIgHABQgIAAgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_49.setTransform(84.025,17.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgLAVIAAgoIAFAAIABAHIAAAAQADgDACgCQADgDAEAAIAFABIgBAFIgEgBQgFABgDAEQgEAEAAAGIAAAVg");
	this.shape_50.setTransform(80.6,17.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_51.setTransform(76.525,18.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_52.setTransform(71.825,18.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMASQgEgDABgGQgBgMAUAAIAHAAIAAgCQAAgFgDgDQgCgCgEAAQgFAAgGADIgCgFIAHgDIAGAAQAIAAADADQAEADgBAIIAAAbIgEAAIgBgHQgEAEgDACQgDABgEABQgFgBgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAFAAADgDQAEgDAAgGIAAgEIgHAAQgGABgDACg");
	this.shape_53.setTransform(67.05,17.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIAAQAHAAAFAEQAEAGAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_54.setTransform(98.975,8.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgJQAAgJAEgHQAFgFAIAAQAHAAAFAEQAEAGAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_55.setTransform(94.675,8.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_56.setTransform(90.575,9.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJATQgEgDgDgFQgCgFAAgGQAAgJAFgGQAFgGAIABQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAFgJAAQgFAAgEgCgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_57.setTransform(86.375,8.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_58.setTransform(83.075,7.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRAeIAAg6IAFAAIABAFIAAAAQADgDADgCQADgBADAAQAIAAAFAFQAEAGAAAKQAAAJgEAGQgFAGgIAAQgDAAgDgCQgEgBgCgEIAAAAIAAAHIAAARgAgIgUQgDADAAAIIAAABQAAAIADAEQADADAFAAQAGAAADgEQADgDAAgIQAAgIgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_59.setTransform(79.875,9.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAXAVIAAgaQAAgEgCgDQgCgCgEAAQgHAAgCADQgDADAAAHIAAAWIgFAAIAAgaQAAgEgDgDQgBgCgFAAQgFgBgDAEQgDAEAAAHIAAAVIgGAAIAAgoIAEAAIABAGIABAAQACgDADgCQADgCAEAAQAKAAACAHQACgDAEgCQADgCAFAAQAGAAAEADQAEAFgBAHIAAAag");
	this.shape_60.setTransform(73.85,8.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAbIAAg2IAdAAIAAAGIgXAAIAAASIAWAAIAAAEIgWAAIAAAVIAXAAIAAAFg");
	this.shape_61.setTransform(68.275,7.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQACADABADQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_62.setTransform(62.6,7.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgSAdIAAgFIAFABQAGAAADgIIACgGIgQgoIAHAAIAJAYIACAKIABAAIACgFIAKgdIAGAAIgRAuQgCAHgDADQgEADgFAAIgGgBg");
	this.shape_63.setTransform(97.225,0.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_64.setTransform(93.925,-0.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_65.setTransform(91.625,-1.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_66.setTransform(89.725,-1.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_67.setTransform(87.775,-1.275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgFAcQgEgBgCgEIAAAAIgCAGIgEAAIAAg6IAGAAIAAAOIAAAJIAAAAQAEgGAIAAQAIAAAFAFQAEAGAAAJQAAAKgEAGQgFAGgIAAQgDAAgDgCgAgIgDQgDADAAAIQAAAJADAEQADADAFAAQAGAAADgEQADgEAAgIQAAgIgDgDQgDgEgGAAQgFAAgDAEg");
	this.shape_68.setTransform(84.575,-1.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgCAcIAAgoIAFAAIAAAogAgCgUIgBgDIABgDIACgBIADABIABADIgBADIgDABIgCgBg");
	this.shape_69.setTransform(81.175,-1.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AALAUIgLgQIgLAQIgHAAIAPgUIgOgTIAHAAIAKAPIALgPIAHAAIgPATIAQAUg");
	this.shape_70.setTransform(78.225,-0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgKQAAgIAEgHQAFgFAIAAQAHAAAFAEQAEAGAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHABIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_71.setTransform(74.075,-0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_72.setTransform(70.925,-1.375);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgOAbIAAg2IAdAAIAAAGIgXAAIAAAUIAWAAIAAAFIgWAAIAAAXg");
	this.shape_73.setTransform(68.275,-1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQACADABADQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_74.setTransform(62.6,-1.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOASIAAgFIAHACIAHABQAEAAACgBQACgCABgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgFIgIgCIgFgEIgBgEQAAgFAFgDQAEgDAGAAQAGAAAHADIgDAFQgFgDgFAAIgHABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIACACIAGADQAHACADACQACADAAAEQAAAGgDADQgFADgGAAQgJAAgFgDg");
	this.shape_75.setTransform(94.8,-9.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAQQgFgGAAgKQAAgIAEgHQAFgFAIAAQAHAAAFAEQAEAGAAAIIAAADIgbAAQAAAHAEAEQADAEAFAAQAHAAAHgDIAAAFIgHACIgHABQgIAAgFgFgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDAEgBAFIAVAAIAAAAg");
	this.shape_76.setTransform(90.775,-9.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOASIAAgFIAHACIAHABQADAAADgBQACgCABgDQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgHgFIgIgCIgFgEIgBgEQAAgFAFgDQADgDAHAAQAHAAAGADIgDAFQgGgDgFAAIgGABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAADIADACIAGADQAIACACACQADADAAAEQgBAGgEADQgEADgGAAQgJAAgFgDg");
	this.shape_77.setTransform(86.8,-9.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMARQgEgEAAgHIAAgaIAGAAIAAAZQAAAFADADQACACAFAAQAFABADgEQADgEAAgHIAAgVIAGAAIAAAoIgFAAIgBgGIAAAAQgCADgDACQgEACgDAAQgIAAgDgEg");
	this.shape_78.setTransform(82.575,-9.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AALAVIAAgZQAAgFgCgDQgDgDgEABQgGgBgDAEQgDAEAAAHIAAAVIgGAAIAAgoIAFAAIABAGIAAAAQACgDAEgCQADgCADAAQAIAAAEAEQADAEAAAHIAAAag");
	this.shape_79.setTransform(77.975,-9.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgGQAFgGAIABQAJAAAFAFQAFAGAAAJQAAAKgFAGQgFAFgJAAQgFAAgEgDgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_80.setTransform(73.275,-9.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgSAbIAAg2IAQAAQAJABAGADQAEADAAAHQAAAFgCAEQgDACgFABQAMACAAALQAAAHgFAFQgFADgJAAgAgLAWIALAAQAGAAADgDQAEgCAAgFQAAgGgEgCQgDgDgHAAIgKAAgAgLgDIAKAAQAFAAADgCQADgCAAgFQAAgFgDgCQgDgCgGAAIgJAAg");
	this.shape_81.setTransform(68.65,-10.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQACADABADQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_82.setTransform(62.6,-10.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgJQAAgKAEgFQAFgHAIAAQAHAAAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHACIgHAAQgIABgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_83.setTransform(124.575,-18.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAQQgFgGAAgKQAAgJAFgGQAFgFAIgBIAGABIAFABIgCAGIgFgBIgEgBQgLAAAAAPQAAAIADAEQADAEAFAAQAFAAAFgDIAAAGQgEACgGAAQgIAAgFgFg");
	this.shape_84.setTransform(120.675,-18.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgFgCgCQgDgDgEAAQgGAAgDAEQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgCAEgCQADgCADAAQAIAAAEADQADAEAAAIIAAAag");
	this.shape_85.setTransform(116.425,-18.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgMASQgDgDAAgGQAAgLASgBIAIAAIAAgCQAAgFgCgDQgCgCgFAAQgEAAgHADIgCgFIAHgDIAGgBQAHABAEADQAEADAAAIIAAAbIgFAAIgBgHQgEAFgDABQgDABgEAAQgFAAgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAEAAAEgDQADgEABgFIAAgDIgHAAQgHAAgCACg");
	this.shape_86.setTransform(111.8,-18.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAVIAAgoIAFAAIABAIIAAAAQADgFACgCQADgCAEAAIAFABIgBAFIgEgBQgFAAgDAFQgEAEAAAGIAAAVg");
	this.shape_87.setTransform(108.5,-18.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMARQgEgEAAgHIAAgaIAGAAIAAAaQAAAEADADQACACAFABQAFgBADgDQADgDAAgJIAAgUIAGAAIAAAoIgFAAIgBgFIAAAAQgCADgDABQgEACgDAAQgIAAgDgEg");
	this.shape_88.setTransform(104.275,-18.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNATIAAgGIAGACIAGABQAEAAADgCQADgBgBgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgIgDIgIgDIgDgDIgBgGQAAgEADgDQAEgEAHAAQAGAAAHAEIgCAEQgGgCgGAAIgFABQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIABADIADACIAGADQAIACACADQACACABAFQAAAFgFADQgEADgHAAQgIAAgEgCg");
	this.shape_89.setTransform(100.15,-18.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AALAVIAAgaQAAgFgCgCQgDgDgEAAQgGAAgDAEQgDADAAAIIAAAVIgGAAIAAgoIAFAAIABAFIAAAAQACgCAEgCQADgCADAAQAIAAAEADQADAEAAAIIAAAag");
	this.shape_90.setTransform(95.975,-18.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgCAcIAAg2IAFAAIAAA2g");
	this.shape_91.setTransform(92.575,-19.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AALAdIAAgaQAAgEgCgDQgDgCgEAAQgGAAgDADQgDADAAAIIAAAVIgGAAIAAg5IAGAAIAAARIAAAGIAAAAQACgDADgCQAEgCADAAQAIAAAEAEQADAEAAAGIAAAbg");
	this.shape_92.setTransform(87.225,-19.225);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgFANIAAgYIgGAAIAAgDIAGgCIACgJIADAAIAAAKIAMAAIAAAEIgMAAIAAAYQAAADACACQACACADAAIADAAIACAAIAAAEIgDABIgDABQgLAAAAgNg");
	this.shape_93.setTransform(83.475,-18.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_94.setTransform(81.225,-19.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgMASQgEgDABgGQAAgLATgBIAHAAIAAgCQAAgFgCgDQgDgCgEAAQgFAAgGADIgCgFIAHgDIAGgBQAHABAEADQADADAAAIIAAAbIgEAAIgBgHQgDAFgEABQgDABgEAAQgFAAgEgDgAgFADQgEACAAAEQAAADACACQACACAEAAQAFAAADgDQADgEABgFIAAgDIgHAAQgHAAgCACg");
	this.shape_95.setTransform(77.95,-18.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgLAPQgFgFAAgJQAAgKAEgFQAFgHAIAAQAHAAAFAGQAEAFAAAIIAAADIgbAAQAAAIAEADQADAEAFAAQAHAAAHgDIAAAGIgHACIgHAAQgIABgFgHgAALgDQAAgGgDgDQgDgDgEAAQgEAAgDADQgDADgBAGIAVAAIAAAAg");
	this.shape_96.setTransform(73.825,-18.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAOAcIAAgaIgbAAIAAAaIgHAAIAAg2IAHAAIAAAXIAbAAIAAgXIAHAAIAAA2g");
	this.shape_97.setTransform(68.85,-19.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgFQABgDACgDQACgCADAAQAEAAACACQACADABADQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_98.setTransform(62.6,-19.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(59.6,-26.1,142.3,49.5), null);


(lib.T1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJA0QgDgDAAgGQAAgHADgDQAEgDAFAAQAGAAAEADQADADAAAHQAAAFgDAEQgEADgGAAQgFAAgEgDgAgIARIgEhIIAZAAIgEBIg");
	this.shape.setTransform(49.025,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA2QgJgFAAgMQAAgHAFgFQAEgFAJgCQgDgCgDgDQgDgDAAgEQAAgFADgCIAIgHQgGgCgEgHQgEgGAAgJQAAgNAJgIQAJgHARAAIAHAAIAGABIAdAAIAAAMIgNADQAEAGgBAHQAAAOgJAHQgJAIgQAAIgEgBIgDAAQgDADgBACQAAAEANABIANAAQANAAAIAFQAHAHAAALQAAAOgMAJQgMAIgWAAQgSAAgJgHgAgRAcQgEADgBAFQABAEAEADQAFADAIAAQALAAAHgDQAHgEAAgFQAAgGgEgBQgEgCgJAAIgKAAQgHAAgEADgAgNgfQAAAGADAFQADADAHAAQAFAAADgDQADgFAAgGQAAgPgLAAQgNAAAAAPg");
	this.shape_1.setTransform(42.5,35.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAqIAAgvQAAgKgEgEQgCgFgIABQgIAAgEAGQgFAGAAAOIAAAnIgWAAIAAhSIARAAIADAKIABAAQAEgFAGgEQAHgCAIAAQAPgBAHAJQAHAHAAAPIAAA1g");
	this.shape_2.setTransform(33.25,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA6IAAhTIAVAAIAABTgAgLguQAAgLALAAQANAAAAALQAAAFgEADQgDADgGAAQgLAAAAgLg");
	this.shape_3.setTransform(25.9,31.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAqIAAhSIARAAIADAOIABAAQAEgHAGgFQAHgDAHAAIAIAAIgCAVIgGgBQgLAAgGAHQgGAFAAAJIAAAqg");
	this.shape_4.setTransform(20.575,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA6IAAhTIAVAAIAABTgAgLguQAAgLALAAQAMAAAAALQABAFgEADQgDADgGAAQgLAAAAgLg");
	this.shape_5.setTransform(14.35,31.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA2IAAguIgqAAIAAAuIgYAAIAAhsIAYAAIAAArIAqAAIAAgrIAXAAIAABsg");
	this.shape_6.setTransform(6.125,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIgHgdIgIgkIAAAAIgPBBIgYAAIgYhTIAXAAIAKAlIAEAbIAAAAIADgSIACgGIAKgoIAYAAIAKAoIABAEIAAAHIACAHIAAAGIABAAIACgPIADgMIAKglIAWAAIgYBTg");
	this.shape_7.setTransform(28.7,16.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAmQgKgFgFgKQgEgKAAgNQAAgUAKgLQAKgLATAAQAMAAAKAFQAIAFAFAKQAGAKAAAMQgBAUgKAMQgLALgTAAQgMAAgIgFgAgMgSQgEAGgBAMQABAMAEAHQADAGAJAAQAJAAAEgGQAEgHAAgMQAAgMgEgGQgEgGgJAAQgJAAgDAGg");
	this.shape_8.setTransform(17.45,16.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATA2IguhRIgBAAIACAeIAAAzIgWAAIAAhsIAeAAIAvBRIAAAAIgBgdIAAg0IAUAAIAABsg");
	this.shape_9.setTransform(6.5,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(-1.5,2.3,54.7,41.6), null);


(lib.Logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Logo();
	this.instance.setTransform(3,-393,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(3,-393,348.6,76.69999999999999), null);


(lib.Line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AAAi2IAAFt");
	this.shape.setTransform(14.5,-170.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(13.5,-190,2,38.5), null);


(lib.Hdr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBIQgFgFAAgIQAAgJAFgEQAEgEAIgBQAIABAGAEQAEAEAAAJQAAAIgFAEQgEAGgJAAQgIgBgEgEgAgLAYIgGhkIAjAAIgGBkg");
	this.shape.setTransform(248,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBQgMgQABgbQgBgcAMgPQAMgQAUAAQAVAAALARIABAAQgCgNAAgKIAAglIAfAAIAACfIgXAAIgHgPIgBAAQgKARgWAAQgTAAgMgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgJAAgGAJg");
	this.shape_1.setTransform(238.05,6.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_2.setTransform(225.575,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBBQgMgQABgbQgBgcAMgPQAMgQAUAAQAVAAALARIABAAQgCgNAAgKIAAglIAfAAIAACfIgXAAIgHgPIgBAAQgKARgWAAQgTAAgMgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgJAAgGAJg");
	this.shape_3.setTransform(212.4,6.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_4.setTransform(199.925,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_5.setTransform(187.525,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBLIhBhwIAAAAIACApIAABHIgdAAIAAiVIApAAIBABwIABAAIgCgpIAAhHIAdAAIAACVg");
	this.shape_6.setTransform(172.8,7.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA6IgRgFIAAgaQAKAEALADQAKACAJAAQAQAAAAgJQAAgEgDgCIgHgFIgOgHQgOgGgFgEQgHgEgCgGQgDgGgBgKQAAgOANgJQALgJAVABQAVAAATAJIgJAWIgRgGQgHgCgIAAQgNAAABAHQAAAEAEAEIATAJQANAFAGAFQAHADADAHQACAGAAAJQAAARgMAKQgMAJgXAAQgNgBgJgBg");
	this.shape_7.setTransform(153.7,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_8.setTransform(144.275,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_9.setTransform(132.725,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA5IgshxIAhAAIAWBAQAEAMAAALIAAAAQABgJAEgOIAWhAIAhAAIgsBxg");
	this.shape_10.setTransform(120.575,8.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOBQIAAhyIAeAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgFAEgIAAQgQAAAAgQg");
	this.shape_11.setTransform(111.4,6.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsBLQgNgIAAgPQAAgKAHgHQAGgHANgDQgFgCgEgFQgDgFAAgFQAAgHAEgDQADgEAIgEQgJgEgGgJQgFgJAAgLQAAgTAMgKQAMgLAXAAIALABIAIACIAoAAIAAAQIgSAEQAFAIAAAJQAAATgNAKQgNAKgWAAIgFAAIgFAAQgFADAAAEQAAAHARAAIATAAQATAAAKAIQAKAIAAAPQAAAVgRALQgRALgeAAQgYAAgNgJgAgYAnQgGAEAAAGQAAAHAHAEQAGADALAAQAQAAAJgEQAKgFAAgIQAAgGgGgDQgFgCgMAAIgPAAQgJAAgGAEgAgSgrQAAAJAEAGQAEAFAJAAQAIAAAEgFQAEgGAAgJQAAgVgQAAQgRAAAAAVg");
	this.shape_12.setTransform(102.175,11.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_13.setTransform(90.175,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_14.setTransform(79.825,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAyQgJgJAAgRQAAgTANgHQANgKAYAAIAUgBIAAgFQAAgSgSAAQgNAAgSAJIgLgVQAUgKAXAAQAXAAAMAKQANAKAAAUIAABMIgWAAIgGgQIgBAAQgHAKgJAEQgIADgNABQgQAAgKgKgAAIAFQgNAAgHAEQgGAFAAAKQAAAMAPAAQAKAAAGgFQAHgHAAgKIAAgJg");
	this.shape_15.setTransform(67.8,8.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnA5QgRgTAAgmQAAgWAIgSQAJgRAQgKQAQgJAUAAQAWAAAWAKIgKAaIgRgGQgJgEgIAAQgRAAgJAOQgKANAAAYQAAAyAkgBQAQAAAXgHIAAAbQgTAHgXAAQgfAAgSgUg");
	this.shape_16.setTransform(55.375,7.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmBKQgLgJAAgOQAAgLAHgIQAHgIAMgCQgFgCgDgEQgDgEAAgGQAAgKAOgIQgKgEgFgJQgFgIAAgLQgBgRALgKQALgKASAAQAKAAAGACIAjAAIAAAHIgWABQAJAMAAAOQAAAQgLAKQgKAKgSAAIgKgBQgGAEgDAEQgEADAAAFQAAAFAEADQAEACAKAAIATAAQASAAAJAIQAKAHAAAOQAAASgPAJQgOAKgZAAQgVAAgMgIgAgnAzQAAAXAjgBQAqAAABgcQAAgJgHgFQgIgEgOgBIgSAAQgeAAgBAZgAgWhBQgIAHAAAOQAAAMAIAIQAHAHANAAQAOAAAHgHQAIgHgBgOQABgOgIgHQgIgHgNAAQgNAAgHAIg");
	this.shape_17.setTransform(257.4,-9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAiA5IAAhIQAAgQgHgIQgHgIgPAAQgTAAgJALQgKAKABAWIAAA9IgLAAIAAhvIAJAAIACAQIABAAQAKgSAbAAQAmAAAAApIAABIg");
	this.shape_18.setTransform(245.8,-11.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_19.setTransform(237.225,-13.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA4IgrhvIAKAAIAdBLIAIAZIAAAAIAJgZIAdhLIAKAAIgrBvg");
	this.shape_20.setTransform(230.075,-11.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_21.setTransform(222.925,-13.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIAKAAIAACLIBHAAIAAAKg");
	this.shape_22.setTransform(216,-13.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiBCQgMgOAAgbQAAgcAMgQQANgPAVAAQAMAAAKAFQAIAEAHALIABAAIgBgaIAAgoIAKAAIAACfIgGAAIgDgRIgBAAQgMATgZAAQgVAAgNgPgAgagMQgJAMAAAYQAAAwAjAAQAUAAAIgLQAJgLAAgZIAAgCQAAgZgJgLQgIgMgUAAQgRAAgJANg");
	this.shape_23.setTransform(197.8,-13.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfArQgOgPABgbQAAgaANgQQANgQAVAAQAUAAAMAOQAKAOABAXIAAAHIhQAAQABAXAKAMQAKANATAAQAJAAAIgCQAHgBALgFIAAAKQgJAEgIABQgIACgKAAQgXAAgOgPgAAjgHQAAgTgIgLQgJgLgPAAQgPAAgKALQgJAKgCAUIBEAAIAAAAg");
	this.shape_24.setTransform(186.15,-11.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA+QgHgHAAgRIAAhHIgQAAIAAgGIAQgFIAFgZIAGAAIAAAbIAfAAIAAAJIgfAAIAABFQAAANADAGQAFAGAJAAQAKAAAHgBIAAAIQgHACgKAAQgOAAgHgIg");
	this.shape_25.setTransform(176.775,-12.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnAzIAAgLQARAIATAAQAPAAAJgFQAIgGAAgJQAAgIgGgGQgHgGgQgFQgPgFgHgFQgHgEgDgFQgEgGAAgIQAAgMALgIQAKgHASAAQASAAAQAHIgEAJQgQgHgOAAQgNAAgIAFQgIAEAAAIQAAAJAHAFQAGAGARAGQAPAFAHAEQAHAEADAGQAEAFAAAIQAAAPgMAIQgLAIgUAAQgXAAgNgHg");
	this.shape_26.setTransform(168.475,-11.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_27.setTransform(161.325,-13.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnAzIAAgLQARAIATAAQAPAAAJgFQAIgGAAgJQAAgIgGgGQgHgGgQgFQgPgFgHgFQgHgEgDgFQgEgGAAgIQAAgMALgIQAKgHASAAQASAAAQAHIgEAJQgQgHgOAAQgNAAgIAFQgIAEAAAIQAAAJAHAFQAGAGARAGQAPAFAHAEQAHAEADAGQAEAFAAAIQAAAPgMAIQgLAIgUAAQgXAAgNgHg");
	this.shape_28.setTransform(154.025,-11.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnAzIAAgLQARAIATAAQAPAAAJgFQAIgGAAgJQAAgIgGgGQgHgGgQgFQgPgFgHgFQgHgEgDgFQgEgGAAgIQAAgMALgIQAKgHASAAQASAAAQAHIgEAJQgQgHgOAAQgNAAgIAFQgIAEAAAIQAAAJAHAFQAGAGARAGQAPAFAHAEQAHAEADAGQAEAFAAAIQAAAPgMAIQgLAIgUAAQgXAAgNgHg");
	this.shape_29.setTransform(144.275,-11.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAzBLIgVg1Ig7AAIgWA1IgLAAIA9iVIAFAAIA7CVgAAbANIgUg1IgHgSIgFASIgUA1IA0AAg");
	this.shape_30.setTransform(133.15,-13.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfArQgOgPAAgbQAAgaAOgQQANgQAVAAQAUAAALAOQAMAOAAAXIAAAHIhPAAQAAAXAKAMQAKANATAAQAJAAAIgCQAHgBALgFIAAAKQgJAEgIABQgIACgKAAQgXAAgOgPgAAjgHQAAgTgJgLQgIgLgPAAQgPAAgJALQgLAKgBAUIBEAAIAAAAg");
	this.shape_31.setTransform(115.65,-11.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABBA5IAAhIQAAgRgHgHQgGgIgNAAQgRAAgJAKQgIAJAAAUIAABBIgJAAIAAhLQAAgdgaAAQgRAAgIALQgIAKAAAWIAAA9IgLAAIAAhvIAJAAIACAQIABAAQAEgJAJgEQAIgFAKAAQAbAAAGAUIABAAQAFgKAJgFQAKgFALAAQASAAAKAKQAJAKAAAVIAABIg");
	this.shape_32.setTransform(100.725,-11.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEBMIAAhuIAJAAIAABugAgGhBQAAgKAGAAQADAAACADQACACAAAFQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_33.setTransform(89.075,-13.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFBLIAAiLIgwAAIAAgKIBrAAIAAAKIgxAAIAACLg");
	this.shape_34.setTransform(81.2,-13.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAEIAAgHIAvAAIAAAHg");
	this.shape_35.setTransform(72.325,-11.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_36.setTransform(66.625,-14.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_37.setTransform(61.925,-14.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrAQIAAhIIAKAAIAABHQAAARAHAIQAHAIAPAAQATAAAKgKQAJgLAAgWIAAg9IAKAAIAABvIgJAAIgCgQIAAAAQgLASgbAAQgmAAAAgpg");
	this.shape_38.setTransform(53.325,-11.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIBRAAIAAAKIhHAAIAABAIBDAAIAAAIIhDAAIAABDg");
	this.shape_39.setTransform(42.875,-13.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(34.6,-30.5,230.29999999999998,53.2), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAmIgGgaIgIghIAAAAIgOA7IgWAAIgVhLIAUAAIAJAiIAEAYIADgRIABgFIAKgkIAVAAIAJAkIABAEIACAGIABAHIAAAFIABAAIACgOIACgKIAJgiIAVAAIgXBLg");
	this.shape.setTransform(95,-172.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgEgJQgFgJAAgMQAAgSAKgKQAJgLARAAQALAAAJAFQAIAFAEAJQAFAJAAALQAAATgKAKQgKALgRAAQgKAAgJgFgAgMgQQgDAFAAALQAAALAEAGQADAGAIAAQAIAAAEgGQAEgGgBgLQABgKgEgGQgEgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(84.7,-172.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAyIgrhKIgBAAIACAbIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgbIAAgvIATAAIAABjg");
	this.shape_2.setTransform(74.675,-174.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA2IAAgRIAIACQAGAAAEgEQAEgEACgHIACgDIgfhLIAXAAIAPArIABAMIADgMIAPgrIAWAAIggBWQgFALgHAGQgIAGgLAAIgLgBg");
	this.shape_3.setTransform(61.425,-171.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_4.setTransform(55.35,-174.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_5.setTransform(49.025,-171.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_6.setTransform(40.175,-171.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_7.setTransform(30.675,-174.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AnaCvIAAldIO1AAIAAFdg");
	this.shape_8.setTransform(63.5,-173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(16,-190.5,95,35), null);


(lib.Bg_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,0,320,50), null);


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
	this.shape.setTransform(149.9977,299.9878,1,2.3999);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ad_bg, new cjs.Rectangle(0,0,300,600), null);


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
	this.frame_299 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(160,45,1.0666,0.2,0,0,0,150,225);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(300));

	// Cta
	this.instance = new lib.Cta();
	this.instance.setTransform(254.5,216.05,1,1,0,0,0,47.5,17.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).to({x:239.5,alpha:1},9,cjs.Ease.get(1)).wait(74));

	// Line
	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(180.55,216.85,1,1,0,0,0,0,20.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(208).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(83));

	// Logo
	this.instance_2 = new lib.Logo_1();
	this.instance_2.setTransform(77.9,217.2,0.4894,0.4894,0,0,0,166.2,36.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({x:92.9,alpha:1},9,cjs.Ease.get(1)).wait(92));

	// T3
	this.instance_3 = new lib.T3();
	this.instance_3.setTransform(55.45,152.4,1,1,0,0,0,60.4,27.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(112).to({_off:false},0).to({x:70.45,alpha:1},9,cjs.Ease.get(1)).to({_off:true},73).wait(106));

	// T2
	this.instance_4 = new lib.T2();
	this.instance_4.setTransform(41.15,77.5,1,1,0,0,0,46.1,51.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).to({x:56.15,alpha:1},9,cjs.Ease.get(1)).to({_off:true},82).wait(106));

	// T1
	this.instance_5 = new lib.T1();
	this.instance_5.setTransform(52.85,17.2,1,1,0,0,0,57.8,14.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({x:67.85,alpha:1},9,cjs.Ease.get(1)).to({_off:true},91).wait(106));

	// Hdr
	this.instance_6 = new lib.Hdr();
	this.instance_6.setTransform(52.25,91.3,1,1,0,0,0,57.2,64);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:67.25,alpha:1},9,cjs.Ease.get(1)).to({_off:true},76).wait(206));

	// Bg
	this.instance_7 = new lib.Bg_1();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9,cjs.Ease.get(1)).wait(183).to({alpha:0},7).wait(101));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-3.2,326.4,53.2);


// stage content:
(lib.WBAY_218223_MM_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/D6IAAnzMAx/AAAIAAHzg");
	mask.setTransform(159.9951,24.9975);

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
	this.instance.setTransform(160,10.4,1.0667,0.0833,0,0,0,150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,26);
// library properties:
lib.properties = {
	id: '975D5B5BE9CB1949972A01487C3AD994',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Bg.jpg", id:"Bg"},
		{src:"Logo.png", id:"Logo"}
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
an.compositions['975D5B5BE9CB1949972A01487C3AD994'] = {
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