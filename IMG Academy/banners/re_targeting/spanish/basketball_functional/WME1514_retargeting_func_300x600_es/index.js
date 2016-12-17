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
p.nominalBounds = new cjs.Rectangle(0,0,539,903);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


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

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkG6IjAonIgCAAIAAInIiJAAIAAtzICNAAIC3H4IACAAIAAn4ICJAAIAANzg");
	this.shape.setTransform(104.7,588.8,0.856,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjTG6IAAtzIGVAAIAACFIj8AAIAADjIDCAAIAACDIjCAAIAAEEIENAAIAACEg");
	this.shape_1.setTransform(56.4,588.8,0.856,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiBBXIBgitICkAAIifCtg");
	this.shape_2.setTransform(232.5,537,0.856,0.856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AivGDQg4g9AAhjIAAnFQAAhjA4g9QA+hCBxAAQByAAA9BCQA5A9AABjIAAHFQAABjg5A9Qg9BChyAAQhxAAg+hCgAg+koQgRAXAAAzIAAG9QAAAzARAXQATAYArAAQAsAAATgYQARgXAAgzIAAm9QAAgzgRgXQgTgYgsAAQgrAAgTAYg");
	this.shape_3.setTransform(221.2,588.7,0.856,0.856);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABuG6IgbjEIilAAIgbDEIiTAAICjtzIC7AAICjNzgAg8BxIB5AAIg8l5IgBAAg");
	this.shape_4.setTransform(529.3,588.8,0.856,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjSG6IAAtzIGUAAIAACFIj8AAIAADjIDBAAIAACDIjBAAIAAEEIEOAAIAACEg");
	this.shape_5.setTransform(482.4,588.8,0.856,0.856);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipF9Qg7hDgEhpICQgVQAEBCAZAjQAYAhAkAAQAoAAAXgVQAZgVAAgnQAAg5gwg3QgVgYhThIQhKg8ghgxQgwhHAAhVQAAhqA+g6QA9g5BuAAQBaAAA5A8QA2A6AKBgIiRAQQgEg0gZgZQgVgVgeAAQgjAAgUAXQgTAXAAApQAAAyAwA1QARASBXBNQBJA9AhAyQAwBIAABRQAABrhCA9QhBA6hrAAQhlAAg/hJg");
	this.shape_6.setTransform(435.2,588.7,0.856,0.856);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjSG6IAAtzIGVAAIAACFIj+AAIAADjIDCAAIAACDIjCAAIAAEEIEPAAIAACEg");
	this.shape_7.setTransform(371,588.8,0.856,0.856);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjnG6IAAtzIDhAAQDuAAAAELIAAFdQAAELjuAAgAhPE9IA0AAQA7AAAYgbQAYgbAAhGIAAmBQAAhGgYgbQgYgbg7AAIg0AAg");
	this.shape_8.setTransform(322.4,588.8,0.856,0.856);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABkG6Ii/onIgDAAIAAInIiKAAIAAtzICNAAIC4H4IACAAIAAn4ICJAAIAANzg");
	this.shape_9.setTransform(271.7,588.8,0.856,0.856);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjnG6IAAtzIDhAAQDuAAAAELIAAFdQAAELjuAAgAhQE9IA1AAQA7AAAYgbQAYgbAAhGIAAmBQAAhGgYgbQgYgbg7AAIg1AAg");
	this.shape_10.setTransform(170.9,588.8,0.856,0.856);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlSLFIAA2JIKKAAIAADUImXAAIAAFuIE5AAIAADSIk5AAIAAGgIGyAAIAADVg");
	this.shape_11.setTransform(522.3,461.1,0.856,0.856);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah4LFIAAy1IjsAAIAAjUILJAAIAADUIjrAAIAAS1g");
	this.shape_12.setTransform(449.8,461.1,0.856,0.856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah5LFIAA2JIDyAAIAAWJg");
	this.shape_13.setTransform(394.8,461.1,0.856,0.856);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmKLFIAA2JIFeAAQDjAABoBgQBsBjgBDgQABDfhsBhQhoBgjjAAIhqAAIAAJGgAiWhHIBeAAQB2AAAsguQAsguAAh+QAAh/gsguQgsgth2AAIheAAg");
	this.shape_14.setTransform(334.2,461.1,0.856,0.856);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AEaLFIAAxSIgEAAIjbRSIh1AAIjbxSIgEAAIAARSIjVAAIAA2JIFBAAICtM7IABAAICts7IFAAAIAAWJg");
	this.shape_15.setTransform(241.1,461.1,0.856,0.856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkZJuQhbhhAAigIAArZQAAigBbhgQBjhsC2AAQC2AABkBsQBbBhAACfIAALZQAACghbBhQhkBri2gBQi2ABhjhrgAhkncQgcAkAABSIAALNQAABSAcAkQAeAoBGAAQBHAAAegoQAcgjAAhTIAArNQAAhSgcgkQgegnhHAAQhGAAgeAng");
	this.shape_16.setTransform(150.4,461.1,0.856,0.856);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkTJuQhbhhAAigIAArZQAAifBbhhQBkhsC0AAQCvAABhB0QBaBpAACpIAABoIj0AAIAAhuQAAhVgjguQgggogzAAQhFAAgeAnQgcAkAABSIAALNQAABSAcAkQAeAoBFAAQBAAAAcgmQAagiAAhIIAAirID0AAIAACjQAACehaBjQhhBrivgBQi0ABhkhrg");
	this.shape_17.setTransform(69.7,461.1,0.856,0.856);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhiDeQgigogDg8IBUgMQADAmAOAUQAOATAUAAQAXAAAOgMQAPgMAAgXQAAghgcggQgNgOgvgqQhahLAAhPQAAg9AkgiQAkghA/gBQA0AAAhAkQAgAhAGA5IhVAJQgCgfgPgOQgMgMgSAAQgTAAgMANQgLANAAAYQAAAdAcAfQAKALAyAtQBaBMAABMQAAA/gnAjQgmAjg9AAQg7AAglgrg");
	this.shape_18.setTransform(540.6,352.8,0.856,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg6AhgkQAkgnBBAAQBCAAAkAnQAhAkAAA6IAAEHQAAA7ghAjQgkAnhCAAQhBAAgkgngAgkisQgKANAAAeIAAEDQAAAeAKAOQALANAZAAQAaAAALgNQAKgOAAgeIAAkDQAAgegKgNQgMgOgZAAQgZAAgLAOg");
	this.shape_19.setTransform(512.1,352.8,0.856,0.856);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA1EBIg8jVQgQACgfAAIAADTIhYAAIAAoBIB8AAQBKgBAlAkQAmAkgBBRQAABmg+AaIBLDpgAg2gZIAgAAQAiAAAPgQQAPgSAAgtQAAgtgPgSQgPgQgiAAIggAAg");
	this.shape_20.setTransform(483.3,352.8,0.856,0.856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrEBIAAm0IhVAAIAAhNIECAAIAABNIhWAAIAAG0g");
	this.shape_21.setTransform(455.3,352.8,0.856,0.856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg7AhgjQAkgnBBAAQBBAAAlAnQAhAkAAA6IAAEHQAAA7ghAjQglAnhBAAQhBAAgkgngAgkisQgKANAAAeIAAEDQAAAeAKAOQALANAZAAQAZAAAMgNQAKgOAAgeIAAkDQAAgegKgNQgMgOgZAAQgZAAgLAOg");
	this.shape_22.setTransform(428.1,352.8,0.856,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhhDeQgjgogDg8IBVgMQACAmAPAUQANATAVAAQAXAAAOgMQAOgMAAgXQAAghgcggQgMgOgwgqQhahLAAhPQAAg9AkgiQAkghA/gBQA1AAAgAkQAgAhAGA5IhVAJQgCgfgPgOQgMgMgRAAQgUAAgMANQgLANAAAYQAAAdAcAfQAKALAyAtQBaBMAABMQAAA/gnAjQgmAjg9AAQg7AAgkgrg");
	this.shape_23.setTransform(399.5,352.8,0.856,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg6AhgkQAkgnBBAAQBCAAAkAnQAhAkAAA6IAAEHQAAA7ghAjQgkAnhCAAQhBAAgkgngAgjisQgLANAAAeIAAEDQAAAeALAOQALANAYAAQAaAAALgNQAKgOAAgeIAAkDQAAgegKgNQgLgOgaAAQgYAAgLAOg");
	this.shape_24.setTransform(371.1,352.8,0.856,0.856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA6EBIhvlAIgBAAIAAFAIhQAAIAAoBIBSAAIBqElIABAAIAAklIBQAAIAAIBg");
	this.shape_25.setTransform(341.6,352.8,0.856,0.856);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA6EBIhvlAIgBAAIAAFAIhQAAIAAoBIBSAAIBqElIABAAIAAklIBQAAIAAIBg");
	this.shape_26.setTransform(299.9,352.8,0.856,0.856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhlDiQghgjAAg7IAAkHQAAg6AhgkQAkgnBBAAQBCAAAkAnQAhAjAAA7IAAEHQAAA7ghAjQgkAnhCAAQhBAAgkgngAgjisQgKANAAAeIAAEDQAAAeAKAOQALANAYAAQAaAAALgNQAKgOAAgeIAAkDQAAgegKgNQgLgOgaAAQgYAAgLAOg");
	this.shape_27.setTransform(270.5,352.8,0.856,0.856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhjDiQghgjAAg7IAAkHQAAg7AhgjQAkgnBBAAQA/ABAkAqQAgAmAAA9IAAAmIhYAAIAAgoQAAgfgOgRQgLgOgSAAQgZAAgKAOQgKANAAAeIAAEDQAAAeAKAOQAKANAZAAQAWAAALgNQAKgNAAgZIAAg/IBYAAIAAA7QAAA6ggAkQgkAng/AAQhBAAgkgng");
	this.shape_28.setTransform(241.2,352.8,0.856,0.856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABAEBIgPhyIhgAAIgQByIhVAAIBeoBIBsAAIBfIBgAgiBCIBFAAIgjjcIAAAAg");
	this.shape_29.setTransform(201.4,352.8,0.856,0.856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiOEBIAAoBIB/AAQBRgBAmAkQAnAjAABSQAABRgnAjQgmAihRAAIgmAAIAADTgAg1gZIAiAAQApAAAQgQQAQgRAAguQAAgugQgRQgQgQgpAAIgiAAg");
	this.shape_30.setTransform(174.8,352.8,0.856,0.856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABnEBIAAmRIgCAAIhQGRIgpAAIhQmRIgBAAIAAGRIhOAAIAAoBIB1AAIA+ErIABAAIA+krIB0AAIAAIBg");
	this.shape_31.setTransform(141,352.8,0.856,0.856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABAEBIgQhyIhfAAIgPByIhXAAIBgoBIBrAAIBgIBgAgiBCIBFAAIgjjcIAAAAg");
	this.shape_32.setTransform(108.3,352.8,0.856,0.856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhjDiQghgjAAg7IAAkHQAAg7AhgjQAkgnBAAAQBAABAjAqQAhAmAAA9IAAAmIhZAAIAAgoQABgfgNgRQgMgOgTAAQgXAAgMAOQgJANgBAeIAAEDQABAeAJAOQAMANAXAAQAYAAAKgNQAJgNAAgZIAAg/IBZAAIAAA7QAAA6ghAkQgjAnhAAAQhAAAgkgng");
	this.shape_33.setTransform(80,352.8,0.856,0.856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABAEBIgQhyIhfAAIgQByIhWAAIBgoBIBsAAIBeIBgAgiBCIBFAAIgjjcIAAAAg");
	this.shape_34.setTransform(51.9,352.8,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.3,330.1,514,297.5);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADJMmIgxllIkuAAIgxFlIkNAAIEq5LIFWAAIEpZLgAhuDQIDdAAIhtqzIgDAAg");
	this.shape.setTransform(482.4,91.8,0.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC2MmIlfvuIgDAAIAAPuIj7AAIAA5LIEBAAIFQOZIADAAIAAuZID7AAIAAZLg");
	this.shape_1.setTransform(407.9,91.8,0.7,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJMmIAA5LIETAAIAAZLg");
	this.shape_2.setTransform(351.1,91.8,0.7,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFBMmIAAzqIgEAAIj6TqIiFAAIj6zqIgEAAIAATqIjxAAIAA5LIFrAAIDFOtIADAAIDFutIFrAAIAAZLg");
	this.shape_3.setTransform(284.9,91.8,0.7,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlALDQhnhvAAi1IAAs9QAAi1BnhvQBxh5DPAAQDPAAByB5QBnBvAAC1IAAM9QAAC1hnBvQhyB5jPAAQjPAAhxh5gAhyoeQggApAABeIAAMvQAABeAgApQAiAsBQAAQBRAAAigsQAggpAAheIAAsvQAAhegggpQgigshRAAQhQAAgiAsg");
	this.shape_4.setTransform(200.5,91.8,0.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmnMmIAA5LIGbAAQG0AAAAHnIAAJ9QAAHnm0AAgAiSJDIBgAAQBtAAAsgyQAsgxAAh/IAArBQAAh+gsgyQgsgxhtAAIhgAAg");
	this.shape_5.setTransform(125.3,91.8,0.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkaJwQhbhhAAigIAArdQAAigBbhhQBkhrC2AAQC3AABkBrQBbBhAACgIAALdQAACghbBhQhkBri3AAQi3AAhjhrgAhlneQgcAkAABTIAALPQAABTAcAkQAeAoBHAAQBHAAAegoQAdgkAAhTIAArPQAAhTgdgkQgegnhHAAQhHAAgeAng");
	this.shape_6.setTransform(489.4,218.1,0.7,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkUJ6QhbhjAAioIAArdQAAifBZhiQBhhrCtAAQCtgBBkB0QBcBrAACoIAABbIjpAAQAAibgig7Qgfg2hJAAQhtAAAACcIAALZQAABJAaAkQAcAqA9AAQBHgBAfgtQAegtAAhrIAAiKIiaAAIAAi/IGOAAIAALQIh2AAIgthrQg6BFgyAbQg4AfhRgBQiTAAhZhhg");
	this.shape_7.setTransform(423,218.1,0.7,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlULIIAA2PIKNAAIAADVImYAAIAAFvIE5AAIAADTIk5AAIAAGiIG0AAIAADWg");
	this.shape_8.setTransform(361.5,218.1,0.7,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkRJwQhkhjAAi2IAAwnID0AAIAAQwQAABPAgAmQAgAoBBAAQBCAAAggoQAggmAAhPIAAwwID0AAIAAQnQAAC2hkBjQhiBhiwAAQivAAhihhg");
	this.shape_9.setTransform(297.1,218.8,0.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjSLRIAAjUIAzAAQBFAAAegeQAdgcAAg9IAAxWIDzAAIAARyQgBCThGBIQhRBUi9AAg");
	this.shape_10.setTransform(241.9,218.8,0.7,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ak5LIIAA2PID0AAIAAS5IF/AAIAADWg");
	this.shape_11.setTransform(177.3,218.1,0.7,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlULIIAA2PIKNAAIAADVImYAAIAAFvIE5AAIAADTIk5AAIAAGiIG0AAIAADWg");
	this.shape_12.setTransform(119.5,218.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai3GcQg/hJgGhxICdgWQAEBGAbAmQAaAkAnAAQArAAAZgXQAbgXAAgpQAAg/g0g7QgXgZhahOQhQhBgjg1Qg0hNAAhcQAAhzBDg+QBCg+B3AAQBiAAA9BCQA6A9AMBpIidARQgEg4gcgbQgWgXghAAQgmAAgVAZQgWAYABAtQgBA2A0A5QATATBeBUQBPBCAlA2QA0BNAABYQAAB0hIBBQhHBAhzAAQhuAAhEhPg");
	this.shape.setTransform(520.3,183.2,0.797,0.797);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjjHeIAAu7IG1AAIAACPIkRAAIAAD3IDSAAIAACNIjSAAIAAEYIEkAAIAACQg");
	this.shape_1.setTransform(474.9,183.2,0.797,0.797);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj6HeIAAu7ID0AAQEBAAAAEhIAAF5QAAEhkBAAgAhWFWIA5AAQBAAAAagdQAagdAAhLIAAmhQAAhLgageQgagdhAAAIg5AAg");
	this.shape_2.setTransform(426,183.2,0.797,0.797);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB3HeIgejUIiyAAIgdDUIieAAICvu7IDLAAICvO7gAhBB7ICDAAIhBmZIgBAAg");
	this.shape_3.setTransform(375.8,183.2,0.797,0.797);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj6HeIAAu7ID0AAQEBAAAAEhIAAF5QAAEhkBAAgAhWFWIA5AAQBAAAAagdQAagdAAhLIAAmhQAAhLgageQgagdhAAAIg5AAg");
	this.shape_4.setTransform(327.1,183.2,0.797,0.797);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQHeIAAu7ICiAAIAAO7g");
	this.shape_5.setTransform(288.8,183.2,0.797,0.797);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjSHeIAAu7IClAAIAAMrIEAAAIAACQg");
	this.shape_6.setTransform(256.3,183.2,0.797,0.797);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRHeIAAu7ICjAAIAAO7g");
	this.shape_7.setTransform(221.6,183.2,0.797,0.797);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkBHeIAAu7ID0AAQD8AAAAD9QAABDgbA0QgeA7g5AWQBCAbAgA0QAjA4AABaQAAB/g7BGQhBBQiFAAgAhdFWIBFAAQA+AAAdglQAagjAAhLQAAhLgegjQghglhGAAIg1AAgAhdhVIA8AAQAuAAAegfQAgghAAg6QAAiHhpAAIg/AAg");
	this.shape_8.setTransform(183.6,183.2,0.797,0.797);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB3HeIgdjUIiyAAIgeDUIifAAICxu7IDKAAICwO7gAhBB7ICDAAIhBmZIgBAAg");
	this.shape_9.setTransform(132.8,183.2,0.797,0.797);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABXHeIAAmoIitAAIAAGoIikAAIAAu7ICkAAIAAGGICtAAIAAmGICkAAIAAO7g");
	this.shape_10.setTransform(82.6,183.2,0.797,0.797);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiCEmQgug0gEhQIBwgQQADAyAUAbQASAaAcgBQAfABARgRQAUgQgBgeQAAgtglgqQgQgShAg4Qg5gugZglQglg4AAhCQAAhRAvgtQAvgsBWAAQBFAAAtAvQApAsAHBLIhvAMQgDgogUgUQgQgQgXAAQgbAAgPASQgQASAAAfQAAAmAmApQANAPBDA7QA4AwAaAmQAmA4AAA+QAABTg0AvQgyAthTAAQhOAAgwg5g");
	this.shape_11.setTransform(526.1,107,0.797,0.797);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiCErQgxgvABhYIAAn9IB1AAIAAICQAABLA9AAQA+AAAAhLIAAoCIB2AAIAAH9QAABYgxAvQguAvhVAAQhUAAgugvg");
	this.shape_12.setTransform(490.9,107.3,0.797,0.797);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5FWIAApEIhyAAIAAhmIFXAAIAABmIhxAAIAAJEg");
	this.shape_13.setTransform(457.1,107,0.797,0.797);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABVFWIgViYIh/AAIgUCYIhzAAIB+qqICQAAIB+KqgAguBXIBdAAIgvkjIAAAAg");
	this.shape_14.setTransform(411.9,107,0.797,0.797);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABNFWIiTmqIgCAAIAAGqIhrAAIAAqqIBtAAICOGEIABAAIAAmEIBrAAIAAKqg");
	this.shape_15.setTransform(376,107,0.797,0.797);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiHEsQgsgvABhNIAAlfQgBhNAsgvQAwgzBXAAQBYAAAvAzQAsAwABBMIAAFfQgBBNgsAvQgvAzhYAAQhXAAgwgzgAgvjlQgOASAAAnIAAFZQAAAnAOASQAOASAhAAQAiAAAOgSQAOgSAAgnIAAlZQAAgngOgSQgOgTgiAAQghAAgOATg");
	this.shape_16.setTransform(339.6,107,0.797,0.797);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5FWIAAqqIBzAAIAAKqg");
	this.shape_17.setTransform(312.3,107,0.797,0.797);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiEEsQgsgvAAhNIAAlfQAAhNAsgvQAwgzBXAAQBUAAAvA4QArAyAABRIAAAzIh2AAIAAg2QAAgogRgXQgPgTgYAAQghAAgPATQgNASAAAnIAAFZQAAAnANASQAPASAhAAQAfABANgTQAMgQAAgiIAAhTIB2AAIAABPQAABMgrAwQgvAzhUAAQhXAAgwgzg");
	this.shape_18.setTransform(285.1,107,0.797,0.797);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiEEsQgsgvAAhNIAAlfQAAhMAsgwQAwgzBWAAQBVAAAvA4QArAyAABRIAAAzIh2AAIAAg2QAAgogRgXQgPgTgZAAQggAAgPATQgNASAAAnIAAFZQAAAnANASQAPASAgAAQAfABAOgTQAMgQAAgiIAAhTIB2AAIAABPQAABMgrAwQgvAzhVAAQhWAAgwgzg");
	this.shape_19.setTransform(249.1,107,0.797,0.797);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiiFWIAAqqIE5AAIAABmIjDAAIAACwICVAAIAABlIiVAAIAADIIDPAAIAABng");
	this.shape_20.setTransform(215.4,107,0.797,0.797);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiiFWIAAqqIFFAAIAABmIjQAAIAACwICbAAIAABlIibAAIAAEvg");
	this.shape_21.setTransform(182.6,107,0.797,0.797);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABGFWIhRkcQgWADgnAAIAAEZIh1AAIAAqqIClAAQBjgBAwAvQAyAwAABrQAACHhTAjIBkE3gAhIghIAqAAQAvAAASgXQAUgWAAg9QAAg8gUgXQgSgWgvAAIgqAAg");
	this.shape_22.setTransform(147.6,107,0.797,0.797);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AijFWIAAqqIE5AAIAABmIjDAAIAACwICVAAIAABlIiVAAIAADIIDRAAIAABng");
	this.shape_23.setTransform(112.6,107,0.797,0.797);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ai9FWIAAqqICoAAQBtgBAyAvQA0AvAABsQAABsg0AuQgyAuhtAAIgyAAIAAEZgAhHghIAtAAQA3AAAWgXQAVgWABg9QgBg9gVgWQgWgWg3AAIgtAAg");
	this.shape_24.setTransform(77.7,107,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AAQAAhqA6AAQA7AAAABqQAABrg7AAQg6AAAAhrgAgYhGQgLAWAAAwQAAAxALAWQAJARAPAAQAkAAAAhYQAAhXgkAAQgPAAgJARg");
	this.shape.setTransform(537.9,98.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBoIgxjPIAWAAIAkCkIAAAAIAlikIAWAAIgxDPg");
	this.shape_1.setTransform(524.2,98.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBoIAAjPIAVAAIAADPg");
	this.shape_2.setTransform(514.6,98.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBoIAAi8IgrAAIAAgTIBrAAIAAATIgrAAIAAC8g");
	this.shape_3.setTransform(505.7,98.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBoIgghjIgeABIAABiIgWAAIAAjPIAyAAQAYAAAQAOQAQAOAAAaQAAAogiAJIAjBogAgfgMIAUAAQAVAAAKgJQAKgIAAgTQAAgSgKgJQgKgJgVAAIgUAAg");
	this.shape_4.setTransform(493.4,98.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6AAQAAhqA6AAQA7AAAABqQAABrg7AAQg6AAAAhrgAgYhGQgLAWAAAwQAAAxALAWQAJARAPAAQARAAAJgRQAKgWAAgxQAAgwgKgWQgJgRgRAAQgPAAgJARg");
	this.shape_5.setTransform(478.7,98.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBoIAAjPIAyAAQAWAAAQAPQAPAQAAAaQAAAagPAQQgQAOgWAAIgbAAIAABegAgcgIIAXAAQAiAAAAgmQAAgmgiAAIgXAAg");
	this.shape_6.setTransform(465.5,98.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhIAAIAABHIA0AAIAAARIg0AAIAABRIBLAAIAAATg");
	this.shape_7.setTransform(452.6,98.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BoIAAjPIAnAAQAiAAAQAWQATAZAAA4QAAA5gTAZQgQAWgiAAgAgeBVIAMAAQAZAAALgQQAOgTAAgyQAAgxgOgTQgLgQgZAAIgMAAg");
	this.shape_8.setTransform(438.6,98.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6AAQAAhqA6AAQA7AAAABqQAABrg7AAQg6AAAAhrgAgYhGQgLAWAAAwQAAAxALAWQAJARAPAAQAkAAAAhYQAAhXgkAAQgPAAgJARg");
	this.shape_9.setTransform(417.4,98.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBoIAAi8IgrAAIAAgTIBrAAIAAATIgrAAIAAC8g");
	this.shape_10.setTransform(404.5,98.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBoIg+i0IgBAAIAAC0IgXAAIAAjPIAjAAIA0CYIABAAIAAiYIAXAAIAADPg");
	this.shape_11.setTransform(391.6,98.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhHAAIAABHIA0AAIAAARIg0AAIAABRIBKAAIAAATg");
	this.shape_12.setTransform(378.3,98.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzBoIAAi+IgBAAIgrC+IgNAAIgsi+IAAAAIAAC+IgVAAIAAjPIAkAAIAjCcIABAAIAjicIAkAAIAADPg");
	this.shape_13.setTransform(362.6,98.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnBoIgNg+IgzAAIgNA+IgWAAIAujPIAdAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_14.setTransform(347.2,98.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBoIAAjPIAxAAQAXAAAQAPQAPAQAAAaQAAAagPAQQgQAOgXAAIgaAAIAABegAgcgIIAXAAQAjAAgBgmQABgmgjAAIgXAAg");
	this.shape_15.setTransform(335.3,98.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAzBoIAAi+IgBAAIgrC+IgNAAIgri+IgBAAIAAC+IgVAAIAAjPIAkAAIAjCcIAAAAIAkicIAkAAIAADPg");
	this.shape_16.setTransform(319.5,98.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnBoIgNg+IgzAAIgMA+IgYAAIAvjPIAdAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_17.setTransform(304.2,98.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5AAQAAhqA7AAQAwAAAFBCIgWAAQgFgvgaAAQgSAAgJAUQgJAUAAAvQAAAwAJAUQAJAUASAAQAgAAACg1IAWAAQAAAjgPASQgPATgaAAQg7AAAAhrg");
	this.shape_18.setTransform(290.4,98.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhHAAIAABHIA0AAIAAARIg0AAIAABRIBKAAIAAATg");
	this.shape_19.setTransform(270.8,98.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BoIAAjPIAnAAQAiAAAQAWQAUAZgBA4QABA5gUAZQgQAWgiAAgAgeBVIAMAAQAZAAALgQQAOgTAAgyQAAgxgOgTQgLgQgZAAIgMAAg");
	this.shape_20.setTransform(256.8,98.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglBbQgOgQgBgbIAVAAQABAoAfAAQAPAAAIgJQAJgJAAgRQAAgWgpgeQgqgbAAggQAAgWAOgNQAOgNAWAAQAWAAANAPQAOAPACAbIgWAAQgCgmgbAAQgNAAgJAIQgHAHAAAMQAAAWAoAdQAqAbAAAkQAAAZgOAOQgOAOgZAAQgXAAgOgQg");
	this.shape_21.setTransform(236.4,98.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAnBoIgNg+Ig0AAIgMA+IgXAAIAujPIAeAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_22.setTransform(223.6,98.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAfBoIg/i0IAAAAIAAC0IgXAAIAAjPIAkAAIA0CYIAAAAIAAiYIAXAAIAADPg");
	this.shape_23.setTransform(209.8,98.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBoIgNg+IgzAAIgNA+IgWAAIAujPIAdAAIAuDPgAgWAXIAtAAIgXhvIAAAAg");
	this.shape_24.setTransform(196.1,98.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzBoIAAi+IAAAAIgtC+IgMAAIgri+IgBAAIAAC+IgVAAIAAjPIAkAAIAjCcIAAAAIAkicIAkAAIAADPg");
	this.shape_25.setTransform(180.8,98.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwBoIAAjPIBeAAIAAATIhHAAIAABHIA0AAIAAARIg0AAIAABRIBKAAIAAATg");
	this.shape_26.setTransform(165.9,98.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmBbQgOgQAAgbIAVAAQABAoAfAAQAPAAAIgJQAJgJgBgRQAAgWgngeQgqgbgBggQABgWAOgNQANgNAWAAQAWAAAOAPQANAPABAbIgVAAQgCgmgbAAQgNAAgJAIQgHAHgBAMQAAAWApAdQAqAbAAAkQAAAZgOAOQgOAOgZAAQgXAAgPgQg");
	this.shape_27.setTransform(152.5,98.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgxA6IAAgQIAhAAIAAARQAAAIAEAFQAFAFAHAAQAQAAAAgZIAAgwQAAgRgQAAQgLAAgGAOIgcAAIADhqIBVAAIgBAeIg3AAIgCAtIABABQAGgIAHgDQADgCAJAAQAnAAAAA2IAAAdQAAAhgMAQQgLAQgaAAQgyAAAAgwg");
	this.shape_28.setTransform(133.2,98.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKBoIAAhZIgwh2IAYAAIAiBbIAjhbIAYAAIgwB2IAABZg");
	this.shape_29.setTransform(113.9,98.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgwA4IAAgMIAgAAIAAAOQAAAVAQAAQAPAAABgZIAAgQQAAgRgIgGQgGgHgPAAIAAgaQAOAAAGgHQAHgGAAgTQAAgPgEgGQgCgHgIAAQgPAAAAAWIAAAIIggAAIAAgKQgBgVANgNQAOgOAVAAQAWAAAMAQQAMAPAAAWQABAUgFAKQgFALgNAIQAPAGAFALQAGALAAAWQAAA9gyAAQgxAAABgzg");
	this.shape_30.setTransform(94.4,98.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAjIAOgjIgNAAIAAghIAgAAIAAAhIgSAjg");
	this.shape_31.setTransform(78.3,108.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBBqIAAikIgcAAIAAgUQAZgMAQgPIASAAIAADTg");
	this.shape_32.setTransform(67.6,98.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AvNCQQgyg0AAhcQAAhaAyg1QAyg1BUAAQBKAAAuAzIAAgrIApAAIAACFIgsAAQgDgvgegcQgegbgxAAQg+AAgkApQglAqAABHQAABLAlArQAkAqBAAAQBWAAAThgIA1AAQgHBCgpAjQgpAjhJAAQhXAAgyg1gASRC9IAAgnIA/AAIAAh4Ih7izIgfAAIAAgnICPAAIAAAnIg2AAIBgCIIBeiIIg3AAIAAgnICOAAIAAAnIggAAIiACzIAAB4IA/AAIAAAngAN7C9IAAgnIA0AAIAAkrIgDAAIh8FSIgrAAIh6lSIgBAAIAAErIAxAAIAAAnIiWAAIAAgnIAxAAIAAkrIgxAAIAAgnICLAAIBtE2IBuk2ICLAAIAAAnIg0AAIAAErIA0AAIAAAngAC4C9IAAgnIA0AAIAAkrIg0AAIAAgnIFAAAIAAByIgnAAIAAhLIiyAAIAACAIBXAAIAAg4IAnAAIAACTIgnAAIAAg2IhXAAIAACGICyAAIAAhRIAnAAIAAB4gAjKC9IAAgnIA0AAIAAkrIg0AAIAAgnICoAAQBfAAAzAxQA0AxAABaQAABbg0AxQgzAxhfAAgAhiCWIBAAAQBDAAAngoQAmgoAAhGQAAhHgmgnQgngnhDAAIhAAAgAmDC9IAAgnIA2AAIgghUIirAAIgjBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA5AAICPFSIAqAAIAAAngAl9AbIhFiiIhFCiICKAAgAyOC9IAAgnIA2AAIgghUIiqAAIgkBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA6AAICPFSIAqAAIAAAngAyIAbIhFiiIhFCiICKAAg");
	this.shape_33.setTransform(399.6,50.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AGZDDQhaAAgnghQgzgrAAhyQAAhyA0gvQAsgmBkAAQBLAAArAFQAWACAGACIgHB4Ig0AAIgHg6QgegEgcAAQgnAAgTAOQgkAaAABRQAAB8A1AHQANACA3gBIAAhOIgxgNIAAgwICQAAIAIDQgAAkC8IAIg6IAdgFIgRi8IhQD7Ih2AAIhYj8IgSC9IAdAFIAIA6IiWAAIAHg6IAegFIAbj7IgegFIgHg6IC3AAIBSDsIBMjsIDDAAIgHA6IgeAGIAYD6IAdAFIAHA6gApAC8IAIg6IAdgFIAAj6IgdgGIgIg6IC9AAIgHA6IgdAGIAAD6IAdAFIAHA6g");
	this.shape_34.setTransform(180.5,50.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjHDEIBElXIgFFTIBAmXIATG0IA1oJIA1IJIARm2IBDGaIgGlUIBFFXIjIBpg");
	this.shape_35.setTransform(80,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// black
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Egu3AK8IAA13MBdvAAAIAAV3g");
	this.shape_36.setTransform(300,70);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,140);


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
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,718.7,1204);


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


(lib.ctalabelsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032E53").s().p("AgyAiIAmhDIA/AAIg9BDg");
	this.shape.setTransform(179.9,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032E53").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBLAAIAAAyIhLAAIAABmIBpAAIAAA0g");
	this.shape_1.setTransform(258.6,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032E53").s().p("AgcCtIAAklIg6AAIAAg0ICtAAIAAA0Ig6AAIAAElg");
	this.shape_2.setTransform(238.1,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032E53").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBKAAIAAAyIhKAAIAABmIBpAAIAAA0g");
	this.shape_3.setTransform(218.7,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032E53").s().p("AhcCtIAAlZIBYAAQBaAAAABcQABAYgKATQgMAVgUAJQAwASAAA+QAAAugVAZQgYAdgwAAgAggB8IAYAAQAWAAAKgOQAJgMAAgbQABgbgLgNQgMgOgYAAIgTAAgAgggeIAVAAQAQAAAKgLQAMgMAAgVQAAgxglAAIgWAAg");
	this.shape_4.setTransform(195.7,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032E53").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_5.setTransform(176.8,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032E53").s().p("AAkCtIgpiQQgLACgTAAIAACOIg8AAIAAlZIBTAAQAxAAAZAYQAZAYAAA3QAABEgpARIAyCdgAgjgQIAVAAQAXAAAJgLQAKgMAAgeQAAgfgKgMQgJgLgXAAIgVAAg");
	this.shape_6.setTransform(158.7,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#032E53").s().p("AhCCYQgWgYAAgnIAAixQAAgnAWgYQAYgaArAAQAqAAAYAcQAWAbAAApIAAAZIg7AAIAAgbQAAgVgJgLQgIgKgMAAQgQAAgHAKQgHAJAAATIAACuQAAAUAHAJQAHAKAQAAQAQAAAHgJQAGgJAAgSIAAgpIA7AAIAAAoQAAAngWAYQgXAagrAAQgrAAgYgag");
	this.shape_7.setTransform(134,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#032E53").s().p("AhBCVQgXgbgCgoIA4gJQACAaAKANQAJANANABQAQAAAJgJQAJgIAAgPQAAgWgTgWQgIgJgfgdQg9gxAAg1QAAgpAZgXQAYgXAqAAQAjAAAWAYQAVAXAEAlIg4AGQgCgTgKgLQgIgIgMAAQgcAAAAAiQAAAUATAUQAHAIAhAeQA8AyAAA0QAAAqgaAXQgZAYgpAAQgoAAgYgdg");
	this.shape_8.setTransform(111.3,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#032E53").s().p("AAnCtIhKjXIgBAAIAADXIg2AAIAAlZIA4AAIBGDFIABAAIAAjFIA2AAIAAFZg");
	this.shape_9.setTransform(88.8,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#032E53").s().p("AgcCtIAAlZIA5AAIAAFZg");
	this.shape_10.setTransform(70.1,23.9);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.8,267,45.6);


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


(lib.ctasignupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(304,41,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,-6,271,50);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


(lib.ctasignupoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(334.8,41,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();
	this.cta_bg.setTransform(30.5,0);

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.5,0,600,70);


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
	this.cta_off.setTransform(269.5,35,1,1,0,0,0,300,35);

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
					x: '-=' + (stageWidth + 120),
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
	this.cta = new lib.ctasignup();
	this.cta.setTransform(0,990);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(299.5,599.5,1,1,0,0,0,299.5,599.5);
	this.text_3.cache(36,328,518,302);

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