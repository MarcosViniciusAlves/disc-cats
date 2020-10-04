let tempoAtual = {
    minuto:29,
    segundo:55
}

function passTempo() {
    setInterval(()=>{
        if(tempoAtual.segundo == 60){
            tempoAtual.segundo = 0;
            tempoAtual.minuto++;
            return;
        }
        else if(tempoAtual.minuto == 31){
            tempoAtual.minuto = 0;
            tempoAtual.minuto = 0;
            return;
        }
        tempoAtual.segundo++;
    },1000);
}

passTempo();

module.exports = tempoAtual;