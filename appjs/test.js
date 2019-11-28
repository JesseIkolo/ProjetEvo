var btns = document.querySelectorAll('.element');
var btnav = document.querySelector('.avance');
var btnre = document.querySelector('.back');


var i = 0;
var b = btns.length-1;

btnav.addEventListener('click', couleurdroit)
btnre.addEventListener('click', couleurgauche)

function couleurdroit(e){
   // retourne le type de levenement
     if(e.type = 'click'){
    // affecte la valeur de i avant d incrementer
     var a= i++;
     // verifie si on est a la fin  recommence
     if(a > b-1)
        i=0;
    // pour ne pas laisser le cas de la dernierre case rouge
     if(a == 0)
        btns[btns.length-1].style.backgroundColor = 'rgb(255, 220, 124)';
        //stye a apliquer en fonction du click
    btns[a].style.backgroundColor = 'red';
    // rerendre la case precedente a son etat
    btns[a-1].style.backgroundColor = 'rgb(255, 220, 124)';
    }
};


function couleurgauche(e){
       // retourne le type de levenement
    if(e.type = 'click'){
        // affecte la valeur de i avant de decrementer
     var a = b--;
     // verifi si a est egale a zero
    if(a<=0)
    // si oui recommence la boucle
    b = btns.length-1;
    if(a == btns.length-1)
    // recolor la premierre case rouge
        btns[0].style.backgroundColor = 'rgb(255, 220, 124)';
    // style a apliquer
    btns[a].style.backgroundColor = 'red';
    // remet la case precedente a son etat precedant
    btns[a+1].style.backgroundColor = 'rgb(255, 220, 124)';

    
    }
};