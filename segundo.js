/*
var nome = "Mariazinha"
var nota1 = 6
var nota2 = 7

var resultado = (nota1 + nota2) / 2

if (resultado >= 6) {
    console.log(nome + " Foi aprovada")
}
else{
    console.log(nome + " Foi reprovada")
}
*/

var nota1 = 6
var nota2 = 6

var resultado = (nota1 + nota2) / 2

if (resultado > 9.0){
    console.log(nota1 + " " + nota2 + " " + resultado + " A" + " APROVADO")
}

else if (resultado > 7.5 && resultado <= 9.0){
    console.log(nota1 + " " + nota2 + " " + resultado + " B" + " APROVADO")
}

else if (resultado > 6.0 && resultado <= 7.5){
    console.log(nota1 + " " + nota2 + " " + resultado + " C" + " APROVADO")
}

else if (resultado >4.0 && resultado <= 6.0){
    console.log(nota1 + " " + nota2 + " " + resultado + " D" + " REPROVADO")
}

else if (resultado <= 4.0){
    console.log(nota1 + " " + nota2 + " " + resultado + " E" + " REPROVADO")
}