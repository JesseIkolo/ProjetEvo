// alert('hello world');
// console.warn('hello world');
// console.log('hello world');
var i=0;
$(document).ready(function(){
    $(".tabLinks").click(function(){
        // i++;
        // alert('la valeur de i est ',i);
        // console.warn('la valeur de i est ', i);
        // console.log('la valeur de i est ', i);
        $('.a1').removeClass('a1');
        $(this).addClass('a1');
        var id = $(this).data('content');
        $('tabContent.activated').removeClass('activated');
        $('#'+id).addClass('activated');
    })
    //document.querySelector('.tabLinks').addEventListener()
})