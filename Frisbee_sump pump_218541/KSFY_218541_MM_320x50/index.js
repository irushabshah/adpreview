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


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.frame1 = function() {
	this.initialize(img.frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.frame2 = function() {
	this.initialize(img.frame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.frame3 = function() {
	this.initialize(img.frame3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.water_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.water();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


(lib.t3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#780031").s().p("AgGAiQgDgDAAgEQAAgEADgCQACgDAEAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgEAAgCgDgAgHALIgCgvIASAAIgCAvg");
	this.shape.setTransform(-4.625,-123.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgMAhQgGgCgEgFQgDgFAAgHIASAAQAAAEACACQADACADAAQADAAACgBQADgCAAgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBIgEgCIgHgDIgLgEQgEgCgDgDQgDgEAAgHQAAgKAHgFQAHgGALAAQALAAAHAGQAIAFAAAKIgSAAQgBgDgCgCQgDgCgCAAQgDAAgCABQgCACAAADQAAAEADABIAJAFIALAEQAEABADAEQAEAEAAAGQAAAGgEAFQgDAFgFADQgGADgIAAQgGAAgHgDg");
	this.shape_1.setTransform(-9.7,-123.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AgaAjIAAhFIAbAAQAJAAAFADQAGACADAGQADAFAAAHQAAAFgDAFQgDAEgFADQgGAEgJAAIgJAAIAAAZgAgIgDIAIAAQAFAAACgCQADgDAAgDQAAgFgDgCQgCgDgFABIgIAAg");
	this.shape_2.setTransform(-15.675,-123.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AAXAjIAAgpIgQApIgNAAIgPgpIAAApIgSAAIAAhFIAVAAIASAwIAUgwIAUAAIAABFg");
	this.shape_3.setTransform(-23.525,-123.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AgOAgQgHgDgEgHQgDgGAAgKIAAgoIARAAIAAApQAAAGADADQADAEAFAAQAGAAADgEQADgDAAgGIAAgpIARAAIAAAoQAAAKgEAGQgEAHgGADQgHADgIAAQgIAAgGgDg");
	this.shape_4.setTransform(-31.625,-123.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AgaAjIAAhFIAbAAQAJAAAFADQAGACADAGQADAFAAAHQAAAFgDAFQgDAEgFADQgGAEgJAAIgJAAIAAAZgAgIgDIAIAAQAFAAACgCQADgDAAgDQAAgFgDgCQgCgDgFABIgIAAg");
	this.shape_5.setTransform(-38.075,-123.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AgaAjIAAhFIAbAAQAJAAAFADQAGACADAGQADAFAAAHQAAAFgDAFQgDAEgFADQgGAEgJAAIgJAAIAAAZgAgIgDIAIAAQAFAAACgCQADgDAAgDQAAgFgDgCQgCgDgFABIgIAAg");
	this.shape_6.setTransform(-46.375,-123.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AAXAjIAAgpIgQApIgNAAIgPgpIAAApIgSAAIAAhFIAVAAIASAwIAUgwIAUAAIAABFg");
	this.shape_7.setTransform(-54.225,-123.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AgOAgQgHgDgEgHQgDgGAAgKIAAgoIARAAIAAApQAAAGADADQADAEAFAAQAGAAADgEQADgDAAgGIAAgpIARAAIAAAoQAAAKgEAGQgEAHgGADQgHADgIAAQgIAAgGgDg");
	this.shape_8.setTransform(-62.325,-123.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgMAhQgGgCgDgFQgEgFgBgHIATAAQABAEACACQACACACAAQAFAAABgBQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgEgCIgGgDIgLgEQgFgCgDgDQgDgEAAgHQAAgKAHgFQAHgGALAAQALAAAHAGQAHAFABAKIgTAAQAAgDgCgCQgDgCgCAAQgDAAgCABQgCACAAADQAAAEADABIAJAFIALAEQAFABADAEQACAEAAAGQAAAGgCAFQgDAFgGADQgGADgIAAQgHAAgGgDg");
	this.shape_9.setTransform(-68.95,-123.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgTAjIAAhFIASAAIAAA4IAVAAIAAANg");
	this.shape_10.setTransform(16.325,-134.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AgTAjIAAhFIASAAIAAA4IAVAAIAAANg");
	this.shape_11.setTransform(11.575,-134.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AARAjIgEgMIgZAAIgEAMIgSAAIAZhFIATAAIAZBFgAAJAJIgJgZIgIAZIARAAg");
	this.shape_12.setTransform(5.325,-134.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgIAjIAAg3IgSAAIAAgOIA1AAIAAAOIgTAAIAAA3g");
	this.shape_13.setTransform(-1.3,-134.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AgMAhQgGgCgEgFQgDgFAAgHIASAAQAAAEACACQADACADAAQADAAADgBQACgCAAgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBIgEgCIgHgDIgLgEQgEgCgDgDQgDgEAAgHQAAgKAHgFQAHgGALAAQALAAAHAGQAIAFAAAKIgSAAQgBgDgCgCQgDgCgCAAQgDAAgCABQgCACAAADQAAAEADABIAJAFIALAEQAEABADAEQAEAEAAAGQAAAGgEAFQgDAFgFADQgGADgIAAQgGAAgHgDg");
	this.shape_14.setTransform(-7.35,-134.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AAPAjIgcgrIAAArIgRAAIAAhFIARAAIAcArIAAgrIARAAIAABFg");
	this.shape_15.setTransform(-14.15,-134.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgIAjIAAhFIARAAIAABFg");
	this.shape_16.setTransform(-19.325,-134.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgZAiQgGgDgDgFQgDgFAAgGQAAgHADgFQAEgEAHgEIgEgGIgBgGQAAgFADgFQACgEAFgCQAFgCAHAAQAGAAAFACQAFADACAEQACAEAAAFIgPAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgEACQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIAEAFIAQAQIABgBIAAgCIAEgFIARAAIgFAHIgGAMIARAQIgUAAIgGgGQgKAHgNAAQgIAAgGgCgAgVAOQAAADADADQADADAFAAQAHAAAEgEIgOgPQgIADAAAHg");
	this.shape_17.setTransform(-26.675,-134.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AgTAjIAAhFIASAAIAAA4IAVAAIAAANg");
	this.shape_18.setTransform(-35.125,-134.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgTAjIAAhFIASAAIAAA4IAVAAIAAANg");
	this.shape_19.setTransform(-39.875,-134.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#780031").s().p("AgUAjIAAhFIAqAAIAAAOIgZAAIAAANIAVAAIAAANIgVAAIAAAPIAZAAIAAAOg");
	this.shape_20.setTransform(-45.1,-134.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#780031").s().p("AgMAhQgGgCgDgFQgEgFgBgHIATAAQABAEACACQACACACAAQAFAAABgBQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBIgEgCIgGgDIgLgEQgFgCgDgDQgDgEAAgHQAAgKAHgFQAHgGALAAQALAAAHAGQAHAFABAKIgTAAQAAgDgCgCQgDgCgCAAQgDAAgCABQgCACAAADQAAAEADABIAJAFIALAEQAFABACAEQADAEAAAGQAAAGgDAFQgCAFgGADQgGADgIAAQgHAAgGgDg");
	this.shape_21.setTransform(-50.95,-134.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#780031").s().p("AgVAjIAAhFIAqAAIAAAOIgYAAIAAANIAWAAIAAANIgWAAIAAAPIAYAAIAAAOg");
	this.shape_22.setTransform(-58.75,-134.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#780031").s().p("AALAjIgLgtIgLAtIgUAAIgShFIASAAIAKAyIANgyIARAAIAMAyIALgyIASAAIgSBFg");
	this.shape_23.setTransform(-66.725,-134.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-143,94.7,29);


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
	this.shape.graphics.f("#780031").s().p("AgJAwQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAAEAFQAEADAAAGQAAAFgEAEQgEADgGAAQgFAAgEgDgAgKAQIgChCIAZAAIgDBCg");
	this.shape.setTransform(14.75,-40.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgUAtQgKgEgFgKQgFgJAAgNIAAg6IAXAAIAAA6QAAAJAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgJIAAg6IAYAAIAAA6QAAANgGAJQgFAJgJAFQgKAFgLAAQgLAAgJgFg");
	this.shape_1.setTransform(7.1,-40.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AgZAsQgLgHgHgLQgGgMAAgOQAAgOAGgLQAHgMALgGQAMgGANAAQAOAAALAGQAMAGAHAMQAGALABAOQAAAOgIAMQgGALgMAHQgLAGgOAAQgNAAgMgGgAgSgUQgHAIAAAMQAAANAHAIQAHAHALAAQAMAAAHgHQAHgIAAgNQAAgMgHgIQgHgIgMAAQgLAAgHAIg");
	this.shape_2.setTransform(-3.35,-40.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AgLAxIAAggIgihBIAbAAIASApIATgpIAbAAIgiBBIAAAgg");
	this.shape_3.setTransform(-13.5,-40.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AgdAxIAAhhIA7AAIAAATIgjAAIAAAUIAfAAIAAASIgfAAIAAAVIAjAAIAAATg");
	this.shape_4.setTransform(-24.825,-40.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AgmAxIAAhhIArAAQAPAAAJAHQAIAHAAALQAAAJgEAGQgFAGgIACQAJABAFAGQAFAHAAAJQAAAMgIAHQgJAHgPAAgAgOAeIAQAAQAHAAADgDQADgDAAgFQAAgFgDgDQgEgDgGAAIgQAAgAgOgIIAPAAQAFAAAEgDQADgCAAgGQAAgFgDgCQgEgDgFAAIgPAAg");
	this.shape_5.setTransform(-33.125,-40.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AgRAvQgIgEgGgHQgFgHAAgJIAaAAQAAAFADADQAEADAEAAQAFAAADgCQADgDAAgEQAAgEgCgCIgHgEIgJgEIgPgGQgGgCgFgFQgEgGAAgJQAAgOAKgIQAKgHAQAAQAPAAAKAHQAKAIABAOIgaAAQgBgFgCgDQgEgCgEAAQgEAAgDACQgCACAAAFQgBAEAFADIANAGIAPAGQAHACADAGQAFAFAAAJQAAAIgEAHQgEAHgJAEQgHAEgMAAQgJAAgJgDg");
	this.shape_6.setTransform(-45.15,-40.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AgLAxIAAhhIAXAAIAABhg");
	this.shape_7.setTransform(-51.5,-40.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AATAxIAAgoIglAAIAAAoIgYAAIAAhhIAYAAIAAAnIAlAAIAAgnIAYAAIAABhg");
	this.shape_8.setTransform(-58.625,-40.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgLAxIAAhOIgaAAIAAgTIBLAAIAAATIgaAAIAABOg");
	this.shape_9.setTransform(-67.85,-40.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgLAxIAAhOIgaAAIAAgTIBLAAIAAATIgaAAIAABOg");
	this.shape_10.setTransform(-6.45,-55.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AgdAxIAAhhIA7AAIAAATIgjAAIAAAUIAfAAIAAASIgfAAIAAAVIAjAAIAAATg");
	this.shape_11.setTransform(-14.275,-55.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AgbAxIAAhhIAYAAIAABPIAfAAIAAASg");
	this.shape_12.setTransform(-21.175,-55.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgLAxIAAhOIgaAAIAAgTIBLAAIAAATIgaAAIAABOg");
	this.shape_13.setTransform(-31.85,-55.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AgPATIAHglIAYAAIgQAlg");
	this.shape_14.setTransform(-38.075,-58.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AAUAxIgng7IAAA7IgYAAIAAhhIAYAAIAnA8IAAg8IAYAAIAABhg");
	this.shape_15.setTransform(-45.6,-55.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgYAsQgMgHgGgLQgIgMABgOQgBgOAIgLQAGgMAMgGQALgGANAAQAOAAALAGQAMAGAHAMQAGALAAAOQABAOgIAMQgGALgMAHQgLAGgOAAQgNAAgLgGgAgSgUQgHAIAAAMQAAANAHAIQAHAHALAAQAMAAAHgHQAHgIAAgNQAAgMgHgIQgHgIgMAAQgLAAgHAIg");
	this.shape_16.setTransform(-56.35,-55.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgrAxIAAhhIAlAAQAOAAAMAGQAMAGAGALQAGAMAAANQAAAPgGALQgGALgMAGQgMAGgOAAgAgTAdIALAAQANAAAHgIQAIgHAAgOQAAgMgIgIQgHgIgNAAIgLAAg");
	this.shape_17.setTransform(-66.725,-55.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-67.5,100.3,39.2);


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
	this.shape.graphics.f("#780031").s().p("AgRAtQgDgDAAgFQAAgFADgEQAEgDAFAAQAHAAACADQADAEABAFQgBAFgDADQgCAEgHAAQgFAAgEgEgAgSAPIAAgXIAIAAQAKAAAEgDQAGgCgBgHQAAgEgCgDQgDgCgEAAQgEAAgDACQgCADAAAFIgVAAQAAgIADgHQAEgGAHgEQAHgEAJAAQAOAAAJAIQAIAHAAANQAAAMgIAHQgIAGgOAAIAAAKg");
	this.shape.setTransform(15.1,-52.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780031").s().p("AgKAuIAAgeIggg9IAZAAIARAnIASgnIAZAAIggA9IAAAeg");
	this.shape_1.setTransform(7.325,-52.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#780031").s().p("AgoAuIAAhbIAjAAQAMAAAMAGQALAGAFAKQAGALAAAMQAAAOgGAKQgFAKgLAGQgMAGgMAAgAgRAbIAKAAQALAAAHgHQAIgHAAgNQAAgLgIgIQgHgHgLAAIgKAAg");
	this.shape_2.setTransform(-1.6,-52.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#780031").s().p("AAXAuIgGgQIghAAIgGAQIgXAAIAhhbIAZAAIAhBbgAALAMIgLggIgLAgIAWAAg");
	this.shape_3.setTransform(-11.25,-52.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#780031").s().p("AgbAuIAAhbIA3AAIAAASIggAAIAAATIAcAAIAAAQIgcAAIAAAUIAgAAIAAASg");
	this.shape_4.setTransform(-19.45,-52.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#780031").s().p("AALAuIgSgjIgFAAIAAAjIgXAAIAAhbIAlAAQAKAAAIAEQAIAEADAHQAEAGAAAIQAAAJgFAHQgFAHgKADIAVAkgAgMgDIAMAAQAGAAAEgDQADgDAAgGQAAgFgDgDQgEgDgGAAIgMAAg");
	this.shape_5.setTransform(-27.125,-52.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#780031").s().p("AgiAuIAAhbIAjAAQALAAAIAEQAHAEAEAHQAEAGAAAJQAAAIgEAGQgDAGgIAEQgIAEgLAAIgMAAIAAAhgAgLgEIALAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgLAAg");
	this.shape_6.setTransform(-38.075,-52.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780031").s().p("AAdAuIAAg2IgUA2IgRAAIgUg2IAAA2IgXAAIAAhbIAbAAIAYA/IAZg/IAbAAIAABbg");
	this.shape_7.setTransform(-48.275,-52.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#780031").s().p("AgTAqQgIgEgFgJQgFgIAAgNIAAg1IAWAAIAAA2QAAAIAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAg2IAWAAIAAA1QAAANgFAIQgFAJgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_8.setTransform(-58.825,-52.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#780031").s().p("AgiAuIAAhbIAjAAQALAAAIAEQAHAEAEAHQAEAGAAAJQAAAIgEAGQgDAGgIAEQgIAEgLAAIgMAAIAAAhgAgLgEIALAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgLAAg");
	this.shape_9.setTransform(-67.225,-52.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#780031").s().p("AgiAuIAAhbIAjAAQALAAAIAEQAHAEAEAHQAEAGAAAJQAAAIgEAGQgDAGgIAEQgIAEgLAAIgMAAIAAAhgAgLgEIALAAQAGAAADgDQADgDAAgFQAAgGgDgDQgDgDgGAAIgLAAg");
	this.shape_10.setTransform(15.525,-65.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#780031").s().p("AAdAuIAAg2IgUA2IgRAAIgUg2IAAA2IgXAAIAAhbIAbAAIAYA/IAZg/IAbAAIAABbg");
	this.shape_11.setTransform(5.325,-65.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#780031").s().p("AgTAqQgIgEgFgJQgFgIAAgNIAAg1IAWAAIAAA2QAAAIAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAg2IAWAAIAAA1QAAANgFAIQgFAJgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_12.setTransform(-5.225,-65.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#780031").s().p("AgQArQgIgDgFgGQgEgHAAgJIAXAAQABAGADACQACADAFAAQAEAAADgCQADgDAAgEQAAgDgCgCQgCgDgEgBIgIgDQgJgDgGgDQgFgCgEgFQgEgFAAgJQAAgMAJgIQAJgHAPAAQAOAAAJAHQAKAIAAAMIgYAAQAAgEgDgCQgDgDgEAAQgEAAgCACQgCACAAAEQAAAFADACIAMAGIAPAFQAFACAEAFQAEAFABAJQgBAHgEAHQgDAGgIAEQgHAEgLAAQgJAAgIgEg");
	this.shape_13.setTransform(-13.75,-65.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#780031").s().p("AALAuIgSgjIgFAAIAAAjIgXAAIAAhbIAlAAQAKAAAIAEQAIAEADAHQAEAGAAAIQAAAJgFAHQgFAHgKADIAVAkgAgMgDIAMAAQAGAAAEgDQADgDAAgGQAAgFgDgDQgEgDgGAAIgMAAg");
	this.shape_14.setTransform(-24.575,-65.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#780031").s().p("AgTAqQgIgEgFgJQgFgIAAgNIAAg1IAWAAIAAA2QAAAIAEAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAg2IAWAAIAAA1QAAANgFAIQgFAJgJAEQgJAEgKAAQgKAAgJgEg");
	this.shape_15.setTransform(-33.525,-65.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#780031").s().p("AgXApQgKgGgHgLQgGgLAAgNQAAgNAGgKQAHgLAKgGQALgGAMAAQANAAALAGQAKAGAGALQAHAKAAANQAAANgHALQgGALgKAGQgLAGgNAAQgMAAgLgGgAgRgTQgGAIAAALQAAAMAGAHQAHAHAKAAQALAAAGgHQAHgHAAgMQAAgLgHgHQgGgIgLAAQgKAAgHAHg");
	this.shape_16.setTransform(-43.175,-65.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#780031").s().p("AgKAuIAAgeIggg9IAZAAIARAnIASgnIAZAAIggA9IAAAeg");
	this.shape_17.setTransform(-52.625,-65.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#780031").s().p("AgQArQgIgDgFgGQgEgHAAgJIAXAAQABAGADACQACADAFAAQAEAAADgCQADgDAAgEQAAgDgCgCQgCgDgEgBIgIgDQgJgDgGgDQgFgCgEgFQgEgFAAgJQAAgMAJgIQAJgHAPAAQAOAAAJAHQAKAIAAAMIgYAAQAAgEgDgCQgDgDgEAAQgEAAgCACQgCACAAAEQAAAFAEACIALAGIAOAFQAGACAEAFQAEAFABAJQgBAHgEAHQgDAGgIAEQgHAEgLAAQgJAAgIgEg");
	this.shape_18.setTransform(-63.7,-65.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#780031").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_19.setTransform(-69.575,-65.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-76.7,101.5,35.400000000000006);


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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


(lib.frame3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


(lib.frame2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


(lib.frame1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frame1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


(lib.CTA_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CTA();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


(lib.BG_png = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,320,50);


// stage content:
(lib.WBAY_218541_MM_320x50 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(277));

	// CTA_png
	this.instance = new lib.CTA_1("synched",0);
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(277));

	// Logo_png
	this.instance_1 = new lib.Logo_1("synched",0);
	this.instance_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(277));

	// t3
	this.instance_2 = new lib.t3("synched",0);
	this.instance_2.setTransform(53.35,24.45,0.5,0.5,0,0,0,-26.6,-129.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).to({regX:-26.7,regY:-129.6,scaleX:1,scaleY:1,x:53.3,y:24.4,alpha:1},13,cjs.Ease.get(1)).wait(83));

	// frame3_png
	this.instance_3 = new lib.frame3_1("synched",0);
	this.instance_3.setTransform(80,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({alpha:1},13).wait(83));

	// water_png
	this.instance_4 = new lib.water_1("synched",0);
	this.instance_4.setTransform(80,318);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({y:300},21).wait(62).to({startPosition:0},0).to({y:324},13).to({_off:true},1).wait(96));

	// t2
	this.instance_5 = new lib.t2("synched",0);
	this.instance_5.setTransform(56.1,25.8,0.5,0.5,0,0,0,-23.9,-47.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({scaleX:0.5,scaleY:0.5,alpha:0},13).to({_off:true},1).wait(96));

	// frame2_png
	this.instance_6 = new lib.frame2_1("synched",0);
	this.instance_6.setTransform(80,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70).to({_off:false},0).to({alpha:1},13).wait(194));

	// t1
	this.instance_7 = new lib.t1("synched",0);
	this.instance_7.setTransform(57.25,24.9,0.5,0.5,0,0,0,-22.7,-59.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-22.8,scaleX:1,scaleY:1,x:57.2,alpha:1},14,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:-22.7,scaleX:0.5,scaleY:0.5,x:57.25,alpha:0},14).to({_off:true},1).wait(207));

	// frame1_png
	this.instance_8 = new lib.frame1_1("synched",0);
	this.instance_8.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(277));

	// BG_png
	this.instance_9 = new lib.BG_png("synched",0);
	this.instance_9.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(277));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,24,162,50);
// library properties:
lib.properties = {
	id: '75E153FF2D744F028C65A7813D4CAE23',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"CTA.png", id:"CTA"},
		{src:"frame1.png", id:"frame1"},
		{src:"frame2.png", id:"frame2"},
		{src:"frame3.png", id:"frame3"},
		{src:"Logo.png", id:"Logo"},
		{src:"water.png", id:"water"}
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