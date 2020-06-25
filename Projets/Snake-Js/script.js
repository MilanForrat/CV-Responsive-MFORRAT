window.onload = function(){
    let canvasWidth = 900,
    canvasHeight = 600,
    blocksize = 30,
    ctx,
    xCoord = 0,
    yCoord = 0,
    snakee;
    delay = 100; // en miliseconds soit 1 second

    init();

    function init(){
        let canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);  // attribution du canvas au body HTML
        ctx = canvas.getContext('2d');   // style de dessin, en 2D ici
        snakee = new Snake([[6,4],[5,4], [4,4]], "right");
        refreshCanvas();
    }

    function refreshCanvas(){

        xCoord+=2;
        yCoord+=2;
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas, delay);  // utilise setTimout pour indiquer quel élémeent on veut relancer tous les x delay (ici delay = 1 sec)
    }

    function drawBlock(ctx, position){
        let x = position[0] * blocksize,
        y = position[1] * blocksize;
        ctx.fillRect(x,y,blocksize, blocksize);  // on créer notre rectangle (= snake), on lui donne les positions et la taille d'un "bloc" (blocksize x blocksize)
    }

    function Snake(body, direction){   // équivalent d'une fonction constructeur
        this.body = body;
        this.direction=direction;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle="#ff0000";
            for(var i=0 ; i < this.body.length; i++){
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        }
        this.advance = function(){
            var nextPosition = this.body[0].slice();
            switch(this.direction){
                case "left":
                    nextPosition[0] -= 1;
                    break;
                case "right":
                    nextPosition[0] += 1;
                    break;
                case "down":
                    nextPosition[1] += 1;
                    break;
                case "up":
                    nextPosition[1] -= 1;
                    break;
                default:
                    throw("invalid direction");
            }
            this.body.unshift(nextPosition);  // ajoute la nouvelle variable à la première position du tableau
            this.body.pop();  // efface le dernier élément d'un array
        }

        this.setDirection = function(newDirection){
            let allowedDirections;
            switch(this.direction){
                case "left":
                case "right":
                    allowedDirections=["up","down"];
                    break;
                case "down":
                case "up":
                    allowedDirections=["left","right"];
                    break;  
               default:
                    throw("invalid direction");
            }
                if(allowedDirections.indexOf(newDirection) > -1){   //allowedDirection est un array, donc si son index est > -1 alors cest que sa direction est soit 0 ou 1 (up down left ou right) et donc elle est autorisée
                    this.direction = newDirection;
                }
        }

    }

    
    document.onkeydown = function handleKeyDown(e){
        var key = e.keyCode;
        var newDirection;
        switch(key){
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            default:
                return;
        }
        snakee.setDirection(newDirection);
    };
}