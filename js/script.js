$(document).ready(function(){
   $('.tabLinks').click(function(){
      $('.linkActived').removeClass('linkActived');
      $(this).addClass('linkActived');
      var id = $(this).data('content');
      $('.tabContent.actived').removeClass('actived');
      $('#'+ id).addClass('actived');
   })

   /**
    *  Deuxieme methode pour la manipulation des tabContents
    *  Atention, mettez les proprietés css de 
    *  ".tabBar .tabContents .tabContent.actived" en commentaire
    */

   // $('.tabLinks').click(function(){
   //    $('.linkActived').removeClass('linkActived');
   //    $(this).addClass('linkActived');
   //    var id = $(this).data('content');
   //    $('.tabContent.actived').removeClass('actived');
   //    $('#'+ id).addClass('actived');
   //    var contents = document.querySelectorAll('.tabContent');

   //    contents.forEach(element => {
   //       if($(element).hasClass('actived')){
   //          console.log(element);
   //          $(element).css({
   //             'display' : 'flex',
   //             'opacity' : '1',
   //             'justify-content' : 'center',
   //             'align-items' :'center',
   //          });
   //       }
   //       else{
   //          $(element).css({
   //             'display' : 'none',
   //             'opacity' : '0',
   //             'justify-content' : 'center',
   //             'align-items' :'center',
   //          });
   //       }
   //    });

   // })

   // document.querySelector('.tabLinks').addEventListener('click',function(){
   //    console.log('Evenement avec Javascript pure')
   // })

})