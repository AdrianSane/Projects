(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        familySmall = document.getElementsByClassName("familySmall"),
        familyContainer = document.getElementsByClassName("familyContainer"),
        txt = document.getElementsByClassName("txt"),
        plate = document.getElementsByClassName("plate"),
        cta = document.getElementsByClassName("cta"),
        dark = document.getElementsByClassName("dark"),
        endFrameBG = document.getElementsByClassName("endFrameBG"),
        familyFrame = document.getElementsByClassName("familyFrame"),
  //hide = [plate, cta],

        // set the blur to 0px
        blur = {a:0,b:0},

        // initialize a timeline
        mainTl = new TimelineLite();

    // initialize some settings

      // The blur function
      function applyBlur(){
        TweenMax.set([familyContainer], {webkitFilter:"blur(" + blur.a + "px)",filter:"blur(" + blur.a + "px)"});
        TweenMax.set([endFrameBG], {webkitFilter:"blur(" + blur.b + "px)",filter:"blur(" + blur.b + "px)"});
      };

      // set txt to invisible
      mainTl
          .set(txt, {opacity:0})
          .set(familyFrame, {scale:1.99})
          .set(endFrameBG, {scale:1.5})
          .set(plate, {y:-200, rotation:25})
          .set(cta, {scale:.5});
  //.set(hide, {opacity:0});


    // main animation function
    function main() {

        mainTl
            // frame 1
            .to(familyContainer, 2, {scale:0.5, left:0, right:0, top: 0, bottom: 0, ease: Sine.easeOut}) // scale family container down
            .to(familySmall, 2.5, {opacity:0, ease: Sine.easeOut}, "-=1.25") // hide outer family image

            // frame 2
            .to(blur, .5, {a:2, onUpdate:applyBlur, ease: Sine.easeIn}, "-=.5") // blur the image to 4px
            .to(txt, .5, {opacity:1, ease: Sine.easeIn}, "-=1") // reveal txt
            .to(blur, .5, {b:1, onUpdate:applyBlur, ease: Sine.easeIn}, "-=1") // blur the image to 1px
            .to(endFrameBG, 1.3005555, {scale:1, ease: Sine.easeOut}, "-=2.5") // rscale endframe bg
            .from(dark, .5, {opacity:0}, "-=1") //darken bg
            //.to(familyFrame, .5, {opacity:1},"-=1") // reveal family frame
            .to(familyFrame, .5, {y:-500, ease: Sine.easeOut}, "+=1.25") // slide family frame up
            .to(txt, .5, {opacity:0, ease: Sine.easeIn}, "-=.5") // hide txt

            // frame 3
            .to(plate, .5, {opacity:1, rotation:0, y:0, ease: Sine.easeIn}, "-=.2")
            .to(cta, .5, {scale:1, opacity:1, transformOrigin:"50% 50%", ease: Bounce.easeOut}, "-=.25");
    } // end main function

    // cta event handlers
    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
           // cta over actions
           TweenMax.to(cta, .15, {scale:1.02, y:-2, ease: Sine.easeOut});
           //TweenMax.to(plate, .15, {scale:1.05, ease: Sine.easeOut});
        }
      };

    document.getElementById('hit').onmouseout =
      function(event)
      {
        {
            // cta out actions
            TweenMax.to(cta, .15, {scale:1, y:0, ease: Sine.easeIn});
        }
      };

    // starts animation
    main();
})();
