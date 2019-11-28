
// var myElement = document.querySelector('.space_white')
// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
// 	console.log(ev);
// });

// hammertime.get('pinch').set({ enable: true });
// hammertime.get('rotate').set({ enable: true });

// hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
// hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

$(document).ready(function(){


$('.space_white').hammer().on('swipe', function(e){
    e.preventDefault();
   $('.maps').animate({
       opacity: 0.25,
       left: '+=50',
       height: 'toggle'

     }, 5000, function() {
        //Animation complete.
       });

    });
    
})


