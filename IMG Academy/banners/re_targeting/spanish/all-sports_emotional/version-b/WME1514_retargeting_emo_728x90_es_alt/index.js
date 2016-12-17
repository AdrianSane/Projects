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
	this.shape.graphics.f("#FFFFFF").s().p("AA8ELIhzlMIgBAAIAAFMIhTAAIAAoVIBVAAIBuEwIABAAIAAkwIBTAAIAAIVg");
	this.shape.setTransform(243.1,118,0.733,0.734);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/ELIAAoVID0AAIAABQIiYAAIAACKIB1AAIAABOIh1AAIAACdICjAAIAABQg");
	this.shape_1.setTransform(218.1,118,0.733,0.734);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOA1IA7hpIBiAAIhfBpg");
	this.shape_2.setTransform(309.3,91.1,0.733,0.734);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpDqQgiglAAg8IAAkRQAAg8AigkQAmgoBDgBQBFABAlAoQAiAkAAA8IAAERQAAA8giAlQglAohFAAQhDAAgmgogAgliyQgKAOAAAeIAAENQAAAfAKAOQALAOAaAAQAaAAALgOQALgOAAgfIAAkNQAAgegLgOQgLgPgaAAQgaAAgLAPg");
	this.shape_3.setTransform(303.4,118,0.733,0.734);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCELIgQh3IhjAAIgQB3IhZAAIBjoVIBwAAIBiIVgAgkBEIBIAAIgkjjIAAAAg");
	this.shape_4.setTransform(463,118,0.733,0.734);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+ELIAAoVIDzAAIAABQIiYAAIAACKIB0AAIAABOIh0AAIAACdICiAAIAABQg");
	this.shape_5.setTransform(438.7,118,0.733,0.734);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhmDmQgjgpgDg/IBXgNQADAoAPAVQAPAUAUAAQAZAAAOgMQAOgNAAgYQAAgjgdghQgMgOgygsQhdhNAAhSQAAhAAlgjQAlgiBCAAQA3AAAiAkQAgAjAGA6IhXAKQgCgggQgPQgNgMgSAAQgUAAgMANQgMAOAAAZQAAAeAdAgQAKALA1AvQBdBPAABPQAABBgoAlQgnAjhAAAQg+AAgmgsg");
	this.shape_6.setTransform(414.2,118,0.733,0.734);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah/ELIAAoVID0AAIAABQIiYAAIAACKIB1AAIAABOIh1AAIAACdICjAAIAABQg");
	this.shape_7.setTransform(380.9,118,0.733,0.734);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiLELIAAoVICJAAQCOAAAAChIAADSQAACiiOAAgAgvC/IAgAAQAjAAAOgQQAPgRAAgqIAAjoQAAgqgPgQQgOgQgjAAIggAAg");
	this.shape_8.setTransform(355.8,118,0.733,0.734);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA8ELIhzlMIgBAAIAAFMIhTAAIAAoVIBVAAIBuEwIABAAIAAkwIBTAAIAAIVg");
	this.shape_9.setTransform(329.6,118,0.733,0.734);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiLELIAAoVICIAAQCPAAAAChIAADSQAACiiPAAgAgvC/IAfAAQAjAAAPgQQAOgRAAgqIAAjoQAAgqgOgQQgPgQgjAAIgfAAg");
	this.shape_10.setTransform(277.4,118,0.733,0.734);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah/ELIAAoVID0AAIAABQIiYAAIAACKIB1AAIAABOIh1AAIAACdICjAAIAABQg");
	this.shape_11.setTransform(184.1,118,0.733,0.734);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsELIAAnFIhZAAIAAhQIELAAIAABQIhYAAIAAHFg");
	this.shape_12.setTransform(161.7,118,0.733,0.734);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsELIAAoVIBZAAIAAIVg");
	this.shape_13.setTransform(145,118,0.733,0.734);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiTELIAAoVICDAAQBVAAAnAlQApAlAABUQAABUgpAkQgnAkhVAAIgnAAIAADbgAg3gaIAjAAQArAAARgRQAQgSABgvQgBgwgQgRQgRgRgrAAIgjAAg");
	this.shape_14.setTransform(126.6,118,0.733,0.734);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABqELIAAmgIgCAAIhSGgIgqAAIhTmgIgCAAIAAGgIhQAAIAAoVIB4AAIBBE3IABAAIBBk3IB4AAIAAIVg");
	this.shape_15.setTransform(97.7,118,0.733,0.734);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhpDqQgiglAAg8IAAkRQAAg8AiglQAlgoBEAAQBEAAAmAoQAiAlAAA8IAAERQAAA8giAlQgmAohEAAQhEAAglgogAglizQgLAOAAAfIAAENQAAAfALAOQALAOAaAAQAaAAAMgOQAKgOAAgfIAAkNQAAgfgKgOQgMgOgaAAQgaAAgLAOg");
	this.shape_16.setTransform(69.6,118,0.733,0.734);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhmDqQgjglAAg8IAAkRQAAg8AjglQAkgoBDAAQBCAAAmArQAhAoAAA/IAAAnIhcAAIAAgpQAAgggNgRQgMgPgUAAQgZAAgLAOQgKAOAAAfIAAENQAAAfAKAOQALAOAZAAQAYAAALgOQAKgNAAgbIAAhAIBcAAIAAA9QAAA8ghAlQgmAohCAAQhDAAgkgog");
	this.shape_17.setTransform(44.7,118,0.733,0.734);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhlDlQgkgogDg/IBYgNQACAoAPAVQAPAUAUAAQAZAAAOgMQAPgNAAgYQAAgigdgiQgNgOgxgrQhehNAAhSQAAhAAmgjQAlgiBBgBQA3AAAiAlQAgAiAGA6IhXAKQgCgfgQgQQgMgMgTAAQgUAAgMAOQgLAOAAAZQAAAeAdAfQAKAMA0AuQBdBPAABPQAABBgoAkQgnAkhAAAQg9gBgmgsg");
	this.shape_18.setTransform(464,64.1,0.733,0.734);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhoDpQgjgkAAg8IAAkRQAAg8AjglQAlgoBDAAQBFAAAlAoQAiAlAAA8IAAERQAAA8giAkQglAohFABQhDgBglgogAgliyQgKANAAAfIAAEMQAAAgAKANQAMAPAZAAQAbAAALgPQAKgNAAggIAAkMQAAgfgKgNQgLgPgbAAQgZAAgMAPg");
	this.shape_19.setTransform(439.9,64.1,0.733,0.734);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA3EKIg/jcQgQACggAAIAADaIhbAAIAAoTICAAAQBNAAAmAkQAmAmAABTQAABqhAAaIBODygAg4gaIAhAAQAkAAAOgRQAQgSAAgvQAAgvgQgSQgOgRgkAAIghAAg");
	this.shape_20.setTransform(415.5,64.1,0.733,0.734);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsEKIAAnDIhZAAIAAhQIELAAIAABQIhZAAIAAHDg");
	this.shape_21.setTransform(391.6,64.1,0.733,0.734);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhpDpQghgkAAg8IAAkRQAAg8AhglQAmgoBDAAQBEAAAmAoQAhAlABA8IAAERQgBA8ghAkQgmAohEABQhDgBgmgogAgliyQgKANAAAfIAAEMQAAAgAKANQALAPAaAAQAaAAALgPQALgNAAggIAAkMQAAgfgLgNQgLgPgaAAQgaAAgLAPg");
	this.shape_22.setTransform(368.5,64.1,0.733,0.734);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhlDlQgkgogDg/IBYgNQACAoAPAVQAPAUAUAAQAYAAAPgMQAOgNAAgYQAAgigdgiQgMgOgygrQhdhNAAhSQAAhAAlgjQAlgiBCgBQA3AAAiAlQAgAiAGA6IhXAKQgDgfgPgQQgNgMgSAAQgUAAgMAOQgMAOAAAZQAAAeAdAfQALAMA0AuQBdBPAABPQAABAgpAlQgnAkg/AAQg9gBgmgsg");
	this.shape_23.setTransform(344.2,64.1,0.733,0.734);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhpDpQgigkAAg8IAAkRQAAg8AiglQAlgoBEAAQBEAAAmAoQAiAlAAA8IAAERQAAA8giAkQgmAohEABQhEgBglgogAgliyQgKANAAAfIAAEMQAAAgAKANQALAPAaAAQAaAAAMgPQAKgNAAggIAAkMQAAgfgKgNQgMgPgaAAQgaAAgLAPg");
	this.shape_24.setTransform(320,64.1,0.733,0.734);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA8EKIhylLIgCAAIAAFLIhTAAIAAoTIBVAAIBtEvIACAAIAAkvIBTAAIAAITg");
	this.shape_25.setTransform(295,64.1,0.733,0.734);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA8EKIhzlLIgBAAIAAFLIhTAAIAAoTIBVAAIBuEvIABAAIAAkvIBTAAIAAITg");
	this.shape_26.setTransform(258.1,64.1,0.733,0.734);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhpDpQgigkAAg8IAAkRQAAg8AiglQAlgoBEAAQBEAAAmAoQAiAlAAA8IAAERQAAA8giAkQgmAohEABQhEgBglgogAgliyQgKANAAAfIAAEMQAAAgAKANQALAPAaAAQAaAAAMgPQAKgNAAggIAAkMQAAgfgKgNQgMgPgaAAQgaAAgLAPg");
	this.shape_27.setTransform(233.1,64.1,0.733,0.734);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhnDpQghgkAAg8IAAkRQAAg8AhglQAmgoBCAAQBCABAlArQAhAoAAA+IAAAoIhbAAIAAgqQAAgfgNgRQgMgQgUAAQgYAAgLAPQgLANAAAfIAAEMQAAAgALANQALAPAYAAQAYAAALgOQAKgNAAgbIAAhAIBbAAIAAA9QAAA8ghAkQglAohCABQhCgBgmgog");
	this.shape_28.setTransform(208.2,64.1,0.733,0.734);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABCEKIgRh2IhiAAIgQB2IhZAAIBioTIBxAAIBiITgAgkBEIBJAAIgljjIAAAAg");
	this.shape_29.setTransform(173,64.1,0.733,0.734);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiTEKIAAoTICEAAQBUAAAnAkQAoAlAABUQAABUgoAkQgnAjhUABIgpAAIAADagAg4gaIAkAAQArAAARgRQARgSAAgvQAAgwgRgRQgRgRgrAAIgkAAg");
	this.shape_30.setTransform(150.6,64.1,0.733,0.734);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABqEKIAAmeIgCAAIhTGeIgqAAIhTmeIgBAAIAAGeIhQAAIAAoTIB4AAIBBE1IAAAAIBBk1IB4AAIAAITg");
	this.shape_31.setTransform(121.7,64.1,0.733,0.734);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABCEKIgQh2IhjAAIgQB2IhZAAIBjoTIBvAAIBjITgAgjBEIBIAAIgljjIAAAAg");
	this.shape_32.setTransform(93.7,64.1,0.733,0.734);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhmDpQgjgkAAg8IAAkRQAAg8AjglQAlgoBDAAQBCABAkArQAhAnABA/IAAAoIhcAAIAAgqQAAgfgNgRQgMgQgTAAQgZAAgMAPQgKANAAAfIAAEMQAAAgAKANQAMAPAZAAQAXAAAMgOQAJgNAAgbIAAhAIBcAAIAAA9QgBA8ghAkQgkAohCABQhDgBglgog");
	this.shape_33.setTransform(69.7,64.1,0.733,0.734);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ABCEKIgQh2IhiAAIgRB2IhZAAIBjoTIBwAAIBhITgAgkBEIBIAAIgkjjIAAAAg");
	this.shape_34.setTransform(45.8,64.1,0.733,0.734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjdBTQAfifBuAAQAVAAAZAJQANAEAbANIApASQAXAKASgBQAfABAOgQQAMgNABggIBMAAQgfCghtAAQgWAAgZgJQgOgFgagOQgzgagfAAQgfAAgNAPQgNAPgBAeg");
	this.shape.setTransform(279.7,96.3,0.447,0.447);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvHtIjWpmIgCAAIAAJmIiZAAIAAvZICdAAIDMIyIADAAIAAoyICaAAIAAPZg");
	this.shape_1.setTransform(279.9,126.9,0.447,0.447);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB7HtIgejbIi4AAIgeDbIilAAIC2vZIDRAAIC1PZgAhDB/ICHAAIhDmnIgBAAg");
	this.shape_2.setTransform(367.2,126.9,0.447,0.447);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABwHtIjWpmIgDAAIAAJmIiZAAIAAvZICdAAIDMIyIADAAIAAoyICZAAIAAPZg");
	this.shape_3.setTransform(338.1,126.9,0.447,0.447);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB6HtIgejbIi4AAIgeDbIikAAIC2vZIDRAAIC2PZgAhDB/ICHAAIhDmnIgBAAg");
	this.shape_4.setTransform(309,126.9,0.447,0.447);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB7HtIgejbIi4AAIgfDbIikAAIC2vZIDRAAIC2PZgAhDB/ICHAAIhDmnIgBAAg");
	this.shape_5.setTransform(250.8,126.9,0.447,0.447);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ADFHtIAAsBIgDAAIiZMBIhRAAIiZsBIgDAAIAAMBIiTAAIAAvZIDeAAIB5I/IAAAAIB5o/IDfAAIAAPZg");
	this.shape_6.setTransform(218.1,126.9,0.447,0.447);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjZHtIAAvZICqAAIAANGIEJAAIAACTg");
	this.shape_7.setTransform(177.7,126.9,0.447,0.447);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjrHtIAAvZIHEAAIAACUIkbAAIAAD+IDZAAIAACSIjZAAIAAEiIEuAAIAACTg");
	this.shape_8.setTransform(152.1,126.9,0.447,0.447);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkDHtIAAvZID8AAQEKAAABEqIAAGFQgBEqkKAAgAhZFiIA7AAQBCAAAbgfQAbgeAAhOIAAmuQAAhNgbgfQgbgehCAAIg7AAg");
	this.shape_9.setTransform(123.8,126.9,0.447,0.447);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkiBtQAqjQCOgBQAdAAAgALQASAHAjARIA1AXQAfAMAYABQAogBASgTQAQgTABgpIBkAAQgpDSiPAAQgdAAgggLQgVgIghgRQghgRgTgGQgdgLgaAAQgoAAgSAUQgPASgCAog");
	this.shape_10.setTransform(326,18.9,0.447,0.447);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Aj/I2QhThZAAiRIAAqXQAAiRBThZQBahhClAAQCmAABbBhQBSBYAACSIAAKXQAACShSBYQhbBhimAAQilAAhahhgAhbmxQgZAgAABLIAAKNQAABLAZAgQAcAkA/AAQBBAAAbgkQAaggAAhLIAAqNQAAhLgaggQgbgkhBAAQg/AAgcAkg");
	this.shape_11.setTransform(364.8,59,0.447,0.447);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACSKFIkYslIgEAAIAAMlIjIAAIAA0JIDOAAIEMLgIADAAIAArgIDIAAIAAUJg");
	this.shape_12.setTransform(326.3,59,0.447,0.447);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ak0KFIAA0JIJQAAIAADBIlyAAIAAFNIEcAAIAAC/IkcAAIAAF7IGLAAIAADBg");
	this.shape_13.setTransform(290.3,59,0.447,0.447);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Aj4I2QhahbAAikIAAvEIDdAAIAAPNQAABHAdAjQAeAjA6AAQA8AAAdgjQAdgjAAhHIAAvNIDdAAIAAPEQAACkhaBbQhaBYifAAQieAAhahYg");
	this.shape_14.setTransform(253,59.4,0.447,0.447);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AlSKFIAA0JIFJAAQFcAAAAGGIAAH9QAAGGlcAAgAh0HPIBNAAQBXAAAjgnQAjgoAAhmIAAozQAAhmgjgnQgjgohXAAIhNAAg");
	this.shape_15.setTransform(214.7,59,0.447,0.447);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ak0KFIAA0JIJQAAIAADBIlyAAIAAFNIEcAAIAAC/IkcAAIAAF7IGLAAIAADBg");
	this.shape_16.setTransform(163.3,59,0.447,0.447);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Aj4ItQhVhkgHiYIDTgeQAGBfAlAzQAiAxA1AAQA7AAAjgeQAjggAAg4QAAhUhGhQQgegih7hqQhrhZgwhGQhHhpAAh8QAAiaBahUQBahUCiAAQCDAABTBYQBOBTAPCOIjTAXQgGhMglglQgfgegsAAQgzAAgdAiQgdAhAAA8QAABIBHBNQAYAbCBBxQBqBaAxBJQBGBoAAB2QAACdhhBYQheBWidAAQiVAAhchqg");
	this.shape_17.setTransform(127.3,59,0.447,0.447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADuO8Ig7moIlmAAIg6GoIk+AAIFh93IGVAAIFhd3gAiDD2IEHAAIiCszIgEAAg");
	this.shape.setTransform(327.4,119,0.333,0.333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADHO8IjosYQg+AHhrABIAAMQIlJAAIAA93IHNAAQEZAACFCBQCMCHABEsQgBDShJCAQg5BhhkAuIEWNigAjKhgIB0AAQCFAAA2g+QA3hAAAipQAAiog3hBQg2g9iFAAIh0AAg");
	this.shape_1.setTransform(287,119,0.333,0.333);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Al7NHQh7iEAAjXIAAvXQAAjXB7iEQCGiQD1AAQD3AACFCQQB7CEAADXIAAPXQAADXh7CEQiFCQj3AAQj1AAiGiQgAiHqDQgmAxAABvIAAPHQAABvAmAxQAoA0BfAAQBgAAAog0QAmgxAAhvIAAvHQAAhvgmgxQgog0hggBQhfABgoA0g");
	this.shape_2.setTransform(245.5,119,0.333,0.333);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACuO8IAAtQIlbAAIAANQIlJAAIAA93IFJAAIAAMLIFbAAIAAsLIFJAAIAAd3g");
	this.shape_3.setTransform(204.9,119,0.333,0.333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADuO8Ig7moIlmAAIg6GoIk+AAIFh93IGVAAIFhd3gAiDD2IEHAAIiCszIgEAAg");
	this.shape_4.setTransform(164.5,119,0.333,0.333);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACrKxIgpkxIkCAAIgqExIjlAAID+1hIEjAAID/VhgAheCxIC9AAIhepOIgBAAg");
	this.shape_5.setTransform(329.6,55,0.333,0.333);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACcKxIkstcIgDAAIAANcIjWAAIAA1hIDbAAIEeMTIAFAAIAAsTIDWAAIAAVhg");
	this.shape_6.setTransform(300.5,55,0.333,0.333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlJKxIAA1hIJ4AAIAADOImLAAIAAFkIEvAAIAADMIkvAAIAAGVIGmAAIAADOg");
	this.shape_7.setTransform(273.1,55,0.333,0.333);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACPKxIimo7QgqAFhRABIAAI1IjsAAIAA1hIFMAAQDKAABgBeQBlBhAADYQAACXg1BcQgpBGhIAgIDIJxgAiShFIBUAAQBgAAAngtQAnguAAh5QAAh5gngvQgngshgAAIhUAAg");
	this.shape_8.setTransform(245,55,0.333,0.333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah1KxIAAyTIjlAAIAAjOIK1AAIAADOIjlAAIAASTg");
	this.shape_9.setTransform(217,55,0.333,0.333);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACcKxIkstcIgEAAIAANcIjVAAIAA1hIDbAAIEfMTIADAAIAAsTIDWAAIAAVhg");
	this.shape_10.setTransform(189.7,55,0.333,0.333);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlJKxIAA1hIJ4AAIAADOImLAAIAAFkIEwAAIAADMIkwAAIAAGVIGmAAIAADOg");
	this.shape_11.setTransform(162.3,55,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.ctaregistertodayon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelregistertoday();
	this.cta_label.setTransform(145.1,34.5,0.786,0.786,0,0,0,137.3,25.9);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,-9,347,50);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


(lib.ctaregistertodayoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelregistertoday();
	this.cta_label.setTransform(145.1,34.5,0.786,0.786,0,0,0,137.3,25.9);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,60);


(lib.ctaregistertoday = function(mode,startPosition,loop) {
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
	this.cta = new lib.ctaregistertoday();
	this.cta.setTransform(524,60);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(278,88.3,1,1,0,0,0,278,88.3);
	this.text_3.cache(-2,-2,1460,184);

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