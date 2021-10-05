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
