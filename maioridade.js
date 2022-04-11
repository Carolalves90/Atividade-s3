//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorDeIdade(anoNascimento){
    if(anoNascimento < 2004){
        return 'Maior de Idade'
    } else if(anoNascimento >= 2004){
        return 'menor de idade'
    }
}

console.log(maiorDeIdade('2021'))