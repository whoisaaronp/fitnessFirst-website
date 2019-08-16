// JavaScript Document

console.log("firing up");

/* Using vanilla JavaScript */
//  Hey scrollbar, animate the thing I’ll tell you when I’ll tell you.
// Init ScrollMagic
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
    
});

// Create scene
$("section").each(function() {
    // look for this id and set an indicator for each section
    var name = $(this).attr('id');
 
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addIndicators({
        colorStart: "rgba(255,255,255,0.5)",
        colorEnd: "rgba(255,255,255,0.5)", 
        colorTrigger : "rgba(255,255,255,1)",
        name:name
    })
    .loglevel(3)
    .addTo(ctrl);
 
});