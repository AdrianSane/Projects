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
          .set(familyFrame, {scale:7}) // scale family frame
          .set(endFrameBG, {scale:10, y:-1300}) // scale endframe bg
          .set(plate, {y:-400, rotation:25}) // position and rotate plate
          .set(cta, {scale:.5}) // set scale for cta

    // main animation function
    function main(){

        mainTl
          // frame 1
          .to(familyContainer, 2, {scale:.15, left:10, right:0, top: 220, bottom: 0, ease: Sine.easeOut})
          .to(familyBigFrame, 2, {scale:.99,  left:-15, right:0, top: -8, bottom: 0, ease: Sine.easeOut, transformOrigin:"50% 64%"}, "-=2")
          //.to(familyBigFrame, 1, {opacity:0,}, "-=.5")
          .to(endFrameBG, 2.55, {scale:1, ease: Sine.easeOut, y:0}, "-=2.55") // reveal endframe bg

          // frame 2
          .to(txt, .5, {opacity:1, ease: Sine.easeIn}) // reveal txt
          .to(txt, .5, {opacity:0, ease: Sine.easeIn}, "+=2") // hide txt
          .to([familyFrame, familyBigFrame], .5, {y:-5000, ease: Sine.easeOut}, "-=.25") // slide family frame up

          // frame 3
          .to(blur, .5, {b:2, opacity:.25, onUpdate:applyBlur, ease: Sine.easeIn}, "-=.5") // blur the bg image to 1px
          .from(dark, .5, {opacity:0}, "-=.5") // reveal dark overlay effect
          .to(plate, .5, {opacity:1, rotation:0, y:62, x:-89, ease: Sine.easeIn}, "-=.5") // reveal plate
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
