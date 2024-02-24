// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
    }

    // Métodos get y set para ISBN
    get ISBN() {
        return this._ISBN;
    }

    set ISBN(valor) {
        this._ISBN = valor;
    }

    // Métodos get y set para Título
    get titulo() {
        return this._titulo;
    }

    set titulo(valor) {
        this._titulo = valor;
    }

    // Métodos get y set para Autor
    get autor() {
        return this._autor;
    }

    set autor(valor) {
        this._autor = valor;
    }

    // Métodos get y set para Número de Páginas
    get numPaginas() {
        return this._numPaginas;
    }

    set numPaginas(valor) {
        this._numPaginas = valor;
    }

    // Método para mostrar la información del libro
    mostrarLibro() {
        console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
}

// Crear instancias de la clase Libro
let libro1 = new Libro("978-8408212738", "Harry Potter y la piedra filosofal", "J.K. Rowling", 336);
let libro2 = new Libro("978-0545010221", "El Señor de los Anillos", "J.R.R. Tolkien", 1216);

// Mostrar información de cada libro
console.log("Información del primer libro:");
libro1.mostrarLibro();

console.log("\nInformación del segundo libro:");
libro2.mostrarLibro();

// Determinar cuál de los dos libros tiene más páginas
if (libro1.numPaginas > libro2.numPaginas) {
    console.log("\nEl primer libro tiene más páginas.");
} else if (libro1.numPaginas < libro2.numPaginas) {
    console.log("\nEl segundo libro tiene más páginas.");
} else {
    console.log("\nAmbos libros tienen la misma cantidad de páginas.");
}


