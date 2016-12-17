(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 320,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/BlueGradientImage.png", id:"BlueGradientImage"},
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



(lib.BlueGradientImage = function() {
	this.initialize(img.BlueGradientImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.img_athlete1 = function() {
	this.initialize(img.img_athlete1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,900);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,899);


(lib.img_facilities = function() {
	this.initialize(img.img_facilities);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,900);


(lib.shape_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0072B8").s().p("EgoDAO2MAmfgw1MgcQA1MMAq8g7EMgV9AwiIqNV7MAydhN6MghYBWlILv1IMAaOgusMgWjBF+IAEAAMAajg2PMgQ7A7yMgn+AAXg");
	this.shape.setTransform(256.5,303);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513,605.9);


(lib.textheadline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBaIAAizIBRAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape.setTransform(253.8,513.6,2.167,2.167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBaIgUhLIgQABIAABKIgfAAIAAizIAsAAQAYAAANANQANAMAAAcQAAAkgWAIIAbBSgAgSgIIALAAQALAAAFgGQAFgGAAgQQAAgPgFgGQgFgGgLAAIgLAAg");
	this.shape_1.setTransform(228.8,513.6,2.167,2.167);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBaIAAizIBQAAIAAAbIgyAAIAAAvIAmAAIAAAZIgmAAIAAA1IA2AAIAAAbg");
	this.shape_2.setTransform(203.7,513.6,2.167,2.167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBaIAAhQIgfAAIAABQIgfAAIAAizIAfAAIAABKIAfAAIAAhKIAfAAIAACzg");
	this.shape_3.setTransform(179,513.6,2.167,2.167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBaIgXh2IAAAAIgTB2IgaAAIgiizIAdAAIATBxIAAAAIAUhxIAYAAIAVBxIAAAAIARhxIAdAAIgfCzg");
	this.shape_4.setTransform(146.8,513.6,2.167,2.167);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBaIAAhLIglhoIAfAAIAUBFIABAAIAUhFIAfAAIglBoIAABLg");
	this.shape_5.setTransform(115.3,513.6,2.167,2.167);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBaIgmhvIAAAAIAABvIgcAAIAAizIAcAAIAkBlIABAAIAAhlIAcAAIAACzg");
	this.shape_6.setTransform(89.6,513.6,2.167,2.167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWBaIgGgoIggAAIgFAoIgeAAIAhizIAkAAIAiCzgAgLAXIAXAAIgMhMIAAAAg");
	this.shape_7.setTransform(64.4,513.6,2.167,2.167);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzBtIAAjZIBjAAIAAAhIg9AAIAAA4IAuAAIAAAfIguAAIAABBIBBAAIAAAgg");
	this.shape_8.setTransform(251.8,463.6,2.167,2.167);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBtIAAi4IgkAAIAAghIBtAAIAAAhIglAAIAAC4g");
	this.shape_9.setTransform(223.4,463.6,2.167,2.167);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzBtIAAjZIBjAAIAAAhIg+AAIAAA4IAwAAIAAAfIgwAAIAABBIBCAAIAAAgg");
	this.shape_10.setTransform(196.2,463.6,2.167,2.167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BtIAAjZIA3AAQAhAAAQAPQARAPAAAjQAAAigRANQgQAPghAAIgRAAIAABagAgWgKIAPAAQAQAAAHgHQAHgHAAgTQAAgUgHgHQgHgHgQAAIgPAAg");
	this.shape_11.setTransform(167.7,463.6,2.167,2.167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArBtIAAipIAAAAIgiCpIgQAAIgjipIAAAAIAACpIghAAIAAjZIAyAAIAZB+IAAAAIAbh+IAxAAIAADZg");
	this.shape_12.setTransform(131.2,463.6,2.167,2.167);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrBgQgOgPABgZIAAhvQgBgZAOgPQAQgQAbAAQAcAAAPAQQAOAPABAZIAABvQgBAZgOAPQgPAQgcAAQgbAAgQgQgAgOhIQgEAFgBANIAABtQABANAEAGQAFAGAJAAQALAAAEgGQAEgGABgNIAAhtQgBgNgEgFQgEgGgLAAQgJAAgFAGg");
	this.shape_13.setTransform(95.6,463.6,2.167,2.167);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBgQgOgPAAgZIAAhvQAAgZAOgPQAPgQAaAAQAbAAAQASQANAQAAAaIAAAQIglAAIAAgRQAAgagTAAQgJAAgEAGQgFAFAAANIAABtQAAANAFAGQAEAGAJAAQATAAAAgXIAAgaIAlAAIAAAZQAAAZgNAPQgPAQgcAAQgaAAgPgQg");
	this.shape_14.setTransform(65.6,463.6,2.167,2.167);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AheDHIAAmNIC1AAIAAA8IhwAAIAABnIBVAAIAAA5IhVAAIAAB1IB4AAIAAA8g");
	this.shape_15.setTransform(242.5,374.8,2.167,2.167);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AApDHIgvilQgMABgXAAIAACkIhFAAIAAmNIBgAAQA5AAAcAbQAdAcABA/QgBBOgvAUIA5C1gAgpgTIAYAAQAaAAALgNQAMgNAAgjQAAgjgMgOQgLgMgaAAIgYAAg");
	this.shape_16.setTransform(187.2,374.8,2.167,2.167);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AheDHIAAmNIC1AAIAAA8IhwAAIAABnIBWAAIAAA5IhWAAIAAB1IB4AAIAAA8g");
	this.shape_17.setTransform(131.8,374.8,2.167,2.167);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAkDHIAAixIhHAAIAACxIhEAAIAAmNIBEAAIAACjIBHAAIAAijIBEAAIAAGNg");
	this.shape_18.setTransform(76,374.8,2.167,2.167);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhlC3IAAluIBbAAQA6AAAaAaQAcAZAAA6QAAA6gcAXQgaAZg6AAIgbAAIAACXgAglgSIAYAAQAdAAALgMQAMgMAAggQAAghgMgMQgLgMgdABIgYAAg");
	this.shape_19.setTransform(242.4,284.7,2.167,2.167);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABJC3IAAkdIgBAAIg6EdIgcAAIg5kdIgBAAIAAEdIg3AAIAAluIBTAAIAsDVIAAAAIAtjVIBTAAIAAFug");
	this.shape_20.setTransform(181.3,284.7,2.167,2.167);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAuC3IgMhRIhDAAIgLBRIg9AAIBDluIBNAAIBDFugAgYAvIAxAAIgZidIAAAAg");
	this.shape_21.setTransform(122.2,284.7,2.167,2.167);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGChQgYgZAAgqIAAi7QAAgqAYgZQAagcAtAAQAtAAAaAeQAXAcAAArIAAAbIg/AAIAAgcQAAgWgJgMQgJgLgNAAQgQAAgIAKQgIAKAAAVIAAC5QAAAVAIAKQAIAKAQAAQAfAAAAglIAAgtIA/AAIAAAqQAAApgXAaQgZAcguAAQgtAAgagcg");
	this.shape_22.setTransform(73.9,284.6,2.167,2.167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmhNOQhYhUAAiyIAAlnQAAlOE9AAQE7AAAAFOIAAFnQAAFRk7ABQiVgBhQhLgAkXBXQgiAjAABPIAAGZQAABOAiAjQAdAdA+AAQA9AAAegdQAigjAAhOIAAmZQAAhPgigjQgegcg9AAQg+AAgdAcgAN1OLIiMqvIgDAAIiYKvIi4AAIjSvqICyAAICIKPIACAAICJqPIC6AAICLKPIADAAICFqPIC0AAIjcPqgAs1OLIklqIIgDAAIAAKIIivAAIAAvqIDSAAIELJSIADAAIAApSICwAAIAAPqgAPMlJQg2gsgWhXIBzgaQAJA0AdAbQAYAWAdAAQAfAAAVgUQAVgUAAgiQAAgmgqggQgQgNhKgoQg9gjgcgeQgqgrAAg7QAAhRAvgtQAxgtBZAAQBMgBAyArQAwAmAPBEIhpAgQgPgtgUgSQgVgVgfAAQgfAAgQATQgRARAAAgQAAAeApAcQAZAQBCAiQCDBMAABtQAABQg0AvQg1AwhbAAQhLAAgygpgAy/lJQg2gsgXhXIB0gaQAKA0AcAbQAYAWAeAAQAfAAAUgUQAVgUAAgiQAAgmgpggQgQgNhKgoQg+gjgcgeQgpgrAAg7QAAhRAugtQAxgtBaAAQBMgBAyArQAvAmAQBEIhqAgQgOgtgVgSQgUgVgfAAQgfAAgRATQgRARAAAgQAAAeApAcQAZAQBCAiQCDBMAABtQAABQg0AvQg1AwhbAAQhLAAgygpgAJbkpIAAn/IiJAAIAAhoIGIAAIAABoIiIAAIAAH/gAE4kpIhmj6Ig5AAIAAD6Ih1AAIAApnICqAAQBoAAA2AwQAzAvAABZQAAB6hdAjIB0ESgACZqEIA9AAQBUAAAAhWQAAhVhUAAIg9AAgAiEkpIgfiAIiiAAIgiCAIhxAAICZpnICXAAICUJngAkwoSIB1AAIg5j5IgCAAgArAkpIAAn/IiKAAIAAhoIGIAAIAABoIiJAAIAAH/g");
	this.shape.setTransform(159.5,150.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG0JjIAAjTQAAjGC7AAQC7AAAADGIAADTQAADGi7AAQi7AAAAjGgAI5E/QgUATABAuIAADyQgBAvAUATQASARAkAAQAlAAARgRQAUgTAAgvIAAjyQAAgugUgTQgRgRglAAQgkAAgSARgAgDKDIBtgYQAKAxAbAaQAXAWAcgBQAeAAAUgSQATgTAAggQAAglgngfQgQgMhGgoQh+hFAAhbQAAhMAtgsQAtgsBYAAQBIAAAwApQAuAlAPBBIhlAdQgPgpgUgTQgTgTgdAAQgeAAgRARQgQARAAAfQAAAcAnAbQAZAQA/AhQB+BHAABpQAABOgyAsQgyAvhYAAQiWAAgqimgAzsKDIBvgYQAKAxAbAaQAWAWAdgBQAeAAATgSQAVgTgBggQAAglgngfQgQgMhFgoQh/hFAAhbQAAhMAtgsQAtgsBXAAQBKAAAwApQAtAlAPBBIhmAdQgOgpgUgTQgSgTgeAAQgeAAgQARQgQARAAAfQAAAcAnAbQAYAQA/AhQB9BHAABpQABBOgyAsQgyAvhZAAQiWAAgrimgASDMiIitl+IgBAAIAAF+IhoAAIAApQIB8AAICeFeIABAAIAAleIBnAAIAAJQgAiAMiIgdh9IicAAIggB9IhuAAICUpQICRAAICOJQgAkkJBIBwAAIg4jwIgBAAgAsuMiIAApQIE2AAIAABjIjFAAIAACJICVAAIAABkIiVAAIAACcIDNAAIAABkgAN7BcIAArrIjLAAIAAiZII/AAIAACZIjJAAIAALrgAHWBcIiWk9IiVE9Ii4AAIDwnZIjemrIC5AAICCEOICDkOIC4AAIjbGrIDwHZgAowBcIAAuEIHZAAIAACZIksAAIAADPIDkAAIAACZIjkAAIAADsIE3AAIAACXgAtIBcIkHpEIgCAAIAAJEIieAAIAAuEIC9AAIDwIWIACAAIAAoWICeAAIAAOEg");
	this.shape.setTransform(160,152.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.img_facilities_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_facilities();
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.logoartwork = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBIQgLgNgBgVIARAAQABAgAYAAQAMAAAGgHQAHgHAAgOQAAgRgggXQghgWAAgZQAAgRALgMQALgKARAAQARAAALAMQALAMABAVIgQAAQgDgdgVAAQgKgBgHAHQgGAFAAAKQAAARAfAXQAiAVAAAcQAAAVgLALQgMALgTAAQgSAAgLgNg");
	this.shape.setTransform(173.2,266.9,1.173,1.173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBTIAAilIAnAAQASAAAMANQAMAMAAAVQAAAVgMAMQgMALgSAAIgVAAIAABLgAgWgFIATAAQAagBAAgeQAAgegagBIgTAAg");
	this.shape_1.setTransform(161.7,266.9,1.173,1.173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBTIAAiWIgjCWIgJAAIgjiWIAAAAIAACWIgRAAIAAilIAcAAIAcB8IAAAAIAch8IAdAAIAAClg");
	this.shape_2.setTransform(147,266.9,1.173,1.173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfBTIgKgyIgpAAIgJAyIgSAAIAkilIAXAAIAlClgAgRASIAjAAIgShXIAAAAg");
	this.shape_3.setTransform(132.8,266.9,1.173,1.173);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBCQgNgVAAgtQAAgsANgVQAMgTAVAAQAmAAAFA1IgTAAQgDgmgVABQgOAAgHAPQgHAQAAAlQAAAmAHARQAHAPAOAAQAbAAAAgqIASAAQAAAbgMAPQgMAPgVAAQgVAAgMgTg");
	this.shape_4.setTransform(120,266.9,1.173,1.173);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBTIgZhPIgYABIAABOIgSAAIAAilIAoAAQASAAANAMQANAMAAATQAAAggbAIIAcBSgAgYgJIAQAAQARAAAIgHQAHgHAAgPQAAgOgHgHQgIgHgRgBIgQAAg");
	this.shape_5.setTransform(100.6,266.9,1.173,1.173);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBTIAAilIBKAAIAAAPIg4AAIAAA5IApAAIAAANIgpAAIAABAIA7AAIAAAQg");
	this.shape_6.setTransform(88.2,266.9,1.173,1.173);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBTIAAiWIgBAAIgiCWIgLAAIgiiWIAAAAIAACWIgRAAIAAilIAdAAIAbB8IAAAAIAch8IAdAAIAAClg");
	this.shape_7.setTransform(73.5,266.9,1.173,1.173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBTIAAiWIAAAAIgjCWIgJAAIgjiWIAAAAIAACWIgRAAIAAilIAdAAIAbB8IAAAAIAch8IAdAAIAAClg");
	this.shape_8.setTransform(57,266.9,1.173,1.173);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBHQgKgMAAgVIAAh5IASAAIAAB4QAAAgAXAAQAYAAAAggIAAh4IASAAIAAB5QAAAVgKAMQgLANgVAAQgUAAgLgNg");
	this.shape_9.setTransform(42,267,1.173,1.173);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBIQgLgNgBgVIARAAQABAgAYAAQAMAAAGgHQAHgHAAgOQAAgRgggXQghgWAAgZQAAgRALgMQALgKARAAQARAAALAMQALAMABAVIgRAAQgCgdgVAAQgKgBgHAHQgGAFAAAKQAAARAgAXQAhAVAAAcQAAAVgLALQgLALgUAAQgSAAgLgNg");
	this.shape_10.setTransform(29.2,266.9,1.173,1.173);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVBsIgchlIAAAAIgOAYIAABNIglAAIAAjXIAlAAIAABQIABAAIAlhQIAlAAIgoBRIAtCGg");
	this.shape_11.setTransform(180.8,236,1.173,1.173);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzBsIAAjXIBiAAIAAAgIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBAAAIAAAhg");
	this.shape_12.setTransform(164.5,236,1.173,1.173);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBsIAAjXIBiAAIAAAgIg8AAIAAA4IAuAAIAAAeIguAAIAABAIBBAAIAAAhg");
	this.shape_13.setTransform(148.8,236,1.173,1.173);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAbBsIgbiNIAAAAIgXCNIggAAIgpjXIAjAAIAXCIIAAAAIAZiIIAcAAIAaCIIAAAAIAViIIAjAAIgmDXg");
	this.shape_14.setTransform(128.5,236,1.173,1.173);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjBjQgQgNAAgaIAAgRIAiAAIAAASQAAAJAFAFQAEAFAIAAQAQAAAAgaIAAgyQAAgSgQABQgLAAgHAOIgcAAIAChuIBYAAIgBAfIg5AAIgCAvIABAAQAGgHAIgDQADgCAJAAQAoAAABA3IAAAeQAAAigMARQgMARgbAAQgWgBgOgKg");
	this.shape_15.setTransform(101.5,236.2,1.173,1.173);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BgQgPgPAAgaQAAgUANgTIAWgYQgOghAAgXQAAgXALgLQAKgMAQAAQAQAAALAMQALALAAAPQAAAUgLARQgHAKgSASQAPAiAWAZQAGgSADggIAWACQgCAlgOAbQAMANAPAKIgMARQgPgHgMgNQgUAXgYAAQgaAAgPgPgAgoAcQgIAOABAMQAAARAJAKQAKAKARAAQAQAAAMgSQgWgdgUglQgJAJgGAMgAgbhCQAAAPAKAbQAMgOAFgLQAFgMABgNQgBgIgEgGQgDgGgGAAQgTAAAAAcg");
	this.shape_16.setTransform(76.3,236,1.173,1.173);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzA6IAAgNIAjAAIAAAPQAAAVAQABQAQAAAAgaIAAgRQAAgRgHgHQgIgGgPAAIAAgcQAPAAAHgGQAGgIAAgTQAAgPgDgGQgEgIgHABQgPAAAAAVIAAAJIgiAAIAAgKQAAgWANgOQANgOAXAAQAWAAAOARQAMAPAAAYQAAATgEALQgGAMgNAHQAQAHAFALQAFALABAXQAABAg0AAQgzAAAAg1g");
	this.shape_17.setTransform(50.5,236,1.173,1.173);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRAkIAPgkIgOAAIAAgjIAiAAIAAAjIgTAkg");
	this.shape_18.setTransform(31,248.8,1.173,1.173);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAABtIAAiqIgeAAIAAgUQAdgOANgOIATAAIAADag");
	this.shape_19.setTransform(18,235.8,1.173,1.173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Artwork
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AsnMYIET1wIgWVfIEF5uIA4S+IAUIpMADZgg9MADaAg9IBF7uIELZ5IABAAIgW1jIETVxIsoGlg");
	this.shape_20.setTransform(101,47.4,0.39,0.39);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AcvNtQjDAAiCgdQicgjhkhUQjljAAAoBQAAoIDrjPQBthfCogpQCVglDbAAQFTAADBAVQBfAKAdALIgiIYIjqAAIghkCQiDgQh/AAQhVAAgjAFQhRAMg6AqQiiB2AAFsQAAFnBkCQQA1BNBYAMQA4AHDzgDIAAlcIjWg6IAAjhIKFAAIAiOvgACmNNIAikEICEgYIhPtRIluRtIoUAAImHxwIhSNUICEAYIAjEEIqjAAIAikEICDgYIB5xrIiFgXIghkFIM3AAIFyQoIFawmINtAAIgiEEIiEAXIBoRqICFAYIAhEEgEgodANNIAjkEICDgYIAAxqIiDgXIgjkEINQAAIgiEEIiDAXIAARqICDAYIAiEEg");
	this.shape_21.setTransform(101,141.3,0.39,0.39);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ah6CQQgyg1ABhbQgBhZAyg1QAxg0BRgBQBKAAAtAzIAAgrIAqAAIAACFIgsAAQgDgvgfgcQgdgbgwAAQg8AAgkApQgkAqAABGQAABLAkAqQAkApA9AAQBWAAAShfIA1AAQgGBDgpAiQgpAjhJAAQhTAAgyg0g");
	this.shape_22.setTransform(68.1,194.4,0.39,0.39);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA9C7IAAgmIA2AAIghhTIimAAIgkBTIA4AAIAAAmIiUAAIAAgmIApAAICRlPIA3AAICOFPIAqAAIAAAmgABDAbIhDihIhFChICIAAg");
	this.shape_23.setTransform(83.6,194.4,0.39,0.39);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ai0C7IAAgmIAzAAIAAkpIgzAAIAAgmICmAAQBdAAA0AwQAyAxAABZQAABagyAxQg0AwhdAAgAhPCVIBBAAQBCAAAmgoQAmgnAAhGQAAhGgmgnQglgnhDAAIhBAAg");
	this.shape_24.setTransform(100.2,194.4,0.39,0.39);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA9C7IAAgmIA2AAIgghTIioAAIgjBTIA4AAIAAAmIiUAAIAAgmIAqAAICQlPIA4AAICNFPIAqAAIAAAmgABDAbIhDihIhEChICHAAg");
	this.shape_25.setTransform(53.5,194.4,0.39,0.39);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhZC7IAAgmIA/AAIAAh3Ih7iyIgfAAIAAgmICPAAIAAAmIg2AAIBdCIIBdiIIg2AAIAAgmICMAAIAAAmIgfAAIiACyIAAB3IA/AAIAAAmg");
	this.shape_26.setTransform(149.8,194.4,0.39,0.39);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABcC7IAAgmIA0AAIAAkpIgDAAIh7FPIgpAAIh5lPIgBAAIAAEpIAwAAIAAAmIiTAAIAAgmIAwAAIAAkpIgwAAIAAgmICIAAIBsEzIBskzICKAAIAAAmIgzAAIAAEpIAzAAIAAAmg");
	this.shape_27.setTransform(131.9,194.4,0.39,0.39);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AidC7IAAgmIAzAAIAAkpIgzAAIAAgmIE7AAIAABxIgmAAIAAhLIivAAIAAB/IBUAAIAAg4IAnAAIAACTIgnAAIAAg2IhUAAIAACFICvAAIAAhQIAmAAIAAB2g");
	this.shape_28.setTransform(114.3,194.4,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,276.9);


(lib.textfindoutmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002B53").s().p("AgoBWIAAirIBNAAIAAAaIgvAAIAAAsIAkAAIAAAYIgkAAIAAAzIAzAAIAAAag");
	this.shape.setTransform(128.2,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002B53").s().p("AARBWIgThIIgPABIAABHIgeAAIAAirIAqAAQAYAAAMALQAMANAAAbQAAAigUAIIAZBOgAgRgIIALAAQAKAAAFgFQAFgGAAgPQAAgPgFgGQgFgGgKAAIgLAAg");
	this.shape_1.setTransform(116.8,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002B53").s().p("AghBLQgLgMAAgSIAAhYQAAgUALgMQAMgNAVAAQAWAAAMANQALAMAAAUIAABYQAAATgLALQgMANgWABQgVgBgMgNgAgOgrIAABXQgBASAPABQAPgBAAgSIAAhXQAAgSgPAAQgPAAABASg");
	this.shape_2.setTransform(104.6,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002B53").s().p("AAiBWIAAiFIgBAAIgaCFIgMAAIgbiFIgBAAIAACFIgaAAIAAirIAnAAIAUBjIAAAAIAVhjIAnAAIAACrg");
	this.shape_3.setTransform(91.2,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002B53").s().p("AgNBWIAAiRIgdAAIAAgaIBVAAIAAAaIgdAAIAACRg");
	this.shape_4.setTransform(73.9,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002B53").s().p("AggBMQgMgNAAgWIAAh/IAeAAIAACBQAAASAOAAQAPAAAAgSIAAiBIAeAAIAAB/QAAAWgMANQgMALgVAAQgUAAgMgLg");
	this.shape_5.setTransform(63.2,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002B53").s().p("AghBLQgLgMAAgSIAAhYQAAgUALgMQAMgNAVAAQAWAAAMANQALAMAAAUIAABYQAAASgLAMQgMANgWABQgVgBgMgNgAgOgrIAABXQAAASAOABQAIgBAEgEQADgEAAgKIAAhXQAAgKgDgEQgEgEgIAAQgOAAAAASg");
	this.shape_6.setTransform(51.2,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002B53").s().p("AgsBWIAAirIAsAAQAtAAAAA0IAABDQAAA0gtAAgAgOA+IAKAAQAKAAAFgGQAFgFgBgOIAAhKQABgNgFgFQgFgGgKAAIgKAAg");
	this.shape_7.setTransform(33.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002B53").s().p("AATBWIgkhqIAAAAIAABqIgbAAIAAirIAbAAIAjBhIAAAAIAAhhIAbAAIAACrg");
	this.shape_8.setTransform(21.9,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002B53").s().p("AgNBWIAAirIAbAAIAACrg");
	this.shape_9.setTransform(12.6,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002B53").s().p("AgoBWIAAirIBRAAIAAAaIgzAAIAAAsIAmAAIAAAYIgmAAIAABNg");
	this.shape_10.setTransform(4.2,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.3,17.8);


(lib.ctabgtint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8FA124").s().p("A4/FeIAAq7MAx/AAAIAAK7g");
	this.shape.setTransform(160,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctabg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFD730").s().p("A4/FeIAAq7MAx/AAAIAAK7g");
	this.shape.setTransform(160,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


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
	this.instance.setTransform(0,0,1.391,1.391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1250.8);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape_0();
	this.instance.setTransform(256.4,302.9,1,1,0,0,0,256.4,302.9);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,513,605.9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMeAu4MAAAhdvIY9AAMAAABdvg");
	mask.setTransform(337,300);

	// Layer 3
	this.instance = new lib.shape();
	this.instance.setTransform(256.4,364,1,1,0,0,0,256.4,302.9);
	this.instance.alpha = 0.398;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#002D54","#006FBA"],[0.514,1],2.2,-93.9,2.2,222.1).s().p("EgMeAu4MAAAhdvIY9AAMAAABdvg");
	this.shape.setTransform(337,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257,0,160,600);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork
	this.instance = new lib.logoartwork();
	this.instance.setTransform(58.6,42,1.004,1.004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4/cIMAAAg4PMAx/AAAMAAAA4Pg");
	this.shape.setTransform(160,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,360);


(lib.ctalabelfindoutmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.label = new lib.textfindoutmore();
	this.label.setTransform(67.2,3.1,2.021,2.021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label},{t:this.arrow}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.1,334.6,36);


(lib.ctafindoutmoreon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelfindoutmore();
	this.cta_label.setTransform(133.6,39.4,0.889,0.889,0,0,0,137.5,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,1,339,40);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctafindoutmoreoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelfindoutmore();
	this.cta_label.setTransform(133.4,39.4,0.889,0.889,0,0,0,137.3,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 160x600
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-1.2,666.8,2,2,0,0,0,256.4,333.4);

	this.instance_1 = new lib.BlueGradientImage();
	this.instance_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514,0,1025.9,1333.9);


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
	this.cta_on.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(1));

	// cta-off
	this.cta_off = new lib.ctafindoutmoreoff();
	this.cta_off.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_off).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


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
				.to(root.athlete_1, 1.4, {
					x: '-=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				.from(root.athlete_2, 1.4, {
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
	this.clickthrough.setTransform(160,599.9,1.067,4.8,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// footer
	this.footer = new lib.footer();
	this.footer.setTransform(0,840);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(1));

	// cta
	this.cta = new lib.ctafindoutmore();
	this.cta.setTransform(0,770);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(160,401.9,1,1,0,0,0,160,401.9);
	this.text_3.cache(-2,-2,324,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_2
	this.athlete_2 = new lib.imgathlete2();
	this.athlete_2.setTransform(159,599.5,1,1,0,0,0,159,599.5);

	this.timeline.addTween(cjs.Tween.get(this.athlete_2).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.setTransform(160,600,1,1,0,0,0,160,600);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.cache(-2,-2,324,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.cache(-2,-2,324,1204);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// image: facilities
	this.facilities = new lib.img_facilities_1();
	this.facilities.setTransform(120,450,1,1,0,0,0,120,450);

	this.timeline.addTween(cjs.Tween.get(this.facilities).wait(1));

	// background
	this.bg = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354,599.9,1025.9,1334.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;