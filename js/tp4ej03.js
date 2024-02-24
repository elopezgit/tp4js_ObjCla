// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar y 
// mostrar sus propiedades, calcular el perímetro y el área



class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    // Método para modificar el alto del rectángulo
    modificarAlto(nuevoAlto) {
        if (nuevoAlto > 0) {
            this.alto = nuevoAlto;
            console.log("Se ha modificado el alto del rectángulo.");
        } else {
            console.log("El nuevo alto debe ser mayor que cero.");
        }
    }

    // Método para modificar el ancho del rectángulo
    modificarAncho(nuevoAncho) {
        if (nuevoAncho > 0) {
            this.ancho = nuevoAncho;
            console.log("Se ha modificado el ancho del rectángulo.");
        } else {
            console.log("El nuevo ancho debe ser mayor que cero.");
        }
    }

    // Método para mostrar las propiedades del rectángulo
    mostrarPropiedades() {
        console.log(`Alto: ${this.alto}`);
        console.log(`Ancho: ${this.ancho}`);
    }

    // Método para calcular el perímetro del rectángulo
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }

    // Método para calcular el área del rectángulo
    calcularArea() {
        return this.ancho * this.alto;
    }
}

// Crear un objeto rectángulo
const rectangulo1 = new Rectangulo(5, 8);

// Mostrar las propiedades del rectángulo
console.log("Propiedades del rectángulo:");
rectangulo1.mostrarPropiedades();

// Modificar el alto y ancho del rectángulo
rectangulo1.modificarAlto(10);
rectangulo1.modificarAncho(6);

// Mostrar las nuevas propiedades del rectángulo
console.log("Nuevas propiedades del rectángulo:");
rectangulo1.mostrarPropiedades();

// Calcular y mostrar el perímetro del rectángulo
console.log("Perímetro del rectángulo:", rectangulo1.calcularPerimetro());

// Calcular y mostrar el área del rectángulo
console.log("Área del rectángulo:", rectangulo1.calcularArea());
