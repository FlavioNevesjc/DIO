let a = 7;
let b = 94;
let troca = 0;
console.log("valor a: " + a + " valor b: " + b);
/*
troca = a;
a = b;
b = troca;
*/
[a , b] = [b , a];
console.log("trocado:")
console.log("valor a: " + a + " valor b: " + b);