// $(document).ready(
//     function(){
//         var eventShow = document.getElementsByClassName('EventsShow');
//         var eventShowHammer = new Hammer(eventShow);
//         eventShowHammer.on("swiperight", 
//             function(ev){
//                 $(".EventsShow").animate(
//                     {
//                         left: '0px'
//                     }
//                 );
//             } 
//         );
//         eventShowHammer.on("swipeleft",
//             function(ev){
//                 $(".EventsShow").animate(
//                     {
//                         left: '-26%'
//                     },
//                     200
//                 );
//             }
//         );
//     },
//     function(){
//         var test = document.getElementById('testBox');
//         Hammer(test).on("tap", 
//             function(ev){
//                 $("#testBox").animate(
//                     {
//                         'background-color': 'blue'
//                     }
//                 );
//                 alert("Swipe !");
//             } 
//         );
//        Hammer(test).on('doubletap',
//             function(ev){
//                 $("#testBox").animate(
//                     {
//                         'background-color': 'green'
//                     },
//                     200
//                 );
//             }
//         );
//     }
// );
// let a = 3;
// console.log(a);
// (function(){
//     var $carre = document.getElementById('floatingButton');
//     $carre.hammer()
//         .on("swiperight", function(e){
//                 console.log('swipe');
//             }
//         )
//     draggable($carre);
//     $('.mainTest').draggable({
//         containment: "document",
//         opacity: 0.5,
//         snap: true,
//         snapTolerance: 20
//     });
// })
// Make the DIV element draggable:
