function start(){
  var tl = new TimelineLite();

  var txtAssets = [".txt1", ".txt2", ".txt3", ".txt4", ".cta"]
  TweenLite.set(txtAssets, {autoAlpha:0});
  tl
    .to(".txt1", 1, {autoAlpha:1})
    .to(".txt1", 1, {autoAlpha:0}, "+=1.5");
  tl
    .to(".txt2", 1, {autoAlpha:1})
    .to(".txt2", 1, {autoAlpha:0}, "+=1.5");
  tl
    .to(".txt3", 1, {autoAlpha:1})
    .to(".txt3", 1, {autoAlpha:0}, "+=1.75");
  tl
    .to(".txt4", 2, {autoAlpha:1})
    .to(".cta", 1.5, {autoAlpha:1, y:-10}, "+=.5");
    return tl;
};
function master(){
  var masterTL = new TimelineLite();
  masterTL
					.to("#qnBanner", 0.1, {autoAlpha:1, delay:.15})
          .add(start());
  console.log(masterTL.duration());
}
master();
