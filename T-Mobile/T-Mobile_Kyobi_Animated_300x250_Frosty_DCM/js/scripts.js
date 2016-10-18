/*

    Droga5 Banner JS
    Simon Abrams
    --------------------
    sabrams@droga5.com

*/


(function() {

    // defines banner elements
    var banner = document.getElementById('banner'),
        hit = document.getElementById('hit'),
        cta = document.getElementById('button'),
        text1 = document.getElementById('text1'),
        text2 = document.getElementById('text2'),
        text3 = document.getElementById('text3'),
        text4 = document.getElementById('text4'),
        image = document.getElementById('image'),
        wendys = document.getElementById('logo-wendys'),
        headline = document.getElementById('headline'),
        legal = document.getElementById('legal'),
        disclaimer = document.getElementById('disclaimer'),

        // constants for banner dimensions
        WIDTH = 300,
        HEIGHT = 250,

        ctaOverColor = "#000",
        ctaDefaultColor = "#2ba854";


    var mainTl = new TimelineMax();



    // main animation function

    // initialize banner here
    mainTl.set(banner, {autoAlpha:1});

    // add tweens to main timeline
    mainTl
        // add a start label
        .add("start", 0.5)

        // show copy1
        .from('#logo', 0.75, {autoAlpha: 0, ease:Strong.easeOut}, 'start')
        .from(text1, 1, {x:-WIDTH, ease:Elastic.easeOut.config(1, 0.75)})
        // show copy2
        .from(text2, 1, {x:WIDTH, ease:Elastic.easeOut.config(1, 0.75)}, "start+=2.5")
        // transition out
        .add("copy1Out", 5.5)
        .to(text1, 0.8, {x:WIDTH, ease:Elastic.easeInOut.config(1, 0.75)}, "copy1Out")
        .to(text2, 0.8, {x:-WIDTH, ease:Elastic.easeInOut.config(1, 0.75)}, "copy1Out")
        // image
        .to(logo, 0.2, {autoAlpha:0})
        .from(image, 1, {y:HEIGHT, ease:Expo.easeOut})
        
        // transition image out
        .add("imageOut", 9)
        .to(image, 0.75, {autoAlpha: 0, ease:Power1.easeOut}, 'imageOut')
        .to(logo, 0.2, {autoAlpha:1}, "imageOut+=1")

        // partner frame
        .from(text3, 0.5, {x:-WIDTH, ease:Back.easeOut.config(1)}, "imageOut+=1")
        .from(text4, 0.5, {x:WIDTH, ease:Back.easeOut.config(1)}, "imageOut+=1.2")
        .from(wendys, 0.5, {autoAlpha:0, scale:0, ease:Back.easeOut}, 'imageOut+=1.6')
        .from(legal, 0.5, {autoAlpha:0}, 'imageOut+=1')
        
        // endframe
        .add("endFrame", 12.75)
        .from('#endFrameBg', 0.75, {autoAlpha:0, ease:Power1.easeOut}, "endFrame")
        .from(headline, 0.5, {y:HEIGHT, ease:Strong.easeOut}, "endFrame+=0.9")
        .from(cta, 0.5, {y:"-=50", ease:Back.easeOut}, "endFrame+=1.6")
        .from(disclaimer, 0.5, {autoAlpha:0}, 'endFrame+=0.9');

        // console.log(mainTl.duration());

    // cta event handlers
    hit.addEventListener('mouseover', function(e) {
        TweenMax.to(cta, 0.25, {scale:1.1, ease:Power1.easeInOut});
    });

    hit.addEventListener('mouseout', function(e) {
        TweenMax.to(cta, 0.25, {scale:1, ease:Back.easeInOut});
    });


    
    //---SLIDER - REMOVE -----
    // var slider = $("#ctrl_slider"),
    //     progress = $(".progress");
    // sliderValue = {value:0};
    // slider.slider({
    //     range: false,
    //     min: 0,
    //     max: 100,
    //     step:.1,
    //     start:function() {
    //         mainTl.pause();
    //     },
    //     slide: function ( event, ui ) {
    //         mainTl.progress( ui.value / 100 );
    //     },
    //     stop:function() {
    //         mainTl.play();
    //     }
    // });

    // mainTl.eventCallback("onUpdate", function() {
    //     var prog = mainTl.progress() * 100,
    //         totalTime = mainTl.duration(),
    //         currentTime =  round(mainTl.time(), 2),
    //         timeUpdate;

    //     sliderValue.value = prog;
    //     slider.slider(sliderValue);
    //     timeUpdate = currentTime + "/" + totalTime;
        
    //     progress.html(timeUpdate);

    // });


    // function round( value, decimals ) {
    //     return Number( Math.round(value + 'e' + decimals) + 'e-' + decimals );
    // }

    //---- END REMOVE ------  


})();


