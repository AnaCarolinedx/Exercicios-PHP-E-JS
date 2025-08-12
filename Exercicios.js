// 1.
let nome = "Seu Nome";
let idade = 25;
console.log(`Nome: ${nome}, Idade: ${idade}`);

// 2.
let a = 8, b = 7;
console.log("Soma:", a + b);

// 3.
let s1 = "Olá, ", s2 = "mundo!";
console.log(s1 + s2);

// 4. 
console.log("Comentários demonstrados.");

// 5.
let x = 15, y = 4;
console.log("Soma:", x + y);
console.log("Subtração:", x - y);
console.log("Multiplicação:", x * y);
console.log("Divisão:", x / y);
console.log("Módulo:", x % y);

// 6.
let num = 11;
console.log(num % 2 === 0 ? `${num} é par` : `${num} é ímpar`);

// 7.
let intv = 10;
let strv = "10";
console.log("intv == strv:", intv == strv);  
console.log("intv === strv:", intv === strv); 

// 8.
let strT = "texto";
let intT = 3;
let floatT = 3.14;
let boolT = true;
console.log("Tipos e valores:");
console.log("String:", strT, typeof strT);
console.log("Inteiro:", intT, typeof intT);
console.log("Float:", floatT, typeof floatT);
console.log("Boolean:", boolT, typeof boolT);

// 9.
let c = 20;
let f = (c * 9/5) + 32;
console.log(`${c} °C = ${f} °F`);

// 10.
let n1 = 6, n2 = 8, n3 = 7;
let media = (n1 + n2 + n3) / 3;
console.log("Média:", media);
if (media >= 7) {
    console.log(`Aluno aprovado com média ${media}`);
} else {
    console.log(`Aluno reprovado com média ${media}`);
}
