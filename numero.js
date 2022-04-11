//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function maiorDeDois(num1, num2){
    if(num1 > num2){
        return `${num1} é maior`
    } else if(num1 < num2){
        return `${num2} é maior`
    } else if(num1 == num2){
        return 'Os números são iguais'
    }
}

console.log(maiorDeDois(3,3))