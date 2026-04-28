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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


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
	this.instance.setTransform(-26,18,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-26,18,158.1,61.5), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAHIAAgOIANAAIAAAOg");
	this.shape.setTransform(89.075,129.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAjIgNgqIgMAqIgMAAIgThGIAPAAIALAsIANgsIAJAAIANAsIALgsIAPAAIgTBGg");
	this.shape_1.setTransform(83.225,127.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAdQgFgFgCgIIAAgQIAAgPQACgHAFgFQAHgIALAAQALAAAIAIQAFAFABAHIABAPIgBAQQgBAIgFAFQgIAHgLAAQgLAAgHgHgAgIgTQgCACgBAEIAAANIAAAOQABAEACACQADAEAFAAQAGAAADgEIADgGIAAgOIAAgNQgBgEgCgCQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(75.625,127.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAjIgcgqIAAAqIgNAAIAAhGIAMAAIAbArIAAgrIAOAAIAABGg");
	this.shape_3.setTransform(68.875,127.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAhQgHAAgEgFQgDgDAAgHIAAgZIgGAAIAAgJIAGAAIAAgQIAMAAIAAAQIAJAAIAAAJIgJAAIAAAZQAAAEAEAAIAFAAIAAALg");
	this.shape_4.setTransform(61.175,127.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAjIAAgfQAAgEgCgCQgDgCgDAAQgDAAgCACQgCACAAAEIAAAfIgNAAIAAhGIANAAIAAAYQAFgFAGAAQAIAAAFAFQAEAGAAAHIAAAhg");
	this.shape_5.setTransform(56.725,127.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAeIAIgJQAEAEAGAAQAEAAADgDQACgDABgEIAAgGQgFAFgHABQgHAAgFgGQgEgDgBgFIgBgLIABgMQABgFAEgDQAFgFAHAAQAHAAAFAGIAAgGIANAAIAAAyQAAAJgHAGQgGAGgJAAQgMAAgHgGgAgGgTQgBACAAAHQAAAGABADQACADAEABQAGgBABgDIACgJIgCgJQgBgEgGAAQgEAAgCAEg");
	this.shape_6.setTransform(50.95,128.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAkIAAgzIAMAAIAAAzgAgGgYIAAgLIANAAIAAALg");
	this.shape_7.setTransform(46.925,127.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAaIAAgzIANAAIAAAFQAEgFAHAAQAIAAAFAEIgKAKQgDgDgEAAQgCAAgDADQgCACAAAFIAAAeg");
	this.shape_8.setTransform(43.65,127.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAfQgDgDgBgHIgBgMIABgLQABgGADgEQAFgEAIAAQAHAAAFAFIAAgYIANAAIAABGIgNAAIAAgFQgFAGgHAAQgIAAgFgFgAgHAAQgBACAAAHQAAAIABADQADAEAEAAQAFAAACgEQACgDAAgIQAAgHgCgCQgCgFgFAAQgEAAgDAFg");
	this.shape_9.setTransform(35.8,127.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAWQgFgFABgHQgBgGAFgEQAEgEAKAAIAKAAIAAgCQAAgJgIABQgGAAgEADIgIgHQADgEAFgCQAEgCAGABQAWgBAAATIAAAhIgNAAIAAgFQgFAFgHABQgIAAgFgFgAgIAKQAAAGAIAAQAEAAADgDQACgCgBgEIAAgDIgIAAQgIAAAAAGg");
	this.shape_10.setTransform(30.3,128);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAUQgDgEgCgEQgBgFAAgHQAAgGABgFQACgFADgEQAGgFAJAAQALAAAFAFQADAEACAFIABALIgBAMQgCAEgDAEQgFAHgLAAQgJAAgGgHgAgFgMQgDAEAAAIQAAAKADACQACADADAAQAEAAACgDQADgCAAgKQAAgIgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_11.setTransform(25.1,128);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAaIAAgzIANAAIAAAFQAEgFAHAAQAIAAAFAEIgKAKQgDgDgEAAQgCAAgCADQgDACAAAFIAAAeg");
	this.shape_12.setTransform(20.5,127.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAAQAAgLAHgIQAGgGAJgBQALAAAGAIQAGAGAAALIAAAFIggAAQAAAFADAEQADADAFAAQAHAAAEgGIAIAIQgEAFgEACQgFABgGAAQgYABAAgbgAAKgEIgBgFQgDgGgGAAQgFAAgDAGIgBAFIATAAIAAAAg");
	this.shape_13.setTransform(122.475,116.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIAkIAAggQAAgEgCgDQgDgBgDAAQgDAAgCABQgCADAAAEIAAAgIgNAAIAAhGIANAAIAAAXQAFgFAGAAQAIAAAFAFQAEAGAAAHIAAAig");
	this.shape_14.setTransform(116.975,115.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHAhQgHAAgEgEQgDgFAAgGIAAgYIgGAAIAAgLIAGAAIAAgPIAMAAIAAAPIAJAAIAAALIgJAAIAAAXQAAAFAEAAIAFAAIAAALg");
	this.shape_15.setTransform(112.275,115.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHAhQgHAAgEgEQgDgFAAgGIAAgYIgGAAIAAgLIAGAAIAAgPIAMAAIAAAPIAJAAIAAALIgJAAIAAAXQAAAFAEAAIAFAAIAAALg");
	this.shape_16.setTransform(106.475,115.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAkIAAgzIAMAAIAAAzgAgGgYIAAgLIANAAIAAALg");
	this.shape_17.setTransform(103.425,115.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAIAkIAAggQAAgEgCgDQgDgBgDAAQgDAAgCABQgCADAAAEIAAAgIgNAAIAAhGIANAAIAAAXQAFgFAGAAQAIAAAFAFQAEAGAAAHIAAAig");
	this.shape_18.setTransform(99.275,115.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAUQgDgDgBgFQgCgFAAgHQAAgGACgFQABgFADgDQAGgHAJAAQAKAAAHAHQADADABAFIABALIgBAMQgBAFgDADQgHAGgKAAQgJAAgGgGgAgFgLQgDACAAAJQAAAJADAEQACACADAAQAEAAACgCQADgEAAgJQAAgJgDgCQgCgDgEAAQgDAAgCADg");
	this.shape_19.setTransform(91.4,116.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAHAhQgHAAgEgEQgDgFAAgGIAAgYIgGAAIAAgLIAGAAIAAgPIAMAAIAAAPIAJAAIAAALIgJAAIAAAXQAAAFAEAAIAFAAIAAALg");
	this.shape_20.setTransform(86.875,115.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAkIAAgMIADAAIAEgBIACgEIACgGIgRgvIANAAIAKAfIALgfIANAAIgWA7QgCAEgBACQgEAFgHAAg");
	this.shape_21.setTransform(80.475,117.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAfQgDgDgBgHIgBgMIABgLQABgGADgEQAFgEAIAAQAHAAAFAFIAAgYIANAAIAABGIgNAAIAAgFQgFAGgHAAQgIAAgFgFgAgHAAQgBACAAAHQAAAIABADQACAEAFAAQAGAAACgEQABgDAAgIQAAgHgBgCQgCgFgGAAQgFAAgCAFg");
	this.shape_22.setTransform(75.1,115.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAWQgFgFAAgHQAAgHAFgDQAFgEAIAAIAMAAIAAgDQAAgHgJgBQgGABgEAEIgIgIQAEgEAEgCQAEgBAGgBQAVABAAARIAAAiIgMAAIAAgEQgFAEgHAAQgIAAgFgEgAgIAKQAAAGAIAAQAEAAADgCQABgCABgFIAAgDIgJAAQgIAAAAAGg");
	this.shape_23.setTransform(69.6,116.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAAQAAgLAHgIQAGgGAJgBQALAAAGAIQAGAGAAALIAAAFIggAAQAAAFADAEQADADAFAAQAHAAAEgGIAIAIQgEAFgEACQgFABgGAAQgYABAAgbgAAKgEIgBgFQgDgGgGAAQgFAAgDAGIgBAFIATAAIAAAAg");
	this.shape_24.setTransform(64.375,116.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAaIAAgzIANAAIAAAFQAEgFAHAAQAIAAAFAEIgKAKQgDgDgEAAQgCAAgCADQgDACAAAFIAAAeg");
	this.shape_25.setTransform(59.75,116.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAaQgGgDgEgEIAIgJQAFAGAIAAQAKgBAAgFQAAgEgGAAIgHgBQgPgCAAgMQAAgIAGgEQAFgFAIAAQANAAAHAHIgIAIQgEgEgIAAQgHAAAAAFQAAAEAGAAIAHACQAPABAAAMQAAAJgGAFQgGADgKAAIgLAAg");
	this.shape_26.setTransform(52.225,116.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAkIgYhGIAOAAIAOAtIAOgtIAPAAIgYBGg");
	this.shape_27.setTransform(46.925,115.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALAkIgNgdIgKAAIAAAdIgOAAIAAhGIAbAAQAKgBAHAHQAGAGAAAJQAAAHgEAFQgDADgGADIAQAfgAgMgEIAMAAQAFABACgDQADgDAAgEQAAgEgDgDQgCgCgFAAIgMAAg");
	this.shape_28.setTransform(41.025,115.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIAkIAAgnIgFAAIAAgLIAFAAIAAgGQAAgGAEgEQAEgFAHAAIAHAAIAAALIgFAAQgFAAABAFIAAAFIAJAAIAAALIgJAAIAAAng");
	this.shape_29.setTransform(33.55,115.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgFQgCgFAAgHQAAgGACgFQAAgFAEgDQAGgHAJAAQAKAAAHAHQADADABAFIABALIgBAMQgBAFgDADQgHAGgKAAQgJAAgGgGgAgFgLQgDACAAAJQAAAJADAEQADACACAAQAEAAACgCQADgEAAgJQAAgJgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_30.setTransform(29.1,116.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAaQgGgDgEgEIAIgJQAFAGAIAAQAKgBAAgFQAAgEgGAAIgHgBQgPgCAAgMQAAgIAGgEQAFgFAIAAQANAAAHAHIgIAIQgEgEgIAAQgHAAAAAFQAAAEAGAAIAHACQAPABAAAMQAAAJgGAFQgGADgKAAIgLAAg");
	this.shape_31.setTransform(21.525,116.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAfQgEgDgBgHIgBgMIABgLQABgGAEgEQAEgEAIAAQAHAAAFAFIAAgYIANAAIAABGIgNAAIAAgFQgFAGgHAAQgIAAgEgFgAgGAAQgCACAAAHQAAAIACADQACAEAEAAQAFAAACgEQACgDAAgIQAAgHgCgCQgCgFgFAAQgEAAgCAFg");
	this.shape_32.setTransform(16.2,115.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAAQAAgLAHgIQAGgGAJgBQALAAAGAIQAGAGAAALIAAAFIggAAQAAAFADAEQADADAFAAQAHAAAEgGIAIAIQgEAFgEACQgFABgGAAQgYABAAgbgAAKgEIgBgFQgDgGgGAAQgFAAgDAGIgBAFIATAAIAAAAg");
	this.shape_33.setTransform(10.775,116.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSAaIAAgzIAMAAIAAAFQAFgFAIAAQAHAAAFAEIgKAKQgDgDgEAAQgCAAgDADQgCACAAAFIAAAeg");
	this.shape_34.setTransform(6.15,116.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAfQgDgDgBgHIgBgMIABgLQABgGADgEQAFgEAIAAQAHAAAFAFIAAgYIANAAIAABGIgNAAIAAgFQgFAGgHAAQgIAAgFgFgAgHAAQgBACAAAHQAAAIABADQACAEAFAAQAFAAADgEQABgDAAgIQAAgHgBgCQgDgFgFAAQgFAAgCAFg");
	this.shape_35.setTransform(0.6,115.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIAaIAAgeQAAgFgCgDQgCgCgEAAQgDAAgCACQgCADgBAFIAAAeIgMAAIAAgzIAMAAIAAAFQAFgFAHAAQAIAAAFAEQAEAFAAAKIAAAgg");
	this.shape_36.setTransform(-4.9,116.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPAWQgGgGAAgJIAAggIANAAIAAAeQAAAFADADQADACACAAQAEAAACgCQADgDAAgFIAAgeIANAAIAAAzIgNAAIAAgFQgFAFgHAAQgIAAgEgEg");
	this.shape_37.setTransform(-10.675,116.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIAkIAAggQAAgEgCgDQgDgBgDAAQgDAAgCABQgCADAAAEIAAAgIgNAAIAAhGIANAAIAAAXQAFgFAGAAQAIAAAFAFQAEAGAAAHIAAAig");
	this.shape_38.setTransform(-16.275,115.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWAAQAAgMAHgHQAGgHAJABQALAAAGAGQAGAHAAALIAAAFIggAAQAAAFADAEQADACAFAAQAHAAAEgEIAIAIQgEADgEACQgFACgGABQgYAAAAgbgAAKgEIgBgGQgDgFgGAAQgFAAgDAFIgBAGIATAAIAAAAg");
	this.shape_39.setTransform(113.725,104.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAaIgTgzIANAAIAKAfIAKgfIAOAAIgTAzg");
	this.shape_40.setTransform(108.575,104.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgQAWQgEgFAAgHQAAgGAEgEQAEgEAKAAIAKAAIAAgCQAAgJgIABQgHAAgDADIgJgIQAEgEAFgBQAEgBAGAAQAWgBAAATIAAAhIgNAAIAAgEQgFAEgHABQgIAAgFgFgAgIAKQAAAGAHAAQAFAAADgDQACgCgBgEIAAgDIgJAAQgHAAAAAGg");
	this.shape_41.setTransform(103.3,104.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIAkIAAghQAAgDgCgCQgDgCgDgBQgDABgCACQgCACAAADIAAAhIgNAAIAAhHIANAAIAAAYQAFgFAGAAQAIAAAFAFQAEAGAAAHIAAAig");
	this.shape_42.setTransform(98.025,103.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAAQAAgMAHgHQAGgHAJABQALAAAGAGQAGAHAAALIAAAFIggAAQAAAFADAEQADACAFAAQAHAAAEgEIAIAIQgEADgEACQgFACgGABQgYAAAAgbgAAKgEIgBgGQgDgFgGAAQgFAAgDAFIgBAGIATAAIAAAAg");
	this.shape_43.setTransform(90.125,104.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AALAaIgLgfIgKAfIgKAAIgQgzIANAAIAIAfIALgfIAIAAIAMAfIAIgfIANAAIgQAzg");
	this.shape_44.setTransform(83.65,104.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGgOIANAAIAAASIgNALg");
	this.shape_45.setTransform(76.2,107.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAkIgYhHIAOAAIAOAtIAOgtIAPAAIgYBHg");
	this.shape_46.setTransform(71.925,103.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AALAkIgNgdIgKAAIAAAdIgOAAIAAhHIAbAAQAKABAHAGQAGAGAAAJQAAAHgEAFQgDAEgGACIAQAfgAgMgDIAMAAQAFAAACgDQADgDAAgEQAAgEgDgCQgCgDgFgBIgMAAg");
	this.shape_47.setTransform(66.025,103.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAEAkQgHgBgEgEQgDgEAAgHIAAg3IAMAAIAAA3QAAAEAEABIAFAAIAAALg");
	this.shape_48.setTransform(58.775,103.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEAkQgHgBgEgEQgDgEAAgHIAAg3IAMAAIAAA3QAAAEAEABIAFAAIAAALg");
	this.shape_49.setTransform(55.525,103.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgFAkIAAgzIAMAAIAAAzgAgGgYIAAgLIANAAIAAALg");
	this.shape_50.setTransform(52.325,103.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAMAkIAAgeIgXAAIAAAeIgOAAIAAhHIAOAAIAAAdIAXAAIAAgdIAOAAIAABHg");
	this.shape_51.setTransform(47.525,103.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAIAkIgMgWIgFAGIAAAQIgOAAIAAhHIAOAAIAAAoIAPgVIAQAAIgTAVIAUAfg");
	this.shape_52.setTransform(39.35,103.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLAVQgIgHAAgOQAAgNAIgIQAGgEAIAAQALAAAGAGIgIAJQgEgEgFAAQgDAAgDADQgDAEAAAHQAAAIADAEQADADADAAQAFAAAEgEIAIAJQgGAGgLABQgIAAgGgGg");
	this.shape_53.setTransform(33.925,104.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAUQgEgDAAgFQgCgEAAgIQAAgGACgFQAAgFAEgEQAGgFAJAAQAKAAAHAFQADAEABAFIABALIgBAMQgBAFgDADQgHAHgKAAQgJAAgGgHgAgFgMQgDADAAAJQAAAKADADQACACADAAQAEAAACgCQADgDAAgKQAAgJgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_54.setTransform(28.75,104.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAEAkQgHgBgEgEQgDgEAAgHIAAg3IAMAAIAAA3QAAAEAEABIAFAAIAAALg");
	this.shape_55.setTransform(24.625,103.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAYAaIAAgeQAAgFgDgDQgCgCgEAAQgDAAgDACQgDADAAAEIAAAfIgMAAIAAgeQAAgFgCgDQgDgCgDAAQgEAAgCACQgDADAAAFIAAAeIgNAAIAAgzIANAAIAAAFQAFgFAIAAQAJAAAEAGQAGgGAJAAQAIAAAFAEQAGAGAAAJIAAAgg");
	this.shape_56.setTransform(18.475,104.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAAQAAgMAHgHQAGgHAJABQALAAAGAGQAGAHAAALIAAAFIggAAQAAAFADAEQADACAFAAQAHAAAEgEIAIAIQgEADgEACQgFACgGABQgYAAAAgbgAAKgEIgBgGQgDgFgGAAQgFAAgDAFIgBAGIATAAIAAAAg");
	this.shape_57.setTransform(11.325,104.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAMAkIAAgeIgXAAIAAAeIgOAAIAAhHIAOAAIAAAdIAXAAIAAgdIAOAAIAABHg");
	this.shape_58.setTransform(5.175,103.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAHAhQgHAAgEgEQgDgEAAgHIAAgYIgGAAIAAgKIAGAAIAAgQIAMAAIAAAQIAJAAIAAAKIgJAAIAAAYQAAAEAEAAIAFAAIAAALg");
	this.shape_59.setTransform(-2.375,103.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AARAkIgEgNIgZAAIgEANIgPAAIAbhHIAJAAIAaBHgAAJALIgJgZIgIAZIARAAg");
	this.shape_60.setTransform(-7.2,103.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#006649").s().p("AgQB4QgHgBgFgEQgGgDgFgGQgEgFgBgGQgBgGABgGQABgHAFgFQAFgFAFgDQAGgEAIgBQAIgCAGABQAIABAGAFQAGAEADAEQAEAFACAGQACAHgCAGQgCAGgEAFQgEAGgGADQgHAEgGABIgHABIgJgBgAgeAjIgBhKIgBhRIBNAFIgZCagAgeAjIAAAAIAAAAIAAAAg");
	this.shape_61.setTransform(103.5125,78.7444);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#006649").s().p("AgqB5QgHgBgGgDQgFgEgEgFQgEgGgCgGQgCgFACgHQACgHAEgEQAFgFAFgEQAGgDAIgCQAIgBAGABQAJABAGAEQAGAEADAFQADAFACAGQABAGgCAGQgCAGgDAGQgDAFgHAEQgGADgHACIgHABIgJgCgAg5AnIgCg0QA8gOAFgYQAEgXhGAEIAHg0QAzACAhANQAsAQgEAgQgFApgtAYQgLAGgQAHIgEAXg");
	this.shape_62.setTransform(91.5058,78.5694);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#006649").s().p("AhMBTQgMgPgHgWQgHgWABgYQACgpAZgiQAegqAxAAQAqAAAdAjQAPATAGAUQAGAUgBAXQgCApgZAjQgfAqgxAAQgqAAgdgjgAgcgeQgIAUgBAUQgBAKADAJQAEANAIAGQAKAIANAAQAUAAAKgQQAIgNAAgUQABgVgJgVQgKgVgQAAQgTAAgNAag");
	this.shape_63.setTransform(74.4768,78.575);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#006649").s().p("Ag5BwQgSgJgOgRIgMgTIgHgUQgDgMAAgLQAAgMABgLQACgUAJgUQAJgUAPgSQASgVAWgKQAWgLAaAAQAXAAASAJQAUAJAOASIgUATIgTATQgUgVgZAHQgWAHgRAZQgUAcAHAfQACAQALAKQANAKAWgBQARgBAOgLQANgJAGgRIggAFIgeAGIABgWIADgWIA6gKIA7gIQADAKAAAMQAAAKgDANQgDAMgFAKQgFAKgHAKQgSAcgaANQgaAOgiAAQgXAAgTgIg");
	this.shape_64.setTransform(53.7702,78.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#006649").s().p("AhMBTQgMgPgHgWQgHgWABgYQACgpAZgiQAegqAxAAQAqAAAdAjQAPATAGAUQAGAUgBAXQgCApgZAjQgfAqgxAAQgqAAgdgjgAgcgeQgIAUgBAUQgBAKADAJQAEANAIAGQAKAIANAAQAUAAAKgQQAIgNAAgUQABgVgJgVQgKgVgQAAQgTAAgNAag");
	this.shape_65.setTransform(25.9268,78.575);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#006649").s().p("AgkgzIgbADIgfACIAEg7ICtgPIAMA8IhCADQgEAmAOB+IhLAOg");
	this.shape_66.setTransform(7.225,78.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#006649").s().p("Ag+BzIAehIIgihBIgihDIBNgdIAIAmQAFAXAIAWIAehPIBJAJQggA+gZA3QgYA4gQAzg");
	this.shape_67.setTransform(88.75,50.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#006649").s().p("AhbByIgCi3IAAgmQAvgIAjADQAnADAXAQQAiAYAHAfQADALgBAMQgCAYgMAWQgPAZgcAUQgQALgUAIQgnARg0ACgAgXg0QgDAfAAAWQgBAZACAVQAZgKAPgTQAOgSgCgUQgEgRgOgIQgLgHgTAAIgCAAg");
	this.shape_68.setTransform(70.3792,50.7702);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#006649").s().p("AhoBpQAmhqAShqIBdgMQARBgAqB8IhGAPIgLgoIgtAFIgIAngAgQAjIAeAAIgQhSg");
	this.shape_69.setTransform(51.15,50.625);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#006649").s().p("AhLBAIgBg4IgBhvIBGgHIBFgIIAFAdIAEAdIgnADIglADIgCARIAAAPIAdgFIAdgEIACAWIADAUIglAGIgaAEIgBAdIAmgFIAogFIAEAdIAEAdQgeABgnAGIhTAOg");
	this.shape_70.setTransform(33.875,50.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#006649").s().p("AhdhoQA/gQArABQA7gBAJApQAFAyg3AeQAIALA3A8Ig6AtIhChXQgBAqADAiIhAAPQAGiogHg5gAgchAQgCALAAALIAAAXQAOgGAMgJQAUgOgDgKQgBgJgMAAIgCAAQgKAAgQADg");
	this.shape_71.setTransform(17.375,50.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#006649").s().p("AhWBfQgTgYAHgrIAXiNIBJAFIgLA3IgMA2IgDARQgCANAAAHQAAAaAZAAQASAAAKgLQAKgKAAgQIgRiQIBHAEIAHBNIAHBNQADAlgiATQgaAOg4AGIgSABQgoAAgQgXg");
	this.shape_72.setTransform(101.9413,22.8208);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#006649").s().p("AhMBTQgMgPgHgWQgHgWABgYQACgpAZgiQAegqAxAAQAqAAAdAjQAPATAGAUQAGAUgBAXQgCApgZAjQgfAqgxAAQgqAAgdgjgAgcgeQgIAUgBAUQgBAKADAJQAEANAIAGQAKAIANAAQAUAAAKgQQAIgNAAgUQABgVgJgVQgKgVgQAAQgTAAgNAag");
	this.shape_73.setTransform(82.3768,22.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#006649").s().p("Ag/BzIAfhIIgihBIgihDIBNgdIAIAmQAEAXAJAWIAehPIBJAJQggA+gZA3QgYA4gQAzg");
	this.shape_74.setTransform(63.35,22.575);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#006649").s().p("AhLBAIgBg4IgBhvIBGgHIBFgIIAFAdIAEAdIgnACIglAFIgCAPIAAAPIAdgDIAdgFIACAWIADAVIglAFIgaAEIgBAdIAmgFIAogGIAEAeIAEAdQgeACgnAEIhTAPg");
	this.shape_75.setTransform(39.275,22.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#006649").s().p("AhdhpQA/gPArAAQA7AAAJAqQAFAxg3AeQAIAMA3A7Ig6AtIhChYQgBArADAiIhAAOQAGingHg6gAgcg/QgCAKAAALIAAAXQAOgGAMgIQAUgOgDgMQgBgHgMgBIgCAAQgKAAgQAEg");
	this.shape_76.setTransform(22.775,22.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#006649").s().p("AhnBpQAlhqAShqIBdgMQARBgAqB8IhHAPIgKgoIgtAFIgIAngAgQAjIAeAAIgQhSg");
	this.shape_77.setTransform(3.6,22.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F6A81C").s().p("AA3AYIgJgFQgEgEgDgFQgCgEAAgGQAAgEACgFQADgFAEgDQAEgEAFgCQAFgCAGAAQAGAAAGACQAFACAEAEIAGAIQADAFAAAEQAAAGgDAEIgGAJIgJAFQgGACgGAAQgGAAgFgCgAgLAYIgKgFQgDgEgCgFQgDgEAAgGQAAgEADgFQACgFADgDQAEgEAGgCQAFgCAGAAQAFAAAFACQAGACAEAEQAEADACAFQACAFAAAEQAAAGgCAEQgCAFgEAEIgKAFQgFACgFAAQgGAAgFgCgAhOAYIgJgFQgDgEgCgFQgDgEAAgGQAAgEADgFQACgFADgDQAFgEAEgCQAGgCAGAAQAGAAAGACQAGACADAEQAEADACAFQACAFAAAEQAAAGgCAEQgCAFgEAEIgJAFQgGACgGAAQgGAAgGgCg");
	this.shape_78.setTransform(106.15,-3.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F6A81C").s().p("AgnBOQgNgHgJgLIgJgOIgFgOIgCgPIABgQQACgOAGgOQAGgNAKgNQANgOAPgIQAPgHASAAQAQAAAMAGQAOAGAKANIgOANIgNANQgOgOgSAFQgOAEgMASQgOATAFAVQACALAHAHQAJAHAPgBQAMAAAJgIQAKgGADgMIgWAEIgUAEIABgQIABgPIAogGIAqgGQACAHgBAIQAAAHgCAJIgFAPIgIAOQgNATgSAKQgSAJgXAAQgQAAgNgFg");
	this.shape_79.setTransform(87.855,-9.125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F6A81C").s().p("AhAhMIAygHIAFATQAHAdAHAWQAFANAEAGIAAhSIAzgHQgLBVAGA/IgtAKIgGgIIgWggQgGgHgBgDQAAAaACAYIgtAJg");
	this.shape_80.setTransform(73.275,-9.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F6A81C").s().p("AgYhHIAYgEIAZgEQgFAsgBAlQgBAlADAfIgWAFIgXAFg");
	this.shape_81.setTransform(63.175,-9.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F6A81C").s().p("AgxhIIAxgHQgGA8ABAxIAygFIAFAoQgpACg6ANg");
	this.shape_82.setTransform(55.1,-9.125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F6A81C").s().p("AgxhIIAxgHQgGA8ABAxIAygFIAFAoQgoACg7ANg");
	this.shape_83.setTransform(44.8,-9.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F6A81C").s().p("AhHBJQAZhJAOhKIA/gIQAMBCAdBWIgxAKIgHgbIgfADIgFAbgAgLAYIAVAAIgLg4g");
	this.shape_84.setTransform(32.475,-9.125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F6A81C").s().p("AgUBKQgRgLgLgUQgLgVABgWQAAgXAKgSQAJgUAQgLQARgLAUACQAWADAXAUIgMAOIgMAPQgYgOgNANQgMAKAAAUQABAWANAKQANAMAWgPIAYAbQgTAWgWAEIgIAAQgOAAgQgIg");
	this.shape_85.setTransform(19.9739,-9.1652);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F6A81C").s().p("AgvBNIAPgnQALAGALAAIAJgCQAIgBAHgEQALgEgBgFQgBgGgMAAIgXACQgPADgJAAQgLAAgHgDQgNgFgBgMQgCgXAfgfQAgggAcgCQAcgBAHAfIADARIgVAGIgWAGQgCgJgIAAQgKAAgJAIQgGAHACAGQADAEAKAAIAOgBIAXgCQAZAAAHAMIADAIQAEANgLAQQgOAVgeAPQgQAHgQAAQgPAAgRgGg");
	this.shape_86.setTransform(1.7362,-9.1515);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F6A81C").s().p("AgYhHIAYgEIAZgEQgFAsgBAlQgBAlADAfIgWAFIgXAFg");
	this.shape_87.setTransform(-8.225,-9.15);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F6A81C").s().p("AhAhIQAsgKAdAAQApAAAGAcQADAigmAVQAGAIAmApIgoAfIgtg8QgBAdACAYIgsAJQAEhzgFgogAgTgrIgBAOIAAAQQAJgEAJgGQANgKgCgHQgBgFgIgBIgCAAQgGAAgLADg");
	this.shape_88.setTransform(90.5,-28.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F6A81C").s().p("Ag0AsIAAgnIgBhMIAxgFIAvgFIADATIAEAUIgcACIgZADIgBALIgBAKIAUgCIAUgEIACAPIACAPIgaADIgSAEIAAAUIAagEIAcgEIACAUIADAUQgVACgbADIg5AKg");
	this.shape_89.setTransform(78.025,-28.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F6A81C").s().p("AhdBKQAYhBALhSIAugJIANBPIALhLIAsgEQAKBKAcBSIgwAIIgShQIgKBMIgnACIgKhRIgPBTg");
	this.shape_90.setTransform(63.175,-28.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F6A81C").s().p("AhdBKQAYhBALhSIAugJIANBPIALhLIAsgEQAKBKAcBSIgwAIIgShQIgKBMIgnACIgKhRIgPBTg");
	this.shape_91.setTransform(45.025,-28.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F6A81C").s().p("Ag7BCQgNgQAFgeIAQhiIAyAEIgIAmIgIAlIgCAMIgCAOQAAARASAAQAMAAAHgHQAHgHAAgLIgMhkIAxADIAFA1IAFA2QACAagYANQgRAKgnADIgNABQgbAAgLgQg");
	this.shape_92.setTransform(29.0384,-28.3652);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F6A81C").s().p("AgvBNIAPgnQALAGALAAIAJgCQAIgBAHgEQALgEgBgFQgBgGgMAAIgXACQgPADgJAAQgLAAgHgDQgNgFgBgMQgCgXAfgfQAgggAcgCQAcgBAHAfIADARIgVAGIgWAGQgCgJgIAAQgKAAgJAIQgGAHACAGQADAEAKAAIAOgBIAXgCQAZAAAHAMIADAIQAEANgLAQQgOAVgeAPQgQAHgQAAQgPAAgRgGg");
	this.shape_93.setTransform(15.1362,-28.4015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(3,1,1).p("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");
	this.shape_94.setTransform(52.475,27.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#006649").s().p("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");
	this.shape_95.setTransform(52.5873,50.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F6A81C").s().p("AJPCzIgJgGQgEgDgCgFQgDgFAAgFQAAgGADgFQACgEAEgEQAEgEAFgCQAGgCAGAAQAGAAAFACQAGACADAEIAHAIQACAFAAAGQAAAFgCAFIgHAIIgJAGQgFACgGAAQgGAAgGgCgAIMCzIgJgGQgEgDgCgFQgCgFAAgFQAAgGACgFQACgEAEgEQAEgEAFgCQAGgCAGAAQAGAAAFACQAGACAEAEQAEAEACAEQACAFAAAGQAAAFgCAFQgCAFgEADIgKAGQgFACgGAAQgGAAgGgCgAHKCzIgJgGQgEgDgCgFQgCgFAAgFQAAgGACgFQACgEAEgEQAEgEAFgCQAGgCAGAAQAGAAAGACQAFACAEAEQAEAEACAEQACAFAAAGQAAAFgCAFQgCAFgEADIgJAGQgGACgGAAQgGAAgGgCgACPASIAygHIAFATQAHAdAIAWQAFANAEAHIAAhTIAzgHQgLBWAGA/IgtAKIgdgoQgGgHgBgDQAAAaACAYIgtAJgAE6CtQgNgHgJgLIgJgOIgFgOIgCgPIABgQQACgPAGgOQAGgNAKgNQANgOAPgIQAPgHATAAQAQAAAMAGQAOAGAKANIgbAaQgOgOgSAFQgPAEgMASQgOAUAFAVQACALAHAHQAJAHAPgBQANAAAJgIQAKgGADgMIgWAEIgVAEIACggIBTgMQACAHgBAIQAAAIgCAJIgFAPIgIAOQgNATgSAKQgSAJgYAAQgQAAgNgFgAkPCoIAGgSQAVhBAMhBIBAgIQAMBCAdBXIgxAKIgHgbIggADIgFAbgAjTB3IAWAAIgMg5gAoqCsIAOgnQALAFALAAIAJgBQAKgCAHgDQALgFgBgEQgCgGgMAAIgYACQgPADgJAAQgLAAgGgDQgNgGgBgMQgCgXAfgfQAfghAegCQAbgBAIAgIADAQIgrANQgCgKgIAAQgLAAgKAJQgFAHACAGQACAEALAAIAOgCIAXgBQAZAAAIAMIADAIQADAOgLAQQgNAVgfAOQgPAHgRAAQgQAAgQgFgAlZCoQgRgKgLgUQgLgVABgYQAAgWAKgTQAJgUAQgKQARgMAVADQAWACAXAUIgYAeQgYgOgOAMQgMAKAAAWQABAWANAKQAOALAWgOIAYAaQgTAXgWADIgIABQgPAAgQgJgAgXAWIAwgHQgGA8ABAyIAzgFIAFAoQgoACg7ANgAh+AWIAxgHQgGA8ABAyIAzgFIAFAoQgoACg8ANgABSAWIAygHQgFAsgBAlQgBAlADAgIguAJgAp3AWIAygHQgFAsgBAlQgBAlADAgIguAJgAAPgUIgqAHIgShPIgKBLIgpADIgKhTIgOBVIgwgIQAYhCAMhTIAtgIIAOBOIAMhLIArgDQAKBFAZBOQAVg/AKhMIAugIIAOBOIALhLIAsgDQAKBKAcBSIgwAIIgShPIgKBLIgoADIgKhTIgPBVgAE7ipQAsgLAeAAQApAAAGAdQAEAigmAVQAFAIAmAqIgoAfIgug9QgBAdACAYIgsAKQAEh0gFgogAFoiNIgBAPIAAAPQAKgEAIgFQAOgKgCgHQgBgGgJAAIgCAAQgGAAgLACgADKipIBhgKIAGAoIg1AEIgCAWIApgGIADAeIgsAHIgBAUIA3gIIAFApQgUABgbADIg7ALgAmkgUIAOgnQALAGALAAIAJgCQAKgBAHgEQALgEgBgFQgCgGgMAAIgYACQgPADgJAAQgLAAgGgDQgNgFgBgMQgCgYAfgfQAfggAegCQAbgBAIAfIADARIgrAMQgCgJgIAAQgLAAgKAIQgFAHACAGQACAEALAAIAOgBIAXgCQAZAAAIANIADAIQADANgLAQQgNAVgfAPQgPAHgRAAQgQAAgQgGgAkmgeQgNgRAFgeIAQhiIAzADIgRBMIgBANIgCANQAAASARAAQANAAAHgIQAHgGAAgMIgMhkIAyADIAJBrQACAagXANQgSAKgoAEIgMAAQgcAAgLgPg");
	this.shape_96.setTransform(52.475,-18.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-26.4,-38.8,159,173.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ApIUAQi+AAAAi+MAAAglBIVPAAQC+AAAAC+MAAAAlBg");
	this.shape.setTransform(57.575,105.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-19.9,-22.9,155,256), null);


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
	this.instance.setTransform(-25,-16,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-25,-16,149.1,93.5), null);


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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AlbADQFWASFhgd");
	this.shape.setTransform(56.85,61.9492);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#939598").s().p("AgcA3QgJgKgBgRIAXAAQACAPANAAQAHAAAEgDQAFgFAAgOQAAgXgQAAQgLAAgDAJIgWAAIAAhHIBIAAIAAAWIgzAAIAAAbQAHgGAMAAQAPAAAJAIQALALAAAXQAAALgCAHQgDAJgGAGQgLALgRAAQgSgBgKgJg");
	this.shape_1.setTransform(88.925,62.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939598").s().p("AgZBAIAohqIggAAIAAAUIgXAAIAAgpIBRAAIAAAVIgpBqg");
	this.shape_2.setTransform(79.625,62.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#939598").s().p("AgWBBIAZg1QgDABgFAAQgNAAgKgKQgLgKAAgRQAAgSAMgLQAKgLARAAQARABALAJQAMAMAAASQAAAMgLAVIgbA4gAgKgmQgGAFAAAJQABAJAEAEQAFAGAGAAQAIAAAEgFQAEgGABgIQgBgJgEgFQgEgFgIABQgGgBgEAFg");
	this.shape_3.setTransform(70.25,62.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939598").s().p("AgMgbIAZAAIAAAjIgZATg");
	this.shape_4.setTransform(63.25,69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939598").s().p("AgmBBIAAgWIAvg2QAGgIABgIQAAgHgFgEQgEgFgHABQgOAAgBAQIgXAAQAAgRALgLQALgKAQAAQARAAALAKQALALAAAQQAAAJgEAHQgCAFgHAIIgjApIAwAAIAAAWg");
	this.shape_5.setTransform(56.4,62.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#939598").s().p("AgmBBIAAgWIAvg2QAHgIAAgIQgBgHgEgEQgDgFgIABQgPAAAAAQIgXAAQAAgRAMgLQALgKAPAAQASAAAKAKQALALAAAQQAAAJgDAHQgDAFgHAIIgjApIAwAAIAAAWg");
	this.shape_6.setTransform(47.1,62.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939598").s().p("AABBAIAAhmIgZAXIAAgaIAZgWIAYAAIAAB/g");
	this.shape_7.setTransform(37.175,62.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939598").s().p("AgGBTIAAgUQgbAAgPgRIAPgQQALAKASABIAAghIgFAAQgQgCgKgIQgJgJAAgQQAAgQAKgKQAKgLASgCIAAgQIARAAIAAAQQAVACAOANIgQAQQgHgIgOgBIAAAfIAHABQAQADAIAHQAKAJAAARQAAAQgLALQgLAJgRADIAAAUgAAJApQAQgCABgOQAAgHgFgEQgDgDgJgBgAgTgcQAAAGADADQAFAEAHABIAAgeQgPACAAAOg");
	this.shape_8.setTransform(27.5,62.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#939598").s().p("AgMAmIAAgbIAaAAIAAAbgAgMgKIAAgbIAaAAIAAAbg");
	this.shape_9.setTransform(16.35,65.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#939598").s().p("AgtBAIAAh/IAwAAQAUAAAMALQALAMAAARQAAAQgLALQgMAMgUAAIgXAAIAAAwgAgUgGIAWAAQAJAAAFgEQAFgGAAgHQAAgIgFgFQgFgFgJAAIgWAAg");
	this.shape_10.setTransform(8.6,62.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939598").s().p("AAUBAIgZgzIgSAAIAAAzIgZAAIAAh/IAyAAQASAAAMALQALALAAARQAAANgHAJQgGAHgKAEIAcA3gAgXgHIAXAAQAIAAAFgEQAFgGAAgHQAAgHgFgFQgFgFgIAAIgXAAg");
	this.shape_11.setTransform(-2.5,62.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#939598").s().p("AguAwIAQgQQALALATAAQAXAAAAgQQAAgHgEgEQgEgDgHgCIgPgBQgRgDgIgHQgJgJAAgQQAAgRAMgLQAMgLATAAQAaAAAQAPIgQAPQgJgJgRAAQgJAAgFAGQgFAEAAAHQAAAGAEADQAEAEAIABIAOACQAQADAIAHQAKAJAAARQAAATgNAKQgOAKgUAAQgeAAgQgRg");
	this.shape_12.setTransform(-14,62.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#939598").s().p("AAhBAIAAhJIgYAvIgQAAIgZgvIAABJIgZAAIAAh/IAYAAIAhBEIAhhEIAZAAIAAB/g");
	this.shape_13.setTransform(-25.9,62.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#939598").s().p("AgRAoQgIgHAAgLIAAgrQAAgMAIgHQAHgHAKAAQALAAAIAHQAHAHAAAMIAAArQAAALgHAHQgIAIgLAAQgKAAgHgIgAgLghQgEAEAAAIIAAAqQAAAIAEAFQAFAFAGAAQAIAAAEgFQAEgFAAgIIAAgqQAAgIgEgEQgEgGgIAAQgGAAgFAGg");
	this.shape_14.setTransform(67.675,38.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#939598").s().p("AgSAoQgJgHAAgMQAAgPAPgHQgNgHAAgOQAAgLAIgHQAHgHAKAAQALAAAIAHQAHAHAAALQAAAOgMAHQAOAHAAAPQAAAMgIAHQgIAIgMAAQgLAAgHgIgAgMAIQgFAFAAAIQAAAIAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgIQAAgIgFgFQgFgGgIAAQgHAAgFAGgAgLgiQgEAFAAAHQAAAIAEAEQAFAFAGAAQAHAAAFgFQAFgEAAgIQAAgHgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape_15.setTransform(61.125,38.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#939598").s().p("AgZAvIAAgIIAkguQAGgHAAgHQAAgIgFgEQgFgFgHAAQgGAAgFAEQgEAEAAAJIgKAAQAAgLAHgHQAIgHAKAAQALAAAIAGQAHAHAAAMQAAAJgHAKIghApIAoAAIAAAIg");
	this.shape_16.setTransform(54.65,38.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#939598").s().p("AgRAoQgIgHAAgLIAAgrQAAgMAIgHQAHgHAKAAQALAAAIAHQAHAHAAAMIAAArQAAALgHAHQgIAIgLAAQgKAAgHgIgAgLghQgEAEAAAIIAAAqQAAAIAEAFQAFAFAGAAQAIAAAEgFQAEgFAAgIIAAgqQAAgIgEgEQgEgGgIAAQgGAAgFAGg");
	this.shape_17.setTransform(48.075,38.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#939598").s().p("AAEAvIAAhSIgQAPIAAgLIAQgPIAKAAIAABdg");
	this.shape_18.setTransform(41.1,38.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#939598").s().p("AgRAoQgIgHAAgLIAAgrQAAgMAIgHQAHgHAKAAQALAAAIAHQAHAHAAAMIAAArQAAALgHAHQgIAIgLAAQgKAAgHgIgAgLghQgEAEAAAIIAAAqQAAAIAEAFQAFAFAGAAQAIAAAEgFQAEgFAAgIIAAgqQAAgIgEgEQgEgGgIAAQgGAAgFAGg");
	this.shape_19.setTransform(34.975,38.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#939598").s().p("AADAvIAFgeIgUAAIgFAeIgKAAIAFgeIgMAAIAAgIIAOAAIADgSIgNAAIAAgIIAOAAIAEgdIAKAAIgEAdIAUAAIAEgdIAKAAIgFAdIAMAAIAAAIIgNAAIgDASIAMAAIAAAIIgNAAIgFAegAgLAJIAUAAIADgSIgUAAg");
	this.shape_20.setTransform(27.725,38.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#939598").s().p("AAPAvIgTghIgNAOIAAATIgJAAIAAhdIAJAAIAAA+IAcghIAMAAIgWAYIAaAog");
	this.shape_21.setTransform(17.525,38.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#939598").s().p("AgQAZQgIgJAAgQQAAgPAIgJQAIgIALAAQAIAAAEACQAFACAFAFIgHAGQgGgHgJAAQgIAAgFAHQgFAGAAALQAAALAFAGQAFAIAIAAQAJAAAGgIIAHAGQgFAGgFACQgEACgIAAQgLAAgIgIg");
	this.shape_22.setTransform(10.85,40.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#939598").s().p("AgRAaQgJgIABgSQgBgRAJgIQAHgHAKAAQALAAAIAHQAHAIABARQgBASgHAIQgIAHgLAAQgKAAgHgHgAgLgTQgFAFAAAOQAAAPAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgPQAAgOgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape_23.setTransform(4.35,40.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#939598").s().p("AAJArQgIAAgEgGQgEgEAAgIIAAgnIgIAAIAAgHIAIAAIAAgVIAJAAIAAAVIAOAAIAAAHIgOAAIAAAnQAAAKAJAAIAFAAIAAAIg");
	this.shape_24.setTransform(-1.125,39.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#939598").s().p("AgfAjIAHgHQAKALAOAAQALAAAGgFQAFgFAAgIQAAgIgEgEQgEgDgIgBIgKgCQgLgCgHgEQgHgGAAgLQAAgNAIgHQAJgHAMAAQARAAALAKIgGAHQgJgIgNAAQgIAAgGAEQgFAFAAAIQAAAHAEAEQAFAEAIABIAJACQAMABAGAEQAHAHAAAMQAAAMgIAHQgJAIgPAAQgTAAgMgNg");
	this.shape_25.setTransform(-6.925,38.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#283A7C").s().p("AghBGQgPgOAAgWIAAhEQAAgVAPgOQANgMAUAAQAVAAAOAMQAOAOAAAVIAABEQAAAWgOAOQgOAMgVAAQgUAAgNgMgAgNgxQgGAGAAAKIAABDQAAAKAGAGQAFAGAIgBQAJABAFgGQAGgGAAgKIAAhDQAAgKgGgGQgFgGgJAAQgIAAgFAGg");
	this.shape_26.setTransform(89.125,21.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#283A7C").s().p("AghBGQgPgOAAgWIAAhEQAAgVAPgOQANgMAUAAQAVAAAOAMQAOAOAAAVIAABEQAAAWgOAOQgOAMgVAAQgUAAgNgMgAgNgxQgGAGAAAKIAABDQAAAKAGAGQAFAGAIgBQAJABAFgGQAGgGAAgKIAAhDQAAgKgGgGQgFgGgJAAQgIAAgFAGg");
	this.shape_27.setTransform(77.325,21.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#283A7C").s().p("AACBRIAAiBIggAdIAAggIAggdIAdAAIAAChg");
	this.shape_28.setTransform(64.825,21.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#283A7C").s().p("AgjBHQgPgMgBgZIAeAAQAAALAHAGQAGAEAIAAQAKABAGgGQAGgGAAgLQAAgKgGgGQgGgGgKAAIgEAAIAAgZIAEAAQAUAAAAgUQAAgKgGgGQgGgFgIAAQgIAAgFAFQgGAFAAAJIgeAAQABgUAOgOQAOgMAUABQAVgBAOANQAOANAAAVQAAAXgSAKQAVAKAAAaQAAAXgQAOQgOALgWAAQgVAAgOgLg");
	this.shape_29.setTransform(53.625,21.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#283A7C").s().p("Ag0BRIAAgZIBEhsIhCAAIAAgcIBoAAIAAAZIhFBsIBFAAIAAAcg");
	this.shape_30.setTransform(37.1,21.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#283A7C").s().p("AAJBRQgQAAgKgKQgIgKAAgOIAAh/IAdAAIAAB9QAAALAKAAIAMAAIAAAZg");
	this.shape_31.setTransform(23.375,21.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#283A7C").s().p("AgzAAQAAgcAPgQQAOgQAWAAQAYAAAOAQQAOAQAAAZIAAAMIhJAAQAAAMAGAHQAHAIAMAAQAPAAAMgMIASASQgKAKgKAEQgKAFgQAAQg2AAAAg9gAAXgKQgBgHgCgGQgGgMgOAAQgNAAgGAMQgCAGAAAHIAsAAIAAAAg");
	this.shape_32.setTransform(13.525,23.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#283A7C").s().p("AglBHQgHgIgDgPQgCgJAAgSQAAgSACgIQADgPAHgIQALgLASAAQASAAAKAMIAAg2IAeAAIAACiIgdAAIAAgMQgLANgRAAQgTAAgLgLgAgQgCQgDAGAAARQAAARADAIQAFAJALAAQAMAAAFgJQADgIAAgRQAAgRgDgGQgFgKgMAAQgLAAgFAKg");
	this.shape_33.setTransform(1.175,21.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#283A7C").s().p("AgkAuQgHgIgDgLQgDgKAAgRQAAgQADgKQADgLAHgIQAOgPAWAAQAXAAAOAPQAIAIADALQACAKAAAQQAAARgCAKQgDALgIAIQgOAPgXAAQgWAAgOgPgAgNgcQgGAHAAAVQAAAWAGAHQAGAFAHAAQAJAAAFgFQAHgHAAgWQAAgVgHgHQgFgFgJAAQgHAAgGAFg");
	this.shape_34.setTransform(-10.575,23.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#283A7C").s().p("AAqBRIAAhdIgfA8IgUAAIggg8IAABdIgfAAIAAihIAeAAIAqBXIAqhXIAgAAIAAChg");
	this.shape_35.setTransform(-25.45,21.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#283A7C").s().p("AgpBRIAAgaIAHAAQAGAAADgCQAEgDACgGIAFgPIgohtIAeAAIAZBJIAXhJIAfAAIgzCJQgDAKgFAFQgIAJgRAAg");
	this.shape_36.setTransform(67,1.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#283A7C").s().p("AgzAAQAAgcAPgQQAOgQAWAAQAYAAAOAQQAOAQAAAZIAAAMIhJAAQAAAMAGAHQAHAIAMAAQAPAAAMgMIASASQgKAKgKAEQgKAFgQAAQg2AAAAg9gAAXgKQgBgHgCgGQgGgMgOAAQgNAAgGAMQgCAGAAAHIAsAAIAAAAg");
	this.shape_37.setTransform(55.675,-0.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#283A7C").s().p("AAJBRQgQAAgKgKQgIgKAAgOIAAh/IAdAAIAAB9QAAALAKAAIAMAAIAAAZg");
	this.shape_38.setTransform(46.725,-2.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#283A7C").s().p("AASBRIgdgxIgMAOIAAAjIgeAAIAAihIAeAAIAABbIAmgwIAkAAIgqAvIAtBHg");
	this.shape_39.setTransform(37.45,-2.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#283A7C").s().p("AATA8IAAhHQAAgLgFgFQgGgGgIAAQgHAAgFAGQgHAFAAALIAABHIgdAAIAAh2IAcAAIAAALQAMgMARAAQASAAAKAKQAMANABAVIAABLg");
	this.shape_40.setTransform(24.55,-0.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#283A7C").s().p("AgOBSIAAh2IAdAAIAAB2gAgOg5IAAgXIAdAAIAAAXg");
	this.shape_41.setTransform(15.375,-2.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#283A7C").s().p("AgqA8IAAh2IAdAAIAAALQAKgMASAAQARAAALALIgWAXQgHgIgIAAQgHABgFAFQgHAGABAKIAABHg");
	this.shape_42.setTransform(8.45,-0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#283A7C").s().p("Ag6BRIAAihIBAAAQAYAAANAMQAOAMAAAVQAAANgHAKQgGAIgIADQAXAJAAAaQAAAXgOAMQgOAMgWAAgAgaA1IAgAAQAKAAAGgGQAFgFAAgJQAAgJgFgFQgGgGgKAAIggAAgAgagOIAeAAQAKAAAFgGQAGgFAAgIQAAgJgGgFQgFgFgKAAIgeAAg");
	this.shape_43.setTransform(-4.225,-2.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#283A7C").s().p("AgjBFQgPgOABgXQAAgQANgaIAihHIAgAAIghBDQAEgCAHAAQARAAANANQANAMgBAXQAAAWgOAPQgOANgWAAQgVAAgOgNgAgOAOQgGAHAAALQAAAKAGAHQAGAGAIAAQAJAAAGgGQAGgHAAgKQAAgMgGgFQgGgHgJAAQgIAAgGAGg");
	this.shape_44.setTransform(72.55,-26.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#283A7C").s().p("AgwBSIAAgbIA7hFQAJgKAAgKQAAgJgFgGQgGgFgJAAQgTAAAAAVIgdAAQAAgWAOgNQAOgNAUAAQAWAAAOANQANANAAAVQAAALgEAJQgDAGgKAKIgsA1IA9AAIAAAbg");
	this.shape_45.setTransform(60.875,-26.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#283A7C").s().p("AghBGQgPgNAAgXIAAhDQAAgXAPgNQANgNAUAAQAVAAAOANQAOANAAAXIAABDQAAAXgOANQgOANgVAAQgUAAgNgNgAgNgxQgGAGAAAKIAABDQAAAKAGAGQAFAFAIABQAJgBAFgFQAGgGAAgKIAAhDQAAgKgGgGQgFgGgJAAQgIAAgFAGg");
	this.shape_46.setTransform(48.925,-26.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#283A7C").s().p("AgwBSIAAgbIA7hFQAJgKAAgKQAAgJgFgGQgGgFgJAAQgTAAAAAVIgdAAQAAgWAOgNQAOgNAUAAQAWAAAOANQANANAAAVQAAALgEAJQgDAGgKAKIgsA1IA9AAIAAAbg");
	this.shape_47.setTransform(37.225,-26.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#283A7C").s().p("AAZA7IgZhJIgXBJIgZAAIglh1IAgAAIATBIIAYhIIAVAAIAZBIIAThIIAeAAIgkB1g");
	this.shape_48.setTransform(18.1,-24.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#283A7C").s().p("AgzAAQAAgcAPgQQAOgQAWAAQAYAAAOAQQAOAQAAAZIAAAMIhJAAQAAAMAGAHQAHAIAMAAQAPAAAMgMIASASQgKAKgKAEQgKAFgQAAQg2AAAAg9gAAXgKQgBgHgCgGQgGgMgOAAQgNAAgGAMQgCAGAAAHIAsAAIAAAAg");
	this.shape_49.setTransform(3.775,-24.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#283A7C").s().p("AAiBRIhAhiIAABiIgfAAIAAihIAcAAIA/BiIAAhiIAgAAIAAChg");
	this.shape_50.setTransform(-10.05,-26.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-37.2,-45,134.5,120.6), null);


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
	this.instance_1 = new lib.AWARDS();
	this.instance_1.setTransform(-18,-56,0.432,0.432);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D376C").s().p("AAAAMIgKA8IgoACQgJhBgXhDIArgIIAOBCIAIhHIAjgCIAKBMIANhKIAqAHQgVA6gLBJIgsAHg");
	this.shape.setTransform(55.175,28.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D376C").s().p("AguAzQgIgJgEgOQgFgOABgOQABgaAPgUQATgaAeAAQAaAAASAWQAJALAEANQAEAMgBAOQgBAagQAVQgTAageAAQgaAAgRgWgAgRgSQgFAMAAAMQgBAHACAFQACAIAFAEQAGAEAIAAQAMABAHgKQAEgJABgMQAAgMgFgOQgHgMgKAAQgLAAgIAQg");
	this.shape_1.setTransform(41.3086,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D376C").s().p("Ag5hEIAtgGIAEARQAGAaAHATQAEAMAEAGIAAhKIAtgGQgJBMAFA4IgpAJIgFgHIgTgdQgGgGgBgDQAAAXACAWIgoAIg");
	this.shape_2.setTransform(29.325,28.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D376C").s().p("Ag0AEQABg6gDgLQAngJAWACQAWABANAKQAMALAAAUQAAARgIANQgIAKgNAHQgQAKgVADQgBANADAaIgrAEIABhFgAgPgnIACAkQANgBAJgHQAHgGABgJQACgLgKgEIgIgBQgGAAgKADg");
	this.shape_3.setTransform(13.65,28.8638);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D376C").s().p("AguAzQgIgJgEgOQgFgOABgOQABgaAPgUQATgaAeAAQAaAAASAWQAJALAEANQAEAMgBAOQgBAagQAVQgTAageAAQgaAAgRgWgAgRgSQgFAMAAAMQgBAHACAFQACAIAFAEQAGAEAIAAQAMABAHgKQAEgJABgMQAAgMgFgOQgHgMgKAAQgLAAgIAQg");
	this.shape_4.setTransform(2.0086,28.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D376C").s().p("AAIATIgVAEQABAXACARIgsAJIgBiJIAwgHQgFAngBAbIAVgDIAAg4IAwgHQgJBQAGA3IgtAJg");
	this.shape_5.setTransform(-9.675,28.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D376C").s().p("AgqBFIANgjQAKAFAKAAIAIgBQAHgCAGgDQAKgEgBgEQgBgFgLAAIgUACQgOACgIAAQgJAAgGgCQgMgFgBgLQgBgUAbgcQAcgdAagCQAYAAAHAcIADAOIgTAGIgUAGQgCgJgHAAQgJAAgIAIQgFAGACAFQACAEAKAAIALgBIAVgCQAWAAAHAKIADAHQADANgKAOQgMATgcANQgNAGgPAAQgNAAgPgFg");
	this.shape_6.setTransform(-21.2443,28.8246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5A91B").s().p("AmFCiQhDAAgwgvQgwgwAAhDQAAhCAwgwQAwgvBDgBIMLAAQBEABAvAvQAwAwAABCQAABDgwAwQgvAvhEAAg");
	this.shape_7.setTransform(17.65,28.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(-37.6,-56,110.5,100.5), null);


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
	this.shape.graphics.f("#00FF00").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(150,300.0046,1.875,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.instance.setTransform(126.7,185.9,1,1,0,0,0,99.2,49.2);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(127.55,87.45,1,1,0,0,0,116.5,73);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.setTransform(128.05,18.3,1,0.9219,0,0,0,126.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-18,-19,155.1,236.1), null);


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
	this.ad_clickBtn.setTransform(80,125,0.5333,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(360));

	// CTA
	this.instance = new lib.Symbol3_1();
	this.instance.setTransform(142,588.55,1,1,0,0,0,76,-80.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({y:468.55},6,cjs.Ease.get(1)).wait(336));

	// New 2026 Brinkley Model Z 3100 Stock #010280 MSRP: $122,975
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(149.95,407.65,1,1,0,0,0,128,129.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},7).wait(342));

	// READY TO HIT THE ROAD!
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(149.4,191.3,1,1,0,0,0,122.2,71.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({alpha:1},5).wait(350));

	// LOGO
	this.instance_3 = new lib.Symbol6();
	this.instance_3.setTransform(150.5,42,1,1,0,0,0,123.5,48);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},5).wait(355));

	// Layer_2
	this.instance_4 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(360));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,301);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,713.6);


// stage content:
(lib.WFSB_215213_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(80.0153,300.0046,0.5318,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	mask.setTransform(79.9998,299.9924);

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
	this.instance.setTransform(150,52.1,1,0.4167,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,299.5,220.5,301);
// library properties:
lib.properties = {
	id: '9AB1DC1B8C18844BBBA000473B7B24CE',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"AWARDS.png", id:"AWARDS"},
		{src:"BG.jpg", id:"BG"},
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
an.compositions['9AB1DC1B8C18844BBBA000473B7B24CE'] = {
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