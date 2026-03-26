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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image4 = function() {
	this.initialize(img.image4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.text4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text4_1, new cjs.Rectangle(0,0,300,600), null);


(lib.text3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text3_1, new cjs.Rectangle(-80,-300,300,600), null);


(lib.text2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2_1, new cjs.Rectangle(-80,-300,300,600), null);


(lib.text1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.text1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1_1, new cjs.Rectangle(-80,-300,300,600), null);


(lib.logo2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo2_1, new cjs.Rectangle(0,0,300,600), null);


(lib.logo_anim = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.logo_anim, new cjs.Rectangle(0,0,300,600), null);


(lib.lines = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0.4)").ss(1,1,1).p("EAZigmSMAnxAAAMgVzBMlMgnxAAAID8s+gA4MnyIGT3AMAnwAAAMgPjA2tMgjXAAAIgxCgMgjeAAAMAKAgiNgEgq8gE+INmAAIhkC+ItmAAgA9DX7IkZAAIJQ/t");
	this.shape.setTransform(-16.975,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-435.9,-186.1,837.9,492.20000000000005), null);


(lib.image4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image4_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.image3_1, new cjs.Rectangle(0,0,300,600), null);


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

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,300,600), null);


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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(-80,-300,300,600), null);


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
	this.instance = new lib.cta();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(-80,-300,300,600), null);


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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-80,-300,300,600), null);


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
	this.instance = new lib.logo_anim();
	this.instance.setTransform(0,0,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [449];
	// timeline functions:
	this.frame_449 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(449).call(this.frame_449).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(150,300,1.875,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

	// logo2
	this.instance = new lib.logo2_1();
	this.instance.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(441));

	// logo_png
	this.instance_1 = new lib.logo_1("single",0);
	this.instance_1.setTransform(40,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:80,alpha:1,mode:"synched"},14,cjs.Ease.get(1)).wait(383).to({mode:"single"},0).wait(44));

	// cta_png
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(140,300);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(395).to({_off:false},0).to({x:80,alpha:1},11,cjs.Ease.get(1)).wait(44));

	// text4
	this.instance_3 = new lib.text4_1();
	this.instance_3.setTransform(160,300,1,1,0,0,0,80,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(385).to({_off:false},0).to({x:80,alpha:1},10,cjs.Ease.get(1)).wait(55));

	// mask_img3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_371 = new cjs.Graphics().p("Egg5AviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_graphics_372 = new cjs.Graphics().p("Egi8AviMARMg5pIgKAAIJE/ZMAwCAAAInyT2IgHATIY7AAMgP6BEmIgHATg");
	var mask_graphics_373 = new cjs.Graphics().p("Egk1AviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_graphics_374 = new cjs.Graphics().p("EgmnAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgGATg");
	var mask_graphics_375 = new cjs.Graphics().p("EgomAviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_graphics_376 = new cjs.Graphics().p("EgqbAviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_graphics_377 = new cjs.Graphics().p("EgsGAviMARMg5pIgKAAIJE/ZMAwCAAAInyT2IgHATIY7AAMgP6BEmIgHATg");
	var mask_graphics_378 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgGATg");
	var mask_graphics_379 = new cjs.Graphics().p("EgtkAviMARLg5pIgKAAIJE/ZMAwCAAAInyT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_graphics_380 = new cjs.Graphics().p("EgtkAviMARMg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_graphics_381 = new cjs.Graphics().p("EgtkAviMARMg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_graphics_382 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY8AAMgP7BEmIgGATg");
	var mask_graphics_383 = new cjs.Graphics().p("EgtkAviMARLg5pIgKAAIJE/ZMAwCAAAInyT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_graphics_384 = new cjs.Graphics().p("EgtlAviMARNg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_graphics_385 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgHATg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(371).to({graphics:mask_graphics_371,x:372.875,y:304.25}).wait(1).to({graphics:mask_graphics_372,x:359.8456,y:304.25}).wait(1).to({graphics:mask_graphics_373,x:347.6706,y:304.25}).wait(1).to({graphics:mask_graphics_374,x:336.35,y:304.25}).wait(1).to({graphics:mask_graphics_375,x:323.5943,y:304.25}).wait(1).to({graphics:mask_graphics_376,x:311.8799,y:304.25}).wait(1).to({graphics:mask_graphics_377,x:301.2068,y:304.25}).wait(1).to({graphics:mask_graphics_378,x:291.4,y:304.25}).wait(1).to({graphics:mask_graphics_379,x:264.0803,y:304.25}).wait(1).to({graphics:mask_graphics_380,x:240.9636,y:304.25}).wait(1).to({graphics:mask_graphics_381,x:222.05,y:304.25}).wait(1).to({graphics:mask_graphics_382,x:182.6531,y:304.25}).wait(1).to({graphics:mask_graphics_383,x:154.5125,y:304.25}).wait(1).to({graphics:mask_graphics_384,x:137.6281,y:304.25}).wait(1).to({graphics:mask_graphics_385,x:132,y:304.25}).wait(65));

	// image3
	this.instance_4 = new lib.image4_1();
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(371).to({_off:false},0).wait(79));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_335 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_1_graphics_336 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_1_graphics_338 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_339 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpOAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_1_graphics_340 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgHAUg");
	var mask_1_graphics_341 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_342 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_1_graphics_343 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_344 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL4/ZMBDuAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_1_graphics_345 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_1_graphics_346 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_1_graphics_347 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_1_graphics_348 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_349 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL4/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_1_graphics_350 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgHAUg");
	var mask_1_graphics_351 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_352 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_1_graphics_353 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpOAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_1_graphics_354 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_1_graphics_355 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_356 = new cjs.Graphics().p("EgqPAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_357 = new cjs.Graphics().p("EgrpAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_358 = new cjs.Graphics().p("Egs8AwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_359 = new cjs.Graphics().p("EguKAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_360 = new cjs.Graphics().p("EgvRAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_361 = new cjs.Graphics().p("EguXAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_362 = new cjs.Graphics().p("EgtiAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_363 = new cjs.Graphics().p("EgszAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_364 = new cjs.Graphics().p("EgsJAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_365 = new cjs.Graphics().p("EgrlAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_366 = new cjs.Graphics().p("EgrGAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_367 = new cjs.Graphics().p("EgqtAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_1_graphics_368 = new cjs.Graphics().p("EgqaAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_369 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_1_graphics_370 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_1_graphics_371 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(335).to({graphics:mask_1_graphics_335,x:164.25,y:307.3}).wait(1).to({graphics:mask_1_graphics_336,x:144.1833,y:307.3}).wait(1).to({graphics:mask_1_graphics_337,x:124.1167,y:307.3}).wait(1).to({graphics:mask_1_graphics_338,x:104.05,y:307.3}).wait(1).to({graphics:mask_1_graphics_339,x:83.9833,y:307.3}).wait(1).to({graphics:mask_1_graphics_340,x:63.9167,y:307.3}).wait(1).to({graphics:mask_1_graphics_341,x:43.85,y:307.3}).wait(1).to({graphics:mask_1_graphics_342,x:23.7833,y:307.3}).wait(1).to({graphics:mask_1_graphics_343,x:3.7167,y:307.3}).wait(1).to({graphics:mask_1_graphics_344,x:-16.35,y:307.3}).wait(1).to({graphics:mask_1_graphics_345,x:-36.4167,y:307.3}).wait(1).to({graphics:mask_1_graphics_346,x:-56.4833,y:307.3}).wait(1).to({graphics:mask_1_graphics_347,x:-76.55,y:307.3}).wait(1).to({graphics:mask_1_graphics_348,x:-96.6167,y:307.3}).wait(1).to({graphics:mask_1_graphics_349,x:-116.6833,y:307.3}).wait(1).to({graphics:mask_1_graphics_350,x:-136.75,y:307.3}).wait(1).to({graphics:mask_1_graphics_351,x:-162.1444,y:307.3}).wait(1).to({graphics:mask_1_graphics_352,x:-186.3,y:307.3}).wait(1).to({graphics:mask_1_graphics_353,x:-209.2169,y:307.3}).wait(1).to({graphics:mask_1_graphics_354,x:-230.895,y:307.3}).wait(1).to({graphics:mask_1_graphics_355,x:-251.3344,y:307.3}).wait(1).to({graphics:mask_1_graphics_356,x:-270.3925,y:307.3}).wait(1).to({graphics:mask_1_graphics_357,x:-279.3734,y:307.3}).wait(1).to({graphics:mask_1_graphics_358,x:-287.735,y:307.3}).wait(1).to({graphics:mask_1_graphics_359,x:-295.4772,y:307.3}).wait(1).to({graphics:mask_1_graphics_360,x:-302.6,y:307.3}).wait(1).to({graphics:mask_1_graphics_361,x:-296.7686,y:307.3}).wait(1).to({graphics:mask_1_graphics_362,x:-291.4926,y:307.3}).wait(1).to({graphics:mask_1_graphics_363,x:-286.7719,y:307.3}).wait(1).to({graphics:mask_1_graphics_364,x:-282.6066,y:307.3}).wait(1).to({graphics:mask_1_graphics_365,x:-278.9967,y:307.3}).wait(1).to({graphics:mask_1_graphics_366,x:-275.9421,y:307.3}).wait(1).to({graphics:mask_1_graphics_367,x:-273.443,y:307.3}).wait(1).to({graphics:mask_1_graphics_368,x:-271.4992,y:307.3}).wait(1).to({graphics:mask_1_graphics_369,x:-269.9715,y:307.3}).wait(1).to({graphics:mask_1_graphics_370,x:-268.3054,y:307.3}).wait(1).to({graphics:mask_1_graphics_371,x:-267.75,y:307.3}).wait(79));

	// text1_png
	this.instance_5 = new lib.text3_1();
	this.instance_5.setTransform(80,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(335).to({_off:false},0).to({_off:true},51).wait(64));

	// image_png
	this.instance_6 = new lib.image3_1();
	this.instance_6.setTransform(80,300,1,1,0,0,0,80,300);

	this.instance_7 = new lib.image1_1();
	this.instance_7.setTransform(80,300);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},335).to({state:[{t:this.instance_7}]},36).to({state:[]},15).wait(64));

	// lines
	this.instance_8 = new lib.lines();
	this.instance_8.setTransform(568.9,266.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(335).to({_off:false},0).to({x:268.9},15).to({x:68.9},10).to({x:-91.1},11).to({x:-411.1},14).to({_off:true},1).wait(64));

	// text3_png
	this.instance_9 = new lib.text3_1();
	this.instance_9.setTransform(140,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(279).to({_off:false},0).to({x:80,alpha:1},11,cjs.Ease.get(1)).to({_off:true},45).wait(115));

	// mask_img3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_265 = new cjs.Graphics().p("Egg5AviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_2_graphics_266 = new cjs.Graphics().p("Egi8AviMARMg5pIgKAAIJE/ZMAwCAAAInyT2IgHATIY7AAMgP6BEmIgHATg");
	var mask_2_graphics_267 = new cjs.Graphics().p("Egk1AviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_2_graphics_268 = new cjs.Graphics().p("EgmnAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgGATg");
	var mask_2_graphics_269 = new cjs.Graphics().p("EgomAviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_2_graphics_270 = new cjs.Graphics().p("EgqbAviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_2_graphics_271 = new cjs.Graphics().p("EgsGAviMARMg5pIgKAAIJE/ZMAwCAAAInyT2IgHATIY7AAMgP6BEmIgHATg");
	var mask_2_graphics_272 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgGATg");
	var mask_2_graphics_273 = new cjs.Graphics().p("EgtkAviMARLg5pIgKAAIJE/ZMAwCAAAInyT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_2_graphics_274 = new cjs.Graphics().p("EgtkAviMARMg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_2_graphics_275 = new cjs.Graphics().p("EgtkAviMARMg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_2_graphics_276 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY8AAMgP7BEmIgGATg");
	var mask_2_graphics_277 = new cjs.Graphics().p("EgtkAviMARLg5pIgKAAIJE/ZMAwCAAAInyT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_2_graphics_278 = new cjs.Graphics().p("EgtlAviMARNg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_2_graphics_279 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgHATg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(265).to({graphics:mask_2_graphics_265,x:372.875,y:304.25}).wait(1).to({graphics:mask_2_graphics_266,x:359.8456,y:304.25}).wait(1).to({graphics:mask_2_graphics_267,x:347.6706,y:304.25}).wait(1).to({graphics:mask_2_graphics_268,x:336.35,y:304.25}).wait(1).to({graphics:mask_2_graphics_269,x:323.5943,y:304.25}).wait(1).to({graphics:mask_2_graphics_270,x:311.8799,y:304.25}).wait(1).to({graphics:mask_2_graphics_271,x:301.2068,y:304.25}).wait(1).to({graphics:mask_2_graphics_272,x:291.4,y:304.25}).wait(1).to({graphics:mask_2_graphics_273,x:264.0803,y:304.25}).wait(1).to({graphics:mask_2_graphics_274,x:240.9636,y:304.25}).wait(1).to({graphics:mask_2_graphics_275,x:222.05,y:304.25}).wait(1).to({graphics:mask_2_graphics_276,x:182.6531,y:304.25}).wait(1).to({graphics:mask_2_graphics_277,x:154.5125,y:304.25}).wait(1).to({graphics:mask_2_graphics_278,x:137.6281,y:304.25}).wait(1).to({graphics:mask_2_graphics_279,x:132,y:304.25}).wait(56).to({graphics:null,x:0,y:0}).wait(115));

	// image3
	this.instance_10 = new lib.image3_1();
	this.instance_10.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(265).to({_off:false},0).to({_off:true},70).wait(115));

	// mask1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_229 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_3_graphics_230 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_231 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_3_graphics_232 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_233 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpOAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_3_graphics_234 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgHAUg");
	var mask_3_graphics_235 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_236 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_3_graphics_237 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_238 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL4/ZMBDuAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_3_graphics_239 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_3_graphics_240 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_3_graphics_241 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_3_graphics_242 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_243 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL4/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_3_graphics_244 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgHAUg");
	var mask_3_graphics_245 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_246 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_3_graphics_247 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpOAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_3_graphics_248 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_3_graphics_249 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_250 = new cjs.Graphics().p("EgqPAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_251 = new cjs.Graphics().p("EgrpAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_252 = new cjs.Graphics().p("Egs8AwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_253 = new cjs.Graphics().p("EguKAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_254 = new cjs.Graphics().p("EgvRAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_255 = new cjs.Graphics().p("EguXAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_256 = new cjs.Graphics().p("EgtiAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_257 = new cjs.Graphics().p("EgszAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_258 = new cjs.Graphics().p("EgsJAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_259 = new cjs.Graphics().p("EgrlAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_260 = new cjs.Graphics().p("EgrGAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_261 = new cjs.Graphics().p("EgqtAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_3_graphics_262 = new cjs.Graphics().p("EgqaAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_263 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_3_graphics_264 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_3_graphics_265 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_3_graphics_229,x:164.25,y:307.3}).wait(1).to({graphics:mask_3_graphics_230,x:144.1833,y:307.3}).wait(1).to({graphics:mask_3_graphics_231,x:124.1167,y:307.3}).wait(1).to({graphics:mask_3_graphics_232,x:104.05,y:307.3}).wait(1).to({graphics:mask_3_graphics_233,x:83.9833,y:307.3}).wait(1).to({graphics:mask_3_graphics_234,x:63.9167,y:307.3}).wait(1).to({graphics:mask_3_graphics_235,x:43.85,y:307.3}).wait(1).to({graphics:mask_3_graphics_236,x:23.7833,y:307.3}).wait(1).to({graphics:mask_3_graphics_237,x:3.7167,y:307.3}).wait(1).to({graphics:mask_3_graphics_238,x:-16.35,y:307.3}).wait(1).to({graphics:mask_3_graphics_239,x:-36.4167,y:307.3}).wait(1).to({graphics:mask_3_graphics_240,x:-56.4833,y:307.3}).wait(1).to({graphics:mask_3_graphics_241,x:-76.55,y:307.3}).wait(1).to({graphics:mask_3_graphics_242,x:-96.6167,y:307.3}).wait(1).to({graphics:mask_3_graphics_243,x:-116.6833,y:307.3}).wait(1).to({graphics:mask_3_graphics_244,x:-136.75,y:307.3}).wait(1).to({graphics:mask_3_graphics_245,x:-162.1444,y:307.3}).wait(1).to({graphics:mask_3_graphics_246,x:-186.3,y:307.3}).wait(1).to({graphics:mask_3_graphics_247,x:-209.2169,y:307.3}).wait(1).to({graphics:mask_3_graphics_248,x:-230.895,y:307.3}).wait(1).to({graphics:mask_3_graphics_249,x:-251.3344,y:307.3}).wait(1).to({graphics:mask_3_graphics_250,x:-270.3925,y:307.3}).wait(1).to({graphics:mask_3_graphics_251,x:-279.3734,y:307.3}).wait(1).to({graphics:mask_3_graphics_252,x:-287.735,y:307.3}).wait(1).to({graphics:mask_3_graphics_253,x:-295.4772,y:307.3}).wait(1).to({graphics:mask_3_graphics_254,x:-302.6,y:307.3}).wait(1).to({graphics:mask_3_graphics_255,x:-296.7686,y:307.3}).wait(1).to({graphics:mask_3_graphics_256,x:-291.4926,y:307.3}).wait(1).to({graphics:mask_3_graphics_257,x:-286.7719,y:307.3}).wait(1).to({graphics:mask_3_graphics_258,x:-282.6066,y:307.3}).wait(1).to({graphics:mask_3_graphics_259,x:-278.9967,y:307.3}).wait(1).to({graphics:mask_3_graphics_260,x:-275.9421,y:307.3}).wait(1).to({graphics:mask_3_graphics_261,x:-273.443,y:307.3}).wait(1).to({graphics:mask_3_graphics_262,x:-271.4992,y:307.3}).wait(1).to({graphics:mask_3_graphics_263,x:-269.9715,y:307.3}).wait(1).to({graphics:mask_3_graphics_264,x:-268.3054,y:307.3}).wait(1).to({graphics:mask_3_graphics_265,x:-267.75,y:307.3}).wait(15).to({graphics:null,x:0,y:0}).wait(170));

	// text1_png
	this.instance_11 = new lib.text2_1();
	this.instance_11.setTransform(80,300);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(229).to({_off:false},0).to({_off:true},51).wait(170));

	// image_png
	this.instance_12 = new lib.image2();

	this.instance_13 = new lib.image1_1();
	this.instance_13.setTransform(80,300);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},229).to({state:[{t:this.instance_13}]},36).to({state:[]},15).wait(170));

	// lines
	this.instance_14 = new lib.lines();
	this.instance_14.setTransform(568.9,266.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(229).to({_off:false},0).to({x:268.9},15).to({x:68.9},10).to({x:-91.1},11).to({x:-411.1},14).to({_off:true},1).wait(170));

	// text2_png
	this.instance_15 = new lib.text2_1();
	this.instance_15.setTransform(140,300);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(149).to({_off:false},0).to({x:80,alpha:1},10,cjs.Ease.get(1)).to({_off:true},70).wait(221));

	// mask_img2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_135 = new cjs.Graphics().p("Egg5AviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_4_graphics_136 = new cjs.Graphics().p("Egi8AviMARMg5pIgKAAIJE/ZMAwCAAAInyT2IgHATIY7AAMgP6BEmIgHATg");
	var mask_4_graphics_137 = new cjs.Graphics().p("Egk1AviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_4_graphics_138 = new cjs.Graphics().p("EgmnAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgGATg");
	var mask_4_graphics_139 = new cjs.Graphics().p("EgomAviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_4_graphics_140 = new cjs.Graphics().p("EgqbAviMARMg5pIgKAAIJE/ZMAwCAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_4_graphics_141 = new cjs.Graphics().p("EgsGAviMARMg5pIgKAAIJE/ZMAwCAAAInyT2IgHATIY7AAMgP6BEmIgHATg");
	var mask_4_graphics_142 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgGATg");
	var mask_4_graphics_143 = new cjs.Graphics().p("EgtkAviMARLg5pIgKAAIJE/ZMAwCAAAInyT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_4_graphics_144 = new cjs.Graphics().p("EgtkAviMARMg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_4_graphics_145 = new cjs.Graphics().p("EgtkAviMARMg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_4_graphics_146 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY8AAMgP7BEmIgGATg");
	var mask_4_graphics_147 = new cjs.Graphics().p("EgtkAviMARLg5pIgKAAIJE/ZMAwCAAAInyT2IgGATIY6AAMgP6BEmIgHATg");
	var mask_4_graphics_148 = new cjs.Graphics().p("EgtlAviMARNg5pIgKAAIJD/ZMAwDAAAInzT2IgGATIY7AAMgP7BEmIgGATg");
	var mask_4_graphics_149 = new cjs.Graphics().p("EgtlAviMARMg5pIgKAAIJF/ZMAwBAAAInyT2IgHATIY7AAMgP6BEmIgHATg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_4_graphics_135,x:372.875,y:304.25}).wait(1).to({graphics:mask_4_graphics_136,x:359.8456,y:304.25}).wait(1).to({graphics:mask_4_graphics_137,x:347.6706,y:304.25}).wait(1).to({graphics:mask_4_graphics_138,x:336.35,y:304.25}).wait(1).to({graphics:mask_4_graphics_139,x:323.5943,y:304.25}).wait(1).to({graphics:mask_4_graphics_140,x:311.8799,y:304.25}).wait(1).to({graphics:mask_4_graphics_141,x:301.2068,y:304.25}).wait(1).to({graphics:mask_4_graphics_142,x:291.4,y:304.25}).wait(1).to({graphics:mask_4_graphics_143,x:264.0803,y:304.25}).wait(1).to({graphics:mask_4_graphics_144,x:240.9636,y:304.25}).wait(1).to({graphics:mask_4_graphics_145,x:222.05,y:304.25}).wait(1).to({graphics:mask_4_graphics_146,x:182.6531,y:304.25}).wait(1).to({graphics:mask_4_graphics_147,x:154.5125,y:304.25}).wait(1).to({graphics:mask_4_graphics_148,x:137.6281,y:304.25}).wait(1).to({graphics:mask_4_graphics_149,x:132,y:304.25}).wait(80).to({graphics:null,x:0,y:0}).wait(221));

	// image2
	this.instance_16 = new lib.image2_1();
	this.instance_16.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(135).to({_off:false},0).to({_off:true},94).wait(221));

	// mask1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_99 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_5_graphics_100 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_101 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_5_graphics_102 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_103 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpOAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_5_graphics_104 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgHAUg");
	var mask_5_graphics_105 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_106 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_5_graphics_107 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_108 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL4/ZMBDuAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_5_graphics_109 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_5_graphics_110 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_5_graphics_111 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgGAUg");
	var mask_5_graphics_112 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_113 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL4/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_5_graphics_114 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAQAAMgP7A09IgHAUg");
	var mask_5_graphics_115 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_116 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_5_graphics_117 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpOAAIL5/ZMBDuAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_5_graphics_118 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");
	var mask_5_graphics_119 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_120 = new cjs.Graphics().p("EgqPAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_121 = new cjs.Graphics().p("EgrpAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_122 = new cjs.Graphics().p("Egs8AwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_123 = new cjs.Graphics().p("EguKAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_124 = new cjs.Graphics().p("EgvRAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_125 = new cjs.Graphics().p("EguXAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_126 = new cjs.Graphics().p("EgtiAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_127 = new cjs.Graphics().p("EgszAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_128 = new cjs.Graphics().p("EgsJAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_129 = new cjs.Graphics().p("EgrlAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_130 = new cjs.Graphics().p("EgrGAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_131 = new cjs.Graphics().p("EgqtAwBMAOEgqCIpOAAIL4/ZMBDuAAAImPT2IgGAUIAPAAMgP7A09IgGAUg");
	var mask_5_graphics_132 = new cjs.Graphics().p("EgqaAwBMAOEgqCIpOAAIL4/ZMBDuAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_133 = new cjs.Graphics().p("EgqNAwBMAOEgqCIpPAAIL5/ZMBDtAAAImOT2IgHAUIAPAAMgP6A09IgHAUg");
	var mask_5_graphics_134 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgHAUg");
	var mask_5_graphics_135 = new cjs.Graphics().p("EgqOAwBMAOEgqCIpNAAIL3/ZMBDvAAAImPT2IgGAUIAOAAMgP6A09IgGAUg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_5_graphics_99,x:164.25,y:307.3}).wait(1).to({graphics:mask_5_graphics_100,x:144.1833,y:307.3}).wait(1).to({graphics:mask_5_graphics_101,x:124.1167,y:307.3}).wait(1).to({graphics:mask_5_graphics_102,x:104.05,y:307.3}).wait(1).to({graphics:mask_5_graphics_103,x:83.9833,y:307.3}).wait(1).to({graphics:mask_5_graphics_104,x:63.9167,y:307.3}).wait(1).to({graphics:mask_5_graphics_105,x:43.85,y:307.3}).wait(1).to({graphics:mask_5_graphics_106,x:23.7833,y:307.3}).wait(1).to({graphics:mask_5_graphics_107,x:3.7167,y:307.3}).wait(1).to({graphics:mask_5_graphics_108,x:-16.35,y:307.3}).wait(1).to({graphics:mask_5_graphics_109,x:-36.4167,y:307.3}).wait(1).to({graphics:mask_5_graphics_110,x:-56.4833,y:307.3}).wait(1).to({graphics:mask_5_graphics_111,x:-76.55,y:307.3}).wait(1).to({graphics:mask_5_graphics_112,x:-96.6167,y:307.3}).wait(1).to({graphics:mask_5_graphics_113,x:-116.6833,y:307.3}).wait(1).to({graphics:mask_5_graphics_114,x:-136.75,y:307.3}).wait(1).to({graphics:mask_5_graphics_115,x:-162.1444,y:307.3}).wait(1).to({graphics:mask_5_graphics_116,x:-186.3,y:307.3}).wait(1).to({graphics:mask_5_graphics_117,x:-209.2169,y:307.3}).wait(1).to({graphics:mask_5_graphics_118,x:-230.895,y:307.3}).wait(1).to({graphics:mask_5_graphics_119,x:-251.3344,y:307.3}).wait(1).to({graphics:mask_5_graphics_120,x:-270.3925,y:307.3}).wait(1).to({graphics:mask_5_graphics_121,x:-279.3734,y:307.3}).wait(1).to({graphics:mask_5_graphics_122,x:-287.735,y:307.3}).wait(1).to({graphics:mask_5_graphics_123,x:-295.4772,y:307.3}).wait(1).to({graphics:mask_5_graphics_124,x:-302.6,y:307.3}).wait(1).to({graphics:mask_5_graphics_125,x:-296.7686,y:307.3}).wait(1).to({graphics:mask_5_graphics_126,x:-291.4926,y:307.3}).wait(1).to({graphics:mask_5_graphics_127,x:-286.7719,y:307.3}).wait(1).to({graphics:mask_5_graphics_128,x:-282.6066,y:307.3}).wait(1).to({graphics:mask_5_graphics_129,x:-278.9967,y:307.3}).wait(1).to({graphics:mask_5_graphics_130,x:-275.9421,y:307.3}).wait(1).to({graphics:mask_5_graphics_131,x:-273.443,y:307.3}).wait(1).to({graphics:mask_5_graphics_132,x:-271.4992,y:307.3}).wait(1).to({graphics:mask_5_graphics_133,x:-269.9715,y:307.3}).wait(1).to({graphics:mask_5_graphics_134,x:-268.3054,y:307.3}).wait(1).to({graphics:mask_5_graphics_135,x:-267.75,y:307.3}).wait(15).to({graphics:null,x:0,y:0}).wait(300));

	// text1_png
	this.instance_17 = new lib.text1_1();
	this.instance_17.setTransform(120,300);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({_off:false},0).to({x:80,alpha:1},14,cjs.Ease.get(1)).wait(69).to({_off:true},51).wait(300));

	// image_png
	this.instance_18 = new lib.image1_1();
	this.instance_18.setTransform(80,300);
	this.instance_18.alpha = 0;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},9,cjs.Ease.get(1)).wait(126).to({_off:true},15).wait(300));

	// lines
	this.instance_19 = new lib.lines();
	this.instance_19.setTransform(568.9,266.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(99).to({_off:false},0).to({x:268.9},15).to({x:68.9},10).to({x:-91.1},11).to({x:-411.1},14).to({_off:true},1).wait(300));

	// bg_jpg
	this.instance_20 = new lib.bg_1();
	this.instance_20.setTransform(80,300);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},9,cjs.Ease.get(1)).wait(441));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-696.5,299,1666.9,302);
// library properties:
lib.properties = {
	id: '2EB259B39DF5DB4297769293DA46049D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/cta.png", id:"cta"},
		{src:"images/image1.png", id:"image1"},
		{src:"images/image2.png", id:"image2"},
		{src:"images/image3.png", id:"image3"},
		{src:"images/image4.png", id:"image4"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/logo2.png", id:"logo2"},
		{src:"images/text1.png", id:"text1"},
		{src:"images/text2.png", id:"text2"},
		{src:"images/text3.png", id:"text3"},
		{src:"images/text4.png", id:"text4"}
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
an.compositions['2EB259B39DF5DB4297769293DA46049D'] = {
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