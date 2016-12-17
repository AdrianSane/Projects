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
	this.shape.graphics.f("#FFFFFF").s().p("AicHFQg6guAAhLQAAhQBEgvQA9gqBVgBQAgAAAyALIgNj1IhlADIieAAIgChlQAjADBbgCQBbgBAmgDQgFhqgFiWICPAFQgBASgZAFQgBBFADCXQBxgNBagbIAKBqQhNAYiEALQAGCTAICHQA7AZA4AjQA3AjAqAlIg6BlQhDhIhTgqQgGBdgvArQguAqhfAAQhiAAg6gugAhPEOQgoAVAAAoQAAAkAkAUQAhATAzAAQAxAAAXgaQAXgZAAg0IgBgiQgtgRguAAQgxAAgiASgAnhEvQgMhpAAh4QAAjHA7ktICLAcQgBAIgJAGQgIAFgLABQgqCYgOCfQgJBWABBwQgBBmAGAjIAnhlQAZg/APggIA9BEQgZAygcBAQgdBDgQAsQgKAcAAAXQABAYAHAcIhnAHQgWg6gNh2gAETk1QgfgqghggIAxgjQBNBLAlBKIg1AjQgSgkgcgngAFMnOIAwgkQBMBJAlBMIg0AjQgmhLhHhJg");
	this.shape.setTransform(496.2,482.4,0.809,0.809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkMHfIAAmPQgcAygxA/QgyA/g4A3Ig1hkQBEg7BBhTQBJhYAghKIAChWQggAHg0AFQg3AGg2ABIgChqQA7AAA6gFQA2gEAdgHIAHjEICTAKQgCASgcAFQgJBKgEBJIAoAPQgaAvgaBlQBYhSBTgvQBWguBAAAQBPAAArA1QAqA1AABiIgCAqQgTDJAABbQAAA1AIAUQAKAYAdAAQAXAAAqgWQAqgWAigdQAAAVAFAqQAEAmAEATQgrAfgtASQgwATglAAQhMAAghguQgegsAAhiQAAghAJiZIAJiTQAAg7gUgeQgTgdgkAAQg3AAhRA0QhTA1hPBWQAAGnABBAg");
	this.shape_1.setTransform(410.8,484.7,0.809,0.809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkFGiQBoglBDg2QBDg1AXg/IAAAAQgNARgWAKQgXALgaAAQhMAAg4g2Qg5g5AAhUQgBhWA/g9QA8g7BRAAQA1AAAgAYIgFhyQl2AKhnAGIgDhlIHdgOIgChLIgEhWICUAGQgBAJgHAGQgJAHgOACQAAAxADBQQDbgHCDgCIAABnQidgCi/AGIACBrQADAsACA6QAPArAABLQAACchjByQhSBgiRA3QgggqgwgrgAiOggQggAgAAA2QAAAwAfAfQAeAeAqAAQAxAAAbgiQAbgfAAgvQgBh0heAAQgwAAgfAhg");
	this.shape_2.setTransform(328.7,485,0.809,0.809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifG2QhMgpAAhcQAAhCBQhIQBHhCB+hBQgEgkgRgUQgRgXgaAAQg7AAg7AjQg/AhhEBMQgxA3hFBBIhLhLIBOhHQArgpAXgdQAlgtAhhBQAihCAQg6IgyABIiwgBIAAhjQBxAEBLAAIBDgBQAShYAIg/ICJAQQgDAQgXADQgMA8gOAzQBFgCBYgOQBqgRBXgdIATBoQiWAuj4AKQgiBugfAsIABAAQAhgbAsgRQAtgRAnAAQAzABAjAiQAlAkALA/QA4gYBWgiICLg2IAqBwIgGABQgKAAgJgEQiYAsiCA1QAEAhAAAxQAAAvgEAzIhuAIQAIhbgEg3QhPApgxArQg1AuAAAmQAABRDKAAQCmAABrgNIABBlQhQAJjDAAQieAAhJgng");
	this.shape_3.setTransform(252.1,484,0.809,0.809);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlYHLQgUgbgRgRQDphWCHiXQCJibAvjqIqFAAIAAhpIKtAAIAIgEIBjBIQgFAHgLAGQhFEriUCvQiNCokABiQgLgTgVgbgAERkuQgigigBgxQAAgzAkgiQAjgiAwAAQAyAAAiAjQAjAjgBAxQABAxgjAiQgiAigyAAQgxAAgjgigAEtm7QgXAYAAAiQAAAhAXAXQAXAXAhAAQAiAAAXgYQAWgXAAggQAAgigXgYQgXgXghAAQghAAgXAXg");
	this.shape_4.setTransform(174.9,482.2,0.809,0.809);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmeE8QEZhWC+ihQC/idBhjjQAiAbBCAlQhmDhjCClQjDCrkQBeQAAAHgGAIQgEAHgIADgAkTkKQhTgnhXgfIA0hcQBUAaBZAnQBaApA7AnIg5BiQg4gnhbgqg");
	this.shape_5.setTransform(92.2,487.4,0.809,0.809);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3F5Qg7goAAhEQAAg4AxgoQAxgoBDAAQBLAAA3AyQA0AuAMBDQAxgTAcgnQAegpAAg2QAAhGgygqQgygohSAAQhjAAhfAkQhYAig2A0Qg4A3ghAlIhFhEQA2g4CgiXQCSiLBqhlQg6AIkJAMQgCAFgGAEQgHAFgHABIgJhvQBmAACVgHQCbgGAwgIIAPgHIBDBRQgJAHgSAEQgmAchsBiIifCSIAAABQArgUA7gNQA6gMAzAAQBxAABEA/QBFA/AABtQAACBhmBKQhhBHidAAQheAAg6gmgAhLDjQgYAQAAAaQAAAiAoAQQAgAMAtAAQAiAAAngIQgHgwggggQgggggpAAQggAAgWAQg");
	this.shape_6.setTransform(504.6,591.8,0.809,0.809);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACzGjQg3gHgggiQgegggBgwIAChbQAAgbgLgOQgLgOgWAAQgiAAgrATQgvAWgoAmQiVCSglAsQgPgTg5g3QBRhQF/ltQhUAIkXAPQgDAGgDADQgEADgFAAIgIhqQBrgDCTgGQCcgHBHgGIAQgKIBLBGQgLAHgNAAQhiBUiNCEIAAABQApgVAuAAQAmAAAYAbQAYAbAAAqIgCBNQAAA7AhARQAUALA+AAQBNAAA2gKQgBA9AEAjQg6AGhGAAQg5AAgogFgAAAk1QhxgShfgGIAVhaQBmAFBsAQQBzARBRAXIgYBdQhLgVh4gTg");
	this.shape_7.setTransform(440.1,590.4,0.809,0.809);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADSExQhPBUhdA3QgJgOgRgUQgQgVgNgMQBvg/BYhpQgdh1gSi0IhcAMIgLhXIBggLQgIiFgBiRIByAGQAAAOgXADQgCBuAJCGIDegbIAKBVIjiAcQALBxASBgQAyhUAihgIBnAfQgFAMgUgCQg0CMhVBxQAnCLAtAAQAfAAAEilQAPAQASAPQAUAPAQAHQgLB2gZArQgYApg3AAQhTAAg5iUgAj4HFIAAinIjYAAIAAhSIDYAAIAAhJIiwAAIAAlgIG+AAIAAFgIi1AAIAABJIDSAAIAABSIjSAAIAACngAikA8IBqAAIAAhGIhqAAgAlaA8IBnAAIAAhGIhnAAgAikhOIBqAAIAAhIIhqAAgAlahOIBnAAIAAhIIhnAAgAh1kCQAYgnAYg2QAZg2APgsIBnAkQgFAKgTAAQgTApgbAwQgaAzgXAigAE7k6QgdgwgggnIBFglQAiAnAeAtQAgAvAOAhIhLArQgNgjgegwgAmmlBQgSgtgXgpIBLgYQAYAmATAsQAUAuAHAhIhRAcQgFgggSgvgAkAlZQgLgwgQgoIBOgRQARAmANAwQANAuAEAgIhTAWQgDghgMgwg");
	this.shape_8.setTransform(366.3,590.9,0.809,0.809);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhpF9QhQg6AAiOQAAgWAEgyQhXgDgrgQQhOgdAAhEQAChFBQg8IBIAkQgdASgRAVQgQAVgBASQAAAbAoALQAXAGA9ACQAOiMAHg2Qg0gFgzgMQg3gNgmgTIAWhZQBQAmBnAMIAUimICEAPQgDASgcAEIgXCIQAoADAtAAQA7AAAogEIgEBaQgqADg2AAQgzAAgtgDQgNBogJBVQBygCBdgNIABBZQhgAMh2AAQgFAxAAAXQAABYAzAiQAnAcBUAAQBCAAA3gRQApgKAWgcQAVgbAAgnQAAhNhKhcQAzgQAlgQQBYB4AABhQgBB9iFAuQhGAYhqAAQh7AAg+gsg");
	this.shape_9.setTransform(291.7,590.4,0.809,0.809);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah7ErQhXhMAAiFQAAhbBRhvQBOhrB4hRQmbAhg8AGQgCAFgHAFQgHAEgHABIgKhzQA6AAAogDQBsgIDggOQEMgRBggCIABBmQhBgDgnAKQgxALg0AjQhnBChJBbQhTBkAABTQAABdBMA1QBMA2CoAVIgvBfQjHgZhdhSgADggxQglgogcgXIArglQAhAZAjAnQAkAmAUAfIgvAjQgSgbglgpgAFQiFQglgogfgZIAsglQAkAcAhAkQAkAlATAfIgvAlQgTgcgigng");
	this.shape_10.setTransform(220.9,593.5,0.809,0.809);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AidFgQhXgTgtg2QgpgyAAhFQAAg1Abg5QAZgyArgrIBSAmQglAjgVAoQgVAoAAAkQAAApAbAeQAcAhA3AMQA3AKBbAAQCpAACCgbIAIBjQh5AViugBQiKAAg3gMgAh7iWQAfgZApgcQApgcAfgSIAAgBQgnAGhjADQhVAChSgBQAAhHgCgWQBHABB4gCQB6gCBAgFQBtgHBGgQIAIBkQhSAMhoA5QhLApg7Axg");
	this.shape_11.setTransform(152.2,592,0.809,0.809);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AknGVQhfgxgChrQAAhLBDhGQA8g/B3g9QgagwgKhbQgKhYABiiICNAMQgDAUgcADQgCB9AFBDQAGBOARAoQBwg0Cug7IAiBwIgJABQgMAAgKgGQjqBCiJBLQibBXAABTQABA7A/AcQA6AZB0AAQC3AACbgYIAJBiQiFASjaAAQibAAhSgqgACckhQgggoghgdIAyglQAiAeAgAnQAfAlAUAjIg1AkQgSgigfglgAEllWQgfgmgggeIAugkQAkAfAfAlQAgAmASAhIgyAlQgTghgfgng");
	this.shape_12.setTransform(88,589,0.809,0.809);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiXhaIkzBIIgbhtIE4hDIhAklICZgPQABAKgHAHQgGAHgPAHIA2D6IG4hfIALgKIBcBAQgGAKgOADQgrBthEBnQhCBhhRBUQgfgdhAglQA4g2A2hKQA5hOAbg+IlWBLICCJSIh0AYg");
	this.shape_13.setTransform(496.8,381,0.809,0.809);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhADHIoGBDIgSiEIIJhEIggkZImuA3IgQiFIGug5IgfkOIC4gJQACAXgkAMIAWDjIGgg4IARCIImfA1IAgEZIIJg/IAQCDIoKBCIAyGxIiQAQg");
	this.shape_14.setTransform(396,370.7,0.809,0.809);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai3G6QiAhxAAjDQAAiIB3ikQB0ifCzh3QnyAljIAUQgDAHgLAHQgKAGgKADIgPirQBVAAA8gEQCYgMFTgVQGNgZCPgEIABCYQhggDg6ANQhIARhOA0QiZBhhrCHQh8CVAAB6QAACJBxBPQByBRD3AeIhECOQkogniKh5gAFLhJQg2g8gqghIBAg3QAwAmA1A4QA1A4AdAvIhFA0Qgbgpg3g8gAHwjFQg2g9gtgkIBAg2QA1AqAxAzQA2A4AbAuIhEA3Qgdgrgzg4g");
	this.shape_15.setTransform(292.7,374.6,0.809,0.809);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjpIJQiAgdhDhRQg8hJAAhlQAAhQAohTQAkhKA/hBIB6A5Qg3A0gfA7QgfA7AAA1QAAA+AoAsQArAxBPARQBRAQCJAAQBvAABxgKQB6gKBggUIALCSQi1Aej+AAQjHAAhYgSgAi3jfQAuglA8gpQA+gpAvgbIAAgCQg8AJiTAFQh/AEh2gCQAAhqgDghQBoACCzgDQC1gEBegGQCdgLBrgWIANCTQh5AQibBVQhwA9hWBIg");
	this.shape_16.setTransform(191.1,372.3,0.809,0.809);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjpIJQiAgdhDhRQg8hJAAhlQAAhQAnhTQAlhKA/hBIB6A5Qg3A0gfA7QgeA7AAA1QAAA+AnAsQAqAxBRARQBQAQCJAAQBuAABygKQB7gKBfgUIALCSQi0AekAAAQjHAAhXgSgAi3jfQAuglA8gpQA+gpAvgbIAAgCQg8AJiTAFQh/AEh3gCQAAhqgDghQBpACCygDQC1gEBfgGQCdgLBrgWIANCTQh6AQiaBVQhwA+hWBHg");
	this.shape_17.setTransform(95.8,372.3,0.809,0.809);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,319.7,492,308);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkXNuQiLhcAAieQAAiCBzhdQBxheCfAAQCvABCCByQB4BsAdCdQBygtBChcQBFhfAAh9QAAijh1hjQh0hfjAgBQjmAAjgBYQjMBQh+B4QhrBnhlBvIihieQB+iCF0liQFVlFD6jrQhPALkGAOQjBAMjeAIQgDAMgQALQgPALgQADIgXkEQDyAAFYgOQFugQBugSIAigSICcC+QgUARgrAIQhWBCj+DmIl0FTIAAACQBlgwCLgdQCGgbB3AAQEJAACeCTQCgCTAAD/QgBErjtCuQjjCnlsgBQjeAAiHhagAiyIRQg2AmAAA9QAABNBdAmQBIAdBvAAQAjAAAzgFQAvgGAkgHQgPhvhLhLQhMhMhjAAQhJAAg1Alg");
	this.shape.setTransform(415.4,213.8,0.536,0.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnIO4QgugygpgkQDZhNCLhwQCJhtAyiEIgBAAQgcAkguAWQgwAWg2AAQicAAhzhvQh4h2AAiwQAAi0CBh+QB9h5CoAAQA0AAAuANQAvAOAgAXIgCgZIgHjUIocAQQkjAJieAJIgIjQIHsgOQGWgLBcgFQABgZgGiCQgFiIgDgrIEzAOQgCARgQANQgQAPgdAEIAEELQHHgPEOgDIAADUQlGgEmKANQACBUACCKQAFBNAECEQAgBeAACZQAAFEjNDqQisDIktByQgbglgzg1gAkohDQhCBEAABuQAABkBBBBQA+A9BXAAQBjAAA7hFQA3hBAAhgQAAh3gzg+Qgvg9hjAAQhjAAhBBEg");
	this.shape_1.setTransform(313.2,212.7,0.536,0.536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AHgO4QgSg8gVgvQBBADBxAAIBtAAQAdAAAMgLQANgLAAgcIAA8SIECAMQgEAQgMAJQgMAKgYADIAAbgQAABZgWAyQgXA0g2AaQhWArkpAAQgGgsgUg+gAnzQfIAAsWIjvAAIAAJmIjAAAIAAsoIGvAAIAAizIocAAIAAjFICqAAQhBgmhOgdQAxhsArixQAnijAZi3IDyA9QgLAZgpAAQgPBhgTBWIDJAAIAAlDIEBAQQgDAagwAKIAAEPIGrAAIAADCImrAAIAADrIH6AAIAADFIn6AAIAACzIG2AAIAAJhQAACEhIAnQg9AhjKAAQgEgngRg1QgOgugTgrQAnACBBAAQBBAAANgDQAPgFAAgVIAAmbIj2AAIAAMWgAs/kxIFMAAIAAjrIj7AAQgpCTgoBYgAE2HrIAAz4ID7APQgCAOgLAJQgMAJgZAFIAATEg");
	this.shape_2.setTransform(199.7,212.5,0.536,0.536);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlLOJQidhVAAi9QAAiICliXQCUiGEFiHQgIhNgigrQgjgtg4AAQh6AAh7BFQiCBJiMCeQhlByiPCFIiciaQByhmAwguQBYhVAwg8QBMhfBFiGQBHiJAhh4IhoACQj7AAhxgCIAAjMQDPAHC2AAICJgCQAjimAUiSIEcAfQgGAigwAHQgWBxggB2QCRgFC1gcQDcgkC1g8IAnDWQirA1jyAeQjCAYjaAJQhJDog+BZIACAAQBFg6BagiQBcgjBTAAQBrAABJBIQBLBKAXCDQB0gyCyhGIEfhwIBYDoQgFADgJAAQgTAAgTgMQiEAnicA3QilA6iCA0QAHBIAABhQAABggHBsIjkAPQAHhJADhUQADhWgEg4QinBUhkBXQhuBhAABPQAABUBpAqQBpApDSAAQChABCRgIQCZgGBqgOIACDTQipASmQAAQlJAAiYhTg");
	this.shape_3.setTransform(411.5,81.7,0.536,0.536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArvPLIAA+VIXeAAIAAeMIjkAAIAAiMIweAAIAACVgAoTJdIQeAAIAApFIweAAgAoTi6IQeAAIAAo3IweAAg");
	this.shape_4.setTransform(306.1,85.8,0.536,0.536);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AllOsQgzgvgkgWQEDjCBjk+QBDjcAAlTIAAsxIPkAAIAAbbQAABZgXAzQgZA0g4AaQhcAqk6AAQgJgugWg8QgXg/gXgnQBGACB/AAQCCAAAXgHQAQgFAFgMQAEgIAAgYIAAnNIppAAQhgHolPD/QgYgggygugAC9jFQAAClgOBxIJOAAIAAljIpAAAgAC9nVIJAAAIAAleIpAAAgAvRJaIAA4tIMAAAIAAVgIo5AAIAADNgAsKDIIFyAAIAAmUIlyAAgAsKmMIFyAAIAAmCIlyAAg");
	this.shape_5.setTransform(196.3,85.9,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4GjQh6hrAAi5QAAiBBxibQBuiXCphxQhqAGjgATQjTASh3AMQgDAHgKAGQgKAGgKACIgNihQBWAAAzgEQCegMEwgTQF7gYCGgDIABCPQhbgDg3ANQhEAPhKAyQiQBchoB/QhzCNAAB0QAACCBpBKQBtBNDrAcIhBCGQkagkiAhyg");
	this.shape.setTransform(495.6,212.7,0.801,0.801);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARHhQG2g+AAkMQAAhwhAhQQhChTh1gfQhYEOiKCrQASAXAkAiIhcBdQghgggTgXQiFBziLAAQhhAAg6hJQg5hJAAh1QAAhtAxhmQA+h9B9hQQgjiJgfjBICogFQAAAKgHAIQgIAKgOADQAOBnAcCQQA7gdBIgRQBJgRBJgCQAngDAiADQAchuAYi1ICzAoQgGASgeACQgWCCgjB/QCjAmBcBzQBbByAAChQAAC1iBByQiCByj/AnQgjhKgbgqgAmyBRQghBIAABIQAABBAZAnQAbApAuAAQBdAABfhbQhNh/g/jQQhKA4gnBRgAjUh6QAwC3BFBzQBmiIBEjeQgPgBgfAAQiJAEhoA5g");
	this.shape_1.setTransform(406,208.6,0.801,0.801);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApKJGQgXgfgVgSQCShLBeioQg6gqg4gnIgPA1Ihpg5QAtihA+kaIh5AAIAAh4ICRAAQAciMAYiKICWARQgDASgdACQgIAsgoDFICtAAIAVgCIBGAQQgCANgGAKQgbFjheDfQBqBVAwA8IhOBnQgpg3hchPQhiCpigBhQgNgagWgdgAnbBbQBLAuA9AqQBIixAYjwIiaAAQg5D2gVBTgAgXJ6IAAo1IJLAAIAAIvIh+AAIAAg2IlVAAIAAA8gABhHJIFVAAIAAkPIlVAAgAHthTQiIAMmXAcQgCASgUADIgviNIBvgFQAnhlAmiBQAoiEAVhqICjAlQgHASgeACQgbBeglBsQgoBygmBaIFFgPQg2hgg6hOIBmg1QBEBXA5BgQA9BnAXBJIhuA5QgMgigXgyg");
	this.shape_2.setTransform(305.6,209.2,0.801,0.801);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjGIgQhegzAAhyQAAhRBjhbQBZhRCbhRQgEgtgVgaQgUgbghAAQhKAAhJAqQhPAqhUBfQg/BGhUBOIhdhcQBAg5AhggQA1gyAdglQAug4AohRQArhTAUhIIg/ACQiWAAhEgCIAAh6QBsAEB9AAIBTgBQAXhqAKhRICrATQgFATgcAFQgLA9gVBOQBXgDBsgRQCFgVBsglIAXCBQi7A6kzALQgrCKgnA3IACAAQApgiA2gVQA4gVAwAAQBBAAArArQAuAtAOBPQBGgfBqgqICthDIA1CMIgJABQgMAAgLgGQi6A3ikBCQAEAvAAA3QAAAzgEBHIiJAJQAJhmgDhOQhlAzg7A0QhCA6gBAwQAABkD8AAQDPAACEgQIABB+QhoALjuAAQjEAAhbgxg");
	this.shape_3.setTransform(204.6,208,0.801,0.801);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmwIaQD6h4Cfi1QCdi2BTkCImrAAQh0CyitCHQgSgUgggYQgggZgcgRQCIhfBxieQBwidBBi0ICuArQgIAXgiAAQgnBVgrBUIGiAAIAVgJIBtBBQgDAFgHAHIgOAJQhxFTiuDVQimDPkPCJQgyhEgxgkgAEEnMQgyg1grgjIA7g3QAsAiA1A3QAuAxAiAuIhBA3Qgdgqgxg2gAHUnxQgxg1gtgmIA8g1QAvAmAxAzQAyA0AeArIhDA0Qgbgngwg1g");
	this.shape_4.setTransform(109.1,206.5,0.801,0.801);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ao2GwQGAh2EFjbQEEjYCFk2QAsAjBdAzQiME1kJDjQkLDpl0CAQgBALgHAKQgHAKgJAEgAl5ltQhwg0h3grIBGh+QB0AjB4A2QB8A3BQA2IhNCGQhNg1h9g6g");
	this.shape_5.setTransform(491.4,90.1,0.801,0.801);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AppHWIAAiRITTAAIAACRgAnNlFIAAiQIOjAAIAACQg");
	this.shape_6.setTransform(382.9,88.6,0.801,0.801);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ApuhWITdAAIAACSIygAAQgHALgNAIQgNAHgPABg");
	this.shape_7.setTransform(284.5,85.7,0.801,0.801);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AohHkIAUggIAAwzIDIALQgCAcgqAGIAAPiQEPhNDGiMQDWiWB7jVQATAXAjAhQAeAdAZAUQkcHVq4C2QgCAKgHAJQgIAKgJADg");
	this.shape_8.setTransform(182.7,88,0.801,0.801);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AluKMIAA0XIDIAMQgCAZgpAJIAAGqIAegqQCBAwCWBDQCaBFBxA4IhUCRQhng6iJhBQiIhAh0gtIAALQg");
	this.shape_9.setTransform(89.7,86.4,0.801,0.801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#FFFFFF").s().p("AhyB+QBGgbApgtQAogvAPhGIjDAAIAAggIDPAAIACgBIAeAWIgFAEQgVBZgtA1QgpAzhNAeQgJgPgMgMgABThaQgLgLAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKAMAAAOQAAAPgKALQgLAKgPAAQgPAAgKgKgABbiFQgHAHAAAKQAAAKAHAIQAHAGAKABQALAAAHgIQAGgHAAgKQAAgKgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape.setTransform(521.3,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah8BgQCpg1A7iJQANAKASAJQgfBEg7AxQg6AzhSAdQgBAGgFACgAiGhlIAQgcQA4ARApAbIgRAeQgjgYg9gWg");
	this.shape_1.setTransform(489.9,100.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgigTIhGAQIgHgZIBIgQIgOhDIAjgEQAAAEgGAEIAMA5IBkgWIADgCIAVAPQgCADgDAAQgUAzgnAmQgHgHgPgIQANgNAMgPQAOgSAGgPIhOASIAdCHIgZAGg");
	this.shape_2.setTransform(463.3,102.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAtIh4AQIgEgfIB4gPIgHhAIhkANIgDgfIBjgNIgHg+IApgCQABAGgIACIAEA0IBggNIAEAgIhgAMIAHA/IB5gMIADAcIh4AQIAMBjIggAEg");
	this.shape_3.setTransform(434.1,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhWBpQBMgfAog0QAqgzAWhaIArAOQgCAFgIAAQgaBZgsA0QgtA3hLAjQgOgSgJgIgAh1g6QgJgagKgSIAfgKQAJASAKAaQAJAaADASIgfAJQgDgRgJgagAghh9IAggFQAMAxACAsIgfAFQgCgsgNgxg");
	this.shape_4.setTransform(404.9,100.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiJgSIETAAIAAAfIkFAAQgDAFgIABg");
	this.shape_5.setTransform(375.3,99.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGCYQgDgOgGgQIAfAAQARAAAEgBQAHgDgBgIIAAiQIhsAAIAAgfIBsAAIAAhDIApACQgBAGgIACIAAA5IBsAAIAAAfIhsAAIAACPQAAAegVAIQgNAFgoAAIgHAAgABOA8QgTgdgQgSIAbgNQAlApAeA0IgdARQgMgWgSgcgAiSBdQAmgkAUg3IAeALQgYA+glAjgABVhZQgLgKAAgQQAAgPALgLQAKgKAQAAQAOAAAMALQAKAKAAAPQAAAQgKAKQgMALgOAAQgQAAgKgLgABdiEQgHAHAAAKQAAALAHAHQAHAHALAAQAKAAAIgHQAGgIABgKQAAgKgIgHQgHgHgKAAQgLAAgHAHg");
	this.shape_6.setTransform(346.7,99.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA8BLQghgfgWgTQg6BFg/AlQgHgKgRgQQA9ghA1g8QAug0AYg4IiZAAIAAggICrAAIAHgCIAaAPQgCADgEABQgbBAgkAvQBCA0AxA2IgdAZQgUgYggggg");
	this.shape_7.setTransform(316.2,100.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABnQBugVgBhVQABgqgbgbQgdgcgxAAIgMABIAfAHQgCAGgHAAQgKBVgXAuQgcA0goAAQgZABgPgWQgRgXAAgnQgBg8AsgqQArgqA+AAQBEAAAlAlQAiAiAAA3QAAA3gfAiQgeAfg/APQgMgSgIgKgAhWg4QgaAeAAAnQAAAXAIAPQAIAOALAAQAaAAATgyQASgtAFhDQgqAHgbAig");
	this.shape_8.setTransform(287.3,100.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiKCUIAAknIB9AAIAAB2IheAAIAACxgAhrg0IBAAAIAAgaIhAAAgAhrhkIBAAAIAAgXIhAAAgAA2B1IhZAAIAAAQIgcAAIAAiLIB8AAIAAB6IAYAAQARAAACgBQADgBAAgGIAAiJIhgAAIAAh2ICAAAIAAD/QAAAagQAHQgMAGgvAAQgBgPgJgPgAgjBdIBDAAIAAgcIhDAAgAgjAqIBDAAIAAgaIhDAAgAAqg0IBBAAIAAgaIhBAAgAAqhkIBBAAIAAgXIhBAAg");
	this.shape_9.setTransform(256,100.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AicB3QAYgTATgRIAAhRIgnAAIAAgcIBEAAIAABqQAQAaAiAHQAVAFA4gBQBGAAAsgDQgHAPgDAPQgmACg9AAQg/gBgYgEQgkgIgVgcQgPAQgZAXQAAAEgDACgABLBnQgCgPgGgMIAfABQAGAAAAgHIAAi9Ih9AAIAAA9QAABpggAzQgGgIgTgJQAdgsAAhfIAAhYIC2AAIAADZQAAAUgMAGQgKAGgfAAIgFAAgAgDBOIAAhZIBYAAIAABKIhCAAIAAAPgAATAqIApAAIAAghIgpAAgAgKgbIAAgVIAkAAIAAgYIgiAAIAAgVIAiAAIAAgZIAhACQAAAEgHABIAAASIAoAAIAAAVIgoAAIAAAYIAqAAIAAAVgAiYiGIAZgPQAlAeANAaIgbARQgOgbgigfg");
	this.shape_10.setTransform(224.1,100.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBsQgRgOAAgcIAAgSIAlAAIAAATQAAAKAFAGQAFAFAJAAQASAAAAgdIAAg2QAAgUgRAAQgNAAgIAQIgfAAQADhIAAgxIBhAAIgBAiIg/AAIgCA0IABAAQAHgIAIgDQAEgDAKAAQAsAAAAA9IAAAhQAAAngNARQgNATgeAAQgYAAgQgNg");
	this.shape_11.setTransform(194.6,100.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAKQgWgVgPgOIAZgWQAmAiAgAkIgbAZQgLgPgUgXg");
	this.shape_12.setTransform(173.1,110.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BAIAAgOIAmAAIAAAQQAAAYASAAQASAAAAgdIAAgSQgBgTgHgHQgJgHgQAAIAAgfQAQAAAIgHQAHgIAAgVQAAgRgEgIQgEgHgIAAQgRAAAAAYIAAAKIglAAIAAgLQAAgZAOgPQAPgPAZAAQAZAAAOASQAOARAAAaQAAAWgFALQgGAOgPAIQASAHAGANQAFAMAAAZQAAAkgOARQgPARgcAAQg3AAAAg6g");
	this.shape_13.setTransform(160.2,100.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAKQgWgVgPgOIAYgWQAoAjAfAjIgbAZQgLgPgUgXg");
	this.shape_14.setTransform(138.8,110.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBB4IAAi7IggAAIAAgWQAegPARgPIAUAAIAADvg");
	this.shape_15.setTransform(126.4,100.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AvNCQQgyg0AAhcQAAhaAyg1QAyg1BUAAQBKAAAuAzIAAgrIApAAIAACFIgsAAQgDgvgegcQgegbgxAAQg+AAgkApQglAqAABHQAABLAlArQAkAqBAAAQBWAAAThgIA1AAQgHBCgpAjQgpAjhJAAQhXAAgyg1gASRC9IAAgnIA/AAIAAh4Ih7izIgfAAIAAgnICPAAIAAAnIg2AAIBgCIIBeiIIg3AAIAAgnICOAAIAAAnIggAAIiACzIAAB4IA/AAIAAAngAN7C9IAAgnIA0AAIAAkrIgDAAIh8FSIgrAAIh6lSIgBAAIAAErIAxAAIAAAnIiWAAIAAgnIAxAAIAAkrIgxAAIAAgnICLAAIBtE2IBuk2ICLAAIAAAnIg0AAIAAErIA0AAIAAAngAC4C9IAAgnIA0AAIAAkrIg0AAIAAgnIFAAAIAAByIgnAAIAAhLIiyAAIAACAIBXAAIAAg4IAnAAIAACTIgnAAIAAg2IhXAAIAACGICyAAIAAhRIAnAAIAAB4gAjKC9IAAgnIA0AAIAAkrIg0AAIAAgnICoAAQBfAAAzAxQA0AxAABaQAABbg0AxQgzAxhfAAgAhiCWIBAAAQBDAAAngoQAmgoAAhGQAAhHgmgnQgngnhDAAIhAAAgAmDC9IAAgnIA2AAIgghUIirAAIgjBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA5AAICPFSIAqAAIAAAngAl9AbIhFiiIhFCiICKAAgAyOC9IAAgnIA2AAIgghUIiqAAIgkBUIA4AAIAAAnIiVAAIAAgnIAqAAICSlSIA6AAICPFSIAqAAIAAAngAyIAbIhFiiIhFCiICKAAg");
	this.shape_16.setTransform(399.6,50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AGZDDQhaAAgnghQgzgrAAhyQAAhyA0gvQAsgmBkAAQBLAAArAFQAWACAGACIgHB4Ig0AAIgHg6QgegEgcAAQgnAAgTAOQgkAaAABRQAAB8A1AHQANACA3gBIAAhOIgxgNIAAgwICQAAIAIDQgAAkC8IAIg6IAdgFIgRi8IhQD7Ih2AAIhYj8IgSC9IAdAFIAIA6IiWAAIAHg6IAegFIAbj7IgegFIgHg6IC3AAIBSDsIBMjsIDDAAIgHA6IgeAGIAYD6IAdAFIAHA6gApAC8IAIg6IAdgFIAAj6IgdgGIgIg6IC9AAIgHA6IgdAGIAAD6IAdAFIAHA6g");
	this.shape_17.setTransform(180.5,50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjHDEIBElXIgFFTIBAmXIATG0IA1oJIA1IJIARm2IBDGaIgGlUIBFFXIjIBpg");
	this.shape_18.setTransform(80,46.9);

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
	this.shape.graphics.f("#032E53").s().p("AhTCJQBggFAqgRQApgSABglQAAgYgQgOQgRgPgeAAQgoABgsAVQgoATgKAUIglgRQAHgFAHgtQAJgwAAg0IAxAHQgCAFgIACQgGBWgKAPIABAAQAagRAlgMQAkgMAhAAQAsAAAaAWQAaAWAAAoQgBA3gvAaQgxAbhvAFQgIgagFgJgAhNiHIALgkQBeALA1AWIgMAlQg3gWhbgMg");
	this.shape.setTransform(258.1,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032E53").s().p("Ag+CKQBVgCAqgPQAvgRAAgmQAAgXgPgOQgPgNgeAAQgaAAgeAOQgjAQgSAaIglgRQAJgKAIgjQAJgiAEgsIhWAAIAAgmIBaABQACgcAAgnIA0AEQgBAHgMACIgCA1QAcgBAqgHQAsgGAggJIAGAnQhBAQhcAFQgIBFgHARQAUgQAbgIQAcgKAYAAQArAAAZATQAZAXAAAoQAAA4g2AbQgxAYhjABQgFgVgGgOg");
	this.shape_1.setTransform(224.3,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032E53").s().p("Ag9CMQgjgIgSgVQgQgUAAgbQAAgrAlglIAhAPQgfAdAAAeQAAAQAKAMQAMAOAVAEQAWAEAjAAQBCAAA1gKIADAnQgvAIhGAAQg1AAgWgFgAgwg7QAbgVAdgSQghAFhXgBIgBgmQAcABAwgBQAvgBAagCQAsgDAbgGIAEAoQghAFgqAWQgeARgWATg");
	this.shape_2.setTransform(192.3,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032E53").s().p("AghCUQgUgRAAgaQAAgcAYgRQAVgPAdAAQAMAAARAEIgFhZIhaACIgBgkQA0ABAlgCQgDhAAAgYIAzACQgBAGgJACQAAAoABAjQAogFAfgJIAEAlQgZAIgxAEIAFBmQAsATAfAbIgUAkQgYgZgegPQgBAfgPAPQgQARglAAQggAAgVgQgAgHBTQgOAIAAAOQAAANANAGQAJAHATAAQAiAAAAgkIgBgMQgQgGgQAAQgSAAgKAGgAieBfQgEglAAgrQAAhFAUhqIAyAJQgBAHgKAAQgXBWAABbQAAAmADANQAIgYATguIAWAZIgVArQgRApAAANQAAAHADALIglADQgIgUgEgqg");
	this.shape_3.setTransform(159.1,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032E53").s().p("AAUCUIAeAAQAFAAABgFIAAidIhVAAIAAAdIg1AAIAABhIA1gIIABASQATgLAygiIAKAbQgiAbgeAWQABAFgEADIgPgaIiCAXQgBAEgFACIgLgnIA/gIIAAhmIg7AAIAAgdIA7AAIAAglIglAAIAAgFIgGAGQgKgOgPgKQAsgsAag9IAqAGQgCAGgGAAIgBABQAuAlATAWIgWAdQgQgVgqglQgTAfgRAYIBaAAIAAAeIgpAAIAAAlIA1AAIAAggICPAAIAAgeIh1AAIAAgdIB1AAIAAgdIh9AAIAAgfICfAAIAAB3IAgAAIAAAgIhaAAIAAANQAFAbAOAcQAXgZARgdIAhAWQgCAEgHgBQgPATgcAbIgVgQQAaA1AxAXQgNANgKASQgsgZgbg5IAAA/QAAAYgMAHQgLAGgmAAQgBgMgIgUgAimAkIAZgHQANAlAEAhIgaAHQgEghgMglgAhLBdQAMghAFghIAiALQgCAEgHAAQgIAhgLAagAgVAUIAXgPQAaAXAOAaIgaASQgLgYgagcg");
	this.shape_4.setTransform(122.2,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032E53").s().p("AioCvIAAgeIBlAAQgKgagMgUIAWgHIgoAAIAAhlIDXAAIAABlIgqAAIAdAJQgCAEgHAAQgIAQgOAYIBoAAIAAAegAggCQIgBABIA+AAQAPgdAIgYIhtAAQAUAdAFAXgAhIA/ICPAAIAAgsIiPAAgAi0gQQAigPAfgdQgTgVgcgQIAUgVQAeASASASQAVgYAMgZIheAAIAAgeIByAAIAGgBIAZAMQgCADgDACQgQArggAlIB9AAQglgugWg2IAfgJQAJAWAOAXQAcgWAQgUIAgAYQgCADgHgBQgWATgcAUQAJANAOAOQAcgZATgVIAfAXQgCADgHgBQgYAWgYASQAcAYAjAPQgPAMgKAQQgvgUgngsIAAAXIiOAAIAAgVQgnAoguAXQgKgNgNgLg");
	this.shape_5.setTransform(85.3,22.2);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.1,271.9,37.6);


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
	this.cta_label.cache(-2,1,276,42);

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
	this.text_3.cache(51,318,496,312);

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