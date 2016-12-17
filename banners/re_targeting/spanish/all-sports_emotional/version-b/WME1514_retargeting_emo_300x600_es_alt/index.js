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
	this.shape.graphics.f("#FFFFFF").s().p("ABkG6IjAonIgCAAIAAInIiJAAIAAtzICNAAIC3H4IACAAIAAn4ICJAAIAANzg");
	this.shape.setTransform(109.5,606.7,0.856,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjTG6IAAtzIGVAAIAACFIj8AAIAADjIDCAAIAACDIjCAAIAAEEIENAAIAACEg");
	this.shape_1.setTransform(61.1,606.7,0.856,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiBBXIBgitICkAAIifCtg");
	this.shape_2.setTransform(237.3,554.9,0.856,0.856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AivGDQg4g9AAhjIAAnFQAAhjA4g9QA+hCBxAAQByAAA9BCQA5A9AABjIAAHFQAABjg5A9Qg9BChyAAQhxAAg+hCgAg+koQgRAXAAAzIAAG9QAAAzARAXQATAYArAAQAsAAATgYQARgXAAgzIAAm9QAAgzgRgXQgTgYgsAAQgrAAgTAYg");
	this.shape_3.setTransform(226,606.6,0.856,0.856);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABuG6IgbjEIilAAIgbDEIiTAAICjtzIC7AAICjNzgAg8BxIB5AAIg8l5IgBAAg");
	this.shape_4.setTransform(534.1,606.7,0.856,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjSG6IAAtzIGUAAIAACFIj8AAIAADjIDBAAIAACDIjBAAIAAEEIEOAAIAACEg");
	this.shape_5.setTransform(487.1,606.7,0.856,0.856);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipF9Qg7hDgEhpICQgVQAEBCAZAjQAYAhAkAAQAoAAAXgVQAZgVAAgnQAAg5gwg3QgVgYhThIQhKg8ghgxQgwhHAAhVQAAhqA+g6QA9g5BuAAQBaAAA5A8QA2A6AKBgIiRAQQgEg0gZgZQgVgVgeAAQgjAAgUAXQgTAXAAApQAAAyAwA1QARASBXBNQBJA9AhAyQAwBIAABRQAABrhCA9QhBA6hrAAQhlAAg/hJg");
	this.shape_6.setTransform(439.9,606.6,0.856,0.856);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjSG6IAAtzIGVAAIAACFIj+AAIAADjIDCAAIAACDIjCAAIAAEEIEPAAIAACEg");
	this.shape_7.setTransform(375.7,606.7,0.856,0.856);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjnG6IAAtzIDhAAQDuAAAAELIAAFdQAAELjuAAgAhPE9IA0AAQA7AAAYgbQAYgbAAhGIAAmBQAAhGgYgbQgYgbg7AAIg0AAg");
	this.shape_8.setTransform(327.1,606.7,0.856,0.856);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABkG6Ii/onIgDAAIAAInIiKAAIAAtzICNAAIC4H4IACAAIAAn4ICJAAIAANzg");
	this.shape_9.setTransform(276.5,606.7,0.856,0.856);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjnG6IAAtzIDhAAQDuAAAAELIAAFdQAAELjuAAgAhQE9IA1AAQA7AAAYgbQAYgbAAhGIAAmBQAAhGgYgbQgYgbg7AAIg1AAg");
	this.shape_10.setTransform(175.6,606.7,0.856,0.856);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlSLFIAA2JIKKAAIAADUImXAAIAAFuIE5AAIAADSIk5AAIAAGgIGyAAIAADVg");
	this.shape_11.setTransform(527,479,0.856,0.856);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah4LFIAAy1IjsAAIAAjUILJAAIAADUIjrAAIAAS1g");
	this.shape_12.setTransform(454.6,479,0.856,0.856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah5LFIAA2JIDyAAIAAWJg");
	this.shape_13.setTransform(399.5,479,0.856,0.856);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmKLFIAA2JIFeAAQDjAABoBgQBsBjgBDgQABDfhsBhQhoBgjjAAIhqAAIAAJGgAiWhHIBeAAQB2AAAsguQAsguAAh+QAAh/gsguQgsgth2AAIheAAg");
	this.shape_14.setTransform(338.9,479,0.856,0.856);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AEaLFIAAxSIgEAAIjbRSIh1AAIjbxSIgEAAIAARSIjVAAIAA2JIFBAAICtM7IABAAICts7IFAAAIAAWJg");
	this.shape_15.setTransform(245.9,479,0.856,0.856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkZJuQhbhhAAigIAArZQAAigBbhgQBjhsC2AAQC2AABkBsQBbBhAACfIAALZQAACghbBhQhkBri2gBQi2ABhjhrgAhkncQgcAkAABSIAALNQAABSAcAkQAeAoBGAAQBHAAAegoQAcgjAAhTIAArNQAAhSgcgkQgegnhHAAQhGAAgeAng");
	this.shape_16.setTransform(155.1,479,0.856,0.856);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkTJuQhbhhAAigIAArZQAAifBbhhQBkhsC0AAQCvAABhB0QBaBpAACpIAABoIj0AAIAAhuQAAhVgjguQgggogzAAQhFAAgeAnQgcAkAABSIAALNQAABSAcAkQAeAoBFAAQBAAAAcgmQAagiAAhIIAAirID0AAIAACjQAACehaBjQhhBrivgBQi0ABhkhrg");
	this.shape_17.setTransform(74.4,479,0.856,0.856);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhiDeQgigogDg8IBUgMQADAmAOAUQAOATAUAAQAXAAAOgMQAPgMAAgXQAAghgcggQgNgOgvgqQhahLAAhPQAAg9AkgiQAkghA/gBQA0AAAhAkQAgAhAGA5IhVAJQgCgfgPgOQgMgMgSAAQgTAAgMANQgLANAAAYQAAAdAcAfQAKALAyAtQBaBMAABMQAAA/gnAjQgmAjg9AAQg7AAglgrg");
	this.shape_18.setTransform(545.3,370.7,0.856,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg6AhgkQAkgnBBAAQBCAAAkAnQAhAkAAA6IAAEHQAAA7ghAjQgkAnhCAAQhBAAgkgngAgkisQgKANAAAeIAAEDQAAAeAKAOQALANAZAAQAaAAALgNQAKgOAAgeIAAkDQAAgegKgNQgMgOgZAAQgZAAgLAOg");
	this.shape_19.setTransform(516.9,370.7,0.856,0.856);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA1EBIg8jVQgQACgfAAIAADTIhYAAIAAoBIB8AAQBKgBAlAkQAmAkgBBRQAABmg+AaIBLDpgAg2gZIAgAAQAiAAAPgQQAPgSAAgtQAAgtgPgSQgPgQgiAAIggAAg");
	this.shape_20.setTransform(488.1,370.7,0.856,0.856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrEBIAAm0IhVAAIAAhNIECAAIAABNIhWAAIAAG0g");
	this.shape_21.setTransform(460,370.7,0.856,0.856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg7AhgjQAkgnBBAAQBBAAAlAnQAhAkAAA6IAAEHQAAA7ghAjQglAnhBAAQhBAAgkgngAgkisQgKANAAAeIAAEDQAAAeAKAOQALANAZAAQAZAAAMgNQAKgOAAgeIAAkDQAAgegKgNQgMgOgZAAQgZAAgLAOg");
	this.shape_22.setTransform(432.8,370.7,0.856,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhhDeQgjgogDg8IBVgMQACAmAPAUQANATAVAAQAXAAAOgMQAOgMAAgXQAAghgcggQgMgOgwgqQhahLAAhPQAAg9AkgiQAkghA/gBQA1AAAgAkQAgAhAGA5IhVAJQgCgfgPgOQgMgMgRAAQgUAAgMANQgLANAAAYQAAAdAcAfQAKALAyAtQBaBMAABMQAAA/gnAjQgmAjg9AAQg7AAgkgrg");
	this.shape_23.setTransform(404.2,370.7,0.856,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg6AhgkQAkgnBBAAQBCAAAkAnQAhAkAAA6IAAEHQAAA7ghAjQgkAnhCAAQhBAAgkgngAgjisQgLANAAAeIAAEDQAAAeALAOQALANAYAAQAaAAALgNQAKgOAAgeIAAkDQAAgegKgNQgLgOgaAAQgYAAgLAOg");
	this.shape_24.setTransform(375.8,370.7,0.856,0.856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA6EBIhvlAIgBAAIAAFAIhQAAIAAoBIBSAAIBqElIABAAIAAklIBQAAIAAIBg");
	this.shape_25.setTransform(346.4,370.7,0.856,0.856);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA6EBIhvlAIgBAAIAAFAIhQAAIAAoBIBSAAIBqElIABAAIAAklIBQAAIAAIBg");
	this.shape_26.setTransform(304.7,370.7,0.856,0.856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg6AhgkQAkgnBBAAQBCAAAkAnQAhAjAAA7IAAEHQAAA7ghAjQgkAnhCAAQhBAAgkgngAgjisQgKANAAAeIAAEDQAAAeAKAOQALANAYAAQAaAAALgNQAKgOAAgeIAAkDQAAgegKgNQgLgOgaAAQgYAAgLAOg");
	this.shape_27.setTransform(275.3,370.7,0.856,0.856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhjDiQghgjAAg7IAAkHQAAg7AhgjQAkgnBBAAQA/ABAkAqQAgAmAAA9IAAAmIhYAAIAAgoQAAgfgOgRQgLgOgSAAQgZAAgKAOQgKANAAAeIAAEDQAAAeAKAOQAKANAZAAQAWAAALgNQAKgNAAgZIAAg/IBYAAIAAA7QAAA6ggAkQgkAng/AAQhBAAgkgng");
	this.shape_28.setTransform(245.9,370.7,0.856,0.856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABAEBIgPhyIhgAAIgQByIhVAAIBeoBIBsAAIBfIBgAgiBCIBFAAIgjjcIAAAAg");
	this.shape_29.setTransform(206.1,370.7,0.856,0.856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiOEBIAAoBIB/AAQBRgBAmAkQAnAjAABSQAABRgnAjQgmAihRAAIgmAAIAADTgAg1gZIAiAAQApAAAQgQQAQgRAAguQAAgugQgRQgQgQgpAAIgiAAg");
	this.shape_30.setTransform(179.6,370.7,0.856,0.856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABnEBIAAmRIgCAAIhQGRIgpAAIhQmRIgBAAIAAGRIhOAAIAAoBIB1AAIA+ErIABAAIA+krIB0AAIAAIBg");
	this.shape_31.setTransform(145.7,370.7,0.856,0.856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABAEBIgQhyIhfAAIgPByIhXAAIBgoBIBrAAIBgIBgAgiBCIBFAAIgjjcIAAAAg");
	this.shape_32.setTransform(113.1,370.7,0.856,0.856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhjDiQghgjAAg7IAAkHQAAg7AhgjQAkgnBAAAQBAABAjAqQAhAmAAA9IAAAmIhZAAIAAgoQABgfgNgRQgMgOgTAAQgXAAgMAOQgJANgBAeIAAEDQABAeAJAOQAMANAXAAQAYAAAKgNQAJgNAAgZIAAg/IBZAAIAAA7QAAA6ghAkQgjAnhAAAQhAAAgkgng");
	this.shape_33.setTransform(84.7,370.7,0.856,0.856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABAEBIgQhyIhfAAIgQByIhWAAIBgoBIBsAAIBeIBgAgiBCIBFAAIgjjcIAAAAg");
	this.shape_34.setTransform(56.6,370.7,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjdBTQAfifBuAAQAVAAAZAJQANAEAbANIApASQAXAKASgBQAfABAOgQQAMgNABggIBMAAQgfCghtAAQgWAAgZgJQgOgFgagOQgzgagfAAQgfAAgNAPQgNAPgBAeg");
	this.shape.setTransform(360.5,176.6,0.803,0.803);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvHtIjWpmIgCAAIAAJmIiZAAIAAvZICdAAIDMIyIADAAIAAoyICaAAIAAPZg");
	this.shape_1.setTransform(361,231.7,0.803,0.803);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB7HtIgejbIi4AAIgeDbIilAAIC2vZIDRAAIC1PZgAhDB/ICHAAIhDmnIgBAAg");
	this.shape_2.setTransform(517.9,231.7,0.803,0.803);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABwHtIjWpmIgDAAIAAJmIiZAAIAAvZICdAAIDMIyIADAAIAAoyICZAAIAAPZg");
	this.shape_3.setTransform(465.6,231.7,0.803,0.803);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB6HtIgejbIi4AAIgeDbIikAAIC2vZIDRAAIC2PZgAhDB/ICHAAIhDmnIgBAAg");
	this.shape_4.setTransform(413.3,231.7,0.803,0.803);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB7HtIgejbIi4AAIgfDbIikAAIC2vZIDRAAIC2PZgAhDB/ICHAAIhDmnIgBAAg");
	this.shape_5.setTransform(308.7,231.7,0.803,0.803);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADFHtIAAsBIgDAAIiZMBIhRAAIiZsBIgDAAIAAMBIiTAAIAAvZIDeAAIB5I/IAAAAIB5o/IDfAAIAAPZg");
	this.shape_6.setTransform(249.9,231.7,0.803,0.803);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjZHtIAAvZICqAAIAANGIEJAAIAACTg");
	this.shape_7.setTransform(177.1,231.7,0.803,0.803);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjrHtIAAvZIHEAAIAACUIkbAAIAAD+IDZAAIAACSIjZAAIAAEiIEuAAIAACTg");
	this.shape_8.setTransform(131.1,231.7,0.803,0.803);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkDHtIAAvZID8AAQEKAAABEqIAAGFQgBEqkKAAgAhZFiIA7AAQBCAAAbgfQAbgeAAhOIAAmuQAAhNgbgfQgbgehCAAIg7AAg");
	this.shape_9.setTransform(80.2,231.7,0.803,0.803);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkiBtQAqjQCOgBQAdAAAgALQASAHAjARIA1AXQAfAMAYABQAogBASgTQAQgTABgpIBkAAQgpDSiPAAQgdAAgggLQgVgIghgRQghgRgTgGQgdgLgaAAQgoAAgSAUQgPASgCAog");
	this.shape_10.setTransform(443.9,37.4,0.803,0.803);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Aj/I2QhThZAAiRIAAqXQAAiRBThZQBahhClAAQCmAABbBhQBSBYAACSIAAKXQAACShSBYQhbBhimAAQilAAhahhgAhbmxQgZAgAABLIAAKNQAABLAZAgQAcAkA/AAQBBAAAbgkQAaggAAhLIAAqNQAAhLgaggQgbgkhBAAQg/AAgcAkg");
	this.shape_11.setTransform(513.7,109.4,0.803,0.803);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACSKFIkYslIgEAAIAAMlIjIAAIAA0JIDOAAIEMLgIADAAIAArgIDIAAIAAUJg");
	this.shape_12.setTransform(444.5,109.4,0.803,0.803);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ak0KFIAA0JIJQAAIAADBIlyAAIAAFNIEcAAIAAC/IkcAAIAAF7IGLAAIAADBg");
	this.shape_13.setTransform(379.6,109.4,0.803,0.803);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Aj4I2QhahbAAikIAAvEIDdAAIAAPNQAABHAdAjQAeAjA6AAQA8AAAdgjQAdgjAAhHIAAvNIDdAAIAAPEQAACkhaBbQhaBYifAAQieAAhahYg");
	this.shape_14.setTransform(312.6,110.1,0.803,0.803);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AlSKFIAA0JIFJAAQFcAAAAGGIAAH9QAAGGlcAAgAh0HPIBNAAQBXAAAjgnQAjgoAAhmIAAozQAAhmgjgnQgjgohXAAIhNAAg");
	this.shape_15.setTransform(243.6,109.4,0.803,0.803);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ak0KFIAA0JIJQAAIAADBIlyAAIAAFNIEcAAIAAC/IkcAAIAAF7IGLAAIAADBg");
	this.shape_16.setTransform(151.2,109.4,0.803,0.803);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Aj4ItQhVhkgHiYIDTgeQAGBfAlAzQAiAxA1AAQA7AAAjgeQAjggAAg4QAAhUhGhQQgegih7hqQhrhZgwhGQhHhpAAh8QAAiaBahUQBahUCiAAQCDAABTBYQBOBTAPCOIjTAXQgGhMglglQgfgegsAAQgzAAgdAiQgdAhAAA8QAABIBHBNQAYAbCBBxQBqBaAxBJQBGBoAAB2QAACdhhBYQheBWidAAQiVAAhchqg");
	this.shape_17.setTransform(86.5,109.4,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADuO8Ig7moIlmAAIg6GoIk+AAIFh93IGVAAIFhd3gAiDD2IEHAAIiCszIgEAAg");
	this.shape.setTransform(463.7,205.3,0.67,0.67);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADHO8IjosYQg+AHhrABIAAMQIlJAAIAA93IHNAAQEZAACFCBQCMCHABEsQgBDShJCAQg5BhhkAuIEWNigAjKhgIB0AAQCFAAA2g+QA3hAAAipQAAiog3hBQg2g9iFAAIh0AAg");
	this.shape_1.setTransform(382.5,205.3,0.67,0.67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al7NHQh7iEAAjXIAAvXQAAjXB7iEQCGiQD1AAQD3AACFCQQB7CEAADXIAAPXQAADXh7CEQiFCQj3AAQj1AAiGiQgAiHqDQgmAxAABvIAAPHQAABvAmAxQAoA0BfAAQBgAAAog0QAmgxAAhvIAAvHQAAhvgmgxQgog0hggBQhfABgoA0g");
	this.shape_2.setTransform(298.9,205.3,0.67,0.67);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACuO8IAAtQIlbAAIAANQIlJAAIAA93IFJAAIAAMLIFbAAIAAsLIFJAAIAAd3g");
	this.shape_3.setTransform(217.3,205.3,0.67,0.67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADuO8Ig7moIlmAAIg6GoIk+AAIFh93IGVAAIFhd3gAiDD2IEHAAIiCszIgEAAg");
	this.shape_4.setTransform(136.3,205.3,0.67,0.67);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACrKxIgpkxIkCAAIgqExIjlAAID+1hIEjAAID/VhgAheCxIC9AAIhepOIgBAAg");
	this.shape_5.setTransform(468,76.5,0.67,0.67);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACcKxIkstcIgDAAIAANcIjWAAIAA1hIDbAAIEeMTIAFAAIAAsTIDWAAIAAVhg");
	this.shape_6.setTransform(409.6,76.5,0.67,0.67);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlJKxIAA1hIJ4AAIAADOImLAAIAAFkIEvAAIAADMIkvAAIAAGVIGmAAIAADOg");
	this.shape_7.setTransform(354.5,76.5,0.67,0.67);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACPKxIimo7QgqAFhRABIAAI1IjsAAIAA1hIFMAAQDKAABgBeQBlBhAADYQAACXg1BcQgpBGhIAgIDIJxgAiShFIBUAAQBgAAAngtQAnguAAh5QAAh5gngvQgngshgAAIhUAAg");
	this.shape_8.setTransform(297.9,76.5,0.67,0.67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah1KxIAAyTIjlAAIAAjOIK1AAIAADOIjlAAIAASTg");
	this.shape_9.setTransform(241.7,76.5,0.67,0.67);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACcKxIkstcIgEAAIAANcIjVAAIAA1hIDbAAIEfMTIADAAIAAsTIDWAAIAAVhg");
	this.shape_10.setTransform(186.9,76.5,0.67,0.67);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlJKxIAA1hIJ4AAIAADOImLAAIAAFkIEwAAIAADMIkwAAIAAGVIGmAAIAADOg");
	this.shape_11.setTransform(131.8,76.5,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AAQAAhqA6AAQA7AAAABqQAABrg7AAQg6AAAAhrgAgYhGQgLAWAAAwQAAAxALAWQAJARAPAAQAkAAAAhYQAAhXgkAAQgPAAgJARg");
	this.shape.setTransform(479.9,81.8,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBoIgxjPIAWAAIAkCkIAAAAIAlikIAWAAIgxDPg");
	this.shape_1.setTransform(466.1,81.8,1.004,1.004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBoIAAjPIAVAAIAADPg");
	this.shape_2.setTransform(456.4,81.8,1.004,1.004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBoIAAi8IgrAAIAAgTIBrAAIAAATIgrAAIAAC8g");
	this.shape_3.setTransform(447.5,81.8,1.004,1.004);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBoIgghjIgeABIAABiIgWAAIAAjPIAyAAQAYAAAQAOQAQAOAAAaQAAAogiAJIAjBogAgfgMIAUAAQAVAAAKgJQAKgIAAgTQAAgSgKgJQgKgJgVAAIgUAAg");
	this.shape_4.setTransform(435.2,81.8,1.004,1.004);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6AAQAAhqA6AAQA7AAAABqQAABrg7AAQg6AAAAhrgAgYhGQgLAWAAAwQAAAxALAWQAJARAPAAQARAAAJgRQAKgWAAgxQAAgwgKgWQgJgRgRAAQgPAAgJARg");
	this.shape_5.setTransform(420.5,81.8,1.004,1.004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBoIAAjPIAyAAQAWAAAQAPQAPAQAAAaQAAAagPAQQgQAOgWAAIgbAAIAABegAgcgIIAXAAQAiAAAAgmQAAgmgiAAIgXAAg");
	this.shape_6.setTransform(407.1,81.8,1.004,1.004);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhIAAIAABHIA0AAIAAARIg0AAIAABRIBLAAIAAATg");
	this.shape_7.setTransform(394.2,81.8,1.004,1.004);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BoIAAjPIAnAAQAiAAAQAWQATAZAAA4QAAA5gTAZQgQAWgiAAgAgeBVIAMAAQAZAAALgQQAOgTAAgyQAAgxgOgTQgLgQgZAAIgMAAg");
	this.shape_8.setTransform(380.1,81.8,1.004,1.004);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6AAQAAhqA6AAQA7AAAABqQAABrg7AAQg6AAAAhrgAgYhGQgLAWAAAwQAAAxALAWQAJARAPAAQAkAAAAhYQAAhXgkAAQgPAAgJARg");
	this.shape_9.setTransform(358.9,81.8,1.004,1.004);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBoIAAi8IgrAAIAAgTIBrAAIAAATIgrAAIAAC8g");
	this.shape_10.setTransform(345.9,81.8,1.004,1.004);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBoIg+i0IgBAAIAAC0IgXAAIAAjPIAjAAIA0CYIABAAIAAiYIAXAAIAADPg");
	this.shape_11.setTransform(333,81.8,1.004,1.004);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhHAAIAABHIA0AAIAAARIg0AAIAABRIBKAAIAAATg");
	this.shape_12.setTransform(319.6,81.8,1.004,1.004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzBoIAAi+IgBAAIgrC+IgNAAIgsi+IAAAAIAAC+IgVAAIAAjPIAkAAIAjCcIABAAIAjicIAkAAIAADPg");
	this.shape_13.setTransform(303.8,81.8,1.004,1.004);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnBoIgNg+IgzAAIgNA+IgWAAIAujPIAdAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_14.setTransform(288.4,81.8,1.004,1.004);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBoIAAjPIAxAAQAXAAAQAPQAPAQAAAaQAAAagPAQQgQAOgXAAIgaAAIAABegAgcgIIAXAAQAjAAgBgmQABgmgjAAIgXAAg");
	this.shape_15.setTransform(276.4,81.8,1.004,1.004);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAzBoIAAi+IgBAAIgrC+IgNAAIgri+IgBAAIAAC+IgVAAIAAjPIAkAAIAjCcIAAAAIAkicIAkAAIAADPg");
	this.shape_16.setTransform(260.6,81.8,1.004,1.004);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnBoIgNg+IgzAAIgMA+IgYAAIAvjPIAdAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_17.setTransform(245.2,81.8,1.004,1.004);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5AAQAAhqA7AAQAwAAAFBCIgWAAQgFgvgaAAQgSAAgJAUQgJAUAAAvQAAAwAJAUQAJAUASAAQAgAAACg1IAWAAQAAAjgPASQgPATgaAAQg7AAAAhrg");
	this.shape_18.setTransform(231.4,81.8,1.004,1.004);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhHAAIAABHIA0AAIAAARIg0AAIAABRIBKAAIAAATg");
	this.shape_19.setTransform(211.6,81.8,1.004,1.004);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BoIAAjPIAnAAQAiAAAQAWQAUAZgBA4QABA5gUAZQgQAWgiAAgAgeBVIAMAAQAZAAALgQQAOgTAAgyQAAgxgOgTQgLgQgZAAIgMAAg");
	this.shape_20.setTransform(197.6,81.8,1.004,1.004);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglBbQgOgQgBgbIAVAAQABAoAfAAQAPAAAIgJQAJgJAAgRQAAgWgpgeQgqgbAAggQAAgWAOgNQAOgNAWAAQAWAAANAPQAOAPACAbIgWAAQgCgmgbAAQgNAAgJAIQgHAHAAAMQAAAWAoAdQAqAbAAAkQAAAZgOAOQgOAOgZAAQgXAAgOgQg");
	this.shape_21.setTransform(177.1,81.8,1.004,1.004);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAnBoIgNg+Ig0AAIgMA+IgXAAIAujPIAeAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_22.setTransform(164.2,81.8,1.004,1.004);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAfBoIg/i0IAAAAIAAC0IgXAAIAAjPIAkAAIA0CYIAAAAIAAiYIAXAAIAADPg");
	this.shape_23.setTransform(150.4,81.8,1.004,1.004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBoIgNg+IgzAAIgNA+IgWAAIAujPIAdAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_24.setTransform(136.7,81.8,1.004,1.004);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzBoIAAi+IAAAAIgtC+IgMAAIgri+IgBAAIAAC+IgVAAIAAjPIAkAAIAjCcIAAAAIAkicIAkAAIAADPg");
	this.shape_25.setTransform(121.3,81.8,1.004,1.004);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhHAAIAABHIA0AAIAAARIg0AAIAABRIBKAAIAAATg");
	this.shape_26.setTransform(106.3,81.8,1.004,1.004);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmBbQgOgQAAgbIAVAAQABAoAfAAQAPAAAIgJQAJgJgBgRQAAgWgngeQgqgbgBggQABgWAOgNQANgNAWAAQAWAAAOAPQANAPABAbIgVAAQgCgmgbAAQgNAAgJAIQgHAHgBAMQAAAWApAdQAqAbAAAkQAAAZgOAOQgOAOgZAAQgXAAgPgQg");
	this.shape_27.setTransform(92.9,81.8,1.004,1.004);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgxA6IAAgQIAhAAIAAARQAAAIAEAFQAFAFAHAAQAQAAAAgZIAAgwQAAgRgQAAQgLAAgGAOIgcAAIADhqIBVAAIgBAeIg3AAIgCAtIABABQAGgIAHgDQADgCAJAAQAnAAAAA2IAAAdQAAAhgMAQQgLAQgaAAQgyAAAAgwg");
	this.shape_28.setTransform(73.5,82,1.004,1.004);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKBoIAAhZIgwh2IAYAAIAiBbIAjhbIAYAAIgwB2IAABZg");
	this.shape_29.setTransform(54.1,81.8,1.004,1.004);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgwA4IAAgMIAgAAIAAAOQAAAVAQAAQAPAAABgZIAAgQQAAgRgIgGQgGgHgPAAIAAgaQAOAAAGgHQAHgGAAgTQAAgPgEgGQgCgHgIAAQgPAAAAAWIAAAIIggAAIAAgKQgBgVANgNQAOgOAVAAQAWAAAMAQQAMAPAAAWQABAUgFAKQgFALgNAIQAPAGAFALQAGALAAAWQAAA9gyAAQgxAAABgzg");
	this.shape_30.setTransform(34.5,81.8,1.004,1.004);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAjIAOgjIgNAAIAAghIAgAAIAAAhIgSAjg");
	this.shape_31.setTransform(18.4,92.4,1.004,1.004);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBBqIAAikIgcAAIAAgUQAZgMAQgPIASAAIAADTg");
	this.shape_32.setTransform(7.6,81.7,1.004,1.004);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AvNCQQgyg0AAhcQAAhaAyg1QAyg1BUAAQBKAAAuAzIAAgrIApAAIAACFIgsAAQgDgvgegcQgegbgxAAQg+AAgkApQglAqAABHQAABLAlArQAkAqBAAAQBWAAAThgIA1AAQgHBCgpAjQgpAjhJAAQhXAAgyg1gASRC9IAAgnIA/AAIAAh4Ih7izIgfAAIAAgnICPAAIAAAnIg2AAIBgCIIBeiIIg3AAIAAgnICOAAIAAAnIggAAIiACzIAAB4IA/AAIAAAngAN7C9IAAgnIA0AAIAAkrIgDAAIh8FSIgrAAIh6lSIgBAAIAAErIAxAAIAAAnIiWAAIAAgnIAxAAIAAkrIgxAAIAAgnICLAAIBtE2IBuk2ICLAAIAAAnIg0AAIAAErIA0AAIAAAngAC4C9IAAgnIA0AAIAAkrIg0AAIAAgnIFAAAIAAByIgnAAIAAhLIiyAAIAACAIBXAAIAAg4IAnAAIAACTIgnAAIAAg2IhXAAIAACGICyAAIAAhRIAnAAIAAB4gAjKC9IAAgnIA0AAIAAkrIg0AAIAAgnICoAAQBfAAAzAxQA0AxAABaQAABbg0AxQgzAxhfAAgAhiCWIBAAAQBDAAAngoQAmgoAAhGQAAhHgmgnQgngnhDAAIhAAAgAmDC9IAAgnIA2AAIgghUIirAAIgjBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA5AAICPFSIAqAAIAAAngAl9AbIhFiiIhFCiICKAAgAyOC9IAAgnIA2AAIgghUIiqAAIgkBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA6AAICPFSIAqAAIAAAngAyIAbIhFiiIhFCiICKAAg");
	this.shape_33.setTransform(341,33.5,1.004,1.004);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AGZDDQhaAAgnghQgzgrAAhyQAAhyA0gvQAsgmBkAAQBLAAArAFQAWACAGACIgHB4Ig0AAIgHg6QgegEgcAAQgnAAgTAOQgkAaAABRQAAB8A1AHQANACA3gBIAAhOIgxgNIAAgwICQAAIAIDQgAAkC8IAIg6IAdgFIgRi8IhQD7Ih2AAIhYj8IgSC9IAdAFIAIA6IiWAAIAHg6IAegFIAbj7IgegFIgHg6IC3AAIBSDsIBMjsIDDAAIgHA6IgeAGIAYD6IAdAFIAHA6gApAC8IAIg6IAdgFIAAj6IgdgGIgIg6IC9AAIgHA6IgdAGIAAD6IAdAFIAHA6g");
	this.shape_34.setTransform(121,33.6,1.004,1.004);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjHDEIBElXIgFFTIBAmXIATG0IA1oJIA1IJIARm2IBDGaIgGlUIBFFXIjIBpg");
	this.shape_35.setTransform(20.1,30.2,1.004,1.004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486,96);


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
	this.shape.graphics.f("#002F53").s().p("AgyAiIAmhDIA/AAIg9BDg");
	this.shape.setTransform(136.9,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002F53").s().p("AgcCtIAAiQIhIjJIA8AAIAoCEIABAAIAoiEIA8AAIhIDJIAACQg");
	this.shape_1.setTransform(333.1,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002F53").s().p("AhDCYQgXgYAAgnIAAixQAAgnAXgYQAYgaArAAQAsAAAZAaQAWAYAAAnIAACxQAAAngWAYQgZAagsAAQgrAAgYgagAgXhzQgHAJAAATIAACuQAAAUAHAJQAHAKAQAAQARAAAIgKQAGgJAAgUIAAiuQAAgTgGgJQgIgKgRAAQgQAAgHAKg");
	this.shape_2.setTransform(310.5,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002F53").s().p("AAfCtIAAiaIg9AAIAACaIg8AAIAAlZIA8AAIAACNIA9AAIAAiNIA8AAIAAFZg");
	this.shape_3.setTransform(286.5,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002F53").s().p("AhRCtIAAlZICcAAIAAA0IhhAAIAABZIBLAAIAAAyIhLAAIAABmIBoAAIAAA0g");
	this.shape_4.setTransform(253.7,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002F53").s().p("AgdCtIAAklIg5AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_5.setTransform(233.2,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002F53").s().p("AArCtIgLhNIg/AAIgLBNIg5AAIA/lZIBIAAIBAFZgAgXAsIAuAAIgXiTIAAAAg");
	this.shape_6.setTransform(215,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002F53").s().p("AAkCtIgpiQQgLACgTAAIAACOIg8AAIAAlZIBTAAQAxAAAZAYQAZAYAAA3QAABEgpARIAyCdgAgjgQIAVAAQAWAAAKgLQAKgMAAgeQAAgfgKgMQgKgLgWAAIgVAAg");
	this.shape_7.setTransform(192.9,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002F53").s().p("AgdCtIAAklIg5AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_8.setTransform(171,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002F53").s().p("AhBCVQgXgbgCgoIA4gJQACAaAKANQAJANANABQAQAAAJgJQAKgIAAgPQAAgWgTgWQgIgJgggdQg8gxAAg1QAAgpAYgXQAYgXAqAAQAjAAAWAYQAVAXAEAlIg4AGQgCgTgKgLQgIgIgMAAQgcAAAAAiQAAAUATAUQAHAIAhAeQA8AyAAA0QAAAqgaAXQgZAYgpAAQgoAAgYgdg");
	this.shape_9.setTransform(150.8,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002F53").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_10.setTransform(133.6,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002F53").s().p("AhCCaQgWgYAAgpIAAixQAAgmAWgZQAXgaAqAAQApAAAYAcQAWAbAAApIAAAVIg4AAQAAglgIgPQgIgNgQAAQgbAAAAAmIAACwQAAAlAcAAQAQgBAIgKQAHgMAAgZIAAgiIgkAAIAAgtIBfAAIAACtIgcAAIgMgZQgOARgMAGQgOAIgSAAQgjgBgWgXg");
	this.shape_11.setTransform(114.8,21);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002F53").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBLAAIAAAyIhLAAIAABmIBpAAIAAA0g");
	this.shape_12.setTransform(92.9,20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002F53").s().p("AAjCtIgoiQQgLACgTAAIAACOIg8AAIAAlZIBUAAQAxAAAYAYQAZAYABA3QgBBEgqARIAzCdgAgjgQIAUAAQAXAAAKgLQAKgMgBgeQABgfgKgMQgKgLgXAAIgUAAg");
	this.shape_13.setTransform(70.2,20.9);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.8,343.3,45.9);


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
	this.cta_label.setTransform(265.8,41,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,-9,347,50);

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
	this.cta_label.setTransform(265.8,41,1,1,0,0,0,137.4,26);

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
	this.text_3.cache(-2,-2,604,1204);

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