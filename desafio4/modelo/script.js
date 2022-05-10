function calcular(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um numero')
    } else{
        let n = Number(num.value)
        tab.innerHTML= ''
        for(var c= 1;c <= 10; c++){
            let item= document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
    
}