(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FIGHT_PROJECT2_atlas_1", frames: [[0,0,1208,677],[0,679,1208,677],[1152,1358,645,557],[1210,0,645,557],[1210,559,645,557],[0,1358,1150,666]]},
		{name:"FIGHT_PROJECT2_atlas_2", frames: [[389,1611,362,141],[0,1118,387,595],[647,0,471,632],[0,0,645,557],[0,559,645,557],[1314,1251,569,260],[647,634,665,415],[1120,0,665,415],[647,1051,665,415],[1314,417,665,415],[1314,834,665,415],[1120,417,142,63],[389,1468,868,141],[1259,1513,736,141]]}
];


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



(lib.CachedBmp_22 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2611,328);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2570,1443);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["FIGHT_PROJECT2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.WINNER = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#66FF00").s().p("A2IEcIEJsbIbWiEIMyLJIzeI+g");
	this.shape.setTransform(141.675,64.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ADhAAQAAAshCAeQhCAfhdAAQhcAAhCgfQhCgeAAgsQAAgqBCgfQBCgfBcAAQBdAABCAfQBCAfAAAqg");
	this.shape_1.setTransform(186.5,51.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CC66").s().p("AieBKQhCgeAAgsQAAgqBCggQBCgeBcAAQBdAABCAeQBCAgAAAqQAAAshCAeQhCAfhdAAQhcAAhCgfg");
	this.shape_2.setTransform(186.5,51.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("A2IEcIEJsbIbWiEIMyLJIzeI+gAEhjKQhCAfAAArQAAAsBCAeQBCAfBdAAQBdAABCgfQBCgeAAgsQAAgrhCgfQhCgfhdAAQhdAAhCAfg");
	this.shape_3.setTransform(141.675,64.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AL4gTQAAArhCAeQhCAfhdAAQhdAAhCgfQhCgeAAgrQAAgrBCgfQBCgfBdAAQBdAABCAfQBCAfAAArgAkNAAQAAA0hIAlQhHAkhmAAQhmAAhIgkQhHglAAg0QAAgzBHgkQBIglBmAAQBmAABHAlQBIAkAAAzg");
	this.shape_4.setTransform(133,53.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#99CC66").s().p("AqvBYQhIgkAAg0QAAgzBIgkQBHglBmAAQBlAABIAlQBIAkAAAzQAAA0hIAkQhIAlhlAAQhmAAhHglgAF4A2QhCgeAAgrQAAgrBCggQBCgeBdAAQBdAABCAeQBCAgAAArQAAArhCAeQhCAfhdAAQhdAAhCgfg");
	this.shape_5.setTransform(133,53.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF00").s().p("A2IEcIEJsbIbWiEIMyLJIzeI+gAsGjEQhIAkAAA0QAAA0BIAlQBIAjBlAAQBmAABHgjQBIglAAg0QAAg0hIgkQhHglhmAAQhlAAhIAlgAEhjKQhCAfAAArQAAAsBCAeQBCAfBdAAQBdAABCgfQBCgeAAgsQAAgrhCgfQhCgfhdAAQhdAAhCAfg");
	this.shape_6.setTransform(141.675,64.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AL4gTQAAArhCAeQhCAfhdAAQhdAAhCgfQhCgeAAgrQAAgrBCgfQBCgfBdAAQBdAABCAfQBCAfAAArgAJqgfQAAAjgZAZQgZAZgkAAQgjAAgagZQgZgZAAgjQAAgkAZgZQAagZAjAAQAkAAAZAZQAZAZAAAkgAkNAAQAAA0hIAlQhHAkhmAAQhmAAhIgkQhHglAAg0QAAgzBHgkQBIglBmAAQBmAABHAlQBIAkAAAzgAl2AKQAAAvghAhQghAigvAAQgvAAgigiQghghAAgvQAAguAhghQAighAvAAQAvAAAhAhQAhAhAAAug");
	this.shape_7.setTransform(133,53.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99FFCC").s().p("ApABXQghghAAgvQAAguAhghQAighAvAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAigvAAQgvAAgigigAHPAaQgZgZAAgjQAAgjAZgaQAZgZAkAAQAjAAAZAZQAaAaAAAjQAAAjgaAZQgZAZgjAAQgkAAgZgZg");
	this.shape_8.setTransform(133.825,53.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#99CC66").s().p("AqvBYQhIgkAAg0QAAgzBIgkQBHglBmAAQBlAABIAlQBIAkAAAzQAAA0hIAkQhIAlhlAAQhmAAhHglgAo4hFQggAhgBAuQABAvAgAhQAiAhAvAAQAvAAAhghQAighAAgvQAAgugighQghgigvABQgvgBgiAigAF4A2QhCgeAAgrQAAgrBCggQBCgeBdAAQBdAABCAeQBCAgAAArQAAArhCAeQhCAfhdAAQhdAAhCgfgAHXhcQgZAaAAAjQAAAjAZAZQAZAZAkAAQAkAAAYgZQAagZAAgjQAAgjgagaQgYgZgkAAQgkAAgZAZg");
	this.shape_9.setTransform(133,53.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AJqgfQAAAjgZAZQgZAZgkAAQgjAAgagZQgZgZAAgjQAAgkAZgZQAagZAjAAQAkAAAZAZQAZAZAAAkgAL4gTQAAArhCAeQhCAfhdAAQhdAAhCgfQhCgeAAgrQAAgrBCgfQBCgfBdAAQBdAABCAfQBCAfAAArgAkNAAQAAA0hIAlQhHAkhmAAQhmAAhIgkQhHglAAg0QAAgzBHgkQBIglBmAAQBmAABHAlQBIAkAAAzgAl2AKQAAAvghAhQghAigvAAQgvAAgigiQghghAAgvQAAguAhghQAighAvAAQAvAAAhAhQAhAhAAAug");
	this.shape_10.setTransform(133,53.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AoHAqIgEAAIgCAAIgEgCIgCgBIgDgBIgCgBIgDgBIgCgCIgBgCIgCgCIgBgDIgCgBIgBgDIgBgDIAAgCIgBgCIAAgEIAAgCIAAgCIAAgEIABgCIAAgCIABgCIABgDIACgCIABgCIACgCIABgCIACgCIADgBIACgBIADgCIACAAIAEgBIACgBIAEAAIAEAAIACABIAEABIACABIADABIACAAIADACIACACIABACIACACIABACIACACIABADIABACIAAACIABACIAAAEIAAACIAAACIAAAEIgBACIAAACIgBADIgBADIgCABIgBADIgCACIgBACIgCACIgDABIgCABIgDABIgCABIgEACIgCAAIgEAAgAIIAWIgDAAIgEgBIgCgBIgDgBIgDgBIgCgBIgCgBIgCgCIgCgCIgCgCIgBgCIgBgCIgBgDIgBgDIgBgBIAAgDIgBgDIAAgCIAAgCIABgEIAAgCIABgCIABgDIABgDIABgBIABgDIACgCIACgCIACgBIACgCIACgBIADgCIADgBIACgBIAEAAIADAAIADAAIAEAAIACABIADACIADABIACABIACACIACABIACACIACACIABADIABABIABADIABADIABACIAAACIABAEIAAACIAAACIgBADIAAADIgBABIgBADIgBADIgBACIgBACIgCACIgCACIgCACIgCABIgCABIgDABIgDABIgCABIgEABIgDAAg");
	this.shape_11.setTransform(133,53.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99FFCC").s().p("ApABXQghghAAgvQAAguAhghQAighAvAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAigvAAQgvAAgigigAoWgcIgDABIgCAAIgDACIgCABIgDACIgCABIgBACIgCACIgBADIgCACIgBACIgBADIAAACIgBADIAAACIAAACIAAADIAAADIABACIAAADIABACIABADIACACIABACIACACIABACIACACIADABIACACIADABIACABIADABIADAAIAEAAIADAAIADAAIADgBIADgBIADgBIACgCIACgBIACgCIACgCIACgCIABgCIABgCIABgDIABgCIABgDIAAgCIABgDIAAgDIAAgCIgBgCIAAgDIgBgCIgBgDIgBgCIgBgCIgBgDIgCgCIgCgCIgCgBIgCgCIgCgBIgDgBIgDgBIgDgBIgDgBIgDAAIgEAAIgDABgAHPAaQgZgZAAgjQAAgjAZgaQAZgZAkAAQAjAAAZAZQAaAaAAAjQAAAjgaAZQgZAZgjAAQgkAAgZgZgAH5gwIgDABIgCAAIgDACIgCABIgDACIgCABIgBACIgCACIgBADIgCACIgBACIgBADIAAACIgBADIAAADIAAACIAAADIAAADIABACIAAADIABACIABADIACABIABACIACACIABACIACACIADABIACACIADABIACABIADABIADAAIAEAAIADAAIADAAIADgBIADgBIADgBIACgCIACgBIACgCIACgCIACgCIABgCIABgBIABgDIABgCIABgDIAAgCIABgDIAAgDIAAgCIgBgDIAAgDIgBgCIgBgDIgBgCIgBgCIgBgDIgCgCIgCgCIgCgBIgCgCIgCgBIgDgBIgDgBIgDgBIgDgBIgDAAIgEAAIgDABg");
	this.shape_12.setTransform(133.825,53.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("ABsDmQgkAAgggSQgfgRgcgUQgdgVgfgPIg+geQgLgEgJgIIAAAAIgDgBIgEgCIgFgDIgFgDIgEgCIgFgCIgEgDIgFgBIgIgCIgHgCIgHgCIgGgDIgGgCIgDgCIgCgCIgDgDIgCgCIgDgDIgCgDIgCgDIgCgFIgBgBIACAEIgDgFIgDgFIgDgFIgLgIIgKgIIgHgKIgGgKIgFgMIgCgFQgNgOgJgRQgLgTAIgWQAIgUASgOQAOgKATgGQAIgCAKgBQAtgNAwgDQAwgBAvgMQAngKAoAAQAhAAAhgBQAQgEAQgGQARgHASgGQAQgEAQgBIAmgCIAFABIAEABIAEABIACgDIADgDIADgDIADgCIAHgEIAIgCIAIgBIAFABIAEABIAEACIAEACIgBgBQAYARAJAiQAJAhgCAkQgCAiACAiQACAhgHAfQgFAZgSATIgGAJIgGAJIgHAIIgGAJIgEAEIgFANIgHATIgIARIgLAPQgHAIgIAGIgNAIQgGAKgJAHQgIAHgKADQgMAFgNAAIgXABIgWAAgAj9AkIABAAIAAAAIgBgBIgBAAIABABgAjmgVIgBgBIAAAAg");
	this.shape_13.setTransform(139.6248,94.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FF00").s().p("A2IEcIEJsbIbWiEIMyLJIzeI+gAihGYIA+AeQAfAPAcAUQAdAVAeARQAgARAlAAIAWABIAXgBQAMgBAMgEQAKgDAJgHQAJgHAGgKIAMgIQAIgGAHgIIALgPIAIgRIAIgTIAFgNIADgEIAHgJIAGgIIAGgJIAGgJQASgTAGgZQAGgggBghQgCgiACgiQACgkgJgiQgJghgZgRIABABIgDgCIgFgCIgEgBIgEgBIgIABIgIACIgIAEIgDACIgDADIgCADIgCADIgFgCIgEAAIgFgBIglACQgRABgQAEQgSAFgRAHQgPAHgRADQggACghAAQgogBgoALQgvAMgwABQgwACgtAOQgJAAgJADQgSAFgPALQgRAOgJAUQgIAVALAUQAKARANAOIABAEIAFANIAGALIAIAKIAJAIIAMAIIADAFIACAFIADAFIgBgEIAAABIACAEIADAEIACADIACADIADACIACADIADACIADABIAFADIAHADIAHACIAHACIAIACIAEABIAFADIAEACIAFACIAEADIAFACIAFADIADABIAAAAQAJAHALAFgAsGjEQhIAkAAA0QAAA0BIAlQBIAjBlAAQBmAABHgjQBIglAAg0QAAg0hIgkQhHglhmAAQhlAAhIAlgAEhjKQhCAfAAArQAAAsBCAeQBCAfBdAAQBdAABCgfQBCgeAAgsQAAgrhCgfQhCgfhdAAQhdAAhCAfgAkRFPIgBgBIAAAAIABABIABAAIgBAAgAj8ETIAAAAIABABg");
	this.shape_14.setTransform(141.675,64.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCC99").s().p("AggBZIgCgBIgFgCIgFgCIgEgCIgDgBIgCgBIgFAAIgEgBIgEgCIgEgBIgDgBIgHgEIgDgCIgCgCIgDgCIgCgCIgCgCIgCgDIgCgCQgJgRAAgTIgDg8QgBggAcgOQARgHASAAIAJAAIACgDIAEgCIADgCIAEgCIAFAAIAOgBIALABIALABIAKADIAHADQAnAeAYAtQAbAygiAsQgNAQgUAHQgSAHgSAAQgbAAgagPgAgKAdIAEACIAFADIAEACIALABIAGAAIAGAAIAFAAIAMgBIAAgFIAAgGIAAgFIAAgFIgBgFIgFgJIgGgIIgKgMIgGgIIgHgIIgDgEIgFAAIgGAAIgDADIgDACIgDACIgFACIgEABIgFAAIgFAAIgFAAIgFAAIAAATIAAALIABASIALACIAFACIAFABIADABIgCAAIALAEg");
	this.shape_15.setTransform(-29.4792,-21.784);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCC99").s().p("ABrDSIgDgBIgEgCIgFgCIgEgCIgEgBIgCgBIgEAAIgFgBIgEgCIgDgBIgEgBIgGgEIgDgCIgDgCIgCgCIgDgCIgCgCIgCgDIgBgCQgJgRgBgTIgCg9QgBggAcgOQAQgHATAAIAIAAIADgDIADgCIAEgCIAEgCIAEAAIAOgBIANABIALABIAKADIAGADQAnAeAYAtQAbAzgiAsQgMAQgUAHQgTAHgSAAQgcAAgZgPgACACWIAFACIAFADIAEACIAMABIAFAAIAGAAIAGAAIALgBIAAgFIAAgGIAAgFIAAgFIAAgFIgGgJIgGgJIgJgMIgHgIIgGgIIgEgEIgFAAIgGAAIgDADIgDACIgEACIgEACIgFABIgFAAIgEAAIgFAAIgFAAIAAATIAAAMIABASIAKACIAGACIAFABIACABIgBAAIAKAEgAijASQgSgDgMgOQgMgMgIgQIgIgUIgCgBQgVgVgCgeQgDgpAFgpQADgaAYgKQAWgJAXADQApAEAeAbIADAEIgCgDIABABIADAEIADADIAEAFIACAEIACAFIAIACIAIADIAIAFIAHAFIAHAGQAGAFAEAGIgCgCIgCgDIAGAJIAEAJIADAJIACAJIACAKIAAAFIAIAIIAFAKIAFALQACAHABAIQABAJgBAKQgCAJgEAIIgGAKIgHAHQgGAEgGADQgMAGgOABQgNACgOgBIgFAAIgjABIgEAAQgQAAgQgEgAhBgoIAAAAIAAgBgAi4ieIAAAfIAAASIABAMQAKAHAGAKIAHAOIAHAPIAGAJIAlABIAZAAIASgBIgCgEQgBgEgEgDQgFgDgCgGQgDgFgBgGIgBgNIgCgOIgBgBIgEgFIgEgBIgFgBIgXAAIgEAAIgHgBIgEgCIgFgEIgDgCIgCgDIgDgFIgBgEIgBgDIgBgGIAAgEIABgDIACgHIABgDQgCgFgHABIgFABIgGAAIgGAAIgGAAgAhCgsIAAABIAAgBg");
	this.shape_16.setTransform(-43.4125,-33.8861);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCC99").s().p("ADtFEIgCgBIgFgCIgFgCIgEgCIgDgBIgCgBIgFAAIgEgBIgEgCIgEgBIgDgBIgHgEIgDgCIgCgCIgDgCIgCgCIgCgCIgCgDIgCgCQgJgRAAgTIgDg9QgBggAcgOQARgHASAAIAJAAIACgDIAEgCIADgCIAEgCIAFAAIAOgBIAMABIALABIAKADIAHADQAnAeAYAtQAbAzgiAsQgNAQgUAHQgTAHgSAAQgbAAgagPgAEDEIIAEACIAFADIAFACIALABIAGAAIAGAAIAFAAIAMgBIAAgFIAAgGIAAgFIAAgFIgBgFIgFgJIgGgJIgKgMIgGgIIgHgIIgDgEIgGAAIgGAAIgDADIgDACIgDACIgFACIgEABIgFAAIgFAAIgFAAIgFAAIAAATIAAAMIABASIALACIAFACIAFABIADABIgCAAIALAEgAggCEQgSgDgMgOQgNgNgIgQIgIgUIgBgBQgWgVgBgeQgDgoAEgpQADgaAYgKQAWgJAYADQApAEAcAbIADADIgBgCIABABIADAEIADADIADAFIADAEIABAFIAJACIAIADIAIAFIAHAFIAHAGQAGAFAEAGIgCgCIgCgDIAFAJIAFAJIADAJIACAIIABAKIABAFIAHAIIAGAKIAEALQADAHAAAIQACAJgCAKQgBAJgEAIIgGAKIgIAIQgFAEgGADQgNAGgNABQgOACgNgBIgGAAIgjABIgDAAQgQAAgPgEgABABJIABAAIgBgBgAg2gsIAAAfIABARIABAMQAJAHAGAKIAIAOIAHAPIAFAJIAkABIAZAAIASgBIgBgFQgCgDgDgDQgFgDgDgGQgCgFgBgGIgCgNIgCgOIgBgBIgDgFIgFgBIgEgBIgXAAIgEAAIgHgBIgDgCIgGgDIgCgCIgCgDIgDgFIgCgEIAAgDIgBgGIAAgEIAAgDIACgHIABgDQgCgFgGABIgGABIgGAAIgGAAIgGAAgAA/BFIABAAIgBAAgAj6hUQgSgCgRgGQgSgGgOgPQgIgIgGgKQgSgPgMgUQgLgVgDgXIgCgvQAAgZAIgYQADgJAHgHIACgCIACgCIACgCIAGgCIAGgDIAKgDIANgBIANAAIAFAAIADABIAEACIADACIACACIADADIACADIACADIABADIABAEIABADIAAAEQAHALAagBQAngCAVAhQAUAfAJAkQAJAogLAoQgDALgIAJIgCABIgCACIgCACQgOAIgQABIgaABIgTAAgAk6jkIAAAGIABAGIAAAGIABAGIAAAFIAIAIIAIAHQAGAEAFAGIAFAGIAFAIIAFAHIACABIADADIAEACIAGAAIAFAAIAGAAIAGAAIALAAIAMAAIAAgHIAAgGIgBgGIAAgGIAAgGIgBgGIgDgGIgEgKIgFgKIgHgPIgGgJIgMgBIgMAAIgSAAIgSABIgMAAIAAAGg");
	this.shape_17.setTransform(-56.4525,-45.2715);

	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-320.4,-209.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(-288.25,-179.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_21();
	this.instance_2.setTransform(-320.4,-209.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_6},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},3).to({state:[{t:this.shape_6},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_9},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_9},{t:this.shape_14},{t:this.shape_13},{t:this.shape_10}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_9},{t:this.shape_14},{t:this.shape_13},{t:this.shape_15},{t:this.shape_10}]},2).to({state:[{t:this.shape_16},{t:this.shape_12},{t:this.shape_11},{t:this.shape_9},{t:this.shape_14},{t:this.shape_13},{t:this.shape_10}]},2).to({state:[{t:this.shape_17},{t:this.shape_12},{t:this.shape_11},{t:this.shape_9},{t:this.shape_14},{t:this.shape_13},{t:this.shape_10}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},16).to({state:[]},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.4,-209.7,604,338.6);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(3.5,-0.45,0.2291,0.2291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(3.5,-0.4,147.8,127.60000000000001), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,193.5,297.5), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(-0.45,-0.45,0.2291,0.2291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-0.4,-0.4,147.8,127.60000000000001), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-0.45,-0.45,0.2291,0.2291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-0.4,-0.4,147.8,127.60000000000001), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-0.45,-0.45,0.2291,0.2291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-0.4,-0.4,147.8,127.60000000000001), null);


(lib.Scene_1_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(1,1,1).p("EhkLg4RMDIXAAAMAAABwjMjIXAAAg");
	this.shape.setTransform(641.15,360.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("EhkLA4SMAAAhwjMDIWAAAMAAABwjg");
	this.shape_1.setTransform(641.15,360.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(362));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.ELIPSE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-357.95,-350.5,0.2196,0.2196);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-302.25,-286.45,0.2196,0.2196);

	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(-358.95,-350.5,0.2196,0.2196);

	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(-359.95,-350.5,0.2196,0.2196);

	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(-360.95,-350.5,0.2196,0.2196);

	this.instance_5 = new lib.CachedBmp_10();
	this.instance_5.setTransform(-360.95,-352.2,0.2196,0.2196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.9,-352.2,148.99999999999997,92.89999999999998);


(lib.start = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(453.9,351.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,-0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(0,-0.1,1285,721.5), null);


(lib.playAgain = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(109.75,132.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.playAgain, new cjs.Rectangle(-0.5,-0.5,575,333), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-148.15,-47.25,1,1,0,0,0,96.9,148.8);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(-245.05,-205.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:96.8,x:-148.25},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-205.3,235.5,316);


(lib.SQUARE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol7();
	this.instance.setTransform(74.4,63.3,1,1,0,0,0,73.4,63.3);

	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(73.4,63.3,1,1,0,0,0,73.4,63.3);

	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(73.4,63.3,1,1,0,0,0,73.4,63.3);

	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(73,63.3,1,1,0,0,0,73.4,63.3);

	this.instance_4 = new lib.CachedBmp_13();
	this.instance_4.setTransform(-0.85,-0.45,0.2291,0.2291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3,p:{regX:73.4,regY:63.3,x:73,y:63.3}}]},8).to({state:[{t:this.instance_3,p:{regX:77.4,regY:63.4,x:73.4,y:56.4}}]},1).to({state:[{t:this.instance_3,p:{regX:77.4,regY:63.4,x:77.4,y:63.4}}]},1).to({state:[{t:this.instance_4}]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-7.4,152.10000000000002,134.6);


(lib.Scene_1_SQUARE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// SQUARE
	this.instance = new lib.SQUARE();
	this.instance.setTransform(1157.75,485.15,0.9999,0.9999,0,0,0,73.5,63.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(6).to({regY:63.5,x:1079,y:498.15},0).wait(5).to({x:1037,y:526.5},0).wait(4).to({regY:63.6,scaleX:0.9998,scaleY:0.9998,x:1016.4,y:543.25},0).wait(3).to({x:1000.6,y:504.95},0).wait(13).to({regY:63.7,scaleX:0.9997,scaleY:0.9997,x:1068.5,y:529.65},0).wait(1).to({regY:63.8,x:1090.95,y:551.2},0).wait(2).to({x:1111.4,y:551.15},0).wait(2).to({x:1128.55,y:570.45},0).wait(1).to({regX:75.2,regY:59.9,x:1130.2,y:566.5},0).wait(15).to({regX:73.5,regY:63.9,scaleX:0.9996,scaleY:0.9996,x:1053.65,y:584.65},0).wait(3).to({x:938.8,y:571.65},0).wait(1).to({regX:73.6,regY:64},0).wait(1).to({regX:75.2,regY:59.9,x:940.4,y:567.55},0).wait(15).to({regX:73.9,regY:64.2,scaleX:2.1819,scaleY:1.8163,x:1047.45,y:539.1},0).wait(1).to({regX:75.2,regY:59.9,scaleX:2.182,x:1050.25,y:531.25},0).wait(16).to({regX:73,regY:64.1,scaleX:2.1816,scaleY:1.816,rotation:-59.9998,x:956.3,y:492.9},0).wait(1).to({regX:75.2,regY:59.9,rotation:-59.9995,x:952.05,y:484.9},0).wait(12).to({regX:73.5,regY:64,scaleX:1.485,scaleY:1.6255,rotation:-119.9996,x:956.15,y:492.65},0).wait(1).to({regX:75.2,regY:59.9,scaleX:1.4851,scaleY:1.6256,rotation:-120,x:949.05,y:493.8},0).wait(14).to({regX:72.6,regY:63.2,scaleX:1.4849,scaleY:1.6254,rotation:-194.9993,x:956.05,y:492.5},0).wait(1).to({regX:75.2,regY:59.9,scaleX:1.4848,scaleY:1.6253,rotation:-195,x:925.85,y:433.9},0).wait(12).to({regX:73.8,regY:64,rotation:-254.9992,x:955.8,y:492.5},0).wait(1).to({regX:75.2,regY:59.9,scaleX:1.4847,scaleY:1.6252,rotation:-254.999,x:887.7,y:436.85},0).wait(18).to({regX:74.3,regY:63.1,scaleY:1.6251,rotation:-314.9996,x:957.45,y:492.5},0).wait(1).to({regX:75.2,regY:59.9,scaleX:1.5153,scaleY:1.6611,rotation:-314.4495,x:949.45,y:487.85},0).wait(1).to({scaleX:1.5459,scaleY:1.697,rotation:-313.8993,x:936.85,y:485.95},0).wait(1).to({scaleX:1.5765,scaleY:1.733,rotation:-313.3492,x:924.25,y:484},0).wait(1).to({scaleX:1.6071,scaleY:1.7689,rotation:-312.7991,x:911.65,y:482.15},0).wait(1).to({scaleX:1.6377,scaleY:1.8048,rotation:-312.249,x:899.1,y:480.25},0).wait(1).to({scaleX:1.6683,scaleY:1.8407,rotation:-311.6988,x:886.45,y:478.3},0).wait(1).to({scaleX:1.6989,scaleY:1.8767,rotation:-311.1487,x:873.9,y:476.4},0).wait(1).to({scaleX:1.7295,scaleY:1.9126,rotation:-310.5986,x:861.3,y:474.55},0).wait(1).to({scaleX:1.7602,scaleY:1.9485,rotation:-310.0485,x:848.7,y:472.65},0).wait(1).to({scaleX:1.7908,scaleY:1.9845,rotation:-309.4983,x:836.15,y:470.75},0).wait(1).to({scaleX:1.8214,scaleY:2.0204,rotation:-308.9482,x:823.6,y:468.9},0).wait(1).to({scaleX:1.852,scaleY:2.0563,rotation:-308.3981,x:810.95,y:467},0).wait(1).to({scaleX:1.8826,scaleY:2.0922,rotation:-307.848,x:798.4,y:465.15},0).wait(1).to({scaleX:1.9132,scaleY:2.1282,rotation:-307.2978,x:785.85,y:463.25},0).wait(1).to({scaleX:1.9438,scaleY:2.1641,rotation:-306.7477,x:773.25,y:461.4},0).wait(1).to({scaleX:1.9744,scaleY:2.2,rotation:-306.1976,x:760.65,y:459.5},0).wait(1).to({scaleX:1.9759,scaleY:2.2018,rotation:-305.6475,x:732.6,y:456.2},0).wait(1).to({scaleX:1.9774,scaleY:2.2035,rotation:-305.0973,x:704.5,y:452.95},0).wait(1).to({scaleX:1.9789,scaleY:2.2053,rotation:-304.5472,x:676.45,y:449.65},0).wait(1).to({scaleX:1.9803,scaleY:2.207,rotation:-303.9971,x:648.35,y:446.35},0).wait(1).to({scaleX:1.9818,scaleY:2.2087,rotation:-303.447,x:620.3,y:443.1},0).wait(1).to({scaleX:1.9833,scaleY:2.2105,rotation:-302.8968,x:592.2,y:439.85},0).wait(1).to({scaleX:1.9848,scaleY:2.2122,rotation:-302.3467,x:564.15,y:436.6},0).wait(1).to({scaleX:1.9863,scaleY:2.214,rotation:-301.7966,x:536.1,y:433.35},0).wait(1).to({scaleX:1.9878,scaleY:2.2157,rotation:-301.2465,x:508.05,y:430.05},0).wait(1).to({scaleX:1.9892,scaleY:2.2174,rotation:-300.6963,x:479.95,y:426.8},0).wait(1).to({scaleX:1.9907,scaleY:2.2192,rotation:-300.1462,x:490.75,y:428.5},0).wait(1).to({scaleX:1.9922,scaleY:2.221,rotation:-299.5961,x:501.5,y:430.2},0).wait(1).to({scaleX:1.9937,scaleY:2.2227,rotation:-299.046,x:512.3,y:431.9},0).wait(1).to({scaleX:1.9952,scaleY:2.2244,rotation:-298.4958,x:523.1,y:433.6},0).wait(1).to({scaleX:1.9967,scaleY:2.2262,rotation:-297.9457,x:533.85,y:435.4},0).wait(1).to({scaleX:1.9982,scaleY:2.2279,rotation:-297.3956,x:544.65,y:437.1},0).wait(1).to({scaleX:1.9997,scaleY:2.2297,rotation:-296.8454,x:555.45,y:438.8},0).wait(1).to({scaleX:2.0012,scaleY:2.2314,rotation:-296.2953,x:566.2,y:440.5},0).wait(1).to({scaleX:2.0026,scaleY:2.2332,rotation:-295.7452,x:577,y:442.25},0).wait(1).to({scaleX:2.0041,scaleY:2.2349,rotation:-295.1951,x:587.75,y:443.95},0).wait(1).to({scaleX:2.0056,scaleY:2.2366,rotation:-294.6449,x:598.6,y:445.7},0).wait(1).to({scaleX:2.0071,scaleY:2.2384,rotation:-294.0948,x:609.35,y:447.45},0).wait(1).to({scaleX:2.0085,scaleY:2.2401,rotation:-293.5447,x:620.15,y:449.15},0).wait(1).to({scaleX:2.0101,scaleY:2.2419,rotation:-292.9946,x:630.95,y:450.85},0).wait(1).to({scaleX:2.0116,scaleY:2.2436,rotation:-292.4444,x:641.7,y:452.55},0).wait(1).to({scaleX:2.013,scaleY:2.2454,rotation:-291.8943,x:652.45,y:454.3},0).wait(1).to({scaleX:2.0145,scaleY:2.2471,rotation:-291.3442,x:663.3,y:456.05},0).wait(1).to({scaleX:2.016,scaleY:2.2489,rotation:-290.7941,x:674,y:457.75},0).wait(1).to({scaleX:2.0175,scaleY:2.2506,rotation:-290.2439,x:684.8,y:459.5},0).wait(1).to({scaleX:2.0189,scaleY:2.2523,rotation:-289.6938,x:695.6,y:461.2},0).wait(1).to({scaleX:2.0205,scaleY:2.2541,rotation:-289.1437,x:706.4,y:462.95},0).wait(1).to({scaleX:2.022,scaleY:2.2558,rotation:-288.5936,x:717.15,y:464.65},0).wait(1).to({scaleX:2.0234,scaleY:2.2576,rotation:-288.0434,x:727.9,y:466.4},0).wait(1).to({scaleX:2.0249,scaleY:2.2593,rotation:-287.4933,x:738.7,y:468.15},0).wait(1).to({scaleX:2.0264,scaleY:2.2611,rotation:-286.9432,x:749.45,y:469.8},0).wait(1).to({scaleX:2.0279,scaleY:2.2628,rotation:-286.3931,x:760.2,y:471.55},0).wait(1).to({scaleX:2.0294,scaleY:2.2645,rotation:-285.8429,x:770.95,y:473.3},0).wait(1).to({scaleX:2.0309,scaleY:2.2663,rotation:-285.2928,x:781.8,y:475},0).wait(1).to({scaleX:2.0323,scaleY:2.268,rotation:-284.7427,x:792.5,y:476.7},0).wait(1).to({scaleX:2.0338,scaleY:2.2698,rotation:-284.1926,x:803.3,y:478.45},0).wait(1).to({scaleX:2.0353,scaleY:2.2715,rotation:-283.6424,x:814.1,y:480.2},0).wait(1).to({scaleX:2.0368,scaleY:2.2732,rotation:-283.0923,x:824.8,y:481.95},0).wait(1).to({scaleX:2.0383,scaleY:2.275,rotation:-282.5422,x:835.65,y:483.6},0).wait(1).to({scaleX:2.0398,scaleY:2.2767,rotation:-281.9921,x:846.35,y:485.4},0).wait(1).to({scaleX:2.0412,scaleY:2.2785,rotation:-281.4419,x:857.15,y:487.05},0).wait(1).to({scaleX:2.0427,scaleY:2.2802,rotation:-280.8918,x:867.95,y:488.8},0).wait(1).to({scaleX:2.0442,scaleY:2.282,rotation:-280.3417,x:878.7,y:490.55},0).wait(1).to({scaleX:2.0457,scaleY:2.2837,rotation:-279.7915,x:889.4,y:492.25},0).wait(1).to({scaleX:2.0472,scaleY:2.2855,rotation:-279.2414,x:900.2,y:494},0).wait(1).to({scaleX:2.0487,scaleY:2.2872,rotation:-278.6913,x:910.95,y:495.7},0).wait(1).to({scaleX:2.0502,scaleY:2.2889,rotation:-278.1412,x:921.75,y:497.4},0).wait(1).to({scaleX:2.0517,scaleY:2.2907,rotation:-277.591,x:932.5,y:499.2},0).wait(1).to({scaleX:2.0531,scaleY:2.2924,rotation:-277.0409,x:943.25,y:500.95},0).wait(1).to({scaleX:2.0546,scaleY:2.2942,rotation:-276.4908,x:953.95,y:502.6},0).wait(1).to({scaleX:2.0561,scaleY:2.2959,rotation:-275.9407,x:964.75,y:504.35},0).wait(1).to({scaleX:2.0576,scaleY:2.2976,rotation:-275.3905,x:975.55,y:506.1},0).wait(1).to({scaleX:2.0591,scaleY:2.2994,rotation:-274.8404,x:986.25,y:507.8},0).wait(1).to({scaleX:2.0606,scaleY:2.3011,rotation:-274.2903,x:997.05,y:509.5},0).wait(1).to({scaleX:2.0621,scaleY:2.3029,rotation:-273.7402,x:1007.75,y:511.25},0).wait(1).to({scaleX:2.0635,scaleY:2.3046,rotation:-273.19,x:1018.55,y:513},0).wait(1).to({scaleX:2.065,scaleY:2.3063,rotation:-272.6399,x:1029.3,y:514.65},0).wait(1).to({scaleX:2.0665,scaleY:2.3081,rotation:-272.0898,x:1040.05,y:516.45},0).wait(1).to({scaleX:2.0456,scaleY:2.2961,rotation:-271.5397,x:1040.3},0).wait(1).to({scaleX:2.0246,scaleY:2.284,rotation:-270.9895,x:1040.55,y:516.55},0).wait(1).to({scaleX:2.0037,scaleY:2.2719,rotation:-270.4394,x:1040.75},0).wait(1).to({scaleX:1.9827,scaleY:2.2598,rotation:-269.8893,x:1041,y:516.65},0).wait(1).to({scaleX:1.9618,scaleY:2.2478,rotation:-269.3392,x:1041.2},0).wait(1).to({scaleX:1.9409,scaleY:2.2357,rotation:-268.789,x:1041.4,y:516.7},0).wait(1).to({scaleX:1.9199,scaleY:2.2236,rotation:-268.2389,x:1041.65,y:516.75},0).wait(1).to({scaleX:1.899,scaleY:2.2116,rotation:-267.6888,x:1041.95,y:516.8},0).wait(1).to({scaleX:1.8781,scaleY:2.1995,rotation:-267.1387,x:1042.15,y:516.85},0).wait(1).to({scaleX:1.8572,scaleY:2.1874,rotation:-266.5885,x:1042.4,y:516.9},0).wait(1).to({scaleX:1.8362,scaleY:2.1753,rotation:-266.0384,x:1042.6,y:516.95},0).wait(1).to({scaleX:1.8153,scaleY:2.1633,rotation:-265.4883,x:1042.8,y:517},0).wait(1).to({scaleX:1.7944,scaleY:2.1512,rotation:-264.9382,x:1043.05,y:517.05},0).wait(1).to({scaleX:1.7734,scaleY:2.1391,rotation:-264.388,x:1043.3},0).wait(1).to({scaleX:1.7525,scaleY:2.127,rotation:-263.8379,x:1043.55},0).wait(1).to({scaleX:1.7316,scaleY:2.115,rotation:-263.2878,x:1043.8,y:517.15},0).wait(1).to({scaleX:1.7106,scaleY:2.1029,rotation:-262.7376,x:1044,y:517.2},0).wait(1).to({scaleX:1.6897,scaleY:2.0909,rotation:-262.1875,x:1044.2,y:517.25},0).wait(1).to({scaleX:1.6688,scaleY:2.0788,rotation:-261.6374,x:1044.45},0).wait(1).to({scaleX:1.6478,scaleY:2.0667,rotation:-261.0873,x:1044.65},0).wait(1).to({scaleX:1.6269,scaleY:2.0546,rotation:-260.5371,x:1044.9,y:517.35},0).wait(1).to({scaleX:1.606,scaleY:2.0426,rotation:-259.987,x:1045.1,y:517.4},0).wait(1).to({scaleX:1.585,scaleY:2.0305,rotation:-259.4369,x:1045.35},0).wait(1).to({scaleX:1.5641,scaleY:2.0184,rotation:-258.8868,x:1045.6,y:517.45},0).wait(1).to({scaleX:1.5431,scaleY:2.0063,rotation:-258.3366,x:1045.8},0).wait(1).to({scaleX:1.5222,scaleY:1.9943,rotation:-257.7865,x:1046.05,y:517.55},0).wait(1).to({scaleX:1.5013,scaleY:1.9822,rotation:-257.2364,x:1046.25,y:517.5},0).wait(1).to({scaleX:1.4803,scaleY:1.9701,rotation:-256.6863,x:1046.5,y:517.55},0).wait(1).to({scaleX:1.4594,scaleY:1.9581,rotation:-256.1361,x:1046.75,y:517.6},0).wait(1).to({scaleX:1.4385,scaleY:1.946,rotation:-255.586,x:1046.95},0).wait(1).to({scaleX:1.4175,scaleY:1.9339,rotation:-255.0359,x:1047.25,y:517.65},0).wait(1).to({scaleX:1.3966,scaleY:1.9219,rotation:-254.4858,x:1047.45},0).wait(1).to({scaleX:1.3757,scaleY:1.9098,rotation:-253.9356,x:1047.6,y:517.7},0).wait(1).to({scaleX:1.3228,scaleY:1.8499,rotation:-253.3855,x:1047.7,y:517.6},0).wait(1).to({scaleX:1.2699,scaleY:1.7902,rotation:-252.8354,x:1047.8},0).wait(1).to({scaleX:1.2171,scaleY:1.7303,rotation:-252.2853,x:1047.9,y:517.55},0).wait(1).to({scaleX:1.1642,scaleY:1.6705,rotation:-251.7351,x:1048.05,y:517.5},0).wait(1).to({scaleX:1.1113,scaleY:1.6107,rotation:-251.185,x:1048.15,y:517.4},0).wait(1).to({scaleX:1.0585,scaleY:1.5509,rotation:-250.6349,x:1048.2,y:517.35},0).wait(1).to({scaleX:1.0056,scaleY:1.4911,rotation:-250.0848,x:1048.35,y:517.3},0).wait(1).to({scaleY:1.491,rotation:-249.5346,x:1048.55},0).wait(1).to({scaleY:1.4911,rotation:-248.9845,x:1048.9,y:517.35},0).wait(1).to({rotation:-248.4344,x:1049.15,y:517.4},0).wait(1).to({scaleY:1.491,rotation:-247.8843,x:1049.4,y:517.45},0).wait(1).to({scaleY:1.4911,rotation:-247.3341,x:1049.65,y:517.5},0).wait(1).to({rotation:-246.784,x:1049.9,y:517.55},0).wait(1).to({scaleY:1.491,rotation:-235.5345,x:1049.55,y:518.25},0).wait(1).to({rotation:-224.285,x:1049.15,y:518.8},0).wait(1).to({scaleY:1.4911,rotation:-213.0355,x:1048.6,y:519.25},0).wait(1).to({rotation:-201.786,x:1048,y:519.5},0).wait(1).to({rotation:-259.947,x:1051.85,y:516.5},0).wait(1).to({scaleY:1.491,rotation:-318.108,x:1051.5,y:511.95},0).wait(1).to({scaleY:1.4911,rotation:-376.269,x:1047.5,y:510.05},0).wait(1).to({scaleY:1.491,rotation:-434.43,x:1044,y:512.65},0).wait(1).to({rotation:-492.591,x:1044.45,y:517.35},0).wait(1).to({rotation:-478.4528,x:1044.2,y:516.25},0).wait(1).to({scaleY:1.4911,rotation:-464.3146,x:1044.35,y:515.1},0).wait(1).to({rotation:-450.1764,x:1044.65,y:514},0).wait(1).to({scaleY:1.491,rotation:-436.0382,x:1045.3,y:512.8},0).wait(1).to({rotation:-421.9,x:1046.25,y:511.8},0).wait(1).to({rotation:-414.4,x:1054.05,y:511.25},0).wait(1).to({rotation:-406.9,x:1061.95,y:510.8},0).wait(1).to({rotation:-399.4,x:1070,y:510.35},0).wait(1).to({rotation:-391.9,x:1077.95,y:510},0).wait(1).to({rotation:-384.4,x:1085.95,y:509.75},0).wait(1).to({scaleY:1.4911,rotation:-376.9,x:1094,y:509.5},0).wait(1).to({rotation:-369.4,x:1102.05,y:509.4},0).wait(1).to({scaleY:1.491,rotation:-361.8999,x:1110.1},0).wait(1).to({x:1117.5,y:509.3},0).wait(1).to({x:1124.95,y:509.2},0).wait(1).to({x:1132.35,y:509.1},0).wait(1).to({x:1139.8,y:509.05},0).wait(1).to({x:1147.2,y:508.95},0).wait(1).to({x:1154.6,y:508.85},0).wait(1).to({x:1162.05,y:508.75},0).wait(1).to({x:1169.45,y:508.7},0).wait(1).to({x:1176.9,y:508.6},0).wait(1).to({x:1184.3,y:508.5},0).wait(1).to({x:1191.7,y:508.4},0).wait(1).to({x:1199.15,y:508.35},0).wait(1).to({x:1206.55,y:508.25},0).wait(1).to({x:1214,y:508.15},0).wait(1).to({x:1254,y:516.75},0).wait(1).to({x:1294,y:525.4},0).wait(1).to({x:1334,y:534},0).wait(1).to({x:1374,y:542.65},0).wait(1).to({x:1414.05,y:551.25},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_CROWD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CROWD
	this.instance = new lib.Symbol1();
	this.instance.setTransform(694,212.85,0.6846,0.5294,0,0,0,-148.1,-47.3);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(887.85,222.5,0.6846,0.5294,0,0,0,-148.1,-47.3);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(1150.7,217.55,0.6846,0.5294,0,0,0,-148.1,-47.3);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(466.6,222.45,0.6846,0.5294,0,0,0,-148.1,-47.3);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(169.35,67.05,0.4512,0.4508,0,-0.8088,0,-148.1,-47.2);

	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(406.6,67.05,0.4512,0.4508,0,-0.8088,0,-148.1,-47.2);

	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(577.55,89.7,0.4512,0.4508,0,-0.8088,0,-148.1,-47.2);

	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(800.3,67.05,0.4512,0.4508,0,-0.8088,0,-148.1,-47.2);

	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(1039.75,67.05,0.4512,0.4508,0,-0.8088,0,-148.1,-47.2);

	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(337,247.5,0.6846,0.5294);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EhkLgXhMDIXAAAMAAAAvDMjIXAAAg");
	this.shape.setTransform(641.15,150.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333300").s().p("EhkLAXiMAAAgvDMDIXAAAMAAAAvDg");
	this.shape_1.setTransform(641.15,150.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},358).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BUTTON
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(642.15,165,0.9971,0.4576,0,0,0,642.6,360.6);

	this.playAgain = new lib.playAgain();
	this.playAgain.name = "playAgain";
	this.playAgain.setTransform(686.35,343.6,1,1,0,0,0,286.9,165.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start}]}).to({state:[]},1).to({state:[{t:this.playAgain}]},356).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.NORMSTAGE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.WINNER("synched",0);
	this.instance.setTransform(644.75,83.55,1,1,0,0,0,141.7,64.4);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(502.55,18.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(-0.45,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,1305.5,164);


(lib.Symbol5_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.ELIPSE();
	this.instance_1.setTransform(125.4,102.8,1.7512,2.2764,0,0,0,-285.9,-304.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5_1, new cjs.Rectangle(-0.8,-1,255.8,207.5), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ELIPSE();
	this.instance.setTransform(125.4,102.8,1.7512,2.2764,0,0,0,-285.9,-304.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-0.8,-1,255.8,207.5), null);


(lib.Scene_1_STAGE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// STAGE
	this.instance = new lib.NORMSTAGE("synched",0);
	this.instance.setTransform(636.85,642.75,1,1,0,0,0,652.3,81.4);

	this.instance_1 = new lib.WINNER("synched",0);
	this.instance_1.setTransform(476.6,537.8,1,1,0,0,0,-18.6,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},322).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ELIPSE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ELIPSE
	this.instance = new lib.Symbol4();
	this.instance.setTransform(706.95,483.2,1,0.6129,0,16.4229,0,621.4,101.9);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol5_1();
	this.instance_1.setTransform(760.2,505.65,1,1,0,0,0,629.6,102.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:124.5,regY:100.8,scaleX:1.0024,scaleY:0.6165,skewX:17.0112,x:283.85,y:502.85},0).wait(1).to({scaleX:1.0049,scaleY:0.62,skewX:17.5993,x:357.55,y:523.15},0).wait(1).to({scaleX:1.0073,scaleY:0.6235,skewX:18.1875,x:431.25,y:543.5},0).wait(1).to({scaleX:1.0098,scaleY:0.6271,skewX:18.7756,x:417.85,y:539.8},0).wait(1).to({scaleX:1.0122,scaleY:0.6306,skewX:19.3637,x:404.5,y:536.1},0).wait(1).to({scaleX:1.0146,scaleY:0.6341,skewX:19.9518,x:391.1,y:532.45},0).wait(1).to({scaleX:1.0171,scaleY:0.6376,skewX:20.5399,x:377.8,y:528.75},0).wait(1).to({scaleX:1.0195,scaleY:0.6412,skewX:21.1281,x:364.4,y:525.05},0).wait(1).to({scaleX:1.022,scaleY:0.6447,skewX:21.7162,x:351.05,y:521.3},0).wait(1).to({scaleX:1.0244,scaleY:0.6482,skewX:22.3043,x:337.65,y:517.6},0).wait(1).to({scaleX:1.0268,scaleY:0.6517,skewX:22.8924,x:376.3,y:537.35},0).wait(1).to({scaleX:1.0293,scaleY:0.6553,skewX:23.4805,x:414.9,y:557.15},0).wait(1).to({scaleX:1.0317,scaleY:0.6588,skewX:24.0686,x:453.45,y:576.9},0).wait(1).to({scaleX:1.0499,scaleY:0.7238,skewX:24.6568,x:441.85,y:569.5},0).wait(1).to({scaleX:1.068,scaleY:0.7888,skewX:25.245,x:430.3,y:562.1},0).wait(1).to({scaleX:1.0862,scaleY:0.8538,skewX:25.8331,x:418.75,y:554.7},0).wait(1).to({scaleX:1.1043,scaleY:0.9188,skewX:26.4213,x:407.15,y:547.35},0).wait(1).to({scaleX:1.1225,scaleY:0.9838,skewX:27.0095,x:395.55,y:539.95},0).wait(1).to({scaleX:1.1227,scaleY:0.9693,skewX:27.5976,x:444.45,y:507.3},0).wait(1).to({scaleX:1.123,scaleY:0.9547,skewX:28.1857,x:429.45,y:512.6},0).wait(1).to({scaleX:1.1233,scaleY:0.9402,skewX:28.7738,x:414.5,y:517.9},0).wait(1).to({scaleX:1.1236,scaleY:0.9256,skewX:29.3619,x:399.5,y:523.25},0).wait(1).to({scaleX:1.1238,scaleY:0.911,skewX:29.95,x:384.5,y:528.55},0).wait(1).to({scaleX:1.1241,scaleY:0.8965,skewX:30.5381,x:369.55,y:533.95},0).wait(1).to({scaleX:1.1244,scaleY:0.8819,skewX:31.1263,x:354.55,y:539.25},0).wait(1).to({scaleX:1.1246,scaleY:0.8674,skewX:31.7144,x:339.55,y:544.55},0).wait(1).to({scaleX:1.1249,scaleY:0.8528,skewX:32.3025,x:324.55,y:549.85},0).wait(1).to({scaleX:1.1252,scaleY:0.8382,skewX:32.8906,x:309.6,y:555.2},0).wait(1).to({scaleX:1.1255,scaleY:0.8237,skewX:33.4787,x:294.55,y:560.5},0).wait(1).to({scaleX:1.1257,scaleY:0.8091,skewX:34.0668,x:279.6,y:565.85},0).wait(1).to({scaleX:1.126,scaleY:0.7946,skewX:34.6549,x:264.65,y:571.2},0).wait(1).to({scaleX:1.1263,scaleY:0.78,skewX:35.2435,x:262.15,y:561.85},0).wait(1).to({scaleX:1.1265,scaleY:0.7654,skewX:35.8321,x:259.7,y:552.55},0).wait(1).to({scaleX:1.1268,scaleY:0.7509,skewX:36.42,x:247.2,y:559.2},0).wait(1).to({scaleX:1.1271,scaleY:0.7363,skewX:37.0078,x:234.7,y:565.8},0).wait(1).to({scaleX:1.1274,scaleY:0.7392,skewX:35.7794,x:257.4,y:563.65},0).wait(1).to({scaleX:1.1276,scaleY:0.7421,skewX:34.551,x:280.05,y:561.4},0).wait(1).to({scaleX:1.1279,scaleY:0.7449,skewX:33.3227,x:302.65,y:559.2},0).wait(1).to({scaleX:1.1282,scaleY:0.7478,skewX:32.0943,x:325.3,y:557},0).wait(1).to({scaleX:1.1284,scaleY:0.7507,skewX:30.8659,x:347.95,y:554.8},0).wait(1).to({scaleX:1.1287,scaleY:0.7536,skewX:29.6375,x:370.55,y:552.6},0).wait(1).to({scaleX:1.129,scaleY:0.7564,skewX:28.4091,x:393.15,y:550.4},0).wait(1).to({scaleX:1.1293,scaleY:0.7593,skewX:27.1807,x:415.85,y:548.2},0).wait(1).to({scaleX:1.1295,scaleY:0.7622,skewX:25.9524,x:438.5,y:546},0).wait(1).to({scaleX:1.1298,scaleY:0.7651,skewX:24.724,x:461.05,y:543.8},0).wait(1).to({scaleX:1.1301,scaleY:0.7679,skewX:23.4956,x:483.7,y:541.6},0).wait(1).to({scaleX:1.1303,scaleY:0.7708,skewX:22.2672,x:506.35,y:539.35},0).wait(1).to({scaleX:1.1306,scaleY:0.7737,skewX:21.0388,x:528.95,y:537.2},0).wait(1).to({scaleX:1.1309,scaleY:0.7765,skewX:19.8105,x:551.55,y:534.95},0).wait(1).to({scaleX:1.1312,scaleY:0.7794,skewX:18.5821,x:574.2,y:532.75},0).wait(1).to({scaleX:1.1314,scaleY:0.7823,skewX:17.3537,x:596.85,y:530.55},0).wait(1).to({scaleX:1.1317,scaleY:0.7852,skewX:16.1253,x:619.45,y:528.35},0).wait(1).to({scaleX:1.132,scaleY:0.788,skewX:14.8969,x:619.5,y:528.1},0).wait(1).to({scaleX:1.1322,scaleY:0.7909,skewX:13.6685,x:619.45,y:527.8},0).wait(1).to({scaleX:1.1325,scaleY:0.7938,skewX:12.4402,y:527.6},0).wait(1).to({scaleX:1.1328,scaleY:0.7967,skewX:11.2118,x:619.5,y:527.3},0).wait(1).to({scaleX:1.1331,scaleY:0.7996,skewX:9.9834,x:619.45,y:527.05},0).wait(1).to({scaleX:1.1333,scaleY:0.8024,skewX:8.755,y:526.8},0).wait(1).to({scaleX:1.1336,scaleY:0.8053,skewX:7.5266,y:526.55},0).wait(1).to({scaleX:1.1339,scaleY:0.8082,skewX:6.2983,y:526.3},0).wait(1).to({scaleX:1.1342,scaleY:0.811,skewX:5.0699,x:619.5,y:526.05},0).wait(1).to({scaleX:1.1344,scaleY:0.8139,skewX:3.8415,x:619.45,y:525.8},0).wait(1).to({scaleX:1.1347,scaleY:0.8168,skewX:2.6131,y:525.55},0).wait(1).to({scaleX:1.135,scaleY:0.8197,skewX:1.3847,y:525.3},0).wait(1).to({scaleX:1.1352,scaleY:0.8225,skewX:0.1563,y:525},0).wait(1).to({scaleX:1.1355,scaleY:0.8254,skewX:-1.072,x:619.4,y:524.8},0).wait(1).to({scaleX:1.1358,scaleY:0.8283,skewX:-2.3004,x:619.45,y:524.5},0).wait(1).to({scaleX:1.1361,scaleY:0.8311,skewX:-3.5288,y:524.25},0).wait(1).to({scaleX:1.1363,scaleY:0.834,skewX:-4.7572,x:619.4,y:524.05},0).wait(1).to({scaleX:1.1366,scaleY:0.8369,skewX:-5.9856,y:523.75},0).wait(1).to({scaleX:1.1369,scaleY:0.8398,skewX:-7.2139,x:619.45,y:523.55},0).wait(1).to({scaleX:1.1371,scaleY:0.8426,skewX:-8.4423,x:619.4,y:523.25},0).wait(1).to({scaleX:1.1374,scaleY:0.8455,skewX:-9.6707,y:523},0).wait(1).to({scaleX:1.1377,scaleY:0.8484,skewX:-10.8991,y:522.75},0).wait(1).to({scaleX:1.138,scaleY:0.8513,skewX:-12.1275,y:522.5},0).wait(1).to({scaleX:1.1382,scaleY:0.8541,skewX:-13.3559,y:522.25},0).wait(1).to({scaleX:1.1385,scaleY:0.857,skewX:-14.5842,y:522},0).wait(1).to({scaleX:1.1388,scaleY:0.8599,skewX:-15.8126,y:521.75},0).wait(1).to({scaleX:1.139,scaleY:0.8628,skewX:-17.041,y:521.5},0).wait(1).to({scaleY:0.8656,skewX:-18.2694,x:619.5,y:521.25},0).wait(1).to({scaleY:0.8685,skewX:-19.4978,x:619.6,y:521},0).wait(1).to({scaleY:0.8714,skewX:-20.7262,x:619.8,y:520.75},0).wait(1).to({scaleY:0.8742,skewX:-21.9545,x:619.9,y:520.55},0).wait(1).to({scaleY:0.8771,skewX:-23.1829,x:620.05,y:520.25},0).wait(1).to({scaleY:0.88,skewX:-24.4113,x:620.15,y:520},0).wait(1).to({scaleY:0.8829,skewX:-25.6397,x:620.3,y:519.8},0).wait(1).to({scaleY:0.8857,skewX:-26.8681,x:620.45,y:519.55},0).wait(1).to({scaleY:0.8886,skewX:-28.0964,x:620.6,y:519.3},0).wait(1).to({scaleY:0.8915,skewX:-29.3248,x:620.7,y:519.05},0).wait(1).to({scaleY:0.8943,skewX:-30.5532,x:620.85,y:518.85},0).wait(1).to({scaleY:0.8972,skewX:-31.7816,x:620.95,y:518.6},0).wait(1).to({scaleY:0.9001,skewX:-33.01,x:621.1,y:518.35},0).wait(1).to({scaleY:0.903,skewX:-34.2384,x:621.2,y:518.1},0).wait(1).to({scaleY:0.9058,skewX:-35.4667,x:621.35,y:517.85},0).wait(1).to({scaleY:0.9087,skewX:-36.6951,x:621.5,y:517.6},0).wait(1).to({scaleY:0.9116,skewX:-37.9235,x:621.6,y:517.4},0).wait(1).to({scaleY:0.9145,skewX:-39.1519,x:621.75,y:517.15},0).wait(1).to({scaleY:0.9173,skewX:-40.3803,x:621.9,y:516.9},0).wait(1).to({scaleY:0.9202,skewX:-41.6086,x:622,y:516.65},0).wait(1).to({scaleY:0.9231,skewX:-42.837,x:622.15,y:516.45},0).wait(1).to({scaleY:0.9259,skewX:-44.0654,x:622.25,y:516.15},0).wait(1).to({scaleY:0.9288,skewX:-45.2938,x:622.4,y:515.9},0).wait(1).to({scaleY:0.9317,skewX:-46.5222,x:622.55,y:515.7},0).wait(1).to({scaleY:0.9346,skewX:-47.7506,x:622.7,y:515.45},0).wait(1).to({scaleY:0.9374,skewX:-48.9789,x:622.8,y:515.2},0).wait(1).to({scaleY:0.9403,skewX:-50.2073,x:622.95,y:514.95},0).wait(1).to({scaleY:0.9432,skewX:-51.4357,x:623.1,y:514.75},0).wait(1).to({x:623.25,y:514.5},0).wait(1).to({x:623.4,y:514.25},0).wait(1).to({x:623.55,y:514},0).wait(1).to({x:623.7,y:513.75},0).wait(1).to({x:623.85,y:513.5},0).wait(1).to({x:624,y:513.25},0).wait(1).to({x:624.15,y:513},0).wait(1).to({x:624.3,y:512.75},0).wait(1).to({x:624.45,y:512.5},0).wait(1).to({x:624.6,y:512.25},0).wait(1).to({x:624.75,y:512},0).wait(1).to({x:624.9,y:511.75},0).wait(1).to({x:625.05,y:511.5},0).wait(1).to({x:625.2,y:511.2},0).wait(1).to({x:625.35,y:510.95},0).wait(1).to({x:625.5,y:510.7},0).wait(1).to({x:625.65,y:510.45},0).wait(1).to({x:625.8,y:510.2},0).wait(1).to({x:625.95,y:509.95},0).wait(1).to({x:626.1,y:509.7},0).wait(1).to({x:615.3,y:505.45},0).wait(1).to({x:604.5,y:501.2},0).wait(1).to({x:593.65,y:496.95},0).wait(1).to({x:582.85,y:492.7},0).wait(1).to({x:572.05,y:488.45},0).wait(1).to({x:561.2,y:484.2},0).wait(1).to({x:550.4,y:479.95},0).wait(1).to({x:539.6,y:475.7},0).wait(1).to({x:528.75,y:471.4},0).wait(1).to({x:517.95,y:467.15},0).wait(1).to({x:507.1,y:462.9},0).wait(1).to({x:496.3,y:458.65},0).wait(1).to({x:485.5,y:454.4},0).wait(1).to({x:474.65,y:450.15},0).wait(1).to({x:463.85,y:445.9},0).wait(1).to({x:453.05,y:441.65},0).wait(1).to({x:442.2,y:437.4},0).wait(1).to({x:431.4,y:433.15},0).wait(1).to({x:420.6,y:428.85},0).wait(1).to({x:409.75,y:424.6},0).wait(1).to({x:398.95,y:420.35},0).wait(1).to({x:409.8,y:428.75},0).wait(1).to({x:420.7,y:437.15},0).wait(1).to({x:431.55,y:445.55},0).wait(1).to({x:442.4,y:453.95},0).wait(1).to({x:453.3,y:462.35},0).wait(1).to({x:464.15,y:470.7},0).wait(1).to({x:475,y:479.1},0).wait(1).to({x:485.85,y:487.5},0).wait(1).to({x:496.75,y:495.9},0).wait(1).to({x:507.6,y:504.3},0).wait(1).to({x:518.45,y:512.7},0).wait(1).to({x:529.35,y:521.1},0).wait(1).to({x:540.2,y:529.5},0).wait(1).to({x:551.05,y:537.85},0).wait(1).to({_off:true},1).wait(158));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({_off:false},0).wait(1).to({regX:124.5,regY:100.8,scaleX:0.8905,scaleY:0.9905,rotation:-0.3964,x:204.3,y:509.45},0).wait(1).to({scaleX:0.781,scaleY:0.981,rotation:-0.7928,x:212.95,y:509.7},0).wait(1).to({scaleX:0.6715,scaleY:0.9715,rotation:-1.1892,x:235.1,y:508.15},0).wait(1).to({scaleX:0.562,scaleY:0.962,rotation:-1.5856,x:264.65,y:505.3},0).wait(1).to({scaleX:0.4525,scaleY:0.9524,rotation:-1.982,x:299.35,y:501.15},0).wait(1).to({scaleX:0.3429,scaleY:0.9429,rotation:-2.3784,x:338.25,y:495.9},0).wait(1).to({scaleX:0.2334,scaleY:0.9334,rotation:-2.7748,x:380.7,y:489.55},0).wait(1).to({scaleX:0.1239,scaleY:0.9239,rotation:-3.1712,x:426.3,y:482.1},0).wait(1).to({scaleX:0.0144,scaleY:0.9144,rotation:-3.5676,x:475.15,y:473.6},0).wait(1).to({scaleX:0.0951,scaleY:0.9049,rotation:0,skewX:-3.964,skewY:176.0361,x:527.2,y:463.9},0).wait(1).to({scaleX:0.2046,scaleY:0.8954,skewX:-4.3604,skewY:175.6397,x:582.75,y:453.1},0).wait(1).to({scaleX:0.3141,scaleY:0.8859,skewX:-4.7568,skewY:175.2433,x:642.5,y:441},0).wait(1).to({scaleX:0.4236,scaleY:0.8763,skewX:-5.1532,skewY:174.8469,x:707.5,y:427.55},0).wait(1).to({scaleX:0.5331,scaleY:0.8668,skewX:-5.5496,skewY:174.4505,x:780.2,y:412.25},0).wait(1).to({scaleX:0.6427,scaleY:0.8573,skewX:-5.946,skewY:174.0541,x:866.55,y:394.55},0).wait(1).to({scaleX:0.7522,scaleY:0.8478,skewX:-6.3424,skewY:173.6577,x:1014.7,y:368},0).wait(1).to({scaleX:0.7476,scaleY:0.8383,skewX:-6.7388,skewY:173.2614,x:971.25,y:383.1},0).wait(1).to({scaleX:0.7431,scaleY:0.8287,skewX:-7.1352,skewY:172.865,x:932.65,y:397.65},0).wait(1).to({scaleX:0.7386,scaleY:0.8193,skewX:-7.5316,skewY:172.4686,x:899,y:411.45},0).wait(1).to({scaleX:0.734,scaleY:0.8097,skewX:-7.928,skewY:172.0722,x:871.95,y:424.35},0).wait(1).to({scaleX:0.7295,scaleY:0.8002,skewX:-8.3244,skewY:171.6758,x:854.55,y:435.85},0).wait(1).to({scaleX:0.725,scaleY:0.7907,skewX:-8.7208,skewY:171.2794,x:855.35,y:444.8},0).wait(1).to({scaleX:0.7205,scaleY:0.7812,skewX:-9.1172,skewY:170.883,x:964.05,y:437.95},0).wait(1).to({scaleX:0.7159,scaleY:0.7717,skewX:-9.5136,skewY:170.4866,x:933.7,y:449.45},0).wait(1).to({scaleX:0.7114,scaleY:0.7622,skewX:-9.91,skewY:170.0902,x:908.15,y:460.25},0).wait(1).to({scaleX:0.7069,scaleY:0.7526,skewX:-10.3064,skewY:169.6938,x:887.65,y:470.35},0).wait(1).to({scaleX:0.7023,scaleY:0.7431,skewX:-10.7028,skewY:169.2975,x:873.7,y:479.5},0).wait(1).to({scaleX:0.6978,scaleY:0.7336,skewX:-11.0992,skewY:168.9011,x:869.45,y:487.3},0).wait(1).to({scaleX:0.6932,scaleY:0.7241,skewX:-11.4956,skewY:168.5047,x:883.35,y:492.5},0).wait(1).to({scaleX:0.6887,scaleY:0.7146,skewX:-11.892,skewY:168.1083,x:1005.15,y:482},0).wait(1).to({scaleX:0.6842,scaleY:0.7051,skewX:-12.2884,skewY:167.7119,x:994.7,y:479.25},0).wait(1).to({scaleX:0.6797,scaleY:0.6956,skewX:-12.6848,skewY:167.3155,x:984.35,y:476.45},0).wait(1).to({scaleX:0.6751,scaleY:0.686,skewX:-13.0812,skewY:166.9191,x:974.1,y:473.65},0).wait(1).to({scaleX:0.6706,scaleY:0.6765,skewX:-13.4776,skewY:166.5227,x:963.9,y:470.95},0).wait(1).to({scaleX:0.6661,scaleY:0.667,skewX:-13.874,skewY:166.1263,x:953.75,y:468.25},0).wait(1).to({scaleX:0.6615,scaleY:0.6575,skewX:-14.2704,skewY:165.7299,x:943.75,y:465.6},0).wait(1).to({scaleX:0.657,scaleY:0.648,skewX:-14.6668,skewY:165.3335,x:933.75,y:462.9},0).wait(1).to({scaleX:0.6525,scaleY:0.6385,skewX:-15.0632,skewY:164.9372,x:923.85,y:460.25},0).wait(1).to({scaleX:0.6479,scaleY:0.629,skewX:-15.4596,skewY:164.5408,x:914,y:457.65},0).wait(1).to({scaleX:0.6434,scaleY:0.6194,skewX:-15.856,skewY:164.1444,x:904.2,y:455.05},0).wait(1).to({scaleX:0.6389,scaleY:0.6099,skewX:-16.2524,skewY:163.748,x:894.5,y:452.5},0).wait(1).to({scaleX:0.6343,scaleY:0.6004,skewX:-16.6488,skewY:163.3516,x:884.85,y:450},0).wait(1).to({scaleX:0.6298,scaleY:0.5909,skewX:-17.0452,skewY:162.9552,x:875.2,y:447.5},0).wait(1).to({scaleX:0.6253,scaleY:0.5814,skewX:-17.4416,skewY:162.5588,x:865.7,y:445},0).wait(1).to({scaleX:0.6207,scaleY:0.5719,skewX:-17.838,skewY:162.1624,x:856.25,y:442.45},0).wait(1).to({scaleX:0.6162,scaleY:0.5624,skewX:-18.2345,skewY:161.766,x:846.9,y:440.05},0).wait(1).to({scaleX:0.6117,scaleY:0.5528,skewX:-18.6309,skewY:161.3696,x:837.55,y:437.65},0).wait(1).to({scaleX:0.6071,scaleY:0.5433,skewX:-19.0273,skewY:160.9732,x:828.3,y:435.2},0).wait(1).to({scaleX:0.6026,scaleY:0.5338,skewX:-19.4237,skewY:160.5769,x:819.15,y:432.85},0).wait(1).to({scaleX:0.5981,scaleY:0.5243,skewX:-19.8201,skewY:160.1805,x:810.05,y:430.5},0).wait(1).to({scaleX:0.5936,scaleY:0.5148,skewX:-20.2165,skewY:159.7841,x:801.1,y:428.2},0).wait(1).to({scaleX:0.589,scaleY:0.5053,skewX:-20.6129,skewY:159.3877,x:792.2,y:425.85},0).wait(1).to({scaleX:0.5845,scaleY:0.4958,skewX:-21.0093,skewY:158.9913,x:783.35,y:423.6},0).wait(1).to({scaleX:0.58,scaleY:0.4862,skewX:-21.4057,skewY:158.5949,x:774.7,y:421.35},0).wait(1).to({scaleX:0.5754,scaleY:0.4767,skewX:-21.8021,skewY:158.1985,x:766.05,y:419.05},0).wait(1).to({scaleX:0.5709,scaleY:0.4672,skewX:-22.1985,skewY:157.8021,x:757.55,y:416.85},0).wait(1).to({scaleX:0.5664,scaleY:0.4577,skewX:-22.5949,skewY:157.4057,x:749.1,y:414.65},0).wait(1).to({scaleX:0.5618,scaleY:0.4482,skewX:-22.9913,skewY:157.0093,x:740.8,y:412.45},0).wait(1).to({scaleX:0.5573,scaleY:0.4387,skewX:-23.3877,skewY:156.613,x:732.65,y:410.3},0).wait(1).to({scaleX:0.5528,scaleY:0.4292,skewX:-23.7841,skewY:156.2166,x:724.65,y:408.15},0).wait(1).to({scaleX:0.5482,scaleY:0.4196,skewX:-24.1805,skewY:155.8202,x:716.75,y:406},0).wait(1).to({scaleX:0.5437,scaleY:0.4101,skewX:-24.5769,skewY:155.4238,x:708.9,y:403.85},0).wait(1).to({scaleX:0.5392,scaleY:0.4006,skewX:-24.9733,skewY:155.0274,x:701.3,y:401.75},0).wait(1).to({scaleX:0.5346,scaleY:0.3911,skewX:-25.3697,skewY:154.631,x:693.8,y:399.6},0).wait(1).to({scaleX:0.5301,scaleY:0.3816,skewX:-25.7661,skewY:154.2346,x:686.45,y:397.55},0).wait(1).to({scaleX:0.5256,scaleY:0.3721,skewX:-26.1625,skewY:153.8382,x:679.4,y:395.45},0).wait(1).to({scaleX:0.521,scaleY:0.3626,skewX:-26.5589,skewY:153.4418,x:672.5,y:393.4},0).wait(1).to({scaleX:0.5165,scaleY:0.353,skewX:-26.9553,skewY:153.0454,x:665.75,y:391.3},0).wait(1).to({scaleX:0.512,scaleY:0.3435,skewX:-27.3517,skewY:152.649,x:659.25,y:389.25},0).wait(1).to({scaleX:0.5075,scaleY:0.334,skewX:-27.7481,skewY:152.2527,x:652.95,y:387.15},0).wait(1).to({scaleX:0.5029,scaleY:0.3245,skewX:-28.1445,skewY:151.8563,x:647,y:385.1},0).wait(1).to({scaleX:0.4984,scaleY:0.315,skewX:-28.5409,skewY:151.4599,x:641.25,y:383},0).wait(1).to({scaleX:0.4939,scaleY:0.3055,skewX:-28.9373,skewY:151.0635,x:635.9,y:380.9},0).wait(1).to({scaleX:0.4893,scaleY:0.296,skewX:-29.3337,skewY:150.6671,x:630.9,y:378.8},0).wait(1).to({scaleX:0.4848,scaleY:0.2864,skewX:-29.7301,skewY:150.2707,x:626.25,y:376.65},0).wait(1).to({scaleX:0.4803,scaleY:0.2769,skewX:-30.1265,skewY:149.8743,x:622.15,y:374.45},0).wait(1).to({scaleX:0.4757,skewX:-30.1282,skewY:149.8726,x:619.3,y:373.7},0).wait(1).to({scaleX:0.4712,skewX:-30.1298,skewY:149.871,x:617.15,y:372.8},0).wait(1).to({scaleX:0.4667,skewX:-30.1315,skewY:149.8693,x:615.7,y:371.75},0).wait(1).to({scaleX:0.4621,skewX:-30.1332,skewY:149.8677,x:615.15,y:370.65},0).wait(1).to({scaleX:0.4576,skewX:-30.1349,skewY:149.866,x:615.7,y:369.35},0).wait(1).to({scaleX:0.4531,skewX:-30.1365,skewY:149.8643,x:617.7,y:367.8},0).wait(1).to({scaleX:0.4485,skewX:-30.1382,skewY:149.8627,x:621.8,y:366.05},0).wait(1).to({x:631.15,y:362.6},0).wait(1).to({x:646.7,y:358.3},0).wait(1).to({x:700.25,y:348.4},0).wait(1).to({scaleX:0.4345,scaleY:0.3279,skewX:-31.6523,skewY:148.3487,x:650.25,y:352.95},0).wait(1).to({scaleX:0.4205,scaleY:0.3788,skewX:-33.1663,skewY:146.8347,x:602.7,y:357.5},0).wait(1).to({scaleX:0.4064,scaleY:0.4297,skewX:-34.6803,skewY:145.3208,x:557.45,y:362.1},0).wait(1).to({scaleX:0.3924,scaleY:0.4807,skewX:-36.1944,skewY:143.8068,x:514.8,y:366.8},0).wait(1).to({scaleX:0.3784,scaleY:0.5316,skewX:-37.7084,skewY:142.2929,x:475.35,y:371.4},0).wait(1).to({scaleX:0.3643,scaleY:0.5825,skewX:-39.2225,skewY:140.7789,x:439.65,y:375.9},0).wait(1).to({scaleX:0.3503,scaleY:0.6335,skewX:-40.7365,skewY:139.2649,x:409.3,y:379.95},0).wait(1).to({scaleX:0.3363,scaleY:0.6844,skewX:-42.2506,skewY:137.751,x:387,y:383.2},0).wait(1).to({scaleX:0.3223,scaleY:0.7353,skewX:-43.7646,skewY:136.237,x:379.95,y:384.7},0).wait(1).to({scaleX:0.3082,scaleY:0.7863,skewX:-45.2787,skewY:134.7231,x:463.1,y:373.35},0).wait(1).to({scaleX:0.329,scaleY:0.8102,skewX:-45.2803,skewY:134.7211,x:425.2,y:377.8},0).wait(1).to({scaleX:0.3497,scaleY:0.8341,skewX:-45.282,skewY:134.7192,x:389.6,y:381.9},0).wait(1).to({scaleX:0.3705,scaleY:0.8579,skewX:-45.2837,skewY:134.7173,x:356.35,y:385.7},0).wait(1).to({scaleX:0.3912,scaleY:0.8818,skewX:-45.2853,skewY:134.7154,x:325.55,y:389.05},0).wait(1).to({scaleX:0.412,scaleY:0.9057,skewX:-45.287,skewY:134.7135,x:297.75,y:392},0).wait(1).to({scaleX:0.4327,scaleY:0.9296,skewX:-45.2886,skewY:134.7115,x:273.75,y:394.4},0).wait(1).to({scaleX:0.4535,scaleY:0.9535,skewX:-45.2903,skewY:134.7096,x:254.9,y:396},0).wait(1).to({scaleX:0.4742,scaleY:0.9774,skewX:-45.292,skewY:134.7077,x:243.9,y:396.55},0).wait(1).to({scaleX:0.495,scaleY:1.0013,skewX:-45.2936,skewY:134.7058,x:248.05,y:394.85},0).wait(1).to({scaleX:0.5157,scaleY:1.0252,skewX:-45.2953,skewY:134.7038,x:342.25,y:380.05},0).wait(1).to({x:258.75,y:398.95},0).wait(1).to({x:184.75,y:416.45},0).wait(1).to({x:122.95,y:432.2},0).wait(1).to({x:83.2,y:444.7},0).wait(1).to({x:171.5,y:438.55},0).wait(1).to({x:-9.25,y:482.3},0).wait(1).to({x:19.8,y:495.45},0).wait(1).to({x:-8.8,y:499.6},0).wait(1).to({x:-34.45,y:503.35},0).wait(1).to({x:-57.25,y:506.7},0).wait(1).to({x:-76.8,y:509.55},0).wait(1).to({x:-92.3,y:511.8},0).wait(1).to({x:-102.25,y:513.25},0).wait(1).to({x:-103.85,y:513.45},0).wait(1).to({x:-89.55,y:511.4},0).wait(1).to({x:19.8,y:495.45},0).wait(1).to({x:38,y:494.1},0).wait(1).to({x:54.5,y:492.85},0).wait(1).to({x:69.55,y:491.7},0).wait(1).to({x:83.1,y:490.6},0).wait(1).to({x:95.15,y:489.65},0).wait(1).to({x:105.6,y:488.75},0).wait(1).to({x:114.3,y:488},0).wait(1).to({x:121,y:487.35},0).wait(1).to({x:125.4,y:486.85},0).wait(1).to({x:127.2,y:486.5},0).wait(1).to({x:125.8,y:486.4},0).wait(1).to({x:120.35,y:486.5},0).wait(1).to({x:105.4,y:487.4},0).wait(1).to({x:81.7,y:489.1},0).wait(1).to({x:53.55,y:491.1},0).wait(1).to({x:22.9,y:493.3},0).wait(1).to({x:-8.9,y:495.55},0).wait(1).to({x:-40.7,y:497.65},0).wait(1).to({x:-70.9,y:499.4},0).wait(1).to({x:-96,y:500.35},0).wait(1).to({x:-81.95,y:495.45},0).wait(1).to({x:-171.6,y:526.5},0).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.FIGHT_PROJECT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,357,361];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.BUTTON.start;
		var self=this;
		self.stop();
		
		self.start.addEventListener("click",startPlaying)
		
		function startPlaying() {
			self.gotoAndPlay(1);
		}
		playSound("eye_of_the_tigerAudioTrimmercom");
	}
	this.frame_1 = function() {
		this.start = undefined;
	}
	this.frame_357 = function() {
		this.playAgain = this.BUTTON.playAgain;
		var self=this;
		self.stop();
		
		self.playAgain.addEventListener("click",playAgain);
		
		function playAgain() {
			self.gotoAndPlay(0);
			
		}
	}
	this.frame_361 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(356).call(this.frame_357).wait(4).call(this.frame_361).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(5).to({regX:1.4,regY:1.4,scaleX:0.6883,scaleY:0.6883,x:484.55,y:401.3},0).wait(1).to({regX:0,regY:0,x:483.6,y:400.35},0).wait(3).to({regX:1.6,regY:1.5,scaleX:0.6281,scaleY:0.6281,x:494.35,y:473.8},0).wait(1).to({regX:0,regY:0,x:493.35,y:472.85},0).wait(9).to({regX:1.8,regY:1.7,scaleX:0.4746,scaleY:0.4746,x:481.85,y:541.85},0).wait(1).to({regX:0,regY:0,x:481,y:541.05},0).wait(5).to({regX:1.9,regY:1.9,scaleX:0.6866,scaleY:0.6866,x:514,y:436.9},0).wait(1).to({regX:0,regY:0,x:512.7,y:435.6},0).wait(11).to({regX:2.3,regY:2.3,scaleX:0.5268,scaleY:0.5268,x:939.95,y:511.3},0).wait(1).to({regX:0,regY:0,x:938.75,y:510.1},0).wait(4).to({regX:2.5,regY:2.5,scaleX:0.3815,scaleY:0.3815,x:1028.75,y:531.85},0).wait(1).to({regX:0,regY:0,x:1027.8,y:530.9},0).wait(13).to({regX:2.6,regY:2.6,scaleX:0.7722,scaleY:0.7722,x:783.65,y:525.25},0).wait(1).to({regX:0,regY:0,x:781.65,y:523.25},0).wait(6).to({regX:2.9,regY:3,scaleX:1.0066,scaleY:1.0066,x:639.3,y:354.2},0).wait(1).to({regX:0,regY:0,scaleX:1.0067,scaleY:1.0067,x:636.4,y:351.2},0).wait(9).to({regX:3,regY:3,scaleX:0.9884,scaleY:0.9884,x:640.3,y:359.05},0).wait(1).to({regX:0,regY:0,x:637.35,y:356.1},0).wait(99).to({_off:true},1).wait(188));

	// BUTTON_obj_
	this.BUTTON = new lib.Scene_1_BUTTON();
	this.BUTTON.name = "BUTTON";
	this.BUTTON.setTransform(642,165,1,1,0,0,0,642,165);
	this.BUTTON.depth = 0;
	this.BUTTON.isAttachedToCamera = 0
	this.BUTTON.isAttachedToMask = 0
	this.BUTTON.layerDepth = 0
	this.BUTTON.layerIndex = 0
	this.BUTTON.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BUTTON).wait(357).to({_off:true},1).wait(4));

	// ELIPSE_obj_
	this.ELIPSE = new lib.Scene_1_ELIPSE();
	this.ELIPSE.name = "ELIPSE";
	this.ELIPSE.depth = 0;
	this.ELIPSE.isAttachedToCamera = 0
	this.ELIPSE.isAttachedToMask = 0
	this.ELIPSE.layerDepth = 0
	this.ELIPSE.layerIndex = 1
	this.ELIPSE.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ELIPSE).wait(2).to({regX:413.1,regY:453.3,x:413.1,y:453.3},0).wait(163).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:413.1,regY:453.3,scaleX:1,scaleY:1,x:408.45,y:453.1},0).wait(144).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},13).wait(39));

	// SQUARE_obj_
	this.SQUARE = new lib.Scene_1_SQUARE();
	this.SQUARE.name = "SQUARE";
	this.SQUARE.depth = 0;
	this.SQUARE.isAttachedToCamera = 0
	this.SQUARE.isAttachedToMask = 0
	this.SQUARE.layerDepth = 0
	this.SQUARE.layerIndex = 2
	this.SQUARE.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.SQUARE).wait(8).to({regX:43.1,regY:152.5,scaleX:1.4529,scaleY:1.4529},0).wait(5).to({regX:91.3,regY:246.7,scaleX:1.5921,scaleY:1.5921,x:-0.05,y:0.1},0).wait(7).to({regX:177.2,regY:370.2,scaleX:2.1072,scaleY:2.1072,x:-0.1,y:0.15},0).wait(13).to({regX:73.2,regY:188.4,scaleX:1.4565,scaleY:1.4565,x:0,y:0},0).wait(5).to({regX:601.5,regY:320.4,scaleX:1.8982,scaleY:1.8982,y:0.15},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:282.65,y:134.8},0).wait(15).to({regX:783.6,regY:393.6,scaleX:2.6215,scaleY:2.6215,x:-0.15,y:0.15},0).wait(3).to({regX:287.4,regY:245.2,scaleX:1.2951,scaleY:1.2951,x:-0.05,y:-0.05},0).wait(2).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:596.7,y:209.9},0).wait(15).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:879.45,y:454.9},0).wait(16).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:879.45,y:454.9},0).wait(12).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:879.45,y:454.9},0).wait(14).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:879.45,y:454.9},0).wait(12).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:879.45,y:454.9},0).wait(18).to({regX:4.7,regY:0.2,scaleX:1.0117,scaleY:1.0117,x:0,y:-0.05},0).wait(1).to({regX:884.1,regY:455.1,scaleX:1,scaleY:1,x:879.45,y:454.9},0).wait(166).to({_off:true},1).wait(43));

	// CROWD_obj_
	this.CROWD = new lib.Scene_1_CROWD();
	this.CROWD.name = "CROWD";
	this.CROWD.setTransform(641.1,150.6,1,1,0,0,0,641.1,150.6);
	this.CROWD.depth = 0;
	this.CROWD.isAttachedToCamera = 0
	this.CROWD.isAttachedToMask = 0
	this.CROWD.layerDepth = 0
	this.CROWD.layerIndex = 3
	this.CROWD.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.CROWD).wait(358).to({_off:true},1).wait(3));

	// STAGE_obj_
	this.STAGE = new lib.Scene_1_STAGE();
	this.STAGE.name = "STAGE";
	this.STAGE.setTransform(636.9,642.9,1,1,0,0,0,636.9,642.9);
	this.STAGE.depth = 0;
	this.STAGE.isAttachedToCamera = 0
	this.STAGE.isAttachedToMask = 0
	this.STAGE.layerDepth = 0
	this.STAGE.layerIndex = 4
	this.STAGE.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.STAGE).wait(362));

	// BG_obj_
	this.BG = new lib.Scene_1_BG();
	this.BG.name = "BG";
	this.BG.setTransform(641.1,360.2,1,1,0,0,0,641.1,360.2);
	this.BG.depth = 0;
	this.BG.isAttachedToCamera = 0
	this.BG.isAttachedToMask = 0
	this.BG.layerDepth = 0
	this.BG.layerIndex = 5
	this.BG.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.BG).wait(362));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(346.9,347.8,1143.9,454.40000000000003);
// library properties:
lib.properties = {
	id: '6B4AAAD41FB1E9409E2EB46EE18921E2',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_11.png", id:"CachedBmp_11"},
		{src:"images/CachedBmp_3.png", id:"CachedBmp_3"},
		{src:"images/FIGHT_PROJECT2_atlas_1.png", id:"FIGHT_PROJECT2_atlas_1"},
		{src:"images/FIGHT_PROJECT2_atlas_2.png", id:"FIGHT_PROJECT2_atlas_2"},
		{src:"sounds/eye_of_the_tigerAudioTrimmercom.mp3", id:"eye_of_the_tigerAudioTrimmercom"}
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
an.compositions['6B4AAAD41FB1E9409E2EB46EE18921E2'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;