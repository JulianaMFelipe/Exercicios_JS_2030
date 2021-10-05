/* EXERCICIO 03 3)	Faça um programa que, com base no preço de três produtos,
 informe qual produto você deve comprar, sabendo que a decisão é sempre 
 pelo mais barato.
*/
var prod1 = "Produto 1"
var preco1 = 300
var prod2 = "Produto 2"
var preco2 = 100
var prod3 = "Produto 3"
var preco3 = 150
var produtoEscolhido = ""
var menorPreco = 0

if (preco1 < preco2){
    produtoEscolhido = prod1
    menorPreco = preco1
}
else{
    produtoEscolhido = prod2
    menorPreco = preco2
}
if (preco3 < menorPreco) {
    produtoEscolhido = prod3
    menorPreco = preco3
}

console.log("O produto escolhido é o " + produtoEscolhido + " no valor de R$ " + menorPreco)

/* EXERCICIO 2 
Faça um Programa que leia três números e mostre o maior e o menor deles.*/

var num1 = 15
var num2 = 30
var num3 = 5
var maior = 0
var menor = 0

if (num1 > num2){
    maior = num1
    menor = num2
}
else{
    maior = num2
    menor = num1
}

if(num3 > maior){
    maior = num3
}

if (num3 < menor){
    menor = num3
}

console.log("O maior número é o " + maior + " e o menor número é o " + menor)

