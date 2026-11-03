function carregar() {

    var msg = window.document.getElementById('msg')
    var imgm = window.document.getElementById('imagem') 
    //var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia !
        imgm.src = 'fotomanha.png'
        //document.body.style.background = 
    } else if (
        hora >= 12 && hora <= 18) {
            //Boa tarde !
            imgm.src = 'fototarde.png'
            //document.body.style.background = 
    } else {
        //Boa noite !
        imgm.src = 'flor.png'
        //document.body.style.background = 
    }
}