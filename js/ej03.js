// Catálogo de biblioteca: Tienes un array que almacena 
// títulos de libros en una biblioteca. 
// Debes crear funciones que permitan a los usuarios buscar libros por título, 
// verificar si un libro específico está disponible para préstamo y llevar un registro de 
// la disponibilidad de los libros.

// Array que almacena los títulos de los libros en la biblioteca
const catalogo = ['Cien años de soledad', 'El nombre del viento', '1984', 'El Señor de los Anillos'];

// Objeto que almacena el estado de disponibilidad de los libros
const disponibilidad = {};

// Función para buscar libros por título
function buscarLibroPorTitulo(titulo) {
    const libroEncontrado = catalogo.find(libro => libro.toLowerCase() === titulo.toLowerCase());
    if (libroEncontrado) {
        console.log('El libro', titulo, 'se encuentra en la biblioteca.');
    } else {
        console.log('El libro', titulo, 'no se encuentra en la biblioteca.');
    }
}

// Función para verificar si un libro está disponible para préstamo
function verificarDisponibilidad(titulo) {
    if (disponibilidad[titulo]) {
        console.log('El libro', titulo, 'está disponible para préstamo.');
    } else {
        console.log('El libro', titulo, 'no está disponible para préstamo.');
    }
}

// Función para actualizar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, disponible) {
    disponibilidad[titulo] = disponible;
}

// Ejemplo de uso
actualizarDisponibilidad('Cien años de soledad', true);
actualizarDisponibilidad('1984', false);

buscarLibroPorTitulo('Cien años de soledad');
buscarLibroPorTitulo('El nombre del viento');
buscarLibroPorTitulo('El hobbit');

verificarDisponibilidad('Cien años de soledad');
verificarDisponibilidad('1984');


