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


	/********** fenêtre pop up films *****************/

  const openBtn = document.querySelectorAll('[data-modal-target]')
const closeBtn = document.querySelectorAll("[data-modal-close]")
const overlay = document.getElementById("overlay")
const nextbtn = document.querySelector('.nextbtn')
const currentParagraph = document.querySelector('.current')
const nextParagraph = document.querySelector('.next')
const tooltip = document.querySelector('.tooltip')

nextbtn.addEventListener('click', (() => {
    currentParagraph.classList.toggle('inactive')
    nextParagraph.classList.toggle('active')
    tooltip.classList.toggle('active')
}))

openBtn.forEach((btn) => {
    const modal = document.querySelector(btn.dataset.modalTarget) //Checks the target of our data-modal-target. could have also used '.modal'
    btn.addEventListener('click', (() => {
    openModal(modal)
    }))
})

closeBtn.forEach((btn) => {
    const modal = btn.closest(".modal")
    btn.addEventListener('click', (() => {
    closeModal(modal)
    }))  
})

overlay.addEventListener('click', (() => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach((modal) => {
    closeModal(modal)
    })  
}))


function openModal(modal){
    if(modal == undefined) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == undefined) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


