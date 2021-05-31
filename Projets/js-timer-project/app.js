const text = document.getElementsByTagName('h1');

// fonction de calcul de temps
function refreshPage(){
    // new Date().getTime() est exprimé en millisecondes depuis le 1er janvier 1970
    const now = new Date().getTime();

    // date de la limite
    const countdownDate = new Date('December 24, 2021').getTime();

    // objectif : compter la différence entre la date d'aujourd'hui et celle à venir
    const differenceDate = countdownDate - now;

    // transformation des millisecondes en jours
    const days = Math.floor(differenceDate / (1000*60*60*24));
    // 1000 millisecondes * 60 secondes * 60 minutes * 24 heures

    // on cherche à calculer le nombre d'heures restantes (en plus des jours)
    const hours = Math.floor((differenceDate % (1000*60*60*24)) / (1000*60*60));
    // % => le modulo
    // c'est à dire le reste de la division

    // on cherche à calculer le nombre de minutes restantes (en plus des jours)
    const minutes = Math.floor((differenceDate % (1000*60*60)) / (1000*60));

    // on cherche à calculer le nombre de secondes restantes (en plus des jours)
    const seconds = Math.floor((differenceDate % (1000*60)) / (1000));

    // console.log(days,hours,minutes,seconds);

    text[0].innerText= `${days}j   ${hours}h   ${minutes}m   ${seconds}s`;
}
refreshPage();

// fonction qui rafraichit toutes les 1 secondes
const countdownInterval = setInterval(() => {
    refreshPage();
}, 1000)