function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selTab')

    if (num.value.length == 0) {
        window.alert('por favor, digite um número')
    }else {
        let n= Number(num.value)
        let c = 1
        tab.innerHTML = ' '
        while (c <=10) {
            let item = document.createElement('option') 
            //Criando um elemento option, como se tivesse sido criado em HTML
        
            item.text = `${n} x ${c} = ${n*c}`
            //Parte de dentro do option, que é a "fórmula" da tabuada, com o resultado.

            item.value = `tab${c}`
            //Código para deixar selecionado um número na tabuada, que em toutras linguagens, pode servir para algo, mas não pra JS no momento.

            tab.appendChild(item)
            //Adicionar um elemento filho

            c++
            //Incrementar o valor de c
        }
    }
}