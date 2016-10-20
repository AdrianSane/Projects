var clickTag = "http://google.com";
var d5banner = d5banner || {};

d5banner.main = function() {
    var mainTl = new TimelineLite(),
        bgTl = new TimelineLite(),
        copyTl = new TimelineLite();

    var banner = document.getElementById('banner');
    mainTl.set(banner, {autoAlpha:0});

    var logo = document.getElementsByClassName('logo'),
        bg1 = document.getElementById('bg1'),
        bg2 = document.getElementById('bg2'),
        //bg3 = document.getElementById('bg3'),
        bg4 = document.getElementById('bg4'),
        bg5 = document.getElementById('bg5'),
        bg6 = document.getElementById('bg6'),
        copy1 = document.getElementById('text1'),
        copy2 = document.getElementById('text2'),
        //copy3 = document.getElementById('text3'),
        copy4 = document.getElementById('text4'),
        copy5 = document.getElementById('text5'),
        endFrameText = document.getElementById('endFrameText'),
        textSubhead = document.getElementById('textSubhead'),
        cta = document.getElementsByClassName('cta'),
        mask = document.getElementById('clipPolygon'),
        lines = document.getElementById('lines'),
        outline = document.getElementsByClassName('maskOutline');

    // animation

    // tweens each background in
    function bgIn(e) {
        var _bg = e;
        var _mask = _bg.parentNode;
        var _tl = new TimelineLite();

        // rotate the mask and gold outline so we can wipe in at an angle
        _tl.set([_mask, outline], {rotation:20, transformOrigin:"top left", x: -34, y: -171});
        // rotate the background image back to negate the parent div's rotation
        // note that the position of the background has to be tweaked to offset the
        // parent div's rotation. need to come up with a more scientific way to do this.
        _tl.set(_bg, {rotation:-20, x: 123, y: 91});


        _tl
            // tween the background image
            .from(_bg, 4, {scale:1.2, ease:Sine.easeOut, force3D:true}) // using force3D:true to fix bitmap scaling glitch in Chrome

            .add("reveal", "-=3.75")
            // tween the clipping rectangle to reveal the masked background
            .from(_mask, 1.6, { clip:"rect(0, 0, 400px, 0)", ease:Power3.easeOut}, "reveal")
            // tween the gold outline to follow the mask
            .to(outline, 1.6, {width:600, ease:Power3.easeOut,
                onComplete:function(){
                    // reset the gold outline's width so we can tween it again on the next go around
                    TweenLite.set(outline, {clearProps:"width"});
                }}, "reveal");

        return _tl;
    }

    // tweens each headline in
    function copyIn(e) {
        var _copy = e;
        var _tl = new TimelineLite();

        _tl.from(_copy, 2, {autoAlpha:0, ease:Power1.easeOut});
        return _tl;
    }

    // tweens each headline out
    function copyOut(e) {
        var _copy = e;
        var _tl = new TimelineLite();
        _tl.to(_copy, 0.4, { autoAlpha:0, ease:Power3.easeIn });

        return _tl;
    }


    // button actions

    function ctaOver() {
        TweenLite.to(cta, 0.2, {scale:1.1, ease:Power3.easeOut});
    }
    function ctaOut() {
        TweenLite.to(cta, 0.6, {scale:1, ease:Power3.easeOut});
    }

    // master timeline
    function mainAnimation() {

        var tOffset = "-=0.5"; // adjust the gap between each transition

        mainTl
            .timeScale(1.4)
            .set(banner, {autoAlpha:1})

            .from(bg1, 1, {autoAlpha:0, ease:Power3.easeOut}, "start")
            .from(copy1, 2, {autoAlpha: 0, ease:Power3.easeOut}, "start+=0.75")

            // frame 2
            .add("frame2", "+=0.75")
            .add(bgIn(bg2), "frame2")
            .to(logo, 0.5, {autoAlpha:0, scale:0.8, ease:Power2.easeOut}, "frame2")
            .add(copyOut(copy1), "frame2")
            .add(copyIn(copy2), "frame2+=1.5")

            // frame 3
            .add("frame3", tOffset)
            .add(bgIn(bg4), "frame3")
            .add(copyOut(copy2), "frame3")
            .add(copyIn(copy4), "frame3+=1.2")

            // frame 4
            .add("frame4", tOffset)
            .add(bgIn(bg5), "frame4")
            .add(copyOut(copy4), "frame4")
            .add(copyIn(copy5), "frame4+=1.2")
/*
            // frame 5
            .add("frame5", tOffset)
            .add(bgIn(bg5), "frame5")
            .add(copyOut(copy4), "frame5")
            .add(copyIn(copy5), "frame5+=1.2")
*/
            // frame 6
            .add("frame6", tOffset)
            .add(bgIn(bg6), "frame6")
            .add(copyOut(copy5), "frame6")
            .to(logo, 0.5, {autoAlpha:1, scale:1, ease:Power3.easeOut}, "frame6+=0.5")
            .from(endFrameText, 1.6, {autoAlpha:0, y:"-=20", ease:Power3.easeOut}, "frame6+=1")
            .from(textSubhead, 0.5, {autoAlpha:0, ease:Power1.easeOut}, "frame6+=2")
            .from(cta, 0.4, {autoAlpha: 0, scale:0.8, ease:Back.easeOut, force3D:true, onComplete:function(){
                    lines.addEventListener('mouseover', ctaOver);
                    lines.addEventListener('mouseout', ctaOut);
                }}, "frame6+=2.25");

    }

    mainAnimation();

};
