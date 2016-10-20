(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        familyContainer = document.getElementsByClassName("familyContainer"),
        txt = document.getElementsByClassName("txt"),
        plate = document.getElementsByClassName("plate"),
        dark = document.getElementsByClassName("dark"),
        cta = document.getElementsByClassName("cta"),
        endFrameBG = document.getElementsByClassName("endFrameBG"),
        familyFrame = document.getElementsByClassName("familyFrame"),
        familyBigFrame = document.getElementsByClassName("familyBigFrame"),

        // set the blur to 0px
        blur = {a:0,b:0},

        // initialize a main timeline
        mainTl = new TimelineLite();

    // initialize some settings
      function applyBlur(){ // The blur function
        TweenMax.set([familyContainer], {webkitFilter:"blur(" + blur.a + "px)",filter:"blur(" + blur.a + "px)"});
        TweenMax.set([endFrameBG], {webkitFilter:"blur(" + blur.b + "px)",filter:"blur(" + blur.b + "px)"});
      };

      mainTl
          .set(txt, {opacity:0}) // set txt to invisible
          .set(familyFrame, {scale:7, left:-651, top:50}) // scale family frame
          .set(endFrameBG, {scale:10, x:-580}) // scale endframe bg
          .set(plate, {y:-400, rotation:10}) // position and rotate plate
          .set(cta, {scale:.5}) // set scale for cta
          .set(familyBigFrame, {scale:1.1, x:-93}); // set scale for

    // main animation function
    function main(){

        mainTl
          // frame 1
          .to(familyContainer, 2, {scale:.14, left:157, right:0, top:-6, bottom: 0, ease: Sine.easeOut}) // scale family container down
          .to(familyBigFrame, 2, {scaleX:.9, scaleY:.9, x:-121, y:-24, ease: Sine.easeOut, transformOrigin:"50% 50%"}, "-=2") // hide outer family image
          .to(familyBigFrame, 1, {opacity:1}, "-=.5")
          .to(endFrameBG, 2, {scale:1.5, x:0, ease: Sine.easeOut}, "-=2.5") // reveal endframe bg

          // frame 2
          .to(txt, .5, {opacity:1, ease: Sine.easeIn}, "+=.05") // reveal txt
          .to(txt, .5, {opacity:0, ease: Sine.easeIn}, "+=1.75") // hide txt
          .to([familyFrame, familyBigFrame], .5, {y:-3000, ease: Sine.easeOut}) // slide family frame up

          // frame 3
          //.to(blur, .5, {b:2, opacity:.25, onUpdate:applyBlur, ease: Sine.easeIn}, "-=1") // blur the bg image to 1px
          .from(dark, .5, {opacity:0}, "-=.5") // reveal dark overlay effect
          .to(plate, 1, {opacity:1, rotation:0, y:-42, x:50, ease: Sine.easeIn}, "-=1") // reveal plate
          .to(cta, .5, {scale:1, opacity:1, transformOrigin:"50% 50%", ease: Bounce.easeOut}, "-=.25"); // reveal cta
    } // end main function

    // cta event handlers
    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
           // cta over actions
           TweenMax.to(cta, .15, {scale:1.02, y:-2, ease: Sine.easeOut});
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
