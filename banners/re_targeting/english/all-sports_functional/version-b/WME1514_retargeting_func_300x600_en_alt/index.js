(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 1200,
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
p.nominalBounds = new cjs.Rectangle(0,0,449,900);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,899);


(lib.img_facilities = function() {
	this.initialize(img.img_facilities);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072B8").s().p("EgoDAO2MAmegw1MgcPA1MMAq8g7EMgV9AwiIqNV6MAydhN5MghYBWlILu1JMAaOgurMgWjBF9IAFABMAajg2PMgQ8A7yMgn9AAXg");
	this.shape.setTransform(256.5,303);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512.9,605.9);


(lib.gradientover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-150,0,150).s().p("A3bXbMAAAgu2MAu2AAAMAAAAu2g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.textheadline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape.setTransform(525.6,537.9,2.46,2.46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBiIgWhSIgRABIAABRIgiAAIAAjDIAvAAQAbAAAOANQAOAOAAAfQAAAngXAJIAcBZgAgTgJIAMAAQALAAAGgGQAGgGAAgSQAAgRgGgHQgGgGgLAAIgMAAg");
	this.shape_1.setTransform(494.4,537.9,2.46,2.46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape_2.setTransform(463.3,537.9,2.46,2.46);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBiIAAhXIgiAAIAABXIghAAIAAjDIAhAAIAABQIAiAAIAAhQIAiAAIAADDg");
	this.shape_3.setTransform(432.6,537.9,2.46,2.46);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBiIgZiAIAAAAIgVCAIgdAAIgljDIAgAAIAUB8IABAAIAWh8IAaAAIAXB8IABAAIASh8IAgAAIgjDDg");
	this.shape_4.setTransform(392.5,537.9,2.46,2.46);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBiIAAhSIgphxIAiAAIAWBLIAAAAIAXhLIAiAAIgpBxIAABSg");
	this.shape_5.setTransform(353.4,537.9,2.46,2.46);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBiIgph5IgBAAIAAB5IgeAAIAAjDIAfAAIAnBvIABAAIAAhvIAeAAIAADDg");
	this.shape_6.setTransform(321.3,537.9,2.46,2.46);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBiIgGgrIgjAAIgGArIghAAIAkjDIApAAIAkDDgAgMAZIAZAAIgNhTIAAAAg");
	this.shape_7.setTransform(290.1,537.9,2.46,2.46);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape_8.setTransform(247.9,537.9,2.46,2.46);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBiIAAimIghAAIAAgdIBhAAIAAAdIghAAIAACmg");
	this.shape_9.setTransform(218.9,537.9,2.46,2.46);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBiIAAjDIBZAAIAAAdIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAdg");
	this.shape_10.setTransform(191.1,537.9,2.46,2.46);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BiIAAjDIAwAAQAeAAAOANQAPAOABAfQgBAfgPAMQgOANgeAAIgPAAIAABRgAgUgJIAOAAQAOAAAGgGQAHgGgBgSQABgRgHgHQgGgGgOAAIgOAAg");
	this.shape_11.setTransform(162.1,537.9,2.46,2.46);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBiIAAiYIAAAAIggCYIgNAAIggiYIAAAAIAACYIgdAAIAAjDIAsAAIAXBxIAAAAIAYhxIAsAAIAADDg");
	this.shape_12.setTransform(124.8,537.9,2.46,2.46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmBWQgMgNAAgXIAAhkQAAgVAMgOQAOgPAYAAQAZAAAOAPQAMAOAAAVIAABkQAAAXgMANQgOAPgZAAQgYAAgOgPgAgNhBQgDAEAAAMIAABjQAAALADAEQAEAGAJAAQAJAAAEgGQAEgFABgKIAAhjQgBgLgEgFQgEgFgJgBQgJABgEAFg");
	this.shape_13.setTransform(88.5,538,2.46,2.46);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBWQgNgNAAgXIAAhkQAAgVANgOQAOgPAYAAQAYAAAOAQQALAOAAAYIAAAOIghAAIAAgPQAAgLgFgHQgFgFgGgBQgIABgFAFQgDAEAAAMIAABjQAAALADAEQAFAGAIAAQAQAAAAgTIAAgZIAhAAIAAAXQAAAXgLANQgOAPgYAAQgYAAgOgPg");
	this.shape_14.setTransform(57.8,538,2.46,2.46);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhWC2IAAlrICmAAIAAA2IhnAAIAABfIBPAAIAAA0IhPAAIAABsIBuAAIAAA2g");
	this.shape_15.setTransform(515.6,459.1,2.46,2.46);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAlC2IgqiXQgMABgVAAIAACWIg+AAIAAlrIBYAAQA0AAAZAZQAbAZAAA6QAABIgsASIA1ClgAgmgRIAXAAQAYAAAKgMQAKgMAAggQAAgggKgNQgKgMgYAAIgXAAg");
	this.shape_16.setTransform(458,459.1,2.46,2.46);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhWC2IAAlrICmAAIAAA2IhnAAIAABfIBPAAIAAA0IhPAAIAABsIBuAAIAAA2g");
	this.shape_17.setTransform(400.3,459.1,2.46,2.46);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAhC2IAAiiIhBAAIAACiIg/AAIAAlrIA/AAIAACVIBBAAIAAiVIA/AAIAAFrg");
	this.shape_18.setTransform(342.2,459.1,2.46,2.46);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhkC2IAAlrIBaAAQA5AAAbAZQAbAZAAA6QAAA5gbAYQgbAYg5AAIgcAAIAACWgAgmgRIAZAAQAdAAALgMQALgMAAggQAAghgLgMQgLgMgdAAIgZAAg");
	this.shape_19.setTransform(258.6,459.1,2.46,2.46);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABIC2IAAkbIgBAAIg4EbIgdAAIg4kbIgBAAIAAEbIg3AAIAAlrIBSAAIAsDTIAAAAIAtjTIBSAAIAAFrg");
	this.shape_20.setTransform(189.6,459.1,2.46,2.46);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtC2IgLhRIhDAAIgLBRIg9AAIBElrIBLAAIBEFrgAgYAvIAxAAIgZibIAAAAg");
	this.shape_21.setTransform(123,459.1,2.46,2.46);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGCgQgXgZAAgpIAAi7QAAgpAXgZQAagbAtAAQAtAAAZAdQAXAbAAAsIAAAbIg/AAIAAgdQAAgWgJgLQgIgLgNAAQgRAAgHAKQgIAKAAAVIAAC3QAAAVAIAKQAHAKARAAQAQAAAIgKQAGgIAAgTIAAgsIA/AAIAAAqQAAApgXAZQgZAbgtAAQgtAAgagbg");
	this.shape_22.setTransform(68.6,459.1,2.46,2.46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.3,372.3,499.8,239.4);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkRJyQhahjAAilIAArSQAAidBYhiQBghqCrAAQCrAABiByQBbBpAACnIAABaIjmAAQAAiZghg7Qgfg1hIAAQhrAAAACaIAALPQAABIAZAkQAcAoA8AAQBGAAAfgsQAdgtAAhpIAAiJIiYAAIAAi8IGKAAIAALGIh1AAIgthpQg5BEgxAbQg4AehPAAQiRAAhZhgg");
	this.shape.setTransform(451.2,227.5,0.574,0.574);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACfK+IkxtrIgFAAIAANrIjaAAIAA17IDgAAIElMiIADAAIAAsiIDaAAIAAV7g");
	this.shape_1.setTransform(400.2,227.5,0.574,0.574);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah3K+IAA17IDvAAIAAV7g");
	this.shape_2.setTransform(362.1,227.5,0.574,0.574);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACfK+IkytrIgDAAIAANrIjaAAIAA17IDgAAIEjMiIAEAAIAAsiIDbAAIAAV7g");
	this.shape_3.setTransform(324,227.5,0.574,0.574);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah3K+IAA17IDvAAIAAV7g");
	this.shape_4.setTransform(286,227.5,0.574,0.574);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACvK+Igsk3IkGAAIgrE3IjpAAIED17IEpAAIEDV7gAhgC0IDAAAIhfpZIgCAAg");
	this.shape_5.setTransform(248.5,227.5,0.574,0.574);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACSK+IiqpFQgwAFhMAAIAAJAIjyAAIAA17IFTAAQDOAABiBfQBnBkAADcQAACag2BeQgqBHhKAhIDNJ8gAiUhGIBVAAQBiAAAngtQAogwAAh7QAAh8gogvQgngthiAAIhVAAg");
	this.shape_6.setTransform(197.3,227.5,0.574,0.574);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah3K+IAAypIjqAAIAAjSILDAAIAADSIjqAAIAASpg");
	this.shape_7.setTransform(148.2,227.5,0.574,0.574);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRxAAIAAFzIrIAAIAAJ+IIjAAIAAFwIojAAIAALXIL4AAIAAFzg");
	this.shape_8.setTransform(438.1,100,0.574,0.574);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjTTWMAAAgg4ImcAAIAAlzITfAAIAAFzImcAAMAAAAg4g");
	this.shape_9.setTransform(357.1,100,0.574,0.574);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjTTWMAAAgmrIGnAAMAAAAmrg");
	this.shape_10.setTransform(296.7,100,0.574,0.574);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AohTWMAAAgmrIGpAAMAAAAg4IKaAAIAAFzg");
	this.shape_11.setTransform(240.2,100,0.574,0.574);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRxAAIAAFzIrIAAIAAJ+IIjAAIAAFwIojAAIAALXIL4AAIAAFzg");
	this.shape_12.setTransform(161.9,100,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrHbIjOpQIgCAAIAAJQIiUAAIAAu1ICYAAIDEIeIADAAIAAoeICUAAIAAO1g");
	this.shape.setTransform(482.3,238,0.663,0.663);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai8GhQg9hCAAhrIAAnoQAAhrA9hBQBDhHB5AAQB7AABCBHQA9BBAABrIAAHoQAABrg9BCQhCBHh7AAQh5AAhDhHgAhDk/QgTAYAAA3IAAHgQAAA4ATAYQAUAaAvAAQAwAAAUgaQASgYABg4IAAngQgBg3gSgYQgUgagwAAQgvAAgUAag");
	this.shape_1.setTransform(442.2,238,0.663,0.663);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQHbIAAu1IChAAIAAO1g");
	this.shape_2.setTransform(412.6,238,0.663,0.663);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQHbIAAsmIieAAIAAiPIHdAAIAACPIieAAIAAMmg");
	this.shape_3.setTransform(385.6,238,0.663,0.663);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB2HbIgdjTIixAAIgdDTIieAAICvu1IDJAAICvO1gAhAB6ICBAAIhAmWIgBAAg");
	this.shape_4.setTransform(353.7,238,0.663,0.663);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABiHbIhymJQgdADg3AAIAAGGIijAAIAAu1IDlAAQCLAABCBAQBGBDAACVQAABpglBAQgcAvgyAXICKGugAhkgvIA6AAQBBAAAbgeQAbggAAhVQAAhTgbggQgbgfhBABIg6AAg");
	this.shape_5.setTransform(313.7,238,0.663,0.663);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB2HbIgdjTIixAAIgdDTIieAAICvu1IDJAAICvO1gAhAB6ICBAAIhAmWIgBAAg");
	this.shape_6.setTransform(272.9,238,0.663,0.663);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkHHbIAAu1IDqAAQCYAABFBAQBIBCAACWQAACXhIBAQhFBAiYAAIhHAAIAAGGgAhkgvIA/AAQBPAAAdgeQAegfAAhWQAAhUgegfQgdgfhPABIg/AAg");
	this.shape_7.setTransform(236.9,238,0.663,0.663);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjiHbIAAu1IGzAAIAACPIkQAAIAAD1IDQAAIAACMIjQAAIAAEXIEiAAIAACOg");
	this.shape_8.setTransform(198.4,238,0.663,0.663);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABiHbIhymJQgdADg3AAIAAGGIijAAIAAu1IDlAAQCLAABCBAQBGBDAACVQAABpglBAQgdAvgxAXICKGugAhkgvIA6AAQBBAAAbgeQAbggAAhVQAAhTgbggQgbgfhBABIg6AAg");
	this.shape_9.setTransform(159.7,238,0.663,0.663);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkHHbIAAu1IDqAAQCYAABFBAQBIBCAACWQAACXhIBAQhFBAiYAAIhHAAIAAGGgAhkgvIA/AAQBOAAAegeQAegfAAhWQAAhUgegfQgegfhOABIg/AAg");
	this.shape_10.setTransform(118.7,238,0.663,0.663);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRxAAIAAFzIrIAAIAAJ+IIjAAIAAFwIojAAIAALYIL4AAIAAFyg");
	this.shape_11.setTransform(459.6,111.7,0.663,0.663);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjTTWMAAAgg4ImcAAIAAlzITfAAIAAFzImcAAMAAAAg4g");
	this.shape_12.setTransform(366,111.7,0.663,0.663);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjTTWMAAAgmrIGnAAMAAAAmrg");
	this.shape_13.setTransform(296.1,111.7,0.663,0.663);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AohTWMAAAgmrIGpAAMAAAAg5IKaAAIAAFyg");
	this.shape_14.setTransform(230.8,111.7,0.663,0.663);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ApQTWMAAAgmrIRwAAIAAFzIrHAAIAAJ+IIjAAIAAFwIojAAIAALYIL4AAIAAFyg");
	this.shape_15.setTransform(140.5,111.7,0.663,0.663);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.img_facilities_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_facilities();
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


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
	this.shape.graphics.f("#8FA124").s().p("Egu3AFeIAAq7MBdvAAAIAAK7g");
	this.shape.setTransform(300,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD730").s().p("A3bCvIAAldMAu2AAAIAAFdg");
	this.shape.setTransform(300,35,2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


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
	this.instance.setTransform(0,0,1.33,1.335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,598.7,1200);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.setTransform(0,0,1.336,1.332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1198.7);


(lib.shapeclipped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXaAu3MAAAhdtMAu1AAAMAAABdtg");
	mask.setTransform(254.9,300);

	// Layer 3
	this.instance = new lib.shape();
	this.instance.setTransform(256.4,363.9,1,1,0,0,0,256.4,302.9);
	this.instance.alpha = 0.398;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105,61,300,539);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork
	this.instance = new lib.logoartwork();
	this.instance.setTransform(303,67.4,1.004,1.004,0,0,0,242,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3AK8IAA13MBdvAAAIAAV3g");
	this.shape.setTransform(300,70);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,140);


(lib.ctalabelregistertoday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F53").s().p("AJYCrQgRgGgMgNQgLgMgGgRQgFgQAAgSIAAiwQAAgTAFgQQAGgQALgMQAMgNARgGQARgIAXABQAWgBATAIQARAGALANQALAMAGAQQAFAQAAATIAACwQAAASgFAQQgGARgLAMQgLANgRAGQgTAHgWgBQgXABgRgHgAJnhzQgGAJAAAUIAACtQAAAVAGAJQAHAJASAAQARAAAIgJQAGgJABgVIAAitQgBgUgGgJQgIgJgRAAQgSAAgHAJgAouCqQgPgHgMgOQgLgNgHgRQgGgRgBgUIA4gIQACAZAKAOQAJANAPAAQAQAAAJgIQAJgIAAgQQAAgMgEgLQgFgKgKgLQgHgJgigdIgWgRQgMgMgHgMQgKgNgEgPQgGgQABgRQAAgUAGgRQAGgQAMgLQALgLASgFQARgHAWABQASAAAPAGQAOAGAKAMQALAKAGAQQAGAPACASIg4AHQgCgVgKgJQgIgIgMAAQgOAAgIAJQgHAIgBAQQAAALAGALQAEAIAJALQAHAHAjAeQAeAaALARQAKANAEANQAGAQAAARQgBAVgGARQgHAQgNAMQgMALgSAGQgRAGgVgBQgUABgRgIgAuYCsQgPgHgKgLQgLgMgGgQQgGgQAAgVIAAiwQABgTAEgQQAHgQAKgMQALgNARgGQAQgIAWABQAVAAARAHQARAIAMANQAKAMAGASQAGARAAATIAAAXIg4AAIgDggQgBgNgFgIQgEgGgGgDQgHgDgJAAQgMAAgGAIQgIAJAAAVIAACwQAAARAGAJQAHAKAPAAQASAAAHgLQAIgLAAgaIAAghIgmAAIAAguIBhAAIAACuIgdAAIgLgaQgOARgMAHQgOAGgUAAQgSAAgOgFgAUKCtIAAiQIhJjJIA9AAIAqCEIABAAIAoiEIA8AAIhIDJIAACQgAR+CtIgLhNIhBAAIgLBNIg5AAIBAlZIBJAAIBAFZgARrAtIgYiUIgBAAIgYCUIAxAAgAMVCtIAAlZIBYAAQAXABARAFQATAIALAMQAMANAGAUQAGATAAAbIAACHQAAAbgGATQgGAVgMAMQgLANgTAGQgRAHgXAAgANQB8IAVAAQAMAAAIgDQAJgCAEgGQAFgFACgJIACgYIAAiVIgCgXQgCgJgFgGQgEgGgJgCQgIgDgMABIgVAAgAGNCtIAAklIg5AAIAAg0ICuAAIAAA0Ig5AAIAAElgACVCtIgriPIgeABIAACOIg8AAIAAlZIBTAAQAaAAASAGQAUAGAMAMQAMAMAHAUQAGATAAAcQAAAUgDAQQgEAOgGALQgFAIgJAGQgGAGgIAEIAxCdgABMgQIAVAAQAMAAAIgDQAIgCAGgHQAFgGACgJQACgLABgPQgBgQgCgKQgCgKgFgHQgGgFgIgDQgIgDgMABIgVAAgAjDCtIAAlZICfAAIAAA0IhjAAIAABZIBMAAIAAAzIhMAAIAABlIBqAAIAAA0gAlbCtIAAklIg6AAIAAg0ICvAAIAAA0Ig6AAIAAElgArQCtIAAlZIA8AAIAAFZgAycCtIAAlZICeAAIAAA0IhjAAIAABZIBNAAIAAAzIhNAAIAABlIBqAAIAAA0gA0ICtIgriPIgeABIAACOIg8AAIAAlZIBUAAQAZAAATAGQATAGAMAMQANAMAGAUQAHATAAAcQAAAUgEAQQgEAOgGALQgFAIgIAGQgGAGgJAEIAyCdgA1RgQIAVAAQAMAAAIgDQAJgCAFgHQAGgGACgJQACgLAAgPQAAgQgCgKQgCgKgGgHQgFgFgJgDQgIgDgMABIgVAAg");
	this.shape.setTransform(209.4,20.9);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.1,351.6,36);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient over
	this.instance = new lib.gradientover();
	this.instance.setTransform(300,300,2,2,0,0,0,150,150);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shape
	this.instance_1 = new lib.shapeclipped();
	this.instance_1.setTransform(302.9,666.9,2,2,0,0,0,256.4,333.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Color Fill 1 Image
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002D54").s().p("Egu3BdvMAAAi7eMBdvAAAMAAAC7eg");
	this.shape.setTransform(300,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.9,0,1025.8,1333.9);


(lib.ctaregistertodayon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelregistertoday();
	this.cta_label.setTransform(261.7,41,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,1,356,40);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


(lib.ctaregistertodayoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelregistertoday();
	this.cta_label.setTransform(261.7,41,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


(lib.ctaregisterToday = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta_on.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta-on
	this.cta_on = new lib.ctaregistertodayon();
	this.cta_on.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(1));

	// cta-off
	this.cta_off = new lib.ctaregistertodayoff();
	this.cta_off.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


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
		var ctaHeight = 70; // need to get this dynamically
		var ctaOpenY = root.cta.y;
		var ctaOffset = 6; // how many pixels of the cta should be visible behind the
		var ctaClosedY = ctaOpenY + ctaHeight - ctaOffset;
		
		
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
			.from(root.facilities, 1, {
				y: stageHeight,
				ease: Strong.easeOut
			}, 'start')
			.from(root.athlete_1, 1.2, {
				scaleX: 1.5,
				scaleY: 1.5,
				alpha: 0,
				ease: Strong.easeOut
			}, 'start')
			.from(root.text_1, 1, {
					alpha: 0,
					y: '+=100',
					ease: Strong.easeOut
				}, 'start+=0.2')
				.from(root.footer, 0.75, {
					y: stageHeight,
					ease: Strong.easeOut
				}, 'start')
				.fromTo(root.cta, 0.75, {
					y: stageHeight
				}, {
					y: ctaClosedY,
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
				.to(root.athlete_1, 0.6, {
					x: '-=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				.from(root.athlete_2, 0.6, {
					x: '+=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				
		
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
				.to(root.cta, 0.6, {
					y: ctaOpenY,
					ease: Back.easeOut.config(0.5),
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
	this.clickthrough.setTransform(300,599.9,2,4.8,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// footer
	this.footer = new lib.footer();
	this.footer.setTransform(150,1095,1,1,0,0,0,150,35);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(1));

	// cta
	this.cta = new lib.ctaregisterToday();
	this.cta.setTransform(0,990);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(299.5,599.5,1,1,0,0,0,299.5,599.5);
	this.text_3.cache(43,370,504,243);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_2
	this.athlete_2 = new lib.imgathlete2();
	this.athlete_2.setTransform(300,600,1,1,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.athlete_2).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.setTransform(300,600,1,1,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.cache(-2,-2,604,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.cache(-2,-2,604,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// image: facilities
	this.facilities = new lib.img_facilities_1();

	this.timeline.addTween(cjs.Tween.get(this.facilities).wait(1));

	// background
	this.bg = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.1,599.9,1025.8,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;