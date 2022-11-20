function verificar() {
   var data = new Date() //Data atual

   var ano = data.getFullYear() //Ano com 4 dígitos

   var fano = document.getElementById('txtano') // Buscar o ano que veio do formulário, digitado pelo usuário.

   var res = document.querySelector('div#res') // Pegando o resultado do id res, no HTML

   if (fano.value.length == 0 || Number(fano.value) > ano) { //Se o valor digitado for igual a 0 ou a data de nascimento for maior que a data vigente. E o termo Number() não é necessário

        window.alert('{ERRO] Verifique os dados e tente novamente!')

   } else {
       var fsex = document.getElementsByName('radsex') //Se eu colocasse os colchetes [], indicaria especificamente uma das opções. Se eu botasse [1] seria masculino e se eu botasse [2], seria feminino.

       var idade = ano - Number(fano.value) //Calcular qual é a idade

        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //Forma de colocar foto em JS, como se tivesse fazendo um código em HTML.
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                 img.setAttribute('src', 'fotomenino.png')

            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotogaroto.png')
            }else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'fotohomem.png')
           } else {
            //idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        }
        //Esse código é o que busca a informação do usuário se ele se identifica como homem ou mulher.

        else if(fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'fotomenina.png')

            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotogarota.png')
            
            }else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'fotomulher.png')
           } else {
            //idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        //Esse código é o que busca a informação do usuário se ele se identifica como homem ou mulher.

        res.style.textAlign= 'center' 

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        res.appendChild(img) //Código para exibição da imagem
   }
}

   