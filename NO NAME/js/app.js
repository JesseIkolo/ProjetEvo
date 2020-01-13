window.onscroll = function() {myFunction()};

let header = document.getElementById("mainHeader");

let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  if (window.pageYOffset > (sticky+10)){
    header.classList.add("darkBg");
  }else {
    header.classList.remove("darkBg");
  }
}
 //------------------------------------------------

 $(document).ready(function(){
    $('#search').click(function(){
      $('.tabLink').toggleClass('hide-item');
      $('.search-form').toggleClass('active');
    })
    
    $('.headerControl').click(function(){
      $('.headerControl.selected').removeClass('selected');
      $(this).addClass('selected');
    })
 })

