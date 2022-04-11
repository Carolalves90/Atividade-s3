//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parImpar(numero){
    if(numero % 2 === 0){
        return 'Par'
    } else if(numero % 2 != 0){
        return 'Impar'
    }
}

console.log(parImpar('37'))