//Código em JS, para organizar mensagem e imagem, conforme horário que estiver no Sistema Operacional do usuário

function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    //Organização inicial da chamada, além de código para buscar a hora correta 

   msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src =  'fotomanha.png'
        document.body.style.background = '#e1e2e4'

        //Caso seja o site seja aberto entre meia noite e meio dia, será exibida a mensagem do horário, além de uma imagem, representando a manhã;


    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#e9a670'

        //Caso seja o site seja aberto entre meio dia e às 18 horas, será exibida a mensagem do horário, além de uma imagem, representando a tarde;

    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#74467a'

        //Caso seja o site seja aberto entre às 18 horas e a meia noite, será exibida a mensagem do horário, além de uma imagem, representando a noite;
    }
}