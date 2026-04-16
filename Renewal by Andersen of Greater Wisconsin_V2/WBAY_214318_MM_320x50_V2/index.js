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
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);// helper functions:

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
	this.shape.graphics.f("#12127D").s().p("AgJAKQgEgDAAgHQAAgGAEgDQAEgDAFAAQAGAAAEADQAEADAAAGQAAAHgEADQgEADgGAAQgFAAgEgDg");
	this.shape.setTransform(144.975,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AgRAkQgJgEgFgJQgFgJAAgNQAAgNAEgJQAFgJAJgFQAIgEALAAQALAAAIAEQAJAEAEAIQAEAIAAALIAAALIguAAQAAAGAEAEQAEAEAIAAQAHAAAGgBIAMgFIAAATQgFADgHACQgHABgKAAQgKAAgKgEgAANgJIgBgGIgEgEQgDgCgDAAQgEAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_1.setTransform(138.625,7.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgOAkQgJgEgEgJQgFgJAAgOQAAgNAFgJQAGgJAIgEQAKgEALAAQAGAAAHACIAMAEIgIAUIgJgEQgEgBgEAAQgFAAgCACQgCACgDAEQgBAFAAAFQAAAHACAEQACAEACACQADACAEAAIAMgCIAKgFIAAAVIgKAFQgHACgIAAQgLAAgIgEg");
	this.shape_2.setTransform(130.7,7.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AgMA2IAAhMIAZAAIAABMgAgJggQgEgDAAgGQAAgIAEgCQAEgCAFAAQAGAAAEACQAEACAAAIQAAAGgEADQgEACgGAAQgFAAgEgCg");
	this.shape_3.setTransform(124.525,5.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgMAnIgehNIAcAAIANAtIABADIAAAFIAAAAIAAgEIABgEIAOgtIAcAAIgeBNg");
	this.shape_4.setTransform(117.975,7.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgaAoIAAhNIAUAAIAEAMIABAAQABgEAEgCIAHgGQAEgBAFAAIAEAAIAEABIgDAZIgDgBIgGAAIgFABIgGABQgDACgBADQgBADAAAEIAAAng");
	this.shape_5.setTransform(110.8,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AgRAkQgJgEgFgJQgFgJAAgNQAAgNAEgJQAFgJAJgFQAIgEALAAQALAAAIAEQAJAEAEAIQAEAIAAALIAAALIguAAQAAAGAEAEQAEAEAIAAQAHAAAGgBIAMgFIAAATQgFADgHACQgHABgKAAQgKAAgKgEgAANgJIgBgGIgEgEQgDgCgDAAQgEAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_6.setTransform(102.825,7.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgQAnQgHgBgHgCIAAgWQAIAEAIABIALACIAGgBQAAAAABgBQAAAAABgBQAAAAAAAAQAAgBAAAAIgBgDIgFgDIgKgEQgGgDgEgDQgFgCgCgFQgCgEAAgGQAAgMAJgFQAJgGAOAAQAHAAAGACIAPAEIgHASIgMgEIgJgCIgFABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIABADIAEACIAKAEIALAGQAEADACAEQACAEABAHQgBAHgDAGQgDAGgIADQgGADgMAAIgOgBg");
	this.shape_7.setTransform(94.95,7.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AgNA1IAAhpIAaAAIAABpg");
	this.shape_8.setTransform(85.45,5.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgYAlQgGgCgDgGQgDgFAAgJQAAgMAJgFQAJgGAQgBIAMgBIAAgBQAAgFgDgCQgCgCgFAAIgJABIgLAFIgIgSQAHgEAIgBQAJgCAJAAQAPAAAIAHQAJAHAAAOIAAAyIgTAAIgFgLIgBAAQgDAFgDACQgEADgDABQgFABgGAAQgHAAgFgDgAgGAHQgDACAAAFQAAADADACQACACADAAQAEAAAEgDQADgDAAgFIAAgGIgGAAQgHABgDACg");
	this.shape_9.setTransform(78.675,7.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AALAoIAAgqQAAgIgCgDQgDgFgEAAQgHABgCAGQgDAGAAALIAAAiIgbAAIAAhNIAVAAIADAKIABAAQADgEADgCIAHgEQAEgCAGABQAMgBAHAIQAIAGAAAPIAAAyg");
	this.shape_10.setTransform(69.85,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgPAmQgGgDgGgFQgFgFgCgIQgDgHAAgKQgBgMAFgJQAEgJAKgEQAIgFALAAQAMAAAIAFQAJAEAFAJQAFAJgBAMQABAKgDAHQgDAIgFAFQgFAFgHADQgHACgJAAQgHAAgIgCgAgHgOQgDAFAAAJIABALQABAFACACQADACADAAQAFAAACgCQACgCABgFIABgLIgBgKQgBgFgCgCQgDgCgEAAQgFAAgCAFg");
	this.shape_11.setTransform(60.7,7.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AgMA2IAAhMIAZAAIAABMgAgJggQgEgDAAgGQAAgIAEgCQAEgCAFAAQAGAAAEACQAEACAAAIQAAAGgEADQgEACgGAAQgFAAgEgCg");
	this.shape_12.setTransform(53.975,5.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgGAtQgFgDgEgFQgDgGAAgLIAAgfIgJAAIAAgLIAMgIIAHgQIAQAAIAAAPIATAAIAAAUIgTAAIAAAdQAAAEACACQACACADAAIAHgBIAGgCIAAAUIgJADQgFABgHAAQgHAAgGgCg");
	this.shape_13.setTransform(48.475,6.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AglA4IAAhuIAXAAIADAKIABAAIAFgFIAGgEQAEgCAFAAQANAAAHAKQAIALAAATQAAANgEAIQgEAJgGAFQgGAEgJAAQgFAAgEgBIgFgEIgFgEIgBAAIABAGIAAAHIAAAcgAgFggQgCACgCADIgBAKIAAACIABAKQACAEACABQACADADAAQADAAACgCQADgBABgEQACgFAAgGQAAgLgEgEQgCgEgFAAQgDAAgCACg");
	this.shape_14.setTransform(40.95,8.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgRAkQgJgEgFgJQgFgJAAgNQAAgNAEgJQAFgJAJgFQAIgEALAAQALAAAIAEQAJAEAEAIQAEAIAAALIAAALIguAAQAAAGAEAEQAEAEAIAAQAHAAAGgBIAMgFIAAATQgFADgHACQgHABgKAAQgKAAgKgEgAANgJIgBgGIgEgEQgDgCgDAAQgEAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_15.setTransform(31.975,7.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgOAkQgJgEgEgJQgFgJAAgOQAAgNAFgJQAGgJAIgEQAKgEALAAQAGAAAHACIAMAEIgIAUIgJgEQgEgBgEAAQgFAAgCACQgCACgDAEQgBAFAAAFQAAAHACAEQACAEACACQADACAEAAIAMgCIAKgFIAAAVIgKAFQgHACgIAAQgLAAgIgEg");
	this.shape_16.setTransform(24.05,7.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AANAnIgNgYIgMAYIgeAAIAYgnIgXgmIAeAAIALAWIAMgWIAeAAIgXAmIAYAng");
	this.shape_17.setTransform(15.75,7.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AgdAyIAAhjIA7AAIAAAVIggAAIAAAQIAdAAIAAAVIgdAAIAAATIAgAAIAAAWg");
	this.shape_18.setTransform(7.75,5.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AgJAKQgEgDAAgHQAAgGAEgDQAEgDAFAAQAGAAAEADQAEADAAAGQAAAHgEADQgEADgGAAQgFAAgEgDg");
	this.shape_19.setTransform(139.925,-7.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgQAnQgHgBgGgCIAAgWQAHAEAIABIAMACIAFgBQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIgFgDIgKgEQgGgDgEgDQgFgCgCgFQgBgEAAgGQAAgMAIgFQAJgGANAAQAIAAAHACIAOAEIgHASIgMgEIgKgCIgDABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIABADIADACIAKAEIAMAGQAEADACAEQADAEAAAHQAAAHgEAGQgDAGgIADQgGADgLAAIgPgBg");
	this.shape_20.setTransform(134.35,-9.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgGAtQgFgDgEgFQgDgGAAgLIAAgfIgJAAIAAgLIAMgIIAHgQIAQAAIAAAPIATAAIAAAUIgTAAIAAAdQAAAEACACQACACADAAIAHgBIAGgCIAAAUIgJADQgFABgHAAQgHAAgGgCg");
	this.shape_21.setTransform(127.475,-10.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AgOAkQgIgEgGgJQgEgJAAgOQAAgNAFgJQAFgJAJgEQAKgEAKAAQAIAAAGACIAMAEIgIAUIgJgEQgEgBgFAAQgDAAgDACQgDACgCAEQgBAFAAAFQAAAHACAEQABAEADACQADACAEAAIAMgCIAKgFIAAAVIgKAFQgHACgIAAQgLAAgIgEg");
	this.shape_22.setTransform(120.7,-9.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgXAlQgGgEgEgGQgEgGAAgKIAAgyIAbAAIAAAqQAAAIACADQACAEAFAAQAEAAADgDQADgCABgGQABgFAAgGIAAgjIAbAAIAABNIgUAAIgEgJIgBAAQgDADgDACIgHAFIgKABQgHAAgGgDg");
	this.shape_23.setTransform(112.125,-9.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgdArQgIgKABgTQAAgTAHgKQAIgLANAAQAFAAADACQADABADADIAFAGIABAAIgBgIIAAgKIAAgVIAbAAIAABpIgVAAIgFgKIgBAAIgFAHIgGADQgEACgFAAQgMAAgIgLgAgGAAQgDAEAAAKQAAAKADAFQACADAFAAQAGAAADgDQADgFgBgIIAAgCQABgJgDgFQgDgEgGAAQgFAAgCAEg");
	this.shape_24.setTransform(102.8,-11.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AgPAmQgGgDgGgFQgFgFgCgIQgDgHAAgKQgBgMAFgJQAEgJAKgEQAIgFAMAAQALAAAIAFQAJAEAFAJQAFAJgBAMQABAKgDAHQgDAIgFAFQgFAFgHADQgHACgJAAQgHAAgIgCgAgHgOQgDAFAAAJIABALQABAFACACQADACADAAQAFAAACgCQACgCABgFIABgLIgBgKQgBgFgCgCQgDgCgEAAQgFAAgCAFg");
	this.shape_25.setTransform(94,-9.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgbAnIAAhMIAUAAIAFAMIABAAQABgEAEgDIAHgEQAEgCAEgBIAFABIADABIgCAYIgDAAIgGAAIgGAAIgEADQgDABgCADQgBADAAAEIAAAmg");
	this.shape_26.setTransform(86.65,-10.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AglA4IAAhuIAXAAIADAKIABAAIAFgFIAGgEQAEgCAFAAQANAAAHAKQAIALAAATQAAANgEAIQgEAJgGAFQgGAEgJAAQgGAAgDgBIgFgEIgFgEIgBAAIABAGIAAAHIAAAcgAgFggQgDACgBADIgBAKIAAACIABAKQACAEACABQACADADAAQADAAADgCQACgBABgEQACgFAAgGQgBgLgDgEQgCgEgFAAQgDAAgCACg");
	this.shape_27.setTransform(78.65,-8.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgbAnIAAhMIAVAAIAEAMIABAAQABgEAEgDIAHgEQAEgCAFgBIAEABIAEABIgDAYIgDAAIgGAAIgFAAIgGADQgDABgBADQgBADAAAEIAAAmg");
	this.shape_28.setTransform(67.5,-10.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AgOAmQgIgDgFgFQgFgFgCgIQgEgHAAgKQABgMAEgJQAFgJAIgEQAJgFAMAAQAKAAAJAFQAJAEAFAJQAEAJABAMQgBAKgCAHQgCAIgFAFQgGAFgHADQgHACgJAAQgIAAgGgCgAgHgOQgEAFAAAJIABALQACAFADACQACACADAAQAFAAACgCQACgCACgFIABgLIgBgKQgCgFgCgCQgDgCgEAAQgFAAgCAFg");
	this.shape_29.setTransform(59.4,-9.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgMA2IAAhMIAZAAIAABMgAgJggQgEgDAAgGQAAgIAEgCQAEgCAFAAQAGAAAEACQAEACAAAIQAAAGgEADQgEACgGAAQgFAAgEgCg");
	this.shape_30.setTransform(52.675,-11.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AgbAnIAAhMIAUAAIAFAMIABAAQABgEAEgDIAHgEQAEgCAEgBIAFABIADABIgCAYIgDAAIgGAAIgGAAIgEADQgDABgCADQgBADAAAEIAAAmg");
	this.shape_31.setTransform(47.5,-10.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20000").s().p("AgRAkQgJgEgFgJQgFgJAAgNQAAgNAEgJQAFgJAJgFQAIgEALAAQALAAAIAEQAJAEAEAIQAEAIAAALIAAALIguAAQAAAGAEAEQAEAEAIAAQAHAAAGgBIAMgFIAAATQgFADgHACQgHABgKAAQgKAAgKgEgAANgJIgBgGIgEgEQgDgCgDAAQgEAAgDADQgDADgBAGIAWAAIAAAAg");
	this.shape_32.setTransform(39.525,-9.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20000").s().p("AglA4IAAhuIAXAAIADAKIABAAIAFgFIAGgEQADgCAGAAQANAAAHAKQAIALgBATQAAANgDAIQgEAJgGAFQgHAEgIAAQgGAAgDgBIgFgEIgFgEIAAAAIAAAGIAAAHIAAAcgAgFggQgDACgBADIgBAKIAAACIABAKQABAEADABQACADADAAQAEAAACgCQACgBABgEQABgFAAgGQAAgLgDgEQgCgEgFAAQgDAAgCACg");
	this.shape_33.setTransform(30.85,-8.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20000").s().p("AgXAlQgGgEgEgGQgEgGAAgKIAAgyIAbAAIAAAqQAAAIACADQACAEAFAAQAEAAADgDQADgCABgGQABgFAAgGIAAgjIAbAAIAABNIgUAAIgEgJIgBAAQgDADgDACIgHAFIgKABQgHAAgGgDg");
	this.shape_34.setTransform(21.525,-9.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20000").s().p("AgPAzIgJgCIgKgEIAAgYIARAGQAIACAGAAIAGgBIAEgCIABgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgGgDIgKgFIgKgFQgEgDgDgCIgGgJQgBgEAAgHQAAgKAFgGQAEgHAJgDQAIgEAKAAQAKAAAIADQAIACAGADIgIAVIgNgFQgGgCgGAAIgEABIgEACIAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAGAEIALAFQAHAEAGAEQAFADACAFQADAFAAAHQAAAJgEAHQgEAIgIAEQgKAEgMABg");
	this.shape_35.setTransform(12.9,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-23,163.5,40.1);


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
	this.shape.graphics.f("#12127D").s().p("AARAhIAAgoQAAgIgEgEQgDgEgIAAQgKAAgEAGQgEAGAAALIAAAhIgKAAIAAg/IAIAAIABAJIABAAQACgEADgCQADgCAEgBIAHgCQAMAAAGAGQAGAGAAAMIAAApg");
	this.shape.setTransform(148.925,-124.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12127D").s().p("AAQAgIgMgkIgBgFIgBgEIgBgEIgBgEIAAAEIgBAEIgBAEIgCAFIgLAkIgLAAIgSg/IAKAAIAJAiIACAHIABAHIABAFIABAAIAAgEIACgEIABgEIABgFIAMgkIAJAAIAMAkIACAGIABAGIABAFIAAAAIABgFIACgGIACgIIAJgiIAKAAIgRA/g");
	this.shape_1.setTransform(140.6,-124.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#12127D").s().p("AgLAfQgFgCgEgEQgEgFgCgGQgDgGABgIQAAgKADgHQAEgHAGgEQAHgEAIAAQAJAAAHAEQAGAEAEAHQAEAIgBAJQAAAIgCAGQgBAGgFAFQgDAEgGACQgFACgHAAQgFAAgGgCgAgOgRQgEAGAAALQAAAIACAFQACAGAEADQAFADAFAAQAHAAAEgDQAEgDADgGQABgFAAgIQAAgHgBgFQgDgGgEgDQgEgDgHAAQgJAAgFAHg");
	this.shape_2.setTransform(132.35,-124.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#12127D").s().p("AghArIAAhVIAaAAQAMAAAKAFQAJAFAFAJQAFAJAAAOQAAAOgFAJQgGAKgKAFQgJAFgNAAgAgXAiIANAAQAQAAAJgJQAJgIAAgRQAAgLgEgIQgEgHgHgEQgIgDgJAAIgPAAg");
	this.shape_3.setTransform(124.6,-125.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#12127D").s().p("AgYAuIgEgBIAAgIIAEABIADAAQAEABADgCIAEgEIAEgGIADgJIgag/IAKAAIAPAlIACAGIACAEIAAAGIABAAIACgIIADgIIAOglIAKAAIgcBIQgCAGgCAEQgDAEgEADQgEADgHgBg");
	this.shape_4.setTransform(113.95,-122.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#12127D").s().p("AgMAeQgGgEgEgHQgEgIAAgKQAAgKADgHQAEgIAGgEQAHgEAHAAQAIAAAGADQAGAEADAHQADAGAAAJIAAAFIgrAAQAAALAGAGQAFAGAJAAQAGAAAFgBIAJgDIAAAIIgJADIgLABQgJAAgHgDgAARgFQAAgGgCgEQgBgEgEgDQgDgCgGAAQgHAAgEAFQgFAFgBAJIAhAAIAAAAg");
	this.shape_5.setTransform(107.625,-124.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#12127D").s().p("AARAhIAAgoQAAgIgEgEQgDgEgIAAQgKAAgEAGQgEAGAAALIAAAhIgKAAIAAg/IAIAAIABAJIABAAQACgEADgCQADgCAEgBIAHgCQAMAAAGAGQAGAGAAAMIAAApg");
	this.shape_6.setTransform(100.625,-124.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#12127D").s().p("AgLAfQgFgCgEgEQgEgFgCgGQgDgGABgIQAAgKADgHQAEgHAGgEQAHgEAIAAQAJAAAHAEQAGAEAEAHQADAIAAAJQAAAIgCAGQgBAGgEAFQgEAEgFACQgGACgHAAQgFAAgGgCgAgNgRQgFAGAAALQAAAIACAFQACAGAEADQAFADAFAAQAHAAAEgDQAEgDACgGQACgFAAgIQAAgHgCgFQgCgGgEgDQgEgDgHAAQgJAAgEAHg");
	this.shape_7.setTransform(93.3,-124.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12127D").s().p("AAhArIAAg2IAAgIIAAgHIAAgGIAAAAIgdBLIgHAAIgdhLIgBAAIABAGIAAAHIAAAJIAAA1IgJAAIAAhVIAPAAIAaBGIAAAAIAchGIAOAAIAABVg");
	this.shape_8.setTransform(84.325,-125.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#12127D").s().p("AgLAfQgFgCgEgEQgEgFgCgGQgCgGAAgIQAAgKADgHQAEgHAHgEQAGgEAIAAQAJAAAHAEQAGAEAEAHQAEAIAAAJQgBAIgCAGQgCAGgDAFQgEAEgFACQgGACgHAAQgGAAgFgCgAgNgRQgFAGAAALQAAAIACAFQACAGAEADQAEADAGAAQAHAAAEgDQAEgDACgGQACgFAAgIQAAgHgCgFQgCgGgEgDQgEgDgHAAQgJAAgEAHg");
	this.shape_9.setTransform(72.25,-124.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#12127D").s().p("AAWArIgthHIgBAAIABAGIAAAIIAAAJIAAAwIgJAAIAAhVIALAAIAtBHIABAAIAAgGIgBgIIAAgIIAAgxIAJAAIAABVg");
	this.shape_10.setTransform(64.15,-125.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#12127D").s().p("AgIAPIADgKIACgJIABgKIAKAAIAAACIgCAJIgDAJIgEAJg");
	this.shape_11.setTransform(54.8,-121.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#12127D").s().p("AAAAmQgEgCgCgDQgDgFAAgIIAAglIgJAAIAAgEIAJgEIAEgOIAFAAIAAAPIATAAIAAAHIgTAAIAAAlQAAAGADADQADADAEAAIAFAAIAEgBIAAAHIgFABIgGABQgFAAgDgCg");
	this.shape_12.setTransform(51.3,-125.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#12127D").s().p("AgOAgIgIgDIAAgJIAKAEQAFACAGAAQAHAAADgDQAEgDABgFQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgFgEIgJgEIgKgEQgFgCgCgEQgDgDAAgFQAAgIAHgFQAGgEAKAAQAGAAAFABIAJADIgDAIIgJgDIgJgBQgFAAgEACQgDACAAAEQAAADABACIAFAEIAJAEIALADQAEADACADQADADAAAGQAAAGgDAEQgDAEgGACQgGACgGAAIgNgBg");
	this.shape_13.setTransform(46.4,-124.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#12127D").s().p("AgMAeQgGgEgEgHQgEgIAAgKQAAgKADgHQAEgIAGgEQAHgEAHAAQAIAAAGADQAGAEADAHQADAGAAAJIAAAFIgrAAQAAALAGAGQAFAGAJAAQAGAAAFgBIAJgDIAAAIIgJADIgLABQgJAAgHgDgAARgFQAAgGgCgEQgBgEgEgDQgDgCgGAAQgHAAgEAFQgFAFgBAJIAhAAIAAAAg");
	this.shape_14.setTransform(40.175,-124.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#12127D").s().p("AgRAhIAAg/IAIAAIABALIAAAAIAFgGQADgDACgCQAEgCAFAAIAEABIADAAIgBAJIgDAAIgEgBQgEAAgDACQgDABgCADIgEAHQgCAEAAAFIAAAig");
	this.shape_15.setTransform(34.775,-124.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#12127D").s().p("AgMAeQgGgEgEgHQgEgIAAgKQAAgKADgHQAEgIAGgEQAHgEAHAAQAIAAAGADQAGAEADAHQADAGAAAJIAAAFIgrAAQAAALAGAGQAFAGAJAAQAGAAAFgBIAJgDIAAAIIgJADIgLABQgJAAgHgDgAARgFQAAgGgCgEQgBgEgEgDQgDgCgGAAQgHAAgEAFQgFAFgBAJIAhAAIAAAAg");
	this.shape_16.setTransform(28.575,-124.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#12127D").s().p("AAAAmQgEgCgCgDQgDgFAAgIIAAglIgJAAIAAgEIAJgEIAEgOIAFAAIAAAPIATAAIAAAHIgTAAIAAAlQAAAGADADQADADAEAAIAFAAIAEgBIAAAHIgFABIgFABQgGAAgDgCg");
	this.shape_17.setTransform(23.05,-125.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#12127D").s().p("AARAhIAAgoQAAgIgEgEQgDgEgIAAQgKAAgEAGQgEAGAAALIAAAhIgKAAIAAg/IAIAAIABAJIABAAQACgEADgCQADgCAEgBIAHgCQAMAAAGAGQAGAGAAAMIAAApg");
	this.shape_18.setTransform(17.325,-124.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#12127D").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_19.setTransform(11.9,-125.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#12127D").s().p("AgLAfQgFgCgEgEQgEgFgCgGQgCgGAAgIQAAgKADgHQAEgHAGgEQAHgEAJAAQAIAAAHAEQAGAEAEAHQAEAIgBAJQAAAIgBAGQgCAGgFAFQgDAEgGACQgFACgHAAQgFAAgGgCgAgOgRQgEAGAAALQAAAIACAFQACAGAEADQAFADAFAAQAHAAAEgDQAFgDACgGQABgFAAgIQAAgHgBgFQgCgGgFgDQgEgDgHAAQgJAAgFAHg");
	this.shape_20.setTransform(3.55,-124.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#12127D").s().p("AAWArIguhHIAAAAIAAAGIABAIIAAAJIAAAwIgKAAIAAhVIAMAAIAuBHIAAAAIAAgGIAAgIIAAgIIAAgxIAJAAIAABVg");
	this.shape_21.setTransform(-4.55,-125.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#12127D").s().p("AgHAPIACgKIACgJIABgKIAKAAIABACIgDAJIgDAJIgDAJg");
	this.shape_22.setTransform(141.5,-135.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#12127D").s().p("AgNAgIgJgDIAAgJIAJAEQAGACAFAAQAIAAAEgDQADgDAAgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgFgEIgJgEIgLgEQgEgCgDgEQgCgDAAgFQAAgIAHgFQAGgEAKAAQAGAAAFABIAJADIgDAIIgIgDIgJgBQgHAAgDACQgDACgBAEQABADABACIAGAEIAIAEIAKADQAFADADADQACADAAAGQAAAGgDAEQgDAEgGACQgGACgHAAIgLgBg");
	this.shape_23.setTransform(137.35,-138.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#12127D").s().p("AAAAnQgEgCgCgFQgDgEAAgHIAAglIgJAAIAAgGIAJgDIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAkQAAAGADADQADADAEAAIAFAAIAEgBIAAAIIgFABIgGAAQgFAAgDgBg");
	this.shape_24.setTransform(132.3,-139.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#12127D").s().p("AARAhIAAgoQAAgIgEgEQgDgEgIAAQgKAAgEAGQgEAGAAALIAAAhIgKAAIAAg/IAIAAIABAJIABAAQACgEADgCQADgCAEgBIAHgCQAMAAAGAGQAGAGAAAMIAAApg");
	this.shape_25.setTransform(126.575,-138.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#12127D").s().p("AgMAeQgGgEgEgHQgEgIAAgKQAAgKADgHQAEgIAGgEQAHgEAHAAQAIAAAGADQAGAEADAHQADAGAAAJIAAAFIgrAAQAAALAGAGQAFAGAJAAQAGAAAFgBIAJgDIAAAIIgJADIgLABQgJAAgHgDgAARgFQAAgGgCgEQgBgEgEgDQgDgCgGAAQgHAAgEAFQgFAFgBAJIAhAAIAAAAg");
	this.shape_26.setTransform(119.525,-138.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#12127D").s().p("AAkAhIAAgpQAAgIgDgEQgEgDgHAAQgJAAgEAFQgFAFAAALIAAAjIgIAAIAAgpQAAgFgCgEQgBgDgDgCQgDgBgEAAQgHAAgDACQgFADgCAFQgBAFAAAIIAAAhIgJAAIAAg/IAHAAIACAJIAAAAIAFgGIAGgDQAEgCAEAAQAIAAAEADQAFADABAFIABAAQADgFAGgDQAGgDAGAAQAKAAAGAGQAFAFABANIAAApg");
	this.shape_27.setTransform(110.65,-138.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#12127D").s().p("AgYAuIgEAAIAAgIIAEAAIADABQADgBAEgBIAEgEIAEgHIADgJIgag/IAKAAIAPAlIACAHIACAFIAAAFIAAAAIADgHIADgKIAOglIAKAAIgcBJQgCAGgCAEQgDAEgEADQgFADgGAAg");
	this.shape_28.setTransform(102.05,-137.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#12127D").s().p("AgPAfQgFgCgCgEQgDgEAAgGQAAgKAIgFQAHgEAPgBIALAAIAAgEQAAgIgDgEQgEgDgGAAQgFAAgEABIgJAEIgDgIIAKgDQAGgCAFAAQAMAAAFAFQAGAFAAAMIAAAqIgHAAIgCgJIgBAAIgFAGQgDACgEABIgJABQgFAAgFgCgAAGABQgLAAgFAEQgFADAAAHQAAAFAEADQADADAGAAQAHAAAGgFQAFgFAAgJIAAgGg");
	this.shape_29.setTransform(95.525,-138.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#12127D").s().p("AgaArIAAhVIAWAAQAQAAAIAHQAHAGAAAMQAAAGgCAEQgBAFgEADQgEAEgHACQgGACgJAAIgKAAIAAAigAgQABIAJAAQAHAAAGgBQAFgCADgEQADgEAAgGQAAgJgGgEQgFgEgLAAIgLAAg");
	this.shape_30.setTransform(89.075,-139.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#12127D").s().p("AgLAfQgFgCgEgEQgEgFgCgGQgDgGAAgIQABgKAEgHQADgHAHgEQAGgEAJAAQAIAAAGAEQAIAEADAHQADAIABAJQAAAIgCAGQgDAGgEAFQgDAEgGACQgFACgHAAQgFAAgGgCgAgOgRQgEAGAAALQAAAIACAFQACAGAEADQAFADAFAAQAHAAAEgDQAFgDACgGQACgFAAgIQAAgHgCgFQgCgGgFgDQgEgDgHAAQgJAAgFAHg");
	this.shape_31.setTransform(78.5,-138.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#12127D").s().p("AAWArIgthHIgBAAIABAGIAAAIIAAAJIAAAwIgJAAIAAhVIALAAIAtBHIABAAIAAgGIgBgIIAAgIIAAgxIAJAAIAABVg");
	this.shape_32.setTransform(70.4,-139.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#12127D").s().p("AgEAgQgCgCAAgEQAAgEACgCQABAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQADAAACACQACACAAAEQAAAEgCACQgCACgDgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAgAgEgUQgCgBAAgEQAAgFACgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQADAAACABQACABAAAFQAAAEgCABQgCACgDAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_33.setTransform(61.225,-138.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#12127D").s().p("AgNAgIgJgDIAAgJIAKAEQAFACAGAAQAHAAADgDQAFgDAAgFQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgFgEIgJgEIgKgEQgFgCgCgEQgDgDAAgFQAAgIAHgFQAGgEAKAAQAGAAAFABIAKADIgEAIIgJgDIgJgBQgFAAgEACQgEACABAEQAAADABACIAFAEIAJAEIALADQAEADACADQADADAAAGQAAAGgDAEQgDAEgGACQgGACgGAAIgMgBg");
	this.shape_34.setTransform(56.85,-138.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#12127D").s().p("AARAtIAAgoQAAgIgEgDQgDgFgIAAQgGABgEACQgFADgBAFQgCAFAAAHIAAAhIgKAAIAAhaIAKAAIAAAbIAAAGIgBADIABAAIAFgFQADgDAEgBQAEgBADAAQAIAAAFACQAFADADAFQADAGAAAHIAAApg");
	this.shape_35.setTransform(50.325,-140.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#12127D").s().p("AAAAnQgEgCgCgFQgDgEAAgHIAAglIgJAAIAAgGIAJgDIAEgOIAFAAIAAAPIASAAIAAAIIgSAAIAAAkQAAAGADADQADADAEAAIAFAAIAEgBIAAAIIgEABIgHAAQgFAAgDgBg");
	this.shape_36.setTransform(44.45,-139.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#12127D").s().p("AARAhIAAgoQAAgIgEgEQgDgEgIAAQgKAAgEAGQgEAGAAALIAAAhIgKAAIAAg/IAIAAIABAJIABAAQACgEADgCQADgCAEgBIAHgCQAMAAAGAGQAGAGAAAMIAAApg");
	this.shape_37.setTransform(38.725,-138.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#12127D").s().p("AgLAfQgFgCgEgEQgEgFgCgGQgCgGgBgIQAAgKAFgHQADgHAHgEQAGgEAIAAQAJAAAGAEQAIAEADAHQAEAIAAAJQAAAIgDAGQgCAGgDAFQgEAEgFACQgGACgHAAQgGAAgFgCgAgNgRQgFAGAAALQAAAIACAFQACAGAEADQAEADAGAAQAHAAAEgDQAEgDACgGQACgFABgIQgBgHgCgFQgCgGgEgDQgEgDgHAAQgJAAgEAHg");
	this.shape_38.setTransform(31.4,-138.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#12127D").s().p("AAhArIAAg2IAAgIIAAgHIAAgGIAAAAIgdBLIgHAAIgdhLIgBAAIABAGIAAAHIAAAJIAAA1IgJAAIAAhVIAPAAIAaBGIAAAAIAchGIAOAAIAABVg");
	this.shape_39.setTransform(22.425,-139.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#12127D").s().p("AAKArIAAgUIgpAAIAAgIIAog5IAKAAIAAA5IANAAIAAAIIgNAAIAAAUgAAHgbIgDAFIgaAlIAgAAIAAgbIAAgGIAAgGIAAgEIAAgDIAAAAg");
	this.shape_40.setTransform(10.55,-139.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#12127D").s().p("AgbArIAAgHIAXgYIAKgLQAEgFACgEQADgFAAgGQAAgIgFgDQgEgEgGAAQgGAAgFACQgFACgFAEIgFgGIAIgGQADgCAFgBQAFgCAFABQAHAAAFACQAHADACAFQAEAGAAAGQgBAHgCAGQgDAGgEAEIgMAMIgSATIAAAAIArAAIAAAJg");
	this.shape_41.setTransform(3.65,-139.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-150.3,169.5,34.70000000000002);


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
	this.shape.graphics.f("#B20000").s().p("AgIApQgDgDAAgGQAAgGADgDQAEgCAEAAQAFAAADACQAEADAAAGQAAAGgEADQgDADgFAAQgEAAgEgDgAgJAMIgCg2IAYAAIgEA2g");
	this.shape.setTransform(83.15,34.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20000").s().p("AgLArIAAghIgcg0IAZAAIAOAgIAPggIAZAAIgcAzIAAAig");
	this.shape_1.setTransform(77.425,34.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20000").s().p("AASArIgEgQIgaAAIgFAQIgaAAIAdhVIAeAAIAbBVgAAJAIIgDgNIgCgHIgDgJIgBgHIgBAHIgBAJIgCAHIgEANIARAAg");
	this.shape_2.setTransform(69.1,34.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20000").s().p("AAbArIAAgmIAAgHIABgJIAAgHIAAAAIgSA9IgVAAIgRg9IgBAAIABAHIAAAIIABAJIAAAlIgVAAIAAhVIAfAAIARA8IAAAAIASg8IAfAAIAABVg");
	this.shape_3.setTransform(58.975,34.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20000").s().p("AgKArIAAhCIgWAAIAAgTIBBAAIAAATIgWAAIAABCg");
	this.shape_4.setTransform(137.2,21.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20000").s().p("AgbAiQgIgJgBgQIAAgzIAYAAIAAAxQAAAJADAEQAEAEAFAAQAEAAADgCQAEgBABgEQABgEAAgGIAAgxIAYAAIAAAyQgBALgEAIQgDAIgJAEQgIAEgMAAQgRAAgKgJg");
	this.shape_5.setTransform(129.15,21.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20000").s().p("AgSApQgIgDgFgGQgFgGgCgIQgDgIAAgKQAAgNAFgJQAEgKAJgFQAKgGANAAQAPAAAJAGQAJAFAEAKQAFAKAAAMQAAAKgDAIQgCAIgFAGQgFAGgIADQgIADgLAAQgKAAgIgDgAgJgVQgEADgCAGQgBAFAAAHQAAAIABAGQACAFAEADQAEADAFAAQAGAAAEgDQAEgDACgFQABgGAAgIQAAgKgEgIQgDgGgKAAQgFAAgEADg");
	this.shape_6.setTransform(119.825,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20000").s().p("AAOArIAAgjIgaAAIAAAjIgYAAIAAhVIAYAAIAAAgIAaAAIAAggIAWAAIAABVg");
	this.shape_7.setTransform(110.5,21.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20000").s().p("AgQAoQgKgGgFgJQgFgKAAgPQAAgNAFgJQAFgKAKgFQAKgGAOAAQAIAAAHACIANAEIgIASIgJgDQgFgCgGAAQgIAAgDAEQgFADgCAGQgCAGAAAFQAAAJACAFQACAGAFADQADACAGAAIAFAAIAFgBIAAgOIgQAAIAAgQIAlAAIAAAtIgPAEIgSABQgLAAgJgEg");
	this.shape_8.setTransform(101.375,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20000").s().p("AgaAiQgKgJABgQIAAgzIAWAAIAAAxQAAAJAEAEQADAEAGAAQAEAAAEgCQADgBABgEQABgEAAgGIAAgxIAYAAIAAAyQAAALgFAIQgEAIgIAEQgIAEgMAAQgRAAgJgJg");
	this.shape_9.setTransform(92.55,21.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20000").s().p("AgSApQgIgDgFgGQgFgGgCgIQgDgIAAgKQAAgNAFgJQAEgKAJgFQAKgGANAAQAPAAAJAGQAJAFAEAKQAFAKAAAMQAAAKgDAIQgCAIgFAGQgFAGgIADQgIADgLAAQgKAAgIgDgAgJgVQgEADgCAGQgBAFAAAHQAAAIABAGQACAFAEADQAEADAFAAQAGAAAEgDQAEgDACgFQABgGAAgIQAAgKgEgIQgDgGgKAAQgFAAgEADg");
	this.shape_10.setTransform(83.225,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20000").s().p("AAKArIgRgfIgFAAIAAAfIgYAAIAAhVIAcAAQALAAAHADQAIADAFAFQADAGAAAIQAAAGgBAEIgGAHIgHAFIAYAmgAgMgFIADAAQAGAAADgCQADgDAAgGQAAgEgDgCQgCgCgGAAIgEAAg");
	this.shape_11.setTransform(74.95,21.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20000").s().p("AANArIAAgjIgaAAIAAAjIgWAAIAAhVIAWAAIAAAgIAaAAIAAggIAYAAIAABVg");
	this.shape_12.setTransform(65.8,21.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20000").s().p("AgLArIAAhCIgUAAIAAgTIA/AAIAAATIgUAAIAABCg");
	this.shape_13.setTransform(57.7,21.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20000").s().p("AgNArIgIgBIgIgDIAAgVQAHAEAHACQAHABAFAAIAGAAIACgCIABgEIgBgEIgFgDIgIgFIgIgEQgEgCgDgCQgDgDgBgFQgBgEgBgFQAAgIAFgFQAEgHAHgCQAHgDAJAAQAIAAAHACIAMAEIgHASIgLgEIgKgCIgEACQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIgBACQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQACADACABIAKAFQAHACAEAEQAEACADAFQACAFAAAGQAAAHgEAGQgDAGgIAFQgHADgLAAg");
	this.shape_14.setTransform(47.7,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20000").s().p("AgQAoQgKgGgFgJQgFgKAAgPQAAgNAFgJQAFgKAKgFQAKgGAOAAQAIAAAHACIANAEIgIASIgJgDQgFgCgGAAQgIAAgDAEQgFADgCAGQgCAGAAAFQAAAJACAFQACAGAFADQADACAGAAIAFAAIAFgBIAAgOIgQAAIAAgQIAlAAIAAAtIgPAEIgSABQgLAAgJgEg");
	this.shape_15.setTransform(39.625,21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20000").s().p("AAKArIgeg8IgBAAIABAHIAAAIIABAGIAAAnIgVAAIAAhVIAeAAIAeA7IABAAIgBgHIAAgHIAAgGIAAgnIAVAAIAABVg");
	this.shape_16.setTransform(30.325,21.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_17.setTransform(23.25,21.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20000").s().p("AgNArIgchVIAaAAIAMArIABAGIACAHIAAAHIABgGIABgIIACgGIAMgrIAaAAIgdBVg");
	this.shape_18.setTransform(17.025,21.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20000").s().p("AATArIgFgQIgbAAIgEAQIgaAAIAchVIAfAAIAcBVgAAJAIIgDgNIgCgGIgDgJIgBgIIAAAIIgCAIIgCAHIgEANIARAAg");
	this.shape_19.setTransform(8.5,21.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20000").s().p("AgNArIgIgBIgIgDIAAgVQAHAEAHACQAHABAGAAIAFAAIADgCIAAgEIgBgEIgFgDIgIgFIgJgEQgEgCgCgCQgCgDgCgFQgBgEgBgFQAAgIAFgFQAEgHAHgCQAHgDAJAAQAIAAAHACIAMAEIgHASIgLgEIgKgCIgEACQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIgBACQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAQACADACABIAKAFQAGACAFAEQAEACACAFQADAFAAAGQAAAHgEAGQgDAGgIAFQgHADgLAAg");
	this.shape_20.setTransform(0.8,21.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20000").s().p("AgLArIAAghIgcg0IAZAAIAOAgIAPggIAZAAIgcAzIAAAig");
	this.shape_21.setTransform(112.875,8.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20000").s().p("AASArIgEgQIgaAAIgFAQIgaAAIAchVIAfAAIAcBVgAAJAIIgDgNIgCgGIgDgJIgBgIIAAAIIgCAIIgCAHIgEANIARAAg");
	this.shape_22.setTransform(104.55,8.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20000").s().p("AgjArIAAhVIAdAAQANAAAKAFQAJAFAFAJQAFAJAAANQAAAOgFAKQgGAKgKAFQgKAFgNAAgAgMAYIAFAAQAJAAAFgGQAFgGAAgMQAAgIgCgFQgCgFgEgDQgEgCgGAAIgGAAg");
	this.shape_23.setTransform(95.975,8.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20000").s().p("AgbArIAAhVIAXAAIAABCIAgAAIAAATg");
	this.shape_24.setTransform(85.1,8.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20000").s().p("AASArIgEgQIgaAAIgFAQIgaAAIAchVIAfAAIAcBVgAAJAIIgDgNIgCgGIgDgJIgBgIIAAAIIgCAIIgCAHIgEANIARAAg");
	this.shape_25.setTransform(77,8.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20000").s().p("AgKArIAAhVIAVAAIAABVg");
	this.shape_26.setTransform(70.6,8.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20000").s().p("AALArIgRgfIgHAAIAAAfIgWAAIAAhVIAcAAQAKAAAIADQAHADAEAFQAEAGAAAIQAAAGgCAEIgEAHIgIAFIAZAmgAgNgFIAFAAQAFAAADgCQADgDAAgGQAAgEgDgCQgCgCgGAAIgFAAg");
	this.shape_27.setTransform(65,8.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20000").s().p("AgSApQgIgDgFgGQgFgGgCgIQgDgIAAgKQAAgNAFgKQAEgJAJgFQAKgGANAAQAPAAAJAGQAJAFAEAKQAFAKAAAMQAAAKgDAIQgCAIgFAGQgFAGgIADQgIADgLAAQgKAAgIgDgAgJgVQgEADgCAFQgBAHAAAGQAAAIABAFQACAGAEADQAEADAFAAQAGAAAEgDQAEgDACgGQABgFAAgIQAAgKgEgHQgDgHgKAAQgFAAgEADg");
	this.shape_28.setTransform(55.625,8.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20000").s().p("AAbArIAAgmIAAgHIABgJIAAgHIAAAAIgSA9IgVAAIgRg9IgBAAIABAHIAAAIIABAJIAAAlIgVAAIAAhVIAfAAIARA8IAAAAIASg8IAfAAIAABVg");
	this.shape_29.setTransform(45.075,8.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20000").s().p("AgYArIAAhVIAxAAIAAATIgaAAIAAANIAYAAIAAASIgYAAIAAAQIAaAAIAAATg");
	this.shape_30.setTransform(36.175,8.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20000").s().p("AAbArIAAgmIAAgHIABgJIAAgHIAAAAIgSA9IgVAAIgRg9IgBAAIABAHIAAAIIABAJIAAAlIgVAAIAAhVIAfAAIARA8IAAAAIASg8IAfAAIAABVg");
	this.shape_31.setTransform(26.925,8.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-2.5,148.5,47.1);


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
	this.shape.setTransform(122.4421,54.0832,0.481,0.481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAVIgVgIQgPgGgOgIIgIgGQgHgEAAgDQAAgEAEgCQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIANAMIA2AfIABAAIgBAAIgJgBg");
	this.shape_1.setTransform(91.3889,50.2677,0.481,0.481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAEQgFgDgJACQgCgEABgCIAEAAQAFACAIgCQAKgCAIADIAGgBIAEgBIAAAAQABAAABABQAAABAAAAQAAABAAAAQAAABgBAAIgPAEIgBgBIAFgCIgMgBQgHAAgDABIAFADIACAAIgBABg");
	this.shape_2.setTransform(104.1295,36.4755,0.481,0.481);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJgCIATAAQgEAFgGAAQgEAAgFgFg");
	this.shape_3.setTransform(104.1599,37.1069,0.481,0.481);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAEQgBgBgGAAIgDgBIgDgCQAAgFACgBQAAAGAGgBIAJgEQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIADgCIAAAAQABAEgCABIgFABIgEADIgDACIgCgDg");
	this.shape_4.setTransform(104.251,35.2971,0.481,0.481);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMABIgEAFIgCAAQgFADgKgFIAJgGQgGAAgGACQgFAFgDABQADgHAKgFQAHgDAHABQAKABAEAJIAAACIAAACIgBAEQgDgHgFgCg");
	this.shape_5.setTransform(102.9093,33.5955,0.481,0.481);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXgCQgBACAAAEIABAJQABAIAEAKIAHARIABAAQgEgBgFgHQgIgLgDgOQgDgIgCgKQgCgQADggIAQARIAKAiQAFAMADAJQAGAJAGAGIgBgGIgDgGQgFgNgBgJQAAgIAEgGQAFgHAJgBQAHABAFADQAHAGgEARQgCAKgEAEQgDAHgCABQgKANgMAKQgOgSgLgkg");
	this.shape_6.setTransform(102.0173,39.8788,0.481,0.481);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACA5IgNgFIgNgHIgHgGIgDgDQgCgEgCgJIAAgEIgBgDIgEACQgCABgDgBIgGgEIgGgIIgCgFIgBgFIgCgEIgCgQIAAgEQABgEADgBQACgBADABIADACIALAPIAEAAIAFgBQAEAAABgBIABgGQAAgHABgDIACgDIABgJQACgDAOgGIAPgEQAWgEAOADIASAEIAEAEIABAFQACAEgCACIgHgBQgGAAgEAGIAAAAQgBADAAAEIABAHQACgIADgCQABADAGACQAEABACgCIACAOIAAARIgDAQIgCAIIgCAJIgCAMQgDAKgJACQgFACgIAAQgUgCgMgDgAg4gJIACACIgCAFIADACIACAEIACACIACACQABgJgCgGIABAAQgDgHgKgJIAAgBIgBABQgBACACAJIAAADIACgDIACADg");
	this.shape_7.setTransform(102.3561,35.2379,0.481,0.481);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACIBkIgIgBIgEgDIgQgSIgFABIABAFQACADAKAJQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgHgFIgGgEQgFgEgCACIADAFIAEAEIgEAAIgDgBIgMgIQgBgBgBAAQgBgBAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAIACADIgDAAIgJgIIgCgCIgNgNQgLgMgLgHIgLgFIhagYQgGgCgXgKIgSgJQgVgMgJgKQgDgBgCgDQgCgEABgFIAEgGQAGgYANgSIAEgGQAIgLAHAAQAWgCANAFQAKADADACIAHAHQADADAAAGIgCAGIgDAEIgEACIgHgBQgLgDgKgBQgKgBgJABIgIACQADACAGAAIADABQAWAHAOAHIBOA1IALAIIAmAXQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBgDQAHABANgDIANgDIAOgBQADAAAFACIADACIATAEQACAAAEADIAFACIAKAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAEgCABIgFADIgNAAIgIAAIgKgCIgGgBQgIABgDAEQACAFAJAGIAGAIIAGAIIAHAJIACAGQADAAACgCIAEAAIACABIADAEQACAEgCADIgDABIgJgCg");
	this.shape_8.setTransform(96.2712,50.7081,0.481,0.481);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJQAAgJADgDIAGgCIgBgDIABgDQAHACgBAGIgDANQgDACgCAAQgDAAgEgDg");
	this.shape_9.setTransform(121.4761,48.0646,0.481,0.481);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgDgDABgEIgEgBIACgEQADgBADADQAEAEAFABQAGABABADQABAEgFAEQgIAAgGgHg");
	this.shape_10.setTransform(120.0425,51.593,0.481,0.481);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASANIAAgBIgCAAIABgHIgJAGQgDAAgDgCIgDgDIgKgGQgHgCgDgEIABgGQAEgCAGAFIAHADIACACQAJAHAMAAIABABQABADgDAFIgBACIAAgBg");
	this.shape_11.setTransform(119.8004,50.5777,0.481,0.481);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAEIgHgEQgIgEgFABQgDgCACgEQABgCAEAAQAGABACADIADgBIASAIQAMAFALgDIADAAQAAAEgDADQgEADgFAAIgCgIIgEAFQgCADgDAAQgHgBgJgHg");
	this.shape_12.setTransform(120.0791,49.8435,0.481,0.481);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPACIgBAAIgGAIIgkgNIABgGQAEgCAGACQADgBAHACIAQAFIACACQADAAABgFQAIACAEAEQACABAAADQgBADgDABIgKADg");
	this.shape_13.setTransform(120.3535,49.1609,0.481,0.481);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAZIAXhPIAFAEIgWBKIAIAOIAThEIAGAFIgVBQg");
	this.shape_14.setTransform(118.6265,53.5156,0.481,0.481);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3DFIB3l1IgHgKIh5F8IgGgCIB9mGIAQAWIh5F3g");
	this.shape_15.setTransform(123.2203,38.9047,0.481,0.481);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AibBkIBVjIIDiAKIgEAOIg4gDIh7CLIgDgBIB6iKIiZgHIhQC7g");
	this.shape_16.setTransform(111.8682,46.8655,0.481,0.481);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjsDvIgBgBIAQAAQAJgBAHgGQAFgEgDgFIgBgEIBnAHICZiuIACACIiXCsICXALIBOjwIj/gKIhgDiIgOgGIC/nLIEYgIIiCGKQgHABgCADQgBACAAAGIgGAFQgDAIADAGIAAAAQgFAJAHAGIgbBTgAAUgbIAAABIB2ADIAihoIh0gCgAh2ggIB3AFIAkhnIhygCgABejwIghBgIB2ACIAihjIgHAAIhwABgAghjtIgkBcIBvABIAihgg");
	this.shape_17.setTransform(113.9727,41.899,0.481,0.481);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#77AD5C").s().p("AAZA3QgLgogHgRQgFgPgDgFQgEgIgFgBQgHgBgJAGIgIAIQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCgEAJgRQAHgPAHgJQAHgKAFgDQAFAfACAJIAbBNQAJgTABAAQgFAXgDAaQgBAAgFgTg");
	this.shape_18.setTransform(99.8913,42.4712,0.4809,0.4809);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77AD5C").s().p("AgNAUQAGgGAHgNIAEgHQAIgPACgHIABgFIABgHIAAAAQADAAAEAEQAHAJABAIQADALgFATQgCAHgEANIgSgLIgFgDIgDACQgRAPgLAIg");
	this.shape_19.setTransform(103.9806,40.6437,0.4809,0.4809);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#77AD5C").s().p("AgOgQQABgBAFABQAGACACADIAHAGIgEgNQACAAAEAFIAFAJIABAEQgDAQgCADQgIgVgQgOg");
	this.shape_20.setTransform(95.1235,45.7285,0.4809,0.4809);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#77AD5C").s().p("AgZAKIADgEIAOgIQAEgCAIgBIAIgDIAJgCIAFABQgIAHgCAFIgFgDIgIAAQgHAAgKAFIgFACIgGAEIAAgBg");
	this.shape_21.setTransform(97.1554,40.1642,0.4809,0.4809);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#77AD5C").s().p("AAZABQgPgNgYgEQgOgCgTAAQACgGAHgBQAAgCATACQAUACALAFQATAJAKAPQAGAJABAGIgFAGQgMgTgGgHg");
	this.shape_22.setTransform(92.9112,46.1108,0.4809,0.4809);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#77AD5C").s().p("AgxAJQAggLASgDIAJgCQAKgBAIAAIAEABQAGAAAIAFQADACAAABIABAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgCgEAAQgMgBgUADQgJAAgKADIgZAFIgHABIgDAAg");
	this.shape_23.setTransform(104.9945,30.946,0.4809,0.4809);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#77AD5C").s().p("AgPANIACgMQADgGAFgGIAJgHIAMgHIABAAIgMAKIgIAJQgGAIgCAEIgEAUQgCgEACgJg");
	this.shape_24.setTransform(99.7644,31.2295,0.4809,0.4809);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEAAAAADIAAAAQAAAEgDAAIgBAAg");
	this.shape_25.setTransform(102.5538,60.2695,0.4809,0.4809);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#77AD5C").s().p("AAAAEQgDAAAAgEQAAgCADgBQAEgBAAAEQAAAEgDAAIgBAAg");
	this.shape_26.setTransform(105.3913,59.6403,0.4809,0.4809);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77AD5C").s().p("AgDAAQABgDACAAQAEABAAACQABADgFABQgCAAgBgEg");
	this.shape_27.setTransform(104.217,59.9649,0.4809,0.4809);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#77AD5C").s().p("AgPADIAfgKIgBAFIgeAKg");
	this.shape_28.setTransform(108.4692,57.6564,0.4809,0.4809);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#77AD5C").s().p("AgFACQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIACAAIALADQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_29.setTransform(101.3884,60.1813,0.4809,0.4809);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#77AD5C").s().p("AAAADIgIgDIABgEIAPAFIAAAEIgIgCg");
	this.shape_30.setTransform(96.6865,57.933,0.4809,0.4809);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77AD5C").s().p("AgLgWIAXgHIgBAzIgVAIg");
	this.shape_31.setTransform(106.822,59.0151,0.4809,0.4809);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#77AD5C").s().p("AgKAWIAAgBIgBgxIAAgBIABAAIAVAGIABABIAAAyIAAACg");
	this.shape_32.setTransform(97.973,59.1473,0.4809,0.4809);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#77AD5C").s().p("AgcAbIAAgPIAFABIAAALIAVAGIASgGIAAgwIgSAEIgBAAQgQgCgEgCIAAASIgFgBIAAgIIgtgMIAAgFIAtAMIAAgIIAZADIACAAIAWgEIAAAJIAzgOIACAAIAAAEIg1APIAAArIgXAHg");
	this.shape_33.setTransform(102.3615,60.013,0.4809,0.4809);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#77AD5C").s().p("AgIAYQgEgDgLgQIgBgBIACgEQAWgaACAAIABACQACAEADADIAFAFIALAHIABAAIAAABIgWAcIgEADQgEAAgDgDg");
	this.shape_34.setTransform(94.7748,57.8368,0.4809,0.4809);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AklFwIgCgJIAAgVQAAgEgBgEIgRhPIgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBIgFgOQAAgFACgBIADgBIgBgDQgCgMgFgFQgDgDgGABQgCAAgGAEIgIAEIgLAJIgBAAIgBgBQADgGAPgRQAGgIAOgDIAKgCIAHAAQAHAAAGgDIAKgFIABAAQAGALgCALIgGAAIgMgCQgEAAgBAGIAAAEIADARIAFgBIAJgJQAKgNAKgGQACgCANgBIgKhAIgGgBQgagFgRgGIgngPQgRgIgJgHIgSgQIgFgEQgFgHACgHIADgEIACgGIACgIIADgKQAEgMAIgMIAHgLIAAAAIADgEIABgGIAEgJQAJgQASgGIAEgBIAEgBIAYgWIAJgOIAKgSQAFgJAMgKQAMgKAYgIIAPgCIAEgDQAEgCAHgCIAQgFIAJgDIAGgDQAIgGACgGIABgNIAAgHIgBgHIgDgDQgGgEgFgLIgDgIQgFgNgCgTIAAgFQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIAAgWQACgaAGgIIAIgKIAJgIIADgCQAKgIATgIIANgEQARgEALAEQALAEAMAJQAHAEAHAGIAFADIAEAAQARgBAMADQAGABAFADQAEADABAGQAEAJgIAMQgDAGgEACQgIAIgSAKIAAALIACAVIAAAMQgBAOgHAWQAAALgCAFIgDAFIgEAFQAEACACACIANAPQADACATAGIBcjaIEtgIIAVAjIhuFbIABABQAJAEgCAKIgCALQgBAJgBACIACAGQACAHgEAHIgCAGQgCAJgJADIgBABQAAAIgFAGQAAAMgDAEQgEAEgMACIgbBaIi+gOIgGBAIgkANIAAAIIgiANIAAgIIgvAOIgBABIAAAHIgeAJIgggKIAAgHIgmgMIAAAIIAAAAIgjgMIAAgIIgPgGIAAAhIAAALIgBAEQgGADgXAJIgBAAQgFAAgLgLIAAABIAEANIAEAJIAEAIQAFAOgHADIgHADIgIABQgHAAgCgFg");
	this.shape_35.setTransform(107.6696,46.6731,0.481,0.481);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AlGGVQgCgHAAgFIAAgPQAAgIgBgDIgPhLQgFgDgBgDIgGgQIAAgHQAAgFADgDQgBgFgCgCIgGACIgSANQgEACgDAAIgFgCQgEgBgBgGIABgEQABgFAGgIIAMgNQAKgMAPgEIATgBQAFAAAEgCIAKgGIAGgBQAGAAADAHIAEAMIAJgCIgIgvQgfgGghgMIgZgMQgMgFgJgIIgLgJIgMgMQgDgEgCgGQgBgGABgGIAJgdQAGgRAFgJIAMgQIAAgBIABgDIAFgJQALgTAUgHIAEgBIADgDIAVgSIASgfQAEgHAPgNQANgMAagHIARgEIANgGIAXgGQAMgIABgDIABgXIgBAAQgHgGgGgMIgEgJQgFgNgCgVIAAgCIgCgFIAAgOQgBgEABgGQACgcAHgJQADgFAGgFIAOgNQAKgGATgJIAOgFQAOgDAIACIADAAIAAhLIIoIsIipAAQgCAUgTAEIgZBUQgCAIgHgBIgBAAIi1gMIgGA2QgBAHgFABIgdALIAAABQAAAHgGACIgiANIgEABIgFgCIgDgDIgeAJQgBAGgFADIgPAFIgSAFIgBAAIgDgBIgggKQgGgCAAgHIgUgGIgCACIgDADIgEAAIgCAAQgNgDgWgJIgDgCIAAAYIgDAIIgDACQgHAFgYAJIgCAAIABACIACAEQAIAWgOAJIgKADIgKABQgOgBgEgLg");
	this.shape_36.setTransform(108.7984,45.0515,0.481,0.481);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77AD5C").s().p("AkUkWIIpAAIAAItg");
	this.shape_37.setTransform(116.3235,38.3847,0.481,0.481);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#77AD5C").s().p("AkUkWIIpAAIopItg");
	this.shape_38.setTransform(89.7145,38.3847,0.481,0.481);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AkUEXIIpotIAAItg");
	this.shape_39.setTransform(89.7173,38.3876,0.481,0.481);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_40.setTransform(103.0438,38.389,0.481,0.481);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_41.setTransform(151.9944,40.3039,0.4809,0.4809);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASBIIgphAIAABAIgdAAIAAiQIAvAAQAWAAAPAPQAOAOAAATIAAAEQAAAPgJALQgIALgJADIAhA0gAgXgCIAVAAQAHAAAGgHQAFgFAAgJQAAgIgGgGQgFgGgMABIgQAAg");
	this.shape_42.setTransform(172.6235,40.3039,0.4809,0.4809);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBKIgKgWIgxAAIgKAWIgfAAIBBiTIBCCTgAANAaIgNgeIgMAeIAZAAg");
	this.shape_43.setTransform(144.8295,40.2438,0.4809,0.4809);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcgGIAABPIgdAAIAAiTIBWBSIAAhQIAdAAIAACUg");
	this.shape_44.setTransform(191.786,40.3039,0.4809,0.4809);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg5AAIAAAdIAqAAIAAAcIgqAAIAAAeIA5AAIAAAdg");
	this.shape_45.setTransform(184.8855,40.3159,0.4809,0.4809);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdA/QgOgLgCgRIAdgFQAAAFAFAFQAFAEAGAAQAGAAAFgEQAFgFAAgGQAAgIgKgFIgQgFQgPgFgJgJQgKgMAAgOQAAgSANgMQANgNASgBQAQABANAKQAMALACAQIgdAGQAAgFgEgFQgEgEgGAAQgFAAgEAEQgFAFAAAFQAAAJAKAFIAQAGQAOAEAKAKQAKALAAAOQAAARgOANQgOAOgSAAQgQAAgNgLg");
	this.shape_46.setTransform(178.7305,40.3039,0.4809,0.4809);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgrBJIAAiRIBXAAIAAAdIg6AAIAAAdIArAAIAAAcIgrAAIAAAeIA6AAIAAAdg");
	this.shape_47.setTransform(165.8673,40.3159,0.4809,0.4809);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2BIIAAiQIAmAAQAeAAAWAWQAUATAAAfQAAAggUATQgVAWgfgBgAgZArIAJAAQATABALgMQAMgNABgTQgBgTgMgLQgLgMgTAAIgJAAg");
	this.shape_48.setTransform(159.4598,40.3039,0.4809,0.4809);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA5IgGgBIgGgEIAAAEIgVAAIAAhyIAVAAIAAAvIAEgDIAIgDIAHgBQAHAAAGADQAGACAFAGQAEAFACAGQADAIAAAIQAAAHgDAJQgCAHgEAFQgFAFgGADQgHACgHAAgAgLAFIgDAGIgBAJIABAIIADAGIAFAEIAGABQAHAAAEgEIADgGIABgJIgBgJIgEgGIgEgDQgDgCgDABQgHAAgEAEg");
	this.shape_49.setTransform(134.9236,39.6307,0.4809,0.4809);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA0IAUgoIgag/IAXAAIABACIANAmIAAAAIAQgmIABgCIAXAAIgxBlIgBACg");
	this.shape_50.setTransform(138.7585,41.3258,0.4809,0.4809);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag4BeIAAi7IAmAAIAACWIBLAAIAAAlg");
	this.shape_51.setTransform(191.8581,29.7129,0.4809,0.4809);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBfIg1hUIAABUIgmAAIAAi8IA9AAQAdgBAUAUQAJAJAEAJQAFAKAAAPIAAAEQAAAUgMAPQgIAMgOAGIgBAAIAsBFgAgegDIAbAAQAJAAAIgIQAHgIAAgLQAAgKgIgIQgHgHgPgBIgVAAg");
	this.shape_52.setTransform(136.4864,29.7008,0.4809,0.4809);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBgIgNgdIhAAAIgMAdIgpAAIBVi/IBWC/gAARAiIgRgnIgQAnIAhAAg");
	this.shape_53.setTransform(182.5173,29.6287,0.4809,0.4809);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAADIgiBdIhLi/IAoAAIAjBZIAihZIAjBZIAjhZIAoAAIhLC/g");
	this.shape_54.setTransform(172.924,29.809,0.4809,0.4809);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_55.setTransform(163.0663,29.7129,0.4809,0.4809);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglgJIAABoIgmAAIAAjAIBxBrIAAhoIAmAAIAADAg");
	this.shape_56.setTransform(153.7255,29.7129,0.4809,0.4809);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BfIAAi9IBxAAIAAAmIhLAAIAAAmIA4AAIAAAlIg4AAIAAAmIBLAAIAAAmg");
	this.shape_57.setTransform(144.6852,29.7129,0.4809,0.4809);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AGnABQAAgSAFgIQAFgKALABQAEAAADABIAAAIIgGgBQgDAAgCABQgCABgCAFIgDAJIAAAKQAAAaANAAIAFgBIAAAJQgEACgDAAQgVgBAAgigAlYABQAAgSAFgIQAGgKAKABQAEAAAEABIAAAIIgGgBQgDAAgDABQgCABgCAFIgCAJIgBAKQAAAaANAAIAGgBIAAAJQgEACgEAAQgVgBAAgigAnvAgIAAgJQAEADAFABQADgBADgCQACgCAAgFQAAgEgCgDIgCgDIgKgJIgDgFQgDgEAAgGQAAgIAFgFQAEgEAHAAIAAAAQAGAAAEABIAAAKQgFgDgDAAQgEAAgCACQgCACAAAFQAAAEABACIADAEIAFAFIAIAJQACAEAAAGQAAAJgFAEQgFAGgGAAQgHgBgDgDgACdAbQgEgHAAgVQAAgTAEgHQAEgHAJAAQAJgBAEAHQACACACAJQACAHAAALQAAASgEAJQgFAHgJAAQgLAAgDgIgACkgVQgCAFAAAQQAAAOACAHQACAGAFAAQAEAAACgGIAAAAQACgFAAgOQAAgQgCgGQgBgHgFABQgFAAgCAFgAByAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAB5gVQgBAGAAAPQAAAQACAFQABAGAFAAQAFAAABgGIABAAQABgFAAgOQAAgQgBgGQgCgHgFABQgEAAgDAFgAhiAbQgEgJAAgTQAAgTAEgHQAEgHAKAAQAJgBAEAHQACACACAJQABAHAAALQAAASgEAJQgEAHgKAAQgKAAgEgIgAhagVQgCAFAAAQQAAAOACAHQABAGAFAAQAEAAADgGQABgFAAgOQAAgQgBgGQgCgHgFABQgFAAgBAFgApdAdQgCgDAAgMIAAgwIAJAAIAAAwQAAAIABACQACACAEABQAEAAABgCQABgCAAgHIAAgyIAKAAIAAAyQAAAKgEAFQgFAEgHAAQgKAAgEgGgAJrAjIAAg8IgKAAIAAgJIAeAAIAAAJIgLAAIAAA8gAJUAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAIdAjIAAhFIAYAAIAAAIIgPAAIAAAWIAOAAIAAAHIgOAAIAAAYIAPAAIAAAIgAINAjIgBgYIgBgDIAAgTIgBAEIgIAqIgGAAIgJgvIgDAvIgJAAIAGhFIAIAAIAKAyIAAgDIAJgvIAIAAIAGBFgAHKAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAGbAjIgCgOIgOAAIgCAOIgKAAIAPhFIAIAAIAPBFgAGYAOIgGgiIgEAZIgCAJIAMAAgAFkAjIAAhFIAJAAIAAA9IAQAAIAAAIgAFBAjIAAhFIAMAAQAJABAEAEQAEAFAAAJQAAAOgIADQgGACgGAAIAAAfgAFKgDQAGAAACgDQADgCAAgGQAAgGgDgDQgCgDgEAAIgCAAgAEhAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAESAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABADADQAFAEAAAKQAAAIgCAEQgDAEgEABIAMAigAEFgDQAFAAADgDQACgCAAgGIAAgFIgCgEIgCgCIgEgBIgCAAgADaAjIgMgjIAAAjIgKAAIAAhFIANAAQAHABAEADQAFAEAAAKQAAAIgDAEQgCAEgFABIANAigADOgDQAFAAADgDQACgCAAgGIgBgFIgBgEIgDgCIgEgBIgBAAgABGAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgABPAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAAmAjIgEgGQgEAFgHABQgHgBgEgEQgFgFAAgHQAAgEACgFIAIgJQgGgIAAgIQAAgGAEgDQADgEAHAAQAGAAADAEQAEADAAAGQAAAEgDAEIgDAEIgFAFIAJAPIABAAIAFgIIAGAEIgHAKIAHANgAAQASQAAAEACADQADACADAAQAEAAADgFIgKgPQgFAFAAAGgAAVgUQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAEADAHIAEgDIACgDIABgFQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABgAgdAjIgFgfIAAgBIgCgMIAAgEIAAgDIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAEAhIADAQIAHgxIAHAAIAIAzIAHgzIAJAAIgMBFgAiOAjIAAhFIALAAIAJABIAGAFQAEAFACAGQABAGAAAMQAAALgBAHQgCAIgEADQgFAEgNABgAiFAbQAJgBADgFQADgFAAgPQAAgPgDgGQgCgGgIAAIgCAAgAigAjIgQgzIACAzIgJAAIAAhFIAIAAIAKAcQAEAMADAMIgCgPIAAglIAJAAIAABFgAjKAjIAAhFIAJAAIAABFgAjiAjIgFgfIAAgBIgBgKIAAgCIgBgHIAAADIgBAFIAAABIgBAKIgBABIgFAfIgHAAIgMhFIAJAAIAHAxIAHgxIAIAAIAHAzIACgTIABgFIAEgbIAJAAIgMBFgAk1AjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAlpAjIAAhFIAJAAIAABFgAmCAjIgNhFIAJAAIAIAzIAAgBIABgCIADgWIAFgaIAIAAIgNBFgAmZAjIgNgjIAAAjIgJAAIAAhFIAMAAQAIABAEADQAEAEAAAKQAAAJgCADQgCAEgFABIANAigAmlgDQAFAAACgDQACgCAAgGIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgCIgEgBIgBAAgAnPAjIAAhFIAZAAIAAAIIgQAAIAAAWIAOAAIAAAHIgOAAIAAAYIAQAAIAAAIgAoZAjIAAhFIAJAAIAAA9IAPAAIAAAIgAo2AjIAAhFIAJAAIAAA9IAPAAIAAAIgAp+AjIAAhFIAZAAIAAAIIgQAAIAAAWIAPAAIAAAHIgPAAIAAAggAoHACIAAgGIAQAAIAAAGg");
	this.shape_58.setTransform(163.8901,50.072,0.481,0.481);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ap+ACIAAgDIT9AAIAAADg");
	this.shape_59.setTransform(163.9024,46.0959,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,24.5,118.69999999999999,40.599999999999994);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,50,50), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,50,50), null);


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

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,50,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AALAkIgQgcIgIAAIAAAcIgOAAIAAhHIAUAAQAJAAAHADQAFACAEAFQADAFAAAHQAAAFgCADIgFAFQgDADgDACIAUAfgAgNgDIAGAAQAHAAACgCQADgDABgFQAAgFgEgCQgDgCgHAAIgFAAg");
	this.shape.setTransform(56.2,9.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAnAAIAAANIgZAAIAAAPIAYAAIAAAMIgYAAIAAASIAZAAIAAANg");
	this.shape_1.setTransform(49.8,9.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIApAAIAAANIgZAAIAAASIAWAAIAAAMIgWAAIAAAcg");
	this.shape_2.setTransform(44.35,9.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAkIAAhHIApAAIAAANIgaAAIAAASIAYAAIAAAMIgYAAIAAAcg");
	this.shape_3.setTransform(38.9,9.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAiQgFgCgFgFQgEgFgCgHQgCgHAAgIQAAgKAEgIQADgJAIgEQAHgFALAAQALAAAIAFQAIAEADAJQAEAIAAAKQAAAIgCAHQgDAHgDAFQgEAFgHACQgGADgJAAQgIAAgHgDgAgJgUQgEADgDAFQgBAFAAAHQAAAHABAGQADAFAEADQADADAGAAQAGAAAEgDQAEgDACgFQACgGAAgHQAAgKgEgHQgFgGgJAAQgGAAgDADg");
	this.shape_4.setTransform(32,9.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAkIAAg6IgUAAIAAgNIA1AAIAAANIgUAAIAAA6g");
	this.shape_5.setTransform(22.6,9.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAnAAIAAANIgZAAIAAAPIAYAAIAAAMIgYAAIAAASIAZAAIAAANg");
	this.shape_6.setTransform(17.05,9.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAhQgIgFgEgIQgDgIAAgMQAAgKAEgIQAEgJAJgEQAIgFALAAQAGAAAFACIAKADIgFAMIgHgDIgJgBQgHAAgEADQgFADgCAFQgDAGAAAGQAAAHACAGQACAFAEADQAEADAGAAIAFAAIAEgBIAAgPIgNAAIAAgLIAcAAIAAAkIgMADIgNABQgKAAgHgEg");
	this.shape_7.setTransform(10.425,9.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CC14C").s().p("AlJBaIAAizIKTAAIAACzg");
	this.shape_8.setTransform(33,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,18);


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

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,320,50), null);


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
	this.shape.graphics.f("#6CC14C").s().p("AgTD6IAAnzIAnAAIAAHzg");
	this.shape.setTransform(2,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,50);


// stage content:
(lib.WBAY_214318_MM_320x50 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(127,66.5,1,1,0,0,0,63,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(204).to({_off:false},0).to({y:43.4,alpha:1},14).wait(52));

	// text4
	this.instance_1 = new lib.text4("synched",0);
	this.instance_1.setTransform(215.5,-8.35,1,1,0,0,0,74,7.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).to({y:35.25,alpha:1},15,cjs.Ease.get(1)).wait(66));

	// text2
	this.instance_2 = new lib.text3("synched",0);
	this.instance_2.setTransform(221.25,141.6,1,1,0,0,0,74,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).to({y:183.1,alpha:1},15,cjs.Ease.get(1)).wait(60).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// text1
	this.instance_3 = new lib.text1("synched",0);
	this.instance_3.setTransform(220,16.6,1,1,0,0,0,74,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({y:29.1,alpha:1},14,cjs.Ease.get(1)).wait(58).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(140));

	// logo
	this.instance_4 = new lib.LOGORbAHorizontalRGBsvg("synched",0);
	this.instance_4.setTransform(100.1,-4,0.5431,0.5446,0,0,0,141.4,60.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({y:33.4,alpha:1},14,cjs.Ease.get(1)).wait(162).to({startPosition:0},0).to({x:100.35,y:23.4},14,cjs.Ease.get(1)).wait(52));

	// bar
	this.instance_5 = new lib.bar("synched",0);
	this.instance_5.setTransform(130,5,1,1,0,0,0,80,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({alpha:1},14).wait(242));

	// image3
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(189).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(66));

	// image2
	this.instance_7 = new lib.image2_1();
	this.instance_7.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(60).to({alpha:0},15,cjs.Ease.get(1)).wait(66));

	// image1
	this.instance_8 = new lib.image1_1();
	this.instance_8.setTransform(80,100,1,1,0,0,0,80,100);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(86).to({alpha:0},15,cjs.Ease.get(1)).wait(141));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},14,cjs.Ease.get(1)).wait(256));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,-13.9,162,83.4);
// library properties:
lib.properties = {
	id: '621E6D53287E4D2D8E270160E2E63EC6',
	width: 320,
	height: 50,
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
an.compositions['621E6D53287E4D2D8E270160E2E63EC6'] = {
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