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
        //TweenMax.set([familyContainer], {webkitFilter:"blur(" + blur.a + "px)",filter:"blur(" + blur.a + "px)"});
        TweenMax.set([endFrameBG], {webkitFilter:"blur(" + blur.b + "px)",filter:"blur(" + blur.b + "px)"});
      };

      mainTl
          .set(txt, {opacity:0}) // set txt to invisible
          .set(familyFrame, {scale:5, x:225, y:-216}) // scale family frame
          .set(endFrameBG, {scale:10, y:-800, x:415}) // scale endframe bg
          .set(plate, {y:-400, rotation:25}) // position and rotate plate
          .set(cta, {scale:.5}) // set scale for cta
          .set(familyBigFrame, {x:50, y:5});
          //.set(familyContainer, {scale:2}) // scale endframe bg
          //.set([familyFrame, familyBigFrame], {opacity:0}); // test

    // main animation function
    function main(){

        mainTl
            // frame 1
            .to(familyContainer, 2, {scale:.2, left:-95, right:0, top: 180, bottom: 0, ease: Sine.easeOut}) // scale family container down
            .to(familyBigFrame, 2, {left:-7, right:0, top: 9, bottom: 0, ease: Sine.easeOut}, "-=2") // scale big picture
        //.to(familyBigFrame, 2, {opacity:0}, "+=.5") // removed after review
            .to(endFrameBG, 2.5, {scale:1.5, ease: Sine.easeOut, y:0, x:0}, "-=2.5") // reveal endframe bg

            // frame 2
            .to(txt, .5, {opacity:1, ease: Sine.easeIn}, "+=.25") // reveal txt
            .to(txt, .5, {opacity:0, ease: Sine.easeIn}, "+=1.5") // hide txt
            .to([familyFrame, familyBigFrame], .5, {y:-3000, ease: Sine.easeOut}, "-=.5") // slide family frame up


            // frame 3
            .to(blur, .5, {b:2, opacity:.25, onUpdate:applyBlur, ease: Sine.easeIn}, "-=.5") // blur the bg image to 1px
            .from(dark, .5, {opacity:0}, "-=.5") // reveal dark overlay effect
            .to(plate, .5, {opacity:1, rotation:0, y:47, x:-30, ease: Sine.easeIn}, "-=.5") // reveal plate
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
