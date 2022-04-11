//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.


function dividirDois(n1, n2){
    const resultado = n1/ n2
     
       if(n1 % n2 == 0){
        return `${resultado} é Par`
    }
}

console.log(dividirDois(20,5))