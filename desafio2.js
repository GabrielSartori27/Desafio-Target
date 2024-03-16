const belongsToFibonacci = (n) => {
    let fibonnaci = [0, 1];
    for(let i = 0; i < fibonnaci.length; i++){
        fibonnaci.push(fibonnaci[i] + fibonnaci[i + 1]);
        if(fibonnaci[fibonnaci.length -1] >= n){
            if(fibonnaci.includes(n)){
                return console.log('Pertence');
            } else {
                return console.log('Não pertence');
            }
        }
    }
}

belongsToFibonacci(21); // Pertence
belongsToFibonacci(30); // Não pertence