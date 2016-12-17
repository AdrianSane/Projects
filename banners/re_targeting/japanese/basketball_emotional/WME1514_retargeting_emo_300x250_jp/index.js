(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 500,
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
p.nominalBounds = new cjs.Rectangle(0,0,504,375);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,375);


(lib.img_facilities = function() {
	this.initialize(img.img_facilities);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,375);


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

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3F3Qg6goAAhDQgBg4AxgoQAxgoBEABQBJAAA3AwQA0AvANBDQAwgUAcgnQAdgpAAg1QAAhGgxgqQgygnhSAAQhigBheAkQhYAjg1A0Qg0AwglArIhFhEQA3g4CeiWQCUiNBnhhQg7AHkHAMQgCAFgGAFQgHAEgGABIgKhvQBmAACUgGQCbgHAvgHIAPgIIBCBRQgHAHgUAEQgjAchuBiIieCRIAAABQAsgVA6gLQA5gMAzAAQBxAABEA+QBEA/AABtQAAB/hmBKQhhBHibABQheAAg6gngAhLDhQgXARgBAaQAAAhApAQQAeANAvAAQAhgBAngHQgHgwggggQggghgpAAQgfAAgXAQg");
	this.shape.setTransform(533.7,175.3,0.91,0.91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACyGhQg3gHgfghQgeghgBgvIABhbQAAg3grAAQgiAAgrAUQguAVgpAmQiWCUgiApQgPgTg6g3QBfhdFwleQhIAIkhAPQgEAHgDACQgEADgEAAIgJhpQBrgDCTgGQCagIBHgGIAQgJIBLBFQgNAIgLAAQheBQiQCGIAAABQAogUAuAAQAnAAAYAbQAYAbAAApIgDBNQAAA6AhARQAUALA+AAQBLABA4gKQgCA8AFAjQg+AGhCAAQg2AAgrgFgAAAk0QhygShdgFIAUhaQBmAFBsAQQByARBRAWIgYBdQhLgVh3gTg");
	this.shape_1.setTransform(460.9,173.8,0.91,0.91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADREvQhPBUhcA3QgJgOgRgUQgQgUgNgMQBvhABXhoQgdh1gRiyIhcALIgLhWIBggLQgIiEgCiRIByAHQAAANgXADQgCBtAJCGIDdgbIAKBVIjhAcQALBuARBiQAzhTAhhhIBnAfQgFAMgTgBQg2CMhTBvQAnCKAsAAQAfAAAEikQAPAQASAPQAUAPAQAHQgLB2gZAqQgYApg2AAQhTAAg5iUgAj2HDIAAimIjYAAIAAhSIDYAAIAAhIIiwAAIAAleIG8AAIAAFeIi1AAIAABIIDSAAIAABSIjSAAIAACmgAijA8IBqAAIAAhGIhqAAgAlYA8IBmAAIAAhGIhmAAgAijhOIBqAAIAAhHIhqAAgAlYhOIBmAAIAAhHIhmAAgAh0kBQAXgmAZg2QAYg1APgsIBnAjQgGAKgSAAQgTApgaAwQgbAzgXAhgAE6k5QgegvgggnIBGglQAiAnAdAtQAgAuAOAhIhKArQgNgjgegwgAmllAQgRgsgXgpIBLgYQAXAmAUAsQAUAuAGAgIhQAcQgFgfgTgwgAj+lXQgMgwgPgoIBNgRQAQAmAOAvQAMAuAEAhIhSAVQgDghgLgvg");
	this.shape_2.setTransform(378,174.3,0.91,0.91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpF7QhQg5ABiOQAAgWADgxQhWgEgrgQQhNgcAAhEQABhEBQg9IBIAkQgdASgRAWQgRAUAAASQAAAbAoAKQAXAHA8ABQAOiIAHg4QgzgFgzgMQg2gNgmgTIAUhZQBQAmBoAMQAQiAAEglICCAPQgDASgbAEIgXCIQAnACAuAAQA6AAAogDIgEBZQgqADg1AAQgzAAgtgDQgNBngIBVQBxgCBcgNIABBZQhlALhwAAQgFAyAAAWQAABYAyAiQAoAbBTABQA/AAA6gRQApgKAVgcQAWgbgBgoQAAhNhJhaQAygQAmgQQBXB2AABiQAAB7iFAvQhGAYhpAAQh7AAg+gsg");
	this.shape_3.setTransform(294.1,173.8,0.91,0.91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah6EpQhXhMAAiDQAAhbBQhuQBPhsB3hQQlZAah8ANQgCAFgIAEQgGAFgHABIgKhzQA1AAAsgCQBjgIDogPQEKgQBhgDIABBmQhBgCgoAJQgwALg0AjQhmBChJBaQhTBkAABSQAABdBNA1QBLA2CnAUIguBgQjGgahdhSgADfgxQglgogcgXIArgkQAhAZAjAmQAjAmAVAfIgvAjQgTgbgkgpgAFOiEQgkgpgfgYIArglQAjAcAiAjQAkAlATAfIguAmQgUgdgigmg");
	this.shape_4.setTransform(214.4,177.2,0.91,0.91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AidFeQhVgTgtg2QgpgxAAhFQAAg1Aag4QAZgyArgrIBSAmQgmAjgUAnQgVAoABAkQAAApAaAeQAcAhA2AMQA2AKBcAAQCoAACBgbIAIBjQg6AKhSAFQhLAFhOAAQiKAAg3gNgAh7iVQAfgaApgbQAqgcAegSIAAgBQgoAGhiADQhWADhQgBQAAhIgCgWQBGACB4gDQB5gCBBgFQBkgGBNgQIAJBkQhRAKhoA5QhLApg7Axg");
	this.shape_5.setTransform(137,175.5,0.91,0.91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AklGTQhfgwgChrQgBiMD1h/QgZgxgKhaQgKhYABigICMALQgDAUgcADQgBB8AFBDQAFBOARAnQB2g2Cng4IAiBvIgJABQgMAAgKgGQjpBCiIBKQibBXABBTQAAA7A/AcQA6AZBzAAQC6AACXgYIAJBhQg4AIhXAFQhiAFhtABQiagBhRgqgACckgQgggoghgdIAxgkQAiAdAgAoQAfAlAUAiIg0AkQgTgigeglgAEklUQgfgmgggdIAuglQAkAfAfAkQAfAnASAgIgxAlQgTghgfgmg");
	this.shape_6.setTransform(64.6,172.2,0.91,0.91);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYD+QgggZAAgqQAAgtAmgaQAjgZAvAAQASABAcAFIgIiJIg4ACIhZAAIgBg5QAWACAygBQAzAAAUgCQgDhVgCg8IBQADQgBALgOACIACB8QA/gIAzgPIAFA8QgrANhLAHIAJCdQBGAfAxAsIggA4QgngogvgXQgCA0gbAYQgaAYg1AAQg2gBgigagAgsCYQgWALAAAXQAAAVAUALQATAKAbAAQAcAAAOgOQAMgPAAgdIgBgSQgagKgaAAQgaAAgTAKgAkOCrQgHg8AAhDQAAhvAhiqIBPAQQgCAJgPACQglCEABCaQgBA3AEAWQAXg/AVgvIAjAmQgiBCgVA9QgGAPAAANQAAAMAFARIg6AFQgNghgHhCgAB2jXIAcgTQArApAVArIgeATQgWgugogmgAC7kDIAbgUQArAqAUAqIgdATQgVgpgogqg");
	this.shape_7.setTransform(543.7,96,0.91,0.91);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiWEOIAAjhQgPAcgcAjQgdAkggAfIgdg4QAmgiAlguQApgxASgpIACgxQgwAJg9ABIgBg7QBJAAAngJIAEhuIBTAFQgCAKgPADQgFAogCArIAXAJQgQAagOA4QAxgtAugbQAxgaAjAAQAuAAAXAeQAYAeAAA3IgBAXQgLB1AAAwQAAAeAFAKQAFAOAQAAQAOAAAXgMQAXgMAUgRQABAcAGAoQg2AmgrgBQgrAAgTgaQgRgYAAg3QAAgTAGhWIAFhSQAAhCgqAAQgfAAguAdQguAegtAwIABESg");
	this.shape_8.setTransform(489.4,97.5,0.91,0.91);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiTDrQA7gUAmgfQAmgeAMgjIAAAAQgHAJgNAGQgNAGgOAAQgqAAgggeQghggAAgwQABgvAigjQAjghAtAAQAdAAASANIAAgGIgDg6QjYAGg0ADIgBg4IELgIIgDhbIBTADQgBAMgQACIABBJIDGgGIAAA7QhbgBhpADIAEB2QAIAXAAAqQAABYg3A/QguA2hSAgQgPgUgegcgAhPgRQgTARABAeQAAAbARASQARARAYAAQAbAAAOgUQAPgRAAgaQAAhAg0gBQgbAAgRATg");
	this.shape_9.setTransform(437.2,97.7,0.91,0.91);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhYD2QgsgXABg0QgBglAugpQAnglBGgkQgFgsgeAAQhDAAhJBRQgeAhgkAiIgrgqQA/g3ASgZQAWgYASgkQATgmAJghIgcABIhjgBIAAg3IBqACIAlgBQAKgwAFgkIBNAIQgCAJgNACQgEAdgKAiQAlgBAzgIQA7gKAygQIAKA6QhVAbiKAFQgUA/gRAYIABAAQASgQAZgJQAZgKAVAAQAdAAAUAUQAUAUAGAkIBQghIBPgeIAYA/IgEABQgFAAgGgDQhTAXhLAeQACAbAAAUIgCA3Ig+AEQAEgtgBglQgtAXgbAYQgeAaAAAWQAAAuBxAAQBfAAA6gIIABA5QgxAFhqAAQhYAAgogWg");
	this.shape_10.setTransform(388.4,97.1,0.91,0.91);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjWDpQCDgwBNhVQBLhXAbiDIlqAAIAAg7IGBAAIAEgCIA4AoQgEAFgFADQgnCnhUBiQhOBfiQA3QgSgdgVgWgACZipQgTgTAAgcQAAgcAUgUQATgTAcAAQAbAAAUATQATAUAAAcQAAAcgTATQgTATgcAAQgcAAgUgTgACpj4QgNANAAATQAAASANANQANAOATAAQATAAANgOQAMgNAAgSQAAgTgNgNQgNgOgSAAQgTAAgNAOg");
	this.shape_11.setTransform(339.3,95.9,0.91,0.91);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjpCyQCfgxBqhaQBrhYA3iAQAVARAjATQg5B/htBcQhtBgiaA1QgBAKgJAFgAj5i8IAcg1QAwAPAyAWQAyAXAiAWIghA3QhAgshxgog");
	this.shape_12.setTransform(286.7,99.2,0.91,0.91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhAgmIiEAfIgLguICGgeIgch9IBCgGQABAHgNAGIAXBrIC8goIAFgFIAnAbQgCAFgHABQglBfhJBIQgNgMgbgQQAXgXAXgfQAYghAMgaIiSAfIA4D+IgxALg");
	this.shape_13.setTransform(242.6,102.6,0.91,0.91);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBVIjeAcIgHg4IDfgdIgOh4Ii4AYIgHg5IC4gYIgNh0IBOgEQABALgPAEIAJBhICygYIAHA7IiyAWIAOB4IDfgaIAHA3IjgAcIAWC6Ig9AHg");
	this.shape_14.setTransform(193.8,97.6,0.91,0.91);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhOC9Qg3gxAAhTQAAg6A0hGQAxhEBMgzIkqAZQgEAHgLADIgGhKQAoAAAWgCIDTgNQCqgLA7gCIABBCQgpgCgZAFQgfAIghAWQhBAqguA5Qg0A/AAA0QAAA8AwAhQAvAjBqANIgdA9Qh9gRg8g0gACOgfQgXgZgTgPIAcgXQAUAQAXAZQAXAXAMAVIgdAUQgMgQgXgagADVhTQgYgagTgQIAcgYQAWASAWAXQAWAYAMATIgeAYQgLgTgWgXg");
	this.shape_15.setTransform(143.7,99.5,0.91,0.91);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhjDfQg3gMgcgjQgbgfAAgsQABgiARgjQAPggAcgbIAzAZQgXAVgOAZQgNAZABAXQAAAaARATQASAVAiAIQAiAHA6AAQBrAABSgSIAGA/QhNANhuAAQhZAAghgIgAhNhfQAwgmArgYIAAgBQgZAEg/ACQg4ACgygBQAAgugBgOQAsABBOgBQBLgCAqgDQBFgEArgKIAGBAQg0AGhCAlQgvAaglAfg");
	this.shape_16.setTransform(94.4,98.4,0.91,0.91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhjDfQg3gMgcgjQgbgfAAgsQABgiARgjQAPggAbgbIA0AZQgXAVgOAZQgNAZABAXQAAAaARATQASAVAiAIQAiAHA6AAQBrAABSgSIAGA/QhNANhuAAQhZAAghgIgAhNhfQAvgmArgYIAAgBQgZAEg+ACQg4ACgygBQABgugCgOQAsABBOgBQBLgCAqgDQBFgFArgJIAGBAQg0AGhCAlQgwAagkAfg");
	this.shape_17.setTransform(48.1,98.4,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29,70,540,145.5);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkXNuQiLhcAAieQAAiCBzhdQBxheCfAAQCvABCCByQB4BsAdCdQBygtBChcQBFhfAAh9QAAijh1hjQh0hfjAgBQjmAAjgBYQjMBQh+B4QhrBnhlBvIihieQB+iCF0liQFVlFD6jrQhPALkGAOQjBAMjeAIQgDAMgQALQgPALgQADIgXkEQDyAAFYgOQFugQBugSIAigSICcC+QgUARgrAIQhWBCj+DmIl0FTIAAACQBlgwCLgdQCGgbB3AAQEJAACeCTQCgCTAAD/QgBErjtCuQjjCnlsgBQjeAAiHhagAiyIRQg2AmAAA9QAABNBdAmQBIAdBvAAQAjAAAzgFQAvgGAkgHQgPhvhLhLQhMhMhjAAQhJAAg1Alg");
	this.shape.setTransform(293.4,175.9,0.425,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnIO4QgugygpgkQDZhNCLhwQCJhtAyiEIgBAAQgcAkguAWQgwAWg2AAQicAAhzhvQh4h2AAiwQAAi0CBh+QB9h5CoAAQA0AAAuANQAvAOAgAXIgCgZIgHjUIocAQQkjAJieAJIgIjQIHsgOQGWgLBcgFQABgZgGiCQgFiIgDgrIEzAOQgCARgQANQgQAPgdAEIAEELQHHgPEOgDIAADUQlGgEmKANQACBUACCKQAFBNAECEQAgBeAACZQAAFEjNDqQisDIktByQgbglgzg1gAkohDQhCBEAABuQAABkBBBBQA+A9BXAAQBjAAA7hFQA3hBAAhgQAAh3gzg+Qgvg9hjAAQhjAAhBBEg");
	this.shape_1.setTransform(212.4,175,0.425,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AHgO4QgSg8gVgvQBBADBxAAIBtAAQAdAAAMgLQANgLAAgcIAA8SIECAMQgEAQgMAJQgMAKgYADIAAbgQAABZgWAyQgXA0g2AaQhWArkpAAQgGgsgUg+gAnzQfIAAsWIjvAAIAAJmIjAAAIAAsoIGvAAIAAizIocAAIAAjFICqAAQhBgmhOgdQAxhsArixQAnijAZi3IDyA9QgLAZgpAAQgPBhgTBWIDJAAIAAlDIEBAQQgDAagwAKIAAEPIGrAAIAADCImrAAIAADrIH6AAIAADFIn6AAIAACzIG2AAIAAJhQAACEhIAnQg9AhjKAAQgEgngRg1QgOgugTgrQAnACBBAAQBBAAANgDQAPgFAAgVIAAmbIj2AAIAAMWgAs/kxIFMAAIAAjrIj7AAQgpCTgoBYgAE2HrIAAz4ID7APQgCAOgLAJQgMAJgZAFIAATEg");
	this.shape_2.setTransform(122.2,174.8,0.425,0.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlLOJQidhVAAi9QAAiICliXQCUiGEFiHQgIhNgigrQgjgtg4AAQh6AAh7BFQiCBJiMCeQhlByiPCFIiciaQByhmAwguQBYhVAwg8QBMhfBFiGQBHiJAhh4IhoACQj7AAhxgCIAAjMQDPAHC2AAICJgCQAjimAUiSIEcAfQgGAigwAHQgWBxggB2QCRgFC1gcQDcgkC1g8IAnDWQirA1jyAeQjCAYjaAJQhJDog+BZIACAAQBFg6BagiQBcgjBTAAQBrAABJBIQBLBKAXCDQB0gyCyhGIEfhwIBYDoQgFADgJAAQgTAAgTgMQiEAnicA3QilA6iCA0QAHBIAABhQAABggHBsIjkAPQAHhJADhUQADhWgEg4QinBUhkBXQhuBhAABPQAABUBpAqQBpApDSAAQChABCRgIQCZgGBqgOIACDTQipASmQAAQlJAAiYhTg");
	this.shape_3.setTransform(290.4,71,0.425,0.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArvPLIAA+VIXeAAIAAeMIjkAAIAAiMIweAAIAACVgAoTJdIQeAAIAApFIweAAgAoTi6IQeAAIAAo3IweAAg");
	this.shape_4.setTransform(206.7,74.2,0.425,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AllOsQgzgvgkgWQEDjCBjk+QBDjcAAlTIAAsxIPkAAIAAbbQAABZgXAzQgZA0g4AaQhcAqk6AAQgJgugWg8QgXg/gXgnQBGACB/AAQCCAAAXgHQAQgFAFgMQAEgIAAgYIAAnNIppAAQhgHolPD/QgYgggygugAC9jFQAAClgOBxIJOAAIAAljIpAAAgAC9nVIJAAAIAAleIpAAAgAvRJaIAA4tIMAAAIAAVgIo5AAIAADNgAsKDIIFyAAIAAmUIlyAAgAsKmMIFyAAIAAmCIlyAAg");
	this.shape_5.setTransform(119.6,74.3,0.425,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4GjQh6hrAAi5QAAiBBxibQBuiXCphxQhqAGjgATQjTASh3AMQgDAHgKAGQgKAGgKACIgNihQBWAAAzgEQCegMEwgTQF7gYCGgDIABCPQhbgDg3ANQhEAPhKAyQiQBchoB/QhzCNAAB0QAACCBpBKQBtBNDrAcIhBCGQkagkiAhyg");
	this.shape.setTransform(339.3,171.5,0.568,0.568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARHhQG2g+AAkMQAAhwhAhQQhChTh1gfQhYEOiKCrQASAXAkAiIhcBdQghgggTgXQiFBziLAAQhhAAg6hJQg5hJAAh1QAAhtAxhmQA+h9B9hQQgjiJgfjBICogFQAAAKgHAIQgIAKgOADQAOBnAcCQQA7gdBIgRQBJgRBJgCQAngDAiADQAchuAYi1ICzAoQgGASgeACQgWCCgjB/QCjAmBcBzQBbByAAChQAAC1iBByQiCByj/AnQgjhKgbgqgAmyBRQghBIAABIQAABBAZAnQAbApAuAAQBdAABfhbQhNh/g/jQQhKA4gnBRgAjUh6QAwC3BFBzQBmiIBEjeQgPgBgfAAQiJAEhoA5g");
	this.shape_1.setTransform(275.9,168.6,0.568,0.568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApKJGQgXgfgVgSQCShLBeioQg6gqg4gnIgPA1Ihpg5QAtihA+kaIh5AAIAAh4ICRAAQAciMAYiKICWARQgDASgdACQgIAsgoDFICtAAIAVgCIBGAQQgCANgGAKQgbFjheDfQBqBVAwA8IhOBnQgpg3hchPQhiCpigBhQgNgagWgdgAnbBbQBLAuA9AqQBIixAYjwIiaAAQg5D2gVBTgAgXJ6IAAo1IJLAAIAAIvIh+AAIAAg2IlVAAIAAA8gABhHJIFVAAIAAkPIlVAAgAHthTQiIAMmXAcQgCASgUADIgviNIBvgFQAnhlAmiBQAoiEAVhqICjAlQgHASgeACQgbBeglBsQgoBygmBaIFFgPQg2hgg6hOIBmg1QBEBXA5BgQA9BnAXBJIhuA5QgMgigXgyg");
	this.shape_2.setTransform(204.8,169,0.568,0.568);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjGIgQhegzAAhyQAAhRBjhbQBZhRCbhRQgEgtgVgaQgUgbghAAQhKAAhJAqQhPAqhUBfQg/BGhUBOIhdhcQBAg5AhggQA1gyAdglQAug4AohRQArhTAUhIIg/ACQiWAAhEgCIAAh6QBsAEB9AAIBTgBQAXhqAKhRICrATQgFATgcAFQgLA9gVBOQBXgDBsgRQCFgVBsglIAXCBQi7A6kzALQgrCKgnA3IACAAQApgiA2gVQA4gVAwAAQBBAAArArQAuAtAOBPQBGgfBqgqICthDIA1CMIgJABQgMAAgLgGQi6A3ikBCQAEAvAAA3QAAAzgEBHIiJAJQAJhmgDhOQhlAzg7A0QhCA6gBAwQAABkD8AAQDPAACEgQIABB+QhoALjuAAQjEAAhbgxg");
	this.shape_3.setTransform(133.3,168.1,0.568,0.568);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmwIaQD6h4Cfi1QCdi2BTkCImrAAQh0CyitCHQgSgUgggYQgggZgcgRQCIhfBxieQBwidBBi0ICuArQgIAXgiAAQgnBVgrBUIGiAAIAVgJIBtBBQgDAFgHAHIgOAJQhxFTiuDVQimDPkPCJQgyhEgxgkgAEEnMQgyg1grgjIA7g3QAsAiA1A3QAuAxAiAuIhBA3Qgdgqgxg2gAHUnxQgxg1gtgmIA8g1QAvAmAxAzQAyA0AeArIhDA0Qgbgngwg1g");
	this.shape_4.setTransform(65.6,167.1,0.568,0.568);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ao2GwQGAh2EFjbQEEjYCFk2QAsAjBdAzQiME1kJDjQkLDpl0CAQgBALgHAKQgHAKgJAEgAl5ltQhwg0h3grIBGh+QB0AjB4A2QB8A3BQA2IhNCGQhNg1h9g6g");
	this.shape_5.setTransform(336.4,84.6,0.568,0.568);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AppHWIAAiRITTAAIAACRgAnNlFIAAiQIOjAAIAACQg");
	this.shape_6.setTransform(259.6,83.5,0.568,0.568);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ApuhWITdAAIAACSIygAAQgHALgNAIQgNAHgPABg");
	this.shape_7.setTransform(189.8,81.5,0.568,0.568);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AohHkIAUggIAAwzIDIALQgCAcgqAGIAAPiQEPhNDGiMQDWiWB7jVQATAXAjAhQAeAdAZAUQkcHVq4C2QgCAKgHAJQgIAKgJADg");
	this.shape_8.setTransform(117.7,83.1,0.568,0.568);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AluKMIAA0XIDIAMQgCAZgpAJIAAGqIAegqQCBAwCWBDQCaBFBxA4IhUCRQhng6iJhBQiIhAh0gtIAALQg");
	this.shape_9.setTransform(51.8,82,0.568,0.568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.img_facilities_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_facilities();
	this.instance.setTransform(0,0,1.336,1.336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,501.1);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyB+QBGgbApgtQAogvAPhGIjDAAIAAggIDPAAIACgBIAeAWIgFAEQgVBZgtA1QgpAzhNAeQgJgPgMgMgABThaQgLgLAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKAMAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgABbiFQgHAHAAAKQAAAKAHAIQAHAGAKABQALAAAHgIQAGgHAAgKQAAgKgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape.setTransform(523.3,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah8BgQCpg1A7iJQANAKASAJQgfBEg7AxQg6AzhSAdQgBAGgFACgAiGhlIAQgcQA4ARApAbIgRAeQgjgYg9gWg");
	this.shape_1.setTransform(491.9,100.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgigTIhGAQIgHgZIBIgQIgOhDIAjgEQAAAEgGAEIAMA5IBkgWIADgCIAVAPQgCADgDAAQgUAzgnAmQgHgHgPgIQANgNAMgPQAOgSAGgPIhOASIAdCHIgZAGg");
	this.shape_2.setTransform(465.3,102.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAtIh4AQIgEgfIB4gPIgHhAIhkANIgDgfIBjgNIgHg+IApgCQABAGgIACIAEA0IBggNIAEAgIhgAMIAHA/IB5gMIADAcIh4AQIAMBjIggAEg");
	this.shape_3.setTransform(436.1,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhWBpQBMgfAog0QAqgzAWhaIArAOQgCAFgIAAQgaBZgsA0QgtA3hLAjQgOgSgJgIgAh1g6QgJgagKgSIAfgKQAJASAKAaQAJAaADASIgfAJQgDgRgJgagAghh9IAggFQAMAxACAsIgfAFQgCgsgNgxg");
	this.shape_4.setTransform(406.9,100.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiJgSIETAAIAAAfIkFAAQgDAFgIABg");
	this.shape_5.setTransform(377.3,99.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGCYQgDgOgGgQIAfAAQARAAAEgBQAHgDgBgIIAAiQIhsAAIAAgfIBsAAIAAhDIApACQgBAGgIACIAAA5IBsAAIAAAfIhsAAIAACPQAAAegVAIQgNAFgoAAIgHAAgABOA8QgTgdgQgSIAbgNQAlApAeA0IgdARQgMgWgSgcgAiSBdQAmgkAUg3IAeALQgYA+glAjgABVhZQgLgKAAgQQAAgPALgLQAKgKAQAAQAOAAAMALQAKAKAAAPQAAAQgKAKQgMALgOAAQgQAAgKgLgABdiEQgHAHAAAKQAAALAHAHQAHAHALAAQAKAAAIgHQAGgIABgKQAAgKgIgHQgHgHgKAAQgLAAgHAHg");
	this.shape_6.setTransform(348.7,99.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA8BLQghgfgWgTQg6BFg/AlQgHgKgRgQQA9ghA1g8QAug0AYg4IiZAAIAAggICrAAIAHgCIAaAPQgCADgEABQgbBAgkAvQBCA0AxA2IgdAZQgUgYggggg");
	this.shape_7.setTransform(318.2,100.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABnQBugVgBhVQABgqgbgbQgdgcgxAAIgMABIAfAHQgCAGgHAAQgKBVgXAuQgcA0goAAQgZABgPgWQgRgXAAgnQgBg8AsgqQArgqA+AAQBEAAAlAlQAiAiAAA3QAAA3gfAiQgeAfg/APQgMgSgIgKgAhWg4QgaAeAAAnQAAAXAIAPQAIAOALAAQAaAAATgyQASgtAFhDQgqAHgbAig");
	this.shape_8.setTransform(289.3,100.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiKCUIAAknIB9AAIAAB2IheAAIAACxgAhrg0IBAAAIAAgaIhAAAgAhrhkIBAAAIAAgXIhAAAgAA2B1IhZAAIAAAQIgcAAIAAiLIB8AAIAAB6IAYAAQARAAACgBQADgBAAgGIAAiJIhgAAIAAh2ICAAAIAAD/QAAAagQAHQgMAGgvAAQgBgPgJgPgAgjBdIBDAAIAAgcIhDAAgAgjAqIBDAAIAAgaIhDAAgAAqg0IBBAAIAAgaIhBAAgAAqhkIBBAAIAAgXIhBAAg");
	this.shape_9.setTransform(258,100.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AicB3QAYgTATgRIAAhRIgnAAIAAgcIBEAAIAABqQAQAaAiAHQAVAFA4gBQBGAAAsgDQgHAPgDAPQgmACg9AAQg/gBgYgEQgkgIgVgcQgPAQgZAXQAAAEgDACgABLBnQgCgPgGgMIAfABQAGAAAAgHIAAi9Ih9AAIAAA9QAABpggAzQgGgIgTgJQAdgsAAhfIAAhYIC2AAIAADZQAAAUgMAGQgKAGgfAAIgFAAgAgDBOIAAhZIBYAAIAABKIhCAAIAAAPgAATAqIApAAIAAghIgpAAgAgKgbIAAgVIAkAAIAAgYIgiAAIAAgVIAiAAIAAgZIAhACQAAAEgHABIAAASIAoAAIAAAVIgoAAIAAAYIAqAAIAAAVgAiYiGIAZgPQAlAeANAaIgbARQgOgbgigfg");
	this.shape_10.setTransform(226.1,100.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBsQgRgOAAgcIAAgSIAlAAIAAATQAAAKAFAGQAFAFAJAAQASAAAAgdIAAg2QAAgUgRAAQgNAAgIAQIgfAAQADhIAAgxIBhAAIgBAiIg/AAIgCA0IABAAQAHgIAIgDQAEgDAKAAQAsAAAAA9IAAAhQAAAngNARQgNATgeAAQgYAAgQgNg");
	this.shape_11.setTransform(196.6,100.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAKQgWgVgPgOIAZgWQAmAiAgAkIgbAZQgLgPgUgXg");
	this.shape_12.setTransform(175.1,110.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BAIAAgOIAmAAIAAAQQAAAYASAAQASAAAAgdIAAgSQgBgTgHgHQgJgHgQAAIAAgfQAQAAAIgHQAHgIAAgVQAAgRgEgIQgEgHgIAAQgRAAAAAYIAAAKIglAAIAAgLQAAgZAOgPQAPgPAZAAQAZAAAOASQAOARAAAaQAAAWgFALQgGAOgPAIQASAHAGANQAFAMAAAZQAAAkgOARQgPARgcAAQg3AAAAg6g");
	this.shape_13.setTransform(162.2,100.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAKQgWgVgPgOIAYgWQAoAjAfAjIgbAZQgLgPgUgXg");
	this.shape_14.setTransform(140.8,110.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBB4IAAi7IggAAIAAgWQAegPARgPIAUAAIAADvg");
	this.shape_15.setTransform(128.4,100.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AvNCQQgyg0AAhcQAAhaAyg1QAyg1BUAAQBKAAAuAzIAAgrIApAAIAACFIgsAAQgDgvgegcQgegbgxAAQg+AAgkApQglAqAABHQAABLAlArQAkAqBAAAQBWAAAThgIA1AAQgHBCgpAjQgpAjhJAAQhXAAgyg1gASRC9IAAgnIA/AAIAAh4Ih7izIgfAAIAAgnICPAAIAAAnIg2AAIBgCIIBeiIIg3AAIAAgnICOAAIAAAnIggAAIiACzIAAB4IA/AAIAAAngAN7C9IAAgnIA0AAIAAkrIgDAAIh8FSIgrAAIh6lSIgBAAIAAErIAxAAIAAAnIiWAAIAAgnIAxAAIAAkrIgxAAIAAgnICLAAIBtE2IBuk2ICLAAIAAAnIg0AAIAAErIA0AAIAAAngAC4C9IAAgnIA0AAIAAkrIg0AAIAAgnIFAAAIAAByIgnAAIAAhLIiyAAIAACAIBXAAIAAg4IAnAAIAACTIgnAAIAAg2IhXAAIAACGICyAAIAAhRIAnAAIAAB4gAjKC9IAAgnIA0AAIAAkrIg0AAIAAgnICoAAQBfAAAzAxQA0AxAABaQAABbg0AxQgzAxhfAAgAhiCWIBAAAQBDAAAngoQAmgoAAhGQAAhHgmgnQgngnhDAAIhAAAgAmDC9IAAgnIA2AAIgghUIirAAIgjBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA5AAICPFSIAqAAIAAAngAl9AbIhFiiIhFCiICKAAgAyOC9IAAgnIA2AAIgghUIiqAAIgkBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA6AAICPFSIAqAAIAAAngAyIAbIhFiiIhFCiICKAAg");
	this.shape_16.setTransform(401.6,50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AGZDDQhaAAgnghQgzgrAAhyQAAhyA0gvQAsgmBkAAQBLAAArAFQAWACAGACIgHB4Ig0AAIgHg6QgegEgcAAQgnAAgTAOQgkAaAABRQAAB8A1AHQANACA3gBIAAhOIgxgNIAAgwICQAAIAIDQgAAkC8IAIg6IAdgFIgRi8IhQD7Ih2AAIhYj8IgSC9IAdAFIAIA6IiWAAIAHg6IAegFIAbj7IgegFIgHg6IC3AAIBSDsIBMjsIDDAAIgHA6IgeAGIAYD6IAdAFIAHA6gApAC8IAIg6IAdgFIAAj6IgdgGIgIg6IC9AAIgHA6IgdAGIAAD6IAdAFIAHA6g");
	this.shape_17.setTransform(182.5,50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjHDEIBElXIgFFTIBAmXIATG0IA1oJIA1IJIARm2IBDGaIgGlUIBFFXIjIBpg");
	this.shape_18.setTransform(82,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// black
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Egu3AK8IAA13MBdvAAAIAAV3g");
	this.shape_19.setTransform(300,70);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

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
	this.instance.setTransform(0,0,1.351,1.351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,608.1,506.8);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.setTransform(0,0,1.336,1.336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,673.5,501.1);


(lib.ctalabelsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032E53").s().p("AhTCJQBggFAqgRQApgSABglQAAgYgQgOQgRgPgeAAQgoABgsAVQgoATgKAUIglgRQAHgFAHgtQAJgwAAg0IAxAHQgCAFgIACQgGBWgKAPIABAAQAagRAlgMQAkgMAhAAQAsAAAaAWQAaAWAAAoQgBA3gvAaQgxAbhvAFQgIgagFgJgAhNiHIALgkQBeALA1AWIgMAlQg3gWhbgMg");
	this.shape.setTransform(256,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032E53").s().p("Ag+CKQBVgCAqgPQAvgRAAgmQAAgXgPgOQgPgNgeAAQgaAAgeAOQgjAQgSAaIglgRQAJgKAIgjQAJgiAEgsIhWAAIAAgmIBaABQACgcAAgnIA0AEQgBAHgMACIgCA1QAcgBAqgHQAsgGAggJIAGAnQhBAQhcAFQgIBFgHARQAUgQAbgIQAcgKAYAAQArAAAZATQAZAXAAAoQAAA4g2AbQgxAYhjABQgFgVgGgOg");
	this.shape_1.setTransform(222.2,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032E53").s().p("Ag9CMQgjgIgSgVQgQgUAAgbQAAgrAlglIAhAPQgfAdAAAeQAAAQAKAMQAMAOAVAEQAWAEAjAAQBCAAA1gKIADAnQgvAIhGAAQg1AAgWgFgAgwg7QAbgVAdgSQghAFhXgBIgBgmQAcABAwgBQAvgBAagCQAsgDAbgGIAEAoQghAFgqAWQgeARgWATg");
	this.shape_2.setTransform(190.3,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032E53").s().p("AghCUQgUgRAAgaQAAgcAYgRQAVgPAdAAQAMAAARAEIgFhZIhaACIgBgkQA0ABAlgCQgDhAAAgYIAzACQgBAGgJACQAAAoABAjQAogFAfgJIAEAlQgZAIgxAEIAFBmQAsATAfAbIgUAkQgYgZgegPQgBAfgPAPQgQARglAAQggAAgVgQgAgHBTQgOAIAAAOQAAANANAGQAJAHATAAQAiAAAAgkIgBgMQgQgGgQAAQgSAAgKAGgAieBfQgEglAAgrQAAhFAUhqIAyAJQgBAHgKAAQgXBWAABbQAAAmADANQAIgYATguIAWAZIgVArQgRApAAANQAAAHADALIglADQgIgUgEgqg");
	this.shape_3.setTransform(157,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032E53").s().p("AAUCUIAeAAQAFAAABgFIAAidIhVAAIAAAdIg1AAIAABhIA1gIIABASQATgLAygiIAKAbQgiAbgeAWQABAFgEADIgPgaIiCAXQgBAEgFACIgLgnIA/gIIAAhmIg7AAIAAgdIA7AAIAAglIglAAIAAgFIgGAGQgKgOgPgKQAsgsAag9IAqAGQgCAGgGAAIgBABQAuAlATAWIgWAdQgQgVgqglQgTAfgRAYIBaAAIAAAeIgpAAIAAAlIA1AAIAAggICPAAIAAgeIh1AAIAAgdIB1AAIAAgdIh9AAIAAgfICfAAIAAB3IAgAAIAAAgIhaAAIAAANQAFAbAOAcQAXgZARgdIAhAWQgCAEgHgBQgPATgcAbIgVgQQAaA1AxAXQgNANgKASQgsgZgbg5IAAA/QAAAYgMAHQgLAGgmAAQgBgMgIgUgAimAkIAZgHQANAlAEAhIgaAHQgEghgMglgAhLBdQAMghAFghIAiALQgCAEgHAAQgIAhgLAagAgVAUIAXgPQAaAXAOAaIgaASQgLgYgagcg");
	this.shape_4.setTransform(120.2,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032E53").s().p("AioCvIAAgeIBlAAQgKgagMgUIAWgHIgoAAIAAhlIDXAAIAABlIgqAAIAdAJQgCAEgHAAQgIAQgOAYIBoAAIAAAegAggCQIgBABIA+AAQAPgdAIgYIhtAAQAUAdAFAXgAhIA/ICPAAIAAgsIiPAAgAi0gQQAigPAfgdQgTgVgcgQIAUgVQAeASASASQAVgYAMgZIheAAIAAgeIByAAIAGgBIAZAMQgCADgDACQgQArggAlIB9AAQglgugWg2IAfgJQAJAWAOAXQAcgWAQgUIAgAYQgCADgHgBQgWATgcAUQAJANAOAOQAcgZATgVIAfAXQgCADgHgBQgYAWgYASQAcAYAjAPQgPAMgKAQQgvgUgngsIAAAXIiOAAIAAgVQgnAoguAXQgKgNgNgLg");
	this.shape_5.setTransform(83.2,21.1);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.1,269.9,36.5);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient over
	this.instance = new lib._25Multiply50Image();
	this.instance.setTransform(300,63,2,1.999,0,0,0,150,31.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(16,113,183,0.4)").s().p("AmSM5IMl5xIAAAPInMZig");
	this.shape.setTransform(517.5,333.8,1.994,1.994);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(16,113,183,0.4)").s().p("ApxTiIktmmIAAlBIVl7bMgRNAgeMAXmggfIA+AAIrzaEImAM/g");
	this.shape_1.setTransform(184.8,249.2,1.994,1.994);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(16,113,183,0.4)").s().p("AtsTiMAZRgnDICIAAMgPCAnDg");
	this.shape_2.setTransform(317.9,249.2,1.994,1.994);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(16,113,183,0.4)").s().p("Ap/R3MAT/gjtMgLfAjtg");
	this.shape_3.setTransform(440.7,270.5,1.994,1.994);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(16,113,183,0.4)").s().p("AgDACIAHgSIgHAhg");
	this.shape_4.setTransform(599,168.7,1.994,1.994);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(16,113,183,0.4)").s().p("AADgLIAFAAIgPAXg");
	this.shape_5.setTransform(141.3,501,1.994,1.994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 300x250
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#002D54","#006FBA"],[0.514,1],8.3,-78.2,8.3,185.1).s().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHg");
	this.shape_6.setTransform(300,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,503.5);


(lib.ctasignupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(272.8,41,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,1,274,41);

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
	this.cta_label.setTransform(272.8,41,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,70);


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
				.to(root.athlete_1, 1.2, {
					x: '-=' + (stageWidth + 75),
					ease: Strong.easeOut
				}, 'frame2')
				.from(root.athlete_2, 1.2, {
					x: '+=' + stageWidth,
					ease: Strong.easeOut
				}, 'frame2+=0.35')
				
		
			// transition to end frame 
			.add('frame3', '+=1.5')
				.to(root.text_2, 0.5, {
					alpha: 0,
					ease: Strong.easeOut
				}, 'frame3')
			.to(root.athlete_2, 0.5, {
					alpha: 0,
					scaleX: 1.5,
					scaleY: 1.5,
					ease: Strong.easeIn
				}, 'frame3')
			.to(root.facilities, 0.5, {
				y: stageHeight,
				alpha: 0,
				ease: Strong.easeOut
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
	this.clickthrough.setTransform(300,250,2,2,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough, 0, 1, 2, false, new lib.clickthrough(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough).wait(1));

	// footer
	this.footer = new lib.footer();
	this.footer.setTransform(150,395,1,1,0,0,0,150,35);

	this.timeline.addTween(cjs.Tween.get(this.footer).wait(1));

	// cta
	this.cta = new lib.ctasignup();
	this.cta.setTransform(0,292);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// text: headline 3
	this.text_3 = new lib.textheadline3();
	this.text_3.setTransform(300,142.1,1,1,0,0,0,300,142.1);
	this.text_3.cache(27,68,544,150);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// athlete_2
	this.athlete_2 = new lib.imgathlete2();
	this.athlete_2.setTransform(486.2,250,1,1,0,0,0,486.2,250);

	this.timeline.addTween(cjs.Tween.get(this.athlete_2).wait(1));

	// athlete_1
	this.athlete_1 = new lib.imgathlete1();
	this.athlete_1.setTransform(521.9,250,1,1,0,0,0,521.9,250);

	this.timeline.addTween(cjs.Tween.get(this.athlete_1).wait(1));

	// text: headline 2
	this.text_2 = new lib.textheadline2();
	this.text_2.cache(-2,-2,604,504);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// text: headline 1
	this.text_1 = new lib.textheadline1();
	this.text_1.cache(-2,-2,604,504);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// image: facilities
	this.facilities = new lib.img_facilities_1();
	this.facilities.setTransform(224.5,187.5,1,1,0,0,0,224.5,187.5);

	this.timeline.addTween(cjs.Tween.get(this.facilities).wait(1));

	// background
	this.bg = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,673.5,506.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;