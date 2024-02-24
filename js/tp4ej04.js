// 4- Escribe una clase Producto para crear objetos. 
// Estos objetos, deben presentar las propiedades código, nombre y precio, 
// además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de 
// los tres objetos instanciados.


class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método para imprimir los datos del producto por pantalla
    imprimeDatos() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio} pesos`);
    }
}

// Crear instancias de Producto y guardarlas en un array
const productos = [
    new Producto(1, 'Camisa', 25.99),
    new Producto(2, 'Pantalón', 39.99),
    new Producto(3, 'Zapatos', 49.99)
];

// Mostrar los datos de los productos instanciados
console.log("Datos de los productos:");
productos.forEach(producto => {
    producto.imprimeDatos();
    console.log("-----------------------------");
});
