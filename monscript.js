/**********fenêtre pop-up*****************/

$('btn').click(function(){
  $('.pop-up').addClass('open');
});

$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
});

/**********formulaire de réservation*****************/

function test() {
  
    var x = document.getElementById("entree").value;
    var entree = parseInt(x.replace(/-/g,""));
    var y = document.getElementById("sortie").value;
    var sortie = parseInt(y.replace(/-/g,""));
    if(entree > sortie){
    document.write("Désolé, vous ne pouvez quitter avant d'arriver");
    }else{
    document.write("Merci, passons maintenant à la réservation...");
    }
    }
    
    var chambres= document.getElementById("chambres").value;
    
    var poeple= document.getElementById("personnes").value;
    
    if ( chambres<1){
      document.write('vous devez entrer un nombre')
    } //comment dire si le champs est vide??



<