(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        bg_gradient = document.getElementById('bg_gradient'),
        bg = document.getElementById('bg'),
        bottom_white = document.getElementById('bottom_white'),
        card = document.getElementById('card'),
        chase_logo = document.getElementById('chase_logo'),
        text_1 = document.getElementById('text_1'),
        text_2 = document.getElementById('text_2'),
        text_3 = document.getElementById('text_3'),
        cta = document.getElementById('cta'),
        replay = document.getElementById('replay'),
        WIDTH = 300,
        HEIGHT = 50;

        mainTl = new TimelineLite({delay:0.4});

    document.execCommand("BackgroundImageCache",false,true);

    mainTl.set(bottom_white, {x:205});
    mainTl.set(banner, {autoAlpha:1});
    mainTl.set(card, {x: 167, y: 2, force3D:true, rotateZ:0.001});
    mainTl.set(chase_logo, {x: 247, y: 15});

    // main animation function

    function main() {

        // add tweens to main timeline
        mainTl
            // add a start label
            .add("start", 0.5)
            // show the card
            .from(card, 0.75, {x: 730, ease:Power3.easeOut}, "start+=0.2")
            // show the bottom white footer area
            .from(bottom_white, 0.5, {x: WIDTH, width: 0, transformOrigin:"left", ease:Power3.easeOut}, "start+=0.2")
            // show the logo
            .from(chase_logo, 0.4, {x:"+=37", autoAlpha: 0, ease:Power3.easeOut}, "start+=0.6")

            // show the text and animate it in
            .to(text_1, 0.8, {autoAlpha: 1}, "start")
            .from(text_1, 0.4, {y: "+=10", ease:Power3.easeOut}, "start+=0.1")

            // fade out the text

            // frame 2
            .add("frame2", "+=1.25")
            .to(text_1, 0.4, {autoAlpha:0}, "frame2")

            // show the background image
            .set(bg, {scale: 1.5}, "frame2+=0.2")
            .to(bg, 1, {y: 0, autoAlpha: 1, ease:Power3.easeOut}, "frame2+=0.2")
            .to(bg, 5, {scale: 1, ease:Linear.easeNone, force3D:true, z:0.1, rotationZ:0.01},"frame2+=0.2")

            // scale the card down
            //.to(card, 0.8, {scale:0.42, x:124, y:150, ease:Power3.easeOut}, "frame2+=0.2")
            //.to(bottom_white, 0.4, {y: "+=34", ease: Power3.easeOut}, "frame2+=0.2")


            .to(text_2, 0.8, {autoAlpha:1}, "frame2+=0.6")
            .to(text_2, 0.4, {y: "+=10", ease:Power3.easeOut}, "frame2+=0.6")


            // end frame
            .to(text_2, 0.4, {autoAlpha: 0})

            .add("endframe")
            .to(bg, 0.65, {scale: 1.5, autoAlpha: 0, ease:Power3.easeIn}, "endframe")

            .to(text_3, 0.8, {autoAlpha: 1}, "endframe+=0.4")
            .from(text_3, 0.4, {y:"+=10", ease:Power3.easeOut}, "endframe+=0.4")

            // scale card
            //.to(card, 0.4, {scale:0.67, x:36, y:101, ease:Power3.easeOut}, "endframe+1")
            //.to(bottom_white, 0.6, {y: 190, ease:Power3.easeOut}, "endframe+1")

            //.to(replay, 0.3, {autoAlpha:1, ease:Power3.easeOut}, "endframe+=1.4")
            //.from(replay, 0.8, {rotation:-180, transformOrigin:"5px 5px", ease:Power3.easeOut}, "endframe+=1.4")

            // scale logo down
            .to(chase_logo, 0.4, {y:3, ease:Power1.easeOut}, "endframe+=1.3")

            .to(cta, 0.4, {autoAlpha:1}, "endframe+=1.4")
            .from(cta, 0.4, {y: "+=30", ease: Back.easeOut}, "endframe+=1.4");

    }

    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
            mainTl.set(cta, {backgroundColor:"rgb(47, 125, 72)", ease:Power1.easeInOut});
        }
      };

    document.getElementById('hit').onmouseout =
      function(event)
      {
        {
            mainTl.set(cta, {backgroundColor:"#2ba854", ease:Power1.easeInOut});
        }
      };
/*
      replay.onmousedown = function(event) {
        mainTl.play("start");
        TweenMax.to(replay, 0.3, {autoAlpha:0})
      };

      replay.onmouseover = function(event) {
        TweenMax.to(replay, 0.3, {rotation:180, transformOrigin:"5px 5px"})
      };

      replay.onmouseout = function(event) {
        TweenMax.to(replay, 0.3, {rotation:0, transformOrigin:"5px 5px"})
      };
*/
    main();
})();
