// exercicio1
function mCorporal(peso,altura){
    return peso/(altura)^2;
}
function massaC(){
    peso= 60;
    altura= 1.90;
    imc = mCorporal(peso,altura);
    if (imc < 18.5){
        return ("A sua massa corporal esta a baixo dos limites" + ' ' + imc);
    }
    if(imc >= 18.5 && imc <= 25){
        return ("A sua massa corporal esta normal" + ' ' + imc);
    }
    if(imc >25 && imc <= 30 ){
        return ("A sua massa corporal esta acima do peso" + ' ' + imc)
    }
    else{
        return ("A sua massa corporal mostra que esta obeso" + ' ' + imc)
    }
}
// exercicio2

function inverte(str) {
    if (str == "")
      return "";
    else
      return inverte(str.substr(1)) + str.charAt(0);
  }
console.log(inverte("Hoje e domingo"));
//inline