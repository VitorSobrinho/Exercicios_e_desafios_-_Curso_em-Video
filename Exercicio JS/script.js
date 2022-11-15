let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

/*Início do código, com o primeiro de uma série de objetos que serão usados pelo JavaScript. 
Neste ponto, o JS vai obter os dados informados pelo usuário no arquivo HTML para realizar algumas operações matemáticas */


function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

/*Aqui será feita a verificação se o número digitado pelo usuário está dentro do intervalo de 1 e 100 */

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}

/*Função usada para verificar se um valor já foi incluído ou não, na lista de números que serão usados nas operações matemáticas */

function finalizar () {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        /*Área do código JS que executará as seguintes operações: de soma e média e que também fará a checagem de qual é o maior, qual é o menor e quantos números foram incluídos na lista. */

        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

/*Código que fará a exibição para o usuário, dos resultados de soma, média, quantidade de números incluídos, qual é o maior e o menor */

    }
}

