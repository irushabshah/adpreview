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



(lib.BG_320x50 = function() {
	this.initialize(img.BG_320x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.Corner = function() {
	this.initialize(img.Corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,72);


(lib.IMG = function() {
	this.initialize(img.IMG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,150);


(lib.kickoffasummerofsavings_tobeused_S = function() {
	this.initialize(img.kickoffasummerofsavings_tobeused_S);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,474);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,107);


(lib.Sparkle = function() {
	this.initialize(img.Sparkle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,207);// helper functions:

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
	this.instance = new lib.kickoffasummerofsavings_tobeused_S();
	this.instance.setTransform(-139.95,-61.4,0.2592,0.2592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-139.9,-61.4,279.9,122.9), null);


(lib.sparkle1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Sparkle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sparkle1, new cjs.Rectangle(0,0,207,207), null);


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
	this.instance.setTransform(-67,-84,0.5574,0.5574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(-67,-84,154.4,59.7), null);


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
	this.instance = new lib.IMG();
	this.instance.setTransform(-621,-130,0.522,0.522);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Img1, new cjs.Rectangle(-621,-130,160.3,78.3), null);


(lib.Head = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#02216C").s().p("AgOAhQgIgDgFgFIAKgLQAGAGALAAQAMAAAAgHQAAgFgHgCIgKAAQgTgCAAgQQAAgKAHgGQAIgGAKAAQARAAAJAIIgKAKQgGgEgLAAQgIAAAAAHQAAAEAHABIAKABQATADAAARQABAKgJAGQgHAFgNAAQgIAAgGgBg");
	this.shape.setTransform(-52.7,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02216C").s().p("AgcAAQgBgPAJgKQAHgIANgBQAOABAHAIQAIAJAAAPIAAAGIgpAAQAAAHAEAEQAEAEAGAAQAIAAAHgGIAKAKQgFAFgFADQgHACgIAAQgfABABgjgAANgFIgCgIQgDgGgIAAQgHAAgDAGIgCAIIAZAAIAAAAg");
	this.shape_1.setTransform(-59.35,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#02216C").s().p("AgPAbQgKgIAAgTQAAgSAKgJQAIgGALgBQAOABAIAIIgLAMQgFgGgGAAQgFABgEAEQgDAEAAAKQAAAKADAFQAEAEAFAAQAGAAAFgFIALALQgJAJgNAAQgLAAgIgHg");
	this.shape_2.setTransform(-65.925,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02216C").s().p("AgHAuIAAhAIAQAAIAABAgAgIggIAAgNIARAAIAAANg");
	this.shape_3.setTransform(-70.925,14.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02216C").s().p("AgYAiIAAhCIARAAIAAAGQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAGIAAAng");
	this.shape_4.setTransform(-75.175,15.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#02216C").s().p("AgbAuIAAhbIAQAAIAAAHQAGgHAKAAQAKAAAGAGQAEAEACAIIABAQIgBAPQgCAIgEAEQgGAHgKAAQgKAAgFgHIAAAegAgJgZQgBAEAAAKQAAAKABADQADAFAGAAQAHAAACgFQACgDAAgKQAAgKgCgEQgCgFgHAAQgGAAgDAFg");
	this.shape_5.setTransform(-82.075,17.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02216C").s().p("AgdAAQAAgPAIgKQAJgIAMgBQAOABAIAIQAHAJABAPIAAAGIgqAAQAAAHAEAEQAEAEAGAAQAIAAAHgGIAKAKQgFAFgGADQgFACgJAAQgeABgBgjgAANgFIgCgIQgDgGgIAAQgHAAgEAGIgBAIIAZAAIAAAAg");
	this.shape_6.setTransform(-92.35,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#02216C").s().p("AAFAuQgIAAgGgGQgFgFABgJIAAhHIAPAAIAABGQAAAHAGAAIAGAAIAAAOg");
	this.shape_7.setTransform(-97.75,14.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02216C").s().p("AgWAcQgFgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgEQAAgKgLAAQgJAAgFAGIgKgLQAFgFAFgCQAFgCAJAAQAcAAAAAXIAAAsIgRAAIAAgGQgGAGgJAAQgLAAgHgGgAgLANQAAAIALAAQAFAAAEgEQACgCAAgGIAAgEIgLAAQgLAAAAAIg");
	this.shape_8.setTransform(-103.75,15.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02216C").s().p("AgOAhQgIgDgFgFIAKgLQAGAGAMAAQALAAAAgHQAAgFgHgCIgKAAQgTgCAAgQQAAgKAHgGQAIgGAKAAQARAAAJAIIgKAKQgGgEgKAAQgJAAAAAHQAAAEAHABIAKABQATADAAARQABAKgJAGQgHAFgNAAQgIAAgGgBg");
	this.shape_9.setTransform(-110.3,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#02216C").s().p("AAOAiIgOgqIgNAqIgOAAIgUhDIASAAIAKApIAOgpIALAAIAOApIALgpIASAAIgVBDg");
	this.shape_10.setTransform(-121.35,15.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgBgFAAgKQAAgJABgFQACgGAEgGQAIgHAMgBQANABAIAHQAEAGACAGQABAFAAAJQAAAKgBAFQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgQQgDAEAAAMQAAAMADAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgMgEgEQgDgDgFAAQgEAAgDADg");
	this.shape_11.setTransform(-129.75,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02216C").s().p("AAFAuQgIAAgGgGQgFgFABgJIAAhHIAPAAIAABGQAAAHAGAAIAGAAIAAAOg");
	this.shape_12.setTransform(-135.1,14.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02216C").s().p("AgXAuIAAgPIAEAAIAFgBQACgCABgDIAEgIIgYg+IASAAIANApIANgpIASAAIgcBNQgCAGgDADQgEAFgKAAg");
	this.shape_13.setTransform(-35.9,3.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02216C").s().p("AgUAoQgFgEgBgJIgBgQIABgOQABgIAFgFQAGgFAKAAQAKgBAGAHIAAgeIAQAAIAABaIgQAAIAAgGQgGAHgKAAQgKAAgGgGgAgIgBQgCADAAAJQAAALACAEQACAFAGAAQAHAAADgFQACgFAAgKQAAgJgCgDQgDgFgHgBQgGABgCAFg");
	this.shape_14.setTransform(-42.875,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#02216C").s().p("AgWAcQgFgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgEQAAgKgMAAQgHAAgFAGIgLgLQAFgFAGgCQAEgCAJAAQAcAAAAAXIAAAsIgQAAIAAgGQgHAGgJAAQgLAAgHgGgAgLANQABAIAJAAQAGAAADgEQADgCAAgGIAAgEIgMAAQgJAAgBAIg");
	this.shape_15.setTransform(-49.95,2.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02216C").s().p("AgcAAQAAgQAIgIQAHgJANAAQAOAAAHAJQAJAIgBAPIAAAGIgpAAQAAAHAEAEQAEAEAGAAQAIAAAHgGIALAKQgGAFgFADQgHACgIAAQgfABABgjgAANgFIgCgIQgDgGgIgBQgHABgDAGIgCAIIAZAAIAAAAg");
	this.shape_16.setTransform(-56.75,2.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_17.setTransform(-62.775,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#02216C").s().p("AAFAuQgIAAgGgGQgFgFABgJIAAhHIAPAAIAABGQAAAHAGAAIAHAAIAAAOg");
	this.shape_18.setTransform(-68.05,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#02216C").s().p("AgWAcQgFgFAAgKQAAgIAGgFQAGgFALAAIAPAAIAAgEQAAgKgLAAQgJAAgFAGIgKgLQAFgFAFgCQAFgCAJAAQAcAAAAAXIAAAsIgRAAIAAgGQgGAGgJAAQgLAAgHgGgAgLANQAAAIALAAQAFAAAEgEQACgCAAgGIAAgEIgLAAQgLAAAAAIg");
	this.shape_19.setTransform(-74.05,2.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#02216C").s().p("AgYAiIAAhDIARAAIAAAHQAGgHAKAAQAJAAAHAGIgNANQgEgEgFAAQgDAAgDADQgEAEAAAFIAAAog");
	this.shape_20.setTransform(-82.725,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#02216C").s().p("AgUAcQgHgHAAgMIAAgqIARAAIAAAoQAAAGAEADQADADADAAQAEAAADgDQAFgDAAgGIAAgoIAQAAIAABCIgQAAIAAgGQgHAHgJAAQgKAAgGgGg");
	this.shape_21.setTransform(-89.9,2.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQABAFABAJQgBAJgBAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_22.setTransform(-97.1,2.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02216C").s().p("AgKAuIAAgzIgHAAIAAgNIAHAAIAAgIQAAgJAEgFQAGgFAIAAIAKAAIAAANIgHAAQgFABAAAFIAAAIIAMAAIAAANIgMAAIAAAzg");
	this.shape_23.setTransform(-105.675,0.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQABAFABAJQgBAJgBAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_24.setTransform(-111.5,2.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02216C").s().p("AgbAuIAAhbIAQAAIAAAHQAGgHAKAAQAKAAAGAGQAEAEACAIIABAQIgBAPQgCAIgEAEQgGAHgKAAQgKAAgFgHIAAAegAgJgZQgBAEAAAKQAAAKABADQADAFAGAAQAHAAACgFQACgDAAgKQAAgKgCgEQgCgFgHAAQgGAAgDAFg");
	this.shape_25.setTransform(-121.425,3.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgCgGABgJQgBgJACgFQACgHAEgFQAIgHAMAAQANAAAIAHQAEAFACAHQACAFgBAJQABAJgCAGQgCAGgEAFQgIAIgNAAQgMAAgIgIgAgHgPQgDADAAAMQAAAMADAEQADADAEAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgEAAgDAEg");
	this.shape_26.setTransform(-128.75,2.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#02216C").s().p("AAJArQgJAAgFgGQgFgGAAgIIAAggIgHAAIAAgNIAHAAIAAgUIAQAAIAAAUIAMAAIAAANIgMAAIAAAfQAAAHAGAAIAGAAIAAAOg");
	this.shape_27.setTransform(-134.575,1.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#02216C").s().p("AALAiIAAgoQAAgGgEgDQgCgDgFAAQgDAAgEADQgDADAAAGIAAAoIgRAAIAAhDIARAAIAAAHQAGgHAJAAQAKAAAGAGQAHAHAAAMIAAAqg");
	this.shape_28.setTransform(-143.4,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#02216C").s().p("AgUAaQgEgFgCgGQgCgGAAgJQAAgJACgFQACgHAEgFQAIgHAMAAQANAAAIAHQAFAFABAHQABAFABAJQgBAJgBAGQgBAGgFAFQgIAIgNAAQgMAAgIgIgAgGgPQgFADAAAMQAAAMAFAEQADADADAAQAFAAADgDQAEgEAAgMQAAgMgEgDQgDgEgFAAQgDAAgDAEg");
	this.shape_29.setTransform(-150.65,2.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#02216C").s().p("AgiBOIAHgjIAiAAIgGAjgAgSAaIALhnIAqAAIgeBng");
	this.shape_30.setTransform(-37.125,-17.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#02216C").s().p("AgqBLQgNgFgLgMIAbgXQALAMAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgDQglgKAAgcQAAgZASgPQASgPAcAAQAfAAAQAUIgaAWQgIgKgSAAQgKAAgGAGQgGAFAAAGQAAAGAEADIAIADIAMADQAUAFAJAKQAIAJAAASQAAAagUAOQgSANgaAAQgUAAgMgFg");
	this.shape_31.setTransform(-47.875,-17.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#02216C").s().p("AgtBOIAZh7IglAAIAHggIBsAAIgGAgIgkAAIgYB7g");
	this.shape_32.setTransform(-58.525,-17.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02216C").s().p("AAMBOIgghQIgRBQIgkAAIAgibIAdAAIAhBQIARhQIAkAAIggCbg");
	this.shape_33.setTransform(-73,-17.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#02216C").s().p("Ag0BCQgOgNAAgUIACgNIAThiIAlAAIgUBjIgCAJQABARAPAAQAUAAAEgbIAUhiIAlAAIgVBkQgFAdgTAPQgQANgWAAQgWAAgOgNg");
	this.shape_34.setTransform(-86.55,-17.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAXAAAOAOQAMANAAATQAAANgEAUQgFAZgEAKQgFAQgKAKQgRATgbAAQgXAAgOgPgAgGgnQgHAHgGAgQgEAVAAAKQAAAIAEAEQAEAEAHAAQAIAAAHgHQAHgHAGghQAEgUAAgKQAAgIgEgEQgEgFgHAAQgJAAgGAIg");
	this.shape_35.setTransform(-100.475,-17.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAYAAANAPQAMANAAAWIgkAAQgBgSgOAAQgJAAgGAHQgHAHgHAhQgEAVAAAKQAAAQAQAAQAOAAAGgRIAmAAQgQAygtAAQgYAAgOgPg");
	this.shape_36.setTransform(-113.125,-17.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#02216C").s().p("AgqBLQgNgFgLgMIAbgXQALAMAVAAQAKAAAHgFQAHgFAAgHQAAgKgNgDIgLgDQglgKAAgcQAAgZASgPQASgPAcAAQAfAAAQAUIgaAWQgIgKgSAAQgKAAgGAGQgGAFAAAGQAAAGAEADIAIADIAMADQAUAFAJAKQAIAJAAASQAAAagUAOQgSANgaAAQgUAAgMgFg");
	this.shape_37.setTransform(-126.175,-17.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#02216C").s().p("AghBOIAfibIAkAAIgfCbg");
	this.shape_38.setTransform(-135.25,-17.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_39.setTransform(-145.475,-17.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02216C").s().p("Ag0BOIAfibIAkAAIgYB7IA+AAIgGAgg");
	this.shape_40.setTransform(-40.425,-39.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#02216C").s().p("AAfBOIgCgYIgtAAIgMAYIgnAAIBUibIAcAAIAXCbgAAaAYIgFgtIgWAtIAbAAg");
	this.shape_41.setTransform(-53.925,-39.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#02216C").s().p("AAMBOIgghQIgRBQIgkAAIAgibIAeAAIAgBQIAQhQIAlAAIggCbg");
	this.shape_42.setTransform(-66.35,-39.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02216C").s().p("AgwBBQgMgMAAgTQAAgNAEgVQAFgYAEgLQAFgPAKgKQARgTAbAAQAXAAAOAOQAMANAAATQAAANgEAUQgFAZgEAKQgFAQgKAKQgRATgbAAQgXAAgOgPgAgGgnQgHAHgGAgQgEAVAAAKQAAAIAEAEQAEAEAHAAQAIAAAHgHQAHgHAGghQAEgUAAgKQAAgIgEgEQgEgFgHAAQgJAAgGAIg");
	this.shape_43.setTransform(-80.225,-39.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#02216C").s().p("AghBOIAgibIAjAAIggCbg");
	this.shape_44.setTransform(-90.05,-39.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#02216C").s().p("AgtBOIAZh7IglAAIAHggIBsAAIgGAgIgkAAIgYB7g");
	this.shape_45.setTransform(-98.125,-39.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#02216C").s().p("AghBOIAgibIAjAAIggCbg");
	this.shape_46.setTransform(-108.6,-39.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_47.setTransform(-118.875,-39.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#02216C").s().p("AhBBOIAgibIAzAAQAWAAANALQANAMAAAVQAAAIgFAZQgGAegEALQgFALgKAKQgQAQgbAAgAgWAuIAQAAQAKAAAIgHQADgEACgGQADgIAEgVQAFgXAAgGQAAgQgRAAIgPAAg");
	this.shape_48.setTransform(-132.275,-39.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#02216C").s().p("AAfBOIgCgYIgtAAIgMAYIgnAAIBUibIAcAAIAXCbgAAaAYIgFgtIgWAtIAbAAg");
	this.shape_49.setTransform(-147.025,-39.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-162.3,-55.5,137.8,78.9), null);


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
	this.shape.graphics.f("#092D74").s().p("AgoAiIgBgeIAAg8IAmgDIAlgFIACAQIADAQIgWABIgTACIgBAJIgBAIIAQgCIAPgCIACALIABALIgUADIgOACIAAAQIAUgDIAWgDIACAQIACAPIglAFIgtAIg");
	this.shape.setTransform(-100.175,-16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#092D74").s().p("Agyg4QAjgIAWAAQAgAAAFAWQACAbgeAQIAjAmIggAYIgjgvQAAAXACASIgjAIQADhagEgfgAgOgiIgCAMIAAAMQAIgDAGgFQALgHgCgGQAAgEgHgBIgBAAQgGAAgHACg");
	this.shape_1.setTransform(-109.55,-16.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#092D74").s().p("AgoAtQgHgIgEgMQgEgMABgNQABgWANgSQARgXAaAAQAXAAAPASQAJALADALQADALgBAMQAAAWgOATQgRAXgaAAQgXAAgPgTgAgOgQQgFALAAAKQgBAGACAFQACAGAEAEQAFAFAHAAQALAAAGgJQAEgIAAgKQAAgLgFgMQgFgLgJAAQgJAAgHAOg");
	this.shape_2.setTransform(-120.4742,-16.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#092D74").s().p("AhJA7QATg1AJg/IAkgHIAKA+IAJg7IAigDQAIA6AWBAIgmAGIgNg+IgJA7IgeACIgIhAIgLBBg");
	this.shape_3.setTransform(-133.075,-15.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#092D74").s().p("Agyg7IAngGIAEAQQAGAWAFARQAEAKADAFIAAhAIAngGQgHBDAFAxIgkAIIgFgHIgRgYQgFgGAAgCQgBAUACATIgkAHg");
	this.shape_4.setTransform(-149.75,-16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#092D74").s().p("Agyg4QAjgIAWAAQAgAAAFAWQACAbgeAQIAjAmIggAYIgjgvQAAAXABASIgiAIQADhagEgfgAgPgiIgBAMIAAAMQAIgDAGgFQALgHgCgGQAAgEgHgBIgBAAQgGAAgIACg");
	this.shape_5.setTransform(-160.05,-16.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#092D74").s().p("Ag4A5QAVg5AKg5IAygHQAJA0AXBCIgnAJIgFgWIgYADIgFAVgAAIATIgJgsIgHAsIAQAAg");
	this.shape_6.setTransform(-170.775,-16.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#092D74").s().p("AgoAiIgBgeIAAg8IAmgDIAlgFIACAQIADAQIgWABIgTACIgBAJIgBAIIAQgCIAPgCIACALIABALIgUADIgOACIAAAQIAUgDIAWgDIACAQIACAPIglAFIgtAIg");
	this.shape_7.setTransform(-180.475,-16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#092D74").s().p("Agmg4IAmgFQgFAvABAmIAngFIAEAgQgfABguAKg");
	this.shape_8.setTransform(-188.825,-16.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AkyiCIJlAAQA2AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg2AAIplAAQg2AAgngmQgmgmAAg3IAAAAQAAg2AmgmQAngmA2AAg");
	this.shape_9.setTransform(-144.5317,-15.9128,1.4157,1.0452);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6A81C").s().p("AkxCDQg3AAgmgmQgngmAAg3IAAAAQAAg2AngmQAmgmA3AAIJjAAQA3AAAmAmQAnAmAAA2IAAAAQAAA3gnAmQgmAmg3AAg");
	this.shape_10.setTransform(-144.5317,-15.9128,1.4157,1.0452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-207.4,-30.6,125.80000000000001,29.400000000000002), null);


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


(lib.SummerSavings = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(17.5,-5.75);
	this.instance.shadow = new cjs.Shadow("#000000",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.4,-69.1,289,132);


(lib.Sparkle_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sparkle1();
	this.instance.setTransform(219.5,32.55,0.3599,0.3599,0.5296,0,0,103.4,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-89.4704},14).to({rotation:0.5296,x:219.55,y:32.5},15).to({rotation:90.5296},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.9,-20.2,105.4,105.5);


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
	this.frame_209 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(209).call(this.frame_209).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(160,25,1.0667,0.2,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(210));

	// glitter 1 copy 2
	this.instance = new lib.Sparkle_1();
	this.instance.setTransform(315.15,45.1,0.0661,0.0661,0,0,0,220.8,34);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({regX:220.5,regY:33.6,scaleX:0.1873,scaleY:0.1873},10,cjs.Ease.get(1)).wait(159));

	// glitter 1 copy
	this.instance_1 = new lib.Sparkle_1();
	this.instance_1.setTransform(8.2,9.2,0.0971,0.0971,0,0,0,219.9,34);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({regX:220.6,regY:33.6,scaleX:0.275,scaleY:0.275,x:8.25},10,cjs.Ease.get(1)).wait(159));

	// glitter 1
	this.instance_2 = new lib.Sparkle_1();
	this.instance_2.setTransform(66.85,44.75,0.1098,0.1098,0,0,0,221,33.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({regX:220.7,regY:33.6,scaleX:0.3109,scaleY:0.3109,x:66.9},10,cjs.Ease.get(1)).wait(164));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.setTransform(343.65,50.5,0.4125,0.4125,0,0,0,0.5,0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regY:0.1,y:43.5,alpha:1},9,cjs.Ease.get(1)).wait(174));

	// Logo
	this.instance_4 = new lib.Logo_1();
	this.instance_4.setTransform(279.45,48.55,0.4125,0.4125,0,0,0,0.2,0.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({regY:0.1,y:40.4,alpha:1},9,cjs.Ease.get(1)).wait(183));

	// Img 1
	this.instance_5 = new lib.Img1();
	this.instance_5.setTransform(575.55,86.7,0.684,0.684,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({regX:0.2,x:575.65,alpha:1},9,cjs.Ease.get(1)).wait(183));

	// Head
	this.instance_6 = new lib.Head();
	this.instance_6.setTransform(176.05,18.25,0.5481,0.5481,0,0,0,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({regY:0.6,y:32.6,alpha:1},9,cjs.Ease.get(1)).wait(192));

	// Summer
	this.instance_7 = new lib.SummerSavings("synched",0);
	this.instance_7.setTransform(43.05,20.5,0.192,0.192,0,0,0,0.5,0.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.4,regY:0.4,scaleX:0.24,scaleY:0.24,alpha:1},11,cjs.Ease.get(1)).wait(199));

	// Corner
	this.instance_8 = new lib.Corner();
	this.instance_8.setTransform(71,50.95,0.3601,0.3601,180);

	this.instance_9 = new lib.Corner();
	this.instance_9.setTransform(249,-3,0.3601,0.3601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(210));

	// Background
	this.instance_10 = new lib.BG_320x50();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_10}]}).wait(210));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-12.4,324.3,68.5);


// stage content:
(lib.WFSB_216412_MM_320x50_V6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.instance.setTransform(150,52.1,1,0.4167,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BG
	this.instance_1 = new lib.BG_320x50();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,225.5);
// library properties:
lib.properties = {
	id: '975D5B5BE9CB1949972A01487C3AD994',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG_320x50.jpg", id:"BG_320x50"},
		{src:"Corner.png", id:"Corner"},
		{src:"IMG.png", id:"IMG"},
		{src:"kickoffasummerofsavings_tobeused_S.png", id:"kickoffasummerofsavings_tobeused_S"},
		{src:"Logo.png", id:"Logo"},
		{src:"Sparkle.png", id:"Sparkle"}
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