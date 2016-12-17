(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1456,
	height: 180,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/img_athlete1.png", id:"img_athlete1"},
		{src:"images/img_athlete2.png", id:"img_athlete2"},
		{src:"images/img_facilities.png", id:"img_facilities"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.img_athlete1 = function() {
	this.initialize(img.img_athlete1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.img_facilities = function() {
	this.initialize(img.img_facilities);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1092,134);


(lib._25Multiply50Image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-3.4,-12.6,-3.4,26.9).s().p("A3bE7IAAp1MAu2AAAIAAJ1g");
	this.shape.setTransform(150,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,63);


(lib.textheadline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape.setTransform(464.6,127.9,1.969,1.969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBiIgWhSIgRABIAABRIgiAAIAAjDIAvAAQAbAAAOANQAOAOAAAfQAAAngXAJIAcBZgAgTgJIAMAAQALAAAGgGQAGgGAAgSQAAgRgGgHQgGgGgLAAIgMAAg");
	this.shape_1.setTransform(439.6,127.9,1.969,1.969);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape_2.setTransform(414.7,127.9,1.969,1.969);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBiIAAhXIgiAAIAABXIghAAIAAjDIAhAAIAABQIAiAAIAAhQIAiAAIAADDg");
	this.shape_3.setTransform(390.1,127.9,1.969,1.969);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBiIgZiAIAAAAIgVCAIgdAAIgljDIAgAAIAUB8IABAAIAWh8IAaAAIAXB8IABAAIASh8IAgAAIgjDDg");
	this.shape_4.setTransform(358.1,127.9,1.969,1.969);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBiIAAhSIgphxIAiAAIAWBLIAAAAIAXhLIAiAAIgpBxIAABSg");
	this.shape_5.setTransform(326.7,127.9,1.969,1.969);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBiIgph5IgBAAIAAB5IgeAAIAAjDIAfAAIAnBvIABAAIAAhvIAeAAIAADDg");
	this.shape_6.setTransform(301,127.9,1.969,1.969);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBiIgGgrIgjAAIgGArIghAAIAkjDIApAAIAkDDgAgMAZIAZAAIgNhTIAAAAg");
	this.shape_7.setTransform(276,127.9,1.969,1.969);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape_8.setTransform(242.3,127.9,1.969,1.969);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBiIAAimIghAAIAAgdIBhAAIAAAdIghAAIAACmg");
	this.shape_9.setTransform(219,127.9,1.969,1.969);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape_10.setTransform(196.8,127.9,1.969,1.969);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BiIAAjDIAwAAQAeAAAOANQAPAOABAfQgBAfgPAMQgOANgeAAIgPAAIAABRgAgUgJIAOAAQAOAAAGgGQAHgGgBgSQABgRgHgHQgGgGgOAAIgOAAg");
	this.shape_11.setTransform(173.6,127.9,1.969,1.969);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBiIAAiYIAAAAIggCYIgNAAIggiYIAAAAIAACYIgdAAIAAjDIAsAAIAXBxIAAAAIAYhxIAsAAIAADDg");
	this.shape_12.setTransform(143.8,127.9,1.969,1.969);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmBWQgMgNAAgXIAAhkQAAgVAMgOQAOgPAYAAQAZAAAOAPQAMAOAAAVIAABkQAAAXgMANQgOAPgZAAQgYAAgOgPgAgNhBQgDAEAAAMIAABjQAAALADAEQAEAGAJAAQAJAAAEgGQAEgFABgKIAAhjQgBgLgEgFQgEgFgJgBQgJABgEAFg");
	this.shape_13.setTransform(114.7,128,1.969,1.969);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBWQgNgNAAgXIAAhkQAAgVANgOQAOgPAYAAQAYAAAOAQQALAOAAAYIAAAOIghAAIAAgPQAAgLgFgHQgFgFgGgBQgIABgFAFQgDAEAAAMIAABjQAAALADAEQAFAGAIAAQAQAAAAgTIAAgZIAhAAIAAAXQAAAXgLANQgOAPgYAAQgYAAgOgPg");
	this.shape_14.setTransform(90.1,128,1.969,1.969);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhWC2IAAlrICmAAIAAA2IhnAAIAABfIBPAAIAAA0IhPAAIAABsIBuAAIAAA2g");
	this.shape_15.setTransform(456.6,64.8,1.969,1.969);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAlC2IgqiXQgMABgVAAIAACWIg+AAIAAlrIBYAAQA0AAAZAZQAbAZAAA6QAABIgsASIA1ClgAgmgRIAXAAQAYAAAKgMQAKgMAAggQAAgggKgNQgKgMgYAAIgXAAg");
	this.shape_16.setTransform(410.4,64.8,1.969,1.969);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhWC2IAAlrICmAAIAAA2IhnAAIAABfIBPAAIAAA0IhPAAIAABsIBuAAIAAA2g");
	this.shape_17.setTransform(364.3,64.8,1.969,1.969);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAhC2IAAiiIhBAAIAACiIg/AAIAAlrIA/AAIAACVIBBAAIAAiVIA/AAIAAFrg");
	this.shape_18.setTransform(317.8,64.8,1.969,1.969);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhkC2IAAlrIBaAAQA5AAAbAZQAbAZAAA6QAAA5gbAYQgbAYg5AAIgcAAIAACWgAgmgRIAZAAQAdAAALgMQALgMAAggQAAghgLgMQgLgMgdAAIgZAAg");
	this.shape_19.setTransform(250.8,64.8,1.969,1.969);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABIC2IAAkbIgBAAIg4EbIgdAAIg4kbIgBAAIAAEbIg3AAIAAlrIBSAAIAsDTIAAAAIAtjTIBSAAIAAFrg");
	this.shape_20.setTransform(195.6,64.8,1.969,1.969);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtC2IgLhRIhDAAIgLBRIg9AAIBElrIBLAAIBEFrgAgYAvIAxAAIgZibIAAAAg");
	this.shape_21.setTransform(142.3,64.8,1.969,1.969);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGCgQgXgZAAgpIAAi7QAAgpAXgZQAagbAtAAQAtAAAZAdQAXAbAAAsIAAAbIg/AAIAAgdQAAgWgJgLQgIgLgNAAQgRAAgHAKQgIAKAAAVIAAC3QAAAVAIAKQAHAKARAAQAQAAAIgKQAGgIAAgTIAAgsIA/AAIAAAqQAAApgXAZQgZAbgtAAQgtAAgagbg");
	this.shape_22.setTransform(98.7,64.8,1.969,1.969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.1,27.9,393.8,120.1);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkRJyQhahjAAilIAArSQAAidBYhiQBghqCrAAQCrAABiByQBbBpAACnIAABaIjmAAQAAiZghg7Qgfg1hIAAQhrAAAACaIAALPQAABIAZAkQAcAoA8AAQBGAAAfgsQAdgtAAhpIAAiJIiYAAIAAi8IGKAAIAALGIh1AAIgthpQg5BEgxAbQg4AehPAAQiRAAhZhgg");
	this.shape.setTransform(355.1,130.6,0.296,0.296);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACfK+IkxtrIgFAAIAANrIjaAAIAA17IDgAAIElMiIADAAIAAsiIDaAAIAAV7g");
	this.shape_1.setTransform(328.7,130.6,0.296,0.296);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah3K+IAA17IDvAAIAAV7g");
	this.shape_2.setTransform(309,130.6,0.296,0.296);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACfK+IkytrIgDAAIAANrIjaAAIAA17IDgAAIEjMiIAEAAIAAsiIDbAAIAAV7g");
	this.shape_3.setTransform(289.3,130.6,0.296,0.296);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah3K+IAA17IDvAAIAAV7g");
	this.shape_4.setTransform(269.7,130.6,0.296,0.296);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACvK+Igsk3IkGAAIgrE3IjpAAIED17IEpAAIEDV7gAhgC0IDAAAIhfpZIgCAAg");
	this.shape_5.setTransform(250.3,130.6,0.296,0.296);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACSK+IiqpFQgwAFhMAAIAAJAIjyAAIAA17IFTAAQDOAABiBfQBnBkAADcQAACag2BeQgqBHhKAhIDNJ8gAiUhGIBVAAQBiAAAngtQAogwAAh7QAAh8gogvQgngthiAAIhVAAg");
	this.shape_6.setTransform(223.9,130.6,0.296,0.296);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah3K+IAAypIjqAAIAAjSILDAAIAADSIjqAAIAASpg");
	this.shape_7.setTransform(198.5,130.6,0.296,0.296);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRxAAIAAFzIrIAAIAAJ+IIjAAIAAFwIojAAIAALXIL4AAIAAFzg");
	this.shape_8.setTransform(348.3,64.7,0.296,0.296);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjTTWMAAAgg4ImcAAIAAlzITfAAIAAFzImcAAMAAAAg4g");
	this.shape_9.setTransform(306.4,64.7,0.296,0.296);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjTTWMAAAgmrIGnAAMAAAAmrg");
	this.shape_10.setTransform(275.2,64.7,0.296,0.296);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AohTWMAAAgmrIGpAAMAAAAg4IKaAAIAAFzg");
	this.shape_11.setTransform(246,64.7,0.296,0.296);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRxAAIAAFzIrIAAIAAJ+IIjAAIAAFwIojAAIAALXIL4AAIAAFzg");
	this.shape_12.setTransform(205.6,64.7,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrHbIjOpQIgCAAIAAJQIiUAAIAAu1ICYAAIDEIeIADAAIAAoeICUAAIAAO1g");
	this.shape.setTransform(398.3,135.3,0.341,0.341);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai8GhQg9hCAAhrIAAnoQAAhrA9hBQBDhHB5AAQB7AABCBHQA9BBAABrIAAHoQAABrg9BCQhCBHh7AAQh5AAhDhHgAhDk/QgTAYAAA3IAAHgQAAA4ATAYQAUAaAvAAQAwAAAUgaQASgYABg4IAAngQgBg3gSgYQgUgagwAAQgvAAgUAag");
	this.shape_1.setTransform(377.6,135.3,0.341,0.341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQHbIAAu1IChAAIAAO1g");
	this.shape_2.setTransform(362.4,135.3,0.341,0.341);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQHbIAAsmIieAAIAAiPIHdAAIAACPIieAAIAAMmg");
	this.shape_3.setTransform(348.5,135.3,0.341,0.341);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB2HbIgdjTIixAAIgdDTIieAAICvu1IDJAAICvO1gAhAB6ICBAAIhAmWIgBAAg");
	this.shape_4.setTransform(332.1,135.3,0.341,0.341);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABiHbIhymJQgdADg3AAIAAGGIijAAIAAu1IDlAAQCLAABCBAQBGBDAACVQAABpglBAQgcAvgyAXICKGugAhkgvIA6AAQBBAAAbgeQAbggAAhVQAAhTgbggQgbgfhBABIg6AAg");
	this.shape_5.setTransform(311.5,135.3,0.341,0.341);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB2HbIgdjTIixAAIgdDTIieAAICvu1IDJAAICvO1gAhAB6ICBAAIhAmWIgBAAg");
	this.shape_6.setTransform(290.4,135.3,0.341,0.341);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkHHbIAAu1IDqAAQCYAABFBAQBIBCAACWQAACXhIBAQhFBAiYAAIhHAAIAAGGgAhkgvIA/AAQBPAAAdgeQAegfAAhWQAAhUgegfQgdgfhPABIg/AAg");
	this.shape_7.setTransform(271.9,135.3,0.341,0.341);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjiHbIAAu1IGzAAIAACPIkQAAIAAD1IDQAAIAACMIjQAAIAAEXIEiAAIAACOg");
	this.shape_8.setTransform(252.1,135.3,0.341,0.341);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABiHbIhymJQgdADg3AAIAAGGIijAAIAAu1IDlAAQCLAABCBAQBGBDAACVQAABpglBAQgdAvgxAXICKGugAhkgvIA6AAQBBAAAbgeQAbggAAhVQAAhTgbggQgbgfhBABIg6AAg");
	this.shape_9.setTransform(232.2,135.3,0.341,0.341);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkHHbIAAu1IDqAAQCYAABFBAQBIBCAACWQAACXhIBAQhFBAiYAAIhHAAIAAGGgAhkgvIA/AAQBOAAAegeQAegfAAhWQAAhUgegfQgegfhOABIg/AAg");
	this.shape_10.setTransform(211,135.3,0.341,0.341);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRxAAIAAFzIrIAAIAAJ+IIjAAIAAFwIojAAIAALYIL4AAIAAFyg");
	this.shape_11.setTransform(386.6,70.3,0.341,0.341);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjTTWMAAAgg4ImcAAIAAlzITfAAIAAFzImcAAMAAAAg4g");
	this.shape_12.setTransform(338.4,70.3,0.341,0.341);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjTTWMAAAgmrIGnAAMAAAAmrg");
	this.shape_13.setTransform(302.4,70.3,0.341,0.341);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AohTWMAAAgmrIGpAAMAAAAg5IKaAAIAAFyg");
	this.shape_14.setTransform(268.8,70.3,0.341,0.341);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRwAAIAAFzIrHAAIAAJ+IIjAAIAAFwIojAAIAALYIL4AAIAAFyg");
	this.shape_15.setTransform(222.3,70.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.img_facilities_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_facilities();
	this.instance.setTransform(0,0,1.343,1.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1466.9,180);


(lib.logoartwork = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1, 3 & 5 Week Summer Camps - ALL SPORTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBPQgMgOAAgXIASAAQAAAQAIAJQAIAKAMAAQANAAAHgIQAHgIAAgOQAAgUgigZQglgZAAgbQAAgTAMgMQAMgMATAAQATAAAMANQAMANABAZIgSAAQgDgigXABQgMgBgHAIQgHAGAAALQAAASAjAZQAlAYAAAfQAAAWgMAMQgMANgWAAQgUAAgNgPg");
	this.shape.setTransform(462.2,84.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBbIAAikIgmAAIAAgRIBdAAIAAARIgmAAIAACkg");
	this.shape_1.setTransform(451.7,84.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBbIgbhXIgaABIAABWIgTAAIAAi1IAsAAQAUAAAOANQAOANAAAWQAAAigeAJIAfBagAgbgKIASAAQASAAAJgIQAIgIAAgPQAAgRgIgHQgJgIgSAAIgSAAg");
	this.shape_2.setTransform(441,84.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyAAQAAhdAyAAQAzAAAABdQAABdgzABQgygBAAhdgAgVg8QgJASAAAqQAAArAJASQAIAQANAAQAgAAAAhNQAAhLggAAQgNAAgIAPg");
	this.shape_3.setTransform(428.2,84.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBbIAAi1IArAAQATAAAOAOQANANAAAYQAAAWgNAOQgOALgTAAIgYAAIAABTgAgZgGIAVAAQAdAAABghQgBgigdAAIgVAAg");
	this.shape_4.setTransform(416.6,84.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBPQgNgOAAgXIASAAQABAjAbAAQANAAAHgIQAIgIAAgOQAAgUgjgZQglgZAAgbQAAgTAMgMQAMgMATAAQATAAAMANQAMANABAZIgSAAQgDgigXABQgLgBgHAIQgHAGAAALQAAASAjAZQAkAYAAAfQAAAWgMAMQgMANgWAAQgUAAgMgPg");
	this.shape_5.setTransform(404.9,84.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBbIAAi1IATAAIAAClIA6AAIAAAQg");
	this.shape_6.setTransform(389.5,84.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBbIAAi1IAUAAIAAClIA5AAIAAAQg");
	this.shape_7.setTransform(379.6,84.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBbIgKg2IgtAAIgLA2IgUAAIApi1IAZAAIAoC1gAgTAUIAnAAIgUhgIAAAAg");
	this.shape_8.setTransform(368.3,84.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAIIAAgPIA9AAIAAAPg");
	this.shape_9.setTransform(352.8,87.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghBPQgMgOAAgXIASAAQAAAQAIAJQAIAKAMAAQANAAAHgIQAHgIAAgOQAAgUgigZQglgZAAgbQAAgTAMgMQAMgMATAAQATAAAMANQAMANABAZIgSAAQgDgigXABQgMgBgHAIQgHAGAAALQAAASAjAZQAlAYAAAfQAAAWgMAMQgMANgWAAQgUAAgNgPg");
	this.shape_10.setTransform(337.3,84.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsBbIAAi1IArAAQAUAAANAOQANANAAAYQAAAWgNAOQgNALgUAAIgYAAIAABTgAgZgGIAVAAQAeAAAAghQAAgigeAAIgVAAg");
	this.shape_11.setTransform(326.4,84.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAsBbIAAimIAAAAIgmCmIgLAAIgmimIgBAAIAACmIgSAAIAAi1IAgAAIAeCJIAAAAIAfiJIAgAAIAAC1g");
	this.shape_12.setTransform(312.7,84.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBbIgLg2IgtAAIgLA2IgUAAIApi1IAZAAIApC1gAgTAUIAnAAIgUhgIAAAAg");
	this.shape_13.setTransform(299.3,84.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyAAQAAhdA0AAQAqAAAEA6IgTAAQgEgpgXABQgQAAgIARQgIARAAApQAAAqAIARQAIASAQAAQAdAAAAgvIAUAAQgBAfgMAQQgNARgXAAQg0gBAAhdg");
	this.shape_14.setTransform(287.2,84.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaBbIgahXIgbABIAABWIgTAAIAAi1IAsAAQAUAAAOANQAOANAAAWQAAAigeAJIAfBagAgbgKIASAAQASAAAJgIQAIgIAAgPQAAgRgIgHQgJgIgSAAIgSAAg");
	this.shape_15.setTransform(269.1,84.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqBbIAAi1IBSAAIAAARIg+AAIAAA+IAtAAIAAAPIgtAAIAABHIBBAAIAAAQg");
	this.shape_16.setTransform(257.4,84.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBbIAAimIAAAAIgmCmIgLAAIgmimIgBAAIAACmIgSAAIAAi1IAgAAIAeCJIAAAAIAfiJIAgAAIAAC1g");
	this.shape_17.setTransform(243.6,84.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAsBbIAAimIAAAAIgmCmIgLAAIgmimIgBAAIAACmIgSAAIAAi1IAgAAIAeCJIAAAAIAfiJIAgAAIAAC1g");
	this.shape_18.setTransform(228.1,84.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtAqIAAiFIAUAAIAACEQAAAjAZAAQAaAAAAgjIAAiEIAUAAIAACFQAAAXgLANQgMAOgXAAQgtAAAAgyg");
	this.shape_19.setTransform(214,84.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBPQgNgOAAgXIASAAQABAjAbAAQANAAAHgIQAIgIAAgOQAAgUgjgZQglgZAAgbQAAgTAMgMQAMgMATAAQATAAAMANQAMANABAZIgSAAQgDgigXABQgLgBgHAIQgHAGAAALQAAASAjAZQAkAYAAAfQAAAWgMAMQgMANgWAAQgUAAgMgPg");
	this.shape_20.setTransform(202,84.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBbIgghgIAAAAIgZAoIAAA4IgTAAIAAi1IATAAIAABcIABAAIAxhcIAVAAIgjBAIAqB1g");
	this.shape_21.setTransform(185.9,84.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqBbIAAi1IBSAAIAAARIg+AAIAAA+IAtAAIAAAPIgtAAIAABHIBBAAIAAAQg");
	this.shape_22.setTransform(174.3,84.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqBbIAAi1IBSAAIAAARIg+AAIAAA+IAtAAIAAAPIgtAAIAABHIBBAAIAAAQg");
	this.shape_23.setTransform(163,84.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdBbIgciNIgBAAIgbCNIgRAAIgfi1IATAAIAWCNIAAAAIAbiNIAPAAIAcCNIABAAIAUiNIASAAIgdC1g");
	this.shape_24.setTransform(149.2,84.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgqAzIAAgOIAcAAIAAAPQAAAPAOAAQANAAAAgWIAAgpQAAgPgNAAQgJAAgGAMIgYAAIAChcIBLAAIgBAaIgwAAIgCAnIABABQAFgHAGgCQADgCAIAAQAhAAAAAuIAAAaQAAAdgKANQgKAOgWAAQgrAAAAgpg");
	this.shape_25.setTransform(130.2,84.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgtBRQgNgMAAgWQAAgRALgQIATgUQgNgfAAgRQAAgSAJgLQAJgKAOAAQANAAAKAKQAJAJAAAOQAAAQgKAPQgFAIgPAQQAKAXAVAZQAFgNADgbIASABQgCAegLAYQAJALANAIIgKAOQgLgFgNgMQgPAUgVAAQgVAAgNgNgAgoAuQAAAOAIAIQAJAJAOAAQANAAALgQQgTgXgQggQgUAUAAAUgAgXg3QABAMAIAXQALgMADgIQAFgKAAgMQAAgHgEgFQgCgEgGAAQgQAAAAAXg");
	this.shape_26.setTransform(112.1,84.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgqAxIAAgLIAcAAIAAAMQAAASAOAAQANABAAgWIAAgOQAAgOgGgGQgGgGgNAAIAAgWQANAAAFgGQAGgGAAgQQAAgNgDgGQgDgGgGABQgNAAAAASIAAAIIgcAAIAAgJQAAgTALgMQAMgMASAAQATAAALAPQAKANAAATQAAARgDAJQgFAKgLAHQANAEAFALQAEAIAAAUQAAA1grABQgqAAAAgtg");
	this.shape_27.setTransform(93.5,84.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAeIAMgeIgLAAIAAgdIAcAAIAAAdIgQAeg");
	this.shape_28.setTransform(79.5,93.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAABcIAAiPIgZAAIAAgRQAYgMALgLIAQAAIAAC3g");
	this.shape_29.setTransform(70.1,84.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AvNCQQgyg0AAhcQAAhZAyg2QAyg1BUAAQBJAAAvA0IAAgrIApAAIAACFIgsAAQgDgwgegbQgegcgxAAQg+AAgkAqQglApAABHQAABLAlAqQAkAqBAAAQBWAAAThgIA1AAQgHBDgpAjQgpAjhJAAQhXAAgyg1gASRC8IAAgnIA/AAIAAh3Ih7izIgfAAIAAgmICPAAIAAAmIg2AAIBgCJIBeiJIg3AAIAAgmICOAAIAAAmIggAAIiACzIAAB3IA/AAIAAAngAN7C8IAAgnIA0AAIAAkqIgDAAIh8FRIgrAAIh6lRIgBAAIAAEqIAxAAIAAAnIiWAAIAAgnIAxAAIAAkqIgxAAIAAgmICLAAIBtE0IBuk0ICLAAIAAAmIg0AAIAAEqIA0AAIAAAngAC4C8IAAgnIA0AAIAAkqIg0AAIAAgmIFAAAIAABxIgnAAIAAhLIiyAAIAACAIBXAAIAAg4IAnAAIAACTIgnAAIAAg2IhXAAIAACFICyAAIAAhQIAnAAIAAB3gAjKC8IAAgnIA0AAIAAkqIg0AAIAAgmICoAAQBfAAAzAwQA0AxAABaQAABbg0AwQgzAxhfAAgAhiCVIBAAAQBDAAAngnQAmgoAAhGQAAhGgmgoQgmgnhEAAIhAAAgAmDC8IAAgnIA2AAIgghTIirAAIgjBTIA4AAIAAAnIiVAAIAAgnIAqAAICSlQIA5AAICPFQIAqAAIAAAngAl9AbIhFiiIhFCiICKAAgAyOC8IAAgnIA2AAIgghTIiqAAIgkBTIA4AAIAAAnIiVAAIAAgnIAqAAICSlQIA6AAICPFQIAqAAIAAAngAyIAbIhFiiIhFCiICKAAg");
	this.shape_30.setTransform(339.6,33.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AGZDDQhaAAgnghQgzgrAAhyQAAhyA0guQAsgnBkAAQBLAAArAFQAWACAGADIgHB3Ig0AAIgIg6QgdgDgdAAQgnAAgSANQgkAaAABRQAABOAWAgQALARAUADQANACA2gBIAAhNIgwgNIAAgxICQAAIAIDRgAAkC7IAIg6IAdgFIgRi7IhQD6Ih3AAIhWj7IgTC8IAdAFIAIA6IiWAAIAHg6IAegFIAbj6IgegFIgHg6IC3AAIBSDrIBMjqIDDAAIgHA5IgeAGIAXD5IAeAFIAHA6gApAC7IAIg6IAdgFIAAj5IgdgGIgIg5IC9AAIgHA5IgdAGIAAD5IAdAFIAHA6g");
	this.shape_31.setTransform(120.5,33.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AjHDDIBElVIgFFSIBBmWIATGzIA0oIIA2IIIARm1IBCGZIgGlTIBFFVIjIBpg");
	this.shape_32.setTransform(20.1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,484,96.8);


(lib.ctabgtint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FA124").s().p("A63EsIAApXMA1uAAAIAAJXg");
	this.shape.setTransform(172,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD730").s().p("A63EsIAApXMA1uAAAIAAJXg");
	this.shape.setTransform(172,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


(lib.ctaarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F53").s().p("AhHCzICOiQIkYAAIAAhFIEYAAIiOiQIBkAAIC1CyIi1Czg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-17.9,42.1,36);


(lib.clickthrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.imgathlete2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180.1);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork
	this.instance = new lib.logoartwork();
	this.instance.setTransform(291,92.2,1.017,1.016,0,0,0,242,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtdAOEIAA8HMBa7AAAIAAcHg");
	this.shape.setTransform(291,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// vertical 6px
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFD730").s().dr(-3,-90,6,180);
	this.shape_1.setTransform(-3,90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,588,180);


(lib.ctalabelsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F53").s().p("AhfCtIAAlZIBWAAQA1AAAaAYQAaAYAAA2QAAA3gaAWQgaAYg1AAIgaAAIAACOgAgjgQIAWAAQAcAAALgLQAKgMABgfQgBgegKgMQgLgLgcAAIgWAAg");
	this.shape.setTransform(195.7,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002F53").s().p("AhBCXQgZgYAAgsIAAkBIA8AAIAAEDQAAAmAeAAQAfAAAAgmIAAkDIA8AAIAAEBQAAAsgZAYQgYAYgqAAQgpAAgYgYg");
	this.shape_1.setTransform(171.1,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002F53").s().p("AAnCtIhKjXIgBAAIAADXIg2AAIAAlZIA3AAIBHDEIABAAIAAjEIA2AAIAAFZg");
	this.shape_2.setTransform(136.5,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002F53").s().p("AhCCaQgWgYAAgpIAAixQAAgmAWgZQAXgaAqAAQApAAAYAcQAWAaAAApIAAAXIg4AAQAAgmgIgOQgIgOgQAAQgbAAAAAmIAACwQAAAlAcAAQAQAAAIgLQAHgLAAgaIAAgiIgkAAIAAgtIBfAAIAACuIgdAAIgLgaQgNARgNAGQgNAIgTAAQgjAAgWgYg");
	this.shape_3.setTransform(112.3,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002F53").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_4.setTransform(93.8,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002F53").s().p("AhBCVQgXgbgCgoIA4gJQACAaAKAOQAJANANAAQAQAAAJgIQAKgJAAgPQAAgWgTgWQgIgJgggdQg8gxAAg1QAAgpAYgXQAYgXAqAAQAjAAAWAYQAVAWAEAmIg4AHQgCgVgKgKQgIgIgMAAQgcAAAAAiQAAAUATAUQAHAHAhAfQA8AyAAA0QAAAqgaAYQgZAXgpAAQgoAAgYgdg");
	this.shape_5.setTransform(76.3,20.9);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.1,205.3,36);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient over
	this.instance = new lib._25Multiply50Image();
	this.instance.setTransform(728,63,4.853,1.999,0,0,0,150,31.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhxvAOEIAA8HMDjfAAAIAAcHg");
	mask.setTransform(728,90);

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(16,113,183,0.4)").s().p("EghCAyOIxMAAIskxHIAAtBMA5thHTMguBBUbMA/DhUeICoAAMgffBDwMgQIAhuIALAAIgsBDgEAcrAyOMAiIhD1MgTuBD1gEACvAyOMA1dhczMgewBczgEgg3AyOMBDihleIFsAAMgoOBleg");
	this.shape.setTransform(319.1,175.9);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 300x250
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002D54").s().p("EhxvAOEIAA8HMDjfAAAIAAcHg");
	this.shape_1.setTransform(728,90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.ctasignupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(205.4,34.8,0.96,0.96,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,1,209,40);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


(lib.ctasignupoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(205.4,34.8,0.96,0.96,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


(lib.ctasignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta_on.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta-on
	this.cta_on = new lib.ctasignupon();
	this.cta_on.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(1));

	// cta-off
	this.cta_off = new lib.ctasignupoff();
	this.cta_off.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/**
		 * Squarewave CreateJS Template 1.1 (September 2016)
		 **/
		var root = this;
		
		var stageHeight = stage.canvas.height;
		var stageWidth = stage.canvas.width;
		
		// cta
		var ctaWidth = 344; // need to get this dynamically
		var ctaOpenX = root.cta.x;
		var ctaOffset = 6; // how many pixels of the cta should be visible behind the
		var ctaClosedX = ctaOpenX + ctaWidth;
		
		
		var mainTl = new TimelineMax();
		
		/**** uncomment to use within creative ******/
		/*
		root.clickthrough.on('mouseover' , onRollOver );
		root.clickthrough.on('mouseout' , onRollOut );
		root.clickthrough.on('click' , onClick );
		*/
		
		this.onInit = function () {
			this.animate();
		}
		
		// banner animation
		this.animate = function () {
		
			mainTl.add('start', 0.2)
		
			// frame 1 animation
			.from(root.athlete_1, 1.2, {
				scaleX: 1.5,
				scaleY: 1.5,
				alpha: 0,
				ease: Strong.easeOut
			}, 'start')
			.from(root.facilities, 1, {
				y: stageHeight,
				ease: Strong.easeOut
			}, 'start')
				.from(root.text_1, 1, {
					alpha: 0,
					y: '+=100',
					ease: Strong.easeOut
				}, 'start+=0.2')
				.from(root.footer, 0.75, {
					x: stageWidth,
					ease: Strong.easeOut
				}, 'start')
				
		
			// frame 2
			.add('frame2', '+=1')
				.to(root.text_1, 0.5, {
					alpha: 0,
					ease: Strong.easeOut
				}, 'frame2')
				.from(root.text_2, 0.65, {
					alpha: 0,
					y: '+=100',
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				
				// Athlete transition		
				.to(root.athlete_1, 1.8, {
					x: '-=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2')
				.from(root.athlete_2, 1.8, {
					x: '+=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.35')
		
		
			// transition to end frame 
			.add('frame3', '+=1.5')
				.to(root.text_2, 0.5, {
					alpha: 0,
					ease: Strong.easeOut
				}, 'frame3')
			.to(root.facilities, 0.5, {
				y: stageHeight,
				alpha: 0,
				ease: Strong.easeOut
			}, 'frame3')
				.to(root.athlete_2, 0.5, {
					alpha: 0,
					scaleX: 1.5,
					scaleY: 1.5,
					ease: Strong.easeIn
				}, 'frame3')
		
			.add('endFrame')
				.from(root.text_3, 0.65, {
					alpha: 0,
					scaleX: 0.6,
					scaleY: 0.6,
					ease: Strong.easeOut
				}, 'endFrame')
				.fromTo(root.cta, 0.6, {
					x: stageWidth
					}, {
					x: ctaOpenX,
					ease: Strong.easeOut,
					onComplete: this.ctaOpen
				}, 'endFrame+=0.6');
		}
		
		var ctaIsOpen = false;
		// only do the rollover on the cta if it's open/visible
		this.ctaOpen = function () {
			if (!ctaIsOpen) {
				ctaIsOpen = true;
			}
		}
		
		// mouse over/mouse out events
		this.onRollOverEvent = function (e) {
			// wake up creative if asleep //
			if (root.adHelper && !root.adHelper.awake) root.adHelper.wake();
		
			if (ctaIsOpen) TweenMax.to(root.cta.cta_on, 0.2, {
				alpha: 1
			});
		}
		
		this.onRollOutEvent = function (e) {
			if (ctaIsOpen) TweenMax.to(root.cta.cta_on, 0.2, {
				alpha: 0
			});
		}
		
		this.onClickEvent = function (e) {
			console.log("creative-click");
		}
		
		
		
		
		
		
		/**
		 * AD HELPER METHODS
		 *
		 * If everything is setup correctly, you can use
		 * root.adHelper.sleep() & root.adHelper.wake()
		 * to manually control AdHelper.
		 * NOTE: sleep() pauses CreateJS AND TweenLite
		 *
		 **/
		this.adHelper = null; // adhelper reference //
		this.onSlowDown = function () {
			console.log("creative-slowdown");
		}
		
		this.onSleep = function () {
			console.log("creative-sleep");
		}
		
		this.onWake = function () {
			console.log("creative-wake");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clickthrough
	this.clickthrough = new lib.clickthrough();
	this.clickthrough.setTransform(728,90,4.853,0.72,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// footer
	this.footer = new lib.footer();
	this.footer.setTransform(874,0);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(1));

	// cta
	this.cta = new lib.ctasignup();
	this.cta.setTransform(524,60);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(278,88.3,1,1,0,0,0,278,88.3);
	this.text_3.cache(78,26,398,124);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_2
	this.athlete_2 = new lib.imgathlete2();
	this.athlete_2.setTransform(810,130,1,1,0,0,0,810,130);

	this.timeline.addTween(cjs.Tween.get(this.athlete_2).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.setTransform(830,160,1,1,0,0,0,830,160);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.cache(-2,-2,1460,184);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.cache(-2,-2,1460,184);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// image: facilities
	this.facilities = new lib.img_facilities_1();
	this.facilities.setTransform(546,67,1,1,0,0,0,546,67);

	this.timeline.addTween(cjs.Tween.get(this.facilities).wait(1));

	// background
	this.bg = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(645.1,-62.2,1549.8,656.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;