function contar(){
    let inicio = document.querySelector('input#numInicio')
    let fim = document.querySelector('input#numFim')
    let passo = document.querySelector('input#numPasso')
    let res = document.querySelector('div#res')
    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML =`Impossível contar!`
        
    }else{
        res.innerHTML = "Contando:  <br>"
        let i = Number(numInicio.value)
        let f = Number(numFim.value)
        let p = Number(numPasso.value)
        if( p <= 0){
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if( i < f){
            for(let c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        
    }
        else {
            for(let c = i; c >= f; c -= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}