var a = 10
var b = 10
var c = 15
var resultado = ""

if (a < b+c  && b < a+c && c < a+b){
    if( a == b && a == c){
        resultado = "É um triângulo equilátero" 
    }
    else if ( (a == b && b != c) || (a == c && c != b) || ( b == c && c != a)){
        resultado = "É um triângulo isósceles" 
    }
    else if ( a != b && b != c && a != c){
        resultado = "É um triângulo escaleno" 
    }
} else {
    resultado = "Lados não formam um triângulo"
}

console.log(resultado)
