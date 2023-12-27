/*
- [x]  A soma dos dois números:
...

let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

num1 = Number(num1)
num2 = Number(num2)

const soma = num1 + num2

alert('A soma dos dois números é :' + soma )



- [x]  A subtração dos dois números;


let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

num1 = Number(num1)
num2 = Number(num2)

const subtracao = num1 - num2

alert('A subtração dos dois números é :' + subtracao )



- [x]  A multiplicação dos dois números;


let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

num1 = Number(num1)
num2 = Number(num2)

const multiplicacao = num1 * num2

alert('A multiplicação dos dois números é :' + multiplicacao )



- [x]  A divisão dos dois números;



let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

num1 = Number(num1)
num2 = Number(num2)

const divisao = num1 / num2

alert('A divisão dos dois números é :' + divisao )



- [x]  O resto da divisão dos dois números;


let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

num1 = Number(num1)
num2 = Number(num2)

const resto = num1 % num2

alert('O resto de dois números é :' + resto )




Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;




- [X]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.


let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

let igual = Number(num1) == Number(num2)


if (num1 == num2 ){

    alert('Os dois números inseridos são: IGUAIS')
} else {
    const diferente = num1 != num2
    alert('Os dois números inseridos são diferentes: DIFERENTES')
}
*/


let num1 = prompt("Digite o primeiro número")
let num2 = prompt ("Digite o segundo número")

let total = Number(num1) + Number(num2)
let resultado = total%2 == 0;
// let impar= total%2 ==1;


if (resultado){


    alert('A soma dos dois números é: PAR')
} else{
    alert('A soma dos dois números é: IMPAR')
}
alert('A soma dos números é: ' + total)



