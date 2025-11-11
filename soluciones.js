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
    const arrayDeTexto = texto.split('');
    const soloVocales = arrayDeTexto.filter((letra) =>{
        return vocales.includes(letra);
    });
    return soloVocales.length;
}

console.log(contarVocales("Este es un texto que tiene diecinueve vocales."));