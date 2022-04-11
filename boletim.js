//- Crie um algoritmo que receba três notas de um aluno, 
//calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

function boletimAluno(nota1,nota2,nota3){
    const somaDasNotas = nota1+nota2+nota3
    const mediaAluno = somaDasNotas/3
        if(mediaAluno >= 7){
            return 'Aprovado'
    } else if(mediaAluno >=5 && mediaAluno <7){
        return 'Recuperação'
    } else if(mediaAluno <5){
        return 'Reprovado'
    }
}

console.log(boletimAluno(1,1,3))