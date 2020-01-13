window.onscroll = function() {myFunction()};

let header = document.getElementById("mainHeader");

let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > (sticky + 10)) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  if (window.pageYOffset > (sticky + 15)){
    header.classList.add("lightBg");
  }else {
    header.classList.remove("lightBg");
  }
}

$(document).ready(function(){
  $('#search').click(function(){
    $('.tabLink').toggleClass('hide-item');
    $('.search-form').toggleClass('active');
  })
})