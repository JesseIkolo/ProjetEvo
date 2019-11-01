var i = 0;
$(document).ready(
    function(){
        $(".tabLinks").click(
            function(){
                i++;
                alert("La valeur i est de :",i);
                console.log("La valeur i est de : ",i);
                console.warn("La valeur i est de : ",i);
            }
        )
    }
)