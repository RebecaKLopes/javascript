function contar(){
    var inic= window.document.getElementById('txtini')
    var fim= window.document.getElementById('txtfim')
    var pass= window.document.getElementById('txtpas')
    var res= window.document.getElementById('res')
    
    if(inic.value.length == 0  || fim.value.length == 0  || pass.value.length== 0 ){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML= 'Contando: <br> '
        var i= Number(inic.value)
        var f= Number(fim.value)
        var p= Number(pass.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){ //crescente
            for (var c= i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else { //regressiva
            for(var c= i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
         }
       } 
       res.innerHTML += `\u{1F3C1}`
    }
}
    