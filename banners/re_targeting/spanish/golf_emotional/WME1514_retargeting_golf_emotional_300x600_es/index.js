(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.img_athlete1 = function() {
	this.initialize(img.img_athlete1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,543,531);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,588,608);


(lib.img_facilities = function() {
	this.initialize(img.img_facilities);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072B8").s().p("EgoEAO2MAmfgw1MgcPA1MMAq8g7EMgV9AwiIqOV6MAyehN6MghYBWnILv1JMAaOgutMgWjBF+IAEABMAakg2QMgQ8A70Mgn/AAWg");
	this.shape.setTransform(256.5,303);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shape, new cjs.Rectangle(0,0,512.9,605.9), null);


(lib.gradientover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-150,0,150).s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradientover, new cjs.Rectangle(0,0,300,300), null);


(lib.textheadline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkG6IjAonIgDAAIAAInIiJAAIAAtzICNAAIC4H4IADAAIAAn4ICJAAIAANzg");
	this.shape.setTransform(111.3,605.4,0.855,0.855);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjTG6IAAtzIGWAAIAACEIj+AAIAADkIDDAAIAACDIjDAAIAAEEIEPAAIAACEg");
	this.shape_1.setTransform(62.9,605.4,0.855,0.855);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiCBYIBgivIClAAIifCvg");
	this.shape_2.setTransform(239,553.7,0.855,0.855);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AivGDQg5g8AAhkIAAnGQAAhjA5g8QA+hDBxAAQByAAA+BDQA4A8AABjIAAHGQAABkg4A8Qg+BDhyAAQhxAAg+hDgAg/koQgRAWAAAzIAAG/QAAAzARAXQAUAYArAAQAsAAATgYQARgXAAgzIAAm/QAAgzgRgWQgTgZgsAAQgrAAgUAZg");
	this.shape_3.setTransform(227.7,605.4,0.855,0.855);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABuG6IgbjEIilAAIgbDEIiTAAICjtzIC7AAICjNzgAg8ByIB5AAIg8l7IgBAAg");
	this.shape_4.setTransform(535.7,605.4,0.855,0.855);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjTG6IAAtzIGWAAIAACEIj+AAIAADkIDDAAIAACDIjDAAIAAEEIEPAAIAACEg");
	this.shape_5.setTransform(488.8,605.4,0.855,0.855);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiqF+Qg6hEgFhoICQgVQAFBBAYAjQAYAhAlAAQApAAAXgUQAYgWAAgmQAAg6gwg3QgVgYhUhIQhJg9ghgwQgwhHAAhWQAAhpA9g6QA+g6BvAAQBaAAA5A9QA1A5ALBhIiRAQQgEg0gagaQgVgUgeAAQgkAAgTAXQgUAWAAAqQAAAxAwA1QARASBZBOQBIA+AiAyQAwBHAABRQAABrhDA9QhAA7hsAAQhmAAg/hJg");
	this.shape_6.setTransform(441.6,605.4,0.855,0.855);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjTG6IAAtzIGWAAIAACEIj+AAIAADkIDDAAIAACDIjDAAIAAEEIEPAAIAACEg");
	this.shape_7.setTransform(377.4,605.4,0.855,0.855);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjoG6IAAtzIDiAAQDvAAAAEKIAAFeQAAEMjvgBgAhQE9IA1AAQA8AAAYgbQAYgbAAhGIAAmCQAAhFgYgbQgYgbg8AAIg1AAg");
	this.shape_8.setTransform(328.9,605.4,0.855,0.855);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABlG6IjBonIgDAAIAAInIiJAAIAAtzICNAAIC4H4IACAAIAAn4ICKAAIAANzg");
	this.shape_9.setTransform(278.2,605.4,0.855,0.855);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjoG6IAAtzIDhAAQDwAAAAEKIAAFeQAAEMjwgBgAhQE9IA1AAQA8AAAYgbQAYgbAAhGIAAmCQAAhFgYgbQgYgbg8AAIg1AAg");
	this.shape_10.setTransform(177.4,605.4,0.855,0.855);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlTLFIAA2JIKLAAIAADUImXAAIAAFtIE5AAIAADTIk5AAIAAGhIGzAAIAADUg");
	this.shape_11.setTransform(528.7,477.8,0.855,0.855);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah5LFIAAy1IjrAAIAAjUILJAAIAADUIjrAAIAAS1g");
	this.shape_12.setTransform(456.2,477.8,0.855,0.855);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah5LFIAA2JIDzAAIAAWJg");
	this.shape_13.setTransform(401.2,477.8,0.855,0.855);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmKLFIAA2JIFeAAQDkAABoBgQBrBjAADfQAADghrBiQhoBfjkAAIhqAAIAAJGgAiWhIIBeAAQB2AAAtgtQAsguAAh/QAAh+gsguQgtguh2AAIheAAg");
	this.shape_14.setTransform(340.6,477.8,0.855,0.855);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AEbLFIAAxTIgEAAIjcRTIh1AAIjcxTIgEAAIAARTIjUAAIAA2JIFAAAICtM8IADAAICts8IFAAAIAAWJg");
	this.shape_15.setTransform(247.6,477.8,0.855,0.855);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkaJvQhahiAAigIAAraQAAifBahhQBkhrC2AAQC3AABjBrQBbBhAACfIAALaQAACghbBiQhjBqi3AAQi2AAhkhqgAhlncQgcAjAABTIAALOQAABSAcAkQAeAnBHAAQBHAAAegnQAcgkAAhSIAArOQAAhTgcgjQgdgnhIgBQhHABgeAng");
	this.shape_16.setTransform(156.9,477.8,0.855,0.855);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkTJvQhbhiAAigIAAraQAAifBbhhQBjhrC2AAQCuAABiBzQBZBpAACqIAABnIjzAAIAAhuQAAhUgkguQgfgpgzAAQhHABgeAnQgcAjAABTIAALOQAABSAcAkQAeAnBHAAQBAAAAcglQAagjAAhIIAAirIDzAAIAACjQAACfhZBjQhhBqivAAQi2AAhjhqg");
	this.shape_17.setTransform(76.2,477.8,0.855,0.855);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhjDfQgigogDg8IBVgNQACAnAPAUQAOATAUAAQAYAAAOgMQAOgMAAgXQAAghgcghQgMgOgxgqQhahLAAhPQAAg+AkgiQAkghBAAAQA1AAAhAjQAfAhAGA5IhUAJQgCgegPgPQgNgMgSAAQgTAAgMAOQgMANABAYQAAAdAcAeQAJALA0AuQBZBNABBMQAAA+goAkQglAig/AAQg6AAgmgqg");
	this.shape_18.setTransform(548.4,370.9,0.856,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhmDiQghgjAAg6IAAkJQAAg6AhgjQAlgnBBAAQBCAAAlAnQAhAjAAA6IAAEJQAAA6ghAjQglAnhCAAQhCAAgkgngAgkisQgKANAAAdIAAEFQAAAeAKANQALAOAZAAQAaAAALgOQAKgNAAgeIAAkFQAAgdgKgNQgLgPgaAAQgZAAgLAPg");
	this.shape_19.setTransform(520,370.9,0.856,0.856);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA1ECIg9jVQgQABgeAAIAADUIhZAAIAAoDIB9AAQBLAAAkAjQAmAlAABQQAABng+AbIBKDpgAg2gZIAfAAQAkAAAOgRQAPgRABguQgBgtgPgSQgOgQgkAAIgfAAg");
	this.shape_20.setTransform(491.2,370.9,0.856,0.856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrECIAAm1IhWAAIAAhOIEDAAIAABOIhVAAIAAG1g");
	this.shape_21.setTransform(463.1,370.9,0.856,0.856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhlDiQgigjAAg6IAAkJQAAg6AigjQAkgnBBAAQBCAAAlAnQAgAjAAA6IAAEJQAAA6ggAjQglAnhCAAQhCAAgjgngAglisQgKANAAAdIAAEFQAAAeAKANQALAOAaAAQAaAAALgOQAKgNAAgeIAAkFQAAgdgKgNQgMgPgZAAQgaAAgLAPg");
	this.shape_22.setTransform(435.8,370.9,0.856,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhiDfQgjgogCg8IBUgNQADAnAOAUQAOATAVAAQAXAAAOgMQAOgMABgXQgBghgbghQgMgOgygqQhahLAAhPQAAg+AlgiQAjghBAAAQA1AAAhAjQAgAhAGA5IhVAJQgCgegPgPQgMgMgSAAQgVAAgLAOQgMANAAAYQAAAdAcAeQAKALAzAuQBaBNAABMQAAA+gmAkQgmAig+AAQg8AAgkgqg");
	this.shape_23.setTransform(407.2,370.9,0.856,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhmDiQghgjAAg6IAAkJQAAg6AhgjQAlgnBBAAQBDAAAkAnQAhAjAAA6IAAEJQAAA6ghAjQgkAnhDAAQhBAAglgngAgkisQgKANAAAdIAAEFQAAAeAKANQALAOAZAAQAaAAALgOQAKgNAAgeIAAkFQAAgdgKgNQgLgPgaAAQgZAAgLAPg");
	this.shape_24.setTransform(378.8,370.9,0.856,0.856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA7ECIhwlBIgCAAIAAFBIhQAAIAAoDIBTAAIBqEmIACAAIAAkmIBQAAIAAIDg");
	this.shape_25.setTransform(349.3,370.9,0.856,0.856);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA7ECIhwlBIgCAAIAAFBIhQAAIAAoDIBTAAIBqEmIACAAIAAkmIBQAAIAAIDg");
	this.shape_26.setTransform(307.6,370.9,0.856,0.856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhmDiQghgjAAg6IAAkJQAAg6AhgjQAlgnBBAAQBDAAAkAnQAhAjAAA6IAAEJQAAA6ghAjQgkAnhDAAQhBAAglgngAgkisQgKANAAAdIAAEFQAAAeAKANQALAOAZAAQAaAAALgOQAKgNAAgeIAAkFQAAgdgKgNQgLgPgaAAQgZAAgLAPg");
	this.shape_27.setTransform(278.1,370.9,0.856,0.856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhjDiQgigjAAg6IAAkJQAAg6AigjQAkgnBBAAQA/AAAkAqQAgAnABA8IAAAmIhZAAIAAgoQAAgfgNgQQgMgPgSAAQgZAAgLAPQgKANAAAdIAAEFQAAAeAKANQALAOAZAAQAXAAALgOQAJgMAAgaIAAg/IBZAAIAAA8QgBA5ggAkQgkAng/AAQhBAAgkgng");
	this.shape_28.setTransform(248.8,370.9,0.856,0.856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABAECIgPhyIhhAAIgPByIhWAAIBfoDIBtAAIBfIDgAgiBCIBGAAIgjjcIgBAAg");
	this.shape_29.setTransform(208.9,370.9,0.856,0.856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiPECIAAoDICAAAQBSAAAlAjQAnAkAABRQAABSgnAjQglAihSAAIgnAAIAADUgAg2gZIAiAAQArAAAQgRQAQgRAAguQAAgugQgRQgQgQgrAAIgiAAg");
	this.shape_30.setTransform(182.4,370.9,0.856,0.856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABnECIAAmSIgCAAIhQGSIgpAAIhQmSIgBAAIAAGSIhOAAIAAoDIB1AAIA+EtIABAAIA+ktIB1AAIAAIDg");
	this.shape_31.setTransform(148.5,370.9,0.856,0.856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABBECIgQhyIhhAAIgPByIhWAAIBfoDIBtAAIBfIDgAgiBCIBGAAIgjjcIgBAAg");
	this.shape_32.setTransform(115.8,370.9,0.856,0.856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhjDiQgigjABg6IAAkJQgBg6AigjQAkgnBBAAQBAAAAjAqQAhAnAAA8IAAAmIhZAAIAAgoQAAgfgNgQQgLgPgTAAQgZAAgLAPQgKANAAAdIAAEFQAAAeAKANQALAOAZAAQAXAAALgOQAJgMAAgaIAAg/IBZAAIAAA8QAAA5ghAkQgjAnhAAAQhBAAgkgng");
	this.shape_33.setTransform(87.5,370.9,0.856,0.856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABAECIgPhyIhgAAIgRByIhVAAIBfoDIBtAAIBfIDgAgjBCIBGAAIgjjcIAAAAg");
	this.shape_34.setTransform(59.3,370.9,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline3, new cjs.Rectangle(44.8,348.3,515.3,296), null);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdA/IBFh9IB2AAIhyB9g");
	this.shape.setTransform(224.6,36.5,0.804,0.804);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiXE9IAAp5IEjAAIAABfIi2AAIAACjICMAAIAABeIiMAAIAAC6IDCAAIAABfg");
	this.shape_1.setTransform(222.3,72.7,0.804,0.804);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADMPVIjussQhAAHhuAAIAAMlIlRAAIAA+oIHZAAQEhgBCJCFQCPCLAAEzQAADXhLCDQg7BlhmAuIEdN5gAjQhjIB3AAQCKgBA3g+QA4hDAAisQAAisg4hCQg3g/iKAAIh3AAg");
	this.shape_2.setTransform(496.2,187.3,0.804,0.804);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmFNcQh+iGAAjdIAAvxQAAjcB+iHQCJiTD8AAQD9AACJCTQB+CHAADcIAAPxQAADdh+CGQiJCUj9AAQj8AAiJiUgAiLqUQgnAzAABxIAAPhQAAByAnAxQApA2BiAAQBjAAAqg2QAmgxAAhyIAAvhQAAhxgmgzQgqg2hjAAQhiAAgpA2g");
	this.shape_3.setTransform(388.6,187.3,0.804,0.804);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkjPiIAAklIBGAAQBgAAAqgpQAngmAAhUIAA37IFQAAIAAYhQAADMhgBiQhyB0kFAAg");
	this.shape_4.setTransform(301.8,188.4,0.804,0.804);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnVPVIAA+oIOFAAIAAElIo0AAIAAH5IGxAAIAAEkImxAAIAAJAIJaAAIAAEmg");
	this.shape_5.setTransform(227.3,187.3,0.804,0.804);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AGHPVIAA37IgFAAIkxX7IiiAAIkw37IgFAAIAAX7IkmAAIAA+oIG7AAIDwR4IADAAIDwx4IG6AAIAAeog");
	this.shape_6.setTransform(112.6,187.3,0.804,0.804);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiLE9IAAp5IBtAAIAAIaICqAAIAABfg");
	this.shape_7.setTransform(528.8,72.7,0.804,0.804);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiXE9IAAp5IEjAAIAABfIi2AAIAACjICMAAIAABeIiMAAIAAC6IDCAAIAABfg");
	this.shape_8.setTransform(499.2,72.7,0.804,0.804);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABJE9IiLmLIgCAAIAAGLIhiAAIAAp5IBlAAICEFqIACAAIAAlqIBiAAIAAJ5g");
	this.shape_9.setTransform(452.2,72.7,0.804,0.804);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiXE9IAAp5IEjAAIAABfIi2AAIAACjICLAAIAABeIiLAAIAAC6IDCAAIAABfg");
	this.shape_10.setTransform(420.2,72.7,0.804,0.804);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiXE9IAAp5IEiAAIAABfIi1AAIAACjICMAAIAABeIiMAAIAAC6IDCAAIAABfg");
	this.shape_11.setTransform(376,72.7,0.804,0.804);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2E9IAAoaIhpAAIAAhfIE/AAIAABfIhqAAIAAIag");
	this.shape_12.setTransform(345.4,72.7,0.804,0.804);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiXE9IAAp5IEjAAIAABfIi2AAIAACjICMAAIAABeIiMAAIAAC6IDCAAIAABfg");
	this.shape_13.setTransform(316.3,72.7,0.804,0.804);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2E9IAAoaIhpAAIAAhfIE/AAIAABfIhqAAIAAIag");
	this.shape_14.setTransform(285.8,72.7,0.804,0.804);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABCE9IhMkGQgYACghAAIAAEEIhtAAIAAp5ICZAAQBdAAAtArQAuAtAABjQAAB+hNAhIBdEfgAhDggIAnAAQAsAAASgUQASgVAAg4QAAg4gSgVQgSgVgsAAIgnAAg");
	this.shape_15.setTransform(255.1,72.7,0.804,0.804);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1E9IAAp5IBrAAIAAJ5g");
	this.shape_16.setTransform(197.9,72.7,0.804,0.804);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2E9IiEp5IBrAAIBPG3IABAAIBPm3IBrAAIiFJ5g");
	this.shape_17.setTransform(172.6,72.7,0.804,0.804);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABIE9IiJmLIgCAAIAAGLIhjAAIAAp5IBlAAICEFqIACAAIAAlqIBiAAIAAJ5g");
	this.shape_18.setTransform(138.8,72.7,0.804,0.804);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah9EXQgpgsAAhHIAAlHQAAhHApgsQAsgvBRAAQBSAAAsAvQApAsAABHIAAFHQAABHgpAsQgsAvhSAAQhRAAgsgvgAgtjVQgMARAAAkIAAFBQAAAkAMARQAOARAfAAQAgAAAOgRQAMgRAAgkIAAlBQAAgkgMgRQgOgRggAAQgfAAgOARg");
	this.shape_19.setTransform(104.7,72.7,0.804,0.804);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah7EXQgogsAAhHIAAlHQAAhHAogsQAtgvBQAAQBOAAAtAzQAoAvgBBMIAAAvIhtAAIAAgyQAAgmgQgUQgNgSgYAAQgeAAgOARQgMARAAAkIAAFBQAAAkAMARQAOARAeAAQAdAAANgQQALgQAAggIAAhMIBtAAIAABJQABBHgoAsQgsAvhPAAQhQAAgtgvg");
	this.shape_20.setTransform(70.8,72.7,0.804,0.804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline2, new cjs.Rectangle(57.5,31.4,482.6,236.9), null);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkOJdQhchsgIilIDmghQAGBoAoA4QAlA0A7AAQBAAAAmghQAmgiAAg+QAAhbhMhXQghgliGhzQh1hhg0hNQhMhwAAiIQAAioBhhaQBhhbCxAAQCQAABZBfQBVBbAQCZIjkAZQgIhSgogpQghgggwAAQg5AAgfAkQggAkAABCQAABOBNBUQAbAdCMB7QB0BjA0BPQBNBxAACBQAACphpBgQhnBeisAAQigAAhlh0g");
	this.shape.setTransform(511.8,188.2,0.806,0.806);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlPK9IAA15IKDAAIAADRImSAAIAAFqIE2AAIAADQIk2AAIAAGcIGuAAIAADSg");
	this.shape_1.setTransform(444.5,188.2,0.806,0.806);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACSK9IiqpFQgrAGhSAAIAAI/IjwAAIAA15IFSAAQDOAABiBeQBmBkAADcQAACZg1BeQgqBIhJAhIDLJ7gAiVhHIBWAAQBiAAAngtQApgvAAh7QAAh8gpgvQgngthiAAIhWAAg");
	this.shape_2.setTransform(372,188.2,0.806,0.806);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkWJnQhahgAAidIAArTQAAidBahgQBihpC0AAQC1AABiBpQBaBgAACdIAALTQAACdhaBgQhiBqi1AAQi0AAhihqgAhknYQgbAkAABRIAALGQAABSAbAjQAeAnBGAAQBHAAAdgnQAcgkAAhRIAArGQAAhQgcglQgdgmhHAAQhGAAgeAmg");
	this.shape_3.setTransform(295,188.2,0.806,0.806);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjQLHIAAjSIAzAAQBEAAAegdQAcgbAAg8IAAxHIDwAAIAARiQAACRhFBHQhRBTi7AAg");
	this.shape_4.setTransform(232.8,189,0.806,0.806);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlPK9IAA15IKDAAIAADRImTAAIAAFqIE3AAIAADQIk3AAIAAGcIGvAAIAADSg");
	this.shape_5.setTransform(179.4,188.2,0.806,0.806);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AEXK9IAAxGIgDAAIjaRGIhzAAIjaxGIgEAAIAARGIjSAAIAA15IE9AAICrMzIADAAICrszIE9AAIAAV5g");
	this.shape_6.setTransform(97.2,188.2,0.806,0.806);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AieFlQg3hAgFhhICHgUQAFA+AXAgQAWAfAiAAQAmAAAWgTQAXgUAAgkQAAg2gtg0QgUgWhPhDQhEg5gfgtQgthDAAhQQAAhjA5g1QA6g2BoAAQBUAAA1A4QAyA2AKBaIiHAPQgEgwgYgYQgTgTgdAAQghAAgSAVQgTAVAAAnQAAAuAtAyQAQARBTBIQBDA6AgAvQAtBDAABLQAABkg/A5Qg8A3hlAAQhfAAg6hEg");
	this.shape_7.setTransform(524.1,85,0.806,0.806);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AikFrQg1g5AAhdIAAmpQAAhdA1g5QA7g+BpAAQBrAAA6A+QA1A5AABdIAAGpQAABdg1A5Qg6A+hrAAQhpAAg7g+gAg6kWQgQAVAAAwIAAGjQAAAwAQAVQARAWApAAQAqAAARgWQARgVAAgwIAAmjQAAgvgRgWQgRgWgqAAQgpAAgRAWg");
	this.shape_8.setTransform(481.2,85,0.806,0.806);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai2GeIAAs7ICPAAIAAK/IDeAAIAAB8g");
	this.shape_9.setTransform(442.1,85,0.806,0.806);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABoGeIgai4IiaAAIgaC4IiJAAICYs7ICvAAICYM7gAg4BrIByAAIg4ljIgCAAg");
	this.shape_10.setTransform(385,85,0.806,0.806);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABnGeIgZi4IibAAIgZC4IiKAAICZs7ICwAAICYM7gAg4BrIByAAIg5ljIgBAAg");
	this.shape_11.setTransform(327.2,85,0.806,0.806);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhGGeIAAq/IiKAAIAAh8IGhAAIAAB8IiKAAIAAK/g");
	this.shape_12.setTransform(291.3,85,0.806,0.806);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AikFrQg1g5AAhdIAAmpQAAhdA1g5QA6g+BqAAQBqAAA7A+QA1A5AABdIAAGpQAABdg1A5Qg7A+hqAAQhqAAg6g+gAg6kWQgRAWAAAvIAAGjQAAAwARAVQARAWApAAQAqAAARgWQARgVAAgwIAAmjQAAgvgRgWQgRgWgqAAQgpAAgRAWg");
	this.shape_13.setTransform(250.2,85,0.806,0.806);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABWGeIhklXQggAEgpAAIAAFTIiOAAIAAs7IDHAAQB5AAA6A4QA9A7AACBQAACkhkAsIB4F3gAhXgpIAyAAQA6AAAXgbQAYgcAAhJQAAhIgYgcQgXgbg6AAIgyAAg");
	this.shape_14.setTransform(206.7,85,0.806,0.806);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABWGeIhklXQggAEgpAAIAAFTIiOAAIAAs7IDHAAQB5AAA6A4QA8A7AACBQAACkhjAsIB4F3gAhXgpIAyAAQA5AAAXgbQAYgcAAhJQAAhIgYgcQgWgbg6AAIgyAAg");
	this.shape_15.setTransform(161.4,85,0.806,0.806);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjFGeIAAs7IF7AAIAAB8IjtAAIAADVIC2AAIAAB7Ii2AAIAADzID9AAIAAB8g");
	this.shape_16.setTransform(118.7,85,0.806,0.806);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjZGeIAAs7IDTAAQDgAAAAD6IAAFHQAAD6jgAAgAhLEpIAyAAQA4AAAWgZQAXgaAAhBIAAlpQAAhBgXgaQgWgZg4AAIgyAAg");
	this.shape_17.setTransform(75.9,85,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline1, new cjs.Rectangle(57.8,50.7,484,195.5), null);


(lib.img_facilities_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_facilities();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_facilities_1, new cjs.Rectangle(0,0,600,1200), null);


(lib.logoartwork = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AAQAAhrA6AAQA7AAAABrQAABsg7AAQg6AAAAhsgAgZhGQgKAVAAAxQAAAyAKAVQAJASAQAAQAlAAAAhZQAAhYglAAQgQAAgJASg");
	this.shape.setTransform(477.9,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBpIgxjRIAXAAIAkClIAAAAIAlilIAXAAIgyDRg");
	this.shape_1.setTransform(464.2,81.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBpIAAjRIAVAAIAADRg");
	this.shape_2.setTransform(454.6,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBpIAAi+IgsAAIAAgTIBsAAIAAATIgrAAIAAC+g");
	this.shape_3.setTransform(445.7,81.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBpIghhkIgdACIAABiIgXAAIAAjRIAzAAQAYAAAQAOQAQAPAAAZQAAAogiALIAkBogAgfgMIATAAQAXAAAKgJQAJgJAAgSQAAgTgJgIQgKgKgXAAIgTAAg");
	this.shape_4.setTransform(433.4,81.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6AAQAAhrA6AAQA7AAAABrQAABsg7AAQg6AAAAhsgAgZhGQgKAVAAAxQAAAyAKAVQAJASAQAAQARAAAJgSQALgVAAgyQAAgxgLgVQgJgSgRAAQgQAAgJASg");
	this.shape_5.setTransform(418.7,81.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBpIAAjRIAxAAQAYAAAQAQQAOAQAAAaQAAAagOAPQgQAPgYAAIgbAAIAABfgAgdgIIAYAAQAjAAAAgmQAAgngjAAIgYAAg");
	this.shape_6.setTransform(405.5,81.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBpIAAjRIBfAAIAAATIhIAAIAABIIA1AAIAAASIg1AAIAABRIBMAAIAAATg");
	this.shape_7.setTransform(392.6,81.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BpIAAjRIAnAAQAjAAAQAXQATAYAAA5QAAA5gTAZQgQAXgjAAgAgfBWIAMAAQAaAAAMgQQAOgUgBgyQABgygOgTQgMgQgaAAIgMAAg");
	this.shape_8.setTransform(378.6,81.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6AAQAAhrA6AAQA7AAAABrQAABsg7AAQg6AAAAhsgAgZhGQgKAVAAAxQAAAyAKAVQAJASAQAAQAlAAAAhZQAAhYglAAQgQAAgJASg");
	this.shape_9.setTransform(357.4,81.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBpIAAi+IgqAAIAAgTIBrAAIAAATIgrAAIAAC+g");
	this.shape_10.setTransform(344.5,81.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBpIhAi2IgBAAIAAC2IgWAAIAAjRIAjAAIA1CaIABAAIAAiaIAWAAIAADRg");
	this.shape_11.setTransform(331.6,81.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBpIAAjRIBfAAIAAATIhIAAIAABIIA1AAIAAASIg1AAIAABRIBMAAIAAATg");
	this.shape_12.setTransform(318.3,81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA0BpIAAi/IgBAAIgsC/IgOAAIgri/IgBAAIAAC/IgVAAIAAjRIAkAAIAkCeIABAAIAjieIAkAAIAADRg");
	this.shape_13.setTransform(302.6,81.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnBpIgMg+Ig1AAIgMA+IgXAAIAujRIAfAAIAuDRgAgWAXIAuAAIgYhvIAAAAg");
	this.shape_14.setTransform(287.2,81.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzBpIAAjRIAwAAQAZAAAQAQQAPAQgBAaQABAagPAPQgQAPgZAAIgaAAIAABfgAgdgIIAYAAQAjAAAAgmQAAgngjAAIgYAAg");
	this.shape_15.setTransform(275.3,81.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA0BpIAAi/IgBAAIgsC/IgNAAIgsi/IgBAAIAAC/IgUAAIAAjRIAkAAIAjCeIABAAIAjieIAkAAIAADRg");
	this.shape_16.setTransform(259.5,81.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnBpIgMg+Ig0AAIgNA+IgXAAIAujRIAfAAIAuDRgAgXAXIAuAAIgWhvIgBAAg");
	this.shape_17.setTransform(244.2,81.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag6AAQAAhrA8AAQAxAAAFBCIgXAAQgEgvgbAAQgTAAgJAUQgJAVAAAvQAAAwAJAVQAJAUATAAQAhAAABg2IAXAAQgBAjgOATQgPATgbAAQg8AAAAhsg");
	this.shape_18.setTransform(230.4,81.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBpIAAjRIBeAAIAAATIhIAAIAABIIA1AAIAAASIg1AAIAABRIBMAAIAAATg");
	this.shape_19.setTransform(210.8,81.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BpIAAjRIAnAAQAiAAARAXQATAZAAA4QAAA5gTAZQgRAXgiAAgAgfBWIAMAAQAaAAAMgQQAOgUgBgyQABgygOgTQgMgQgaAAIgMAAg");
	this.shape_20.setTransform(196.8,81.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmBbQgOgQAAgbIAVAAQABApAgAAQAOAAAIgJQAJgKAAgQQAAgWgpgeQgqgdAAgfQgBgWAOgOQAPgNAWAAQAWAAAOAPQAOAPABAbIgVAAQgDgmgcAAQgNAAgIAIQgIAIAAAMQAAAVAqAdQApAcAAAkQAAAagNAOQgPAOgZAAQgYAAgOgRg");
	this.shape_21.setTransform(176.4,81.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAnBpIgMg+Ig1AAIgNA+IgWAAIAujRIAeAAIAvDRgAgXAXIAuAAIgXhvIAAAAg");
	this.shape_22.setTransform(163.6,81.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAgBpIhAi2IgBAAIAAC2IgWAAIAAjRIAjAAIA1CaIABAAIAAiaIAWAAIAADRg");
	this.shape_23.setTransform(149.8,81.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBpIgMg+Ig1AAIgMA+IgXAAIAujRIAfAAIAuDRgAgXAXIAuAAIgXhvIAAAAg");
	this.shape_24.setTransform(136.1,81.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzBpIAAi/IAAAAIgsC/IgNAAIgsi/IAAAAIAAC/IgVAAIAAjRIAkAAIAjCeIABAAIAkieIAkAAIAADRg");
	this.shape_25.setTransform(120.8,81.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgxBpIAAjRIBfAAIAAATIhIAAIAABIIA1AAIAAASIg1AAIAABRIBMAAIAAATg");
	this.shape_26.setTransform(105.9,81.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmBbQgOgQgBgbIAWAAQABApAgAAQAOAAAIgJQAJgKAAgQQAAgWgpgeQgqgdAAgfQAAgWAOgOQAOgNAWAAQAXAAANAPQAOAPABAbIgVAAQgCgmgdAAQgNAAgIAIQgIAIAAAMQAAAVAqAdQAqAcgBAkQABAagOAOQgOAOgaAAQgXAAgPgRg");
	this.shape_27.setTransform(92.5,81.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgxA7IAAgQIAgAAIAAAQQAAAJAFAFQAEAFAHAAQARAAAAgaIAAgvQAAgTgPAAQgMAAgHAPIgbAAIAChqIBXAAIgCAdIg3AAIgCAuIAAAAQAHgHAGgDQAFgCAJAAQAmAAAAA2IAAAdQAAAigLAPQgMAQgZAAQgzAAAAgvg");
	this.shape_28.setTransform(73.2,81.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKBpIAAhZIgxh4IAZAAIAjBcIAjhcIAYAAIgxB4IAABZg");
	this.shape_29.setTransform(53.9,81.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgxA5IAAgNIAhAAIAAAOQgBAVARAAQAQAAAAgYIAAgQQAAgRgHgHQgHgGgQAAIAAgcQAPAAAHgGQAGgHAAgSQABgPgEgHQgDgGgIAAQgPAAAAAVIAAAJIghAAIAAgKQAAgWANgNQANgOAWAAQAWAAANARQAMAPAAAWQAAATgFAKQgEAMgOAHQAQAHAFAMQAFAKAAAWQAAA+gzAAQgwAAAAgzg");
	this.shape_30.setTransform(34.4,81.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAjIAOgjIgNAAIAAgiIAiAAIAAAiIgTAjg");
	this.shape_31.setTransform(18.3,92.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBBqIAAilIgcAAIAAgTQAZgNAQgOIASAAIAADTg");
	this.shape_32.setTransform(7.6,81.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AvNCRQgyg1AAhcQAAhaAyg2QAxg1BUAAQBKAAAuA0IAAgsIAqAAIAACGIgsAAQgEgwgegbQgegcgwAAQg/AAgkAqQgkApAABIQAABLAkArQAkAqBAAAQBXAAAShgIA2AAQgHBDgpAjQgqAjhIAAQhXAAgyg1gASSC9IAAgnIA/AAIAAh4Ih8i0IgfAAIAAgnICQAAIAAAnIg2AAIBgCJIBdiJIg2AAIAAgnICNAAIAAAnIgfAAIiBC1IAAB3IA/AAIAAAngAN8C9IAAgnIA0AAIAAksIgEAAIh7FTIgsAAIh5lTIgCAAIAAEsIAxAAIAAAnIiVAAIAAgnIAxAAIAAksIgxAAIAAgnICKAAIBtE3IBuk3ICLAAIAAAnIgzAAIAAEsIAzAAIAAAngAC5C9IAAgnIA0AAIAAksIg0AAIAAgnIFAAAIAABzIgnAAIAAhMIiyAAIAACAIBXAAIAAg4IAnAAIAACVIgnAAIAAg3IhXAAIAACGICyAAIAAhQIAnAAIAAB3gAjKC9IAAgnIA0AAIAAksIg0AAIAAgnICoAAQBfAAA0AxQAzAxAABbQAABbgzAxQg0AxhfAAgAhjCWIBBAAQBEAAAmgoQAngnAAhHQAAhHgngnQgmgohEAAIhBAAgAmEC9IAAgnIA3AAIghhUIiqAAIgkBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlTIA6AAICPFTIAqAAIAAAngAl+AbIhFijIhFCjICKAAgAyOC9IAAgnIA2AAIgghUIirAAIgkBUIA4AAIAAAnIiUAAIAAgnIAqAAICSlTIA5AAICPFTIAqAAIAAAngAyIAbIhFijIhGCjICLAAg");
	this.shape_33.setTransform(339.6,33.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AGaDEQhaAAgngiQgzgrAAhxQgBh0A1guQAsgnBkAAQBLABArAEQAWADAGACIgIB4Ig0AAIgHg7QgdgDgdAAQgnAAgSANQgkAaAABRQAAB+A1AGQANACA2gBIAAhNIgwgOIAAgxICQAAIAIDSgAAlC8IAHg5IAegGIgRi9IhRD8Ih3AAIhXj8IgSC9IAdAGIAIA5IiXAAIAIg5IAdgGIAbj8IgdgFIgIg6IC3AAIBTDtIBMjtIDEAAIgIA6IgdAGIAXD7IAeAGIAHA5gApBC8IAIg5IAdgGIAAj7IgdgGIgIg6IC9AAIgHA6IgdAGIAAD7IAdAGIAHA5g");
	this.shape_34.setTransform(120.5,33.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjHDFIBElZIgGFUIBBmXIATG1IA1oKIA2IKIARm3IBCGaIgFlVIBEFZIjIBog");
	this.shape_35.setTransform(20,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoartwork, new cjs.Rectangle(0,0,484,95.6), null);


(lib.ctabgtint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FA124").s().p("Egu3AFeIAAq7MBdvAAAIAAK7g");
	this.shape.setTransform(300,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctabgtint, new cjs.Rectangle(0,0,600,70), null);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD730").s().p("A3bCvIAAldMAu3AAAIAAFdg");
	this.shape.setTransform(300,35,2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctabg, new cjs.Rectangle(0,0,600,70), null);


(lib.ctaarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F53").s().p("AhIC0ICQiQIkZAAIAAhHIEZAAIiQiQIBmAAIC0CzIi0C0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaarrow, new cjs.Rectangle(-21,-17.9,42.1,36), null);


(lib.clickthrough = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.imgathlete2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete2();
	this.instance.parent = this;
	this.instance.setTransform(-119,419,1.33,1.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imgathlete2, new cjs.Rectangle(-119,419,782,808.6), null);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.parent = this;
	this.instance.setTransform(22,406,1.33,1.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imgathlete1, new cjs.Rectangle(22,406,722.2,706.2), null);


(lib.shapeclipped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	mask.setTransform(254.9,300);

	// Layer 3
	this.instance = new lib.shape();
	this.instance.parent = this;
	this.instance.setTransform(256.4,363.9,1,1,0,0,0,256.4,302.9);
	this.instance.alpha = 0.398;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shapeclipped, new cjs.Rectangle(105,61,300,539), null);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork
	this.instance = new lib.logoartwork();
	this.instance.parent = this;
	this.instance.setTransform(303,67.6,1.004,1.004,0,0,0,242,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3AK8IAA13MBdvAAAIAAV3g");
	this.shape.setTransform(300,70);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(0,0,600,140), null);


(lib.ctalabelfindoutmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIND OUT MORE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#112B53").s().p("AgyAjIAmhFIA/AAIg9BFg");
	this.shape.setTransform(65.6,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#112B53").s().p("AhSCtIAAlZICeAAIAAA0IhiAAIAABZIBLAAIAAAzIhLAAIAABmIBpAAIAAAzg");
	this.shape_1.setTransform(250.6,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#112B53").s().p("AgdCtIAAklIg5AAIAAg0ICtAAIAAA0Ig5AAIAAElg");
	this.shape_2.setTransform(230,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#112B53").s().p("AhSCtIAAlZICeAAIAAA0IhjAAIAABZIBMAAIAAAzIhMAAIAABmIBqAAIAAAzg");
	this.shape_3.setTransform(210.6,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#112B53").s().p("AhdCtIAAlZIBYAAQBcAAAABcQAAAYgKATQgLAVgUAIQAvAUAAA9QAAAugUAaQgZAcgvAAgAghB8IAZAAQAWAAALgNQAJgNAAgbQAAgbgLgNQgMgNgZAAIgTAAgAghgeIAVAAQARAAALgLQAMgMAAgVQgBgxglAAIgXAAg");
	this.shape_4.setTransform(187.7,21.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#112B53").s().p("AgdCtIAAlZIA7AAIAAFZg");
	this.shape_5.setTransform(168.7,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#112B53").s().p("AAkCtIgqiPQgKABgUAAIAACOIg8AAIAAlZIBUAAQAyAAAYAXQAaAZAAA2QAABEgqASIAzCdgAgkgRIAVAAQAYAAAJgLQAKgLAAgfQAAgegKgMQgJgLgYAAIgVAAg");
	this.shape_6.setTransform(150.6,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#112B53").s().p("AhCCYQgXgYAAgnIAAiyQAAgmAXgYQAYgaArAAQArAAAYAcQAWAaAAApIAAAZIg8AAIAAgaQAAgWgIgLQgIgJgNgBQgQAAgHAKQgHAJAAAUIAACuQAAAVAHAIQAHAKAQAAQAQAAAHgJQAGgJAAgRIAAgpIA8AAIAAAnQAAAngWAYQgYAagrAAQgrAAgYgag");
	this.shape_7.setTransform(125.9,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#112B53").s().p("AhCCWQgXgbgCgpIA5gIQACAZAJAOQAKANANAAQAQAAAJgIQAKgJAAgOQAAgXgTgWQgIgJghgcQg8gyAAg2QAAgpAYgXQAYgWArAAQAkAAAWAXQAUAXAFAmIg5AGQgBgUgLgLQgIgHgMgBQgcABAAAhQAAAUATAVQAGAHAiAfQA9AzAAAzQAAAqgaAYQgaAXgpAAQgoAAgZgcg");
	this.shape_8.setTransform(103.3,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#112B53").s().p("AAnCtIhKjXIgBAAIAADXIg2AAIAAlZIA3AAIBHDFIABAAIAAjFIA2AAIAAFZg");
	this.shape_9.setTransform(80.8,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#112B53").s().p("AgdCtIAAlZIA7AAIAAFZg");
	this.shape_10.setTransform(62.1,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.arrow = new lib.ctaarrow();
	this.arrow.parent = this;
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctalabelfindoutmore, new cjs.Rectangle(0,-6.6,258.9,45.6), null);


(lib.ctafindoutmoreon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelfindoutmore();
	this.cta_label.parent = this;
	this.cta_label.setTransform(308.4,42,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,-9,263,50);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.parent = this;
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctafindoutmoreon, new cjs.Rectangle(0,0,600,70), null);


(lib.ctafindoutmoreoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelfindoutmore();
	this.cta_label.parent = this;
	this.cta_label.setTransform(308.4,42,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();
	this.cta_bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctafindoutmoreoff, new cjs.Rectangle(0,0,600,70), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient over
	this.instance = new lib.gradientover();
	this.instance.parent = this;
	this.instance.setTransform(300,300,2,2,0,0,0,150,150);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shape
	this.instance_1 = new lib.shapeclipped();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.9,666.9,2,2,0,0,0,256.4,333.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Color Fill 1 Image
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002D54").s().p("Egu3BdwMAAAi7fMBdvAAAMAAAC7fg");
	this.shape.setTransform(300,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-209.9,0,1025.8,1333.9), null);


(lib.ctafindoutmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta_on.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta-on
	this.cta_on = new lib.ctafindoutmoreon();
	this.cta_on.parent = this;
	this.cta_on.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(1));

	// cta-off
	this.cta_off = new lib.ctafindoutmoreoff();
	this.cta_off.parent = this;
	this.cta_off.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_off).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctafindoutmore, new cjs.Rectangle(0,0,600,70), null);


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
				.to(root.athlete_1, 1.8, {
				x: '-=' + (stageWidth + 300),
				ease: Strong.easeOut
				}, 'frame2')
				.from(root.athlete_2, 1.8, {
				x: '+=' + (stageWidth + 300),
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
	this.clickthrough.parent = this;
	this.clickthrough.setTransform(300,599.9,2,4.8,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// footer
	this.footer = new lib.footer();
	this.footer.parent = this;
	this.footer.setTransform(150,1095,1,1,0,0,0,150,35);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(1));

	// cta
	this.cta = new lib.ctafindoutmore();
	this.cta.parent = this;
	this.cta.setTransform(0,990);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.parent = this;
	this.text_3.setTransform(299.5,599.5,1,1,0,0,0,299.5,599.5);
	this.text_3.cache(43,346,519,300);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_2
	this.athlete_2 = new lib.imgathlete2();
	this.athlete_2.parent = this;
	this.athlete_2.setTransform(300,600,1,1,0,0,0,300,600);

	this.timeline.addTween(cjs.Tween.get(this.athlete_2).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.parent = this;
	this.athlete_1.setTransform(202,379.9,1,1,0,0,0,202,379.9);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.parent = this;
	this.text_2.cache(56,29,487,241);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.parent = this;
	this.text_1.cache(56,49,488,200);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// image: facilities
	this.facilities = new lib.img_facilities_1();
	this.facilities.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.facilities).wait(1));

	// background
	this.bg = new lib.background();
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.1,599.9,1025.8,1334);
// library properties:
lib.properties = {
	width: 600,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img_athlete1.png?1481840172264", id:"img_athlete1"},
		{src:"images/img_athlete2.png?1481840172264", id:"img_athlete2"},
		{src:"images/img_facilities.png?1481840172264", id:"img_facilities"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;