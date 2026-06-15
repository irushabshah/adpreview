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
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.IMG1 = function() {
	this.initialize(img.IMG1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.IMG2 = function() {
	this.initialize(img.IMG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.IMG3 = function() {
	this.initialize(img.IMG3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,171);


(lib.IMG4 = function() {
	this.initialize(img.IMG4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,218);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014360").s().p("AgkBBQgQgEgJgFIAAgvQALAHAQAEQAQAEAMAAIAGgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQgBgCgEgDIgTgHIgTgHQgKgDgGgGQgGgHABgKQAAgRAHgJQAJgJAPgEQAPgEARAAIAVABIAPACIAaAOIgNAmIgrgKQgIAAAAAEQAAAFAMADIAaAIQAMADAJAHQAIAHAAANQgBAVgQALQgRAKgeAAQgWAAgPgEg");
	this.shape.setTransform(40.7,-175.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#014360").s().p("AgjA/QgRgHgKgOQgLgQAAgaQAAgRAGgOQAHgNAKgIQALgIANgEQANgEAOAAQARAAAMACQAMADAHADIALAFIAOAsIgFARIhQAAQABAHAGAGQAGAFASAAQAQAAALgDIAQgGIAAArQgFADgLADIgVAEIgXABQgUAAgSgGgAgJgXQgEAFAAAGIAcgFIgDgJQgEgCgFAAQgIAAgEAFg");
	this.shape_1.setTransform(25.6,-175.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#014360").s().p("AAUBjIgZguIgLACIAAAsIg+AAIAAiZIgGgbIAGgRIA+AAIAAAsIgDBIIAFAAIAPgyIBEAAIAAAQIgfArIAVAbIAaAcIAAARg");
	this.shape_2.setTransform(8.875,-178.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#014360").s().p("Ag/A8QgMgJAAgWQAAgUAOgKQANgLAYAAQAMAAAIADIAKAEIACAAQAAgKgDgEQgDgEgLAAQgKAAgLACIgUAGIgQAGIAAgzIAOgCIAXgEQAOgBAPgBQAaAAAQAHQAPAGAGAMQAHALAAARIAAAkIAGAcIgGARIg7AAIAAgNIgDgCQgEAGgKAHQgLAEgQAAQgTABgLgJgAgJAPQgEACAAAGQAAAJAMAAQADAAADgCIADgBIAAgGQAAgFgCgDQgDgDgEAAQgEABgEACg");
	this.shape_3.setTransform(-8.975,-175.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014360").s().p("AAKBEIAAhGQAAgJgEgEQgEgEgIAAIgDADIAABUIg9AAIAAhUIgGgeIAJgRIA1AAIAAALIACACIAJgGQAEgFAIgCQAIgDAKAAQAXAAAKAOQALAOAAAaIAAAjIAGAcIgGARg");
	this.shape_4.setTransform(-25.75,-175.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#014360").s().p("AghBjQgPgCgMgEQgLgFgFgEIAAg6IAYAKQANAFANADQAOACAMAAQAQAAAAgHQAAgEgDgDQgEgDgIgDIgYgIQgSgGgNgGQgNgGgHgKQgHgKAAgQQAAgdAXgSQAXgSAsAAIATABIARACIAiAXIgOAqIhHgSQgLAAAAAIQAAAGAHAEIAZAKQAZAIAPAJQAPAIAGALQAGALAAAQQAAAcgVARQgWARgqAAQgPAAgPgDg");
	this.shape_5.setTransform(-43.975,-178.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#014360").s().p("AhbBYQgQgPAAgcQAAgPAFgKQAFgKAHgHQAHgFAIgEIANgFIgHgJQgEgFgCgIQgEgIAAgLQAAgSALgLQAKgKARgGQAIgDAKgBIAUAAIASABIALACIAWAXIgRAiIgcgGQgHABgCADQgDADAAAGQAAADACAFQADAEAEAGIAiAgIACgDIgGgcIADgQIBDAFIAAAqIgiAfIAVATIAVARIAAARIhCAAIgRgSIgQAJQgJAFgNADQgNADgUAAQgcAAgRgOgAgnAfQgDADAAAGQAAAEADADQACACAFAAQAIAAAEgCIAHgDIgUgUg");
	this.shape.setTransform(-12.575,-199.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#014360").s().p("AglBBQgPgEgJgFIAAgvQAMAHAPAEQAPAEANAAIAGgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgCgFgDIgSgHIgUgHQgKgDgGgGQgFgHgBgKQABgRAHgJQAJgJAPgEQAPgEARAAIAWABIAOACIAaAOIgMAmIgsgKQgIAAAAAEQAAAFAMADIAZAIQANADAJAHQAHAHABANQAAAVgRALQgRAKgeAAQgXAAgPgEg");
	this.shape_1.setTransform(20.15,-222.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#014360").s().p("AhFBmIAAiYIgGgfIAJgRIA1AAIAAAMIADACQAHgJAGgEQAIgEAMAAQAZAAAOAQQAOAQAAAjQAAAZgHAPQgHAQgMAHQgMAHgPAAQgSAAgMgGIAABIgAgHgxIAAAjQADAEAEAAQAGAAAEgFQAEgFAAgMQAAgKgEgFQgFgFgKAAg");
	this.shape_2.setTransform(4.725,-218.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#014360").s().p("Ag1A1QgUgQAAglQAAgkAUgQQAUgQAhAAQAkAAATAQQATAQAAAkQAAAlgTAQQgTAQgkAAQghAAgUgQgAgIgTQgDAEAAAPQAAAQADAEQAEAEAEAAQAGAAADgEQADgEAAgQQAAgPgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_3.setTransform(-11.925,-222.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014360").s().p("Ag1A1QgUgQAAglQAAgkAUgQQAUgQAhAAQAkAAATAQQATAQAAAkQAAAlgTAQQgTAQgkAAQghAAgUgQgAgIgTQgDAEAAAPQAAAQADAEQAEAEAEAAQAGAAADgEQADgEAAgQQAAgPgDgEQgDgEgGAAQgEAAgEAEg");
	this.shape_4.setTransform(-27.875,-222.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#014360").s().p("AgfA/QgRgHgJgPQgKgPAAgaQAAgTAGgNQAHgNALgIQALgIANgDQANgEAMAAIAaACIAPABIAWAZIgaAkIgfgQQgGAAgGAEQgDAFAAALQAAANAEAEQAGAEAKAAQARAAANgEIATgIIAAAxQgLAGgQACQgQADgRAAQgUAAgRgGg");
	this.shape_5.setTransform(-43.85,-222.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#014360").s().p("AghBjQgPgCgMgEQgLgFgFgEIAAg6IAYAKQANAFANADQAOACAMAAQAQAAAAgHQAAgEgDgDQgEgDgIgDIgYgIQgSgGgNgGQgNgGgHgKQgHgKAAgQQAAgdAXgSQAXgSAsAAIATABIARACIAiAXIgOAqIhHgSQgLAAAAAIQAAAGAHAEIAZAKQAZAIAPAJQAPAIAGALQAGALAAAQQAAAcgVARQgWARgqAAQgPAAgPgDg");
	this.shape_6.setTransform(-60.675,-225.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.IMG4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG4();
	this.instance.setTransform(-14.2,-89.75,0.49,0.49,44.9975);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-89.7,179.5,179.5);


(lib.IMG3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG3();
	this.instance.setTransform(-150,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-85.5,300,171);


(lib.IMG2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.IMG1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IMG1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgrA6IAAhyIBUAAIAAATIg8AAIAAAZIA3AAIAAATIg3AAIAAAeIA+AAIAAAVg");
	this.shape.setTransform(50.65,1.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA6IgCgGIgBgKIAAgLQAAgLgEgEQgEgDgLAAIgXAAIAAAtIgYAAIAAhyIA3AAQANAAAGACQAHADAEAFQAEAEACAGQACAFAAAHQAAAJgEAHQgEAIgKACQAIAEAEAFQADAHAAALIAAAIIABALQABAEADACIAAAEgAgXgGIAaAAQAIAAAEgCQAHgDAAgJQAAgLgHgEQgEgBgIgBIgaAAg");
	this.shape_1.setTransform(39.025,1.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAwQgRgRAAgfQAAgfARgPQANgOAYAAQAZAAANAOQARAPAAAfQAAAfgRARQgNANgZAAQgYAAgNgNgAgWgdQgIALAAASQAAATAIALQAJALANAAQAOAAAJgLQAIgLAAgTQAAgSgIgLQgJgLgOAAQgNAAgJALg");
	this.shape_2.setTransform(26.375,1.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhA6IAAhNIABgKIAAgJIgXBgIgWAAIgWhgIAAAJIAAAKIAABNIgVAAIAAhyIAjAAIATBZIAVhZIAiAAIAAByg");
	this.shape_3.setTransform(13,1.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXA6IgvhSIAABSIgWAAIAAhyIAZAAIAtBPIAAhPIAXAAIAAByg");
	this.shape_4.setTransform(-4.825,1.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA6IgCgGIgBgKIAAgLQAAgLgEgEQgEgDgLAAIgXAAIAAAtIgYAAIAAhyIA3AAQANAAAGACQAHADAEAFQAEAEACAGQACAFAAAHQAAAJgEAHQgEAIgKACQAIAEAEAFQADAHAAALIAAAIIABALQABAEADACIAAAEgAgXgGIAaAAQAIAAAEgCQAHgDAAgJQAAgLgHgEQgEgBgIgBIgaAAg");
	this.shape_5.setTransform(-16.675,1.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA6IgHgYIgqAAIgHAYIgZAAIAohyIAbAAIApBygAAOAOIgOgsIgOAsIAcAAg");
	this.shape_6.setTransform(-28.95,1.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA6IAAhyIBTAAIAAATIg8AAIAAAZIA3AAIAAATIg3AAIAAAeIA/AAIAAAVg");
	this.shape_7.setTransform(-40.3,1.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA6IAAhyIAZAAIAABdIA4AAIAAAVg");
	this.shape_8.setTransform(-50.925,1.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#206E38").s().p("AqaCgIAAk/IU1AAIAAE/g");
	this.shape_9.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-15.5,133.5,32);


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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


// stage content:
(lib.KSFY_217970_MM_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// CTA
	this.instance = new lib.cta_1();
	this.instance.setTransform(80,564.95);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F3825").s().p("AgMAnIAMgOIANAOIgNAMgAgCANIgKg0IAMgLIAKAMIgKAzg");
	this.shape_1.setTransform(116.525,518.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F3825").s().p("AAhAiIAAgoQAAgGgDgCQgDgDgFAAQgFAAgEADQgDADAAAFIAAAAIAAAoIgSAAIAAgoQAAgFgDgDQgCgDgFAAIgOACIAAAxIgUAAIAAgpIgDgQIAFgIIAPAAIAAAGIABABIAFgEIAGgDQAEgCAFAAQAOAAAGAKQACgEAFgDQAFgDAJAAQANAAAGAHQAHAHAAANIAAARIADAOIgDAJg");
	this.shape_2.setTransform(108.425,519.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3825").s().p("AgaAeQgHgFAAgLQAAgKAHgFQAHgFAMAAQAHgBAEACIAGACIABgBIAAgIQgBgCgDgCQgCgCgFAAQgJAAgIACIgLACIAAgPIANgDQAJgCAJABQAJgBAFADQAGACADAEQADAEABAFIABAJIAAASIADAOIgDAIIgSAAIAAgGIgCgBIgEADIgHAEQgDACgHAAQgKgBgGgEgAgJAHQgDACAAADQAAADADADQACABAFAAIAIgBIAFgDIAAgCQAAgDgDgCQgDgDgGAAQgGAAgCACg");
	this.shape_3.setTransform(98.725,519.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F3825").s().p("AgOAfQgHgDgEgIQgFgHAAgNQAAgLAFgIQAEgIAHgDQAHgEAIABQAJAAAGABIAIAFIAHAWIgDAIIgmAAQABAHAEAEQAFAFAIAAQAHAAAFgCIAHgDIAAAPIgLAEQgHACgIAAQgIAAgHgEgAgHgPQgDAEAAAFIAUgCIgCgKIgDgCIgDAAQgGAAgDAFg");
	this.shape_4.setTransform(91.875,519.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F3825").s().p("AgXAiIAAgrIgDgOIADgIIAOAAIACADIAHgEIAIgBIAGABIAEABIAJAJIgIANIgTgJIgDACIAAAyg");
	this.shape_5.setTransform(86,519.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F3825").s().p("AgNAfQgIgDgDgIQgFgIAAgMQABgMAEgIQAEgHAIgEQAHgCAJAAIAJAAIAFABIAMAMIgJAMIgPgKQgGAAgDAFQgEAFgBAIQAAAKAFAEQADAFAIAAIAJgBIAHgDIAEgCIAAAQIgKADQgHACgKABQgIAAgGgEg");
	this.shape_6.setTransform(79.55,519.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F3825").s().p("AgOAfQgHgDgEgIQgFgHAAgNQAAgLAFgIQAEgIAHgDQAHgEAIABQAJAAAGABIAIAFIAHAWIgDAIIgmAAQABAHAEAEQAFAFAIAAQAHAAAFgCIAHgDIAAAPIgLAEQgHACgIAAQgIAAgHgEgAgHgPQgDAEAAAFIAUgCIgCgKIgDgCIgDAAQgGAAgDAFg");
	this.shape_7.setTransform(70.075,519.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F3825").s().p("AgOAfQgHgDgEgIQgDgIAAgMQgBgMAFgIQAEgHAIgEQAIgCAHAAIAKAAIAGABIAKAMIgIAMIgOgKQgHAAgEAFQgDAFAAAIQAAAKAEAEQADAFAIAAIAJgBIAHgDIAEgCIAAAQIgKADQgHACgKABQgHAAgIgEg");
	this.shape_8.setTransform(63.4,519.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2F3825").s().p("AgJA0IAAgvIgCgKIACgIIATAAIAABBgAgOgkIAOgPIAPAPIgPAQg");
	this.shape_9.setTransform(58.65,518.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F3825").s().p("AgVA1IAAgxIgHgJIAHgHIgBgHIAAgGQAAgMAFgIQAFgHAMAAIAIABIAIABIANAIIgGAOIgTgJQgEAAgCAFQgCADAAAFIABAHIACAFIAVAAIAAAMIgVAAIAAAfIABANIgBAJg");
	this.shape_10.setTransform(51.725,517.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2F3825").s().p("AgYAaQgIgKAAgQQAAgPAIgJQAIgKARABQARgBAHAKQAIAJAAAPQAAAQgIAKQgHAIgRABQgRgBgIgIgAgIgPQgEAFAAAKQAAAMAEAEQADAEAGAAQAFAAAEgEQADgEAAgMQAAgKgDgFQgEgFgFAAQgGAAgDAFg");
	this.shape_11.setTransform(45.1,519.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F3825").s().p("AgeAzIAAhLIgDgQIAFgIIAPAAIAAAGIABAAIAKgGQADgCAGAAQANAAAHAIQAHAIAAARQAAANgEAHQgDAIgHADQgGAEgHAAIgLgBIgGgCIAAAkgAgKggIAAAhIAJACQAEAAAEgDQADgBABgFQACgEAAgGIgBgJQgCgEgCgDQgDgCgFAAg");
	this.shape_12.setTransform(145.325,505.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F3825").s().p("AgYAZQgIgIAAgRQAAgQAIgIQAIgJARAAQARAAAIAJQAHAIAAAQQAAARgHAIQgIAJgRAAQgRAAgIgJgAgIgPQgEAFAAAKQAAALAEAFQAEAEAFABQAFgBAEgEQADgFAAgLQAAgKgDgFQgEgEgFgBQgGABgDAEg");
	this.shape_13.setTransform(138,503.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2F3825").s().p("AgYAZQgIgIAAgRQAAgQAIgIQAIgJAQAAQASAAAIAJQAHAIAAAQQAAARgHAIQgIAJgSAAQgQAAgIgJgAgIgPQgEAFAAAKQAAALAEAFQAEAEAEABQAGgBAEgEQADgFAAgLQAAgKgDgFQgEgEgGgBQgEABgEAEg");
	this.shape_14.setTransform(130.9,503.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F3825").s().p("AgNAfQgHgDgFgHQgDgJAAgMQAAgMAEgIQAFgHAHgDQAIgDAIAAIAJAAIAFABIAMAMIgJALIgOgJQgHAAgDAFQgFAFAAAIQAAAKAFAEQADAFAIAAIAJgBIAHgDIAEgCIAAAQIgKADQgHACgKAAQgIABgGgEg");
	this.shape_15.setTransform(124,503.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2F3825").s().p("AgOAhIgKgDIAAgRIAMAEQAGADAGAAQAGgBAAgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgDIgIgCQgHgDgFgDQgFgEABgJQAAgKAGgGQAIgEALAAIAHAAIAGABIAMAHIgFANIgUgGIgEABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAADADABIAIAEQALACAFAFQAGAEgBAJQABAJgHAGQgHAFgNAAQgIAAgGgBg");
	this.shape_16.setTransform(117.9,503.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2F3825").s().p("AgaAeQgHgGAAgKQAAgLAHgEQAHgGAMABQAHAAAEABIAGACIABgBIAAgIQgBgCgDgCQgCgCgFAAQgJAAgIACIgLADIAAgQIANgDQAJgBAJAAQAJAAAFACQAGACADAEQADAEABAFIABAJIAAASIADAOIgDAIIgSAAIAAgHIgCgBIgEAEIgHAEQgDABgHAAQgKAAgGgEgAgJAHQgDACAAAEQAAACADACQACACAFAAIAIgBIAFgDIAAgCQAAgDgDgDQgDgCgGAAQgGAAgCACg");
	this.shape_17.setTransform(108.225,503.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F3825").s().p("AgkArIAFgRIAUAGQAEAAADgCQADgDABgDIADgIIgNAAIgPgvIgDgSIAWAAIAJAxIACAAIALgxIAVAAIgEAQIgDAQIgFARIgEAQQgEAMgFAHQgFAHgGAFQgGADgLAAg");
	this.shape_18.setTransform(97.75,505.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F3825").s().p("AgYAZQgIgIAAgRQAAgQAIgIQAIgJARAAQARAAAIAJQAHAIAAAQQAAARgHAIQgIAJgRAAQgRAAgIgJgAgIgPQgEAFAAAKQAAALAEAFQAEAEAFABQAFgBAEgEQADgFAAgLQAAgKgDgFQgEgEgFgBQgGABgDAEg");
	this.shape_19.setTransform(91.2,503.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2F3825").s().p("AgLBEIgGgBIgGgGIAGgNIANAFQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIABgEIgBgIIAAgxIgCgNIACgHIATAAIAABHQAAAKgCAGQgCAHgGACQgFADgJAAgAgFg0IAOgQIAPAQIgPAPg");
	this.shape_20.setTransform(85,503.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2F3825").s().p("AAMAiIAAgoQAAgFgCgDQgDgDgFAAIgNACIAAAxIgUAAIAAgpIgCgQIAEgIIAPAAIAAAGIABABIAFgEIAGgDQAEgCAEAAQANAAAGAHQAGAIAAAMIAAARIAEAOIgEAJg");
	this.shape_21.setTransform(79.4,503.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2F3825").s().p("AgOAfQgHgDgEgHQgFgIAAgNQAAgMAFgHQAEgIAHgDQAHgEAIABQAJAAAGACIAIADIAHAXIgDAIIgmAAQABAHAEAEQAFAFAIAAQAHAAAFgCIAHgDIAAAPIgLAEQgHABgIAAQgIABgHgEgAgHgPQgDAEAAAGIAUgDIgCgLIgDgBIgDAAQgGABgDAEg");
	this.shape_22.setTransform(72.325,503.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2F3825").s().p("AgqAsQgIgIAAgOQAAgHADgFQADgGAEgDIAJgFIAIgCIgEgHQgCgFgBgIQABgIAEgFQAEgGAIgDQAGgCAEAAIAHAAIAHABIAKAMIgIALIgNgFQgEAAgCACQgDACAAAEQAAAGADADIAFAGIAVAWIABgBIgDgUIACgIIAVACIAAAWIgLAPIAKAJIALAIIAAAJIgVAAIgNgOIgGAEIgHAFIgKAEQgGACgHAAQgOAAgJgHgAgWAGQgDACgCAEQgCADAAAFQAAAGAFAEQAEADAHAAQAHAAAFgCQAFgCADgDIgXgXIgGADg");
	this.shape_23.setTransform(60.6,501.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2F3825").s().p("AgPAhIgJgDIAAgRIALAEQAHADAGAAQAGgBAAgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgEgDIgIgCQgJgDgEgDQgEgEAAgJQgBgKAIgGQAGgEAMAAIAHAAIAFABIAOAHIgGANIgUgGIgFABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAADADABIAHAEQAMACAFAFQAFAEABAJQgBAJgGAGQgHAFgNAAQgIAAgHgBg");
	this.shape_24.setTransform(49,503.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2F3825").s().p("AgOAfQgHgDgEgHQgFgIAAgNQAAgMAFgHQAEgIAHgDQAHgEAIABQAJAAAGACIAIADIAHAXIgDAIIgmAAQABAHAEAEQAFAFAIAAQAHAAAFgCIAHgDIAAAPIgLAEQgHABgIAAQgIABgHgEgAgHgPQgDAEAAAGIAUgDIgCgLIgDgBIgDAAQgGABgDAEg");
	this.shape_25.setTransform(42.875,503.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2F3825").s().p("AAOAyIgPgaIgLABIAAAZIgTAAIAAhMIgDgOIADgIIATAAIAAAWIgBAkIAIAAIAKgaIAXAAIAAAJIgQAWIALAMIAMAOIAAAJg");
	this.shape_26.setTransform(36,501.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2F3825").s().p("AgaAeQgHgGAAgKQAAgLAHgEQAHgGAMABQAHAAAEABIAGACIABgBIAAgIQgBgCgDgCQgCgCgFAAQgJAAgIACIgLADIAAgQIANgDQAJgBAJAAQAJAAAFACQAGACADAEQADAEABAFIABAJIAAASIADAOIgDAIIgSAAIAAgHIgCgBIgEAEIgHAEQgDABgHAAQgKAAgGgEgAgJAHQgDACAAAEQAAACADACQACACAFAAIAIgBIAFgDIAAgCQAAgDgDgDQgDgCgGAAQgGAAgCACg");
	this.shape_27.setTransform(28.325,503.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2F3825").s().p("AAMAiIAAgoQAAgFgDgDQgCgDgFAAIgNACIAAAxIgTAAIAAgpIgEgQIAFgIIAPAAIAAAGIACABIAEgEIAHgDQACgCAFAAQANAAAGAHQAGAIABAMIAAARIACAOIgCAJg");
	this.shape_28.setTransform(20.95,503.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2F3825").s().p("AgOAhIgKgDIAAgRIAMAEQAGADAGAAQAGgBAAgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgDIgIgCQgHgDgFgDQgFgEAAgJQABgKAGgGQAIgEALAAIAHAAIAGABIAMAHIgFANIgUgGIgEABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAADADABIAIAEQALACAFAFQAGAEgBAJQAAAJgGAGQgHAFgNAAQgIAAgGgBg");
	this.shape_29.setTransform(14.2,503.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2F3825").s().p("AgJAnQgEgDAAgJIAAgkIgJAAIAAgJIAHgHIAKgSIAKAAIAAAUIASAAIAAAPIgSAAIAAAlIASAAIAAAKIgJAEIgKABQgJAAgEgFg");
	this.shape_30.setTransform(149.575,486.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2F3825").s().p("AgYAeQgEgDgCgGQgCgGAAgJIAAgnIATAAIAAAoQABAGACACQACADAFAAQAGAAADgFQAFgFAAgHIAAgiIATAAIAAArIADAOIgDAIIgSAAIAAgHIgBAAIgGAEIgHADQgEACgFAAQgIAAgFgEg");
	this.shape_31.setTransform(143.55,487.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2F3825").s().p("AgYAZQgIgJAAgQQAAgPAIgKQAIgIARgBQARABAIAIQAHAKAAAPQAAAQgHAJQgIAKgRgBQgRABgIgKgAgIgPQgEAEAAALQAAALAEAFQAEAFAFAAQAFAAADgFQAEgFAAgLQAAgLgEgEQgDgEgFAAQgFAAgEAEg");
	this.shape_32.setTransform(136.3,487.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2F3825").s().p("AgDAxIgHgEIAAAEIgUAAIAAhMIgDgOIADgIIAUAAIAAAWIgCAQIACABIAHgFQADgDAHAAQANAAAHAIQAHAIAAARQAAAMgEAIQgDAIgGAEQgGADgIAAIgKgBgAgKAAIAAAiIAJABQAFAAADgCQADgDABgFQACgEAAgFIgBgKQgBgEgDgCQgDgCgFAAg");
	this.shape_33.setTransform(129.125,485.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F3825").s().p("AgaAeQgHgFAAgKQAAgMAHgEQAHgGAMAAQAHAAAEACIAGACIABgBIAAgHQgBgEgDgCQgCgBgFAAQgJAAgIABIgLAEIAAgQIANgDQAJgCAJAAQAJAAAFADQAGACADAEQADAEABAFQABAFAAAEIAAARIADAPIgDAIIgSAAIAAgHIgCgBIgEAEIgHAEQgDACgHgBQgKAAgGgEgAgJAHQgDACAAAEQAAACADACQACACAFAAIAIgBIAFgCIAAgDQAAgDgDgDQgDgCgGAAQgGAAgCACg");
	this.shape_34.setTransform(121.625,487.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2F3825").s().p("AgHAxIAAhLIgDgOIADgJIASAAIAABig");
	this.shape_35.setTransform(113.175,485.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2F3825").s().p("AgHAxIAAhLIgDgOIADgJIASAAIAABig");
	this.shape_36.setTransform(109.925,485.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2F3825").s().p("AgaAeQgHgFAAgKQAAgMAHgEQAHgGAMAAQAHAAAEACIAGACIABgBIAAgHQgBgEgDgCQgCgBgFAAQgJAAgIABIgLAEIAAgQIANgDQAJgCAJAAQAJAAAFADQAGACADAEQADAEABAFIABAJIAAARIADAPIgDAIIgSAAIAAgHIgCgBIgEAEIgHAEQgDACgHgBQgKAAgGgEgAgJAHQgDACAAAEQAAACADACQACACAFAAIAIgBIAFgCIAAgDQAAgDgDgDQgDgCgGAAQgGAAgCACg");
	this.shape_37.setTransform(104.725,487.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2F3825").s().p("AAMAiIAAgoQAAgFgDgDQgCgDgFAAIgNACIAAAxIgTAAIAAgpIgEgQIAFgIIAPAAIAAAGIACABIAEgEIAHgDQACgCAFAAQANAAAGAHQAGAIABAMIAAARIACAOIgCAJg");
	this.shape_38.setTransform(94.3,487.075);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2F3825").s().p("AgXAiIAAgrIgDgOIADgIIANAAIADADIAHgEIAIgBIAGABIAEABIAJAJIgIANIgTgJIgDACIAAAyg");
	this.shape_39.setTransform(87.9,487.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F3825").s().p("AgaAeQgHgFAAgKQAAgMAHgEQAHgGAMAAQAHAAAEACIAGACIABgBIAAgHQgBgEgDgCQgCgBgFAAQgJAAgIABIgLAEIAAgQIANgDQAJgCAJAAQAJAAAFADQAGACADAEQADAEABAFIABAJIAAARIADAPIgDAIIgSAAIAAgHIgCgBIgEAEIgHAEQgDACgHgBQgKAAgGgEgAgJAHQgDACAAAEQAAACADACQACACAFAAIAIgBIAFgCIAAgDQAAgDgDgDQgDgCgGAAQgGAAgCACg");
	this.shape_40.setTransform(81.075,487.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2F3825").s().p("AgOAfQgHgDgEgHQgFgIAAgNQAAgMAFgHQAEgHAHgEQAHgEAIAAQAJABAGACIAIADIAHAXIgDAIIgmAAQABAHAEAFQAFAEAIAAQAHAAAFgCIAHgCIAAAOIgLAEQgHACgIgBQgIAAgHgDgAgHgPQgDAEAAAGIAUgDIgCgLIgDAAIgDAAQgGAAgDAEg");
	this.shape_41.setTransform(74.225,487.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2F3825").s().p("AgHAxIAAhLIgDgOIADgJIASAAIAABig");
	this.shape_42.setTransform(69.125,485.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2F3825").s().p("AgYAZQgIgJAAgQQAAgPAIgKQAIgIARgBQARABAIAIQAHAKAAAPQAAAQgHAJQgIAKgRgBQgRABgIgKgAgIgPQgEAEAAALQAAALAEAFQAEAFAFAAQAFAAAEgFQADgFAAgLQAAgLgDgEQgEgEgFAAQgGAAgDAEg");
	this.shape_43.setTransform(61.05,487.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2F3825").s().p("AgJAnQgEgDAAgJIAAgkIgJAAIAAgJIAHgHIAKgSIAKAAIAAAUIASAAIAAAPIgSAAIAAAlIASAAIAAAKIgJAEIgKABQgJAAgEgFg");
	this.shape_44.setTransform(55.075,486.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2F3825").s().p("AgOAhIgKgDIAAgRIAMAEQAGACAGAAQAGAAAAgEQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgDIgIgCQgHgDgFgDQgFgFABgIQAAgLAGgEQAIgFALgBIAHABIAGABIAMAHIgFAOIgUgHIgEABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAACADACIAIADQALAEAFADQAGAFgBAKQABAIgHAFQgHAHgNgBQgIABgGgCg");
	this.shape_45.setTransform(46.8,487.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2F3825").s().p("AgYAeQgEgDgCgGQgCgGAAgJIAAgnIAUAAIAAAoQAAAGACACQACADAFAAQAGAAAEgFQADgFAAgHIAAgiIAUAAIAAArIADAOIgDAIIgSAAIAAgHIgCAAIgEAEIgHADQgFACgFAAQgIAAgFgEg");
	this.shape_46.setTransform(40.2,487.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2F3825").s().p("AAMAiIAAgoQAAgFgCgDQgDgDgFAAIgNACIAAAxIgTAAIAAgpIgDgQIAEgIIAPAAIAAAGIACABIAEgEIAGgDQAEgCAEAAQANAAAGAHQAGAIABAMIAAARIACAOIgCAJg");
	this.shape_47.setTransform(29.7,487.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2F3825").s().p("AgJAzIAAguIgDgKIADgJIATAAIAABBgAgOgjIAOgPIAPAPIgPAOg");
	this.shape_48.setTransform(24.3,485.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2F3825").s().p("AgYAZQgIgJAAgQQAAgPAIgKQAIgIARgBQARABAIAIQAHAKAAAPQAAAQgHAJQgIAKgRgBQgRABgIgKgAgIgPQgEAEAAALQAAALAEAFQADAFAGAAQAFAAAEgFQADgFAAgLQAAgLgDgEQgEgEgFAAQgGAAgDAEg");
	this.shape_49.setTransform(19.1,487.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2F3825").s().p("AgKAyIgHgBIgPgKIAIgQIAUAJQAKAAAEgGQAEgGABgNIAAgiIgDgOIABgIIAUAAIAAA/QAAALgDAIQgFAIgIAFQgHAEgKAAg");
	this.shape_50.setTransform(11.6,485.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2F3825").s().p("AgRA3IARgSIASASIgSASgAgDATIgOhLIAQgQIAPAQIgOBLg");
	this.shape_51.setTransform(142,451.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2F3825").s().p("AAtBHIABgRIAAhHIgCAAIgHARIgXAzIgXAAIgghEIgCAAIAAAQIACBIIgeAAIAAhtIgEgUIAEgMIAfAAIApBTIAFAAIAkhTIAgAAIACAMIgCAUIAABtg");
	this.shape_52.setTransform(129.85,451.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F3825").s().p("AgfBBQgMgHgFgNQgFgNAAgUIAAgzIAAgUIAAgMIAdAAIAABVQAAAOAFAJQAGAJANAAQAOAAAGgIQAGgIAAgQIAAhVIAcAAIAABTQAAATgFANQgFAOgLAHQgMAHgVAAQgUAAgLgHg");
	this.shape_53.setTransform(114.675,451.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2F3825").s().p("AgMBHIAAhtIgCgUIACgMIAbAAIAACNg");
	this.shape_54.setTransform(105.6,451.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2F3825").s().p("AAUBHIgbgrIgRAAIAAALIACAUIgCAMIgcAAIAAhtIgEgUIAEgMIAwAAQAOAAAMAFQALAEAHALQAHALAAASQAAASgHAKQgGAKgMAGIAGAFIARAVIAMAKIAAAMgAgYADIAUAAQAMAAAFgGQAFgHAAgLQAAgLgFgGQgGgGgMAAIgVAAg");
	this.shape_55.setTransform(97.025,451.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2F3825").s().p("AApBHIgMgkIg5AAIgLAkIgdAAIAMgmIAAgTIANgGIAahOIAmAAIAgBZIAQAcIAAAYgAAUAKIgRg1IgDAAIgRA1IAlAAg");
	this.shape_56.setTransform(83.125,451.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2F3825").s().p("AgfBBQgMgHgFgNQgFgNAAgUIAAgzIAAgUIAAgMIAdAAIAABVQAAAOAFAJQAGAJANAAQAOAAAGgIQAGgIAAgQIAAhVIAcAAIAABTQAAATgFANQgFAOgLAHQgMAHgVAAQgUAAgLgHg");
	this.shape_57.setTransform(69.675,451.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2F3825").s().p("AAlBQIgPgHIgPgGIgJgFQgHgDgHgBQgHgCgMAAIgQAAIgEgZQgFgHgEgLQgDgLAAgPQAAgXAFgOQAFgOAJgIQAIgIALgDQALgDALAAQALAAALADQAKADAJAIQAIAIAFAOQAFAPAAAWQAAAQgEALQgEALgHAHQgDAEgGAEQgGAEgEABIAAABIAcAIIAWALIgOAWgAgdguQgIAMAAAVQAAAJACAJQACAJAEAHQADAHADACIAQAAQAJAAAHgFQAHgGADgLQADgJAAgMQAAgWgIgLQgHgMgOAAQgPAAgHAMg");
	this.shape_58.setTransform(57.175,452.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2F3825").s().p("AApBHIgMgkIg5AAIgLAkIgdAAIAMgmIAAgTIANgGIAahOIAmAAIAgBZIAQAcIAAAYgAAUAKIgRg1IgDAAIgRA1IAlAAg");
	this.shape_59.setTransform(42.575,451.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2F3825").s().p("Ag8A/QgMgLAAgUQAAgKAFgIQAEgIAHgFQAGgEAGgCIALgEQgDgEgDgGQgEgHAAgLQAAgLAGgJQAGgIAMgEQAIgDAGAAIALABIAJABIAQAQIgNARIgTgIQgFAAgEADQgEAEABAFQgBAIAEAFIAHAJIAgAfIACgCIgGgcIACgMIAgAEIAAAfIgQAVIAPANIAPAMIAAAMIgeAAIgTgTIgIAFIgLAHQgFAEgJADQgJACgLAAQgTAAgMgKgAggAJQgEADgDAFQgDAEAAAHQAAAKAGAEQAHAFAKAAQAKAAAHgDQAHgCAEgEIggghIgJAEg");
	this.shape_60.setTransform(22.85,451.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F3825").s().p("AgzBHIgEgMIAEgUIAAhtIBaAAIAKAGIgLAWIgUgCIgpAAIAAAfIA1AAIAAAYIgUAAIghgCIAAAkIA/AAIAQANIgMANg");
	this.shape_61.setTransform(106.475,429.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2F3825").s().p("AgcBFQgLgEgFgFIAAgcIASAJQAMAEAOAAQAJAAAEgDQAEgEAAgGQAAgGgDgDQgDgEgIgDIgRgHQgQgGgJgIQgJgJAAgQQAAgLAFgJQAFgKAKgGQALgGARAAIALABIALABIAWARIgJAUIgkgNQgIAAgEADQgFAEAAAGQAAAIAHAFQAHAEALAEQAXAHAKAKQAJALAAAOQAAAMgFAJQgFAKgLAGQgLAGgTAAQgPAAgLgEg");
	this.shape_62.setTransform(94.2,429.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2F3825").s().p("AgfBBQgMgHgFgNQgFgNAAgUIAAgzIAAgUIAAgMIAdAAIAABVQAAAOAFAJQAGAJANAAQAOAAAGgIQAGgIAAgQIAAhVIAcAAIAABTQAAATgFANQgFAOgLAHQgMAHgVAAQgUAAgLgHg");
	this.shape_63.setTransform(82.225,429.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2F3825").s().p("AgVBGQgLgDgIgIQgJgIgFgPQgFgOAAgWQAAgVAFgOQAFgPAJgIQAIgIALgDQALgDAKAAQAMAAAKADQALAEAIAIQAJAIAFAOQAFAOAAAVQAAAWgFAOQgFAOgJAIQgIAIgLAEQgKADgMAAQgKAAgLgDgAgSgmQgHAFgCAKQgCAKAAANQAAAOACAKQACAKAHAFQAGAGAMAAQAMAAAHgGQAGgFADgKQACgKAAgOQAAgNgCgKQgDgKgGgGQgHgFgMAAQgMAAgGAGg");
	this.shape_64.setTransform(69.025,429.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2F3825").s().p("AAdBHIAAg5Ig5AAIAAAQIACApIgeAAIAAhtIgCgUIACgMIAcAAIAAA7IA5AAIAAg7IAcAAIAABKIACAOIAAA1g");
	this.shape_65.setTransform(55.1,429.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2F3825").s().p("AgOBHIAAg8IgthFIAAgMIAiAAIAYAzIADAAIAYgzIAhAAIAAAMIgvBGIACAUIAAAng");
	this.shape_66.setTransform(146,407.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2F3825").s().p("AgwBHIgEgMIAEgUIAAhtIAcAAIAABRIgCAiIAEAAIArgCIAOgCIAOARIgKANg");
	this.shape_67.setTransform(134.825,407.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2F3825").s().p("AgwBHIAAhsIgDgVIADgMIBaAAIAKAGIgJAWIgSgCIgvAAIACAfIA1AAIAAAYIgQAAIglgCIAAAeIADAUIgDAMg");
	this.shape_68.setTransform(122.95,407.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2F3825").s().p("AAUBHIgbgrIgRAAIAAALIACAUIgCAMIgcAAIAAhtIgEgUIAEgMIAwAAQAOAAAMAFQALAEAHALQAHALAAASQAAASgHAKQgGAKgMAGIAGAFIARAVIAMAKIAAAMgAgYADIAUAAQAMAAAFgGQAFgHAAgLQAAgLgFgGQgGgGgMAAIgVAAg");
	this.shape_69.setTransform(110.625,407.775);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2F3825").s().p("AgzBHIgEgMIAEgUIAAhtIBaAAIAKAGIgLAWIgUgCIgpAAIAAAfIA1AAIAAAYIgUAAIghgCIAAAkIA/AAIAQANIgMANg");
	this.shape_70.setTransform(98.225,407.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2F3825").s().p("AgOBHIAAhzIgrACIAAgcIB0AAIAAAcIgtgCIAABTIACAUIgCAMg");
	this.shape_71.setTransform(85.1,407.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2F3825").s().p("AgOBHIAAhzIgsACIAAgcIB0AAIAAAcIgtgCIAABTIADAUIgDAMg");
	this.shape_72.setTransform(72.4,407.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2F3825").s().p("AgfBBQgMgHgFgNQgFgNAAgUIAAgzIAAgUIAAgMIAdAAIAABVQAAAOAFAJQAGAJANAAQAOAAAGgIQAGgIAAgQIAAhVIAcAAIAABTQAAATgFANQgFAOgLAHQgMAHgVAAQgUAAgLgHg");
	this.shape_73.setTransform(59.675,407.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2F3825").s().p("Ag3BHIAAhtIgEgUIAEgMIA0AAQAOAAALAEQAMADAFAIQAHAIAAANQAAAIgDAHQgDAHgGAFQANAEAGAIQAHAJAAAOQAAAXgMAKQgNAKgZAAgAgbAtIAjAAQALAAAEgFQAGgFAAgIQgBgJgFgEQgFgEgMAAIghAAgAgbgNIAbAAQARAAAAgPQAAgHgEgEQgEgFgJAAIgbAAg");
	this.shape_74.setTransform(46.55,407.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2F3825").s().p("AgOBHIAAhzIgsACIAAgcIB0AAIAAAcIgtgCIAABTIADAUIgDAMg");
	this.shape_75.setTransform(28.2,407.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2F3825").s().p("AApBHIgMgkIg5AAIgLAkIgdAAIAMgmIAAgTIANgGIAahOIAmAAIAgBZIAQAcIAAAYgAAUAKIgRg1IgDAAIgRA1IAlAAg");
	this.shape_76.setTransform(14.825,407.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2F3825").s().p("AAtBHIABgRIAAhHIgCAAIgHARIgXAzIgXAAIgghEIgCAAIAAAQIACBIIgeAAIAAhtIgEgUIAEgMIAfAAIApBTIAFAAIAkhTIAgAAIACAMIgCAUIAABtg");
	this.shape_77.setTransform(126.6,385.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2F3825").s().p("AgvBHIAAhtIgEgUIAEgMIAvAAQAOAAANAFQALAEAHALQAHALAAASQAAATgHAKQgIALgNAFQgNAEgQAAIgOAAIAAALIACAUIgCAMgAgTADIATAAQANAAAFgGQAEgHAAgLQAAgLgEgGQgGgGgMAAIgVAAg");
	this.shape_78.setTransform(112.25,385.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2F3825").s().p("AgyBIIAAgXIARgKIAOgLIAOgNQAMgLAGgJQAHgJAAgMQAAgIgFgFQgFgEgKAAIgRACIgQAEIgNAFIAAgbIAIgEIAQgFQALgDAMABQAZgBANAMQAMALAAATQAAAMgFAMQgFAJgJAIQgIAJgKAIIgRAMIABAFIA1gFIAAAfg");
	this.shape_79.setTransform(100,385.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2F3825").s().p("AgfAKIAAgTIA/AAIAAATg");
	this.shape_80.setTransform(85.2,388);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2F3825").s().p("AAtBHIABgRIAAhHIgCAAIgHARIgXAzIgXAAIgghEIgCAAIAAAQIACBIIgeAAIAAhtIgEgUIAEgMIAeAAIAqBTIAFAAIAkhTIAgAAIACAMIgCAUIAABtg");
	this.shape_81.setTransform(67.45,385.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2F3825").s().p("AApBHIgMgkIg5AAIgLAkIgdAAIAMgmIAAgTIANgGIAahOIAmAAIAgBZIAQAcIAAAYgAAUAKIgRg1IgDAAIgRA1IAlAAg");
	this.shape_82.setTransform(51.625,385.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2F3825").s().p("AgcBCQgNgHgGgQQgIgQABgbQgBgZAIgQQAGgQANgHQAMgIAQAAQASAAALAIQANAHAHAQQAGAQAAAZQAAAbgGAQQgHAQgNAHQgLAHgSAAQgQAAgMgHgAgSggQgHAKAAAWQAAAYAHAKQAFAKANAAQAOAAAGgKQAGgKAAgYQAAgWgGgKQgGgLgOAAQgNAAgFALg");
	this.shape_83.setTransform(38.2,385.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2F3825").s().p("AgCBHIAAhrIgYAAIAAgWIA0gMIABAMIgBAUIAABtg");
	this.shape_84.setTransform(27.95,385.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2F3825").s().p("AgOBHIgMgBIgYgJIAHgcIAkALQANAAAHgFQAIgFAAgKQgBgJgEgFQgFgFgOAAIgqAAIAAhMIBYAAIAAAcIgwgCIgJAAIAAAbIANAAQAbAAANALQAMAJABAVQgBAOgGALQgGALgMAHQgMAGgQAAg");
	this.shape_85.setTransform(115,178.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2F3825").s().p("AgDBHIAAhrIgXAAIAAgWIA0gMIACAMIgCAUIAABtg");
	this.shape_86.setTransform(105.15,178.275);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2F3825").s().p("AgOBHIAAg8IgthFIAAgMIAiAAIAYAzIADAAIAYgzIAhAAIAAAMIgvBGIACAUIAAAng");
	this.shape_87.setTransform(90.75,178.275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2F3825").s().p("AgwBHIgEgMIAEgUIAAhtIAcAAIAABRIgCAiIAEAAIArgCIAOgCIAOARIgKANg");
	this.shape_88.setTransform(79.075,178.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2F3825").s().p("AgfBBQgMgHgFgNQgFgNAAgUIAAgzIAAgUIAAgMIAdAAIAABVQAAAOAFAJQAGAJANAAQAOAAAGgIQAGgIAAgQIAAhVIAcAAIAABTQAAATgFANQgFAOgLAHQgMAHgVAAQgUAAgLgHg");
	this.shape_89.setTransform(66.225,178.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2F3825").s().p("AgNBHIgMgBIgWgOIAMgXIAdANQAOAAAGgIQAGgJABgTIAAgxIgFgUIADgMIAdAAIAABbQAAAPgGAMQgGAMgLAGQgLAHgPAAg");
	this.shape_90.setTransform(54,178.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2F3825").s().p("AgKBTIAAilIAVAAIAAClg");
	this.shape_91.setTransform(41.5,179.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2F3825").s().p("AgOBHIAAg8IgthFIAAgMIAiAAIAYAzIADAAIAYgzIAiAAIAAAMIgwBGIACAUIAAAng");
	this.shape_92.setTransform(136.85,158.425);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2F3825").s().p("AApBHIgMgkIg5AAIgLAkIgdAAIAMgmIAAgTIANgGIAahOIAmAAIAgBZIAQAcIAAAYgAAUAKIgRg1IgDAAIgRA1IAlAAg");
	this.shape_93.setTransform(123.575,158.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2F3825").s().p("Ag4BHIAAhtIgEgUIAEgMIArAAQAOAAANADQAOADAKAHQAKAHAHAOQAGAOAAAWQAAAVgGAOQgHAOgKAIQgLAIgNADQgOADgNAAgAgbAtIAVAAQATAAAJgNQAJgMAAgUQAAgVgJgMQgJgLgTAAIgVAAg");
	this.shape_94.setTransform(109.55,158.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2F3825").s().p("AgcBFQgLgEgFgFIAAgcIATAJQALAEAOAAQAJAAAEgDQAFgEgBgGQAAgGgDgDQgEgEgHgDIgRgHQgQgGgJgIQgJgJAAgQQAAgLAFgJQAFgKAKgGQALgGAQAAIAMABIALABIAWARIgKAUIgjgNQgHAAgFADQgFAEAAAGQAAAIAHAFQAGAEAMAEQAXAHAKAKQAJALAAAOQAAAMgFAJQgFAKgLAGQgMAGgSAAQgPAAgLgEg");
	this.shape_95.setTransform(96.75,158.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2F3825").s().p("AgzBHIgEgMIAEgUIAAhtIBaAAIAKAGIgLAWIgUgCIgpAAIAAAfIA1AAIAAAYIgUAAIghgCIAAAkIA/AAIAQANIgMANg");
	this.shape_96.setTransform(85.625,158.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2F3825").s().p("AAiBHIg6hWIgCAAIAAAMIACBKIgeAAIAAhtIgEgUIAEgMIAYAAIAwBGIAJAQIACAAIAAhWIAeAAIAAAMIgCAUIAABtg");
	this.shape_97.setTransform(71.775,158.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2F3825").s().p("Ag4BHIAAhtIgEgUIAEgMIAsAAQANAAAOADQANADAKAHQALAHAFAOQAHAOAAAWQAAAVgHAOQgFAOgLAIQgLAIgNADQgNADgNAAgAgbAtIAUAAQAUAAAJgNQAJgMAAgUQAAgVgJgMQgJgLgUAAIgUAAg");
	this.shape_98.setTransform(57.75,158.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2F3825").s().p("AgzBHIgEgMIAEgUIAAhtIBaAAIAKAGIgLAWIgUgCIgpAAIAAAfIA1AAIAAAYIgUAAIghgCIAAAkIA/AAIAQANIgMANg");
	this.shape_99.setTransform(44.925,158.425);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2F3825").s().p("AAWBHIgUhuIgEAAIgEAdIgPBRIgoAAIgkhtIgGgUIAAgMIAeAAIAdBqIAEAAIAVhqIAnAAIARBRIAEAZIAEAAIAdhqIAeAAIAAAMIgGAUIgkBtg");
	this.shape_100.setTransform(27.525,158.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(270));

	// IMG2_png
	this.instance_1 = new lib.IMG2_1("synched",0);
	this.instance_1.setTransform(-30,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({x:80},25,cjs.Ease.get(1)).wait(200));

	// IMG1_png
	this.instance_2 = new lib.IMG1_1("synched",0);
	this.instance_2.setTransform(115,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({x:80},25,cjs.Ease.get(1)).wait(200));

	// Layer_5
	this.instance_3 = new lib.IMG4_1("synched",0);
	this.instance_3.setTransform(279.05,37.8,1,1,-18.4651,0,0,67.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({rotation:0,x:171.45,y:64.25},15,cjs.Ease.get(1)).to({regY:0.1,rotation:-29.9992,x:178.5,y:64.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// T2_png
	this.instance_4 = new lib.t2("synched",0);
	this.instance_4.setTransform(255.65,110.9,1,1,-18.4651,0,0,44,-173.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({regX:44.1,rotation:5.2117,x:124.1,y:126.2},15,cjs.Ease.get(1)).to({regX:44,rotation:0,x:124},7,cjs.Ease.get(1)).wait(225));

	// T1_png
	this.instance_5 = new lib.t1("synched",0);
	this.instance_5.setTransform(-10.5,58.45,1,1,66.5613,0,0,-70.5,-226.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({rotation:-3.9539,x:9.5,y:73.5},14,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(1)).wait(247));

	// IMG3_png
	this.instance_6 = new lib.IMG3_1("synched",0);
	this.instance_6.setTransform(-13.05,55.55,0.4899,0.4899,74.5029,0,0,-149.7,-24.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({regX:-149.8,regY:-24.9,rotation:8.0133,x:-8.1,y:65.5},13,cjs.Ease.get(1)).to({rotation:64.1987,x:-13.05,y:65.55},9,cjs.Ease.get(1)).to({_off:true},1).wait(246));

	// BG_png
	this.instance_7 = new lib.bg("synched",0);
	this.instance_7.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-30,274.5,334.8,326.5);
// library properties:
lib.properties = {
	id: 'A405DCED1AE5462F82C3497A509EE2F2',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"IMG1.png", id:"IMG1"},
		{src:"IMG2.png", id:"IMG2"},
		{src:"IMG3.png", id:"IMG3"},
		{src:"IMG4.png", id:"IMG4"}
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
an.compositions['A405DCED1AE5462F82C3497A509EE2F2'] = {
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