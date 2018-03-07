function notaFinal(notaP1, notaP2, notaP3) {
    return notaFinal = (notaP1 * 0.3) + (notaP2 * 0.3) + (notaP3 * 0.4);
}
function main() {
    var notaP1 = 15;
    var notaP2 = 12;
    var notaP3 = 10;
    var resultadoFinal = notaFinal(notaP1, notaP2, notaP3)
    console.log("Nota Final:" + resultadoFinal)
    if (notaFinal < 9.5) {
        console.log("O aluno com a nota " + resultadoFinal + " foi Reprovado");
    }
    else {
        console.log("O aluno com a nota " + resultadoFinal + " foi Aprovodo");
    }
}

// exercicio 6
function nMes(mes) {
    switch (mes) {
        case 1:
            console.log("Janeiro");
            break
        case 2:
            console.log("Fevereiro");
            break
        case 3:
            console.log("Março");
            break
        case 4:
            console.log("Abril");
            break
        case 5:
            console.log("Maio");
            break
        case 6:
            console.log("Junho");
            break
        case 7:
            console.log("Julho");
            break
        case 8:
            console.log("Agosto");
            break
        case 9:
            console.log("Setembro");
            break
        case 10:
            console.log("Outubro");
            break
        case 11:
            console.log("Novembro");
            break
        case 12:
            console.log("Dezembro");
            break

    }
}

// exercicio7
function operacao(numP1, numP2, op) {
    if (op == "+") {
        console.log(numP1 + numP2)
    }
}

// exercicio8
function multiplos(num) {


}

// exercicio9
function somaCem() {
    var numero = 0;
    for (i = 0; i < 101; i++) {
        numero = numero + i;
    }
    console.log(numero);
}

// exercicio10 
function factorial(num) {
    if (num > 1) {
        for (k = 2; k <= num; k++) {
            num = num * k;
            return num;
        }
    }
    console.log(num)
}

//exercicio11
function factorial(x) {
    if (x == 0) {
        return 1;
    }
    return factorial=  x * factorial(x - 1);

}
function totalF (){
    var x = 5
    var valor = factorial(x);
    console.log("O factorial do numero é " + valor)
}

// exercicio
//inline 
operacao(2,3,'+');