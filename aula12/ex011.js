/* var idade = 67
if(idade < 18){
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
} */


var idade = 20
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota')
} else if( idade < 18 || idade > 65){
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatório')
}

// else if, continua a mesma sequencia de condições.
// if, começa uma nova verificação independente.