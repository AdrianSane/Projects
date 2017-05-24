/************************************

*    Droga5 Banner CSS
*    Adrian Velazquez
*    Junior Interactive Developer
*    ??? - 2016
    --------------------
*    avelazquez@droga5.com

************************************/
(function(){
    // define banner elements
    var banner = document.getElementById('banner'),
        w = 300,
        h = 250,

        // initialize the main timeline
        mainTl = new TimelineLite();

      // initialize some settings
      mainTl
          //.set(stuff {doThis});

  // main animation function
    function main() {

        mainTl
        // kick off animation
        //.to(stuff here, .03, {opacity:1, delay:.5})

    }
  // end main animation function

  // cta hover effect
  document.getElementById('hit').onmouseover =
    function(event)
    {
      {
         // cta over actions
         //TweenMax.to(button, .1, {scale:1.1,  ease:Power1.easeInOut});

      }
    };

  document.getElementById('hit').onmouseout =
    function(event)
    {
      {
          // cta out actions
          //TweenMax.to(button, .2, {scale:1,  ease:Back.easeInOut});
      }
    };

    // start animation
    main();
})();
