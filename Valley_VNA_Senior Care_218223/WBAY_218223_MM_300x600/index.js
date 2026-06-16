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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgoBAIAAgLIAKABQAOAAAGgPIAFgOIglhaIAPAAIAUA0QAHARAAAIIABAAIAEgOIAXg/IAPAAIgnBmQgFAQgIAHQgIAGgLAAQgGAAgGgCg");
	this.shape.setTransform(224.575,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAdIAAg1IgNAAIAAgGIANgGIAGgUIAHAAIAAAVIAaAAIAAALIgaAAIAAA1QAAAIADAEQAFAFAHAAIAGgBIAGgBIAAAKIgHACIgIABQgZAAAAgcg");
	this.shape_1.setTransform(217.3,75.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA+IAAhaIANAAIAABagAgFgtQgCgCAAgFQAAgFACgCQADgCACAAQADAAADACQACACAAAFQAAAFgCACQgDACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(212.2,74.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgMgFgFQgFgGgLAAQgNAAgGAIQgHAIAAASIAAAuIgOAAIAAhaIAMAAIACANIAAAAQAEgHAIgDQAHgEAJAAQAQAAAJAIQAIAIAAARIAAA6g");
	this.shape_3.setTransform(204.95,75.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAnQgIgIAAgSIAAg6IAOAAIAAA6QAAALAFAFQAFAGALAAQANAAAHgIQAGgIAAgRIAAgvIAOAAIAABaIgLAAIgDgMIAAAAQgFAGgGAEQgJADgIAAQgRAAgIgHg");
	this.shape_4.setTransform(194.5,76.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzAuIAAg6QAAgLgFgFQgEgGgKAAQgNAAgGAIQgGAHAAAQIAAAxIgNAAIAAg6QAAgLgEgFQgFgGgKAAQgNAAgGAIQgGAIAAASIAAAuIgOAAIAAhaIAMAAIACANIAAAAQAEgHAHgDQAHgEAJAAQAWAAAFAPIABAAQAEgHAIgEQAHgEAKAAQAPAAAIAIQAIAIAAARIAAA6g");
	this.shape_5.setTransform(181.525,75.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzAuIAAg6QAAgLgFgFQgEgGgKAAQgNAAgGAIQgGAHAAAQIAAAxIgNAAIAAg6QAAgLgEgFQgFgGgKAAQgNAAgGAIQgGAIAAASIAAAuIgOAAIAAhaIAMAAIACANIAAAAQAEgHAHgDQAHgEAJAAQAWAAAFAPIABAAQAEgHAIgEQAHgEAKAAQAPAAAIAIQAIAIAAARIAAA6g");
	this.shape_6.setTransform(165.825,75.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVApQgJgFgGgLQgFgLAAgOQAAgVALgMQALgNATAAQATAAAMANQALAMAAAVQAAAWgLAMQgMANgTAAQgMAAgJgGgAgUgZQgGAIAAARQAAASAGAIQAHAJANAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgKgNABQgNAAgHAJg");
	this.shape_7.setTransform(152.775,76.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAjQgLgMAAgWQAAgWALgMQALgNAUAAIANABIAKAEIgEALIgKgCIgKgCQgaAAAAAjQAAAQAGAJQAHAJAMAAQAMAAAMgEIAAALQgKAFgNAAQgTAAgLgMg");
	this.shape_8.setTransform(143.825,76.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA1QgKgMAAgWQAAgWAKgMQAKgNARAAQASAAAKAOIABAAIAAgHIgBgGIAAglIAOAAIAACAIgLAAIgCgMIgBAAQgKANgSAAQgRAAgKgMgAgSgHQgHAJABARQgBARAHAJQAGAJAMAAQAOAAAGgIQAGgHAAgRIAAgDQAAgTgGgIQgHgIgNAAQgMAAgGAJg");
	this.shape_9.setTransform(129.8,74.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAjQgMgMAAgWQABgVAKgNQALgNASAAQAQAAALAMQAJAKABATIAAAIIg+AAQAAAPAIAJQAIAIAMAAQAPAAAOgGIAAAMIgNAFIgQABQgTAAgMgMgAAXgHQAAgNgFgIQgGgGgLAAQgJAAgHAGQgGAIgCANIAuAAIAAAAg");
	this.shape_10.setTransform(120.15,76.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGBBIAAiBIANAAIAACBg");
	this.shape_11.setTransform(113.25,74.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAjQgMgMAAgWQAAgVAMgNQAKgNASAAQAQAAALAMQAKAKgBATIAAAIIg9AAQAAAPAIAJQAHAIANAAQAPAAAPgGIAAAMIgOAFIgQABQgTAAgMgMgAAXgHQABgNgGgIQgGgGgLAAQgJAAgHAGQgGAIgCANIAuAAIAAAAg");
	this.shape_12.setTransform(106.4,76.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdA1QgKgMAAgWQAAgWAKgMQAKgNARAAQASAAAKAOIABAAIgBgHIAAgGIAAglIAOAAIAACAIgLAAIgCgMIgBAAQgJANgTAAQgRAAgKgMgAgTgHQgFAJAAARQAAARAFAJQAHAJAMAAQAOAAAGgIQAGgHAAgRIAAgDQAAgTgGgIQgHgIgNAAQgMAAgHAJg");
	this.shape_13.setTransform(96.2,74.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVApQgJgFgGgLQgFgLAAgOQAAgVALgMQALgNATAAQATAAAMANQALAMAAAVQAAAWgLAMQgMANgTAAQgMAAgJgGgAgUgZQgGAIAAARQAAASAGAIQAHAJANAAQANAAAHgJQAHgIAAgSQAAgQgHgJQgHgKgNABQgNAAgHAJg");
	this.shape_14.setTransform(86.125,76.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAzAuIAAg6QAAgLgFgFQgEgGgKAAQgNAAgGAIQgGAHAAAQIAAAxIgNAAIAAg6QAAgLgEgFQgFgGgKAAQgNAAgGAIQgGAIAAASIAAAuIgOAAIAAhaIAMAAIACANIAAAAQAEgHAHgDQAHgEAJAAQAWAAAFAPIABAAQAEgHAIgEQAHgEAKAAQAPAAAIAIQAIAIAAARIAAA6g");
	this.shape_15.setTransform(73.225,75.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAjQgMgMABgWQAAgVALgNQAKgNARAAQARAAALAMQAKAKgBATIAAAIIg9AAQAAAPAIAJQAHAIANAAQAPAAAPgGIAAAMIgPAFIgPABQgTAAgMgMgAAXgHQABgNgGgIQgGgGgLAAQgJAAgHAGQgHAIgBANIAuAAIAAAAg");
	this.shape_16.setTransform(60.6,76.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAuIAAhaIALAAIACARIAAAAQAFgJAHgEQAHgFAIAAIALABIgCANIgKgCQgLAAgHAJQgHAJAAAOIAAAvg");
	this.shape_17.setTransform(52.975,75.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoBAIAAgKIAKABQAOgBAGgQIAFgMIglhbIAPAAIAUA0QAHARAAAHIABAAIAEgNIAXg/IAPAAIgnBmQgFAQgIAHQgIAGgLAAQgGAAgGgCg");
	this.shape_18.setTransform(205.975,60.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_19.setTransform(199.6,56.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXAtIgRg0IgGgWIAAAAIgGAWIgRA0IgPAAIgZhaIAPAAIAMA0QAFASABAGIABAAIADgNIADgLIAQg0IAPAAIAQA0QAFAOABAKIABAAIACgJIARhDIAOAAIgZBag");
	this.shape_20.setTransform(190.85,58.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAjQgLgNAAgVQgBgVAMgNQAKgNARAAQARAAAKALQAKAMAAASIAAAHIg9AAQAAARAIAIQAHAIAOAAQAOAAAPgGIAAANIgPAEIgPABQgTAAgMgMgAAYgIQAAgMgGgHQgGgIgLAAQgKAAgGAIQgHAHgBAMIAvAAIAAAAg");
	this.shape_21.setTransform(179.6,58.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgMgFgFQgFgGgLAAQgNAAgHAIQgGAIAAASIAAAuIgOAAIAAhaIALAAIACANIABAAQAFgHAHgDQAHgEAJAAQARAAAHAIQAJAIAAARIAAA6g");
	this.shape_22.setTransform(169.7,58.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAuIAAhaIALAAIACARIAAAAQAFgJAHgEQAHgFAIAAIALABIgCANIgKgCQgLAAgHAJQgHAJAAAOIAAAvg");
	this.shape_23.setTransform(157.225,58.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAnQgIgIAAgSIAAg6IAOAAIAAA6QAAALAFAFQAFAGALAAQANAAAGgIQAIgIgBgRIAAgvIAOAAIAABaIgMAAIgCgMIAAAAQgFAGgGAEQgJADgIAAQgQAAgJgHg");
	this.shape_24.setTransform(147.95,58.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAqQgJgHgGgKQgFgKAAgPQAAgVALgNQALgMATAAQATAAAMAMQALANAAAVQAAAWgLANQgMAMgTAAQgMAAgJgFgAgUgaQgGAJAAARQAAARAGAJQAHAKANgBQANABAHgKQAHgJAAgRQAAgRgHgIQgHgKgNAAQgNABgHAIg");
	this.shape_25.setTransform(137.675,58.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgMgFgFQgFgGgLAAQgNAAgGAIQgHAIAAASIAAAuIgOAAIAAhaIAMAAIACANIAAAAQAEgHAIgDQAHgEAJAAQAQAAAJAIQAIAIAAARIAAA6g");
	this.shape_26.setTransform(123.05,58.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGA+IAAhaIANAAIAABagAgFgtQgCgCAAgFQAAgFACgCQACgCADAAQAEAAACACQACACAAAFQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_27.setTransform(115.7,56.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUBAIgfgrIgLAJIAAAiIgNAAIAAh/IANAAIAABDIAAAOIAAAAIALgNIAdgfIAQAAIgkAmIAmA0g");
	this.shape_28.setTransform(105.325,56.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAuIAAhaIALAAIACARIAAAAQAFgJAHgEQAHgFAIAAIALABIgCANIgKgCQgLAAgHAJQgHAJAAAOIAAAvg");
	this.shape_29.setTransform(97.425,58.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAqQgJgHgGgKQgFgKAAgPQAAgVALgNQALgMATAAQATAAAMAMQALANAAAVQAAAWgLANQgMAMgTAAQgMAAgJgFgAgUgaQgGAJAAARQAAARAGAJQAHAKANgBQANABAHgKQAHgJAAgRQAAgRgHgIQgHgKgNAAQgNABgHAIg");
	this.shape_30.setTransform(88.275,58.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAeA8IgYhQIgEgNIgCgKIgFAYIgYBPIgOAAIggh3IAPAAIATBJQAEAQACAMQACgOAEgPIAWhIIAOAAIAXBJQAEANADAPQABgLAFgRIAThJIAOAAIggB3g");
	this.shape_31.setTransform(75.275,56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T3, new cjs.Rectangle(46.5,42.3,184.8,45.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgfAjQgLgNAAgWQAAgWALgNQAMgMATAAQAUAAALANQAMANAAAVQAAAWgMANQgLANgUAAQgUAAgLgNgAgWgcQgIAKAAASQAAATAIAJQAIAKAOAAQAPAAAIgKQAIgJAAgTQAAgSgIgKQgIgJgPAAQgOAAgIAJg");
	this.shape.setTransform(75.275,135.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAuIAAhSIgeAAIAAgKIBFAAIAAAKIgdAAIAABSg");
	this.shape_1.setTransform(66.625,135.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAuIAAhcIAYAAQAhABAAAbQAAAOgJAGQgKAIgRAAIgLAAIAAAkgAgSAAIAKAAQANABAHgEQAGgFAAgKQAAgJgGgEQgGgFgMAAIgMAAg");
	this.shape_2.setTransform(59.475,135.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_3.setTransform(49.5,135.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAyIAAgtQAAgIgEgEQgEgEgIAAQgKgBgFAHQgGAFAAANIAAAlIgKAAIAAhiIAKAAIAAAdIAAAJIABAAQADgFAFgDQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAug");
	this.shape_4.setTransform(209.825,118.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAIgJAPAAIAKABIAIADIgDAIIgIgCIgHgBQgUAAgBAaQAAANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgKAAQgOAAgJgJg");
	this.shape_5.setTransform(202.9,120.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAWIAAgpIgJAAIAAgEIAJgFIAFgOIAFAAIAAAQIAUAAIAAAHIgUAAIAAApQAAAGADADQADADAFAAIAFAAIAFgBIAAAIIgFACIgHAAQgSAAgBgVg");
	this.shape_6.setTransform(197.35,119.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAeQgGgFAAgJQAAgVAhgBIAMAAIAAgEQgBgIgDgFQgDgDgJAAQgHAAgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIAAAAQgGAGgFADQgFACgHAAQgKAAgGgGgAgKAEQgGAEAAAIQAAAFAEADQADADAGAAQAJAAAFgGQAGgFAAgJIAAgGIgKAAQgMAAgFADg");
	this.shape_7.setTransform(191.3,120.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnAkIAAgtQAAgIgDgEQgEgEgIAAQgJgBgFAHQgFAFAAALIAAAnIgJAAIAAgtQAAgIgEgEQgDgEgIAAQgKgBgEAHQgFAFAAAOIAAAkIgLAAIAAhFIAJAAIACAJIAAAAQADgFAGgDQAFgCAHAAQAQgBAEAMIABAAQADgFAGgDQAGgDAHAAQAMAAAGAGQAGAGAAANIAAAtg");
	this.shape_8.setTransform(181.925,120);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_9.setTransform(169.225,121.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIAAQgKgBgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgFAGgDQAGgCAGAAQAMAAAHAGQAGAGAAANIAAAtg");
	this.shape_10.setTransform(162.025,120);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAeQgGgFAAgJQAAgVAggBIANAAIAAgEQgBgIgDgFQgDgDgJAAQgHAAgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIAAAAQgGAGgFADQgFACgHAAQgLAAgFgGgAgKAEQgGAEAAAIQAAAFADADQAEADAGAAQAJAAAFgGQAGgFAAgJIAAgGIgKAAQgMAAgFADg");
	this.shape_11.setTransform(154.2,120.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAzIAAhjIAJAAIABAJIABAAQAEgGAFgCQAGgDAGAAQAOAAAHAJQAIAKAAARQAAAQgIAKQgIAKgNgBQgGAAgGgCQgFgDgEgFIgBAAIABAMIAAAcgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAHAKgBQAJABAFgIQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_12.setTransform(147.025,121.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAnAkIAAgtQAAgIgDgEQgEgEgIAAQgJgBgFAHQgFAFAAALIAAAnIgJAAIAAgtQAAgIgEgEQgDgEgIAAQgKgBgEAHQgFAFAAAOIAAAkIgLAAIAAhFIAJAAIACAJIAAAAQADgFAGgDQAFgCAHAAQAQgBAEAMIABAAQADgFAGgDQAGgDAHAAQAMAAAGAGQAGAGAAANIAAAtg");
	this.shape_13.setTransform(136.875,120);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_14.setTransform(126.875,120.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAABAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgNAAgJgJg");
	this.shape_15.setTransform(120.05,120.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATAyIAAgtQAAgIgEgEQgEgEgIAAQgKgBgFAHQgGAFAAANIAAAlIgKAAIAAhiIAKAAIAAAdIAAAJIABAAQADgFAFgDQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAug");
	this.shape_16.setTransform(109.525,118.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAWIAAgpIgKAAIAAgEIAKgFIAEgOIAFAAIAAAQIAUAAIAAAHIgUAAIAAApQAAAGADADQADADAFAAIAGAAIADgBIAAAIIgEACIgHAAQgSAAAAgVg");
	this.shape_17.setTransform(103.2,119.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_18.setTransform(99.35,118.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAjIgOgoIgEgRIAAAAIgEARIgNAoIgMAAIgThFIALAAIALAnIADATIABAAIACgKIADgJIAMgnIALAAIAMAnIAFASIABAAIABgHIANgyIALAAIgTBFg");
	this.shape_19.setTransform(92.65,120.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAyIgYgiIgIAIIAAAaIgKAAIAAhiIAKAAIAAAzIAAALIAAAAIAJgKIAWgXIAMAAIgcAcIAeApg");
	this.shape_20.setTransform(81.35,118.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAGAvIAAhCIABgPIgDADIgOAMIgGgHIAYgUIAJAAIAABdg");
	this.shape_21.setTransform(72.925,118.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAkQgIgMAAgYQAAgYAIgLQAHgMAPAAQAPAAAIANQAIAMAAAWQAAAYgIAMQgIAMgPAAQgOAAgIgMgAgOgdQgFAKAAATQAAAUAFAKQAEAJAKAAQAKAAAFgJQAFgKAAgUQAAgTgFgKQgFgIgKgBQgKABgEAIg");
	this.shape_22.setTransform(66.375,118.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALAvIAAgWIgsAAIAAgJIArg+IALAAIAAA+IANAAIAAAJIgNAAIAAAWgAAFgYIgbAoIAhAAIAAgeIABgVIgBAAg");
	this.shape_23.setTransform(58.95,118.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_24.setTransform(49.5,118.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_25.setTransform(122.475,104.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAfQgGgGAAgKQAAgUAggBIANAAIAAgFQAAgHgEgEQgDgFgIAAQgIAAgLAGIgDgIQAFgDAGgBQAGgCAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgKIAAAAQgGAHgFACQgFADgHAAQgLAAgFgFgAgLAFQgFADAAAHQAAAGADADQAEADAGAAQAJAAAGgFQAFgGAAgKIAAgGIgLAAQgLABgGAEg");
	this.shape_26.setTransform(115.4,103.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAuIAAhbIAYAAQAhAAAAAbQAAAOgJAGQgKAIgRAAIgLAAIAAAkgAgSAAIAKAAQANAAAHgDQAGgEAAgLQAAgJgGgFQgGgEgMAAIgMAAg");
	this.shape_27.setTransform(108.425,102.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_28.setTransform(97.575,104.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAfQgGgGAAgKQAAgUAhgBIAMAAIAAgFQgBgHgDgEQgDgFgJAAQgHAAgLAGIgDgIQAFgDAGgBQAGgCAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgKIAAAAQgGAHgFACQgFADgHAAQgKAAgGgFgAgKAFQgGADAAAHQAAAGAEADQADADAGAAQAJAAAFgFQAGgGAAgKIAAgGIgKAAQgMABgFAEg");
	this.shape_29.setTransform(90.5,103.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWApQgHgKAAgRQAAgQAHgKQAIgJANAAQAOAAAHAKIAAAAIAAgFIAAgFIAAgcIALAAIAABiIgJAAIgCgKIAAAAQgHALgOAAQgNAAgIgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_30.setTransform(82.95,101.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_31.setTransform(77.55,102.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAxIAAhiIAJAAIAABig");
	this.shape_32.setTransform(74.275,101.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_33.setTransform(68.725,103.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYAuIAAgrIgvAAIAAArIgLAAIAAhbIALAAIAAAnIAvAAIAAgnIALAAIAABbg");
	this.shape_34.setTransform(60.05,102.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_35.setTransform(49.5,102.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_36.setTransform(233.775,86.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAWIAAgpIgLAAIAAgEIALgFIAEgOIAFAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADADQADAEAFgBIAGAAIAEgBIAAAIIgGACIgFAAQgUAAABgVg");
	this.shape_37.setTransform(228.35,85.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AATAkIAAgsQAAgJgEgEQgEgFgIABQgKAAgFAFQgGAHAAANIAAAkIgKAAIAAhFIAIAAIACAKIABAAQADgFAGgEQAGgCAGAAQAMAAAHAGQAGAGAAANIAAAtg");
	this.shape_38.setTransform(222.175,86.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_39.setTransform(214.575,86.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAjIgbhFIAMAAIAPAoQAFAPAAAEIABAAIADgOIARgtIALAAIgaBFg");
	this.shape_40.setTransform(207.65,86.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_41.setTransform(200.825,86.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AATAkIAAgsQAAgJgEgEQgEgFgIABQgKAAgFAFQgGAHAAANIAAAkIgKAAIAAhFIAIAAIACAKIABAAQADgFAGgEQAGgCAGAAQAMAAAHAGQAGAGAAANIAAAtg");
	this.shape_42.setTransform(189.875,86.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_43.setTransform(181.925,86.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAwIAAhFIAJAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_44.setTransform(176.4,85.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAWIAAgpIgKAAIAAgEIAKgFIAFgOIAFAAIAAAPIAUAAIAAAIIgUAAIAAApQAAAGADADQADAEAFgBIAFAAIAFgBIAAAIIgGACIgFAAQgUAAAAgVg");
	this.shape_45.setTransform(172.45,85.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAeQgGgFAAgJQAAgVAggBIAMAAIAAgEQABgIgEgFQgEgDgHAAQgIgBgLAGIgDgIQAFgDAGgBQAGgCAGAAQAMAAAGAFQAGAGAAAMIAAAvIgIAAIgCgKIgBAAQgFAGgFADQgFACgHAAQgLAAgFgGgAgLAEQgFAEAAAIQAAAFAEADQADADAGAAQAJAAAGgGQAFgFAAgJIAAgGIgLAAQgLAAgGADg");
	this.shape_46.setTransform(166.4,86.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_47.setTransform(161.4,85.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAIgJAPAAIAKABIAIADIgDAIIgIgCIgHgBQgUAAAAAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgKAAQgOAAgJgJg");
	this.shape_48.setTransform(156.85,86.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_49.setTransform(150.025,86.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAEgHAFgEQAGgDAGAAIAIABIgBAJIgIgBQgJAAgEAHQgHAHAAAKIAAAlg");
	this.shape_50.setTransform(144.15,86.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAJAAIABAKIABAAQAEgGAFgCQAGgDAGAAQAOAAAHAJQAIAKAAARQAAAQgIAKQgIAJgNAAQgGAAgGgCQgFgDgEgFIgBAAIABALIAAAdgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAHAKgBQAJABAFgIQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_51.setTransform(137.275,88.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAJAAIABAKIABAAQAEgGAFgCQAGgDAGAAQAOAAAHAJQAIAKAAARQAAAQgIAKQgIAJgNAAQgGAAgGgCQgFgDgEgFIgBAAIABALIAAAdgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAHAKgBQAJABAFgIQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_52.setTransform(129.325,88.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgVAeQgGgFAAgJQAAgVAggBIANAAIAAgEQgBgIgDgFQgDgDgJAAQgHgBgLAGIgDgIQAFgDAGgBQAGgCAFAAQANAAAGAFQAGAGAAAMIAAAvIgIAAIgCgKIAAAAQgGAGgFADQgFACgHAAQgLAAgFgGgAgKAEQgGAEAAAIQAAAFADADQAEADAGAAQAJAAAFgGQAGgFAAgJIAAgGIgKAAQgMAAgFADg");
	this.shape_53.setTransform(121.35,86.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_54.setTransform(111.025,86.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_55.setTransform(103.775,86.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_56.setTransform(96.825,88.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_57.setTransform(89.625,86.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAyIAAhiIAJAAIAABig");
	this.shape_58.setTransform(84.075,85.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAJAAIABAKIABAAQAEgGAFgCQAGgDAGAAQAOAAAHAJQAIAKAAARQAAAQgIAKQgIAJgNAAQgGAAgGgCQgFgDgEgFIgBAAIABALIAAAdgAgOgjQgFAGAAANIAAACQAAAOAFAGQAFAHAKgBQAJABAFgIQAFgGAAgNQAAgNgFgHQgFgHgKAAQgJAAgFAGg");
	this.shape_59.setTransform(78.675,88.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAnAkIAAgtQAAgIgDgEQgEgFgIABQgJAAgFAFQgFAGAAALIAAAnIgJAAIAAgtQAAgIgEgEQgDgFgIABQgKAAgEAFQgFAHAAANIAAAkIgLAAIAAhFIAJAAIACAKIAAAAQADgFAGgEQAFgCAHAAQAQgBAEAMIABAAQADgFAGgDQAGgEAHABQAMAAAGAGQAGAGAAANIAAAtg");
	this.shape_60.setTransform(68.525,86.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgZAvIAAhdIAzAAIAAAKIgoAAIAAAeIAlAAIAAAJIglAAIAAAiIAoAAIAAAKg");
	this.shape_61.setTransform(59.125,85.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_62.setTransform(49.5,85.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_63.setTransform(108.025,71.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAGgBIADAAIAAAIIgEABIgGABQgUgBABgVg");
	this.shape_64.setTransform(102.45,69.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgFAwIAAhFIAKAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_65.setTransform(98.6,68.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEAxIAAhiIAJAAIAABig");
	this.shape_66.setTransform(95.325,68.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_67.setTransform(92.1,68.675);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAwQgFgDgEgFIgBAAIgCAJIgIAAIAAhiIALAAIAAAYIgBAOIABAAQAHgKAOAAQAOAAAHAJQAIAKAAAQQAAARgIAKQgIAJgNAAQgGAAgGgCgAgOgGQgFAGAAAOQAAAPAFAGQAFAGAKAAQAJAAAFgHQAFgHAAgNQAAgOgFgFQgFgHgKAAQgKAAgEAGg");
	this.shape_68.setTransform(86.675,68.575);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_69.setTransform(80.9,68.675);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AATAjIgTgcIgTAcIgLAAIAZgjIgYgiIALAAIASAbIASgbIAMAAIgYAiIAaAjg");
	this.shape_70.setTransform(75.85,69.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_71.setTransform(68.875,69.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAxIAAhiIAJAAIAABig");
	this.shape_72.setTransform(63.575,68.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgZAuIAAhbIAzAAIAAAKIgoAAIAAAhIAlAAIAAAJIglAAIAAAng");
	this.shape_73.setTransform(59.125,68.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_74.setTransform(49.5,68.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_75.setTransform(103.975,53.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_76.setTransform(97.275,53.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_77.setTransform(90.525,53.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgVAdQgHgGAAgNIAAgtIAKAAIAAAsQAAAJAFAFQADADAJAAQAJAAAGgFQAEgHAAgNIAAgkIALAAIAABFIgJAAIgBgJIgBAAQgDAFgGADQgFACgHAAQgNAAgFgGg");
	this.shape_78.setTransform(83.4,53.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AATAkIAAgsQAAgJgEgEQgEgFgIABQgKAAgFAFQgGAHAAANIAAAkIgKAAIAAhFIAIAAIACAKIABAAQADgFAGgDQAGgDAGAAQAMgBAHAHQAGAGAAANIAAAtg");
	this.shape_79.setTransform(75.525,53.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_80.setTransform(67.575,53.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIAaAAQASABAIAFQAIAGAAAMQAAAIgFAFQgEAFgJACIAAABQAVADAAASQAAAMgIAIQgJAGgPABgAgUAmIATAAQAKAAAGgFQAGgFAAgIQgBgKgFgEQgGgDgLAAIgSAAgAgUgFIASAAQAKAAAFgEQAFgDAAgJQAAgIgGgDQgFgEgLAAIgQAAg");
	this.shape_81.setTransform(59.75,52.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_82.setTransform(49.5,52.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_83.setTransform(154.325,36.575);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAIgJAPAAIAKABIAIADIgDAIIgIgCIgHgBQgUAAAAAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgKAAQgPAAgIgJg");
	this.shape_84.setTransform(147.75,36.575);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_85.setTransform(140.575,36.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgVAfQgGgGAAgJQAAgVAggBIAMAAIAAgEQAAgJgDgDQgEgFgHAAQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIgBAAQgFAGgFADQgFACgHAAQgKAAgGgFgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgFQAFgGAAgJIAAgHIgLAAQgLABgGAEg");
	this.shape_86.setTransform(132.75,36.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgTAjIAAhEIAJAAIABANIAAAAQAFgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHAAAKIAAAkg");
	this.shape_87.setTransform(127.15,36.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAEQAEAFAHAAQALgBAFgFQAEgGAAgOIAAgjIALAAIAABEIgIAAIgCgKIgBAAQgDAGgGACQgFAEgHAAQgMAAgGgHg");
	this.shape_88.setTransform(120.05,36.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_89.setTransform(113.025,36.575);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_90.setTransform(105.975,36.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgEAuIAAhbIAJAAIAABbg");
	this.shape_91.setTransform(100.175,35.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AATAxIAAgtQAAgHgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAkIgKAAIAAhhIAKAAIAAAdIAAAJIABAAQADgEAFgEQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAtg");
	this.shape_92.setTransform(91.075,35.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADAAIAAAHIgEACIgHABQgSgBAAgVg");
	this.shape_93.setTransform(84.75,35.85);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgEAxIAAhhIAJAAIAABhg");
	this.shape_94.setTransform(80.875,35.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgVAfQgGgGAAgJQAAgVAggBIANAAIAAgEQgBgJgDgDQgDgFgJAAQgHABgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIAAAAQgGAGgFADQgFACgHAAQgLAAgFgFgAgKAFQgGADAAAIQAAAFADADQAEADAGAAQAJAAAFgFQAGgGAAgJIAAgHIgKAAQgMABgFAEg");
	this.shape_95.setTransform(75.45,36.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAASgGQAAgKgEgFQgFgFgIAAQgHAAgFAFQgFAGgBAJIAjAAIAAAAg");
	this.shape_96.setTransform(68.475,36.575);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAYAuIAAgrIgvAAIAAArIgLAAIAAhbIALAAIAAAnIAvAAIAAgnIALAAIAABbg");
	this.shape_97.setTransform(60.05,35.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKALQgDgEAAgHQAAgHADgEQAEgEAGAAQAGAAAFAEQADAEAAAHQAAAHgDAEQgFAFgGAAQgGAAgEgFg");
	this.shape_98.setTransform(49.5,35.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(45.1,24.2,197.9,121.89999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPBUQgFgFAAgJQAAgLAFgFQAGgFAJAAQAKAAAGAFQAFAGAAAKQAAAJgFAFQgGAGgKAAQgJAAgGgGgAgOAcIgGh1IApAAIgGB1g");
	this.shape.setTransform(207.575,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BYQgPgJAAgSQAAgMAIgJQAIgHAOgEQgGgCgEgGQgEgGAAgFQAAgIAEgFQAFgFAJgFQgLgEgGgLQgHgJAAgOQABgWAOgMQAOgMAaAAIANABIAKABIAvAAIAAATIgVAGQAGAIAAAMQAAAWgPAMQgQAMgZAAIgHgBIgFAAQgGAEAAAEQAAAIAUAAIAWAAQAXAAALAKQAMAJAAATQAAAYgUAMQgUAOgkAAQgcAAgPgLgAgcAuQgHAEAAAIQAAAIAHAEQAIAEANABQATgBALgFQALgGAAgJQAAgHgHgEQgGgDgOAAIgSAAQgLAAgGAGgAgVgyQAAAKAEAHQAGAGAJAAQAKAAAFgGQAFgHgBgKQABgZgUAAQgTAAAAAZg");
	this.shape_1.setTransform(197,36.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZBFIAAhOQAAgPgFgHQgFgHgLAAQgPAAgHAKQgHAKAAAXIAABAIgkAAIAAiGIAcAAIAFARIACAAQAGgKALgFQAJgFAOAAQAYAAAMANQAMANAAAYIAABXg");
	this.shape_2.setTransform(182.125,33.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBeIAAiGIAjAAIAACGgAgThLQAAgSATAAQAUAAAAASQAAAJgFAEQgFAFgKAAQgTAAAAgSg");
	this.shape_3.setTransform(170.275,31.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBFIAAiGIAcAAIAFAXIACAAQAGgMAKgHQALgHAMAAIANABIgDAjIgLgBQgSAAgJAJQgJAJAAAPIAABFg");
	this.shape_4.setTransform(161.625,33.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBeIAAiGIAjAAIAACGgAgThLQAAgSATAAQAUAAAAASQAAAJgFAEQgFAFgKAAQgTAAAAgSg");
	this.shape_5.setTransform(151.625,31.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBYIAAhMIhFAAIAABMIglAAIAAivIAlAAIAABFIBFAAIAAhFIAlAAIAACvg");
	this.shape_6.setTransform(138.425,31.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBDIgKgvIgOg6IAAAAIgYBpIgoAAIgmiGIAkAAIAQA8QAEAPADAdIABAAIAEgdIACgJIARhCIAoAAIAPBCIACAGIACALIACAMIAAAJIABAAIAEgYIAEgUIAQg8IAkAAIgnCGg");
	this.shape_7.setTransform(112.075,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA+QgPgJgHgQQgJgQABgVQAAggARgTQARgSAeAAQAUAAAOAIQAPAJAJAQQAHAPABAVQgBAhgRATQgRASgfAAQgTAAgPgIgAgUgdQgHAKAAATQAAAUAHAKQAGALAOgBQAPABAHgLQAFgKAAgUQABgTgHgKQgGgKgPAAQgOAAgGAKg");
	this.shape_8.setTransform(93.85,33.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBYIhMiEIgBAAIACAxIAABTIghAAIAAivIAvAAIBMCDIABAAIgCgwIAAhTIAhAAIAACvg");
	this.shape_9.setTransform(76.225,31.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(63.6,11.5,150.4,38.8), null);


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
	this.instance.setTransform(14,540,1.6055,1.6055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(14,540,533,117.20000000000005), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgWB5QgHgHAAgOQAAgPAHgIQAIgGAOAAQAOgBAIAIQAIAHAAAPQAAAOgIAHQgIAIgOAAQgOAAgIgIgAgUAoIgJioIA7AAIgJCog");
	this.shape.setTransform(208.425,144.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBuQgTgagBgwQAAguAVgbQATgbAjAAQAjABAUAcIABAAQgDgWAAgQIAAg/IA0AAIAAENIgoAAIgKgZIgCAAQgTAcgkAAQgiAAgTgagAgagFQgKAOAAAcQAAAdAKAOQAKAPARAAQAVgBAJgMQAJgLABgcIAAgGQAAgfgJgNQgKgNgWAAQgQgBgKAQg");
	this.shape_1.setTransform(191.6,143.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BLQgagaAAgwQAAgvAYgbQAYgbAqAAQApAAAXAYQAXAYAAApIAAAZIh8AAQABAWANANQAMAMAWAAQARAAAQgDQAPgEARgIIAAApQgOAGgPAEQgQADgXAAQguAAgagZgAAogVQgBgTgKgLQgJgLgRAAQgQAAgKALQgJALgCATIBKAAIAAAAg");
	this.shape_2.setTransform(170.525,146.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGBuQgTgaAAgwQgBguAVgbQATgbAjAAQAkABASAcIACAAQgDgWAAgQIAAg/IA1AAIAAENIgpAAIgLgZIgBAAQgSAcgkAAQgiAAgUgagAgagFQgKAOAAAcQAAAdAKAOQAKAPARAAQAVgBAJgMQAJgLABgcIAAgGQAAgfgKgNQgJgNgWAAQgQgBgKAQg");
	this.shape_3.setTransform(148.25,143.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BLQgagaAAgwQAAgvAYgbQAYgbAqAAQApAAAXAYQAXAYAAApIAAAZIh8AAQABAWANANQAMAMAWAAQARAAAQgDQAPgEARgIIAAApQgOAGgPAEQgQADgXAAQguAAgagZgAAogVQgBgTgKgLQgJgLgRAAQgQAAgKALQgJALgCATIBKAAIAAAAg");
	this.shape_4.setTransform(127.175,146.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BLQgagaAAgwQAAgvAYgbQAYgbAqAAQApAAAXAYQAXAYAAApIAAAZIh8AAQABAWANANQAMAMAWAAQARAAAQgDQAPgEARgIIAAApQgOAGgPAEQgQADgXAAQguAAgagZgAAogVQgBgTgKgLQgJgLgRAAQgQAAgKALQgJALgCATIBKAAIAAAAg");
	this.shape_5.setTransform(106.225,146.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsB/Ihti/IgCAAIAEBIIAAB3IgwAAIAAj9IBDAAIBtC9IACAAIgDhFIAAh4IAwAAIAAD9g");
	this.shape_6.setTransform(81.325,143.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBhQgOgDgNgFIAAgrQAPAGASAFQATAFANAAQAcAAAAgRQAAgGgEgEQgDgEgKgEIgYgNQgWgIgLgIQgKgHgEgLQgGgKAAgQQABgZATgOQAUgPAkAAQAjABAhAPIgQAmIgbgKQgMgEgNAAQgXAAAAAMQAAAHAIAGQAHAFAYAKQAXAJALAIQAKAHAGAKQAEALAAAPQAAAdgUAQQgVAQgpAAQgUAAgQgEg");
	this.shape_7.setTransform(224.8,105.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BjIAAjBIApAAIAHAhIADAAQAIgRAPgKQAQgKARAAIASACIgEAyIgPgCQgZAAgOANQgOANAAAWIAABjg");
	this.shape_8.setTransform(208.85,105.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BLQgagaAAgvQAAgwAYgbQAYgbAqAAQApAAAXAYQAXAXAAApIAAAZIh8AAQABAXANAMQAMANAWAAQARAAAQgDQAPgEARgIIAAApQgOAHgPADQgQADgXABQguAAgagagAAogVQgBgUgKgKQgJgLgRAAQgQAAgKALQgJAKgCAUIBKAAIAAAAg");
	this.shape_9.setTransform(189.375,105.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBhIhKjBIA3AAIAlBtQAHAVABATIAAAAQABgRAIgXIAkhtIA4AAIhKDBg");
	this.shape_10.setTransform(168.8,105.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaCHIAAjBIA0AAIAADBgAgchsQAAgaAcAAQAdAAAAAaQAAAMgHAHQgIAHgOAAQgcAAAAgag");
	this.shape_11.setTransform(153.325,101.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhLB/QgWgOAAgZQAAgSALgLQALgNAVgEQgIgEgGgIQgGgIAAgIQAAgLAGgHQAHgHAMgHQgPgHgJgOQgJgPAAgUQAAggAUgRQAVgRAmgBIATACIAOADIBEAAIAAAaIgfAIQAJANAAAQQAAAfgWARQgWASgmAAIgJgBIgIgBQgIAHAAAHQAAALAdAAIAgAAQAgAAARANQAQAOAAAbQAAAigcATQgcASg0ABQgpAAgVgPgAgpBBQgKAHAAALQAAAMALAFQAKAHATAAQAbAAAQgIQARgIAAgNQAAgMgKgEQgKgDgTAAIgbAAQgOAAgKAGgAgghJQAAAPAIAKQAHAJAOAAQAOAAAHgJQAHgKAAgPQAAgkgcABQgdgBAAAkg");
	this.shape_12.setTransform(137.775,109.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+BLQgagaAAgvQAAgwAYgbQAYgbAqAAQApAAAXAYQAXAXAAApIAAAZIh8AAQABAXANAMQAMANAWAAQARAAAQgDQAPgEARgIIAAApQgOAHgPADQgQADgXABQguAAgagagAAogVQgBgUgKgKQgJgLgRAAQgQAAgKALQgJAKgCAUIBKAAIAAAAg");
	this.shape_13.setTransform(117.475,105.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag+BjIAAjBIApAAIAHAhIACAAQAKgRAOgKQAPgKATAAIARACIgEAyIgQgCQgZAAgNANQgOANAAAWIAABjg");
	this.shape_14.setTransform(99.9,105.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFBVQgQgQAAgeQAAgfAVgNQAWgPAqgCIAiAAIAAgJQAAgegeABQgWgBggAOIgRgjQAhgRAogBQAnAAAVARQAUASAAAiIAACAIgkAAIgLgbIgBAAQgNASgOAGQgOAGgWABQgcgBgQgPgAANAIQgWABgLAHQgLAIAAAQQAAAWAaAAQARAAALgLQALgKAAgSIAAgQg");
	this.shape_15.setTransform(79.625,105.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCBhQgegiAAg/QAAgmAPgeQAPgeAbgPQAbgQAjAAQAkAAAmASIgSArIgcgLQgOgGgOAAQgeAAgRAXQgQAXAAAoQAABVA/AAQAaAAAmgOIAAAtQgfANgnAAQg2AAgdghg");
	this.shape_16.setTransform(58.65,102.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhBB9QgTgOAAgYQAAgUAMgNQAMgMAUgFQgIgEgFgGQgFgHAAgJQAAgSAYgOQgRgHgJgOQgJgPAAgSQAAgdASgRQASgRAeAAQASAAAKAEIA8AAIAAAMIgnACQAQAUAAAXQAAAbgSARQgSARgeAAIgSgBQgKAFgFAIQgGAGAAAIQAAAJAHAEQAHAEAQAAIAgAAQAfAAAQANQAQAMAAAYQAAAegYAQQgYARgsAAQgjAAgUgOgAhCBVQAAAnA5AAQBKAAAAgvQAAgRgMgIQgMgIgaAAIgdAAQg0AAAAApgAgnhvQgNANAAAXQAAAVANANQAOAMAWAAQAWAAANgMQANgMAAgXQAAgYgNgMQgNgMgXAAQgWAAgNANg");
	this.shape_17.setTransform(245.975,73.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA5BgIAAh5QAAgcgMgNQgMgNgZgBQghAAgPASQgQARAAAmIAABnIgRAAIAAi7IAOAAIAEAaIABAAQASgeAuAAQBAAAAABFIAAB6g");
	this.shape_18.setTransform(226.325,69);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgICBIAAi8IAQAAIAAC8gAgKhvQAAgRAKAAQAFAAADAFQADAEAAAIQAAAIgDAEQgDAFgFAAQgKAAAAgRg");
	this.shape_19.setTransform(211.825,65.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHBeIhJi7IARAAIAxB/QAJAZAFASIABAAIAOgrIAxh/IASAAIhJC7g");
	this.shape_20.setTransform(199.75,69.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgICBIAAi8IAQAAIAAC8gAgKhvQAAgRAKAAQAFAAADAFQADAEAAAIQAAAIgDAEQgDAFgFAAQgKAAAAgRg");
	this.shape_21.setTransform(187.675,65.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhEB/IAAj9IARAAIAADsIB4AAIAAARg");
	this.shape_22.setTransform(176.025,65.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag6BwQgUgYAAguQAAgwAUgaQAVgaAlAAQAVAAAPAHQAPAIALASIABAAIgBgrIAAhDIARAAIAAEMIgKAAIgFgdIgCAAQgVAhgogBQgmABgVgZgAgtgUQgPAUAAApQgBBQA+AAQAgAAAPgTQAOgSAAgqIAAgEQAAgqgOgTQgOgUgiAAQgdAAgQAXg");
	this.shape_23.setTransform(145.25,65.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag1BIQgXgZAAgtQAAgtAWgbQAXgbAkAAQAhAAAUAXQATAYAAAoIAAAMIiHAAQAAAnATAVQARAUAgAAQAQAAANgCQAMgCASgIIAAAQQgQAHgNACQgOADgQAAQgoAAgXgagAA7gMQgBghgOgSQgOgSgZAAQgaAAgRASQgQARgDAiIB0AAIAAAAg");
	this.shape_24.setTransform(125.55,69.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMBpQgMgNAAgdIAAh4IgbAAIAAgKIAbgIIAJgrIAJAAIAAAuIA2AAIAAAPIg2AAIAAB2QgBAWAIAKQAHAKARAAQAQAAAMgCIAAAOQgNAEgQAAQgYAAgMgOg");
	this.shape_25.setTransform(109.65,67.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhCBWIAAgSQAdAOAfAAQAbAAAOgJQAPgKAAgPQAAgOgLgKQgMgKgbgJQgbgJgLgIQgLgHgHgJQgFgKgBgNQAAgVASgMQATgNAeAAQAfAAAbAMIgGAPQgcgLgYAAQgWAAgNAHQgOAIAAAOQAAAOAKAJQALAJAeALQAZAJALAHQAMAHAGAJQAGAKAAAMQAAAagTANQgTAOgjAAQgmAAgWgMg");
	this.shape_26.setTransform(95.65,69.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgICBIAAi8IAQAAIAAC8gAgKhvQAAgRAKAAQAFAAADAFQADAEAAAIQAAAIgDAEQgDAFgFAAQgKAAAAgRg");
	this.shape_27.setTransform(83.575,65.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhCBWIAAgSQAdAOAfAAQAbAAAPgJQAOgKAAgPQAAgOgLgKQgMgKgagJQgcgJgLgIQgLgHgHgJQgFgKAAgNQgBgVATgMQARgNAfAAQAeAAAcAMIgGAPQgcgLgYAAQgWAAgOAHQgNAIAAAOQAAAOALAJQAKAJAdALQAaAJALAHQAMAHAGAJQAGAKAAAMQAAAagTANQgUAOgiAAQgmAAgWgMg");
	this.shape_28.setTransform(71.2,69.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhCBWIAAgSQAcAOAgAAQAbAAAPgJQAOgKAAgPQAAgOgMgKQgLgKgagJQgcgJgLgIQgMgHgFgJQgHgKABgNQAAgVASgMQASgNAeAAQAeAAAcAMIgHAPQgbgLgYAAQgWAAgOAHQgNAIAAAOQAAAOALAJQAKAJAeALQAZAJAMAHQALAHAGAJQAGAKAAAMQAAAagUANQgSAOgjAAQgmAAgWgMg");
	this.shape_29.setTransform(54.75,69.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABXB/IgjhZIhnAAIgjBZIgUAAIBmj9IALAAIBkD9gAAtAWIgihaIgLgeIgIAeIgkBaIBZAAg");
	this.shape_30.setTransform(35.95,65.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag1BIQgXgZAAgtQAAgtAXgbQAWgbAkAAQAiAAASAXQAUAYAAAoIAAAMIiHAAQAAAnATAVQARAUAgAAQAQAAAMgCQAMgCAUgIIAAAQQgQAHgOACQgNADgRAAQgoAAgXgagAA7gMQAAghgOgSQgPgSgZAAQgaAAgQASQgRARgDAiIB0AAIAAAAg");
	this.shape_31.setTransform(202.1,32.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABtBgIAAh6QAAgcgLgNQgKgMgXAAQgdAAgNAPQgOARAAAiIAABtIgRAAIAAiAQAAgwgrABQgeAAgOARQgNARAAAmIAABnIgRAAIAAi8IAOAAIAEAaIABAAQAHgNAPgIQAOgIASAAQAsAAAMAiIAAAAQAKgRAPgIQAQgJATAAQAfAAAQARQAPAQAAAkIAAB6g");
	this.shape_32.setTransform(176.875,32.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgICBIAAi8IAQAAIAAC8gAgKhvQAAgRAKAAQAFAAADAFQADAEAAAIQAAAIgDAEQgDAFgFAAQgKAAAAgRg");
	this.shape_33.setTransform(157.175,29.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIB/IAAjsIhSAAIAAgRIC1AAIAAARIhSAAIAADsg");
	this.shape_34.setTransform(143.825,29.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgoAHIAAgNIBRAAIAAANg");
	this.shape_35.setTransform(128.85,32.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHCHIAAkNIAQAAIAAENg");
	this.shape_36.setTransform(119.2,28.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgHCHIAAkNIAQAAIAAENg");
	this.shape_37.setTransform(111.25,28.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhJAbIAAh6IARAAIAAB5QAAAcAMAOQAMAMAZAAQAgAAAQgQQAQgSAAgmIAAhnIARAAIAAC8IgPAAIgDgaIgBAAQgSAdguAAQhAAAAAhFg");
	this.shape_38.setTransform(96.775,32.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhEB/IAAj9ICJAAIAAARIh4AAIAABrIByAAIAAAQIhyAAIAABxg");
	this.shape_39.setTransform(79.075,29.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hdr, new cjs.Rectangle(21.9,0.8,236.70000000000002,169.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AASAyIgIgjIgKgrIAAAAIgSBOIgdAAIgchjIAbAAIALAsIAGAgIABAAQAAgHACgOIACgHIAMgwIAdAAIALAwIACAFIACAIIABAIIAAAHIABAAIACgSIADgOIANgsIAaAAIgcBjg");
	this.shape.setTransform(-2,357.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAtQgLgGgGgMQgGgMAAgPQAAgYANgNQAMgOAWAAQAPAAALAHQALAFAFANQAGALAAAPQAAAYgNAOQgMAOgXAAQgNAAgLgHgAgPgWQgEAIAAAOQAAAOAEAIQAFAHAKAAQALAAAFgHQAFgIAAgOQAAgOgFgIQgFgHgLAAQgKAAgFAHg");
	this.shape_1.setTransform(-15.425,357.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBBIg3hhIgBAAIACAkIAAA9IgYAAIAAiBIAiAAIA4BgIAAAAIgBgjIAAg9IAYAAIAACBg");
	this.shape_2.setTransform(-28.4,356.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBGIAAgWQAFACAGAAQAHAAAGgEQAFgFADgJIACgEIgohiIAeAAIATA4QACAHAAAJIAAAAQABgIADgIIATg4IAdAAIgqBuQgGARgKAHQgKAIgPAAIgOgCg");
	this.shape_3.setTransform(-45.625,359.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBFIAAiJIAbAAIAACJg");
	this.shape_4.setTransform(-53.575,355.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIAWAAIAEANIABAAQAKgOARAAQASAAAKANQAKAOgBAYQAAAQgEALQgFALgJAGQgIAHgLAAQgRAAgKgNIgBAAIABAOIAAAogAgOgsQgEAHAAAOIAAADQAAAQAEAGQAGAHAJAAQASAAAAgdQAAgPgFgHQgEgIgJAAQgKAAgFAGg");
	this.shape_5.setTransform(-61.8,359.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIAWAAIAEANIABAAQAJgOASAAQARAAAKANQALAOgBAYQABAQgFALQgFALgJAGQgIAHgMAAQgQAAgKgNIgBAAIABAOIAAAogAgOgsQgEAHAAAOIAAADQAAAQAEAGQAFAHAJAAQATAAAAgdQAAgPgEgHQgFgIgKAAQgJAAgFAGg");
	this.shape_6.setTransform(-73.3,359.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBBIgJgfIgvAAIgJAfIgeAAIAuiBIAhAAIAuCBgAARALIgPguIgCgJIgQA3IAhAAg");
	this.shape_7.setTransform(-85.625,356.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#495C6F").s().p("AqBDaIAAmzIUEAAIAAGzg");
	this.shape_8.setTransform(-42.95,356.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cta, new cjs.Rectangle(-107.2,335.2,128.5,43.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Bg_1, new cjs.Rectangle(0,0,300,600), null);


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
	this.ad_clickBtn.setTransform(150,300,1,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.ad_clickBtn, 0, 1, 2, false, new lib.ad_clickBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_clickBtn).wait(220));

	// T3
	this.instance = new lib.T3();
	this.instance.setTransform(55.45,152.4,1,1,0,0,0,60.4,27.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({_off:false},0).to({x:70.45,alpha:1},9,cjs.Ease.get(1)).wait(74));

	// T2
	this.instance_1 = new lib.T2();
	this.instance_1.setTransform(41.15,77.5,1,1,0,0,0,46.1,51.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(128).to({_off:false},0).to({x:56.15,alpha:1},9,cjs.Ease.get(1)).wait(83));

	// T1
	this.instance_2 = new lib.T1();
	this.instance_2.setTransform(52.85,17.2,1,1,0,0,0,57.8,14.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:67.85,alpha:1},9,cjs.Ease.get(1)).wait(92));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.setTransform(254.5,216.05,1,1,0,0,0,47.5,17.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({x:239.5,alpha:1},9,cjs.Ease.get(1)).wait(175));

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
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


// stage content:
(lib.WBAY_218223_MM_300x600 = function(mode,startPosition,loop,reversed) {
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