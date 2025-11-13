// 1. Calcular el área de un rectángulo

function calcularAreaRectangulo(longitud, ancho){
    return longitud * ancho;
}
console.log(calcularAreaRectangulo(3,6));


// 2. Contar palabras en una cadena

function contarPalabras(texto) {
    const arrayDePalabras = texto.split(" ");
    return arrayDePalabras.length;
}
console.log(contarPalabras("¿Cuantas palabras hay en este texto? Pues ocho."));


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


// 5. Crear un programa para convertir la edad de un perro a años humanos

function edadHumanaDeUnPerro(){
    let edadDelPerro = Number(prompt("¿Que edad tiene tu perrito? "));
    while (isNaN(edadDelPerro)){
        edadDelPerro = Number(prompt("Dale, escribi el número de la edad del perro... "));
    }
    console.log(`Tu perrito tiene ${edadDelPerro *7} años humanos.`);
}
edadHumanaDeUnPerro();


// 6. Convertir la primera letra de cada palabra en mayúscula

function capitalizarPalabras(texto) {
    const esUnaLetra = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]$/;  //Esto fue re contra googleado
    const palabras = texto.split(' ');
    let nuevoTexto = "";
    let verificadorDeIndiceInicial = 0;
    palabras.map((palabra)=> {
        for (var i = 0; i < palabra.length; i++){
            if (esUnaLetra.test(palabra[i])){
                let palabraConMayus = palabra[i].toUpperCase() + palabra.slice(i + 1);
                if (i !== verificadorDeIndiceInicial) {
                    palabraConMayus = palabra.slice(0, i) + palabraConMayus;
                }
                nuevoTexto += ` ${palabraConMayus}`;
                return palabraConMayus;
            }
        }
        nuevoTexto += ` ${palabra}`;
    })
    return nuevoTexto.trim();
}
console.log(capitalizarPalabras("sol, luna, estrella, cielo, rocio, flor, violeta, celeste, (verde) esperanza, ángel, pepe."))


// 7. Generar los primeros N números de la sucesión de Fibonacci

function fibonacci(n) {
    if (n > 0) {
        let numero = 1;
        let numeros = [0,1];
        while (numero < n) {
            numeros.push(numero);
            numero = numeros[numeros.length -1] + numeros[numeros.length -2];
        }
        return numeros;
    }
    return "No se puede calcular."
}
console.log(fibonacci(55));


// 8. Lista de Productos

const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
 ];

// 1. Foreach
console.log("Nombre y precio de los productos:")
productos.forEach((producto) => {
    console.log(`${producto.nombre}: $${producto.precio}`);
})

// 2. Map
const nombres = productos.map((producto)=> producto.nombre)
console.log(`Nombre de los productos: ${nombres}`);

// 3. Filter
const productosElectronicosConStockMayorA20 = productos.filter((producto) => {
    if (producto.categoria === "electrónica" && producto.stock > 20) {
        return producto;
    }
});
console.log("Productos electrónicos con stock mayor a 20:");
console.log(productosElectronicosConStockMayorA20);

// 4. Find
const productoId3 = productos.find((producto) => producto.id === 3);
console.log("Producto con id 3: ");
console.log(productoId3);

// 5.  Reduce
const valorTotalDeInventario = productos.reduce((total, producto)=> {
    return total + producto.precio;
}, 0)
console.log(`El valor total del inventario es: $${valorTotalDeInventario}`)


// 9. Estudiantes y Calificaciones

const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
 ];


// 1. Foreach

// 2. Map

// 3. Filter

// 4. Find

// 5.  Reduce


// 10. Películas

// 1. Foreach

// 2. Map

// 3. Filter

// 4. Find

// 5.  Reduce