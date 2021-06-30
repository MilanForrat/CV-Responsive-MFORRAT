const base = document.querySelector(".base");
const box = document.querySelectorAll('.case');

base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);

function dragStart(){
    this.className += ' move';
    setTimeout(() => (this.className = 'invisble'), 0);
}
function dragEnd(){
    this.className = "base";
}
// on itère à travers chaque élément de la box (les 4 cases)
for(const vide of box){
    // on met des écoutes d'évènements sur toutes les boites d'un coup
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter)
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);
}

function dragOver(e){
    // on preventDefault car dragOver à un évènement de base qu'on ne souhaite pas
    e.preventDefault();
    // console.log("over");
}
function dragEnter(e){
    // on preventDefault car dragOver à un évènement de base qu'on ne souhaite pas
    e.preventDefault();
    // console.log("enter");
    this.className += " hovered";
}
function dragLeave(){
    //  console.log("leave");
    this.className = "case";
}
function dragDrop(){
     console.log("drop");
     console.log(base)
    this.className = "case";
    // on ajoute à l'élément la variable base (l'image)
    this.append(base);
}