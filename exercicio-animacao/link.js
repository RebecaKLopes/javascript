var jog;
var vel;
var dx;
var px;
var dy;
var py;
var anima;
var estado;

function inicia(){
    vel= 1;
    dx=1;
    dy= 0;
    px= 0;
    py= 0;
    estado= 1; //1= movendo - 0= parada.
    jog= document.getElementById("jogador");
    jog.addEventListener("click", moverParar);
    document.getElementById("btini").addEventListener("click", mover);
    document.getElementById("btpara").addEventListener("click", parar);
    game()
}

function moverParar(){
    if(estado){
        estado=0;
        jog.style.backgroundColor= "#f00";
        cancelAnimationFrame(anima);
    } else{
        estado=1;
        jog.style.backgroundColor= "#00f";
        anima= requestAnimationFrame(game);
    }
}

function mover(){
    if(!estado){
        estado=1;
        jog.style.backgroundColor= "#00f";
        anima= requestAnimationFrame(game);
    }
}

function parar(){
    estado=0;
    jog.style.backgroundColor= "#f00";
    cancelAnimationFrame(anima);
}

function game(){
    px+=(dx*vel);
    jog.style.left= px+"px";

    if(px >800){
        dx= -1;
    } else if (px < 0){
        dx= 1;
    }
    anima= requestAnimationFrame(game);
}

inicia()