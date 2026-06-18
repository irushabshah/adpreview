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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F1_T1 = function() {
	this.initialize(img.F1_T1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F1_T2 = function() {
	this.initialize(img.F1_T2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F1_T3 = function() {
	this.initialize(img.F1_T3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F2_BG = function() {
	this.initialize(img.F2_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F2_T1 = function() {
	this.initialize(img.F2_T1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F2_T2 = function() {
	this.initialize(img.F2_T2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F3_T1 = function() {
	this.initialize(img.F3_T1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.F4_T1 = function() {
	this.initialize(img.F4_T1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.FallingBrown = function() {
	this.initialize(img.FallingBrown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,147);


(lib.FallingYellow = function() {
	this.initialize(img.FallingYellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,147);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.Falling_Yellow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FallingYellow();
	this.instance.setTransform(-66,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-73.5,132,147);


(lib.Falling_Brown_png = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FallingBrown();
	this.instance.setTransform(-66,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-73.5,132,147);


(lib.F4_T1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F4_T1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F3_T1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F3_T1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F2_T2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F2_T2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F2_T1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F2_T1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F2_BG_png = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F2_BG();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F1_T3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F1_T3();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F1_T2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F1_T2();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.F1_T1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.F1_T1();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.BG_1 = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-80,-300,300,600);


(lib.fall_yellowcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Falling_Brown_png
	this.instance = new lib.Falling_Brown_png("synched",0);
	this.instance.setTransform(-0.05,-362.65,1,1,-59.9992,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-58.7449,x:-0.0013,y:-350.2302},0).wait(1).to({rotation:-57.4994,x:-0.0026,y:-338.0465},0).wait(1).to({rotation:-56.2626,x:-0.0039,y:-325.949},0).wait(1).to({rotation:-55.0347,x:-0.0053,y:-313.9376},0).wait(1).to({rotation:-53.8156,x:-0.0066,y:-302.0124},0).wait(1).to({rotation:-52.6053,x:-0.008,y:-290.1733},0).wait(1).to({rotation:-51.4038,x:-0.0094,y:-278.4204},0).wait(1).to({rotation:-50.2111,x:-0.0108,y:-266.7536},0).wait(1).to({rotation:-49.0272,x:-0.0122,y:-255.173},0).wait(1).to({rotation:-47.8521,x:-0.0136,y:-243.6785},0).wait(1).to({rotation:-46.6858,x:-0.015,y:-232.2702},0).wait(1).to({rotation:-45.5283,x:-0.0164,y:-220.948},0).wait(1).to({rotation:-44.3796,x:-0.0179,y:-209.7119},0).wait(1).to({rotation:-43.2397,x:-0.0193,y:-198.562},0).wait(1).to({rotation:-42.1086,x:-0.0207,y:-187.4982},0).wait(1).to({rotation:-40.9863,x:-0.0222,y:-176.5206},0).wait(1).to({rotation:-39.8729,x:-0.0236,y:-165.6291},0).wait(1).to({rotation:-38.7682,x:-0.025,y:-154.8237},0).wait(1).to({rotation:-37.6723,x:-0.0264,y:-144.1045},0).wait(1).to({rotation:-36.5852,x:-0.0279,y:-133.4714},0).wait(1).to({rotation:-35.507,x:-0.0293,y:-122.9245},0).wait(1).to({rotation:-34.4375,x:-0.0307,y:-112.4637},0).wait(1).to({rotation:-33.3768,x:-0.0321,y:-102.089},0).wait(1).to({rotation:-32.3249,x:-0.0335,y:-91.8005},0).wait(1).to({rotation:-31.2819,x:-0.0349,y:-81.5981},0).wait(1).to({rotation:-30.2476,x:-0.0363,y:-71.4818},0).wait(1).to({rotation:-29.2221,x:-0.0376,y:-61.4517},0).wait(1).to({rotation:-28.2055,x:-0.039,y:-51.5077},0).wait(1).to({rotation:-27.1976,x:-0.0404,y:-41.6498},0).wait(1).to({rotation:-26.1986,x:-0.0417,y:-31.8781},0).wait(1).to({rotation:-25.2083,x:-0.043,y:-22.1924},0).wait(1).to({rotation:-24.2269,x:-0.0443,y:-12.5929},0).wait(1).to({rotation:-23.2542,x:-0.0456,y:-3.0796},0).wait(1).to({rotation:-22.2904,x:-0.0469,y:6.3477},0).wait(1).to({rotation:-21.3353,x:-0.0482,y:15.6888},0).wait(1).to({rotation:-20.3891,x:-0.0495,y:24.9438},0).wait(1).to({rotation:-19.4517,x:-0.0507,y:34.1126},0).wait(1).to({rotation:-18.523,x:-0.0519,y:43.1954},0).wait(1).to({rotation:-17.6032,x:-0.0532,y:52.192},0).wait(1).to({rotation:-16.6922,x:-0.0544,y:61.1025},0).wait(1).to({rotation:-15.7899,x:-0.0555,y:69.9269},0).wait(1).to({rotation:-14.8965,x:-0.0567,y:78.6652},0).wait(1).to({rotation:-14.0119,x:-0.0578,y:87.3173},0).wait(1).to({rotation:-13.136,x:-0.059,y:95.8834},0).wait(1).to({rotation:-12.269,x:-0.0601,y:104.3633},0).wait(1).to({rotation:-11.4108,x:-0.0612,y:112.7571},0).wait(1).to({rotation:-10.5614,x:-0.0623,y:121.0648},0).wait(1).to({rotation:-9.7208,x:-0.0633,y:129.2863},0).wait(1).to({rotation:-8.889,x:-0.0644,y:137.4218},0).wait(1).to({rotation:-8.066,x:-0.0654,y:145.4712},0).wait(1).to({rotation:-7.2517,x:-0.0664,y:153.4344},0).wait(1).to({rotation:-6.4463,x:-0.0674,y:161.3115},0).wait(1).to({rotation:-5.6497,x:-0.0684,y:169.1025},0).wait(1).to({rotation:-4.8619,x:-0.0693,y:176.8075},0).wait(1).to({rotation:-4.0829,x:-0.0702,y:184.4263},0).wait(1).to({rotation:-3.3127,x:-0.0712,y:191.959},0).wait(1).to({rotation:-2.5513,x:-0.0721,y:199.4055},0).wait(1).to({rotation:-1.7988,x:-0.0729,y:206.766},0).wait(1).to({rotation:-1.055,x:-0.0738,y:214.0404},0).wait(1).to({rotation:-0.32,x:-0.0746,y:221.2287},0).wait(1).to({rotation:0.4062,x:-0.0755,y:228.3309},0).wait(1).to({rotation:1.1236,x:-0.0763,y:235.3469},0).wait(1).to({rotation:1.8322,x:-0.0771,y:242.2769},0).wait(1).to({rotation:2.5319,x:-0.0778,y:249.1208},0).wait(1).to({rotation:3.2229,x:-0.0786,y:255.8785},0).wait(1).to({rotation:3.9051,x:-0.0793,y:262.5502},0).wait(1).to({rotation:4.5785,x:-0.08,y:269.1358},0).wait(1).to({rotation:5.243,x:-0.0807,y:275.6352},0).wait(1).to({rotation:5.8988,x:-0.0814,y:282.0486},0).wait(1).to({rotation:6.5458,x:-0.0821,y:288.3759},0).wait(1).to({rotation:7.1839,x:-0.0827,y:294.6171},0).wait(1).to({rotation:7.8133,x:-0.0834,y:300.7721},0).wait(1).to({rotation:8.4339,x:-0.084,y:306.8411},0).wait(1).to({rotation:9.0456,x:-0.0846,y:312.824},0).wait(1).to({rotation:9.6486,x:-0.0852,y:318.7208},0).wait(1).to({rotation:10.2427,x:-0.0857,y:324.5315},0).wait(1).to({rotation:10.8281,x:-0.0863,y:330.2561},0).wait(1).to({rotation:11.4046,x:-0.0868,y:335.8946},0).wait(1).to({rotation:11.9724,x:-0.0874,y:341.447},0).wait(1).to({rotation:12.5313,x:-0.0879,y:346.9134},0).wait(1).to({rotation:13.0814,x:-0.0884,y:352.2936},0).wait(1).to({rotation:13.6228,x:-0.0888,y:357.5878},0).wait(1).to({rotation:14.1553,x:-0.0893,y:362.7958},0).wait(1).to({rotation:14.679,x:-0.0898,y:367.9178},0).wait(1).to({rotation:15.194,x:-0.0902,y:372.9536},0).wait(1).to({rotation:15.7001,x:-0.0906,y:377.9034},0).wait(1).to({rotation:16.1974,x:-0.091,y:382.7671},0).wait(1).to({rotation:16.686,x:-0.0914,y:387.5447},0).wait(1).to({rotation:17.1657,x:-0.0918,y:392.2362},0).wait(1).to({rotation:17.6366,x:-0.0922,y:396.8417},0).wait(1).to({rotation:18.0987,x:-0.0926,y:401.361},0).wait(1).to({rotation:18.552,x:-0.0929,y:405.7942},0).wait(1).to({rotation:18.9965,x:-0.0932,y:410.1414},0).wait(1).to({rotation:19.4323,x:-0.0936,y:414.4025},0).wait(1).to({rotation:19.8592,x:-0.0939,y:418.5775},0).wait(1).to({rotation:20.2773,x:-0.0942,y:422.6664},0).wait(1).to({rotation:20.6866,x:-0.0945,y:426.6692},0).wait(1).to({rotation:21.0871,x:-0.0948,y:430.5859},0).wait(1).to({rotation:21.4788,x:-0.095,y:434.4166},0).wait(1).to({rotation:21.8617,x:-0.0953,y:438.1611},0).wait(1).to({rotation:22.2358,x:-0.0956,y:441.8196},0).wait(1).to({rotation:22.6011,x:-0.0958,y:445.392},0).wait(1).to({rotation:22.9576,x:-0.096,y:448.8783},0).wait(1).to({rotation:23.3052,x:-0.0963,y:452.2785},0).wait(1).to({rotation:23.6441,x:-0.0965,y:455.5927},0).wait(1).to({rotation:23.9742,x:-0.0967,y:458.8207},0).wait(1).to({rotation:24.2955,x:-0.0969,y:461.9627},0).wait(1).to({rotation:24.608,x:-0.0971,y:465.0186},0).wait(1).to({rotation:24.9117,x:-0.0973,y:467.9884},0).wait(1).to({rotation:25.2065,x:-0.0975,y:470.8721},0).wait(1).to({rotation:25.4926,x:-0.0976,y:473.6697},0).wait(1).to({rotation:25.7699,x:-0.0978,y:476.3813},0).wait(1).to({rotation:26.0383,x:-0.0979,y:479.0067},0).wait(1).to({rotation:26.298,x:-0.0981,y:481.5461},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:26.5489,x:-0.0982,y:483.9994},0).wait(1).to({scaleX:1,scaleY:1,rotation:26.7909,x:-0.0984,y:486.3667},0).wait(1).to({rotation:27.0242,x:-0.0985,y:488.6478},0).wait(1).to({rotation:27.2487,x:-0.0986,y:490.8429},0).wait(1).to({rotation:27.4643,x:-0.0987,y:492.9518},0).wait(1).to({rotation:27.6712,x:-0.0988,y:494.9747},0).wait(1).to({rotation:27.8692,x:-0.0989,y:496.9116},0).wait(1).to({rotation:28.0585,x:-0.099,y:498.7623},0).wait(1).to({rotation:28.2389,x:-0.0991,y:500.5269},0).wait(1).to({rotation:28.4105,x:-0.0992,y:502.2055},0).wait(1).to({rotation:28.5734,x:-0.0993,y:503.798},0).wait(1).to({rotation:28.7274,x:-0.0994,y:505.3044},0).wait(1).to({rotation:28.8727,x:-0.0995,y:506.7247},0).wait(1).to({rotation:29.0091,y:508.059},0).wait(1).to({rotation:29.1367,x:-0.0996,y:509.3072},0).wait(1).to({rotation:29.2556,y:510.4692},0).wait(1).to({rotation:29.3656,x:-0.0997,y:511.5453},0).wait(1).to({rotation:29.4668,y:512.5352},0).wait(1).to({rotation:29.5592,x:-0.0998,y:513.439},0).wait(1).to({rotation:29.6429,y:514.2568},0).wait(1).to({rotation:29.7177,x:-0.0999,y:514.9885},0).wait(1).to({rotation:29.7837,y:515.6341},0).wait(1).to({rotation:29.8409,y:516.1936},0).wait(1).to({rotation:29.8893,y:516.667},0).wait(1).to({rotation:29.9289,x:-0.1,y:517.0544},0).wait(1).to({rotation:29.9597,y:517.3557},0).wait(1).to({rotation:29.9817,y:517.5709},0).wait(1).to({regX:0.1,regY:-0.1,rotation:29.995,x:0.05,y:517.65},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.7,-456.3,197.5,1070.7);


(lib.fall_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Falling_Yellow
	this.instance = new lib.Falling_Yellow("synched",0);
	this.instance.setTransform(-0.05,-362.65,1,1,-59.9992,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-58.7449,x:-0.0013,y:-350.2302},0).wait(1).to({rotation:-57.4994,x:-0.0026,y:-338.0465},0).wait(1).to({rotation:-56.2626,x:-0.0039,y:-325.949},0).wait(1).to({rotation:-55.0347,x:-0.0053,y:-313.9376},0).wait(1).to({rotation:-53.8156,x:-0.0066,y:-302.0124},0).wait(1).to({rotation:-52.6053,x:-0.008,y:-290.1733},0).wait(1).to({rotation:-51.4038,x:-0.0094,y:-278.4204},0).wait(1).to({rotation:-50.2111,x:-0.0108,y:-266.7536},0).wait(1).to({rotation:-49.0272,x:-0.0122,y:-255.173},0).wait(1).to({rotation:-47.8521,x:-0.0136,y:-243.6785},0).wait(1).to({rotation:-46.6858,x:-0.015,y:-232.2702},0).wait(1).to({rotation:-45.5283,x:-0.0164,y:-220.948},0).wait(1).to({rotation:-44.3796,x:-0.0179,y:-209.7119},0).wait(1).to({rotation:-43.2397,x:-0.0193,y:-198.562},0).wait(1).to({rotation:-42.1086,x:-0.0207,y:-187.4982},0).wait(1).to({rotation:-40.9863,x:-0.0222,y:-176.5206},0).wait(1).to({rotation:-39.8729,x:-0.0236,y:-165.6291},0).wait(1).to({rotation:-38.7682,x:-0.025,y:-154.8237},0).wait(1).to({rotation:-37.6723,x:-0.0264,y:-144.1045},0).wait(1).to({rotation:-36.5852,x:-0.0279,y:-133.4714},0).wait(1).to({rotation:-35.507,x:-0.0293,y:-122.9245},0).wait(1).to({rotation:-34.4375,x:-0.0307,y:-112.4637},0).wait(1).to({rotation:-33.3768,x:-0.0321,y:-102.089},0).wait(1).to({rotation:-32.3249,x:-0.0335,y:-91.8005},0).wait(1).to({rotation:-31.2819,x:-0.0349,y:-81.5981},0).wait(1).to({rotation:-30.2476,x:-0.0363,y:-71.4818},0).wait(1).to({rotation:-29.2221,x:-0.0376,y:-61.4517},0).wait(1).to({rotation:-28.2055,x:-0.039,y:-51.5077},0).wait(1).to({rotation:-27.1976,x:-0.0404,y:-41.6498},0).wait(1).to({rotation:-26.1986,x:-0.0417,y:-31.8781},0).wait(1).to({rotation:-25.2083,x:-0.043,y:-22.1924},0).wait(1).to({rotation:-24.2269,x:-0.0443,y:-12.5929},0).wait(1).to({rotation:-23.2542,x:-0.0456,y:-3.0796},0).wait(1).to({rotation:-22.2904,x:-0.0469,y:6.3477},0).wait(1).to({rotation:-21.3353,x:-0.0482,y:15.6888},0).wait(1).to({rotation:-20.3891,x:-0.0495,y:24.9438},0).wait(1).to({rotation:-19.4517,x:-0.0507,y:34.1126},0).wait(1).to({rotation:-18.523,x:-0.0519,y:43.1954},0).wait(1).to({rotation:-17.6032,x:-0.0532,y:52.192},0).wait(1).to({rotation:-16.6922,x:-0.0544,y:61.1025},0).wait(1).to({rotation:-15.7899,x:-0.0555,y:69.9269},0).wait(1).to({rotation:-14.8965,x:-0.0567,y:78.6652},0).wait(1).to({rotation:-14.0119,x:-0.0578,y:87.3173},0).wait(1).to({rotation:-13.136,x:-0.059,y:95.8834},0).wait(1).to({rotation:-12.269,x:-0.0601,y:104.3633},0).wait(1).to({rotation:-11.4108,x:-0.0612,y:112.7571},0).wait(1).to({rotation:-10.5614,x:-0.0623,y:121.0648},0).wait(1).to({rotation:-9.7208,x:-0.0633,y:129.2863},0).wait(1).to({rotation:-8.889,x:-0.0644,y:137.4218},0).wait(1).to({rotation:-8.066,x:-0.0654,y:145.4712},0).wait(1).to({rotation:-7.2517,x:-0.0664,y:153.4344},0).wait(1).to({rotation:-6.4463,x:-0.0674,y:161.3115},0).wait(1).to({rotation:-5.6497,x:-0.0684,y:169.1025},0).wait(1).to({rotation:-4.8619,x:-0.0693,y:176.8075},0).wait(1).to({rotation:-4.0829,x:-0.0702,y:184.4263},0).wait(1).to({rotation:-3.3127,x:-0.0712,y:191.959},0).wait(1).to({rotation:-2.5513,x:-0.0721,y:199.4055},0).wait(1).to({rotation:-1.7988,x:-0.0729,y:206.766},0).wait(1).to({rotation:-1.055,x:-0.0738,y:214.0404},0).wait(1).to({rotation:-0.32,x:-0.0746,y:221.2287},0).wait(1).to({rotation:0.4062,x:-0.0755,y:228.3309},0).wait(1).to({rotation:1.1236,x:-0.0763,y:235.3469},0).wait(1).to({rotation:1.8322,x:-0.0771,y:242.2769},0).wait(1).to({rotation:2.5319,x:-0.0778,y:249.1208},0).wait(1).to({rotation:3.2229,x:-0.0786,y:255.8785},0).wait(1).to({rotation:3.9051,x:-0.0793,y:262.5502},0).wait(1).to({rotation:4.5785,x:-0.08,y:269.1358},0).wait(1).to({rotation:5.243,x:-0.0807,y:275.6352},0).wait(1).to({rotation:5.8988,x:-0.0814,y:282.0486},0).wait(1).to({rotation:6.5458,x:-0.0821,y:288.3759},0).wait(1).to({rotation:7.1839,x:-0.0827,y:294.6171},0).wait(1).to({rotation:7.8133,x:-0.0834,y:300.7721},0).wait(1).to({rotation:8.4339,x:-0.084,y:306.8411},0).wait(1).to({rotation:9.0456,x:-0.0846,y:312.824},0).wait(1).to({rotation:9.6486,x:-0.0852,y:318.7208},0).wait(1).to({rotation:10.2427,x:-0.0857,y:324.5315},0).wait(1).to({rotation:10.8281,x:-0.0863,y:330.2561},0).wait(1).to({rotation:11.4046,x:-0.0868,y:335.8946},0).wait(1).to({rotation:11.9724,x:-0.0874,y:341.447},0).wait(1).to({rotation:12.5313,x:-0.0879,y:346.9134},0).wait(1).to({rotation:13.0814,x:-0.0884,y:352.2936},0).wait(1).to({rotation:13.6228,x:-0.0888,y:357.5878},0).wait(1).to({rotation:14.1553,x:-0.0893,y:362.7958},0).wait(1).to({rotation:14.679,x:-0.0898,y:367.9178},0).wait(1).to({rotation:15.194,x:-0.0902,y:372.9536},0).wait(1).to({rotation:15.7001,x:-0.0906,y:377.9034},0).wait(1).to({rotation:16.1974,x:-0.091,y:382.7671},0).wait(1).to({rotation:16.686,x:-0.0914,y:387.5447},0).wait(1).to({rotation:17.1657,x:-0.0918,y:392.2362},0).wait(1).to({rotation:17.6366,x:-0.0922,y:396.8417},0).wait(1).to({rotation:18.0987,x:-0.0926,y:401.361},0).wait(1).to({rotation:18.552,x:-0.0929,y:405.7942},0).wait(1).to({rotation:18.9965,x:-0.0932,y:410.1414},0).wait(1).to({rotation:19.4323,x:-0.0936,y:414.4025},0).wait(1).to({rotation:19.8592,x:-0.0939,y:418.5775},0).wait(1).to({rotation:20.2773,x:-0.0942,y:422.6664},0).wait(1).to({rotation:20.6866,x:-0.0945,y:426.6692},0).wait(1).to({rotation:21.0871,x:-0.0948,y:430.5859},0).wait(1).to({rotation:21.4788,x:-0.095,y:434.4166},0).wait(1).to({rotation:21.8617,x:-0.0953,y:438.1611},0).wait(1).to({rotation:22.2358,x:-0.0956,y:441.8196},0).wait(1).to({rotation:22.6011,x:-0.0958,y:445.392},0).wait(1).to({rotation:22.9576,x:-0.096,y:448.8783},0).wait(1).to({rotation:23.3052,x:-0.0963,y:452.2785},0).wait(1).to({rotation:23.6441,x:-0.0965,y:455.5927},0).wait(1).to({rotation:23.9742,x:-0.0967,y:458.8207},0).wait(1).to({rotation:24.2955,x:-0.0969,y:461.9627},0).wait(1).to({rotation:24.608,x:-0.0971,y:465.0186},0).wait(1).to({rotation:24.9117,x:-0.0973,y:467.9884},0).wait(1).to({rotation:25.2065,x:-0.0975,y:470.8721},0).wait(1).to({rotation:25.4926,x:-0.0976,y:473.6697},0).wait(1).to({rotation:25.7699,x:-0.0978,y:476.3813},0).wait(1).to({rotation:26.0383,x:-0.0979,y:479.0067},0).wait(1).to({rotation:26.298,x:-0.0981,y:481.5461},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:26.5489,x:-0.0982,y:483.9994},0).wait(1).to({scaleX:1,scaleY:1,rotation:26.7909,x:-0.0984,y:486.3667},0).wait(1).to({rotation:27.0242,x:-0.0985,y:488.6478},0).wait(1).to({rotation:27.2487,x:-0.0986,y:490.8429},0).wait(1).to({rotation:27.4643,x:-0.0987,y:492.9518},0).wait(1).to({rotation:27.6712,x:-0.0988,y:494.9747},0).wait(1).to({rotation:27.8692,x:-0.0989,y:496.9116},0).wait(1).to({rotation:28.0585,x:-0.099,y:498.7623},0).wait(1).to({rotation:28.2389,x:-0.0991,y:500.5269},0).wait(1).to({rotation:28.4105,x:-0.0992,y:502.2055},0).wait(1).to({rotation:28.5734,x:-0.0993,y:503.798},0).wait(1).to({rotation:28.7274,x:-0.0994,y:505.3044},0).wait(1).to({rotation:28.8727,x:-0.0995,y:506.7247},0).wait(1).to({rotation:29.0091,y:508.059},0).wait(1).to({rotation:29.1367,x:-0.0996,y:509.3072},0).wait(1).to({rotation:29.2556,y:510.4692},0).wait(1).to({rotation:29.3656,x:-0.0997,y:511.5453},0).wait(1).to({rotation:29.4668,y:512.5352},0).wait(1).to({rotation:29.5592,x:-0.0998,y:513.439},0).wait(1).to({rotation:29.6429,y:514.2568},0).wait(1).to({rotation:29.7177,x:-0.0999,y:514.9885},0).wait(1).to({rotation:29.7837,y:515.6341},0).wait(1).to({rotation:29.8409,y:516.1936},0).wait(1).to({rotation:29.8893,y:516.667},0).wait(1).to({rotation:29.9289,x:-0.1,y:517.0544},0).wait(1).to({rotation:29.9597,y:517.3557},0).wait(1).to({rotation:29.9817,y:517.5709},0).wait(1).to({regX:0.1,regY:-0.1,rotation:29.995,x:0.05,y:517.65},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.7,-456.3,197.5,1070.7);


(lib.FALLANIMATION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Yellow
	this.instance = new lib.fall_yellow("synched",0);
	this.instance.setTransform(0.95,-62.05,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({startPosition:46},0).to({alpha:0,startPosition:65},19).wait(78));

	// Brown
	this.instance_1 = new lib.fall_yellowcopy("synched",0);
	this.instance_1.setTransform(0.95,-62.05,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(143));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-427.1,158.1,856.5);


// stage content:
(lib.WBAY_218322_MM_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(402));

	// F4_T1_png
	this.instance = new lib.F4_T1_1("synched",0);
	this.instance.setTransform(80,310);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(272).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(116));

	// F3_T1_png
	this.instance_1 = new lib.F3_T1_1("synched",0);
	this.instance_1.setTransform(80,310);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(211).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({y:310,alpha:0},14).to({_off:true},1).wait(131));

	// CTA_png
	this.instance_2 = new lib.CTA_1("synched",0);
	this.instance_2.setTransform(80,340);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(153).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(235));

	// F2_T2_png
	this.instance_3 = new lib.F2_T2_1("synched",0);
	this.instance_3.setTransform(80,310);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(148).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({y:310,alpha:0},14).to({_off:true},1).wait(192));

	// F2_T1_png
	this.instance_4 = new lib.F2_T1_1("synched",0);
	this.instance_4.setTransform(80,290);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(245));

	// F2_BG_png
	this.instance_5 = new lib.F2_BG_png("synched",0);
	this.instance_5.setTransform(80,340,0.4175,1,0,0,0,0,40);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:false},0).to({scaleX:1,alpha:1},14,cjs.Ease.get(1)).wait(245));

	// F1_T3_png
	this.instance_6 = new lib.F1_T3_1("synched",0);
	this.instance_6.setTransform(80,330);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({y:300,alpha:1},12,cjs.Ease.get(1)).wait(86).to({startPosition:0},0).to({alpha:0},12).to({_off:true},1).wait(259));

	// F1_T2_png
	this.instance_7 = new lib.F1_T2_1("synched",0);
	this.instance_7.setTransform(80,320);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(94).to({startPosition:0},0).to({alpha:0},12).to({_off:true},1).wait(259));

	// F1_T1_png
	this.instance_8 = new lib.F1_T1_1("synched",0);
	this.instance_8.setTransform(80,290);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(105).to({startPosition:0},0).to({alpha:0},12).to({_off:true},1).wait(259));

	// Logo_png
	this.instance_9 = new lib.Logo_1("synched",0);
	this.instance_9.setTransform(80,220);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:300,alpha:1},14,cjs.Ease.get(1)).wait(388));

	// Layer_4
	this.instance_10 = new lib.FALLANIMATION("synched",0);
	this.instance_10.setTransform(222.55,310.15);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(37).to({_off:false},0).wait(355).to({startPosition:69},0).to({alpha:0,startPosition:78},9).wait(1));

	// FALL
	this.instance_11 = new lib.FALLANIMATION("synched",0);
	this.instance_11.setTransform(72.55,310.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(402));

	// BG_png
	this.instance_12 = new lib.BG_1("synched",0);
	this.instance_12.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(402));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(144.5,183.1,158,556.4);
// library properties:
lib.properties = {
	id: '1D42CF45455647789E9AE0A47792069B',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.png", id:"BG"},
		{src:"CTA.png", id:"CTA"},
		{src:"F1_T1.png", id:"F1_T1"},
		{src:"F1_T2.png", id:"F1_T2"},
		{src:"F1_T3.png", id:"F1_T3"},
		{src:"F2_BG.png", id:"F2_BG"},
		{src:"F2_T1.png", id:"F2_T1"},
		{src:"F2_T2.png", id:"F2_T2"},
		{src:"F3_T1.png", id:"F3_T1"},
		{src:"F4_T1.png", id:"F4_T1"},
		{src:"FallingBrown.png", id:"FallingBrown"},
		{src:"FallingYellow.png", id:"FallingYellow"},
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
an.compositions['1D42CF45455647789E9AE0A47792069B'] = {
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