const nota1 = 5.8;
const nota2 = 1.1;
const nota3 = 2.1;

function minima(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function mediaDuasMaiores (n1, n2, n3) {
const menorNota = minima(n1, minima (n2, n3))


if  (menorNota === n1){
    return(n2 + n3) / 2;
} else if (menorNota === n2) {
    return ( n1+ n3) / 2
 } else   {
    return (n1 + n2) / 2;

 }
}

 function mediaParaStatus(media){
        if (media >=7) {
            return "Aprovados"
        } else if (media >=4) {
            return "Recuperação"
        } else {
            return "Reprovado";
        }
 }


 const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
 const mediaStatus = mediaParaStatus (mediaFinal);

 console.log (`O resultado Final do aluno é : ${mediaStatus}`);

