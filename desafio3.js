/* Para visualizar as respostas de maneira simples e direta 
basta rodar o código e as sequẽncias completas aparecerão no terminal. */

const a = () => {
    const sequence = [1, 3, 5, 7];
    sequence.push(sequence[sequence.length - 1] + 2);
    console.log(`a) ${sequence}`);
};
a(); // a) 1, 3, 5, 7, 9;

const b = () => {
    const sequence = [2, 4, 8, 16, 32, 64]
    sequence.push(sequence[sequence.length - 1]*2);
    console.log(`b) ${sequence}`);
};
b(); // b) 2,4,8,16,32,64,128

const c = () => {
    const sequence = [0, 1, 4, 9, 16, 25, 36];
    sequence.push(sequence.length*sequence.length);
    console.log(`c) ${sequence}`);
}
c();// c) 0,1,4,9,16,25,36,49

const d = () => {
    const sequence = [4, 16, 36, 64];
    sequence.push(64 + ((64 - 36) + 8));
    console.log(`d) ${sequence}`);
}
d(); // d) 4,16,36,64,100

const e = () => {
    const sequence = [1, 1, 2, 3, 5, 8];
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    console.log(`e) ${sequence}`);
}
e(); // e) 1,1,2,3,5,8,13

const f = () => {
    const sequence = [2,10, 12, 16, 17, 18, 19];
    // todos os números começam com a letra D, portanto o próximo número é 200
    sequence.push(200);
    console.log(`f) ${sequence}`);
}
f() // f) 2,10,12,16,17,18,19,200


