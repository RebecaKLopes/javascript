function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')

   if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           document.body.style.background= '#a2d6f9'
           if (idade >= 0 && idade < 14 ){
               //criança
               img.setAttribute('src', 'fotos/menino.png')
           } else if (idade < 30){
               //jovem
               img.setAttribute('src', 'fotos/homem-jovem.png')
           } else if (idade < 50){
               //adulto
               img.setAttribute('src', 'fotos/homem-adulto.png')
           } else {
               //idoso
               img.setAttribute('src', 'fotos/homem-idoso.png')
           }
       } else if (fsex[1].checked){
           genero = 'Mulher'
           document.body.style.background= '#ffcfd2'
           if (idade >= 0 && idade < 14 ){
                //criança
            img.setAttribute('src', 'fotos/menina.png')
           } else if (idade < 30){
                //jovem
                img.setAttribute('src', 'fotos/mulher-jovem.png')
           } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/mulher-adulta.png')
           } else {
                //idoso
                img.setAttribute('src', 'fotos/mulher-idosa.png')
           }
       }
       res.style.textAlign= 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
   }
}