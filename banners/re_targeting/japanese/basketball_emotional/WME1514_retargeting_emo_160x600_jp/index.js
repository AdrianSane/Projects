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
p.nominalBounds = new cjs.Rectangle(0,0,327,900);


(lib.img_athlete2 = function() {
	this.initialize(img.img_athlete2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,901);


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

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicHFQg6guAAhLQAAhQBEgvQA9gqBVgBQAgAAAyALIgNj1IhlADIieAAIgChlQAjADBbgCQBbgBAmgDQgFhqgFiWICPAFQgBASgZAFQgBBFADCXQBxgNBagbIAKBqQhNAYiEALQAGCTAICHQA7AZA4AjQA3AjAqAlIg6BlQhDhIhTgqQgGBdgvArQguAqhfAAQhiAAg6gugAhPEOQgoAVAAAoQAAAkAkAUQAhATAzAAQAxAAAXgaQAXgZAAg0IgBgiQgtgRguAAQgxAAgiASgAnhEvQgMhpAAh4QAAjHA7ktICLAcQgBAIgJAGQgIAFgLABQgqCYgOCfQgJBWABBwQgBBmAGAjIAnhlQAZg/APggIA9BEQgZAygcBAQgdBDgQAsQgKAcAAAXQABAYAHAcIhnAHQgWg6gNh2gAETk1QgfgqghggIAxgjQBNBLAlBKIg1AjQgSgkgcgngAFMnOIAwgkQBMBJAlBMIg0AjQgmhLhHhJg");
	this.shape.setTransform(268.3,403.8,0.438,0.438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkMHfIAAmPQgcAygxA/QgyA/g4A3Ig1hkQBEg7BBhTQBJhYAghKIAChWQggAHg0AFQg3AGg2ABIgChqQA7AAA6gFQA2gEAdgHIAHjEICTAKQgCASgcAFQgJBKgEBJIAoAPQgaAvgaBlQBYhSBTgvQBWguBAAAQBPAAArA1QAqA1AABiIgCAqQgTDJAABbQAAA1AIAUQAKAYAdAAQAXAAAqgWQAqgWAigdQAAAVAFAqQAEAmAEATQgrAfgtASQgwATglAAQhMAAghguQgegsAAhiQAAghAJiZIAJiTQAAg7gUgeQgTgdgkAAQg3AAhRA0QhTA1hPBWQAAGnABBAg");
	this.shape_1.setTransform(222.1,405.1,0.438,0.438);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkFGiQBoglBDg2QBDg1AXg/IAAAAQgNARgWAKQgXALgaAAQhMAAg4g2Qg5g5AAhUQgBhWA/g9QA8g7BRAAQA1AAAgAYIgFhyQl2AKhnAGIgDhlIHdgOIgChLIgEhWICUAGQgBAJgHAGQgJAHgOACQAAAxADBQQDbgHCDgCIAABnQidgCi/AGIACBrQADAsACA6QAPArAABLQAACchjByQhSBgiRA3QgggqgwgrgAiOggQggAgAAA2QAAAwAfAfQAeAeAqAAQAxAAAbgiQAbgfAAgvQgBh0heAAQgwAAgfAhg");
	this.shape_2.setTransform(177.6,405.2,0.438,0.438);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifG2QhMgpAAhcQAAhCBQhIQBHhCB+hBQgEgkgRgUQgRgXgaAAQg7AAg7AjQg/AhhEBMQgxA3hFBBIhLhLIBOhHQArgpAXgdQAlgtAhhBQAihCAQg6IgyABIiwgBIAAhjQBxAEBLAAIBDgBQAShYAIg/ICJAQQgDAQgXADQgMA8gOAzQBFgCBYgOQBqgRBXgdIATBoQiWAuj4AKQgiBugfAsIABAAQAhgbAsgRQAtgRAnAAQAzABAjAiQAlAkALA/QA4gYBWgiICLg2IAqBwIgGABQgKAAgJgEQiYAsiCA1QAEAhAAAxQAAAvgEAzIhuAIQAIhbgEg3QhPApgxArQg1AuAAAmQAABRDKAAQCmAABrgNIABBlQhQAJjDAAQieAAhJgng");
	this.shape_3.setTransform(136.1,404.7,0.438,0.438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlYHLQgUgbgRgRQDphWCHiXQCJibAvjqIqFAAIAAhpIKtAAIAIgEIBjBIQgFAHgLAGQhFEriUCvQiNCokABiQgLgTgVgbgAERkuQgigigBgxQAAgzAkgiQAjgiAwAAQAyAAAiAjQAjAjgBAxQABAxgjAiQgiAigyAAQgxAAgjgigAEtm7QgXAYAAAiQAAAhAXAXQAXAXAhAAQAiAAAXgYQAWgXAAggQAAgigXgYQgXgXghAAQghAAgXAXg");
	this.shape_4.setTransform(94.3,403.7,0.438,0.438);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmeE8QEZhWC+ihQC/idBhjjQAiAbBCAlQhmDhjCClQjDCrkQBeQAAAHgGAIQgEAHgIADgAkTkKQhTgnhXgfIA0hcQBUAaBZAnQBaApA7AnIg5BiQg4gnhbgqg");
	this.shape_5.setTransform(49.5,406.5,0.438,0.438);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3F5Qg7goAAhEQAAg4AxgoQAxgoBDAAQBLAAA3AyQA0AuAMBDQAxgTAcgnQAegpAAg2QAAhGgygqQgygohSAAQhjAAhfAkQhYAig2A0Qg4A3ghAlIhFhEQA2g4CgiXQCSiLBqhlQg6AIkJAMQgCAFgGAEQgHAFgHABIgJhvQBmAACVgHQCbgGAwgIIAPgHIBDBRQgJAHgSAEQgmAchsBiIifCSIAAABQArgUA7gNQA6gMAzAAQBxAABEA/QBFA/AABtQAACBhmBKQhhBHidAAQheAAg6gmgAhLDjQgYAQAAAaQAAAiAoAQQAgAMAtAAQAiAAAngIQgHgwggggQgggggpAAQggAAgWAQg");
	this.shape_6.setTransform(272.9,463.1,0.438,0.438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACzGjQg3gHgggiQgegggBgwIAChbQAAgbgLgOQgLgOgWAAQgiAAgrATQgvAWgoAmQiVCSglAsQgPgTg5g3QBRhQF/ltQhUAIkXAPQgDAGgDADQgEADgFAAIgIhqQBrgDCTgGQCcgHBHgGIAQgKIBLBGQgLAHgNAAQhiBUiNCEIAAABQApgVAuAAQAmAAAYAbQAYAbAAAqIgCBNQAAA7AhARQAUALA+AAQBNAAA2gKQgBA9AEAjQg6AGhGAAQg5AAgogFgAAAk1QhxgShfgGIAVhaQBmAFBsAQQBzARBRAXIgYBdQhLgVh4gTg");
	this.shape_7.setTransform(237.9,462.3,0.438,0.438);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADSExQhPBUhdA3QgJgOgRgUQgQgVgNgMQBvg/BYhpQgdh1gSi0IhcAMIgLhXIBggLQgIiFgBiRIByAGQAAAOgXADQgCBuAJCGIDegbIAKBVIjiAcQALBxASBgQAyhUAihgIBnAfQgFAMgUgCQg0CMhVBxQAnCLAtAAQAfAAAEilQAPAQASAPQAUAPAQAHQgLB2gZArQgYApg3AAQhTAAg5iUgAj4HFIAAinIjYAAIAAhSIDYAAIAAhJIiwAAIAAlgIG+AAIAAFgIi1AAIAABJIDSAAIAABSIjSAAIAACngAikA8IBqAAIAAhGIhqAAgAlaA8IBnAAIAAhGIhnAAgAikhOIBqAAIAAhIIhqAAgAlahOIBnAAIAAhIIhnAAgAh1kCQAYgnAYg2QAZg2APgsIBnAkQgFAKgTAAQgTApgbAwQgaAzgXAigAE7k6QgdgwgggnIBFglQAiAnAeAtQAgAvAOAhIhLArQgNgjgegwgAmmlBQgSgtgXgpIBLgYQAYAmATAsQAUAuAHAhIhRAcQgFgggSgvgAkAlZQgLgwgQgoIBOgRQARAmANAwQANAuAEAgIhTAWQgDghgMgwg");
	this.shape_8.setTransform(198,462.6,0.438,0.438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhpF9QhQg6AAiOQAAgWAEgyQhXgDgrgQQhOgdAAhEQAChFBQg8IBIAkQgdASgRAVQgQAVgBASQAAAbAoALQAXAGA9ACQAOiMAHg2Qg0gFgzgMQg3gNgmgTIAWhZQBQAmBnAMIAUimICEAPQgDASgcAEIgXCIQAoADAtAAQA7AAAogEIgEBaQgqADg2AAQgzAAgtgDQgNBogJBVQBygCBdgNIABBZQhgAMh2AAQgFAxAAAXQAABYAzAiQAnAcBUAAQBCAAA3gRQApgKAWgcQAVgbAAgnQAAhNhKhcQAzgQAlgQQBYB4AABhQgBB9iFAuQhGAYhqAAQh7AAg+gsg");
	this.shape_9.setTransform(157.6,462.3,0.438,0.438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah7ErQhXhMAAiFQAAhbBRhvQBOhrB4hRQmbAhg8AGQgCAFgHAFQgHAEgHABIgKhzQA6AAAogDQBsgIDggOQEMgRBggCIABBmQhBgDgnAKQgxALg0AjQhnBChJBbQhTBkAABTQAABdBMA1QBMA2CoAVIgvBfQjHgZhdhSgADggxQglgogcgXIArglQAhAZAjAnQAkAmAUAfIgvAjQgSgbglgpgAFQiFQglgogfgZIAsglQAkAcAhAkQAkAlATAfIgvAlQgTgcgigng");
	this.shape_10.setTransform(119.2,464,0.438,0.438);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AidFgQhXgTgtg2QgpgyAAhFQAAg1Abg5QAZgyArgrIBSAmQglAjgVAoQgVAoAAAkQAAApAbAeQAcAhA3AMQA3AKBbAAQCpAACCgbIAIBjQh5AViugBQiKAAg3gMgAh7iWQAfgZApgcQApgcAfgSIAAgBQgnAGhjADQhVAChSgBQAAhHgCgWQBHABB4gCQB6gCBAgFQBtgHBGgQIAIBkQhSAMhoA5QhLApg7Axg");
	this.shape_11.setTransform(82,463.2,0.438,0.438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AknGVQhfgxgChrQAAhLBDhGQA8g/B3g9QgagwgKhbQgKhYABiiICNAMQgDAUgcADQgCB9AFBDQAGBOARAoQBwg0Cug7IAiBwIgJABQgMAAgKgGQjqBCiJBLQibBXAABTQABA7A/AcQA6AZB0AAQC3AACbgYIAJBiQiFASjaAAQibAAhSgqgACckhQgggoghgdIAyglQAiAeAgAnQAfAlAUAjIg1AkQgSgigfglgAEllWQgfgmgggeIAugkQAkAfAfAlQAgAmASAhIgyAlQgTghgfgng");
	this.shape_12.setTransform(47.2,461.6,0.438,0.438);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiXhaIkzBIIgbhtIE4hDIhAklICZgPQABAKgHAHQgGAHgPAHIA2D6IG4hfIALgKIBcBAQgGAKgOADQgrBthEBnQhCBhhRBUQgfgdhAglQA4g2A2hKQA5hOAbg+IlWBLICCJSIh0AYg");
	this.shape_13.setTransform(268.6,348.9,0.438,0.438);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhADHIoGBDIgSiEIIJhEIggkZImuA3IgQiFIGug5IgfkOIC4gJQACAXgkAMIAWDjIGgg4IARCIImfA1IAgEZIIJg/IAQCDIoKBCIAyGxIiQAQg");
	this.shape_14.setTransform(214,343.3,0.438,0.438);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai3G6QiAhxAAjDQAAiIB3ikQB0ifCzh3QnyAljIAUQgDAHgLAHQgKAGgKADIgPirQBVAAA8gEQCYgMFTgVQGNgZCPgEIABCYQhggDg6ANQhIARhOA0QiZBhhrCHQh8CVAAB6QAACJBxBPQByBRD3AeIhECOQkogniKh5gAFLhJQg2g8gqghIBAg3QAwAmA1A4QA1A4AdAvIhFA0Qgbgpg3g8gAHwjFQg2g9gtgkIBAg2QA1AqAxAzQA2A4AbAuIhEA3Qgdgrgzg4g");
	this.shape_15.setTransform(158.1,345.4,0.438,0.438);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjpIJQiAgdhDhRQg8hJAAhlQAAhQAohTQAkhKA/hBIB6A5Qg3A0gfA7QgfA7AAA1QAAA+AoAsQArAxBPARQBRAQCJAAQBvAABxgKQB6gKBggUIALCSQi1Aej+AAQjHAAhYgSgAi3jfQAuglA8gpQA+gpAvgbIAAgCQg8AJiTAFQh/AEh2gCQAAhqgDghQBoACCzgDQC1gEBegGQCdgLBrgWIANCTQh5AQibBVQhwA9hWBIg");
	this.shape_16.setTransform(103,344.2,0.438,0.438);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjpIJQiAgdhDhRQg8hJAAhlQAAhQAnhTQAlhKA/hBIB6A5Qg3A0gfA7QgeA7AAA1QAAA+AnAsQAqAxBRARQBQAQCJAAQBuAABygKQB7gKBfgUIALCSQi0AekAAAQjHAAhXgSgAi3jfQAuglA8gpQA+gpAvgbIAAgCQg8AJiTAFQh/AEh3gCQAAhqgDghQBpACCygDQC1gEBfgGQCdgLBrgWIANCTQh6AQiaBVQhwA+hWBHg");
	this.shape_17.setTransform(51.4,344.2,0.438,0.438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.textheadline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkXNuQiLhcAAieQAAiCBzhdQBxheCfAAQCvABCCByQB4BsAdCdQBygtBChcQBFhfAAh9QAAijh1hjQh0hfjAgBQjmAAjgBYQjMBQh+B4QhrBnhlBvIihieQB+iCF0liQFVlFD6jrQhPALkGAOQjBAMjeAIQgDAMgQALQgPALgQADIgXkEQDyAAFYgOQFugQBugSIAigSICcC+QgUARgrAIQhWBCj+DmIl0FTIAAACQBlgwCLgdQCGgbB3AAQEJAACeCTQCgCTAAD/QgBErjtCuQjjCnlsgBQjeAAiHhagAiyIRQg2AmAAA9QAABNBdAmQBIAdBvAAQAjAAAzgFQAvgGAkgHQgPhvhLhLQhMhMhjAAQhJAAg1Alg");
	this.shape.setTransform(251.4,206,0.435,0.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnIO4QgugygpgkQDZhNCLhwQCJhtAyiEIgBAAQgcAkguAWQgwAWg2AAQicAAhzhvQh4h2AAiwQAAi0CBh+QB9h5CoAAQA0AAAuANQAvAOAgAXIgCgZIgHjUIocAQQkjAJieAJIgIjQIHsgOQGWgLBcgFQABgZgGiCQgFiIgDgrIEzAOQgCARgQANQgQAPgdAEIAEELQHHgPEOgDIAADUQlGgEmKANQACBUACCKQAFBNAECEQAgBeAACZQAAFEjNDqQisDIktByQgbglgzg1gAkohDQhCBEAABuQAABkBBBBQA+A9BXAAQBjAAA7hFQA3hBAAhgQAAh3gzg+Qgvg9hjAAQhjAAhBBEg");
	this.shape_1.setTransform(168.4,205.1,0.435,0.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AHgO4QgSg8gVgvQBBADBxAAIBtAAQAdAAAMgLQANgLAAgcIAA8SIECAMQgEAQgMAJQgMAKgYADIAAbgQAABZgWAyQgXA0g2AaQhWArkpAAQgGgsgUg+gAnzQfIAAsWIjvAAIAAJmIjAAAIAAsoIGvAAIAAizIocAAIAAjFICqAAQhBgmhOgdQAxhsArixQAnijAZi3IDyA9QgLAZgpAAQgPBhgTBWIDJAAIAAlDIEBAQQgDAagwAKIAAEPIGrAAIAADCImrAAIAADrIH6AAIAADFIn6AAIAACzIG2AAIAAJhQAACEhIAnQg9AhjKAAQgEgngRg1QgOgugTgrQAnACBBAAQBBAAANgDQAPgFAAgVIAAmbIj2AAIAAMWgAs/kxIFMAAIAAjrIj7AAQgpCTgoBYgAE2HrIAAz4ID7APQgCAOgLAJQgMAJgZAFIAATEg");
	this.shape_2.setTransform(76.1,204.9,0.435,0.435);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlLOJQidhVAAi9QAAiICliXQCUiGEFiHQgIhNgigrQgjgtg4AAQh6AAh7BFQiCBJiMCeQhlByiPCFIiciaQByhmAwguQBYhVAwg8QBMhfBFiGQBHiJAhh4IhoACQj7AAhxgCIAAjMQDPAHC2AAICJgCQAjimAUiSIEcAfQgGAigwAHQgWBxggB2QCRgFC1gcQDcgkC1g8IAnDWQirA1jyAeQjCAYjaAJQhJDog+BZIACAAQBFg6BagiQBcgjBTAAQBrAABJBIQBLBKAXCDQB0gyCyhGIEfhwIBYDoQgFADgJAAQgTAAgTgMQiEAnicA3QilA6iCA0QAHBIAABhQAABggHBsIjkAPQAHhJADhUQADhWgEg4QinBUhkBXQhuBhAABPQAABUBpAqQBpApDSAAQChABCRgIQCZgGBqgOIACDTQipASmQAAQlJAAiYhTg");
	this.shape_3.setTransform(248.2,98.7,0.435,0.435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArvPLIAA+VIXeAAIAAeMIjkAAIAAiMIweAAIAACVgAoTJdIQeAAIAApFIweAAgAoTi6IQeAAIAAo3IweAAg");
	this.shape_4.setTransform(162.6,101.9,0.435,0.435);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AllOsQgzgvgkgWQEDjCBjk+QBDjcAAlTIAAsxIPkAAIAAbbQAABZgXAzQgZA0g4AaQhcAqk6AAQgJgugWg8QgXg/gXgnQBGACB/AAQCCAAAXgHQAQgFAFgMQAEgIAAgYIAAnNIppAAQhgHolPD/QgYgggygugAC9jFQAAClgOBxIJOAAIAAljIpAAAgAC9nVIJAAAIAAleIpAAAgAvRJaIAA4tIMAAAIAAVgIo5AAIAADNgAsKDIIFyAAIAAmUIlyAAgAsKmMIFyAAIAAmCIlyAAg");
	this.shape_5.setTransform(73.4,102,0.435,0.435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);


(lib.textheadline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4GjQh6hrAAi5QAAiBBxibQBuiXCphxQhqAGjgATQjTASh3AMQgDAHgKAGQgKAGgKACIgNihQBWAAAzgEQCegMEwgTQF7gYCGgDIABCPQhbgDg3ANQhEAPhKAyQiQBchoB/QhzCNAAB0QAACCBpBKQBtBNDrAcIhBCGQkagkiAhyg");
	this.shape.setTransform(266.7,189.6,0.434,0.434);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARHhQG2g+AAkMQAAhwhAhQQhChTh1gfQhYEOiKCrQASAXAkAiIhcBdQghgggTgXQiFBziLAAQhhAAg6hJQg5hJAAh1QAAhtAxhmQA+h9B9hQQgjiJgfjBICogFQAAAKgHAIQgIAKgOADQAOBnAcCQQA7gdBIgRQBJgRBJgCQAngDAiADQAchuAYi1ICzAoQgGASgeACQgWCCgjB/QCjAmBcBzQBbByAAChQAAC1iBByQiCByj/AnQgjhKgbgqgAmyBRQghBIAABIQAABBAZAnQAbApAuAAQBdAABfhbQhNh/g/jQQhKA4gnBRgAjUh6QAwC3BFBzQBmiIBEjeQgPgBgfAAQiJAEhoA5g");
	this.shape_1.setTransform(218.2,187.3,0.434,0.434);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApKJGQgXgfgVgSQCShLBeioQg6gqg4gnIgPA1Ihpg5QAtihA+kaIh5AAIAAh4ICRAAQAciMAYiKICWARQgDASgdACQgIAsgoDFICtAAIAVgCIBGAQQgCANgGAKQgbFjheDfQBqBVAwA8IhOBnQgpg3hchPQhiCpigBhQgNgagWgdgAnbBbQBLAuA9AqQBIixAYjwIiaAAQg5D2gVBTgAgXJ6IAAo1IJLAAIAAIvIh+AAIAAg2IlVAAIAAA8gABhHJIFVAAIAAkPIlVAAgAHthTQiIAMmXAcQgCASgUADIgviNIBvgFQAnhlAmiBQAoiEAVhqICjAlQgHASgeACQgbBeglBsQgoBygmBaIFFgPQg2hgg6hOIBmg1QBEBXA5BgQA9BnAXBJIhuA5QgMgigXgyg");
	this.shape_2.setTransform(163.8,187.6,0.434,0.434);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjGIgQhegzAAhyQAAhRBjhbQBZhRCbhRQgEgtgVgaQgUgbghAAQhKAAhJAqQhPAqhUBfQg/BGhUBOIhdhcQBAg5AhggQA1gyAdglQAug4AohRQArhTAUhIIg/ACQiWAAhEgCIAAh6QBsAEB9AAIBTgBQAXhqAKhRICrATQgFATgcAFQgLA9gVBOQBXgDBsgRQCFgVBsglIAXCBQi7A6kzALQgrCKgnA3IACAAQApgiA2gVQA4gVAwAAQBBAAArArQAuAtAOBPQBGgfBqgqICthDIA1CMIgJABQgMAAgLgGQi6A3ikBCQAEAvAAA3QAAAzgEBHIiJAJQAJhmgDhOQhlAzg7A0QhCA6gBAwQAABkD8AAQDPAACEgQIABB+QhoALjuAAQjEAAhbgxg");
	this.shape_3.setTransform(109.2,187,0.434,0.434);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmwIaQD6h4Cfi1QCdi2BTkCImrAAQh0CyitCHQgSgUgggYQgggZgcgRQCIhfBxieQBwidBBi0ICuArQgIAXgiAAQgnBVgrBUIGiAAIAVgJIBtBBQgDAFgHAHIgOAJQhxFTiuDVQimDPkPCJQgyhEgxgkgAEEnMQgyg1grgjIA7g3QAsAiA1A3QAuAxAiAuIhBA3Qgdgqgxg2gAHUnxQgxg1gtgmIA8g1QAvAmAxAzQAyA0AeArIhDA0Qgbgngwg1g");
	this.shape_4.setTransform(57.4,186.2,0.434,0.434);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ao2GwQGAh2EFjbQEEjYCFk2QAsAjBdAzQiME1kJDjQkLDpl0CAQgBALgHAKQgHAKgJAEgAl5ltQhwg0h3grIBGh+QB0AjB4A2QB8A3BQA2IhNCGQhNg1h9g6g");
	this.shape_5.setTransform(264.5,123.1,0.434,0.434);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AppHWIAAiRITTAAIAACRgAnNlFIAAiQIOjAAIAACQg");
	this.shape_6.setTransform(205.7,122.3,0.434,0.434);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ApuhWITdAAIAACSIygAAQgHALgNAIQgNAHgPABg");
	this.shape_7.setTransform(152.4,120.8,0.434,0.434);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AohHkIAUggIAAwzIDIALQgCAcgqAGIAAPiQEPhNDGiMQDWiWB7jVQATAXAjAhQAeAdAZAUQkcHVq4C2QgCAKgHAJQgIAKgJADg");
	this.shape_8.setTransform(97.3,122,0.434,0.434);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AluKMIAA0XIDIAMQgCAZgpAJIAAGqIAegqQCBAwCWBDQCaBFBxA4IhUCRQhng6iJhBQiIhAh0gtIAALQg");
	this.shape_9.setTransform(46.9,121.2,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApLJBIDJv1IgRPoIC+ytIApNzIAOGSICe3/ICfX/IAy0LIDCS2IABAAIgQvrIDIP1IpMEyg");
	this.shape.setTransform(160.4,88.8,0.541,0.541);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AU6J+QkmAAiBhsQimiLAAl1QAAl7CriWQCQh+FFAAQD3AACMAPQBGAIAUAHIgYGHIiqAAIgZi8QhfgMhdAAQg9AAgaAEQg6AJgqAeQh3BWAAEJQAAEFBJBoQAmA4BBAJQAoAGCxgDIAAj9IibgrIAAijIHVAAIAYKugAB5JnIAYi+IBggRIg5ppIkKM4ImDAAIkds6Ig7JrIBgARIAZC+InrAAIAYi+IBggRIBYs3IhhgQIgYi+IJXAAIENMFID8sEIJ+AAIgZC+IhgARIBMM1IBgARIAZC+gA9bJnIAYi+IBggRIAAs1IhggRIgYi+IJoAAIgYC+IhgARIAAM1IBgARIAYC+g");
	this.shape_1.setTransform(160.4,183.6,0.541,0.541);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYBoQgkgmAAhCQAAhBAkgmQAjgmA7AAQA2AAAgAlIAAggIAeAAIAABhIgfAAQgDgjgWgTQgVgUgjAAQgrAAgaAeQgbAeAAAzQAAA2AbAfQAaAeAsAAQA+AAANhFIAnAAQgFAvgdAaQgeAZg1AAQg9AAgjgmg");
	this.shape_2.setTransform(127.2,237.3,0.541,0.541);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsCIIAAgcIAnAAIgXg8Ih5AAIgaA8IApAAIAAAcIhsAAIAAgcIAfAAIBpjzIAnAAIBoDzIAeAAIAAAcgAAwATIgwh0IgxB0IBhAAg");
	this.shape_3.setTransform(142.8,237.3,0.541,0.541);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiDCIIAAgcIAmAAIAAjXIgmAAIAAgcIB5AAQBEAAAlAjQAlAkAABAQAABCglAjQglAjhEAAgAg4BsIAuAAQAwAAAcgcQAcgdAAgzQAAgygcgdQgcgcgwAAIguAAg");
	this.shape_4.setTransform(159.7,237.3,0.541,0.541);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsCIIAAgcIAnAAIgXg8Ih5AAIgaA8IAoAAIAAAcIhrAAIAAgcIAeAAIBqjzIAnAAIBoDzIAeAAIAAAcgAAwATIgwh0IgxB0IBhAAg");
	this.shape_5.setTransform(112.4,237.3,0.541,0.541);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBCIIAAgcIAuAAIAAhWIhaiBIgVAAIAAgcIBnAAIAAAcIgnAAIBDBjIBDhjIgmAAIAAgcIBlAAIAAAcIgWAAIhdCBIAABWIAtAAIAAAcg");
	this.shape_6.setTransform(209.7,237.3,0.541,0.541);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABDCIIAAgcIAmAAIAAjXIgDAAIhZDzIgdAAIhYjzIgBAAIAADXIAjAAIAAAcIhsAAIAAgcIAkAAIAAjXIgkAAIAAgcIBkAAIBODfIBPjfIBkAAIAAAcIglAAIAADXIAlAAIAAAcg");
	this.shape_7.setTransform(191.6,237.3,0.541,0.541);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhyCIIAAgcIAmAAIAAjXIgmAAIAAgcIDlAAIAABSIgdAAIAAg2Ih+AAIAABcIA9AAIAAgoIAcAAIAABqIgcAAIAAgoIg9AAIAABhIB+AAIAAg6IAdAAIAABWg");
	this.shape_8.setTransform(173.9,237.3,0.541,0.541);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AirC7QBpgmA+hFQA8hGAVhpIkiAAIAAgvIE0AAIAEgCIAtAhIgHAFQggCHhDBPQg+BLh0AtQgPgZgQgQgAB7iHQgPgRAAgVQAAgXAPgQQARgPAWAAQAVAAAQAPQAPARABAWQgBAVgPARQgQAPgVAAQgXAAgQgPgACIjHQgKALAAAPQAAAOAKALQAKALAQAAQAOAAALgMQAKgKAAgOQAAgPgLgLQgKgLgOAAQgPAAgLALg");
	this.shape_9.setTransform(243.4,308.1,0.541,0.541);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai7COQD+hOBYjOQARANAdAQQguBmhYBJQhXBOh7AqQgBAJgHADgAjIiXIAXgqQAmAMAoARQApATAaASIgZAsQg1gkhaggg");
	this.shape_10.setTransform(218,309.7,0.541,0.541);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzgeIhpAZIgKgmIBrgXIgVhlIA1gFQAAAGgKAFIATBWICWghIADgDIAgAWQgCADgEABQgfBMg7A6QgKgKgWgNQATgSATgYQATgbAKgVIh1AZIAsDMIgnAIg");
	this.shape_11.setTransform(196.6,311.3,0.541,0.541);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVBEIizAXIgFgtICzgXIgMhgIiTATIgGguICUgUIgKhcIA+gDQABAIgMAEIAGBOICPgUIAHAvIiPASIAKBgIC0gVIAGAsIi0AXIARCVIgwAFg");
	this.shape_12.setTransform(173,308.9,0.541,0.541);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiACdQBwgvA8hOQA/hMAiiFIA/AUQgDAHgLAAQgnCFhCBOQhDBThxAzQgRgZgQgNgAiwhXQgNgngOgbIAtgPQAOAaAOAoQAOAmAFAbIguAPQgFgbgOgmgAgkh2QgHgngIgeIAxgHQAHAeAGAnQAIApABAcIgvAHQgCgdgHgog");
	this.shape_13.setTransform(149.4,309.6,0.541,0.541);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjMgcIGaAAIAAAwImHAAQgFAHgLACg");
	this.shape_14.setTransform(125.6,308.7,0.541,0.541);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhqDjQgFgbgIgSIAvABQAaAAAGgDQAIgDABgNIAAjXIihAAIAAgvIChAAIAAhjIA9ADQgCAJgMABIAABWIChAAIAAAvIihAAIAADWQAAAsggANQgUAHg3AAIgPAAgAB0BaQgcgrgXgbIAogUQA3A9AsBOIgsAaQgQghgcgqgAjaCLQA5g3AchRIAtARQgkBcg2A0gAB/iFQgQgQAAgXQAAgXAQgQQAQgPAWAAQAXAAAPAQQAQAQABAWQgBAXgQAQQgPAQgXAAQgWAAgQgQgACLjGQgLALAAAPQAAAQALAKQALALAPAAQAQAAALgLQAKgLAAgPQAAgPgLgLQgLgLgPAAQgPAAgLALg");
	this.shape_15.setTransform(102.4,308.2,0.541,0.541);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABZBxQgvgvgjgdQgkAsgtAoQg1AvguAcQgOgTgWgTQBcgyBOhaQBFhPAkhTIjmAAIAAgvIEBAAIAJgEIAoAXQgDAEgGACQgnBbg4BLQAoAfAwAsQA0AvAhAkIgsAmQgdgkgxgvg");
	this.shape_16.setTransform(77.8,309.5,0.541,0.541);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAACaQCjggAAiAQAAg+gngoQgqgqhLAAIgSABIAuAMQgCAIgLAAQgPB/gjBGQgoBNg8AAQgmAAgXgfQgZgjgBg6QAAhaBAg/QBBg/BdAAQBlAAA4A4QAzAzAABRQAABTguAyQgtAvheAXQgTgdgLgNgAiAhWQgnAvAAA6QAAAjAMAWQALAVARAAQAmAAAdhLQAahDAIhkQg/ALgnAwg");
	this.shape_17.setTransform(221.2,275.5,0.541,0.541);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjODdIAAm5IC5AAIAACwIiLAAIAAEJgAighPIBfAAIAAglIhfAAgAigiWIBfAAIAAgjIhfAAgABRCuIiFAAIAAAZIgrAAIAAjRIC7AAIAAC3IAjAAQAZAAAEgBQAEgCAAgJIAAjMIiPAAIAAixIC+AAIAAF+QAAAngXALQgSAIhGAAQgDgYgMgWgAg0CLIBkAAIAAgqIhkAAgAg0A/IBkAAIAAgnIhkAAgAA+hOIBiAAIAAgmIhiAAgAA+iWIBiAAIAAgjIhiAAg");
	this.shape_18.setTransform(196,275.4,0.541,0.541);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjpCxQAlgcAbgZIAAh6Ig6AAIAAgpIBlAAIAACeQAXAmAzALQAfAHBVAAQBpAABBgEQgLAWgEAWQg+AChVAAQhgAAgjgIQg2gLgggpQgRATgqAnQABAGgGADgABwCZQgDgUgJgTIAvAAQAFgBACgBQACgCAAgFIAAkcIi8AAIAABbQAACdgwBNQgLgNgagMQAagoAKhAQAHgqAAg/IAAiCIERAAIAAFEQAAAegSAJQgPAIgsAAIgKAAgAgGB1IAAiFICEAAIAABuIhiAAIAAAXgAAcA/IA+AAIAAgyIg+AAgAgQgpIAAggIA3AAIAAgjIg0AAIAAghIA0AAIAAglIAyADQgBAHgKABIAAAaIA7AAIAAAhIg7AAIAAAjIA/AAIAAAggAi5idQgUgYgWgTIAlgXQAWATAUAVQAWAYAKASIgoAbQgJgSgUgZg");
	this.shape_19.setTransform(170.2,275.2,0.541,0.541);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6CiQgagVAAgqIAAgbIA3AAIAAAdQAAAOAIAIQAHAJAMAAQAOAAAHgKQAIgKAAgYIAAhRQAAgOgIgJQgGgHgMAAQgUAAgLAZIgvAAQAEh6AAg7ICTAAIgCAyIheAAIgEBNIABABQALgNALgEQAHgEAQAAQAiAAAQAZQAPAXAAAsIAAAyQAAA5gTAaQgUAbgsAAQgmAAgWgSg");
	this.shape_20.setTransform(146.4,275.5,0.541,0.541);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAPQgfgggYgVIAlghQAaAWAeAgQAfAdATAXIgoAlQgSgXgegig");
	this.shape_21.setTransform(129.1,283.5,0.541,0.541);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhTBgIAAgWIA3AAIAAAZQAAAjAcAAQAbAAgBgqIAAgbQABgcgMgLQgMgLgbAAIAAgvQAaAAAKgLQAMgMAAgfQAAgZgGgLQgFgLgNAAQgMAAgHAIQgHAIAAAUIAAAPIg3AAIAAgRQgBglAWgWQAWgYAmAAQAmAAAVAcQAUAaAAAmQAAAhgHARQgJATgWANQAaALAJAUQAJASgBAlQAAA1gVAaQgWAagrAAQhRAAAAhXg");
	this.shape_22.setTransform(118.6,275.4,0.541,0.541);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAPQgggggYgVIAlghQAaAWAeAgQAgAeASAWIgoAlQgRgXgegig");
	this.shape_23.setTransform(101.3,283.5,0.541,0.541);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCC0IAAkYIgwAAIAAghQAvgZAXgVIAfAAIAAFng");
	this.shape_24.setTransform(91.3,275.2,0.541,0.541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// black
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("A4/cIMAAAg4PMAx/AAAMAAAA4Pg");
	this.shape_25.setTransform(160,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,360);


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
	this.instance.setTransform(0,0,1.332,1.332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319.7,1200);


(lib.imgathlete1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_athlete1();
	this.instance.setTransform(0,0,1.342,1.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,439,1208.1);


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


(lib.ctalabelsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#032E53").s().p("AhTCJQBggFAqgRQApgSABglQAAgYgQgOQgRgPgeAAQgoABgsAVQgoATgKAUIglgRQAHgFAHgtQAJgwAAg0IAxAHQgCAFgIACQgGBWgKAPIABAAQAagRAlgMQAkgMAhAAQAsAAAaAWQAaAWAAAoQgBA3gvAaQgxAbhvAFQgIgagFgJgAhNiHIALgkQBeALA1AWIgMAlQg3gWhbgMg");
	this.shape.setTransform(246.1,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#032E53").s().p("Ag+CKQBVgCAqgPQAvgRAAgmQAAgXgPgOQgPgNgeAAQgaAAgeAOQgjAQgSAaIglgRQAJgKAIgjQAJgiAEgsIhWAAIAAgmIBaABQACgcAAgnIA0AEQgBAHgMACIgCA1QAcgBAqgHQAsgGAggJIAGAnQhBAQhcAFQgIBFgHARQAUgQAbgIQAcgKAYAAQArAAAZATQAZAXAAAoQAAA4g2AbQgxAYhjABQgFgVgGgOg");
	this.shape_1.setTransform(212.3,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#032E53").s().p("Ag9CMQgjgIgSgVQgQgUAAgbQAAgrAlglIAhAPQgfAdAAAeQAAAQAKAMQAMAOAVAEQAWAEAjAAQBCAAA1gKIADAnQgvAIhGAAQg1AAgWgFgAgwg7QAbgVAdgSQghAFhXgBIgBgmQAcABAwgBQAvgBAagCQAsgDAbgGIAEAoQghAFgqAWQgeARgWATg");
	this.shape_2.setTransform(180.3,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#032E53").s().p("AghCUQgUgRAAgaQAAgcAYgRQAVgPAdAAQAMAAARAEIgFhZIhaACIgBgkQA0ABAlgCQgDhAAAgYIAzACQgBAGgJACQAAAoABAjQAogFAfgJIAEAlQgZAIgxAEIAFBmQAsATAfAbIgUAkQgYgZgegPQgBAfgPAPQgQARglAAQggAAgVgQgAgHBTQgOAIAAAOQAAANANAGQAJAHATAAQAiAAAAgkIgBgMQgQgGgQAAQgSAAgKAGgAieBfQgEglAAgrQAAhFAUhqIAyAJQgBAHgKAAQgXBWAABbQAAAmADANQAIgYATguIAWAZIgVArQgRApAAANQAAAHADALIglADQgIgUgEgqg");
	this.shape_3.setTransform(147.1,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#032E53").s().p("AAUCUIAeAAQAFAAABgFIAAidIhVAAIAAAdIg1AAIAABhIA1gIIABASQATgLAygiIAKAbQgiAbgeAWQABAFgEADIgPgaIiCAXQgBAEgFACIgLgnIA/gIIAAhmIg7AAIAAgdIA7AAIAAglIglAAIAAgFIgGAGQgKgOgPgKQAsgsAag9IAqAGQgCAGgGAAIgBABQAuAlATAWIgWAdQgQgVgqglQgTAfgRAYIBaAAIAAAeIgpAAIAAAlIA1AAIAAggICPAAIAAgeIh1AAIAAgdIB1AAIAAgdIh9AAIAAgfICfAAIAAB3IAgAAIAAAgIhaAAIAAANQAFAbAOAcQAXgZARgdIAhAWQgCAEgHgBQgPATgcAbIgVgQQAaA1AxAXQgNANgKASQgsgZgbg5IAAA/QAAAYgMAHQgLAGgmAAQgBgMgIgUgAimAkIAZgHQANAlAEAhIgaAHQgEghgMglgAhLBdQAMghAFghIAiALQgCAEgHAAQgIAhgLAagAgVAUIAXgPQAaAXAOAaIgaASQgLgYgagcg");
	this.shape_4.setTransform(110.2,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#032E53").s().p("AioCvIAAgeIBlAAQgKgagMgUIAWgHIgoAAIAAhlIDXAAIAABlIgqAAIAdAJQgCAEgHAAQgIAQgOAYIBoAAIAAAegAggCQIgBABIA+AAQAPgdAIgYIhtAAQAUAdAFAXgAhIA/ICPAAIAAgsIiPAAgAi0gQQAigPAfgdQgTgVgcgQIAUgVQAeASASASQAVgYAMgZIheAAIAAgeIByAAIAGgBIAZAMQgCADgDACQgQArggAlIB9AAQglgugWg2IAfgJQAJAWAOAXQAcgWAQgUIAgAYQgCADgHgBQgWATgcAUQAJANAOAOQAcgZATgVIAfAXQgCADgHgBQgYAWgYASQAcAYAjAPQgPAMgKAQQgvgUgngsIAAAXIiOAAIAAgVQgnAoguAXQgKgNgNgLg");
	this.shape_5.setTransform(73.3,19.4);

	this.arrow = new lib.ctaarrow();
	this.arrow.setTransform(21.1,21.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.8,259.9,37.3);


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


(lib.ctasignupon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(167.5,40.8,1,1,0,0,0,137.4,26);
	this.cta_label.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.cta_label.cache(-2,0,264,41);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.instance = new lib.ctabgtint();
	this.instance.setTransform(300,35,1,1,0,0,0,300,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


(lib.ctasignupoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_label
	this.cta_label = new lib.ctalabelsignup();
	this.cta_label.setTransform(167.5,41,1,1,0,0,0,137.4,26);

	this.timeline.addTween(cjs.Tween.get(this.cta_label).wait(1));

	// cta_bg
	this.cta_bg = new lib.ctabg();

	this.timeline.addTween(cjs.Tween.get(this.cta_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,70);


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
	this.cta = new lib.ctasignup();
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