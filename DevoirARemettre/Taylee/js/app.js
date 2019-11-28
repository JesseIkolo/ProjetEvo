$(document).ready(
    function(){
        console.log('Terminé');    
        var myButton = document.getElementById('floatingButton');

        $( function() {
            $( "#floatingButton" ).draggable();
        });
        
        var EventsShow = document.getElementsByClassName('EventsShow');
        var SwipeEvents = new Hammer(EventsShow[0]);

        SwipeEvents.get('swipe').set({
            direction: Hammer.DIRECTION_ALL
        });

        SwipeEvents.on('swiperight', function(){
            $('.EventsShow').animate(
                {
                    left: "+=300px"
                },
                250
            );
        });
        
        SwipeEvents.on('swipeleft', function(){
            $('.EventsShow').animate(
                {
                    left: "-=300px"
                },
                250
            );
        });
        
    }
)
