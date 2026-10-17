var agora = new Date()
var hora = agora.getHours() 
/* var hora = 6  posso digitar outras horas */
console.log(`Agora são exatamente ${hora} horas.`)
if( hora < 12){
    console.log('Bom dia')
} else if( hora <= 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa noite')
}