const textAnim = document.querySelector('h1');

// exploitation de l'objet Typewriter qui permet d'animer le texte
new Typewriter(textAnim, {
    // si l'on veut boucler l'animation
    loop: true,
    // vitesse d'effacement du texte
    deleteSpeed : 20 
})
.pauseFor(800)
//gérer la vitesse d'écriture 
.changeDelay(50)
//le texte à transmettre
.typeString("Développer, <br>")
// temps de pause en ms
.pauseFor(800)
// autre texte transmis
.typeString('pour vous')
.pauseFor(800)
.typeString(', pour moi')
.pauseFor(800)
.typeString(', pour <i>tous</i>...')
.pauseFor(1300)
// effacer des caractères 
.deleteChars(33)
.pauseFor(800)
.typeString('pour le plaisir')
.pauseFor(800)
// mieux comprendre = 16 c
.typeString(', pour partager')
.pauseFor(800)
.typeString(', pour la <i>passion</i>...')
.pauseFor(1300)
.deleteChars(54)
.pauseFor(1000)
.typeString('ons ensemble dès maintenant...')
.pauseFor(1000)
.typeString('<br>Contactez-moi et démarrons <i>l\'aventure</i> !')
.pauseFor(2000)
//lancement de l'animation
.start();

// bootstrap popovers:
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// bootstrap tooltips: 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})