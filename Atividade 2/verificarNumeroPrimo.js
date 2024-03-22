function verificarNumeroPrimo(n){
    if (n<=1){
            return false
        }else if ((n!=2) && (n % 2 == 0)){
            return false
        }else if ((n!=2) && (n % 2 == 0)){
            return false
        }
    for (let i=3;i<n;i+=2){
        if (n%i == 0){
            return false
        }
    }
    return true
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false
