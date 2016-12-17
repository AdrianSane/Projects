(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.img_athlete = function() {
	this.initialize(img.img_athlete);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,748);


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
	this.shape.graphics.f("#FFFFFF").s().p("AguBjIAAjFIBZAAIAAAeIg4AAIAAAzIArAAIAAAcIgrAAIAAA6IA8AAIAAAeg");
	this.shape.setTransform(525.6,537.9,2.46,2.46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBjIgXhSIgSABIAABRIgiAAIAAjFIAwAAQAcAAANAOQAPAOAAAfQAAAngYAJIAdBagAgUgJIAMAAQANAAAGgGQAFgHAAgRQAAgSgFgGQgGgHgNAAIgMAAg");
	this.shape_1.setTransform(494.4,537.9,2.46,2.46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBjIAAjFIBaAAIAAAeIg4AAIAAAzIArAAIAAAcIgrAAIAAA6IA7AAIAAAeg");
	this.shape_2.setTransform(463.3,537.9,2.46,2.46);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASBjIAAhYIgjAAIAABYIgiAAIAAjFIAiAAIAABRIAjAAIAAhRIAiAAIAADFg");
	this.shape_3.setTransform(432.6,537.9,2.46,2.46);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBjIgYiCIgBAAIgWCCIgcAAIgmjFIAgAAIAVB9IAAAAIAXh9IAaAAIAXB9IABAAIATh9IAgAAIgjDFg");
	this.shape_4.setTransform(392.5,537.9,2.46,2.46);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBjIAAhSIgphzIAiAAIAXBLIABAAIAXhLIAiAAIgpBzIAABSg");
	this.shape_5.setTransform(353.4,537.9,2.46,2.46);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBjIgqh7IAAAAIAAB7IgfAAIAAjFIAfAAIApBwIAAAAIAAhwIAfAAIAADFg");
	this.shape_6.setTransform(321.3,537.9,2.46,2.46);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBjIgGgsIglAAIgGAsIggAAIAkjFIApAAIAkDFgAgNAZIAbAAIgOhTIAAAAg");
	this.shape_7.setTransform(290.1,537.9,2.46,2.46);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBjIAAjFIBZAAIAAAeIg3AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAeg");
	this.shape_8.setTransform(247.9,537.9,2.46,2.46);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBjIAAinIghAAIAAgeIBjAAIAAAeIghAAIAACng");
	this.shape_9.setTransform(218.9,537.9,2.46,2.46);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBjIAAjFIBaAAIAAAeIg4AAIAAAzIAqAAIAAAcIgqAAIAAA6IA7AAIAAAeg");
	this.shape_10.setTransform(191.1,537.9,2.46,2.46);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BjIAAjFIAxAAQAeAAAPAOQAPANAAAgQAAAfgPANQgPANgeAAIgPAAIAABRgAgUgJIANAAQAQAAAGgGQAGgHAAgRQAAgSgGgGQgGgHgQAAIgNAAg");
	this.shape_11.setTransform(162.1,537.9,2.46,2.46);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBjIAAiaIAAAAIgfCaIgPAAIgfiaIAAAAIAACaIgeAAIAAjFIAsAAIAYBzIAAAAIAZhzIAsAAIAADFg");
	this.shape_12.setTransform(124.8,537.9,2.46,2.46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmBWQgNgNAAgXIAAhkQAAgWANgNQAOgPAYgBQAZABAOAPQANANAAAWIAABkQAAAXgNANQgOAPgZABQgYgBgOgPgAgNhCQgEAFAAAMIAABjQAAALAEAFQAEAGAJgBQAKABAEgGQAEgFAAgLIAAhjQAAgMgEgFQgEgFgKAAQgJAAgEAFg");
	this.shape_13.setTransform(88.5,538,2.46,2.46);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBWQgNgNAAgXIAAhkQAAgWANgNQAOgPAYgBQAZABANAPQAMAPAAAXIAAAPIgiAAIAAgQQAAgLgEgHQgFgFgHAAQgJAAgEAFQgEAFAAAMIAABjQAAALAEAFQAEAGAJgBQAQAAAAgTIAAgYIAiAAIAAAWQAAAXgMANQgNAPgZABQgYgBgOgPg");
	this.shape_14.setTransform(57.8,538,2.46,2.46);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhXC3IAAltICoAAIAAA3IhpAAIAABeIBQAAIAAA2IhQAAIAABrIBwAAIAAA3g");
	this.shape_15.setTransform(515.6,459.1,2.46,2.46);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmC3IgsiYQgMACgUAAIAACWIg/AAIAAltIBYAAQA1AAAaAZQAbAaAAA5QAABJgtASIA2CmgAgmgSIAWAAQAZAAAKgLQALgNAAggQAAgggLgMQgKgMgZAAIgWAAg");
	this.shape_16.setTransform(458,459.1,2.46,2.46);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhXC3IAAltICoAAIAAA3IhpAAIAABeIBQAAIAAA2IhQAAIAABrIBwAAIAAA3g");
	this.shape_17.setTransform(400.3,459.1,2.46,2.46);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAhC3IAAiiIhCAAIAACiIg+AAIAAltIA+AAIAACVIBCAAIAAiVIA/AAIAAFtg");
	this.shape_18.setTransform(342.2,459.1,2.46,2.46);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhlC3IAAltIBaAAQA6AAAbAZQAcAaAAA5QAAA6gcAYQgbAZg6AAIgbAAIAACWgAgmgSIAYAAQAeAAALgLQAMgMAAghQAAgggMgMQgLgMgeAAIgYAAg");
	this.shape_19.setTransform(258.6,459.1,2.46,2.46);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABJC3IAAkdIgBAAIg5EdIgdAAIg5kdIgBAAIAAEdIg3AAIAAltIBTAAIAsDVIABAAIAsjVIBTAAIAAFtg");
	this.shape_20.setTransform(189.6,459.1,2.46,2.46);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAuC3IgMhRIhDAAIgLBRIg9AAIBDltIBNAAIBDFtgAgYAvIAxAAIgYicIgBAAg");
	this.shape_21.setTransform(123,459.1,2.46,2.46);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGCgQgYgZAAgpIAAi7QAAgpAYgZQAZgcAuAAQAtAAAaAeQAXAbAAArIAAAbIg/AAIAAgcQAAgWgJgMQgIgKgOAAQgRAAgIAKQgHAJAAAVIAAC5QAAAVAHAJQAIAKARAAQARAAAHgJQAHgJAAgTIAAgsIA/AAIAAAqQAAApgXAZQgZAcguAAQguAAgZgcg");
	this.shape_22.setTransform(68.6,459.1,2.46,2.46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline3, new cjs.Rectangle(45.3,372.3,499.8,239.4), null);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiGRQgigOgZgbQgZgbgNgmQgNgmAAgxIAAmfQAAgsAMglQANgmAZgbQAagdAmgQQAngRAzAAQAxAAAoASQAnARAaAfQAaAeAOApQANAoAAAtIAAA0IiEAAIgFhLQgFgdgKgSQgJgQgPgIQgOgHgVABQgcAAgQASQgSAWAAAwIAAGfQAAApAPAUQAQAXAjABQAoAAASgaQARgZAAg9IAAhOIhYAAIAAhtIDiAAIAAGYIhDAAIgag8QggAngdAQQggAQguAAQgpAAgigOg");
	this.shape.setTransform(452.9,228.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABcGUIiwn4IgCAAIAAH4Ih9AAIAAsoICAAAICpHPIABAAIAAnPIB+AAIAAMog");
	this.shape_1.setTransform(400.9,228.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFGUIAAsoICLAAIAAMog");
	this.shape_2.setTransform(361,228.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABcGUIixn4IgBAAIAAH4Ih+AAIAAsoICBAAICoHPIACAAIAAnPIB9AAIAAMog");
	this.shape_3.setTransform(321,228.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEGUIAAsoICJAAIAAMog");
	this.shape_4.setTransform(281.1,228.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABlGUIgZizIiXAAIgZCzIiGAAICVsoICrAAICVMogAA4BpIg3lbIgBAAIg3FbIBvAAg");
	this.shape_5.setTransform(244.2,228.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABUGUIhhlOIhIADIAAFLIiLAAIAAsoIDCAAQA7AAAsAOQAsANAdAcQAdAeAPAsQAOAuAABBQABAugJAlQgIAigOAZQgNAWgTAPQgPAOgUAJIB2FugAhVgoIAxAAQAdAAASgGQATgGAMgOQANgPAFgXQAFgYABgkQgBglgFgYQgFgXgNgPQgMgOgTgGQgSgGgdAAIgxAAg");
	this.shape_6.setTransform(196.2,228.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFGUIAAquIiGAAIAAh6IGXAAIAAB6IiHAAIAAKug");
	this.shape_7.setTransform(148.7,228.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlSLEIAA2HIKKAAIAADVImXAAIAAFrIE5AAIAADUIk5AAIAAGfIGyAAIAADUg");
	this.shape_8.setTransform(438.5,99.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah5LEIAAyyIjqAAIAAjVILIAAIAADVIjsAAIAASyg");
	this.shape_9.setTransform(359.7,99.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah5LEIAA2HIDzAAIAAWHg");
	this.shape_10.setTransform(299.5,99.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ak4LEIAA2HID0AAIAASzIF9AAIAADUg");
	this.shape_11.setTransform(242.9,99.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlSLEIAA2HIKKAAIAADVImXAAIAAFrIE5AAIAADUIk5AAIAAGfIGyAAIAADUg");
	this.shape_12.setTransform(164.7,99.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline2, new cjs.Rectangle(117,27,362.9,275), null);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJFBIiMmQIgBAAIAAGQIhkAAIAAqBIBmAAICGFuIABAAIAAluIBkAAIAAKBg");
	this.shape.setTransform(484.7,240.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKE+QgggMgVgYQgVgWgKgeQgKgdAAgjIAAlKQAAgjAKgdQAKgeAVgXQAVgXAggMQAhgNApAAQAqAAAhANQAgAMAVAXQAVAXAKAeQAKAdAAAjIAAFKQAAAjgKAdQgKAegVAWQgVAYggAMQghAMgqAAQgpAAghgMgAgtjXQgMAQAAAlIAAFFQAAAmAMAQQANARAgAAQAgAAAOgRQANgQAAgmIAAlFQAAglgNgQQgOgSggAAQggAAgNASg");
	this.shape_1.setTransform(443.2,240.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2FBIAAqBIBtAAIAAKBg");
	this.shape_2.setTransform(411.6,240.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2FBIAAohIhrAAIAAhgIFDAAIAABgIhrAAIAAIhg");
	this.shape_3.setTransform(384.9,240.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABQFBIgUiOIh4AAIgTCOIhrAAIB2qBICIAAIB3KBgAAsBTIgrkTIgBAAIgsETIBYAAg");
	this.shape_4.setTransform(350.9,240.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDFBIhNkKIg5ADIAAEHIhvAAIAAqBICbAAQAuAAAjAKQAjALAXAWQAXAXAMAkQAMAkAAAzQAAAlgHAeQgGAagMAUQgKASgPAMQgMALgQAHIBeEjgAhDggIAnAAQAXAAAOgFQAQgEAJgMQAKgLAEgTQAEgTAAgdQAAgdgEgSQgEgTgKgMQgJgLgQgFQgOgFgXAAIgnAAg");
	this.shape_5.setTransform(312.8,240.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABQFBIgUiOIh4AAIgTCOIhrAAIB2qBICIAAIB3KBgAAsBTIgrkTIgBAAIgsETIBYAAg");
	this.shape_6.setTransform(272.9,240.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiyFBIAAqBICeAAQA0AAAkAKQAmALAYAWQAZAXAMAkQAMAkAAAzQAAA0gMAkQgMAkgZAVQgYAXgmAKQgkALg0AAIgvAAIAAEHgAhDggIAqAAQAbAAARgFQATgEAKgMQALgLAFgTQAEgSAAgeQAAgdgEgSQgFgUgLgLQgKgLgTgFQgRgFgbAAIgqAAg");
	this.shape_7.setTransform(234.8,240.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiZFBIAAqBIEnAAIAABgIi4AAIAAClICNAAIAABgIiNAAIAAC8IDEAAIAABgg");
	this.shape_8.setTransform(195.8,240.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABDFBIhNkKIg5ADIAAEHIhvAAIAAqBICbAAQAuAAAjAKQAjALAXAWQAXAXAMAkQAMAkAAAzQAAAlgHAeQgGAagMAUQgKASgPAMQgMALgQAHIBeEjgAhDggIAnAAQAXAAAOgFQAQgEAJgMQAKgLAEgTQAEgTAAgdQAAgdgEgSQgEgTgKgMQgJgLgQgFQgOgFgXAAIgnAAg");
	this.shape_9.setTransform(156.8,240.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiyFBIAAqBICeAAQA0AAAkAKQAmALAYAWQAZAXAMAkQAMAkAAAzQAAA0gMAkQgMAkgZAVQgYAXgmAKQgkALg0AAIgvAAIAAEHgAhDggIAqAAQAbAAARgFQATgEAKgMQALgLAFgTQAEgSAAgeQAAgdgEgSQgFgUgLgLQgKgLgTgFQgRgFgbAAIgqAAg");
	this.shape_10.setTransform(115.3,240.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmNM+IAA57IL7AAIAAD5IndAAIAAGrIFvAAIAAD4IlvAAIAAHoIH9AAIAAD3g");
	this.shape_11.setTransform(460.6,112);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiOM+IAA2CIkTAAIAAj5INDAAIAAD5IkUAAIAAWCg");
	this.shape_12.setTransform(367.7,112);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiNM+IAA57IEbAAIAAZ7g");
	this.shape_13.setTransform(296.7,112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AluM+IAA57IEeAAIAAWEIG/AAIAAD3g");
	this.shape_14.setTransform(229.8,112);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmNM+IAA57IL7AAIAAD5IndAAIAAGrIFvAAIAAD4IlvAAIAAHoIH9AAIAAD3g");
	this.shape_15.setTransform(137.7,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textheadline1, new cjs.Rectangle(82,27,424,272), null);


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

	// 1, 3 & 5 Week Summer Camps - ALL SPORTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBQQgMgOgBgXIASAAQABAQAHAJQAIAKAOAAQAMgBAHgHQAIgJAAgOQAAgUgkgZQglgZAAgcQAAgSAMgMQAMgMAUAAQATAAAMANQAMANACAYIgTAAQgCghgZAAQgLAAgHAHQgHAGAAALQAAASAkAaQAlAYAAAfQAAAXgMALQgNANgWAAQgVAAgMgOg");
	this.shape.setTransform(462.2,84.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBbIAAikIglAAIAAgRIBdAAIAAARIglAAIAACkg");
	this.shape_1.setTransform(451.7,84.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBbIgdhWIgZABIAABVIgUAAIAAi1IAsAAQAVAAAOAMQAOANABAWQgBAjgdAJIAfBagAgbgKIARAAQATgBAKgHQAHgIABgQQgBgQgHgHQgKgIgTAAIgRAAg");
	this.shape_2.setTransform(441,84.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzAAQAAhdAzAAQA0AAAABdQAABeg0AAQgzAAAAhegAgVg9QgKATAAAqQAAAsAKASQAHAPAOABQAgAAAAhOQAAhMggAAQgOAAgHAPg");
	this.shape_3.setTransform(428.2,84.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBbIAAi1IArAAQAVgBANAOQAOAOAAAXQAAAXgOANQgNANgVAAIgXAAIAABSgAgZgHIAVAAQAeAAAAghQAAgigeABIgVAAg");
	this.shape_4.setTransform(416.6,84.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBQQgMgPgBgWIATAAQABAiAcABQAMgBAIgHQAHgJAAgOQAAgUgkgZQglgZAAgcQAAgSANgMQAMgMATAAQAUAAAMANQAMANABAYIgSAAQgEghgYAAQgLAAgHAHQgHAGAAALQAAASAkAaQAlAYAAAfQAAAXgMALQgNANgWAAQgUAAgNgOg");
	this.shape_5.setTransform(404.9,84.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBbIAAi1IAUAAIAAClIA6AAIAAAQg");
	this.shape_6.setTransform(389.5,84.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBbIAAi1IAVAAIAAClIA5AAIAAAQg");
	this.shape_7.setTransform(379.6,84.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBbIgLg2IguAAIgLA2IgTAAIAoi1IAaAAIApC1gAgTAUIAnAAIgUhhIAAAAg");
	this.shape_8.setTransform(368.3,84.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAIIAAgPIA9AAIAAAPg");
	this.shape_9.setTransform(352.8,87.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghBQQgMgOgBgXIASAAQABAQAHAJQAIAKAOAAQAMgBAHgHQAIgJAAgOQAAgUgkgZQglgZAAgcQAAgSAMgMQAMgMAUAAQATAAAMANQANANABAYIgTAAQgCghgZAAQgLAAgHAHQgHAGAAALQAAASAkAaQAlAYAAAfQAAAXgMALQgNANgWAAQgVAAgMgOg");
	this.shape_10.setTransform(337.3,84.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtBbIAAi1IArAAQAVgBAOAOQANAOAAAXQAAAXgNANQgOANgVAAIgXAAIAABSgAgZgHIAVAAQAeAAAAghQAAgigeABIgVAAg");
	this.shape_11.setTransform(326.4,84.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAtBbIAAimIgBAAIgmCmIgMAAIgmimIAAAAIAACmIgSAAIAAi1IAfAAIAfCJIABAAIAfiJIAfAAIAAC1g");
	this.shape_12.setTransform(312.7,84.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBbIgLg2IgtAAIgLA2IgUAAIAoi1IAbAAIAoC1gAgUAUIApAAIgVhhIAAAAg");
	this.shape_13.setTransform(299.3,84.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyAAQAAhdA0AAQAqAAAFA6IgUAAQgDgpgYAAQgRAAgHARQgIASAAApQAAArAIARQAHARARABQAdAAABgwIATAAQAAAfgNARQgNAQgXAAQg0AAAAheg");
	this.shape_14.setTransform(287.2,84.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbBbIgchWIgaABIAABVIgUAAIAAi1IAsAAQAVAAAOAMQAOANABAWQgBAjgdAJIAfBagAgbgKIARAAQATgBAKgHQAHgIABgQQgBgQgHgHQgKgIgTAAIgRAAg");
	this.shape_15.setTransform(269.1,84.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqBbIAAi1IBSAAIAAARIg/AAIAAA+IAvAAIAAAPIgvAAIAABHIBCAAIAAAQg");
	this.shape_16.setTransform(257.4,84.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAtBbIAAimIgBAAIgmCmIgMAAIgmimIAAAAIAACmIgSAAIAAi1IAfAAIAfCJIABAAIAfiJIAfAAIAAC1g");
	this.shape_17.setTransform(243.6,84.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAtBbIAAimIgBAAIgmCmIgMAAIgmimIAAAAIAACmIgSAAIAAi1IAfAAIAfCJIAAAAIAgiJIAfAAIAAC1g");
	this.shape_18.setTransform(228.1,84.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguAqIAAiGIAUAAIAACGQAAAiAaAAQAbAAAAgiIAAiGIAUAAIAACGQAAAYgLANQgMAOgYAAQguAAAAgzg");
	this.shape_19.setTransform(214,84.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghBQQgMgPgBgWIATAAQABAiAcABQAMgBAIgHQAHgJAAgOQAAgUgkgZQglgZAAgcQAAgSANgMQAMgMATAAQAUAAAMANQAMANABAYIgSAAQgEghgYAAQgLAAgHAHQgHAGAAALQAAASAkAaQAlAYAAAfQAAAXgMALQgNANgWAAQgUAAgNgOg");
	this.shape_20.setTransform(202,84.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBbIgghhIgBAAIgYAqIAAA3IgTAAIAAi1IATAAIAABcIABAAIAyhcIAVAAIgjBAIAqB1g");
	this.shape_21.setTransform(185.9,84.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqBbIAAi1IBSAAIAAARIg/AAIAAA+IAuAAIAAAPIguAAIAABHIBDAAIAAAQg");
	this.shape_22.setTransform(174.3,84.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqBbIAAi1IBSAAIAAARIg/AAIAAA+IAuAAIAAAPIguAAIAABHIBDAAIAAAQg");
	this.shape_23.setTransform(163,84.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeBbIgdiOIgBAAIgcCOIgRAAIgei1IASAAIAWCOIABAAIAbiOIAPAAIAdCOIABAAIAUiOIASAAIgdC1g");
	this.shape_24.setTransform(149.2,84.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrAzIAAgOIAdAAIAAAPQAAAQAOAAQAOAAAAgWIAAgqQAAgQgNAAQgLAAgFANIgZAAIADhdIBLAAIgBAaIgwAAIgCAoIAAAAQAGgGAGgDQADgBAIAAQAiAAAAAvIAAAZQAAAegKANQgKAOgXAAQgsAAAAgqg");
	this.shape_25.setTransform(130.2,84.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguBRQgNgMABgWQgBgRALgPIATgWQgNgeABgRQAAgSAJgLQAIgKAOAAQAPAAAJAKQAJAJAAANQABARgLAPQgFAIgPAPQALAZAUAZQAFgOADgbIASABQgCAfgKAXQAJALAMAJIgKANQgLgEgMgNQgQAUgWAAQgVAAgNgNgAgpAuQAAAOAJAJQAIAIAOABQAPgBAKgPQgTgXgRggQgUAUAAATgAgXg3QAAALAJAYQALgMADgJQAGgKgBgLQAAgHgDgFQgEgFgFAAQgQAAAAAYg");
	this.shape_26.setTransform(112.1,84.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrAxIAAgLIAdAAIAAANQAAASAOAAQAOAAAAgWIAAgNQAAgOgGgHQgGgFgOAAIAAgYQANAAAGgGQAGgGAAgQQAAgNgDgFQgDgGgHAAQgNAAAAASIAAAIIgdAAIAAgJQAAgSALgMQAMgMATAAQAUAAALAOQAKAOAAATQAAARgEAJQgEAJgMAHQAOAGAEAKQAFAJAAATQAAA2gtAAQgqAAAAgtg");
	this.shape_27.setTransform(93.5,84.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAfIALgfIgKAAIAAgeIAcAAIAAAeIgRAfg");
	this.shape_28.setTransform(79.5,93.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgBBdIAAiQIgZAAIAAgRQAYgMANgMIAQAAIAAC5g");
	this.shape_29.setTransform(70.1,84.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AvNCRQgyg1AAhbQAAhbAyg1QAxg1BUAAQBKAAAuAzIAAgrIAqAAIAACFIgsAAQgEgvgegcQgegbgwAAQg/AAgkApQgkAqAABHQAABLAkArQAkAqBAAAQBXAAAShgIA2AAQgHBCgpAjQgqAjhIAAQhXAAgyg0gASSC9IAAgnIA/AAIAAh4Ih8izIgfAAIAAgnICQAAIAAAnIg2AAIBgCIIBdiIIg2AAIAAgnICNAAIAAAnIgfAAIiBC0IAAB3IA/AAIAAAngAN8C9IAAgnIA0AAIAAkrIgEAAIh7FSIgsAAIh5lSIgCAAIAAErIAxAAIAAAnIiVAAIAAgnIAxAAIAAkrIgxAAIAAgnICKAAIBtE2IBuk2ICLAAIAAAnIgzAAIAAErIAzAAIAAAngAC5C9IAAgnIA0AAIAAkrIg0AAIAAgnIFAAAIAAByIgnAAIAAhLIiyAAIAAB/IBXAAIAAg4IAnAAIAACVIgnAAIAAg3IhXAAIAACGICyAAIAAhQIAnAAIAAB3gAjKC9IAAgnIA0AAIAAkrIg0AAIAAgnICoAAQBfAAA0AxQAzAxAABaQAABbgzAxQg0AxhfAAgAhjCWIBBAAQBEAAAmgoQAngnAAhHQAAhHgngnQgmgnhEAAIhBAAgAmEC9IAAgnIA3AAIghhUIiqAAIgkBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA6AAICPFSIAqAAIAAAngAl+AbIhFiiIhFCiICKAAgAyOC9IAAgnIA2AAIgghUIirAAIgjBUIA3AAIAAAnIiUAAIAAgnIAqAAICSlSIA5AAICPFSIAqAAIAAAngAyIAbIhFiiIhGCiICLAAg");
	this.shape_30.setTransform(339.6,33.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AGaDDQhaAAgoghQgzgrAAhyQAAhzA1guQAsgmBjAAQBMAAArAFQAVACAHACIgIB3Ig0AAIgHg5QgegEgcAAQgnAAgSANQglAbAABRQAABPAWAgQAMARAUADQAMABA3gBIAAhNIgwgNIAAgxICQAAIAHDRgAAlC8IAHg6IAegFIgSi9IhRD8Ih2AAIhXj8IgSC9IAdAFIAHA6IiWAAIAIg6IAdgFIAbj7IgdgFIgIg6IC3AAIBTDsIBMjsIDEAAIgIA6IgdAFIAXD7IAdAFIAIA6gApAC8IAHg6IAegFIAAj7IgegFIgHg6IC9AAIgIA6IgdAFIAAD7IAdAFIAIA6g");
	this.shape_31.setTransform(120.5,33.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AjIDEIBFlXIgGFTIBBmWIATGzIA1oIIA2IIIARm1IBDGZIgGlUIBFFXIjJBog");
	this.shape_32.setTransform(20.1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoartwork, new cjs.Rectangle(0,0,484,96.8), null);


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


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete();
	this.instance.parent = this;
	this.instance.setTransform(3,0,1.342,1.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imgathlete1, new cjs.Rectangle(3,0,522.2,1004.1), null);


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
	this.instance.setTransform(303,67.4,1.004,1.004,0,0,0,242,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu3AK8IAA13MBdvAAAIAAV3g");
	this.shape.setTransform(300,70);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(0,0,600,140), null);


(lib.ctalabelsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002F53").s().p("AhfCtIAAlZIBVAAQA3AAAZAXQAaAYAAA3QAAA3gaAXQgZAXg3AAIgaAAIAACOgAgkgRIAXAAQAcAAALgLQALgLAAgfQAAgfgLgLQgLgLgcAAIgXAAg");
	this.shape.setTransform(195.7,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002F53").s().p("AhCCYQgYgYAAgtIAAkCIA7AAIAAEFQAAAmAfAAQAgAAAAgmIAAkFIA7AAIAAECQAAAtgYAYQgYAYgrAAQgqAAgYgYg");
	this.shape_1.setTransform(171.1,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002F53").s().p("AAnCtIhLjXIgBAAIAADXIg1AAIAAlZIA3AAIBHDFIABAAIAAjFIA2AAIAAFZg");
	this.shape_2.setTransform(136.5,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002F53").s().p("AhDCbQgWgZAAgpIAAixQAAgnAWgYQAYgaAqAAQApAAAZAcQAWAaAAApIAAAWIg5AAQAAglgIgPQgHgNgSAAQgaAAAAAmIAACxQAAAkAcAAQARAAAHgLQAHgLAAgaIAAghIglAAIAAguIBhAAIAACuIgdAAIgLgaQgOARgMAHQgOAHgTAAQgkAAgWgXg");
	this.shape_3.setTransform(112.3,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002F53").s().p("AgdCtIAAlZIA7AAIAAFZg");
	this.shape_4.setTransform(93.8,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002F53").s().p("AhCCWQgXgbgCgpIA5gIQACAZAJAOQAKANANAAQAQAAAKgIQAJgIAAgPQAAgXgTgWQgIgJgggcQg9gyAAg2QAAgpAYgXQAYgWArAAQAkAAAWAXQAUAXAFAmIg5AGQgBgUgLgKQgIgIgMAAQgcAAAAAiQAAATATAVQAGAHAiAeQA9A0AAAzQAAAqgaAYQgaAXgpAAQgoAAgZgcg");
	this.shape_5.setTransform(76.3,20.9);

	this.arrow = new lib.ctaarrow();
	this.arrow.parent = this;
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctalabelsignup, new cjs.Rectangle(0,3.1,205.3,36), null);


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


(lib.ctasignupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.parent = this;
	this.cta_label.setTransform(334.8,41,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,1,209,40);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.parent = this;
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctasignupon, new cjs.Rectangle(0,0,600,70), null);


(lib.ctasignupoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.parent = this;
	this.cta_label.setTransform(334.8,41,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();
	this.cta_bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctasignupoff, new cjs.Rectangle(0,0,600,70), null);


(lib.ctafindoutmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta_on.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta-on
	this.cta_on = new lib.ctasignupon();
	this.cta_on.parent = this;
	this.cta_on.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.cta_on).wait(1));

	// cta-off
	this.cta_off = new lib.ctasignupoff();
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
				/*.to(root.athlete_1, 0.6, {
					x: '-=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')
				.from(root.athlete_2, 0.6, {
					x: '+=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.75')*/
				
		
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
			
			.to(root.athlete_1, 0.5, {
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
	this.text_3.cache(43,370,504,243);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.parent = this;
	this.athlete_1.setTransform(502.1,684,1,1,0,0,0,202,379.9);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.parent = this;
	this.text_2.cache(115,25,367,279);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.parent = this;
	this.text_1.cache(80,25,428,276);

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
p.nominalBounds = new cjs.Rectangle(90.1,599.9,1035.2,1334);
// library properties:
lib.properties = {
	width: 600,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img_athlete.png?1481825783969", id:"img_athlete"},
		{src:"images/img_facilities.png?1481825783969", id:"img_facilities"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;