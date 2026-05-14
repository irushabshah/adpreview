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



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.frog = function() {
	this.initialize(img.frog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,225);


(lib.turtle = function() {
	this.initialize(img.turtle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,253);


(lib.tr = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.turtle();
	this.instance.setTransform(-150,-126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-126.5,300,253);


(lib.t2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#167ABE").s().p("AgOAsQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAEgPIAHgSIAJgUIANgVIAAgBIgBgBIgtAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgGIACgCIA4AAIABABIABABIAAAEIgBACIgBADIgJAPIgJARIgGAQIgFAQIgCALQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape.setTransform(32.025,8.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#167ABE").s().p("AgNAEIgBAAIAAgBIAAgFIABgBIAbAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAABAAIAAAEQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(23.65,9.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#167ABE").s().p("AgbAtIgBAAIgBgCIAAgFIAAgBIABgCIACgCIAagZIAHgIIAHgHIACgHIABgFQAAgGgCgDQgDgEgEgBQgEgCgEAAIgGABIgHADIgHAHIgBABIgBAAIgGgDIgBgBIABgCQAFgIAJgEQAHgDAHAAQAIAAAGACQAHADADAGQAEAFABAJQgBAFgCAFQgBAEgEAFIgMALIgXAXIAAABIABABIApAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAAHIgBABIgBAAg");
	this.shape_2.setTransform(15.2,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#167ABE").s().p("AAKAqIgDAAQgHABgDgEQgEgEAAgHIAAgoIgBgBIgKAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgFIABgBIALAAIAAgBIACgTQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAFAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAATIABABIAQAAIABABIAAAFQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIgQAAIgBABIAAAlQAAAGACACQACACAEAAIAIAAIABAAIABACIgBADIgBACIgDAAg");
	this.shape_3.setTransform(6.775,8.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#167ABE").s().p("AgPAeQgHgFgDgFIAAgBIAAgBIAFgCIABgBIAAABIAGAFQACACAEACQADABAFAAQAEAAAEgBQADgCADgCQACgDAAgCQAAgDgDgDQgDgCgGgCIgLgDQgJgDgEgDQgDgEAAgFQAAgHACgDQADgFAGgCQAGgDAGAAQAIAAAGADQAHAEADAFIAAABIAAAAIgFADIgBAAIgBgBQgCgDgFgCQgEgCgGgBQgFAAgFADQgEADAAAFQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAQACACAGADIAOAEQAIABAEAFQADAEAAAGQAAAFgDAFQgEADgFADQgGACgHAAQgJAAgHgDg");
	this.shape_4.setTransform(1.35,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#167ABE").s().p("AgPAeQgFgCgCgEQgDgEAAgGIAAgrQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAApQAAAGADAEQAEAEAFAAQAEAAAFgDIAJgIIAAgsQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBA8QAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgHAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgHIAAgBIgBAAQgGAGgGACQgEACgFAAQgFAAgEgCg");
	this.shape_5.setTransform(-5.05,9.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#167ABE").s().p("AgYAmQgIgEAAgIQAAgEADgEQADgDAFgDQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgEgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBgBAAIABgDIAEgDIAFgCIAAgBIAAgBQgFgCgDgEQgCgEAAgGQAAgJAHgFQAHgGANAAQAFAAAEACQAFABADADIABAAIABAAIAEgDIAEgCIADgBIADABIAAABIAAAEIAAACQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgDABIgCAAQgBABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIACADIAAAFQAAAGgDAEQgCAEgHADQgFADgIAAIgJAAIgGACIgBACQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABIAJABIAPABQAKAAAFAFQAFAEAAAHQAAAJgIAGQgIAFgOAAQgPAAgIgFgAgRAPIgEAEQgCACAAAEQAAADADADQACADAGABQAFACAHAAQAJAAAGgDQAEgDAAgGQAAgEgCgDQgDgCgGgBIgTgBIgGABgAgOggQgEAEAAAGQAAAGAEAEQAFADAIAAQAIAAADgDQAFgEAAgGQAAgGgFgEQgDgDgIAAQgIAAgFADg");
	this.shape_6.setTransform(-12.1,10.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#167ABE").s().p("AgPAeQgFgCgDgEQgCgEAAgGIAAgrQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAIAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAApQAAAGADAEQAEAEAFAAQAFAAAEgDIAJgIIAAgsQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAA8QAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgGAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgHIAAgBIgBAAQgHAGgFACQgEACgFAAQgGAAgDgCg");
	this.shape_7.setTransform(-19.15,9.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#167ABE").s().p("AAcAsIgCgBIgIgXIAAAAIgBgBIgiAAIgCABIgIAXIgBABIgBAAIgHAAIgBAAIAAgCIAfhUIABgBIABgBIAJAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAfBTIAAACIgBAAgAgBgeIgOAmQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIAcAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgPgmIAAgBg");
	this.shape_8.setTransform(-26.925,8.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#167ABE").s().p("AgBA9QgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBh1IABgCIABAAIADAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAB1QAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_9.setTransform(-35.4,8.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#167ABE").s().p("AgUAsQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgHQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAPAAIABAAIAAhBQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAFQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIAAgBIABAAIASgJIACgCIAAAAIAFAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAABMIAAABIAOAAIABABIAAAHIAAABIgBAAg");
	this.shape_10.setTransform(-42.225,8.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#167ABE").s().p("AgMAsQgGgBgEgDIgJgHIAAgBIAAgBIAGgEIABgBIABABIAHAFQADADAEABIAJABQAKAAAFgFQAGgEAAgIQAAgFgDgEQgDgFgGgBQgFgCgFAAIgKAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAQAGAAAFgDQAFgCADgDQACgEAAgEQAAgEgCgEQgCgEgFgBQgEgCgFAAQgFAAgGADQgFABgFAFIgBAAIgBAAIgEgEQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAEgEAEgCIAJgFIAKgBQAJAAAHADQAGADAEAFQAEAFAAAHQAAAHgEAEQgEAGgIADIgBAAIABABQAFABAFADQAEADACAEQACAFAAAFQAAAIgDAFQgEAGgIADQgHADgLAAIgLgBg");
	this.shape_11.setTransform(-48.975,8.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#167ABE").s().p("AgNAEIgBAAIAAgBIAAgFIAAgBIAcAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAEQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_12.setTransform(-57.5,9.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#167ABE").s().p("AgOAsQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAEgPIAHgSIAJgUIANgVIAAgBIgBgBIgtAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgGIACgCIA4AAIABABIABABIAAAEIgBACIgBADIgJAPIgJARIgGAQIgFAQIgCALQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_13.setTransform(-65.925,8.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#167ABE").s().p("AgbAtIgBAAIgBgCIAAgFIAAgBIABgCIACgCIAagZIAHgIIAHgHIACgHIABgFQABgGgDgDQgDgEgEgBQgEgCgEAAIgHABIgGADIgHAHIgBABIgBAAIgGgDIgBgBIABgCQAFgIAJgEQAHgDAHAAQAIAAAHACQAGADADAGQAEAFAAAJQAAAFgCAFQgBAEgEAFIgMALIgXAXIAAABIABABIApAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAAHIgBABIgBAAg");
	this.shape_14.setTransform(-73.1,8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#167ABE").s().p("AgXApQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgFIAAgBIADAAIAIAAQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAgBIAEgEIACgGIAAgEIgXg5IAAgBIABgBIAHAAIACAAIAAABIARAuIABABIABgBIASguIABgBIABAAIAFAAIABABIAAABIgaBCIgDAHIgEAFIgGACIgHABg");
	this.shape_15.setTransform(-82.3625,10.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#167ABE").s().p("AgDAsQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAhVQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIAHAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIAABUIAAACIgCAAg");
	this.shape_16.setTransform(-86.95,8.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#167ABE").s().p("AgQAeQgEgCgDgEQgCgEAAgGIAAgrQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAIAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAApQAAAGAEAEQACAEAHAAQAEAAAEgDIAKgIIAAgsQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAA8QAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgHAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgHIAAgBIgBAAQgGAGgGACQgEACgFAAQgGAAgEgCg");
	this.shape_17.setTransform(-91.85,9.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#167ABE").s().p("AgKAsIgEgBIgCgBIAAgCIABgGQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIADACIAGAAQAFAAACgCQADgEgBgHIAAhBQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAABEQAAAJgEAGQgFAFgJAAIgJgBg");
	this.shape_18.setTransform(-98.1,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#167ABE").s().p("AgOAsQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAEgQIAHgSIAJgTIANgWIAAgCIgBAAIgtAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgHIACgBIA4AAIABABIABABIAAAEIgBACIgBACIgJAQIgJARIgGAQIgFAQIgCALQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_19.setTransform(31.075,-10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#167ABE").s().p("AgUAsQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgHQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAPAAIABAAIAAhBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgPAFQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIAAgBIABgBIASgJIACgBIAAAAIAFAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAABMIAAABIAOAAIABABIAAAHIAAABIgBAAg");
	this.shape_20.setTransform(24.775,-10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#167ABE").s().p("AgNAEIgBAAIgBgBIAAgFIABgBIAcAAQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAIAAAEQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_21.setTransform(17.15,-8.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#167ABE").s().p("AgMAsQgGgBgEgDIgJgHIAAgBIAAgBIAGgEIABgBIABABIAHAGQADACAEABIAJABQAKAAAFgEQAGgFAAgIQAAgFgDgFQgDgEgGgBQgFgCgFAAIgKAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAIAAQAGgBAFgCQAFgCADgDQACgEAAgEQAAgFgCgDQgCgEgFgBQgEgCgFAAQgFAAgGACQgFADgFAEIgBAAIgBAAIgEgEQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAEgEAEgCIAJgFIAKgBQAJABAHACQAGADAEAFQAEAFAAAHQAAAHgEAEQgEAGgIADIgBAAIABABQAFABAFADQAEADACAEQACAFAAAFQAAAIgDAFQgEAGgIAEQgHACgLAAIgLgBg");
	this.shape_22.setTransform(8.375,-10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#167ABE").s().p("AgUAsQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgHQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAPAAIABAAIAAhBQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgPAFQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgFIAAgBIABgBIASgJIACgBIAAAAIAFAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAABMIAAABIAOAAIABABIAAAHIAAABIgBAAg");
	this.shape_23.setTransform(1.925,-10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#167ABE").s().p("AgXApQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgFIAAgBIADAAIAIAAQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAgBQADgCABgCIACgGIAAgEIgXg5IAAgBIABgBIAHAAIACAAIAAABIARAuIABABIABgBIASguIABgBIABAAIAFAAIABABIAAABIgaBCIgDAHIgEAFIgGACIgHABg");
	this.shape_24.setTransform(-6.6125,-7.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#167ABE").s().p("AgCAsQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAhVQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIAFAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIAABVIAAABIgCAAg");
	this.shape_25.setTransform(-11.2,-10.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#167ABE").s().p("AgPAeQgFgCgDgEQgCgEAAgGIAAgrQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAHAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAApQAAAGADAEQADAEAGAAQAEAAAFgDIAJgIIAAgsQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBA8QAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgGAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgHIAAgBIgBAAQgHAGgFACQgEACgFAAQgFAAgEgCg");
	this.shape_26.setTransform(-16.1,-8.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#167ABE").s().p("AgJAsIgGgBIgBgBIAAgCIABgGQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAEACIAGAAQAEAAACgDQACgDABgHIAAhBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAJAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAABEQAAAJgEAGQgFAFgJAAIgIgBg");
	this.shape_27.setTransform(-22.35,-10.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#167ABE").s().p("AgBA9QgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBh1IABgCIABAAIADAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAB1QAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_28.setTransform(-28.65,-9.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#167ABE").s().p("AgaAtIgCAAIgBgCIAAgFIAAgBIABgCIADgCIAZgZIAHgIIAGgHIADgHIACgGQAAgFgDgEQgDgDgEgBQgEgCgEAAIgGABIgHADIgHAHIgBABIgCAAIgFgDIgBgBIABgCQAFgIAJgEQAHgDAIAAQAHAAAGACQAHADADAGQAFAGAAAHQAAAGgCAFQgCAEgEAFIgLALIgYAXIAAABIABABIApAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAAHIgBABIgBAAg");
	this.shape_29.setTransform(-36.35,-10.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#167ABE").s().p("AgbAtIgBAAIAAgCIAAgFIAAgBIAAgCIACgCIAagZIAIgIIAGgHIACgHIABgGQABgFgDgEQgDgDgEgBQgEgCgEAAIgHABIgGADIgHAHIgBABIgBAAIgGgDIAAgBIAAgCQAGgIAHgEQAIgDAHAAQAIAAAHACQAGADAEAGQADAGAAAHQAAAGgCAFQgBAEgFAFIgLALIgXAXIgBABIACABIApAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAHIAAABIgBAAg");
	this.shape_30.setTransform(-43.5,-10.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#167ABE").s().p("AgNAEIgBAAIAAgBIAAgFIABgBIAbAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAEQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_31.setTransform(-51.85,-8.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#167ABE").s().p("AgbAtIgBAAIgBgCIAAgFIAAgBIABgCIADgCIAZgZIAHgIIAGgHIADgHIABgGQAAgFgCgEQgDgDgEgBQgEgCgEAAIgGABIgHADIgHAHIgBABIgBAAIgGgDIgBgBIABgCQAFgIAJgEQAHgDAIAAQAHAAAGACQAHADADAGQAFAGAAAHQAAAGgDAFQgBAEgEAFIgLALIgYAXIAAABIABABIApAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAAHIgBABIgBAAg");
	this.shape_32.setTransform(-60.3,-10.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#167ABE").s().p("AgbAtIgBAAIAAgCIAAgFIAAgBIABgCIABgCIAagZIAIgIIAGgHIADgHIAAgGQAAgFgCgEQgDgDgEgBQgEgCgEAAIgHABIgHADIgGAHIgBABIgCAAIgEgDIgBgBIAAgCQAGgIAHgEQAIgDAHAAQAIAAAHACQAGADAEAGQADAGAAAHQAAAGgCAFQgBAEgFAFIgLALIgXAXIgBABIACABIApAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAAHIAAABIgBAAg");
	this.shape_33.setTransform(-67.45,-10.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#167ABE").s().p("AgOAdQgHgEgEgIQgEgHAAgJQAAgKAEgHQAEgIAHgDQAHgFAIAAQAIAAAHAEQAGAEAEAHQAEAHAAAKIgBABQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgtAAIgBABIAAABQAAAGADAFQACAFAFADQAFACAFAAQAGAAAEgCQAFgDADgEIABgBIABAAIAFACQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgHAIQgEADgEACIgLABQgIAAgHgEgAgJgVQgFACgCAGQgCAFAAAFIAjAAIACAAIAAgCQAAgFgCgFQgCgEgEgDQgEgDgGAAQgGAAgEAEg");
	this.shape_34.setTransform(-76.975,-8.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#167ABE").s().p("AASAgIgBAAIgBgBIAAgqQAAgGgDgDQgDgDgHAAQgDgBgCACIgGADIgHAFIAAAtQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgHAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAg8QAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAIAAIABABIAAAHIAAABIAAgBIAIgFIAHgDQACgBAEgBQAKAAAFAGQAFAFAAAIIAAAsQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_35.setTransform(-83.95,-8.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#167ABE").s().p("AgQAeQgEgCgDgEQgCgEAAgGIAAgrQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAHAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAApQAAAGAEAEQACAEAHAAQAEAAAEgDIAKgIIAAgsQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAA8QAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgHAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgHIAAgBIgBAAQgGAGgGACQgEACgFAAQgGAAgEgCg");
	this.shape_36.setTransform(-90.95,-8.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#167ABE").s().p("AgKAsIgEgBIgCgBIAAgCIABgGQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIADACIAGAAQAFAAACgDQADgDgBgHIAAhBQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAIAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAABEQAAAJgEAGQgFAFgJAAIgJgBg");
	this.shape_37.setTransform(-97.2,-10.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.4,-19.2,140.10000000000002,37.099999999999994);


(lib.t1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0B9444").s().p("AgKBOQgEAAAAgEIAAgXQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAYAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAAWQAAAFgFAAgAgEAhIgDAAIgBgDIgHhoIABgCIACgBIAZAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIgHBnIgBADIgEABg");
	this.shape.setTransform(60.6286,7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B9444").s().p("AgxBKQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAiJIABgEIADgBIATAAQAFAAAAAEIAAAHQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIABgBIAIgFQAEgEAGgCQAEgCAJAAQANAAAJAGQAKAGAGANQAGANAAASQAAAUgGANQgGANgKAGQgLAHgNAAQgHAAgIgDQgHgDgGgFIgCgCQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAnQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAgAgNg0QgGADgDAEQgCAFAAAFIAAAvQAEAFAGADQAGAEAGAAQAIAAAGgFQAGgEAEgJQADgIAAgPQAAgOgDgIQgEgIgGgFQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(51.85,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B9444").s().p("AA8A5IgDgBIgBgDIAAhHQAAgIgEgFQgEgEgIAAQgFAAgFABIgIAFIgFAFIgDADIgBADIAABGQAAAFgDAAIgTAAIgDgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAhHQAAgIgDgFQgFgEgIAAQgHAAgGADQgGAEgHAHIAABKQAAAEgFAAIgSAAQgEAAgBgEIAAhnQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIAUAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAALIABABIACgBIALgJIALgGQAHgCAHAAQALAAAHAGQAHAFAEAIIAAABIACgBIAMgKIANgGQAGgDAGAAQAPAAAJAJQAIAJABAQIAABKQgBAFgEAAg");
	this.shape_2.setTransform(35.75,9.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B9444").s().p("AgnAxQgJgIAAgOQAAgLAHgJQAHgHANgFQANgFASgBIAKgBIACAAIABgDIAAgEQAAgKgFgFQgGgFgJAAQgHAAgGADQgGAEgFAHIgBACIgDAAIgSgFIgBgBIABgDQAFgMAMgHQANgGARAAQAQAAAKAFQAKAEAFAIQAEAIAAALIAABJIAAADIgDABIgSAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBIgBgDIAAgHQAAgBgBAAQAAgBgBAAQAAAAgBABQAAAAgBABQgHAHgJADQgHAEgLAAQgQAAgJgJgAAMACIgMACIgLAEQgFADgDAEQgDAEAAAFQAAAHAGAEQAFAEAJAAQAEAAAFgCQAFgBADgDIAGgHQACgDAAgDIAAgPQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAg");
	this.shape_3.setTransform(19.875,9.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B9444").s().p("AghBGQgPgKgJgSQgIgSAAgYQAAgZAIgRQAJgRAPgLQAQgJAUAAQAMAAAKAEQAKADAJAGQAIAHAFAHQAFAJACAJIAAAEIgCABIgYACIgCgBIgBgCQgDgMgHgHQgIgIgNAAQgRAAgKAOQgJAOAAAdQAAAdAJAOQAKAOASAAQANAAAJgGQAJgHAGgPQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIASAEIABABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgFALQgDAGgFAGQgFAGgHAFQgIAEgJADQgJADgMAAQgUAAgQgKg");
	this.shape_4.setTransform(7.0083,7.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0B9444").s().p("AgtBIQAAAAgBAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgOIABgCIAFgBIAOAAQAEAAAEgCQADgCADgEIACgHQABgDgBgDIgohjQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAWAAIACABIACACIAZBFQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAahFIACgCIACgBIAQAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAAEIgsBtIgIAQQgEAGgFAEQgFADgHABIgPABg");
	this.shape_5.setTransform(-10.7875,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B9444").s().p("AgnAxQgJgIAAgOQAAgLAHgJQAHgHANgFQANgFASgBIAKgBIACAAIABgDIAAgEQAAgKgFgFQgGgFgJAAQgHAAgGADQgGAEgFAHIgBACIgDAAIgSgFIgBgBIABgDQAFgMAMgHQANgGARAAQAQAAAKAFQAKAEAFAIQAEAIAAALIAABJIAAADIgDABIgSAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIAAgHQAAgBgBAAQAAgBAAAAQgBAAgBABQAAAAgBABQgHAHgJADQgHAEgLAAQgQAAgJgJgAAMACIgMACIgLAEQgFADgDAEQgDAEAAAFQAAAHAGAEQAFAEAJAAQAEAAAFgCQAFgBADgDIAGgHQACgDAAgDIAAgPQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAg");
	this.shape_6.setTransform(-22.825,9.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B9444").s().p("Ag7BOQgEAAAAgFIAAiSIABgDIADgBIAJAAIAMAAIAMAAIAJABQAcAAASAKQASAIAJASQAIAQAAAYQAAAYgJASQgJARgTAKQgSAJgbAAgAggg0IAABpQAAABAAAAQAAABABAAQAAAAAAAAQABAAABAAIAFAAQATAAAMgEQAMgGAGgMQAHgNAAgUQAAgTgGgMQgGgMgMgGQgMgFgSgBIgIAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_7.setTransform(-35.775,7.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B9444").s().p("AgdA5IgDgBIgBgDIAAhnQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAIAUAAQABAAABAAQAAABAAAAQABABAAAAQAAABAAABIAAAMIABACIACgBQAEgGAFgEQAFgEAGgCQAFgDAGAAQAHAAAAAEIAAAUQAAAAAAABQAAABAAAAQgBAAAAAAQgBAAAAAAIgHgBIgHAAQgEAAgEACQgFABgDADQgDADgCAEQgDADAAAEIAABAQAAAEgFAAg");
	this.shape_8.setTransform(48.575,-12.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B9444").s().p("AgaAzQgNgHgHgNQgHgNAAgQQAAgSAHgNQAIgNAMgHQANgIAOAAQAQAAAMAHQAMAHAGANQAHANAAARIAAAEQAAAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAIhKAAIgBABIgBADQAAAIAEAHQAEAHAHAEQAHAEAIAAQAIAAAHgEQAHgDAHgIIABgCIACABIANAGQABAAAAABQABAAAAAAQAAABgBABQAAAAAAABQgHAJgHAFQgHAGgJACQgJADgLAAQgOAAgNgHgAgMgjQgGAEgDAHQgDAGAAAJIAwAAIADgBIAAgCQAAgHgCgGQgDgGgGgEQgGgEgIAAQgHAAgHAEg");
	this.shape_9.setTransform(37.775,-12.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0B9444").s().p("AA8A5IgDgBIgBgDIAAhHQAAgIgEgFQgEgEgIAAQgFAAgFABIgHAFIgGAFIgDADIAAADIAABGQgBAFgEAAIgSAAIgCgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAhHQgBgIgEgFQgDgEgJAAQgHAAgGADQgGAEgHAHIAABKQAAAEgFAAIgTAAQgDAAAAgEIAAhnQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAVAAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAAALIAAABIABgBIAMgJIAMgGQAFgCAHAAQAMAAAGAGQAJAFACAIIABABIACgBIAMgKIAMgGQAHgDAHAAQAOAAAJAJQAJAJgBAQIAABKQABAFgFAAg");
	this.shape_10.setTransform(22.1,-12.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B9444").s().p("AA8A5IgDgBIgBgDIAAhHQAAgIgEgFQgEgEgIAAQgFAAgEABIgIAFIgHAFIgCADIAAADIAABGQAAAFgFAAIgSAAIgCgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAhHQAAgIgFgFQgDgEgJAAQgHAAgGADQgGAEgHAHIAABKQAAAEgFAAIgTAAQgDAAgBgEIAAhnQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAIAWAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAALIABABIABgBIAMgJIAMgGQAGgCAGAAQAMAAAGAGQAIAFAEAIIABABIABgBIALgKIAOgGQAGgDAHAAQAOAAAJAJQAJAJAAAQIAABKQAAAFgFAAg");
	this.shape_11.setTransform(2.95,-12.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B9444").s().p("AghA1QgHgEgEgIQgEgHAAgKIAAhLQAAgFAEAAIATAAQAEAAAAAEIAABHQAAAIAFAFQAEAFAIAAQAGAAAHgEQAHgEAGgHIAAhJQAAgFAFAAIASAAQAEAAAAAEIAABnQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgVAAQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgMIAAgBIgCABQgKAJgIAEQgIAEgKAAQgJAAgIgEg");
	this.shape_12.setTransform(-12.875,-12.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0B9444").s().p("AgYBNQgMgDgJgHQgJgFgFgJIgBgDIACgDIANgJIAEgBIACABQAGAIAFADQAFAFAHACQAGACAKAAQAOAAAJgFQAIgFAAgKQAAgEgBgEQgCgEgEgDQgEgCgIgDIgfgJQgMgFgIgEQgIgHgEgIQgEgJAAgJQAAgNAHgLQAHgKANgGQANgGARAAQALAAAKADQAKACAIAFQAIAFAGAGIABADQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAABIgPAKIgCABIgDgCQgFgGgHgDQgIgEgMgBQgOAAgHAGQgHAFAAAKIABAFQABAEAFADQAEADAHADIAgAKQATAFAJALQAIAKAAAQQAAAOgHAKQgIALgNAFQgNAGgTAAQgNAAgMgDg");
	this.shape_13.setTransform(-26.025,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-29.5,111.30000000000001,51.9);


(lib.f = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frog();
	this.instance.setTransform(-72,-41,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-41,144,81);


(lib.cta = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAhIgCgBIAAgBIAAg8QAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAHAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAIIAAABIABgBIAFgGIAGgDQADgCAEABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIAAAIIgBABIgDgBIgDAAIgFABIgFADIgEAFIgCAFIAAAnQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAg");
	this.shape.setTransform(-22.225,1.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAdQgHgEgDgHQgEgIAAgJQAAgKAEgHQAEgIAGgDQAHgFAIAAQAJAAAHAFQAHAEAEAHQADAHAAAKQAAAJgDAIQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgJgWQgFAEgCAFQgDAHAAAGQAAAIADAGQACAFAFADQAEAEAFAAQAHAAAEgEQAFgDACgFQACgGAAgIQAAgGgCgHQgDgFgEgEQgFgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(-28.425,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAtQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAg0IgBgBIgMAAIgBgBIAAgGIAAgBIABAAIAMAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAgJQAAgHADgEQADgFAHAAIALAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIAAAFIAAABIgBAAIgIAAQgEAAgCACQgCADABAEIAAAIIABABIAOAAIABAAIAAABIAAAGIgBABIgOAAIgBABIAAA0QAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAABg");
	this.shape_2.setTransform(-34.2,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAqQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAhPIAAgCIABAAIAHAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAGIABABIABgBIAEgDIAGgEQADgBAFAAQAHgBAGAEQAGAEAEAHQADAHAAAKQAAAKgDAIQgEAHgGAFQgGADgIAAQgFABgEgCIgIgFIgBAAIAAACIAAAWQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAgAgJggQgEADgCACQgCADAAAEIAAAcQADAEAEACQAEACAFAAQAFAAAEgCQAFgEACgFQADgFAAgJQAAgJgDgFQgCgGgFgCQgEgDgFAAQgEAAgEACg");
	this.shape_3.setTransform(-42.425,2.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAeQgEgCgDgEQgCgEAAgGIAAgrQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAIAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAApQAAAGADAEQAEAEAFAAQAFAAAEgDIAKgIIAAgsQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAA8QAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgHAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgHIAAgBIgBAAQgGAGgGACQgEACgFAAQgGAAgEgCg");
	this.shape_4.setTransform(-49.65,1.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAhIgBgBIgBgBIAAgqQAAgGgDgDQgDgEgHABQgDAAgCABIgGADIgHAGIAAAsQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgHAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAg8QAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAIAAIABABIAAAHIAAABIAAAAIAIgGIAHgDQACgCAFABQAJAAAFAEQAFAGAAAIIAAAsQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_5.setTransform(-59.1,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAmQgIgEAAgIQAAgEADgEQADgDAFgDQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgEgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIABgDIAEgDIAFgCIAAgBIAAgBQgFgCgCgEQgDgEAAgGQAAgJAHgFQAHgGANAAQAFAAAEACQAFABADADIABAAIACAAIADgDIADgCIAFgBIACABIAAABIAAAEIAAACQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgEABIgDAAQAAAAgBABQAAAAgBABQAAAAAAAAQAAABAAAAIABADIABAFQAAAGgDAEQgDAEgFADQgGADgIAAIgKAAIgEACIgCACQAAAAAAABQAAAAABABQAAAAAAAAQABAAABABIAIABIAOABQALAAAFAFQAFAEAAAHQAAAJgIAGQgIAFgOAAQgPAAgIgFgAgRAPIgEAEQgCACAAAEQAAADACADQADADAGABQAEACAIAAQAJAAAFgDQAFgDABgGQgBgEgDgDQgCgCgHgBIgTgBIgFABgAgNggQgFAEAAAGQAAAGAFAEQAEADAIAAQAHAAAFgDQADgEAAgGQAAgGgDgEQgFgDgHAAQgIAAgEADg");
	this.shape_6.setTransform(-66.25,2.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAtIgBgBIAAgBIAAg8QAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAGAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAA8IgBABIgCABgAgDgdIgBgBIgBgCIAAgKQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAGAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAKQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_7.setTransform(-71.25,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAsQgGgCgFgDQgFgDgDgGIAAgBIABgBIAEgDIACgBIABABIAGAHQAEADAEABQAEABAFAAQAJAAAGgDQAGgEAAgIQAAgDgBgCIgEgFIgJgEIgRgGQgGgCgEgDQgFgDgBgFQgCgEAAgFQAAgHAEgGQADgFAHgEQAHgDAIAAIALABQAFACAFADIAHAGIABABIgBACIgFADIgBABIgBgBIgJgHQgEgCgIAAQgIAAgFAEQgFAEAAAHIABAEIADAGQADACAGABIAQAHQALACAEAGQAFAGAAAIQAAAHgEAGQgEAGgHADQgHACgKAAQgGABgGgCg");
	this.shape_8.setTransform(-76.5375,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#167ABE").s().p("AnfCWQhkAAAAhkIAAhjQAAhkBkAAIO/AAQBkAAAABkIAABjQAABkhkAAg");
	this.shape_9.setTransform(-29.25,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-13.4,116,30);


(lib.bg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BG();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,320,50);


(lib.turtle_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tr("synched",0);
	this.instance.setTransform(-37.45,0,0.7604,0.7604,0,0,0,-0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,scaleX:0.7637,scaleY:0.7637,x:-36.2169},0).wait(1).to({scaleX:0.7669,scaleY:0.7669,x:-35.5477},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-34.8922},0).wait(1).to({scaleX:0.773,scaleY:0.773,x:-34.2505},0).wait(1).to({scaleX:0.776,scaleY:0.776,x:-33.6227},0).wait(1).to({scaleX:0.779,scaleY:0.779,x:-33.0086},0).wait(1).to({scaleX:0.7818,scaleY:0.7818,x:-32.4084},0).wait(1).to({scaleX:0.7846,scaleY:0.7846,x:-31.8219},0).wait(1).to({scaleX:0.7874,scaleY:0.7874,x:-31.2492},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-30.6903},0).wait(1).to({scaleX:0.7926,scaleY:0.7926,x:-30.1453},0).wait(1).to({scaleX:0.7951,scaleY:0.7951,x:-29.614},0).wait(1).to({scaleX:0.7976,scaleY:0.7976,x:-29.0965},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-28.5929},0).wait(1).to({scaleX:0.8023,scaleY:0.8023,x:-28.103},0).wait(1).to({scaleX:0.8046,scaleY:0.8046,x:-27.6269},0).wait(1).to({scaleX:0.8068,scaleY:0.8068,x:-27.1646},0).wait(1).to({scaleX:0.809,scaleY:0.809,x:-26.7162},0).wait(1).to({scaleX:0.811,scaleY:0.811,x:-26.2815},0).wait(1).to({scaleX:0.813,scaleY:0.813,x:-25.8606},0).wait(1).to({scaleX:0.815,scaleY:0.815,x:-25.4535},0).wait(1).to({scaleX:0.8168,scaleY:0.8168,x:-25.0603},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,x:-24.6808},0).wait(1).to({scaleX:0.8204,scaleY:0.8204,x:-24.3151},0).wait(1).to({scaleX:0.8221,scaleY:0.8221,x:-23.9632},0).wait(1).to({scaleX:0.8237,scaleY:0.8237,x:-23.6251},0).wait(1).to({scaleX:0.8252,scaleY:0.8252,x:-23.3009},0).wait(1).to({scaleX:0.8267,scaleY:0.8267,x:-22.9904},0).wait(1).to({scaleX:0.8281,scaleY:0.8281,x:-22.6937},0).wait(1).to({scaleX:0.8295,scaleY:0.8295,x:-22.4108},0).wait(1).to({scaleX:0.8308,scaleY:0.8308,x:-22.1417},0).wait(1).to({scaleX:0.832,scaleY:0.832,x:-21.8864},0).wait(1).to({scaleX:0.8331,scaleY:0.8331,x:-21.645},0).wait(1).to({scaleX:0.8342,scaleY:0.8342,x:-21.4173},0).wait(1).to({scaleX:0.8352,scaleY:0.8352,x:-21.2034},0).wait(1).to({scaleX:0.8362,scaleY:0.8362,x:-21.0033},0).wait(1).to({scaleX:0.8371,scaleY:0.8371,x:-20.817},0).wait(1).to({scaleX:0.8379,scaleY:0.8379,x:-20.6445},0).wait(1).to({scaleX:0.8386,scaleY:0.8386,x:-20.4858},0).wait(1).to({scaleX:0.8393,scaleY:0.8393,x:-20.3409},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-20.2098},0).wait(1).to({scaleX:0.8405,scaleY:0.8405,x:-20.0925},0).wait(1).to({scaleX:0.841,scaleY:0.841,x:-19.9891},0).wait(1).to({scaleX:0.8414,scaleY:0.8414,x:-19.8994},0).wait(1).to({scaleX:0.8418,scaleY:0.8418,x:-19.8235},0).wait(1).to({scaleX:0.8421,scaleY:0.8421,x:-19.7614},0).wait(1).to({scaleX:0.8423,scaleY:0.8423,x:-19.7131},0).wait(1).to({scaleX:0.8425,scaleY:0.8425,x:-19.6786},0).wait(1).to({regX:-0.6,scaleX:0.8426,scaleY:0.8426,x:-20.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.9,-106.5,257.7,213.2);


(lib.Frog = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f("synched",0);
	this.instance.setTransform(-119.2,-10.2,0.24,0.24,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.5,scaleX:0.3844,scaleY:0.3844,x:-133.1,y:-18.75},0).wait(1).to({regX:-0.1,regY:-0.3,scaleX:0.5136,scaleY:0.5136,x:-145.6,y:-26.25},0).to({regY:-0.4,scaleX:0.81,scaleY:0.6866,x:-163.7,y:-20.5},1).wait(1).to({regX:0,regY:-0.5,scaleX:0.9525,scaleY:0.9216,x:-174.45,y:-12.9},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:-178.2,y:-10.2},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.2,-51.2,148.29999999999998,81);


// stage content:
(lib.KSFY_216373_MM_320x50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(168));

	// t2
	this.instance = new lib.t2("synched",0);
	this.instance.setTransform(267.25,25,0.3888,0.3888,0,0,0,-32.3,-0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({regX:-32.4,scaleX:0.6479,scaleY:0.6479,x:267.2,alpha:1},11).wait(72));

	// t1
	this.instance_1 = new lib.t1("synched",0);
	this.instance_1.setTransform(258.2,27.25,0.4592,0.4592,0,0,0,0.5,0.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.7654,scaleY:0.7654,x:258.1,y:27.2,alpha:1},13,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({regX:0.5,regY:0.4,scaleX:0.4592,scaleY:0.4592,x:258.2,y:27.25,alpha:0},13).to({_off:true},1).wait(84));

	// turtle_png
	this.instance_2 = new lib.turtle_1("synched",0,false);
	this.instance_2.setTransform(103.95,35.25,0.3116,0.3116,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(168));

	// Frog
	this.instance_3 = new lib.Frog("synched",0,false);
	this.instance_3.setTransform(260.3,25.55,0.3773,0.3773,0,0,0,0.6,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(154));

	// Cta
	this.instance_4 = new lib.cta("synched",0);
	this.instance_4.setTransform(192.1,108.4,0.81,0.81,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.2,regY:0,x:192.25,y:28.35},14,cjs.Ease.get(1)).wait(154));

	// BG_jpg
	this.instance_5 = new lib.bg("synched",0);
	this.instance_5.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(168));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,24,162,97.4);
// library properties:
lib.properties = {
	id: '75E153FF2D744F028C65A7813D4CAE23',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.jpg", id:"BG"},
		{src:"frog.png", id:"frog"},
		{src:"turtle.png", id:"turtle"}
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
an.compositions['75E153FF2D744F028C65A7813D4CAE23'] = {
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