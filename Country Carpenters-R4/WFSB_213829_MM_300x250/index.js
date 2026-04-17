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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.IM1 = function() {
	this.initialize(img.IM1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,151);


(lib.IM2 = function() {
	this.initialize(img.IM2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,151);


(lib.IM3 = function() {
	this.initialize(img.IM3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,151);


(lib.IM4 = function() {
	this.initialize(img.IM4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,151);


(lib.PBB_logo1 = function() {
	this.initialize(img.PBB_logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,194);


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

	// T3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B3927").s().p("AgQBdQgLgLAAgHQAAgHALgKQAKgLAGAAQAHAAALALQAKAKAAAHQAAAHgKALQgLAKgHAAQgGAAgKgKgAgLAbQgCgFgBgNQgCgTgFgcQgEgWAAgOQAAgcAZAAQAbAAAAAcQAAANgFAXQgFAbgCAUQgBANgCAFQgDAHgJAAQgIAAgDgHg");
	this.shape.setTransform(-186.325,21.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B3927").s().p("AASBoQgLABAAgIQAAgEAHgEQAIgEACgIQADgIAAgVIAAgjQAAgZgXAAQgJAAgIAHQgNAMAAApQAAAVADAIQACAIAJAEQAHAEAAAEQAAAIgLgBIg8AAQgLABAAgIQAAgEAHgEQAIgEACgIQADgIAAgVIAAhgQAAgNgCgFQgCgGgIgEIgGgBQgDgCAAgEQAAgFAKgDQAWgFAQgGIAHgBQAHAAAAAJIAABJQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgCQARgXAcAAQAaAAANAVQAIAMAAAYIAAAjQAAATADAKQACAHAIAFQAHAEAAAEQAAAIgLgBg");
	this.shape_1.setTransform(-198.225,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B3927").s().p("AgcBGQgHgMAAgYQAAgSADgsQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgRAAQgEgBAAgEIAAgMQAAgEAEAAQATgEAIgKQAEgGADgPQABgEAEgBIARAAQAEABAAAEIAAAaQAAAGABABQABACAFAAIANgBIAQgCQAKAAAAAGIgCAJQgBAFgDADQgCACgHAAIgOgBIgPAAQAAAAgBAAQgBAAAAAAQAAABgBAAQAAABAAAAIAAAYQAAAnAEAOQAFAPAOAAQAGAAAHgEQAGgFADAAQAFAAAAAGQAAAFgDAEQgPAWgcAAQgcgBgLgVg");
	this.shape_2.setTransform(-213.425,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B3927").s().p("AAFBmQgHAAABgHIAAiLQAAgPgCgEQgCgEgKAAIgUABQgIAAAAgNQAAgHAHgBIAYgEQAPgCAJgDIAWgFQAKAAAAAKIAAC6QgBAHgHAAg");
	this.shape_3.setTransform(-230.35,21.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B3927").s().p("AAFBmQgHAAABgHIAAiLQAAgPgCgEQgCgEgKAAIgUABQgIAAAAgNQAAgHAHgBIAYgEQAPgCAJgDIAWgFQAKAAAAAKIAAC6QgBAHgHAAg");
	this.shape_4.setTransform(-243.85,21.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B3927").s().p("AhFBdQgIgIAAgNQAAgUAOAAQAEAAAJAJQAIAJAJgBQALAAAHgLIACgEIgBgDIgvhtQgHgQgFgFIgJgGQgFgDAAgEQAAgHALAAIA8AAQAKAAAAAHQAAAEgHADQgIAEAAAGQAAAEAEAHIAaA+IABACIACgCIARgoQAHgQAAgKQAAgKgIgFQgHgFAAgEQAAgHALAAIAtAAQALAAAAAHQAAAEgFADIgHAFQgFAEgFAHQgGAIgJAWIggBPQgYA8gqAAQgNAAgJgHg");
	this.shape_5.setTransform(-261.675,26.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B3927").s().p("AARA3IgBgBIgBABQgQAVgdAAQgSAAgNgJQgOgKABgSQgBgWAVgMQANgHAhgLQAUgKAAgOQAAgQgRAAQgJAAgIAFQgHAEgJANQgGAJgHAAQgGAAgEgEQgCgEAAgJQAAgPAGgGQAGgIASgEQAOgDAPAAQAXAAARALQAVANAAAXIgCA1QAAAPADAFQABAGAKAAQAGABABAFQgBAGgGAFQgKAIgPAAQgWAAgFgVgAAJAAQgSAIgJAHQgMAIABALQgBAHAFAFQAFAEAIAAQAOAAAGgOQAEgHAAgZIAAgDIgBgBg");
	this.shape_6.setTransform(-277.95,23.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B3927").s().p("AAuBkQgLAAABgHQgBgFAIgDQAHgFADgHQACgJAAgVIAAhnIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABIgyB4QgCAHgFgBIgNAAQgEABgDgHIgyh5IgCgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAABkABALQABAXAOAIIAJADQAFADAAAEQAAAIgMAAIgyAAQgMAAAAgHQAAgEAEgDQAGgEACgDQAHgJABgjIABhnQAAgGgBgDQgCgCgEgDIgIgDQgEgDAAgEQAAgHAMAAIA3AAQAJAAADAGIAoBeIAAABIACgBIAmheQADgGAHAAIA8AAQAKAAAAAGQAAAEgDADIgHADQgIAEAAARIAABpQAAAVADAJQADAHAHAFQAHADAAAFQAAAHgLAAg");
	this.shape_7.setTransform(-297.5,21.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B3927").s().p("AAIAxQgFAAAAgEQAAgCADgCQAEgCACgEIABgNIAAgQQAAgLgLAAQgEAAgDADQgHAFAAATQABAKABADQABAEAEACQADACAAACQAAAEgFAAIgcAAQgFAAAAgEQAAgCADgCQAEgCABgEQABgDABgKIAAgrIgBgJQgBgDgEgCIgDgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgCAFgBIASgGIAEAAQACAAAAAEIAAAiIABABIABgBQAHgLANAAQAMAAAGAJQAEAHAAAKIAAAQQAAAJABAEQACAEADACQADACAAACQABAEgGAAg");
	this.shape_8.setTransform(-187.3,-3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B3927").s().p("AgWAtQgMgFAAgJQAAgIAJgDIAAAAIAAgBQgCgDAAgEQAAgIAKgEIAAAAIAAAAQgOgHAAgOQAAgKAJgIQAJgHAMAAQAHAAAHADIAGADQACAAADgDQACgDACAAQAHAAAAAGQAAAIgIAAIgCAAQACAFAAAFQAAALgJAHQgIAGgLAAIgCAAQgIAAAAAEQAAAEAKAAIAMAAQALAAAFAEQAGAEABAHQAAAKgJAGQgJAGgSAAQgMAAgIgCgAgTAcQAAAFAHADQAFACAHAAQAIAAAFgCQAEgCABgEQAAgEgKAAIgIAAQgMAAgGgCIgBAEgAgKgYQAAAGACAFQACAHAGAAQADAAACgEQACgEAAgFQAAgHgCgEQgCgHgFAAQgJAAABANg");
	this.shape_9.setTransform(-195.35,-1.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B3927").s().p("AANAfIAAgHIgBAAIgBAAQgHALgNAAQgMAAgGgJQgEgGABgLIAAgSIgBgIQgCgCgEgCQgDgCAAgCQAAgCADgCIASgEIAEgCQADAAABAFIAAAmQgBAGADADQADAEAFAAQAEAAAEgEQAFgFABgSQAAgJgCgCQAAgCgEgCQgEgCAAgCQAAgCAEgCIASgEIADgCQAEAAAAAFIAAAnIABAJQABADADACQAFABAAACQAAADgFABIgSAEIgDABQgDABAAgFg");
	this.shape_10.setTransform(-203.25,-2.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B3927").s().p("AgZAaQgKgJAAgRQAAgOALgJQALgMAOAAQAQAAAJALQAKAJAAAPQAAAOgLALQgKAKgPAAQgPAAgKgJgAgOgEQAAAJADAJQAFAMAHgBQAHAAAEgGQADgGAAgJQAAgKgDgHQgEgLgIAAQgOAAAAAUg");
	this.shape_11.setTransform(-211.175,-2.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6B3927").s().p("AgXAjQgEAAAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAQADgCABgEQACgDAAgLIAAgQIgBgIQgBgDgEgCQgEgBAAgCQAAgDAEgBIARgEIADgCQAEAAAAAFIAAAKIAAAAIAAAAQADgGAEgEQAFgFAGAAQAFAAADAEQADAEAAAFQAAADgBACQgDADgDAAIgEgCIgGgCQgMAAAAAZQAAAKACAEQABAEADACQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAAEgGAAg");
	this.shape_12.setTransform(-217.6,-2.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B3927").s().p("AAIAxQgFAAAAgEQAAgCADgCQAEgCACgEIABgNIAAgQQAAgLgLAAQgEAAgDADQgHAFAAATQABAKABADQABAEAEACQADACAAACQAAAEgFAAIgcAAQgFAAAAgEQAAgCADgCQAEgCABgEQABgDABgKIAAgrIgBgJQgBgDgEgCIgDgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgCAFgBIASgGIAEAAQACAAAAAEIAAAiIABABIABgBQAHgLANAAQAMAAAGAJQAEAHAAAKIAAAQQAAAJABAEQACAEADACQADACABACQAAAEgGAAg");
	this.shape_13.setTransform(-224.65,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6B3927").s().p("AgOAvQgFAAAAgDQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQADgCACgDQABgDAAgMIAAgzQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgFAAgEACQgEADgDAGIgDAGIgDAAQgGABAAgGIABgLIAAgIQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAaABIARAAIAagBIAFABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIABAJIAAALQAAAEgGAAIgDAAIgCgGQgDgGgFgDQgEgCgEAAQgEAAAAADIAAAzQAAAMABADQACADADACQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgFAAg");
	this.shape_14.setTransform(-233.375,-3.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B3927").s().p("AgWAeQgFgEAAgKQAAgHAFAAIADACIAFAFQAGAJAIAAQAEAAADgBQADgDAAgDQAAgEgGgCIgLgFQgJgDgDgDQgGgEAAgIQAAgLAJgHQAIgFALgBQAKAAAGAEQAGADAAAIIgBAHQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgCAAgCgDQgGgKgJABQgDAAgCACQgCABgBADQABAEAFACIAMAFQASAGAAAOQAAAKgJAHQgJAFgLAAQgPAAgGgFg");
	this.shape_15.setTransform(-244.2,-2.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B3927").s().p("AAIAjQgFAAAAgEQAAgCADgCQAEgCABgDQACgEAAgKIAAgPQAAgMgLAAQgEAAgEAEQgFAFAAASIABAOQABADAEACQADACAAACQAAAEgFAAIgcAAQgFAAAAgEQAAgCADgCQAEgCABgDIABgOIAAgPIAAgJQgCgDgDgBQgEgCAAgCQAAgDAEgBIARgFIAEgBQAEAAAAAFIAAAGIAAABIABgBQAIgLAMAAQAMAAAGAKQAEAGAAALIAAAPIABAOQABADAEACQADACAAACQAAAEgFAAg");
	this.shape_16.setTransform(-251.025,-2.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B3927").s().p("AAMAfIAAgHIAAAAIgBAAQgHALgNAAQgMAAgGgJQgEgGAAgLIAAgSIgBgIQgBgCgDgCQgFgCAAgCQAAgCAFgCIASgEIADgCQADAAAAAFIAAAmQAAAGADADQADAEAFAAQAEAAAEgEQAFgFAAgSQAAgJgBgCQgBgCgDgCQgEgCAAgCQAAgCAEgCIASgEIAEgCQADAAAAAFIAAAnIAAAJQACADADACQAEABAAACQAAADgEABIgSAEIgDABQgDABgBgFg");
	this.shape_17.setTransform(-259.35,-2.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6B3927").s().p("AAcAvQgHAAgEgFIgJgTQgHgTgLAAIgCAAQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAOQAAALABACQABAFAEACQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAAEgFAAIgeAAQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAABgBQABAAAAAAQAEgCABgFQACgCgBgLIAAgxQAAgHgDgCIgEgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgEAFAAIAaAAIALAAQASABAIAFQAIAHAAALQAAAEgBAEQgGALgOABIgCABIACABQAHAAAGAGQADAEAGAMQAFAOAEADIACACIACACQAAAEgEAAgAgOggIAAAZQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAFAAQAHAAAEgEQAFgDAAgJQAAgNgQAAIgFAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABg");
	this.shape_18.setTransform(-268.05,-3.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B3927").s().p("AgXAeQgEgEAAgKQAAgHAFAAIAEACIAEAFQAHAJAHAAQAEAAADgBQADgDAAgDQAAgEgGgCIgLgFQgIgDgEgDQgGgEAAgIQAAgLAJgHQAIgFALgBQAKAAAGAEQAGADAAAIIgBAHQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgCAAgCgDQgHgKgHABQgDAAgDACQgDABABADQAAAEAFACIAMAFQASAGAAAOQAAAKgJAHQgJAFgLAAQgOAAgIgFg");
	this.shape_19.setTransform(-280.05,-2.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B3927").s().p("AgVAaQgKgJAAgPQAAgOAKgLQAKgMAOAAQALAAAJAIQAJAHAAAMQAAAFgDACQgCABgGAAIgeAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAACQABAFADAFQAGAJAMAAQAGAAAFgCIAGgDQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAEgIAFQgJAHgNgBQgNAAgJgJgAgGgVQgEAEgBAGIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAPAAQAIAAAAgFQAAgFgDgCQgDgDgFAAQgEAAgEADg");
	this.shape_20.setTransform(-286.825,-2.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B3927").s().p("AgNAxQgFAAAAgEQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQAEgCABgFQACgDAAgKIAAgrQAAgHgBgCQgBgDgEgCQgEgBAAgCQAAgCAEgBIARgGIAEAAQADAAAAAEIAABBQAAAKABADQACAFADACQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAEgFAAg");
	this.shape_21.setTransform(-291.775,-3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6B3927").s().p("AAIAZIAAAAIgBAAQgHAKgOAAQgIABgFgFQgHgEAAgJQAAgKAJgFQAHgEAPgEQAJgFAAgHQAAgHgIAAQgFAAgDACIgHAIQgDAFgDgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgCgBAAgFQAAgHADgDQACgDAJgCQAGgCAIAAQAKAAAIAGQAKAFAAAMIgBAYIABAJQAAADAEAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAADgEADQgDAEgIgBQgKAAgCgKgAAEAAQgHADgFAEQgGAEAAAEQAAAEADACQACACAEABQAFgBAEgGQACgEAAgLIAAgCIgBAAg");
	this.shape_22.setTransform(-297.5,-2.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B3927").s().p("AgUAtQgJgDgDgEQgCgFgBgHIAAgFQAAgGAFAAQACAAADAEIAHAIQAJAKAJAAQAIAAADgEQAFgDAAgGQAAgGgIgFIgPgHQgLgEgGgEQgHgGgBgKQAAgMALgJQAKgIAOAAQASAAAHAHQAEADAAAKQAAAJgFAAQgDAAgCgDIgFgGQgJgJgIgBQgEAAgEADQgDADAAAGQAAAGAIAEIAPAGQAMAFAEAEQAIAHAAAKQAAAOgLAJQgKAIgQAAQgKAAgJgDg");
	this.shape_23.setTransform(-305.95,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},120).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.9,-23.3,163.49999999999997,63);


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

	// T2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B3927").s().p("AhOBYQgYghAAg0QAAg2AeglQAfglArAAQAwABAbAhQAbAiAAA3QAAA7ghAkQgeAhgqgBQgyAAgbglgAgqgIQAAAtAMAdQAMAeATAAQApAAABhYQAAgzgNgbQgMgagTAAQgpAAAABYg");
	this.shape.setTransform(-194.7,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B3927").s().p("AADB7IhCAAQgVAAAAgYQAAghAighQAGgHAagWQATgRAIgLQAOgRAAgUQABgOgIgKQgIgLgNAAQgWAAgPAZIgJARQgGAHgGAAQgOAAAAgYQAAgZAPgLQAYgQAiAAQAhAAAZARQAcATAAAhQAAAggeAYQgOAMgdAOQgeAPgJAHQgNALAAAJQAAAFAGAAIA1AAQAdAAAKgEQAGgCAFgHQAGgFAEAAQAIAAAAAKIgDAWQgCASgDAHQgEAKgQAAg");
	this.shape_1.setTransform(-215.9,25.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B3927").s().p("AhEBbQgWgfABgvQAAgzAWgmQAcgxA1AAQAlABAPAPQAIAJAAAUQAAAbgPAAQgGAAgFgGIgJgPQgPgYgSAAQgTAAgLAYQgKAWgBAnIACABIABgCQARgcAjAAQAegBAVAXQATAUABAgQgBAngXAaQgZAcgpAAQgsABgZgjgAgXAEQgKAOAAAaQAAAZAKAPQAJAOAPAAQASAAAJgPQAJgPAAgYQgBgXgIgPQgKgOgQAAQgOAAgLAMg");
	this.shape_2.setTransform(-233.8,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B3927").s().p("AgmAzQAAgEAFgDIAOgKQAOgNAAgMQAAgHgJgJQgNgPAAgGQAAgIAMgMQANgMAHAAQAEAAAIAFQAHAGAFAGQAKAMAAANQAAAUggAhQgYAagMAAQgJAAAAgKg");
	this.shape_3.setTransform(-248.925,38.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B3927").s().p("AgHB8QgNAAAAgJQAAgFAJgFQAJgGACgJQADgIABgRQAAgDgDAAIhYAAQgHAAAAgIIAAgTQAAgJAEgHQAagnALgfQAMgfABghQAAgIAIAAIAeAAQAFABAAAFIAAACQgBAfgPAhQgOAegdAnIgBACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIA4AAQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAgBIAAhVQAAgHAGABIAmAAQAHgBAAAHIAABVQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAdAAQAIAAAAAIIAAAYQAAAHgJABIgcAAQgBAAAAAAQgBAAAAAAQAAABAAABQAAAAAAABQAAASADAHQADAJAJAGQAJAFAAAFQAAAJgNAAg");
	this.shape_4.setTransform(-262.225,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B3927").s().p("AAFB8QgHAAAAgIIAAiqQAAgRgCgFQgCgGgMAAIgYACQgJAAAAgRQgBgIAIgCIAegEQARgCAMgEQAXgGADAAQALAAAAANIAADiQABAIgJAAg");
	this.shape_5.setTransform(-286.2,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B3927").s().p("AgDCMQgEAAAAgFIAAgZQgWAAgTgGQgTgHgHgKQgEgGgBgIIgBgNIgBgLQAAgNALAAQAGAAAGAHIAPATQAWAXAWAAIANgBQAJgDAHgIQAGgHAAgKQAAgPgRgKQgHgEgegLQgZgKgMgJQgRgPAAgXQAAgaATgSQATgRAbgEIAAgcQAAgFAEAAIANAAQAFAAAAAFIAAAbQAjACAPAOQAHAIAAAVQAAAVgMAAQgFAAgGgHIgQgSQgRgRgQAAQgKAAgIAGQgJAHAAAMQAAAOARAJQAFADAgANQAZAJAMAKQASAQAAAZQAAAagUATQgSASgdAFIAAAaQAAAFgFAAg");
	this.shape_6.setTransform(-301.8,24.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B3927").s().p("AgWA3QgFgKAAgSIACgwQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgOAAQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgKQAAgDAEAAQAPgDAFgIQAEgFACgLQAAgEADAAIAOAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAIAAAVIABAGQABABAEAAIAKgBIAMgBQAIAAAAAEIgBAHQgBAFgCACQgCABgFABIgLgBIgLAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBASQABAfADAKQAEAMALAAQAEAAAFgDIAHgEQAFAAAAAFQAAADgDAFQgLAQgWAAQgWAAgJgRg");
	this.shape_7.setTransform(-192.5,-7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B3927").s().p("AANAsIAAgCIgCABQgMARgXAAQgNAAgKgHQgLgJAAgOQAAgRAPgJQALgGAagIQAPgIAAgLQAAgNgNAAQgHAAgGAFQgGADgGAKQgGAHgEAAQgGAAgCgDQgCgDAAgIQgBgMAFgEQAEgHAPgCQALgDAMAAQATAAANAJQAQAKAAASIgCApQABANABADQACAFAGAAQAGABAAAEQAAAFgFAEQgIAGgLAAQgSAAgEgQgAAIAAQgOAGgJAGQgIAGAAAJQAAAFAEAEQAEAEAFgBQALAAAGgLQACgFAAgVIAAgBIAAgBg");
	this.shape_8.setTransform(-203.25,-5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B3927").s().p("AglBMQgWgHABgQQAAgOAPgFIABgBIgBgBQgEgFAAgGQAAgOASgHIABAAIgBgBQgYgLAAgYQABgSAOgMQAPgNAUAAQANAAAMAGIALAFQADAAAEgGQADgFAGAAQAKAAABAMQAAAMgPAAIgDAAQAEAIAAAKQAAASgOAMQgPALgTAAIgEAAQgOAAABAGQAAAHARAAIAUAAQAUAAAIAGQAKAIAAAMQAAAPgOALQgQALgeAAQgTAAgOgEgAghAvQAAAJAMAFQAJAEAMAAQANAAAJgEQAHgEAAgGQAAgHgPAAIgPAAQgVAAgJgEIgCAHgAgTgqQAAALADAIQAGAMAJAAQAFAAAEgHQAEgGAAgJQAAgLgEgIQgEgLgIAAQgPAAAAAVg");
	this.shape_9.setTransform(-221.7,-3.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B3927").s().p("AAOA7QgJAAAAgGQAAgDAGgEQAGgDACgGQACgGAAgRIAAgaQAAgVgSAAQgHAAgGAGQgKAKAAAfQAAARACAGQACAGAGADQAGAEAAADQAAAGgJAAIgvAAQgIAAAAgGQAAgDAFgEQAGgDACgGQACgGAAgRIAAgbQAAgLgBgEQgCgFgGgCQgHgDAAgDQAAgFAIgBIAdgJIAGgCQAGAAAAAIIAAAKQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIABgBQANgTAWAAQAUAAALARQAGAJAAAUIAAAaQAAAQACAHQACAGAHADQAFAEAAADQAAAGgJAAg");
	this.shape_10.setTransform(-234.575,-6.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B3927").s().p("AgXBTQgIABAAgGQAAgEAFgDQAHgDACgGQACgGAAgRIAAgdQAAgKgCgDQgCgFgGgCQgHgDAAgEQABgEAGgCQATgEALgFIAGgBQAFAAABAHIAABBQgBARADAGQACAGAGADQAGAEAAADQAAAGgJgBgAgMgwQgIgJAAgFQAAgFAIgHQAIgJAEABQAFgBAIAJQAIAHAAAFQAAAFgIAJQgIAHgFAAQgEAAgIgHg");
	this.shape_11.setTransform(-245.65,-8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6B3927").s().p("AgWA3QgFgKAAgSIACgwQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgOAAQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgKQAAgDAEAAQAOgDAHgIQADgFACgLQAAgEAEAAIANAAQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIAAAVIAAAGQABABAEAAIAKgBIANgBQAHAAABAEIgCAHQgBAFgCACQgCABgFABIgLgBIgLAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBASQAAAfAEAKQAEAMALAAQAEAAAGgDIAGgEQAFAAAAAFQAAADgDAFQgLAQgWAAQgWAAgJgRg");
	this.shape_12.setTransform(-254.4,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B3927").s().p("AgnA7QgIAAgBgGQABgDAFgDQAGgEACgGQACgFAAgSIAAgcIgBgOQgCgFgGgDQgHgCAAgEQAAgEAHgBQAOgEANgFQAEgCADAAQAGAAAAAIIAAARIAAAAIABAAQAEgKAIgGQAJgJAJAAQAJAAAFAHQAFAGAAAJQAAAFgCAEQgDAEgGAAQgDAAgFgDQgGgDgEAAQgUAAAAArQAAARADAGQABAGAHAEQAFADAAADQAAAGgJAAg");
	this.shape_13.setTransform(-265.15,-6.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6B3927").s().p("AANAsIgBgCIgBABQgMARgXAAQgOAAgJgHQgLgJAAgOQAAgRAPgJQAMgGAZgIQAPgIAAgLQAAgNgNAAQgIAAgFAFQgGADgGAKQgGAHgEAAQgGAAgCgDQgCgDgBgIQAAgMAFgEQAFgHAOgCQALgDAMAAQATAAANAJQAQAKAAASIgBApQgBANACADQACAFAGAAQAGABAAAEQAAAFgFAEQgIAGgLAAQgSAAgEgQgAAIAAQgOAGgJAGQgIAGAAAJQAAAFAEAEQADAEAHgBQAKAAAGgLQACgFAAgVIAAgBIAAgBg");
	this.shape_14.setTransform(-276.7,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B3927").s().p("AgWA3QgFgKAAgSIACgwQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgOAAQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgKQAAgDAEAAQAPgDAFgIQADgFADgLQABgEACAAIAOAAQABAAABAAQAAAAABABQAAAAAAABQAAABAAAAIAAAVIABAGQABABAEAAIAKgBIANgBQAHAAAAAEIgBAHQgBAFgCACQgCABgFABIgLgBIgLAAQgBAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBASQAAAfAEAKQAEAMALAAQAEAAAFgDIAHgEQAFAAAAAFQAAADgDAFQgLAQgWAAQgVAAgKgRg");
	this.shape_15.setTransform(-288.25,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B3927").s().p("AgjBMQgPgFgFgHQgFgIAAgNIAAgHQAAgLAIAAQAFAAAEAGIAMAPQAQARAQAAQAMgBAGgFQAIgHAAgJQAAgMgNgHIgbgLQgTgIgJgHQgNgLAAgRQAAgUARgOQARgOAaAAQAdAAANAMQAGAGAAAPQAAAPgJAAQgEAAgEgDIgJgLQgOgQgOAAQgHgBgGAFQgHAFAAAJQAAAKANAIIAbALQATAGAJAJQANAKAAAUQAAAWgTAOQgSAPgbAAQgSAAgOgFg");
	this.shape_16.setTransform(-301.075,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},59).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},61).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},12).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.9,-36,186.99999999999997,84);


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

	// T1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B3927").s().p("AgHArQgFgFAAgDQAAgDAFgGQAFgEACAAQADAAAFAEQAFAGAAADQAAADgFAFQgFAFgDAAQgCAAgFgFgAgFANIgBgIQgBgKgCgMQgCgKAAgHQAAgNALAAQAMAAAAANIgCARIgDAWIgBAIQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(-180.925,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B3927").s().p("AgXAeQgEgEAAgKQAAgHAFAAIAEACIAEAFQAHAJAHAAQADAAAEgBQADgDAAgDQAAgEgGgCIgLgFQgJgDgDgDQgGgEAAgIQAAgLAJgHQAIgFALgBQAKAAAGAEQAGADAAAIIgBAHQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABgBgBQgCAAgCgDQgGgKgIABQgDAAgDACQgCACgBACQABAEAFACIAMAFQASAGAAAOQAAAKgJAHQgJAFgLAAQgOAAgIgFg");
	this.shape_1.setTransform(-186.8,28.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B3927").s().p("AgVAaQgKgJAAgPQAAgOAKgLQAKgMAOAAQALAAAJAIQAJAHAAAMQAAAFgDACQgCABgGAAIgeAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAACQABAFADAFQAGAJAMAAQAGAAAFgCIAGgDQAAAAABAAQABAAAAABQAAAAABAAQAAABAAABQAAAEgIAFQgJAHgNgBQgNAAgJgJgAgGgVQgEAEgBAGIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAPAAQAIAAAAgFQAAgFgDgCQgDgDgFAAQgEAAgEADg");
	this.shape_2.setTransform(-193.575,28.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B3927").s().p("AgNAxQgFAAAAgDQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQAEgCABgEQACgDAAgKIAAgRIgBgIQgBgCgEgCQgEgCAAgCQAAgCAEgBIARgFIAEgBQADAAAAAEIAAAmQAAAKABADQABAEAEACQABABAAAAQABABAAAAQABABAAAAQAAAAAAABQAAADgFAAgAgGgcQgFgFAAgDQAAgDAFgFQAEgEACAAQADAAAFAEQAFAFAAADQAAADgFAFQgFAEgDAAQgCAAgEgEg");
	this.shape_3.setTransform(-198.675,26.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B3927").s().p("AgXAjQgEAAgBgEQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQADgCABgEQABgDAAgLIAAgQIAAgIQgBgDgEgCQgEgBAAgCQAAgDAFgBIAQgEIADgCQAEAAAAAFIAAAKIAAAAIAAAAQADgGAEgEQAFgFAGAAQAFAAADAEQADAEAAAFQAAADgBACQgCADgEAAIgEgCIgGgCQgMAAAAAZQAAAKACAEQABAEADACQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQgBAEgFAAg");
	this.shape_4.setTransform(-203.75,28.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B3927").s().p("AgVAaQgKgJAAgPQAAgOAKgLQAKgMAOAAQALAAAJAIQAJAHAAAMQAAAFgDACQgCABgGAAIgeAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAACQABAFADAFQAGAJAMAAQAGAAAFgCIAGgDQAAAAABAAQABAAAAABQAAAAABAAQAAABAAABQAAAEgIAFQgJAHgNgBQgNAAgJgJgAgGgVQgEAEgBAGIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAPAAQAIAAAAgFQAAgFgDgCQgDgDgFAAQgEAAgEADg");
	this.shape_5.setTransform(-210.675,28.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B3927").s().p("AgUAtQgJgDgDgEQgCgFgBgHIAAgFQAAgGAFAAQACAAADAEIAHAIQAJAKAJAAQAIAAADgEQAFgDAAgGQAAgGgIgFIgPgHQgLgEgGgEQgHgGAAgKQAAgMAKgJQAKgIAPAAQARAAAHAIQAEACAAAKQAAAJgFAAQgDAAgCgDIgFgGQgJgJgIgBQgEAAgEADQgDADAAAGQAAAGAIAEIAPAGQAMAFAEAEQAIAHAAAKQAAAOgLAJQgKAIgQAAQgLAAgIgDg");
	this.shape_6.setTransform(-219,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B3927").s().p("AAEAiQgEAAAAgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgDgFgIIgDgFIgBAAIgBAAQgHALAAADQAAADADACQABABABAAQAAABABAAQAAABAAAAQAAABAAAAQABADgFAAIgXAAQgFAAAAgDQAAgCAEgEQAHgEAJgMIAHgJIAAAAIgBgCIgIgKIgGgJIgHgEIgDgCQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgEAEAAIAhAAQADAAAAAEIgCACQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAACAEAJIAEADIABACIAAgCQAHgJAAgEQAAgDgEgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQABgEAEAAIAXAAQAFAAAAAEQAAABgFAEQgFADgKAMIgGAJIgBABIABACIAJALIAGAIIAGAEIADACQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAADgFAAg");
	this.shape_7.setTransform(-228.9,28.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B3927").s().p("AgZAaQgKgJAAgRQAAgOALgJQALgMAOAAQAQAAAJALQAKAJAAAPQAAAOgLALQgKAKgPAAQgPAAgKgJgAgOgEQAAAJADAJQAFAMAHgBQAHAAAEgGQADgGAAgJQAAgKgDgHQgEgLgIAAQgOAAAAAUg");
	this.shape_8.setTransform(-236.275,28.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B3927").s().p("AgOAsIgDgBQgBAAAAAAQgBABgBAAQAAAAAAABQgBAAAAABQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgEAAAAgFIAAhCQAAgHgBgCQgBgDgDgBQgEgCAAgCQAAgCAEgBIARgFIAEgBQADAAAAAEIAAAhQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIABgBQAIgLAMAAQAMAAAIAKQAHAJAAAMQAAAQgJALQgKAMgQAAQgKAAgIgFgAgHAAQgDAGAAAJQAAAMAFAGQAEAGAFAAQAHAAAEgGQAEgHAAgKQAAgKgEgGQgEgGgHAAQgHAAgEAGg");
	this.shape_9.setTransform(-243.925,26.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B3927").s().p("AgMAgQgDgFgBgLIACgcQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgIAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIAAgHQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAIgCAEgFIADgKQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAHAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAMIAAAEIADABIAGgBIAIAAQAEgBAAADIgBAEIgBAEIgFABIgGAAIgHAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBAKQAAATACAFQADAIAGAAQADAAADgCIAEgDQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgHAKgNAAQgNAAgEgKg");
	this.shape_10.setTransform(-250.4,27.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B3927").s().p("AgNAxQgFAAAAgEQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQAEgCABgFQACgDAAgKIAAgrQAAgHgBgCQgBgDgEgCQgEgBAAgCQAAgCAEgBIARgGIAEAAQADAAAAAEIAABBQAAAKABADQACAFADACQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAEgFAAg");
	this.shape_11.setTransform(-254.875,26.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6B3927").s().p("AAIAZIAAAAIgBAAQgHAKgOAAQgIABgFgFQgHgEAAgJQAAgKAJgFQAHgEAPgEQAJgFAAgHQAAgHgIAAQgFAAgDACIgHAIQgDAFgDgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgCgBAAgFQAAgHADgDQACgDAJgCQAGgCAIAAQAKAAAIAGQAKAFAAAMIgBAYIABAJQABADADAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAADgEADQgDAEgIgBQgKAAgCgKgAAEAAQgHADgFAEQgGAEAAAEQAAAEADACQACACAEABQAFgBAEgGQACgEAAgLIAAgCIgBAAg");
	this.shape_12.setTransform(-260.6,28.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B3927").s().p("AgUAtQgJgDgDgEQgCgFgBgHIAAgFQAAgGAFAAQADAAACAEIAHAIQAJAKAJAAQAIAAADgEQAFgDAAgGQAAgGgIgFIgPgHQgLgEgGgEQgHgGgBgKQAAgMALgJQAKgIAOAAQASAAAHAIQAEACAAAKQAAAJgFAAQgDAAgCgDIgFgGQgJgJgIgBQgEAAgEADQgDADAAAGQAAAGAIAEIAPAGQAMAFAEAEQAIAHAAAKQAAAOgLAJQgKAIgQAAQgKAAgJgDg");
	this.shape_13.setTransform(-269.05,27);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6B3927").s().p("AgWAjQgFAAgBgEQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQADgCABgEQABgDAAgLIAAgQIAAgIQgBgDgEgCQgEgBAAgCQAAgDAFgBIAQgEIADgCQAEAAAAAFIAAAKIAAAAIAAAAQADgGAEgEQAFgFAGAAQAFAAADAEQADAEAAAFQAAADgBACQgCADgEAAIgEgCIgGgCQgMAAAAAZQAAAKACAEQABAEADACQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQgBAEgFAAg");
	this.shape_14.setTransform(-277.55,28.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B3927").s().p("AANAfIAAgHIgBAAIAAAAQgJALgMAAQgMAAgGgJQgDgGgBgLIAAgSIAAgIQgBgCgFgCQgDgCAAgCQAAgCADgCIASgEIAEgCQADAAAAAFIAAAmQABAGACADQADAEAFAAQAEAAADgEQAHgFAAgSQAAgJgBgCQgBgCgEgCQgEgCAAgCQAAgCAEgCIASgEIAEgCQADAAAAAFIAAAnIAAAJQACADAEACQADABAAACQAAADgDABIgTAEIgDABQgDABAAgFg");
	this.shape_15.setTransform(-284.4,28.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B3927").s().p("AgZAaQgKgJAAgRQAAgOALgJQALgMAOAAQAQAAAJALQAKAJAAAPQAAAOgLALQgKAKgPAAQgPAAgKgJgAgOgEQAAAJADAJQAFAMAHgBQAHAAAEgGQADgGAAgJQAAgKgDgHQgEgLgIAAQgOAAAAAUg");
	this.shape_16.setTransform(-292.075,28.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B3927").s().p("AAIAjQgFAAAAgEQAAgCADgCQAEgCABgDQACgEAAgKIAAgPQAAgMgLAAQgEAAgEAEQgFAFAAASIABAOQABADAEACQADACAAACQAAAEgFAAIgcAAQgFAAAAgEQAAgCADgCQAEgCABgDIABgOIAAgPIAAgJQgCgDgDgBQgEgCAAgCQAAgDAEgBIARgFIAEgBQAEAAAAAFIAAAGIAAABIABgBQAIgLAMAAQAMAAAGAKQAEAGAAALIAAAPIABAOQABADAEACQADACAAACQAAAEgFAAg");
	this.shape_17.setTransform(-302.275,28.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6B3927").s().p("AgZAaQgKgJAAgRQAAgOALgJQALgMAOAAQAQAAAJALQAKAJAAAPQAAAOgLALQgKAKgPAAQgPAAgKgJgAgOgEQAAAJADAJQAFAMAHgBQAHAAAEgGQADgGAAgJQAAgKgDgHQgEgLgIAAQgOAAAAAUg");
	this.shape_18.setTransform(-310.075,28.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B3927").s().p("AAZBdQgOgQAAgYQAAgZAQgQQAPgPAWAAQAXAAAPAPQAPAQAAAZQAAAagQAQQgPAQgWAAQgYAAgPgSgAAwA1QAAAQAEALQAFAMAHAAQAQAAAAgnQAAgngQAAQgQAAAAAngAhNBrICCjVIAZAAIiCDVgAhmgMQgOgQAAgYQAAgZAQgQQAPgRAWAAQAXAAAPARQAPAQAAAZQAAAagQAQQgPAOgWAAQgZAAgOgQgAhPg0QAAAQAEALQAFAMAHAAQAQAAAAgnQAAgngQAAQgQAAAAAng");
	this.shape_19.setTransform(-191.175,0.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B3927").s().p("AgqBuQgQgFgHgKQgHgKAAgcQAAgOAOAAQAHAAAFAJQAGALAEAGQAQAYAXAAQAPAAAKgJQAMgKAAgQQAAgTgUgNQgagUgwABIgHAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIABgEIAThhQABgDAFAAIArAAQAYgBAHgCQAHgBAFgFQAFgGAFAAQAHAAAAAIIgCAQIgDASQgCAIgDADQgFADgRAAIg7AAQAAAAgBAAQgBAAAAABQgBAAAAABQAAABAAABIgEAQIAAADQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQA0ABAbAXQAZATAAAfQAAAhgYAVQgXAVgiAAQgSAAgQgGg");
	this.shape_20.setTransform(-212.725,-0.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B3927").s().p("AAFBtQgHAAAAgHIAAiVQAAgQgCgEQgBgFgLAAIgVACQgJAAAAgPQAAgIAHgBIAagDQAQgDALgDQATgFAEAAQAKAAAAALIAADHQAAAHgIAAg");
	this.shape_21.setTransform(-232.875,0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6B3927").s().p("AgzA9QgWgWAAgjQAAghAXgaQAXgaAhAAQAbAAAUARQAVASAAAbQAAAMgHAEQgFADgOAAIhHAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAIAAAEQABAMAHAKQAOAXAdAAQAOAAAMgGIANgGQAHAAAAAGQAAAKgSAMQgWAPgcAAQggAAgWgVgAgPgyQgJAJgCAOIgBADQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAIAiAAQATAAAAgNQAAgJgGgHQgHgHgLAAQgMAAgIAIg");
	this.shape_22.setTransform(-254.625,3.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B3927").s().p("AgRBPQgEAAgBgDIgthuQgHgSgGgFIgJgGQgGgDABgEQAAgIALAAIBBAAQALAAgBAHQABAFgIAEQgHAEAAAHQgBADADAHIAbBGIACACIADgCIAUguQAGgRABgLQgBgKgHgGQgJgFABgEQgBgIAMAAIAyAAQAMAAgBAIQAAAEgEADQgLAIgGAKQgHAJgKAXIgqBZQgBADgFAAg");
	this.shape_23.setTransform(-269.65,3.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6B3927").s().p("AASA7IgBgCIgBACQgRAXgfAAQgUAAgNgKQgPgLAAgTQAAgYAWgNQAPgIAigLQAWgLAAgPQAAgSgTAAQgKAAgIAGQgHAFgKANQgHAKgHAAQgHAAgDgEQgDgEAAgKQAAgQAGgHQAGgIAVgFQAOgDAQAAQAaAAASAMQAWAOAAAZIgBA5QAAAQABAEQADAHAJABQAIAAAAAGQAAAGgIAGQgKAJgPAAQgZAAgFgXgAAKAAQgUAIgKAIQgMAJAAALQAAAIAFAFQAGAFAIAAQAOAAAIgPQAEgJAAgaIAAgDIgBgBg");
	this.shape_24.setTransform(-287.275,3.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B3927").s().p("AgwBoQgUgHgHgKQgGgKAAgRIgBgLQAAgOALAAQAGAAAGAHIAQAUQAWAXAWAAQAQAAAJgHQALgKAAgMQAAgQgSgKQgHgEgegMQgagJgMgKQgSgPAAgXQAAgcAXgTQAYgUAjAAQAoAAASARQAHAIAAAVQAAAVgLAAQgGAAgGgGIgLgOQgTgXgUAAQgKAAgIAHQgJAGAAAMQAAAPARAKQAFADAgAMQAaAKANALQARAPAAAaQAAAegZAUQgZAUgmAAQgXAAgUgHg");
	this.shape_25.setTransform(-306.775,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},108).to({state:[]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(123));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317.9,-36.3,141.99999999999997,73);


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
	this.instance = new lib.PBB_logo1();
	this.instance.setTransform(-38,-24,0.3811,0.3815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-24,93,74);


(lib.IM4_jpg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IM4();
	this.instance.setTransform(-150,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-144,300,151);


(lib.IM3_jpg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IM3();
	this.instance.setTransform(-150,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-143.5,300,151);


(lib.IM2_jpg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IM2();
	this.instance.setTransform(-150,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-143.5,300,151);


(lib.IM1_jpg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.IM1();
	this.instance.setTransform(-150,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-144,300,151);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVA/QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBIgShMIAAgBIAAABIgRBMQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgUAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIggh4IAAgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIARBIIAAABIABgBIAQhIQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAVAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIASBIIABABIAAgBIARhIQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAVAAQABAAABAAQAAAAAAABQAAAAABAAQAAABgBABIgdB4QAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(99.1542,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA7QgKgGgGgKQgGgKgBgOIAAgmQABgNAGgKQAGgKAKgGQAKgGAOAAQAOAAALAGQALAGAFAKQAHAKAAANIAAAmQAAAOgHAKQgFAKgLAGQgLAGgOAAQgOAAgKgGgAgPgjQgGAGAAAKIAAAnQAAAKAGAHQAGAGAJAAQAJAAAHgGQAGgHAAgKIAAgnQAAgKgGgGQgGgHgKAAQgJAAgGAHg");
	this.shape_1.setTransform(84.7,19.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA/QAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIguhLIAAgBIgBABIABBLIgBABIgCABIgVAAIgBgBIgBgBIAAh5IABgBIABgBIAVAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAuBLIAAAAIABgBIAAhKIAAgBIACgBIAVAAIABABIABABIAAB5IgBABIgBABg");
	this.shape_2.setTransform(72.125,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrA/IgCgBIAAgBIAAh5IAAgBIACgBIAyAAQAMAAAJAFQAJAEAFAKQAEAIAAAMQAAALgFAJQgFAHgJAGQgJAEgMAAIgZAAIgBABIAAAuIAAABIgCABgAgUgoIAAAiIABABIAWAAQAIgBAFgEQAFgFAAgHQAAgIgFgGQgFgEgIAAIgWAAIgBAAg");
	this.shape_3.setTransform(55.475,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA7QgKgGgGgKQgGgKgBgOIAAgmQABgNAGgKQAGgKAKgGQALgGANAAQAOAAALAGQALAGAFAKQAHAKAAANIAAAmQAAAOgHAKQgFAKgLAGQgLAGgOAAQgNAAgLgGgAgPgjQgGAGAAAKIAAAnQAAAKAGAHQAGAGAJAAQAJAAAHgGQAGgHAAgKIAAgnQAAgKgGgGQgGgHgKAAQgJAAgGAHg");
	this.shape_4.setTransform(43.3,19.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXA/IgCgBIAAgBIAAgyIgBAAIgnAAIgBAAIAAAyIAAABIgCABIgVAAIgCgBIAAgBIAAh5IAAgBIACgBIAVAAIACABIAAABIAAAwIABABIAnAAIABgBIAAgwIAAgBIACgBIAVAAIABABIABABIAAB5IgBABIgBABg");
	this.shape_5.setTransform(31.125,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYA8QgKgFgGgIQgGgJAAgLIAAgEIABgBIABgBIAUAAIACABIABABIAAACQAAAIAGAFQAHAEAKAAQAKAAAFgDQAEgFABgFQgBgFgDgCQgCgDgGgDIgOgGQgMgEgJgEQgIgEgFgIQgGgHAAgLQAAgKAGgJQAFgIAKgEQAKgFAMAAQANABALAFQALAEAGAJQAGAJAAALIAAADIgBABIgCABIgUAAIgBgBIgBgBIAAgBQAAgIgGgGQgHgEgJAAQgJgBgFAEQgEADAAAHQAAAEACADQADADAFADIARAGQAMAFAIAEQAHACAGAIQAGAGAAAMQAAARgNAKQgMAJgWABQgNAAgLgFg");
	this.shape_6.setTransform(19.05,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1A3BB").s().p("AoNCbQgYAAAAgZIAAkDQAAgZAYAAIQbAAQAYAAAAAZIAAEDQAAAZgYAAg");
	this.shape_7.setTransform(60.95,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,3.4,110,31);


(lib.circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E1A3BB").s().p("AyKSLQninhAAqqQAAqoHinjQHhnhKpAAQKpAAHiHhQHiHjAAKoQAAKqniHhQniHiqpAAQqpAAnhnig");
	this.shape.setTransform(0.0025,0.0252,1.6568,1.1029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.5,-181.4,545.1,362.9);


// stage content:
(lib.WFSB_213829_MM_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [293];
	// timeline functions:
	this.frame_293 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(293).call(this.frame_293).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(294));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(417.6,223.6,1,1,0,0,0,89.5,21.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260).to({_off:false},0).to({x:254.6,y:226.6,alpha:1},15).wait(19));

	// T3
	this.instance_1 = new lib.T3("synched",168);
	this.instance_1.setTransform(470.55,182);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({alpha:1,startPosition:191},12,cjs.Ease.get(1)).wait(64).to({startPosition:9},0).to({y:162.65,startPosition:30},21).wait(18));

	// T2
	this.instance_2 = new lib.T2("synched",89);
	this.instance_2.setTransform(471.25,185.65);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({_off:false},0).to({alpha:1,startPosition:117},14,cjs.Ease.get(1)).wait(51).to({startPosition:168},0).to({alpha:0,startPosition:191},11,cjs.Ease.get(1)).wait(115));

	// T1
	this.instance_3 = new lib.T1("synched",21);
	this.instance_3.setTransform(679.25,194);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({x:469.25,y:186,alpha:1,startPosition:46},19,cjs.Ease.get(1)).wait(49).to({startPosition:95},0).to({alpha:0,startPosition:123},14,cjs.Ease.get(1)).wait(191));

	// Logo
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(-2.5,183.55);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:97.5,alpha:1},22,cjs.Ease.get(1)).wait(272));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_21 = new cjs.Graphics().p("A+HUDQseoTAArwQAArvMeoTQMfoTRoAAQRpAAMeITQMfITAALvQAALwsfITQseITxpAAQxoAAsfoTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_graphics_21,x:155.5525,y:-46.2248}).wait(273));

	// IM4_jpg
	this.instance_5 = new lib.IM4_jpg("synched",0);
	this.instance_5.setTransform(150,144);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(255).to({_off:false},0).to({alpha:1},21).wait(18));

	// IM3_jpg
	this.instance_6 = new lib.IM3_jpg("synched",0);
	this.instance_6.setTransform(150,143.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168).to({_off:false},0).to({alpha:1},23).wait(103));

	// IM2_jpg
	this.instance_7 = new lib.IM2_jpg("synched",0);
	this.instance_7.setTransform(150,143.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({alpha:1},28).wait(177));

	// IM1_jpg
	this.instance_8 = new lib.IM1_jpg("synched",0);
	this.instance_8.setTransform(150,144);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({alpha:1},19).wait(254));

	// Layer_1
	this.instance_9 = new lib.circle("synched",0);
	this.instance_9.setTransform(173.05,-38.25);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).to({alpha:1},19).wait(254));

	// BG_png
	this.instance_10 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(294));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(50.5,-94.6,452.9,345.7);
// library properties:
lib.properties = {
	id: 'C00A36863C9C464AA8ADF1E18C148E10',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"IM1.jpg", id:"IM1"},
		{src:"IM2.jpg", id:"IM2"},
		{src:"IM3.jpg", id:"IM3"},
		{src:"IM4.jpg", id:"IM4"},
		{src:"PBB_logo1.png", id:"PBB_logo1"}
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
an.compositions['C00A36863C9C464AA8ADF1E18C148E10'] = {
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