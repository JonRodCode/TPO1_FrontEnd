// 1. Calcular el área de un rectángulo

function areaRectangulo(longitud, ancho){
    return longitud * ancho;
}

console.log(areaRectangulo(3,6));


// 2. Contar palabras en una cadena

function contadorDePalabras(texto) {
    const arrayDePalabras = texto.split(" ");
    return arrayDePalabras.length;
}

console.log(contadorDePalabras("¿Cuantas palabras hay en este texto? Pues ocho."));


// 3. Contar vocales en una cadena

function contarVocales(texto){
    const vocales = "aeiou";
    const arrayDeTexto = texto.toLowerCase().split('');
    const soloVocales = arrayDeTexto.filter((letra) =>{
        return vocales.includes(letra);
    });
    return soloVocales.length;
}

console.log(contarVocales("Este es un texto que deberia tener veintisiete vocales, y las tiene."));


// 4. Encontrar el palíndromo

function esPalindromo(texto) {
    const arrayTexto = texto.toLowerCase().split('');
    for (var i = 0; i < arrayTexto.length; i++){
        let indiceInvertido = texto.length -1 - i;
        if (arrayTexto[i] != arrayTexto[indiceInvertido]){
            return false;
        }
    }
    return true;
}
console.log(esPalindromo("Muy complicado escribir un texto que sea palindromo asi que:"));
console.log(esPalindromo("Espejo, espejito dime quien es el mas bonito ... soy yo? : ?oy yos ... otinob sam le se neiuq emid otijepse ,ojepsE"));