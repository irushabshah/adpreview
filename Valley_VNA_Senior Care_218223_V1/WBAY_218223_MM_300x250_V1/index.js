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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgYAbQgIgKAAgRQAAgRAIgJQAKgKAOAAQAPAAAJAKQAJAKAAAQQAAARgJAKQgJAKgPAAQgPAAgJgKgAgRgVQgGAIAAANQAAAOAGAIQAGAHALAAQAMAAAGgHQAGgHAAgPQAAgNgGgIQgGgHgMAAQgLAAgGAHg");
	this.shape.setTransform(23.7,102.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAkIAAg/IgXAAIAAgIIA1AAIAAAIIgXAAIAAA/g");
	this.shape_1.setTransform(17.075,102.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAkIAAhHIATAAQAZAAAAAVQABALgIAFQgHAGgNAAIgJAAIAAAcgAgOABIAIAAQAKAAAFgDQAFgEAAgHQAAgIgEgDQgGgDgIAAIgKAAg");
	this.shape_2.setTransform(11.55,102.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgGQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(3.875,102.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAmIAAgiQAAgGgDgDQgCgDgHgBQgHAAgFAFQgDAEAAAKIAAAcIgIAAIAAhLIAIAAIAAAXIAAAHIAAAAQACgEAFgCQAEgCAFAAQAKAAAEAEQAGAFgBAJIAAAjg");
	this.shape_4.setTransform(33.3,90.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgKAAgHgHg");
	this.shape_5.setTransform(27.95,91.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHARIAAgeIgIAAIAAgEIAIgEIADgLIAEAAIAAAMIAQAAIAAAHIgQAAIAAAeQAAAFACACQADADAEAAIAEAAIADgBIAAAGIgEABIgFAAQgOAAAAgQg");
	this.shape_6.setTransform(23.675,91);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_7.setTransform(19,91.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeAbIAAgiQAAgGgDgDQgCgDgGAAQgIAAgDAEQgEAEAAAJIAAAdIgHAAIAAgiQAAgGgDgDQgDgDgFAAQgIAAgDAEQgEAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQACgEAFgCQAEgCAFAAQANAAACAJIABAAQACgEAFgDQAEgCAGAAQAJAAAFAEQAEAFAAAKIAAAig");
	this.shape_8.setTransform(11.775,91.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_9.setTransform(95.875,81.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAbIAAghQAAgHgDgDQgCgDgHAAQgHAAgFAEQgDAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQADgEAEgCQAEgCAFAAQAKAAAEAEQAGAFAAAKIAAAig");
	this.shape_10.setTransform(90.35,79.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAYQgFgEABgIQAAgPAZgBIAJAAIAAgEQAAgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQAKAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgFACgEAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEAAgIIAAgFg");
	this.shape_11.setTransform(84.3,79.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgEgCgEgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_12.setTransform(78.8,81.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeAbIAAgiQAAgGgDgDQgCgDgGAAQgIAAgDAEQgEAEAAAJIAAAdIgHAAIAAgiQAAgGgDgDQgDgDgFAAQgIAAgDAEQgEAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQACgEAFgCQAEgCAFAAQANAAACAJIABAAQACgEAFgDQAEgCAGAAQAJAAAFAEQAEAFAAAKIAAAig");
	this.shape_13.setTransform(70.975,79.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_14.setTransform(63.325,79.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_15.setTransform(58.05,79.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAmIAAgjQAAgFgDgEQgCgCgHgBQgIABgDAEQgEAEgBAKIAAAcIgHAAIAAhLIAHAAIAAAXIAAAHIABAAQACgEAEgCQAFgCAEgBQALAAAFAGQAEAEABAJIAAAjg");
	this.shape_16.setTransform(50,78.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHARIAAgeIgIAAIAAgFIAIgDIADgMIAEAAIAAANIAQAAIAAAHIgQAAIAAAeQAAAEACADQADADAEAAIAEgBIADAAIAAAGIgEABIgFABQgOAAAAgRg");
	this.shape_17.setTransform(45.125,79.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_18.setTransform(42.175,78.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOAbIgKgfIgEgNIAAAAIgDANIgKAfIgJAAIgPg1IAJAAIAIAeIADAOIAAAAIACgHIACgHIAKgeIAIAAIAJAeIAEAOIAAAAIABgFIALgnIAIAAIgPA1g");
	this.shape_19.setTransform(37.025,79.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAmIgSgaIgFAGIAAAUIgIAAIAAhLIAIAAIAAAnIgBAIIABAAIAGgHIAQgSIAKAAIgVAXIAWAeg");
	this.shape_20.setTransform(28.4,78.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAFAkIAAgyIAAgMIgCACIgKAKIgFgGIASgPIAHAAIAABHg");
	this.shape_21.setTransform(21.9,79.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAbQgHgJAAgSQAAgSAHgJQAFgJALAAQALAAAHAKQAFAJAAARQABASgGAKQgGAJgMAAQgLAAgFgKgAgLgWQgDAHAAAPQAAAQADAHQAEAHAHAAQAIAAAEgHQADgIAAgPQAAgOgDgIQgEgHgIAAQgHAAgEAHg");
	this.shape_22.setTransform(16.85,79.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIAkIAAgRIgiAAIAAgGIAhgwIAJAAIAAAvIAKAAIAAAHIgKAAIAAARgAAEgTIgWAfIAaAAIAAgXIABgQIgBAAg");
	this.shape_23.setTransform(11.15,79);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgGQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_24.setTransform(3.875,78.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_25.setTransform(59.925,69.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgFAFgEACQgEACgFAAQgIAAgEgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_26.setTransform(54.45,68.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAkIAAhHIASAAQAaAAAAAVQAAALgIAFQgHAGgNAAIgJAAIAAAcgAgOABIAIAAQAKAAAFgDQAFgEAAgHQAAgIgFgDQgEgDgJAAIgKAAg");
	this.shape_27.setTransform(49.1,67.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_28.setTransform(40.825,69.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAYQgEgEAAgIQAAgPAZgBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgEACgFAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_29.setTransform(35.35,68.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAgQgHgIAAgNQAAgMAHgIQAFgHALAAQAJAAAHAIIAAAAIAAgEIAAgEIAAgVIAHAAIAABKIgGAAIgBgGIAAAAQgGAHgKAAQgLAAgFgGgAgKgDQgEAEAAAKQAAAKAEAFQAEAFAGABQAIAAAEgFQAEgFAAgJIAAgCQAAgLgEgEQgEgFgIAAQgHAAgDAGg");
	this.shape_30.setTransform(29.55,67.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_31.setTransform(25.425,67.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_32.setTransform(22.9,67.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_33.setTransform(18.675,68.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AATAkIAAgiIglAAIAAAiIgIAAIAAhHIAIAAIAAAfIAlAAIAAgfIAIAAIAABHg");
	this.shape_34.setTransform(12,67.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgGQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_35.setTransform(3.875,67.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRAYIAAgHIAIADIAIABQAGAAADgCQADgCAAgEQAAgDgCgCQgDgDgHgDIgLgEIgEgEQgCgDAAgEQAAgGAFgEQAGgEAIAAQAJAAAIAEIgDAGQgIgDgGAAQgFAAgDACQgDACAAADIABADQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAJAEQAJADAEADQADAEAAAFQAAAIgGAEQgFAEgJAAQgLAAgFgEg");
	this.shape_36.setTransform(96.15,56.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHARIAAgeIgIAAIAAgFIAIgDIADgLIAEAAIAAAMIAQAAIAAAHIgQAAIAAAeQAAAEACADQADADAEAAIAEgBIADAAIAAAGIgEABIgFABQgOAAAAgRg");
	this.shape_37.setTransform(91.975,56.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAOAbIAAghQAAgHgDgDQgDgDgGAAQgIAAgDAEQgFAFAAAKIAAAbIgIAAIAAg0IAHAAIABAHIABAAQACgEAFgCQAEgCAFAAQAJAAAGAEQAEAFAAAKIAAAig");
	this.shape_38.setTransform(87.25,56.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_39.setTransform(81.375,56.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAbIgUg1IAJAAIALAfIAEAOIAEgKIAMgjIAJAAIgUA1g");
	this.shape_40.setTransform(76.05,56.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_41.setTransform(70.775,56.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAOAbIAAghQAAgHgDgDQgDgDgGAAQgIAAgDAEQgFAFAAAKIAAAbIgIAAIAAg0IAHAAIABAHIABAAQACgEAFgCQAEgCAFAAQAJAAAGAEQAEAFAAAKIAAAig");
	this.shape_42.setTransform(62.4,56.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_43.setTransform(56.325,56.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_44.setTransform(52.075,55.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHARIAAgeIgIAAIAAgFIAIgDIADgLIAEAAIAAAMIAQAAIAAAHIgQAAIAAAeQAAAEACADQADADAEAAIAEgBIADAAIAAAGIgEABIgFABQgOAAAAgRg");
	this.shape_45.setTransform(49.025,56.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAYQgEgEAAgIQAAgPAZgBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgEACgFAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_46.setTransform(44.35,56.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_47.setTransform(40.525,55.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_48.setTransform(37,56.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_49.setTransform(31.725,56.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAbIAAg0IAGAAIABAKIAAAAQADgGAEgCQAEgDAFAAIAHAAIgBAIIgHgBQgGAAgEAFQgEAGgBAIIAAAbg");
	this.shape_50.setTransform(27.25,56.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAGAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAFAHABANQgBANgFAHQgGAHgKAAQgFAAgEgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAHAAQAHAAAFgFQADgFAAgKQAAgKgDgFQgFgFgHAAQgHAAgEAEg");
	this.shape_51.setTransform(21.95,57.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAGAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_52.setTransform(15.85,57.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQAYQgEgEAAgIQAAgPAZgBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgEACgFAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_53.setTransform(9.7,56.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_54.setTransform(51.175,44.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_55.setTransform(45.575,44.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_56.setTransform(40.275,46.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_57.setTransform(34.775,44.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_58.setTransform(30.5,43.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAGAAIACAHQADgEAEgCQAEgCAEAAQALAAAGAHQAFAHABANQgBANgFAHQgGAHgLAAQgEAAgEgCQgEgCgDgEIgBAAIABAJIAAAWgAgKgbQgEAFAAAKIAAABQAAALAEAFQADAEAHAAQAHAAAFgFQAEgFAAgKQAAgKgEgFQgFgFgHAAQgHAAgDAEg");
	this.shape_59.setTransform(26.35,46.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAeAbIAAgiQAAgGgDgDQgCgDgGAAQgIAAgDAEQgEAEAAAJIAAAdIgHAAIAAgiQAAgGgDgDQgDgDgFAAQgIAAgDAEQgEAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQACgEAFgCQAEgCAFAAQANAAACAJIABAAQACgEAFgDQAEgCAGAAQAJAAAFAEQAEAFAAAKIAAAig");
	this.shape_60.setTransform(18.525,44.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAnAAIAAAIIgfAAIAAAXIAdAAIAAAGIgdAAIAAAaIAfAAIAAAIg");
	this.shape_61.setTransform(11.275,44.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgGQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_62.setTransform(3.875,44);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_63.setTransform(48.875,34.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgHARIAAgeIgIAAIAAgFIAIgDIADgLIAEAAIAAAMIAQAAIAAAHIgQAAIAAAeQAAAEACADQADADAEAAIAEgBIADAAIAAAGIgEABIgFAAQgOAAAAgQg");
	this.shape_64.setTransform(44.575,32.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_65.setTransform(41.625,32.325);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_66.setTransform(39.1,32.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_67.setTransform(36.625,32.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAlQgEgCgEgFIAAAAIgCAIIgGAAIAAhLIAIAAIAAASIAAALQAHgIAJAAQALAAAGAIQAGAGAAAMQAAAOgGAHQgGAHgLAAQgDAAgFgBgAgKgFQgFAFAAAKQAAAMAFAFQADAFAHgBQAIAAADgEQAFgGAAgLQAAgKgFgEQgDgFgIAAQgHAAgDAEg");
	this.shape_68.setTransform(32.45,32.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_69.setTransform(28.025,32.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAPAbIgPgWIgOAWIgJAAIATgbIgSgaIAJAAIANAVIAOgVIAJAAIgSAaIATAbg");
	this.shape_70.setTransform(24.175,33.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_71.setTransform(18.775,33.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_72.setTransform(14.7,32.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAnAAIAAAIIgfAAIAAAaIAdAAIAAAGIgdAAIAAAfg");
	this.shape_73.setTransform(11.275,32.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgHAJQgDgDAAgGQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_74.setTransform(3.875,32.35);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSAYIAAgHIAIADIAJABQAFAAAEgCQAEgCAAgEQgBgDgDgCQgCgDgHgDIgKgEIgGgEQgBgDAAgEQAAgGAGgEQAFgEAIAAQAJAAAIAEIgDAGQgIgDgHAAQgEAAgDACQgDACAAADIABADQAAABABAAQAAABAAAAQABAAAAABQABAAABAAIAIAEQAJADAEADQADAEAAAFQAAAIgFAEQgGAEgJAAQgKAAgHgEg");
	this.shape_75.setTransform(45.7,21.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_76.setTransform(40.525,21.675);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgSAYIAAgHIAIADIAJABQAFAAAEgCQAEgCAAgEQgBgDgDgCQgCgDgHgDIgKgEIgGgEQgBgDAAgEQAAgGAGgEQAFgEAIAAQAJAAAIAEIgDAGQgIgDgHAAQgEAAgDACQgDACAAADIABADQAAABABAAQAAABAAAAQABAAAAABQABAAABAAIAIAEQAJADAEADQADAEAAAFQAAAIgFAEQgGAEgJAAQgKAAgHgEg");
	this.shape_77.setTransform(35.35,21.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgQAXQgGgFAAgKIAAgiIAIAAIAAAhQAAAHADADQAEADAGAAQAIAAAEgEQADgFAAgKIAAgbIAIAAIAAA0IgHAAIgBgHIAAAAQgCAEgFACQgEACgFAAQgKAAgEgEg");
	this.shape_78.setTransform(29.9,21.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAOAbIAAghQAAgHgDgDQgCgDgHAAQgHAAgFAEQgDAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQADgEAEgCQAFgCAEAAQAKAAAEAEQAGAFAAAKIAAAig");
	this.shape_79.setTransform(23.85,21.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_80.setTransform(17.775,21.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAUAAQANAAAHAFQAGAEAAAJQAAAGgDAFQgEAEgHABIAAAAQARACAAAOQAAAKgHAFQgGAGgMAAgAgQAdIAPAAQAIAAAEgEQAFgDAAgHQAAgHgFgDQgEgDgIAAIgPAAgAgQgEIAOAAQAIAAAEgDQAEgDAAgGQAAgGgFgDQgEgCgIAAIgNAAg");
	this.shape_81.setTransform(11.775,20.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_82.setTransform(3.875,20.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_83.setTransform(84.425,10.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgKAAgHgHg");
	this.shape_84.setTransform(79.35,10.025);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAOAbIAAghQAAgHgDgDQgDgDgGAAQgIAAgDAEQgEAFgBAKIAAAbIgHAAIAAg0IAGAAIABAHIABAAQACgEAFgCQAEgCAFAAQAKAAAEAEQAFAFABAKIAAAig");
	this.shape_85.setTransform(73.85,9.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgQAYQgFgEAAgIQAAgPAZgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgIAAgEADQgFACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_86.setTransform(67.8,10.025);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgOAbIAAg0IAHAAIAAAKIABAAQADgGADgCQAEgDAFAAIAGAAIgBAIIgFgBQgHAAgEAFQgEAGAAAIIAAAbg");
	this.shape_87.setTransform(63.55,9.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgRAXQgEgFAAgKIAAgiIAHAAIAAAhQABAHADADQADADAGAAQAIAAADgEQAEgFAAgKIAAgbIAJAAIAAA0IgHAAIgBgHIgBAAQgCAEgFACQgEACgFAAQgKAAgFgEg");
	this.shape_88.setTransform(58.1,10.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgRAYIAAgHIAIADIAIABQAGAAADgCQAEgCgBgEQAAgDgCgCQgDgDgHgDIgKgEIgGgEQgBgDAAgEQAAgGAGgEQAFgEAIAAQAIAAAJAEIgDAGQgIgDgHAAQgEAAgDACQgDACAAADIABADQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAJAEQAKADADADQADAEAAAFQAAAIgFAEQgGAEgJAAQgKAAgGgEg");
	this.shape_89.setTransform(52.7,10.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAOAbIAAghQAAgHgDgDQgCgDgHAAQgIAAgDAEQgEAFgBAKIAAAbIgHAAIAAg0IAGAAIABAHIABAAQACgEAFgCQAEgCAFAAQAKAAAFAEQAEAFABAKIAAAig");
	this.shape_90.setTransform(47.3,9.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_91.setTransform(42.85,9.125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAOAmIAAgiQAAgGgDgDQgCgEgHAAQgHAAgFAFQgDAEAAAKIAAAcIgIAAIAAhLIAIAAIAAAXIAAAHIAAAAQACgEAFgCQAEgCAFAAQAJAAAFAEQAGAFAAAJIAAAjg");
	this.shape_92.setTransform(35.9,8.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgHARIAAgeIgIAAIAAgFIAIgDIADgLIAEAAIAAAMIAQAAIAAAHIgQAAIAAAeQAAAEACADQADADAEAAIAEgBIADAAIAAAGIgEABIgFAAQgOAAAAgQg");
	this.shape_93.setTransform(31.025,9.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_94.setTransform(28.05,8.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgFAFgEACQgEACgFAAQgIAAgEgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_95.setTransform(23.85,10.025);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_96.setTransform(18.475,10.025);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AATAkIAAgiIglAAIAAAiIgIAAIAAhHIAIAAIAAAfIAlAAIAAgfIAIAAIAABHg");
	this.shape_97.setTransform(12,9.125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgDg");
	this.shape_98.setTransform(3.875,9.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(0,0,100.7,110.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgLBBQgEgFAAgHQAAgIAEgDQAEgEAHAAQAIAAAEAEQAEADAAAIQAAAHgEAFQgEAEgIAAQgHAAgEgEgAgKAWIgFhaIAfAAIgFBag");
	this.shape.setTransform(110.775,15.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBEQgLgIAAgNQAAgKAGgGQAFgGAMgDQgFgBgDgFQgDgEAAgFQAAgGADgCQAEgFAGgDQgIgEgFgIQgEgIAAgKQAAgRALgJQALgJAUAAIAKAAIAHACIAkAAIAAANIgQAFQAFAHAAAJQAAAQgMAJQgMAKgTAAIgFgBIgFAAQgEADAAADQAAAHAQAAIAQAAQARAAAJAHQAJAHAAAOQAAASgPAKQgPAKgcAAQgVABgMgIgAgVAjQgGAEAAAGQAAAFAGAEQAGADAKAAQAOAAAIgEQAJgEAAgHQAAgGgFgCQgFgCgLgBIgNAAQgIAAgFAEgAgQgnQAAAJADAEQAEAFAIABQAHgBAEgFQAEgEAAgJQAAgSgPgBQgPABAAASg");
	this.shape_1.setTransform(102.625,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA1IAAg8QAAgLgEgGQgEgFgJAAQgLAAgFAIQgGAIAAARIAAAxIgcAAIAAhnIAWAAIAEANIABAAQAFgHAIgEQAHgEALAAQASAAAJAKQAKAKAAASIAABDg");
	this.shape_2.setTransform(91.175,17.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBIIAAhmIAbAAIAABmgAgPg5QABgOAOAAQAQAAAAAOQAAAGgFAEQgEAEgHAAQgOAAgBgOg");
	this.shape_3.setTransform(82.05,15.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA1IAAhnIAWAAIAEARIABAAQAFgIAHgGQAIgFAKAAIAKABIgDAaIgIAAQgNAAgIAGQgHAHAAAMIAAA1g");
	this.shape_4.setTransform(75.425,17.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBIIAAhmIAbAAIAABmgAgOg5QAAgOAOAAQAPAAAAAOQAAAGgEAEQgDAEgIAAQgOAAAAgOg");
	this.shape_5.setTransform(67.7,15.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBEIAAg7Ig0AAIAAA7IgdAAIAAiHIAdAAIAAA1IA0AAIAAg1IAcAAIAACHg");
	this.shape_6.setTransform(57.55,15.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATA0IgJglIgKgsIAAAAIgSBRIgfAAIgehnIAcAAIANAuQADALACAWIABAAIADgWIACgHIAMgyIAfAAIAMAyIABAFIABAIIACAJIABAHIAAAAIADgSIADgPIANguIAcAAIgfBng");
	this.shape_7.setTransform(37.3,17.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAvQgLgGgGgNQgGgMAAgQQAAgZANgOQANgOAXAAQAPAAAMAHQALAGAGAMQAGAMAAAQQAAAZgNAOQgNAPgYAAQgOAAgMgHgAgPgWQgFAHAAAPQAAAPAFAIQAFAIAKAAQALAAAFgIQAFgIAAgPQAAgPgFgHQgFgIgLAAQgKAAgFAIg");
	this.shape_8.setTransform(23.275,17.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBEIg6hmIgBAAIACAmIAABAIgaAAIAAiHIAkAAIA6BlIABAAIgCglIAAhAIAaAAIAACHg");
	this.shape_9.setTransform(9.725,15.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(0,0,115.7,29.9), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(0,0,332,73), null);


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
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AAAjPIAAGf");
	this.shape.setTransform(0,20.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-1,-1,2,43.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBIQgFgFAAgIQAAgJAFgEQAEgEAIgBQAIABAGAEQAEAEAAAJQAAAIgFAEQgFAGgIAAQgIgBgEgEgAgLAYIgGhjIAjAAIgFBjg");
	this.shape.setTransform(85.75,112.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBQgLgQAAgbQAAgcALgPQAMgQAVAAQAUAAALARIABAAQgCgNAAgKIAAglIAgAAIAACfIgZAAIgGgPIgBAAQgLARgUAAQgVAAgLgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgKAAgFAJg");
	this.shape_1.setTransform(75.8,111.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_2.setTransform(63.325,114.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBBQgLgQAAgbQAAgcALgPQAMgQAVAAQAUAAALARIABAAQgCgNAAgKIAAglIAgAAIAACfIgYAAIgHgPIgBAAQgLARgUAAQgVAAgLgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgKAAgFAJg");
	this.shape_3.setTransform(50.15,111.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_4.setTransform(37.675,114.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_5.setTransform(25.275,114.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBLIhBhwIAAAAIACApIAABHIgdAAIAAiVIApAAIBABwIAAAAIgBgpIAAhHIAcAAIAACVg");
	this.shape_6.setTransform(10.55,112.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA6IgRgFIAAgaQAKAEALADQAKACAJABQAQgBAAgJQgBgEgCgCIgIgFIgNgHQgOgGgFgDQgHgFgCgGQgEgGAAgJQAAgQANgIQALgJAVAAQAUABAUAIIgJAYIgQgHQgIgCgIAAQgNAAABAIQgBADAFAEIASAJQAOAFAGAFQAGAEAEAGQADAGAAAJQAAARgNAKQgMAIgXABQgNAAgJgCg");
	this.shape_7.setTransform(107.25,89.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA6IAAhxIAXAAIAFATIABAAQAGgJAIgGQAJgGALgBIAKABIgCAeIgJgBQgPAAgJAHQgHAIAAANIAAA6g");
	this.shape_8.setTransform(97.825,89.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAtQgQgQAAgcQAAgcAPgQQAOgQAYAAQAZAAANAPQAOAOAAAYIAAAOIhJAAQAAANAIAIQAHAHAMABQALgBAJgCQAJgCAKgEIAAAYQgIADgJACQgKACgNABQgbAAgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_9.setTransform(86.275,89.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPA5IgshxIAhAAIAWBAQAEAMAAALIAAAAQABgJAEgOIAWhAIAhAAIgsBxg");
	this.shape_10.setTransform(74.125,89.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBQIAAhyIAfAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgFAEgIAAQgQAAAAgQg");
	this.shape_11.setTransform(64.95,87.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsBLQgNgIAAgPQAAgKAHgHQAGgHANgDQgFgCgEgFQgDgFAAgFQAAgHAEgDQADgEAIgEQgJgEgGgJQgFgJAAgLQAAgTAMgKQAMgLAXAAIALABIAIACIAoAAIAAAQIgSAEQAFAIAAAJQAAATgNAKQgNAKgWAAIgFAAIgFAAQgFADAAAEQAAAHARAAIATAAQATAAAKAIQAKAIAAAPQAAAVgRALQgRALgeAAQgYAAgNgJgAgYAnQgGAEAAAGQAAAHAHAEQAGADALAAQAQAAAJgEQAKgFAAgIQAAgGgGgDQgFgCgMAAIgPAAQgJAAgGAEgAgSgrQAAAJAEAGQAEAFAJAAQAIAAAEgFQAEgGAAgJQAAgVgQAAQgRAAAAAVg");
	this.shape_12.setTransform(55.725,91.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAtQgQgQAAgcQAAgcAPgQQAOgQAYAAQAZAAANAPQAOAOAAAYIAAAOIhJAAQAAANAIAIQAHAHAMABQALgBAJgCQAJgCAKgEIAAAYQgIADgJACQgKACgNABQgbAAgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_13.setTransform(43.725,89.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkA6IAAhxIAXAAIAFATIABAAQAGgJAIgGQAJgGALgBIAKABIgCAeIgJgBQgPAAgJAHQgHAIAAANIAAA6g");
	this.shape_14.setTransform(33.375,89.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAyQgJgKAAgQQAAgTAMgHQANgJAZgCIAUAAIAAgFQAAgRgSAAQgNAAgSAIIgLgVQAVgLAWAAQAYABAMAJQAMALAAAUIAABLIgWAAIgGgPIgBAAQgHAKgJAEQgIAEgMAAQgRAAgKgKgAAIAFQgNAAgHAFQgGAEAAAKQAAANAPAAQAKAAAGgHQAHgGAAgKIAAgKg");
	this.shape_15.setTransform(21.35,89.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnA6QgRgVAAglQAAgWAIgRQAJgSAQgKQAQgJAUAAQAWAAAWAKIgKAbIgRgIQgJgCgIAAQgRAAgJANQgKAOAAAXQAAAxAkAAQAQABAXgJIAAAbQgTAIgXAAQgfAAgSgTg");
	this.shape_16.setTransform(8.925,87.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoBKQgMgIAAgPQAAgKAHgHQAGgIAMgDQgEgCgDgEQgDgEAAgFQAAgGADgEQAEgFAGgEQgIgDgFgKQgGgIAAgLQAAgTALgJQALgLAVABQAHAAAHABIAnAAIAAALIgVADQADADADAHQABAFAAAHQABARgLAJQgMALgSgBIgKgBQgLAGAAAIQAAAEAEADQADACAKAAIATAAQASAAAKAIQAKAIAAAOQAAATgPAJQgPALgcgBQgWAAgMgIgAgdAjQgGAFAAALQAAAJAHAEQAIAGAOAAQAUgBALgGQAKgHAAgLQAAgJgGgDQgFgEgPAAIgUAAQgMAAgGAGgAgUg+QgGAGAAAMQgBANAIAFQAGAHAMAAQAYAAAAgZQAAgZgYAAQgNAAgGAHg");
	this.shape_17.setTransform(52.5,68.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeA5IAAhHQAAgOgGgHQgHgHgNAAQgQAAgIAKQgJAJAAAWIAAA6IgRAAIAAhvIAOAAIADAPIABAAQAEgIAKgFQAJgEALAAQAVAAAKAKQAKAJAAAWIAABIg");
	this.shape_18.setTransform(40.45,65.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDACgEAAQgDAAgDgCg");
	this.shape_19.setTransform(31.3,63.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJA4IgqhvIASAAIAYBCIAJAeIABAAIAGgXIAbhJIASAAIgqBvg");
	this.shape_20.setTransform(23.4,66.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHBNIAAhwIAQAAIAABwgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAFAAACADQADADAAAFQAAAGgDADQgCACgFAAQgDAAgDgCg");
	this.shape_21.setTransform(15.5,63.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpBLIAAiVIASAAIAACFIBBAAIAAAQg");
	this.shape_22.setTransform(8.225,64.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkBCQgMgPAAgcQAAgbAMgPQAMgQAWAAQAWAAAMARIABAAIAAgIIgBgIIAAguIARAAIAACfIgNAAIgDgPIgBAAQgLARgXAAQgWAAgMgPgAgXgJQgIALAAAVQAAAWAIALQAIALAPAAQARAAAIgKQAHgJAAgWIAAgDQAAgXgIgKQgIgKgQAAQgPAAgIALg");
	this.shape_23.setTransform(75.825,40.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggArQgPgPAAgbQABgaANgQQANgQAWAAQAUAAANAOQANAOAAAWIAAAKIhNAAQABAUAJAKQAJAKAQAAQATAAARgHIAAAPIgRAGQgHABgMAAQgYAAgOgPgAAdgKQAAgQgHgIQgHgJgNAAQgNAAgIAJQgIAJgCAPIA6AAIAAAAg");
	this.shape_24.setTransform(63.9,42.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQAkIAAhCIgQAAIAAgIIAQgHIAHgYIAJAAIAAAaIAhAAIAAANIghAAIAABBQAAAKAFAGQAFAFAIAAIAJAAIAGgCIAAANIgIACIgJABQggAAAAgig");
	this.shape_25.setTransform(54.175,41.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_26.setTransform(45.625,42.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHBNIAAhvIAQAAIAABvgAgGg4QgDgDAAgGQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAGgDADQgDACgEABQgDgBgDgCg");
	this.shape_27.setTransform(37.9,40.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_28.setTransform(30.325,42.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgnAzIAAgQQAJAFAJACQAJACAJAAQAMAAAHgEQAHgEAAgJQAAgHgFgEQgGgFgQgGQgPgFgHgEQgGgFgEgFQgDgGAAgIQAAgNALgIQALgIATAAQASAAARAHIgGAOQgRgHgNAAQgLAAgHAEQgGAEAAAGQAAAFADADQACADAFADIATAIQAUAHAHAHQAHAHAAAMQAAAPgMAJQgMAIgUAAQgWAAgNgHg");
	this.shape_29.setTransform(20.325,42.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAxBLIgTgvIg8AAIgSAvIgSAAIA8iVIANAAIA8CVgAAYAMIgRguIgHgVIgFAVIgSAuIAvAAg");
	this.shape_30.setTransform(8.65,40.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AggArQgOgPAAgbQAAgaANgQQANgQAWAAQAVAAAMAOQAMAOAAAWIAAAKIhMAAQAAAUAKAKQAJAKARAAQASAAASgHIAAAPIgRAGQgJABgLAAQgYAAgOgPgAAdgKQAAgQgHgIQgIgJgMAAQgNAAgIAJQgIAJgBAPIA5AAIAAAAg");
	this.shape_31.setTransform(85.35,18.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA/A5IAAhIQAAgNgGgHQgFgHgNAAQgPAAgIAJQgIAKAAASIAAA+IgQAAIAAhIQAAgNgFgHQgGgHgMAAQgQAAgIAKQgHAJAAAWIAAA6IgRAAIAAhvIAOAAIACAPIABAAQAFgIAJgFQAJgEAKAAQAbAAAHATIABAAQAFgJAJgFQAKgFAMAAQATAAAKAKQAJAJAAAWIAABIg");
	this.shape_32.setTransform(69.725,18.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHBNIAAhvIAQAAIAABvgAgGg4QgDgDAAgGQAAgFADgEQADgCADAAQAEAAADACQADAEAAAFQAAAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_33.setTransform(57.25,16.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHBLIAAiGIgwAAIAAgPIBvAAIAAAPIgvAAIAACGg");
	this.shape_34.setTransform(48.8,16.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAIIAAgPIAxAAIAAAPg");
	this.shape_35.setTransform(39.625,18.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHBQIAAifIAQAAIAACfg");
	this.shape_36.setTransform(33.6,16.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHBQIAAifIAQAAIAACfg");
	this.shape_37.setTransform(28.3,16.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkAwQgKgKAAgWIAAhIIARAAIAABIQAAAOAGAGQAHAHANAAQARAAAHgKQAJgJAAgWIAAg6IARAAIAABvIgOAAIgDgPIgBAAQgFAIgJAFQgKAEgLAAQgUAAgKgJg");
	this.shape_38.setTransform(19.2,18.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgpBLIAAiVIBTAAIAAAPIhBAAIAAA3IA9AAIAAAPIg9AAIAABAg");
	this.shape_39.setTransform(8.225,16.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(0,0,114.6,128), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAOAmIgGgaIgIghIAAAAIgNA7IgXAAIgVhLIAUAAIAJAiIAFAYIACgRIABgFIAJgkIAXAAIAJAkIABAEIABAGIABAHIAAAFIABAAIABgOIADgKIAJgiIAVAAIgXBLg");
	this.shape.setTransform(79,17.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgFgJQgEgJAAgMQAAgSAKgKQAKgLAQAAQALAAAJAFQAIAFAEAJQAFAJAAALQAAATgKAKQgKALgRAAQgKAAgJgFgAgMgQQgDAFAAALQAAALAEAGQAEAGAHAAQAIAAAEgGQAEgGAAgLQAAgKgEgGQgEgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(68.7,17.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAyIgrhLIgBAAIACAcIAAAvIgTAAIAAhjIAbAAIAqBKIAAAAIgBgaIAAgwIATAAIAABjg");
	this.shape_2.setTransform(58.675,16.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA2IAAgRIAIABQAGABAEgEQAEgEACgGIACgEIgfhLIAXAAIAPArIABAMIADgMIAPgrIAWAAIggBVQgFAMgHAGQgIAGgLAAIgLgBg");
	this.shape_3.setTransform(45.425,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA1IAAhpIAUAAIAABpg");
	this.shape_4.setTransform(39.35,16.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_5.setTransform(33.025,19.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA4IAAhtIARAAIADAKIABAAQAHgMAOAAQANAAAIALQAIAKAAATQAAAMgEAIQgEAJgGAFQgHAFgJAAQgMAAgIgKIgBAAIABALIAAAfgAgKghQgEAFAAALIAAACQAAAMAEAEQADAGAHAAQAOAAAAgWQAAgMgDgFQgEgGgHAAQgHAAgDAFg");
	this.shape_6.setTransform(24.175,19.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_7.setTransform(14.675,16.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AnaCvIAAldIO1AAIAAFdg");
	this.shape_8.setTransform(47.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(0,0,95,35), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// click_button
	this.ad_clickBtn = new lib.ad_clickBtn();
	this.ad_clickBtn.name = "ad_clickBtn";
	this.ad_clickBtn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(220));

	// T2
	this.instance = new lib.T2();
	this.instance.setTransform(41.15,97.5,1,1,0,0,0,46.1,51.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({x:56.15,alpha:1},9,cjs.Ease.get(1)).wait(83));

	// T1
	this.instance_1 = new lib.T1();
	this.instance_1.setTransform(52.85,27.2,1,1,0,0,0,57.8,14.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:67.85,alpha:1},9,cjs.Ease.get(1)).wait(92));

	// Cta
	this.instance_2 = new lib.Cta();
	this.instance_2.setTransform(254.5,216.05,1,1,0,0,0,47.5,17.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({x:239.5,alpha:1},9,cjs.Ease.get(1)).wait(175));

	// Line
	this.instance_3 = new lib.Line();
	this.instance_3.setTransform(180.55,216.85,1,1,0,0,0,0,20.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(184));

	// Hdr
	this.instance_4 = new lib.Hdr();
	this.instance_4.setTransform(52.25,91.3,1,1,0,0,0,57.2,64);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:67.25,alpha:1},9,cjs.Ease.get(1)).to({_off:true},92).wait(101));

	// Logo
	this.instance_5 = new lib.Logo_1();
	this.instance_5.setTransform(77.9,217.2,0.4894,0.4894,0,0,0,166.2,36.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:92.9,alpha:1},9,cjs.Ease.get(1)).wait(202));

	// Bg
	this.instance_6 = new lib.Bg_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9,cjs.Ease.get(1)).wait(211));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,306.9,250);


// stage content:
(lib.WBAY_218223_MM_300x250_V1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ad_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	mask.setTransform(150,124.9964);

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
p.nominalBounds = new cjs.Rectangle(149.5,124.5,151,126);
// library properties:
lib.properties = {
	id: '48CD351458C9064B938336FCF791836E',
	width: 300,
	height: 250,
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
an.compositions['48CD351458C9064B938336FCF791836E'] = {
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