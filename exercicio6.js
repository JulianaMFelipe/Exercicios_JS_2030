var nota1 = 9
var nota2 = 6

var resultado = (nota1 + nota2) / 2

if (resultado > 9.0){
    console.log("N1:" + nota1 + " N2:" + nota2 + " Média:" + resultado + " Conseito:A" + " APROVADO")
}

else if (resultado > 7.5 && resultado <= 9.0){
    console.log("N1:" + nota1 + " N2:" + nota2 + " Média:" + resultado + " Conseito:B" + " APROVADO")
}

else if (resultado > 6.0 && resultado <= 7.5){
    console.log("N1:" + nota1 + " N2:" + nota2 + " Média:" + resultado + " Conceito:C" + " APROVADO")
}

else if (resultado >4.0 && resultado <= 6.0){
    console.log("N1:" + nota1 + " N2:" + nota2 + " Média:" + resultado + " Conseito:D" + " REPROVADO")
}

else if (resultado <= 4.0){
    console.log("N1:" + nota1 + " N2:" + nota2 + " Média:" + resultado + " Conseito:E" + " REPROVADO")
}