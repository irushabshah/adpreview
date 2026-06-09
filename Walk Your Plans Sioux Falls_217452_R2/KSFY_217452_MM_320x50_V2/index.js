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


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.T4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(125.95,45.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAYQgGgFgBgHIAHAAQABAEAEADQADADAGAAQAGAAADgDQAEgCgBgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgDgBIgHgCIgJgDQgEgBgDgDQgCgDAAgFQAAgEACgEQADgDAEgCQAEgCAFAAQAIAAAGAEQAFAFABAIIgHAAQgBgFgDgDQgEgDgFAAQgFAAgDACQgEADAAAEQAAADADACIAEADIAIADIAJACQADABADADQACADABAFQgBAEgCAEQgCADgFACQgEACgFAAQgJAAgGgEg");
	this.shape_1.setTransform(122.6,43.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAiQgHAAgDgDQgDgEAAgIIAAggIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAPAAIAAAGIgPAAIAAAgQAAAFACACQACACAEAAIAHAAIAAAGg");
	this.shape_2.setTransform(119.025,43.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_3.setTransform(115.875,43.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAZQgGgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAGIAAgMIAHAAIAAA1IgHAAIAAgMQgCAGgGADQgGAEgGAAQgIAAgGgDgAgJgSQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_4.setTransform(111.175,43.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAiQgHAAgDgDQgDgEAAgIIAAggIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAPAAIAAAGIgPAAIAAAgQAAAFACACQACACAEAAIAHAAIAAAGg");
	this.shape_5.setTransform(106.925,43.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAYQgGgFAAgHIAHAAQAAAEAEADQADADAGAAQAGAAADgDQAEgCAAgEQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBgCgDgBIgHgCIgJgDQgEgBgDgDQgCgDAAgFQAAgEACgEQACgDAFgCQAEgCAFAAQAIAAAGAEQAGAFAAAIIgHAAQgBgFgDgDQgEgDgFAAQgEAAgEACQgEADABAEQAAADACACIAFADIAGADIAJACQAEABACADQADADAAAFQAAAEgCAEQgDADgEACQgEACgGAAQgIAAgGgEg");
	this.shape_6.setTransform(102.75,43.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAcIAAgeQAAgJgFgFQgEgFgHAAQgHAAgGAFQgEAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAJQADgFAFgCQAFgDAFAAQAJAAAHAGQAGAGAAAMIAAAfg");
	this.shape_7.setTransform(155.1,31.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_8.setTransform(149.575,31.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAmIAAg2IAFAAIAAA2gAgCgcQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_9.setTransform(145.3,30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAHAiQgHAAgDgDQgDgEAAgIIAAggIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAPAAIAAAGIgPAAIAAAgQAAAFACACQACACAEAAIAHAAIAAAGg");
	this.shape_10.setTransform(143.125,31.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_11.setTransform(139.475,31.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAWQgGgGAAgMIAAgfIAHAAIAAAeQAAAJAEAFQAFAFAHAAQAIAAAEgFQAFgFAAgKIAAgdIAHAAIAAA2IgHAAIAAgKQgCAFgGADQgFADgFAAQgKAAgGgGg");
	this.shape_12.setTransform(134,31.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_13.setTransform(129.425,31.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAHAiQgHAAgDgDQgDgEAAgIIAAggIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAPAAIAAAGIgPAAIAAAgQAAAFACACQACACAEAAIAHAAIAAAGg");
	this.shape_14.setTransform(126.025,31.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAYQgGgFgBgHIAIAAQAAAEAEADQAEADAFAAQAGAAADgDQADgCABgEQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgDgBIgHgCIgKgDQgDgBgDgDQgCgDgBgFQABgEACgEQACgDAFgCQAEgCAFAAQAJAAAFAEQAGAFAAAIIgHAAQgBgFgDgDQgDgDgGAAQgFAAgDACQgDADAAAEQAAADABACIAGADIAHADIAJACQADABACADQADADABAFQAAAEgDAEQgDADgEACQgEACgFAAQgJAAgGgEg");
	this.shape_15.setTransform(121.85,31.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARAcIAAgeQAAgJgFgFQgEgFgHAAQgIAAgEAFQgFAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAJQADgFAFgCQAFgDAEAAQAKAAAHAGQAGAGAAAMIAAAfg");
	this.shape_16.setTransform(116.95,31.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_17.setTransform(111.425,31.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_18.setTransform(105.975,31.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_19.setTransform(97.725,31.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_20.setTransform(93.375,31.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_21.setTransform(88.575,31.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAmIAAgwIgIAAIAAgGIAIAAIAAgEQAAgJAFgEQADgEAKAAIAAAGQgGAAgDADQgDACAAAGIAAAEIANAAIAAAGIgNAAIAAAwg");
	this.shape_22.setTransform(83.975,30.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_23.setTransform(79.875,31.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLAiQgGgEgCgGIAAANIgHAAIAAhJIAHAAIAAAfQACgGAGgDQAGgEAGAAQAIAAAGAEQAGADADAGQADAGAAAIQAAAIgDAHQgDAGgGAEQgGADgIABQgGgBgGgDgAgJgJQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFADQAEACAFAAQAGAAAEgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_24.setTransform(74.125,30.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_25.setTransform(154.725,19.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAlIAAhJIAGAAIAABJg");
	this.shape_26.setTransform(150.55,18.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAZQgGgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAGIAAgMIAHAAIAAA1IgHAAIAAgMQgCAGgGADQgGAEgGAAQgIAAgGgDgAgJgSQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_27.setTransform(147.075,19.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_28.setTransform(141.925,19.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAYQgGgFAAgHIAHAAQAAAEAEADQADADAGAAQAGAAADgDQAEgCAAgEQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBgCgDgBIgHgCIgJgDQgEgBgDgDQgDgDABgFQgBgEADgEQADgDAEgCQAEgCAFAAQAJAAAFAEQAGAFAAAIIgHAAQAAgFgEgDQgEgDgFAAQgEAAgEACQgEADABAEQAAADACACIAEADIAHADIAJACQAEABADADQACADAAAFQAAAEgCAEQgDADgEACQgEACgGAAQgIAAgGgEg");
	this.shape_29.setTransform(136.4,19.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_30.setTransform(130.05,18.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_31.setTransform(127.85,18.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAWQgGgGAAgMIAAgfIAHAAIAAAeQAAAJAEAFQAFAFAHAAQAHAAAFgFQAFgFAAgKIAAgdIAHAAIAAA2IgHAAIAAgKQgCAFgFADQgGADgFAAQgJAAgHgGg");
	this.shape_32.setTransform(124.3,19.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAmIAAgwIgIAAIAAgGIAIAAIAAgEQAAgJAFgEQADgEAKAAIAAAGQgGAAgDADQgDACAAAGIAAAEIANAAIAAAGIgNAAIAAAwg");
	this.shape_33.setTransform(119.975,18.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHAiQgHAAgDgDQgDgEAAgIIAAggIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAPAAIAAAGIgPAAIAAAgQAAAFACACQACACAEAAIAHAAIAAAGg");
	this.shape_34.setTransform(114.625,19.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAZQgGgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAGIAAgMIAHAAIAAA1IgHAAIAAgMQgCAGgGADQgGAEgGAAQgIAAgGgDgAgJgSQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_35.setTransform(110.075,19.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAJAjQgJAAgFgFQgFgEAAgLIAAgVIgHAAIAAgOIAHAAIAAgOIAQAAIAAAOIALAAIAAAOIgLAAIAAAWIABADIAEABIAHAAIAAAPg");
	this.shape_36.setTransform(103.325,18.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgEgHQgDgGAAgJQAAgIADgGQAEgHAGgDQAGgEAIAAQAKAAAHAGQAHAFACAKIgSAAQgCgGgHAAQgDAAgDADQgDAEAAAGQAAAHADADQADAEADAAQAHAAACgGIASAAQgCAJgHAGQgHAGgKAAQgIAAgGgEg");
	this.shape_37.setTransform(98.675,19.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNAZQgHgDgDgHQgEgGAAgJQAAgIAEgGQADgHAHgDQAFgEAIAAQAIAAAHAEQAFADAEAGQAEAHAAAIIgBAEIglAAQAAAFADADQADADAEAAQAGAAACgGIASAAQgBAGgDAEQgEAFgFACQgGADgHAAQgHAAgGgEgAALgFQgBgEgDgDQgDgCgEAAQgDAAgDACQgEADAAAEIAVAAIAAAAg");
	this.shape_38.setTransform(92.6,19.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNA1IAAgOIAEAAIAEgBIABgEIAAg+IARAAIAAA+QgBAKgFAFQgFAEgIAAgAgCglQgDgCAAgEQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEQAAAEgDACQgDADgEAAQgEAAgCgDg");
	this.shape_39.setTransform(88.1,19.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgOAZQgHgDgDgHQgEgGAAgJQAAgIAEgGQADgHAHgDQAHgEAHAAQAIAAAGAEQAHADAEAHQAEAGAAAIQAAAIgEAHQgEAHgHADQgGAEgIAAQgIAAgGgEgAgHgJQgEADAAAGQAAAHAEADQACAEAFAAQAFAAADgEQADgDABgHQgBgGgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_40.setTransform(84.35,19.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAcIAAg3IARAAIAAAKQADgFAFgDQAEgCAGAAIAAASIgGAAQgGAAgDADQgDACAAAGIAAAag");
	this.shape_41.setTransform(79.7,19.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAqIAAhSIASAAIAAAIQADgEADgCQAFgCAFAAQAHgBAGAEQAFADAEAHQADAHAAAIQAAAJgDAFQgEAGgFAFQgGADgHAAQgFAAgEgCQgFgDgCgEIAAAjgAgHgWQgFADAAAHQAAAHAFADQADADAEAAQAFAAAEgDQADgDAAgHQAAgHgDgDQgEgEgFAAQgEAAgDAEg");
	this.shape_42.setTransform(74.45,20.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAcIAAg3IARAAIAAAKQADgFAEgDQAFgCAFAAIAAASIgEAAQgHAAgDADQgDACAAAGIAAAag");
	this.shape_43.setTransform(151.45,8.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAaQgEgDgDgGQgDgFAAgHIAAggIARAAIAAAdQAAAGADADQADADAEAAQAFAAADgDQADgDgBgGIAAgdIASAAIAAA3IgSAAIAAgIQgCAEgFACQgDACgFAAQgHAAgFgCg");
	this.shape_44.setTransform(146.2,8.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAZQgGgDgEgHQgEgGAAgJQAAgIAEgGQAEgHAGgDQAHgEAHAAQAIAAAGAEQAHADAEAHQAEAGAAAIQAAAIgEAHQgEAHgHADQgGAEgIAAQgHAAgHgEgAgIgJQgDADAAAGQAAAHADADQAEAEAEAAQAFAAADgEQAEgDAAgHQAAgGgEgDQgDgEgFAAQgEAAgEAEg");
	this.shape_45.setTransform(140.3,8.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVApIANgcIgXg1IATAAIANAjIAMgjIASAAIgiBRg");
	this.shape_46.setTransform(134.65,9.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOAZQgGgDgEgHQgDgGAAgJQAAgIADgGQAEgHAGgDQAHgEAHAAQAIAAAGAEQAGADAFAGQADAHAAAIIAAAEIgmAAQAAAFADADQADADAEAAQAGAAADgGIASAAQgCAGgEAEQgDAFgGACQgFADgHAAQgHAAgHgEgAALgFQAAgEgDgDQgEgCgEAAQgEAAgCACQgDADgBAEIAVAAIAAAAg");
	this.shape_47.setTransform(126.3,8.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgQAiQgGgEgDgGQgDgHAAgJQAAgIADgGQADgGAGgEQAFgDAHAAQAFAAAEACQAFADACAEIAAgaIARAAIAABIIgRAAIAAgIQgCAEgFADQgEACgFAAQgHABgFgEgAgIAAQgDACAAAGQAAAHADADQAEAFAEAAQAFAAAEgFQADgDAAgHQAAgGgDgCQgEgEgFAAQgEAAgEAEg");
	this.shape_48.setTransform(119.975,7.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgIAoIAAg3IARAAIAAA3gAgGgXQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_49.setTransform(115.325,7.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKAaQgGgCgDgFQgEgEAAgGIARAAQAAADADACQACACACAAIAFgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgHgDIgKgDQgEgBgDgDQgDgDAAgGQAAgEACgEQADgEAFgDQAFgCAGAAQALAAAGAFQAGAGABAIIgQAAQAAgDgCgBQgDgCgDAAIgEABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAHACIAKADQAEACADACQADAEAAAGQAAAEgDAEQgCAEgFACQgGADgGAAQgHAAgFgDg");
	this.shape_50.setTransform(111.375,8.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AALAcIAAgdQAAgGgDgDQgDgDgFAAQgEAAgDADQgCADAAAGIAAAdIgSAAIAAg3IASAAIAAAIQACgEAFgCQADgCAFAAQAKAAAGAGQAGAHAAALIAAAfg");
	this.shape_51.setTransform(105.775,8.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgIAoIAAg3IARAAIAAA3gAgGgXQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_52.setTransform(101.675,7.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgcAqIAAhSIARAAIAAAIQACgEAEgCQAFgDAFAAQAHAAAGAEQAFAEAEAGQACAGAAAJQAAAIgCAGQgEAGgFAEQgGAEgHAAQgFAAgEgCQgEgDgDgEIAAAjgAgIgWQgDAEAAAGQAAAHADADQAEADAEAAQAFAAAEgDQADgDAAgHQAAgGgDgEQgEgDgFgBQgEABgEADg");
	this.shape_53.setTransform(95.45,9.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgNAZQgHgDgDgHQgEgGAAgJQAAgIAEgGQADgHAHgDQAFgEAIAAQAIAAAHAEQAFADAFAGQADAHAAAIIgBAEIglAAQAAAFADADQADADAEAAQAGAAACgGIASAAQgBAGgDAEQgEAFgFACQgGADgHAAQgHAAgGgEgAAKgFQAAgEgDgDQgDgCgEAAQgEAAgDACQgCADgBAEIAUAAIAAAAg");
	this.shape_54.setTransform(89.35,8.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAJAjQgJAAgFgFQgFgEAAgLIAAgVIgHAAIAAgOIAHAAIAAgOIAQAAIAAAOIALAAIAAAOIgLAAIAAAWIABADIAEABIAHAAIAAAPg");
	this.shape_55.setTransform(84.075,7.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgDgFAAgHIASAAQAAAEACACQADACADAAQADAAACgBQADgCAAgDQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBIgEgCIgHgDIgKgEQgFgCgDgDQgDgEAAgHQAAgKAHgFQAHgGALAAQALAAAHAGQAIAFAAAKIgSAAQgBgDgCgCQgCgCgDAAQgDAAgCABQgCACAAADQAAAEADABIAJAFIALAEQAEABADAEQAEAEAAAGQAAAGgEAFQgDAFgFADQgGADgIAAQgGAAgHgDg");
	this.shape_56.setTransform(78.5,7.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.3,1.8,107.50000000000001,49);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape.setTransform(179.75,35.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgIAHgEQAHgEAJAAQAJAAAHAEQAHAEAEAHQAEAHAAAJIgBAFIg1AAQAAAIAEAFQADAFAFADQAFADAGAAQAIAAAFgEQAGgEACgHIAJAAQgDAKgIAGQgHAGgMAAQgJAAgHgEgAAXgDQAAgHgDgFQgDgFgFgDQgFgDgHAAQgIAAgHAGQgGAGgBALIAtAAIAAAAg");
	this.shape_1.setTransform(175.725,32.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAeQgHgFgEgHQgEgIAAgKQAAgJAEgIQAEgHAHgFQAIgEAIAAQAMAAAIAGQAIAGACALIgJAAQgBgHgGgFQgGgEgIAAQgFAAgGADQgFADgDAGQgDAGAAAIQAAAJADAGQADAGAFADQAGADAFAAQAIAAAGgEQAGgEABgIIAJAAQgCAKgIAHQgIAGgMAAQgIAAgIgEg");
	this.shape_2.setTransform(169.25,32.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAhIAAgkQAAgLgFgGQgFgFgJAAQgJAAgGAGQgFAGAAAMIAAAiIgJAAIAAhAIAJAAIAAALQADgGAGgDQAGgDAGAAQAMAAAHAHQAIAHAAAOIAAAlg");
	this.shape_3.setTransform(162.775,32.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgIAHgEQAHgEAJAAQAJAAAHAEQAHAEAEAHQAEAHAAAJIgBAFIg1AAQAAAIAEAFQADAFAFADQAFADAGAAQAIAAAFgEQAGgEACgHIAJAAQgDAKgIAGQgHAGgMAAQgJAAgHgEgAAXgDQAAgHgDgFQgDgFgFgDQgFgDgHAAQgIAAgHAGQgGAGgBALIAtAAIAAAAg");
	this.shape_4.setTransform(156.025,32.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQApQgIgFgDgHQgFgIAAgKQAAgKAFgGQADgIAIgEQAGgFAKAAQAHAAAHAFQAHAEAEAHIAAgmIAIAAIAABYIgIAAIAAgOQgEAGgHAEQgGAFgIAAQgKAAgGgEgAgMgLQgFADgDAGQgDAFAAAIQAAAIADAGQADAGAFADQAGAEAGAAQAHAAAFgEQAGgDADgGQADgGABgIQgBgHgDgGQgDgFgGgEQgFgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(148.8,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAtIAAhBIAHAAIAABBgAgDghQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_6.setTransform(143.675,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAuIAAg6IgKAAIAAgHIAKAAIAAgFQAAgKAFgGQAFgEAMAAIAAAHQgIAAgDADQgEADAAAHIAAAFIAQAAIAAAHIgQAAIAAA6g");
	this.shape_7.setTransform(140.9,31.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUAhIAAgkQAAgLgFgGQgFgFgJAAQgJAAgGAGQgFAGAAAMIAAAiIgJAAIAAhAIAJAAIAAALQADgGAGgDQAGgDAGAAQAMAAAHAHQAIAHAAAOIAAAlg");
	this.shape_8.setTransform(136.175,32.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgHAHgFQAIgEAIAAQAKAAAHAEQAIAFADAHQAFAIAAAJQAAAKgFAIQgEAHgHAFQgIAEgJAAQgIAAgIgEgAgLgWQgFACgEAGQgDAGAAAIQAAAJADAGQAEAGAFACQAGADAFAAQAGAAAGgDQAFgCADgGQAEgGAAgJQAAgIgDgGQgDgGgGgCQgGgDgGAAQgFAAgGADg");
	this.shape_9.setTransform(129.55,32.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAeQgHgFgDgHQgFgIAAgKQAAgJAFgIQADgHAHgFQAIgEAIAAQAMAAAIAGQAIAGACALIgJAAQgBgHgGgFQgGgEgIAAQgGAAgFADQgFADgDAGQgDAGAAAIQAAAJADAGQADAGAFADQAFADAGAAQAIAAAGgEQAGgEABgIIAJAAQgCAKgIAHQgIAGgMAAQgIAAgIgEg");
	this.shape_10.setTransform(123.05,32.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUAsIAAglQAAgJgFgGQgFgGgJAAQgJAAgGAGQgFAGAAALIAAAjIgJAAIAAhYIAJAAIAAAjQADgFAGgEQAGgDAHAAQAHAAAGADQAGADADAHQAEAGAAAIIAAAmg");
	this.shape_11.setTransform(113.275,31.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJApQgJAAgDgEQgFgFAAgJIAAgnIgJAAIAAgIIAJAAIAAgQIAIAAIAAAQIASAAIAAAIIgSAAIAAAnQAAAGACACQACADAGAAIAIAAIAAAHg");
	this.shape_12.setTransform(108.225,31.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAtIAAhBIAHAAIAABBgAgDghQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_13.setTransform(104.875,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAhIgSg2IgRA2IgJAAIgUhBIAJAAIAQA4IASg4IAIAAIASA4IAQg4IAIAAIgVBBg");
	this.shape_14.setTransform(99.25,32.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRApQgGgFgEgHQgFgIAAgKQAAgKAFgGQAEgIAGgEQAIgFAJAAQAIAAAHAFQAHAEADAHIAAgmIAIAAIAABYIgIAAIAAgOQgDAGgHAEQgHAFgIAAQgJAAgIgEgAgLgLQgGADgDAGQgDAFAAAIQAAAIADAGQADAGAGADQAFAEAGAAQAHAAAFgEQAGgDADgGQAEgGAAgIQAAgHgEgGQgDgFgGgEQgFgDgHAAQgGAAgFADg");
	this.shape_15.setTransform(88.25,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAJAAIAAALQADgGAEgDQAGgDAJAAIAAAIIgDAAQgJAAgEAFQgGAFAAAMIAAAjg");
	this.shape_16.setTransform(82.95,32.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAeQgHgFgDgHQgFgIAAgKQAAgJAFgIQADgHAHgFQAIgEAJAAQAIAAAHAFQAGAEAEAHIAAgPIAIAAIAABBIgIAAIAAgPQgEAHgGAEQgHAFgIAAQgJAAgIgEgAgLgWQgGADgDAGQgDAGAAAHQAAAIADAGQADAGAGADQAFADAGAAQAHAAAFgDQAGgDADgGQAEgGAAgIQAAgHgEgGQgDgGgGgDQgFgDgHAAQgGAAgFADg");
	this.shape_17.setTransform(77.35,32.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAhIgSg2IgRA2IgJAAIgUhBIAJAAIAQA4IASg4IAIAAIASA4IAPg4IAJAAIgVBBg");
	this.shape_18.setTransform(69.45,32.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAhIAAhAIAIAAIAAALQADgGAFgDQAFgDAIAAIAAAIIgCAAQgJAAgFAFQgFAFAAAMIAAAjg");
	this.shape_19.setTransform(63.1,32.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgHAIgFQAHgEAIAAQAKAAAHAEQAIAFAEAHQAEAIAAAJQAAAKgEAIQgFAHgHAFQgIAEgJAAQgIAAgIgEgAgLgWQgGACgDAGQgDAGAAAIQAAAJADAGQADAGAGACQAGADAFAAQAHAAAFgDQAGgCADgGQADgGAAgJQAAgIgDgGQgEgGgFgCQgFgDgHAAQgFAAgGADg");
	this.shape_20.setTransform(57.8,32.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAuIAAg6IgJAAIAAgHIAJAAIAAgFQAAgKAFgGQAEgEANAAIAAAHQgIAAgDADQgEADAAAHIAAAFIAPAAIAAAHIgPAAIAAA6g");
	this.shape_21.setTransform(52.55,31.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgIAHgEQAHgEAJAAQAJAAAHAEQAHAEAEAHQAEAHAAAJIgBAFIg1AAQAAAIAEAFQADAFAFADQAFADAGAAQAIAAAFgEQAGgEACgHIAJAAQgDAKgIAGQgHAGgMAAQgJAAgHgEgAAXgDQAAgHgDgFQgDgFgFgDQgFgDgHAAQgIAAgHAGQgGAGgBALIAtAAIAAAAg");
	this.shape_22.setTransform(44.425,32.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAhIgahBIAJAAIAVA5IAWg5IAJAAIgbBBg");
	this.shape_23.setTransform(38,32.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAeQgHgFgEgHQgFgIAAgKQAAgJAFgIQAEgHAHgFQAIgEAIAAQAKAAAHAEQAIAFADAHQAFAIAAAJQAAAKgFAIQgEAHgHAFQgIAEgJAAQgIAAgIgEgAgLgWQgFACgEAGQgDAGAAAIQAAAJADAGQAEAGAFACQAGADAFAAQAGAAAGgDQAFgCADgGQAEgGAAgJQAAgIgDgGQgDgGgGgCQgGgDgGAAQgFAAgGADg");
	this.shape_24.setTransform(31.9,32.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAsAhIAAgkQAAgLgFgGQgFgFgJAAQgKAAgFAGQgGAGABAMIAAAiIgIAAIAAgkQAAgLgFgGQgFgFgJAAQgJAAgGAGQgGAGAAAMIAAAiIgIAAIAAhAIAIAAIAAALQAEgGAFgDQAGgDAHAAQAJAAAGAEQAGAEADAIQACgIAHgEQAGgEAIAAQAMAAAHAHQAHAHAAAOIAAAlg");
	this.shape_25.setTransform(22.75,32.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQApQgHgFgFgHQgEgIAAgKQAAgKAEgGQAFgIAHgEQAHgFAIAAQAJAAAGAFQAIAEACAHIAAgmIAJAAIAABYIgJAAIAAgOQgCAGgIAEQgGAFgJAAQgIAAgHgEgAgMgLQgFADgDAGQgDAFAAAIQAAAIADAGQADAGAFAEQAGADAGAAQAHAAAFgDQAGgEAEgGQACgGAAgIQAAgHgCgGQgEgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape_26.setTransform(172.45,14.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUAhIAAgkQAAgLgFgGQgFgFgJAAQgJAAgGAGQgFAGAAAMIAAAiIgJAAIAAhAIAJAAIAAALQADgGAGgDQAGgDAGAAQAMAAAHAHQAIAHAAAOIAAAlg");
	this.shape_27.setTransform(165.775,15.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAeQgIgFgDgHQgFgIAAgKQAAgJAFgIQADgHAIgFQAGgEAKAAQAIAAAGAFQAHAEAEAHIAAgPIAIAAIAABBIgIAAIAAgPQgEAHgHAEQgGAFgIAAQgKAAgGgEgAgMgWQgFADgDAGQgDAGAAAHQAAAIADAGQADAGAFADQAGADAGAAQAHAAAFgDQAGgDADgGQADgGABgIQgBgHgDgGQgDgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape_28.setTransform(159.15,15.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAyIAPgjIgbg/IAXAAIAPApIAPgpIAWAAIgpBig");
	this.shape_29.setTransform(149.8,17.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAsIAAhYIATAAIAABYg");
	this.shape_30.setTransform(144.525,14.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAiIAAhCIAUAAIAAALQADgGAGgDQAFgDAHAAIAAAWIgGAAQgIAAgDADQgEADAAAIIAAAfg");
	this.shape_31.setTransform(140.825,15.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAeQgHgEgDgIQgEgIAAgKQAAgKAEgHQADgIAHgEQAHgFAIABQAGAAAGADQAFADADAEIAAgJIAUAAIAABBIgUAAIAAgJQgDAFgGADQgFACgGAAQgIABgHgFgAgJgLQgEAEAAAHQAAAHAEAFQAEAFAFgBQAGABAFgFQAEgFAAgHQAAgHgEgEQgFgFgGABQgFgBgEAFg");
	this.shape_32.setTransform(134.425,15.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAfQgHgFgFgIQgDgHAAgLQAAgKADgHQAFgIAHgEQAIgFAJABQAKAAAHAEQAIAEAFAHQADAIAAAKIAAAFIgtAAQABAGADAEQADADAFAAQAHAAADgGIAWAAQgCAGgEAFQgFAGgGADQgGACgJAAQgJAAgIgDgAANgFQgBgGgDgDQgDgDgGAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_33.setTransform(126.8,15.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAgQgHgDgDgGQgEgFgBgGIAUAAQABADADACQACADAEAAQADAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgDgEgCIgIgDIgMgDQgFgCgDgDQgEgEAAgGQAAgGADgFQAEgFAGgCQAFgDAIAAQANgBAHAHQAIAGABAKIgTAAQgBgDgDgCQgCgCgEAAIgFABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAADADABIAJADIAMAEQAFACADADQADAEABAHQAAAGgEAEQgDAFgGADQgGADgIgBQgIAAgHgCg");
	this.shape_34.setTransform(117.1,15.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAfQgHgFgEgIQgEgHgBgLQABgKAEgHQAEgIAHgEQAIgFAJABQAKAAAHAEQAIAEAEAHQAFAIAAAKIgBAFIgtAAQAAAGAEAEQAEADAEAAQAHAAADgGIAWAAQgCAGgEAFQgFAGgGADQgHACgIAAQgIAAgJgDgAANgFQAAgGgEgDQgEgDgFAAQgEAAgEADQgEADAAAGIAZAAIAAAAg");
	this.shape_35.setTransform(110.85,15.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAsQgKgIgBgLIAUAAQABADAEADQAEACAEAAQAGgBAEgDQAEgDAAgJIAAgJQgDAFgGADQgFACgGAAQgIABgHgFQgHgEgDgIQgEgHAAgKQAAgLAEgHQADgIAHgEQAHgFAIABQAGAAAGADQAFADADAEIAAgJIAUAAIAABBQAAAKgDAHQgEAHgIAFQgHAEgLABQgOAAgJgHgAgJgbQgEAEAAAIQAAAHAEAFQAEAEAFgBQAGABAFgEQAEgFAAgHQAAgIgEgEQgFgFgGABQgFgBgEAFg");
	this.shape_36.setTransform(103.075,17.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AANAiIAAgkQAAgGgEgEQgDgEgGAAQgFAAgDAEQgEAEAAAGIAAAkIgUAAIAAhCIAUAAIAAAJQADgFAGgCQAEgDAGAAQAMAAAHAIQAHAHAAAOIAAAmg");
	this.shape_37.setTransform(95.425,15.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAeQgHgEgDgIQgEgIAAgKQAAgKAEgHQADgIAHgEQAHgFAIABQAGAAAGADQAFADADAEIAAgJIAUAAIAABBIgUAAIAAgJQgDAFgGADQgFACgGAAQgIABgHgFgAgJgLQgEAEAAAHQAAAHAEAFQAEAFAFgBQAGABAFgFQAEgFAAgHQAAgHgEgEQgFgFgGABQgFgBgEAFg");
	this.shape_38.setTransform(87.775,15.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AANAsIAAgkQAAgHgEgCQgDgEgGAAQgFAAgDAEQgEACAAAHIAAAkIgUAAIAAhYIAUAAIAAAgQADgFAGgCQAEgDAHAAQALAAAHAHQAHAIAAANIAAAmg");
	this.shape_39.setTransform(80.325,14.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQAfQgHgFgFgIQgEgHAAgLQAAgKAEgHQAFgIAHgEQAIgFAJABQAMgBAJAHQAIAHADAMIgWAAQgDgIgIAAQgEAAgEAFQgDAEAAAHQAAAIADAFQAEAEAEAAQAIAAADgIIAWAAQgDAMgIAHQgJAGgMAAQgJAAgIgDg");
	this.shape_40.setTransform(73.375,15.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZAyIAPgjIgbg/IAXAAIAOApIAPgpIAXAAIgpBig");
	this.shape_41.setTransform(64.25,17.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLAvIAAgxIgHAAIAAgRIAHAAIAAgCQAAgMAHgGQAGgHAOAAIADAAIAAARQgGAAgCACQgDACABAFIAAABIAKAAIAAARIgKAAIAAAxg");
	this.shape_42.setTransform(58,14.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAwIAAhCIATAAIAABCgAgIgcQgDgEAAgEQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_43.setTransform(54.475,14.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AALAqQgLAAgGgGQgGgFAAgNIAAgZIgIAAIAAgRIAIAAIAAgRIATAAIAAARIAOAAIAAARIgOAAIAAAaQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAFABIAHAAIAAASg");
	this.shape_44.setTransform(50.575,14.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AANAiIAAgkQAAgGgEgEQgDgEgGAAQgFAAgDAEQgEAEAAAGIAAAkIgUAAIAAhCIAUAAIAAAJQADgFAGgCQAEgDAGAAQAMAAAHAIQAHAHAAAOIAAAmg");
	this.shape_45.setTransform(44.925,15.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAfQgIgFgFgIQgDgHAAgLQAAgKADgHQAFgIAIgEQAHgFAJABQAKAAAHAEQAIAEAFAHQADAIAAAKIAAAFIgtAAQABAGADAEQADADAFAAQAHAAADgGIAWAAQgCAGgEAFQgEAGgHADQgGACgJAAQgJAAgHgDgAANgFQgBgGgDgDQgEgDgFAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_46.setTransform(37.8,15.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUAoQgHgEgDgHQgEgIAAgKQAAgLAEgGQADgJAHgDQAHgFAIAAQAGAAAFADQAGADADAEIAAgfIAUAAIAABYIgUAAIAAgJQgDAEgFADQgGADgGAAQgIAAgHgFgAgJAAQgEADAAAIQAAAHAEAEQAEAFAFAAQAGAAAFgFQAEgEAAgHQAAgIgEgDQgFgFgGAAQgFAAgEAFg");
	this.shape_47.setTransform(30.425,14.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_48.setTransform(25.025,14.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,7.8,172,33);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(109.25,27.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAiQgGgDgDgHQgDgGAAgJQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAFIAAgeIAHAAIAABIIgHAAIAAgLQgCAFgGAEQgGADgGAAQgIABgGgEgAgJgJQgFADgDAFQgCADAAAHQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgHgCgDQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(105.725,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAGAAIAABJg");
	this.shape_2.setTransform(101.45,24.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAlIAAg1IAFAAIAAA1gAgCgcQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_3.setTransform(99.4,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAWQgGgGAAgMIAAgfIAHAAIAAAeQAAAJAFAFQAEAFAHAAQAHAAAFgFQAFgFAAgKIAAgdIAHAAIAAA2IgHAAIAAgKQgDAFgEADQgFADgGAAQgJAAgHgGg");
	this.shape_4.setTransform(95.35,25.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAiQgGgEgCgFIAAALIgHAAIAAhIIAHAAIAAAfQACgGAGgEQAGgDAGAAQAIAAAGADQAGAEADAGQADAGAAAIQAAAJgDAGQgDAHgGADQgGAEgIgBQgGABgGgEgAgJgJQgFADgDAFQgCADAAAHQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgHgCgDQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_5.setTransform(89.425,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAWQgGgGAAgMIAAgfIAHAAIAAAeQAAAJAEAFQAFAFAHAAQAHAAAFgFQAFgFAAgKIAAgdIAHAAIAAA2IgHAAIAAgKQgDAFgEADQgGADgFAAQgJAAgHgGg");
	this.shape_6.setTransform(80.75,25.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_7.setTransform(75.275,25.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAoIALgaIgXg1IAIAAIASAtIASgtIAHAAIggBPg");
	this.shape_8.setTransform(69.775,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_9.setTransform(61.875,25.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_10.setTransform(57.525,25.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_11.setTransform(52.375,25.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAmIAAgwIgIAAIAAgGIAIAAIAAgEQAAgJAFgEQADgEAKAAIAAAGQgGAAgDADQgDACAAAGIAAAEIANAAIAAAGIgNAAIAAAwg");
	this.shape_12.setTransform(47.725,24.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_13.setTransform(43.475,25.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAiQgGgEgCgFIAAALIgHAAIAAhIIAHAAIAAAfQACgGAGgEQAGgDAGAAQAIAAAGADQAGAEADAGQADAGAAAIQAAAJgDAGQgDAHgGADQgGAEgIgBQgGABgGgEgAgJgJQgFADgDAFQgCADAAAHQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgHgCgDQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_14.setTransform(37.475,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_15.setTransform(28.775,25.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_16.setTransform(23.425,25.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAZQgGgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAGIAAgMIAHAAIAAA1IgHAAIAAgMQgCAGgGADQgGAEgGAAQgIAAgGgDgAgJgSQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_17.setTransform(17.175,25.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaApIAAhQIAHAAIAAAMQACgFAGgEQAGgEAGAAQAIAAAGAEQAGADADAHQADAGAAAIQAAAJgDAFQgDAHgGADQgGAEgIAAQgGAAgGgEQgGgEgCgFIAAAmgAgJgfQgFADgDAFQgCAFAAAGQAAAHACAFQADAEAFADQAEACAFAAQAGAAAEgCQAFgDADgEQACgFAAgHQAAgGgCgFQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_18.setTransform(11.325,26.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAYQgGgFAAgHIAGAAQABAEAEADQAEADAFAAQAGAAADgDQADgCAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgBgCgDgBIgHgCIgJgDQgEgBgDgDQgDgDABgFQgBgEADgEQADgDAEgCQAEgCAFAAQAJAAAFAEQAFAFABAIIgHAAQAAgFgEgDQgEgDgFAAQgEAAgEACQgDADAAAEQAAADACACIAEADIAHADIAJACQAEABADADQACADAAAFQABAEgDAEQgDADgEACQgEACgGAAQgIAAgGgEg");
	this.shape_19.setTransform(5.35,25.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_20.setTransform(-1,24.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAZQgGgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAGIAAgMIAHAAIAAA1IgHAAIAAgMQgCAGgGADQgGAEgGAAQgIAAgGgDgAgJgSQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAGAAAEgDQAFgCADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_21.setTransform(-5.225,25.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCAlIAAg1IAGAAIAAA1gAgCgcQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_22.setTransform(-9.75,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_23.setTransform(-13.375,25.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_24.setTransform(-17.925,25.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_25.setTransform(-22.675,25.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAlAcIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgGAAIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAKQACgGAFgCQAFgDAGAAQAHAAAFAEQAFADACAHQACgHAGgDQAFgEAHAAQAJAAAGAGQAGAGAAAMIAAAfg");
	this.shape_26.setTransform(-30.525,25.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlAcIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgGAAIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAKQACgGAFgCQAFgDAGAAQAHAAAFAEQAFADACAHQACgHAGgDQAFgEAHAAQAJAAAGAGQAGAGAAAMIAAAfg");
	this.shape_27.setTransform(-40.175,25.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_28.setTransform(-47.625,25.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_29.setTransform(-53.175,25.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_30.setTransform(-60.225,25.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_31.setTransform(-64.625,25.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHANIAHgZIAIAAIgKAZg");
	this.shape_32.setTransform(95.975,16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAlIAAhJIAGAAIAABJg");
	this.shape_33.setTransform(94.25,12.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_34.setTransform(90.425,13.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgOAiQgGgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAGgDAIAAQAGAAAGADQAGAEACAGIAAgfIAHAAIAABJIgHAAIAAgNQgCAGgGADQgGAFgGAAQgIgBgGgDgAgJgJQgFACgDAFQgCAFAAAGQAAAHACAFQADAFAFADQAEACAFAAQAGAAAEgCQAFgDADgFQACgFAAgHQAAgGgCgFQgDgFgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_35.setTransform(84.325,12.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_36.setTransform(78.325,13.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAlAcIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgGAAIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAKQACgGAFgCQAFgDAGAAQAHAAAFAEQAFADACAHQACgHAGgDQAFgEAHAAQAJAAAGAGQAGAGAAAMIAAAfg");
	this.shape_37.setTransform(70.475,13.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_38.setTransform(62.675,13.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_39.setTransform(58.325,13.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgHANIAHgZIAIAAIgKAZg");
	this.shape_40.setTransform(51.425,16.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_41.setTransform(48.325,13.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAlAcIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgGAAIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAKQACgGAFgCQAFgDAGAAQAHAAAFAEQAFADACAHQACgHAGgDQAFgEAHAAQAJAAAGAGQAGAGAAAMIAAAfg");
	this.shape_42.setTransform(40.675,13.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_43.setTransform(32.975,13.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARAlIAAgfQAAgIgEgFQgFgFgIABQgGAAgFAEQgFAGAAAIIAAAeIgHAAIAAhJIAHAAIAAAcQADgEAEgDQAFgCAGgBQAGABAFACQAFACADAGQADAGAAAGIAAAgg");
	this.shape_44.setTransform(27.15,12.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_45.setTransform(19.975,13.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAWQgGgGAAgMIAAgfIAHAAIAAAeQAAAJAFAFQAEAFAHAAQAIAAAEgFQAFgFAAgKIAAgdIAHAAIAAA2IgHAAIAAgKQgDAFgFADQgEADgGAAQgJAAgHgGg");
	this.shape_46.setTransform(15,13.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAIgDAHQgEAGgGAEQgHADgHAAQgHAAgGgDgAgJgTQgFADgDAFQgCAFAAAGQAAAHACAFQADAFAFACQAEADAFAAQAFAAAFgDQAEgCADgFQADgFAAgHQAAgGgDgFQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_47.setTransform(9.025,13.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNAoIALgaIgXg1IAIAAIASAuIASguIAHAAIggBPg");
	this.shape_48.setTransform(3.275,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_49.setTransform(-4.625,13.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgEgGQgDgHAAgIQAAgIADgGQAEgGAGgEQAGgDAHAAQAKAAAGAFQAHAFACAIIgIAAQgBgFgFgEQgFgDgGAAQgFAAgEACQgFADgCAFQgDAFAAAGQAAAHADAFQACAFAFADQAEACAFAAQAGAAAFgDQAFgEABgGIAIAAQgCAJgHAFQgGAFgKAAQgHAAgGgDg");
	this.shape_50.setTransform(-10.425,13.725);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AARAcIAAgeQAAgJgFgFQgEgFgHAAQgIAAgFAFQgEAFAAAKIAAAdIgHAAIAAg2IAHAAIAAAJQADgFAFgCQAFgDAEAAQAKAAAHAGQAGAGAAAMIAAAfg");
	this.shape_51.setTransform(-16.35,13.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_52.setTransform(-22.475,13.725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAmIAAg2IAGAAIAAA2gAgDgcQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_53.setTransform(-26.9,12.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMAcIAAg2IAHAAIAAAKQADgFADgDQAFgDAHAAIAAAHIgCAAQgIAAgDAFQgFAEAAAJIAAAeg");
	this.shape_54.setTransform(-29.775,13.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMAZQgHgEgDgGQgDgHAAgIQAAgIADgGQADgGAGgEQAHgDAGAAQAIAAAGADQAGAEADAFQADAGAAAHIAAAFIgsAAQAAAGADAEQACAFAFACQAEACAEAAQAHAAAFgDQAEgDACgGIAHAAQgCAIgGAFQgHAFgKAAQgGAAgGgDgAATgCQAAgGgCgEQgDgFgEgCQgFgCgFAAQgHAAgFAFQgGAFAAAJIAlAAIAAAAg");
	this.shape_55.setTransform(-34.525,13.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaApIAAhQIAHAAIAAAMQACgFAGgEQAGgEAGAAQAIAAAGAEQAGADADAHQADAGAAAIQAAAJgDAFQgDAHgGADQgGAEgIAAQgGAAgGgEQgGgEgCgFIAAAmgAgJgfQgFADgDAFQgCAFAAAGQAAAHACAFQADAEAFADQAEACAFAAQAGAAAEgCQAFgDADgEQACgFAAgHQAAgGgCgFQgDgFgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_56.setTransform(-40.625,14.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAOAbIgOgWIgNAWIgHAAIARgbIgRgaIAIAAIAMAVIAOgVIAIAAIgSAaIASAbg");
	this.shape_57.setTransform(-47.1,13.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgRAjIAAhFIAjAAIAAAGIgcAAIAAAaIAZAAIAAAFIgZAAIAAAaIAcAAIAAAGg");
	this.shape_58.setTransform(-52.225,12.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,6.8,208.7,25.999999999999996);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLALQgEgFAAgGQAAgFAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(103.025,24.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOA4QgOgBgIgHQgJgHABgQIAAgjIgLAAIAAgXIALAAIAAgVIAaAAIAAAVIASAAIAAAXIgSAAIAAAjQAAAEACABQACACAFAAIAJAAIAAAYg");
	this.shape_1.setTransform(98.1,20.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA4IAAhvIAbAAIAABvg");
	this.shape_2.setTransform(92.925,20.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbA2QgJgFgFgLQgFgLAAgNQAAgOAFgKQAFgKAJgFQAJgGALAAQAIAAAHADQAHAFAFAFIAAgpIAbAAIAAB2IgbAAIAAgNQgEAGgHAEQgHAEgJAAQgLAAgJgGgAgNgCQgFAGAAAKQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgKgGgGQgGgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(82.475,20.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA7IAAh1IAbAAIAAB1g");
	this.shape_4.setTransform(75.925,20.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBAIAAhYIAbAAIAABYgAgLgmQgEgEAAgGQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_5.setTransform(72.175,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbApQgIgFgEgJQgEgIgBgMIAAgzIAcAAIAAAvQAAAJAFAFQAEAFAHAAQAIAAAFgFQAEgFAAgJIAAgvIAbAAIAABYIgbAAIAAgMQgEAGgHAEQgGADgJAAQgKAAgIgEg");
	this.shape_6.setTransform(65.4,21.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsA4IAAhvIAyAAQARAAAKAIQAJAIAAANQAAAKgFAHQgFAGgJADQAKABAGAHQAGAIAAAKQAAAOgKAIQgKAIgRAAgAgQAiIATAAQAHAAADgDQAEgDAAgGQAAgGgEgDQgEgEgHAAIgSAAgAgQgKIAQAAQAHAAAEgDQADgDAAgFQAAgGgDgDQgEgDgHAAIgQAAg");
	this.shape_7.setTransform(55.675,20.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLALQgEgFAAgGQAAgFAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_8.setTransform(43.675,24.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPA4QgPgBgIgHQgIgHAAgQIAAgjIgLAAIAAgXIALAAIAAgVIAaAAIAAAVIASAAIAAAXIgSAAIAAAjQAAAEACABQACACAEAAIAKAAIAAAYg");
	this.shape_9.setTransform(38.65,20.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA4IAAhvIAbAAIAABvg");
	this.shape_10.setTransform(33.675,20.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKA7IgaglIAAAlIgbAAIAAh1IAbAAIAABAIAagjIAiAAIglAsIAlAsg");
	this.shape_11.setTransform(24.325,20.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNA7IAAh1IAbAAIAAB1g");
	this.shape_12.setTransform(17.725,20.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAoQgJgFgFgLQgFgLAAgNQAAgNAFgLQAFgKAJgFQAJgGALAAQAJAAAHAEQAHAEAEAGIAAgNIAbAAIAABZIgbAAIAAgNQgEAGgIAEQgHAEgIAAQgLAAgJgGgAgNgQQgFAHAAAJQAAAKAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgKQAAgJgGgHQgGgFgIAAQgHAAgGAFg");
	this.shape_13.setTransform(10.875,21.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASA4IgShJIgSBJIghAAIgchvIAdAAIAQBRIAUhRIAdAAIAUBRIAQhRIAdAAIgdBvg");
	this.shape_14.setTransform(-1.075,20.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLALQgEgFAAgGQAAgFAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_15.setTransform(-16.025,24.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOA4QgOgBgIgHQgJgHABgQIAAgjIgLAAIAAgXIALAAIAAgVIAaAAIAAAVIASAAIAAAXIgSAAIAAAjQAAAEACABQACACAFAAIAJAAIAAAYg");
	this.shape_16.setTransform(-21.15,20.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNA4IAAhvIAbAAIAABvg");
	this.shape_17.setTransform(-26.325,20.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgLQAGgKAKgFQAKgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAAOIgBAHIg9AAQABAHAFAFQAEAFAHAAQAKAAAEgJIAdAAQgCAIgGAIQgGAHgJAEQgJAEgLAAQgMAAgKgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_18.setTransform(-37.025,21.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAoQgKgFgGgLQgGgKAAgOQAAgNAGgLQAGgKAKgFQAKgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAAOIgBAHIg9AAQABAHAFAFQAEAFAHAAQAKAAAEgJIAdAAQgCAIgGAIQgGAHgJAEQgJAEgLAAQgMAAgKgGgAARgIQAAgHgFgEQgFgEgHAAQgGAAgFAEQgEAEgBAHIAhAAIAAAAg");
	this.shape_19.setTransform(-46.375,21.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUA2QgJgFgGgHQgGgIAAgLIAdAAQABAGADADQAEAEAFAAQAGAAAEgDQADgDAAgFQAAgEgDgCQgDgDgEgCIgKgEQgLgDgHgEQgHgDgFgGQgFgHAAgKQAAgQALgJQAMgIASgBQARABAMAIQAMAJAAAQIgdAAQgBgGgEgDQgDgCgFAAQgFgBgDADQgDADAAAFQAAAFAFADQAGAEAJADIASAHQAGACAGAGQAEAHAAAKQAAAJgEAIQgGAJgJAEQgJAEgMAAQgMAAgKgDg");
	this.shape_20.setTransform(-56.15,20.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,11.8,172,20);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


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
	this.shape.graphics.f("#DB3536").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgIQAEgJAIgEQAJgFAJAAQAKAAAJAFQAIAEAEAIQAFAIAAALIgBAGIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape.setTransform(88.425,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB3536").s().p("AgTAlIAAhHIASAAIAAALQACgGAGgDQAGgDAHAAIAAATIgFAAQgIAAgFADQgDAEAAAKIAAAkg");
	this.shape_1.setTransform(82.825,12.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB3536").s().p("AgSAhQgJgFgFgJQgEgIAAgLQAAgKAFgIQAFgJAIgEQAJgFAJAAQAKAAAJAFQAIAEAFAJQAFAIAAAKQAAALgFAIQgFAJgJAFQgIAEgKAAQgKAAgIgEgAgMgPQgGAFABAKQgBAKAGAGQAEAGAIAAQAEAAAFgDQAEgCADgGQACgEAAgHQAAgKgFgFQgFgGgIABQgHgBgFAGg");
	this.shape_2.setTransform(76.55,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DB3536").s().p("AAfAuIAAg7IgYA7IgNAAIgZg7IAAA7IgSAAIAAhaIAVAAIAcBCIAdhCIAUAAIAABag");
	this.shape_3.setTransform(67.25,11.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DB3536").s().p("AAQAlIAAgoQAAgIgEgEQgEgFgIAAQgGAAgFAFQgEAEAAAIIAAAoIgSAAIAAhHIASAAIAAAJQAEgFAFgDQAGgCAGAAQANAAAHAHQAIAIAAAPIAAAqg");
	this.shape_4.setTransform(54.925,12.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DB3536").s().p("AgTAlIAAhHIASAAIAAALQACgGAGgDQAGgDAHAAIAAATIgFAAQgIAAgFADQgDAEAAAKIAAAkg");
	this.shape_5.setTransform(49.025,12.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB3536").s().p("AgVAhQgHgFgEgJQgEgIgBgLQABgKAEgIQAEgJAHgEQAIgFAJAAQAHAAAHADQAFADAEAFIAAgKIATAAIAABHIgTAAIAAgKQgEAEgFAEQgHADgHAAQgJAAgIgEgAgIgSQgFADgCAFQgDAEAAAGQAAAGADAFQACAFAFACQAEADAEAAQAFAAAFgDQAEgCACgFQADgFAAgGQAAgGgDgEQgCgFgEgDQgFgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(42.4,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DB3536").s().p("AgRAhQgJgFgEgJQgFgIAAgLQAAgKAFgIQAEgJAIgEQAJgFAJAAQAKAAAJAFQAIAEAEAIQAFAIAAALIgBAGIg0AAQABAHAFAEQAFAFAGAAQAKAAAEgIIAUAAQgDAKgJAHQgJAGgNAAQgJAAgIgEgAARgGQAAgHgFgEQgFgFgHABQgGgBgFAFQgEAEgBAHIAhAAIAAAAg");
	this.shape_7.setTransform(34.525,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DB3536").s().p("AgXAuIAAhaIASAAIAABLIAdAAIAAAPg");
	this.shape_8.setTransform(27.7,11.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmjB4IAAjvINHAAIAADvg");
	this.shape_9.setTransform(58,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,0,84,24);


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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


// stage content:
(lib.KSFY_217452_MM_320x50_V2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(390));

	// CTA
	this.instance = new lib.CTA("synched",0);
	this.instance.setTransform(213.5,44.95,1,1,0,0,0,55,12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(314).to({_off:false},0).to({y:25,alpha:1},14,cjs.Ease.get(1)).wait(62));

	// T4
	this.instance_1 = new lib.T4("synched",0);
	this.instance_1.setTransform(75.5,42.35,1,1,0,0,0,75,23.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({y:22.35,alpha:1},14,cjs.Ease.get(1)).wait(76));

	// T3
	this.instance_2 = new lib.T3("synched",0);
	this.instance_2.setTransform(133,4.3,1,1,0,0,0,69,27.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(209).to({_off:false},0).to({y:29.3,alpha:1},14).wait(63).to({startPosition:0},0).to({y:49.3,alpha:0},14).to({_off:true},1).wait(89));

	// T2
	this.instance_3 = new lib.T2("synched",0);
	this.instance_3.setTransform(210,57.7,1,1,0,0,0,69,59.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).to({y:62.7,alpha:1},14).wait(78).to({startPosition:0},0).to({y:77.7,alpha:0},14).to({_off:true},1).wait(180));

	// T1
	this.instance_4 = new lib.T1("synched",0);
	this.instance_4.setTransform(210,57.7,1,1,0,0,0,69,59.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({y:62.7,alpha:1},14).wait(52).to({startPosition:0},0).to({y:77.7,alpha:0},14).to({_off:true},1).wait(286));

	// logo
	this.instance_5 = new lib.logo_1("synched",0);
	this.instance_5.setTransform(80,280,1,1,0,0,0,80,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(367));

	// bg
	this.instance_6 = new lib.bg_1("synched",0);
	this.instance_6.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9,cjs.Ease.get(1)).wait(381));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159,5,162,65);
// library properties:
lib.properties = {
	id: '6E17A6186C8B4884853DB2C8CB311CD2',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg.jpg", id:"bg"},
		{src:"logo.png", id:"logo"}
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
an.compositions['6E17A6186C8B4884853DB2C8CB311CD2'] = {
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